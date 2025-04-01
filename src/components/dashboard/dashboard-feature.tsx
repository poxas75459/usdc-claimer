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
    "WmKfy35aj6zbxPvcCtVWGLDXHZhy2d911p7RVwwQ97W2VMSWbW1X7qbXXsMx8vmmBvxzAuJFxnNS5EUhVn4GGgj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cPup16PYp9KbHEjL2KxFBNg4pvNyxa1qXjEhDBX89MY1y6rgoVJVpN2f39ddifoovAB5JuHbRZP8djw4VrAyTe6",
  "key1": "5M1HDR7JfVhSSgTA2f3hJpCsFvdLuGdLybg5zsoDoviYrYXhdM4aCCKcCAg3i9mpD2FR7RLrcjqDiVyvidzX3dV6",
  "key2": "2CdV58gEcj6wPavet8845ktfoWUtcs8kJcpt47Qr52hDNXXBnqgB5HNnw5outu6u3B7NHrxYhgJyfsWDubKkpgAc",
  "key3": "3EaRxcmDQppeuWwkmcZ23DSVGnodZADs4Wym62s6L27n7EcphZvciS6rGu2uPS5XSQpBSqa7YkLXevZB2vmZYSGV",
  "key4": "59aX7gqgDFQ9rS8XzikDZePJhxbdDPqJMi6o7gWKwNEBbVhdfkGK3stNtqK24svRht6EVj6ZVUN7XTmBZT8ZsNoX",
  "key5": "5zNpNW3vaUjA8g34LzGrSGF6LEeE6c6QwduDtkUi32mqSUYUDq7wwABtcXWqjzEAms9YSFcxmg9944wsQxY9wLry",
  "key6": "2PMSwAF1sMfDwFxAuWmzdYrqWiaVbfYSqHdS4g8EUadoMnMXQZ8RaukbhdoTUQLMkL8Nx9haeBXmnUhpeGtSS9pk",
  "key7": "hCEhWRJ2h9LPeshz5QWC8MDkHSS8xCbBrEgja6mRJLP9sioRfJmQvFfpKJ88BqQaQDJMy9WRHgnxrVk8kcSgsJS",
  "key8": "5skRHz1T8wGbv1v7BatrovD9fJLeB7uzabNRHr8yet1hZnYjZRHEPjLviVRbr8dQtL5mVuTW4GGZQiEUErTAyVkj",
  "key9": "4U35SG4i5PL6YEsFDXRAifMvvM63dJgEbYyKuqpKUCN44JvJvkJRq7cj6a27cmeM3dDVzMDAovXRCNyoMaT5m2CM",
  "key10": "4te6AKDovaoFbeJAnctSsENHsegTfty3bcFuiGwZpEPFNSARXHCGjL7yKLNeqS8BKWMLXSst7qFiycoKwTsFydfu",
  "key11": "55Teo9fQgE1E1LcFF9KripWvTMMVrfeFLunXXDDedHCnTFK6ZJEFW68h9cXVVynbvWmAcyiU8LnFhpqYY2xZZS4g",
  "key12": "4kQURzvZY46L3gLgA14W1m4zPaNYFTen148cG19pEid1bD3F87HaE2ve4G9X473XWnhTWWFo7TpKrBc2gm6Q5WAL",
  "key13": "3yEmQA1EnTanUhmLPGnbynohmp7TSbpguG8fv2DPZa9v7YwjWhAuMZE2WWWzKE9GK95wnkiUx93ChfHchc4URVzW",
  "key14": "3E4VgV1cfuz4KjdL52LbccguKvFdJtpnqyUQcu6dppNwpqw8kSPaFH1tj42jNVhbhsEE1ZDL44CHmZBQXdwKYWDY",
  "key15": "5TmskP7Ay5ZGuefUzRD3mN8pV3gztwEbj8ahpwHH5s62iybHzYH5Ua2wyJLxB4cDieoNin3EoTzZfkxE1Ysoz7Wx",
  "key16": "okaJHVnXqBAPRHHbgyLNm3XssKLJgZK77xvCvNawrvNdgyLGTkVxdDiTeyJDfihkxQBpv1gnBCh4cmCY7fi3BGm",
  "key17": "3FYYDMKvm8nJxnDYqX18QGHq3QBKLzMwNm4Tx8oefmivhrityQk2LkhMTjtACiEGni2Jeb9KswGXurh38dbwTMJX",
  "key18": "4G5TPPJjpWmaXQcrQ4mhgMKfzTwuM3hEuvoVnxFA2zNT4Pzog8cB3WpBieBPHwhHgvVPFdy6PaDwtEdqWSJ7ASvf",
  "key19": "5uKwppgEx6R1Dx9B3t5ieGbt4zy7tisYHm9pSBQ9DgEG2nKzbeTRx12ezt9E2CQMtaNW3Gk3ReWKR83t6qUSj13A",
  "key20": "gsDa3bkZDZEv7Simj8aktC9f7CAmCPppsb9qxzUqsozkCSzQcsb59UWhjeGMhRA1MtHcqaU8AvWwTFspBJLpuTV",
  "key21": "3VB6j16BfUHFHRmUpRvTKv1WLVgj6UEZaAAxiPVTQwi8dXGvrGexH3pfkcbVqhZQYmFunkH8WNy8ZJ3juRD5MY4b",
  "key22": "4twKJVZRokDs5S4TSLf1qDDgt7wVNeB1MQiAd2NiW9d9uFNzBBuTmuWtS44jDjkpZ5APErhXa9vMRYZzb4bVCWKC",
  "key23": "53gVf72Je727RKPJgg7xssSs9zgd89g2Va9HK9GdwkngWTuquU3nsNEC8NGXKqw8f8JCXKKi3AmnX1kbQ1xYE6RA",
  "key24": "3wcAMjHJF8zDUL9FAt1hYuJaux9bnyzJAhcSEJhtTUqqpDUaUmwpHkgPE9keRyfCNBdDmXH44tWrd6UcHSkqDTVw",
  "key25": "5oVpRjC9ymvhjzDSHjkxm4kooKrkQZpxwcYaqR7VmqWwycyfDeYtCumhbdQRFTDqDu8wM9gzRjQ7BwhFENSgeYPW",
  "key26": "27qZBqwwtXmVm84ih37bQN2fFHUaq12j2QajK1ZUEvWkkQiBQaRE5FcndbrRWbMoWqF7HTd5zA8iQJUv9ozjsaT2",
  "key27": "3n2BkTLktk24gDM18g2D9E7pzHU7F9qyxBFWVFL6d7RQQegXLPQsMiHmHMMNKHXbxYDoxUXwC13XwtbxZ33TLzZe",
  "key28": "51rUVa5zC5QeCoGt4UthQ5hbqLUB6M8MZhKN6t1VLTv2XTUYnxAqW6wU2MugZwGMz5qs6HYve3teUCSnN4AjsU4c",
  "key29": "31ZRXMZXik9NbasMk4XsZeU8HjqWJA8aeZsFcLu4JDDvebnMKocBbUU6yWLofcCgfB56PuM99fmsFnKGBHeau7C6",
  "key30": "5fSbHY4uA1x5YEGUGqy9btkjcadF8nVQPz6JDAna52B9GYrghdwCMPjuG8qRuTaJJhjkTU2MezTQBzz5bqAPNweN",
  "key31": "3EN81H4o7jJ1KLqMCBdRLoNmXjJNvDaqA4een1B8J5EZ6MDzGAKFvrZ7Wrp1GuNDgDcMFuBX69ekPsGAvJn5KNbN",
  "key32": "o77XaHZzCYzgtQ7moUk6hMbKwJR2JUg2nLzg8oSpaiLXY8BJhneUBruaGE1LsEaxLvoyCQxbwY3XE5LVxibxLyC",
  "key33": "3uNZ8uciM8aCv1LBGkDZomU43Fofz8Jy2VHwyK6rrUbjKftL3PRXS8wF6vY8xPNjNRnBzJvnTHDfPZvMGq9xMQJV",
  "key34": "2nSgihEj1CwRq6GiQaWL5rt3etoxxR1DrT627t9GNYsPodvJ1pUd1KZGUC6fdh22VNEbZrSRxZ4Qhy8n9oZvyxSP",
  "key35": "4UHf2psrUbbMoWWJcZexqd4naHY44H4HFdF6kpeiVNr4KpdHjQgQJYSuPCPeN6RpF5Y8pgGTJs3NpJVPyKUkQtAA",
  "key36": "4nHGRzy8heET6pLcBGDNSci81cv58CCsoHDzgwA3uAbcnrdN4XtQFDTV6o4LhSGoTkMmWDTPLKu5gdqT5sNzVdim",
  "key37": "5EdUUYNScR3LLt3d9rfgDhQCpzWCHEyLBBwa1Smt35z1hEFTxJrCnBkTZQJ1mkUVSu3gaRXn8Lk3PFkzp1bJQCvo",
  "key38": "5Cw5xAtaZhordzm9fgiWwHHhrSAb3rLzWfmsUnYHudksTPVGGDaTU4kM9uUHFDF1tpMgonpxP5BPHjHAZxd5hEnD",
  "key39": "2WgYPpzrbuyyz7eyFjCUsi2gv1tAkjsFrW9z4vZUxwVb64gqScEuR2TAFtBbKTeWCvgfghyjiLLozLyMs1xTdRCN",
  "key40": "RvoCZKxNfXdegqCZMfwP8qW3o7WT4ixmU7EdZ3hZwpMFyGa2ajBsb1UEp3yKEsUJZF4T6J4azgXuNUme9R2vxHp",
  "key41": "2h8geR7GDtS3emjKMcTU6xJEqaxbmhZVY51cVENPYZLxeFUVQFFR1rV5UPsZ5YwAgCS5mrA1hQSATQdh1WSernEv",
  "key42": "5T67Yy6WNtKkgkCD3nXHCpxVAPvTkJtGPVG6SHTnr5NP5D6Tz6ExsDYhxfJnB6ofxuRmejRwWatWtfvAzpENG4uz",
  "key43": "4EbAAwCYXQodMYTgDQKz6P1oxjvGJkqxx2czxtHoBDXr5dBNqVggeWwLKjsZfdfS73YCnvx3ySGgdxLmM86KoCXk",
  "key44": "4tYgYtiEKEApvFmKP5d7HEJrgp1kJ76awSahvh1toMWqJn5S1ofDNHbQEoybazQMixvo6HgCmYQUYTbEpt8VH1AL",
  "key45": "2PxvMS838UqGqPLYmDJdVPzVJc8nJKn35vH5vXSaNBfb7HDgJAfKarsKHUcderhPxwHvdNk4DHKPT5bKMafZiAKe",
  "key46": "QfjJDdVziqpVrY6aTX51ZYwdsaafMjQEkStJuUmrTh6zwPgRMAVoh7BVsZj45W1KuBo57uEqRgSE9U32UEKkKHN",
  "key47": "3K7imUaJCf8eWks86A8GFaAJv2yvHRmKbb8XnyHwJU8YGEGp7Vd3NybdjY5in7Ds8tmujVnyL9AL3X2wyZ9oWA53"
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
