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
    "z5MyuCsX8Gzzw8ETh1bVR6vJMhkpWJxmoNGuN3xMhfwguA419qdQwwGZ635M6JZfrUrErKgL8NkfUxNpzG28654"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28AJdaovZsCBkDi9GykXtYExtw9P9Ch8vhhzPCZgZ9NQhnUKQxfzxeTeiRHbGiFkpPFCUwErJywcTmrEYm2vSETL",
  "key1": "5MqRKof99N8sigcFYUmshdA6Q8B7QVH7tKDJFXHa68XCJjyjqRewBRGotK4nSpcxiJ4CwNsDbVW72p9fgx59F9Tz",
  "key2": "YjJrkjPm9w1eGbtqA1CmJFFU2vW7eZoJZox5biPSuyWKooaduz26JLFM4oF5vTBJtjggb57eXFs1RHGnxrnbES4",
  "key3": "2H89rDoy78UTUGetGvaQhJqkCy3xura1DJvLurhpbmHyyUP5qu8Km5g1JvVN4ERQtUmSN2pTiWehbdD9f9qKUjBv",
  "key4": "qL6A46ad8JoJWYrwuEonmJ3HpFQqgGWNJ4pXiC7EyZLevrK8Mtfqng3zk9zWY4LXPP2Teu3siKtCt6W8adicKa7",
  "key5": "2323gnJ8vf8AgW1fRdjz4cVHCB371A7BeY2qKMGNPquNBuUGr2FLPeQ8htfzh6oaH1xLEa24HQULxBA6cLYN4oGB",
  "key6": "5zrB9kgNHVNdm8g2LbFKXgJwtCDpARogRnhECR6pg7WAhBCgaZtUSUjkNhfj8t1HjP9A12xerDm1YcwtW4rnF286",
  "key7": "5eUWXFwnPkVU6R822CqAaas5guGrB98xBSX1HZLPnA98YE2rh8LnGB4KwLM5Qqn9LPZwE9SpJc151RdFA3R7NkuC",
  "key8": "5W9Ca1KP2Umj3UvS4q9TS5tUrtMBLSAEY64gpN7R3nY5Uiy7UvsrnUHFoEcmFDnkcug2tr65Fnzkd97NiJv3ioFx",
  "key9": "Ec2hvJVUoFGPJmgZKtGp9kW5XA9qxJmjJMu2qEijhmMiDxmjZEJ7FhCmvi6aWngMLPRtp4XpnXynGnqtL6vihN2",
  "key10": "5MN99vjLehY37eRqiGdRvUU98qqP95jxKSB4XYbyKw48Zc4CiURJdCE5YdnPsKJ1wbxieomrLycKN3YJY3hZDhe1",
  "key11": "4WyKHxyb6YwnR2ra5aSkYhpT31WqqgCQwJrgwf56BSfc6nECd3cr6uPCo1oNaXqMKaT9N42wYPTEr1GeH4vdVjz4",
  "key12": "5kRRtMBH1JVaWgkoSbPcndHrrCQtqYsdmMS37ShUicyq8TKWX4QMET26eTJxZtdZav4WEUZqwxPXXFbQgt7m2FDc",
  "key13": "5PpQC7BchCgLJ47LhGUuZnqtGQ7v8JA3ivCzKvv23p4swpZBKSoVP4S1235bpn4UdV6hyTq6Ec1Yj62Kybe62Zcz",
  "key14": "5wJ7sZ8eWacMA3s8kk7mXS9XGUWYkHYnaSSrjtbXBWRk7d68JXHhhVAXxAsFG1W5xrjyfZyntSVddKhXVMdU8sAX",
  "key15": "D6orusPiSxrqHJnbtEFLLCuEkaozdgtAj1NejKRqAwtSnyPuZBe9r7CUdEd85mQe7rdbEToj5s5F5RjpN6ndYh7",
  "key16": "2EG6s5vdLetBBZKHnWYZ7h3cy6tuwWKg5dnFrHVU7c46NdZxRwTrDWe25qv2stvnp343XCrvNSuBY8S8nP5bbF8L",
  "key17": "HxZngLpSeQ5kZPknvsB3NNSfoHw5D4C3bdwgYMDeC1Z9ocpS2EstdgJbmYRRhJUA5gLeVMwfwFsue3sF2oq4c2d",
  "key18": "4Dqr1ARCejHiLvEZRKdVmFp9PmBAnFku7336WEDEqiBo4x7mtnEcZcHUrxHJ5CSVPp5VYLeYQ9CztLDPYhdeUU6e",
  "key19": "5crT2zdYMuYA8LNhSi2nKm2jCuHYXKPmBPQnS39gGJ8GcHRNHD95gNrauXGZKk9UVkdAkBt8HVP74iwPBbfeG1Zp",
  "key20": "4tfYmdEfaZn4PVJ2sZXQCFkwwKAgqM3t6WSQeyhxpbyoe9nCnNsPAgriWCSZc8kYw1Ka1uDBLKhKPugmuacFTz33",
  "key21": "3wmrAoqnDjcbMx5a7XJ7MN9ncgovsLL7ctUNumeWMji449Q63ZHyk2a3tSEpQXTKDDpcJtyLtH6kSepwrWxNHChF",
  "key22": "2ZxdnWTNcCK3ENgVU6Ndwqpo7Nyu3rBhH9Gjpd2nvnsNdQaaCUqBNiEJGLzfx869yKww4M1zAY3CqjCg8YdpWtGd",
  "key23": "2nKwyxqsutS7kYLmYbNxJsBn7dzi31crz4BGArusHCQYUs1dWNvfhiCbmcUJnsjw3Zan3XCmeccvLA6tezgZJsg",
  "key24": "2d9NDs1vZiqfYXRX2EXvzACXDrP15XV4e9z2UFjhKWr2r47dfGFnoA9NDU7NMTxLsBufPFdbeCKr79taJkB98165",
  "key25": "3ZwJ7h3nyY4AbYrpmw3DUWFKSqxFv1qVWznRXh9m7XkXLvd2qbtgNEUbWKfswoB9c2ficTh1WnrXwkt4GMegSpoy",
  "key26": "3rrmYWXE88YJMkNngPgpneuQZaLuFrfCAw9Zqz5bihXPhJwm6ENWNfg2SvpZacAuPdR6kxHCRMsya7ay8od8DjVR",
  "key27": "3giKBsA6ns9VHfzWrH4DY4AuKRAjU3iF8jmgHxgvbPDJBVBs9SVfP3FWcomYu7tWV8GuGsGegBApZQkHnazuyxWn",
  "key28": "1iCbF9Sxdgwv3dYPSWK41JQSCGB334r4HkWYUmDGLdnxZgAUepuxRg626K5pDNVoG1LJAkjeQTqgwa1u7DQAszP",
  "key29": "5GQkjgGzmE55Ae6HY3XUXDEcjsRkdVxUud1PHz1JfpUHPs2Sby542CcMfX2a3cWN6NdyA11qPRuoD6teALGszEtX",
  "key30": "2wuQ6BwQXG1FZUjLdQUdi3UFqk77GbQ6EtYgjJHnF28RiSxQmz6951im5sfFZ4sS2fJH2swvgiRwu7w4TpsQG22C",
  "key31": "Fy2b8hgRG4oGeGf64aQUXF1EW9hLgtN4aKE1JWDu9TyyiZdS3kdQAwk9HJuJTpx3u7aeryge57FVUSpHcKwEYUR",
  "key32": "3rw2JnFzCiEEmuJ8kxoPmwcbLYuRpHCehTGkuSfWkBuHABRJjEu7L5iEJ48oTWwVM3E9ALKzphzDVGxeMrmuuE2T",
  "key33": "mnBcd6DHsPWQR45TywQNBJfkrpj2C9ThzB5ePQwYs35ZGm5FAowPnuH9MFry6a3WNgKBAUFtbb6Tu173gyRnQga",
  "key34": "2uJwwDHAXGzGskVVq7Udna3tyNpj7FaSgTsQ7hbwFA2L1ri2QbzFofacGUP8wgk6dR8PbuXbpk2LARDsEbpA2hVt",
  "key35": "3gbpxhuj49eKgXKUmgf3E7dMBGLyGuVdY3G8PCq814kf7WwKCpfgBq2KgbHwXYNz9GGnLKuQnkAwJdtG8sz7DFtD",
  "key36": "5cd295s6bcgeMuiw2nxSuvweXJsZjdA7mKxw6D4pQsxB1NArTnjwjt7CDCmFvE1ZLVcc4XMpTw7kRb4c2gQ6ZiMv",
  "key37": "4PfP8U4EB1xWtSqYBM4TPGqmrQK8tdSHpLymcWC1mq5Q3whEPsX6H5ZVzjLpj32FCkbymuBnSNBRSwZGbipUTdb",
  "key38": "RRPe138Z3f7QfzB6R3to9urwY1SEMyc7CoHs2VgJmyYsPKqnKV4wWFkWBTiPhfERjN5MsnPRzPiu376nVFYhJEM",
  "key39": "5i1rddW4RDDMmCWeSGTwLNoQSkwurNj2CfWxyZdbSPG9a7bNyo8vjNdGtJJ4AuBmHzR2Mpxe66bt2LwnvKgVhm4b",
  "key40": "3458LY7WJaVtbPZUeNJqLC9tGwcAqkQqwQBiBt8boUA8JMWUm4fvVrvgnQY1hp7zFK72JDcHHLJEbmLnu9UJpq8E",
  "key41": "5P55Hxv551TUzJFbs3QTemL6RJi1RTVYJM498SkuQqDcdEzatL39fJNqv6U9U1DcKGGENmoN9mmbpTgJaPx2rbRW",
  "key42": "tCDJ6C7uKCZkrEdiEcrr9L3h8DEKPpBbrxg4tkmwXTonigPfshWsa6QTTqRDCut3EfSqeWyEvWq1z9ZCEue5CRN",
  "key43": "219zHBkVhZWzh3hEqhPvQ5YAUwdEkaKfLtBPk8DoGkLuD2umut1bomJiqBZpWLsU5wJVhPZmbX2xMrUZ8NSG9Ry5",
  "key44": "4Sb443b6D9V114MmHqfxB96evmPKrK1p4cS3FrPbtfV1obEz7uM1SqU9ahRiYdWgiG6Yab6nDR9fY6V1QpTtcBLt",
  "key45": "4QGKCmVZ6Df4sywiLvD6xBCJkTiHzw2ivJnwJc5ejyJvitoaJWxPSSwWRSgMqVHCcregqXiPeBnNb2QzN49xtaP4",
  "key46": "2H68Y3NdS6fgoC5p1DZtzLcWgUWCD55EbvYe5BHYRCaVP7cC3trpNxPdkasXPegYWCvC6a2ozRoY6R9qQMpW8k2e",
  "key47": "4YSkYDjD5EDhomN4E2M8GUmQb3xNA1jhXX76oSvDoMQDFYUMHj51T3FYAkzKx5HU1emaHzbAchZeHELfXtoMhsVJ"
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
