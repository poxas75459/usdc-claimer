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
    "66daxGxkZE3Xqaghd4fJmDZjeDG8MZ5DuJ8WKoERRmXyZNJWf6QEZFuZzirQUgVCQnrgks2WAb5yVkjB7HoZhiKd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xNM91Uhe94CYFTV7cnvk6TbW6o5QAdgUjJWRvnK1HXmLFFC8YH6jHP7daGir1Lu2NkyYyYteU2pTrfKmgMgSiFt",
  "key1": "hYyDzmnUXSos9SN2KPBTTjnj4X6ZsABUMPPM3EPmiko2dRDJwqEt97e8eLAdtxAKy94W9QXcqnWk5MJahf3HK71",
  "key2": "4Tt9Xca4vLiSYUSQER6FZDSHavYT8cr94zvQ1vrxhXdyiQMZ6zfSpecLenj16QmByhSQTKchTjcAchgYPcy3QSNV",
  "key3": "4gupWgN7AentraDGxGcxxoTvP4Z1myrnERqDRzf3N4fB64cd1zLUwh5KBTk4F7sEkv2S5aqMzqRTryidwEgeqvd2",
  "key4": "4AMsgMJUGTSYLYQxpV3JMjq1vc2XkbSpfHTUq58L1WNxBYxmN3do3pxuNwDsTGpDxAcmVSZF9jERCRFErDvZbTNP",
  "key5": "3XXFjSYaVXJJBMpsR6doSCLmTFkBCnk5bHYtnGgXEXxqTMWv1jS27yw8DjK3i2QsQEC8HQ8sq7Tq1DBUhnEmGAB5",
  "key6": "5eUqBjSPXdXpvkiUi7f4dnmtiBZafgfcpPaSYngxQ5TLUTrg7JBvmh3SqsBJKFSjeJ8qTgU9f1Wi6mQGa35DmJnP",
  "key7": "34AkvXh8yJxUm6CEuVQJZMRFtAXc5AAoAsMSyUKZWgJ759makXZuPwbkEDWEunjax6Wg3yyZpPURtNeddLwGEMfM",
  "key8": "wi5Nanh6v6rLsvXfUTxFpJHwiPHDDTLHpK4AhKdPfjnpd7YE4X42mNjT6ZkX78hJd72BKvrHfEcVz8NwN3URRSK",
  "key9": "3aMpUS9U6A79iMmNvKH7ZJjqC7YfxE3Ed168bxRZg8KbNtmhKnGvKms9am3wYH5saTrkfZ3t1Pj9193z3aLJsdV9",
  "key10": "tDkVW5XLg94qtJTEQNpfZ8nnC7wgYWazzorGrB1yQe9cbkMfgdbmgUYRxLs5snDS7FVvbTyPniS39iJ29mtCmHH",
  "key11": "2xE985LBGCBTLV41CxXpi5Z3N3MmWLwDU7CTvotWEAbrgAZMnz9SzyibTyybPTaoMBk4ziY2BAYXmFZJFjF2pQ6g",
  "key12": "5bSEMsH393ri1vowfZ4STN2LEAoYc5yu35kg5pMB41prDa7gUuYpnkniFHUGMv9kfjHaBYwwU3AERSLEJDfnCYKF",
  "key13": "4SZN2mU1Lgrcu59UDhkJboW5TZtbsuayVqo4MKxMdcomAsh9z7DBtFi4vF1NqF5HDBTjGodyU4g5eNx5qrCg6HfL",
  "key14": "5fdBdcRiQFUjXmdKXrpTfwG3FB5KFNbLqZ6H85vseztVmEYXrmb5kA9TrSEPL1VKkXqu4c1e9LWDXDehHdEn4WkF",
  "key15": "4Bg5pH5HhrkmUG6swpW9jQTWgE7xsyWXukKvzLaxMcuvQZQzEXVXFzm7cmts6B2B3zJQB8hvat1vJXPtDq39JmDe",
  "key16": "5mZzFwMwsRDm9qcq3YK4iM7omrFpTN4T2wqJdVZhh6C1TKXUQ4kisVJBVQ7BBBrQcs1iyT66jKb72BtvSXDxoxj5",
  "key17": "546MNA22mWyXvQLv2eM1tD58NLYVCMraa7qsDDtUK5pYFQUAcypujeuEBFCRpwBK8t7CQtfrMdo2WRNciaMocPLb",
  "key18": "3pAPpM47EjremXg8HxuEaMLrtxAuXs9w1TrwEFpUUo2jWoYxAFzHAaxjvoKVydxfRG3WJ5WS7dWJopfpgAEKbsD6",
  "key19": "4VG5bxHPuUghvXhjgxTfhbUnYYCMa5m6ZggdGMFSHvSb8puYaUTt6zEFoUCWdUAeZ7Ubm2NZZG2eoMUBsfoWsajg",
  "key20": "kg7F3G5Mgn2YeY67kpLKRcXGE3j42Vr16LH9wP9smNyeq57mDit5T7RNkMjuUpfX8T2s3SkTRNyVjNAMpMn2VMp",
  "key21": "qPjEbMnf2qYLdBVNYA9XuM5wBGbejPUuRJ7bMnHU8C2Qgm6MuAknDxziTm9NMPfWyZ4NnSWRCjLNjjxJzctnf3B",
  "key22": "5Ry52dCeZCAeapsUTZydSHjk7smq6wbDEwmBeyoonr3aGumy9A3NGKrxDsqycjc2YYbrHHrFR15e4mjJdFUFwkrK",
  "key23": "28tD737Rp4FvRFScQu6F5pAS8rtdTTwsiCdnu3iEvzmRMwfpCwZ1WFMmKRsirbdQucWTRwjhJ7rTfyJteaCHGfyY",
  "key24": "4Zz9LjcT5DoDAnpkfAco9DCHCJXAspdZzioJKAZrfuswhHrEGYfngMH8FuEHEQxSZ7hoVtLY8QwsBr8noXNU8p5V",
  "key25": "3SGXSxnwhha3fSwrUKB4qqrRMPmdYe6Se86FTXo8yVow5Z8NYYjqttf2UPULahhc6M2h45UKsZCWkCqFqH48L1sX",
  "key26": "5gU6DxMpKyawqNfPnMTyzNp5WcmdWEVywCsimxocKJyTyuMaNhqNgBAYBepYurtFJDa7kcL5X1x2h9qgVCryXycf",
  "key27": "5PFRjymbe5fZuG6NM2LvHRw6yFuCPFdpPjjPvFaznCtLnQuuTbeJxnv8Fs4cabHP55jT9zAxsbgC6fAKrppefYSD",
  "key28": "3rnbjrc3zNmms4xGByKvMdUEDyL6ctPc3pP9Qy493mi1ig1RVY6bvTKvWqjrSvXSXDzex6S1YeCs7vXVAiVccaZG",
  "key29": "4FFLoJKhgdfr85VtEB6GTmPoyevx6dZYVu18MQUme8cohAUKwm7bxArovqATYxt6F988LWBgqMPYYfbWtSqkWfN7"
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
