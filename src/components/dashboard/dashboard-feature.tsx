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
    "5ArcrMfwCzKN5PoaopHdHtzUy9jt2xodYCDddKeBK2PmG2Cm4WdAVRymKjA64wcaxJQgm4swQKzmaTimd4YT2xHb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DUHE27RN3QYycmdRi6acFdJiyLc5W8QjZ6CaYba4CMLr87RPmFGSQmvWfdojT4TdH4eHTc9YH2LCZ3B2v4Awvkn",
  "key1": "4ExxDvZsuPgEuJLZjBX5ecqjJcsUTAAMzqSh1B7p4CxEwPXjny89JAvAhMcAmwACLHJRcoVW65RAbH3irNnL7Ey1",
  "key2": "4dhmn4UfD7U5Ca3gDGzd3c4YNSDy9MKBfzeTGPgAZrv69JFLyEvUMP5d3ttJkkeen1Ki7gdK7waxptktExBW8SS9",
  "key3": "BxJvLJNTDyJFx8y8G8oWwquGFxQJfcBVHKwc26sw8YLF7R5wGrBtHu6enpSQCp9m3kurtD2AKNL4sPysPF1A5tV",
  "key4": "3Zz7pn2p4CEvaHVemtX7ud8QBE8uNbGXxbWz48XTMrBpsLLkDrq55vadJAfceD7ML8c9hzFwfsFv43ZuKtvZmjMp",
  "key5": "5N3ai6miedLTmjKhUgVjiW5R7T4kAtMBsL72EAcsbug87AtBS1vzCwNXGqALbpFD5gkH8gbwpbNmbvhcQC8dVZiL",
  "key6": "5Mjd1f2TumDFaiV9fEt2MVJ4zv7r36ZaBtkxmLnk6hpD2psXaSkC1oWWMHubvDcHXALx99mMgLDHbWcDCK5vd6qX",
  "key7": "5Rj1PwYEhjrCZeZms6akgW2FQCiTujjvBgm5PkX6dTXZsKQof3xxKS9WLSQdnazJSzh2rbCTATHvEyFDR7srnonB",
  "key8": "2Jw7RLVifjQN1bRuYmXnkL5miS5myBLox4a7UcZWrQ9UiJXm6GRvVkoxA2KFmZFegPb8985Lv8mttPhf97rLfSsD",
  "key9": "5TSXQTYFmB6R9L3nwTJGceX4Ru8bzQfiDZaAiytKdoxuf5mhniPoSoWW137iQHrZuyR1SHxrJCfeNaFUYKyAiiuU",
  "key10": "h2zjMCorN9LvuYcetiQQMtXDhBBgn5ufXDNuZ4vjzKanE8tTWSZrdFVvHuuovDYmjg5BUyHqGdimyM7uhnAF8Ez",
  "key11": "5otgRDXHDYYb77hbUXZi88YefY1f2DRzf2LuUZ16co3VKgiGeJPTxvLQ3Fuxrfq8FoTzAQr5WVseYHy3ADvCtStX",
  "key12": "4PF3Emz4bNjWgU236EEyyfdswZ7gxsuMp15vQxarPUwtGDPb3vHdHjXJ3wsvbn8gw4dfgpGFj9ukTw3g71sbsZ9x",
  "key13": "4fj4e68SNLw6JxQtFFR1BxRG4VAhr5Sqsuq2U8MWtEm4C4UKUWPQzo3u36SLKznq8hjxfXGqGtWFujGD9LWmFk9N",
  "key14": "2oMb1MX1n7EFX9C2HMR6jmFHjHaMZjNVX4EshFNyQMgSKrY4uboMvG1vo86h3W36coYPnVNugEn9RZqvsKMyQ145",
  "key15": "dnSS1Howw9hSXaqN97wogeEkcccWzFPsXPrkHQ7hC3h8ZsWZ5mgaiSURMRK8yZkv8xGovNDNnPZKmYzA5eTrV1C",
  "key16": "2drJZQA2H1xBzqkKQPQEVFw557WTEAZSu1DtXSReNS4LK5TKYDi7Bf76AMoVpBeV5wbh48kQFrDH63KJxowPa7SB",
  "key17": "4PxWVwhnY9pYs5Qg6kVRCcfYPEGyvubTCZuJjNcpXSFXDbkbo4L9yKbzgichzvMoxtTMPxQizpamsJcjYodEmmmh",
  "key18": "4jA1WsDVXp9PFFrJkCGuvxL7HFsxW5awtZLkJzM6jsEEMXszdGgatBxSQ152bJxspLfCNg71AX2YmNAe5ZqpMvXk",
  "key19": "39vCVxqWKQ93pWc1epL2N1CBL6k4T4D67vTtNkqJhYBdL9UXfVM6TxN3ER2kzponPXtKc2BSxYhWe1EB5Js9Xhkm",
  "key20": "3jrM8f1iyTBpH8yVZJyocjGVrs9J7b1Yd59mRmWjA66A1hrbrY4SPCL9PU2R1Pmin8vw5L1kQZGVoS7NSugRfgXa",
  "key21": "4Gtz5Jn4yvDZ8JoqxLuq4ZKj4ySxqtn1bV3Bx2xtVcnGoMoJHMuYFy3aiymjNTS6YxQFbHcwpyWky9WAX1w9E24Y",
  "key22": "wBhpsf5xJYwhLVnURCSwMpirWQXAURucANMbnEgP3ovE9Pea3wVP531DjR7MLZe5WFH6JPAdp68jY5ar18ZyKYu",
  "key23": "3kMWvi5U5YmngmFojyvvYELALPu3qTLkR14M2Jm53SDLx9oPX4x6PDSvJ3QGbpE3a6HBti6KAXN4PesbqACeuekN",
  "key24": "4odn2e4Nn7jxmCUUh93PCmT799L9ZTaKqsg1DfaQbhRP2wcSiN9picJQi4G7b56LSFn39PDudZbRQx5yW4sbK8Nb",
  "key25": "2dt2jv5vACy63fpbthfrzohXcvcATnYs2cds4TF5RsXXMXKfK51gvwyZKuxRuhYQp8pZXKW3qNnx9Tg4a8Vgjte1",
  "key26": "3Ua6yz5rkUe1yzMrVFPjtiv4mBGSPt94UVCmM9vhr1Q3aThEbfYUXUWKP6DQ32T9u9zEuLaV2PjgZKpQWtH5gvCQ",
  "key27": "3c9cdEwnWnvvJwM5P2gqo53tSkud9tNxZWS3J7XN6WFs3dN7ZENXNgrp2CfnSJxnMZim1aWAEMsZgwe5kCJ2hswo",
  "key28": "JBs1yfrYTvw4HrUjzdKePVCmouLa7CahAcWxF9diZ4WKVcKARbsktJ5yKjMa6jePq9H65A1urrSHFD7PTMrqTS6",
  "key29": "3Xz7r8haVGePupezb9Hd3AMuuugZyVGJBRYWYNdiFsynVyynQUUN5vNC2tu7ku7pbgtD5S7q3kJH1W7h9HXEL1io",
  "key30": "2sqeRKzvVapXFE7NEEKQWkaeXS3PZYAnu1HyV41Wwae5x2SpFLVfdW7yNCWkBv4CdS1tVVNWpRSucvZPU88i1Kt2",
  "key31": "DifgFJFE2ZLQoCQuZexm5ang6uegJQwb7DyLDZdKHZ26SshjiwrdsUZ9e47wmNdFDUn6tN7VAvkNjrifCjd1tr4",
  "key32": "2gcfAUaswMM4p5pXBbe9apsqkMLqug4zGESMcxvEFiwWatS4AwJ9suX2pbXyS3nHSDssvWwD8DgmHYpQNMfgZrEk",
  "key33": "5vpP34RhfiXXihWEXEagNe1j5G8JyXR3fdZF2f1uD4AxshM2SwiM5WDgh2iSb2VVK1pv6xXHkYDnq1xrpAhyFGDm"
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
