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
    "5kkaL8qTW9U6oro6rLF4MKrPAgg2kPBuzdUQZvh8LUyDiBUad93TkFzXgBSr7NxmDSzCK6FDzWyKGKJgVySYvM94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Y9oVriSbsbvhuED6wXK15w63orBMe75ggkpLMieuMpjW9rrkUrike75837G7LCbw7UEUkgH8cunD5Rjy8DT9ZUR",
  "key1": "3TnncxvY5e22KD4RiGeHGz9tXGgcCLQomxd4vEewyx7iUxCykp4e5KmG35jzFobYhc6tYhkmyzmxLVbVXr4DdUck",
  "key2": "3HHM1wGKDt1j28DmuqBbWiDc1f3FFJxEKS7wV4rB6uKpvtwr3Vdd6rQ4ivfScY9mNUww4jTrvFkYmmXfbHJaDsxt",
  "key3": "3vkK6LTh1gawarZZEfMTwT6h89rAKcEHmQ9vjtedxwGMYkiLxHaHqC3UuhjqwXt2JuprG4gwnq3JgvVsgmAjSvEz",
  "key4": "GKutZv64qptR8BiuE5t46LKP2G8KqFwi8pRV7rm6wrM1Zti5ikub1AJ1aaAWsATTyYR8718SQAtJeARkPr5ByL8",
  "key5": "4zyGgD4RbxBXMk8qoY7M17s98B1cHPMQguFBuLns57mnvxHxJt2KniBWjLgADUetP24TCzG4Zw5AwdsJanaWUTGw",
  "key6": "5omxE7FDKcNCxPgJzVsE22wwsBH8aqkjmj7aAse8AVaheSx4BnCZ7pLXNcTptPpC5ys9caAqiYmJHqYeRzz1Z6jZ",
  "key7": "5XXLgvdbos2WC1gNQ8L7kPREU2JjwhwG95PgrKKB6zVMZDngj9V4DG48AJt8NgbmKmJZWQF1AtsAWpegtD8N18DB",
  "key8": "C9dxRLX9zThXaPvrrGq9CoU1eoYGdwY8r2sSaoy8jiVQT6iMPMhaJGVezG3qhZ74yWnRshzaS4HtPXf3CCqkLnQ",
  "key9": "3G4gaXmxCzDEP7sLG6Vik5WTzVAyYAgRwPEpy9cQX67KtndNw8S19u61dLfGcXhkx76YHZebe9BnnF3u4CGYQj2P",
  "key10": "3hfok71o4yMd6FXz9HgQWQaM6JPeERxcL7wa9UwXqbPLWwXT9rsYoow6Wpm83eLYrLwXFkruantDoLM3MptGE5Ur",
  "key11": "akdAihyEqRrbES9bhjKmdmzS8nXhPHSD8a9HGBtKWgzRLkC1qQezLFBhgc5CzzGnTLkW6ZWKE5pAFR4gw8PCEeW",
  "key12": "5MujssukNVZKen2vDwp2Cvvs5WEBD4GzV1v8iWzAbahH4oS8YeBkYzzZo5QH76G8HQfnjYar38t5tL7wMf3e2Yab",
  "key13": "3XLTmuMhL5DDQQCR28mrQzkZCPJrX9qKoB9fxYbR6j9fKUQLnA73pQMDMDpjbUfojo7M71uMnmhYKveSou82xqXW",
  "key14": "3yY3Skn2iymkhj8EhpvyLAkj9nN6EL7uzc41YbutCNAF99fw6GVNLGrDKuEv6FFUg5pP7fQRt2gJNfyMkbVbTk39",
  "key15": "537aJQVuzT7gtitPCe5LXvNKfBT5xGpdjbi3AeCbcejZXcxVJXZiZfNdfs4YhCmXJgTofJbgCsFfak7Wh8vRYz9x",
  "key16": "5N7xhBWv4UM4epEcgXQnEgAHXq48av9XbnLA168ebzjdHeHGd8xnJyrAdy7aoZXvKxf1anXsh7KrRX9CDN7smHn4",
  "key17": "4sh6QkfjnQM7iTVgd1E3kztpVKuDxHcpRNVTPXHoN7E8kPmvEkEsXjXmtnGuniDPDJsp6ZEWAZvdw2yc5Ziqa895",
  "key18": "48VMoDHiWzLFF2Rzq9vRwyxfiWmQoxW5YDMrChiv35e5RDNfoZR6qkSKmZK8z55PvJGCzRZG61t3HG9YgVXnXh6P",
  "key19": "4ASyPnGqoMGZdE8JmJqtKbcwH1RZpuj7tFGZRbFnkhaxqzhGDXo4ohJz9RfYyUhcA8Bz2rCrdPBPAz88XBvHx1qf",
  "key20": "Xv8TYaoSxR7gqoEjgFL7DmDwYE4XwnEQsjAAdqjtLSVKV56ym2dhAW2pubZngTYYCkViSjfgVoiqDDUrmx2Vima",
  "key21": "2r1Z3UkpKTf1vPu9KbxhSgeK1Gb6vunbLuUy88zLY8jG1p9AdYFmxMFTsNYv2F3Swbhk1EVrQP3vDPS2p2dvhRvB",
  "key22": "23Xwxh1uuS58N7Bxa68SJWab1CbN4gwoZBzuy8EpgfNsL6sdnRw185X6E2NMa6rEuvmV3D4ZsUWSw3dVazrSoXRG",
  "key23": "4dTkuvKaNanMPxpRCVb3C49zDHxgwofghTfLddGQfCAEAHjh3Kg2vigDmriLWiWz3YqQqQ1JezaY65cfCwiVRYFb",
  "key24": "5TwhodGe41Ln37mbwEqjo8v8NU7aHTcaC9Hh1jLksf8U5fVbKw2mH3aY9dTKGemAi18LBCwPWd2Tf2svawhwJ9CF",
  "key25": "4e5pjUb1ZWcRc6pYH3jSCPSATRh968tNco1nwkHXg2R5UT54WHUf94qUt5pUARjZFGsUCqbnSEQdzBNDCKb5vqYZ",
  "key26": "N78wQj86y2N7bJrGZ9ynJrDmnuk6EWa7skQafDPZFm2vRoCVMhMiAfBTGTdipKMR8oLzm5Dkqb8CBw2Z3aYQABm",
  "key27": "2E2ydBMzEATqAFdM1aV12WP1Stwcet7xP2dRrULcpBAcPpAJWTCrP1e3hvXXwtV6DhKwDMvwCvosqyaXdXntywGM",
  "key28": "5DWEUH1X7AC4qoQ4CbYVvvJV6rnGqZafCgus7Gi41KXDBfJDkGb4xqaJbpsLhBBqjRkv2tdjVK3eYtPQwaufkWFJ",
  "key29": "43aweB8QAvtYKfAhQpxZaosmYA5tu3jpD7fShDaygRzt9Jm6f3PNGiGWKnHuAfsxGyipoQRkYrQ9ugfBSyeYijie",
  "key30": "39Wd7iSLZNEjoMi3Mcd48JhB39eX1svdWPTT31zcVTfJyJmdbvHTqqaLJLJ3mKt8T8ihAPhWJiCk7LZPsjcF6Qsk",
  "key31": "33gSg8dr9QmvAuskDE9sTCHzDtPfWbZuFx27ZQxymx5rm98TZYVzgUrEhYEiFcBr5gQCcTWxP6RefaVx4DhATYzi",
  "key32": "4mggaEjTKLHw6kA7av1L7cdnWf7U46dBoTD1D51i5t69L1y4WUbpHZAXkXufHAptCFMdGa5CHdBE1k4bEMkr7QDt",
  "key33": "3tD2av5iYwf9hvmYy146GKcfDKdWosu6wR3YtRt7n4vPvCjbSbbBhSarrFX5TjTRG7c93hiF4zi4cWNUMQsApFTu",
  "key34": "3tpRoRRGeTfbTMGWFkQWhFW9MXqSmhjr5kDb44p9CJTyAoSbcH9JSDTS5e9Dy8hZR4Ci3kz3RTfRFHYDSiUBGHbe",
  "key35": "2ycrDdgbHke39drKR8nk5LxGQ1pU2CTskPuhv4P9wg36kkhCutpXWftwg4mCHj8mQjmZBVTci1wJ8HX7KQj6Hnwc",
  "key36": "m5Rf67WxFyQZ6o6ChmdN3ahi3Ua5JhrfSqa36DZ1BtAhnXBWp4wKWd1veRDRi7A3q7exKwqwQdFzMxzoBAu83e5",
  "key37": "8QSrp3Ua5jxbkCU6JgcV7T8daBqjrWoPdftoZYYt9qniyEPA7BkjVijWWBhDensDwQ5dg8AJ5FP9qygfotiPmNy",
  "key38": "3zuKutqz4hRbg6PUjozSmerdPsY7cJT2xWymnH8ojn6FUfipFz2YJEHGe4W3rVBHhL5v3TycyyhuYTekhBf91Mt4",
  "key39": "2hL9HanFR8NYPX6Jd416FvwNcfPeuXXmePqDvK35ojP7o3kJytdHJ4jQhf7DmAV9MvKWJZMio77h6erW9eTwCw1b",
  "key40": "9uzpM7EY83VNgPv9hkaEJb48jygzdGtLHwFFEGGNYko6uwBoKDYxT4eoNbzNJYiqW4STuCntk21sDBw8FgrwWFo",
  "key41": "3Gh5uTS6MMK4DeZ4d7Paxzhc7WZZFM189f6m3NpTxHNGUJsKdtqquoEpktSk5T9CpBP5Jnuebnpuxssk9ntALqHf",
  "key42": "5t7D5PTnjTjzVTyHTjrK67DP1c5YLDAj6NRYvpoyWBugCojY2ApAr5sGAAYW35vpCrAqn6THg5qXwCaVisFFZ5PH"
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
