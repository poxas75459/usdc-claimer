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
    "3HSzaHeLWYLR3LyUFcybQN4RYb6VNvvbpMuPj7xrm1BAhyst6ZbGCBnExx1ohfgCCqg1QeB9hHyibN66LHDCVX1o"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Juj6GW86LvtpK9vV517ZkJZQ7RGCg5LLzBKa4XhmzChpC3ZVXKbgTXosbSZcyQaSDQ3jQuF4j9N4mBrk2FuNZha",
  "key1": "57eTVUkgeTW1NiWySXEWsBX25rushwxPrZ2yt2xdc7VZaC63kZAudW1HUqHEiY9nC1U5u1MUQhodda1LUkyGtPtJ",
  "key2": "3UfGfL7yFbU6dLqDetTZzDJ2cAKUNjjpLgPC5w1djj5wBwhb1b9ehKUc6Z21BCpmGinybTiuC2uZb1JhrMqjAWDZ",
  "key3": "2PGkzdc95hdMr45DVJSvk7Q1qSkLuQ9QCQNph5AhTLTrvTkSWL685mrSiwYaWNb68zdJjXYkH3DxK1h39rwZvGAk",
  "key4": "2joceputAgQuWsGMbvdxuhp4MN9BKkGYeoFUpoPYbQwqxbTUpjbHo33BB24iCpwvPSCwuSLhyncEmo8oHbAixWY7",
  "key5": "53prNK5pZLpKvWZS6p9SphPFvU88dFcaTvCZV47W4fWxVxtmij6bgmyeLwouvQ9fvu2PJJWkv6PzF1iTyGZ3WW8F",
  "key6": "4iCbN9JYjyvHXjAi9oq7TUnpPtpYgNuWA598KqbByNehY6QLv2PnpAB3hyBA2yott76ZSiyGgWCqbHBmKnyqvoCi",
  "key7": "2dYgi5Vd1cDW7LRSp17YkdtZ7JjU1r5CmzoSXvKe6mzGjxeCg3AGjBJcC8h5SSKputLMPGiU5mTvdV3g6QMx6BGP",
  "key8": "4gbMh6oL3pQABMZCePajzYbte732LeHhWvgTxPx12VMJDDiUPgoF2LcdULbyXBdyCi6mrGa1pHhWKMkdPTUc7EqL",
  "key9": "5kJe7GVEbwdY1uqH2LuS2PZCrvAqfFRftLvg4gLSCMLpDFKCbMe5PeTkW2FJup5v8f13CS5L9Ncac22sZZ3YEqDu",
  "key10": "YfWCc3DnBYo7hDxjmW2xTv1YLRbha6tKBJkWghBPbSWYajtihx2uSnM4q92UNWjHzg3FLePRWCdX4VRUqScfCpR",
  "key11": "3BGRs3hnCUzbw7b1PhE5VAhxEwtycDtckPBe3fv8Tzbn3FRkPC9x4Ee6xNfFppmPkQJLiVmWWbXSa5RTUoF8RRqj",
  "key12": "3NnjijXzwrWPUSbYcktMCATNa1ZhR1iMT271cb16zbpS9mSi2vnrpMo4ZcncFRG1WF8ka1xjwFT385aKTJShtYxA",
  "key13": "eeYgSrEvkn6ddu2yG81WzkXnxB1b4CK4H765bcw8TAnw9TWjSVY7khJgU32SumFECE38w7utxmwe5NYzVTXrhq2",
  "key14": "yEQfmcQDcy8V2WD8N7kLk6LAGTajRtugmi1ioDxSKkteH7E6K45RQaoRXcBaqEnFsYK3xW8mrtHNso2kFdC8fgb",
  "key15": "3nL6yEVU2NAkYqa6jLSU2ec8VvFByr1AauY8LV5rX5iWMzRDtFVzMVFfEKNVs8aYVuF8yDC7uhbQEzHdbmKXsmzN",
  "key16": "3f9HqFTahJy1RxvpPaWEzH5qdTd5bpvyTqjre395wFe1cruUSVAdowFg6Wk2GDE9pagCpTXuUTuBbqfzxHGhNmsb",
  "key17": "3bBnk91bqzYrhvMCs9QyzdZNnZS1kuzXVhi9YBKPPJ3cUWf4B2AsMoGEwsjvfRocwanGZqEvLzrBbZn4Zvx3SXvp",
  "key18": "556fRRM8BGVoFNM5ZWaLxL1ngU9hCAG6i1V6aXTe1BKy5fZhvdqDVMdwV3urvCYf4PtK7wk3DhKRAg22KvwR13Vf",
  "key19": "XbsdVL8WNAnQBm5obNHKjkoaX873J2vtrDReUAJ8obBEnCY4t5bb4AYrciKDrh9dy5Tdj4BMFeWd91hjC7R1tMW",
  "key20": "51To2oEkYHJoHPRFs3muqm48M534x6xZoFwcUeafDzfqxKs4NgnLt7iz8taqAk4EQuhKR1wa4MUoChGCqZ1jv66g",
  "key21": "2TjtbvFZ2yseQHXr9u58pRCa9yctFALq1bm8rrWGQeCr1SViQCNZdHyLJfwNTFro8dmqinNfNMFtctimJVw14aKT",
  "key22": "eS5CFyAc2aP5vkvJQh3C7ukMqyeDu3fjLW6JKn6wzgAcNaG1kBTnzBhVWn86EbXzd8C9JZ67EJXXowpATd53EeC",
  "key23": "2u3pa6ehHXdAhJCyybUGTsbkMqMGesnTaRU3TNBRcR33fahmUSgBYAB422HtxABWvmkGz8ej6TB6GYKqtgaQFENS",
  "key24": "2cweQd1k75oRzbwZZy9CvUrGXMbTdYkJWqHXnvMxrQn7FX1mjNLH5ZxizmMfTcM7Rw3NkWH5HEgFisXVrvAesUgK",
  "key25": "23DEGhg2V1c1uo44Fb9CQyaUTQxaerJx3dAi1Wz1u1SzXYLnEC9oAv78q4Aqn6vepDLPLYUB75raokTywsPBccJC",
  "key26": "4LjAJPMyqELSpKhHj5GuwXGRWg22UtNEx1fn3eFxsYZj1gUE8CLtYxFKrAnEBdHJ4Pd5muEzb3azmWzK5KkJ5rfb",
  "key27": "5ALJXZUTeo7crtVb77XucHwvPGy81q8Cv4UgCXgErgVYc7pcq7B1JHmPwaGDVZiqK56BrEHqJkGqZG8qQ4oHgsEB",
  "key28": "36yrF5vUryTH9TK8U2ZCLEYQ35NaRDqsedgaosLpKMjjQz1pJXL4j1o8TAucTVkJikbYWPxPRmSDpJAYLeHJSNdD",
  "key29": "okEg8FuNicwKxtQTpCt5katQpf7Pe931w4PasHZ1RENDvu5y2UD3kJpJQLwzHMUfWJw4H9nTJf8bmiZbT5UuFhu",
  "key30": "3w3EKidsgmE6yKHs5Zq2G695f462TzdtdAjxywRSCKEWcS3htDBDEX7zBrZrvc6QpTyfueMumFABitpYPRsrMzke",
  "key31": "5G4LK39J8iCPTVazVaexxr9mY4BT8ax6dZev132FYQAdyjr14bvXdqHDzD5ShjzfnCag3yT8vXLkNaAFZ1kvPVg4",
  "key32": "HHvxmz5MghFiw35by8X4QtCfgQei1hWV7Nda4cEidzLESQiDJX1s7TKdaxDZzHcsCCNcisZJmXSH6SG5qMUe27D",
  "key33": "3n3Cqa1QPbzJZijYy418mNfCYiQHL9rEWP8QPHUPxXzqeenvEWnaaT3WQRy6kU8UgGXqcqqVbrSD5ZZvZWag1ndA",
  "key34": "2V6FgYhGCCupaN9ocE96VwiHmW1kdgzyzp8kmHPD8jB5sGSU5yRzyKNRbcsoy4eRUCB26mswKSNxovoQPerZz7cq",
  "key35": "DzzK34uT2tWhPqueuCNQdAv2xtuuEEo1pwS3N3Q2mBYVAVruMPbTqDXuk29Xadzf2EBppb3S3EAUj1mPUj5Sb7M",
  "key36": "382zyrpuRDEyWCBgDiLQmCEafR786D5sZ48Z6XXch8QEJ9wut925Ekw7o8BMTkGY3DHEbxMDCjmoheHnFSkqqDWc",
  "key37": "4Byc57aQj7CW4NKKKzPqyKRn6gjDhFcbp3aKc52eXuVnpJjTvJCv5D1QjUgce2hjQCgVtkWUbvPAyLD3Gd74hGNm",
  "key38": "2ZDecU5qVgmzsHqGuLUs9YuKA3fptPPQTwjeR7CJD8Ro16hR4nd8x5KdLoSu5Z1RCGRqyjXjnZPsYvmVKTXGMjCb",
  "key39": "53PrXVEVTBVdDMhMJPwfpwPTXH12YrTKX5mmDCwUujHGMy2pyF6xWuxDg642spqHsZfbMWZWvzcXYrHmj8aAucw6",
  "key40": "5tSw4KsGrZPY5daqfFdipfC8NyBUX4FKLNxGfDJUcy6qLrCHZnvpNM66oETU6T21k3StyLFe6oD4qHt6K1chvN6h",
  "key41": "dUfddqtynYeNA31f1apNQo7s2GgY4yyEYLyK8YhbcuXYPFLHMcH9NM8ggFhWjZZ4Sx41KzFzWaVg62kpTy6TBpe",
  "key42": "2LZYrHFPgteo5NUnx63SoXYDbbVYF1xRyFFEkKxq5qVqtAEV88aokeYir1rnfP1L5yXjLXZMmdBEF8jcwxdZP5Ny",
  "key43": "jAVs7pWmwBCMHPUouDCdQpyqbqH3B8zqwEA5K4BswJsSdPLq2YNzQiQ8m5nhFFUEyjPCTSp3hAoJwR5iAWBPTaU",
  "key44": "icfKJJz2238ibod7qQUF9X1A837HF3qLwZU53mSTbaSq56nyGo7RisTCphpXHeNcK9QNeXuAgm68Zqn7qZSC7oh"
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
