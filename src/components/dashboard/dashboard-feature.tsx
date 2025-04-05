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
    "4NPU16y8PJuRPZwdELC2j84b8G2d1ZYvE3xeyRr6b2DMHEPeDv1Qh2FvecYBotjLJJFm9HB9cSKUwV1QxcEVyT1D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kkSC3bmV9pxEwJeu4DFgyZx7BYXGkDrrLuv6jcDvdnZajhdFvs9J9aFdpe8kRdA7N426L7jxeR9oTVHfbfGCXWj",
  "key1": "4Cy2jVAeKAoQPui23X88tKMstxso2R57dCcpsMTVfochTCAU6k7C3YDiZNLjHrrB1kiDMqfm6ES5YxztPTjxYjUY",
  "key2": "4vJ1s8gjA9YovWkkUYFixg4LmG7WUhsCnBWkdEKLHXWwpRqFEbbvakgSRBL7gZsiJLJuHja3qRWpzz54QfcB4Ncs",
  "key3": "46NqUmHVwH4NFpi8qZqr95NpjVgSQBr3XCFctZN5dMimpjUxUpxEaBfA8onzNvg2K22F3SGTfSyS3H5ebz694xvz",
  "key4": "4mcunfbkFcug1eCjvbf8FsGmpwokh34piZXAajadewm7jS2tojpJYBVj5doHemQxZhYnwLtHhCCbwuRr28juRgYb",
  "key5": "232VpJKPPkq3ioiufrhF4jTVDJqBUS3d3YL9U5ML2yiZPH7Jg1wFn7pGvSSkKzeNk2M3UNyR4DaTrhjhkgvZWS6G",
  "key6": "sE99Sg3SwYjtMhspGfxSYhmyhBRbZMnSK6HVFVBwb8M7wnYJKA7kVv8vBd8got9xsVytVgUPnt6gjvDvbUvSZgp",
  "key7": "3TK9NrN45trugGumBHz9NJMvKTxYutWpfsrpym3rEvFBzxUjyTLWhJma83VDhgABegkJiybP8ade5abmnSQAen68",
  "key8": "5frqFYVCqWA1g7wg8aqaUwdpdcy7j1o2hwhqMimocguKjxLETBpTjy4No7246JQs5fm6PxZyn3wHQ7n2zLWwgYFX",
  "key9": "5iJ5eNW9HAtjbLYL2kJqBWsmAdpe2sTMe4Fb9kvG6nQJfsG6Ba8gQs89K48Hr5rTE8BT2cxVcvMXayTJbWbWT6Zk",
  "key10": "WHHEZkr72SDbpgKqAFZekUoMKUmZv2ARJZhzmw7cPJBVWT7i1mBAxWKcakeS5XJNQbYvVGxUt9cvPkt7dNBmKME",
  "key11": "4w9jwnDyL7UMZWpEurbECuXrzFb1xXEACNDLvHyUQhpzse7R4qnbYpUELdXa8xEttu4srMq4UCBXSJj79ux4DgM6",
  "key12": "2e8CMvh5Cep283i2APNggRV7mgzJ6KWfSNGHpcXAKiAfdQpX8Yn6aJX5ykzT8ttrkZmacsJF9ra71Gn6x9MNYNZx",
  "key13": "3XSd8ByAsQsd9k9NNAhvuRgGcZfnYSA1AEggZUMqmcVnfjzpLr35NGTkZ9FmNCEN18sUVqqqNKY6dfQzrjF1p1G4",
  "key14": "5qQQby4UMcsFLKk4QprxcYpLBm5vXaymuS5TAhmsGpFyYkWe134b89g38tzLyZ9zFcjNtviw3n6nhPPerdW9pJsP",
  "key15": "22mc1uF48hm4LVYLpreXG9rkDXXWaYuAut59brkqTpQ1ySgDYd5oBXL8Le2cKr644RaKTYstDF7zUTrWNKVz1cUV",
  "key16": "64u5saVQbiEqgN7aiATiDNoWTnWBZmQmJs77fCfywzvmh9HXdmqDqBQpyRGRP2uvECB4te9BZ9rF7adQZqdnaCQm",
  "key17": "5jPFPdPwME9EyZLJh2j8vZETTcxMK7jQF6Mrg3caRvFfhdpKwYt4oa6myynfujnHY1NLuFue2wBtEtWTpzUMqT2D",
  "key18": "4tfmkuUcePLSmvFKSE9Qv4JFHRiKjXTkzrS977WCANqD1Nqeei2zqdVp5GN1iCwz6LY1RQkmGav2hnf4Kpu2PGpF",
  "key19": "dfnJaYMRDbYe9XZYz5WtTXJC8VugqZBMumHACKQWkqNcCp7c3YswEGUXhbjBFoyb11waPFpFZxNVbS9P2i6kGbJ",
  "key20": "5dHp9uNiMLDiq13zruiM4vQvCZKBDoJSmGDkk1Lkh3yKycbE9b1JGqCenRgCRn868ViN8FpTsMmtUyDUBVCQP5vZ",
  "key21": "2A8vdp9xp6DatSZeKZakCBboMkDnCyWGezmv4QJ24LtoD4odXGesmsNWbh7ribu3dR3UpqjArHZQrRoFKc4C8zkq",
  "key22": "S4s8ZKpcpPar6AqoyFxg67NbavP2FMSqNZyg5G4EkX9VKoWk5BS2GuEkbxGj6kQ85MpaKkw3HYfDmwYsRLikqFi",
  "key23": "5PgkYXfRkKYYhZNNroD2jm1fjmgXcN27sYm7cF184uzL8qQ4nMzmEJP7Ey5M61q9qj4ZjLP76V2rPkC3GzbmzppF",
  "key24": "5KFCPU57oyqgE4ZPkZu2LqcJKENaS3pVXM5szYyXx6UBopHQAscn5Q5omcBkCTPTgunLyxf2RXXcTrrf96VpDy7A",
  "key25": "4RSqbKKABKVY2DYAzspbq6faAdmHcMVzDzH6XtmCn3Hqv2A6aQiQy3UztMJ8FRRhvGVJN8rU7e6Y4BN2XChcovsv",
  "key26": "yvPVT6vkxpwEUtL7wWygFAAiQhEEKksRYi1j78sQZ9Nobm22aJiMPRDw2YkAZofm9PESPCqkNzyxyGFQtUK2wur",
  "key27": "2HQ1RQkoMJGDv6wuk9gPQECtAhoywcp4Fb5dCuAV86VKbMSsPNCgCznH96TvaWdh3RDbhRvVah38pMK5QzvWCDvJ",
  "key28": "528SJdJFRWLgu57paAZSEn1Ave7LFwcBXLUnsPYGwxLwVfryjcfAMJvTZ3NMtpE6JLMMAryy8yjNHrhkYbfokTRg",
  "key29": "2aijfkQKgBK6VWxJpVaBGmccHGoDpeyi2vTVFz9wLnK8ky8CSeuyMAeL6ebL7jqMvWPoMcMpNKc1pnwD3n1zHFj6",
  "key30": "2QUwUc3Lmf3Rb2Cb6PH5qGSjGUzQaCJgj2Ddo7EtfxrGvsb62rbu6MQvKVfJrks4qZ9h8p4hsWZXrjryyhTC7BkX",
  "key31": "4CDGokCzsxyXGjSG2nQktV9iGktUsvJFzXqLLmLeeXzMshTk3jChTMYNEc9V6882homvFtnxZGEEGtjqXLohcj62",
  "key32": "3XCLzGYL3F7SmSN6JLntFSUNNSWtN27RR31YKoXuG3mKTwv4fv7akzPJ4zXqnWFFTPeTLtQ52wJm3HQX1kWgWhBX",
  "key33": "25JxwzsFMb5wJtzCYZCPyYUsNr89pjm3pswqnDiKqfx8XCaayx1rCM26YLpN5Chfjk3rz6voKCKNsAcGWwetW7HT",
  "key34": "22UUxBL2DfrChvoqZGdF1knMB8CQSvGpcHGpZXgBsFJk16b7fU7YvUAD1hqyvH37HGqsT3T5ZLGYGWN4VWYPk83P"
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
