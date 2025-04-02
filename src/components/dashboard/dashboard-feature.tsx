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
    "2YYgxwf5DWQdxs7Y1LLVoCLbMDanv94VQaaR3ZqEv9JoQ68LWPd3oLKAEBd6WUXDDYJism6Crfv62AfsGGrbkunQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4riFvvNqC7n5doJjpcXDJxYFkbG3W5Kv66yKizwrr5AJQ8PW52HKJiz6TRLta3e3DF365GRnSdk4R5aHGPkDZUAx",
  "key1": "4hwXvAC1o2xnVxC6ma54a74o6uMLChHaFVLJXbmSe1QtuYo6Ron2rZMCyPxSH4rsrNr9PxdJMMHxyHVmjXV5RWjp",
  "key2": "5jPfgQn4VenJHsYEywpAaVC7DjrSaYSGxNAj3KdhkfwbXRPvKARQpAvuj5sq6dKpRy3rWkjaLG7cSuu98uUoiJ4Y",
  "key3": "5mRff6UThgnvzqE5Qm8fkXxp8mj4UyEt9FFjH6Z5rRWb9mkHuqCMjkdpkSmDSDTxCT5CyEaKg3jCC8Lvu1LcPj69",
  "key4": "26oNK9TCK9fpZ8BKzTf8nnxwbcrJEekcveZhAfo52puJVP3YpbJ1eAyG4wcvQQiuVmxAkzwX1dfe6vZvx6k9VwFu",
  "key5": "52BB8GZt4KTviRCqRsmKkmwpn8vNBo9MN4ehVtXnDbXswJ3sUgtouoYQ4pC8zF7ytutLEgh2wfWF7kNUipeiQkSg",
  "key6": "65QxW6QrzutGo7HEu9UAYAd9SFv3oPpyfUAbTNKTPj5vCSsdCmBScMnHgoMeEcgYFB5sjXAyCbD3gRAkTiBAegmM",
  "key7": "5sgteDTdwkE1auYRbfaFZSzpawHA7n1x7PkSY5AZ7hjqgNdLFWBQC3yY2nmBXYmZrx7ewMfxtyaFoYjrCt9zUwob",
  "key8": "5FxH2V8REwSwyzurpeNvdxXsH6piSTL89tJ7StfPJPztL6DGunFLWJgXrAqd749DN3GM7qCReB4E1MadJrwaaPzK",
  "key9": "4A9h7qaymqeiEXiGjHCc4XvFtBc5o1fWu9ETiaRCRRkAELLKUAww7CLuUZwULZVywD37YWsboN3sSn1GL9WLVgys",
  "key10": "57GyePcnbKbHep1y5MognFV7EkXrkF9ffZjnbpwcwuU3ipcU5R2jRYs8GQjKfzjHmutQi8YurSRdGpy1Z8bwiLZs",
  "key11": "46cezcjdwYD96Yoz2nHrSFoe1i9Ux2tFx2ubWCaEJWtofqPqnLMjRHuiXpQJztiNpK3RWS2RGSNVYfoUacTG8khu",
  "key12": "5GXbbvpkvqbVvLi52fycV4HcgejMKXdJHy9yr9M8rPboptKjJKvTBafKejsLUrezrtdkoD4Qj7LqvynmpPoQRoFJ",
  "key13": "4uGDeNXC6JUMxM4zkB6KfpKj1r97dmpLtgrtdWAr55Mzumuwr19eBkm5fDvdGGM3DTdxsVi2hM82amYSFXFEUoWP",
  "key14": "4To66E6hikXS6eq1YLULNL6nqtnXXHmzdmLgryhXvFP75ihCuqkePpUJtPm1fwQJx6Ed2Q9EAZLVXFB8viaKr5qW",
  "key15": "2M8F4d6SsLj3CF1wL5SRcfqKgzzfMQYfHWWLTaojCk9wcYRUVREU4rFF6pZL2ctEbJdL8aktsXv2xBPuhufsNjAR",
  "key16": "678DoB28A7rXVab46Vwm2Ki2AAjiL63gyM3QZdMJyyz4CfoK5zFZYLxiGJEQoXubNzfjGzvG8XaQZ6BXNHh68apS",
  "key17": "FY4kzBt8h39cSgyEqyPtt6GZCUesi2xPxEDSt6tbjg6Ddiz4JCC81DXT79xtd1v3CWDUTLLyDXmasv6jTys4jry",
  "key18": "5TCofjDagPwc9pSnyQLxs5teBCKHWgLsxpUCTAhMYPK5fkSBmhhEyMzmKmwEcibc2njRWcVE4To1HgbKhzERiKqo",
  "key19": "5XhoqVNiqA5rz8rhtTyrwBiDosqJEXaWce3Puwx1V4gJ9tScdUvrsWMhE42Pzt5FFffEVqTeGUEsrpUHiHmLc143",
  "key20": "3nU29gaEghvdL91fjeC2t7Du8pzDb4W8R6Pf6t7qSFWuf4i3REiLWsxsAPQKyscNV4QXpSPUz869dQJA9nLVrCf5",
  "key21": "2YfQxk5VQtXKX4dJC8ThDHdCpkL38zQSX3pmstmCZ4BGUEtGjCQtnbumTBFpw33qAGfRMywPtK45Q1v8Ycj64S4L",
  "key22": "2RPkHNbQctmHohdcegWqmgGUwmcJ9DXH1bWAUCwaQgPc7hBuhkXYpKjR2AERf428cbHypGRhhPRx1QJuem9KARo3",
  "key23": "29SNQu6oatff68hdhiGGXmYpmiMU1rUAfbrSUwCycHibR53nBs2yTPfAmS8Yj8J95P1uJ8fbZmU8SWcm8CNXnrdU",
  "key24": "25Ap4FQxpGV4yxRxV3ic29utubJjVSr1TsDeXQUqhPWjRiUhZZn3zQc9kRx78zmeq4qr3ZAfydn4crNQuiEdnhkm",
  "key25": "EZncgpfBnrRX7yVBHJkoNMBUo4fXsMDDwfDVU2L5pY9QUD1YcgAJF4JkDw7G7xJFJVcbsuMfzJN4gib1yFndKXD",
  "key26": "25wcNyjxMatmyM5GBM84ydc2wXJ6iitpLc3jNjKrkiKB5KLzENPwaDpRe7y8nqRGBTMQnmwpLJfWwHTZA8HSTxMh",
  "key27": "7E4bKisyRjKBdpJocDCXFFr1H6pYFBL8cFRGkqLf9hTKVZuwShARyUTGUfx92H3xUfH7fFmCdsTWpm42W2bDFTR",
  "key28": "K9vkwVgAggXKDQWq8TeCQ6sT73TNCeqgJ4mJVdyPo2hcaxDz2bCKXKXfhAYPL1As2jGML6erPJiMsgvjqDRhwnV",
  "key29": "4aBeaDjipVpK1AziomWt1gkmoj3V9DGy9F9oBXVu3NgbbqjZa1n3rgD55r4qiLZ5js58xmj8RPbd7qvhbrifg7JR",
  "key30": "5p6RU1EL8T2fFssdaAoed1C7eXKyT5KYrruz3b7585Y8stPCHKGiVhfDuxngpgade8JXcFDVVhosMGNLqMbBqU2b",
  "key31": "4VAJw9od3uUacAfmjcNLUT8GhUsxMv1eoAHWFEeiXTdDYyALjJabt5g78k1KmVMhrPfPRvLHm6niYyxmSs4aD3tf",
  "key32": "3s7TDLrZGJaw8Vvz1Kw49hffrz1FkY4YkAtiX5AR4UfCKSZ8Bvrenpc6obZ7y6WipWeuqEzE1gZohWxMnLGm7RNv",
  "key33": "41jT2eoXZKSSBW8mNpSUeFyxyrMkFDDQySZbRquACyDkF2oJBeLGgkb4W7vaPvqve7huvQpbxBo7ygidc7WSHXoj",
  "key34": "4mzoDKHPbHyaTia5BzBiXsTRqNZzdvLq2je1zMXGTSbuET9EvckQVb7AB787sCxWxuG2vwJkE7ykkDWDMDK6Z9eW",
  "key35": "XbNKDHXDBTCUnzDduZxasQBn2Xc9eTSUZmj9t6f6VUYXd7mUmkdDGc2gUwxJBoZ7FdzG3BnKpfDbBojoWEC6wSa",
  "key36": "5Jq4DBeso3xeYN3FYpkdVwRAMtEqx9jbKZ7WDXRjXwssCksmSVi5bFqNCUY4LiZgQCuEh1nuTGM1fryvXHA7uSeH",
  "key37": "WGo331QA54yFg9dswAXwSAdwHYB2SAtNkYW2MTyYLBFV4F8o9WvHdfAdTx69gA28sEnEs18y4i3BZhrbgqtwuYU",
  "key38": "2xra721sXve639b5yCsfLqiJQCRfzWP65hdfHsiuJ2BcefrTF1qDXz19K1A8QLdHdq5EfRELS5RpVK4npyq8uxdX",
  "key39": "keN3hvsf7XdSTQpZjHddEHbwjJyUMhpHg9ncP7kR4N2yTSR443pipH2Av7uEgE7qH8sVP4nJq2ebMFtb3xg9TxR",
  "key40": "4wKnNjdpq4d9bCjvhseUTvQhwwZa9v9paba34i5Gs5XM3xKnTASKs6494PZAcwG8W6JEVfwyy7QodSmv6K3rFtZs",
  "key41": "4LzkTuuYiCjQQoT749GxmCsdsVcvH1GQLQttUHZkEhKeYvPGQU7AAGTmrwyVrc4VrFdV45HPe1iN1xgqEKNWkkwZ",
  "key42": "3TNK48Catty6bqF7LRBmo1RYLjXfNaj5S1AZCqwnc685QX4UPG58dZbDiuRjjYMuAgLYwzWcRBtqwR7qqVHbYSzF",
  "key43": "62JvVrNikxuEJcA8J74jFdGCZ7rMQVueUVq8BSgiCstEc41L3LK6ebUofxiNGRDAeQwCj67E9ZzEJhPkSq8VHYTq",
  "key44": "5cWdwPTxxc8MBuwavvkdoFdP9ybL5kzLJ1cKj9UQiwpFhV3rBNC6Zhch86SP6sjbHu9MjZHGfYbgHUX7obWJ4wQ4",
  "key45": "3oE2Zd88j6qm89CJv3i6hYeL3CYs2Meg2aMqw3VXLQob4sJ456Nu9tAJDFTURuhfuTLtEwFGLEKU3etp8UmXBCip",
  "key46": "FPHUUMgCS9uehF9Kj6jGiQaber1uun51FUYrzaQPyP3H5o82Fiqb9CSZWJ2seSJvTQQQEa1tPxYi1TXt1pU3bXg"
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
