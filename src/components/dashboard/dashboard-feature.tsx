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
    "Rz5stdpHbEEWY3wypVdVerhTqkgbQb4An7gByUc8DkUJJrKjpZmm16sjTNPuHucgGsUsuo5p5qyu1cGipM2Ew5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JgjmN2BuhM451mHauhc7mKztmaSxyeoJ7HKBYxUSxmnur19WooLgFoMhT4UPzcX2rJa3o44zYo4M6kRozge1bBQ",
  "key1": "3unUvGDfKaZqbCgVZVszAhfW9C3kBdbpW2gyKRprPJMqfuUpWFLd7vn9g5919xtJBVooHYCMfQWU5utbNPHAioYW",
  "key2": "2qDyV5aAfSqC9YJwrKmEvjSepgqn1W7hCNYypVnRvLVCCG9ZEogBK899Tw5oq54sQVGrXPn58MeNH3mkWtFZ3KX3",
  "key3": "qbQJydxqS8KxEV5sr3fUyScx86zxMFVx9oSDvJPSGJacgDqbwHNWruU9vyCsCaooYVp9Tf4YQMFhjn7h8Sx7jXF",
  "key4": "AjSNzmQgemzKNCBopgLSQkghyMUpm7XfnMP4FxRNXsrz9a38i5CzaytzmJCy2esngD86dKz8Bq7jXSVPQMvBYVf",
  "key5": "jeVnYbUEwq8rmmRiwFqRi6XVQzQdm85RrbHXafPQG53zDaCNhESkzT9V6tfdJjTgLc6afZnW87G8NC7Krip5yAh",
  "key6": "tSs9qBbWjFjd139xgHPwvfQdW82ddUz8GQ5A9WvEPtGqncjncVmqRuLBWCwjpqQ5R1WfeLajLW1PKxEtJugqdSF",
  "key7": "28e9Kx7Qzn2te5CHoBDb8LUQtE55so9VXW77Ds6azsWDMFrgf96Ltn1mPB9GDdcrrk4nRdp9wyHixJ5ScErgtCmK",
  "key8": "4dU7kkM56giHLt8KxoyCnMAc8ngDgE11HUdSt9jTHiaccA1Z8ebRK5Wq3jMkYJB3WiTLnVrHs9DkGi6xUM6nKbDk",
  "key9": "4Xdd43vN6jBHfymsak3VnhLxApX4M1LE2eKRJMhwZ3z1nFWoHsQu1fFof8Bvz7QKn2ocpgr9zkgxXARq2sjeotxZ",
  "key10": "2KsQU4qr7i9FjzGDM9wnNCuaQxzHAXvxaPM8R71di1ADzUFnNzbtrqVrzjNQFpbd1AP5q8bFhaFiPzhDPnC2Tjww",
  "key11": "g3gTN8RoxohtQJk6cmL9UdVvZdupcXHdKVCVH6hUH21u4KA394w3PbThJuZXTYHdgF3BUoscDeWJSWiZQFQwAe3",
  "key12": "JCeNqxKBqst4MrxEML9EmKLFxM6Tve87pnhkyejwfsj27CZ1LBsbyZ5KsWjjnCsvRNr58P1k2h9ByZ6hH9Eq7De",
  "key13": "227MKmz3g2VY8Kr8XTtfrwCVmsFDH9oKx4zzqEG8BS5RoGLY434rWg7vDP5yAg9wSJk4SBDhZZVNyhufNzNd8Wg8",
  "key14": "2zoRvznUAQYfs1kr7TWq2ZDVwd65uSA9HakSCtusV9GUTjLYtqSQvQ862jBjxmp69wmxvLjJby8yA32y5jMmMoK6",
  "key15": "gfeTv8Fw7svShtHCN7Pt1HfnCtH9qiEBhcrR4Uh33pVkPks2tALnxwfZK3wQhFZ3o5qWX7m8cKrm5aRd1Zxy7Jg",
  "key16": "4UyhThzGakQNGn6yhnuvmt4RCTo7ZXE6zwVc6KcwHCGGM8pZYgaDPs9vqAwgXeyNvisS32TX2DxnMbYLjdcx2YCK",
  "key17": "3iNsnYnYPApCJM44J7xEV8v7Sbg499tnNo8G6dj8s3HSPfZsCxWf18fpzmYF1EyKRVxB9FVjcxuhKQt9gemEnbNr",
  "key18": "2DS5vTxZyGKdbi4XXCXoouqnP8z9rEC9o7ftXcfUrNRDf9vjq6xKZBRPoYowmghco9RFCCyQn5fo6hGdp1BZdXY9",
  "key19": "uhzCU1189dLuoRSgDMPomjEwHFoQQUgLZKYHMTgzJTgYshrQFSZ7qAhqNeXm3tnzyv6qx3ph1iu1VyEmLsiGChN",
  "key20": "39vnjh97xoFjfbGC1RMNNPwiDgD9mMY5gwqxDCdKJZ14GESf6rZiUqxkujUewgot266qRDV1YAhGbPYS9Xb4XykE",
  "key21": "4SJmSy9PucnR7d86riWCanW4jLdwsUH7ELQjuUMF4DUhm865s3GMubsuyk19schf5xT3tEDvp6brUapyzCwYrZzZ",
  "key22": "4YiKzNHDRX2nJJMUyWsxure886Tg5pYZ5SZaZ3mpwoo3fdj9QeJE65Ks8Kv2LNhfHrdnJ33hD2CZriJskgXSW7TB",
  "key23": "5quK5F99ab9oawTq7i7nEDoPqNfYWgrL6rSJCPQfaoZ2YWdRQ95PzjL1H134r1Z7CZGYUNa1UqQJ1eFeoisYAiYt",
  "key24": "4KCYbPCtKjtKu41h9mWdCYcSQjEDw35xvJwo6DXfD5vxxNzumy91SwcPELL2KXGf12VW5WVfAAnMU49oacgiPR2g",
  "key25": "N7Vv9QtyZVVi5GkiDhTraaorL7ki8ZZiik2uvaXcg1JVEPYQMDZAKUN5fKqpCEiVU1kMuWpcPKqzrPNtYEQ5tDH",
  "key26": "4of4DdbNAub6YLdCzuBt4V267R6JkMzir92wg8HcBtRyQAQpCA7fKxsbbk8atLWHSjjz9vRF2zwFtvRutZjX3xfG",
  "key27": "2ED2nqPRsPAeoqJg2LkyyjXx2CGkj61FkyvKjAZaq8mK4FLtSRyH9F99SHGRZDe1WDv5uvsuTvYEzH4LLyzpw6CJ",
  "key28": "38ZGMUCJ6xjba4HaqBD8FjSrJw6S7dV2953n3T6xc6TVxTbgGGDZmeiKBiikLc2NUb9zmz7KipLCYRcr95JxyKTL",
  "key29": "54KEtfQsrfqYDKrUtqbu8WzRTSUtxGUC5ExVL4RernJTxW8Mw89VuCwoUAVhSNNHccuaa4UadVDseeDBG1Z9nHLg",
  "key30": "3eK2UTWt17rKAMrQdcft7BzBW8JAgdASuQCEPXfEHoKsFESiEF9CyEw23CxWNi1z9mUvPoJXaWmq3HJnQtmTYSo7",
  "key31": "4Zquk18NQHc5vzNuqgQErQW8c7B5ofSd3TzA9zhKLhV1JNPvY9gLFJZTsGACSfBuJwh26GfDsq4sKE9w2nXrP99T",
  "key32": "4FVYdD2VccdxPcKyC3Sj2QNPpPMRhcFeLvthKz59NTgKPreGLKrkVWfoJzwdtagbE9azwJBfhqdFomuLHyFgcF34",
  "key33": "38wigZQV4wH5RQ5qYUsFUpDppbeJRuKxJQwf2adS8f3aNBxhG2dSFT1bonhRdwJqivAbdnvG3JV3tpFZTcyUCDS3",
  "key34": "3PZJd5iYiMHeA4jHybDbrWhXoV3dA8KXVnBb4z2bq5MkguUPkw32tYDrZn8dumJBKfgej8pcCpUK6K1PJHHGoFzV",
  "key35": "4eydHC8iahhvCYedZmN4vTRHS3zdn124svU42BYcjMrV9nwsLispH8gkRJbDUC4Lm9iso5eMVTLo3ueTQi2HnMHJ",
  "key36": "2YEcxY97zRdvatyWaETANGh2V9X58x1BWgBgoysEKDaxCWfgQyKXKxns4wRBXScHqyqzNDUqnC7eFEMcV3PEM3HQ",
  "key37": "2sFnug8j5YSmzomQf6VDp6bJvQuW5u5htwnsWCpD2zSqm2H3JYuiJ8s11Ci8vPXEK2REBAMMaK5RiECPCgiGvhed",
  "key38": "5ALHYsnormdR63n4YVsxYaB7465beSH6DuRJwsJMb68tkthFYyruGFapvCG59WNbwSYr5z7VBsFBiZ4DEETMHxak",
  "key39": "5VUyeAbPHab3xqoFkZ9tBAhPMZieRMDC482PaAbwbs9zNyJN3fibAqpwNvsortodqGfjfpiaRg4BqgupU5qEyXEG",
  "key40": "5AoAAfNrySir6M2ruLf64twSW25VpHJ9Qo9smLzgva4b5C5kJC6KgFfpJjjy1DhKX4Jx3RRtL5dCkhstYVq77KJm",
  "key41": "5zt314ZPr9KxD4P4YbFQwQhxpFtxAQwZsQ7wpsXpKYigWHhsoexgECHhRNiDP9k3XEPD9La3khy3b7mBe675kvXn",
  "key42": "3viCmSni8Vu27SbCe55bznQ4jApErvRCfcdXs2f82gahHVti7TQf2SQANxJk87WpeP8AeUfgLp6Yr4LwPWdtYqE",
  "key43": "4xTRAb8YjqhXzgkJahR1ZXs8hSJeu3moJVcrgH2SQ4DDGA65jLYWMnpxk7g1GXhQo7MJrqVj5mt2m4niW3UCXQRu",
  "key44": "Hy2QbfKWytxZpgAp3Rk2vs8XSaETqw94hSj6sKLiBicbNCmUqsMYPk4MYckou3nPGY5wgN3d79ApotQRWwkg44U"
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
