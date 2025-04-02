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
    "4SUU3s1RzjCzndpbszVvXWXADwyg5gTgm2gBknx1sAGXUDmMCdVH74ytcqo84XLrGvMw2XJx5orjgkyiukM4L5x1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4okeUM5h3tkY9JFeSVjn6EiQen3i1yVzQa7VaTC6HGN56zpTxpfEQHSepJQ97g2PTzNT2QxCLkp5PAqnESm3wdGa",
  "key1": "VVwgbq29zBFU65LSAKYrXbNczjEqiRaicSkpTPRbAKCRxRnMAG74s1yc4t9Zrw39XYP3XKtXwVnDHjVGiV1nPjv",
  "key2": "66RRDeN8XrUNXyZ7KRUnhGT6nPMXQ6yJGMcBtYJar4UHSJoYtuyMpsy93u8jSVUt841gfTPFpTdY9gvAm5AAdCwb",
  "key3": "jcPAEvAdYAbvCc5uW1axNq7uvYzW48DmwcJTzrNY34ofPsgHTsMYDXidfSbPXgPCSGVXt91xeHvtEuQbMvbKCed",
  "key4": "4PYHWXAYeXGVds2WMhTXNj5UaNzAS9BpX9535saaBcrig8uuxmB6tcvJKRcu8uhSwd7q3W2BythaJTpx7y7AsGkA",
  "key5": "5SHBG36qTMWdBgu48aH8Y1be6PNTrrd2vopvXYkHkkHabRciUSpheU6M35La4iQSJypoSmMkb4khCajRSggwKzdD",
  "key6": "3DbjeXNp5J9B7JKYYyUQ6ngVHRdTc5i3ieXuJyFrCuQNTriXSZLqbSRZmJMFEfVBLLM1XbFvYXWaqr3RnczR6ZAU",
  "key7": "4yDkc3k78DEnayhSvGKzmBzd7eeXZst8EtZq9xY3RMYwfQ5mDMa8bFFc37uPjLGDNADvLvmD4jdysb5ovZFYtNzt",
  "key8": "3Vr6rZVXEyihxaUtr28iypBP2Rzu1eMS3u8jQAC2hdB5SsLX3EtGZqgtrnQqoKKLMrXGhW5M5DbAn38ZJGq9AP3K",
  "key9": "9Ezm5Y4B4iV4k6Z5iYB1x6PAjjvB6rrSzBRSdR4G9tuRvLf298kpjyFrE9mgdxPSmw2UMy7CKKTzW1WCcjF62W2",
  "key10": "cZzBHmNLhbkZV6HhTChvN6AusygP5L22NZ8Ri7frv33jgjGXt5VmCru87DcB7WPkisd7H36R2rw5UoPVvYsRtwf",
  "key11": "327TGQo2e2SHAbBu4Y8jKPK7pDfpQUELu9qEbzoou49p7a14owJzLjHWwtrkyLLxK1mjLn8fskKDZLDHJaUJcjrk",
  "key12": "3nHJBy67Zuk89ANiEuo495LTRUCFoVFux45anggvcF26dzUNx7WVheAXPPJocbM7wiUNQMaR5mt5sdKrwZJ6DyCg",
  "key13": "45YHcXajk5qTGKvppYtzcd7v88cHh6fkpWy6hjGEbWx55pzAR48ruyE8q7hzfps3fvjxnf5YEpEjqLFUTgy3mzkJ",
  "key14": "TuFGCUp8SsEjgTvEkkWYSwwR6g8hGELTt3vtBgAqdq5DgUNXxTLwgKhtLSh55ApT1mkgCEzSdjPU6JaMj728zXJ",
  "key15": "5F1FLBJyuWDZNWb5fFUKp6yKo67UFk2pJGXneyGSfL6oHE58MQ8QSemfDt7j8NMMh9oJCzF2ca3aXT48cVR2QQ8P",
  "key16": "s4qVWLsoTWxAMeFFFybrppgbPhoAJaP54rgWL7AASPbAvmxpjRPWafZjWSYj8AXWPh5UR4w7jEByJupBuToHUhw",
  "key17": "YTGGD6dXnPpe6kvTHoD1CnGSvirJ9a7dL8vG9ehj2SyeLmQz2hwyauM7CRTSxZt2KYygRexEnjmsautz9W4GTW5",
  "key18": "SEgcgxygSw9kzNjxhHcv2kxicp1XDWxX6WsJEuM8aCu4HNWyYQqYMTAjr5D83BDJbsuht6QAmu1RJGSEhpM6ntq",
  "key19": "56gMsZgRcUDYWzMyxAYSEVWjHLVKSVqHvDCZXzcaMxSwFk41Mcq7wiyA5N9428YA1hzsXRf5M3zfTBdVeGJcK96P",
  "key20": "2CCXCTVMCek5kqhvaXeMgEszsmHJMNvhDZHKcv41xbbY2GYHwd8NQo9K5fT8F4Cyx5iU2Ye2iDS6tSsger4aahxF",
  "key21": "3FUMVKJnLyuEDWiZZ5SfvWgMzDbtVZh4GjLLxgVpPEoXkjvTky7gxtFB85zBjPXtqkwme7AvxbfpbNRb1bgApgQA",
  "key22": "3bKs2NeVeafVwRqSJEdNyigLW8vFgG9aB9HoNiuXzbkgt6jM7gMWmgMRHr5A8RpaEVdu7pET6fDajHNNUoeRBwSW",
  "key23": "4gvQWEayAduHfZHZYaZZTrzpET2wtsa83N4AV376ZjK63smVsJGjCax1rUFvJKaytLrJHydikSXPF3QbfMFT5jkV",
  "key24": "5EzJPwMRqSifoTFYCA71ZJzWqDDu6RPHxqQ84fDfayaPdd3xhnn51oX2wURSM9sD84f8Pg3Cxv3ioxz2NbJG6RVZ",
  "key25": "Wsvver4ULPfAa2LnR83Piz4irkzYgbHvHv1aAUujUZ4dm67YYVqRHKR9oS2xidWrg1MHz4LCkyUXA5dbjHCSfQw",
  "key26": "5GDEGetiAdsVo7Qz5DTLYZ8dYNqSWq1fM6McRdYuFTQNextDzxT2DMMqeceHSTzdjyLyQBqsLUvJJBNfNGLCaQyr",
  "key27": "2X1iFqPshqWE736V388RShv5ibM5rmjC7rF6aUcbT2kTmwo9AkD4BcCeDB34sLCGehZdBJN2qYYrzLCQHwQgKDy7",
  "key28": "5V22usXbvP4UeQPbbKUjY4BVrxFpSHqcvcdQF7vPyaKWTg9wngJZKxeQnpuxmrXnPxtxEgC2mXLj1TegoHFw2DjU",
  "key29": "2WMSPzgR4N4VtqdGvbit9BwGmuSh1pDLStUfS5NdgUgiGP7VdiuWidQgoTTTDuDde2NAHZBkB6aYpE1ZSLLoHBrk",
  "key30": "5LMQnM7cLFuW5xHdFUhjC2Tubdzjakxufn2YabJHBn8Qf2B3vAs1gWW7satMN2PmQXG9oqNcEtYLastK8gDvm3GJ",
  "key31": "4tXsLH1Z3r3CK1saMvC27fJH1wLNEuzQ8c3mT9CyedU5rNHe3LjGQMRZaPXqEiv2Gb2QxjwNBUGNaenPwLbMBEk1",
  "key32": "ELAdw5BeQmUQzqRm6qjhMmqa5UUnb9XS8sa5fzVBoGddFDYqnpdsnKaTU2fprTBgUXGSPsHFHGCs8Z2q92cHDgH",
  "key33": "3BggmXrRAMp2HTTwXi1jGvQ3Pi21PiQEySW1UVrEMEeg1FUGUk2XGEMHpdeyjGTgeBQkjM1G2QP5orPM88WFu8xR",
  "key34": "4hB8jbm2wnyEdW9Q8J8Fq1mBZgjJN41mjJQX9bUDyWovGawPk6h2jLSsk55Nv6DyMdYcNVKVUFMqE8G72sUrTyLx",
  "key35": "4qLvyqKGrJfhcVwUw8Z895ZhuGCD3hG3y6g3jTC7ef9MV2LV9CFYhBuYHad7XrEvrT5QD44Wn4gqrCSFHtqshZz9",
  "key36": "2cjcic6AAuX2MEFTVnCLce8NvyA8Bsv1Pnzb8PWv3FvkPFVSHT4aLJD3qsCZA8xXNtgMnFRoMxxUtvemFJej9W66",
  "key37": "puCEhVfznPiP43rqAsw2oBjHfkQCJzVsRjQfqvxT8tBqfr2dqZC1o3S1J4Wrjg3yWJEB8bN4R3d8AQ8noMhMVju",
  "key38": "4rkTetXJKgAyxaJRi4qS1Zzq8jy4K3VahUpYaRxS5mvne6VL7igZV8vitweYUmpnqshYTfuZEYyww2axCQWNfLcy"
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
