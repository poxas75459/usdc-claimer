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
    "5g6eo9Ve1Bh4EgaxBXJSHft6ycfh7ZAttYYKM4jkZR61iDMq84UL5R7SS1NqzvdVX8Xm5wM4g6vLmC3geL8Aqft8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3y8R9nMinwjmh83rc5aEEB2EQhxVydrTAw4h1qHrZamqP7jWU7TyCcbpfgPPN9JAV5HkC4FTDEjHHWR8U4xWhpHh",
  "key1": "2KFzWJ9m4HFaXb6pTX73oJEP76kZ4kohwJzYeppe8ghA6jkBkDkBD3mV96ycaJQYPjaDgWW6RH9jhHu3QRpS4M3S",
  "key2": "2DLgbpnw8u2CCEBWzJYnSVejv7bU2Kuv2LRDByxZsWJqCno3T5B2JkSDJMwaBiaTtNx3HwjNmj5JDjWMvzWQ11UM",
  "key3": "3dXpLQAEhAPEsdz4fHXKzoTLS7BG8UkQpbuWiHmzD8DhtN7VcUv458N9a72tqVTEYNNRi3ErmhKPBJdEFzvnDaB8",
  "key4": "2xUrgB3NBLBzkKbTx6vTpU92zXLu74nXbg9rmqjrCDsJqLEMLc2Gs5k4KoHUgfDyr5B1Z9WnDrhBiKTiGtCf9bjb",
  "key5": "64fF1EXhRn8aCQejbo1xBip2XcT7rDmTtZLnXLSP4dmvRbW57EMVHa8pBUrGpP8so3LxJVE4EkHsR7L9hn98ytKD",
  "key6": "4T6XBFZDTpCE8xHK6exD8fKas5Qvha1zSX3NhkL75pUJX7UmGdQBKosSPumEJq1v6WFyfYHV2KDnXobjW3UtjaY3",
  "key7": "5dPt546oNAvSbi76mVU7u8bFJBcLytKpns1PpXHfTE9AhuQWcisbySTL8MMz3r4Frdmy7MR4p4RTBweE26j3KaWr",
  "key8": "QvnNEmHdkwX4E2mmSVSy3oDEAk7iNztJn1SXotdrHipXixvi4PA2oBXztnt4YNGmUWNhsvjtSAWRrxXmK45sdDz",
  "key9": "3VTS31i98qRHDUE9ZwqsLah2iMnULyC66m2Ev8GvXa8uNzU7TMJ2Rsi8KxFpHenh7KWzAzek4xinN8FdaUnwSeeg",
  "key10": "2dTSGusdbE6yRdmFjkPe6eo5WsTgZEdTJCZQCBpGCJ5kWZacwuZiGXFcscgdNHJUMhAqwXdap6HBBiSwgkSh942K",
  "key11": "4S1vbxq3NNg3hkATmy5XFvArN6nV444nCvrdYnZDrjnWF2bmpdbDnyareG3pp1fXtmbTH8wihW3Jctqtxau2i6og",
  "key12": "3Rewffu8vAZErB7KiNJNvAQL9Dt2nPZVCm9M9n1NuUSPXB4NfX1mDHYyU9cWAQiqtRwHiPA7XEKAd7BvbyFKzUxo",
  "key13": "3orBgNDM1YRiExm4RmkKm7PrTTeE3qWGLpu16y1fQ6V56msnv4HvMQ2YSydUE1bLv2ZhanPsQPJASnHvUDvNgTgQ",
  "key14": "3KyRnTMBGd7QySWH5AYWAs1h2AF69M19mNPGHAJrGB62BGdcXa7C7b2eSfEhC2QSYM4VBywcsn53T3Tm2tXGXLXp",
  "key15": "2QJ1Jdf3b7oZD4c1m4dABccpLuPkCaQURiuYfsXHehYDdrhTgfryTb2zoQLeVrw4kHjbMmA2HCWFT8in2WHVne5C",
  "key16": "4qSFNKQQXJ8rTi2eSyaamnysTSjbnfe3zShF2zkyHFibjCUts5XStnVG2Nq1Sg22YpCg41iggmPHSqA8acPmQ1VQ",
  "key17": "33re35JTbddfdqH6yo2TXH1Wi1qfHZF72Aevuf6WgciZfJGJG7CTqirRLvoHACwqg8eCvekC5RmWt2QAienyfv17",
  "key18": "5yknjrCPjyyTc6XDzAuKQiaKJ3DhUkE7bQQ5XxCnwJqBgwmFMWNtMb8tuUmbfrF4Wrv2D1hbsYq6GLRcLvPyG5sF",
  "key19": "UHYcsCsFmWuiXfgVLkngeMPDjqNJ9hK4HQVtig2i7ZjbAhJmbbFm1tq6A1RUYuno2srSh2aJ2nmuWRWZ8Pg64tM",
  "key20": "CSWx8HBSEz7UtH8MDee1whG4mwdwwru8g595UfWkVhfHC4nuHhWKuBZtTU7cZm8c18s8WntjiiNf3PqbELMRW7P",
  "key21": "3bxnLAmbtqYhZaYqb8pzppxRwpRXQmZmXNz18tKX2yqRobu72ZeqkGB49vdV1YWMzsZfFjRMXeyvh5Bx7xE4xiRE",
  "key22": "5vZGmzhsE8zwBT3V5Nf1pKQDBvhd8ZNNTWjVbgVhUzRtmADyBJvgbTbqtW2bh536QjnKEoXVEkoRuAy8GYBkQ89u",
  "key23": "4YPwot6XXcGB3kciadShnSH9wg4qdip1uwAzbCHLdXfiVY2NPLtmgWHiTCnJc36KrXqUSXvjcQpbTeFBbeDFDJA4",
  "key24": "2J18FJNWbpgd4VmDYoKm8avdftfmxuMXPVdxGbnt9okiUnjA9nMziX99cxeYzbeZGJpySopjP9J4pwyP9XzfvMXf",
  "key25": "55CUo7s8G96VnXsHtUFEQWXnu2k6VLBbv1ARttFfSi2MX4tY4Kjet17coWrmampsDKg4tSSbxfpL9Lw8SwzoDyre",
  "key26": "3d9BPbzjxJrGToLZzBHy755oGnHwyuaCWFTodnPH9GKgy17EQmrBF4B9aeGZ7HRAKByX7g1PkCFycZTvuLRHeKL4",
  "key27": "36jy2feTKNnCtrm3eQUxdeiYURJhxZphP9krZfcrQSjtbUVuGmCnbASFW8iFMaw2GuTEbdJSwE7oyybitpMPHQyK",
  "key28": "3nRUteinMysEBFyzoDMpQdxpnUey1nPLUXsaFma65KVH6sAvT93JCjon1n9UYYkxuv7VzSBeD9YLEG18ioekcBY3",
  "key29": "2iACLJNvhkyutw5vHaJV4e57Pe6hYMfi1ttcvcaNkqU7wNJwJeCNrgokd21CR3xStRkkARgTfHrDqijxCcjbHvLQ",
  "key30": "2dskihYPvkAeRNEKsy9vKNBXjubVoJsDvjMhBUqfrjfAeksYsA46ubhWTejjwn28mTeiAtxR3XdbeqCPEoxJTM9e",
  "key31": "4aosryWTJxqobse8PSa4jcZKB5Y4PV7gtYTErTjkzcvrcsBKX9FZ8m1GLpYZVmxCBFyDf7jNdqCBRqbTinM7Jnjj",
  "key32": "5RSSnzgNrTkWt7WmcaxdLriaMgXWoaghkbX7S6piTLne67KSACtyyV6yHiytmwLKWHgAfZDQCrVMiGf6JYR19QC1",
  "key33": "65X4S3iq2RP9yc7Whsz2o6CrqDbstUs8fGEpVMTiSmLc4SQTXT1aFZyVijsoyjCCZZPYg549eDJDT8CSgUJeTt8u",
  "key34": "oRSaoUthi1z9LsgyT6zkimsaGnfpymHKcPM8xHjWzMG2EwjCPBLtUpzDPRXxQsJVkcETizPSQFkcjUieTcL1we5",
  "key35": "3TrafVsNwwLDaFhSTFUeaB4XWCscgKQbctyG5CEQZggxQr35PqezsnuP87nZo4Ax9PdVe73hCp4211i58H7n2oQH",
  "key36": "iXruyWaHczkguqm6tdkRCL52MpfXii7SyqnrQZRe8c3DZqML7apQZh8rdFvQA6oY7hZ91UsZgYjvds385M6U2CX",
  "key37": "2At2iPZCosUdnLkcuhseHRKKf8dgiYQw9hadxWLCa19jTracbgj4DDJoKm7cnHXom8w1JaskpNjJ8GtTTfhzY8tY",
  "key38": "5GrzHEMHf78hgbAX1ABmToEqULASjmDSeAUhR8N2MRZ2BmzURAY2scpHDCdfEk3DmfBc4C3ieT1V5KpKqmgk5xxd",
  "key39": "4eAcFH9FdrN7sPuY1fbDVhXPNj565s1R1naZ9cCG2ANV1A3PwGdKVqYo8VUzxcwyoQgnosGmad3sqYK3poLwBvy7",
  "key40": "2NW5h7VswXs9pSFiM2hovZ7Mp7ihkZUnzHW6JfZkiUKTM7WgTeub7Tb2S2azreSxN8otgTuFWHKvpQEBzrHC1ohS",
  "key41": "3Eko43ru2kuuyrbnfPpnDuQmeKbkPB7ZJSxxL2BF6jEJGHBqxVQq4TBqdfQ2CHYiRDJBd7Qm5fj3VmtJri9SVGjH",
  "key42": "2Nen41bbsg92YZshLKuXuVm68PTpCTU9LapLfGpGeG7sw3fyGcN2wtNwCW3PMKY3VGz9z6bxtmc8xg7cSi8cDfAT",
  "key43": "nvgT346PofYgtqhKp5jAFDJHQ73e9fVdpPLv5xqauxVvX57NtnaNVgZoVhxXvSPfCrpJV6Bs6ghDWbm4DgLCM3b",
  "key44": "3uGiP7A6KuSJkjpKSVdTxXs75Arh7ECGC54ymo8wzYgeAjvbyFaDJEMzQFSZ7e2v6wYkFDcL2zB38rfcDrjHU6Mw"
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
