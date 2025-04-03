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
    "3bEF6b8gnvTqaWBRHtMpScQe63g2jusCkoX4KGVWTTyPkJSh6fihZXmGhM3bHQcKVZGFrqXssXhSm31uAZdNEpRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ECdHvqAdRwqsfX53vyQnSpvwu47ggWj4fbjBs7saJiMFdtJCYFuTwWpG6t5MoD5c5rSUyhWgiZ84SABdndrrhqk",
  "key1": "VwKbPJgDcEPATwiqkhBFymhXNFXGGdfLJsM3x1PeTqgt1DuLPiuURLuv6VSe8ciFQHfYENJVX9sWD5UdV9d9FXp",
  "key2": "2KftoN2zfrWo3FBMNHbt3RGbypFe612akEFvizr5HQFW7phujXwXwctnpW3ipnXZmxJ4aaNHJQAPveKLnoBtPdzh",
  "key3": "4SRRR7nJTzPNrTVRENH85oAnmpDi1ajxpSKD93jAGcCPiqVEjp1e78KYK56WsnLThKUJYvGVksRiVheAYpcN4twv",
  "key4": "2UwGyJbhv1gncRgTWEnSx3EepP1Qm495edSKMp9f5mCxNm9GkzJX2zXebAgtYyaoPnHi7c7a9gZ73AvZcqyMuGCK",
  "key5": "31WawJP28JkAPj7yfqrC1KGEhignwJaMfjeF64BAqrdTdiy5YrCDH78sDdqPREwMBQt4ATfTpdGuL3LLLm8hj229",
  "key6": "tZCLatCZHjGTLpaE51nDMvB2RQncFfRvFx1HmQmVBS8pyufoADjL3pbchEuTEH8uTbntFACJXx1kFY7rFoBLv4h",
  "key7": "2XupYFpJehEtt5DYJTMaFTiQHw8JB39RdkyVtXLWDKJok3C4Wa68KFvFKouPUeArx8dfswqtRNM8CQZftq3xhTh8",
  "key8": "4YYTxDDEUKLGVfUrYkhZbHf29SGbXaD3yQjHUR38oRbrY12S5pJZTBRtPaAc98YaFxtPCBcySZ8AFBHjLqtiFLTP",
  "key9": "293kUgXamVebwBdk2UwDtLpjGhePKkb7TaRPzZHkf1okTdwEKErf3bpEfoyhnpMvfsKqcj4fni3FtCGipSjPrkHq",
  "key10": "2s6ZyLmasXSDmaWBSaD6owRpgNYcbsS546565QvAegHcjGSKXddJj2PQ4MYF5r1nFCGmXfoM5MX8ZrWR2k2dt9J2",
  "key11": "45irkj1E7vuQn6Dhf7PBXC9WCrdSHn8gVNfCh6xcddvv14MUhmRvDt8feKSoYMg6A9tJx3mqu5uUxweEdxHfNZQr",
  "key12": "5FLNv5AYaKrFgN91KwM1pmLtvEKrGJSM5Qq1urbCZcJsWGgBxCUPd3EPSofpXubZWxiSZzjXqeKDZfCDPk6q4RQx",
  "key13": "2i3iVSpAihpAWdqxBzW9n1rLWACR8A4Gdk4EpJKhw4tmXxHHvBY1GgEV9CgeHei4DT9tRDbbNAWPBFrj9ip7ce4G",
  "key14": "3sg8sftcdjCsvjaAZeaaEbhSQnS8f5RENcfM5F15bvu7MXH3Mvr7vQgLMYDgC59KLcpzKyqnvU1ZTCRyskRuLN6F",
  "key15": "atKRhwbX5D3viHcmMwj7WsxqMDju6oWkNop15DA7DyjBgGpGhu6XoC5iiCp1sPHQTVQjGETgfSt2sV2kf5gHk9B",
  "key16": "aYsnaXa3w5oMumBgMTDgq36m91AuuQdbNL2Q9BybthuUhmVU3jEhyr9UZQqN82iPESQupQZ5yJvftHpYYCWA8YB",
  "key17": "31aE2S4BADxHtfKRTSR44Snk9GtgkthsY7kKdXqSRipWhxbgoALhSYBs3Sj98dvGq5mYJUuNRrzqrC8x9weaC3Es",
  "key18": "51cHtw2jwUT9BkefG2ZKpDwf2hUEzq4vvPynWyzWV7FzWDKHssVtqWd6yLEDcBdzLsU7xeMXGdeGPZjYERaAJ7q5",
  "key19": "vETM2Bzam8jH8N4vYhcqhMHbm2HmeR4nZzM3eYpQsSm4TQFZWurM3YB3Ed2V4NTMgQ5MPB7LXP9xXMgiRNGGmPi",
  "key20": "5sYC7wjTFWRe38tYXUQb7X1EKRxY3uw9vgGubYw36wUWAKjA3YySmGkenxNjWAEnB4Q6Z8YSS9NXEUv4mnrxX8jy",
  "key21": "54fEqQNjcsm1rD1JBeBAvsAHbuLo3WEJ1kuEeShST3qDUbsVPTnkYU6QfnKY15Rz5KPARifo6xX8RaZD2vLEYrDt",
  "key22": "hnMuPyFd4cVkbvmWaXuQgQq7WfaahcY8hqeCzAqyoYw5mieeLVkCQcUtVvJpPZY3tUHqTpzdUn4Fp7ufntns4Cx",
  "key23": "24BSiGiiwR8pew4rK49EfrcnkQeEizWpsC9triQaJBHDBNxf78bNJyAJLepzSvNgEd8Tii5srAFHKCEqQEi9PK8B",
  "key24": "3AF6DDdnGHNfNCcPStRz85xV9PpVkGX5oD2qV6kiWkgesqX7FyxM5E7ZSWuEkjnngZ6LM1tKzKyAtL4Sz8acRh6r",
  "key25": "2bQbLtiEiD8DUoRUgZvUy5wVLV3iY72rp5fztJJh7qBcocAqH5qrJ91QiLWRGZUhLmGeuP8ySfqFnRZPjjMrsC4z",
  "key26": "2nwCGr1oZDauzVsMf5Mn2jbnPQTt3ewFNVaQviU5AM8dzuZr6THBR4uaC4Jie7UYL4qbHBJ2PufZPaskXzC1Nuo5",
  "key27": "PVsdCJWfVTmLyWFb1EvBRYh1dKQFvuBJV177WjX7VtVm4VHNMkpC6mJmGyQpar1cAhcrpvn29TkBSCVpRHeYNCL",
  "key28": "uBSFdN238Azw6S7UvW5tEfJkYg5c5bc3G94RgqgTpcFcfsUrEEaNVurtw33keFBzkDraH71DzxEZ5yaTR3X29X4",
  "key29": "4vYbZrSgy4Yv1mX6QQrpgq8vApAURsR17P8ZMCTD6dmQJmHr1KFkRZHBTBz29bsiWuJUgwWr8HsmUnM8PNY33oDo",
  "key30": "3MUnmuxP7vS3zeAWbNn5ugM5FL8buMzR3ZuxbjqmvKdusxHGfiQdmHi6QERgJqVWxD5x9CSJsKQoL4u6qB7TwYHq",
  "key31": "icNX6fYH73bYsThN5rvYkmYH2qFUmk8Z2XGV3xKrYp68uSPSrgK6rtLtiUyLG6DSanRza23CdRw3FrM2M2wc5YJ",
  "key32": "2frNJv2pSwo438ejuMJmkZqbjUFVn1U9ijZdeupPBZ6nKZokr14nMFX1hK16f1t1JhCWsdJcQDZ6cxy7W2i6wYoV",
  "key33": "VmdDodqmZNHVWwoQqy6Nx1CpEPAFGuMH56DvdcstxpVsCvqG2wXcLHshgskJYYpGgT6zXxuY7cPomrfDQz8GBnb",
  "key34": "2TGNeKUW7KpnivmP3p15ySZSPFozcLSqsnXWh1csb5rT9Nm43UGqcEBA4J6RdJ7VcUE1JcJs9n23udVrYhJNJPr4",
  "key35": "Jmu6E36i4XnopRKFyKvBMuVeFiq9CwvppXygtkno4TJcTpVc89jVrrwX3K8Sq4JQw7FDEfvxagGxQWPpqjbTVBW",
  "key36": "j4cgC6Deq4FatHFbjGZ77URcu2Bcx36QYRoP8dEXiY3Rug8QvwRy6WNVdzfGr4KpY7GsRwV38BCVrLq2A32NK4P",
  "key37": "2iUccNU2x7jM63XyDGy132RVrwvudQzUKvijHjF3cqSnU4uBuhq8i4QLxZisjTiSJNj2fPeabEP58M3wvjsRRZDS",
  "key38": "46rtvBpQRsTjUNM4oDyzar5ETCiucgFyn2pEFiAE1BmZNrDrEPnd2NTiLNr6iNPNRUZHQ6UzRQzUn57P3anAJP3K",
  "key39": "27T5Qr6J2u7yRw6dRSBZVYGEWz1zLuKuK2ixEQH1PYtrDDGZ5XdqFcXvLpHN9reRviaENH4AJ8E2JshoLT6krNMQ"
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
