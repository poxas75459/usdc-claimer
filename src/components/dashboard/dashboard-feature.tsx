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
    "4DobPpoRCuHDBA5B9g7gBFXhp7cWtDiA6bpK99kry7NKT67Pwoi3KmqBq595qReA9YZmSnMLBBvUSPfapMao3XA9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZqccNU9n2suqj3Zdb8HXePCVJZnBCsFMf14pb1NJ738bHUhTi49YZr3d7EEJyyhhdZthcXNEEi2pnUDSCTBnn5v",
  "key1": "fbbf6cgR25j3E3FKXEi72s14VvwxCGPZbbX5VwSSAED8TsUPuzA2jiYGVjpG4M3eydorXgjNdZcppTmtkejopG5",
  "key2": "67ctgp6j4hYezFfw9QXnV5A652sgHUmXfnK1v2QgAyjTfNFJZj5fMzH3gKLpyCx6KY3KhCWZVASyJQEJmVnTvVYT",
  "key3": "4Z5ty3GFTNB962qGq6d7AhDAAs5kZyVShET9GkrdiBXHvFZogJNwaS6hv3BdVn4atTGqB7F3sh15aF7fBBL8spJY",
  "key4": "2sizPn9YQu916RZW7MaGxbgv3SWGBsooEG2wkbyUg9J4J35nt8Htc4X3ThRFgGrYaBhivqDbdVu4sHwb6anyVg9G",
  "key5": "2HgzXMqTVV3VpXqiQsmb4rARt2ynuiUodzFRUmj8Zsuq2dz1M2JP2WB96Po3VcH43V3C2U1ULht42NQbsvt49wEm",
  "key6": "2pHxXxUHjfvNehjsCPva9h1jHsEbxaN3WV5JrgWj73ugLZqJseYPsr5PFxzHZuHfUP1hMo8dwhAQDR3P4yU2HDAP",
  "key7": "3VjNPvmBYbCLQFyWBW3fQAHbfb7GoieT47WdrxUASmJxRHQwyYMMfaDWbqsq2rC2eL7wDG5agu4kRLWkd9BYqsqz",
  "key8": "2rPecHQxSJa9t7Qfwk1U3RavrB2sAFB7vZgV4n6wTyv6cgX8eAqiChH8SRqiWqAyQXp4UdgETqnAqK2QLcnBmxUN",
  "key9": "5PN87T6ZDktEzWkPtwiTLxHCU67NaNT9UMNU8RQBX6PgK8xc6FWT7J3JYU2tBAcypsE9WP9r248H2pu863Z1FmHW",
  "key10": "5pUxE56w5XRqid3VDhXioKq5VxX2U3adHwdR9TAcanRAAhfL3xsmyNk2wMhKoZ92UazUt8sgYpW6DGaYN84hCJHL",
  "key11": "2gH3ah8BJjk6Ns6E6TCb7wVWVc9bRmyDDCgMkU8DdaA5GqcmGwjQAcyBBtKxKFLQuaYPk3KyDrnYPmXbX58S7ZCS",
  "key12": "5NoUJGwtmFTNRsepL7UagNyUnSDM6c1NeXFmoXYThFvcpxTU6Fyryf3zKNdWEnDBduD4nCk28R2Xg3pqd4649nkK",
  "key13": "3ZobTBctyMEr1E1T3gbP78ftJQmwsu9xHknBqDNyXpaN3UehAp3g7bddmnkuGGDwFii5iPPrkmvoWN36bxooP4cS",
  "key14": "5sJc59315KLaCQuKNF7gonnmqCtnUBb8B6bEM8sUxoA3F4A3256ptM5yALBVcFF6iziMhY9J1QJpnbeYRVwre8kw",
  "key15": "3BkVF5W6W4g9WevUrikaQq1LoJJZqC76LydvhYZSY8BKJ5cHqFtrTgKsLa4cSME9BpzHz4MCLth77gTzxbKjYoLT",
  "key16": "4QPkCREvhPkfpTwY81LmmZ5jbNFquPn3uMUHU9uJzKPSLWHBw8jiomiu95V8aKsARm83vsaBww4AeNF5UobvD3Jm",
  "key17": "3tmEcp6A3s5VgjuopTfqcbPcKEgEHbcoUUStQzQSUZQ3Tnak3VA74e9NPnJoUahAbuJH7pppFkaiTGTNb54sQDMU",
  "key18": "5mgifMf29W3S2S8M9pX9iGspejKaJdXsGUtqGucy2U6uUpKWsV2K3BcMJYP2PW4P4qs8vRGuN8nLmMUBEomQ7ZLh",
  "key19": "pASqZUJTnqRLhrkFXtoaqugfhnHGmWWz8nVnVuFF4FgiJTEhj3AtAjGHuyS9tVLN4RG2XtEVv8RwtCQpyBM37xs",
  "key20": "T3qUSyAAxH8pHrHUR1HyFfCktUxdCSq4sDg1xz5cevr7PwtiiBrM4gzMQBdLUDgeUWdWxhqba3mhWSCd43PuGam",
  "key21": "4VMvw6vVFBty9dYig2aW89qegow28GDPgKP8RNr5LAjJSi1wd7t2NHZLXiwwyRa7YfVvauF7pKmo8KjiuSGpsqbZ",
  "key22": "2DUV8LYeDYb5z7owjpVp4eyjHttgYsQq6WDL7wP7D62YWNLqQmXaaqcbG3RGpbv731iB41QYQrYCj5KqoN4jVAA5",
  "key23": "3AkaBt1iJ2rF1FVCmswChAinLjN3NfxsMgmjbWSTWQ9uXfv8KvLBsa4Evk69k4xuErzKQyfsCtM9YazETi34bgwL",
  "key24": "Rn6Spzmtm2iVTixcq9Fp3BNZPeWdLjFZUiT8tLTpHz6zfExrAX1bnyqLfhjLpEPuvNpm27sZYsiFFc6fWiRV8aH",
  "key25": "zptv7PqS4tyu5KNhKSSCTzSDap9p3iZGG1ZRxc9qz5v9oAUTCviLNfA1YjDwitgG2qvofugFe7CY3uZMfcubaEi",
  "key26": "4jgpYvmwVEwXScdGo2kFkBFeRRMcpAEPSCrYZyfnnzjpxAKP2x4UbrReqfrbNNDCEqjMrmUHSMaKgh3H2q3NZGx1",
  "key27": "2fS4Kr1dgwXgtVGbvG3QaCqYTZECE6u5NSjnnRyFuLpLrkNwE4jmcnBbABsiHv8A9TjcuQcBnUV2UXjQbG3WA64h",
  "key28": "5j7pWJdbVroX3xSNojddxovZ5QVQ6kM5rmZXenBKB2aqbU2XZ4Ro23yHg64jSwiFPNwQA8ousiAfffh1go1Q33CD",
  "key29": "27aTAZXb8x84r5Xnsn6ykrAKQAesuGDPTQXx2PfZwwCJg2sLkobLjW4JGQT7tztyZMm84QWv1xvr6PiLWXkh9gir",
  "key30": "5eM4AZAgRnmLgb875kxcQJwDpvhXXkJCwy9G1t6Yqep4JPhe8UjaE78wStKcKe3Dvk5DZ1H9EhC3vFdgaJhs6Uop",
  "key31": "AnZoukh3Ghbp3t77ZEK8Wf7h37yMpzjVE4tHRDL1RKdRsumdhSZnKc7BiZAUWpgTiyfCZtHyYYFCsQ2XpQhk6vZ",
  "key32": "4V7x1JX9j3ewcNi18Njs7gFnTPkmhNHa8xaHXV4t35ZrsTyqi3mPYGEpuFSxxfkUZV92SDC2t9Txfp59ztFmaM3Q",
  "key33": "Kn2yiCbGPxqy98G2qKwimPhCqt9uswGFenafp9QnbyL3S8e8DND2shPns6fH6GyoPKtZav2swaz9SP3Jq7mQ46m",
  "key34": "5Dwv8JJh61LtbduZqbcbfMwL4MhZcXWcotQJaJFxkULdFH1gTH7csLqe1adj8T1vrjbcfYz4bZJfW4uJ4qxuoiQR",
  "key35": "2rir9MumUgr9rEjde6Wgfdpk7QYN3FDSZXRyE2fBfdkvMvV1DN6qgqKJeNqbZn7Xvb8uSZTYK9B4Lto7nKTNAeLj",
  "key36": "47yDHLa7ErjGnY9K6qSN4iMoccKycDyq6rgTL1XzRw3v89WY1PxyeG6sB55iBu7K2nbjjkBtYpxS67GLNT6AiY9W",
  "key37": "mbFo2JM1kEmMNGBC7TrojjJbkrXwA8ixCes4sP95ywiDUzhHPtWDwP75RBUmFCLHMV6x1NrdjEPpzPNoHLDfMF8",
  "key38": "3sbA6GjVCuUxJYRvoDKfc64f3DhGQWQsTKikeGNfdLkEigvQUU7wU3mpTJX8EiSPaANxPbXktwMt85VbafUexyRL",
  "key39": "5FChpXjz9tw9DLLurJmJzboiKsPxyuz3p8dVV3iGd4vFSf8q6UKruLviy69N6RAaLowkHBvzSpJCFRvt4WveoxSQ",
  "key40": "21gJ3q1SMUSQWT412QWWbbipF3ZKVTuxRhFsUL7KZXNh9LxHcJWAupT7tgyx3tsBx8ioPA4xjeFxUPYWbZ6Eknou",
  "key41": "2UYA2WMf2pLfxsXe6zBx3gKoFVqL5tJj83yMXd3w9p4pM6usKDZwPit8HVgoUmVwgF1agE2KMMwAAe8ZA827ed6D",
  "key42": "pq9Eycs7bJjsiXheT8rokgZKRjVxQYAwSTxh7CW7ykf1rMy1qddojPA2R23fpeCsSX8ha1Ez4VRJTDvEo2Q7LLt",
  "key43": "5kcNVNYxHB8YUUsvNr7izwKV3nKdKuXkQ8yuaKf2fGsAMKpmbW3v4Jo3vUpFFgowGnUKfq1MqM41pWU25xkzMTCx"
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
