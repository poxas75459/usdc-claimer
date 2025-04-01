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
    "3kcstvuwAQRUJhK5MUrekkNS1HgwPtA85uKYNUEsjC7ZckdRTfKwg3jza62W167aQ2Y3kd727uLimDR9QsKEfhXu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "UxxRFU4e3CZAxJZ67KHoLns3VpdGrbWJf4DC3udK2pt1TgjaNXATnHLmz5wFBXf3MwkjoxKYw87zwUKh82P8XJC",
  "key1": "5pfp5FZSWFyh7F5Gtucha1F8wKjp3AYS3NTNRNGsuiV2HKeQYVYrxyuXPFwGM1NkFKZ4UuzrXmVoekFupVrE8UrJ",
  "key2": "4pd9VoU4uBbuijyzZeWqCR6cqtCgp2pJaKjZXjz8Um6U1GDGk9eofAQypooVGc219S1j5beTp53eGpRNFYKGJFAu",
  "key3": "5ZRbg2o43iccvxwm83yncgyFtqAiVMykihNjHZdV7pLtmxezCZcG8y4fwUQ9LZpUYnkBfpJXqbRJz9i6skkTkADe",
  "key4": "3j5U8oZg1aHYHfncTK5XGxDL8riNqLKc6oEJmy7U896KPrJf3a3HcJyPBqNPhbjCNtiqWcQhd2Q2USCpoZv5njDR",
  "key5": "5Nj63z669Lkp92Jd2H2HhddnwV6mw3mdcvTL44qRDDT32fY7rmVzdnikfyWYPSYUDcFDFdy9D8WEbRrWbqb8cUBa",
  "key6": "5dYT868fRB6wAsBtnRbJa8WUKELPUuGaQ2AQBjPmWCyUwM48N1B6pVgSB1hou4rJGLfc2Bnee7MBVeiaiN9nRB6x",
  "key7": "3RxkZmqcS1vqrfJF7oreodrT8QagwsRnMeDZVDjXs4cWERBnuFoRdbo82wfVvHfRWeHUmGWNYcZKpiTF29hfzmQ2",
  "key8": "BR3374d6HP9ajY8htMXkmGCgUtr9o21wHfcUhtbcffAWdyEVcwoXW4CwJh3PquEv5YekFRacHAKnHxpFn9c9gFY",
  "key9": "4UvhGxUjFVfC82Wm26UsUaLhV5hxV5UWMeprVygTV9t62n7LKnXcRguy3fnYQhPfZNrwPt5aaTSgSmVRwPPHr7gN",
  "key10": "5GmtQDG2Jh4swY7z4j7LfUKjZK8t5Uv6ZMXFpFuRFGUrtWSENyHBYvMqbu5ruTAc1xnrFXUGSJpWLT3mhkLzdd8k",
  "key11": "3c5y1GJq4Ns2Gh8qnUBd3rGrSDaosz6fTAgiqjw5wYV21EaEcXZ4q94NmyEKi1SUoxADn7DLUurV4ctWRocFP3Rq",
  "key12": "2nA4qonEtYbh7P1DzkqL4TeQHFc7QPfLqQ4PCzywdbhCZnjBE7pBG7vN6TnTkFnDTvmB9ZB6PDJz4ZrPiFpEN1AH",
  "key13": "2nxzRejwc5JrVQXWKTzVW34sNjcqpqj47VswrtqPhe3NYLoEYUUS6Z7dGLuYbkWWg16QRWE6MRYovzmrPvV78uND",
  "key14": "XwAkNZHsNHxNMcStYhUPTgxKEvGd2Jd3zHdkUPdMrYejRz4T9EWnYk1bHo9Dr4K9xzi29dHu2oQ9RH696U87Rtn",
  "key15": "4DRSqkUAFikdndAEyeN9rBzqdf3Exaucr12Rfpqfzwmz5g44A1Df7Uc57XXYZZCAA11CdJyEU37bp4nxD2Ucww9C",
  "key16": "5HUsjYX6kvAXeKyt83TNgGL3TURQBmPv1qKtozN9CgNJKXVmb433aXeYX8KatwUj6pMWkKnaivgcvES7XwLttoJr",
  "key17": "y3VL2eZUikwNw4tfh2SCGZGRujgs7jAhj3PQjZYkcqFetuH9imy8GwG5hmb7UKVtmQAb2MqG868j8QUBiJh5S3f",
  "key18": "3T4xRKhieNqx9DWk2V4rtqWojtnTnvJwjEwcmhsHmq7MeTNAAN6AYcUtkW1LpJSgjAYoDe8BwFaS29m5w1g26NrF",
  "key19": "1SKLTz5EPQeNpUZDWtsmWsRCWaR4YsYXFz9tJVx2rhAhGnsSpTwxbJREXjLZmxsHXhQ85gMVPMe1i7M9BRA6zz1",
  "key20": "aXnSfLAWguEhfgjNZ5cjLduMyBpyGTpKYFdewHrej37A74KpVdypPVQHrsgWBQX9q4KqkQkYge5E3gz8DJsr8Hi",
  "key21": "EoN2bziuKgMXDHW62rsMvyWjdqkREFvsVywFoZX2KMaUKiM6vVPXMAugPFZ3Mk5moSsSWUvYDj78ZBAWFfR77zm",
  "key22": "2bErQYPctPYpKjEgDt36vzWUcyRqK6Uc7zzEqihJHvJi7oNKWu4ypVVA7Y153crrS4LJVe234uwC1WSYFKEtu52q",
  "key23": "5HAxn2kF2XBxFRcnYEEcN8zAkn6subvhnofYsaEKGrwQVQr3e3uhaMxbUvyRvz61PX5A6tpNCEzBvVJuCJHzCPo4",
  "key24": "4j5sb9Kp4ScM17Vr2P76gihdz1pSc1GeqHYuaXUs5iimCPBbx8wQZXueq1jWgdgct2So7BrT7AgoyM1Amx6EsZwV",
  "key25": "4LKarGcwb6qojisXC2aHrY82MzKsAeUooWsMmB7zmdUV6dpmQoPHJaZnaENSvseZuFErDo3BhY8zx7jFAu7D8joe",
  "key26": "3Hd7UY9PKprUCu1H8ejRFKx1kYyGq9ogzZgB7EETQh8oc1c3Cxr1DM4ecrBLd8aFoScYARncZWPsgx48g4Vi26PN",
  "key27": "5e1DArsxHoyZqycjYWjwuSBJ8Cz3vHbzGzyP5G6mukoXp5cthka6WSSyji3QjMKFzyzV3cLqnKASbfLMDYWzZ33V",
  "key28": "4Qt7EowLGfDdyv8F87uqcCFKvEhjULuibrzorNUWpFM22MJGr4vNgbtdRBFcqG1m6zNCxfDAzVjU7uVXET3PSUmJ",
  "key29": "2FzYsfgiYs6zQiyrNpdzfr42QHQjNVZ7wh8AxeSctJYgzLivY6yJNVDMqwMUVUwRZEUUHkvkSr47G1xRBHMneesq",
  "key30": "4v1jQ3y7wF7hou1h1q5n4nEjo4NQqaxSmLVPiMxGMfr76SDM4aiNtnVwtJqgxjvcJGmEoJPpkKrtFwzvkZgM4G64",
  "key31": "5c3BfJGmGdGrSVBkA26zNjZk5Zg51pfmvqdg454LowHrsPGNzTc6XkrMqivJSn592Q66KeAf576vQCh3ezWdnRUp",
  "key32": "44bbjM56TKbMkmWvGmVa7oKk2dgNUhk9BsEkKVywbDeoYK7NUrmnuqP3jBqC6fyKM1uQA9E5G9yYnaCm3vzEMcEh",
  "key33": "3ysrfo2r7doBGRrBLYeH8edQTf2M6ybxbd4dLEbgvJGtVG8kVNijUX912uGjFkfbk4fitKdXGcaDAL2NjSvZRZei",
  "key34": "2zg6Ef23934eb9d2Uqo911Ey19fu7TXaYCVtZDYeRSELUJKRFSgcSut66vge9AeqYBFPXdMeWUdeTxiTCdSCwF6j",
  "key35": "2CLf8EJ33tHQdZLoivfeJMnmaNLvYGcWW4PhjwNqg41Zuu3MCVyndzGawkb6P6KKhN6kBxtXGw6bzgBLuPzjSzi1",
  "key36": "286oGirJ8HsQ3vPjW3befFPGLjU3Lio2UPShmQ5ZLWecPerQVvsQDJNrTBg4U9M6CDbQHifcxsd6E5pBkrkhUR3A",
  "key37": "5UXVaCKrkuc2s2vj57xfj7RB1LqWSBxFVahTy6VY3ioNKjA2xNdbqTbB9hLGSg9ztBcMkKNb2nueNFd44ncDUdV",
  "key38": "59KDdfe5Sb7UR1JJMVU8NfV6tsBH38L53G2pR3ZpJRq11KsKJhsvk6MGtpEnvkFhS9zKpKtWfxyEkCQF5n4vJmW9",
  "key39": "5YHZyHYxRPnvnEvQsaiDCYHLekHWANxjB1sT8cxdjaFjKQpxjNr3FcdZNrRpesEEn9UULRxXypzK9YEWV6mzBR5A",
  "key40": "4pjxTvuWoZPf1727qbGqZCdEZLHCpzLPT1Bu82X2vuk4VLJV6Fnxb9F4kenFmVV9fWHyY4zbUySybxzbdeArR6mG",
  "key41": "2FmtoMUAcd5UuRx3937iKENuwMqTLdobCB91bVFB85qPp1c3AnkYGxZHbTmhgqDVPyPkzLttNhgMVEVhzXgcwy1V"
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
