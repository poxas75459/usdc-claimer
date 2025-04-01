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
    "4oV6ZHCnSnYiAowGYbuwVsbNASn4xs7ViLWEzirDrLKNxs334rZwkFBuXozqEK292yxekWAojpj13LMi9kgJYxKz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t2U1gsVpqmXus1jsEMz6nabvXHJHBZATfY5UrKNyYvunVYYSv7o6AGfs54mFYZjDRaXpmKVDFUXR438rWD2CQuU",
  "key1": "3bNZWLZDPscv479Y76ptTF6monbUuj2mX68q5E9NHnvaPFUxdXxZ154PS3GBumgr7Gvgkk8BtQSsdgdZwqiUb1zA",
  "key2": "2LATW3LSfq9G4GptquUr1yCAdBxgqErKFrAJFnL27ZrpGYV6vULxke4bpytn2ya1ihPCtVGWykq9RqpQKCfZCmpM",
  "key3": "3TUrXaZuGfdzvLHSvnMQ6Jp92WU7P2wUYjjpy6iWmgoTPtiGWbZ5L7SEho5JpLJZy3cYCA4t3ZPnuyDjjy1WVz6j",
  "key4": "4ZZa2w5AXAEAXnFBQrTJZPGPLnLaH2t8LuasU2dM6MhPVKpVKSzEXiPS6XseVCVhJd4Vbx8tzE42RTfz976WotvW",
  "key5": "64MuxcfvE3tgzPuJ9n9YdnQ5jW2RJ4yV3TwWFxHRgUqY1umBADXc3BHWGMjDNwagUR4pUaZX4ie96pf5WWP2cS7H",
  "key6": "xJPFYrLNhZiYiTTVrtsFuZ9Nzr55FXU9CMpZAmucG9UvpyRLS1DuEn4BuS26DjY4TmUjNhirREMREuEgr4YSHrd",
  "key7": "3zQQCnrVeaYdW1oozbYKoQLQBWxa868js4zcReh6fDsU6yCZFMaySkZ73yU6KNknVtLZRPQmMNgfaaR3v56hbvmQ",
  "key8": "5rVshn5PohD6U2bRtwgVo2y56QiBGi28w6srKbKPezag2EiQ2Np1nsuViCtFSaHSjEhMq8XvsW8ypRGF2xYV5oqj",
  "key9": "5LyKUXmnWMoGBFy1XaLeWBZJokn3B7u2XaRKJB2ttW4BKtgHVA1snbh1Krvg2Sj4CviwjmqtwU5YWFBkgsxzGkw1",
  "key10": "3PHvyHKXoohk7bchMXX8kvkKwQZXQyqbsqLDdF3T5WwYpuWwgSuXK8k3d8aa86Q4aKqriUgggC3Howi37AUeFubZ",
  "key11": "3tHQhKM8EegJsaJwgExgzAUYKSYMbAgQ9mQpAxuvYEqTmwy6oU4SJCx3JJdAWqAdUd5rmNmdh3JdDN3zXmTMaQZV",
  "key12": "4SZG5mGrSfpDXttwxXMpQAHeKgUHPath1wZGEbazhnTLVRkHFi9rdHJqGqo8yG7W6faW7v5UHTJorbjpv3HEzuWG",
  "key13": "5fD5RtefkA42kRiWNnLfd3tX3bVAmMJuSzARr13Y4aTCqYippFUqx5zPn4sNY2p6H5BfL3iPj3YJKH4aRiT48QuF",
  "key14": "3g5D39d252uqdL1tqSsv6Af8Lbgj9JXvRWZM5bW4uNUJ3hFmTkEkGLbYMh21xZWuUNTKCNfntsQQHnRr92yceBhZ",
  "key15": "1GuAmMmMdBJ661jA3gWGWMSXJMfNrWp3B68G4kieQRxruVhEoHpQRv9X38AzWp4ncyKJhybbBGHYD8C6dd5aCgk",
  "key16": "9YzkjDFuHJ3WMvCQ2Fi1BbSaUgM3dhLVrQYmt7VaW7RF9gwPxBJbBCHiQ6e6QnbgZ9QkQWjFrYY8bhgSysS3raY",
  "key17": "5j9wGZmJtKT6kA65UPiLvDvMtnenNakmqXnukcLVNnQhuSMqUEr5MkvXGLnBRCYD3XzdJFnPHUB246QRGzM2JidJ",
  "key18": "5uDJBFmpbUznJXuSxjE6q2DDYopca1VCYAC9Wc7w4dop5vCTvHovTNzzp5SQh9oPUERnZbsVviPtqwtSjUT3p8CD",
  "key19": "5sXERnFEw2Ux1mDXNgQ7sdNyYkcuu7dJ2YLRL327Z8N3D89qSCcwQD8J8oqpUBreRaznGRdjPXkZWmRes3o1WyVN",
  "key20": "3ue7vyjCAq7MaB69eu742EgP2c72bi7b11PJr3TCo6ruKNxeiJWWyvL9QshZRVZkruwM1dLV2Hc3LDvbJ5CK5d6d",
  "key21": "5WA2YN5Bi8DLpJk9b6UnUt8z2egTHTr5hRhYFBazthUTi1qvvpyi4pfZvjoQKFP4imKFeyezYjqKEs4pGG48PdKp",
  "key22": "3qYqRgYpUePTqdK9Z5JQR2Qx13fxZmruWhGVeWTWRCDEdzcxfSBybXnbiGJDpJbzu52VQZK6v9tx4oVQp4pQ9NMU",
  "key23": "3kHzPuShKXJXh1shUHMZjnVG7TUv9hAsRCEJn9oAdQ95y83Q4hiphCB4oEvKqrW3NKzytqo6xyzCB11J86sbCD5c",
  "key24": "4GFTzJxsyyeFC16fi8ps1hai65CXpT6VAUjeH6qBDVDj8QjY5gYYoKMBKg19jMdTSxpy55YC3DZUhQ4hvdFvJcA1",
  "key25": "2nLfLv53CeZ5DW6DwjakgungomTQWKYPP7FzwsTQ1tKH9X6ShkhZXJ53QfUAcGzZqRYJQLWPoPjwcCAsMj5sPTMy",
  "key26": "mdx6Y5feaKJHc87WBFDkTXiMFM48MLV9caz7dgaaRxMNKQk7J9b3ude9Xj2vRZFogbpYgBg7vv6qS9XV5iHcRoJ",
  "key27": "3F2tg6J25K2FiKxovfnrMM9VEL5wsB455bsP5GDuxVh8DtRmxMZR11W2z6tJ19CUhv2k1TQPfRPxfAxAaeuArmyp",
  "key28": "3nwGk7gfedpSgApQh81oURZ2h5apEhA4imuAXHfNdqa6u5mzGGua27FgV5FYTnT6TdSD7yRWK7qqtxaFzRu1kUeE",
  "key29": "5Q1dfWdWWSns6jRSv5AAXM3UsdFoYKGr1GF2zLSpyuFTBJ4fGP1139Tv7cSob4kidedPJTNokCiRAnTNQthVLbmm",
  "key30": "34jU3h1QteNpgy1PtA47wJTBjWNZfxFS3aPXVB9sjjt7u1B74rjdLijcmoSyjnDk8cd4t8vZWoU1238qZjJU5ibq",
  "key31": "3zbxdpbsirooGEt4seZQ6NZVmr4ti6Q75JGPFLnLKYgEjcqATiN8rAqVCPDfQLVtTVaYL7e2BYBo9uYArbL5WT33",
  "key32": "2QEjSguTDTmUEw62T7RBZbLfYVZ7ie7qajDRcR74pkD1igaCSoUpgNmLPuVd8sVikrtyF3zMHTdUaheGBGojrfxg",
  "key33": "65SfzMLb4bd6QE7CBKnmr4UEqyWVrXuEnGHfTCA9heZYUCGn7iksDzoR5pUtUT7smcNBanz5PtipDBPigN1xCrh3",
  "key34": "3J9JcGsoQ3u7sTKxPhQP2kSUbEfhBFrT1KpbbF3Fw1HPkjdSwEaXH1VpBmF3wx1PAQe9agLixrcL3C8mzKuDy15y",
  "key35": "ZtcqW22kFz5St3NHyy7XnJ7DXo3HWeBoZhZZDqg1opgaqK3V58PzcHbBi9CUu6d9QUs1igjBNLyvg5uDLAuoXYZ",
  "key36": "4kLipPn8BDhUHV86sgdypih11kDykikuRAqUJRrnWe6a3ACJjp5izVxD5swzsq9MRu8pNsKFRismquez5edafPhA",
  "key37": "CaJWDtR8RWqEVGHZjyVBFXB1E2PzTGpzVsju8YKbYHxSWSiVE9uxsYMECwVhijjq4UniEha1ZT6BmXV5oGmU7h5",
  "key38": "53CFsyr9Cv7tNf7A5ZH4AE4Yzj4QZMVe3pGLde7d7z9aVVYZJZJDJDe7GMpWbXkMt6LeHHuabsFm6HGxn4FPDoCp",
  "key39": "3cdMgzgV8jd3utz92UScs1NK6b8R4bvCH79Xqn46v3d9oGfxWsVS3jtMWaQ2pouhXWeGgE9wB5biypqVdPP9WvaZ",
  "key40": "3NSxy5dtLxSRN7njDEAyFi5uson9XVHrUJC2CYT2mpdMzq3SoJEfzLLLQDJ1RzjniEn4QScMJL37ejaxK39oqALd",
  "key41": "pufPomtLiyrfvqbQp71Kk8DqufVzRACEwckLzbiQGfVgeWEo2wPcAMQ8L9mQ9QAGXudFema1mH5RSGVpzRARnYM"
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
