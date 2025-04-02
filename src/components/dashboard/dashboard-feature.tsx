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
    "3mbhWwxrJteJ4tzCyV6TaLb8EnJ9wEhiE1ZGTuoxHUZLTkGo4KW9evLt1Uk3Br7GG3qaHiYhMd3xxgZF7D2Yq7db"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mTpUVkiJ5CYMokVeTaXrosPd7i73FTqwMWwchq5pkQ8sa5LF4QHbzgL9AKFL5jEnX7MT3ZFhnApbmhWRHYKuNAe",
  "key1": "33CXecruCreDcmn5irNvZnBpT14HdWW4bsEENUQBSEQ2DSX7wgFBtNwWraPdie2HYVpK3joJb3BwZuJ3tJ387j6B",
  "key2": "21rmdiFmuPHivm5sCV7FbwpXLn2K6shguq4oTfaD9ERjWmsaNAYjNgvNXcV7k1JZkQw2fEoYLMQCB9noHaubkjt9",
  "key3": "5EuoZdE3ico2MCHFc82mJr3ryFgU2nBhibCrQSRAKvTi319bmqeEpUivK8zdy6o7nddyBCjhPR6RyVeuA7RoDJXi",
  "key4": "53Zp5hcQpcZ72j6HEJ89bLN5zJUvAqXM1wgNJNGZmAsiadGyGiph9XKjnZtz7DXdfHrCuDMDfyco6mqH13dgNWAf",
  "key5": "519wyBbupHmrFYk7mPQERHNePZMhctrGedwsfcadQpbagKSEh5ro1vyikiyXqxKnaxjgU7QNDGcnsHthhzTJDyTq",
  "key6": "5r2pyradpS2gkXCYfkL6asBZBm59SNUnfL4JVf7cH5fe2QE1nuMvnhKsXnxDb1ykx1y8fFNsJJoRcgGzePH7utym",
  "key7": "28TR23EYLuvF4usLzC7UnNTx8EzaGNDkT6tvt4cxyBoov5zQ1Vh2XnMFHbxRdLtCx84GVnk112nHWXkrDFNyxeVU",
  "key8": "5xSCXsHa2zqF372Qzy3eGcgQsnB4W8aX2Duc8oMNNshtyP2RWbTUV4RpJMcMpytJ6Pc91t41UuNSK9Utsff5qhju",
  "key9": "UTLhaZaezFei9WjANc21aPY7wcAwTFMHRgKXryEwo7F4P6B5HYX4JmGDTERqv2Ap18gZTLC6oX5eToPa9X23W4V",
  "key10": "oBvbbMfTNGz3N6FodgFcd2tMKGmgZLK6P45YXxpYAr3JiMYb3tL3qNana8tXGTGkr57nwuHGiAuxAJ1e6SYjaHq",
  "key11": "2UpVsWxM7Rhw8wnJfJ2PUtSLmgwKb2qdc4wuoqEBMAZgv6th45hJaGYXnBAhdaeoQSeNvjDgrPWx57z1bX2ctVae",
  "key12": "42QGGQDbNHQxrRPrA6MLAiXco7oNvA6nUhJhtGvbzuPihgbaxmwTQ2g2WCbwR9k9QcgXSrvrveYSKUoGmkv86Cjf",
  "key13": "3NFuRdTncLmSRfDryj4YsT3xLRCFkAoqaymHmwNiqGvLhwpP5PR1JezytnKxuwbJMUp71WQ51gWZe6SUfKR1rB3q",
  "key14": "3s6R7xr4Ya5XwHujm2qt43i8akZSibJVWABKsfoYequLu85p4CeG1M5H4rjtGy64xwNaJybAaxHvG8vfoN6NQtzd",
  "key15": "LJgEhKQ1yBKhv9qthuysX9m1pbhBrkCJhUq7W8nAcFDT67CwD4YRNjGyGxmCG9yi98QxVpNKoRYvw8knX5Ais4P",
  "key16": "9VgZ3okoPBU4ryzi1DT9yfj5PzFmywCjrVdBPUfU9M7PEfieSfDY7qHrC1DBUqRkA9pRQb2Eggajx4kaCKcEwrS",
  "key17": "2cmJpR57KCadhUt4DKeT3EKXDDxq1xW276MkEHNcwNwASrWWTRWPeVFnWgYFWh2yQeeETftG1s1eFZSqi9u64Lka",
  "key18": "Pke5JZ9FHWSTkfSsQn9k9hsF7rFVbZxgqDDr71g7wdSsFyG73RCiTULsLLVEMTNgYPP3ZR9Ryosax2DLtpZPs9R",
  "key19": "qpBcFUFC1BRE3fzSaGGsZBWPaTdww7ngLJqu3u6piDCPzdGVb3BMEEkNURW5YVCKZ2VyCeHDpe9hrVqMXBUzb4q",
  "key20": "4j1qjSHvCATJUceytQ8G9yf6rPXuLbLS3Gvd6wNbfV7LfjVWGshAu7TXaDVhdi4pVEEAWg9BohZQ4FCZAZMW5uLB",
  "key21": "33uzaT9Ank4z4NqBTCxAWerBCejL5oAuASaF5rVd1o9vqR5tF4HpCD8Ys6hoo13ABEuK2FTYSqX7qqnjKbFagaH8",
  "key22": "CgyWnFPAHDi6ZBjQXPCcqaVgKijuRXMAHBfekB2zwKDQMwGBgKphE3Q59F2aDBmKmUyJzNTgwdqh28pGQgYXdgJ",
  "key23": "5k42TmLhAN3FKQ2NhaoPzR7z4gR3d7YtMTRqKwMSUD5wr5wcTFXL6jWwvzjy5kZfHtRcFYmvBPUrEwayQj4DfwwV",
  "key24": "2AKuzi9otNPDenxRiuXzeEpdzZUmR7kesV3GeAk3pBPeWV73GAi8wZQLpMpEt4iTnKiarhxgWsTvXN6hcF318yyT",
  "key25": "448pQznrQKWDnEBX9vSeKFydEGrecPdoiATPK7oGUvSeACjTGvnHmBazRcFV6Vb6VBaKfkoAA8Mia525XzL8qwui",
  "key26": "41WaDJyHVYD1EbVQNfWVA4SgBJE1wvcWSw67SfPzTDuX9GPzhqmDduPEm35uB8uVSgwZQgLta3PKjMqpbRsJrzr6",
  "key27": "JLzPQtgLtG8gqSvvpfsYsQstFL2nCS2SJErhSzmiJWHCUhxjyfFHjGcUcCdprjUVqMEn3y8nHY6qdo4nQB9HwNW",
  "key28": "4fL1w5do1qPh3HGToHin7A36stgo2R9YYwPqiEsSW2WChvNxfE2s2KVTvW7awTAzsdrAs2E9KZF8Ue8aawpH3bi3",
  "key29": "5A8b5RMd2NvnA5cptSM114BesEoJAAvaTzEBMemDc1187gunZhj8VAra4SPdttocscw7ynUxXWdy6tdL2HEWBbqE",
  "key30": "4BxmY8askBUKfPCNV4Fj5tS5mh75Jr48zHmQ4oSRCyFMGXevKqpm6Lp1PNGwpDkNf4QAPPBVmtnFG35Q3RTTRSQh",
  "key31": "4rbVmGzATZvzpv1cJLSJCqujQtpM7qk6kBM34mSEXJvYLaQohFZyK6QrVKtHw3ymHMQrNR3RYaoYxwe6EU7hSmn1",
  "key32": "4t3SVahYBE9t4ancvgGA4RvPuLNyXn6ZG1oFfWHvbVrtFwnuzctwz5UvycosqZevrCoFMSDm5zArnCez71zWWMbW",
  "key33": "5iTY6CxpYYPiD2SERwo1W5mAFfD58KsBE8qegSuPVsVPWgwdz4ZjF2Lt8xP96FxTJthktf8y8BD5Zh93d63J2ToS"
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
