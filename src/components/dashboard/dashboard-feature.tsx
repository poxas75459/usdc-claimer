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
    "33Cug4rdxzpCox3z178cQ6N6BhUP1EecUJjx4QcgHWL4TWmKN9Mq1y9W957cdzAJXBx6xzu3oknWSkJySqQiQhKn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TRqyucm8QCgdim2KQLyXUxUCBVicbEXXkVFdYugYuQd34mWwZVgTCyzbZWuMqV9P1MYHt84cfUVHGvDx3QBgbT",
  "key1": "5iRRA7cWLoERj96WJEWgpc9h4wguRyTfyc7VVr4vx5xYvzBmyDH4RctwxDLe6FGNSFbqK3PppFb5VGxsw9ZQG7qp",
  "key2": "3mu9B83CgX6V3zkSYtn4NLdzsLD6xZGpithb8d7tRA61n6x98qDUZKE5sNFj8ozBsbA6Sew2fkF4SdzJ5jUKz9rZ",
  "key3": "2Y3JP5dRqMFBdAGfwcYfDU1MFhmv9EoNsaouLFKwefPy2xjttEuNRwcxLSve98LDDvjyhBYobuiBvkXMaSBcUyaV",
  "key4": "3d3whTkkXyqGUJAZhFhmM1YC1Fsrih2Uhgjvs7JSTFjcGgj8ByGBKTigNsgUSXuiz92CoPadqHHfH5RpgTQvtc1F",
  "key5": "5pQYstGpNtLV2TbdFhrKHugYzC83My25taAmLUMaARCVxuJ1np7KhswgLTUyrXT6LU2TZjvHvTSKqMRky3gYjgiX",
  "key6": "5zbzKsuhoMeBq7K79YqHtBe3dvQs6FRH1pqbEf3utyPaP3TqwDNq2YADpt4M8fs1RjTqZeiSg8cpgRQm9R3PJjAe",
  "key7": "4TNE3Nwac7gJjhStgv2nwABZkwXZqvxkdyypfUgzNwtgoE3vBr58m7aytgkHrxTHXiqbcxZJc5r6ioEh3m2cRJ6P",
  "key8": "4GFVXAs2TFuioJkuDCk3issap8yACTTmLJx2LdQT76xXDsA2mpK1HSrFoXtZNXu4sW6gAbyqRj9w6834JB4oRQE9",
  "key9": "3KtapQaropL36MGZCsDxZnfV2CqBNGXoVNBdwfEnyRceoMMUKYBWWBD83xYKDa98F5Lom6azSYqBSbxMr6EZeRQB",
  "key10": "2twkhrxeWnYUt34xgZ7VEbWw581iF5CcwY4r3feuoZjCzD3vVDmJoydjwp5rVYg6GTzA3q16MHokxdS5uFKa4DKM",
  "key11": "5cZDJRN94VE76nAq5x4TiVJoMkW51Abyka9u8FeBcUoCWkkbhhqhXRygqrw86EP5N3dPuehUpHTYNKasdJZwhyDz",
  "key12": "KcWUXeAWKVoWqxBXgBvhYvCqkbT87RFNAieM5dez3u5oJjSxrVHpjhpZatpUJ1k5UEo2Nb3kGsfUXTCPXB3bjtA",
  "key13": "2NHBFpKB5DavHia75v7hwzVJsTEC3AqiKKVAj9XY7pUzvDNGPitnkMJ1rdW5D1vcm1XLmiJyxy2SGFR28x6aaf9Y",
  "key14": "3wBQ3GD2CnfW2Dz9tgedvbq5DebeCpNa3T8JTTekMkDV4xRfikGh7HGDjTNSKkEhLEVYwANgyTC8oby9f84xHzSn",
  "key15": "2YwVY5pBFoRfuSGCUvgpHY4SS5gFpqCuFLrTmDwES6X26xyFUGn1P7uTLS7ZEV3XMHL1JwRYfQUgJgAWrw3gi3hj",
  "key16": "bfQeRzYsMScpsvRw2qjXxraeyhdfQYv9H52f1t5Rr5mWHVwjLGuiUyHir6d9xSYmRjdNKwAvKwMvyqwitjY1YB9",
  "key17": "174AaCnHL5qAUcRCEYGkiZB9rRdBvPZyygKh1MKVPrU55xdSMJ4PsPKtuxPDG9jacDmyKj7Hf1vDiCRhBfYJDtP",
  "key18": "euDxydixwkzYBbYS1cbX3MNTcGss9v5YcXsvsUUqkMgEtMc1xWgzvpUyspwfnaRD9zEEhjyf25WnJu8FAioSLaD",
  "key19": "o8CPoZbdPVyzDv3Ct15rWLx92eGDaPqLY3LHXPzy8osCsg1k2hNrvs7N8eXot6i7HVZPPdE8xsKQJA4uxBFYhwj",
  "key20": "4ZcDuLqpEQGpxvmvo8WK6i3otqTZ3o3fDfppaBRebTmyA3RjvJ9UX8vRmvjiWSfdzi1TwSmv1Y9T5nP35dmFZc4w",
  "key21": "63MYDQEmbf7uDm4gA9StRNZae3eRKYrusdUrHVQhaSMdQMCam8v97HmWnk4FPkNH1Eji42aD6DcPZfTqnnnoJWfr",
  "key22": "3Xz1A9YSzM6W9prtJUkXuqaUYFcedeA3erXrs3V2oHJbxYKayDKhzXo4H7zH3GkWtzQ5bMy6Bqjphz4jj74ZktFm",
  "key23": "6FdnR3MM8uvXmsUuQFAPSeBUmGaz3DZYnqnmxngRyNw9oWLS8n7PQeC8DnDaSBS8VTqbxMqXLAd5SF668aNnjRZ",
  "key24": "NSZcRyHLenKs17w1Yo4F13We8sQ4FBgiuC5K9hVmLxgTKnpck2mcrv4PMRjwtbyyhwvnbDWcLXuDtc5A2Xj4DYZ",
  "key25": "DhSuYe4rYGAeqNWX7WYmtC1MTTFSsKVT3eC4DaSFDGCmak34JQdq8myaSgEBuuTxDsjAtnMqf9WvTzA7FGp7QMv",
  "key26": "4ES29r94UwdNYc8sxH1374DPN3AFMv1ECv5wkXe1S3pwPP73G5NyHRupxQtSvqaTGcx2g1SXqYY4KFqBDniZKBmm",
  "key27": "61Ls4fusKqK1W3xcbHTSEQxL46aey2PHmiCNDh1hFw3Fqau8CBx6kKtWGPf6sXmghsuiNLBxSj1SVLHxWDiUNTVV",
  "key28": "3oyAmrJev5gt3oHAxQhuzFUTphVe1a1XT7NJtMEZwJcodjWKPCDuBGsrqErbzK46uKtcsPYzXGtpKHK79qZLmJt7",
  "key29": "4H8ND9AasumCGJpo4Lwfrm1MYDZhZgwnEK2zecFpGQYoFSfdm9dE4vEhPANcxDZ9A9viafYAf38W8bJfAtUj2Rjp",
  "key30": "46GrNmkoQN6DCfPCDxgLUw4b9gVYg2V9XnwjfKLz8KRhSsE1H8DVMfd1s64Uf6tobAYyKvjP512YqjA2E4ceBESf",
  "key31": "4z5Z3Norjoe9drrXtEVGsLEDWN4qDzdXYK8BztiA8yZreirBVcfnb621epJZWzb2YFGrwgY14R2c44qAc6wu49Nb",
  "key32": "2xx8VqtNb7JfNCvzL8VKqVjeLDLr8c6N8W7RTk9rbVoNhgCZURsFSnZD3NRXCMDLvUqWB2MBFfqzLuxtNd9pkpGU",
  "key33": "2tmcR1QDDBraQVcVXxfz59SFsi1be62zA1hx7fb9aWG2jCq2hpYau1qsHHKbXDgJsbyw4qGpZk5Ua6EJDkFiGKtV",
  "key34": "5FtfzzjpEse6hLzuMFZbPNR6SrXRighxCFy5xcvztkxEnbzZukNJe74c5VPR8S8cBqmH1L7uBKyz6ThS4fxidCHU",
  "key35": "3Rpj5fRXm3NqnwGnRxSNYQKwaWudHKBnRvYDaCSTXQAG3yVAdNedbLS8oovQUHZd4cUgp7rpxBUeNq5YaQDZDg1L",
  "key36": "4fBmf6VoRM2Q5mU9Y1ok4UyEQmyGw3oeeHyJaPhYUgJeuSFcuiPea6yQesLhRhgMD5akbV93oUJGhX9c7CRCwYg6",
  "key37": "5UQMf9wGnaqmreCnnuadfQMjAhq45smfEtQtcZfsFLRW7tCyQafYadck7QbpArtUCRz6v1hbGuUG5goTJ7YtTwp2",
  "key38": "2xDkSQ6ZqEMkoxBnmGia8PvrpkHaRFDXmq8tGuuXAGMMnZYv26ccvHDDkGqCZ2KS5BkTc3VxbaihkNmXvBPQB8U9",
  "key39": "3niw8VxBJZuRj61UP2tKuHDwFSABhNNCjTEehoftfvDq5GQsrKnCjeGd5Aw1oD9ewCEy9wr6zxAT4BjQJVHMXk2o",
  "key40": "5BUyxL8r2fD1v8PVJTo6H212DCmK2ueAFtSgPHTUijDMCMo1smS1NPmtTbU4LKAm2f3Dtrwg3ntVt61bXcgDihxa",
  "key41": "65KVtxNJP1fDwHtfyZUv7Sh4pekchiPagqug5Vs6o3DyJuoijCYCWmfkcLtB5p28dxiARVg5nK7woYCJGucUWChF",
  "key42": "2bD6SUWREZ2fP2sXY755iCosenygfPqvf79ZveoxZZrntyzNCT3fYD1f9TkW4uepEdyNHxMZ3Dffddw4hdPNNBra",
  "key43": "zuCG6rsqsT47BpKpdh7yYkfKswAoDztmycDLqNwke4fDa75QduxQTsgXLtxs2jGQzJBckRXo1xyqhTQGQRNW7c9",
  "key44": "4Di4RN6uSmbrr65PoeFoqsRuPFCj5H9CJ21wbCM72PMHFGMZ3mqonZN7fuk2E8RPcLb2Ys3NV68s23TFe6CQHqap",
  "key45": "2XxT8w1WWZd6gKXQahhXHZH45ow5kiH25kVUY7FQqK4dZbiL2j54h3Zitg7jTRmPastLSQVh6xs8bMMZsR313ipX",
  "key46": "4BpERLZLm9y3hdtkLVmRyX6NivmE1w86FEcPk5tmUwxpmsVLAfg6QZcViNdhQJnWEhgpTssj9HvFe4iemxrzDk5s",
  "key47": "3WhCxrcoyJ5Bygw6F6jhCYmfg3219bnGmFg7VNxGSgFHxEhLHqCh2tQduEw17F2CsDCV2sACQbYrkVbMvzT8DAxe",
  "key48": "44QJDaAW44k8WVXcLHoLBo8W9jkP5X2dKpyK8wbZ9EwTB8YyC52fKD8Jd5CN96xLGdAFV4mPkJ3Py9LuvqppZEqA",
  "key49": "4N3MNqiMa93pWK1THyFtEWyeBSVL1BbA7Da8BzFNZ4ENTTsy1NRn65RdBi1gpsTiAYkDa7YkiSecpARt4jrTPjKr"
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
