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
    "S8mfi7VNiUkn8gGAHE4iPyPz2s29VYXgrizEpt7TLE56f4LFJnYQdzP8T54J7gNYd1QHjGtk4ZdU2idaXCKdyyA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kKSFEA5KfMvdzHzdTGisvQUerFLrqUN5b4QQzqNvB8uMK7PhvAQyHRSkPUqZY7mNapT7911tv1rnSzfSfMZmCSy",
  "key1": "5J83BFXnZkiMGWUDKHsdexsCDts38sPrDTK6jaK1pjrUfNzFYsb5Lx1S44GZgJcTo9Sfn6HQ979kzm4CBSpf2Csu",
  "key2": "5Z51Dsr1hZrLrkjfAJYbr2ggVDzTuYRDXnqMEvKw5TdBpxyFTqU3BQqEwwD8uShXGUBXgqzoepFB2NL7xu9dF5UB",
  "key3": "2a4KoiAGrfBKzzRnvtr2bx8ejNpL7RxQNidYmJg8zEpjk1U6hiE2sH3vwFNH9dQjz7PZyYoUJh9HZbFUQJunYw2C",
  "key4": "3c19YRt68dgcw2411YHscc2Lo7gPekMjKY1dhU8YEi5LGtxSu2iBtgN8hqk8HDaish47DYZAHd8UZMw6ZnnGZt4K",
  "key5": "36yoXdutHyoerwCQtQVQA1Nsk9tMFGUzVJEehqokhc1oVA79wzur1ZVr6QbWpu4NSsXgM75UkpZiedfChS3XZT1z",
  "key6": "i7SGn4AeAeW43FreqjMb8HZnnbP5x9gzTZ6d1794R3oGzkKuQVKwELnRuFByCgTfdn5G5aytjNab54kDVANUX65",
  "key7": "3d2gd9nwniwuYpUydKy9jkGE3wSfnDUXQefC9oKKEx7T9fQuYL5BhHJDwb9Nr3X7c3cNLkgcDrbzVoeMaxFNYDSt",
  "key8": "2b4pNcfpPSe5BK2S3wDY1QocYZZbjdPcc3kMLGoHWCLZhmk57mCY4ykCSCoUjgEsPPP8vsTZAJq53rjFhwNDveB7",
  "key9": "2jx7dvKGKgb53HdYWjaQYXeQ7djH38FPU5CTAG2RqmyUy3CV96Y5MjikijBjcx3Z5iLGZZwvghiNT6yGE1rAiWFE",
  "key10": "3fgw3ZEsVXK2t64M46u64KbBECDAswHkubD1tLSRRTrJJUv39UctPySiHL9fKcbVLHkZMCdJWt9LuspMfntUbBGG",
  "key11": "51XgmVeSux2hdchpuaaFuqT3Z4592WayZJ1kHWHd14PbhA73Bw9Bz1Eb6djcEEfFJRvPKNqeUpnP5rdivcYBTitc",
  "key12": "QCWovimJz1EJdCTBGjDeEVTAprgNLRNku3uh29ENHiLiwukoxZ37NgEc99VnfxWChKK4KikfxhfwW9arKQ9fXrn",
  "key13": "5xizqkMP9NFfLMG41XTkEQGEy4PE8Amoux6TnVMJ4meUk5CS8KFAUopUA8V68i9rTG8zDCqWjD4xq8B4mjfQyWCL",
  "key14": "3XEa92e6JRy1snJsi2wfvj7XnFqyhMC7vJta7cox22YV5NhFmB8xYCVDuTKfihNfF1iVShjTX3MZrRfwR7MZbXfk",
  "key15": "5xmSJqUYsPzAacvJ6oUNfsTjpUDbM6AtS8vGSViYkte4pr2zLXyfxpDGCPK6f9FjAAJWTHTkAkqhyT8wJWpWkTFS",
  "key16": "3FQxCbWFkXStCUKFDLDX6ApvgKxb8366vPRppTQsaDgnftK91gtE3CY4ZzjAdABstniZg78zMiYW3s4jLWNd6Mta",
  "key17": "3aCgHQUjhuVUXiACVaXXUvAH6VWexzqiPj7Tq8RCwvmnfyErgk9vGdsGkWJ8brLY7SBxVvqu2vxZkwf8sRndKvAy",
  "key18": "5wbCDant59uxAFEFx5DPLeeL4DUKj1jYZu7rhYvzNGe3vtz2AjGTZLUp2mf1jMjbhmT6mhscwuZoMNpgKpLqk97m",
  "key19": "2axbPGDaumHRFWqwnb7jN27MuXsjJ7NA644NFbApJ281vToU74GvaKpaZzPsFpEY7ZBvLyMEEu8B8bT2Km1jrWoE",
  "key20": "5N2od2bDPBu1wqbwmaKDQCsAXCS9zxqLyGabDeLUcp2oZxhYXh6mLSEWad1y6Wk1DJ64YXuQXKBeBRQ4SKv8ftUX",
  "key21": "5JaeMrESnrzSzwpEanCbEnKdHTuAij75Y75As9hj9Jcf862gBfsswfrSyqQrGzSF9UnHiSuTDcUT95bgpiqwLBYh",
  "key22": "2KhrynwLjYfsGJJPVVEUqvubt5eT5wu5DMZ6PufLdT1ny5HMepYe9f6zy4mNAtXqjZjosSxcTmVRLqNJvvCkmibc",
  "key23": "4FoqaKScTC9oHcH7Pag5Ed7784DbsJxJrsqZV6mVhdBhC34MYMExAZvhuEw2ydqz6kCqY7p1weax1DZi1q8p7AQa",
  "key24": "4DTfZZq2Vhb8nXJDgxpmeEKe5K7Vt9XbpcBHJmwKYTjQS5NtcsmG2d4PZMiG1UqHHYc1h9A1XXFREAP7hsaMSq7c",
  "key25": "52ZYyEKqc1foGWERPXNTi1PSjmL5RAMEiK2P4W8YAArSK977Lb6UDmTLpcMaT9b9cZuxUZzULuVTAU8PMdCfN6PZ",
  "key26": "5JdcqttKD5vzhzVRXFF6mLHJAZ8FubEiFz9BU56E9ZLx47bwePzeubPZAw6oGcbMw2dbYJaq8ezugxAFRMbV5PfY",
  "key27": "5cmUZH2oJxynV1AoHHdG2JjnToELGmgdzLr2guerkdHSVtZMZwjq3du7HpP3NL2bH8Sny6dFyCLEj38RPntdTkTX",
  "key28": "3KgtabF83EHfU5p6WUCBS1ZyPQYcxeqsQ3pUeKKz1UP1GtYWfjrRNuwUffHMyPH3aKbwNkYtSZfnoBJSVwzwC67M",
  "key29": "gw1XJznJZkExdURq79b6K5VUBfjZ8cqrGFq5rmdFMV8ZURGfE76B4P1hinWr3ARMFSRdTeQcZBWsXW8qSyo2wYj",
  "key30": "fpBoL5w6vC5qfNthNMUaSYpuTFGqeo1UAa9d6MXvTGpYdn9NSKz2etAu7oHKTdrktnE7trwvD8RxZnZmnASh3B4",
  "key31": "4zPtHQE2Vx5YxGJLnfUfP2fFmsoB9ATLrqvqtMMdTFSMWNVDkyXwwuDLCfgCHWToFb2fk1FJieR3GSpndMWa1NTt",
  "key32": "rvwQVwMXxh8oadtcknbuTR6iELNsDSQMVD3ukKSnyAzoxaS7qGo69Dnk2zavYgkpEkEVgw3KF8CwmQd1qAqfHct",
  "key33": "23KeJvpYq5ZTB1vr4XyMX3S5kemRPpf6XDB2wdNNebNBzqBfE612NRZ5V3LpF58soXPhw8PHMdVgzcoXRS4p33mS",
  "key34": "5LktRxnJ5jUncqRydoeKwVKf1DPKqYHaGieMTKT3DvM1AQe1FD2S3pAvjfzfWTaxG46A6rJjHgfLSbsgxN73pGg5",
  "key35": "4gnDcQbcjNsehnWypbr3Dg4RuaW7PgVeGRppfeibbgcqpsHARUCRbw12JhdJuEEkU9VAazgmnJwwtmtkbMFUsfj6",
  "key36": "4SU8zdGZqg78JDVXVRjA99CLzc2H7gjdWbLeSvT7mCFfdcdrXcuGEwS3WPBEm59qT2uA1LQLmtMAqkKcuJB5MFND",
  "key37": "CFaGtfVPDva7CYwyLCRgbMaRefiK5C7uc4yoKzJX8Z8qBYRvDjz8o6FaFka3RLBN2pgQYMoKSZxaLbqTbVb2PC8",
  "key38": "2tjpMmn63pj8UytwHjdSgwkgNLhN2fe3gZGaBVAYinijBYV51U6oKLRLNH3dNcP5GcBGxi35Dpnn7YoyYUiEXyHV",
  "key39": "WA9ewQdq5oEkagpw773kyNLtEjVdsKtNsU3w8V6bWqWvsWqK8wCgbrEG67egLybFogWyuURCSXhEoY2tB4qh8J4",
  "key40": "3Fjq3e6j3ErLNQW381oyFMFcmoCEMAXawGGgRpvoJ3bSiezBPPB5dCrVCD5iCzux2dqQTEUmv4LLcXWoqMEPMJ9W",
  "key41": "54Hdaytud8vmBW8NDnrCsq1smHPMyJciVSC7Jrfyytdhp9qv14ney1DrzEfEd9hUmatyfX6ksocZkyUfNDaU7SER",
  "key42": "5viqkNPteY5LgsaSYGefXCZvrdJ6ijgfhFQxuh4BrfSo8M1mDQGxaLXVSfU4U5KuuzNAB5mbDoCJnQPegsMCwGbf"
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
