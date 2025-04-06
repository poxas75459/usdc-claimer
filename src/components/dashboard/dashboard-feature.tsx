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
    "62dJDrhy3TfRcXuyQf7kATYrWjE8dLYA9p2YE8QK6beNASbcLxDVMZPz5P3M3LBax1AUCFpfmqsMcETfDbGjVDQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Z4Ao6v7GgtVjMZGrWQUN1hXaEcat8HWwjWKTTWnwDRG22pi37L4vyuW3Z77TY3pJs5CqXDD1JyUbFx68ewcoZVq",
  "key1": "GvLpR3aVhde2VDPaJRMjYzG7niPaHabE2d2JMxvT9Xrx2mdFQRWENyL4NzfkghDoCMBx4qmihqDDk4z7fi1Wwyn",
  "key2": "4zyAhzMyZVRuwx7pJotLZu5Wwxftvevaw6FG1o3LZPfaBTAatu74ZibuqbsAF6dcYbFoDwVZ2oWrQToCmtfvCYx",
  "key3": "5LKmTVoSkMwB9NjByjkTRE3sSbjTz8jAgWNJpuS5U4CCaQR5epSdTC8RqvHS86RWRBSWw391Ur7BDV1Jmuf6SEJ3",
  "key4": "4qUQWoActfb3zAWJzYLKy2jetvvnKiEBKfaayWgRFjPVFi7tpKj4u2emTxzu6GxyX5CepzYHeedhkQ4c68XZ3ac6",
  "key5": "4XCdwvLtS7zmZeAT41KS6xTu76m7DEZxjdFKe6KDiPwF3pw3vkYXAQZByNjdR7DbgB1UyZXD3gwpn785aRNSj4Ln",
  "key6": "4vZUTkGUysK3p7bzTpbzVE6LyKiWY4LpaQw4FAKbkXJ9NL8aVG7MKmsCFoUD1qtuziEEx5b3FB53726mipixWu6y",
  "key7": "5rY53zJtnGXjg9C9uUkNULkSHoWpDpLqUDxyJ9KTnSd9i5wZm5NDrdk1XjdaWqZDUyH1DVUr5QmfBjKEDvssX77w",
  "key8": "3Ptsx6guCgUTwBfzZuPhgcwGnF1atywLxMVKaXJhSdDVPyLydQTtrC1JozwHip5ZjtjieTBRertndzT37B1XVpEj",
  "key9": "5EugazVpQhTjAy6DjiXpzWY7xnoc7iu57P6Y4pYxDVEHcZWCgsHeUMFAZMDYFPpKGpi7Xpp1Z9ZwiSBAetPiByDo",
  "key10": "5j1ENuY8LSN4sH3vbfkqGMtVyLswDfZkEwcF9maodmcvHqhosNtbmZQrafnXZsj8GJiuwaaKdBnzm3rGWRDApN2A",
  "key11": "3yYmRJEWopn7gsqw437Hm2fohE4HPPxztCHKoGFeQM3iQXBgbxD11ZBXeChYKcdkUCiW7XB1kNk36DHsNZfFBgnL",
  "key12": "3B3CLwtwsw8HosFfGBDHPZcPnwqfRkCveZS4QuVF4Ypy8u9HnLHGhTkdKuT8SpNhVhR9XG4RtEzvdhj6x75ociQn",
  "key13": "3L4Wpfqn3PiPwVE9VY14Sy74JRs79UFWVKVaRNByVMznSFMBMEw3mXeJB2vEUgxYuic24h6EGcEf8YtJS5mBcmww",
  "key14": "2aFJeociq4B3PpQS9Dg19WYoczbo3EDz85UTDqoXiPqM2YUgrcLiJGKzznoEVMWpPzhDiuJjps4Hji8oCBT4riDB",
  "key15": "iecCwAgkSqZGFkZRtXbePGz16y9jWUG5Aoxr7GbuyLeUwKn2YepMo4EZHrsqB9E7UML6H44gkjtYxFYnCqURJj3",
  "key16": "45oavVrXf2wXwbkry2VEim5aoZBeXAgB7EcMV91Pq9USLkXBQdfGyq8P4CrjFcYwReGxgRW9ASeWAt3sLX52deQw",
  "key17": "2PTtsy8j5W6fkPFkrq2XYAqkYhvfUSBW2MusdRwW3G4gtBzKMMpxGcLq1xpRzYTvJQTGFUu7NdVYL5mxc1W3myQM",
  "key18": "3hcHkbcZPswvYuFwcnBWcXEZjgCu3LQ13AQn55kKAVqR2URzWiYMa5SyoH7XRRhmNb7eJidGNwwLpFE7eqa4SMpS",
  "key19": "5noozNb4yQXPgu1EKszW2EK8wjtoJb3pW5MSpkEgf1CtHvsy4JgLBWkgZcqgb6aifZPCV8SkdLvBgbd85dhwPazT",
  "key20": "4W1rqkKCn12VBWpbqGi7vuqAy3KGmCnJekMNGTTFDbZhidKy23uAYyLujsCpQjh6fG2vppzCAb4b9wHN83sp1ZEa",
  "key21": "5ibm3RCSqxLDUruX5RmJznTijAHCcRdwGeuNJzy4WMxr14AT6zjkYRe1aJaCTGierZ2A3PMsU5kQRCf9jAUjWfnS",
  "key22": "652jE9UU72j1ZR8L738tD4rwpLksMP7RMxPD3juVSZpp93Hc6GRTBEHKP4x6s9ogsdfj6cTsw9mtLW6jJcnk4bwr",
  "key23": "3UwYTotfVCbWpXZay4dZXfJ3PxmkqEyBUKCsQuc7PAdXcAA5N5zQ8QmMDkrmCDbEyNUYbRhXjb7hjjsT8RwnqAwM",
  "key24": "4FBVGDc1hmvgAaXByKrUXnp3MSda7raFSM5zCjzGMPA5UHnKgirEmnUxnSai9mHAr12L4ghGNdREsfDAesRHq478",
  "key25": "5iVXdzj6sFfqQoHfaTsmK4HVXMUQQoHFWCWg8yPZ6ZU6HMBNeJ12A2Fe5A3FTZVtkmUiwGsoJbDFbURgDhewNzMi",
  "key26": "2nXL6w2bfV5FuqStT7HffzqhQzSqn2Sf73Rk1p5UVyipcHQkPk8ncxYACKVBtPeoUXCzGpxQFrwtVjg2EviHxx17",
  "key27": "5hAcEdEaJhhz4TNQpSZ8BGLZj4KtV4onokV2kQZ4oLfrSF5AW845nQgVzVDDQcTeoqZK2ggy2V5NqJjEkq2EZohk",
  "key28": "4aJ6S1BQngM1DJry3RAeoVZTXdX1fL378cFNq6pDjGK34V5n5VdY2rkY4M2hmx2s2tkEFnKGy1XkFNapN9gRK6Qd",
  "key29": "59faNiwEqC9it3aHkEX3TgU6VKzseBbHXmyHgnmauzaWuCauRbuQtMTnS8Q5Mq9Su1mPpvTxu8qm7YUxTEVMt3rj",
  "key30": "2TuVqA81Lr4QgkGBDwabSemvGDt78SNfyP366b93VbMJ9zE9XoQ4AjSKsigmUzMfKjeV8s7TjBxxdWuwnGcqLTKm"
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
