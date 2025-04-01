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
    "4quwufyxVLvZBS3pK8HbdhTmoKo2hfT1LRWC7ymWpyooumMUSVp7SBukg9pyfy3VEUhTcHxTQhRCteWbe9f2dP1Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Td7iTZF9wNhFrg8fHzq3LRsRB5Nhrk8mAxkNQLRtZ5TdpmNkoUrjcqBncLBDCfEwf5BDnTCJ26WmfyYbrbJ99EC",
  "key1": "4LfzwnfKEqFkoiPna42fEn9ovVeyUUfe34Y6BwuW3gZDUtNqdTX4K3y9Asy3bfq7LhbUyVMyhqdLXHiHoeW8BaDL",
  "key2": "E8u54PgWNZQLtWmikcACiwiTHH4ygh1LHgjGKHQAyKcbdBgiZr5Mb5hMiD1uCLzbwbxPKkzizwQZZKKTGcWvqW1",
  "key3": "2t8tApe4JBK6pLvbuRkfNPCQyweFFUdmmyu4XsiPCM5AuGzdX8vGWRnKo8dJD45DPDJCfJycZpdUUBf4KvTbRh6",
  "key4": "3GKowqA2fDeCpzdjzVbBabHD2t4KTjRvMjzatMCq21KVrLXJqPEDaNzKxc7b7WkDnAHSXt5a52R45ZRfh9zXqB4E",
  "key5": "o7qZuzQnWFWXfDPYcuNDi6yLUDoXCUJ13xugjF345DgHk62WX4x6TghRXZaJtCFX3oQBogwTpXkRurvstCyyHcd",
  "key6": "3Hw6QPGraoNTw6pXaWFSMVRZH4kT9LF76WHPnB356AETEkjmZP5wWMuDPUXgC7eD13giPP5waVC3CmfPw1wFFXLr",
  "key7": "5dacw1UpUPf34wCfy6nYeD1cuL4SmzWxqTZxXvneXLPj1fXNwGE3kuio6TJfZiDSubx7L3DDaCSdocvJ1d1ArwEi",
  "key8": "4MATfCbgq8mQE1c1qowXPfnrLmywiivhX1S5Xoxr2UmTnkmtkeJQqrEVT8TKRMyS7SzCN3E6Sx8QRutZEF3u1H6g",
  "key9": "4qe1Px39oiFu382cRhZDnJ5UFJSCQLmMSACKzP8YdzmS9hYCwkiVDrJVHcH36QjECHxbAiG6rNNybUKVGVoojF7K",
  "key10": "32Kcvjio9hcKjn8MKhUybkB92QTn33WsvA5kUhVGKuLBskc41dvwhsW69bP9JcSRkD9pUVwtp89Y7hmbnbUTqC9k",
  "key11": "zpTK2RvoYJVSJ5C3PkkQ98hjAyDHsyNFV812BxrCxnThhSSruKkD8p5oKaJHHfapDf8iV9srHJk84NKXfo5G2rX",
  "key12": "547WW5GWewwmf6caKkE1hbmaL4vHn7bVuzEkZj1pKcksk66STBczcgozecx5NUeWwi4zUMJXWX6QTmbXDMh7DUpq",
  "key13": "2xYrAT3DuQAWJTAUiVvzh4neBvNmvAKS6zdtnzJAczo3jSKTzy4BRBvm1nB7Yy7LzvwH78RsNYE9iNWTMYhzRfNR",
  "key14": "4xZJM9hVqQ2RkYAuyj5WeVy6YAMTXzydAZza9z7F7JAh35Y4xGXGqWSCd7RqxUqZzPwHLBfjeQL1M3eSPXqZJft8",
  "key15": "3BAQKurrPg6fw52aWeoNzPhAy1Y7hhQVWmVEtx8J4R5QuWgrUkfAPfaHxfgjS9cDwvzKyExZmeW21N2HjKUkAnK2",
  "key16": "QYTapavrJZA8ASP5cLri6go8mhRabHcZi1325Xfn1ARcLhQKH3Uqv3UZLkJ5kLE1yW1HYkMtEu4tfU2huceMG6r",
  "key17": "w33PPynmRAcnKToNBQL8pqPRYHJPbBUjcwwAokQjrmP84gyW4FocntCSGTcraz8eFt47an277Jp4rDh955ko1Ma",
  "key18": "4bESu3mLQoKn4Mq8dgHv6Lr8VWfdwcyA9VBbR1RZo5K8dLi9hygmTLtTJoFv1QUG3iUiCBm3k1w5zk63v7VCqAk9",
  "key19": "451qveT8mPNUFpAXt4gJ6sgiqNAbXLGub8fWApJJfhRBnYRqfbfLHLs5WMweKYiohouRGzKiw2Cf9gh8ts6vdHLW",
  "key20": "2L9V8k2RHwEm74k2LAcuXt74aAbcV7y8NjnSwC9AxgFY7C9BfHTmDWA9UmRiVNUhAgVGfGiAdrgaPEWfhJgAARnJ",
  "key21": "5PZuyZ1npVFpQGYBcBbAr4ieMegpLboaNaYffJTZWxLmiRtqpmf6MHM8LQt7qEamVR9q7QXs4np2wJa9GMRNKYkk",
  "key22": "3SxGggbE3dwmsNfH4ETnrPnrJ1xnZ5TZrKxZZqzaCd4fnnnorwbJw3P9R1fL6SWzzE41JtgqReBbiuWpif24Ept6",
  "key23": "5wGmVDgZeXKLcJ9LGv3NvNrDbtKhUiQgbkvFnB6aWhJgGt7Rafd6ssz3Hou3tfcyA2CkSF2R9cAsQqiKguJLQAT2",
  "key24": "4q78eN8nqtfVHwgDV7mhDuMx1sWN7QeGo4zNhcjaU5bPa9yLCrosUVudyHqhNQJfjkZccZjaZfXc3ZLqgXoMiizz",
  "key25": "5YWfX8AimqWL7WusJ2xJAgyywPfa4gmvJ5sko2NpyUxXGkiPVNjqaiCwjmqk5rBfsefXJEsDGLNz5CXWrj3ZqhJm",
  "key26": "45SYb54NLPYUJTif79V61hrgz73r3sxnGNzyYDfUTkwnHg4ZFju8EkX1zBioYfuuQ9H2jhBmwXsP7tnvZbxxt79z",
  "key27": "2ZeacjfhUZtAh4WBUi316TqrApPrMe6S38KQugK2DS9i9xcVUwhhGE5RuULwwReTZJ3ZQRf2ZbQhvfDh1hBn8zPh",
  "key28": "4iKvtmgELZrECGho2fHKBzuDf4Uk7kHiyXKTXBz7SJ6HQFTrCewni7jc9myZNaofCRxCVE1jBAdcXTCykLbZC7iq",
  "key29": "dTwgTgC2K2UT1b5wc1vQP6w2gvY1pz7Y5NzuCV5wbgJ98jMn6zshmzqFCz72umua6prV4bcdfULteivG85871Ks",
  "key30": "avHieimmpWqBSSkMkEkAKNCW66yXtB9Ukz6jPUxYnT6mdLgXUzBE2imvasP3bNeUfgvjQ8bih6nsbNW5dNzW5Vb",
  "key31": "4iLKWi9DXR1zT56Ryjryu3HfkkvkhcWBArS7uFfka4LiN66YYKUgUzh1SexqoE71BPYUQiTASfVLHFrssbDqBDC9",
  "key32": "58qAWoQM8ci7kN73C6842KP2ZxAiYdZmD5dCdHM2fRgcdRvh22948oDW9rqnDGnpscCEpg5NCPGob5TSdDXGjPAK",
  "key33": "4vh1NDYnupFpvQKgvpmkUR4q3CV8ReikJ1hoocFdFtTznUbZrirQjZzG4FkgM4qL8c9zbdptCCVmZjWqVgYxigkD",
  "key34": "3oqbyx8AgsCorJToQ7qt5UeKLTMayYUPraEPs78E44V13qAE4MCXz4wPdYAaBNKYLXd8LrnFc8K5M3fTqPgQ56pb",
  "key35": "4aEXudscacx92Fw1GtJoVvC84vv4H1sPZXZ61cfANChYBB27kyYAUuzp5TRaAfDmcQhAoR4Smhyi9Tg8mDGEpTBq",
  "key36": "61JgT4Vsjmn5gJpEcQ3j3kCEASGe71RXCakr1MNnefBwZQhXQWtptFim99KVndLqEK5MwAp6kVXiaNEdAWQyr5bh"
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
