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
    "5eZRtoxebQ5EPUFoRStsx7JzvL9HoCbmjZszq7FMAZVk4tLKepNNtkG967uisHB9RVJowX4VECz3uiAEPKD4yz1x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wqf7ywGwRYZQdGQvSVVb87TBFKTazTGLmpJ6jtDCQkA6C9ScRGgRZrzBsRVmVcESCcRJgTP9qf359i9RFjEYq6z",
  "key1": "2HFZBVfQtMF7YPnTD3kaVXKNrQE7g63NvmZptmSkSRfsaFA4aubZVebCCr2RKbrQNZS1atfLM1i2zhEBqn2YmAjM",
  "key2": "2MUofaXh8nLVrrLkjtQCMLDtYBy5aBMz64RG5sWFUd2QnmG6sWmQUUsu4mcWzCZeX63rueqTdp71w1QHMjPTpEsV",
  "key3": "5GMoU1XsWuizeTsbFB1RGE1fQMvygYW7Pgx3yjwtYR1NH4wmXochqeLRgK7ziktjxnPvpH58mjwYWqVT5BDLZrXj",
  "key4": "3YAWYNnyfDrNASz6qDPHsqNZp6z6F4awsWqFV9tfGdDN1bEfLCFKg3ZBrFkXEvh6qp3Xh9DJ9PmebRoiL6zBzz7m",
  "key5": "2nedKJAfLWEjT9nkjNfyUnt22WN7zsN8dU7Y5Ns2wA8dDiP3McVBri6sNfSrE2cJt8ZvkoGQdvN8jkPkJrCBZ1QE",
  "key6": "3XFV33xQfBiAA8ipt1cckaVRZ9oF9jmLVecF4VZbpp8voiCFuM6hT78fmFZtymxDfAgckaEGB1Ly85YG4meSjc9E",
  "key7": "tQqkeBZVL7tBaENcvHSPpP1jXvFpsi6YraMCWzAcHTVJ8GkcwUUxF5No7QsqeE6nG7LyGv3wVNpxUxeGpM1j84b",
  "key8": "1tVdVJnFCsV4Ds4ePAo46tyVvWUXhB7r94kEJHCXHKtwGbphhW1uhbYt2e8JESikGzmPqnQcQpjyaxrBJbD5ATk",
  "key9": "3bTnzna48TZRm5dTH3vfz9BD86tcxVPQ24MKzxtQqSeCkiZh8yw7gt98f9258RKgV2j2EbpwxjKD8pGtKsWHiwu7",
  "key10": "3ZWEFi5yUfwhht4pnJSN176K41yJHAu4TA4BssYbRc2BxYEhvw3xnfGbhYe7buZiLybSEDSpSqonH2aC3t6iBMNH",
  "key11": "3nsp9i17nPtuJugNrTjxaMfcPfUCtGVqRGsGSTxpYTWUMXHUgWjaLwtxYu2p57XzG4jNpaRcfqF196ssmUWB78zC",
  "key12": "5uBAJjURsRqxVsFcpeVuwwCayT1YxT8jNux4Lt9RxiPDUYCdiGzhAhrqp8sS1Lk8vd22uVMj5z7U3KcGxAmWXg6T",
  "key13": "2xvytSDjKurjxNJBYNGenXLKV5ECWdnvN4PiWkbRTScrGKcDet9pDadhSKWp1t1d2eLsAafUEXX5PGv4YvJVzj8Y",
  "key14": "4LRCYHR8e15AANcWnetKMBLebo8rxJQ1yK93fnJMLB32QaQQdUjqZeMrkr77yawa2gKedCSrCGF8Nh8N5r6Ba93F",
  "key15": "53yitsVw2AKqy1HtPbqbrgSKDr756M8G67RV3qhWr9TiFa7zmdkDi6tZgbkmFvwHpo3TWpDngEhrVEyU7fXddMqT",
  "key16": "63qk3dgvydbnqHRLwSzLFDtrARAsTYLHfXpKCgpxve4jnyWpYasdaNWs3h4wX7BfMiztzgBqeEYkcY56wePFQ2ii",
  "key17": "S1QeDXtQzuJHbpQZWXHih5c2nncDPKeXtF7jK3tTVgVhxPoLWMQRmFxNQ2NkwZTtNNZCctLDmkJShVi5jeUXLbt",
  "key18": "6mfjh9mnzKMbAdev9yWgpw3NoiwGcxYv1KQYCmYVRzW6p2JfUWkhNYubCAyLAkXVMf2sdpj62Vq9yDQGKyfvoRv",
  "key19": "WeSXmXmh8bv9ZaTEL6rtmsY3PZFjF2ssKGmdzSbLYbgbggDaeYjHbiQEDrmksdzeM5VFNMxwpdRx8ubAXLvTVS4",
  "key20": "4smLRXmgBF3nR8kFSdXrwfpSaHeNJ4yaXoG6izMmGYWPY5deQbPT88Pt6Wbyf89uXcb9H6EvowywK1khg2ZaRhZV",
  "key21": "2jhx3yVdc6WPw2HG12ofXXJHG3mmmvq6QYKpsEdBkh3vgnPmLTxMBtoN9WSaBT4FcJjcDo4rxX6UeHxRs5ee6dRp",
  "key22": "2BQMt28SpUBkfddJWQDb8BYXqir6r8AU45byWcdFkJF3AnnJ9cuedz3Sd1URoCe9EKuPwetR1ApWm7DaYRoaH5zL",
  "key23": "c9pM9nBLzFjvQ8EoprEQ1ApTeC27a8D3g9Q3K28X3hKxcfZg26U1K1Mnn3VCvKtBngZyHMfo1xxqo7nFSNxtBvx",
  "key24": "63uviGhPmh2jQ2Q9VLFVLafWt4MbHrka9y5MyJvizfmRBRa3fuj3hLzZPvRNUNcJEMMmoajVEM9GDspwZWZLQnjh",
  "key25": "VbEarruDTaXAR9KLWMA6JM9Xw4abv7gmSQcNsWqAUhBwJ9tKmC1m95dEccJfP1bVXyLwr31hRhQ5hJXzr59Epq1",
  "key26": "4Xxw8dwPPZLzyZBWFdBuZaPDczBQRGtsqHoj2xD6Ax3gYfNMowaaVFXPdkgR1ndvuw6jvzJg2ZAWuNLjxC9YHjKC",
  "key27": "3ERq3EnDR2rdTsiNdHM3Uu28shZ8WP1aqihyHiSZjodFJt9SpidukuNVGcmbnHaTLRryjNS6XDfXqpG3s6on3zSV",
  "key28": "3cFTmZNPLDm51UvNARixDTfAmx8fAD7T3i3BTGSVWkLaTqYsc6x7x1QK7XhmXaBvnoEYLskwc7ucBU9TTQC2baAG",
  "key29": "3eN3ykAVCyT5Jwobgdwauco6SkQ936Xg3NKgXZ5dV7WFpD7QLq6GNiNTbpuygfEQnVte4HNsXEF5gGsEXu22yAdN",
  "key30": "4kXoX9Ttsy5ddmAi2a6mVZyMRAz6QpbwHcz9m2KnLkoPo7xYbtD1REqXNv96hx38NdANNhfW7hDXtByELTq2B7LZ",
  "key31": "3Hn1NgbJ323XybHAgzWeRYsfujzZ68NF3VsgCmk2X3YuiewbHxtqqsEN3UwGSStqxk5rbZEUWqPawWpUp7qpjRS2",
  "key32": "5yk8xHfp22uMtLhZk7Ewb3EjFwLXK9LsfnavMJADTbJHPdYBCRDcWCDumyLcfdVb5XgYhtyDKGAgMxxZxWtRTG1Q",
  "key33": "5VmhgGuFXsPGjJ1VuS6bjmWUgVPLWMvfviefrDx63FbKu4ej8kvDxheQuP11h9Ukj8h3WCuCwCW3RpmEJWzp1h7Z",
  "key34": "3MB1vF9wTJQsZ4RyMkhpEJUWq1PErabifC5XecU8qtyXgAM4Z9mfH8VzvLP9hcHjgnqvBDFzs9n6ZjkYx9ajnsZz",
  "key35": "2C1Pd5rhSzy8EgzcJ278M8qWrb9n9bUiTFDMDNS565q23EE9jvZs8kkBxTfMZiTAfUV89HPsMMvQB83fSF9Ebygz",
  "key36": "3LrcWjT397ZUp78hb6dGpkWNSrUZ2x5QMdhXc7pb84CBfi6ctWGAyPUMZWWVWvHMahn5rv8kwL27VtLb7LJNTnzQ",
  "key37": "BcoBuKMRac3R8GgDodyTo2qNJwAwS53HfP4EBcLgoNswg23s33q9CEqrbe2ydD7ujWpwoGerrhXMzj2oPa4SAAi",
  "key38": "3sHLpoD4ZhH4ac4khwYfBxJjDUPraKdjNFYYiGkNcieZYKK5CkAZn5SURa1eMJKaANwEH8LfCHEYN3scxLNNSrTq",
  "key39": "2xkqkBE55cb1Ruk8cyBH1ZgsUy6yMQNbMLbdywQfFr46u92PLjeYeUCfRpTAVwjcTi9ap2oxukANHc8cm8AsyUwu",
  "key40": "2BqDYk2RFJRtBuSaLVFq4zWKgmpJoBdDhxYcv3jwqNLy81VHmCkGJAL3h8xj1r3QzCZ9r7Md8GMXiPxu51VXp8jU",
  "key41": "5xQQfCzxj12rGg7Bfaci7n1btFsFeVqDE8bcKXPK6DWqbe3F4mLMZkEKnNQHKvuHKzdwSF6TBj8YdS9rhzGEdysd",
  "key42": "57cC1WAub1TUr6AMUVFK6cFu67FXjE67SdoyJF6t5vq38JRMnPTz8MYcUTgQpqeZnAeZzJ8nziVGzi6m1vpKzXgF",
  "key43": "57RktC2WkLBPqAu3co9e1SPXsPuaECMDZnKHMRjh9kKAJM6vw9sezVaGYQBb7vP5eM6tn7HXHyGU7CU3iXbD1osj",
  "key44": "WzzZxwCm8imXG9Aaj3dC9VdtnRz83XQbsTh3fJJEwx78XaEhHBE1S9sE49cxHCFrCey1yMJ6D3U6FJgf5Y3EJht",
  "key45": "3i3rTqQzi8TF4YuDWmi8Tb5HpjAMzarenn8P7M4VVSP7yBRbhQncZrjfbXmgdJrEMAFMRhfdgQNEq3J6A9EEDRC8",
  "key46": "2i5qrxm3ivoY1YuMQFYsRvttDb6tUapZbwYtv5Sxk9EMzMBHGXGv8fAej2MiUNTqfYYQg35oA1q9PdoEzsVCi7Rb",
  "key47": "iexRPTEY27pnKgNSLfeUnNuqZVbY2pZ9UDVfyt5eW6yTjCfWTSccQqDNP8RwLqJHXFwjDfRQyjsHUvHLRaGK5X9",
  "key48": "GziuGeA9qy7GnuSgQBB7HHHxRVTZT6EbvBFm9H36ie4LwJTbfekqCCj517D4pQ7zsg8wpWRMvhr2EzRPoLhKT9X",
  "key49": "5mJs2JSD6LoKe55f5YRmMjwPmaqDemNMNS3o9hqiKhopL3LdxjFmg5dfxwHAew84ZiWsZ8DscMWTzdzMt6Z7n5U6"
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
