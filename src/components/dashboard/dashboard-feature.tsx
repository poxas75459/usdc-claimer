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
    "5HD8xN6TH2n8xqWUWQuJgTiQcfkrUcemsYYc7aMHMy5wWbg8jsMnUZw9UDDJS1EbnRfM2VcsqJtMt4xHsP4hbW2Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65n6QQC25ftEyi3hSUPGpPUQPnpPWc7b5DTJbMxEJR2pL3LzUzvVJvquBeCoznS7VmABobm3ZU2CVQppyrhrF94U",
  "key1": "dJBaeXnfVk4ZwUYxccsYvkaf5GQ7yRKekxANKehDas6vxVh3e3cdKDXSyxEKQX8DARvL1MAJ2r7xAe9VhxfLQ69",
  "key2": "5NrCAsisesBgsKRDY49LUrcXrmZhBujL1gzuFwASAgwKJFiPNXaudMLrSwY4375fQSbsX49MH2akjJggogL82GU5",
  "key3": "2U2orVcBg3sXvd7CxjR8263ab2k7cir4o7U3iZnHK4z8vySVcaUNVPtDHtjHnigqhS51hRDfgqqoK5BJ4NVAXtSs",
  "key4": "8agPAUtncgJ33c8tNKkCBbjAjYoA6bJibPuciuxwM4f7vZDZRCiSJoCwNLkW36dcSdwBN5SQCVy4bT83gM7vwT8",
  "key5": "2TE7qhkBZuXxwgXk3cS3GxqpHYowRpFyLVBMoeDQY89sMZo8QGFywVnyw6zsKvb8Ajg8tihaeT2imsRxLQD19ChV",
  "key6": "3yBvBrhdtX4bmnBEXEjiAEBr4EtwEonzZCxDGBv2zJvwjN2ECHyhMJ3YUb8oe3meLs9AgJyATR33rjQRm5QhUiMn",
  "key7": "36XdsBhk4J5uX6rpk5YZFZaKcK8DxqGSFDDHDczC9ztaKVndrzhNgCyyrYw3jhXHKWxprSGt3BUWQj2BKVxYXsrR",
  "key8": "47kyMQbruJ5a2voqdTP3HZLvb7BwNT1iPge7KGvy7CGhhRU8oAH8GPc6eAMACagoiBjDr3apdurT35F29Uby6VGn",
  "key9": "5JAXveLWoNMELBr7noM3aWwgVPRRAtYKLom618J7WSdEheqGf5VYg24CcEJaHWaWNstJNpjQRjf2mcLkMXzDsdwF",
  "key10": "5PPiu8MtWNYGruX1RcQUhibkTwtmDqtWPzmEiRrwCGtsMC1TkYuw8gK7JTCygAtAofCH9fkCRDeGYFDjgPqeGRJX",
  "key11": "58hbsSYcmStr9AikxaAVESf1pKdMxp2TuEzZTt1mj3YrVPNfTmmjMcHtq85PVeQbmZCzyG9kAutZnfAnHfxpNPaN",
  "key12": "CXMJs6fdm9tDnybndbeKCePPNzKxZHccdGQtQhzsL3Ss4NgRLfhfuaxtsog8SeJ7T3KApY4YjVfmJxeS6jTsm4Z",
  "key13": "5PkrDjwQ2pf6HY2cMALZ5Abus8obCZgYK45u9ByHhNV9dAJZyqfuQhJFk1v9AvJC6LQptuMtFzFqWgmymjv1Xwye",
  "key14": "4sswAxnFJsNhj8CFHaBY6FRhYr2UrT5iprJKXQT46TdeXXvG49dFPq1nSuAe5LaSWZx2CSGHQ6C4ce6SujMVF5UZ",
  "key15": "44pGCuiSBMVSFQijJaCMPXnikGbPh48bkoLJNVQMciXixcJedvEdDQp1P2vpv3zD5DyNAX88eNwdSebzeiMy9Y8y",
  "key16": "43iUGMaNeGqW5WgnHKrC6dNouDDG4UMzxdfBR5Se8ZJ4a3bjjTcPXN6YLofoo3rSvgCjr6Lwf1LRtNkjy5FUQ1BB",
  "key17": "3hwUZMpjMmoySq2sKcJiRphrFpS7vsZeDE4fPFvTLUytcGK9fUwLr3ujV9A7fr44TjPHB6cq5VmLtQzu8ar4zAPm",
  "key18": "2u7GCt9QGGvbhXeMS6SCB8VToNJkVtqZhPonKbHzk4KCR8YSnR4mXd3taQZaXrTTQP5HDiW8ruEKTPfNMbQsZjsE",
  "key19": "3t7H2bXeFrPbJGQgFK7iYCScLs6E5SNnGEayGG13aSBYtQxQWrJsJ1LsKEW8AniVis1tY4MoKPuF6SWTpNGccWFR",
  "key20": "2h9xYWH36ZVaH7P5mJZbNugKJfGEXq5koB9nbaXpSd7QVRyGsvS1WuPGBDSvUKgenqRqqBm5ArFfiM7MfeuXDnCx",
  "key21": "2NbPoBGvY7np8VKsAVD3CRErAFVBxRkcszWG6b8fBvwpUPb3VdrmNJbFpwEwWVVuUE11K77AF5BDzcdHNuXc52RQ",
  "key22": "3TLTKVp75yi6c68NfoutLVVU1eutPKufRBgtLajL4mFdocZQd9JeGG2mwRLvCARh1Ydv9Pgn3dUiJuv2VkKh7abt",
  "key23": "4tLvHXe5NcJqJUHXfEbMaZpo7LiguQquSyycNzBgpkuq9mvB2ThACnHjQ5mMmH5D8AWDJUUA7te1LUDfDd5d49ed",
  "key24": "5gSEyS4LsXvcspB7vfDJAZddqaS166Go7xyZyRTFmQYXZ9xKuAjaTcjdDSoUtk2tnWPKzK5KYMANcX7ekRRq4uUQ",
  "key25": "iYx1qbZcSeZKjUkmutB7r79d8H7ok7NjEV2nHbpQGMmVEg1J3kePEufrnd4i8QnQPUx2T7FkKBVigJ3FVuMrrBV",
  "key26": "5kquroEPVGF43Pn1GL85MSdaNxrdreWFJdbBHNemmFeqnPjRBwLaCFUEvqnC6nLgGTcjSdNFqA7Bdns5D52tk4BK",
  "key27": "2QHcsvoXaZGrNBfhYqhTF4orFz1Qt5v9w83FvUec1mtQfyJW7PRQsKnLw9cnWiM7BfDUUdHcc4Q6xHXGtbCY16yG"
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
