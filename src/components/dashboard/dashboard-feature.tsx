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
    "3nzaAjNmpE1Gt7DQaeX5p1mGv4jG7biVzKMSmQLrCQskhdFhxbeNCX4cgGdCxrgxz5dgf1kUzPwUyAQxJUscajLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fXbrqn7tahKf7jHJ8DWJtA3kNB7wbZEGybWwdAATdwWvkRyBTNmmjmt7ocj5RT9CzyFTpG1LFk196QZsEu5MUF7",
  "key1": "2cvxQVxierPiU9htBtnhtaqL17jmsGVdLg1xpCptE7PXQStJR4awrfXTeGKkqNTmDWMkEiRDvhFXYamLL9MK11rD",
  "key2": "5GEwyjQaega8YzHN3WjJmaPWaKP9FqWv4kDvH13asFyr3YeviTXj4GJuU14gtnsVC9edq4H6412zHuofJ3VC9b93",
  "key3": "5DdFBz6pXnHemKyssKmNBZkBqgxLqdNxLjbQ74a4RREdQNngFKX3yzqajn5mbLsLVpfFL8pSwS8hBugQQEXJEGV4",
  "key4": "27xsRwCgg77kjPXosyR5jYBWgtANtkAFEFwDLyU55WyJcSamfGndsHs6G6YdcpogQ4kocmKd2uhfyFp7AZQr9H95",
  "key5": "5kKzvEgyTioXv7ZYGJdBFdNvKvYA7xDXT2TDg9iyRoidLRdG8JQ582t3gV5rHgQwRqbn2ZhRjM7kZk8yvgYSxDiU",
  "key6": "5S129HGHJPfPbJSjqDWbjgddrhYZ7ZRoq6Pk2NEBKWwmDFKsf5LD35wDs5bt1jHC9RCZHHkZrVfciUvS7KTsVn1T",
  "key7": "2SSni6MvExRt76SE1HmsSdShNgcmcqig9367xiMbWGd5VQfpGvxXaNvXF4EkjT5dC8btZ6svg9iDNvf3QkshaksV",
  "key8": "4BgZh3e4Vh3dd817ZiMFaz8htYuX7YghjZa1KEbVZycHedBBJnjALpboD78s8GWSsFWa7tnTXuoTnmUXkJKnoRTq",
  "key9": "5SEiECuiiHNfBnseanfDKh2QiHjv48jATFLDkKuL321rdW9bxT9SNvHyGPeHWkk49vuYX8AMREYKUpqJZivA3S5d",
  "key10": "2mFP9xTosieV3dDPrz8xdA3wADEaUwwwYy8CiNYxLyuAjhqSETjNs8burSkRVss4eRomgJER2ovLRSFCuTKyAJd4",
  "key11": "BpUMFw95e1LwuYbcuCPABpj311p47s4ryQZG7NVdHs1ProyfhLVdwixU1wAijbun3kaa6Mn7BS14oox6Tzbs6iK",
  "key12": "jwA8zqjErsXymD5M2EAppcU9oC8N29GtANosprJjnPpfmr7oggeifJA3YJygD77L6ECbVPsk3YRhkZHorn2h5xz",
  "key13": "qK4UH9AcS91GuDoj19F7WCKLYXCFnEA2NFKBiSqdHKua252U9Uzphu7XkRwqM9ae4sn1rxUcXY33CeGVaSLdUnh",
  "key14": "cf3bAJk3SLcdyRHuMSxvJ14i2AHTKmRJd7zVuTFdKafJWwTUPTRsMay3EoSYEoctFbHHuvHbhR1xZ87RJFJMhrn",
  "key15": "wwXNCJqRFvmf5VeMU7jo1vhn28iswA6ASjSdNPDsenijZaP8toKqJhEeifkYhbWb1UVocDpyh335ZyzXs48Ldk9",
  "key16": "28gxxuLLgHbw8Y4qP9kfMoTCQDFdvxnguxhYVEN2jWNeFGd4CvVB81tj8H9VYFF9dL4kT6oNPHiwDtB6ASu83TXe",
  "key17": "3sGnzxFCez5D4s1fWcmzeczz5wR8gVerXYaqJqpHHH9XouaRwLwyuvDmqEHeaqWFCSFoTux1GwMbJGYX8wnRzYjk",
  "key18": "4ntAJF1P9CEhtubCEtCHhpnxHbp2ARdmKdAdahkXbcdiKj57xfUNdg1LsnGkjZjormZATPQJ1WHjJqrmSwjvfLHB",
  "key19": "4hZE5h4YabwfPEydgY6kA92zLvWB9wCn7HMJkZbSYgkj9pQ9xMHf5RNcsXbp1SogTva7CYrj25EexyQGvKWvcPCK",
  "key20": "8HrGxfwuLqdzVoNjUPUcyp8Y6ZyABiX4Fe3GSd9LZCBENkt22odri3DhWmEZYaLzajWWXDktbqM6sftQFFN7R6u",
  "key21": "3Xjw8CoZ8u3WWnd8w7LsmUpVCJJhZ91yysSWkfiKTYvM2WPZxmho531HfNVKHZ6Pd57xzoqyyWqQSPLJ9zFwU3Rp",
  "key22": "2TpAqsZCHDxRTAHf4tsyX3RmQVZ8eUHUAEUwBP8soyJTU6U1i8mPTkj1cAKMxfzGww3BJiG2AfAjSmYNVYsRQSUN",
  "key23": "3CTDNonZsqSupi13RyWcNyTBH6bPCMzmqxwJWmQQRdMZtMheRoQ7nyJ1np5YiXG9fNdgo7vu8FMPatJyggAgWyP4",
  "key24": "5NsfqkGH7U6LejiFCsjLu7y2iqH1GDs9hmxuBtV8YRCQHQefxHaLdyAWTgcotFV4mrKdQPB8qoxK3tLU7pUYBkEr",
  "key25": "5569aam8A7rDRFrQtbyRDxqWyz1UAehiuLQ3dPQgednGu5AYrQ8x6Gb1NxxRcGVbrmUKqhtKWK5dSA7zFCDG1rqJ",
  "key26": "55BdLiVz8rpebQKHfUAChW6AWyyob2FNnK25Xt2S8R3KJWi5Pnof5nMRGmigAWtt9icJpa9MfPSY2sykF6NyRf3Q",
  "key27": "3Sep8znrU4FrioVBjhTgCta2Ww2YXoR2QU46JqPgyMAutt8EkiJp2NpNnH8j4fuTV1nEYHaJ5Y4X7hX1feA1FxKe",
  "key28": "A2ex7xUW7QjFnjrMLfQV8nN6TaA7qAoKhFB5rvEgtXKN3DUEVzPtPqsjiTDHtxNvy4qfJaNvcMLdcCQKWHAx777",
  "key29": "3jXgVmQvkZM19pJd58jMnjLHb7cpKhEFTH87w8KwbETZxW7z6sdx4jkxSuPsmHJcYf5Hm8z4ThFwtgQqnYsWm9Cf",
  "key30": "3HhfJ9VhLkArze2vdWVC3JLcSmUhPS1KYyrPsY6zydNZHDSCprq8XGaJVVMpvkQjygYjtoxPLmFbi38rbtw2zbYV",
  "key31": "2NxgQxELTus3LXzjasJB6UQJYWbGi9LbBSGLTgHW6fcTMHZktwRSC97VcEapMEZrUC16triZPTec43rM9JjfzTTn",
  "key32": "675BztgXbr96ePNz4a1EofvyAHF4eHzSTAhCc8sgmUSq1hd3d2kYBkFufdcqt2HvzdeB1sX3MMx1PQcrKGHCX1KS",
  "key33": "23HS58KDHW1yULJ8XjZoTSs6Ci2eG91VvSqVAf99tGZWYxgYWoD2PjWvqozqtG3FhwFePEP3MXsjjRniWoZPEFk3",
  "key34": "2bnFGNjrWZFFwMAJXGABCgzfGbhFnT2EHbytPwhmpbzvzxfKxVBr9vg8FK7NMiTNBsCD1fqx225kyeiLs2VuJi2q",
  "key35": "2UAg4KXypfpQjxhn8d4THURHjbW8QfqUR8Jwaxp9TX9J7n7eg55K3T7gayVzLmvveHVNah7ZG2iu8Bnd1ewZrrCx",
  "key36": "3yauqSPEd1Lj3BP8uZrdJ4cVEWjPqv6KWNVbdJ7bqJmGzmCnz5FGsbFRLDjArJHUYPbBzGgBP7heaaByfJiRrGVB",
  "key37": "4zYGp6S597ZiLhENdTmHSgBjDp1NoMofAHRpPaEJQFkHqwQfFHkoKRE9pwDaJr7oXJxRLXrQtGNNPwZXPaVinjcM",
  "key38": "52m1cVE7grGCvc11Hz5fkRuudpqurrnQidz8YVJhRM33CgJCh1qXikFdoMuBfjgyiRmYSv4PDFQgzLqY4wP6BQPv",
  "key39": "311CjQkpfozA7VS5KALkaZ6BH65Fbfopo5bjcFL7kn9Rk4KA28dSksf8VSfbXTPiYYxWZyscLGyH5vhDjpdtu64N",
  "key40": "5Sf7BKqz84faXF92wPxH5oYPvSkuuBwRDH2484adPnrhRHU5oZDpBn337GRkXo2QE5BMzjQVTgbRk4Tv3uxDMh5j",
  "key41": "8nUTsXQiy3vNHjMnYsj4MSEeeDnALgD2ufHKdyT4jkgk2SzrMQcau1GBPAWdgmA6Tcj1yTTWXMVnDwotAj3WSA4",
  "key42": "4HMATztF8dbEDvrPS9EiMjQMv3rnck8rEiafnckmUB9s2mL4bM8v52EsHad6DwJqNfzAK9Tvo2AUumW34E1bnW24",
  "key43": "3SXRxDMZVSmAZwyxzgCdX5YXFVn6B9C2pUhGy19M5h8fnATbJRZb6q11zyhGthgzPF4gBchB7wfqy6xSn61rTydK",
  "key44": "67A4nt1eSuKrWak19USMjrQxy4FkKgDHYWypu9h4zCsth6Q3x2Qdy8XhfgM6b3zaz9Hi1dwEXb28TSzNjVzt6pGX",
  "key45": "5hpJqJZe6EXhK8Lc9eY8UpP4GiLDMZUh4vHyfS2yuuUiaY1bbwFftytznLVZtnMiTUmzejMSofrDadVRBrfmbte",
  "key46": "2pSb1kgKxoy3t1v93BEGRzyni8UCqE1Hw7RUctP7qK4xJi7981AQ9sAmcQrxwwGAKoDTY47ggYToa9p1wNDcom3D",
  "key47": "23odL4SsjrKhS23LygyvvAzcc5XJ4VPb3gsNg8HuemGME3GUWKcmsxibjgbDxRe139o6rVM4riCpQhxfh9TfS987",
  "key48": "xRH2d49QZwUH1hu11SWC77GtiESj9aDGeJrsZTwtynjKyma4rn3ZqrgnradW2bpBhiDNscTu7BdZzQZWnVLe91o",
  "key49": "voc6uxNiKNQqzRExYddaRFvf5heo5dus4RS8pHcQLym3PXfBz6yDvicoum217G1Fotkth53NZyJEYtRj7xUaQEZ"
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
