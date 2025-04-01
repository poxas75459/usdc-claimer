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
    "47eHrsc7ULBSUYc1FF5ncoqC9gykqTjsmsA3eai4cpCksaFQpoXwEkcnXKQkdvMWEyqSRXjMbLdJe1RWS5KC2Air"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SbixntKPcSFux2df59buv2JgeoTiJP73e4Bm7rEfuDzTfx6Sft9yzvJqJiFGhv3kbdg1AHXfgXN8rTmZYtP6p7U",
  "key1": "5ZQrKHhz5rbaNB47oLYjwguXGoymjwRvDmk3WZD1aYN5t3HUPThJJHtjA5ScZWgUDsZV2aqJzhD9cXcgTUufhKHR",
  "key2": "GmiLXkqGy6e3i94orbBs5JkGZT3ZbcjjYZPUPHdFjcsDAxphwrdjqXXfmgvF4Z9t9L63WbndxGi1Nbfwo8RvK9q",
  "key3": "4cTL5ovjdMWpe56oFDuo9UfMnnYbdzFiiGSbSxCSQsrkpdUhvj9XKgmmhthtUq6SbHWn61UvWvjSASWDTGVGX4dH",
  "key4": "4Ro94NRZYJYVCSmwoFDQ5V3MKXndP2rbEdzWyq8fNiCyz6nqVnW23BhzYGAiQj2sfQuAf5JN6iYzrfDbEMsncJAJ",
  "key5": "RbcoU6E7hG8DbTb5quXqYUFxtaXcbKdauvw1HHMgZK4qMUkKLKQB9XoA4UDsdT7KNAjWTuqKNkP9YBVgYe8Xtpb",
  "key6": "5Dr137jD9TzZdmqiiCn63nScJEe2JqAi6TkwhrdUSQJFarnyz9rPiZSdwCuitUp9zLGRUsjDrRke4MkRdkGBSnhE",
  "key7": "nBfxMxnkrzQvUv72iJEfnej8oNydzT4kLhxHc7UfxR4pntaRA9Y2dQPaJxxXkQHayVChDqHYxbsx7KoLgrAgfT6",
  "key8": "2zyFyEAcpSAPm6p46n2hjb3PJgW2EkaNjdepvrFAnPaRFx744GyCQxrEJwJ4MCrFbPGTSaZBvgmbNDPscHgghCej",
  "key9": "3GC9ajkMcpRksC3wQutvTdUeV4FdATBcAgSyLpikEmRBebuXWL4H5LXswXBgMZAkm1UaDP6unf1CmjFDsRnnLaxU",
  "key10": "5FZpGa2aCDsJqqipJqnHiG8qY87iwyTJsWWLwejEkjJ6rw3gjMhP9pMbpaaTu57iU7ycdU4tV64dQ4BjY8bwp7J1",
  "key11": "KnMY7cBXmLSpURuQEJDeFKeU3Fni6h65TWFkGzD6ndmHJwHGiGta8VBXqZAV1n87kx3Excdr2Dm1fVSv8nGDaw2",
  "key12": "3SeNofJjsaVUR4AhJK92NMbgrAhMbiTZsWG7v1okwDFgEyhoUoz2gNN4e1yCv7nSS4HRutmkcd8593gEkaZTDjdK",
  "key13": "4HLqEWFTVLp6AZY23Tea1i52qAQjjgVJcWJshzp8VRPjcX55fAxXLz6LoQwf2T7R9vf937ivZoawt4qujn6WaXbE",
  "key14": "4NjFZP1LjXsPQSGMUw3ipYGaHBuNCR4GDxjPCCwAQjwdouSGkgKgdg6U5thiggJGQ5ZETPf2RA7qKPAVRYZmxqUN",
  "key15": "2oDi626rJB1g4SUJZS1uPBmyKyfP4ZLo9zsFxvdakyQY3A5MXdVjSJ5p6d4JFDwckMq9KGXnsRvnhsZu4VNxdnRb",
  "key16": "5xuLE8DmsjHjWS6mgJBdLYMiWUuANcx4Xz6yk2ffJ3GPKkvzkexcT1bBQxQfejAPTdQcdqbWvXwmce8TWPbZaFba",
  "key17": "YfP7iC6NJVuHyyzQ5fciYTovpWKztUAYNb9HyoNUG9TUEtsesi1Z7WzDZoWuuKqh7zoqF2A3v59Jo3TpBnUZY7z",
  "key18": "39bbPq3b75HFz7Zy6tjqbS8WxFmLRwitLdC4qQ7YuqwjzcszrZMEe1hdUmv6bzpo8G5FWwv4cTjrAaYNWiSTAnWn",
  "key19": "4VKFPsEErNNeSBMf9rVKTQWDo32qgFZkE1RD928KsbTEGBwacnNrTjbida2mSbMKwn9qAgqoskJFqczSGup2cjr6",
  "key20": "2gBhxGcP3WRxBSo93mRZu4hXgCNduEmgAJZDbuX4hc6ZGPBqFuBo1KnyDmzwHqDiFWtT6sKTeUBGzNoAv9bCY1Aj",
  "key21": "X5zUNqUgK7cjQgBx7f3Ei3aSvDiAik7KnUZF13R1HpDoAbzJEDcvRkYcGq5FQjmn2tLxz9oo3WGUxghviz1MLzq",
  "key22": "3eyPQ2DbD6M3GRB7um8Hr5QDPvR31fsb5LR6ULTDyVHUf6se7T7nCs8FBddbYMhvkt5WTa5ZJK6aXj7kAn1s2fAk",
  "key23": "3yWa1uM5gYFx9NLUynR5YK425d9NpM2kxNoeQrmuw3uS33VDS1XTJfiRrTcyD3mZWZwuQ2YBRJPwHaYjSGyNTwqC",
  "key24": "2EUXmcAqxyCAfwazJmJ4gQPzfM9goJjyKBh5qrY7eojieK89aJjpq8cLtv1zYbta8W7iE6G98N72rTRoHixUFY4Y",
  "key25": "4gQ6AQu9o1vUUdZWUuuHFzFKTp5vf6XPJqpQAxqEKHtVTryKR4zKgUczra34BEmcfXiKAoKQd8pp9XWysDgJWbrD",
  "key26": "3tJm82QgzzUFzmrpctWNyFPyKEvNee87igooUrPaicBMzqtEJLE2yMQdiFR7WZjfc65yRig4NsLK76suhUJW7ew6",
  "key27": "2TogUy5i7B3ZHmzYUmWUjq18kXHs47QszschX3DtL1GtDqUT74fBLEHA5FLpM9jdB5CrreEmKrLqjefCccrqE8vN",
  "key28": "29Y5h33c4sxywfwPDV7PwvJPcLjF4zQkJfY7zbh55Dz1vPHgSzKZQ91GB8qsTRKcjrH5Zvmd4hVEniwuauuaKC3R",
  "key29": "3APeDrPYXQ3W924eEp2A3AWGqUoEsoDHrWZFF2ekwYPoGAkMuwPtT7nokR9qHYEFchfvngYZNCSpykbZFYhi96LV",
  "key30": "3rkjMjWJcwLnNDqNLxLyg2uvQ3nsC8ghfTu97ec5ga8Ug2XGxwwQr6jqwPvfvSwfd7YAQPTHRZMa4M1xFvdp5s7S",
  "key31": "4VeDsjeW3RbPm6cy8K74fEVRfaqg8WQYwooikLVEHfkjMiYz4RHCnf36bY7xDRMdE9JyKaQWjTJjeQ3WMZRwU6i8",
  "key32": "2W4wyYhfcKtzwdqFMwhke3hrNtJGb5LpoxQgLtUubvQL4Ju163b4Q4kT2BJyxfVbp4pEMPJBDhFUMZ6MULEG5xbR",
  "key33": "55iywbgNNghGmfRLh11kgUY6ECa1YYjWrM83ad57F5jv9SzaB8y8vyHu6kbgCKeim4XEZK2gc5oZnN2VDmwgsUnE",
  "key34": "2LLdYNiC47u2nHxXiybwSujqdDzirkKEp2KcNCPNBUGf8nGBhRdS72s2WNpHEkNgR61vQNTJBHBRB1DotmAXMLHC",
  "key35": "xJijuwJFbYjDkvELdVJD3hZyPs1m3wD9tH1B7QiJ7M3J9DMyKqSDqPGHV512x4y7G9XvVKFoWgnTdfh4CBEdrjv",
  "key36": "5YiJ1xHs8W9Zw3PyoCvRtEyRy2xFtsqgB1m1t92Zj7WM9bk8Hkz8hzzLaFsXR98A8SpS38h7ysytCu9fpEY5mwg1",
  "key37": "4PcjUW1viQSVE2zxhDo7j2emQUEwEUQKwCo58kfZnKxZx2GYdwtLmnxeBX5ZbsAyTF6oe33hNi9pWHcgSMHFNSqG",
  "key38": "kPqmnSy9DHpZRKJjLX26XQp9nqiG2Hk1nyqmFARNmZUesy74NbGwTP9GhtR2J5f38WezCWxsmucGW8fKkVSvw6b",
  "key39": "21CrTvSi8MwBiRa3WZ697dBipjU4SH7JSniy3526eB4CdBjBaWiFfPF6fitzNdJWtXXCsVJfZU5a8e7CG3BKhMGq",
  "key40": "42PSbY2hmY2a8eEQ5imyPrvqZhNcvKfWoStwExukuhEggEQT6RnB2y3qjDXpfwCRaVYoYwS79kU5N1WCaUJVhZpC",
  "key41": "59LBdWgswmUo4Yn386MfRmZmmGLkwaJkjNZD23J1nnHxgwgVksn9Y3tS7A1zqZk5SMKVSFn5Us3njnSoLwa193y4"
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
