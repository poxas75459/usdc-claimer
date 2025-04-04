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
    "2vwgmSAjxgF7gGMfFzBgd54e7RK2VyUzSb293PAkikBwsHtptTZzNYkxBwdJ4nEXAktnK5CkeejoWnRTe87x3tca"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SNPXmBeaq1DVbsivXDxqjaZPwJ6Yp5teCYazH7AWDsJ3M69gePGDX34q7NSvvwtk5S8m8jMaxC3JhpAK4wqLa1T",
  "key1": "58LrgjokfkeWohE7QfrWduFCmHCk4bJdqdfxNUZddGtSkLUgs98bCJ4tJK29Qq55iv2u3vqxPSC9H85nNXKr16iS",
  "key2": "3RpcKXi2qrto1r5PGq5NFbn2b1G5CjXMvUTuwGbFeApjf2fJAb65HFWTisAecH3Dkm8ZpCW7bKqwqxTSYtqwEQ2H",
  "key3": "2u2XRb7sfN5pSquB7wntnKmpDGnQa6on3J83CLczWtVZWH6zysGT5d2FZDxSsBA5uMNwH8DpGnrKm1UBsGYuDEr7",
  "key4": "pePYNj3C9vjxRJmvHf65bqjunApN1L4q2mYyqNmzBYeTyALNoXTTR5p9ofMuKan2XNCVQe3mu8dkXvG6UqPgnmU",
  "key5": "3UQYbhxFBCvxuMLovCxMKoH9XMSE1Aqwt2zzw1EKsw1hdDXXyuU3vWYEWhemjQ7EmenL4AocLLEG2r8YoRge9LnD",
  "key6": "dBUsEhyp1imS8eotYromJXuXgD1JT9NCYw53ZdgCUGBrBjx6qfHhQSkfDLsDbeQDwWNrc7nrd8kbaHHBJQfHmSi",
  "key7": "3BxNeTZk969mQBJfFM62J2kmmDAixAcb9TMj1v5G7q1BqYtmSY2yQEX9BkHCQMVHNjgbecx9ETnHbHJGFfbjLRfP",
  "key8": "mMuozRsTmuVPecZVXUGnma3mcSy5rgKJWtwfBbnDusp8GFFyAPu6Jr5t629F55nuKvNnQkEGaDJWN5zi127ASLH",
  "key9": "5TVjkVCtkg5HUoz2Xmox8McXzK5qiBsH3PAicvDHRQ39XTu7H7EYuaJ8tK8j1KL2R2N9u8mxPUmKCYi8s8jSCotX",
  "key10": "3UjSrg1MYGNTscGiKNTUjoLnqanNf945Jh4Jq5iU6kUfwv4batwjVciSCQmkyoTXmPJzUep9YBgfJKGqq7gVDoAe",
  "key11": "vuxYbgizGFgW7wReUervCQZKjHuzLbhiMuGQzuDEufkWkJca358k4eHQV52HgNZNoNsuXsLCq8WnjYshuTgqncm",
  "key12": "bLZy275ESDqah4vaQLsrJBLNkwSQLMcnguhJ8qREWEXavgAv8ZAp3v2QL1FB5JdgNc3TSHhDMpwETcLYSn9m988",
  "key13": "5krzwsHXybMFjViRtErBNVysL8MfbDG5xrLe4ecKizxj3U92E7PLuY47WVuLvkptoRwGCSQXskDc9FYr21yvxRZC",
  "key14": "5EXf4P18Q4PEy74hXWkqty8Pbo5ENqd8DhTnRZbxG16Z6TYyGU9Hz72hATP2d49xQJVXYCiNnqVVXr4zk3WFXWY5",
  "key15": "5Z1xCG2FQFGjQM2eWifk14Lg2CvvQJp9bAqkGYVPKcE5hNn4er2iTretfryHgw3dDcN2d5KspBRdeirVvLe5yr5W",
  "key16": "3uUaSfoCh28C26JSYjE39coDcoHtrKfDzZjRjj6b9gvcmKrv8qBfWPNRkMGULZMkPhAyEMRHgYXKR3a5uCi7u6G4",
  "key17": "5YWcvxAojReoSZ8MEnVvXVfDHTyWsYosDUa1GjZTKazeWg5sz8i915dCEYUVAVCBXGLxFJ6dXEB1Fo4ziMS611Aj",
  "key18": "3SkjANr1RmZC59pVSz5TsENLQGn4BL8RFn1BYPqhtQdnYYqpM1w53vAgxgekUfGHYo1ut2U5jXGW1B7KU7aLXERo",
  "key19": "2UdmaVEnPaPHr4Ytq5qoANY3FrPmztPPRR5s8cPkVvpV3AWYhDyoSSJVw1tXn4ZncsBZizDUpqRdbr185pz7uyPB",
  "key20": "6sHPo6cNwJvYEgS3ESB8UuRx6LbtgQcnDZiygFSLH1nhKaMwm3aWbmWbA1QR7YMuQJ1mJvzVvDNTr8wskQwQgNC",
  "key21": "5CnjdgkBHFubZQVT6KLrXEHbkW7Qgdpp84auN8CYeRBw4n3iHxmNmzoodoGM11juoT7oJLR7npMxoXZx9zrsXdt1",
  "key22": "4AQ19fvRht4NGqC292fJhT3K1sTdf1jCd9LshTwKjN5Qj62u7bCcGQjpFR4LDmGkQkBpucUiBC2beYn59b3RB9eq",
  "key23": "2KsZ7Xyu33wykX4q3RMmBa48R9t3qgdxtLkvoZiTQGP4AtWujUgxn6Qi4X6o44uwsEFh1phPoS4HakPueaj9f22G",
  "key24": "4gfABEayfhS26bUnqLtWkPcMD2KDwnAMsKfU6R2VpJChomytV21EeUare7y7HXktDeNMSu1Mchz9Lf2aAZBYxPwb",
  "key25": "WLQEbqE7xLq7XoSuJDrpcLQFrkeGUGC39WWMdZwBapz3emrP7tUjx8QbbkfP58Lin4CHpwREVzDcVBA42vuzART",
  "key26": "2RDxqMQEXMyDqK3B6nBdnn2dbdeSRNmwsZVhMmv4CPVDY1QptHn3jzTtYWLhwWdfpJFLSRNSh3hJtwqfNfbSfCeW",
  "key27": "3xDiioJERR346jznaXWqmiJkcD9bZcs1k8ko5Nxh89aoCCzPwyVQTZ8PTeTyJMqr4SWxpMq1MkfL8jt5ARErQtbD",
  "key28": "3hdcTw2eXSjJCsWQZAZhyNGUqm5RZAZ72FSczAbYUihUgbrGsvNR8vdDaP9KXwkzV7aMDTvE8yuMNbWPPnTv4Txg",
  "key29": "yr6VDi52z4zU1zAo1KV9CcvUXio33oBARVWNhuRJMKdZgKU8oVJkXQGBuiNvkADkTD87GDgGcwF4GX4zynerYo8",
  "key30": "Gu1q7TiBb8gJ5o1Xh5pM12u2SsPbDfDacQZbDEoMrnDvHHGNZfT9gYmNhcRDML1pGA8x73mPmx2bSWsvSTqySHT",
  "key31": "4voTwETFA5nz8C125atWHHTxt29JQT16XEEUXmXnTpSim9QvMwmnCCFyXvu98hh7Md7TqSSNBemH1Eq5axhYERku",
  "key32": "5tg1MqhRvr9FS78jrvZ4Vzg1tAk9x6jQ4UYp7qLAX4oEBbXTEhJ14T69hP7HqFoecS7GfRwmBZ3VgcULW3ucZZH5",
  "key33": "5xoY4LesH9R1qTyWDomnCk6pAD2qwpZNgdNrRqDnTAAbraGZbzD4y1JxAuys3uqQ5ws6fi4DxC9FFJJdVh4EGsSm"
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
