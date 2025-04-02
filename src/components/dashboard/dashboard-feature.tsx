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
    "2XV3qMS8mQXPcwf5Zn5wA8DjSTfHw1tyKKdcJ2LSJ3oYjnenxLLUMuakAQ6rity9F67AjvjACmPAtynKDYJBHJXt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "A8yDRX61jjY6vfSyVGFXPFssLN7G2AxSEsEamvYPgTbVD41pHKVkxGqZjuruEUgmyHcE4Ebh3CCNS151FsF6pKc",
  "key1": "5aSuqF3RTR726j7yNYd7XnwAKjp3qCFGGh8EzmheBhYYRE96TjoMmVwGeAbAZLaNphTGE92LGwUeEEN1rNRxMap",
  "key2": "4QEdno83PzPyotudigLcpPrxoZeWgoPPheFmAF4ier6vFpJfnYBdZdQPjhg3zcxMUZBHS8PkByL962Cyuou1wyNL",
  "key3": "3MLzcEUUZAJwFZWUgQdgefBBha6c8Z1a3ibPaXcJnPCW4m2YX8nBa1vDzR9qdvM941thxHPTgr7L81GfRgqBxgAU",
  "key4": "5Gm92SQn4Lo2kwWb9LDXnScQniKt48MqhSoH5f8dLopep3uToSDAjAJduq5dLeARFMQZz75dtf9MJLRGbRKXy2v2",
  "key5": "2oLCwoqeL8d68swXk2vs3KPtMfzuP8vUpXd2A8DfzmJigZ8jaGUU51vyCiXiKfwCeBkHfazKScZk3geN8Dm8YVs7",
  "key6": "4JGNA2rVkdP9TPYftKYPBcsyMkL2MvGYxSYjFTRZ3iRUEFmDnNNS7mXTZkY76ja771qyGSJxewfurxANLabTA4B9",
  "key7": "3iVe6LcHka5AZFbf28WFFPCmUpDW3jzYSPn8wfT288NAEQhRmvbLYiytZzJzsykXJLC3vLKgMBY1R3iXUTCjs38K",
  "key8": "28iFMv5rMkBNteLKkSEY9EJYroMY9GWSm1SADRxcrH7bgC3iDchbH9zoQ1xUaQpmRcUxzxm3toMYCwRGjLEk2CdV",
  "key9": "2jMyu5u6ru7YQaNCsUNDGHH41m3YssK7MmmRhgDQbKsh3mmESwFTJ8tt92cHUNZTuZdRBtvrZfkLJizPtmrxBPsT",
  "key10": "HYGK23tjvxEC5RgBrdCs9wbpQ6JEvAb3wMLmyR2kNmfiaQ3QPuZ8a4RVkyAQwdAD1g3SCJ5jNK14xGthezZ9BB1",
  "key11": "x2sNkejpFWFb9owsJY6CLf5L5gTg6Sh9QLhEZakkJz2Pb2wiho6pREdknuL2EfmqQMtbAupbueJPKfBD5V45XW6",
  "key12": "61WC46mLWRYmjcEB3YsmXXCwNRLtSUcftBRtkb1UqMLU9f7j5SLo5c81Ha6b8dHBsTTy6Ww5tFCjgmg9jYmW88Rc",
  "key13": "5vRw8nVmt7edBmffEjyU93G2SJG7EYvMZAVzhMqdQGJj7aJzgJ27eiuAHujXz6DCrqLUMpuF5G6CaiXbTdvbiMpL",
  "key14": "5brtPZ7iEZRBtkUEWpPbBnm5oWQUdYtZkZvCGJw1i77um3ToF2YDkiW8PjWHN5r8cECirsdChjpnh6a27At5DfrL",
  "key15": "3MQkY9MsvD6nPqVbk1DLGcxzQjpib9zxXVpCy6HPi7AZiiCAUpced4PqNe7JjDxHHY9aLsiVBjW6aKu2YTKh7z8c",
  "key16": "3ih3sYx2KGtYzN9XzM7SDHmgRY7jicZXWsnB7u5n3zUvSQPWUeT6n6gJhSMcVfUkH31T4jy4yNtJHpiXMmvyz5vJ",
  "key17": "tvHgN243g5rLmXoAoX6FYBGSNZEjKzTmUZw8dsbJyse2ir6PABAvtM4WUiJBkgZkdbE3zetk2xHJku5Czz1PQVK",
  "key18": "455sBHpjeQf7bjPu8i2fbgJ3sCaz5K18NKTsNwA2reqPx1ND7W9iUkk6siX3TESEaGGaX13gLq6733QZWiWvXgiF",
  "key19": "3W4QdjkcabE4SksMxkf1hUyUqQoMr66wX5tryrHCzC8ukFAWf81my8JgjFYSxZbKQRe5Sw4iYwJDvAC9dwCwWhyx",
  "key20": "E4T3Gs4CyGewpq78wCfjxPah2jnhzwkLxUXMHLpujZrzAfRtSnAa6kvJZ4rW2DtjcJNtQMHshTADhj7r9N8S6ht",
  "key21": "3M1DbXY4MTtH43wLywZh43xceiZd8DhwYJMngRRhJXEM3ivyV4M5uJivSUhpp5iiG6cHtp4UrXmYurjDKfq5HQtN",
  "key22": "2xBYBkyFKotVkdkapmzKXcEbinHH4P4F9dLREe5rXxVJj1YfF9ogGi7QvseDe7UzuvTLa4FyzU121AXmj2vy6GHd",
  "key23": "9HN8z4ZkPK2Dr652bRup6b7zbedhvZ8BHYPGyd5DVGn8hN7oZtE43kwWrm81LX2nGDoMGaRAXKRcoTxsfWGD5cS",
  "key24": "5SKezSaSx4RqW9tcLAN4hMAa7CVDn9A2xJccjuxvMJizrmgbGHkA6mnQZdKrJ5byhgabtbSuDA1nd1QzNqzf3JYG",
  "key25": "5krgPNVgsrkHySa5tA36w853r2AxADHDmWREGMBKVbmMYPsuymoPjpE3qKsu6DHXSpY4o7B8AsaGbrpcokrki9wQ",
  "key26": "32JbWJJZdUq8gd5zo2aiqePDKhcXXD2i2znu5ywSaSDgJgXUkT6mChZ6Wz538PZ1iB3dwJrGGCpgczutAeQTaa9T",
  "key27": "2E8RSu14S1duWfxe38wTfNFTyPzfLzZDuPrcSiWdKLvvwPzNUgGouCVcmeHzAC9hm52XSjKFDKMD65krojWqk43",
  "key28": "4sQkzuyn1gqu81cGquENFsSKkZEkFhKpRe8DrC8J42GoKjFYxt1nc8k2MALsLJJV8sbb4uSeiLJP1RBj2nui22jL",
  "key29": "3byqL8gqNhYSCAzGauXpKBVz7VHaKZ1PUt8tSV1J83ZfntmfeJ3BwFR2Prv1BhUNqqHMeqkfVtMrc5hpAFRu1FxN",
  "key30": "5r28KAREWW8yv6PcLJJ2YF5WTVRAvrRmUoNm1xqNRHbCLXFV2ncLzk3oZNZMDWZPY178gVu3kfCeFDcAMx7mNiXa",
  "key31": "55WvZnsun4twKPGRyeBHFhESXzcTTvNNtPpW2j53rR3QAnCtr3rVjTMWhYRqp3TjFmNB26xrmac1EBeGqbVeog32",
  "key32": "32FssbbEjLk1Ev6bSUYQWUoT2MHRgE3ftfLmpfiCbuZENAfbeViwLVmboAsdxQQ2bQ4ZgcVV5EuWbi8Mven9yMu9",
  "key33": "5nmWzRaMTDa4vZQE4UXxQgxXdFM5d2d1cDu4QMsNATq28LTEeWphKrDCzc5bpzQXanSebxWTm1tk3fwdD2LwAzwE",
  "key34": "5Mctx2j2o19xtvLNcX4n42GiaZLtbEbpjE2iCV2GijsunhiP5mLVoGvhEvkQykD5zLB5epziR68KB9VFKTg4Wj5V",
  "key35": "2C4oGezy2fUNNpgEijJn1FLwWUvBfACmtiD2FGLbNzPtupKcXgzCvkHdPWCTWvkjuDUYKo8BwnbsiVsCqfV54fvc",
  "key36": "6WmppohXr3GZhazidkTra38NwGzcEbc2ed6bJVQXvtE7fW7j6aVgZoKAE2y1skG5LpW3jLN977rDGXKYMWueT26",
  "key37": "2uRi9ga5mNqByBiRLCQz836RCHgpZ8hN43SUx2xL9tm7cYNkATRUDK41w9RXJKv4i5S2bEaT7yesyRa8wgv3xMr5",
  "key38": "44e5gC1bo9mHcYeMK61EYmcqnhGdq5K2cz2AouXujCsXF65K8qf1pyMGJ36AgdA5htX6iJgmEAruXTyENMmzaHA4",
  "key39": "4kCPcaPzJzpet3rSJAwM6JqyTCvh6y7newD3mU5jJWL1KCHeHF2R4u6GB99KEFjqYRJEwKQ3AEqF158MiJoHjLsS",
  "key40": "4RgiKeaVfMa5JxXt3PCMapbse8zwW14w4cnSvyGF8KVeNEFu1zyKcK9xDNZ7yMoaREWsBDJS9KMAqyxDxKAXBrf3",
  "key41": "61UHSYS9UPpTgUAWtx1htKzQU1t1nFUmwuLFUrVHS6n2T4747aWwSaWpWuSjaZUYnYbkPPBGHN176cE6z1SUgdXR",
  "key42": "5o5NFpsiyLCSf67MvVQ45E3EefrDFSeixcborjw1PkxS2iMAjupq4P2TGCwiTqYq8ZVH8seCxaVJYdc5mZQ8KWyZ",
  "key43": "hKDzATCiJZa5C8n9B8hjVtoJsDshs6Ge2WwsSGjfFnjhXe4nP2a8ALEkGR1gZHKNuYCH4XdwmpCWGP5TdHqy7pE",
  "key44": "4AgmzkazLgq1LqKg9FHWYfDkPr8tj2dfxfCcFbtje2hZqbDXY78mQbEfH2meQLdnYKWzGMwEHuRQHiPcvDsyzBbd",
  "key45": "jzYoaV52f8Lc5ALqM7B3m6wbYx6uSZyAZttVaaSBwdibRep2dqb8WMo7aLC3HjPE8jeBYLYh48WiFHKCT36vSwF",
  "key46": "4bchdUYCHafdvwV9mvhkVPyfoZoG2y5U8dTNGUmwXejgSUUYsthcayg8ZaGkbGtZ5JyF3r83s7BD2hDyezQbGeqL",
  "key47": "4A79E4naTMLViz5wRDTXp6boEKMum8y9g1c5n2YBNP6wUNp63N4KL3v4YnLLyg3tAAkWAKBAH5UH586imrwwbD8o",
  "key48": "33omZnFojYENuo5zTJrnpQoefyQ1vZg8pthsfPzro5eJETkVuorYpS34cf1xks6qa1aUCkG2HNpku7N2wad6BQvG",
  "key49": "NBXy9FhkwuZvDvAXBG8TYjhRJ6twzf6Lgnnd9M4BbByARxqqWGVfomUqjLpWLXJwqp1JyXbzaFH9SpPEBgcP9ru"
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
