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
    "38FPJecbKoC12buDgJUt7yBqR3unzwQFJ3fN2ddgCfNsJVH7mDwjKGa7pcb9wa6RsyttWnydCo4CviVpfMHQvzVD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sfk1d4MHzYFvgtrdBoyVt6aFk9ujCZPt45CCfaW7tZJ3s3B6VtLpWGShSnpzdtFroMKmHHhfnh2SvDpni5G1kng",
  "key1": "4RT8KbFYkvKFS8cfp51ji4NefwjfvgafWxexz4JjmngmtQLF8iRzbiSVssuEBSFYdbp7p8v6TSMi56S5k5dHoYA6",
  "key2": "25fj4qfGKscDo9Yp8SAcWG1azT3NZMuQewU3wsMfNzY3oopfBZ9svygaxxTA2t9eMfp4uijEsKxNqPnDxc9iWNTF",
  "key3": "Wm6ySAS3jgxuuC26YCfwTDztXgZ5Bv3gJAs2fQz5kpZFnotE6iS5Dn31gV6d7a1XDLPBpNfgsvhJKd7t1iHcYEo",
  "key4": "4Qb9FJVsvevy6P4szgBUx3PHsRQX8Xd8uMK5Pots87gAG56fwkaV7ahJio8T7bioL1dGfQjdq5uzCphyp5w8JtMd",
  "key5": "pVShnTDSUzHfdWZdzRQAgxUhEWPZ8AMoiMCwwPBa4Kyrhr1BL5HkfXuB5WNkaedGETpVecAp1txNZh6czCAW3jN",
  "key6": "28k62XSqsKqZ6ny9BV1p6eR2fg9GUdSt644ys7bNvaHUYcVFJA3rR8NLzBiUTqxsCDpyUUksKGrT9Fq4hcUPgfwa",
  "key7": "4DoZeCiMpw1F6CpQRGppd4zM8PLh9fKAmb8uBHRuN2BQn8Ds6ogPxk7mbNSyDSDJQpJmPeHuY2Z6tjuNurerK31M",
  "key8": "4hBRBKbs1Ggp2fnuKatc2ZNKikmUyWGjpgRxJ71yMvkJQUwsrcx9KXYdxKoAnbrvNfQ1UffbEzNAFaPm8NiW1oH5",
  "key9": "47UH22iWVoty7WNMNfoMc39aFPnBDaxaYq2xY7CbgpRfi3CbCrNczqHcaXvzvvQNo3GeaHgsEZ4bE2VbgtBSaSsi",
  "key10": "2SFWfsxtqh51swfJAvnQBgu6CpySycanEswpH7WmTGVKgr9Lp3yjhefrcj5dwzAxZey16NmrZXrz5j3eXErxQZTo",
  "key11": "RX2iYdDDf9WrDS7Z3XAxQNVH64xsuBKWJjiZoi2cJuC7ggP58oNsNQzutBBRrcDNsYxk1L5ssMTSm65jercak3E",
  "key12": "4koxVjQqfXY1Ebm76H7n9vuLpYYZJ3Sor4ANdY44i95SuTcWwxWHBimMasTANkBVA2aosAYLwk1XQQfTRHarh8yp",
  "key13": "2cfo1kJSoNM8MtReMER4EdT7e242JqEca23W2tUCx1FJEwhbY82qY37n7Ha6RnGM4o8q9eqURLUYcdu76LYbqfef",
  "key14": "icHXTkSgZcnt5Lx4UkYCmVsPncWLZjjVeFi2CcQDXAo2AiDVwt5nTf8mQzC3B5kqZFJYrVJHQQguKaLSxCC629A",
  "key15": "3mrnBGuEZoC5CVaDwVFWcCkz9UAxMQDv6Nh9mzBfVgk1NygACiXBNGSA1srC2eNCQ317ZmdV4F5PzSGHfrxRqU8r",
  "key16": "3s2x2JNPGFArby8sb3BXpdL8BoMcdyLNh2iR6pjcUuNTfNJzG9iYtgiabHspTK7J4fRd2pbSfwLKvFMMpito2eQp",
  "key17": "5ovvemUonSQeqpQB679Gy5mW1VmvCJdnQhqAG6oVvzLuthhr5NHJbs6yXPvLgvkuJAcXnNwtcemeZynSs1mus3FU",
  "key18": "Unu78QieLYeMVGt9zK2FGjdgro54DDE9EVta14hBXQoRRF6YoXdbx4SSL2msiJyWkeEeKqmppEErGXmtLoKj1TB",
  "key19": "4GSG78vhbwTHMyL6QPwraofimrKc9yYwLr1WAZ1Fr8gvs5VwHTqtBQU231MZv5gCpWm6ddXFEJyZj1K5jFPyTdHd",
  "key20": "65D2Gr8ayMzzVj9hCXAvqB4jrhxGiRqwz2zTSidxT3SFsQSSWG51ZCfy9QPETYpNekiYQcsJLhFVd63coJfsb9ox",
  "key21": "4hyfzUuk6SfJx74Xm35BjdQZTuYkaMA5o5qzBNnYb3P4tXfv99BTu7xpKfEaxc3r5Z2n8kw6sCZ6DaWfy5GhQzCw",
  "key22": "4N1PjwCiwaMWmgGeSnMnJQN5cnePwhFDHm3XgRrRwLE2t2Jh5GetGbEJ3uEAudiZ7extSDj8bBbqesLRt1dEsmgN",
  "key23": "37btFiRAPwg4dzkrNT8LJSPLfeo3YAEqUtDhnvtq3VPGm9wscYt975MZSnitPJBVMkAgxmab1h9YzZdsdZVTukUT",
  "key24": "nNFd8dSbSWtPvKFDR8ean1DCoCyY5MX4nNsbcd3wdcRKvoRQBwTmgEpAduxUh4ZEA5sFPrC5ELV6Ea4zsFqU5Br",
  "key25": "iafMHbwSp4MqhdA2dcTaULKc2yAdyNByc4vZvgbdLroQaNvzYMf5onT1GnFzYT9gKoNjwM2SAiTirho1uJwBWh5",
  "key26": "r4FEhLdxXnTMgHTTE1nKFNqB7u2YJeJRhTF5y7hZrQir4Ai2XhyD8Z83S3yaG8HgbEvVyk9ErTFi3NKd3kEEHVN",
  "key27": "38RTLF9kq8pRTQyBVnybZj1Z6k9zRsvF96CEiGmZa476ECy8uCbboiagXyy7W1Yu5edAAjBmWxS1Ce8PRAZzStGe",
  "key28": "3UHRBPvhSxd3E1o8WiqpkFmnw7BeCBYmoBqeHUjvMpqRbfaMdaaKw58wLR7eP2xtoPQoM6U32BBDKxq7fTi5kquD",
  "key29": "4SpZEJSYzcQTnK1Jj2DhkajQXgFy4ZxykuPKKJZw1tdqFnk9Q8Cc4yNJe7Egg7SPbSxnk5XBfz1bc37tCHvRJ7NC",
  "key30": "4FbkBjrvrtTmk2FTyQ51yfH3aRCdYXPANbutL82JX8tWUuEuF65pZwuVE5wgb9nAvXV5BECFscWLvVKJMW1zt1og",
  "key31": "stLoQ7RAV55cgmuTbnFXzC1S6tzgapKN62fNACM7qF1wgFEiW3xCmycwXpQACQeMyG8sbz5rmuHn3FP5UMT67Q6",
  "key32": "5LvbjCNy1mDs5ANdzz6LQozohLVMTCf3D9XpF4y4cyQUmr4Tei4ww63yW2BGNP17yoSAjJbKJjhu7jCncNPvyu4X",
  "key33": "2D9NphUWT9TnJwAhHeiM1hMDYYyUWqWeSgDENWWwLy74X98x1ASfq5DYWmZhxiAc2sbHu9kKCB5dweqNE2umVzc2",
  "key34": "3AHb7xCyvQsrnWtg7HcYC1Gxo8MAoujkdUqa8grm57DXoZ8mAKko4zXfEjFfgeTZnxkcuxMByQtnWhsLikDGAVxj",
  "key35": "4pz73ZnrEajywwieB6cHeZ98RiU2YP4eVctZYwy5hpVigSWEyr1wwqwd9dJYDr3PijBBozzpznN8xNacMKYczddh",
  "key36": "2ASZKXyC2ivdVUNwDMC7DL9a5bLpVkA8T67451xANJz5hVsYSCz5vAPK7LKQLdCvcg1PMB7QG1grr5zpyPasNUzK",
  "key37": "yaJrPLFKeTjQQeRk94d5y1QKxGPoXG51SeC33wabeC6xdq33FYPmFqzWXQUmYTKJ4VEWFzY1QQw6qo3crtP5NSL",
  "key38": "2TUkFyfbysMV374efbwb2mC3dCkpzoKUWVX3ejeyuLzkHs9PJPZBRjNtHW2ma1zwdrCgj8bfHm3utaDig8TSMg4J",
  "key39": "zyEn1uGmnPnNPQPhkxRYcbmxpeiBkUVk711PzLWXhHtEfTT4AwSgxP2itCJqE4gxnRUnR8qvmAaRTkgo7gXxAPS",
  "key40": "4tsBt3yHoBTBXTDGp8mANHp6YsJoKYBGqYxnVSt7RmiMDhRi6K1kFw1hU9Pn8QZd2rpJfwf2n3stz1nY7UcozW6h",
  "key41": "52215648p1B1hYBTHmc7K9jZCyQ8JH32Lt1SM1ooswjDejEnuYy4zmiSMHXZKZHoaEEgAKDd88hM3ef9XPLh5eb8",
  "key42": "2yX5dbKLGUwrvnVHuv8aLvYBPG8sTfQZhZcrBk7HqgJdCB2ZtdGW8pzkgzwDTBJ1SJJ9TrhjXpQX1YNEYJETmwvv",
  "key43": "2yW26YkRbBHCqPSR1GMQ9FkYpCXFoEHyZMwSbEJTBqRAe8K7r8KoJfYHCEkG5vRqwSNyxKgkN4CnmQoqFwD3s8Yv",
  "key44": "3cjQ837vjC8ayE3YmEhCkbwDwjy6vHKDzZGV6phN9i8KDe21Zn5jesq2UiTVGy3h8pHKsHhKzskHmeRSQd4skDvx",
  "key45": "5CbkHuVYVWGmoQHvaw8wuiws3annU1sRz2AbJXRVzJkWwNuXFDFgDfgEb8SzAkS9tddi47iBRjgqfm5tRYy2Fq7e",
  "key46": "4d2gM7pqKieZviG8is95cPzdWE179vd249a7iXr4LVBo2Xh4pVf7iQYFm6z5REpc7Qq12epFa5q3Y7RhjBSc4bMJ",
  "key47": "25VwgN39BA8Z87QPN8ES1hHCo6zawyJTZfJcZGcXAUGAh7X7DFSxB2vWgMvU7brD7RQtkwo3W7EToDpZS8mE2Yyz",
  "key48": "61ynM5ibMT2Lg7YFFrYekS9mky1CzG2XFPS9qQfmmL1YFiELzizqxNTDGhy78qnuYM2xygG4LY4BS4sTuKjzzToT",
  "key49": "3qsq5biwmNRvjbMA2w7CZW4DmU6RysMV3CatzbWzWY1B1EppqVQYz6RVPqJEQDvnr2Df6v6rRyEnJPrn29N99a4r"
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
