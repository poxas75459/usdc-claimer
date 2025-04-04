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
    "24f6WNXXNr9qBjC2MGiL4WHCGVacKeVG2pDYwfi4dB3NNDUcxGSPvujqHmiVz7NbbKqCsNXKQmArFKmUe2neUV3b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nH4oWXRKZEnmJEAMdkqB44CKMozA9ZuHE6LY6cNCFbt7X1hzHaiiL5snXyu6aJMUySX4TTgHVHg87TuNFJsqnM4",
  "key1": "5CXVTtThbphPWe7sm1Nu3bsE3KJunMTZUBqrJptv7y8o6Eye3GSWj5VPUKWyFFNZJJczG4NadiXXY59tEAYnHX7e",
  "key2": "7qfmYFvd6oS74anmiAV4gPVGcF3CghcaZAiAzeAmpNjrFDQv5uQxCuwgKbdBZWiWbM1amfSgyETHGC7Mz5SS1jz",
  "key3": "4MvDroUaMpCEjLcWvTL9AvgEQA8ByNeHieALKniM5Ax1HaESsqeAifTyCBeV837irpGYWwqGVpShiKeX5Dy82fsS",
  "key4": "3angpdC33N7xDrLoHdpLyhxKJbtvwuWsZkKpw2RMoj237SDxF267RCMtNNkzejp4KJmRzUv36Kvu3WjhDTwDBnkL",
  "key5": "xKsrnuwkGLP5FQYmE8JSCjSRysASQhswUo3spuhuta4429VDZn48sMwf1KSHwZ1JSiQCE4MHMgjgpC8cX3QCaGS",
  "key6": "4rb2zrwHfvRvPr8riuqgcLmXV63C2GxXzmzjKkb8bHpmJHYEnkG2LG2gzfPwZT227uG1VKFraR48fx8ffZaZoQuV",
  "key7": "594cAqq4VGruycejjenSgdEwkyD1WmWeSXdLob3vSx2VdL2JknonCA8QGXiWHc5JQzxU3rq7nk8n1n9hbQXoz32w",
  "key8": "5KWGs5AJkaAp8mk8pw6ZZywfoimJj7Z38XJEMr5BshRfMZZb866jSzErxHi6YVKtG9ZKrhucmBgpbAttuVwsgeam",
  "key9": "39QhAEPuZaKQCoq6sooXorAtzWatwHc8qczfF8vTHUceVfwE9JRHciNaWGCQtYSr61XMm1amYtQ5j36RDFLiwvDh",
  "key10": "58B8P3WP2bW9AxeTDXuGWThbczKJqqALyarRzh8DFwS5MccmnPggbLhYMcbfK8g6bUPtJFS9KvA6ApafVLkae2Tj",
  "key11": "3EESwdL6PGvbGynbeT44VtNpif4PdsDaCjoujpmTwEXDwCB2cosenGB1qD6UpDFovxm6MHivvY4i5VLb8tzKX3qa",
  "key12": "5mxcq4Yxs9uod5CsvmodMuAtDMHpFdfroNiN6r1tPUCPmGMpgumuMjcN4CUanStrEuCJZ1EupCaj2MXXkVq5Nmid",
  "key13": "4tyWSR8XVfh7TWJPGnAyruYTGzL1DmHv5CGaYzSoMbgmtQQZEfTBak3TTZgYCWxJXkLpB8wB1L3UG6BkRaQpWFhY",
  "key14": "7mFTbDDEQ22XfuXSv2HtrVp5oBrRDcB5qYzcDdQGMFnM6u56w7qtTy5sjKtETvvD3Ds95KFP3Tg5qYZ8gWrbX85",
  "key15": "21ZMPeDfPDD73aP7x6VAvtNQAe4x17d116CaBajTQhH7Z31e9UpWbyvd57LytXC3RwLwc43Seyz3z493JtX719a6",
  "key16": "2zqjCaaqax9beZzz4NxU84gtFS2YnpyvLZoR5NdcviEVHxr6THdu7Q6yMA8qostEJwwzzq8FkSgkx8nGLgSQGiZj",
  "key17": "4iEoVsV1ENcK3SBXyj52worRkmZ8wDegrH1mVoSfaL4BLnu1tcmSJPr4qN7GUCAfKB8CMSKFczxzUXnM4JEBuFUL",
  "key18": "3FzX65ABCs4swPotqd4zSsZxp7vdxjHZpLUUfKtGLQpeKcAzMyavpi5yDaVmnKSyeHy8NvKm5QGSd81MPA37whp4",
  "key19": "cnoNv6paGrKF1vw5idNBCykzzKHojB6p5Y8dA8njgk3HWPxhfUiiH2LdrjyJ2uLo3DkyZxXKb5wyBACtouCbs8n",
  "key20": "aHZfE9kso6vjbo53f7oJ2J2jy6VP5sRaANZsECGe5nvwWUvUTXjihjGBc7ibspo4TRT2UfqZ9jZbQ7mVZsEw4cd",
  "key21": "3YeHZYJmaoT7FUAjDHUStX44NREXBjx4RGzazjnUp8r2h5fT68X8vTrgAtL16aybde9RSrysDxT64agjAbELfGvg",
  "key22": "2cSXPy84rXvNKtVFHo5TwJXwUEiszanaAtNeioEdtf8xfZvyr4s3WCtwfjG2v4J1yLBPVZq1zCkFRSgu3fAubCDE",
  "key23": "3AHqvXTE8LNZfrTGmpS5FHyPnjR35q59Ls8yNvegijFbRKXoskiP4gTD5dvutD8dBq2JRKyJUhWVrYfwUYaFDUPC",
  "key24": "5dHFzjLk6zNk5f9JJekHovDnNbJ7jGnWGs7Zi6vC7BQ9JjzWTqD778wdgPig5GmR1NMf4QnzWZJwXKbDpc338Xve"
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
