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
    "YNGR1kP2uUFjND7f8YpBdoTPKsYErUC6HkaRYwCgmwSbCqdjRVygVZQCtybq65v2d9Txp1XHjFPsrHAFogPdhfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DaZS5pfL8srA6cZQgF95iD7Bz8iMKNc9mEoYT9T5w2LHpR8xjZBuEJEmP62vSjN5eEBnXtAHoJ2fWoeS9epbcLN",
  "key1": "4iQ6ahv3mqN8do2xgZrrGHsDv9APYfJcGanYAxLvzUPf3C4x5dA2ddVSP1vN881SSvBnKRnSxousZbgSFaK6d62r",
  "key2": "2JnUHrv91hcktHUwHTxoqBdLXCg5YLV5XaZoC15Xf5DKYaq5YRTNM26YWCd8xWuXJ1dk9Z5Fm1c7LtUiNYjyZeuU",
  "key3": "3KdtfaTGb3wiK1LFqAkLPPr7KgHquijRa4g6DUX3jRYkZuL4B1LyjWDPU3v7ddpndXV4Z8o7TT93ZiGoBxEXB5ah",
  "key4": "5pM4iAzkd8EwFKf7ctTbQmksQxefZUjmc2YYdaDyknhcuKPW9dkQFADd8WtgiPQk35fvCusFVmHz7bNtUN4QPX4",
  "key5": "3tUUBLbmTKGnPWcFziDmVtUcttLvL82bbM6zWLckcN4yVaGJRCb2hc2CxDG3XCEY7kae7QJfUdq9cnt8N6XY7dXz",
  "key6": "4QiawW8w6gczn1UdAhHMdr73dk55kKWoXMzgx8nBipUQp94BdM654Upctfqyj1KBuGVQQNatvdmTmADyXvAVmJSG",
  "key7": "3EnEiwmx12mLPauQ7gsGu5t1VMBcnaSUSzBJRBubfank2WAU73pJnj1YeaBzJyCH7BmdsPC14yRzfqY6udPdtqZj",
  "key8": "3gpBN2pspWogkikcTGeFqHCvzm5hn58TNi8CpPgeg4skhWK2aza8xZvY14NrsC2L15JTumLaTYADxy8aRfq649Rn",
  "key9": "qkhkbVvpNAoqA9CNvzZDb8xrK6bnspJwmHjLPh8QGProLifr6R7X4s6o36wiwDJXQkawwG1ihtL6MhwBcxagxxS",
  "key10": "283HFHUZQHiumH7kcqdNn7WCGKWEFkpRVZUwEq5i5gJkcWoc46N17fMoEc3onNB8RPmkm84d8SpLLEWsiGMuaPF1",
  "key11": "VFzqX9VNTGJSK4qCtmsJW1HjZYPRXZT15mUaVE1CdepXAKubxbHjrLTeUHT72kKmFXoDPTUEnDumdxJqfYsqYa4",
  "key12": "5x6ezDncGfP41U6PFv6BZzcoa3oGjLdGN9LSPePVKELkJerSbWArmyA6Bnv7e3QpzAxqYKN5JNSWTzfGRipAJ3wx",
  "key13": "Y59fzXNSFE8HAutfvzfuwQKiCPmT9sD3DdE6wyUDF1WoDVDTNeQo66UD3P1brBQ3fpu67QRxDGRhDc7AdsoGDaz",
  "key14": "2MrBn3H5exB25LxyrZUdGt3FWkxoX9GXR26NueifjPecZuqgKQLBmJugfJSs3Zhvs5BqPZhsRFY7EaUQxZ84CpsD",
  "key15": "2RoosXxUdA7Vs4QvZqifL4AzrBNJNir1EwYURrg8JyMcjRtnkJzVcPCqN793ry1VifCZXwskXSmbob6pmaYvDVXc",
  "key16": "2Q2fxJKYsumjrEb2Pn3w6bZTSvDffk7WnAztAEHoUpqnoF6H81M6RtXkBVWJYxFw4igjQspzkNSQnm4sj4uEXaAe",
  "key17": "3mSxjiKgSvWV1dcjWw4iTmKJJK952xfukiFZ5UJ3dSS1UAViAuQmm5QFfdk8vKAgYEidgcec9drjoVzy3bdu8Stu",
  "key18": "3bwRdSGJcWtKhhbg891DrNq6fdu2chFKRWoHWDGVRK5RtAMcyU8MGRDMXRrhbAE3SGQYtRrAujje6T73UgzMNfnY",
  "key19": "eVDGd4e3VHHii4mxUMCQdVpKTVh92mtkTerVPpMxNbTtLgnmacUNfiGX5az8gWcAEio1o2BZviZ6C8BSrb7Yw7u",
  "key20": "21uYcQ8HCDRwJxZZR24HxBSpSjFkT9kqDfvJYYrNZUDWtfkYTBx6pKh1M8NwPN6DiisLZjA86vYn71jkssvDituh",
  "key21": "3LazK6gV3aXKLHJGTN5UG9mQVePQw1GDg5PNj9ZYKRRWcuQatkEjoasS5Zj8JJV8NYqTU6Sug1r35iMJs7FBar2p",
  "key22": "4Rk8uoMQZG8hW9Rj7MEWQaDRNbBfrwz2Gnf4vtdack6JrXPH7syYN2WZ4ffeb2LUfqvhXSLqUi5AEeoJHWf4d8vL",
  "key23": "4ctougocMXTFNZnhJZdLSQWszH3eZQvfMvoBxvwXvo6tgKabapJXCniseXchRJgVSrmz4QDLfWs2dzeXitkymyBe",
  "key24": "4z9nNsx2KeDWdR8pRtksQo58iKQ6CjRw6eyxTzL7YHT4cQg6fgMnQosYs5Jf35n6uKvEnJsYGR3dMbGnKDS2xpBa",
  "key25": "5iousgBYQKzhbbRKUJhEZSZnWj4s6Jo3gzQ1LL1qvniuJs8jx9bLikcW5NHSi6SBqiNvnKfBZzMSmrKf46YT3Zpw",
  "key26": "2gs5JNGhJ6M1UHeKwKHLiMMAhEJazU3FGJe4XoE1uHagzEviDhxYT74vnVykAAu4pa9jaSAxXVaWkfCdCAr1CmMK",
  "key27": "5AUP3pBafUFsAzTFjpUL3pndFJksfXD7ADN4NgbgAmdAojh4upqDRNLbKDAJbFpdCtYXbVqrW9fQfsNJkuoni5j9",
  "key28": "XeJV2eXRU6DRZ21zR9QYuZZhdqUKpvicdWqqjVA4qrbF1yhSrxzbopbHp4wtmxEwcT6bJUY8S3X3ZGp5nTWjn2F",
  "key29": "3neoUBmF1KCByKiRqyxNEH62zCcTpW5YiDPT7GBipDMstkaUja4at5bh47zWLWEYa7TaQRRJDM464M84Ujw9NPGh",
  "key30": "iMjKAvUErLrfjw4vkWGYW8i59jnzYwD4FzxUUmHdCLkWhPaEb9j7yXHxL2ALevVbqyusozBmMAAyh9KKBkYvY2f",
  "key31": "5Mfs8t18r1ohSAgQenY89MvpgWY7oCwF75ea7tYL5X9sBUX7FadCL678EjuxVn7UbGjsZbZm5zhazr15XFrKKfgT",
  "key32": "gfjq4opddhGSNZEgU4qrAdzhs7SP3PyZjveRmpKLBWghup7gA7rryNJirrMeAVWkmGKwp5xLicJqEzdx1GCbkPv",
  "key33": "5598L5M4MCDXeceAdLJAdqqX4yrnDkY1MJxcFEsAcoX3ehi8DhGS2aSyHnTPxnFfe7Sv4F8z2tE7ErouejCHUnSX",
  "key34": "3xAxyAkvafPkiCfYGTVahKgBhYGFQhhYeL3KEHvDcwHorjFbmtMCKrmYLtHNZyqz3LfJNALp7e6bKikJFoQbCfMd",
  "key35": "PbF76ZuEwvkndux4edXWQ74AY5j1kiG96BoWwwCn2irJk5k5bjB86QyZi2XJzZDyCgwtSRSu8Vcdiqd1FT3ZNE6",
  "key36": "2syyU3RihtwasdYsy26E17oPmhefe8vMtkAdu4J8bxSGZk9wkdRfkM2LopeCcPytcVXEHHmhV42D1e5Q7c4yu3HJ",
  "key37": "gCNaU5QHERVhC3iKF4iF76q2AWTJfRQtNh6u7WMphht1vufk194ZEYw5J3RFCkXu2HHiKsrBbMfpXPqdaMX3fQY"
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
