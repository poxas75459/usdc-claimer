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
    "5dC4x6VRFQg6Ywu2AgrZFMgUns9Jm6aQsqcs37mtqfdywByCY6W2VyCCGpZhSsXt3paia59f764KRFfZN1P6dzqC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AeuDWfcCTucBbqMJeNFjzmknv7S57ofXjuQB9zos2znL18UA7D26SHD6K4NU6pErxbTdYKori9Z428XTMUWjmvb",
  "key1": "3utzWnQDAHbYdqZN7ay4MHz8WmgeV4PS3oGGYeaKSBMgDPKev4p4mdoDKwVWjT2w1Yg2z2AyR3DKQu9SmEAq8iip",
  "key2": "1wPCWuDc8vYjwtSvvMQgGe1tG7RVs26MiyXEt97SPzjUTFMZsjvf3xHe38rRWiPvhzcrUqu7kcW95pYeMzBshmw",
  "key3": "3N6ye5igW6oDitFQS2iJM1dnDf56DiwiyjTLznKagbh7YVgY4CDZt8w2Moq4sAKPEtYyccPQTWEqJwwRA5KpVL3B",
  "key4": "CLkHagCvzfz14q85gaBvTLJ3ASdCxe1oYhU59ijdLGZNDLa3517R4C6C5Qo8QpAUJjWodJ9es5rUuvgP94TpJs5",
  "key5": "2JWgkunmKM3HBSrRBDHZ3JiVWKq29TQNiJgPrPyiGL1UvfKChZzxtjopdKYTzRYZFRfzC9xvaipQfFkbcwHLMHNK",
  "key6": "jkvwzWNGNWzdp4UgYyURXK5o5QQ4WXRWv5wMnKoaJyf2kKrz7KzcPVKeQMaLpeqH2GZZUsd72P984wg3TwEu5WJ",
  "key7": "2XJ538CaXApbwLfy72Z5hEMo4gTMRinXS7fgU76Y4qgbRaTs8Y31e6NNmqKfTXmjyaF7oSL2mtMP33Hesmj7pZAs",
  "key8": "4dKqYXo6pvu1oivRP8XG2EbaroG7vte4VQC66He8k9H3YDmb3ZRiAKmkTcqWTUN8YcSxMaRT2bVxCm3nYrfjKRXJ",
  "key9": "57vhxsrCyLutNByFcAb8utnXUVCLmLkb81hBcW185hPmMfDXEgPxHaoJAXPvM2J5dEMD2pMvKBJ8qfaJQhKza2cc",
  "key10": "c9JoQGeC3U3AWBowFMqJ3vKG6fE6SYA2xkdhwsELUpT4XjHwaMe73QHyqPAk3dQkq3UqeaFPHKN15zGKR9PwNpg",
  "key11": "RVFLBmAfUp2hpYCyjmDyJQkh94WiLdWA1BQCFrTaLhbdj6c9DPda221TBuNMu2BDNS5GauJWjpB3avpnokLe56x",
  "key12": "59EGcSmgLdM7CrJycoHLz1CKJyXhWGKPhpMp7vvgiM7ZFsKS22nNcsteaKpLfMJdFvoN2c9Kkos3Tw8Toncg8aor",
  "key13": "5XFMgEiaZLm5Rw4jNcZ9D1xvSgeRT3c2A9AdHpHn2dRmvr2wYHDWyiH7k1g2A7CDPfAPRu9ESUG9ngt2oDTzfTZ6",
  "key14": "3psFYXAWaW7ikoQVNprnCtMei5rMHjjwCdtG4cyo8B8rJ72k7gkoU4u7eY5dexKzaBaDG8CSvKvprxCPgNLXQAk9",
  "key15": "eUd97y4pwhqa5i9bYZMyK6Tgf3znXUk7SiaBfr2pHAnve8Ry7BX6jAgP27K3YkKdkVNRF34e7BUayH7sT8AL7wm",
  "key16": "2Q9zcNGhMmACv58i5HKkdUSAf37udb3XVKWPV5YQ4Zks6PvAtRGLZyQgx5eTTkN4BgYg5eKBswujzr1Jg9zNwsup",
  "key17": "5PjprzidHQo5wNGgR8TFYR2SVGdwrpw3EzjAA96zmdtAPQrs2Fbqe5wueP95emTNvdxLhyPPhPsHbVznttyxj6UZ",
  "key18": "5hbCDrYnt2nbUKpRKVNh7vzDkv6dYM2Kb4uXDdcwTF33EEeHqMUZJmT3FBbuy5GFgzsBy1fjnf9WaiNAmZZAx8sH",
  "key19": "3QVEr86cFqCskHy61SwdqVuCc75WtvpS2JWqCci8LcFhPm1EmJ2nztatg6w8gPRiWfWpHZbvJ79BHyYKDUGuEumN",
  "key20": "2a9SjcVFUkUPVn5pcPetuNAHQNMWqQf7bxgUMMxvaTN6UVZK9RQj7nDSHAwnWCXGhWdcgqrTEa3TYi1ER8GVBndF",
  "key21": "hWXCLjHz1yVWaZR3hhPDLAtvLfodGh6xZmAYGyAipbLUGq8AFdG3obvuf2euQnWXh7ZGTsDvSoS9sZpggfY4EtX",
  "key22": "5wGx7fZJkfhow2EuJNWS1uWcQcHmbfFmzEfohRQVQkuhtM9ir8KySKg5khot7DDWt289dYm1oSontDDfaqW2huzM",
  "key23": "4KvLKi4g4B6WNu46Kipu53f6goQsiRveTyp83nztJ48toMZxnHPkzwbeSMFEsxJ7BVtzbgjX1r8oJAwtFfY1Dm75",
  "key24": "5xzopfRCi1dPfqJvdfWbrQxxTpv5kiTH9QYU257tGQtjQLud6PGkWSfABMhrpkYR2rPLxwY3jWmS1hYMxA5BRmTp",
  "key25": "431BrTdZNzMik3sj8W4fxjQoht6RmusPP6VAfqf8HBLtrULZM4xdgkWrA1b4ba1Pq4ESvj42BzzGPdeuDN2wniw6",
  "key26": "5ugu5N5Fsa6MSDHg6rcWHRKxosv8hZSfK6EwKas4FtUdyTdhSpkqkLgMdhNMnGdgjYsFKXqgjbE2ki5hBYuj4ZSR",
  "key27": "54S5jPQxEc5GoKruUYRvbxP8pcvpjqyVvuNs9vSdSgTfD92E5LerVZFK4PsxZsVM2uPwy1uaHuHCmAm4BUQajyNy"
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
