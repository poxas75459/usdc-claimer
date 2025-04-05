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
    "2r5VYAwjL29durPWuVM9KwHLbV3jBdCQsVfqX2iMKbVDD1ki5eiuVjE4NoMhecVwxDzUcA8tTrAEXeKaWfcpSafB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SUQEFw9uZRDfwktTdbNqhMBUNL8qK2NS1R2h1WeFRfM3MmPQEby9xJnQs2HRrHzBsFqfvhAdc7oWASDPQf5fDu3",
  "key1": "KcMdnL52ZbRHi7TPqMCxELTBtJHrLMoMozfyzgpDcMwKPU9MWBWi14mWvCCX8Co3wksXsnCDWy6uDXtxguwfQVX",
  "key2": "4Hmrs64WthUuT7gNxFcZenuobFfDihxBQSboEnFZ84wFoaJ3G7WM3ziME3Dvb4Snue5vpW1mhuBkmCUiwe9vqVnm",
  "key3": "L5LkSBxj2iTYVxBoZ6TV4eGke9wBPRPNe7xpLpiyFMAuQ7Ze9MQm2fCLyiV4S3Ryiv5QBvPqjjRCL9taukAp3c1",
  "key4": "2A9atGfX7MG9JxDNdDDs6KMeKLhjtQF16QXvyFbrqHZzo9Mf6aBoE4fRENwSB25iCuMdAoXpaYBALiiSig2FtmuM",
  "key5": "eWoTAucciRseMkDdYhGVKUsBMRiy3pnfm8a2zsnZp2VYKAmT6UNCM8dtw9uEQpcvjyadFHC4sbaQvNszkanuCwa",
  "key6": "5vF9dE5s24qkjroXXYy8dNbALm3brmVcG4sia2QVHjEX9oATDf8Lsxgb9fwJdVm3fXuEED5i8ZWKwKkRNrfdLo93",
  "key7": "3KJJP4fVXZg2QyDruxrEFZiTijoeUuV6b3SNgwt8CTzXhzcKH1CksXay9ibKtGVEnyw3G4Vj1naYqVe4mzMwq6un",
  "key8": "3hUyeoAA1zTxn5iefKHPd2td2CdykXgbf5W2t5Som92uc2fjdczaTSnDVNiU8Htr8FYF35CJoaVzQ5uAzZJD8FNP",
  "key9": "3G5tJ6TXUUyvPN7akFoPUt5YiJHhttkxtmrg4eMquQ1a73Wg2DLYHJ3xb54AyEQpxi8ViUs4muxMAYnxTSk4ZtCh",
  "key10": "29LutU4h6Vs2XTXTdgXoboSZGDj1ZtWK8xoppB4i1HSdKNtLfvGiLBiSuXoZTvYwtiFX4ompakNGko6zTJJwxd4f",
  "key11": "59Lq4jdzSqHYukvnPiWP4xny7PnjBjMPxGGB1Fdpw9FiPZBT3857GaHxZPZkCamgPCgEdSnj4cuFkwXdEi2MW8me",
  "key12": "3r3R6Vfvuj7UecTR7eTu6johwmBMDa8iuKWAwVrDE1JN5zjEWHCdFoddS6UFzk9ygE21LTt7W5x5ToFgR4ypZpV4",
  "key13": "sw2b8rJa6hJECjc2auFDbtthHnyswc6a8RTBEB4DTzUycdQKxFSA9g5eXpoBoAwAPQ8suds1mdEmideyxcfh3ZH",
  "key14": "5d1AKkARUy4RF9fRZy5HMFYTAszWMpZjGUoEQmU3U1V7y2hKfbTFtN7tiY7TAhhDjRZQcB4yxnuWfJ49awY7wR5Q",
  "key15": "4PLy181frXb4vXELh7WJGeq2q2KhjjzLFFLTk6npS4nwm3hHPMfoUTKFJkzvejxn6ifaZxd7YnaL6j1bQxGBgQi",
  "key16": "5NP2F9X7NXTR3aQDmT2gxeBCR6beqK7zQbMtE7ybsEKPn5tujC9CvC2rkGY5YVRDcR1FBbpxBd2xS4jrkv9AGsWj",
  "key17": "5EomJ9kZNta5F2PdSMVrjcT6BB8LTWjzcwzoCTjo7WtR8VStGnmhjSaFSoWR6mGcMvofgmJ2YJtoyK3UR5VkCEYJ",
  "key18": "55oRBAnMDuMBt1HczCk2tqqBxc8jgeXDdvYXpNXH9g3cg4DehzsTbTV5DHhLeaHmoFu9fXMawnj3sFY36iR6i2yr",
  "key19": "3so4vRM6QiNZ2uLN8bAyDwx1ocBTn3gKx68Zjoto1n7L6BoydtWttNF7vmkdvcJbgWgQD2nQ8WuZEa7yLLy5RZLS",
  "key20": "5tcRzPDSSZBRmVWqeUCxbvdzxf1UVUtyC8KXsRj669duZYmJxhinwMuQxtnzJpqejTFg36G8yKXXTEC9958pVTvX",
  "key21": "3HC8Ztbw4CXTxftAWMsDQvjm52GGNFKhBfHAo8eFKrM4McUiPX1C2eaFVWqCktUFtxWqE8UD8q1XG9c6g9fLpyDk",
  "key22": "2UrdBekmZtiT2FxfbhTGVGRmLsLqpnPGycmT7Vo2BKCtvM5rknNU65Fiw3717ZEx9UdRaQzRcZWKMXEtitVBSgLL",
  "key23": "5un6DEhXVu3Adc1KfDctNDZSptPJsKf3czY5kAKqvAiuNFgWR7dakhKC5xfxiKAS1SaemGu1AvKDxraXV3DzHVhd",
  "key24": "4QWQEJApqtbNbg7vCJh46To6ayGafX43YEd1DtYEJ6XdyNpJeLxFqNVGfG7wjwNCdujVUBiXj1SFRi9Ew74SVEqU",
  "key25": "VNpfNoUtapSVWsCom5F9r7ALW2nZ56LMvaQG4hzy5tnNtTarTNZiA8XCt8RFgtM5BZuAxevFw78PAVfN5G7eGxX",
  "key26": "3SGVKRXsSfEMzYBhHKuLVbKL2FKiCBaQC3xXEKtDy1jxNX7m7HRZzN41Mv72n7nRw8BJhBdFicsgMPFwpRtqiTzF",
  "key27": "cuEKjaNrgbTNk9kwG69qwPQnq26J749YiLCmi3fq6ubJQdtAaQJbovNaqdzxrtioumAz9oWykCQ6LEfba6g3Tgj"
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
