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
    "QJnAmg4zDS9LXN4bP5rnU9u31P1UeQP2rGMGyi3y8dPi3AvXSKNMAW2EFqaSsdzu4b87VRnFLCfdxgmfUCgxFZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mPQBh9XeMbFotjb9WMptAgbNd4CuBdoRtWTc2HLXBojqUSGVYiGM4gmhaAUyjipM8drqWwDSU7Mny82pqNTrcgS",
  "key1": "5NsLkKNUawPHfuDX9nqGDucBJGtockHH3kyKDZSwbUkgHp1PY5wY62andbFR9JQHYxFvCN262CDJEbomoxYFLYDU",
  "key2": "2trwvXyAwBpzUe1KVy3MbaHQ7ZvzDeAccLJSbFWV73NRnfmEgDX757u1kJb7EcP68m83Ubjfnt4iqD4JBCv97atN",
  "key3": "dUbJ2oGZRFNEJhtzKXkqyyPnyQEnMMRMBXSseLR6he6zoxS6dqtVvQ2oWTm7F4juMQGsLX8FtVU3ucvWKaHsmTd",
  "key4": "2LQZEshyTK6He2DMf2CRdY7bQ7C3b9mWWhDLFqSWKy5rSnAiBJPVHg7fBga56vcS62btLajeBWczb9Zaed9ePK9n",
  "key5": "45piiPb3aVpRdSMwq2vpz1DVm9W7EN3tfnqn6Z6VFzPa84bKdbXKT5kJLy96393Pghh5yor53JBPKxEdvQe3E94N",
  "key6": "3vLk1gzGSriLMgJ49kV2mm6u5znYji5sv9zpr2q1KobqsDkaVg5h6VKBKeFcXVKuVxabAvCH6QGgwKsNoRtnRG6H",
  "key7": "WQ8Me3pAD7juH78BHzYdkrP6t2j2aD4z9RDkzT6UxzbwTP9f8MxmXJs1YCuEDrrueDng5xaiERwvxU7b2dSgfPd",
  "key8": "oTk7LjiuCRNQPUpDhjEVwW5kjm3wWVAKEp2aYRpNqDLDKcU1qVyWCqVbX8uPG5zXPRaGWsawCv6RbJMwdX5Ge7i",
  "key9": "37sUpDPe9wdCJwoZVpwZux9BAHcCbezAkM6SKzc25689yBtqvruwoXMS7gpgAUppwzG8RadjAE2fgaEu47iiUaWN",
  "key10": "4ANMZ4Lv26nw876PgbVgQzWHB95fvxWsb1nrCC5eoYM7De3koVBKfZrgjgUJaPBpWL8UxgvPPD68vkJqjkSKvHRu",
  "key11": "4NVJbMKS9t6QcEZGiPWayYjscnJwArKB7msyjf4pyZ5itfXuKhgdemn64wTtvc4ehBoMPWxGFNSgGmLiX4mHSY8n",
  "key12": "2GWP8oWhxfJrDQue1LPFw2UjLfT3h2BeFWXsz7fZqMwbvWKth4utFkPtm614VhDFKyauAG2FSHNBT6vDuML5qinf",
  "key13": "37pmcm6GgDoKvxnSXDcq4j3LeTE6zZmCEDcVPabScgJtrLKwS6CiujzY8wWh1vfwKPqeH6hBcvvsMuZCfhTA4Dg",
  "key14": "kA6RzBzjUHu3fhkkDUsSyymxqoD3QotbZKP3kBu5eZeqzLsdKnzd6UwsheUpdAtodHVbUSsube4J8o4fvCJoKVV",
  "key15": "4SE3TzRot3Yn83jXCgXLNzfVKD43f9kndHusY34JKeg4Be761secWTacTH1EwCtwEX4LmhBhpuWdpLmANHWz7VTn",
  "key16": "4g4RDwhdaAxqRo3VRZX7YRwK6vSjBbXaYZsenjMhPHjjpKh8TPnBxrKeH6p1BimuaU2sv9NTX7gDeBRL1cC8wg8o",
  "key17": "4ehQuxZrkAnDfbUwnRdHr6B4Ddp46FGhrXtpPWpkdK2BxydkJFAY9qcLxzVhsUb46BA2732dnLLFLuJiT5hwwXrR",
  "key18": "4VEv2cGkZjEV6gtuvohV5gq5MZeAaGtEtKKnwTns7c1FVjEomm5FaVW43QzkM3JtNYNK9F4PBJvpNRdPbmWnpYtr",
  "key19": "4zWwDYrSybJ5fPvxuRQnctfcgYkFdS7xHVERTVezsi5yf1vRD17LpMTfS4acytpUUDbxuFgmzwu5uDxCpJcSZdka",
  "key20": "4F62G4HVW9ZCV6K8WAyuTobMnqatR329VtgMAXn4Yv3sYiFMQLPa91qQHcqv4xqNP5VbGPw7tLyjvrZKa8z74dSf",
  "key21": "3wjKGAngRkdg8RLEeoydKwZzTb57A6EmmusCzojrk4MtzmbTFScoMHoNsSFbW9UDaLKJhvaKp7GDX5m8ALdZKgCu",
  "key22": "575vnfCVHuUzQVW5KmAP1J5nDWLzH78cysjiHRRWHeHdo4edKaT3r7874GwAMD5EQAZTMxQ1juZyjvkZbzUPbi7V",
  "key23": "3yzHy7HFHsZcouvrHHUtyNY1jgEx6VuiyVEAPsGqqkknqWs54WP4MGtN3TRjJc2VeZU2sVVGKvFfc1wCC3U5SwEF",
  "key24": "4fuztKrh1WqRMsDemauMo9SGtAJRjL5WVvMZSsV4FxVDW7MNiuzgJtr4F3hFwLUKFPRh5SEpuVAX75NJ8Nmsf1Xr",
  "key25": "aMTHUW2i9qEwrq36WMhyEkmPJvkkE4XrbCDCiTyAPHSi8QCfcHohozxu1rwMJ2R766uDYArD5fAbV6y4hixqGM9",
  "key26": "5414NUoRjdZwBukpLrxJjo1tqVh2CJ4BRiZXs86iAxFcqQDgbqEpZ6tQH9ynhwBYYExqQ84aXDDaFqxYbtKznwjm",
  "key27": "KAcovE1vbnH1yc6V3CEddnAFG3V85KroAWPKfktSjfGDVKqPMwRGkxZbyRoGNtTVtqDyw2BRYurB11VkUMTQcgM",
  "key28": "51mNYbXLb8ABGgsS8hRQ986xvZGkDLqynLkdrPhdLFRFXDNKNWuczDfJdhPCwe4qKxB4LKdnuK1gH4NffuNyvLn2",
  "key29": "38SvGPmzsF7T9JoNyr4Qa1DJXeC3kAASxyszUisL6RhEzinYaAHAuEpnxQneCqLQVfG2C7zLKnYcHppZjBoXxymT",
  "key30": "3aFQW3ho7pvVdbRfBU3oPgfHLXzGDgGCDE4UvdzWFTcEvr97d11YrwqxQhBiJBF7jd6t5GK5zQ2TfnadrW19qguZ",
  "key31": "FPTcz2HZSfrd9kqvTEbAN5VpehCi4Kow9SxxwbjePTMpGkxmwNLaJKZN3NsMDhUjBKaFpTCzpbcxNgasF3KtE5P",
  "key32": "4yXoJ1vn5ELgoxt5r6oPmAsUmdvT4PexQbPyRMLMZ9mQAmKopgPuiZ1wyqoasb2mAx8gDxbutHsRtEguvmENtDV6",
  "key33": "5PvxLrbuzLDxSCENUoADQrn1UKg7y4cWwznXwzsqwoAy4YRPvXwwWCBjpKTe9QevTQ926C2NerPEmJfayAA7YfQf",
  "key34": "2WWJ72S9qsndTC3tvSwTqobcTebLNvSw8SdNxG97c4e8w2mCZAjyHvQzhMCcp8TAZWqg7BquiYSPTSbuPxtDDmmj",
  "key35": "2E4fodR1GCZVxFJVtQ5atiJkX4TSvVK9rcyCUnsn7cJPfSVhGRTjRmLKPkEai2AEqgXeHBoSguaGcWkNtm3Z7uJk",
  "key36": "3BzP6ZY6o1DGhgugqC1NCGjyxanjbZAqDVyA4vtHCud3gyBcscCHL9dPYQYPAiN2EP8SvJpi8BGrVNxdY2FVSLFb",
  "key37": "kH3RT4E9Q4Ga8TE69gvYaoXTCxXz4M1WPXpV5qsRjz7fW8PShydLrMNx5LfDotCSgJVF2hEKy7nQbFpzvCA3jWq",
  "key38": "2jHMiBdQZdRUVewHH1eTHSLwZ6wqiPgXAcQdPq1PPF2pnxd1dWZTbycdeqHEn9B3ic8eoWcXS9bsjdDDcpSr2kAu",
  "key39": "3akttPM8W3SNKRCDkr4vUeV9fk5iqqdnRNSf377SnQD4pX26JMDpnRaeHH5XU8ktZrFEdg1Mzardish4wr5TNEtH",
  "key40": "5r2a1uRsSGcgfe3qCQNH1vL4K16WDebcsdZd1M7upaeHo4edfQt5b1idGoisEN9AcDpyDsDeJ8n9bYkjNYrPZkTq",
  "key41": "5uMjyeKiD9wr56dTUh1v9pEbNVNbSvoPVQVq3d2THhd1PXUyBrxNfABhE9ESvBbn3AMCiCUsckdfS18ZnV2faqVw"
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
