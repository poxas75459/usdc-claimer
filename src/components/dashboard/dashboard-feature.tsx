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
    "x8sRwF3jemkTjngQaSSsYTW4boQDaK5ARKkuf9Va3ZnKGTLjUogt9tcxzvTuSiE2SknoL6MnAzc9K8XhY2AZ6Kk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3WGWAUevVxnpaE43mYitJWGXhMVYqVYsn63j4RbLKsV57coyujDCBSgzUbcZo5bcHFhV5xj9swNeXTvKRMLWQenh",
  "key1": "2Pn69zFHtnMfW3bztxhSCPkVZdRgD5qYv8oD7zx9ZXN1xFtYvJ86uoxbD4Lsey3wQYnSiwR9bCyinYPSLWkuwdek",
  "key2": "3KzcXSph63jc6hWjKNJNLnNgiJLG7ccm4LGoi7DAnsy1zK15pMfytfDeJGu4yVZ6KS8uru3nMVjAENeMicvXLVCM",
  "key3": "4AeFjzceNj6QRU6Qh8TCkGukdY2JE7M3TxLj362JJvjKKbWPoTqzbbG61YuhwrZ3XUmSC2nuNA2RgqjQJ9N3qVuu",
  "key4": "C3e96Mho7UuJ3RQQYqEuH8SPQo7sFFx7Bg9fnpM8PvUAtG9hW9nqqsagz4UyCNcPYRrxBADtzmzvdTCQXwemXhy",
  "key5": "2JkLPgeetwP936qvY7xZn3wGs1wNvWMrXXdKsbdiGX8dUQYc1zcLpoBs2xHoD5gf3zN2753khgVHMrZMgix4T9rj",
  "key6": "5nEUuCiAbDrvsnmAa8vsWqdSEELd1qyFEcPYaQXZtPptmfpKqk3dfy91dZn9Tw6z3PKh38k26QJVqzqpDAPLgXyE",
  "key7": "97k3gdj6xGw5o965BHQHdkacyZ4191J25mtSC1vBj8h24jGAFWfZ2hDewgLjmWVk58wzt8TM71PsRVzMCUxYExY",
  "key8": "63cxEq7iv6cWD9AuTLxzta1wnDv7CUuW6Gb5bFyoLexD88ucejhZsLu1uZw9mc2v1XE9nx7jmaqpew4QQL73C5o2",
  "key9": "2pmVBMtXw5X4EEpWBM6W9S19KPAUbaK2c5oypBWkSMn8jGJ4o7NzJ6JNKsgzwCoePYFjb268Fen9FQZ7a8uWZ7f1",
  "key10": "65WRuRKkiTP4aDQ5kBrkxGBWSQzG8QapFbMjw52CCJaqWDPoSHHBaRvvtwKQox3C1SYKca1Q4jndRgLGB4C66eMV",
  "key11": "4uGq3vpy32xyUzF4qGh5XjxjsByTmHHZqPeDHw4b6FBXY9CUiwuDm15NKLKX9sEqUCg69biEqEtFYDULPjtfM6XC",
  "key12": "qGyXoVW2EkkST4jDgk9WequuN9qPBowrqV1NFW8xHGzRh9ujQAX9eoAgfcrQFspdcSvYGV9RpBMuCgXJLkVMBSL",
  "key13": "3wQXjZ5dYcZErNoWmEjBKVRe9nmztN5zu21fRBxttzVgnQRz8jz4a41yZEvMoPqeJYxFSiLf89mGc9LVedDi3e2V",
  "key14": "AzgaMM9GKVbLGC48WB3ycpXDhpYCQVHaSUQE1i6npx4HFqQNrKZzi1G2XmNYB7GXLSkCWB9CT7KLefzFsYW7TuF",
  "key15": "2LFNxE2q2FqXwUrw3ti5QHC8LDSFECdWBwWmT8hqFUEBntRkwxvCtCxsumMYvkHLptScZSKpzpRpboaY4q2J17U4",
  "key16": "2bUiNMdmTBmYAQu7UbszKWFCXZopHJxPUY8b2YogcxRGZza8FQ1TyfySqGxEvmEHe2MeUj7XqGXfQeTQWa4WaxN3",
  "key17": "3rN4tkzc2SBjju8LMth9zNVvMntsLCdxbmymQa7N3PDUwdvcfvRg2tMrcgq3paEEenE4p15buCRkiFDt7F1qfyLJ",
  "key18": "2cPdEBZXaSZY8XkjKBhLPkW6ivPnsYX5wzK2Z3Zp9JpnUyNLVikQvjkvEZJPEQmRk8xvWTTudqtZ4Bp8KtWeeDSy",
  "key19": "3WPcjTomhW5VRC2vCUZfvRZs4y9KfvcVcCACYQNvJZhCqc6SdZJLPGsM5XFEnW8JKGnrc6NqFCR7VDZfR6SaMQSY",
  "key20": "5sNpkZWd6bjRJUr2XkEMnTxbTqCHG6sv934ByGR2JzC7YEeeAAw5aKMnQrUUwytDRcovugx6BrsAoCLPRXJJxeD7",
  "key21": "4c4SoKCHHHtPUGEmsapy7ryysgNzhSo3CFja9YM8WAa52FLC3Vy5zKDexcLyJDAfxZ5tYk6wo18yoAUgfQ1JPd1U",
  "key22": "4rx5vnGybYyLM4235Y2bTgkaQ8uAVtWjQ9vkVFGAusp4EURfKSR2cub4U4LRhXsY2pnQ9riwqh29BnNaboL3e3qS",
  "key23": "4sP7xXsxWMSDiRMqTvwQkTkAvXiQn8MBAfLQ6xAs3ej8tSuctqyeEDfT8adV5zfN3kaZ3BcvuYNDNoHUphTAKgtq",
  "key24": "5SPWgSTo2vwwNJ4bXWzhRC5hL1UqBvDwAs6stfVBsZWawUeyDK3SGukLCk2MM7MuT9iBdzxN8eCMDCWTguDQ9HV4",
  "key25": "o1zt8VQcgqNvshafJpU5AvwNd9HF27gMsLwCqzJTdXNguX8R8n4k7oUeoUBTZoees8ZmdSyT8AAbYD3zqmKUnmc",
  "key26": "2fFzauwVUc7XqwSLAsMpxrc6jqfW1sZAjq9je2Q3ttNKbLsk9R5X2bkf1BwSGppY8nF9NxpTZo2L4GxxtjSSEk4z",
  "key27": "d6nDfYuX9JWcFwsYic2ceAesenvPij3YbqSPZoDVETZgiWFSu5RPUL8CFBtLBaxSKqpdXYEohPJaQcLC8GSVqb4",
  "key28": "4hL1NePqTAHdsYNma6onxSSWoedgqaFM2UsrKtiVJvxdXQm3xaCEzCkaBCVY7P6mBL38BY6W2TmraY8ube7bmjRZ",
  "key29": "5sZUdDm7V7aPGZpV4EkRa29SXEShe4VkXn8UWfYvjXrVwRUgJjPtTres7M8p8Y7pLaVpxJ5UNxrQ46FgKty63CHW",
  "key30": "Lu2STGGjtZyk757cuho5JULi2GCDBU7hqYWUW1hs5ShhcUozg2caejZ1U9GnHji921qjXTu2F4SXemm36zUYujm",
  "key31": "5ZpunbFRsjSDvLoucKPwcCCCUv3Zxe89ps54zcSK41JzPWRNyGnTzBGpHTmkZCaYBoUyYyNZtS7B6KbpvSnk9BEV",
  "key32": "58r4EPoxBw85df54c6SCrWbjtpNscRpAeFNwBJSDr4BdxSyKGUCbL53gCPnESpCKoL8VznqCJKS4Tc5AxgmY1VN1",
  "key33": "UuQZxGWVXTVgnq1nvtR8WMFJDWEe3e1smPNEX9cTsxCEJZm68vzpvKsGE62r5J79bbmrLUtTeZtFh6XGh5v9FtE",
  "key34": "5EsNkYneT4GZXCdQ85XiNfWCSKXzaTeNWY9f9rKsuaAsbYeDqWmg3zxkG4r9cpD6tAjDztAy9LQbBrSpHgyKcUqJ",
  "key35": "4tjGJcpCuupeXqqobcn5BakurCBwYKxDUSUyZeEj34FWycNv7Vmei6yK55wsd4nmHFArrCFiQamwWtbtyHusz9it",
  "key36": "2usncNe8sPPsmp7hSUipHUYavM7hrj8vmVXed7jwMqjARZA4q7VkRWgFYinUMokuTPPtgEGXtx4i1YLsvy6vqt2V",
  "key37": "4NfgK8aCWjsJ1sCmP9YMoFBsPQs1jCRkjgz7FiMst3LMLZKmNQ7G1VUh4PYrp818cXKYs3TxFHTVNu87JLwvTEHq",
  "key38": "3UGAg5Nv8xfCNKMktEj86uxa8hYxcNyByXvTwWxwDz8egnJd8f6dzXyAWKvGcQagKbSM7JarTBwYA2kcXS1uWAS7",
  "key39": "4CNFxKEcKYf5reuEzoywWRTL3MeuesiHTAvzDBrNHfwHTRfajSsnCYKyPbaEWUKUqNUmceMutrASg6X2b54VT8oU",
  "key40": "mgtGmpYJLv5VwktqmcLopDnUjvtuCUyYiFeidot93d8Hd2rYbzmJ5jnojDVRCYnei1hb5MsQADG7Etd9HundMmd",
  "key41": "4d1F8qDgKKDuH9pUXyYrqPrDQHU8t3eLGnGs7wvaLQr83Y1MJaSVAQU1xKMiGyMbcjDB16RsiAe5n67XVeJ3Vo1z"
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
