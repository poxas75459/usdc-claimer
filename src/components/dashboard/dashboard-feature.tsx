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
    "66w8HHv8MtVqpPMBVHAbgRZmWVC1YEvfJpFwY4skn5hZNuT6Jfi9QLM3cbZoz5JU1JHsDT8cgE9EidBZgWxEkaSA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JkAMNEodnsTwkrTt3Nm9t3jjArfbMfxajwkdToHfDYDmAH1ALH3BHLhEoo39qvQhdkTpQ3vtqy2au4vEH4CmmFH",
  "key1": "6irMm3NGuMjeMtGJj8WhgXfgzHssM2Vy5hCtJsmMMFxMqAUktbviiTMkRtz9H3b57XQ1nMQdxos2dcGmDGfef3T",
  "key2": "2NGB69ZtYScDarroKfAgikH5dpTqhoz7Ksj1LAmFfJdxHApWTM5zRzvgJyuTFyWd5SYixBbhbWuJTGPcW3Cm3oWK",
  "key3": "4v5KsDEWPfrR8zVJv3hM6JNL4QKK1ceFD6v4Vd8kLsBLY3M6WtLGnY57k3nMty4aibLLd3L2YWrzedEyRmV6DrQe",
  "key4": "3VUUujVJJQ3UoksYcbDeW8LJBhEwUKpEX9mpKAq6ZirDKCaeRENiMUd75DLPBjuzTuRDEbAoJeobf4UGrbFf1JAJ",
  "key5": "29QqFBVUHwkUkJSjCw5MiScg6CWNb2jWJR9MySsmZLv9VeYJeyFHoSsgqcLzM6rSBByPgbenhE32JoqkHyAznFdx",
  "key6": "CANjbhZbXYKhFjcTPFWC4223ztP8vgC1DATAQFv8rZcR9crG1c1QKg8q2SoQXo7NJjxMP32SWPrxucECmdcGWRm",
  "key7": "5YQrTbtV1UwqCpf1nUDLboguUXva4DcEwospe3k9kBLYNKvmFyYE1umDq1zihg1PQCin5K5xTanv5GVVrBDn6DeK",
  "key8": "4v6r3PL2qACFP1c3YvQ91BhRddSqhocGt2wgWsZ8uD4dbGHvFfgM1tNGe5UnyjKKawD8hgjePHYFwTjs6M7F6zoW",
  "key9": "4z5p8RGFqm3L5gv47S4KNCk71aRMjH9gqDVv15uQRc5dxc9yUgbcaukCMhX4vzPYSsLwWF56RUTS5zFFQmxafZH2",
  "key10": "363uyjtKFJyEgDcuU7tbsodssTyQgwnQtQMCwa7NJcpH6J1pxUsQewKtYdnmyt7qPrQxk4k7xcQHHeheWnQKxht4",
  "key11": "5BkQtd59wyfW9WtRAkggBGBNYxPpg2G9ZZeWXLL3cFrPebMeCNBGBFebaBuUz3ciCeurbkBa4fcjhNLDyHDm2nfL",
  "key12": "3ehT6wh3w6rU9dw8x5kwZ66LvEzmvq7w4X22CtXmmuNExGydMW5FqFLyHmGS84jJdjQVMnoAeU36p4CJRphhpivh",
  "key13": "4gHuWkg3AWXFAzP2sqqh39ctzr8PZoAHdQi9sAMwoBvUSbXSvNLYP84cLKxVdZkwtmvpA1PNCoarYY2hqAbdGqdR",
  "key14": "3WwLBe5FdLVivWCbo18PAZxGQwxZV2Jg9L7vb1juUsjQxDd9PGJkGdUTqUGiqy2DMNVfdM4T5eLua8569zHJ4cAm",
  "key15": "3EcyknsK791YdUdcAUMSano84TgvhmVbj9JdqTSYipvB3sei3XXyYRBJ7XYbBTtK2zU45TBfBCysbAjpPMAPTaD5",
  "key16": "hiQV1XVYsja4FSbNoWXJhtQDZWLPCjqMa8uxcdK2mn1NRs7rxzMHEZzoz47CFEBSn84fKz6BkDnoaP8f5dCzJ2Q",
  "key17": "5whhEMqou1ycNJ4CHKGa5XmKwRqELQHFdUQCjwKand7Wjhogdrkz77PBRZC6uzkYiPoJMtmX2xWmqLxmHoT8fjVm",
  "key18": "WbRtaxXwQDiUhoopDvJ6dAArL5f9YhsKeLcmExjB6ifZ2oKmtFAnykz1v3jLnk8FXzkrfBrtyNFUjxsXVQtmq53",
  "key19": "5Edmc7rwtA7TK4acn3BhA7NSitbyc2eZUB2jnC1pU8XZn2puKYsaV8ya6v1JSf2x1dd5EmGY9ASqiMqgKeygQWsi",
  "key20": "RP5auTYCF3i8QW5epTLq8BjB89zhQYn9tttbRFpMCrbdii4FmyGhed6hoA4yC5fnTsDxAeaj6XXz5QLRzRSnUMN",
  "key21": "3sGCAr4qzkFdCJTk1gKB7KEXhERiT4h3y9a6mBNuxV9zwnvQNvxQYVEou7JdUr71QPG7dZTPGkQ9ds1abjRaa8kJ",
  "key22": "3miiWoRXogGSj1LhJuSUqbrctPtPm2gBSzcp9XeBHzWpg8JcKme5eqfxgTSc9Xfse89YEnerT7ZsEP2uZwXHYq3q",
  "key23": "4HrCHB2J1RRtdGzGNpmVcGvqnx5G8mSM71BdsRZKzU3q7kPVrTkWNsGMbHXR2m5S2uRRXdjaFU9gWtxt24s9s2PA",
  "key24": "3YJ1HMeXpScbuyRtgnoExtR8Q7aW43KiHBRDLBf1yYDmXRRKSf5p5xDnR2q7pfrGQbS55dMVAFFJwuTcsNUnnory",
  "key25": "4sSyqYygv8UzNkskKG4uGgBE6yovYMEhxxMfSkkGQWZ95GqAxjWadpxR3CmY5YUxgAZ62xja1EkabgEKwgxUqk8D",
  "key26": "56ztJo8FcHs7YpDeZjvYyAvWptKezUbyPQ5TSpEE2oE6GbjgmQK2zaWhx8GNdHsci56M81L47JggjXuZAwbgqSKw",
  "key27": "W2bgrEtQTFV9F167E32XEgM8mKUXGDYqQzRVjh5nqQ92xCfzZwGZPZ6xpQud4z86h9ixCKztVGswyJ69pZqnzWG",
  "key28": "2DpkpUnQ39uFrGwERw58DNAJxGwxBzBDM5AS7TBzbF9zJkNcMzUeZ2haJ8nvf7rYagYugW1vK2LppxBkGP3xzm7N",
  "key29": "2hwoDe4xRUBw3Ma3qRY16JSDFzoNjsyZwb16dSULjCEz7rBrFebmttp3srifUeKihHUAKLjrwPhvyi9WdtRmYLbT",
  "key30": "4JcrKCVabNRsGsrkHzSYzNmcRWQuiETUowA5CA6QXDdNzatpA7aBctisg9ueT6Xti8qDUh3NZyKaeCUodSxZQ5Wu",
  "key31": "4R6P1GuJAUMd8n6yLVxutEfb1WMnh3T58TvmR25R7ZLXKdVnHfRzzihJQCLHK2GJ5Dxz6zqRs8gnAezkE4davUVj",
  "key32": "53GYFNfL8DZBdDZGPkWPUxwPPzoWQiKEvUXXT2CTX5CMHiGJ4Lie9yno3wznToqeUdRxrALyFDnd6BARGWtXg43X",
  "key33": "4VrTxqWL8uAhE8YHdxf94uiD8kUxsfK8a7x3xoMFBKd7zRHtBeDAnQvY3oQ9YYrzeMPTxdnum2FpbgsEXjGURw8J",
  "key34": "5qAPPSp3pyfrtz8wH8LJmovEsVGiiGEoApxPXm52Ms1FfuE3BunRRevU2rrpF7CRcfdgQkZHH7awxSMtEhmf2Xt4",
  "key35": "2hbzj62jKAUmq7xaPurRHXC8vsC5kpjusSNWkeLFU3grDf2TwtVFAch6B8vUX1gAtURDSzCs7dfUYhNPXMqEQvqN",
  "key36": "WRGnvsCfJHX6GXpR8JtbqUXkoJZDkpnmWEyErCA4cEttjAUE3BLKJ66fHkaQJZAQkZyKik5khFPGJNVdWrDoHKp",
  "key37": "5MTZNfe59DzqvYtzZPzsRyWEeyHJfJFSMusBVhdWtu8MGxsRssGAfeVuUh2BAohDLcoGeyjyshxChc8aYpPswD7T",
  "key38": "62XwCPcXSvTS4GsabX3Y6wgUTkTe9z3tB7srngu5JdJyRTnAuLExeLWZJQxULt7WU1HjqxK6HGjtfAXhDT5qxcRN",
  "key39": "5bHQxrNuxMJRM6ZRuUwNfKenWYbwhqQoGWSXKhK6kKnJ3hytMvE9TtxR7HNtN59QALrUqoSuAxhr5ZGhwvVbPofD",
  "key40": "Qe3f7hYPjGwBFXAzPpd1yrVxbmaJnfL8YTDBL5oryDP7r9YKoH43eMEqLy1SKnGDR1T4KG6yWvno2QRj3Dc8Bkm",
  "key41": "kAEszRxLrHS6F9wxohTv8VTe1QcLREdbTRKkeexC5qqxa9v8uei5injdhF6Ah1T5m7iAU52agD6PHmtuFh3v6eL"
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
