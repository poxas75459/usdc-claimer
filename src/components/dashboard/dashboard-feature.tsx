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
    "2Az5ZGgoPFjeGkn26yyUXfPt2ATqJwhHeWTAaZFb7Lf57qWmT7F7c9TV2wG7vMfnR1f2wM2epSSUwNjBHN37Es3v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E9Q8y26aajyzvZZ8xuiCyKpRjXnKKhGYurh48NEA6RU5vMKym4Q3YbD5HgShvhBpdSBXxHuSjkAJgUJcrAaMoiD",
  "key1": "5u4Nk62SZjRB668nwGc3iuAHuBP1Erh53GR9LqdmQ7BKbTvJoKEdCnEW9QmLkU6P8NHpWAJR8nmxCsgeJRjen6LJ",
  "key2": "3yhNT8ZwNAWtVYexzsUuvmVnty5DwxLNrutbbk39wfByggRZfnvYgjvLUJ7hgfodCdR22cYdNXSYKS4eqW245F3C",
  "key3": "afQveEWN2ve6gGsUC8v8vCyixiG2oyzLBe3qsax4ByvxSk5PkaqiHjNkwM8oXY81QeXGmwsQbmEes5Gh5PnPwzu",
  "key4": "2vQ2YEWJxv9654tYwxXHVdkkw2kFmkeiRT1PThDDqAgsw6s5tefx387jrRxo1hRcSTLn47hqiMDLXnX8fpmdhjhf",
  "key5": "kTmghCNngh8r9F5PSnVk36RzvX76N135SNEYkhBTDCbvonJQc2y8LMmDLcgnHqyUou668TRXh7JUjhRYFSstfKa",
  "key6": "2X1uuERBHDtC5gqNV7z3edn9fzaQ1HJuSNQhmRoKgDVtnBuiCdmMksgWfQewP3Z4jtw6UW58ofVrbkEKYpgzrAnD",
  "key7": "4QJxHeDvRCaGyocEDnHbL8p6mZQQ8LY6rWCC4qrVpTGg8Th1XGNPSvcWqxayA7xRrHr65byF1m2JHfLRcTewAPjE",
  "key8": "9YEQBS3tPRhqz7PZjawk817PoMtDumMVE9du3XRD7LVCirrDMLQZCCYocp8qNu8vQhhTRxBY1pDosZ6qEj2BXFS",
  "key9": "63cEajHiPdBmqUsDJW7PjVMKdbYNabr8hNdtCMfroC1mXeh4oWEZqACk6BqsMeW2z41NNJQCvcCfTLJ5KVnDtcxQ",
  "key10": "3489QvVzpdg5NPG9NrnV2jkmzfFdVpQhT5b3Hfqc9w8Sc6kEamW5WWpoRspZPE3ck2x5vjdtbpVuwqPgGM1vtJHE",
  "key11": "3NLCBh6ospoDjajvaW4N8yoxAVshNo9487rSEF9nDtLZFFAv4mp9VwppxZXATiR7guNkw8D3Jni3ggosxKjLV1T3",
  "key12": "4iy7gLSkLok9WdQKUUveJymM8Z2fTqRPqGrBhrTM2q9nyNVYybBkjmdgbhLruhVN1dVxn3HJNwWxWCyGtLUhXEVj",
  "key13": "5VpizH8KKW6quntzBfhRD1bmhHQ2FxXiX6uf8cfYafvGYCZqi4rqdzXFYy5UZHzvGnvZ4CTyvgHAGjeVHxNJQKWb",
  "key14": "kB5HuaMyFGxgGicC3yLeLoxBbdKF5eWvB4T8ABA1nGw2YmyZ5gYCGqfAAGBgrtGLXJcXcxDFC8fMWheV6G24Kuf",
  "key15": "5FiPnrQds7kxyH2K1ALWv1Zku2hu8UL298u97ekZoayBdrGa43X48rATkG9Q6SZSFcmmawKpdo98JtyTVBPcBVxw",
  "key16": "5C2cPDhY6pHfDdvzTvUP1NUgPuSwKVkymBnFdnwBth131ctx9SZoFrJiLBq5c2GN939feN7wsktAHspj24SwVyXc",
  "key17": "318htJpzLk2qJMAq9BbcKzVTZcLnjHKBc5VTTAAPv3vmoEosDTMxvSYaxcJMW92FvSK587fkrNs75YtPFeunWRCg",
  "key18": "287ovcGYgvqo4xgM57ebNXJg6YMg6FP84i1SrgMgj2UaqxnTRf1pTv5Lu2u8it4EzjLianwhkv1DTJ7ohsQSSbeK",
  "key19": "z7REvoodDuyAWAv1c9ThT6RsWgBvFLDBPcGEUZiocVFYBm6oiDfpxxqGA4EUyvmgM6FVMRe4EZpXpaMHPtRF4yD",
  "key20": "3gfCfw3Q3sK3TD2wm8oqp969ymdD29GSM7qnQtAjqXifRUT72tMgbPRJ19qeTfpesm4DPnYSf33i3padRaFL1onx",
  "key21": "2Y1CvwbbrjbdtbqGLBWrPzBRc3D1HspSj3PT4QGqnjoThuU3YDahuAKSRDj23FUKbYCBByKRNWFkE3t2yLFdmD47",
  "key22": "2ZwQU22vogpnidDEc8z7bQ2sSK8NESZtmWDDiLVChG1seJHnaSpffPe33YtZnNuZEHuL9xneLbcgS2ffG923QAkA",
  "key23": "4bYgSLHUJRHq27WpoeBWcPuAdzkvDsoBgwGrQKwdcpoNXaB3D263iHuWpaSJbwAzyWozhPVLj6aPkXriueetZVb6",
  "key24": "5raYtWyUK6q64SqYbhohRyEvnwjFKBbLLo4W2eR5tpozJGzjfbSET5HyrTC7qUXy658M9TqvVSdSxwAv4aj8r5Pn",
  "key25": "56TDLvqH9bRNbXL1tmcCxYcGQYqRw9HXn2ckQn9jywuGhVbCuNsRipQrbaLeMWJcocwpk2tQkemkgHAi8y6u8Yu3",
  "key26": "ieM6PiNmE3jeHtQa5miTKLjkDQTU5h79WK4qg3bq3R9TeLiw36DCjmoRMh3TB6YQ9fKsHAUanBnSgGcYNRFdoLN",
  "key27": "uPXvTCZfo7c8AgEBz4sA4z6qeW3GjQKE3sB4cDjFJjagnyBF7Y6awBUcoZmh3vrLWLWNcJP9YRzxE7o7enTyc12",
  "key28": "4u4nBHCDS57kmjHJcGc9YRV24gUWQReaoyvtepE3FTCpXKKpFThrBqmaR3USx2H6ebSQiTy1MZMAmKt4wew8nMQs",
  "key29": "2JCFs9285wBp5tB35e1bD1g6pkxCtE6oTacRE4txtNbeobynwJNMbEJ7FvHoUJhX8EyJMHG5bFvLudsGFRzm9bsL",
  "key30": "5h5692Tn8Quu24wq1iNLQTRHgqrS9X8jfkntYQBWo8KuQ6kGaA2uzNac6kk9EbZ8UrkKxpXQ4WZ9KAeLAie2Bp1W"
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
