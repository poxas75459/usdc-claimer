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
    "3JqgeEAph64r87Wi4PKgcQWsWTC8Fe5bZafj87qzJuyeMuXW3yB5iHufHh7Syw2XBLPbNyjrQuGMmzrU21T5rm6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KbZ4i47g4kMg3X9yRD4cRKN3iThA94mKYKPJVf2djRbn8gQ5SF8FE8teFBbpeopKs78BY5jChNpLkBj9SpJpdHj",
  "key1": "2799F9kKFw1muaLhvnvgPCy13jm3fxfUfioGQ7eAsW62DA2uVR42Kzgp5rTeCg3P1J9iGLmCFo5W3DfRoysRtzgy",
  "key2": "5jQkr8rnCbTVz3a1JVotf9U4cBF3RL2nVRACkhV4Z4ffFwarSQUPxM5UESpWcjFwYHWocAwrN198dCFQS8XNbkg9",
  "key3": "3PomEEvxYcVZJHcCKbUPfVU3466ANtM9byPd2vXp8YmTvj1aNdMsJKCqpeJnsMPGUY5mEt8MZMjMRZoeyBMUo1zd",
  "key4": "XUSJtD28CeRMJBdzALNEfzEsZNaZsaCYRqv48TvnRiKrQURdo7fo7iuzzREttwHCy5zCAcM2xF7nsh7oBo4e14J",
  "key5": "3vkzp3RA8PXvhCUkgttTKhJjkXoJV6hm7bZwxdTfPEWNchawN8oCHTN2pe8JqbYmR5mkTmhBub6BWts3XLKDC3Gw",
  "key6": "2uFouwBoxpFsXbe2pmiBdUK9BVaLqBrKvrN1yoQCUntZ5oYM22dDB75c1WboKWZ6n1TeqmAWTnhgJusU2ndvkuZZ",
  "key7": "4Lb37ciEsUnB3FRivQFYy8kfPryDGnKMYgLRnT16Mt1rDQXf7qStjjwD7R4iENp5vXRTN6Ae9ua7YNqss9Ha7xxq",
  "key8": "YJRGGpbMWsnbe6N1fpmtRzEuF84qdfNC1choFCY8G4a49iqu2oHTaVjX3YXsf4TCibBrSnyMaJopi3nHvcKefAa",
  "key9": "p7TWhNd2eqKSGKif9wdNxjzrBBWU39QHvS5Fuq3ED3Z4G23yP7g8Ani2CNTkjzN3jBrqocLUw4LpvYRcJe9SQFJ",
  "key10": "2SP9dpppmqByPp6t9SxihdjkRLcDZUDfc3YFKFfSbaVRxJZtD9Bgyg8GjSkes6uWtH6anycT5BxhnX31R4we5vUe",
  "key11": "5ejYBaSx77tDxnRtSTMd9R25waeTjxUhEsCghNRxNS5rUi2GrJSLQZ3sZD352De8VzezmwSkHTChQgB2EjN6wkmT",
  "key12": "4W7ncnTSCZE9S5TXH8AxMUwYXRGFnxtUej7E33Km5ZahnH3tw9wC8nbDN6eoHDkqWaFNvgGjAFbrpJtQfbc3euTd",
  "key13": "3DVQCgfZTJ4eU6NkzyPpfdyzHfVvWdskRhs3RW3UpApr3exzevnzvo4T5Bw5ZqxvSNYcxYk9kqW6wheZd8EzBJas",
  "key14": "4JVDQEU7YhwTEgoUyRLehKssANpfnEfGpa471iRrVjknnfy74G7vHmX2b6NK4Fd9UC92s6YdpLEkiRSmXnDdjcmV",
  "key15": "3zWMWTQyZ3C19ayd5ah6jzWHhGdJfQpSiXqiFeQR7CNsG8osm1qj5bAy6492Q2tPu8KmhNT6Av2gsmkbTgqYRQfU",
  "key16": "63epwjWChxxCBoWR1FN6R4njzEPYRHJdVokUQgvBvcJ7ehftzV4pDM5HeJtP3MGJKkdoU2VbTGwA3EtFmXYpMsyY",
  "key17": "4Um2WKq6NhufvZUS4pTkz6eBtBBRkueK5XQJrWzLCPzVPZ87rhHh97Ki8cosAMtJjsDWjeXQsgJkCyovsknpAvPG",
  "key18": "461NGfgb3bCgWCrVfHCcMbVcQNUVmHdcAjYaJaneMvAgZGj8v3KGBApHr9erxVSFuWQUfM7syrXW36TAUgabic8W",
  "key19": "432dt9M4UcWPR16m1Eyr7SpK4ASPv3tQLY1y8btPvTg2jwmmGqphPBC2NZgKoFkckdJ94wWwwFfMkAhrMbsvJWwd",
  "key20": "2fsHcFgvzQ7msACDD1PXknkyDPtLD1kidooAaWpQB7Uz7sjCDokgXRAn9eyWvTbJNa32GFN2BK4wYeboXq45GmbK",
  "key21": "63uo2BkewxHoZ7bwS4zoyHfv7xKGFm4jxfUsAP9mhBDAao3QrNmapXn3fgbog8Q2T4MTCWCQAoVJsLbcdsmfuYg1",
  "key22": "4FqfskPAN3qoA6e4wjmYqcHc2AxtRKeavQB7mW5JiT9jspuc2PNb9h2z3UswTyHJSmTfDUXj7regCeMz1SQAaMft",
  "key23": "5wwWUMoPvddHvwwjmQgDei2NA3hwQC9Wp9FbewpWRnADvrETpFipFAxxm3yEz1zbvNSiaLpPydjHZs3DCDVQgczt",
  "key24": "6591unyLEp7LrsWCoTcy1Ki7Tmzwa2yFVpTbmh588eTGgbXa181GvitFTgt85FTBytciN9jmH4KoRjgMe2NB8GSX",
  "key25": "4Kc2d47yjqdj4oRsrx2FPCtLqDKbgHNCdRrHwwHSSNRxnaeyBT9ripiLj6qUSZLHhCCJdZtkytBSNbzoYLTJPejp",
  "key26": "4ifyzE2zG9x4AB9R1JWPCPb2w6Txkc3GNJGXzaeGF9WmyTWGEJCqSoZ78PNuZ5CH6J3hSLxaeLhidG3nHpKgJ3CV",
  "key27": "3u7Q3qNycLw7jyCNia5g72nMwNBvQDHxmix5ZxR7j5zH9F3un4JVQJjEHVz7CmECJZqA47iihJG9Tzc5oevgSrU7",
  "key28": "AhuDq7aTPMvLcTQbg1x3E91qhvXsZdb9GpCGBScxurB3ppkfLyzvHcVmGwWbvx9mURwT3i2Sbbr1PDmWajY1pML",
  "key29": "62iZx3x11h9Yp6mp3FTkmLoLwanmSGHirqWHPMSHsbuRwF2G97dNCxD179bgtcPTQKthNLGKpDkfTeRcM5PHQn8d"
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
