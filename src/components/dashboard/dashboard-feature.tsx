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
    "4XTZx72oBaKafYbMXLpEmkocUFedHpSnCNtcgtDPja8VwNxXLdzrDvLsGV5vhG7BKhEPDc3f8hjv8B2uAWm1Au33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FeppaFZrMBcoTq2kz6qrHmC9A3vADSt2Ba7MSzPb327mUNqRz15FMPArVqx9EdexF9FqfkJ8NfKMkZbLAYbDAxF",
  "key1": "5L1iTRPr13KsyHVc2PyisasuWT8M56imoA6zUm32p7jMz1L3rWXMD1QfxNAypcP4eQ1XcLVDmCqQPD6jKo31Vvtp",
  "key2": "McD8TmSaAVQA59jw1d3dcUkYhosB9zVS8duT8QSFvpaET5LHLSeWGKZxoooWzrdXbsPmWkU7Jwh1P7W46gCV7bx",
  "key3": "2zJsFG8p2QkQzYd4u2d7ZoqP9arF7pysyNPSfNSBcbBNYXkk54aKWGAEDnTYNp8mBCkhEkeRiNVqJY9VtKAE4ZdJ",
  "key4": "hkwqfnnpvu3pMyHQHSnwcioEJVFupGennmktj5vhvtoQeEsxtkqSNrU7EgExWs7a9hu66zWoHew7WaJjKAcR44c",
  "key5": "pcEtJD3gNoFiBdmxCMpRqryLTaNmxVj6mXNfuYCPo5vWFK5Eewycx44of3L8i5e1CU77yGXdwQyEW5sNt6GYQwz",
  "key6": "5HHvksvcYaWwtuWGFQTHf5vDNKDuuWjqnpqmdbm7WhZxf5pTaeQVrFo56m5jAfwcGgns3ME5QnVskaG7T71gsfCg",
  "key7": "4BWTiuE9rMAioPjCYBeVhRwBY5hpMjPL57gTfyAj5PsThUFunWttN636aG64PKaGFC3iqgoVBPSnp2UnPvrPGp1R",
  "key8": "4wvahgVtpbSbvhvWbtrSv65U4VZ4Q4ZQKqdkYP3maQ3ir1KVaDqHmfuybL4L22jN6cgD76CBmMgzzzRdkq8nWDa1",
  "key9": "4F5uKEFzDUPk8EsYw9cwhw5XBZ7ce5C8dbeMgbguWLnhVhiXH4t819koSzX9uUadhJhK4EhXMrPKU2SSagum73AT",
  "key10": "2ypW8Cz3R6Na3N8MwPopD17Ye4aQKAhdomNj46EDnowqFEhZZo6gCfRDhneSxg8Jbji19vhH5zApf7ug7B6VvbA",
  "key11": "61rxNaYf5ZEn9eHqCxiZhxcWsPxhNx9kywRvozTDcP4jZCEWy1FV3zhFcgohdeHrFrKrfkjg7BJeYahjfqYChjEb",
  "key12": "3QpLirDfeN94C611a8r8gCrmgXZPdxBCwbfHLihbbowPb1TkPc7SbFo6UebhM6fabAYq55iFk45c6moJAem6r4Vw",
  "key13": "5pZScUZo8WJxyL6nujvSAdGrKNPpuKMjiejd4YaCnTuJ3btq3a5qLMokG4xBvVvXks5Xcnf7AVSQE6yz6tRFsnzK",
  "key14": "5BmeWtdPgmhVidXyq38H2iJpnLzgCGC5zzGvASEa7GAmfMGfy8xUNMGBJBW3vpoKowDVyVF8DMgd2rHxdataQpqT",
  "key15": "vHQhoi45vBLzrjTdynqkxHXS6XScf4JdUTQn8f1qz19bjd3H7qCq5H3z8bdxEdSppLsaoiVA8z217nBWysLcjeu",
  "key16": "SyxvTdvjChpsfyP5nt8YM7NRgUeAUASRkvVedcXMd6btd31xqaRiWgDMrM5h5eoQsBDvtZ8KNUuvYRhgHrcnj1r",
  "key17": "LbgU75fGG5XLQzXgNF3tdvooAoP8ZNrg35tLmxE7zTMDrKe94fYAGtuD9q3k2ZqXRQRZXHXqRDLtSfaPovXLRcJ",
  "key18": "4Rd9mpGUxGxfMZF1TrFKJu2pipYzesg1EcTVRSXsVGHGCYN2s5qgg4w8Y1bjR51PEw7ehDCJQc4HHyER5EtHkSvt",
  "key19": "VMkoRkP33rVTdi3x83PVtGSVoKLTAxQ7ZQjc4pdBfVwqStBfKjQuMvh96kqN2fUi3nomhJEaQXog51GbuEFqQpZ",
  "key20": "3qMitvndzmqkCfKianBRqP6SYaq2zY6CzJV2ev3beaQ22hyiXgkrSyRhUZ9BpnHbBZdfsfNq4C6DmJqP6bjfZW74",
  "key21": "2ku7ocQqzhes3H39UDqwakNkdYQt8gZTbMzKKCPs7qqb1zdAmK2RaPELZU4XYs6vk4G1cVL8QG12VQBgcP7E5C86",
  "key22": "27X7ifLonKrhJ6nWJtwjNbFHaYpsRsXMirsRWDxGBf5AGXYEKWCUgC9eCtWc8RRMokRYZNRX6wsp9uxKjQFc9YZJ",
  "key23": "Tewr3aPvim9vGbxoCvU5UehXKVAoV29TGgYGhd1gyxew22cTDs5ALygBKw3rYu7RAN8RK8dSvk1Phzk2AEQgyNE",
  "key24": "3SeFapvyzMzPBF1y3VwRL9qbDLabLvpkdrXajb1jzGchy4sxSHyLuoddYcVyHLk7YyzeocVqwZ6Ek4CJsktUWgrf",
  "key25": "57maqeL6bnDQRcrurzN62kaER7MsTz4JBrrYQA2t9mqZ9Q7vrPy2cVPN1z4HQvHhzYMv2hBu6XsrmRhZsKirmoha",
  "key26": "5khN4qX4pK9sMTxo4ULhNe79g3cQw8mXsLb1wNiD9WYS63q3b1U7P9k6VVcm8VkTukqY4PCWmoAHYX1jm2orFJb1",
  "key27": "26ki7HpmZNFzp9Av3JMoknTU52ERvXj7enVAZvfWzpbm8z5EuBqCEGTWG4FQr9bNQqobGLH5feHfbqcDPjiCRyP7",
  "key28": "3ewpkm8GEyTJSbo5Kvp7t1u7wikcthAQ5PGohMZQgCYjbgh1sMtGWsHdwfgqGjafY7TTmBchwcyog9KVQR1VACRB",
  "key29": "4rVe5sYURANskQNotmY2sJF5Gs3rG1K4zoZdGZdrd5X8s94b5RoHFXZ66GcwbsATL6DeJFgyyJsM8DMqXVtTyXNk",
  "key30": "397QDN3koixjzZDWEm2ukRKABtz9LMs5fQcHoiEzSSJC2bnoLLVxQPCatrmUDUWj4VN7dqzKDCtg5zGY5WaUx3iR",
  "key31": "67gRYuhCLqq7AqXzEgjhD3xZXTNy7EM1DXV3fijbphrituK8FpJLk8QFvsPtRSayek7cPVLJP8hXkANpGn5tPBDm",
  "key32": "2RLWqYXN4qHRFTffvxezkLGwJhNh5PkvZAZEVUZZjn5pAVvnVbjjUtWbUE2JZAMaU9RMtRUvdxJWVvWLBSqadiCi",
  "key33": "4rKLAKM6NrvGZYgkpCCzDK1jCoPj9XguvvTvXLNsZervLkiA7QjN1sg4KD4eCQPD2xsiBhv1VSDZKpx2G8qQZfn8",
  "key34": "2KjzoqiyqiCe6a6Zc21zRGk93dXDXvUS8xw6K1eZ5vTuRRgjR1oDxejWuwdqYnhyP7vCJK967Hh8oMT1tSYEPcPo",
  "key35": "5fBRzr8i6tbuYEYXTu9bjgy3VVefALDRDR48w7p3twNFJKemo6rqsDgr9rFdi3G7PqRuc1rFGZFXxiNG8AZEKdj2",
  "key36": "58ZEjV8U9zqSfx2Bd3jdezSKsq3R2Jdm83NDD3t7mua3bxG5e8pF62ouSCMBRwzAQgR6CskE4Zc7wFMty8QdeB1r",
  "key37": "4c4JYXqkS9Buy15L5ZYr8dihtiT2oH2hyEGLh7fwXk9j4L4f7yq5FWwh3vZgyUyM1NtW2kXUVdQSTCmUfv7T5d9B",
  "key38": "2wpqnY6JZ2QiBph11ZpaqwSq4ad7d8q6i3SQ84NDicNv4jzm8bkY3uy4ZoodRMLVj49QmitLWZRxTJHpbnGiDnyi",
  "key39": "3336v5VnKEN1U5riAM93MLdd7XmEMEzq9eWEBLuQjy6H4nPWPw4HLeiJj695FyQiMuM3wMS3tpLoqVvc3zfQaozq",
  "key40": "54yEJeVY8JSQc5YcznDDnnH68jM8i4NSLX5j3B8NEueg5YW9DbSGho4J5rBkiZGhTRchWoYKmpeoYT3GevmwHrfH",
  "key41": "4bfrKeNVp6UPmGYCy5KrLkAVSNr6WnN9xMg8aggTtS28QxFQcn8DurfqHVq5xCF1wTQHdGn9std42He1BfVFfNhj",
  "key42": "36MgQ4iSCY4xJcX2dQ3gbTwwaDqkQ3yEY4RbnJtBs3zcWEPvSUKmjtfv2evenrrWjLPPzYJo5Pt96Xnzru2tWU9",
  "key43": "5PTTMvCrg17J56HyNcTxtihtYN6XiJCAaerKemuc2ksCGTkQchS9qLhHU2j8cqb9w9bo6aYVeNrEou6vckDgAqdP",
  "key44": "dbZev6yf6UKsP86BTmYkQyQFJ7LwwpFeWaLGCvnUsRXhSXbaQJuasAv2iEGwThxNGBUk1XbcKe6VEpuJy1uTJ2i",
  "key45": "o4y641Nya6xYmnhY9s2hzoqd9xHLo758qLBU3mvXCs5tWDmfBVPvMKNQDTFx7yXCWqYYuMXEogv9X7ocbfM5FRR",
  "key46": "46CGngNb285C1NjnzkkRzHCDAVLPZVLvBux1Gz4C6dJH6fEzacWkFVWVFfX37zzZwwVFgAqbFwtvtn5SBuVFH7Pr",
  "key47": "4HsKNfv3Hk5Dm8K5YHonVUqkuqb4Be4FAa43qZusyJidQeHVVG9sKQ51pA8MkcDxhsmW17aBLmgLYqCjtivheZjG"
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
