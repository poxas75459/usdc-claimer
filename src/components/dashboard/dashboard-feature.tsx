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
    "5BSt5AVh4gpgfrQt4xhrMQDX5HYu2q7mue1NrqCnyeVHxdtc5bodFwqUYdWeQt6xbN2vUe279hoYBzsKdWUbdXXw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KV6yy7PQTdabR8p2h6rRSiAZhwAy9icggyVw8Jj6C4XeiDcHzooHbMwyuoUxV3JhrrXLc78sPrsz94pXHHuBnte",
  "key1": "FgfoYDrvxYnhTBKSynQ4qP29xwG84T6yKLJueSicj2qjn5tZiBBcWewXByPWk2ZELNshfNmCpU2BnqgG61PHpkj",
  "key2": "5RNMDkSr1yEvAw6JPLpcYGxQuJLYQDGcNo3S86uAFFDKkcSMvwrbE3JWKeCxshmcVcmEufXSSX7eA9NU5J1fDkat",
  "key3": "64mnBgkVH1YHY7t9VQZrDN1Z2vGWkFzSbSxbtsDbevmMGLT5wQnnRVzgaRGioGNZRGaZU2MMoK4wLMCjNL6E7GL1",
  "key4": "rwJcD8G5xgY3KqnEcfKs2nvfXNo8bDiVMh5Wi98PV3HMAJiCVv6uDh3xtTvQ5BneXtLPLw89uFU5C99C7gWqc1B",
  "key5": "55TKF9xrR8kzbvRp6WBMmCCKUYvypFxHus6t6ABsc2snhQuN8etMr9DYg6MBmjSeFhCGAsSNFaudocH31PnRuf8s",
  "key6": "3NdMcXDqbTBNcwJnYDFUXvLsSRx9YqA4xsqwAsG3xEH73m5FsjZkijrXhtAKzbk7ebSjEvdKWDvcjDhwEEvkUNpK",
  "key7": "FZyeDbbHmZscVCjKEEqdvoL9TJPw2gScXmYnejXGfacBkzGambVLr4uBsob664vVm7Nf4zFZTu2wakNPGUAQBQd",
  "key8": "2Pkxcc5puqMDYAX8s6u4A4TsLoVTLNZVFMFAGD7TR86BxBvLD4x1Ch2bFM5rCsBfE9ScVDEDd3eviqkTKLYjAMmE",
  "key9": "V69tJaN5b6iLB9S3WYP3WeJceu9yA1Sz9eyT8foADqM4bEDScij8Pe4dxJpJUiBwS3d9Wazr9cPuovJyw3HKWeG",
  "key10": "2wF6KRF6y4W4UWHSQ89PFA9n6pFwBLYdrzTDJd124xJvcttP2fu3ZhHvDeyqDX57hDUdqssNABWkHHpXH4HLnzMz",
  "key11": "qLY3rGMc5qYMHHeTxU6TZqDXUBjrZD3UiUw6jH57QtyiR5RYPonVxoLuDVXrbHrygtdwgHetN4zzAXB867QWqor",
  "key12": "BTwAxASFLzMjrXG3W3z25eeaTswrs7wwCkhYsFBJRNY25Xg3pboTkM82EWNiXyATYa5hoGsGsVbR6H66GZY14yc",
  "key13": "42ZPuYBTP9Xm3L76b6Wv4N8V5jAykrENRV8tGedXLvXYcuutTE9hqqyotvYy7jR4NCgNF24ukfurjaDfsaqhr9MJ",
  "key14": "5Jn4ERedcBGG3T4b5phnDSc7FyWE9htZsgEeunaQiibjdpbC26C31SHAZnPvVYYHaFLusvaBSrK6rdGEnwHwDTx7",
  "key15": "4vxikWRF742mTkUBYKE5fL4yiXY7Zrd6XTRDDj4wmz37C34gTrL4k2JCbXgaTJafgGMKK3CDmncbfdAZSWwg5rke",
  "key16": "sVdGVrqWAeu2a7MHDTLNnzECiTCZ2rL8BsjPJ7F9Nw4WgEUAVYqDzvtucvDqe5ugPabwHgsZaNwhXJ7TEtBVLdq",
  "key17": "3WjvHgdG8RGbrjqroXUSK7zn8pd4PFUwqk95xo22pUZrF2rjfurZnkhjJAHsTHkx8uw2b3A5CwCDAV4jj15U45JS",
  "key18": "5biwg87cMDeyu91VgMdT6bDCNDUbuSjREoUesXED3suhXiyScw4rg9fduezgNm2cvmFu1iPZCE3F2TXJ3r6mgGk5",
  "key19": "31Jv8w3rZd23UthhrTsXnXcppzUNBzPNnGqu1BcHdPe4VM5kgPmZsXY88Re5B5tz4PSPaiiGA7cFKLHDubY9vEed",
  "key20": "4ucrYbDMSbNe7Rw67fst81wiZRUhvkjuSXGNXDB3C4j7xFiswEqAvPvccZtot3rcCgVwDEMz7n2swnLaUNNjbanC",
  "key21": "4icHaUcxaBLEYrwVfaoF8JBNDw7xS8gAnGUUTWPYMg4ut7qLFZxcWgqBUEDX6DVqe63zCpdYLURJESfxWf4czvHw",
  "key22": "3szjNtMBPehirFsVtZ3o3dYF9FDZQ1dHY4sXcgwJpJnLcsmMEjVha2LTiqs1p7JXUbNEWV8i2tKsmg8oDKbHVsxu",
  "key23": "4Wp7xH7WUjV72hqx7XKB2WcqEVLqzt2k51nG2J1MeyJddjsRiEDvLwKSBiwv4D3JEwrq1hDqVkyiYSAfta3Yacdn",
  "key24": "5wnrc6xMt8LYNF584aG6SAdCgdRJiHD4odaw6rxLHEdZ5qzHDYQAoPhmcaggTNEgaw9f8FDvT6NAFfGDFKh5SUc6",
  "key25": "4MGQyF74BHyxF9kizxADaxbcrKR8Ge3nnMg1ZVbFzDFBMDhgTq6p1gckfJG7g9o8FGbi5fAtKfYJVj4oftxQHSUm",
  "key26": "4xpotVU9EbhZLaZb1GZEL5wTgWH2Jn6S5Xb1C3umH3fbFZCyNkjTANcPiDDrFQaX1JP1zAQuLx3vJPnu5UGKQpxx"
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
