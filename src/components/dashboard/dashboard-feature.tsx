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
    "qKsgPfGB7xhXfy8YCgLCEDC4WiEj9zKhHoC6c67VmC7cLDjcERVPD66sXA7pF689gPP4gsevfYaFfg1mrvGHic9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aPYrdKvUgmDSerkMZyoxiRRBNuHX3AzSnbQhzf9jsLM4ZLu68Nsz5uWk5xeWS7YLZo5QXyVGkKDrKn8qqGPNyi2",
  "key1": "8rjZEqyMtH1v26EtAiH5AcZ4q7XXRSYWTHCZFjbC2P9Jq2pgeHq498qN5Zz61gNvMhLNNFUjyvUoqM661ZKDH4j",
  "key2": "D4SUohE64i2WEt2a57oRCJJNoowkEVQkFe1ma3n2vzbfkPwX4wfK3npceAcK3xq8fwqamegx2aK3pGFc9W2Zzvr",
  "key3": "2LgLSdDZdX3DjpgGQqgJnrcmiqGebFTjnaJWWGchLuKJYrP6TVhtrASirCWdim9fG1dMWzAZVV5G1yRUHcvHiKyk",
  "key4": "5XbXoqXXbeMgfMeKFzuQPDW4zhGktGGm5Af4kVrmRBQWrAt6vqeCBaWwrWfbQzai3KCp9Wf5NkjkNWLPrGdPeeEU",
  "key5": "4duyoyP1d31o9yZVitcGMg3sevntD86piWCErvpzMXfM1GovCw1P7ZLY3WvUi5b6MkJsHeKpr4j4kSbQfzmK22Yf",
  "key6": "3Ex1pbqSMeS6RnXccQv4v6rREUW2ecqV4qEcx4cxDYewVRhHYNjTweBhYNhHmKZQo1FqDFoBxLXDP9gBWo3vHCvx",
  "key7": "2XLBuCMgvFXWqf9aymAydHmwJv5LYD9fbCt6Hp1x6LATgnQdiFTLuDFTAYSHtVcuysgRQwnj1WbDbR8dszuWAjHv",
  "key8": "EyLyqxvCQj5GpSMQbmgrVnwvQLp2nMPsN3237xEHmhamVP9AwkferEfrjqFbHFNDwG8KGgVdPPuw8b3rqJizYSc",
  "key9": "AzMPyFmXmQ2P5arCmkhikWK57fz5fiSKoEmTNjZVHok4RHbRWPAjC9RzURG4EjJQFWf45qTG488ngbBd61i1WQs",
  "key10": "3US9NP7VRsuTqf5duLsmT5EH1Uf1BcdiiQZcYPamxVUsk4Rfz7h7jLVNDaU3vQfxsy34B3bpoog1bfvxfZrxYuDt",
  "key11": "5qykeZknAnuyprdjNUgUMJebt7V46YLj4X4cwD5FBHAU2EguhFY9HvFfgkrgTw4MLHbagwwwGa3HntsmPNJR5FxR",
  "key12": "7f8vCifRLuq4Vcpm5S65PLqKto711syFY8WyztEVdG7RJbBezHavCZTG9uRy7unFtipv98Wr9XA1H2C42QF3Nhw",
  "key13": "3yVMV1EVkPWBK6NRQpUBpt8Ce2wzk3VgnVFZQaKVqbV82XcXGHDryqemCmmJrpG3Nr7sTRcu84zkSPHfg77Yg51i",
  "key14": "4jUXc74UQD95pm54gH4k8YDAsLBSoi3n96kyweH8gopmpYEKz6mVUPy13em8ZuzmKTUKA8eScDDFnFXUvikiNPQF",
  "key15": "2WfBJvmSqQx2o22M8FDbwrggdSw73cZT2UwTWbWcqVhVDgnYwgJQZKjpCgarPV9vMLcSTZKeBMzf89mmY2SW4SJ3",
  "key16": "5RAcxKa3fifuCD2j7NzhL9keAt6JAXnDamFvsbpxA8b6wQrJeZktu6CjwuHTk5uZGDwHWrVB7avwCR4QUriVMJoW",
  "key17": "2FG16cGanUY7Z9LjtqDPzBMMDdjhT1qZJqvSVw6dyjmHs4bX35kQmzUR7BprErcLthAzj5c3iUTbN42rZz1bHWvN",
  "key18": "5zEtGUfQqqStjaLo8kvKnmhPJmWj7BF8iUmmi4rmorryFHhG34oTcjWXjSBbqX1fjdvKqMiTbMYbPG4JQVZjALE8",
  "key19": "61o7Lkmh4CouTeAYigNDpaKtztd2rgb6Z8ZqCEetns5EtPZrU95iR5q34CpkTGE8cLbV1HbeXYMZDDa19cRePQZz",
  "key20": "2gEWLm9NQVXn7MhDCES3AR2RZTJ2XwiJSs58sehp9P34Qcn4zDoM9AYyFfpBi2xR5CHDvEvSVMbV6jmczdRaBUob",
  "key21": "65pyVPFf7AqGTcdBrXAnKrMwGzKgR9i4ZPmcMyes9BLZJd6r6xpTGtgjyLzE33YKSUG3AUQRzW8HLmPNtFGSWDWv",
  "key22": "2Q9ripvSuepuVewBDSu9nbDDsTx2KbCZbDgXNoCGwAJjtrhDg83kebDJ4XLSH8SzCRTMDLjN4sMUk23uZ4fUGqCu",
  "key23": "48PB1AwmWyXwxVwp6maCZNbqHaUGFumNGXcVNFHbodXZvDymNsTpWGDo416fU2dBrmdBimZAXhePHK8H291tTtVv",
  "key24": "63J87i8ZBFCfVVFx7cZNn7KAnBp5QwKZYAwgyTAjFmVnY8M1Jy3NBEXW5EL2EScxaJRdFqAwCMgNkD6QPtchuDGz",
  "key25": "4K5R7LN8EpkavNCkRA28nwQR6qzqynsLAb5RkCaRSSKm3UmCt83xQ5txy9Akq1t6qLgwrVd4M7drj4FQZbtgsibb",
  "key26": "29dFQv4YCVCdzzy33p4x4TtdQa7NaqAziQNtmdDt7CpPc9E33CzHW8yr57xeRu39Nc3NbRn27AjKKEd9ebweLbEL",
  "key27": "4JYzBqWusUB57GmTKmKXLVeG9rgMycWC1qS8jJmtY8UfcPDfwDkdeyPM31nGfFVJG7XbdsTdwzhzSPBzRL9ifkoq",
  "key28": "32Sq3KYD67dzEj1SmNhiTdqeQMK6Z9arsbLdx9wz9w5Absj6QJ4RiffmEnHdT5Ti2DmwH6UGcmkdAhtSWAvCxpV4"
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
