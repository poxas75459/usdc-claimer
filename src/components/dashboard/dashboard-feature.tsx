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
    "4xyMQQbeVYwXiPNNHyx54e663F82qRjBuqAWF5dJYo5SS9X72BsHr4eLUxh43TpjJ6SorPC7NCXDqnSHPMo5hkeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Ho36nSbGoKccv4xdaH2EwQJfvGQmuUPm88Go5HQDa1L8jRyVuJpwyNwNQwVRjy4dKnDXeLHLVAkpuCXyjsE6stF",
  "key1": "44PVMev5a4LHuSN96pcMcmiSFRxymeqSF3BQD6aXH7rKf3VwaD9bq5b3k2Wg8ia7Nu1q9jhhfaQRiXjLz4T6SG1i",
  "key2": "66wuxgaxWncznTSRa216N5urVYhmioeRWVVu731Cph3MgzRADNXDpDoJxX8ekBxni5z6ftBw3dBDpDuUNaNKW491",
  "key3": "41eBaQxN2LeKu5JRgnt6iBEaaaEwyhsjAtLR6RtBUnChdU47UNGJvLg1DFt6ndUk7hN88BRqvkEFSQfFSmA2GktZ",
  "key4": "24htHnXSyEod6qFb1ZkNKP1JifTKhkSP4fLiZRTmNhc9nAR1YziCRbXxG4RQ5PLs8NxRFHsN6yjSnrL5yVvDmWD4",
  "key5": "4yJWdctju4tBS1pgDy4iMLCyVLMcQxtyoHYWYFdJjpqiknPvZvLnBdRSqok2T4m2Nh2fpyeHKE4KAiWhjBkx8f4V",
  "key6": "4WRYErhddP6t7BdKhS28h6LfPDpNiqeD5SK1XxmU4racdnyQ1su3KMba4WAtkt2gGixgicpijRsKDTF6oqzBefFK",
  "key7": "4tsMrZroc7PG2tGJmYmxygf9k7sh6dZDRDrtFtNBUuY7UnuXohTKXk5ha3597fyZ9JaoiBk8bJVXjMFL4VPiFH5Q",
  "key8": "Sscpzyyi3DYLFzaK14yrEEgHMteBuwnc4qtYWVXhstFYKovB3jETn1jG5unrneAoKc3wz7SbJ9UAHgjMJLR2Fra",
  "key9": "3ZQ9XcPoczt9cDsYpNthwJeBayTuxV6Z4Tp6nLgRz1aE8TPPrVcWWQ4dZVM4Hk23WXaevUA8V75j1mCiKRLKLB3E",
  "key10": "2WEXKKh2qXEYRYeHnTX6MXSemF1qzboBxk7stYLcaXy8nocW1gbMUSbQacMbDrsXwhbiF2HtWiEeT2DdqtGpwagz",
  "key11": "23WWsNAXXqcpz5BYzbUB9Jou6othR2pPzExNMKqN7CLDQddD1PVhMuQLR85yruhYoKMP7PHmJHCrHP1Uxb4Ff5Jh",
  "key12": "4sCwCRksgz5yDmYFUmspzNbWrAy8yyaPwGWRXQ51vrVqhz4xoEtYF8YxKsHFctU7peoEsfWLsip1nwGNSDAjTQQo",
  "key13": "3xhDh8wZnN6U6pKFT1mVu9e9Yajj7KkMCxBQCVmbgSfKh4kmwxBYLZDSPV1swKEJcccWGiogw5VDA2o1KDyxR99h",
  "key14": "2xXA7TWXeGh7YMCZ44B528wqu48Vw71bq3wvspV9V1FDdWFAtW2yp9qzcRf4pjR6zVNtVP38Kt8bRSB1YaTGQZct",
  "key15": "Zv9ofcjPKxucZcLeSskGpFa9iDSCuHaqs7eQGSWfxiusGHWfyC8CiSAQPo7DRrEugEHVMfq9U6Ua3asrkuCQVrk",
  "key16": "2oR69CPyMFKG8H4wiNL2umRrZMA7fy1JYBe9veSEwMYZvDPPCkqN1nnav4acHnAheMeThTSyNcf8pmYij6dQAVDy",
  "key17": "3abDyS8YdqFDwsRygiqR8TyBmVsu5XnnKmDJ1MemJLh3za8vB2NmBLqxLqZtJkZFtmuPR5fYD24d4Wk8uZLHpHPd",
  "key18": "4mJFvh2RkAmTPoJTAHr64SWV3zfZNyWSy6nqkqG3H3jNvjJXdWUobKcmV65EuEYknNqxoCYTx8B35x2V6nk8aJ5t",
  "key19": "4aLmYVKw1Qt5R8Rrcqed4f4E7FFMBrWo7FemkntVXYMWGvhkCyWUMcgNidztVYtqfkdAD5cMbimPBKvhJbiCuvBA",
  "key20": "LC8n3Kog4YVw1RBPXvjRdYmHMGGcihp5gRcycewmXUZ8312DQUqBrhMVYAj2GMg9UQtVmGkyTv15avQnwJ6HNhe",
  "key21": "5qjwa5mniGVjksB2Avu6LQyqubuUb8mDzrCSKVKUb3VYg68rCPe9ubvQjSfSjgRNr6ThD5bCoQUMmvDCmsYfdqkU",
  "key22": "4UrHhLWCuPWJATuhvhmmJNqsr5XxTDGo59HTdbqF3NvwxTnUCPzY42xRAVaGf4efAe4a3yEGsSMm1j2mBW9SpUxd",
  "key23": "47c2Uv9mE5Eh9pB7eGspj3dovj5TNniSnNwgqKnwVSwCModcTWrTJ22hwSn5k8XdTvAvrLVYMA7v1g4a2CD8UNf",
  "key24": "5o692mkkxdGeiwAhize5Rk3KVajNL93TF8WyrbRs9mxLwmSKhpKCsdVcgD7z4kae29iJEUZpbzDSkhCoGToHdJgZ",
  "key25": "4HzUA4d42P48UPcU3rYQ1qsfvwebMFqLkoyV8NQKEPkn6XhAnxAMeUwTwpFYBSgNPFX37vm3xhnCWrdPkMJ2f5hp",
  "key26": "4wkoDV1ugrHi1zDw6xL47WYQibNAtjAsc8cC87DH5L8sMC7FLbvei1QfAy8YL6wP3vknGVkLABngMtGziair77iW",
  "key27": "4TwGRWGawQ3Yhn4zw8rqauHEjqQ1xUGmkKHxWQCkvnoWJyykEjd1CB8WgCA8PD6DTHSovEBKGSaoL1iagBL8UGnq",
  "key28": "596pRVvYex9Kg9mtyuroQNuyfLEZhtfHbvKJDaDqkUBoVJDdAWX1BG4UG6cBTVo2tMQhN8vX1U4L328Tn6ekxqhP",
  "key29": "4y5M5CrRm89d5pRbBPimHRmTmmMMtoNeiYc9r3egQQ5mnNUtUqTB3736XvpZHGfeRvgp57cYgo8R4J4mGiNt5rEY",
  "key30": "5GEZb49tUKETipepuY9FLXJmCQ1Qhq2z2ht1vpKza63CFnyRKT7hYMBmrjanMm9nzrVhiQ1TQDSc8fvm7KaJkGFv",
  "key31": "5ZaaahFHioVXe1XR8GFEGKvESDUX9mzVKWoAJjVKnsBTDnLBgtzFFXhEH71guxiLASf1MwpWey7iNFJaYCL1m5yj",
  "key32": "2gAq8TydqrN6aTVRTgcXJRUoA83fq8pC25UN98URLNSmUwxx4ZZEf2HpCMW7KYdPhaNBpzEoPxEqhrSLtM4xKSvd"
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
