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
    "2Eet8L2cDdU1qh79F8X3HfF68eYxgWmHxkYpV1gp5kY44px858AuRmUWJtmGszexRNZeyXgj3eNmPfdgdYMQ9xhf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xhgouKXWULLNHaBDtqV4PRtPqM2zQFiSDUNU6Pjoo2rE5c5XgACeR7EFckxXqSg8JA97xQf14qiBmsLW6yPZ8TH",
  "key1": "5W6xpu84UgUkJ7CN9fH9vUugchm54kSHFAQjw3M7MJx5AyqNeSgDdqhcztC4m7MG9NZg1DrXvrT9TYKvYbZbvky2",
  "key2": "Q28vR7MVYQa4yFN2K4UM4qstxiiirQeVL68GGbJtAcnGc9eoZ7HktXJG1F215MJE8ZsL3WcLXSR74JYx7ZRMgpv",
  "key3": "27j5Dg2iJSKQWnTLwy2XnTyabV9pRgRuZ8ZSE2iHV9Ln6d4k51E9P63CtYBgMXhTKUqBsGZ8WQG1mSmNjFZFfovc",
  "key4": "AuvpdW7cUJMDPBfznLG7fcxLzRJJ8ruiC4udLVSAL85R9nMXwjoSqavLD53k33iiBRq2BLxxe3oEHyJBDk8Zzwy",
  "key5": "5TxEhS326ZMmMiV7rJpSwummCTDMs9iBZPj3sKRHKzUKUfLLxYQEenCkHJu6o7LQZAoo2c8owT6kSog5Rtb4i78K",
  "key6": "26kp3bAEfnPn3RFrq3d24RPWEEL4Md5PRUuCep8hEEkGHHSyC5qU2wjVsU55hGAqaSEDV4TPzLbKCTzzp4Rv4Qsc",
  "key7": "4QfdpehXajydAFgBDqZgtprNk9dZztkwpEXrcqZo8rTrJ1Er5daibAZW8Hq435NiykuGZ8HH91bgor4J1p1TzGzf",
  "key8": "5ZA3uDDDfE5QUB6fC2TQeMmr74yTQmJQSctpYA2gv3YSVtP6ixSpxpgaZWY5C1NZRwBEMsEFiYmqPHBQQSuMPkNU",
  "key9": "BdFMrX35bjusUz5K1v8nFnMtSL6oRidWPkNFK5vHM5mxAnB3nAeJcewuyqp5BccvJcSWU1QKrTzPMWCK4TENtJ4",
  "key10": "5ViADXubKxFhkLdZmPZyQnz5BxMZHVUubERyvnChhncx4EXtwuF1mo6aaMf1La4HJy4L267yHm5wjjLjBBLUuUhg",
  "key11": "3m6DSSZNGhtDgMCQrXd6bdSYVfGya53GdATj8hmX4ZoS8dqLkhTHLFJGU6J6Uj3zfnDQwWU3uNUDif66JBRAJwSJ",
  "key12": "V6p21PxCzNM4GSaTLb2z18qQNwSLWPxTpfU4o4K8zRJWGCrPWcs9Bo7vzCu37CV7mgBE8K4G4Ezj2nNPpY36T3d",
  "key13": "3JffcGpCnStj15RCmBvbeaGktUZ8tMdu2mGtLqsTJmuC8k7q6KMHw8DS1AYhC6Q9QNnRX6NJU3JBFhhjtEUCxmWT",
  "key14": "5mijkBU2J3g4AUSWocrRTFcQLaEBd8DwVa5UUHx2825c4cnN2NKttHFXGzECRmm6dHyyfvMnSa9t5QPn2ht6Xe1V",
  "key15": "wErzDxTz5V9XcTKtYoDwKEPCAkbHe1wt5n1xzjd5UcvGhPgzZ8fTBKf4x1xrCLLuWaUyCq5ygms2mFdBLyRgsVY",
  "key16": "38ueGEVW3mXMu2q576BXPYHybZtmZFMnqhBrraPTAbQZ5NgLy8AtF15X8yHMfRDtgv8cpK9xsfWSPidMsRRKZhGK",
  "key17": "6E6wVDqncKtxCYGZQFkK5RJKKrJQKRi6EkFd3QKieySKtvPLvNp7N8eoznYfKHEUSShjXva31w41LLgmfSxpqPi",
  "key18": "3A8tojtgWp7dPXngcki7AX2BpYHZDNev9k4kDtrr2mtLmYuzTnYHhX5cVMu5sEi6D5A7Gx5Z2vQMxegqmgT76Xnb",
  "key19": "W7VgHwie2wKpUZc5YnYVokAVNFpDjgTt9fFPdpjoSX7sqRsqKqGMSENrr7RfvDqPd4JNbZBjyKbcbXchcohmRX5",
  "key20": "39hyMrkPjVqn45Bz23cejqYqVXxRiftU6KL6QBNwv1u49kjqzwaCB3Ry2v4cexJv4kEEeAgXeRTJhtWHf4G24o7S",
  "key21": "5kaoBfqBkx3GQ6GTTXVCfA2KjP4fsT9ichp1fghYQtAKHZhcdJeEWEdGM9injCMvpCb8PYJ76QLwF2xqvf76DyDw",
  "key22": "3o7ncUkVjVEFaRzQFW2nyonDsbhbrFPaV7cURJZk5PNBvqMuKahUyUpWZNMRborW6v3BFJMMdMiDbquXXgkdLor4",
  "key23": "4fJnfNp3Fv6PCCAGr9XrLVhVTJV5bCTnt9kg4wUiXChvWZqB35gxgbsXfhqgzkw3RshisUWut1C5GeuzYyGxv4ZD",
  "key24": "4aJ5GnFpfxfGESDrycc2XMiBjfYGcFZimrgUSMk1tHvjcVrXzxK8iVjbi83qv78Hpo9mG7F5oHUGbxgENXrRV9tb",
  "key25": "4APz8i71PTnxXXT4RY2aPH8SzPDU7BZScUEJfShxYGc1e63bUeN7dMzPiogGN95LyQCJtczgHWb7jQEUmBr591w6",
  "key26": "uVoV1hgZgyQRGVFfaxFnxPemhVGc3yrw91SFrbV9ALBxX6TXqEvT4DgS791pmH3oQDYZaN4RKNs9VsnhXFWbd6c",
  "key27": "5t3jnNDkHF4eK1LZhXyXfNpD2b3JEDB3Wra2iKDVatwtPxBYSfa1jUaYGt9CrLhLze9zfDamR5C2VPjghoyHWSMz",
  "key28": "3WZcyvYzkQKo2T6kj67B13JfgeskkdoBz8ueHrJxXNUiQsKMvVMoJD59fiSK1Gdst6qJZFeJJSGpCvbRnzj1YyxQ",
  "key29": "4jWYXQK6RxrwdSY2zKztdZBXKfxLqhj7u97T9o6sBtp56ZpJZAyWzm9ip284LKrVykZ4hhSEiyAGhdoHEYPadnDk",
  "key30": "511uPhRAgoR3Zc2eMehQXiFnYoYZG1YiPb5kjNC5ve4wSvwMUFkeVBXbnQjeGa1JVK9v21BADzZcPWCZeKeKg7fk",
  "key31": "3h5wAoHBRxhWFw1rPjTZotzsDJvG2jrvHDkfcWRnF33kJ2bBuL7Sc1g8QRPWYX9iunChyQE6qPVASLFFrZ8UCA9w",
  "key32": "2g8Hy7YogDigoCjdxe2kbxxLyHikKw27amZUWhQHL9o5MvAGN1VfgF7VfQuZNxVNnRqXwRQ9sxsu5zgreBWcxiGM",
  "key33": "4Hbi68ieFCucv66GffqvgnqDem6XPPLHphDTndxjy1Bq6EdkrjJLNtnZxP3uZqumELuWKtaHrGo8ZPLooP2Ppsf",
  "key34": "zJpZG12vTg9fMvjvhc6Poq5v3BaDAtpM6aNzXLxhgbVaKzgwSeyFVPdd7gMd7CxAUkT4tmuTbCRpZ316D5GBT1f",
  "key35": "bkm7vehYPYrVkEZTD4s6h6sfi6x13G8K1GkEEdCThSKjfipaQWLsLwUokUie3Hm92EJ1M91QFRxjL9woYKsB71M",
  "key36": "yGPqJvgQFncYQxqbLmmD8dAAej6VnvQ3UkWzed5QmnJT7aX8DBrxNovrVw9A21GRBms3GVYx8Wwd4YDvULcW37w",
  "key37": "4VPrB4HTpKFWsVaEPhSWuRnnPVTqboNmZhGch72Pz45ouF2CC81t4MtvA741DDMcveyXPDvuk33VRPExH15CBvf9",
  "key38": "SswiDHmrHREuh9U6VtMVmaWR8LMzDEVumMkocsCzCH5pXaLfV5LEgcieVfLWUjRgVYgEjdDdjMLhcq9ACfLPkHS",
  "key39": "47JC7bRaVZeH8FvUsgJoT3wCwYSWymYyYgHHMTh8p9WDbjQn2mtQYgaw4maYpCoHYjgLgeDmuAnH6GCK3khPXuw3",
  "key40": "o3ypAD8eoW7qZqfDoCC82F62uRXrJAnry3ukuaV9NBsj3jviq1G12WAw2XY898MBGAppR96SCPpy1YqzkEiTrbZ",
  "key41": "2JmcwXGoHseWyW28EYZu714xfHDevBWLdU1H2mhebmvCmiYNwRGcBaHo4VMWVMzbuh4hjsWAKCyU7aB8RR5aFU4a",
  "key42": "4MaQQ55gHuyZYHQ6DfbhmXF98QsoAGY1P4h1XvmX4JCR19BoqtapeJghFDgBvuh1J5nCcDg4BC5nfSvPjGR4Ncdu",
  "key43": "63mUCRADfySF8Z8Bb4RsRV2yw1NvSzpkjBYsi6DCRJb4XHmo9Xs5JiXrGvouBtEqEaeMrgakMoCf7JX7Xj1YcWqi",
  "key44": "3PQNaYEAyHEJt3HkGuEojZQX5jsBmDi4bJy2RbNSYzezyLLpKFM4vt3evSbwwbxYHBiLtDWuY5z5WryaArWFyhiG",
  "key45": "2SAS2vy9sn1Xmk1s8Qy8FymKCL6BhZNkLLaiC1CjYEFkfYAm9NteD3oAgEcAqwYjGUt85LmHnN37rNwvE7R72hUG",
  "key46": "cR3UJomFnwEJEuUwb4eYdEr43xWpR6jF2WmtDNDduvXwqaCFqUpuRpSmPgLeg8xEPruwaEwV7gjuxUTD9PPzYoX",
  "key47": "5XaUXP5rrKSojELnebz5adPQauCcSzH9vuMbWRgbuLsYcyfRSSG6XvcavHV373TvYgD2eVS54ZVwbfpjbCNPG9US",
  "key48": "3usNXBVUXkcoLsNmRX9mVcExMXbaPfHH3SxZCK4DQofU7nzWKY3Wf48AfS8Znkmz7Ny2PemE7xMgWda9dHAiYMLX"
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
