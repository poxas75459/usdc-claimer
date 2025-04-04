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
    "32eq4CYwBNJWW4NyKjm4cPa6tUFj1WqC7ErDKjL7pxfbqQFdUBpxPJ5GCN3NHCAsQ1FzcWFMwwiv2uVP6kEoAvJh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sjf9PZhMymLHWy5N1EXLLCeFPgnwYhrYZvGGJxd2CJoYri71XKceQULZ4TZrYoPAaqxbY5F6kGADHpV2v6aENA6",
  "key1": "41pHKWV3yDKQDPEdDRNRhyH6TtKq6nKG6KxUKABqZCnpKbU2H3YUZC1H8AhhuNvzC4Z1hgqR7UPNAYTBe6azdrcf",
  "key2": "3PGCh4WboUtaW6eu5JdGdFbQzJKdxtFHV243tRGeQ4uwYJ8HeZbhqxWVHW9CHwWGd6XrvPVj8ae6bQcdSPE4cDsV",
  "key3": "4u2RyEBX45KzS72QUwdxvJ1KPFojvTG1aXkEsWqieWyQS4QXpsS6kt2JUZccifXHrMchtZN1PBzvBr1ZWTcKampV",
  "key4": "5mNp6XP6mYUUduopLxVeCnrVQqpZfsH63y3iZ4zA1YAp9mMag53rQDG6gFxZ8oV6sm6McBS5AAFBrUqiThmnCbvp",
  "key5": "3cUisBwQyCftKqStSUBXyrzKdQuANod1WnQ4Yzaotd5rnKwrFfukM6KLMiF5W6hDogyqc9cxi1bq8MEGb8hzrPR8",
  "key6": "JQzttdZbGjCjEvggTJ32oefR6Lx4RzLVQgaDKkg5p3j9aFVCFxnHoRDXqxtkLM5M85Qqt4r1hEMH5hUkHevYoKD",
  "key7": "5KNMv7q9vHcnD6QJ2siuxVNpiXGHjB1RdJkQS9WTxk8yW5SnSa7pRaP4YndASavkYnFeGtL675PnBLnhBMmokHkP",
  "key8": "2RNDoXvTXT1whi4oLAejS3kw28Z3vbDY2XE6qZrayaokFWQBGjpLGyAD5mv6e9kNwCAZuPQD1pReC3faF6X2peeF",
  "key9": "yqut6Sru6sDsA4R1J8iALsULQ27u9L3eY2ScJ7jMinJrca8WpGu3o5gdy5znCXhmPMMZdAa2CqwQbTG7bUnKqLo",
  "key10": "3Ynb8LJNnGN9GvN2ETX8gPyc4AY6ESyrZu7t5iXvBgc89Nu1Yf6ZSQYxNGBNALz4Gqeu9C9Lh234PcZqaVcqzTYo",
  "key11": "neaJhcMcCUbBUSi72rB9FFDTNTjMmWGQgRtGLy5eJUWoM6zEkDutBwXusQ2oN2DtUmg8eE9yfM1utpBGpY9NAPB",
  "key12": "4jRkQqegbozTtteDBryRJ9gQeHsmWQycDhGCEYNMjBxi7mqDYFDaNWpKpcQvbmXHGdoFgJ9WPbhBgKHvrVsTuDEx",
  "key13": "5ttyTRu16miCCTEy4Y75rUCCiFrHAMtAuh4niEmK9HkaD6DhhcZi6EH3GxdNj359nXSMRTzBTjQVam6Wnwndb62v",
  "key14": "61qK8nkLdUF5USRnZS2ceNQ66tHx4t1zoCGKWixgnw7FTgNjAsmTLK7Dq8UL4bM7YVW2TtR6ccJ6Axt5SKxopZy5",
  "key15": "23oE34iz49Dvrw6tm3UrZVkPM287vy8Cr1CLWLqsfXSit6VoE84msv1aDBsAECz9LBH88t7uGcJAqkoaXBcq81f9",
  "key16": "5xrgLhzXsnr9NJCrmuRTWw7BKSNNkvvJ6fmwFVEqBGdFX6inBvA7aY1n1AanyVrUsCkXE8bHZ38MFtcUD1XcgDET",
  "key17": "4VQWAUSGCZ3opaUvaxghSs5Tg2zibSKs2bqkEVD1jtMUV9c75rSUBEzFrjPueMZqTnRu3YuQPKFpsE1Zwqm149NU",
  "key18": "3EjJEqMsSEUVbsdWQjbjMNMLi4vCZojUuAh3ZLWn8sb54g6YzuUbphCD9gFsDHvbL68KKTrCmWfscYd6HWkW9u5p",
  "key19": "2fodX7xmNa2SAzN6QvmpLcfxAhrHF9JquMBZ26Da5dDP8XZ8sxn5U1Xt3VWZySBbTWmCvWgD2Gk1ud6Eh2p44ihq",
  "key20": "4HyY4rNsdYQ89fid9zyUwpFADX5hPoxsyoA37QrQFSeTpZ2RQ9BispJx6ThaPN3nSGoHSA6DQ8758cSJf2nQEoAu",
  "key21": "8v2dU96A2PM98YdLDtocUAwFWe9tro1hNa11hYTH33ewcoyDGV9qN9cYGTfL3SVAgcZShKi8hv4idvEjz8EkkvF",
  "key22": "3VSBWVPqMrCadEXP7dprp6uqCzPLn2vfsS1wkrhWQKaUQJ4VVD9GSWSw39JkEz45L748pheAQy3MNmwj1omXTqeG",
  "key23": "f1W3dirkeya15BgkgTuabLbjPi1jSRJ8XKPtNQNG6gaYc97qrpyw76a8aRSgo5k8WmYRZAfFoNUaSuSm9sDESSN",
  "key24": "4BejiPupin9pAGFsyUzPjMLfbFgYfsTEkQ3Gvb8WZVS4EB4jzHXgLZn3t43RyKFNk67imPdJBWTEHtTsraEEj2Df",
  "key25": "5VrYg1cQneWKapq6pnqm2mHqm1EpXcdKYtCnyBhCeXb7L1A7Qe9BYip6Cnt2yVBo5fSnScXwyfBBtv174okWiJt",
  "key26": "3WJYquWNuXFx4EPvcArHp2uzmMaBuQ1voJ8geR83atT2oWFg9DW3VWH5kpHFn1goWHiAWen9cLHCZnHKFh1DfE7g",
  "key27": "4ywKLD3pm4QeUdND231TkMRoiSC9WdrfY49Wv8hcmjXJr1T8JjjbkXJKQpkXUChkRDFgaVBLmvrTk4GzN3CAMshK",
  "key28": "333i584SuALcp15iun7oPqa9dKtJa5pgPdXbsvjZb8wRk1xvcF8qxY864Dg3qJNzmiPfU1qAcmTT3Z6qj7dZZk3P",
  "key29": "4NiK3XsT2tYCGGYMGiGXtrARJ3dWxzZo1EpkdVNgvmAR9FFw6ZsWwqXSLX892cAdMYTARS5K7HhJTNqzT7k2iWpa",
  "key30": "35qVsgvSt9JvjqgjUYQegqx7nKwtTPgRXLUK4pkLPmtN9H6ttaR8cX9dPkUSb2rJnCycaaztPQtenEq4nxZqcURj",
  "key31": "4CfuUmCamNU5bRUAMXKhRuyW3AbLDgAVUBo6ZYSfLh5nY7msRFnmrbVejLPUjenmRKRcPnmUGzELLwxCk8q5EreP",
  "key32": "5RUn3VmPocuWhxrxQ7nt132xiEZU86NLWz6tDiEHWNry5VMCNouw1mWh4cQZ3ouoyeVXge5AQUdxJV9yy2F7xg6b",
  "key33": "58U1mgxzPbzCJjkBViDazuPPSHQvXw2cozfvBj3Kf79fUuNNe2G3dZbzL4ApPMY9NZJ1pQLxuHH9NFXR5EfuUTvf",
  "key34": "541BFcqzFG9duFpYsp56NxdDRS6n23V1hdXiWEbYmNnqPrg5FDsgVD1C9Ja5Y57yeyMtGvJpBU8QdZDwqySi31Hi",
  "key35": "3HCyaD1SNgK6mznijeSKZ9QBeboMUDLUWEMtffJScDApXX4fcSpis9c8AhDJsZGqgNaJtLzL5o48UEKsoqgKUpQ2",
  "key36": "43HKYfENyS7XNRkbygQgZuSqqM8MquZWqMhDV4osTBhasyXxdeRwpHM4BPC5xzsQPHtRcQJUBqQDAH5SW3pnsAyT"
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
