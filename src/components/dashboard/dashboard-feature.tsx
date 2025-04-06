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
    "23wasFTwWtJ1T7dhTGu8VqsNvm2mfR7NM517Yyk3DcNSr3GnwUtdMjrkiEzEs5jhgxLRYWUCXRtwihRs2GYJhmUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28ojvWb95kTFYLPtoUgnvY6idJpVmkGpsJ45oL5fUXFvhCbETEU5rLQ2gJxRcHZAaKhTGhAvarVGZF1MRvxnZdWs",
  "key1": "5jzHcKojHQecv41KrvC6M9njdg9dFezSUEyFPumoeaqWky9dr7SMFQwg74rDK2NGBr7cS7Kvm9QmzXRrn6FQX7Yp",
  "key2": "6728TDbcjRZz5Gkmbezt5Vt6PJ37M4zCY89HeWQFWkWHTY685XHPsGKDpR9RBQRDn3WrwYi4hdNRfwxH1Jw3bjbV",
  "key3": "2rRKeNgVhyhN1dR43HYDmASj2FTnnqbzrpbYxfLFCKQ6YsGdALzE3fYheAfj1i6QjMSP5pNcPA6EbKErBJW1UN5b",
  "key4": "gVsS3KGVTsR9kR3Zz6tRh5c28BKRJKWr9QXJFQ5CjvLkdVWHKX1Uu4uUugQzHNHLbmR4ENXXVMoXp9gjzpKk2mG",
  "key5": "1LqLCFEzJkgL2mUyuVfvCUugbTDzjZYVdZQCmJANXbRoKSQmPP448SBVTNYDx756xkv3vebGxGZrsVWdkRH4kcS",
  "key6": "2cUkwqXtVL49sSBJfEztVyc68mc6heg451Fr47bpN58e5a95Aoy8ojo65mMe8r5vvAng3Yn68xSCM2pnYnZVpAjG",
  "key7": "5vvwCgrAMqmnLr7yMYHQ7cVh3E3EXwMpxcWL3y273jzmFJfuL7FyVHtWHLaCMWZrMnu6v7QcSA1Uxh5RvLehEah2",
  "key8": "59ioXubynBnrH8ikCcGy8vYmuqbZwuMYsKv57kviYhKYHMySXzWS1sQ6AjHEdgSoSjk9bZHVq6RyrjZ5zFdHa6WV",
  "key9": "2iWczzCuvCpCJ59W8VUL4ZJpZkxt2Hf2o9p6q8TFvAVZJaprHzVcNFkufs7yK7nMt7BPjp9WFqxwYaRykKE75Ahc",
  "key10": "5L1weFYGNPyrCHw8tmhsxkBtW48xMAHK6DuFJ2tEgrUuutyrGDGZ3scc1EWv9wx9ADvmHJj8KCtX3HgsyBYZzvDm",
  "key11": "36y3Xm71WzheSQiR2M9nXba3ATGX2znjPazjSKrFfwHGG1FkJ1GuY7xwNA66DEigR4ivHjX4HyAbuXgjyDXBBDhG",
  "key12": "3tr54qJYxfg4TgeK2qXjiTw3Hj1yD9m9sEUCmgUL8w8YjMo3sftjRD23NuSNSg1M7jYaoL9tRAZ8er81aBQMeLvi",
  "key13": "2GMiBWbHnMw7F2kRiRXwxUpJxUEQ7yULn15xx2nkT7bb1QdtgGyeDF47M8sukUsYf48zWBj5b8LWqcoQQuSTdTKQ",
  "key14": "5Pet5CnPQxFbAEtemeYehSTw1ZJdibL75za2kWVfgqQJjYB2C1M6aayzqa8wrdCSTjvpHY2BKCEeMhRrr8xxYF5o",
  "key15": "47WKWgbb4f3nr62wbVj6VaHjmmFZ2cARLJTSHBRTsbdgGozMhhQWH6gW17RyRrvDKPB5TZ7CQe9QLnJvCWRH6oUv",
  "key16": "3jyi4AMtXxLYZAHgoDPb5uYacbPdCw9VqRoEcae1fuRqSwhQtdaEzHtkS6uGeMy5NufGehVDuRsC3o8kTtixE4nq",
  "key17": "2FSSiASNdCA7pmF9d5eDp4BhKFo2g6mU6YfTPYriZwMgw3DT74LFw8cy2NVsES7rw4hGfwhaQRsHy9XRrzFsnCZY",
  "key18": "2vvFqJQyULguqhrgr49Y9DkNfbcnryjtcPoqkECQVHcMdTeXot1Up1maEyMGRipk19GKD9RqsHzTN6D71BuceV6C",
  "key19": "5UhGfEQyKshVCyqhy36ay91XbXp1c7S4BRLTqC9AJUyiFwPyFYGtGZfnkFutc31HpcnW4Pwkqa3i4sGZXrxuPbEL",
  "key20": "5AMGMKGn5FxCDQu4HXm2UmzNsJ7aMvjJ9USRpz2Z5ERCpocM1ijkXU3AZWBBujzodnkyk2gAFtXYs7zuC4KzQ84c",
  "key21": "43MWNWVw2MXYKFZhhcTDJGh3MyV2Gh26R46qtSTqm39ejPMLK9vsnCzezRfSmy1GrCXE7r2HGaQsjVA1s8MM57he",
  "key22": "PrZDWrD4BPTTaRcnfG5WCN7gqkWiauKvf5BPcRN2A3yDQFM1KN9vJYMhD9LbSTAya7nCiwSJBiwu3XbqMTNHuZy",
  "key23": "45xAuR1GgSDa94gGgKNPknWHQs9ERgvDdE4b3eX1m6zYSt2SHLvd4xnV6RbaHf6eHMf4NAqhXLyFapDodx15M6r8",
  "key24": "22Eq4269qwyqgELTnuBFrMmnNMXKT6mYriY1F5kVgUMQ5bSNYvfSrgmQtvDqYpcH5zUqPnshgah5PnRbuuG21WFt",
  "key25": "JpdXDsDK1gr63A4UDWjQMAEdJZZr7Ekapr2kLw12EeZ4iuon6p8YDvVBJ7zf3TpuZKwCppf4YGYcRxkXc8J3r3W",
  "key26": "3UQ1hmrVazJ5MUCfjayw4DzfrXf3NFWVM6NY9HAemp5QNaYweyB52FKajeyNK1DGbk6xgwoNbhsLx5yi1GwP7vqv",
  "key27": "xKYN4xzz5pGEeue3MaiuHHEBJpb66youVosgCYSpbYfzh66sPYh5SAZh9Z7wmo8wHAi6xGkewoTp7vbVhq6jk7i",
  "key28": "557XbgkhZZVyBouH5JiP6koTEWJ4JJBaDcwLuRbnQ2XpDX8Bmfrw7ijv7qevi6huif6qwoY5zcpFFQH41eiHrY2Z",
  "key29": "4MNGsuoWJeaShwGuGj9E4bdLuaNAi1aPUPkW1d8FVN1BYUAk7KYeugVpb5hvUxJZM3tqHo9rPPspFRzug4XUvhnw",
  "key30": "ZXN1auVAWzEG7kRM5iVJsP9YjjNHL7LwGJGwqxkSUQoF7cTSa4CzsR4tUuBdhWQaitp1mDNAsBmJqEyziqbxW16",
  "key31": "5yoBAVrq2HmPDP649DKnHdv9QXvNznZDDgrMgf3WrVqRtUFfJtTH39EFnHYjSz97J8emmGubyZ12dAm4maHC5R8i",
  "key32": "26PTofpNhTXo8FgfVNKRJ7tPH7PPKq8X3wpPaEJ2gavhrwbKTNAYyWaX8iD3SSkAsbZ8tGrNVo8jhX52nzexWuc3",
  "key33": "5E8todmvbbAhK1kY1dcbUpH4BRUEJYhwjrYpUnPCS5Nkut597b37dt8zyMSepre3kya1KsWiVmqF6xQk67kRu7eZ",
  "key34": "5UNZJZfW6bG7dqYyz93MAiRy71SALqTno7qg22xv8g3UhytkdjbAiLLqQgqcmamE9b4yW7adw4kNTzxPdYs4Krsk",
  "key35": "3jhSRdbS1MDXvbFg81fseG3tyEHwE2pXgCAZYiGag95yNFRQxZfsPou2xRVeyGL2bRgHM3BbQ7w8qg2FoirwuTnX",
  "key36": "3ZepZ52tDDYwHZieZFGVTQ6HdbjAGdMZiUx49ELgXWn7q9dKoSgK1CtyEcLPQXCafHHLrhUy6QQHqQ8FHHGZCMy1",
  "key37": "5W32ZW2ZEjQKK2xSR3zRiYqGEbarfewkdQks5Zpzbcctz3XDv1E1YZcdVNYiA4kbtvBg8CtjpeUtD1sg95TWkW5P",
  "key38": "3u1EqXhuiHFi54zbHJ8CpH8Eg5siwS4ngXZKbCWTLRrpVJSWtA4gNQEmSPauLxxf4SVU4hAFC8sKW2ySceL7MucW",
  "key39": "3mqSkXEFPJ6Kv5xFwvhitPjJpT8Zjem3vXVmm46df288vW77bimQ9raAegdPGAWh1SjKQqMR5PY7YjvqGAagdCfL"
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
