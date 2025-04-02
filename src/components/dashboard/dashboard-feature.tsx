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
    "SPX4qefBWNBHh3oRCSUrLcwVWmPUHGCdjaQJdszcRhK7D4Ew2PJWk2WwSNjD6fdsiPusW2rbnUFRjNFa9eoxNUK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XKFXTLDb6K7t7z4fGCNDQFj2X5eUh8rjUU2K1u2cfLDufQvBi4ZmbvushfSrMmEy2zz1gPXhEopWhky7naLkr39",
  "key1": "c4osrXLAqT5tSny1ZpUerGk9AjUQfVm1aHuK9Y8nM5zmMbk27m9VTnb4z1aXk5kzuCzRmTv7pcMc28AsUh2hRdz",
  "key2": "4jWSs2gcYFcEMo8GRuTtSVGCdcCU92vmpHGRBCDqpVxWB2me5pwv9WXJzhTWW1eM67fpgkBhFWY5QRnyUJVgM2kb",
  "key3": "3UmvisXXb4CUBWDG8N1LwBJ6wFmyk4CUmLwk1fyq6EwFKYJmgMmtReaopgmirvEESgckoSPLyNbzcMJ8RtaoAKxw",
  "key4": "kgTAT6K7dYkpztk1cRycJaDSZpqYpCQcixTvD6kNH1FdHgPBUwCSh5EjmaX9oQzGTWAVr5wV1Pstg7yf7Jnbz6S",
  "key5": "Dy283MQSLzfH2SFXAv3jSKVm3TeR3baz2i58LC9Jx7wF2Bexu1uBUzMD88hQ2u13sKHa9GfYNwQ9HGMjKFoD2ZM",
  "key6": "3mibvy5TXiuRUvFgucGk8XzreAXLb7kpuGpi9MbDNSnZ27169N2UBDxWJ3Ge4JQCv9SBwLVvHxFyAuyETLeqzGvi",
  "key7": "pRBb6cE4XCVu2goWc6eCwbxWTAjxLhgFaLcCePzaVXP1zBvdAVu1z4PzQXQ8vDJFZYo92duSwnz3JU8v1RG6ZtQ",
  "key8": "4exSU9eyismCNBYQJZmrryyWthwETHzCdG4WSWNrpdmKNbWdEusT4NHUwsccR2Y2YjyX9LdVfGUAA8XNh77J9cEY",
  "key9": "4rvFANrvU3NjNKTZ1T1JMyNJvgtTJ4z9pTVhkGZysYRXB7EKfdQ712yYDs5SrvJpJigp9UxTEh5MWssrpJziHcNj",
  "key10": "2bjucXgxpf33Aa8Nahv5EDaAYcrvshLvjHHVjbF2QedgLCrzsyLoESVa3BqYFfLWH2j5EcBdZjK9mP2WZdJEuV1n",
  "key11": "dMegw7dDMSdbAw6YRAxGxeZuq2MC27nqgutQkRY6rnu5f9DFWvA6ijsndK19sRQ2CPySSLJL6NN6vhsc9qPzXEK",
  "key12": "4xWNnLS7Vd9QVM62gS1b1rpUBoeyABaGgdYEDc1u9gVpo6kt2SThaSsvjmy7tkmJoxziEypRsHpN28uCLLtmowsv",
  "key13": "2hHcqxyHmWuGJYvk96DG3yuF3TyeAu2QNSRvE44zATZGwDVWdPRQi7Gx9y4GcuFtsaBw5MMy2EpLByDipDxPzXcr",
  "key14": "4rNd21eFiutkKzzgtTc1zp1qZz9BRMkeF4RCKijfWerwFFEcErRhizYzT3zBviHvKRxsojqjkPv6Zupmrws8EWUG",
  "key15": "4YHN1mG2RrqmU6R13bT3MjU1yQ5GoQiPG9pzbWHF13xQs6N52NX552NTgE38G2rURESEJ89cVtKgavb9m5jcmkFN",
  "key16": "ZxbV7LCbZWJYM1X1BjtwRSLAonyjMZqeXyakvVMTermwbPoHed2QXEt1SdtcKV8yVRZserBofjNV9ryAhD5Tswt",
  "key17": "5qiimDmh19B92JcN1nLRrYeimTAbiwNaHjvDKXWMcPjyohQTS6o25GL1pBzzU3Q1QtLH6jityk6X8LXVd23T7TkM",
  "key18": "22EMNHA46sRzWwJkm7Mw8cCRvQMugFcF6H8ePZXC8eT2UqGFznJFoCZw9rqtEBi7qm8q59hXi7yU3HCc7Ar2QkyM",
  "key19": "3wrHLb8Srg6Nsq8U8xhJFtzuygzZcoBCXTME4krxgneNcJhFcDNi6s5PDTxSWTPo4TwdpqARrjPPgZd8gRc4XTYZ",
  "key20": "2nfCXZRcKkosrggpPeWUve3vVg5txAdA2M8yArHXFqWawfr3t4oxLkvfeXKncnQZBZSNuRaUQJMEYExhkEG6Syvi",
  "key21": "3RWV2YMFNZymPeoCM14htHe9Ftpek319ATmmDFR1vH1nnudbKa8dT4MQjEQW4V5BjJsjZWwJnDcH1qon9nfrq3ad",
  "key22": "2UimcVpP1tTHCk4RxW846rhWgBewFkazr5UECQnQgFosCj4asMCnCq7qekVYNECr2FTay7oEQjFaxbmwZjuSzo1Z",
  "key23": "4N2VCEWF32qZua4HkshFYxxp17WGPA16GzBhkSyivPHjuVfGjkV4ejDgFg1bojVt1Vb8uUytCX2ABsTRbfFFB26V",
  "key24": "5Ls7DtyGEkYhFM6G5jpf5dNWatuJrbTM6fz8o4opV3xMBpvvqDhvUvinKSkYzwhkkjWAhhCM4PmVSUZMDFdyCq2H",
  "key25": "44t1NzWFxo8NHyNpsLmkhA5Y3EWV5x8C33mPnJoJX2rPVTCi8PH5sNhKpdT8HhNCTUGJSt8W7982cKv1NJsShmvk",
  "key26": "o1vSMfbvkUhRmp4KUV13cDJBDvnLA9nNXD8KdgFpDHkWGEvF9XqCMPwF11YgAeM9NVBkWUZZHtjzCqQmdA7oxSS",
  "key27": "4Gk7L3oiyDcWp18A5RMcuGngopWQWwD7kfy59cW6hkxSjudZy7g73RDfcY5zsNPDq6zZVSAgVfcy8cr5D5PQVz4z",
  "key28": "4LeeghnLQXw4FeSff5pqgtRHknvRp8hL5s4opjwiXRnBkNfBUMfuZ3wXqLy9ExsgomNs67p6djy4xqJptm7TQ7zg",
  "key29": "dttzZPe69rmnUJicGMMZV4P4QEhFexJv6MdyiTz5TEaoWN4YEGrc53QojDckov4mimtF2jrz8PeXNdy2C7YYnUQ",
  "key30": "4v5BQJ8DEP1Z92VXBAcyh8ExbJMMPY4oVKP6fWDU8EK3Qch5P1Pfu8dGQxYBcia7prUqkbEvpdt5m2Wi6cq66CJL",
  "key31": "2dLnuAgZn6y9nK9gKJ8CorrnzJaFWXEyxsNfqBnvQ8ButbapwZQfdBjbDV82UNvQVKDJ7wX2JBtY2kcDJVBuGrfw",
  "key32": "25Ht3vsqgkwz2yjE7nWCafwfj2AfMgxFpdpHjp48fmKsLYyHVmWfQuBxqH8hJcABXmFYDg35453QK3LVk25CY9Xv",
  "key33": "LQ9iLGbBFse9juPA7BscivYgGvBAHWEswSXvUJXfpxAKuy4DEzGmCfHctZQuy7ALzvesyuwTVE38f2rNda2JxX2",
  "key34": "4m59jmgaMoZjjB8JkmeKFeqpT2wR6fk4xZnNAMwEQgZ3bt1gsz7utFowV7txBgayUCFqsGKAdQyRnT9GtEnVkYQT",
  "key35": "AkKr6QNCdgcQPv2j14cei5ZjvUPWzzF6PCeiFgnCbJdSGrCe8K5ksDKaCghD1Yi2Nkq5j6TXgkBQpjyWj9GyZyo",
  "key36": "2qVGsinFgJjAc7fN9zxfiZYwu6o75QrsctDNCjCwLnFeQZK2DKDZBVQ5rCoUkVTR2YcR717pFX1eT2w5itCQwvK5",
  "key37": "2wshu9dNt8YkqS3BEMYhVdBaWYPR7qvkTaiEMXJJs7WrKkPeC1mv27Sw3FH8hXECEdi4R4godrUMcZZynPtWuxrG",
  "key38": "2u7Ha5QUNUnpM3M3ZC22yXC4KL1XTndsiet7tHC9Cp3J9kPrpAQjoRyREmNG3SraefEXBSnyTDS4aJnCwXLDs8kK",
  "key39": "oMdarge1Q9rsneB83a4GVxqbfNBuzJQ75fWdbBG4ngJo64CZaS5nudqoWGjsaeMxH2ULGheqkcUWVg1ugVF11X8",
  "key40": "58b92aKmU3siS4UavoEqufGP44wf7bKZyKzetQ1HdkXC6p9UfkSmgFCVquawC9RqFu5BC1WWX7xoWMJFN68aMC8y",
  "key41": "4zz3gm6esiPC4LzespDLLH8VE7pWCXFSSUwKdRT8HRxsYdnYYtpsjyaMSReKF4v1RfTGMfMKRLWgnfG6isT6xacf"
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
