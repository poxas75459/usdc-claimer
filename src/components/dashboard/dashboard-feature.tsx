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
    "3a6mX4MvuqVwRdr92Za4GmbonLXYPkVBgJuzqMq3bksBvcy9m1mfBZeszPo4xDy6zxhQ2WiQCEwPc3weEeTyUnSc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s2XnXJX8qXojqu7NZyiimF2DeS6sSqE7ujH9paUbbHFm19BFbWERmNB2nvphCg2vJLR6FnA6rSp1BCHGLdyggku",
  "key1": "2BEc43y6JLDXVPERZcL93BmGSKo2ngcAyUMbbxrgwxucNKfWBymMraodNVzbmwYdPTLmswpY9EPgtyc5W2tGpSjo",
  "key2": "4oZrpD6zCxR9MnPDsU633wDVPApeUcC81LpdpEUktEhaAptsYzKgD9E5mMXJb1kPscikarEZbMzZYP61iZu5MuXY",
  "key3": "4CfiKiMaS2ogFCB2resRZs6nTYfj7LNxiqJmiMLv8xMVszw98tdpbyQVjzDV69dHTH2ywkjhhtWoUcMAEPXKFawL",
  "key4": "5mgJNeBTGPHGT5kiBaGy1fJB4WLKmxhjqMXHRDvGF88he7bmsRcrCsXNgGL5aWsFXjWYVd871xRMBSzeuXnFgFD4",
  "key5": "4A8qSGSRZ6mparc1KdX2PPjMkZWy78xwtPdm8aW54fGydG6pmhG8rg4Me8SSNNWJcEB4PCACkx71nCHFBxboDGJE",
  "key6": "tsKbTBL4ATHva9MRZ6ck7q6bjc93w3oXF9LTBLbMQ7QvTgVfKmCNUvAgCr5EsRdZVuZQHr6WkDEDp8cZ3ngVwtP",
  "key7": "4HKJpwMRh9Mnqb1Fmpnj6SpatvvsxKgMZtUfywzQ6Gn8BYNeL4Twpyq3JWHYiWiomL3PJjhDC1QxoPN2ZVCz9SaV",
  "key8": "ovKnJsDFTfRpZF4J9RxZmWZ6Asqzvswoi4udfFSXbssfdnCjhA1xfdVrezY3B6oRsvuKc7EzoTFz6pLMEqkwLZu",
  "key9": "2hPueBatj684dkkbsdQ8Rp2wsiVrXdswuNsuQufr2uMsT9NBMquqLJ8nEBAEWonmFrdSGghSeqwN5NG3XZrv53Te",
  "key10": "4HkFg62HjCSLUFUyfPtgsHngJMgS2xuMBujfgTjtsLjTngg95yCuiJFAq4ToRqN5NHPYWS4Wnhj9V1pbNFomxcwe",
  "key11": "5KpEhchLTUEbdpcL2EGc6wMKn7bggxjSyHWFq6YVGT8XoaCJrB56V4tyXTVybiGsVJxR4YFSXDyuBTLDhNQnxiKR",
  "key12": "2fFhFSfaxPcmxVzBvrBn9seM3ikKwPkVBYojSU5RNnVMqRzmKjMdEiyu5ikRYyYNrSDkJcTTJSF8MKJ1ha8akxsm",
  "key13": "5nsiUYAKFt8tr8Q4Ant2efRrGqtnVxjrRyB4XqAjHRBGX7PRZC645wKGKSPfKBK2kFh1PKNnxHDJhEu2eLHetTTc",
  "key14": "2LHAV9gqfEEqUwuqd3LTWXryPYwmx4tVPScP3Aa9jxKtKnXHHPhPN2r7FqMjGbw67SyaZaqQjgDF4U2QLLevPZp5",
  "key15": "4nhsV3moiqcrHtieu3yqyPL32uiJiTuCBxd1SHAHo7JbZZZAsQzkrW9LT1Tj2BVcxrt8uPa1nwByxvrzNbnrTF1s",
  "key16": "4B5c8bzqnheggzv4dtykA3o8v5JRDwbkLBXZ9vTQf1e42ZMuEyav9Ccf7s1eBTzwNfnjnTDKvgXRZJPx1QrxKjC9",
  "key17": "3GBsHSHqq3JKfq6xsxYYWKE1e4ibeFvZSSUr6mwUu9FohGK3rjxvNyxsoKq2R4H2GB7Dnaay3eSLYnuWqnwgSn5y",
  "key18": "4HoTmrEKZaaN4vhYnwpPaVifEXnrxAfdn4NDZND4wdqngY9FcFHc8BsaGqSiygk467BDTZ3cE5nmfSRz8bmjvJyd",
  "key19": "xUwBtY8diRjTEciUHoGDrGwSrwH8WCLjT3rTpv8NSLAx3iYjQeoMoAj9nQajC8naVawdFzLuX2MaryeLeSJ4LUN",
  "key20": "5pK4PYg3ET3eipCv9Gz3vLtGV7pFhHj5UCphhyXnKzEr549DH5cTVMNqMgEZzBktBMh5mBUi79CthfXiHoPCTbwc",
  "key21": "51gCYxYkRD6i1xphvD7Pb6on12wuarkURiUG7VYACrmpXmuq49Su5gDab136EkhiBaCLoxjzrSo42q7FYFt9L27R",
  "key22": "h2bxX15p575gqhtcBTgWRGKRxQSieTcwU76o7teznYT6Y6FBgy4unTb2pJEywC9VzMpdRogExJsFb1j7AUvtf3K",
  "key23": "2suAyRtnxQDSQu2B7KhWgALsEFpg4Yppsr4Bn2JbJAPAHGzcd1wxCFxFwJtQDFdTdXzDz8XzKUJFS9sN1PtDTVxn",
  "key24": "4kxK7xZkNRgz1XChsKWYK4HZFDaAsx1KYxKmEuWaF96HFcNfcg6sYQiGzuPPeZd8WFoZT5VfjYwFb8jcxLmPLbDB"
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
