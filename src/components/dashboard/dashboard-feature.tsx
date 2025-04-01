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
    "5J58bZXZQxHEtqa2pjY1a4MRzSDvT9AmoU8L85Dkz3VcfGKq8LzaQhWp3yNGah9sTFRb3vT6vKiwaZvWNaWdykdE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vKu2CZbhxyakEeBYZEd5BwJv2EGiJdegUESpKRnZ3SExCyPra8BSRLGH4gzBBWhy6CAnHmuHKEPE8tBZ6V9b1bL",
  "key1": "3JPS3j5u6e9RV3Cf7jj5QUzRR5EGVLeamsCcT552FxyAAezXeZmGxckW8XytkTQ9mqW3tDTrqnjqfnsCgw73VL1H",
  "key2": "31rKh8kdYZf5X3U8RDoRpmLMdidogv7YZ5DZGBmu8CPqi7mpcnzdHizcG5MFJTX6u27pqtmCNFYLbhhP8vPBB7hJ",
  "key3": "3EaxBnuX9F8FqzyMpyrhcdPtGM3CmerfCgqmDi8XckLcZ9UwcVBQ1QKrYxNkcG8giVi4jBhMbpgL4fKLQLsRbPMT",
  "key4": "3VfD45xxFN2ybGtMi1eMzta3ZcnfAvrA2dnGV5CC1JEhJoMJJGLaXcnMstyyifkoWLTwpdn5heM98WD4TZGMLLdN",
  "key5": "3vy3jCXUHGCUzdKnEARYmMgqh7jSRmG4xLFhwEAFiDNNBiR12EUAEp1KsY3XYtGJ588EbVkxgZv9LzeVcDx5cUri",
  "key6": "49QqZqALmA8q8Pb7QJ7qz1K8fG3PUWBDDRyRAVJGhcMnrQ1qpRDZmEztAwrJnCYjEFvwam8fRBzCRAJqgJz6S6QW",
  "key7": "2CnH6iQtaRobvoadJNoQKFq9ebqq3qurjFJf8ERpKetX5G8fbMiF6YaV3z2ELapBpQBmoK5cVCxPhZDqhk2SYzZ9",
  "key8": "46hCDeRGjUrdc1tbCvQNn9D4srU3urs3iAPexuF739ZVnzp6dLLM4dS41gPExg4WAiZFhK8QiB2wRnUuahkxoEAN",
  "key9": "vajb941K8co8dZwwVk72zqUoDSd8Ed8R3yyacHTfuhAAv6f2e2zHgtwWv6KtNySdbfvZPMvzjd8byeruyP7XdXY",
  "key10": "2WxrT5fu7kNM3N7H3dsvydQ6PVhY6raWKLJE5Chv6TUa2HKJRqY2fnbmbivvYogSPgMjQDUmHQSPXZbJNzKeB44j",
  "key11": "5jKzZePsNBoaMjZru7vc1xZhP3drqZCo1FRqTbMUP1PhCB8vsgZrrQxkPwzGgWeAZnJSGYWoEidjAdxTMRdBhro7",
  "key12": "3hrtqfmRcXn2NNJxjhTvQmRiD1W96kyEdheeFuasBLnhTMYQLDPpCsNRVG6AZf8za7FpjNLdLe3UZ9232CwbJ83W",
  "key13": "34kFrvHTmAqHJP8HF3kvKhFT6WhvXWFkgmVepRPBHKfunEQmUi34n5Kw9VAaGse2DiLv4YAEhR4R1NstEpuqmgS5",
  "key14": "QHnAf2jPWPBwHr95XCipw3uWfrCd9gnd4KqG6wQwqeh8FUhbHj7aEqFt2f8BuW5bLzBV1WFMQyRNpYe4A5azBnH",
  "key15": "54XrTJe5uJbudp1UiBaGUgEMnUNf67oqTrRq1sU3rKu2SkJBbTnwmS47CQQ3uuGh87CH6h9UNn33QPMDBeZ6Exyg",
  "key16": "2XK7hZ1vxGmRdZcfRapSzYDhtdEzdvBzUdi7eWRMtt53PnASNzGuY9ZXEJ41x35zd5K5nsk65xS7zAbin8V2BL7M",
  "key17": "4XQLm1fdA9xrHRBN9E8vtmYq9pArQPC4Ct9KtmMWcKULucQJC3vKVn4zpDibdaNTPpq692KRCXeKxhxJ5TYWtGBz",
  "key18": "67bPYa8caeV9e1EAP5FPCaUpXMgiWxVD2xevXGyjb6GQB3qpSSik4YoqUeUDpbut4t34iQ5Y3ytYKNtJAq5S7hy2",
  "key19": "Sx9PsF7bMiPP347iqAtZo99idTUKW1HMAueLK2UoKQpuw4YQaBg6CUHSMCFD8gxQTA1mjZFy27Eq8oXgdCAMra7",
  "key20": "4U8tXuoJBGEQjpoRRpTzwCjzgegBQUJUz8uCABGejYvkr74tYXco8VC6jDChcu8exKvKxJJbQciuoJ8qAvfcVAG1",
  "key21": "3KdHFRWhfb9Zudr6WNYU5CPvgQKqgru3Nkyt9vMf7Mc6jDV9kvGVub8NvsYjyZynuGfnJ1hyxPTpuvW6e8FA71NV",
  "key22": "6Btm8yyMnVJpPsG5wPYXTTgUQCWsCCbqa5f9BEoJGZntWDhFYbx1QUUyy7j4R5vQ3c2ceaQHQwLPrnmMZn67Dwg",
  "key23": "5tBsovZ2tqDVnMq3krQCQHuHtDJe5QRTfok9VjaxFvicov6Crb3VUunMsd4892oDd6sAp1fsa2pGVH3TjEd32C5H",
  "key24": "2AyikR17DibhC2aVboWWT6tfSM5MJeABx9KyDgnPLL1nY6QAhzqD64LJTRccYnVa9YC6HQLGuJ8cDmsb5ZZ8qPiA",
  "key25": "41iAAUUryNbmoXapgikH4XLAPBwnWVKUj7Rkkfm2zd5RncRz9kebEAx58PkYdwCAiRpvETUsTL4ouG1xrBWg24TR"
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
