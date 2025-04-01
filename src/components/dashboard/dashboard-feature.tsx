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
    "51CKrzuQXDf9QapnKUEAzfWfZ47PGC1yB48x6kZUyqww6vqfbfRbUFyS2wVjBTCcFb1eJ6UvVk2c51XK4XUNkhaH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LRC6iizUszQKtYi4aio7nz2qJm4DWprcy5etauy3PnFc9a85vHnkcraz2ZnxQepiaBCRMW8UN4kahNJYRC6cE41",
  "key1": "4X1qfU6qCz7Hn3U2HT4Z82vJ5RRaPYEZZHCk8bcK2M47BsdfWC4kKhyUHqF4pGbCsyV6pH41YLHDwhZP5k6ajHJF",
  "key2": "r8hbWjJsLVEpQvvzfsw5N3KpuD8kN7BayTKdUUPmq3kkStNZ3RYqMzVRCJXqW2G5nyAsMyttUufMGwYUWQrV6Uv",
  "key3": "mRSLkf3xDidbESnToCJ3igW3sKWFZ6aBD1cM7PYwasFQbX3BRx8LL65WDV7JJXJTV2R7cK2ofw7QP9mzjJv2tWx",
  "key4": "46wjNDedxFMiH8U5hYqBZ7BG7GtRENGtLbZPnzSK1DKMvFfQCE3kRZgw7gwL1KHemQEbpraKYrsdMvMk6WBcDzc1",
  "key5": "2NDX2GFsCEXARwtsthMxPwp5PkaBzquJNxMDaCnv36UTQvA3gTMm1S7ri3GTwAX4WRq1B4zCL2RgaesHLwZh9LtE",
  "key6": "5pvLcNzqrkAQ9hfZabahZZJRw6DShrBqsoYH4VwBqXiaTrBnUNZnYNWF3Zb5zwjHsTRSEMgrghL5CwWEz5Rrmqzr",
  "key7": "xXfMxEVSmKAZc7PDiAgQKFAd5vwqAGYAyLNQdV5Ln3h8JsgPxZnpD7Zu6rexD6BSZg79TnHsuUSLJJdyzfEGXuo",
  "key8": "61WmX818GFy7cZ1W41zcUY5wsxD21pmd43vfdZMjNb52iReUjDNiWrvL5TNQEQaT4hGB9K4RG84hXp8E862Lf4Ck",
  "key9": "2W2ZVd1bPegzF2wyy5Zw7gsxFbAPGVSosRsurLHYv81qNoA5hBpcM6spai1hQoLChK6RVREBvj7nFFEfyS62umXG",
  "key10": "29qG9gZzJ1eATQGwLhiDxx4sU68pheH17Z8Sk8xG3WNNbKkJXB81QCP1TAUUxbw6R3MBDF4JG6tN4JY9H6iWAMCS",
  "key11": "2LN2GUhTyrPdx2NCwojFN61bs6WLhsi9K3brcxxnv6UmGmn8tJS7y1FokkoQ2GXeDFZr8kzavUWA4K1TEZDimvrC",
  "key12": "23XJdyC8FuVwnZ8cj7BcWewCpsa37KCconjQDiCywNWt7QZoGxGEMFgvFakqVwEkSkBDkRx6CnFNCEqspXXDG2Vg",
  "key13": "cj4LZ6nLzvk9bdPSnrVF23MzzJ3wxyc4Agjb9dwuiK9PUX86gpy7UxQM2QMBG3vVBW6J8Bx31DLPcFS1HBj5aG6",
  "key14": "5D4mKsm6NGdY1aR1FphEa9WBBcQA9gmonLSTJs6LNLdMjMLR7CLBdJaafqso491PDmyiML6Gt2yqsu8yAYf8jT9e",
  "key15": "3UTQAMAg2ryfx4J6WeDrUq88dC4T6D5KL7JX2kV9sa58MByAFGFE2EJoB6QrEeq1VLZwhxj69x1Mdrvy1qpAjyho",
  "key16": "3H4mksHwX1vhFZmQbSz4c4kvJiC1WG8LnorKD1LU18zmpC1kCjZzk7wGxyL8w4Se5Cji26hqqNHKJvx9Ftmtc7BN",
  "key17": "39gr5gbFiGdcPqamC36E8bXgucD76et53oUE5SH7VNcf6gkRrkRRU3Lg1R6k1y9ortk8FTLStLXwggg3X8yT76p1",
  "key18": "3zzmx3bEF1s5yWHeQdPYceLXPVMteRjpnavPHXKKVd142kDSFofrMAVRZRDZUpZnJsxviLhWf23n2xnjDDJnaggH",
  "key19": "5BfB5soK7gqBWkSbxmCeCn41W6fkBDk5ohaB4nCMKxkAW8fZCD1DkdcaW3FTuVFY8wR742F3QjKFSR83DYpxBMH",
  "key20": "4gVM1tQzneq4QGaAAie5jCiLTXUSTVNXw2s24372KZ5vFZJGQ4PcKpF1equQw6QFRhzsLhYqLDWb9oA2yzjbMbUD",
  "key21": "3xwRkxJkgXmKMTaa4TGU2sbZgYGBFpd2TRYB3Wd2yuNvAsbfTw1LRSDiqFCzHYZ9PtwrtzX2eVmh468TorR8iCcL",
  "key22": "4WqBfxoBA6SwVZWPoPhAbVg7SShWomGe4jKoqPf6jLU6GNpWPpxwNzzWa1iJJw1mQgR6DHF3FAfME9djvr7xRF4y",
  "key23": "Csmxkh2GJoCYrkrwRK7DCnbufbMJ6K8AoK9n1dGfD6f3ayAuWkc8eJJ8u1oLhZu66y5GYTX9DHwUq6Fzi8K4eHw",
  "key24": "4QxW5cwGXbA4zgLp5CbmqLknKBfm1dN4NJERTsgLnwCLwsVpM92A2eABVogyNyrdPgD47QDwzLPeCBGJaaYLzdBN",
  "key25": "5jAmEMqwwxKhudT8sXxQ8JNigFSKuL7X4McHmi8yhu2wXhQ46V5SmQwjmqw2dFncMRodx17sTopJD4mT72FuxqBv",
  "key26": "AAcFNtPiSxN98H29wNNVa8dvFizraykWqvH7x2Vd6ZGar1KVrB4E9fcwkfjDUHScyYh21LwmBnEhRmHNbKHeE7N",
  "key27": "3r6vgxqg8Xxy1FZYjcY7YzmVnVN1nxswi8yK5WAudvN5RbCsPgkRH72JZPwxRdFsBviVAwosQ1cmGTErogiDcZrV",
  "key28": "4otW1VzUuEFRaCQwmvR25PEAS4mhEsLeECwTeMvbg4kvZXUYyG2edGkhscvssHx82CRisv6rdZLr64GRTZs7jnap",
  "key29": "gJ4fBgnHwcgsdQWQ3u7TvLXoU2HSk5k81XH9jKoTBBn5iGUYKcyba6Z87gxpaoUdeRaLTc4NVFoKMBxZiwVvi7M",
  "key30": "3s3x8rDqwiuZWRV8fPwMua71PVxtEGNpdCq8FZW1f6wr4Tu3AEZpr493viVZF7YieQuGLkbLTzDBQJCP3jrUwPsM",
  "key31": "2zKBk1YBf5zMVDd4eYaK69ssvysogT77QvYdi3CLS3QLMLjzAWNX1PRAdUeF521uvxp6P5Wbyf8emoqJAdvqxWC7",
  "key32": "2h512dVXWgaaS2jq3D2E2vLm1HAYcCjgtYzfk6TbhMqsyR9AkqheGeVKDWs9BHuFnWX3NGWGadGjo6htWaFhWeM4",
  "key33": "3BTrSwz6xrV9Hx5dawVBzps6ixiVNbprdBbY8bLcTS6tA6Sy3j2SsxteXduTKF2EmvXCgd9r8CEeNygLVshhNyan",
  "key34": "2AqTqpUTneGK2Lh574VZATbwq2Gb4M9Zr6ikzSiQipB9i2CQLPKmbxZY9CqPzbbUn33CsYFPv343oxju1eEFtdtv",
  "key35": "51Ycn8sZKCpBNmKNm9puw7NmPkAubrLr5vTHgEXhJtBzHWuG9V99TmsdLoanzwPydVnTuCUw8WMssJneHNrXTVgp",
  "key36": "Wy2LLeifz5LxRkSTNB4Us16fhHy2AgU8bfqsmQVcAdDQWcmReUMebbrAVbuAoD38ySx7Ss5hezKHyPgKiYJXsDZ",
  "key37": "5v2n2AQWEEuWziv7U28Kn2ULoyxBYSZ36hFdygwNTSFm6RDKWL5VZK4q3vyxsWANNUTocixZDKHiuUHsuaapgxT3",
  "key38": "61hoYFSbhxKBPf963YW6kvZ38cwSS1jSDcULb3E17CEtUPkh466GudbuRHywbHHswZWwrxmXTcWNSt7nhCb6MEmy",
  "key39": "43eTBe2MpKdBBjNzfSMUSJt7jDToLMKqrYCKnu26oX2ih6jJpK5pLg45A3XmYkwFHFhByLqtew8kUZsrVP9HgMkL",
  "key40": "CaF6edrPN79ssP3hb2PmRUGSEAxqBPHo2ae2BRwtGNN9sjJtC9LzYGx9aGinnQnAyLPuo2ybkGk4fxUSAS1v5Fd",
  "key41": "4o4yAnxDtfXrDqvfBKRfNhFEaXLHJqmNUHoXyVUvGxKYwx9BnYnFFAGUu18DGbX7w3Htn96zbP5WCB8L6VqmNGsx"
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
