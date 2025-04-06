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
    "2EY48X4HUrDDcVueEZ3tar5aLY2m6NCUkcow6Vhz8SwxcVBJVwSTgbrRTnZrjWajvfKT8WCkeSJnJHtyEhcJP2c7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "yFWDvA5EuvFLGB4es5Q3pYsaJtWzCSxYx6cfwDHUgCyFyq5nyv65DfYWpXS3ZKSkRXwh1pbMsn64wnnA1UMu1CX",
  "key1": "3x4THXs8DvbDCopTxrK164pPudPwxnDQfjuohuQjDhLZXALY795Bg2SjQMeoMfiPEXwRgCFyWXrvv5z2L4j2zZp8",
  "key2": "4A8cfj26fyARwWXQC7m2diHkRGNDF7y3ymVHSxNr8S43W5gUbbxtjH2s6sPpJmtA7X32M41AsLbKuZR6RS7ETc4J",
  "key3": "23VcEpcDyMP8fjQ7PKW3ySHar13qVkDcLL13aBUP5N71pXkJWz322mV7M3pRZL7E7jw6CGq1p6rLQaJPEyQhs99a",
  "key4": "4XuYVsf18ZSAeTPjrVyrJZ9YfvGFJBunnJsc6gi8wvNqoKisQzS354aWSv4xQXkZt7XNN7yt6WLj7r395XbTfnCW",
  "key5": "32gxE5KDF7N4KNtyzPVAiYQTLtv4U7oKmBRfGzXPaw7cMVG2X8zeUYSvEWwbLzST5DEfTXAh3WYxfba29jbZevaZ",
  "key6": "5ejSdQgt6fNnzRFmk1R9oPiLkNk2kVwwQqecc2nrg8knYRrS1PL6vJVmP95YaSuP3SXgeCov2ozNPhKWkCNh1QjH",
  "key7": "2HR7K96Z2KXn2GYohuJJFWiNF4dogWHg9r3XjUdUdCPNV52n5QtuTptEheK8wThy1hQ1FoZh4QkKKYu7cLGzQ18b",
  "key8": "3LYEkoKY96piPxc8Bbp5uE4Y2x2BqUXn5ZVKJKukt1ugYUj91Aeh41MQc8e6EirYNu6DooaguaGMdwKEaeqFXprx",
  "key9": "2Xg7jWNLG5Cdzt1qymAPFH4JkrkvVmFMBgVQMTYwVFsrSqeMSVvqWGFreHnF6YSx3hQEJy5JstAyz8qbkyEbcfkT",
  "key10": "5SRV3juJm823pjsspADdAhkCq7xo76YmgkHHwfy3x577E5w7FMjsXG5UTkxgVcAZwdWk1hG53Vcfh3wdEUw1ckUo",
  "key11": "66ZikFUSGXR7zsWc7erEDLQhSaiAbiG2WuRovUVbo5pa8w9VuXa1hxjPAdm2LQgdKxGNbueJLDptbzXrCUJT1GNj",
  "key12": "2kCSEKbCBJnuRzuPhkce3MjtfkJ7pmeDSbTG9PME5zeLdMuQ1sU7Kz6S2efraJ5LofWR6BA1DE7PA9SQzuoXL1BZ",
  "key13": "2HQKfs9Xkjvrt3K5v6Kco7fkmcn5jC9rsRdyNKEqboT1rAeiHmxPQUgejwcdLrBgsrRsNTTsrueSDfLd8HmWJqdB",
  "key14": "4EBohhGxdd9BVTcnv9SgKASyK62GjgoUFzrCGgT4Y91KNVafE861fRCXy21UiKDuXr6Yw4HDHgvfY1XanB2TZ4t8",
  "key15": "4S3HtFGLzhBRaKZaTnhP4bK9s6uRERyXEJiLhbciBYH94eJCZQjDj16q1EMYRQtMCYvJRW91vSenZ1v2Ewj5yhTs",
  "key16": "3nkkDVQF9XDKNA9M6kczXWiKWTePVsVJ1r2V9RQyhLZw88VSHn7F5Etn3PuetaGSmPPEKqKUZkx6r7hhJq7LSYdP",
  "key17": "4sGZMTd5TCdP3eoHcCeH5pQe2dxh2tqRrsFgZ3ZUPZGkZCixX6hzGhbiNh6rpXxanZujPr7Jc9V7dyRe2oYAFhxd",
  "key18": "5F7fgpdrTJ1XKpbigUeJ19B3brgdcjghZjnf4bCwXxVBN8NgAixfR8SLkhexfHbJoRzSfA4ZajswxbcaFeAzzonN",
  "key19": "5KA9pQRMcTHGXBBpDEJ1Tkyudnp1fBgLXmUB3RGu3AN4oP2EDgCDdtWebf746Y15XeFZnnTytStzuwdV4PTAemAa",
  "key20": "5FUvZm2CznMcvcHM2JyJAKhvgHZPKxy66mdMzLr99xe2YyKetBHGW2WG3pFfwibpBjnziG72w77SsMKQz7enuVzx",
  "key21": "3tYo2jHVbpEVo7h4uUcJPKtRtWyNkPh79MhaALNJ8nuU7VDdMVLmCRaqSuJMaWpL9N8ZTi6iiFvyugKN6Rksg4jH",
  "key22": "3MMDRSQpxjF7K1mGFEnLxoHrBDzA8sDz1wSeESnrJb6T5u7NvTr4HDRcfim8kEdEvmKTx5ZnmSMmRWxVuzb3NyrB",
  "key23": "5Ljqq1jKKq8yRF9KrPudyMEXsVTbdGEC48udgrbe4aMMmPrvRaXjkd1rLEmyS1g21xf9g8Rza9YzdFTx7JbaFYbA",
  "key24": "67M9aHRQYkcbyErusPXt6pXAGvUpopCswSkT7W66xhqfyXRxwKXAxk64koSuQUvaXXdm1LGzVLRGsHvgoxwWZNUJ",
  "key25": "5xUeJBPYC4sBr78BRJ6f9TaQ23KyZxMgx3YaTyo1hSskdDtHam4NSbGH1qbdTTVR6Nt5xo1TLDzXUcTrwdkTS7vC",
  "key26": "gEk3GxPG8gu6PGY342PLqc6GWPLC3hrNrmgmkzTCbeBjkfxtBnCQ55vS6N3nQBoKREZvJBbCnyzMgMYS7urg4zA",
  "key27": "3pT1Tx8eHeQbdezYBPydURbZpmeXSMw6qoE7SX8rWLYxFoTfsdP5ekcNxs9mZgZxMemMw4t9LSqAurifecWqoWwW",
  "key28": "4PmoU2RDFG7xBU8PXQvzKXvTB2p7VgGqFiXHAQvt63SL1V8ZW5F6DRYx1nVixop66hEwWq4oRxW7rrMBY6dYeDEb",
  "key29": "4dAH9NQmZ8ZXexEHf4iV6dqiv3oBB7UTAPV9AhvQhoK61CfMjKd3kMsvvFJJoq1xeu3FaVSCCAuaMDUKEpWJPAPx",
  "key30": "ebS9V78wBfXN9L7KAYoYW36fqtymLywm3WTBTLhSDUrA7L5q4CdXWVKiFSsttJyqE9s8Sr4wRaGAd4KcLCZAsF2",
  "key31": "3hi3vj7G6Z1fnsn6KfSq4WTMez93p1kqcLLXDAn3Fpyk6h6c2xvmRA6NsG2fcqsuP3maAvoHwAeGy4bKYHtYn9yL",
  "key32": "3HcnTyfzAkKbt81s2rsf2UrDNXoDfcTWNzy3fAPK8RS5HzTsk8FGWyQCWQk9rADjEAzNj1Z5FaBCD3FxL2BWKT6v",
  "key33": "2CL5inx2xNPZ5Az6n7bokujf64Z1tRvwMCynvxkesoCz6PwLqXR9B5xk35Q1Qg3SVo8qxexfM351mYyBbFx6FLE4",
  "key34": "2xBEaJW1aaLmrFChsBnqHoRn27PkhbufPZkunA6eEZgYpvX783CHfH9VLHnGCCBjQ478cSQyJAxE9c4fi7yhiTjU",
  "key35": "3hmD6uZo1YUtWP3TcPfy7C12nxjK38E2GGAS4cYn1rJXgZ2o9Ps4iBWmCLfgXmXjV5bUgM7jnMnB9FG68T2aFTCw",
  "key36": "3tmWDrUBcVUXb8X5pmUm5pRPK6mJKqWcRmdYCSC1ZoALzXMjHMQxdr9JXA4ApEhq5Sq7WYxdqk9fBj58k6fo2bab",
  "key37": "QAj3gyMLUcxTYuTuWr4hQ9upR3Yrd37fSnRAqD5zC9vJbcLVTP3a19BfT4w3G2cn7MxPY2sG5okXGB3aeXUeReE",
  "key38": "iW5sSs2ncokUyDUxcizRx27vMSEpdn5hEXuYRGeoVcAGvjzDyA8xB68zASVqjKQZeYmHcciXY22yt4gyDCCP5C4",
  "key39": "5b9b3kzZzBy3QQ75EKdCRGUJfUrnB85KHzgLFUUAAVJgGLwyfMfP9Kbh9BJsJkswjhG3i7sB5Y7jA6PzxDyJj8BH",
  "key40": "4AjfwxhBs2iu51cp1fe9d7hiKFY8GrazxxvzXrEUMb1E1Po7NacCtHDE1uZzkwLQSVxvM2Y6v7Ra2CxpWfj9FyAG",
  "key41": "3XwS8Ca97X51TFobrgqdCTQuYLWiooNeHfataCM7DxGsMpNUiVdw77Piw17K3nmVTfwpgKJx8wgP6xCtq3DnBscW",
  "key42": "5SYopE6QCW3Bt1KjbTqfbUKJ5jzpHWM5MnZjf9t7TvUUZmEpBLDWBDZBeUnK6SBwkbeucxZSAHigtjQNyrf5mGWS",
  "key43": "4z6WASeCERWrUWq35XEWr74GP631xNomd3VKEa5fqM2qT5JHvCCKXaSy9UL2wmR87ErEJV58TNsTVGthKwP2QW66",
  "key44": "5c56e7VpYQHxh1BKZPtBg3fRqZ2t7ztZTE1jiyMuN59nvXcmccKXyr5aQvoCPTXNKUe8hQC5mVHqd17RAZPS5p1f",
  "key45": "61GK31LEZjXHLAvmzK498weDCmV6w4RLSfgAkUXCmMpuysu7jeeSMVabyVW9tdgKACPL7duFyJEbx86Fa2TXNqvg",
  "key46": "3zcwUKVCmLbGDxuCXEzwvTKRn1E5SVZat6Znj7sLojG7D7sqBrpaMqc8q6uxMR7ZrYYensH7j1Jkxomrzs2Fi1bz"
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
