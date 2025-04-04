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
    "23XN5kneQBiczuaJ3kkNQaS3uv6MJfqHPQpYF1QNa7ajjNTXM8bcx9xA8eAx25NNoa2qpqosqMBRcgeBPb1wtDZU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2v7fUSGUVruBACyWvrMmSeADQT3252N2WN35zJ1ud897zMbW9qMMW1suZbK1bdQWiQejWWRkJgmvtGy2De7R8PRY",
  "key1": "5GtduDi44bHGGMP9fj16rteevdWWp1dgaCYndR2qMP3BE5WZKvf3Cn7GrUVbD7gZLxe74c8HPsNhUoigCeWKqqHJ",
  "key2": "4co4DkkqwUzPnRwiqVhsoBm1ZpJ7F2uX7e9s9etrnZhrmSuBrB1QeopheGkRVVpFWY5qmAiCeDa6fqgsP9iaGJ4P",
  "key3": "3Syh4x2YsNGnFnVnEPoWk3LLLB4xwoJZZX6Py3S13gzLm9nWtnn2149ZfKJCaSsVLA23vQXogwn6LYLNz6oh93Yp",
  "key4": "2xnhLeEpf1NGToMHjGvRZ3NXvxN6RA1txyNoUiq5r7iyeEaTyFqdD8qpacsCjd6LHqqQvGsq8jUd6QNRNxB3et5J",
  "key5": "4JS44UfSBhVFLwxD6uCYrJYZwhFfR86zYDqyFkz1XvQfGH7KTEbb2oeZxMUsk8D7WG4RBruFftmJziTnZirymqKJ",
  "key6": "35DRmcdt5CVf8dsyXSag6ePzhLx74mgP5HKapC13EBM4Yayp8RLZ2csWZkQeGhhVymZakexhG9Ynj92biG9b9Syz",
  "key7": "3FXyUaMpK8T9cwxWEQkq9YKew3b8qPHZMvSrBM5yiXGYzStPF2Q6kMj6qLExvoBxx9c5nkVmX6Nkk2X5PVvnjzei",
  "key8": "5FK5j8tLXEGbZf8ae7AtqHA7nCTFMswaTAcyvnVWwwAg13bfRoqGcPXQ6amvpCWSPkdVKNihZ3t9J2NSF2GjwrVx",
  "key9": "3W3shxLyrpwHVPsM96Gr2czgog8T5nkcaPsx6meENsXo76cdDvo4xVoGzdqLasDP7XkHTFiCWh27VsiFqVDt2sJJ",
  "key10": "4kr7tQ2nJZ8fyDuirH7AhwBCf33HNuhDUSH55hodudX49f6mu9MDiKMUrFRMZhPsfFkq5Kthc6bqrWFQgG58hkJh",
  "key11": "3TVVt3b4GQqrVHgdHcmnrsyRzHifg7sfYRvHuxRSuvhZY12KW1tRhNaiRRBxyT9AVte7WegVcoA77Qun6EAvAa25",
  "key12": "3gVHGJUofsV8YeoTY87QcuiUUgsYM1uLHu3stE7iu7hRheKMjebmEuT76yWJMuC2HNhBw6ZCgTXmjazuFN3BbdjS",
  "key13": "2RmBNm7pGQmvEwbx9hdCASgj2t3kv3tZ63GwetqAJRpLtmbUoexe3UFdcLgzLEBweAdghhmx3VZwyikAxyYWNJ2o",
  "key14": "Eu8VHkNUSSByrCvUy3tAXWRGVwP9MoSRq94mnQ5oEqn9N1e4mL5s6Fed8gM4Er3dGk95ovDRYPtUjsPU3Un1a2w",
  "key15": "5jHj1SjozyzKxLXKdncfFTSjXAgwjE3b92kinA8srW7WeuV4oR4HmYptfC9gsZbkugkXkPpjDZvRhpqpk75ZT9Ar",
  "key16": "51cUX3C6Qw3zCnYVWF4URGJLwMfjs7ov58LBKmMdKurg6bLV7VcjQH3pmrjGTnzUQ7sYDoFGnjiqnbrLiy4a5jMd",
  "key17": "YYDMgZ7gFeu7mjfMAyufGyJZAW2m2BTwAPZfW68kBocbGqE1YAfFPMtmVf9GFfLdm9mbNFNYjgLRhQmdt5XsQxX",
  "key18": "55ZvJ9NHkBQAHFgXukjsTWhTMrqMPgPL9w4Hq6raaDFqppX1R4ziYyyWmiffZo3s2tHbFepFdAxMaMxRoiA3ZNDk",
  "key19": "Zgiaowzdiaf6Le7YAQpoLCamxynJBkdfo7MrtWbDfMiMv19ZBKLtU8ArtJeUYs4XMBMuT8BC8FZtn6s6z4Cc2nE",
  "key20": "2kUwDtZxRk3NhjDt7pH9vV77WB3KhckMpEchQyrfDQzjuVpePFNjct7E5cRhgJsZBV1WPdZsZ2DaWKxFdn6HbV71",
  "key21": "23vbfNf8LVwP1emoQijhUhZmh1gYnghzABab5igEXsGKgbGBEdtZ1SF7DPuusP14NzcF2KZjrAGtPVZkHYT4ddCQ",
  "key22": "5knYSVoPEQnSwfkrbsDhZQ4AsP26CF15djt6UDXmWhbNn4R8DDfbJA787HiCK51asJGVeCTd26aJRzEYyPtcns5F",
  "key23": "2Zs1FpDeKxXdoNtV5UteN8AgBpz4NNQTAuQP6fTH6NRXQUdQYpoNcnQuL4aM1sAZuo1HkuGi9AfVWhQVBtmK9Y5E",
  "key24": "3inrosQvTKTMrbRyo4NtsMjKZNhpHR8T8Y1PLD1McspZUShCtDVSbmaDnPpFAbBkLQbioupZ983JmFEkE9HPmFLq",
  "key25": "2s26oNTdiD3n2wF4AFTTGP6SqYrHYVXvMThNavWejJRmxpKE2KZZbghB5SYQPoohrqPHDWkU9XHcvD75oWwwFk71",
  "key26": "4wrZjaxBtdwVfdzfQY3k1ASg8KRQakaxo6sAojyg35L6SSXwvzdmXv6Dh2XifLiGEPXLpQHL4e5e3uppAgyDJ65r",
  "key27": "5aDcVFvtKbuGf9WY8zJwquSnMSQXodh6v3HgHNMTY2SufvPog29JVvWdaMSTCEVjaS5hVjMw1bRDeaHeNrheYYi2",
  "key28": "2tZt7RHRfKP8JGejdsw49WWXUjgn3HQcLYBx6YqNKUtA1dftjvredLz3NrLpkVRZxjKYAf7Sg5ftyKCB6top9mFH",
  "key29": "ywi6pkssGvtAydffoCK2WAB1erXN8vGLmnSJMFBZL3bcyZ9GFdMfGt68zyjFKa1ZenNE6TgPFQTc9eJcgF5BXyM",
  "key30": "3BPorHMQJZ33JvuTnHQmp9BnEt7mDoBAGf6b1rfCm27BYZptEXWHrFMDc3B9giCZuFPhzYo4NkHaekFct4VYLSyE",
  "key31": "4VZSiaeKNvaReCaeba5ZhHfn4XEkcC3Q7P7RdWuW825WhTZX6Ch7iQLLMx9S32V1szjzLGGcA3QTd9933mwksfV6",
  "key32": "r1DeQ77q7gsQLdQZDzRrGECLvyAvn5fZkPzvuG7mgytiWRevZaGPrH6uxBbmV7gxosm4B4DPMXm9SUNgeVrcVyw",
  "key33": "3RwHoDr2HPo5NtxGdaRqAf9QZZq36F7ASi9qRsG6UsGyD9RXYk4QsYnHPJGUrydSuu7ZCZGREhrMuEPAZG2VK8YR",
  "key34": "3iWqb8LFeaG7BJV17mT7XdjbCnPwv12GTAmNNdWM94Ny8Ki6GvvTvxu2B1k9NL47LMkxZopKTZj5RbnGXNVQTqAK",
  "key35": "2Rm1DSx5dhVcXoYhRihheHPEGpx3mUQ52aTjfiduWrPiZkWz8X8nZurVP2zLMVBdny2MpCfRT5LWrMSkwpchwJ5p",
  "key36": "4HxHxzVAsXWEkQegfKJGx6UhakpHQ7L8oWq2TJ5Cop6RiSubCVaicWrc4vAs11RBk33bH9Lv7AVNUdmc5ew5jAkU",
  "key37": "tW6rV25SqTRasvDvJVvgFHdja5cu7EE3DKnvQJ7p3exvgGvfY9bvDhHbUPGDL6oH4AVjZoJEraMkwrzj6a9Qxru",
  "key38": "25xbbbNrctyneuEKAiagZwYJk7B1Ts7Ka5F7pXPK1JiarXShhRkwq7viw54pR1MzKNRLW5Rrot22Q4bC531bwLcx"
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
