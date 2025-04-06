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
    "XhCG51FyY5ERVdNNEmzitFrd25Su98sDW48Tf2pS4Vfr6PCsnGMp6GLAf3kCrhbhC1eviqtAGR6tX7MnM2NV7EL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3BHWZHxktQcgjq5LhnxiGV1uRXLiahQgZYkb5qN8bsah8CQ1waM6b9w5dknaUenCix1MogrtLXvy3MxWxbymjxkM",
  "key1": "55pCbNihycpFqd5v12fgjH2nVp8wgYgWuLH9zXtqm1ZBysXohB1wov8yAjo28wohDQouGWwofMyXDC53kLbbrRmX",
  "key2": "WD1LCZ1xsh6fDpDk1xsKQ7GqbAGYrmhpm1hwmceJgvs2cQtixSv5De2ijCPhXeXT7qxd7uwNgf7owBuRbRQm3it",
  "key3": "4JExFrJBriwrE9gQm34CAQ8rmPL7G55WREwG4vgD6KGaJPz3QAAasHNFL2KiazxYFSpDHAQW1rJexNQdk8cGvTxr",
  "key4": "4hBP4QzNoAqymwgt42ynNJDC2R9HwwnoQu1HhJMgEToFhemzmSZue7y7PbRWou8ZXuiqw5Me72govT2Fsyo3TNwk",
  "key5": "3rq3BYr1K32aMy9DbSiDWM6EKU7LYVwB52x8jyqABkZ7P5N5A8M5MtVwTx5ADTp5VmSRjv3cquAEXuvWHSBzZQj",
  "key6": "418gixuEJcPgcQkXxmUruG8rN29tLfvoCoDDaDmD1eiamhjjUzqEnfvaZrWZS9XGoy5NrDQYd3zGmsRpageujU9D",
  "key7": "3fqYoTtNS16F7DXaDVyoLDWrsDDvVzdz46mcTQZh3FUshaUsXuZzDpYpJCNrfwUvosR5arjEA1ygJ1CaPjEzJEoM",
  "key8": "4z7dX8tJYiA6QCCjMLaqpFrH7cSmYwN6FteT4w7FgyXnefkoNoxfMVDLbLg3YgaDjNztFMXVokNzgT6e48rRcg5k",
  "key9": "3GnAYcksVuq73v1cfHAmRu6XVAUF4WyFarV5chgkLmhrNPHB39M6fG1yeBtFgyQb1MubSpeHKuDKP5giz7PCans8",
  "key10": "3fC1W9GDT8SdmmczGrQEkFn15CbzdearqjnRAHwnKshjZQM54h3U5uYJoKvmugMzJKeapwueFtBB2uAb86EMCwzZ",
  "key11": "3bMpJWzPEuSuhPgPmFwm5BwhQj9JfMUKVSTPPTLHu19q6EAQRPovmoM46HXAgVcNAPYxKFeERFYjNqunYqk9dME8",
  "key12": "4cC9UK4AWAE2BHBgF7Kn1PPnhC8n4SptriQjqFDxgXk6xrLsMRQLeRspAgAyrEZeQnTH6NXg58DifttLz4ZQxVXQ",
  "key13": "3GfbWxvKxbn3Zqs8dxREp1ZTHCkHNTNMs2dyKfEx25G6xxM6FEvomZaejnFLYSXggr5HnGshzFsRotD6gwrfyUMp",
  "key14": "5StGyTwzf6ecjc3TnS4Aa82RWT5syhNyNiXRmQnwzZ9JM3P3JtPbor1sDrDv3oATy4sMUcud27GtLaBksb2W1SKF",
  "key15": "5TJKtiJNDdSUghz4miiZW3oR5qJwdSsFw8dqvXq2fgpbBKx46ywGL3otwn7bQM9uWk7opZKXSgCdMw3TX3anRZL4",
  "key16": "39XrPtjAXdcNdXDDfnqMmZBc7Bk8DLig9iGkhbtL1LSuafHXn1uCJhHCLj15hW2kMNKQaE1T5CQF8szjvCWDvfd8",
  "key17": "4SQjrVt4FtBJAhj86BnY4ACETfuVj8vXgKwp4ZzyL2Vv1qjQ2c79UwdigUqQp1cSMW4So5WRohAvueRDogTBiQ5i",
  "key18": "4B5CVnbkQ3rThTGwGbYk8QwSr42eKNQNs3u4zdK9uVBE1RJRPiaWjSuCFrwUZAqVnXTsui4ANw7HHcz5Ca2UnXZq",
  "key19": "4RRzrDnNb47Tu8PSgZwquhfyg7bpkHBp69P8NdSFzxJfqaC9ZsNxJDMgJ8MpjnTtL6TeCzy2QxrNbmiBmSkJxJRw",
  "key20": "3wXRSFnEYjU7YkAmZ9PVh7zaACMhSC8ibc2JGSnVSCBERgwAc4nD2ywq2posSj7MZUhmfSE72bvUheHoNumGNMVS",
  "key21": "stT6vRh6rCGx4UH6S7DXLTUUtuJoTuDbuabX5Xyni5oZhydn6Ej5j2xgE9midnQVWqTmTY2TG8jtDsF6oXSuSqB",
  "key22": "3RNQ5wuXawDfWbgN1jeEostcAMwgKauRbgKJwoApgswQsHsnLaSNCJ9abdFErN1ZhwreLcX5NoHw8Nd4BFFsp4t2",
  "key23": "27Ug8cs6rk8hZPBq9L2tJ3tDmHD4aDuYLg1CdjWmYiRyZH6FdqqbRtXf2EpYz6QoykVSUYMWNBKUukgkDg7P4MhP",
  "key24": "2XnZXnKcnZri1i7x89U1uJ4hKqKcqE87HV1q9h4Vp98xJ57MjrZUT8RBLYqpRqNqbv2c6AsNkM826WSLHy6dt15N",
  "key25": "3vE6an5vrvSeCYhc7b5i5Y6e24k49m6BYXx6ie8FmUuB1BNbRfaxHntZghnsrnNGsYhr77CYNv1fJ7VPf6qacn6F",
  "key26": "2rmKncVGnKJuSucZ5pUMhFAaHacFVK2ZCLSbKsdCxqjSL8ZNQmXNtXPnhAXQFQXGJ4aLBxZhM6jvMtzNf7rKEyMe",
  "key27": "482NdWG3YGymwVXEkPYnCtXtZq8nUANey2jxFCzPZrWwx4o4VcfAyGAcrncnJLGC44QMioQPJxRYs8JwRMhoQs7X",
  "key28": "4uQ9drJmSWdor1VRvzDMs2C4AResJEkDV8SRbH37TXm57xFqYDYv16DnNcAt68uUZXFxHGHtJEi7uCGGHKAmJsi6",
  "key29": "358yp4gZs59V5M7u97bBCBWgwSQeDEeNFddAxRxej7dGy7v54pdcJSnSUszmtAjAmVc9jJrFD7QaczE5DgMMoHgn",
  "key30": "ph9Ykk1HDZ9LYXXBFbrhHDmtaRwxebACvXjBXM6uVhaFmfQgBfP8tbTaQG654snMwvf9oevLkPDwrNmmfvDjUs1",
  "key31": "4t9cESBa3yUmB4UaaB6ppaPLypp8mwqVff7MY7Gryrp3KWaysSVUTSqxETWoatfdUT56ufxg1YD2Zj4LoyjVqVMk",
  "key32": "3m45eNzJ5k4Y1KbQAu6YgBwAradViYKcdP2sVggJsVWuXko45CoGSVtiWvmLbR3fQXhxjhHUh8KRtKfUvVWT1mDy",
  "key33": "2oFwo5yC656SNfyE7unE5MhCqGvh46gMU4rZ4zkxwKmbJvjRrRq2JyWyeY1pn7JkTmTNbJe6Zs4BYi1QTUVQ2yMw",
  "key34": "2DmoBa8ctiW9Cthhsga6LhviFFSMZCfXMf1HTjKt3VR2Qi5KdpPkNRdPyg7M2z1XNdvB7TJQYRST4fL9db85bgof",
  "key35": "44wAiaRbapTKc9PNABrUWPwcSfcdeZZucqkZcVWiEPcbV8jifhk4W5bZZnot6idSdtsJLyKRpHBwDMwyEoTzJaak",
  "key36": "4zybbcBFEVuzv99L8MwTf36QDdbCSy8ycWHZTWfhWhkvdinjeEuA3dQpkVDwdKAJBSbPmeZzCHmVQWYGgBKDiCQa",
  "key37": "MvSf3QH5UsBTBJfGFhgonTpiHWPAAp985UeQ8KDMNS2CmaXqUYrVC8uZ9i3WaUsNPdkajyLSWeHhJLDFMY2yFNX",
  "key38": "35vZf8nVRG7KzXMFoDMciiPEktF7Q3PVLerxkieuVCsAjbKRedV4Z38JC6DKJ4RUcK5VvAsA2jRtDm7jePA5LcRr",
  "key39": "5ndf19TwDWbyrAueJVJnrS4YWj7rSj8hB85JgixspqXkQBeFAHJYNK8qeS87jyxKWj9UC2T4DzQK1R565vaWewc8",
  "key40": "2Luv9cu87STAP9tC6Nu3w29KqECEXspoPaAxpPmSxECirHutaJfFYerfbkEXgC2CKCsosF7y3wW5Zt36hs6qAvnJ"
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
