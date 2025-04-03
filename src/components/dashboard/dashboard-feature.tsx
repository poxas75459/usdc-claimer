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
    "8veJ4hCZjcJBQ2BEoKJz4qrm6xZ2CxyHoyhwX9u9sJwT6stAv33UivFbV1BfyNFnARRtpkUNB6TuLLkL9gnCLr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46h72Bf9K6NKaUxTqKHQzLtpZdDR5mycyjd4rt6h6ztWf2cJxKmA1aZanZjdQcKrPSkhaMDVBPobJmumu22TNLH8",
  "key1": "3s5Qa6gqXGVDJLRTCGBUsHWrSXrxFUMzd9uWh1azTn8tkfNaMNtMLqAk6JLry352ccLwYsdKR2nGg6ciLECoJSJr",
  "key2": "4tMjZvrX53NS4MzwkQHwwJdrJMQf4G3ATMNEboAniNYCBJJJYY9XFHKdcGpDoQ1twaCw73JAwBJx3vyfepa9Upg7",
  "key3": "3uVV97oQdLZAUbCfVwR72rZirVHgGjQmEdpiC9r5XFakg9CuMggiQxrWHf3CCsYRFjvJEnFUGbPhrpG3CRG9Keom",
  "key4": "5F3f2u1mP4NkLBLR2vao4HbVivZt6KgNBaT2vnLTT5J55MYW4JDbf1SzuzUj1s7HucQunKF4yKpQUKRw4FfMj3VD",
  "key5": "3ezPbWDiUESyP494Du3JuA4gp3ETuCrdnKvwdZXQRD1AsDHdf3RRHUpyhpajpug1pd3XekbBGKeAQCMJmqEb9bj3",
  "key6": "3szHB45VUP91LxZG9vF6yE1KZgPTyYcZpzQnAFyoLQrnVSLs5Msh4grnyPGu3SAFEYw2WWwfkqCKuVY6TNfexVDi",
  "key7": "LopRmpbbPiVV7wuFWpsMneSbBPFnwoTxZWZP4Tf16Kpy98arh8okE8gHwZFSYqu1eVRybdJniWV71jcL1hmVoEG",
  "key8": "UELiMwm8Fd7nb431kfYnd6k5BPj3f3Xs8Gzyf34QcA7KosxjVCnjmjLvCEt1nUycojAvr1SghSfDaxHxCbcfwB7",
  "key9": "5w1HpiRBPRAx4UFtEA4GxPYRqcMNgj2ZgMRKweXGcAGKu3tnB2QDrWEm2Gis8R2MrX8wrnvbgLqDiW6VB8tPKC2Q",
  "key10": "bSY7vtr1zowWNrKBYm4qRiGR1GxCk3LaHrJcxLCZGAucVqKT8WsSy4BkeKw7mc2VyqWja3aQUwSxvzDDfe1U3Jr",
  "key11": "y2nncsKhYjnHabnkKQQW9BKcMosMg4whVYLRpHsaK8twiU3XCW8kZMWe1rq2z8Pxrcw6do57q5Ddo52yBTKAu6L",
  "key12": "5C5zEJUrcL4xcT6iAo8tvpPQ5frC9eB1zn1L2B9tHG7WQQm5M6nZ8yg4bc45V3THJZEdzEdMKej3LQaSVMGx2AUW",
  "key13": "4R2tXfvLhcFRL8cGr7BR7inNzL7Awj75HkbfK8w8JgmWaANyo3pfNJ25GhTiYi5LVyfXBbMo3HiNPjfRau9zYGmb",
  "key14": "3Qqa3bVgfdgAYku1EP6HaLCi7ABkmJAketovFV69VX69iWtiv1xjq83uqUw5iKqgDVSXChTTnrWUpjcvDatJQ2BW",
  "key15": "Cpx9VYQe278QyukMeH9Yir4GyL58HA44T8qcx5FVBvNWq5uMuDxe427RtQw7T7NC67ZPxfUewcyBKfdMwAXuKAH",
  "key16": "2C6noKRxC4QMkn2sgrRxJdcdJQdMGb1XcPvDhTJvYqCMkzQspsGuppskGauHNGpkNxqq7j4pMtVsCqjG5eBqZsCX",
  "key17": "3WrVaUtEniapeXafRqaxkKKHHW2LnJpj6RXbVg6zsY8r46J8mnTa4zk9dM67EkfLRpA2d6prmmyPpZK2P4esxPfm",
  "key18": "4uRiLnysXv2gNjNDgygu5vPMrUEq7aqMghySyEQr5YZ7XwY7BdWZTLxRfKKFazkNjkjAHQepCUPy8pxLGCnA7Ky8",
  "key19": "2hwZzYqFdoQMiwGdugZejy5zYJuWSDCYnzu7Jx6LyBL36sQtsp8qgTYxZfhJbnW3yzPcnwUDEqaTMcb6eF7xnkNY",
  "key20": "2JAydMXjgqnr28VpV1TovW6u3VU8mwFanMRYZcuqmMS18RbFxXs722R5HSCHVJzwGp8XqVJZoE1ezaq7drEZcxFr",
  "key21": "4h7pWTB31oMnidfstmY2YJkiGY4iZ4FriEDqZRMPVjC4nTnauL31Xfsr92NyDJy1AzispsXVtrekxZL6VcP9kYSD",
  "key22": "4tSjLgjxys7JnMsa1XUgmNMKw1sSJWBUoBmwDKES2eMydoLPfZJDGahqxPbXmHUmtbxHEycT9SvDbcEU646TG6ha",
  "key23": "iR4sserP4zVxzzvVyFe8hrFg75uLNpDXPRgjBF7JvHfmZnN97zfbXJWfVVBheXWsPL8CiDPQNqjmEHdSNYwQ59S",
  "key24": "4Z1eDK7SiNDD9HxycsbiBkBtUAYGQFaeyTvdnQCjmTiPjrkutBdx9hk6ZmPiZs5gxUMRWuQWRR8DDf3W1WT6wJfs",
  "key25": "3BGrQ6RmKcTynWL2kW9Sgv3CpSYFhLGh7LFDib5DgCdwYePQxEm6h6FQop1AcXks92FEUeHwLGFrvt8nZoLAzXJN",
  "key26": "3YinbEKuiULeDyfsm8VaaroVYTA58BvapK5mkkczW5c4L5LgQzcskDkLxd8yqLbTBVHtqpyR548XuF31STyH4Hfn",
  "key27": "33C9Ndw5TXasx1SkUSEFNWRn3ux6up3F5hqxiyvezmf9NLfcrsCpYvYFZDQL8wSRHJNRq92Wq9aDTQonVKCpa8LE",
  "key28": "4Wxw8kAHQMdcY8Qq3f5MYTCnen3UnxLzq9SDyiBrrnqa8bkGxBQpSVU9nMri3Ax6n7wU65xzue5qmErHBs7Ue5Lr",
  "key29": "5earmFPwz6k9kURVz6jwyJQHqswpgSYZ5gJY1pbRcKEAPxeZut4bvXZHkfHYiNgwvJ9mZvtCT4ncJ9G34gxKqo8",
  "key30": "4T2diVv5QRZNfLUeiFR8TpzgXvmbpfLcr7yZNC4tKnGVciBwcCTFDQGtHwsHpH6KcCagpsJF3gVXXHLBUUnaYR2G",
  "key31": "5w794AArD31LiMA2X8dcQKo7WFrik7P2fqdkRquDye6sTveyj9uczxK1YdaaSoLErz7ucTabvJeM8XKeiP1YWw2J",
  "key32": "4egsdD9M7qtYpHhXcbNzhkJU4HD75tfkL6rao2Vve77tGVDRVsR8iq8A1arCpMQoJaZByN5QeobcaxSBwYY3MpaS",
  "key33": "Hjg7faFVR1To61GcjdiNbee2VTSvwNApwC2wcTK55MKxyPvpkWTE1jeiDEvJua6p7BEEA8JkftNRn128W2XEuFM",
  "key34": "43pQaEj8AkkcJf7yAaiU52oMx7Bb14cEBKVPAd5BGyfSveJd5AwWfKTCxUwS6i8z7JwD4X1DDh31i5kYYwrE74Vu",
  "key35": "NUKq1LoDMzg1cmoVpe5RRDLp3DM3PfBXbGBVy8hNGHcYsozVfGTRzhPvfJ6tmqwDszrw7VefuYtW2C6FhEHSabR",
  "key36": "5jbr3KGiN8Ryi6nkoN6yVaCSXQB4bMvBq4MshKjsac2qTJFkyGvWFd4v1PMr89RhLtZVBeW9D8N1ovnwfXx9nKRJ",
  "key37": "2mheSkdD7eKRgAo4jv3BR1K78tM2MTgjqALF2CyXFhHELzrQLNqdbgQ1LPnZTLtpGGZ46eequpVb1dyTtsKzFbpL",
  "key38": "4LRxsuN81hnaCpEfgYF5wfF4yPZRgcJt5grXUH7mszG6z9TCTxFEXiVVxQG58sR9W3XANJnn8gdXRQxij3VyfzxE",
  "key39": "4WF8fWLg8n5cmnuKWyhW6jYanVn3G6H2kNYCQa7rka8cmHtaXajmTNgaxsFt86WoF9fafi2kvCCTQwdDMtcMx48z",
  "key40": "5JMdhDJQENaH57fA12g3XBXHrYtcuPnPQGuGLfsjbx1BmqNSh74H6BKDUxkAYEnWjMRodUxnyR3L3u3A54Bp1WQX",
  "key41": "5eGh14knExo4bCdUz68d5JMNHMTyapGspzVHYHYLpSZcngqayvBHzTpicKD5x4a3uG5GkBvjZoTvWUVgKDxeMfNz"
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
