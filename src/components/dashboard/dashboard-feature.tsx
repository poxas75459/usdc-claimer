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
    "65hdHfe8F3KQ4XFiY647bgZYKAsakEyvn93aeRRBffSqsgvcMKCRk78M7TQ3UpqWXPes124riWRRsx5QpnPnH9aY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MtWqcSgyrCsDV4k6sCmRckYzviVmuuNCw1tb5jav2AiNPBrsmWMeHX8sE99BvXErXzjfXdruN48cXfQa2mpP4Vy",
  "key1": "5Yr7hndzBm7GiN3vgFRWPFuyJap14jsUvN8YTrSVVZuiqAgt3DLQ8MnWi1hUVCCXUBCpnmMu2azYpb5HosZPbfA9",
  "key2": "2HX8iVjBsCTqGPR1LHX2QemFVPAC1LQkuUyHy4PJrUZsxaiEKcwptLPUmHt1xTCSmhAwDsS98zAM1JVDYjGozVB8",
  "key3": "4PKcGXW1FjuTRS3n4viZNiMWCyZPGmsFoLWFSbVSi7nAg1kmqNVnUqfsTmJDuQXmUiFEsufnBsbjvLQH8VbcHepE",
  "key4": "3EHKkWxG3FawK8dL2pCY6D8QnKnrEG9jHwWt4ETUccDp9VFZgSBRsZJ8fMLPNhhDnRBSkDgSMNfib9dKS6UTZxQG",
  "key5": "61qZhDxuFSBDhGvLYZBaBDNiQFWNrqPWGSdjqgWowTQMoMqfU7zQAa9jaEFyTuDwukxS6HEncRmBFuNeM8fb5Jw9",
  "key6": "bDzsZ5obmSHHsEjNEUo8o44NH1qbrnFqWdkrJSNjcvJCLysGv76nPqAJAayXhEE1hAZxVpzJuB5Dp8aLt6KMhE3",
  "key7": "4J5gi13Re54xpyt9aeVxFE33T9K2Ga7MTsnyJ2Jzkx3Mdo2B5PKafR9xBtQoreawkGov8QD1XMf6pUVAfToZSTtM",
  "key8": "2cauDVLQxHNPRB5dRvuAwPnbSrVD2tphuiHuZPJfGu6sgnKGjBrLRNH1D91KQetXTrtnbXHvUKw5wognKVcLjKtW",
  "key9": "3kiBwx754P8r5Jwvx8KeieS7fn6NND471zCzZvRc65uj8ojFiSDUV6G4seiEUWY5CYjcoPj9BVt75iF65X4pTbyv",
  "key10": "3Na5ssPSFQMh38wJLriz5WJr1fRcj9i4ohgNKMn3r7DVHeWUPU8T6kgdaPWF5q1hdkvkEYWqkSy4XmrdzgUJPc4t",
  "key11": "5LeGkw2DRBeKcSS3EnXbYqNG12fzNCKvYVKLrSYkgn6FmPBkhqVKxFSL9fTjmtSpLpR6oc7XYYub24pfvxnijypm",
  "key12": "2hGhQMbj6rbBFRrX9YEWd3HVWbRoGiT3u9Z5DVeuxwfWvGg3CT2wckzFnjqQsd7oH6RkFpETd4Coro4ngaysP59k",
  "key13": "5Nz4eEBTzA1By9cof7tUMFtUMQxPGG487ECdeCtzfe4MVZ4K32S8PFiYEmfwoZC7JWmtYxgD5d1VprTPh1LFjUbx",
  "key14": "22DwdjEpdGoNVTCtciwwiCVkR9Sg3AGVExbdvedoTLdut1jFXV6wqb3DN7WXdav4UYy2KdXREKRYtv6gedHPXMYA",
  "key15": "3xLd6V2cEUodncdDCnEtbpJQCMjyG7Ege4X6C9TGFwP8VTDhcxam2CztE8WJvUF1SfBzas2TPqQAZrTZdt81GZ7e",
  "key16": "2yNxLi39BBWLkh9X5LksiVbtdud8RC4PB6ZWc99VJMcGUZjnkbx1boqcm7wANKPsj3dwionPbMaoa7vrHVhSdNgb",
  "key17": "33B3w7iNBxyraVxYf6ear3WdwhmYP2zN8JGtgXd84QvuGTQ9Ev8Y1jaPoQeYfdaYCk2m73hoiXkhEJWzPYfzFjST",
  "key18": "5kUUekPP7WuoYHqCYSeic6mXSWzYJFFQ627vrdiC5kVxQ69K4b7CuCwu39iop7BpAUSEaEFTubtkws2fWDZXS2es",
  "key19": "2r3nEBHhkXbeiWR9EE9bpH5wpTk1FgaS72z1nEyu9s3p9zNYiyjnPk525vvahudJkKS9NDyFUihDbsRgotRu86V4",
  "key20": "4iSqPstNT9o4dSQFLrHie2zgefhzVqjt69WWQvWen4qxHTGEm5mFBBx54xewXsMPwqNHHLsJfJfpZnNyzFhneBpq",
  "key21": "rmE7oSmcg3xCk4PSXnjvyZGviYyVqLcB1N7jygcnecf9zUgzWWHMgQLjac3V3VkR9jTw8NWJFiZvSKVqccSpXND",
  "key22": "51QtS5hyxLNYX3Cp7qZXQNowqcA1KCE7KFfK2B4CnZqPVYXYVoRrc6vfrSf2gfy3y14ki13uHn81dhhmXhtURQBr",
  "key23": "2UJ5qHMgbQovi5H3rFWPfuC7wWEdkWdoRYM5faoH6XhiWYRjBEnNpqMPvk71sosemqt8psJhKZFJuq1dt57zQ3DR",
  "key24": "nr7kyi36PVP4snSZqDYeYgCLn86hZGucssawntwiRxwhTrftBweaYMsTKoACdC3oEq5nfVHtvzTPGv62xvuC3sE",
  "key25": "KHiTpUz3gQJjJMNKpX3pWUittKo62Yun1VvxfMaRMLCfSgFHqLKuvfNJ4gqWHw133PLwkrifC8QUZC2xiPws5FK"
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
