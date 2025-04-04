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
    "5SvkJvzP9YaW5sWawVPdqeBGvgMHcqturwAEoouKJb5voi7Au5t8Xr87LZzgnm5ySGj7o42mknPi4GuUjoWXXxcP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Nuqw6tyFs6AtgReuQHjLQkcoz3YKCnrxdcPqvBAnzaERK33CYMqLh51CXAoCH1JEYo1873P8dTbw6EMfxEBKviW",
  "key1": "2apqkJfYJNYhhsKpfDz4inUpxKFtvvCcDZcBhh5xBu424zpoAEXuNyakAVMB5PhQ4kKvhUd6t53TzDjYvVEkmokS",
  "key2": "4Mzc3LVzFHRet2WC3ZGNnhVJEHE18VStqChUCmVmoURj8VLfUXQEHtVqWHbnU75TNKha2HPTbVWVkjLkVC5cTzso",
  "key3": "4G8Gi1cCn6LFcBrdZDJyfR9n48PbcwdkKtF3xZzX9at8YUNodqEx46JzX98kP4ZVHpMQRjYzhTZBn2MbFo3habei",
  "key4": "2w3YAziPDr975Y9zH82yJ9hH3hRSa6UUDKTRe7CtEDowvefMHDFz6oWEM9HQegHfPmkVGmJccXvPmGD87ukNdWd2",
  "key5": "5XUUrm5EGANSYcrtqEJvXdGHZZsckU1CddQYxkppBe2mepYy6CwUSUAmcyriBBnbqtnTVjsTtjxTctvuJodZ5iWs",
  "key6": "4aoA2szCCMUekZFPLYBb1G6zsKGZietPiT8BJ5rgisoCNbD34YkfzrgEiYpDURCFVsDKmS5vtNZgYrSmwrZJj2HU",
  "key7": "32p4FN2CHmSdZAUxcpfKfgRLejfBeeFuARbwukncvTnAJrNhTPBB8XMozYPpPCPoQuEhu7DGTyuAwBM4iVg5Qy2k",
  "key8": "5Pott7dYmZz3YB2UV2ppwy1bwJ629h6FNowob4PEZKZgLoUyqiXL5YiKvdZXeSV3h1tFMFWTdeNRcvwbcZ24DtRW",
  "key9": "2sFx9Y5SuDcJmaEQGnPRiRnmCE5ZG2ef2UBo5AigARduHQSv8ScC7a64f8XxqX3ybbfyCd7HbgxJ1hrqB4TmbyG1",
  "key10": "5mVkAvx6JHteRBm8aYRFzcwRCmQwxmxo4tk1pGB2yiEAPfP3mcc5M52AWk3RbwHo2C1QE7RdbGxwifuS7wZfyyvr",
  "key11": "5icRPN46wabs7J2VUPEHVeGFd4Soo5zBWn2byERsdZREDpK945UBTPz6amrsu4f97BQm2a6FDaf2zsy5dRjynkkv",
  "key12": "3m1RwnCGFfpLZ2PUTAVBfvz8pExPNLTPo8Joy3ZYmDVi7bLVq69wYwnbWLmmAu4uwGJ82ePVYKbsgoUzfmDaKhJ9",
  "key13": "5vczen284pUHkqEjT33FuSZGxRRcYhuHSK4tkdpzMdqoXcaEkxxn5b3qqQccidGR4Syqgcup1oQfAhsAQV3fmnBc",
  "key14": "5aaWe2oDcRi7juEXNh2V7vg3b8rtn45EAUV3BuGcUHeYs9CiA6TxWCTqjxWDXFtpXuNu9B6FWKJhxHxx91vE6n3e",
  "key15": "3hXS3TufzgYj2BYSXTtbVLve1ZMkg4u624P7PoDpwbJcLf9Me6djSxKfxgXrFTewR6iE4mceXW2W6XnPLYYzsfvr",
  "key16": "4hWEwujTj38ja9dFia3FUdiHUZ5LvVLCbFzduq5ZPo725oPHdApiyiXZsDt4khi2BDxfbVZTPJ3a12Cqs9ziHvcg",
  "key17": "Y6evGcFvpRWrui3mPe2HuCFvK7SaEUf19RxbwJAbbXqsYbXLhmS1SebJPp6oHiwPRyMsM88GT34fRw9eM9cCA2R",
  "key18": "5T3zWHjXgxPyKgsR4t6qEfpf5uDjaZTBUzoJBPT4AFQRArs2zzxmwkujJTrKVKCzcMFb1NDi2rPgivNC73q1ZyRP",
  "key19": "2pUZqGT7gYBG42wxXE3e38bUdhojhAy5JnYwrPpvwoDLutW9hjLJsczYzhftF2UjJqDf3qQuudTrHnfxotWpg4CF",
  "key20": "2QjpxJKeqndzpBhEZ4TsH8aLvFKVu5nUKJqBXzwsDoy1pXbhYyNHFHtsbm2pbHVEDSLa61HJV5z7ZkWkVvfdwWF3",
  "key21": "5p3nw3FLdyEHj6Cd2gsy5Ajhie2HJwqyhMKMpAu7KLgfShs3XYyvFP42V7xonukfSho28Krb859k3FmjFVUARiV9",
  "key22": "31WR9FK6nAgUsGXLyQ971VK3dmh1PrrBeggSjM7cBAdDbaxMxMBm1fdqJpdisW4LHhe3CyQFqcR4WS932u2WDycb",
  "key23": "5RPS286TJnYPptryvSfPiSKQgFe2hb3KKshccEHXAcU8W7XCVwgudUZpnHCRRuvFAf7M6V5FyjdqbL4gfV7KfPGH",
  "key24": "5mr45dK1Z3FMevJoHKi43f8dnptRuhivYg3ANcGrXWH4RBB3Rr4aYtsbYhmMA2SCydoYHARjfiVkTeHHjrMcpqWy",
  "key25": "dmJPme8fFrtGXRCQGUwWbfaokSJm68YeqMzP5eYevn7x4hsBdAEkk4C7W3K9HuQMkYVxr3ZGoC7VkFGcsM1UoaX",
  "key26": "2fLNkB9F77Au2CukmrU1CeVuMZLnJyHzuXJztHjqFKuqmpxtc5AitGZvwNGnP9N2HWxyfPH8HRPzVEAJuKLNPFsR",
  "key27": "4rkuBLVVunxYeS3amE4qWVovG679hSuLLy4jRuTQgkMPixikTweUxQdwK9cp6vJgt4zUM51v5jmW5YAx3RnF356r",
  "key28": "29Wacvs8oeqa43s4HX3G9DXv9tKFn8ZkfHrcXUjF6fWUteY172manBFkUimxvwSDhcqyfK8Wyos7UgwsEL8vVcxj",
  "key29": "4NSebaLFGEZQ2ZSj8pj7rxCgPqDKsgRjkQKi4uUbRfowjyjgjx6yDFcsz4sfcwi4hTkcuFhUXWJADW7NkV9STMZy",
  "key30": "2ppvho5T5jEfwgtf3ve4ohh2bSNJefRAXGuaMzTPVZTGgGCYqefDntFd1cNHmvaq7BBnqYsubssVjgUSKueQg4pC",
  "key31": "4S4gyU1hr1Akr79N5c5Fm54ugEbcsH2pRkgeCotUdfeHnyPej3cZ8jbYxn4E1h9PH7fKDyZEMjQkTU1q4wD3pUQ",
  "key32": "4MXpN8WJVXUuLVCaCCNfYy8xwiPEnZ7hMFaGaVeMTC9Qihh6dHUiMuPj9Xpi8kWM7eUXeVVwVNakEADs3j33fwJk",
  "key33": "4HEfUFtUrjnkGkDSdoG3f7w9RS9X49rugqdX3ADcwbVtRPXajGsmxo6Xo5eoMMUjdqq7ydGT9HzWkTRMDHm6Tqkq",
  "key34": "5AXWgs9UU4S4Q8zTTAJKKN486cQfLSTJatRiCkbSf6LMsd1NFCqne8ZHGqn9Hn3vnvBUG6rUhurbUenYdHizjtm",
  "key35": "32zaARawvGG1k1YRktTphj3MC82oWCBKHstoZjWRBSAJkMjKdB6e43EurVwQ8cqbWBdq7DrHqVjFvNvndutHLQdc",
  "key36": "4j5n16xAgJp5teg3mrjGScYTMPossWkw3nhRLT3Srg2RishYMXQ2z5L4CgYW7xjPmsvANoHN521ZmmshoZAaTi6s",
  "key37": "41vFm3xKA6nVEo1ZYiYrM7F4w6wvFQprYudVvLKE1f3TgJ4okTovn3iv5LVQyGDBUCY7sAW4nXeM9CMKYavn2ozT",
  "key38": "5n4asCwRjr2sSnP5ga124buVc8s5BSSPg1rm11A56PxKzQtfGNL3ytpL6SKcbjwTkLrETsvT4w2k1oPwNX8Efj3i",
  "key39": "44j3s9WWKFjrUc9Gt9Nz5vxcmmbubdWPDE4KSjFgwHeXQeQ3AMBH7e1TAEXt4UmfW9Nv5Jp3eXD62BfvSVZqnPXE",
  "key40": "3W1bpbX2cxgLnidVm19gCfZDJkTwGTu1iC5HPkt2N2tsxs2tphXEW9UiS9LPxoobg53kvaw5cDbC2mqe2VTp2Jjp",
  "key41": "5wBfy5E3FpWUiE71DsQYCvT3fzLKAUsqmPKW46yn9YDgvLGzM3GHv1wRFzGUB27M9SmZ6d5XXLzrUUBZaszRDwMB",
  "key42": "2onGbSFJSutEXVpMjktFV1AsuT8dbaQp7Pto3vYZ9n1QUodyqWFAonqgZpWnzDSc4JwAqDyF5qER9oVmge4hG1f7",
  "key43": "53h3afRQ8yiRaWPo4d5y4ScoQtEt3gkw1L7GVUn4qseSjuuuxQ9uo6vtzU4s2ojFnP7BED219xgqEJjdwr4V9TS5",
  "key44": "4VuXLJ6A4rwV3C5CCZJBwsQ1Rx9WFC3V2DGQ27SxYYUY5yBb5gxWE2XgHAmgbwsJnE6YvqBfQKK3vt6hqJGQDXpA",
  "key45": "UHt18TRr8gRYBBoVSGboKrXcrcd9TaJrsYmqFZzgupUYfvC4fK2KTApLaWHLNnp4pSWPhLh7a94hUcAcMBgq92F",
  "key46": "2MbjB44wqCdsW1xHvtopVp7HW5JDPSSQ4Xa7Rs36YAPGtSEatB16nt7RomVL3MtqucYSjNY2josBXxcRUD7pT2ir"
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
