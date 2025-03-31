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
    "3bTAEw3Lziv1HcNEzgfneWqZ9eN8jmfEvtvBHex4huo692WWArTeJCssKEBRPDSygdDGajtPzZw1YARnDc1sjbYh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iLPBgvxGVxhHuytTrR5fkLLcGBi1GPtmQaPrTRVzfe8X83YEGSe6KQqC3cuPf2UREYQ5oFovjKhnvkGhVPn19dG",
  "key1": "5aKTsX4N3ntGsr2Tk4yZ93nRkkt4sAKU1MDPx8LVV2wrPb74wMBRCfKgEhnhuYw8UqqWAbgcgtwZxJqjvuE4yFbi",
  "key2": "5Qj1E7Gdz14wwm9B9jkGgMsroLy3X68Ycs2eYn8cmhDUgZPULzmuvz9Pdy8eXDkMPi2i2znidJKwqPBpBJGqjutR",
  "key3": "2FSzPMzTHsAKyj1Pq8mmsQfpjR34uAA48oy1ZuxbjTUjSShQviyQbgopE5Kh9qA7Z2qAbAqJjE7LtXmT7aWFzMFV",
  "key4": "382DLJoZXknVUzNnfAJQGsBeXYmvwzYGVQq899wQba124Utxg5ufvp9uQE1fYrEMbmpyKoumauZB4vF1ybXyjkeq",
  "key5": "2trKEYYNzhGwuxGkKpBXWy1diZXw3NjnqPLGWzFNSw2o5WrgeRCR9X8EGcHABC99zJJ34vGZAfGkpXZZR2ZFC55w",
  "key6": "C9HCpxR1HB7J3KKQNRY3vxfRfXWHJpUrEBgDna4RuDpr9KqKpEMyH9beNXPgfCPhc3AqqXDZjwtBDd1pPeH3sQb",
  "key7": "5B1JGsvJYtwXkAXB1Ukhq2HHWGemqfXMMther8SuMA2RdWXfEtW4BTTp9WPcX9BGfsF2f2XH6mvqcS6Qy9yGnX4D",
  "key8": "64ccMhmo4mcvsWuwEv5Nz4WznKVMDsW7CL5g7iwUvMPKCSSCr9wbozbJxgdU9z1bn3aNV7eonNxBgmbghMSpAxN8",
  "key9": "418vEGbKMmToFUg5N8FBgB1vk1PqqoF1irAvsrLkBkzqhmuFWa1U5YV2WUQAFa1D66sknzETsjVHwH8RoPCLs6Gq",
  "key10": "2LnRJZkPBsw6ju8x7ujyuaR6Ny7QaT4jD32LbcX2ibJwCJAv3GDseuBwDRu8H2Eep3XnSAz1WE4aAeVLposKFkRV",
  "key11": "SpW7K35CndsZPnmbkKP9BE2dajx2qytKHXwZLb6ATGdCeYfuYAhPyVXp8U6gQqbnmXrzk92tB9LPbMXhKNw3QYs",
  "key12": "2PkaDQpsFumVmZRf69wY4XHKGu1QzcaqyefphLMsGLXGUkpqRmcbXYtkHQru7ZnX65Ugcc7K2sNYryxiDxfcxkpH",
  "key13": "2A4jT1bzo5ttq5E51LAwWhijFbvbVNKSryyVPC8RrzcXMgefPAhRsvJYQKoWHuAYLwKNFC7oTB9K9UREM2j8Y4ZK",
  "key14": "KED59Jv4eWtwnGcKfuZ6xWrJwGoK1Syzns7pYdgLdvkYFPxLg1xwGG8Du5uWZLq53uJkHAyAnQeyRGaowTPwTD5",
  "key15": "29QAM54EtfQVhwn166W1rCMktKk3YFxCaUsgUtMJ6hk8bQdMu9wb84R57UmQLt9ag9y8h7AYKWLTgEVmCtBeH1X4",
  "key16": "3wKgEUtLQW1DNk58Yn4u892BJuKSc7r1gX8djPHUHvFFR9m4m8QZBMzsugfV3c9yrY4QyxyraTsjingXK1ivkedh",
  "key17": "5nESjMwtmkq4HLXnzTtcbpHnNdwgfnBTr4fdeZEGncJYdKEKfGdGihwSL4r7jJwm5eskjsXeRoJpvE4hiwDAEGYt",
  "key18": "pDLAiyBb3QVYDsAqkEZFSd4avqtRiQcYfgiUndPcuRD3gCBbrYTnxNWTg6CDjDAW5iZZznYXMqaT6WhjhLXxqPL",
  "key19": "5aLWEzgRWSxa5dbqcERgarMN5ofVVzcMZhjKnEJa8Zmwi2GnjhEB6kqFbHQiL9Yf7cwCoFit5UXq8YGShT5SXVue",
  "key20": "hVRrT7jiAUExqWMEjwyDAd6xPY2KyEtrjhaY8Anky9LgSe21sexiL2kvr3hGVWw7SWJUV93Yzs1r4QqgsQA6Xid",
  "key21": "CyESXvapUojAcc49VmMyuwchWsNn2FqpftXnDkM7bNEVUwDp246FPcGAHcWBB9WDLnCd7jzkK21fjyNcNfi9BcC",
  "key22": "ssd5aBvg1oN3HAp4q3WYiBH15i7pMZLpbEYrw8N5Dp1Ca8jFVh5FonbVGnRgBdtd6Tk5RX2GaPAe2Hvin4WFLJB",
  "key23": "4bFRWWVMoJzuwHwAynDgJZGs8XdLvYpQarjUmrru8hKbRth1UHLnESFDgi3bS42n8CVTGbDLpf4cFm6NpnbbrAJy",
  "key24": "5cpuHsbP5tBm4fiHbFAV6DvspeZzvdLA1WqS18hM39KzbrBANHkXe586c7T2sxvSLEKkZQWeCY5NY97yjY49ZyVV",
  "key25": "vxkvPaacfYXZ3pCfnyce2Q95PJ1BR446TUECVErw6THTH1SGqHAtFVZ9DhULaijPbWB4b7j4sG83n4tutvyEJ2R",
  "key26": "5xzG4zxNw9G6gQP6rwF4EwnXaS4hDG65V5Uynp7ej6THmfcRSSAzN5HWRfEaSbmn2eapirZQy2cByyCXYPAoqpqh",
  "key27": "5fVyzERfQ2VBe2Yb6JoSw7DwLfBCpXdHvXHTHCesinrhMcfNEzE3Mn6NFn9B4Endbwe21MJXU8JWvLR2m3UhJVDW",
  "key28": "2G8HTMsq6TUaurm3GNSd1ub1YeMXf6VbBQjdWa2VCiKyo3y1hCxd9rA8LMjoayBucedm58psiauCQH1SykvAuxPe",
  "key29": "3qtsdKq74HnNsKLAtafvuR36KhWy8n1NjsDzxym9BAMqGTEkM2T5c5dDwYysD1dzytnX9fXvVQbEAb6b6PBRTeHL",
  "key30": "7LJ6JXcQVB7hyN26nTNzbhA4nKfN9qR4cYBJQWVgjxWj2imavyeLyvrHWBEqFtvojM9Zxk2ACkKqNo6zRvTQU9P",
  "key31": "2Ed6R1PeWV4Z438YcpU3giTfJB2cRgkf52GvQ5w9GLW69krFkN1XJtcP4PA7gnc75Fszy23hJPwSExsPXNv3rcj5",
  "key32": "Z4AxDww87wK97i3QzVCFEEqKGRQeR4uoqWpY1PHYaH1Wf3iUZ7Xs3BZySiKJ3MF9b3mX6PbaKUFd4akGaUi6K5U",
  "key33": "3MQGsw1NzRhJ8wWMfqnZVrUnb7scUB2LaCp58xAGWLQu9bkZ1jTxKDaTgM271jdHG1pVwaXxfoVeS8aytUgeRgSh",
  "key34": "2P1Q5T6Dfb4Q6RAgPMLkwe7rbxrLP71hvxe88s4KnntjV1LY2qac1MqzvvHNbEtX3w2tgyFwx4PgArF8tSdMEMk5",
  "key35": "24mm3GKFbsP5ZHu9FXh883pvp6uozgPLdtp9hNoaK8MRJxJDhzmnMg8fwywLAmX18rdDKeBUst3eMP17dRg8eStW",
  "key36": "4LHcB4jqQx97osCFc9FNAvy7LSHqCzx7KytPowTuzy6iCXvcdbWwTU6b1Fr9kGf7pgMibGg84LSZMVJqiG4Dv5Y",
  "key37": "4N92Q1jr8iyv6fS2unnbCzSS1gYrR2YXuWLFNhBwPrTjkeEyuDgek1RcmD2W2d235TpRnXF1SnmbE6U8wdpKYSFK",
  "key38": "5HG1dGCWg7SM7Y8bDRGGbWXQjyKUWBErBdUdUWeSPd4VBzN88bSw6eeHPNCCiHKaTCWqFHpibdWPDarpitGqe2PG",
  "key39": "2V5Fkgud66r7mBwJYU4sYcejtnv6xzt3nyA34UVxY1gE7HaSuu1yQXp6A3y8u3FpvAx3pQ6N9H1ykShDo2QriDhU"
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
