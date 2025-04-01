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
    "22j5mmSSWxW4FRHtGMiW384MY7GS39Ed4xMakqL5y2ZthSQsKStEdwipzhGDyAAZcotzhH5fZbh92xSFE9xEBMaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JjL7J2Zv5Z9MuYbjsnCAw7HzENdQgZ2oEuihGxsABNxKosjkDoVu7r9foeuUSpgEPnLpRp9wJR4Qi4cVQckHXer",
  "key1": "4n2f3CVEg6R2o7uty9HXQnwbREoFmNHoxoBbTgpdZDyC6WnG5UhsC3sUAge1qfypRSGY7ZZLE4ywCei9oPSUmKyp",
  "key2": "3MmpipmA6qa4knYrkFE4zQSbozwjwgXUWPizEXS1Y4Zo4D2BMvpFaFF8Y1hgDmFPPeHtkWzAycRpzrJmVpcKuKhN",
  "key3": "2Sp5pNLE6SQXHJRBg5WE1zAxH2kqCi2sttZzxCaFGDoqdZaTpMCfjAscu5C6HXMebniUcQgByLwC9AcNHHFe2eHA",
  "key4": "67Q7FBT6VbQ4wfYmqVnspRsJji6DKUSqBzgL5devdykiF6dBCgCKa76wNTBEZXLxf7w48UDtvavCsUP4DMaz1sWV",
  "key5": "2c4N4txHbEpAvaGZTgsjRnWhdhmeMtFqNuGU7EV3DvrjDV6VjECTQhYkS7sGYJS8QhtrC7BFu4ZBYqX1S6pzB6Sx",
  "key6": "4ZykVdjNH3b8Go91YtVSQfmbGmrVatAU8Xtv29Q17RZrK8neKiEX8P7cxjJGBzj2xh1qK1SpqASyP7R2YNqUyZiY",
  "key7": "2RfRTk4J4o981RR6GB6exixh1KjrDDEyh8k4aGrRJoJYFuh5s2xu9NxRYFdUqbtMXmiRpyMEPAaSUAu84y3nvtqQ",
  "key8": "sv1F2B4s37hy2iu2Mc7uPsSfVA2pwakHcmUoihQppGy9TtpYku4m2BDnyabnc5f4xJyLitd7dzmcX6PR7BEZbVG",
  "key9": "1JwZFGotgmUMN9V4TkefzUMoFbxRB1HiLTYVstdicwLFFX28dG4Fa7aosCUjSsTUMiyomQGoicbtwfzSLjj6PHT",
  "key10": "49uH2GPxSu8uADiVAJuiKaQDDk1FbMsv4vv4NeybLMEkKP6hHt5nqF5ETS8qxjEVHVXXUJ4soq7eqs35beh2Hq4B",
  "key11": "MUNq363c8zG7QgcfgoCHdrwUD1nEfGJDydtsCVo6pbxAD2VMG1iKbsfqebshk1mQkNVkNsPb4FgPTNWUFbfqvL9",
  "key12": "cqURyXS6rTSYw7M2bsGjFYwn8grLK1HdC1MxSKbs4GrQQ1BcC4HYRVb4qSd9ZXJrXQERpQnvvrmKnVYhLy1YjSC",
  "key13": "5TYfafsotQZcjbyhzcroxq6uRK7x7Jdd1FqTo2RUPX4gJKjtEUHurebnPVb7FfnpdmTYAUAuipmFQ2c3CeXwsgPo",
  "key14": "Bn81zB16z7xzpAdyhvHtj6929g5D6qHFRbNhWsHxTQuqW8LJ99xnfWohGcMyzWByL2n4CQPhoUaEwLQeZ8MRbxE",
  "key15": "58MwkT1k5uZJLG37ZJ7GjZ7WfDMrB2ng53V5kKszi2HaTNs9EVUNNPLvEWRx8tAXShYHXZGitrWAvzmtPqgtzdMe",
  "key16": "jyzMFS5zLnDPQkPtCU2kJN4yLC2CZWhSNaMSLDhkUCCgj3CdKmsAdkKokEiNDbq1xNfSRyqAAnKkGyvBWaC8mhp",
  "key17": "3SHWjcEnNYfNJzxC5kfCvaGiykiKZpH9wpJwVtoWCUAVPeE5xXhMziJwxtk333cZmJWBJicXJCr91iGwBgS7u4VA",
  "key18": "4yUdGd8Admc1d31LWJumKwo7qUqXewxXKyF4i3ws2ppuQMHHz5o8A6v54eqRnQNiktqAvbBKW4PNa3D1ZKF3NCDg",
  "key19": "5oDBYtL1W84jzqEa6Raaj9GhKstZC9oZRXPWGFUEEASmuwj5f174ATbVMh7KNqcX16r6gUDyMkTJFepygS3L8bJ2",
  "key20": "5Lg2DE1db6NB3vm5bFTtfMbSM2PevVwdHmaSXAiNo3oxao3ng5nZEivAkUMQsTHGdttyctRavH7Whv3GLC87E3y2",
  "key21": "5FJW5hbebfsRmzBwve2gvfXRU8RHL9od46foQFt8ki9QxGcMQS6VMQz3VDRpYm5WKWy85RgbnicC5qc21uneYxS2",
  "key22": "3Wkfe7pgNZkWMNBk1LFSx34ujSa99p27wq3XUtF5vPbWEWVpmuWc4LZ8VhvNLQ6YsUk8xELbLmKyDKfvwV7M42Xz",
  "key23": "5gmF57mUUppFHHKk9jBw9LTgUbfXNVRGtJeq9rbydthM9FNyNa6m15J651Jusvy3MMtuTH7ZMiXWu2LQa1WueWeY",
  "key24": "QdqEUduofT1KijAgB8nW1fLLM4uqBMN8iaVmqEJqdPdLyWQJy889p3chrmLatBG9URtUP4VcVpj7284K4WsomCy",
  "key25": "5yWuDAaiz5oVwoyxH6i4rzQrZLhx4Ej3FUMWCCvg73Gw8M5NPWNbsqv1VEUK3Q8ekaLubPYgFgAExv1rgX9MQZ2K",
  "key26": "BkhtjfgSk5bgqDWbqeWbW3rHvcUFXPmqcCvvkb3BAVWFrUNL55ehGZgYXqvvSPzrKA2jqvv3TVSS1T4mmAsa4oe",
  "key27": "3nfKkGvED8Vam4zRS8KrrAD94PzL72aQqhLSDWHRq2MeoHUhbQdTcja3qWKgW3sBZsrX5YRZ1a3eMjXYfPepGAaY",
  "key28": "3J4aAdzRJWQWBDet1fLFBRfSTSttQdBmoUcwyd8tUWEzWhG4MW2TRBj7hawWcMjFwyo78D44B2LoZxkdTxcPUpHW",
  "key29": "4V9wxFSpCj1cNmS9NLGskh1otAoC6riunrEotYzHFpnJAKtB28jup5H8PtxQBPwZ7ddULLjgzFrom3ni4qCKjBVc",
  "key30": "2PbmysH4iTZM7KC3kWnJmKAjGC1BbFHA5LX4DM4Ve3riev117dvzBXjnY3AjVEbWbsE7izekSi7oJ97gx36nzo8H",
  "key31": "4p3i2aoy2nruTxsPoNH4XaYYs4MSg5zQABrKKaSPq7Th6Bo5eLkrxgcoWZCnSSNy3SPo2qScQC9fYidz7QeshtKa",
  "key32": "38Ma6JTzWmsufbYtwg84aQSPWDwn5rNC8YW8k92t4xPgq5hKhp9UwiqSDcJrgzRUSgK93grZtaNXhzMrrn2oWQ27",
  "key33": "32Uuf5XeAd3krDM9XqNLZRK8xwJKx4yWCjURuHySeAyQvtofNDY3eMRpusTG1JDL86UbkJNJMVfE5a1jFF4NaPpr",
  "key34": "3mLTvn778MZBFnGWHnJ1upXbos7mhU3J1EESbqrSysfrzec9N97DwDCrZBDauCV9yBJ3fwXRWMC1SD7jtHoSEhBu",
  "key35": "5LHb7VcqhjRx4Xwg4TEwLhaGE44Yf2RzQSLgnT4FQ6F3Angiady1bGdQVMURvNXWzrfZbvazii4uUjGQP1kNjVEc",
  "key36": "4PQsKN3xHn5PpNffvQBEWtjvCLb3NMGiGmdeNqBkMwo9PQUDjqRa8AQsnDgFVfbuF7ui8p5CHJGrHFFiiqMUqQMK",
  "key37": "5qgJ9mXrRYUZbx8NR2v6AvYkk1hAt8k8mNFkfUsUsxZ9Rk6uNcGr39eT2KvyepiXsjXWWEcQ6KneZB9dttgwi6bZ",
  "key38": "4wNiycEhkQxV6k2ifHTn89hZZszMvBRbWy5sLDRVJvyDccXihbXaEHG2fhFznNGZ9oBxJhnayzv4aKpBjqWWrNi1",
  "key39": "W3qPrBd1ez7Yw3Maymo6deaFTYFdRT3PjfNZ2T4CiqEAfvXAYWKT83XoM6cV5nNSdTEmtdMmNbXX14rLwSCHwZ6",
  "key40": "5XtEdBBBLt1fYw9jFRs6S9aiVBmW2DdHwY5oiANVfv2SBFKcMppRvEo56oJCwiuFUw8deHuFG1zCLPXTNRGX4JXd",
  "key41": "5hZrnu43WqdRAE5wHFAk4wobY9VpqshrdY1R9ZeS2WSCw6c7WkFp32K1WH6VUZM5sKQcBua3HNj1Mo43APwHB3mZ",
  "key42": "2RyMdQb3yUudQvHCdscYaA7kSW47zsHqtJ5vayeSMqBtcMG7XQYCGCEPLNcJWq822Mtd7b7aE4LBg34WX3H2M5Lb",
  "key43": "2AN4EjimEXV5QAH6kTM5gc2M8o8oXBbv8ZtAQjMS6XF4cH8kAqUB3Ucwb5EwV5mZ6rJAqG6BSg53c4E9YC4jd2Nr",
  "key44": "3x9sCKBXVDgQdLAQ8cSpAPzko9SMy2P9CAPmZkJL7Gaw63G7r9GXkMeaDRmmnCTugv2gtMja8BnLCJen9csRAMJb",
  "key45": "tJytHppYS28kJ7dyxWRsCPH7KigCkX9ZHtvZB5WFZVZRVPWBV8q73Aw2KBnKzQqP2C8y1DN3MmbKq5QXFtUMb7v",
  "key46": "3vpAaQnyduXVixXtgNDnmCaiPMx44umjY8WfJ8K49KXigKD9Q95d7j3NssMqjcbc2iFRERhc6dvFKQztN8StaFFD",
  "key47": "3YSk3qKkYsnoyQ3DUK3nPmuYMTKom7WuGQAhTsxLRq62k8cLE3U2ZpvWRdAFW8R2EsUmrW4deAKQUvSyKftssDXi",
  "key48": "46XKgXoBUy4rCrbd7cHHS6FvGE3oa9G9Qf5rUy4PD1o4c8GqnK2BjKP23yt7gzaLXrJwqQLmyAqjpe99i7gGAgxU",
  "key49": "42By17H489jtSbDoi3JnQJJ4q6RsQq2NYhdCkkcCVY1nnmB2DwV2nykpb4C26Gg51x1x3eWssFogjA1H2Nri75gi"
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
