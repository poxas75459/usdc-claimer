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
    "5vRaMD2B5p6knkZR6in9J3Sb8NDuej4koDd5W2LBnDdV7yozGVXKW1diyvi1BGYAN1QkCpAf7enVpQ1pyjz53ETM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rG3TbgEeweUuNZFw85dotjzKC1anLR3QzU7wWpmYUR35CcKoKXrAY3DmE3iomFCkpHGGES1iLgFfwY1EY5ckUHh",
  "key1": "4xYVSjERiwf6jwth4hh3ynbR4MC8q1qD3b1YpNbPjarpWTWzd2vxZFwLLWb7f12RuYzC6YXbH5aatUgddtHF4CpP",
  "key2": "7ouZFL1nKo4f38E5CVLrKrAQKS58UthGLhyQnUkfximRkA97VvUPL3Dwe8kwJr33cPR7SF62gxBsh2H25jV9xCW",
  "key3": "2tTWnZiQLX322kU8LNDkciwiMg7kmw2gXnv1nWqaE38s4JnbWcfhCBhTED8FBK8bPf7UWxwNVS1MWfgYrLHMkCgY",
  "key4": "5JGz4bjByzPFmGFr2RgUa15i45tw1XpAd6hhWMwFS4GFaJ3EzGV8MiifHFTUqiqqeWzT2KwS1d9anGLA8mSnKVR7",
  "key5": "3UWtr7nvhXic2XYdGoguTuoamG7XWKphbjn8Sj8ogQqo8hR8byW55SQym7SJhTW2v6mRCr19LJi6HRMBaGUSVjBY",
  "key6": "3TY9q66iSN1SCccM4Hquv582DAjeJwV4nh3Whcu1Lkx234PgTA29GVPYZbt1BNs7E8w21ZkJzaac6MENDqCuMWeu",
  "key7": "5BDYDSwrpBghUmMpwDiyyCmifQuMgFNheRpy2yuTjY2ZMzmRvQzt8QWCGiDyefZwveoRRvNxaKsAqYPS1RncsyB5",
  "key8": "4mQ3bc2A8MSNcQR2aJHFgKkddaY7sqgUMbdzhzV7eEaj3VKi3SSYG5RfnAeyo3mrvQfCeAixb1kdbr7Uq5KVm79X",
  "key9": "4BEpktvCdXPXeyU998Qnn9JAQQSet7oNeVN3oTJF5rpHisHtxhvgjKyZWDzCT3DUbXfdJx2w3fyccgU973L5PuDm",
  "key10": "o7KgDzKvYeKK4vamYWfHNnf5mHBsm4fXhLJayCfQAs6EkAdM94SVTqJPnajRhqwL6MinuLw7sZ13PbacspzUP8t",
  "key11": "kSKp72mg1i4RB7mrk2mWsdSwnqKA36cnk8BNe4DZBUfMqsbo8fGVnPgNMu8a6zLWBMaiLMRsnv4i9Sj4bT2paS5",
  "key12": "4DFhEbsZ5dSA6MbbhcrrdrjtTVhN7QwGTUyDp49CDxC9xfRZjPks6j34t8FAPJbCHpD3PhBBj6nQVGr5p4kN2LuM",
  "key13": "5Kt2WeX976byj2hEAyFpF3TdhFmSBVFUqZLPgGUcnaiuA3TjPY4BHuYf1VFRE58QRwUmzQxfFtoJUh9ShN6b46M3",
  "key14": "3rRZz1xEkWJFaqs3kxHM7ta58FEzfvTGmrWQuscvb5PNYXNsusFsvMz8t3v3sXdkZuPnstXoBhAwUn9ZT12ZoEsJ",
  "key15": "4CXKPkqRULNLnb1rYeccpbUBTyyN78xCKkD2476g3Knsoen3gFUtuFtRMdpNpVRerZsSXhnd6psF1kT7VycLJAuw",
  "key16": "5KXYip5gVhZrxUpxmN9EkJztmCVYoLnVvWeoSPE5VA414dAqmFrXKFcJVYyrAxTF1sQ9goUAkfrNebyWxpYMNkw7",
  "key17": "56PpAk8VVBmQYQGJ7GWf5kQXnoW1sBgMP3aJvmwWECp6ymv8MiR6SxCkuPaukLFVrRNJESN3neiBADzuv2f4wGXR",
  "key18": "3X6jg8iU5rHUtxMYboVLXXp8HUxGd1fFTQCSKt8zo3vSUqaBCp8oV17anKpCUjDyBsfNweq4xAzyNDDC3Dun6cTa",
  "key19": "5GZh2DoFf9PWjDDEbxG8g8civhynMGo8zpha26ErWLbSiBT1L9n2bcXJpQeZ5ToNaSmRTHpi1fiBY6xPAQmuXjN2",
  "key20": "E73mHq7YyvSBSYW7yCP2mRSjZXttSugKsojed5VyPs5byX6sfNBBJdhJzXyno3LY6USprt8LFagxPGw7rZscJLh",
  "key21": "2MLj7okdciPKojPNrNBcht4pdJu2nmrmHWywrW6N2UhAZqnQD3yeUe8MJfP2yo6WGWhcZpLHPPjAqG6rxbbyMUfe",
  "key22": "66JGsdh5qp62YdJ1MGrbigAxRcQNba7VDvDaJiK1EK5cHt8hUFj7qFE1jSibNSHnaSuGDztmSeFdJcjKMZAn2L3s",
  "key23": "2Ldmu4YAfcEJv6Yu1JUoRDBTkaA4bskHzkvpPm8vZ22kuWFVLAoroeA7wn9tiGnBsCVpUkTJVxQUJiewZsZBajD",
  "key24": "5XCz2xFLe8WHABBFb6nbVVSzmx29sDgraBNw5sjbMHszJuujXziZ6m7z32xiwWAzKbkiicjvrCqda84x9WroaoXs",
  "key25": "3mmYQeNzCgD5pNqXE5LXmEVH4b2c3T633TDaZZU3AgJ1iLkPXbbM36wCTFU6fLJwsso98LtoVN6cFskTFM2MdPbX",
  "key26": "43wufqtPgSjAyochZoT18sZ2hfGP5waXitgnX7dwgDK7HnE1XpjmCV3JCi14EX5nLhFEgt93bsCsmRVsfJoLvFxz",
  "key27": "uJieAKC6Vcvmwg3VUPsmT8P5E9AtgcCKipZbQmpF1WNyj6r2wFrT5cQzKn6YQdbApjbLS5xEH1ABiBHn49gozsW",
  "key28": "VaeJH3pLCTxGGwrTnH58TU8cpNc2gqvxq9Czx5g5TyB4d4o6J1h7uze17T5XUK7h8JG5PA9dmrq2xP2U2YBRTKv",
  "key29": "4TWK5oPAypZVMbMANryu5jdjJxcJEL2et1yDBwrUukzomLB3if5gPrGNhcYaFiomufvcrEoJ3h2BPeQsbvamcvXm",
  "key30": "3SNkRLKC3gqXg42jGxCG2qo79Qqsi8AupHDnfz4uDqBehRJkGS8vz3hoe9ANKZSXFMRDX8hzG1XYDFG7BLtYLxJm",
  "key31": "iNJ7JR3iucsUY1xpP7X7UkJsCX99dMA2HpsE7fcnQWkZPbip6F3DvYDKSYVWs2yNfzN8ghcrKPg6BFoWEqEFmGd"
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
