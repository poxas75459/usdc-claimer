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
    "4gbA6ovHeJEaRedk4653sjHLzK7iNEU31ReCNyDPao2j6sHPEuEFudZ2wQrVR1J4eRwwLGX7XQkiSQZBD4ZGse2G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Vv5MCDQ9MpYrt1xH1oAGeVFgbDef8vfE4C1rBfWYTHPAJBmq9JiBayVMdXMr1dzC9bM8mKt5fk6eUmQcf2YHDA7",
  "key1": "2EcAPTQ9tZDxpkJqbxAZsTw4gN8z3xFCTxVnagS41VukYYH7cDZAzugtt9eyrfjEfW8HgeZArAiKH1ZevPgq3L8D",
  "key2": "4aybhxr2uajQyDR2sEGRUmmFyDDCi8oVnoA4k72jszvyHzVdPG5SKsKuRtdhWYJV3SRFKoEKmK17C3AsSUuBzLU9",
  "key3": "3VPrqrBXs6TejjgtE7fGuJCXgDh2VtJWrkPH8LHJxCxXENTUEpUshrzZMtYZ2LTpdcLsxgBFnt9iYtxP4XanCUBn",
  "key4": "5Ab7WQcd2SC1yqL48bN9Jx1YxmMPrWdn1d5dbpeJ6FU9ZRyGE6KkC6NiVErMmdPd1kuNKg3mWFwpdL7uLFDUf6ti",
  "key5": "3B6zCXEbQ2LB35moGbAHx63qnh94wMWpY5kd7SW8qDURp7x2UV8JCurCWtFT7MndtjaL82VbVmnJYhK1HL3fjVAf",
  "key6": "3ryEyzRhbh2dmx8ovZqSbZkE2okLMYGFj6PeuWedNZFHoeGHZMBGVmAXhBVHK25TT3sr6LwKybNCM81czbfghZpH",
  "key7": "4ChpcdYj7EsaAvggyeu2RGhB3w5wsabxzumqDvx49iHosKqPksY27MHFfxYEMRigTfMkBFBPx66vst6pgYG5nBgR",
  "key8": "g8vLPy3QXK8o2TvTFFQuMu3o6UsTqYdsKG2uCjEfKzrYBZ56zNUQskFEufpiJTSDYZhyuf3wrkmcNXUpw59kAEZ",
  "key9": "2NPoYG2YZfLjSuYsULFzEw52TWUjuVuQjQXou4Fv9Q257yVLHAd1DtD2KP2JD5brFgWEt2vj1JzLDM54x5WSLQC6",
  "key10": "3Er3UWF8wDCbAwQrK4ieopQthXcXoWbV9EPYgRhkJZuVgzdqKUvgfn7qGNrwG8oLjac46xewkBg7ani49aMibqzv",
  "key11": "4nDtFyFnxz43z1F1booVXRaCiAQgcnMpW5VNd9kMUKoYYfxFtdoE6jRcmi7XagcwYGmSEfbmRBEnTbpYgiNPcQjx",
  "key12": "5gGixgH3srEnfaXUZWzTUZbTTi5hiq2jyMY2r6a5vNhrnR89AmHmvBzQqQV3rs7AvCDkuGoDsMdbJUYGzTzJng76",
  "key13": "4wRQ9XMSk5RGgZiz4DRRBWE2AJm3DPKC644SbLPQXdD6HLV1mgLYup3Ms3YtZxhtwBadp9n9XnQutmbh43ALj1gA",
  "key14": "5ANmKxKFy7yoauBENkE494RJ97SY3UbkFmvfHMVbgx3gPuPmPYDryGLJw89xe8V7DkpFoFsT3XDM8dJvRp7sgaVb",
  "key15": "5zKqrP2v5gxN3nFfTVpASRaJsL653FuD7o7F5SUiAXn7yYwNpWzFdguCLTmiHvjd3NYij3Na4DWa5DGhktdZj4Gj",
  "key16": "2LeBLr5ciA2vigw2tvZgXgnw7YB5efTZ68zqKTf2hX8sizakvg3F6ofL2zy5qdiqTXapbJtqSMdu2kgn94Dg9tEy",
  "key17": "2ikTzL6SSRTEpTF1DP9UpWpGe3NpDhAwh4XYLVLNknJQVtq7K8U9HpCZwMrhQc1DY3b8rxgKDDmwFWtTT53mGfbn",
  "key18": "cWuuNFLm7K28JSV7p7TkJUTzW86ewdubzwU82dvVMMrAXwGQsAx3Dxwu6Wk6gYmiikMYowiavA4nZDCne2PJ9tu",
  "key19": "4YvyZ1KgZ6gVBdSEMxsE1bXr9wYQ3DYmwYbnBKjR4jXGKy9UxeQ2SHLw6zeM6AR6bPQbFPj2rFWabQT5Pw6fGvHP",
  "key20": "Dr4EWvCVdt9J8CCmrXQhDkG74yvNHwKgvGyHPQUqkjXYVyTn1BzvQtWWgDAw2FigUPQourxJPNQPHhRD1DUxzva",
  "key21": "xc6gMq6bE4EwYuTMojDKKrHQjjHHJWMQbJRUKRUcNHwAJKyeRymNkBSWzBY74ifQnwAwh9S17Euf9xCZiEzi3jG",
  "key22": "4ZG2NmZ8RxZDmqsoUpo7JvQVzA5akX1D5THXeCTJZCjPgYpK4teruki5mQyTJWVYADqK38kGS4rMSPLJvHgyeJb6",
  "key23": "5j2DvAUgneQfH2Zg38rienkMRLi1aU4WibuxXe7JdUL8Pyoy7Ptqf2DeqMMXqYbeceb6dxyH9dpBeJLPcDXHWaPs",
  "key24": "3Vows2zPNMEZnrsbdTAzLLxGncS8hGp2HEipQ8rppaQdGm91CxyZgPrVhfH5xZPTxtmZvQJPakjkVwCET2ztwa5k",
  "key25": "5dEdJyDEeiDm4QyJF7tW5wUWHqFFn8Hhb55vEnXjtnMKzfYSxm3K1SdZzhJrjRAvZ7RFLXVhLrP1HKoHsXrRpPNc",
  "key26": "5u3954kihjMHzMWYbKjHMbNjd4jWrMEnz5SjDeyej3k1tKfFQPtej2bRMSiyMEzQVWVibqhzb7s5RgrG8bP8f1kw",
  "key27": "3VmAYcqrmTEKfnM3e56hYogyHPanXR3wEZ7huKij7VKkvZW1T4prPWakoGPt5WgSNkhX1zt8FWxukpYaqSYZMnjX",
  "key28": "62JxFanVq6TnVQ8fFi7Di8xo7CXiPBiGy5iZK6SazXGdA3gY6HtrCw6AeqsPDcsA3voxHceb1snu2UJF5BajhyfA",
  "key29": "5KunY3MogE6nsHqcESJshyvgzbetSkdP4FF1dG1UXJxBagJJ2R3WCnHJi3Rbusfh8ttvuThHY1xHpfAvdAMpw6nc",
  "key30": "3vuzw4zJbckrcNjkEoxN83ch7dMi1LLzRjRVCqdKa5jR5yNaLXxAA1PqGVZ87BZ1p5DyYQ9MBBtEKWYzRt2sqebR",
  "key31": "3Aqne8YQ6JLeEcRxMyEkxTh8rnvSoHznA6gFZCQH2K36qZpmMo7tTLgxP9e9eCeoDnCffjC4R9zt1NoTC2pj5PQP",
  "key32": "3aZ6HjSckrWRr7ejKE7TJMTQdqg7Rr9dU6s65UYykboUf37ih2Lm8ru6Unsq715x9rU6J4NrJYAFgeQ5HVYBpyrY",
  "key33": "2qv3ckJaJfPN9JxLUvGRTReyNLo2B7teg4NuYZXgBn2Q6j18Ha7Qzjs6bEA2SRaCgx4ocWDVBEcYTuFTtLQrVsuf",
  "key34": "2Jh9KzespT91A4nGLF1F9SHTj4z9KGfqq5PQHGHLUMBAFNfWc37ERozEYyb3cqtamkEisqyb7hr7r6VggpD3GpAZ",
  "key35": "4y6QSzXCYXCdA4hg6hNVoTeyXrEdVi2oJW6sHAdHVmwZAJLYeSTtYFzkcUyW3LipmBxGKsBPDi6gHb8C53jxDf5a",
  "key36": "kPcsuRYqUuCxhE6RLbDxJ7hhV5J4eiNWE4q3binBbxisM1uUFYjFaMBr4ACvobdBpWxvvjUqyaGGLkdpxesV5Jb",
  "key37": "ZWhcbvZuCZ3JubnSFkx9PBZf2QYgGEWT8getwCoWBWKybQhiN9GvBodsKAPqWhNbzUeLLec3R91H8ErJzmYDT17",
  "key38": "KrfvEDWu1sLSHziaV8wVhgWHt17HdoVgVY7aVAf7nPzqbxhErnfmQSJAjDzqunV3p4rLZMnF8apr6nMf3v2uGKR",
  "key39": "4Ltf996f9ef4G8h34KgYwrdYFZv1P32E9m3ZGud2qD2hG95LAwnkEfuZieQTDB86ptpNjMNNXnfMjg3HAJMccrVv",
  "key40": "3bAxW45aKsMUTK34UeCJUEJ8pbj7mhjDcuAWj1GmppQDuAbPzj6ZNLxbpcbTkxgbvfpgKzfQsxaLQnUsKBD9jt9Q"
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
