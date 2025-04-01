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
    "2W47DoDGzWF7aHNn8QJbLyAmrHKcN45MG8P1XvnpnYTwN3MnAiVNSBqYcdoEaKm3sfcKt3n7mLw136Leiv6K77Fy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ywEigbcRg9nHMFv7aJkFA3amNdr9aepU5doE3Q4DBrhdEWw71sbS3HPRt2c1zgqN98kr4KyBQtJQ1ic1txaKiuq",
  "key1": "24ahgTpXJz3CnAiPhcb8nKKPpa8ZZTaU7rqcenmC2aY6F6Djuwcy9U7r5Ly2xwVVjquYFGo23HsLknYgDSXndnSM",
  "key2": "66Bfj43xA3J4tuhwzk2CHjQJTKediyPLUULecSSbuY4aJAxUU5ZhEr5RQfBYugk3JTjNLqD6HoBNV7W9extzPh51",
  "key3": "EpF8DdGGmKDYut2hs1JLs8EbiHKCa6f6cwr6bPqyNdjurY8dufQoynMCGCgE7Lt7WK4KLDTKoWA4ZbLqNvbkE4e",
  "key4": "58mJxAs7LqeojDEvVYgsQwfU4uG1Wr63xrjPQZPsLwE3xVz2GoMiwpS2S9A7wiz85kzrJybjMZLUukFHjbYhiNZU",
  "key5": "4ps3enTT2oeDAhy4YF6S6D4hfr5qzMyoEn6RdwrHRyRYZbdRHHBaFQzBbXg1uN8eJjuqMoYfT8L7oFrNDpCL5KwJ",
  "key6": "2qqrHSrEKikEz5fw8iquHyQveu4oVLEeXe3NVus5aqSCWLz76ZDsTJ1KZ4Ln5Pj7WuMJga3kGgC7Gb2PhKoKfJWe",
  "key7": "2GpRVexw1jtDXmUH9dQ3mBNrWsLxYohtvyPJvktqwLC13avhzoniXbcsq9ZviTZZusPdYPnJYg41rJNrpY8k8s3k",
  "key8": "iykfkSB8gmFVJ2Z7ZC4t4fBBCgCGBarMdicJUs8gVpnXpU2egrfx7GR4nxYALuwcEWdb5YqeVtWFY6efCADXgre",
  "key9": "281S8kQ1UBqviJwgQ5x54TYom65maCSNihDUGtqtKRvLQfrT4diBPiRprkVj1mrcCJQGdFp9orTxKDn76esQkBsu",
  "key10": "xrKC6KaRiibjPynkntFpdrDVh4aZ7tsaCBhaL5AtaBiZ2K7i6pCsBz58PQVWTB76nGZdru6u8zjY6WbutJ831iH",
  "key11": "5UHpt5b6YX3DxsBXLCfA4CAJYJK77hgvVKhmsQEkYp64uCavWR9hQXsB8xwHZfoX3afDEqRvZZUTSQxhKGFESaab",
  "key12": "5rChtd4CbSTZWuTT3NAAFJhvawHcoq4rK4g3GowHY9qjjeBtNC5Ehnq6XvL5STgEhZEGbe7Gy9DqvhRURWpXWNRd",
  "key13": "4BU2KBg2VQemFvuraHHvRBd1CzEmDCsMom1oZ12SA8uCdq1Puo8sVazqGbb636yd9kBTTV6ugDgXdxmCVTrXuMbu",
  "key14": "5s2Kdtqims6iNxbHxz8NA9Rd1CJqtE8vDBjhuPLhgKkYih2ihqeGQUi3Sgiq5DAWbD7uh62c86dnjYZ2ivEUejfW",
  "key15": "4AuZGtQscbd776g9chwpVkXqRAzXQ3XQpX3KGwBSX5wdkns2freyjNUrunPBjxJM6AgfznX12LAwea1pM2pJLLsz",
  "key16": "4u5qDy3NRxvm88X8DRspxVFPyAkvsNDQ6HXu4yTLjcayGakKhC6wtu3pHVcQSvdHZy8qQZFJtDxqDNNQef9Xw8FL",
  "key17": "38y31HzWReRsD53piTDQnmboP4qYwizHsmJRQeUWs2x7nzjJuWMJUfF1ipHkffeVZ56YbpDX5F1fBtqCq9JMT1kH",
  "key18": "3XFZ3qTpb46Sy63BbeZNjryTUDKd58X5GQgDRCZALzrkwtjy2V3N8mCPVvTUGHECF9texjptsDzmytpcWP9SGfFh",
  "key19": "55Q3ysCSuiepmGVmBzpESsdaboJGtykSPsaypFfDqgSy75qJRnNWpYKFqUNP9zsAyZwdDSJ6GUXGfJW6AwR1BPaB",
  "key20": "2uuFzNxRMhby8MkhH75daWQEaXmXoeSXDWtbM8D3eEFdvCtooGfdzBE9D1GcxdbpwRS4ykZLP9Yf7eQg85uGxWkJ",
  "key21": "2ypYM5XXFkHgUYJdRhv5GakVFczxNPm2LNinQCMEumSw1rqDPB221wUK6mJEAMDJKyE8SRXLYgSPJ9eCv4K5qz5G",
  "key22": "4VKTA6QYNxb75i2BLiNdLGKzHx7jYk4YxzA7t6w7N8ej5og3Ucv7gbvnkNWvMH85qH3b9VZn9o4YqsU3qHA2D2Va",
  "key23": "2a468z3nuDbmmAgLVbxYfzHDZQ58iVwAcE2JnDtzcteP9rsrs2WzpQPjuNxzzSh7N47Rh8RsTu4mD3FpiUAqF7CR",
  "key24": "2xUswy1QFutRJaez5ySxd1seDZKrdwSYy2QikPkSfLRpDf54SU9SEW9fhCKtCcFaRJhTpdD1aen9WhJi7JfmJSiw",
  "key25": "5g65xoFJNsgJhnn5NjKCHuTgpfQZwS52E8C7yvkXtG7eegnndXcnWrk1FrYsDHcmwGTfz8bzhT4vNnssVE61ivQu",
  "key26": "3tiFadJS1ntDz3Tzmo2YFZ28heX3ye64E3x1NsQEhwVxfKn1UNZDRppwEg7C76pgozCEd524CJWUU29W8gH4a8q",
  "key27": "4QH2NnJE7TwmP41S67RfyFAStqq8viot49gw7PYTCT5SagjRVQgnRECiSzcSR9XChT9fUCiUDzKMAsnmxgmJujV",
  "key28": "KjShQEHH5CjK54PfBPLnhhjcSB2Nh6xQEGMqns2VThiJJYpvcxoWiTA3voEuHD7pSRVvpLDoZcQyhgkMq6mm5yF",
  "key29": "64SuPGXBCBjHez3ZWY6ViEE9rLjmuujPPjrW5Gx2iBhdQcQt25BbhUy5QVBoEW2m78eae4aBbTvh8shPbe3433fs",
  "key30": "3cZu6F8eWcnjEYXdB4RrKSuQrP2gKbUp5TEUtW8U3EQA5oiFpm6DZJ5VpihfbVdhvKctqHGEo1exLVud8TppuQ1U",
  "key31": "61di5fgcx8ubmAtALXaXQ9kSXhTH9Hc33ZfdHt32i5GS3qNFUUCt2a9snRjKcUzxsVG97F2cPgu8ozt9bY6cKg3v",
  "key32": "5xLDK65TC5kpNqP3g8J7h6HAfHeMfHyw3yHxw7D9SbJFWFUnwJ5j51DTgTGCjLzFGLSy1hQj36dQ4hcdJanU1wW3",
  "key33": "3nTCEMc45HWkjH5nrvADLMHiT6cjksuKtywTLtf2NxizuXtVHDUd6ne4xnw8RJvwnS6DJvqQ36ujxL7UUMWzpYRv",
  "key34": "4WLDtxFwvULstY6T4YssZz2ruw1Z6SJVGTzrG6pwuf1FoQjsdryqbrkPvJjz6vBs4PWkVKbRjTMZosudifu1gaDe",
  "key35": "5Ty92umpbeVqXE8Mc8dLfML79dkVPaYwbjP4ugZKcfnc9EX3GGKHK4oPMTK6JhztXUeHbiu64rw5575jFtxPGsYF",
  "key36": "517RcocrJijfi5PkYr19Rg6Q72PPqmnpW5AXTEBRLGQJKvjPA443bAcE7nn6RGaPmZKFbWSFd4oPGmAB9tDN1N9i",
  "key37": "3JqLxebKyGYhHH1NCYjTmpeixJkx1D4Z47picHg2WPFZpHvm266Un5aq8KDBczGLaVQKkTnDLUYY5GXK9MaYkSzH",
  "key38": "yS3tHmKJovkLdubQtWQtVZhxhGH4bJosuBAgDZFvWFsYDieY4Tm28rVvuUReubFbnp6mm8rzoSM7ZMeX1GRoXN8",
  "key39": "3hvD4zc9DRDSjBvbLMyoqmHxcA8fxJnGdcqGEief3rukWL4z4dtYMf3A8KjbwpyvhM7n6TwsGohfZWqV1THaDuAt",
  "key40": "2Vskex63Fj4DiucU68HfE9VVaixndwVHaiP1Pk8Gcyp5ekRGmMxQMPwGgpHazd3U3Gsty78VrFhpcpwHUZMzz2dp",
  "key41": "2en5HzHB1Vx5bvv5bXNTVeYFgPDWac4cjLdpgekHcgT112YaitC5PaRfyRpboXKknV3h4j23Dm1igvK57c7woZZW",
  "key42": "7nuUq5a2NREitP6P49RgjhXZvFAXaSfoGcT1W2wrM4xhgUvJP4JjstcA7bCRwonySdneov3uXp4FHsynK8iwK6r",
  "key43": "3vnfZvwvE3Te3GrSwg3i8GVYMsbh2oeufQXV3WfW9Bvz84ps5EdBpaVi59Vm6LPQutwJa9GkLeuU9Ds97dXB6RMT",
  "key44": "4SkHkx1qtXouBnxv1ptQUNtmBZajRtpPJLkH1EBGJxCwbzxLEDBNM6zKLju4z8AfjCpdipAq6k6b2eczTr7SMuQr",
  "key45": "4U2BEkfj4RZMmuyse4b2k33nu8EVXSn7cGMordF5WPmBD3x8VCdaNEHRJDbKL6yyEXqRVpBhejatxk1sCLC2nLKs",
  "key46": "UZv7mCztgBPp6aWJjM55FRBtp4FTHehX2zkmoNbMPDHND6gNsjVTLg6qFdRBa5SwPrvywdk4BpzBSC6CKU8zV4i"
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
