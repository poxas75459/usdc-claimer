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
    "4AuWDTs8Y6ghLsYs9xpYzQUw59xCwDYjY8XWgVqFbK5DweHcXATr3eM5XX9pwWigQCTMXEBvZE42XDBAdYYLYCK5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gF4h8S7KvmwgaavEJvi77yDnFwbvZwCcPbcKB7AuH1Tr8hfvq4HDKLQCWZoRNjdR2buCPd2DC9PaHD4JFp5FYW9",
  "key1": "2RXpmdZrPm8DKumZutWtMsMPiFVQtKGfBeQ8nRNC7RtGgh5q5Wz4pju5DLokbupxq1bYy9HYebfEtBtdzu21DJuZ",
  "key2": "3n7tSAZGZYKEsSuuU2pXjkt4mmBeUqQz7MHJ3p29C9stZb6j7ttgexiC6jTwS8Q2Zz8o9wbP96rBVji6nhoPQ16L",
  "key3": "J3eSEHZrqXsGvSCwtJB2wcK56xkXp3YWgFexoje7C3NrxT9F629Wd9N3mySoRdyXHK1P2aMBRqjN4GJJSZTkYKC",
  "key4": "21TC9UMtNLRo8Pp3JLWXfhVxMxD6hUsacgsMYbCqMqNFBQNkqTKXjGciuFqq6XUDFm86RhSoW3cUyS8pmgTeTePZ",
  "key5": "28Eze5ejf7RYRgU2PTZaFruXHGwCh4kbWA4apfNepiBrezgKsPkBCdAwTjbCvMwcm4wHeVACfe2vpZub8qmUSNRm",
  "key6": "3dPB45CLF85jkb87KP3N2iZomJuAVWVKWaAmD9ACDP2zY8PHoCB5jNXDzE5JNEF9VJ1qmRqTZYnCXba9FJfZ3aXF",
  "key7": "iGvh3csz8t7zRggtzeqe2F5jHNLhB2uVbiHFbBBnyJUVxvY4UYmSu22sRR6wQRh5Mr8ULNfxZvW7MqRRTe7CS4H",
  "key8": "4NVFkt2mSBkTS9apFvJt1vQPjhPT5i7Mjdki1f4xHEdcnojst7ghwtCmSNJRBKxusdpaFuUJruToWvBMhX58BtAN",
  "key9": "5fcqFGVvAKpn7Xxzr5G4tbZyaBpqwHHXjtP5Rg6wSZCW3cf4UVDoW29Qwu7tqfZA6ZTQk9oS88j1oPJZJj6X36n5",
  "key10": "5mLfq82zwVSnAnz9zbeMY4dxqPtbb4q6RDcTdHdm6h7KQJUTRRUv7RjP664KnsJ4WprWwfCfQMothnbm8EKm5u7N",
  "key11": "3ohn4cLedGzvJGgM9sFLD6Rv3cJp4JPPT1jbxMmJfMjoEhAmU5n7s2tMzbepH2tG1S4wS1CaBzYnSGjW9Sn2fsjn",
  "key12": "46n5e6f5A9SZCJMxD9qPeLzKdfsqFhxaMB3tR95xCNerL43Xw1zMjab3RiUzt1Ac9QTzKoxdpydyGpMF9yzjHP4D",
  "key13": "5DVB9RzCdbTd4XT4xPgow5SHJ12HMXQ8dbYNd5MUiu5AaU2HfS76ZyBXYpeMktNpMXoa828ka8eNh3LxUM7aGHZC",
  "key14": "5MvDLHfZLqfKL7shHjkMJC6Rrq1cVLjoJ9gfPF9s3UqGiADcfHpmRyFTp4yySsoMJHFBkHqH6uajGrDUdrbBABqx",
  "key15": "5Utr8aW4RiAGpJxEqxqzqB9K7Wxb1yAcoerLcegnzcDwo53TN9ZXk2B8JXhBiutdwAZu5J12qHAnx71gFaVfYGtP",
  "key16": "9hTSSMterj2LXBBvmazuFUFmRxw6tVoED6H9DMeiUwuNFdKe5AJgT1Yne1dSp5WyUJMLKJEpQnAbHP5TpmCEzxr",
  "key17": "4XcSdmEsg61XEsPFDe1zmnr749H7FgiKXLfZy9sh2gkXpkdfWQmtiTrLzeRqhGMQmYD61cYhTfaKnKtfnwCQFaa1",
  "key18": "5TYRruMyPqyoTorxGp5zn1n6wuh5Wp5CbkHuTLnrTKjwAXTVLJZtd7ZWSfud1PyDzR3WhStBiQXkTRtSay5cTHEA",
  "key19": "54sci36CiZMnkRYdGbWWYqNgZfhESTuuWczjQzLzraZ1XCxQzgBSFXJYTJCfTuRt7qvcfy9UsySQm8L6mAAVacLH",
  "key20": "3buf1FzTdZsKdTybtiHuy7YQNmrDk6nV8XUsyqxWZdbXvmNGghdMo7uwtmwqYcFL4TxvNVFwfbPW9uaPoNzc29Vg",
  "key21": "5xHkHm4Ern24y3eq6xXUwWuuBDWW7rya9px2nvjgq1LhSETL6jrvNkW7BoSWJvStPiSrNRWEHnCzgQekaPFGP12K",
  "key22": "2vJjcKhCc3biXeNQSu7CeeSXowAaa7WA8jTqGTsPFUiePcgn2y3Uqjf8nQ1hfceCTaCC9R5w4AVXDH3jY5R4QH3a",
  "key23": "3UsDpfceKP1fN7TqvWiDvnZ8naTVJqxB24QtoM7JVT6T7v5nL7yk3d9oxbSzsi1ykbenV7nEkPkVHQPcFyTkAfQd",
  "key24": "5udAwB9NyY7PAwYtmRcXWAGXWmzCjDtqLsessYLJiTojTnoDNyr71rEEmhLgAQAAVvKbBXCovPKKU6TjZ69ppc6H",
  "key25": "2nDKVQL2NqVZVU6zaQ1dMPK8bskfsBBzXPfeHAGgCVXjFvrE99xgTqwT2BWV4TfkaChexEdurRLBd5XPX77sofFG",
  "key26": "5PsXt8LKYGj6C2EfXf3PqZgeBzRwP7PqNwJQ4xQaSdU97pj2qKSxjbvybphQnuBWVzyChmjP8Hj3g611tYEAdAVH",
  "key27": "4TthzaZ7wYsEefqyLnCfNRkVs8WYiD3NEAUertvkUyKv79QocRBX3NCezz8a7jjEzpcwdpLQ5NBHqir7ALzonB93",
  "key28": "4Hq3YwqBNcPQk8S8PtyykKjChxSvPRnY6KUHnfEgcyLza6NmNezSafBvUHMZrcxMr6dYePsFE5fEMDMqqde3FPxb",
  "key29": "4FWbqZHhUvzpbuhGdFKj4HddS2S5qmxp515ZcgeJwrTZLLrfpmdcy4xxkN36G4kY8FbitWHCc6wjRCfgDZcn9T4N",
  "key30": "3LMH41KuBSreMqCYbM1Lb5KvULdj4vDTLQjK4bXpkATkD5BWYcKgCsUPbEC7Wr8Qeaa7Zkm9uzz6qSFaWrH6hFkm",
  "key31": "ncdr92BVTtUp3yJhAj8q6k2HW38PUCvD94JZHQqXX4NMBBVQFhrB3iitvwx2yX6Q6f5Jau8bngAavxcKDhW33G5",
  "key32": "umKHQ6QHwM4xS99jkVqbNXof8PTY9TVgkDYrhVu8xC2LdjxZiVqjuYP6oLYosbYsFFQS46N5Ekedh4AVjk1eDwn",
  "key33": "532BHbCzanGcQgQBv4bjvNJ4MuoY9zjRfkj6V5ijUEPBJtG1VHnDphjTSNkbSE97w9dfzGFgD3NCULWzUuwN2oL8",
  "key34": "55QMxT5hqwGjLpb1RSHgZznF2akEwf5CAtm3omEDGN1eBtCvBAGk4GV5cDhVH5FyzDD4c4TPMrYQbFuVdE3yz7be"
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
