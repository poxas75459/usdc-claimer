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
    "64bj4vjXtGw2FcR8xeiBPsjgFC8gfWaPXLScumugDSffUbJANS1E3spi4K1woJPFdpY739S6V866aaRHVhKSbEVU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tEqaAWKa167N6dMDs9F1ff4ks9t7axbPSat6yzLAdPXwp3KWUre8Y3GU7SMhfqRVUTL8QfuTYyqUJTVYMHSRzV5",
  "key1": "5JcpmzSDkT73kUrpzm7UB7PtTjB2ZLvRWAz41QUJtaXGF9WweqGAbwMb2qW49FdazD5VxeY63CTMP5mt8ye6dDyJ",
  "key2": "xL694uoxwDxj1qQPhQXCgRTEXAGfY829St3TPT3pWxVL6ovZDtoWHm7gSSve5SmiZkvDgCm4F36pqPjVfT68qQm",
  "key3": "39VywwnbHp65apbGbfUxLWe5ZzvPntjnETKLTJTWF8rEgvG5nTDozG5ohvr4RSn8iG1SFdaJCrptjBkopQwmw2ke",
  "key4": "2Un6boUyFywP84m7DndxVfa6tVXmpBZPiPuXDekLKLGPsvftmhNcZYxFgCqTupBfQV8RkgsRjbTiMCbV6mXpj232",
  "key5": "2KzGJ9JDwgp5S6wm9ojnpKbsTw63AcPfMcGTyYXhBdfNNtec2qQufMjQ3Ss59DQ8VVfvH2nYLrfqVBQ3WAB5macs",
  "key6": "4HjkrHH2rNq7oNTSuThvLLEnNcNLnqqdZ2wGrmaM9QQC7uDWEvb7tajPp3gniuHBQB6xZ1XeXEmj3mBctRALz3We",
  "key7": "4FZ84pJxucKVNRNnKYS94d962FomvQGS3uRsDpqXw2yvk8pfFobN8aiULyLZEbKxYmRbL6H7pb5bjVAas4xCsdRJ",
  "key8": "cMtX7tp4JoqRJBK1i5GNfgMruEuGD7JMwGcUL3btHDMpsSVLDFdDBBoeomeV2PAA7tyiERnTbyxRijgDQdd8tpt",
  "key9": "2iWxKu1P2QpPt9PdXn3pM3bJ6bC4KjgoQkX2rCXrEQK6wkvwS9NenWHdXAPF4mmYBoGa9FJFoZKD3YQunTqWue7p",
  "key10": "3KhvR3KugCQXXcbUeojHK4qtePN9avf2EfSq6kqDYF3oaQdrkz3PMFddpgCw4KySPybBEdFi1LcUXRSsHZuG1nYT",
  "key11": "38Nx5KDBnQgTYtUiXn7KhmqXdMkxJJ6hB2gBmCbsMAphCZjTBHVyKG8KkMEiT8PU9KZ6CXgP4BrSbxkoiUefxv3V",
  "key12": "4hsSrbuW2rdRVbh1xcswCEmiiSfmdU3TtxzdADFM9UNLiQKUcMSBAwLhKyn3tVirD8eJp6t3KdZEtbP5mYX9GmQe",
  "key13": "56i1jywjbLahrqZeDs6qwNvt7BvXyEEF9GBD5j6feJpXDj7gRCViGs17m1jnHg3j3hFN9PyX7Kb7pzznkFpxWZsD",
  "key14": "3zjviqUFH31qJn6gsxGEqH4L5ytqKpv9LEGrK7uiz2kT56Pdog6PBG4L3rLjRiwzFZXcjXcYPAPEQCEoAN9ssFfU",
  "key15": "3xwmFVf5PVJJmr2agPTcTXp21amKABzjsyhDGDbj4PGLNWhMkcAUNikqwTe2yyLLhckapb3irpDNTWBpuBQmA82f",
  "key16": "5r7Xpg3bZT7gpYT98dfyt9bbBgcddYJsx66n9MVYBDUBTM1nT6FDuFgmfhq2gWaXoEb667DmFbjSfMSBEUStsqyd",
  "key17": "5k6uoz7MMgCXKYmfD3Qv86fNZ9MnLWdQ1HWkeKRqcM4Cw1HdvgPSbz4ukde4DZiJBJm4m42wn8DNHwCpWWuYZXVK",
  "key18": "4h8taXHRjekkvcFBjs4pDkW5RFQtAGE7WYKHNKPEerXtw2WoH5QLJPJqYB8TwsrNEVatRveLNr4NfXrFC8BQtnRc",
  "key19": "oNe8saqnZLdNdcT4iFLr7YQ5f1EtmSt2yFNS9qsCLfBSHPewUJjQVQtCGNm4qQkrnJh1JCvoj9BswcAjgro6r8s",
  "key20": "3Uih1BscmBi5z3Ma2HFKf6XNoVDFNefzDaHFvespcsajp5oeNqhE4oWAHuaSvpHLvMNFBctx2iHUD46demsxBr1A",
  "key21": "MzmBeDdxZyzNFFuR8XGgdbzsPqxdVg3Pzxq9soy7MwWTQbAiYf2GT3SE7ZYzSxQojYEMViyEXtfGTHzfoE6KaLC",
  "key22": "2vmqS3D5NqYbt8AfhyXGtuZoaMqnQtGJ5wUtKSUCMrjz3sbfSxfrDsNKx7EXhTdwYHhb6QT7yxszKQkQxKpvipqu",
  "key23": "3sNpkg1KHtVp7ur5FmPC98ZfE8A5u5vqEJb38dBtyGr5LZDcMSxuNYeJwdMojNB7j8L6sYvKr9iPRyD7YGszcGUi",
  "key24": "3iM1w6ZugzLgGc9FkHq5QK1wsxKP9duTMFn7EcmuxuVnQQNRjdm2uwBphJFQEwnBAo7nqicZjN4E19pMjxwizQmn",
  "key25": "5c2u9xcvJX9oZJXYTEDydAbmNXiDhdby53MqPnFqPsoN6MW3a6anNDcTwpgdDgL7C6RbxHe2d32viBtXXHXAcYDp",
  "key26": "5pX8AR8NaHNBoht9g6RbLZgEkn6vXAjW8wHtHjANguGbyyBn8JHMiEZbqMS5YqVN6mTa5uufiGMF1vytQHK1bs3S"
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
