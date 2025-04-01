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
    "UgY38Y1g1ztS2DNFnBC8MCD5paiZG233DjaTEPsnLZNsp2WxJiE9VN8439m3CKcTcGdNUaXwKrpBA1UmHeFpZ5f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mMS41Ue8EwnWn5U8N3LyCgXZPfJnE2MRyHQb9xdrPwiVvD1xGMoRcrAYLMCGyhP4LTHjBnN7gDnCWU9UBQpxnFa",
  "key1": "3fC8qNoFkYWzRs4CqXfJ4XSpCKL3t7kvc9pxsGkXtDVn6c78Xpc5uoM8fh5Azxx7j6TEJdS8Dizt6RPQjEE938Ua",
  "key2": "64bLZSV7qGmdbcx2hgcaVUjRXVvjArGEzodQbpxym7sZBywCMpnJhNAbaQYQbzgvJaZGDbThHJRCRekQ5JzPWmnQ",
  "key3": "2nqoTEBBv1gn463VAM46LC422U7JKqZ1ksL9SY9DBw6rvDQMgqGZfukUbdfvcqm5TTZSQpju425MDCM7buhgdnv2",
  "key4": "3h7KFahh2cJNi6HkQLKmThHzDX6bWjyY1UokRrd62bNdxH2bGwwQkoaNHn7p778a1r2pTrNii56RWgepb8oAzwiQ",
  "key5": "2hgAYPsTTuLWPrijMXyAUt52CN6m1XV9DYmSJqjJV1PVi9P8wD64ZkdqYx8ECNZz2X7pKbXawtPeoTP9v3wcDMQW",
  "key6": "3hAgWuRL5kuCkTMHsawdJkTi4riV2hWdkXJugipRZYNSs3zbpRHezZxbWyZkQvHV9tqkW4xXCtrWvGvtFdX9ynMf",
  "key7": "DTPPnaPHvL3ZQ5t9uctknFAdkZsTxUczSzQ11khodPzormM4PXFeKWAe5Av6SWje7Vkc3vrQPGAaAzsqhgMY8n3",
  "key8": "x3wjQbeYFY8AwbrXAnonHAkqpsgfb12UShEPuPsgZjTQXnUvxkCYzVkh6b8UM7pcJW755UFBBDQ4iXvHQwyJwFx",
  "key9": "Ma75BTohbxEvXHzQPw32BMP9vLt3vd2CUPDowkH6MeiTdSqGLt2qsjfxak3uvXZ3TXVq4CStFoiktSk2xRRLsgA",
  "key10": "5KJWcsUvLcsFse62pu4wdyneJyLedqDkBSNMjMmbQRMvBAB1JqcZgzde4Bopzp6KSJjTAhfwmadBHdRjjwxmuAsf",
  "key11": "3wMVGG486seyGpdF73RXW1r1eCoVffV2eHZUpJ6jKvZEBnR3hBAetR9Nep9q4VoF9qq8DAYr7P5xRpZMvgmZoRb6",
  "key12": "4971gcVe4HGTBgpQfBQpJEwzZAFUiByohi7xXzfdvpaipCmaJyBnmpbRX5nB3oiPR7dE8xCDJXQBMnMgTUWGFYGw",
  "key13": "g4BuVLqnKUxo7QDmdHjt8osdyDXXdh5cSrNgvBrR9xG7uPPcR4jzy4sHo7KJthmNYM5G5dApjpBq9zEdg7qacHT",
  "key14": "2VR2MKoDDxwH1mJfjxAFtKtCTQnRVNyhcZn7WoZUJxz5U9hTi2hauR13QwUj3YT4BcTzRV1q3gzXKSMUVjQHEyN7",
  "key15": "5yyF7uUmgCVSqYERKuPyAgfZyDfirMLoEbdxFwGmz9uvo9ijY9swgWufHfAzH5QkMJ1Ho4kmnVF3TMxdp7Vjv8Qs",
  "key16": "5pXehx1LdNA8mXAAqEavHBc9GfELYhbkvGhSLFzbdHFsPFrMWHgP2RXcesHEGMzBd23UuCiztiuBsMSJYhxCU1Nq",
  "key17": "thkLAABpr5Tt8ZSkHrCVFb3wUGAfP4hgWnyPhDjFzgdE6PS7L2YWBhM3MgtBfhsf3e4AkwTxKUg8vsnDt9KR2qb",
  "key18": "5F3femtdSSqXNJcVJY4oi1HpCahqcNj9en7bbLfWpkJK98ixFVbzhcecTpvhZGXhDhGZzgq3br6mT3AKwi4ceb5w",
  "key19": "3kDZn5pkzXNwNwv9mvsCTFmC9dMMspHcBLgoa39EYn8SWzciB82YiTQ9EZCQzBpRPU5n3NEBCCN72KEqrzKKXpe5",
  "key20": "4yNErQJdcKZR3jq7p8H9BtbVfMGu1iPWj2huzRTiPqkhqCaw6vbCAmQHHdXTDBmZySYJyy8VZyTHhLPrX2mcQL8U",
  "key21": "2wgtEp7M9GmcxG2bnynQX5jfT1sxaBxYVYvUJc2HX5R835LRnLCofMrfuU3DTkrRM5KwLEYLKN1v4FZyYEpY9TKm",
  "key22": "T9azWC1VVh3CZVorF6Qq5sQG1wnAaG5nP18MKJa4QaVZNPptCsJxppuCgphamfSj4GrdbSfwNfs2EVW3V3wUwM9",
  "key23": "4U2KhiEEmZfbH5VCJgv8gEKcAedCAjUvyR55UqL5DqTPszjr1cGctrbmMzdSco8PckuLpVyny1CTd3ToZ16TbJV",
  "key24": "5NwYMDY7trB4MCBcQKTo2Za6B77vbD21p5UjBvGEGjMSGE2Rd8St4KDG1T3UcJR3u5T2kwaWLZWPETpxDtGD1qzq",
  "key25": "EhaTZ8b3vEJw99V9qcTgLuWWJkGwczPTXH2LAPQP5n7X6hq9y4jMmfSSQpmpAV3UjDoKdW3jaW2j5Eo9ukrxJhQ",
  "key26": "4JFpaUXZx6t4z82Tc2KhCmxizsiRdFvg6WPf8Es8Ny4Xjxj3EZWRBqmj6MJL6Gt3MCUeYSiK8BYfrkDEf3bnDu2P",
  "key27": "G8Ys3nvQPKeJjLezYB62yhzB1qwcaL5JecW3b2zkms1LBvLtEq2Lus6zSUVXQeV5KKQCSzvL2xiG93Xy6HMDEqP",
  "key28": "2fQCsW61RxaDzeCfNAzpzz74pvGyxjcs8UyPWtWyyuNn1BdCirAGn5CL95HJTUGHq5GhJY3ZMQ3XKyyLREEH5oyu",
  "key29": "7L5w6K7uJhzKsWXS1z2KheELXe5GApaet5smUt27fTFtxgW3hA7jrTkJSRaRgfka6UEfacsnRFuZnzKuYvSBqgn",
  "key30": "23KNiXzfJCs38UiqycxYuAyhaKQTHr7Mc1dPe3TrtpimhLz6RhdV23A5qT3LseXEmGdmbscdfQMAYMLvcz2B3aH8",
  "key31": "289yv4QcwAbJuw1JPXR7kKRe1W7CNZmcSYnAY1M8C6AbFd1m5Us41aUPJvR9eYmEqE27uz7Xs4rFKVXuRw7LFRmf",
  "key32": "UufZ47hpkpHXasC74riekraaFP9b3KBQX9TEagGyXsrafkqTSC3pBc5Xv6WvwFed86qmYNCS42UNXuLfHq8xoCU",
  "key33": "wkkoi9fgdwza1jy26r26oEWR3Zqf4sNWHoippvfSnun7KUbmDEs7AkKXiKyJ5WR6vensAy1xebaENcFxufBoTKk",
  "key34": "NgKeC4mBqLkJNc11xUqtF6pJpXgghKjSATKZs2bgqUnkpStGHY8VxK8T7ibcpXHcR6UoyLQE5LhbEidgEL3tcAy",
  "key35": "3iuJAyjpUWfkf8JcCfdnMSLXQrwxZRZPSkAq1J1TDgDukFWDZaaCwQrmDzRrok35u49MTQrikGBzgHjkJkBbuDuf",
  "key36": "5mFDBdHeaCjcGuZVczTEPmJioiF57wnFcsTWSgy7RJd64Hfcir4AbxtDieAcaBWDRRHSeMbm6bTHvbwzaiE1wskM",
  "key37": "5AGtnAjdudcnbrp6x31wbgYrxCRY9Ztr4aNoKGQG3Ckdi8XoAMeABMqD8P95i1qkcU4KLG2qn7EMspTaagbydj35",
  "key38": "2B66CjVmuURLhFzo5UfjuZSGWSUGomB2d8ECGFz7bciJhHsZvyFVHkR3jEZtiQHrKs2jmAhnkxxwBiLtZHwSKVDK",
  "key39": "58zhszV7E4WBPzCtrtp7P3B7VoHEGifefRod2WvoFtet3CWYSXnhqnv45SRGrsxJjh2Gnn11LdUqvxmfshnC3NX7",
  "key40": "4oyt7HEqZ7wCDR7z61ewgbXErqBKF69hzkGUBYst9dvg8tpy42Rwp46KEgFa5Kt1JrY1aGxosTJg1B76C1mErJSp",
  "key41": "3nLPw3pnvv4RjQprHXuYc4nmbbo2XtGuxnxzmm9kKrknkfMu3wuc1jXSnhy73ArrxaZDHcWshk74eqgGvWYt2NKR",
  "key42": "YMDk6YwyWoiGwsuEydC2Np7dmqwJ6hxEgDRqYXc94DSTvHoYRkvGbZdS7s1LZao8RtThfHZKjSpeces3bixaFky",
  "key43": "593prjeyJRxxZdMRPXsXKdVtoryaDnMseh4jovxkrCE3yHRZfKTo9HTnYZDRokRAYC3uK5ehhiTF6RYj8HGihR4H"
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
