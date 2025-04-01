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
    "5bGqRHEEvBKhEJWA14ppGeEMkgnbWNyvEp3hC1AuZAQ8hrQTVQDmTggi3NWg7zMJD2xYcgiBDMXXJcfcfB4xcf3Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MAojVGe2BWsJJ2Ume7cbB2WrxEnaX3EWes9XsruV4yXVjRQVxQJHjSgHy3cMTBZaN9p73ZR2t88e5614CSi5Y4s",
  "key1": "92UuMrnEywgan7fCvMShhFFPfNRfMcsqyoMBCKMxLUZwyYR4jaePh6khR3vMxMtdYqvxZ37FqSnh2d8n445Zbqh",
  "key2": "RpqWtkTTUvUfwyAc4mgmv1miXTWjgfqaZPTuxosWPvJen26Knmue4J6xNjXhtKvvbDkFyj8vWCSMhbsDzKnSMge",
  "key3": "3NMYw1aDjZyvtXKtEmq26gCqqD36atM7pfSQZnZd65KyZDNorsyw7T4ggshXWehp6YrTVyNGBRtbrgAWUJHTpyT3",
  "key4": "dibPv7g6VYyedg7MkLmnxRUUi4EF18LTu9XUi9LXw7Ro5qqBNGzMqV4A6XRRvrS3NeX1eGfkqSi2x7cdxJGAUPz",
  "key5": "2znPUUReVuo1yHjAktFRMt1uxQgtjxsQkYFunsvodmyGMEeEEhhfZDnWQYzEB1pT2n9YWwatzSFCaoxYj47WuYL8",
  "key6": "2cUQh5d7gu6DFAMNoTNdhdAWthFKuZS9Djk23T9CMpd3MPXgDRSfi7F5BsBJFpoM6cMcsancDQeNbyFKunsB2LZo",
  "key7": "3a85UXKr1bvxcCmbZkbFag7SLAjEBfq4u8v2MhvdsfD3qbfGqyiRZrbAW2yj6P4uMjym7S3LoebPoDrwgUm8TpiU",
  "key8": "5cTdpTnCQ1xuKv72Qm1hstwD5oWSWWUqWrB7vvRJDhC8TcGW7vrGmLEQnbLwnU3mTpjWhDT4aEnQDXVGBv75mjy5",
  "key9": "5qBn6prTYk4ckjaujmT93YnVWkPn4CdFYiAdnnPcprHufPsN8BTrRDXsWVqKyUiERiYmVLxmGBYMnQJkmhf5FHg7",
  "key10": "3ZuAAYUQ1y5Yrjjmwujsrh1ZXXRcZ4Qh8ZSB96dyufkizPhYrf8SU4ugs9J3Mf2bEoyoqB54Pd15e9U4FdBzTa8n",
  "key11": "5i1dB3Gd4eL49t4XBiEYRKM28oNDhokTRRYsGgSyFZrSNE85hW75ethDNFaaPe8ipUDDFSSy2sUWZYJZskXP3waR",
  "key12": "3F2CreWDABqhXN9rpEt65XXyPhzuQGKD96mzr3tZ4Q6pFAMsPmqxtitsaeANKz1ch66adfZKHMxFC1JM6R1vi69k",
  "key13": "2ZvvDDQgqNjYWLQSKGxwadk7DCCgMFPXZZsVj7HUxm46CT64MjhR5V29TbuYAqurc6vvYr4FGJGxRych4koZtZUj",
  "key14": "64qqXznfgTzdK1ZNc5TMffMW2Tt6HgEemwTtjQPKLN2eM1kF61FXNMHS2XzRmq9A2iDXNSYj1TkxpsUDUSS7Vq2z",
  "key15": "4ehNAmEwXwaPN81Cocj9v37b9qSUMvmUfvthf2QvT9xG89QHQJFXksjWjPJ1gimi1GhTvKaAKisMH6bL2M7u87oF",
  "key16": "WB29MAWFjXJoYfatveDoCpaVcnXpc3MbwmoxQah3qZCCStSzoPkRLvz65RaojuCHJp57BzZaSrEKE1FXFFqEmcx",
  "key17": "4fX6Kx5smCbSD3vxh79LqhGehNYn2vLTwRaNgPZdjigq6s1DUKWDFxZQi7iHWq31cwJYKA9kvjuoMuPtDMtiEpR4",
  "key18": "3RcRcWCa3T3YEMRhvudDBTi62sF27VUVdbLdQJitgz6D7v4wYEzrZJ6CbPKc9LoKinG7j6Pyj9b9qHm1x6HDRiEn",
  "key19": "VEBP7SQT77wghGBcQDaHAqx1X3ErrXYt59nBhsnBGsse3xKdKxaXdRrmLVfgDERWpA64ndFT7zUNEwpr77Tn6qy",
  "key20": "5em6tCFWiy5x4QTSjg5PUx5uHYyHZDbvouu15TdkaUSQEF9jZ2xem6KrFtx95QVfpkM469RZxprpwBpmPiUFBLVG",
  "key21": "Tb4Dz6D2LRdm8QwFPfxq6zhwrZPiR73KZMuL9YriWM75PPuBkbPDD36gjXxGSQ7ZoYv9W1vc14oHs3VsDGQfdsg",
  "key22": "5Do7UX2YC4DBkQnhsr8GjCWuo3v8jrWaD3kSTdbMSFEmHfHEFjayYoXSEJmUj2LfrzEQCmTQfEXfoxWpDFCr7Rnd",
  "key23": "Cd4rVhhYyUXk9ZkZQ2sHPfvdPXxjDGGwqjHeXAtkTbVzhTc72Tpta344dDe4gCjZs4h6GDtNYeK9S72U4suMJvc",
  "key24": "3d9fScoGQYH7U486L3TqDtgNvqWtA2eGsK9nQD6NoZ9jumfbaNzbG7Mr8qaodJb3KFTFmpJ8EchzjVXLmsxzsu9F",
  "key25": "26m1rie1S2Bzwr3zQ9rWGMvXiu5a3M2fodCyNkZHE3An2SM74gcwMsyVLQgFCJqKs1EXHJrfZwSu4QkbZZCL2gNH"
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
