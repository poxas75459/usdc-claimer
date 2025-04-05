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
    "4JHnHPKXxXJrWrwBUGcyMXnYbGRNFAXev3VRAwXwEznQvhRshnbqSRSGuRPNftBWpkCvtwvyVSEogv5evnCWrYcG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SXdSY2vURTaVop17y28RhrtASGFNeSJw8QxSSXA9tPovnXyWjkgxanVsRsjxtMhZCHPE9qJdNTyAXqmyi8WY2Kp",
  "key1": "28gVGGKJiZWFjPAewg3BW9fdsoDPTNoM8jr1LvWp7rnt7kn7dxrNn35jMD8qagUJFWKg1u5UoDjhDY2kGPth5sJH",
  "key2": "yq914XnCqspoZbEUBxpnioj1gHAF3bCbuUTyyJ8Cn6kLWnXNVSyuR2tPYmDxsuZpP5HQNmgCyzY6fPpcs6B9wP9",
  "key3": "3ffpu4zTSNqiRehyPWvSEJfRGEJdCsjaWnmN4h9ioYGfxsmuQjdKai7GebTCnt38kn3rF3dGkQ3hBwkYuYVahDwn",
  "key4": "j2XiKkZaELLDe38oFtRqta3Rq3zP6pMtxeTTyUTjCZJC4xgwzxYRec5JGBSZw6izzN9EBDmhVDynBRqfdWQuL9N",
  "key5": "67rXnv1z26nU31uf263LT117eEXPBT5GTRKi1Whr8YxuDhD6qkrs3wSMsY6QVnVSW8iP9gHABLicvjvjAZV1uwp7",
  "key6": "3PyLnRDRbeXucffZCE82kqNrUHSZntHXzeL6SFZDk6aweqVvih77yrz8wPdQFGpKJevKh9rDUxQu3yyhJByEdYPm",
  "key7": "65KqsZDzVukRFWUfpVoYTvZs5mFQ7VfCK9NgwD5PKCYDgZJawNoboRY7pUtDMF48PkcFKm3dzPVnkqaKDu23qkwS",
  "key8": "PGveabhnvyyLantBaSyz6teLmyh6Cu7cs8KHuid1SRn5fJZCbNWupdVKQnv85VNcpaCGKq11zyWppw8ok7uvBbN",
  "key9": "5vRxUbezdfUvXbNsSLyE6m8UbPF88AGHaMGpk433FY77V2jAFQTbuCtUwSqHq7nq7G57PDXeFSsd9Tk8rfzDLXF7",
  "key10": "3dAkac9JWEVivXBkpK8wsjXx7txUwRf3vJeGis17oLfj1tdWZKAgRdNzaNQaAQyEmsYHMUXf7AfEuAcxPEodJFjk",
  "key11": "JPaP46tJyvSfqVkon9kufgdXQHpE698AUHdEJyZsKfj8kWCRqTxyQSsJYWhHyn2mjNwrR5dEfRwuhm6eX3uUj5u",
  "key12": "3QGGVWjAkksEg52k21MHZUHjaLBhXfo2UxpPWmotK5eiDTqqYPTiXuqKTZbxSWx8K39PC4HcSN1Dr75N7zMiCsr1",
  "key13": "3kfSgPDf737w4kczGkSgo8AB4cVFgDtPcwT6Ypk3osqiGPhLUkNiCtfvKEsKKC8JUyXbiU9vWG5jz2bW7HhcmToN",
  "key14": "2531MRxpTKxt4bD1N4S3rkgxohhqD4YV6MHg2iAtZLDq5TLncwKakGKTpwwHcuPRCRbLc8PLztdrinoufs57XBN5",
  "key15": "4jceL9QBHYfin6mp5iznsXBxm1JGk5CyDiZgnutYmTfeRgcpPZAZsXJe7DHfvJP9i1BDHbdD8ac2fhJeXboh4mta",
  "key16": "5eKnWCS8rDABpMJ8Qkony97B5zYRvKHVr4SPTWUpicZX97MtsjJ36e222EBsRwSnZ3Ya163pAoU6VfAnzq6VxEpx",
  "key17": "2N26oo8TWtQ6Y4greMbYou7ZkuA3gwwSTq6fFEAkr7DNSv3v3R7ZEgQzExJ3NqBtqSnEUdL4VJDFrHca42XXKCQc",
  "key18": "46cr2Y9NPhMxz1zNn9Zv3pYxZFtwVfEnPgaQ3R8w2dn8z33RYnCSeRTFUn8f5MPAD2TRarhHTTUh62BDvSAZFmPS",
  "key19": "2thPdH91neTdTQ8NzU7f64wb5xxR9gFawHzUNHsaV1RZekLXJhC1Sd2QnPwseipXNsjSoBsEQhBtc5sbJtJUww48",
  "key20": "6far6MPdWpMaQFUoEcAhpVWu4cnrajQ2P9JaTymhiuEaQCE2mmsvDFUK7v76RABsUsK9LakWJwTt4zU68tFLMRk",
  "key21": "rfxeLDrkb1TnRWVWL65o9ndSieCKk4sUAMQDwQS2cCNnUMkBuPaA3pRqmgEGb3tKHeNJz22fAeJ7TXQ9s9z25kM",
  "key22": "4RBKu29PQiw7z4qJh3eJYrkzCKKi9jX3AB913TCp491dzjbJKMRoMSZYoLi5nkezGRc9GduqG6aLpDAq1XHjVvkq",
  "key23": "3GC6pcRmSwJ19tEmt76ExPWDgoPeoa3w14XtjekUiNAHAQ89SrFoWrMXzvwi8VzVZwwXRdXEH2VqWsHHXDprGNJe",
  "key24": "3YngQkNss33YBR3en5y7uZeXmb8Sn2ExpJec4ENnNiEHgwUQzVJ7Ss67ABJp2FngvuPaYdjTmufKaxwSssBJwaLd",
  "key25": "3DySy2hKRoWvJeLQA37pYEeVn4sB7mJGjteySjtcsV1SMztUgZWSuqUjp36KVYxApvuS4Ej6ZJGex8vAEqrJRaUR",
  "key26": "4CFLg8xL58xoW2sTXiVFpbDMD6LJ7xp5kiNwawPCECT7yPvWGsv1htqpgCBhJLFNue4Fec1srXC5VrqLsoECoq8F",
  "key27": "4GATE2UeYJwnRSxqQR2Gm4zHPRX81P1RoA5HFUVq5TWK1FLvDhdoKrTwXSceTh1ZhKj7GZd2YpjiXHLTvxbNEumS",
  "key28": "LytgE5WR1vuVSX624dcULkf6jFTytzfvFc9j8QmTP2dCktuzJdtLETw7WPc6fefHgNNUTPCkYtDZBW5FxvrAdTK",
  "key29": "49EudEv7zcwxyh9hf4NPgs8hQsijUhtYQK7PWSEnRvFNLhKBtsHCQMoYtxAJ4uNKirCiufNmfmpBM5rnggnFd5gr",
  "key30": "4NEk8K342AyUZzUTLX2Lfa9nMpyPbdjDmT36CKpiF8i7H1eb1dLkEGcLzDH5rSwxB16bHBunKtEtRugGQv7Eojfv",
  "key31": "48D5NAtKz1aorqHV5obVY28e9ChRGMDwrr6ozVKJaPfV61RJrQej2bbkfSfhn43MPC5P15cTiy5hGewUNaPNHBnr",
  "key32": "2FUfBbdL6GQpKCELuPypHN5wbmUEurSbux4chqiDvNz8iTUaAMF5ZR8NWAKSsQJ4GPWkHwWMcfHeT1LHjddM9u2j",
  "key33": "5hFtG76gTVK2nHLnoGdeyDKi1BzFt2EpXg8ib3V53g2tmGGr46YzqtUPtx7wV84ckKwfcW2XRB29PBYLVBVAiZQA",
  "key34": "YqXVFJFQp9uniELKz9cCZczKRD9nyTaTL4S1Wzok8XAWMdv4RQ1rWQABWDjDkCB2UmYPNHiPJgq7wJXpBsnyyTw"
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
