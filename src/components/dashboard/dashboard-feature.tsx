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
    "J9H2h7Gcz3ZDapqx8gUBVYohy4K2DFB5Yyiga4R3GyXFpf8i9viqPJXFEhqFzZVJehxih2tEmNWZWi8u1WVVSkL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1FM3xbsBjuFpWvZBoKLXk2w1JnULZh5Nx27iPrq5Qy1NjELjESAqcFbK35Z3yRqns1Gr1CGXWW7dgoybc69EbwX",
  "key1": "3a1boRBVs7fszDbuvK3761TaDcpBioEP6mv5BXj5paTVve3w6th2nyuwe2kuPQSGViGEUdE3VGRTfevgxx91xA6k",
  "key2": "3bBb4EHxUNAkeQHcB7v4pEsUfWkcWV8Btpo9wbnEHpqmRDK61UM9upjTWwAYtfh2pxxM9tFfFSvReE4bLBfhS9pr",
  "key3": "4PXEihURtnQwzCYKb9rYLfKCXqaddk2tVCKU2Kv6H5oo6TjB9qVtUS8UDwmQhp4qMpxU88ovRyUv34vdoDYWuKko",
  "key4": "51K82VLRyMfdvR5v6WSMhi8AFPWHaS4E1CG9fbtLBjCLfpSQ6XXWZ82jyeBLJjCBgi8xn8UUWZ7LEFLL26T9jX8W",
  "key5": "E5a6u6dJao216JfTaQYXwpBcHdhs5BrWwbHqUKkmsMy6fSmLVYHGNBjS2JrXTHHZKPioPofTMG8ovqEsN7fzhMb",
  "key6": "u2baJh7XjE6zvTp4kmUAruRxd3FWFkiheDexANLrecn34XasAMacThgX7Ff7bUpJie1rEKGksSDRnGVZAtiRykm",
  "key7": "284ZT2YF8wq7ACqNzMDzeiVn2Agr6BHtrF9YN1bh7nqng3bzdzXaqwGFwATyBjRSDkZr1MJiNZM45RoRBzgNVy1t",
  "key8": "617JDEtxEGHrUbCD3fcgzvFTxfJPB47Us3bSL3NzZibhFMxFGCFwTLDphtZ5jkVUVn9ni9wC4W2on1hBWMZi17ER",
  "key9": "tFP86SLdC1hpEUXi2Fu6Rbymm73x5QMwX9oCDtSGFJuJfRnjVCs1oPbbpGj3dNNMTTHKZaEi1wvu52RxfTorFfj",
  "key10": "4Vjsh57vUyrUCdP3Uz6q6kgJMVn6EfmSkrKzbrFAfk1pyy5sdtefEwmDUZMJbJcoLMFrrp8vETeG86JSEJUZ745o",
  "key11": "3CYdWVVsEs1VUQTBsnmyXSCxDJ2svd7Y2JzmaVdfAJYTWy5C6fDbj2TL8kPPv7ePCBMVceefKcgtdGtC4VneQvau",
  "key12": "4BqhQHnX88KzhtNQrvrY3gQ2J8JWGbmeVovitYTTiwHJqDabZAVJXejuxdfSrSJNthxLJZabwm1i12hNCMgoiaGA",
  "key13": "oD26Dh9TsrpdbzTYVpcJUbAef6SMpwRT3qSv6L31Pap3cMant2rXRg4VUh1qGS6ST5DN3dnaC6D4hSiRNuShofT",
  "key14": "q8EgstXkCPDzuw5JfznW3HLSnX4gzzT5RjBiEoSdqYQUozijTcV1vTLkKLAWxLeYFT1X5n9xQBYNbsuEUh4StvC",
  "key15": "2UirQKYPNhnKtDyLmW6Bqm2ieXezNTNCB6xs1Dr9HAuCqXJtyazwh9iqD9CWucnG6tGEJqq7j81D55J48KcYed3E",
  "key16": "1QpEnuyftvB6ZjUxjmHwQY7gGfjyuuMCHmvgVkPBsCdh8hbXttExaAipLiBLiErdaPeXUdY6ry5MutFUCrzjnZh",
  "key17": "5TFUKJm1S4XYZ9erJWJvYoThy9WNZWCvfUxE4YbbgQm6Z7q1Z78Tk8HA6uac2LtNk8cK4ixcjhgV994iiuv4TcCt",
  "key18": "2aJDn4bbpRyPyKbEsseRSJZju4yEL7mJ45SRJh8QDRwzxDVCyJAJJ72zWzmSFFpDcxyBeRpDmQ2YjoEcecSyENkj",
  "key19": "2dh5PKBBFSdNLNeYqzgppMGPSyWcWkpzWXkk3ntXttaaYrey57pza6kbkVUoQS198cJgDLYnh1Gu56toNQ5xwEpG",
  "key20": "Pm8weLMmWNmtuKRBFvwoeNyt96VMp4wwDLaWmwKmC7GqjgpcQySEBpt9ncqeftS3xfCqdX4B4qszCApf6Waybe4",
  "key21": "492V7NdtcTwKgytyrsEMf6MA6R2dPjyyAdNMGKzwF1t9xvgFgxXxozPFutkFwueAJvXcmJYi5MMa4nLTr6YAofZ4",
  "key22": "3DGvD1AUAKomgxqR6HydtsvHYUmyfMRcW1yj1Z3RUKoxHZJ1RRDxjKTDkHB5iVszm6qGrbmois88WUXD7NRYn9sb",
  "key23": "eRV1pExsXfzUL37T5ko9KtqjJrfu4cTZDeWE8NNG1ZZmvgBkPRuCMNs42V2kNbSXBF6LhrkLqct5YEBESMRQPSG",
  "key24": "eHdtB9AKbw9Ay4Mc6nWLe72gS6jACYqsKmb9s3Rx982DUXVw8JFFb12HfuGQyzb2ogT8gBXER63rnJKWNcfpxbN",
  "key25": "4PvdKFpD7hgQYp1MrJpybPLkAFryNVoUzLeLEaVu7jM7dnR2fYXmCejrVBfXE1EFrjwD7urYW9CswgLRhsgfeepg",
  "key26": "3Dzj3KJtgXDH8SHvhAtJhoAmYe6c3xB6NPQzTSxVuivzeadggbaXu6ZXzuq5mjMtSYjHay3zGmkKK1tq25beGtgt",
  "key27": "2Kxjko3SQWHuRWQoAYdd5vzZoPNCgoron91f65bcfkGRqKE2w9c6NQy6iB3WevyxP3txe9qomRjbbnqm8zfWnjHU",
  "key28": "3MoKKm8e2JtTYTopvEKE2TJsUnS4A7UoZ3z8ZkWgDWB864h3QoMy9FaeKvKuu6ZAUrtHdgoddHkqSBxkL9vuXHEV",
  "key29": "KxCCcuJYscEBzntsJGYCCHffE5BRPa3SzzziQo2gT2K7uBX4Ujq2bmrUymew6t3TRvZqXtDduDYtJVm9BTLEopR",
  "key30": "4RMFznnNNtKm7mtnXTSJfhtJHocBuQhe7cv3uW8mcDq2GPuLiRMHkaG8cfDyNbKgh5jLmCuDdRPbBnapSmrXWGSa",
  "key31": "4BdeeRTcPKSPturmTCLjs4997Vad7xMyNhHTHQF3oDCMcLSWpGUsozs52VzdxmjtMUaZrw6kU9mNBsAY5TDQpkmr",
  "key32": "4Rq4ABT8xVdQGVxuYpCpVEVRQNhFGYgxMcJvnx8vUxfLRJbLkGjW38zMoAqY1JrVYQ1Ef7cMbdxtvNZEvzdaHPpY",
  "key33": "2ZjuA2SPBwgrsKa1P3nu5GxiBUv372gS3YDjX61Uy7GNMCNmDqePnwN6zUooNUn2Jfi9rE4B4uA9tdYqzS5pvkQa",
  "key34": "hCLGFSaxShtthDqAEP2RikKpD4YHXZx8d3psPB6LoMijnxEpW1LyDemw3M1Bf9jmANxKanRVXeauSmunpgT5e9j",
  "key35": "koVtCYmXSveA52gwAdjNKfi1BdPPzyJmsDmr2BFf3CcuWP6mGehjoUSSY5Koubw9aJSn3c6o4YWJVBkKZXffdFc",
  "key36": "yMd7NU8hVMqoyzRaW6FvaSHNqyFM5bnQB5SAV8Y7JJi4Pd4su7SDiBgzWpazdjWPUKxXsw4BVLic4cPtcSGsUaA",
  "key37": "2YLSFLHCopuuPf15KCbZsTgNVigSD4EGZfjJmgAj281hCKfwmBXAnWRwxAqGJ8JX3ChC1r4umZwthVcuPuhV9aYZ",
  "key38": "4M96qecMtAke1iZjUcEZ4WVvuwSHPxxD3VrMQVz2ri8TMj9uKEDtcN9dQrrs3M1Qs94MdPzwA2waWSNfM9D8GPS6",
  "key39": "UcY33TMo4gbHcsjHGNJWqTA6SaDRieenNpwCJAD2mvfsuMpQ25zJXv5QAdScdyQNhnAqVnKG4Rt3SpPs3kSZL9W",
  "key40": "2akKXf9z9Cz7inCtHxaHCPaTTeK7yWPA4u29EXbskKu2mW5PvWgxWg1WSiCGWwYE9aCchHiwWx6ATV8dQSqXaaqN",
  "key41": "5QvzFjXLJ2pB3R6HN2ALu8kTtHF2n4pEwBCsQTh4sUdEaTxmXY15j3wkyWgmbbk7GB2XWd7nzzRxYySLPBvFFqGG",
  "key42": "3DW2Rjura9CPvSdKmABSqgzRmHR7cmSvVAms4mGwfFLH6rQNyTVKfMqZt196yPNNXu5hZwVL172Zwgr5r6exDiT8",
  "key43": "9QEBnibxYkiqYZZvQgXeqYdM3EFf72Vybw5SvkstDJ8bxpuDUqYnqKDgurZirKvVNraJuGoWVcXHMqxAYE2aUpH",
  "key44": "4bSU6GPjoxvTGJqgPkLuJevEyn4dKAkpGTjFax7ddax6ofUBRgB4GZX1TxgCTcF5FZo8NVPEmFDPUAzekL4wW3Un",
  "key45": "2GnHTDipV9QBc3ZevP1B2AXnFi5ZSptmawr4Cjt4L3PReKBW54MD5XKRnVQqqYyUHjAm1ktAVe2tHydUGdSuyAcE",
  "key46": "VSGQFAJVEYZA24KhSPYCV2Sx3TNiESoHZhMQoV16iLFK5VvdEKX6chGuCpXZLHrMvwWqxYcjW42SrNY1xmSsEqh",
  "key47": "63joh2u9e4ipFZPNEsMVBdQUBVVqvKiGH1Twijq1t6zQfM9Rxq8Wn9XX37pXvWxUJX1ru3HNWGk1EqgWg8oQ1wHU",
  "key48": "Y8AyPbL5LiRJkaNMow54RYNXdiyFdEpzPS4HpBAn89tgzdVRNUhvW879Xgv74JTPxWiraHJLh2ybPZv9TieJe8R",
  "key49": "cdGQymcsq7HaWkyTqUUFcamWAFTLJXkepAZmXv9UJTCt8BHksF1JdZsi2FpQvQBDKkfe6iK4B66TsxPrb7YJF51"
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
