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
    "41SdVZi86ZfNku2P52AyGXE18Sugo4Vdg43n54oUHfHf4oZj4Z9PR2ZjqewAvMBfkYFg8X7FDU3vnBwSCzoCczNz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LbUnwWSXZdrihcu8F5a6qpGqMrevmUjfeBEEQcNGqNjiBxYAqxhbc3i3W5VpLkrD4SuwcHY8wAUFQiNzzyKF8U",
  "key1": "vnJhg832vWQWJmwYT3jqEdEA9K9ToLuNmpmtDDUSxMa3U6j5Hkwi3Nheufh4wPyCMoV9EMd13aSsMyTjzqAbXAJ",
  "key2": "4KHwpVZL4SEX48pNvtw6pBE7XVp6SXLJ17itMfS9NXhUpye6ve89vUs1Rv9foyucggRREP6HX5FLtVcCYDwTvLvf",
  "key3": "4zwCGS7C6tfVv3bNuJzxeLza2UuWWXgeepwso1QxhmUqbwT8odKUu1T77qczXdetqqhnAfdmqEZwZm8KNjAp2dZ2",
  "key4": "2xkZVziFi9ixYA3bn2npcj14xRQ294nVT924Uam7qW8Aio8Rmm48mEhYRGw11s688gpYdsQZ1DW2gNGRSF2ennk",
  "key5": "4azGvM53gYf7YH4LR2bqjJkNcJ6gSZRyqA916kMNoCdDR1c4NBSgXD8PSVkaAmCEsgg4gcGR1rDczcH8XhKyKrNk",
  "key6": "66oEs4Lw8Zm2qgSxb4BUkLfGTQPfemTtYq1FEJiX6gmpYRmwN6pnuQVh73Q3BVysEKRBhqn2n6EyGbifhZ9FiJ4c",
  "key7": "5zw9nk3mFZWDXdHPgZeSn2VNeLaoDq52qNtGEATgLpfeUdkqonw6bSyodzMEjdntzbUqguNNHarpqbZuyAj1WfdH",
  "key8": "BUU9joBz3aH36WbTm6YrU4WYvGrJxZx5NTPKuHpEa2AyZX7fkkXyC9TEjMgwtXEZPRAdFwxr1u28VNmdL9aCQ6w",
  "key9": "5iq3z2reiHdkHTtA95BdmzuXCjuF6zumMYZsu94EeuQD9eNYwWaQngb5qz2bPMeUC8XXZo2romc3JzyXnL6AbqAe",
  "key10": "4Xuc1ggQ1UMAn4Ehs166CXmZpjchef7VdTMk6VXn6A9jcn9UhXGJnMhz4DA9D5RPqc67dmBE8f4ucDmqAqfZmoqT",
  "key11": "3QmNb6V8Vm2j2J5ffLvXYnPLhYYsDTZ5QATfka8MTToi6eGBbdySBCqaW7GCzwS7ULRD18rLniXqtYSrVudWweXV",
  "key12": "491qC8EasLGMSPpdzH4SjHSoESFNPy2EEM5WrVPyFuDivDREs2jtuZiqYaEZiU46k8ardMBN1gaAWZAE3HQb8xat",
  "key13": "4BGzhhLJ9kSwjg6AmTvDiijZbXXUH328Xsjrnip3EjAkUrnivoSwdnZzQyDT7yPBYju2kdKgGXWTs2VdkozL6sc2",
  "key14": "YToiqFWZxjKJLmq7Tz7joXGyUEKfDNkcCKaRzwhersDkEz1jqaKsZXwdCZQoRa9BUJ93B73zCCZncLFUSbehnJ4",
  "key15": "3pAr2PFU77xd6UJiLPhcFSWaPUP8L5hDjJH3Df2cqcw4q477EVy37iZAiFthgj9phEqSumaZC3mt9UonvCxfnCPs",
  "key16": "6eLkNNKKKmxPfdKsqLNcohmAR5MU7Z4Kd7q5UwNJeRhmVC3qMqknhg6rHhtExvYknGMR4oJf7Ld8rrErtEBdKX4",
  "key17": "RJZM9xZYnTUtqoMdk49TpjWvsUA1aVXKsSWMr4FwL7NCNpmpEYPKsGfUbyWhLDgcuNn1tfXgvveikNCcpixUdSG",
  "key18": "3yaNDE1PVTcLeNhjpicm6DtabtYop7q3HHXXfNmSYyvzoKqqmXcsLZaFBctRHkzKgDfCqX7ztwHgjEgvw4szE4DY",
  "key19": "dbATg1eCjtHgHTRKMsaYCwqrmTA9hPWt8PyjGg7VMqVBW3dTQW7De5Uy9TciMLt25bVLoa47J3DLh9UigWtEb8e",
  "key20": "3EnEnm23hXiPAVX8NbBpCvtHzJmLWd6HoWpZPPKpH2nunUbfbWqhRFBtMQq5zxrkBbfnCezK37vzcAxPdqtoVe63",
  "key21": "64r1XFBDRxeqZu2hnnCw6jHEhChPFeK6mSY1J9kAbCMGxRXan9D29h2iuMuRvidVDrciAeGQP1zq8G85jWMXsX8V",
  "key22": "5YStEgF9f39bt1DkcSeYQsDQ23Rn29gUSV4RxJr9XkMw8TfMXDaKVjec11KcouAiSg2qPLBcT4Aj28PeWNhJzZaY",
  "key23": "5XcEkmxjNEoufJwyMBznL11F9MfEDcnv8NG4b4Nfp1KkcDVA99kfScKFRRFgYKTkuH32Sn4XfjvFGs5TtorSWvg8",
  "key24": "2FURGYJdDbGfLYopPGGjCUa5zbjdTbh8grmVTmQ32quoCHiU3nA3GGNy9BjUVxhWMUieA7FRLCgqb43on3mEfbHm",
  "key25": "5noUScSxLEA5KaBQ166Zvek3395rrWVAo9JicwVRKqHFDSUBD2oF2tpYzVFkGpN5mKtMKMEtanaDoXvHBp2HAL2m",
  "key26": "4FmFb1L99Y8fz1s9dvtX3kwq9LDQqqg2XyisaxBKmC8TuWYqqTPp73RLRMN9fzHfJxqmRLsaTNB3WvpT7DfcURq6",
  "key27": "5cNC4eYeSRDGRdAyEdrBAcsKdeJ18CkoATrV5AWGtYMULhNBXJBkdytk3AB9diVvNkJZNLQHEMFkDR9N9X5urGXa",
  "key28": "4PZ4vqWi8nNgoQHCzWaqyJXa9Zs5r1rvCmBuf4FtwoJUmJjERZKGQvBfEErjX7WzzVZEMFHjos4rp5YraQChunDd",
  "key29": "3p5vqsWMep67ERFmFTG4ZHSgShK88daaieTmv62hE7Pic6g9Le8TDNvuv9qJN18vZ1BhTkRPXjUNFzVHGXBFJtEu",
  "key30": "2uigiEKo2rdx1xs9dpwXF94nieqkvZH2JtTSDsaSQK7KqCtxqbQGHpAzZyMAkzse9Lc6USCJP4SQyR5MWMRzAgPX",
  "key31": "3eh3qdFhkuUMsHe6Dx3ghhBnZ1k9m7nibspY1XJqwuu7wZYsMg9iSczScPFB7XZTCtGEfqm7wKeCMF5ihZMUbWrZ",
  "key32": "5aJs8Mw1kgGBK45BezioCa82ZkLZyxSJdmgPZCag5B1PBq4qeuquc7XQjqRqNRVwonQaXDe5yns92Z88p4gwsxhh"
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
