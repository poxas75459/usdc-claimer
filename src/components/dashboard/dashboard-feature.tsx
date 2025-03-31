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
    "3gY7TrjC5Bf4ZfyznXpKTuZ7yrcQrXLbrBXBCnuXfySHgEHFeHoZY6G7riou749PASsoLq8M2TSv9bGfvKnLtigt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44nhV2Azvgw6UZQjQbWgGsXhKTPuzStHEwyNkhNALTx2bacTvVei9MatwbyJGszs6sB6YRkXDwLSw2am7ewmwa3F",
  "key1": "4rcEWjqmneiEMcpHmSF6YBS1Y7Z4bc8QSKEGoxN72cdaimYtb1xr57gN9ygCim8t6bBvk11LgEFy46ivX5EdqGNc",
  "key2": "4ym9qN4qSA9EjA6x4nEnxXkde9beQPHqGW69DDZtzYRbQKn1QNQ2b9U54S5HMZT6fLjCuhAqcA6LofT5uAMgfRkC",
  "key3": "2RyJFsymLAQB8v41M1wK62TbdAbDukzUjKeHMQEuUR2Qeb6HaM81NGDGYV3Uqu9JwRiAu6tYfLUWGoaf6kb9CyYP",
  "key4": "ApNfqrScQyCXbV1wAuUPFGhR6xsGNc1PjeAGRi4zWVmq9uSvdM7t2mVYj2GSkAnYwqG84ScXR5gaB1RneCv6vRs",
  "key5": "b3EmiAWHH8Zs6eDqtYUoGmNGoB2eiWiDLiVt39JX7Tm4NmsFMxT6e1FBHk7aEnTUZ6mCdZhizHC2XBsG7w55mVL",
  "key6": "5mRieL9CKRiaKvNkyPDrY6bkXPBLhzK3XaDXbJjNPzDnmXxszqqh9xaDkKgyA1V1DLjSzkLdfTpaVKutC5Wwyy1Y",
  "key7": "5ttRKQbCbWM33vEnRrhEtfbTxxGTQ8W5GibSdCj978XNypMbeEbE86Bdn7SLHK8XtGDPymKE5XYKkK3NuQtzx1qQ",
  "key8": "5RQby73c6qPAS2G2yGccgHLBGjq9aEwVKCPhBNNaDHAuBcoU8YcRkFy75HrUPuUaxoc1UsAMfoKGbuMyD3Q7NdGR",
  "key9": "4teHch8FWzjpXG1tcwdG3tgVkX87M5N1micY3RmQFzrG4mwe7tWzKLHdVFcz9kVNWxykw1qxRnjVsFwDHopKkQk3",
  "key10": "5U6TM6183NHABK4m6xQs4QfmpE6JMbxZLcGoFGkXpSqE33JFfjTCiPbUJ6DuqgQ4939FD3HH6aMwX8xtEZUB5jzJ",
  "key11": "5wM4f1SegnnH64FcG5WLEm1ehfZtzFRwqnGq8CkWTrTRnrzN297ckgSmorLB9oPwaKqqG5tkJzq1nMcotJUiavKx",
  "key12": "4GpgLuwecJRcw936wiHYJ55MhAxio6NEQF6vfJ4dxyDZW3o6mUEquQPF2kuMXXBg7UuGGLdQug5vmLRnrtNzNntH",
  "key13": "eQTrzYuyCGrbWJHJHy3SDnXCaxftBUsVDHNZD5VWacKv8728rB1U5Wjpwz5rd7osd7BQbT1BkuAZsV2hur5HQst",
  "key14": "2anfszGpK5xhXsQDARjWCtUGuWF52mREAfwxYNkisP5HNYqB6m5QADQu1sjMcW9W9ezpGRRUDffxaT5z8qFdc39T",
  "key15": "2dXbXWES1Ae5hWhfvxBxcHDeW8pwQgCLswa3VyCchjqJJK2j9diQ8249fmaZKfkQAxMMm1T9MR84XH1pLgmF3JtR",
  "key16": "3sGJz8S3S3c74JRMc69SPA3RfGCXeZBPMiFuJYzta1pGStzsXG8XwYJ2LNuryJH7C3BCRnizGyURZQEsT5xycU6f",
  "key17": "DWaKKcfRQmPpVEHR3Pir3iVW9VyqGCzyiHpnWUnEQLLm9b3zJWrcZB8SA44KbxzRohs32tWpZam9LSGvFosbpF2",
  "key18": "c9TUMDMXJR5L3sJceYEhgJfR1Tdc6yEzUHnyDVyog28WYrYquu4xamCWeHS1d3PGPqm6nYMFQdfbEHCLoW6oGpR",
  "key19": "2kHFVYQg84d7RLehHBe9nbyMRbojuyHZyhn8tyytoMFvEuMBvqARVCtVJASVdPYMm4YZW6fkCcfp21eay4H7bRTB",
  "key20": "4rDCii2BW3YYQM43bGxm412Qy6n8WDk67EqioJ8Fd2jdNpMJW7u688JtvXVudjjWCY2A5TbDqFcEqYJ2HTekWZGt",
  "key21": "2cVby37ZcxnvfknZpj1uZMRXtM3woRyHx7u5woB5nwkLsBQEeyqPXSMwQDTqUCMF5Yb93DUbvAjExdwyUU99M1bm",
  "key22": "g5UeLcV3Gjtzt5qfNoacetMFxaqAMNN24pzaRgAdpS16J6VjvThdALU92YRG1aG4dVZ67m8XpUchrJdxLAYMsKb",
  "key23": "663okher34MkhU4GAyszg7ZsX6m4vu7JAiAEBxFVgTwJ9Me5gfioU2M8MFQ6XPUEURTK6KoeqroD12DzrHusHRQP",
  "key24": "4BUgsvbLANg2ivqCabk6miZPNWL9ymAE9cb6NFo4ZfCLHwweMRuiQsvLJDZk4fxyYFFNNGi2piEq8LuwSZh1skHg",
  "key25": "yAzSH4btf4bpKsabLMC6roQHWyvCCbmpLf1N1esxnKP64AWhitEuogCfo2HPWGAN9nEonJL2M8JttpTcFDsot6s",
  "key26": "EfyBcofKvV4B5YZYCCo8dL73zNbKhe8nJcULgN1o3SPZU2cWDdBj9rvAd5wD5JTrXKqCjQizzq8stPiHmLLxQ6r",
  "key27": "5h4zX7EHiWRNVMXx1HLkmifEjDrCJ3dEmWixF8Ui8WKkqfheD78xbfH2h8LdX5rfm2mLWbPRmxES2iiEZhseY63a"
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
