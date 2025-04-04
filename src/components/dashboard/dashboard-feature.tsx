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
    "rtDxqs6kcMoRMfCCpgeGWr1c4Jhf1JebAq1aiishd8miLQPDcc9mRZVA7HAWwa7ioGoPb2bjdLeaycfePUGuXSh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gUvEkLwPE51bZjNE2NoAE4fqMfNrRfRNctGwbt18N9a3d2ZJswEks2wm4ZH4p42jwoxkgNPmAZYSD7iVLiMRZmV",
  "key1": "2vLW3G8hQQ2EjMFbwQmGGHkidww2SFwtvwuJwGbkGTPatPe28mwZ1xNNpj2Vikz2wUX3H5mtCx13FnNozZzvRggS",
  "key2": "2itNVFDUEFjvh3pcZwe3GFaxH4UYSdyTyPeYofedKiSZyrUouvANt5v3ALXn3waNBHFH9rSjNGi4q8n3xXV6mgEp",
  "key3": "4bG9Hx7XYBqEgy8edG1vLsb7rF9SHEfxTNi5n81s6c2yDmvnbQtwPtSeYN3vAvXRQK9urryn88KqCRYLoh9wEdtn",
  "key4": "52PGdqJB8NHcH3Gbopqg2W2aFUhXToncQpwA129cNE4BJQiL1F13Rdg2czyYFgVFKtAzpNLXkhEsGTnjvZhTZfJE",
  "key5": "4gpuhzyX77uaCdTVgDJ2c1VarESEF713ZZUBQbFGQQVRzT7nPNS3vde9ejLZWLMpfXRx2b1vajw2xptTCChEEXrv",
  "key6": "4oHiKQWs13b6pBHgiSkgQtysAN89JVxL2bjs1DFCWw6x3fQYsdif5TUwfB6ChACeCe23XmS6WCRni9Qw4jz3DnwA",
  "key7": "493umKkh1XKdKKa6bpLNZQmfCBJj8abLHfk4AgMVJhopDWLPxMnT1Tdzp6FEHXmQd4HkMqTa3PjAyJGbf4Uhk2iL",
  "key8": "NsufMfAegAftAd3JUAvPsWCgE5mP9hAxEEV2iQXoi2LzdnV6x9CUmsXwBqT5mQUmFTVWtd3Pno2YR3WNrVhURqu",
  "key9": "3uJdTJv2MskGjvjciE1SR87QnXmphixA85tSq2uP5kfTk5ToiTYGYAAMvCGWVQDrTdPn6zMrDVUnwtZEciRHeZVt",
  "key10": "8RmJ5oqQ441c8G14rtenYtFUoxwTaAPZTutf1Ct6qR3ebNJ6pV4Wra2z4s711f8JvxtPttXsvqB81j9ystb1Ytn",
  "key11": "ebARenJqJRCvqk8G6Xjs6S1hDUQkQZcHXfGDoKJahTeFepTzhJqGzpLPgMXwXoQWovvTgD8Kp7RGBTM7b78pvKd",
  "key12": "j8KHwQLoQHMRhrsJ6yD7kt8X3VjP99LuKdKVAMPf6XVb3Wqfbxhy27zEdKchgvQBo7uKrDFUFjFaSo4tMwtkCew",
  "key13": "4nk64zvijQmJCsRQwYUmWXx2ctEFH7ofZ9PYUQUz6VJzkudqoV5t4djbYwevRr6nYosXEkbHeTWADZEUp5q6ijdJ",
  "key14": "4BFPm7QcN9fBjUL1DdfcoBNtZGmfP5qow8A9GPytcDjDbia3FWZdbnFwfx93q6uyqbR4PqEWixpFsdCFDTu2sQh2",
  "key15": "27V7qED3Cm5gEPgYAqroJ3fJiTEZWBs3HWmfDy4EnwE3Cg4To2itzmXWnj8fFZmF7Ut7tVR994rHdmaseXXLUFNC",
  "key16": "4WAvNEUWvxheEqj1mfLCzTMra8zKCRiQfYKRHEcvaeoZb4rnwpw6bfnN6U9r28ZRXrX8Er16SjpCYKpBh1YsyFhM",
  "key17": "4u5xmMvNBsEDoAWiznFJveZLVdqXqjBnSPxApv4WpSmpHWEuqsR7HkkghyH8wqyUajay7Ec3JSZ157XAPtjq9PS2",
  "key18": "2MRvuaghsQ1tPpG1TwBvDzcfVU3f6tpdDzHhCvxmn9e1HvYTqx64rkCtYmEjaruvtuPNCbihiQ6kfhvugk4RUuFS",
  "key19": "3kPH5e9PjFvBebuu8N599fQcUje3bqnwwSVX2z6g4mv4x2Duav2cpAifBubj5Kq2p675o2A1Yy8FoxQz84Pf7cZv",
  "key20": "2NaVSv8QTkPKLRYt22KDU5AGk9SbF9rR5E1JZsVdfYmHNfCz9DbUdyBtSfj6wNc5GUxdfgpLuHtBWSNv9iYV5h7s",
  "key21": "5pvEVQ7JDsaGnwo6HfivyufS5GHrwCxBdzcuyr5vbGTiGvp2W368duS9qcXRzzy1RfQEV83HnGS9aCbcbwCSrUb1",
  "key22": "61Lg6AdYypRAz9HxHQRGavqe5J1YKrHX1oNmM13LYdcL9pZgKofuDdLdLYnKhFwvdFCJ9jmR9t5PUmUkbgkfHt3p",
  "key23": "23tiDnbg5WrshiBw22EFcz9NktNofZV9dPNxo25YAMe6X5F6SvgDNzUh8LzsjJsadia2evFFQcqxwoCMssRgqm1t",
  "key24": "4fayinBfWU9fjMGxHvKDnubJkpcRhipYfF2wZaLAxKGm2gXsJ1Q8PnMVq3Rp5gksEidQYmXeYKfq29aqtPADssGg",
  "key25": "54qQCeXA3jRzYjgpe7sa1s6RYWzcnvxnZvtEwQNoCKCMFF84nNpHHwUy4EjUNUAptWvu6bUFoAQVWvrNhzvPKPb3",
  "key26": "651UHiQFGfztC1YMSRtBXRED91Ep3gLDgLjgp8XVwdm9aQPmRoMBoMrDqWVzXidziHXM6eH7KqW3pcprAxWzhdX3",
  "key27": "5r9c9gJTcunQ9iNzn6LXeHBLHrNFRytjEbvNUbLpx7xs8mmVw4zqtLDMfDt5uQ8h7hhsiAzQ7gSVX4E2a9LBwxxm",
  "key28": "2cwP2c3BAiYd7AbtNV7bvKq9teVqhWhQaFRuPbn83ngSYm21aZVB1AqmfA8UnnrXhAtVtakw3gpkQS6gAcXWvHcX",
  "key29": "2X8aEcaDZFAFdgcUxQ4r6m3qyCvkYSfoAZ5Ap9E8ift4iDtxW1CfkBsEiFwrHSrNFgivovHQMmt9oiwNHq51h1cu",
  "key30": "2EqqyQb1ruz8XJ7e747vzJKtHcGvycnz2pkYkKq5gnD9fuZf1Q3K6gb9TJNrMdAe5cKGQn7e8ZymbK1EpesQoLtC",
  "key31": "3h8s3WrUxtmZDNrFxZXtJANi5kkqpgQKUJWfRWUXrniGUSqnqGkzyHrLpgSKjcPStecDvSvGxmxEu9AU65dy7VFj",
  "key32": "4p5zuHSyMi6UudjiCNapV4trgQmrqEDjZnDnQFcjBvYTC85dnyKueZayFX2J1wQREAHqc2L6iBRdBwurw5X4ETn8",
  "key33": "3ScSCuGF9A8B57wXUZrnKQCnCP66mHga5qX9RRDXrway3CPCzMxrPdpQ4HRyvjbDmkwHaauvD8uRXcCbLxvHKbWu",
  "key34": "2i58GxSXLxiPnJhsxomgCnaCxkDKfz3d8diEz9VViUyZ6vEQMPHYhTc2Z9YbqKsqEL1843x3tpJaqzKmxfezDcEK",
  "key35": "2p7tVxeSRbyJp5MZE2bwGSXpFjwpEBwXMKTaSb1sEqg1wvJ7PwhXDEA4RSjdhm1pP3w2CJuyXXrCZggjD5mRJMZk",
  "key36": "HgvngfLXg6GNyv4N6GLy3oPEvYi4GYzWuvwqpKFdeATnh2J1g1zKhhngVYnicy2hVHZo1surySQ3c61opB51M4o",
  "key37": "22GsXtKm9qvRNCDJATcNVgTtvwBqVsea2VinYLaTRxFD2QXoCNLC84EkXjnzG8QGaGYficEFjSmpeX3mmDVBfcyq",
  "key38": "4gzHoDFG8QnmwL4RxRZQ26h4tQBDYohR6yXabYJi5d97KjRXY8hQiWtzRNBKrDNzStduQEBZDz4MUoRjtRJeL1r3",
  "key39": "2WNfjYKtef3wJ1Jsqp8yigaiY47Hfki8Dr56SQt9PDHsLSqczAvBhhvPVChLhcJGXBab83VK3CGZk4774kw264tc",
  "key40": "4MK9PR4zVBfUEGVkp3YouYnqR8pPkGSNpXUXrnV3HGfHaKWY8aRpvYwBLtWg8uaDwvP8RSK8eKvVZm3vYvfBE5QE",
  "key41": "5EdeZM3bbi9euJGqp4Yx8zzdQeZSqaqk96R4QGqWimV7iWJYh4aN1oudWPZRLSVgBtBD6zRaXLZNhAdogZigcUBH",
  "key42": "5oAouU5jjCwmmkST96JkBRP3Y4QdiYZHKisEt7M2AM1HC8yQPtPXncdC3e1vAW79xxArydnjqBoS6kotb8Z78sya",
  "key43": "5Ubmg7wC1F3FwUNSbAVDpGx7DEgWm3vpDCvvw33qbAyD42VfkpJF8MKnGxCTnScE84DeG7RXqrGEo95vY75dscJZ",
  "key44": "5tMYJ4hgDCSWVWpYNPM1VmzaBDaC995o4xiehuPnZVNMbVhXqzvdmPjMVHD8XGzSy87a1N9giCukC9DjTQSzpedD"
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
