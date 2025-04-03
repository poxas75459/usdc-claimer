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
    "3QbiMKtVAZgDxdtRXS7kWeLfjxmJmi8GYgFkiHAfU2WcZA9Q4Cp8ibbb7mZ2SsLUGiJGSb6GjSYiA7qUKP8wa4t8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DDoBqZrk1hiBM58apjto9hrHk7w8Con5EcHL5LH8bJ64tehfkV9SPDBndWwuC2FqgJzyun4m6vQpU632mAHgkM4",
  "key1": "25syGzGcHbzXWDc2DivRdgnd3FibvCG1FsifSrhXW5zBwg1StevisXTyLCYH169uxVHAruV7cNnmVzhJMnxSzxE4",
  "key2": "4zkAs85KdhLjS6y8LgWRk9cWcoGRpf6xrkrfHTtTX1DQVYbTGCKo6a3LSVi2hJnJF9LsnKPfKyj5jJ2TmHiSVreX",
  "key3": "2GKbjyRpP1GzYcCxaoAfvimEJaCs8GwhyM94P7NkSyfBfYqKRbbk3BzzTwUaAuUswpKcT4rYoFmxxJxG49ByKAm1",
  "key4": "cX9P45jzjp2M9ERBdRyjp2MaaUJNK7zNnyKmMC6zEhb6XZtgv7sFPgj7GFsEpjhJ78zq9rn4WskLdWqGJVUDNLg",
  "key5": "67mrCmDwUgHRcPGXBir42kfWGxXLZHGKc2CEsmfBs864kgvAjc7W5s1so5AFiwYtkLaQPbRBVRZzxFqjVgQTh7Vq",
  "key6": "4QmiHPSmkJiHzg11Wgx7ZC1wohp4D22hwzxgMwhGmtTGuoNi7Ujtqw6oxJKzCQuJdCcuu1fbXTs5xRg3FjUyPBkF",
  "key7": "4FmWkpSG8CkQGPVFuveVk89PJygeXHRcz4poXPLsR2NRxJczGPN7yWvBFxqFzvk4fsAWPnfVioMnfy9vY8MELujH",
  "key8": "5eYRNcJqj5xmSmAXJZYaAMVtTPiH5pVPyFxynSkfk4cJhem9T8xpCXFSXaVFAgXKUVFMA3SSPmgatuPMwndED3Pb",
  "key9": "5aGEt5pjipHfWRzcRTtmS22FFXW6WaTaUdautYZTqQGvHxg3vfqmVUaE9aTXAPYoEgptj2FNZxxA66VSW3xs72Ah",
  "key10": "5ELtED5NNjpUjUsuF4YBLUJN4ydt44BAm7nJLWzYUVyfwVUsVDF4URxyC2q4o365ckb2CLuZCYngPdKRGEQ7t3v5",
  "key11": "JtRZ48zLx2KKpaXwmGPwDe3JiRAsWF2R8614tcRTMVsjXXPRBzTAXTHPTdNEy9dG87fMheLPTfe1fskDGGLNbGf",
  "key12": "2haqmMD8Rayo4x69Dpkrd9zYaHw7EZzWt6PHhPixF3vthJSFUYJq61NR32pgy7gucaSkQscxGpmzHk4pisVsvAYW",
  "key13": "5x9JRyMTfLxXTxCxhdSrRVwKjpfrNrfwKMyEg24kf7ttkzcZDGa9mMRqXobVGQATrjgy3xLkTt2iiRnu4V1w9EPs",
  "key14": "BXtwEmtSSPMCsLwfHqDoXk1Tbos82Zds2J3f8pBYYfLEYKprw4QHq5uJambNDyEcm2QE4ZVf5HNnrrBJrkaU7Qh",
  "key15": "5P9V4zwRnuVfpF9BNMw9SELTAY8vnx7RHxnz5rWGCrQ2f7X5JxeoSJYFJUn1WgEsM7t1dt9Uody7Cu1K9xBTx5NF",
  "key16": "5F8vv1cUQeb6Ku7W8zdQWvyJuNbhqA4noVXKyjLxhL4UCFXxUq3sEttWJYy5zgYANuT4hHyLiYictV7kDrkXkjk7",
  "key17": "3YbjNj9mygLmb9xVeXPoVNjAxja7qgQMVN2rHNA8ZKqUJopB82NgxfU2YL59P3Xta6jkuqdVWS22ictayUXSy1e1",
  "key18": "4ykeN3bsPEowQAQqZF6UsnQBm6mypWj4S9YzL7M3jxaQL64nePLWQdePuriUGMKNNmm4P4qhJZ9o4GUfyTS86EUD",
  "key19": "2gxDuFV8yydzRKJzoLGmxmAtFziUNFkKA5fzdrgTS8qy3NF62VnbwJZ7UQoDRBykgTNnhzSDUfQWPLMC9GiyBAdg",
  "key20": "5an9NeAKNLMhKc48ddVjLBdy2GsRGtEHFuHuto6oU6MEMyJqFB1TDTZXYyeLz8CYBgpoBgWDfNjP3zqiMhEv1uYp",
  "key21": "4Jx3DX22buRr1nUeZxGKGWzG3Q1djsvAa39sKZ6prv7u9yLQ7hqNMFZFJtxxxC3w3KaNZ4astBNJZugSiaCqXJC4",
  "key22": "24FaV9wtJQ7TLrcUs5avFarcRKG48EJvH7Xocpa1xPPuc1U3qKrpcPcRNMoUdCAS9cXGty2uXB8ZvUX9S4HYZQfx",
  "key23": "5FuWfR2vSdDh5qDyAwmKpkyMhAtAGPVLm9MottqWPa4UVQ8hXkjhv6cmPQdPPV1aAoJnKM4Lo9HLgRzgZgMz6aYY",
  "key24": "2si4HExNs2fjCevePfgnu7kZMFgovogYymxrvP3JGZiBXLS2NL1vyeCS78N3ivsZc9dgUQW8gPT43K9RELJydrBS",
  "key25": "469nGYgGDFqLmQZPFtTDUcWK4FcTw6oUB1iuKWNYcsPtBJc5FzYHGKdPS3hwUumkiXgeE1zXBKrrcbpvUpLGBZx8",
  "key26": "4pQmFDVdKdgnCcSL3KMR57ntXvQNT6ZwKbNHnvPBdcNuV68FxQ1ZpnBCaZezuiwtqdY6PCsUzSFk9YRa7w6fKyew",
  "key27": "5G8mESdn2tNGTQ24uXSGfMhKnnoMYKsWFyAaf6cAeqBJ5r5U3X68PfcYRNFhtGwfFjARGp8XzPqKUueChJRoH7vM",
  "key28": "88Ari1izmRt66FBz2ydTThASLoBVqTgc1j94csezZUB12vYJk9Uh7LB5cQRg28QjwpGdnudUJbu6rVbs4EAQfpL",
  "key29": "3WDNwHZvo5HPVcfNynv8hG8DWgUnpkf3VJWk1c6Hhdm1YWxRGyNwkaLiR9csVjNkcYJvsMdX8krqZ2chaZDvQXPu",
  "key30": "31npqZiMg6D8kLZGnV7wkZLumFqmYhot7S3GGx3HzgtGZrn1Qws5NyDDXzoNeax4EiV6hWcZLTesuHnRQzZRtH1C",
  "key31": "2Htqegx4YjRS6YjTQbNT77Zk4eU5kXVbqayk9YPMtCc5GnpdyTxZ5t8qXqahde2Q9wgLvBKYHG1rdruayDWHFYLA",
  "key32": "28dibjDVkvgAh17yZ5PP5xHiYY6LApXzQ4AV96LrKivgkzTfgZNkc5Wo97yHt6erWxD2YhTKqiHMy19NgDB3pUbB",
  "key33": "59zh2VGJGr4pej9sqYz3Wqkn136ZjgYP5MqQrRk5uDQq1cXAu8vD3aY3RLAsV1UkLvq8a6NAmQTJsLvzcmqbsqUu",
  "key34": "5yAKPQomSdF5uGg3YwEcuoQYSFuhNRx6gVyCgPPLiFGKMzJyDXw425h4D8S2MrthHjCxQnboRCJnGjnJGntMqaDN",
  "key35": "5cae58J6qQGeYX19TR9S7SrnywBUM5B2DYmPqfd21Q99vcSxCCEzUnDa4AhpSz5HvtWGn4ez56KVG3bBAEYjiz7S",
  "key36": "4VVfocSJziLzwU3ymDkmBt6fvDGupj36QgoTYkZXcY9X1LMwswqUtK5QyDhqPofrF5ww2M2eaBxFDNCxgTecD32r",
  "key37": "2xaFsDBmyPyHGtKaUCiAjqJNdh1TyS459tZYjRihAmqPKAoHYWSYQSmoHb7UEJxjsbPQZgnLMYpVyxspMKvDjcM2",
  "key38": "2iMZJyGZVbMU2Y1WWunaYtZbGXhKHiJFJutc6KT87oQXQ6YzoEjaXu8HAAnxptWaG41ZZiYKh8fjrcxumc18bnue",
  "key39": "5ZigpCY5isWBSDk6ryaE5kxkv4y8nXQcte3yZcYbsGyrFNSq3Cdk9v17U1h2WjdS8zb6AhAuKYQbK2kZKAjviMGT",
  "key40": "4rh2q3NngUEbdkE84HzkFzvxaCFGf1zpMWwbr2xtwxNKjr41CeXKVNEowEYycHxK1BGBzJvZH5cjbB81fdDryMkS",
  "key41": "2miSLqaMkgj89JcSeEgTuDQW8jA7Wr5cLeinSZtjUqs7tLaRLWQSutEKA7ndrpKjCakPTgtBYU6GGPQacYsr2c64",
  "key42": "3VNqAAyTimf9vGJ5yNiGwhMJtu4N2hibJ672FjTJ4N1DAq74pf3vBcVnJXtvLJBq9WbSQmTghtPDFU5Ss7XRG6j6",
  "key43": "5ZiEe5LSEuSdTS5CYUunbj49e3KRQXHwxCUWpcqqUsssqwDWgyGWopnBHF7BPhAEvKWWiie8Q5PmKwfGs96RBiQK",
  "key44": "3D4DXk3Di4QPN8CU3e9sDx2JH3FvuYWeMfr9Catq17HGW7yDHadWuReNKLZnYw25hPRFtoXFLgCZzCALncBwkEMY"
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
