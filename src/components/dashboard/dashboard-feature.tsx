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
    "4HwHUUr1mtPcV8EdQJbfWJcocFBoCG6SMjWsJtjjhdGjbTonkdc7AUYbFz3VT4udRRmDyeES9bK2qHyTEfUWW6Jr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N8UdLENzbDcquQWxMuviKLX1iM6HknzaP3ngksjjHreqsZR9Vpb9KMgWedR3qQ2iRd2MHn7wZGRFgyDeeJQM7Xs",
  "key1": "4GNcu7K6sSznbR9p9UVRDrbBKUjpUzi4YF2yjRQteLuLgm8YpmWojXKVoUqVPLLvoovmeyyfpzzdy7QfeC3Mf5bU",
  "key2": "ENXhT7yG5nQAMjzPg2SK9Pb5timDja7Bz23UFp9pBkNCmF11c57RZQrN71XiZXbD5gzthfGv95pL2kdG9F5K2JL",
  "key3": "4CCCx34ASxCbdhGCbqYLV5Mcf4TVdvvqqrMqz1XvjiHQ6y9HnjE3DdcJqE9j7Nn1PVmRE8i7jSLwqAcfkkCjkWqB",
  "key4": "2UFyLWJk1fGtVPNwUFKd8c4LoTaf599P2i8HnQyAhCXpHRX3v7DiJyVLtMqJwt4SFG2SfDrQZQCCzEXPmW4YVoTM",
  "key5": "2ZFKKUZRdBKQfksVnwt9vqUqXBoB5yDyb4PKEG4sw2SzbiQyD9oP75pbc8scZrgAspM6p58W2b1PoukSw9TUTLv8",
  "key6": "25UbQDQFVPPX9unCRC4R9iYpmuiLuEhb9GDVypZ6m4gghEtwFomWsY9SACPZfYhKJUiguztm6Taydj9n41nf6vcm",
  "key7": "qXasSYntoFuusMCMdA6sKNrLZBcvvPevEq4DaPEh2DMKvSorTt9Ai43eoRcpJhfCkoTYzcSxFDJVwtSDLhvF85m",
  "key8": "2abkjtMjfRPvhBAVL2sM49JcrpbGv56uYue3Cu6cq6DJ98dP8AyaiZQHrCci2sxqTAWhbnLZpHRAxgdigBk3g937",
  "key9": "5DMTCS6kQh624rFpMC55b9kvJSPUZucU5z6Q6ZxYmGwJARo2deAKE2h9Whec1r9PMkuxGee1NN1HoiS16Lhk2dSX",
  "key10": "2JiFPnwSt99utjj2RbvbwL1qE96vYznhYbbww7iPaA272BSomTDDasgxm9RkpkgBch9DZSFC7i5MPwMUJZs6CJc2",
  "key11": "qFKsSLCvk5mnZoWipV2uQLEqZzw62abZMrDX5v91CX3imr6JsinL4245pL2Jgfqhz3BaMwDKQ16TAc2D35vsbk1",
  "key12": "2iRATmDu2kxqP23PE3iePWTMNTpB5tGXQwGDU8S2oUfwn9PV3QxGvjHxeFSWD32SsPgdEDJwRD9LEAopPdtNSdKo",
  "key13": "24cqSYmcdcGZ87viZVcREe2JnnhQMUh9BdWYXbW4ZoGgeuikPhyX2qb9c4fFwKfvvjieM8D2fgDBJ9vt2JPY1Lgf",
  "key14": "opepYC4sWF8VpRAa8HNuJ1NKnZ9xgftdAy9XuNBkiUhXtS3F88iUUkgju1AtQiFH9RvaGeBHGanPkQH7wvUrbdr",
  "key15": "2beDD8yNSAc74oNFwatsXPhGZnHsSweC6RUCyLQqWvapseRLMG2jjMQVvm3jNCzkg92EeRoAxK1Nrv8hVbD6yXvB",
  "key16": "4VRnz2zKyCa5u7Y9Ld9vWcu2tVAiWEBvnG54odsKsov3Tbiw6NWCKbtpnDtxPByNiKVvXxtxjSyhz6Y9PCG1QdME",
  "key17": "34oL19kh7bqRWA33f5mQsHa64rv8VTwTUjJ9GbWs8j8joMiwhFxgk7aqqgiVTDmGF1T6svuyEiPuesUi9sLWytNA",
  "key18": "bMm5nCFv3F1AxVYMHvH94nZTNC25rtkU2BUWdVK5nFMSUWQpWqwx8jPR67MDtp9ZMY2fMZ11PBngPvw33iZ9DMi",
  "key19": "3etxCZdqnLaj47n8MUtiGkpZssV1FRoMAeZxjjkAsuX4MJnKDUNz65vste92ibJ8i3diyw1N3qhQDyQnxayyNi83",
  "key20": "3A9FrFJGNJYUFxsVgUnzm7ALJoiY9PfYi9i5ciwVAv5KPTVoSUZ5ZhAJKxQkwkeCky6vfqZWg7eDF7jtCCBFJGH",
  "key21": "54qYKyvP2RX8SrpfTdWN67xsF4kzGCfrph1HBXYyWJRkH2mD6CRMrEx53CoxGNoRvHFQyG51GPjNAn9Md58Ex9vq",
  "key22": "pu7XugUoxQrUCRhSvVcWpxDTApyEH2PqRPiQtJXStA62BdUP4z9ZKDTh8nyjzJzUxKgPRaPjW3Ufrh4WurXjQnc",
  "key23": "PfzwmyHXj5Bvxi5g2u8qVYXV36LRsgHEvpVDMRakwNxKvKj8muMExocUGhXpVe37SQwT14rGYKVJ6f9X85aVDi8",
  "key24": "4pT1k6dHtXvCcgUKWGR6GmYf53eGjzpoAH9RSKJV2hYsN9AKzGGiwL17f5iQmEJPvT3k1UnDKasY4wv93vb86G7K",
  "key25": "3MNSWsELr4p1GJk4TqCbKc6YCxacrHsaJ2VrZ2CFijLYuBZrQ3QkwjA5XKCXmCd9FUwcPyqCXcByxd3z5UySTEgJ",
  "key26": "3dqBvLUzbvVchGxJwpFs2H4NYs3igkQYk2F6kE3sMG984DPCZMXdkutrvxgmuxN4KBRpgwEULmVUbeaTQDLhUhZ9",
  "key27": "3LLykVJAFRz6ipCuoZJfTdVL9nKToWfu6LbpCgVRjW1ZpbiZcuZqhDKTttT8DtpH5BNFKrJtgqXm8xZxUXvUUS7U",
  "key28": "5rq6e4qzUDvU4h2pTunzEc9qKEN416cwgWhYzbMjFs7VE3YECfRpERYRxuPuPhikNKvA6K9ppCcdxP6kpMZuzPSX"
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
