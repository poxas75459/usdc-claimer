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
    "4U3Nti91hv1zJxcSjmFojYnR3y258RoF2smpt5QrrqSPVwGLWxMx6p8gX6dCjHwLT6NyjKMPAzj9ee8LC4s2W7EF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DHwMFFdbTcLz5nuYMDv2m461cChHjcmawWfPWRT57cG19m4RfdnG5TZkPqueADnrdEv6VD1sRxsPC9CWEgxHwJw",
  "key1": "5FHtn573AeDFG5uyRuXEeuu7REpC4XWzJgecKt7R6XkrkNzqaNAuyUTBc8xJ1noPcMhoHHsmi1WRGFm9DZriG73a",
  "key2": "4tWyPqKynEeSeEt4pWuWFCEqpgukzjLwWKh9neS6c2aMMekhjkqAsfSExfYuAgB7Zx5JjobWSc74ERJeNLMsYJ8T",
  "key3": "SxbvDoJimps8wJvfaG2MGdWySbtJfroxzgJpbYeK6nNNUFSPDtLsAtYdJXzdNTG7wY4isui32FUuvVbXV9Z3iwY",
  "key4": "4t2hEuajAENVBDMouzoSZoZrUm7YFZAcdXSEAuRfGHyo182VHCFqcASQ2YAUgZUBYkKgk28yDoADTgWY5RtCTprW",
  "key5": "2ydKSFUCF1ndoDwFmw93pY3v9YEdZ7HoiYwe2EvbkArBphuV9YdfQp2CNUv26siNvwrDJXxLULBamLNbmx7Tc7Ho",
  "key6": "5FzWJZyNeHcjnNeoYoUYzqpBTtampDwEk675YgtUaDnfGYouBaQKLyNb4NgLdLKjSeUpssRdBrrKPBjfghnM5Z9J",
  "key7": "53rAsNQ4r6uZwkHfDXTqa8J6uaAena7raBGaZywM6vTZ5RSAXAGF9VKC65g75Bpp27YGvKZtVGsiBbPhneJcWVJt",
  "key8": "2vVMjuHpD496ve7zAgTtQxkXyq1uhbKb35UUwn1nLP3rVs1cxhpU4cUDhJFjioD6ajwuBDPzT2DqyME4aiQ4Y5nR",
  "key9": "66XFxL5J2EZk9Jn3KiuVyQfR5JwX4X7aKCyDJUkKF5U9Trd3TpPvq9aDti67sG9ZauEbkdLmsuggwHg6MHD3kumV",
  "key10": "5b2s85565y91KE3wyaQ3RRrNqijT11vAw242AoyeV6FAQCxN6ZZexKnoe8kMkWDHQMAMs3eaSZQ5eh9iLSjGqQKw",
  "key11": "5jXRLACT5aMTtNPJ2UrKvvWLb7oKRhq54m1USZKx4jQ6WjQfCrpsaWcNVDLX6c9d7F9Wd6mH8Sfyc3x3CA7jP6Rt",
  "key12": "3AegwnDmbwhV8LBq9CJG1a4GvgimQrmWwNnbK8NcyWSS5NeY1rbDSP5X33Q45xKnvfKsfJgVBKyroGY91pMEHwyv",
  "key13": "5m8k1tFFNNtrSWSDpKPQvfnBj95LbvdH24qtFG4eb22QCZ822L7Wrqj6ovsUTwfim6Puv4K3VZAThyCnD8TPabti",
  "key14": "3HpnVZgAAwbxHoG8UKT1qWJ3E8xf84ZyJHdjKts8u5ynvextoG3NryiwpAVvioGaieiDYcnnDJ2Juz1hANUjKYWF",
  "key15": "4GeoVjAmRiKRonZPSQsMtahq9Fb5Fyhfxa45c5UB5gX46naMx1QtbxEFay5rhLES5M9n28UPKNst6W6szVxx14Sg",
  "key16": "YviM6dJyc7jPXzfdJsPVZq9SvFJ2Guun5NQfrtvyMg6i3RvDaMW3ykH4jy3updQXVPS2sfCGGF1Sf3zodT8iqw1",
  "key17": "3YzAKuGc7vqmFfxEErfdbK5oCYEmg9ZAGBsN3SpcspwH4bc1meJRa6h5FjRPswkpMgkNmVvpP7ttHQXCcTpr7onp",
  "key18": "ZLMv2uHeRZMP8qSNoGbBLdoDikDKigzQaxHpddHQjsJyZgDXBFZzSVmQkQ8BQfz6AvnpnL7foMB4RMqeLJicAdS",
  "key19": "35so4ijMCePP91LBVoja8N7HofAd5N9FMzhgnnNTx6bhc1tU7cGgZthdM1ohYPF4oiQZKYSx4C3MhaPEJqY58hPS",
  "key20": "2dMrkjkqMVRfM8jMLmH59tWhA1zTvrfW4u66KY5p8C4NHK8TQnpoSuinuqAyv6WMiDMTnTJA5epKfWE7kkU2czr4",
  "key21": "52mwTHEFgLyjkfY5CR7jyxLBGHt2raiT7xvfF3YSVYvqaxF33uxvi6dk3hagG3UuNxhqS3DgekGZ4iKBRnQbVJrp",
  "key22": "w54R32nnteVE9iKgDiHnrrPzsLXanMAbwFezzg9QwCDW4krSJoYv1WPgmZpuXFi9y3jHnSdrGwWvpq6Vukqks2H",
  "key23": "ZopnuPUTn52WoTVyuobvTtmyMywLiwzPmfCNw2eYAwZNSU4oR2GYN7nyX15sgXAAn28ke3DyjNajboXk9K6tv3x",
  "key24": "VKrHjKNEaVhcaEgVS9iUmLS5ijXsVa2zWth8FChEuvLEh31UmMs124ejuihNNEpqirNMQ7NguepVLCYS2Ni53Ru",
  "key25": "4avgBdqiPQQaiiyLy6Z8vZa277fij5BNRbNicW4FnVJmsQFs6LGNf7jBWBGnNkq84mBHwC6o2e3P3KA5qBTgAgFx",
  "key26": "61AUkjRbmJLBHfAQEGQQW1mgjeaSjyeAhg78CmN7jE4i2D4dwxk8Bhpms4e7aR9D2Cr9NutwHyMwuG7LxQMRHbmX",
  "key27": "JnCXtRL7in364BbVyMTXHmkh38PVpM6CdJPxBDr7AHMFz7C5KZdSPwV2ZzMrCGNuzYWMnX39BFuQdXiWcNUC3Df",
  "key28": "5Cc2Ea79DBKgdw7N5t8RdcfdBLhxXi2pafdWRwcXdmYqq5syhwvjC5eQq1S3fnYrj1rnJvLjU4p2RznpBCA9z6Cg",
  "key29": "53htPTXq8WG3zPcWJvtzQzLxfsEQMvZRBTW1CQXhMfaZVdLTovDq3qh2mqtNikfeW1h4QHSK3MXxV1R16mqv7kax",
  "key30": "3nfHfh3Zf7WFThvUj8Z7ciEqWDPt1pTYCqBoLGKoFLqTWYsvWfrXHv5UzzPspUkhuSwAajC8Hse1anMDruNeF4ZH",
  "key31": "sRmnbVMRSeKVtx9UznxziD9f9xfTKFEiLeDRRkJTXUGRihj9t7SH9p6Rn9NgrWqkUuQrsESna7df6svPDGcTSYp",
  "key32": "2cNdsrkgi8ABsPvT3bGq58MdzeGaWcFjjJkLvbZpvpfYu4ECtv172MPi6ER72n16zfFCMPpFxxhAK95gFLrZvvYu",
  "key33": "4kwDLC5Sk63jegtTZDAYUuNe8hXBHN8Joh8ARjteE4RZhYvFJSHR93n7N6Q5G6QBkFrkh65KtJJeZAzHwTdf9WPd",
  "key34": "3R85MYg7UqFf1fEytJVYfaCTxaELGoEY37HQwAhkWr5H8CFVYEvXuNARfU6gzLv5c17PJGQntfryoHEfU1G4EiAn",
  "key35": "2ikPN2KHjPSEVbjLuJxCpiUtfwFJk4fEfvttrHRcFqvSPrzHJstVf52gjtGfjaFEoYXJ61R6bY5bRSHtCvZA6G7F",
  "key36": "5vEdXms1pLrUP5333UCjrveuooZnwv8h1oiQ5KfJRUmwRbwFbZAjeYLsiKDsfX6Fg87FMBn6bEwCf8SDJCoQ6MEd",
  "key37": "5oxVNRgYdkKh4hYdNRXdN9CPhPermx2pyxs1E1zq3VkNMsrPDcSGgUfRNrY9PP73NtwWcc7nPxx8cRKyfXXNStru",
  "key38": "DNQjnFrYmXFWTu3GgSwxnxiWuox5Tmm1WDAX65AKzhbtzYwGAAy2zJn6LNgHrioVQY7EGHRyoB7SWGxf5BNHC5F",
  "key39": "KJsYRUcZXqVfe1XxUorL5Ns5BCFzqy626gocgyHDrCRrug55xeasG78fLSWEWDNmM787YCAAcNx9Qcujgt2i6dc",
  "key40": "5rR4ZhNEdRkYzAimsWAEcNVwNt7BjKuRgg3keYVnQ5GQYFaj85kV29qc1iWNrNEDc6SnP3Aexh8hY2hJmG1GiR9z",
  "key41": "4oMyNNHqfKeSiRBWzuhiSXvqwzXrBk3BkuskQTrkLUqsDKNXso4EyNtv2gUot7RSqRubUcEkW8bHjjkiG7uMo454",
  "key42": "2YrD4oQkujfrwxaLe4xU5FG9DzpiDSiYDm6fn2wGgfd1AESRXApNKYBoMe1XrwXfbqnjS3kwntkgzft9cwJSmgQu",
  "key43": "5xTTH7XvzWihkoKyRHZG5bm4m6xqhwH1aVUQ8fQdguy4ar89nC9sQ5BMK5UxrU47LtJz1mZb5xcDadwMQhroEDnY",
  "key44": "2JGuQR1p6x7TewNRooGyQgvaAktYmXXN9pQf482P1swV1koDr67kjyLBPDzFjvC28acvpsTz7YH11BnAbHh2NH1k",
  "key45": "JMLz4wXofXyJpRpAm7TJmAm7HCzHvDBE9BLppttxtZfbTpvaMJXg8FKE77AQoWmhuuWBBzG2WRfeeoDEncPRwNy",
  "key46": "3WJToYsP3cNMf8sQJXcL2U65h6Fux1mbBeBkYX7UKVUkCGngBZYM2HFVN5yLi3rLhpic5smwKpDHa1MsqpP4okKz"
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
