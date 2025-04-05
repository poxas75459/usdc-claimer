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
    "32A1b2GkuzCwpECtTsi1qCeUrHSuJgjD4HGRrUQT5xd3Db8SuYbqnEy66AahGX46ThBsv697xnymZHt7DNdH2Sgi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h4oh6FwaZJcvELPbWS8CqkkHAV7FCnH13uZztjWRh4eJFokYLAjcrhK9VKec55NVQBvcJQERLdqcBNrCrFCfvEa",
  "key1": "67m3AEq9Gx6hkLaruqLa3RhxXW6w75musKzVMKdRuJNK82Ac3C9QiJqaMYFeudACM6UsHtgDrRDeYvWvYBj6BcNi",
  "key2": "rKay467CXTSvXMpjJqcNenzg8GjAdVxkCnibjZfaEuvQjwq4HZWh54DibrHzrsA39azxd5gmLsLvmCU33Hbb9vD",
  "key3": "5wSeWZMoZ5ej2F3yj7ipPrNCZ61sLvUhWGa9Kvi71XwBvtuwaYgqrBSW7u2WjSwKZbjjSCjeB5KFEtCQiZB9UadV",
  "key4": "YH7M7Q7AZHfDKg9PbkxLFDq1DdzVVLUqrYmrk7JRPMkSiDivoa6KGU4mhFRunT7iy84WTBNruJqzMTBWyjy8Xu4",
  "key5": "4pmqzEcf12Jj4tevozgRj3H6DuzTThTCCQjsMMA9QW7DSmbJf3hxQMipGXp7FWVt5mWRYkvziaYPRoprJCvAYLtb",
  "key6": "SwcTs7bgaPDjC2yp4djN6pWBNKHA5Z4tvoMD37a5bqUrJjELstCQ5MBEBiepvBVFVTvos8PDb8bAvss4TS2JchX",
  "key7": "35Bm9KRLz6YXxnpwh3Lem5TfLw55PHeZNuXPPWFophJqeAhpsPcqtS6ga8iYvAy28xU6v9d1xWyt5LLPwm95fKeE",
  "key8": "2AwZm84qDJpwWPwUx6nmJb2v3baE2BZ3zoU2ugLyaaFW4vnPQUgvhNbBhT5TD9ajZ7w2odKDeGjrSZRjMXETABsK",
  "key9": "51N1aCF3UTLkKW9CQb9tjXSivLdmdjXyoBbXs8CktStvRhyPb4J3TPUftkgwxoA6KJBLv2cAg7zqDSHHbbdRtrfG",
  "key10": "3thhuXWnAGXyXSM1JQMJ2Sbew6RghRaBJnH8XpNqsQ9MAn4puKNUHeaPbZrs78rhpiUj1bZmGeFEBTK9Eh9miHhg",
  "key11": "4HxwzRn1UkHMHqyAfcnajPqz6SqTwbjF8HXAsZt1Cf37VRE7jgrWwoTvKocdnqjPaq94BWFYciLkdoRABv5Lqx16",
  "key12": "3j8UzTJpXVyW11o6zSiKcDHdxnhGWfD8P2jKWPDhEmmo8axpoXDnzXXZJMv9ieWW6GkFCP1aVBb8NzgjFhHypVBM",
  "key13": "eGhWvw1srWFCA6QaJLuofw7V5mLt62Tpaq3RmWga2cMubE2oYs45xHvJzjJkCE8bAghBNzguV9c9NYWtjGns1hu",
  "key14": "4PhQqe1Z2sDppUzeown42oGfYvmQ71KZrHZ5XkhPb4wCmArsn3zGPBZhNoTBPWi1jb7eR9icPM8w7oh3C2pKCKL7",
  "key15": "4BVanRrY3YFW3KgR9vWFD419TzqC9eK5hvU3k5mEs7ev1iponw9AuLgxz49tqd3xd7SMibTyvsXMXMrJEUDmVCFh",
  "key16": "5TmCoaEWFoU6FdJYAiHdEoeioGTS24KLCQCpFTgo8mbpBRXfe2yqGGoHtBwseVrn2SXC1sfj6qow8XkEVSMhoD7o",
  "key17": "2TRU7pMh8GJDxvwn81x1NJ1KYQ88Fv5bgfRj2Er14ug92urcybaGGc5Tb3XEAhx1PAxgo9cBQjvbYxypmfyyUbpR",
  "key18": "8oG77BbpJSf2jT4PpXhwWp4Ja6QJpFSaVWJ77NXKivfRMhXxn4RkCjU5uLDvXF2H3q8q7V7V8SA6esa9mfiGqus",
  "key19": "4wCrGPjdCMkX8AKXeMH38t6JUtTKeGBRGRDtk6hmah85FQ65E61txUHTj4ghW6w1RsDavVU6FBL1iRcg34noxrUp",
  "key20": "61c7tcJMoNVQxLyEUc82vVpwhm2UT4PrUJuTVw8iJTEibw7JEiGDsodD2LZUkPxXMVaBRVkJenj42T4Bv2VMmBnt",
  "key21": "4RaVwcMq9oNjBpnV4C9Y1EkxTdDFgj65cDC9qqCCGjrsUiMXpV5uVLaHss1DvazEi1uA1TE1ogGs5E9dmJxM5kDZ",
  "key22": "4ptVa1jMVgJExGqBCEwGC94DNwg5duK6Ddbse37resHhyxaZ5sfhNUbjR7VCwxRvzUHX4EAtPavhuEfULD7nP3Q9",
  "key23": "4Jy2kiig4P1EsKz4NdoHaFkxTA9E8t18eJPdf2PsnSvNHt3RaZ5pZDncA8CGJHY66bNnwLXdEPe4dMfGVspLZHYr",
  "key24": "2qWwc8TszWdH154HnE4CEDEYQxLZS6Ux8KfawyvxQJkqyR17cj8XqMhVJT7Agw4ghjCKeUekxQ58S7beqkv7XNAw",
  "key25": "5zCydXpbMpSMmFmaXgkHSnJkYTeZAzztpkrDE85D8oTvzCvHcskiqAWx93bz9naLpZrRR4MTFAJD9ebSyBzQ89Sq",
  "key26": "5atzazgetdP3JjeTgKiCAokseg2cdxaBbJa4ot54z1em7EeW6gxuxfNRo5j8T53qv5YWPMJH9GGKs1eaDP8N6hda",
  "key27": "5ZqZALj3jWBYC35CjpNWNEXwnzs8KHNe3bWYBs6yqUb1ZmXwVYTaXan4FNUJoZczFxhpRd6AbTwZmzU9fGRfQsuB",
  "key28": "4QCwz9pNTEADo9nUaVPmgip3FCXQy3vEqmSbAJjEQRYjTGLceKzUYQgmB9KZ5LDZnRxhP157wSeJ1But25tBH9f4",
  "key29": "3UCKiUeKiy6AugcRiG9MjpRLMTGwnzKt6ju3s58UNQVf7DhGDuzyPrSeP3DtNUcPt8iYzGQHNyzr8BKUrq3LNgCF",
  "key30": "3grYPCrjw4ZX66JNCnv7QTsyHdFiXDZgYFipdBN1uhgG8ebyRpUjd12tmuE42gGpWHpv1xEy2WVdSUPE73CL12rD",
  "key31": "5NyvD4jEC61gKb47BhKUYsmCWakzrmb9hW6FCBucuVHF5YkEgcwdmB4AFK38XAGVUtwTeU4ZJH6nY184EnJ3B6HX"
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
