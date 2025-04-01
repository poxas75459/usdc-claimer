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
    "inhFVDUjSg46RgV544HP373crcTutuYr9Feg4ejMxL4nGTQUdVZHW1aWFvDdT194XMsmHGBAByLrNahQyn9GUhg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KFoJTVGfUf9VquomwD1LwMqnfxCmKNdqFmMidgAa3sgqA818VcFyDQ9uvgcWFHvukKLL1yBCgAjmeNVLoHdqbDf",
  "key1": "3Akc17VN8RAi8hGQuhdLWdbjPw3MQbYcJcd3uXT3aUS1txFwDB5LCbj2h8zJvkBAESo8gTFTA9iwi5DMEPygLgB6",
  "key2": "2jSqHGovKBHA9z4pVs5YFhSbtpVGpcnnBp4MJ3bvjWJ23FBy4EydMp5r17Qw9mh3bFSg3W5Wwbfxv48s6xS4Avnc",
  "key3": "3BALFqjtD4j7U4Bj2Nh52axr6aAWcc3D1go1TQngiJvTffuLXaGLkom95obEeED3HFmBk5X7UtP83z3BTQbWGYfr",
  "key4": "3xAromzWAkZfZoFmnfePjRgyLNS1Uvk5cvB7oVBymwRNLD15zfzjXeQNzSpRb9N8DVe2dBFy4nAvosaVjUSqUtSU",
  "key5": "5otK1dS7Q4iYC3cFxPkvSr7HgEtKGa2bb575SvjSrctixFry9gFXz7iuaSNvF5eLaA8cxGgVpoUgTPmE3aXidSJS",
  "key6": "5gZ858Cptx4rBqc3HAZK4Nx9UgxLJe1qVZzbkJyceYZz2frsJVtKtJVTyzTMW5C9nkHDC8TxukXYLfws9u44RWcL",
  "key7": "3oBUjfsuDKAUQaF3ihQpcHaizZ74pXKbhxD1LQZZBZB2nX7FFNp9mD8uZApe4HXukvQmLTSjFxqxzNGfRJYxQQ6n",
  "key8": "Jkyiuvcx7qRZBVx5zNgwcaP8Ak1Lpnatc4B2iYThVCLgpr6NLtUCWaps9bE215DY4d2Wzf6qcSrrQ9N8jS44HCN",
  "key9": "4JjWX82DRrz25Ghcc9xuxgFdhBPhGtBQ9zmeoFfSU1wPn4Ktd38DuWwaxmBS6ghWDB6np7TrQF2Tywq9rgVZjqjP",
  "key10": "63ca5B1Pxfv6Madona9SduaQPG9YBa6Fgpr2efW6bMx4vEAgsFh89XLVPBBuvxHAMBGeRJQmnErbfxcRCXRSNmpc",
  "key11": "4Kffx7JPoJtQxFrs3Ef9PXZJV6Fds8WQ9oCMfjUxaoxEbEwWbbMUrJ6LmwB5voVkG3MubwrcLkhdvEu1cJWo4z2g",
  "key12": "5WsTRhT3Vd6SeTTvnTeVUbSGh8yTukH8AqfdN8M4yBU7SAd1vEM5jLbMNchvevvLc1Hxc7i1Lz2T9dsV134DFqgo",
  "key13": "6cGPPQUHHRtRP88DTPaNhvwXSpXendQNzAeDXcdxMxT7Z8ExnU4BTAYP3ieS96WjSWTUzFPxDccPwagYJTjv3QG",
  "key14": "42XWMf4QNhqXUY8VEjMMDaxdxvatk2WyvNZKSavXQoth2Y3n4F5RPixJVSFXEKVRgYYD3E5Y8AZA4uNM4XVhYhev",
  "key15": "3bpVkdzpZkgWWtDivFgL6HkSQ6Ks6UX3uTpHSyir7VTeL7FJ2Cc4c7GUG2jcBe1JFYfHhLMuyFgnZK8sBd6AwWJv",
  "key16": "TwQANf8XTPztmPrfWvdGeUU7gDkNdXuJNJYnXvnHEtJ9dN71eYps2cWexemELd4iy7FvjjtWXA1NW7vQesrfReh",
  "key17": "58JQWFtcQwviD3KeQYJm6mWam7DnEhJh1FoGjDn8GUYVAwwuthdHSE1NYfB4ArpR2hJL2XwjuUdHchpEvJPFNE2V",
  "key18": "SwbrGa552XFXZfda4DZnTtc6QcbWpxSXtGDEr1VdgxCRqjosPFHJNoX534Yj595pB4MakTcBsr7s7JJXBG1Gbqx",
  "key19": "2f1tJA9ay9CiKch1ceKvYnL5xttoTBbqVjSiGx3MRifP3jd3FsnWSc5qeVsj56e1qQTVKfWYX5apo2G9zLT2HUri",
  "key20": "2Tw68Y8xg6nkBaAZzTn5Ufc3767SioApYFsgodxZojPkJJU1A4cugCAoMT4Gx1k91ASgfNkfB6tC71ysMVjZLSpu",
  "key21": "rfgH2AojoCuckFTGbc9GENWbD7A7141DKi2MZXy2iC8aczdmSGPdP2GmLuDLHAiPvk8quJazSTEQ1D2JameXb8s",
  "key22": "28aToa8Akknjhie4nPpFSRtkUFWfnu5DDUxVZ6szYs5C2QLJeR4h3LJS1gW6HUAjrmfBoZk9tAZqt5JEE8C2fxQ8",
  "key23": "5DGErKBkAYM6fafgVqFigiFNag4DdRGKdWZo2znJ3C2TvEfZaAJWXPCdqxDQuMEdCJq3NRF4ehyQwYetRbN3CKG",
  "key24": "37kYNs75DWNGbQxkRbcmW1L3QpNZwgSAoFn5ZPSxhZETTj49LfiMp2LBHqDEY8mwp9sN7oeeZriVJeQK22cofJC7",
  "key25": "66htK8T2dwTZepPWohyRqKxBkpztQ5RbabYt3JE17A5UHpbwy8sFSswXAz3A8kkSo8o1tG1BPb1GfB8nfeUTy1ac",
  "key26": "55UqUoZYRfmrfffnPLCU57AtpbCvdoBaFGf4y5fBZk4QZS2WV4TXdVmf4D8ZfSjCcJoBxit5N6HP8pRjXbZTUJCW",
  "key27": "5JpckPaZojYFCHchVSgbp44UzAbBLyfCSMsEXtGTxKn4nncEFJ96niTVv71L65go7yLyZMK6HUzX1BezokdPesqm",
  "key28": "3NPaPg7sTSyq4rcr8F6MkuKfqZKuFESzUHv29M986VnSuseobdrj29zqZqkoqGwMSXrgv8ZrEA8vbpDKVkrJBncE",
  "key29": "s7QoPbK8GpQZvEBbBRztcfcy2RbAdyZobiE5ReaFknB8m4FVKHrY2XG4CpzJDmKP6ZnpvyNEpBnBkQQCT8RucEd",
  "key30": "4BEeHpEur7Vb96MXePyAiZbWTNsmR2PtbNKVMauTNC3doXZMJ54yhvhJ639MPyUHNgppj23ehjYpz39GM9TgZzeD",
  "key31": "2yE7sygEb7StjHWMRD3QCUGUL8ATBMTjorGcaKb2G9ameHhvqKDvWUjDTGqsqXaoZweCPCZVRW1trDQzrTcrg19m",
  "key32": "3xS3iGtygSWfyqdXznAdH1MysAEKAWYAYGBCYBZBR9vYD6N5cXsQivTP3ES31bCLZFp6SBVSTP4GfuGGAjhLohk5",
  "key33": "7Bf9JfGeRKxKzMjHMPX3dKC7hB4ytejqSaKmSKQtzBWycMFhBPzpBfsiJb5mFxbgHM6BfdBSs5AJ67pZB7LPYpA",
  "key34": "361GNMsQuaHAeRFxq3J2CAmmqjXM1KNMF2WBro4SWmVZ3xhdxJTcwKJEX8ZBeYmUk8vCxQRM6k6k977TSumy7Q2n",
  "key35": "4VxnNBYcUpczYeAFJwrW1nxkSgY7wNGkmaBx6bPnrqaMqotkbHPZDcxPJmi2LE2i6rGgaGXU13585uyNsKP5vcgQ",
  "key36": "4qhEY5oPm4RmKR7XfmxNturwFwQPQsGiyJBR7zPTx7q8HjLsQpyhBVfGztz6kmJDwarP1Z7WZNAecpSQQT18CL4h",
  "key37": "E9rBe5b1bBS7hCgWqUsGL2tXyTypidkmWaBrZxe4JzTdz31TdMxEA4w6fY17pBBb8Q1Va2FgWGvT5c6VD9sZJVU",
  "key38": "56qq3UeVxbgZCpPwLqZUWjTmfqDE26JtYuVeuJtHPH6YmVqURATKPsx4QLiqnhuNk18icuz6m5g9GJvhGbgfHwvv"
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
