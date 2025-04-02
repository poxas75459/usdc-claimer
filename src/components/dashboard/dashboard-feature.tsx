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
    "fwJnqprYBWzEaPqvxNy9SoaLCpAjEc29tJ6vH5XQQF8bJyiTL4xobTzAom72y8cDsDsHbaj5thmHem9jCRyrzYH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XEFWNppupqs5wemB8JkuCYiLn42C1EAmWbBooiXtuxfjKZvyZhRRMo2hhZS1o8F7mN1UEZRBZRmczQ8SBaMPKX8",
  "key1": "2u3xwMe1FBtMeh5YLnwCqaokQYvr1fmRqirwesjexvMt7czmMB1WE35ULpkNpSqgMFTNxbFGEAWFFAND3QNLoUEE",
  "key2": "LVUom7ckJVDnMeyGJhGid7J42wAmtLHEQBt6GmRnT2qBnNGSXZ68fjQWFvBaitWznpNKMBi489NVYANueGaSgkp",
  "key3": "3ae46ayyvKnANbfsZ1cgRFXTDcSbsPxgcWT7CoaAGarWh2qjPRFrDmVQJVnBhzEofW67grVc9SwygcuaKHEb4ygM",
  "key4": "2w4ttPbZRmJw7S9jM6FknDpXHDhbmpZ1SMcY6NB1JZeTMJ5JiGXhvc5afXNgP7AsLxerEcquUCu6EfiJjtkVmBYk",
  "key5": "3AdF7fGExM6Q8LUa8b74QR9mpGtXmAgn7JfZDWbHf4ucLvNg1qwjdPZ8VELnW5ARkknifXZCAakifznzEGzeusYD",
  "key6": "4FgiL1FSJRCbDZjQfGhrD9FbcPoNQrhqGmGy9htHqibimpRr2cto64k8ZJC3ghmRWUGDgVtVWZwETHnJLoSe3XxP",
  "key7": "2UxNQ2iTq4Fud9uAGTGtYRFWpXuAJHBTVBfu8GFjtAcgRtDCR4UZec3q9CmNVqUqpXA5ULhuwkpsjdkYahF999SS",
  "key8": "YPyrXi3Zyx7H65ev8PXiDV6FHdTWXSfdDwiZhceSnMfEvBYBHLLTeoQJwFCxzAgmQDTJWgrsnJqB5g1dBAL7tVr",
  "key9": "4aZwhQFn31DyZuVikuUdTD812Y8RNvKvG457Qvnapt6ceN6izUjpsTnF38y2D4q6f2vbkfKVg2BX6Xt2KB3VZWcj",
  "key10": "4WsZosnwSoWBDUGaPqbBef1aVaawhrnzStC5M6bbCDaQKPAxFMKKZbQU3ppWhbTpaR8QDKR6hvkNmUw53FYvMw83",
  "key11": "5br6VUYaUeuxRX9oTN44C29tW4koshc5WCLmu7BkDEk3bdUeDQacinFpXBSCTX9YUfCm2rqCdJcoa2Sa6ojarh2K",
  "key12": "53r6WLTRBUfp6KrvmFijs7Y6kJUKyuU2WfYSzim9bBwKLHDURA7Tkm88yG85rQDCvo7owgT7xdrZuG1y9dWFXncN",
  "key13": "44PAdK1gvfaLm1eHx8gpvVQKc9VUWRsxcrTmFCFb5e4G5prrtyPinHtevrPVYaJGYQD3kD9YonowHqrvQij2GJXm",
  "key14": "65xNTbxnuEKEceagMn37eQ8R8g5YViphbY6kStzXDZzeWEWcu3r3BSA3RFEz3fvN8f5Wj9ztSTTCQ2GmWnXgw6r5",
  "key15": "5mveK7UTWSX5u1wdhCy2f8wQ97EX19G5BWqZSnQ1nv11foTMqBaCfgD81vsiiHjfrwkDxzTeuxKmVLKDZM9f5prn",
  "key16": "31poE2fwRZAfEhrRSsKyThjxua32mP8YQWX2udNgbSW5Ffgwo9S7y67RmzDGtmSVSNjo9z8pnAhGZVy2tX7jkQZJ",
  "key17": "pgxnS2QhF92g1Z5F5vNAaUk2DxcQ5uyCcW5tD3bs21miqzfiEwN7Arj4cLHCc27MPy4E7kVseccQ2BMMzVg41K3",
  "key18": "4WbVxzFPAQwDRkbKyU7qzQydfTQDEHCLTbcXWbRuUKpufRTGyAHaXP4iWdaMVzQQcRPM7uZyYMHuJY4swCgUJzZt",
  "key19": "4kPEMiSxrunkGXDJ26EHiHpSSHkevEwvX9gzQKrB6DS49KSHV62Au5sW7kShDoiQXMBxVjhMPNRap2nqLPtSqxTf",
  "key20": "2Rmjwmt1Kx7GTjygJKy9biW8JkEgiE8guAThtwS5zJWjvUpzdYv7ChapyoyQHWBQgDmmsLSbkZP8qtjh719SE8Hg",
  "key21": "K3NXkSuaXX9zLkuCxZX7R9G8KKppxUDJMB8fn9d9MywLgLbWhVkh732crS96Uhd8nfiahbVggoFh9yhMcFjSR1z",
  "key22": "5boUwPJbVJYBvSuvLQYPsamkJBLL9NnX81GhC4rR3q4UmK1vyjetjsmSYNk5AWxUvWG39ZPZqwbxGNoG8PZDi1N6",
  "key23": "31iH6Y1LbZSXWu9DRdjRif8S53snYJ9P8Nk9omVpU47KSVWJdLRjzvjkoQCw7RSnBHPt2NF629kaHXXLVtovU8vC",
  "key24": "2GBktJJhP5PTMpbwc2ZQUNqCDeCFGURaj8ihHGd7NHf74PxLu1Cz79v88XpnC6wNqczhiciZt29VLzksUmWr9bE6",
  "key25": "13zT7tZgeaD6PmwWVc3P9w5k71DQD6eFfwq9tnGqZX7A1vxqKTLwYkAswfWX6V2Wy7CDcibCuA68h1oc8zZ5BJh",
  "key26": "5yoBfwkGFPQ25ANRP3eiXy1kwGV3gFHbBitir9iNNCTKU2c9yxyJzLR6djipZ6ALvy4bz7G9hX15gFp1GX4R1hqm",
  "key27": "2GpZJvtiF3qhtAA7E9PUDGmVUAzcGLfg7fJHWNBQ5Vy9BqwyT7sbLprcxcn21RVNi7Rnb7EMT3x9wRVrHSkQXhXU",
  "key28": "2kJUcYp56R7o35bux5bXN2iEETRWT9iUYVZRCJKpnHEzrR2ch2wfqAWDEB8SjYsgJ12Mq72RXbe69z8jX3iAxg1L",
  "key29": "33cvTRzZTbN4cpRyZBAZQs3DQ1c3QTXMrsEzXjSXJSbWotoccY5kopf3GbaXto1rqJM9Z2eCJMqbv7b1uHMBnRim",
  "key30": "4dRY74JErsymtMCo6UUgktCVRyT51AWg2hmn6pGswSmmqjYMBuvDM2eVgzQnCs8BSN2b76yU2sHKCFR1UMLs6E8x",
  "key31": "3ssVbeBFrG1UuSEU4H5JwN3iitp1jVQcBGJs9m5bDQCcv8WBzq95E4twkgopSyfodMak8Z8ancqHEtNJpwGYceff",
  "key32": "4NWiZgFeewUt65P1E7y9uaUsQHte5UYyVtXTFTLpwJkrgQh4hyLZrt3AwsfwxzqSh9gcrCEk43ru6qtYPCToH84m",
  "key33": "4oBdvzLvt7DnCdUWaWS83961oYYogP1bUMorSm4WwhE1LGwzbcyGu9okLXTe2SbYPHZanG3JgKujpHVhQe1EhPuR",
  "key34": "4pkiGaG442mA9C8E2VZhmZpUYkysDTHS7XwuabcEqyjkNeoorSirm5E5XzwZJ7UaH2mrKjtm7tE9U1q6rJP8NPkT",
  "key35": "2fCT1nEnQntm8LAVP8B6MXbq6M9SAjveu3Sb8SuJh43ax7qZVkXDpt2hpPKZWndWM4dyLrohKk83QCxhPWCQPY32",
  "key36": "25FigSACU7dtskQA6k7qR1EGCTvA2PRzKXAdGGEwLukGfHcAn1M4t5B8Sc1RBVaPm21ZTqs9j8mcxtdhpuyCYbtj",
  "key37": "2A3LAaQMh2Khh3SwXdoxrzK6ka1rztXKLwPFs5o1Kuy813g972DHxDK6GUFLS6JL2mcHsn5HSjGbgWkRFFXTzAHU",
  "key38": "3AVT34p2J7ZaaeXt4A448shpvYSxbvoWSvJYsZGR9a9kW8fPc4wAEKzNRHMRSEm1jP8zDDVcDNcjj2Gbow81yv88",
  "key39": "3eKWHiCRE7urbvfDny5ZKMBHx387EgRN8iuuKrYGru4pB5mDRp7bogYMNsZTPtaWy7xkNfpSb2uoqnwNtF2SRNYD",
  "key40": "UVSETkvDDWj31PiER1Xc1FY2Ahhk9j2k5v1X3KyuTv3FugraCopsV3xh4zK7rY9WktFhWCAcsUEuc9HR6D3yYvP",
  "key41": "5jXtDzxY2yz5Ri6Gu6VjeLg39iNz7DRJ5Q5bQJzRrmiGnXzEtrLFhHEkzTTqT8QgQtw4wxJJGL1m5j2aJsWAjv6y",
  "key42": "2hjuz5uiexGb1nKiBUUESVM6vS9BZ5WmxPwHuwqeNzEwFXi6jmtBbbvdqv6bzUckWdnd65FrZJkijkcQ63QpXw8z",
  "key43": "VSea8YhfuG96H6GQ6JbdKkh2s8URzztxZxihBAt9c1QyduuAq4aubkDtKk2T3Nwcw6izroEoGpUD88XvPHzBXuS",
  "key44": "4bNQAxedk2R21tzdHkcSKiD4erpnJurZygTpWzG9WdEzPpzHjqzEkK7i7HfXdoJVJuNKNzfpj5x4Vuwy8ypPqpEe",
  "key45": "S8ffFtRQTRBpKGMuTfJ2XEdBN48RFXShcMPExqyCppKoUsUXbrbWRZTNmg1gnDkj3qXNy9JBVAk2sk5PKCsa9hE",
  "key46": "3DTMRm2h6EwLpZA4NR6pdCjnZTzoz3rbDodGHrvRnZzxSCshtUVSLwa84jt6U5nLdQ6P3Dkf5eopD932ujQMu6iV",
  "key47": "5PF9hLTAcUwV9aYvei685rJmikvCR4zxo8mrXHqxzUzAJAA1CRp5sxMZT8e9LXFhSLk1odjYSpa9ePrPec5wgqBo"
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
