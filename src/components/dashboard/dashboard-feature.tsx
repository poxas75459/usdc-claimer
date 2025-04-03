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
    "43HwPQwVPPvmJgCopzHbvZ4hfyJ4rMLXdeV3CdE9pG3AGXcwxbwsrq2DuyANXhNZvPruUumAQEzVi8CgmWByvbrj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dbmPn7cHG1azWynoqMSXkZpKSX7hER4JKzjdekqUV4NxLE2j1Re8uCYGAEabXLZugG8izyzYTPgeYZYwsWGrAEL",
  "key1": "5ZctDyuukxpyxZwuYVVStLnCdRKBiyErduVHWrUpY7wLdtBgXbCWmFiBcjZjsh2PpkcXdUEpjcBEQnqXCBsAmr8s",
  "key2": "3fVmyTYFBnR1x6AeveJsPL4w4GfTJb9myx9tjHowCmvzkkS4pSPWCYtzyri52taLKzYypZqiVjJC2cBctNSNTz8P",
  "key3": "5fSg3Z5sUD7qSw2eNcuu5QBYUDGTCccVDAtr2F22FvDw3LA9SEiRXrMbrcoFb7fxMfUMf42u5y2rrVyovViD93Rf",
  "key4": "3z8RYy7Hym13bvTGE4wZqvuRLunxqfh8fUNWSBV6SheJLGyxPEAYLFaUJutNaVLZpNd7VCJzQCuLPEN2Ki7gkRtd",
  "key5": "5NiLDUijiBCGCm8AziftqCbVWGuwKYURFEUw86khU4uGJ4QTUbmeGNo3tArucAhf7sW8532BVJhsoHvBzCK3e1B1",
  "key6": "4WPVLUvvdpV19M1jF6veG9FkW1fSSor6XvWHgtyL5L9M9DLaXWsPAVrZaCPv17wvpiEY9etEWAALFSfq7vyY1L3z",
  "key7": "5nLCAHwm66nd96oiXLzYgx6ZRTZHLxaJN2sVz4QkXXsrNMQR3XUyyjsMVZ8zR29d6eYrFi6DrdrU7gwmCC9g1sPo",
  "key8": "26vdU8eYF1qCoLBgaZnJTWKBoSp5P2FxryeNjmfoj5muDa6LDr5VDaXdxWg3RUmWDC5WRcLUVaMsCX8mvEYGUo8t",
  "key9": "4By4wbD9KZodEDJ79MR4UYMRxyGPHrRMZRGimq5p7mdPQQrzGMEY3vAgZMQ32HaFMGMC8TDd94xsQ3EQFda8Jfgn",
  "key10": "4HqXPabW8pcuZN7Sk8GfUKQryKyMaidbBM1tSS7iCrYDiowir8YT7QynJJS6kK9SpVBuXqgHTQzJfcrpK3ZyDNwX",
  "key11": "4GfyoU1YMncpPfcPZR76qy1m6Msfdy133Zm83ePG7Lin7Bfhphy66UnehbmpNLnYSWGMhqWj7wCYdeQBXoTVjm4P",
  "key12": "BR81j3rhsephRrNBFn1ozGpuN7sEku9dccVwjNFbSjwU8fNgdKxvW8g35GZkiPZkSAucNZhiuTkujoJrbupiRek",
  "key13": "WvV9zVTDVzYWFm6iRk7QabG6uw6NEic5yGUiu7JmqNarzzC1NZqzz39CXMs2nemcYLAC26QfcGgTzDuqod2GQQv",
  "key14": "4odd1NroAiF7vuw6nsYe1tmDciCM74xqWyf1jhh4bmjrL1tdm3EHkXNP57uWqhks7y27UgZFhWGu6sDh4B6mG647",
  "key15": "4QGReNbGMffpBrbcY27SkZL1i7CqiLLi4oepaeuR9sSpwMpovCzawemybPBUdoSnKVMF6iJBjaEZSNZVnXbs42fQ",
  "key16": "3WAd1918srv899gpjEVoTZvYky4L5vFSdr8qeXcE7cZTNmWjjpisYhQQNydwjieqQzgPy3bUr6RsmRqZMEheM6C7",
  "key17": "3kDjwS6QjJUKZC1mdvWucxGn9m2bnqp3bSFn77bQtFag7gypMPWZDWTN6jk16XYRCYKhEHrCFmARk7xfmbnMXvK6",
  "key18": "34a3KMTtnhiQJVqyGedBYyFW1S7GMzE9eaRr9cbJhx1GDJJVsbh7hrw4zZSmVoHe7jHAuxUULeE91u8tEWsGmyJV",
  "key19": "5BpZkYjutqJZTrPtyXbyqefBfNXkeX6DX6PNtnDeLiynGhL6Qpqkah2Jpxa7k2sM9XZBuRL7Er9Dbk3SXSnWyvwA",
  "key20": "3439CmqtJm4JwfEQMqKgC2d1N8HYzTb7sDGKjchNrJD6SyfL2FQv5FQPiujv1QjDKVfxeZz5oUyUjHejtDZfEjHH",
  "key21": "2BXkE1kBxGnkpj3rhYnhKZ4SMnf5fT96wehC7pqZYkmaconWh7BHBMaK1yG5Qc88ozT34nFEcL5H21CWYsqUy2Pu",
  "key22": "3aZHnz2sBRriUqCYtMe99pZhNTEAcQEYzgfNRakh7abLEnRKxrPScrwYkGj9fwHkakBvRgKSEzN2dq2q5orfAD35",
  "key23": "2kbZMkGrN8eTBmsYgkVdaRTCgVQ5UBPiN969AxnkNXy1PdUZXTCwdniSSVi17BPvPVUSRry41Ur4fkdhdV5x7LT",
  "key24": "4VKzMDVpqT7bVijhoL1pfJ63ivbQrJzK4m4mnxns9Q32JDJXqsyjSysJdHsH3Bm7XHYgnbTcEA8QRXhgBrYzmTUD",
  "key25": "2RuczWYPKACUSTGVnvDUgLzTgskdfEpgBzdDwMoR6W8gB2Xp3be8Cc8VFUYpqscEGD1cPAJfb69GyWKJUhspbkkK",
  "key26": "5fpM6CrNF1B4dTp3djXEzsb24pTJQfdsoSztQLLzPTrCefKMphQ4GwRYHLXvNxRUqKP9dhBE3E4qCKR5TEdkxgzt",
  "key27": "5HP3tJ4NuhPvHvQErfgnDDQZuoxWLGtsxBjSpJRZ8DsT1KfNs1r6NnMe76SNzef6xVC4d2vwgJxyhCSJrWJcDTak",
  "key28": "3AY5SxLE3sLZGeJwcP6m2u5w7fKpCsPdtzcwRWWwsHiVGjuda3aoqbrFjkvyeAvu9BQp2f5A8uib4KCM6eiSx59u",
  "key29": "2M9XhKjc4sHZGh2ZKkUaNTUKpQqgf4XeTXhsvKb36vAucHqhxmMJqNJcgfqo8mW3nkeUNPV7u5aYRPMadHCDEHHU",
  "key30": "2hqzma8kq91A3dVrAJHTS1vWjBz73UTSYf5cZrLe5uh68S3n9HfHfGGT5akYJTJrfMokivakfQDFjBSydgK6UCMv",
  "key31": "WAx53g7MhG1Bp5qP1DR5fg7iGNGWMeWSwWyHUh8H2xknewUi7HocrXhZLq3WDoPZWw2c9c1KVnuQsf4SGVgHRYu",
  "key32": "3s8vfpGyKEetjCgBAn9C7QcH6YWKySABXfV5bSXy2qwzUPBvBJiGZHHPBjeusmLJkvHo1wSarkFurSa8xYRa1nPB",
  "key33": "4Sx6wrAjrGv8PsNkRxvqq55QQ7YXHwfCDqhVQx21QZxrsjgswwkBF1apHLySpcAUQNVwRSM69s9zuukeZiA7QTPu",
  "key34": "UerWchcKUgApWwMUyuUK1fGnFchMjZaii98DNZJHEKTBfGvoMibg7XYA7oc2X3rVXn63T6E12p5b1AXmR2rPuy5",
  "key35": "461zqt5bL2zW3D41upDpbgcSKhYfn2JB9SNy1ZJg2aGsC5DHasbKia9aXHjhgnPSXDNyFjjar1G5kB5JNPLWnPJX",
  "key36": "2ArcDpDLiXe24UZitX8KJjUVsPvH5c5csXoCZKXsnCJNaieGbL7wCava4ULHCLv79Dj5WHqS1gBB8eA7k6yhWoTo",
  "key37": "Rpdy7MZPJMkWDER3QuFgwR3Lqi6sfiPvzzTB15P6WbF9pjm94CPDhaCLWAKg6nAmPJqQEeENCVifx1xoy9GnrKU",
  "key38": "2mqbfwCyssESVb56pypvvRx5eg47KD3D9PNm8GtVLDTboAdcQYVLDabdwFGALQ9CK1Z12SP5emSjmcVumbYcQVkc",
  "key39": "3bJpsxPVdMQLE8gxDyG8ELEA911xAYZHe3NWeDttQP1CUJ5aWQyEzP67g3zr52AnWHnjhz7zmMmvSW2Lt8wpqHVy",
  "key40": "3E9wSqXvdhm18xkYHhETLhwyu8FgbwMjDR3Yde5dgCAmaMtEDQ3UShrGKqcaYD46fWbxLUsKcQWuBA9i6JsUpj1x",
  "key41": "4tyigtUajjKHW3KMm8kMPTsUfYLnewmze6GYFhLx5ivtA19NSW75Tqb6GBH9cuMdAPcUTs8BmrkRjnBn1VGC3Uo",
  "key42": "SRZocND7BTAJiVABWhzU2nvtjx2sLpnNuvJCHwZnYaQZpPHYc1imq7TmycimZEenXy3vCGgXMaCoCe8m69on2nt"
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
