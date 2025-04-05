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
    "4BodK6GGx5U7PGRv378U7J6yBXkVPd46VUJiewUDiadTEB3n5mi3QSvb7tjUGbbwoQAcXgmtdi2k8bfBi5SKLHJf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4FJTYSMmVBPQ1sWG7BidXxrLeAh75V48kywHGo7aLtpCBpJf6kTna3bqVTHr3bdy1W5acdRnG6gL1sYQ6jeNC2eS",
  "key1": "THAuMPgMUrGi8wDaHTEWQhmSgVo6HQWpJFjcmvTB1zKycZzRCB3G4TpWfS7K9iYUnciK3VwnLUVwYp5KdJREyc7",
  "key2": "4mG3kcyNWus9aF2Q3UhJ5PXdToNaxApcj2SwuGeFraEGaboWeV6m3j68zNBWtM4EYCidcFAqKWJCKLkPS5sQvKYx",
  "key3": "4UogJjmbprhd9Zj5nhCNEWtXVr6yDiWcpGrjfW67DxepRTsiyHMhqziP4Kz6xX9my7bjYXwCs6NEgqsSGV7sPrP7",
  "key4": "63R1pocohpf3kGavmAQVqQVtwP7ens4bFRFf5HBHxgtvHWTFwfDNzgApzqUgvGCoEMcSjpqFyUPCuCeHLVpYtFs2",
  "key5": "yeFXNBCKc1W1pTj5KMw8ggb2GD5bPLd2e7dJjh7d1VcR75NFzyAZLtK9QcBxQGphHJSuD3oNBBGDfy9kb2K7dhQ",
  "key6": "2fhod7CocvhGBv6H4z29oKTjrt64AbASXNzkvTE4rRtBTDt7sEHvWznXcziak9N7xLMEpbPZamGbiEWeeAaA7kB6",
  "key7": "3UV46uCdo9PayBb25y78ydcCaAyyrhiAoduJxqeJCYccRbTcEnkqXdKhbnfeRnSGuzur8LziNQYFEG5F5y1KuEwp",
  "key8": "2ZNSHabfo2CGx34Qgk2BeTPe7o37oyvm1ySTqVPBTE5LCxG9zLRkCUhb8g4wgMBgkKXUdaS4267mwVX39tTvjRFu",
  "key9": "2gj39fdka5XRJjXv8NwXoCfwH38HwLoFmXfeZnXdDkXvYkLy18HBSVngdCks5BKeVww1BrHRn4MZQWnEyAPPikya",
  "key10": "4MNuUbKBoV49UQCYDRa4m1W9usUkxXMLuRHKUmuxxwabHzC7qVjRdYAhkGfDF6Ne6LqGLMzJ7P61pFYABJd57311",
  "key11": "jR5Me83zBMTkYpMDsavxpMcmQNcQeNCoGMgxMdw3cjzFPSH7TWnb5oy9DnLyP1dWCR87YSwVJP5EgFfJMLaGcLs",
  "key12": "2mub2af6ZmyStTmfsy2p2yHTUTbWmCEV6K4K9Uh5gjtGG1Qm9ze5D9WNE99MTsRwS7HZ52pa1HG3jNdM8YaVrioK",
  "key13": "UPHi1NsbYAMtGBZegA1zovwb4acZs5bReTL8eRddnbujjm7JJzTLz7mCPGtE2ymXQFv26QLg72Poj89FK8LEqvs",
  "key14": "63Kmj8uoMMHhvYWBhkQ21PGHHqTQoenfkVWMES9Vr1hgQD41iCim1o4JB4XqHiebx5oHd14wsB3gQuwtQeCNu7R3",
  "key15": "2jxLkNN4edBJvwX685CCxj8bu678oebhRszGdUiqqN4JCFw4N7dKcFep9qJsN1CvvKLWdPajLgMyeNb71vDsFCUQ",
  "key16": "5V5BLfrAa7Sf3vehEqXgn5p56cXBdjzLJrbifkqUCXu5zduW9L3tgptYHQb2gM2PggDrAoTNNX1jUKry5wYTZ2Da",
  "key17": "cpf6NVXHEvvXCoFeqTKJCXNNzrv8YBNn8Wigmkyjm8Dosz7KJhZ6E9ekZnAesX9FDMcHUpZAbKwimH6Dcv6KByY",
  "key18": "5U82vrUjWtNXUJ8WsGcPeq9VLvGKNcHrPrACPoUD9F7aEsct9UP6ReSGo5Q9UfWeKEeFzq6FspeHZND8brGLBLNg",
  "key19": "wvCvdVvst5g9wSf4kdBZ9RVdLNq7Bi66dHwmbzovgi9uVEdByJ84hK1eDAT3TYbTr1Ykwcw8nqEoADVZkSjrNBh",
  "key20": "5tHtydiv4RtxLHnXzgvmUDG9DFLwnMzFcg2rUEL1hmpX7ns7mJVyW6kq3d6B644DfcWrgsBUeYvjhJfuMuSQ5Gam",
  "key21": "53qEmvrikkMzctDiRMun9UBNM3SboomzFbTdKGcbwPLP3v4Cn4YiQPkEv9eR2zpubNTYkk5TnbKvEUwLn82hbzam",
  "key22": "5qUGh2vvd33B783F4oA9nxkvFCjp2MrVBhyX8aT55G5h6U4ddgaH6PGYxwgubqRh7BhjHB1bCvKEpd441zrrkCgm",
  "key23": "3btxZao6zJhfNRQSAR8yPaHXtqsoGQy4XZHQWohtPXMANvKahi4Ut7KbJKmaCRZkNHtZJQdzZqwArBm8aBQrHQm5",
  "key24": "fSYYPhvf8pq8EESV51jj9D8VdDqYh3CdKqAzP7WsL1rYYPwVtuXKELb1Z4JKaZf1T8thV3aMAMmWC2T7TnW54mZ",
  "key25": "9FJc7PiGoDGootuKoBWUNmsJfsBs1grFSykk43A1m7C39pXmTmQCex5Gvd6My5eJ62DxhrSQdgKzG1kycFE3Kdc",
  "key26": "DtddeVyuGyPsXdFqdUkJq5vrETJtnV6n3vjNtcXoD5g6VmvkB37VhVdfHijjLbonoMMJGBKNKtTfaPQkMXVv9Q6",
  "key27": "5c4YwXy8JTSRDxNSkxH3t19aKjaw3fQpR3ac54TDWfTWNP17TVkdry9B731guwQJ4PnPkSfpEeZCnFYe7FdFDwan",
  "key28": "evtmQFuc2V4kszrQubAmTjvkJFGBiZawnPgmdfjcxp52ztmqVxv9gEf439WJjQncDAAbLNTGC4yqCkEGYwVW3yB",
  "key29": "j1WTHy94GYnosVePE9ovobdRJ1ppninP4sJyG7Yh1CM6oytQ94Cnqyqtz5iaQTLpuKu71mwgjZhzAvaxVuZoVwD",
  "key30": "4hTtRbGkn3z8fZPfCwX15wsRKdmSSeeHKTNCqptvpcPxoyfk3MEL4y61Hso8CyXWP43icFbVhmrd3yBvDfvzZbpF",
  "key31": "4WoMHXbQTjvANYwSNeP4SUsQ8KHMGcfqAqdW8cVASm7eS1fDGJVzRunumpVuiaRuVcHxrQp3XgyHNWP8LfPHA4XF",
  "key32": "FbF5XSrFKPvcZVatqUnKWYfG5FZBAan5rtTKQfhoxgBrcoQKokzbQmhauJmXmEeYQz3aD6V5ZtrVLTyGwaBuAfB",
  "key33": "2ZyZnskVTyXkYLsKEWw81EwCUxRUMUnwDz3w5cAoXuGWR1DtatfAAWcDLfw6tXsiWu1QPxurQRRiggHP86sv572p",
  "key34": "3EzK4hZczzHaVfnJNxBDgSeSKUM2WKDuBGn9m1ZAfnszJ8cCBMcffU7mmv5L7x2afB7MqBhLFSzebESM9GpZHBBs",
  "key35": "4JAaJ9SSv5mMDqPeiC7EyDyRmojNhV1Aut8SMyjLWN9v7zZFSvyanpw3pw25YHcUXv6N53Z2rXSTrtbtzqEW3MTw",
  "key36": "3iPMWoAqyA1qR5R3FkrUXT4JBejpr5UXYMZc6xHaoekq7xbSJT3xxDtaxmQceJu6hWcNDJUhXfroeWKm9YMKBH1F",
  "key37": "3tZLqQSeqLUx8UZpX22y9tzgVAdwfAiZ5F4pn22M2YcZ41iSHzfrdFy56puVsowij2ZMspvh57qyMaSVsq7LMG6R",
  "key38": "631ejA4FRPaeN2ndUL8P5cGRsXJDw4BLBvP4J6DXgs4iV3C7KLbqCCGHiUdtYnWhvTXnbL5CFqmbfKvBWNLke7MZ",
  "key39": "3zennmHahyJLxABf7EjzYMJXPgHhtskDutQ8YqPgM69cVUXqvVi6wbXd1dLB2NP8KDE1YC7oYZyrN8muaxpCiWcV",
  "key40": "5XDvYZ1zgPF6tqB2CWun3pN8nwKG5wvnqEgh5wJZN74ZnhpbbtURCyLRC8RZtG8qWrJTnMNQ7nitQUEBkXvnmzKg",
  "key41": "4PqZnHJScFD5QB5cxyHPG8qWkGusmmuPjvxMUS8ZBUxzGvmmvun4MZsNE6tiVzG4ndYB8jeTgX7YiUVuC7xpJ9C",
  "key42": "XVH7Qes5StD1FG42nkGRgExK8s1qSymmZzmXyFVQuhtYNZFyqnKCoV1HPFDyJSHnZVKLjs9aSwPMLodV5aXWk44",
  "key43": "3YkckUmL5i8gbacFLHTMSqNZoF6T46yp8gxiYRv66oY1QdBoEWoFknSU9UynMb1QLhigmNGs94FBgRVHny3rPnq6",
  "key44": "5qJwTx4skG75WgsRJ2myC2zgrM4x85fdd3Nn1ZMBQtySJwmc8TLZdqKrFFcLj9TTqNr6PJRoVwDBpVGP9bjAeRaX",
  "key45": "3qxArKeakDdB411AEpD7Gj8khC4EQ6UBjStpw25is8Rdf9o2urYouaUNeoyejQDofd1eYtWM5AdB9gtzXWktDBNU",
  "key46": "e68i33K9xQR1cpz1gLsCy5UP5FAceD5usuQ5y1qAgKgf9i8V5rYGEkUJ68sBGZJrA23rdiN6sCv2RUoVkUZ9BVF",
  "key47": "3EzmX4eQT3riSQw48c16etuUQR2mV3nE6eANm2SeRfFXk8mrgQCMrU4HjEqTjQZyDNgmieQFFuS1AhgM4i2PaRkA",
  "key48": "47ouyHTBJGX4JEEu9kiUCCKyyi2BiaEpLceYdfbGFV4hSYRaCPUN3NeGjvUtT4PMTLc3qRFou2nxHkDHjcVyvsR1",
  "key49": "cXe5JQN1NSCXRtBVf3hQknFu7PRYoJKBDExaVkjn7BdXnn47ESh94tDp7duaga7Z9b9CCsSvGqGkXtfZx7uP1BZ"
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
