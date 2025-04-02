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
    "2TKznEGsc1gJ3xgPAFJgmgm7VqkKhMT5KK7VriQs5fEmNbNGQrVToeaHcBNWWcBUstQ6v1tfjno2HpXD6PnfeK9B"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NgzmAYbsU7cLU9MuNNH8y9YwjUXeFhY844ZpNZ7kiRLep5kJjJAUNXwPGFdz1XL2VwER5EgCP26mnDRu4MG6Vea",
  "key1": "3Mg7BbNf5jDmbNq6n65X2hs1a5gif6AmEEh3DWP9rqSNCiAHHHCXF78LFNZTFHhJXJVjTF2n6r2C2nnNhZiyE9MK",
  "key2": "Xur6prRhav9aSDbVVgrBwxLQX4QEHKQrHUbd1hDcc9VWjs2XzEkzyx2mM4aaN4kRHxpL2ti1egQ1nCBTojJv8dv",
  "key3": "2rsbk7pdRFqbxayEcaTQC4KURzgKHHgA4ok6kV3FvVcytqyjaYwxon6Qn9LXAAfDAJxB4tuSJP4o52XsdDo9GLpK",
  "key4": "29cAkNeWJDTRJmMST6q9GiwNfwQSAemYP4xgAA6WDZWGysoDRhq1fv4YdMuEBCNk65aTYg6kqMneUv9jxZbJfT4X",
  "key5": "3giJD8uHK9rLvUde42t841j493pENRx9hYkMkTjWJTuYT4aoTWb2A7V8GgBsbQLNgiHJrYtsLGMZQ4Nz7Z4hvc4x",
  "key6": "4AGonsaT4zR26ghbHz5QuWGmTA4FJWnZBkNbTtbGNg27ksuJ31446Gx6pnmgy4J2PzRmjkZPPy3DCiG3MT5UoHDG",
  "key7": "2wftE7xVnTfxC3TLzq9TQDvpzYiHZZeSRS9YgJqDp94beiZtwwWtP5ahyRYj3UK3CHAsEeGcZM2NWiXfnYcdecPa",
  "key8": "5n6vtmMjhLMxoRuDdCsovaHZKSvdMkjG2cSJsVQFNsW8WFjJNmX4iKEvp8KDLQDpi7jxEMJkBoB2BPC1r6eBAUmM",
  "key9": "5NsmTj8wGwEYGTApHTUm75cU29foxn8RBwRvqJ2J1e9jUEizgKwDSroAxPRzdU7chsRkFDV4soeFRttPRhHt9ybC",
  "key10": "5nFpBhCfGihQikEcfFATkbV8aypSbZvAUtRB6dees8fiN8KbPtM82wuzwNfdTjtRBwKkdgc8j8M3jx2boKcqtYjN",
  "key11": "5YYArcMACKcBbUFsQfWVPdFQfWrXryXZuXsw1NJZjBcQ741QFMj2bPjr4fSqgtcEaxEmref4DVhxShkiw959byje",
  "key12": "2r7hBfUYHTVqeJRAuZK1HgRcP4FwidrZYmM48nWuqE9C9nzhhwBvSXGBQKc4LQL4FtSqAdrVZgazW4qShhiNUC1Z",
  "key13": "2BTW4oCJfiQNUqZSj8Erq4tkFjM8JUAN2zajivWTLhwGGfDYZKPYJEK3nHAmbEDQbJLasYFfufpgZPGEw73dN9Px",
  "key14": "5xX9eJsRq3HERk4tC9tb1pdnUV7R2wGKYg6N2PcZmMpfSXR2Wy5MZYD7X7ye4z7FjHpdTgTQ8xTiDcHSHwpeWcXo",
  "key15": "1K4g28g4n1wfiHBQGsRB2tQqUnkAWPR97MhZdkkupUr1jgvonRmnA2NXD9exjmLXYnFR5AegDYr6EKHihsFaWsc",
  "key16": "3zDZG6Df3PygRVuVfzTjrSE5K9puekDWbAWti9DNWcsBEc32JLijwNtP5ASDAQ9p2KZsBfZAeYWswtctkybzPttH",
  "key17": "JTsEkTMo6kSd57PZUeA4BuS5StM2XZLcVk3iKi4fyvKApEhUGEr7Lgz3tVhxyWsHQu6z9PH7dK4cMtY1NJxYFvH",
  "key18": "65x3tSy83eKSvF9dMEqrx8mvrdCHWyRpgi8G44MwuXQqyJeFSdEPFZKkcd9U3d6wFTXSTvwpZX6AVgrfzUtgbJ5L",
  "key19": "1B1WiuyPPspRMie3hq2skFcwuXqWqKppc17wVS4PUhhtsx6uYgtx2sy1serKYEYuUj1kxcgFQqfKK1pWozt2F66",
  "key20": "441XYUnco4wRwcdJxdnNVZRJgApZ6gxsHouswKAPgkzqhspzupJL6dcWDKHfQsnSbzw6hehQKUXxrtEb4Mersz8Z",
  "key21": "4XruVPy4TWbh6bj82GaNUSevbK1Lgf6ogE116UA8dKbFJiLKmPjXUerFPgHDZuN4Hx8XncPos9TKrdarqKyaxWHc",
  "key22": "5LerTVpzWwaJNCGUEdqvU4bfVX77hyH1me8zMg7jcwcWA6RwU7tVxGK94TcAycbcTYRuMbCgW4J3kqVepZGU2aYt",
  "key23": "5PjMka2TxANvSTASPZ4zKS6nZ7VkjRerwWmky2YMzg1cPEPHrNnjnjUocEgH7LXjkwBVhRjVpAA6xA1wbK4GtEWU",
  "key24": "CsVKe4Y3TNtSba741C2VXGzeHkoVJx1JvVWfkaZiXmt6AubdCFFoq4Ax43UgMCamBBtYQsJyJySj1tq1BwXDUgx",
  "key25": "2Tnumxw6tfqups6XxkJTjH6NtigM1pZtY3tHi9CbTHaR6nGqNn6yXDNxWg4iwvSaDAmeu6gWevbZdACgF3wNEKxF",
  "key26": "4o6Q4U6XjYjtZDtzpxVKQKdEF8gaupa2cjVvu6xJxoKZpg8EKS7fkvBAE3zohYvo9vB3wB4RupawhhJBQdeq1zdA",
  "key27": "3x9vo76vZXDWqSxdBJS2pMfCCPHjxnxZFppwHzBsy48LDmQUw8DFZBH5E4VHHxcLvakjy92RrF1T1Nfkkw5SmdpJ",
  "key28": "xvVpJXoTmqiNRFmNm8q94munf7qpSB1D4GpMKN5HjRuY5NstN74a8MgKdpELxi3MGz6miopYRsoUCoJvF5qVDsU",
  "key29": "iRmRooipXAzQVJ38kJAZz7V1pp3w91FjjNYtLJEpSDEtzvLzcZW85sYiZyqY9Z16C5JnUxmrCd6MxNeBStqxtz5",
  "key30": "XXjw3HUZdc3Lo3JorWm85xMchnm1YgNzPxtTyFj1oAFsBrjuyYiUiE5XsHBoqxD1CaMm2dLEqvHSs4VQ36zsSG7",
  "key31": "DaszMNaxiUnUNAxHWWnRwfThuEjjcQPHGhSFGmVFkB6kKsDN7aV2FKzCiVPrm8MPWyhLWQfWQxeCqXv5u86iNqm"
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
