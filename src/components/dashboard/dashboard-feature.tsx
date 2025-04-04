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
    "9JSbisW2LRJ2MiokKxb8EFJ8EBcfdBBMjPrrtn2vQdUnq9eT4kBfi35YGrg6Padvj825HYeErp5SaaV674esTmg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BSHmpntnbxfpD5U6TvskkUySHMco4oi3LwJtUmWxMMv4AoGwtj6nCQBbkpkonXDrwjb1ZfAoWkRinhBcoGkRaVX",
  "key1": "2gDH7xUiAArCkWrXuPksi9pSM8sR51VChM5RrkT1W4eHVuoaYfRogUj3HtimvwKCwSc4bUR7W2WHAvqYycRrPTyx",
  "key2": "2UJgRFuTtMADRta1kWtY334QJRBgBGpceAcZMsfiTNmyYSiD2NXFDG4rJZECfxTLdoZP8EBKgTuDjjzuXsoN3tK6",
  "key3": "5ZgnS4k9AnsKkQbpwjnmUYTvhrg21jZ3tABDNfAkgrtbJJCLi6WjKdr3u1sPyCMz67KkvTk1BWDfW8DYmeAvvbn8",
  "key4": "dbBsjMrN3BbaxUY3CVKYZyoV215rSc1yWjGVvfkZrY6P5HjcX9Gtv76knVNnhs8EKnDrfSev89GNTRgSupXgVLx",
  "key5": "5XxaJVmUwkUxNMJxaD8nLbv8wBYhSkGW7xs4Ztg3H2d9yRiRtTGmtmLGF3hHRYRqiC5KRtwGz3Ey2xuqbGyE1imC",
  "key6": "2gqRsUN9SK1Z6cq7b42tKJSk2zFXaNrfce59ZX3ECErEjWYwLUknQJzwWBirDnYjSJfxAUzc9YjpthX8W2v5kr3P",
  "key7": "5RqLu7ZZ12rgWiuD6HCfB19dbphBEWUDLCaAUQMxh1x1HruT5cLTZsPZNA5qHCKhNnHbBxW8T97ozhYmeDuugknj",
  "key8": "4AtTZEj2hzqbdmjFzwEBys8cEM9SL3Kn7o48nyjCx9DRqHLPHPt5aJw9saAkvPG2xd6TzxbzGKKuGbvyeMxVTLvF",
  "key9": "FcUgGbKytxGhaaBD4gxDiLEaQSrPznUCdox3NqaEUkZuBaWcpzfAhwevW3jWtR5YzMLe5f1rPJPiT6FraCzgJNz",
  "key10": "5edtuSNCCZ9sSs19vAP88zxEE9hyGfEh8gqE6Js3exqd5ea9AtWYzTtd6FVPuEMXgkTPo81QUNcBNLgEUsZTqs7A",
  "key11": "CAeu9hAf1RcRTrHLk4Yg8jNn7FurAZ3w6286vpMLj4wikhC5CtyHrjsvBntJvwkbohsbnPoKKscRpc5BYJA2Qs7",
  "key12": "3A77eVXLCebdshczFgdsgcVGfxp1q8UoNDJbm33rJND86HNtoQZQwuDYo8K27N1ji9yRpGTqP6CyFNs4YRiPrbvs",
  "key13": "3oT5ckGTrnEUQKazosXkG3ieHfCkhPXVc8exrngVfGEC7Hf14XfjaJkZ1DR7gVxornrCGxxgr7W4cz31UqQSkLC1",
  "key14": "4K8ezMFiYZP9uAM7B3y4jtaYmUKi2rPDxsvcso8JG6J7DKcqqrqf9gbUnpNtawYoUtV25Nm81SewbUnXa31WLfFk",
  "key15": "2b2JrqCgacUaGAzyPGkjigGBdvNjUc5U12GiRxY5eaeiFCiLLD9GVCRvVwuzxDyMn7JBByKgy3yzs2eT6zVaxNZs",
  "key16": "3xkZBNfqBemVxU54xwQpj2NHCxjTWMgDPTfEfTT1J5A4Kv7qHq13GXHPG1CmVuVXQm5CURzctvCuuXSqWWm3e4Zn",
  "key17": "CQoDxKCMbZaGMyN3wbfBW8AFnoxneY9eNZ5QDEKgN7fUAmq5ytKM8AEfcuHDun5byW3x9k3qxKMpznvPFxaea5N",
  "key18": "5jWcNNyRpsipVoxZNzSqEt35bQNyQKvUmcDEim7uuBXS9hGjtB3vpBTChNEi4V4MmpAu7QYgAqQCmfw3S567zPJi",
  "key19": "2nP7EkJSAtftrWiyL6CnMin2hDo9ijXNS36fnMJUajgkwkqzrNxAbCh2kRF7KBcLXbjwR6q8mykNuub8eZcYPvLv",
  "key20": "bo9SAuprFSQpwFtRJ4BkyfoBBS7e1HUmhQcBEgnCact4wuB3XohjRxEu5RvSRyTX5GnYXqPaxvXSpBvVmkxKdLi",
  "key21": "3piSD8Lns4TyD8NaVZqDkcL9iSboa4h7rhJ7cGDFLMmrQ17XKjQ2sczPJkFYMm1hJkp1rBVJRw4WQGUhUrmX6bby",
  "key22": "3MudprvEAFXx7asBptvkQ5d14McRcnJSyZHdFro6oxWyLAmyjsK1KsvRPH6yD7kts3DWmdHyiwfRFLPDCQuBFXvZ",
  "key23": "5YYyNoUTcLG1RuTmkmqMphDQ9hXkRFR197EKMEdTNb6XHjQCgD76SkaRVa6SFFsT66dADb8tnKHdin6M7cuU2Pdx",
  "key24": "3MKhwxUKLJMzRZBcmDPiGMsJX6ecrpm9biYyxXuSm2zsCkqPEErUgnirtFPM9fqS1dMpN52eabQ59NbKGgFCYGpt",
  "key25": "66vJFumUVgM5Cr1GYQ5EidsQJKcqe6TwfAfmwT26L2vBdqAnvfGJHC1nDUdyhVLZ8dyhFS8eHopF4x9sjCsdA6xT",
  "key26": "2JkLhxAKVYQZ833yKm22BdiGrDfkonNbsUYQXYaPXqYkjf2LAQJDJDeDhetqFNX6jsCtv5gjXXZREtWt4B3fn3VN",
  "key27": "4DkEqT5AercaGZPM2pBEfV8vQpqDGgWAyVKU3U71zEFdLSXHkTMDaQ1HqPsTPeNBqCqS9QbYmzUtwBsuyE7NE2kD",
  "key28": "2WiihTTK88KQ1kbG75HvtXvGUKDisG75Px8JZcQ2KrnVoo6xwAkSkn3ipoKyzKDjunhMTfd7qKCVhiU3AdAyJC5",
  "key29": "2KN12Dv6i4UgbikxMCEovCC2Yh413ntMAaZDhEtHzXKEWHhguXJZb7QNnbem9LiU7cQ1Chsv1uKeWUc8v6v7P9yT",
  "key30": "52hVXpnti1meUhheegcuYEaZmAPttUbT9dCtXgycJo49P7nFkS3pVpwiMfee9pHbcfJ6qyKhyFVCX37TtPsaMixi",
  "key31": "5yGFBHbHDyepFF37pSnMDD7BMm3Qh5RhysbWFzDaz8Juu2wrkM5fyqdDUAQEDUYQnFonqhTNYBrpfGgLUpWbEZto",
  "key32": "29dZtvT8Ko656Pkgq7mGEY9c7uXASp16eg5rXurVi5wzVX4DBiw9FKphNKnMyaqD8vYgVSAgSqR5zwURpVRoWvAK",
  "key33": "4U2bYGBX6vUDRtBwbw32mG4KLLNf2KD4rEkH5W1r4r3jcqRqxVQriZwNH8giCW2QZe85jJ6CiLoUKc6xiGmc5vZH",
  "key34": "iB8hPsz1AP46zkyL5qPa3kXMAquDpDiQr3N6nC6nRWu31E6YVcAk2EsdDByhVK3tByYqxUufRQx9mNd1M2gXez1",
  "key35": "3tKL1aaRd4y2nN5uXj6NDBhwT15HTmpELXFJGNNN53C4tr2SnHUvZ6zLmUdzcCvhLeAFSvNihseXoHJVz1t8uSbX",
  "key36": "5Z2ArXbDAzgjbpcYm4Zsm9gGQByfy2hXWDvrh8VC7RiQiUG2yvDZDE4QSpmwwqjv8dWyQZs7VundTPVZmjaSzkjG",
  "key37": "3E7w2BwBVrWA5JRD3HjMxjs1PX5mHZDnVAXH8xgAp6sC1mtpvgL9WRjpQ57rARkEQZG8YBUy8FBH8xHnZYuhRoeA",
  "key38": "5wNtJaTdeF8hPymD11oLNZjcZYGhafQCJwtYm2e5WmVGZS6ndboSpfx3Q8JPiGgdCmvefPV1jh6bWUEU7h5KRqtH",
  "key39": "RDxLwPr8NLVANE81XfopiwVpD1rrLcG1UVXBw7Gqq5q4bBhaCE42r8wQwBee3TgGUVWhdjdYnMyqRATc2xfTVtG",
  "key40": "rm7ukFTXStgJadADXVRxqgb6EVR9QVkQDQggsSeSFthUhnDgg4crsWYyyF5v4MbKoqHZAddwcyCLjtY2yS4bQoP",
  "key41": "yHae8iLZ9hL1njCgYRYEUhQMytxchRw8YK32G6bJtsFASgnbjDQg18thSGjJC2Rc88GthuBNNXPitKEKgyyPA5n",
  "key42": "c7HuEboJAJU3N8z2prYqneNA8hGihBtj8zdnJJU12ijU2zS6X3BTsJHNb1iAM76mjMv672EDDwxZBvxUmyLyrGk",
  "key43": "3HC9ag5rzW9A4abKVBjaiPMSSKSXSSkhqwNzfSB1niiG8Dcmu4W1uSTz7xp7HCYfLdxr89kDvwkq2SYevuob7eiN",
  "key44": "UNmTuX4H1DaBrUdycwv5W5rCsVXhTzFyzfCkDbULZT17JonZ2rTvJT3dLo8cGGkRjpmavTpkzpR5P7FzLBJAsNa",
  "key45": "5uJ2rUL6WZTY1wenqt1N8K3qXcsrqkL2nmTHjaHFwPqehYeP79MWcrACVkWsjkP68Jd87V8k8EgAbPrEbh274cVU",
  "key46": "3jTUdq75BhN9HNKoPqvL77WJCyW5ts8yQxbceQgNAwVH62NyzumaF61svbHL553Jg9ntLGcJR22QTwoHDDMC78Vo",
  "key47": "4EamoTNkHGbUHhBWesGExXs1owma9wCKHshRUQnWdPJ2zZbxGDFrVDUjyohgT5MZRC46wQo7a81ybEFKV5M9T5Bq"
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
