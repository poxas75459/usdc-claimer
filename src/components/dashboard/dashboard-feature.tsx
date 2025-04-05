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
    "35FZ8vDwsDQN4nf4zfKKRRyxRFo2JiJfmXfGTsFK14VH2aVHYSDYypVnoYLY2DyzVmLaLMGnfMBWUQzV6kiEfpUV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u7WXmKes93z86beeFULygJM5Mtr2d6ywGpPkVDdrqXGpoNubXFJpnpGEBGX45qQW4axc78UPnMmm5KSvBi9zr1F",
  "key1": "4kRZECjgPEwezozDeT1ccC3YaJfL78QWhGxYNbnpAVaS1c3wuaUFVCXhX3nr3mJoCh3rBxqchLd374wS8zZBEPkQ",
  "key2": "v6VqBfk8SheqqapRzf1QMkU1BgFdtrWdq61rwPFAqr5EHPgnyLAeX1qQJCjC3PJnBdqhuHAeHY63fUuyULnTii1",
  "key3": "5YGcnYTEYugyjdT5gcm4h8u1HQbsuWL68T6en7NA5zSi83myFV9oAiLfj6WhDHkXyNEsoLEXEHnm4XivYohfnZgZ",
  "key4": "5JQy8PriNFmv6qw4ncdL6sLMkKBKVj3jhMq8zVKoQm8Ga4fLoHr8m81CtMeMg3vyrtjGcwyd7oZz33kQkNj81ZHf",
  "key5": "4BjTDfw6WcjT4rTZG3z9r4DN66ASKr3V5Psmr5NNXpzBNSfKoEQReiGSW1PZ1piJ1JKMPBJjrHa1CyRWRTVBJvyD",
  "key6": "2pSn687ccUwrPNK4jzdSynWqTFq8FWsmm8ddSYVgUHffAPhAfmpKa2oEJ8UabB7Y3qSqBVLE5YV9vfFiZunDrp5H",
  "key7": "dn92nndct8f64SChTwxY4ZV1JsynP7NCndSDmAsTc7HkJ43PzwYesm49Awt8s4eisLYE9D6RSai5RSs2HyPuNNG",
  "key8": "LfAc2sT8idAnbo89CnurGjeXD5mUJ8kQgAgfB4B4wUZzcFoispsPPToGDDjo8qo87j5SEgA82E5rwoo1313hwmf",
  "key9": "3MooJDkCkRQq56QEj4kJUNL8ZSRiVVFjedGAD3Dq59VkvB3Kw6a12c8ZuZ5Z6k7tBK9DnuQGwGmgryRvo51B68qa",
  "key10": "2FUpvwN1JGtMxr8Ep6Y1tzJCcGpYCYxLNLFLpB6Lp8FEWWg8rKYjjHv7jtwN9FVCC2P9zM5z4XRVJnvE7mGrYF6o",
  "key11": "Gr1fFZ2SDYqAN1W5bDzB4JXp41EaxThAUBeAmSsDMc9wMPJ9hKyjh6BmQqohD1Kcj3tPLEv4vstiXFGcZihbM1q",
  "key12": "41Xo9f81YRL2Jn9tUCSPj9oyhkH4NDdPuQNNFaGC1YCo6dWUXDaWuq55bHK7EAc4kBLgut5TKp1kPXUSP7KCTG9U",
  "key13": "2Wkusoc4GL6PoBEpTrjf58rguSqxsqNFa1ZDQ1z2gw7ZCqipsNN82soxwBRZFNMhW8ErBBwbfaTwVmn1ctzRZPxz",
  "key14": "4PDSE59PtbMWqoRRZjispsHw6N7WeZt4XMAUeoZox8UuJtRPxjHa7UhfW2Fj1DwA9o3DCY5CgVWBAPFuG6Ez27HD",
  "key15": "14vdGJ5T3kYLxqKu4Jivn8yNnSDTMkRnDv3TSBnCLsyCReHRHWQAjSzUuyFw55CU4NUuHYVHJxzfii35g8rdWDm",
  "key16": "GvJQ9ZgHLmEeiPBFqVZGNppVrNtWpZih2Wm3Az3dqk4eHZE4fP3uQ7qGDbiE4CkGKiT9NHTcqEDpF8ATSnwycpo",
  "key17": "4J8UZMys3rS7WNCgwnao9KgRztd35xUmHXhZoGeYmWmuVTxcdiFFZfK8ugNBX4HZS7ByYe25kBgoZc8Kioqncjq",
  "key18": "4XgSRsi4khwYNQHmCpyPFxMbKnZZoPiMHEghqJ3vpiEAo8HDerU9jAFQixYafhpSXqaquVbGaf1mrrYetwmkbXLH",
  "key19": "426wbZZgy4A2muUwnUQoRPGRE9yhhAzYLHnteLa9NrqLrgo9hdTzXWd7tzB2YkNkJW8uM2qEcfpPQXfUm7L58ar6",
  "key20": "2ohHTxi2eee1DbKACR8zwSDAPJs4i3T3pv5VWP8ivZtnv8GPLiCJvSxyq9opiUKHL7wRtMe4Wv1vDRQfvJupRe2G",
  "key21": "4AaE5hieEzS4MRmiEB3GFrftA16PXGGzqEAB3kJgeuxPDWKEPqYui9C2i3QowFnJiisUMcQwWXymBrTMZwWLo51C",
  "key22": "MeMfCcQEomAhrSBVjqycXtN3Gp24waRHLaBYYJ192kU2ZRLd1tgkZrKYSHrdvHtfK7je3m5c28KZTjGXFzmYVA9",
  "key23": "54L9LsmtzsctU57GYfhF1vJN6GzGe74pykRBneomdHmFqdLbPFUA9u7Q7Dk7zzRTY1fVGrnm3Vhwd3B1qDudJKo7",
  "key24": "4T3ALVME8wSa9WM8qDiWgQ8kXQWYPnGZEp5dEZfeuUVAS48zjTh1NEXzWwRDUYQyCvMzLtbXJChAes2pprBr9Hz4"
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
