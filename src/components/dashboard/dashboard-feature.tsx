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
    "2NkLrpbs8D5Vkh8MjnJHeyoEeq6mzi95ps8dH3RH9yqkSz8ryTGAnRJU4MEyJB6JRSW1gZ2MnVxTQMKN9HxEt726"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35cUUcNz49w54dNhDt8VmwC5M9umkgE9vtBjV8YA2cj5HzDzCmvqNCjALzoiJikSAvDUpLnyGECXzAd12NMWNe2u",
  "key1": "5sGM6s7BP2ZZYkpAEcMJRSJi3EgSg8mXmSG2c9Czuw9U2zGQbzue1iQu8WWUWn26KwZnFpaEQZSacZbGJa92umuA",
  "key2": "5ub2VSCw1CCchWK4qed8X2MuEeok7eeG3XHntGXVo2J2MCJk6D61kVdw8cN9JsjpQcHHer3pr6eVQdYcD7U1rsdR",
  "key3": "2E4W9TEcN11cTr6HCTbXNRy4sELiBmgtJLoir5CmJSjou5HmNufduPbQhwcTLHFGiC2iHa9VE8aQZ517zSMUFCFV",
  "key4": "29DXhiQEFiYfAGMk9ZC6m8wy9KDxmXXqcwDP7mAMTnrQfXuyrmJEBqjauv5P5k1ivHcrQnmHoLrhBuNJMkSfB3ua",
  "key5": "4G28iobH1BWGJoBrY24NGyXgmzcufj6i6GBqsUCz23L5UPH2Fa3pxTm4tvG37Ln23LGJ9wkgLj3yRNaxx17wHb9X",
  "key6": "3ZbYAMvFVcL1uSzoNAiii5eCqueboCkfoec7JVwEwgyPG96ds2VuqDs5FkaxTyC1t8r5NR8ouoHMTEXTRAk8Nv9d",
  "key7": "5EjdTvmnbbeep3peNdSS4Nf8aHeTSEtLKRY2pPuM3zg6BPpLxhJJhyMGtu6zTmmAZpcrphWcXWLJLMBbje78TGHA",
  "key8": "3mA3i7YoQJck6NUPA6Tmj26fiuHubWJvsW5MHFKGmiVTmqSCLfWzpYn55b1E9iPEMuYeeVekXWp93YM7ymXM3xx3",
  "key9": "2CH8Rhovio6ygsn8Z5DDr8hEkBifTCLQsS2akKUPCHjAFWcft6TH8oQAc3MkFgVg2xQsdYSuBAai3hyG3tixPRo",
  "key10": "tg12jJ6aj4RLT9ruc92FisxTgdew691hSSRq954PrTh5vB16vy3yUa8FF8hSVLqVRvuLGoqrBLZwTPEhTxsQR1K",
  "key11": "4n6zxPzq9KMbRgS7C83BTtaAERALYKTXQUAXNeLoJJCgpXqeihjRQvrTTLCYBNf15g8SrH9ur6htHxiDupFLNxcp",
  "key12": "3xT7HmjdTU3vFivo4qmR3XtL94cB6pfnN8NWRY9hewtFLbnCfq2SVqQfVBo72qvAbqrpKvjcoPkNHoXBGZw4VLxj",
  "key13": "24CAuvHqCS6vzxmWUvESZGqPbxpWc9nu34w1yh3RuFo25sDHCW6eNJ1hUeDyKqkcHLiGhb5o2LM8fdGmp8nzLxKa",
  "key14": "5ATpUwXdpCYGgbT716AFGo87DPEbpdq41KyrWubziF9CwTA29GNDKaWCDcR6sWCeeWqUEUPDp1KZZCzfUwpxMPWh",
  "key15": "4BpPXrofHc7qQQmrLARXz6fRQguXKDk3yd1K9XoNgXbqTfygJYXHsbkUhfLL2KJ5yrU7pSsQn7peYpiEfE12h8wF",
  "key16": "23DgsahLJ9hFAyTwEoFCm2XvZfbskuSNYVMXmHSjU5BUTYZWwW4qSfQTnxA5YDt54Ld8xeA3Gd2ZJAbvh4BGzGb9",
  "key17": "3umMTLEbeNwRyw3bwKgY3Ntd5PkBECdgYe4a3MJEYtnhbobARNs516Gd4H5QgFanmp7jTBrHYmngkCJY1DnHCe6m",
  "key18": "2DDCroybRsHzRbt2Y6GWNjEsEcAwRrdxG735rakKxLLJHqD4VBDCQJ1aXsnFq7tDH1LmeMT2tC59k5ZHfj3Ze68V",
  "key19": "2r5PEBoJjMSLitSTJG4cKshiPPUmhsTRdNsyMiXE45Y8N2aDKEQQBqTpWhoSVtr85bgFCWMqudSCHnzxz3Jdsmkb",
  "key20": "4BQXr9LNGdzGRKU8gshc72UamiTfoevVKwjY86odHXnPA4a9Deqo1ZK7RLAqKYvmPncjZDhdmSiC3j2yEM9eQRMH",
  "key21": "2JTFK6ymDPXrmz21iU2LUq9EkXKendvcNbbMw1nRhC6kVtnZaoPtuN1PnFeENEQ5TojbYcraoNpWs638t73jMjyD",
  "key22": "59c8UE4oE9yRaFfJw9XJXEdpkKDGbzyzEcKsqMnDRvWB2mWFXRFBBHUvPSCGUJ2pNMqHNxcnk79o1Sxpc1KL7Z5o",
  "key23": "3fQC2JTsZNP7gowo11U2UR4BYb3Fx84dDFLi35kBJHMMEtyzGkMMjdeit3U9RfvXLEBrUXvhtJoNJgBBzvQqCzZx",
  "key24": "5UWg5U4x4aHPrshGDukGwSELD3y1zt9PD8JnDdwJnBgVvk1shSZ4eftDnVM3vqHy2DpbpdebvkrLR3dtqqjEKMS6",
  "key25": "XvYSeDUbZwnNwWqYikEQmDFzpjhcf4H6rGMaL7P8HnBMNhZBUTn3Kbcwsnyf2uPhDZhBDCP9HKx3hr7cT8Bwcn1",
  "key26": "438ww4a6bdwmurhevuLCWZbkiKENmaA3et2hoK7NrYmmgq97gUkUCbF9gM97kqJrf6h4pJ3GLC8Mv94hLnYdCtSr",
  "key27": "5yCcPZB2bUGobW8mXCmEF6BQfKVXXhRwTev4UJd6irTJJaDafEPY2cpwyPkjNEyS617AiqmEnGQ7Rq2Q7SMFXSJF",
  "key28": "Kdy7qyHLpxaQs5CYMM6KrTtAp2rf7LMF8y2VT57J6kTzGwmj2DykCbyX754NYtHozGJB7Po9wYKH4QtEdP1Kzv6",
  "key29": "48tWF4jF7mdQpEttH7LqKuAo2jTHHeDsdovfhQxxihxd32vbf3XSZBxmBvGRdxucJhc2B9So7mELkWoVgmnBRkcr",
  "key30": "5cTiqqFaMG5WuTmMSpvfLeX6JPUKG6tu6gAsbNe7htTB1QqhK1DZYwSUHTWpXH2tWjeF5upzX5D5gFQa2jrgyLdp",
  "key31": "2mPBvKRTL1QkJT9U7b88eVfWkHscigXinc9j1GSbP1ohrjsFvun2U8AFFc7aoTEjdiEjDrWg4Uu1WKQZ8QWLb2GT",
  "key32": "RDt6g2uZyc2Sqrjek1btu3GiQMqjW5UR4XXgNsWM7mqqpqD3HiXbEQRkhGCSEvwN2GYTNFVsMxUBeQMsi2xakEt",
  "key33": "4nEjjz3dz9yPCh92Wo1m5tMAKDNHXx4gqG1ZMfanTssVjTYdWGADC4YmmzgYg3G5oeaA57N14hJevCdJuUjTtsV5",
  "key34": "5KAGntHpUK7qERtyUTZSzCd7wE3MFAnV8Z5VmXUNvhtnaJbsUmk24zKaDAsQi7dtYccyJYWE22hw9MHBUoEnqAPQ",
  "key35": "5jQBVtWiQtWhuvMmWNwgpDk7qJBENbZR7hLFpuzDu5wdjosCBYEeoby2zDKaqBvfjJ76TrpxSYQ2PXCXgGeX538q",
  "key36": "61PcTfTVJJwcDDzdSfcAwdmXSt4x4THePmUyyHRutWe8hY2PWEbcgkyx2G3eHzWyvhtFchogZCmmotu7g29AdRnj",
  "key37": "5iETQDzwxk78dDK95RZ5yDY7aiUeNSujN74eE1R1Mgfohn14CFAc846vjtPd9GEAPPvRiyD3AGPMH6UTHbFKgL5g",
  "key38": "2oSBTURAJqLBtMmFcBgNXgU1S5gdLLGexP9JZZXdo1Lu66yVw7bG47cMbN1vsWbJxSsZ4gMUgvfVrSPRxpsvsH9F",
  "key39": "4L5XmrVYryJvp8y8iXjDtLN7DcCaMvqtfJUct9riPrKB4okYt4tPKtLt2NRN4JY1UfKkr4xFA33bzANMhWN5AAKM",
  "key40": "3yocMFp9Nt1JzMfBMVoNJkrNLcC19JaM7Do9rt8gAqYrCEypm1UpiN9vm4YPUe1aqRH2EuaTF6LPhqRJEidcCT9j",
  "key41": "4kWAtYgBSM8vDjZhGyHLp7HTyjrmuvPSTXj7vXDzhvZDSg7aqSWDBwBCW7TX6ACUeSAMLMVYnGJZXn3iZeUDiYYL"
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
