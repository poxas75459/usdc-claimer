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
    "37LJtiNrDfBQeiKZtjGSUFthmehUqBxkcDzby8To9DSerzQm79pqWzQDT6DbyterwZ98XTpVCDUqdQvcbC4HiJoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MkjH9eFUZVfr7GCx8HW9DUxzKTjgfrqLNUhKVHScRt3G3x9KWuHhnvqbGRP1ZPJ5YyfqnmzztmPkogcwSGMehSP",
  "key1": "5qPE1C8zTFtYquzgGUCp6n4PWWjtyKbLex9UmjjcBgbQ2DizeT2jkHh74tYdN5Yh52t2K8DteMaxWNcG8QZ3YbbE",
  "key2": "5dKLYxYF3q767QMF3ebkmLPukbYAaqBH7arhs6v5Bod2sgksytJ4XaA57a8egehS2kboSNxoCvVifLrusUEc365B",
  "key3": "R7WiBrutp3XttrK2DjbQi9m3vYwHAqbzzyTv4W1gnyEkCsqmruTdBSuEXY8dpG6cbjqRYNUTcoB94en5FmkeFe9",
  "key4": "afd5ap3ESGnCG2bo9S1U542kQqZHDktUYPCTLzKJRBZSMnKeojzQi6qL8JqNHYoBMCGQf4vZnZFEesWrhz6rTqN",
  "key5": "2tpbydYqAPu9jJ84pcExrSu1hucTQBfoJXCHhAuyrx6FWRynpMrKTMYUorMoaSk6tRGAhb3mokFEqEdGtJRSfvVd",
  "key6": "5Yb19Ai273zCubkXpGPQQJj7HLpvEEbeo2oreGyqpjBRCUNApsjNPdC4Rww7BHkpFF1uW8tYqLDUbicByukzeU8x",
  "key7": "2cx3gjkycW9fR3krPQgPUEit9ZvVhtDeuSeGHzE591NWLM95rvWvyeeXL2aSYSijM2mmwh49ui5UaDuS7ucxNaGC",
  "key8": "33ZBvZhdGR6yyTcPqsXHkd3i7T6mRdsdUQmERWaokvRknGkSRxxbGcA3VPKc9p4pqBteSgzF9ARKGQrwBdokjbWS",
  "key9": "62F8d6rQpnrMjFM6PrNFHjLKMPEVoqBwJagTM3n4e3cmXFX7gRPnQM8TePghQwqi55jXuvhDkNQmDPq3oTLpSGFw",
  "key10": "4BDD3VDz76LY8WffXZPxf2Gwd2VcatRFcUi4QVPFkFgeLyEyB2LAnNj4aZ9DytsUJTrDav2awzkYM6NA68v5jtx9",
  "key11": "41sJuHJABsMbrqS3huu33YYkDea2ZqfeMd8pne7mfmGpfRcBBMsjX9af6Ur8nTeLi4LpyiYiRCQgJnvPLRzZ2r6k",
  "key12": "dtEbpNoeiAodHSooAF67zPt6Wo2JVBgg2ibsAs7Cf5WzT2raamBqv2Rmzh8rWFFsTv1oAzQFLuMQtLAREMLaaaL",
  "key13": "39c5eadGbsWHqBzwArPwiFLrG3ty2RxU6qwC1mGuJdwBSyQyt3NffuBAyxfFYouKoYiVHewwqN8kMN9EY8WFd2gJ",
  "key14": "5np2ecWi1c9umdaWf4zcj1JsxxYdZPaDCn7aCp9235eyeQ9zswUDJwmQS93b3a2PA468yUkKx4NyFSa8jeB8ABMK",
  "key15": "5kgPWPfkreoMWRBbbpxepAFcNY9vcimytH19nRSk8RPsBiUf7dhfC9zTE8UkQwpdG2Y8q4C61FcjzqLrd6DRA9bL",
  "key16": "53dngQRwSJgT6QQd9Co9E9vMESEqfgTqnsp7PnguWRYZPZ8jN6VhBEU5zyevUgjeYfYFQwcCz2FUdU5yhNLYe1CR",
  "key17": "5kMQ6ewYgbe5ZSSf5xfPuZXUs3ELnM68AdEb5YEtHAJDzHVLqeLJowWbW2DbpK3vqDa1pucirjZoQ85wFszk3smm",
  "key18": "4kG4LFUwk2xACg8GYCzB27C7Dkiduf5gdwSvQD4uBXSLpWUEoo67Rnq3yXLgzo4phQhS8KzMXT33a2i7Ey7k9BJF",
  "key19": "4wmwdXwkgSspSnC2jSdnLZa3AELso1LWs32fR24MFTbXq2uWZpaKD3WzGNb8M15Hb1oRnhtu7vbdCFEKZJqRhkVL",
  "key20": "s5va4qKPQgFm9mEZtyfckYtMk4bRWnmTmB7EFgCzyzkKNUwKX9GtnvMsk3o95r1jo69NGMs11K88vxg9EKDsgGn",
  "key21": "3vNspNS7kFPS4674YY9jeEYrhpxM8nVCkWD8nbPviEbUME3xk2ZT1nn77kWwyXkuN48urccRAFFqCyGg28UGWyUw",
  "key22": "3XAPJf39phr884an1tXqfTjUyckJ1nV2egoSKAy1HQWtpduQ8vwqAiPMHNjhL75HwnafWFExbqCXF57b6pfHkZFo",
  "key23": "gy1bxy4APSKiWUU6aJS6t9LmQkgCutLgWYp8wb6815DGMJkz6LFE9KaQSVDAkRJ9NcZ9jrYEidVKiGqhmHqYnyV",
  "key24": "3m8KQQaNt6RWbKBHkKqUyHdRQiiaxV8Q1LgAPeEswyNvZLuPempDubQ11ScGcGFP4JhRnuMic75JL7kevX47gRQt",
  "key25": "2z3FakKK91s5wZYEs7zbj1FRR5FfNg2WeYakvBoQV5RVLAPfHq9z62r63j5i9CKxvByZunxP2LBx8MZGex6TqYqR",
  "key26": "o82K6QhEoSm93CraB8bAtyALvPfKCFFmAmK4mNZhRSmDZGMZffXpthMtNECsYhBwQkCL8KPWD6NQqXzofojMc8X",
  "key27": "3tpNYgSQj5m9LVwLwg1S5XTFZWg3eMB8gDHqdXxuCKpiTByQNUAkwmtAJPSFdC8wGod8NjGg8AWXKgcwKVrQ7cFU",
  "key28": "5iPaSdFrLD7e9jBpmjoAFvRHwn2bRipx9YheqR5Fn2TpEfMoMLkqRjXETUgNRdNWk6MoSbbbLdhsrXEJEkxHLex5",
  "key29": "51DMgi7uMSGcNgykXt2AJYWSuYE7q7tQ9YbLntB6VVFB5jovZup9gaGCR8hWrv8Qm1RaD3QVUvMZgtPzbemXPFiA",
  "key30": "2L87m6uNcZWKy4im2QZGQwjyzbC221gwnXJzq959zdJDddWDPvqSkE13oYDwYDV4R6WubeDHjYzBL9gAPm8v53zk",
  "key31": "3amBYYshBqdiHX8i9yb4Bd1gM3xJaMhoq2RGH7vmQNMq3Nw8CXrNHfs5RWQCN5zEiZ7gr8MVortq8mSSheMezYoa",
  "key32": "2mTUkgHbd4A64SqfrzxqhDApqCCf8Deg8bY37iMLCxxq6Y3uqMoCQ86CGwdR1ehyEW4eYqmG9yJVWSJ4sTusB7w8",
  "key33": "5RwpNcxBKN698z4T6QNf4JQs3p2978jwVrtv25QbEvQX6PgyC2co38W7TqyLpYRe1JXqnZ2WTDtE4Qp1AFSRw3ZH",
  "key34": "4VttxXT83QFA6LXeUGZxoPK7r1ki26yadz598oxT4SUtGE4oTifD8FDtqcaed8sb5GowFwJwuX1FdbFsco7bxnNk",
  "key35": "5NoPDHEjmDbXdVnAm5fwBrwNoKp31sPdP6YB8ava3PVydepUeksGXK33kjS3jRjLuXteBciNAHtsnNKSN5QTs9Vy",
  "key36": "4J4FFNzTnoUkRt2ZDPE9CfsAkCJmo9H3qqcJ1f9eJH8Hmja5u1msynV9Uem2XNn1Z14CnUMkEtBAyFi13amsVa7E",
  "key37": "5GtbxygPbF4GWeAiJPx76vrSCc1LexNya1zt537PUqjzQP2sDPJhhDtk8t32Xdq5FUuNfz5WGz3BUjN1GSbsxXji",
  "key38": "2S9aG3NXc5BrwQdvAsHYVwHWU2ytkR6bPkQ3TrUYZA9As8izdmiKCFxStUkhzBvTNQCAYfNzxC4QW8XALeEFfGdT",
  "key39": "2SpS2yLUPWPcNftsifNkM85uXPGHLfLx9jUtJZUiZrhbNBLAjP8PhU5LBQWyqSBX8JCfp3A6GBimbn6sxjh15pC",
  "key40": "5ezy37E5K4bRLz3AqqbjosZ6iWZhLvJRijyGp6Ex7h35KgmohzgLttQWRdmykCM7gZqM234xxwmhf2sRYKZS4Yg6",
  "key41": "33TVeRsjoJeL8aCvaE9142yg1cmZ1jNwyzXjKJ8XfJSYYCmPp2z41Ce9uk4TVxVQTo4tDZSKpqMWi43AvmcG1CGF"
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
