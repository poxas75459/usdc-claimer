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
    "F1u5N2cA9abAgygfPRiCEprEh6ESPWvR9GX1hGZvqi68Bdte7UkNyB584RRmPz78Wb538v4bm3Tjd6S2SbNEsNa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FW9duB5e2LBwVAF29R4DaNFnQ6sedCWsZ4qJ5s79q7FXdQwYZJmB1Bu7my9aVZND2QJsnMCCMAVKH9qXNZXTr99",
  "key1": "5eETXNUGsF47VJ8cDQrs6st7mRXmbJqhsZzyZ4q6SrdmAe7Et9ScEmbZxHzow49JhjLR47DL2A8GewswgqCRYV9t",
  "key2": "4gMpWkA7ocWpLWYsXRsZT7gGqoGRKt5hv7zik5KXKGJZykj9dRWzRRsxEbqVgsQD6AHD6aeBs4FRywuDD4SiYFp7",
  "key3": "3pEHTnCKCS7XzxBQ3qMZKdpQcPDQpQi52bhTG548Ee23iCBv8fR36BhDfWLPHn56huvtcnS71UbYpZtob7XWT4HB",
  "key4": "4TRtiGWKUTFSayzFchNWmpWkKXLpuWi9RXww8jG4qdWWaFdKKF2LXSkQfZKCb7pN77s9ymxXuJTh1zYK5PW4xy33",
  "key5": "7kBj2kKbjyJKH7SstWTQCpNWRVhk8QmrhdS6pCFzHBg44sZ8HutQkjNuFStw4rHggJ6EtweK6w3BJb4tzKparP1",
  "key6": "4fcGdsL14Zqrs1hFJu4FhDNWgjyEFcxzMBsJsVGUbcnyAB8zMta9KPwkvGaMZrxA5V7G1bFJ5KCvsvxVHd68rBpV",
  "key7": "2CC9pJiMEtcw7ARn6DjvfpNTtE8yU2A7MvxZopRvCDA9SMxKbUaXY6aDbmrisarHKa78hAY23Sm2sbvqxaDLZtRy",
  "key8": "32D1oLyiGTrUjqwUi2r74bqKyY3w6mS7ynAa9hwsuDx5sY7cwdPmZx7kHnLCb2CAKyEPDQ6qBFydFbR8gGBkAybw",
  "key9": "3uQAWFwzxnE7Z9rernrjzqMTr583ZGAgQR6NcTwuUmpnuNY9Y5iJYUYiNASvoxXGb2g5HYLusnCkSzqqZwr3TBsm",
  "key10": "4CpzhNYKtwkZaqM41gDbKWqHtDaobJfRRCaGbu3ESQsMhBdm6D7pbk6vBenvS7ku9BLXgxvMGhrJnJtUwSVqLMvm",
  "key11": "4qpYBNkjZJaFX2tgCindjoiKXRL8wexeRW1C1VyVFPkvBY5QJkUYQdVK7jE9kcWWyQTvzzZT5QdFuGgHCySJKQUg",
  "key12": "2FYpzwGYPo9AL7QuRRaRwyqDNGw9RYdsJk5WcZDXq339MBggkfHuVG35i5y7G8uuY5RbL9x6oZu1jmDvvbTiLnPD",
  "key13": "5QRr7eLoxRJ6cDZZn738STqz8GUwhyjb4Cfjey4tYGvcvP17kd6Uc6o31LW1ps9D8q6iPh9Fn8yHKm2uhzFE1Fnv",
  "key14": "5mUuTJcUjCnCfAa2SCdSRbzRYRBcjUCGFEPD2o6SK1TVigNxnpJ2hxSjrp2xAJ4EmbqPZ9tbi1Far78hGuYoRf3a",
  "key15": "4SAtZ7o4VktVCzuVijjqeLWhJ6e3L7L1ravUdbeznYXy86i6NCdTGR49fT6xtYLXeNEJ3EEE9BLEATGxx2Cuzub8",
  "key16": "3CdLaSdE9UnEgTtfGGJ9FRedCqtBGyf1iH2EKspy5Aj8SD5eyGKqscSVZaJE6FaerFYfDPKMMCSMzJ4zRgbyFtRQ",
  "key17": "Xcuc4xheARrDuxojJzEfNdosiFFDz7gaXGrbCuYH4kMbnKdeGZca53sw5ynETC5WwoJLxpUgQ4YWYLbsPgyzmBx",
  "key18": "4vPHJ32qHxmqeD3zTgcDhDSVnftsNSFBH1QwQcFgFYVFy2BxQ2kHMWCBLoDwdqcXbPXXL66hC2ppYTt5JqYsYqN8",
  "key19": "4GoqLkgqLwud7sCkcChfnto1kgprQj8wzBupaUZSecdqFvKAtBXWenuTWejbXCZ5s4RGCkywow7kN6Po5rqL1xao",
  "key20": "5YBnNRYq9Ghmso8BSrFWyJi3ZRAX4zco984nSdbKzWJ2QGchRaWQsWxfhckQrCHm8bvipaTAPPdedRK5FCYUhGXK",
  "key21": "5hv4CuCGvgY1vhqjBmVNkPq1kiiJG39aGyjfXhasSMRRaTeqsfzaVF2cuqJqwcmiwCT9os7F3J7ci8ZELwYuS5rJ",
  "key22": "5H8itcs9agbM15GxmV1dXUngCrLKNAqDBQV6KwH8RFHJdtKqJgxh7gbQsPqnBJmVyCY1cqiqGjiEfNdqjtQrR4zC",
  "key23": "4aRistjMoht51tACLU6k8sm5672r3HJhQCwX2sDNrDSmn4HXtYX9SzLB2kAmi63kyvFTZe2qGc9h9bAo3Tqbmsuu",
  "key24": "2ebcsrcrofKwhFYJNs3msNjeitS9rgx78JcZfANAGxbk9ZuhkW9ic3rybg2RbXLqekXQZj5Yw639FRP6Q1aagzyr",
  "key25": "4f1LPLkQVwqzrSWV1VYtK1TgCf6SSuTtPrUxtceMpgtp55km2dDer87FUdb4KsqvQSoApLCxTXdeuev6ZtUCEcSW",
  "key26": "4a2wVaGGmqb3VxEsaNiNQPAqr1mVP8xkxCKJ15UP5Ne5HCqdeZTqhjN5AzmDCTZWzEE2CNVEPcYDziAkquBXgmcK",
  "key27": "2oWnA4mnesMMmJncZqbBYacGEmmGM76jhz9r5qgqgNXAUB1oDND1GKXQfKtHZc8CANX9j64dGTDLpKpzzogT5uw3",
  "key28": "vF6qU4m5mXuPSvacxDULqPKE3PUoejUykExZ7nBdNmkf6LRGcXSF6iEDhxJ84ogugZhgESF1KNnWW1kVo34tZPh",
  "key29": "5tKhqWa4hzTPfn3dNHk63tMk2Pamruu8FrRDwikXUtqjAwbcrd43mouw1j32C4Xk9FtNDCwmW6uEmiPPriYbyLs5"
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
