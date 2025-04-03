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
    "2mEqQvv3PjNP88aEENHbFZtSCpwqLcazxDxs9GjnfqsTCWt6pUsBjChZC4TcLWDYWYzAj2Poga9FeZDRtvvj9fVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wFFyqB4WnHQ5wx3784KM11imwb86mHuDVMxJ1pza1cTBR46FVfKb78NN8jyj7vzN1tonmhCFCiDmA6yyT4GLtvt",
  "key1": "59kae2rCWif7H9CHe9WLq1sE2ZAcLYsung5nASxZmWdqxbXZTP11cPr9J9NxC3AbNoXKRRJPSLubj1GasD7Ggvy7",
  "key2": "S8b7TQhsgFyg3FLgZDFGJ16fbSgeRkAGgoRY5FnFKgidQqvRfLyhpUTYzMbNvfVYF2M9iFnFVXUjEqu2TPoyuvm",
  "key3": "2n5ddnT6XF2EnRXkV9TcHK14AwnhNKh9RJUFDa4DGfVR1A9k747U7iXuxrDx7t3dP5wXbakcnKuYd8Dhp1k1vWeS",
  "key4": "BivgKNnkamNXqM4w2Pd9BqVrXnGubwpCZ9h32mKhVrEc99VguF5bQNVkSpqJ4EPf51iXjgGktw2kJSyd9wPL3HA",
  "key5": "3855S8DhL3xc9ykir7KG42zb7jNHqZV8MWCZb6prFjPEvsr3g5yjK4CXfXKtzRXRqLgi1AYEJDCfPtZE3pBifTBc",
  "key6": "suzWvBRhq22HYytuMvoEza8MhjsuoEZSPSWxTu36mQktLBetTUa9uK79qehq6WGp7Lr1aAiYpPS1233FKry4N61",
  "key7": "362wwXstBWWqFgVisfTy7YVaghSzNz85kdHLrvo9dqrs9RNUTXjB8YWo16yjpvP3vesqBx8c8Nztg8xDC9HdkJby",
  "key8": "5JUiTyPYp7JhVq9gAy2xzygZQ9Sd68kjurmjBtfY4g4mExdiDF7rXwUF8pgcxyGT4wzYdpo9ig5o1Mc81xTGNbTX",
  "key9": "5sWtxQcqiKX2v8okLyy38Y7NwtnJAfwejX2g47WNYW1t1sprRwLR5ZuYhzA6UaLnxv9RZikMHV4U9UcmFH8E7HnW",
  "key10": "BYCBacGvK68CCjM5ZY7XPJ8Yad17K8D9GJhVfLAQgz2YMC2tvuTti2ziee9Td7mvqwdWtM8SSUjNauvMkc6eUij",
  "key11": "nf2vZe7DpHsFvj9ozFgigEit39ezNhZDS8tsRq8HxQnpUZLLmpXduCtSmf2dqCS6zUu7TyhGGJcXi4f323SZAFc",
  "key12": "gNjQhgGhP1JqUrRPdVk34Mj2z4LkKpr53kGjGti5SQnTghFHPNgCjcm1bwZbM1XZDDjCDihr1jfH8dLzdTyRmCV",
  "key13": "o4XCyWXJZeGxzgJuHJkqsEkt2eo9fpfUgQaUUQRfgUGtaH5X2wxpGWGYUmgHzsvV8iGzPizk4T19MSLT55hyPaX",
  "key14": "2nm4LHFDM8E7bLL2FTg1Md4JmcoHHeXpLEryyWCc35wYydprTiLrXTizB9cgqPuJkuBiUBJfk9y6LLDKmuTtdH67",
  "key15": "4JP7JxXX3171HsbapkPwRcZS9CpdBbKHCkLKorgRamkmAydGqqXu6t6buW62RRPnLPJm4zTioDEzPU2oFo7RwcS3",
  "key16": "5gLXX7rZZh2zwcCiP9yJ3yK8oFaXr9UgmQDGX5DfA38SNNDmBmXxTUE4qbLksigfsgtcXJYMUgwcnD8B1goNXfyn",
  "key17": "5rZbjoiopuWiBFUe34BUdKTw8XpkZWx7JCx24ddWgvWFLaUo76uj9sabf8qqkQ6XUCesuz9qwPBjmGZV6XgNQAvK",
  "key18": "234oEjfDfk8Lwev4TfxQLu78xd7re284rSkTGFRXa9mKHY95xK9qFQ1QueK9tSy6PCK9f6Q3eh7WeNBTLCRLFHsB",
  "key19": "38Ff6ZPtDHCxKTXYSxuyckTJFJD7VLHX3E3GyCDqDmxrBbne9nXLhuajk6SRWUyJWA6GPCTeF5KN85vH2ndsqzzB",
  "key20": "37UHtVS6RbLJgCJdjqhQQhfAvu31yKWoRxJ6RU3hJ4trzjgGgG6YkoAG4znN7X43yaX9d1F1sMV5LisasjuWLkyB",
  "key21": "5YPh3LLpc1LyZoykb7Lsc2pMXBuFSxhWtdev5poEZK9va9Yq4FTVmeRiLJX1dRJ32Ap9eBzKsxL5TCb2PqzwPx5H",
  "key22": "4bmtGE6SUjGoiWwNFmNJUcgGpCB5cVYCFSEah2sEJoTRr7h6Q8wjU7UCEBd2ZRUBDsGAikMZJfVEXmugiM5ARNAz",
  "key23": "kEXG8ehJUtBA9Ho5924YmRvmzkmPFsjz6aBsgK4uoKBbAKS1BxqDLHc4d7Wj7yCtZDXKDtHYpL9hqPL9yYpEfEE",
  "key24": "kp5GeiD6N5KWRP98adZesvVc3i6mxiogwgr8VkLaBh8PkTcmcc2REad7EJaVv5K7ZaaCSvuyFK8k4xD5hdyS4aG",
  "key25": "RKGsTE6yScDSm7rU1ZWL8rEHz39EZ9t2pMjJknfqYHFzDeDASvysd81HciStcrWop5r73KAwcLvvAb13anLmPac",
  "key26": "2ewYxqxPo5RtkNdg5Xf72vJnsNY2qgSMCYJiJMwjp9XoJ8dHqwoutsYsiKyMGeHziUKDF8Pn8wr3A4tcDhDxvpTt",
  "key27": "3HvZQMXtVmmLwBmBtg3vNhkiaxcvTetcmyJuiGi79YMKrpRLmjKikAde714tX3hftKrdeNh6f9JuUhgF7oMwTSvq",
  "key28": "65wKgJVtZuXVeBcFkPX9a5H9Dh3NKSx6mjAjHRoMqyEVuS65B3yyUmtaC3EyzNa1ZvmXMpLU5obF4Z671bKVwD5Z",
  "key29": "27hnxf3T7UeVzHj3GLuiiDdJDssMpmckUDi39J9KVjkcebpG25LpJyK2XG72cwV44vebMoWTX5PfaEAWk9fmAA8F",
  "key30": "4j9eJjxFpWa7HgSUr5bqgZNeLzgLGS1TvDJTMZPLdwR22H7FBCrmxotM74DUTUhmdxkUWsGwR2cWLhja7M3afkYo",
  "key31": "uNySuwhxzxVZWnR5MydqDxmBLsdGcCUfzVodefzGxw8X4ujWbXqQejdb7JgsT9hCgA5oewyL2nezxjipCEbEtsn",
  "key32": "32pqX9sxpHmiX6LbuHfthq83Pekcav3HiuZz6cnQdWyVc9Mr4cuvayQXxGLhvG9SY7NRqjLc16VvnnTAYfEC5WWy",
  "key33": "2aGcoKHWXLXkbRb8XrMaG78RqS4NZzzUKxrfhDsMDGns3tL59ZHTe8eWZR5TyKqJK1hJ9pCFrP4ToHZhUEpCzC44",
  "key34": "3jMaWfmwnYM2hxZqg2CjfBqhB4dhjsb5XawMVEgr1KqSVg1ZdbN4k1d5MuKgyG38ak4eG3c24cmCiuRFxeBsDviy",
  "key35": "4G1iQQKEesexeYKJDvUzLhKZLD47fhUwKZWUSwRCM56G5hrBnb1wzENjCbzQ96UCmgzaLL217e3szWYWud8rZa4Z",
  "key36": "4YPwaXKtUSHW1QuXcSWamsxDasiGL4UDQXBSmneBkdFNGvRsqVd4nKUo3sNKQHmHXmUATFh6CMbeZPJjimyiGrC1",
  "key37": "3Ebg4jCVYjuJKGqh2zQxJ9DWaLhg8bjTHap9QCjivotqbtx7SaWw7HjRrpjpJwE3SVjKQaBRjWQufn1u81756KDe",
  "key38": "EiasLk6zCGbGd8zG5xKzb5jQJMWm3jRFcdpLQhnxwV4aNg8hA5JZXx3uspymQeGhma3SgXXbbRj3vkPzNjZ3Va9",
  "key39": "3ks7rVWqYfFuTg53TSGzPdq9QYsgzHkJvMLQx42DB89xCASRGnEDnkPktkBvX5ey4tQVCYtqcMLWsVs3spQiU4cz",
  "key40": "2gPyBknNq7h9yYmH9LsuNxdEybQ2HtkThas7k3ZexD3vem1iRZo6V8pk8QGLrb6vrztMeao9BcQ6ZrxGER27zqSM",
  "key41": "4AJpzeFKxsdmynDfWgZxBhSVSefjYH7saXazYYxFgCBu2t2xqqi3wuAhjtdtwAxWGvrgtigBGVcrBAmLB5kgWc9E",
  "key42": "3WWAmRkFvy3AhEodd3tCUF6Bs4LoxKXH5rL2z9aMyqwPAr6Wz1mfu4ZRuqtXR43xSRQ5UHnhhQ6ks9RaH592RZqQ",
  "key43": "2hmZHpGWJmcqa5rcJKEqbigWPHBiFv92GH9JEN7vXM3JYHVs9Z1pttG6nQgxAs1VBVf3VKay2hxKUesdZjY4W4NU",
  "key44": "jEgGwJSLwez66KN3mGLz1BZF33jgaJgfkAz2wUAQYYAkRkezb2JXmoaNcmCUh5GEiqFBee3CG2fm4wYfZCvoTLg",
  "key45": "RdHn5QEayA6Tzce2v4FAdSTWjA7Z1ZrjZ65CNTVhfqfwCTytt5knYbkvz95cVQtjXUd1zMcbqXm2ch7RZEdSXZq",
  "key46": "haEuRSD1rosUrtsA5ReVLDsYC7srZkXUCSs5SqkCyo3JmLaJGh5kVoVfrJfPMuP2jnPSH56KsL9QTLCnN9bR8Fe",
  "key47": "5dNwsqXZPMQS9Ji2SNzB9L3mmGr751L9krtFS7tNSdimnqQLBmeyVX7DDSxPk4cQ5GsemxGym7sBxSwn3Lk5Rhtx",
  "key48": "3VgrRkssksx8QoGk4h5RxhexzVXaQhSQMKhranFSGz3XWxE1hbGaXDuSqKHKi1MAcBrinbUAb997LgzWT2WiEHxs"
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
