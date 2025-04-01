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
    "hs2szDxhNYAVHuuw1JxduBJcvCh7dQ2quxmKXiFbcWkEzdcrsauN4fjpASLP1pCF5vH52Avw2rkSgANihnFhZLy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CbEebLcJaGKoLEmVEcbgi26ooKayKkYJuJT9sVj7Et3QHdCbAk4aTP1tj7UxR4nbvGeA7K2EqWSNDpaEPzWvMJv",
  "key1": "36ZoxbSNrHbWcCFXrgFekSyDKj7SupfsHmJcSL46BRKX4NhtJgy4wfc8gry6T9M9K9Pq4PeY6BS2sjwxYJpDHKT5",
  "key2": "5QRQ26M5XnkrcDpWwDDRArob8eBPrFA5bjVY7Q7Bjm7B9PbnHrwJ9EBToJwtgVpdjkDWZjfFBm969jf6Hqjge2Nt",
  "key3": "4KHKTdFGpoJp2kKiCcYP4tuxAJy6ipBmQxwJ1F5ctLXzTYyr237aKjJCbDsZAfDqYgV4pUso2eABeqYmLMmb7WdC",
  "key4": "5SixDufWBkMHyRHpPe3hbV3aCCUCF8q4quUzvEJ1fvXapgAjdr9qJeis5w936ChDpSzjwgPEy1CG9Pd2yVRqiRB6",
  "key5": "5PN5eLxfdc1V5Menv5frrjxvLMHb89eifT1XpP9iCU6yxfxBt89M5eAB8bCdBsYPGZeniSkDzdqRK3AgMpeyiws7",
  "key6": "2UQ7nYsq18HBWZbitp14zkdiks5dNC7VKdTwzJHDxYXFDsjxYpq7gdXz4iutouerUJ1N5hASjujDD7bgjVfKepWR",
  "key7": "3BAmchr2mKDKu7MxidpozaRC4gNSZd3zGwy88sbPRJX4Pj3YMLfnBNpGsSQUaohdiarxBHq8txtV9jhqjKMVtZv4",
  "key8": "5xReWvpCrW2bvpR2iWHNPpyki9RQAF4nw6QMq8pKGuKRGC2ww55MFCNgpcSgF4ALi4aVsF5w154hny7YXbUU7vmo",
  "key9": "4gqjwRug1fWFYqkZ3xHgBUp6HaCLHuDYrfXiDtTosLEV7dpQJk9GiiDGRUkHvecr1Ev5JEhskBFQSTkJDh2geHc8",
  "key10": "53gn8F8K5curHT2jCEVt2QoEKQ1VZAtahrpxJr8hhKVZsT4po4V1TBc4vL1UbFLLvwZv12AQm9grCyJpHAgrZce9",
  "key11": "3hKZ67JYQPDJkarAe3YRxJhF6YR6f59hMJKLeyjLsUmSQZmeQpCb4JH3eZe2uJALqoXsRPW3Y77Yo1KZ922Wi4w1",
  "key12": "2jmywmDQFZnfuLW3aBAAV4j9TUVnQxqGFcnQwKmqp13nhNagY3Qk1a29i694s8ztYZYRLaiDuqx8p1FbiNFtauAT",
  "key13": "3vW5s1ii8D3xdBFpkcnB9uek6Mynpti2ErA5XqSQiDtwbLz78ba8AnyPoyimCsQk1xgFNDXJWJq3JTfyLEhVU726",
  "key14": "4XSFynePw5bU6EG7oCFnqpLPp3kFWLrf3iLdS66vUNbCqvcCv15wLaNSRn5jHAe2kANPex7hWDgioSNoxQusLxUV",
  "key15": "2HQtc1oY2W9TVD7d3CtgJLBDaNAAbR4mssP6adXxszL3Zg45fMiGRA2UNjPhXZMMk4JBAE742QD9NS6eDZh4QEoF",
  "key16": "5CwfaCx8UDGgW88xjwqZerZ2Ywvq5W4BzVsa4heDXMm8CsUDrzGsqsKy7ecXpfRjLgXqJZ3RAVPAJLXz8SuDtJRT",
  "key17": "27steEPDERWUbm7B4Dd8AQY6RYnkzBW5EvhQiACgmJFeS6ZDayd2PrzmJkf28ec88icEoUTVtyWHzsYnfwn2RoK4",
  "key18": "2VRF54GcGNfSsYprfcCafK72rGeirCA2S5WjnuaRVKFwz9heyKsvHpLD1nH4PiDEp674oxb5G7NY1WqkEf3QAtoB",
  "key19": "5wZ3WfL6xkP4XRxSSFZ4wmoAKc5tttJNg2TKHxB4LjRDhbpMML7YNEZu6wBCa6GB1FhKDHmU36XMW1rHaEboBprd",
  "key20": "3JdjA1h7MzjySkYs7xS8XbYK6cHxxrguPdmkcYhVzTmZ34sV5wLdqAFDtsMnUutMrp5GxkKnRNgVtoBzvC6wo6mm",
  "key21": "4p5ppFxSAY8qihRR9EPG9bMSaJP7iTVDj8KvWUsXNbGXmhRh5tZJoPys2VViahEsRCFn7ogVDfxzLyd8fSRXFXRz",
  "key22": "2vXnaRYRF4Ud7TNxzwChmxb298Vg3ERtB9R9qYP7x9ejQ8i2W9cUX23crmcZAYHc2zBQsHbgNDjYbmnEeoMZQ2zj",
  "key23": "5ziZ53Wt8F5wG7wHiaqFbj4trJRVYi3g9z6nWqZyhvPDUsk8s5JVi48wka9hGuAPmh1sd7GLYD7azxHJmmY1RUfL",
  "key24": "23GEZTEs6T2NyGEmpvnDayM3iHqpSLuydDFS2CckYLnNHkaHUFLjuRsTDrTAP6kRMA1jdkf3QeQyCjXS93PaNHap",
  "key25": "3UZFaRnZKd8xFbpJU2QeHzYTZsAnJvkyFQ3evLtbqWPqvHrxTVTLe3UJAA736TsXawaCWkHqaha3gCp9rbXmRerX",
  "key26": "44pq2PupSeuq5acKdCFDZfn4LzJxsdSU2Twdj43oHkGfwSrAPxRG1PMSrb7n2T2MrDrKN7UyY3ymxKSMVKkk6LGw",
  "key27": "3AveThmeQ4VrtbJNNyafX7FvmTKLuoq9CjtE3f3jXtcSjv2aHrX5tqt9aGbNzu6adS8N1XU3Psu59bfDUJcNWSJ5",
  "key28": "2WhesSUbH51iuthitB92D7javqeVLUCgCkv1CBcUxZurfJQTwtbMNDsXsC4jUqSbFJfchA7z8mRrtHJXsv5pjuoE",
  "key29": "5SNxpd1LEekGRgYp52QXgZtdXEt62YJLxCr15WTH1ZL6AtpuArxMwStAkoZWw2N4nye2Mq7B3zyEREo1v9zJJ6W7",
  "key30": "35RfmvuGDBUuUcWALU2WP6r17bp9RE2azgkVvZ2gHSy1Yo8kEZs1yVrq5m4RLPzeLuX5ZGCbKQ5TZ3pJtdK3fTht",
  "key31": "45YvzuVTmWUeFXstnddEQAN4Tp5FSzxT1DcQMSJcTvPzGSsXGJwPx4K57NBqDQ5PoZCHGY5G5LU8rctyCtfhb5tz",
  "key32": "39zZAB1co2fUQHWx24HTDGh3zCxhof1jVffBw276KpTruuobohaQAAyECB6MfDBi3L7vnX6CQ9RGSDpzpquCN3BM",
  "key33": "616FTMvsexNoR6rFBY7ziZ1V2cs6WAJbktqTPgDbgk4JcsAY38n3YvL7wGguivnNPxVttPiAqtV8m17B2NWxNJ5P",
  "key34": "53MaUo1LF1yoYJM12sEoXAKV4PPKpx15wS9dpKwCWevhwxJvRUVxTPiD4oDbw8UycNbBw4sSsBLsak8jihKWNaLT",
  "key35": "5sqv13RyipACGYmFiiEseoguSZzpxP8VzyEdrZYDarytsW5LkwUQb4SA2K2BtjE5N9TbcGWjusBtaiDLVnfac77S",
  "key36": "3ZEtDwSRQM6gs7qH9o1DZ5ndfUogaN6y71CMi7naCCYpTuenHShgVoht7CMMXfDcXYKAxPDX9HLAdioiDGhNThoX",
  "key37": "2X8ceBaYh81U2HYYGvGg2LwkBgPkszruvg7jJGgesvK89PhHTdZ2s2YiMv8MaPmnk6KdTKXfypQDygC3k4LtdHxM",
  "key38": "48CVQQ7M1AFiGbm7PDg9LeTX86WeMWi2chFQHTAoZWUvezdi8xDsKqiUQXe6SYTbFpvfTVG4osk9VedBUqDK1j1H",
  "key39": "33Xknc3NwcHm6RoeS3zkU4uT8A23WkNLBL6W8jsCPMLwm15vco73tDmmqHmx9zkKD8AZmVBrNhAScEgCSKYm2QNR",
  "key40": "MJFPUcy4Zr7hszBaLs6gKvvspq1JbLk8EhpHmyqKfBLRTcN39i6MNh4qZUdFteh3emVyYGhpRwEWExB814Fv8my",
  "key41": "3mLVLea8Bwr1EX8tzkELoFFcYmSeTyM3ZqwwFHYaQkbVMzNw8FPmtC5nwURqWPCSFjLYqAxggihkWf6oFzj7HdEq",
  "key42": "5CRRMBkTEN8rZUHV17JTVTW7EeNjP8wwtfaHkenomsCR1SnkPovzV6MXDWJQSiHP9gSi9Gjs3NPBkcTuZHCWi4T5",
  "key43": "3DKswXFjrVGBxbk1W3PmwZjUmS3FoUxNc7MW6KHX4WsrXD1v6kb5E253aAX3DBcGp2UXBRdQSywSfZY1p2TmDyot",
  "key44": "3ppNeTFQmq4z8AQhvfepERnXEnVnasYY64nmaASrvAT37dB6Ls24wpArQTnfgrC5drDbpdJBxjiwHn4adzne1dfC"
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
