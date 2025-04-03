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
    "2Sc2fsQVGgikEryaaMARCavqQHnGJhfko1MJJXVUWp2w7JjtDkM1bcruxbHp5h9tg8gyMxc5wF7oYC4nH6DqYBbP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UHQ6xCMSeXqWkEJMUsJ3Y3o3SoaNrzGPYQcUDqaqey3h9Rs265qPoS7UuTg76kSrmfpoWynXMCvs6e7a3BtBKLK",
  "key1": "5MwZ4HxnAB4ZQPAoyXKQdCoVzDNAxb8AsoiyT6XY7jDtrHyt2GUgarJ5P7m3fuuspweiQuKrKKAcfz9E17JpL665",
  "key2": "m6goyqcDAw33zEHNLJ9ypK55WpR1Qw9uYXspghparFZbsqJ9ovbNbd4U7jWFz5QTtSxeYes4Da8JvcKR7hT4mtr",
  "key3": "4ZL6H8tuxfPMUPcTqfMLbGPoDZ9yp4GC6dJHqxNUHZ5aTVZg2QKt42DpSJ51JAB45ogPkoQH6fgxKQyK73S8oNNo",
  "key4": "4KwRQLaMFYppzWXbXbL8xGnETsLgwNQjbk2rmeFybHjWzaRk9k3AEQpgt8gPwXMHfiLBzxdFk1ZZzqaSf2583wqR",
  "key5": "KgZU41UdVyxmWhEw9NgekvrnTj8V2AjaXu7XpFfhun4SV8WfnsnQv2tnVLsGna26qTiisEPCw6DyWTG3gGQ9wSo",
  "key6": "AGmxnZ4QFc5KKh1W3ta5f9m9Si3WqnYGaegSv2ZSPZBFLchNK4eVJjCA1nN2iUtPRvvwY8eoy5YhByxKHfrH2kr",
  "key7": "5BovL4UGa9Q3aftwbTn13qbDjepkdQWAeb2AGanhEifU5fYTXqrEyUXzJjhkGFPuMbeU2GJoZhg2p7yMKATKnDTj",
  "key8": "2rKHF9KDzuooNBr9NFwGwfoRbXa5f1Q952LDtFj86v5np37WocbHfw3KRuHb3Y9rqvcWqox7gF5U355MYfeXtWwL",
  "key9": "4BeWc7RuX5XEyedAHUm5vpjVmKrmFRsDw5CgbdG65KhKSmUhX7tpiRAPhHvQEJ7VS5CiQtVXZNGR1ZGU1h5NhLaH",
  "key10": "5xidD9sLe2VESQmoKy8wzEeqG78nqNwX9J2VyUDdt75ikrZ884vvgVqsLAtGgQW1qiTrsVtKgat6LnicGM3N5bYL",
  "key11": "26KmWHPX6L46uLjERvLHHh1d1pYqnstbo7YHXpQuVWFWG2MYXYJgBugR5RNFYhm8jmchM6SnydNT2vXQeJ1K9FA1",
  "key12": "3uCaWG3kQ5K8DLe2q1ruhRR7a2m8kgAUstzLvNwjXFfgjmoEBGhQMcb45LZ3MVkwkQ2RSHLq3Qe77sTBXgsiTyBv",
  "key13": "4JpXied4LuHg9aT81inMCSNFEigHSKxLYwH2NCfPyCR5LKDbEhyG4bCqN8vYkyZX3kD8KY4KM6TUp9tiW8zjzNoB",
  "key14": "4STWNeyuDfQFr9AiWkaE4XKFefP3cXWsAKzkLXrjQQVZpdX6tFVPWMBSJgSVRJ7f1ESmwe1twttCejBj8LDoxoUs",
  "key15": "ft1sRDrhWvm1oyJNJBjjEXaA5ZhPRbsHHmMLyuhjc5P9M3ajFMD3UxjGRvVFf3PXX4orCbub7pb9VEvsX1iBdHZ",
  "key16": "bys21oudzoKd2yBJZyHAjWgH6diK5vbLAAbpNTWfMfEqSq9Sbhe2hbopQYRTqQKPUKzTreCHwWJPPRtRjFKggkH",
  "key17": "2GLC9RXj9MthKBHRzMtar93tn8q4nQEYivbMrtncxddGbrLaTRrwbpbsGWWiYYadgVbo73B28ranFDyZ4fChuoHA",
  "key18": "25qD2HJr6HdBmaoYo6afkCJsZmwNf4wKSjmr82UfnPWoZEnK9t74tN61Skkzve8fmrvTAvYKt2kKWePgbU7FKJuB",
  "key19": "2CsXg5x1gyC6JNFnzLE2gbbDWb6gAnjx1x2o7q5jF7Q9UEduGFgu5cTnMw6zgMdc5hvYutw9nCTAUNqYEDpbwFz8",
  "key20": "5if813JH3Fi5ZYtfvdRCPUisGPm6faPB3VTuk1avMEvom6c6me1ZSZu4RCpiTpbHRzS6FGmPTkYzMdapTkRizfxy",
  "key21": "2U1wvGM6otgUrETskKXNjRHB2fRJPdK3zoAKVAn75nSjSd3Nokpty9VZk132BP96VjEWxeHcEm4wUWu17DEQb8M6",
  "key22": "3y3jkTAGhWA1wa4gU21TeWFejLSNm8W8zwk21PVNF61GZJ51yMrzyC4NnehmBSh5ei5SA3stxR2mqNsPohagZRhY",
  "key23": "432fndJuAKJotEUm5mCfMxAEnJh5mwQTuGBijHrJFST6SyTfWsxmJ1eahkf1N39dA1BoKpxfgG8BVjxk1LLk7Jnt",
  "key24": "5gDdx3Q5MXK1UBU67Mdr3gGgjBuFU1orjkDCJoSc8vbgv8zP7jSsQTRKPmWcH5anSNAZEfXgLfeCQijCpwUbww7o",
  "key25": "363ZV54QGt3k4AySWWFCmGAiFJeySaSyAkNTptZX5R191E1oQbonmxtffCkzygXHdczUH4fVQQGtbJEvUfNNEtRS",
  "key26": "4HfbQGnt5APpiDq4qnGD9C5yg6pHUvLUN56tV4p71ue9DP9T9dG9Gw8TZCfAYiNuvXJuN3Rs3SaiugekTEPKQJLe",
  "key27": "3xmwzhwk66ybLB5yQwj2S6EBXM5tR7mE1AZrmpD3Disw3UtMkD99tdCy655bKWV6Pg7ZdHYoZJeFCTXGzbgTC3SA",
  "key28": "2EGhcg6r5bC7MEoWBPGHugnJNzWqiZnfuEyR5NWFPYtLxu9gWABHcTeuovbyxQyDPoYt3QnZhE9WgxZ2cHG36rdr",
  "key29": "3z5BDoJe2VmoSa93imCF6DYKLUnKqUgLdWyCqsvGZ4259rMbN6FjjXrMBE2V3U2Aqr71P88hvu246PBDwppUmiV5",
  "key30": "26kuEhNgoKnAEhUB5DWuiV4WZbBfqvZQUgUjCh2cXYnrDxUUvyhnXu9dmccUvoCibRqP4KEBY1KTNkrsbd4qthj7",
  "key31": "3f97cBxuG6wiEGJ417nFraeyrerj3Ngwd16S5FjRNvGNiTU5JKXJS8jHmgT4RPchBV2PnU9v3oxwigaJtsLVp42G",
  "key32": "4pAEiFW3XQncqZaBjKJFZLfBN9DqjbTANGMv53LWFu6C9AboSg9MumUUAeTY28oVzcV1D1sM7SSH4Qn56vhUPxy5",
  "key33": "24N4FTWfgFtWWV9f9bGSabyqsV8qKuJ7SBiVxm7g72RpxjN92aWCtDwVpNcDVnsZCiHFWHdVqMx9ed5fShBsCmaS",
  "key34": "2sS59cuMs7p8QMU4dmQVA4LGF42Wb9mD5ArVgErhHbbMdJqrY7Hm2v4fJxNWoyubA5jpPF38ceaNNzzSnBj1rZHg",
  "key35": "2jgQjmRU1mguewjwPdFrD7NZdB2nKAqjcMoX8pohjFvZPrUMB1Q1xWrLjnGievWnVLQHa92n7ZXLZ865ZhcMq42u",
  "key36": "5iCYTW2sp3sCdRcLwo6Gi8nYu1gSGGcuGGcdpukE7QZraaEsUZxpyzH1ft3hUWvcDPHvoBua9GBkWUgSzZAye8b1",
  "key37": "2knmh8fNgeT2A7LrFbh1pgRN87uqtbfUaj5RGYtjD9HtdQjikT5ei7BYUyLiuP3xaghx7gjL91TkcZafxjbExcEM",
  "key38": "39VevmrVBUkawkDq9k6RW5ZFi1KFLiALgmmdcQQJe6GnHPb7PT8d3mKA6PwA537mbEK5caUjFnBXbDqQmzT9VMQ5",
  "key39": "2h2ESbVMJQi13utLVSvxiA5fH4SVimtBithJXmgUYbsGAUuQuJFUGs2bkg6B9k9yrwViwk3eA9ZbypEmxBgqmyvk",
  "key40": "5fiWpW8N9VJtdjs3BbThCj4hZG7oKnLT1b4eMkgSs9FK6u9GapuL44QwbVqpNruYSFyU2tesmUvW5vmhX4TmhSoB",
  "key41": "7WwNzwyRQtEF2pdjy5cJ7b2s7G3fzPd4xi7uUQUq4cR6rKfVZkAjj8FjvEZ5XVHCih8w1YKWdQGWqqhS72sb9KB",
  "key42": "UH78tHKREACDF9tye3BDGpmmKTUhbmH5ZMWrXPp27QhNA2uFASV7fgfr7n3hFoyxpCyW3GG6QvdjQDd6JH27Giz",
  "key43": "2GuH5bX25YQ4eg4gtn9Xgqt97vQeuBmiVZTMPRtqgygzY4kWRxacpr9uFJyJqD2gVcgBxMZUghHegNTRwXpTHw2g",
  "key44": "2viPXVra9Sg8beWBUZHb6UXjiPNbuc3SR77ZGRSYATyAc8rXXE4QGWy2ZanUx5Pssrv6h87zXRKwh2a7xYpcuKV2"
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
