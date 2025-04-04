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
    "4cp7yQcFyKPWVUAp91suJewMgK8SgN6i4BjHsPeLwwDd7iCM4YWcj4YS7hwGyagcAfkWbqrB2gJodZtHgL4JoSDn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rjJqQ9azeyaug7azGNEvV5PMEvrSEG14a33WncGHAyhAg2VtUj4X2WYqHPWvRfwTcUgt5Cvaxmkn1y63s9nenqW",
  "key1": "KV97p4xfrZxfAqwaLW15cRU6F9ZYAtDwLpRmRzTAxeKKRZQFow5y5eMvk4AEhRsq79pm5ohhfvSRgm5qgWC3twu",
  "key2": "Fkh46CNs62TQUvmpTxm2kP6HGPAQQPKjC9cAPYTtX38ghHWVTiEJJ1Dfq2MDGaEZCNa3kfoxX4JNkdrTJ5upiBc",
  "key3": "54HBfdGCDW7FYB8sFoQqLsQa3S1wMzuSFhQbiivfK3GNJJQWzGCGEa7wSKjfdCgEVg3KJcypRmA36aFsM8PbfRMQ",
  "key4": "5xW3K7aebCvMTbs6bs27pcjsR9xfvSYws85WeqydWQ4pEhuy4oQSxMHPVsNMvWs9pDb7XbvqFGTcKJGHT985CkSn",
  "key5": "5S4ZWgUQnLtgvBiYonEE83o5STupfFQkriWTrPH47TXwjb3kLcCVZw8xcVkiKbTaG97Q2LrqznUxACEwMF4BRoyF",
  "key6": "qVGPpcqogkPx2WVqEQCGfdan7t42poNSDNggmgRvMnq2ymroDHrqyzcJAArKnVTo9BwyBuhYvH7xTM9dHc48AX1",
  "key7": "531L2D4BjShwmQt4fKh1aT3mSJdpHmZBqzBmoJxkwqYcWHzNUCajoDkSGHEyjmpjgWy9a9BCRrCLPGbRniJoWkGZ",
  "key8": "KEEYfAhyPJLurkC5vYRgaCM7YXbHcDErV5hRgPTCAjKdAHcumAiR4oVSXHa25cHpo3GEk95UmUAkGiRbf989e82",
  "key9": "3fyGZ8rrQf7TrxMtzwgKBi1u3Dd6WJ5e2AYdH55M7vXDwAR3V32fmHEn5RDkTKxhQWuqPBZZuzLRAc8t1T3SbJQX",
  "key10": "5i77e42uaJnF3WXBLjMS11ux1Ubf1e1ZwypqY63b33FKisuFTXcwETzf5cMqXejQUFPSiEirKyJB9X1n12JXZETX",
  "key11": "2i8kjHqH42irVzcK9wpXj6qvL4JVRAjC7Dbi572zsgpm51cdbG7oyBkWWfguapwP4L6EjjwknYZuVYeo4r5RncsK",
  "key12": "igF4YxFqkmF6V1UTAcGzJobAgN1K47sRdcqtTBG9V8T8zUgcxvPFRk9UVMRWgdREDX3wC9EFBRHJZaPEmRnnj3z",
  "key13": "27M8cnP6iDYpprEdg9JemjStcBSyvmQ14cDjRMiYxyeFVHVNgHUxa6WZ1VZ82fhZWAjryg2Wfw4jUJeST6hi1Xoo",
  "key14": "4NMorCi9LFm44jT7i5NMs8EXpuNnm89tVzA2AqNi6fNnb1sXLn99NSgboq6FFKpJecdF87434KpbUjL1RHz1rCUu",
  "key15": "3b4ALVVA1fY3NkeTNsV2CYAzzgqswtisTduxKyP18uuXTYKikHJWvFtCpaWNsiju1kSo9NZzu99JWBC7hk77pngg",
  "key16": "26E1g5kzyfReGp3kR46TXpFghrZsGhXwK5xoDN1Xt34dVr114avkCAxeqXDiMDeJtfAkfHY5hPDdJhMPrSYb4qq6",
  "key17": "4NmvCgLL3gFdFawiUoTjY4E3MAMnyym8PokoWqCKKFErryDUp8MAcBVLFBrXxE65Zda9NCG3aVuWVp4JKkjXfchB",
  "key18": "5CW3n7qECU5y1akLoWva1CZyHvUvmghT7db8xLLyWQZZ2YVaWSjoAUimfr9819JghQpTfvVbRPbc19xxLjxn3aTD",
  "key19": "24NU5XbnmtfrRwhxCAjLGvVhzD1hBCAjPZni4Codsgtu5KjRG3ngbqup8QM8hTRxBcL1L7ZWceEhqGgYf4NTyH4x",
  "key20": "3QmYHr8N6gqEEi8jLSmpHGiwKRz4qP2rqgX2fpk2x3fqxQ9ECP6aQhz6frNChyp7NrpgjGMVbUUSoyWRJYKmqZcm",
  "key21": "3Qm1u1eSEUo6NLDKzX8CZA5xXwn56MbvDoerZfWb6fMJEgaiwEMURVRhc85JPucX51aq4gb22nzKnUq7htZpmcgN",
  "key22": "3s2k7puzMcMw3XjxL24gZoQZutngwD3KsQ9YuAEHHxScHjaVN88H4YExrcTRoUbfvcAd35FVAA2SusMDHTxiom4a",
  "key23": "2ZQ5xHLrZR5kH42Q4Ln9CteLT3JuiixsEowvvUfPhMPi63STEgwhwPBYLNpB5qE4DqJWjdvqwMRxXniGPiij3PC8",
  "key24": "4BjSiAadGQT2qq6iCp6GC3YFfWbHRFvp8DjHmADsHSVxthWq2YZZBFwqTdgh6PY997jp2DJUHZnnxU3PTZdyAowm",
  "key25": "4G4HEfTGFm8JhVZ3pV6NPGeDQLLWuCNvnHeA5H33DH5HY3upDyTWaYfYttVcfv2mQXJXYyTc71TNbNNYUcPZ5neU",
  "key26": "2BdpRBZx27nSxWhvMXiGA9rvGXkuppU5CRhdv8T76ogYKsojCudjdiA1ueqM2H8ZKfXfRHx5D2teutWGGDHwkywE",
  "key27": "5RrsjxhGQLmwoivkJpkLszeFw9XYUrkQBP3NDWSZ6h3xgHfykvUyoNdxpJnfrf8bzpNMWsqsq53cgB2eRbH8tQax",
  "key28": "2y5ut4z57ccq9zmhZc4odgpXcHK6qcSzsjg8FsatKx4SF4xzEG5ShjHa9MJ1jEfzkJARAB6R2oie55qYsXbr2tbi",
  "key29": "67CEbX46hqfGrZ9dh8f2BYn6WwLcjKvs49z8MeTE6p1Enh7Lyy52iJMfQJBQh11GWPiSz6KdKkrcCEtQLhYZ8nW4",
  "key30": "5VfQ9BxxJXWo2x45VPgAFVSYNnFhyqMB89jvBKpbQNsfU9ZLc49t77jNT49kweM5oKS9BZjkfxHHWVkChVcrNqyx",
  "key31": "351ueG3HPYwFJ36Aver7SWaFftiJMdcPCGvEgqWk7cXfissVN4xBpWdwGEX9NcLJqZRL3tCoPbbisuf5zSigbxnB",
  "key32": "4rRmPwqWN914p2UMr8rjXPGJQ5vg8T3T2XeNBGQDVctumqTZFip1AbM7eFQecqAtC4EcPmGCuu4qnXAw4LzaPJXF",
  "key33": "4TsUcw27TF96TfAoFK6BuT7o5jkwJkpuxc7WatqHzbHPrCE1PbpyEycxTLyM6KK9WkKuTFCceXiWH7n438vMTDbC",
  "key34": "3LUobNVKoVmrFtnZxttC3Pf18LFhnnxSLEv1mT4xE5fvPY1JofbM6KVt3Q3KfLPxoX6AGcway6EWDcBoEiXi3nMS",
  "key35": "5fy1V4mPjsBU6G7kqCfwZpKxhaZmKZVeipyFQGYPwWCUYjRRV5j9UtYnhcJyL7ceGyQCaQCmZuWPEtYD1wF2Bf3u",
  "key36": "5XoP4xNFj8FcqLe4YA8c1gZRkE15GkRxfeQdkmbsYru59MeUDfrBgbmvPupXasE6Eg8Y3bnQU5DaqYqb7MwL8vog",
  "key37": "3XkV6ghRsUD1CQ9ZvXsVdUjpEBa3hLFAAZg2qgw4sEjsTAjNvqHzEx8ENLchsVhdhRfTtTW5gd7TijkMq1JePfkt",
  "key38": "3MCYcvLvM9TocTdXn7WJuuMcy88yLYQCBPSqkJQDkB6QSa2HeBFZxXRLFhCdh6a3qUuUEwX1gS8CZcXU1xfkYAf",
  "key39": "5PgPm2W73WecEorywyDmbdjD6f9wDSP37cvQnXDCeqxiWDv6MhQBnw4KyYYKjsS2TL9d8YEfyBQkoM3JZ3RmjhhV",
  "key40": "3Xrke6hgYkymYpTXybi3zrg1eWMafFwHxeChHUfxQ15tVrLyThurp7YEVe1cL6BmYtx2YxyBvj8TnJgLZaBuqDRR",
  "key41": "2hq8hBsS7ciJaaiii79BwMQayzof7Vw1tEFK4io7VvZkjRZWyYWgLDJN9pV7mVjWt5YmG8PGL7Y8bJR8kHhJQfNy",
  "key42": "jtXK25g4aPXHNoWaBFV6jP56RWkEaiA5np33TRCHv2hTmagT2DZzBbfXUhPCxeSGXud9DWNRCJKKdfjFQBbCt5o",
  "key43": "2LiWAJK7cB4wAdENz4xpYMdDSavkRHQhgMKUatfoLx5tXBmgSqYUPyZHYaW4HPDCoKHyTf1MDMueuLUqCa5WBtzi",
  "key44": "3Rnmejy3BEFKfisscYdqCxzbiP2sb8XxTo7RYCS79GZGerQ6K2cctESim9vaoo3WKXPGyBXpBTiUzA668Fzn4Yhx",
  "key45": "3Q1eZvpRBsk6rjWz8xZaq4g9ey616AuiJFNffibNwPbzZHff3cSbQ2osQqZqiujdnfMo6PXhQhW6M5wjMxsRDyqP"
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
