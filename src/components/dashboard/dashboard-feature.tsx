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
    "3wvYBoBajJVZoiQUT8cBY4UGyLEz8iiUHQEKkkQasRRpBy4b2odGSe1kAtYQvyosChxA5M7qa55VR5zxpYqhk8pQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EDJnLvzifiJ9vvzLh746gQ6eprPojJub7ctT85rxjFmWjrLsm5htwS4vjSRWqburwvTP4RnskLbgP21dqicDkVm",
  "key1": "4Zg64wjUv7oW1GMZChYCpz5i3uDxiMHndwBJasHaNE7jTrZtKvzzdT1SFrrQT4V7x5V1uqvTXtsfkVuT4qB2oTyU",
  "key2": "RpymHwqngfFvCY11QdyXpd9sjtbbVhvLcoVMkmd3V7FUoKnCHg96iEVA98YFjkeU8KadowFLm9eB9ay6XHrYqGk",
  "key3": "21cMabNpG3iwhUvcdtBLuUByqmSw5LmePYYEFVnyypYu4xeJZV7sK17VGk7y4m47WHL9MqXGaTUQFNBQhLqK5TdY",
  "key4": "3Q6MzJYfQyKyJ5KEmUXfnzXsiQj4hH1MdaLzncMxzpFoRz1opGjXTmUk384Yf5UwTU5FmpyTtiVs9EWSNUK21wTu",
  "key5": "hBpruQZHJZ84EhBKvEqCHvBBWw4hViY7sQS9VbFPU685DHWTSBBoBzHrwBH6XtradugNHn8mZqjDqdhPBdV8kpo",
  "key6": "5SDS3ok6ftuJotpQn4EBubtbyg1PDVqrzdb9uMpWFfDnoiuhdL1ScVm7UAWTqDQVBXyTraKF7CUwEX1m5RTSMhGP",
  "key7": "2CMdbNKySZxJe2km4hLt2LPbagw88Qi1x3qx7UTnrgeNfipxoHRQrULzgU6bowaW1VkSyzGjSN1bE3ETqtDf5PwK",
  "key8": "3yYjGUjqXSAn72rZLtFU49VpG3Br4kPCYMWJuVZYK8VbbzYC7eyGwdsNkai5XSpHocFhDV6Xy5HREztBD8MjKpA8",
  "key9": "2GSDjcnK199eN7Uyj6vKBuFzc2rsHXi3FsTHtQCGvvxE2UPNeuwDyFhTA665nPAZWwWrupzac1yWHgmSjXXzJnKC",
  "key10": "2Vs3h19Wupf5XNmtikk4PwMDRvpX3f3EbmP6p9imqoVsA4mTGpJByMWszMTetagbktq9xnwuHNqjFhZ2NnmLgywZ",
  "key11": "43xsX4K1rEEobdkFANet6zTxr4FkfhxMBzz6W7jAYPEzXwsmNnVd1KtfJPHmpdgegB1CsyfLvP1MbQQy1uX7YJvD",
  "key12": "94eWfqxdq3KHMNgfmMfoXi4SLtDPqmQDxJ3MKqdkbZsv41nYQF2XNFQy7f97CnB469fyUBA78wZr2ZHn5n36wWi",
  "key13": "4i5gspFF16wzVxUxmxNv5yb7XMj3KNNrRd5rCgm74WVbAV2WrHd79CAocp1LAtuURWMcceQTCWobLh39n626z6S2",
  "key14": "2R8iJPM5sm2gA2nGj8XdbfWaC1jbVk4LsphjE52J8fENP8LZS567jsBkgwAt7qZ2SFgqsBkdzSFoRPcGweocXKqF",
  "key15": "5xbGwxQXNx1tHFWVcguSeJMTWunQrNw334ajTHG6jBVreTvNptaL12dpshc7o6pKP2SYwKkdBx6EMySTGWdiVaFo",
  "key16": "vYW44xeaGoeLepV1ydYhfLHCHUDnCR2HWgGSSVnjS3AJRHPjVLUqeM4GyLo8KWnSZhzMZHsaH7pRE9DhvdYN5d5",
  "key17": "45S3nvZYTFpsKtVbWGVoA7jcCbTWS8n9qev2rafHFrUsQfuCxDYkDJAP25Kg7DkYVNauLgbdYCkYNYKhzUGCa2Yw",
  "key18": "4KYzm1FscffUEzYf6aDFccko6jW71eckmHoggC3q6g9ayjjTfAuEE9yJ28oJWJ9cp926tGxorZ6WZyTNzb4rsG35",
  "key19": "NDDsiH1x9qWVsuUfYwAKZWGzpMmpQTnUm1xjwXdAsLU2payxw1Se1McUxjYizqvV4UDcedkjTHtP3qQ8gpov8TD",
  "key20": "5F9cCg1ZgLFPLw9EbjVXbNFtPh9MTdNWq4osqUoCDRvESyWC7Uc9gmnrphCeF7Lv6znGdgV5dkcFSajCUgUjy9VE",
  "key21": "3Zperf22oeSjiNnHGHaDwSnkK9KVvdRS9a9aQHY6S6brwVNECoiZXwK9mUsYWDxffSJoaskcBGjFskBhXBJiVLo8",
  "key22": "2xjdtnaS95XyqX2uMcr3Met1eeGEbNWM6khsyrJ8RYrJkaxGMkVvTjHxSCYGoM4R7SpAvTqrgga1nY2teAMwFh5b",
  "key23": "5th4jMPcfoyoVPQp7qLDa2wLUHArP1B7nUWZheFJ18uWuGiicdynVgnsTHDkyQtdUhGr1FRiEYtQPsZT4oQMYYt8",
  "key24": "3avHfspSWpCZsNUxCEvPdK5zYEWWL3SQKpZ8enXjPRTTB3UYG9SRMXvMqcXYBgHAkceFsbWydRkiX8LNSspoardm",
  "key25": "2BwuGwRf7kazREz18ZRqFqRU8EJx23pF77zMwr3FEExSRbgghfTXoP8vVGqE6TytG2LmLFPMiD65PAGjT6jaUQxx",
  "key26": "cKh2B9nmiDrgcuNs2nEbY3r8meF6d9sWnfrkbsZ6qVuPnrrifkH8N1iRYuQGA4TLvx872MZAseisgDpisvAkNcw",
  "key27": "3GCpHxN59deVtQ38CgGzFtV2v2rCm3YhZbWuzJj8wgfNjEBDGthM4n9Rj5ZNCEW8mmYbniNjW7mahCBBCkok3nq4",
  "key28": "3LHdGse6UmnsN4kEeJg7n7sBhThdv9vTZ3SrYdEaBo5Ec7PGf3ndjUfxX4Cdy1xMd2MAbx6aowsChvAqZEYEciWt",
  "key29": "2CKCfBkJNbZANpcfK88inCczSgBQE3cGoGRWuNsheXfVjLjaPmQV2VgEadcTS4L7ko7NKMFDfvnhA4qcJQt5cNgo",
  "key30": "3uW6XVsLrjqyPnLQ5q19gM7Z6QU9JKdgVJqar9fwgmkFApkda6z5tSkjy6AMbJzkyrjwEX8Ly954dg5bD51GiNJU",
  "key31": "2saepLCtAPUgYk7mbFHMsZ83BkWkpaHhqmCZiLVPLGLn27kgcwaArs56zgTYgDBWQvUJuKt8tL9ktTECnzftZUu",
  "key32": "4o1TmFMjpTwqxQZvhTNpUJdYrDfWWUCUtcVUoAaXQK4MXoycqXYU3a9paDUCBaCWmUdpdprHXxcYRK6Uwaz6aAqx",
  "key33": "3wVEsoNv8h5qG4EzDqnaSQgE9nxdfJtuXxsKVbXgxpZK97moKfvGmGe6sQuYVpvqeSBuG5Q2WhzXXGAppvKC4dUu",
  "key34": "48xzZfM6QukK5kxNsbKdEHYQ5pufPNpRvqPTdYvnGFD4jcC759Dky5bVPvrt4a4YKjHW3vxswJSZpK2VDUEteBSe",
  "key35": "2VwUoBrKcsSfjexFekwexs6yPHpeBCfjzKoNS8E3vf4rmx7Hki6Yejzvf5DZD15CPHjVzJpXAcsXppMMjJ4G1rdC",
  "key36": "3tWPJBjuszqLsyZ5M4tGidXM95jUdpdKkmKhuJtRKbiZ8FXsKndEn3rDc4Ks4exH4JUkgBwaYbe2sxghCRCgyE8T",
  "key37": "2kQdizf1wMDEFNfSSow6fWiTpAW2a4fxkU8rJYPmiykNZvEvUwZ7ZVn5tpDJrDKKRBghvJkB7Ujaji7YWcaZMyXm",
  "key38": "4bKdCvVgCuNBUxsz8bAccx3QZzYMAP8PoHf24EW8bJjWcCzj4WMNPduxL7aVuTd1qBNtyEsH9YjUiGqHFEimhUgZ",
  "key39": "613JMEJQNphjQ3499c4M4HhhU5LHnH8JH23HiyiFhn8CwkDQcVNmkgoVgRfJnXRzSM6NkYX3L7FRQN3JEX5nYsQn",
  "key40": "5YYGeCtae5vpNHw2gjKcZtdS95YfdFbD19cyLg3j67wxHVpdjw6C24BJAyLdhVccPkDQuHe5XPvW2PH3diaZTBTf",
  "key41": "3EXGu5gj6jdK9UCBprKWHFBtURsaWz8V9oZSXDe3qDtvbSGkqwwuH2TjA6nnXRnGwY7TXvesmYESDvZkjwFH6K6p",
  "key42": "3gNcDdyiR8r8XXABjfo1WurfJi1gwgt8vdjJ9MuDsYosBu4J5Do4JRddC8MVPSMGKAgoaB93CoPr7sYWscDQV4vA",
  "key43": "5dpYNz31SjEocHj7yXH9qPKXo9EKtpFwvLFmLxdb7BMn66531NVjDcojctRU7bKnwgQ3J2so65rMz6GmDhqBMhQd",
  "key44": "UcBbcgJqaQEwFuAWXjU4nSTVHnWXoK9sRT4z16JFSFiUby6oHCuuNLpKinAVoTmKY7T3cajsx7b2fumJ6qHyhKF",
  "key45": "4osiun4CBDptXPHXh3xa3YA21ZHpkb8RVSGT9YfNc5QJrbEVmBuYvjj4KckqpKHysnDAwyArqxcop3HJzc2Hv8Y",
  "key46": "XFMtHiDeCpi1FZjfXxFEqcjh1t6QE4RuEvRstPmRDNVX2ttcexuox1VQSXGUSUkRQSV67Nubw3YWWcKzLBaewEQ",
  "key47": "5ETcjTJkGRjview2rmXmhpzJ2s5ES1XiDSH2qb67GL98fnCGAs4xAGPa4Ncm9XtzcvD2EM1DX9DAuqH8J38tVFym",
  "key48": "4PbaihwdUL451rJzbAJgqB48JGq6od9vwdoBoV5sx3E7zG6jq1oBDBDSENq5WoEyx7MguRbYgWMyz1YvQYEf7CSN",
  "key49": "4DTok4fFbrm53hcDRhUwi5oTuGLky2jPjWkUrafJQGY2LuhSdHKEtbqyeFz8tjo8MHccRULM8BW3NX2sJbitutCW"
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
