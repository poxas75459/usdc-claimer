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
    "2EBin5VU4ehfLknch8mF7vC6pPwRwXGs8KgFf1z4RLUNgB1EuT6mfn36YbhAgTuuikB1MxPMdqd9KsYctZwVWYtJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JeKb5DSrk65NF4xTq2uu2Qj1dGw6jnqcSGx3srJPgT8E766ojw8sSLiz1tYGmCHLvCE2AbCSCeWquYveG7Pz5uQ",
  "key1": "3gZboHju5wdvS4fcuNDt4wDYXzMGuxNm1SRysF9grPhw5w6cskiW49VU8pB1bfTcevtb7UFe1SePNXRobwoL9tzc",
  "key2": "2inbFaPsnCa5RzXHTQvasn7U7j9KCrJj5U2c2jVvWPrJiwZTNJDJL2BjCFkuGvrp8Ee1yhf1Bzo6Mudwub1ErJQz",
  "key3": "21vqEAnj4zcYCCRbw88LYcWEuHRJ6pSnamvJHZfNiHC3uPEeEQeDp5MpUuPY3ywPRVeUHweLF1vk66fqJzdcZyjC",
  "key4": "4xvdmq7gEivwNRoUJu4L1c3PZ3aCNrNJtypj9MDNDT4zsasw3rnQ63A5QfUsvDNvzYx2d7FPx6g7EJfK2rjSKjq1",
  "key5": "5TV8iwGr1ja6fGafRaztVVeKbm4vSHSVMVjNwkfi3DLprvCRFh4nFU7f8NmKTaVJ2cBFGM9wH9XGUxW2VdbtwvMt",
  "key6": "2jgSfZNW9KmgaCZwExdPQtj2Qf7a5QG545VQ9kh74frFgMbYTvuj2daVYVMiAGJWRxbG28ddTmgABDGmQBmxkaje",
  "key7": "2iNWArg9wBdWfbAgi6VrW7kko4zCaM37xxzuXxurCFW7m5EBaDXouTUS919ETFk4FjPV23Jg1RboiMhZefSAgkqy",
  "key8": "4Gc1Ti8LkgLkeX4ieJAFiD7Csve2tniS7ziqqgCqdkkjNd2oMor8XY2sLrsjLoFErmedmu76x9BD8f57PVFdvJvn",
  "key9": "5cQKhc9iiTY7kFGgEQK8cK6AkYM1UGzJ7K2GWXDs9vJMLenjbwqMj75gqH6umNy4uwo3igoCpaq7VMXnCrWp1riy",
  "key10": "6781iFoybSqXz2irJJ4sRbBmK3ooCTrbrZnS9Y9Pj4sm3opt2JDTxxBrTpRLFAnZrhFbbFumQxg6D3TVJYbxt5tm",
  "key11": "2KjBc56ow6qf1cfA7TCXH1tVUUjM3gGByHEBUavFNzHBqYgoHNPYtcEF5s48iqezrhLSZQRaKq7noDeSNN1RGriS",
  "key12": "5GPZ7SxwZ9Q8b4cAde2x9K3jfPQ4S4fd95oCxmTqbK7u4SgTYy9UCjrYV2saMZRJNSKtcNcps6MMXLBGfyGQf63h",
  "key13": "556ngwmNthwYctYSHCgJ4GGyjNYaGQssUJSS5jfTGSykvdZ9KsvhMcATa9PRG5CmsD6LoWfi6dL8GbUuDLm7RX2g",
  "key14": "zR8byA2QSg6ZRfCQsWwanubpVqgcndw1KqbNf2zxrZhPJzGLrWXvottP6thvW8ZX9yggW7jcpN4fN8kFUqMap4S",
  "key15": "2cRJEDeedmxYPVnNkJZ8gFop293MHmPa948TkkYNU9KEuyLq3Vu5SkLb7ck6ES4CUudHHmWrNtJotGdXbzYuzXt2",
  "key16": "4damd16PRY4Gb2uwdFoqMSFutm1BhADKBbQ583PHYYLDUsJ8ntNg4Kkq7Mi3CMkj923Ham6SekfMBLrh3ysGkXnC",
  "key17": "3ffYtm1WP2QHquPNfBxsEe8eK8oCidX5ZLFm9ytnECb7y4rCAWhVKh4PAkUgAfn7wSpNLEaXwrGxWbZUq8z3X2eE",
  "key18": "2k4DjPMo1MAvDEDWqh2qntvAqEDiV6qtUKMZB6RxgyFFXyxxULAujx8Ujy6tuzARz3Dh54DE4qkTQb6vve7AqSqu",
  "key19": "5vRQjfYeNv2KXNzTHBozuJJiYNRZVW1XFouvjJAJLSnq2hf3KZ3oNgs9mhkohpjddPZMWnr8EzePfi4N1pUtrNSg",
  "key20": "6KJvSWQLWjLQxhhhhRWZ9YyQBpEdhRV6nnxB6Bvok9EWNmKyjzygjmGnKasc4NN1ioM9WkaBuZcg8rhLxVZvAQN",
  "key21": "GWv3TmRyXnEovE3KauMm4BN5HX7TaPaRc3ahy8FDSJAPWiHrcE3mgtwwTafCjZ47ibVP4TwMbq2143fEUkZWNqN",
  "key22": "g9L8cgYxGKC7AQbkaMg1RbESqoFb8Nf4X5cc52za9zrxEZbumTwxaVxy3gwXE2CKiXLroku7TCkvBTvXcfMm8Jp",
  "key23": "U1pQfEHg51f6vfBoiG7LrjNARaa9Gc6i4D2JW4AVE7S1KcBtNASDQg7NxN5JURK2TwoZwayvN8gXP1XLNCwVEBg",
  "key24": "wddbNZ3zPWEkwcfGfdJ1J3yMhuUTg3VdihN3qXos4Lbss9mdtJMCcx39eWhGqBXZhZQFuBbuwQE6TmjmuxEUDCT",
  "key25": "2vpvz3GCMi56oBG81MayzWU73pdhmypHD1W59s6PWW3PCBYWYcVdeGPg5z9xS4MnexW7oPdXUtbHZaagb3s1rPkX",
  "key26": "3xPyRkunhBLug7CxCsC7fpnKyMZubHP1UKxeFBzs1eFX4hgZLEVUQHGusxPd27Hz5KbRaq9ujiWtGs5FEspz1oNn",
  "key27": "57iVme2EhgVg2s15KmGMn5Ba6xkkDx3EuiRp4YxuBtVbUDTYXJkAmoqMnMuuAd2g5K64bUf34z6BtVaiLXErZ9Ln",
  "key28": "4dLinkNERCwFXwo1khmtFpGD8tkG6Gk4H6jx8R4HgqFQeHeuvJJWuEu21cvoVXvWecVizrmPpr7wqhFbnHztAfWe",
  "key29": "2jbmKHSeJoqPbvDRYbdKNzxLGzTW8ZaupegXZb2Xhta98Wo9HmD1Ypmvi7i8JNgx3a5Fswkasb599sfNMUVRi46Q",
  "key30": "4dszvqXdj22xKeWWz8ZCsu4qp2qWatP2VdahmpW4hScV5szqZvZaoqpptRyiu8LzaGVbA7Snoq7yTgmjNW9MXoNV",
  "key31": "32ftHkdY7fnQrYjfCiDJczmZ9iDAmWEhWQxC4pXh5zn3N188KecKon2V7TCV6Psh2xsfZQMGtfn21DyudVnk6yxi",
  "key32": "tCvxH1iavK2jTYc1PUbVtVMcie183xPwn2UyHcH8dozUY34nxjwVHJHi5gqKv9HaxvzVNV4MAqpdY9xnEhjeQPy",
  "key33": "2Hf2x8Va3ovSaeNFa4QDkGMRnhapVpsiYymPkWuGU9oUC6HyqBpzzMTUPS85o4qYQGGmnRhGK2nkZ2phNKJiTZfS",
  "key34": "3tZjDixWL31hjr3Z4k9yRKrCTAy6q5QHdeqoMHLDotNDNMVanKVy83zEJiqqdjuJy7UX7ghhdngbHJNStrgDQYCW",
  "key35": "5YEkVrS2ZGAB78NUw2tq9YpADqr6vgNNgBmzE9ZbSJCHCmwPPMprr6aRZjgBjj3Np8gvhtuUYPi4N6j5KfJgDcB2"
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
