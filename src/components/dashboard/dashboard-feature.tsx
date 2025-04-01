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
    "5y1ieRHjg9egTTMbLtH6ptbRDqhw7gPeZRSkare5qqjKRpNnP3YtYHtxRCXq1WPzFtiAJnXnB15bmFFXs3fm7Gf3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3TTv35ojCJjfHHjpiStsARcBCCFt6Hcub7gc8RKAztqaF4WqnmLpFdyvj97TKp4fjNwt1XMaxihwCuzS96j1EX8M",
  "key1": "nuYteT8yERPwP4EVSDvMdXxGDQ2KKH3DjJoSkJtBAXXQhdjZBqsRmaqkqEdcjSwCqanQvwHcYkN8XdGRXAEyFDc",
  "key2": "2z6aNsB6qaz8aMMisbsYWqvFSp8t4UCz4ENJpNS2VqAU1fmbD4RYfNo9cYcxebt1ojwt3Zbuq8b1Z9AzUGAJmdWS",
  "key3": "3SagVDLUe35B9FTMoNQbZ8W98eEUtb7hqNUrFtPgBj5yuryv6sTrZ8nYTfgnJn7XYAXeRzsBURZ2DNgG6nLLPKHt",
  "key4": "J4NDt7wVbRytqYSEJ7VWRUpRRv3pNxSEzWEa8recLup84G8i2B2DJK7zzaS7fke7brQqz7aGBFYGCBRRahHjMPs",
  "key5": "3kSXo6pnCM2mm2Vu6gUafEosUdy8qBL1TG9aYqSgcRkW5giMfFoEKZrWZEgqEJUQ2tLPGYJHCWPiLcB5onycD57j",
  "key6": "2hLnUi5cc3FRTQ29m23PWzd3uw3HMDnToLZknvoPxZxiTfzGFGNaYPasGmg3SKeJUE8eq1CdjU8No7KCseJYerJk",
  "key7": "22mDVYG8VTW8NeT6AU1Up7z5yhS4MezPGHXhYf3WhpqpwdWb8BXBVu1RwDj9xuuTXW27Ernaodeed5qtKz2kjoJ3",
  "key8": "4kECWjii1sygrGSCu27D8pTauP3GhcAmySjT2ar2ZBjvPoRS32rzY7sJefYion7pjCZESBKZaeYZ68araBJzRvFA",
  "key9": "9ZKjxji48D7yPNvE3bhZECRDGn8eSah8gH1LoXU9TBYvKS5C5zoRgN5T2HVShWJJ5RpSzA8c9v17PgicTyX586p",
  "key10": "2sJpNZAXRhe6JgtM37uAJ3UYgmWe44bDdJtn8TsvvusqzdxwvTERD1c7qTPjBguXfLPrhPGY5xQvxCgdV1BwYVP",
  "key11": "4VfCWRSNRoGpZivCaSu3ydz224nhrbNmwvhtH63KtFjEfDMHfwfRGxnFPhQwhKQRpa6w8XwC3ooQkmc6nCGsFtcN",
  "key12": "3Na3ZUWx4k12i1Kr3U4xmtgfkwWiJK1SypmheseJ41r8THR8VHvCZr1CNVcpchk26enUNvhNCFzdQWgWD6brrCfi",
  "key13": "38HnVgxAbzY5god4H8CJSvCenKQ3PZScD8uNwK6S4JT67FJiQQDtpGqdoy898XEJq75eZfM4ENmt8GH2d7QjSdDd",
  "key14": "3A8D2eEu1Wz21h9AabXweSLwfRgz17fjw1p1NVgQqxcJEmH3di8kMFRKaixerT6zU3x4hbC8sCmh73ZpEoz3Sxe",
  "key15": "4QZCCV1KA6YJBZTiNfdzddNkfShEXtqnVhFDYz2Syw4sWjEaxS4R8t2VetG3cY6fFCRjZoLhmSsKN7p83jqe4SK",
  "key16": "21rdAEfj9z4u6DdUwZn37nU53oLS29sMa4pRd5KgtaUCmeQAKXbUgYYRdRhBNvLANpmGvscxueA5RSV9UpxZtGHZ",
  "key17": "np2UiGDi3s9J5DXGayZcTViPytZd2zL69aEahe6CmvFxXTsnfzGYR29vX3AqLa9HUBLRZZ3XJUJbPFYwt8CYL1T",
  "key18": "5zq7QRzc1fiqcQRzMx9Jew3LHtiyi9V3AVFEKh7a3csQeAtNmj8fbjsNpmopcNSSDF92LFWDFqTdQEtxQWdzQvyE",
  "key19": "3qmS2JV2MsieswNQP66JKJFbXaH3EsYtWYDg3n9b5VesiYZ35TF5F9pU18dawNCuaUEz3G4szSKTXhjwbfzWXL8J",
  "key20": "2wbDFVG29ieHotLDyPsNR7YTxvoYXLEYw4D3aTkukdyRbQXJ5EXpnpUb7zRMHwruT9Li7dErUeT1m8hUw4d9hVKd",
  "key21": "2Dz3h32yb7RksU2JcYB4YY8UR65xpWrWL5we3zaEbmQVedrAQPsnEHFCqtrT8YheGVMNvScamaBBruTELzQs55b",
  "key22": "5MCP3wyVyDJArTorTB98MVYbZvv3h3rd2NKe4RWTv8cLy3b8BfX4pdVfXPMyDGJSgGX5QZ72hNfALRjVGPBVY1Tq",
  "key23": "G1fsi1jxKoX3MPfnvavYPe3VjntDZvz5ixTH3gVzLUiQMq5C38drSQWH973SQJStgHAg9J4SuKpYz2psgVLibW6",
  "key24": "2EFnMb6ryG5FM9VkYpZG9rBGxXL47mS8NYFBwxZeMkSoUiuVjTF1syWPb7McWjLST5GvzbVyUN7y9zSLzGET6UaF",
  "key25": "3Wkj9mngwuGuPPF3BrWHo4DQabotkyyEzrDaCf4qr6rgyViwLpB9891B1DyuF9M3SJvQNfvLVFQ9Gz4Fn75W5cUW",
  "key26": "36XLiAHCzA4ej9atPnLz1E32gR4GdmyhZFUzVbkL1N3f6dR1E1Heh2X3pxSm78BANcemKUgEKKJ5c2Y4y5QBVR2C",
  "key27": "5HZ7uZAufDemyfvTfkmJp7uXwkHueczQTAJnGpCeiNQGTdPX4EbYRJs3NLx8J7GQEriEigvBnWtYijKXkTAoTJue",
  "key28": "62f4wXtQxyRTuQLwfDjsHuspERKNNvTmrwkBj7ySEtQ9Hy38ZucKxnWoJnek7dpMdpU2uNpnUiwZD5GasvLgouAM",
  "key29": "hST7qVgfNTKaeqnxWxYoPShP6zAycsSy8YuPv2BduMyVUmJopTGmkdTJVvTntpg7RMmHivwdEFuMG6RJK4kbzNC",
  "key30": "6Zjy71LBe2dt3KSiz9hNZiYuD8CkHatRu61AkAZay9mMuVzuz3Z69cRG3XP59BG3YAV8F5174AZ5WAZGnVoAyZz",
  "key31": "5Z6ExzzAtYApb7CGXxuYwCMdzx2KhWHrn3rB9kdmG6Zmx8MctoJ7aEB1KFvtdkt5kVUQmHHvAa9vqcCE1ep2pn6y",
  "key32": "3LiPYM1rNrhkUwXPPrfnh2jWboVjeUir8hF6uQuLj8dxWPszQq6myc4wusCJzeZezwVBHjPKBemqofahCdmMdHdw",
  "key33": "2LmmQASJ6PuKJqs1c2H6EycNvUikgBuBnqw7VecZPt3s44Tb6aBoaDzPd7dz1xgiWqzzr1Qd5AogVJzXJvM7BoWN",
  "key34": "54Xz2ZnhdJY4NbnZ6w87inKVBmv6EF5SSrGAR5chByb6e7bF82sfRMBxg5NoqE8cGLVgrUoKgGAfVvmqB3uAmBPL",
  "key35": "4cL1Gf9TdzC3B4YP7rC6kBYCg3aZW5YReScR9pnLsrWkiuju4pA26GQSwt73CiA18PpMd2dUCAib8nGfruupJiGw",
  "key36": "KqpEBxj85uVaR4jMeMwuDUkeaWVKpacbC8cGoH5BQGFz1oXtqjYu7gwgFKZBVH2vcPpYLNWZGXZC5f6T6u5YL9M",
  "key37": "tn4647ygtAD2DKZoU7sC2bkXvWeoYQ6ENZfaYuJYj4NgEJ3nFEuHZknEzUNNY2W1ki8kwz9S3MsK2hWm8VjYVpP",
  "key38": "3MyJTPwGW5iTK5StETFGgoKDzPnEVYpGNG5DCZdEDYGj5K6JZumjZ7RxcFZbJ9vZSJDkaT7bNtbxQXnmBWyhkpQN",
  "key39": "W2gaAef7XLgFQg6c9D8PTNgpeCM17fetcdYLwrfNCzkZxzBJn3aTaVLPK6Jb5YReHx3KYwS8FLRRGanb4coUUNE",
  "key40": "3bc7De9uBnwVoC3kPF3LtE3PBwpEvRUP3WiUgFucWtXcg6Nw56Sb4QWjf3mwpn4wiYYYT1Pmzhy3ojDvFH92o4so"
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
