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
    "3jybqLsZFd65bjLzYgf6PXmqGccpMXcSFwv6MXENazcJqmgkqduS9vZa2FtjbsQtMSGnbmD4KXMN3RVCJaCGR8BC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GmexcxS6ia5X4vt885zoYM54ZyizDQu9fP5FZtk1hpJmgyCmhfEdRsiprcePjgVJJDrmoGxT8b9g2eqG9JL6kPe",
  "key1": "65uaBxFokPVeWCDgN5wX6TNAejhduE8MA1LiGSo751nrLCbVtpWnZ646UhnWtru6a4UHL7bpb7xqMgCFnYT531TH",
  "key2": "26deMZsnzCtiBmhhk6gmALSqPxcqYzYfzpbpYF6je3VYbC9ugGyL8TAp2qnRUW6wseDcMpinE661xxg1T9owYvoa",
  "key3": "4ZTFtBQaDoPBi36xwELVZscRnWj5ah8ZkWE7i7UFqx9snKytZYgzYYUHuNS9AVKuDwhoJ7ZGoNE7aHTGBVK22YT5",
  "key4": "2WkvnctHjTHRDbWXVApKdQ45dYd4thTwRiE5dinKHgGjkaPKrK9XWCqdMPTHLCPofxgQVqTtQbk1ZXRfR5h7cRW4",
  "key5": "7Awzi8YLBTP2Sq2aMhaACsNS8ABgK8VtLdFJgoACFEpBaNqXNzXcyrgHVjpiSGnGXkgmetdy7qEZFrY6busHWTu",
  "key6": "3MFXjncwRVvbgj3M8ptNpd81hp89H17mrhi81Pi6J7W7iKYPWcuGX9v4Wq9v2BiJXjWzdhQm4M7CJw92mYwKcc2J",
  "key7": "5E92fdvoVDneVxch4eZsVJMpVXNPbgvtDWAiPbmBfQsVPWswrf84mp3EF2y91Ka2fwTAo37C1W1pHjjWhQ6g1U5P",
  "key8": "5QohvgBxzLhUJvcy1LTDvSt5JtPkG5UdvxbxMojEyuY8vvipJg4rmQRY9nnM6kEhVoQVQUDywruf4hfJBRH4ECV6",
  "key9": "48sZCpixqpy5ZpFhsQ4GuEp6i1CHxXfdB8CDi99wUNNtPuJn2p2syFpoaJyfyKUiyoGAw7rhgcwnNyixCtNeimKC",
  "key10": "5BA2z5GAxYVWgpjEVZ5sjqBpKAxHYo3HAuN4M9oKgRiGAy6Lm1jYvrrJt2ZJum5c8rhTW8qMhW9sJtiv1LLBqnMJ",
  "key11": "4DXDskENJacwp96xY6qsRFsAnZorfN5UtE1U1FEDADZa8eLjkZHhhx4gqX1XYSYxyxxsmpQPh74daoCpRFVZfyKQ",
  "key12": "2yEZ7JsCLn81p9EMB2bYZYAUZWRKvjD7no5vqQQrji481EtZPjernZ2Jrz58B8sgcLTeDFKqq3SnLKcXMMi7BQqD",
  "key13": "28aDPPnRGJmzxpBKeXoJ5kQ6TMAYEMxdTbpqJqVBFppfu6c3QBWcWWZeGCFezjBcwQAGU6sJNoHRFswFFjD8ZEcs",
  "key14": "24bGywSetaH2jPQEfpPNcVqJZ7EpP4ELweK7cU8mLagTjdth62117pWewNxxTqaWZu2UcdyM5F6HExjGMGwz3Lag",
  "key15": "4vKwEGPqbhU6MbvokzA2gN6PU7j6fKdtTwjaFXewoFKVCRiWhT3wFw8mFeqswV869PbjHHgjXbYxmaEJjdhqnpN",
  "key16": "2oJpbpZRfWF57VJDCVVQS2HYmvbFQRWw8uR8dbQpb3Mu8XEUcEiebSp6DJQTZLaNj4Qktgxw5TtvCZbXnhWqg5xj",
  "key17": "ZFyR19dXLP8eBJqmSEVe7xAmQY99No85ugk6Pj1Y2GT9pxtJpwAEGWWou3MkZLmhjuhzBkvuHhfob1XwjF9tC7e",
  "key18": "omyiWSDaFndNwF33ASsQbPoSehEYLKSQrvghVV9eT7r4YPHqpaWEs7vpD8S24GG5m9MWxfk2Cir2CWvTfB2deqC",
  "key19": "2Fj3sUE9JUPG2NhfzSVj9iXdD1hZmepyHBGQAH11ACBFXe94peK1QHPz7tBe9fvxLAZS6Tuwz8hoUysgQw4ipMjD",
  "key20": "3Zxw65Vzqrkqbds7F6sR89fEBkz3cMf6PE7kR84vj912FgVx4PxAEnBwBLvZP2kHo1sjxkNsgXe8tTwhiFZJGEB3",
  "key21": "4WtNevV2ZjnVXHdUkrcgmB6BEZirBjyjghVQnR67v4TtxgvKHUKVNmHECAJnFJ9Wwqjn81nLxV1oyQ7prpMEwr9u",
  "key22": "2Rt8gBU6WKDZbRUbsv3iodiGY6mXndd45w3WjVNMho7dwyHSK76EWSp74e1rHkwuyvkLvYAY1cb27W16ibCdMHVV",
  "key23": "2y3pYKMszZPw6rQFVkex6LPfwmjhbK54WZ9br983pGN9Tv9g24vVAmgVcSfEgbQAg4z4CDqE5chmk3hY59erBYX",
  "key24": "4wnpFiwCQRrzwnGMGa1XfNtGVfHqXBxr16utGBvrsJL1syA9sbey1rGSz2mABnALHX4AP7Kp9cVHW76rKe58umvS",
  "key25": "3PRCJiBARih88RucFuVnEtwQCM2kzd4j4cbUGVPC7m7cKEvznWqy7uNpnzgiMFFwVFWQXF9rLA9Crr9j7sy3xdrW",
  "key26": "Ppi12uiNwhoowX6jGF13iTYbcfhX9sf47oD16KfpVns4ov2KYGfV86rxQ1CAJ5UcwAgnKcumisf75VjoWARCGmD",
  "key27": "4UTeZX32cde8FfWBaf1QgtWnW9u6s5F3DX9UemJtMbYy8WkLfJmmoPAhmPpfL2nmpM3i3kHV8gnPYCasDND1WwdM",
  "key28": "5NMiyJoLGWSfnfZZKdQ7sge8ew7kw7tdTj5QDmUcM1gJCmhBV5q8GPgSptzTSNDgzQDmN5sFyLkECAMin2JMtuwD",
  "key29": "5kLnTcMs1obwJ1FqFp3S4TckqMMi5P2jbnmYDiPneGM1jBrC7XgxZPw8KSBrJAhWnctmtMhCfwZhRcDJeJKQFcih",
  "key30": "4PwoKVYY5CD1qqDj8hGRjATuHLMscppuwNFUFaq3k5MVZNNzSYqhYDsRCxrFcWN4nh8kByNMX6Wts9E3DLup9LvD",
  "key31": "2tGcnA7u2f9yfwcM96ypDNhFBRQ7499dYapB2gpue8MGNTQ6E6d3ZnCruXephbTLBiHG6efRyL2kC3SVtEUziDSk",
  "key32": "2mvuEj9HAR3gt67i2uWdVVHT7e31c8gi9RDLXDD2LoC5qn3oVrL3hMhg25j4reWSTf1fVkvoG4c3oSAKZb1wRNhQ"
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
