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
    "2cUMtEFjTJ7ntsB5RnFHFNfBBwAEFqcNizus48k9XgkfCwgSoa4sehAJBCbYFDoQAtmrwjAw2ZmcZz3XdwqT27zx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NENxrmDSYdBmi3xaXaSsQV2t7divyUdfrQSLtJn4MNGnbwvqWGTSAufrTmebmKP4PX8AjGFkP3neBPJb6DqmxPJ",
  "key1": "4kvJaedwqrtUuMT3q7RQjWiW4CgZs2xGoDArH4MqZqrvNYsYasgmBp6MgEEW92h5vo9AG8jSBrCviuyGahduk8Wb",
  "key2": "2nxkzE3ug4L8HLauCc3ydHLbF7u11w3xnNhaw9nf5cnmXBGkDwrUaLCVZytJyKEfTvftQa5j5zCvtxZxMBeuXZj3",
  "key3": "3MwgKFSAgioVBU4PzPnpVWcuoy1vYvL1whcDAQk5Q6XtEiSysPEh28WYDVFubnMSFg1CwDTKaXdtk8Zi3yeGy5hC",
  "key4": "nYxP9yZZ1YwYg8isa1TqCCG5YrHAVRZ4JnHjFsDPDYfk2Un2WZT6ZR1fXB2BaLLNdtk9pvyspdkxtc48o8jWrwE",
  "key5": "aDmbucJooJKb1ut3NukVg3BC5Nx2VfTp6Fdt9j28dE5ifqDVhvt4qD29KPx3rq44UQ3dEpwu2UJpDi8kAEKMhwP",
  "key6": "2A9mjnEexuLmxPXgPEGoY1Affb6Z7GgQoyjLR5atNHyf52WZMEr33pRrkZgz1imJcmQGGibthdiHVMtcm4QaFTvP",
  "key7": "4CCjJ9wF3CBvCZJnuToKhoUh5n7hvCxKDGvBSUDV2PGvNDkp4FAGRFNKYdkBbKW9qQawsdjSoDbJpW98Tf1E8nwk",
  "key8": "3hy4CxVhbpU2y8q9csrR5XA4tjAD9nh5jG6VDd4AwBFZsuKNQMn44SCNF1eoJgGFjZvLGMjPiLr2wXkihYNNw6QB",
  "key9": "3ymbxtF1c2EoJAyyMaCaJVNEFjjdvYgfRGV6n7mgjdFk95rSfp8qqfknre9WosTKu6bpTUym4i618S9dLwQJkqn7",
  "key10": "p8m289B4dccQarEukwEzgEfSo1QUUxd2MhCfdTdimJ25oiALR1G8tHvYrJKWAyFRCbPq5BCg76GcPpM9KH5zjfA",
  "key11": "3Vo6R843FixHXRWcimMgNMGuueoXMRCJG7o43pDA16puRd663Py31mq4nJmbhaFKELK3nF6W2net3Lz716vSRm7P",
  "key12": "2o2vkgMn4yVRAyYz1V4EXWiXJLPXHPkUU7YctDqkG9rKMW2hW5Y1spUcfAJiBtoBLhkc6iVKpmyqcozoJqJXZSi6",
  "key13": "4jF1Ht4dRxWAKmMCe9v4h2MGqqRVuDjQa91QLunsFxoTXkrR2Bn6Use2pkqqTziiNfQHAKzQnNX49feDbS7b3BBJ",
  "key14": "55PYvg8QUi9iYhd5QqgPr6yS1ctaH18dS1Pvn3tGcTjqdhZAe1U8NnyCap3H4Ri6nE53VnyoB7FzDFKg9PUi46Qj",
  "key15": "4TiYLvND6WeiCXk9zVVJweBKhV2epPWiRefXbk7bN8TsdGQ1Qk36P83A65pKXurM1YYdjTsEVhyc4RFL6MJv5GP9",
  "key16": "35KKkPoKiYSmZmjAfYRs99AuTCadfjDTGodbb7y6pBjqk6SBkhR61h8icCVSuNDPgHnmbUQ66fKycpfSi8EeLbW4",
  "key17": "n5SNbaSaQE5cM44WphBYzRJhyJ2wN9CxJaEYa6RgrAtN83Au2m1T343zPcCiTUu7dNAqyf7qtLXypXUK7Rx7B9B",
  "key18": "2HRWPRaBP12TVb3WX183C6Qd8TsWzRt5w8eF7PfwCcQPymeTra3WpqXycdG1rNTZritA73P87R8PDqgpcQZ7S5U9",
  "key19": "49TP8Wekb2BH9YRkqnZxB3ApqnNdBnhAVnDSrhHJSC5xG5D72ZnPVK5hVs7qvw5Aoo1cLnLx7Yw5MTyZDKHsKWRt",
  "key20": "3C7sW7SzL9dYjEKmzrU7dfqXcy4kx4n8K1GHBdxitqkXLk5h56JCVqB9fKp1EHRcJSkQAxTzDHWp8sZy2PB5ZqBi",
  "key21": "45ZBdhxLkDyi248KWzMXzu7nByB17AMVchEKVRWhkWSMh1fyTJnBAuphxyY24MLcuUUycQJ9ncTs2hpkYoRUxkLS",
  "key22": "2HAsNfiXxuUx7uykr2fYG3eh8eM6bBcEkyjs832X2HCnMLU9eqGJucYiUMMaZ7DMCxWJ1dYKBRwhmLcCwQBfSfuh",
  "key23": "3PScfUF1tFdZiEfGaR4rw5nEgid4LQGic9qEuDfjN7W4vRGhRD3G4qBBwAbX113RGEz8tyHTu4N5jywaanxC6R4f",
  "key24": "ba2AeHZHYk8aSBAHGYcNzBBjTVQxtSAZU6q2MVrX1GQ4Apqo2aGQvqf5CopF1PuoHGLiFPAA7TzDDs7gA2UUiMf",
  "key25": "4FK7AqVgUqcfYZnivXGDD9gEq6pC5iLc4PjcCCngFcFFL21jnN5VdXMgZN5qjmh9sXjgf25HvhGn6npvAzkW6czm",
  "key26": "5HZ3MtkNorfCGJxiwazM4YvD38NMvhC2e7GWsQRu3SEfuNSxdWxQHB41mP5Pj61u8UWbbFv9RrqgeeDjnDMyQkAs",
  "key27": "5xDehqKQZ7h72F5QQ5CGWcMjXsAHz3Q9JwswWLh4FMPGYcKvD7eoUoMcpyd9BJkP5MqoN3LWYWHCnkPce4ECxt7H",
  "key28": "H6XaK9rG7frzkpGKqYR7NYmXuk2DS4KBwtth1dtsQKwLiAptKB7qoBh2gDhbT1S9HaAcXaSBmPreRjWKWoaM7eX",
  "key29": "5QJSeXMNiebDrY7vG9wrGSnFYfJD7VtfePgxJumd4e2sXnbqcJfnsFu9Hhv6h88cKL5iWMse4na2U6KW94RPyzsP",
  "key30": "3YU2bJ5EiCVNB3NXMS4R4vVWRSjQfVN5aUdV8m3Q67XapDbw9BV9kTTAyR8uCdJDrdX59UywSUadtQcqtPpgkpSB",
  "key31": "2vQxCQPNMuM7QThgDoTKVqhuSSSDoHKjcmX5bA2Ju3xn5LNasWHYYxyHCXJSbBW3UVhVseYxtj3nt5goUn6SsZ7M",
  "key32": "4UyZjEvr9iL7AJLkHPRN4tV11qZhM5emvxcSm3zuNdX8U8tEZfFfxHpykVGUu7buNE2sdEZTDV1cWnhy2eSXZCUT",
  "key33": "4L8vPCoMuCxmip3x1tcJAA89obB6S6hnhqJH9ZczVkhYSp8aFAr9UiBTrBdEHKPhDZTa46SMkVbT5HCc2HZz7Gj1",
  "key34": "eWwa2qcPomXPVzRKTsyg6uwsUes95wEe2LnYUseGewTgmD7zLBKJ8QXdYHTa57463n9yaej26HwQWbESxogisYU",
  "key35": "4ikePUfYces4QNd8NU3iCzFGbHdkPcmyRTyDS75jHghrBFzbQAkGC9qXMFWt5qDWFUZSRiAgrs6F4QFm8BpnoBYB",
  "key36": "3UQDNJoWsVgJpTFfGaQhDi1Cneu9SDuy6MDDEU8T4JYqjMaNWmXg2ZYbug6RawfwAKcnGvM95GGwFeND5GCchc5R",
  "key37": "BZrXCEkJ3SN22p7Yjc9eq7N5mZLHk1wtoG9scHSWpQe4iixHjuRLW9TaPjhjsDRu3Vsj2C2VdoqQraJNFX9vzmR",
  "key38": "4JeEpbVxgCQfcqFcxR7UUodg5o8S5KwReEiH47ZHdCFjRxSchdPbczEz5GyUh8TRxdti3iNpfLKWHGVa89tLsgTJ",
  "key39": "4u4pUZAvd9jf1JRf76GEdP1D78x6UKCmUVVwtmKVDqj9yTZxgbGxChu1dJQsALCtrLoBPdG3YccBEMBbLbKfWgZ4",
  "key40": "6wwupbhyHHd2mPuf6Nga4q3r98pBrPoykvwyfLaeJEeHcUXz4haEKuskLH3eH6EX6v62aVYqLE4VsDu3gnbaZK5",
  "key41": "5RKcDV9HPBAcBYfqhXmy2i6WbckAzUVqxyLzDFSWAWnDWABgvMkWvnUp6CEKrLd5nxoQoGvkgKgqTprJhSub6eUF",
  "key42": "Ndy7bbYi8RcKAx2EtQJhHfYxqnB9jvMpfcxXjmSG3hnFXdHvZumPVM55VQHeMBuwJyPMyw1vaDzRVunTzRCxTiC",
  "key43": "3BTgdNuzXAbSg44oQ83G1iEpyEa8Nr1ckSTcDnFXwoZJ4ob7ocyfQXVA5ZgBBfZeGEaAFj3SZJ1DdkfC8seoYHyL",
  "key44": "23KTRRi6w5PixXZxm7nBSn5zSZmQavacH8qeZmSp39v9BAo6mnSrgH72AmiB7hoHAvd2AqG7VZ5QvJn8UY6uAXw4",
  "key45": "3ZLsQEgqhYoaSy1F9U6tUGYWWfvhGFDrAwnN1mTTZ7tRq1TusqCspqykavkLKwxqitMUscZNDNY5fof4hxVrjoW1",
  "key46": "5RfvLbkkMNDfgZkLpFhXAEX7G2rKyjJBuZoEdjFd6XwaoaovQpJUD7DNGrukNQF1FrGHXhmzPCrwNuciLkXWK1gy",
  "key47": "BYRnGY86SeraHn4osA5kTYuRqLmsVAL6tSJs8dQgKFXk68gKj85sSN3wAb7qoAtB1wZwLPnKW1dAy4CMpAU3f8P",
  "key48": "3fPnJqY6swmELy3sK2LTkJ2R43hRH2HWHQ6HXEfkCduhd8JLfG4fLfskAmu6i8RyYd4dFjPTaNsH8e1dGTjufPuu",
  "key49": "2xoqL4qSbacHPBRNy2ca5L3SuACzkAJF8ccQzXxMLoAwvJdm2eErKHsA9p9CT7PDV3XQu1RWvcQjXn39JuQaPNMg"
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
