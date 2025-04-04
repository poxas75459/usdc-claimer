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
    "5P1rQtx4iTHHRnbHNULxFy36dNtMwEjHRA3nLLcA3ix34pwGusq8vfJ7Vuk3HX97iSP3YFDZnfZsfNyc4uGnQoDR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23YVLJnCbAtNEbTpZSmu8UM7bGpQ3YcHQ4es5XR4qmJxxxr5Yy2EXHjC7e3UeHtocYPPRdmPqo3gPhy43dmVd42F",
  "key1": "6BLGQ12C61himjR3nfwfJk3weB5npgDe9zCGp6yeXDiRF6MMAknixxW4mgSqikUJack7HTQBphAnqWTwY6Gk2vs",
  "key2": "2ouMgzRuB1rXpP3xvBESWbgBEAwBi47xuBFsMzHSyoywEtvejep2eqtHaNp236tDQMeFj6Ph5MeZcBprftV6dH6j",
  "key3": "3Jn8AU6BG9KGvzGEWRfMDWAFooGQC5WLzazL3Pv1y9cVS5RJMHDvaepyaB6VAyb5zo2jvwjYpjpaHXxWZngTcCeD",
  "key4": "66qtRSaviWkC7bCXMeaRwhk5NqV9kGS5mfcnXB82dUqy7is6HK3vw37YsM68R9m1kKcwD4nFYCpkxkz1p4RbnNvx",
  "key5": "21egNimwXocJUpawuLezfX6QkTJDHM3J9hfruVgg7ccFd5AGHhdscqddSftmZJRKj4EaUaszfsvzi26U45cv4xcZ",
  "key6": "5ShcAFTU2g1dqZxab7xD1mEyXFY4TW8FghUve2FFa68jYPLKDjYipBrdyAwUY3ApK72enVs55ZPmr64t4b2X7d2P",
  "key7": "5DXNcG6EUXyVZzD7xsBENiTfkcZtsk6r96H1G44UdBDYZR7edhD3WCXmbFBwFqJUKqwboPse2spcqChH5uuCV2is",
  "key8": "pTWY16YPsE3wbqEKeaDp42Sru7RZJQHjEwF5p2jT2STUCa3aUQQ3Qt4dX4BGtsfprt1y8jhTHj2pja7R2y5YNGV",
  "key9": "9Vy3xUC1dzbBYAEpjrCWJriYkQMoGmnzR4rJ1fSDtoUBdxx57GDgQTHr4Bt4YSYmBoSYqMngdFPFqTqBwKFWEKq",
  "key10": "3uJBbQd7bZyhU4CG419s3XDkabie3wt3xaXDrSquVTaBdn9LRJ9Lnv5on91cdBNaMC7XgiDpexVjXDGowU2cEgpD",
  "key11": "2PjeV1vea9FFtZvndUk32uwgPj35FyP5ohjXNNAHDbvHpbgYxavgpowxynSBQe4gZUnASJGUTFJ3ufH5ZjDsNnkb",
  "key12": "3dkAfNsAre56dHBNS1q6kBkqG895n1QrK3AdR6WrP2HxT195t3aF6xBYApduwFNzCKK9asXE9DVAwmfxm3X328AR",
  "key13": "5jsLBMXDe9ScshiqoGnoAAr5CyYeV3HBQStyzdyQEB5fdmS8mZH4KBSgr1we7TqiZN9ouc49KHs361AcC7iFdbaR",
  "key14": "58dfpzJxuLEv6i4NQquLRJqFQ1A2F6tPn1S1CfkzkKFWE9myqpnDkNXQuKRvwrgjBtyWCepd32N794YGxNunjxbZ",
  "key15": "NduR1eqhtT2kZEekYNhVtiZR4XfqZ1Q91WnaCrPUryG2VvbPPuKy5pno5MCmqftaokKc8FF7vfb2Z8VS6hz4nft",
  "key16": "eLFwLWvhRe7wTQCzGEG3LPE7XHpFTG1wAdEgLiG4b3MVkLD5aPfojfh1388FHzzNFtcPtVnU1zipenciXTf4yJU",
  "key17": "5UvtxRoKNVLey67XZqLWTVLwbgGXsrXLnZmw9MALKY23ZB5ZawhRVs8MpSZUedFx56An11zTzTxQr4kyEjAyXtLF",
  "key18": "Fj23i3j2QYetZTPfNVrDYd7AN86Xbzpi2k7AXXJDYsX1iy9zgKs4V6zXXviEV417iEcZjnawvvPXizNHJk7KMr4",
  "key19": "4GqYgu57TMrSqEAC4XkZHHWz9VbBgbBNUqVEdUcXjBTnBRzWdfjUUDYwcxzaVkVTnD7yz5kqjsKTKHeHmz3AJ429",
  "key20": "38RCcUmQ7q122NXhKVVGZVA86t192XDisaMBsy3NA1zoCyMjkhc7pJXYNrBfhqNWUw1dzrYMvjVfMxRPg148QXi9",
  "key21": "3tWeacLkMbXP3Zf9HUM5hBAZ4NqQymHfDmLkG53R3YYT3JE1pHNNjNGtfs8DjMu32AA9aise3boW6Eb3oSbL6yGf",
  "key22": "2Wao927BD28WSqaYTk2KnErYwDcaEMik4tPi67M2TgQw8STDHZnhEyuH3cNEigL7uSeuMhJiW1TroKarpMLp848r",
  "key23": "vBj3ezmG7hxVxHc9FDFBMPsvzfpZsiXTyscmHuxor6HbAhqU7cEgxXjCXrJihkGJzPmQEQ1Gu436T4e4fy342iw",
  "key24": "2gfcXenUfsD4YUsLLkKBR3GzTHUViM5H7BPkaynbgkaVxWpGsyxME6qrwMiwjskd3uwkoGYt1MSgReSArAZF6VTy",
  "key25": "25gbjwZiSLKiDWDy3xM7AjmVkTTXoPUUcG7Vyx2DRfydSZrDYd7m9dh4fCwn6EYgfLPTioiWx8cLczGCm4EzoW6W",
  "key26": "4pF7Nvo9UpTivy93eK5BxMzFgHxb1VUj4QYd1igPc1wL38Wumb99aWWopHxoe6RMNetDxgWU8e46xRbifjUzNa65",
  "key27": "64W3EB6Az3nX7w6dtQbdxXSc3A5oyJtZp1JEVjqDePLBZGvjs1Gt44YsFsezztB1H7EUYVkeaEr44S6mSSQ8eTS1",
  "key28": "64XtZ8KirB6uZzyVh2RKf4ow8Y7ypw2ogtXrHowt7edT9gGASoK2uZPuub57nkgNf1Ay2LWcHDTnuGgSmzHEXfim",
  "key29": "43LY6mCo1uJxKCbDdAJBPtrY1Gn9964M2EuECprUvq72BAZWnar4CbeukBxoejQ9vd3UF9fTUtnmy9MNefX7YiMu",
  "key30": "kBUPitaBCM8KHveuM8D7wTr6VRTaovRV7LjsRAYiiY3qSDeqjJWHyHrqKHH4q6Ns7ytu1dfXHxpTCUaT6TPmXst",
  "key31": "HcnqSwcDrrc1brRcMZ739vXvbP7kow8q2MF7gAAXDhxkxGKb3dLfhNRo3Sa5H6SmzwHEwKNXiKmDYkWa2NGp69P",
  "key32": "45KHL3cQhP6fq3CVpCeRTHNxNXKqKjhK28THX6gBrdfoA1cTHFQumhdrQL7yR4uruW7HsVmgUHffiJxkX5UUQeEU",
  "key33": "27e3a1ahkv4QP4tCWawikd2rraGdfkX7wxYiEYHxdj6vndPdKSvKaLjzco6LJja5vPGZzvRurZE55W8TdCoG9CEz",
  "key34": "foTmbenUKhci75R2q3FfSs1GLyL7Wa6uqM5N4mHJaFW8nPz1n3MppBraC1QB8e6kq5UKx9m1GEQnp83aMSLWr8J",
  "key35": "3NTKLTh5eQy79mXnTL9ErQ5nBhD6v7YdgAduz4whpn5XT4zJvjTQ55iZa8tYmAujLFdMKefgdmQikSTnVYzGBgFJ",
  "key36": "LgwfzzHqWi57szz1RmEssEXBjHBxoKi6sy1himTKyXZbRX8fEGUsJNeJMc5Y9syaMqGvgNSLvVoUGAB7FPhSG68",
  "key37": "2bhowHXdGtUwBirGFUr82Uhhx4RqjZF48PDP4tm4S7DsnRWRdiqKb3xB457r6KwHU79VMaoTU2jnsJdw47eHqde7",
  "key38": "2AdNCDWEU6gjG9qevnp7CNQbb2P6fLAuJfxMhjeKp8kTuB7QeToPu95RLfNfotUMkU4qeppSYDcLXSZ3Qsqic1Hg",
  "key39": "4o72zYSQ7UTsRFPYgXYKymUF7NSC712yuCSDiYGnXFupHfamqukW26RyPzhTfddWZBQXu95vX7eotTAYpnZGBpjb",
  "key40": "2hLSgg5odTm4J3wn1WUv2uGav1SuxXZwRhpjPXNsjr7KiP9Y8HkgtbdPhtvxtekqGecTAbwCyzp3HxVHwXQk362v",
  "key41": "7wjKHqWoGsUatQFwrQ2baY3zXnPkD83uFAxLGrdh7AEAkVYVAKumFy8wLf2YXKrANBbTrrcggNbw5MxQ1berqxx",
  "key42": "5EK7Doyp8XaDCDDPwjhVN6sfaDxC4T9fnkxPPaT1StggVdY22avYbG3mTVNfeyvMoHkrPy4e7Q4qagLgnZrhor2m",
  "key43": "4e4abuft6FU9e9NkuPUjB45eM4SjVMLBW5hnmfhyzivJZ5X8vgCB4AcbAZ1eJFLyM54SN3yjpCX5Sb2wcD4pPmit",
  "key44": "2RLmXrLvmoJNfxhF8vd47myYfzMgbytBvmuqkDQhN5bpWzFYRPe3yzkgYyhqPCin2TBX3uvWJ5zpcZbmpgTWTbp6"
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
