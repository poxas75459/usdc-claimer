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
    "3dQh98DMniYKNFnan2wJpmJ12NAacfUxEWDucMnAHwncV6XNH9Uwgrmcn9fWQm6EgmLTahNdgjPp5HbnmK2Xsjif"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33RcDfkYxpkqsRcjvsEbKcjatoVyEj6e4EMTwvPbJXX8jJYLewPa6LNPAuRY7oP7kBmJK6c1gXeKFWRmdjU8uWHe",
  "key1": "5dmpRwChdBrc3oguo5W6AQEvK6r7wASUxSsaUWa4vLbqER2ATevMTpScSsxojFmzLavvebaswH2qJcusbEcPuz3B",
  "key2": "4KE8LTGrr9feRTBibJs87JgT2XueXDNnXu4RiFKcoGNNJVquXrTWhxPVM2jWEedjPk6SoxySbhy8UhLffoNhMFsM",
  "key3": "4kwvSNRjY5uHUs3BruWjmEEE4TGHNb3CtpFhG2yRAyXgM8gZF5PF14reS556vm3ADsMQpWLc4y9MZi4vMUH1Xyo7",
  "key4": "1z8oLkEpVJXcFASnzyUUN4RpCgSesTRUNzcLGVCeXPsyCoUTnLcgiweXF2BLdf5Bk6LZjHmnEM9xFRBwKPxwPDK",
  "key5": "HCqiDniPEKHFMceqxbH3ibdxVpXwLPx1nCSnczuLbdSHxmwa5JqB9Pxn3yieXv8gfjMqcSAHLRdib2aaxFq9gzq",
  "key6": "zcjqj72AcDGF7gdjXxMsEErkHM93TLnqef75mF6LX3TLpRNGvmSt8EpU5SvEEse927h3T2fJuVrZJs15ybdeiNp",
  "key7": "3N11t8qA7RTnFcRqyXCZhdmvmcfhPeV8FfBF5bZHUWVZLP5XNp62dd6EwDLsBTyvwVrR35fzT9RgnmQU6Nbwy6yQ",
  "key8": "2mRiW6WiSyEXq5RRwy2YH1tm2eFqbPDe6RXkywWoHzXxmgWmDRgkdMJz5rJcRGz2wWiW8n9YuGTVbcNXg4SasMiF",
  "key9": "NAdH1psPUdxwsRPig8fNrz2P3fCudSHdvWhZVFitvDYqKrMeHXQ96paSCkBWQQ4iEgW4PK47MhcoSCiFN9JJFX1",
  "key10": "44TXED76JFWU7y9oawTtB6y9hvPkFnuh39xjQ3MFSwLqKTbTpYr4dNTdo67fVNQacsw5uQJahJ3jRRQoYvFAMux6",
  "key11": "4zdw4MhsXfyz6JdnFYHAU5piYphHV27Df3ogG9pU8BcpMD8eivV23GaWHKwRWWHEZY7ViTDunyUC6JfMVHUzvQ2V",
  "key12": "5xUa9gp11TKnF9nuWM6xe4FvVNbJLUqbqD4mBpW7HMm7xaGyLC4xSSjtUEwjnuxuW5DHpmwWdsTVyhVd2Xf2fdRM",
  "key13": "2J6EC3rjNu4LeXjacquvpnAeYkH8Mseq2aofN112GsG7vEWvgZ4aY9HoovDZo4hXNAVPVRqDdWU5Wrwc5p3QUTr8",
  "key14": "32TjfANT9mGRMKoPTaeVLD7npfszE3yfdams1Bds4sgZRNqit2827ZmmDuZixvbNyR5Mq2n47xA46wxodJxsNUL",
  "key15": "4SQPYpf8x1PvHrrecPQXmzidRdJdD9bimT4xu4tNkZirEwCP98ABACjYTAGmas6STXbZuC24kve3PXANCcfBfsZf",
  "key16": "2fUg8cwrRLE7KHeNWywB6E9ogRab2cHypHcj1CpWoHT6md2yKKNwxQdDNSRmAisfdWTmm4Z4KGt1cmw8qHwCDVW2",
  "key17": "4qdV3LB58yzXpvVpMiwKodqpRFqT8Y2JDUgC8PSxjukWHnf9PgJwyEdGGwEekMeNam8edQhJiWqWX1P7bHhwQmMh",
  "key18": "4FsRN2mpxpBc3cTq9gYybKAvzAgq3XT5oTnoGA5fXyqT6EhKxxJ3pRQ6kwjQa9F6Ut7q7ZahAFRJjnLQujfucb8",
  "key19": "4RYADHwceyuFNRwNFQuVdF8rmkF6NTb8Pi9eNxmzDvFKPwUEBN3zbP2LyKTdt9bpT4M6u1675eW4apyEmdGFHMQ6",
  "key20": "ZDwsKhFZC8qtreeb29YdzuRbdHRwF1uGBDJWXTFRNdTWcQs3uVwqgE7rrx4aqMGonYLmB8xtuLmMQYWCFx8q3rG",
  "key21": "2d8yvXGk4u5yh3X5LpNL8XAWZAkmTkcCCy2cg12jsZGjWLCEFkLarG6oZH8jTCQmyb9BzkL8qBWp7tfsZautyZJc",
  "key22": "4MNP6vQQ8pi4T8GNfpcKkAMMViEo5LhvjVCRDkLsWdikqis52Sx6XF5tGjd4hBXmgW5NoNcZXbhg8ey3coQ7LrX6",
  "key23": "625KMJ4amQKJ4jUN51afuHhLy3W9ZxsTpXMDZoW7ZH1cB2oR732Fhrh3MjW3UNa2qwDNoNKuRufoXhpH9oXM2Mub",
  "key24": "21gFY6U6nMqvAoL2rMH7yJGMR9LZzFyqn26otfqyA72LGtDTTQUkx9sCVFopc7kcBsVxLyr8f5UPQoisNPiPrxiC",
  "key25": "51aspEAuQLEnAmV3T8HiTiUjByF8bAbEhqT5opZ1vhpWSLwTrH4kwLeL3cuK9SgbfNVbqMyPA7RtV2qzoTDD3UNz",
  "key26": "2kDaBXaDvCkbVHeTjN5gdC9Q8psC6Ly8QW5VXmmvJz763PH6zu4q5k9oCeEx5nfeMnRp5c4jUxLsynPtt1SuQSDd",
  "key27": "2rr42sGc72k4UzkVr5vuta6PeJyx6KXqXP8aUfB9HYU3myLXTnNzZ9phsJbNt577L8QVZrHPRPsEw2aa9CW6BwKJ",
  "key28": "48qM5exhMvqkfb6MtD4ARer1UauTVT9V9QUgawBVkYNZzidPtW9zCgVfVmrqzWtHkiTK4vN3hr3b7uwYt7Kzx18D",
  "key29": "3cRgV4CQNdh71WMcdqyA9argoTd6VzrBpM9yhLJ3AXrXhrTHucC214BWS5M4PmfWbwMiQyuMfv68FytHrqEEHQsx",
  "key30": "28iBYw5FbzN2DMGY6qzNrFfFfTiimXRdPzEXNKGsBnGVSCj5eHYNqnLXCsxcyykKJUthwxVQnPWR8A788kAdPQmz",
  "key31": "268Xy68PERYg7cS7iE5PHRQWzLjeok7WB6MCbRNtWL52xDpGVGbuBUGqLCHYcaysqkaQRf9gmGzpFWGqEKaXseVB",
  "key32": "V7e6pYK587ZBbgdsGDrJfX21r9ALMyeXWgD3cuGH2SYGzBkYkAxr1PJV7ZNRZnZFS6aANjJah9ESGUChNKr4SAD",
  "key33": "3G5nWgvX7SfveRWiMmSddUN5viTDRYxRqjFiV74TXwzraWoASKgkmdUBPGUJsPjvYPjtcj5mzmseAEhNG4Stav4V",
  "key34": "3YV3a1smUBWNQQdyWZ8SsN299YFNayu2fURVGSq8aAswBsnQutLVXPAVadU5Sc5gx7ZNMkGu4i5tYXBMP1ye7iFA",
  "key35": "27dgUtz9hZFkHYBzYYA5hReDK3YtnsMLmqgRV4JwuDqqQv7DBzQ5EuXir5V6DC2Szh9y5brZXZxntWzcdLSwZCY9",
  "key36": "5nDwsfaixLsAAczxZ1BsrcuppNmQqDDzJHyiPBgGBNwaGPQwBW3GTvyoHXWnnkXeQk4j65z9gs6ymmXxgmNjnZn3",
  "key37": "5os8xMwFSWZ7mpSWfmCn1TFMH6qhGxnYzCLNNhBmWixVtemseCcJvEjF6QtZ41guBW6L8a5icrdnayGFFhPMTomL",
  "key38": "351NYKzMrFYbWtKvNQ887ZyLPjJsPEfo2cM2xiqVJPE7mzc5W6XdYBqergeSE8K3TjinAUF8jxGJhDe9Pjh815Ho",
  "key39": "9Z6eaTSYTiEwKsvV6FjJLPswCGm81T16jHiGtgzmpzzv1JmrHkWkaNoX1xqd7CKrqqcvvCq7SwJZXYnWpXnLmkt",
  "key40": "h877829m7XtsNtryMawuUEbWNoAnzYU9T3NpEcRsJq9Gq97Gz1ncF6wxUK9BqSwzAXc3sR7G7mqgQiRY1XZoJiT",
  "key41": "58dda1i8DnPvekq8FTsp2xMTcwtg1rqvvQMjJ34tvf1qeNX7UjXxC9n4KgN1Nueedq8Va66ygfUmmyTLMhNQdEjn",
  "key42": "4np8BsNN1na9SnVcA9k9RwDU3uwAepdSMkk6u71W2uvigsRSk845vUHamEFWJstv4B34Tzh6Fp1ckuohFpibWKMz",
  "key43": "39Cxv9DPueWBTEQGxwGPenFXXPkbn4LQnuHWZqTGGWD7PhD59KyiTmpdm1DNWzAc6e87mex4dxHBTTQNEgkew9f9",
  "key44": "KSYiDqxqn8gXrAiEgL1xenWyokqt7L4z4mhbDEP7fyYaxZ3TDwLnWzpeHkhTkTsoivMWDuuro9wF4VHSdwhtSyE",
  "key45": "zjUrNLD2FzT9egw13tv5xhDnVaAvzgJpCuUHPLshs7q3VX6FLqCnVisbcphc94ZUs9JR2euzrY5gWUkiNWx5eCh",
  "key46": "vaaiAY4NjKGn7nNEkSYsJWrsxmx9tMnnYBigDkfhU4H69L2xJbQEyJnBGfCQdE9pwbCAG2Mg5dzzDgsoRTApnin",
  "key47": "D3V51Ehsy3EZR3PHonCAX6EbwPrDj5qWRkfwLEVZkUVaYpj8nUwcq8FN3mg4FfS7zEy6oPn9b5Dq5Jy4dD3gyPu",
  "key48": "rENYFYHMLhMAK1SYAdCeenqR3HLcoC13Cq5cwoJmcSykLevufG2AtTvDnNDmyHPqYquD1Re5n5LZGkjRj2LtYNY"
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
