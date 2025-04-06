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
    "4FrmvenFPLQhhBYFtEnnXwYbw4rLfUUgjcLw6LSkBZz7PxMedu8LihussN3JCN3EAyTdNgNMQBJc4njdN8Ggy582"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jHqXfNsCoXK7LZaaGF7XcoXHLnySBWedETySpKNk8YqaDNPhaJvGfXek4bHeLaQ77v6UANuNRsdVw1LJn46M9hx",
  "key1": "3kyv9ALBh9UPVA2L9ayAgUVzPxNAoroXwnaJNCCANfsy5vvePNJePUZ8ZQRqstamsfT2gaJ2o5EsnGzMWi7NFfsi",
  "key2": "3SwJ9CohLG9yGKBKTHinJYpFd98BfXFp383m4yyYVP5uAGU7mx4AmnknnmCGkJRgPttqkhFnS4BtHK1e6RVy6zZ5",
  "key3": "4zadUipSCWfutiFF2c5Wz3k2jzCxHaAET4UQY4Gy1i5SKourjFaQJF9QUbjCRWVfBkhSxyQhTPcYgfi3RZjoQd2p",
  "key4": "ybjAK1VqsnutEPfGQjbSFwXCcFiSzdUSZHsQytpHGXzQVcK3FsgUbUWUFy6eH9qihTSZsdfcxgLyQKo4nLdHAoc",
  "key5": "2LkHVHf4aeu22rau1UzG1s9hvL7bzrroVyxx45waNjje2NTSaAni7rKpUFAZZpBhXFo9iQ4cQu3xaVTKNJec9E9a",
  "key6": "43noCGRAKrotw42L9gC9cjbB4LDTKER1UPCD9mh8Zg7gNQ41RB5dHLtrFtmQwmassXw8tDAbMKpmNbWy5caHigM8",
  "key7": "Gr4a59fQNivFQRbWanpMTmTSeiSQnQZURjC16FE2Szzs7yqd7szpjiRz7PpoZqCKQz6kNBBhSthA2ra9ceNCme6",
  "key8": "oWq3h7icHenbGDNL22mKx4fmV3QqxCvB9W1yZuB9Jxb9E43QtQCgXjQVSdsjjmgqfeYuTirfhfatE7Aj3ZSFqF4",
  "key9": "5fJLjfSx1LihKNwDYQko3X1Z4EXG58UExcRv8jsfBTwqsWSPbozo8UjxR1LvvGspf5zCuc4hYAehta1tRTnd9fKG",
  "key10": "waKKtrm8X8b17Ht43Gj2M2Ys961n1zmWBbawkBQbnU7VF9oZx12wBXgvnqgDw6cbcEJaRLVLPrjhVWDi9wxmei5",
  "key11": "2v3gUGWp2UVahkGhCavb87q8LFAg2ruikHnz4hDtT9XkkZ1915L9cHW9ak9jkWrgQj58WoNdecb954kbXwpXUPrw",
  "key12": "2krcxkHz7VHagBkMbbMgemN77DzfJBn9ciFtndPySr1xKnmmNhghcjF69qvfbh4KVETQC7N7BHuwNXnUFuNtg6ge",
  "key13": "5pp6NwXwkJ4prcfZs1KGYK2zgjVQrrn3Nw3CjtscSLd5gWbVmBTwHBJXs53irNH3LWv47AaVethKZRd5H64dDUTK",
  "key14": "4GgVcTrT28ACPHadA2vGAA4CxxN45fXSRbHe8vz4yL1qb6BY2iEvwh2Yg5NmwpDQcGCKnJLnHV4VHnksE1fHo1ct",
  "key15": "4ofqijeQkFxDv8sECAqF37mtAAuBbJGDUztacKBWP9NVXLEjYBKUbE1qXhC4yrLuBeKfVsVEQSGphNa8zaFDKwDK",
  "key16": "4kHzgnEowb9QoEskwceKfRCXXFFunntFGnvmpdHWhrV5BhRaJLBLNvmf94Smv1LL34nmN4UPWT5kiaSJ8NbKWPL8",
  "key17": "3RZfDuGhGxBvi3Pm1Y6mpyYp52DtJ2fsFPssZ53VYxZ4WdbX1RfkuT7GL1JhQA8KDHGopScFMHknvGmBu7seZXUC",
  "key18": "2PXLY4YunYH5Sa3z5atrvijwzA1RqEQQsGzbUXErE1bn1tbLi4BCBdDQedMxfcoNWpQab2TJy3mPEWyKwYwn3qJ2",
  "key19": "3e9vM8AruuQ8fqV6GvM8qyPzQBJWHR64JJ8AWeb6mAkkwoKEXy9PqqdZzhxEhsoFeyYp6Wb8SzPD7eXzPW1vwYsQ",
  "key20": "45N8JPQkbsf1byGarWdRoSMekooL6uSuugSyr9KRcSAjHQzAACwBHurqDp2kEUXKuReEREYHoECkoQnPsKC2e9dq",
  "key21": "2S9zr3Xnycp3D2BL8Nta3pT3wMUG6xhJuSf4qYkhse9LXMLwaRYXnL6FBFdGap2tybjaiPX8xMB4riGthWehCX3U",
  "key22": "5npEVgSAc8hkY14yTPxgJK9gXWqWdnXx6h4fZ94piAEcpJNUQ1MbgjajWZ5H7JV4qHSWA23pZc1bivFjNWygS2Mx",
  "key23": "3bm1CB87N5RRi414FrrehdWUFRFNz2E72UzXegVRkcGCtKpKVTe2ffWnAMheuFZyeboQmhhwT7dbEqfWd3MQC7sr",
  "key24": "4RuDcnV3x5N7fxMm6xsrKpEL3zwTsdxzzfkDBqmg1DNiwB9cgvQNQ6aRSjsfeoFDaMonWe6h5YS7QDjrUtzAd6X1",
  "key25": "5XduqSEjrvViVhv4wkcUuYYq7NC9YbFWB25UYN1Duhy1qNVML4Pzk811McjaZS65j8SShTDzHViW7KtPfrxnNnr",
  "key26": "24qAbvpd28XkK6W9E7q2dvEyP46Jn8KmufjcxK7qiBRRoak72Yvg39fz9WUtBweWz8NK5zcnJDwX8WcFZ27Eo4kq",
  "key27": "2S2Zamdivay1NoQLwMQ8VcpScVgFRg98MPd9rZFdzqGr6GBhAoWaqw6LvhSwYuBMEoeHGNXfoAL9jmWz9aJXZuRr",
  "key28": "4ec9yXEVLEcHaMqxMjqoud4YaezG8Ec9962mqv4yGua8Ma4aLKV3VBYLYQFYMV3kxuyRi65RB5VLEQb4dmeY7t2i",
  "key29": "67WbVTa9LBL6wszhComgpDn2cwuVhhJA3W2LdBfjsEXCoeVXR1EgVTUK5GZT7q6UR1QexzfSgCg5AW9vgaTQtyKV",
  "key30": "4WR6MRm3R9oKrkjiTyM6TH7ECQBidQpzEZsoreUfGBa4dqX26RCW3omg8bnygqKwZXyVXe6XfVNd5m3gjNvRBjP6",
  "key31": "31RVhDBXhDFtSBoZP7UojCyMcyTnzd5htLRCasQHhhpRA6bU1SWPTe7iicxeWmPhkEzL2DFqzakjaqZ75zQyitcu",
  "key32": "2zXycWq7V1Zufs8bsaDBgWegJu3CLppYLA8BheriJEeEp7BF5jjUMVPGZzmbRk2bZydhTeybcTg3LuJPFqQs6Mt6",
  "key33": "4JQmK7wY8FMDsgUYPMsa7ksTdTHP3nWrWyGYHvG9xm78LD4tGx54FHjtGMzmcEo6sBDkwq8B5ueV39mgBg8psxMY",
  "key34": "CbhyrJGfVmMoxFdzhojj7DTiF8sqgdo7QnVcobtTmqPbpQEqqTtqj4oanYkVZfDdUZZ6hrBooZBXirESsZRdBHZ",
  "key35": "25oMK9dLoU4tFqReDiXvSiHvSp1YR8k6cr5qV41NDTmXiKifx2VEM5SnPDcgVdqzheT9XjGPBsNSJ1G6xvPg1tvQ",
  "key36": "8uip18CTgHZxN5SaRxFDiVrDj9RSC4v51i8Z8FYuopCaEXSkbKhseHa5wSExh2THJ63NCFAn4ct1Lix4iQ3zSkN",
  "key37": "4zraGGPUiHL6H7QijnACwWtwm7dZgDSMad4LQhLnZmLKQxGHHJ1oUMriguQo6tEozK3fKk6tn35M8NHfadLpvQKr",
  "key38": "3G5KsMGZJnnzn5jmSHqLfygGSMgyUBD3KYdyjSEexVfBPwANB3QWRaaPkFuaAf9JU3cQTqxPcagQxcewt545nKmD",
  "key39": "5qnnvh2sBkva2Z1nYGsya1TZ9R2CK4wivp8hs8cYgbhk5Q2yGFdo1zXyWuMX1Xytc6Yos6QwiEuq6cuXJGwrfG1Q",
  "key40": "3s1vKKQuiFpRhATvtTbKJZFfBZeBMwbKRgE4KrWPmBVsnuEH8zaP7Yyqy3LJwVRFLxQYVeqc5YxADwHJnBEPLre7",
  "key41": "3D4vtTnJmCMWReamgqLmt3FMHTcVdfVtHwohRwjcjK4Lam7CaPiH1aYhpfA7BKFmvSDjwGPU8S1GguPKnMPSK379",
  "key42": "2zKuDioEGjhifYS7fCPEjxaNYUQMYxGMZmqnmsKMLPAFD2cC6kaQji1vFT2Hv2xNyiBh9vPYX6Tr6iZRR8t8qkxY"
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
