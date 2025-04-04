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
    "ux738gFeKobDZoSWXQXPPpGwD8jzxpzxWYdFh62padwX6fmWM1M5eZKr45geDg7RBFFXQ2nBmvAM3481k7c5VQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CwxBmQALnNCy3kfpvbsYdHAsTKbPdmyGNtG6Qcgxr14JL17UgXnKnYQWpGBGNLHMLPA3EgyPoZxMUEorxSDyrFW",
  "key1": "2nh5wams9o8Geb8caCuy3cw9d2VgrWq1qt2eTXgfkhUaa3kxm8rrDKPRKAuzWPHjg8P8uKxg3jEKdwcmovQ8s9XX",
  "key2": "H1v6avwKTuduRprbGN5xyNaAHF3JTfi4RRvveg99gTtPgKwUXxBRbX5gsAVxdfgQEuwCeTnAZQLrMesr1ZkGUVz",
  "key3": "5DG6mJ2UHHUQjJVdnvicJFgvUC5QqeH7a4A9y9HE8KiPo12A7wL6YbF9LEoKBCnGSeyLbGkDhL3ZsegHBdrzxWP9",
  "key4": "45HeGUTYE4KpyNF7YpYf8iZcLpbPNUKqeNcUYjkBGJSmxeBfWpLtCCi4jc5yaqypcJXvMC7kr5H11aCsgJAdMQtQ",
  "key5": "3y6BUjPoojGt7cFZFvPUucrQPn3FjpYFmb3FE4web4sgkA3E4WbftxAdmh7ubC6uGxiWWCZwtCGfGsPMfjzgThAZ",
  "key6": "4hiUASTNGhQQDmscAR4fVjfi5mtVqHduFHHuY1ESW8GpynWTA8rivRd3YXHCx48Y9nzL82zrK12cARLHA9ZeH1mQ",
  "key7": "65Tw7sK5uYKR1oxqynAaqZ9Man7bRBTrc69Th3kBjPoewi9yKyTNswDYjkHynTgcCWdcZpXWurHfUHutC6wSZUZx",
  "key8": "5evez5RCiYomoA3RWgNs7fSDKHq9zM3jkioZ1yPTSDZPjtac9nuUt7gW8FizYNAkZz3dEAHf3p9sjvsZWCL97Aq4",
  "key9": "4minzZEAV1GdTbwV6J1zurkgiLECyUfq19QXTZWhgLkssr4uy2VBEB6ALM8vQnK5cDE1hAJuUbFG2ERwuG4UyNxL",
  "key10": "42nVSAYfpq2VkY71oYuxCgnbzaiPyD2tfJnM9zpKcN48EobQkTTcYpeuFXmcejEzaKYG8XVWJKDg3MXzY9iYGJTc",
  "key11": "9jdMpEGnVH1jAiDUfmhdDSyvZRzGCfsi65xD8LgwTvrys6Puj376VHHDV9ka2yyvCu7GnCYW3mJmWFCUbcDs7aQ",
  "key12": "2Pk2oZeqpxvceEXqtWLtoWpyfYiM4zqUwEKwAPFFyhwZRZWu4uBLCE8AyqbVBk2Ektpng7ri9jcC9Pb62mN3m2Rc",
  "key13": "5pv5QfMPpshVWR46QhvfCQp2QigBjukZSNMf9qz8yjXS1YTWrprUt8XUx7c3pPL4yy6ULFWk1bH83i9wKDuCHJP",
  "key14": "2tFJFuCfYdgR1KeSHbUU8joFHUhUXHfTSgZaAHBsYZJBb1NSnG6p899pRTbzMAwDU8cDa9bFp7mtTnxXYSPbuv8F",
  "key15": "4KaKn95MSj12MZW2wegxUEiWwYSnyr3adhBpmDFBW9u6TNkMs2VT88d54yqXSNupUHQZ4Bt2bRhYFLRZu3EU6xrJ",
  "key16": "3piQCSnNgqMmKomFhFYdK7kHytbSeNXaHPSYK57C4mEa13GfYNcSmF36B5cBiydPHCs4aMDkcwf7ydzFhp2JKw62",
  "key17": "2Buy6nJvfG5rSKWsfGzyQE6bFkZna2yr2W2qdmc5A4gFSXuAfruQ7FR1DUVs9oZQ63Sj9KXWBp3zGTLcHUUTC1bq",
  "key18": "4mn2Gf9hYGkZQ8UMT9MJEVmCrx5Qdp3BDof2qS4zi87fTi9Z2dvkRJyL64WYt8m9edF3cCXroyGHkQQYdissJZKC",
  "key19": "442v7x7S8nqypQ5dFxsbSuh1nTNj5hFeUiHqBr9KJBKKdxcCxmBBnb7Pbzyu9DVUfQ46PRi7UA9zvSWPDHe9ewru",
  "key20": "3gH6X5o24kozxXkzat3GLUiJbZRmqcWS5yDpqURvo4zSiBETfLRYBswsQ5tZQvGxJHFcvhkJnX3qfFvPnYRyJNSp",
  "key21": "cUaCndq7o1M5dxqAhtt4vqAw2Y8jzUyNhiyTyba1itLEQav5meiDNaFdkVnwnmDUkT4w5mnRxGxSU3KuAnzcZcr",
  "key22": "mTS7opt3Yvai3fjpZaFjuPkLhBVnCtj6TUZ8KghJSJqzt9M7PuTr8K2s2JHRxKtQCaUA1nkNhdJfjrwiMfitapR",
  "key23": "5QsxG9eQFTwJvjccBzBz1KykTzZmBoeKq5SLtx3E2Zk2uL3KKbrTVAa3xuQwQzA4Fiu9cgQcZ9TG7dbH65XVGxSE",
  "key24": "4ZK7J4jV4aRNEtWRpnXQV5LeLx2idopgRNuhQMMmHJg2nBqXWFEM7D929H8xNV9qUSoXQY6t95fGtDsgo2jgK5n7",
  "key25": "RzuWXs8de8K5aB5YbPaetSj3cGnTcWtmbKKmvnpXmWuM8L1Txh3JFtPZVG7Ax2bnH9XF5856E9jfg2nS3btsMYX",
  "key26": "4YjwjhZTLwX7sopGM1xZ4dci2jCxMjNmMiTtGS9bfXFgGjfNNPE4XeZSzYJ6q8MnKSRkBZnyxm3s9ZU2Vcc4dXs9",
  "key27": "2sQ2ZMwHtMquqphb4eR3HxSsgdzvANfugUuVeNVPkFk9JSiGyPqc4ZJWmKi1FEEoLsmbCkDocDYfC1LdY3iM8fwm",
  "key28": "3Tq4sbh6fynsAQ2mUqoeMbJEitErdCgJATdBhGCUuYQcfViHGLTct3C4JxP9F7fiHeyZjAtKzMdzjsVBPJfrZHyF",
  "key29": "63C2kL79Qu8FqPTDbrX3MasdziaQdvKseFD4USDmi3zZberdmsrsZqcpJdwidWrYAtx3fv7NX8tyS7TYUvpt1g17",
  "key30": "2ssQvhX9fcuntZA1kYot4MFqNdyUDDtzNDMRJceyksoFdoJibRjEXMG1uofEfCpP7nxu1XL3Yymx1CpNPiowNDYZ",
  "key31": "uhWHx6mqKwtGKApCbRXWsNg8YH5vtTkWGUypmjXzGCNpnQNkq928VQr59hirHjJguShavuuhjccJuJqfZirWVhc",
  "key32": "62BXf6wttqPjsRkmGYqtnPBuT2iQKv8pTTJVXAVSFtV5Kh93VAp8PHqRY8WvrXvS2cDfStkYDoHK8vUQPjPTPYrn",
  "key33": "5GAy7F1yBhZBvHi4K77SVJ2ivf8vS8C2gGASVorYLB73rSdupFGLZVPMM4qSupd3TMKidicLTzBYxb9snpRvpfcv",
  "key34": "2geyQTv2B7G1dQzQC83n84o2uVPn4QD672K3kHyhe4CEK4drXzz5ovDcrkjoHiWGPQj1ijJ53TgPEoVJBzPYp86G",
  "key35": "swqgAUngQBadAMFt1H9NWeniBisLJXHSbTvGTMFj6735AYAqkeVAH2kqP6jgBCE4ssqZxg22PZdEvbrLRZQsioX",
  "key36": "U3ioX4rvnMyWHBhYskfAKLupPFiyQHmgMNh4nEGu7c3kcbQSPxqMYz1eqniUkNgDG1zgYDmM4tQhSidnPe5pZ9M",
  "key37": "2kcAQSVNzrnhWXAUHzG2wELFV3YqMjp1iuYEZ6gCsCRRMTbaX6zUthESgW6HMAaq56ApW4k9owpYNwG3CY4hAByU",
  "key38": "3Nwtj5mH8Muq4kHvDFzpwiVXgT78oS4PrzrzfY6Mbwh25nGCsvScksov3Hg7BeGx8YGZDSWExEKBZxqHnhxFcjLh",
  "key39": "5xKQ9uSWRwZbwHgxKj3EroETYgR5FFfHVBYaNUm3CvR3J3CaJqtWrJMxhVx1aaAu3ac3aSRVJD5KDnTknrmn4vRp",
  "key40": "5VLVLdEVoK1hpA9yyWMxPMw9MMFTqfj2Us2VqypQAhgmydzyxqqkF3jZZnUe7CW2tjsp3bc6XXe34nNwHWtafaCz",
  "key41": "4xzzhuav6qm4VbFpCJc2AASnVMMTQ7G6XGvmwqxt8cXBK6hairxvJQHvfyVfzSAyQRBmKCeWoyerC5rT9qXfM5ii",
  "key42": "3dshbb2Fe1oXPXvcfVRUKHrYznioF8frdJiWWFguUz9fQrAq9ihcW3xvtBFBntgTJnZiv5p8xqVcMyqHdKpTch2e",
  "key43": "5hFqEpbfNu4k21Q69YayuSqUEXu3USsgTg8iTxweVdcTUMTwpJBBUZqQhk5E5MQfqEkVnquey6q6mZ86QM8oWnVQ"
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
