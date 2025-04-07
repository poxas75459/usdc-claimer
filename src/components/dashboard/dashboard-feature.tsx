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
    "FoTtiG4THcup8DSe7L9gorsdXqcbktkjU51kPAMiS6gKyKQmzMyurXEqaU9ejBrXWJsbPvPRToVZtmYMUGFSHFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DCM8DRMq8N9tdg1hcJ7Un3LdZnBvjc5QjS4fDsDxPg1vZ8W9KZ52ddng8wBiSfRBH4tMHGJpXyx9P2AEsaz3ALo",
  "key1": "5oZMHFtUjPe4e2DJZLhRvPgfHA1UPhhAKakGj6G4WcFQp24CgXRZ2EcEzQqwvWTrqLkXmdnqLb1iiqvZ5TRphwVM",
  "key2": "jjsdpw1SS83ZzHy97pHpDUy81MPGr1kqe62km7HjaLBtcrZWxV68S6qVjhhKNNJRzdhjGgRouZqvphHZk914Dfm",
  "key3": "4Wmgy1FDmQQ8RabYLrxETSCKvkDPntewgjHGNN4boKECg1bgGULTFJ2gN1pjyCh2THBaMvpBEuYQuZ4uyyhSFtPQ",
  "key4": "4CkMTwvPTV283SuG1UKbhzekhQkqnbdjRzCs3MHMiFQhSVdaVV3D5UePLj3fESkb4J1GAopJxXebqzx7qBZkmVbR",
  "key5": "5RavXEVWpZVw77ij31Q7hXkKbwi1i5ZFab7AaMnTqHb7NdmVecZK6DEguSdeKTtynAhRHL9QVk6oY9pbHEhyJsEf",
  "key6": "8P1SmoGtqw5Y7oL8kKPnjUgEvgp4EBqHQSJBDvFTdEXU2caUXKtSqQvPZdKyYzFVDXCQBVQ9GGAHBWY7sP9eHMX",
  "key7": "2CsJLMqJ1b8MfbriLntY95gSuXzws2fwUUmxmUHx2R7VYxLA8NP6a9cEsBRziH3YmWfZvdCyfkQEiNDmGARwQJy7",
  "key8": "4PrMRvLzfZ29HDAPvpXRAuR7s6HwjgyjZseKVL9vffopp25pQpGdvPxgkLeXwFJ9nrPnZzvVW5veULTbYn2vU7h5",
  "key9": "34aLVv9i4BZvDUQQ51XeYjbioxdZYbY8Yath2KdfW6rMcfxA1nyyz83CdAfutHndg76dqFD2eCwGVp6NUt1wzZTB",
  "key10": "3gjYM3ay3da344VyN51XvfLMUQCrLTCzycB4ihHTBHGaACTdyi4WbHNaGair3XtAE84WvxFCGkeQsdXApHWTPMX8",
  "key11": "3or7uhaN43RVoGjjq3jMhDjPwZEC1oibRF3Z1Wy3eqqPQHsJMBEnfLUQd7Zwcxd1ezPJ5F64fRpEAFFFLMNhkDsk",
  "key12": "b5dQnh6X1XK4eAgPDmTMJyGFcxanKt8vfyF9r8NH9PPxHWJXHn8i9W13KgdRv7ybffdHuLE46PA8N5cD9DGZybE",
  "key13": "4dXKhdWeCnJwypmLSYaqTX59EDzauyPicWoyupSn3W1JNEDd5XJVbtugP3EfaSNc9PmjG9DdfKijXhj6vEsx1hzm",
  "key14": "5gTHu8qPqU1W84dGJazj76DNA5bJme676sGZouZjwhKJDo1ignNRdDUuJtv7vHNpGXi7AyyqQS2kfjKexcUjZdnE",
  "key15": "499TRzecjCzWfTGNphopA8i2dRL4mgDwcNuqdRrPnbvWgTKZxyzD7qAToc4URoaHBSBtifbtVh7PfpdsDNtPnVLF",
  "key16": "62Bnto9WNvkwfir2tjZaDvkj5pyfkRpBmdPM7mGcLyDa5XVtWjH4bpDWpgzmMh4QGeiKJabS8Wz1atdaMM3p42Bn",
  "key17": "U2LJmtbM37fEWJfZAnsfZAZT67Jkw4wu5rC14zMSAJCCXah4bUHSDpfiyFFtxQwBbwMMpBZyqw5KQphZuv46mbs",
  "key18": "LyXDZRZNgtdkzQzaZDemTsrmPkjDYa4RWd5usqCmwoxs33iBRddSdx2aT1LYkhxdNF1RmQBZMMv49GZEPsUTd77",
  "key19": "2pfKZX8wtijzi2n5Fk7Eq5c5Mhukti7GZf8qmb1WWkktvD7MTvPWkenAf6D26ocLRSGtHHko3qhNLafJMfHf6Eiy",
  "key20": "3bUeRMq3RMRQCx7aPt6geL4QTToBmPSmRBkqVcJfwoF8xDsARpnouQAa4DSkgnS4Q26P3FNr7gPrF5u5Kuor1gpL",
  "key21": "5A83dVEPMf6hQ52U4AVzvRA5ZsukXZjd5FSSKz1ZNx8dtv1Scd5tuUD6jJCe4ELNyM9qs1NprwS1PkTasgvg8jGb",
  "key22": "4amguXyzpjfo4QuDZ9DYgavUt5TkN7Zujvw9afuK6ZkgJxL1VRYBD4N449fu6Q4avBeRq8sEmZAMHqYnWaGwNWnF",
  "key23": "5RKNGPVUPoLijAe5i6tE1yEJdSERQNB7VE82FhgUyKNgBwes9xDwscntDrWojaTGwoxXKpuxu8WZiS9K33QRuMx2",
  "key24": "vyrByCnaZ8o4HgSV41W8NFhKnGkNRyEQF59m6sZo4CoUqjNb1JSEdyMvESRm6vRFVzvCfnkvuZeUhbxmpbcqrvS",
  "key25": "3zuyRMZ616FLXFw1SGfVfEBGC5BfJFTGtymix3gTb4hBVcHKSnFWKFo9sdK7ZbCtf7GTHyvtLsds2d6ZkfFSGr96",
  "key26": "ev6AeVciCX4T1vj6bEfPYB4Len1fxEhnWiXgmeHagzWRVQfCE6WHnHTP3PsQxaEQ8HrLiWu12LownnnNcEwK694",
  "key27": "2vXBUWNXPkHWDXepd8N7SW774rUmxeeu1aEWLFLnPCFHkNxXdWEQk1KjVksCoBbVi6qEarAhFms5iMxnoEQa6xVM",
  "key28": "258BjCKkZcVaNXaLFPYgMnGMz2pn1JRi1jt96drs4x7h3c3DGumG3MfDUpQJEgJwahQyJr9jRvY1ZTmfAnobirvo",
  "key29": "5qjRHetFNSyZkzRwBWRXh6DhJk685tj5JRfHBtJ7KmvZEbtJrRfXa3J3BGz6Ye3xmmGbgLB6a54ZuXaG4ZpUnkf5",
  "key30": "3LhRLvQt4XxvHnbZJsbSYrvf4jmGPgS62xuBk1AFjxDbAs6ygi4KtTegzshoY8cwf958BNQU7iKfEM9NJYpioX2c",
  "key31": "4mMnfZCrVDCVZBdPRbfDLkbVxQYfrRzZRL62C8dvRPUi8NCuNBUn2v4mYvRxkFSogyMesaRrvYFNMzDK9XcbF8rr",
  "key32": "2YxiiJWBabF829ySxBabxuNMewqSTQ6va9WPaZkU9xzwNTmCxdizStQhkK9yq6ArL7sQycSpn7UvzMLzDTE7kXRk",
  "key33": "2f6b3eE58aDFf338bXvNzooQCPsEgp7yhRokkSjQEVyCYuMw3i424ju8pvkhLmJ2iWRb5MCigSd8dHJBw1o4AtSz",
  "key34": "5zuo3FdZtJ1ym8xarVZpQaVkLFYCff58dqVAu1xZQd8GEJJ3jtWdwReoqZraupDwW1cRvfxUbULhetiedjtiRDhM",
  "key35": "2wJVSWFMgjTqGjihwB8NLY7JcUJ8FbzvaNNK9bqHTqXdwYRW3poD5YwiH2V7XvVJMB7wNvQtSpCtQJXmGY6UFeLT",
  "key36": "sjznkNg3GofqcS8FG82Fb5GM57onSipidQp3wNTtNXB7EcuLpAvBynjY8r6SnmMBvXFicP4njJH9zQxCkEGkLRa",
  "key37": "4Q5yTRoaNCd8wMvXWmFp1YjD552TEvauYUmNSUsrKPQEJ6vYg6U1EwN6Wh2kDcBu23sWogctcAXWxt4bXzD5NiTS"
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
