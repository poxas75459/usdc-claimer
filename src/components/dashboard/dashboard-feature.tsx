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
    "5eoMpWdEaCiiWC28wz1sxmVxcbYCZv5UvrvJrP5LT3G2dPciZsMBGAeyTf3SShUKayc7mWHQc8WyhwLVGDEohApW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32zLMCJ1C6mUud6PeLWTh2Q2r8kCqJxrLtVkCDfAbc1VdeVAwaV7ASjENGyBJrK7vKJ53DHgeSu5w7MEeEZNZKY3",
  "key1": "3WoQQejockjqs2FRdfwqnhNDs7vrk6DUYWYMdBcc5RyyZ17YNRqjtFT6Uu8SvyeyL4mcANupHwuMUm9Zqyjk1LQY",
  "key2": "NPsfnmFBgdmTy6ZoqS5tM4fVW41yrPqNafEhcCKf5HBxHmaegMmvvWcsRzvRG8rrGYWoWwBd9fpJDboK2XFLBmY",
  "key3": "2Gn2pF28r6wFtC9LY1eD8ys2qiHqtGysn9JuTjKgxoy8WZND8j15KsJ4vwEXRQVrDae8bNSdsAfs6Nr3etTQn37k",
  "key4": "3CGbCz7cif8mTM23DsckX2NytY35NTm9chkE7S4JcpikXr9vPwWUoHfKcVHeMWLuvGkgBp8UmMT9wBjiDHNj5K51",
  "key5": "58eBxsRcPnymgM5wG9JikBWePmNokuyJY62PhYuMvAjWhDE9vwWdaxzJu6YKVWdLFpE2YHYPnrm8LYxYeyiiTkj6",
  "key6": "xMdQohiEKxep1zZfNCiLpKHR4RjgM4KyueDEGd8At6Y69fnig27yBVUTgebZ29XE4gsHMfEzyYTtXseYsvebbMW",
  "key7": "4cGuwSxqivAY5fGzKYWoFT85zmR7Yb3CMakgJJ6kVkW2iBEntyo1Qkaiqqu29LeoVfLojY6xrPpvyz89ymAkkuLH",
  "key8": "Wy6sjwmQ8NBsouEePzimyMVmuPTHNcQF4HSzJVGThE64TWg4zZvhNSLPQLeoqSRAWCfcMT2FdsvawkiMmCaTS1L",
  "key9": "3tx9Haj19Vv1cfUBDbufgWd6sx9t3XLLiYYK2W9Pd94QfYTuCNcC3nTdwjSkP8wZ93Cn1swaTBE6TZ3xbJeKfp7t",
  "key10": "3JCp7vjA5BFTt8LH58uiTfHVhSTQG5CTbtme7ZVa5esBSLoPTroyPqZsV33UdsviNA5JdoFrwb8UQ9HKSmwNYRu9",
  "key11": "23bBJMPkQe9Fxs2KUR7Jxbc4PXsHDcS6qNP7k6okmxDuPr6RP1DdnFMifiDUnXeHonrLTVsz8Z3UNQPbnPE5bL91",
  "key12": "2RQ8DX6DPtabjEsAsksDgjFrugexY94tY7EJXMV33ibwUazDACyUeVgB4baHkSTZkQKHMcB5Kbus4yPKeExJVrze",
  "key13": "2W2Ro9PGRafZ8GfV46rZ6w8Pzc1sYxk65jw9gNfUkZwfgUPAN5JBz6iLaeY5KYG8gNM3vypmb9wtX3df5Ztr1ExM",
  "key14": "5QkwG5ZCnZDzuNU8Ei88nB9UfNz633WVVCFCcTNrTRkMg2rgM7v7PYWtprus3MEK82KJ2GTxAtz2YG2R6jDKsJ3L",
  "key15": "55Fg2jLeEm6suyPYw7suXSKGgYYWEvEwajebCjk3ua6dg2wHLTt4YNW8Pke66jAqFMiUd7VYtPiFGfqYQxTwz9Je",
  "key16": "5pv3fDtLSoG6NujGFpnRVpMgvNZAYqpnFpFTwgno6zkpqgJ9YbbYvP2JRva2SqoSsjTV3LhfqducNhFUUfBS6Zqd",
  "key17": "zzCFNgZQ4yx621PqRP1ErKE6eYnSFv45B3HnAagf7ZYjNLEjZztjZgGKpa24aojaYFMZvNLwAxntSG57rBTnVXv",
  "key18": "36QCZFD1gcAX7RutA6y2tdiXNodNhxoqyLQiSyvi9FCm5KQvYzxVbqRyj1ZJJ3uPEzCkBbFWPZGjHfFYyfocpgTx",
  "key19": "5QKZ2oTXywCUYmwosUxgXvCWwXj97UCRwaxDHK5RwKxoa56AThy96YwmiXHN5CA9eczaqEqZuHHS7jLdukWQYWiC",
  "key20": "3wV4zehfH3aZGafSe2duFvRUWmvUEi5XpkL6hBJn1nTudauwTdEptgM5NJaaYopAZG7pndSSR1A1T3vH56XHbLru",
  "key21": "39Kfg9vwHayDf3QQcSPpCQgBaDn5wFcuo8Ux8SFYa89ScoZ8qvJ7nWkQJV2QuZog1Rk7VHSg7wUBzQHYznfnweFp",
  "key22": "2GiaaDH6Q9263fupLQDNB734jER43uLeJZoQLZrgXmZBy2S4H8h7Jbd9KjSasyNwXbEL51UeWJ5U81b2r3KBmTTP",
  "key23": "5xRurYGhmp86LA8LUNSRfbNjprADYuhjQ93Zsgn5yF2cd8jiFrjrXoHZvuEX3LnPNkoNNeG5tJTHxG4H6cDz8Ldy",
  "key24": "5YS6tyMC9uJBPTLNsoR6SvR6KYte7s4EP59hwVAhDkP1ySPC2HhSC18RJ1LFQNRnUcxhj8Enqd5mejAm2j5EbjV9",
  "key25": "5gTt3wFCrLixrRQuZSFpWixr8HE8PUWRWzHy2tBSKhpu2mNY48ut2xFz596RVjNBrkUekMLcdvEzWTUYWwmzGjUE",
  "key26": "3Z6BARUB3xt4awPhD2EumCEREhxSaqcqs4q9QtsK25LnrP8wLNVqzWRxfwA2yoYKEXMyUq32EvLtkkmVGkxHTPhy",
  "key27": "3xEac5SATMk1KbYpbsshsTW74mgWBktkzHzp95JWg6u61KoDcea2Y5CKUybTwZxf4L9CqKHKfnoMRFV8WyDYQiYx",
  "key28": "3oGMeX8MiLjdXFkXxGYrkDaeJqPH6dW9YcuHv2CW2E5JeF8MqEWv4gBhrhn7qY7M89k1YyhUiVHW6G4UhwUpbTaL",
  "key29": "2WjwXLREP67HnPuUCco6F9Yr4inU4BGEJSvPg8Rg4auZQ1h9ADqJUCodATXJBHfr3L647ZNJrSnuF99VvBTvDkRv",
  "key30": "4PtXqhnnqo5tD9fz9c4HqouaPJshKJPhutCez9npePKsb35zEUaPothR6LoTNgmvApt7sWKcJ391xAonyudMwdXX",
  "key31": "5FAJfV3k4HWZM4A1tygL15AiVuS2x7ryA2EmE9uRXMD6UDnJQc1HPd8MNZGdiM5JS96GMB4CCjV5wUJpuwddDidt",
  "key32": "2XbX3oyAPhzxS94mDNYBSb5THB8sQQ4mXX7uHouoZLjdRCyK5QwosfFRcR4zdSEG3DKCuhLEiyeDZref4yuTkg8d",
  "key33": "e2WrfPRuWMcVAvWGedbmxvkpQsxruHtnudi3uWWa1JfdQsiYmfDraLye8NMNtNNxkYmxxQA7bNSni8oPgBo5Dk2",
  "key34": "69hRjcA6DDNiy285EVKs9mpKs18mQQnaApEKqRWWG3b8jWuutsfBXCVYF9kvHaxv8LhgeKfQbXZ7WbWHrUxguqL",
  "key35": "3UjAk29znjetAkNaKRH3itzeciK94cvpa79zkFkM6yNxmW7E6ePYHMVUYra9tLV1WZ7QNdNY6FsfvpcncNQWMtJQ",
  "key36": "4siMEjMsF4C6Vgoctjr7UGKsTpQrKuDQAqzysa6bdtXtLD96ArEXvMoSgcAX49UNyUxQxa4WFLG2WAKv95Smroud",
  "key37": "Hvn86mAng33rvgSnRnse7J9NnUkZVncxMhmLuy66fu5ABhLuPjR81nWAgAije2M23TXcPgEvkK8wkShLnjgWmWM",
  "key38": "xDK7vywQnMFFRh2X9RqKqMuPeUq3oefSZh76X2GwD9QVtzEzJAzc1J5pfbBQN8J6MWar6m7aRASijk9BfFgAaKv"
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
