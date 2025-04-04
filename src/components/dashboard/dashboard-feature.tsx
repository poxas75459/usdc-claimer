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
    "2p3TRmt6rdtDXtaVTtrpyqEhKYHTwh1M92Lv4b8eCjHeXZU7k2E4zRD7BgXcn86XBjLr5sNnFfYudVWpkiS1Ehkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32GQjKGvoz7kwFvM4tVe1FP6fAaRbgQkGnnrg8djNAYiw9Hh7rH6657ybgKmyV32pg6VAHKF95bNZPpf1ESJVE45",
  "key1": "3jfcUwGtKHEK9P2on5L8kZvFLkieDqPqQjWP8z8zdb1ognoiNZgjHdv8szWshvnFxNL1cEWnTp4a46zecEV9ksxk",
  "key2": "3NDjVCmN6zzcKK2SUUj7BFhurrbbu2kaay4v52GwJ3tfMSo1vqTGspjry4HtFa5krX2EkQxV1eWJEH77qsTc363j",
  "key3": "62RchgfV4mRUz9d4KdTx9FUcBV6vryjAvfdCeeVpdBD7zbafvcXRAP3pTXGQqkeGWJ4pG1voec3EmRy2xtSuN8tZ",
  "key4": "2WieZQmjFZuBh6maAAptLw266QbyJyLt7JrRLqUmaANgJUUpxxCwj7MmcyqoyFQEPVGhY2WxnGjiYTyARNoqhKZ7",
  "key5": "4xHdTxpq852Sz9JiPzfivopAnD4R6ZkLaE8sVxD5qARL4eJgkmbNJQnDqcqPLXgEKQqH39WiSAgJXDToZEt1bJme",
  "key6": "5knDgq1HmoqqS4wXh24P2Ge8x4gf3Pvuw5Sj2C9rk2KQgTzDFbcsYmmGzERX21WYaLSxKNvaMeBqneg1P5RGGFCV",
  "key7": "3ZWcq73JSZgPsBwSX514pmq5LqzsMC5NvZ8zo6AhqRDHbw6TG8G2RAnJXAu7SFea74WYmWCwm4WPd9p5Aj4Vz1G9",
  "key8": "54m8afjBc7FB4fKucRuR4ivfJapQb6X1emFgtHyqv3JxL99FG3ZVRdEDfhMPVmiq7W1X9Grt87gHXavgtF1NhyAm",
  "key9": "2jYm7sVvZonp6b19SBavQGDQRye1BuhGqCRW2B2iLQZv2GAho7G6ggMeLNAYfcmfS1PJNHmgbPKkhjeuqA7gErGG",
  "key10": "2t5e4vbjNk454C9pJVx6GoEYeYq7pkovPWQSunbqf1G8tAvoJdgCHAwgi5BPHAERDwWg1QPbRz37HVn7CYZaDbJk",
  "key11": "2MEUDrFGQwxDJtrAKtRAjKVvA4TQHiHHp44JSu5FAyJebr6Hz5TWn7NR3eu7JPqK9Kq1wocLxo2mFeWvPsWjzoJe",
  "key12": "2nCXs59X9LzRTZqgzZbYQiLJH17Uka8P4u1P3qS9TZvnnrV1VgPQ38Kr78nnHXKaxtEQy3Qqb8eK4pbpSp5it6U3",
  "key13": "5neVuJ84DntrccSnHW1moVdc1h1eSLFPFB9GwRvBhvSHiuZittg6ssFVZHUk3rgnpWV1bPbG8YRCxN1XBDAseDJq",
  "key14": "Ss6CRfLMfE5bB4ugPVesTXhbCgmY63NVA4Qp2SFteUsM1HsoJZm43ZVFqT8uVUK6DsyEnmcSwXKqqQoFR7zY4RU",
  "key15": "2EhhK26zwz7D7r9P8MusVw54Di4oEAWhZYDfRXg8Z1PuLQWTdyBaVDmnkUcumNoNi6oqJ6x8N6yFZfxkthTq1wqd",
  "key16": "52gDXxx3JsX9VSsKhYNfhoJ3ADsNLQ4cZmCtaWYsLpNuMVtb1aEXkoMLUg3aELsGbJ5zyHT4gygc4gDDKKSZxNr7",
  "key17": "2Sh2JvUsfRZ8znSFZ1Meg6oRXRpdd7qQRKPKfMitJ4jScSVNbNPFT2q87RTL52gFiqic73DtqabGPNDDwBwKUK6W",
  "key18": "p49EHHzEAamBE26Rh9NrXPTzAjBYifEpx66BzEi129dqeD1c1FhUgEJvsEnQ7NrN6jTckvCdHjaqfPvQ1AkdRHx",
  "key19": "3FHnDcRLs9McwEjigHA7hKUT9nKBkQMjGC3BDMXfTjVEAyBvroAE99vSrVUhhdZPT2ABpFgECCUhetR6YARHaDTq",
  "key20": "2cvYhXms8FPwnTLM8sVecYEjFsBbKFEmX5SX7bqqCEeHS6twcg1yUHc2og258osEUQjQKk4uivCtSEM1DN6ZNvhj",
  "key21": "7Tpiqex2i2n5mdW1oxgGwmGRBQqi4j5E5QT72V8H3SojScnuusVkm9aHj2tWHyHAsPWaaatkLDgLiv2i2Ff1zM7",
  "key22": "4aUyoq1rY73ReaViPinMccszbyjCapKfE7LXkxypgEKWghUnW2remgpk6YFTP3kCu34LNKSTKYVDDAwCGLXxaHKK",
  "key23": "4GWMJTCd84n8KDsTDrttamZKKzjZoatE8qaiub9Z3MCtnQ7avs8dnne5xSrnvB4TvnQZRGprZWHf3LDBEGaRRScq",
  "key24": "4kd9jn6FcupahJZkPT3C1r2aAWViNpv4ovqx7NDqLrzMCxLyxfRCtYw7SVXrTSb6B8azUBZSjAG59r9TxQ5a1iyY",
  "key25": "54vTnBYh4E4cE8b78yYSPseX6gWaUosokKccEKUZ4hW3UzfUjQjKdzJh9QogcQKM1d6d3j4Mbjdyfk5tHN3BkzAi",
  "key26": "55m4UH6yd9ReHxtycA4JV8jDvNkGfREKet6PqNKYa2h4EcUuv6LYhu3e6diVt9BgzhBTTS6ENyqbABV1LBDZnAA8",
  "key27": "2heiFV3BXqWsR9aorkXJbXsxReD7eEZEWD5FXryNMkffdqRohaHUzURqa1EHXqBy75Ek581ET8K9xL8k6n1rC2sY",
  "key28": "33BxsSsyGKYWaWdvu5p58amWBrEu46u5rP5NswdSBKaDwdfbdPwcob1aWy45SD9cnN8w5ZjTETnG2mTTYxbFMTMx"
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
