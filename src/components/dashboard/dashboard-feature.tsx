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
    "628eBB2NgbF8f5rSoYd4DDt8Pv89dHNVxwreKvtzoW51AgJRUcFaDtC231XHUsZXNAuKUQBtkUjPswNw95rwb6Sa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "NhAxdKx2pFUE1t5qSGGgcK47ELEHD8RwUNgAvNR6xyAHFjHWqD4pXqj7xHec49rTXY5Pwqfi6x5x13JopNZhw9k",
  "key1": "pssB7FaY51EEU6fMpgQ2PydFGyvW3jKoheK5nUtNsrXHtAG5xaPA6VfjKddak5G9x8rVwQi3LY6RzYpjiewYub4",
  "key2": "Lg1v7uCqqY4hXXkfHBNGbZPnLMVFnjz4yXP9Q6eyU1MJAysqaZut6T8SCoepd42CXWsmmcVhATAqP4u5sLTBuFL",
  "key3": "4Q9V2P2H5CbdQ2cJNNtcjLjo4hRzWLyitJQmYQvEJtELqZ9iQzTtvvesVyp3YiEmGP51qvctrbbUkdez7qzZdwyG",
  "key4": "4eX1TDL5gAkh2TnetWvFaLKQ1LpJaLV65Pb7pAxhvrsnijnQu1vaE2EfEGtfAkwvdQUVeUoATAV43NK7ZGio6Skm",
  "key5": "5bf3Z9sfWgqkftsC4wQXrtPzwmSHiJpcZCQ7CeTfwWoGaqAQaTMYEFF741SpWkUrFzjyBgNiRm1tqUCbK99oD9Hq",
  "key6": "5d6S57eXGpsswKp2E2dk5WZLpcxePd5T6e7ZhtQ8pheL4SU5yqHSq23fTHjyuEw3h32eQeyN1Q675eXT9uZZ3jNk",
  "key7": "4WjiRXpZvSMVgJ6P6UdvSZATK7btBzYxtxiU9WiLdKMf75PBQjXiDvSwFY9LGzfP9kdcd4VAdaT49pAqJHD9vn6F",
  "key8": "s85XRfVbwxw9sHak7RPqCfcwQfHWqJuN3mL9VKqoAHPptHLTqsL4kzYwiwhqn8vesdqZNuwqiTT7sov6QFLGger",
  "key9": "5VaHuthLgL5dH84bhqkmRgP9MGn3XTvedhZ1HjFLnyWV1RJYg5vEshqdLwBjiuoZ4dx6U9HxmKzvFwsMFifxUbQK",
  "key10": "8fLRHrPuH3r7KB2X2tYESDRvqooDCLJZ3qsPTN5SX9wRhbF5bcWbejY4VzQdkcQyemyubAn5hoz7dHxRDx3Zn7p",
  "key11": "5xARPKf9ya6b5q3x9e81cwvCBQgnK94CWF7iS3fMe6tHgJSgni9V9KDjRrXxp2mUKjrpuaPVJehF9o8bvvWmCRPH",
  "key12": "15A9HMfsMEFM4ZhkFSvepUchEWNT8gwtJBts8XKGDGj2k9syZMdYBoGDuhpGmB2bweQ7SbSxY9dpQ19S4BeTzPc",
  "key13": "3C274PfeWn2jTPYYyJgGV9rCVLjahDVrpdUNcxdSFgkiCLQFbrY9CCtGhTiqcDgjMqphq9BC1ugdfAUmiUymkfjn",
  "key14": "igu929HZ6MJhDEDBQv2bkjNsGKUKXNSYd5soKGPxHqjJCt2LRgRWmaxzkvKFXBsHETSWCkmzqsdJVcb1sYu1KP4",
  "key15": "5t1tmaeFPGPKjtUMkbueXynSuW2RDTCvwUVdbt7ztwR4tadxyUrAammQU614ef6idFK5zvFqpKqcZTfieikrmBAp",
  "key16": "3x9P4jjZtMXzade15Sc8feSaLofA6VZS9bQ1f7A1tQgESGrAGk9tEgckZUiF5dT6e2dmPfCq6nPkeGfYf1qNQD1h",
  "key17": "2M521AozvLGcagTPWgnFYN4tqzBCxy6zEWPiVoBnXz32MawyF6qBAxbgREWeadpkKA2XamXRnLf7nwNuFcyMzzUt",
  "key18": "2SBy5oTxfTqWniKeswxf5VgAcLeY2F5ok1sXfwxSNBLxBJbig4CaQAgc3cVjvhBVUybjZ5AKQ5XgvTBgycQfRU4M",
  "key19": "3WdEzDu3rRjvXaQoirESxrWZ6TrWq9GgjLvkUMCtu5WXKMWEuTS9K83s2smTS2pJQt1UrEyyUQmybxYTsPaedijH",
  "key20": "UdzVrxNbqQxHGraLhcSy9BMatPnTsEdZTjsbzFLxDYnKnf5p3hcXCDAGtdYbrJMN3bMh6ZyHuFw4jjdPCUe7XG5",
  "key21": "xJTA9b4RzGpZtxrjGVdBHVjg9GPgdb1s78b6B6rYhBiEeTe46BVjNZu8PHwyTrqu9Yg55bDVMAREea4FuCjss3X",
  "key22": "5e9M5nv17AqRWXM776AXsc142cHFmL8FUaEUBjhg99TBiXCmxVD5pQDjruYrAo19QmRQiHMqKFRuCbjET9fForGJ",
  "key23": "Pw9VBMcWvFoq9icj7XPkwNZPM8mkC4YDpr8oUbWr5LkDuzCTGRv3egLxA7mBt6szUh1BMgcyfyY9F2V8KXBaLoD",
  "key24": "3evRdvfnaoWsocTcBm5LzxRsqF6AoQrTFZ7p5Fqp7dp7E59BKmpFFebwGbfTjuDioqSFcWyXUjtB4twwRpJUmAux",
  "key25": "1u4YCZPD3bAMS7HrnENZGRL2qzsLdfetdVY1QcLMzUUiNPRr7Fsmr2GaYZsNCbHkVRFxscWMk4kh9ZF72kUNAY9",
  "key26": "5ANepPPAFRekXfDdrenkpAv1PnMppaVqy5b5upe62YquhPpdfaqVvMZybQwNgeEzBhbyVSEaxdwuQCsby7ADzcnV",
  "key27": "5Zt7BRFHdc6XU3DhabAnvVVkej6rnwdKLYrXHh2AuCgQSGdZh786XwYCNv1dQ3r6c5niZv74PdxVjoMhAYk8iUfZ",
  "key28": "3gqPm1YvRpio9EWK2k5n5VkPHqyKFUyHdYNaVS9s7FWLhUbDWTiaGdhofSji9dAHjPCqpbLWb9qrjAkQdPQ4rQHg",
  "key29": "nsKSc9D8b6YsXt6yMfcoQEcfBvq1GcgQ3m6332HGsKb5gQmhYHkNDMTXfDVQHtgJz3org7DzNj1JyBmeKXMWtBG",
  "key30": "2errZpumjpDoi12UsFAFWzXSqX6tGsPaBaY3RD9bUtSyBPqdtGPVvf437b155JE9DxTWV8eNSpLjv8e9HtDtFv9p",
  "key31": "4xESJp6jTjpncrE9rr2mtUXGmbwuU5c5TAWo3MXDoqsnjbE37gKYZ4usg9PwxvkoNfj6bmYMYuXmVdK3ik8QyToQ",
  "key32": "234mxz3zNUvT4XL5NKSjBA6CkS3rxMh8ZUGW7ExHYQgrPppfLFFho9iF87xzWGHuum9TkonQxeL8nXt2pA7gagGU",
  "key33": "55ei646HQHrFrWxUm4oBRygY93cavFBmkFwZjhrMvaNpfPCBrRmHTBgeQBdagc4KfGGGJVGbSUauYf42w9B1UmDC",
  "key34": "5U5RbQ484zNfFmbRsg47kM3vLDfXjWmAfR7DDZAHhjAHMTuwbJWx3PFRPbLqotgVcZgJor6wYLP4s5gCWUdQpbHv",
  "key35": "53sB2YvarkndjPUraganz95HGFjgiTWqDMDjRmoX8FX4FHvFZMN7thSSc3F2r5hn6xbvw5VwVCgros9shRa9Yzc1",
  "key36": "3MxQ9ox6J6hu9WdRD6htL6G5VYdSschiQrzFTnkj4NTpzQapWjZRFr2i9GCarbJDCkPN1ekqPBxhyVAqeHHjuixA",
  "key37": "5DMZsgi6mns4t1fYcZXRnZriXWTa1rG71esU1e9npLmpmuUGiRHfz3SPJsaT5s5k5ZLFHg5kvBRT9hirMpfg1B9X",
  "key38": "3yswTCnchicQVji72KZz6L6MwuWWJ19EhULVjGQj19p4Pct6uftWZjSuttj7Q4zGJmVem8fvT3zDAZMMZ5z7GrMU",
  "key39": "3oesLZKUEUTHvJncwrYaDvVx5XWHwbDaumzZUHvnWZ3UYRksX2nwmywsxZV9XuqfoLHDMyzTtbGv5ue9F6GsPfzE",
  "key40": "53ydTPAtAHEsKRApyBM8iYmH7RfxK7Fdfhtb9QBcJAUGMVYE9qvRbF927BpeifsHGZyqN4yTtcb2jhmX1jNmUYnL",
  "key41": "4WRXhWxKLDxThdBYcxX4iNNpqxad7y4uDtA2k77oFYJ7QwQY8JgR6wfiZfDRQTcWB3dMEDcD8ZHUFNvVXTD4kuMQ"
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
