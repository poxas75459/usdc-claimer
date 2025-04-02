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
    "5WbfQp5PpozKUDd6m1foAzXDUBUeSuJ83cMHeGaDW6mufCV6v1fcr3yuacwokLdAp6YNWhLpKG2cMjWM5a5knogB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r6gYWnGrDkRggdiMoDZu2ToUzE3oozUs7x1ev1LLdVwfDK3pitp6wZDxDMETFj4KoJqupWXEd5MJt7ULMLYTGFy",
  "key1": "3ydEKSprSSKT7oRYXeyMm9QggocFPg6QXELeNZtY1UfUK2dEiYiz9JahCifs2MBNodme4TNHQmgDjFGZiuLbS9ar",
  "key2": "3A8DJSdhVcxAiQMeJcDVW9c5Aw3gZj74apw9yfVGjbqSAN8EiJ4Jr1Ypv3DVXTdniRGyjBriiBgHHFgFvHJxS7Jz",
  "key3": "4ZGFpamQQexJrPtjxZYzZhDsuX5q6ayTUZmh5hNUAcVrpsSbnBCahYKLCfd5DBt3JqgZni7DG4ZyH5EmRtZFFRVZ",
  "key4": "nkNJUc3F6QQuLXXjvFJKiW5mHfdPtcayeejbyBNywynJqtCzZQmnR2ReDhhnB6Bc7Ui7QvY9kCyRDYU97pAo1yD",
  "key5": "3fmU4q4Yq8mxbrdxhf7pWvSoTQywWFzXtfbiaNuEqotSGG7vp8shmc2W7qD1LDQ8hZDeqzsaix7mvwVk6oMu8gJr",
  "key6": "4ZGwHBETPCyLifX94XkWi16QWv5ZX22WttopgTiGGEy6yQSgckiwr9R8omAZ56isfVinWAH5UxNyUUp4BqoAK7HM",
  "key7": "4hfveKwRrsYHsEgCA9PeuEJYStrae9gr3SfMgNgvkDtxyVBa4RFdk9UTNmY8menWseUxDcCNWhmN95KAzrtFP5rS",
  "key8": "WQw4Vb3owciSXTG4e1DfSM1kWmvfE9i5WMbE93ia9c5exzTKPnDxrBgHGyMCDKrJT2UbXTUG2CMBDxBnaAFXqJ3",
  "key9": "3fqbSZz35N6XvzSs5eZMcmnpzk4UyjzCmoy9ShXEUo83UXdcmuhiyCQ18ooEQrc6qbKZmgnEiCAeARsJc8vrMQBd",
  "key10": "3XbZ9yiBHVJBUkYWmWpgpDsw1WeUB7QMDo1rjgwZV469BqYZE2omhmigR9MViyvzf2KtZrmX5dEm3h7i82n4rAiL",
  "key11": "5ciV3whvrTcNvrXtgYP8vmQSPBrmdUbmMF12YWq1BmFU6bpyCqwh7XR5wwmd33rf7tAV9ufr4AataUMEeYw2a6qP",
  "key12": "3Cto1QDvoqL8mjDkqk96sUeJxw12N4jiGGDiaE9B9TDBsRSnSpuRLtur65QVmb5hKmUzjM1B7JFYLHoh63ubXCgq",
  "key13": "2VSGn47WfqrwijRrpupc51jRA7TMn6Zt75HtrTJzGweTSzueBH6J7kgRVUUUomvEqbDXWjzzchJYzcnzg6QjtA7c",
  "key14": "3vxqyDtZbPP1oWBHZHmWgRwpajwNGyPojKNRwAn5S66g45VabybA4K1epm2yJCE6ctMeVe64MwyDGSHYF4kjzdhm",
  "key15": "3kkaXTtAh4Lt49rnepmxqXeUqt8fwGjjazfi87znK1TsoXrpJQrNAsrfXg6uuhZKjX5zbdD5cx9maDUozhUk71Ft",
  "key16": "2iHVzb5uAaHhQtBCpxAZYWuRThZjMAYpevc6HdkM12GtftMrFENgP5N9Dz64LrLebQ3QjpEU2E3G3iZKzM6CJMrL",
  "key17": "6b9eoPZchJbpk6k86rQFPr5umRjzihzbFvxEvDX6NRqeZQFeafXUjYErij8BUubhiquRLDZiBjuG2PPbzQsrZ9J",
  "key18": "4wygfV1WXyP6PohksMajuDw3Dq56jvFHaArjY4fyWycbDgFjCuCLu47Ur9X1JeXB97KkCrqpExRiYk2JWujkbsfS",
  "key19": "319Wr7c25ttPbcNvmnfy2XMrBxmhzqPQ6rhptTb6HEUwpRh9QynbeyhGSjwjZ4XYT4BgxzqEZc69uLC4VWpsJo4X",
  "key20": "51LKeGtBwnY21TQfueqeojNR4Y4WGvdc67LxMXPfLJk85NmWB9EKaDuDmFxFicuUyMSyt9vvWJmWJEu3nUrdCDNn",
  "key21": "4JChvxyDMDHBxGwBatVpLziU1fFVPfKDyixsisFVv9f33hL5NoNzf49pYj3Dc8886wtmbATEMc7S5nkSPqQUjQuf",
  "key22": "kTHiUu6seerT2tYTc18q6L8MyNfpsVfitRYaiYwroKRgGUgbsWkShgorLfhuXvkqPBTyxHwnpKNtrNFLmZFpgUg",
  "key23": "Tdm1AD2H1sHN2StKZApRDHJeUcNr6aik99HL7wXAMae9kEdgoUdBuGL5yNsp2KWoLueJCu3gmjFpuh4Ef1NqjrM",
  "key24": "3S7gaGsPJ8P3XTAdxqoRqb8a6hSJjntfJde452GwGApy2KCDBVTn8iQ7Zau3BVDU23akVTDZ386dQNmNFsTeY3ZF",
  "key25": "mXnrcEoKM2dgwvSVW3WLnun8kcbGRk4Uw3h5SEofTDoen8kJHD55s7N75xXcPD36jQGKzKR8s9n5qGPC8cERbH5",
  "key26": "HGJNTzw72T4H9uKWkJsXBp2iSnP26E2gnf4GtN9HadAjrxER5kKVDLFQ3gsAH9awc3xeDdEDaN6EBFRp9m8JQwu",
  "key27": "KPYpp7qMbMgAcLty9WbkTgcR5CAPSXV4V99tcKuAsEr87rRK6bi9Le66WPpLnuePcy7oQDmZXpF2EoFv6amgFRn",
  "key28": "2PMh9WMPYW9aLcMT22nrFrzBZmXkRLAmZLP2E2he1DMa3wKU51BS6Qaf8QdeanEr785URwzr4Yh6gpMs27y6vY6M",
  "key29": "tzgQD5mPbx6Q2mk353FxRTkiz8jNAJJmg2fMyzpN7Syq2tSeGfPvWJ7SB4P5t5MEVnrFd27KN8GAYHoeFLUnZwn",
  "key30": "4YoffwQeosEpyWDhEUtsJoVFoyZtWjyh26879mPWaAeVTtBgNtNUB8Z2chuKZ3B8h25M2HApU8TCsWiSRP7mtQE5",
  "key31": "2CPAjFuR7ovEEVorxTdmigsw2V5E6evewEdEHCf4Xzuk3dcNoyisQrDZshPr7E5Bo347gqHVH6AzmBQfYXVC9KX8",
  "key32": "V8mk1HbzB7N7hhN9djhsnz9JbUnFcQPvo4DUp62jeKP4nqQuCFGzSKMJitPuKj9UJnGmPTKWyjs4Gu8hgZYHfK7",
  "key33": "5VRiLzwtzHtg92VSV6BeemxQbDPnGTWM8gpG4yCj1kvaSURo5kHmkpKbWoMi4D5KH8KD1tNSizQwwPYqTwqLcJbD",
  "key34": "PXD9RPmm55SzXy1AuE7oYRsfaLJwz5HFNB2Q31CRUc9uCio9vKyxojnhGK5Xq4d7fuCLYGAtBLJxAUqgpnkCTie",
  "key35": "dcx8UW8Q5BGwassV4XAi553LoFn5zGgbg2UpS2mtP1bZatMZzic6AQPVtsmy1j6eYi49jbvArMM1ciHSiB6eG2f",
  "key36": "4fJwDtaXrw75cGbSbwmJbjkDZgQfrTZxnTG9Vtuav9R7TfmcgWvC6yjwtzD7YgkpiWdzugFuggZqFxZzSuSSsSEk",
  "key37": "2GB2A7uWHqTMp8AiJzTRAqKwMJqQg972JCN2pzqNJB5RDfU3C5YRLAdcRbCDXMAup2Cdr9hfeMNRzUyothGYzBpm",
  "key38": "5saJWbiq2WEGJw8AnejNKECyi1MGtNwJVMUVU9X1g5gZG5HGKLcTMY6h7GYAWQkafJi6oDntdwAw7X8sa9eznzdX",
  "key39": "4ppbYpRAnBz4xjaYendTDBKq6TRmKbTjRMYghjy2jQyAvLPKBULEfQsszJuMvpydvG3xgXxjgZB63qhQFsqvBvcp",
  "key40": "3jWPp98PfGiBXdm4db2xdEitvTmzx5siUG4e2R9Xtoy3EsihnJkqpWSx85Jo1QeEibLcN8MvFnxsxPRX6xhY8thN",
  "key41": "5cicZDPVu5kFoHmA2BSuZCXVaZhKoFsJF3wSxmupoC3nmHAzk9diu45scRsCA2oCRPUVoUfuRkVVoKzjqpz8ja1C",
  "key42": "4isXKWZCPj65SVU6mR3U3rURbAoHgNujNPjEYF1c7Wjmy6P3GW8ewgUNqH5RCjyw9pknnNVoLVzUBG4Ey71FSqMP",
  "key43": "65Yba77qHo7CcQ7aGHk4LoAQkQfm3sb4cvyPCFjqY57k8AKvXfUCu6arRNavDArvdT8BJhRg1eHv16VtUm9m2La1",
  "key44": "4Dcgs29Yg8CbY5JdRsg6AADhFuEHH9nxxibrqjKcVzmgXu96kKSqHErwdPoEYMEqJ5ShxcwgFkWBSjY59qfmQ1tu",
  "key45": "5s2YY2bKe9w8ywzETkMrEvqxqqHzZ1VX115PAuSE5o4iezwChBXg3t9144CNyPkB9FgBkVfkygHwy24d71fiTtWQ",
  "key46": "5kBaa4yN5fJD9iK3nGuhiWtCeYHgYUNQYVyYtmkUWi3NYiAEz5Urgm32SMuS2AiLeZwqPgLFoB3fZhBkWtAU7qT9",
  "key47": "3uNfP9PgS4rfBWhGadYFaVBNiGPmXdQtopP7diNYB2XLUsc5rVfG31GYu7MYm5dxvmV8yrrh8K5Ebz5C4r2GGSi9"
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
