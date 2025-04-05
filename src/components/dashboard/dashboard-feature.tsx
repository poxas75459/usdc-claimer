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
    "KNeJxdxz8x4wbukViMJsK5jbntgkikp9DbsLGejGVmTosqJR6H9BHmA6AmDu817vDHon2eQrMY8CZ7zQcAhmTkq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i9n3gBo6ZJXZiqHMxAmbNPTKfvcLLEWx5ghhBF8YfVzmQUzoo1SEX5ZJy9ZrkhMGmVGMyfkLvomYokgXDBNAWTN",
  "key1": "4vhTbWaRszMfMS6GbpiR3PpKuBRyH9Mq9MybUV9HpxnJThnqNML8n3YYv2tbUq2BXK33Ftu8wwK11YmQL2FL5zoT",
  "key2": "U49CKwsviq4UZDodyoMvSqvJnjkZQctKFmRm8wNfSNU96WLKAAVHX4iK3LMv1Adf1AcAbWVMsshqi8VbT6UR2yz",
  "key3": "5RwJNfEhL6j8V8MpGJcq1LnzZzASsqrsK9TSKNtT1MvUAA6RMz6vtJ5XHHmi3mKvL9cCv7uuebhJReswX519MPhX",
  "key4": "63LqUGTCTVcJtdZsgBynHbM6K5Su8WGDuEYKBo1ts3SkyEQTLodnD3Hqq2jR6GAVWgsu7QzuhcvHiNLLaKgvFk3J",
  "key5": "FtCGg7exB9Ss2mxi1XbMWTW6JtLTobt67ASzLNgQ7cR1xa3povqFAoGTAWxko2SQEhDP4y2rjsXp6ZR7s6uSu6Q",
  "key6": "4haGxvo6hZi4W9AiioKvAvHiUv4mi9icXTXTxaifkurrSt32nkr264NKChA5aFRsgXx1375d5KXHTznUnAdoD12H",
  "key7": "4kqiVmEDTaFhAqJcxzXyuYqmNTMWEuAXZ1XFc44ijxJc4K84WYkZRn9RUZbcVpq8GBWLbt8Du7eq5n2UQNargSnM",
  "key8": "5tWycA5TaWbGmF2rdJVav38fRgH6a1it2hYymGArPeGBKE7YhckTKYAa6wiwKTPLVfUy6cefUv2jA6TrNGHSSTop",
  "key9": "3kAGDCHQUjkXemuvwjgGM6ibKQ3zXxh75BrAJ4gdciK1kzGRCbdYsTUWiA31pqGHnH2JGug76QBBk61h3J7Hzw6N",
  "key10": "2t6KBYCYGooSq2WhuyqFceYWtBi6ZQiDPpQMDqY5kAkPfaPBSrszG5Qvt9NfNEuhAhrgiNcuVP494e8eieL4jWxq",
  "key11": "3YvaUyDwhEx3Nt5aqziHNjf2xBuFTvVcHGd8Euf9hpxUBncNmQtCUHkW1HYK5tNkFEYxyHmUntinPq83jRRXknk3",
  "key12": "2Lhhm6U5EgMWCe7FMh7qyFgDYPT3RFHfXZe67HUuvagHpJh8S5pgBExKGA6pGeDwFqgs1ZG6uY3UKVAvB9nPSx32",
  "key13": "33NTpbosH5H3sf5szd9YQn6Q7DKfRYNj2scJ17h8jVZ6gC52F9tkYPRFPyEWA5XRRZCGLSs2bQrPeeUKsauP7vte",
  "key14": "45DDw6z9AHALV9cYt99z4bJ3KSLYkbAdmDZQZ3pRYFyfreVrGzDLRES5vdHiePgpiNMemYJmmsHsA1bpqHXhygaz",
  "key15": "2xD1DsCQjY74arMjP1fHtZ9fvHk1e78ND5oknUif1UQr6KAPVyrj9cXvY7Nw2HrF1baeX2Piq6AKUUpfsq7ANTJQ",
  "key16": "3oYQrJEhCUWg6VbzCci3CNTMdbawAAuxYfDAdpG6zUrJNmtuFGAohBkJTY1ea1hqWwNUBRu1oWe6ZYisoiL5FzAE",
  "key17": "3LYeVkq9fXMwV68EUdPjAAtZnGSAEL5338sb8AAeJwXPb1Rv7RhdWvjjpqR7zgiGqSN13mcRchLCSRJdviAQpUeY",
  "key18": "4S9cDBHvPcjBTJuGGSSjXM8S2oQXzvuGPvLB3j4HRhmRKrib7nenm3XGSE7cFsmVUnssmdERsiTGX4XHkQinT1t4",
  "key19": "2ooUBakGZi4Xrm1iCJeHEeAfcWWjRBe1vjCnFTw3RnnSQfVbiZ1oiGLsYiCWQVf9WD7PafYexUaSCv46BWDAL9CZ",
  "key20": "2QXbrQd9uDZq8vpD6DJX9mSFbDx7VZNqcRuJmWK8H7FsmPb7mnt717p1C17CtzJ7gb47u4NN97mXWYZCHjUYubpR",
  "key21": "4hMU9BE56gbYKqoJGcYcqeJntcM5Lfu2zzJFxJmYu8JfKBs7gSSfsrCnutAZVdiPYWCCGnbnkDgx4quH2MgGiXEX",
  "key22": "MTNpDnAnkb3pjDcQk7HedQRrB5QLg7fExPjfBd4pgr92iJrzvih8Fje3Z2z7jaVX4bpcXpbgevsiA6mKF2S9SG9",
  "key23": "2ob78WJreUF2nmZB9NGzk1EFW3eSjfwYVudFE3vvkEQwehqtZFYCi9ALsKErpCNqBun69vbENdd7556ZXghg3jdu",
  "key24": "4FYs8HvSjPpqsgXkrj4bRxUoYWrLSnG1jg96JeXTaUJKHFGJHXVyQ3oyZ7kYfTQBztWh7faKtJTAmybwgdE33xU3",
  "key25": "4bwGuxxyxrNbMLdvuZfuq9um6enc7Cpx1BGExkwnxFdJTochMPMN3QBuZEuJzqdaX37K75DaJF6dMvh74GjCzPWy",
  "key26": "4zpqFy8yHSwbp5i5CCRXtEvdjQv6og2WiG6Xf3UXbnP8YTC5AP9RZAsmwWLv5R42mbH2hUgtsg7C9UdBpzu9ozU8",
  "key27": "3kdybZTebZGf3eBucgBkbKvLnkJCgu5m7g1MnCM8q6g5BvZ4cZQUx1BXqNazaC33oNbT8GGmjAS1nFDXq92fjSmK",
  "key28": "2EYPKSxE8nDLBYXzQGCNLmY3XVvx2U9TNTsnrs2YzpaUWKLM12JnJYT9aZxbqqMDLgT7Zoo8WfiUSpad11oQR4cs",
  "key29": "2b8kEZxRx8RoZVaWyhcmFS5jUnjxFWQ5JR8mKYUwBC81Tb4aXU5BJCCKjhhyJyLZBD2BVD5uw82vjQJnp7qVUbz",
  "key30": "5V5LnRq54ih41vjKrT3syHru25xZXb81J4Eq5znzdZm2HNxxVKndeiE3DvLkqycdhgHSjCuHdZiNVXYa1UHHbk3W",
  "key31": "55jzTXi2woQHNfWN6XKjMUXsDgAFnJbStRFhuSSSZ5uqG93ufd7dCGzB2FEZw7BbHJ3PLAHRwxchyReVT9BZqg9n",
  "key32": "656364F9J6pQeSRkuqHu8VnxziSDZEK1eqaabZnc1zmx4yDjYMyGrAYZV6VdyBhKDSdTcWx134kyBDdcTsHUqTjF",
  "key33": "2v1rrUiXsJh2S37rKLC8q6bsKrUBVrfH6DzmYe2vkyYg7dYAXvHmfAE8SMHHDaUtUJAJgKQ1qMCXA8nvekgGL63V",
  "key34": "LxzfH3brbaG7SAT1C4ykuPHYPpiJcoPJ5iZEVC2teZfYjTC2PhHrfszgZwVvHuZroA1mND6HUXMpsjPu9zDPXhg",
  "key35": "446RW8SJNcBAby83Ce3bNVhDPbT7vhTefL3qRUZ1EsiRF3hCntZizzNFespoMYGAwdUfQcE7jNcMNZzvoZM56Q9K",
  "key36": "3jBaLYURLFwKMw7CfLMmB6yNZhFC3roEuLzKPPF2tj8pX9stxryZJTm6tJg9BZH1nmBsvbpTUpNwyfNfqA1FQrYi",
  "key37": "5AVpwwPayEKpho9fE12Y5pbXRFDVecyGNCRYQnb3R7DgADrEAYqDvX8VS1EXisy1irrDHM1x2qfVqXXUvSXZaoH9",
  "key38": "31EmKhpBw15TKJcCzBKh63HYTMCpDVU7tLV4U85184exD61BoZjZ46hHNG9ByPAp2uAABN6iRSLA7fcdQ9HRbcLU",
  "key39": "3JME62BBDtzZrehUBFWNg3L4Coosa44fUhsNX7HavVji4CS14HvNtwgPgkKcqc6E3X1NVf2oQYmJZenhpgjeyYo4",
  "key40": "5NzVhs6mDWLf72vKWYSKDJU36CJhYheLhVCYCSMYjdLU9A15BbcEqP4m6EMqnEQn67D1TzwUJBMzA9tNii3UVB6K",
  "key41": "4YFtxb8d4bUg12qpA53MKAEQj3gEZAMFmpCmgq1PHjsFNaGzovs51YDpds4hSaU6dUwCYaTQNYXiXyiLeaUkXqzk",
  "key42": "4KgjTQHA7tdCaa7qcTjJGWhTQNjEYgFCg4Rc1WfPETVobTFGGVH5diT6C562U3ixGx6jLj7uQsJPumk1R7kcmLM7",
  "key43": "5JFQwCk1cWqmQmJGu8MFfhsUzGAK5nYj3wmjnLdTuxfvkLuwic4juinBQXmfYat5wEWpvUBTt5yGYaYab6HyJyg8",
  "key44": "29QKNHmirHHWaJJBeTXZ24Y291YsEKKkurAaQBn3SAuYZxb8YBPDymnwcv4gvHkvnXhUva2q7QcRzwheeJ1HaR42",
  "key45": "4XWuhEZWLeexzMumd3XpTwXo8gn1W8Tsniu4wytBqcK3jwHWQf3WKw7VEDpwCYaw2YxSW1u5kcfXcHRagAHZ8naH",
  "key46": "35kM7QudMKqEsfpY1TZJ8xWtZMLn4W7Gmy2MqCg7gF664t8ZmGCPsG4HkP8BVgNQHNF7sAjWGz3iUWZjg7JX2rM1",
  "key47": "4eHuZzj2efup8sT5gBgPenG49kuN3Jb3AGuPWU3fJXLHEW4vg7uYbzPYa9UmLHqEFxwTjWJpyZrVzgZ8AJyCADVd",
  "key48": "6C5C5XY3sZ7EGC1KD28J9hrXFbUMn5jyR2EpAVrbPGW7dZhfJorLdxhkZ9qWybJWizYMYj2iuWVwhGQSzpW5P5R"
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
