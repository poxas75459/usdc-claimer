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
    "32YHrkW47Z7BrREgFjiT4u3FRkD3DoGNf4bF7wWxH7wVM9QPhKsgDWrc5MsDhAnZHhqX7kwiJjRAS1WhaoibiwWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jZyLNQcTEZfwfdP4oXQKfJXWx5buzcUVCioEScfGyaEkK6FWWFmub3g8sYzGnVvYSHFyMTs2XFt1CWjYZkTCwzg",
  "key1": "94wyyK8Wcwx1PhEPkwyUFPqqQtWPdu6XP63cGBkiyviqMYXq9s4Mezdjeo1kj7ZpY1mbmGoUUdiak78tsgExKWg",
  "key2": "5ggKHuPB6iKSWru9EYb5vJGJXsGHFXD1GGQKeHSkvbe4frnwX75zEuVMJPP8mmABcLZUsj9UECNSjaysqnq26yrX",
  "key3": "5fBVPPW9f44edUN4iwXon48x3LoGfq7CU7SUeaootAF8jn5MhMdAJqVyd4hDB4bM8TGrjnoKiTKrMJ3rGxhSkCBd",
  "key4": "GHrevbHw8Zb7nuZjbcka4Jd73XXkZcecoasuohyKSXTzxfvXzBXjwp2xCZB5fqFfHzJXVvXiEowk1s4Jzng6iyA",
  "key5": "2WXW8FRqd2ASLCNu9B134si2JENRf4qPPQV1wyvhfqHAxpicRELDNodbsq8a55PaLJaNZxWB1EbRPizkVDfPq1af",
  "key6": "3wyjnZ8hDQDJJqcMsf1BwkctM5wkwhXLyFBqhuf3vVPPUh3X59n8r9TxdGsXH4zuaj4HdzuU4CZNqZF81x44oUNE",
  "key7": "4gZP19j8DdYWYWaZabKh75ZSaBY5Xvy4pKBTPs2SKhh92c3MrfBJvxb7zwwKzobmc5vcb2jUS1NHBD9oh9bs1d8f",
  "key8": "4C2cRJD8RDaLkbTgBT72mEwjgYTGUUU3UQ6FRzpaRCf2GFM1QSVnDm5RV9AGSv2MDVoi2iXbFgKaiksaKrvb6oZh",
  "key9": "3GcFoAWcc96c3XfRtiGyx1SPyCnH2nYRydNB7n7HBNN1eXiZoVWC2gvpF4fBAPtM265qwfhE2x131t4HiME4Tcu2",
  "key10": "2PKBFiSVNLUVZJwWMrVpAdonAdh6ifJCEwoB4RxDGsBNvDDRqvY5bDViksmQ4M7AjRrrJutLE4UCvi8hakmpDMWQ",
  "key11": "4Yfi1FYHXiCXZ7y35A1WMZnC5p4NUGZHAGTpP2ymdk8TnWtTwbohhBepGK3VHvg5wsK3RQerAKR6ovx1uQKjjtLf",
  "key12": "3UXt6Bgpi5oxt6bC2wx5V4E4UBmSAYzZkZo3KTY1JueWyXn2td9Ps2AftGHLEc3zMGJVybvdCcvZgNyD1GJWVqwF",
  "key13": "4JmJ32rsakfgaLARdpVf6DVnFLBEzrTYL1PfZHc9BRj3phqhAQEv8gJCFxk6ySh1rH57qFuMNR4YoC4Gqaj4AbaU",
  "key14": "21c4ZgWXcrf7XPujhEBoaFgyZDrN2Mwz9ggivZx62cXqQWKH7zCMeS9UCHw2GQ8ohyxLMQwFhmAEV9KKrVeA3BHc",
  "key15": "4K71gW5QVhTih1nJLeEuoBzttbDSjG2L8czWfK2BBe7uPT4vqYHV6zHyYa2SD5ACLxgyi79hY92uNRXjX55CQYa8",
  "key16": "51omD6woiC8ngaYiNzPtc5Z9YJ3XQTAB4VWiWSXuvtyydHXMaQajgFoP9dYZ9DnMDcin9QVqTEaPYRKweJDmqgDK",
  "key17": "3rdGmvcq6cF8RFmUSiY4afjuZL3rGeeirHgxpsgPh73US9mBTtCQqsPpWe16m5ZNV76uiBKJcR7LSiTHEoL52LFR",
  "key18": "47R2WjLa2A8aC7gHV6PKGUSddxiWT8XVtVYL8PMUNcKoSRPB5qH9ApRjd7mbsmMctJkmLY6VUrGbeHwcQ9fAh37Y",
  "key19": "CaAgsn2r3NVxcYnVSxoxgZMsBB3zBSYHev5rPzLCPcW4k66b73gogznkKUnTQ3v8wjH1qkQ66vUj8V3wMTjgxZi",
  "key20": "5HLg5APE5vxkgDi6sXfNQKDtvARMd8qJyYuEnnQmY5HUcEXemuqBJfXwJo2e2TdhGcF9d8roESuXUtrWrWkP6Nva",
  "key21": "4mFtjuezKxev6i4XrREzP9UYHsVZJ7r5ZAaGHEhXzBfWFgx2xDBWvMq61JDymuAKTHPpm4NGy66qoVfBYmr3Y3uQ",
  "key22": "4LXQogB8dtDVUeaQ5v2c5QFixUwDM96ggnezLurxQvCHhHpVyM2pTWdcM41qVbRwDbLVADtDHE6uHoERCtiDcq7F",
  "key23": "4VKvmCumWmHP9peRvafDcwcbRByqmiApmycKH7a9jWHGZNFZK8zuQBp5wgLCX7tHW5zvURiSBGvQF1XM1mvJVwtY",
  "key24": "9C6zmnX8MoEZGLvtjC7x8CVKLZ7MJSPi4ZbLpbgn1crT14nmg8PfyKtuxdRtfEAbvfwtNub4uyDp7zvrR6ejGtB",
  "key25": "4F6xs4H9MX4PeVbHe1Yyfz2Exv4ZeRqHB1j4tmPpBxWfHrWFtgLH31AVxDHyD2qCxDmf7c2sAsu2cNCREYrMz6j8",
  "key26": "35YeRNq2izBVN4k55MDf83ZhgrV72ns7cHyd3hc9FZBkUsQQcwmgMGwnS6fovgCXN8rJRJLqUy3uhXFFBCZmELvP",
  "key27": "5Rgv4rsh1XcxY9s5KEBEqohCZevZ37VwwyHcgro1gLgRGvFJQrjnLPDa74dRaDHnSEvTmNSgmZgfFYTQmH99LZEd",
  "key28": "3T88MYHpQ5KGggkrKSupruqdsUsxo76xcMiRoc37eG2BoU3fYPZTCdJsVLVJCJDvjtWJZzpZDLdy6d83fBBJY13q",
  "key29": "3gQsav82kYvhr4j1rCXc2HpTpMY41DRRWEofkw5e7XvRqX1csvNgHUUybc1Lckpg1i34FD5KLfvKm3LMXNRVRUjL",
  "key30": "5ZvKzoEkKCC7m8WmEgj4toYwUxRx7yzDeUtzfVj2oLb6soZVnoCmbuNE7nTDbyDDxFsCECu1c4iSrKgKjC3kskWd"
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
