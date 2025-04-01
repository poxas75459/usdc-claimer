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
    "3kNPZWdWUazXuJ6CUpoCzyREE31gpGj1YRmGCBauonh6DtTXVsREk5Tvwa3tC7LXxkiKYHnWrmNKgZyQk6hCSkiH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5574fkQemuXLbTXJtGVmoaFTx4ZFZZJPZHB3T5odVbG7cQoDZVtmE2Fnj3sgkiTG6ovsSRWY8oLa7Cyn4G9mY36M",
  "key1": "4E7EKwyaPmrTxP9i6kF7hGmxWsc5aJ5vsPimMtzVNSDXapHN5mQvRDQ9KWTJZitdrr3ffxSX8xWjgU54daHHi4eE",
  "key2": "34D3ueyPpVr1RzjPSf1Yomm7pM7ksf8G8zgNreyjbQDHRZCuBvwzVCyoDRs5kYmbpRg9LBMZQGwsHjbTpeEBdfC2",
  "key3": "5fqid6JEMvVbSc3oZqj54J3oRWjVVFzAVrxcJ3djxFpWny14L2E1Hwqyi4MZRmtoS3U89a56hUtxhDsuuL95YHPc",
  "key4": "3HQNrmDws9qEjiukBAQMe4J4wh8CMfe2REsoZyBGMncuAm6vrHF3ZXryMNTnLjKrjmKjAUYgJzCwBEqWUTjRRUrL",
  "key5": "5FM7RjTqm9ibEHUktx5XCZY6hSPDDZS5vh6jugUTuXYyxT39x1dRaUSc6hX6Pv3fr3THmeARAmMj13rQtwmJyKfk",
  "key6": "4pyJ4kCiyyKkToXnJgAKtLwh8R21buaL758gsJvk5Naw9mDJdPNbYM3Jqk3JgmSPVfmYpZMWmxPXZkRET5FFVKwq",
  "key7": "4VhDTJvAANG3EsakAwGaQVQnGeHCg7Z8CYkUGzwThWNqan6h69RXDvkbFjzXDD9z5cZXwPQgXZpMsDihSr26qbZd",
  "key8": "2g9gaYXPLoL69bTkow4VUCDLBGCun81DzhdYoT9TKtpQ2F8JJTDzfmyV7jhjgxonP56x2F5NC97ukgBB25KPJzH3",
  "key9": "4C1VQn2cxLRxC5AbTjphmnzMXSqY7nLvTwQBa1rpVriJvAH9u7c5dBZV7snVEGeDa1upbTD2DqJgzAEL7rgpxbkx",
  "key10": "2FeKtmLxURrohKcD34Z3g44v6rYdfdBixaPzzmYnz3zcz91cpM95N2thNpVfTZRM7cJX3DfKgfMJtMhPp5wALwES",
  "key11": "xVsR8fMkac96ffgnhDn494e6VDbSGJ1pLmx2yfZFq6FonPn852MqgTpscbpSboM2in5AZCG11CvCH2SJhjFb7nC",
  "key12": "4uvfuKBEAstGhszuCgxU76sqMkwJNwteGRgz4fHHN8rpZrkPyMu9uCsAtsg5zMrZFneHpAk3KF4skeDj63NwEsKn",
  "key13": "5rYkW8vJtfT2Jhj29nVLtsiSRPPcNXg5HQkT8PUdEUpzDRe9i8k1zSRixGNQ1oC6YoKLmcPaQ8LH4tMF27d9HPZW",
  "key14": "YhW2m5KiH6MRdh3A75DSbcSYYQeqkztZjikfMTa3odhBd3ZbZTXeQtBcdHSAR6J7TBnA8A8Tpwxp6ov56PsvrVD",
  "key15": "k8DPuKzREq3ck8REWZcWTDE97GY6pnSf9X7tmRVYF58UzNiYmFaD9mw2e4CHTMZsuJF1nWfQ4XmLdswqLHnVyUj",
  "key16": "3j3eRDXrcBroYSXzSmkHbkszhh22Bewr652QoynFMk5YbSQRSqjiG1d4MQBWYbUxccwWyoiCDzTYM1kf4SpxDR3u",
  "key17": "3cwTiJGLMC5cj9PzNLPm1uiQZXM5HYEaPCrLE4gL5niD5S1fZKBW3G5i5vbNyvjAfwyCv1vCp8qU7rEFbYGcxbBE",
  "key18": "3FxvCuppTQ4vr3CpNRohc6MpSSs9RAfUvvryam94i3hu7HraqPXPuKAttY2iJis6rrwrXsXBKKLHP5nkeH8CXf7V",
  "key19": "cDb5BCAYzfDctAAzNpHjpwYchsFY2ucjZEWEYnFqSsaucJmfqhbrzxsshrHRZceFie7Q4hEPZCPdeMSyADS9a3y",
  "key20": "3woZA9y7AkfrSxip7Pv2L6RcCD6zpgKUd3yvtbe52JbCTWeLMfZLMzgJv7oNMx8YcsYepydiZVy3JdQBXcnT1Bez",
  "key21": "3Cf8p3kGTHyUWfiqRLXRBGMEz6dCgXaWxW2PsFcw1TKYf3LQxHnbanUp15ZEjgK5Gyk3e7aRWgC9gm6qienEpjXc",
  "key22": "564onBCSgyrxoMCgxd2PV54LvMp4mhkPowsNBzg5yu4RbanaBjviTAo25W3zgbpasmXJutoQo65JPviFcois4Cia",
  "key23": "836tHpLt224KcdBpXKf4ECbLHUViA81JwrWoT5vsKgvDBYupUzynfgiQt6jZeW5vPAKL5FnEkMXCxp7q96vm5Pt",
  "key24": "2JpnVrVPbA92agKnfDpr6Q9A3gvcf9ukW9ELHPzKgwELSz2Ls4M4hKfpJqCJhzDWKAqsPrBRqUcqak3SyLJoe3px",
  "key25": "3J1TJiL28W9HAHDexWdoW2Vw43ySBCNZVJhW3so4obrGUbXFZZ6ZnJo56rGJcnZrcwctKTGUvrVseLxBEcf4iZhU",
  "key26": "4xStyWyPQZJ3LFeKUEH1rnEES2rv98zRh6ST5sVa3xKbAc1foyDmbCeiKz4Q2B3A4wLsA9xuSkigDsJEpUs8zUsy",
  "key27": "4ubz8PeaL1RR6bjPrdam48NE4fyd9ACxyVaEYRF4sgrSZxeBgUr3c5QhbGghkvhCgCbqz74cT9xzDh19MEgmMVNp",
  "key28": "4A9WdZmPLt36pnebYN2FWAt7dEGwVUsM7LFfxnXe8YygFkqJtdtYjhbzAoufGcaEjBSbbwzNDQkoFYEKygRzC1Up",
  "key29": "5GfQ9cdyAXfrZNoEKnCRrJxhjqUCNzqtRRD8P6AHEgz7pKqX7SbnenHf1Gi5u9f4mt6Bm3zNoJa3Vji5EpZaGFET",
  "key30": "4EJkKAFKAau5HtWwaqAbfWKoTv6AXooz1W61A84gpHaVPqHn4tbwQjoL2y27htX683hnqPszg4htMGWCBRHVmbgT",
  "key31": "2Vd8GfBAJkmuQqpTxrw918eWos6uxdSm8aDi1L5JiRWmzCss8urMDuKDBSTSEntTLdnFCFRZBvmPNud8GsGW4mzU",
  "key32": "4SoYwjPTo6PGsFfTjVqvgv79SLB5VbRFY2iQx6YHsVZ9ERyj4QiZkY3hDSq1x26scYA2APEFVkAYXC8kgFuoEUhk",
  "key33": "3c79AX66bakGgpqJEc1iAtEN81LPeBv3YzLs2bPnTd4hZ7Wwq47zt9R6VpLwKW76UJqqpLsGqckb15r2zZgsQ8eA",
  "key34": "nD5YC7jMhiAt15w9cq5AsZjQAj73FLpx7eeV7BjaFSjhZrx5bMTzd8UCkq8Q55ab7q3gdRZSkMN2CokqepdDBZa",
  "key35": "5gAP3zbdaTWVD8eZAGa3N4h7wjQ3L35UA6n5mNQ1mMKH3PNWAtcba9RQq5exUEizadr7YNKRB7QZ59Y4Q3WY8EzM",
  "key36": "3uw2PykVRZmZb57EPi5xeVpbvHGd8V1CtoTSHcpqCPbo4ba8dBVmEmHjuDeDv3BeZd42zQkLBspyZVk3Zsy9eNY",
  "key37": "2qYu1cnzPtNDLb8tY8HuEb6evR5j29Pwedyzv7bUEwrDRsjTpzW4aG92EAxGgfS54AceGMYfP75txgpq8Wmu7eTL",
  "key38": "2js4p6MRF13s5RMXdqcUKq5KPDXGUnSGZ8vzWgwXRBT8TjbFPCwZws45pJ6KyuqVtFZY7DAcwv2FJWGuQCoUWDXY",
  "key39": "5bcB6qKWpQ2HnGncDvFNZ8FtUHXx4QoM2hE89Ho3QhwQBHczGJoneHvzMStR4EEu11affLRetz9SRXpnB4VddsdF",
  "key40": "4vAT925MYBUvDNtJmkyi9djb1q9A94q2iSmLkrLP22hx859JqDXMJVFvD1H6EnpaWiEWRzZ39Ezwyu7XXxFKEmhf",
  "key41": "3AsVFf9ScHPKnGDMUZif5aftsmUeoPqacTXboitN6n2ehzNoCLbYXQDJXSxRBZ5jfjsGwpUoyVwc8boQ9euJUdxM",
  "key42": "2fnMCM9BFCMc2nMWdUM3zTNG3bmuGbvZYXn4n62Q2ShxiJkzpoGk3itmdpvUrKN2bEETpHiR9VLAeEFXwTnspi26",
  "key43": "4dgicuN81y2QNdJFbcbke7DuTJtuNpdizsoPjNsubcz8PaFNT54FE9VRTuwRtAiZooXFShLUiyBDvBz4kD3yg1Ld",
  "key44": "5BpjXhDLMDSKVYbbPSDqGPL7yfqQcsBkK3kowi7mpaD8ffDbC4DFYiyh3zoocL4b3NVpxHK4FvRmPn5uDYxsZRhz",
  "key45": "2mfN7rbX5a4aVYitgxEZ5Huw22X5JPeKc1dPJgapfBk1QypmZgP7a3pF3WdFsAdW2uN1PCNimNHmB3F5dnaakpER"
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
