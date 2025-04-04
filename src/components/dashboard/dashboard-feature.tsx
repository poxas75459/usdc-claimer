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
    "5HHwgivt37Aebmj72mzJ3kH4Whm5qahU5pL42WynLHGfkCd5QF8Swf9aoZMpoufzuCHWtS9mChqNTf5WpmU4K4Bt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vntsFGjX3gMMw9gV5HQu1KLaMCjNhyEeKG3Fztntg45cSyJqfpMpFdVmsFAEGXgJJuzjb3GKGs8Hv6CZ8JubmSP",
  "key1": "4xYysmUux4Ai5pb52ieeWC16fd4AN2ir3nQntRTfjAiZCkWqne9XJQnPnfNrbjvURiFRRG8fbNTYer3JN4HzCFj",
  "key2": "2jGf9wMXNKhXS89yC4HpWrz1M6EpXKAsUWZ43Zyw3wFVv1ongrskvnsRdQH17ajb5nvD61ti3R23fr8xqbPDJ52Q",
  "key3": "4VjmKcbwusoPzAd35Yq9hn7uWg5HEFnFXPPJszqgbkxGoakUj8BpW7CEfQGdz51xupAkqBZtM5x4gxRqXvLJaeyz",
  "key4": "63unvMMhtLwXdrazacqqFzYUKA8k9Wg5Lz5n43FLQu25iiGmrR43ik9umzES6swKNxmrgEjQC1UeTZJS9ZacXh8u",
  "key5": "3E4SjoXSvocDR324KKxq1zgeYF7A3M2LHhL5A8jKTbW9famK6nbdUnPEncYfMJsjUHeY37V7aBUf3WtZ9tuqLsg8",
  "key6": "3VnVBzsNkMTk4vGuoz57xEM6ajviCTgboXL899wq7dfy2hVDoRjKQ7sxM1WWA92ZqL1ec537xFAFS3oUZZ6H9wY6",
  "key7": "5KgDFoq2GFdLAqfEMVE545urgwxLmks3PJThekkKLeJMcfahWPekZzJy3hDsBLbnhaiT9rzusb3oRHyKsupj96Uw",
  "key8": "3F4VXPXM8arkT1AUJPemsWhQ9vTV78o4iqn1UstKyGJkwiwxwPSEiB5d3mjU5Cpy5VpA6BbmgNy8EoQ5bSR7cUY6",
  "key9": "4cM8tFmqRgzt8CHgdSY8sWnwgpRHn9cGpsosTJUtPFqHSzmRQFrmetiKm4BKYZNYuCHcvuirHRBHTxtV3ef6Mhfz",
  "key10": "5UjmvjSVk5PkDDWa2rE5euwX2zKyER19pdiCm1xPBxZe3AT3qdwkNxyjAbPjY35U5gz45Nsq4sV3hknxftBneYY9",
  "key11": "3H7hc6FXdaBuGcB4R51xB1HBQgCmhQoKcTn4pYVpPC8JHFqeMYr3i1U6f4yrqRxBtu58TLzQft62EnJVAbuXPoLq",
  "key12": "4wS5DAJpUg74gAwe52cn8zAr1bbXuv9kBeN4hPhHXcMeTFgWE8xbiHzcBUuXFhoofwids1yfYEtYaYvPQXJrVggR",
  "key13": "2xL5zQZQoyVFsBiXfzEV85S4zgN6qCE1GQsSuVGxNC9WocU4phBm4EmT4iyj5gQ94zL9jmMjRsBNG9kCbEzMguRe",
  "key14": "4ubkz6sCp7yT4yNdXQNSAFmBBAEFWdLABG54tpqt1B2xyiVoed76nug2nANQ6sBNSmyyWQ9mJeAVv5pY5CJ6LzDE",
  "key15": "3Txrn7QeQhtRDWMum2kR2a6exdRMpZ4km3SF9DCSk1CnS5qC8CwrFGHiw6VXqDnby9zDEALMnh8Yk2tBgNtS5jTf",
  "key16": "3TGnzw2UxXAqhYjZAGVatfoXnrmxqT6th62sz3QChjjdXq5oekwouqgnq59z2saVrwEzS425feuoM1tG21P9uKLf",
  "key17": "3MG6LEGFYeLRbYmQFRMk1jxk1rpTyzEUCGwNMTrPWv85zZNbQ1e4GUjbWUGAutAGBnpxqkCkRoiWG7V1n1GUvDZe",
  "key18": "2t4gSzFGstK48xZvyRPBZPzPiSWovAQFbVq3DfQPVNLdrNHTK44sLiMB396NPV3N9ucMq8FibyQAvZJXjwLe4X4E",
  "key19": "651Jrop3JkAA57KbXdGEDWJBcbwfKqfnJw3DMiRghphBUfjLyQ5FMQc7UWfGZ4GoZXTc3ZjNgp1xofrTw3vFje1S",
  "key20": "3yMwiAGTDKq4P14uS7j2Li8UB1vpRACuwxkpsBwJvESpLKpwqJS4sV69cpAxrkaAuZynPhD8T1vqyWcJrS6CznG6",
  "key21": "5D1EfjF4eedieUzYWhHd3mufGpRuRXL81oJUouECsVC5yajKawErcuQCmWEVAdybxjz4ymdtoZ8FF9yQ3rL3Tnag",
  "key22": "5eUBpya1gwyepfMUkTKeqqZ3aUN4fr68UdBbqPgyxgeiLpFzyWD9eK7qYvYttFSub2yJkYCPouEPPgSfYhSgLHhi",
  "key23": "9PYVRgMezrV37VTyuvAaof9ZXhJLXW2p23h6Et6xG39s29qRYLv8fSLu6uYeiH5rnnXs7CBS4P13D4SQUSXVdkg",
  "key24": "ZezKKhPCRwfLcefLtPCiUtFgb2LtiD4LaHa1HEGjxPA3BH9P7bRvHa9n3ftTCgf4nrmBXKHDd4yoXrPvV7JRzju",
  "key25": "TVWCz2ZxoTC3UJXoDTZskJn6axvhY7xYpQqA9Sp7cFDFBzvxvB19qLuyVon3PR8hxHyMSr3XMdsEHW3yN4EbFqB"
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
