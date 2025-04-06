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
    "4oUH8fbR4iuzz4t8sppTm1VHehzbMyHcuf5jbJxLoqPBrH3BGzTKk3UUVbxrKXuaA93mGbD5HKfR8oz7EpRcGHJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eshbfVdk6N2vrfycYVBsgRqCpHTVdMysCNqLkhq4YfqXSWNfHsyDeVJrbAXgLLksda7jdLwhERL9eapdd6BGFd4",
  "key1": "3dwy5yhwkFUWWRLN4mx48DKiVWKoMzLPU76Nmj3u85rpZMvZNAS48VAZiPFjhvXsigqdKKwzWRp8MbFphCuXc6AH",
  "key2": "3NjhYCvHWYmYuZGvPFdJAZwnX5CwVZ8EznsEqeFPFcqhZzMJZouASGNSH2vT2CgMBu1gn4XnbapbM9S582UweFsj",
  "key3": "3nvUfssNtTfbA84uTy4iGvuyy5JJsuciZ28WFQPNeKeBrdV2irpCFL6k13mK8N3cJ5fH4nyv29HDbuFEMEUkJ6Jr",
  "key4": "4GYCAau6yG7tieib7Wm9X7h4sY3cH1XSBeadbxNPjCUVnbxnMFoS8wyQKQod55eNbUDtT8bUMMsF9h5Aa47hYnLN",
  "key5": "4JEDfAhjaFYAb9K9njGQWtbURDKkhuDujPgBG91xR8Sf2a3F9sXFJSJ7drGVpRqscFwsfzxhEeK7urpTFoaRdwxK",
  "key6": "4epdjSEkGqasttUYuu67vknMPzJZpy4KbDkYCkX5g3fFu1wMWAySrvrzmehAkuAQBLZQ61VDycmUsUCNzTNWBXiL",
  "key7": "4sD5YhxUwfFMZcWyXSNC7UvRx6A9iDaaonKLiPezognEgUxo3qPSbTRsHeYGgN1oh57Ar3q5TtByK8WMuowde9Nv",
  "key8": "V9CBUa5hB2ZSv5mZroWESF5uNb3nF5G4j7HKVkfS98yJ135QFSfvyvkLRiyzS6CLCmQJf59x2D5omQznc1Uvmdo",
  "key9": "u1UQT4xezUgMUZgQmMuCCP6RAkWt8nKvZvkhUyCy1mPkvHzMn3C8aUhxN9eX1QUu6hbYvhT7gfMC8SC9Fqdsg33",
  "key10": "5vu8dYoHE7Ws9QeGpCstjm2FxfE7Gu4h2VziRvs7Q9Hs9HKNUveMiqr6TiXSnue7Ny4LnHbz4k4fkZfWxNLB2kka",
  "key11": "2QQBCDE8c1vEbu13ojcrvwCXqNRvhyKLtNtBRctC4qUL1LZqv4ye39NvfbNBPyQn9S7n9nsKYX7WnVEphTfUBdhg",
  "key12": "2MArC5E6qtpiwX8PU8P9Z9gYz7KbAfvnG1uHJWgrRVKWKNffsF5fi94KL8ewQYYnibWhb7PaokfXqrDTv3gnwtmP",
  "key13": "3LkUp8VtdTWWZr5xwz6qihL4vPSAfVjhPrzGZgnFy87PCTH6kd725xpJ9smQFpiMQa6kSWHPj5AsU5KJ2LEsFaZN",
  "key14": "37Lo3KtmUkAE7hZeDFC2Y41dQaSWZDQYZfCjXPpHRafmGP6dyVmUgR4xJ138EACnehHDUc4FU1jApSMSaPEuBcF4",
  "key15": "J2KLndTdDY22D61SZH2Rx6eEHJGeU9TAzKkZKDzWNnNXy8oBdgaqaYgGbj1VMYodnTNu8fwuLrht41Z9tv8nD9S",
  "key16": "2N5u2ELZPDJyrhbux7WRs6A49camg27agrW7DErvVXVzW8wZZeX5ThekppNN92TrExjfzQT3KDJFMqvHzbcF9ppm",
  "key17": "3yuQ33bC9752b9CQZNK1fNbLZdy7bC5WByn9J3qAS9cToaCHb6DAfg291zdZWjBaEYwL8npcAAfKKdjzUvXdQJWv",
  "key18": "2BVSVwB4wECMrGarpxq5nUoGgKqT6YBY1SvKcaJWw6VMSpMFLS48MtzJCDA7YhCu1UVAat9SmTY6F2AEWhKY3jYb",
  "key19": "3RNEeDKNA8vCsz5QjS5uEPYUrpG5mu24jao6egW2rGfxeDWKKW8ZMe51F842NX2y6eR4URZyfoeJdhLhdSrN2yw1",
  "key20": "5BUXoztFvLJvaM7FxzeE6robeY923PCNueBxvfX3v481Kfmz4Zau4vykkMa2kKckm6H9AnoUZSGWfsPEqpbFSRzo",
  "key21": "SapndvdVq8QNuanTguUZfpR2xEZzE44NUhTrht2e1x1Cxxy6d5QzFGG5jRNEf5RZBaicw2uJjPHFsJXpTvRKpg5",
  "key22": "4MULt63NRpmgDFGGN7pvaU2pTnRpKm8n6TR4F9Kz6tiY8B8EcRivF6JuJWMuNNQLWVWTg7Dq6hjKR6zBZbLYdNHh",
  "key23": "2eEVLWdwPbmM5CdxTXqPAo7Ed7zHY3qtQhNSjvuEckt9ee3u1npbtutTSS82qcwX52Jzm2P9EJ6ipUxcjgBgUmbX",
  "key24": "5HA3oZbZto4nzp6oW7T1gEmQFPH13axDYtmKnYr1SnMhAcdCnwqPkB2Ygg3j8PA7ENDhwRp8KuTaDoAuxXE8LXvA",
  "key25": "3MYm4CeyBNwf3BSTjoXX8xQbeAoAm5ZD6kLUexTNuvMZbYKRYaH32MpFTB73GVHMnDCn9BrWaHfSjhQp2txMEdX2",
  "key26": "3Xqshzai5ew7uK5P6gU1dp7SYqdmxQiUmQRoc9mLQ1zoeQyXAtGaUBJVm3kTVpCK9BsRozrg8x56f9E1DQbxZFRS",
  "key27": "63eRsyoa7ibdqWswmHQXRea8dkWyfPBaCbGrYxCYTUdeiemuiq9JTefrqHgu2KDwYN17PL7yGdUy2HSkezhnh4oN",
  "key28": "37egQF8DHv1BwFL7D58afCtXjSp8LSB95nUx4PynZpo7ngLSKVGE8mwRSMJcgsvFnrVjSWwvTjvknPPKBKCdVjhN",
  "key29": "4vQzhoaJSXKQ9Znc238y7nUSFXR7yyt2UfytfiznL99Vp4aRC8Zmkpe5Zxa56bttCL88Whwh8QJ5Ar1u5zMpJ2S4",
  "key30": "3T4xNodKsRn4hxxk6degEVd9y25VRX3WVakQvFuSpG5MzCQ2Xwv2TkC6A1jEn9HNbMUdMDGLAFzKf8DRQjQoeLKs",
  "key31": "3DhYPYsVsZA8t9cvccDzCAmWzNrCsBADZXtbq8NNUi7Vr6FXFWigAwsfnBQiAWHqoKYtgTmZHesgfYbTSwTTYco3",
  "key32": "3fBvoHupvDtAYFDGJnTK7ybSqBCrFkXcK4QXbP86NrfTaJyfBKikQnFJb92398BGZipTiLH6sJE2dPkF7U6YZSQ3",
  "key33": "3sD3dvUFEPa6j4974s8fgmgXabPmrsVjNgzVqYYuowTYtfLzS2R5msCPcWb83H1m6X6Lnbo4ThDZVjRpNTo6kPU9",
  "key34": "4LEogBhe6YtNinGubinjikLVmgd4KpqFjudoct2tUsxxA9ZDbtxFYdVG7syWHn5ekdALzN2iL92X8oVFQ8KMvQAn",
  "key35": "y4LxgtxCK32zW5qEc1LXFUJtnAEae1zX7YkxD7chzASEea5hWZs76wpi7oLGttkimr48RCxrwgnQ4oJBaUvMuoA",
  "key36": "2eH2PeB7NCDJdDW1VghjNJtFMfneH2oYeE88PnF1TU5bX4rpmjJZ5EfUXBVzzHfa1t9T3LEoHxJyFSjaWQ7gUg3f",
  "key37": "fkHwyKCPvjFcZn5FHKBut7WazD1K8AaspeBKnzYMCwmMLT3kUZw9NtzcpaDJdaPhKYQAT3aT9aitsPwoAbDY5r4",
  "key38": "qcntHnXFqhP3y63JggTjZc6vf4E1gy921TMw7xd7g9i6T371TDwUG2FfWzjnnRjZupVpGLauY4HfRcw9DqCHvWa",
  "key39": "2C5MSScPgFBRFxRmS4MpJZU61zw6LW5J8odTbc2u3LtqGdDUQab6MPiD1AXen4sSq3ZpdpKQb6iESG2u4kv3G5Ma",
  "key40": "34ftxmqjGifqjkxaxxP7ZhAyjRbM7nbuorPpAEVRhuk2H5dvBGpgMNxXNXbVh7UjrZxRE1sh2hyHRXVo2WYyBins",
  "key41": "44v8frk3u5KTG51WfbcxuvxsBjBYeCgwHHRwrnCzRn3eQB7NiHbMbtoyLDt6viUPrYxY6ksMBpvJ7uV5ppAoFMKa"
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
