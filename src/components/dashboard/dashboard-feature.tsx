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
    "NNihEg9UnJBvnSNUrLycCNVbTayQbbHXe4KdTZ8YzidrxFrNVkNCjg4bSPq9rmKaTab7FiL3HWVKBYSvKyiRSgy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NL5k7ZMZKifBKWerPyhjbMqZC9oLasi24jH6siaaKHivGjG44exdyzEKmUwAKh59BDaZx6cV6zbUF2ppZpDUV5X",
  "key1": "2X1woD1RpPmEFZfRqfa1ucbRQ54zu7wMGQCb69yFiHNQR6pXGPLLZ2EsU6NZ545pAB7CRzdrxKRQwTviaibYpuuE",
  "key2": "5tm29RRJG5SX27NefuN6DT6jBBNeRdqHfjxTTffAZGakGfQiPZXn2hzqWnLEMiWXCYFKSYnKY4BapGvpMTrhmV4s",
  "key3": "2RJbejupbFcNt68saAJ5jnGisZhsEc16DFuchEcvX1FoF8MbgRwWYJHoQLZwAzA5MGs4JiLRSkLvk6tadS9EZRSW",
  "key4": "4VhmDNcnjriLQV9dSH2jY1A9xksoCWsmRdrfU7xSVA9wkNKRN5CuhChDyE4PhLBhNkvdbjVGCDMZ8P7CcndhCAEy",
  "key5": "2LoJhFKEGaGwY1FdVow7FhRp5xD7DntEMN9no3sA6esgYLHkV8HnerJ9G3rppdogfRTFiinJ1z9eLZAxqVBn96Ge",
  "key6": "2rt9EwWC7jM2jPgf8K4NY3FrFKDsVgvaWEraMSBwe3sMb4pqZZvdimYu6KWtQ3tL8PW44CEAtjmcdJ3rxM9dbVpq",
  "key7": "436K9PjfNKhWHem4nBU7Sms1ZZFrYNmb4GQZqbDeuudYw74sgz3DfesG5bi3Fju2ozjJCTGRdYXEurmzvrxvafxM",
  "key8": "5dXzcUJM9mrzKTGqbJnxDPJY9E1ANKJnSnMHEBugQYZ8SpELYpVTiRw7aFQaukq9L8i61hsbb3tR6eai5rDsRDmB",
  "key9": "4mCFKoiL1pjAkHQAHndHWobrHoQGQfvqkHre5m1mg7jC3uc35q49Q4HQmraw14HTNUnN2QKggzpU9tS7RBo1BFaH",
  "key10": "KgBpyeDmapReWn5kKbygV6qdDwyr6KkQXvg1ZnvwtY6kchGukzs2f6Srej5weYrDCM65549NXNgENjr4iDxsMb7",
  "key11": "5gL68GHS3Jqmy2t2BrGZviJohyk3qx2oScKK7qBh4mg3hgqZ5G5kbAK63XQLNeR94HsWtQ9w8b8qra4gsksN5oJT",
  "key12": "2ie3BsaV8mYrPs9VTpLSDaZ4Zuuc7LuhwtTn2eB6XG8uLQJEP26GsobPyAo29K61BbB2LG8fDunnhcPuc7AfJnbr",
  "key13": "61sdJXcDS52PySL4FtKQTFoGSwUtEeodz9vAtXJiAALsBhcgeCTtWR1vFLA54pyZvqDZ7kRxaXuYz51zVNfGy47s",
  "key14": "yDyxHcraTRQvyHdjtKsjBxNPNhS7RjrNgGqeMaw9QQ9Kk7dFSw8vCZ4bTMGBPuW4gSTmeW1Lzxm6HrrogLPfH98",
  "key15": "4K8opfS1HHXtM2dNSDBnAfsdQuFQqvngHF7fxYLCfbhb6KamzBa2Rg3Y7m2TeLUQBWK5ZfUr3mQkSJgfV34rW7Ch",
  "key16": "2WHBpefWBhNoPvVYNnnTEsjRSHfgQcRaEZrXQvemPPa51uE7TmRMA2EYtMUooYxmnDAtKEMuHB4tCqqVdLLtJJWd",
  "key17": "28cEcCfxRC9sRuZ6AXS3SKGACtBbfknAYNuXxBs8EBtqnGGv76Wa8EaPZagNYmSePEBnPGJK1yDAVWmzjxmfVdRG",
  "key18": "3w7cxsU6e5gAcnJU1VJuGfJ8BJ3rihnAAWMaP3UdNGYfNXSgdAm678ChobgRTM5xRUAfm1B6NTH63mb8bbBLBWX5",
  "key19": "31W7x7dun7eNbxYug1LoCjjRHTqNpHSaBw5Xst6Y2hbx7FEKwkzwWeehMXvxtMVjBtBUWKS992aZ1ao2nqbiCw1Y",
  "key20": "5ahV76MrosanWwbABW6Zn44PqyyWhAAgSwuquzzNNAp8t8tAMrvom3RgvxxSQQ8W1NjMSmf6yU7kgTHAMYQSLDUx",
  "key21": "AkXmpqzXZsunsbVqqmpsvdwBK4XktXWsUkdkp2DWBokToy8EdTAK2c6PvLVsaQB5KgwX8DjW6Vrxy7MN8aaTKBp",
  "key22": "rmgkdKrH5ZeQxuBQSJXzdYw5wtrP2u5dkbDKiYHg7G5r5DsjZ1hVx3bGUqkUGRHr4aAkkD69Y9CxuLo2aapAqC1",
  "key23": "4iPmxoEJo3TdKX1hnLqDfcmscpqPQe7djWBavtwD5u92n4vNW9fu31aiZgbWJSQwQtFg9JTsxWf8FmonDF6zwMt2",
  "key24": "2nXpLyksc2kkp53oAErRGFz375bZbd8um8V9PfdFoXpmGgBMeSFmrBWo8HbhayeNU4G2bLJ9joBmd3WzePcS27Mz",
  "key25": "59VTwBBbkX5SuEEZ1wGXYkKnc3BCXWGbUB3tPpNAYxd69Y5g94otPnXYnP6RmNbq7CCmCuW4EP6babMH2eoMdhk",
  "key26": "3oGM7GGbuZm53Ntgb1eK5kW4v3fm3FyAdH7QFTnfRrRCdybsgdruq99w2Ajbqf3JJXHsLzba8RYWyUaspkEGHMXq",
  "key27": "5Ckmf2uAjWgkVPjcx9X3H7jcXQZJxUhT4cn11dav9jSZ9M9znKEsiaQSTZvThwu5nu5NjnDZ6QrvsLTS71ZPVb6f",
  "key28": "5Xi3bRtJFGHC5MdCZowfb6ycBERiUVA1HdZjmyjjLiZLLn9LR9D8BmJW8kPF2o8JSAUPUFZS5q4W6h8CJTHWM85F",
  "key29": "2RWmx9eBP7DH4bAN9wNPbMkEiUdYvRJGws1CVitGFA3vEJNCsT8VR1JnDwX2HFQ4n1MwYU31Z13kEnJerTavpRWc",
  "key30": "5wh2JUb7nwtbFHmgD4p8XXKa3iDw6voMTGHYbRAvcAUrX15umBr4foy1ug4kei8TmCQUykDN2J4UeGmaJXtnt9xG",
  "key31": "5Nxi48CYRxWFYEwGaFRZ2B6Q3kmZBaWtqkt8vcvkqEUgbdGsqwbAvaFCpDYUqhdSyahUg3GecXTwMLV4bjV8Cscu",
  "key32": "5iUM2ncpyDJTEzX2sUnW7F1RnC42ooaEVkyPAMeaZM3dksg1WJszxq4dwvCwHsVK7f133ZHuunTA1QWUuoDRZvtS",
  "key33": "5nrk5ZCPFQej4torTFnYfehtD6U8kSCn8m2jGiKGnQKRVphMHpMWq4tHktmDjFH4QmR1W3F2jzU1N2JxuauixZG4",
  "key34": "sZc45jMhoxmBaqWWu1aFkMdfEGxK4kYtUhTWxcT2fyUCEAmesbaAPVcriztqhnnLKaW95AG8234soSjDJVP1j2h",
  "key35": "5La26619bbTJUHns7GjrsoPWg4VJriEvgmX58vWqgixjEamutmeoQ6NacAFiuirUsSSaKsUHtWtZzKAJbYYrUx23",
  "key36": "5AATvaYnT3rJkWKrw1KhrmGFycoGXbeth3PY5aV9PLGeZmN5X7VNe7xU65roavdb3JgC6crUP4xSHnkeyuyQosZ6",
  "key37": "5CV3wQhg1rc9c6oeGkUKC5TzMDkCihDQDbpRUKkq21qVT2b19Bt6uAbw6BsbmfVB11uBNH1Zpx3R8FWiSicwP2YH",
  "key38": "5BcnyVvAAVFX1R34C31Dxp2WNYp42kqATjUet3aSnptkRVPYJgwSiUoXHV6xnn7ff2JaqPtVL8JquJBszAgV2wX3",
  "key39": "4CAjUjXi4DNTEjJJaj4jNn3dkTLNjF8yTPvaP9cn3Xx59g2keUZBRg24HgFzkUzvSmiCjeCvW3Bd84acksA8RSas",
  "key40": "2cimbjQvFGnrYwxpPdoGMzCYcDdLfy9nkoqDQgH5Lk1L6xvzPB8iocXrAT9jfrzA6it3eBNMrHPf8rqZws2MUPQT",
  "key41": "mFHvTAvZqXQw1PZoGio72gDC2NtFm8FhXyELS3nh9H7x2YuJkQBtegDqwxjwsypGAbE1dkLDafKDYYEjAL55bbd",
  "key42": "4nvNG3opz2dZK5NsppkFawwPteqDYBpczfdjJXuW11sCkd4EB79Ukaku7Utkt2bEnBs9AA6fcU16vhMMMyHQbra2",
  "key43": "4Z3CBtSzpMdCBYb3VB9ABahuY6Ue8FYtSdChLFbgTun7XUZ1wxsU2FSCkqqyCLbLfQoXvKwp8tqfthNUe4Fec7d2",
  "key44": "3hXENUYa3VaMor3TRQNcX9GXfrxnnaWV3Cntp61bVgA59ps4mWjLNwZ2u7FUJzPEnjA6JHMeiFbetzoJPcBvbt4A",
  "key45": "3E3G22FB8ANA4EnkZWWm8QfwYVsxY9y9xnig2W7V9AWtRPEJwV9znzDMYhMHVZ188ToSaqFGQKb25SC9gd7x5qsx"
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
