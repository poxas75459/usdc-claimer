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
    "4MK36Uo2tGGAnxiEPyXBS3C5bWahgpqqcoo8JE34wsPeCsdcLPo2EqkWnzZyjeVFqNbd6hdUZvQrZgez52xYZQSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dadQXwPYCBhchaLAoyGawn3NA1MYGq3DcH7ma4Vjx62Bsi6jtt8uqwGRgqzYJcYGhiimU1fDZLk2tNJojVYHTEV",
  "key1": "3jYYasRvx3DGpN3uLxrQL4F3wwg9U2C6dnQKykZJFr8YAd6x8tWKxwrytyBYxfywhsXsEpkMuDUomPirewBAPhW5",
  "key2": "3oywQ9dChc3gegh14NJAT3DNhDZKgwwQLkPNAfJFDyQyrmvZxCm2gigJQ6PheqvKZ2XPG1uftnzR58GrKg3fvbCf",
  "key3": "4c8UhxKVsBYRvH1GHVdxderb33Qyxnu81Shyan6vjaB7hGWzcm4fmwj8RKRxhbQy2dhCUF4b6Tk4WzmhwsuBFW5K",
  "key4": "3BSjSDKuYPr3M7yTBWc2EmszHG2kc1FzwSzYHiHRaij9TuLdLThNfsoRg69hqgFWrGLjRjCXHVsVSHVm2P9TjwJM",
  "key5": "3hVMt9jXddZSTKdNDXAwZDLY21iZSDydWpgadpgtFrz8sRkWPJPurNSPWpDUCi6UKnMBHQ6nSJ4NLxVGE6H52r9W",
  "key6": "3ivVf7S8P6oE618oumjpWPVAaecG4tVyfD69fdMDDtfBxG8daVvFfxGcXf7F3Dg2CsvcHMZ2kwbRfkLBiwzaxeeD",
  "key7": "4nqRg4F2Qy59B7Driwx1NA3HrVYEe4ksQ6dMVSMgzvQpSCsJNAyBwsiJZ8CePwAyMptWx4ivtwMfBBxovrfh7cZ5",
  "key8": "3QKhJuMEiju8kcqSwMQi2X68gzixTMvu1egThhN13pf9JdGqHjeqHgWDrgVDrKmKrWFGjU8Su5Lrv9WMQs6XLrhg",
  "key9": "b66qMZHHdQf8Uam4sVPSqjqmktbczTMQo1p5PEDpt8AvSQJ672hhQ5eZWjgis4WgZJKsmGeLaKiL25uMku98zk6",
  "key10": "qVn8H8FjygRVWDTjqZ3xgHT9tfyqWFYbKESANoCTVcV1P1cRZ4G5fq9joG2Mu8vLMu8YaYtCzaP4H8dkZ7uV2BF",
  "key11": "5g6JvUAyDrz6YeYGuGMdLKLhtRfWLSKDQGLucVhhnu3gfpr8o6EAn5k6aLxFmGUEPiwUdCjkHfsARjF8nw8pYHgh",
  "key12": "pwmehFoSND4GpZJr7u9iTXpk8AYnaWP1qjNb7g33xqKxcg5D6sRNt5fLr5zjDSe9gJWpRpDLseZx8Wh3T69rQ2h",
  "key13": "vhn8RiqgMWZqdSoc3BWBHy6fa8PUqGah9BwK6ZbJ4tKcpmcdoyuZJBbhfuzH27eWAkEcEC9SA1o9LR9Ygy5pbTr",
  "key14": "35h6fYugdS3WhTidTYvAfW5sbiRi5pTRDG6MvbMTjkMAVVSeSWo4sNoihUBp1WPFzjhWa2pTj4iQYfyd2tqHjZGh",
  "key15": "3eC9h3j7CdFmJBJT9pYtRzfigdFie2LjR6GVTb1JDhDLojwnsg6b2EsAbaDmB6MpFbpgeBZQwDdEu6JGjeCmRXSJ",
  "key16": "2EdHjV1qrGoet8m5E3HxZvnzfrLeP5F9NUeXfYHwx45G1HpL3zg3UXy9NRNF7qxdsjt7K9WyT17RSZFVY8XeETGM",
  "key17": "3NKYY8bi9VxgXmW6SYTRCTHkeuRv2VpGtF6kmN6G184eVJb595cfKArJXK5gLSTEtjkbCpsW3SKhbyaED5rkVoU8",
  "key18": "5ZdZWCUmqjPs4WjsiyfKoLZsvVNP8P7zKG92zEoT9qgqok6nNMfxYBoKRU9x7pC4EKgxhUGnF9Q9ysutUQ4yRrFG",
  "key19": "2eMoB3MXPqc71rypCUaEdiFikT7Gx7Fv1jLwf6rW4VnijQsxjuLio9ZLhFPWyBEosAsxPMhBLmFgeM8uRFcnWHC3",
  "key20": "4vLiqKFFxuxnM2qhxnf2Rki78rXbYgKLrbhQv132V1z4stBjvFusGUpn9nYNBFjSNt8DH6sC8Wi5mF1kCimNrDLQ",
  "key21": "jizCqUT69TWe82JdHFSHidXtDob5Y9ivxMLX2TXtV3TSvfdybrRDjkhWnc73cPs2CeUFVMQhYpp1N2TUaMAQvKe",
  "key22": "R9Y1BhUjW9mtRT5i1c5jQC36YQsFauqdNVaNi9vgurryD8hkZ7Bk4oxYiD5EAcZJQafvWdqak95k3fMoBLr26H8",
  "key23": "34dAQ8DG1LE8R1KBYyDYpThSqobr5aPwR4fRtwGkEp2eaqgmVespTkLuHMGKeScDLL6fauSZKtF9vQuQgGGTigVz",
  "key24": "3ovqp4K9kvr3qYh6iaTg65wjcQ6dQtVUhCbmyBAcxLqXm5pgrBCPCvK9qXtducPJF65zhCJRb7Utmj1zyfcziPQF",
  "key25": "KdF8PfHPt1gnbAqECon6gmzkoWXmz1Qcc1s7samwyT6mXxr54m7oTFmAjTy3aPcqRdHPPRy7xopdqpY1Lo8thL9",
  "key26": "5U94ivjQuYrYJKQSM8VVi35zptPi5VLrKj6PAFWwDta66PMEzRGhV21MALGxVGGFh7BkH6UpCzk2ZKbPJTkKVMTB",
  "key27": "49i1qEGTnSmEQmzdyhC4ZnqoAchnJLiQrCyz2C6U38JN8sSvLp5Hx9gvxoTCzsjCtXyU4f8H521Qbu5KXbjKcJG8",
  "key28": "2LrPbPnZ2CohxXoKAFobmWMiPkFppXJc6XGsnMrxohNq4aud38WupxAnHtJc8gAwqRUTKtNo4rsj3qnm9mZ5RmXv",
  "key29": "4sjQNHh7vfUHFvogdVrn3mQntPm4zzDpKszc8NzFvY7UcpB5pi5sy19q9PFCbC8ShV9DQfGvAhe5aivM4RFmir1H",
  "key30": "5Mr6sUzvvjAZxrTcjTv9Wjx8eLcpCeSbwj6mbYpFxQDqYM1QkovgjaJHCFGzRbd23YDdtxBZ4MT3npkEWeAQMyDx",
  "key31": "3opf1JtinffgMH2mtayteYaPXWszGbj59mPrgu46EW6euXoQokWhga4ggB8TLF2Wx36U7WKURYaufurhhfjRs4Fq",
  "key32": "21xmkhEemhRiDK3kFzs2ywz2KJc7Xnhfug7CPTEvJAqQpxfrDfujGDd5K5aucgG59Mu6514Cjf9Fu6ZiaSNdxCB8"
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
