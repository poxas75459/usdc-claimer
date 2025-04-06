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
    "2t4y4CBZhQ1babNAYBTwVJy5AwTKt6b6S81Gp7T3s684C6j7sS8KNevL3r1FFo2iuxQBbmMz8WAVqpiDFxHpxsz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2uP7ixmcoh14chWLAeKrnNzd9sN4Gr8v4NyiqzCNH1uZinZAqGrrKnSYjRCUaN9D9Vsz8ECuWc6RAJJz2JZ784za",
  "key1": "3i3y9iMhoNBntgtZ7GMZfnsm99XXDkqHcoH2YqNzQpZngwRwRj1Wyu9Q8jEFFH8JjgvJFztBoddKcqnVVBA86jHC",
  "key2": "q59ZRL2oxfCVHwsHjbsSAuoiH9cds2WLikWho96PwXj4BAngJ1htMkt7zba4sskGjyMaBZqkSqypceone85DXj3",
  "key3": "5MPSVvvdV4pSPSsKX75RTUNGfogFq5zKcZ69KZkrunhrc6qE1q2vw4VUXgpLdToZhCLDmd2Qrak7Wvgq6KdjhPhZ",
  "key4": "2WwfbvVKo5MYkFy6vNZzemJhaQaZUd1iquZUErt6ERE6GikRE2co91sWYREjSWMUDTb7EA4Sr5Yqpidz8MbGCSV3",
  "key5": "2S4xbuJsnGLBAMKn7LmSAtgnwpjh5odL76UgsFQaZzWemq12fFdVzAhYqm7jCGDEzGy8ZtUHMTgLh26uVjpdhQq",
  "key6": "7NddnA29eSqAQ7GnGuvRWdLe2FaZWpL7KQUfSkjUMqPphY4fh7VAUW1uhUbcHiT4YJeR8NDzJucdjdNqdNXHDKq",
  "key7": "5yGvv3hfkzKh5P5FNKfTB4qKNrkDWW7XTTcjjjDRKHjpgYXXozsYrpXCFPRNsidEU3aDYfJba7XAtAThpWybQmvA",
  "key8": "3UBE1Lij74uRKZhrRzofobCkKa3ffW72YwLEMVf9BsbSPXwpbzJCALbf2gSySwRCG2wSg1e3gLc42vBV7usReqHR",
  "key9": "4kgN5D4VxBBR3QFHaD4WTcsxYpxbwmAxDTcDtiGqXb5XwrNsYNnVkjBBo8azNiPdYHXdaqEZocKiTNuNpUQGfWNg",
  "key10": "4hcdK6cV9zrGgiCYb796P5RZu5e654Ge9B8yysRMyUiKM69WkC2ucCohnAcPUgroUhPGNz8bZEpw7aJKnjBQW5Zc",
  "key11": "W3ichdwZ6FKU1PnjZwTm2FiKcvnh4BYxSJ6uiARd2rUS249YaXW7yLBNFDTLdA4b6kGcrSpTM7aa3yRmHSJj6S8",
  "key12": "vUmp33WjCjqF84eLipv3kMPbMCdRvUpVqrTyZdReEbvsFtpmpyXN6zPGXk6VW9jYzGo6TWMPppp7eEVrwteyufA",
  "key13": "tkwYuUNuKj5qAucS8i48ChUij1mhFDLMG1MMv32tX1UJEHXbySG6qedN4mwGZUqWwDsmKTcWie24FhFUwS5f7wa",
  "key14": "42dnr9Kv2JHViKbykXE59b6Bb7KA1macU7ZYv2cHmJ9i8r7oyM9gnZSKf9yiiPeusy1iMitimCM7eieehsTQTQAi",
  "key15": "2ZK3DDgjozgN6UWXhVu89A9sXxCh5JkRgVxnqixzLJA2Q6yC7jPVf8566EUt9oT3SNkwb37oXH4Nq6gE85Y1fVkL",
  "key16": "3vwQy4qjKRZvtuhuacDrDcxGJwp8zevXc2sHsno8EhBW3H6G6GkML1BgaZ7R9kQJNPdn65mcRcR4RMeSPwkpt2zN",
  "key17": "57SM8iPcu478Bnz7HbLEkCz7ERJNav91Y84YYkiRJ7TiB7z1r7r8Lg7ZwAWfNj9fwaQWgTaPgPGKSECkzZgvLvhQ",
  "key18": "125dw8Rnzhe8vwcKEq562319UsYrYYaFAoYBEZNgwDXLePFYyJAcR6TnBX36EsuUfusKKEGi3MZZrMYD6AAGv3Dg",
  "key19": "4aj7SYKF8DL7vKLKq5u1xCouzbzBeHQ9ZdWfrYJuv24BCkV5RamvqR74sigwxrfXKnVFKBbhQCZ6TtGDBS4JgSdQ",
  "key20": "5ifwfVLgzGo9JpW6dDPJAbqzweYhpvqtLoUETWpYQsfFYy1iid4orqBAcaUrohLqtBNaewpkKGXb88c5Tid1gJLj",
  "key21": "6s1shrczNdNngzwZww4LNaPUZksqCz3W9vHXddQ624zo86vtBCP8r7qbAzLreF3RyrkcJdthm2waZTa8Fkb6ENh",
  "key22": "Pwnqqii6wFJKuRBccBFP5ouGXQdtFi3qt9hySqWWsyn9utSLF76rCEpUNXET64mGbb7UBYtqyDcNxsTDQJCsZ2A",
  "key23": "4WHpCsjKyRJyj2epxQd6CMk2aoLeR9RmDKw95zBMAKqGbsJKiXtd2KrU9g39oRYp36dprRQXmCDVxjDiiJcJeE9Q",
  "key24": "2iue9rzcmmgEh6hkFH4XnGiH48WCwXa5jupyQtE5Sg9LDjGx9EcDe9ipZ2nEWjD7i9QsWKJVTwTdwWehu3sLYgEw",
  "key25": "5725pVD3fsBZ8DBYDGsNQ4ePHhvgwqcuQmcMJBsv9sq9ogvLeDfPhhWaCmbmq1xfejG8JKK3yTJnhDSSgTRzXfyX",
  "key26": "d7Zuf2SK1mgyvUHZQqiT319AnsqFJorrZz2p7bt4VCKekFjWgvQ1d3iNYgXFxcjTfmtgvyeZz7ENpX7hKAcCDN5",
  "key27": "4sTN7F3yJ1GofiEz8FM5Ct3BJzscgJ5jTHC5UkhAWMtbi8u6fxsDPrmR5kTU83umQzYn2yfE5t44sPMcw9h6GZyu",
  "key28": "3KG2Ci1NDoe4DX4TNCc3wUWxxGJCeD4nMFdniFGW2S2nEthVhmqskvZVSPnWpA5nyctyDx2RLQHVJdZdBHTFRYNc",
  "key29": "4U7ftNBKr4eEET9XVQemTB48tjcpSU7S2rxWGn8fSqcHhLCiucA6WZiFDVtBj9ob8BiFS6NZD6ZxYN38WhJ4MAJU",
  "key30": "4dVD5J4eHV9oPzyQU13k5ivVHwKE2GrujnTuV9SwaUJWPdnaXp1d6BdhvSiJouVH7QbW2ufT6ykK7vHU3so8jjMp",
  "key31": "fE8W8CBSW5ANV64Ax9hbPLDVSSQ1fqJ2X86Z1EfDhXRwXd3P62mwhETbaHibm1U8gdqEzYGcsTnRbcYjPvrtiuQ",
  "key32": "2G7bAk2vuwQDWyFtU18TUvdbSzEgbprxZ9HMLnbb7aFj1C2MtfyWTQvH7oFhpv85LkcLRBhLcEwvHvvjBTJSbgje",
  "key33": "4BhksEsniSWcAk3fMnNcmTe6zHrrn9KGZ4n3xgrVcZHDeNDcu5NArAZZpfYZoiJ6kBuVzmrHYsE7C2izLifvKu3k",
  "key34": "35EB1Dqj7kHDi7U9m2Ke4dybVQM9Yha8qdHtVDnkN9bvFUFUopyNs1YK6LkmAPhtEww353A1uWR5krG53vPpkQYV",
  "key35": "45iqBjqvhR3V6qPrxoY8hm3E4wbSTj3SBfrQLN5j1iX5hRNmPvdqKs1MBiu6NR3K8GADjwT5RtyDMks41kCS4nuZ",
  "key36": "C1xReGvjgekfdw1xVL2fjExtP1YpUduD9VJyAu4KMshStNBzoTiziDd9npdduUbELJWK4VnrY6RFK265xJHtb9Q",
  "key37": "3EToCLWAMBMoVrskQoFHrhM4eRY8scwnNq2J6Zgee7ws4jdVZa4sjhZD4LN9uRWuK5u42BmpS4JKEqoH4QREJoKb",
  "key38": "QCgCBmu7bupRprrdD8Aqg8zWo4YFNnNgcxLephaCwhETQQJfLaoQ3pAMNbB21vZUk5THXY16qeauQmQcopUM4X8",
  "key39": "P5u3AJPLevGjZxt3ATQcz6TRaPrwc7EPme4hnBbbB6iLPbBQVJ5Ww47b8b2msyjqCZ8LbFyAC7aNaTry6jyEwLA",
  "key40": "3qJRxFsXR4LoQmQK9qUY3MARFMC3REyGGL9MWjddPZuqhC9Vjy6U3c5qS7FHke7fjZ4Pg3AzmEGr5Lcxhz1GkMf1",
  "key41": "4zpZUWSUCK1NnPVadMUWFGXG3JgC9Sz5HXjiWnBg8Tox5HPDnNQa6hicp6CkeZdKzvgJMT7hMrVFxdP8wdv1GcQ2",
  "key42": "2twD88JBf4rBo1g4a1o4ijiHn7EJEk9XL7gMVAjQH3DbRaRifkbtdeM1FCDPNxWyygAtYLamfRvTygQ7pxXwHQuL",
  "key43": "5rm5ranDXqUtDbbzCNDeJyCuepmdf2tDixhyMTsv8NHMFDP5Nw9Ys2A8YB3XJQ4rg8hzpkiwbqTHCxYitqKAy7Lm",
  "key44": "4KNcxAGt2Lig4YT2bzT2FTAtdaBKiXXWt2JNmaz7sdmwtxQMx3jj9omsmH56Y8zkvm9JTSLUbNftCNJiLYDCDeCn",
  "key45": "5PRdgmfugqQHDkLSyFyUemvhJPaghsyTAN2ggj39UTwZ9PKXDd6E3twkj22HDkT92v7HZzSYAt6DxrCHN82XtTRP",
  "key46": "2TPsijuzx1dcZXhnponLUG5yFdjw7gUC4heycWLrEVzJWvPpFfAnWcBmMPxHiGDGvM9So9TRNe7nYVjjkGXmtnpG"
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
