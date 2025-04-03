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
    "3K7dmbwoXt7EHad7PQpSvMJsfM62KvzFffp63mQq4WTKHA3djm1vhZYXrjYpJeVPotL4qu9CxwMzWMATvCStYvY4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oNnhRAxAvBup4nyEGCuM8vrieHUYpRaj6aMW4RZ12jnC1BEuEuNYzogKdjjhBiSYDsRKc2aKFJweZ6AmrCeCYRz",
  "key1": "2WKBGfCHgfPTorkoN38jSpoDRsGjHYmpiBrE17haVYMmKkUx1GCxX6FStYZpDrD1HfGk2Sfv56KA2mE7xxWAZTR8",
  "key2": "3SeN6pzZmCMZ6JoCjLepVy4nRtFWt7i99zVQu8ByJNpr1AQGS6mstTGNYHoQGDgHX4bxB3uHqVUdA46JrJdmBVvL",
  "key3": "3d37RP8H3ypDdAdJPxvdfFY5iKn6P9KNupywVNQCAegkFAv59Ma6NmuwAnaddyUShcSmFnRUs5b4SwAZGYTLY25Z",
  "key4": "4PeYqjnbMXBvhkT7dbx5s6DhmPZcdyGCRMGu3PFMuMqRJcpgfiHVRdPPZTFkuY1VL1GChEjr7QhSfigwhuNGaWpe",
  "key5": "4pLnYSEVzrhqHWRe7q7RwW1y9f9iPSYZFyUJ5weUVSVS1xLUUXctQtvM1e3f75YKqwVexCBTK3xQvNCCxJ1MvfyS",
  "key6": "4EM7CB2c5PuUWUWFMC2ffEe4H55cJDeBahXBd8Q97UtppTs8KgJjZPJE8UKrhSNHzFmGAt66P6HZAE7FZDKhzdJs",
  "key7": "3VUKiRgBTZrfXbdfsQt4oKKbfXvy2j1UrY6GzM1J5ikryHH2wJXKvpNx1kN6fDym8EhLYwrNhd8d1hCx11uc2TxJ",
  "key8": "j8m7i7urX5i4Wa3mL7LhceiFQbWdRRP2NvyCryFFb23DKtkMEDy5rtKjcAx4R1WBTq9bXbdxF4QbaBt5HmhmjZX",
  "key9": "EEs1a8pkx96Jp21rb1hr2xG9gtJ9jrEvB3EYFYCoh9rLuH16BaW5YLebQxZ6RvUgKckn86giCgok3Ma6Hsu9XCW",
  "key10": "2B1ALVQ6harNbFhHkL3R2J5Yoz1hRz76iU44tdMgAvRjdr5aNoVmyxvGLqMLBqHpFhNvdvzZnrRadbxcsf8LZZng",
  "key11": "2KEGe4N15q4NJW2nzk4RH4Pk2ufQb76GgihvnadqYNGxNwJuYhhG978nqrHehkiTwfBsp2AyrosVNuWj4aGEjAAL",
  "key12": "qRzDeF1Q5q5dtQHVgHfTyBByTTS87vKL7MpSzVnVoPxW1pCmsDz5FXrxSmbnZfSsmiTzfpUovNfr5rRFSv6n4FV",
  "key13": "39hJCU3PvpQ56x9qsS8UkAh36FNRaRFjqVV6euyxhTrbVTLbqDcTLtD7icjz5UqJ9shdXhmosyG1TEViNo7d32Uc",
  "key14": "21cq5vTDwXEqf1zmSutkHRXxr3LPsYvHQiJR9uB95TXQnqGgZ3LR4vNqaSdnQM7ZA7aaAPS2CiTS1DZHRZ51gcxi",
  "key15": "5JKhNM1UDzqiSwiHN7c88NvRZthmFeP3zLddcJQeQ4zSEYGsqjamYV3WULFFQdBm2j2AVptukv4B5sFnoXqjTZzT",
  "key16": "38J2oXSUmzxZkW2p4Lw2tVbSne7wmPR2pi6QdQ21ccfGNXCAKkc6kmeCSphCLbunKxcns3Q2epwU5ryWY5uCyakL",
  "key17": "61zKni89EyQv7Hxk7SuzrUUQaSoXGbBcqLMSKzCsRw1CeGUx5xKNBcjVSUWNDN9vTXuBmCVGnA36F4TMNtvmSgib",
  "key18": "28DGYcsAYYWsXW2rgWnrsEHeAe1xRYfP9ghn5tvARvXprwMjYWjK513Fs1qqXSbW3k56JCUHWv4oCiaMoWwerpjw",
  "key19": "4ANLx1AwwL97LWEAwVqLq1LU4y8Dr9kaUC2av4CNbZxfQ7DajjeEmRnKsa4Pxhufq3KzFmydtyLAQmoSHrr5gccX",
  "key20": "25n12zcWCbG2AEcBoqRAwmhJAs5eov1iZCZ8k991ZwkKeRPCW1HwSJWfvR9Ss987uxv2EQJzh5YVzDu2rU52ysvu",
  "key21": "2BvHBVKFe9Cc42SVJbgVX26KJiiskruoo8Tir26VRa7PexGFmEGJgvr5AFRSGMmx2Bnpb6Fxim4K6XRBt5VhugRh",
  "key22": "cDMdHisSDivxUVkrEVj5FGPH5DfETjSuM14PyrgwiSLhYHFapsaq12pbQVth4UNpXwaWYaPkKScwfDTtX6Hd2e5",
  "key23": "jVj5fVRmDFENVJs7VTHh3sYcehuCoK2q3avb4tBsN2fDTvpiZyuHcqJpd3Ssc8zD8QjF9Na2e78KnPKUHe4PswZ",
  "key24": "331MwaB2YAb2AefoprE9QJrJ2MLZpfcCeiJyKAHPjuWNvdwvZG29bp5cDipx3S8uLCkGeuzExvC9bsPLRhLMLatB",
  "key25": "3p87nnf5xjoZhxrBFCUmHm5u3aRUvbrpJMHTbKR3yHe6h22jWG2ZHE1Pk4NfPBs2JsCRBMBvjBbnRBubTfQfKYYD",
  "key26": "28MTx6f94oXz5eyoEhWFqLbLjPwvdnSERekb93uBfzYcBurAAToFMXAEpCx5DdoZW2VVkc956zzpnkK5LVWfHiD7",
  "key27": "2iGkJqYGf2g6XTWK1EXvwRCbAXbqLX4SGN9ZPmRz6huUNtw3TpU55CTuzn89pAzGbyNTjigRwmD2xAeUgGhpnMpQ",
  "key28": "22GawCQhUE9c5CXFmAZj9QfhMq7xZSyVGnFha7ANZL8hhKNijWkD9J8BjTrw1nKuFwwVkpzDyZWyDVQs9weQXsKa",
  "key29": "63s8spKAkhQGxuWSTnDzZ56bguEqhwP4bXoAvtQy7BZEY25cfAHPoA4fWUgT2wiib6yBARus3ZFbG5aP3YU6uFrg",
  "key30": "29nj3U26C7EyP91aw6iuMB6hYTrEwYk6S2bCZCsCkQYPCBY58jKGeh2cJFbF45dmvZbQZqr63ty8aYVxasBbDDjH",
  "key31": "4WwkuDxRbUY3g4n8JHHJrmDAVoaz5BDSTBEH8A2R899xxKgm4oU7yMG1XE9ZU1keMyFqthXPuesXzdsnKH2bA1RL",
  "key32": "5xjna24kgNvhruscMTuS8kvrrQJnpWcbCHzXu5wnsj5adNfqzP6veFnzxbpNxs7b3xNfwKDVE7aFXW8QgybMwfbA",
  "key33": "2PNMKt9zjqEvKJ3MZSVtQ4k6jBhwKiKqDHy568GDbPTrjikTpwAZ4NVP6uDHoFkFvZ7SwuABYctfCvAKQETzqQ8F",
  "key34": "3dw87z2KAG2wSLpbo5BNiDzsfJ9XR7KgDzNLYnxW1CwQgYhXhQcigpSRMMBEFyZuzsS4nYz1NeWdYARxKx2fZu8N",
  "key35": "iA7BDMCm2R4HGydJ3Rb4CMebByvDmyf4M9UJQLByE1pQJA1pcHWGUpHrid8Njf8ykmAu9fgoETC6yStnZoNcrkV",
  "key36": "PhGF5eaxvUsu4hqrPEPD7wfVdVb1jiQQCnCRc9Wbegv4kaY7PmQ3HTRJQuszeDMA8odjFhuunDpoBUyDXX4NjLK",
  "key37": "rQayrJnUX2btDcW5dKXhv9Box8kh5RjWrwaZThvJJUAvKB9Duew4r44obDPMctHSxq94AifoP3aWoNJDdvqpy9F",
  "key38": "5oThe2pYe6JjMtthEyBYQJCJayx8KtLnaLPB5QHTTnTsGFUgxE4NQ5HFR5qJy2d3yzmrvzdzXkNu9BmF5qpXU9GD",
  "key39": "3LT5tVrTQdukAKnrRSDmWGNKvHWhG42p71Q8ACTdnqLKjN6EiUY7n4dYv5UTAcG4XGiwf4eY7ozVHk8csU962Wi4"
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
