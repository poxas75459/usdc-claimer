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
    "3Psf711wPXPjeChQih7ffnvgX7TUtJqykH7zMZYt6KTP1NP1UxQEc3i8nNwUgwsDwnyGBQnFgXrwzCJBWiVQ8nsM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UoYMgE93RrJqw7XDNoa26gDHLj2wM5A5zYbcBKxYnhpXSuoeF8Kr9RCH48jomAmxhqzGWifD4UguYr6X5N8HWLC",
  "key1": "2ntk6h5c1ciYthApX3xeym13NiwGae9jsDBoxfssKfF68LV2AzPdLEEqhqLC6X8M3eshAAtU7ePeSusBFz5QHdyD",
  "key2": "SVhsvhcLFqVUoqSJmvBGWEzRa1BBHYtgJGyx1yKL92FnHSMPxy1R5M81vnyYqf4s6ArAhuvmxKnmEojygMQTPP1",
  "key3": "VVt54gmiXeYbEvZNFo3udEBV5wZ7hdj5HLiUY6MdbVxnHKXgwzMeCcnPTjAa59yupQqSLiJ1wpg9EukqkCojGU9",
  "key4": "577dh6gbx9tCTnfTthJT1cpLvFXjUQceraJ32ZH4a7VvcZDr5Uh2kKPhir8FDsdPKqTDAPWF7n7PYmjJz8xUMiSS",
  "key5": "5VVp2V3V67JatjPy8bxHLpTAmrcGNce3pzeZiVh6rzRgVAy3iGs8QtRvQwNmN3ALAzetSHGx44MDX1yrhQSYQbCR",
  "key6": "4Yod61sasnWejFNVkJEH3H6YiNPdwjVufeMPLx4iCvR3jmiQXRy8FJph9aLBQz9ef8VT871qWzJEGJV3VukucWyJ",
  "key7": "3PZmx9TqAu2x3Vp6F4x3vwrPq2yRnjoPfdjN2cFnVpGxTBoYs7HEtTYm2SzsdhqBkdSVFSg3kVjn64FopYTe1jow",
  "key8": "4Kuy5mKJ8fEEuEkWo76S2TxooH8WQ4AH1ZRyCecskG3CrqeAbpZzZ16PJjqQFEp2cYDcXgSWBBMhyhh4t3pWrgz1",
  "key9": "2yk6wEad4eC2JCeR2xdheRbq8ubj5LJva39c6qm4D44HLw5nhdVgk4F8zpEN5PWCnUeY5LW2VQNXbviuEpMjuPjL",
  "key10": "Gm2dUjxqLRjcPTPKfAyTLpF21o74fGv7ZT1YhzQMDpgo2AsA4PyZYPxrcqS1xFDaQszo2CYqFtj4eyBRBDv2Myc",
  "key11": "3oU3u6mPRg8Ay2oQ94dNp5sSbcHEkw4BXH97PLsWGGTfCBou3ajxFw41Re6bdH3xwExt35VA6tEaBhUhxHpaBY7m",
  "key12": "gDJJZ6GxNMJciJTvPoqW52B28AcpkxiYmB4aNpWi97QJdW1AfyoTqFQhTiuFMTmYyH5tDadjxM9QfZJRirkYDwD",
  "key13": "5REJ91marXW57mKx4TCcbof1HgVedsrcdWHja1Sk1fsEhoYZ6FhsYDZafW4Mr9C9Jo57QtWLFHEMbT2L5jptmt2h",
  "key14": "4Z7gu4QwVnDRoPhB2uQ6tGzSPYfFaBHYF58XtDNtyD3EXaiZjgQF6eGwLrxtc6tkocvX1wxRchPz8dBrDLnjkkWA",
  "key15": "vFEy3oBcomLUtazkULMnMRAjb9d7znNmqymw8vU3Ye8kS8FjU5udz5uDBmEzDXqGjUyaFpAGFTENcnEB33Vtwju",
  "key16": "3bv9QQsBhLqtvccXgdwvqQxBG9L4BdmCC1vDFPZRtuTdryvW8KQaaymtddemi5NPLjGTf1C28wHcn9QLF7yMo3Zr",
  "key17": "5EVtZfw1cL54NVyC9ybUU11FUw3hNXizW9o8eFPui8tAotPbjLqKYLk1ar1Z5can8SprGqTLm7S2rRxQ5JBHFx65",
  "key18": "2nwgMijBjHmk8fGxJyv9NfrrZkjHA2uC61txQ5v56LyjbeSHmVtayQvytdN3nTWH6V9LLaL5Zd4BRy7M2EWwy61A",
  "key19": "22wz5ubPJydmvAv8waKHwdRns3oAD68N2ARqtu74ptzx4v2rqMvC2GujCA1N39wXHDGYeqL6QV22JfpTv3LxvNYq",
  "key20": "2ubhUT7QFsLKQGtjRYjRHHWPGpzDegMxKp2NnMDDtrJ4NjYmfhKT8wZ2fu2oba4wm79yxAb7kWGTFVmdy3pLfKk",
  "key21": "4dG3DtEmFJCLpKP9N73758TtxVA5r2B9JMaRVWHEAJSfVwjg4GBVsapq7NZvLrHgaY8YTnBiqaU6KQcYLgSWdnrz",
  "key22": "2qQwXt47ywCwDmoCbvNi1Qxqd3E5R8iVeDcXW8BMKLEKTgdTbNrE12SCr2EgHZvK369T3xbZXSmM5zg6dqiqFQNC",
  "key23": "4PEM81bDNvf73w3VcLQUQMjQZo5y1hVCPUeyM6GFz5DtNUfRVGgTFciaNht5whYnYjjbSpryD5LTVSEXDFMcjUv",
  "key24": "5cQMAQJ4HYo5Vw3b65uNyz4xcskAgFvAH6Ue6bLLVCpKiVAkmQfiU4NeZ6nyx6CPdZr9rVA4LrQMLsFBjCYfQ1QF",
  "key25": "4N74nNVHuXu4JdD4wfiPFwSTDdwrJ7yRk2csV6zHrw11jbPzT9MiyRfUKxUxRoz16Si56Tus325KiRxkePp1yrGp",
  "key26": "3iVmaUTQDuEVXnJPa95kCdY3ten3V1GA1wWfAM6SyGd78tPLmrnvSbb8P1jJQ2D5VhkQfiW5fsKdJTx7BfjkLYF4"
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
