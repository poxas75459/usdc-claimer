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
    "5uoPnZbCp8TXwtRdwocMuRs2ZPbdyo4yM9ePuyYnTDV7DfeucG78ffisa9ZQM68xZ2qs2RcCUhy8cTkE43cne11M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AdT3fRCZjdpdquvYRkzFw4bwv5zNTvXTSsfq9bDYtvMAGeis9ai7kvnBBbJGqCkskDsuPNaGmuHR2k2MEvj6eDH",
  "key1": "318B7jSjTnHunYX4YaQbxLhDNdqgnfSjh2pcs9zjQCEgsoSvStXPQTDxJv5m3QtXpSFoynFkzSjDjAkAkaLyjheg",
  "key2": "4mJfxHBPGeqNdebiTGbZ7yzpHSJy8mrERo8Me1he1eEcqtGiJGfc3uHzZvPuYMPCnk4FatEDskd9Y14wYHjP17XE",
  "key3": "2J3rFVtmeWq3TCJEkYRExCCUdU7aE7DMn1ySnvCgsw5Z8THvCJowkwaAPjpKRVrcvT4Bg8SUyk9jd4S4nAWWvpBr",
  "key4": "5yNcZ29zaXYqq4h4MWx1WPHzQpGgh7oSk8uApQMiaAkeoDH4r5xvgiawLXN7ZFmFy5cuiNEo7ZTzhzZzAjnLyLDM",
  "key5": "3zRcbojFWbziJ5WrFCst5E6LmUguSVGpgbZSz6Db152Xw3QtVTJkMnhroBqWgPCnaD28qMM2mqS4xo62GuueqKvM",
  "key6": "2jGAf3ADDHxjmR5p5m7cWpZP4AyiMHTGhJMSik1UUGbJs2nRuB4rhvdAWS1RovkvNBBQwidA7RUy9Yp2EecQeUqn",
  "key7": "4Ws7itAnZktEepaJZ3nhPYXvTxegALJKwoGt9CHoafkGqLiR6fsg6vzmVahmjUtFHRLEAjEVNfQhCX61nvg6wTUa",
  "key8": "j2wRx2H8R1dGFCUK8ceEkoTScc3w2v7JAiYEwtPQNqK7RBuMtGqqSKQNwNkSSrPPjNU54FBq4CdAM8EvMMAhQng",
  "key9": "2pm4kLFPGDDpa1j2DXmmPg81E3NjaCz9Rq7e3Bax25ViVEY3eMoRHxP7DUJJvFAfPKDwtUUu9pz1AVMnBzMqqkEE",
  "key10": "2dzyHhRZPMn7skwkpfkRQguJnFEpF7pzjKZ9GVBLtp3rei7tVw7dLBo22rH8vLvNddoL43wiCefCHBUfJDtWc1Dt",
  "key11": "2srrWmUPimv2k6Vve4iLjQjrkgx7PudTw7fxXiGo8123Fxr6B41oYNMgsk1FZ3SthaWVnuxhKAoC6KmQ2zw8XQhb",
  "key12": "iWEKRbJh2AmfqXJU1S2msX68QK4ntdz87Yq3q2eit2chBaEyheMQnkkznn7mrBhxZuenk2xQE1vaGwyjvBSyQjT",
  "key13": "2e9P3h8cxvbGvKSsA4wZP8ZupbcDGETZtq7oqXbwcZrNGtQ2v3VffNHTjafAmkUbHRxNDP5DgLCX2w2xJWHVbVSy",
  "key14": "58hTgaf4ZS3nUK1PcmjdHsN2HAEDgEt5PabAQvZPik3sMYJahzscynCeF3cEBnNsGGoM8xGqKNERQFRFVudW4M7C",
  "key15": "4PQe8vdFPmz6iVu7af6xK7JZJwkFNpyKDW7uCNTF5GqWp1ZHiGD4LHmh5weDvBwiH1LSY1xRgDNcLaAYQf4u1yuD",
  "key16": "54ZHaykYdgE7R28RqoqnpU67hzUtqsLHpCF9MDb7ppd21Hzy4txb5Lddhra3goaTaUgbabvepjGTzeB1M6PDHEuM",
  "key17": "5Yzh951ETFmqaQPip8bVhraH5o4juVjcduZwZP78DStUdJTmtVxnB2GCJL29RCtmzv2vVgecpUsq8H45Lethi3UU",
  "key18": "4NLt9gzhnBTQ5tX1BcXLQFqWoNmJHYoXqYV1nyTbNxTmNEiE2Qcg1tzpEMYiyKhqEkZbxeAYimYUuihCcGegU5jd",
  "key19": "4fA2EB2kxwEcX9rt2VrDRTupuKf77RAn9c46HMjQLnk5UFA8RpzGWZp9RGASfSmijzmMRqb226iqCmBiirFovZWU",
  "key20": "3SqcnREAh9eb2MGXVGaHagynWdvKsQF5KXPu9LqZpjtgoKiUgYYFvsycS3foNogbewrw8K59QyqU8MPh7eVnivbE",
  "key21": "4kGLkuXUJW33GWDtJYAi6JmqmM9KB1CvHWwE5zk3eNMe5WYtri6QGMDp2GqUWArSVnMjgPfP5jW6y75Ert3uUgNY",
  "key22": "9Bw56cByaSGUYSEGfRAiTK7Dm6xQ8SEg4g4Lkw6ZMACeHzx8twpU9LWLUhU5ia8U1CHT4u2mvybcpsrJpHZgVZW",
  "key23": "37UzoVxJsc4nyQmyrxUykwG3zUQ1xuf4jin9kpHVUpGE8viN5EK77tMqtnAkux4S95Rcy9L3cTs35URWjsSJDz5u",
  "key24": "4TRMtToi3MwcYc5B7koVEFDx9oG6KoxdeUFjAsAvn5rBtxCjSiehmBaQg8CVM87SrusgHpZMNusxBYkakp7P7YwB"
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
