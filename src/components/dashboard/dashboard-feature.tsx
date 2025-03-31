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
    "4CeKeSNDCBgt5mjpDbFmN3feggMBv7n4bGgU15GrYcyLbqXzmEwN3VEyScHk3YWaj7hDPEyrm7JbyUNyUfbxw8tc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4agf8ZrCenR5VTifbsPrP65sRWJsxmsccvCjZDRZ7Zc9PijUKDdw26byajX7rDV8tEgkpfxu59rbq6d1iNwKS9MG",
  "key1": "5SkEqW6QLBXguQvaDHQVcFgW7HkDG1vTaGM2SznL53azeJySfLG4gJXoHxDPQ5j5u5nqYRMa3pKpruhR8dA5ysU",
  "key2": "3EwZkUJuM7WiubfHR7VGxeJFgZJNFXdWiJGMf7ZyDZa3NCDNnqCgGiR5nfgcViNFNS3BeUxMzzJKmEZ5qHHd7kkk",
  "key3": "5d7oYixbAWZQmgQNn3mshDqnG7XXhQDNsS61P1iewanwMex5QndZYru7Abq1VZXYMmRexCUk8kfog5KrmJpHMayB",
  "key4": "APmQf1JiRvngaS6NWQ3Z4myUyrFSaFu7UkyQsgFTMEnCb8SLU2hZMEhgHjFJ9ayy9V3iXdRedWxrFKt92qVXpEL",
  "key5": "3MUtHpQFtw5xkx17snaMC6pL8f4EhU9BowVKdaoYgYujLvgJySfcvqEFaiWePbEeBkaHrXcMXCH6KKx3vQgpSNic",
  "key6": "2fY7WMazMgGiSocehr88iDKZ1mcexwrvgG3wquAbyFgyCUDPt2TzeMYbegaEjmRqEZAuxTDzbQLmPxteNXYT22tQ",
  "key7": "5fJNafTEscCSZE8KhRvfVTJxtyNvKyNENG1g4FqFwdGzKrz76kK3dnX4DW1Vp9wjjtf75wTDSpqdSwWsE2VL5ywB",
  "key8": "3NoSL8PDNM3xW57bwS5SHdLB1FYbcjNNhcUx6J7Q28hUZkjDUUkKyimaQ3mehNU3BgySd3NkVgsJ1icMmvFeX6zR",
  "key9": "VgkpTwJJSWz4eP71B6FTKTmfYoENY2S85PE7YDvT7YtSj8wPjVmaVMS29rWnc6mPWSZkTj2W64XfyRaKMLQgjze",
  "key10": "2jVvB1smCzCj5f87HJXpfeTjXrKhLXNGMat9bEe5XkHnhfaTWJkmJvKsE7gi29JQP4NQa4SRTkjtSHnHf8gBhNhw",
  "key11": "2WdSc6mPtnjRRmNDGGaXwyPq5Hkzmvj5NbHap8vXCMrvG9Tq3DJsFX7RVSjcW6m7TgjWkvsdVVA1wA2i9UWKAc14",
  "key12": "YqYBjh44qACgyv1rkVVQZF1a4aTitFtf758R6zVYx3phszXoyasXMwT8c8eTBdPWp7EZHxUtaNRPK9DJDns4q8h",
  "key13": "3Td3wW15JtH8yf8PyvxE9QfH33QoPbxjfuwWDN8dLMEC8QTnPhGoSc7v1vFDBN1sLXnBXXLQCqdQxVP14toHnbGs",
  "key14": "2xecrMeyRVbXZ9Q3hJYccC3bn5GNNLnQQtAa1ZWF8RrrpFY5nayoEBwiKGe6UVCcUg7EEacuVvTk9XP48TxuTesh",
  "key15": "5bHYnBQ4or3VxAse8wyx3i2KZEpDBtah58jgkQicyeP4BoX83Cigmy8yWiT99S1iEZRVBMERdmvAqZS7e7EKSfZB",
  "key16": "2osF7dLVe1hFt9U7vMPEMdDqafaiPAqbVjHNLW1SFz4mJeTxKwnF5PWWTCmjMz3rxJXHDEMVciZTEPwVJTxFXeNE",
  "key17": "2iFSwxFB3sczKHh7BBa132mKDdsjq32oLim8RH8zNrHm2ResmWkzw73BU78jPDnFD74zcBsd9MJJ6i6hC1BvuC1w",
  "key18": "3okEDE5V5z2qQFHjnyGshxiDm252S1qzoEjDbBXVtaekCknT3haeBu2AWdfAhgvKkkPzFHh4PzwXamseCmnpRmqW",
  "key19": "48SKoNRtPnT8sj3bdoDbrRTkkocFsqfVTQLDvXbJymanqDZGWesJEEhVP7rFLbcidEmF39GwnsEr7oUgocAjg9EH",
  "key20": "rdnbyFVThMB1XTUbWd4FMevjEMZSPhqp8iHZRNKL99hjWcBn6cvK5JyUaTqyr5vyonStasRu3DLa2JEQz8LdQiZ",
  "key21": "2g2JDk3kQLfif54Jhpq3TRB5ttMB9ZgeDhxr3ubCkhZSdtscQ18Yosr4jeBrpyi1zovNmMCMRcrcwdJoVKr1Py5a",
  "key22": "44Wh9hp5GYDEENfk8zxLvJ9WRhd8LEfiXrHikEdGyRUsRTctZPBPre3ePJKXu71HpVnjegJiBzyQyoxJswLNhcVT",
  "key23": "43UtLGWDikRAFoBTTR7zD1d1vc3PU6FKGA8tpPxkLt9Z4KongAw5KyB1vzNiynZkgcz78FW8mD1wV2Rv1iciFd5J",
  "key24": "2wHrLGd2CgJ8sYYY3hw7SbErer2tHgVVdMYQcbnN9temq9XwQRcnzkFm9S9ma6jEeizS83k12wEXmWxSRdnaq1LH",
  "key25": "2am8qiMqRGSFZFzx7rGRupLNq12yzX8BvrdNnQxZjSmEFBFFE6uNvMxpNTbZy99DBiz5HTdHV6gfNPW8Kp7GjxNi",
  "key26": "4Mg1LxiKLDVGnXmXDVpcgVjiCDxeTfKD1zcLexCmUs3JCvsE7vBgNv8Vvus8qw4773Fqfwut5wtRBgengf3qZ5Ts",
  "key27": "v5bkRVYotC3HofY2RFWARjfLLemUqM7LwdsQA4YjGfWctQhHuBcxUfazJfP6MxtsD2WcPaTPk65ZSAH4ANKoMMC",
  "key28": "3nvR3NDCez529Go9n1XHbzuCJngDEEh3eW3h1LEzK4vqzrGWhDFSzvZfRMfRfatyNUEXAb9oWiGE9tgVQbAPYEXJ",
  "key29": "3wkiEAJ3ypsF6iEfwzgKNjTZsrQVyG7Wq6J7v239xESf4Cv2N366LxKnUhWwxHb1HsvRfUyiy3JD6HJXy9K1rWJ5",
  "key30": "2RTzGZYsDDXy3Z63qwWmUXDqun5faAXSgC7eyijvv9ULjYrNQ7WGwuWgcdkV4SyVTJhC4D1XShACDbGC1b9rr2nU",
  "key31": "jzaNLGRY9xUJGNTYrYqJz1WoqNWhbsS23Lp5k2JGcr6T2Xx1Rbm4A63sYDBcUiFu13TvKA3gc1h3LvBEDPpMoPa",
  "key32": "2LgrSkj5GBvExAdSEDUeY7hTRQ4SKiHWtCPNLyimToAh8d5D7SG4izFaYtUN6695Zge9Tvti5VAwNfQJUNTuYmn7",
  "key33": "3UDAJ82kidZsjCvVKW4nEqJfjuShhSE4jLKHiqhj1euz8gSfALrsXRxaw2zYX1snNjMn5jEU6SRh7CqNiSVtb2df",
  "key34": "uB199jFpqaJubFu2QfmhSvAhhiBVKU2yvWzFPSd3A6SiYdLHYnmwMLSzMutfqng1hYpjfvmLer3eYotUxEwEkdJ",
  "key35": "4SuwutPQhkvtsEe4ubbu7j8Ay2LaUsQw3CUzBxFpo3Zi7RkRMMCBGRjWXRdcFddf9J9jnCNMoJimRWUDw7GH8LHT",
  "key36": "3ofwPCCxBpgpL5n2cYsC1sVLTNq5LDi9cCQnSq8frerJncXUzjK9tW3MqwHus9gqLNbHpu9f6waef3ssAjkC975H",
  "key37": "277KJTbgFppZcauLZEiQf1ARDGEDWWtKJDTtC3DNiXBwHPPqakvLquGpQLf58FVjr7XCnbNUMoeoLC6JPRpqFsRx",
  "key38": "4racXDKR34vDWLAyeVbWW8PcGfScgJCnqKEG5L5UL9qxvZhimYLePkkBhGQPtZUMWoJcG7WE443p9bGMCYZL9q5B",
  "key39": "3a9opmDGwvG2ZBUu6eof8paUSGWJJ8rYd2gET6Ln1py9KFyNvkeFsKEZBtaPTMuGKTvWTjckXFaa4EiYaZfwAkG6"
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
