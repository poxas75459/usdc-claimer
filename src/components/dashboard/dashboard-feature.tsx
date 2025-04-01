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
    "4w7TXdWNZqcWcqLwadGEa6Db3g6G3FL6seYv9esyffKaCefkngsssVFF6c7uZLvnXckiqz4CxsTKx8Wa6FZ59hHG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JSqbz9LHGhKBWj8B3uHEe127aGee3Z9AJJ2DDifKQX7cuxbAzrYDHQTwqoLato3UVyAPwMkA6JaGdELz9XMVTJG",
  "key1": "3MMPccKYvnjB64NyhdBWVvziEQXwfobUafzXu2rtYmc4adHLMXet7hikxKoFawWp5b9Ao8tdbqNQWhihCG5CFZP2",
  "key2": "33oTLj81ze4WUuLDyx5UzmRnh5f1bjdN9aHiT9oXa2oJfQ4WQXbKvCa7hmdnBCVYjMeYRAq6sJBjYzfX8SqBWZA8",
  "key3": "2Yzk3r8aJrCgtdqXKGGUdqj7gokVtw4pL1ZdwNgXAMQzPvU49zqYFh5NMgS1teKKuHGqy8yNRLduMaw1odZiTNdM",
  "key4": "48ZpAm5Es92Rv8BSZk7FYGUNNeFSUZhfCoAaWNxcqswLV7VAnKHEwRoK7FdFS1LUmu9i68zfqWndNJ1CUVNeHcmN",
  "key5": "TWTRoJ7s5vazz7xBoUhbjCUKMUi9s82e2ycjHK7ZbNuFL24rTRdc9Sjb18JqfesuJvHWnDQ78EerKfQ7TYcFqvP",
  "key6": "57ibFCV5py9FRdd4yTkjP5kzTyHDDEayzQbiT9dKLzyy6DKwvZi4v9r1Swa8mKBAG8DbSv536CFu1TY6rYXWPkh3",
  "key7": "36Y4BBPfnAwSPvpqZkpcawXyKAWeEWmsZEw5Q8mDJrkxUEgzcZPk7V2vyacUQ9rihR4S3chmASoWYTAyo1gkEs6e",
  "key8": "3nxi2x89ymxehGa9Mhdm5jHqG7vCX1AjqQ9jRmLUuvEE3JTJVaDEnm2E94xv3cwTX8JfgwPBtXdUhotCS7VaacJZ",
  "key9": "3h8vZj3iLQLr9BMRDTjW7zMHyDiAHKdiayh7B2xnCcpm3AoUYapqZg6Et6LvjmqpWKibFhogGws5782hRgEBqAXV",
  "key10": "2S3AHceFicNCVw9MmbfJMFp5B2Kphvwd1uefjkEmrBHzzn9uDNegg6RzLLyrDchwR1sHd8MqrTkFhBeFaEZpTyqf",
  "key11": "52Bwi7FZR5ptRt7e6DXKVWH2JPPYyi3X9ngojK42zCB3eqXTp8tibXkfpC6utkTXrkvyU76E7kfE1CJL1PEUcVwR",
  "key12": "s5uysqNYdrsuygk8ZT9m54hYAvRQBSpmf4FUAhPABhgyKSTAWEejBJtfvSRCZva9dNecHG7thuzjQHLNwJurBVu",
  "key13": "4KSVrQWivkqxhRi4Zwxrz1EfEwYLfBvc2dvWnMpPa2wQYXFLyygZNZsAHxYL8sgPQ5MZhgdy1YLtWyg9fbgCPxQD",
  "key14": "d7Uw3FVMVKtJJmB1G3vCc4sBZBtJ5h4nXNpaJHTDnkKdvcMPETBRskBT8BLFBLMEYMuUZzTL9NvrmvXuSGGpu7t",
  "key15": "28wN3CWMRzkVdTSgCiW5BXQfPur46jruLvkicGNb8wkArRZDoKkVHZdNDskSzDCJ5kXXfY8RrfqNfrWUQj2zHs5C",
  "key16": "2PoH7q2rmGcEeUgPgEkrpvtcBPVc5b19rWfcMtrDqrQHNzEsxvNf5ft9HVvMt1XgWn32qAPX6Cnt5k9fev95dV7j",
  "key17": "2fNLB9kXaRLuNDpuv66KFchSje9G9KPXFdEjkEhi84GbyZzfguhmqzsv2LF25kTzBN2K7WujcfArneC4pqpkmKpa",
  "key18": "2sa64kiPFwLbVZjV2s8tnBnRzMeARg4fX2GW8GY1F1B457dvgrJhw8LCrqzvmYT8jMs98xj5vc9rThpYV24NfXQg",
  "key19": "3bxYseCH6WX3mDFERA8LreAuhnZk5QTVKT4jreaYXBKMEZPZ86Cb4GJMb68srtXgSvX1pET16z25oPidxS1zUA4s",
  "key20": "XghFjbM96LvVhZLYCC4iNnc8SrAsvULg117U5zpx6HpHPWVGWzp6GssfTuZKqq4ciNNhGG7m7ksxTn3y9XpujvC",
  "key21": "3SnKcTAqJwbH5vhQsuVmrgogMst5uWisw64JqBBm1rQ5wFjbedF2iBxuVnXTFu8HpAtPzKdQyai5SLK8sm9nVA9o",
  "key22": "3aAwf7i5tjkGUKRzzuCYy73ZUtU9iUoY5Lke9ssxVYzA8vFFx4u3ZZSXdQLo31AdFZrRZYdGzh6MmxoTe2nYEFVe",
  "key23": "2m2aHjht4VzCGqhYWUhLxnQSQ8J3yVLkN8kNFBEG1DSn4iKVipfwJMjPmMmp4L3DTUEXpP8ZB76yYd8aJr6z9ANu",
  "key24": "5GcK162yXjxnfUGnm9X1Ac2G9WoKRN9AiMHi2kjCbRgZhF8bgHhJhH3qBuGVtHExVZ6TJVNiApFCYKWfDDKoepoD",
  "key25": "3XdLR3LVCyzLFkpGZGNiGe8vm3UothWDagJCkwQ6cvRzmScj4gUk3n5sCYfHqkKxYiHYn4B6nJQaye18EMMD4GG9",
  "key26": "pBjqjxVWdWMJm9SgxFUwaKbKiTLrbnuuHGyrWyodjYpDA46pPe2rr1Uf41RPkgvkSHwNvUs3F1LwGyGTYwHbpFc",
  "key27": "4jcTV6pkjnfF7dx5HgomksFoTYUneou5cjfYBPvj2ChoVq4oiuef3up6xk7ggyps8gPaww7HEyeffJRupNDQwFYk",
  "key28": "TdswJribyPgqUHp7fwm4asH9ZEG4JqLHZXAPyHRzpgbzT6QB7cyrUmmFAFQ5ZXtVCNgjZDJT7jpQbBE5YqJ6ikq",
  "key29": "wy1jnJJe18wA75FTFs7vV3SfWLEaE2PNYtL9fGtzF38rHWM7hTiCw1UnbkMtbVxh1VFTSKZ6sMMGbKh5mVTP6Mm",
  "key30": "4y1FbZQrcA8a8XC82zWekJw6waJ3EpWKDrvc5vrVeRXRnTyW7M75AjW1HsBe3ofars9UnnFvGZnTc1HJMwhfLvW4",
  "key31": "4wEMwYBgSG3YPKXz3MmZ1M6uN4orCTofUWcY2nCn9ikg1Ak7RnautFn2yVM2LKQ2feFSHvUDbSEBVvDBibs4mULm",
  "key32": "45fCRiSRGRz7E4NZXCoZTDMccPBbpjmjNyF1oW6RhRftXpLuUKspT4jpx7aHW2rbHD3oBJQSrdgSwi1qNX9hKdti",
  "key33": "3hSFAz27djZ8tNK5WcTxuppddYMSnVF9pugKGTiPKMD9tL8SeJQMNmZAUzLZMC9CTj7BZQnvPHoKNZ8rb4PR5Sob",
  "key34": "5yG69LicL8jSvCdiStLHknJ6tjebzPepUCbEm6f7A7uUNG7W4WTsD4tFB4SahgKZb6yqhUw7ayyJvKypy1xQr7vH",
  "key35": "4G1ZZvQ1FUVPQD7awf2rkSHy6uVDq3gNd8kinvCQaN2p6ZCZogLcJmtufoxUSTGrotABkiKsSGgygeM6sSoYev1F",
  "key36": "CJqtqqq74aZ6H5p3XVA3g8swD44khTAv6JbQB1v94i5zWmnsSkKqJFc3V4CkKbsKZHMrDkJJtmPV4PsvpfA5c71",
  "key37": "34ophkSAsP46qpjdQytr5zccxCvdcuChnHfSPQpwDz6FtA4Gr2qUTqseLyjdTLMwMi5YyuB2K82bkC24F5LzK8Dr",
  "key38": "3KmckYJTbTmEhjV6hwcMd5zr7eL2JiCickwthvv9VNPFUdqWYFCUfibeLoor5hjKC3M5CwdWuuxe1At7wdzaXXGU",
  "key39": "3vKg4iQ74ZtJbwfEW4y2TbtZiwjwBEh4LuAAKY9DuGfJS5y7zf6r2SbpSuxn3TUDFR1pa4z5fi53CHs6xdxcm5Zh",
  "key40": "4qgzpf8kwHFKaLMCVL1ZKVhwZ2jGpeWmqLChU8Wu1BFJ3UxBZDg6pPYpQXqGmWfKAkXbmkExNqb2SQaGRxEi64qz",
  "key41": "32FD9QPxDxVsNKVmUnmNX5YLQUar9TRj7LUe7VoPZ4PqmkQ5ao6qj6c8GN5reuRumMnRMkB1CKGKPLFgBLD9uwUW",
  "key42": "4Yrb38mTWc4NXhzvyahRsvi9372nK95SCCdQ2MnT4fxi6AWbnPc2wJc3ubfqUo7bWMXJjgSdGMbEDU9xvPh8sfNZ",
  "key43": "nPUNHz4ZReTgf3CLJGc1KmrsnBawW8F6vhMr6gqrwEpSDyjYrGw3QjHedpd55oY9mhdaJSFhohLaRyJsTSTDRch",
  "key44": "5F9WesXC2dEjd3B4AovYowt8tunyJDeB9wN9Pm7k7vt4T4TG8wyAwjcZ2mdnBfv37ZnzWWqYWGHyzyFZbKvvXR3q",
  "key45": "3DwJmibG5uehsw77ow8bFMC3mhQ8hkaCtRuVCPs1hEzp3bbSRFWBVqUdcvEYoKeXZrn5SVr8cU3iQ5uExZQntpFk",
  "key46": "Vtt3afT5TAXtrNtmjouN8wzyrqzBpiLvENxqyZvDbKMK9LSft7f6rdthKCMZK4gFDVZFAbGSRz24bcGXD8kgxe8",
  "key47": "22CDGefj2mcWHSyckUWLP1UNgkh94DmiSDC1aQfBkDEbiJ3K4bPFcZqyAUMBoApZjLj6sC3XfRqdE7bdnpWSyzbu",
  "key48": "4EC2SMakShtjHoHugTZryhegjgmoQSgXbtpkndHpPXLk5JSLrEVejwu4kBbWSZwcjn3X1E3bQmXBBvpJaWm5kAXZ",
  "key49": "KEvkNDYiLXavimaaqwUdU9fdqEXgV8TDEFED3NJAk3zwfAz5zsjPG7Wm6ykSQvKdzFe6R6J9oKuULjzaC5pTNK8"
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
