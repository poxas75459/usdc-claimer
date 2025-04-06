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
    "Mo6uDAe7uctNRs9WxziAmLBwqf5JZESMasmkDmTUcgSZfeJ2XytdjfWpmWJ2WwU6MpD9Cb1YbnG9oj2Ju4rNmHo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KdxB1FiN3yLXhkxZoxDbM1rTZt3qA5Mie73q11RxttnCyYGtMSmkPNUG3dTiz7oEJiGJhkGwa87RUhQiT5RVSmf",
  "key1": "whCRZfpRS8RFqFnh4JFvG4zDmfDg5ir3WKt8sGLjG2zV6v6u6UW5ah3tPssviQZfKaJFqoVcj4oKFbYz8u4HLKb",
  "key2": "4GAGFzqZpJPKQywprb6VY6e7JzofddSJGqnQPr1G8XSqQ8HXtjLuAhHbUrU7kG4bbHErh2XVMEjEDqAgoUhdFzcw",
  "key3": "5u9JcrrwTatSdAdRYrMpXF4FUVaLDJbXQHhhek6FyV4qy6TGc5DEmTdHrehEJxmR7JgCrYXXaj5pm8H6fsr5Pt97",
  "key4": "5tW6X5XsEbJjT8L9dDz6ouFaVeAuQbrN41ywLryskuVFphykwWpFjRLDXavyJp21y6sbQhWwhYi6qHNWue7JCT1s",
  "key5": "3fiNFCzSttuWBAeE1Xrx8m7YxioimNhH5sfjgyVA25GL3Y8uHp8qgfZowUQ6F5jYViSptFYsY75Eqrv5tbFNpu8A",
  "key6": "58KrdqQCxE6RP9dDYnwgUyURxrMmd8LsBK1wRpv9e9S2YRkz7eVKP3HFHgieFwcGDuQajCYeziDaSwNpZb9wpJBT",
  "key7": "3poXrq8ZvrnbVwjFFcKos1Zcqjp1qvjbq1e7vQTap4MPjU59Ky9kKgwHH3p5bGmMQnV4zqbLJV9y1krEPzDsDhYv",
  "key8": "4TTeRJ3Uv2qdzxaN64wbYvfpoaPq2SqyytCURxmHGZ79Z5nmivJAZipTjzjSjGW3yJFnABEoBAkpXcAjL9FXXwYL",
  "key9": "55AEy5ZJMc8bzbcztfCirSSDRUJvteCMiXEMkxxeaV16BEGNzchuTq6qrLBkbBJWwYXVyJMG4wPgG4N1MeQhjnvV",
  "key10": "2FZe2uvMWj6rYcfW1atq95qqnPuesw8LvkajdiuEMXBAocjkE9HoHRJhSLchkTeG1vguuXhEJufH4FctLCq5PNwi",
  "key11": "2HKi4CkBe7tYxwmiMovfAEAMHWZtwifnELbG8DSU4LKstXEgFS6AtbiYUYJWbiPPkVaQM9j5tvVa2kvec6wAuKXJ",
  "key12": "3TVePjoDd3bVitSw9WwD4BwsjYBJR3E5XN1fi353tPbn6VBepiWVkLi6h8gPjHYFLfqBDF1BphSJHVNa8XN9cCFT",
  "key13": "2YiEDJK5ydhdX37hXngFAKDdbWuGG1JdNJGeeW8eN93Xxk1ZnVrUj2i12B2e97WFTWQ7unBYMpdqPdJJUpXe1oXe",
  "key14": "2mtss4XsWVXRepgEtJpzp99G67A2dRtw2D2T2xteuxLNU1GCww5oLWqNqMQ5GVtD5TjBi8CGhhnm36Eutu6HXioh",
  "key15": "518WpS1WadFLhHZoj9b2JEDxf3V61bnBZaQCv71ZoCkr7aU61FnfSn6GEES2y7jAQmUU6hZkqXf6TGcpdM2zqwnX",
  "key16": "3KuhxyLHRL5YPBQPWWoy49A585wpUCgAcB22TqPVCqvqyMt1VycayW9goUQ7wyajcjWEoWPNZcT2ZLPoToAcPu89",
  "key17": "3KRF5azBZHBXpkEsMJyAh9PfqEiVySAk2ZPMj7A5Y7JX5om6JPNb4H5n7wL9Mc9UsZ8rgqcmG2PgyjXxSJYeBRZn",
  "key18": "3uzzXNxCZFo6fjaPeAXnN6jf2ScfBF9vp78Tjy79ZbKKgnDrUisG7TJpP4zMuefzj94GKwTWrJFtFnezFxxAmWys",
  "key19": "34eyQnFcve3qKaFQXJJJcSr5n2fsuGuCdPNfaaTxn1EEDr1rJDyjNJ7QZ7CjidCDSfRV7RMUXHyZr5q5jHnH136A",
  "key20": "3i5bP3bh47EQ4RrNTTspx6dTkCyeVNWC4XwRwsRHvWaoeEc5xyjwmJj2i1oa4d7QpWyVsGLggchhMV2ajGkCVeVD",
  "key21": "2pyMsx4y3eLpA4ow282RrLc79LEmpZ85uLtVPZMYBn4QMoyAYp2PQUjgojnn5Dbxa3JRaVQAx4hr89wRdy2mbsDV",
  "key22": "ZjuQdqHFaA4Lmt3fuoA3G4WV6bidxZqWApfdohWLQeBYoy6hx6qNKshrLcc2DFoinaih7piRTfjstSsiEugfWat",
  "key23": "tgygNiRjcUvNXQBiUqh3hCGBGtgTt7yXZRHo2cubvVyi6PBtS2FL5K9Vm3tLmuSZYZJeuEz5vS6TYcjjTZsTCFe",
  "key24": "WX3gju4FoRFjFUXKq5BFyAv8NbvBtKX8Fjw96xMA7Q3kYmJ1m3vmRrDrFFtwHsZpcHvQvpfDnFx4sEAscV9coy9",
  "key25": "67VLubMfjvkBALM6fTdjzT9TPaCs9aCxv5P91J3sdkSAZVKq4SSREsSiVqnfEerGeQXdR2hxbNF2sWrknVMUNXFY",
  "key26": "54j3i1oXzoJh5S9Nw5UPGebjaxyZuMSGVaEaNTbrxe5rzfmZKj5hpa33ajUKc55oAnv1KqnPU2RCE2ew82jPMd4m",
  "key27": "5WmPMLa48VZUjiH2hosfr3CttmZ9ifuAowqVgvvQhBhMEypBGKjqdL5a5dM7rGM6aanm6hFLVDopHtV9gqkdYLZW",
  "key28": "4z7RJSXWaL1Dvr2ixt3zXi2y4ZCJeyWEc9btAwSxfaBrJksEUKiXkLk3KAraHzp1T3DYLZw6CyfA9TKpkWgBxvZ5",
  "key29": "2CpgNgteuM5zkFZGFRxoWK7Q9wWUw23fWikKfWGvib5Dq9JgGa1XxsYF6rnFZpUTJe58pdsnh5CeaVmLQUMSSV3u",
  "key30": "2rRJUeds5wEaiVt9X82FfQQVfUxZkUTg42kucKmsetJ68bjVTuydTWq9v6XWN3Ur7Uq3Ws4W3h3JZZyMTAMr1f6Q",
  "key31": "5Y3xhUySaGCkCCgMDnF3TRq9RxQHxB8jXqcX17AbekKtQCRGJpQuQvJYHCwa7qusMNN7ZmYgPW1HboZNkxVzpiG9",
  "key32": "PWUyy1hLLe3hEEejDyFvRvc4fQm8WtLMGSJFaPcaoA3FPLrR9XxfVgXaoPKhH2h3XHKFRuPJzcSWEMrwAie4hDC",
  "key33": "4hThMkcVxkivpr9gHhsEtrBS5ovmbtVgMetYdvxdzs7PHhHZ7QNEnSzGcpc9VqbiYMBJ3i54JATWypN8CfUhvnQP",
  "key34": "3php28cWQ4N8fCs9H3Wxu9WojkLcj3yhGxGogx1ToNuTiYFjcA8pzHneqaUNREU4E8dQcCp9dgMuB9ojzGMNTMDj",
  "key35": "2nCRDEWvSn7caiEQEafTAmoB2Sq5LAKxodkh3qEvsXTd9VaqfBEGQ2bYfYJhZ5xAws6Z1nA7Pq7DsgyUszGiaFUX",
  "key36": "nuFwNC6TsLB5hQFCo4vdibX9z3v3aE5PmVFZogVM5PAw4agx8hwtwTWFXuAzuo1w5AC1FKryFvdzrUX7rEQro4U",
  "key37": "T5wLpXPp34rDaogrALwVoeKEcbRoEkVDsCsMAtztDCkCVSiubb18AmbNNn8uUBnNdX14DYfMRufQq6kuUGinVHP",
  "key38": "4kejVJFivx5QsB7N4tzENGZsLcC3BiqiwMpGVJzYjbrcMB31xtZe381xtGFifTRDc7i5zApD1a1StoEPkqdL1iTr",
  "key39": "3KEwdu4uaFfaSiSh5A3L66r1NCeKLyWBCj6joZvBB94KwDgt4tLhCU36KBqZ2UZMj1oz4PCHXmcndj8axnAVUv6N",
  "key40": "54gC2cKyfXTmUmeNX5ZGbj7sEeqcZc3GBZPEL2DoCe8upkLcVcsNExDokBFzvy4wcfHDN9C1s9k23MgUwMdvnXHR",
  "key41": "2dGgJygTzVqRtYEqMF2kYEdBFbMDYpYyKeWLk5ErPdRvH5AR4KnjDMSjPMec5sHsqgcm8dyg49MNjpHZt9DuGdYU"
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
