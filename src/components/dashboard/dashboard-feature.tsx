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
    "4s8UZKc7HcJktKfmguZkeFog9gD2oFUNeEdTXXqwXSwcGYsa13DpWXBYVsQecL3fbkFyCpvhqBihVjJoexuKTyTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61jBnr4EFAH6jqLU3KZwbNjADHn3E8ZYT2EXS5FqCTDqaWFmoR8L72tBbje5zZdEsNvpSYQzdsdvSvZ23ABjvm3n",
  "key1": "4Y6asm2WsFu1Sw14S86VvG88qjw3RXjj5tHPkbnEQGC9yNmd8CaJKFRhy82F8ihkcPMGVNT5MYFc75rYskmm5qX7",
  "key2": "5jr2WnA3DcHr8aksbamyziSvs7xLBCK2TKkL7EchDNMVicfhBJFFcXGHF1vTbsN4m1bqp81rya2LPpG2zL9sbJh9",
  "key3": "3cUAo2C37AccSACS4xQd4PfLYmFMBvYBiTrmNyDgT5noXH5biFYBbMwEW257rN2Htj6P27xzc8szcfgB8DZJDF9d",
  "key4": "ZCA3LUS2hDpVQKBcPGFwFyU7rtFJHVjPqMiVTJLuWhfZxPW9v6soy2xnSVbstgjphpVBsfk9hH35XrH71njyrQS",
  "key5": "3dPKC8uqmFPPEgCuQrcpwGap9pxwhRPKMgjBYbP2Bonu2Lqqt8hwacb1phUwG7tGkBrGycWLGmFwCT5RbDqRs32Z",
  "key6": "37xasiFyQL9aEk4GY7T2VorZ8cC1Nn4ZLPSUKvuhbnN9XJFaezFfJKJ5eL26pNwq3KfVBxtMcGsBTwPRMg9AUvr6",
  "key7": "57VMbgxXtEQkzgrvpnXAbM36nMwdBi2ANpwWgqFKgek3NvqAPCy3hqbroLtJzievCtb7yzp6LufZkjfMs1BRBxcC",
  "key8": "f26WS7jhTzRiu626gFt8Hn8aTWJ9MyEdAqgkCmsLynHdyMe2DsmvhdgxvpGqJgrSBtskkTHCbZKe7LqYb8mVEwU",
  "key9": "LYdyLzRF2wNXPVFaChQ7nVi1E7y5PpGRPSgZvBRR6CgahuEJWGFR8gHidWTazTKmLaRi6BS7SVuhyjhvVEyrxCh",
  "key10": "4vcijBeqotrXt7kEWoYc9L8Geuf53zUsUfgtvfEurb3SixsMD9Djrg7dKh17kGBkC9zfqHmKzqJgd434R1VhSoYn",
  "key11": "2kLXWchEzBEdSVjjneXEnyhHyiYmoT3UrRsHQTGhhQNMGPZyGv4nrAhCW8xEbRHfWPTdqEPRPig9yy7DWU1ggCaY",
  "key12": "37J2PXJSzvAYyoEa1tebTgCsdUk5jvv9iRRCKCfX6kBDt5iWCC8yyTrsSvshi4zDGetHdeAjVdGvXCFg2KKt7iGb",
  "key13": "3rMQ1kC8Ag6KZCAgGmftsLNCZJRUSKuqzYKeJWB2jDQaKaCR5ySnnZnPv9XEE96vHJjaCW1v41FLNqQZzFqvaYMQ",
  "key14": "iN9an8EetHiajVoY4J5hMuk5mAnsdvV36VgXDMLqhpRFdTCeZTVGGohpjDoCHZMPGut6Xn8VpWsjTsU5818GLRd",
  "key15": "4KSSZa7shBUeqFK2fyj8dnGZaGLGL3giqgopergedTp4m2T35j7c4B3tkDgWjfDtfY6skEwtNLcDBTKAFoQQrF9x",
  "key16": "5R9Dwr16HqC3b1wG9vQ9YLgRDBYBYwR2CM2vthVWTkS3pyxdQd9x1sJuaTGt5xVvecHfmTwPGz7Be5vWghEXjLoy",
  "key17": "22CGpTySkJEk6dDK89bAzbcn7oxaazyWcMqCbvckaW5DVCzow2Ez6MfxsEkhiTDSmipo1DqFUanqxDGSgJ45qH1G",
  "key18": "4PpmVn3WFKpJgjWerBEwDKkvuaVFydabeiww5KkzDMncTNjXYyWumbSwzhQXt9rz5YUyvijkZcqGeQPL2jrcxAec",
  "key19": "2MWZgToyufJbSQWzzZhP93Q1gS6LTLrYMCn2oYnAqa5b1DovM9FDN9Vcuppp9wkUTrks4XcvseRECiq5H9kHvdy6",
  "key20": "7Bs8vK3Xk8xiP4UPQqcA27eZnr7dbN4PHBjT26x1Kq3QsCazvdVXST8eaXvJURaK445tQDd1KxUh6YNeEXzAUfB",
  "key21": "57S9RdYkH7AYGR9hhSmamTSSS3Sgqs2nkUc4LEEDGDBL8CYUBcJ7fzGxyPantiU9bgyx9mCjTeRU4H7X3dBzJp11",
  "key22": "aKJvAyTARh2d3d6F3ETmmUucjiWtumM4teJt8YXBkw4pz7q1BbUgziyt9B4wHqRXjTZkLWsQ9nkNeGicqUFqcu5",
  "key23": "2JajBo844tbi4TCCJHUssjtw8dJgZ2JNrJEkiNWKTyBMFX1ZXm1Xxqnu2bUh6YKnTgrevR28P17Fk3ZDcFtxDzjz",
  "key24": "4Mbk28wm2iuarRasrBRdjSG1FqxtUfEBskU5dJyQGCLBxn1MU3h1ta3LHfRYcE9gECgxy8JPyTqy2fWL1PHAPCGF",
  "key25": "4ipn9VVRxmTqkESMcp6WjNM9YtffZU1DyrbjdZsD6rd6wzYDJhup8PWzXduVaW32teDWPPYSKYP9tRE8NYBQ9qRP",
  "key26": "51wUwzVLqndbXsrt7sErrApiiDgbhhXiL3hSzzrmMJxhVUinQ5GKpX2gvSXEBuatwgSn5fKa77x3UN1tMooTNmyN",
  "key27": "5PAMJRsiyhCAP8DdaJCvMC3MH33LJGhtMWKSDM3iWCZGgssiaVzwca3xo1r7hcqncUCbk1hTSgngYEyr21Wasjwc",
  "key28": "58YY9skjUSKpZBL7bDY13DcyVcJKY1k8pTki3M4s2qbxVkQATpErWizi1tLx26z5d4nCNiZwtDexi5KQe9s54MWb",
  "key29": "ehcyec2b77HEBn4ZZEsNv3GtWnKvee2dGiErsua3RACQLy7qEbdLr9SL6qJTDAs2pSSNH4GqrsX1USfoBaXDMpG",
  "key30": "4obrFGG6pnvAuutUvdagMtmay2kHBgmZDPHfWKEEQDzWJo7aa97EePQL9eAcvqbGAUX7NUCLDfFYoXTfMJQqd9ss",
  "key31": "FrbbpEDawZPiuYDdobtU3XvFajYg94hBWWj85wCSizNpy8eBnZ7stN6b1AzdNYADDr1av1rfkkp9V85xGGq2w5n",
  "key32": "2QuUaayvvVy2tChfWBB5VpKGh1i8rcMBp9fjDbuKL3u5a2HN3grzYV7qoobW43ntUZSbNhW6H66y1tbMsf71gY1T",
  "key33": "moL39jtykR3RpzPPjcvvyiTBCU1HZsVMYwNUBVQoya8QQ4AidBDwjv9iAwJX4HuGiirttfQehgX4pcRY7B2GYub",
  "key34": "2Kg2xNqxDS8sFys14a4nZXwUDKgjxEya5n7sVYUJUPhD7raxB2w11WcYdgaQaLukcuoiCEmnfHuVrQu3fV7x28gp",
  "key35": "2RSxmhs8VFNq2rA4fkKyfa7CjMhN7ktvdtBHLrYfpSTEEUFCLnzjWyvYWXN6g6BXdyMxQFMrGQr3XQgKjSJ8fWTM",
  "key36": "4wiPBQN9HLVbbRxw19sAp2r3DN6XpS5MoWFiVkAeCbFsTsKUW3eaVa3dRMjxvX3qtPu9zcczS9LnKJzc86VirN9t",
  "key37": "3RfLqjwxg94oQbw61DxucfLAeywb7TwQmBAb1xTNVvViHJ3mdF948JNUWiuVsDqor3nW6w7MKNWkU7afaKRD6Ks1",
  "key38": "3sPPbNhwJ2pb5hY5HDZ8mBdrYM4MeCi3ZzmbQLZqN8KPoYMWhaixfTm8uutRRahv5M1kYZTQTJeGF4q6ZpKwC3RB",
  "key39": "2TDdpy4Lw4AtJRbGopnPbU6FQ6w5XQbDQA5fVjE6Snf6fKAvkoJaR3wYcqyxqRZdRTpnPsHTnHF4MGkbx7TbufLY",
  "key40": "3tRguWAbr1g4H4tP1pqi6cqB7H7aDT6diLCBDX7pr2sRSMBXgG6Vsz7ndfBy62vsYyVWEc8H8N49omNEPLAtJGfb",
  "key41": "2FfVBhfLVxb8TLMujuRhHQdJ6HYyyJNyHj9iaACeAZbmc1fG2HhPZRFFqC8CcAmgM3RooCFptRm5sMVw8K8vZz3x",
  "key42": "umfECRLCq2jgqRVBb8Qb3cpCsSKjUV5JUQQj3vBkppgFLnehuDQUSSiCQpTmeQPBsjAnKeSt1aaPgVC3A7Rs9VN",
  "key43": "3nyD6bjhm2i3yygkZsgFFRKQ9Qts1hu8bQtDUR8EGjhLhfD6qiYpmxekiKuMNebx6m8sbjARXVN6qhM9QnHRKrGT",
  "key44": "5p5XbNgWKu7YfFE6gJJg9G73KDAtH8MSQhMWYLzFuvvuHDfaNgPq6inrd3TfVP7WnKwEBZiaw8oar4WaVsn5tRi9",
  "key45": "4fQdGimj4ZMqe2SHqQUoy9SeRxhj4xHkVzXFoA5gQwGk3kjkk9qBhbdrgWN62rZmjUovDse85EXvPFwR3j5VGtjc",
  "key46": "5kGEhgiCaEFBkz4XWpU8Z6kY1mM2J3QT8rJLYUBov29rpCShYDCXQgDVJdJw6ThzW8hix6ZBwGB8vMGrYwKqqtY9",
  "key47": "3t2wvDrj9G8XXhn5hYo68NyDtPFSta1JSjxPcBQ51kPGW4fpeMkpGP61ijRSeqDCMAUzkpj8HEoaSkYQJYH7XTD7",
  "key48": "44PFvyzFs5jn5HCTgPFCx4vKudKxo16rC4RuKVeRLZpr7Sy15bBrENknTRkLzXjrZYHoJTXh3PAm29WsuU9JhWQ6",
  "key49": "3aAsrZfH1PPHFaRQtXrpdHXkcgQySfvXYzeMexbffxkrhDHk6MdjWeoy21FLiYw8yJPJZS87hw6CbqKRT36W5HUc"
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
