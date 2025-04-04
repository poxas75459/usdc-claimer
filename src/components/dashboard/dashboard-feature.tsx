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
    "2nteMfUQx8M8LmeyBjAw5Z5yWAd8VTxUnkmb15is3JgQKvnSp8qkHoq36VKJmmaJNhqCqoe6VEhdcXAuh6mztNHC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4E2Rzh3q5FLUAhi6i5L6GY6gkQALRcZysXCKTq79YtKH51GhD74VAH5MbtPoVK9HZNinHAnG84MQdG4vfWGqHeWQ",
  "key1": "5jMM7SPVSCBb55H28mZFnvcMpP7SnF32h8GuYRK6AhGCreF11Eutv4Z2MRe4J6d1xLSYMa78mciDsn4DCESzsybG",
  "key2": "4aBjr2H3rqbZkofTPGUJuuregbw4oKDa2Dat2xEQgj7EdXX9Jn5awEQgkjbgDynY6rtgH5yPsnvL7oeTy2HDXc1c",
  "key3": "vf7U4Uoi7P1QRQ4fT7HqkiTKkGUiXb9CNT7HQRe8AUVtNAQBcjA2R3FuK34JnX3kiG4NWXEQxiHyKovrma3pGiY",
  "key4": "4beJfhnqMD53zvHcfN8xhgDzDkJpwQTSesX8LT73ZsDkh2hyVFwX6HMS3HizLbZvSDFGE4bijyWsmqK6expdVMvh",
  "key5": "e7ZTDNiM6eF4t8RXZduCumbcmdvjTqqhyr6EJt3g3Kf2Ma4u2cKznSTGnVxJpQGaRheJ26aB57Yx8MKfjqRLn9D",
  "key6": "49tiwCGm7LE8W3RjNHvuoetDDgnMWMAyPkZVmh5snuBdRAW5nN6jKXPK5bPc3P9kqGJYLL9YTAEhGEBuSYEgtvJ9",
  "key7": "2vh8kpS2nJyNqKrWpzMFkHPVyu8mWN5k2PDmFNxBKdEZxocdPLxVBGnG2HhC2wXSVtAtMdW6eSwYhiGtWigeSqFu",
  "key8": "3GoAmYFrUyGQVq2TjKQpok5KAKym1oagUy8qCSCf7LrcQW8ZteZGgM4EoBcVPcRp65AppVsUXz5HmRPHSbuHkRDE",
  "key9": "2gv7iPSRD1BHfx6C65AeDX472gnth7ZuR8znydLwc91eytev1JAdsf91rR2bVXKpBGswNxGcscrrW9uioWFQGajB",
  "key10": "2vY4M4n2aeMMrjPtPxTCnWv8son4VeDdrT7zxkCez9NvUJHuBQ8v7hBi324fFGR1tNjnY4ZtG3jTSaq7nKkRCnKD",
  "key11": "2gc3abQzvQf15inoqCsi3Sr15nhm3H69zArJdwEyvE1DxBfhmKXbyy35tMDRqFvVp81o1e5h71i9bUARhxwAXvnH",
  "key12": "4F5YikYWQAmepamYfEcLE3ebcdRkdxgZc6Yz4wfSMgEx6qj65hxquunm2NF6dKZNQ8wf8dBVTbRUsh7fks2XBZw1",
  "key13": "5nD2nY3nzpC8eGk1XDznrLP37Ffur3KacKt46tiSPtsTr5pGkaXBQKJYAq76dvC9ivwPbFEdFNWAVAod9Rvgnqqp",
  "key14": "5QLzb69TtMxr1zGJGjnzeueg97YcVuAw7YHaxpzJ1SXHQkCbtCT5EBoChGW2mfkvaxryRuoG9KEBGbBwWwJnZzz5",
  "key15": "UMRWjCvCZjV8za3pmxY6nrwzqz3PPS2k72vFneNabLDtc49fKTF2KNizM2nDkErw8stVhMLXEeD7X9hi3QfRkDD",
  "key16": "49DcWgEXAqNyd7q3yYcvKcZ1VbLAqyRsrzb38FkZJFatM1sSKYgo1DSy4jSCi47uA3fjy7gkVQYx5S4PEf5NTojM",
  "key17": "3iwi9p91N2hwjVHZ8pynU8AtqTXUUGzjrUuJZ8UnXyYRu9m93zXDq9fviikaCUKt5oMuEcAV6eB1k4mEH4pr9NuK",
  "key18": "2M8RrJXmZfa9VSCvt1fcW6f6SXCJGffin2mjKPuKCNYcLKMShR8ZsTaorsLp9MMRusZWGKGE4ghNdZ71kJPjEDnc",
  "key19": "8D3gREe8ej1HMjhxuXx7fg7pxxDFT1PVdzNS4vXMjTNjtXjhqAqw8YjUfkFBuzLiQ33BjgSL9PSzaaGqVCkoXic",
  "key20": "euNyWpVRbNixvwdbkLb1yGvHkHZ7YrejPRN2ERJUyk7funGR8U9w2StGeNrhA6DJig9vg4x7h54pd6Ty3oL2su6",
  "key21": "MesKvA95TvAYYGf2pCnwvLPTbcKc5VbBnFpvcpaF6QLymsbtUAQ7zs7kr1jj7jCSSBZkai5v86oBf8bKb8aZWr7",
  "key22": "2oEHRJtkHLHsP3KSL9s6YaoM5t64BeNHcPbPT33WGbADURj3ErSqt3JLK2AGNqZUpmS2zoUzvSBX2hEgyXMBVhVK",
  "key23": "2Ns8qaGXCui2Xc2gDazvbrKVq8qbkXNodiaBF8yTo6KwqWLyjwTi96Fgpf9pd84XjPndvpe8gZbE56dJ6BDkLtCt",
  "key24": "3jHDmgZnVaq84hgvQPq69LJ1XsBJq5sGkyniZH8DySnsFj1GeRUQR3vC1wUJAi6vdUSkPsB2espgfZTeaWTygGb6",
  "key25": "2PheKG45hLyU8KFipX4DzQ3MyrwPjpGmwBi9Rrm3BpUTUtEkDBNk4BN8AbXpkdz6xJ43YoQLRiGNpWBTFTUMpaim",
  "key26": "3tDRZTWJizebdFozuCdAnB7Cap79Maryb83DCNCk3ArK3JCa2AxsTD3zy6QZTR9WJQWhynVPHHABGmfQA8CAS6jW",
  "key27": "3mArHPvhmzeqR1xQ8cWYC1w3k4DgmSWoyjAj1sP34cCj5iVgK1RYx3rzUBqS3e2k7sYvVPkMx6rEWVTsoPgBfVXh",
  "key28": "4wBQswX38h6ifQSF9Vke2D1EBAS5vXMRnEZTWQt24hDoZEaq9SoaLgAYk9mw9MuhWLrwYUJD43wdYz7jNHRmPAEX",
  "key29": "3zRXKx4nzy4WkGKoUgwL19uNYgQFBp1114mmNTLggzUWRurBy71FFkyZXPkrdK1193fWxuG4ZHYwycdaabi3MRTN",
  "key30": "51dMSWTt3yvoGbH9KbudB1hpQPz6fL9yMkXgqCska6e1GmqX5BunCvWziKzNKvTfSwLh1UMGoKLqSqKZRvTRNUaq",
  "key31": "5FzU3FLX2RX2Ga4AeWRErTRBZ8QiqC6CpZFYUYSmKzm7wHHpE2jnAbczwEZ2XRJDGcmKGu7M6315rzHPqsZ8oBj7",
  "key32": "5zHTC3XxxZDvmGLnaZZuVq5CeyagptpVHJh2p3XZGr2RfoBpVVJ2C6fcw3v2QWwkPY2mjoR1riQaREBGUSFjuKc1",
  "key33": "3yuyZgPPwKtLVScdab8jae8rpq84JD9vFC2XYM1bDQxK2F4TH6Vd3ZjmWosSLdZfrMcYJ43BZKVLnD5ifvLiyVSR",
  "key34": "2XhWq5SQ5XRaQFAXruDSV4ivtfJzTAUiLtviEc1t7W7LDc4bMKzPBztHq8CaogJ9Dtm6gdyFufAeJLD1JSEhQvLu",
  "key35": "26KH5vX9ssG31hCNDcEBiqSQKYV8LvKywcE8ZA93nZc3Vu6kuLNbZgebnWzTiRMhVyfdsZYJqQrocJTUwfSWzN3b",
  "key36": "GEEF1bPfaBwL5AuueaFDT5rz12uDQw2hsAu2cZcscyFRcbHqstEynTn7xQuW2eyD6bk6qSdXaa8Rz3N67ZFG3Mk",
  "key37": "ujcEi9eu94ELEtLC2encUKSEiNUmjMe9UfxqfCgA8QGdQykGn6YFqWAsK6vsBnFDbZnQc7uNnKsoibXAxiR5mP8",
  "key38": "4teU4amfz9YWgMkzttezJEPdAsekMhmaY6DdbtAq91MEw8jHfcvbxwacTLZUedX9Qt48wfW7nrmw9xfSN7WcQQYP"
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
