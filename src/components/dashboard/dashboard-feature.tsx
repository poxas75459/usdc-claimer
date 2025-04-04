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
    "2jxNdf49WWHcxVjnNbe4V5FEgnvpKrRWxFPydeK8kgeYF935oUNR2a7Y7mvDW2qE8XAZHFssQPyPvrJPAQFrzQmZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LRcdNh9GHxZ6UVU46ewHw8UNKC4DbKHho6YzbbuLxSSikmWq7ycqkfQJkyEXFGTdkLxgnz5ePxDZpC5a3vz7Snx",
  "key1": "2Y7DCm59qE5B5yRGeuQsrTySP2HCuaUCxduCpENchMyEKu9DoLUtxaYjSR5osgGAqAXAVjUA7ebyxxkzqrnaYR2F",
  "key2": "3uZ5retg4NLbQu4LFy6MbJZY8kwtQfZmviJVWB4sNqLSKNgWhHVzpqPnYvdHaWbLr93K8rGLpvRDLpPrBhMXuUv",
  "key3": "5jKzUeEgSLLHhdnx2Z9yBGEYiEmGxZbCztvF6isriyBAjpN6MgFWYQAWtLjXWZkyr8qfEQt1XpQgGz9yA52jJJWo",
  "key4": "419TjavmfEYeLUQfhjetbpjznjym9ERh6PtMtn1E6iT4ASmenAhWDdDPK8ezEc5Rxap4N2Q2FxLUMK7568MTSLT6",
  "key5": "4LyxMKABHBFnLefBiPqZYTqLUXwcoChSoUiVcxA1qY7qBtYbLhmfMmpddUCbmRRTMUK9mCFVN6saDwRyyoG5r7ou",
  "key6": "35kwnGzVF7uy3qAGNoxce26FdtvQ8etxQNYtuBG1ZJ6VDQCEjXv6wQiz6vhMPhps9KL1RsM24Qc5crfHDZbGfohc",
  "key7": "4iCWhRckHAH3jMg5yFQVBPFPKARVBekXaE1ZifhQacqEib8aGb1tS91AgQZvXrXNuLK7N9SZMJNeAh9vEp2JTKu6",
  "key8": "3tdgDrPJzHgLT6K2EsTYxXShCgzzZ8Z1RdNCkQZ1ZVVqnk4y8HWnhDY1M76ZNod6Np13FQ8xuKowLjQAHs9UUqks",
  "key9": "2eG2WzCaNxc1jawrEVinK6z9h22gV65VyYRVTskQtSpE6S3wHf5TVcEjrDazwwPkZxrRXmvjq2khUQu8oaD8wQgX",
  "key10": "46baYcinmsFkbHzDdoRdTnz8vNW4xnKPAkzh2QLreA8Lppu6dENRWp1xKASL5UUREK2FqhukECsb5A93JPbRBPBe",
  "key11": "2NRCHe5FrjRnGzsQMtud1Q82NBEjVK1f1FBAG68GVtoNfoLBpQviKrNcetBQ5ufWAxHBGC6r2PYpM36ff5dk1SaM",
  "key12": "3XpQ1hegBjHaQgw5GXZsY7qQ9FHV9gqpqdUYqkCAuoWRshmgUgHh2bbM2UxQG8kPiicAZvgQ3aKjgqLLg5mdaY45",
  "key13": "126GKm6Yz8nazeWsNyqnS1SVjnTedLYDTXydpaYifc55uBUscBkAAZ2yW1JCwzoemWjTsrVj1hibC38RdVBjV9wc",
  "key14": "3ZZCaicxcshQXFWUufMKs9cFHw6k2zHK2qrJyr76GGWo3zeCHfLqcxwkvNnGfdYLZ9AVSQTScVbVpH2xES998HSs",
  "key15": "2L9gHz64XhVKgCozE2xVbVanLt9daZxomwio72RDTFZo3xt5a3CP2MDSSVPKhgwTnXdipakiEXzPxZKbVq58i4gz",
  "key16": "3NQZfsXJ536tFnjRQgxjHfkPFNrL4EPfcKboooxJTmMULtVW2MWUuBd9denrrZ9ZdZPQnEvQ8MenjNc12gsS9igA",
  "key17": "Lkk98fY7X8vhWSg575aZktcrPDvCcNdxACEqZaBdnmJcJvoSLKWiKgHES98PNvqzpryWRrJZPHxTsVup8CveJzP",
  "key18": "4nK8iRf1BtbYUHvbDdp698Qt4gubBY5A44qXM6pJ74YxQwKftRVFN5xHwZLxoHA5BQno8uMGNKKR3VtvLk3T8zWi",
  "key19": "23hYuaFMx8s8KnXQ81CVDnXt89MpEbui8tDSppTkLGeePCNzhnoXZp3duFgH1EaBbe4RGxY6gmLv4NEpdCaKbqU5",
  "key20": "3E8mkMB3hqBsjeq7GgXoxdWV82kpYxGGca5AADgf6iWdhjgvphEybNYNY7D2gicHAGh5R8Qa3vYjmeFGkKwHwzPQ",
  "key21": "4aZSGLchZQytuRJJJTbQcsVxQ8FCEFPNQH6zNtWj1iiFX1qrLFndZgmwpctbPgRYjH9iEiJf2PGkCzdC8g4R1uWL",
  "key22": "StJ4KMc6wgY6Cz1ucBHrisu5KhcpqjYBAQbMhBu55syeFqMdxaGNov4KWGoXRM8u33shH278DNG1AzqdAwFQYiP",
  "key23": "uU2viTDB1JHuKTPU1U4PrYcphPfjx2WcquvJ2jDBUuapjfYiXkUH2PBk1xVoB9rAVT9xE1zsBMgFmo4RpMYHYiT",
  "key24": "4bzSyqgjF8WGNAZ6Pw6rhMfnzqVaM51AoaieTBW49vUUG1iYaUrFxpaA9h6H7Vv3uq6J9aZoMikW6DsMTCDwGr8f",
  "key25": "5M9bnnK42z9FRtiiD6T6PtvUawuwotWWPEwtV4d44fqRRVyoTsCpydTPqZSibu54EuPj7B216WomGh4QL6nFapmM",
  "key26": "3A6PAemPgrieKnQTc9xzM9rPahmvH2bYjniiKYn6jMrVNaGwj6CjDJfPFQbjtq4157KxGLaEFNQWydUAQg8cQE3c",
  "key27": "4ecEwywfg8PpPosZiqRL8BMoUeyjrUrZRZEBn8QmTKzbcgvLiK4uuazeBxrQtHCgjW1AHQHcRbBnKw3NyiCnDdNp"
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
