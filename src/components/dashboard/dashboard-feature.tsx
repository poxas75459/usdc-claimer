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
    "2QcaP629KhETp5VyvPPWMkkWwhDKpfmSQXerTq5FVAkBc5m9qK9epp4YhdCu7pUTgoKxfJkBcQzoz46ttbVQs9Ai"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3B7jdQeHNbNRzXw1SwktxcSc3Wb5mxHoogMVQJygCjixX93FTxqZeJAsZJeuBSbN9sntBrQ34ucVrCuuAsT597rD",
  "key1": "4pDyTt7TRr6TUr5YJJFPAGzV3BRc2G58qDWpWM7jjR8Mmi2Hu1mFwqVz4SEhYvZcRiNDfButQw3hCzskQiyAionD",
  "key2": "4vAXdRom6yrndgpivzvhkYbiUQsjafdbUM9axJ9a45PWeAEtBZStMRpacjNuNEmfVWaLPwN1fRYRg2GKUyzBqs1u",
  "key3": "4NvuRcr1nhVjzTXC1rZFhDxH8Xa656HSQpmouPhwgGrutYJ5VakPSgsfTBErreudHyxHc1saKuh8H3LTjC95QG8W",
  "key4": "3Cets2TZVTf5r79sdmDYEYy5TisPMJpAW4PWZkK7KXUoXzEQRib8BJGWfSjJhmQBP7fZv86TjCQRj4ZwGn1Z23WQ",
  "key5": "4GBg2pRcWUazDickqBnSDyC7fEpLH1JWFTQXog5yfZs79Esh5Q8cm9rpzAANSzaokEKjf7v1FWcn6Cjbaot5eXzs",
  "key6": "3b7RdT1Tcp6rG8JvviXsSMTbUx8cEDgTcnpZBy67q93NSPt9N8HTAcQja45PLq3JTg61LvEY1WvMzCDvQbyXFZ7q",
  "key7": "3Q7TGHEYSfy9vr4pArDX7kNyUh8jDpbssT32KcoF1icJewBX2PuhTcpF3ef7yZpg6vZxTw6aMoYnWbGNPSwAFLJ1",
  "key8": "2Ge56seNrB23CqBa8tzNoXFMiwpUYzZmcWoAkazwFHA2Y3weuwvaa7QmgEhQPR1kiGKtuJqAyW9J6UnpuyexjvLP",
  "key9": "4PvLHr2CucQNv3kPug4GhgDXyR2TEKzMSRhfZ8n41D8sPZTxWswjZNZh4R4oAVaJidfEiqJesaFbiAFdxDSjEvGr",
  "key10": "3DWwu9WCMetvPcWAGuRxtc1kMjAuWzV3kvH2Q2Z6yMHMc53rJDT8ihoi1NTMNNBf7sz9ugMJJcSjeJv1Ser9a2L9",
  "key11": "31HrMKDiX6q7mssrJYy2iCwT4RvANGP6pcxzjjCCtV1RCP5G6GaVhUdafXp4WBWbkCmMyESDPPaTff5kk4fXSzJb",
  "key12": "PGXra8NVE9jJ8E2oCszyr9bgyR4NiYdzDVH1cvusNCtYtwipdBuXdgndSxdHowLmuB1YHYRVxFLcHd6FFf1eqwo",
  "key13": "26Y81fwjLv1XCzDscjbrLuwtst5TeEKs3JkvyV4WDThG7tvgjLv6uDSc7SL16yyRJGm7idShTq7371Yi9EyxytkJ",
  "key14": "4GcbyzektpSkTjX6Ee6zfk24WGcA9c4pTTLTwwjTdC6CXRdYZ3LFNtQnogGT9Q1tnDwrCQiM4yHXft6iyeVo2oix",
  "key15": "nbuutLBYz8qZiG5U8VEPWhhUUKgg9z6SRkrL9j4Fqv4nMBgcZMCyaKR2osDTV57WP66hJUmgz2GVxcMSyxuhujN",
  "key16": "4d27TnjHsjLe4nKiGrCLNRLEWBvTfaqorzQ8sBtUoWiWxFRkXQ48Z6WswgQjosqEQKoYShS1daRzgZXnQPGxdy7M",
  "key17": "4dinfFkrTLDnjxhy8fAfV4oLExTmUQdw2Ls7ZvwNpaYnBcXaka379Z9ctteee4GAxrHXbmsmpe7HCY9Lw63FrnWP",
  "key18": "pDgya9DNcs66cW8whGNoAmeDAE5PivUGvcfTtoAXcKAaYfkDpGqcSgvVzgj2rKYwT64jiC3PYdaGfzNLwJvpGEN",
  "key19": "JYw9bTQesi4GnEyCowSzh8vnEuHrRTd7PopNRUzimUDggMRYw8H1bhHjFGzT5BMcUYmQpfZvbdq7xFxK4F6MfjW",
  "key20": "625AZFJL8fx6ejjypQmLJbtqoSTi9GxN7Q94WU5tLwv6sL2tmEmskBoC5cXUMGGN3RJ7LAmhVqNNVfPk5PXV3rtc",
  "key21": "RGNhLps9mxHNgDX5QNQMHf9PKUuEMuCreG9iCSGCsE1oJ6iL8UGvFF9jkxLasW5JKQ1uBiEPiF8nRbpb8UYuHk5",
  "key22": "59Zr3GPU6r3hDUdVHoiTBummqGTEYjPvY2hpFFrfgpYEwaaqfNLboFKWDPVnEGteea6T6H3HtEB4Xju6hXxBUum3",
  "key23": "4cg1fa6WPHo13MkbdbJDXegyh3RK8csxfMQi6iZbjrJd3kTnM3NLV2LeYZHjnw27Yp6WYXjACMRyFsWJFLkqWXzu",
  "key24": "2umKEbrkzHodcuD84a2yJ6dDCNg1rz3DjZ3YfEGtNZQAZJcLVtDeiL8qJVyGQtYE1nyxh5fK3ouK7Jc5PETswQS",
  "key25": "2nwH8Ez1a5HAqBnPPSWMvyBGFStrrhHUE1JV5D8pcK4qzftJwJMqMiBA7Rwa68BXwjSCKMSzpwwzgAz7LQhVSj7e",
  "key26": "3Bx9okAhjxtPUMTAeBEKDkHpSGVQKdy4D3aqmDwSaH6WCjYDAUQ7bPC5F6waMJdbqYbeDkjAZjbWT75EYTzRumZq",
  "key27": "3pNgYn3PxdX6ox6SuJXMMPAfZWUqiJnRbYnyQcYFViUyBt1er9haezzDyX94kvm3zF5KQi55B9FDKREM2gRHyNML",
  "key28": "5ofMxtYZCKw7fHUq4feREg1hrHveW9sJ4fSo6eGwxus9RgyBmeHPKjcsXYzf2hpbFWKjaGbYvhSAEDp8Juz9mCcH",
  "key29": "4GSrxMWngprRiznnRd6RuKdZtqZBjPqxwQvi6dCT4WP7t9YjJz298WgHJSxwLYG6chLj9UxofazVTY9hx7h7Gx5r",
  "key30": "3TiGP61sbCN6nHqHzhvZQcHFMvGiuVsdpiegGcL9pbcjNMfAgNk1DE7aF51d44NV3fhpWcGSHTtFKdxHNPBFbYpV",
  "key31": "2sBspEKetVZ8j82vJWtMM9XL8pYb7Ypck4LX3CjCzC3pi3pP7vYRuvvdv3fvPGVQJvQZAMnMtfc2Eq7mDvX7cJJ3"
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
