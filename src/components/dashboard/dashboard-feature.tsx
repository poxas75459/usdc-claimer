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
    "5YsXgPbeu5wvNFvWgqRN6tDzHpTkS7yBJhjxLHMc6zVkGpZwyoHsLvH4fPi7oKrk7qskA9SkVdr6YLGAnkQUbwBa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MVaVUGEjJbexsMnFLquARAxhUabwqWCPGwUFvB969Jny3X8R9PQ6vw6qRyuVXofBmbavgdrcJYqNtN6y3ryEsiD",
  "key1": "2LV3FE1iW8U4E1nB5TorJSehvLGmudTpEFRqdSkxeXXzvHgbsjoxUV42GXkkwG9jbZ5zsHSAb4jbbdGP6TDqi6dL",
  "key2": "3EcdPJfysEScvmEx1YAKem5Hr6QA3wcrePo9p4Bio1CU4JF3YzWYHeNBCiSsTMuHMuk43VD3CVZLX17B7gYEvQDA",
  "key3": "2XAe5LnwVPgmQoUgeE66kHZEJF6R7b5QaTJviNfQD3bci139vFLyCT8uf3mqpSsHd3qufAj3tPKtEgTCH5PJMLXC",
  "key4": "5xRsiTvUcxeUytW3xG6q5zzYJwb91m4nSimnuj5YLB94VWRzPKE8oauuiTg819YPsEhQznheBsFAgCa1HfbwKGH7",
  "key5": "3VF6ivBPJrgNfY9PE9CgNQUqPfQqSVLhZYmHJoQHa3f4KQREscUyKxcHDef6jmSZkbWJg7ypBSoCGg8NosbBJ7Sm",
  "key6": "3yxWirnCEVzU8wLeHcGBmSpGeSMMM7iQWeBCXhRgcNKyNbkoABRiiM9y3rn1C5ZhzNCAYH4VptSpCRahKnGgMf7Z",
  "key7": "fXHqJ4MXyPe9MNCmuHARbpHZMUGpDnrFKyjKuvL2ZQi71awynSiDd1hnzswSaQykfBFcnEEjdHFsxHV2fuw6JmE",
  "key8": "253au7jLGHEYWPBxQVmTK5VVxunPGaTJsXKYbmdibaDHCoWyLb2HdBAFTd9QJ6AWaipYfWtAiwDZ7eqcw8PimWwy",
  "key9": "3zBNzCc7H9bJiwcHg91dp7bBrteUk37yJuC51DWj6Bi8t9Tr3Bkm7P8jkDUUUpfQ47znM5dWFGGQDj6hWBDjRzup",
  "key10": "3C8KidLGPhg7J1eJV5cAvLRgfsrHzrx9dyFACNhxek9zYzPqkwrhkNDtdJDjqMMzPs4UiTfeq3QHD4CwNBTXnzRi",
  "key11": "39Cv87g3AaG9nBSuxvZrnGpCM4cMtnhXrUCj59zgp9QAXhPPyXzSwuPCLaf39EAWKg65q4Cu3JhUvb3CMhd8TQMH",
  "key12": "5EGFiKYexp9D3tnZNt53nJGauxtoCUV1v66r5D4AEg1oTjcomMhDZNkZ93aSQzUkHBSCaY7fjRoCsM4GA7A9Cgqy",
  "key13": "2QMVckxUQ4URxQaeKVxcPu9T3qi3feh7XebNaVpFnGXycwHTKbCAFd8yeFrkLnsb5muHR9WDNE4nCV2ex7QPQchX",
  "key14": "4G8u8tZznQHwXcmdVVeSQZ3QzG16Xe3gWjULaKarmDCxSEgvsMLcgHyL16pUdg5k8jV9HyhznZVaxoGgtPTTLAi4",
  "key15": "5XHpzgzPENXXSETSEQRDTz8X1oz9BD9BK7tTV3fktrUQSGWkBGLsGCuDPoJA3rr7qTpKZbh4cbznVTsKZNRw6feB",
  "key16": "4aFuBh8NicdvjJ7uroEah56UW7QQmDEpWZYMGCdcVxsfg4WwABZQ6qRtDn4DbDjUeyaqrdoDmHPafoMQZcZapoK9",
  "key17": "58vrjffaT8Uo63pDpnchkYRYUKGMhPBfvrM7RG9mb9P23EDh8obcJQnAY2wqMpLymUCcJbWSmvBSsfTCiHFCQyV9",
  "key18": "4HGiyvrh81S1HF76A3JkoqdSmiGCXk8jVFWNNadmrPjQYcBhZ9j2d9X8RKwYsTE91eDGyrXvg3xzWpZ267UPZ9U2",
  "key19": "5GyGNvtsaWy1fhSsPyNKdwGtZi9Mbc7Cdv5bK9dgcZEjumR6ogZuomZNMcWzthVXLmrZ6XbntdikAbFmRiGo66q4",
  "key20": "4unizxCNzGCNeuLTY6heQKGrSedhBXaN61dWhmN48RAtE1XBAaGKAKarqrw51ALEFFLH5ZGBmF6eUqiKRAzvsHJx",
  "key21": "2SJVoye4exEZ9kEJW9xuFG5FvoS61sLpgvLKWuZi7mHJS4CdCnpWYXM4tYHzPZc1hQv6NZakMLrvBEGzWWASAv7u",
  "key22": "5dbZmjua1fBZcRZakwbpMchNmHNPfRcyAE8u8cJkY62iNYHMHN54pCNQ51aDSpFtmiazsX32L5g5S8Tjva8oAuDH",
  "key23": "ah14XLTQL7G2F8GPTNYFhqGPjsuPvmH6DDPHr7ysLbepz8ZpnroftbiPfGkG5dgkvMkYiUSXkRk6NttVwxQqYnT",
  "key24": "383Km4JkSUuaTEoYVgRSj5EhTJifMpPHm1mE43i6Ls3pJWB6PUN4CitMYfkhLD7bqL1PDaBQur2gRcbVyvowX18p"
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
