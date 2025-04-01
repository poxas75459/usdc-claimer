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
    "4XJfAn1XKub32sc8KgvVh4y7AjgLh3QkaEnZkPmtj44LCSWdXpKGK4WHTNeiyPd18CTvQjU5SsBPNvxFNxvstkkk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5p4VMGVsfoVC5eaMKFnrpNHH2Lmx5uzxnqSVSLiaQhxDD1k6fLGmHVT638wqwhmS5MhSRaoArXYw94ai2pe9QC9i",
  "key1": "4ZiRjoSWQZhvHkKBjv1d89CobnkU5zBc5V4soNrGsTfezDt483h2cNaB2S6Pj5pWSo2ApsdLF7ijtqfwHESCke9H",
  "key2": "3nYEDYSmUfaWY5EnmDhQrt1bfDSNPQUE3iAyr3RQCSNMFdf7gpnYnUZP3RSJKw3JVD7uWD2fBhefKTG3YMw7GXF6",
  "key3": "3KJm7Nig3F1gRGjBRzJpgJohW4BqkaGKCxDARxVYjavxzEVLWyzGUNiDrodxiRKx1RTNsNCcGTyNFdnMhjHoKV4k",
  "key4": "5xeufNCSvsMyZ7WZzjoHyggM4hxYSG6UsQxZxGGsbMiNrooPoxkYem3FEKf2C3rtr94hewn1SaksuE9Pwr6RfFqp",
  "key5": "2mcwSu1LiHCxDeQJjzkXKRoNmhqYDkfGJ4bsMK7rcorXVqC7aZegy53YsexMH8nSLXPMRuJyqEsnV8DM2CCdBawe",
  "key6": "Sw4G7AFPZyCgzDcjaVzPMDmxMGxVDctdvLi225n8rFGC2W5NQyXGhgkpwfWoAaT1vXkWTK8NQWbWL8sZppHfUYQ",
  "key7": "2aPQhPWTcxkGQmB1mmvfGdUgu54VTTkc2mzjURWdquNAJVMsfPkY5NeAs3dRwM8kG3cbgxLUSSmUzJTRJJWmPSMG",
  "key8": "Y4ixCrAyy2B15TDUU3q3okjA31eTEcBeue9PdJzUZhesTwbQWiaHu28t8ENshXRHqWg4SNtHjQqTfagZ1bBrmBh",
  "key9": "2QvM4zVy854VaybzdytsRgF65wms2rJutvLBMimaFwbWi899gxt4XNLreS2xuZMcyQjHvjcTzrTrgi5qS6MyyoWs",
  "key10": "2KjuVZm7rUiVzxug1KW51nm6zcZoGAUtTLA7d71RTiLnG3oNqdnz88um7W1hXpEcRGsqPRfbFz2MDRv39Di64yf8",
  "key11": "xqCrdZVjmmHUoFxvkWbjYioa2WxN6YB1AqFEnokyAzzUuf38Zbhvi9XkDcofPtoGFZJYKe4hgtVwtTU3ZAjS9ge",
  "key12": "48ijZkhrJ4sznVgnYYcXe5vFfvhW5QyjGipS2tzFuAQnAE4oKcLbTE7oavqRuVgoCbymCWK2tCGX8wpyLYPdb5vu",
  "key13": "HnSxC3waMMJEyrkWJ3XDmNbqicqUdRa6q7TDZk2qyUwfiLEgoXwm4Q69gYeWasb6HdG7ZrJnM7wFG7TNzvsaFJY",
  "key14": "52VNbQAMyh9GjEa2oZJzQjwtgpii3FuGucunn5NyK7LsWWQGysFoYdU1EsqzoARxbpkQ63okTGGBsMEhobRz3mEA",
  "key15": "4L6X1svHHqBw9zL47Sqr9wy5DUUvoACLwizYfMrw71NVgio3BkyqQwuALocYmVmPB54fEuJ29UhTT8XCmXLDsVnq",
  "key16": "tpcZ9LBHhNg5dL4RG9j2HAwuVREE7VUg5tSmqjSu2wtgrrexubMLHEYU4Uvn3diaAsFnAMyE81hUo5YtWgGhPsH",
  "key17": "4VdSwWSnTDDgfHazpdT9endN9k3S6ATGHEyTFDzJtx4gz1Eme5gDbp5atPCruGhA1B2Fdo9bLKsRy2H3Stcc7rvz",
  "key18": "4FipPPJ5MXGPaucFiy55a47o8Krg9Sr6JW44HsGqe2WRF4DdsYqFRcuX5eUy77yZbZkTuNDafw4EXuPzh7JSUvKs",
  "key19": "3a9Gpuy6MNtuXobTC4MZfjEFD9CU41qAFmd7YW3rvF1595oG14o8ktDhoiCZQ86eonJ3jSpQ3YMDeBhA31FmGHKp",
  "key20": "3N7QhMD8G4NywoB3xmKxpYtAyqJgPMoq5cLcSVU3hbtdjwYdhchwZRz8qDfzxjAiQ9eswq9vj2AGWbV8GRfyUDJj",
  "key21": "vHNPkZxjKU2prugD1gstLuLaaPwwHcseaVz1y28WpFa3Yyizx3ipMSEuvv45naUrtBrkqVFoY3YZZtg8SpHRnmk",
  "key22": "3rTmk4L7pL96g5L1B7Z6jA6S9N4omQxuJoEny2B7bzYujSGrdQHSQjz5UAdPX9Xo2NH5iB5wWpuNx4JKMmVQ3vzA",
  "key23": "36wyPJo1nZWqkFQ5V268XoteNEUBToxmccVzfsTbw7bKiWvKmAasyPVMP8F98kRN7CZh9XAAfjGGgBQuzV9CG23w",
  "key24": "3Qh7JNNkJwp4gHf78snj3feM69ewkx9afZsDWEkLGQgGyV6tu1SKQtBdgwHrmbzH8dspTQDHLSVSPkunT6Ku7FxF",
  "key25": "31pSntDgoFLdeZ9d6msMVyDjHd98GXfdbpLN49i6TEnGHrJ6KPiS9UbD8XkxUBfrqmfY1YxDUsSc1RrcFdTaJrvS",
  "key26": "1dyt7AGnyBxn6czRpcb3zaiQns9t6Nb4VkW9xBzHEA9h95qLjtwZ9NfBvkS3MNaVfEU83vvi15S4Cszy9io7C9H",
  "key27": "3zKoW9H9PxMxD4k2FFzmdxctEE5VT7twBohXL3WwX9XhBKvqegsRjCPSMjrb333nfLwP446ttfr8eZxFpuevuRc3",
  "key28": "4auECd7zdwz47uQJSh2VSZB3sq7ochfj5XPcvBiF9Eu4n1F8wq8se5FYAoBa4UAz6xhrGLRiGyovp89jTrtScKoo",
  "key29": "3LBCNkGxDqCSQkimuwMJdS1KAuZjxoAwhMLu4zhkyFXsu3pdk2P1e4ZoVUnR5ivwcRjr5ogmVsG8zp2gPSgK5Cpo",
  "key30": "BzuvT2P6xFnPTCXXAFCJUKnJ21cnEwzLZsk6dXqzbhFG9Xyzv4kQ4muYiia6e9azV38cyxHCZ37ZPKoHfqgLJ28",
  "key31": "3ssXnEbT2VKUuiWxJ3DkUTtsa8XVQYUfvv1s419SFn1fYZWZBKrLyR6V2ByP7ZVYFodrgxNhkWLsfQMyBD8GFYyV",
  "key32": "m3cRzqENNCRNaNCYupTfz2kc2mnhkuw2xwkdA5r3ySVf9WW4xpbkFzZ7rJLSFt7zHsfA54cXQGP5RJ9HSkcgoGL",
  "key33": "224y5d9T9ddCLeoSfSgEAL7SCU4WDn3yc3F1NmQgazTNMXe1mkULxRvNrjz12Ek37Hxa9ZG4fujrJhzbkR3cBsUu",
  "key34": "5TxVVwRAtGrjwzXrXurZ8PpqK42dkfskV1ay6EDLzwe19ks7rZuUoczCbMZffjpqkKqDn3vdKqGTT8da1DSw2zio"
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
