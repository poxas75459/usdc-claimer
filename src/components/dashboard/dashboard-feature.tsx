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
    "4pNffVbcSbscQXwU1sz7JerfoazRBbQJ3vvp1BaXGNKHGzQz4RiZ7bjQQZtwrvecGDCLEubSH5XbWDt8evyoy1MN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pWVR8TaVDoyihGBQX1XvJbt2qEoJSwzP5FbPWvHqa7AHsK5V4kyoxvnuxLAEseqHU9d9JUzuQfZcQGV9wZrYkQx",
  "key1": "2hxLphFkuj7AmGd9YLWUX6HGfTrA9T8teV3GhfAeAMmJxRLDKG5HEkTpyS4Hdie2hstyKjiuuaUtAgzDSfxKoL9Q",
  "key2": "5Ap2yrdzzf3CRoo9gU2ezTwqgynj4F8dfGcyPiHgp5gcnujPp8ibVDFaPtCKxepm3FneA7fhgjP4hMnEDjvE576g",
  "key3": "2kbW963sfGUbtQgjFKYMxpGZsjjtKVKjzwfsZEXbKRRnUHKXLB1GCKqZM9nrBgwJTdGjKcb6QKewcaPw4UU6ko4z",
  "key4": "5QQzzoAPf2s5dBChZStRBu3SmJozJnfTSNB93Naj3a9fJ7xCmY4rB7HDAnsdtBddpmCbQEZuUsbuoQ5yzQfGJnob",
  "key5": "2e5FB1Y51SmbxaC4Ww3M2hfovLTKPrH2BFhjBVTfoivxFzgJ6WDCN2Jg5d3vfYMUCoUr56V3PTeccdGBGMVV15qK",
  "key6": "4Bhoi4vLtvLNUqW6cnho8bRoqVzSj5yhkkzwCWeCZ1KvYNUf93CiygMnVLeptn7MxR7LLehAcpGtJGvRsUh828Xg",
  "key7": "3p9nwPvJ1FY5BbZJMAzDhNwqmdwaySynNbKeZAYCzhiqoBp8De7rK3pwJf5HU8UZkPMP7kMqsgbJPXNf3pY29GvF",
  "key8": "PBk79nKpRjXdN3eyCBB7ZUrnnEKmQ7Ci1dxCq3EPQb4hUBGJ361pcs1DDQQfG7Qjfb8Sr3seBhcrMVbym967PpJ",
  "key9": "2CheTeEiXz1PXdUSchEo5VDxGKrJ5TxNz83Tu9ApcChhQJjktNpQxHnxj4JV3LiiWH4defmdevvRXrwhCvLZ3Pb5",
  "key10": "3xpnNduDo6NiTrPZfyVx96NQetnKSWUDoVXNJcjmVpXK1nMFhcw65Xfr7MLd5sfkCETaU8vC88GUXPKFJiAXfmfv",
  "key11": "4LmyoyB8U83ykNpHyge83pim2Z5BDx7dQRivu8zkQXkLrtaY2SjaF3eik9CwS8zAhfUYCaYLRfJ5YZzCrz8MdVJL",
  "key12": "5d5aX2aFxDKis4Vt5knX4ZqmjLUJ3qzzAg1nenYFmTyzLhkbpkiJNBcaesgmx1VBouokxVCbW3mZoaaN5szf6ovh",
  "key13": "hu6RuQDWB4nAUP8Ki6pvmUFZYzPaDx5phrxbmm7ZAyxr86LKjiRekxXb8LgZ6mCQDKAj8kwvSqbB3M7cukGhtV4",
  "key14": "643C7nDo51kzMixFTAx69X9UiUre5XBkwoyMuiPpKg8cAcm6VrS9yMViXzN2PGFX77ymK7mTi6rHhxLJEWWuzUUP",
  "key15": "4csqSRsPNNSTZcyGDtnTJ1gyBPjAkUj7QHnMakVoa55xafzQc5W1ZBRcKVny4EUhFobQKkQYPFr9s6aw95t171N8",
  "key16": "3uxc8Zvd47RGGs3b8sokqD6zfF8kV25br1UYKi2XZM6MLo8T8GZJFK3YLvu1BJzfpQehDja4iGKHakHxBmm9AFfS",
  "key17": "3U2RHeKQvDjSrT6DeZpcdkxYoDdJMMeAdqQPxJxK14f32VJoZc7wSCLzp2Dk1foAkRHpo6uswk34TE1pFgqNwDGs",
  "key18": "2AUEnLvtQ9zQoLjXWPfmWyC74BfE7cR3LgjvYLBVAfSNEixdpEGLbSSgroUFbgPQC9ofcVwJ3fxyJQbW5krYvdCb",
  "key19": "37HcMHT43tS14AsSJY7WRVNrcpXzrVmzVRCAuVN54w72F9Socz3Gu8AhbsNvfrReVMKc3b3p75KSeL91qhygdQag",
  "key20": "4P2vGMfSxMFXPJv1LEa9XA2L8YiKViyHxuMKptvAMXGhwzLxEtTooXLzzXhveVnPEKF2x7Ki5y4XfJeJbsfrRivB",
  "key21": "4oDQogsAVHVpYHXD5VdbjURzLW6LXSYLrWm4sDngAZqkNY16TMJvH8s9ypeFwR6JeiAtwu9QUF594jyQLv54byqL",
  "key22": "PtH5wmHXKtKAqZoUz4MFvM4x5N7hSiCkwf9fB11Be5YDm5CptPrTSVrbYUs7nD26uit7ELiSNGdrwLKGqnMosBA",
  "key23": "3LCx47TLcBNU9T51dHL8xCAGKESEAmuuBhvNVBR8X85gdnUruPGCF3sqWGs4Bb5CUNfwZTm1b7F1MJX4P7ijvJEM",
  "key24": "4oyFSSw12NczyAfjTkcuWs63qqStUSyDNBhcjsU9jyezraZfpwmpaz1NWHVGuZqwUPJkdbqpQd2BN4t9smXT3Hp",
  "key25": "5drKj5N5kwsHf5rdPTmMF5EXyrP2TmooQARcwdWNxcn6Q2aNuwL85ZBaFvQ8U25Wfnf5jkgG5dFonGYN5Uk6jfFQ",
  "key26": "4MQZ7o2bpCneUdgqEjqNbFAh37rNomW6aCQGvoUt9JGgoTdUVwz66K5q9hrwDW2ZkphV8e82KedQLFCduzKwdvwy",
  "key27": "3eeCwmARVPRkupj1LTM6i3pQkkLBjqXRUatAGvY8Uei5f9sBpz7wD1ejmdrRufK8KRYH1HH1E4ToX9xaW3QXRpxG",
  "key28": "3DgnzxUGD9v295SgMYyu1b3qqJ9kMATvkfKNprVUbUqTYxcje6t6Twra33xdwetq4qJPAzSnFyNyBVCHWReppRv3",
  "key29": "34CeX1cwFP8ehyedKtj8XaBBWyq8bDetUwYNXC6qAK3iKzQr75uJeFgLUa3RVpvZynvwkJHxXhEdYBTBkj13GPkv",
  "key30": "2GpwaNJmWGa87296p2JKVdaLfU4btV6p6D4KZfgGoQ5D29rShymDTN6xiWgtQhbQV1r6g13YiyEr199o7huw6Kh4",
  "key31": "57xyDtEgcudx283GcsABzVczvDxWe2kUytK74ANeqf7LPDXKafVcdB993gUTjENjmUusCVanAeAoTCy9dd3EtG6A",
  "key32": "3PNzvEaPM9PavQ8xZGdr2myUwxgLzBx1hVoXx9UyRiruNLRjYaoPQvUxMN6mdhNiWT7nctcFwytuvj2j25PaZjJ3",
  "key33": "58yzb8fxiZTDNSCGjTydPFBGoTPKfut4BLxtXQ1mrafi3rE2iZHpbYNXVY1JXmwJAURHaiz2Sigtu5GuunBNZFnQ",
  "key34": "4Skkxq77VUviMmsSoJa9DbWXtzpq2WJpEtMsPUjMHuvAw8tVjsQNw6PJKJAjwgK9Gg5Ux6KWTe1a6ESUFUxgTyWR",
  "key35": "3cvVshvShLaYuqMtfUBzNyqJrhTvwX84T3k4H5QRrT99JPwk1Q9BS7ghhMPsf9nSTTpQhW6j5JmUmbELd1tib7y8",
  "key36": "4JqmAB67gm91D21MrACz2wtvqNMP4AmgPEtFt2DzaWSjfTh7wyTg7bwEfWcu7DpKHqGbKSEcK4Xm4vSKsyDaigeE",
  "key37": "4ywKiB72KxSUjvJK1R5DnBYgNgyTPCVXaroFjQGPfUmMnn4Kg4S4F4zPx9SiHYNkLu94Z9imepeKjgYVTqnZUFkK",
  "key38": "3AWdfMUbXP2vHkKemypcauurkhxhKx9wW6empv5F3d5THgcdkkop5NR33o8W5c7cYJ6pvtZTMm4sWu1nvkK2Jib9",
  "key39": "5UHLEKWv9KwFHgeiX9MyjqtXjjm9rMvpeH8ypWr1fnBr6SHgdrQfQB8WWaEGm5rzAZs69prGdKH3b68K8U8t6knT",
  "key40": "3fbHszv9t5gsMo1J726aNFMBRmLncSyGAoo2fFxptLMM5Vzv7pSEm9J7wKkQVSz3SEYyTER67Sdu7ho2tF4uCRpW",
  "key41": "25wqwdMwFTxVErWDSaCEoB4aeXjRaP5tak9DpAFcyhZ7aVvobovjz5LmneKuXQFKyP5qM8v9kLzfnthTnpnzsYYs",
  "key42": "3mYsyPhPXSZTcosAhiYdoVaS1NGd42f5jZaD42Fy9D6jKVMTnFMtnFwmZzUeVpJxKs4PtkLDM7s49Rvijbxhjsro",
  "key43": "4g8WCHJPvbvSYV6SHQE78ZY6JAsShJAHAFiMJAKAA3TUXfMvsKFhEdFBkywDGabtjcKxFbvUxMSJ6xRVwbdN4GEB",
  "key44": "hGmRGFGBFeL5FpQTrPuFp7wDe2mpSvet4YZLEihzNZ7FZTAjrQy7da1XbpME3jzEgzpGMCy51kgtZBBA9zPvknt",
  "key45": "54qYFnZKY1GCjHbcsZH3645ubzsQHcLXvBqfHgc5WmjDiJRgLi9jbtpFeTin4jgf11AQW9u9Zp6544HY24WwD2Yc",
  "key46": "3MTzLvzHYcxrZKnQ8wtjUH1k2WVXmWZAJcwMgaY42kAgfNjZn3JgfFyJD5vhE2xFg38n8SGDqqLvX6KffwCTQ45N",
  "key47": "NTNF83dPLnwSPkMvAPMnBE1mpkyg14TD6hCgwFBJnjHjtd9zahgVKzPMb95mnCTPqBMmM8dUFHsDcZ8h1PnKkve",
  "key48": "4TadVb2HM7v6RvGA7L7ifpoF9vHWrRJsp2KKXS6WBtDjNqozFBncdDg8CQRedEFJ7AMvxgMPKoKaT91sGX7dapCt"
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
