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
    "42TnMjSYV53sJP8UiMhPoCVFMMpWupyFir5xMZaWEcCfFmBjcCRVMRBLUKL5UvWsfGKKHiquduXFi15RhspgXpNZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MgjbNNfXNW2Vvf6qNr7ZaPHnLs1iSkcHPp1hgs8Ee1WhG4uPUzGNzythZ7QFXC2Nv9XRbCcEZjWUeuFCgNUA3RE",
  "key1": "J5AYu7mVsJ5m9HkCEKXpEQKJpy683BcfotLqBb1ucPJa8mDSmHyQtacjQxUaddi6jazW1gUz6gq3JJnfMQVeXKB",
  "key2": "2uJW1xQgSvEhBa6wdH3WySmbZyrAYggEStRkc8L9e8qg41wtCSMkUMJavQRmcEb6mAbeyA1GMBLSG5ZsTeMdzPYq",
  "key3": "26Q8Y3FLUgYBPJGbxx2NyxQYvbfTSAUJQtM3YAFbdD89WKwoF43C2LKd1TXqJvXrHCkgdfAJfKhVqzi6fzFP4ZXi",
  "key4": "5oTb191GykE2tgSdQRJAdDVgRTkU7CivF1iFW6JErLRQhqeoHjbfBg1WMAezRP6A8K8aCvbE9EzMZCHkBQLsMhwj",
  "key5": "2YvF6KCLX9gdfMp9V4mLdx73x9RdQTrZyQJ2Lf4HoDJgjcrGPaxEAXXZ2V5TTc13usCyVxri1xAYfzvfzE7VA2bR",
  "key6": "BY1w81ZFJ2robh71Aco3ssoxaMChdifzwLajeEXrk91m4EM6eis49QV1gvJtHjTqXHwEq6mTLvPjhchMVnbiRrM",
  "key7": "6QTj6UX4J8k7VyB1asceoPZZWp3564RHrMhwLjGaEb8GY5F7pssZvPUTPDqkyt8w3cSKkUHZQhFtPQBjhthrmsj",
  "key8": "5B8hDDcKmdatepQ59YzvZPTjaC1eTNXx6nZQ4k7eqS2i4aimtk8ZNZJMjPa63N5iKHqgJw1VDa9xCkA1BGrf9zi6",
  "key9": "3as6Xt1uW4CK4a9fwosqZnVmWQn2LFrn9VZoYhJ31yzPbTYN9snYkAjkfLFmWo7Rpja5E6hcp8gNQa4ahB3oecJt",
  "key10": "4oRdvpxXNRNzAddyw84BRJZ6xrRE1eR1Y634RZb4SuGnWrkHM7PEXtP1BFd2roX2QLP9dQiJUp8B293P3ZUVvVrH",
  "key11": "5U4odq4723MNKd2AWRJM17M9oAcJWBJ66h68wzcZNqd69ThHHbjQvRuA9oe9HABinACEnv9evuZsBm1muaETzHxM",
  "key12": "e1XX2eCHixjCxhp8FPpZKzobcYfyTd7qHHDiWdBg7jraGXYverTpkW5YZgbmkVymmgFwvxZMZSWnxSTmg8QQmER",
  "key13": "43gkgPeiwDE8qHDLqXsb41RSonG4MhDfZgpkpK6rL6mZs6tJU82Uyb9gS7jAS1wb6bdLKDCAVhnRLL4mMzQZazdn",
  "key14": "2c3RxqCtjBZHXZALsuLMX7pmyneySJQH5yVzvZ23WBof76edDgAx5dN9RwZNiswRvpfaqkjsZzSQ3CMUFwoZXB81",
  "key15": "PV7mtoCv8ESn2EkRV97YpZRwu4GEAzm1KjM84Ki7djcDsKS6RM4xpKat95DhctTu3qyLDYKUWAoNKJKGpk22gmi",
  "key16": "3XEmf81QshhgmqRGqyYdW1s3rdQZH3XDMwEhLGEmZErcSpCnMCNz1hBHzsCX8jVv6VGsk6zEeTc7ereRVzx2UDKH",
  "key17": "2sGwC8CUp6a21oy6BrcFm2RLY2zGCieCdde1hwV9Hb4NgUA3qPHTwn9F2yET9CnJj14tnrHqiJqG2yGAL6ibpSU6",
  "key18": "3hafU3Zz2kqkLVEzQGqDzBhtwUDzGqE15WSJEYwpDS1GnDbqWrvyXySWGyVtNH5WhajKfqgpku1Ap2YqMMxGvyJ6",
  "key19": "59FjAZEAbtHYn5pRiVL6nQBzRn6U8ADDbwY5UrAHcRhy5M5jYEF9aG3V3gLiA738rXn2TXQRu2QbRYPeKfhiKp4X",
  "key20": "5LQ2NcjCxM3BSivN4qrMbjNTi61BWG35nWLgyoyRNtLpFm19ukNkacpzCH4rVuFbj9c4BxZKsEBiz8M2dPckYGYP",
  "key21": "LHH5LqWi8tVtKrw2hAdeVgWGWkw1QpzqsPnncBEvvJufep598Wd97zpNtMk6exwJgmG294CHKcvkoqQSiAP2NqT",
  "key22": "3G1hjNpAuzi5JzhryzbSp1GZsS9sxhYaczf99WuG74CSYTXbSvu16a6sFGXfYP81bsWu7QPEeN7uEjTXUaGDhqvw",
  "key23": "252r8tkkWELkBH2J2bQhbU2DnaGZa9w7QeifoGLDxdmN7EUKwLwAyxh9N24S6h1bdr8XTLmSWkh21qcHZh17fKZL",
  "key24": "nckZhAL8zsqk57LdKnbaMNbDgSkJn9Wx75vHU1R3YezUSAvdCJnpyVe4ixXFXBARo2saJSNnnYK1wrYdF9hzmdY",
  "key25": "9WmeK6dcMkDC7yH564EwRrVT5C3uTuuVNgxzRQjMURFFBGAChnsam7c1DosSyj55MhCdKkvddTnciG5Fm8zD1qi",
  "key26": "3r8xuMf6jnBLBkA8WDy9ktSJVapv3m428WsdT2MWYyytSFoLGMN28vvGn6BfnNmaXGjw9ZvHYMtnYESsqw17J8j1",
  "key27": "5biUAGqgKoq551yCxBMEUUzCWsbJTmeA1dAKsRxVt15tCqojx5A7nm7FdRxy1nUtkfohhWiSe4rkHyvKTZFgRNLf",
  "key28": "2R5M35swMPsyugkUCzwJnLvpnaJKMvV3F6qvQN6yXwQh68aH7SdCY4uKb2vZHPUmYih9STyENsDnfB632JLzWxA5",
  "key29": "3U5LTbHgVVngqN9A2joBUDs4A5n7RnoGzJXpLq7g2PxbdZFnhJ8iZCxDtXdPTqRCjaYHzFLUHnkgqhEHgoWn4rtf",
  "key30": "4D67ozF1W1nZQKGDoMakdY7bveRLMVECWGiPE8ZoWUfVnSJ9uw879bR9U7bXDXktKRaZmUDHFkBP4wL1jTF12EBU",
  "key31": "3VvzAvoh9CrqjrqgGAJEJNAgB4yytfXVJJKV52Mxhb5bZyZjupXTz6fjQDcpgC8cDq4DutbWSuXK6wC8tqH4cuMW"
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
