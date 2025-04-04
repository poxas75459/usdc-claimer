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
    "MYcSNMPdDP2pHef1D1bvLbSa1nBjPRqJcaarPtD7L49dreGoFiH7V9NiZdxfZPC4ejNUBHHbv5s1kTmdiHiML9P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3igC6nb3UsApUVidbtBwj1Ev3f9Yo5LPE2sEmsfsRjpm37DCUq3AwPT4RgsmbPL44jxTPRoVCJsFpyKN5fHTnjmu",
  "key1": "2bJNdShHwEDCTDde1s63hHiaQdzmbDgH6NoaMMCHf4kCt8aj4WQ7FifSKcxvd8kTigHXH11mxj7dx7Erxkvb94uo",
  "key2": "3m8e9RQgyNpZShjm2qvvkym1kyh2Fsre6vx936zQexcyanVxFAKbUZRPxgPMiUAJEb9JpprFLg8PbY75ihE3N3D5",
  "key3": "4ZDw4sXSAuNdXUfp6JH4rPFT5PUWNNWSGXJ9L55FE3BQ2NPHNVsQaoYBDFmgfk56YihBLwuqHsRbYTR9WhrHUJGv",
  "key4": "4uSPMhKTteUaDcKckhnXH7b5saWeY4eY9Xgid9NDvgaQhLbin32kUqWSoWPS7MrNxq5y9QzxC3aaAEE5nDLK8cwu",
  "key5": "4DbkFoh9BNLZBF95dUjPmgyFMXqcHGU2MQw8iWkysAUikBxMFpqGto7MMHrFjdUxMtZHQBTE2PN4DtfRt3Mzfa2R",
  "key6": "33A3oTLe5AHK1E1WFDL7aqn7foakUuJ3SZVVHrTW3BB68espWiNHTXAaV8fyELZtfTboYfbSpNU7PLzwAq8oLukw",
  "key7": "ABB4kHNfZvTQXpxeww5E1AbchCz9VAzjwnv4SKcDEkskJyyWwVqqL4Lznt1vAmV7LSPYTHF4s62ub2W75KUjdc5",
  "key8": "KVVqsymapXx6L2PvmDJktt2vKdHD4g1ae431BX72TWYeRqSKpib8WRtDNRZR4eDCgLhABrczGNjoLfNUd373FiV",
  "key9": "4QEBuRLvoxMtE97DCUX9ata2g1z6DNdF2T1WpfwcN2BKjXyFbWdjLnhNiSiVeadUMhRuhEh4q2zdTUcQnm4FffSL",
  "key10": "462AC9AR5Bbsrngo2yebNeHw6ZggFf2mFNx8kPh8vFmruBRGcDG1nogXfFGwGmtKj97GRzP4iE5HpZejumMQfe5j",
  "key11": "gUQfvWfJd9PUMMNhVa2MaoBi6R2L6ZLh3DP6KrrRYvuehN2CPus4ZokfKLnFAtRU3qKAP74qS6MDmsWWGj6fimC",
  "key12": "25mCXjVMcbB6DzPx2cwk8EwvK8m5paHSGWdv2x7FpVKUuuMbGsQX7aK1Sbf7uwMhxWHMBshBYP3QpyV7vsceCpuf",
  "key13": "2Zu5gk4dVrsZ17nZPg7mTSoaXwE4Vy1gUSpM4AW6cp757MjjmNLeYxqM9CvHp21PrjLm3br29H8deXdBjkYeRc1o",
  "key14": "25tXe5fGFiEgWpzpbxrHvDTFDa1UBeKNLwjXp1BtSyiCGaiK4vdq8J6C4V2BfnfmhpDipxLSSqUFtH8sowX8GEtB",
  "key15": "3gmWpaa51kDhk4vPJ3nNsPgRot31UjiRGr6bTjYxQfUmpEjERpminmavdN4nNBAztSptkqd6sLKLWXX5qG67aVK5",
  "key16": "3w3nzJ4a1J2EyabVRbDTd3eL7JkYdQUvpjd6n7JMoEc3pP9zxSU5Q9AnNmBKU7oBkdL66HCFMMyZDpszrbF33zc7",
  "key17": "3yc1aBVLa1TFhTD3AqJjEXn6aeZKb6DMzQehVdR6aCNhwZPY89R4CewkNcADsGLMUyc11PQpSqhzpfhRfoLqwhnK",
  "key18": "4rNtpMbQRH7SUxpFEPkzDfpRSWTMHCGMb3u9eGoXLwoUA7hWKr1f2k61MGnc9SL1c1CCGhm8gpx9UhpZYAhWTp5E",
  "key19": "P7GjxjBPBuXetDUF4xjVCMmuUdduxkU9GzeT6Km87NpcA8EqbG4dAxg3zKQFrfKVpNZUAvuPPCzPuBvm8iUhins",
  "key20": "3FaMt13L5j2M7M4iqQ22x8Eb4TfFRy9QXQ5CbxFKYcTEjABosvKb3surpeMFSScZtQ4kjPZeTnuiZZsdibdG6aC6",
  "key21": "5sBADgYFLBb7k43dzjVZTURbH4anMsxHqpAGqNxc4mMfgE4zphdXzoQcCP196bUvZ1rpEyQ4m4CBosgEdRty1mMM",
  "key22": "558rdcAcQchMqjkFVLT2uedQBmDFVbKqNvKiwjhiZcripAYUsDopcNYMx3YWqts4XRpYJeeK6Swax2i94mPxDa1U",
  "key23": "5yfxNRi3rMGjj8LjbotYLEJtpze4rPp5aqBXTzE1waZFgk8F5o3Gj298EtMpXwtGHQeoeZ1ANrnrkv17DBhAzcuR",
  "key24": "2QUHLFkA3YJiTLXtzBfNTiBuW6kLdb113oTUasWoFA9hB5CPCuBPKHosygegkGvAygprybZfkKKafeiF1PizjVsV",
  "key25": "4vaNYmjnWv8cDGqGfXHzQ6uWQfW6RXQetRhG26n9qAc3xdcoidJrzhygjzHM2gtxpcsD7WFoLwEHAFa62jgqgtKg",
  "key26": "5y9gKmzvgXjLGKnsNVwL9mtYgu8eP9ziWLBMqUsix1qX4AYb8eYd88JdQ5df2ch7bBjnhYUNdKJcnEMTmbHasgSQ",
  "key27": "4kqT3vJ6p4uPEAepawLACZ61pdtfPrsNknKJptJfiyDkfvNr9wvPGwFumCoCyUEReAmqHhH1gnibBP3Ur6uHNJDV",
  "key28": "438FCWe93J9afuGmTfC6W1t8W1V7sWmUSJQGRPBJsaVMrB12PkdEePtw3mCX3HP2XnR3cNV9jnK7bg1d99spatrW",
  "key29": "3JkBWqFaQiL7zw7hPPknjhKo4TvAXEnzrv9qwt3i7YiKUdhX4q5PBuxWgP4z1kae9FsfJbdXkGQTKUi8YMtxZM1P",
  "key30": "3zjabRkckzv7VgziTCnsDkYUpkDnLytz72zdiEjuYQANiokdoD5TBKLX9qnPmV72AS7x78rW4ADPT9wQ1UnHg73A",
  "key31": "4239A6U2Q38JPKGtJ2hYucDwagXQKhxNett1jHj4CJHm6qdLcTw5Vd8aJkwSBFSvEEeScfkRaswzBHMgfNJGjfrK",
  "key32": "22LcRRsrYuLCD7R5voAXN6vNCqCwksd8anitMVRJZ8ZRWH37Yabsaqx1fwRtU7JLpv3EFEcaKSWny7wXYVqBNxCj",
  "key33": "3mAJm388myW1ghr5FWQNHicjCKbhXkt1M1uA5rnEYMU1W7PA3Yh4xQ7TcuMtMpoya2cGTYxdFHhjUiEsK4iy4L95",
  "key34": "47WvymSnMw2nUQcqrGnNgKhonNotp5SA62TANzxMmn2ZKJx21bJswCD5k5UXDynkt6pBqt5NX4mcfaP3d7Gy3Ga2"
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
