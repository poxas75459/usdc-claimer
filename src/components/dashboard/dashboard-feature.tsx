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
    "29twGLFZvecjKCWBct3KnnjGysiBfEEKgSwQr5R7pUo6W72beZdJC9VAmxX2dZmjztVDQYjcSETin8wKQZoKwndb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2o1MPCPyTiY2Wi4FYVJuKH6fqAw12MzfAk2j71BBfLup9fuGvKpFasQkav6oW35ifFhBbUu8uAtB6AfkjvHEBHay",
  "key1": "nfzChUUZfAG7mUQ8emWbi4RC8ujCAByzPQqNMSkPhL1GY7R7mtPchUUJRZC7XwVzjg35HtUo5P85HCs9SWfpdDS",
  "key2": "2JcH8fifU8uomCceX6RPwPSAn65L2o1vNVsr1ePVc5WAjhfR7WavxK6RGDzp8iudhWyBhNAY3C9z3PwiR8ToPq4C",
  "key3": "5dMKhz8WiEpWioowRavtS9kxhgQN8tobjaubreurjVTEhPJTBasiPLzhbrc6ko4ih72hE2eZi3V5sgJnznx3WS8H",
  "key4": "2hTujvSYtTmrsAGPtqMvkP9uessmfK2TW39epmmhd6Y3MsvdgD1DUtUMikJB8QCqNcuYXFa35Z6Kyo5KUrqDG2AD",
  "key5": "5mDLfDdT9zyxYadwNacdqNx1kNXyr9fg9bpT5VkyHsmH7CgRWynq1WrbJ8JYBUjvzf7zYF8A6T7wGGgrP4iuN4Tj",
  "key6": "64rQTWx3WEn6XpNdgCKjiRGi3BK7kBxFt2ZasB9Qs8Gxfe7dgXt4rcHwox3JpMfCLiFmCLopsdZ1B35sAbm9SJiD",
  "key7": "2dQ2NNMSCHh34SvWsQtC98bPeqQRBPYDHuRDgwDEewgu2a4L8EbY964qv4Mfp8EyoBRegvcJk7dU8HLqZ2i7eRpX",
  "key8": "2xbP8H6sjzHbuahFXTfCVNFKJ4Ri7vURSEq6GUvnwcPwPTHohxSzusRZy5VFfg2JJxSSZ4zi9kn49bo8JeCphCHZ",
  "key9": "5BJDPzmVNpEoHZRENdmcmDHXStMfPAJRxDjYyzNt79pDPkpNr6Fu4CuHP8mCc7c9Ld19yh3HumVRiksHxkArvz1v",
  "key10": "4fU7M9gMg7js5zF1m9zFEjHpGAsCz2zepyuH8wEUMjsU98rL9EjtUJsFqYkXoHozS3wD8KcVS9yv5ohYeAEqHDdj",
  "key11": "2kTSjuhDmxdZaBqiGZ6rpiymahK2TautjQYHhnXHowgsud4KpKK27DRd4dUbAhF7s9YUNZmGac3o61c2uE3UM9w2",
  "key12": "K5udcWx4BFLvV57haAUQCt8ZCWJNFBW4G2Wyd8UqJN9HNCJ4a3Nxw9ehet54GG4Fq7FmEGE1ztUxXWtdCDQizGF",
  "key13": "2YEKri352ZiP2GF76aKxiDZiH86fnq9is47nnFY58EqfLpPNYjcUXc26hdb3bxZdbgTdXQbo36gNuemEzTfvTbNa",
  "key14": "2N9LsUZEMac25pJu5rc7VmorA26SEgeYmWntQUZ3CRSMGYD15BdrGaSBe6C3GM9NcrJ3sXN3TUzdLN1aDZ1za1Q5",
  "key15": "2YUbLmV3th73TEbebBp3qRNxB56yFu1P9VJL2xCRQajFP7FngbaJvqWi7FdLML4KFNANHnq5g7R65bpE5rPVpUcs",
  "key16": "61EjjbbSNjVzNh5BsYPt9ws8b6xw9fb6VCE14o6399VzXrM9G12E5ErTLkSd9PL9GSitcNFRFyEduLZ9Z74jno1q",
  "key17": "2AMB4eiWBWA23SL1gy1Hk4veCQ91kpZTmZ2vdbkA8FsE1cPNABaPni8tmEDcL9kYK5Mtjev7ehGybYFnqXP8YzXx",
  "key18": "4UQfmEyy3yxuKHvfuX6irCc4H8Y4GsP38Y8TYUSbhpZVTDkcfnEoUdRenKfdveC7sSWNvzDs9obnsndMUaNvsii8",
  "key19": "2wFp71gtQdWLCxQEfdkraygM1w5VcqLSvgXo7EYvUgUnHFqvxQUSsJiYnAZQeHzA4EBnPgVs6tXRw7AALFZZxoXh",
  "key20": "2f6aPREXeCvtpUQsKvQYLMq58dsHoe3dwxjcVwBmpMKXTe7P5uA3Vg2xE59dTwmsdjqLydDr88bmPfnmqr7P96zk",
  "key21": "3uiSMK2me7fVUPnvAExn412Q2faxDfpZkWzn6WuNd8fU6vBEaVRTedvZuFg2U7GceHt2xCs1tDiaT8ke5GrXMU7F",
  "key22": "52Bvs1ogdHMXjpf32bRF8tuEmBwKmKwyqDNxbzpg1rKJoNZYfbHJ5oCLeMLiLtggBk8a4BfwEtA18vqhScvxQjmd",
  "key23": "4UdWvS3PCq1Ht24sxQ72BS2mCNqB8NCTSqp5nzbLo2wXFHFjr76TwqdyY8jp3FW6cczhUxhJ6m9jGmBZaJm7eFaD",
  "key24": "4e6Ceu1adnBkxpxExoNC2qpEWFRxHVQT6sCSwypC2u1a8iBkvA6RLvDVKju7A6sxb4BrCo131YsGxFyCMiLP6Tsu",
  "key25": "2KG8aT1aGZuCuMSceXxPS2KWkvnuQRdCy1kmyaXP2BpLerucHqjyfX1gcHA7C6uteQDFn6wmdkBJ4cQXTaYdUaCw"
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
