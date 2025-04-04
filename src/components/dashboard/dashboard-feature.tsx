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
    "2Z536Swcf8abeUbDCSoAnrjf8xsXB4DMz4cWG5Q5MKNRACs1wvXKGcbExVd5cKW4Wq4B6nVmwXP61twrRPqqbFSv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zyPSwBzxVE6WnnfDzeyk7wvDij4MF9RB2CpyjqyFaoHXb8e8y7YyHiTF1AFyesdmhsWZmqgVshNEo1sKPmvssBw",
  "key1": "46GXu5GmSzMWnyw7WxAj3NZx1eaPGo6Aximc1GW1qz9DPG8acx4Qh5jJbGh8FtaHtFMVMoh9YpFdjcGY5Ct9MV1F",
  "key2": "616QNMYZncxq7cwHTJqdw7triv2SAnd9JDuioLHh3Dz2a1XHL9nikhnQHKrw1ppCXh2HDszdtRPfs1jQazjNATU1",
  "key3": "qMXBnTjNbQG7zXjX2QsVR6S1rhLm3GGn4SgpRnf1i3pfiDsvto2SyGq2AcrJ6WqLPsQfoPncwxh8ZCYrii4m6Ln",
  "key4": "3CZX2noQLMv64bu5bvfYK1qrvSM8qEAspHHdy54bewVGUCspNz1D381mQHMsEe8NfaRnNjRntrnkn25Yni4TKSQ8",
  "key5": "2pJQKxTYQ5uRD35TwNEpJ2c4avqoW3CFjPv6S9eyFSFkPNkELSCeUxBwkv7adXvb9d96br4AWpqYEn6AAJTWJZM9",
  "key6": "5X4ACzGK1LvDNDzV5AgESsQN7NC81SMjoZkXzVtqyYDFBANxbeDmeUFomYaiesbpdg7Qj7kysxABAW1hx25hzBZv",
  "key7": "rFgaJ1PKaerG8AThJhpM3Z2kVq1xfiggmDo9dF2Zt1DZQHzncsUGoacDDqHGskxSsYayqbCRyTs5MxVpfXXRAyG",
  "key8": "4sudYtMT4ZobtmiDEF8Pq1Nwphc22yjm5pvakh1YbZAJcGLpBDjT5kSrApitqaueeALzjEEWKmeRZfbzoJGxuBFo",
  "key9": "2NUhHcdgUWwzJU5Wj6hZyt4HNJFXCaTbqXpWtWkS46rfFF8nfTKepaqK1nGc5eddcsSKXycUXegKYDENLMfXxYve",
  "key10": "2ASCkFF2qVRqnW9xEKJ6E4yjU3jijNkHL8nMhQABoCzTs5V2EFDL4zPTWFimW2vKUS1FHctfhoYjJ5fdAKb2iwLQ",
  "key11": "rWeKgmNVQFDrY4EuNdytPmLMTKMm8wFdz2H84KwQ1gXuR3JcmwYTEdyYwbuTh2oh3o456mdiijPGLbpYmA89U6T",
  "key12": "22BRS2DBUFgFo24LkLxoDpYihy3zDP6UqcRGsjUgNC1yxtAKPD8VZ1hiUQFYtZjQbu118QqnsVKG6gUrFA7acuHQ",
  "key13": "3QPd5cg3sYAMq5rzienMUMdZvpAgSxYctUGjaxyACNTQSkuxHctNuk2KgsvTBxU8mqAtu167cQd1m3EaCz2xL2LN",
  "key14": "BerRVwspsjE4dM8PrwdcWAYU7QuS4Zaj58qicPPnAmiDeroKx32KTHG8rPsHzkzYDooenP4scG5be8fF5Qvgab7",
  "key15": "4XrsFWDHwNFbJgJpSz91P6Be6Vo3qmtNpxsj6woJshW45orGZ6rwEkY9gXB5kJKm34AkhEsD39f31pdeD4Agn8hH",
  "key16": "2QF9LjkRrC6GkEReVMxLHxitK1x9safq243jW2JCYSxzZ42Uua3QMDxBtNziY9ywSGpEF7PER3R4qX2LdWqWBHvm",
  "key17": "2k9ssE8q7fkhNzYszgscThdXoS6fHPCtLidmXYEidFm2aYxPbrLCw73LArNuk5KBFEbQReZFQTX2ksQYTYnPCete",
  "key18": "5ptuRktVdMg25u6C6qEaMmP9TcVkKXX8sDavF6QFTREB3c9YhS18wX6zMis9GnJsCWnBbRzW3rvjR5g1iopsVWLb",
  "key19": "4g89WbPZ3x48cj4C1TBLFavpox7neHm5qFqcSvzDctBuREW3ZPWEEigLHRaocBPjbTVyPbNXBkAH4dsuGnVapCo6",
  "key20": "5VcgD8qxEpD9vpP6PGkzjQnxY24ftMSfntEs52No6xzE6suPsLMg3qgyHJgpcg7WgFN5gsc1qDCsJhL6DSGpupZQ",
  "key21": "SQvWsDsCdX1y8R8mkyAMp8SP23BXAMWxLAmLHYJUG8ELDjEjjRounbQsPSkrwZH9zvaAjygJJMcrpmxcfcLLspM",
  "key22": "67fG9cNYQeBVQc8Lp9x9cHqZwuPcbg9cXVBFVzPEx2kmjWF4zfTkrSddvK1mDR219ga843RDgcq9r2akW7RsBZYn",
  "key23": "5aFZDmN3R2HBgHR22JTCnxKDAH9py3Yq4Yst55HBGMeFegJE1xY88acLcCd2JFkj1PiZL1nSpqq6TXYS5P1J52YT",
  "key24": "2yULkN1yn9xPfyG11ER1E6sAgPZLhzg3a8PpxYUWiBeocPEJ5Y2hGspa2axKos7krEnscZNmU5wdeEfwwfmtLG7a",
  "key25": "5n6KTiYFBRiJ5XnKqQJodtwYWR2gFfVgQ17fwZNEJpTK5PEenErkZ7P775hkzZs8ZveXkEEwkawumx2vsELx4rdr",
  "key26": "3Mo1DH12CWyVXRNyRbQGkQ4aUZtPPvDMqKTx58bA6rUoE2iZv8saT4yuaSiot2AYZH1Z1csq5FvhxEWBJ59LHcS7",
  "key27": "8RXvj8XEVBRuTnGJ2BL8ejgLHBEdrRjvWYqUFeerb4nN7eaaFDn8FG4WA3mknX9nzXTEZFhfyfZPfqA1b1YpAjW",
  "key28": "51iE6JXKcRkstaxtRDB7kLWFTyjVqZuopsJU9St9VFdwBneJoRxCvkT3ywuY4i88TwzR65pgM2cv4MszexdfphQq",
  "key29": "4G5KrFm2nsMynNeko4a9PtgZ5Ws5GuoaXrrvSywhvwbR9ZwEqRjZZ7SxUzfPdTqRLUy6GkebtaEDHqprgdQKFgV6",
  "key30": "3qGywYUuQFMrsHQibnsMZSHeWVjH8fzdEUCisWQbK9k42ooJm9tyhVrkBuJdDdrWTzZXuEt5QYPBALZa8c4Ek3zQ",
  "key31": "5gLovChDzrqqHaqixUDcfAGNvexYFgmfSQ1DvvFJwdKRsfB5Adogvuss92EKNF72YVwF6dsj6vRpDZndBwhyKPUz",
  "key32": "5rVexzybMeMUNJyJ7uVehQHDWkinYHnxvHMk32GaE4MBPxGqMDjGGrSAfvTd4F3niT4smVAdcvPDAbhnPuvHeckV",
  "key33": "2Hhn4ECsQ6vxKrXzbw8Fqu1qztuacJHb8nmwyFcr5MsTAjN369tTfF7QKUhaX2VX5WgFwmqPbtppF1vTPYR8HLni",
  "key34": "4ehzeZsBAzoY3W7StrFx9YBTgstb3RJSaVRKPpgbrMk56MhLShwtpsSWQgjXqb7k1y4dSUqSZggKd9gX39n2fV3L",
  "key35": "67qAj8d78a5v1FSwJUG9aZSzDv3DkuyZZ2cQm86aoJnE4BiWGzxfMQC8ewtrgZMmCCwKUfQHhm3dWjryDj9hLWTt",
  "key36": "3UgSPBDpEVSixKiqbUms2AF6FHzTTop43xcxmndaw5io2A5SNEWHncFRjKiA8ijCynkYUUKKw1EbLHf8BAYVYRuo",
  "key37": "2bCWWRy7g5bFsqKqsTQgAZ9HFBiBhCFR91eGtB4JuKGB7bVCLk4yaheTBMMw4wz3GZrLbHk8TLeycGAc4PHMCMGw",
  "key38": "29hc4aNLgnPzbUwf15eyUZPFNN4WKsUEmnq1s3rVtjD79MXP1tYzaSydHCCEUuaNh39iWY6a691HVhiN7VRScXmM",
  "key39": "3rYpRsKCiqjFr1yKeH43R4c6ErqSBEN6ryLTCEbXcMkQsYhu2N8tddnTatDyAnKVqJpxwsyvZZfUyEstgJmRhXBn",
  "key40": "5KXS8uq4R5t6Mt985pFN7KUtWU7rjLjXwam29coRoWoiztxZBdNgfLFF8vfVQXTPPQ6TtqMGRgsJ6SsEAnZUiQWd",
  "key41": "UVg9Eyc4fMMPyBeo8rNaUAyy8zirNjRNauoTxXps84HvnJRX6fq2XtMsQwN93um1rpvUaauFRsp27xTKyzwLnP3"
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
