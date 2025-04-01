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
    "2qXk7tnLmbQg6NWYGDqR8DC9GuNthLKjUd7MgzmV9jbEUVUSJj4qKDL25LWHAkcfFZstohSWb4HZ17hR1KqCAqRR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MWERb6yPsz13D7PYN6cwX2YPDtjVJNUkU5sz52fi21i82qSBPjxeAyY8FPbCgC7Y1m4UHn2rhZXCV47MLBZM1Kr",
  "key1": "sGFTexn5VVAxia7FwMGdYo5hmwwTrAkSYoHDWR1ZDWaaXS3atqf6Zgoah9vHcdGzuMuTKwmY8LTyAipgwHMneyy",
  "key2": "3yrEwnJxENWim8eiLFH846EMz7A3czBtHcvR7akwpufL7dQC6Ads95C7xh9Px6fqdSfxbPcvXfWzUw9xMmpEsEBt",
  "key3": "4QQ2dpboDxgFA3byWynKfXMYZ7Z4Ex2jyk7XG5F7HGPnQm46DZjeanRJY7XQq6Ai61nHC74KbKYXfLRpMpQXqvEK",
  "key4": "55rN4J5CHz2T4p1yWGgfoKERTEqhXQMVKFX27KhmnJjHaNgSZ28DRs8Zj4icTg85Rbo7yWzBoMBzrcjXysCFUbnN",
  "key5": "53nsy7mdRquT9U2DtFzyVcsQzohLWHqPuCF8a8SE1wr19XyLPw12e5Cy1SvdzJdvYdL2uJv5sUd6wW59MoFuQT3q",
  "key6": "4gzkXXTC2W7FTNVkry2tDLfXeRCx8E1RhaTGeAB8TrVWDujx2Ld1aKufs2K3qdfPRgLCq6NZzRPnb9p3gKLemigS",
  "key7": "5rg54W6W9X7jvza9mdo5gfL2kLpK3nWhFBHpbqcpYgqUS2fzAhmQepdBonUDJvvkpL1hdjtj84rjZNRA7eikfHhF",
  "key8": "65B1tt77hgDr1KnAvvndnQwHsQNQoV1QuKTShrvzdCjQmEWiokSSV1ZkjqRhgZwC1wYtgNcyn5BEoTPzv7pjiqAV",
  "key9": "5koCaCS2XXByujQ7veyyjqYXRLHjZxDXao3UaJafHs9uTVkUBq9ab6FLHrQFGqAgnWxM8nHqyKZANT7aTjuRxd8h",
  "key10": "4pn7KAJ1EhppdmtBbQJLsKbNHJ86VL5zEBzn7XY28rAJDLDCetiaTWiKR2NwLqKYKDbkgx7Yui68UCbb6yMovQdT",
  "key11": "47GkbrpRvuctykqixxpfiTUyUzjUU8CwpaEZgeqMQRGqxjouTUspS2Lv9VceDHeiDnPJ1xGXgGFzUhpFVaMjrJAP",
  "key12": "2mrMEE2okBxtTJGYfkqehbZPVWLLszwahs9dmb8uHtjBASZVmjcmBUcQUf3Kv9HLo7FcgHLAVxT8endL9Vs5vSC7",
  "key13": "chbEkqSowXe2vPpwidSvsUaGRdLM7VcAKKff4hkFTr3EQzLSNw9mS47hRGe1QwHjJk7BGxpcNsM4BiyVku5FKJw",
  "key14": "2qVVZML8NzD8A29i4rFjGAavHvRzzrLLv42p19Q7wqeTC3xwqsvupJifpFp4f1aEP4Ur3S7B3P9MXSbARg6zjGLF",
  "key15": "4F2snJxaShV68v6rwKpQDXynrrF5skEbJjnPhFJbbvQzEgLbFSSX92ZwcRbEcsccwgxDnDmyNdK6ByDjUonAdwuP",
  "key16": "3JqWgvpD9rdsMfisbrw975PY2N3UdUvyABNCiik4BzoNeVFGfLrcatLDK49Wgz4dNpL1GNT71ic9PAFpXEWVUdk9",
  "key17": "4U2ULUFMa5pPFihcJ1twQb8x4AFAwztF6q7bJcAqG6fEqPDTWtTREo6T8VYFqcJ8gojzGZ5pFGaRXVAQugFfmKhM",
  "key18": "4KZvaiawQwaPKq3p9BBPQjVKUAVqCcaPJCWQZ9yyXdnykebbEXUSbuHJHcEidXtaciAjKmYj6D9WYmaiWntzaNa7",
  "key19": "3iiyrviWyf75tArs28VtXGLGwPvLetCZr4AtBMeZKgHP56bA9hPfK9MfPRodFmRevTUWpM1nRUa44ReMJLVy5pyG",
  "key20": "4yePnrKp2tonBavDHScVXVgYpziAyehdzDTn1eLX8dmkYeGcnroKcq64ZjfxBSujAcz3FFoZQruxcWCKAhoUTLXh",
  "key21": "4CiMyzdTtwG9FvGZ6xPQpXZ4kS2ohUNRBroZCJ7UR5jmnqH8SEupXhzCsSdjkzFgL1Ekb4sRUFDuKrdufn3J7AYq",
  "key22": "3AEyzV5jGNfaEzeH8zrem1kmKYmCysXqts6RCuwrpktzzAFc969Q6HUWqdn1K7f97ybSgq9JeNeTjukJu6EKyXCR",
  "key23": "3H4cPzqPtnT1z41dWvDzAzVCuHZkxGFQhwHt6wQUU83zdUWqK1gTqFKQncxPgHn7en2txmDcTnFQCEV25xidyXnR",
  "key24": "3rqxAkDfR8VVqJN9w16rYXq6EpFQjFgCj24ymvwjNZkgqo4NcKgpX8vzNoXnkzc2bTmzFLQSbp2SKjS3e6VZp6gj",
  "key25": "2uBUpSvJ35dy4fQj2wg5PbdotdiYoDRbnEK5N5yjEhdpFJEDRykwrsQqSMVyPAbafVpHvAwCAcNeyo65fnN2GQAF",
  "key26": "5vLteq7k2mqeCwmGwC9gxZGYtxTUgvezEi11K7K1NjuKxCFggtg3Ety2F59aebiJ4us261HYs4kupfHmcPHRcPW2",
  "key27": "3CCoLwpLeMKzHqUXauwY6C17rbU56pA6QHecvwpuJvw1FaSyqWAbAuQqYonVczjCcXp2E47iXNtsTDxnmWq6aMmz",
  "key28": "oFSiJjT7LnNoSbN6dR5GRVBcd5zSY5z6JuvffGzgNXeLwriP2Y7tRHfGt6yTaXSfiwatjUZLvfDvnQqPsT95Pk2",
  "key29": "2ADdVm3ZBFdjmzGxnvUYmMQRqhBwKP4QZgBkByhtNX1y7k8qiWPN9HVA9s7paEeUUXHBV2ttxiUFV6HJCjVLa9Xc",
  "key30": "2iBvUpfQ9EE7HAJRBTShH6wP1cduccgkYamPBHzr33ppYAKVUrXDWu9TmyY7LAusfdjQmNFK6XUN1K2jZP6ckJ2w",
  "key31": "3ySfS1QF6g6nbyiVtAeX8uBENkERS23QaZpFhNbXVSMS82DDHhensRbh2Z7mCkXU5skgyEGo8D9WPz9e9W7QDyhy",
  "key32": "3KME7PpyGMAzLfv2635UjXXekjusUaA4pbF1puKzN5K93bKARTVSdfYanMCWu9u6q58VNxaKDXWEoQzaSFCgawWW",
  "key33": "3GuQXricCFu8DK3rX18Wsc5LfLw26axhqeRqXzbu4ot3ceKAi9YLt5HfKaF3zMmyDQrHqZgicsA2TmykRtxx5mD7",
  "key34": "4CKxhdSZdtERD37cUngx4maU2pdCLDZEyvh1S9mQ2MndrgMa4e9aSRkKfsCYiUjaQ3ZfXB8BaXY9bAfQasBWeD7K",
  "key35": "4Kzyzqz3JhdKzxuDxGGMTEuAYJFS2s2wXaQCGT12915FCJ8MVGiWrScyxt4cFsfPQsTEbY1uHjKzc9aTkqhehBiX",
  "key36": "5G9AXMaKbSDgmyKP6vL5BGVW1aMzKjebe1GFQQ9aK5De1HtQPuSqdx6nJmQcPAsQCJKzHVodJZhu2jG5dD39Gf37",
  "key37": "3PtpDRNmaq5ggRHs63uxxXVKkQWyVLbNExm8ZLGueHQH1WAJzSQU3ibrwXZX5S37UyZwcEoMha7PKnqfaQHMLdTs",
  "key38": "2tn4kmiRdJnLQaV9em7VmF5GARXyZkDYykaR44yP4MSohV3BpifaPXemJq6wbCBhWUpepbe4fmS85oqjFF4kcQ7G",
  "key39": "4dcZLe7M8evJTLBjyD2H18oT8AHvktpXji2Vc13JZLfKbXcV3a6KRSTXwfsuZT9pS2ZqHeskfRotcCamoe5J2JzF",
  "key40": "2GfPcyGvcvBcGtzJoXhkPo2yrWTmYunq7m41yzkozBpFRxSkv8SpNaDma9inUkknuf3j16Ufmkfpqn3mCYDEBLJQ",
  "key41": "3safopatccXngB4a9LRyE5ozYd7Q4kBp8H8JKA73M6zwxfM7ao7AuCqiBx8Ac4T7F2LJQpBJjuG1nxzXc62vJie9",
  "key42": "64xieXbe5WmFi3vtzpWXYnAeW58ofXeT1eFLEMHpozsrfDNiQWXDwh9PKueMZ1r5EsR5oqbwRSwxmfqbg2qrPi54",
  "key43": "3Bngyb2XmXvcXUymq64AdZsNdeoo4tREtSnUPnrwLqt4UC3xupL6crEgcpuTJJoB6WRtVvFsgaj7iSHYeadqLT9e",
  "key44": "3ux4HAXLkSotggv4tPRbFkipy78hRupQUg8QKXbgPwkc9gEuHH2R2pzAPjmtUqF9SaNKLwohtaoiQNrfAGnNYd1z"
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
