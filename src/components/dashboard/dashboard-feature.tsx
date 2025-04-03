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
    "qyMZ8Jkuer3noKje3q34cUF4B2WkuyVjszWceDuuK32FrQxyXBsXtnYH8QKj353rb6sNLctqpiT4N1YLZtd7qD7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PM1Ld6PHxE2FLjLPR1xUYdhLEAk7zopRzbx4vBETZnvJCb7o1Khhup8jVnddN7oEvUn63hhmRPv8airY9xqP9EM",
  "key1": "yBbw8F9M9scS1EdpRFnDAHGhJ4s2qa9iTezKhi7x5gWhFPYR3hpw8VYrRMdesiwCk5ugvsfmgRox9d5CGotMK1g",
  "key2": "3tV37zjEnz9Fon9Qb3HyrHoj1cyGBJ8Hti1t44Vhp25rdBj96x9ZSu22z55Ac9GsYYP1SniwGuSrY6tQ4KFARi2o",
  "key3": "3Z61EPCCCdDrVnFtNjUqHXyJ9vm9uNgpiudBJoSwkz3Jp5K5A87hqLzropQPRYFQh2JQKUQGCeP5N5HF61qjWimd",
  "key4": "4njFmpCZvPZNELs551G7RvmeyxeCeEamedgZyaDfeJDt4fF1WpbF2Dwa6NfDU8YkrX6hJyv7FwtksHHWkproMWss",
  "key5": "ipVspjZy1v2m4fughdTXEMLgA4NDu2VW4HnRhe6SKbHYXuveBQdGSzpQz7rcoT2HfsueuwSDx7hU2V8hC4nuA4Z",
  "key6": "589eribmmuWmtNVW3QKD6otqAaWUFhFNzeyXjJM8ELRGjdRtcNm7BmirP8QsvwBxfQ3acbh2xzFnhDxJS4kNczTY",
  "key7": "4cwpCQchntpJEMGN9sfX63VrWwAsXR3GvSp79fwocoaRpAJsk8PLv8KixFB2w37LUZYinySAZocXdGTTFtdMydLy",
  "key8": "3Co6xP5HYFCxUmCRdpc5JNizpmSNzVFPSZiifrNqiDxb1AyZT9uBaPVxGT87XYZqD3TMTVQtpRHpFE9KNx72zPDY",
  "key9": "4nRgvV6JpdR5Z6VK9D29UeRnp7X5UBbgmXadnCH6poHqp1Vd4Ksh2HviPyMBU22xSs6zqJTXpznxndBM2EALF4H6",
  "key10": "38rgM8jCV69LzdE2TekeSVqHoUX6eKEmQTwdfUpgWrXbNey4JiG3CTDWP89GoCxgcsBf555LZoZz3jcmA8yKCa71",
  "key11": "2KUrHLiKQpTzQHVLV5bDFu3Hai8wGiGF3tabKMVyJeD3YpaaRW24Z2k5srsMhuGAwBdWTDe2fDHHz9LbBpQ4JFm4",
  "key12": "4xMCrKRpvkmg5Wxx7oEVEU8oHKV5MDD7rnskEhwGd8fGkpLho8FAWZfqtrRNZLHapHxxpmt519KnBdHcr9ZhHBGg",
  "key13": "5wE5RvpHe9V6iT2PSxFDLcgBhpBiujXxvyiZ612JrcYRQ9UtjhchinFjk3njDMx2DLttjmB8X7D8cjuoQGfEPaCA",
  "key14": "3YuTPtJ6Abg2u8Lxsd78RA2e6Dcbf1yKtTM5BSUGGt3LYudwvKkGG4uRLVPhR7J2F4aYicWtcNUNWDLPF2scqRx",
  "key15": "4n3iYYqqFKt68LW3wgE43emNj2B2KGXXV472VhJJMuB8q2amnxUVaLhVAHUnbSdEdWErXczghPnXS2A7rb4E8QyE",
  "key16": "3yTfVAyB3WZvbcQ6RiRBQTYopvSkgKq3tH8pSiC6QEDYpV9b7YFRWE8G1X5YqQSDVC1wY1tGApCeRSBV6gLMWLNR",
  "key17": "JnTw2pqyDCUa14n7nw4VUUw1iubLpUuqUpKwQwNLWSHD8nHBB6ExPFcKn1YtTYTo7uriznN4x3URBUTo4FLCP8x",
  "key18": "jLjm86toTH7q6rQcCofVQwLR1W8PDJ7K3DwXRBcJLvUGSqU2ZvuHZ9XMYR6te2ZesUCWAg6KXotN81ebEJu5xQt",
  "key19": "3bTBj421z4uJKdjyDXNAuxEMv1pcMMkAinvsvnDwsuJjsutiJhKWAjxcgGmEwFzf1zkZG66qscdzk6dFm9AHCMv7",
  "key20": "4Ruz2wjcEnmXJPSiEBMrq1Vb2Pbai3njF9Cjuj9kNCTQESKPW47WpSxbJ8r9zTdkDdGCA1ttymP5hyDnT2iMW5zY",
  "key21": "3ADqVanc7dseKh5jnfUWSr4Tb2WS2XgzP1DjZDcryhEz3YtLt4BFeE4otZCxJbtLkQT5zWq32iwjnMhi1KcvBTj1",
  "key22": "3R7vCqmGiX8JndrZt86ENEWyR4uGk1xgA8r5pHDM7dbXNvq2pJ7iF1YGa3mrY9N9kNjg5kxReBMzmPPAtR7s36hE",
  "key23": "129rmBrupYodw3JDz69kBrosX9S8JMDXgBBaigqrksgEy5Bi8Li2annuKSM5Yt2BW3PMMxbExN9YuJ5pZkTw6UJ4",
  "key24": "2YpUaVqY1r5Yewu3gurU5rRbg27ffxDKUAhag9eCpqkwQaTd2cR5Ld5sA4iphVex3CXBzAEwFmzuqbojPFfPMpe6",
  "key25": "5b55A5UZqHttixnWCjwLKAAY2QUqJ26NDif6iKcuGozAmMndRC5MjvRyF6TbCoyx3RJQVCYeNdw79F2Cw8E2hTWu",
  "key26": "5irjqs7yp4DU12nQdj8YEdoXW57XS4ffWurxL1Nv1owUBA25pSWVmnz3mcRwYPotGFJgYY5Rmdg43byPi587GY9v",
  "key27": "B7AqfPuUoyexFRrVaNpmX2KCkxFqJ4h3tV6PHDXH6UaMHmru2X2zqm6cw83HDGXK7mXZFy3WqvdBJHs9E9JkRum",
  "key28": "AtR2aA54ktTtVJUhG8Kq3ASP1Vzb8UxWdXXDK6VrZN2vJdSfFgxPyVGzGkgYaYjx5gUk5Mnf5mm6h6iwSD3Q64j",
  "key29": "5cVCPLhBUXtCqDi334uUVC6augYaAFeQvZvdggo96C1Sja97MZHqTD67VFVHc83wK8V3BpV6xV1sC3sCgy9AfxYJ",
  "key30": "62U8LzuaG4EJC43CuNZob926THyNfEW1yQDFnq5pgRaZc1unN5zQ97VgoaSUMRGB86j7iSEvSptYt9tzW4YzTMxD",
  "key31": "4Ct2AZ2E2bgLdPB9uGtxQGQoCatf8oYTrkLqafZkKJcZcYC45WwkRFh3KE2LoxhJrpoHs4NidAYP3s8dRhspynkb",
  "key32": "e5BWEVR7AoLPkN1C8UVnRMiWU67WTgYTHvitskSEtyC41wwwHqmq1AcSxkCQQxGZzaUQCMfRNLfQurFEv8nAHXA",
  "key33": "3kSdWg3W5kmvfMJyCxdrt1TPMSdo3BqJwFjhKLFowY4TCc4MXppJ6VibDMqESDeKLaXkP2Y8VuSLUuZN4uKugyhw",
  "key34": "2ZJFynHbhypCKGy24tiFwzMkG9avrV36T3ENaUfcjZpJxwp3RHPMyoTXgZNkJr6Lj4RAAobWMSCWtc9rXde4UZuK",
  "key35": "5yUkB5nxn6mDARBL7LT51zghgkeXppdAfk8v2svcqWaE3rerFnFZQD8NKJWH4NxApvEV42LTdBg4Jixpao2fP2u5",
  "key36": "34N1RCfP7f7JN324N7yWNSzkLaY8fp7eAFz5g9pUCT99GmdmvASbRegW3TRjZyzy1hyGYbCgt8t8ZoHdU9vq1Kyf",
  "key37": "353nrhVuJafFmUnTJy5AdfHV5fYuNza3dzmK5ujGPkbSKy2aPecSbewCUmecD9Gm4dawweMmfMaD7Hq7G6LLyLbq",
  "key38": "4YXugShM1E4HPCPsosn58hkC1ozTuKi7fkrkdoRid1wpWnW42kM2T13Bza1fdq6vTJ35G1UGR7C67rrmKk1yLDxr"
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
