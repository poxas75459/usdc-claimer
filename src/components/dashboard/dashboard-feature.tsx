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
    "U3C9oqK8H2RJvt3BZ6cdoJFcoSDf5W6jb7guxAPe8eM2jn4HSe3P6wQfngqoGafMgUms9MSW9RfMMEMkuNfnWav"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21pHus5FnspkNqzs8BYRSZ7QaeHfJyTxoMpwoHPeoDGG6QpnsSG9DikipbhbBAEKfBQdPjJi7jvK3H3auHFb4esp",
  "key1": "4yV4qXNURTY9sAtCVvYteJrkJPHwWVG7cH2o7n8s22asKSTvqLzPwE2uA9wzkZKDbHzHZvDqBLLKnpJNukxmtbiX",
  "key2": "618LnQLkN79J5LPHjexXryhoKFZfHmgtiRYs35ooLXBTPGueizje9tnjXqxqjGgJjhEW1JweGoLuhUYTNKsx6VXV",
  "key3": "2PhJCHQ8JxfBHPy5Mb8BDy4pAVjeUQzWCH9CN9dw9Es8veQQiNdyePV3tgGevP2NqvuXcCGX1KjiMeyKhgcJBqpA",
  "key4": "PCsxjBPHirBMXwDqys3xt7ivUp8hkLqUp9zNTFhPCog7XyXy37L2awe5ShozGWUTBjjWVRacw2H2sa89r7KEtJC",
  "key5": "36BbswiTqczoenbs5b8TKFQedbEypMyvvcWfDCb5hqajBUZ9qgGRLgZsiX6f6v1RrchLCoa4vVbApipWigbQXv9A",
  "key6": "6EeKBxctQjQrPNBudnAswz9Rf9anEYthy81C3qQkNUc3NwQmFgiANfrrz6991Qt4cAwPMXg5p1xkymMGwfQ9TdQ",
  "key7": "2gWibYbPeo4DkM7yq7rBfbZK4KgyoW5MdRpNihKNNmFy1aDHvgmF4GpgNTLfzWHP2TsgWU5B4VcYvv5bWq7JeExv",
  "key8": "JFXkCnJGgTuTFw2pJXDg7dJdvT6evJhebH6U3qTUVhpLqPT7pyXSf5LLfje44q59ye2Hq8iqceWGdfpJ2AGje8u",
  "key9": "CBtaSUH3R6ntxGUtynRKHUqTeQ374Aoq2TE4z1xCQpDM2dueRZfFWe8RBnPzj2gUNP5t3XgJzoZAmeJhYuyXYkS",
  "key10": "49dGqgrsnDHbZg7BW9sXRzMPQA1HE92awHHTkssKadCbwSj9tH3JEZt2SitwZjXDcdsM72gzd6MVcj2wDRe8t65S",
  "key11": "2v1qDzWiS6ptrqaAcaNpv4QkSkwyN62qk8k5p5mz1X8XqEn7k43f6tfsWTmzH7PUeXJbrAgXWsbLJqhJhP78dF86",
  "key12": "srwDeEtn58eoH9sZSdz57DT8dqZKQnHnM3geSYx91iFjeXhfEqdvbAY4HpdXEMevmkh5vUCFVf1k5DWX3ULHixB",
  "key13": "5JdGVMkBchsvaTm4ctudW4dZ4RMuvfdZgGGTnMwD7k4oUp9AG64jwH154q6KudUxRFrr5fBVjVLTdTrHWiAAwDCm",
  "key14": "3VBTqGFtMt84PDTjRKnGifM6S9qv14DWdzWWcBJupG9rmx2GBuNi8c2adLsrpeisWGM7oPCe6KezvMhokjN2oTyq",
  "key15": "3asRSsWVrkgQSWrMFAry8D2oTASx5A7TTUJr4pYapyuM7s48EFSihFs62URZqrEU4GRQ1cXhX2RPojUJPSVpHGyE",
  "key16": "3XmeLT8eL7LSn8ToEBMYJcRKBX36H4NzZJikMXZpDZPHjc259Tv6k71dXso1VtXTwYdwms3SSobub6wWAcRU7JAq",
  "key17": "63uw3CW4GAf6gaJBTMkw6Nyx9kAoZT4rVNtnXKjjTgmRhKeWQuqiXknzR8XhFjdwo3Z7iXiojzF8jcEVp5NLm6Td",
  "key18": "5do3tWmYbhfzuwdSXedeYShgMJaQ6t5Cr2BExrma9i2xn1ear6HAyri33rS1wdNWAktZTUgs6ZSapB5D2s1KdM5L",
  "key19": "2XtBrn5MRkZnCZgnRscSbvmAeps1kQJYnSXAWVK1gFvQVzdt63zCpdRLY4HG7aAQpMzmipRvTM5zR2WUo5WV7Huk",
  "key20": "4MUysyRAnDgLd8y4tc8dV1PDC6QcYmNg84VPbnQuumw1KxpUZpvzSuVKMzhxpF4iXoXJpXXw5gjxKMYxgVQTJCgo",
  "key21": "2EWvR64c92mjFnuvZ4bz5cUJTHeduKnc8vimCxavQvQXAjT88Jxun7S1pbzGHmQoXH82LDXtnfEdQ94XWAx66o7P",
  "key22": "2qfsuPC2iigKGwQHSicf8PajpwkPgxKiSWYUM8QKmUyaASq5TUgRq8zqqeyLDeN9iz4oAsZv2bigQzrBwXyE5aZ4",
  "key23": "ZwX54zTwu1ioLudAJBeC5sebGQN1G8nACGBULUNmVqteFkxJH6mi8PQktxdnGq913Pavi8S68wD7sYUjed6aAeQ",
  "key24": "591En9pYebG17D4xy7EhW4s6mQb3WE9AvxRQ7F9Effc5ZMD5oyk6azMyt5f8A7MHsnn8GzSH14aThtnLPxJqPY9E",
  "key25": "QupFEp7hQByfPCR3z1yPbo9JtV3hREvfCwHUFot9xposjEsjUYQbAAkBvwLdHF9Ec47LfVkHNo36bxFA8tUxb5W",
  "key26": "4W1UEPzcqfwf8pJFopgzYPPCWdwjo4tuVGXeewtitGWaqaYpvfjLQEDKTZ7Pmnk6LPTAVJSkojzsdDQjoRrTGWm2",
  "key27": "3PiPbD2ifTYGCrkjSWWAkCf35TNxZY3cUjk8ijDcMjCoRtkdJW1C7axe4XDYj25wEPeCQzpA1Jr3JZRDZfhGbhxU",
  "key28": "3WyRXKKdAe4oDVLsKuCgTHsdcC8g7NyTrkSNJEyngC2saEe2UY25MBwxAikTqJTqVLYeMQy1e6X8X8NXYpzmkA3t",
  "key29": "64zbKLG1qhvaQb1ezE5ktJQkfb7BcLvZK1bGmrt4JkVydo2NujEjeZYVtDiRh4ZeE8V7SU6kqh2YqxmQ5fYwfE3j",
  "key30": "66P4fQP8Tz7uerinB5Bdiz7MhV27WV8oG9nAXVQMFiQT2VT2QYbiJkZReWyy94MLpPqdZtxcGzuTqphPzoyyWPw8",
  "key31": "2jQWtxUhvGcThD16cWczmCmY5Q61zUiGF9HXMthygZ15wvPYc5nf6KppBMaQMtDYACe9qjtA6grzmASzHpPWGFLa",
  "key32": "4nbiLkCxdXJ8EiL1dxnJru3UKChxdc5R3oVes9Ce6YsT9LJKbbDLWEBXiUi1DaDRXt5mBagfFUgjomcSaQbnnvGW",
  "key33": "29p9nQEi3e44p3BrwL8LXqb5MS36PVhaccEVaMjxzUE8pczECxBYQCYws3VSkwdmy6sbZA5G711tw1aAsq9jYoWs",
  "key34": "58L5Ntunx2K7iYrSrRg3b49bSaCHxmAWydqGhtz398BLAkcgGkRWNDNNsyy59SYgnpiS4eDnWGHnx8YTTRMhtqiK",
  "key35": "5d5FQoJ8pT63XNHo6jZJqzvyy6sabtHQ19rzFi5vQriUUzYo6aE1RckPamYjrGhp4m6rfvt4P3gn2qM2zNfc2KyJ",
  "key36": "3TdvRkteqfiwTvffQjZw75MvodEdBGwQBpJHmLUZAG4u7c59R1WE9kgE2T93zTgpmFDRhUTujVoKUS2mpzY7coPF",
  "key37": "5gGo3eBa573kZaw6925RGKx1NXQ9j4KbqRDkJ59Te2KWx9azEnPYpQM6NeuefPBbZMnvtGiFNEgRs8aLNJtGt2Mf",
  "key38": "23R7GxkZwfUZCJ5fqoXq2pDo2zA6u9W6iVQWmAWMEP8YzqBtswt9UYRMtb2gWSgy3e1DNavFiHs8Zv5q3dUGZLDE",
  "key39": "5spoBPDXTrfNkmxWh67i5uWME7zYa353U7Gczz2egR6R2jrYMzMyLihCexZ7BdpDwnj8b57kAkMLHvWVQmMnuvy7",
  "key40": "tHphkE2r5RxYMnXVdg2ky66sttLfQBMGqc1ig389qmrNrcs3GFZwjMJm8cEEoroH4jncNE1DHcXxvv4DMMp6ocd",
  "key41": "4QXv9VrcwqtVDzpxR1bTdw3Jqa5LmM3fXw9xmTamRKCaNiugBG9a2CnmdQFJo7GFJ161myfbeJ2pPG9fGuv41Wey",
  "key42": "jn9DEPACneBkATV9zqFVevGYFDDbPxCjzbUM77C9ZrSEoksnJiHbGm5AefuUikr8rJjNcE724afKzGnYrmw2m8r",
  "key43": "4znrSxUBQEojS8AYWvoNVs27oX8Uz7nea4D1z9BRb9eFLCHKnHvqX1TnECfNVkugBNtaSCxJyWaBpWS6QAAiv7Fv",
  "key44": "p4ns4GEFzCrAnEMiSpmU289c3KfQ3zrVdAbX7uhitCeopXBnAP32TnZnguQSRFoo4AqoGGsqScG3GLbvhx4ZpZQ",
  "key45": "57jcLDvAA4PKmrcfyt64kpWYuwf8XbJ1cb4fd15Hq7uXBpWShpznA75BtDWQzQaPVGMXakDXC4KVwHksBwAAaxAA",
  "key46": "3xGoaDNzv86AEBWNbam7YQudbjVmnkrVURyWGDJV7eEw6aedjf9DvagcwwtPbHaFyKwD9SyjBKpZRTZyj1SXGENQ",
  "key47": "5EisVgciECNnyuBdqcnxGYfq6vqgHnjA7kbD1Gfgq2bjV15YeSyXX37i2qQB79tZYHpsDmtsbfsxQp4oGWDqUKY6"
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
