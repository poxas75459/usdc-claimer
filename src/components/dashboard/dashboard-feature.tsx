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
    "5jo9TgPFRoAGNiFRWZCQAGHSjtvVxLV5F9P7xstDQGH1wbgGLNYbsGgactRUfxMW7TG1yM2pXvsMd2DKpGjmYDzd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zDRtqPPATKd5hcAqYFDTpaWz4YY7bSCykMQ8akoWU3nMDNarVZoxk6im7Eihp9VeV6T2UqBrVefwVXk8j33h3T9",
  "key1": "5P6aH4rPRcKWkuVfrMMoiZVeFAfUXTzXrLNuGa3saXNaEDpjpHtGyqtkKPcyiKGubEeGcnup1sYidfrF8cEegxBR",
  "key2": "5YUTZvuzp96bjyexbwSxnM8xpqEdU6Hk1B6XU22puJXYyAR8RQLeWTsTjZQcDcBphscXUuUtaoCTpuLz8nzpyaoB",
  "key3": "3voFvYNYaj92QLSW9D62ZiEP2GoZW3hM3BY7CVr1iUqAtk6jNAPnHVRiAW6ZPSAEGDdDBbwmk5FoPxv8Hc4mKKdT",
  "key4": "5Kxfx1bMhfhoYCoTDQZYXa2dW53F6wNn7k7JFbh6ff1SDLfRheuaEqPEe6qi7dyhJQkFKgbiei2mRo5wHd7h7Wqm",
  "key5": "3FrK3nvwC32nMsNL4Byb3V9yQiDbEVQaPJ4CdQwmHDWgE4VXdJjVFZPFXcDZKbVwB9L75R6yQodXB292ptdeBEQ",
  "key6": "4976nfMCQ827MykvVNhUJKtudmEM9UgwgDrgYFrgtF9uPXCZpyRiad7D671FAFwVknJ27b1YeCQqzWdRCRbYxNZF",
  "key7": "3N51JbbSiVogMzZhPxMJeUcDXbYr31sp6daswi9BFRjncpxtH9azzx7HEyDWLsFkbUCF8HCvY8VswCdgMJoUSxxW",
  "key8": "3DugFVM9bBmzi5pJAhX7Exr3KtRcapDpzUvMX15exThR6vh2bcmnX4GKrz2wHHSbNPc7us3KN4cm2u6jYVY9WVPt",
  "key9": "4CyxcBdi6KXzcVVwEqpoGX1sU2jDwM9BejMaYKWdSCSoR6thbWG1VBvo83Q9uRsgnNRhnJjFaDoG6Z6uyaBip3u4",
  "key10": "5rLNSonAZrtngd68ZyfLvx9W26bvx3HdsD6JQ5jS4FDjRfUVrJQpt1Fe4jePdSLFt5NgWhkuJehvzkbf3dvhPUvp",
  "key11": "5pGPifUybA7kYibRwsBGfb5g2diZvMTLSMumUcWvJNhXmMAurFvSbEHuGhNYF1XDyYewNKKHq5zJhMxYJqGA5bdk",
  "key12": "51VRkYYXsxV6xV9KZsBWiVp3KMC3VAaMwoSxumZb3JQQ7aZYJe5zpoZ8bLx76EummUJziLdTpXGQkdpHW4iFewZW",
  "key13": "2MZ4mWa2Ra3bGDWqbgmfE2VfgiufEXbYsFop1qPFBds98KrZcDzJQBq2gnNzKfdt4VtHECVd6YzxPZ5uVRFVGiv",
  "key14": "31R2h4Rnhmn9MeXa9fz8p8HfqUCwznwXyx72UegLspLCJnXbkNBgHY7JARracPrctUDB7dt2hdUJ82vadd1ZDjmf",
  "key15": "5Sj97NXMe4zk7TMEf82sx2VPfo6dQ41GepFpC3tj9MvW4BPRPrCejoNEMnTF4kfKQYDprqAc71sm2x7dd1arRU2F",
  "key16": "45PfpVke5dbEm34HVfBDA4un9naddLaf8T5oAi8FbTcQBKBCXkZGZKRVC2ukbbfRfyAMETdjAfdg1WjUiKZQnhXc",
  "key17": "2FGsdsjRZdLxxAWbTR2kEmjrFnz9Y21L6G1fQWcPdJ7Lg3CY1KRRHC9mZ9dfJ5amwKoYTh2u8Hhvh1vJgKkSq3zb",
  "key18": "vjZonvPQXN5r3qQTk5p1PYR7sJgJRCbcN5BptoxpDgT8vRzKapoJqPZmQTrKrZYWjWfCD5EqZYf6H4ifP2xxcsu",
  "key19": "4TbKaUwnD9M78y8mSEUHxz3YKJYgmD9SZgM2CV2LzdFCjrnDLPJQqP5NZRQ6YhjwZbgwe25rim8rM9ghvQrxzY1U",
  "key20": "4pN5FG7QF9vsvQPNaDjT4LnsY36sKbax2R5SNHhfAdj9szXfjqgD2jiDLrK829U7vPRt7myZkzaJWcnoWkPGcEwi",
  "key21": "3eVqJXW2Ujv8SQ5x1ie6bDQKDibqbCaoR9hRBnp2KF7EXCqhQJxUK3y7vFxj57b2SnKUXmhH8QDzE95NuGpVD8qZ",
  "key22": "3vHXEa5ToTnyDnhX5ABioNTNwZwFVAk2736y5zC3reBYtEskt2VTjZJwd54btDcbv9rvSKfFBrotdSf1RGcgTBWG",
  "key23": "5cGFYmaXdxbRHcUHqQVpSmGf9PkEsPiTLba7NTdRkHHjoPKpB6mTdeof9qN1w8dU8xbGfsPToT5Hg79k1cZ4jC3r",
  "key24": "5D9Rz4GoSzCm3kWFgi7XzuC17vY9sz9RpQZ47cNdEc8L5wton6DFtXdG1zrQ2BDBJcT1QB9WXXic38CwazhZ43Bx",
  "key25": "2pix43GE8LfWaQTke7NHZ7SSK69dKioUiF7zFbSdoGqsxGs12oZWo4tFQSdsMrW8JQMuxUoR6vtA9tfPiZB2WPTo",
  "key26": "sA31aE3AD62xDApdaLV4233AW4kW3UYg3x7x81G58j9Pr21QAnX6EAYJGvnJ89stTAwctaDNzJsQ8E26DWFq2mV",
  "key27": "3RTjpchKARc1K8LALi8LXJqUVKEJdwd9E6aRpi5T51zMasBiMDkHdApf1cn6s9Ntg1G8x27jzaPanBcTqoN6ffb9",
  "key28": "2Cr8DUn1uRXP2hHnEaMwF39XTwswJdkX415zdmLBJEXNd7tKQp9aRbRCA1LzbE2fcKYMP2byYC6qYfQSqNeGDhcb",
  "key29": "4YVKbYXDMq3b2usGaqPtV2hufxRs1Pc78SvEwUcC62daaLv7YUZPgL2yzwYaKN9DXZ683stiT2G6EXgCnuK2S6U6",
  "key30": "3JgdyfjBZymPMCaYbWutN3ki1otCc1AJkS8eKYu4jMUFBz8xfGHdj6SeASDA7HEfSp5FU2WTwtSJ4LJicWRFjAQt",
  "key31": "2brbhL6UPQm6fREThbeFMe8AVU4kLHL1Wt9YoCoCWBSCVmG1sjZKdjRcBrx22J1xTnmdnsDtmj9fk1CqvvBzNuwZ",
  "key32": "3G9P23Ktm8oYi9owVdq9Q2ehPkJaWm28PJkqf6H1A6pbFfft3NChVDPheHdHy7cLcVRfxoTFksB2TjA2YhqaZWwV",
  "key33": "5TEtFU22SqAocHMy5pPHG4ufaDFreBC3Tp1T4SZNbJJoHmSaWTRJiUyxBWYsHQb7Nrq5jhFcMu12qHYTp41SHuV6",
  "key34": "mvh9JCiC7BnsPAMmu3EMAGEQ8aCFViBipCfZxTEd4KCgwxL8qzVPiu7jGN3RfrMFbAPDgZCtL7Atwj8xDUhyDrZ",
  "key35": "3ntJya2gqDRfbVH7eYkMUinayaWNscv4HBi3u9kmCELmYRYwgoUXo4BE2oMAEVYmpkSn1nGsWVfMacLvYivNMMZL",
  "key36": "PLqaUASdzX5mTwSW5kHjCX8zH1AstC8HQZCXx3aqbsjrrF72jW4xs83U8FiYE4mY6PLz2PSsHAT3gTtft5aUdtp",
  "key37": "5yecrU2LAsLY23vyTouWzZLAPL4sZSdfr6pVp6tjuWPpPRKMEmkaB3Pijg9Jc2Z5H8t8fZS66Hhm999rQJnXKo8e",
  "key38": "xhSypMSUPkTKgpZ71MgnzDJNdRD5dY6iQMANwuHRZjHiSS6zWx6fjBaJPgCVFqskTbEnW3LQrWjaxKoJadgsx2E",
  "key39": "5daYHu4ovcoHDyQhxz6udPtBAamKTn5Hcj3YqDQfTgnQrKSNZJZCxFteU5yv1p6GwobJrxoLzZncVYwLQWMrABFS",
  "key40": "eAkLYEjMvaL8EiZyBFJm5C9FmMYdvwU78XzA3nA7EunoocywP68i5hSLrmcyRXpfa4rBEKjhtC8zEPPmGrE3iBW",
  "key41": "37bmQBTxPH1EkzHSMMKBVEtD93135Ti22xMeGPwTmBjYMgJ4Dqbetrrbq4rmLbf5oMKe5GwzcVGj9gE1WYDnrXkQ",
  "key42": "5mnkwz1AZbthu5No75nUG8FDpmViJcgRh1JpUpgZ7fznuJawokCr44HVziNunnKi3WSE6GTT4CinP2vugfYSAsPF",
  "key43": "4VGktLjBmAP8m9i2ToisMF1muRQUEPLeUyX4C1DVpvbwvajaU6uzU4Lg3BaczAJV3ACuwHe2nrBdJLfRBtQrBnhd",
  "key44": "5sZzMQdrT3ZeoSJCLcYeLtXngCSs7ML7u6L4gaWdK81eXaTNAXgewR9QaM1pBUkdt3EicTZLXHZ1Gtg7be5DhMBh",
  "key45": "5iQ6qw2eW8EctFdRbTz81p3EQgodNAQyL5ELmhupj4BZJkyNTFruJ4mjT3dGd8DSr2HdrVoY8HAutCFRK7PqHsfn",
  "key46": "4CGXG2hD4FRiLTE8djQsVuExFwp7RjSC45gEtsFJaZVc2yNeGkdcMdd1r76JFi6WZCk49qKh5yy3GdrUYNdcs2Nk",
  "key47": "4umUv7gJY9hbAyR86NuQUATn8J3jqABUvwBb9HP5QMqKhe1pyuEK6oMZpE2JGavJeWdUf33VyD2MariLq9Nn3R5H"
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
