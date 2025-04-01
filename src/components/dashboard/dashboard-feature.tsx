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
    "5prwrSWzzLZy66nzeQr2dSEvvmnwAvJrtzXGTxoPG8HpE8LQrMm4d13WM5igFQ9bYiwKaYGHbfMtR7EBSw4mceFX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sF49TCxyifEGDx8t7n8T5JBQqVYmRVLuFLUft49MXSN9X62wXnxeWYEkCTZanY8qGN6GL48Xh7mFsCCDSGxMcMR",
  "key1": "61Gu59CMZ9xT83MPbSEsT3Fbc9kMxR6YfoVtitmUKuq4M4shrmAWqF5bpSRDpQZZ4ay4MuZEomVyiJBsJHnEWEhN",
  "key2": "2z4JqNu5eJyrc1pfT1755iF7PKhdCkGtAfCPApycc3SXtkM45e8UyeQ4jre82ephBhUH4C5VTiGht7o3QcHTbVv1",
  "key3": "AZj42ksQw43wzRQUkBVUf3uGvdryAKdG9pYSuLW77VzNmrJJtRKq8QBH4316BeTMhAjumWpVJYRjujKpYh6hEqf",
  "key4": "Wd5ZqtowX7Mvw4uUxRB1PzX4q95PFCBPj1ZCzxVNzbBJazSD7R5r3pnJvaoFo5N9sUpDSxTMnC7A3DczV9fqWre",
  "key5": "qgeK55d8EcJEGoYZUQjjh7htPo7CoXHMSjz7yUN7TwbW6XZrvFxAy5iuo2V9gYh73VFAoE8EBSQ5YJF6UgtrQWS",
  "key6": "4h2MRvhB4G8RAzp5rEdeMKedTtXfwFmQNLSVLK4k2C4W6KD1gBtKxNRzTMD1pgSw6jgQSK71TwLeZBFyc1aKXTpL",
  "key7": "241x4ykMedk62n7KxyYZurPCm7Qx5PxHCxf7VHRAKwT3WW18uSdiFJSPM4D8uqDV52SsmvfGfrPsoz5Vi6H8LPLb",
  "key8": "3hkwt8DMRhmNN5xLLsKwr9kMHmHDWob3rTLA9CqpJ7DTnTvPnTid2Awnzp96YiFC3eTJEbgd6TtdVuZr77PKdbBV",
  "key9": "5eG2kvfjbcDKRLofzKAi5T9fWKpBLg8ztyQhDgTC1qjVP93wysaQrNsk2x5B4UV4xCPA366rFVghuGLTvfsVhuzy",
  "key10": "5VW6kCrfXaDHnAtR3PRLJm9ZtjzeKiwZG57ZAvwLUeT8hNrpfhochEnMBXLYq9gTgiqHyn2RrV9zs15KFJbsqE8y",
  "key11": "3fu2qFPeQ3vqyYUR9r8WoN8MvPVCw3uJEJW2ydaDANSjQAZPuUGUvDPaa7pg1qzLJXxqMnYTwjgvUP1BvXYSo2aP",
  "key12": "4Gj2UbHeFozAA2knSqnPB1qchvmsrtzNqvUtk4ntEY4iNyhSNS4ZLHqP7gXm9BrcGYbeYY6bVDecoe2r2ZREZpA",
  "key13": "MpbYpajmpVxdoVCY4xRXPcSYHiLBetBe75JWf5wB3NFkj1pjg8GBwjySxz6ANLRN5sk6D5EGJjSoYpowq1PSTcM",
  "key14": "2N6sEidZ7jPJ9vEWx4v31PiN7cLLQM5JkjqdzXAoz8BaqxQ146264DR37F6kKGy74ZYFr7y9ca6MWk4MfooEYTkf",
  "key15": "12iNCyDpcpfHn7qZSB8eoJLBd2LvtY311HKfkkJJYYBbFghMAsc6LmkbYY6ppEqFkSPcC35zVTjRbzMGdMB7VkZ",
  "key16": "3j3Fr74i11XBBz4WzMnbDCi4bmQSnrhP6vTYtBUk95JE1nkSJRijzgjcLDUkEZyvsGGiuiEVf81A7Q42LaHKRGnM",
  "key17": "4J5momWNPv6Jz4VpmsfhC3oVsPb2SrNTPQfn3AnNHrxQAhexsHs2xdppP6ycun4qKc5tY81DE7XwuSEvQ6y8QGns",
  "key18": "JZeVHLefbF3V7jVnRgBdyNCNuBbDDpRwtHA1VnEC8zCKLrSwMxpZdSzaPAK3nWgVnuDXSQGb5KdM4rP8ucbxtZ4",
  "key19": "5hhFgkotUXGProxuyvWZHmLMdCqyF7EamAJoXFBA3NZzw4omwVuunuqcd51MmR1SuWnaHWZkdBkmi5nu1Sr5NopR",
  "key20": "8yKm4HNDKQiVm2n2NhdAjJmsEWKJX6gvHstQAFTMEbvgJYVyM1JFomUGbL2SVoZKSwoLsspG5xVoHea3wWaWiEz",
  "key21": "5PY7GLjGy9spSxU3iDqmWdU5RKVCmMQFesKtqhr993uvHb7YTbVpeQjuYJr1NbsiC1tcA2GaBFHb57RhVeC6WEs1",
  "key22": "2zbNXdxghr7W5Tk2mAJo7bqmuqPjwchTBvqRWUdEMw8463cJ5FzTFhkNLC6mF5Lr8dHvVT6vcQZAmGGj73xnJtKk",
  "key23": "5dTbGtCvVgryzkxRdthAp2ntMgtvtWn2VNmij72wAXbiRHxbDdeorDghNKq1gNSNKvXCwn3e5wMk9peBDk54V7wg",
  "key24": "5e32Pae36wsYUbhwHBcnJrvLvQbPk3xTzjRVYT3WmM5nJjckc4KvyfhZ7MHJPtzk9mw4jQq5bw6WNUEm7Qi2RFQT",
  "key25": "2JikFE4cAgWL6pmi2uHTgxcVCrbL5XAnWTF2gb62YzdJoDAQxyVBHDra2kBqvVHhkiRxnx6x63wHVz4pvZxwSAZu",
  "key26": "3zvg7pNkcp68rDBzRmBqgZ1FxhoqTK1x5VjRL3p2Y8wU4CgcbymrBG5FxaMoR87Ao6HW1qirazJBYHvhncYZ5s6K",
  "key27": "fZtXdGABRDFrv1P4x2zfT941saNdfH9SBAvvUKiS4AAAMbF2bZtYAz4W7XK1nBRcYBGHrWVjMfREHfk3M4swYFf",
  "key28": "31S1BRtadkBiMhVcW2rDF66rRDfjsBD5aMCZQWSy7eP9Aib4MPcTuhqtjzvdXFgrKFDtn9WzHmXMeixezj8FPjKq",
  "key29": "4GHEhyzxKaMRe1nLUoycWW3XCDM2xbG6nuGuobryaAuBR3TiLqaFaNNhe6hhn72kvthcPkbJ3GUFeqr92UEn6XGJ",
  "key30": "52Sbo5yCVD7oURwLvEwHxDWr1hAYjyfheceWMQS4pHcpvkmubMg2o6zhcqQwk8vRY1A1V8dpQtkKBJ9UPdPSk1ke",
  "key31": "2fbjZpS764PvNhTt9h9PnkeCnrAHsHQxUxDbhTNh574KfVxbXCxTmrxCzeNXoytZE3YeJ1VqLiRNKAgAWds8Nbk1",
  "key32": "3LoctyQLjt5ouZxreY1mCb5No4n4AyypeA6aXgBMMK6HfFAR64zFJHurtkME7BXiLGJ4Lic93F4f3VFcmvhfHSkA",
  "key33": "555iWTU9hkKt2N7R2s1wDyBLWV23qfTCPqFcfRPQ1KkiKyTexvWgzvFenD1wAUix1vvXQzF7mXkpU8DeG35AZ8Cw",
  "key34": "XDyEwaAo5gDfH99gSverqGHm9iod8ftpb2M1ZV55XpKRnQCU8in5FZeK2DM59nAgPY5s5XZ3V5BgB8rP71YAqJ7",
  "key35": "2y8oNkKbAytciXvLPJwKnPRPBNPSkgjbD1mryLKMGwCoayDq23aVU41LhHnaWzFRjYjWSSgUH1bgnNH7LtMzwG3K",
  "key36": "23UYhsboT3Wyw6GkHREpzbNqTFTBNT7Nnop2x8csMambrQ8RVX7omJJd5vy7tG6WZarFFYV5rfJXscwfr6C3orab",
  "key37": "25q7aNjzEGfe91mBbPGrspKG7CpYDfVFQ4QpRwoYMs4PRJBQEBA5sCkTYFTamZAddV6PkoBSwK4xsAKffQ7Cyrc8",
  "key38": "28qYVsw9iQytGCPxBuskYZ61zNr4Gf6jabcnEhNphLvrSWpftS4jugGoCRPEt7MeePmGbPJmhqv5yy1xyuigvKZN",
  "key39": "3iKkrdkmUuQpj24Bf1ihT1EkqLpEaPiXq48Hb1AKzsnXKatJFQYwQXZvyreiadoDw8XhK5WmvnVCyJdgDdbn3tDq",
  "key40": "5VZfoQNLJ8i1KAd6ab4Movmve5ZyQf8bgWvtW9pV4vMu5SBUUPZYUYxaJP1dCK6Rr6KNehJfHmKRhj1p9BkQpmLw",
  "key41": "2u2XVjLZnM1zZsZ8sG8kT3M9qwss8LHjH3yRK7oaMRkEymP156uighwLMDt1NUnqeNVN2ZqVMUk8Ub9dkL21UNX3"
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
