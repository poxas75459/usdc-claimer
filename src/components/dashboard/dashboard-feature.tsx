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
    "3iaDxbLVvt3way9qHwhtuXCundg37b3Kr94mLrCW5TtEpKAn1CZMDDXRUpuXxq6pS3jh4M8gQoPpF4uTaxt6Aa6J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WKVyL4asS4cir4rrzBgAPa8Zk31iEsHHPnkCyw443LveyofZNfuw4FySJQpegJBDzxH3axVw7rsaABAZUhMhiSS",
  "key1": "4YiJfEp9FeLGWHJgTbV4oisfNJPR4JVY4rXxJWTqBZjji3QUtLYtgJd7Tr6pEdbw1sCUFXp6GTtyiAvWYFXux5j1",
  "key2": "5pUenykUgHsubtDTW4bL8Wuzc8d1YUXrpxQUaFC6yivUuc65hr5BC23Bb5pewdofL4vemtdqJDk2ncKAV6tazGXY",
  "key3": "5VR4YmD5nrNqysKsHdMDJVgtw1Ue4DdFUYAUpza1kUEdhf2BTwGaFg6smaLFpDZ6tKo3MbrwAPHbkKxu3AUGQoaK",
  "key4": "5K56mx7eHQcJ7FT7deQAcko9NPx1DNHu8VhSkrGS3fz25RnVGqft388pSPBNGGNXX1f4ATjtQV3dzMbVKqmQCGU2",
  "key5": "2gKAapEVwtC4YNsuZfVV6nUUWtXGDy13XaCV44q1fjSeApmGMK3fbKSTSJDJ1mHwMpdeqs23e74kcnHPvvjXSJ3u",
  "key6": "5GUfGtSgyw6aVM97yTcnZZ6hPjL836U4n8YrCV67umkub2kA6bTVdWhwGbKTwt1eLfCzYQbriHbHkGkjmi4rA615",
  "key7": "5c5DniLjPUvzPqpKXSg6waq7p2SpfSr1RHwZ9UrJc6XgvNJNMPBkHHH1UMMvtGYnfebs1bXBJPgCyN6jDqLWu1Tf",
  "key8": "TswS2vARPidBVqgnx9SSTroJ1Kpq1FFQnAjhPbHMUxzd7iYqQzFqcnUrTiUPDHLbD5MBBHunLneton5TjDevXeR",
  "key9": "52uNUQFz6UyeQ1ptagK5dPpBUnPfYQo46h7x4i2KAPiEDgRLdZUxtGnPZETdobyUtia8NUadk9omghRqornVWjXk",
  "key10": "5NoL7vhbKfh3k7vHtFZXsENEpnCbRwpB3KwD3vEchb36zkGQoWGcerSd1QYWGZ8TREKtZ2Cc8dvRkqP4bzAULuDG",
  "key11": "3Lswmam7fMiXW8528P1KwU7CqActkm9WfMMRrKp2iPrPFTTNZFZzbrvMavYYndg8xTfVDa2w7iM5KZuGbJfavAqg",
  "key12": "32HFhAogJYERasHZyuphZnPeuRtA6AAL4H6gXwK4MPeumGVSBmViMKdmWBoaUq8Bc6Ypp7w6MrBLCq7bLdciAp6P",
  "key13": "3RKVDwYhdS9UY8KzfW4cf7q6cbLG6RgQZFaUjDu7ygfGZYeSsrgc6S817PWWY4dKsHTwRcF29oYDi58Cz7NDjy28",
  "key14": "g9LonRxk4cSJyca3dftQHptyLysaFjmjpZ11NkfWkmcwEHQHXb1PqQeiVyB12ybGRk5JGEefB7iqdkUF6spkz1E",
  "key15": "2r8xNRuZEiJ8HMVjYV3yHb7iDsBnRjCfsqNMUiiJ5BzGuD5mf6N5NstaLUehaSpiSr63rcbnSKxYNkcCkAirtiP3",
  "key16": "2D13gPguqvA72EG6JHQFPi2hP5C42TwLCasrknStbv53Ji5DcpTT4xG4sMgEeSKPZUWfW81FhfoTRjG4cQ8CzjWN",
  "key17": "3KmmhFQU69PmTLABuNFSuxuhg3tsE6EJdq6AvyBK5ZKsijt2fgQLeoYdvsTjBm8LJ2W7fVd7KzoXLsatF32jz5CC",
  "key18": "SNo3CnrTfVDcjYj6zzVrPhNW1o1GRLAVVU2THCn8XPQ9VAfKnxm9E87fm1HmHJzJzCdTpAtaUE4PqrLSzRsiEPT",
  "key19": "3VCCteBTuGc2Wic4jCAdxkoBvy5N3UXwpm8FZUTUHV4ujruqq1VbvjGJZRSXCBar1dnzj5QPb4xJ1LvfT2kXfN2B",
  "key20": "65thLKmnN2g6DSVFVwAsh1xsRJGK7NKHG5TR6BGSJfxYDk52ktqy2MsVrL1TvvgUVXJAQFR9h4SyLTvtZJWhdym9",
  "key21": "2H76kpE7VXhBWPgRbtfdSLiYhvbeeX5tX4no4J39FB2Za1joHAt5zMWn3JyoZGD934sp2hBj6y86A9FzGm74ZyV",
  "key22": "4oJsrNfe5JbCRXugDmpfW9GivzdZxbxnw4G6euEtF7HkeBLpbaacX2ACXmGehu1wnpoadb18sg2bnyCthYq8uuz2",
  "key23": "4VJj91dXr59A5pLBrzKMiUdY6dooC4MUTCz9BkpWrTixo2Q59LhpwU2dDRMAGsFLMiLkSiBFjxC76uLUoevfiS4K",
  "key24": "61nrdgcjWvKXtuXh49hYYV6Fbu5Js64tVhUfT9UAzNakV77XypKzMLj3DZKzt2QMrKt3bExFG9xhzSQJQYyFvQK1",
  "key25": "33twq5j7H3haugZ8hTCEXMCdWFSamb3Gf4BPzcF7tc7XXt4FvCaBxX4cSb9tWLjhMw82MfkQdq7tFZahieP7jiqq",
  "key26": "2PN1xDybQwnsSPz1oQB5yV56VJVPh8KE2PT4WiqCUdsK2UDV5bgk1V8MUCaPvgBoPCJc17cPzwE7ALxM4j6qEt1V",
  "key27": "5VYSZSA8K7EuPvrkXMzMEUK8oqr7awUayY6pxxMgsyYg2vQqdqGBnhhzRoSHaQLqq2s9U4M3HwHmKJGsp1jVv36N",
  "key28": "5TeFGzZoRC1MqhCsQtuPcSL4iPnA9XzFFNveySWsQLocPuY6dSHSPrMjfJ2ua1raFrvDiyrBRBCt4AZCYPVNehiq",
  "key29": "2aYuMFGcAuoG8s315JzPcZ5KbVqDmvhYfRNbrL3Btqdk4S3JCMsJzLf9S9VjEGD1rQU5ynR2zBknvvPmry11hXkU",
  "key30": "3DMU2Z5rdVVCvpNGWr59y2DMnJNwhm2Ns91JTx6VnDFM9hXtsaDmsLPuWFhYw6dEx9DNgTE7WJDALQNE5arLrzhN",
  "key31": "VFDYJ33hTTDP68keLjDRwdetkqd8bhWLH1iBG1CfAxszWYrezFtPH88uoTRP7ZXhWqcUq2MuqfneDkgPiZU4jq6"
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
