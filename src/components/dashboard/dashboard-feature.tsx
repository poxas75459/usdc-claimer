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
    "2FE3C94qBVXGzJRHKJAqanyMuRDUEWy1ZaZPRmcDyVuoP7CaVKdzs2VYtSHubpF9AqrTpY23DWPBHCH3AkwT2TLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JDFpdudU9fiojYWG2UqQdshGfkk2Rb3UMPPAXPmCZJitWbYwtao5r7Fgp7bs4gSRaNT6Ruufo1Xr6niiCJmt4bP",
  "key1": "ptymJ2x5bDkFVxk4PJzx2DFtwSzWProSVUAMNJEoy2RCxn5HSBaLCKKMoYZ7ZcKwVyR56aSP4utgHQL1ixNV2nL",
  "key2": "5nf3RbhGNi5We7UUVYn25mKRgpeBGBG44J6NkAueoMrGudV1teaRZyYqxPZeTQ6SKruiLYyaKMr9jyYv2jrZnbFe",
  "key3": "S6qZhmiEW7Payb12eQYkP86JJ7n3PvXh3N9mzzd8BH7zsN5PkKywivrBU1xXM4QQdEky6GQnLosDDWczRMpaFsL",
  "key4": "5aKP6voBATPaDDgoT8toFdVKcRuCjXpMBWDnc2SzYHPagSpoNGze1ADz6apHABab55kkJda1ssXmbJ1Wnf9GfVAy",
  "key5": "5QiuiWKvKzBQsxkjLY1gtJ5dsTD7ifpmBzF5F49iDL7nyMMoAkdhCcYnyRvdskRfHb1KJHdhdqwb8jsUwzyL8Gfp",
  "key6": "8ZPQecqNe3QfB1tiMtr7pVCj9uRcPEZin5fu2sV5jkz8E2QCz9NbJrvpe1At7ivRsNqkTM9dMBw6tkRUzKs3UUy",
  "key7": "2y75o961Bk9SUL78SHG4ny1HSArz4d2zaEu8Wd3V8EhE8D1diNbBrAZZd33ws5NW5rqP9JFQkMS9wvjt4EVei2yH",
  "key8": "5gyQF7VXZjs2vH1WLEVpLzgMfdXKoYYGjfyKXk6kV3ySCPM2BitKRZLy9neoLFvtLraSZyN61Sjn7rut7R7PUtru",
  "key9": "3gAH5vxqaQjigdE5r5yvr93QCCE22yju4kjKqBAUGesZrp6tW7h76dcPv2Yz6xA2VM8ohBCemQ4h7Af1TNsYztA7",
  "key10": "5RKBxcnMqL4vbBkpTb2LBMAvoTSd273jJ3s3i58yqmtJUHnc9yjJB74YgXoJmeNgkz2YcETJ7C5Snm2zEKQJQKRM",
  "key11": "4rztwxMWKTcPaCHkx4D7UHLMUziZpDsNqnMFXdvGPfjUXRXzxmXWfKuh4njUFCPkN8Rh6mnGar2pYKN7KRn9RJ1X",
  "key12": "51AofZFz9VKC26d1rpsGPgqRrjsZcvZUGc37ymrSNGqaVHgSi24ThiYcaf7FnuQ3BwqKyT2mujzAQxf4nUxUxi2u",
  "key13": "5iRtEZ55WR8xQToFUpKKERmckwqYwqAPoSq4Ja51byCh3ye6Y2Yrr5zKFPhbyS1mgEqhkHFsbXNKk1hHtL6paMvH",
  "key14": "5r1SjSTXddrQZL5b2d7sGbWBMHDxXvJ5rxu9AZev9b7VrsoexxG7Cj2Js6CNV9rMSWTdeareKQjhb1kj1JV8A9yg",
  "key15": "3ykk3vj4Y5FeKTKTYKLzikwUr6m3UUuFLe8SMUuADdH1Gs2njBvvse4WdJajnLaDkJxhpLBGVgu1HgjZFfHTLd1m",
  "key16": "eZutKGNd67GtorQidC4bZx5F1hxP2MoXpxnamPWMU4sCxHFYL588BKarutetaRJavQ11qjhdRcKXofibiqFkjxL",
  "key17": "462Tx1JqWfnEQ2A14D7jhhGE2TVdSkqwiDHk6VGNscU88kWgqALJMGUmM63zwfXvorcPCRYh2rK6KD66mxKYix7r",
  "key18": "4tM1QcTTe8FEJLCDkLqUDzaBZBYAhaEeBBs3GYkYo92BYzSuhHbjmbemaUDBDFt1bRj8wxN6ch1ixSBu85PWr2HV",
  "key19": "2kdye8LrNvfuB13gFKuskHkGgJVLsusDrHx76dqi9NDXooLjXiNfPUKcNhTxD8pW3aRGgvtjeSycQpiCjFba45sa",
  "key20": "4BnfXKnhy3dAwF1PjB12UW2vdmPvgsCdjTRPzNkCNJLByFe59CrDARsiMtRhWHDomAj6LwFGnu7LBeAWfSckMdSh",
  "key21": "WCvKQkpcDkRrcg7S1mNM5v1vDQusDFfEnD4o8bjTfswZYHisaJXkaDSHFamxjNtj9rk3rSNnJzesqKWqUqeBA4i",
  "key22": "2EHhVShCnmSELiCYdXc9nQm7bduLfwVDMktJTxghD6bmizT1iY6DxuthToFSG3CSaWGKXKWDqywJSP14GGZZUffT",
  "key23": "5rCnhDYG32UxGv31eoZFXuMSgKx8j5fxt5hGccM9q5trYqnfi4FYsbnmYt298r4tcY7nYWuXBGTswsTNfvUoEVKa",
  "key24": "5Hd3bet62XncTKGsMegA1U1RbRiA2Eohv8gu9ooBMUkpF5RqPzH7pHowzRPsMcP79FAB8xYzWahjsZRmZR8HYFWc",
  "key25": "5kSceAsUauAZS8EbBssPVujj11o9zrM4p2y7ZKhbAapvdcJBA2UpHBibHoHu3JR8emhWLmvMY5oMpbF8XgjFQdpA",
  "key26": "2Ex5o6fb2iowv3TEbTEFsh1H48pVRUpfy8XkwgYt6XcN1jHhLzGK8wwzFF7QrvtQSTxn1N8im5o6YrUXbWbxBiSo",
  "key27": "F3XmXXkFLWtYgxbpmB1o3sRDZuNbi7KnHbBCACAgCi4NEDreARZ3YQKai42UnUTxyyFJeTFxPXZ9HDdFTejh15i",
  "key28": "5tq2w5CYRnQLvnyqJYG6W942A74zSgiMrL4BBTHd53wZoPQGEzbpruFYccBa9TsbYqa2sUEQWsJbdueuuRuY7Gws",
  "key29": "v5H8ByyyaeVcxfuWFsoL9ZeVj937r5tWLpzjZBfszx3eDLv6wrjD4q3bfXSfZG8tHyBFfFhQC8755TcYM25GWjn",
  "key30": "4kmkosfvQdvjZNaxb4dXNPh19t54xudAeqJ8TLH6CYXnhjJkK4JFuuyjWQ95kQxj9Xc5i9J8JoV4VCsByBVXJGXA",
  "key31": "3xjyGYKfEQUg3qCD4CueADwNdTgcA6563Upp1uK55XYeWsFKWtM4G6zUjZnXjsKdgrdKB7xkt62rjF754h5PD2Sk",
  "key32": "5JSEZhvvZtuVngiE5iqD4p4L2xwp1tE5yWYuKhD1HSUQZv6DMKh6yrVkPd34bURPagG7LVFFw2Z4RtWGBzezsxXX",
  "key33": "36tjGXywarF6isV6DCkGv5awMBxerMaobGMEW86hZdpensnNBccsSDPosH3czvQbj83MWmDhaDxNYdcQePC8qcVo",
  "key34": "5F7314fbLFTuqc3fXJpFWNRzsUQuHbmXMNsdgGt5KamhgKx3PZbkjFj3ep8NTuJWYSKyjtGJRQzzx9kXqm1Kxv3J",
  "key35": "3SGtYpK3Qdu7iPh6aDFFMhjbBXEHsUcooxB3VJWqpvNuaKp3HHqbhtvkKKMNKRyhLzxFtupn9AUzEPZHfnkhEMk1",
  "key36": "5gPNHpvQiZwyHdjC6dazqshTEBAxyQAvp8cH1wSjHNVMMX4yGfriREAL65x3niBHmQPw5ZwbeLr2DmJ5NJemdXEA",
  "key37": "SNqvBkmv9KAsAJZj7Y1YdMK3yjpf8Pb2VKMPibsCMYjQwE49zVkVrvbvdAaS3ZJtPqM7FJyQv9AR2138XDqC62H",
  "key38": "3UvqCZtHcaHmAdZYB66ALLMQqHSyYCmJPCs9fvkFTN1Xq8Y8WdhK8ff6PRC28y4cAA6v7xBuyssbz7V7vy7CFfkd",
  "key39": "4GWwVBvoh6JjSB5mRUZftLVRQh3WdCV7QsMZp3NrjPe81EuNegE1wxCiUd8Cc8u3j9UKRQSygpRaTe62FrNbeq16",
  "key40": "3g5y11FAic7AqsaKNjzFHAoKe5anGFFTT8QoyNKK6bTxPKktKCBH7aFopqV7S2yWU6J5o5ppfzajJLHzt9nA75r7",
  "key41": "4p62Gc7J6fos7NV3sEhFT7u9qdW7S81dtfVuHLL8DZVV6NqsowTutYQLKvfGjr9gmFaTM8UqDtb6GS7HKNJG4Z53"
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
