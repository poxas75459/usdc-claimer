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
    "3Pa9DKqkQAdaiYcDtZvjaEcEYvQdzSc9D84d57iVgvdD9BBFKwQTcuJBmjjvrso9KxDQjWNYjn3C12FDN8iTXxig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xg41uMHgh8a6sPVRZfkcemxJxoGQ7qcewKHK5B38X6swfD3CpdwUoStWVx8qeXLfZb7hMoJsv9JPRmMdgbHGmad",
  "key1": "4pHGyrgh6Qdk4Qao32vxer7ZMoWMEsmUZguqrm2sB8egi4EDBQiw8bCULfmaLsdvqyu59DvTMYEH8J92rknzCbTK",
  "key2": "2SoAET3ygVYhSrS9uvAdMFqo8cwCh7rLJ1b3NwJfhYs8UjUE34fw1nzhXoqxQxd9Xs3ZjSu13R1kF8Thk66NSRog",
  "key3": "2SxkM6gQ76PQBRcPGgSp6fur5a4vDEVpqfjPxLa3Up2uAAmi4eRPvKPz5QeT7pJimLeToU2XnU59tBegmb5NkhhK",
  "key4": "2MtFSbmM9noewqH9k9dSpseWmitjkekV3af4fmJh4EzTwMkcfWj9u2fn7LMSkyugERo79QujNw7h6dBdvVNc78S",
  "key5": "2W9DwNKBciJSs3bck3bR8dZvitSXn94HW4ATjBNVGaVTWiWGAVKPW8MYWtXzLXNRYaBUrEJdcraeve8raPL6piTo",
  "key6": "5pws61kjZySvXxjDKvLthodHPL7Pgs3dLwwkW7iVTh4PX2xg6iJ6A7W7v8ZmVHDKHQySqktsqVtD95gRu7nj9rNo",
  "key7": "2DKKLxwm4E2A66CNiYP3tUnULZt7EBdFVnvoHffz9H14u7jj2hXHpYVJntUhrLD1iRxr9WuP93Yh7eWBoQNswm7W",
  "key8": "2EyKkaxkqLLUefeyxQcoiHpZpKNrhjtvCnF4gYy1vZVwCHQvry36WW8WySraZvD3J15kqfJkTMnugRgz1nh1gM3D",
  "key9": "Z2QBZ8uVVpRwVCmUWQ43RuEuLkPQSqzoBmS4SFRakGwyv9zm4eJgDeAWCx13z1HpR2xm35Bk6Ev1m8A61T5W2Wb",
  "key10": "2oKvkYrLUBuooJAxMEzCWwk3fNKg1L9nn2PsEcjZFCuP6pBePYCb5X3eyuasaveTeoC2cWMwu8JoJVhiraRGXoqo",
  "key11": "4vpGgGqqH8guSfjKQZFdAxZAKRuk9x21NfoS76jLQR3itKoHdX5bUJb7wCaNZB1ejTrgudk5dtzHL6nv48DNFzKJ",
  "key12": "29gNjBrUyYprpmhY3eyVu3zvXKD1PmUrQS39gmb2jJyzcSebFxHA2vC4YUxTCWHQjjnh41MoTQCE2Tpn4TGPsTKX",
  "key13": "37r11x7ZrCTCrFm75k2BYYpwp1J7ccGoV8NEZ5pZb5i9juxm2iMnAPUCjABZbG12Uo5bPMPCeSPJBpmjrSPH7dTa",
  "key14": "eKvVjrgEzFvxPVXtWHEjx8JoC24cS7hA4srZMgU8f388MFovUbjQb611vnEs2aS6T7TLAHaZyN66aHgeGrB8B6x",
  "key15": "4gT7xPHqyfUHwb57DyWF9rsEZhaiUyQLpcCpviNXGXFdEd89mDC5uvKoS3ipossmC4ACY184UbUGZuzRyBdX6PBu",
  "key16": "5gxfLXzNmLk36mKeZ9AsFzfgnbUdehTbSDQZYJUPxBa7wS4tKhc3grfHRyAGW1H8HShDD1v4a5J1ci67xZd5aidp",
  "key17": "3RYEa7G6nKKShaXpvBnSMcqfoaizH7Xiu4LbPxS2QRRUCfyTEGPwP9tthysYyc88w3CossWG9E5mTTi9vjCzNyiu",
  "key18": "64imu4TMHvTgdZsero6o6qn1opwsSXZU9zcYADv1X7VVUr4xy98GDfD4DEiyMs5oWWP4Anx1peRkjknGNz9NJYXD",
  "key19": "5yJeXeLzYGCWngcKM1P5rsNLEhQaAdWvd7KjRNnFr2WBxSLuMmPX3aMqJLPSpcX3ysFqfLp8w6wzX1BBaUbcjCs7",
  "key20": "5L2Ym6EZZwYUrkxXpqsdcC5ebrQQHHtc6dMJs12WsTyHWhGhmQ1QYPA5i7uTRndXpSGmVnfjCcKMasuznSmNah3o",
  "key21": "3Gg1Bh4ao1bKYCcmDNZDUjYQQugtm1tV1fbyM8dU3zqyXYMFg65xxEoZHtDfbviuv7NWq7u2NfZ3pY3vT5KCiZs3",
  "key22": "5WJtDbrnTr33q7FoNESr1iJKNgTg8PHqsBDktfTGdDSEoK5yuvK4TBvr2sSYok9GD7guuRT14AFkfYA64ejbArm8",
  "key23": "5iD7WDTZaFKi8Za3ArTfC23njcf6C8QcDy3EXK8DYZsAYiEq6F5DGEVVKhqYmTKA8C1w797NnsWbiLqSovy3uvY",
  "key24": "3WmWUdaouqMxDUUtg1FKDM7fJAABC114d1NMvzseso31ny9FjMg2TgomTcJE9m6dEhW38383igJFCNsT7zwo2JAs",
  "key25": "3vYYGwi7B1AobdjvnLhzcSaikJKJTpteCZaUAyU6RE5AADPDQLzKECu52KyGregcdk14xSYX2j6S9povQxh4gV3y",
  "key26": "3EcQWYDnYNJnBupg9P94BkHwzvDM81FLKkWSRuqfGEShgCrq57VzNsgn4zHS8Nkr1BDmWFGYhc3ZxMBgQFKRZ6Vg",
  "key27": "5jqhZn4amz6Rho2b84RPdBJNui72rZcWyk3fECRJVM4V9duNv6z77yk1LG468KehdhNLVZJYdEDKLcVZ2Sgxoxat",
  "key28": "3dDYCW8Yby3m4f9PrZWWmqZWA3adStPqhSnV54EtD1fqMCWven1jyDRMmNDHAt4vurTuGAUDqDCCUc6FEBQs7jP4",
  "key29": "4jp7wY1LDtqnm7B8cWZwcJEPoTHMnGmuAYuenrpBagmighJYj3TMQGJrqW3wknRV19snLuHhff3FEGJiqGffhzbQ",
  "key30": "2Nejg2ynKoFPR9696d8ijncLY1nFDBH6VM1WLqS52SDFB76z1S2RVtvoyJRXCgru3Q8cc7CvzrB3ZseUck6DhQGM",
  "key31": "2Qw8vsj6PTTP8J6buh8b86ETjr5Fvx3FFVy5Ue1GVjG21seqVgXvqgMEqmxHRVhuagLpRWCNYqL4Rd34daF3VVy9",
  "key32": "5Duek3yZHhgF45DGoSQHoJJniF6mMtvYXLLv2UKS4nne98KfEsuYQqRfSvTsZufbfdvnFZqs7zcVUAcFr6n4LaMc"
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
