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
    "4VSt5V9GMiGAYWUdyPEgGTxzft3NDnwfVTGNS2nbeyWPDDhogiBEbYF557ETcitq7vsrHRzvpmCJM8crEBFmd8RW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3wyuUwz1zQuoCof24GPyDeLnJLbuUzEono5aTCk7VmnpUeqy4bKQNofEqx8Nk4j1TeLTDmd3iLyq8dHM2WdQYC8H",
  "key1": "3RZRm9hozX8wDeQ3oaFc54wAoiN59cvRnrQiqnfvZhESPVyjo6YYoT3hGT7xECzYgwUrUEnXvx7Fqnctg7Xn5XvB",
  "key2": "41ZEVFUwXoySRHGT2taL3RNiV1iofeKKERpPSaf1oKbGXBkTsW9y8LiXHztRNU16ywtXMZx3u7gLYE8SvXoJz2Dp",
  "key3": "2tLRoVBhV6Q9SHwiuTZyX5j7cySTQmL8z3SvM786gjfEsiAQZs2HexcTLboWzEzPsGHjN9SsQzm5Km8YUjmLh5e5",
  "key4": "kad7fzpVYe3he4ackjaN4e6ayX6LJstcfRfVuevGkaigSz4cGgAgtr4o79NmP87oJge1VStkHrM4KxMBEdvuug4",
  "key5": "2VM6aXcdZkgnA7sHpW7nZxchJnJDh8tRLnHftpVuff1KaeJtfKoobma9cJAiXx6w6Mw8PDVkc4ceFVqasqJvGmrN",
  "key6": "2mf5LozTGvRaZm4Jvj9ioF6chfmAnv2q2LGh8vSxCWG3WXYJodfQzDgvE7uizmAqMLHrNsLhYpS6FBkPWX9GU119",
  "key7": "4y8wSkkNAm4r8fTRFW5jbYqzQ43h8HWEiKuY99BhYVMYE4EbHQwXRqXSRB8NwLcvy1jjsXfBSkFLfckxZwak6LHn",
  "key8": "2hEhQrabFL97areGApakuZC3qPjhSW5Bax2jRmG9v4T6Se3wPGvBaZveg1Nr24E8qUJc7Jcca6wZbDK9WoCSLsCp",
  "key9": "56JweB9bJ7Cg28EEduyqn7G4qENZuuHpjmMjAaxoCj6R3LGqJfJJYz2TjyNJN8xoCxocM3UyYvJMaTzjLgb1xmp7",
  "key10": "4pVmwSpoF3aqjmetqVpDDwXpBzwiJM91HzNwzvq5RpCcy5zWLWoqDEFh8goqTccV2Le1QjkwFr8hrNQ25EPfjeTM",
  "key11": "v2hGwswBkv8TbTu8tnswGo8ruT7eUrWbZLCCWVpfSLFGtcBP2fCSjU3QKiqEntPndn3jwyQUnNJqsqijSFFVoaV",
  "key12": "21X2cVtzMSpekdUDE2phVPj2ggNgp78TgP6VHjQLTazVuDJYpzWFr4vjTyiyqjFkgDk8N98qYps8rVhJHsTUqWrD",
  "key13": "pdrigaHxZqajcYhFcGcLiXGnDKPdeuhFc6PYAosaLeTBTYUas2kcq7G8Q12YbUZyErKDA4f3qxpGT6UiGSTacrn",
  "key14": "4gHcHvWADs14pqSj9CsgbGBuoig7xhqVSDZ3fPdN1Q81xQdBjRx97UusuDJdj6Nk7HWJq3XYQFSC9sxboBSU466k",
  "key15": "3kYdx4nbyt1FSAANhFp4DNAFSMFR4awViKTNCmDLQ7r5rLMvJkyrmuUCtFtPBZiBL9CNBrjSV7mRhCpTp3qVs7Mm",
  "key16": "3BbpTd5RghY1qhT9j2Cn9hXnCU4dt1bmWUAaz8M74MGqyKsLSzz8UeYRj7K9o4gG9nJUfSiDDQeP2PCvonfEkhLD",
  "key17": "3m834zG7AogwxQFmQnbsAh43ZQqJHLgrDBwSJnCrUTCgFFLWPvCfqufLCCfG4icwETexZv7AZpN3SFx1qoiTEf53",
  "key18": "276GF2uutsBtSDLSPqG8UGZgnzqUAjbCfKCXxMpQTxntWdbpogQAjPijjz2hapYmFzxBopayGJUAgsGrCh1VoWQE",
  "key19": "356pC5NwNBQrKNu19AqPrEvguEiw1eUKB4ZmzCo3XDzwPbqwxvK7QqdVCcpxAaNahZ55PCfhXU2HRtMopxkaidcB",
  "key20": "3GUr5gsFZoT5a4c3djme6Dc2QvkzsfCcN1kg343F48BFaFKb6K56xeFTRPUkZSCvumsfjMtXZ34n78VmNdHXqtDx",
  "key21": "3fFSnud1jFuW6tJS1mUX6dPPgDkhUomTW5h8y6frg9Y17uW4Sm6gbfHm1kMyDJp5PDzkAs8GJWBGDzQTX3oc5fLd",
  "key22": "BWwKWPyNeAeN4hZFNY8caoVuDQK26vcBdMoK8nr5UMux971cMhcmnL83nHXvQ1oNQvmDD8oYzcVWYDjQc1i8Ssj",
  "key23": "2KndBY8yJ9qKNxmAxf3BGxMghmhdjyFeqYkXhR6fVR9bfTVpTKcjDxqwHwGT29hTWyLPYQD26qn5dhLrnmQ1hrvk",
  "key24": "37w7ZHGmdA2iQpe7nZWDUykZEe5QHNzrKfmSi46qkggnuND56mMgPFtE3VYdxsXJ3HUBeTxkq5tP4KLooJmueHP2",
  "key25": "4dCZgJSuQiPfK9oh1tvqxnU3UnHDCLH6Qnf2f2YZxncdQTc7RyDErRasfznKeQk8ePYcPHygxcSJ7u18PxCMzd3Z",
  "key26": "2h53YVxzqkH6fJ9VoEkGZDaJZpMLFzJJMPHcfUVLoMaua5njXCRQrJBuZiv4QPoeet4UXQ1gTQSPEzPEUVKSBGfY",
  "key27": "3tVXA9AD1US1NKm6oPnj3w35P9xqsFxEtLHYHKZ7UVij3cNjPoMrN1DYz6JtvCYnABwVa2tVDAPCrTvQHus1PYzd",
  "key28": "67FXgr7ryt5mvwJpyaQUmMExGL9Z4Xh1sPPYUxMPbVLqxJ1VCXCjpiQaccjTBhQiMAhMmNXFv3XFyNcWWMsNLuBU",
  "key29": "3wrpDzZe89z6zSC4RpNP4H5ogWthtoaxT1qDqF3QMKB71r4cZrhh7YEN33Rq7q4ifKqG7DRfNy6MyAMFWGWCuHRV",
  "key30": "5Wes8ZeonB2umAzHXst8dBPkHfDiK4Hu5FXvzyEKEpjGE2qYPcnnP9gULJEfSr5nY2AFUuxLgqykuBnqXWjuvV9i",
  "key31": "3SwGzhkVjXhj9yFjMuJhU4f7RqGKhDwNPNZ6iEQ8o7j4bq25D89zAx11D7FzH1hfdNCoESgZAkHaG4PgqDLdyTkq",
  "key32": "4F1irH7kTQZ3RXpQt7kneUnS3fN9iLwgJikLTyCeoDe4cMEpHbGH8wesUQ7qjTQEPJxAmXZbHXuHvHogzXtK1hFh",
  "key33": "e5EbSCmW6Lhyq9iZbRdhVoHv6Fj9Tn47iRrHLrwFc8A3DoZtubui3PdQsAXit4MQs8zrKbwybKqAf3rBHCiJPVy",
  "key34": "35bTodoz6Zn1ZnffwJhppiTJKr8z7aZ7WMTTFXXp4ywMvUnHAiEau9HDc2QqjsKW4PPc7DmBFgjeTXjBurJedspZ",
  "key35": "2X3zk5pzYv5VxLw3xWpiiSJwXxm7xugvHd4JYQhBte9jpUdvQUTCMx6nhffLs9tGGstfJiSvwvkmLvxHyMhYw4fW",
  "key36": "2SHpoJmto4tuABd6snytQa7qzSXhoPxxBiV9YfdiCEjYc5G5rbWCHQ6g8aGYoAWD8ekcN6zxiRdKrQSWxDo2ACzc",
  "key37": "5FyMJFqNKwExxZzUxGPGAQENAdoWrG7xm2i8XUEC4jiFGoAQozXubTRnTGtBWizE3jo4S48v9apTREYCEhK4rZeW",
  "key38": "5stH644YQBwGe2rnWr8G6sFQEKYBtpJWGCJqNNrJhZiycxdsMZu4j4rRbDyLCdZxTT17hVDx39XLYqNq8czFXid8"
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
