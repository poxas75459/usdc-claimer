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
    "2VPaiRZaG88EXiET7y6tKtAEMGtvv3RVMCsPnSvZsZcUPjkWYgi1u4KzaqPJ8kuxFyVFUnud93kFzhAx4zU88GzJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aiH6JVXJNT4ECU1j2FNHvF117noLue6ehkq4CeEGvutY7Kh3fckbYFL1y7qqC4D2dMCT9bEaxsxEKeop3nw2WoT",
  "key1": "3q7F3Bw3pDKZYuwVv6vpUqDkXUNHBiCnSJ7BnsWSWAtNWLkTjDr4knpecGmwXVsgbaWxxg9XAv3T1okZupkRfrb4",
  "key2": "2AWCHsZnWEesH69LiXpksWcmxngQqrNdJMLRbmVXPy5uCGiokakqujyLrYCURKCUDWr3ijduEo5C15aQkyExh422",
  "key3": "5ToooqSCams6YL4QJdetRFStg3pg7CUwDdoDyy1EbuMGwCKa9S3PvU6kLDj6msE5JG92VWNPjKo8dZLX1hTjjcQ5",
  "key4": "21u384TTY8Wx3qqQ8a6x9TgCrgAmyr1z95qMKjLq5CfgtMmzMezqQ3Na9to1kE3CSfPEcsGbak5N2hoyyDW7bStV",
  "key5": "3ikdXyNVywwnQAtU34u8782jN6WDH5VqhXjJSL5gBmnYTFgrYXazUSwSqRQa9B85u3NWf1GqUfeCdbLJbXYSZzHK",
  "key6": "5k6MmXpjKppdSooK62BUrHEhy9YG8Srkc5eAWZi6x1QL9EnJipA8k4ZCzDymYJotKb2dvT6dvb3Kn1uu91pEWRHt",
  "key7": "ttJbMUkBw1yCF2kw9m8nwXoJ4pGtmn98oDtpXXxXm33zNJTQvCX8asHBwWoS8BYPcwTjAfutF8ndL8aH3p3f7hy",
  "key8": "5eGZxzgcp4sWTYGkbkzFaPa4X7PXD3SSGtQhhmVGbqS7ft6vyhQfJgBqURKYojbeiB41RRrEByHEajTtwmSyrrCq",
  "key9": "81uS1kt6uD9NHJDsASVptu92Vi6aBx4SGSxRLjY8oDr7jgPwznFZZyk8EjyteMZp5ADucpsBYDQzQcDhSejP9QK",
  "key10": "2qJebLDVgQGCBR9m1ZxWZKnRy5Q13A3Bwek31TPzmeZ18SquNLUQ1esM1qehwa2TDWyUfitnX2d5EB5WCpgzXHdx",
  "key11": "kaCed2qwLUCwCxe4Hu3FgLRrysWXiH1zRyhp6YX6VDwfZ6NM2JdU1MMvd2tnzzxqFvna5Kd1jxi1jnNuwfRaLJb",
  "key12": "3Lps29nJbN5kGiN5gTpLNQ2v7y9BMuw1HsgPcjoogtYZcFe16rKwXFXHVqkdRx2MrkzAy4KWm6uCBjWjK4Pvqtvw",
  "key13": "5DsSKbFgBN9YfMU8fp93kMRYAFjhGoVgZtLL9FborkPJWQT1oRGmjvv1qfXDuv3tjRQvpuKmsSfsRXVEh8PmWJPK",
  "key14": "5HX5MvU7qMsgwrjiXYqqauBzvm2qJfN6f5uTa34GcoPTP4nSgeBDngpPTf344bnr9ZrfCmoaL8QwbT4uSHy4X1WS",
  "key15": "3NqWkNU7rS4TyVebaw69cW6njKPJkhrKAa9npgGtQtjmBC75xLDoFKiXZmgkU1AVppDkanKFHzxYjXThkGQNS9or",
  "key16": "5Rzx6mfsaaF9nGisiTQFFctBJZgGRh8iTpx7pAR4TQ1EEzrV6uUYK2BbVfknMVQbuqqhEmCjyd1kJriCKtDy28jF",
  "key17": "Sfz8xLFJ1rpLK1ZHVZdFZUQa2S4bUtwfa3ZD52MZQkom2SMPsQ2xXMXNauCqmrA4942vE1LaTLzCYp5ovSsWczz",
  "key18": "coC3iMKAUphwvC55Xf3RGoMGXPLjhbS1RnKJtNCU7SbFq5eVujhTosA86yaa87kP7wixyYVk9G2gNsmCHKnUaoL",
  "key19": "UyMqhAhNLqMjY3HyRG2TBnyM7JCn6Q9LJoWbinSqTWmQuwsMSWAt3BoCUGFahwT1BQzgZpJuyx5YvCtnJcMqCyg",
  "key20": "NEjS1wEzAaUTcb3ZNbxYsXH6SLFCDoJ2k5UDT3Q2Y6C1D3z74FoJUng11PprGxkxizGuFoMWRCvoEYwuZruKcaK",
  "key21": "5i4CLLRNnnLcBsBWdMqFBPRPbkdQp5zardbNZW1FQHwKJx4qEL1NDwRqb7XeqQyqTecGXADCLt87zfXxPnAnxZjr",
  "key22": "3AY3BqgyJcuEVDY8NjywAA3XoBpV4WuNnQPGSsVyDt38nPpeycpXQoj8cfLJC9tdo63cHr4oP2r4m8tPREPXreeG",
  "key23": "4cRJbGEnTn6htXuRfHe5q6pfA3KSbfR8Rqb9dSatwhFR4Msx7yPnchheY16wYVdSvNVLHuuARkVMf3xAbuAKgLAv",
  "key24": "Gg7KetzvLYdvuxNmuAc95FebK73BVbP4Aps2KcpJ1r6rGmEM5KrrGz3pfRQZ4LEnonkM5umi55nyMUkFQxJA4HQ",
  "key25": "66GyMrgauDr8cFT9LozBYawk82qihk6CZayKAcJ4spX6GYdPJjC36nuUwszX5Stra38utGQpBSHhUyNk1jYUXuig",
  "key26": "45NZehxS3Rby8ckB6cvbU5oSXhvKem6epd2i6y55xB6cWuJkNhHmTPqfJ4ttnkXfRcLYXFepkk4A1ZqkmCuU2ZxL"
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
