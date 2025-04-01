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
    "2qreLNCWqfQt8FdWBTigPf6G3qABaU2ZwHV8VdmKhNUxH5eKkxC9AF3dMXemkgWHrk3hqdTADajTVCyfpVtMx477"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tsCuYWR6sBhn3wQjmeQfavLxJKuUq7g3K9Yt9DE1Z2t3FcAjaNZHpnAdvmA6bX5zkN6NZerHgqetyE7Lt2hHzVj",
  "key1": "5Cq4zPCprRnnK2uqLq4FtwUJF5b1Y2SMmFLPwNPUC4iZ3zx3WbUbDCQyLnSX86DGXrRFgiKD56H8ybC3zXDbp2VL",
  "key2": "5Z2eJ6D2gAJR5tpHoPDFWSXc4eBG2rX3FzTJJhwsc9YhP42yNCuBmWAkC1mf4EMSDgxscuMAMoaTucbouXE2t3vh",
  "key3": "CyYNUCRCz6a1xjbLwRNhWXdhqCMHAoM4No4FbpCFsEsfkeMwi8ArdJT1cJ6RiV3L5W6LSjZFJoHHWEHekfVgwoW",
  "key4": "QuvfoMDS5ZkFBbhCXV3VJnBsdubccXwo8i2oZWLNMxGqMhEKbPzDsVnPSfjZfv4JCHy3YcHG2axuHq1EKtV2vXK",
  "key5": "ZdGswbe4Ls8Ls5gXodChiwyBPB1KdH9xC6HSuqfuFA9bchvX6tutxAxJY7Ljy5eSfN5PHUSxCYyGHMLp3ns8bUH",
  "key6": "5SvKNZEzeKZR92NgouP7n9CY9FaRSDWopsqZdZmAhTT3QqEF15agx8psXUBHu1fJokJ8hJtTpvt9gDRq4GHKjD59",
  "key7": "4qKSbCXrE1ovnfjLBuscKGbjuohpsxfSBqG8dbAV62ERgNt172ydTt9BxnRB9XSo3UE5UjRuEEUqJ4c7ndCvBR8o",
  "key8": "5AREPePXP6PbZgA533zW5WC2QmmrVmBoRwPt6mEB9FvswwnRT7WoNaLqQPWqZ96KybGLujeYMvijuSvXcc6aYy6n",
  "key9": "2uWiLk3HGz5Z4URgmkLVYuEH9kqBgJjZwv62Y1nvWRoNbtacD7pj5LMnfRsnqM4k5ycJEK8kAtdoMr3ma3K2A4kg",
  "key10": "5EWL1NwMvuzegdsDA4sKYkNLZbBmsxFBi4wSttq6T1kqbfvWXcoQU66sjS6SDFuVpmDYGMD1SngdgMBqU1S3hjuo",
  "key11": "2KPhFjhaVMSFmUx8WbXszcPXhym4M3dd2ajneDijgYuMCHTtgjPDB3tGdf3RQ3s9hsnnAg9xYYFGXd5dKfXEfvsi",
  "key12": "2aWeZZzBqTFRM6GBf5sykCgH2387DD8SS73fBa4L2gtoZEDnapJEVthTEv7jSmssUy2RGWA6hvvLFTEM4hLNgTNt",
  "key13": "5x7cq1tG2YhXAxehvApgTsSzLchNCvTxniKhV46R11Gr1eHbdxVgyQywuYTD1H5DfFfEY863XMtHNxWRgifWsNUp",
  "key14": "44PbKvQzWVY4u6noAWu76VQdLGdouYFnzoKoeekL32x2MM7dnTkXvc4oj3ZnvBsFjh1KMWeppscDPWUz1LUjskT7",
  "key15": "27eRfEy8oU4fbx14TKVbfCMxtDYBajWt2E1E78ctFpDGcTJZfFRo4gxnRrdhrjNwJxJYW9V511RKTMGKxgTxTeMs",
  "key16": "2tCzFCZqz6nu26MPSGj8Dw4MSYtPGu7amgsztk96Amjhm6ZWqPoeDPfNHK47D85BehE4hoMBT9E54Rga5YeekwLF",
  "key17": "L5wG4jSZX1kchgz3EQetSTR5w7v1jguvLzezpQo2knLzzZWHkgeJVUVVH5ZwgK9B1QTc6xJAfGNMDSntJjN56qi",
  "key18": "3MRdBWAXUuh9kY7JYEoqYV2FKaaFKM21TGBkzSLBwUrxZbxsNU9HQ2UXnWaPZU6fnFq8GB3deRXNSdKJrRKtwvdp",
  "key19": "2d6nzaZcNv1pVY9B1xRD756bHcYAwrFQXDZXiRM4LQS6kRXGfJMUd7mTmfERVqGh8zWxrss4Bwt9VFy4H65WxKC4",
  "key20": "3k7ExSyWycbwK1htB6kWtBiQH5VfvGaZC8Jr7zhD9tYL4XwM6KaWHDVQhQcHTLSk82MXMNgAbQuGY2hzni5eCydW",
  "key21": "5ptGpt73VnFVckNvehrJj8CSvJhfm5zPdjkHNaKe7RPqqNQFsV5crn2XgytYrDSqyiXprSVsNt5aTDTGnaR7F8W5",
  "key22": "5rNnx9cXy5rct6BpAGdJbWTbLndoErHetzWEqaRFLob3r2bnoXDfXR7eSLU6hHeVJ1NJNtvBiG6sdgp9aQ8s63AW",
  "key23": "xzZFzKk2PSez6NDy1AJfpM1AJgQ14S1LnArPi6aRyE2PcS9T4x2wAANnKCi9DshRf5juRv5YFpHt7oAvRawT41m",
  "key24": "67P6F7bmtgWtnCkNHmuv5MN9wR7bzTCQWBqmwCDfZi98TKMxavaPMvyCHVx7YkYeLvJp9TNS9oGrpTnMzzShzMpY",
  "key25": "28KikKye5JC5Mu3n291Gnc9JEWCabvuNXHBeSa3X48pteR27DeTqq3iBcdXe5Jmksii125UMRDKd83ZnYzLNRPrk",
  "key26": "5TSCMSpKffWqGxWSgJsRnNXJMjdaRwnbxX8WXA8gbCCJvfCXAcUV5MbFDri6vnZ9PchjZWwZcszVXMi8qpmQGXzw",
  "key27": "4CHdh5XDDiLiN67LhU4nMchyhQcKdmEwHApjy7ZBHhTTuJ6ZDbCULCReYi5vxzWat2Bc4mLAvSGB4pDBHacvfKXm",
  "key28": "2HH6vFuvrDnwsWqA8vGnEheTRtW3XDF4j7B8UVCD8QgUYxkxW1od1GdevRSYg8yda23GqHJSqGZcR2thVotN9rPb",
  "key29": "3kWqZjTBMmkur2TZa98JrJYgdkaWrr7gnMMW3jMWvWZTFbhm4TKNFam7FGw6eGV5TnCAMTPeKTuLsADpzYPfL8Mc",
  "key30": "eLoxcdQAMP81fb65cKrSvSQS3CeXSNDd6AuoXYCuLEPtvM6gMRrzcVpmpareV4RuucqEPHPqhWDXZWY8TKK1fhG",
  "key31": "31DoirCcJ4xpra8eRRMtnLNvit27MXTTb8UxdspEZrTUN6kGvKYd6578ayyF6MFYUigY8TbuAm7FRZix4ncKP9Jx",
  "key32": "4obJuqzqjyoSvqq9ZS9X2a2EfhimjVKXs3kWdPDnVRQTvb4FgHkYeiC6ZCAhBA9H7vqryHp87N6xcwPyoE3TNNZk",
  "key33": "5QYepFVVdmFqmCsmtFTVRAG4GZJtT4G5samqkfWf6Q3WzXkSfePGBjL44F7VMmbP9azsGuRVu2nBbKJoNCkjvonQ",
  "key34": "2vVTRFLp2g2rWxbh1xTnAV1JH7H1NdDeCfmoQGfVs5MRf8hgDuEd6bUVWtA1ErVCQQuSiquLwy228zpoeSMCLrzk",
  "key35": "2f35pF3iAfDMosqz8HYYapv2abucxRPBqk96erDLmzVCJKpg13HmSdhSkdz8G4gPV8m2EtMo24wKV2NApKQjYpfb",
  "key36": "JeP5vmtg7u8m2osX8SD7xy7bapHDvzBWV5FjcfnkDnrArnQ8xfovLUq1yT65ouSnAatccbELzED3fY7d1FXe5UY",
  "key37": "3kkgK4GWAPbt1FSevfBq6dgMPSM3o535Xfb1rxiuijSwiHCzjkYfqni5KwhBjqxYewD4NzNi6XXeUP5M4cJDgPL5",
  "key38": "4jqCcsWwySVz1zYw5xF7r8F29f9oqeKLP1We41aLdtF3ojAECGNc6GLeBV9LVjtmxjxuKDiND6VPVXkLFLqD6ekn",
  "key39": "5d511NcpvFxCyVY8QNK4nk3TZgvMudMJMWttco2NFXejFewNR4Nj3N5qsywgm2BCb6TrfrKr3sMTV82FFJFF3fCs",
  "key40": "5onRH8GfeyfcCCVpA1LvEM7j5g1FnptuEmv3vomVX63UgbrbSag4QH6STK23Ybg51JvYVids1zhSsudN6JwMr9LL",
  "key41": "4eNw8aT7BLbKPLpaneUFyDTh6C6GH5rg9VUWjmkSymWJGgPCTijerNkW8VscntB1HsgLXyKBPgFJU7fMumo5MLxs",
  "key42": "4rehWYmSRz8UiVifiuYu12ouU1moL4Gk6b7rRtuokBiNuEpU4f8yApdQF3PrgcLxsEYtLJ9mc96edUfFXPAR44B",
  "key43": "2A7HQDUoyfCcQWRNBq52ndRsZwH79DiSgX6NXJxM28jgQfR2Gkgk6Vycj4jmGE4PJJyrY4YDTyvU4J6TSLAwyNUy",
  "key44": "63cw5wncpepWdNCVdPuQC2sc928bc8v2woA1DLbHibNu7ben64c783rh7iqJc1rx6gUwRUFQMgt6qR37yWsVHrpY",
  "key45": "3YknU67BB5vheevF3S8dh48iooCjUpZYGsmgemukm3ZjWXXXYf4wKhkJ2rdjGsit5T67UEEDqWKJ2rC5JQ6ujy7p",
  "key46": "3BqhYYquNM6DJHiaYNeMGT2WaKyRa9XbNb4c4hqB6pSczx64B9sEKYo1xcm1jSfF2RTxtjdjHeCCWpCq3JQcDoi2",
  "key47": "3whSe29DPXx621cpqi7N7bPps4ta4heKm2W3233frb2aKqGb7sMBZzc81uBFyW282qhA1iBzpAfv7GdFDVQwAGER",
  "key48": "3AF8sQtSSGY7CkbKCp9AqH7csbmy9F5bgxMUu4cBeHMDUS66kws2mAndQjVePKPwEKFqt6xHRV63vCiyduc6Qw5u",
  "key49": "5PFek6kDuXhJNwbZq8LVCdhxK5kXS9ZkhuCrAoQ33EFbu41yytow87iLyT2QqZtg1iFoHdRUm8MFEURgeeroj1zR"
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
