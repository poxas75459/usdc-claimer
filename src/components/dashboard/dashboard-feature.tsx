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
    "k6hrN5u8CvwJBnizxRwLk2ogB1gJFGEmtkLZtJ8vbqguXdhkqF9UXMMgpdtnoWyJHY1o6Txxm66FaazwpJ8DDDo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "391wGFPHTYCtLh1ChuZeG9Z2hdUqFzEZ4dGUWpDzSqnY9ikexmgjaFFtiznYVA37MQFdjHvefSQEnAQCZkG5LfrZ",
  "key1": "4WrsXcTHsLyeod9UsY85KMyyXRKd5vrMAawXeVitNTgpnoCn2agcMqPPqZfKknooPFhPe2tnnDhwWyR3PzW8xwr2",
  "key2": "2Ge6Z7M6XhXYU4ZJtr4Q11wqjX4CpECtWJtM7P2y7Vn36Zg4uCobMgZ2TKugL7rM9ZsjggQxjMkRQsyaT1cSQK6M",
  "key3": "3M4oK55vKULc9QtUcbvgXfQFf3qBxuaMsZkk7wG2nj2Tc2QkY1AHMSnMuXf3WCWBqRRTEjgbf4K9DiZREzMUxyrb",
  "key4": "4dPyPVfbS7vqNNLDEfLS6MbxzKfH4Zk8bzMaY7QMKNiNBmPpXYLgP9AfgwtKibX1nRJKEiLcRUmMib8cKV6UB13x",
  "key5": "5UCR2MYFb9gHA7P4jYLtk5obtJnGd5nBcCcWd6aucbEWiBCkXK6JBbxG37wgAHa22vb7S2kLLUibxJxCABRQMQg3",
  "key6": "56HM81K6tkTJdjWTtBsHiEHVKJrPASTh934Ahd9iUD1MhGaNNB84WrsHxHTcCp2tQGob9xzHnPiLCe5kQh1kMRuR",
  "key7": "3xNZjxrrxmMGcUf7o7y46xKqCvzM5qwgzeBGf5XMRZ9BusiNdDzE9ktEib65iPJGPUAvmvsMYhs2JkUqJ1zxc2FS",
  "key8": "3RxztsgxZTRBS4W6VVox17yPu3eUJX8SkpTrwprhARJ5vunCT9BUY4Ln6UCJ6358hmNb6QbVpN7DZyhyrQSuvALg",
  "key9": "3h5MBHHJVZmTAdKkvtDkdR3n8n9ENQmyuw8k8k6JdRZ8CtNjByjHpGMN4EEh5QHmkHgDhsXT6VEiYGeYHnUmQVHE",
  "key10": "2Dw3cL2DH75fs6eYCG7aWNnCVRDWoqMovVbjRgXk2JFpwBqvuuGqkt2R64aJhHJTV3UuL9cJPE3mUYi7Jwzw7CoC",
  "key11": "5S18g4HtDLdxra9gMQ5qKKUqM3FEgy395JkUdxnE95uJx6HizDvaCJdnSUUogf4vFhAmK8MvgdyAgJ1GNyLYmgcg",
  "key12": "31rbn4zHv3ENY2kxaNe332EFss11QRotZcEecRnLHNrC9Pr8zmgQjLp8iZjTjaBDYmqxS5j25foUKrKwxpouu3HB",
  "key13": "29MoQpFGe5GjDnm8eZ1hTyrgb3841VG6zfCm5Ve9yD893zVH6s3vU2QdwUSipBFrBgkrd1uhbfXd3xzhbwyPpkWM",
  "key14": "2NwLg6FsDzSm9PuMtfXcC26WrYteBX9WQC7qHzTXk2Kd5Ge1akuSuf3fRji4kFCNKSc2681dQk2xn478qNtkzyn",
  "key15": "5dUFauKhRqgfXm8uK9NFxnDuBrkxpBrmB2EVvyeNuD22i8WC2LL49TRgfqoZw514XBFChqXPCMeVpJAKbodgY5Zw",
  "key16": "4qzbmkJDRW5kaN1azbnqGUWFkEGXwcvKRDq3KPyF37utHMXBR15cesG7Tsj771Dn8UvEyDrYhzdmUJ25MfrD9Ga6",
  "key17": "2MsDcTEWgXLMFYGSBXGPWBrAJZhH6Wao5fM8XcHWrQKxAX8vUUXDcrgsGqVk1ME3dHTp7mxL213zcZa3fFsUsPAz",
  "key18": "2DRTXyhqZfsmZZif4AagHHy12agYWoj9LKc4jtxpkWmh4XpXsKg1Ktq5TLmH9G9KEM2pNtDrEBKssnVxuZFVUmRo",
  "key19": "3RqFmcaZ67sNqMniskv3hKpBVQFgDV6dFShn2jD5Wosie2x5hBDNjZBxh427MTbEgkASn7xkPdqQGqKeyNAjU1GF",
  "key20": "43xCghe7Lq92NDtGGFvwVLUan2XEEYi9C8P3UG65mw2RJRNKfvqkNMBw1ekexuoXo4AyproncQpe6gLjQUSTNmoc",
  "key21": "F58iSCugZqY9nAwHodjHAipocyGV96K6rYHPjL3XKAbC9bJMNDDVcfVTHUbB75i7w56Zxw6h1KSx3UAeKMSXu1a",
  "key22": "e2yyRBmz9n8h3ReAP6ebsyTtAQVc8ydRdf39kbypLVfj971uzPfm8JTZn58cSZkYbUqAgKRLE2S9Ug34sUQPUP2",
  "key23": "62X5GHGwZ17q1h9Wps9a3xEKZuq6m2tpuA5DHwXJP1Y7UJmVPswfRHDC8ptgFAQ6Du1idqak79XynhXNvdpfDQ2s",
  "key24": "3MeVzyY1rUo7T67ejETtVR1s16sqYJRkS8Vq1Y33rcLspcKpRupDi5kXEjGak5HPJQE4CgpAoe3PCk5cV22SyawN",
  "key25": "2UEBuFSHno4fytvdJmdTMvomGtNPTze5bTugQXoNSWqf26RdWTi6DoSW1CywFbPCEM1gvWkcRKM2QzThLWSnnnjP",
  "key26": "2yfSWCNYubHNJJtaCp9kWEQDad6ckci2oiF5ycAfPJrkc9pKZ5Lio3hj4KaWxqfxrZo8a1mNxRRKBMGduLfqeTzi",
  "key27": "49B4vgS7aXjCKRZUzmpVpSfW6RBWnaj5apZe6kmBFMN2gEu3Dm83th52uA5CQsfm4GAYRdfLogYyDDwQZmU4NWbb",
  "key28": "4es5Phi6EqUWd2sq41jXG7wRUpKeWgS1T4Xx1Eeif4tYCdtNDHPvyVkDRixrEuwhYDfTxVBEW2nWsrnkhboDZnLE",
  "key29": "4HuUk8pbAoKHtiLkv9dPfkbWSEBGGkQLopGokEdyEz6xCeuUpbgkn62oYhkqwPuStYwH52eU9qdPCBt7GFP5hFa3",
  "key30": "2Xrt4SWYphongqPXk6kaL97QaoSXSr4RV81HLNjZXTGNe5RtWdHer3nfWg4ReRfm2n1i95Jfbz2o5SqKBYVHhPeB",
  "key31": "es4caYzaaXqLVV9HbWTK6bS7L44SJcPNjiekKZ3hQsDTnyvdpnUtotEAipApUth74rKaoAASf9615EPX25RabHG",
  "key32": "5XynPJV9YnabkEeSLM3FMmxgE4ubEtMPauy5CnHVZX7h2A9xshURshpQL2hJZViqJNCm6JZ9pQFKid6QoFK1twMK",
  "key33": "TuzQTRJcnfj1VYtCyGFXQLbgWg2ThKvjUrm9HCoawRdM4RLesJCGmz8rnX8aNi6dy1Wkf7SEzDcpbW47GmdD7Ri",
  "key34": "55X5EVmJxnxfdstjTRwoembn1JKp66uF6DWEqySt82LGi3LZMRUdirh64g2ULrQ1Wrr5yqeMgS5CjehtgD1ZxLJw",
  "key35": "4Lu1vVM1uimyS7H8yuekz9HyvcDKwMYJsBh6nAD5NF7eXXmHUouvR4TAuV4CCj82n1zS26Mng7k2dPKDFqy1CAN8",
  "key36": "5HsxW6Y6jLiZAJhTWtUzYSKb9GE7Lyrpia2AtQ3sjCsz4DgT6BZvcCECFzqP23WitXaryTgbRPZhmXgfG8SazSAy",
  "key37": "2Efej2qnGu9WA9d25C7yS5trsEKea7pBGCxBG5WWURCTytmFfC4nDLgBRjvKgCdHgS9gm88mJvjAnzKWZJr4G6Fd",
  "key38": "43iANed4cquf7iyXh86xNJM9W9xpf8mNo8kQv1Y2YwGK58MDrBbDcoqiNc2rhRp2afiBhYQ7DnBbN9A7Lq2W6tq6",
  "key39": "3PNxgE4Hx61ZxxpxKdJzcjq5nEoefg28D9HK9vFNXZ4rJFuLm4KtC18vFtkWmW9D92MZhSkYqChQzjwF3TkWKiYu",
  "key40": "5msr5BJpQv4tfuJfScCCEAxi8dFBcwyhQmGa7QneMiE7AicZFe62HkkNFzxx3qZvdPktAxuYhvdGssqfdegnxEKw",
  "key41": "5EW4E94E1wNu7GzHwggdL1H7uw6sZdTLSsgaof5EhAE1Prrfu8T6w3yn2XUMFSRPj8MWTFpgGd2r1PrarJ6duoyU",
  "key42": "4eDavMdN1DiHJKuNn36buJfFQH5xhZP6Jns3sgAonbrN5Hg4wf2PxfGcQxT6riscSaVE3DogF9ZgJPHVnki9WRMh"
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
