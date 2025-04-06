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
    "4kRgFz4YMew8w71jkP6nUyX1jAh8Y1dq1bDhd9GMkkvUVbyiXSRjyj1oZZEepiore1ZffGyRUAD6YvQigVhvwAMC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65yEsHSdJ9RjxnjLG4HHTVLtBo1Y8MWFxFT13fNGoLPvnNhEvJ75YWdhDLtdJh6a7eS4EwRHYt5bXwKWupZ6wAbp",
  "key1": "4CwT1fbXW4ggaGsfSSCFd8edH2sPv9LYXiKW6G3WkKemGT6yAjMvoYMSVNMvYJxHAcWpDFnCZuSHdb8HyqtHvi8U",
  "key2": "3XTHgieTdRMz4GtTg8pUVxNY5JbnusDWxVZDEZswBYwdhSCvL7ALacCDkgmHsQSZzoQ5xnZnobBpn1v4RiRosFZA",
  "key3": "3zioVFNKU5yhxESRz2MH57itBhgYtP9XYEYaHWG6CSbxiYkMb48TFAnHRHmiHGijGWZgtLv3K2b2W3uU4D5gYSfg",
  "key4": "2oMGdQ2WNxTXQ6AGJHwo8tvkriXPGQ3h8gpLgPaCP9qutRZ2VfPZA9ZJUEx6Y5kqZ7CmbZWF71rAfyCkxE2f2h9e",
  "key5": "2KDHCtdi7AZSr8Z1y6Kt8FE4kwUw66JFXM4PczrCHER93jnSU57K81bCtYYFAWKRpmeThBAsmMDipa8gJncg7aFL",
  "key6": "27yj9VfeMog7QfZH88QcZK4hWhjcYwSxHyY4oigEiVxUT8TCU6na8QWXzqibbwrisUGCb3FQae7gB6Fzi4W2k5vG",
  "key7": "4zdyWYT5ETwC8NLLz4qWksVDwUUXZiy78YixSDMoBoAc3sFuXk5c9B9LoEC8id2nbV6Mhty7x4XV974JPUAbBxcY",
  "key8": "5oyXdd4Xmam3vSavBvmcuXjRDnDocoRHESF4NbeHXk78A5a7Q6cWzjpNjwi9WJHXakpNgmBJBXSM1R9gsphdp7Zr",
  "key9": "3AJkGugVHfJSriHnj8XDUYCKnht6hrgYEqtB9jvEqV7yY2i77XYC2RCdsheEHMLi5PMicbAPdk9iMDyfXzt1ML6j",
  "key10": "4cbfofpMS6M1V7xpXUTzQvF7NmTNeCEs6nKJKFf9dh67X57EsUDeGW2RDN7FdtnqtWyiv7gmf3ctAUhzuzBQcRjh",
  "key11": "2HTgEcp6jYVS2vd5vdg1T3X7Q8ftxdpZoe6f7F1AYLuigTW5H77tw32PX1rRy2sjHD7EDvjXmcp3bzVcvSXANVQW",
  "key12": "2qrUcXGBQzRcbVM3LmsPXojq4hcYLNTayhbztXyUBBqEj8UWmmzzZ2ga6uV3ZbtBSy8GEHN75aWYMHWM3GktooTJ",
  "key13": "5UFBunHE9MrbHSHN6NGEZXfyW1QUjXqQjt6toZGS3hDf1t2dn5kagUp8bKsRU1APNJF2xy2gmvEEENKJMKMg6NHA",
  "key14": "6yNBo2nhpPyigMDzrJ5yfjNTLj1MBEtiMUFk3Bnj1AGewG6p3RXJEFKbJagvemgkPsXWhRqbuBGLaop1RZerbAu",
  "key15": "4Ww8swg7t4xFMj9Z69L9jsmxGvdnt5i23bnRotX6HQP26jNXczy9qckfFRgzcvttRtsbDCc1MjCfrAgdw5szzCWa",
  "key16": "3zdrSTegLd3kSy5pUPgrFJZEdV9qgmZrshDRDXa31cp6UicyeCYGsLm425XbRAdXHPNaxhngqQxvfyLrWQiXeXS9",
  "key17": "aCGy8dauChKY9sPQgY7TF6kx6AkNmiR9aHrQSu95aWoeXen73Uavxfj4ZtDXGHRVdtyNpf1fxUp4nNngv9ykgEC",
  "key18": "2ox7tHWqwKNsNYdYxJKvowfCgy1eTYSZL7wKDBhKg3zVibgcMNaeuZ9fhBnDQn5t4weM6mdzMX84sEsp35SsZd1t",
  "key19": "5vs2YddHPRzCGY5P2fmLotLMxoKWdqua6iJoeKQCKpyw3d853h1euRmhHG3yyRH3cGX1GN1BbXUvhH517TdXrUfp",
  "key20": "ftpMfHRRggcZBsiWfjqr1JjvcMGNaXLTQgDXf5w6ND2X96uUk3nFxG7XFczMKTupREpzjZsjqBiw5HQQHR88DPy",
  "key21": "3oKUeD5QKkrg26eHpP1JYCY2hxyLJ2hLv2KcTJwWWDQRTAXLHeH5WpByFCJQw2HcHmu3BfbQgcmBoN2YjpTA1ANa",
  "key22": "4zAfLUQXjm6mfL83QKjYMHMT3JFLV9TTDgv978fGaQBbndUF5mn18tL2CMsDgmyKZqFpJSyQRHKidpsnhir2bG5d",
  "key23": "2SXtdsLKGtUPjAqNTCM5MbBQQyL7NBJJoph3TiboiqszUzxo3EoQePxtCEDCsFn32znSexsSRvXbDoEeR1z8bNos",
  "key24": "327MMwcTX4sMV8AckFF7tijkF3k2hCrcLMzkibk4JrF59EzeVhiZFTNnLe3fTvcvPA94L2ZBmhCyfdmbvPjcPSKN",
  "key25": "3BH41Y4JYg7YouyrwKsfWssbPoRrKtd9ooVYje4s6JhJ3bMuehBXDZoe3D3mbgX4ErXVi7LknnrdMEwoWKdZeTgT",
  "key26": "5kdAFugAuPWkD9727LthBxZ98BpPLFJS4jp9BDvgZBHz8UzpNkEEqhoh47VqwX61C5x6P1kmLrkURaNUTAMoW57Y",
  "key27": "4duTNQwEgGhfs6bRo4uJdebJoDoQ8HK3uDUQau6SdasR1WNrNpWNK9cSWMsuLth4oeuTfSDmdFecWDCdiPyy4h7G",
  "key28": "2TDKM7FkpGXcVzLs1Dbkemw6Pm57anTyPfPtRebLWgVdwEkjDgFxmShAbH2TRkQspY6aK5meGd7kv1sAecTB14T6",
  "key29": "2Aya4LiAoqV6pqAkkeAUUQcrLvUtn5sHUi9fn5uEmeqFd5FjVJxSeSAFggNaCXzSqZKTxdZSZ8SRrzHLYKSvrYeW",
  "key30": "MVHkUWp2XukPAmhp4PBfAFGCori4x5mXkF39tPNQytJVTan6EbDqhQZPYcSVsqhEUhL5tR8JgDMpoh7bjdCXKjD",
  "key31": "3t56YiwFJkffqYmzzyg3ZZZWfAVBiNk76LLjg7BiRvkSpYLVDYQT4Gudr8tBPBCvidaf8T7popmaKhP6twLLQk5U",
  "key32": "5nYEUK1bvorpsjXkFzCzBkHorMuEqWzpUzZ7gxqohjdjac4pc3SSRRwGJ8j4FLTtBnbUjZsKYA6Rxt5p3YLRyDNs",
  "key33": "XXJHenxwbjPZB5CC1QxYdXr9vhPSTMipNoLntmvFvarxCMpVVTWGpgPkBTgjHgQeQkMfBSt9CmJPk4R5J6gwEHz",
  "key34": "5mHnS6MXb9kxh2GSPdsZqEEGiXjQwfNHNoivJKSUrdbM86KwGU5S3fQGaVTxkg9vsQoRDWjqXLvH49wtBCzRLhBo",
  "key35": "3v5ukCf8GtUdJeBeuTKw3N9R3ZSPpTHk4QvMwWKQQPXxPYvHTnwWU81v78geS1gyphHBbFELCd7r5g7mq4ppqjHo",
  "key36": "3BL4Q5PZ8FoGcYWnuT9C9SVAZbBTNFtXxvoYjDue1mD8RAQ5kYshAZFF3vBjKmhB8abMRfMj79y8W925MTwGKyyj",
  "key37": "KEpERDncF9QNPXMaiuqLLNDn8KrKRBN3mK8jEqUJQR1Ki6ngFSNBp4skUDeDtJrRNceNvLBrTXNSspVYQDZnGSc",
  "key38": "5cJCAEdGKjfz5nz76woM8BPuDxGQ2gfKRy3Npge2ttg5bw2WtvQdUxhjJj4MUJX9kfE4ioHon2cMZqnvf7or7yKJ",
  "key39": "3te7ZvFSL1cAqpeXVZGzmcx3RnC9cN3i2HidepFF7bEGiUTBkaXMj7qTDbb6cHY16GSNDuvFNCkt5LiyGPagwb79",
  "key40": "3JSR4CvKMSg6EcDwyt2JjoCVSXLgFKaQbJPi6o6LuicDTzGdcFo1MffgkNS2HX6eJ1Afkkyz5RDvueKm372nGjSb",
  "key41": "5uBNZ3kga5B7ZDkzSAPwdd6njqqMt686YkUBJez9Dp48RJevkvWyvUDKFzYFpZnVU1Yp1hwyJ3rC2ehM6TDrtVPn",
  "key42": "2oAqRJxkWBN74FxNgkE6x1gSbvWMhiRiwd2oQDfaT6Cd97UeoPWzwAt3kTGnGP6NqsW74JEoFQVYZbK9QRWJ2wym",
  "key43": "62pNauyAdUZhuuZirGfLvFriPyg5m2inTbDHwZskmJjWr3oNNwYr79tC4JU5pscHr7JP3ZsdE2rsZ2f521x3BccD",
  "key44": "3Zttq5eTMVt3MgGVP41ZrXu2nsgL1eXCfrGEq6sVsM8ABw958nyyr8EzzMR28twYa2RSJ6GKQLg4gRpnPsjLGeNt",
  "key45": "LA5iDhKSHeBSqLxm1shoaVuyeC4haz4H4tgkK46YqYpw1XYK9NX1a1jyKYSSEZkwyUpo7a95q3EcUZy9gxf5kzD"
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
