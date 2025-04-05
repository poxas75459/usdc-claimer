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
    "2dfHrPhxq5TGzTzbDiY5j3baiBQBBZoSQwAh9fwNbyeXk6hxTL56ARavqwHBu2fuTwTeXK1NGdHtP1T6sv3VS2j5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36dGS6C6g7D8MfqgLK9aQPfsTdczigYdCrPdVv33f2o2y2CrzLLW9kDwwaG84z5sZzuGuFE9BJSC2kJiHdVYDZDY",
  "key1": "566NbeGdsUZNJnmCjvGimV2KqjZnU77Ec2RCw3H18Q75jJeKaW3DbzEihLguFGTpq8TLr1CyojmJKz2mpbyVHG8Y",
  "key2": "3V9ysBTMHreDzH6F679tgL49dvqgUtm6mMRnscoEc7jQD7LLx8moQrzS9sptM3ubSdZbpcAqRfqF54yxPdBNzr9Y",
  "key3": "4tRJNdf1Zi1o3RG16oqkMYJpjeBsJmGSHceSatdrWpbpdEKjXXH9iqnbV651EVdE7kgptKjV4wkhsU2cuZHmatH6",
  "key4": "2bEfUkxy8wncVNHZigJ9GvdGjemLH1JM9hVUvCzcaAmXhccKU7LfunYfQkriQbxi5TKZaXVsvB5TUFEwBfSM1UjX",
  "key5": "3mtoyPEMuRsf29up6n8vgxg1FrbgovkDf6iqfruQhaxHfPJqiTa75hD8RSzduPLjUqHUDMoT3brBYqK4AMHP2CVT",
  "key6": "4s1hbNLKGJ8qo4sMM2poCKAvxCWBbLviHFk7pLNW5LDJApzv5NeGmUAvtj5rbazbzoL1Yp6wJo2TqnYcELDVB2ya",
  "key7": "tH4iK1PtrD6NfM1Hks3TnmKYPN54TNQq77hAjip4fSE4Vj6xP5mDzjv23kwQ1myMv2ESNJnyj2ckvAP3fw391Yv",
  "key8": "3S6ZP2QhmyER1k7p2kWYun7kD1GzyUnWXP6mubqPELMeGyteS56inbwi9DiCyU2z1jQByDcctbkonKREJNd8Yt2h",
  "key9": "BYYcoggxY9W3QYDxBYPA45Qi5jbTzF3M1kuPhBvHQ1uGNk7zjgQkDeUaxdb4msm8Lt9LZ4rPmXVtcKNDReYyi1c",
  "key10": "4JqMFxdBchv8FnbWDuLDiS5DDamaZkbxtMiJgEyKySeeqiZidX6KJm6okxZ4kJkKENrvcNm9j66Nb8ZdYnd3iKHP",
  "key11": "2tyivhnEWbYEvByXV6ZqNZgymW4WuvmuMVnjpGZVaKgPhiFhvJSPoMdRb2oLjyhqtGTv47dwF5Ts73FcUrNeKYkV",
  "key12": "5XaszNkoCg1AWCDiWxLRpTjhwkLbNhpLMXTbPbSkywdLTrFur2DabzJLdqgpLjuTDiuG5UmMGaNEXfaWAUiW2oa",
  "key13": "qCBmJpgWqVU9QCC4eDPxqkrt1X9ztXhyzto5tgpxyRqkbWEbGfxSiojzh9gYEQ43N1WzSEr32RuN1NYakS3s4e7",
  "key14": "4ZM3RBGHQXUYM9tTGBE3GavoGVQEHqiQ8FgFVqr2cKZEzfgjVEu8gMV4dfyjp6rFssP698R5Uutf9pJZRRha6XqR",
  "key15": "623i54DWhJkAh7Ys4Yt6nTywiktDgYdeivDacVNzhdp9VAtrvsPmDHe5naxW1iwcpLWwojPJkaHRkKTHtaPYkMNk",
  "key16": "2pD6nEV9vcXiByzxYcHZxPeH7By4UviakUN8zRw76iQ5geyofxs8tRSCMxWubRpv8eqsTrkWkLRHXvK6P79N15xy",
  "key17": "5cnPGEfKDoC68sKNSJJ6G9cjq4YjQmh62QEC9diRyuCwgjqZJwgS1EVeqgRknZSnP92uEX2HVdcmcjYhidEwdqjD",
  "key18": "44xaK6ctNoNtSbCuVwLuD5gAtGRNrpuQhCyrG8jBirz3SwJ5hmEHYvzHjoFP5NZFWjp29tfkhGAasQaxXw5mwG7Q",
  "key19": "3fYz6WJWGvzXvEwpDfoBHWvPToXBrAc8ZkBZcG8oxbwmtX6cYAnwb7T5DnvnhCHfB8Meq4d587RNZXEtnHeoGfA1",
  "key20": "53YjhBGoWQkeksNPiTq2qu4mkYvuc215Yjxkd45ZtdZLgZs56fQ31vmuaLzQAmdau3BN34z1dovKsxQ4K2fgUDJy",
  "key21": "5W2i6U3927Ngce2A51qJkCowztbosXJYAAmEFf2U5FRNkRH9jDiLNjd7YUQU4z1HgQBZosUP4JdFWVaNr1nsEFCT",
  "key22": "4hQtNgx1ATB5vEzePQoowDJxDwHKHKYPuevwHyzHHdT6EnekZSbBi2wZkhzv28764dvMdpSwwzFBw1LPQXMthS7e",
  "key23": "vg31yEwfdCRzLppGzodrYFos86ktdU7gPPrTEC6wWHtY9RrEJ35pdmPcW7nSYxZueDGo4kVoetPAqqpTcyHnVpn",
  "key24": "63KZAPhx52xN96QTDJahJj2SW7RiqBFRxYRygy7iwVXvbM6L1rnRtSkg9YMiS1UmeyTkJKh5aEeSq2i5kdFXWgCR",
  "key25": "2yjkiJ2QCs7jJXqGBXC3SV5yPf5Vtv36W6wVdJ6KWXyu9HEJWhc2v51FB9C8KegQpHfcd61b3if1pzkyFVgsAsEe",
  "key26": "37i2LzNF8otwLCQiPAJEcZ994ycLUogrMSTWXjwtngsMBUphFCrk2nJLv7FLKW4YTSnActLqfg2y57v4m8JBvaTR",
  "key27": "54BgSXBuY5FLWuuhHW9PNLvJXX7mZosV7FPaQfnE3G8gLG58vFQAQWW7pQyXueJcbyfjqi4ungTWNsAR2sSnPmqk",
  "key28": "3DJrt6WBCVBgHUsTSFSBQhkXb6QZXQ7zTw28K2G1QKA9JXjJnS9ZJbjmi1UEoQqswDgbTpJTN1VgGp37ni5HYNJD"
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
