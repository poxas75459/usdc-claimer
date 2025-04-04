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
    "5Cv7efjQWZTWkzwJLtifBXo9YnEJ4ETmz93yNDqvyn3MR5BXYvfSktqsQBdYYfy5B9VVfejX2reGuKcvuGreD93R"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65TdbqjVch6Xk9kFWXLXA2rpVC9VaryJfZcf2K2bZkjWKhAbJEmnmVojNes6KmZonk7sVBWffEzXGkusKJdGC89M",
  "key1": "3xymdbY5b2gUcwmt4VPcSACHAjW9o2K5Vtwy5ugBcLTBXcB29s42YVXJM3zR3cz7PzqSWgWwQz7T7szSX7Eyiwgd",
  "key2": "5ohPrdTin74FHbFX1Ay91M8CBJtFPpHYaLeWdfkYndjdW6o5stqR9187pfwdQ9h5CFRF3B8DsSR2wgh2mQAM3yFf",
  "key3": "3Ubtw2EYAZQsanh1qrscW9BhjSgKeHXAs45oq3hkCBJM1WLCv3B2ipjMYsLfvtCoNttZir9ABK7bFQdMdcCVK4az",
  "key4": "juttHXwTSWcaKnffrSHpedfrTr7zMafp8WgtF3We4t3b5L7Z2Xe2WJerZdWqnpXymNdTtqvnaWpQt4quG5PvRwL",
  "key5": "4xEtNhuhmytYkLKca4LKUhTQNAmSDctvrBivoMnaUrVvgZyy3jNeoJW1VtUW2jfXpvgsWeHpVQHx5newFo1edsYC",
  "key6": "36J69ojv8LCb4BsKk86Tue947xEWgdA6BwU9tqFsG98bpKJbnSRfNEYqWu8Y4suSWBrJSzHjLMPzqCkqRUrvzUQy",
  "key7": "1E4nv4dgSvuSPrwVBxwtQUaaL7ukMntRUmj2j9wRyzfgEXCmQ6P2HkwYqf3dt7FUNxYcuyspMpEyqTeWHLaVEHj",
  "key8": "631Yu3jW2oaJN5BMSa57r68jds3xUUrSukqRSKBqa3BgP98mGWgbCkhvGKMGj6kHcQFBHkKvMQmcB4W3Gk4KaE76",
  "key9": "2sGqKF2kJC4iMR8ZWWWafKBL166Hos9WGq4e27jMBUqnp3DPEdrCHsQeY8ys2V33GXZe61KorahmNpGtqjpKJMnU",
  "key10": "4cTBfLXRKHFDGaiz5GA3qhH7Xj7Xo2XKxcMFMtKdDynqH2cKFxB4AEiYbWwKdg3KM76eaqp3McN3bTxUu5gA7uzz",
  "key11": "3AixdV3xhCFcMj18bd8u2ckCxxefcsWSzwQEqZS5mXk8EKVgtQNRu7oiS4Xi24pTTcUv1aURMkQsMfC1gMM8pLFP",
  "key12": "5x9uCEJ9MQYFjFc9PkuDHiZCqqwLXJSXymoN6WbDR5qz8MG1YhWZS5V6LqCTknQxQSeYkgZVx9KnMJyp4A2iPQhW",
  "key13": "3DkeogmhqNyEeMsjTPrWroAUTSAZXvSxwFCtfFCVdSMRM7Kjmm1Mi48j9LYssUP4MY6XYui2w4xGr1bcSpdSgnk8",
  "key14": "4VUEWxuoZW9jZgGGrv8aiSQQZUNXtFWrSR4mTmPfJxfKir9MmwPTPBFqXL9UweJ6RQYDhvtY9Go5cs9XFZ7Ydr3N",
  "key15": "67EzQT6obRD3xiUeZ5G8AfhjrcqfZ7hP99gqx7TLhceeGNcjA85uE8wCKQ4YbAbe3h3AvxoUiv1yMitgx8R3jfeN",
  "key16": "4Pw3jj4RJo4BUq2Wd37twcPFCjyYEVqgzugJFx6YDfmKz2CZ6pJk9YnYc55q8h4h6z521QGLURG5tc2m9wt215pZ",
  "key17": "5fyHMyKN5ML5LS73NoQUq18pDLqCRimfSNvS9PNKNGA9U2FDzet5PFCtEgq18xseDgqR9JcPNSrjhUeFcreHqo9u",
  "key18": "3x5ZQ8nNXp3ABvUaBMXbzE4gyShzxE7Z5tYro9QBSZfv1VaRuSyzhy6h6Zt18quwKCs8EsbcoQun9DvjntTnoAqA",
  "key19": "3Y9tiAHUczG9hNuyHTP6L4jpsfAva23EUiKCqAwchJXgkR9Ea31TnoMG61uSbcUMQfrY9NWE5ALzorqb6XXoBrQa",
  "key20": "rNTW2JJ5miuDWzMS4ZFbqPKiuuKYv6KUkwkcsrU7wHsAAgPqeLmPYuTMGa9WCoEfmdy27JW8nRREHsR8dJARQFZ",
  "key21": "5tTjT5cpjp7jTkm6nJPCbiNDnsLppib8TYwESpuqkGQUmhVRMTh1YwphgLHtqqmtmZMCCvhZUaaR3egsS2TchSpd",
  "key22": "5ZUu5V4gYHjQUWdrYvHZwXbMkS2MdWMouvN4xEcxcuib1ht9rtVDz1FYq3735GnPhARSRZnYM8NYFq4YjvmxHQom",
  "key23": "67b4snX4tmnzoydR28WeeZJ9hM22vHRNtfNfj22qu7GX6DNwvoLRxEyULXyyCR1sjo6z7Yox7bWY32iGCT5GKAq3",
  "key24": "4Q3v8gDJsccYUfH2o5nH9pUMXwsy4ksSjDX3TTWPaeU6GJWK4cm3qTjhBYhfVGBQVdqN5Nj8r618LqiL4XWcrBqa",
  "key25": "5YWPbbnNpEqkao3QZtViwgyrvVbnKy4Y5mcdBiesZJAG2iNe4LW8EVjAY7jHAKsR4CkydtiWbtPBWvGUy4viw33X",
  "key26": "2XuioEsv97Q42FH14QRj9WNzq5ALdcAB384uiEkLTW2rKH7z9Xfe7H9pEhZfEes2SD6UZrL9KBtcY4JvvUCggSn8",
  "key27": "5Ctke2amKx3Xbef3G1fj5RGicYRUgM3VKWToM4aX3pS24Hgq9WGdFoTu5XHjM9WimVenTKAWp6TcPQR7PCgwmbEv",
  "key28": "45NTYSYgjKrRdtwHLKsQSeNLcCaSM2YrwNHQ4wjJZGdnk9Ks9swYCSCyoAWvHRVqnxAt1CtrtTgs6B4PsMM1NUGC",
  "key29": "2jJ9Du62XnYTjqYzc2ZaergpneRwubKsczJPaZVVUxG573AgkeoSw59MSrYHHEquWjYivpgXRn9mw8Eyo6VjbsU6",
  "key30": "5akzDCbtBDUf73eut37YYXRM67o7W7ZkQsmtfsmqjZoaM7kvLu6EqirDyMsG8oqdcH4pJkcDhxeM7fL2bz28oXBy",
  "key31": "24cPsnkGahmUA4vyXkoTM83S1oBbVYxk6Bmejr3tBB1r6W2D93LULmP2gZBvhs7V3RUe9d6dFKqx5UH4H4LmhDKR",
  "key32": "2zRuWZdMb8qaz5LBdx1xH2bx1xTZ3MCLYoS5hNWLrx97ydd2NJCuUQsHZZoXW6iWkq52zCdJtFkjP3NTDHuDdF84",
  "key33": "5wjtENJSwZoHQZ8MZtWMoVFgrjqZ4e1mjNXeSTWUfMCmhRKFxLr69MypDAq8rUM46sDw1d3smo2n5iwhnztFUb3u",
  "key34": "4CKB1XcmZsVnc9MY7EaLpPMXKsp3dCo6Lrj4V5Xb9obDhDer4AopRUR5ZW8Ly7J63zqFrjyeNW4EZnZaK13Ymcuj",
  "key35": "2bmc3BW2pdrgSPEHSuFFadcZrtyMFqQjJcXS3nH3YYZs3993HLGUywyTHqvws6ggRdeUQ7UHUfT9DfGzCpgCcXk4"
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
