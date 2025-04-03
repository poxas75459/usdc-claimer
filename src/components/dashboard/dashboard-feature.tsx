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
    "2wjcXtK2ggWStmZm7P6fvj2SUifLG2nWnU43U3RJEETCGSzoeEhih3URbFNGYfmYXoDcSnPpJjNKXaZ7SpArr6U5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TVpQzdaVERD562faDtMg4un4yvTi58JahPnDjHmhveqqxenHjLUEnLwTgAymZmYjQeRig5c2UQEF58btEXFxQ5w",
  "key1": "3v7udAbWhdHThFEyaoXJ929CeHSKQ8BXpba54FkxVd5vjRgSd6RCPBKp1PntXvvEZK96tj7NDoXpvW2VtUxK3eKA",
  "key2": "46YKKCE5NztLPFehHhSse2fx1kyueCp3nH86RJHhAUpsxrhJxGBqvGXDmJNRsaMWWMp4A29yE9xknMMkynVevr6X",
  "key3": "3fs6Sv72dYUdAJsPXi3jCdZDjhZVjUe91xLv9vztJ4gX43HJA3yH4TBAHhjge3o5H8zr4o7BQqF3bNrf2fuVJyNQ",
  "key4": "4tDW9d85MczabFc7a1ipJQCQWLSbGhLqj871PyUS8xLh8vTc53ut2E5ro86HjA3jVsXdAd2s2FpKx8zqA4XB21Sv",
  "key5": "5sTfmjtUbY2KxX6pg13omGHzewaZWt7gjmXfK8uwWQ5PS8kuTX8rt4X8TpsXJDv6kjGdvhNBtcP1UX7pcKaVvAea",
  "key6": "3vPJJ7NaC1hXZRxYGLgkpDfuTpvWKMss9R7VmJf2tqViF6Uthw6qyGtHDMiq3ax24vUaSaFiHsD7nZ3E4ugpeduo",
  "key7": "2MTHEuKpbUbLaceTiSsH5Jss5jWinviUVgduw6a2MzU5Mk99URhtxLRz6tQm69UkEK8hn5xDNrNu9fMaiVQjyzgV",
  "key8": "5a6hwr7JqmrHE7NT5w1S3FsSC7PjsYUGsU1br1uEaCFiR1FmYH8qgut8Zu48ef51euUFV63kDUYyoLy3ry1tjD4p",
  "key9": "RXG7hEHwo54SCyGXmpgQNZU1rkECc3rV4Mhev9uKzxsRgXvuRAmFb5nw1rRgHKKRNVoNpAf7CMsfk9yN4S8faic",
  "key10": "3XDbM1hS8m5p1YuUZrvwRkTe2Yvp15p1iTqkUDFt9woeMnqTfPELAskAw8gwYF4pbiCVC28bfYfsghu4NQkXuX1L",
  "key11": "3jmBkZyxXR1v5YSH4PXjXdY4TC14iLiRVM4NukGmGSrPTBrqXFBc1UAHsdx55D9HnxRFComUEgKhcffqvP4DqXKu",
  "key12": "5irQw9Dmyr25f4Fvf1Kuec8SXYT2bRFGRymCFdeC9uMyYNKYFNd8iUU3CYPXueMenh6Wz3KyR5CHdbR7JrP4beub",
  "key13": "4WuknDXEmsQSwCtbsaqBXbjqAV4Um2A7ApG9Mng6evyoJKMmiVqmrxiwQaExdPBpHmhR9MnW2VpxrdmLeNMUMDMZ",
  "key14": "2eR5hPxxMwnusR2FTDCSmuuqCrY6oS6vWTQmrDfUhc1TEtNRTKGYYTu21JWX8NwPRBjARWNKZ31jUaDAjg3R3w2j",
  "key15": "4K7MGAYfCmj7RETzQfJvLZz6GqLTFRBFz2mdqG2hiQGpUsuVmt5KduvxGRysUAEpXen5xgXy1sbhPLquy55oGD3t",
  "key16": "4X5FFa5U2nRbttb7UUDcoKGsjFr2QNXsCLBJYBo1jageHpDNRkQ9cG39oYuQ9mu6qLurJLDwpoLKzBp4LknMZ533",
  "key17": "STaC26LjHQWyPZNEhUa1cs17SQJt88raXww4LQYX1G3W5n5rKqWW2uaariw9yX6ciRnxXE8sqRKWKEpTS5uvcX9",
  "key18": "4fpu8c4AcfeZUHkCg11CjCpPSBSKSLupjeHC7rRFFtXh3N8zk8pKS4wCyab3D2KfvYtvScHZhRVRHC5bdAUisvSK",
  "key19": "4UPDecGnHcSAGN1X4T8crsyM4tjoNtZcPAgUgDRJSNrw8J2CaNyHBZQ8pUX3AWq7ENnjDXLae9rfgeuGHqfmK38p",
  "key20": "AE12Rd8rQB6xZUvSmeEPGFvhUiCNzFxDCuo97phLCwH9jnsrKGFdqhWkovm4GWhSrLsNZAaGVfUi7zruWS5jRBA",
  "key21": "inA8HGytHLvE2ogzeMboq1UaqP1ovDvBsxW32r72LjZJLjYDj4nMv7qZbrpjGmga1zumBYcDo2QHgXEAnXVLiLa",
  "key22": "41m1amiX71GjaSc8hVw2cgCuw6iYpCw7dwAzwX4KC7MUcLgGrrYjVT6vGVyZPZrtgtUJucaFQ9LiiGvBhHpphbwH",
  "key23": "3ndir5URBET7PW1JSHEv2LctnR2FqwzbjLsRVKA7vLmYg4NwsUYHwqNomnNKVhE2zqEZnVGmeg3NvxeFFXvzKBGz",
  "key24": "2zyGn8v7EJMzPi8QLjkubxBz6bKBVBRfty5BgBr3MMeHRjxbM5QJWYDbdcdoQUegJhFyX1xdgoFU666hEQcZfAzs",
  "key25": "2dyKDiyGX6VR8tcNPu3puqXBuTv7hLAHdHTocVDZmevamaw7eD7JjFbeXpyzSWpQC4i3R1mu6XT7j2rfdp2zqccD",
  "key26": "2ou5Xjapke31MdRj4rkYhKBdrMpaPqzbumDqn2x1LVKXVk6L2GQrHjgCbjruA8kmrKJMK5xaYcF7YuYNUs1apkZ9",
  "key27": "3HkRHPQFyx46v3UV4kCM1HZg98QgC48aCmp5437VPyFALiXshSmtd6jo49vYC3fKymkkYrnSZm9ybYFKZAm4FfBo",
  "key28": "2V2D4MfkYAvPUVfv8mtYXyUFPKe5T11rNzQudZRMXGBGaZyTcY5e7s8AwWWcUkss2SfCWNqwumvxiiWyEc9WwWzt",
  "key29": "3x5BQkvQkgKsCKKd1xn6n7iG4hnjdYPQ96c4QTjXp1fkWB1mf5dBySPeRgFp2rzwk8LSb5JGwVLjCdnhn3RiNmZy",
  "key30": "2bjPFStZHU5j5SQ88PG5eyhnV2XsUYcXxiVM8B4zmuLBWGowcg9pzxEorDuGhvC4n1tu2pB1x35ZMHLccWuEnKi7",
  "key31": "3Vu6MyFEtXmW6HSV2fXnKNX9go5ZVYpQ4FnWFjVzcHNWSSWTnu2ccw7UgFjw59t2qWyvaBzqLHUfadNrd4HmZ8bD",
  "key32": "5rvonJ3jwWsqPXgMFzs44rmPmFscSc4kR1S6erPmcGALFNKLpC9hiMBbRupuWhvn8LarhHMsfgnRRUtMGWRn2Zr4",
  "key33": "4jeSfjQzfrnujiwEuD146ea5jEXBL8tqTmMGVoTykH2Tph7EbXVCUvDXFG4J5huXQn1Pb4rs9nVKqSb7Ahtv6367",
  "key34": "26EVwgbU6YgpJr5izPT1GMFNJLM1F97ShPLHbnczhwhCFa1DfbwCL8ZTKhjdgt2GZtwy8EQoCjQDtRCGT4bdmiZr",
  "key35": "34rBycjixZRCxXYwzbrZQFYTh3fbiMyn6Pe9G2a3sRhsMsAE2gi4vueHb89rntXBsgZESMoCPZu4dhLhs73sHZzc",
  "key36": "2X4KJjKgNNYLuhFRMMiewGHRmVNTfo8vUEBY2Eo4FMyQ94go6hRvx9KRmvJr4z9xgvgvVQfwtV1GYZNKBvCWZRAF",
  "key37": "2nxk2A3AFMpBpYFPrM7FP46JMLTeYLygtG5xhMLXEeWFBPtoWhysgqqhHj3c2Sgavpc1zN6EWCFwTkroV2Cvmt4h",
  "key38": "2AbDnhXxU9hMEZpvUwtMfnsfcGS3EiVRYT9p5B37EdDarixDmf74LN6JcYgNkXECNmV2v7t117RMyJzaUxWdGS8v",
  "key39": "48FiseRD5TSZNc1DJPvJQyyfwSw4Q3PwwxnZ2wWGwfsXGcAmrWE2nrzEurkApCbyN7bdm57Ah3xFXiA8gg2HmGrc",
  "key40": "36WdFB2ww4L3Hz74nh8ZXGgrinKwLGkqWXLu7GExkCaMFeKXxZ7auqs4tiXdd13hvRZH9ziUxURgr7tHgL4gAtiE",
  "key41": "xWW4C1XB1b3HSwx4hsdcktdZBzaq5cZJeAWuccbVY9GjjkiTMNsjH4r6vik964ahoMRs7bV2sLitdggHQgZbTj2",
  "key42": "4TzM1yF8ByAZuVhX7Fs5vLBrMhtMZSHKikK8YisCCMKMgynobqmhVs2WJFqWwibFQPcsDRyzKERQ4LbTRsKDJNyJ",
  "key43": "47VAmRXfNZk7CKci7cJhVSVs3SJhY1uG9WzR9WPA6XQ1kKdW5djyXw3YPqmsstN1i85MVgcZbryF7bJ3RftRSbfD",
  "key44": "3hfCMRoU9Jjm2Ezc91rBsiCe2sbnFqtwhwxpmPEhozsG2CKrTAjandZaKD7MmESRFuq7XbNZhJbi6iHRRoREdL28",
  "key45": "LBfidfHZkZgLvrdaNSXAqQACu5NCmMLucPDoWNsNpHfuTYtPfuHSjzjTKzNcPt24RZZfZNvWT23ouAQriUAqfSb",
  "key46": "3ZDdpeGLXZELwinJDisGZxP89wDm7xmcVRDQZotxeUdFVL2Pbtun5T7XguZe8SG8rK2e7T4nrHKCu9x2ftPLEgN4",
  "key47": "2gwBJMN8u45hg3r3UiuJ6UtcqRsykzcZjZr6oCyzJGEF3ka1HH9f1mAn3bVYf4qLJW5vqFhWj382xq5wD8m2kgMi",
  "key48": "527QGadMRxXx41TFsixtB9NSTdfk19RNYMfcWqnDHstENY7TSHS4G8TBAZoM5LypoMbjYcW24tPE3khRnb6EUrFF",
  "key49": "3g8n9n9AAP6qKkfb57iGnYHzY3D2Nkg8Lh56tyKZ5xJfKMkNJbjzhCG6863izUEgRcGWatBJA3vtGEFHZz4Hs8eE"
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
