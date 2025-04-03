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
    "yAyWiqdKyHn49RdSVP7HwuEFeaKpXP1SFZgsohfdr9hFshNfpy8JzPU3gptkNh5wSYG3svyAZASwYktGeKZs5qr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2W39PGaTtddqqK5qEcUScX5VpnjL1FBPEmQDQcAeBjwGkdUos7YNYeXEZN2QwKjxVz9LvKbX3UPFUhVWZv62uRL1",
  "key1": "4gPynhuAYHaa1GBdqMuHNWhXnF4Bio8AY9SuHvz3SnnU92qpo5rx3zS6NaPY27qwz3dQYwf2ZdT3zu5m3ixY9BgG",
  "key2": "H9NCdVvCyWvWZoV8scHegm4vafkfYpJ7hMLmm7eqbFk98KP9da2vQ6ARLotjFyxgm9iQES9uPpQ1NKhUjaffjJJ",
  "key3": "21C8iWGdE1P7jRCAKEgJ5ZucdTmbetNVCFXJUxWirMWUYa3VmXWpbaVV6vbbVwgHErnNRa6HXGMHtgKRKhreY2sZ",
  "key4": "5kMR2w3hhHKyevwYZA97A8PG3iXU7odYAQgh1bre6Yj14a8TAimsEEJt8rDYvSzrT8ygNJE4wwT76zJ3jujW1tr8",
  "key5": "35j36qjG3JzduYVPhVQyNkGKp2LcWnGhYh4FoyMAK7bKRcSf2x6YPBH1UhuP8ZZr3FFe4SK911GtoP5UUL3eoB8F",
  "key6": "29jhQnauBgpuEwWAiNfj2EqK5m6iVzBf5FFCPYxxewcXbYTKfGvkSrR6PQerU88UgFZs1JuuAnmBmy93hGjKUWHL",
  "key7": "AjeCjGwVniPEPFHzwHfGA1v6QqmYE5MXULLb2wByZP3fjcfyQyzW5LN8b7srvK9d6VmgVzskS3tnSK8N2SLCutc",
  "key8": "4fuqzxbptm1y4RDYApN2iEoRTEYdUj5PLXpZ55K9GtqdCoaLbjZCQjMJi1bBb6DRXYuBpywGZHg9imKnpDS3CgRF",
  "key9": "joTH8m2Jkx5vdpR5W376zTLtBtE33XrWWV48uzGDE31VcHfBzLHvvzRZcF2onvBPHUebNMZYyoUNKf86M6iEuyg",
  "key10": "3fTcTgVxmYCFYkQmJCBACiUb3jQQFYyY5oqM4MBd2dgWBE58TwbWuvehdBdX2UbgtrFAmoPyv8q5KS6WuY91N97Z",
  "key11": "5PftrtJVujh8KmdFjyjEyC4UpLP9EJ2xa9dDqE5tg8JDTYH4sPx8rRNmfD5FLdVSsAahrGqn6L52NuSV5yVEAJav",
  "key12": "wP2aFxtUqyG9WomQeB1TFNgHDm9L7gyqt55iMzMNpBNSRPnhmQzfqo97Rg66fYoMEUkjQ9Gdswpqk6PeGDFZQ6R",
  "key13": "5nUFLMHVCu82dDmhkpt15LVCH2xPP6ePpYHM6eZ2UjDuxGifKT9XvcwiqGE3mSMBQG7QkpWn2sxLoU3Nobpwhnbn",
  "key14": "5W5ouk9cx3T1yHSeicACiefc5qNVfYRu7Ls4XxYMwvzYJpX65VNuWffoAUKuhxdCmwcZRSY481jq2tpXhDJT3AVL",
  "key15": "5TsB1c34T185VB4k75JNwvNG5yJqzATCK8o6G4CaL7mhW4DzNbsJ7KSnciTPiaYnqKRCm1YmW3xyVTaWioFh1tin",
  "key16": "5P78ReaG3D1Gg4cTmbMZGFUWV3B1Aq2HejpZtUceaHJjkpK1qDP2TiptuSLHpCHwxSzxJy9foTPhibVjUpJ543Tp",
  "key17": "55tq51d8WFtirvkVQWtGsAZZeUif2NLQVHVpu3UCKJCmVnHpGbUmuK6SmJAyQWHmhmzSfY2zA1muBqt7F874jR72",
  "key18": "P2N8ca4GdZzc9DTh8bfigq5UJQqSw8HSw5tNu4P81Lz5U1XzZ8rEDQ573auBKvTdzRKUbAPa7wSPLQ4TYLKt2EK",
  "key19": "3Trtju76Ajs8nw2Qnk5fmmkk7Uk2ibweuk9qkSTzEsM3JWh59bQDnj4P7EtrGABiaNqfFCY58YgmW6WUbVkU8Pib",
  "key20": "rGUp1QZB52d9j6PeFoaGRqc4wkNNXJ15PEPMLgccThgdeeUqJGn4oDHMJPTVJF83nP1kMFy82kTQrtTJZ8R7Swf",
  "key21": "3HyFZS9CYLcLpBYeMtfUN7Q9iqsn7MiTviGMHfurNDp3p8nZewFQGtPmPL71hv7KSGDhyGdYqEc5tSHCuev2tFsR",
  "key22": "5fo5poAHLMQvA9yK7rKg3M4PLWdLaAzvnRDsq5Jd8sTv1jnoPE8Buao4zVJJfwJbbtXvyNBRW77MfAuNHNMxC3oC",
  "key23": "5AqRRSoMediXNo3drP7gQPoYsvTxidqbsXuqgAkNe8eJCXFohEQG4UfE12raETvnBPoWmTQfZMxefbBE4jtCHkev",
  "key24": "zf7oKn37WYBYU5RHmrvexeQaovDnSxhTBaPv9Xoyuf1JN3ibhJvW6eSJmCeiDv856Gx7KxYKCEKr15Rr1YE28c7",
  "key25": "RRJmNd5sZeZ6tt9weCQNV4Z3DWWrAqV2JZR8LF2NkATp4Lg5PYw4pKLwV7GPvotxpmTWNJuUs9kS7z1gAtWApwx",
  "key26": "2iLVdQWVwEcvTnHTeRSdao3WoMesMGzfM7HU48Ux8L8ZAW59uJwjqn3wphN4YTkc6qBEC4CvBPhfZMgnSTJV9N9f",
  "key27": "2sx5YrCQ6qSCyqqHDaQYa46jr2hRVH9soUcqx7ZGLVWQCiqYfDyLKL7rU1Sw4Xi7iGCQ6TsaZLz7PTriqwMWewTe",
  "key28": "i6xGRTWy3qT6VHo498TPt4R13WoWMVPYPHamRRg5T6zmvsXiVxegVbKzx26cbk6S19tZDJbn5vA6Sd4qcDgtmWb",
  "key29": "4WgE6CwQfSCp1purYYwSUhwTMoeGEfhudA1wQwDnyPRWAUQb8yPZCtUCc5kG7PUvnJhCq8XokUDNRfzsmaENzJAu",
  "key30": "44oE3h2EFoE9wJEzCijxtJ61W7jpd4MXwiAQAsnvWkJiktX66mniqFiHLeF7Kvm8TEqiRDBufSksqKHsgRE43M3P",
  "key31": "3kDRHT86xbvmSrQmDLCHimxqDNMbbb9kxE2AgBAAXYW6p49hHDEK9eKbUmRiEFG2eoRAfPaWGkNW9dLADvx1XfGE",
  "key32": "43LNDwtUdqvUHMeo9FCoaiLh7vjpPH5bsi5JQRbQ489NaMPXSczm8BfqFGTniCA5cbEGuT78kvRiVgswRcmLW9mJ",
  "key33": "5XbvZPxMRKKevHKUGmZNfyzmfdQ67EFTJRxp4aj9tqZvsyNefFG4jvvzxoxqij9sGU8erne3JsKNoxyzQYHKT38F",
  "key34": "5BrZ5jFdpqMjqgBM8BCcFD1koWkX3AXAwUL9g5WfSMCYsLKYL8ftpxYa9UhW2wphcfi5VVjLgFxbvxWHeVuW7FWn",
  "key35": "27i3dLUVJRrRw7ito7ToFjPVT7bYpTiCYp4jHwSMrmjtHWpVtxJc8iwch7dn5vqEPcKmSEpWK1CBZQiwPSyYkgqd",
  "key36": "2z2uqjXGv6rYX4VyLpSzWUKJCUm5x8M5bGdcBkPM2V9sZ98a9JaETQsAK4xqo1pL1wP8c2BpaJXL6bnkUzqARgBG",
  "key37": "3Eqv8sMcMakaM4L18Mqja4fKMuS4m79xYVvk8u7hWajNrhvJWZYJLoV3VCL9uyis9dUkkxtaHE7NzbkutEKcn1yR",
  "key38": "mWj4w2h8Wx58VkAwMRcU7meChqBqrzDD1Ezt8uTiJjT2a375oQvopJraAEE2hwaN7x1ouBAD5mVJGCecBVdes53",
  "key39": "4PUbL1ZK9yVupFKgq4nwSgevS7v89hwG4HVXsNWYCFJznT6cdbyiw1q3u9j3r2Ut3cnFVCEku2yzba2Tm1CXBDdA",
  "key40": "4m87XYS2SrTReup9TZ8ZLjnrwqa1ZhiCf4SpaMHNtx6SCAZvFv9yfKPJZNu94Y2tevN37SWCzQcfBeEBiJUCH5v8",
  "key41": "2pbebHNBJ1n5Fob8oEErQoPgAT9MMPEu56fPQ5V9a4bPsSz8PonMZSzyHobbC1LNtFNMLPiqy4tG7FKNhxhccbDA",
  "key42": "127HbwjKK7173Da1iJHWxiH74bwmaeR23TZHFMwsShefgabUzWYgU5rykTaRkm7EJu7PeRjvC7NfxtK2KL8tJofe",
  "key43": "2JGKeyLVfGBCnQWnjrgRQYdn4YhJxJtSfbbfuVZuK9i3eLJfp1S7z5pmFygRDMSGFmPWkznJR8L3F4n8AnULC1Bk",
  "key44": "2EfgVjgKHFBStDt81vU1uQ1YJzvbHMSp6sZcV4siz4SrzWwmMMHkSTpPVkKLfdSLn613fzRduDfV9mt7EiTyQzvo",
  "key45": "4i2DwB9qAd6V9eSsTFTpibKX1vyjGgrEZy3NdNrkNLnptAtuWhco78kV8nF5pzmRtg3b82f9LifVYdxECS1DK5yX"
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
