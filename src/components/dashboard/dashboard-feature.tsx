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
    "31bsqQiZUbqWqwUanecnrtED779fSf7wU931fHdZF8tqNXvNorPgee5dQVk6QnTwGohTHWnwxHcZF7AnU34DDz7P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GrDsoRLV7uPE8XBtajcQpXhQQ6mMbURM1u77J8z8kpkiFZjk4rVNPCy1diAEhB42rff7oKuynVyq84uyEBNxCmQ",
  "key1": "cqT8UatZPJQApBwkSM5X5mnbPG6raUFycmQCNB1xues9zpbMdhteD22RghuRfuCVPX83pAXJiDZNHRX1mS9EZjM",
  "key2": "53FegwoNnikkF4QbymokZzfFcYQjHKeEcMX21npviaztBFQ1TmzXbxF5wZRGR6zRPhJW6LDhSN1Q264xQVvHiog6",
  "key3": "4TiepBHyisoUia6D4jS4RXH8iuhrnX1PPpY1AWwYe6VnTt8v9dNRkK6APJnhbcciWnycvFpDpxkPTbfgkrZMGezc",
  "key4": "418uNsQ46ufjMX1pXF9vr58D7MNjhYMNoFsrKnJUCroCer6DQNR4SZHYt42qzQ55mEZMQkM46BczmyZ2ibEQcQf6",
  "key5": "3XfcmdbRHnZRaHQrekGd75zVcMq1FCubihMv6e2MKtUPwiJqv8VXChDUY2gXts5smqaUCwovBCYZ19SLjg1NsSTM",
  "key6": "2vU9dfJZgvDCfmpvP51gPR6EdHvtdqYMHXvQ7R6sLG99MGwFaLdsxBsJkvCDUSxpGaRcx2GUHRZqofdtoqhPnumH",
  "key7": "5rtxutJTDkpff42pnANW7uGrsh7csrMkGb5XPQi2M5X6RSCKFmyAKxhKEYxoVdtooWg4a2KAfgiAE4gBNYBKSLMp",
  "key8": "4CxpY9YP2kwyywUauY5NDZ9rjYxYTnqirNh5E1JaGRp6mZAvkfe4w3hmXaCyZFzUnR22RbTsF6KuV89g3n6ad73r",
  "key9": "3RoabfiPAKwuGvaqA2gRCxKmRMh1ZzoHUqcAXyr1rpUSHLY2jMuPPc3A22ziGwqHM1fsuqrRTS62ikxMuCopNhFq",
  "key10": "2wpQAdYww5o6JdbNVv7JT9wpgTJRwqXZvofZzm1QSUmy5hbqT79LPryExkVcYrx3pBJQ3m6u58y24mf57Mj2Wt4j",
  "key11": "49SjBUJ5BykDjsFzNxmFuAtRDDso6PomzbCia2JPBs4tZ9i3yNaZouvgt8QUPx3MMA9VWbEuPMGEuDuM27EzRgMf",
  "key12": "67MBUyqVgLSyHMiLkMisogRFhaYegnGqgR4MeKSt6xwPXoY2vvTdZokjJT7hGGQLHWLpKuptAd5UR4BLjrsoLRUu",
  "key13": "4hAKXcshec1UiQow75v64xxFumHHe1qKo1YwJDfpUfKhYWK5tWnSzpoVrWAXyJZnCzt8QfKumSSBVTqxzhjkzetz",
  "key14": "Urm64fX7MNxBoqbhLjTqfnTMAk6sNfapAM1HK4jc4aLvvmX6uo4Pc5Ftkup8N3uMCWEXtYN91Z4YtRP33LSfFCk",
  "key15": "64vM4TW9c8wGQzGbPP8xDRBz57dd7TiANAScsA8pZHa2PMsvBwxqo8v5gz7ShmkpT3KK6BNwt8SFGd7ziMLBH8be",
  "key16": "3sjhECwEDcBKsLwVD3PrEPL7jc3sMweV37EvuWXH19jVYazNvDNLVQ7dcetTUPDHTmbZdRg192ZHp1ju2AXVGvQJ",
  "key17": "BNC4kMmZ6ByCVrYUurfv786SF3MpWQNVtWW4sTbyyPeDefzrCj7oqSdFALES1GNWQYJpZD9rRdhKnQRxF1LCktz",
  "key18": "5WfXBV2WErv53FvJD28WLMtjp5RKHY3HdSHdKRy7pZ45LMzSifHK8rpCA86czxfSA4g8WBysjc8i3ug7rZecvU3v",
  "key19": "QFpGV3bfJ6itHSeRfgmTTcavJceeGahhJhSMDXiGNzsqKVqcFSDtg47pFCPzD6nG2CHk6ETwrq9WAJBwkxsCkzH",
  "key20": "3QdmzNf8S9dk4ggaMchkxf5BHGywLcKyNY4fXW6Y23YYRXc2A4nHx5UpzBeQiS6dQnYtbjhrkr37J9TJfubZBm2s",
  "key21": "4Z1zTM1s3fjdELzLgzQLpkgGYDSTM7LpXRP8CvkTY63DF2LyyTQrH6moh7UWZq1Ukkezh2kf5CSuVknzqv3GdH9V",
  "key22": "7UcV3fSCCbEoUE9x8pru9N7WPHawG2kF8W5CTmnyJdp1EHEubdKgXnfmBnsysbVKx8zHkviDofasxZFWAfNVgg7",
  "key23": "53VrJpGvqUbXti3on23tjtRsK1yS3XPdA27qQ9GGqU38y4ErUc6zktT6EU6GNMi3Wbr6vtM16xvt1gmRxmKBvAoo",
  "key24": "2JmX8qrqqa8MLPRWtfjjskQNfUgw1ez9x77nbursZ6c7vx3YosJnkbvQXdwYSiTUn2NwVt6gk6WkYeuua9oL6s8o",
  "key25": "48ktLxcjgNvyCAvPRb4nWV5s5CP6T5dodXsLkZ48YFhitccRhBGwfvNqae6EpKUDbfKhdthGZ5Jb5DGJdjR8iUd",
  "key26": "5YMEm5BTASCaLNwMbpfBmrKMLPfRAhnnv6mUcXvwJrGeEjSJiaDWT6q9PrLhvCxxjQXNuZtMBLBXiSeXVCPFAtQN",
  "key27": "5ekaSHwBP7wn82VqDsWfQ1fbpajZgP697E8xbyKBeZZN7D8L3tzCxc2uLLVjFs3ZqYfAaAEZanRwgfY7cqJ774dr",
  "key28": "4rkdAuCRD6hMZ2qPBH1aBttvv41HKv8yqdLiveHcFaRsNHaja6G4gueY55ny6cN6Mk74UU9KdGWRNrLRUWeWz5qF",
  "key29": "2wgtwrdUp23oVrzgo4nJK65cud8tzSvDN23AWLSUy1ss35emZ1XydCWyBdwcZ9mvdF2AK1Y3z2dJZFmNmAPNbTVN",
  "key30": "5Y4FdSJG66nfiNtrMmFUcnqw22pC9eYscSqASMCdDvAfYnUFoCjAwrPoBBS4NsVKC2NRDS9coJTKbCfgQ5AnwDRj",
  "key31": "2cqiutzijDU8kynX4P93LS7mMJY5RRPmkxTtQ2M4dmkhZsuubyWYkBEf3753THTr7piUiKv36mmbeWonn89mNacH",
  "key32": "ZFnJtsGAgxGQcYBtogUFMPYZyDdtiAvdVNURZVug2NHY6yk6BvX42wu1Bfjqa768mabtiMme5Ea9hxA44f4uLCc",
  "key33": "2EVx9xT1iET7d9GXorzjVew3wdMRwxkJkHL1vDi7SSTB4W7YEA4DL4bhqFjZ55rhG83k1SVsosbZyoysagrU3kWJ",
  "key34": "4HUj1tcUABP4zUGassusHBR3a8Ma6DP5UtVrqwuu6vh49ofCx1CuGnwwMGMK9suqhEBeCCCpZLKUgSoBTT9CN7HN",
  "key35": "38pnPbjDRKucr1BTYpVx719QkspXgJCHW7F7t6DbnDg4mEG313qQ4vnqLjQFdaW7no9YKbpBdrS1fHnKVeNCcMHY",
  "key36": "2H3Dz4dATdv9vBX2uRd2BBahSccGS9rV5W2qa3MAgRPkVyLVnNEkjMNKQUR33qrZKYE6edwAwLPYd9NgUdV2fx6o",
  "key37": "3KNmY5wNuBKL2bENb3oBJjLjd3aSn17zDUmAPpNc8GfwSEmWJignKndj3pmQUWnuto8Kwpux4RuQJw2nX7qHKsZd",
  "key38": "2GZwZayPbKYyrBuwzXCbgXFxaCjdSqY9WGmU4XnWca8iP1gKTuS3UXbuCAt714fMv5fCRkNWwnyBTAf8XiuPo3Q4",
  "key39": "peyWwv6XdCxcvMgJ9FRhqTMmvqSy7y1ukNKe2igvuZBAYXi724GnrXsK2qHqMmNTsUGZWmmn7EoYXpGiQTUBNuH",
  "key40": "2bpgcxpXx6PAGXrcUAwrFFGee2XtVWJLtFi2uQ9KGQEzh6MojpY1aY6hZf8LN3x1zUNa5ALDnVxvkWGYxqvxX6Xu",
  "key41": "rQe5aZqMy1txyCnyycx95qLvFpgAK5M6YFKUhdwg7BrFzXt4ZYQaEMQGAKCjKKdc1xpcgqmf545Cvvsezwqqx6P",
  "key42": "JoMiAiMuj1tQxENQCLv4tnZ7pvpBrn6iRjmGa9oXHogqQkSy37EPYUs9eYGPfSN9AnAw4VmWapXxrQmXyURPA9z",
  "key43": "otupTZepKVeSFvNhqPCWkv2mDKhTJzqmjg7bx2kCnmjBA8cMHYevrpcWH6bNoV3X8A3hEKrwDXBygzFA1Y9gNhB",
  "key44": "Nj14AkHPufPf4XsYuYY7Wo7qSJJxFEBuHSnRkzVNtcug4a9Gwz2HaV91Wu9bKXysFczK3EqM6CWEJgcWPf3tWNj",
  "key45": "2RoK295SVurbgLzkHMXYTxMoj9NHL4r29wQsKYfKbxV2oX8HnqScEMad89pvff1T4SnLa7pAG9G47CQfgkvFCfch"
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
