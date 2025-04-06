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
    "49g9MjR2L8QeXwcs8pWmLJ3UysVLKGciXQgXT1de5wriLrmvfrRjkfiiaED5Gko8mxeXVHyX7GRjaRnZAeorjzXd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QkNDPBNAogTUGnRnC6y32AbVEcWAzTHPWpJbhJgGtnMahoANYLDE4Lt6R6dbrdrXeAyFfv2B95zZ9rZ1oXnWVY1",
  "key1": "8RnGLhVLaoCTrkmm48ujAnMukgL86hx3rPKhhwJWsU4uG7x8H8tNdjKk4pLMK35juLCMk4MiSswy3vGNaLY4YsU",
  "key2": "5ZWDVHT3cndG24sxUwJX2CaPxpZMHAiKRaJPiCSo9PRYCSWxa8Q1gD5wfBkjrzEsjfpe4m3GmHHeFtw71Qcsay8D",
  "key3": "2aeTMquDv5ifypd7ko4Q8eZhm81mS9C46spt8hoGdFTBozqzAN44fQBnmw3KFqzTMFC6ZnLuQUWz35LSmcfyPDMe",
  "key4": "5XmA2CdC3NJePih9ZxTAvkEm1hoQcaJYkibVVujqtws75RVBFSb2dZUbTPqNL38kVE3GqvpdsJduQP4Xk5r3CrJ7",
  "key5": "41Vr13mnoYFV6xqxqnMmm8Sb7DUmMdNJGhDYNr6REwFc5yJsu4bW5GGrxm2GArgaZiGwkAoEcyFsKpxEwgnpZnLY",
  "key6": "46J3E33r82Sz2cTkUh7UrFcnFB84PdtN1rhYTeoXic6zC2i6NHW9y5wjdTRrJt2B2G6giTJxrKP9527wytCnzr7L",
  "key7": "4DfrBe24dZEqj6n8zM435XZZ7hNSdQcznedMeMEb5kGhAvBrwSqJ2AmyrUYAtqbY6pijGCpqNxbDbnyLqxf9FYug",
  "key8": "4iu61i8W4U4KX9LxAoi5P8fqD5uWS57D1Y8RSfJMwpJuerMcbbAvCahkWtzaiepvZQwb1Hw6sE2qyXro7qnDLBC2",
  "key9": "DGkY4JpumyeCsdDB2psgrzRZsUESB1kQtff5VWaNfpEtuDEchMnwEaUzFhzQiBtworSJMuQaK7foi3MhVvkDgf7",
  "key10": "3dzJQeSqvv4ubqHR3aEGUgRys4FGsLc9SwaruCVR7JCejwWo2PWWbPBRn7AR4h5HPThDy1GRWT3amFf6cfSBaqhD",
  "key11": "5TpUzWGsyfxpfEqCHDnLrRRT93FUhfUmswquTHaV8qsmcbC5VKkJ9vNytKWi5bMThUkuQ6z9V4wJfbk8vo8B6gZc",
  "key12": "55aMARN9TVaFjLeKgN8gigodtCn4hwWT1Sn8LUKnLcNGS7Fg1UCN4gwB96huiWC5DsfaqmX8aSv3KXVu4ygmpmu9",
  "key13": "46vnFr6ytT2YvbYELrhUkYSrPQ6U4QZYQdTNvbuJavroYYCN6CYL3pnx19AenWJVkE4AFq1iKLnsGGDRRLVti9vM",
  "key14": "2E4r1MJRnft6v35EZBHbV9BbSsJQtq5j2X2n9qkrxox7JQdQ2pNUxGz6SPXNi4JXbfdSsSUtQYH8v5ioWwHjVjmz",
  "key15": "3oZK5VYosd9D77d9bLjp32Qqy8erfwdDRHsoXxtKbL7Ngx9FPdLr91qJhfCZn236G2L2WHDTaXS3ZXcDJ19aLd5e",
  "key16": "3rbGqLgvKAChwbAbtMS3CQ7xGNNPKe2dsXP7B6GCD9CtFSuqUnVZeuwKfwgXUCbiMVucDUR1tHjGEjMMFKe35cjW",
  "key17": "38T4Pk6orxYRT7kZ1URtEprDwsmut6qKdfioxWJHx3gaiDads4pRdJ4RUCUa1uJ7D6wJ7w9KK8vezkyiskp3XsmX",
  "key18": "3eBCPJPTccfvxS9i8Gp2UnsF8XQqhXsVcMJvXuYXuxPGFLwjhrbvWX4xeaaQJdSi6KV9agm2wwNBgwJBnCeEAn6j",
  "key19": "5Zo3uazj7kbGKkkYMX1BMPdfaaQxua2Wfsk3E96C6tnhn3vE3hcu1RXpeBi8poSQCpvH8rwEdWVcSXwAkaUKG4vf",
  "key20": "2fCWeovZ4hKCQTxoN4Q1VBwEXcXJ1wm8BwAw6hdDsGZcU5gVENqyFk2Ny1xrjtsoDJpZbEqhBo9rbr4bCAyACnp2",
  "key21": "33MRRVk3o1zncmiEycXscfmKLi6V4wur4euwLc18rBMFiUZayh4KtU13QwEmkJgugRbYhkYXETjWHC4vnQXqVvfA",
  "key22": "DcroRdK2feDekKmGs4Cm8A4R2e5tHHxmBLzUQrXHGkxYnkkX4UKuLSnAfmpKPBusEgr9hW73YsMEap2HjvNwYnB",
  "key23": "2w4yUyJ2rygFwdXknGg4KU8hk8fUutxJsUsLMN8Jqtam4bNvnA5BQYUAPSh5akTuLFSC4HH4bd3L58BNhMj8tDeW",
  "key24": "w92PAwedQwnZZmQ2EiUkfuxiH9sCsTeRy72joFLWT4eEugQ2NxW5sqXLzw3X8pe7pDXjqTFesj9UHuCv3BBbSnc",
  "key25": "28rgkqYgkzCPbfyA8xgC7nNWPFDWjkpUtpLPQdTD2kKqQrb16ysGfLTmmHVYyUraB5yXxeUVZrUBQsqQopDNsKjh",
  "key26": "4miRvSxuxYi3CbzChAREMoqbjEfFehW74h1RJ1CPF7v7ajzNdR2un9yCRrPMENnoqJ6G7MQyRmFqrU39EE4fZR3A",
  "key27": "2U2ekwxqB1nxNvZpbDDF81C4z6MoxkWeYbDDrMGhvX6rzwR3oBJy2rWXbEh4JVbgpKg9UiYKH34n4gGfK98cJYi3",
  "key28": "5YGYetDQJgH2hBL1RCXi6UjAEGy9DPgrNT9rhKSPYmatNq9XnxtDhxRDdD48frrmtGgQ2TM7oovCZhdCGfUjfP2n",
  "key29": "4KjywhMjoRpT6mNRKbyY2qYLnjKqtmKiDR8taMpszRiytkmL5qYwYkgUYciMjMrDHixUeD3bwG1x7H6SBFEUXrcv",
  "key30": "25UeH5Qk5Fqkeocw8FNFByzs6MoRoZK26eMTrFgsUGHDFQwJmbNVtJA1Sz4ViEQLXmJT2oUZCM7dvGQ8Wrjj9fzV",
  "key31": "4zAJqrw1mVRHZjVTexnBAZGB28nrGo1PvfaZ1CxVzbQefw2nG68KHmVTwSwfmi8NXUusWxcUm9D65bkkW4NvQ13U",
  "key32": "4gWwRw14wNTEsqmzcSAu4cdyQToqZUhzGDFXxhxEDZqZwKVnYijSHHJSbGBYTpxNtaaxpzG7ywzdn7iR2PYe8Jqm",
  "key33": "4umab8UoGZd2kGQqmvEweaU6D1PPkAn2dPKNjkKMgFKVCiSYmdPJrgfxNSq7vrvN9wg9VuCSwBXJyAJCzJDkUxAa",
  "key34": "4SJAtmCgQiLmkkDXm9Dx6TkiBK3f2WUodUC8e8375X3RB9FubQxN77cnLkchyqnBZwdeEQDVkSudSE58AGY7hZZ2"
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
