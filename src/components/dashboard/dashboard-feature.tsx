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
    "3L8fqourzNyPBbE2YbX3yL3bBzUuet8Zm7xytR7JXQnYQ8GKd6nSeCYwN6AgKxkcicH6T7JiTa4rSKx9LpA9YJec"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WXkBq4HazvchKSUJ14ycRj7T8zDvtdeCCT1k7xnJaHqiZJR6Guao1TUxDmCR8kwB4x5GZoR4hqZkLmad6g43vQw",
  "key1": "4sJXynLUVcyzTqw3HJThERzu142b1g3eFexMmGKZco1g7G9My3U3HrowdMRYJ23QhmptbVqspZDNLkPngGC6qR41",
  "key2": "27PFQLsyQyAp1SiVZwdPWyJ9kAsWL8szw1PuNyXfBLAviYEf9xwir7SNN1mACXU7pgdzBhiYCRxYWanNzfe3PDe5",
  "key3": "5vrhVWdwoxEXEJ6Lf4XLmD7dqa8rrUw23efetXSKZFVngpjDpWRSZu2BBmkN3xmSS6UtubqMd2qfDBWWCvUCjBv5",
  "key4": "3XRsbJt7EosRNgDyTbD4EyuuKuSKoKiCeALYaHGx9cAMKW9qucUJ1GTZLFjHCRsAEox1ptCBKX5i3XyUWoShS2Kh",
  "key5": "4ygTEhRdeYmDrLgpymNb4LVD7YmVFrsWBKcM4cw6CUa21S8qado65sDmyruA3r7K7fy6JJsCdKD7DYsiExQK44na",
  "key6": "tyw1jhT2g5TNQDb56d3c6ERBHase4QhdumAxuo7HuarMhGqR94khWa1TGGATUjmXUFBjShRH1kEw1pTziEhxNrX",
  "key7": "4VebPQ7uRomukXJyWY8ETJ1EXvykjB64L12caqh5LW3bYHFJUqJRajDK6dGp1do8CCrT5T7riUt34rjVFtLLLftb",
  "key8": "5bpUhLHkoFkbQ5gKJP5o2rm4aC6RY1DnupYykeujy8obuiPfMJpPZ9Fv9aSdLVNB826qAKz56B27Hv5Jqu4DzZ2X",
  "key9": "4a8wEVQjKcMRwX2RSumMCGo3D7PMFxCu35fc5MQfp1jBVYp7Rx5B1ifBeNyQaVtdi6Y4S2YsWWLY7E4i739nwcDD",
  "key10": "5XBCU2tMU5eUx3NPWUZz456qb8NHN41JdBZ6oKPk8fm9YMdyFECC1QavUVs3phkh5CgXTrUd8c4DD2ViABk1j8B5",
  "key11": "3mKVRarK2vCZUjzc7jwQ65rH31JQ1bdsZCEykcRjV827hbb7fezSj1sKtzt98pgaWCX7L7G2HyAkbpPJKkBd2ZqV",
  "key12": "3jBpLNG9V4yiMFDxAc4coEoL4TyJdBSt331oMz1cyB8NeCXvybYGNg3WcwkyCaG3212XMYHV7qHhDYzoprhjDJzK",
  "key13": "5X46HBUbvfg58cWytRgdsyx6TMEwa1qE6gcFd2H526ZQjP2NvujRVLC2uRx4i4eM9YUoQrvnXxn7CcwroHyFQGbc",
  "key14": "btf5K5PF4iJmHAUVg2SDTvj1AnJr2MpL2psQziwJpGyqYZ9hYqF3fsxK3iw91ci6wY6SviW6kmNY4dV6h85nj1o",
  "key15": "5BGFxUx47MZasEYXLrugFj5qUhMg9HcS3BBKv9xMHUSGu6tUgkWY3HiAj4LZ5kqVbMKfcdFw3p38UVfnW5GzorEP",
  "key16": "2omxXvXydyQrRKK3JscJeqWzhJ1b8696NmwuxyqwZRpTkKE6o4NPcNQkiy5ywzuHVCShmQCL2HnkeghZpJmeo4LJ",
  "key17": "5RYUdDRcgfGoDtQJzKAJ1L3MECc3BVCdHxKv75wN87DqZv7dJhFwWJbYjmoq4dDew34xeBV5TLbbhfr1zfMJkC2V",
  "key18": "63WdZtpkEd9P9bGvKYB4eZ8utGKkX3KVrFE3wJWBW43SNr3scKsjGgHuZQpQ8Z7MVvPTBCUPySQPvzQxuwykwj5R",
  "key19": "21NgZUuJxj2vccw93VeK426NwhQu5ztdGizhHtyrJaaYJdpBTCNHXiyCirUEG4LSaeBKUqphrM1ZnJgDYvqTEDn8",
  "key20": "4DCSZNPHw74jiXmdmG6vq4k4oiiscwn4S2JXhW5WyF11DifinN6XSX2tLYDMXxedCRSeDwdkePNSSpzeXiY7h8GC",
  "key21": "bvPbavd7qtyBsmifeRi2LZBrfZQ1jVU3HpfhEH8CLYqkCCGyf3pe1c62tMKtRPLXQZ2HaqkmpMmppndVXmgv5xB",
  "key22": "DE1KnS8pxHoX44BnbVJZNxNM7H8dzEKHwEjBR4scgMC1unaYfGs51CMHVLfuFAVgh4CfhpzX7SoK8nozF5s8YRL",
  "key23": "47YPK891vN121Ex7TkZJy67PymopfWHD7wDyS4eNtgZFJsaz7mqm98pu3Ki7QJeYVA5DXMvGR3xKV6b3GLev38Fo",
  "key24": "3MoQkdsjJu8DCPXwBipNxME3Pe3W9vBSHsAoEtbhuCs3VYF6HeFbinXGUF9dTfKWL2TBsJfDF5mNqFEFeihTDiPi",
  "key25": "3wT5wqy8VmJiGieBfLS9tSCXrbBhrouAZ5SAGQzAZyCCqZoNysAVyUct5oaSs7mjr59Ljpjn23duXG3wC3wLaWxi",
  "key26": "3nNu9aEH9cCgXC9ufXEBHQA48Karm8vGRCfKnNBcF8EjZtJcmMZVWBuNjETmNRcFm74NtvHJydfmVwZQvtTZr5Bh",
  "key27": "GPrxfJJfgna3zaoiKiYjCBrGWNuXBP8bCjyUEJ1biMHQbwYazPicnwtBoYe5TzJ2AhQ6cDFWEhs8s2q6ktK7Nxr",
  "key28": "2nmeHmb7JPBM6hLPy6MKQAyVM3BrJpqfHwZNKEXmcqdZkXzrGCMByrdUkhgY4awUMgYWgGYddNo2ojURQvoLA3au",
  "key29": "5aUoFqyYL2tGAvwxLYqDrFohqEAmC2twzcB4iwWfwP2rC6XfXm3oFFECvSqEWQg3w8SDYMjizr26uRzwD82fiS1q",
  "key30": "2pvP6QKZu31YiBp2YJCoxTXhB1EZZnPVa53rDuHzK6Czsc2CznHXJjcUcPBsCTjXFM5gLtGLF1gENaXabqycWs43",
  "key31": "4KhkXf7SiEegyMsp2fAm73RHmjqJtTRCDMxSuARB8GpA3TP1hewGTkjUqeL7CQ9Gqfz32Wk5HED2R7VTPrNh6BZq",
  "key32": "3keMv7HE6NocBV3ubUQggbrmFnsWP5u2SLHdgctaaYQ7StjCsoxaM42HVuE8KpgwGVBTCwSPnSwuqsuwD2EqRbGc",
  "key33": "eCgFEsQEASUxLvX9UQTuaPcuMPW6FCUoPc8GpN4jh8t1oNxaMasCVf5VdT5z9JvCnRtXAwJ4mtDwNE5dZFgPm76",
  "key34": "4joi2iZfY17qFpqhJWzdGNgUdEd3529YPgubCVzLKz1hxpq9mRWfDanyB3R4eR3vmTTHyxytsxFWH4Lt4xRWRGwP",
  "key35": "4mBAG6v8AdPizubeSQLTWhXhX3GUad61kXqBknW8q7nAHucwMPhqFpeTDZcUG76CHmzecsg2AU5ENnFKGwRCEVkS",
  "key36": "4XxkChNVadwbCAr9Hw2nHZeETwDPfzmH9K819s1uxXjYjrPvG7E5HC9dv7MQapqRpr563ThxvR4jPigtSrLUqoJv",
  "key37": "3zQeNKyafwbRDoZCGn3F9SyCMEvq13BMMXj1Mv3EfSB2EeRwoWVdV2UjVNuQw6U9aWA5JKEH4R79r1GsZkwTRvKw",
  "key38": "63LTRYJwkoTbrCF3VaAeFnNULTVtrYN8bXUS7wNjQgZndgNcQU8rsjsJjF9r7o6zUbdCRF11Vj846oA2zSvfLD55",
  "key39": "CD8hnfztv6fbDTm6yM7GYGi7BhNsFZdyXwHUTonk3XFctwYRUfYE3QtxvHjMaYsCZGSR8aMzfVapBrkpsLxdLdo",
  "key40": "5YcpnmrUoZRfppgZFyjSVQrgrCfuz5WRmyu1uzF6DtYB6TtA4G7SNLvW9dhg2Bp5bw9oipjtyuciYv5HDfnQxiPw",
  "key41": "3X2sLiY54KVRwc12gqcotCezv8RNSdnSvi79kLiQnpofryisSojJ17tZaAwUkmqPukvNYEuvSEWxt95zYEEyy32o",
  "key42": "cFLVGKADMchuKzwwNgvVyUB3m9CfkAAdNzUWDrwQKaG3k83p7RLKMGn4LnjSAkEKpvXDbtEKcVuoCDmMgzunU8U",
  "key43": "GD7dHNLqDrNfyK4KFrxZxG6RB5XrzZxJoXCp27brgt6FuTW2RJ5JYEfhJTfQSCdprDm7MWhX9hMYMfD8QZVK7dx",
  "key44": "2ncnZfsYhQstwmeLibpEdD3B2c2hpXpxGzgC6bEur5TJiABfWUQasetFqmeKKx5Mj2fiahQLstRB8FoFbdCotLCW",
  "key45": "4jweWjutTy31bTAgrTPmKWADSNB43tgDRmrAHQB57e4D3yezgTuiy4D38ffm3FU1zwQzw9F6xy14SgcUFM7PBzAS",
  "key46": "4cMVe5buS7QoYvhyDu3NXUgtuBDjLnfbJDNCZ2fPCDUMgEeDKkaNnvfB3CeTtf8ecboY4xRLt76PYsBZ7XhfzSvF",
  "key47": "2qhctfaU9VcbeuxpkFSbJ1izFuBtVaBcca8uRg2Cwz2QftjBnDqCqNaWChidWc1Ya2QJyvQfvc6ruy1CvPJcyNJk",
  "key48": "3qvqa2kjGQyeiJ1neoUr5ow9DoQn3YBoab1z8eGFMFZdBYYsLj7AUFkKeaJUNZWVJaieCXVa1rbxEsLhnUPmiQuQ",
  "key49": "2wqb1fzMaHDKaU6MfAtXHRYF44T4NVtTyMUgHmCSMyBtZw5rxKqhKYgWFQEdiHR2KASynKhRgBPSBNmLiUdckpak"
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
