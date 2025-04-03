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
    "2Vt4jNqqJHFWJnzSQPDNEqh77LFXuM82ju49w1ZPXKdK7QkM5H5e9si57EF6JanUjcDFcwMcjEjA4wCpJov9Bdez"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qgyuDSCb6R3aXwoUJcRL6SXY85CTkYNG17L1UsWhURt6x8s5MmKzhZf6pgjD8tD9KsCu1sDYJMAxiD7w7Euf42H",
  "key1": "4ybFdG3BhV2nsQqN3tG1o44ymvviz2nQzBQdFVwE8zKRoe2Mef411WHcaEaDMRWaBtwoEhMJrbW4GiJ1DC3k1Smd",
  "key2": "4JaPsrpst7exNPVaDYbdmWMsxY5eCmtRi91wGprsrrr2zRVFHxgwJkxSf57E26f6UVz8PsaVwHNW17cg9HNt5H8D",
  "key3": "53GXydpaepiiD419hnBAH6BybsqmKMJnatWDyDoyLpTMnDHgrKTLwCQ9gGDmVn5US1JkWWkCreMwRvZMujZH6FjZ",
  "key4": "2WP47vsssYN2grfYgJDChxnJjs5YWyBzSL7XoqcS73HxGubzLX1yCFKtNAy1pXSN8RW7GTEQUJByBz6GTsRS1UGb",
  "key5": "4FLDxcPk7YvEYDuPU69cfBN8gL6crw73PpYotZQrApsDVwg3ay9cRFdDzppyENUBxJEPYb7iU9xUwPpM756pti3u",
  "key6": "RAkHLKDH14mrLk4nJRH3kA7Qvt89N2V4Hbu5LkcbkkeqbvjXFWQsYGeLJZnokgR2vP6coVumVJ8EFrjFrzRayFo",
  "key7": "3Vr4Yo15jVctZ1uMRu7fPWBCLiDsE9XcrtLjFxnVYWahTkHtRtkrVgiYSqdegpaYeuQVet5uLLGmGfRm45THrrZb",
  "key8": "63r2jVqqRBA6LFjpM384ComxyoYHqvkxyJRMV1RT8yNpuDBiiMZUanomm18KKMijhhfAW3fMWCgsGrQBNFwMhRi3",
  "key9": "345YG4k6WSxEEiHig3yHJr28482x5qZYD5F5rWhz9BXxBKhmuNGj4tSSZsmxsNavtbz6pzGAA6f9rM3jNk1o1beL",
  "key10": "3VDycVFzJyyTanxM9WpbAtFTsPeg52DU6nTDr7bGEQEm7JcZPK8F94G9n95n2wGt6HzKPeVpb7EUFg2renBzfsnq",
  "key11": "5uwrb1c9KHdqueHdXNZ96rMBhBMio4ygkaLnANtzKdbQhrQJN3NfoiGKBdkERC5zRDdZ2itsJcEu9B8XxWAMBQ3c",
  "key12": "2BeYST4xktQTH6hNcJ2nurgJwiANKK67xTGWL6SrBD5dD1TouCFDXZVr66LjgsLkztyS2djoEm3DM1jpn1DNKRGV",
  "key13": "4wQ67TmsX7H5BD3cuswSoKedXQT847QRg5B87Bv9qcvKG9LJDhy7tgYCUkzXng4ZhcD5fvxSDrzEaRfEbrQd5vLG",
  "key14": "2NmTYdGhFM8pVtxvYxmroRERzAYjLGqQpS6grpzTUT2SaHuZTnS48pr15gjMDdC3Vc4p4cdLxYgrdpqiCadFoo9V",
  "key15": "2BWQJY41KGySp4gMUUzWYoTgP4kwULTYHdNA8b6m7iCtHEC5V4c8ECs8vMZr6m5koZarZqKKrp1WBzJWovMTBeYy",
  "key16": "yQ9StB9v3t3XJF7VadhcbXxmqk2y214B5qvgDLwpy2TQc4nS9at4XJP6pLeXA3EFrofFkzcHYhAgSEBxeZ3P8Tg",
  "key17": "2xKKzcD64xFyRd9c9DD3zAXHW6jCpybd1Qb91Es3gfe9KmBnidcWauP6aeNkUASrTAHi7zTtQ982jsw9mcgcniFN",
  "key18": "4J6AZF7AX7h6mgxmKxHorgbYxXpWoZgSAq49BWf6vsXNSE56z22QLvvVVxgwmJD6Rkmx1b4hwF71fAY3BAVx7ufk",
  "key19": "56Ve6b1sV8Y7zRp9x7HjDPMKYf8chSsAom94R9ra8jENNbniDXZNyVfhfuRj1zuLKd6anV4gdhGaA8Ysr9XSfoyc",
  "key20": "9n9cRDb1feYk888GwLgECTYwHR7gzZidXrh4z8PQj8pQi79JQTnHT6BpwmaaGttZoiGqUAxTQoNqmrmMhGtUPGK",
  "key21": "4kCcHfKU4cNyBDjH7sZSwsAFgHkki75UbP9kXWFzxmRUDUu9VrfVm4s9tij69XFe1PhmxKz9oZiD9MUr44mJxDC8",
  "key22": "YdyWaswQAjokupeLd1Xu32qEy1r3S2Rh5YReNyNCaEqDT9ponNzG3PPgLuR8QR2gUuGHAmMxK28U6okbTfBc4Ho",
  "key23": "2tUroKNRVZDycL52X9y7wBKqBMv9PqinxBCRrgiJMQgXnevKictJwzseGzyvbdti4sLW75tvENwqxuoM1MT6dPRc",
  "key24": "4Zmu98MMDp9QQ6JAqrCj9oLto4XFzr6ke6xnQJy1ws9Fn2Ca9dvRdJWW2EpmRoL2hZk5XjCrqgL9VDseMbzmP4qU",
  "key25": "3M5fFTgPJYJrTGLAYus7bbyuCpNwyxrqxjGXSMtTjqbUjSGc92JehTSw1wnSQGpjwQCz6ZDz4Z3toezrbJvvm1m1",
  "key26": "v6yWx4BDqTkF8jkdG17Hx682Bru9T1n6zj1gDwJsvDRHPdsmCXNWWGFRas5gztabQ9iJcdK4q1ZcLF3S4B1ueCQ",
  "key27": "th5YYk4hxKavoV8PomrVhLsKvxHzvBNqw8rnc1zEneQktYeB6dW7FBbzzTh92UdM2gytyd9jx4KCWhja5MZ4VRp",
  "key28": "4zDJ2MAYxJTYUk9NfFeSPc5ed4wzmvy22MMaL1cyKAX8KDfbGngbjAdeeNd13A67pqnhYZ2N2KTvmAiVVBSwWLzT",
  "key29": "4acPhdDzjPDNwmVhomG887WV9HjnbHvwJzxicj7xRPdVj8Q1dfLsn6nzg8h6XMdDbiki7ygCJssKTpBUTccfh8ZU",
  "key30": "5msCxXtGCNnxfUG3u8qi3chyn6veRq7i3vMpf6sbPX9o5KuJz9NBL642pTcss4LJgETdsPtPhZY1ijWe7Mi4oEEj",
  "key31": "5on9dKKUo1Ct2Gh9pMHPjpHydJJnxUkWrbwEGQSSZPLSWGGfGcnbTxzkzzYoREo29YskCBGowMXp9YL83qwrQ9JW",
  "key32": "PuEUa1A1jw9LK7s1kwkYFdBv4LDVsnkBxYnMRJ4zMfJYe5exdGe4WGucPj4dBMRQaPu864fggy7eaz7SvyG9sfi",
  "key33": "2uUdxHNRgUi3BeaYNUw6iLwZkDtmPDoh2UDu3x1iXH129VXA6YZQBfp8LWDGGCRBHzSvsmdn5Cfg5hFJXKjYg7Fg",
  "key34": "5LzaYu13UYvHLt1XsWKpxtbjdtUZNiALPVQukJFumwzV7bXKgMg5CgtziF9fjjKNwBrpLX3GHe5J1jzM29gX2eqU",
  "key35": "4E7Hs8i8HGteQpNkdP7yJFEVucpVgQinyjyLrF9zfXfFTQyfN1Jg9Xa6dhR15xcdKphD8bKiMKdpHx1iQ1575NH2",
  "key36": "37DArkDgjNtn2CGgneetjjwWJ7g9P5C43Njh9GZi1vk9QedKopHmDJ6G9iZGU1qt3qgmxvkfBzKFrwCrNrovdw9C",
  "key37": "3KY2MkueV3q8QDmo8KzZr7p9nDyWTASXNxE4g9f2RqJjPyih75km6u2LLpqahxXF4VraHPuxKLD1PGds7gjD6cg",
  "key38": "pXkBUGCbRgdeWmjL1w3xU7uwCqVBEX8qWpoqaKTCVoaZ5phd8SC3ZeJkDNcNMxbjSEHVa8Ey1rhb1TV72KujUaW"
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
