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
    "2xPVWZqtNrR2y7L4S6KvP5AiuHr87oeHKjbWyxeGQER9FYubouoYji2bcirjnd7hHZF1pHC1oFA2RGcuZWWKpUTM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2r7apJiY4MsiwrNWDAKkcevV4Ujh5sJNuyFunuCcpkGTogBEceVsMTL7Cf6g9A9zFWjRchaVgSrmKPCyDRFnYBJW",
  "key1": "2S9BwX9jkEcks4ueSBmFqTLGZtR7goK5pfAyGNk858rRKc4FrtKsw9jo37Yr6dRrqrLJQC5f1DSRCVjSeN3XtBNL",
  "key2": "2dkABcs8m6jn1hUyXc1kBuWUpEniAs2Z2WHWiiDMFfNZ9YqPMVVzWUmfdpin32XoZd9vPYuD2JdFjmQqdoJAi8vj",
  "key3": "3AiePuQVKLwqrmAWNZ95ouaWsxFrHg6Xj7PrgiRbUS2oKxyDMyarjWqJ6YiXLt65SHBtdYRpKMPKqqJgqYFsMt9C",
  "key4": "31MQy2c49ZQAVxwK8YXnKNXXcWCyRvcoVqP8PJosJMc6pWoa276KjHDBbesv3CmNoxEqZzvJV1K3uPNsCtD9mEk8",
  "key5": "21TQCmTimLtHB4M4jRGwiTmw9hTe6LhHdRabeFenGt8nUaUTgE3356Eb5xgPdLv1iSj7c4dKz2Sq75uup6RJH8BD",
  "key6": "4NHXe8Q9MLXQM52jbhYZHHwr1ywWEVzysbZJmKkPptLnzZqbzuYTXXV1MQZQ7VSKA2bCj3xSe4XbGVY4SS5kufDf",
  "key7": "28D5rhiZcKJvtCGzJJYYeQPrzYP73h2jyY8id37TpQQKQDUKSQAHf11iAV4N1DzTRSuYhECARZyBy4b82Nw2YKQR",
  "key8": "2D4tKMJd5ukbMHtj85vzhFLE5koCmqfYRNpULgv48hkVUdP8PPfz7V4fKCsUGpS7VQwhc47cPULEFLcJr6r17ak7",
  "key9": "44n7DfyG55PChJnBSGyWe6og5MzB2gEhq1HVY4gFkaTDG4oFRbVtQbGFtesP7R1k5JmPG4hrD5UrrBvhbDhRJNPn",
  "key10": "4ZMB1V7VnKx64vQ6pWBJvYNqwwUf61rJzEB9TZ3spYuRiLT82wnNb1k29krB7enkxDWDuJQsjhQAVEFBiLEV6rWk",
  "key11": "e1Vh89sqAtSsnGwkfGoqSRVEB7y5gddLc1jBCXspy2xJPKy2ieWHyg5z3nDahaPNdDBu72nMCdc8vFrnx3JdBg8",
  "key12": "4iiW8WwEjNScMSSXk1fL8PsP4gy1hgtjZJQ3ETp6LVq4X6jjLrZFc8eqFTee3GgiQyNNXWGpFDBBeEjVo7iDmTtr",
  "key13": "RckvBxummyqEYw55G73NrFGv3Ln9jJAKtvc6txF889DiYLFLmzti4skNsTjg1iwiPwV33mk6AogLvNAkHbNKDu9",
  "key14": "4m4an15nZVdKerKhv7NoHLRXJu6aPPCBsSFCHWiAKQ4mVXumFDHjcEJ5hzwpFHaJxHDEidyP8Y8wuspnu6ZNki2K",
  "key15": "2m4MD4jwAZn9pv4qEG3nvZyFdnyem4DCXfjrvvJu8kGgJ9BQ7dzTE3LxMJSy3fKxyXLf1am7T9JagcVLD3DbXPMs",
  "key16": "5mNHDUn2agwhwGWJdQKWSHtE7m7XQXmYxHrw7XCNwkB3thaw5Tnh1FEdAWYayG8TJy2y5y6e77AteQGgR96WPAxG",
  "key17": "4RYpZ8hzzCdnhFc9oENwqNtPewQFoRUT98FjHHZUDVjMEgKtGb8mqwXu77DcyHzHMUsYA71eGemHoVDkZPrLcbEm",
  "key18": "5J7DHUwxMdo8dHHo4BhsJ3eKG8k9nZNisS3ZT2j4HYy5NmBzu66GKjNeLTTPhsfNtHs6BLj6ydu3icH35TALE79x",
  "key19": "2zaSXyHutMTU4wxLZG9LXmQzPed57y2FrpGqWcGM6QGZwPH5FMDvbKmmRUzSVh6yukLAnjjkaxcSAykWwMCZMPns",
  "key20": "b1XfNH3cWMckyhmdjp8egASo5WRo2Di4txZHcef2BhECr828YYoe2pGSJyRtbEcv1B8u4T4QyHbxFaw7tySDo4f",
  "key21": "2ear6Cam4xs74KyzLuWX9Rkx38UAqCdxw1w2YtXebzxwi48kMgQK8Kw5nv94kDVWbdxL4QpujCuMDXbeafUz7W6c",
  "key22": "4tMfWEqFktqSZ3HddjUficTky5vsGE9G7bZNL2hxqJxaQHwQtX7c4FdceEiK6JqmFRtJuqNt3F15Mxjx8jLQE2wu",
  "key23": "55DT8RK1CqB4ogLCFKtggJmtRdAW2YADrqptnoXZMTpxybi9HPamwNahA9QRwnrdcXdBhCfkqTeh3mgLNvQ86Lmw",
  "key24": "ichnrzRxVoXy9ueRg7XCYzDZnkbEFrcTmkgdCLPd2mNX6QpD27m1bR6nTCHhi4o7PTB8NJseFvdJ3BYLHzpyWWp",
  "key25": "2mxy7kuJ6k8oGhDxjQw37bKXyU2Y7sM5PXxwVThNPUNRJsr1ZgPy7eJVvDwhvDbnQBLKbmUG6L7oooWApTnBkosJ",
  "key26": "ZN57aRgJvgiqC4y6eQA2V1wEepnRTHXi8z5LC4Vy1hDAZZk6phQiySNZrAqNYZNN2TxRdn22H9zgefWBkgaucDR",
  "key27": "rCxdmDUmXNrLxHbtXAhCeCesPnRVhvdJgngJewabh6ji5ozCk2z334YHRZ2pFHVdVLntvh5TLF5Gf7AusEDuVe6",
  "key28": "3Q2Qdh5mdezB57XH9L21T6Tmtr2C9JJNxohm6g5jsHTaRR7C9UFV2nqxfgK4wDBTLrtrvUj4XgG7AJcxfMawsfJK",
  "key29": "31jTmsHewdud826jTeBTMMqh9ob5nNBtj5j89KXArk3NkmyN8zb5gv8SKE5V35WumeMC2jcXy8C3TaZJG8iHWBsr",
  "key30": "45siMSfUi4jVKBs8DgBA77VQenhB8WeEdHV92LJTARr49CT383MKxWnPyEMQboa3FAPFfFxovpsJFDMxet2ncp4c",
  "key31": "Q2YeXNqDXSfzbi4d2hhKrxKP7RkS3xgND4TFBQnZgv93zTNt7rxUu8MHHjn1p3NgsS7C8yWESCrPBk22TEejJzL",
  "key32": "4yE5oC1mczHnNThMzjrH67k2MCG1ZKtokZMkoVm7UhJLADQjU77CnBEcn22G8WbEpysdR4iWGDqC12JBkgWZQZar",
  "key33": "3NUnyV6CHdU8Ye64Ze5NGopRU9n9dX4UH7gm36f8zKfpbxHQX7ecvmZKKrhXyij3ffgz7kyxQPD98XL4rAf5pdxA",
  "key34": "44PXPQt2agivKbvh2eC8H7utvh2jg7GwLMp46ZzWHzD1EgLvB8NvTHnU8x7gRomtxKKtLw57X1cNp4hh6gR6TGvU",
  "key35": "4pZhrhso81PQH195SN3VuuBMVfzrvLTMRP7zVFC3SYLFohFWwZyvvJpm2e9ZqozUqv5r4vJsLew3jxigqYucTTVP"
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
