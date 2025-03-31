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
    "2j6JSD4ymFtGoahBgMCpD88Vb6R5XvyvRicuH8VpwjAcrDXCfzhmGNkZwmaiBiKiSLmsc66qLBXbQUpLDUeUjZAF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Z2f5LP5R5wy311bNSxwg2X4tF1dg1QsPMwgyqvd7gW99692kUUdKwCzgSPFp1My8fvoYj1EKExCrP7NVr1DsNrm",
  "key1": "48d1KGK87H4t76NJBKMEucbMkyJJTLG7SCiPw11vxdf4Ef7NHVXq9XgQKYuo1HPMPvXRtQHgLBC9wZBBbg13rDJF",
  "key2": "22dfu4MBXhN95UdKaUevriYXVWXQuoXVL48erxs8HgGD5VJaHcubHQscJvha8gpqDXx32kuhm84J3WQ3yQBRdpf6",
  "key3": "4qKFQGCVCsumdWUQAbD3SP5RDgDbvRAFJDt8aDZhaWiu5PzbQNr74xD7FHcVfoho1hMeLX2zBgH6Kkc9WJSutKDs",
  "key4": "3KoZsNXsWE6G82ikd2h3b6eruXf5cPBno5EmsHjYzv2wxPCJZmdJ6emZYDmwFsz917cBMjJ8jjdAbao7cBwn9Vx9",
  "key5": "kZQvohCs46vvN1dEV8kiToPmjs7Pca78VCUgLRK51yEfioiSoi243jTXutZmCtiWTPKucbKfqbJKzCehvZtXK1k",
  "key6": "51U8JAoKqtQUc4gQtJ2wTiUdQYkVCq6VnCRUYcgLei8xQo6DKXPJbCeWhFj4RAj4PHyZF96ffYfkZ7Z89Xtqhn55",
  "key7": "4BTFhbQBYoKX3D6qRpkuZ348WVhHRVYKZxbNmQrxzY7hdo3ZcyZLQo3CRDr2X7WxfwS2iwCJ67Mpd3wa4fCg5tqR",
  "key8": "PbXSd6fnvAd5opZbKUtHJbXKyML3ArQgebhtjQ3Zkx4vzoxWCM9KghdAJ5sBYHqcMmE36aHmZFZCj9uQBmzfUyx",
  "key9": "61vDeuEjJPAdvx1f9JWSzHE9WyPnPZan2EEkbgKCp8svtgyVxo2NRsQk55xAeoBcH9Kz9jPjANu8ykVeCpvvi1DN",
  "key10": "5ee5E2UKNZ2btscPhTB8KeUmK2KCg4pRSrLzAXbmQRVBw2qp94hWfdtU22tg2ngqfAbGKUyu8z8NHvGyBwUQBkJC",
  "key11": "31GSEPGqaH37qLoBnDcHNSjhi24mfZHH3aTeypoD48Mn8QHNP7dwUZX5uXG2zZEJoAKYGAFtpuJsaoSBrZzDaEn1",
  "key12": "2eihYkhePG35mawaaazVyCG5zPbcZNMTKL4qxxqGMxRQZRqDmy335ur5pJ45xzdzE1Vp6PnRdScE5PBi8HQZKon4",
  "key13": "5MiQV9LetmCotpu8bvxWB1bKxKXUaXiHDHYXxLCnTS9DrwYDuFDiweb8jyM5jst3nXm57VqRskK8TzadZGJdRfYX",
  "key14": "2jR8MnjixokCUR8rADfMQWwwacKC8y2eejcq5LNwXZJBPJ4WcXcwVsP7PxftajYpkgVX6ShUF7cHAN9QWuk5ANtJ",
  "key15": "3qjALcUrrdvVKXMFzPkX4DdQB2ECU3s4UzYdcnFMVZyHJQUR686sDuBGk1jM99g8jrgjJZE4Cfg3cPZewAbCQPB4",
  "key16": "2EDdPdao8ojByafGg84n7YZ5Xz95aHhTmr2775DEo3tiSUNqcJrRYWWVHKXYKW9Gv1iLZEr55BSjWppSF7Aj9Ruu",
  "key17": "qV2524PkLHTXF1eEg4sm7HnCVb7aLC1vPwfc6vLubxKzZaVd29vY962vrLrimVpnioM44iCx6YqcPsJSzb5qefN",
  "key18": "4MWTEw6xcGDDiMSDsNQzkmnMB23Gqd5gShn3AqjT1V5sYKvZTuf3TQRoEiUrL49N5MHrQR4pTZS36fEJsmKFZDgh",
  "key19": "3hkHUiwvovRzvYVA4Z7k6HdZoQwbp7st4819FEhCM9ZvLStYtkcVaBYr7aitkp6XafQZ3bbpGp2pMmeX1iXmpUUH",
  "key20": "3BcNwMJpMX8hRPcBx3ZQRcNHYdANjQEnioAdx8PxZtncdsgh4BFWeXAY5pF3FmX5u8CPgqSCRer8En6qkTNk7FBQ",
  "key21": "3mZ3HMSnLDaeQeLHL6hr3vhjgSV1qaEDVAot69f23nRAr5THxYott3zghZZMCPW1o34vRyuGEjbNzJNZJqWhaBF6",
  "key22": "5S99A9YQhHXah13VHk7AqJghqouReGZw65jShnexXhhFusQsNPdHfhwPfL3kRoPKhZ3AkBUSzxLezEHScx7RQZx5",
  "key23": "5LRaYkHBig2cpSbhoBJkJ5hsDx5kcPzUJ8kMwTT4oQAccCQFjx99zU94FcvXBgUNgnUiX8FbYW7q1Rr69qMzG42C",
  "key24": "5wKj2HFhdDESzWNShQJdGRHZ3UXttkRxbfK8jevBzqwwzzn8iquAtQjvjzAYrun8pkdvqHbAggiFJcF1WVQH4R9H",
  "key25": "ELyRkYRDP9qEPSoyGQofeWhLf74EEb4RbMmBSwDpEbyF5YovzYBC77ynkRbVDfqtKNBpo4KCVWqWrE4Gk9C4YY6",
  "key26": "3hs5AZufXBMS9bmTALnjjd5f4r8WaWraDmwdm5YSXijaBVdeND7igRgx2eMm3EkDVPmHLzsKZY6xqCkZ4gw8XF5n",
  "key27": "3gd8Yx5nGizm666VCfizWQwzFqUbEg1gBNGwFPv7mUqFT2Go47MZN63nDwqzbqtChQB7Z1jAiUFqNTsCaJarToxt",
  "key28": "UAKuYW4GbUG7BTUatrGMVNTngcqxP7ZUbvBChLoCydYuLBDQN1CcBnU5Rkk4KZmFPTFNFbctR2dLuunjoyY2N3C",
  "key29": "67Sv5VsVJRWytscXHpPk5ouixBsaCYDQz4HVmSrja13K6nHRgY8UErSHv1KNMJC2KD555cTWTrV5QQ4phM7jJD5U",
  "key30": "XTc34LpDerxe7ENAm1Rf9z2HjQospDdZtvnuYKEen1jyY4hCGgPpMMp3wKP5tv7yatNz37xRydx1f3F8EV8DGgS",
  "key31": "35wWP1jjVK6SEVanPrznNCJzNmQrtHZFVSWMgboanwyhSWmfhyL5TEgzexZoeNAUrG9vaEUJuJqi64u3xkhUvWBK",
  "key32": "hy7U622VTMfYRAB9sd3kDFQ8tPFjSfMZc1j2Eh2pMR577oXky4aSTidCG5kHHQD3sHX1KrZH5wAJT1T1mwh1tnF",
  "key33": "5jeW7jJvVJf57Ztw6h1TRuWD4c4VRDWJWWEZRLiFC63p8bWe7mYod8QWgPKVVHkij251dnhXUszm2WL2LXoJgd8m",
  "key34": "3t67XsAu25N8HjxJLx6VhGQ8jPiSSfmjKqEHDhezKTJNgsYUhWjCjFS894yp9r7iRj72TL8GDsU7XYfPaHPtLMwR"
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
