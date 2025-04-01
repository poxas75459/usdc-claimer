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
    "45WcqdKyTDNxwZ4KeF8kmU7LEpppjwjEGyGJdwg4rd2N6jN1RrkaExLv3b3fwnwnKJdCQDp3QSkUxLRY9WNwedJG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VsDGQRmmbDq4d74GDtu5MUQcZcNE2oEAmux4SpmRvzVDMxvxi1vzHBAy6aFHu2279xPmtRVkxsRiCVgU1xPx9a1",
  "key1": "36UbqHPuzeLExPy5YoQDgPxsSMdmoQqAuz5DmwxdFkW6EG1ifPMkARARZN8BKKm2gszWXDnAannsLwTuB7kTo6nx",
  "key2": "4KkYPHnGbQLDR1YSdEPc9aiG49wDLX3RMTppuJdTJsykEep3oHUW1DGpun82H1eazPAWqEfJwZP2WisWUcKFdnhf",
  "key3": "2VMtKE4WZ2zsxAVpY9kuqrC1MuHs38qcmTEd4A2gFtECgNAFBXKzDa73s3HcPgAChTYe64nV13f5Ytvu6h9sg85s",
  "key4": "5TzouJuujWFAWFAvJWw1stJpdBZbcqaQzdCsBK5NwL3EhhHZsugLL2dzCQ6njfVagUsb5fB8moM2U6QmzEe3iusS",
  "key5": "5fXM9jFDh8uDdsJpwFvHLukr4YKWAFUTUJ5qRioxaQhXorEfMdkCPPuUnfrZs8SuUmAyKP7H5Ys5QxqefjS9zUSq",
  "key6": "23kQDxn1gDKcNrH5P26v3GqHHqc7NQJvJuzhssFMfgVJF1DZ1WzgoAncwMYz3QdopF2bchY2eznLhoL7n3rhbbDx",
  "key7": "2NgbbcSskPeSoKdTu19B13GyZpY9hkKnwzdVfWNB16GCaLkpnM2ihfH6jh3cX4P4HtfxTz6utr1u8gcnGVYE54Np",
  "key8": "53Cf64bHpzwKNhptqqahFP8gxyZxfksMymdxZaHP8CBWi3MBqr8MpnPdnnPtPgAP2BDLRdcSmNJ5dPD1gPT22BM3",
  "key9": "3ffH7k8ay8N4go4fQoYYbxMdcBACTnPc4zRncmU88BatNztuZmdzZTakuCvWGTYQ3EJPzFk2PMa1BuTV9NL9wjpY",
  "key10": "3mqM2QZ3wM3UMApzqVFFm4L8DUqD3bwx9g5bffHMCVnoq3Vgezj31rapbucMkPH675PXvzNgW13b195G4Ht1tAoi",
  "key11": "5AotQLUp3wihkBdkUxSwyG6iwixGfrYpQSeZcRwPCu1eMiLLLQgTxydCv6vpoMhuvRec5PxbjcD1PWMPhgcJb7Dx",
  "key12": "5EzAvBNUY41mJjA62wxVTJ6LvwL7w5cMEVuCDhaNEcQHo9cRkMnRV2nDzWWRSDWQs2czbfonVHL8SBSJqCywUygS",
  "key13": "2q8QZHGwXCN3uTmD4mnFjCUDz2RAeeaR53QU7cRfdk2qJkAMAYdu3giRsxCqYV3KW9SzBZFCvGZKh9PigAAnZhT",
  "key14": "4HvXoN8V1Kt8ybQcEf9ootP1vjrXpktvkAmFhZS3jPGDADZemMpicMf527Be3FGpWBup4a6nM5bBvbnhL2jkU5C",
  "key15": "49vAgNw7awiXJ4ctQaxysbHoKWM8mGzt24wAmCNtdgZVAd4R1gupfXXE4pimVQVVNMKUK8HSH5ffvdvwxYqKLREg",
  "key16": "2f42SaikMULmP669nbKFNF5SA4pY7oxfVbVWiU5Q3v8NcrNS2BhU9GEqsJZzBZXKy5oNaWwoBKkTkqzyfLbn7NDk",
  "key17": "okrM3AEvyr3bsymbQKqjPPkkAhCzhFcHhFFvNNJByMDpXua88rg9vGBj8RHgbTHzAhbUzEbR1QvdcvPHYEgbnMQ",
  "key18": "3qCC6tozD8C8XvhC1CX1NrxMcYeUMjF2zUSnKVgY2VpUX5ZSC71Mz9zP7eRKd639BRWHtQy8asmXF5vpmEJj8fw1",
  "key19": "3zkARAMWHtXwzkKYVXrESzPNm12TjX2Wu7AmroBqbKDenT4pN7eUqho6cMMN9Vyd4CyyPp8GYnhXknDpjNhAWugr",
  "key20": "2GeLwHRuE7qfXTofWsFX6r5U3JSMTaPRXwU8EZ8YE8Axc4NCLsTeq9j8dVo7fstHvX8W9rehUQd84mHiLNrzm1k2",
  "key21": "45JUa8GSpfN1KNwnwW5KubAZWtUq17BnxkDmaRE6neNxDzZyBBiy3nY7jiFjgPJ2zoAiHtVJuh579fy8rYRizQbW",
  "key22": "64rY92dttg1jWXN1tbpQkeigeAH4aqXep34qbuFBVZBRt9DfpJa7iADk6NyxxJ5kmwsdQmKmGFzd1rRqnXNCWzvW",
  "key23": "4siHBdPGiMSrMxdPFVYmzngeKNN791dGtJL5v4UfJF7AWAp4HFPLn69QAobxzcrS3yb4RMF3sofurdihCwkWGRwJ",
  "key24": "5NtAbYfiRnBL7uB7CYkrkWLSFcdVJczPvH1T9AJGNE7kfXsrFeGCay6HJ9iHUc4u2VcVpikzjeyPVxrP37EKyXam",
  "key25": "65Uvz8g3hSdnoE82fqhchp7vcqEtKb58th3W9qydAywYPzXhreMsTEJtdX7EnzinfNTyJwvu3nSDDi7CVAB5cXWS",
  "key26": "4neQMeWxKeU7oyZ1Qjrswk7vZYKiZEfwwum8njcF3JqBQHxNNw8KahQnW6L8bZrmk9Na6UthZZdn5adjrLZJfo1m",
  "key27": "4B3gMz1wUcYiULvvDeNeHzQuL1kECt5FM3GgkxvzdLJccPzt5ZDt3ddSnGQgxEZAS7DpBNX5vvbiH3pJhhvB9LtZ",
  "key28": "rDDcD4XwasqP4hM4y8eqnGG3SmoCqxHtCowKNec4iwef5KXdDBepdAbL95S1bM1Jdy7PYFZN4fHDB8KoPqxpdrm"
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
