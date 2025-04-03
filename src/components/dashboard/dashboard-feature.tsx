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
    "RAeQkccQ9uDzNfXC5nBsd7YfgBybG7ma2bRb3JRotxDEUFR9thcXTsNJayWGjCKc6kDrejwAvjiqFgyGjgMs1x5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AmkMWoRWL2Qna9kjtoeUfybgKzi9gwPosYi6cx1vw9LnziyuaffboGhbm9yipftLJ9MC7Na9Z9MthnqA6Bvoi2f",
  "key1": "5WHWz1R3zdzpuEWmuZuYwdc65iHvGA1v7Xc71QtaNEYUQXaA1kdVXGcr1WsQeWsrUrrMYc4xXKX37cDsouxeCxyX",
  "key2": "4kQ14RcoCaq67EKmgDUMB4XkfbwrcHzCBLHsVu7cXpNT4ZQToBbmG6rEMwDTJxrHTjPVbL6omms3rgnhYfm44jXs",
  "key3": "4q4wMipbkNqzn3Mr89Rsuj9xhWUpdYz7ujb8bX2NttC3b1BXYtSefAmhSPVkw8oVRDcurUqB3RqhD6Cpi4u5UgUT",
  "key4": "2KEh51f83mLgCpfmeRLVd7R45v1ciFKgkERRV2oT1ej6msefr1JgJgJBbx3ea8uKsrhDn8uTuK3Z2F89Rseg8zTQ",
  "key5": "5TnMJfgf95toUN7DukNVsVxQxFdzww8FdEuxUnPVV5TBngFZ77xKJj8DxhE8jH5g8jv4TzX6Rux3tAyhiQXDXNKH",
  "key6": "FpJAXcbJmnA31S8YPf3n2fi29TGiuFyf3Ng7kHyMLJm8SPN8hE3Y4PjLfe5LcvkTegpDQnQiu4h5fTAntUCiV6c",
  "key7": "2UZVhEwHFbZW7Shkr1B1z23P5dTEsCCFjTGgdzC9desTBucieqjG5nz6zjqURH5mV4QPdAPb8MyYf1kZaZWcHqtz",
  "key8": "58kMDe4KvFC2Lrqv9ZZYaLXLLMonWEKKgy5zbytG6t4MfqLecsgbBTmW7wsivJm6ArzNNjJpWZAq97MVf3stGmDY",
  "key9": "3m38tFa2j4xXmzdh52gbqjQTtUNm2zaJrWMx6KkyEDhY9UUzyBwp3LcNvLP1YLwob5sR3SnLKiB1ZNHMz54R7EE3",
  "key10": "4eeE5VcwhmvnrVCkicnCPRRuY6jonHJxQzFGHkAmqKfXCdLaYp5e9rXrCyRo5uiqyDJYtwxgVzwPxAnE7PAbRsrv",
  "key11": "3FboPjwV4SJUN7L7iFp4WfFMaPmRipdXPa8i6isTxR81NaH7f6yVHTbW6puyYoJUck1fLxec43ZnU21xgXaNbiro",
  "key12": "Nv7Zuu8aquzVfmXudeFgXFU8KHdgkprSXHCcdDXrQRxtjU6iiS2XpsLFca5dgqY1pPEuFPiyfWA5bLTdohNSQg5",
  "key13": "433yAtqxrbicrCoJxC4QivzNAtFa14pNVRLByU32qLnxhzXBkRF9XHREVjNedRZUEtJoQ7yeottoe8osBReHnfmq",
  "key14": "FPKc7BEpJh5QjRA2nowPHreXosQxo8t8jEU9xr8xuAUYE3MSyEyRVEvx9T4qX6KyYkrvG4WzhocPCtEMV8Vu1NN",
  "key15": "5fgfWLXG8urTwgAy2U9aK22toBofEGZzJ1TdtUot1ahRYppTRErLAdZnunBN7NaMiSCzdCoWvFnJpCcoZY4iXhNh",
  "key16": "3RtAidTp1ouyu9RbiNedYLe8ijJ8A2UqAsRBbE59XyqXF95CLK4uoZSUtAUapDqgkmEETBWWPq67haCPZhMBQ9uB",
  "key17": "2FKsr7tVVnNDecczT1GnpjMEqNWwbBFyETGwPwZvpgjpsdxzab1q1TTev1PhVpKG6Pq7pLU8YPXn7Hq7HfdtS4W6",
  "key18": "2ubpAGeJzvcNfEoruRsqCXGVRS21AaJyzXJMebJxPpEQjMrggvBuuwEff3NKHVEhLVEHLqVaZ7pCYBUC69xccFXu",
  "key19": "5n9ueD1sbqNiTF2UB5cAiredhZRJpNPe7zTp45fV1eWhjnZ58SzpoeHU8w8f1kCaAY3bKEei3JDCFxMgqbLvySFv",
  "key20": "5DynJEpAEv53YpKvru9obx8FHDfS8JnUJstAJA5iK4P6gZ2RfXCWavounBvatwDfJUe4RJxvwBYRbSARzMb43AJ2",
  "key21": "4dxNaVjafwb8modf9TufdLsVBYzUNDzrXEA4bWB6nJcrbtidPQ5vTEQeWKK2Yen3ZXnU6zTCD71Hoq9RsVggh7tp",
  "key22": "3zFiUxxPBEgoAj4RhRjBkPb4hcZRTDKSGsVNWezoZ5rKnWdvDnJKuSLkpnqxRz4DRF853Rtj2k5yo63Zo9jhR1dh",
  "key23": "2fvDCHHmduqf2YAfpMAhZZAg9jxb5nrNjk3Qnh31yos7gqbuwXq99BD4FdWH8SdP2GUg1T4tF52tW2T4EM2Ub8hN",
  "key24": "2p52QtLoW1aqhfJFkhmECbMVfVw9JJjkfSk1vBciu1E7rf37e9pALP1mdZ6Aq2JXM4PxZjebmzr4zo7Z77ssGn3M"
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
