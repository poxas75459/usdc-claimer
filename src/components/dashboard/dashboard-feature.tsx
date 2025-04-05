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
    "5WBAbXwqJHp2sZ7ZgozbD3cCsFgR4YBTJAbdUJBvZEV5inqLr7kK63FsozPyj4XqfUNWX1TtVYjVRFs9fCCqP1WA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2etwmiWuzgqy1qqg6gpMJ8en1GnFtCywehjS6dC5y91dTA4KXV3UFK1UQpMSduyssZLZaFZVPqYycTupaRpTtEka",
  "key1": "5J7yB3ixxDArLsAxSPd2QLHPe5PTAzypX6f9iQTRaZW6MQQekXBDm6NmeUwGZR5pb1STDauN6QPvodb22a2X53Pw",
  "key2": "5egxuLerg9YsKY7euHa4k2y7FpqQSWy1ycWkx8gTVmV5QfV8prLtg8USf87h4jHnf9c8WDbGs5aqKhq4a5sfxTZE",
  "key3": "3XxgrqYFNa5QahEwZnCFYZAo8YP6HhAJUdpEPstujDCZh15HexZHrtjYnZHirMF8bELPy75jFnBW8Xj9Kg4NFro3",
  "key4": "dzRHrHLmGVScE4KXEBc9uqL6VvX5wAfGmDoTir7Yw1zLKBNztuBD17jiSrvyJjKcRcaoVPJzCjY8VHuGjzxf3zX",
  "key5": "4ULLk2mPJZUP7HtHJCC9dfqwkDWKjEyuoaHnFRuDS2YNbsZTtjYtY35ziamYdhQnYr1KoLs1fuuDc3SjbswfBQDX",
  "key6": "2usgYHy1PnXvN6y7G2LrNfpaeDoG42y2CoWVFsFGPFokiqS2Zr1QKu83TEnQscKzkySxJ4NcLEgJFpoQLCHoLGBs",
  "key7": "s8pRuwLmSNyqzRpYE71g2NUQdmNT8HuW1saPpbiy9xXWLeaP6UG9TCDroTh9vzsaXXd5ioNYH4KQnEPG4iGkxyH",
  "key8": "69uHDdPHy6cGKLcP3xZaAEsrc81MhE9QSpiBYMfMDX1DdL5gjUdtBrX7GEtPspXgk6r5DdwSddxucdKVrggXZZo",
  "key9": "4iHDbTjjiBRPt473kK89PPipEjj88v3DYTmLp4mKjfkjdVGWsJcwWh3JhBfrTKzM8xGorsJa3m48rHiTjsM6fJ4g",
  "key10": "3Mp9MoRYfMtvpnXgpVDYhBbCNyhg8B4qENexaRWpFwfRgB5oAi6xPed2QKM2PK7gcr6FxYuazbMwn8A7JPJmqkmN",
  "key11": "NcMCSba72G75sEJuUBBKGCkZXzSJ89XQmhXhTvDc3cr23qcjNyjpz6axQWjTrDaFZcvL9boyXE58Xc46QnyW6i9",
  "key12": "5sdaLdn3gWfwZHnCrBH4kR6RKm9NWGko7kd4xoksZvYv8WtLrKtFCiabN3sE4oxXnHLgkzDrjKV9qFmMbvNLRBmU",
  "key13": "4tgGwfNXHY4VdHgpLco2Lg6p2SvLZph8vynN77r1HRaMtpKRn6kE6iUhgS5a5CRtDzCTMLw2DiSfZTJ1MSBzFc1B",
  "key14": "3oHGruP9R24bjEoTcUD66eB6q7Sx8DAR2pasGi6pnwopyAEwQiL1tGotQZfLoAXL5Ts4od2YaXymYnEhSS7Nu7oq",
  "key15": "656mvAwSptpE1SsGNzAGKHEC1YyaSHNGXHBVo6wMk5EAw9YftSDgKNhXCStQVptUra4nKEQJJDv35mYgE7x8zUsU",
  "key16": "4ejkrGqXvWCgywieCu1MgNWNjcbp5P35eKYNQXoYwuciskhT53ihavprHyNZGhLKKev85U5aE2KtmhCmPyN32N5o",
  "key17": "5aCYfwakJrNUPv1UyQy2ryDq1MvRsDomu8iiD4wu74DrnfFLJea1WwmvUvA2DT6iBZf8UUzrfK2Pbj5TbYcxPBfR",
  "key18": "3fjDC5mqUesYsQmtnnD5XYiWaunqd7tCQ5Zzgv4bwhWga5azbkuJoCNQuAgGW1B55iJ28WU8kyAHYqpmF32rnjBS",
  "key19": "3kYkTJ22VLtQwMppWCk1Sw9ZURwvD2eibxQzpK5wHyAZFiC6SKPLXCxF54fg996xZrSRFHkteNofrcmqXB34heW5",
  "key20": "2NpBvnJbwdY7UNhbLEzvSnrNQJtSbecYyKMRr37QitaXf9wkvWNj7ZaL9grAXDWgpCTKjGkQ4vQy9V1n9t7Z93mU",
  "key21": "3KGq5WTxQ2xD8targRxEwFWzwRrfVqxnN2NBtAXnhh88TpDg4c4aYtSwMwY8ArauSmgisX4PYB4h9A3HwdFghvw5",
  "key22": "4EULiTjDFKvgsWVrqzYDKe7x3Nvza4vE9PfAd7pqhMPvcHsH6cfs58qMCSJVCk6i5wwdna5uLocfVUTGnBngDsNp",
  "key23": "3V569JSRW8VXwipH5PWv9JvM9ut6GeNC3SVVcag6bwxxf1e8X38HeeQXCCeNVpbFB5wp38yk7hZbBQFBnBWC2nns",
  "key24": "5K1NV2ax3PzUnKuypqHvBt7MocQy1GX61SSpoW6nznHatgDXcPvdk3KoXhB3wMNoRTHstjUNZLbCTRFSJ9ZwjQCL",
  "key25": "5wYHcAnad9U7YQdeSvKVbF7VbJSeEcbR9Hxqui3K56GZ4b2XJDF9vgkdCX2oVQebdf7Wihe9ycs4wHLAYLwDuBLU",
  "key26": "34nMGtjy8G7SBH1x6Fuf9gA76HhKAKiiTwHtkoxt4gdMkUKBUAwGPBdLkifLLBaCioBkVkJeprxszmGE3WNFtPQE",
  "key27": "36ukXq6e2kvyJ65JdgFtEUe17SJvrLG8pFuJvsefoQSMYDAu6Jpzrvmq6qGN3vi82gLTMttRhu9n8uMEVRezPKCy",
  "key28": "TGBYTRqiFCrxGMsxJse3wEURF3rD4Fa2TPKjrTUPe6G5NW9npeKhFXv9zvNJfnfD5ojPRfR2cvrjkRY3uqtL519",
  "key29": "3EP6rKwcBLThbitmvvCn2vC3yAkJZ3nsgVndsGUKKLD3hFhtAkfdFrH9aNvwx7P5yHSWtChiCtSAdkLZCymA3J4",
  "key30": "2BmhikypwMvkytMH97mvFgMe5NudijY3cykgamKnhxFxGc1WrV5bX5amuhmnYr74EKY8NnX6zANyCxSxxsQMKCRR"
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
