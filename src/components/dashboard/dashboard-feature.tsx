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
    "VU8cNAcp63nVDsukoAapRtLybRJ1TFpDu1DJyA9heBguVSyCwUCHYTHcYeLWogY8cb6qJ2i7WWyJKHAhV8KDgi6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43Qyad8ZtZHinDpLALMXWShNz8oyztsHMFJuVA38tWM59zJ1kDxZ5tcvn5v3vgvuKbHr2eCQ4FYo6diUmDQKdwqY",
  "key1": "5bH22mQyP8em3DKm1uCvDUZWPBvHU4U4LrKkVXUANVgNVk4rPDbMkLKwv7iRF9xRp2tENYGMbYRDs4VvXzwfZWE9",
  "key2": "31ZaS758g4SmjWknSrCZ3XTE6dQhi5iVQK8y3rAWdoNev37WcaesLdkn2tdeGoP1ez56aQbECF5uEsPQZFvPwoSe",
  "key3": "4aLdVzc1vt4AC2N1PDWvBA7hP5ogmrf5FV83oz1jyQVpsEiVvDtCU94AcKEtSVb7HotghAKWnbAs8vmSFNDgJ6CX",
  "key4": "4pW8LRx3pShvyKR3pueEHfVqtAMoXmhtjZJZWj98QHByx7p6XqPJzWcXCyJHih2aUPwGGrPGWY6cNZ12JMtt7Ui2",
  "key5": "VXBpzj5Gat25kD9RXJhR82x6YsGdZHQUqakU3GUi4dr2cPY12AGqNkkbFQ83bC4s39dAtJtV7oe7R5nm8veWC9k",
  "key6": "4k8xLUsuRmgtDCQASMSJXVMXU3YpFjwrcKFabpNgNnjrWctDv2Tj6v3Ny8VGSWKWJCYKm5fTv1RoC8VrnMp4FkGz",
  "key7": "JmWnuhXYBxLW49DsLBHnZoku7bfefrc46wMiUHzHP3JXnvwVeAYmrV9xH1Kaoniu4jH6tBbpRa21exhEV5tStBd",
  "key8": "4jbewpeBKQgD6f77tNyNo6eKeHoK2HvALpu82NPhmXNUFmoGoEZAs7EmT8JxCA5ACaFCSBV8fmQVDUA1mM9upVGs",
  "key9": "58vGZRiiRYSVcW5b7s9RmV4mcRGtcKjEGC93Bg9cQJAwDEFGYxHfhYJz6CuNfk5neexP8qB6pVSpdjcskyTuk7E6",
  "key10": "qnUKNCQPS2djYub8aLjFrZXpN8q2rN8gnLCkhGibAYDthxfbdGhNBz6uD2SgpEfiBz6DNJwVFVY6P7kX8uqbAaD",
  "key11": "5TYqsXruZeyU4RYHr5uC8CzzJqjEwHnJ586VUoM1eAeLH3kNrSppQonyej6jTYHRpGbPpmee8DAmsGJuFQH72D8",
  "key12": "59TrsgM7gmW4NfqJcHZi8GwzDpAt4dBPWj8hf1kpDhue2S2gB6zNWfwQnomvCvunAgYAuzM9k8QpZPtW6ebM3i11",
  "key13": "45x4j5PdVkaZyAEZbu2AD288KvLA7PHb3ot4jedCnqrP7g445onaD23uFGYgriQN63m5CXA2c4Uxu5L1bKui8dya",
  "key14": "51sBUAN6eMoUBwtEcM6g9DsPKsVTmPGNfuGSgpmRjEn67Jop32qh1QX6EEkE2j3dXxQvT1Nh9qNxyWkuwX23EpFx",
  "key15": "5WXK6tjGNgrkMC2Xmrnvttphk9HkKXUFhrF45rF5yVFZ9e7YZdimywb2xLqr5nffDrtpoDKCb3mhSkGmyFyJMaAa",
  "key16": "D9xnwEpZRDfJQHG6nt1yLBBd96ZJ5f44rAsRTy67qZmWsG53Ko57Evwu5jXWmqsyGaM6n2ni66Lp53Koauvg2B7",
  "key17": "58KSi6AdTJZBcGxRWa91DVti8pJz8XVXC7AAbRHrswM4dyoo2VuPxo6TX7esoaKwN7wEv1Be6JGFi3ebZdwp2aEq",
  "key18": "64UVaGj9BxZtAtBU1CeuKCe88RpCAgK9EJ9FqAhDznHYRpKxEpHkD2qVhWxXmi5FYPRdoTRjC2Y1Q63KG2SbAdTr",
  "key19": "5jQBBVAXGCgCMeTWzkdkWHyXSDkJ3okK7xBE4yRUjxhdmSfGNqW85xoLenRx8CEq5zonewu4pPnVbZ7w1jPNgKe6",
  "key20": "2inEFFZhdKyBuB2djWudyL5n3oSCAYLuPWr8NmhK1ScXoNXL5aLEiXVe2D4FD1mXrz6ZUq9SWi5So45aHs66mnyE",
  "key21": "65yWgJD4b4YdniDFfmi1XYTP7McorYtKPBg842xD6RUvF1g7todb3XVnptdAV5pAPNTMV1xsKXMf41B7QHnxtHre",
  "key22": "3zaRT234GhiU9aEfFumCqTYN829BqjjEgvAZ4rrsi2hPF5mWZKwKAzcwZarU2Hin3DnBJ9LJiiFnAbZpDVEDHZQe",
  "key23": "5MkTpRg2wxYELr1zzic67r4EgZc3hhqm35icWmfjqKPSyrhruBcamqNQDxQ71Nd3orgHtz7QJPsfKxChDFr3Z4gq",
  "key24": "44CFv7hvqVReVuSjiQJ7NozvDECfURPYKaLCMWuQcKGHVcpL7JaEybS7gT1XqChKbxJSupq8mhbq3qHudaeGir7z",
  "key25": "2MwZpXTW3FCQgLamFJVpv3mHtRQdsKcrgfjLxDmTZJQ72kCfUd5jGAr2JCyLV7k931D3RfQbB1Xt8PNkiP6v6UZK",
  "key26": "QGhgDgBtTTXGh5tr4iChUphg7oqnQDWirrU1Bv1H7SZB7bX49bYEmDtx1txEjcr4cejmi3Bwz8xvrGQCdQgdEhR",
  "key27": "4B6k6XEaAn1vvioy9L8aj31gPXU2VZrnmHDCSs41wwtTryMPQ9wGqEMEfkpx7nU2gBcx9MxAmS23nNCWe7hnJNvQ",
  "key28": "4JH9Tg3Txv8BZsV1VubcsVSufg5wQBGa9c4KtDYYwZgW4aPR2T62PnNwsV37RZWaVwwywxQk5isanhuTMHNixqFY",
  "key29": "2vtGpxMBEVQB7qAiFFBsRUs2uLvY7GmmUMcAnAmveGs1X7YfebVB918HEYDW1rGHhiDrxiaJ2XTbFs9cB9v12Ypx",
  "key30": "GWrGjsFaDDosHio35H7QitiTGu5nZ2HhxtKkaXTiRyBJcrCQx253fBarvyV96hhL6dQi8hrD3KiBtEQLpWK7iWa",
  "key31": "3zXdGBSZHxexxZZMguZU6ZDUNAYrsWMaXTYFADphrLoLqcJh96YGpGgVPkWbUhaFWhckxMntyhRa38xEkG7Cs8N9",
  "key32": "Sn16zYiGD6cbc3ekM4tLaGf3oUCKNjFuvozQKaEh59zE9KZRXBAyQzjFk9mSVzdKuFzpypSdh9irhgrwPE3mhaS",
  "key33": "5ur6n8MC2ZjqMegvEr7MR5nF5Snk9kC82NhRMLJPfS5wf3Kh1GEz3i81yQriPSAyiwzLajFBggigwhqrsBjmeasa",
  "key34": "5KAzC6RUZsZuuMQRqVmoFauuVyndWUs3CBGowDQQ24vnbGCPAbdemFW6X6ovwLvwunkGYectXSQs87Rxg2J8Sz7R",
  "key35": "Y25kQqGC36YpGhiTMsmqhxM2t9QN7BydwHL75WnA6EH78bAEHTBMc1hb5Jzfhr1dhKz81gUWzTCkVAffhp89WsJ",
  "key36": "F4gnBgsY73CJWQn6WV6CHSymSh78QAY2qNB6NwsHymqXaGk8QXS1ejaFi8ckUmTRAudEv7ausjnWAE4qNCZFhsn",
  "key37": "5nqMeajpcKCG9oy2YYbS61i7ctYiYKtdb3HbdiuhY5FNhSq2LWBTqPHarL19BgNeSaxs4uiDxqoa9QHjteqWvMDg",
  "key38": "2kdroqX5CTh4jAKjehEBR7rossFABi56kUPxPPyvdoWTuknGEHgVuWN4Y1Ky7uhWTcpyo2edg2p9n31yXJPa1Rw",
  "key39": "rNtHVGaUd534tfzUb7pg9tDHD62sMnZad2UPg48p6tHvFKujzvHiBVUN9WbvLkifkvgeUinGRHCRsiyFTYmszdG",
  "key40": "57c6iBW6ZmDDL7PyJaT5DvdXhxPiEfFvaGgEA6ZzxxZHbfNFkaCUMYFrjkm9yhHowXGtvGE9kKAFXpkhXJkoSqVE",
  "key41": "5LVViUN1GwG6xkEdsYjUg6JU84MX5UyFht1VUV3aZDmYLrUf9NA1QRf34EY6fqpaXDmmCQvHjpqG6c94zisQS1eJ",
  "key42": "5XZpmigpN1QHAjGHB1Lgt7i5bGnwzMe6JiKHvPMBA549R2Gxqe8RXucThkPnSPnHWfwteJH3T7ScyjrWtmwSmToB",
  "key43": "4PNqkkbQT8tUrbgyui66WbnqoBoxcVUDkSLNAYg8YeTiNeTQvu4BJyEtuS6Mj3ffNtfETvB5p2g4QzGCSQt15vjv",
  "key44": "4GwuHB5TpbbozKsKoJp7xzjUCsb6jUrNf3ssva4FEWKG1BLQHoGgvZ6Vv9KEHvjShHCk1Hz8bfA4Uk9j3RjGkrod"
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
