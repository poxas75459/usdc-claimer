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
    "5pjUrRkmDCz7ZYvssHtjkrpWzwjjnYystfqPVF6xhthjf4n6WePbyg4X9zF9BHdQcd6tuSp76bvo89WErBYPSrBG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KcUB374QoKrJ4EEs49YBz5jfUQe4xMCFtpmCfMaUMc375hC8n7F7nB3TzYo9XgGkDpXANUR6YQsYfJx5VatX1EW",
  "key1": "WxExnpJoD1bmFgS9YjG2a2ck6BtP7CxLyUamAB8fo56vf1hFRWthbvJaNvzFTMsx3vhmrjnftjukNVVWxxRdSGP",
  "key2": "47bkxPWJkrgDcdzoMBGjziyMuS4U4kZqCv95s7tiVmQAtdhCoegomRi3nGzUxkbBbL2RCku5Lhxm1zgPqqgJLoNH",
  "key3": "4LwxQYJGynXX1x33jQg9gKgQ3Lqvxk6TfNB7HxvhX2UiUHMk9ntG5Gb9PftKhKT7WEXmwj99mmqoi2owFaUbhqMr",
  "key4": "4hhZ5MK1BmZ2YQrFwUGGT2C5Lkx5LF4Qp6uoEnz8cr4fMEvTjq47ewHCaejNAZLqExk38WN8TYwUfkihVqBhUipK",
  "key5": "5sX74u26JkfMdtbKE5wseaB7hz9x2uDe5wm7H6pZ6Jazob4s1uT2bwRRB5xLnUzxGJi1Zjbo7om79uLR84P5pFCZ",
  "key6": "wsCLF2o9rAxgpNCYXYx3X4XwnjxACuP3Xx3fg75LLtL1ovo5LHuR25AYk4xm4AkTrcYVMZDRfR1BKTMoxts8GSz",
  "key7": "4unQDWyJq873CiWRKyoo2huPL7HzDUG5Tq2ukMtBBKSytDdjw18BACNJV7gLcndu1mRtMMPeq8pUU4SftRDuHRHZ",
  "key8": "2KFAWqWsdeieRxKqWY6uTuBgLTe7pcw4jj6BAmBVSqiQUS7U6p7tLUr9RRHqoqrVjUxjg18PTmTAB2SK5KVHf7x6",
  "key9": "5MpggiV79zxHWg5D5ypaCAahJbHEEMohs57CQmzZd8AWMLbM6uu9fQRZujahKcTSB7mxAPDxXR8GPwaRFrb5t6Ne",
  "key10": "4iA7KGp9ZsbzckY5G5Re8sTqopCVfWakPqUYLi2A7C49xFEcUXZEY5VrRZfJx4CMAhgKuN77mWE6PsCjRBYH8UQu",
  "key11": "3xbb3F2hTRtzFp5krjZEgxKkQxkRAW1XZiZYko1kNwoSabYfNwtYScf2HmBZkBUpVXnMojLePxjj71mMSGr2PnU9",
  "key12": "2jfEMydVN28wFAqsPMWJFk1tvcNWup3H7jsKbgJj8bpX9eT927vAvrFKKi3TKpRM94wytMfqzmZQxBzEaRx1JatL",
  "key13": "4m9dXxi6Ymj51N826bsb7BDjnux4yXcgufPgmaCHaKDMSHubNP8z3sMVVUtLoN7FT7cjdpGy7HdY3N2znctbpkUe",
  "key14": "5LoRuGAmxcJimXkmbh7TfdQ22dtn212fQ4fjCo3GD3cqHh6X1EQ3AiUPRrokjpQejCUAwoHCLCUsbdTUE6iGx5xU",
  "key15": "5cqutFg4qbyV8c3EiWyQo1sWvS2ejYHqFwpck6Ykduy5NXr7g7b1ox5Qorxk791nCkybfYntDKtDeMVh7CDzVQFe",
  "key16": "2myPoiuF7tF78akDPSMDaMUwQfjP2yDpjXCtULoTXE9Z1Wbs3CLm6R5RBbv1iz17P6HhwZ7xApRkGxwgT7pvhHcW",
  "key17": "5pdnuCREDyJXGggXyQUweuWSknJ46Y5JWYYuYzzGe1VCFNbpXehy4h9dS9hTQ3fHmcp7p4rzsp4fLTgSo3mE7oRV",
  "key18": "cTh7djGSEzR6g7bAcorWfug3SV4QMj8DhVNaUMJJGxtmNYfpkEv5Z3bahnL5EZHJPfVTFZMCv8kgVQoNhypNWnB",
  "key19": "4oJ3ib6uUCx4vyosaHAABeiyZdeEgnXM6w2ZLTccsuZRWwyH5YU9BXbbThq2qQ8uxzbSV1RnvKquRXKpv6V1pmvK",
  "key20": "Q4p5TTmzQSzMia5ppbAa1Uw55LvbP8o3CkBzzkzYfhT59NHbCxhmqNDubfQgCitvUDx2vyQfiVnreWhQ9BQPQgC",
  "key21": "5uAWpEcqa7UwEacZcujW8dmo6ETvQiRmLA25mhknA1ecxShG2iFCFQtU5nseR3c7XsoKgex39oVAkMRcsm7GCNU2",
  "key22": "CLE8aJjXcbbaK7739oJa8Jj4rrqDxy34ePKZQLb4e3uvCRqQpV7k7P24xTJaGSCGvHf93DXnmnDD1aK6EmMhXeo",
  "key23": "3VQFY6c7rzBVcrm7WgbeoTMKsRezcjQjKAwnRtp1jpDNhNBQ44EbKaKRkquMSmWkdgu2xJ4VNp3ScRhebUhmsBxf",
  "key24": "5ZiDBUvQvBWweXZLmV4VNq48shPtgJyNsviQEcnBWc9XU4SnveJMP6Dyjr48QykyywT5S8Pv83za9oDCPVpu7bpF",
  "key25": "2mqaDdtzp5edh6ZNQpFVWfGaFumgnNgwnQX3QKRFS6CAuKucS8s8TCbggsSnFEub6Dt6X7jTA8cShsdgYFgVR5ti",
  "key26": "4oawccjdXX1EkzuZ9WxWBLUWjFrY9nykpTLnqgkpXeBgWYoUwMkJeUXCgFdeVRSXbzyFsRVuAnXzF9mtxpfgma8i",
  "key27": "3vQm93rQW7xvF1nrATNxr25EqBqv2Nhd1tt7cmRinLtnydAPeXVXY5NiwuLzwz5baifiUvcKnWtLZXp8XR4wU3S2"
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
