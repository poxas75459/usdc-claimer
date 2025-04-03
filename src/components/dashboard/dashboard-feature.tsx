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
    "3Jr8sUJHPQdapygwd2sY7Jf8vkZ9bVhFP1zJtdPwfm58uoUYo8QhTZLGVwAbcmQmukUwD5XoAjK5757BSVEXADCp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21bgXERd31zJXcY3DkY1H1TdSrPBde59Ykeiff9Zg8Jsbu22Kq2EmFy5NotiWH3QgwJ4G5NxbJkDyxH5i49NPJ2p",
  "key1": "3ecv3mHJdGJajXrzD8T5MD9LWR2NK7DSpnPJ7cfmQxMPdYkSpKDruHcRqyhbUQCRnny74r9B8ASRTybUYuTwb47T",
  "key2": "5uo2Ygc4bpUHPE23U7WKb24LC4n663hoWmRzzoY91WeRCSBCy2fjJFAMDJa9Rq1kgrAarz6LZKFwS82dHWn8yNHG",
  "key3": "peWe3qHeHCbXesztKmkHzwwqQavebH3TGMcgTBXxyzYTqQ6rxQVTj2CorVJeVMRD2CZhmY3PzatkKwpfamKB8FA",
  "key4": "3C2sHspcShdNvRo8yzkarCwvCtFGKvCGyCZC9kBHSX855NPixf5xEYiLwxaHuM8MBN7KttT2dyNbhGH1QM21D7k8",
  "key5": "3fEqJy7C7pXN6hascKBsJrs7geHMu2jCTHbCJtSadjBW5bN6n9rHxq1xUUo9rtQar8jSf85tbzaDAzwjupjPHnWB",
  "key6": "2SS2uLkgBkmEyhiDpocnnV464ZcGWTzj3BDsqazubrdb1JHmEweK2Vju9snkENixNbZUqo2cJvjAR3dUfTC2faDc",
  "key7": "2jT1Zb7YdLmXJAtqQDHCYffto84MUK9pMbCyAkidcYpmgnWhfiovY1FCXpUkTwNdWC2M5s7L8svxMZsbgjwZuCGT",
  "key8": "2ehXonYTjcxmtexsSjNf6bkMPEds5GCdZDqmigCQmxuar14S3d8gXvgtmk41DfGLpyJGBTT5Yn6wsr3vikANn1WR",
  "key9": "4nuMad3KLJyJe9vysHDAPWPmRuWKfFuakV1Dkb6u3qFMDdpiQsKv83ERMRUk4KHENMwtmbtqhuGZy23vuiarhnvB",
  "key10": "5Q9ZSA4KfF5pyQHhxLdpCyMxZvsqA5Qd5ZvRbtazZ9shHFDLrnEut5Q4ZcDiLJhrb2iZrThZm2d3BBAqn3NQuFJY",
  "key11": "u8eoPKS6DYtnBnjK87xQsfxkn1kesRZsnkGTQshYgh14zPr8qncwwRHJJ2PToWSGucGejSFG8rzzaRKDxFDdM1n",
  "key12": "4scHWWzgxkkqdE6BaTAWaJmfvPYfg8chjs8si5D11MpKSboFCu6tFa5J5ZoUgBZJWD71ujdR7JHq3YnNA5WmNiLk",
  "key13": "3A2gVdBTPSvtzC495aXzgfkSzniwMjkXtMt2Y867Arny2UjUhPUps93BHyo8EGmP3TXfhyekbLM3DvGUNqWX5ZKz",
  "key14": "2Vk4sGBjFH29uw4PpUk2BwoWbehP97DFvEwTkmhxMkzUw1uSkbJHeuCTHTaR2MBuL7eZVXtsD9j4LXJ1SUVNKA2p",
  "key15": "3Qa9JXnES6urLMb1eU84zm4XdSH1uK2hivG5tma96QFAeQUXEze6nr7Qv5wBNq5AJYcibWFFJWZRjSvaEDu3th22",
  "key16": "5vrhrDq1H6thGtorvPJ6RcLf4EPrYUwhLo9i4KwqMiJiLVvge2Xdy6EzyyUKFFVNQc6U1S9sZz47zxRbuoNKueg5",
  "key17": "4rMnLvo5kpKBhP1qYEJ4g1hbDrVePj9XscvYkDrDN5YHjQbRUurQVgjrBQsjBL5i8yzAjvtkvsBN1VXZErkZPwSt",
  "key18": "3bxB5LX9YJXwkBUJt5PYDyTqmJr5yhsQXktqhW3wMNjzY2zw7anTmfScrRNnTDCt9Xz5cTzE6JmGZpwVftNLPrSX",
  "key19": "3XLfLLd3BaQiAbUQVcBfTrrbHh8cjJYLrE21vChcJWKip9Ln1UVESLpMitUmNEWviPD8V9VM5vtucceqT7PDjqVx",
  "key20": "2WKhtoMQfL5tBoHoWbpaXrixTYosd5nGPgqCmRv7idrdwMoKTfqi5w1jTEHrfvGZWD1X9jKg98LwgyFVq5LcWEFc",
  "key21": "4aCut4XRvseGMDG8ehSiSQiWiJEsDrkVY5ZCjPkq7hTpC9yV4ipaZVtp3QQUTYwyqjBG1fEjAeuUdjfPpVK1baC2",
  "key22": "4wd8V2mLnc1cVfzy2Y3MAC3jp4U6MssSK1YMQkVRUrrNmRLu7oJSjGggmiDSLjRdqvfxgSzQW7J1ohwQzG6T2RDU",
  "key23": "2uxMe59Fnp8XYynYjgZLEBnoqSMqXSrhUmqtMyFJKuLAs18JqWPPSfE7zKNXUvGPj6pX4uSEsgXZPqrmy8zqHwVu",
  "key24": "3RBjwaZ8P69Za4YLdVxK8ozxoBwgLTb42iAUr2aHQHThFXYDX94PpsJDYhVsox2HTobv3XnPFUqs9ampEfXZECEn",
  "key25": "Mk6dHSvDZrAtt8bJeA5MMmkD8KFkRTx726ws3keLjRQHza6w44WLpTLiQxyju4FvAv8g4z5C89xKfcbUabMG16A",
  "key26": "5yVPFV4vnmFmxUVtDW93oNDhodThFnpYgExYiDhH2CoNbQjv8VbrpTmJVjgFsMfbrVLSTCaADK1VHi9hxKwg5niK",
  "key27": "4yFHtQbSGnCy122PCQyBnniwDCuPi39u1Fonbjyf78Hz2DQZB1eFZtAu1JzRiq2BvmmNfLnjwrC1NdrGR8VcJeZ1",
  "key28": "2YoESfuyvxg1QriUanSyHLhWhfurCtAVy8gAHvu6DVBGp6wApzdjmqMC57tBfr5Whp2NmWbPsGuu3jHSRWjsxEmn",
  "key29": "2GVupZuTw3F4ZpEit4fpBRgi1GuH8iUDswsxXcm9imPVE5wMFj81MDuqzyDp5TWCSJntZGv5HFZte75HNnjrS319",
  "key30": "52YX9vqXdSDYJfJUSvpAm2B32jDAj8nPg7nJMa6EiqmK9KK72uTj9U3jp3hd1K1NLDgDTBdV6P53qUwYbfxhngHc",
  "key31": "5KoQ6GdC6C59zBjKEy9NYyRYcfTesWpB7Wqz6MdmFGg8AmDyJgAA8TxUGovSjJS51tAGvW9wr3vpW9oUxvdTJ9ZL",
  "key32": "3VkBbWLHLf8rpNyYGQTCho8uGSgiGH949V9hC6iJd9Ve9LW6rDQg7n6CTgEaNKJkeB9aA2pyNGgA6qUUNyoLRiiV",
  "key33": "5X5bWQCbMtNG8RCUnPNGYpLJ4piTXTK7fJz6d5RPNNkxjXxQ91UYMkc61hWc3SenUUgApzF84bpD5SXLhJu8P32F",
  "key34": "673yQm3HJbba1KzJhSVkvWZGLhC59b9WfKWikVRx2Yiu9hJjmKjMsMNsQtzf3W8Hu7sLKBGZLRmvYorJJX15cJbD",
  "key35": "3iBjYpFpp8EhQtmAXmVcV4ybGduQgzntYbMSURjWj4DKNph7pcTmR8eb3t31mzhuxBcDjVysS2U1F1GLE9UD9aH2",
  "key36": "3i49FMipshriZcQS8bqRwBNafrFURwwpYZLU1LdT9GzmrC1CCEEV5uQY2vkjY4Q3fUx3v8j4caj5nJs3q6UxQnRp",
  "key37": "5MWZD82ZArW8UjRFehkVahpRoTUeNrwE13LtYsov4Z1cPLpFsp4jxvhV2KZBNVGa2LvTG5NYAx967qQwyfHK8Uzo",
  "key38": "2CnQ7pPvcWzSPufAzq7Y5rpnMffgt4uKmWXtjGLVGW3BqpXJgPz7HJAo5vrBuiAEbFmEh7ct9fxPdWoPu8opmVzd",
  "key39": "4e5ckE7XPEyi2HwhZMgCpXt4whPoJZMrtWqPkvjyRJ8v6atYCgrydtTgnGNzwZETDu6hBjvR8evcfH1r6hB6vESt",
  "key40": "4BU5TfDPra9yVXiBi48i4u14vCdb1QZAfAxcud6bHE4QezdSF2DCUpJwmm5TcA2mAaMBmm6MixsTcGzsRQiATAu1",
  "key41": "5mGtch5cputYx7tSpPZEt6bPTQKrGnVJVd44HeQgPbmHHqKgfDXkhg5x3AQ6Lekzx9cYDaX1i8g3Q46xKJRzF41j",
  "key42": "63xJSfXe2xTejJwDRzbxygZVqeeGCphaUuaK3wwnUV7wj5oiU8zDzw4Lw5RiP96GfBsF9zRk7Hv5my3HvJKLoggx",
  "key43": "59yoFtSFT9M5GfkXLcNU1n8PooQm6cCskZ5Uoks98VkUGhH5j2ctYmsKVjpENXjgugbea2Hgv2T6tXmv1qTwL2Xd",
  "key44": "66bxeRH1mm1BBDujxxKSquk2aNsUYm4zSVGKksmBJV7uuVM7TbDFnvE76sHDDq1R1RfVhvQB5eDBmvi3T1uVPc2K",
  "key45": "3rDhnDDaxveQS9fCJPUhZtqJySAkfiBmuDSYHE5D8x6nMmSLHgCWaSuwKifPc4aamirsyHDG4tUbdsHDb46VhaLN",
  "key46": "3MHDjVgE5jtK4W43WHS5XYFwCQAqNkNXjSyFCDHLdFAmtiN54qWBkfFBzvtx6mG6EDrzCmWEnhAyjXHBzxV9UWSR",
  "key47": "2Wd5zhTyimsfoCp6PhCft3jTTMBM5eTJzYCM1KSxbmbvWBG2EuhrrEFE9QquEFFZqZJHDbwCw8WuQE4bb3Y1rACi"
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
