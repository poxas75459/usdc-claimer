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
    "3W6LFit3txNfwoPYJ4kZ3gZNHCPVEXqFKQ1cLD6a6AMfrBzaDsxpijjhnyc3bzCdHyMoN8k1xUZLFZ5c8yMDQeT6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "r3PZ28o4fPc11bqPGUoHYyPBippVxQL1oDaxCcdzXFWSHk5ghhmNCCaz1QZTQpK94c8s5C9XAJZSUj9uytDrkhi",
  "key1": "2UyCe4e9e3NZjTKayWyVmNxCxfmmo7K9ALnLre29VazmG4NwwMnyeyCVF1rAcSoFtGnvbVWmKk5a2osqFVv1D7DF",
  "key2": "44y6kKNS5FF8qHnG9goFM5PWrYYHiYBhvyeVPhJP9eAz5m6KvA692AsvGDHUTNGaCGDfR1WRu4RaSLwN3n7SzMkC",
  "key3": "65HnLWX9cqvAbUn8DZWYFZJjxdkwfw5ysXHvNYRGfcM2JCRPWrt44J2qVQucmrxsX9XsmBqYjwFAAH19D96yrkQe",
  "key4": "5bWtZ98nyPv5Zrvw8WmEnGPisaak3Vep5smTm8gGqWeGLD6o4AGD3GKfFHP1SE1p9wcW3mh9MhYaSeTS2HUgWGc4",
  "key5": "3tz4pSgkenRVszHoJWG28nrrUTRgodQmJSyrwHeMM5Hyjxk4okQ6PPPcfE7ADJrZcWYSb4BE2jYk44QGshiCkhY8",
  "key6": "3Gd19bazEJcKKWkgunjgr3CYZ46bJW6egW9gAFyJ2UE9SmiLsdWFi716rWvvqYCM7EB6Uso41GcuNeB6eoiyAQb",
  "key7": "GTBvnxTQczi2GTSaQY9qA2Bv9gdnvdD123CHuia81MZ5Yv6FnLPEubobFZQAiwQYHEc845KafwmMUUywRkJwn32",
  "key8": "3uvPGEPknKeTiX2A3gyYG61LCYESGSuyghEcfw3RBB9TR8SPrCYTfurxNjmGBK52eXyf7v9DVEUt3DTiLYrAFn8C",
  "key9": "2Ddb7jvVqdDnJ6dXMsQyTXnPgKtj6iXEd8yMZaHfuNKFRERfm236uSqDTeyTKrGoS2HcQUzsPfrELtNyC58dDLPP",
  "key10": "3e2ox9Umc2fXabJf7FyT78qNUvBFU7MGKkKrBskUMsxvnMJ5p5rwEcE1qMHMVYETLcaWv4GwsTERKWZTKTGcsWhj",
  "key11": "4V1we8fwgnfYnaXHDFTUosDGVbFaBNjMxxHZwU2iNWMyg3RWqMVsZKe5cB5eLgB3ao5ZKywXD6gVTY9cGh4dKsUe",
  "key12": "63SxvWRJHkV45XPzvdzTNx2XTYNTX6irGm6GDfhXQrgvx4Yhsd5jHt2cW4yYkrVEY6KgBWQjoaRpDxJX5DjCoHea",
  "key13": "5himFZ5JKvvFvCMAEa1gEvccLc4LNHCJZcaQSun9aAqgjpEttiSHrGc6MtahVo4pohS2Uj1rEpzFMa324DdfUrTK",
  "key14": "4Kyuc1cBo3MEDrJwy4EDhwLnHkuJ4JwoxE6LUQDu4ZqnVH7MFb7JNJiTD5pWXPJGHGCiLQApXN4HZ4Z4vbn5WBSg",
  "key15": "A3JEKVGeDLcHue9Q9a3bUXcaTgU9aeEjUTuULoUdUJFbiAiD2TkP3A6WmzQ6qZ2soDC23KuSfVLehwBhfq1C4VV",
  "key16": "vjEm6E5GdioKDU9iptb9V4w9Q46YzExDfzBosbnMUf3XRCefagf87mCATFSgb4YUBKVxNMPodAXQ1b2h5YVpkgM",
  "key17": "2psV5xiFabXRVTqB9FmMm4FqqmNB4z8CfQfKk8tr91QT61reDHXMTgLYgmmBAB5wLhZyj2Gj4kbtQjSUxEKanS9B",
  "key18": "3Aa7f5UqchLodsdGv2AWh9wX7esBaDmCUarysuNtTtL7tPmcPZJVVrLzh8Udd8uURRctnyL5kKuUn4qZbct1pAvh",
  "key19": "EWfdBigwpQXWaSiGnn6DYN85pQF9aHwMc4fjsfrp4SKQFBAivb2XVCWTmtAU847xW7dc8MTCY9YS6K5gvEUUUby",
  "key20": "4psLQDmLvWet7EjSnR1HhUQKMEZaumuXeR1ZroQ2PYEVXukNpXoX7T5WdNgrMtGeWzsSGLZAAjvqBTXwBRt7t7zL",
  "key21": "4tzTCbtRFYVewKUfoDWkCZrFVDCCi8mS6Zf2PScuCDUy7BRwceumrfJnF6k43Ygv2kSug49dEXdWZifRoKcJRaNz",
  "key22": "jejCVD6P2Es4e5VdH4u4AjrPQq1i8ky26GrJSoT8yqYGbC3QwyrjDNeNCMRwEJz3TEq3LNPEgsnW1mUGKvUX6D7",
  "key23": "3dsUwaWYdW1hACm8RK3XA91vvAPbXskpkvFLa4Lg5VKUezUWLZPZHPRVKW2hyvPjNmhDLxYgD5dMDUojNdyyefyX",
  "key24": "4rTgH792nkb5SPJhA1rkZUdW8SXgFXdqi7J6UAvGnuhUfM8jG9oipwqjveABG2vY5M6q5PYUV5xfVqWg3K5CPE8w",
  "key25": "4e73gKRqsXmGW3fTQbnxRRQnjUhyYxjnucxW6m4pTdZCkRRHfzJtKFZpmC4jw1Me1955dg1hjM19eBh3QaHrZ6RZ",
  "key26": "52L1tE1U7D2bjtYGrfnBBUhsALVkc2a5XqWAkBm3oEaE92J8BB2SxQgTwExH4n9B8qsJfShXJ35tBWq97R7QpZVp",
  "key27": "2sTffQXMLif5z53pC3KXHAtiYXFUykntwi91UpVgbeBHwGUP55CSgHrgMDYX4joMjJ5oNPLPTd2HqCThBMG4tCjb",
  "key28": "5UJhGaTFGezcuPSWxCyZx5CnC4ty3LDWHxstmg1kqVEXHqStGdP4z5dpNBrWxK4dPfCw4MNyTsqfYvLAZgZoJKn3",
  "key29": "3gEV8Pnd6nRX6rfBk6HjFPuv6vxjbS29K1nJM7gaTssrpmw3U1StVWmQxhUTwnoctJ2YmcwF71bt832WZ8xcveur",
  "key30": "2ZmmJ8rifJf4UoT2jBSJpf1aWeUbbFrC3h2jPf37ZiciE2S2vRecYbktsf6qV5vAptiRPeixgNcm6ojwFLER5h4f",
  "key31": "4Jer1PkKyR9dNFinjwCdsXp8Nbd3mrc34MgEZ1h641QfQKjqA9uoXoMg88yiygrhWkzDnVbcfEYrbwj7tiEm6ZSJ",
  "key32": "4VPVbCHJV96YpMV1u7EEGn3Vtmee5m2gMX2gbaxaYgPDwf2sP24DDgpXjR4mz1J9HdXySuHRCDdDdtgADacctgiF",
  "key33": "5F3wHfq2bfhseyU8vTt6korA4juqaLRkCy18bnznWPLTLRsSdcD3Dw26bgKysppP8YKgjrqjN7coXmzUCjqNNi3L",
  "key34": "62rafaM12YWb9iqFPQ1pbvjsahiLZWa3LhKP3EPM5tSS79ScAUuaDWrjoey2BrCpZhyk2nHY2ec4QUCAgjRwDzVC",
  "key35": "3CMfbbKws8mZjvqqrBAM147MmVMZWp2PHy4yGCxrVCUsCnU54w1HGjX4VnXwo4g4UVXuyR4tJBRLXUVTD9duEk63"
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
