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
    "5bQoLocAjYy9rB42h4W1WXsQmeoyEebgANETZG3JE4zEAfXeQwf6JNcPZbfVoTFVoUAHpRLkc5wZ5aymoHh4SC7Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4W1evrj1BnnGGVCh2KssY859nAjWTr5N9xPaY6qfFUJ8YebDAFNfDjE3SNfRwBDAP17KiDqsmp7mjy1kZ3NpBwF9",
  "key1": "2zvrYCfwvxsz1tPVLBSAabLST7Cud33cs9udx3XMeLxDuEe1S6bHgiSHXymPXNQtVYEfMhJMwGUYg2hQ1NpUqkR",
  "key2": "31FvVLBAJe1P5TRuKJGjYb7W1NvfKhMFYzkPAiqnPnoraH6LP7Zmh4st4sjPazGsUSJQW2uF68TpXb39b19bER4b",
  "key3": "3xkGHZZxuGvHct36oSEuAAVvo2iWKpFG88KqDcGxfUWuHFAnc6Ey84c5mPwHNKCPzzpiHWKJU7PChHtk8BkYuhnP",
  "key4": "mBE9pHCtpTdKurYAnWRoM3Vu9HLSPZNpiUqN99T3rXQJLVGFc2wyhz8TsjCiE1Z2ds1ZtoiX2jo3WagoxC8HUrT",
  "key5": "5tHrYJijG4zeN1Nw3tHw9DWVjbCS5p8yVdhT6siFQNAcT6ypu1ykYAoGzRqdafjVt9jbCvyjzda9CdpcMnP9DBP2",
  "key6": "3ofq89S9NKDVi3VPK4tCjeBVHVNzTxf2BRHU4D8oXPDXSANiL5uziY5Fp6PwUD2HM8cFy2V24vQ9CAb5pv3cfGXW",
  "key7": "4ffZGxKcxp3kSpqZm3uVv7kpaLyvE4icVLX6YqcpfJ4ZEAgR2y7Aj2zPC8AwooyPV1so8rBSxYa2Y1sHF1eUhphi",
  "key8": "2oe8nmpEJukBSjCAd3kWVMWxubLtPAGNMXCfnDFoMgzvdj1k7pFDsiKWh2D1CiDpjA5rDHMF13aBVHB7sh2n3BQx",
  "key9": "4TGG1ufxrN138Dp9awuUN8Jhd6B9mPUVScDAujgvYginCRVCLkFMq8JyCuf8QnRfzVDFoHsXWDu7RfHY3yLCShH6",
  "key10": "zsu8zPMWLJGTWtjiJzPmSajPwgraf44FomEv5kny7vAbT9R8iMvzFhZi7mNKPm8tYXobU98c6TRGZ53jvbSnpnV",
  "key11": "5fQvpWU8FTysMXnhGD37xdZ9KqEBXvhe7LiFZrw8yVXvDZsLWukmNT2dPvbTF1mMKwkPtnKLTv8n9rwQ8yscRij2",
  "key12": "5G9KkUhBe5s8wjFWyNqMRStf38f5yW9CZZLzFDyGYDbdsjV9kq7VDRTiwX4ad9UXkq4gVb3odoT4Q5hFSSG7inH6",
  "key13": "5Huio7esTQE6e8YVum1SXkNY711YTqMzzDt8NARirM759EBWXnuyHCkuzQ2FYt2N4YH6m5Vbxw5pbGi3cKvxRX9z",
  "key14": "2BATYc9ATywbUt94pyG35PanrXWb251gaj8ceoU9Cuuut7y5csCsZ91rLLBBmkVWecsi8XV1FKddLQQpy9g4zNLg",
  "key15": "29ajNyr8zZw7hUkpamsoaszHH2CEAMEEDgK9n49vzjhymsxnhTwFeGUipd9bNCLr5ZB4WeAduSsGA9yB5xg4jiRe",
  "key16": "4hC7kcuj6jGjmS7c3NqwjYXr4u2fbGw5NdFsYkC6duyDf9sx9qh2dtwp19JE1EwQ4W1mfDnYMy8FGZHKw3uWUgqk",
  "key17": "5oy1gJrkMuSJizWWTRA6wJTvjADWH2mZC5GBd1LYWGL6XVwGE8j5R9XcCk8zTM4KuViSY2eRdTdtMpVKMaxXKfAt",
  "key18": "uCUaW7v4oTn3SCS293s935tyJ6xjCaoGMm8wmaQHZGvxFtE7aWGYvk7drWcGAL2ovVNhJRDea5af9BvmHGx6DTu",
  "key19": "PRDSxfLYLM5qxc1YNuS2q3GMN91gmbraqujGKpQkDDsJFdngKfduXx4Eh2XL3rUxSTRT9DzZZyzyEczEtNESQCd",
  "key20": "2ctCfjLJv2VHbRHDfnfz2WYpoeGXEED8vvYTuSokNkDyr4eR4XwK9vwLdhWjdextHEJk4pEomFD7z97BwktULUTc",
  "key21": "3eYbuT8QkVGziq929pozUCQgczoBfo4qxrAUmNATESR2bcC2kiVD5unStWM3uK2cmGMXuV9YT88EySSEG58VMyqZ",
  "key22": "u1xRV1st9qStCxTwregvQTMpQmfBL6MnSEWEvjr7vy6P1d9o4oGoQRtDUmYAM6Dt3S5MKPDsyZLNfqhtgXsiyXh",
  "key23": "WFhFzn4Tdoq5Tzj4wxpthfcVoWEmZASYWKjR5f5hY9o7XZ1qFtMvJLJgkMix2x7kJoXSz1riMxuSJ9CrGBh77Cq",
  "key24": "4rrJXFTq5gWKEmamBdoyeuwdfRRC3dopRNpmMSbHrAWiW377N7y9PhKjXe4EXp92usJuytBfNr47pMSdZDHUmnt6"
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
