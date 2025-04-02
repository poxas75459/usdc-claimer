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
    "5pACKteC8HvD9HA2at5Hy1tnj7TXXRBzbd8QYMM4VY6MszbEgYcs64X3oEtLKJ4KKsFcU92kMyEbUcyA9pRiWMEq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4U8W3THBynMiLgsTDebHdvcf2jHgYvYsowxcVpPexWoN1jYQXHiNeikBs6HdHefv5E9vVsNRsPRKRMZwmudHJk9k",
  "key1": "3FEPMsTipArpKT6LBR4Fua27Wii1vaTBxZFKy5G6pWb3CK7Qo9vNvr1AWZRjR2inQXAwk7sKoYWKuHVh4oMGRLNe",
  "key2": "5iyQqadSR4swj38JRbpAZwB2gby4HYMwBa4WUeq4DAmiHeoWdWP7y9V4Mya8dv32omfKFd4yeXoTD5eJwEarEH92",
  "key3": "P3npY6z15u5MSXKDJkbuhKebcrwFy5efvA1NU5DxeyDNEiAeBuiTAMjtgshB7gDB1tqADcMX1ibFdoSXatSn7Wd",
  "key4": "5rgsd9xzcxLy7Rr9f3szTZ6n33GnksEze8Vhv2TLatE5LkuhBauXCGDfrRdFkfQwYu2AA5RjTGJNUPeCakjZjBAK",
  "key5": "2tYWw3oejFGuxaMKfgVpYCSy5GhT1mRtPWKTZHdtgsrJRo8V5VBBBokgAjDfxtFDDwjKV8wMnjaBx5vNeCP4tswu",
  "key6": "LDSj65r5YMHn3mcQaWBzWUVJGfTrT2C6iPuxUxouFBdMXcmYr1fbRAVFZwT7iDpH28A3he6xnpyiDf5253w9UJu",
  "key7": "52ALP9fUJ7asdwWN6w5Yf1cM9usnUdK6w1TiJPan9hCHrKAwaVNjykns2Q46wuDCNxRvCPexpzdPrLGkgwDiCKyY",
  "key8": "5fp8Xv8B4B2K8cjgP1M8YtDuPZLtsiqy2z1bHQk6phyCuARVG4crC4hgm7ysSLST5QjEAKrdNNfxb3N9N8NMEdSn",
  "key9": "2bZtaQgXGhHYpJtJaM5gpM4DLFsZuDWMZQgFKYQKA5xkHfggPjxqLowTRi1rerb6Pd6MJfVw9g3YCyUwUr68Jp9C",
  "key10": "6NNyVx7VpTU4mkA2aNDKu5imo3yUu7HrqE4r4yz67dJdBgzDRvyi17KnRsphdJ1Tn1WWSQw7gcGAoAVcjvMgUYk",
  "key11": "5F1ByhBinjk9tRubSfPAvX6VrrHbmQW7uujoh4LAMmnDEyqnXcX3JerEAe21fibHPMsDuZ77oMCoZF26kjikdSLp",
  "key12": "8C5ps6FesXq6wxB22soRmuPtAxYejWWn6VBQpjUkWgEP2tDyGLUEyukmjLekpGxRuajH4FKPFjKiQ4wCmDdXtx2",
  "key13": "3o3DSE3bseDCHqAyh24nGnNma9jWUps8kdQKXkw7v1PS8Lu1sfkHEYxT1ReiJSn3gekRi28hh3iuQXKTqDWwX3UW",
  "key14": "2ytGSvKpMZ329fGpBYaiLWgAD6Fjot8bExsGiMGVTjr84dRMede1WPQDBttmEe7G5FE3ugtbTtKWmCpSUM5pgJoV",
  "key15": "22PXoZDCfJomT4nbf1AHb9xskfncRk1eTaTyAqLnd3SpZJUXJ6RNPMGQ5MyeixMUYEuovkCe9V9Zgs1rZBhLKam2",
  "key16": "2tY2g8JWqvYtsVKun1i72yZSdJXnkYGaaZ2CErYbeCxVe6Lma821PM5ByVf9QYw1tkPab6ut46N6S22M9aQpLrwg",
  "key17": "5MMDDFbJkLiZmXudCvMvfDNNyfaVhvZEJq7UoW9EPtrtVXuEGBCJPCbYfdFYojgkYt7cVGrZFpcEkxqfEE3Wins4",
  "key18": "314ZWRzdpsa1Bn1fq3osRDYKvKbo1cjhnT5v2EJuUHYNoxjaMGbD8Q3fLtDFBXgA5Y2eaVyRJJPisFbFqJVx1rsx",
  "key19": "5duDoRUdeNZXEFPQqoeqAgNdxfaHpbG7NXMj5nsedSSLBWRKTTJdsU3cmYiYAnrbyU19eFUymQt121KdJB4zfadF",
  "key20": "57mekCQmzhfpmsqCPt4iDq2bTqaoj91GQSjUXsM5g9EHzdaDSc2h6irCeNQMFxLLbGufcgJRKWwL5YfAUnJXJx82",
  "key21": "4TQAPyAFCDzgcDf2cFXwup8rs3vdXg1BJ9StVmobBna2tsecrhv87To7zEZW5a2jiKDn7FCFUntwYazSWQfcjaX4",
  "key22": "4AYfKunXkAyj25JTT7FcyBsEpsNtK5kokBHj16j1DXuHi7FhNUJsNcCL9xPmWhXxouCUYydXgDtUPHonT82bng6n",
  "key23": "ZUGoiKUiP41WB4Tt1uqUzLJxxyMda5dXhRTipwDrvSKoWvHw7SAyCSdqDu7RbJ19Yym7NtW5bSZueze6X9frVQM",
  "key24": "teqeT57kjjLBho4JpRz71QC4Ev3bxM99ax5uB9omfEztxyKDy6qtWnhCFtZ6XhtttYgKVbuTxZ7DuBTMViXKonZ",
  "key25": "4qYLm1xD7nb8QcRx7a9FY5Psh6VmVfEbsxypKHoxb8yuNCG3FqvvrMXSDNxNfrhQE9NUU5EcWD9UumCMte1hrCJv",
  "key26": "3Jxjx3NC1FqHwCuQMoFMYSkAJ3UpGWabr1P9pMauUJLw9BHp9vRmjsxRBWnrbmqaKjK4RY4uHiyz7Hqm8FXk9Umt",
  "key27": "61ALJWM6NWm7eTJf4bs8ngjrkiDGsYuxZo9GUTn5WKBqXytmta2LTYdis9qmER7xp5FqSp4LGJvFACpstWvfhov1",
  "key28": "3jmT6TsXV4A4Un3LGMRtdV8V8uxETydVoeXVbLaZD1LmFyRRZLP1gLVXVgXQhp16E5ebPiY9sXDu28DPEfKkv5ST",
  "key29": "38Gw3sKaW5eo1itvocWYYpDW1heN6p4PLDw6EXo8mRjtA9w4KFnw8AYaVadiJBJfu84ZZFmAidCXm6w55beo6XnK",
  "key30": "24s77AxTqZ9VoZSpKYQuvKJCPm5vPJYT8HbqnQoVULmPc2HuYobVw4yMgEu1rHGDaJEhZJWztgRiZXbuzp5x3wDT",
  "key31": "5GV45fWuVVFvF2ABcpC6nD3ZDnbPFok1mgiQ4qBdAKzNg5nkiHT6mf8jC3Dy6P7GdNKCCJAcpVeuAD24gaKxnzvE",
  "key32": "2rTgwtySjkEQT8cECWq82opQ3gbMeMnPoV2pYiFNfEio743g42m1y6uZJT6mykZYMamDVNQ5qj8kgsbXhXALFqZ6",
  "key33": "3pjTTk5Vd8gqNXdrQuTgELz4dFhXDWkZP5kygQ1yQxh1Ygknaaw5MXTpBdv68CYtyYTzbqyzVqfaqWuTPhXj3bPo",
  "key34": "3fnspjpT3UrCSTiPR127vsVoJhYzPiish9v4rnqtyQfs4mA4wn7iXkrrXGWep1zg4wF8GQhJ3r9QYJ7CcPyscnAG",
  "key35": "4uhDZzjQ1LCJqpRtbBxa2UscH6Qbgdpqma6V8CdNrLQY6Poi1qghz8hYeJRGSUexqDR4KwR3dSxUFuhhPHrr7ogs",
  "key36": "33wtKwzXG3tfyfGw6TdFvYEaSbbqJTF44a8ULQgYw6qJNMwDG6KW81Mnqo4NvhUqXbEJtWJXqBm42xFCCxxjRaRk",
  "key37": "2TXJoH8txzVd96HJRvuduNVPwqPWyLPxkmKgieDTZrgBSHPNS3HrwT4PZ64A9M7rUzTtnsR1hAuCBzE5yr7jGETh",
  "key38": "5dHk1VrBKmVZBva4HknnTxeAc8n56HGL5BbCci9x1qKNzgd3shwijuWrmJkJeRTyEgyzm9ozoa4xayi3nEce8VG9"
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
