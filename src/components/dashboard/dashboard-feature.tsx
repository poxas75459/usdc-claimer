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
    "5viW3nSMtLQvm1MrtU19axwK4Rzqnom9TmXx8eLoeZ5wfbGW2X8jM1M5aumeATVs7ELp7s41YkbGMPdVGtksvq8n"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gfKPRCzT2XjZpTPWnciHrTJjvm9orXDX9zYgA51kcyNDFAy6iycXgzPQHijn8cUVmBaQFhyCzfZo9718Fz5U8bg",
  "key1": "5Y6r4tHucyoWVcQVjUSWwMtWBunQLxKkXoQz59f3jDrRimuvKZ6BaYEQfZLD5HUFvqc18sXcmCUyiw4FzZauzG2f",
  "key2": "AaS5TXbLQd5LEYRNcqvCJ6jyDHisVduFWgZEfrW7udUBU7zXq6uRdQAuUexCcJxdZzGA526QZ3AWsK2qgY8Sm3h",
  "key3": "5NSpmnWxkuYND36JtwU7xUpC7vkiYFsE48g2YWjpiKazbojmhcNTBTyw5JZwU7iLf2614rdLecWk3Xwfg9HueVxD",
  "key4": "5tKCEhAmdYkqKymea2YxELCk9zQ2ZSeYo1aGdsNKgfhFvYdrpFbP2hHvTy6sMY6cYK2LSP7QumfxffqjcDxS3XbV",
  "key5": "574YT5hV548hsnWRWETooa2LsHNbmf1LStNvPVnfuw3CdAAeNJP6JA2kPnK4XxYvobDDFk3XxUQzNEmPGY55bXhf",
  "key6": "36cBSnH9v8oLvVm7RyFD7Fb2C4oZgzQLCafkL78xdUkhBG2KmqJd4ErS8Em2QvLw7b3uomQj87MWihVTCaxxCoq7",
  "key7": "3X9MbCKGYnSVzcJ82TqM4DW77AjcMMVfqC1ZZdrLG6WCG7augcM5CUH66CmJV2CUJzd5JucUPURWn2s9JzyfXeDp",
  "key8": "5bhf6kaRLKMbt83wRU7Gd9c2Mbkyhs8vSQPL2wdgN3ws2ZG674e25nbsby7jw8z8rNgg5qCU8ch2X6rkPpFiczJd",
  "key9": "54eCXRVrDHy7c61T6fdLQ2ezUUVf61m4Gmdu5jv19kJdLFEg3WCE1BDYSdGe8KNwYo2XzgfmHFe7LMqVohohE22w",
  "key10": "5jUoZpacpfZmTnFYzicPtWBZpMyqwH4jRNASMoQDbJXAHLibKBDFx2zPAmr3QWuGJsV1MudsdivrxdaUQRCwj3Go",
  "key11": "5RpTyfYieLKeuZ18WLig6obgvtceYE6XWUqGQAr9G1JGJwacevzFggb2d6CiRG9BKRp3SqE7sowzvWC2htvQqgAQ",
  "key12": "4X2i5jCG9MnChLABqWmNY4KfyXX545eiofxr5jF89g4EGEpcSn6LfewLMbtD3AHG9JmPEzK5idSmeNj4yXwvktJ1",
  "key13": "4NV66r7rUphV8KDtTz2tzLLwf3C1Fxtd5B4ChD2DaL3xdxB8GF7Y6TFSeMEwRTF5vj7wwmQnaxLV5BSxFTZxmesK",
  "key14": "5zT8S1sSD6KAjCcndoQePHroMJkgPMDE5v2H7DriS1SPUvmJjcFZqn1oQ8cfYqpTLqK1kEWRHUoQbSJzswnFZFni",
  "key15": "36hwL4YizujU1Cp3KCZsyxuEcW85cpnTSWb8YLGFA3HCW9mtZ2AKvvvcZPoai2UjKUAzH7pu412pssqw3HVdoYuY",
  "key16": "oXd1gkiStvNxFMzafaidUJgw3EXsyj5yqJPxyV8uigmYEaSAoGMPZf1GJ8goC6Qtq5hrnurDbFSbghJzCU8RC1w",
  "key17": "4Cc4TyV4yX33ASbboBKEQTSc5piQhve185c4wwWqZkQLbrELfEsixgxndDF86QUqzRofKdK3ztzuLA6Xs7J4TsS3",
  "key18": "2QTU1iL5snLFod21iW431bLGApfdFokwaTfHMjUP2rMf6hKHdM1wQwRQBQs1aMw3cRYFmcmjPdBkAmgXFRSM1YSy",
  "key19": "4Jio71LAkeP4Xs8YqS9H9wSyymD51yvYXYRzqNJyyXpk5HHF9zTN5nYXCzmns392m2W3bPJdDXed9jfmcAwMoxMN",
  "key20": "57c5grUNSkZUfEBi9zAPrYtN4pj1k4d7wBHkcdfiSNESYHMc5DwkXSJn22jkiNzUYW68xLgbsnwVvDmSMXCaFqsx",
  "key21": "2JJBZQ1PHUZZwTKujW1GUjRCyH2mPFLRAuCzXJmim5bjRBkPFekYmejqnSyjFMpJJw4Dd81JaPWt6SQeqZEzCCTd",
  "key22": "2nKXkW1dvrRQEQig7Ctwaf6paJa5CAuC4994jyyfnbH9CUrTFALWdriQgt8hSrWGLppKEMN7v76nqGKBbj9xLoZy",
  "key23": "qY4XKg1ZNYYY87LDSqSSETJrB8FcG2neo3fqaY5F88e2oeRffdH1WtgJ8ta3XedTpZzVZp8HS7XBTU7exW2CKb1",
  "key24": "5EsGJQd4rZj56ubDgZxcRhHMytDcPamyK36GytkkP6ZgbsUHAg3C7NSyeWqYU7oEZ8FQxtVMpqLVWrtGpGKY1n4M",
  "key25": "3YNdJEakG2kW573mq4UMkuqzvuFV1jBd3rr6eLyKiHr4Z2iZ2BnnwsEUCY414Pn8Crjebj7rDzfTieeB2uRTaEoS",
  "key26": "3k9x8T1QAgQ983LZAikjPCYwrfhPvKcJB2CPNpRZBZbabZ43Z1CA1i7BLXxes34kPM928BiZuWMfEhZoqPTskXSq",
  "key27": "4Xsa7Pidh8tsJwngDDQKvRWRC5auqnNKtdDL215RZLyDBRqrVeW8uN2AqNmrvNFEqZFqF1hwrHzfusmVuvGSmSDP",
  "key28": "4ybWbdqjir76g1jGrZdDgGaZ63qTpjT7mYS1tL4FZF8xZXhB7atjC5PPdLXTXPNHxy5VFe5MUUGB9KjKyWbbqwsQ",
  "key29": "5Natp4YgixTZFA5k5Rrcb8KMqXkFQPc72SBjabvBWzdT99jkgXJko8FSyQezh8tK3aynBVLj3Lo2HSq4bb37eu6M",
  "key30": "35wNjFzSRveAkBcyZcHS1j8HSoqgJjb8ckBsdeTX4fktvfNkHEGupMGr9B5m5WhKixNkCqavaz1Ljqf1JjX9pS7X",
  "key31": "5Jwmo7Hua2g5rbxBEhnnDMbNU4hNL9928sJDYVt2tYSbfpCy3L8gzvqUdtMU8zAYijaF2SqRow9PRvZvxpCcFwHp",
  "key32": "41FMqDuHWqd1GzDabgem8q6pzJKHnXf3fKDa5DCBPU7d6qt8ZRixsThGFzMgih99RVyYkR5hfKCJiYprYzqxRbRz",
  "key33": "5x6t94znqdgQFwAdUij6k5s26azcBMKcwKwzzQ6W9tEatLzjdwKMAHANoTRMZGxnWnvnjixozRUmHt93MAohZ76q",
  "key34": "5kff388BuMtt2qD2TMXpDyc5r8XqSUAtuBncPfGnczywbgcvLNGN9FnCiTcojGUvPJtbPQZxFo6sZxGxHSaxoNUb",
  "key35": "5dsgxD1rziqGDdzmg9J6byRnJhU6f19ewVYW5Arj6WEGoUSezG9NG8CzmfrwhfzNNAwLCr2AHe4ffiY45tTLdD9j",
  "key36": "NJGwRaVRikWkiQ41FH4VMPK2eh2dDCewvwN4Xz2ow8ANaourQGTgdBdxQPj9Tcn6Mv6D8t4CwBkuoESxYQ1fDaq"
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
