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
    "2yohVNAQfRnjbb5o6pQikR2RGCtobKpxM4er77fTA9NB4U2m5yyegFLG14DNhkBQ4MbNf6jWLTsGUUZteUrUVUoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24VrnQkzZB28wsMhGrZgfrRqiCuU6T41ZRUeSmsuzhg6ArBgK6Ezu6F2imD2F5tMez8K26SJ5z9p7UhSaDQnWeJv",
  "key1": "5r1vuksd4KH2UdXwcs8ZL441rXMy2CNXLA4Bu7Ahp2piUVxzAR8V9f2rDk6vY3ZbrFf84BstuXafFt9DVKMLgTX3",
  "key2": "BgcoQaZB4Bed4QzRejrJTb5wuoKzSHiNBgdHt6N8HSkiaRpy12Et3QLpeKKZe1YpB7hA38W9d8CsQvmfiUVGCdD",
  "key3": "3RHVoZG8ggyVrQd2nQktJzCvypxGGZJQteMFGTysrotqaxJiAE6zjpfQZASKcXZ3fsCGQo1fkUrqUPV12pj2ruMz",
  "key4": "4tecox9NSTi9kSCHPgXD8Rbx9ZP5EkBd4haz11qUoqdBbWtBssvAcHpWsAef8MZJZ194VCfiA6qiQdK5dWqxXvKh",
  "key5": "oGQGodEaMFkncjTPy7WPPVF6AwHRCdVzj8bxtkZGfpgk5MgnYDJNDpgBvG8mw2tiKL65Ly6MiCQuJ45SkyDzXd3",
  "key6": "3rymHoyB1RyjoCVr1QhtSAP8kzq867K4ti6RMmGzhmfiyfpXvjZNPH4ZMyswcFxXq1FWkX8ZAFfEAfKzdMMrT3M9",
  "key7": "2kH5FKFf6iM3kXJ21Z1S87Xhd94ui6fhrvsNTibgi2YRo5pH12VudVDLGHJruXLUc3sRAkE8K83GH8XBsbq14qHL",
  "key8": "2G3aSbZfA2Voh9PDEPyBFTRdbHwQ95BedkbqaUtvzijNopkqX5zhBN3hH8z668nJbDoC8N1Rk3U4GbpPEz7JfS9T",
  "key9": "2W4aSLXzp5GDnbNwZeopva2jidCvRdj5Gx2S3Enn9W3BaBzqDoaHk4mpJYDq9HVdQ92z8WNfBowFr5mxYwYuwaA7",
  "key10": "Qii87L5FV769i1tDkZoxe3fYZxQLum1ihE55LKeRKV5JxhLLUPAnjzKSbAXu4Ug5sQpmek24r7vMg2Fnas653QC",
  "key11": "5zNjJo771HZV4NkMVHSvf4C7aAEmJf4sam4WctmSA8nasTCDTj4NoPwM5agAdMYtzsYNFv7Hd994MmjrQkjURViA",
  "key12": "2VASrZbBMSZmN6oFpwWn669g62Xw3bWA3nPMSVihF6n7R3uah4orwLTP1uWSeyjU7fC7PzLEeBx1p9nec3dFwVNv",
  "key13": "5VVAuz6U1gVUtcFXdhtKzy3CiG8HGMD42AQu8BmvbK3nXE1aHKCiCZpW4i5LYTdMGg7rkNesGkdJot4JNf3geoHc",
  "key14": "3Kv1RmezcWhBAFSeGAJjEy2vqrNrgYV5J3ByuELyrL1cDSJYe9azqh7PhFwUi2Xwxeqe2nWt3dAn3Y2unjh1465G",
  "key15": "4PBJgZCVs5gGDBbf7xihy7SzYKDwPKhdUksN9ovsQm3CR4zpJHsYXyYQkat4qMo1KNJBf71ZVmEuWz4Fc142G3W9",
  "key16": "3wJVVfCdhBMCpUKAKLcLcTxjo2P7bWYCCbNy9VzAofAfMc62NVjum5e3UDpc8gJySvSSu5LLEYkarCWmDATdLWUu",
  "key17": "StaXhLQSKzBaJSyxTBKfNhauq3xJxH7RFnPg8t16tWSCArA8ZPTgdHdqoNLtfnnnbon8YjKqUUgizxThtkav6WL",
  "key18": "5djQeYxDymrnA7RhqV3DL488jaFXW3wPXoTRLeE3d3C5wCAAPQRTNMnyNLpinmBAdFNoTrn5XSmxWyFoXGcWw17e",
  "key19": "2Nfhc4faKjuuixe1SVAfCT2zKQyxefGh8TLMGNBQt7x37Cgfsv5Po2GMLiSKHrNqN8gmmfS8cjmAxtbdKEho5cxa",
  "key20": "4rX37N3LnQZNhDyag4m1p1afPLWCQ7pXGE33fPTzQN6zT95GJ1MwYKYdujyjqqWgusugNADN1driBSrcjb9rZBDf",
  "key21": "3cWDR8broHC8F3KGRmRfXfyq18FfrCLcpz4hKxw6rVX9jdzcK9efW66SmDtHbBK2EdvY5fMMU6Tm6J1ZC17bjopY",
  "key22": "2QTtdcMWNApwgHf3GHCjkzQ1WwpJ1gP2ZfSzm2u6yiCr24vnajaa53ULmQ1DQAy8QyqJVbPmWu4TuBzv6uHSqFnY",
  "key23": "2H3WCmw3Hx4SQLSYFSaMkSjYkcjFqXTaBftJipr9J5NpjYiXggAcEB9mv5AF5yEKQA4uDp5Mvi7WGxYNsRbwqLLs",
  "key24": "33zzK1NtL5ERGivKFAWh9VCFbE1e1YRc52aYmNqQGBb4fsPRb29CaK5MjoNTGcGphKFMQ9cXSLheoStm3duJbUoT",
  "key25": "3wrcUZNE5w5UNnGJzNAthjvgG8Teub5hxEdwrPE847kkVpFnVVcXuP5JVxGsETk5XE4Eevjr6WJXXzcyX1tF4pDB",
  "key26": "DF9MbMg5dcv3jCboBATugW1CAY97UA7r75xXZJzYitEbX9ycRADCwFVKxvSGyqJu2QNpnMbnMovWVxyrQyrsoGe",
  "key27": "4SFYEWDbfhggoYSMGUEJUpbKaLEPo2K9V5Jpom286jAy66wrFT5LcLpvCM5SzA8KFk9kexNsADjC3NVwvFGQ76Rv",
  "key28": "3MAyamxeUZuMRhGJ5xV7UrepYnjLhVzADS9wNAqq5ZyRQcy6V5dsxNEWkHP6a7dwiWfuAWWyXfHeRnYyySa8nXC7",
  "key29": "2TAzJ4o9TpTnkt7nR5VcyJgVUpJjW4tbExr9138h3h1sr56uKgWiwZm5RRJPD3SPb7mnUg5LJWJh4AXQNf6cTqUf",
  "key30": "5bMasT2nZfsCbsVRLtZS8uDejYA8ipkqH53GGkyzf31vtqB13YRKxWCfndqA7ubXmoakpLaZZ3iYFQvBbVLgzc8v",
  "key31": "3CzaGpTzkTz9uji1g6wzgxW9BtmbhrugsajmrfPoUUjsV5o8SdG7mub3TQrRE1MjDkD96JLqVgf3BE8bn8Zaqqu2",
  "key32": "2x6s6iuuXnG3s3HnxsW931GcGCiA1CTepr3vjtWQowdTVqckapFMq2zjqJMW9yoodhei2gMxBtReh4sAByqtYhnZ",
  "key33": "2K22dFaaqaXG4evDXbvofZt8siC4DwKLEJ58LDTJHAm3d9yGTXhneCA2DzeRKV1NMBKNvsM7zpzmvmo8jfbCkK3",
  "key34": "4CJF3Qu4xpms5VqasUvuHDActwgirKCQJV3RZysrszZFfRbxba2Puefcm5UEq9NYEBtLQ77C3rJNLJeXRtp1HmnH",
  "key35": "rdY5tGq4WoNvPRgmXSYeWNYoqdj1kwfx62gMYWqXH412oaW3R7hn4oYJGr7TXC8NA1SE7htCAHgwNJQPtNDaaqq",
  "key36": "R15hv9TmwaVbgBNswX31ckiT4Mb5xGui9vrhwAf4Ri5krZv9MtgNcsuvkdbCyM4fbBmx27rwda7HZ4A4CE78m8T",
  "key37": "3tuXQHzEAneJpFZDBnFmj57dmHxXbgjQtXJb2sXjBZme6MUqCLhLwSEnZR3c3vcnu2A4ZLCxgvgKEBod4R2rtbFF",
  "key38": "4v4eWQh4RknDpVjJXZV6dRJTG4W3LhF1W5HrpByAjhUZXc5m8CPzDZxCdd7VBFmvsaUkgVETuUDxZuHyDyMstj6P",
  "key39": "2yMzAAg7wQkhqBs7wcsG5TSUqnjd9mvek7UcfLmdxc9dvJgf8pmNkWK8KhjXUwuvkpkjsD83LyW6FdeHy51gsN5c",
  "key40": "5qp8R1tinFmFy28nqVNgyqR45M9t2fcPtroYKmbHiSXfFdQd3cRDuUpbJ2jSwR6kWHhDGHyDhc4bt9rKDLLxVB78",
  "key41": "DJXy4EY1F4baYZHCqR7tzFYkYAPT9dGUpzsCq4VCDPwkcJqPxLkohtJRFdqb5s2MsRJ1j1CMJvUXGKPwsGgr3z1",
  "key42": "39AVBhU7Uz92HgHzuU5vWSa5vRCyCc9UD4mWt8dWW9535SaX2sLCeDRSPk5E24MYNBRcvKWxPL6pxgvJVtPXNfbv",
  "key43": "3THXB12rrHrz4DeoG7ejPzYidtUXyaqS878mZT8MfXnVnG8CR1rQPqz9yrdZYKNUeiU5PRAA5vQERhL5RPUf2Tue",
  "key44": "2UHgwpHGejM8zBwe3AeSFiJv4t3SYT67ZGMQ43SJzVWnjXAsKGaXW28crFMwRBhYPn8qGwzGUn5fYuy4TKwVmdL1",
  "key45": "4eHSc2rGwLmijkDRsfcviSpXxF6iqYcpG8mMnLyMf4Qqvrnan52cHiV2tAaLz7mZ7nKWn8UCmseYHWj1phpePCeg",
  "key46": "29jcVsD5D28P8MdAPHqM7wnjT1k16vM646kmH2FyVSmo3ooyZmhaz9CUerG9kQqQtzH1FRx7Sx77mkRNfL4yWpL5",
  "key47": "28So437brV2RcAt2Q4m72HJLv7i8LL7vJUUjm7rJ4vaMR9epHhUABW1Ne27RifzRxmZ7gbgesM4GdLVFbSbZyXNV",
  "key48": "3pYbZvLHfNZvyVQe4CewRbyNKozXac19snVBYSjQ9CyLwgWPrmoLzFGz4gSMR9Zr799Ducx2wzBUK5vt3i31yhgj",
  "key49": "kAwKPCh75gN2ELRXjPAYq98LhRWfm8UJFnhSGwauEcs9fuY7ecn7FmAX8P5xQSAFetRcS7DtgrpP5bndFLvzpwq"
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
