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
    "YhyeAHLojSieGqxaNGFi9iKYgY1Y7qNB7o1txfNjgRufPdGebJP6pLGGenNhv5rGAa1DK2F6RwbLP17YuumNieu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vtcVihpfawXnV4NzwUvanRpywDVF2h7SWi367unhUmQTcSSpcyjkkB5njg5cS5nY728drfKJfK4AL4q894wgnfe",
  "key1": "3qtVjBc6Fm4poji4vUW1xQGVgBLo8V7c2FK77ZahEhNJC7tWuY5vWv4hgxGiYHFAyYch8tmM6sqojVs6jjbRZVQS",
  "key2": "2N4tsWvunjrDDk3zkaEAGGvbA4uzR9QP4MBiRVQeSq5WiaPSgKYiww8ae6yu6o5jjrmbYWQ8e5SgteEbsCKFmHZZ",
  "key3": "DbuYxQXWM2YE5rfa9YnbaBiNraYCwQEKKCjARMGdV43ZxMiJ3nSu9Y9btA8G3osWUuMA2iNMbeibBuHiwtE22sE",
  "key4": "2schM4sVJabVAQWfDZekbujGBVEWYpX1XH5v8NczxfDCorhiXtSX5Q82LAHooEpQzaUX5mob6zyEnaWSkxwZ5Hax",
  "key5": "53HdDNjH2i2YycwoQJZZm9TVnUCG5do5VTM1aYDx6af3mpHqSkEZYSmHDL8y75byBtYFRVQkeE165eGvfwiugvAn",
  "key6": "41gBKtDLJWr9iu2R5pGuVa8tdD453UtbYKTda9xMDUpNLqBM9oMkD2U4WTqD5wZYEA6itTTYfXSLsDrAFL2YvhHD",
  "key7": "4DibEdp7FQtqfQ9Deeu4Re24vV7p7dMQbED1k3Rsi1RCGSR5Zbg5JddQ1A9SrZMSPf7Mm86S7K3VXaTMYMPsaJSr",
  "key8": "3yTK4ZWtT3Ha6SNpZmmYtDeZHbqps1mEmn5zrJ6JW2dN3Db3LDtjKo3iWfKhL4NUGGJsQB8k4EWJFNg6KVFuZGDX",
  "key9": "4s77gbnSw62gKPuCvqrEa68wHpkQZJ8PFiZk7eisPASPDfXZcgLKtFYmnX2g5poQRXsVrng8mxRLBwwxhwYyvDUE",
  "key10": "2gbWi6xkD76SoWwLvHEtRG7r36fnLFd8g5hNwJqi8NfuRMFrzLzCYfyvuPKrizHNq8wnfNEQTEHYwoKTSAeCszAd",
  "key11": "42UmD5LwhZemontNrize1Jsy3fQ2W31n6gB2yvejGfXoU56YRMzjmQDH2HZPQa7Ni6fGW4RwsrooFc45hPWFGULj",
  "key12": "2YENJtLTRjSEs8fjDKL5ouwVkgW2g1RFbsdGoajCHst6LTZCEvN41UotVUKoK2TryzYUj1wokQopRtBs2C8Ps2pN",
  "key13": "4GEvJ2GV6cAAyn3TMeoiDChCy7mDPQ5F3RmZ4fmpXaVEvca9LqNuo2V8fNLryVkXj5ff3MQ7oF7NWGTacCmVJjeq",
  "key14": "3zBm1JJLMZB6G85E8sjp6A9SrxGekkbqtLaaPGZ14GufKMJGNdFuRbgxhLjxFo7qDDy6kvcv76p3MSCMR31j8vbt",
  "key15": "5fdX2X6ZSGHwJxwqGcAh58WribSqXYybp1ymgT7qtPWZSW1YQBBuhiuTXVSLLCUfhUP5LwWnXPteEaaUNfUU8XhK",
  "key16": "3WoEArpJpoWJFiV93oVHrFRWLdi7YCcSk6GovzHj3ZqDZYbrmj7wKZcpG86C61846f4t656q7FFocZdTUPDYrt1p",
  "key17": "2B8LbCwJBMgVKbZoe8SAusytfAXLX687vCZxFoCEkZTHuUJ59iozZgxkSt78HUyoUfdysSrFerTRE7xpKGPdSaTp",
  "key18": "5sfVyi8MrQY2CeG7KbcTSWgBTVrwZndTE6Vbmoc2vzDaQWfjiQMgbmFc8RTszfC68KEL8paJuPAtHB1UJHMaKhsk",
  "key19": "p1JcJSr1TKKtdyWcT8EoASnL84jYuYeYpVNB8VUt7FMwsCTGsnwr3fKArEznkXhTy1WRu6FS3NFmqKtPpNSqL6v",
  "key20": "3qGAndvStdSssjEUg7CPkT5wPYxUzTtesdMj14pLqmxAkTqJbnDErsBe5bAz98ZiMSF5YVKxkpzn9TkMqF3n3MKV",
  "key21": "2QdSx2pxTemnt69XkLiAJNCCRr8C6uZrpaMK4cjsJeZcris5TPhiS4FxtzFVxptSpxZzZvJRoUcLEuvCa4wNe4yU",
  "key22": "3S9dksmb6ZfmvKBMYLddgwqbchnsnDcg8SfDUNatVzZJNQgJSwHTJovHYYD5QmB19x7QwbC3fTqQ26fErweBJQgW",
  "key23": "gUrqSymLQ6UJixcyWJqi6ptpACFfBWJ2EfNkyDdWKrUCwj8MhVdq5CGt96e1R9eYuNqA9KzNcAha3twgnu1nSqP",
  "key24": "C5kac1x2vTtLRKvGdyGh7qweB9hD6wWfQhnkzePQ5HKyp8hGgsE7vpnVECucgxufHeQ3SA8LxoxoAaGR1oLxXAi",
  "key25": "5nwHx6u5fu3cR5wJBbrRWqq61JFuKqgTK3MQ9Fx4SktdxNavMCxEf4yrbhLAX1rwNBS4hHbk4kp5bp8XCwPhjYy6",
  "key26": "5AnFmzyX8X1YPcmtesgn3QpJq525PzcRbPBqC8ULM73CPe8uG9Qeuimy8tKNsacrvvUtbcVKZ5VX34QR6LJNmtPb",
  "key27": "2A4k5YLUhy5Szr6fRKjq7TNYsPKtuaPNUjQ6eJ8zUp5P4FAvDuUSCDdHFMiGRNggF8dKz5XNpU5J3xb4XT11mYAa",
  "key28": "4tsTi8cV21i7V9tY7hvE1tgwXMTAVXCDG1y5mKDtTo2sQwHJUR6oC3KNLxaT9E6ZVEk9BvxpWg4CqswoxxGQwu3S",
  "key29": "4Td2bGM9LNGzLWUrpqj3H2D7CiAb6NW3uA4SDNiZHzuDeZ6NbWYbSkiL94Bou8TNcyAM2ATpvRzjccW6XYKeARRV",
  "key30": "58NBBCcQbAXiyj2xwRue6cPEnH1cRtbSS5ErEbnFVnofFUJz8UmbZetNaybsPGxRwvy1GHANXT7oDzgLRGSG8tSH",
  "key31": "3vkpQhFteZDUKj23aCzWBWqnx1snNyQHwHHo8iMmmx9Nxg2JwbvESdLRj9YmCE8G9jCCDSBg6RCYkp7GMXMM5Dea",
  "key32": "gswdJ311qGPMdmWQJxCMHNABHZJ3EzxgZST8veQsuQfBzHadgs4MWo6YTKGVmGPSMthYo51zmj7vncya12CvFNW",
  "key33": "QEEjZdmiGYW84bHi3KGAw9LtF8j5KqSNvFpDxsQSJzYRapbQktdNLvjMnLPsgFkzipZ6JvzHH4WyCkVECV2riYi",
  "key34": "42hPFuPdWrce1wTjsgV6LKJVRDNogwdJQdzi8hqKuSUf4NDoQREpChZoqAmDQ8WCageGigR16vzcdNdNnv1QsbxQ",
  "key35": "51SF5PAcPwnndN34XvoJUd82SQi3HjDJX7YSXxdpPCe69HEDekbBDcA7p4r8WRApRQUVwfieYnhgQn81hq6zYyKN",
  "key36": "66tJb6QBcw5EDyx8gNU9r3mjeenXPejLFgatmu9bmSUndohsDNW1VtTZLkQZZ7HGzjnokFYeGHwKFXtMfVBMiLZQ",
  "key37": "5EnZQ57e7qvvFVG5WuuP8SnD6fg95sisEQVRau2uiVxcAx6jC9iEx9uz5njzPAyJLjHsRdsFzGJCEsZ1pdwM1gyc",
  "key38": "542WYpNMqozjDs9rADFQxFYcUk8quhfbQLRmb7CZJuAAcNKZpJxuNipzLE3DU8zBy5tRH8quno1tRrLWUjc6Q25J",
  "key39": "4NDC6q2oypcB3CLh9E2qhVxXH4NkVusps5KUsgiKmD2Es69u8Dwymj6eW3Ynyxd3o71jGaWVnNRSZ4QRJ6TLJYUR",
  "key40": "4KMnjyrSdvJXFo5qbX92yvbtBUkGTMvaEnaRdmczHZMEn5RGhfUPTA8LAuJwfWzAaUHfSXGMgFEyLmxcMw23q3tm",
  "key41": "4HSq8LS6gVpHFRWZ446N4TUWJgkHyM4JCTdipSXYfu2gj9vktunbzQ8gvEbunMA7mypXtvbC74ay1ukWLQeTSm3y",
  "key42": "4qgoxmfWiaMqZCjxSEAj8QkXpCPnJiYufDvF5yeQwbPxXGsMMThbUcCyVmCTuBtARamHG5Yxr3guLW7sRpYqN9LF",
  "key43": "YmzgLoAufGN9Uz6jzEa46czvb49TDPLKP4zAY8yCA4iewfFcF1iXsA2aGH68dXzLkVGyyDq8AveN8C2jPUTz2Jh",
  "key44": "44qPUCivzrWWW3nNLaitTVABKY4nm3GDC5QptUN5Viut5nY5mddqEBiYe8cSdJeqXJ7UTYvuetu439hQE9kjbgA2",
  "key45": "2eCjos4aXomoR7qGxPK6iCfs9himM9H3DaN1T2xYK1J54APJ11PkMXrq7zLVuATjEsmKNTpDRLRWbLrHeMzXFTjy"
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
