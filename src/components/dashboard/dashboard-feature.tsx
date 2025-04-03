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
    "2mzvChqvQkEanyweyMqCNk9okZ7W3wmHNKxgPrMoGG5hNinPUk7sNRZsbtZihWJyrYKoUmkcfmDjJCy5yrcPLH5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3f3qJXCNoaEg7o6nAKnFbkip7FzwV1XktN8o317MajEsKHzizRGBJkUh27wU6JxRtL4ayUeLuyfrMqKGPKB7wBw9",
  "key1": "zsx9YY2kYB9Fssiv9wY7uFkEkQ4Tse8vnC8H2xw3Xt7mPuaCBSfD7CY6naAcxL8g6Cp5gH8N4WZN3RLRFRUy2ND",
  "key2": "3nkYgMZAy6DwMmKz6sM62pkV7H9gVEAwUtxWnogtKFAdhWv3dG748333Q2PLwgtajdhWU24fmpvpJwzywkYX8uQ8",
  "key3": "2VbTXRspanWC98v8QyiunVqBpvEJdZEZwZ76Fsx8nqG2tnsfnTuH77aWpevqqLT7oygHGXTvFcqMGQ7bQp98gpmE",
  "key4": "3vz2Hxf1a6ZnXzRSXcF8n6PbEVrATrmejj1mqrfRqfTjCKQM1JhxZU1EQHDH3bJbJjimSAwe3DwnwbXSXtPmwRP4",
  "key5": "4KuLgYfJDigU8Dst7jifnB21aP1Z3W16TRRS5xUFx2hpevw76hqKNuYqwzNdbNXTpXt5WpgQhAw52EyDwrVV4q4h",
  "key6": "54zihWVy1BTCRjV57W1BdHH33HUmcbvayxUGxejaiibRKzmgqsfWGZzgMbMPn5aHLLdiGdLqSQnAez8kw4qE242L",
  "key7": "3MWDT9xENQfKjBTd5KPHXzjoNBmqzGJbL2aq3cZT4uBiK21h2pFWQPGHZBWa12nZ5DnsCJ82co4VGgrdFSFHL2DB",
  "key8": "3V2vw1vTcEWf3vVHFQ5euj5YyyYAZQzHxw8Xok6UgTwMwSvG9w8QWjPpUCQf8D2KoKnhfhDrHhavqKz35jtSv6SC",
  "key9": "3a4Rk1J7iGA5vJwJ9V1dC5Qf3Tu6C7Bb8rWGGZ57HuxJDRvw4WUr1XnEjwW8x2HAxtt3ZYrvhWWf3N31YAFNoV44",
  "key10": "2JZ21qryNAKekMMBwrp38jgte3a8yFWk7p2q1AJMsijPYL5FHKNhmCqa8pSu8SS4hbmW8LJkzQkd2qypTKS1JuPb",
  "key11": "4WVqFJHPmhf57kXB3vdGRDbRH1vVFpHAntEuRq65bKbRnNJzGMWWAviqctQREua51sk2ud1xhfqnckTkBGbPY6S3",
  "key12": "3mrkgpqUHC9Pbt54kTcqZzPtPb7Bj8ACFcCWeCE9NXsSfh7RXbaMxEn3hUwAAXJYByTuhdmbw9kw5LveiocZfgYT",
  "key13": "5CDSbP7LSdcJDiYD5AT9xhaKnUe9x5o7atApoC6B3CyLfnkAwc7BH5XECByebwWXDdQSo5sYoWYw28JWvjPHZgjW",
  "key14": "3YFiC8GzVq3gwo7pVpwczbVgexkEXSvXF6r47QakxLQuzWsJP998fGC4wFtp9EtXrMG9KWiTdDpRbPJ3psSFeWaa",
  "key15": "5rUZSC5DWobY38Y15RHXCHcFXp5hEkFpYYDjA26qbcZT9J4jvqsJfQfViTeLMNTgmp1wKhxE9VNZiZdcir8Lnx2m",
  "key16": "5qQ73V3VMFWjRLnzZbu6Lj1Sh3e8YWdYWBw8N4aasWY9uhbPQX3hnytxDNspMPSbAaVZnHnu4cjHo9jEChV4w4D",
  "key17": "344MaWpdojBBcURjSoGncnrLUkVvHcqQrYcGuaiTwjgYpntXjp4rb6n28YrW3sAJWTyTchGJwmHsWSixbeafUkSS",
  "key18": "4v8tC6axitDXdBTiburJ5PBUQTc1aJfVboKBwX76nmJiQg5oHB5nZV3RB4WbL7WAFePJ2VjXwu9HExaaYP746BpH",
  "key19": "2NaaNxrvGXLrsUoPcymrowbD2tnXASWfUWVoXGAjA8HruRceFeJcNox392GAj8rf8AB955ycDamGyW2tHfFfeFWZ",
  "key20": "56oH8nG9K7zUDUZUX4ZmgdHMDweNB2JrpzHQnenB5om3kx7yrvE6ditenjUvGCq766C9x8YdMWEEikBowsCQHur7",
  "key21": "4UygDT1eZV4HbcCzQNBV2evE471C6iVq2mJ2GR9ruwpxSpNWHHmMk9NpBL9qxu6URaoXt5wgajFXNeoFd3rHpKSV",
  "key22": "JxqMick4aoCNKi6jyzu2BUuAtgJj4BP1bzuYmGPMmS4zhNvzW49FZ3t9vAsQzs9c2ei4i7k4pocQeXJ7dW8WmrY",
  "key23": "2FEKQi3xShaUatWKSnUW9XaMbXG1SausEySBhfFS9qYrNCMgb9iHd5zQ25KLL6Xx4WHSX2s8JddVJZzYz2JTkyrC",
  "key24": "2VerQZzG4WFBkse1T1G5p7uYhpmsA9fYNa8MqbzTR6DEb1DdPm7QSUgQyiNvozpQmy91SzrBRwV1fFyzpPDZdhps",
  "key25": "4QrNbeJUvt77ohWxeWRyFBTX5pBTfrCkFCoBokmMPBtPDkpoJbs38yu24ibBBcqotSBHeWZbEKrgwJeN9FLr8Bf9",
  "key26": "32UodziV4TKfrut9aAuk8p4igiDKkZAnyfeosZ7CuGX8SAvmVRQV5wttigWFoV1hmkYPRA7ngae57ctDGdvXzbDu"
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
