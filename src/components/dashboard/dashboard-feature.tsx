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
    "ELW79nvGex48LS3sBwjztdu1AD3gjhQcm1vwHx1XLrukiRuhATqrkVdW7pwdr1a1waysjsLcVseXsTDr2PaWXAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54BLk8Et8f2ESyWeaj62fA4S3G8BkXtMHoRnXioC1GLRmaZgAozkSLKY1BPtEM3sCYkunyi1ZsoZcz1MNUeAT7rG",
  "key1": "C4pw1zVsPhyLvYHShGaxp8SCKHNMDmmV5UrL18TVLAMpHVvvwYAYDaMTTSqS8wMshcZbKDfjgfv7KeYagLm9MAL",
  "key2": "4HPGBZSfLKkRhfyoopz7iim8o2o2aidzPvNpjWzCWLtA2XurFpUmSdrKi1eSQtsmwy7Ts2KndnR2wDFiL2jJH8h3",
  "key3": "2sbq6oKEU9j13czVwWvJCF72ZrJaw7Hp6WPoAT56PgbueG49YgHCyuGhmtfT41MJQbamDcECsi5p9bRL5VGUoyDG",
  "key4": "DMWJjkZAqtTGNowepjsJNwgzivvbc6XabpCM7hvgHRDS86KAzhuSp5ATjWRNXMWDgzgQYjo26CvFezgQcJAPuBK",
  "key5": "38mi3pZeA39u9zw6zvgBMfZz3DpdHmPy1CDxZkz6KqLr8XUvrou5Uev4whJvKUsrcEnDL3hmCDkJwwYrEzTYs7aY",
  "key6": "3kjGctbxAdRmY83PeXtnYUb6FqjhmcVQdCcVgwC67waxc4Hj5DriT3KcKUN7CPPpTH8fHEJALQJ1io6rQzRqWeoa",
  "key7": "3JTuDQtyPjCHsduZTBEaSXKgzmwxBxFJvdohXTxFBzyjD1111EAJcY3j8USPHtLSsiQnYRUG818wXe7X8Mi2iDKn",
  "key8": "peEZQmLdBZnnzSJmamozCe5jY1uFsfLAjGg3VTNwCGTVgXAF1W6SDiYHYsRHXbvpBNLx2nxp79BXHxPJiw67HiB",
  "key9": "5HCoJauExojWaWkb7cD5po35NjpukRXEcBUjF4rtW73vU6J18z3dpD6p6UpirATATZc8JKa5AuWLQ1vyyQK1pHUy",
  "key10": "2gneWYv9kyzGBiaKs6HBujFa3sTuWwtZsjEQKDw6Smg5HYed2fFFDeDib5yg7oJZ5ubDCp2xa6rtpVaqubwoFYH8",
  "key11": "5Jt6WNx6v3sPyWSScDAAqYrWuPRZhtATCXNuQNepoDkwFQuH9374PStcKdsWLTfdwJLNidFFymYgWiRM2tqLXAuq",
  "key12": "5w4gUAsxFRBty6jWNRRmwVEiFfWMJZskvFqEtPWFuBPj3qDfq3DooxakdDowDBMdB96S2chV1uZ9XivGXni2B7Co",
  "key13": "54JKfuNiUh8gqMJik4txxvncL3K5xfKX4NeFXiFGCvVb3VSBNnZ2fL3Bmb1ztZJ1M9QrnvSDPSPm1unAX2KUBP12",
  "key14": "59tW1hZ5KToy1R7KegXPdX4btZre5Enz5sHsbeQP87rDpjkytTuAsadWDSDmHUNKbBaYFSqor1K5AfoRwWUcf44J",
  "key15": "3pz4AwKEP9RYdeVFwBfjXtwYUqwMNSKvENWk5maLUZ7jwoNfHyorUzrC5ideP1Qnnx44z5WrxPC64JgiQJzQrZ2r",
  "key16": "5vAMf6bFgCZZ38QFPRvo8kfu1UhMAfGTBcVTUJnvxrU4K9JJT1qNa4sP4fmaRReJiDmwZazVfzno9HTwecMX5Ux9",
  "key17": "3TSfUNbVKekFPPcciYa3PwgATkdCyhYKFsJ4wNo6SLMNeXwSLz6qAcDd4CmJxCHqfhuqRXfdkBk1v8xquWNaqJpX",
  "key18": "5ayZKvJPJQs3g9AC6QB8FAWRarhQTQexVeX1ZZ3hKC7mwSn7esM73htzBYg51wurk5stdZ6mywLgBFpfU37JPjgp",
  "key19": "5nP6FMHvD6iv7BvSkfP5rfYmvDcRrXCXW1da4kmzRGZ6JyYauWYsFLywVEhru9EtnMuJ7AiDJaKqEf3PfPtCNEyd",
  "key20": "cnUPo8Cxi5Nfa7Q79nv6ow7uXE4VYm8pjTbs3HyTdrayFCdg8JmbeANrxXVcb177a6YKk4ij5ziDKvAFo1pye1Y",
  "key21": "4z5d6NTkMmVrpidvLpPvoVCUik4E2GinbXJcnHAk1piRKmNiJ1o8XMNbQWmbmN36gvHqS5s8m49SFe5jDZVbCHRK",
  "key22": "2zt4xkXsYSwXemVgcFXsEvA9JHrREY2Ehmu73m9BzD6KdxAdX5RXww2KQzC3ZeEUokWRnqBpJd5mzYFWxWHTjZ1L",
  "key23": "2QQUU77jNjf5E88yQTMVsUV9NvwjT6RzvybQMwMUkeDVLKg21YGxbfTxwQKEL9NYFmSZjgm2aNF6NJVmGXRdiyVB",
  "key24": "YZd4emA6sTn1WkfiqCdXf4zw1MSNsyvPPLcz9F1k1StnFYPS8e9hRMqWd6zKgNgwTEK2jkh58fTgectk54mAtPk",
  "key25": "237QQ4zMyAFzDFq1sfCuy7RWBwEFWf2N7hmow3Kb4UyL1a6iiwbQ87GxXsLabXnsgG1kmxo2Q7uXbNdMwduKKEGG",
  "key26": "5tTWRU4Bc8u2Aki3Do6iuneZZzWrK8aRPNbDW3CgxxUvJayHHyoZkp74uyWAtvZLS6i5zDzozMnXMMFUqg5XLMSE",
  "key27": "2yYj437j2jiLhg9zttGTNJYDAqvTvQMvWp7FbRiBEFgsH8BZHjo1989f5pwm6cDdSqruuuhN7u7REZoCwpj7mzGQ",
  "key28": "4KfAuafuLk4xfoCkv7s7SStyGC1eMfGHBimqPTKTeJUCRrZmgygR1ZQYQSbeHXzR3QAUWtCm2KamWSUW7ANMBmpC",
  "key29": "y4N8aSUxjs6TsJrQKP23RjN6DjCnAQs7ZdLti9FBSZR8kM86HctJnd97PB6JVWzVbu8o5C5czVp8JSH4pCBH4fZ",
  "key30": "5CzMUZwBfeNmV4QLThXNwDbGZHKJuL7BcwG3h5aKsgPPNjFfTSrjYEu5RH46cPmeDZfPY6fcwfxjpWgr25AmQZ81",
  "key31": "3MXP9G4jmZPg5cSoszFbF7nhSqkoUWWarXdDrNf4BCc4yi4CCTdEDLGLJMQGSNGktcbeSNSxf8ZfKzpmKtxDFNbd",
  "key32": "WPh4TDPdXBdNppeG6T7DmefKdhrFhCn3ntjc7f2WJUPMKhbozkE3hvHWBnHVyG6EERNmWUrL96f6cG3WkHfxVHS",
  "key33": "4iXHSKxz3r3m3SodzozqLt72bQNKwtgPkrmZAMuX9UPKbuYFwuThLRnT7bYPqae4AV3md2zmm5jbL5S52Y4Cuii3",
  "key34": "3siAesdb5bxTLeWfVs6t1sopvodR9LZx8RJaHxxy6PGcBr6M5AEjCbDEb8dpwtS6w4cwRqLtpVoRXjX7SEwEdr5G",
  "key35": "4U3bZBtmY7dHphtMSiezwqzEwoELP1Ez3uYgyidM9RNB2QjpidnYL1uTNDwqa8BBHtk1dMyuWoWrVa5u4BVDjjKX",
  "key36": "2XNtXYCngH1HeJVFdCRuSUyBvZ6jyXmej9H5GvcEzzpez7u9775hR1RwUNRkJyndZHkGodFQxmmbJRwDQxCethKK",
  "key37": "4j9tFCRifJ71AmYgXVWuN7FaJ7wxrvSKvS6FbEhVNpddwMq5XP4XYERoffbYeerBVnUcQ6k65LoushwGCMr51y9k",
  "key38": "2x29hqaVLBeKnGDHVYatfPRNXWZ2JwRa1Dyux3xksErAkEz8ExNBavTLRAqsTifPsLLuAh82cyey9jVktbXgh7fU",
  "key39": "2zY2QfFu9bC9mZL73NhCPajG97cCMwNCpuphQcRyZSyuXcUSCi1DWhSQxXPUqr5PwAh9xHhYH3MbgYaqN2D5q1YR",
  "key40": "4oPgeyMfUPwXaMu7PNCtcsfDFbYcBZW1unU2ppAGtWS82bdxEVhqYwDA8aDb1kQ22hnsegHWpht3UXrbgMCpFhAt",
  "key41": "2fbcJXPZ1ca5ieJaVV6h3j7K6spzHUpbcdWXApWfp2MUPviahEngWvrirBXYgR1vS9NhQzdrZwxsLdwghhRYnVBb",
  "key42": "wCLPLTwMxc7eDcyAXsVWvM8uPKdGR2as227cwo3B2DrfQPRvnBruboCy9XPJGF6wiKtkptRyeLK8X2c55FJq51D",
  "key43": "5qYTC9gdCYU5797zU7KfyKH6KxZ6K8znqVek4urAmqXMqjni79HWhcGGJhr5gzxdRmkpMiyWEYnFJDN8ePVX7SEo",
  "key44": "5D9oSuAuafKMXY9zViMMFsegkZVQkiQW7hHMujSkzE9oMHRm3vVp3gAFgP7jUJK6xnPS1im6S7vHptnEkAwzrPUy",
  "key45": "2gNdybFsbPUBNiBXR6zFzHX3VQ8FZ5pfQJTLf1AWcVoFBr6W6RfTXEXmxR3ktFvd7ppUxQzRxJ6cDGu4s1sCyPcZ"
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
