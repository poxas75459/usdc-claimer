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
    "5ref91WT3Pk2cnoapxqhRqkQiKhw5ZreC2iXyhB8BQzdQmm7wgfCyiocMexSDwiHjCxPeji3jNuTJkyGGN1RPsCa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jjhFGs5RTYE63S4Fky5Wa3kNFu8c19gMgtFbUugVzp7kELYZt5imxvaAqaeLjchPmJG9fQf5Taw5knv3tZLhiNh",
  "key1": "53RHPYP1Q9vsZmezJAHZcgDBWqeASks2aNYbKpkgGqJvC93YvUtUh9EerNvGsftGGEaBHtJ3DRDxmbuX3t1msZpZ",
  "key2": "2drP2RF92jmVvmHQwK2bJBsrZiipYznMFhAiAeP8GPtDNPAUPHnh63DcSQtmgPwY71UwAVUGWg6vmyop4vpug9aQ",
  "key3": "3NuUARjAFbiSBDV6TuP6DHnmAFXC42ntcy8MhPip14AKDPADZcAK7t38S3GRV7c2Bddh6KGpVpiBfbhgTzcgGjUr",
  "key4": "R6BVsKDof6AYcqrFVFMjTRRPugrhEnk5fLiiQyipsGUTHKxjgMGanWLVBV4TiBMaeb6ASFh4rPYHz91E1RuSbkf",
  "key5": "tLTBec96pLrD6avLHZMCPRxaJM4TcdAaNpRSJjE5BYsG9bxKmxmKahq5fznzY4LZbA9QN9KffVDuimG8mGLFzW5",
  "key6": "4oQChxqfCb9gnUka3x8rKannmx8tkcSXsxUZN1VLrhjqBH7wgvUzABhPoD8hKiSkcHyjDxGNyKgVczLUHzh7Kh1h",
  "key7": "52yD1fES12yznktUPR7oEmVPeEDyZ7z5VxX6krSYvdmDxYsCUQZCJcpserkTBzvonQBsvNnP9BpsQs71qN7oQzkQ",
  "key8": "5FXYFwVCM3Y9TbcAfHshxBh1YdqCqSUP9QKSv7pqE5rosAKJ19w9QRR7jbjMazaf3Xej5SvCbmYbeeWcdgi2PRg2",
  "key9": "3yGkr1vgADdLnrjZrnic9pv3kxN3aG3y13cAtGPo3Za7aDEUH3W3fQFbL1TwDA4zC577cqyA4jJ1XEoCpb79p2BF",
  "key10": "5ZRokgEwY9VSXHw8hDWfTizeUBSBAW35MAYgVm6nKshhbqCKcNPR4qHEnUZ2g3AjoonFpmWXsK1hjK3Edq6p15CR",
  "key11": "2KkDdxfSspQEq9nCDGTtxo9tgWtpUdQ3iu9MERLtBgXjnBFi2bKUuNm6M61DJwghS4ahAZuoX5wqabvhHXr9A8Hx",
  "key12": "4dPPTp1RZK2p5w3ThBx77GiLhyAphjh57MZiisbQyi2RsCubX46fSbWkfkyTvXDrnim34JEzN1Mz2Gv3YieEz5jU",
  "key13": "3hYjpx22QtRoGmALpYY1TGKeebyscNVJ4JKh5ekE2Bi66JY8mxndipst4SZrw8DmwWs8t2gt4nkWzL42Noc2ZqzJ",
  "key14": "2W3deT2efkP1fzAwn9PnSDKctj3Yu5deoN5cgNC4WPYMbts1yUeFvWg7wV6qeJP4JZaLq63atLK8LbUDR2uiWgVG",
  "key15": "3r8RgQjYnJsnd82EBsuc9h8xSw2QZoYbiXRJ3wt1Y9utyzSKbKiSd5CbAQpBH1X92CVLstFngZRWxAj6ybajmerb",
  "key16": "2WeVjguCSv8adv7CwQLhgwfnqbLyYkubbTFhHhAZUJApwYLQn9HAK8FENKaK9SYz4DzFdSuj4R9ALFjQpLGyvsJv",
  "key17": "43BVKgUE6i84SaSxPj25KC4y6P3AHczg9WSP4Z2WonX8Khsvc1LCScjf4zzVkpFpE63NGFXRmUqMT57NyfapBYQY",
  "key18": "2wNecR7WyGDTTdSTimoUg6D896zKgVcWcaDyyKP811kGNwy2a9DF5yEySt3a61TSG9rcDRipoAV8k5fUwbte9ppm",
  "key19": "24QfyV6ao5dj1yrqNd3HYkpNra9quqx81aKrmcv8L6BU73rwet45UniDE1DrXnBCy5qhQDLLj7hmHcvpF4vhfX5U",
  "key20": "ZPGFVzPiKxkMS24vaVCHwo2rZiyn8ziryMCPuyeA1ALYrH3ZR9r8DtGJZaEot189n2rBmyDKBevbmafv1mUz9pH",
  "key21": "2b7GKyRGaVTyv21omy1eA8WvQUkKaQiMyfSqBMqxJjfWm7ha5nkq9fxtVqQJwHKWhLBSKn5CqCZRizWFoir8gLqv",
  "key22": "5kNg3gFiUTofS2TxeUq4C7f79Q8nz5jVS1gxmVprqQCNhszioCDfxMnoGFfsSFp28kGA4hc1WkGE4jptreNNTvfx",
  "key23": "5u9DVMPF55YxTEnjcGpkicgM1E6G5yVTMQLEGa71vopyHKMZ9Vz1rMQ3vgcN9TDbYvVfbs9wst2EBqKgoAcUHawf",
  "key24": "3upAhMYo1hgDBtY4rVuigFFBFg9ZNMCjq9YDHcBx583cGMokoVrurHftH1wQBqGEHfEqJYGddCe91f1dtWqxZihc",
  "key25": "2rmYc1dJAcfEqwq7LsjEiMkzqYwfqpcZLrNCqrHo7HiXji4rNtmzQLgBCTbht8nBLJbuxwRmoPddz3cvtftwsVrJ",
  "key26": "24r8DTCPQwonegeeMEUBQf5tNa2h5JGfeY7Sy5VYP2xgiVrmpaP9QttJ4NswhogJbvgvFSBU9MpKZP16xv3mLvQv",
  "key27": "2PUp55pBGNciqboESoMior21j5ivDTG6JPtjXBgbvNe2DJfVwMFftJTqDh3bWantQCGXgxfDNAqUSGpH5ZqzR8WU"
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
