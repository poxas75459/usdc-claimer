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
    "2Raf7kiwn83wnTRzuFiDfqM3gYXReVQeEsxR7wCgNLAQrbBUBWCBQcdu6umYdnMktW32R5cYz4C25tBrAMWRE91t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3oyqX2toB59zmsAtP38qqQWiuUNqEtNvLKux8HgdY5HdSwP4XxtMpnHH9LSk2ioD8yxNZvSzm98n512PwAPJ7JCM",
  "key1": "avbr5PgwZd6qHh1bvUtWMEpBCszpqrsWoyzDnbkpe9MDK4pbeWHe26UMs3ky8cDzyWwbXJGjuyrPPEgwRSrkD5f",
  "key2": "7kZsdtVEzDX8KSoMSnhHYYrPmXqpU9Qd4m1yq6ZqoPcZHPpQtUhGrrGyxZ9N94mTN7SgSE9ibrRBxtYsvnyXTxm",
  "key3": "zHa4Y9n4tmU21L7LNbk5GFx3Rx1TVaTNBSeaciMwH7Exx9U3UB3HZvv6m6NeiBarnsaxdBK14e5biptT7MGJJKF",
  "key4": "K8Qp4my7cXgwT14ne6Uy34pmE5vZ6pHm9anT2wz8EMtBWTHux9vaWXiF2EXH3BJMFAyzHgvm1gC3TRWYQM6FbcB",
  "key5": "paEC1WBHNrsDCPh1PNEgySCNCY7JPQL2tJrjeH2VcbnuZJfNRjw3EsfL6UPkokTHAkQBhLFcgx6H9tNv1qZMq8c",
  "key6": "2pQjNwTv7gU71KGd8cU8vCpQLVt7VqWiBsm7SHY1H5QzfYo6DXToCKP1pxU9buA8zuuVymMw3u8DxiiHHnZhsfPd",
  "key7": "57u4oNEVZZLe78jfcu7BdJWAfjjR9mXdf8o7KHTrEtQujbRRu22XyTtYgU6ncVwJdMpEW3CwBxb5Ydof2tvgVymM",
  "key8": "nqM4YAq58fPU3otEPx3pJ5kHUJePRiSXU1bgg7jATHF3eRZeFHHzKH8GUBqTyzkjGfY5UpT56vnPTiZVb3u73cz",
  "key9": "38Wif4J7CPHS6VHt4ZU5ivLccFpgJ4FdToJddcG1Nejx887XyohhPgZJn4iNYu5cbghHrSK6gT2auDc45U9PaJL",
  "key10": "3fz6kVKU2Md9fctoHRFPFm5qSLiQjc3HeAfPpWAnr1CNsAaBRV8PARG7pnBeDy4eT4tLmiGWu4TGCdQVHNcACjed",
  "key11": "2fCzm3AtdDc7oaF8qJE3dPyhxFNXiHSP6gVSK72Ghe3mCMTvqmQ9x84LznsxGx56M12fLSnt669UjCe6zXEy5fh6",
  "key12": "4F9VgyZxfKtzUEX23dVU1HqMthK9gYE31qGdLoMYqkUSUfr7bCmqUaRBrYnDY4x9wu9uipES1emdMe5w2gFKxGX5",
  "key13": "xekPPTS2tJi5xuKjkvxwkdC6K23oevUvgzYkznWqX4iPFJdYN9bdaKJgAT2EgAimsMCqH1m4QwVLbJ3VpUuMz34",
  "key14": "2ipzq8AqFXfe4ZoG7a74TcUyLiuVmHbWGr69NqrSUqVik1X5mMM9ZGaXcd9rxunbAQETikjHeJ4yDS5PWwGhLNme",
  "key15": "UxQREd7PHsQnegQNvnruCnTNjgVYKPNVdKAHgHRFu47BMGqUQAcBsNcLXc31zaYX2C8BPdGEmJqP7sCzc6eRQvh",
  "key16": "52yVXgE9SMxPJUpEoijGCycv7jwrP1SjaZGpzvJZ2Z8duF1pocrF514AeHarWDoZ24ktHi5VcHGD7VJfK3MTthRB",
  "key17": "EPgaRRAa6z8VYPMJ4GEwe5H9U7yLUrYRg1ckUhn7DErMRG1D7GKYXmooP3fyuPGeh7WcM9YNMBn1Q912FS9zsro",
  "key18": "asuERR89uoFEqzUALVZZRn6BG7VR88A5NwRxj4W3EaaSkgm6YmjVY6ppUQ1Zmh5Bh2XBo4a3yktUw8Gi1QiZDhX",
  "key19": "4uEpPHGX1j1UfaWSnCpNY6Kx8igxxvxeEaLbmVYEMfY62D2pgUd8w319pYYtHnYBJZZjdw1RppxEtWfsWiBwQ2wV",
  "key20": "3WMzqXk55zU1FdHSSAY89NJqxejNCBKkPL8AQvDFyaXrn9WDPsz3aAt8cFnAbfDMMi6Hdqk2toUEm8dCLAJMRXHQ",
  "key21": "4uoxZThGL2UwzPcnxspTNpqiVLsgU2tDvAT7kLiQRrLeu27BZXqattxuP5aERBbG3iLQWs6dm84s9yxt2DrhsvaP",
  "key22": "3PZXBjPBy3Ue3CGJhH5jjDSNZtuP3cHvcpNRimMhrXHDLkvi2kHTMo2eQsDeMhUpSQt1BySznFixWVZzniw5t8XU",
  "key23": "38f7RVq3ZKKyRagLJAw5DA839uhfYDPYcM2zY7457UnrNsNdQ6beh5a73kAWsgH1smMzQL3z6tsz4c5ZbZsMzFMp",
  "key24": "42uum6EcYq4ZPDz2ADqJWPNv2R3gZ6CYRn2wrsLUPFpSma67nT988iivcZAiPGraMQxNGKUZQm56xuyMVhzY2kwr",
  "key25": "61DVJLB6Tpzc5v4cYBD4iPj7uFm2vVKugEMwbsDxu4YTK2axh39bWQPMQEqWRL7cvm59FpgS2yeAboczEwLeSbVo",
  "key26": "3UESFDjpYv81Mj4BybFjpfgSnE1NE1hqxuNyrYWT43qxSm6nyQVRftCw1UtMNcidMW1KsENE7x88xGL1oNPUXuQy",
  "key27": "34F9p8QG2VgaiXJTRTxsLr1PK1JvH9xGtd6efhWzXTnScZiJqEnBT9cF69FhJTMyyRMDyxMhfWExq76gop7q9XDE",
  "key28": "7SYiLQPVWMq2GrkNd4jsfiFB9AfVjvkc2GnYfguvJGycE5jsrayFiywX6iMs5S9ypPT35rfdiDJ9n4Du9gvSMWB",
  "key29": "4FzH63NSLD8S2ikZAaq9uSvmp2jPoFBdroZ5m6vQQDLpScMfgxfH6xChcevGh9Kry1JVTe6xFzPHD1sni9gj6c2n",
  "key30": "4qmKRtzocHE17cUkmQwSc4Jsjaq74nv5LESESCf6BT3jbF2Y4BRr7HJTAkeS2xYQfsErRYeSsV2Mwue5Y144MSDU",
  "key31": "MPM3K6mPPcgM7nCbV6f77CgXvPbSeWC6T7BYDhTemYQcH4bnq1DV1FQcKenbQ9wEpt4PY45kx4P4rjTQzbusquo",
  "key32": "4AUUGELf28zUrdzFXdqV3GE4ijQQG876MMEb1WQk1paPD4y8mjrMu5f985rVrz3jaer5nRxHhAEUkXVwiddjqHj3",
  "key33": "472nsj9FfqyUFYpgdrB7r1jRBodHRS89ndaffLbckw4wQ4kMsf6pKWUeWgWdTRKinSJpBjeKVDRHDPJk4KPwy6cj",
  "key34": "5LBhKknznHmuJAQrVTNuXL4JSTd4raYACtLehUczD6CVjYSKiwkwCyuKHSSrdw9gKDbspnyPiesyegHtHZggnAyW",
  "key35": "4TjzkhM2gSVaGwM6wtGWaxTH4SEWJKQ1tLTy5tRiCec66bLBqWK3PcerU6ai8xEKHAuNPG15zFKvUHV1dwPdWhgf",
  "key36": "3NiREaCzwQeRwne6ZjEtmrYmuFPt2mBwykxCX1ofTo3nuJ2Tcw3hd78TU8hmWv9mVNyvryGPLZk3LRQsdtJQogwn",
  "key37": "5mbhQG75Az6UeBL3Cg1TwvAKjuqdBFeU6w1jfcjLfPtoghhDJ15Thvm5bftrDbGWskCj6ZpG7s9b1atKgYFBd64H",
  "key38": "bnEJeb1Vv4D6KgVCWdNH4Ezwaahnv175qVqP1pJDXyMhQNRwn9bg5PPbk6X4zQkBvmfAyK49nJDub41TF2g9htD",
  "key39": "4JHyAdQ8GpKvcDuiYiSD2DkekWaNZDZeeZfX7X1xcyn8Zb7aTUu6CrSKdEeA28j4By9e9a4rUFozGCSRoCyAD1Zv",
  "key40": "32RixBXGTj8CopM2yAoCimp897U3T6uZd62YWP1cYNELmHZbbEUvZtvmPhmSw2rPuQnJ6diMEfJRkUQkQjrUg2Ws",
  "key41": "4fTcVf7reUtL4kpzpJXkFGUT7bmXgoJVCSgMM4uR2FitAVJZFpDfuZC2rygiQs73uYphvmm5CSjnR6yNSsxTZZH2",
  "key42": "2rq5QNbRgSKgnCzJ4kdjXC1fgP2Rh2NjqEruhvWXHxjfBqaD6eN8CA3wu3WmhywivRpaSBAibPT8ArGRtdAQ7n9e",
  "key43": "3ffqbFvReF9sWoPtfnva89vA6mtcopYWkvFuqvmHQrKPJj9BmpevpUDcF4QnFMurBgsq5KZgHHahu4TzjjF3PWSG",
  "key44": "2meZr1mha6ToQzdL7VhQ1zHHoNZN6vVPbUnbCkRctGAadLghUn6TZB4ztUtHtG8ndSbxSRnWeP7PD7h5n8uS92Xh",
  "key45": "5VemrX5rkFmyLNLJP7Hp9xUFFovtx1NQm7QdzjFhSPQ6AC5kKryDanJWqSpnk8ywR2LsUCCjm87hzY85PPZ1XM3E",
  "key46": "4Tkp6dPUy814SeSMMBXoagQGgFnGjz9n3rtJLk3zsbw14ZWf9Nnr53BbofkKWSHv1NiFdH9DgQRhv7W3WjKsAd1c",
  "key47": "5nMjgXTw9qkujnew5pg3Ux2cw81mHUPvzRUqpjQYm2gRyHKfuMk3iwCiLpD3LZ7hC87VTQSpMfFmjGRd8KSejYap",
  "key48": "MterdEcoSt9cMwT5rdbfgigoza61MUdC3SaseQQTqUnDfeKpghuQpZ5NYgTfXtNx26kptDQ9HTvWtQfpjHXHnXW",
  "key49": "445CY4LLgJwQdDAFcVAiGXyg59ZcQ94hwQiKEZfdhMaYQ1DkvLC5Zv8jRMp119Jh1BLyCGSprxf6VjN1h6FABhVc"
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
