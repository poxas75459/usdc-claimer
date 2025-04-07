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
    "65UTjjvVba3Y6jLmZfxmqE5v7mHJZvPHHECPi5egd6bbiY9WhD8S2cmRGPsutXqt9k3rHDiExsDLf9kUFJNyYPks"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rDQVWuFBqDVAKZQkwPTX6FJmjiUeBJsgg1QGMi81CXLvTKpLFiVhCpWnrmSo6XpAFou14onnCh9eFQijgcr9tkq",
  "key1": "4E6vg8GLpkRQRfNZiKPnYU3LntZipEjB1BzQt11YBfSHgJb67ZZNDMfHJqVEBoAYuDSjzuNessNzFUpfxa7RyG5C",
  "key2": "knnipJZqWP3mcpzXbEbE8AFsPTEiZqpyzmjC8QWNNHKTk5bCGsVUWG6oJJLJ49uczQJ8me5hFoNQEXSasSikyJ3",
  "key3": "cAA8njbjXC1Zrcncxz8dBJTGj2MjUViq1LCBkiMVWV6A5LqJbRHsQ884eDwcCmkfSCApTxUpwMoC8xzvubxbeuW",
  "key4": "5oKKxdLRMc92F9yExTHkPqN1zkycMURwCsy2ypCyRDKvTJQMahev7UjSTEfxiTgU2D77SQihb8huB76Gsmd3Mu2e",
  "key5": "3PQ33Ag6NfREiTHNVeFxudCMU9cVQocVkNVowVjCqF3y7xX1zL9PrtHpCmhtJXo8ks38CejXM9jhjYy2rUHheT3q",
  "key6": "nZ93zpgzPPA8ShpJyrmrMzQhZUVM9FvUSf8Ji2uNxiTcusJoELQR8YPaMJYNrxj6GHNgMnC3hPpbbR9MVdrLaDR",
  "key7": "4BtucsJ5VdijywtBv9vX6u4KuoG3DUM7EgNCFTU7nuwQGpawFYd8TGDZMn4yhZja2AuvGRjqvw33aTBDU5iAY6vZ",
  "key8": "3GpcTvTFDPxMY1hVkSjpqp5qgeJn347F4AuWaxLT8Tm63axRknYhJkdzQWdoa5WNiVj7B48bEbtJpkcP2HZ7Hhm2",
  "key9": "52ay7iVofgeejMjt4ChA5JU9WNitYCou6UdNtMWeGcseEFqUcdGzqPmMq8BQ4FrUFbTr3UKMXegGCpPoxRjfUkJZ",
  "key10": "ntVjedJo1mw3GpAnPVrNmiqAtwEkKHs63NCxPwvc7b8nKtWyCFVwja5hcKVFfq3ZA2ofhnjZDryJ8bpyKRiiqYy",
  "key11": "2AgWnS2qL5CxEGt3thTE8ZMUnRA5y4WPvimGSaBEA1kk5ouCwXrUw3Gv95UKAaW35uWR1cPBcnBMNQnJaSUSg1gV",
  "key12": "2aHANskmo7hwZrtV59X7HuddAeqLVGEoSUpYvnojoZRrkVYoH8QTowHwsC9qnNnhJJ2VgnoqGcCPN65HHMsWBe8y",
  "key13": "3xMbh3j4yoziyv3P7ojNAEqEd3zQBz55zLppZL2g5AyPzqQ8tZy3vqMPLo1VMKLUfgCa7icTtQwFpNP9gJozmReR",
  "key14": "PgNxQZ2GGKhVrVGtNvNUWg8C14kopCiKHGqP3KainPeqrQGp4BgxgNNhTpEc7g9ubvuGW7b6p5JJJkhucw83AQ9",
  "key15": "3Sa6FUQLBfSAK6B2ZRmT84i7TzZt1ACTNyXkhtmDYG3eME7VruBVJ8u3HSUKN8cEogXzrhWqP2gJQNNoMrXBQzAz",
  "key16": "4k4GPZicC5HTGhN1MbD5ALniLz2tGFNG37Gvnis7mSrkYaKiy2VrHLx8WVADa1LNrHxdFJ6UhZgK4pBqRh7wx9A3",
  "key17": "3VjawoUxACw6nNFnazuCyrrjJvYPsA7wY2Ai2sADK6pXD45oZpPhhbFk62XPd66d5GwvMydmmqZ6DhYrJA7sRngC",
  "key18": "3aoB1rU4GoBB32hP5zpsqYQMKKbHcJJuqkL1h5NJwUZ39yYuLtb9sCWQJjJHbhwdpr7yC7bUBZzGZSHTg2PzQeiR",
  "key19": "4mX5MitssQ42EV81pKJAmX6tjbdvdn6yLXusALxFP3utAu4e5JftfXTSSZaJG56J7Y6b25xXhng8eaNDNDyk4wqH",
  "key20": "3HDPbKjna7nXB3BQ1VnDKt9iTJSxucBL4hf2tyQ3fVqxG43PgTHC27kS4Z9tC5PrJg1Gu7WtEsMUXUDt4Ns9Boax",
  "key21": "3W3pxRsdwYGgffrr7U1JS2BWqCCyGyQfkfUsLc3wJUNCuehc2XXKqXiRRpeaMcATvAUSEhgSkXxaQ2fpjq3vwTES",
  "key22": "4wqQbQyXpm4DoJqERWEaf1VchQhxmxxmcPdFcziBuBoMpxGxia2DCPUV3NorFuK8vDEsw76w7JNPKa8QJPw2Vh7h",
  "key23": "2DysUq5F7i8LCtv5Czbz8aE65wiRMAE5sv7web2QBPdK4fZkAAQVubkXjLx5bfLmAa35x3vYifLvyxzgUBgwRQKe",
  "key24": "2j2PySsAbipxYjxECjVHxxB8NBNn3c7P1fwh4w9Wzi1heLZ3zzMNa4zqk5MgWiUEA2tLuA9UpAsnvR2nBczbnZ6i",
  "key25": "2RDv5qPXre4f1Yzw7FRqdGBvK9CvsBpj18JZV8LxFGvPRXpVagJmjBbcXyP7CJU9VEDwZBVkAGSACEzw2Fa5avv9",
  "key26": "3aVYyZx7sqBBmnMKA9Zfo2fa2mJENTueuzd8RNk3Pyvu3M5jr7bvFCHYpPCvQwqAe8gD61ks8dgKzRshrxtb25CB",
  "key27": "5vgtHiVR2vHWANQecJnEfHBea7LFQD12cNog1CD3iGcN1L97HK7dHkXQ2FNkzs947DN7ehhJKbVXBCuckxvu5Em8",
  "key28": "RwkUtwrq77427cyEALprboVF2DBQ2kMU6PPxv42unBHYPq5udzvsSHvE5WDqo77jYb4p9SswrwdRS3ZrAYBXSua",
  "key29": "44BWttghKfp7n3C2em9VKV6XJdVkb6Zsbr6o46PQPukNF6ydeQQSZesjLuX57n3ECZ6fQoJZDFyetT8Fz34v987D",
  "key30": "5uXYUhL677xk3muceKmbNrfevk7QJktL3195sxkFBBXspdPNoWyN67jz1zhzLALsCYJ8qcqn1TpT2rsStXWNk7Nd",
  "key31": "3hd6b7t17R3sHQfyKHSXix9KESRTZPnoJg73hVtUP247tN7jD4iPzcs4rnyK2yVCHDHTnMJujToYG6Hau8Wkuy7W",
  "key32": "62pjksA2jA5bGcfEyYDKjFNZQst1VTX5nq2Hm8BzaPUj5anFLmEnrJJPL7wmamcda8KGdsFby3pNGsnhz6HK5ukx",
  "key33": "4nWnNyyih3yu8EJvSoQ6kpngTwpV3Zo1vmiJhxHXPuySk4DZGPVcGg5qodUMVYRdYfHWWCNeZYSHvd861HMP9xuu",
  "key34": "2W3WK5UNGfuucd3hyaAJ7ipLt2UM9ZrWsUueA7uDMgQaQr9v5JN7H57tpHVnRfsw734XddZoECie1Bf6VXEFfdev"
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
