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
    "qEbmsErFpm6FLLBSUb2myeXfUpVB8FsaKPdRViLxfuLwCDrPLrJrEXDqPnGSQiJX4Yxqr3QAQQ8MQNAYcsZ4hGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mkB86ATfQ99NffXdovnQw9rTY7PU72bQbXeink1iegxeCyW851tQDEg2NYH4TfrGZrt5QjxinyNCe9JoHSYpfDa",
  "key1": "4FhAaGGig5CzrCiFX8r4XYMBtpPPi1f44y3XLQPNn5KQnu2QmzrUvAYjsuaXJwDjCXYmQEmUS1yEc9x5KQJNdCLA",
  "key2": "3K97Uj4KV28ona3NJAhRWRcCFSDdMeb7M5VRpxkQodaPzXDv8aXy4sK2Nv5sSv3PC6uerByRkLNRodgFpcxzPmBQ",
  "key3": "5w3AbscZ873z886JPLrxfLa2B3LobrLgbysAYw4VYx9gNGCg2aN1B8z8vZqQpfg1Gv2R6kVn6MBF24acGMH5EWAM",
  "key4": "2qdaKhUWpNoMiaK1MprSwcWDSSXcKz2mvnn6YXe998CoF52zxHcHaSbyjaxWf8RjRc4VhoqZfjCGJTMWbhJs7NtJ",
  "key5": "4eEjr3G176MwWkYarx6jfHwWMnVKDfLkjQthZenB6RMfdqFy74cBrx7CnbwAzcw7WrCCrJD6nnFb4LY1ErouCxYq",
  "key6": "XbUBdcEuVunZDih9uMGkumRmSz1J9DhiGJWwXDQZaL5ASqwdtLA2iEbzPaPwK3BvoJujgA2mpFfxw89bxTVTLQ2",
  "key7": "5Dv7p2kqadP8fccXCsHt2xrn7WgTM2HFrMsnnYoxm7FLP7vtbCXnUf18RvGmfciMSF4n44LDAin9iybeYAfJq98B",
  "key8": "28RsBXU976NmT5YZW1jEAGk7iaXRQk8Ge6BgVjZz6MLi7oyeMs97sMfNJsEeH6VvT5oxFbiGHBqyppZAomRRZK6c",
  "key9": "4cXtEuTEVzBQtRymQZRMWnQC6teTopKDvpgZ3jm2Yb4CkSwTTWMGVY91vSJfhYepWcDKnyZ5F3Nq84yKvC7bNHqY",
  "key10": "5Rbt2zW9Xegqj1Zfie7hapTYJPkh1Sg2KH5ycRnJAU9xZTkgw7ih969v7TEXB2nFhwgNa1DrAUU6FNKWUzy6Zmih",
  "key11": "2u6eraZXSciWGPDnW7Jm76tUGqjf2DQEkS1zyoQKfeJoE1jiTtLorLDk8iXU7GwbLmNhpeHDLehGd4LuzFXAPzea",
  "key12": "3QtpJtcTsMRD3o9qvT1MYpigMd7B5BowvzXVh3rDdEzHoNP9hPignHNL6jD7RLfiYHmzNrAcrR7iR8bL1v1xMJkw",
  "key13": "3SFYQj6JnSQXzziaj2bH81GwKcsETZHG4b4bZW7XEWvwKMgC3PkY2EjKj9BYLC7WzkHhVfthsE6Fwfrx3eWL3HD5",
  "key14": "5sjtAjpixJa6eNEZnuTBGjj3x7HfFozWa29pTxjrt2dJY4xNo2A8CD678xUo1adaSVM7YH58yh4yf152PnDGiBw7",
  "key15": "4ZjynagPrgdaXfSaBTGiupKiByP7z3L5py5STeJEt7G1ry5jggycMuYzYaq1GezE5vncMRT5pPzvQCuH3EV6u5m5",
  "key16": "4PfVCctuyweKnDNL8Xx2TRr8cq94QcoXMj6dCpWSbh3GhxwZUTjeNBWrpnUe1JMQt8HPfsCYZomv7xbtvAxArBvq",
  "key17": "3NDw9egtp9wuxB9o8FaumKMbZSExJeuTkk7KoMq5DCPsupPpdGUVvxHmaVkCkG5YBTNTZsbVauoLzKbyHXuFynti",
  "key18": "2C7pQFR88QRDttvGDm6F6bcVPgJpwDNMqKZZPeiK3dbj9SacAsBDhpVjK96tyds1y5upRjpCRuzLAaMHMiaQYe4n",
  "key19": "37VSEbpXVKNdw73kfExvNnXZUz9xLD9ghe3Rxi35MMb2tCDiCUu1QKJBoyygLziT1QWyKxHbfKdLUWCg7s1r4Go",
  "key20": "A2qPi6d6ssgP1bmnZDxqDYY6nSGUKSiKDEjifrS1eXQzJzeRj47xbDqVsvmaUfGXHf4vtUBFXs9HqT1j8c9meXT",
  "key21": "44v7oPnhm3XjpAvoSkZWyBgbz5s2jPRvWuzi6jomkV8DtyuHh59imfBH8MZSXBDgBwKM38K5UCtb5pQUD9oJsGiU",
  "key22": "21T2r99JdQFrDvgrHgPm7uV1k1mSvJvEgwtv6VhjQhLj9fN8VjW7d2e43fhgTF8ZJL4Dbc7c1tdvA8dZnNGSpNcE",
  "key23": "ygBQvPmiUeMmAZYrx5Z8EsGcpobJWhv9iKsBYHJGUP5bUiWk4qMX7jxDZJsh3NH48cgEv1trnXfoUeDbTHoiFHd",
  "key24": "Uiq7PeWK5VXBTSMwRpSMSinV57ktqBUUxsci3z2DkLUrgg7L3YmTELEjonf9LNP6HZXoA1xjjmCUhPPxKFxQYnH",
  "key25": "5Dcad5cYjBjw1ednr8ByZXNKYN1tcK8ZdaQtML33cabnipmVkJV9eJDbkgN1qzxKzokno64cd57j6veBKEj34uA",
  "key26": "265a6AtYzN2kSvYhvfu5Ye1LvUqjNPfMXtgxwn6kuT9TJqV75iGv3G87Pz1SbwSoTR5eRGL4YaYgDmYEaoT7DyyQ",
  "key27": "37DfxqrrueonuJjbyodC5W3jJ8rGa3Tj7uh5QDAYs86RXbNFeZvkooXZNiV3ePzV19mZ5yPFUY5S9V7ujbRCQzsG",
  "key28": "3PeBSzLaYXSezZKANSUSoQobffPSGCi9K9tQFfekMHgdekWsMxwxazPd8VG7PewpWBza8nqiDZukanQNvMrwuktY",
  "key29": "bgs9tKF8mck9v9sQZ7vLDLYnKwsA2RWkM13fbTZ6ck7oPsuqZinTqpkEWrCgbgNDCgicGGn4XAg2hLR9X7Ko1wF",
  "key30": "3ta3YNDabbp4qwjhN62HJDbxNnP4x16jj5W4wNUsnhjdYkpk3mtT9DDGjBy8HJYXronj6yvuHEbyrWW51UpBtHSC",
  "key31": "42ZkYJgUHDRVkSQQiSEzaqGaVZeR9zTC85m4KubkfQrecUmfLnejHsbfQsQcVMoY1J9rG6WDmXGEDGzAbx1c9Mkf",
  "key32": "5EXqFepcYpeZ5pQ1zaeB5nks6dx9Bxy5JNL2KFp5W3VhWPQsRo8Ec4aHSHgJEEinj3Xsa4ih7Eru1NLwAzrwjNkx",
  "key33": "4jeKf3wGXSnooQB6vvLxDwS9Wwdjht46mZaq5BSrJec24772FNGXDfTZwf1mrHZKoQzbBYCZbaqmFaaSbEbByJfN"
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
