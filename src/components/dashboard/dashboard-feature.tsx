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
    "2uMaWcAfsgkdmjetJzM6ydLn9JENxpDFvibtbVeqmaPP8GSZ2k4fmvu5v4ZLGWGkrkYZTG5aZMsb75Ed1cy6vgku"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45w5heaNrE8WsbVZzejUi8vEEWTR67xoYN5EP1iuvjAC7M71Vh6S2U1MurqqAYkE1VMU2FiS7UhyUc2fnyfSE3EU",
  "key1": "2HXWQLoZUpct3ZxfYWpDDNMV8mxBGHeFreb1pAdX6s3Ye8bjjy6iYveXECqYJ23q2TZLubNyuGE7XFeJH54yuq9o",
  "key2": "4SmhMdrvMx4nSc4dMuGobBr1LDFBjFateDxz2uwb8dtZzfYEqYxaHtiHDhX7WgijGEUK546z1haNg5GDQxizRZVP",
  "key3": "3DcRK9eNpGU8sGR1EvSxdvnezDqMm5hFv1SLiNEgEsLWNQTXBogJsnQCEtvW56vXhT4XneVjKTN69tZSAd6mntUy",
  "key4": "4cnCHFwuB9pVMdZT7uU7szSwJFbxdpmvrcanbjUp9dBUuYr2w7oSqPJknw9yXGFxFa4USvdVpBZrnXUnSXU4DNeV",
  "key5": "ETEjdKtm8uBauvNBqtyfpdKR17iMQ9APbhGmN8UbMDQKFBaarnaii9iPsvCp7dGgm2nkdCUEN75XoV2iKNWUBzx",
  "key6": "2fBGNXbTYaAuPvST87yR4SuvVaXg45E2vwvKkP85JQERSaHuVCkjiWpzQ3gRidUizsU5MkH6c3XNsuNcsmhheiav",
  "key7": "562JFBmQawV4G4MpUmPLrV25P9a3vaBBV46xfF9t1tjX5saCYfefFU4XD5A6NMV6m8vqn86xsopS6JT2Rf8Zk8Vt",
  "key8": "4k1fm1hhMMcs2wT1RV38d88xqhzkoLGwFtorpVt8TEMEDiZxGLrcva7b7fjKMEFFJ8jAoE852QRmXFRHZymXq2QF",
  "key9": "PweW4Ke7sAnWf6RgZFAcCeUooHFvDQfjdhBHcbnKVZCus3t3rnUXkdgaLG8eRXpZPmbCjMscR4XVsazuwXDqJNG",
  "key10": "wU1kdmGQEr4h1R1S71D9yim7uhKGnBAaXr1oPrHhrYicJgx4DXXBFV9qxgaCzZGFAAVynYfpiVLM7PAGWYEtTqX",
  "key11": "ZyLKtNxKgGbj1Ba8n3GXmPyVdeA1nuo9td1AN8QKiuUA5KjPka4bBtazPqqcMJL1kAZzLGU9rFtqqjkfcqb6Mkj",
  "key12": "46RdnTPsJU6TZxi4JhRKiS4zcqJGn6hM15xckn3FzgVqdPSBmrYsTQmVg9KaPMD4bZJDiQg8XybShbq6yhUya4Nx",
  "key13": "3MJPX3SNT8yDQHLpE5T3CbAFBiG1Wc9Dy7NUW5LpHmtU3yb3udEipJtKpdcbzufeEjBxXS5e6geJvD4epScanELj",
  "key14": "61L8WFFFXkmndhpbrCqQxwLVAHkwTbUpmwUoFYGewEGH1kVqJfrgPRdnUvrSQFE9Ac8h7AKzJwxLdGdahg4UDnnk",
  "key15": "qns7BN3btDepke49xyNd1GY3iZScMbcyJcHgkW6AZahZzcxUiCgfMtwdhXfV8ykbZEqyswyHWPhaTruvoc5CAX7",
  "key16": "43MqxZLpewKU22N47EzDy522a6JmiGq5xxJSPEgoYzDXmbDegJAjgA61pMJ2ECFHFcs9ig3nx5kUQ8DYQqnBrZVq",
  "key17": "bvTqM3sQhqjavJZoNj9rhfTXFVWfmXiCoZ2s1JdoonKTLny4J12PNz3MDiwmBGtqDNv1BhGUMtsyLH5Eas1KN1N",
  "key18": "28Pt8tFaSyxCGV7J4pTzD5JGcEGAWsp8yLmS9fWHZmwmpkV4kkAZWchtCkBN9PTJfk8xkmMLCwatji5hCgN1bAem",
  "key19": "ogPUAv3BnZYSiwVfaLnMtQeRw6gdUqr9cTNPQQVh8YBc4PQ8bRBT7ChD8kxC5TpibZE8AW6Rt6KM8uEwpaEhXG9",
  "key20": "21ZZkkSgNowMDVCuEoNv27pqKEDxAv79SmT9w1KZeDq3NpqMUHse27oSBuxuXvUzn8YQaskbEnxi69vhmAjZDD2z",
  "key21": "5yxzujBtPYRt44CpCQviDXam3KfK2DJ2ZRgbR6Qfm2VWaeuTwgGQiJjSrbAYD2u4PFrK1Ef5s7k4GeAjvsa1e2JF",
  "key22": "4f3mmZd7qvrMqwXPKtveGBLgkgJ4DvNwr35P17jkpNmj6C9k4ajZk3M5TqaYLe8VpdZMh7amR83cbeJNc9jzSEau",
  "key23": "5jqQzFDp3coeDHSzquAg4yAL3V3s1JNraemcKaCTbEUTCfRZs1eqJiPXJDcz92PDfi3b2x8SBkkGTa7vVFsR92Ac",
  "key24": "itEDUvPuoHdQQoXa1HYaW7tEU6t9PEPzqirt61hs74J4c8GQ6LwuMtV5rS51t7UBqdMis1tgDfghvM6fEiN6CM5",
  "key25": "JVrEYDYYJ7heJvt7NYnihJ7CpiQTQ9AC8fkrEivXkqfhRyGqehLqPqGJTk9HSALvkvqAtQu7tYdGbornwbS45Mq",
  "key26": "Bffb7HjnXLEi21LXoKkjCbicmwPVNjJEHdYd52tumrHy7G5ykKxr4df1yN3DAaXMvGkDYSfzSPtZPvHXcTNWLZd",
  "key27": "5jB67bMn2dvB8Lwwwdqm1LQy7c2Pt9o6rgpeVgtuTkfmz23XJBsLQLMHN7xw4aGYfacedx699wRKgNkN4fhbmU5s",
  "key28": "3BfA3upheuFsRUfFx8VmkYBW6rsD3G9Tk6vNqBAQbPoXS6AECCBp4Uu6aCAQh5MA9X8QvE3dmHoqxAvHvJ86TYgq",
  "key29": "3mvyqbr8cJX3cT72cpPW3F5uUKz8qXSEWCj7GFdy4YxfgAkXkqLTJcfnFUaovAmfA7NmSAmztA9Lo8gfBoVZuhz6",
  "key30": "HBYNbUgs5febSVc5iqkA75bEyBRcqDoi1esvGEbXtF4sqJ4j4e6y4QKY8JmmTLUSo44ojNmVdv8V9YmGy5Cwqgw",
  "key31": "WaEw67aX7NtypPrdvafJKtQKWeSNs6MTiNW9x5V3FzmKAVWZnkVyogykBkfby5kziwbWJ2EfMWkadSKgwHK8hXZ",
  "key32": "h4XdBpCpkv5rkHQZtwrxprjqNeXr4tQaDai9xYb9oviBc6Lk13XEhRKRHs5HtENzqL6atKrZMVSBAwoo41EXiUW",
  "key33": "34KaXoCnRqWE3H7NjE5uuEWcY5WkCvRLiKDqSUfT5D9PeDtemUcwHCbYTE4EFf6r3EjVDv3e1LoSNdf8cY9S1DNt",
  "key34": "5CrouQCgv48WsWBDwd27zDRCgFRKYniLbDPZikHbAWEhqDZUv15eceSdX55hcVqibC12wiGSiwKk7ghFASbps2K7",
  "key35": "3q6Bszw7FDTzt7DgtnHT6wa7Df75AsgZZdaKdvU9YZ474PaPhC4fckvNwaFKUbWF6tUnRHjaFbnecM1nxCHPgLUt",
  "key36": "3r4SK1cZCbUh1HYNH1wyVhqZWf6a8KV9t7n7YvLf9tim4QAvTwsF1FPKkX27J2oBf5uwQkYqsMbH18AcxLGdiX9u",
  "key37": "4kYKKGczq9zb8D6p1Jm2NAE4Ukpz1QRJVmcmjwRbis1ZAYwyfCE2gKq2r9NL6ZA5w3nFjqXgNNZ24qugyLRGHnpH",
  "key38": "64F9hoWuUt2okP7CusrCbYmGawtyBuzuQavrweJs7k6bNwGoCzPJiKQmj2bkcsCPDEJqPSuaAdhMWmpd3cEjPRwX",
  "key39": "2xuPMKT11fhBc9BZWaNjjxi8dzeAR9xZSVfb3m9WpdNkq9GoCz7yPTzriXn53EmuHkxZsdyckMNWXL8JdTJJm6zw",
  "key40": "2VLCARiEReXohaw25wgsbvsCCtFovpZy4dm9ZVMPn6uJ3W7HEt4wFChk2izZ6QF2k5pr8ZHnZW2qjPe8SVDNtXun"
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
