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
    "2saBGe7QTSZ8s1LWQRdRm1PDQm6aAo9pA5A3V8Fw7pA8xGpjpXgsjZS6xr79tpyQwfWti6gJuZrAEnXGSVGth9MS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hRojepa3bFwtFoBG3UNzKbkrCy8o1qnJg62fWkKv9mVoYRTtQToKPSmsHdiSUsbN2P3Zg4PN2iACk7H2sXKu8L5",
  "key1": "5torfZLzt8Vf6AsJfjJwA3vmF9yfLhpx8PK7fLyfgZrCapHJiW4wyQmREs67A1jLZkKMpY6HtiDncse8sKrxDHsT",
  "key2": "4vFWvdPfytBdsgmYxYUv7GopedjNWoVAeizknA964FdjRcWJ3t2PjnTw4ZwLbjvbHmC1EoWbWWwED5GfGuEMfwCP",
  "key3": "2LYv8QV1FzPASJdpvSHuhDmNofHq16WKvqB4haPLH3ARWeVTKCdfRdShe921H26iNAEkmdPu2zXSLbwQJZLebAru",
  "key4": "2Rmrg5RHwjMUYeCzWsiYC1fwWcFz4hgDvq6CvpfYiyWmcSHPnqJ7ntEFBqvGRkjcLKvt8u1jh8P8HXbCgftmTqAy",
  "key5": "2Vb1Ks1WCk1zduRK9iXap6YUSKveWhvqzkVRSxH9EhfwFEXzjah1eZrpohA5FLwmLUm4kcrVAE2ag5HHReZg2mNX",
  "key6": "5mqDx7cpJ9fiHchNp8nSWycQagbVJoaysxxEAe8dAWegi3iFX8PYRfU4VoTRRURbtghzLWsLsAs3qEwsEabTKnVe",
  "key7": "5rPXHbPuToyqe1fG3322JHPQf6QpsHvCA86MJTzEwBqByGSZMRQXNSFmXK81jvtfkR7znU5exgSHkjkTF8xZTW3r",
  "key8": "2EzSek3TpXdJvWKEV7PbybtLjX99jWRGQKtn1H3Mwo3TYgaAyyBDuAKUMJEN9RS5KFNujJZeqR1FFer42Xe9oXQk",
  "key9": "3NKJmm5SC8ExABoZRg8nL6c8Jo849z11xExxgxgJgZf8jnqH75pmyewbmkxMeG74W1dUzu1gZCUwoHKUi5BZFnWu",
  "key10": "3vVHn8ruXa7htJScGeD38h9iu1vMTFEsACAXxxsDynjCZuegjMfrwHsa8joSS8Yp13wJzptfT1ctSEg5P8tKnz8m",
  "key11": "5hJshTMJM54C99BwKbb2UCneJ6DH6AaW6WsvjY7kQgfhJpyFjTwNaibouWDN67GSs96cgdaci5aHaaUPeMrhNp8j",
  "key12": "w4iFms3f9ky7DxVRYRKKNcaFoY46dWCwBpoRU6f7iu9QZeXnjuNfGhFgyxV7NuYgA7Mik5iusHcs58dD1L2E4i8",
  "key13": "3uuLovuk2XWyd7YfkPnPmjNTxNQ9vP74iUVb9jH1GW2ZyvvgbFVYZr99Cad5xoS8J82whabMUnahSnfvBJNBgRp5",
  "key14": "2Wc4mCaB1PaNUrdvSnkPX7LQHJ8w4qBmdib8umLov5kdXm1ujAvznR8K2Tuo1d4h8JbnUesjZ7EzDKB9YrNDCjdN",
  "key15": "2gymwY6X9TTz5YHZaRuLGHeESPaQCNP4cV2idws5Ruq6xufdo1en4UmhEK1JWHfW1DQAsk4fYCxxo7P6QeaHbhMT",
  "key16": "4LjUJscJU9RNkkf1GYwjtkZodxcvXZi1yY92gmz1G4adAw9s8wvnezCN8aoyb4e8R5Uv9n3bgvvenYdgmEWwj7rA",
  "key17": "5SZJpubWGPscSjeEXz3eikQwpJ2e2uGzBEZZQUU7eGC4aa9ur24Lqzmf9jk4tu8EYwqXDBg9bjU1qKqUKQ3emdf6",
  "key18": "5t2zE6VGtV5C4pxFSjJtMt1UFLK42FCPSRZgqZwx6dK1LBRwHoCt48TQJJvDdsdFVDsXPaXPtGRGqGYnGPGGk5Fc",
  "key19": "VBfKRW56dGFDzbtPaafDVWzgdWGxX2m4KUPoqnPoijbNZkAXPV5Cfyk2D8gW4cLqEFyX6BeZWufQ9yB9mqeAAPv",
  "key20": "2Y1yFuGcbQXrbaia1tmjgEa2V869fpBq2FqrPYhpZSHFSwpNL9u66YaTLAK2SSmXw8VsT6tCkCEopLXsZWeQLv2j",
  "key21": "voqrEMh9Nms37iRAgbgEJwnCp4ZENC8kkZzrBjsKY21m6Dgq5wR6NFgqpuXFbX5GRRgxhMnJCzcF9NgWqr9QA4A",
  "key22": "9SzP2DogggLz5oDP9zEiVzWibs6BXBKeThGgcS57FNXVKaSSRg5JznLV3HeUESo3H42EiH2TzdHppAsJ6dxRyBV",
  "key23": "2ZxThPz15gBDDZJZ5tmkLTbL1G2y6cwMS9Mgcb9MsYo9LxUEGKd8PS5MMyMbyFaxt7WL4c7Nz5e9bEAg7i4hxT8U",
  "key24": "4w4WyTdJ8ZNRPQHxwMrX2in9Db9gwp95mifahh2o77d8oSBPUoSFV7cSJhNjEdZRFbP7821NXT36sEKs8kYgrvT1",
  "key25": "J3NHQhUWHsC7pKKXRC6WF7DcW2XjYE4TYGvkep9hZyTkEDcpvsz1hTDTJLpeC1MofiyConTNNS8NJXKT5phC5wf",
  "key26": "k6wpPuJwsfTeDsvNKhPvh74LHfJEFPaDoGkC3xYMJt4NHrpcBdEFuXbzPXHMbbAXWCXVp2Hjs6nHNYQByx6xViK",
  "key27": "VgmLNTps3oHJv7596g2fmeD2Cf7PYgCQWPBnUp4q8zWR3dhZEsEsP6MVkwLS4aL3ebKXguqgJyxoCETGJWLX11B",
  "key28": "26AkdXNwjTUFPwtN9HS1TsEqTP5xnqXcTD5bX7M3uKMC2oyN9bve8cJ4e2K3T6jjw2A98MsTRr6yCSQr3tgaZvuk"
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
