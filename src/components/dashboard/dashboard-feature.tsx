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
    "3DCUiYdkpjatDkCsJ5GtxsVCRZCLUnsyw3k23DJuLPcYoEdkpwy2BzsYpk3Z4dDgvw4ReUgJ6urJ1GHSjLLr5qW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EzvdA3Dnb7um2u5MT76Ly4iSVueGSG2F3nZ7q9uXm2oHnh5BWsy2e2AMVWUQmJHHLD3nb5cZpBLk9FZHXEPVHej",
  "key1": "5qvb3AfQb1nZNK52k8P43pVFKXLPCQkcHfrdf7hyNcwB7r6Y1J7qpKbKeYb1VRgWnJikhhuvcJjKnVqPyFKz1sLa",
  "key2": "52UvzxqMJWeW2cqCiExjK9wBDcfNQ5CFP4zPc5oJpCD42zeMv5m5utKHCnNCTGP8PdLqux2DSkLydXC4RrfGd8zN",
  "key3": "gEmvrx4ZZtE3BbyoT1hWJSz9S7A6KfaSpZuoLL9Vd4355x21PDU21f3Dh9hSyrCWHD7kQzpqXa3gCqryL71av4M",
  "key4": "5w6mTHPi96NtePy9cGmoAWTDD7N8jYoh7hExty8KtBBnbxCaYgwhqgjnunMN8wWUC3vEKLG51MK4zymtygsEMBSu",
  "key5": "3FUrUjx8mPPGAQaRPRJX16od9jhif8EnAkKaR15m7yPVBwuJkSGEfUr2VhrBqvnisGRp9BLc5QYgsAzgco31ARKk",
  "key6": "5YzAMtBK1K2LEhYWLhAUbmHR6yoC2fJq1PeZGCgRbCr8ECYi9qiFRK8MbgHbnMoXmNuBTYWBbSLxcr1jx171h4MW",
  "key7": "5RMGn8mSiEQaJUmiBuGRt6PkvjBq4fJyCoNJXCPkXYWSS4SebXaWrmPPjy5hTboiguLUqtuZLWo9NXP2nFJXWnwj",
  "key8": "3J2XrJbNekopKoBuwJDCk4vN1ukmW1zX4wDnToVih4kagjuPNwPtQB8ctgUmvPYJmzc6eGx9DoVrLteSbPz4YCs",
  "key9": "5pxd613bCUsRP3xxKu9kiHQMsVXFNJ17bsqxz7VYyRpcPzkg4susf3DCxcLZF8ox1Xtux8sc7vocUU2PEcm9X7Cb",
  "key10": "2X81mUAkTcCR5j3cQwz7thFN6421xiqFK77JTwgUMU5Gkfb1ZZXr2zwfwT2AzcngxGsNpAuWmUfbP53qKcVhBGD6",
  "key11": "3xUHaRwYZMdjM2LDPLH5x27odUeeUsHjzjbyT7DbjncEutGKY5DNkpYetbL2KDrSXm4xBAc6viK9HYVhAxySBosv",
  "key12": "2wfjY6gjnWZxMWGhz8qrNQC1e2CanXMV9o3HUgchFMcV4h8ACsWqwqQe4ePtZGsdwpqhib2jXVLjaJxHuY2cDKWi",
  "key13": "4rqAQ2MFBywPMTN5jLyQLCBjAcT66ncf4XaKmV4XM92ngELnymNaf4vcrkC8zozamg3rRdf2z2QCad2gAzDNcU1n",
  "key14": "ofEM1d1jaPe9Aa4GnMdmy8ohcG1TDqyN8rnttCxzYay89cAYd7MEGM8cHHQq7TqZKhD7NzoFsnKSce999zuLh5M",
  "key15": "4rpLun5MHNEpjVYMaZ7J98Pjs7xPPVyK8Z5AD2ccneGeUJf4o3JYT9RRLLxvuWHqXnEK5i4qkd3QP9M7DRJ2fYsm",
  "key16": "3CCkKqczgApZtGzaHyvZaPHtWPZEbigJKS8Pn6NuieiPPsTaUwnpywqFugDtqHypFeATqpGKyVfCd3WLpHLhHDmL",
  "key17": "3LYFA566LkwiY8sD48vamUyZ8Pe5kDhZuF5EetxwetWHcwqs2iMKvJsDXAQ5cMGUNFf4Be32hG3SR9v5v8sQJE3N",
  "key18": "5KDxnBcV7pBdVHBQGutJPxJqeWMtW41RmDTUn7VwynFSFSbWxmEKBhHqFxzi6sySQYp8swTk9NrxGujK677WZNde",
  "key19": "AqwQiY6hfB63gjE9vGszbC4yBuCDMjVLukm3VSC3Km64E11sBxdAhZ5eacZBPwmj29xp5UKrk33KFjaUQ2Jp9dA",
  "key20": "YXzWSoTsuryawv4gAHtYrUpRu85kqvEuxm3zcZ7432AiPhs7k8RYV5QgsWGepFsBRu31t1bZKLPPWa5grm1Te7X",
  "key21": "36Qb3qK9HQfTXiX62zmG2eTddrY1N2KogGM3auULrypUDyEiXs1y4opQaTm3jMkYM7x4sDvoinbTnC6hcNpE6Bg5",
  "key22": "5SUGXHuo4vYXEH2TDSdu8bLA3ADmJPaofFQcL6cd5UNiYGGRfqw71EYuJsZ88iPts8XyTiLEvvhYjxiHPFCmMx8d",
  "key23": "xL2GYBSbt6qcVVaoD2uMK9CieGpuB3MsfUQBFZ3g4ZrFPfN5Fwt6nAuJVBkoMCdqpE8K8ypuhXWMyiXRzTwVtKK",
  "key24": "3hr82bRnXuusX5vH2oEG8YAuVVi1UYpAfuhq2vNueh1kDEN3qbGWsurV5t9FKKxebmtCinMhDPt7j45Mb3wfNMh7",
  "key25": "5ciK1GPckhW9CBNCgRrYfT65QxahuApoBHeaoP4wFHRA2ZSwuUpwhtuvopdAHieWYzkj6oJmDDJEUL2BXFWr46Y",
  "key26": "5uhywmQahSjVzD8Kp5KRF9Q8sakzBA3z1gki3KvEN31Z21CXDV4Eh9R6yXsQFyacpAcfAbjL1tLiGg2G8WVgrkqT",
  "key27": "3cJocZseJiTvjxtew9NEtGuvoMyYUwGnc2PSn3Dfef5wdL8PLYMAqLAZJoKPmnDreFVJzD75YWMSeyCiyA4zdyJE",
  "key28": "4h4qQw1yYy2US7pn2Ap6C8vvjBDu3CRTYUxGwfGwDp5BTmM4HfNC194JKm4N8DRxNuogEimTSBib1rsUt6TuX7P4",
  "key29": "hKgo24bCoyJ8VeEBcdmcGfF2vq9oHhpF5ZZkumPeSL89tRAvB51AtVrVJqrKEVFfMc8KYXSu5X2nTYBCxLD1xEp",
  "key30": "4HHBxoigta1jhMeispWxzNhX2JndboqFPwTrz2X7vx3MmFmM2mvLkSUZ5nfUvLYTFAApyYeBCqwvC6qbQ9xedsx9",
  "key31": "4vcLUSJtQC53PdVj8idpW9qyx4w2ymasLa6C6CX58SAtyq3zhZVhBKKSnBWaug4DtRLyRsR3auBAee2jygcUSqan",
  "key32": "4fycWuuBfsUVKr98pzrA5ye99cPHWU1Kwcm12VRcQBfgnuPwLVSpMETPfCQ1V8CxBMuemiNk8FtLerrVWfr9w7MP",
  "key33": "rpKo2BJ7j7sJZCyG7qVCK1Cc7JrUt2Z8fcWFcg3fMSg9VJBzVnF1BZVLsbxwZW7PiAyTMFmt4skSSGsK55NHtAQ"
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
