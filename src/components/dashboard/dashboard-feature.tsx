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
    "3iTuxGccEGGJ1vhKezqahFaE9Qp4PFUC6ZFwvGSR1hSdukiFJcJvDYE9d6qeWrWYjZH6Nq9AL1M8fFfVrTSzzWvK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fmq5AD5BCxURY9WF7a9R7xjcvzVKWomcynj1wLykxp7b6Xh4utX1T75SAoRQXKSe3MeFDHqw9vp9ztwVcGSTdR6",
  "key1": "qWKUFuh6tFW4ychy4zcuergLSdVGWDDgkxGv6TcQRBzbPkUrhDMcPFTnvoC2BWGkzP3J1zBUTDsN3GEM2xTdmv5",
  "key2": "5qKbXTHAfpytHwfkFLDvVT7oJAA5C2dz3M7NTpjULMaARqMYaidGSYzH9QKJZwKkH3Kfnc9AdNjHr6wKU4yL5UZD",
  "key3": "3qzBNU2aajxFoH5yvU6SuG5Le9kCdbT5rr93Ah7WELR2bQZhEnsvDTrcxugoSjaJeiGjM2BchvrQ7s9BUwwCd9Q",
  "key4": "HvnG8msMfmjdL4MBqjqDNkSShGK864QWi4asaPZZbDndkR4BECa5PyLk1jz39HR8LyHZm1rJkqsYGLMJpY5WZos",
  "key5": "xQDem6VD8xieM28yoMrWzt8btvEgh6LCi352dvKc5z42Ycay5SEJNjZMqBK2Bpa9u13fy7NhdQorvcsPuSzxkE8",
  "key6": "23sBcHUFKDB9fw3WW4j1BiMUawffWQ2pmgjAG2B6Q3bD8trb4XWqZRqpPnkKcFKe5NoNmsjbKCuWjxdmaUSBiPWY",
  "key7": "mxa5yTtgRSLo7Kbb7BGhcNuAjct69aWvhbK58h31wB5u1PnWiU9zYwYBeLoachedRrzGePTJGXYePk4xWTdCcdE",
  "key8": "2dCyT6YxUnk3iwp7ZyySkVGkpqtSXSJ6zKR8QRid15MtXEdXZvNdow9VZzUyhfxG7gLZKStDXyhpxoyhXvYVeAv6",
  "key9": "xnmWduoKHpxtKh5visJradcMhWTs8ZNAV6e2RPhtA3THwqHAzEWJNRWh24Nyq27JzqcLNoUeBDSxSjR1vqr4fyt",
  "key10": "3WG4Br1GqLADxqQ2gV8gz7U1tuKru18AHQgMKDVaPYKz2Fv9wqjStLRbpX5jhTdobnRrDCfwVNimYKRA77hPi27g",
  "key11": "HbDsBQJPutiQQb3FY6XUJmT8sV35KtH2ssdX9tsKMfUZHnfWDkVYAQ7AfsD5RicybGwf2but4LKpngjNCgA9fe7",
  "key12": "34jgQsPS3oKevpGHZdhV4HF6QqbB9pAEkhnDJxZaNbLo74kwcnBuxnDPCMqujJLMfxnvSCkKxs8BEfdDripnaqwv",
  "key13": "33ZavvFLq3Ym7uW9f3g8c6BiJBM46bhNStTQXMuYEafihS8kozBXp7qAKYQyHPSpPGzFa7qhGwRdH8tXh6eW9E1i",
  "key14": "2m3LXTa6pZ8MfFEnf41V6d6qCCnSDtttmT2UfCunmZis5gahxcL9Y6b4nqC1FciELCNtRoixz4ZqprnSCmrhvntH",
  "key15": "4mWdVetcPRAeB69dVaiMnVYvoL9MWAFk7YLGQD8LdskK4fRiPHfHWQrxitLRvQoXi6ZqnM5ddpwQTNi5USu7hnR1",
  "key16": "46qDmrtddGpKPTkV8kTmjU6BT8r4HAFgG93iKYzTFrVsC7t8ZEodadt2D248GoHu9SRfnTs2gqFNnod6e4oerHfw",
  "key17": "iwbSQyx1PtbHHJSZxwSUq9x4G66pE7BceDgyjp8TXbTsbcwnRjvXoDwsNRuxk3tDy6s84ryUqzwTKoWLEQ1QKYz",
  "key18": "3MCbS2ZA4isLr1FjRP6Vvr2hL43pdJ4NSSkTyfSq8oDERCxo7VpBZGJox279oJW4cxkHHkUEkN92sjCLW2sEpebW",
  "key19": "3s5QL2CmxrgZVurK1YG3CZA93mpaY7B4pGR3rhmmX92wduxXvn1hwN5D9TUjuPnx8abs8QhQ2VGjJrPvFzpX7Kxc",
  "key20": "4jRuqMQpfVEeSBC1woacqdqYSH9ZRgm6Wx7cz4kSAvURA2MHggQeVen8hDMmAmtzPfNueeaDmx3akRiervsuosiw",
  "key21": "3wVbudP195dqAQuReiwqssvh6dLcvqSJf7Q3oevUv4dZgKe52dhDu7ZggepzwRQPWfq9NWcr9fxAkQGyyJuFncTG",
  "key22": "3n3T1hcnYZymVBixdN1jJTQuxxtBpENN3d4mA6GtpSKvaCBgiMcYsiK4WugXJppQcsWtjdwoR25nHdxj38svcoVE",
  "key23": "2sYibft2gfupeYhG4bT2qW5BHMPDHjhZ8KngrtwkVPgywBNga4LNjyvxrqpKF35apuQUxdu3xQhiC978ZMAA3q1w",
  "key24": "3c8UGmG4kZ7qwUuW5AC5EJk2RBJT6HGfV7B81KamT79ja9evH4CZGUEbxmEMj767y7t3rcCvDVnFGzQG2cJtbz3R",
  "key25": "3Uayi9HCuP5NGiU9d7pHodBJSNXnkKZ7F4Nu3U8QEBwr1ytBaHoDnRzDLhWaVREV5HVN5E7wkA3h6c3Vj1gDTrWE",
  "key26": "6puDNqMVx5FDyiPgYxyyE4gdHywDb1skjbThMRwZq1EJeozuo1BtL4RenrAXe6pcqBhKjQgM8VMUaKANDwDi6x4",
  "key27": "4gLVReM45RhDU3FC9mevrFGvSTmcV49k2dNQN7ymDwyhCRGwNavKCdFkvVcYz42mZ55E3tHBy1oa8aU1aPBtcfXe",
  "key28": "4yFgAUS562KrysVatLoFCv22h5fJUqdWvyWtaPj6twaynYF7zAWQaoCwb4aYxKaUrzLzwNMNCh1EpudQCWQbWVaw",
  "key29": "2H4UKVyLcDj5hhK5tkMTzrQj5Bt3rxVBh8K4dAXkj4sqwukd6NavB4NTbtqCuqeHC59HGyt7NR5CD587CWozshS6",
  "key30": "5eP71bmwiu1t3z2pMVonX9rdEvFe5iQqvdHfojyjXLu5mQMWa3Vrn9vXKjujPBwSDDWSdV1u7HmXuJuwupLvaJE6",
  "key31": "5WutDGFiTwz27AJzK9bCHQxPm1y2dEjNhXYXkxJewKjSh62bAPYwPZ4TpJNv4DwzTc4qHeyGRsjbYx4o1MMd2fhH",
  "key32": "5YhX3PsMTSSDSvm2HNEuYFbRo8HC77Hytcce8JU6unB7fE6RmWZT738WLZbAXKjx6pETgASg5VRLfeTEuffMuq3S",
  "key33": "5ASyPkGLRmWH8axxyNXdYwi9rDa9yrYGFz7hyAK7ahNcaW2M6J8J6YpoULE7Fsqv8yVuj8cRYmYazik2k8yo1RNd",
  "key34": "oUaGT61crMrma4ivvFfsDRzcL293HApTXxCq3RCFk6Tqm3HbWyJ53uJSbSdNv9QKG84fGre5pukatedAk7deAwc",
  "key35": "4eLVqTMSEXW4aSqHMKbSy1jHPsVj9UXP6dDFttaycq1Atz8Wqf5cztSexf9fVjV2pGhLrLiJcrMzhq8uEcNWf5wY",
  "key36": "2DSnJCuby3H6mFJKgFHEbXb1dtGHD7zKrGpArMTbSeYwFgynCu1k8PwSUQ7icnwpbh3tX4oKpt7ZRg3RKYJpYBSV",
  "key37": "4YVdcYXPCG1T67Jq1mbYDapxvzAjZTPYrCD6NuYLYdZJ6CHnc3kBBjF9zGKxfgTgRPVe8qe1RbVJyML3byH46oQj",
  "key38": "5FbLPFGBfSHeCFPhcdWZp4gBKyT2Eiq67W7aA9BrTVThrKRwPr3Cm5rZkgfLKo5CMFRyovtSBqTpaNjRUgioqRnQ",
  "key39": "5kNaYGyye6xANXYE44pXqzwZHupwXmGS8FXcCDm1NyW9uCXkHjM8LdUrqMv753oh1jhWp6QR9owGA5ovAjwSRN3Z",
  "key40": "3BL5yNgqJUNkCaD47gPB34NSSo1U18P8owRwtcZUApGQ55yaXQXNnfYZvMwojT8nFJQiFMb1mnhEYGv1aDbXJwFR",
  "key41": "36EA6XNUK5Ecm5FphpnqzBQkkHviRGdbXTtsrmJ4Zztbd5KiD3wAdByDGRfxbVG59bbwgJmn5hSSvNVwNcDXRYV8",
  "key42": "Kje2onBAnaaVyrB257H72CT8ooZjKBbA5NzjgCWCW995DUmamwa28auz5tQvJxhv9W1PyvxexT92Lq7v2ny1T8D",
  "key43": "3YiZb7KJmXRr4ndRDRQP4SP4pjkVQ74xW7rEUks8WqFmRxc8g6Zdi5cwYAMdqEeRpbPwqFSEPQVJKAbhCwsCgXey",
  "key44": "2n7Lk6hSt61DzXogD1orJUb2rRqenm1KCcKaR3p19NfSsPcuzrbgueRH2j7pxm6FaaxMPoVeWaLj8NgLnQcgnxjy",
  "key45": "4FPSBdYrKu2DRnTTmYQFJm1KScMzpcF6LJiyVXaTahPtKwsZSUtfLjJ3mCSDjYvUZgMGDZh2U9wH6yrsgG5n6X6K",
  "key46": "3FNAxu8jFQtmFtQG5ueNv39GstjFQuvApSEpNTX5z5GTxrXibDSkEJjmpiVbXVV4jyYUJEtyv8tjCh437HPeaEqQ",
  "key47": "55HhSf2aM9dhLS2crji7TcdFpj71aaLa7JL9EUL7HpUqRpWAqZVCRoHtniq6HVcnHeYvioM338vDcTjYhVntADPt"
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
