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
    "5nAwpdvj2wBGZvJjEgFfm9WtC4Gts25PzHzcqhimu2aZSRBoocTE3TcCRF5BF9UPqwv46a3jnvHYgY2da1T5SQUf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NAn6ww21be23u42LAzXtAA94xoRbpTiC4XVDzWXJueTgUL73SXJSYdVPZtqmaVsXxm94M7uZxiwNuQ3WoAf4j8Y",
  "key1": "5nWhX3wsnaFqWb4FpSVXricwrQg4rHyDrmHnKwcwPgqYo6B9txFzpfs52jeCMDm3sdpq6nkLmy2J4ACh5iHzhDzW",
  "key2": "zjg3wsdP4UncGsPX1eVuGfwpejaN2HN2kg4zXD756sJ7A8fRD8BBMDU8YXbgHLSuz8npHXbpS5QtYHgrZsaSxA8",
  "key3": "2SSCEfhdbonE58J4qkyHNacGiDXkLpqarMU4DppuxU5MCCQAMcDNDhQCkqzjxKctEn4RDr4P5sfry4BRSoFbQLqL",
  "key4": "2iHvAgKXDenPbQEjmjio4iUgQXPTS8F2EXg5RCN5jjHWVLffPf9qT2PNGN8g2onXMDQuFx8kp9iu34pNuRn56xav",
  "key5": "3DzJJWBwLRQfpunqN3MreBryCy4UsUGfu3m8oeS5TJgkdxfsfJxPBiSEAwNPJeaJEmzWKboeHBPBgLjj1a22LP1u",
  "key6": "5Zu5BiAxzqfUY3HHVJ8VWXY61QrWopzoYHzrThh9H9wa8ovyeq3GWkdQhEshnPxZbs1GQewvrcnd4fbSwxGbn4wk",
  "key7": "5zeUjc8gGH2PMJtws6TiqSjxE5hpAWxe2MWcUFoRh6zFXxKqtcuMnsoGSfii72K7yuL8jMFu4EM8SVP26khRfcwu",
  "key8": "5PBmVmopycejVBAxQbSxE9WNSDJWCPv3UkatANeegktnqvdCiRBaysWY7LwGUvBeE6vPgmoALda5WUg4j69zhffo",
  "key9": "57esdHeTigZFMnUXnP9xjaDRYowP9K4HmStU2oggjGBBbqYNrpRczmKgeH5P9FFdjpDmwsiTtb4hm8A2FgjoFBf1",
  "key10": "2xEvWU9jpHkhR5bjKkvd5daMJviSwg4Zt3Pk8VniHvCnKkfGMTkpXFCRrMTL8Bad2QAnbGDiAv83ycdMyw8Fv3Ks",
  "key11": "DM4HX6X7WRS5VCfhFFUQAu7juDtMNA9xc82mmwbnLTkKQfhAWADzCqEHYeDfKvvw2C72wF9tRS2PVPU5yMiXq9i",
  "key12": "284CgtGXBordLxjPdmnxUaoB4VKg6B31xZJRsCQxkQkkyEupsHY4rHVui7zznpmfq4CYUDabPgevuo29mLj1NaTm",
  "key13": "2sYiWnaP2nXYBrzTk6zXPhhDLY7gkwVdy6wYFqsxXRiZvWucUXH8Sux3KqUQUE2RpKkBoAKswSmppCVywGTyux4G",
  "key14": "5J7yMvunzLK2BmnBz1cAUehZ7xM3kn2CaLzK6WjVtmpihiFURjMyCMhdBrLMAri9B4UuuNT5bX4Y76SLPmTcy9iy",
  "key15": "3DBzPnehL8hM6H5MnRP21uenT7z1q1kNEhRc678HgpzPfzrqADf8w41KFC2XEYRm4Zj6cnq8xvsmCKjoAuYNBkhY",
  "key16": "5hE29eyem2mpMWaJeL5A1FiAStJftDty8zF9cmdi27b3sNnQnyy9nuVhMWRThVjPow7WBzKENxjUTYgkSSLnNmYc",
  "key17": "3NnwbwBE1UKa4H5CxxuVnqcVQoFHr8aCvfCHHirRsceJRFZutoSEfuxKFMcdimYivsKjCW4tFmzWYmSkKQhUPTon",
  "key18": "2TmfeDVS6JiDnS4gJoUXhzG7krjarmaYggRE83wiKX1uDhgfySzXQnvdtU13N5KZiyADex79zkfYuYgi5eVtyQpY",
  "key19": "54o5QwY2Ak7VR992b1gRyrfhbqmVohgrkzNdzND7Mqv14S4hEo9Ke6nLqdKnZ2Uw4UbdabhDMW6tXJruMe2BN8z9",
  "key20": "4hMjJnejGM5Shp2wEPBKqs2iLskQstx22QN4mGcB9qK1q2n1Xs225tnrGbXdLmh6op2SAFzvFisUCTU2UXAkLY3L",
  "key21": "A66uBeZkQhp3U4LMgFx1HrkEyFucg2YM4uaqrEmxeC7swtTxbHYXC87VTKHhJtuDUfCzgHQssqbHV8KUETghTam",
  "key22": "5JwRWm4q2mQdsBXvksi8dxi4wj38RpKMXPPC1vASVZpGqJ2qYjpdLGaWMpM1r1sQdwKVLF4msxcENgVUXiavaGPk",
  "key23": "Yo4Hu96jZbeL5qAsJbbFX35MRbh9CiJUmSVCBRZhNoMfBtmiSDvfUwGLbRdZwevSJv4ovQKdnnm6HTsFRA9ySph",
  "key24": "7tfiSy9ks6nJwJHPg1PaC7qnSEp78W3Ct6iQF1iS6nWywBQQ8Z4kwNMiJEqXLoQjjSiXqwzD35KbouJ7bh2ukQo",
  "key25": "34uT2QdrodKhp1pYoR9v6dKzFgGHXuaW2uTSMmemd8ZcATtxk5R92zVCAKzLfiiKG7fwD5cDr5hffjP1kjweCwsJ",
  "key26": "5M8dag8uxMXrDvuRyBFryqKDToZrXkKv62TAmznF8FyEkRZNhFnTF9XE36C6D5U53rENN32gx1kRUpWgjyyiFhbt",
  "key27": "eRQTBWJtzGE3Xai5UiVu7TRUBpkZoBx3BTrUeVFXqm6Jcbpp2nMtHmmL3WJEQQPZTbeQ9hvi9ng3mps5a54QFb6",
  "key28": "3Uzsnsk5sWePFg6itb5yXg5sqWFfduPFMNW6XSDAQXJMgEQkSYGDFyTmV51KTHMQ8s5SVdSdUypzY67UxPTFVFAi",
  "key29": "5b2EobbU7hgMYRF52izbJCEKhUDvNMiMxc8jhKkauMfgzTUQeZ853cTK4KAjd5Jn5FYFykY3qzVb9AffAYvkstk8",
  "key30": "3tLyuCA5UQzrrognUKBL2diVigtEhJsbRrusNV7QgESTSA7QXQQ2taBU49ek1W1MKah7ka86HBtmHgWucqQvbyHj",
  "key31": "LJhkqCfPaFuxLoJv6QhqcFuUvh45QbCc95TWmZCmPoRWr2jgmRCcxmRCjP7aKdy9fTznJMX6MYeA8MpTmRcwABb",
  "key32": "51iEdkiQodSTVwGjGVRSSEDDYRmeBnUAgjvQxyqRypDhr91tpNrJLhKaMDRd2X4npuMPi7igk9YZPKd6HXnxqD7L",
  "key33": "4KJqMHwhnM5KCRc4Liid8aFEoJbhYRXH5amTpFKYDnCqC4M9MAEEXKZMv5qct2K5JWLChg81kfkARACftK7GZiHb",
  "key34": "3ex7qiLaMbkg1uMiwk91eR9gJQYWvpj1wz9zHmBTZUCbFMQXXgfhBMHHGM3tCx137Tcrc57HmrF3eMvPDTvG2Vkv",
  "key35": "4pre6HGWjhyy1iR13UnpRt7vPkZDEAdasHWLbkTEd1E3EPXh3noKyVuMVbPrFJpsKnCrRe8arKXLmy825Pd7NTKj",
  "key36": "3FCZi1WQfNqwb1mYgMHnKnYnWBWFLzUFAFoZcLtvg9iJhpfffxRT3BC3uUtmXPp4cs6bsRKNuFrQnoZjYHsqahs7",
  "key37": "VwNcShz8Doy1Tby1LoG1ELTKJCJinPtfE2eWJBm6CsrRTrbuXJs8DNeZuoC7iCSLdAW8DrQZuS2MJFmhUmj3Ti1"
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
