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
    "VeJyYcR49PhLsRsEVkkkb3EVsHTbRirvLQHGtFyPzuFHi9k5igsLSNRmbWBskPQHwfFyyVWyrPKhBoaZQ4LaMdc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TWeBPgGQZvjrSab7R7f74hUf45DUKEpx1cwLVWVCKjHJxgob4i1tAdvU99vpyzkofTL4SGPAW1ZWDa173q5hcQb",
  "key1": "67it9UyNcXVkZskKnQ4MMR5js65gn4ELMNHuwzQYiJadXV1awRmDpJXY296PewAVK6BSi4UzV97GNQsD4ZDQsnn7",
  "key2": "3eYEM3KvVXs7TEV3pMjSHY6p52AVdG5kURKwuzXMBXqhFNrxEnAYqtPyQQLvGFYyu7BbsqDiw3dMup8SYrYMHjvW",
  "key3": "wohUTVJ4jn8QPHzi57XC1ifYReovMeuFXeCqw8i5BodDkRpq6Fm6Wo6RskhiY5VeEKDCxLY1URuB3D5oBABqhzX",
  "key4": "ZAsH7aZSPMTCVUudjXRcfs6E7tWwmGZMgiuR5wDgW8zt8PhqkjdQzu9UMijPgo7dQuW7g4pq4bxTzkga8a8Dm6m",
  "key5": "3159Nd5TcyHb1HLUdr89QokbiLvUYk8bKrcFP63daG3aYRFmYocR1vSiTReKY73Ncj471EBEE2wZxuQjBwZTKNmw",
  "key6": "3m8HkWnxeUzaHSCLRPm52f5CHGdwrGPSA5ZN6kZtuUGwQLKDsmZ7SHSGt111z5shUcY4QuMYdQDQdpRTC8osbRPc",
  "key7": "4im6wJKcZ5sGei1zEFQUcH3H1QXh91hHcwJr5UANeU9yrYdRrYkFVhW4EyN8HTEvKeKv8gqQc55vdhQ66eB4Mofj",
  "key8": "4GLnzkQK6AsZgkQBpAhfxmyPfJTaE2Q86wddN2HeKGH3bdpdyJQLe2P8DQ5kFL8nhActyEoUKWLY8scgYvrnk1Ea",
  "key9": "k28FXuvENLKwF94e5dqaMnf5dwm24YizN3FoY1YrprKzdL5idGhdevq8D5Wty3MCujBgWf37bRByKrubPrn7gn7",
  "key10": "3w6EwaTc6fzVxfsGLvdwRoqDxMQUpaCtwMYRAnGhKscwFKe56xa5HDfaxd9rQKfJX74xYyMWXSwAVTfqLFL6TQLS",
  "key11": "4XQVLEqEtG3Xs9ogju7cbRLDHPWfiqMJK1wBjDk6tdb46eRLFbbkvzq1RnUDbzK3ftCSwahNvRjKKfnqk8KzSGiM",
  "key12": "be7jSxw42KqdEjkWNRbhAZgy96NmygZ3Lg17TwkTBShJgiTTCUnR5tu5qVGxaXjyEHboo5vUTrh9qb41azs7p73",
  "key13": "3dgHiNPzrzQUvvUKSye6WunFkrhRbgQ9bjZnmkAJmofRunWCsbVU42KvTztSY71RW1evHgfJBh3kDmgpf8Vg8nk6",
  "key14": "4XdfhkxfsZFP3xKJMWY36c38oJtrNBngvQgWfjzK6Ho5vjLH6vxSBePRVpV9RrPsmCmcYHwDUCPiQYKEqfupC1XF",
  "key15": "wqc7Xw3Gg3VLHdhb1531qiQsuZDJMnpTeSwUvQEMaAWKofHz4Ln5yfKmHUeTgKCDjE9ixXxzmqsdyrT1SxoPubM",
  "key16": "3vh78bcJF8T1XbBsHSA8KWdsuQBtJmYmASXEBLuuKT3DqnDyekXJmBnrhqTHmdjAiDCzwaCtS6wnP6Z1TwgMymht",
  "key17": "33vW7jomGsGDqsBDGiohJYqQVyMUemsZN14TjABVGCitpDFG2B95UcY9oXrREgQPFvUhtUD9icw6pmT5qgZFuVWJ",
  "key18": "4psMEFENGz53RFnjerxdcvtxYW7cBdaaSB6kno64aWBdWfaihaRYPMfHH8aoDVofJb9kkdpnHwvjzeGdxYHhBTtN",
  "key19": "pzKgRHXkEeuDFJwj1fagLLE8r8KswFzvNxj5LbfpL8WAsP7KkNU2cuZd6atPRdqZjNAeqAFktJozhF7pUie9euz",
  "key20": "2znpYZ249YRZBe9MUTDx1ni1FyoStHU1pSirPVvAzjnVSEL18Lqd45mmHRPTCh45JLwwqvv47zPiJVKQbV71tSP4",
  "key21": "5u2u9gguwUos2vcRnLi5fDiEgtu6yjTJrtU4SFWnyoogLAHWsy7m7WQh8AjLqTuHFUnyRK6K47c46SCy2Kt47sZG",
  "key22": "4dAVYpX7nJvB74nigmjdac44WKXioaQ9pYty9hKrFdR2yW7fVevwBN97akgMyy7y7jZ4jP3grJkXVQSx8zPqMMb3",
  "key23": "ZTK5dirZBmGvTGJmpr7gQyYDHdvfQWdj5c2okG7j6bNrWa9kPCvqiGdSPTofjoA4ckSAarNAGYpRbjk3vGU3DKG",
  "key24": "xpFwDJKhqSKNyxnNsZCGPN9A32ncxApAkgsjuUpG4uwzyLVUdVWXDoTwPoPaYnnonuXpmkW2WxPYBZZi3Tqu5He",
  "key25": "4Dfw2gZdezEE4R6YdZqh1zCb5YAwH5PdmvW28gQNdJvujyps84g7emk9eHHUzgWakTFeW6ZCnPAx8qbK8RBn67JP",
  "key26": "4NyCJwLp5K5pv6WP1CRau8qFp4fATSXR9nNJg2FcLwzwCiU6NM5tasyGsDyy9H5UYayo1u5qr68JZS3akP9U153q",
  "key27": "5MmtAj2jfwU7ugCmmKcdz9y4UKVSHWB3hfFGhfjS8mPvojWUp9yjSa3ff3mpnoT4GCw1Dv4Ain8vDMgpfBRszQrn",
  "key28": "2BmqopX3fitgcGy9zGvrsQyr9nw8H6gFACihUaTG56hUpuv85o4GQXbikFYWqGqCNptz1KhDaRwQWhkmz65vLKSs",
  "key29": "3HYsD6g4P1iQFownZbVkmVNAw2EsxqA8XS92XKdyTt9xrNSnD42Tz3zdF28Y6oo8tTzoBowLk3EKoh3y5D2eB38c",
  "key30": "24kkKZD3ypYhukXm36soJkJYYuhobQiTqyKTLM9PsrFGor2USobb7i99AxfSWd79EXzG2g1wcnxAUvi1286aGyiz",
  "key31": "3Zj7q4JPcznf6KTqzdbywhkYQqXvYKp3qf4KV16TtEjs7HQ5n5bLXUdTV4P8eXBWWw2V6zoL6SQdqu34PwAoF5Dv",
  "key32": "62dJmvtkS8Wc4XWpXqq8Bm4dwmSxGEiCc5XYsp2TY5BEbarfQUj8rMHDbjHte9zFVN4Hw6FQbfQKMFb1VcQhBRJy",
  "key33": "44LjYfE8tQimmD322d2wVUhr4xoN9FAg15B5ADcRmMzW3HHynRV6UFKK8aCMpL2JJ8vKajwRjrJbeXEmvfKzWonj",
  "key34": "7LUrTuLCpnByirjWF35J67vzijYB5KmJquPN9z4HEwoiVdDytNpQ1rZmUyxeLcqD6EKJBpPVDozwQTAmm6QrkZw",
  "key35": "5sHEhHruirRogUzoaVjCEed7Zgkgqi4xekKArpXmBiGjn9CdGJQTc2PTwb1S2oz9Geg2Lt1vxS5wqVsffjoSwWNE",
  "key36": "2Q2Qb7zoZ2aYp5CcukSFDLjQTm5FyEmddwgJVbzwVAssZKikVesd1FU4a9Sx7HFEfPFB1cPzyEMGA5eJNKfrhvck",
  "key37": "5D8UL5oEiwkswp857KzQcLZMf1ezxFwLDu5dpHMg1WnMtZrd7LG661HnvvzB8hFC8J1AiHQGga2zNDXf9Uf32oY1",
  "key38": "67H9qXTeBiB1SmcVQidsF6njg4WrnWj683cKryCpwM5ijD9kB6XENcZLSKJxsQdKXR7Lh9kcqKkMiYsJrfrSkKja",
  "key39": "wk63FcuS28wU7pp1fKxRYSwcBGJs3xQ3TFyNUjMhaz72DMpjRYp18h7oixtAwh7D36oDjfgtBKvczYr3UJ3dBM2",
  "key40": "3qN7ndKsGgpBgnE4DUMePsCXG9Js1czo143kFwwLnJ8MYCasGrWUk6DsGKgQi43KikxLHRumKsRmQ77dNe3R24pN",
  "key41": "2ghNY7b3GwB57HMKkD4WpNhzHmULXpEPVyy6mumnBjXZbw9ZsHsCCngKm9Nuh2Qc371NQDRjisvnpSQWo3skXJpx",
  "key42": "2npw6aVhWY7kr63sYTLbyNEX9Bm5pzpRtRFj3mQMVsZoeYCe72pjPoYVypWWxTGUgWaAjtnP6KtPoSeBNqvK6zBc",
  "key43": "5JG2FKVFSYJX8JCnJijk5gXNQ59mZozXCC75pd8qWwd4xXAuW1Vxk6AvLe1p3Sbxx5JtD6HbaCM3pvWF9gGmD5yD",
  "key44": "5Xv4SVKeHrz9DDnAZ3cYxUkbyZoEPJmtu47ArZKbtSVQBea4Z2c8q2co3s5ds6uyVX5XQLB8hJngFzVEke1wNXTS",
  "key45": "2MBC1kxjujiFJW7fzvENXbuhAA5mdvrSwWzmWYMWAFsjcuFZjA4cE3KctSEi2a8zTtGRSC1Zxw3eVu7ZLxugfY7U"
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
