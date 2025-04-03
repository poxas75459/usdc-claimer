/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "5Vq2ZHYMqH3S4F7vgKgM8tnot6EUdFYnWqhbgFy629XcfmVzUr7GoQ4VNDy7Z13XUpccwz81NPhfSY3y4VpGPkQ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eEHB5wuE75tJtjKUYmYjjuEi1Hxm4hm2RUH5UJ9eYgiVNQgWigp8mwATCfr2w58FTpAX4soQBpM5qS9C8gXZmDB",
  "key1": "3qZ7E3P5ZVp34GL76aVDrs4yDL1LoSTUmaJn4S7ZXoEAsrs3MYQTBVukD3ZQMMFLBXKMTwNTC8Vsr4jrhigKQgd1",
  "key2": "FTztsGt8gRok2VMXwKEbjZ43k54g5fQN1CwehJX3AKjmkHeQwoRdSV8zgiT22e9vtx344NT6duuUAzpUXaMc9ef",
  "key3": "3pWop65mripnbvC2iiUpmGEzM8RvD5DQocRt98yAUzequPwNsJvMU55QMaw5THaus7R6F5fiwp3mBvNXSdybtaLm",
  "key4": "3iFUoRecwpJ7ARjjivmnLRDXadXH7dZrUDCFU7y6CybKf766MGFb61tE7qHGB4zMBZsPsB3XXshsRnbZW2BAq9DS",
  "key5": "2E1JVyzBZNSzgRvdQcW1RNpyWsLCjuFeYd5nZc4MZxcAHrjSBEd1XNaF3UPw9DBqd8UZk7hFqKPTyzaoTXiAJVKu",
  "key6": "23C8Twr4UjzNrFg7k7FtmFpXTuZESzbVYWssLyc3VTK1LLuLbtShJaSYzzVFwHCa7VXFKBaw17C3i3ogKZpiTENV",
  "key7": "4EZjGnG1zKeAHnTjwPpwoG2sRqpZAGbA1H8eAeiFspMxpQiLFHbv3J6i6TrCZdY6qUYoJrjnXycSn2V2fPxU5WdT",
  "key8": "5xM4HYLKUYKnm1j5LYpDKyG539Sg58MBqnbN1Sztx9cLWXTjbLpFHPDHJB3DY2TKEygET8W3Jc3rKby4WiFsC6Du",
  "key9": "3YWHuZRgPzMSPtj4spSq6y4TE3S7F2uqdjdW6ztE51ztaYBzJnsLvsps2os7CCJKQcf35o6eKCU7jmydgKpjG7RQ",
  "key10": "s4mRb9C43xv11B2kJCCVhTA5gkeCujUFKGKJamJeGhiNCFqA83HP5G4Jxah8Vg4CxHoVM8bccask72fAaJbLnEB",
  "key11": "3R3xkcdD5d8u6g35Eyf3qSrFyzKKgdTEWnMwnRXziryZKydfF2Gzo2J4prQhLgzW7gjDsRDEjRtMasXsaEqabW6m",
  "key12": "5o4owaxSWNUxL9D93ALe8vG12V6MNEGYyLUtPDnHDYMVDFJ5SVVW6rzuuzhA2DWBiVeJ4KUD6VfwmgmzhDgxviVH",
  "key13": "3vjRzRDrj4K9iU8UmyaX5vo6CdsK8aG64UmoazsDkt76bRS4Fsmra2EQYnJ8egARtiDyD3iGoXVdSJf2ArdvCyKb",
  "key14": "53WLA9W4VwyzmYooj1JXLJFu3r7zRwS7rL8SRgk16WfSKJ6Qba9QCsik9wsLoSE7xPHWrSTrDTiyrmGLRmaVijvu",
  "key15": "4MjPHPbiWqKZ5Jm8CcY2mDUThtKTvJAmUrU7vXBiqQJq5pWrSzZeB8TXVkxN2yUTpftCD6BXAZH53jLcKkJ5ovtD",
  "key16": "2FxSfqLtzc6bkG5DcfRkdtdrx3JqyVB96iUhxA2bTLaRzSJZwHRQiXmwtocf2ZyWKtpaKQ22Uu9AvJXCipzBnPFZ",
  "key17": "43dAaQtoQ6gwXxHuJDbbe22aJYnF1wrVxx2EnyhMeBfZMUYmiPSjHcwvhbJJpqK1ufUeExs3FGvtBJZvN4R34TQF",
  "key18": "1baQk69JRn2chegxaRRFaebwwF1mPgqB1UQRXhMQ4cZWz9rzhZXWeuSedh61ZDMFRRK1Bp2Se2qnk7vfUiUNF72",
  "key19": "43k9muwVKMDBmCpFDw5yADACCsvzW8gZ5Nasgw5vFVMeecUcYkAuciUQeVbgqTwZZ6P8TfE73XJvUoDc2Ey2Xzy1",
  "key20": "62LpxSt519QPFn6oeRqSAVfNEc2hutbTLuA5XeLgK9NAj9fzqxtjhvqyTu2zP39pfytuGGEu378UBRFXN1MzzfFP",
  "key21": "2wahMwFEr62nreUZFc2uzKqDtBzuUugAwyuD2JWY9VpLfBa91mABHjDtnjHughDHet3q8rvAvuADPaedXzBF5YJp",
  "key22": "4JDCZ9c8wAvGar4Ho35mBzJBYwxRf2i1eXB2114WtzxD3Z82KNxY2Ddphd5yi3VgcZ29CCFLHW87zBr5NjhcmZS8",
  "key23": "28L5sJuvWJgxwk4Z7aaWS8V2aknV7qjjHbYFqFUzKteyK314Azyp3x6ARZNrTUjr64QtSP4xQaaHoKixUx1uuRbR",
  "key24": "yJWijRqV7FEYDkCjNrQhZFGFPwF9Kh4xbx8cZcyV2fPBDP1e2XKhCtmEQmn4Kk6f2raK2SGiR3vJnP2YRJZA2FE",
  "key25": "2A4PcmzFqJTpr6ninmEkFRCJdNdLQAw3vR5EHGBfDzbH9QXzJe99tgqvjgJEgy8wnTZHphCwApcquoiqYwJjsso5",
  "key26": "4REVauJ1iRaxUHGvai6zPxaKMnW4PzBuooevbQAUUKjaSJBLkF2R5GG5j6ek53xw83xywbjuVoi6qRzQg4hpbP9q"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
