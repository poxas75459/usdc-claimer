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
    "2hLQBwv6haUDNFgweVAYBXqGhf17Ehe6jbc9i6X5C5SjEZakYhLwGodUzDHnTcy11J3uqRXVHryDTbHSYGj8MPYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ntdCVcPPRaeVK7VFmRoLNEe3yxg4ZTWnFJTiTsrBTvaj9CXnzpwZyAS4icj1VHqLBhQVq9fxXKyW1zHgovyfAAg",
  "key1": "2ykUPTaQs1qi6w7VrH7FPdhUUeWHc2BpuSjMpvAZu5V5w7VmyD96jPyV6ZHmyPYWj4cKzKMXeGmprXE6bekSeb7g",
  "key2": "2Qu7ycAyH6LNitBymeeHwJFUJ1eBNGGdnvPofLPbXZxViwrTQEyN1whyUTxJo4Jom2utgGRBfEJeGmAYitaUqmPk",
  "key3": "2QXA2L37jqTVFZmWAzrep7PPCmEqzfvmG7d1EnzH2Fz3EkwstNmYXaJebJqZdSNP5UeK58chfnTBW3o5gbY3bX3J",
  "key4": "wLvgBpU1p6STnh5EqHCvzXxUXv71HKvRN7ggDQ9UauJutkt6W9SKoopNbCV5C8q7iTQNyhnRSbCJQ5xEgBSJ7zt",
  "key5": "48B5r2vGSeDyQRYKaQ4FmyfEF42WaoJxsedfGK7oGH6dwrfgLQgmD5V83eEs4aXFXXzodvEoyNmHrpke6SsQGX1h",
  "key6": "4jHY2yDJtmjVTQpo8xCeTZGXNDK6RVUdDnq6nnFpkWHHfVucfY8URJ1oPhB9dqBjoXUPxR2oVgEo4MVHENho5Eow",
  "key7": "2VFDVA6ukiqj8UtRVNWVid9UXGsDBAkY7btkYYrzqWxA5HAKaHi7Fkjye7nqYiHARJsbaZ8wQkJJX59gjji4yQQ",
  "key8": "4UhMt7BEA5rv9aQzzzYchqZyj1VWd5RxKGFALk9WWQqDRjnLmzFVn7AyBPQB4NgD6BBygXvR763XExjvqT6vrCT9",
  "key9": "4C3wDTUe4d5QWtMWtdnAitC7VVKJQEwjDosSAWsL9t4c7czwsf2jyVgVdAfAsZxEuN1DKzzaCDTeMoxDh4HfREhC",
  "key10": "41LsuMP24LzzkCEVSREpfEvdefBavXXvqkBwsGnHMP1g8fCQPb4mr2r8JxdZthzp1pJ8BSHAVWHG9m73fFJrXicr",
  "key11": "3iQGFxvoFRU3xrokZNjsb6nRWHi87ggU5hMkstwhjTkQ48goQD3x952YidLDQzbkkeEwdXyCkFoD7sLG2Vsenv6Z",
  "key12": "5rjwCDQCWdUzxc3ytsRNAXGDTjvFKQE9YT4k3y4jTLgdpjrzEyqrBMfDuA1XCKru5jdUEyLdWrdbzG2YCqMnbMDY",
  "key13": "5RrYyXpRDQuu2jCd28o4miT5toruWXN9tU55XBGYUPX3wbopMy7SbCAMfi8MVA8Jjzd1vUFN6jNzbJpoD2WVWYbX",
  "key14": "5dUmaywU2umxT444USxaV2yEyNihxDFHaJy4wRcutBYWHMmCFuCXasSLgr1UXeTrmAbTuEQmZuHscXt2S1bak7Yj",
  "key15": "zaxcTYJ5aHnqTkSzE9Zs47ZSQqvkM3hT2ca1C4aVBARToknbzzw8ZjjadN487iQHLgFsLy5nJ3xwAh6nTSxXo4i",
  "key16": "4wsBST3urUeLroDD5QdqYBbjXa4GJwURZdKNmwKYVBrZkLt4RxdD4WAHGRBNmcWve4zSPSgV4b2qvxDy5yP8FTtZ",
  "key17": "4UoZLtC2UZYGdA8e5aFCzrpEfYbmtLpPiG3wzycZ8QZ2vZQetMDAGR7W9sE6hu8CXa17RRHoDitqPymVFH1VDvox",
  "key18": "4MY6PXLodxPWKxCaej7YtKWyQzVJFvjk5aHzgvHdk8HC3PXKtxFjXUPEhzxC8z6MVQ1GArB2ZU2L1iHFnNrES4nZ",
  "key19": "2YhpJaL4UTNkPgBkpuzEoZtszFUohmnxooiZVxz3Py5Av5brUb4iPdGTbaZTWPGe35TVYV1GLwWrxofVN5Wf91q",
  "key20": "3Z3MxziFMsSMNrXnYZP9zuBG1iu5mWpdLG6zejVSaKS3ZY1vy2FW1ZZ6d5rQDDsdiWknqPsLXdWwwbkejVQKyPos",
  "key21": "4DWECPCgXK7ZMqrUQZujrHcBKMkPEHwtEnDVXE9h9rkiZK57stJB2AdbHFvPtoe5YkWYrErJAc32A7bXDuYAbedq",
  "key22": "3sSS6tSeR3VR6Wiw7XoYAxcd9cpmkFazmNnipxo7FrvrSRLLYfL3JyCxdEbhZCRst1yJqy9N7GnFD7j4XmRy9s7C",
  "key23": "42GnT7yYr3x1FDwREkyBJwH6zi6V9V5xYsJk9VZ7FJCBfSZZnt6g8W6xPUJNkf7U6ZpXJgKQHFCFkKamK59w82v7",
  "key24": "3fnZcoJ8qKYKfDTsKEyvxUsoDgwXwLn5nkzhNt9Y6v6URfHrPwx2Kr92xUjkRmWKkSpjeRGFSteAxzCVFr7D4bL4",
  "key25": "3Gb3iuy6pRUAqkZ9TrB44QimAkwh17bsePdav4743vWVLZd7q84pRABjfipGjNp6vBmMr8Eiv1EegQ4E9oNgJTmW",
  "key26": "5UprRrmWaQ8EGjdETjmzVAZpx4wmGu8kxjvT3DpLQjrrg44gKiJkyp7NJjYzEeRhyzgf7WZ5K7Ng5AvRoyPcUeix",
  "key27": "236LabbadSisUUjGcA5eLwtaj6vVD9CpNEtxnrYuMZe36pBekt9FcWJSJsfEheuFRjgCaojgn15c3Tq9VR2EafxF",
  "key28": "2bH9ocRz7aFKHqiHKgczoa79V3CxjcpyfBX8SPasenNpKJQyAWGCc5VSbk7UMXUhqAYXoTXgGJyhcmWLhjvCLUyB",
  "key29": "58MXxAnwmiyE5TxcPp9tSKnJSRNnio3GGtdmwGauGursXHeWPKg4u7JmvKpniLWX53g3fWMjCTQZ82Z2U4LBttQ",
  "key30": "2ueeWwSFThaHE6sVbRnytQfBXNJyeYPGecDY3GE9aEPtsHdeM12qGN8MY9LJMqKDBNS5MgMkekRCEAXnEU9TaAsQ",
  "key31": "4ZqrpvBT6Tn9QZRKEhAjoyUqUpQC5sUeTzUny14u1KHJQtw8PvxbSj6zPtPoFRorgbsrCxW4dkVrVaGg8nEqATYG",
  "key32": "pwU3kkGFFAj24wv8Bo6RpoKZ3rC9S3uiTYSeigZLjx6YJ6RaiUViDS2Z9bRFmiYqrL4bDAnzqtX524yCHDN49Xp",
  "key33": "4F3Y7JFcEvek1aV3SRGdz6rrDy2r8yvaDYLGAsmY9dRsazt8UMuRKq5ZmzZSG9qome7i97BfFAhnU5iD47oQ4vHj",
  "key34": "2Zeasxb9mNX16Fxe7M1pgQPTsByGGabJvV4d9PZ3tmED2HrncjVEKszywwJHQFQ1rQy971BtJuVtUwsxQCeoK1to",
  "key35": "VrD5MzyDUyf9iq2vFqWKCo1fH9682SQwad76FoAMD6p88SoibKypd1ZTPUhPRh9NL5UkYWTzasKWatUo1yn2VQz",
  "key36": "3Xq4AShNGGJnBz56oQ3i55arwK7FFUJZuA14yYahS5puz7aNqd7XrvQvGQsVDrrRzHF7oeMfnJS6AZRRjHNJbKym",
  "key37": "2AXuAbyosgz8UY3x2qCLaGJRiFZE7mzVrcLAwojTSs1hjMgRg2vx31Jzh8WCkb9CS4hCM85GwAePrR5B1xaAWmjd",
  "key38": "3B1zZhUN2dJqScVFyQXjKPTe3Vc5byQeXoppTQyWescLhrPnsHoPbNB951ZTvhF1XbvGvY9tw9b64U2qagNpz1oB",
  "key39": "4YmtiHsZDSVDWMveC8zzpPYzgBUGougxwBQkdSzfnhu4m1Dce7SmreRcGR4eFC7bnj9HURHLPUUrWk3cT6SmVJts",
  "key40": "sw6zbbSarfoi57nGY4HB2q4HChAerno7YaJfU6N6KdBMnTLP4MQBYZwWVzHNhrm3QJGa2SwzqdFhbpKRrchaX2K",
  "key41": "2Bueshi9cW1yeVSoMbjkjZ2Mxpy3XJ6kDUgp9d5ospuqdycJNmA9vLE6VdsGKhfqQncZ3Bzwu3fuPrjLFdJ4HfyZ",
  "key42": "39NVocyav4yPxmDpBKRs7w6hyNxPsZmys1WNJgrAo5S5DHZ2TXcpizZECt4CF1Mkw6EXUvb3NnACEh781gS4AwSX",
  "key43": "tGjxfHrvpbgxH2rmXGB1tLZRJdAfDhxfeHzo6M57Nkt4zTAL1KYjZXQ1ebUjWT9W9CttbUpuW1YLVrji6j4mo7D",
  "key44": "2JUAfrq6gWKh26ohmgqWiPCLTm7k1tkd4fL9zQZVWqkHVU2x2HueHSaeXxtZ7Lm6uNoEbRRvQhGWUDenyHBdx4Tw",
  "key45": "37D9aBv7VHynKijHZ66eMZH8SoQURdTJdL84oAz9DhywEAZwAudjnYqHJW7qwf2MtcRAqJd14FA8hRR5GC4WBfZe",
  "key46": "GTT6Ert3kQX8GWo91n9rKP3WZLmYKZDMq5Gp9QiRZsmyDzJ98HavxuGTSzaKWG4se4uoxpZGanxBW3weAfALrR8",
  "key47": "2jf94q39dtMGi3V7zFKFrgc5MT5xdX71FURSLuDivP8PG7tqAFWe38BzkK8jRFrnthrhUrt4P85SqYbT9VNoVJuW"
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
