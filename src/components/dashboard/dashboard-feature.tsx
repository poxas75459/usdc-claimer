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
    "3aL8woE2LBjF2o39BMLe94hb1Y58J9n4cn9XBbAnjVNgKW7FVGwy6rsAAKNDvQhKD21cTWbTQfHdeMdhHSLh3kkQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52xUadyGhhLQy5yzPotfrovZc8xYj7bZgeztaT7w5EzRhhAw61j7LDxGL2TxiQ54HFU6UtXkQLRWaxAJDf79jj5Y",
  "key1": "4k8vUMNsZPjU4cTfxWvMt7WQrFJvGXhbi4RVnwwcEuHTDonw6i91yBXk9aenKypcbztGod8GZ65PG6PUvGYAdVJX",
  "key2": "3jdVPK8gakcpaEzj6wHNFeekKwXEgKYdNncpZ17S1KDZnfi27HSJoKmvonxQhajLqkQAtDK8z4r9CQEAz1b52kdE",
  "key3": "fksCRYy1HAn4AUFN6ZiG9bPPXbf686hw4vZcSRMBvoL8TGoavDui7ZdDZ8Pn6tFYFrGdgFVuXiGWcffScEtK4eZ",
  "key4": "mHYf9ZZ1HaP1GvWtrgVYd4XNQbfioVW1Zk9SknzPrU3Wvcxiyoj7fQ5Tk6anpuLvAS5KWpamEyqpYsiEvbJn7Zp",
  "key5": "48cMzWsZTm4cRntq89Y2qtuok7n4b3GUmr13Xcr7U4EdnPesc7H2beX9Kmt1BP8JyxWrAwdJZdjiezEWBMg1Y8kH",
  "key6": "4XCjnwDTXqwFuZ4dFMfegvsvjb4JX3fAvuuFfq9ChXWYyzjqfvghsSsBPw64cXVFwruAXLyBmANPcDRHdi322kuD",
  "key7": "28vDGPW5c1Jqo3ZQx3qPSD7CKTbzsv2z1L24bMdMRdem2xyZbPzBMHySgEwRHJL16o45kjsaVzkBSeU2qpaAMqGm",
  "key8": "ocrxCyeXdK5vMdjxaqaqZcXACgh1ZzaEDPR24M2nLuU9eLpUbisMqiXjqTGQMADRgwM7pUk67vhDa4t3NrZYkb2",
  "key9": "2CYsoy8ZdcubkvdPrk36Jh6uxUsbCafJFcudwXniq7HD7zh2hXoURodJsDo4e6UVWJaFo3LtM1zSjenzmeteY33g",
  "key10": "6boSMFYDXYRxrWvP76oj1yxt1Mxn2zwmGjh2FxHCsr153x5LaUo4xuUZTWUxUxDgLB7WuejGYMTSuSByEHmXWpM",
  "key11": "54meBhQupfNbvcXr3SUqWxAbkJo3PfjmD2C3yYN9pGfkXQNgpFangKb4mAhTSoUHWEgu9fdM1QrETVwMmtebvW5",
  "key12": "5Fk3B1sqMrXUNYe9nJNdjpRjxAvpP7NuV3aPkS4av1QU2NCod54PiWcGHWoywygPyZXm7TSo5wE9tuBoXaL1wLi1",
  "key13": "2wfaMJYoarGY4JFhE4C3yFRDgr5opuZm87SUFB4Q7A6cbSVkEiFtnd4W6Ms2su5ydbaYWFxrd33TnbGRyWokyg6d",
  "key14": "3Cw4eJ5XvD3RvCWCKAeRdQZVbubb52SnU6QQ7fBaL2Tof6mKJTFUH8iUo5JCgBunANzGEu9EL3WFJYcN6ECBngnB",
  "key15": "4NTnRQKgPKmL2sYkdccBxG6BrEXLyz58f6ytg7Vz9JqRRg2ezmpvc8R95UcsQanHGyZmcyW79RGyFr2i8NVBsJop",
  "key16": "jwFMiMKTsFBHwZ4GXsGPsSokbit4GPtCTcwLcVhsE4SHvXbXa1QGxdfz14nUi4KfdkzJnVaDjuGjeyUrqBfnQnR",
  "key17": "5p51157pJUjB7Fh97kkaT9T2ENUDWRZGCnjCEtRbY2Ej6fLmi2WpAhaZM56PAg66gU1PHossDzQhzbSkhuGczUAB",
  "key18": "4UrGMvVF6ikSAvgv5QdT6GnzrHNycv9TdBzcZF2deVbGeL9DZ92QSJ8qGkUZKGQV1zg9UuUaGBGnkYar1kontKF4",
  "key19": "3Xjth3Skph5AKYV6Gs24hyRa1xvPbT76mz4VDjUuYay8UKxBTkwgv776rPksjDdfKAjzYWB7F6PUvL19hnBpjv9U",
  "key20": "55i5UdDE7NyxfuRozcMGvwJoFjWeAG7yeFHY7uw3e5Lujcx6fF3NuPn3aApk8NYWR5tvUoUAxGLS3Jru5bHdrKxV",
  "key21": "64G4FX8y1HExXCjESN7fWMdkKpwQCfiMmMzYm3U2sxU62pQPyTSVx4KPnDeTX3sNuFGyyPCbcE1tdcM1PumSPNkS",
  "key22": "2KLcgQBVWsqJLpBGkQ8fMXChsb9pbXYNTZ7gNwneGZGaZdejzq2J1phLynpa7ZaFJNMuiixHYLJwCmMermi3boD4",
  "key23": "471gcShcUhYJoAp8CEuVHpScUHDTMyHGzMD75hQydwVUzHGJLAQQS4XCViEUL62FXS6UeQfWQamCUWPqTeY4ehvL",
  "key24": "BTEwZ9M3W81hY1R4jDKcHBGsTvA4k6t6o1kjoGDibwmXqk3m2HpfQ8Md9JWE8q4DKCWtf7FPsZyaWY6pCzxhWSy",
  "key25": "3pijTgaxkeBBHkU7aBWiA7QCY9EKW4ceB9JNg8FTUehosmXHpkNfypAz3j2eL2C4jQMk13LoUhnqqCYZFb9AdJDC",
  "key26": "35BzeBtQrtDxgn2M3B7euVbakr886DK376PhJTsNzap32FxjmeAaMT9qxuysP6pft5ah6bNLWD3apwTgXs5LkKWB",
  "key27": "5cv9DQoVbSTRUMcnUEdbfjCnWz5d9ULDRMRmygdstS9HAL4xcqkk1oCRy6xTz3BmuBafMjK7MQCJ5pv78nknzkoE",
  "key28": "4SbNa7LUpmPa7Lk3fpHVQdTXwQ9MLMeZebeFLuxLC1XD1vKkpAK2D91gNBJeZgVHUZgsVXE6SEzuPEkDzVjanGAm",
  "key29": "577d9wvHufKDRv6yiVyAn5y4Rutdn46YYyXbg2Z3LDLfKsJywZXuKfYbi9bX1jEcutXDd9ehHwT4m4MtjwLmm7y2",
  "key30": "EkiNXwid3iNBoHyZyLJB2VAtiuxnhaxqSqbitQuARcu64VpbrBvyxVvRP8iMmhGXkAGC3SbAji5rFbrPhztLz7B",
  "key31": "2xoomRvWBhefL5ifBEsm2CsnVRMMBJpHqMTYTwYoGaUVkWSrr8CCXzq7mZvEaBKb715B9kYiHbZYfuhx9RvLcZtB",
  "key32": "5BxygDZrAfUtraADseJmH7DofpfxMvjcRNCTyVHva8gEuGmNzqjPLfvjh9kobKFQ9enGWJD3BmPNcyFvwnnaGFdY",
  "key33": "4AYZgauPUZcchCWwmRUhcadpyQKqWgkvfbmhDqLq6x3N96cGTY5857oLLHyn7tm4JpNUh5e1mgNzit8LuwufPK9r",
  "key34": "29uimCHg49jcw8ZwuyhCTEiJRnhMb3U8PUNekGKyWJUqwLTYgxUFXFsjgfGH7Xp7kTyZRjJuxf1sSWznNbKjZy5w",
  "key35": "4SyL1hcTfFBhe2wgYa62zPUcpQZvTcQqMWKY6TuGvHX64cwWYNRSCTWjabMM9XmzYRxSAp7qjqFPC96Ht9oCenDy",
  "key36": "2B6nhu47GK5VyJUWVBSC2fNUBmFGf9SunbA8vtGpimn8evpJiDFyJaayvQ57n825BhrdjksswoJjAE5NjzybRz7z",
  "key37": "4LKVN2S5nAggegypF3f1qfXvLmrFmmnfvCJoiyYAKesRzpP3Y55gDnAxpkjxhG8ckCECoVqhA8aU2wvqarBj9PYw",
  "key38": "37D4JNDqnNkE9yjMXr8v1R2H6GVt4Vf3xBZJBp7v5ESrz2NwMUWguQ6RhiTPh2Gc8U7RBj7tegRsQwPvJMAHsn9C",
  "key39": "3uGktv2iiLiwPregacG9McDwCvwEvcSjw3JqLjpUPNCYEQubqrkyiyKNA7SgjjxrGDwYfJrwr6EEXPnsKGwLv5TZ",
  "key40": "5cssKQUeGSAwZ4LQgTaUuoVWvxgd2FnBgGqB6wqk8uzUzKfxbTYYnfJe5MMsLwADat4ME5kzSGn5oHq7mp9pBRe3",
  "key41": "25TgiDB64p3cfWaPGkvkzZktgULe4Wa73cTrNReraVcAg7vYGLcKXEBRYDkm3fUkQr4v8JAEKLEsfhWS7Ca6eeAV",
  "key42": "4ynjWdKnxv7Egmywj67nMeC8GRFpj8WrHVgHA4zoEQGno3C6GStmcguGFmw1caAY235zfrq4BrzPiCfUxyQBeuCT",
  "key43": "2j6Yy4mQe1wYyJcBG5BgwoVMsp7SXZx8qN5YEiyu3VqnUxtJ3fyqdd6j3mWp4Fbu12PBiqces1S93onXCzGHQpTu",
  "key44": "CEX8GnmNkLa7wnn3UPsQLw8dL3LzZwbg7ofSyr9kWmZy5dLbqx5o3QwnqRWZx5WA2S2T9irCHepRFp64mEXPPdo",
  "key45": "L42HEgKER1GwkUoJvTdWU9LVwva58vBrumpmFwKtSDzN3ubhEaFz9ZyDk5aojVJJcuHfM1Ygg8QYzCp8rhy14aA",
  "key46": "4Va499yZG9QSbrNnGaF58Af1tp2KnmjSoAytooqqsRBZ2hkRDu2afZb9P7qGFdndL7UfiJ8Q123KKWtjDzh4punX",
  "key47": "3Yv8H87QzJBk6pKyvpyfkV6Cos4h4JykD2yre8afVqjfMKq6XCK1TfKjva9cLjuoBCqLSjSYdMTbUi8WUn2RHYGN"
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
