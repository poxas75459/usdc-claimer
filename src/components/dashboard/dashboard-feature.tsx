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
    "2rbxD4uV7tsxGUTN2n9KVnCdPwgkZhvFZeXf27P7CGHh4N8agCN95YChAStErAaDApgKWuTt9Z3CHg1nRA9sPxqp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ahpcETnEC1AHB81ctCUaMJWLwXMJhRxBh3ZXzfA29vrvUJM6h2VmFVaT9xscooNz855vXagg9iqK8RKKPxroStX",
  "key1": "eVssU8vGG84KehWBM3b9fDRTng6BiXdYizNe3qGuNKc91M8H6sM66MCoHd2yRVxiQHW2xvtfxTSFwN64XkoQ2Uk",
  "key2": "3yur3Rb5pvGwSV5WkQLFfSUHTVBRfGbGyRKevZL3awuRg1S6svN1duC7L5DQfkWpFqiRD6gSgi4kz1ADANLBNrqd",
  "key3": "2b3edWJARJv1mq9i7Cf5iME2D1uenjt6sef3RaA9zvBsRmJ6Y2DGqeMrwnfpX5n9FpH34Fvpt5Sxpw2h7D539Btk",
  "key4": "5hk2cSyFxbJmbJ5tjonsv77LPhHunu9PYDp7aMxEEnbjqUBFDPCeLrwUNEjtgUoQB1JtU9SLy91QJ1A6qmdH8WR2",
  "key5": "5xDYBg5dHyrMLTunmeq6rTun69uvRJ2KhELnUEYjxTbkepPemUfiY81AqYxFPmUeR6cCQpvsU7zLXEU6fwaCseVQ",
  "key6": "61vCaLSQhAkiaXvSzhRobzqByU5Y1KeazVjFQpGfUXKnriN2oRY54gGWH7FmxKaShUUU9g6jvSWnGgErMoh15Btf",
  "key7": "r9zxjjo37maDyxmsvbhEzK1oZJN1V3cd5uvfYwKwmz9tifTKsKdXAHg3nDQomajb6GeecEt7ynZGiEhE2dzxVye",
  "key8": "66vijqFbRXYZDiDMCsoFsoFDC9SioSzkBxK1uy5FP1D8esd3apkvzoHge6UNpMeDmZUy46nMNSBXMbeofQLuCsV9",
  "key9": "5v6bJirDho1FTBZ6hS6nuZpSG1ujPqTZxnvHmueN97V61CcYjPfGxPsYzaMouh2c3WMKL7ohbcPSSmDhzQ3MGJ7f",
  "key10": "3U41u6gPPMSDSboiDvojMgg4RvEKXFodviys3SyafgvG5WF7x6AkyF3TcZELKRmZQSMTqehsZWZ87wz5AoB7nfC6",
  "key11": "3nCXA1ZABWBRAxciYKFXU9ZZdgib5ZxHAsk2Edte5xkoGTFgMu7ZdzwKJ3JvXCbCZh7sXGMip6zue1B5UVCGLkWK",
  "key12": "2fT5fKn2x5PatVGLgkaYCp6f1waLEvDPBjtPrDxLCkk5KDZv1Z2q9kMBzZdteTvg5p73n6px5fmuUbuAUDYxns3D",
  "key13": "Q3kzwSrMZeE7uSVP9Gum7vMKxCRVzGsCh21P1wc29wfSH7tr23kfhe6nEGSRjfVXfHdMTRWcYuLS7YHj1enXKrb",
  "key14": "2SV47bMUqxeLePNPAQAuXrG7kRY3wSk3bYfuWrFufZeETrRYrXsz19j8j5jXLrm16CSpU6WVLjmUxRW4k2t761fj",
  "key15": "3YnuEYtRvLV56EJtJZUtJmUSAGcjt7csZufv9kzGtXHWkVhc7J9oUTYd81mC84EdhkQYaiFE1EXQBJF3DckyhD32",
  "key16": "44ht1aXCpHU7Ecpq5PM6EaMpJHMvoAtxMiSpmCsRXoro9t7KpRpUAHqkfTpvseLJxZZXaL1SceCMV9UzZmLeEf22",
  "key17": "4MSfnAXeVJ1xvDNdurZXEvYSNaazS36Ktx7q4TSUBnbX1UVy1fwHeb2TL5Emp9SDSjV9bVaBoM1y154jLv53b5VD",
  "key18": "3oqUxFfzEp4cWGZPSTe5e7dh3VwM8aqzYoiKKRn3BE89RpwDTTRDBtHZQL6YVTSTnigBjtgbcCvX3YqfFpv7tqGV",
  "key19": "41tsP3ijBTZpAFuSMc4KjAjc4BrR2yxwzYPWpFRWh1KXn8TUERSsEjTbuTykw3o291FjWahYwp1PCoP5Wxx7zoUR",
  "key20": "5QAmr5a3zYezF33WYsqWFip3c4gtgvknqe2V8FCVMg3BEdbbwwza7jZ1LVsh8YcCLmHXpmSuBvzAWtBdHHLMrf1X",
  "key21": "4xAuU81zKLkEFLPXTBnuqEsYVGveTveEqLRhW4HeZ5rCLRjdAiVJz2TFfbE3tETYdHLLSQACDt8xWMov8obkCAsz",
  "key22": "4u93bKjVBCzFMypxAhDLJedL2CQP53jyrdJbX3gErojCvNmthbf3HS1UsKvGkg5DLp61c5s1R3Axbxy7hHPvaBSR",
  "key23": "32Tn4Mqq4xS1VKTmMkr51u2fMo4tJb1Jy39B8pnM26cioefThbRjhYMc15bT2HqRUUEuq2wDkD28RmfZ2BCyinTa",
  "key24": "36FQAC7LhEJcj8Ef2xHNuViwgqBk7VCAsq88DwfnnydQNnNAyK19kP9C65AdCKYZ2M23tNjRgdxVNVQMRzCS7k1T",
  "key25": "323UAURY67A25nVxPAr86euNSm2vZhGNuKaa8gvUWZ5dqVhtE2jSaKNrGTbzZgVQ61DTyXX866UNQuoFSBv9tvZr",
  "key26": "5cF9BKaWq3oekkoK5s84ideLHYPYpvDXEjFeq25xwwAnfqtEPr8jjxkkV2FCmZ7dpxUB4eYFtHazvQrk7an9faee",
  "key27": "YkAGMvdCSJjnXzr4dS8CYUvvGbmpakkmMC7Y2PTNwSrziPaTj7citUQDUg2PGSecb6McCfkGFMyEdfv4SXccTFV",
  "key28": "2fdBzarrQ7Sgs2bb4h2uVMBhsiwAavsjbzKZRGLnKcT3tZpC27TPK2dtCqQiDurJa1V3Eo84qYc1uKtz6y4rVESp",
  "key29": "5jcdfSR55Mg2a4vU7rSmd52e8jj2HfLkDBxND4gPbEVZ6VEdTE1J3uz9M1FiGZ8Ur28Y6aEpFg21QDzAQTvpHArh",
  "key30": "4pib6TY5ZzMG4HtbgHNDNWNTx2ZwPZMN8E6E4KiZPzjkW5P44RXyPJfJ7hxZS2gVtZbZcvi6Q4WumBGKQcWseY6Z",
  "key31": "2VfwEQkb1zuB2Er73ZeS66eTugpJwybnGqcJFSMjrvRkGmhKqD4KqhGdA9QFR2gqdGmzUxZRvHW2upfepW2cRnHY",
  "key32": "4DKem18XiZJ16kQCu2d2DXpfx8MjWdQJkdom2gvgAoQWUTMn5J215Q2wi9hi5v5XNWsywLpHvTFASse7cCGrDDBY",
  "key33": "8pzdzvyiYdryFcL1dmqvv2EDArmweeY42PTM7ArCPmxMtEfUSzbdpCw2FnjwwH4cNonTaiFrcViRvrykzHdoEjd",
  "key34": "5bVQ8S5dGSStL9R9u9Lbt1KdnNiFpGJjNh4spiombT2NbUTgTJCS1EADAZEVVzRcaKFjy1VRBJmauub1Z2No7USr",
  "key35": "2suU3rQVnPcQP2iiYuLrUTnZGi9HYRqNTiXgekBtbRnBi4Z7QSQFsxr2ceyQcPXCmJwbZxUBtxGWkvEYbuy1cB36",
  "key36": "4P7rSjXzktTc2dqpNPjMzT3pzzoSaSQesnYnFkNsSEGMDmcmfpHwDMNuQ9d9ihmBj6Je2kktzwymTnmfoFj2uXjR",
  "key37": "4fmQGaQTp9BwX5zeyfbU9HAYcSoS5G7ugTdC87bSbeLbXuPbdYxfckVrfPNAQA1SLLv8kxFMxfXUEcw6oR5Ydyjq",
  "key38": "27Q9HUYvAkyJtUJaGRDvnRr2D4V9Aje8bH3YWZ4toZwJutd1qoopjcNNqBmhipR5XWrv96QyNDjzRHBp3LJGp8og",
  "key39": "2WpQL41KYSS46wE3Q4kFV3jPsksQBHe1uNDvLubR9NTdHd15gS3Wbae4i3VRN3xgUMqmVhbhxrhrbcBHLXNxk5e6",
  "key40": "3FYVrGD6xARGyx9DzLC2KXB87ADFdWqXQq54nJYpEM6jxzqZk3xz2RQiw2r8w7zT8Brs5mTw7Vz1vCd9STSP4YZk",
  "key41": "37EwbcXVyQggWFEXCiTbmqnXKfghfgpSZoozeM5sXTDPJUwYE3tV9nScEd4UEPnc1ifFwCZqiSvXe2CSjX6ncBLY"
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
