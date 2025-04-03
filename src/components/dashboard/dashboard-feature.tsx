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
    "5KHiM4rKscSMavutmZKkkaSA39ixsgUPMi6pSeCF6DJPyerg8WWM6me3WheksaDdSw18G6oY6biL3M432nDc6rxW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HTqdrAMt5DvuygqSGS7BKu9WNSEY3syY1ahFXD9aEymDJqoqGsbtjbep2TcPk7J1hqKHdgURrQAuQkkzP8xFyNr",
  "key1": "4B7togfWoewEp4ZuMrNkSVg7bMn7QX9ECNDUBdxD7vgmjoZk1gb4gkJyxVPk6gqJnQnj4qNPycZT5AvJuzs7AQuE",
  "key2": "27bfUmnBFy4PZL5iaxJipfENvAMYmHSrAwa9BrDYrcG9zMCPGsca9cYnSziTxrAW8xvJNSUqHx9JWSApMSt7cLaP",
  "key3": "4cKqradMKdsuwyTvYt1J91699HZhoDiJjo6hfxmt5kFbj7WnobiWEVCpoL1pobAXnMkehQHrUprHzNfPnRzuduK5",
  "key4": "4PAwjGVtep46fCU8AhwwnFSJazTvD4jXwHVYPvR9dLvaLJQzaBEQU6E7L9hHDkWS2Uqx76CmstzepFUK4rnPiKb4",
  "key5": "2uwtSjyDWY14zSp5BmFxNQV9H7NSgtYkbK81i1jHQV3tSCcvPtWn37pMf9QPyeBENmPknsqSG4akHVf5nn15AzT3",
  "key6": "4gc5ningcakym9QveS7o3gSd5sGWGxvYQLJ4XLZckREeHdK1zgEdaStKeiWN5Gzxu33VDn3VeyZYd1nPzBqS4a5W",
  "key7": "5cR6WwhNYra2wEHHt1VukGAYYiunTDZc9oQceZnSfhp5TUwvKAKLRhskDwG9u7zdLDkmNxZoBtKsHyrVHKba9Pmb",
  "key8": "2qGr5ubmpWWS4d3JbvyPbDq56Y8g9ABhAw7ahj6QbFiytZqDcDaqP9UHaDfb4CaYtdEV8MWEijhCaGRZo815ogzc",
  "key9": "WymHcLeE5vjwSgBQffGxBiEuXHG4VpuZzr57tFYeqWbFiAksnn9oZM3Zj6FLMYWhMHnHYqE1SGSV4oEnjZFLfWb",
  "key10": "3oNevvnjsoN3j6X1JN6myHvn1UVbHgE7gcKggN68MXWaVj2y3toB64APPEyYceXmzWu16x44KqZ5uRHa8nmoSjQL",
  "key11": "3211s2QPP5SjF9rLC9Wo3sHSQo6S6o9p6A6WjxzEndb2ooo4rUWCWP1ULnNN9HCNbdtpHFowG9172GKJZu2sC24F",
  "key12": "5G1RS6Z2Dy23QqjjcqkMwscuuRDNSTpSob4YzrnLDyXuLS6cMaVNLjLrnRpMT7ShVrd3K6Gxj72WdTm4ZNVDAJtZ",
  "key13": "5fDV7ikU5otquzgHM9iDhZaDFD3GwsUEEPESxkMY6r6cBzY1jsmypXKM9ERWizuVcyRB3GmjihzDCkHu1PfoDo47",
  "key14": "2ASkL54WQnSYREiQxbewhJFtiu1M2K6TSJ2SaDfrde3FSn9zWv1D21bTB2q6RhmqamsryYJYJDrDHq5XFKjVzbLX",
  "key15": "2Y2iCD9WqSsQyegy7mMwgna6hZXXeHgc7g3GVq8EsBCuzctUcs8LdHJgxcxcBjcRBbN8Qs5yGKvrJjvB9J3FyncG",
  "key16": "33oKpK8j2ScKF9mbvdmFwxi4Pd9nFUyNCwYDZzE6j7x4DdJaxwCBUMZnJFhnTmaVi4p3PR3RSTSS4QqC623mEhwB",
  "key17": "246jngVURxNp2RX79mEQFzT4Xjxjgw9vRDQT4doFXR5EajSEhNQeMvSANTVpjJ12KSysC8TJeafqQ49BUNep4pm6",
  "key18": "vx5NVvZrhMBHyL6nMPpzykEpX67YXgwq151fVQ6TBH8SnT1C1fJqJEMxwPiV8fZaQ8A6BMHMjvyBWT7WQLePVuP",
  "key19": "64gRoNpbMuJiakKoky2wTFJjJfvGw9RoJjUUkvqeXfnfkddnKuiiZwDH66UCE3xjPQPq1LUGTqU5by4fwvVDKN37",
  "key20": "2Mbf79HUomqqJFZDDmuvmBN16smBUDngDsNvPwqqX6Hb7YjXPVDFYzwG65fyccaWmoQkjFPGfmKTtv8RVCDLbCx3",
  "key21": "2gqosFyAtRujynAYo7oTbvrPqFagBexRtT8QU8XhJz521jhEoXdC3G1xa4c2FC7n74FApgcjw8gB2qMe4ZUnQGL4",
  "key22": "5gF88zrxNzjXd5TeK8FCJS3SojSrar4LPz9bQuHNNJS3V5ZC6dPHfwhYSbWqFx7oqQyiCbWphpEsFrv6EftJtykp",
  "key23": "3BmDd7JDKi82KiSnFjL5vT575c2XeH9AefcNHkh1GTvNKmJJ2ombhuGtdBp7iwJagsCeYhxnJweyNcEw564dKVJo",
  "key24": "4FnsF6DWdFzWyqhLJW33We6qQN3V9kNFNVdgsbM9A2nP4hrmk914TpzJgGzGcVYTgDV2UcAMqQEtqWXMxHU4MJmy",
  "key25": "23E6xuv3ZrEHc2UcZ3SvqtiYauHjuKmRNyQLo3JRYqm6na5JQyEM1Ftpra5PVmGv3EEHJKPRnhoDCogoXa7byjC8",
  "key26": "58uKfzwU4qqkrWximH7Aen7uMAX5hCrsdYSs7g39zreiFLTd9zpNrD5JLG35pzEh8g3PHbknyMuWrbs74rfM53aK",
  "key27": "2ULBwYeJmTm3iWnHbBhTyUXfwuwoiYHZLu457ofSDXYPzoL97fS1Wtvgc2ZFmkrZv47iAstT75a4C6sDZa9iv3nG",
  "key28": "3sDqDqD8Nx6Fd5CPHr95vtVkiaQb5PMoq1mduxfCFi2bh6kmVbtitVLGaf9TddJf1BVbCBUVQrBkYLY4AgXDHK7X",
  "key29": "9DxfQWJVHV7bpgpQ6BcZzbExy2aAxDkJpxVmcnh26XB48HpbcVdwsjRMeXygFpQBkMRfFLwWpfKN9fVMfjW2sub",
  "key30": "2Xd6sNhpftkNcPhSD1KwFvFphWKszdr5MzurxiDc6vJnbCcWG16tzTwQxEqrYwYdWHJdLU6VnGmD3grePuKZqQLD",
  "key31": "2AAStngXiXFpvsPymfqeyfrZzi3g6G1yS1F7up37uSyVUMfXU3QjmBfyEY5FXvFNbJhc2uD4bhZdbsSMk21KDNwi",
  "key32": "3oDhRYAD2rJ6RjJSnCZv93rqw7jf1u7zGjf2CTeVGsaRf1cFZgHDJZcEPSShTpbxV9cU3RxJdDERmFYGSdTwbAaP",
  "key33": "4kszASRbRfvDduaZSmPTRn76qsCMmuTjEq8vXBMJeoKXDfCqb3pR1h4362zurUrDLg3UhJ1grhJ9cyUn3M1rDnqy",
  "key34": "3iiyAXZ25eTLaG3f4pJmRTAKVEo54UanHxecedip8YiHm4MNkvJBNa68mpv7h4Wst475Ssn3jNtQxMHNZaEY28z1",
  "key35": "48rqsWEM5QJHNu9HCnpsnsYonNaUrydZzmX3cs2q6LGFYrYV5HvzQKDtdFSK1LvFAfNrT4uUppUw6N7ZrKF1LArn"
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
