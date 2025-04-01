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
    "2TwbVPmXzXcDe9PN8NTNB6xinPJg11zewgnjP3tDV3BPdXwkr6MSYQ4kzvxE25E8gAFQXyMVsgw6wGnZbVqVAGu6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "96PmXrLaMyBJ1uRmicriNKtaC2DGxSXsUYRLWuvnLTo5HgPRDLeif3CPsdGeTNgUixFsWPnVqYiA3ae9DNbL5mW",
  "key1": "1sSmGZB42mDTudL78tZNwX1t1PmaADnzB5536x6rN1aRppGqSW6evcwyFEe95zER6JBbtK4jk4DJyB7atdLNGQc",
  "key2": "ov6WpEnuLLamEP8LbeCtMQ7A5nhSMgX29NKngBYbnFAb9Ty9cZTPnqL6kAHW7fqUAACwMAcT7W4jRx8zC4y2AXZ",
  "key3": "3oRahFNmPqh6faSU9GR1JxDqAjS9vCdoqKPRZQbWDgNbAj62AELCA33DFCsD6Y3rwhEW2BtkcJDtSbR8Ssdgxm9Z",
  "key4": "3dBtCpAfVcCkhuMLEjYXJHmGUQJPDFoLbPEErUR2eJc3pkKHUgd9DcPPQwrFqPH6KGVBoFbWsQTiJ4gtf1Tk8r6S",
  "key5": "MQBa7rNoxZUdw29JnMkCXtfqubhRbNi4DPiMQ1tHiRNNZ9KvcYzCggGLvWKhnrUUkjeCCC9C5th469BKSXtLGyv",
  "key6": "64djRpzRejr6MjF5wSeekjUtKVv5fYw7ZbfuVkxgebXygHnJSpw1RLtMmrD87Rc9134nrui6dZLYVMHaqWCHi5B9",
  "key7": "4WAVcUZzJaRYkQ5qzFEhASLd9gzEy5G1BnrrNcze5xHYLbMtCodkPA2b815LQSBaDk7XRAbbxka7T1tyS8yoqBp6",
  "key8": "5t6Lw1sig1bZtpWSTT7YUhEc6KEkGfHTDDCPJa7pxDKZjNPR7KRjUAeCFXZxse7F1SCx1w8r8hTiri42pqWtGPCd",
  "key9": "4w1mSWJ8VriwRmt32u44WyjSwnqhKD9goNnFfUsdUGKz6qMJNc25FRYvsfP9K2wkr3yUDZ6QgDndJnHaQkXAKTec",
  "key10": "47eMwfj3MTuoVm1q4W7HKQKBE1pbJHs4iBRhd7UxxqomenbAy9UEj7ESvZVsYPA3rsRibkkC13w5hTY27EMAPXbk",
  "key11": "5tafu3RJf5q4PejP6uTGH9aaxGPSuawGdbqwrjhg4zK6d32hXiNDq2ZN5jxebUChjRu6X6rpxxFQCv4oZX5WEbqs",
  "key12": "4C8W51DsHd6fwaxcD5TA6dMKMXnUFfk4PwYB87J1UeVHH3uq4TFYGWiSTZWhjsc6m4URy3jMQhDh2v63uyECE5Wb",
  "key13": "2RCq7JNa4w1mgaduFUWNUzPbJiERsgUW5avxscutMP7ojS8x88sYVbX3ZS2fSZuGCBqBfavYgoNzmxjEsMhKuvGf",
  "key14": "44L7BFhHwcRRNPjPpEjLr6TkkaPJd87kNY2LnEQLJhHRE6vLpNC7zxGJ62C5cACXE9VPpZanftzuJ4CERHz2c45z",
  "key15": "4gGv8fgzuFkVb38WfWqbGabwtdvBxdoFRMVFLHwhqqbHzdANmnZnMX3hsR61gvwN48pwoYKd1BJKNms1LV6PKGT8",
  "key16": "4UHhKL8BwdrvAuvTaqhCrsBweFhPertrVAQJC7LbPWTvwpDH22UiA2CsV2Ehg9PDHfDH1wYCtokPnT3hUDoNsdRx",
  "key17": "4hK2741au2Rp4AEysEx6fvMdGwRov3CY2D2Z8DBdmyPnidkfVXsyErHXWuzB12cajj595DDcUjuEZfuHmdiCSHWB",
  "key18": "4W77xemmeGwLv6tSRcX4cTEaDL8YjEPsWJiVwnhvZLUh9j7C41218eULT13rw7749ZpC3U8E6MGsgRnmBMUezTw2",
  "key19": "2Xcm9dctvqVr1kFYtLcUj7u51bf9Ku2RPgMKNWcSf5DS8nnjrw1cXcuQGy3hLYKD8gAPW6TnJ6Ud78zt6Cse5K6P",
  "key20": "3A1mEscFTtmbitG53aGK73LpqPitzkgTVM6eLtNNV9QWQmjBwWvJpRSfVWv5Y6V8F5y6Ew3PkWLMTjsLi6JHbmP6",
  "key21": "4tzjfvL2DSf1H2HrDZ5KFihknF6oZyVhTg4oh26dZZio7VvCTLjuLvDqFMDxvKXULn1ocN7xotsd8HdvXXCX4FhU",
  "key22": "22g22godJ1nNGJHyu8dFHxJJQ6N8BNaqv8DemL2Vxvbjxv4T4S7TaQNyfr7SfjDmWYPb5UALm12N35VKbffGLT2i",
  "key23": "4xowWJ1hABBnip4G8Cy8jCFb4ePUiTqsmxZyhALCEQJGXAoLKJ6v4Te61v5SrUfkRdfFF82JzYeE4L68QbyNHYNa",
  "key24": "MVZS5W7XdhjakuGYphkfJdke5MVVR1vrFJZyVY93tjxZqinaRoquJ2UFRzeQb8yZfKzXaEKd7Tw8WEcMDz7y6nQ",
  "key25": "jHprZHNMAnmpeR77NSzugYLDHCJPwETb2m1A6DgWbGmLpsizMbVPFBwnUbD4VK3pjm5LVoWremZd9g3D9GF4Zpk",
  "key26": "4xBBB5AGPZRBWAjug9TmkKT3WCUa6yGykTEj6ShsnE3X1VnwWp3AVdTFYb9Ah2ZTLJhRcGCbjYfFVF13VPpjZvbN",
  "key27": "RwxxDqEsRx1LT8bFCRw3a4wneNWzA43McsJSef2bzA7jMuoCM33eixQckWRDribwpbwFNCoPAqfS1Qy97LLLW9D",
  "key28": "QdDfVBtv5z57H5DMJr8q4zNtp55bNzNARvFiYVrq53BWAJudMB9MaiegKg4Bf65kYKGrKUDjo4LJmtkmKBAUtfQ",
  "key29": "51XFRvv25nPAN6PG4ZYopWuNfqvr8NmQiKtA6PaGaTuYq7LwiUJeRgnsyscKkXiTztoxaNF72goNdMS8pXitUYR9",
  "key30": "4mTfH3KQjTLqj3HASyec2ZBpNvEWXK4CfXqpmS7dxBVr2yR6piw3babRvux7Q1F59sC9we8ofdRZQo9FVCvXduPH",
  "key31": "Z262jZktjZDxo6jDkVS2fsU6tTePZNFcy9ZjxQwKvFhtqdatotiAPXUwXZdnNRMcKHnVthjpyx8SZGFw2hbjT1Q",
  "key32": "4AskAu12bzLs8JD1np1qd7r9GM8ywML1qCRXSi5hksedNyspdSpMKGBtL5J2cvPvavXKGWaKbLcYtzru9cxKjcck",
  "key33": "3g77z4aypqnXZQSxB6kvH38Au3SypE3j7k9niNmfmb6snNkyK9ggM6F9GbSYayqbBzofgPomMC9tLzRFuGdJAnte",
  "key34": "3S575XDyDkhWsPG3SfM6vXNcBUJ2aW6LRXi3ZEBN3TA6Dc1NejqqZDmp3j4HWjLhqU7QdPJmZKChSY92X4jRweSj",
  "key35": "3fcforJXG1mPYcwwY3zE3K9wtn5pegb3wv7eqS1tiRFHEfXGd7duRyjxuqu5CApyvJZj24prqQF88Zwjt7tkZSva",
  "key36": "3ySsBr9QMZh3Xp3qg9MXQDSyoKadCY3n6sTWj8Cq9jrBAtzA1ys4SYnsHG5tkETS5cuAvspUMUHNSVdTTedibRq2",
  "key37": "2PkMjVRSQSW91UzbbqeCVYi8dHa5D1aB19sWpBDdCe5JjcEDhPpSJ6b8dVyXFZr5C45ypNcEhUWrtmVEic5Vqzv3",
  "key38": "46yZUmtdV57WnBdyiL8nujR1iE6xaDP8k3NJQ6b3h89iPZnMMGYkMoueKak8GBcfEpMAPDwAQEQBaTziGFpbmnbx",
  "key39": "64mjP6AGmz4qNw52j692m1QC3czbpf7htcytM6qjZ6BaoWBdrekRFXkJqBFAq4PvXFyW4Dpab83NvtTXrKCeQqcq",
  "key40": "BHd5pYfPbBmnoeCCXj1SeugPnRcBXREtPmdnfHEahUZjkxX6GzBxn8PdzhyoVXc8jSMsepfFGWRuWbtgQ6ccEpr",
  "key41": "2z85NNtKtTp8uk1BBRXFisN91ZoBXFpnmoMWSVd6DJAyfpNjqLp7Xx9G7NAX6ywCoSYt2xyQDViFu56etNNwP8Nu",
  "key42": "2tmrXZCP9vJvkueaJj9QYrEjxUiEDkR7F5ukKeeGYBj2kKzogmZbLUT6BFN9VNVmBQCLHetjHdKmu2fBcDn7qm8A",
  "key43": "28w64efvC1xyPAsxV1AU5SRGYc4isLpUsjHNwAqT99Xv8eCLBTmfs7NSgHufgPpSoYbE5v6moCrkXB778SL8JEnx",
  "key44": "5Bs4U6g5ejNjv8SCQ8WpykUWHGbjiLPneuWEeAoufDhRmPzxq7L7vYEGC2PAJ4bMU7V5WZPFDP3w567Ae2gprxf",
  "key45": "2LDVBUXgWURLPJjqSNvgw8XXjj5twbSMNeQBN5JdfobHwPb528TSv4rGate3foGDPkmKJv5P1NfT4Qwvcy5zN6Ay",
  "key46": "3RxJpxusTeW42Zx6RF9hoHoVEpq1tj6sDiWfkFA7bBNeAAtRFs2L8SbhMEMxJUEG96z1EcFDc9dFxVNRCkJj6E4K",
  "key47": "5gA7m9c2adf4fLXBCcYZ5wZpUch3NunAoyFM1WjFqtk4QzY8MDEok3ZNYMQzzQUvEP1pWkYuhkzWZnTygCdkpNkt",
  "key48": "KxBsK4gwYYDRR9dnnPnwLfdsJwY7m3tTwwSHvCEZpXHsWsaDJoMY2iAdEEkzXjzNA7vnghBj33GVFH6kz4J4oZN"
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
