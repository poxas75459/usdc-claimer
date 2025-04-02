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
    "5romTeQGA1g1cm9CajazdRTbWac97SCUfk9MiNkhzQE3N7zP1NUq9fjW7vjiUycGaucrTGP7gcwoBn1JyFVH9Abw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21x5on6ayHWsLHe3Tr4AMLHdkz8aKoEyYtmqzBbtEF3Q65mb5JoGyWR6afUETj5y5UeepebVaEgVHBod9f4ca7if",
  "key1": "2CFBqckc4konjueba2YN4wKYaoJX9gkjmY7TjCvinobvJMv1muJC4cWS4rjcGnJHyJJXp3E32NibLRHo5Hq3Z3Mx",
  "key2": "2JrSMX64gb7BvkNSvkKnrhjjCAJ1EbBoE5DkyB1nJbv92DfX6S1ZZ5pTzM9fYcDADX2CQR8eNjd768A87SxvaYvo",
  "key3": "3B4Py5Wie1LTCB9Q3K65psKcvSgdG9BntwW18CW7RHN5K9iRkotPo9zEgJU6uTNVDUV3QP5D6M6biukLaonWkLWY",
  "key4": "4KeeAMH8iwa4opX2mP7yuNisFYoBKnWBUL1a3exg1yvtfLN4oyGTZnQpwY7dX2ggwDBwqCnEtiJLfM9nxzctC1u6",
  "key5": "4TvjVLsZsrFr2AUUMyKMV5khieVyjYRMmfoEtyGz2sKW14ht6hTPmbfbX6SvX51JxYupJjxUDJqGEWJ11yLKk3mP",
  "key6": "g9GK6FkRSzzwyqwQXHqifXNSpUsnKE4oYN5CtjhDCfpcAJN6XoKbPKJLBT2hJLt5HKE25jNXnzHm2WPmPmEXbXS",
  "key7": "BeHB9JA9er3gpJ9bV8tw6ZU6uE3DfsQpqnwMdbnkLw678CPdj1ExaeymdhXpXDSxXGh3Yr8iPgFbJ3JH7m17UCF",
  "key8": "3jxwD2oFvxGi1jLSZuYxiKcAPwRzeE2YuP2MSEF3v4cPZFtA9f29JRPqJgNsWD3n5giwRFGn5my1ExNXT7urQDA8",
  "key9": "5dDEK1eCnNAmkMhjapfCUftSXgviYehUz6WvEPejLCM5tFtDe97eqKDM2Rt2hL9C5MkPNrJc6sJakDebKgAM6RDf",
  "key10": "Wf4G3nhZhwk5bpMtLNAQk887jH2vAhHqVjSJpZywWyPJzvdifq8yKk3eoTXzwzXco1nWnos9DtuMM2GqfcEeuf2",
  "key11": "4bmCNDB4vBGLKHZ5JEHjFZKuK8nx9z8q1vvAY6BmNKhsX15ZuY63NN1bt7ommDn8oYVPSioYZme9iAzMMVD9uUqu",
  "key12": "5HjkRLxtTN71424h6vUyRK1D4KxCgJkru3rHk1X9FwHhHbrsavjHZCu3kg5opt9Qixtmdbevn3fWAWDwk3RwiW2e",
  "key13": "2ky1niArUqQqpgBHkkd4KwiCRYgYEB6DhNxfPfH1DX9xHwPHRhiefVFU1RAJY5TMERMs2FtVQNqnJzgYtp7J4Yt",
  "key14": "5D4DXnsWfGMW5XA8PiYexJUm8hwYkA6jnSG2btqNL4j1td3KgzBnJV97vsHoWMyMAMgVDtQQVWB97RNkiinSJtUv",
  "key15": "4xyR1AY76zs7wXHPDYmvxgf9EniMEPqaCQDEGwimmPBkKajXHijoL2BsoMixhLuRdeRt3QRcS6Pa7EzfXRt6kCnD",
  "key16": "4sYhFYW7mDFyP8oyHfqq921TcR2dEocZkxUmo8DBnV4qMLFgEDJw8NRDrr2bKGRej9H1cJUDDK5FMvrsxi2NKwJA",
  "key17": "4wwJGqJ6nnDbQwRYzP8rh6wjn52zEX8wCzeTuxV3Q1sQZb1Y6fLRek6LMuYekGrVPCYaEakAsiEKsCE9Hf72F7AP",
  "key18": "2dtWpAU5MH5ruJD1VZgNW4mfYsi7ETixZCpM9rj7jwyNg6G16F3wNyGHYxEAPahVUmq3QP5irv53HLqVsJH7AmRZ",
  "key19": "4oQcSACr4ytoYfHYxPTKzeJ8JXAg8xmjc4hxDUzXdtbNWwUHs2i8SStcFCbhyocRDzXk5NV7nTnDcMTFt7hxgtk1",
  "key20": "2C2sVhvS6LFNXnqZXFCtmweqPgwuzubfMtRY3hDTZa3YtLDRJHTRQoraNf4pwrazkVPnv7GocwM9sv9A9yjqH6Ec",
  "key21": "4snmsEmsfxEohHg8JCPwdPFYAF7eUSeB5pxPdvrdNkm24FGrt6wnN45HifAPiHa9kHbfSetjphvfJoaPYnq7bMW6",
  "key22": "3agwAGBxKkMtqd7Mfoc7x7AvHMn1BQZ6ACUhRifhkQ1AU2qLfWZN62uBkfgEATjTgYJ4fiGjNx7YBtCs1rUS1zhy",
  "key23": "3SAm3VAuYemDzLAM5oXBhbsnMhqmJ3Mx2mu3Hmd65kWZW1PYpJw3fgjxGzjjoCyUbXqqRgZTHtvVGNbo4niB2x9",
  "key24": "3jCBDY3Ltmr34cbFNqmkEcKnvhyqnwWTERWaqLxHGFto1VoJD1xgBnUWfCk97JNbRBFhV5fL4N4VWmagmzPHTCsH",
  "key25": "YoyZ1vcCNGh8qmtap1mpidk4bDNbHUf6TyWGzRDEo7NBGc89eY4NH2VwrZUD5u9RjyUpvUu9CYfmDvmBWR4RjQk",
  "key26": "3zJDeLKtK3wEH1tVPxhdcABEJ1hVXLnYiiY1FVwm3y2djpoSBPexsjV9hyKQLFNFKvgqu7z4Pt62aZJK1S6p3Bui",
  "key27": "5KhgLxrJ3eHfCfi2v1dgzcsPnQL9apDNPrjGWXSh2o48egpDL2K42x881DFGwGpryqoEWRo2GNMZND3XR17GknBJ",
  "key28": "34K1qQT1Fou28ptCDteGZXbmSLGcw9Pfad7CDDYw5dyqTtsfeNr36Hekec9RHfztozDMcCwAhKh6x9s7cmWn1pvm",
  "key29": "5hfXSHtNH973jEajYfgUgJYxMJuDiVxbbKtREcCMbxrZgtE5Ls8daMWVBXtu1DzMk9XAzPEr85GqjXSxJiBiRUyy",
  "key30": "23ss8vJqGarJgf3GBi9WV5ZFaP6ArmxV8vXnTCWWUak7GKpCYJP5kW8yu67kcoAkNv3w3RFjxba1gZaojByKiKGC",
  "key31": "5p97ZfFaTWAXretPayLr3RYyUjNky59i2CmX1Sp5TiK2EnvqWN4SrtbyDU59kUkH9RLW8ch71XUNPFSqf1aF1jzN",
  "key32": "498AJbpotSvSLBwYCLJh8k3oZgWihRsA3PUcMefjXk82T13bg6j4D3KJfHnuafVfpcEf4iJhTtspVGuVkLqiL8Cv",
  "key33": "5Sv1iihrnQ4L9j1Bmh9gGpBw62k6hQigWMPkhjTge4a3hVrczBB9gJhykMdfu1QGjhaXm3FR2zxMP8nJA3Zvvhuz",
  "key34": "5qbVR7TJJ87XoYRJ2kg13BSrP6DJMc84wpC8sqysADyfiGo42855ZcBtfRMgUHjds6MkXLEc84E8222XCcrcxhEP",
  "key35": "4Zm3pqChv9boDa6gSoa4vGczv4dP5ifChkCHSdEskW9a3tqSL37RKtxUphsafhk7DvyXtKUztZeKFPNuTRiBqA1K",
  "key36": "EVL9nbGBeSQXoqnzMuGte3XwyZhLe5FjNWqVE4JtC3Jo8AuMt3c1wzUYPDCuN3NGLrJ6bgL7m5HVYXwFw32pAiE",
  "key37": "48ofArWp2XY9sMvXEku5rtv8D1eUnY5HVWigQxEcf6HUto49soN6qsg6eBHQ8qx6pS68UoqfUUZGeib2Ebty27sv",
  "key38": "67WuZiqrmUi4WjYThf75cRPZ7XwXuMmzLKLCXKdPZEuqjor43XGAUhmdJhP7b8kzRTE6XP85meCdSQkHQA7P7ePJ",
  "key39": "5wBdmgaVF8VxDcNcR6mHvVdLYKjCrpngtn6RfqEVpPx27o4mtoMMd3jyY12Si1TSa9UMukbbX9CCV24skEaEP3uH",
  "key40": "5pHym4o8cBc9Gy5EXpEquYJF17eqUF6UduyZLxedWM2sTSVt8kvwH6VDUqveS5U1pAHKtTbAuSVMyoyQ6ZYojPra",
  "key41": "vtt9tGBjpkX4uYmGZjXBHQiRUNNGAi84eC1NdXAo7pXH3FeogFR2dHzsZZJh1zXiwm77Gy3hbKYYQ9F7zidEpLs",
  "key42": "5pL7VA9eVRF7iUc7HBWfnkJE9t91VBHAvmLPj6MjxoRDJFv8ZccuHY1U6KKDR8FyW6Mu5tfXK7YjzewnC3Et57rQ",
  "key43": "3wR9TxihgWhwb8fpjR5tft8UsLzpy4GPYkr2rr1NSKek6rooorDqDpwP93Q4CMeiCJsgmfN6NZJspdTTvKkUiJhX",
  "key44": "5sZDuV33hChAd241JuPtfuZkxVQnJAd2isnKQW9ZNyYXLoyaXvbpvUkYXxBG9w1RoxMCVT6CNziFHA5s6FcmgetT",
  "key45": "4mmnr4T2dDCLw2JrL6vP5ijTj2ppCXKwW9ej1PD7UWgYScy9ADJBomitESMNbdRS12ShhRaikEbvQzvh8an1o3v9",
  "key46": "KJQVnqzuj26PXFaX3dsoNE783Ex1tbHFQfnpUYqz3x75taRCYW7a7ZVHCj6Ye3SwBAQE13YjGH174d9ktnz3b6u",
  "key47": "3NMSZrvFfHASSQyh8HtdCSuPv2SzEJA5SvEwc8Mk426Pig6DTdzdFZ9nY17jAPBdTwE27N6cDXdDPCoGnh84H2Df",
  "key48": "fUqfKsvrtJxbkLuomg4enxikFwGV6q5beafUFuYy2zfn87YHcM3ah5VrjNPTXMjVehSkY7vdd4DYdm6Wd3fwAcU"
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
