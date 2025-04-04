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
    "3eLMwijeh2YNcTsm7QrqDLgkxoToTwJYUayEP6xWpHvrXv1gYgRARSr1GEDiQSGXXzs8jnWabPZt5r59RRv4ub1q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rHRPDupmQuwL7NGdXHgYtcyNyiaQVSuQKEYAcGVckkVxL6VFhGKQiXhEdpHqcmXBPHZo8UchnrbuzhL3ekqdy9B",
  "key1": "cswht6RJQCs2rps4ZyrQ2jkJ38v7DNYQZzR1zFEbeKpk6rSsHxkRnaRPrGxTEwg7k1Lte8J65xaBWEiPZiGtPX7",
  "key2": "2YP3d5QSf8cZqfdRirdn615SwaSjExvsM6q6CJ2YYF6236MgUsuAHtc3CFCBDxf2UMCWgRrEoBWiLw1XSxKZNwUv",
  "key3": "5vHGkyWZsAiuXVobCVRhTeER29cdGbQ3ptHY5BMBQP3BxxT2FAGRY7nKXjGt3gNWZaVHb2M1gwsrKpQK24jpiNhV",
  "key4": "2TerH42ByCMMZZT7MjyR2Ah4Tp6PJfsCKy2UJcBDVcgFuD4mM41Xz9hJE5ngyEDigw7p87ucxQTkGBR3G23LboSb",
  "key5": "3ugypRBXMKe8Uz3KWAQ9FcyGTdvLpCRgC4EPMwDsPQYJh3qan826DPwtgD8HjaumS8B1qkDonNosetTjMV3bUHar",
  "key6": "3EWvivqyie3XFzur8wJ5f2hxiwJjqHepw5PprDPQnXTHwmGvG7WpQqcENh9q4nUPwchZkGF3sWUfSoURRcdz9sqM",
  "key7": "BsvYmQcDoyFUb3jnys6XvkoEtK2jHCVa63FYTGaUoHEN1Hwifgk2YJGf2fWLD9sQUXdPkwueHvSy1JPHuFh3M6c",
  "key8": "41TDYsUAdQmafKmA25ndPE7kedrfK61STz5vAtrDyWxBeH1jYYbt4XeusViNmHJVRsp12zCnRfyMNqEiKbDQ3vEw",
  "key9": "4EsGJsAafAXG3d5B7GzNiEtGdNHjgkcSqXQDjVvGDKyJw53LEXK2HxTpyLdX1G3jfRsbkcSwTnnvPxWB9rjUVyvT",
  "key10": "2P8hAJwXuifF8mNisELT2PrR8Wiwg9VSE1EdrXH8438k79c7wa1napc8QhXShDqtm2g4qkQ2JvyjXg9c6xmj7HuN",
  "key11": "5Z1MNLWcrwA2bYeSikv8B3ykqLYH8GtWXbdGWLx17BdfsXNEB1MbU5HAu9v9yrvnFaYSMt6EuQrHX2cZ9WVtRKvC",
  "key12": "4D7uZf63KHqUd6jtsj3QXMRwZqeQo981TGjUnPtDmQsXsZ8uPwGPduRuiwtEggFKUYthGF5P4aJUY9bwNQP1EPBm",
  "key13": "4TDzcpmtsTetKsrJa4YKrD1X8UEggMuUVtPwSYxrr2C71ajN6wjW14S5VyryPaoMAM79Cawx3561dxFF4NMSM659",
  "key14": "48tF66HwhzP8RFbZircmU3MLfx1SbTJ2vXfB15QnVkeqGKJdF8aaqUzTu6GYoZWRtLjkcHt6mpfyrj3Dc8BnrsFe",
  "key15": "3k2N86UaWQQtQZ1Yqdxx953ku5EScTuiLWnT9mbjSBanSqbd78uPptiQHcuH6WGQpBRF89VA1661s3HmZ4FxKDF2",
  "key16": "5AMPsfqJp83UcNhb3x99LUsjsgCvL8dE8Lh9g17thDsZQRSeepYwkXhgMPjTdNkq4WfbayJpGaCyFKit89uiy4Li",
  "key17": "4hppqYBGcbd3rYv78mavqQztxhJkxfDNBeEz2mKWF53bkzDGUByUppeCDde1mvkyi1HW4P1WJMW14E57tUsG3dFc",
  "key18": "5EwgrGXzVbtwpGW1hvThAkysLj51bdAghuhEEzJmPus1qhqbCZkD8SCrwQudHJdHR9Q6wTuxxmbW7J2jD35UGVHT",
  "key19": "46rZXfsH4B5PVpNURsPspPenjYEdLqWTyuqs8wVX5L4mppiQrH7rhbrCn6RkHaRmXredZbrard8EshrQjyBGqfdu",
  "key20": "5nPRcbgPD2gK2omBVXj2A4KW73KWCRPy6QUqio58CXTPF8bQGuLyDDQDLVs9YHy5kWtTCGz76L8Vwz8sUE5NR221",
  "key21": "2EfEHXNt5ARebu5SMm2obvBs41vCoekgc6FZXQHGfSVsXj4uasczq81Ph45DUuFpGbMtBRgrFTjAL1F1f5dXXGy3",
  "key22": "5voK5FwjSWMHph2twpegRgq9Ge61GnUMs6pkA5FXFxDYx7kYfUWkSRk26EpdCVqfcjXvz6fiGbtaxQVQSCsc5Uj5",
  "key23": "67argxrfSXHQ5Gy8uR1QF6Uf8jiDfiSeu8hhZnLiohuh8TmqnPgDJUVZsFXFxUQkApuGxDShmRtX3YkVyCZXhYv2",
  "key24": "4imh6UTkpys6p6kARMbhBsgMhcBfoF6CstsmBALdYNStR4RkbcGPuTXmzYbBdAxt4nDMSmutffewtyAccEzngH61",
  "key25": "KSNJXGjMjjUmmvXN81R7mPNQPndPv7J2LtFFeXkg2GdDJ4isdxUnmzYEb7omPWD5oKSkpXVUdcsvruTVVwoeKNT",
  "key26": "4YC5wUeF77i9eW25m2KCTWQTBbRBodw6HndQ7ZitaoQ5LVxooKAYYzr3MjUYrfonjG1yoAvJeGwy8XTttvBnt7Bj",
  "key27": "2FQYqQtDeUTWmUUnEHXTzXXHrPN5KEEcn9AAxN8BeaH3duTiYKE3vzHyWRU8SU2GLgQsmT31PRxVYTH7vzLVb5Pv",
  "key28": "2HciFogq4HLe2ggwoZHTSLfee2Q9Zuh3qyGFKGYQskpQcFSymBgtcUmZUvAQNgyqGFxNxBfGowJ1vFsgZDJjf5mn",
  "key29": "5zsVVTuCPSKp47f1cR7NrVNNis8Pa1Qwwe7owDw6DPcQnYvQ3CVZe1vTqkeqPq21DWsbmNcm7T7Z2PLLqAWv3Air",
  "key30": "3xQNAZ6BdBkz2sD4SyziDhPfRS3h6cBRkkaXWBuJLdUtfrDpGRPp6PyKZ5ACx7RZPgsYMmDsp3B7LgmYT2GaxbkP",
  "key31": "3uLSa9gwroKBqB43xymj8wCK2czzXDPpvhcq1Ye28T6VyrG4daZyt1f8MxC7pHXDaYKN7KGV7NjnhenbUtCfUZ6",
  "key32": "t6bZ78AHpUZLJPw8mgWqyBcPpK8fZLdPkKauEj87qFicTW1WxaQYQF25HA6pXAdNukHXQuH4PJEyj6ziffjjbx2",
  "key33": "4VaEcLpbaSLHoVhSFF8aCarDC7zK8pEf2cDkeHVDaNYSWXoH7n1Q3HSkzgAZ4kE6687Gp9i34p2uqmWHMLqb3eAM",
  "key34": "2FTEUHiNpLu2RsTLVVohHa7v3j9kdshfYRCFr6kmATBiRWjFLF8kUqAUc2AeHfhys4RMnSFkXM9AUL7UpH75rbf4",
  "key35": "5XWpG5MjFUQw8pST4AYZLVF1Hrt72aKQ8ytuF8ExtowuixJbeAwFAeKg6MLYTeorUT1qMDjeJeJ2Fhr3gEJptNDD",
  "key36": "3wNAJ9wR76sUt4mpjvvR49YHHDdUgvJhkubr9iMntECtG1XBopaikon2orJm6SWXKRjVaGbpaNuvaUVJhhL6bT2o",
  "key37": "SNrCmi8QvTWki6LFZprbz9a75XiDE3V8v2rbPWotzoKz1ZfyAFaUNczKbB78rhoSvN2cQcSxxwYzSQ7jrPAnhk3",
  "key38": "3yaEsQuknN6ehZB1eJXCjG6DuPkadTpx9fzKUry5qbyEc3dhQha3aUqXhXXovnz7L3o4uS438HnFti3VMAuNzaFn",
  "key39": "4GHNQ8DJkmzeBLwmKj9P7nGjop3qDubM7anx7x6jRCLK7Mizg5DW6WJSx4ktR6rSCXmd5Qw9ohNS8diexZVdcNvj",
  "key40": "5Z14nvuWP6c7cBKKANwf8VrqXCdWfdN1Y7DL9nGwZ9We73z8DtfwmS4bjotcpLHnji2rkH3cxsraRxyh9Gk2PDk9",
  "key41": "4h9PmYVzJCK2F8f2PNuV5oyvwScpzQuJJ4Hi94gK7ekTj1SnEDfnbhB9bBsMWkk6Q3BftcXZuyQ9BDBhNM4DhWFt",
  "key42": "3vW8TLp3s6xBaK6DyJevixhwBgEuaKCwVSzGnbRBbMEMSdmazu2AekEJZXQbCeNdNjMB7bwg5REbGUUCe6tNFMBh",
  "key43": "2XSKwJEEk6anS85kL6ypDjTVfZuX1mKZV8oJPwHGktBnN6ARsyFZayrrjg7cpxFkBpYJRDDW4hTACYoodPi2H7VZ",
  "key44": "HF41tWRdVsb7LtN5Ui4i2ayGhcfujkppPY5Qcdxr42SJwgxFbCcP9LpdMHU2h8YreSckK3TSibFuNCjhxAujWvp",
  "key45": "2rE1rQAqPrzxo1PvYvESkxHt7CJeYZEQdSjHbAbbk7Vbti1r3Q39fcgmrNphTedXPXkbXQnr2X2C3UwGGrNMcFXy",
  "key46": "4ygVMPinUe6miquj8jsdEuw1fkXZnFYZJsh2VVDZEtyqyhJPjxzNeyjBGz319bNK37RX25bEnNsCgSf1th6ZwoNu"
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
