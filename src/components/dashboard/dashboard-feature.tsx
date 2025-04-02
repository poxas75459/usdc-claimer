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
    "5oG2bRSJdGjSafopLpRZ8VWcg63bdUAztUuXcfZ2Uezr9hn7x3bhFkxF6kjbJ43cRJecH7wKX8fJ1TP1Nz1T8cPd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dd5FkvFYUT3Y98gZc8CUrnNDcvhvwbQsBHdceWVUxpZP5Z73FVaY758t7ozHELiAbneN7qiMzpriBAjdfhExFVv",
  "key1": "5wKxr4o6Mt1YLFgD3nGtvd2Cijw8qonyaSJ2tmyH4MGdtck658wHzttMiK86ZXEvVa1cijkomm8JXg3xPM5hP6J3",
  "key2": "5n2Egqj1CjYDu2RENHTxD4NUhznJ6YD2Meh6o3P1SGSoaURJPMATSY4jEv4qmeAnupKbqmefQZ9NuwjHWKvSy2LU",
  "key3": "vN6vv1KEq393W98yQ4wNiJXvBmBiB5Hm49Su71TD4BEkTh7uwXWkmcTvpEQvzTkYpAAbj7na267DDQgHvBMEyH4",
  "key4": "5jSf3YgYfA7F7txYQBrCF3ZpvoEugYxeiRxHTDdYbSBjKLK1vkJg1GsCfwHARAHr5A5bhm6qB9LRANg65hkrMZgE",
  "key5": "5bwqJY9oGC8CyPWr7arRMzwGA1VUY5qFC5xtHryvYj3Q9sfFcTLnNmj7oXt3aJ6QnpjvtcoJQwHXdodFk1oxga6q",
  "key6": "5bKH1bp8Z5BfpZWBxuFY68uMsEjMNuBXWDnUn1ZN4fCF5pBF8vrphC39dYK9g7VkFFuMeXEwZyqyXCr1NJnwRt6p",
  "key7": "5yVMc8pAsNJGkCjV4TChTmjtPi2tm7p2EL4wVjWyepG3KCfbVK7hHq7UdcoM9A49kwHeRe7Yd68cV4rPL55c9AmM",
  "key8": "57xLvNb5oC9c77S7Ro5QtH2FPAWPkLM7bRF1CZUuMvUkUvUPdXX3LJbZNxPFqq9vAxVihLUKpDMZXZ1VbKLFpThP",
  "key9": "4LCdxaAeVTKsP6xncx46Kih9QNGujN87xNvkuBdfY7JwRcoRvSMFyYXPa7RVBdSbm3QdM7bZrvU8CEMXR34KbR96",
  "key10": "5YBj6P5Z2U1Wv88g3orpuMDr6LajXSAfu7FN3oH3Fn97G3jDWA2wLV4H64vhAAYQukHaz7xmmsvwb2XZAXffTeJc",
  "key11": "5v1T6BpUEBpHtVWiWwRAZAjHisyWsPUXv9bxEovPByMQk1AunLvNH72geSXhpCVkk8UAH2s86jqDS18faKUM3EE7",
  "key12": "q7wJ7UC1gTFyZjWna9z4oTVGEZopd9Vmq1s52Qze4VtZ1cHbvZBTcCTXpKDLESqtSNAdRRzea7w4iKL3uYXsrVG",
  "key13": "3mkicU95xrpYdim4aEF4uQGVyNxear1KznYRW593bT5zw4AVVfjjwrLWgozf2HCXUnuZJFruVUByygfKAPzrB2qR",
  "key14": "4mPifmm9WE6diAem5wBuLBdkyAjKNYVgZpXCc5HcAQoNwYz1Jstj1drWU1ADZ3WEpssgywW6CrvJW35M5pRxDYwP",
  "key15": "3kBSjsrfGR1tfbATtZMQBDkztT7UHJVhq1E4wexbee1sT5y6YxWu4UMeCJSkGYUn2HXHeDB2qHb7Qb3XrytUhKGS",
  "key16": "8W2CnKZxm8eLbDmCR27BVT4Cvdxs64ZoqdKiAVvrRBQ5ps6SPTWR2VBc8bR7D6AJdsarvtgtxzHPLbJE8VYfxPk",
  "key17": "TpxwWTdycB8sQ6eHCp6ATXdB32i5zZaqYqqqC5vBv8yhsddNNc9B53CDUvkd6XknWbAbhuLiKjdy3dPm4F97MQ7",
  "key18": "3w2wM51BSp3gLPMSXXB1ziq3gBqK7WH4iq4EEfyAaWt9ynKiyToSybCn8XrraN3LtBnSjh4T2Ea89xAz2WawqYno",
  "key19": "5RwX5etwMBS4qjZx79aSwqj8VvW2W7SYJKMcyBb5kaC1qHNcpxkv4u2E19eDm5wQUZqm7rTeaoHDdRCPx1LBzUFX",
  "key20": "4agUJXKMVW34euZXfEYk84tTT1bVFJpmgM5V3t38wxfrR3dzDJ9yw1cuatzsiL6ubffXFNKmeG1PMDVpf6MxsmsK",
  "key21": "3BndZTDXxRFV3RuajeTmUjtKJZQHdzTVCbre6pwQ8VzQKtYBABnvShRKAyz9t5ovbGMMdjkdc6cPi43KQVwZzHqo",
  "key22": "5Nw37khQi1iGDb91iNL84ETPyDkwXfvQUdN9TpXDwpE5PEFYXLdqkJNzRPxNs8FncZwcWPtvFmR36mArS1C9EkX5",
  "key23": "5o5H2rMGmDUfHxRBqEFmjKfmkQ7AiKiqLdH9EtUzSvXHvuzAHFLD5Ra8nErqBGTXKMZm7ucRu7PpR8CWnrMN65UA",
  "key24": "5VCywFNKqZAMiDDpW3CQHYMVSCZegFcEndJu11EirHsieZupqfGiiq3qUUJJeUqjZbNrfjBJzvcARFvTTRYaKin6",
  "key25": "5dNwT5oP1QiKVKZ1NAgLBM4kZjcD8kdZAeuVs52pVtrzBxDzYXfo788BDDanBGrEwi7uJpFYhb7Cp1SNrG31vp1z",
  "key26": "4cc7vfXY3CgczQq5EYzYz8whsKm7JoVd1tLPbWkzzvKu13jghpBH5gzcD3tTB1d5QHQQPNmNjcwpR1yGp7DXDQFh",
  "key27": "2gQ1bBU5ZCVkaxVRDvRSPo2CKn5coqxardvzk2XyWAGazXwFv8c8Fh1Ke85BS5CYybdxquBtmEFB8SRAo2x3H5vC",
  "key28": "4poxHp1vGgwB2v5dyVXwnurd7RE5e3hmPLEr8n9a7oHXayru2JofHRP8wNVtjKy1w47seeUpaLn3i8MBUQYjVXc4",
  "key29": "2JtxzozopDe5ELnRSYZJaVGUaW61wx4oUnDgK2xwSJHCfroYZzx3yzs4HUhj6gjRPcJuwCM3iBhjK7Zzx89LR95Q",
  "key30": "4riUto6fUHcUFN5kCTjsDa5Pqo6dAPYiSfo6eLYwggRU9JHmtBfDU1gi3AKyxmCzxcYBuUJFBTVuZmt35pnRDgFp",
  "key31": "2eBJNTjPnSCrGsstFwkbZAJ4sQFwEYBBHt3GpxcX7DER4e9EYp2y6yGcYLKGxTtph4yAk2cofKF2kqgpzdCRYb22",
  "key32": "5vZXR2hkKoEB4P3vG5MRJNwZfbdB3JM6s8oQrk6H4DH2mL8aP8gB3q7by58KxfrUbhPed1JFkQSTARc8F49Grke1",
  "key33": "46gMR9VRxnmMseXLQDn1Ak6uiAYHQMWfqHa3ZJVMBhmZP8NwNCDdiNtgMU3pE8zzRi9wGb5spnEt5cP1ePtzsnBU",
  "key34": "3LTRzKiktAAu4LaYgc21a6uNvfevdb2FLtu9MgCyjo81bcw6n8QktMEQgiQJyf1fTLsk6wLjFVcFiSJFYguBmSXK",
  "key35": "4t1QeWDNrDpLc2At1zuEEoW5T1p4oWWuqhS19zorj7HwWXop7RQim3KuLntWoLUHexxEkm3Tv1tjfvnL2Wf5mTYP",
  "key36": "65sCbgAbCsXazitd7LB5phEAf7FngAy1nBnWparU7eZi5zE1FJB89zDw74CZ6syUZcUhHMjnMSv9TcHH5g9cWfji",
  "key37": "4CRF5jsXJGk8WFVmXhYXP16qQERpseutUWXeuMH3WyxJUszTVAGuqniN1dJgwpiVSUyWDFRahhQ8LK56TcJn6vuA",
  "key38": "4c3PHrcPtcmzjpzHSGFRyPj84cnRvHujNgy2QWNRcqz3kcyw5n88gSZo1sfNbHW66pM1Lcip4nqF16VswAWM2TBa",
  "key39": "3ZYMXL8dycynrUHABTCMQDopHiCyGypqZdumhQX8itspmKooEp4CtsA5UwTGV1ZwnkhQasFqCCKeGtQWuBQcWJmD",
  "key40": "2dR5VVcNCnKyzj6zZ1t9V8uDvAbUJrx3qm4dcEzsXQxPUB5okKYxmBBchFKmJbcYsTrnRGDGE5EYei6bfcfS7wqA",
  "key41": "3Hf4mzmJP1zFMK89z4Z5pPdTrznj52JJxvwih7GNdr511tx2sWW6X8k5j3sZyP1Rms4myxtCGJ37rpAybqkXZKPA",
  "key42": "3hG9t68hrdNVg1hjjsCM25wXV9rz9aTB1rcYNLqeRZtijkeJXE2WkUY57a29Fncu1xLQpJ7fxuq6cp6XK3muW6sA",
  "key43": "5kLYHpDV9G4gycsLn1jjukQ4hmFMeVCdu3HgTi6Shby993JnJTxVxcK3Kg8j5YNn4a46XN1bZ5MoeJ8dQ2Z7QCsu",
  "key44": "3pQnwvFwMKWq1E8go9FqLptZrVfFahCFk2ns6qeVHKBubzWoZMaU8q6Xe2ULNjwiPNPVWJSiR7u63wZdUYxknFRP",
  "key45": "3o9JAb4AkHNXMXyZfdJeB8rPsw4tfq9p5HysdgmfsDSpkFkEz9AZkRB8FG46jye8k1tXZQ8RfuY62iXxQU873dz9"
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
