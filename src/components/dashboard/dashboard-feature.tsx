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
    "2ewS5v3CEtcHDkFgrkGafhfv9Kn4pgF7QsN81U2qNCi5EGZUYe4d5gZ8QyAdk2YDvrhPPwQYndN5FGEez81TDxN9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n6x2bDcuaAn4bmUFKKmGAQe6rCC2Ct8mja2mrmrpikxiGMHe6XXgZVwmLjMpxp5kNzbaJVAKnXMv7Nm3jWi3LWr",
  "key1": "4i3d7TCwAXBtBzs6C6pMTQSHnHD3ggmMHbxvQhkgkQka8CpgUBMjN32hwMEjzZnfno53YeVepCE6H8PNWYq5Btm",
  "key2": "3jFYjTaYWYva2K4JQcqWXwCwjhAVTNSBnNqb1sVCSywPJp7HeaHktaeAxYeoy4tvgnUBtEvqvwS7br6S94odNpCB",
  "key3": "5yDdmkQkuQbWb68wjSCr8FfVpZQQWRFkk2Ub3nYewBappNfYappt7y3Leap3iZVEcz33D8AXqVhYdSXd9TaFutaD",
  "key4": "hCY2vMDDkMKSC4hmhVGFd6MkkSMsndsKQgC1LUSagUFSpPb4gmyDwvTFm3Ng8njFhPaJCz7N6zD2NorwwdJJ1aX",
  "key5": "RZWSie6eRJQGssQ2u4idLEy3krpswkKBbf6j4k4t1QERt8QdmN16RH7PQq1CismPLS82LurZEL7sSM9eAZ4BeiR",
  "key6": "4sytrFJpk2SLQ1EYkd9Xop4uYWbAWPCozngDhDBS5PSmS9XYrvfx5rW2e36aGbaoLWdBGdoY31BstAQYgb3UUhVq",
  "key7": "4ndMfKkAZfjQrYPGT9M6a8f6Erm3v8kkeTYw9JZb3f88quJkPGfGdGiFsjn9SvTnWrajUDiHSov71ND5XxpHzZPF",
  "key8": "5ZrJrCCRWVF2Qxx83tRs1Fve4rLypq1XSga6LKPCV9TdzWdwYjdn5RgdezGn6TxQuTdHTJXxLjRq6ezo7eFjkJTh",
  "key9": "5z4eCpj5aJeV4kxRKCYRH5gugyKWAtoFrxcwbERZoRZg3oSZWeoBybGdn4U9MGC3B67Y6oaPQxx6XizAkvh11L25",
  "key10": "31Q1CEDtWVyaUaHkDx3WhsYcZWnFdtSkAyMD3PK9MGRcuWh456rNeBNnfPEXNn2VwgTEv3wCFQwQRAPExyvWXDg",
  "key11": "37yaoeY7qtavNtAtGTaBFvss9Ri9hkjh1nBsztVhmEqfcwzhm1cmM6DRd9RCUJBfDU2H94uSnoupGYeVNrPraPEN",
  "key12": "4MrzJbXbt2DsUeLAHAFo6WBnfsuSaksV8TRzCyQuTfkZwe23CrnAmdeCUa8drBzNb8FxF6hZ67ynusRqjgHq7qGC",
  "key13": "4dLfLrH7XfvJPP6JwzKyeuC323QkhEo44DzJagdddgd2JejpQ2EyCy8SKtu3chZag49msr4VPC2y2wZgzJjDyudJ",
  "key14": "4FcYz4UDVxcL6jHJenpYiJszQrr71zeBVNiQqQcqBwYe9mKzt58uB497d8HcfNXKzFeGZhoyNNVRHxTu94A2wmSZ",
  "key15": "2TpjADF2k98QNsW58WXqgS8fKZrqyd9KGAX9fDaZdAntSSye8dB8BBho9RQGpyiYxzqHhP4aoJtLsSEcyyxGRkN9",
  "key16": "2fkoNv3BBhES4WnRpshvTnFDg5H8Wpze56g7JVwLV5eHTRLEJZ6aMFeJ6FpjEF923bpu8qLyGW1YaeppvHoRsBLJ",
  "key17": "3ACp6iwJh59jP5msfDcYX2hRCSZSqzZpHxvATYq6saiUSLFNYKrbgDxB4hUUqZTir7dbjTBFu5FCKdMoQYP6SMbc",
  "key18": "48jWA4S2sLrbcUTEeDbrEkJsT5VhsCp1zgqyBAhyK6CemtKj1Wznikzwznm6fhJ5WaVfeyLFJjUubUzmnHhkmqxG",
  "key19": "5wvCtVTVqqD3pMQBFqBtQyymWx3n18H9Ct2FwqMAPMtAaL6bZ1u9W3gSer3QnddZvCLFptkKHyGhv6cVtfEGr528",
  "key20": "3WuNs89VXTESnvb8vy5oJu9iVZXbgk8XE3gVcJPsGaitEJa7WqrdUACwxa7edsZGZTUy5pWPDUMwM1QrtjqtvGJk",
  "key21": "WLfpnaYWM4sMMeMUMKjSM7nDe3HrNgxBvZWpGxgMp2GxD3XzBbLQBawGk7K4YAFCQTGFQVvZYZTenzMHKc1kkNn",
  "key22": "dvFJCd25GthfapFjyWPCYYdi5Ss2Dne6z3PZ1ceiqgPtjv8ew2Mc8Bji7hZ6pbAqmpejW8ACqYEUZ1hbwYFjENx",
  "key23": "4Yi251wGofv8Qm3xZGdoHndYdfCFrkNcmf7xTZp2XhR6wh1AMCWVme5TL7NgLPTqeSerumNprmHQUG6NmNEdPz71",
  "key24": "2up6qKCubYidp2n6FbEZ4DsZp26y6W89tEsNgDqmTbKoTVM2iGG2UXDaAyfRghQs8rdchaNTyr9eSkVihdtxcbGG",
  "key25": "5aHiCuKEJRrNixjNfc9dHJT6QaejriZYa76bwoi6GiWyV3YWs3oqNg124NxpwAYzWtLHTrtqK5FTTBUYvH9C9u8A",
  "key26": "3zDW32GuK6spjDr9Va3tV4AafL9pt2zQrhNDjo39ggBJZZEhoCexVWX3D7EGVyMLvswap2wfjeb6LzzRYBu38x2m",
  "key27": "3AY7nXzXnbWgDLbyxyFSis7wxopdjkR5uWsnEVygg36mEc73e8jGPaG1ByDF26mbZCfe87bBfQyUoPUL2aAf1BQ4",
  "key28": "5wZJnFYXxWeA5ZmTeZUHpNhrF4u5GTD9yKuuxbo891Ah6YAdiNKzXLeUKeW5zNGB9U5fvG3xc3QvnznmYi285qNW",
  "key29": "4tUsoDzxhhCF1nrKrGHzvdjG5qqEnwkMwJWjwg2pq1ivoE4LJmTRZ2qT8QDoE7aDW9kFaVUpye25XA3FUUPhdAE7",
  "key30": "3mdAuWbGofUBGoies8VTm5R3C6BRjgPR8XcabcGiiSw7UBSCb5MCfKCZxRZQBNtahknsQc61n8fUouB4StaENWKN",
  "key31": "4oXq1QkVDYLH8LNToxt67JV613nifgPR3KnTTtHSS25fJjCSnwJuJ5RX3CBLXHfevH1HcTKetGFK4qsj6ZZopk6u",
  "key32": "4zSLAY8JMLpd56QwunMXLvmzYaunL42XhnueyWHweSfCFcQ5wCn4zCdeasHkR9jgZ8KB7Ykv7Kwd2tR4vRmB7Ve5",
  "key33": "BafZ3KDmH6LVa6voHwgvPV8XTeTTwRvNijAejVoxxXyGXq5ShXznsU3xqhGkZCu9omQ4hhoTVvYasasjZUcPD5c",
  "key34": "2eFvSTtxY1KmDoxtr6NQKWedBPTTmFwMPVKTugymXVMG3XKsf8Mv3AzrDq8cavmc1SWZXrfaWjMtpSJhWTx9N1EK",
  "key35": "64udyNTFYAvXCtVhsz8y9fuvgFwkxG6sRyjFceCqjbWWoC8Ws1HqHh6JLZa41t2yuEJYusJxJhrHJXCSh75Cooaz",
  "key36": "2p2d3x9bxAeZYiodNrEM3SwA1xpFzhZ2iSsNmFT3KWwSLcn7eC9wkadWQ7LMH1aFQqeZTwLuiZPLDMhTSEs9GX7R",
  "key37": "2D4bWik2S7Uk5F2dA7FARtfTcDRxFmsYdmFjG6cePXNt5rup12RDmhXBPoqPM5ns6YuRuyZSEhoFfjNJDxunKYva",
  "key38": "4YqUP8XFL2m477gkfWHYuBxK4nKNpFhf2ZvAJDeoK7mrtZprxCMtPFub3uDUhFtzAb1HMMstWdXw9c7Ghyy6PKiq",
  "key39": "2P7JPBpy9GUQ4LLzR1GG5D1rzyxNpisacb9RLVAKuxYSvaYQpZx6zrDS6ubVu5ADfp9gQ58nrefX4TbVyWN8aStS",
  "key40": "5Vpwao2iRt67rdbxmEzTR7V9YnuhV5b5tKDqA73YpHYqQSkd9Eh25CiipZfYUGDLxKQvpv7AYJXhcyv27Sk2bjEj",
  "key41": "2FJb9Kxzx3j9SYABDhFCCFBPmWGR1iNyDVHHjv2paDF6HbKH43fXX8gyeuB6ojrH1jbZeQtoFGpgMDc4wJB1CNYu",
  "key42": "46GNXMzfQP1gF8CsrVXvqyUczcVXSkqnMseFFnnExY2XJQiNvxxw4hcX2NJ498L6f6j9xEydP7sjbgecYLqq4PFc",
  "key43": "22wzQfXoK81GoA2C13y8kQP5QUPAZqjhyig6u4Q65JbsgJ9zr29RJvyZ4eEWBcKaty7pmSv5qQVGvdwKyfZbmozW",
  "key44": "5V738f5JPBJ3TaDcr1jgiP6rq7LvbgTizVZkRFQX3RTNsJYZykCap3AaNGbacVbDwqcYeZcLoXktr65wG74sxQTe",
  "key45": "4DxrgJR72Fcp8wE76SteJQ5qs9udmWbhrtJt2F7RWVC4jwCzT9EyhFADhoLTS38GHsawFA3KzDxhZ2Jr4aZqH9N8",
  "key46": "3itvJz49bVTrvztfPn5GuteLbSUfqpewXVFUoHzpVwrC8xa7sEceFano24FDhXZzh9c4xTfYrvE977gCQoJPPg2U",
  "key47": "45yVxf67DKPtueedh4JMy8seKiwqLCcGQM4ZK2AAFpcTHsMXtgnz2KHBZtQMRyjppfv84RFRZ1qSMUHJsNFvXxnv",
  "key48": "2XtQtaSiEiHy6uy3is4ShNTLZQHUi6qanbos3MdHQmrkVV4oz2r1WAJNJmJR1xUwu9ZH3Q3tdYKzCZYhKiz3rPaN",
  "key49": "2s7QXSBGosqd9JVTgNgQJ9WbTL2n2jvMUNbpynuCrd8DoeafuPqJQYgZKN7AsKeX3cfLh4S9L11P67ka4r6BGPtE"
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
