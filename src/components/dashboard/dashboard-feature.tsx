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
    "4UFHW9yQGVBYTbaXUNXJth1hxf8Au5KzhxxHxb9uKsEn79XRhGghAg8FBTM3CGQJAXrHtmzpKt1RA5YGMY7QFJ4E"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Pnx3AyTvPwb3Ah3mEcHp98pf8jVCJZGoMfdEFLULaXvGYZyeTPUtVhkjiMLntNBWM7JEGJw8iMZohBoe6PLjakE",
  "key1": "CNcsn8nEPsXKYyYsgMqXadJV45kJazhZjhvxa21XB9mvT4szV9M8LdPSfnzqQCZ5Ms2oJ2Yg6XyPwTUiMxArVw1",
  "key2": "XALzk4nDbr26Ud2qdzC1DLiWdTLmGY2mMTd3eBMmwxRHJGRq6YDoemvSc4X5rbTLGBM4SqwMUYfkctsVx5gwGSf",
  "key3": "4xKPL5rBz4UdsjfdjwZL3xQSyhF8RXvASnMMT8oyjfaJFRniNiGMuYSPeKu1pWAid2fYMtV5Cp7883TWkoC1f5Xh",
  "key4": "2wSePoJ3bmxiY3sZVJh1FZgYGuki2BXAiCfJ7HaLQoSAqARbpxfLbz4DgM4dd9WyDmUhGkGpV3M9h83BUsgKsUeR",
  "key5": "4z8jogQuhNF85NS7M8FdRhUnSJwvNkTPPYx7phG6EMtXPLBGMoFU4diV9WhoE7erWbkWHTtAr5oYqa3VY9D8fCTk",
  "key6": "44P5gSG6y8QtB8RwSmBbbECuVuUzPHV3qiNEvuBUL2TvKyhBEDMpgpxzh35VZbBcZuUT1GUJtnyoiB3mpzHULRzu",
  "key7": "5zrcNaju5XYQJsLYHQpmPEYiRWjYzv1Yu4xR7gGJCLDb3N4nZsqEEqXPWVDYxqGXpJ6kmD5nJ9nU48HGZuLtXbZZ",
  "key8": "2dxHTJWLQS8qKNLh8AXxrTkwmBkBW8SGnNRS4cWwUb4JbebnRwYK6PfHg1eRqfkGejiWpcKreLYK5fXdVRVPSngE",
  "key9": "2BGSv2gwi6upWuEakqdnzAw7FC3LmmDRLXn1kcZHB5j1aUbsHBwUvUU3CDaWtxeTdsh5iemm4rZxupb7srdyRnW7",
  "key10": "zZzd9PGbaj5rmTDikGhfgDe4CwsADKAroxPmtDNMvrCt87aqLGwZhKeS6nhR7FhyiU3Ro2wruJAmGR56xbGUT1v",
  "key11": "cfMTKnmL5c7L77wMCNxnrrqSvjj82z89kCd6SQ1wwKZEknWoSpbwgpuDgVhHBuZBA1J3YRoEUM8ukuV3kivcwvE",
  "key12": "5AuCZ4f99xJ3HvH5QC4EqkZaq921F36CYSfk6RhHiR8BnMt29LERX7UNFKcTYk6A2VRAgsYMVSd4GbWJGBUrDp1i",
  "key13": "5hsQVKqDNz5nj316uhzMv8eWA2i8B6KC6URDTXUMgfxYnzYMtNRajy47vakfHQijLcAPkDJUSBELZHZGJ2Uh31kH",
  "key14": "3zhDDoDTJyrTkZwT7RGEHyaYT8caCmrHS4n87Hxs1azgRoJGANiBob7w9x853KBhnd1XonNQpVMjMQ6ZT431B4ki",
  "key15": "2w4U6bqsTGYAcrMmKPAWxoDbGwDg546qWubYfBmo5wc9hXijHmGW1prBRzHvnqMWtiwMvUr2oPLbdTehtuprDaPy",
  "key16": "31D5EH237ff6WLG6z5pYrsG6RZGAQdTrmoGdq753HhEAoMGAkCsmrD6x3QRby2mGjDHXAGKwdobYmv3JF51rkWuq",
  "key17": "3Z7gEBrzvBHL7H1MXaz3Hu741Yb9tSHY7HrwML1kFQHT1Wf1EL5oxL36k4r8RuV5dQP6Hog8x87feNbfQTCZBptf",
  "key18": "2ZiaEsMvkp8wajRpSTyQAupLGs3jDFPhNuNTV2Go73yxZejf4yuYEGcYTzC2AGqJBSeQN27S2uy34g8NFUpumYwY",
  "key19": "3rxPpCTcYW5tKfTgZf4WcbCW7ky6vvmfPswsAt1kSZZFUvZHMy4KwAhAzZ4e7SQdMVab4go4rUGFww211PzsR19",
  "key20": "665qS7B8gG4c9Y6BZxRNV18Ej7ZFgmZEHm1id6z5b1yqgzfR95aTY4REDzuPEFPR38SxQtiREWKAy3eWdiSRiphU",
  "key21": "2SPJaQP61VwtByb4zz4kTNMWiajHcNDXBrTPtVyLVdQJJnY51Ra5Mjxho7HojywxggFNwjfunp54Zj5RfQKhku2x",
  "key22": "5sqQX1puLfCPZcynbJWw9LLmowE1aj4Y3AJUxCKj7CTxkyRxiVQK3ePJaqX8FzB2Mji6D4XyaRZ6DLxiEYibHjf8",
  "key23": "5JVtFMswSye7waGjTEeNP84ceFkJehBez5rb7NEtugoUbBSZcWuqqEW1Wad5qHRsgJaWsfVcXgnAo2nU3umgeoNE",
  "key24": "XxeRrM1pgbT3Ge2ZG3QSLAkDEnH4HR619sAHHxFWW4viaT2iQBUfeJGFTziu2Vgk8KBtYZsSirASeRsJi45399V",
  "key25": "3TvV7cusV1N7N8dghHWF4Q38sapT2Rq2uUEoPCsmhK9Xee43QQJjHyCDQaWcBHEWwqZERJfSfVHeVTFpcb5ipM6M",
  "key26": "pMmjsxjgzfiSsMu8QFSpee2bZQSXr6F3cWU6NMpJgkQSeXK3yu2oymMJc7F2HTdzK4SE6hTnq3u7V5qEfyFkJys",
  "key27": "4MvNJMcuR83CDfcWnEgUzp6443ixuVzVxiRBsHMHkES2GsYAn3pLiqLRPdneiBMXGngZ3p4kh9AXDtR4pZCfMtFn",
  "key28": "5GcJ1Z4kyzhyCpjnXC7e7eYpsN3qUauUBAoaniywLNuu3JHMyUZArUN2ht1JJAFAG2cRfqfH1TvVkcyn47owhfFJ",
  "key29": "49W8opt5miuLkqgxMWh7fDy5d59pun3LmJZUDrgfKokNPEUZ3fmYcXQni9HMRZ7tjGmnmMd3S9HDQ9gzpQchYwPf",
  "key30": "3mQgnzTYkM8q91jcnAfM3ES1iVJcCqERKzV42CRnS2cibJuAQ7yjzT3Qy3mXftFs7FA9xW4ocQ18W18sheee1mdr",
  "key31": "4pKUYH9idgkPJLDuqKrKvAeJfDduvcxJcnRfsujLTBZTCUNv7pchZEkVaTsXEg15vA9utfBePVjyohZiG26rgzXg",
  "key32": "SW7sUenB2qYqbanwJbYBC2zenssYBL1haaNWEyEFvsXF2UXbrHRSbRtGjH7KDTBP1ph61L2N4J7Di29Yhyq6iQ7",
  "key33": "4JEH8B4dBUzhxcmy43fKSJ9oc9nLs9KesEWm9mUmd4ezLvTG64zLu5A6uGEJz6zhwYwAzDXsfGMPYL9eHBAHRx4U",
  "key34": "3BBox6ayFUeJaPJFJrKnVaPZGLkwjJZ8cT5Njr3iD73Xx1DU4SvET7vBH4PTuGzah8S3xAxkJUtUyFWrNqrmWFaF",
  "key35": "36oFcXzPqffnMnYcsh6CoXWwx8d5w8XfnMC3W49ZRKUtw2NoLep2Z6YUPysdRG8NEGg69vdMpzMrof2MY9WHqJos",
  "key36": "3iC67fkL5abZzh73JKEf8NNh9msAiPsWzUjyYURhoHiEKSdZkVZ5oNrEfTc4LXXWyuW2y4wtXB9MdCKxQK45jo28",
  "key37": "z8epfJb3xUdkCgxgaPx8J9zhgg4cttDCqn4bMGrQj2TzTnXtq8Sa6mF6sjhXCQxuKNtqYFGYCpEGg3BDvcTPGEB",
  "key38": "PRNZLBaEnminESKFaYYRukMx6qxqs8iTYuYKAYH2MKfRwJvNjwFHnVLBHdqXhLFbfpQ6yQTb574xPczBENv5mKt",
  "key39": "sDH5yjPG17d8wyYcxhWcxMq5ynUrnhcm8Xu6KQDL6qtXVMrVxzu1RAQEcrShxQY46v8YVJQcQadKNEEAb13oR8s",
  "key40": "63QVb94JCF11jxPWztf1mtnPdKuyfKmgBXwZMNxY4vP2mzWqJXiagiuMGmwWAE7zztveJoNiYaDQzv3QnBiMM9w7",
  "key41": "2WpcDRYvdNxdfXxhPACTVyg9vVDXghGoChwQf7Y1VLJBQ3AgcJm1rucT5D51D7CqxDhYwwzAjccRfeLCJvzaGbwo",
  "key42": "65N4UCP8TqasqVTcay66xrH1Ao9js7xQnHhSJAS5NSiPjL3qNucCpuFqFz4UHf1415WnXWSiELSsL5q8D42J9DDR",
  "key43": "46eeFRM4EMLhskvza5mMTvSuSCEUMBmPLQrdmz6AA8Hg43PRtXaAf4cCnHU7EbgPXXfP2FMouA76Z3parqDtgwj3"
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
