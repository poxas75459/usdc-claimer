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
    "3QVyQ2Vxa7U3T4MZAHVrrPKwYfQ1y58HkTpJPf14GCXSUvVf268q1Khy8iVivp81j8cicyNvwYKCBCm4mue9k6G1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5dQaqkYoKfFvQak9HWiWR4KFYy6s5ZzQwtW7Ci9E6kKa3ZKaGtdZKEs8tnsR4fuLms6FuJmtTjr6B6G5wUKU9gpW",
  "key1": "3RWZQxmrGuGVXUKBhiXoiVoXEgKKk3g83jdFMymjYi7zQVQqGVmjx4PprrpSsecquVVsULHuH4eCaxS8azgUY6cz",
  "key2": "Pt1Km4G6AE5gTG4V2dwkeKt9Fiocp2mM2QNuKkVkQgoqsDfob23vS7zfv9yYcELEBGjRd7KL4wYR6PGe5Gc2h49",
  "key3": "2t98P6uMJzVrqMNQEjFDwa3F6w91QosWzKn5pFd5TgBa4mRPW7myxW6C2tUNhqZV3t2XwEZMu4sFMKQkMFcWykdY",
  "key4": "4KhsZK9NqVZyep7SqeLh2T8WeKepj7FfNoG43LSinXufskV4TNyB29PmWjgrtD2cckRJL13jt2YzPpn4a8vi4WDE",
  "key5": "4L63vdsvxbHPkxrfA8N97BoFYgXGe8Zave91J26mmviVmjYPQEuWmSuoz2S4VTFYeiUMTUawGhrhPL11yVj5F1Nt",
  "key6": "5ws4jwW2DAABk5nWmGifCszLsvQDAtwAdwUfwE1v42jCyixCds1wERfY33d9jqKsU9RGQG4bbxBtSYqANp3xAHht",
  "key7": "4cYVAhxRy95Zgt4EagR6uQQAmL4xsBNfzm3hhfm4s3mhjPsRWN7J9rXYuVcySJGRRpCrU5hkqPnAVtLbfQ5yyVGG",
  "key8": "4rXht211WSXuLsxh93kqMrBJKHUGDSLv91Lmm4oTgXHfkpd6a2RGvM56t7WVgTLNeKsmHyc7h9MA8MMaspy4WM8z",
  "key9": "2RRt3DPseGJPU3RagCXBTdB27SfPDRpSVAoKD82rgZhQJ7HmCqhJntTpHVT3zNsMSrkwgofFG2E8Ym9wZpTofB9G",
  "key10": "3u2zNx5yNpdZGVe5kVpb6AnxasWHnjpQPMi3kCtkogYKiu62Tptkuu7UEPMKsKQHcoonkSn3cmnFpKxZnvD7ZU4C",
  "key11": "ZpMgNk9ZNJtVYarCD3M9odFEqoYpPF7VVA3nDkUczm4FuQeEQZ1osZRZEditLgYfRE3yAijaMpUqjoCFt8V3fuK",
  "key12": "4KCGGuf6qYL44ZSHSkM2QcMGjX73U4UpgPjowBAy45KLPcCWaeiynZkfUDApDkoNaKawxGsqLAW4PEC2fmsqByy2",
  "key13": "UYp7dXVUQhC5iEsWCAZoaEM4RZyTvo8mVd1T9bmNg5qzX2nUKSrC16uQuvxzuooT36kHybobqcgVYkTGFCBDvuP",
  "key14": "wquJrdo5639iGUWGQ9fcD9Ln7yrKauDXEPb7s2tnE8fHEzWhAvPFFbwEnqdXR6APK6SNZ5nqgTgJw5R8xk3j46a",
  "key15": "5gE3eEBTxx9Rfxf8DYiX5LFghC7j4sngoYrt7UmSQgvpwntddmuyB5s12bhJD1j2USrwAmRtGuBqVPwYCGMnjKSW",
  "key16": "QswyGgtqsaMeDjJJQACoxiNqJ6fhCrP5AEcaNYoYzjXizwxLFAnT5uKaheZqcPMnDkdnqAqc7os4o9AFf1n2U7H",
  "key17": "5uvdHu89k6t7xZowSdkjrNLsazV8zQy7n27sgdNJWsWrx1vGFjgZkcJ7jvUJ1bgZFb4waJBgxheLvLR7YvHT9SsG",
  "key18": "Ta5SDphJgDVNRgvAgKkViHvrqtQZLVC7eQZjUqEREuS5GJzGkMuPCx18vGBCWovMAQ1ZftdK42fDxDegNqZBik1",
  "key19": "2pn9U14DeSxE1Y69QtnLXmeznmDCk887Zb8MLW9PUM6rg2iRBLiEmgwKrVwQ8mtwUuV3UqAhqN9m94zsMBXLNQ7C",
  "key20": "JxP5aw1aVEJCA27wNo6CDL4KLDKc9tyYjRE5UPkufXA1g4zEWZ8SF3k4PBxXLDsFqcfExwoZh7Uv78prNTNGnDQ",
  "key21": "rSx3NRJTwFQAAH4reCG1GwdXZ3tZoaJDRKpw9aFaUQdgm9yWTDP9ZWp88Y5t2h1ChxxMmPWCTCxTmGFvpkfdFCu",
  "key22": "3Y374We9qyztNwRXLRgJkcjHP5qGdkRAAfK98ayA7UM63xcCZhfZmNkRogMWWkq7UdiyrCs2mGxEahMtVv5jmK1s",
  "key23": "5m3pEuFKTvgb8Q63YQL1AXhLEAe2vzUWm9f5D7fbswGiQnvB7CmvXTnfBhNHC88VqLdW2u5kMJxd3etoSNvKQRv8",
  "key24": "p2dekQsRnEpXSG82qSA7CMbWedKmeGL483J1VQm6ac7s3wxVYxmX2dqKLvJutC2rbKRwZZjhjoCGWXytcVGsN6T",
  "key25": "5XnVfUdhU64acDwxXfKSWZ7mhdg1UPN5BBKknYJ2S9DC6tUQZuhyKFewNsvoPiLhMorjGfYgYRqBKc31bVAv3WaY",
  "key26": "5aSpEM2iwB26dJuKnCDzdHSALL2JpAijZWHQN3gHZmXxXoq98jydo7iEX5ijtJmc5Mqnk3HQuuDiejzs2La1YKyG",
  "key27": "5fQkQ9bbJMRd5Lbt7EQaGrZbdWw1gTB5xVy82YMNtaAYcCZDwq1iY8K9bkbnXUhc3PXQkdGNbky7ACr4KZt94mL9",
  "key28": "52FQJFucrsFLrPKEnKxJad9DZYuCMuEScPV1eBfzBdsFYzmDEh38L7AomhAp1JnAPUWUJzKdetuj6ifRzbCTxuKX",
  "key29": "2cxSvkVie94s3MFxaCTZ1ipXujhDSRzjWF6NtxCsfmmuPrZCrWHpJMyJEYq1uoPEMvArf6AA6comV52nAt9k5mFV",
  "key30": "4hPR3117oG4bxsn5M2NMd8E7zsrFrLNaAdKSbo4UqAXzPHeVhiSpmofsAdPk3aUcVqcUjcme4REhMb6o9FWTvGnN",
  "key31": "5fM7WgRzKvAYgcW4rVfBkommVZGi2Dt9Uikzq8kTDAnBsWsnCmDWEKVsJ3GbufiCvi7opSmK5623HnzLZN7bAfzD",
  "key32": "64XE8vfoubQs7vjUCH9jFwEZzTvXRhjaj2yYnB3ubhkxUv2VzYM9PzFEFXfo8w9HEwcuTgXHok5iSmRqmhFwkMT4"
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
