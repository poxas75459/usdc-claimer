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
    "VQGpMCt5eziqZm4zz8J8vZ6nieJ48gvVpuJgnXsuXcV4Z4XV1zayvYfzkpR8xUVKYsQpphVMbx8nH4VPbVBtDJ5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gtxXonKreBhrtqXhNWqagVf9Cg1Wa8siDvgE3S5zGDX5aW83NzLiCeaPWeSKLaCbr1DjZ2eyqLGjZc17NsFbH2U",
  "key1": "28gbmdDY54r49WQs6FmxjNz1wmGocRoxxyay7LrxqA8TMG1B1ESxs95VUFKV8KJt8jFkxwKzxiMxhxJGHosEnhdt",
  "key2": "3GgihK5WkMhfRTHqkeukYin9c3fk378AhZSXkCdd3vvWrouHWBMSSBrYbuxiRg6xWNmUKQjeMPjDWBe3iPxptcwh",
  "key3": "WLKqJMXh5S1jcsnMcxDtAENaCDGPoXxcg8KPX44mKt4D7bKY8HR2fQxZk6xTnBDRxKiKvR8AWR8oaoXSG4CuLPv",
  "key4": "3qfD2cgthpiPyCJ4tRiFxikHfBPbK1q8jTQQHmko3QBPku26rjetdsg5ryTfSAcd79kF1ib6zahhx8AvP7uMEJKc",
  "key5": "KFsEsULS35NSdYjyQaHhywHGbiRNSNdHuVjJjMZqbFdfpRjyu6bqtGbAsRCW7L3pSAYHD7SFDcZkxjG9C8Pfuhn",
  "key6": "xa4zp7tMZQQ7yHtFAwi2ixmELgMU6PnZtLspyUaMtiari4VgzyFmw3EoahzZ12mJgkhtFeWXX9sXxfLPepaUSvn",
  "key7": "5YERXBZv4x1JrSS59HmTGU8AC7VwB1sxycc4vu1Cu4ZufjnwEqPA2BAeGK1iCpE8FH62jQaFjj8fpx8aGxJzfvnX",
  "key8": "2mwJf1RUKJFqzPwDtFLg8VKH23mGXB8mxRr9gy4MzHxcQCf5YNHMSXRAWPWtmp7ZuG3Hp42Sd8tdzAbC7GYpfE2J",
  "key9": "5kapqj3SKwcwYmRBsKfvPiYjrCdGWSjABY91hcAGmUnMStDR51nUZWMpP7ih2dPFwUo4vvyVYBYSPEVMcmJRn1M6",
  "key10": "5m4fHkx87b4LCHr79yF54uP2tkv7mEaNqNu4dhe7XRmmAyqJJk3EtgTRqab79owXoUyxghaDnUwt96KZyihg9eCX",
  "key11": "3Ns5CxRzYyU2DrZHnZEaLRxt6GPCbUmH6GdN6MvdZs8DjgbSyjtrfLjfbtRm5gscjJTw9vk2LT8vruC9EvDwt2vh",
  "key12": "5mG2Qu3YRM5pqsYbzPCmRitiDfPqV5zas4wqijtWsV1ErhwcrjrJcPnF4MQZErKHzys2XXgBAj9unUMWtUAw8Qb3",
  "key13": "2FR7uu3aDm22vYS4dxV37uwbzZd32fvyaatpbmCYd8NETxfVtqWEfd9zJURdT61DS4zQVzmdp4H66JxaWpxfuRQH",
  "key14": "5kRnHH3WNB7ruVLZsEsVRGgnsYHn22cwCp85Dw4dzPkXFRMjsYqZ4uQwnMzp6tDqENBga4Hyh7df73113epncFas",
  "key15": "4eq18eU6X5uXE9K6r26cg5zjg913QDHthY4Scp1Bo13BQKBtPWLGufDqTdGeAuegZAwCMKiLGNjq2MymeHBPCusC",
  "key16": "5mb7DCV9hWiir7jj7CX5XeLc45NvfLFPxXUihrX4PaZcKxkcGbHhp11ytjtbGyTo2prB9edZ1zj9vL6v6n5Dokq9",
  "key17": "2HrG25uNPYoknybjzQNSFMoFdsuQL1QQrj8vfxxxxtbVkXVCgc55twrw4MKgjkLZBGBprVfsivRrLrPrAY5EqfW8",
  "key18": "5jurquKa9aM8VeAaB74F2HsebFaniE4x8168HnnDDZ3RbfWzbF1nqsNhiytKMEhtr94toUz3J3hSng7gtpvmgg5P",
  "key19": "QcQFmanoi1BWh7R9oTP3yirKFX4JmG14njSBnorTNxMMd9Q5u7UXTo1dykhVbC6vXcpzMiTr1gAHDoFZPbEdMu5",
  "key20": "1d6fVigSXXnh3qyYhfHNA6UuHqsRcwSfuLg4Y7drWGMB1pWEQCUwox7QMCCUwKTGZ9GLnZEhN58PZ2yipgihAmJ",
  "key21": "2TLA236N4y4CJz8BKBfS6Zns7nLPbqLHohtKqnXv4Vy4S572dbCNvut7pG3rM4cABPvwmUDPGvYDfP2vkHV9ywTV",
  "key22": "caCRjcQ9dPozDMmhZju5xhoXEUh9T6Yc2K4JkSWbbuHQXGCqsrHaCJMGSbLq7fTjZLrjffD8q5JywTvJzCC2TwG",
  "key23": "3pRa7LpZJ9F5nkm7CV43eTR4PfkD3bzHTv863C3mvBKwQSUjUCqdL2NFcFdEz69qazYYiLboS63wg5fENx2KooUF",
  "key24": "3PtxTSm6hUuLhWtKyJJaaArR2WqxTGDe2YXW4vQH6ShdSBV9ZkkB8Hm5ZZdfPHsqasPtNSHJqcKsWUzWvUV3X5ks",
  "key25": "4AXHEcZTcLcz1FdGcLGRzL1r9gvHoXxrf7mTLAv3mMD3v8dYmwmViwzoZ7gf19azriirpXWbB1Mjh4RikotMGaUr",
  "key26": "4tBomK3piMLAncSiRLrDdb5iq1i6eBBGkQzZLk2bSLb5txnD37ryfoWMGctkrdQd6FKSdHAufWViAgMrnvR475eZ",
  "key27": "Z1JC6XbJZozcK7WtEr7vnFQ82d784AztLVjL5uZxABcsQ2ifrhNJiWMAjrd778kmurezVrmsio3BC3xFfKSZWQh"
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
