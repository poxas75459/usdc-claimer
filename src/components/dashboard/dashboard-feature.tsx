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
    "Tnp9c7UTL6qs52UBuoZGaVsLb3wiso7naKGSXiEXKcif6MSnwLSp7HsAbbzk2whzwfcRHYYcfaoGz3rdbYbGpeG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xVrF1tzYdmoXUG8ydJtdfhn9HhPiGJ1gxJ3uox3DDfXPBhpDxC4fkhEsyGM7fAE5conQhpm4i3pvUWz7AsmE2AP",
  "key1": "44jPZReAeKK3H4jPZqmUYyvEQPsbMc7hXDoKYb7FEBrLdUNM6rccEVxhJQ4Lq4zkYQuz2ssNdN1ftVKjNEud3Ei2",
  "key2": "fk8PEMVbZqU1fYgi3eU435X1sYTNxMmSYpkAv8rVkzSYiGcvaPWss7GZJy19dSMVbye6SGwqz92soT22juTJhFp",
  "key3": "3friavBtCesWfiozxx4wXoDt59Mf6UCg9PvPNTXH1x8gD1KSkaXriCiJb4vq9ta3Fn8WcNyYeLRseoTThsijCBVG",
  "key4": "4BYQ77JYhaw3vweNM4SdGS8eTZt7UfF8TRrxRxJeuANsQeKt2mz13ExHA2P8954ghM96RTUoj6pnuHUVsumftpjr",
  "key5": "39Yxt7oS61egsYpvwGzychSnDJQVkCusaMmUaNhGqRdnKm9596TjyUybg5zH4wNJE89nLtB5jLtyxBXbN6hjNQ2o",
  "key6": "2Dx9cqfuF1ntCPbgJGfZ5yt2ByJmAxoJ692YHex6Et4rYDWs2H4NvnDkTmGQNUDJ5d75XLG6ohtFQiQ5khMT3m77",
  "key7": "44jeA9cEeLuVN9DFkXZqyL57F2qW4PWYX4P5A61S9ioRDMiFYqDNj3wy6JtYno1i5KsXzHQdFxQ57NKNo2XG6Q3s",
  "key8": "3Ucwy9EAgKcKopr7ir817yNUfmFVGJhmTuUiExAxji6Ck31mAemamd2zrwM5MQva4pniRmKni2DxGrfA42NgMg4W",
  "key9": "2hwPWxZwLpxJ7EnSdkAxt6UZXLiwqf4Jmcvf7yJeZ9c1hGztk3AfVYLo91b8Lmbh88VNyXDkqQEJPau1iH8jARFB",
  "key10": "1RacjZM16bHrguMc9tKQZcBWufjX8fUASWHonzS9XBG7Xrs5SE8ibJqBD83MGhmQGhTxRJEUGam2UL56SENV7ja",
  "key11": "3z7jyETtEUHiPwQ2YxYx7rHZcNFJhrhCU7Bv4S2ydkx4z3WyxCuvgNEx7AL4NjzQkAj8iUeUibacyDiDHDFZpKbU",
  "key12": "4pw2iEMWxeaSVzLByABgwHXRhySds5KN9UWeWiVoppL8LZ3q87cMS85j5R5Qmnb4Qe5PzcsQzPvfHckupr8BC8n7",
  "key13": "51KWobwRfAJNzosY479AAMVfkWWvMU2fBtMN7WLV7YWzzAYsAhatWm2iXuBBBoQ2XtvCuCRvFwB6rbd7uErWgRMJ",
  "key14": "2rPMo1W9BiMxq91GtDHkz5Qww59i56vtPgNsjoay1kUVzu5dbcjoTFoFUqmF6NCygkwVGPunXUyXCUj4BuT9f6gp",
  "key15": "4nGqSPvoqVLuG7f8oWkiMweAWq1tuPUcm44hpEUcPtr1nCkb8RJdH94jNKAj6DRsHX3RFkXP7XWcT1yh9BkX6DLx",
  "key16": "JcGFhbknjpoctPRsfbvoS6CpTUX5bNPMBmfg33iq1f1tPZ9UY9TgUWPqsMUf7KV2MtnVxnMpzCsAELqRKrShAAf",
  "key17": "4rpEK9SAzFoFR4DCYBcrVNCJb5kbsUzYcQC2B1DKYwhMfUkhKt3kXbz1DiVXqvTRb4iGcxBEuKH5W4cPMwo6ehTn",
  "key18": "51GTCsQjQCC2cbnTERivASiFDCYoQ8tYoooXiQRueU5zCSLnMo7fPEJfQ2vmBZHMEBqkeyFPEatntWnzdA2zdyJv",
  "key19": "2kwmpqV8jaKLaz7YyGohmEAohMXEHdYtmTGnzn6odarEpNUy3eAnGkiL8VfSibZ9p3STh91g6em9sNVFUjjPA92i",
  "key20": "3zVWnYJuF2UvuqhG5FxJXijqqw4dopHay2PcSSNXL8SLJsvZrK9DbTWZFp4ATBkcAEKxWN4M5GMTy5exXTet6y27",
  "key21": "2Ajg7uwcmYRzN84mtiEcBHF7dCWbVwdJGqLCVoKzxVB6mUhLAXyLKsm53pshdxNMTUSqqpHK3VXTkxTikSr6neEP",
  "key22": "4EibDAisbn65q2aCcLRaWn3R8GF6amVCcfziKtGnsweegn9mbiDs5ETAEvBUT4HUxNYs3htEruYZqKayBkTEDi5L",
  "key23": "4gGCGFK3LJD2rjGdpzYZkfjuLdFsXp4w7RdFit8xdvcdWAm1aQr1w8taatfwoHZsoM4pk14bMnJDNTL3ZDvEXnCT",
  "key24": "268Q4bT2HTTE3wB2NrUAAUPPXRxJcLQQw1TBJtD232L7YjWeNQHYHn61Fzk2jMPYW62EX1TY15WzR6N5AqTkhsMe",
  "key25": "5aBJUyHxKQb6i212PWjE6u1tVKii63yvayTEQt4v8orwDoUPzbRRBh85j1NFxYbXzEY3NxLaUDhggPXkEBMFAMfo",
  "key26": "5a6VQJZ9NCxNDUoUTPAdouHMbE8kFcyDDSxP2FdMPJVivVdtcajiJT8KqwH6gs4fj5RLHHpwZ1pTf8c2LQjK4Km5",
  "key27": "4pn15AzB7KamrkkzMBbFBN2kDc8nRAMfNiovT4SEW4C6EvHfkPKSA9eaFpN9t12YEGKhdvPUQHGYuqQiXfyHUcE",
  "key28": "5z3H5HmHvUCd7tgwL7WBM5Z17VT6kbMbQ6YGB9ucKjg6N8MiS3BKia425wGPoE7PM3H3uwRy3UYCxLJDSvYzQ9P4",
  "key29": "3kmHxckbxkEtakN2DcGyoB41KvxrwVsahuaHB5Fq7kz4cRthyxAt7fHktaorc5zG9BMtVgYRDFC55wjLApvw5D41",
  "key30": "3qFggcngkSyckVAXen74kVDeVgCvNCw8eh5LBnmwnSqePvMR2HN9ZbcAySVaoGM2YttRhtwtvzdv4iCUzdpW28Mu",
  "key31": "5cdv6DGcQynkXVz2LmaZaSCYFfeGqjhPXn6DqfcqiRp5ac1rpWaYGpVo5YtPbX7TRa2y6g2yB4AsMqexjFBGXSJy",
  "key32": "3BewJAZFwfNj3HrgiS2b7EpEWpgbCNUq4Y2hvNf3VUezqDNf5qv3ai7LND3cVwta9YHL5i62d22Yeie9jp9pAKtK",
  "key33": "52qAZbScnVkeyM5ZomoHeJe9Vh5GBc9xT6hMtXBFdCXyZoyqwYvhaTyWerenVfVjWPSKPjxPJUbEfC2kn2Pb1ujC",
  "key34": "5FoL1cwhk9DuGX2bTZjJeUxxj8MvBM5fALJ7wLzUvGXjzwzFQUPhdLzkNh2MsKSeBNJNdVthUAoMEaaXctgezxXv",
  "key35": "4giMbTMPF8gPjEsYb46my32DTbD4xzXY3uutCasjWizutoTY5SXCjzPqvXP6gVMyaHG9cpa4m5TXD6j4GqnJvejq",
  "key36": "4yVngJMAyeTAkKLWmLbzt688JwVtj4XKeFG3P3FtktkVWwErHFbpmkBRL5pPfusdDkgrki5toXBcKAaNPwGLJzUr",
  "key37": "uqaf2S7fXWPvhSchM38GmG5UCxDCFiYoWaaxucKMaBYpp9zpbtYjipEpUYqDF5ReJsAzFTYi5xRTsk4bL7aHECe"
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
