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
    "67P3eTx2ZorVQY7SRL8fHuFWea55a7GiJMb5pGZhNAh2jfdaNHxmapEuBPBJfkCW4Nw96Yq3rdiPG68urqCkNZ7a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kHx9rkb3MBNR9snduCXDCoFWvmfWFHiqrruns3gEU4kjLmhef4QJSESBgfUqDLyLZnHKyZfnmRsS2Y4gEsTd4be",
  "key1": "S1KL5Dt4JNmUYmo6ufiWq5HVX9SjF7JthRb5ta1GpSbfvfLDoHBk5dHbwFX2fQRMa6M1JgC51srwf6yMdJd71KM",
  "key2": "4d3godWaCFrRKHfbJJDn6cq3myRoVffpRWLjDEzn1RRWe9X9gDLMhii7hvKBEjgLUrnvLH3YVK8YwWdBgHQzXMep",
  "key3": "yUTtuvwtJraUxrPprQqmjZTFdcsGoJYntV82dgyCwUxWxvBVFPsjd33kKUk1wDfofBsyoPgsSGtopJXboXbC8bg",
  "key4": "2a3KgQwf9RgDJokStDYdn48s1QzLyGP8qSiz4SLnR8KWNFY6X5VFtK1pMUcjd3YFf8TQgpHgwGvymcFP2XUqXGn6",
  "key5": "2XL17haFDyZ7YCCqPpwNUwLCwDiSLeKqSKFPSF8H6kF8U7myKMcjjPi9m9mFjgTN9145RwQ3RsHdTWRXarhzmwBJ",
  "key6": "3pMZ9kwu8Rb2i2p18QEVxMyDYxD1H3Q2Z83tc3tMYLC1FkTtLpgWeEGi57dJVpig1UxZjkDsivdmwzDzr28pjSv9",
  "key7": "4bK9xFgiyQjB5NZmXWHyzPYB3zzoGcrTLRBpB1kNmwBRFs3zS258j4pjnRxamvYHATUjK1d8fezxnaZSA5adQKm3",
  "key8": "2Q3P6rEazPzuyRxtpx2rN8qmjwit48Kktk3zrkuZ3u2YHVJkFq25odsBnZvbJHnBYhU6pJ4HnDArt2BPrv8ULBbF",
  "key9": "5kyUwPYtjkxx3zjDmE7MoHv6dhxqfjS3DEWfvAcqhaLrX3ELfPj53snkzdwCGyU7LXnyvJcp4k9QCbzwYEre5Gij",
  "key10": "2LPb9uiEvDZ1W35JMgYrXisWvoi5VbMvosZCGQ7yuc3BmfP9APTygN97zNGggpbiJzUPFFAech9ns1S2pu3Tae12",
  "key11": "SuMtaypEQDbS3yPAzRL3tSWrimiStEi49xhnWUC7ZHUzj9R6QMmGdY2hqKJD31Uu6afWuBNK2caD9mKVdM6E5qE",
  "key12": "22jLgR3piaXwejWN5zNTyUi7bEsxCffx2L7zZE3uHWSw5JZcSWmhuKydUtwK4ufo8TM6mX8aAP79iacHZU5k8Hwn",
  "key13": "2vLvyWoub6bqETt1ut9jFLgcjyBnUzbM4t5PtfUYFkvTsemKTwKYh2fCUb9BXd88yPt8VjU5tUspu6r452Cxovmh",
  "key14": "5DCDSztoGrQGgrFWxhfrFYnEya2vNqPuXBaj5HVqDjweQKBqgx1AG8utR8SdJYFp6inDTr9JZuwWgSJTEAWhE7yR",
  "key15": "4bsHf5hXBiUKWPx4c9j7WVQw4WRAfHSHAvYS8G5NcHyKtKXoKpLLcKdtByZg4B9aDUj5bE21Umo9f7MvcSKRVoYQ",
  "key16": "2kqsFztwMTCci1y14XfJ1MAUYvUa1qsRRHwur1yZWWUBzmNnbWNpq7kTLniqAp772DafNsr8PYpF599SAXL8YJzf",
  "key17": "Y4xCdUmMgG3PGwqX3UhZgfw8sBrrXP6JmUfTvzvjDGnLymFkMGpgkUuLjdQ8tf6wXiLHXJq5HCVaypmH14JAG9M",
  "key18": "3sskLaTuBPRwfmd67ro2VhEo7gnmSTtDmBQVPVP76uzGYPrBsP6gSEZwQA3ptCFkege64xaHDnn2B9cG7rdyepjd",
  "key19": "34BsLDQrqvjgkMUYEFq1afW8w468TXqTa1jtnQ34EnNSVLJYbHfS6Qi51rYNJfjYCgPqjyBVJBXbofWrdw89jcBr",
  "key20": "4cdYoQP8V8mvCT8XDearjtN1MfitoTHqzA7ZHVVQa5MPYszZEUNWW4ube7GcQNTpUCEyfWiLxmiYPiNEQEMUhoVf",
  "key21": "YUXpr2FBQjQyiJSBGmh3q7AGM92UBnoKsviZTvsoDTiUu1tCk7Pz7EBjFMhSGYgx6zUiEHytcw6ukCJUYNeiVyE",
  "key22": "3R74Bhtuag7mS7pA9iyzsqBwjMz8YJsNWuAZFUhYJNwdCdjVriBwSN4JnuVcMZYafn3xBjFQPg532CNzFgD3icsi",
  "key23": "66bTvoHUGS3tcfLdbxjBFD74rsb7oJeoADAakAqBTPxPuv4zd3asdcdSph1F8LahG4qvLobEM8KunojDnUhyHZGW",
  "key24": "4ft8ruNMfRFooTwA441UEDfgoiWp7QFvzcMJxCpzb7ymgPiLeJJDRjwmxoQiCs3oKixYiS88sitEzT5y7xNwbccj",
  "key25": "4pHSSZKzui5fPVi8vYw6Xu9aw9T85mxdr42n43Bo2x4jZEfBzbGCMMPjtW1h1RqGbbrQrpSDTyMdN63MKNi9w6bg",
  "key26": "3zDt68GEBScotwwvopMn6Y3zjXpkwKHCfUN9kvxcjYp5ZiNMr3vnVT6AgamiTveo7r6rqUqbFMnE7MMMDjeVhyer",
  "key27": "2gT5Bvy5rCjXeLKkgLow3j5pjSjtNpFAzZxgtm84N8L92RLkLaXxWqR3UEMAP2B9f4hdABdFSBCVRwL9X3RjZjLZ",
  "key28": "5xkvtuSTJiBngCn3iyZG18jwAJAaa5bRjPp3SQqxK44WneR1qSwywcDeZ2ZBoUcNWCNVDzBYvKCndUgZgQhyxSca",
  "key29": "G1REESNKzaF177z5CAcN7fuquNMzQYYsuegZcCQZCR47QWbjAgs1o5td6HSs7jB2B8endZPVeoeM39Gw629mJrd",
  "key30": "TigBj4PZATizqYViPD27AJtfUvAnSSAj5P7LqtT6KWPGCnZywhWRXxsAAq7XPEzFYRBZfSLEoLTnF9CxMUnnYnY",
  "key31": "4Nd3oe2uXFRoDtUrbwkzFuJY81Hs4BhX3JCH92XVgqvSAjEkG5AR1ZMtHpUzZWAYnb4TtZNidSM5JPtRcfSoC6iz",
  "key32": "5dms6wgu99z92DT5L7U53KVU8mPfrvxFTuNGaZhU8FCMW7otub76swPaPvZLXyZYwBzz1x8C4RdpYquLQ1DhEFcS",
  "key33": "272CbhfPS9svkZwfTmqqdicKAEcCxLvgmFYzw9rRoNqXTKp4CHJFrTmpHU1ikvS3hWhmtWz7LPMEoSGbqySeLQMg",
  "key34": "5iZcZzvE8UJ3ME1KEr1J4hQbDXMx7mA6iYYyxy6z4GYDfHXW7yAZ1MV73CVifxkVJAmrUAScPvBZ449bifLEGfwP"
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
