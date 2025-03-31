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
    "2z63vhwkqz9RhH6jjeEVL6x9atiTanLGADbxeJaDifFCac9PCd4twvUaweZxx6B5M9SnAxrW3tr1Fw2awRdQexiZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63RiyH92sDVCz9bT1f8EG6ZvAijd5q6KnYrReaBq3pkUazKYNUbZqFioyeHTEyRvti9hnJYf84wGCEG7XeCKCFJ1",
  "key1": "27AW2jZJtR7hc4z1uso963HGvQaYXvX9MJQekhgWNNmJVXTpmXxC2fWpUawjzCnspaaYHrXjoutTSN1q2iYDRShg",
  "key2": "4W2LQHcC2MV158Uj1UnxvKPtACRF5tJK1cj2DVwrwVnu5d3Mc8gkdigR5AXamcjhE911RLLDeXHnbXTG1knKc546",
  "key3": "3q37fkRtDxE6qtJcttohR7Za8cb5sSCrt5MbqYcQgLkSSEQcca1rjs3BbxvwN8cogHMVixE4m6L8J3i866L9XVvD",
  "key4": "nMRmymHkE6ccLfaa6MhtRk58JzLmsmqzRJqih1HfpfSbeNUj1CD8EuCnNYUBeMWWEqcvGyj4Dt53nfaUig5Pwny",
  "key5": "UH2BSsayu5L3GELty2nN9A8J27cCysFHpZ4zuHLxnh6aAgY93C4FhNZZEa8LjyTYwPiaGsa8RCPKBvU4kpC7dMd",
  "key6": "46rmgowrxq8CknxjRF4f5kNA3fFXLwSa7XxC9mm72GVeFZ4Z2umJTViEfdQfNM938EYawQC2DagTL2G4mKr6o9xE",
  "key7": "4sAzFpavhzxRNcqDv7fM54Wx3EUqbC9tSvSWDd7pbV2zqAc3WdK389uhNFxoJyWhycFVDpNiZJTdd1kqjkrEk9vJ",
  "key8": "4GBqQrBMPkxaDg5Y1TFTbLUuTyaj4XrrK28zRLHCb3ja5755EaGRtzUr6fRMUuZySMRan9KAb5J9ufA9wrc7xNe5",
  "key9": "4997iZVLLQyTZAisyuK5Ngrb6v7zgCDJRMGTxfH739xwktUtG5KUR1AgUQDPuJAMvF3LRGig6L9X8izRN8GCRYfY",
  "key10": "2Fkb2KP9ofvDT8jY3WdEbUdMBxgoHSbZF5zcEaYuRHpMQXWj9VhCtU5UfGrQMZ5UHmzxJPS2e3G5FF6aceRiGd7y",
  "key11": "3ERLF6RRAmEY5gwtiQZ4cY3uRsUj5zxXbUEDeqRVmX23VV6zuMBwCXUTq72Tydm5duPNLSRk2ftAB1XebaTw6CCr",
  "key12": "5or6yY7VrC91WpSjFCvAk8vmXQRKyzSkZEoFSBVjnus95UcfoxhxhkoMaqijTVYekTtsDfp9FyNBWNmWDgcxhnLx",
  "key13": "4govPk72Cb3BU54mXbVSs8GA61awy1aRmwJj4ocNgezK6NUpPngFyPK1jWJeYjeSsDFhkzxLsFoEWUCNVnyaTPq9",
  "key14": "2p4WZgTBftemXjuGdcVepPtnJfKV4Xwk5uEng1b2YgQCaLy6yTKMMbw1deJ72PRCZGL7w18ULWc7iikPSmRwRyg2",
  "key15": "2iTAK5BEnqxGraiXPvB4YAvHncTFtAFsLo5qQhNHc1dW4r65i4gpTgQvt6YZDQuRyj4A4jxb2LTJWFMuztneyq7Q",
  "key16": "4C36aFX3qkeGdSvYyYEqoDsLUhRybCdwPE4869W4wYcXvtPdATMjoVfPHixhPokbUU476rxxaXdL6KkJJx3LHEpX",
  "key17": "5e67KFPhYvxJJjmKfEQrYYfgdfHNfRmEvs2rg5AW6ZHCiayB4mffWmBXE7xVJZsQ3tR7rCHnMAdtxdc69SqWJM3S",
  "key18": "5V8ihKHAZAgzf2V2WKKUXTmPp1JveSfEvheJZyXCxCDTu2DTF324tZKLUdNDsEqsd7ENpWCyg81JLvad1nqEuhj8",
  "key19": "KRPT5qErUQHYVWRcYAJaTC1vEMsW8SywiHVfK7FfByDojkGkUsyeq7FE24nAiDU6a5nvgqJjdQPcZ6UqEbqQ7aC",
  "key20": "3ah6hYPbF7MK1GWknQmnq6dn9xnayUcG4KZj3tqsxuU6i81WWssGK2DkGNwgNaunbgnVF7jPuRw35RumRtu7VjbY",
  "key21": "3UcRaXiCefzFYvH1sSFVmV3VeWWrgqcCuqFknTAq579xcHHoCYspmkERuUEsq8gJCT5LyeLKSWFHAP1t8eZ1TZCo",
  "key22": "4W8qJRzcmw17N4nDmMes2UqiSGSBTWBkikcsNiEDUoKBpYNxyvGXeLYgaAyfDFar7xMmqvrSxP58VRS9wXoDMrPn",
  "key23": "3KxrRdJUeUsMSjfLRSwCGT7sADy7oms8gzFmJrAxxhNWyHKdzKng4MK7AU1UkxbLonjCSwo2jX86XtEW24kkYwtV",
  "key24": "4y5qHYoTG3ecirR83cgegNr124p8jpmvtHzt1bnUHQTKshiEQVpaxt2qYDgFa5wGwbsAtd4Pze4GYr8rQdzMMREH",
  "key25": "2UyCCMqEJvHSRCqDdZL5ovX2kDyaCdJLKPUMoPFADfd64tig8H1fVfJV2iun46WpUU4U6DLXNYybW2aCJEXacmKb",
  "key26": "2hD8VYBhaBMnvEApjE6zKhcee3gjc58cZteZMZDfRHftdi84ZVRaXKXDXHv23Chy3eyVq6RHYf7RrbxLGWBfErt7",
  "key27": "3d9wYHuMR6AZmuRAnQSXGdL6tVAp7a29EjSrMb2k3Xr1EEcY5S7tUPp7UbjpX3vFDuLKdYHKVGseWTtg2xynMCC1",
  "key28": "vx3Ewx17veZKXDq6NviVSpseNCUJ1MUyULaKMWfe8YnxqBwyuSpP2xVdE7o8pZkPvLHgDaaMqUKZxFBkrAiDoqC",
  "key29": "Tb8KxQVeGL6emdhrC6UAgf17TesiucVVt5t3BjQNGdg6R6GV4gKUch1CQbAcYVah3he6mY1qdiHGp3AKEb1t3Dc",
  "key30": "5PCHwNponT6EPc7reCjgjqVLy2DojSqAeo1Sd7aocJmF1HVDDsyA88ePeUDEcyXK1rXK1fom9fi7LvEYy1XfE2nn",
  "key31": "3hpjSyGqq58E7TJSpe2xDNaJrcKGNFhBrgaZKFtuu1byj5f2rgMeSVYEcFL7LxhuxSEsahKyAf6b2gsd7jinhv8b",
  "key32": "3jHVHVUqu35qD5N8SrjN9Xy7UCtTwaEfduNLTphR4ucjimtZpvyfzrZThJRxE3GAcUWZeR44dGJQMaR4tT89QtiV",
  "key33": "56Y2wsz1RVDStdXbN8gp8G7Tzwv1NvPK8qkJNWCW3zwCG2cfTnb8UKGEmgY2nhQa35QbjAyW5smdsSLbndMtbYmW",
  "key34": "amNZhWF3Fuhd3P6oFANZ3YQHJpLZpaNmn8dzhNZ32QAE991AqbnbaBydfZ4QeKBND7ih8RcNLbwRHTEMxb8AmDr",
  "key35": "2CPVVF4uWs1pVNbEHA4UDMey2HHo6msok4of8Hz4YtJEESdNjmBK87CGStD69fsPvuba7LH9BEnrjdMDMUJAkEQy",
  "key36": "2upE2MHJYHP7yfwd8UuumVB3od3dkLVXwUbv3WdyCkbUvuQHhPdPDe4LibWzmAiQ8FwFV8ZKWmUJFm7yZ9H6L6v2",
  "key37": "3ya2WsHZjigWgDHZJa7HSkNjzJSHTxM7bwERZ7VNoPFqRcdkr5v77PoskadhEXXutx29eM9upfTvZ8GFLrx7xxAu",
  "key38": "3MrZAB4uhh2ApoiCUKtzmRVUBRVCzcRa67RZKv4Cu7PASyhyc1xdUDC5Ak6thQ8W5yQM581YG9UfgoYvhjFAP5Lw",
  "key39": "4WLq8UT6i75pbgdbebJhr6ViBvJMFuRbpTJVkZRCzsiJeGJr7s9AHCDA6hDZYV3Yrpb3hfU7oiXNFQCyMTxQ1HPS",
  "key40": "48TYV8KftqFmdJ8ZavStYU6cr7pqSA9gUwEJdixJZcrAUJhDMFAfJuJVB3afSzcpS5RHSRYWm9vLb8ej1Bber67w",
  "key41": "3WvVFcLGfYj3mdZaU11tsNAURTnLLfpf6Rk9fCzGfLD2tvV95hQAUYrLpZfHJsN173966fe9Gx1mAN6GojYMaiuW",
  "key42": "4k6p1t2uGKzAnTFhoukPY38DfxWEkFGbvPuwW5Rk3FYKNMcKE1TXxbhXVgqC4MJH2EskGtD6hMvMttFnCbg54fjL",
  "key43": "3Y7pCkjNnZtKR6qLC3LmUPchygt8W1E8QkdoqggRTUDDF4UvsQPuUdG8yWjeVSsLfsHW4qKu7x4k6Lo4xHM3rbpv"
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
