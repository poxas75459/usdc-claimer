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
    "4UjjmchRQfoJxfs9XquZdkCwDncphBzRU8gxyD7z4rSPGLwDPtuJfQMohmQErJKX1wjN8A5qcCF8aUMASw6Vh1zH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2BjX2HYS7mQGna8eVEj3es8WuGvMVpjAUsoLNdw8CFF9nGUtyypDLRYgrQYYcdUgFbPN7yQa7qCuTz9xPLx4vcet",
  "key1": "5y8xciwCxBvLnD3XcvNmAjSzwymqRuoQRa2sxD2AX1ryFn4Av6MxvbaQpz2sRKrj8RiStuyhnDcxp4SpSuPqEEc1",
  "key2": "5tFXXfeCGiqN9s1p2arDfZVM6Z63biq2tdB8Mk5vZqRQ3F7n5fcJc1TDjJ3h5ffo13z5VoCZbeEZzcN4i6BmsMg9",
  "key3": "57uqFiD6qDD3MYZkRPPoJLrBbVX7krfL62McHmEkWamUU1RoSTrmzPAiw19aEfoTpobzDwjZtuoyyZgcPCWeCoNB",
  "key4": "3uffBm5Vb8NnF2xEiK3jipLCHobgbiYnDhu8bZ4VAS3fS4RWL6jqL7UJoVoSrxtejuGtVyPY4JBPZZzEFi8fBQ6b",
  "key5": "2eicrZ36YGUY2drPYBZoMqevhLjzekTxDEwTAMhwB6DhAxSchkdEKrFmQuXnVs2TbWceo2o6BHhQfsudaam3jQNV",
  "key6": "2gz3CHs75hkmriR3EXMZ6S7sxLYykLbZ9JEmXC3eMScY9ENDQVjk8SeJS1yqTZhR8rSKsPdeHrd5JqV3ptcFDoy9",
  "key7": "5aAxigSmtp6P4Zjr2wkcmRXgeV8TxMrJznMLBQLvPpAfFDucZg36F8rG9mvLnNT1WU6oB8xeguMDqWLfFM1q14pY",
  "key8": "goWc4toLCxK72z4xFHZkChz5vQ9Cu5YuTqQTWEiFm7rDF5Ynh5Dz1bYpTTZJ9Nu6c6McsZxRtiJRD89ingubp2Q",
  "key9": "35dKNvm8xfGkAMYS25jLUASTjnc3w8iyxhb86ViMtTsVJSq7A2zVC2NWZzrpc18HmpPLG1nzJhBpPGVWCxsSFUHm",
  "key10": "5xX1KTiTfHsz2puKqTGaYQciqSaZQqYCyK26aYKCPDmJiSVNVvrSmP7wkzzq4Li2bmoyUzG32weyEc7Xc87oxPqz",
  "key11": "2ngqaAUVchyZqiJUTyi7P7ZVm8KMWgPMbus8wxD5aMXJL4JjQdprfdHfWXQ6iT3Pjw5fKLBxubHSbTtynfrEJfRC",
  "key12": "22SW5tyVwxDzV47bQGBtnpi8St4AzE49QEbEMNtzH8dkvgUzYEkBSZHgVWGpFrPuUKeW2QNjVSwDfLCv52zTqYtY",
  "key13": "3BmqruYQsCEDdFvijYqD4TtuxWWYZynk9pnNNrhz8UNBDg1WszxMrqLT1hWavKHjadB7AD1ZttUivWaAEbEZWtR4",
  "key14": "C446fPGzmbEUWSbXUJkjqcN9spZquUCJ7PfviBNrtX11B3VPP8GyyFfeew21W1KRbkJ8GGjh2NSmsBACzdeK6Ku",
  "key15": "3JdFbK5ZpVS5Qg4a8eJRYBxfLpeaFKJCxVx69DarqwxDBj8T3N3HbSgtUG4f1cXT71mSSTaZzeHSM5duLwDZkJr1",
  "key16": "36ev81aeYoZkAumytkLSxN6icXyKmWXxBRq6xsg6VzNiXTbRVa5b4e3nmSAsX4H1PhAjX1PX5ywSYyT6nWRuttzc",
  "key17": "3uwdFoQE7JtJMhp3WTsuKAMJPWpftupwDXdabLwPseRLDXL7wFv8TWVFgLPXKKcLKR7Eog6MeB6vwzN4L5XeTMA7",
  "key18": "3XgJ6o27vw69sLCEtQiXM9ygDaC8fPQRteWMQsVtwkH5Vk9dJk4QYK5d4BipnfGkS28aviFpyKXWepcy8hBoFi9n",
  "key19": "3EjsBxGxn2WxjgpgxUnV3hRGqZCV6HVhQrWFHkzZYcZwdhwn3N27obGHzFXcZaBi3KHtJPXQYCRFGaEMrNGcGndF",
  "key20": "3ooAbWQSwLhBCDpuZChTaWB8TXKa1hpQxR9HCeGBUt81SWe4sgkgYzuH7CPmVPF3LWFaV77gHM2P3DPNWXXG9T99",
  "key21": "3JFMeVddrhqTkD4VzLqRSA9D1rat2NrgLS6rEyafpNEYgrLGahuwaeqK8SqPFMyvcpmPa8UmMSqs8s6jbf5zEpbC",
  "key22": "2APWR7DicMWeu4H2DcbJ5czTJmNTggWBqdZaRCxbRUspWGjPGd81f5XiUwcaXsiFPjMW7hWbyGDikSGBncYozeNE",
  "key23": "X6vAJwVnQURnJAKjb7FfJFjqjXvVtvwMntj6whrVifuD82nMSoQtkssMDEhg9UbmY5u9FnaGJDnHHmRZ9niKRAt",
  "key24": "4pqiN39k2riL4fs8AsKusQzHiMYqJDq9zR8YEYsmRmVjhS6rFdsn3zSRN7JzGaJjTFGEuBSdxqxEveVD1ktwWduX",
  "key25": "4fB7dcQL1qUfvbngMbn4FrjxDSHWuMjFYbohffjpoxciC1KapKMdPK4n32p9WwTERYvGAwDZZfpMKzMCwXZ9u4SG",
  "key26": "4k5aRd2oK4jAYwGAzJpmwtEtcCUMebaVDwhQJMtvnrvrjxhQ9XpA4mBCCCTfiDCtPhFdy6Mg79Jr74pQVqAKBZ1a",
  "key27": "JB4YWMtf9oZeSdqNHhDzgYspyiHuQHwytRWECymHv7kvAMiE4UY9msuWusehRo2CkV3P2aoygu5fGrLXHaRFge1",
  "key28": "LDV4ozB49e3YTTjCCRkWX4yJXGUjYHnkdzCXnAM92ttajSMb4j4pE2Lzxm6nVG7gPtqi2nsLUNCxYeqXNyU22Vs",
  "key29": "67pET5Q4bXPEMfcorc9XNzS2oLe4tcCXRV8uTNBsW42DWSDskfz5vRKMTphfrnhf5BjLp1E8u4zjFmx5hGxHM8vn",
  "key30": "2DKexGqYsnufvWSXbjmp2SC2Bon9azSdbFd7tamxi4aEXX6Q6UyKuZTTyrJQhreugB3FpJ2iVQQDrMprddvpZy5R",
  "key31": "emjgCF9KJGDtpHPi2jfKSoMJfu5SccMQWHwNuJVhXMv3cUXjxV9YQQ7HrFz1TvkuHCVbdfUoeinJYudAK2TocEi",
  "key32": "5LT8EWPz5ZZfSuZZdpzBVm6FjY6JBVhZXp9Psky5e992XzbKvXHsphyKW4ZzMVjYZVQzswFgVmhgzCuybXVpVywn",
  "key33": "3aBXHFR5XdSdRRSuNq6eizPJWTJcrf4xZinpqBHCDnar4hvWPR7jEXawgrdmb59fi5JcZySpptVbchtZTo6VY7vZ",
  "key34": "5yo2sCiUxoxeNtWA9QqTe5WVn6zKnN7FHSyhMGVzwdsYxfG6x5EC9qDsE3dtQXWiqgYwKp6kJVyzQ5Ectg1YDtfj",
  "key35": "2oBZKSqFmUQnuT2yuBW4jDjp9vo8YAWHkaKLHZYzKLh5BhxueBo2DmeFXXndtt8vdc7jbKVs6nhD9C5DdYcdytBp",
  "key36": "67ztizkWhFTpsGwwNJz656eADWV49F58ALCg3BPy8J623hyBUuYkk6uQ4HSxoUimzHZ9Kdb5UGG1Xy7brDszARH",
  "key37": "4U7ewsHRYnybBX6DM5ZwocZrRkEVmHgHkhMWBy1Rq4gVrH5csAjCkZa2fTaP9NMA13yaM1WUY9ujss8mLpVBEgRx",
  "key38": "3gpujD4NgPGH6r26Fnbf1WfQLDVQwQdw3qFCQZqDRZrMu2GwcK9gh1sfCvXykNkN8nHT3tiMxN3DeAqJQeKhepd2",
  "key39": "5e8fvepr4kRieAMhtZKq5jbm4CBTzzRL6MTZk1DWPe9KcmMJku1wk9N95kVvQ6xNmJbzC9vFuQQmBcnaujd1ku8W",
  "key40": "3UezeoL1R27QZhgwchTpZPBEGxazy9MFn2RyLf8fFj5dKEfK5jTHGTjrfeELNk2ygXojAUcvLvsL7MnwHq35Q3rR",
  "key41": "4iKhCxQD6zgoAVQGH4TSh9NR4zLYuPo6dqYcoefC8YwLi1g8eRgc9BZAwZc68dw76SqTzUk5biiWctYPmBWgFiVj",
  "key42": "rHMTZYBknE2SekxwQw6X1M9Jgjm6FWgVXn1h8qgYW6XEA93k1pXYLbJcLmZFqaKQndt4RkNR9CirSxeo1umRQXR",
  "key43": "2VpSr4LuQvvuhsdJi6ru15kbeeVSzt6PCRizDueKQQ7hCqyKF7QJFjhCNWxyLQTuLkRgCtHhCKcAoyNUZWV9Gt1r",
  "key44": "5C2nUWmDw9U1JRWGtd5bwd7LyuAyaZnN1L1AWCQRQE6fSpqxzok1S2DKk6v4huTCxUTMYdw76CgMxUoEYEt5xGdY"
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
