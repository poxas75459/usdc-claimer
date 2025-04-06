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
    "R7ZV8LgSEQbsQoWUw4EMe5hEmdKaqCYSNPwLacTAr9DYZ8bUfFVgFp37s42zn1F9BuLb19yQmbMNSZJh6Sf9yU9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MKtVryvmVBbU6YrHGFJkxVDcPsngagpGdy1QMgQhy6t7JeQc44vwrzYRZHVq1CM59zZKZUGLqcMEG9PRa2wC2Zo",
  "key1": "2PLTQEyrsSQ6jwnUWLFbTCBMBobUGi8fmBNms6JQUjVKP5XsaxKzSoRsxruGrRPANnXuZYb6UVcfoKPdwCRkH8xq",
  "key2": "4N1T9AzHi96uguiFY8tJsYkYJeajyJtNi6dEXtyWPMmLCimFg34XxJ8NooKnipBwSWP5AyuqDN3LQuKhYWPTsVaQ",
  "key3": "nyi4sWciEWVTjNPRFw1oJ73iMbzRn17RCbY86ya5rqQt2vVGGVRR2FKe2pqP8k3BcSrFCjjwUP26viR64YcWbVm",
  "key4": "4ai84Hc9sjesHSUpJoiqWC9u5uWejJGZ65jZpnc8Y5eXtZz7GmF9qvVzXhSYeTPEFgrevN17afnnF5fR1jCYawf9",
  "key5": "59hpHaxmyrSLyfXkizffUffdqhocY4tQaWhZ1AdhboqMLp5NCxJ6Zy7GornCt2WqnxPFNXY6B42PgVWtQ8HGo2PG",
  "key6": "66MStJxEwwye61ZppCbBTKrwKThJmdVF61sbrXb9fZhvEqAx4Qqx9ZS6GNcCCpoEppeW4JV4Fa5nZqikKssNgkkZ",
  "key7": "5qAazgmG4rjuytkxnV3E8MzqmLxKQC3Ma8VhFvYx4ZcWfpG1FWreHMdTdj9RRM1zypEnr2Ek5PyjEuMKQAcJH1ch",
  "key8": "2xtHqwgUHeyjLWqVe72jHvKaBaAyAjhYZTkstg4QbPRwUHzpRgweNUp3QB6MTy4phcN7TzctnQL5SRLNEQVCgD59",
  "key9": "2b3T2E71RskHbZtjaEXozANw78UDsapD4XR4UdpTCcTMskFvSUWQ3GBq6XYduY4JuJfMTWEqt8pf3Lb8doKgtJzZ",
  "key10": "5u55TUfhCSzgRx1AeG4uEbwBxztoWmW1vkdFL7xqfuRsChbBBJXc8GThUK2okbzt5S5QQDPpTL826kZTb8ggoSPi",
  "key11": "2M1XYCgxZQPUt7hXCFCPrGmQT91BwwaBHBt7XDq4vZTRe8PDFmJrQo1pmjw9TMx8djNYjtaY9YgLBaVX9KBTgRvj",
  "key12": "xndH1BZ5axpcuiM8utLsqrE5nANNu27dSspXmGsJUR9W8AaqYf5H7NPUufnzamwADSJwNc8p9MZpQiMTyAxWjkM",
  "key13": "3cPh2ia2GwCH8LEnbczd1zpiedxVVC2iqKLcG3KPowJDJFrfwAEUFhowXf9JWFfqTh7Ek3A1UCi4qEGdgwTstLsa",
  "key14": "4Ty24p8KwsuNuB2NUa7GJQ5W6JzA1CSWXYFp3BU8iD8Hz9P4Gw6tNa2NugLYiDtwWfJwvQGnqj5jrEnydbTkWn83",
  "key15": "wvGRADoaqwfDKfKR41N3bwrgud3cYdnsFvnwYi4UZaACqrKChGh5MeB8M5vgBDp869A3d54a7erAZrvZgHvFs9i",
  "key16": "4uiurQtAPuTF48TTC7UbLj6NDtk9pGNCbH1neyrYnPp3udX6uN9sKv2jkLBCpBHBt3zHNaUJ9YyyS52EZypMfPyX",
  "key17": "gtD19mCA2bVdgvjDSXf6bUoJPhvybifbE83uDQUX43Jng4tnRW6ZLKhXNJKMbqNEpqu85Ymp8Ws1X3k5rLugmTR",
  "key18": "519ksy1WDs8ng139CdpCnikujkreMZuU21YE2Ei8uWoPhUfwCaQsBEiSUu6CYsgNV48PHMmcJ9SqB4ZGitTk6H3M",
  "key19": "27LK5WxXHUkwqC9C897bw6caLDyHC1zBJFvjBKfWcYXT11v99bPQgtYGgSQrkbHuYUJzt926qeHtA9QBXZkMDDeQ",
  "key20": "4is93PkFTeaHQfEsd2c2xf2BLr5F6GBJsQ53U1VNtc2aBzkADi8yZ8rwe6hH4W67nVVDfy8jgrJtjN82oMT4ArXa",
  "key21": "3tfrBNCHQh3a719GDkBhrNBNPFp3hx7WMK73YRekUsyjtCLARTYjUFDbsE3ZWujSHChxQpcPqSVS5prV36c5U35o",
  "key22": "5zSNvNKxrvfy5QRtXymV6xpprWV4X4mACcDPHMsYL2jYzZaGC72LCJA5TwwVcvrz5kBhEPH3mjREKykYsa56LDGF",
  "key23": "4xC9u2FC9Y6WsK7QVkifHnZLmX4jbbptzR2xDZyNktAJ5bXP2cGeqiYEMpqNcox5apAqbGW5dBHWGAaSdqCfhGpc",
  "key24": "4KrHwrTCpQ6h4uFHSzjj5eURg75XoPtEQvgJpDDnhNfWTCo266SS6jq5LCqM3eEJohjqXCtvAJW7Qr2bPktttnij",
  "key25": "5AM2FWiC58RohgcRPxEcqHcwd3mNFQCNzhjrWuu8KG3S6vrQN7B4ZkZEcPQaFGQJSmhx43EvosY7mK8kmEQf7DAg",
  "key26": "4N8BR7FMHBvCpN6S2usNci3TDU1GXggASFTctmzWxQAXU3ST84bqvpxVXVG85qPrwHXNiy7inErbUfkWiFuajLJf",
  "key27": "2wrymsuqzdnGCvfAcvLRKFCDCCN672ZS4Yd6VxWbuSbefBcML5n2EEoz6tg6VXSyosMoTCrbJzVrBUbX6QvXibCu",
  "key28": "2yCYjFAC9W6XWJUeGYSpqjeGiDPZdXRbrBFZMLrZskNSSfCDJz5BYhRhshjy4jM5q8VcCGtz6qU92KBJpuSm9pRu",
  "key29": "2y8gDx5qLDnuZu8MLBc2QzYE6gohyUFEA3cyZLX49GYTZDsiPrndixKZQi2LKjB6Ykp3BaNNaw5NPvNB2tRiERuW",
  "key30": "2mjRXfEb3pHPDkVxHQMNnK1TMKCG1EvFoLGvqzZEo4wGg9MssCBqr5BmrKfXVXNd5z9zxFzNhCrRBsEZbXYPkbL1",
  "key31": "39pUi4WAYcV5kYeTVGxQyQZVhCPRPq3qHWPegrckAdqfm8REZAAo3CdBgW3Q5RSxdjXjYZib4RWCYzDWwgLvt5e1",
  "key32": "5fY7Zd1CZjMJ7vdCALMZ4PBhUY4hmN7SiHZWDEHZAqcHkg9pFDuJJLtoFxzUVSdzYyy9TPrMD4r4Tz4KsekWLZzC",
  "key33": "Vuty9DXDcqxiWNKaMN5gdgwyzDpYduFcbLQD857Vu9oL5jiZhQDonUx9qxkFvUBLeMnG92QKS9s2AxCGG8ktAKx",
  "key34": "2GSXNMvbWLvMRW4HzrJyS3N3sHtKqXiLjmso66XXGEpHtfWKBNaRwRcADzv3uArBotpxbK7fkBDP1jV9gJgLRo72",
  "key35": "2whsFBPEHYWMfzButxYSmgkkmjtCsBxsfe2BWQvcKXanvk7dRENv6BeT1DNS8HcrUxkdHiiKYEsLBNX65he1rZCK",
  "key36": "5TogMB6Ri6PAX7fMWmiDbSVwVZnuaavLvpFpQAcWa6irQCJU2DLtxDb6Pegq7eWkijg2r2fSr7i2y2Vnwx61jhwe",
  "key37": "xHGQ6rKNtjSnr49FYv3abyrqRGEzmgBGJpQR9jUKsmved8G173Y3uhc8rSsDyewVYKY8XTe7dPzgTLvK4RC1WB9"
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
