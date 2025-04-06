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
    "FNshc8xM3edTsA4W4LReEzxTFWxDJ9fUaZq2WAkZMG8PyKwEh2Mbg1UoB6Los8kZeh9GnzT2YMc4yZbHXrBvzu4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2orvGnz2s5FmRaWZgUAYFpxKGpVNLvf9kebUei2bzYeMMYKbiuJ644y5jbTH1pJ21TXHnNDCpg8S6JRHYre1fpLk",
  "key1": "3U2WUprCzHFkJVQeE8ifieRd72csAhpq4aXbDUNCkY6H3ziFZ1v3TvukpkgT7S3LG5rGZzEPUqSeau2B4gT2vmJU",
  "key2": "2Xh8dGJoB5FVZokXoRDhRTo5SaHoF8n4jBGsAwxPkZHfieuh1A1XZnXUnZvrkMqAp46KTE2pxPZ73v9hND9VQj3u",
  "key3": "6R6raczzkwhSv9PREkBtxN9husqhoBpDJCB2KmyDLJXwPXejCV4ZdB2vRKmTCfMNSB3ac4TkFRN3rFhjBTFpryY",
  "key4": "2fTJhH7EKz1PAC7bYq6cbR9UGPLzcfT1aNUm7dJCwSpPr4Fm6Lp4Q3yfyD687dnXtCauTqmwVCmVP1g9rZuBJHt1",
  "key5": "BSKXNCj4JvnXY8TJKUctF5FETzWW9CEvoxbB8o9rPQiucZdERUsxeP1CitXvK6vRrMxee7WCstm8Qmmdc8rPZAS",
  "key6": "5F1ViMqQ1EYYXcrrvMYCnre61AfEzaxzeazmDrBy6x1i7i1x1xMxrxxZvtSg3dWDaNse8X1cE7gYojP3cHeJu9kp",
  "key7": "59ad4KgQv1VYsGL6vEPYSEJnUimyEDGev9nokTSs2mn8UiwmZTVGXttKCQJKvNeUqzXkZhm9K3NmdiKM7UnWGxgp",
  "key8": "4ctwJShQivmzpAw437DFxQVBTx9CJt3Q4riVZ7PtYcDDbxP8mFRAM32cHkM2rWX1RfPB1TGoWzQGqBDAha6jjZLq",
  "key9": "67iNvB198akQRPZ627rjsdx9QgRPEhEJyYH8Gp4ePjZaTn6g1MDNVPSfQ2bkyzbF5t1hBQkuVgLzNGCFUUDPv8mu",
  "key10": "4cLuCyQYN9yTUJDtGvJvB6pDDHoS8FKigRoERjr1G3qGUBi83QDVJuwtinXzMYVfArQcR1KLanwTED6a6ggSdGQZ",
  "key11": "4TwnnKhXKkBvAquJLVRGomWGEPePT9byhwWcN6HwSEiJZ5Jyc4ndpj34xtGfMF5mV61VnbD6RKGkY6R9fd8jAgRu",
  "key12": "4eG9Qx2SifqH3m7gPXJHxFgQHWbuHSWbUtZoGBPR2ZNScYibDm4M9kBo3jzPbethCNTcLAksycDAbR8M1XFoiveA",
  "key13": "2WwguWLGWc8SLRroFP9nBG9cSAuTHLE3V4CN2TSWZw3t2H3dbEwwXywpEf15Gj2GCNDVZ1uD8WsMd8EArS4buzAg",
  "key14": "3339SS6Ld29tbzeDan6QRtWRnQWKpT26dHMye5pt9mRPEECUQ6xcdThnqoE1X1mPLiGe4uhFYZSeKBX3rbUb6rGw",
  "key15": "W8u8hYuP8S9FDr57pjBGRbzpr2MPUS7QdVTaATCGsowE2q6gRo17y3JGHrZmTHdkV61a8C3XbvKRe7SHrbPAyaG",
  "key16": "2k43R4Bo5oyz2zNgMLjUu88CJ6NPPCD4pJ1Zp2vHNazquqJV6BR5CYS7DPVLWS9xMHD11A8fNLrqvEmSQAi5pQ3f",
  "key17": "5Vz7q9HdMKRexcxby9YCbvrxPNkKT4YoNuXUCyKXNEbemzQGkDA3XGN9MRYHAtUJh8mBz5j2HeRGXpAhDkGVSJgp",
  "key18": "3wS8Esz9umcT4JsL7f2Q2DY6firs9ceBhxhGs9bPXH6TCv322tuqCqxCEg8NfF5Vp3e6PXo2Y48nYfdZGaTonbPi",
  "key19": "46uzBv3HwqUVKZ1bKt4WbP7pr3pBKUYkyrP7R8fvXMHY2bicU7BiDCjz3PgRK7kuxjmrHdUyeAGA54sBbtBN4z9f",
  "key20": "HxCSCxoAYm2fHCxmhhD6a2kas23gVjZowFytNPxnuL2VUQoo7ZTmXpaX7vda8W6UVoQmpKa9E1iCRQhXBNQERUD",
  "key21": "67LsrqNdt3UHeKbcDvebe42tN21E91ow46WYx5XDrPVxFSzuF5WJnW7aZsDEDu46VqaeSEfjAs9oJu1K4rVwD5SE",
  "key22": "2mcAw24hCPCLj7SfMmA13e9LffEV7h2b1G9feoTBnsAejqaTfopB14h3CgmiG17KLvZQYY7KtzJhsZAqMGwijuJ7",
  "key23": "3o4dRXgwxTBwi3R2JApdddws3GJheXQsTxCqwfsZQbm9MC6qCNgSciVnJGCRsVh5yBeMHUMsXNJ97ezzYxirrDsw",
  "key24": "233qEmQwNpUJSaiv5TZRaaYqvP6SFk2hitBjTENp82KyMbMbzA4tnuN1BumYtkZrMQUrr6ktWJZ5qqTP5Q3MYcP7",
  "key25": "3s4LnKXtzU2P1XiUuKc5VPvyr7x986qHLg2tyPdgV1M4KDgWGfQgMFSQBRhMBzkvvpZZFp2gC4ZyxrcguYAHeS11",
  "key26": "5hC6EtJmVmYsEVGkb9LgBXFNrrmYQ2HZo8JEh76eRx98uCqh6534cQB6h9TMFoxF8XFzxifH9yuxnkKTkTyXu27e",
  "key27": "FJDQkBHrSHQpoDsjPV6dphvyS3iwx9iyeoyhwBFtRVWK53DAnf3wH5fPtxRxmPZKeQQdwphBGXQAe44qLDttzkR",
  "key28": "2gjkfYBFdctSwVjX6PnW6K65VNwUWrQraLHF3cWWXNoNY4GTcAdmwMYYwkR2TRqK1R9fV8FxF2XgPHNVyFnGkBy1",
  "key29": "3VQMRpMKLZ6iBUDBxh38pbXquHKJ9yf3XWAP4oivTKsyVmTPUukQosXZcmARPrf2htGfDLw4Za134Vz4wpDk9rrA"
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
