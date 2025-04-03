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
    "46HRG8p3zFAAGLRQox61B7UMT36HyNZtC2pesns4Xf14yntGCzFe32dLWaDbGeFbXW9hXKMmZRXKaNxAHgrZVycY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31DEyaZptT9DByVeT9oKRaoqtXE4z1f4ycdUkmZvSifnZPrhNiFPVKjQmNic6YVxSepYUXmP28bHTP7ukmpaGFXZ",
  "key1": "4Wj7bBiu9P3Miu2A7Achjc4fyBnPAEMaqgEYLRZDdeDMU8enmwDV9VjFYsZKiDtsfz3BRXNP8a4hLh66FSmV5N4Y",
  "key2": "3u5YzgdjvJDP2z9edQFFzmLLSvKAn3MQ7JyngnNnGjp27JRGEucqQ5dysn9P5XbPCnu9oWbogAxqP3eSnUBjMyg9",
  "key3": "4PJ9UnLSYfQWUVC7QwxQFjPpQKq2sX2iqLFytmfUd7vkfb1z32ocdnBLLv1FStLpe7xsXTPuEvsoxyAsT8eJGXML",
  "key4": "5kgbvExyi8NTULSFj5BqyyqQEbZjhsphSMv6C13kL7gLQnbMyxSx8rS5VdkoU8muwFake8vvzFXfCWZVWthivoJ8",
  "key5": "4otrdPvXgmVVdQwKpvgkJ6DiKj8yix4cSb7eUdMhJCLaCySFdKJmUbNhPnBA4x3YfE1f8kLszXTUv5n2BqmSjeWv",
  "key6": "2LxCNCUtBrLDupP6yMohWFdjgoC12ah1ZXY4nb5MoAa9JsKGuLFFMYwyXWneP26VxgsviPyaJjrC4dAEPf28yGmL",
  "key7": "3QFChNpdf2RBKYgVuaxg5nyBJem2ZneoVngRWCYMze8zfDerSSew5zJY7qzcbWpjvvYvUB4YJKEh5rFdStjWq4ya",
  "key8": "5Bdn77vqKGag78RU8wfdqHFQkKmNoYzxzBDXWQNGnE2QQcBDF6CiNPDQAr57ABFSPsztnZPQLxv2sPP4njjkmX5k",
  "key9": "2rqck5j8R9jKNMnxnZdDiNp2dJwHoZpvfc3cTknRenHhjJ6WmfbTmnQNh1JeRFa8ifov9CfYS4dnyayk15mSBzrC",
  "key10": "6MLSfbzFufNoYDtujpoABJeEHfe3KwEHqDkt3DQfyNML7Ga6ZUY2AMr2bw8Vt5qodvhBAmxsh1HRNvP4oh1BjBg",
  "key11": "4oPdAT6MySSrZHtUBeChGSf4nkDrMkesLDpDN2auA4zbYKiVJcaYcGQcqzLoqRXRzwc8qMBkm35wG4G9YfDd4ba1",
  "key12": "5R72MfLNBgwsdBMrJoQ5SvpjECRfQteipvqxh71gH3yRr4HRTDqg3rciZmSymyVnFe2AGhiGqgqgLpYCJ92yi9pQ",
  "key13": "2h9hF6qmxsp3525A8V68dekv9UXxc19Xigf9MkJm1rBtdpEz53VRT2QUXpTdNWJXpjngy7vNfPAEfCa9ijHZsVFe",
  "key14": "4PxgUdDst1rUcrSav2zkqRhCYgGewYVY7mSWshBF1UyVA9Sid39VgW6DaSEZQNsXMdguM2wFDdQdkU5ZiY9citfJ",
  "key15": "3tqPHY5urC1y1Tgx9W6CcNtEDbGKY2vRkR9KukeY3ZjWwKm3wJVYnFXUfuK6HCs7vv8h6TYdwWR8BQiNGNcbm5Zz",
  "key16": "2bzXckJwrgz2658JJUgSMptKw4HMNbGP4ZDUpm25thL27qf6XD8cMsQziYV6LSJb14K8NEFkBJprB5vyWvpM8Uur",
  "key17": "4yn6vjvXo1uSr7xbVi4L1etBSLzUPepyvTot3yae4tQLWF4XYVNirrrTX2aTyZ6mV7Vx4Gqx9qrtcLixjpuexunM",
  "key18": "kivEF2nxA51W1Yh6TCLCKHG8PfaUdKfnDguRP3P2Hn8j3BuJWDpKcaTypuaxVZAKmcUSwgCSntHPE8YNLoLdzG9",
  "key19": "3PoN4FavmGXMMnhFzGEucdLRhFegRoSrycjNRxVHzrFJ8v6mZYszcirC98Zs8honG9aMN2SiepQqtgTjW7AGU7Dm",
  "key20": "2DKH84g8YCL19mQZSkzv6Ja8frJ8QU3wwseEz3pPzqLwfuTWyHZr3jNQPhVqFAPm6F4GF92f3Gdj23fKzLC1QuXt",
  "key21": "48qf2YzXm28Lf9msgYw4z492bgwRVnPA3px5fFfWpJuMPfX7ztVDopHx1h67fw3feJJ7AxEc7nDGwA6KFjvZn1j5",
  "key22": "3ChtRkWsLPMpehcEKgxZmNBYwPGuRPbPqmisZKY42t1CeBULYt8mVSLdGA4GcNnSQGYLtNUXExnsbUXG3C4uUE2W",
  "key23": "36xfEj7CmFTBTvTmgvS3Ln38TC7EV75acm4QHs2rrrju1LC4w7NuSpYDB3s6Woae5uiwbUhNoUGuL8bzSybBGaG7",
  "key24": "2uRTcTXQrgw8JDfJFuJqaC3PHEhmvig7jrRaDPwA5rur6LdFG9FTeKApGfQ1rb28FAdL6RVPt44FQc4nU9ojHQkt",
  "key25": "2yvPUZq37EhoYyzKJMtKfa3ffhgxNko3fYWKufBoPue7uE4W1p4oTmU3vosWEhXHvJWXSW4RKvLg4NoG7PfFAnhe",
  "key26": "RVhZoaWxfmyoJccyb8r6zrv58JoRVgZvKSBkvwN2mzCepMuNvnXgjV6fYaks9NMDXfb5nRETRc8TyCTD4AFwkW1",
  "key27": "55J64VtYzNb3UGErqESVMruU9oQ7EH5dHmVLisGv8iqHezqdMSRMDXM9N6EJnxYqaHm2QxWN9FuU69wrv4NwU5vM",
  "key28": "41QZscj7JVJRNkPbKFFpKZP2ab6b2xPDGiuFqDuKpuCu8yscDXhFUjR1vGqRLvfUvJvdcvLHRJEQdXoFU2qdK9yX",
  "key29": "25BMzZMyxLzW2XQ1sDd5LLAQo113hp4eKGn47dPJtbTKM89yt1VAvic8xhLi68beW1NMDRAEqYEEQWhHLeUXvGj2",
  "key30": "5j5QaFCX6PrPnsT1mxaPv122ZCmDVbbJf5y7zCpiZLQqJ8E7M77Prfn4mrVwrpMXaHHSTuAcVrtjwkPLhzw3tLXG",
  "key31": "27X1otyUvFnzYHtishKGmxBrFAXga8PP2q9rDF1BLbTiHv8qwDkHyYF6WpJsccw4JZsP1x1CUGxsAFH3ywq7AMsq",
  "key32": "5fgLEMKvi1m9UnC5DF4jdigmz6AthtUZirbrssiGaTWBHGWRJFuWwyNFBxhhAapKNCVimtw1HAix6dd4GanaJBie",
  "key33": "4JSLbNDeqndZuG2AJrmKzcgRN8zKcQoSnMWvKRHVj1hSxMgdPKNubLiuvvVT4YENnKksfrEwRHHGZkfupZsX6M4o",
  "key34": "5w8iMosUZK8NTPrcAVdXdD6UxXWJAGHKHxdV6NGwfXW113aKYKGgvF3dN7nkjL3S2u5dzGi2hVuLRuEKqbtXpbgE",
  "key35": "49DV3BtEyHhsTivKSxvxk4Ji4o3AxTRMQfwrGX8tQqfscz8fY8vbSotf4vV8sh73pX3VA841ZTReai9kFTWwAeXC",
  "key36": "4rTRAsvUuiK6ntNaQudaQMDCYzFpNrv6SSY5r67P9XG62fDt5fucajQ46gPsknD1RaFWgAoueDzQPzDjHZhu4gKZ",
  "key37": "2QHztWm8XQ4yNg4M3PD9qeqm9bfoaAmEUaspPNrxDfZrLz54TMM5GYZeTCZk5MFgU42Ruz1exv2tXQPUFSNbA1rx",
  "key38": "A2VC2maomzFcgBBEgM4MKG7TsqgRqw8EnH1SGC7XFzh44u7NCKZ3Ny5itgvD4mohiANGkCTofKsHMZqvgQgispN",
  "key39": "3dZRMfZ91KAs6QGfuTo43dJJEmcyMqnP2PGCuUVXUXZYQLNXEUmSfkwD8UZ5r6SptHMRpyPatdNJKNi9ceEmanVa",
  "key40": "38P1EpQCPmgCrSHLUCYXUJYtneMuDVp6oMegWZmUjs5HNNR5Qu3irXWXJZSU3F58hoU1iU1r2Zyque3aSiF7wwia",
  "key41": "2tKniSS4qkauCXHeS6fXwAfZVMj7VoVRDJC6qJZB7GBZ1yARjTuyzV6acT61YENChW2GgrPzUQTCTW1pwC2bBM8s",
  "key42": "Bd4RcjgQvcSqiKLXNYwXs9WDy4JxFvydFfZkRfwq2nnyMzPPw3cJhyZ16kihhNZToawfMQRTvXyTqd5byv97Zor",
  "key43": "3GDv3xNL8shYWsAhXYm8Tzj6DLwfUy4PGfCVw2RFSeVr3sRm6MAz6jygtvWfQ5mkLCS9DoWUMeg9Qq3b9C3A619Y",
  "key44": "3M4oGS2w13iVrQEw9RAVtNpWiidHc5oNZbC72MXLMTMHmJV6YKMpzgFcJK8ySJut2cW1dQd8TKUefSzmXPS2DZRr",
  "key45": "5gkhiCLypoF9aVdwUFudATrSawCg7pxWF6ojWCsLXD77uDrayoSYkNmGRPBZY24s1xQTBEUtsX7dn6uPoZj6JTJu",
  "key46": "3HJ24x6nc9hYGoSF8XaiE7Sk8uzMayTDZgVBRjjpi5F3Gm8yT63vzzhMDkvqjh6rokb1BNTKFyykZuNK1Cn9qh9x",
  "key47": "67m1v9jCtadeqUNH9HAuQw9339vrBBWHZEbFU16ECEh9f2rhMhemxrff3774L47qhpFjnEiQzQT3VHGZP4YTnqcT",
  "key48": "5UaQvGpFv13z5ezhhQBStDRtEEsFJ6GhUuReGxpWnXD9B8wWi8ZcrMKFFBct1vy2vtTqrBUzahJpML5Q71vJ8rGo",
  "key49": "2N6eAK7hP13ZkXoKBUq3ZR4Z82u1qQDDhyr9p5vMjJ5H2nFDvN5Ufi27cEaixLAggYaNMFBRB6mvxcYNTXDbWDYj"
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
