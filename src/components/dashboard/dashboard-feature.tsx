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
    "d94q3xmmBj2btiMzRK4ndfohwmBzjG2g3e5t3hu3VX1cAAEadaYYB6n2ecQYyTAiEre1Ew6LuVkyQ5onMktea9U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oC9pBNBY1ihrDsMcirrodM4F1D7mAid7SpL3jpFV4DA2qoSAqLsMsPZtz1woMYsmma9YkUQZ5CNmwrtxu7tR59u",
  "key1": "3ktvC3KU3uHY8o45fEDvDDhWTnbJnWcDivnbsxEfNpEKMFwXa5fpx1yJS2iHn7RrKpVSF4fFufLGPsEENm7i7qX1",
  "key2": "LCEU1Eh3aNoPfSaErXrJojGx3dd9a135YWGFSLx92bhMYFhKUvVLdNMkgNQPDz7cBr3Trf1eYERuMo3wG3BNESW",
  "key3": "2mh3urzQSaC8C2KjWAs6cuVxGxnw3MsyZStk1VSTuw7NfAXAceVZr6SdsXzV9rBVQrfVM4CGPGKQ7CjUaTkCGm5V",
  "key4": "4a3E11sG34Zceiwri6Z531MeWSksc5GQ5sd8KJJmD6NxehD9HJjxTid5otCBps9dzkestZeSzeE6yUru2kGU8dWZ",
  "key5": "5FQPedQ34g7qpBpDJK282JhEXodwiqLNLV6vPQ5QTc9xWkCbsvPx8CD7DyVbzVwef46s45B74baHnx7nC3THrq86",
  "key6": "4asoEiJFeNYxGFJQZqkvVQEEv757oJmCWHpgSthuojiR2H9RBD6CunvRAVMxjbsdZ7PAw3kc4so8WkpaM9oGkTwv",
  "key7": "21x5EyYcbofkpsKaGWuVwBKi47DHzcL2TNo2XNZvpeXRYYhm8UG5tsyEeVAPq4J49VdhLoMnsWLc1RWs7x4VMGDS",
  "key8": "35o1LnjBdQB5tuqbTJ9GsWhFJme7qoyUhr9iDX4mxdHJcXvNXf2mcVvMN7NHGcx7LPCF7MX3617mpeH4YXm7611y",
  "key9": "3R74UiJCzURk8oEdLvE9vnG9TAQUDXdmXp4Ak9WAvbWkewZqz3nPpTqUL66UTW8dCs8LzqWS5QrXfv64etSTrLkR",
  "key10": "2CKBBhtgdVvD6QdtLwd9YHi1yoBeqmSzDnhVvKxzHLBpTawCdFzEK29RJm5M31VVJWPtBzwGk5PdP6HT6xezw5i9",
  "key11": "529jG4RHgSbdgZTtZca4vEGCmJbJuu5haxNq6QBs1FWsT735CdmmWsp4Cm5H9GaaA4kXzE613Z1y4qAGVbQg6LYw",
  "key12": "44aZqH7FbubGwGKrkCvPeJKDK4t2AVGnyyyopvWMiZvSvfj1vcwGNX8XyDiMopQYBjXfxSSSDiLQTxhBb3PncxFg",
  "key13": "5Y7m1e5YHn5nUFnfbMwdCVPYj63LXVSy6gCbvmbYbkgyTQKxb8vZQg1ax3ghMKZBjrovB9jVA4HYrFGuiHKXfypu",
  "key14": "5fJYr41tjFroGb2a5voxFEs8pC1nfMJQRbJJNawtFBYUk4RixLYehQtN7YPdwgvU5yZttUzg27rNxMhStv99GaHu",
  "key15": "rwwRTPHPqLoEZmBHq77TE1qbYzyXdZGdviwTVJx9WKFua8VLBNvtd6iGW6L42BS1mvu9V47yAC6Cj8aYntYSSvQ",
  "key16": "56QYNWyYWzSMkbsZke1QE9iFrJuYBeiQcDGeNeuXQi1dwmwPxThQYCBMPo1NEHLbCPX9DvR9uhBfaee8Aa16f5om",
  "key17": "3iwweXXyrTA6dNcYBzzxq4fu4TkqLNJidK6iWtSxAJHF7LjkpQCe46MA89C7ZZASSc5miwSnvXTCV5VPoJ9X9LKz",
  "key18": "fYKfobpoMxRz8ebs4PnGGidcbPrNYtpxc8qBpyfPU5dSy1wrtt7wrVuhQfGqphjgMYiUVzE41wPqG1eSauS7k6V",
  "key19": "2skvr8Zq5DYi1YFivvpG5s61vb3zR8h3ssbkvFjjPXWZ6n5m4QGscHCrRj5W1Ev35Le2baaLbaxyGbK5Fc6Edyzg",
  "key20": "2srD97JaBEohqdB2pXnLdMq83w6Hv7JLm6iZWC7625oKtocWc4bL2NTTPtLgg3CRi5Znn2LVERVT7e2G2rzNPB6z",
  "key21": "2XseVeMT9Px46AfrL3CCpmRutwQiM9WhPnYTmSS8KPPV4YJL3qepdPc4cqKrToECWxfq2LU3Rck76jD6jdDGzu6n",
  "key22": "1ee1qft4zmfBZyd4sGxSQvGC89W3ZckvC6aACJSpLchkA7KK8YYxgxHj6zZ7XnuUVe7PEuvCA5damU4KXTXNZxa",
  "key23": "3BifSKMyvonpNeWb5iY2NhcFqbaMVG6T6r9ujRL5eLrvXosVD7r1HeNEuH7STKvoGL4pzTwCEijERZCwLz73PwD6",
  "key24": "kJHxJan3EA9anFecmz7RY6tkVrhBhfgYEojjxfqc47UdFXqpsMrw5rgQiaUYkC8HPHd8Cx2nWwZXCrcwg2ysUqm",
  "key25": "3VPSmE6o6PkUTVSvjSejEYG4iKrwZAyi4nqLvyn7ADF3mBEpqYfEtpvXqSVkKAYxD6vmJABFahZXpjBQe5TfenUn",
  "key26": "2hoCDG2LDKt4MPoPsfPeirK3gvXLLLPh3W37LgoCHmF9d8n5RNtvJtC8gLTyp515RQD3TgWVuvVwKTotffmHxeBc",
  "key27": "5knqp56BGmrrbi8uXD9o8vgeebbjfRBCoaHoXeFoymyuuwwXcAx3997fwhs7ak67UwmtH2Pcn1Sw5G9vkMwv1pg",
  "key28": "4fi8mhHQmR7iDQp7afe78kR2afBQhP7TqXxiaVQGWsyuTxy7NtaHCR5kg4J4tiiAFtFMn6thv6Nb5da8fAxMWbWu",
  "key29": "2TYFZGYFW8PRFACLZq8xAxzqnYaAQrkVQEYjvpmvemLeu5UbjaXXFRBSGteNRio5KWnP7zkXQmBsabGbvR18Fce6",
  "key30": "8wcBSwAYHi7W74NB1GYnqdotbb5rt987YqbBgYMgQYhpfGCDTC81Fjv755CN74xKRucFkz1LjamVEeXrTm3zzeD",
  "key31": "5D3qwQ6oLnkez8t7N8xQEaZcC5YNh7c5LkMevzS8YxNMQMdYNu4pUeEFG9WPLTFSdESszrNjc1tJjmyGCvxCe5N8",
  "key32": "qZ2M3RrDiVTLwHi8n1RJFooQ2AqUYc1Vji4CNnVNY8NBq1LwG4KvHqadHLdfMXo7WnrYEJCK3Qinog69g3UtYbq"
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
