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
    "3F15c82nv8dTJQaTTPs1MtDdztX2BdZdokiHm3GVSd7tUhayqSKYEqNFZ3vWwxavNAaQPjKRnD1mWfD4rrekKgEt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hqhc15q9HUdSdXNkRm2dGgHisXUCbGrcL182do4eRhDecojB1erRDKfgCei4pjx5Te23JqHr1yZKTpNVAjCmyXR",
  "key1": "ruBbqkRET93ctVyNFiwfxme7aqk93mthFgfgkkXsQSKbmaYxoMbg5sYU9HKRrc38Z2YdfoPVKtwA1Xw5E7qA5wy",
  "key2": "2mkwLDEYoL36v8iLSb7TiV3dSWuYBKddjHS6cdRv6ouUBGQfUmokwYVG7qZ8LoChCaEEUYTn4orXpFV6E49YS9WX",
  "key3": "4a2pVy6jwPXA4B7zw5s2bmV6uDiYofJjPs662stSU7K727qMUrAkfVxqvacykWD9imdenCZbqbrar7GPF1oQhUZE",
  "key4": "5PqaqSnrrwokB8v4naCgo6SoTMQMzt21HDyrEKStfHs5RhiRhwF2Hf8Rzz7mPgbLSCWW9eYtV5rpu5Js94PfA64f",
  "key5": "2DDShTGFVsELZCWCrjZPVF5axnnmi3SBC2ybd6eEqJ2TcX2nZdxN1m7G4a3FNuXJSxeYgzjpe4hK7szTktNHEzkL",
  "key6": "2XpA8GweH423svsCBVLdqasTwFhhYfXHwE3gfvYizheaeBaruZZwdos2H5u3GTXpexEPmq6m6MX5qJsnDjGRrYBx",
  "key7": "3o6BJrpSvb352PTFPVstuwY2AWaLsKwnwNcdiAcWQnwctPWFMdWy1XNLtB6EaZ7cVDskGBREwXn2ymCKoJdrCMhe",
  "key8": "5Qe4XUyXfLT1BnfFU1QerBWnkM5kkAt8n3pYDWEsdv3aNnwJ4oDZfBZ12RfzpAJe3d2S9WrVuvrg3eF2rSsXwDh4",
  "key9": "2xkRPwqx8NBkVGPS7rHFXMDFcSkSxjStPfwrbYzHJ9L7vWBZW5KGmRsqeoASygfEWcyESeeE3hHmGSb9r5kHjDPb",
  "key10": "4SCcLvYVRRyzi6MiJn22i8rniE6RfYrHRR1211aKJBLSuNRRNDeGoDom8AGE61p63TQxE3Mwz5JjZrBD7mvBMKQr",
  "key11": "2Zv1HmUfFNqvZZvhwzeGCNJRDMois7UYSW8KSX7RHoTDK5iDMu8YSA1YMLiB9zV5k7ELNRej9T5u75YKvbVyM1JK",
  "key12": "4a7h3iojNgnjAuXpW2enxeQJBFvojtVHTSn664X1JaX71YRnhuwev5djRTJP8gs5PW82XobFJvjs6tBoTayAsAwz",
  "key13": "2zPQTXWDUMLqXDPsXBqiWuXfEaHqwuCGewz4V1DmKWEDBDRcKZGbFgPGZYMwp27XU2deiDpyehU8LSSADnR6TBaz",
  "key14": "MpPpwLxye6yVkzmc4vN2BiXWvws8BST9uvwZ3iinHdhzMcf4PxXzTahTuAH5BYbF6opc4iwT5JArnkiaK2SkaZh",
  "key15": "P82GUXYdKv8BK9AHRSaMD7kW5tgLEThHLGRCGwhePh8RgJc2eKU2xkcMTsmLfZFqGxzdHqPcbBcpkAJzc6fRw2E",
  "key16": "5KmedHbgDW1Ta9x8H1qPzyhJWPhmjmUfiunVX5x5tbMzp1vkmH6U7Gf5pRMZSgf3oyujj8MEeQz9sYkgCq3gWwve",
  "key17": "3uS2i2kwaoDnNpWZpLbg8HUq1GP7ZYDD5WL89J1G6ddJrx2R8y6eBzy35PvxgjXhZBVn5PzddLhP2jSEkMTV4JQh",
  "key18": "sY3vYFFwEGz8GNpj2QmhriX5ED1LMu9iQkncCBHqcmZJiMMC89b3LYy1HmUsuSXjZBdTnm116CdtwMYyooWiC95",
  "key19": "2yr3X1ptX1XMcJJX3Ux46fZFG6UPd5xNKQYXMUwSe2asiKGN1rVdK9E9PA4pdYQRUU7qWpoqTA8bQQNUQYcUsS7f",
  "key20": "2vmdxhFML2i7m8ndg1gxFSqL1Kbjk3TFiL3p8EpFMG98aQXB8novLjbwZtNVb7392FgPPh4wVrX7RPBq7wnwyThv",
  "key21": "3sSUvYj4mRb8fC69r26V3nQvXr4uBpK7Hb1wavAjjdcz9E1m1fqHYTSSLK1kdwvUvBToZFhbsepad3pxpQVBu6Dt",
  "key22": "3h6U8LM18Px9ezEdTAFj4nMrFLXsNmLHB5a6hFKJZnrrWNiELtXwAjf34CNoTh5LpWSK9VJ79cpJT7YwFZLCcqsM",
  "key23": "4oCEXcLadhGnwENXmfhNXdBAwYxQeNukoY3oEoENKgbvH5tGi54EgRCWpMzDSZgWWZHYKQZmGyg1GtqM51SGtigT",
  "key24": "3K4V6vpGhtp6mnRnEmKc4nhMmJ8i1JajhRrFC3mYH3BGaFEGqpDYqax377wRQTzTn8oL7AF7WUwCvM1XL8xSEwPH",
  "key25": "3W3TA8pHZy4ziaZ8Kp4i7gWbyj7Jdtxu5NzSn7RUEXe3FEWVkJV1RJMG1oqGyUVwhuRgomPNmGmEmDAmZHZM9edp",
  "key26": "3cr6LwwJG4mNsjp8MbGXUqMbgHpfrDQ1ky4NY85QbrFYkmfWPfCmtgSc5HQ6sN3GmVhL9Z6TfdKyPSQAryS4QFrB",
  "key27": "5M7Z6oxUhKwdPWxJo856vHszWznFkmd3hBjrv8CvM39Vt8LrDf8Riajj8sWBnq87jmcckRcYeYqoMPK9D6beUm3V",
  "key28": "3mRCWXJiFJajayor2AwsqSrpmRbFmG76sprYcVZQjPb2VaLZVAXLVTkmhEq8cuLJeRfPdYVRFtNuMobRa8Lmwrsz",
  "key29": "hQxunSY1CLLcEGioXedkXuWxLck4MkKL4smGbNtvLEu7DBJvhwTXvM8jwB3PU39fPhMzi4GNn73yqUxFxmWmj6W",
  "key30": "26wr39tQic2upAAbh29Jws88snwcptNqDRDxBG6sfEYubXWsNUugWtJMMLNLL9xfAFwsh35pcytqQLQeCsdPdhKN",
  "key31": "5qqevx3mwDmxYRGHZbB1mtpTBgDGYAE1mDpSdGwwQgcJq88zjwJDzVY6FhRtmAWr5bxRGBu7nYgd8Co7bmxoXqQa",
  "key32": "3awcrexBLmX6JWujKFkcMoNwcr9NrXa6QPjBCZEwHtPVftCkTRZxLkQozQjTrRwP8ostbSFPX3P3jVyFMNM7gYcT",
  "key33": "3LRWYLaxUALn65uuNKGVJTx6US36B8rs5bZnVk79cQrqwFSmreTM62P8jPqDjLDKEBkcoYedNgBCq87z5ZQvbmyX",
  "key34": "5HMYuouwkLzwwzKwYipQWXTtTMyWL1jvTwM1Sx3gRoNw3ogEzcjXsUmKXA2dhfoS8w8XRADFGMrkm58W4yrQ3mGz",
  "key35": "3KA8FKmnL1ytAq8aMzirWGjdkJRqEEzV7SRXycupFs4LiGNTG8VzgJ2XjtcXq2rq3iakULYFrbhiY18gCsY3qZKm",
  "key36": "24BabZe6jNfWJDvzhf39A1tNkHuqrsXBmrmniwMU4SLKDDzKhf7vRE36ATBCHfeoXEQtxVEG7dt2We5rLLBkypPh",
  "key37": "d6AWaZrLdQxrs4WpEYGK2Siov2rDJvcf5m7HPPY1Ehu8yzAVgxyLsZP5Eoo4KyQb6DhDzzyBidFLFDkiTWFN4bb",
  "key38": "4rcCNJ1x1AA5d3Q9kh58x6vuLxBZzyLRq25CmBxiaP2U9i3Ny9mDpDKVqr2iSBdmAMa9vAc4gg41eyCgd6AKuVqk",
  "key39": "63qE6CVPFHkCWjvTJb4xi8g9hH54T52eQjzCez27oDD1DHJiXJaGYWAUbh1hGaXKYxfgnZJuPuakME8tQgu7XDhb",
  "key40": "4KCfLmg1rZdnKSqh5bK7vaLjChJUnCDSKvGW1LFziG9pjdGqbbsBB52S9Cb5XrrkgnddNw8jYy7U3HQUx7Tn7Z28",
  "key41": "r4Zr8As43kjEzo2TimweeXV8wAsJfJgi4kTfWmgjKV1qFW7wioPpCcouNCsv4DeD4cW3dJLwxdNiDg538mwBr66",
  "key42": "3ZoUWwevQt16LFebdfjJiPt2c5h8sYh8eCcLh7cdnT7tPhuxhHUUJc4pLwpaH48tWzJzR36L67QwJmETSpAiWx6U",
  "key43": "4X5G6n8JSrtLvAZt1X6zDY1QnPVyorAkvFBa3MdgJ2Xcx4XpWE8wkhjeYZ7GLLP721zT9u1PGthYwDod3NKj48Kz",
  "key44": "2iEWnpk4PbwPoeCF7U1PYkTP6PWqBB27QQHXP8s4tH27pQVw3Q1KYs14eTPWxdmycn84kDwYHk5wMAmEoaGVuyWn",
  "key45": "4TpG5UsoNPr5h4VZ33oWG9kcxVtaNzn6uzdkRN5VgCCyscC3CsAFXqGPxo9oz8iQmSmTj8Q3hkRb6MsTBq4dq5jJ",
  "key46": "2BUgEFYMU46ZAKpeshx5s5Z96LJna7MYP5YQ5Dhty4GMKjHbF1FRUotLSisn9YYcXoi7mjydq7Hz9eEjaqnQY9mT",
  "key47": "2A3UTthSWXAUVSNuQMhGf2zYu3S6XJ5adkFCpNs8reqacZujr23dPit1k7k2vDivxoeFZsaejtY2z91GADxKsZCo",
  "key48": "4n4uEM1q2v6c4Y9gzPmDCfHXWJgbVZzDoaHvkh9V3sGoFNAufEzgs1QEbzkKMLoUxeddksKspQpUmc7qTmjKoZ1C"
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
