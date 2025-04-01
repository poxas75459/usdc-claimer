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
    "3kiwEyf3xYmFUBZxZQj4FCBK5Jsip2XX3eREq6oy9gHhLEQHF8za9H7EH4QxkLEPuRLymVS4cDbXxJLxGa9rrUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SoSN2aieDbjGpHT2JU85DL3St45wvyreN6LGLMhrb9Vo3WpFrAdGB56WKmFUutu3ZLbm37yRp11tEk5SCfdGq2k",
  "key1": "5J4cq46fbhrbLi5mJr93UvHc6puw9TmbedrvbHBeh7GkFW4AzFbP2iUvbWGaaX4t6w7Lv7cQyZ4maAZrWJ5Rf5YF",
  "key2": "bJuDWyvz9WGNdp5ynLhFq986pmUkVaSS67pAuBviJYXP8SRggbd11TMj8WthsSV2ystL2WkuYQFZPCjo7GP23uF",
  "key3": "23GLfXg5Qz4JkhvNC6THewJYGFcvXeviNwYm9PaEeKYK7FSrc9eQ7n7httvmrXw64YsvpJm1WmoNCMuFwn6j51sU",
  "key4": "3R9fjQbAdKKXWfFNL77rF8MavyLFBUDxE9cp4eyeWS9PgPSLzvfgh6BtegZxjhQcmBb4uneB9rdzrx4eQGC7Kjyh",
  "key5": "5tci2NBMq7j1c9LPCjTZSWDHL9smxgyeiQoj8pRHXBka6vXYUKYCtaK8kRmuHN5jMBjJ6NCpf2oRQv129L9MS4KY",
  "key6": "3KTnWShFv5hQ3tvPqVbTdg85CvDrTeRcuW5XQVwMFDV4iWNFuenw5nbFqUTg4JZyDpHcTWJSPANHaFpkVFj8yMTb",
  "key7": "5Ss6CxsiGvN15RRuzrjTjWPkXeTJFfPesHZCZhyR3RqfNbrZB7M6gt7EXJEsEgNavaxn1KHRg6cSSF6HHhA9xgxE",
  "key8": "5u4ZbErLtXxLD6wb1AernfEsJ9ds71WoGGAaTcb9nXeSRcrJLcq94FiVbKvmmYXg5pMaYYrteir6kKttahuQ4u9w",
  "key9": "3bNq5aPKvcTKkwa89B4FSb325LdcFkBBga4AqAebcvsMTKWPUHf8VKQvb6TXUr5zL6PjJu4WoSTL4ExjAng9iSVx",
  "key10": "4E4Q9KH5JtJm3PA7aR8pYVaW6UrqzJprYEHGLEZcDELWb5H2dYvYsVbUYM4YSaK2JyNVYPSdY1APz3jzv5KVSG7v",
  "key11": "5GKn6MvgFxYgnyzTBgDFRNDTj1QsTzGPD3cdvJZr6EmWuu1wXAwCRSUEfa5yvkHBVQesVU73Q46stU6dkSpHS5kD",
  "key12": "36WyW2ZhnT5kCxwaf5z55EMXYEQmX4RzJg2Yua1pPCXKN8DnfdMdrBWPMyk2YduoApiUQqmsTFK88GmanYZJV61U",
  "key13": "27Zv3jQY43JUsCiUF8RcDgX7sRScmH4H9fMnhJy2zndG7zGcARRPEF6JejzH4xr1XAQAdfE65QZpLAbrxdxCd4Z5",
  "key14": "uqE42Vi9MXVzLDhz6jrLHewQPoUfQ8FpsGWKJAoQ3wGwcgYEbfGMqao8Eiv3yRQZYnFV2LqdVqwwfebD88DGRVK",
  "key15": "4wZxe4iVngfp98BAj4H7S8NRdoQ6CEvzWAgFauYkhX8EnRosKiy8EEXevymotJ7jqTmdiZy4pGJSwGzZTKk5Npy8",
  "key16": "u22x3zsNN7uZvKCpxgMBhAqs4St58Er2EKEzXQaoW2S7CZXwm1qG6KZTfywxbC2fF9cEWK28RQBTuCigPWF5676",
  "key17": "2G2nvVcTwh2zydY3nmoaHDkBxFkdpEi3EmbN4paLDHm28ovEnimC5V8tmLD5NF85ReuQpxyHsn7tacDSSW2aFesP",
  "key18": "YyZsSYbPSEgdGBKJDN1EV1Dtb4oGBZVSausi2zwpTnBVTiZKKjeRQos4Hts3VA6cDYGcGw8uCq4Qmy6Ayu24cN9",
  "key19": "Pf5PbdXFVCuJrXXtqkeHEXvZzzHYW3Gm7BYJ4bz8CDNaMv6Qy4ToeWmp2NPjTCHT3GxthgDTZf6Dwgxpm6GPJTj",
  "key20": "29QqU9yPE5qeVApTEtN6H6Pz2E8vBW1Cnrf23ecHYCKviYaZLee84vbjyzFHiQTzU9N8Jxv4U2f896Ss3x4XDPxb",
  "key21": "4prcz8fdLP51wfFeL2JsZGrTzVQrMA72JhxLib6UHyN4U79MQvdf4MquQ2vrwqsjEpfPpajAbFsbwEWvSzinJrkB",
  "key22": "5akG282RJXXrVrwvHexGUYHxHDq2rSGd7ZL61N416sWK2rDfc7NkHVjWwnUsivWxaUJLrWNW8BPnkDkmiuxgKZXg",
  "key23": "pAHejeFwcLyfLXxHXVS5bZQidDhTp8MAZ7tp5Rxj5bjKtJLvwbNMyPY7n8atKCMYc6b8y4XR7jYVrhFqhGe6gbD",
  "key24": "3QQtGDyJqVu3L7ZogW2EXBjVZzkVMjdRMtqWHkJR2mqcQXE8HfPoPcrvazKnmTZrqKMqp4b31SVtvQbfvn4964Ao",
  "key25": "3shYYHsFdi9LGiWKuwKxfD928GgZjEeG9m3SskxU2Zr5TG8hrr4BreZRM4HmQtKshSg1Tiz8w7LQM1hiySvwPray",
  "key26": "29YfukLtX29CCZv5bYSg6NtpnbqztaTFntCdbwx5bgoXumfXHwRZDuhEbQvnxLwaur2UQyTuThvyQr5AfXc2pYVN",
  "key27": "6fZB6Jwe7DNKyMkkZQAv2fVpBgKhnrG8aQqYqY115ouLXnyPeJJ8L9DCKVDGbaryidxixhjmo2Lug3pyPVGMAXa",
  "key28": "66En7GTKciCd5CcgiaguoX5kyi5ZqMGLtd2gBzCazE4zFDdwaSiy1sSkMzij7T4SsooHPS15LvV6msy8TNfazfKb",
  "key29": "5GAQMH5mub9nGaeY3Y3bjtUHp232R7fHY6P3rHTMHLnFZHz7tnE2B59nRopaYHpNS4UveLMjr3dNNj8TKJqn6ST4",
  "key30": "3w7otXhvRwUwRxvx5QAjaXNCc8cda1CWpWoT69Gi4Wpmq36SU7GeZovEEGsYkpsmeGt4vNC9CApux9Fewip8P6gt",
  "key31": "4AYTBBE5JJcd3wieSASZSDHyn3DbMx6da8nJHydG8ogZCd8JBRxNRjqr1jompAaZ3t6mgCDsE4PQEj3mAtcuPTUF",
  "key32": "uf9zBg9npaFpGtF2JFxsZU45DhoMRPruiWQidCNRd4Zqfp6DEDKatg85MozzKbkPtYDoHvwKy3j6MJ8XBpXNVPf"
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
