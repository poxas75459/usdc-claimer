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
    "2kvXbMBrwUhjsDsGkmNoEEf5ghXyE16CCx1xJzzcNjEJuyzGrJX21f8khiCwjPnTx7sseL6o5QGfURkjcKpm85mw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CfLbSMAYxFr2mRrZ4xFUDpnte9vURvXqu6WNeS7Mp1YYF5Pi7qJDs4rYNPvkA4X8hfPH1LiZiembhtUAuPwss2F",
  "key1": "4K3gFu4vJrxVWE6Fz96Z1X2NtnFh7EYzxU58mKeD2SNW7m5WqWt98ZfVqNVLEFykrYEZT314n2FSx24BG53eSjZ1",
  "key2": "3bS8Rfm3WTLSTNRfxf9c9pyZ6857wcUYT2HAPu1wKRH6WyvYnFo522dEmjYwN4e8aftLr6fFpAwSmY4Sm7tb8gZY",
  "key3": "3bTXcyAbPn6euR6V41xgdewXpEn4b3G79sCGsM6sn28Q46NJs2q19piw9CrYns6n9dkyA3eXHcT9tzcuK4Rb5BLo",
  "key4": "2vg2vZP5RooqA18ZuBE9tQYbFkHnsaws8WoRXxretLdDJpskvFVFNXbesv8ZhTGsF4RQqNEUrXdhrBt9PpHJCFBb",
  "key5": "vWLqQ1ikubd2iAFhQXmrUZ9pNJHEpDUBS153qKJ1A5BFZWPNdHnKWPLrcvstTkaYjriiQBdsEVtut5EqCod3u5Q",
  "key6": "4nVeYVdYkTX4fYdroiPnoUed4kgVAETgwN2D9D5C1WmuRP3rE1T6fjXP9XkLvnN1kk9ucfdvnLMzvXKQoj4nmrpn",
  "key7": "9E4yrioWg6bry1etrTn8ECexqzysQHJkyXfmcQ393akUhqTzoyVNtaJE4GV28mhnnWm2X5ccBofzodMjCAwfZZ3",
  "key8": "4yCwboasj3h4AT3tYmSbGk9miXR71VUhh2mtuVzSx4QhgWAFXKurYRaHAs6EBATtgqowpyLNPn2ZyBnrY1XjEaLM",
  "key9": "4Ymg6gE63reMEzJada4NUw63iiBCRw5pMGF7ep1GbZQM5nuAhgArCABTQVaeSXfpxXEEerJPCmU4uTkPMvB1666z",
  "key10": "25snxAnxUJMwxCYs8t4fWHq1XG9Hmrg7aD4qwEy4mfhb7BUY5SwFSCyJq1k89TgXEDQucpuUxcBVtMW38XRNJGeu",
  "key11": "5w8RUM1Bi4b6xP2z4ATyGLVxHh7hTCKa6NCjum6fxhiBnSzvbfPhz8BCf9pXX6mcxEPwmL3E2yFCpkBMADXjcuY5",
  "key12": "cKfrvQQKmPpcPTFywmrsUisHC91v7FgwGApLD1KPz1Q5U5YVWPuUtL8BAPZw54rAcSXWe8XbG9mtWrpEXWXtcWA",
  "key13": "45CNUrZ4yyxUGF2cSzUt85yZeAbH9pk946rE3DNZMSLaqZ4HgTv3UHsePH9TdmRAyPL9rv1v3WTHpKJuonwVCzGA",
  "key14": "3GwynZj4VfDMPJ6nRmA7G1t3bKFCW4jQ6FoGJUJenddPM61h7XEiQTWMC9ptWQYxyMRJdGhGDyffZepV92tku5dq",
  "key15": "53gVUjPY3mCTuiZxTofabBMLVRBDJcBmwR2GJQGhkNQ9qoGuSX33KdgnBwM9m7i5bUP1SawPX1dUoBQkLVQ2BkS6",
  "key16": "2f2RZQ4LjzCU2rBmLwSo3A5agWGZ7zfMrhuYDZJ32oCCCCv49njZfVLLxYepuzYnYaeQqd6bdy5YLny6DSxQ4Q8q",
  "key17": "24wATzPXU9V55Yu9uDeBEfYvrcEKfFzhQnRjJXv5we1gnvc22J2U79E4iB6Jv9crSm3inj4ZJJXGUivb8kMuuxNi",
  "key18": "4ji9GGpzEqJjJdLmjBhZ3AfUr4XLhUAR8xdvKMXMvJBeB7qZA6Xz5tad7N5wVrSon54DbmNPsfFCQ1r4k6vJ2JYH",
  "key19": "4KbqzhrFjwaEiG2P8THNFQgnaP3RxxDSpREAUcAofjDKEbFdSB8WQQ6i99rsb6Sxuudd1Gj25Krg15qwudnPfsZL",
  "key20": "EAcC8jnHSsjdLm8jU4LtGugTKuT2Ha656HogB7DTkHdVYEzuDJ8ra2QtfnaZTy4MLHW9neBUUoy5uxMeLh6WbV8",
  "key21": "2AQpACm3coYz3pNHsHJatG8aQ9rZQQ5S3ydeMqosRaDMJM2hhgwHHq4tp8LUX71mziWyVBPtXFJ7ifaafM8HXrZN",
  "key22": "29VG6ZmPEH9qCoBw7XZ4MKtH47eicjBLYWKNXGrqK2ccFJaZfuVy7Gruq87v95b8zqfUNxrzhR4sfBXVQTFXyAfv",
  "key23": "3E3WHdoLX7JGaRAzWsyBGi6oX9emcQ17WHZcet3oJdiNg7PiUqwakqzeXmAVNzb78Gi9YYTCwLZ6NeLPXaMxQaZr",
  "key24": "66D97stb7T9pYVqzfikNweAQ8ZDEqAkha2UgzQB87zWicG7GA2BTHyCzvB246sE29JCotYJYo7xUY1nJztNyXx2m",
  "key25": "5brFK5ErLf2meGQnikFh8PumSsd3t81q6TocnwuEjt1oU7Do3Wwa4wFXZSyXbeP2z57BaMTBz5zRsFGKVbJBSdxh",
  "key26": "5gQxqooRHvC75LiSu9NknGHWLy5K5Twv3tFU4XqNeUyNauWM24mB1VWBNssAEE4Dotat5J3Dg3C3C4JiQBmZyph4",
  "key27": "3VFDVE6qRXe5k81mfXYpnSCviSzJVyvC3KKTMeUfL3By7UJLsyeZpMnq5htAUYyjxeFQmhGWyfLaPgzubUnbxBzQ",
  "key28": "5QtTMdPYML2chrmQEsrRf3rtQ1PW1ZJbpnN55fShtGzRhMJzpBGLmVHzq7usduL8PKjLEu9oLVidnGzAcCEVHKz7",
  "key29": "RXWsZxuW7R4gBTKk1NWTYw32zXMYV7RE2xYggBLzvJm9rPr1REv2JzwUARc3v3bTzRhGFqesDJ14nWfc2BZgQ21",
  "key30": "3yf8LZ4x7taDpQ6MwM94emKKU8mmDvNq8ZPBpfPwMGS7BbEfVS92qd4WgEzK8UAKvUWX14RpFuAiBjjJcTGfRWg7",
  "key31": "y9AF7eipGEbM36UMDpjSnx43D1YuuUZzCKq6Wx8do8SxiQKxieb1Yx8v9syEfB3s6bkf2wzskEwij63To9E2cQR",
  "key32": "4hyfja6WJtoUyvTTexadbd4yAD1DttN2SsjKN99TNTZRhrxhKzydUVhyqya2DzjuscWsjfbpiL5Wqdhmkq2Ldzmh",
  "key33": "4vGxHZkQ4vpVXt1t4H8agoEKJRAJkS3Wh9jM1yD88HkcvaUyCJbqqL3Whth4wXCin8jzqmbC9wbiMxQQqv1E3j1w",
  "key34": "3TdjXsraArmWrrbEnGWVj98am8A6fWSufGqDcEt3ZBQiTpRwGGodXwTaCtY3tjZHtd6AqC8LE3yCLSt8Jns3WwfS",
  "key35": "5GLXNnVkYnJeeczEoZxUqqcmPosB1J8CLtwvWRFTTtu14ZR6QHbqRAMrg1rmoBavr3JwTRjutpwJe5JgKDraiZG6",
  "key36": "45bSNMvqMHV63REVdWMP9SkACUPQjqiZbgDt59cVsJgv59uos5TeCPyvmQ8Nhb7hV4iP3oayE4LbDBmou23tQN1p",
  "key37": "x2bx8JnZ8JHUKZYcAxp5gUxbnnZJe9JxJr8Wqf3fDfDBxZY4T5pzwaLXpF1YhKCs1A7Z47JFRfZV2AkQKACeqHn",
  "key38": "2nTaXy5NxpJBgQtMzsQahVGZ7AfyUChh5nzUQc4jSMYHKFWq8tx7awewXTgyChThVJ1YMFRfsneYputy7mJe2anJ",
  "key39": "38g9Mp9FhnEVjacjNRUsQnMFQ4svaZxpAHYruHpkr4yXuvZvH8EjjN9un3uAqbJzbdoNSedcynWg5xta58zmnrBz",
  "key40": "uMPcm8saUgGWG1fuAEEsjNmJEPLWxbM8UUAdVzchBHqX5Ds3UhAywr7wp5pFjDQehisZqKxdpPqnaAvaQ7eFY9i",
  "key41": "LgKdBNLMMJCyYjt5fm4Mn4j7aucVsACVNUyQoXUfYNjBpRJWq3kkuf2Wn5zKk3xU8Ekz7Srv1hH2V1Dj9AZzd49",
  "key42": "59Rq2MMDSgJFK6xex3rWG5dzoNiZM9XNq3eoncFiXjvqBvtjcsgs83pd6pexX2hbvPXHuNLk5WcoCYu6TjRvhnWT"
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
