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
    "5RpZ6ZgBuZVdYAH8Sqn9oN7fyNcXDJ5fK98DeQdPMHARNVs93SYB48iVWWjTttajcBXCdVKKJAR2RGcr6WfJ348p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47XR5oVQyAJ6GmtyJ4JxYicKUgAnzWixswfEkEYpobAwExShpKEC4T9GedsnNTMxki5rKZiucE6QSPk6NMA7sHiv",
  "key1": "2zuPHdHidvhwoJbxr4bxSDugw9KAm5aPzBX4vAPuuh4sSH6b29iJBvu5UYuAxEJUrQBfzViBQ7uWRBp34MWBRPwg",
  "key2": "4vHgxqSBPqtjs8mKeP1f8hXv5vF9ffAomaA3NwmxePAAoo3mYrKxFvc4kseARu3Gf7qWboFUwDKgimVVuXNMPmcZ",
  "key3": "5oSF2rXLyEMGt19s3YBr2aGhCK9sATKu2dKK6NbNctvJkhZtXQt1u76qTv9kBLfrNTNqWL4nagAnRGTsNuqgsH5o",
  "key4": "3mQxQbUYzUeKaRG9VMZS3eyYRVVa1A98zP7NCpXDD3rjSAVNKpZq6zKJRo3RY8adxNVzNgY2SxJe5r8ZHkBbV6Vq",
  "key5": "3wjwTd9UeQZseBt16u3cwzBjso1ndcgdK8XWviQa6m7TmyWD5YQMpY2zd6R8UPMbcoShAL5vEbKnw2CxrUhx7LGp",
  "key6": "k56sEYN7Dn4vXz6L6x7ioAv2zdukGAFjDnuczhyuuN3FXqJZXuVfKQrFKnGCmMb3191BQrKWyF3ZPAkY3DojPdE",
  "key7": "3whZz3FHegxSE8JW1VjosAVnG59gEU2yVn8SFX4sarDF6MtoHVczBaNKRA2wCUuC7StyxsBM2peGFJ1uDyRCtb8k",
  "key8": "TqQuF5T8d27awX7QEriewXM4Y9LeUtSsCnwZkWRNqJ4b8MrYoWzDB2Jsf5UnuWsZyabkjW9iPSLkP8Jd2WyFcub",
  "key9": "2b4V1HizoAUazTAkaTiqW8XU173QQ6UYLiqebjcEH3BHzKdQ9WFnPcy1rKuJkwxQ8QBkzb8fW7WbJuVHw7Ay5NKf",
  "key10": "3q99AAnxoxfRzTYyCsfpZWbM9ZpGs53kHcgiuBUX9EJSwnMuFNhn1mwQGJ7pm2odbKQSRzGQmr6w76gk2kCV3Njm",
  "key11": "5Xss8z93Qif8DVLDSczLj8TRzp3DMbRWgAMhy1RQZhb7XANXjxEW19jLFJGwb1J2vCDktbuZR4Q5P96adeynNVUH",
  "key12": "26d6Vqbmst1aR4hvR7JnR9iX7zqoT9FjAuofENDSM39nfGe2TkZ8NJdJ99BV7iunHLruHB7novaMePr6v3otZQ4R",
  "key13": "36WpZC2cT9EUCne9bGeXHKqfaLKEj1KBpvCnRDiAy3GsHAP28xbP2JYpx3vmaZBRBH8u4QfUcvGfXAVH4xrthWaq",
  "key14": "3VCtbyRt11aqKNBDLBBK6PeAu4542rL22Bp5JWyNNhhotrwYrLkTea5uW8qfwgwCNfAi77zw65XK4oWCK7vMj3Nk",
  "key15": "4NvuMHBKxxnon7dmUgdgRj3azypQCc2EbyDwxbHmJtUv29YqEe65boWW8M7xky1BqcZsT8HsfsJabUFHxzpEe1cv",
  "key16": "5HUjWGMZuiBwTJ5xzAcvGymkasaY1LA7c3k7f6WHfYt4yfXbDtPyfsKe52L8LQASdK5VzKmRa6Mz6cgH66UmEPvh",
  "key17": "4chUktYYx74RqzdHEdhbmBUAdENxpgXsDYUxBZU1uTMXjtJMXTGQX4qjUDeiuW3LNJddQFzArAoKCXkJy5cR8NG7",
  "key18": "4S9YmuwHDRZfivEvoCWGG8fWZc5KNdaUW3NAvehCuz1nE5q8AejRtAS2wo5HZ9avysEXWeD1wkHjw1FpoSgTm7pV",
  "key19": "4PgdBWa1B2pZhpT2bAsrqxahG9RwqgMLJ8Yn3Q25JE8yr7rQEq4XY6dXDyacgfuYjH2wjfMtKhRAr1s1vC11ApaL",
  "key20": "3CLNd46LHPkGX5AKhUdPutL8mk8xsWbSY6P9nPt5nHuHfEjQ17jHESaTZgudk5exS6DvFxShdoTMdPRSr4fPoZs6",
  "key21": "44Ptw7v5Fpac8fJnpemnUaScUdFa5iwAppeBWJhCfu3cuDrw2VLLKjqPGQas5U39tQAfbMiSFnaEEYkGHiWnk8oq",
  "key22": "58cUZyjevbuy3LETeLVnLyD2pPqkvV2LqkPkUz3Bbq5AUr1soEePpBxiCQFhQFxaAQ7o2mj38p9pzxjwqRnumXBE",
  "key23": "2iw6ckhTSBe6zPd12QXsKJ1K1LFhSzBMZtwjM4CKGVZ18RHGMNy3SW9pz3kdcZYgZ2pe79sP94PuE3EqAuQGsdLs",
  "key24": "3UwR5unjvw6q7kGen4Bk2sVqj3GbNjoF89k9r4PK2S6mRvyoqYSK1db8bUL922Fs9UsdycpqxBDpHDwU96tmdfCe",
  "key25": "23zevWVKzuAkMLQtsrQMcwCq67v2XAGAaqTnwVkPa7oNgCks6b7ZnsX4dhVpb71gKBLKivNE2JBvPeitk9B5BbW9",
  "key26": "5s2hohYSTnHXPeavkA4D8pvLWLsUvQxUZeaNwyp5PDTBccZtYEvJLQav9qMjSGmWwmQrhDiQaJiKjr4ycohosuKQ",
  "key27": "zAfQW3mMRhVLaicvuizwXj7yHVx53KAyVrcQi7s72U14MKbyYo6N9DubDkq6acbL1Jpdw9TyRnBGFGmnY1A36QV",
  "key28": "NBSsw4QGVvf29YoAAkAUTWGxUfEN2LiwBeYxoNNTKyBjJhEAAD5XGMyVExV4Rbin6e5ieLJ9xDVwHoiJhtTxAR2",
  "key29": "Vu86HrqBTcTB3htyZS6UkHwTmRBiQ3FeF3MCT8CrLdB4E6MXMwWym13HRQQy2kYuLx5bvS4JBdLaJgcirz8WUmf",
  "key30": "3BXB9yNX1KPgagqtoXvKJeMhCsq9pJ3s47sTEqQWQD7kUtE2oreanjhwo3TPudfdSHyq81anqtx5e6CTj94pfSjy",
  "key31": "27WdM8QNjPqgVZuB7y6RDWFefzZPQdgWmA2cqzWh1Aug8gEuLyDGLTU6PJJBStF4maXgRG2CE6pqVBi5GEeMD9ix",
  "key32": "PFhmrz1mY6qhTRojBw1wdV5FbMNNg7fv6RdrVkUzEhigVJNzGuuBquwWvRCJV4JvXkFhXzwgep2UqXdzGCxXgBU",
  "key33": "4Gn722qD8nzyFyzUWW36nwAmwy9xd7jDV2VEWA5E93PMHcqDoEVUnzW3xWiWHQknBj1zb2jaHehAyaPEm8NKRvDF",
  "key34": "3MMRHWjnsJUoZ8KZ5sAQaq1XBqEJ9G9PSkeDfHCJagpS1zRuMkGmg27VzX7Pqxn7L7cYie5U63kc76WrkMyH21qG",
  "key35": "2oyeuLxbn36Jh9Uh519AgDHhA6Q7gHWKqbTNRnvmSwn2EB7E7d7w8LcU4TaAUM6iGBySStVxHHPRvePTDWPBNqbz",
  "key36": "2CaMwLdQAk3Zz5HSq429RcAYv71nSJ9intwrgkmxeveBE94DGooZws1voGjUTDWbPHaGEM4wQbcAHPdmUFcsuJnd",
  "key37": "3VLVd4EwWhnyJoRphg58qUfNQH6eXyMyGExMvaxkewYE2Y7sapH9jhTayq54L8Vt4fCYoYJDNkZajeRyDJcAdnj",
  "key38": "3FbsgfhiqAxmNwSz8AoPKWoKP56R9F9EEuH1Mkwj4Y3PMUXke39ZMwFCUAB5bMqZmXMZe6jZ3XHv7Msaq2ND4oeP",
  "key39": "fgWAZDFU4BLgkk3y3UBqZ7qw3W3fyog7YFkrPjAR7tNPbRdUEnaPjX8UJcvTwWk7byfDB3m3Tcv4TLgT3YSrCXF",
  "key40": "WZxofFa1ovwcsV1HXdEFbG7DGiFfSM7hayEseen9T39GLxprubGTTtTVimDpDMMLWgeyhSxtp4Lz6aZGq9GYkrf",
  "key41": "5XWLFvB6PiYjQzKErtHryArfQULhqob8bZAwzMr9gtPVDNnYDai62V3Dq8yBht7L529o9yYDpiYdX3v9kWbon31y",
  "key42": "5RujDewrW9UU4KRTqj7K9tgxAaKdrhX19cfeQZDvwC699CuLG543Fg8JtD8VxQ5qDTYKaSVNx9rKGTCawUbDDcN5",
  "key43": "AL29P69c2efGRrPAYrhmqjZPRzued41u85ipdVtmAxkeWPZxx1WBPQUF2FGBhkcufBvNv7gNWmYZv7mhpHdS5tB",
  "key44": "4adMxoCcyVNHsok9eqQH7jvnvnXbszMPDRb3Jy8bjY27mXhbPdLtFW8GcjDaDLGpVbwkiSUhSAzAY61yr8PruiXX",
  "key45": "4VdEGMUG5h367RHRaDZzZwRp7kxTv6SbM1gMTkPS9WFtwDYDV5zaR27vbfW1CMUy3fbEpZVaGRGt3n69W92edM42",
  "key46": "4i8LB65x9iZ5vKSQNgHSuAWJNqvmkReQENgAyzymUyc6MPwnqzCBdGdQ3K4Pe5ZmhEwUatvW7FhtRBK3cxoVMM1b",
  "key47": "2yq4FsGXCgdWSMjMALr8nhYY2xBhS6GBQAiszWnmHTyEzx4doiDMQk9d9Tp4nPMQZYmtotb6mdYLaURUjoMVTXKf",
  "key48": "jYvWzDoPwHgM8F918MYaaaqLDL7SAf2Ve5qmBP3enp95cdJ1oSCssubqoCBH5CCfbfztbvH4Qq8DVX4HAbrKHNY"
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
