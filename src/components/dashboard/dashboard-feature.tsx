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
    "qUPmaakVYLkYpExLKrmc1XK6A6bHFY5b2yGgvNLB4p16jkoeYrRQLU1tnzdERrejjnAvHpViMcRCCtW4rP2cxTU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3DZRSwyA4vXBAJkYMQ6GAVAhJfk6AgihJXwCiBytviRwdnLs423vva5zcT9jtDTmBMbpPA4EMk1oYM637rWvxT6p",
  "key1": "pXswsiRqKmAczbfd2cpZeq2u8aGKUTYAW2Pf93oGUqS3RFso1uDLdLwd5PbMVLZsswczvKHNVznVNAKKiagMXBQ",
  "key2": "22W1r2SyDo5Ns9qAXLXrKeXCAkEFhRAfyGKhM7vJgx4J8Jtmmn9TgEqjKeCKEbs84DxQjgsHX2AidtTgqBHdgwqE",
  "key3": "3wYLscc88Lw43XW3vDHxn5c5oeHmmPCiJK4QXbYyDaoBr2t98Z4H7MBBxsgpcLCZgNQ6dU9afXRaokmk2xPMxxVW",
  "key4": "57MgxtVn94dGJt6owDD8y59fwa79KTRnPZ16SbaBZHpDhFQX2ULv6hSVjSvNQCVxd7DPFTgqg5YBB9onXQ8ZbYJh",
  "key5": "2Futyx12gJnmutWeesMHPtKXKFiR3Zhw9WGsnGeE17E3pSiPJT2Zp3Rx3GLVam87S3pJ1qkDYZNYCyYHjF6AQaV5",
  "key6": "5yhPd3gdyesLbifmyEyMwRgPVUbbfvRA4GYmJ5YTsdkHzC2Gr2ro9zRWWNFPkDn6vDciuzPeYbDEmJG7M86y7m5K",
  "key7": "352VPxG5KrogF6ciBbJ8jGiJwzLBz8US4KZqWZgrLFkvUaDcvyj8sENcWmuHT2tg9oMjWC7eQqxonv1q9NBQHPph",
  "key8": "5wnCsCcv6TNFRXh92BqeBHqdQJXtc4Dc2vV9bfUHpnkyjD4FNCn4YDwcXZMBcUCAtt1g8UrM5PsvjDCTHBYQX3PM",
  "key9": "5PCJGBZLJnDruywuHRpds76Qf5FdQJ5yMFHZoLcsDjVKNQbWFKnampEDaP8Hm7EE6P9xsCHxq7xay4AkkyriYqbg",
  "key10": "vTQ4BrMAzpWUHgcg4xFn4HSd8mMr4UyfwBi2oB9Df4pzvSv34uHRpzuJCsod18aeSxPu2biyFj6SUXJtsTR8AQ7",
  "key11": "2vnpGVkETvfvbqxvPdQjggG1kbhf8ehneyGFUT6RKByQtK13DbdAPBS6ddxCWRzJHhiJuBjZVc1i82kQTugoDHQj",
  "key12": "3vayNn6oNwixFT59hjV9GpzmcwDFmPcPvadTEugtA5CfPWYfGjN9W3U6R1XmPZeGssRraEVrHRMk2j4fURN5w7bE",
  "key13": "3kM2rRui6eQ3Zy4Cm8DjxLroJAXZWY8AketRkDdvhkx9DbZfh8Q7s336SLUGAoz4ELnpLwmMo99tbVWRZqvWtVJK",
  "key14": "5cuMf9AdTrJWG27xEKPgTajSBPPP3oqDCMK5VRw7Cci4KMHr1Rv6BPyDKfzZkVXDaDDdRcyRd54hsCn3ejZAKNux",
  "key15": "5zfRHcTEKscH1F9gvgdLd72GammnLVFeLxZ6Sey1C3ixpsZjGhp1C949KKwkCMNNvfFB4vbTyWwBjQDguV3nzuM1",
  "key16": "4WUEWzPZ6uhgYgqsD9sdSHbfUan9tdxJUW3uu2s2vPX7BKw9xXy9S459GYAjFovPg42LugGGhC6SPbEiaxYU1pru",
  "key17": "4wpTucDyKUe8NAafQrH87vSYsUJJy8YcQhqnrH1sNx124dia7AxY7pY5FqcccgcEtSCRHhHu2CAbXJte1kUSnHFB",
  "key18": "2UcowN61MG1kM4zNCMMWWwB4Bv7RThmeQfqgLKEqk3GYuJQELub1NwdnmJsnh7Ru6ZF2wj9ZQuXSdA3oFaLyPrbY",
  "key19": "2GYZxRRwjbVYex2DBgsGPVFEFmtP5KVg3VdLgT87haWCZN8HLn3oXJSS4yEx4U5yh8ECqWju7oBXqDfwuoJdPWdP",
  "key20": "4fCLRunqdURm8EUWsjafv1BybZmWD5PACojztZtR9baQgGpmWa7Mkp2vVAYhZwK57bMg4fqP5ZXFQubhAvxpc7gX",
  "key21": "Wb41rsoZttXaNeUbQV2sXhxo24evABmh2r8BUQH7qAGMin2YNMsTzAihpojp3o3x6LCSR6bsk4v3VtpsmPMRkso",
  "key22": "3Ze361Cj4CZZFhMevNx2FgW5XFyNqCa39BZM6QByYNB1tD2JAVNvqBM6rYFks75MSyoec8vuExP2bZGCg2BDLzZw",
  "key23": "3u72JpkvpUrXpUCq7f5DP2CehMV3GcqDgRKRWYgLYiG2GASxgDZGAetTztFHeF1K1tE1zTeZtW51KHfTXBfq98yE",
  "key24": "34pAAX4TEgjCWNVr1coCSLdFokJKQ9uKStbUArGRC3Veg6tJxKmFSY8KwfTUGCgYrvzWNQCoAeqTvmMAX2xjCN76",
  "key25": "619SZJpuDUkt2GdfEZnWkxNoLxR7xmKNfyXzrXZgVkUd59Eip8NDYuvCDW9w6BkRFw8KS4QqbEk9KX9XBxT5tau7",
  "key26": "51f39iENAonL2SJDttD3RFuuhXwH6EdetGhi5veKBkZ2vUmyz7NhzeqNVRcNXMGuLSdSe2QdsAwisL3Tpozkv3Li",
  "key27": "2gYsSA7WsHUtCJK2xuTfEJWDsaisq3uBLHD9LzDGiuiDdvFnm5EG5hhpoQNxeARguuMSky69z8fnSYvFCpMRxsCG",
  "key28": "5Uod6WecJVuEu8RY1fSGqfsghwofCNTF31sj1e9g17ty7muttQS2m63ZudDAtgbuei7j34JVif8DoThVm5Am1nCZ",
  "key29": "38U3bXpBfwKJHtMB5byCvbjKQ8HJgrTr9qLfxkyg9qJhdLEnSxUMGyjjLEmhUVvxncGEa6kEWuDbeGefqsKjn8kW",
  "key30": "4XwgTsm4ECMcFf98BrjSn5iqxBk5i9DvrBnFmLAjHs3EptqtvDHsfxwWFmgqSLYVgb3oQRaT2NaMPgTLdovrwy2J",
  "key31": "2pWoqjNZaL3x6FfxZYT7HJZ5RNJ6XBMPBXdXzDszcEYKtQLibAeEqNkNHPZLueHw5tkF5KDt2Vvbe3jDbHxHm3FV",
  "key32": "39WG9fxmQvZFMwkoVZpZqubF3unNwr1Nk92FnGzAs4MjUQHeWuqa5jbtpogabFVqVEYGiyKvQ1vhazT9HZhvtMJU",
  "key33": "BiwHz5JK1ZDSviSwRB5zcWFHgcmKERdHPWcFNwFr1SjF9sKnG9jeo6GXeuuvPvkWzHS3Gn7Y5sY5DP98FXDxDDR",
  "key34": "5pi3ZRM9EFuX5pQTfXytELa1gKh9LsAYiscdPQSxiR4zGSrYWbeEzkmZgd2VJERBAu2GuF6ipd8rwcuF2PXgnao1",
  "key35": "3odac2wPgz1Vyk64LNCnA51dkhY1Qr9VSybRjSua37oBCuKSMeoUFiuJ1XdntMz6UquRZekrKejBnMpEMX2oD1b5",
  "key36": "2vkmJoRtGwggwEFok5vZqHZ5nWhPUoZqk3PmiPzsJ5QRqfqbXu4eRQYnLN599DH2TvRSDqHMAmaAkuEArBMkbJuo",
  "key37": "3nFsC8EVWoc6yTwkxZtcNgi2tH7CzB2BSVUPNfPV8JsAkmrkyUugrWdVdMnSv6Mi3G3eztGSuALNwvMe1KwMccKA",
  "key38": "3YS62hpQwNkW8HFmGRSJRN71xvuX1uaj8nDvVG9LZLDq9B6Tsku2kdUBYepaBU2pj7RAMsukWfP5QKft6krdeubH",
  "key39": "4R63Fb3Aa8KRXYhG4QcwajZvzYZLAwXrqgZxXDsT1xbH8MrkvLr88wL3UTmo7KZbauz4ch3A1pocxrFcAVM1RnxE",
  "key40": "4ncMxcLhQNKUBYZy3wo7LdJRHmzBr4YofiYjkdueFTiQz4ySc3q89L1cysYiT2m21i1TBEELA33TAWEXRMjTEwUd",
  "key41": "4TdKtRdtq6DnYn3jRJpcVjPSgMN43gBprTfERZELe3CVuWMiX8obuGTAfkDoF4PGDrZ6TM47MpoWCaMxVg38Un9z",
  "key42": "2Ks872y5SeirUV3z4UkHvqGzRwriz8QCceLUT57zsxRR2SAATiraUR8kGfbBYK38PMPJFvPWMfMTZMS7XdfcvWph",
  "key43": "LPFTd6hFHmLGrEUDuzME5L9B5s3gbvf5A7QFV9j2jUXZd1isEcn9CuiDEhobRN6691616YsUXvYycjTToj4GEMH",
  "key44": "3WsFRRP2Dy8KKQqALeD4z1wnRnpZKRBsh65ncht9DYnALuVr6wuMqWdSCk6LLGiQ9hvHJU6ZQLu29BUHXSJQeVmZ",
  "key45": "38q3WFfFPBpg3PgUUK96zWYRcxmR4peCkJroNSLfFm8GEkYvSsAqedVjxzASW8nTSfT5HUFg8iPyrZfELTjXaL5r",
  "key46": "5a3qh8RrCWALkrCj59Xr5PNFN5FmbJcwozBwhxd1ixy7X9V67QRJY6aoQEPdCfXVhhdMNNU29yRcU2rLr8nafQpc"
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
