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
    "6dsuj5cgYZ9zBxzWDWFKko8RVkdkgjxADAFfiK6Ev9xh9WMHhj3ryXRMz1EZ7BFiNM8MEXT2Gb5yoyRY6Zhe54S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jbA5Uq1jEFed7EhoHigPXaPsEy4ekK6XSmcQvSaZAoirGEHDnEZV5V8p1dnuSSCH63pgEjfxKgkHYrbYaG5Aehz",
  "key1": "jsJRQjdNABPSumvSuC4pZjALXvd8eGMhVrfR3bNQ8NxRrrtBXimLUuup6SnLcp4Tgw6wZVX2N5Cp4ruHXW38CrM",
  "key2": "67HJQF9ebpZJ11ttQjNjmsqrLsXKk2FwuZKBtZ2ncJbNL1vnd1pAMt1JYrMtUtykS3QxseyXETW1MxWDgHMdRLso",
  "key3": "3NM4XGTVwiyJqPbsWh4YLN7s2ZYeCu6M8QeN898cHb9Ak874eGL3TnZrid1M52t7TTmDz4mzwtfusgCXdhFZhECV",
  "key4": "3Tc7Jp7jB6zLT5zpPDjbCU1upLKBfQN3gbtFyZaw2RkHfw8BmBEAwxXEDWwKLV9Bq5FSP393hgkU5gyvHQNAYieb",
  "key5": "3uEhfWcGsh25q6Fza84bCsd632P8X1kCkBvzzVEpL8xjtBMZiFij9AnbsonWyeQ31Tt1rhCNFkWyHfXgehxBgHVW",
  "key6": "3RSNEWpmNdTwddPkzwfojf49r7E8QoyWkQs9wEfGMvAoXGezV1ihXhPy2fhci6LFsqQaTNEUJzNpyWEED38Ef9n6",
  "key7": "3FViUgiFhxX1V8ZF93dDHLQHXndbgRmTGRsrrB5ud7BzpebjnjdVqeMdZYQRwAG8368dWBLa1eQLvp4A1ofKdsLA",
  "key8": "2RF5V5QG1QXjSYCRoLvh9NbMhQoVnWpKbako4RZvoR1eKBKC6Q246kAc6LaYNZhu1gr9miUTixp4LK23hpmTGk5",
  "key9": "58PbyVxhFnR4yu3MWbM35fVhuXCkvSiDXmiqAxKx2UM85MALHov352KfrsbNWc2DEPouUSeiCAyF17xXWF2uEqG3",
  "key10": "44J1btHggYEhvygjokf25NpcYd8zNFWfq4rc4athGPpgaCckkscRbtDvDJvcAoTS68G6c8eM8Nt9iRBCvZvRYheK",
  "key11": "3gLTVRfMZo8VJrWDxxF8uf7QgAJh8kEJnVkhwyEk7ERqooEPa14aM66mQpvBhW2TQbK26VMov3c1VMgRHkc16HnJ",
  "key12": "2bXhJtDCxZearQxrnS3NtkBn7yABqEBoD181tiDPaH4sJMTMj4FgzwHfNeJd44pSK1gvi9TQ3WK4bj2RCY7MaYSH",
  "key13": "2bfFH9NEnzQFyvP8N1Z6kQfzyKxkPgjru5Tw9edMNV5o9prwWn1ccUfBghCJhf2Vn7D9pyLAUniLHPRKQQH4WtyY",
  "key14": "56Ef4aphe296wYMztgdbd4hvY7oQ4biiWFvNZe3JL5DepzHdgSGwQG7pnEcM9pyDzMnKbgqn57CgQo3xzjDtwf2H",
  "key15": "5oMS4UYxYuB5VshGsnvhb7F8Y37PfpbtPqX1ynyFMbQ3nkHADUDgXSZVnXkmNBgQB7TujJexecEQkX4maNaeRTkR",
  "key16": "2uggM2PgzWFReiAACyzqraJQLCgdnwna22GonGfifaFzgSsCm3g4m1KFeVFNVASs1zYSU8peSXPTGLtRwqodJoVG",
  "key17": "4uageeAVgPqruccYn5HFJqdGvqgEsZNXfk9Tvgp7J38LEsShvASLExTEj3Bke4K7xPcQWpeAjkALCY9jkpu4Y4wN",
  "key18": "2Kd1akYNnjjsXFLCKcACpE8TncNGyGx4KuW5RRuRqAAQQFpKTQgoS8j39KHqPowqiAsHwxAvazLvKKQmFhrzK4UD",
  "key19": "5gXNFoRKiScKuEH2EfDevoXNA4axeM8hmwNNuiwDndSDAUdJ57XofPRzeRRL4q59nWcRwq2VcT9KcJbp4kpfdciZ",
  "key20": "2exhBZrvcFnVWpqJNMwQgmtu46amTCd1JZz7dWqR3vie3tv1XaHHfU6juxDGgS3pJhv75Q4G7jK7kdEcS8Ykqb4C",
  "key21": "by1awDGgLUbtDm9GFnEfnJPkj9SxxocnuVGVBxJ49tXc8LCZBmKDnb4X5suP8yN4zpBv7wsEaAx3p7Q81vbvbSD",
  "key22": "z46RuEMLSjmMU7noW45tAGsNeoypjRcnPjrGaaxxHja7GjSDFT4gesj3qFLLBjfm3DZWDHMa4EpDHChjAW7sdxA",
  "key23": "59tyP6jNY5z2Y7yWg74y2aG81N1dnK9WAhYBnDZPJe4rKfFH8mtcKVJ9fFs6rL2PGjfL1CgbGMmYVWzd3ACwi34Q",
  "key24": "4pCA2BQcKySAA7F4KdV4FUwN8qoYWyeC9MXdTFYKsKVWFKgviBFfgtdMoURMRPF1aHq5hLb4NECKsWLWZVipGYTn",
  "key25": "4Ddifc8vMAuypRitNXGqHAwsACZnyUnSRufzsqrKy9eoV2vLFVevY7kwSaj2DW5n1NvpQ3XAfmjcMjsgwbYZM24J",
  "key26": "2spWZ5HF1a3kkWmvQ351GWG75fiaHJpNenbwoT1B1PPoZ5oJ9ZT8HzrTuaHaKND4oSREbmAvQ1c1VEEVSpKnXfiS",
  "key27": "4MeXbQNUU1rhnG9a5gkyGGDpirUkUUGygBpk5KWvkPG9XLsX8vhV6XnZNXuCZ8EWg3S2mQ4KkjcbYuhKUQ3Zurbh",
  "key28": "4P8bWj9rSEsu9Mfag5uXzEHzHQyBSy75QBXzMupxTXFSiBZHpafRHzsPbSMng9g5ugsaoHiB4tMnUW29Lbse2vCN",
  "key29": "rZDsNfn5GiGz1EPuc1zfSGe4uvkuStBX2PeB6GZ3WqVmJFAGCtPwTKHXjW9KLFaWXjKm8thFyFXNN6R2T4p5au2",
  "key30": "5TgL5recFaQu6nNeCBQ93DLfbwErj6zSLDZRgYXQNtHtNikepzFsAnWh4K2m91pMqQ8VnNae2mQ6xsp5wCMKGXjq",
  "key31": "4EM8W9MoX9UeJxxEF3jgii7bwQ9LmMg5SAtXvq5EMH7hutRYxo2WzYow69TUjS8yFkSCpyh3PTNejiFMUvJA7efC",
  "key32": "5qgSKhwUE8BU2UjNyqnJCNxN9H4bsJzxr2BZ2a5ccsUrf3YAgMRtpCDZ41QP7ExAgSQB79oMRxNEceBeSsMo7f5Z",
  "key33": "3SHasaV6VZmQb84uCzqSufT3XpiVRRVHe4L1Nb6xB1je7iaKU7e6dHba8N8Rb7oKMfdGmKec4DRq4omUdHKZkEi4",
  "key34": "512VEygX9y6vBd9jKjJ3XKVdth1QUM85hTpJBq3DZp6cNe1uiM7FtJnqHVfAw11EknEaHWwtVVxcx2XM2rrakCP2",
  "key35": "4HVvzFuDA6iUF4T4wGoDVYB38aXnD6Dvp8vF9R7rrChMaujYpeMrRzMyY3HLX4x7F9zZ5FAEkTkAHx2eHNFemuEf",
  "key36": "3CgnhSK5XPwWcidxe1PHFGwoUN7qhs7VxHq6TmQa882r9VesgBPhqs2XQzBXnRf1Sa8r1g3NcPVVG9aA85vfueBH",
  "key37": "4PYWEJNqZmFYgFyLqZ2g6cuPv1iaMqfhnTfvvu1EtDHQLGHLBi4GjUoqCVYPkuH3iZxXeieKTLqT7ED2w3nTmKLu",
  "key38": "4BUhEuyHwP9VSRDPemQiGNamSVZosZfypGodetsULJHezdsSEY3jPGAnNFch7o5rmGFG4XGG9jXERk9e1jzsWfGr",
  "key39": "Wxi37HDotVjajsHPYZKHZNJjBhT8WraFjjYvHU7ZQ6JZbEPtC6JgamXgjBbwfCJVaG6TRqJK74bcCmDiCu8RTYQ"
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
