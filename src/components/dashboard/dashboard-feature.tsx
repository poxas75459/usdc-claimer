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
    "4zA26zPZ8Z1jBHkrWHZyfwM1PTJaq9wPbc2SBhaD5B9Cjqwf28Ky8nU8QgccJN4EXhDfet2vskpKPb8NHRe4Y31B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cF4ou8kqCtHTQJzgsBrAMjDPvdsWAWrkFxoznZjZTLSWQc7h4EVSJAGtyaWrjJAGJvwzdqWGsHQnq3WWjiAoW5p",
  "key1": "5S2uHfAu1jwWHosVDVUZHmy6rMKu3QBSNw6LA3f8jeea7eofxUNMDAPuruhWrX6gxbVMxKcRXduxmgx23rMVM6Pz",
  "key2": "654NZBiczWr26TzU8npSziprbNVp2xEbMcBeNZJ9aT3tUiXYxRjv68dY2DYEo3Rt8jsnTH5rN4RaGF5gGUa7M9XR",
  "key3": "5NdNEKTQBLmFZkJ358sui4wkZsM722Tbhr6GPdRoXGnRheNViizqyiSveKPrHQtNFLaFTo6Vv42bz3tVCE2vXZkj",
  "key4": "4dCf5vaAoEwAN7vbTA3j42tTeiq6kCHpbXNNkzD4tGB992CU71BbixSPwREvwY1RzDJzjwcYuqNQ1vVUYiyLuBNs",
  "key5": "3KUxQ8CKHCzTL6de5znbpM2PiXckP23cWt3fEX7vprm2VzZCouP8btEmkiYzXou6cuh6h7QHCvBfQ4Ngz14PGEDD",
  "key6": "fx3mXdjMmCx2r3nRPVGyq24L6H325hodMYJmZmxPmP51VAabQC12we18bB4Vu7aQ9FRXjwSCdFCpNymGk12PVsA",
  "key7": "3tYnBpYMDycQQYdjubiWPbfLXX8jHrpEcwnPSztyBA81LkSNbguVC4hzzdC4LjeLBF9Eqp4weVSBHQMKZUVg7yJb",
  "key8": "5dbK3XzWEtPzrSDdMfyfDAsc8EFzKjZ27ZZep36bW3QsHgjaUGAjUVvJfGfmWweCZccmfTE6oFLSp7rPTqh99wF",
  "key9": "3p2Y8Mbn5uCa3dvDtys8drMpXpDu6v2NgunwuQUCdFkCEP3aeKqAV256LKjcDFHfFChrvFkBLB4S45jG2xEeqRy",
  "key10": "yewLw5PxtbTYzAR8PiJWuteYhE7B81xet8KnrxibBc3pGhFa8ec8hLSi79vSQxreyZQKM2yFm45SFGDqqA7UadM",
  "key11": "5txSjvw6TriV2r25zug5ERoZJpg6Qq1voJ97XuFRQNk1aRQ82pniDo3B9g17xDeCZ728P2jnrP53t3aPYneqDkCn",
  "key12": "4Y1HJfsEHgprvgZ2ivS8ZntmP66Yf6uoFVTMtgfAEM9SAco8Ge5XB7DsYCGYwcYiDe77CCApb79xQkFPxASWZqcG",
  "key13": "47w3QTy4udF2GcAsF6gHVjN48vxyMDTjKBD1wE3HH5KyR4Mz2fmUGm8ZhYJUvrQE4fnfqmVRuKVtAttBzXt3sC1s",
  "key14": "38g43mJgyogkvcZfmsHf9aExkyZwrafGtte1oeLzBNXAUVW9U79LxzT3JFAnRv3LjTVz4SxvSaHnenmnBAFF44G6",
  "key15": "44G34bRyRTufKDtz8cWNPD22jZbTYzqEGFWJGcfD1N9qjBQobbpZ4WLgykmvRuq1D96Cexna4zwd8YJU6FS6sHG2",
  "key16": "2TxVovTFPgtXZbJxQRGgXi25qgqDbwVgDSEuze8J9emTdYwPTrfzTE4FngQahaNR9ZHRKSPEJHAxYgL5A9wKx1eK",
  "key17": "26g9G7T3CYhgVPEFQJhwvip9CPvaGjZkYq6W7e12CUg6DhwJMquhRs4aZZNcKUAR7sCc1T2EtuA7pF9fto7rAYyq",
  "key18": "dZuXg1mG2EEBRTxRCBUDExA9e4rK7hQ4kqZJnzKDWAhxyZdBEYHLntr7XSEjmVznWurKpXKQbnqJjG1EJHcQhMn",
  "key19": "4DjdVw4NkxTMQaG1R5teJF7TSx5UT3VRcfo5ibiHYXXNB5tRe38PfdsMkh1aw141nwmCF93iTsA7Jx4XbYqCpAoa",
  "key20": "21CnMbJqBsU1WNb15RCgvVcJhTbcvvgs3qeN95ZehEUF3B5t8b3HDkuQtpCyWLoArVTyyaskP6qpzFj6498yr452",
  "key21": "4vnMC5fEZsXiHLqm8LR8UfZZGYohHPikjtoTJtKsfUbboPzJjfMUuysXLhwU6qjaG3uiHkkkyhNeMcA47DjnHodo",
  "key22": "3DF3GaTXsSYTrRXfwk4xqsr9Qmb3bAFjQLsnfRYZBUMynYpwqcXLEfrvR4RTgmj3NcbLt8bFg9CSoZphzsg1U7if",
  "key23": "3AASq9RytF6Qq79fpRZSczGQ11SK8r6LFMCurjTiEUMTvAFZZeWbbR55jNbWjs8nqbRHAEHkrDK55sfgrxxWVyDQ",
  "key24": "2Z5a394nsfupnhQ1QHP8bexUN3JZWUvoXDUzCSsRmbbdsdB47tPTo7xK57XNiYCaPHjSA9oo8qCMd5ukGaGHYpG7",
  "key25": "52wWgXcFRkJuTz6dQySxHnjCyBSYoeXfdPcHYTMgQBdS6h9nCM3uy88JRnSBT6uCPfsc8NcpqNqWbAQHBrgeZAmV",
  "key26": "2P5BWkoGYvNq4WYrCURg3ehYGnjLsEBkjyVfSZg36B2LBN5QtPk2GSdFrrfgPgijRYhV7zfce42pitJu9xa4SZog",
  "key27": "5Xd8oxS5RPFJ4vYEYEkZt8RLCnw4zKvGCkuGUqGVRGNNAjCbRhtco335JXoTR52XJsFTzeppvzdCfM4SKpno5ZtE",
  "key28": "2RKmxy6vh5qZm11HmMaHD13bXGL2bXSjHdNhvQrvjrREdbMB87ZaMQdzKVGzYWUmER5ADJALNuHYQEmzf6Sg2DfE",
  "key29": "2nMYyFz62ZQqXMSTMCLSvmXywULv1hKUuadCEVBCVUmCKtsUAV49wCd7h1NECtK7qszQqS7g5DYXSrU2Xw1P4dnN",
  "key30": "3vK5aM83NmQDWKv1eFneszgJXjWaY7NAXm7vhhCW4jwF57FNFbbX4quiyUkbB2DUjB1hxykAWWHixYWL6YLdkPAQ",
  "key31": "5pWSbbcTgqTn1R8Pgn5fu8FtvFhV8Svh68aSxgYrKsL9jGX9FE7ieHs83YgrKD4TDhcig6cDAJCgfuXjGMpavvvp",
  "key32": "25SxgRuz8oSPoVtQWquZDQCYTz4yM5cnPNW2k687TMp35gbzFaniA6MByEYt6oDoG9rGR4ZuRrH6vkV23KkheKs6",
  "key33": "X2qMdKiYWP8FDWfDvA5LDjbtFyFsgfujuuhVF5JfZSQiNND1LDRdYi8yQWxJVJ4WQpvkqkejQ18fYw3ejEkeX7L",
  "key34": "5LyNoENzhc11XfpYJfA22WuC7fEZrUsBz9fqCAuJqeR2FA1BXp4FyUQo1KradAXajpRwCsp2v4B2ePFkm3PZaQhN",
  "key35": "5vucH3mcvd2SmxDH2btsFXbQCCZQoMzR3PEc2cVyLuCiz4EhRCteUmoJer3dbRth6a2oYZPkmmLTB6h5v357fuKz",
  "key36": "kbg1QiYmCgCZFW4Gruir6FRZBiBHSh9YZAHKe5fhK9PwxoTzC9cZng7sTXGPtnj8L9bYE5p5EHDZZ2kvQ3QBP4Q",
  "key37": "28NwBQA77pSBwvqSNkzWGEi2bXifXLSE58XvRAt4YRm13Wyni4FWAxYwD4BFYxD5oERWzEcESJxEbSCPshrZ1HsX",
  "key38": "3xNcR6XRsbPhWnSQsjKGAYFg6hpEhDwZGWU1G857EUSTb273NQz4szfnhK1GrZxZQNFyGzHgkVqNTtxfVRAgvu52",
  "key39": "sFpK54mhU88VMTsvABnuEZDoBzzQhisWwyAVjiLQKjZpFL3Vc12f6e5sdUyMEDAH4YSyKgdWNgzbdCVtFDzbTC5",
  "key40": "64F6X6p8BexsqHtFVXnKZnEUa62EXJaiML56knEVg1JALReeb1r6AjtuNyTHsRoihP62fPPpxW5FJt4H9JBTycHz",
  "key41": "3GYi9jd82eZ1kGgNbtb3fxJV6NLPinURz82NCd34VwCGUudFdMHpA4yCpLFXvB6yVhpprxYarcNwS3jBvCyS9bSt",
  "key42": "4Hx8kK6QdGSK4wNm4xnZHGGyxM7Prct1JSBeB6ZXy52nTtn2iKiXbqL9Q2EmtMuja81c8Toa59rwt9VYFiTSuP7r",
  "key43": "3szVRcRckJC15yqG5fCeFx7nsw9jc7GtuMDSbrJP1LwGnmhi3kGZBm69d7G6F9fXB5jQvwhmaE2Q3cm26XYphugR"
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
