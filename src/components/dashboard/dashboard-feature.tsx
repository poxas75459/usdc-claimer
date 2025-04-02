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
    "hXtid1xHcP2Rj5ssRoQLEaqkYrP85SMFaQ5tmGDDgxoCb4LnV6u1p6M84Yezg445pWesRyjHATzHze61qi59oWf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ns4VxPFFCxLiuw4aQjwTxaUXnnCW18gqk9M61NWQYiYzT6dJkB3ebEcQVWWpibJ6RdLt8AUDRw66q2CDyzBviwt",
  "key1": "54KcTXMueYV8sUxEwVjQSwKJsjVQSiowbDdrfUtHWLnHFw6Z4HA9U5LNtpdLsxX2p7LJ9g8hWHcjCYU7mRAFjVKR",
  "key2": "2qeEpsK1cc6kXg8kte82EGQWBzUpeTdTpZPct2YYvqFcwcp7UjfYjXWHm322HKBVEZncAUfty2SsSLdqVxZ24EeU",
  "key3": "24CwZUy1NQmjVfpvMG6rLD6miiSCLMyvu1Ru5toyibD1jyrcRDHVBQmGJ4L8gnhRDtBG7te86HUTbgtpAamQkAVt",
  "key4": "2FpQMhtDDVEVcvnHdjT3W9Mz7JtAY5NEAP16ZH9D8C2LWsZeQWUPkE5MDt4wBvYzDE6FwVQZMXsYTcQbbBaU86r8",
  "key5": "2BstnDPTuG15UQM1bSSN4yKp1PxTYuYM83ftSRrjDohcGxz6KZgjWRjECgvQN33VujWyWXrWFtDucTstiHkKavkS",
  "key6": "4zrhWaRutg14MUHfyTvSmXAHU2TNrTyaxiBc3Giy7EoAGF7KLeXmZcEGYCyteLtycpdXenZTicGvg83XABLJqEHQ",
  "key7": "48g5MgpPRJGYTMrBATo1MqnVCKYtGLE76byExBC72fEjMMovuvMhYCVwefHzYoyZTMMZg7vbqxFPDKpoi9DKhRAj",
  "key8": "4pybU7NMMmPWanSyQrcej6YvEZRcYUUeuVACyhRLjFfGHL1hCKhiV1b65WcWGjAqd925GPUaXPiw11zTxxpjScYS",
  "key9": "cWFSexRhpCugga7dN34sTTkNfZPu9VGMPPaYfbkCjrgVivP6FMqLthHuABsaw4RdYjGzKxgVXWL9ESU96TDeRyR",
  "key10": "2tGD1q8ShpMHBCDseo33PJAqGw8vagiwnCkxXhym8gngZXVZ4i5d2jpv5DZToLWeqxawd45ZkFUMB2rVv3ZfPd6X",
  "key11": "5Zr7fZRwoeb6nemX7QsJoikbjLjdn3Z3ZVzeuAL5kAn2R8JcdB9fax33Zk4UMEhNjnLHLt5npS4GjpBUurNdAuKs",
  "key12": "4dus8Lqn6WydWGCWdr1KXxk5n1LADbScFkAuuG6XuE5z4nbMcyhULJxNFdiHskwQBgARDudMnzdZWrThmyT9xL4k",
  "key13": "57W56ySydaYaHHb7BcwNkms9uAV9LQLeTksVGrZtr4jV2q2xdDR1yL62iBVV3ZVANUTkqznsntLrAVSMXN7VXjhs",
  "key14": "5DfCQw8GbJu7ux9GWgHqo95FQXsBudaniz5J23SLh8k11G1peom3W47dmmjUB3EgDZqWG8U6odkKnPxk8Et1zLNz",
  "key15": "54r6L2CiLBtYnG6MD5EsLCVznrJUV7sK8JNrCwsXKwXT3RSsUNdmeFZEZhuhzWU7SYmFKAZ6DQ9UbZneUknSW1bv",
  "key16": "2L6Ew2iqJpRX71xKLm8nEmBN8GTyvMxNLqPmDrFgFfcFy7iqZzW2YbnnF75anvYwxyWNtPqyKWDr9bH6d6WNUsrJ",
  "key17": "4uYwLYYVnRquXhjtL1wgxRdE7vypPETHnWmM8GA6vGbfFTHqv739zSeZwREnr9X1DswbWrrQsNc3MMyMGKxwp36B",
  "key18": "36cXBT7Nw1FNfjCFNGn1cXcwGbd9sANSUnN3uRSs4xXkvSkLhFLiFCHoHcq93febBevCcWAHLqPjfVgtwicZCEwm",
  "key19": "5oiXF4Bn5LkJRkVzBMXeB3RTo2JxPtQ21BPjVf7S1EpiJBDPYpe7BSiQjzTJtcd6o6mzrggq9ZPFmieR7qMfa9sZ",
  "key20": "2BNPkWgsTEgAPx6fCahEX4fjDTh4nj3HEiTZfM2v4beRanCG4fHyDz8PR3mMhc416GHjz78dtFmHirbtcfESWT6i",
  "key21": "49epmrVtJEDA1k7DtMnPeK3RgLexkfYhNCEAT1dbkvH5VCRvsJsLzELK7yNHtyoBSS81unDWAq9DXM6MZCFjCsF1",
  "key22": "jc7LfaasGxJqcoBeuGYSoyLFFVAtzw1hBGHoS7hak1eXZvuJg43g3T4C6S4WDeVB6aG6KHTqgrMfnA1DMTEEVaT",
  "key23": "4ZFyZTgSMstEsSRcrzk5JStAxgZYgJ4UfDSvmtaKxncaz6g9oz5X6oRnWS7uuuM1MGk3uB33JSkk1SGTPJ2qME2p",
  "key24": "3PJPx185wts1ZQKGhgQdxNDDVCHutXJ71uiWEzFHKp6gAV273fzD8Zy2SGz143LseKEXR9R47Nj497h6tgTpPQZY",
  "key25": "3ZCeoRWiUQn6cV8ik142qTt4YB1HYyhy2gPFYRCQpUVooJ4EtRkNgEaGrE5ju3Dx5jwhUrR2WUPhbk69o9rxauUY",
  "key26": "3CxHYG6n6GE2zXi74xeEByB7aAcf3T8jZCd7ThKwcRxibbg5Jz6J6NqvTeqCyWMfSmxejkth5iYSh5gp1m4LfL4E"
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
