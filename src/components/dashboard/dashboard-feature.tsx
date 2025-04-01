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
    "4PgdDPuTgMgRP26UFAkiUSnAaBkoFrbSg7bth8PoGjiAmV8so83coNRWyWV2MJMcBnCjwrAM3Gs54839R65GHtq7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31doHF6yX4HzRTtsPcx3F1XjttB5TBEWJPFFbiQEQ8w22dw9a6G1fFNHpghX1ZeAPKnayq89VSrgqLujheXJFcmF",
  "key1": "54Tf8P5AVNRrS4zNJ8bcPc3ULrguLXc7Rr13Mcgy1SKCC4vS74b6muZveExzTLAbuxD3m9hps5JK1dponGUJvFGJ",
  "key2": "3cSioiDUw71SZ8Fyr9DkaGGzjiShCJUNjSHcjHJRMdzaVpAwy2zyEkvbTB14jxBavbYkPBcym2VEN6ysD94eaGgE",
  "key3": "2gz5DA47ZpqXbD81JK3ECwwSvLaHj3FioasLGhRGWM8MnruKZ2QjHLbTxPsqvUYvzdUM9cYF8rbaQ2xddRmDSfbY",
  "key4": "5L1Mn4PX9JtEBKCXg4CBmRTiDaGUtghRq3z9i6Afh5Hep4U3ubfSCXzneeoxD1NEx4EubB1jLRTTtyE9FsziENoW",
  "key5": "4BuMXzdRXkUWjXVZ2ygRKabNETYBxxfhyfEYmhA6qPR1CkNa2UPHR7xPGwsp95utfPiQPzUeKBLYTj8w9LCtyNBF",
  "key6": "2thvdc5EwbDtCA6kxhwCFSbucvTk4ojyCPqc5FEyJy3PEwBoDrUML7V1r9noqpWm7pyo4q6VNx2bWSURhEFwXvXx",
  "key7": "5wFuCZi5eF3h86eUjYWWo3SDA14TJhggujx871UUG6idPAPNKFio3pp7kAVYHAynkdtXPijoApFPD5cTTLMabhJo",
  "key8": "VLvCHu6NubQhpvLaR4tJzpVJn7hdbJvBd1KofzsrCE8vtxSDxeh8hZS9zcDR5qmcSjEoYFyz8gS5ZGyLn7A2Cq9",
  "key9": "2Qy9wrea5wVypeBHGCJvZLaExJWj5RSEiFJeuXVGwNsK2JgKHtDRzoUvH3WV3U4zBVmWvfyZiUYeznfXHkyWuzAJ",
  "key10": "4KqoBCz5xBPCXmWCjSTXYC4ur2596Au93a3UaaXu6aTx1moNRFQsYbrRWZf85kTNB88RsLYvAkaB3eiDF3HmdfQy",
  "key11": "5PCnmKdwUt6ktYaZ75x31tve1qEE6RuTTb8MjABv7RhSXxpmx575V1SE7jp1MbnK8acaQoF1t3VDTT26JE93YKbY",
  "key12": "2zAYJ5T1QFuYaW1P1tes1whdnQSKChJDtQguvAAr8nESF7P4EF9VhF76DYRoRwQRkrSgEhst8pwzkqsTAUhL9cmB",
  "key13": "3YXJer3M9MYJZBhHMUyMESzevQvv8SE9G4rXnNXkGLkEzfLGsvs9QxNaaSCYTdCk7VCb9wrqYuamHQRB2CqPQhjJ",
  "key14": "3hWKokr7KTBf8YQRuya6ajTggtFXrQRV8Hdo61ALvgYjs7VMuQwgQxBukH1jp2DaDFXY11okWdyWziUkofUSvR1U",
  "key15": "5WUY4hdxCaKkxiTxE2FJiXwHHUwmFWUBdF8QMm3W5C7jqH4MjkiKrhdY78HG2ntbHxMZQQRuaBJsW9xwWjABh1fQ",
  "key16": "4MUwfPyca2zDGqD3rB2RpQaZVL9FbNu3JBoYrYV1nvPq7rL8tRPPM1j4DgkdczyGZTTYn5iyfr1PoK2Bg6wUdToC",
  "key17": "wXFLnTGHiGhTqAPrPGcJW59g9EpQEv2XCk4xHC9MNTNLm8WGwYG6KjFWM52KpBdx944jSa6QjaNM96v2hJq45Ts",
  "key18": "5W5yzqCMSzY9xJGVFjmBn8jt3d3joRKh1r9JStcvEyL63QGTWjdXSx9eoJgArLiZAQ74rUHXdX4wXJRNyjnCnrBh",
  "key19": "2ZoTrk1VsnvXoFbvGEajFiadJUt7dxB1MyakjLxBQepeXyTXrKor8DRL1jizXFL4hSqzJyhxphtp1PhZ7QUfWQQA",
  "key20": "5RFVY3pH7HNzcxNFj7CCt4GV2F7B4HKpP4XKgQ9B7V4p1JRdBTh3BkFQEojk2e4g737YW5hGsococNT2CxBesdML",
  "key21": "38ebuSoxgXyuM9UE2qMxh7vDHdVYzYiF4BMrkeBYB1J6j87Kp8VS17pcX2H4EyNFN6n93WRuNoa71mC65kVE3WBC",
  "key22": "5JatjX6A3xXbxeCJ8cF977w1QvtT8S45eKehK8JNmYCS4E6wkhdPQyV1zghXXnX6yYA6eaNd4dowz1VKVwqgpWf4",
  "key23": "4r1ScQHppfMYsyVyW3dsfUmVuEpNgzd7dogLqwk7h92nV9KaqcwZgobceJAZxf7E2RDBYvFwCkVxxUzmJybzVWLE",
  "key24": "5uM9ZL3JimAi8rnaeYc29xuyBwbVZ74rbu7dPa7rvSKdndcQNVeZjmZT4TYosiXAahvxBb9hfyrpymFfhXuodgu1",
  "key25": "44J2vSrbD3DP292Kism25qPiCLiBE6TrqZfHXRteR1g6Ma4ZFVJotUmpgicTUyn6RMVDMN6bk5sbzbhz6zpp3HFW",
  "key26": "4eNS6nXNbon3czUdne78XwF7dFNWzqLLx5H5D9dJVsUf5Z5xPAUnAKFdX9piUzns4VuYXp5832oAtoaqa2CgvD29",
  "key27": "4PcgFNqUPcCDFA3mCuE6tpRS34qV5PBwBrG6txFpDt7zLKqoAL8UonBFGaS5qz6Gj5R5dG4QqYavmmRpRn4myZ6Y",
  "key28": "21DDZCb3mbn7XwnbEyRLsSxjuFvFJtLef74twbKPDphDER3bJodyqYS9udHBa53yYjE9VBRGM7zoeKeu8jocSxiK",
  "key29": "46bVsPR7vqaeSdL88wDvmbGnYf7UkUzV8KmQqMAN1cXv5VmfagXbXPprSpmMWkHWnuooJmyX24VcPsvDCn9wZHfG",
  "key30": "3P283uZSFAWA9Cx8m4DxwYTeCHD3cP5PcTcezuyJCJx1dpvFe7PZNAsSLUTumrJs24Dt2CAE1aniU1vLatYkUsgw",
  "key31": "fy8wxg6ZD41sfqWJXirFc6BeYpc5zPVEZEwUK5mx1urVHoNNEpmwG3pwf3RwYV56mWKvKEe5jGZM9NKYBJtmQV2",
  "key32": "2MfRrjM8emiNDSqaPuYk2Bjs8A91QPifBybYZrfdKKe3u7vc2Ewou7EwYAHwSJAYXU9dNd8rSyceG7iFyzXXSNL5",
  "key33": "51wtCDxiHuxRLeyoihjeAPUPi6ts6NRPYpayMybmGnPeGaEkafo7bywr9GeNSpe8tkd58ZfDsE9eLesxhoVzW5MJ",
  "key34": "49BAgejptS2jXvQAj5567abJmFhwM6S9w8QRTr3UQa78jvY3WmSAdNWmnD7Lj5DsRGry3neULefvixy9pVPxj271",
  "key35": "4jKmdGgf1Cj1gk2tcmX93xybeM2b7ujZULdF3H57TxpUy3BWzYHng9eVzv8X6TcVoW7KB1cZAAooErxJNPYsTYXW",
  "key36": "fX3WYtK5LtSzg4P2Fk3XLia4nx8NQrBbNgF6bTjYTEwYifsyYAEp9ctTPoVbGHioVgseHcDGqcFYCJuCYEcTwC4",
  "key37": "bkgHNKL3wgWVDDM4uubNPWMGfbjECFrQp167cj69caymwcUPGP9DmcfWvjneZU1mzRDfq2RRpzMAsEnPPjbB8Tg",
  "key38": "39JfcU8t6S6yz5MTkHbQ827RRrLEaZiA2yAFhkoL8hgaKCGcRodZHZ3LK1PkEGLgxbcAiyHqbG58YXDn6EWwdKFg",
  "key39": "Z1XFWz1ytFzwoBhHQjcDBPTSxzDaD25wUprxYtbfSpfhfaet9KdgZn2jxQSrGLJyBkM6r8at63Z1uWJgYUFVjeP",
  "key40": "4gKM9JLU6oHPXtWZHeQ9tkWrQnZAfXzhLqodAxTJPkRj995KeSXniL2cN7VryfkY2bQ6u3UaSHfWPA2wcXMM6kRB",
  "key41": "4PiTUww2GnHgGSbXcfJX3xYkAKJsrXXFfaifNY3BrhraCofsuM5mKcPHU2nyZ12yLL2RezpG3vRSm6aWZ3BJahMf",
  "key42": "3zKrwnMyFAsFe4TTF3m2ojgVJyjmhhJiRiRF2QxmgxJQ7aBYmGhBUcmHs6SNJ4EZVzKT34mzbJ5kpfn5XzrSqufW",
  "key43": "2XrqhyeZDypzf6i2ybjSq1aqSxKfqwhXXaLm12JynUmLBqvwc7MT32yz2z1GQLcTuo62JL9jBXoyqWFhogZKPG8M",
  "key44": "4K47zKeiSTjdWoqv4tDWBcuoSB8CTJTbJDvLTVBoBw45jTzyarf1mpB25iB2ZV5K4tNhsHe82MUf7rgBrbkx6fpe",
  "key45": "3UdrgSNLvxqxdq2emV3o5zJJVqeoMjTmvuehE5Rb3XTotSCDrpryWt37MzhT42pHKpxGAZrsauDKz6JRHBDk5YHh"
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
