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
    "3aRUJCBLfUYmigBSmv3eboAp9PcaAcwZZDLounwBa1EysyZX2BAVaLat3Rn1kGea8UiYW6hWRtzsjExyAFdf946d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58SmJvyX4LwJhBtnqU5cT7YHP2JBmJyxzBqM8D3HLX2pXoH3TdAQMJbrb5SvKcLk9P4CyBEuVPAgiNKZtyxuSP8b",
  "key1": "188gXsd4hDQwuLTp2v4JdGkjLCcjRTW2KdAtYsBfvvcuvxJCsbrkSdJ4pQibVBnRN7Sx65XT15w72aijiviJbs1",
  "key2": "25FC3CR5gmsZSEtU2ZAow8a4ps7pYc59hnSTZQtoAGyz8fvMc5FYy511trewzjEdBxwapXwwr38XyJ3kZkvfNF9f",
  "key3": "2jxJhWg6v2AYFYNSVLLQuctawp39ifZRsz3ioNgi9DWKC5jd6qcuPns7W3zz4VjZRZxSu3G5aXrnXHoQPkfgbHZk",
  "key4": "xaSrFHc2Pr52eBoDSsPgYBVagA94fig4XG7p5m1JYKSgeg8PBoXp7djy9RBB6yK7VnwmYXjn4wSS2Tsmj8FWaqC",
  "key5": "5eUMdJW8EWf4aqKMJXGqBu5YUe36DdQaHqxtks4MmJjhbPsjuiiwDLY9uDU8hCLW2cJZktVGsGVTcUUrjLAefzCH",
  "key6": "4fg8tW582dDsT9WeV7Ryb1SevhNMh6BWkbN2mbxXuvN8yNSRoaD8qfCWuEZE75kUQ6Tqz81JszYRDkYMeQ5Fkdso",
  "key7": "3fLgasb6zpDsqwzgXmoFmA8Aa5PqPXRA9bLRnKxcWNmPUU3RsADwc2tXhUxMA2MYX557BD1iwTn4mEQrvbzumJdn",
  "key8": "3mfmRkxFQS6zKvRYhKBFT3g5ortevQvmxQtRDrp97i9hkg88yTxAndSBrbUdjKWAmfCUmbQRnof1N2yV1hEjh5x9",
  "key9": "4J97YgerxFFFo3PTyFNsAYScxnBd3pYWs5zKdyn8hiaDWLc8Wof9uzrYH9sEszSNC1pHAgB2m9r4UkV8zoe5K9zM",
  "key10": "3nZxcusK4wZ1c2V2q4WfVwohTKZJJ3dAGQu11F4zzj6WV9AW44XmdXjTKqFFtyZ7898qRfoziDtZobaBA4s38gi7",
  "key11": "2PkJEuAJSXA99CYEHmazPsaL1G25yL4eUuFCP5zfY2tJ1crh5x6G5p163b53B5iYjVGXVHnBqnPQxx5P1njK2Agh",
  "key12": "4qpKd7SMbQ6aBx54EDideh5hDT2rjz34aJof4tNxfQTzniwE8b2dmowrN2zqhhAtFeygVnDU9n2n8GojntQLy6dT",
  "key13": "z8yD12wVT7h4epDYv1pqbrMNX2WmfjY94oNRx5FnMTVBLkysYpX2n5pzN7gGUEsrR4w8s5FtvcjjxcpqWhWunvs",
  "key14": "4x62kfRDNS53cPWnsP5Qn9zTTzdzCiFpuVECKFkuzSaH19KeJSuBEWUnDbKHZnGaDgQjqj9eTbyQgwTqL5DJAog6",
  "key15": "3D9vJrCPYG5L8nBiT89YWvCqAUUQ16BDZ2V8M5amKZehEgHm7ekPQF8inCy3fDpLXDivuoJ5zQczzqQ1CFQc7H8m",
  "key16": "4debX4yV6SxmDumcEDddE6FEbqnoog6q2KtWAbWh6CE13REkCGyZ7mnaVU9grtCQ4fcgjmsUSmAzMmYQLkyt6zP8",
  "key17": "4ucRRvg64FwxGGmNX8tSdQwneYQKvNszBFp4ZKwAKSas76cR9bBLknyMFDDHvro9HFHXGFuHNSn1EGe7eEZHAzcf",
  "key18": "LkH3Vkcbd6uxZn3jsJNnzN3wD4mAAUyryCwZ49Buq8c8ygM97FBcSawi9SenHHeYNKs9CqAqA1KioiBKnXN7PEe",
  "key19": "4q2T8ycJkB9F8kYNEdWKVk36swGerr7HZCEkW61quC69NE5CDwnK4Xjb7ufxdT37s6NVnrESudrqu8DnouaS963U",
  "key20": "YiFJGoQvt6vaSqdwxm3GGAB1NiWeoTgMKcKrRqf6cZjy8HdbZGhaZDzXGJVKRmfE3HCtJktf7W8nBsfppCbZ5eg",
  "key21": "2mo7nU9PKVp6xHdW6WryaA8JxYTGYvgyjj1SxdoQ18foL14mwoEXDtJ7GDcqpHtuiwy8rYKoP9dtU7L4FU1LDSRf",
  "key22": "4zFsjaC4mnZ4NDQjXUUAQy4sLsujcdxS8iMs4yP4r26YiHLPeLscYQCYjYpwphC6iJsh93D4PjZb1xhbnyZdrv69",
  "key23": "5oqkiVoigcQzmRz93C5zevm7ZyHvFJUJfXWMkqwzmn1RLBK7Bv2NVZ7ESLatNMn17fnGEZaYY8ZsyRfiEeGAfXe1",
  "key24": "2j2vHRaWhTCABaEwMFacUECtVhDTMV7SV1zeEW7irC9kxxXxpRaToXPZtxhZ9Cc1FCnsLY4SsNrLUfN3HbPBA5At",
  "key25": "5dtZLPK9KyTMnzov48yvx4CEhrNFxVhC4RbezDnXaC25tHGr9QzBYzJaS2JWwwdTxopuZB3weSmFiL4VMjbSxYmc",
  "key26": "4RMPRT9eiGhoLRGy8HMeBsVMrKBdYkAvXSUuNb5xV8vq9UFWxbdabeoKZHRqm9sM4tZeGR8iXTZ4vs9WkJFYdFi2",
  "key27": "4UuLcf68motERSq8KiasWzr2k28v63RSAA4mptPQr6ZeME9k1Phya9rHQ8kuVDAebntZSQCqsevhQC7GYgF2Ze2Q",
  "key28": "2KhiMkSo3N13pzUjQFFC4CAUffjrCLhzR2B5Jq5BkH8UmpPcWsPY8Chvzb6fBLNeYsRLkYmDiGZLv2fM2Gxxq1Ru",
  "key29": "21T8tWFBizb8Sa4x5LBuYEGkcexHnoBiiCQCv9dD7RuPv222cJ5QFey6orbjXAAS14PMc6T1zhM1RxnyHKNYu6t1"
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
