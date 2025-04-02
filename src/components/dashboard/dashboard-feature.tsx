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
    "oxRsoukrRLD9dJDFj2Hbw4xmmNnE9Ht3F48KyUREtKY4THnRQqgWSMtS7EUZ1uGRe3ibAkZoX3QVGgedcWAPRPg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oWKGivHztWSr2cFkDAK6EBY7XUCfRQiYtyK9t1mV58jCwRHMoCBt3xwadKiDy4zthbSg2URsbVABV3Z2v5UV3Bj",
  "key1": "cXMywVtHDngVcBNebyoLDmJxa19VrdWWuGW9NTsDcVcRKHe5vZz2VpwLtWih5AYMWavaLBRzPibpRHEogbgsgCB",
  "key2": "zerbCjnwjQno13Fr4Psbzwqgy9NCELJpBpnbswww2PHB6GzipBstsLjV5Hn5dFiNipDxNyfpTSsU6LRRAuUihRJ",
  "key3": "4mRuAmseD8jkeSZic13Ucyo5gPGBqFLURyqiNdBd3uqtjo8EN9QF5ym7ibfyn7hsNqE2PpR1rV7ETrBy8a2xkEsq",
  "key4": "gsbAgityryK73DUwZvurpismewGHtpWtbaj8fGCGd9eBgVVrv5VEhM2RuxHJTffpHxyf8RiLUUkDyVE9UoJmEEX",
  "key5": "LRcUrBmWN33hA2NUSPK4WLqXg74fvBE2hQpLwfpAPxCEtNtQLC6q6CNNNFKnCrAdm3FLd3v886gz6EroCP5dDta",
  "key6": "27fKT3s7VVRdX6XP1QL6cxzgA1yWVxSKWtMGxUtgFSbdw7bTQrp3Kn6MJ2sGe765zcY7TZMn5Dttz8dfGPb7hGtp",
  "key7": "WoBMK32DA8dSvCR612JazCExtZjFbsgD2PkDD1FpKrDj4BRoTAL8SZBLUvVAL9aMEGnEeRMokKpF3krffwKn7gX",
  "key8": "ybnJbBK8eYVM8Z8ooqU8SL5NWcR3nRe8ae16xW6YLZoe6KHuWzdVD5hGY12jqF9A3VMpryT1oqdYreXbSTbryfo",
  "key9": "49pj4uC9sz6EbgesqPp2dUTW5TsN24h2SyqCMcGWqH2vJCGBoLZ9AprdrCtENQwmxmDpsHq1ENHa4QQXWvpy765m",
  "key10": "5796Gg5FM3kacCZk3aUFgNL1xWLjeSrnu2JrUe1ytHkMZeDLTxbF8wqNAV8FiAMwiMSPdRb3ohBA4e5A4TE5WEKc",
  "key11": "2e7bGwvXfS2FLPREJv9Vi46yMJvEDzRDfNmjhuRcmKm1CTZEVJYhaSjeo45fomVyBskzZnxUE6sRK544JgNRgBUs",
  "key12": "5y4vBpjdFihoU2yH46ziPkFGFBqJktjnkGiMbnYbiYHUTEQtES4ru7zsM71yeuCbvCXQpRwfFnYiQZtaonwNsnSp",
  "key13": "5kVzRdGbJDTKYYz9xEBNW3GTG1hBUSgFUeBHrp1j8gen1woDUsjrC6VkxXHDrbBxtbMbe8Yfx8UrxryxpVpBNdU",
  "key14": "3noYxt1cxNVz9GuWgCxh8k5NMwa4g4rboe2LQmcQ9jqYC4Ftkad9fbtMUEiJQYrFcG6R1YfPB8dTBymPe8p37eRP",
  "key15": "1PTkTjWk8z7nTLQvQPBdTGNF4BbAL1MMoSN6QuBY4f4U8qAPvgqHYGGHPY2S4M6Xah23MnAarB4bgvSfWHXqjke",
  "key16": "53vQR9gBDzYUQcYf81Ardf2Tx9xWAK3xEKkAh9wgmeRqjQuDsMVQDB2HjXNFCCnKe52erETsveCtTViLwpFeV3qR",
  "key17": "3xJKrPe8eEf2q9pVaQqzU5vvDcGKZp6eWppsScpiLBzjCzjZ1oxtk3TrrvmYm2PYrtf6MthFXcsxWoSPwpNsk19v",
  "key18": "5UeZ5iSWNVmUsUYtVKHHjZqmPQiusdJFk3cfXQh7LZQzLZzcDUFWJXpeXSJhE7oBd2FU4hUkMY4TVKawuN22pr5b",
  "key19": "2xPnLiBkEhupmnA3ckz3dgRm51PmRdsSe7B4PeKPRmnRbAs8Sh3Dh68Nst2cM4YT6NyiLymemiLZeX9XiqgWLyZC",
  "key20": "65rFbQJSVTFbaPpWC6cFoBbhEPCZeXTi5oDhgZCGdGWkJiemfLVw1VComcFGmjUjxMiGG41pUfRcJn5eL8XzuuHp",
  "key21": "3PU1g2NsCdpYsF9N5nHjK1QEiovNPyMvwvGP4bmj9yHB8m7pSBBfBohWF9wZprDPsq6ukCgVS59J3iQoyxeQbdXV",
  "key22": "2mC5DD7GH9TKFa1cBLYn2773MHf6jnZBPJdLMCxmmPC6eV2MyWPFHoayvC4TSFpvhfSyp7xSmALBTrAvmg5tNfY6",
  "key23": "33mQ4sbzVNnRD3pRrPfatVei7Ff4DEuppktotUdRRLpQMA1pSyopKXrgE4ddvupfCZeTA2bajdk6AdLms44F318e",
  "key24": "MvPDjTpGEFwYG37RZpnDVS8M8H2w7hXWkpVC2Z5PcZQZdAXR98CbKVqtFCHJ9kB6pFUeGP6RgL5XxQGLud59oso",
  "key25": "4LV7DjXDVgek6paRchtjoF9tRW36rVvDhb9JMKvCYE9JQnPtLPqnPSQ1d5V2Cn7m8zpMw4CKgo1HWqRb9MJ3ZbZy",
  "key26": "3fr16XkEJ5fytafu8BekAQPAbudEGyZ2xRksUTU2u8e7khwCiAT7QMMhJeyLPsC3gUAquTdRS4mEq7aX7VQbcruY",
  "key27": "2HswzUT6G3RnTRf9tddr3CwjKx4WAmNyVkn9GMkcdrbRV3UxCRoZGe1r8GB7vdtg63Yvviex5VkeN7Z2UUthuPNm",
  "key28": "2j9H6QTxUTkUhKtosbBRHhA15JbYenW2EexDuKK7V3X59bAtV8DbgChD9naw3A7Na4SKY3kVVSQdxCjJ9BAzc8Ne",
  "key29": "4RhbAGiTSpfLdaVPmTLnXo1ju5MD2dLX9v9EzBW8Aucgd6Naw1bu1SXjvbQKr2cb1xUHw6a6DjfpHNEF9g2vuFTf",
  "key30": "2o163aN51ioedqZiud1geHgVZzjpnegToWY9Yi8yGjGpYXDwMLTEMm1zcYLUiaKSRtkFubgpcBjagnpV9KzmNWuJ",
  "key31": "3AeoVW2dX2QJ6DDTNui9hanAdoxi3U3dxWqxoCfz9uvetq19MGCgbh1LfyjrnjPes2D6bfz2h48EwSut2LJ8mssG",
  "key32": "2vkfL1bUbCErqhSTVoJEHB27aMS8R7oBvoLbLvQZWjZa3kqjxSsQLB8VKSZHET1ymHRfGVPi61uLaFM8emXbUo7o",
  "key33": "4CLEoQGtbdErhLRmZKuurVabexqVRCUWeTUXWYWwtbnLDZV7ZqfYbL3Mfz64Gs88k6kqD5fRnixhAuriZckQFuVz",
  "key34": "NwShqUmGaDxmsCofTWL3nhJTuLZwQj3JpHk6ejpsuRH9reCe7aCXvZpNkq8wqQS82Cn8tqCa9CkzqLtYHu5XNsU",
  "key35": "5kacE13RkNqs9EUyVc6NmeK5mxd9bxnKi9YvJdW2Pc1LXzL8exe1XQZiVtKxxNPo5dcUTu62j6yg1rYbFc4Mof1X",
  "key36": "nTb2Qcxj11w9bo4i5UoJGSAARXVmqnR6MhbbWgtZUq7xWkeDjwS1wzKWvxr9TyAwmuVs5VJmYm8sVu4589w6xfV",
  "key37": "33qp4vy4PGMPgAnMcfYaeJxNf9qZ9wW1w8wB83X9JQxTBkWAoxyYRGCH4hRWR43Js6U7e9eo72BpwNmZC93gpwZm",
  "key38": "3VksW6UvVm4TyRbSDcBg5ozFVmhhRT6GqMMo3hcvnb8qRcXXmrcauPhdK1Fy5iZU4MR3Shb3QKfhb5cx84jAkfqV"
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
