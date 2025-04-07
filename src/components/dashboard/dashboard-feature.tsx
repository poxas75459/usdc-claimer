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
    "5vhvL1tcHZLsVXaaRgaBZ1Bss9NEBxpRqj7m6F5N323b6i5xdVDfNdB7xQj7sPUjnYSk4QaAQGFRZoMxhYQJjKJ6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45n2jskEyMw2GodSX3B4ARyiKSEq23bCtHAQC34VH9u71CGWQpVdrpsGryZjetaXSapY11NDeoNKA8WmHkgbepYD",
  "key1": "5vuyHVRLLc57h4iuGpiTa7P4oNS55ByMcjCxMZx7dFRzMbbmbb2dBN1TaGj5GHHhFqochRuQT7zuei5mNaYynXdT",
  "key2": "46cf55txMpUzavVpDidsn3U3MQHHdjD55MwpsMewePdSiu55Yckfd4FjFG7Z34dQNhSKYqZQt7GQdACBW7oovxbC",
  "key3": "272qvBUeRiJ6P4N5FecfpGv1amSPui69jqAQ1dAjMDaBySg5YWtrbpYo9G7Ra3HpExHPf6sogYBDu4v4eUkEBzDC",
  "key4": "4PFDAbifUzqWoZ1DwSNYA2FenjzzmUVaup5nc1s1RbRFnsPuhKe8i9VvFY1dJAh7WmaoKHNnhWXCwb8QFywGPNz",
  "key5": "5iV8PczruPetEd3UFWmbPKHpTY6ux9cdyeYkYhg3XRRpJu21JBr8Pb8Fc3pXfeKHaueQPTXF4kDqLPh6TrGkPm2U",
  "key6": "8nmhFEX2ztwcGMf7V6H1dPDaUAx8JXaudPi3DC8jpFRMcuQMmEFEp5Us9qrxmuMyA37EaZQNgbhseP8EiYyeWxV",
  "key7": "3BZHvD53rgSKHbMs6eXpY8d1nASqvJMtphxjAzhE8LS1eCYtRFT6t1XyWSba9t1B9TZtD6Q6SRaCAaXdHh7LsvUf",
  "key8": "3n9ajQPyCSsRaxxJtAxRMastKDYGhHAscheUSZb99fee8A9KjTB2fHrrugxXVHyjpUbuzJL5WB9HFRP7wgZc5sUM",
  "key9": "5c3aTj3aLrLUyBniPXKsnxW6theKz513yWLuDWnCyBXXGx8hpkx6udkKhJHQyB8xW1k5kRDXDJ6CLaQEB2LbbjCa",
  "key10": "2XUQCZ4RuGZwhXNTWXzGzdPyrhC4ExKopVAXjMZTRZvE3b7MuDSq3aAqrjRuhgFaBpXzdqa6Bm84ubaLFLhjauv",
  "key11": "2DR55XrSwDGoCHgjAX6vZy2uE7vM7LkjL9dPQL17p4MPa5hTPySFDsh9my2BiRgpaxX4Ez84UeEXNgDYMtgtZcNP",
  "key12": "QUtWLePiL3aQnYfrAFNZuFzTwtbWWXLTsmbYnFTdpohTLMiXJvKv1Js5pvwVmegCWEWc5pM1D7tFsVcDkEfXSvf",
  "key13": "56nJc94maDuuD53MSooTKFTNAJRoh5hrdmfmJyf2bnqruMTW1HeJHPRY6wUzMHKPbvAHCY1Pr7wz2jVDg9v54eCT",
  "key14": "4RTYrnLB91m7cGrhodrEJpFKSdroJ6vYunyH2fmh8DktCmE8K1gKJS6fXXYi6HsLKmNUVtw34XWGms6LYntjDpr8",
  "key15": "5zwfX9Cj9tumYxgS6Rbsit7qVKHFijc6MxGMAcPijfRhzK3rRLgYhhkdog8hDBfVWrzUATr9PvMq9v4QqKetyDSF",
  "key16": "f3pJHv6cGukQURFVX5hG11yfCKCQcgSM8Du1iQpDj4zynpPVbzv637AavL27vGdKSisJdsoUKWx8cANBoLDUwkh",
  "key17": "5qJMUkJuHcfPZWNDb333iHavHyErTAYAy5voz2beLTbvVubJ4o4wWScDybiCobo2rgBVrgLcnciNdgKre2Q6ErbL",
  "key18": "4mQhLmQDKAaHfq5a3eyMyM6YgiUpPrAx5dwMAw3yQ2aUeYGhzTREDeFUesHe9sKAQKLhFSXDa2J7YQtx3QE4KbyD",
  "key19": "4WCzFMHrwUpwDQ4oYy4bRfpYFk4N2MkmJ7YPySEQqasY5a6biyTRz2L7byLAnHWUWhP6TpwKY4UtgtxRvoXYhBBY",
  "key20": "2ujFmiW1FrX54H6SGPgpwqzqzDznQYbfppRkErBioDk4F4pFtFhU6xXQrQwJdsVMjGV2evZFbLJuVyuJrTxKKeNa",
  "key21": "5uNcFyLu9m2gNT5vbqis1ERiu4uirqj2tYyWZFkmTAVc4M9vu2k3hZKetVQbZimMHEwW3bdfobP2mF7FXempzify",
  "key22": "3wkVhGxHeKoiLgGDii9KMsNvJzUDhWFWinTJaC39jrSL5tWbH4JBJJ4wEXMtEMTViDqDEomm4TZwHJ4bwPXsAQnm",
  "key23": "3z9PXeTojYzEAeZs4YhWkx5s7NvscJdmA7sM9vd632KDvhJVSAF9VtA52X3W2pUpZmBojdiU2HuJR1DU4PiDiaox",
  "key24": "56UhU8PekwbffLquRkq4ZX4jFJfhg1NRjyFc1CCWcv3UcbLjPovzc5HCYEK5ojPC89GP6RA1AbfnqT5koYbhZQdj",
  "key25": "31yA3LCtXt9BUuAu3VCXTcSrnM1yW5YqWDUcWAQe3MESJfpxEoKS77Sb4LhPgXwA5z584opkAQzJxtUPNrkybQj3",
  "key26": "My95ehMcio2SUy5QBwPjcWTS1WY1V7oRvy21ejCG5tH4Jer8avaKa3EAGoktZgncMR6RH5eVdR7VYz8HZWngkqM",
  "key27": "4qPdxhqx4xf6nsXxCm9zMzKHz1T5r5hDshXLkBtephJAMDU1paEF99EnGgnh9VARXxfpMRdrG59YXnq9ufiu2vae",
  "key28": "5KKzU89AWuRd963NbQhM34vjT1CyYPqz53jta646oxquSCtP5QHGpPDkcsMgWRtwcNgEwBHpXevcL6MMNiWPjX8i",
  "key29": "41bP9eQHc8R2fJqd8XUAKW4iYxkDtoEhfYMXhq98yrnrYfzWPyRpXqUAxkw6jgoQGfhP3c1PanH825jKEFCtY526",
  "key30": "5cX4Yu1QUB4T8SPmWgpNfonDGuGTNpbRnBd4Uin1VK5RLFfH1snwc1gXP5gREMezmXyxahfhwfsUAyy3UP57fKu7",
  "key31": "3QLm8T22kfWBzjg9NQC8hihxYqY4jtxzG6xXG1JsVVdjQnBm8vDktpGd5QHv3fxwQB9W5sba89VVhh7ndDMxAmGJ",
  "key32": "421fnry2UXGCv7tW1tWudqf2mzhgJPg52Z6U5scfN934LpPAP2BoRGwhw2QgsNgfSaytapyisHeyqW5ZT2Et33EL",
  "key33": "3H9pQXLCNp53JoU5KwV9km5CZK8EH5SHW5xe383JfpB6EZVPbaqHs8QbbnddUSi4rdu9h4K2DJj1NWMQm9SAFJSq",
  "key34": "xCogdjFQ3iFco1Gg2zQanojXA5cCpKXtpc7uhb4c9cSqKsD6yRyssT1Mps6fD8V5Y8GT5vq5omqEhyv5QQFZFYD",
  "key35": "WGrSQQMAvaev9QzrpBhe8gb34PUG5c9CRqJs4EgDqnyB4J4UmxDS1hYt7taQx6KaQZFWAvbbf98AaSaCBvBDtE5",
  "key36": "yBJguBZYy2toDadqxRZvb6fiLAN31bZSzq9QojetgMg3vL1mDUiXmaCTGJ1vX6jBbBhjBSAPW2M1ZJUULaA7Eky",
  "key37": "3EBjWU763wcV53N7eRxVSQy1nEqgSz7ptPi89PpWikPcMKqTuaYApWzs9Jho6GkxLVdgEkLTtytfp9rowNH8TMzr",
  "key38": "2WHrczK4egXEv7kv2hspCy7i9pHeqQbh2iXKpH487Yi2dyFrdgRGEgDbVJhydizDjkhvwYaCR22PrhjB7m7Lci1N",
  "key39": "5shJb2QxBAe5eyKYuyfQokffnKGH2UDwWE7coG6gJnusFFXXJbogfLQkUEg7FRfDFvYqGahsURXSJ4ncmzXfUp5m",
  "key40": "rUekKS9Lqu9fof3zDYdHtfGA4Krb6Kx45exyooJtkjpKeGGsvLcHBGg3y6RBaaU8CmEUJYwQoetCUzWQYVFW7Nd",
  "key41": "5FBfcD1X5K2cVJwe9JVKhrfdVw2mvWxc9ycypSEqC75iNTp1yAA8mgqNaHqcCTMX9YywnhBryHBfjqLXzmsUX2fF",
  "key42": "2hXQpoDY6uQLjLxND7LYutNWtw1aPc57ZPWvpjMjxQcqX5jtYb6hSC4gXByBKaTZrspcCQbXSLU7NVsjxebJ7vx8",
  "key43": "2Zfziw67sWcZeJHQYPjBGmtMKPq5DCxfwgqxg9tuGVS6pqXw9NV5n2qCXBDjZ2YPvS2XvRAEuu48owNxEHAtnf5E",
  "key44": "3Ce9n3A55MRrULErphDEeRmn3tB2L8YMv2F9jbb2HQbsDy8tgrn84nECutwTWKjTqSTiu2wFXNqVzg5Sm5qkWshB"
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
