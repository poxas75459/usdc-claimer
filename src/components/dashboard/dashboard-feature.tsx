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
    "58x7ouFJqsvrBbDezr4tWWvVnhpVhdp4bpPntZAdMevZWrugR77mF3jmy1vKLF37krjSfEhjAWkiX9pBgRHSzNsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4aXBmPHTiw5fSCQGG2swotq9CivcfLfiNEkqN7s1KaNH1htPhTXnSD7PvjiKQf2AALcCd5jaTT9pYarNYq51Lq5C",
  "key1": "Evb54qjyzH8RNbsXZ1P381PapcnKx9h2aaPa3zMee22Z9wFxp6gWirWKai6QqjAeWLyT5i7TP2rqaR5oyS15B3B",
  "key2": "3cV9u8E9koGTnjUhFQrtP58najaqzvkzW7ccyYjZeM9tVfXNcop6MRGYn5v4th3XQvNN7SEXufjSDXUdsWFSoM8",
  "key3": "3RJhrCnBMtPMvGkLwPjvsRrsRUi8Lp822aWDMryqqwTzkWuYDnYXf3yHewX8RHGXVDyBroW43dKQnzEGXc5mLYYf",
  "key4": "3qTdQPryskDzuYRfH6jQCB42og2xFW1peXsmQ6AR1Sw4meh9Eb9pWzDTFpQu1YvyVTMmBimEVn7pkZwRTJPXMLf5",
  "key5": "3vQ9eLHb5NsbCce3fcdAfYzWaE6DAreG7brJFXkXHkWbBZF7g8CujrcBRcHAndhmtjLa1kV3D3fLMR5U8S1daA9c",
  "key6": "3a5dpcgwsGn757oKaY2UJFx8CnabfKZcZxBBQsx7GSrRcDczKUcbTWdzQd4b7Ak713fxQbzJ6UUfWCA8KJ6hk6Mm",
  "key7": "5co7S4p9ek1z1DfAxYe6arD75vGejzAMz3Ehpw1ryvgCqZQ9PnMoVhf8d7p64qjJNbDu2vyH5UUtoo9apQ2RLsUY",
  "key8": "3q8neEXzqgP8hU5aTHXm917uEf77KHre54dz3omxR5ig8XjXv8Gvj9seeKzrzDGreez6PtKwQHwcRCY2LrCBn4q4",
  "key9": "2AuSgNwhm1SPbh2S4ZdvpCUHbmd5a6RNJpU9dy3B9n3hfh81sThuLE3dEEmyCxVJvGQvJJGQi4ox2m6ZE4xRCVB8",
  "key10": "2PPhqp5CnWe9Mn7L8yNaqC1dEA2m1woPQZ7eQemB8ga6BuojTW5DwGuktTB343tt6BMvcoPXoH9w8nS2dLHUNgfm",
  "key11": "4ECoEVxk6g1W5wcEf6dbc8wrxSJyX9E4MgFw9fKjXA6GBLZs4uZ7A6LgsMgMqc3A7ArksENswyVFPiHEvTttham8",
  "key12": "hjCCZnsBpRrud7SbwqD3aC3J6szA58TGHxdZRsd395udY9z3LAiLLFDYLx3iQj3N9bH4C562pFv6p8b4Gx7GyM5",
  "key13": "5ZqHLmYz1iUBHPseYDDciQCJK1ezPGKnr9yDpYCf4Wfkdctia2HQmoNmmLtn2CiDaQNT4gjWAg99PR474o3dF4Fh",
  "key14": "4s1pG1mL1F2uAZf8ZeiBUYx8vrkP6Q9PkGJWAcxxB8xNJhaC54kyG2RpqFD9CmdYHShEvyCoJvy1Z7UNSgFu8Wvy",
  "key15": "49vPUYrYYZZV3hSgNQXKy5u5LkQeqguK7pMbW8rwn1XJYYqXink9GyQj52PqWj6T8WjKxjG5VDCzfUHPysAW3caU",
  "key16": "4JuPGb5NkzzzsuTFZNSmtzmFpFEe7RnHC9NkmbAkHejm5FBUmaBBP7Xh97Z6RFWAqT1mzcv4hU3994WezpeCac3C",
  "key17": "3zEzFqvZvqEQV4KdRA3QF9L7ePZePVEJDZTW5BQ6uAbnXrPBbTpgYm4yswEYaL7QnqoztZi7aFUUjDxMyqW3fv9Y",
  "key18": "3EQ8btja1FZ4UeX3nR7zuCf2Rg7ttmLNFxU7MJZHyx6EJq88QKkmK2hTgJbgskoF8Uqq9N4ahVtMMieqHzWZQyaG",
  "key19": "5WrbicaoDNBvX52nCALBQrKk8Lg6Q3SkA743kbdmtkS1eihQYYPzgJXjbaSxBCDXzSwRwyGZDztL9QMtKUbEcPdW",
  "key20": "4hPNBgGX867BW6Qcf3rNiR5mDGyz8Duk7taLEGm79XxaPCqnQvgXedehdWy3Zd89jsVqsnVb92s7QJjAQkcvHbuP",
  "key21": "4recTycveShJtXNqMcvtBX9TTHZoNV7zgY3xM8sa4QYeJDBXyS9RZ4vb4J4UEh1rZH7y3RqEqyMbvWs424zJ2Xyt",
  "key22": "57AwgUgRgZb4CC2J6S47hijgM5AGfbXdaiWe3ApsBhVUbetBZU5BN6XZmqN56GG49wVV6xQrnpsk7bLKEAKNbFAv",
  "key23": "2HA34F7McezVEFQE2HwtJCx1c8xQJqhTXHTsbbNXRPWPyuWfb2B2R39QRW1hoTnBFSW3aK9XFemgSTk5xFKr1gQ3",
  "key24": "2k4Kh1RpH2nHp3ASp1jiA6wkzbrCT9yhsZ4AVEc2XzETU5hqhogeboTDRmRqPHSKAYWcV7zL62odYvb322jkExpP",
  "key25": "5yAiUvq5zNhNvdSoCHJf19k3ZKhhbwbh7fQ8Ko1tW5QpwQJuvdQXhFkmFfcfJemY6w5sHPCPeZdCS9fdCMwtTVF3",
  "key26": "CFiAXcxqmgpSe8GnLJARUcKZedMLFsW7S1nxezFfK33josh5SzJBfUvKJxWxP8rGXG7qccUkNKYyczynNtMie4k",
  "key27": "euBbxgyYY1jZp6WQNAGhhgrzmgT4FLVdW4wLsRech7xbBk5wBHDJT7cxffQF263uauDVqKYgsHxkoyAMT9HgefD",
  "key28": "2o95GASUqAkUKLuLU2AzpWyRwG9rf6Fs5tD3oenaDoYZXSARMC4YEYwHts5oJrxbPWVVgf6sduxFCFDuYzxMK35",
  "key29": "5kbKoBoKmYYnKEcEtfiefQxmMyM8MyWG4NGYkP8uz3dXFn8EGwFYG9AELqxBqhDUrDpG68cpcd3yGsjKBzkkchzf",
  "key30": "tNw8TofKRQpZGbrJAvrpJfM3mDmR1u2i7inQ489pKkw3G4CoL2CkjKPPDm38rjngPuNByGoThpe7DVXbHz34F8C"
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
