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
    "3iXErEKjSx6eFKMnGgnwwCwBMp7dyPsKD8RnH7BBTN5WJDoqMudsVVpHstpdRpJjDV6vmRsK3wveH7pb4FskmmGK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3atgK299eSDvhLZku4Bz7wwAhCkcpedJQu8BmAUJxbUeHGg44ZTALQkt9dQHd5T3bRKSneuH27aFAppVFrRTuCD3",
  "key1": "2BdcsWqDYiaz4DvWM9SYgS8gaqL7Qd23yiHNutzi8zu3kRav5tVK3BudEGHBGn7GbYiQSA6FX9jJTKU8EXPq3RrF",
  "key2": "kbKFWDYLf85oPFGGfVyG9UN9mGHx5Gi2ikygZk467XbKh33mo6GE5U3XdJh9XGN785RTjAkYkZUGWDdjRUG2pSU",
  "key3": "2zgMdMzSek9M4bLzhpwXw87aeBs51bWpiJZ2ZaHmXAVDJ5f4buxvmmmYGGpTquXsj1piEC2F1PLaW8Vks4UEKdy7",
  "key4": "3s1ZL3K6wb8jKZENbakYb5iMm4uf45G3Eivfbv9YcJUpbhKrdDaAm5Yq7U2gNeZPrcprXo6dncDaLfwtumWn8Wdn",
  "key5": "3wpz1nBY13wdpeHrvRKR4QrRpSp2rffe65nRCCqb68kkGBirUh4Ku5LjGDCffac8fjC7Yc6cD5h3HbNkLCAUkAcr",
  "key6": "5WvTJHiATZss8k8xisH7KSPWmajdbEJEcn64KcQrL6ycWKxMz6viMX7jYD8oTbXT5fpto2mSieUrJffysSDwAPy6",
  "key7": "4bQZ3rbYeB7dX9kCZbpvh4bGcavc6mJJkpsWDoVTJ3L3Nco3gVds6XnbWvuvyCXm8uD3FY29SwPkJihwjVHeZm3T",
  "key8": "28phd2fkjjniouu1ek3QdsC4dV1oonxbwTJiSwN5ULVCcbXtnEQSnCM59VF9BmbWCKr6shHCi5XsW6w3YF462xnk",
  "key9": "37z6eKbAaMgWrYGmgAjFY7dU8EzqXWAqM77wcp54ypXfU26a5XKbD4hcvYaCd1XJMYfTbnotxCSkm6HcAj2uJAnU",
  "key10": "QhgAu6gHKb42FBhmqjX6tF1jdpAHiqwwWGTcBVYNcSTBGaywMzxLaXfkHNbxzS2yCRFk11EQCADLFURGFqA8q8v",
  "key11": "45ePuWPh5jFeKbsaZkGvLMCTCd7q7ny6Tjkvuo5eEmWbTh1eCBjpb1CYSpDTbEDxgVzVun3HmCCg1Z6mRxBeda4e",
  "key12": "4oyC4N2jtxCGvZJ5XPNg5qEwN7Wiq2Ay2VR6eug5HTXdM5DCtwmid8tZpoZtCFRGEYKu6gRuHYERZ8ssnEX9erMt",
  "key13": "mj4NmPFHkdoKMgECsZWnYRupRkWHtW24LbWZ4zZTWsZhnZDVPmkx1M89TgrbMAxcBd9ZHfMfCokxKWzLoDoxXFh",
  "key14": "J5PmbUUcuV72jGSgsKqcphoPTmoRofSAQ2dzgRikrhZ2VnhgqQzgrph15rGaV1B4CJY6ZnFFhZjRegBgTevWKrR",
  "key15": "Fm1vsWm8SazPtZP1bAuktH15kiEhgxgJ48ryoYTSDunU9d3G5gkYGSJmorjrDyLPwLUNAeLRjpCoeZ6tUVQBtWp",
  "key16": "5yLGtm9dW4hiJeUazHTjPfy3b4DbcwTi2xWg9EM4osonjPpS2KSPEV4Ev3L1J2h4yts5CyBiyYehEBKUG1j27KYb",
  "key17": "41KyvmeAXJvK8jfYtrBAbJJPJGLTS2Ut5sVkHXbuErLe5X63BTgDKBTWZ9t2w97u9TMxfdj7KF7kuQZgvLTWiAYH",
  "key18": "52HEV5367Bz2h1izQXFQS2VmU5587hr337xEi3qCmeWPZs7gbBYX7y9dByyUj7QPzFwAtU9m3FZS9PniYnrw6EP8",
  "key19": "38FGgfEmV2WxwhP5bydsF9TNb78qbqHf8Ai1Uyffn2i62kAVi4z4eL93EJGqb4w4zuEqvyLs9G6eUkx51vyrjPjJ",
  "key20": "5oAtUfToWw9gvUDfVFv4KfahfqdPH2XniMrKEqzSt5u4J8hQHH4oJK2Lnx4WawRm41886zUufyfsmp8rZR99BKkn",
  "key21": "3bEKyGpXsnvVrQXvaSt8ecVbXE5eeTQjyoGXhJ8HaHxoscRxZdTw1YEMxGVnVJGAeZx5XgnfH2ub8mDNwCRzKK6F",
  "key22": "4wYsdhim8hKXoKyeRLkmTU8gUz4KtA1Y4s3e3fQyiCL13W1Sc7BXNwQuLMGkJoJ7eLjAhwinLGhTnUHvaeZVcmrb",
  "key23": "62twsqMj47Z8op56XQ1CS9Br71mbPRqn9SumyZS59EgtyzT2DHxFtxVY7eBPw1ZWdbDHENQuns9N16tZw5zKg5X7",
  "key24": "3De8iGKNqjkiZM2t63cRGoCQL6JQ3kMQovmNZv4jDFofMLxRM78q4VqDTrqFPx4pyjPauAwQDyd2kMKN51Ts2sbk",
  "key25": "2wDgZUwRRNVLzM2rA2dCbo5ekdVTtkv2bdBA8ZHCbtmjExJfrRf2s7x6C1hHfiepsX2kFpndjbRaPxBgBofAUCAk",
  "key26": "2HEgTXSL4XYoxadanMxzqtipsX9CNCzMhfwKFx19V2s4NdZSRx9cM5uRsEJ6uEuocH8KhP5MuBH3XX51iNDN3XfY",
  "key27": "5z5B9eAR2nfTahLTBSiWFPH5iLNekELBaX3rAD5cisUUmqpxc6zF8Lq4xCfSLzZrQT5HBvjUge7nGeK8sReGjQdB",
  "key28": "1kRngK5oe2HhZj8uR3m9mz9pN1GLBiKNaauk8amkSWFM9oinnyMAE8PBckptV6e8sH33hV5dihcZ92Kvj8VUH7G",
  "key29": "5nebaGnmtA4tNmeSMWtzd5HBwYxnc14GTUUbyrSyu8iCyo37TNjY1iUkfmSPj7t5CcbavShk7mKPBZ1y4sCUw7fy",
  "key30": "5FdeCrTfDFhJX6aQjm9M6W7E6HfJCnysk3xcy9sfnrzZB26DnpfFbCXapj6tVYvPsuH4wZiq9UuLjLDcf5cEX3U8",
  "key31": "39pQRvsfZi5Zw7VepFhANUfuh9eBNFySU23i28SzupzSMumjX4BKdfHmD1VqT1rwva9kewffBViFeyiCKj9nkQ2D",
  "key32": "3f7TJWyECz38DoFqKmGjxoLihjLVz1r3BrB5XQ6389AznsZAjiZK2uokceRA58kByQV5eApcAv2WWUe1KaTvGz2p",
  "key33": "4tGhs3QppgA65nKP8KdT3Xg6f7aX6YSrnsnXyt8GCKyjoWEkhUs7xNKndEQuuyHdwCXpSNBQ8Vpbr7srNWh2UDMt",
  "key34": "4BZuQYFrX2MR3s9oeeHbcrXXDiN3WG4QTAabgWTbmPJ8PDyM2P3osk7azFGAn2zgqmikWdocMnyKohFDtpgbEo1m"
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
