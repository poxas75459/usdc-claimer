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
    "4ECj6iPpdbsvUx6DkZ4DaJ7m51BY54vPTDUsK5tDnaHotoYD9EuXYJLpUWiKgF3TWy3TrbZyX2h4Q6hrT8VEXYZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ca9s9zzeZ6iRUxsekvofBQ8nYnBBucLwC74MjBWjGJothv4KQhCArPsE99yAVTw62z8QA7YbEgnubY2hpdcQof1",
  "key1": "2h1Ph1CR3yJui1AQw8zL6FrJzUJQzQEvZyTBfz4JwKibSgQKjFRksm1cc6qQsWL2m5iJXRZxYcTdNvStXuYCjKu1",
  "key2": "T1QNRjkSFdsSTpr6MTWuSkaeNVwjikUJ2UXYcbBKzwWuvNUiNZchnSwmeH1Ho3DEdSXYPvvWngS5sRvCFZxbXDs",
  "key3": "3sySd414TYsyEoTWKaa1QNNoTaBzBepHEK91ndMuzJKp6u3tW3dnWexisw65AZYaKQx1tC8dBHEJa2sXBQdJ2dEL",
  "key4": "AJczWpCAc1Qfjn2QF58VFuonRtwh8NhLA7J9ETU2NBrGaRK9T8UgLsjV2BFBXpkrY7tbmAzkDfrrX7SgQMGghYr",
  "key5": "2xTBX4HeNgjZMC4GbyLAWyXSvpwvn1TjEi8vPqLZ32zKCdZnX62bKCQJST47nRccen6RU78nngx6Bgs7Xrxca7jq",
  "key6": "5wHQk6rBcMuV3maxcWcRKXh3Z5bQuHuthaL5PAqzeZ4wQSkBP9ipek6c4MjoHmydvsw3gVN3XemhNV2xKw1N4gyf",
  "key7": "3z5PTSLchy16bgYKPQgQv24YQtpC3z2DdHs4SU1uzoGk9Jp4YCpjoKtkzQRZncZTTYZUVzdQ2ejNEXwVcfp7TNXr",
  "key8": "3c1wiCnodQyaGjTc9vTLdwryVN9d1rcoQwWhRrdJEkKBaAQLTFgY6gSoJS7uoTRfgK6kXvpDjMJrjHAatqDEyUaj",
  "key9": "4y3ZjnhHLmATsYR9XwSjdZrYjSDmpZ8KrKoteiDWpQ7tPY5p8d7g2kjgYJ3Rs9RBe7RKSUWuBETRSDhniX63FGdF",
  "key10": "5U4vN67Vrj6XXxgGuLSfWCKuQxGUEZV9QQWYBD2uzoXdKGTkipZ495F15jJLdJs5uf1P3hZsAubnup3oG7sHE4yr",
  "key11": "5Dqpx6RX9ntouR6zUL7QiUwvEeq6ypRZbV5wTTWwiS6CX5SU65pi6uKMdq3Ldf8JnSGi6SrcK7e3915bEUx2A78P",
  "key12": "3s8tvZSKuTNJmz5NFjVYVpfzpQ2e2DBWrzrbv7JTRjLDmFPPgpXtZCfXD4JT2m9v7brvdRpqTJ7gL7HJ99zCaW7A",
  "key13": "4818tXcog77DdtBefsfFqFH4jvCEjQtQii11ycRVAyEjSGaXw6j81qexjxCetkYHUovpCsdNYgtn5bxeon6FXDB9",
  "key14": "2TprwbMTMmXpFHYFK8oGejZwD716LhCJ3QQwQv4Qp3JN9pDwMZ4Mqy3VjP21958kg7Ck1rpp7r2q5yVPnMcTVSJB",
  "key15": "5F7kSjLR3np7rLQo1wFnxb6rp6p6jxDm4NG2tDbMTRxNdJP1zxmBUoF9FMgxqP5HfHHC4dVyHQRzzFcSXEnDDKNy",
  "key16": "2mbShmjSkMUUKoXNQXvkB7GDpwPZXpRL3fAcX4uVUuXVkJW8cvfKSzw3XULnECgkvZRQspmJQ7SZVZvv7LLAyMgJ",
  "key17": "oD2gDEHUKy4uiwEXLA9u5VJcS6dDg8uxvHKv2KNEG9MU76aBbajuKYLeoBbx7TzcAKr24xLw4j4UixdFAxdD2mb",
  "key18": "4dufvtCZBMNzC2X78aAX9wCVg8dwq8B9ePnFfzikUzoEV7VxaPxBz2N1vWyvF8PzsgbN9aNAivT653durgtAgRuz",
  "key19": "3QaVH9UR2WmuuBz78RWNzHBG7AyDu2Fh9XtpsLEAGFF5LpbCznoCshqgUVpK2NddvpQUQxgfDkBNXHq7JgYjzF45",
  "key20": "5sDPtFQo12FhzB68qYEBXPKZxSHKg8CDEgkjaGaFAXozUK9kp7jpuUNXkCuz5i5sRFsTSgfY1NWKkmhQtcyc1cZg",
  "key21": "3xqf5WiTGgxpFDVES2n3d83oax8N1kRuyDySZDCkkhsMN8SNmAjeL5Mv7DujTu4W9J9PwchRowvaddpVuh42njNH",
  "key22": "5Qy7x1XTgbFRA3TE7bz7BXGABJePfuuy62A6Viz8hE2yUdL2GRhaa6oFM4Enaga7zGmVK8rSHEY9by9aNz2DJVdd",
  "key23": "3tzTR5fxgg3WDpuH4GZ1LqVeWCW3C49aFU4j75ZyNMRfM6EhP4typAY9dAqWBzaSSHojZ2Q3quRiadmaNNRiyoJ4",
  "key24": "4AChLjvoYu9SnrUuBWX4FPxRbQ6XK3RGGHNvLyqKsBB1Rh9sfLHGwrCfrxXh63jEAmjZ3JseEzCPRcc5Nxxj4ubV",
  "key25": "38PbNKyC7iZHxx8a52eVyCSQhnpP5w82Ehik61WNwXeiXzR392EnwmvQMaMvyhm5gquwCMX398Su1UHHVpUxp5CN",
  "key26": "5fLasemjMMiUoa7LNoCypc8qhG4QpufawJT2gF84XX6m4avXYLyzC1Wm1CydvUvW7ifcgjfdt5TYpn4LDJvKZATX",
  "key27": "2z1RorXZn1rkc8rz54ZGVTg37y79HfJ2ezyjPMvFLjKfybcNaRegvuxfV9cGGnMWtmFV9JGbtHeHekwHKfrnyRaC",
  "key28": "4ThsYkoBkjiY9xwH1YJuKbiSy1m3enwQqS6SwyTjNzXqbdvhx36Z9DXSfgpB6vxVrvSVYJA2GPC69n6ug2gRBjUc",
  "key29": "2R5cN15ASrpJiR1qvGMRKgCGucJnm9uP7Gj3Q7xnk3BNLPDUxAn84kD6UnAbLemGeqztX29GV4nPFkV1frmQzAmn",
  "key30": "5cnUcSnYvmfUMZB5A93RxUX5de7HP1rskbF2duD1FhSKdMjdPrU9a8rtdbaEvA9XHGWZ3vQu3q7kdLmxCZCesd9H",
  "key31": "2oXTf3rbJkqorWPNiEVVSJpisi9bbRUiFm2QJfzNy7CdxWFPqBdno9YAhmFXMt4ozRuRaqCz3dcWLo5H573tdasV",
  "key32": "4axCPpGYQV7bfTxes5PvwnxmYS4kXKuwukXTombQz3oGk2vVjotPkLt8Ss75cTKvJTU8kEuGcTu34w4SScqnPvLJ",
  "key33": "2scWTpSHfkXkUPdfmTyfT8HkJ45dvW35m5SzLcF1Um3M2kcpvivp39asGmdPjnERGjXybU5RHwSEwf5yucZBJgP",
  "key34": "iCaNXGV7WC6vs2eug1145qMXUmEH4S7kg5Q9h5U7A1GvK5j34YfVBcpkyrD63nHAQWMHaB2ztCrr2yx6R4WtnGL",
  "key35": "5sBwAaBpd3vrdeytYb6gowiG64C51hFSKDo6uPPZNWvBjR49KRwtUkQPYhsZd6W3dQgpra22VWmy73pk4aTcX79Z",
  "key36": "5YgGCz5JJj2maQVYQXVWjHbuMLnrR3bRALfsvmBsnGXqpMzm4WQVWdtSehyRF47oPN6naxncJ2A4WgBrnoR3xrh1",
  "key37": "3DoVzuU6y3z55x94kLiUPPwXHHCxZJimicnnMf3RGNqkEPcDAaQxDY995M5dqkVxq2V7KNZuT5ByaeGrg5W7AtfK",
  "key38": "9T299aCX4FyJ6cH7FoQYUKYBXG5DhQDiZLU862FWV6RSuiFCJjckBAq4S6htD2Csshv5VW8quPvXUpGakcfsFer"
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
