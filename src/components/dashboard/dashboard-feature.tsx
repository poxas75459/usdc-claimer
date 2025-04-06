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
    "2iRoyKYp2kWSYFVocWVtvB2AWQ4w1HPo8RiJ45KwZWiZedMYmfQALhEm1aTNnf5u69sKAP9UvcvC2F76P9W8nWke"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ffkiFpXKNRRmJhHzJtJbUtL9wJg1wcMNWDqJ27CVSNbKLUpZn9AddPesTyagbRUdXNwCdvbjgPPnQwoDM7BVFkJ",
  "key1": "5zuP7VDCSQ82PGcWe1aaygDRfxd2dqjoZy4z3smoKmUPdWrcCqcJ5RLn6CNDYVNF1Mea2DgkMmCvSrL6BeTLajEf",
  "key2": "5VV1QEshbFimRy1cg9hzjCu7XEDQgtfDjTcmNCa6VUmLKy5kayPPRtpUz5SPt4SgaX62AwJ1JC575NqHZnyewZPF",
  "key3": "aCWeZ5mcHJ68q2qTvLydkgKFD6fgsqhufmMG99eb8PMurrNi4ATcDrxt4a8CHVBMkvvT9ETbWVTEaiMif3qvW7H",
  "key4": "5ozeKPt2J3RBD3dyKMRu8WHmf4D7UHNW6r1mwZincZQomnv6fcyiNL1gbbMvsdE8Jx8264VyPhJ1mFQrqWaHmkZm",
  "key5": "5VR8EUVU6gLUADikZwTCi6cyee13EQ8cTqA8CbxSThwS9eUBx8isbsZ71exWrVaFu9tQBwEgge7UqVuCUP3SEEgL",
  "key6": "2VJqbxBZvqkDRJkqtHED1DudHbeTTNS2cW7PSWyjg4jwrGc8hPJU4fZyD1QhTy1wuS9vFzkgNRRGR9bsuwu9KYBW",
  "key7": "67LoPpvT4vFRAWFbRSbpKt7segqodJUdcQQ6siqR6F9S7tW6tza45oi75tLamj81WxDYSSD11ajbsWVtMxGwCWfM",
  "key8": "2FqCNofDw1ycBtaHvRZm6gp2ByYGL3AoPzn8eHoZuEdCWn1f9dd1rtgj3HpixdctQxWNiCyvp7wkuqmVmwNzYCmK",
  "key9": "3MuQPE5fTXV8VUqLjXjdk9HfKhWvAt4QBv9qMJXiHYY3geMwNrWDEu56wZUW7yPvxBiFQfrWW2uSh9NRsiMPg8bf",
  "key10": "42onfkpct8xbhnpzR3d9NnwtL2XkKxjw6oC9WEtBzHNsw5vpMaMZLbjdfmzKtFFjX5ss4GBagHQF1BrGNgyoZLF1",
  "key11": "4difSgnSWZQUTGx4DHjKfnVCecDSZxTJcb6TnjgjhLw5ocYZA2wcNuiboHAYhqRcdFFwMSVQxUUawmgLPBU2axFq",
  "key12": "4N7c6uvzabrE63LnhJ9b6ZUdSF5X1LK7WY434cadJc37JnM6xUZ2WtdB9VCgG6z2ySJTQycHGRoRWoMmgHRezqQT",
  "key13": "2yuhreDzgjDY4pUUw9buvoPWnorx2uFwkacsh9374LkUWejkTkoZgHp1HQXKxnh9SGdAFQCpdCncDgDUSKjEVT3k",
  "key14": "27TNzsy8aXPUL9H596yN2eX2ncdpnVuza8DcTAj4uEB2mi8HisimZ2p6aAYJcbgVMGXqBxpWyheC43p8vd5Ki1Y2",
  "key15": "3QgAwoML5DHsfsuf67xYSfwXYppEQcNSfFm3LBsc2oTGMh9UULiZy2RLYT2MFcrh9ucbTJRxhdnRSJbXwYznczwQ",
  "key16": "3gKmcG1Z7ZJ4QowECtnviVP79Qsf5j6gCxEDV3kmY1AQfoWzzTeQ68euHR4R5jcN7FpWpDbodhNqau7c65TVQtPt",
  "key17": "2Ka9tN22fZ8WWqDVJwLu7FrnD6K23BFEe2mYS9Ex5xap4L3jkJ2Uyo1xPKDmDWnAtT5C9s6c95UqsZXb1NF87GRB",
  "key18": "4VTcu96Zu6my3zQw7n8qBumZbuhFpsMnjvkB2RkJBJuqvtNBp6AfACL66EAUqCE2ciXJvYtwPgiMfcuiT3yR6bk5",
  "key19": "2LJjC4tPXFrvAPLRmEsY79KxtnCreuZCwkDncV1t8tDmvWxqWAC2RMTDovHvwuFSCAv3pYxWiLyYNwZSgF9Yvd2V",
  "key20": "3huwX9kJuqzSzXo5EavyEKwTrbkebnV7iGZhoFteqtptNT5eLE1jKALk2ybTU8EBDmYiGKwfd2xAt1Gjdbx3NjT7",
  "key21": "4SHwSy8Y2T4pv9b8HH9sf7ehGF1H5X2H5W4tQRqiq9fbfpKgcCFW7sNCreDA7oB6iGJDMNGN5oC8GSBg1to4R9Hf",
  "key22": "4cAXq7kcXXyM2vrV12moLBei5vpLHbJt8gBNivYC9FXaqoBMFcBkrVBQgAKf3kkun6a9HRZJ15HQF8wmKP6fKhAi",
  "key23": "46KJ8tRQxyKjEJaHcJHP7R5V4CdYRh9HRwW8uL5BX7okmPHPo5McahAizqXcv9rUtJuh8ia7QXhAJnRPJBxXxxBk",
  "key24": "4sPrG2DHMMSmcJnwNAjpb3fZ3rq8a8GcAU1ZhUsfbqMkXZHr77TDcgXZW8dtEnndMEkJsJAE6y6hn467vgZK7nk5",
  "key25": "51hQBC9JxAp9j6G9WgwgWXN6poirSXPPNgmZsLdPsaQxU28iugP6ik9wNe8HYRaMBzJRdzTCZh8wBWacFt23x7mT",
  "key26": "63Q8JkbZUMqDAxDFJimcQFW7Rse9TH8mcWSov5dydyr386Ph7WpEfyYCgD4YMHZ8D6SsMGng6tSBHFnMmMATywT9",
  "key27": "5XH8LvgfGT8wPAHTwfYSbmwYECLYSG1L43Cmz8tzFy8RB4fFTJgd6p6EnWwM59M4W4gtZ1HT3EoRLh3JFe6ojbqP",
  "key28": "5Qmcyc1SWeAY6HmmkJzEhByGMm5YKtVN1QH19sUKvNwkhv59kt9jp34bCEA7yxTFVE2aSr8TsSDgoaNYdxwHkc8o",
  "key29": "3Jr7EMG75V1VFPqUMjFSEDfLKULsknZLEKXZmLVayVpsykyGaqxFW2v7ZhabeNiF7ATrdwJk3yxhei9CSAPWNxq5",
  "key30": "gKbFVKTDxReoCC8nUetMZeTZjdojaVfqdSy9sg3jGNzdYweoBDrdCiyz2qQVcs5H7Cdu7pmu1hHKXw5TLxg4h1d",
  "key31": "3bbZNKP56zVzHGQgswWfJtgkAZK6r1dvnF8mq3S1Sy4NkkjjMiqwFGhd8hv9VyrKGeUBkYeKLH3PUcSehzStk1oD",
  "key32": "5kWpqfK9fwENgS4bcfCabJyRmZHaSiHDjW4JAhsXHEQ7GRyvdvEWfMBipbC322QRwArgFeCJo2b9YxXejvcKSauy",
  "key33": "CifSbgu41VySUJdpVVF29FZVFRXJVS7nnP8EEoYvMtJhNWUpm4ofne5c5ar3HuGmvHg3nC4bwa5AEwiVLnSn1yW",
  "key34": "qidohYeJf9wDr1tqV8SAPCwiz9YMq7gcrXA2Zsi9fAtJ8ThZX5EGfk3nex42FrV1QMokGhRJjudSc32HKJiukZu",
  "key35": "5fBVWZgYtht6hqcj1zH6QyQtd6AXgjSHALS9ksZdjTTca3qhMTxn5ExmjE97ekJdZZyN9HVao1SE8ppRyF4cQmix",
  "key36": "ciCFm4fBbsrvuCFExdtKVCKiFGFk8QCVAQwbAwXyBVkGRP2eSW132yjGHF9hSFxz8zrBLsZXx72KLu8qhDuRW25",
  "key37": "5ZiXyD4stCvZJB2d3EZCUAzqMDnnQDHedt1dWNQ5rB368X2Uj4mYmsXVPinWg54hpQUffczTvEtYovNcMqEsC8Kg",
  "key38": "2ucyViA2JWpD67k4v4P9vpn29L9PDNTA3jPppvUwr7TuVrTcHGRz2nDhiuGymq7GJPLWqx75xS3kKKCB7VZATrym",
  "key39": "3PgTJRWzyEmu2LqgTEwFezwUJhf4hb3mysoJ3f7KNJ8s1zJCnzGRCZ9ZyEsH3cEPbWSvJQy7Dzr2Edu7BqXK5mkU",
  "key40": "3nzc84g2gSUb3SgBaERvWRXk3QtAr84q6Uywb4e8Skr3tMaGciNQYazYzf5KArMJy5Gy2qpivve3QWeHZjKjfmLw",
  "key41": "4ksA8VmaGCZQZyks6qJJ7QKf74FNd6qLYhph2tPhxhbjSAZeajzyHvypbNhCGV9CjePQ2eBzSuC1qVmfCR1HwRTm",
  "key42": "3gxmrABXL6k1FoBivSLRLakWWXrNEe7C5UDVYdAGM1uTkkXJetbqRvAtAmyryx8XKNgYTZ73aPZYQvsSkZupbNup"
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
