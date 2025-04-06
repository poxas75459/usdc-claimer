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
    "2VgUVnEzGkxEk2BJxDVdfXDFh8FQxRezdEfyUJw9WRhRGkcJmVwx94UnyrzEif3cnALpJFcCXGJHeBeqYz83ifSM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jt8p9ZTyKasZSymzQjb3n1Sddmd8TqzaUayztzLtM5JU8raWv3KZiePtv2AtiSCBjMkqPJic9gGKgbjeTnHyHXo",
  "key1": "3m2T8Y6FRbmLQykrkuYabgAXQqpX7RFcfAjxx2v4E6bVfW4HscUNWRuwutGE9VvLSc9qovDUpD6VT74d1JZHVK3T",
  "key2": "2Kibjwwo1pk3wosTWfgz7DSAkV6JugS9mQpZT1sZcGNnc5ZoSQv81ZPAPjU597nLxbxMrD5X5LYTQRD2izcv9nHE",
  "key3": "2meCN7RYxEDJTPB8yKLnYuYHgiZoQp922DZEYdqQ3ScbruSH2SUpYzDL94NvgvzrvCG6ZunMw7bTA5QLoFhCAT5s",
  "key4": "5PJZXeXfLQMAX1WbK81PZPLFUcF22dANWFPP1uBqpmxj3gdTvg5jgJ6KjLxLAjmwF3e7JtwMKTZvMKQKJG84y5iF",
  "key5": "3pc6hh7uUiPF3h55VPJWs1eGqkdc77oUF8KubjRfcorqZX9wC2zrb1vtUN5p9Pj2KaNgA8od9RxFBuXM5yAK1fQu",
  "key6": "7qbtA6PER486owoBMGcKUhvEHX9fwxPcszrhb8LMmE4kh42cHEUqF9trycuv8NsxXPB8jUxCUC1jrn7AvvjmvWb",
  "key7": "3o3nN2osv4MLYxPsDDLP31GuAWjXRURARbU3cveHSrSjp1zsBD3c735nQag2vXSVjB9anL3RM8mSiPhsyLvL8yPK",
  "key8": "e8F8WUZPvyzPRP8Dd57LEntehW4MUa2SZ5f7ytBcg5FkWQUo8sXDtMT6fwUC9jsPJ62NNHxeXhJmXze5rUcKwfp",
  "key9": "72Kn7hs1epocnQxp7Z4HqP4ehyqLeAcwUJkUYfKyE8VipeWwxvdRti86ZGtz3yaX3TdUNyhSa7X4xBaJCkaPsGg",
  "key10": "2LxkRf9ZSfkuYZz21LzTZZjSPktvrxU6bjePSByUc79nvtuRTty93jMCLBEJHQi1KcdWhNx7kRLd21YRxJKg692i",
  "key11": "5ukcD1GjUDjGDg5eHAXd2Js7Dz8uhyoTxkywfyCHQAHTzkbJxxsTv1jKvRZHw3RC4679JCfDeJfvMZW4d56618W7",
  "key12": "5Hh84fwZUKMR9Ps1ihSvrEwb2HQgBNEaVbKXxBweF6ojWzqhrdqDhzZA4KJzcCBrYyv715yWeNs8tzHuLMXAFoUp",
  "key13": "5xUDakbVnWgp9CzQysKuFnnZpktj7Zx2Cr8p43UF2cYmDmN1VG66gy4R9Hk1NujSxqEqFaLjkJnr18oQn1eTNpC9",
  "key14": "2RnJdKjA68Ht7YtkYFw9R2V4PuupEYSQDT1A2Z4FbbRhrkX4BZYEaAoYWpjU9Vdvk8wFityrDdsMUVnU3u25ciwP",
  "key15": "5A9PXBx4dG58PApBDrZ5JfC1wA8Fi44BDN1KeB9WJdMuaCyunm3SSvgoRhPVXnU2FLSFTkecGzHDbxxE4pBZxVGQ",
  "key16": "31W4mHwViWaahmzPLGYEAS8m27RtT5iZ2NgJQzSerBcd2nTw5hqYVwJp5vWeJ5tccpuNzVhpiVeGrz6Z5QPQh4WC",
  "key17": "hcn1B7fD1doX6nKE4oxaDk5dmUkfFdGXZgSFwsJBiPKbafGFVqsFARL45R3NVRji7xTJjxEEfexjSGvvGS7LBKS",
  "key18": "2g9MFSPHnKoCo3KJtTH3ztogHAT2krwJ7o1DWt6tFS4LdMfugYhpA464poJk7T8gdegCN47w7sRTXmVL1fE3Xoq7",
  "key19": "65GNw7VohqQ1jJN7cXo78yktk2q9uAARjp9xyhbvjwKUZWjynoVgZ4LQoW8FGUY98yC5aNDRNUi8XHYjLUbEWdLY",
  "key20": "2k6tDjUVtAsWLChEkeSTaPUqdiBooHzciFaH2v61kzFNNvsHKhcQnoH4ZjYu4CsY5kxiYbMsM8ToR9mKVtVkTXtM",
  "key21": "4rLwbobtwtWwzskB7JsVs4ZQEkeWgpdFJnH5YLgXdxPP72oCxvj1vhhGLJwoMt6jrCRSAsningjDZCVtdW6NHoCX",
  "key22": "25vE7mw8RCcGHj9ENKw8q6HcePvSCC1WHNVXcbSDj4zXqgG8mx9mgd7wZbo3rLcKQ3AtPDPaXaE3zG7PRgntGBnT",
  "key23": "2cpbsyLgxSKGD5a3fhwaWjX9Yc1RfDJG4UmZHstKutyfDbvD5AduVPtzvDwH614vB6XYkwoPM8Jt47StxjXTprQw",
  "key24": "33pQXrsQgXS1meCDuTVJAZ5ZnQPAMSSyxMkcuTsPGzL8vf5wRne21KEkV3MeRFotE5FK7wsLSwBx3kqQUuB5cJBv",
  "key25": "48jpGKrrRHTRqmix33FRJhKd8nt62SU6LqCejGqENaFkCWtkhsJHahPc5Zvu9Pyobg8ud7EGg1W36u28QCqctu2V",
  "key26": "2CEpQmiySoQtoP4DQv8qnFFoYNFiAqcqcUYasDy3zxiX4XoCZgxwWEKVwTRsykwjWjPDfR1ceNxTMTnTeonfHkMd",
  "key27": "23FYzasoeECLZAqySt1p6NvzXYJZYe3RjY8msaTX7PgtB8AF7JC25NYF6udRE1rAtpdREXYWyYoPogKBfPKGRgGQ",
  "key28": "4WU7WQTXrw5cKLRmjtBQBjPPRpsxZtQyrz9YQRuZZWPcVbwT7LP8byooj9CrDKzeRUZ9kX2Mx64578MoC92StUbp",
  "key29": "4crTMTjy2py12nqAXyePL6rPjDCGXFne8Xtk2wtshCGgwQYqw4WuvV71QeGaHWvTmGdBVyLh79VHKGCsSim9wpQs",
  "key30": "678ExvJJUasakZa3tjCBM3vvjn3QarLrTwkUMP2kUVHLPQ7qjw5uAxGu1K5fFvyoVQmVkH9PNYuWPLPWGei1UKdk",
  "key31": "43VzVVnyrsPEKDCs3CcEF2UKmH9KkYrwy6Aigg1s2pX5REKwmSaR18WEkFBkqbt5jFbgZRV2rePQVauDvosMGW9W",
  "key32": "38nkU9NrTQxG7cGWdSBoTbVu56dTeizBQ3fQ71VKdUG4nwKWJMhueUxHbZFtjvtiWvyPRDNK2VRJnbrYSU7Ma6hA",
  "key33": "R2E72knVFRGNPntndZAeVPTbs946EyykZziTncJgB7brHNfCkvb9UmfHPLHwLt8EdT1vUd7K2i3PceMyzcMCKPu",
  "key34": "5dzg2RxePNsrHcaLnmJFC6dLSsDgsht8fWgRYf2twtLuHak8q7eKUGSYT6e1JgeUgPFGbnps8XFqJNSVm4jGCaEp",
  "key35": "2P7AoAfayKc4QLcg8udDankrPATPKRxdDiVd3wNUT3mT6aXVjXmWFgWpf8acNQHfPJZD1575UJP6C6JAFvqQAvqc",
  "key36": "3bvJ3RSF4DUrAMHUuZYxJ2Xo2hppN4x2GkY2BdfAJzprV1UormFzQ35h7hKSVnRjGcafJpEgDQzvRE2p9vS56Smw"
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
