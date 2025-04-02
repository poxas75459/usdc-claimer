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
    "33zcYnd7mzzY9iAfxF5a7wuRoXhTLxfxjaGuVxLqQoA6VhHehyJ9QcsBM7ETsamshsTZUdyLb8RcsUNwL9CoAXBV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T2kZ4dB2pDVYmg6rdG41AYRHuW2kbtVDg4BMJJbi1TecHVsNe5mWQEEVJambYkku9YKE6CATQrnpTucfXGdkZfy",
  "key1": "3fdPjjTEHCjLPNNmTLqZgQf3aKS2GUsGBkFXPZLLTRtRbyt75FfNnLot99bje4CQxQuwLkibpaUyeeinc38hh9my",
  "key2": "2vXZYG8Rbf6PhWAWBgtoxPqWaxiNCSGvGzqLFER75TWE2tRWa8unNwsoxUtRzS2AzNiGTTcLoh3u6zAeGmUuvyJi",
  "key3": "4uiAD6pTAWQx4xTLoh5goUFJKyi7ixqSrCCpB6pwHJ2yZFm4TbASwYdh5sGeythzjvgYyVtULGfa9e9BjnFFKdAp",
  "key4": "2ritYNzbtvh7Nnx9TLwLYyE9wjmpxheX1snkh5wqwZC2n4M317SFMw5b7vCUBFABwkWLPeC76EjqBscyE3U5gxzA",
  "key5": "5CusYvaeG6RZYh4PHey9KsTLuNAr2bpTp7VejDakFEPapto1NTKQFUxtitnG6VgGHJqbPJwRMBsyTRN9XnsXm5QC",
  "key6": "2zSMsCH1KhRxuLJS3rbxv3yzcfMAogQBhozK8BNSjj8rFuuVsZmZ6CwxHDwqThUQsQcVg9dvTU3Ax1C7QGZFs2W",
  "key7": "kZic9ZqqmTVxmcd5sd9WbUQZr9w6L1cK8oRZP5PoETHZuEuH616qjTwV2bTr3qHakDDMmpVKNb1mYQRmYdkUwag",
  "key8": "33WQU5QRzwVwziKUf4NUYiJ97NeMXnqW747guQ2y6JB2g4JU1gFxRZSWuLDUaEfipcoyDDL3sAUPuWYqnjXXiohg",
  "key9": "2XATiKU1sEqbzZ8nwDWE29hSmrfxJ87MyfJe273K3ETYcgDFYir3DfiARHEiDdpouGa9qLjU9QtAEwcuhjE6crbH",
  "key10": "ZUMSNa4UAGoQ6NhDj9GAaoh6Qiv9dw2C67hGWAE6oeapEBpTMX8FwR3vvCHM9ayuD63U6BdrDzTpupsoX9643Wc",
  "key11": "3ZGaRhicg1NLyxe3MQW24CgFSvg7Wi4waUPFPbkn26Mb3bmUtz6taSwQppFoB2aDrEdS1kK8RdT3zFoaQhaETBGK",
  "key12": "3HRCLsuhZsro6rogK2YS8UjsmaQMRbL9p3Th67F7w9apSYGxQaZnE5rCaY9vnFaL8w9e8ggtGsAJbqFS47fg3mRW",
  "key13": "5JcQ37dskgPy1V5fvdW1NkZHfhJ8SvnD5S6ymCz63wxfsfWaRvQHQHYuuzYWFnqeLQyd5bLv8kDaqbAhb8vL7A4",
  "key14": "2C1kpppkqgmpYVfDDKTkacWTD2sLDekMDMG2hYfFFERAxxCxMyM71GvJqkLV75fdVsFg3c5gtwqbpMAsvz2n1nZZ",
  "key15": "oeW7Cs2nLe6cY1nrWP61QjLdd4GTBfTVQqTcd7FYm6UiycZMfqK8axUNnRYQfM1GHMEtJnNcPaSjB9A1kad1Uc1",
  "key16": "4o7UBqcLyZeSutkcnoPMu5kG3c1CBXpQ7sAn4cytXxqy2k7Ri7Pi7hyAuurChJvLa8YqjKMzCpKWYE9Tfn7Z5idB",
  "key17": "34QbE3n2fW5TkcdX9y3LyJZzQKNj1fKZNsF6tQ4DFsb32mzC5g6EQ8cJ6M7kpW8CUvabqsSk4CK3AzyMGxXCqc3K",
  "key18": "2DQM8h7H23yrQAtV91QzYFwdmkUHvkuC7ZDwvbsaVqpB79g34kYhTWHdgHNn2YcUnycc5VNHf4dkSxF8BEpGdEeZ",
  "key19": "3Zgr2XNk3gPqQEjyFCsZPboL9SwnogSEN2L1KydNtzjAZ5STSftWaeDEAYG8oFTGh4jwXCyxizYPSgiBRzc2UNKE",
  "key20": "44xnRB6D9sQGhEietfm1NotdKNMXCiNmMnZAHBrsrM1YbnsFTvkwxpJtotmMiUc7SXqVZWNVUf93PxbqfN35VLwU",
  "key21": "5UT6WQ7z5P8f5gh2PcVwPByvH3zfZtGVozANQdY6DGfsMSV6Mf19XhYcq4NgUQcBQ1sEu2JHrBTRPMxzRvbkTghT",
  "key22": "3VEWjGY9yNxqbe2CoDcinkXCcNTMX2wAyWYUv6j8BeWq7sGpfMJS9B86z1hWiz9PVLDj5KkpXAqpmMqUH3kTq9Xx",
  "key23": "5nt3Ckns3DGbeKTxYrr5JJombapkxswnwxvzaCcDR9Zy95mLNvtL6oohZPQyk8cpWeB4HSkuUc2WfEH6uf9q6ik",
  "key24": "5NSxs9ZLAKhLpEHe3xrTXrgtRqqA958Xw5DL7pgk8HvccZF77CLhMqpLLHuNcVsdPkyMKKW5pQgFhMMKbggyuH6y",
  "key25": "5FkpGv7b7jMj4Vk7mGf5GH88R41MeSEWjRbP3EHosrZopZRNxT5J1XkarMeyh9rA58k11FzTPn76uQWU3tAPTUHa",
  "key26": "3AjpA5BXpyLg4DgZSCjszTuNwRXrUkxCZFZv6wuG84CE23yHAWuANKbjy4DD7PVJqgokUos5whdxtVN6yyrhXmq8",
  "key27": "bHaCarN2yYECWvG8EjN5rVsjaNS4VNYFvXEQDVyrFBuwAfyFDvUhsLeUfsUJngwDBmL2xUpkjdfYUHN9eFM5Lqi",
  "key28": "2mLeMUgePGaVS9eTK7mwG232xoEcZstqW8AVQWLz3qAvvSibfa2sjM63gvdq62EDgDsiRfv7wCJKjT64bzUsMd3U",
  "key29": "2F7tptMhoJ9VpcxUBoyrBkyo8BB2ZKRjA7yjiKaNZ7J72EbQjAUHPQ4yTwCkbG4oWVgCxKgPqtdonJsrwgN488M5",
  "key30": "PVtBYqZ88vcuz55p84Tk5LCLKhbxRym8QmQJJLRctCzy15XtuNKZCnwsvpGZKoA9KBr8aZhJCVLggokGixcEmwr",
  "key31": "2CMukSRwwRpVhzHGNPTJQwMS3qngi8kc7Kz5NJ3dD7GvfnnL32zFin4s5TUyfzWf91RMAeW9Qmtb7GPiZTPwmXTv",
  "key32": "31EFYczcJXHKWA7v6MFhmAxnMywagTsFseSjkvi9kUhq68NYNgVwHr1o5ZfKnXswqSd3rhuLH2b1SN7b1SU2jw7w",
  "key33": "4QdmdqUjnaR4DTbr693etoCKcYjGsQ5n9Mu8GqrhzLiukQw1aqSJPYFBfDX3Sq6aP2PGcRkuPW4fsiCM2AyiEXtP",
  "key34": "5BLxv66h9Gdu4RYcCwUiRmi8WiobgFGrotkk3wC3W6ETUFBKY7TjJR2isJXdwWuSMZVBtvG2jsZp54EYpUXujghP",
  "key35": "JA9Rdoap761zjcnbkXnCrxyMLSbvpNhPJVD91JYHjnP1v3pLYUe14XQDUovVReKaEKuCamspAgY988BrdkLWbjm",
  "key36": "21jxWoXXgoySTAWK5BuTbiY7ZaFLom4f1xoXC9U5VYBSDRqDoRcBj6CFMPmhghG8gNo1MguWbVpVCFw2QMiH8NcQ",
  "key37": "4yBpgXopscHYny34ZJ5Psq2aKttVobFrojurWPK2nzU9CLtsW9rEKSsQmQJS6xPs5J5fEeKbQv4rWpw3gtSw4XuL",
  "key38": "4JpEwrzpw7xz3Z9HQbXoo797brD6HtkHNXqqHLn6BFRiMLWQUAG2RhX5mdVKMsszucZ6bCiHnS2xhtGkXMEVbg61",
  "key39": "9MnghTAU6XM3pRqyueHZFeGzs3m3RKcgv3SeyJKsXJSmhh3g33bKV3jQiyKceiaK42uP3bf9SFYE7ZdNQc59HA1",
  "key40": "5j7u1Ahw4w6cJtWdpsFxjaRBz9Si7jE8Hxb8bnByZTuqEAKiiiLctFH4WHdgUHJsc3QJUqakSqa5hqmsDvsvHGdD",
  "key41": "5eRQPuhm5P75ezHj7dDYwXmcksyfJ3RK3gHTzcQrDDSJsgkxabz7BvPHXFXgVM6ZSz746qwa78cD9tPmsRg7Hquz",
  "key42": "4tZKeNy8mBcQh5jheb9A2dpAoXtsYrZV673ct8t3SfJ4i17RiR49J57bProCdhutS7Zuyd4EziumMdPSwgzGGzct",
  "key43": "5aB5m9TTCfAL9spXXTZMS5FejiiF7yZAJT4DsaJg4CVSVx9Nm8bNUYdbBHLyYZyqA2M2879wfU7vMPK4tDUs2KBr",
  "key44": "3V2tvccxYo7V11Fx8cpK36hwzKthWoEjoBCQQ8oJeYqbe4FuF58v9p7U2KvbZWPVdir8MirEqHo3jX7pZrG8whP3",
  "key45": "3998idegqXb36QBiVDxw8m7BbimC8KU6ooWNGLpTdQ6RkfC8pDdGt4XYayX1djzF6RgjX8WAkzTWi5rLpiGZitMg",
  "key46": "4jBjwk5XZZMGJBdRDhkiywsZSuxUuZKgZsDyE1ohmRryY1dq2XKrLmGzkPKjRfA4um9WKtRzTE9ojrBvjy5AKGER",
  "key47": "2qqbr4tf7qrL2E6f7xQwNNW8PinUkRYVCQMLMT94EsWmdhUZFG15bFjLGvUgVHvsAzgkEknv8S1Wrmo8siyuXXU6",
  "key48": "3fMWYP1bJ16tPdT3dh1eDQ35vVq3hiuQ4mWVzH5SQLM3DWAyCuH2S4gpkozbbJFbTefq8cTWPh9dQZdj8BJ5YJUA"
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
