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
    "qbza4k8M5L7EcSssUWSceNHqip22p3ftR4URH2ATLqSKaW9YhJUHGpTkkn82jDg4Nt3kHBuvPGRngpS3tHhQCNR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jZGRrTybcVvBz2JxtQptuRCqky1W9cpJqp4UthcQFYUrhcnCjzY5nqp9B6Q2TYXUmDWp2EJJqzaLPJFnJmiGM9y",
  "key1": "pk74gtaH4i7pY5BGMjUKEfsgyBoiSc6HZQTTxqZ6DJEJjvfpMS9gBmQYymKzXdJ9yJutnCkuKNFQZVSWmtaGi4h",
  "key2": "3gFa2KnDBqpbBCAzXPutAhTk7ZtCV6crv2CqqcgVnc6qim417ECoNFHdmbD9ZNftU1s6DbdYs3xsNL3NqUba1Ewz",
  "key3": "FUbzGjJs4hmPVTmCmps6FSuej8jWpdHsCbb6qeT2kDmxpy1EVEyK7y963XnWh5hiRacw5KWNBBXNpHEueE6PBWp",
  "key4": "3bm3qYgLKgTwVY31aVJnSXJzXZ2BGhYqjmZCWRs9uYDEyhbt2Wcp2DVfcYPTkty36jz4zPZYNBChHjMVvtQu6Tz8",
  "key5": "3uviFM9fNk38n1NHgQr1hVXwZFng4gZ9k1WLNiLCZcHoGbrJgCM8dUtPWWc2xBmBuGz76FebddeNAvVYn1QPV4FL",
  "key6": "4CkugDHyhmuWSz1NG9PTDSyWv7WN32nWdoLEn5FSqgG81VgQkEqJFxvvmJoMTMQqrCGnBaiNv2fSWd2JSKQT12pb",
  "key7": "5BQxGGANNTeNG2HiDLjiHvr1d4dda7piu1WE5DBWwSMYyx9Tc4BckUm5SwpZrfXd9snyXVGsDbN3iM7a6NjNdiGv",
  "key8": "ySe9ZpUvSuhLuBk4gJcwerW3qyGDaK6FR1GzEFoksetkc2a8MddURrGeozyxYEPqqppTPASwisXUTYz6K96vsyb",
  "key9": "5o1iWx2wU8oLKpF8idpNkzxoWsGBxi3ugsovSJjjDYh1FELcWy8xL3SUNe6nmujopYCLRLMkL4REddxACHUphk2Z",
  "key10": "3LfdEy6zdm58hmLqquoHcmBfvvWeb3Cn39sYUiYkrXd9THJDtvUeSunSKHWwawcASymizZRQfVdPKXNraVg3ieoJ",
  "key11": "5L9MssHE7CcnQfPCzFNtRaZRSHchj47xd2hpFfq4bADotqw771NC5CQYrAf3PyZpdM86LSHnUku9tCUfQkneXTXn",
  "key12": "kTzMbuW1EVW2HgqCQgevbWbLH4CrwWucHhtBFFARFitZYk4qetAdw5g4wk8yoyAkh31BFS9t6v9QMKE5GCUJVdY",
  "key13": "5fBdAjWRXMEewRHBgmG6Cq7HLdsAZmHzmRP6ULUHJTiJAjVU2hGvtL7LMotNubCCmHeu4V3FkPiC2zdNsdbrxRD3",
  "key14": "2q3PM9R17QUn5nSNhbrmcEwbjYofxkRXbosmouZjGuFG7FuT6J2xyY11yXhLQ6gnnwRZe9xvASAYoWAVDXLj3ZQ1",
  "key15": "2Gc7GLB9oo9Kv1UhcVbiaotUyjg6chT43QdXX89TZ6bHxTs9fio1psRZj4brBh3LVxeUHkWSTRpeYZUUAwgkgQJL",
  "key16": "3ETchiTJPrRupFsF8DMyFNMWyBG1cAVQ7UMKG59vPPnepBZSbVttMLZSRFR8run1idwjgiN9K6RXS9JtpyUYHTeM",
  "key17": "5G8SWcvDdLMKTPruKNBZgjMPKrk2CYThUQNbm2wQbCqLNjTVtwLfgSBRt8LA5gGXKiZ59gm36EyfokrBg367UhbF",
  "key18": "5F4hRzbHotWJayez2d7RHwNF4TrL5WeZVvkuJiY2YCiyeWYgGKTteQLA6TrtavVMw65JNWccbvhARhMfLsZdvXpg",
  "key19": "2Dqj4LWPEWgRPpjzNrjAcEBiNUAJ8A2sc9N9A3RE7CQGcHh47zHsrs7wJWK3WsM2RajgvrJ6D8boBJVxGTDbsJtn",
  "key20": "WWgGXdsUpM2pQJL6nx6X2iJzvTi5BdFxpwA6rBGgu3pxcpzhj4T2sGtHgiSz6s1xydRymFk3VsHPWLi9Dm9BdoW",
  "key21": "jPmcevcnXHBw4LMtd29Pt1tHqiqbuboqiiVPYAUWTXu1xH75rpdYMLbVcwTgHjfaaFEN5aqaPVqgbpufjhV8Who",
  "key22": "3T6UA28zX1afjJUXPBzk36ijLrfW5jfR6QZNzmKMPt9AhyLnn3jPviFcrSeGoX16QEg9hiWeZ6XygkXRf8RqjG82",
  "key23": "4qTGN2BTTJGNq9bmRHYFsaM7cHtXw6ATsb2mx9upqu7UgnkGg73CKTX6GFMkrftxEEc26qH46YUDvV9fF5bJytWa",
  "key24": "2Z624p4urRY1DvMiwYigw1Hdh4uGzMLVUfxXCUKyzHXq4i9TNJmZmib8TiqwA1zfzMikJoQARqHbiYC1xnkC73yZ",
  "key25": "5gJC9dKsv6DE4AAEckF6XpGB3tjRoY62xHcRgCduc1vkhyWBCFE5B2CkuTfnKik85775eUyk1GvGNd1eSWDKHcgN",
  "key26": "42oeZG2AWV1GGhkEo7woAE1cq4ZzrXcgHbdtGv8xVrMogVaAoJ4WFfpKDotvHifwFVppaEczVnjYZhkTGt95crXU",
  "key27": "4LisWFuxtqrc2237GbxrejByR2xCPHva6Zc9FFi3tfc8aYcGdPuFP7n9qt1SDwCpuDYa7ZAiDPGKFNJRryRWVo7n",
  "key28": "3PBfjhEDx4sSKQTM9qkFNJX2r5FsVHPnFBGryxCAfQkco7mhpkpjqmu4BdhFVsTj3ymkQuNzRdSxrj2yCetaYRan",
  "key29": "toHemt2pvLpVDPrhKS4QVcf6krsazrzLnJJvRMEHaVFixSQYMR2aKiFGQgztvaWsh6S43gWGD4Fs1wjR6Kk1J7F",
  "key30": "2kdpUBQnXhsykjy7msNEJFJbBBF3v3aLftoWTU5mS8CHEVAv5Ex9zx9B7Ln34s9HTcLWscuhJ5YQdtAg9YfUZ1zT"
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
