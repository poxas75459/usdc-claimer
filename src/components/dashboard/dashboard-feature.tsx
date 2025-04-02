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
    "41SWHGKC48SiSkBGjcD9i5ZCmgd5iiftJ6NuC4TPF1LgXQvUtqCCAyu2rwEhkLfinhB7J8n47RtAecc6iLbqpkhA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uEhxndG4tD1dcZWG4DF7Ethrun5E2dDk5tZzJrq2zpkm5n9cnqjk9cTbpm1VqCdfdMWNorirj7rgjUKsrzsYArp",
  "key1": "2K9PjDoyf8MYP6a7PbvMUxWBNntBCaQWHBSCdUqQo5estbu99VyzmfDWQqtKVHTg7k49NRYhNhxAM111onTt1qfq",
  "key2": "5jGusReRJ59K4zMJv5oHmGs7NxJp1eeXJx6ArCSyxbY4S1YRWoDpZoHU4NsroxXM7B9U9hJBqnn7WPS9nRsDDR5n",
  "key3": "2skkz5mc19BNVqaQPXqq75CcfFKt7tCBFPyGAGhpaoKoRFrK2qXXy8zKAunbcq6MzuKAg5B16MGSLPfeBanbf8VE",
  "key4": "4m6sf66fHyBArXXsW5pT7BdfRfxnLGxjenY6cYvh9vZx9WKLZTkN9D36KkwQaakxXRfpJXDJrjzmvdSxx988C85i",
  "key5": "4ETY17a8M1jfGShrnzdwqbdHyJK4b8GVzfS6RtoqsBqaxVjt4foW3Qjyhy4pfN4qg7xrRMmCcZQr58ZtuhXpw2Ww",
  "key6": "4cLTMxKwDSzBdtjWRfYLefy9iFBW2x677c5QMCAh2gGzR8EtzJGo4jZ2dWH7fD118VDfjmqQSuzHYcvNVDRNmpTd",
  "key7": "43ie2zVTvRqDWvAN28PXvjgCj7RdHn2Fvjdz1Jvj6LAzyvDJ8b9pNzvPf2TUSDhfREH86QRfp7Qe8wq5CzmZEeJh",
  "key8": "4dDdDnY942wXhrNgdJ9xggEsi2TfzBbp6y5jnT1rXRpPdvA3DcvWFMnC4MiMh1BGxY1j8dUJ44TAhdbMNMYmW86E",
  "key9": "5hESVXptLW9EscvRPHNjuTdwRGjGppFMVQ1WUg8CdwA4GRUbF9qbPYanNQW287Swk4AoMf6iXP9wEByL2sB46gPV",
  "key10": "5w4ueRRYaKqdCX8x2zsdcWZ2rGXoudJG4H3Fd5rH6rGs9ecvsbJcchC7LUkRzGgD3dBuZDafeK2WKc8oaRYCjbAd",
  "key11": "4UYjdtq8JFHUSUr1fZd7NmVWsbeTp8kBb3T9oghDhNZKkJ4rz6ye8eue8e465AcWhDMvPdWJbVfLBtL3tiZM5y81",
  "key12": "EDWbJ3eXPokknL91WhJCsY4jQRyRPECTWo9Gi8isYDd51Fi7SwniffucbN2qVPYjiHY6nmD3iNKKYZA9DMw7nxD",
  "key13": "38pzo5ey8spPSF3pVdJ1iYjP2PXTKoQ4RtVVVxhF2robXbQVuVM6NrCMzgWArLEusGLV1btmXSspa9GRbicmcrPj",
  "key14": "aNDJ3UUr6dnD6oV2QGMi37xp2hR41vRUBaWRFPSdU4PRFyLrjq8Df2wmigbnac7R3f2aG3PaFjhaGHy6fhoG8Et",
  "key15": "3CvsSGWJARUfjgt3bd8xbZV9CBwKF892ECPN3P7VLGxq7wG8JuCtTECogB6rc1Yvs5fG39f7j7wJcEktPK9fa1Ja",
  "key16": "bwjUSv1E86hWXAikEiTeqBC7kV9E7DridmWG3A9C3d9ZkRP3BGDJuhJDspMKZNx7iruXYtPsLEoDVk7WVgpWKg7",
  "key17": "2dKWyycVdQuzdNZnRz4NXWr9ni8KEn9HxeMT3CNPBeWuzHuwxb9SNSiQQtHbqPP1Kk56dgnCYVfpYBht75A2u7Wq",
  "key18": "CwBfLisqVZnkDiJMECNbLJW4wTkTrCmVcHsFLUu13kfRhPnvzZbbKuM2TNFWJK9dZQNWTTstxHhFUJkwBxFqpFX",
  "key19": "3jaaN9qdpyW3R4FDgiFeT1VYyyKDH63VHQHSVDtKjvMRfqNXrbfDP3QNq6V68ta52gC4Nr8fADnYGF1Rg1pJPjnv",
  "key20": "54tj3Xuccb9iTLQ7WMFcedtvXstpbResR3jbJ7C33HVLUENfkMBsdGr3mzhqAAF1x7VAqMZ4f1FExeaULx9Scy7e",
  "key21": "4QBCU9Fsm6g4fi66VnkQ5XM9eDDbpZTzq9xnfmC4vpUgVCrn1PGmVNGSyKyyY7wqSLsA6Y2nSdJo9DRLvMVc9qLL",
  "key22": "2DpvaDAnsSHv2cWitjTiUAbYqK8ScbonrRYVuUxGZdCMjUrkZ1PcKV1vHbVMtduRrU8Pu47b1Tf2zYDwiUtYPQVF",
  "key23": "2PzotA7CWpqB4vcjPnntqSzxccNhbWvPmUggs3CwQzteDLcuBs73QqfqWRKoHXbTH3spsKzuyGCZhu4QhXDYE7hp",
  "key24": "24DKPqGDi1hboxLVsb6A6QH4ew29nMsBw8rZWowZDXfXJUDgP6ScLkPmCSx7FfP6CPsyfVWSHemTJz894cWVN6hv",
  "key25": "FAqdKPYaWVVMfV19vxZ2WnfXs8BKomtK8txmySKWccrTEhgeZjc1v4p6Kwwt5A5SSAhM9TSAjs1rWYTJn9MVRai"
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
