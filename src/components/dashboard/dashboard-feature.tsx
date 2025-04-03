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
    "wXdNq9bgwnJbnUS1dW1zuET4c7mi8NevFaBJNZM7dPqojKUPPiSthX4v2fi63yZn8DfptUyqM8ehGE6WHyhWQ3J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HSvRuwQ6rY5gqQAWUc3JKoRK9AgcAJRhDuSENKUmwBFSb9d78Htpe9tbPhpxN2qbA1aSZTHrn5YpCPmMmZRDv31",
  "key1": "3UD3C9TmMghkJVa4ZTjLEL6rSse3aGvwdM1Acxdpi4R3r2rD5vqcxoHm3wpdLMwrPcR7gbhfhnjSZ2UJ6Z5SwNLw",
  "key2": "48SAudKZ2jCLKQbq7UovJUs9qTYHRr23YZXZARkJcnYgsfw4RrprYqsJ5Em1fPBG9ray6W5bh94fVpbAg9kZH4VK",
  "key3": "2hGcVQQRFK35zduGixrEG4od4Tceqt27sdAKCeNHFdFhYpNnRXY58SGzZsSGE52oKwcgTT6nbVQu72ub1KjXXb6t",
  "key4": "2bnaT2PqeBJX5b2apDzQdvpk4bmNAnAVskqrtQgxCwXTiVHWAGu91x4k2is5a2rSCrT8qEUJ7FVW6d7qbWcRUuk1",
  "key5": "3FZVUqJvGYvG32HFCM3Gjxan4koMmGfyvTvwpEt865LmArvxHumaCyHqjDR1Z7EdtB3ddhvXKPBqi1rZQb9DURBQ",
  "key6": "4VFSRDL63pfGVHVtEbMFw7ZgcJRc1fshRQa9D5qQf6yLG3WbVc4U2aLpoTk8jTRCAdvUN63vkJY6y7BdPPeRhyt7",
  "key7": "3UrhSdAcmKqMwF1GoLK3rvkkPssQKXfp9apFr2NJ3EnDSE26HBsf77Zce6xyZVyXLqipogLkApasaJg86JWPBmo7",
  "key8": "jXRtAVkWiizEakuYdvdEgodTWVMrFrA4sVkw2yLHosFmhiainTZwt1uTpLEtUzsvGgauzueEZFXZj2kCLuXvzwQ",
  "key9": "5sGiEU1H3ec7pNwpqqyC4fSZBX2RBGicSJxVKR4Th64ufKw5FZoagsvK9q63dgf8ykYeKjwz81DVEJHbQgaWZ4CZ",
  "key10": "sqHtExFpapp6wx1Luo9HAViwEDu11UGU3Dbxsv6h5ZZNgv8M9jfJznvsSmEYVP2KNe2cBVgmBdqQuAkfGrE3DGd",
  "key11": "26p3oyFGd1fozZ3Z95HgcsjSq3XSx4QTMypFNGDNapiHeqaMrxRKx9mvH7FSdHgyMcaZbdSD96awe1Pqa5kRVbPr",
  "key12": "2mgTgWnbv93RCkWDRPw1Y7FfpN2z7FWNDYz2R2T5uUPsjwEVcqSzsbEC7B9zVMkiN1bkFyN1MERccGPsCAdp3BqA",
  "key13": "2GhYpGDJxuTFsieY5LDYWxU9A4cVtAcwi4Rf43uZc1ujBVUjjnT9r4eGwSDZmFgwH1sobVYAoiwfR4a9jrYeJ1Wo",
  "key14": "2AgqVjtLcwsW6N2hGB9X6EaLrnTdshqC4s1BFg13vddQny6R5VzcbbQqSj8n1jHdq5y7SNFXddNFCnJ4cT2CBdcZ",
  "key15": "37kuDfLr8BpzLUSkezPHrAmeyNKkAyuLojm85qzS19R8EjS2xc92Sw9e4cJgu2VGAWrjXCYntTAcKB3CojHD78wi",
  "key16": "oJHgHZrcS3yvRr6HJN1KVQRjAXmQBUisXA5KtUuDs4kvp6EkTRf6Rb6oUcB8mmvybgsDusTjP1PStoLhdUzZn36",
  "key17": "xmkwdkcBScA7gwxhdKVMmxgzZbN32eK6ySPvSJvUw13hkyRYm3G6mkVMpEfL2xo8pyPGUVizrkKnWXxxqrNWSmB",
  "key18": "5K8h957tGGjWLFESnfSqcXBJX8qA7B8dBd456EiPm2EnTccPWr9e2Y7fYkNQpyDMvuFbgU2PBVBtCPAfK4pYniPp",
  "key19": "3YXdjD7kxoFKWpzt1JESbwzXZUrwBy2WCDTfZiHjzBJoRNttFRes7KLKrgZYTfPV4u4wkL51PgtVKQBJ3jVKUr9B",
  "key20": "2eFSvFGvezPDzjA7whKVnGTmpEapogZQSi4V2Wfg3jeTFJM4RBbXDJ8gCXQndpbmDpSXtvwEaJBDHTaB2MCDBCDF",
  "key21": "67BZqroezry93xg4P9K9MGxcLjJHvqD1oTCPbkt9VCMgteqP4nrtTPc4cq1Ga6VVVw8E6aWvjcDJHe6mbaCt7TTm",
  "key22": "g7tkF51VcRpFWhDBBNswLEj744kLa3PxW4x3ZYjT5p8S1yjw98RgYnvzR4PQ8wDE1hWdmSGjoFZs39qUBzLUbG2",
  "key23": "2DRJpaF8JeHUhxzFH5zhbDp6J6XVfBCkSWP7HumFUUQwniqKWPDZ4HRpAfggwWWDkpnqo59kfzPWRmfXG4RNxv9f",
  "key24": "43tjnxXk1WGBc6YE5MDH2rNGz4vSoJnKGDgozrtwNGpZQutA52gkNmKxxL8nPnnrait7fH3tGuacaC7BD6KXdKB4",
  "key25": "ynVEB6ZSc66HH6vWwbvQJRXZQcRuzajziDeLWQdbirPQsYH9qCwwmbdCq2DLoot9y6yR7L7Kt9dfkv2AZ6fRkRE",
  "key26": "pQn9rMekhx7zcWWeYmt7g4hL9CybNHJrh1E3b8ErRutQiA8nKJsDAaxbEYz76PzR1gV4esBR4ykZgAzR9voEigp",
  "key27": "3neP9fdugFzDRMELhJxg5KWYHwedNE9QcYjVxHYQUwMYf6psV4qwBTzRQBJGBtww7dnf88tksLNKfTXteiDqyuvX",
  "key28": "3N5FwmNzU9awrW4fhg8cdLR56xWNLqswNSTLVxREyqbJ3AV9Eie5mjMqLBSVLqzWnGs51oQPJvGxgrzqZUrpSDQe"
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
