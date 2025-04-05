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
    "5vuSXa2xjuaRHMhnY27J78hRXmUcC9DtxzWp9cMMKF2GRe8kYkGKQhKD4viBKeSQWgdrcb5qTwGRtxHkPDFMSawV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5T7DZKVajwh5ByU4qzsxa1WjnZRKPyDFZ53WMXWdPx2RcVpJpXTFDevxPtYrxzer8gdA5wLwBKmxV3FJoJsmWHZX",
  "key1": "4LatdDei5BnAGVvZj5nswBSkQtLrRk4R25faGsQvDCExbSZwEAAK1xrky4jD4s8JQjmpVWbuhyN8zWrCyQoudSxe",
  "key2": "65XWoWyyznit2cbgw6XKoMQ2hZFGeKU4JHNWJCYz3VEdo7HWr1z9wmRFf9K4UHMpQzb8FwyaZWHt5fR2niRpgks6",
  "key3": "66cBJnsq2QfHv9jHAuEAr4ZveJkC6eCwUFgPNybN96JiPnYYSczaDEaP8Mrn4iwF2Lwj9ffhb1aJpRf9wA6Hep8u",
  "key4": "53BXSTNM1yBwVimpRgjyqbdgT9WDwhBPcrLbQHjF9piuHMSrDU3jc4sy1af23U9gLA8FBALEPye27pqzWA83Ejwx",
  "key5": "2etUTRUfKcuhP9U3wd922crUtgDoUWL6MP5Chs4dr1J3QSKLyEA94idgq6xbqn21aHHSa6kxNwDw1vbZyXLwv3oi",
  "key6": "3xHaVpadGiwgoYzVgQkLLtFRu5NQNur7T2gogs5ok7cjiiMXwcY8MknenuPm7rBcZfTtWXLEmraNxgmNQ8inzFfm",
  "key7": "KmqFVeppuDTM9bUfwPueJoLLKt518FJV77oGiaJYxYmULzZGMz4fqqqbHEktknaruMj3otVkjwvCTZq9hdYm3yC",
  "key8": "1296L4Bc55dDbDpu94JgFEu7uhba4U6Rg9WATkXASssQxsX8NFCVTmm7Eo6WXkskuSHRMxin16fYHP6h9Q6vU9bx",
  "key9": "pDejTqumAuLQWyJ1jbEfK28NnWBSsYAZXofNMpsFz7D6hJKu3GiJCmtZnognomDJNX4GVnzPiPELxW663Ucnmte",
  "key10": "4Wd26vEytkGMbDcuuBUfmB2QHuavN4vj3XokhfBP5p1Nwu4BuyvVJs7uzhDZwWzTTbHyvPRAMVKjHEb2yPtDyYRJ",
  "key11": "LqMVWgmbNsuaYBH2GprKZtpyFqY7g6j6tTuMd4kXa37JNkbmxHN1JPFcko3pAYgNhtdFZ4rxu3QLQ8e1mJvn2RN",
  "key12": "3GTRqEAqhidTejk8NGm4pmLn3y2x9vNLxpUsVnD5qpqVPD5y69xgUbV7W7cvhLfxE3NKcft2xNH26C2QbRX1y1Dp",
  "key13": "2pnZXbeaKyArmBP44QcRNi16GHp1Sizs4qqXuHMzYQmXmNYh49ei2hxxk2oxuVd7CSccvmWyjkZ6RAaFg1eW8tWQ",
  "key14": "4tMSiZegvAtWPGjYHPtbBu2ZBtaBfstCDhDrnNgKhHNWZbms6u2NySr9am7q9eNmWChAuBK5Y9jUdqLMaXnUCnzF",
  "key15": "jeBC7xaNsPPkMJ56bkMe73wnutNY7GWc4hEpBi4unBLDfvzMdZ8RNDrfniLHEf4ZeCuxRddhJeu23TFmvr6h6qe",
  "key16": "utT14EnfWD7diSpVb6cnJh6Es6dMbsMDceTypa7dZWHnhw9ocVrJKE77Zh8arx6GE3NVaQ3XU26Tas5JzhFiMWg",
  "key17": "3XyCRRREqz2U4KrWyi54nDxFavuij5WJoJAB7Xi2geJPhPSvsPV25Sp8Q8AUxQ7dgByhKPE4HBzwxRs1DGY4ze73",
  "key18": "2rYEbiwhMr6ddknb1ZCmnvhwfybLJT4etPGWXwyo1X1mkvpfwsmCBmPGrAgHQvXdiZjv7nJd8dwGfsQywp9JrKKm",
  "key19": "4VHUN2uqEn8ENBcec7D8ZFugM2wci88xS3Che9cpv4daKJUnteoVYAEqBD9tUBKkdWdotw7cqMmkCjcMvyPhFCeR",
  "key20": "5cddhMNo2W3U9N8XiRxXwPtJVosLJNYdo5pgcCefwELqv5c8VqcLBhZXzSEE91rrbMaCH7vhJ5GCxzzbGRNnacxv",
  "key21": "46d8eCih2oU7Eu94thx1JHRjSnmK6tGyfAcGzDuFEvgsv9FZTQSAptQb8KDD6JNF82ufyADtGyuinGwHNUtHQuqM",
  "key22": "5HFetXn8Ayxr6Hd7RjYftQ4qXzjYQZHcp9AHTrrx3UWFgKKQdWMwxnnioPNcWWuLLNpSCWFjKSRWS1QmdCLKhfVD",
  "key23": "3SodiDHsreZ1DM6Sc3ha68BuZ8hwqkQWmZHj48tf29p1KzPCaG8fsrrDYzGqM1DuD5Uk1gRjk9PvzQmaiZNrmCuW",
  "key24": "D8ziKSZn3mq4v3exEHqmpKLKjT5Y3pZ3FreWPgwokFc56F5c9zBLij542fcNKCHWvdvpDnk7WcLW7d5FitBunHW",
  "key25": "5FrnxjaYn2qNER6gJw9yWoXhgigH4EnkMnsJBhdpMSk21iXj6moQJ9RfnxAr8tTT4s8msfpcRh71PShG6K6inHPS",
  "key26": "515gas7Patkn1pfTyGSxuSomDMiBtJTY7foPEHecphPyRNF6n5zDFHvzeQASYoZMGrrPKvSFhCEfzQijZ28EwDHD",
  "key27": "5z51fgVpkE5TsP6Q8fBSGxBRgrstkgtGWAu9oQJ58x9h9ieXseYD1sf2WXEs43Lbz7yrLNgPNM4ds7gzCSQi4YFt",
  "key28": "53tpnn3nEnSEq4hH1WsJ2xJuxTraD7mEj2DSdiVLj2E2gvFtKmpWkX1EfR7nWNJYmxcmBawaMurbck34fGr2Ykth",
  "key29": "XMTkb5aQztwMuTxzDhmQNdKRSFVoQDoehP1Gt1ALm6Gfad4eYudyF66usMBdFZxZK7bzm9YrTwjVAMQkj2py5WD",
  "key30": "4iwZeTf5ZiPn7TcMx4vYorFiTYrFg873dekdik9MFgJUCqfgTdLgpJngS3fM65NbtjTLGspy7YXpfykB3uT1YPqH",
  "key31": "GYMMgZxpXnH4WUBmnELZQSHRibDTjMCR6AosrDvtszi43kGYJyTxpW9x69AdBGwR8n35iyqYRtGh79X346fVRiA",
  "key32": "3gh1WwxnacxgNUWXciehVUH64n8BPKUt2eRxY3Jw7vQAviqbL8TPnd9TTr18kmmtfe64wnkKAx7ie33p8hijNNsk",
  "key33": "3XqxVyT2EFRd9Z7TGfqWSfmCS9jWJT51Sfugrba1b7iRmzwmqTELc29mrjQEi4Q6Q5vxtGYJ3oxvwsX6N12hZAeW",
  "key34": "2NDR889Z8Po5SJzvXqpcCPrWsYSD7RbvKMyDLeAEro5zph5gfiiCvijCzgNhgTmQvCvpXsu5485am5Y5tqrkq1oZ",
  "key35": "3cAh356h79mF8wHq1D9dF7WyQSNCzkikYmRE92ad3ie2MoDCX93CoW7hte4nc98BZoUvKSu4fyJ1wQTz935qtifC",
  "key36": "4utHnMjucAXdMHgyCRZ2gHayPJgNZtrhKLb9bGVZszFz1t6k3VZz73S2VTKPkNNDzSRwTdaxU1ooEtTe2hQmC8XL",
  "key37": "3onxbLudMNhnVwJ54w3vm34fxjobHw1dkodTbhmvQUq8WhEqUnmVcSapp1SjyW1nakvT8jSbesLdqaSUvdvyJVwz",
  "key38": "5bMWomBk5FtRoumBW35S7Yu5pfMvdvPgfj78aVQa89co61znLyExQ2dCLm8FdUzMUo5yphKGdjSci5HnC867T6w8"
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
