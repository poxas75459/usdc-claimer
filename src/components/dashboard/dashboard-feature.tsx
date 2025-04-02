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
    "mNri7fAGsYWi8vCoB5TBAbvKdyqCF4jeaaeN4BkA9SDkXQo7YeSrJcoc1DbiMSDAc3nAwxVUeNLf1QBqJdNuAEJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZhDmnzfLoUsDksxFxFes9rqzMAg7LrDBR5ddJjVAngqC8jigEjqGLkAmFLWEidCe6ZyTnkDnzWHVGMaUeZkC5q4",
  "key1": "4bdYQngyo889E9uVFYKkLxzZ3XuDToUzSTr5WUjxjg4ExmRSsz6qEQtbB6H9WnBsv83bwKZt47FJm7oAzMxQvDvY",
  "key2": "2hCwRQSXTAMWkRU4FMoundvrjTypfxZ3YprYdPjGRDL4Yv8VSzwMxgvydzdr98gz9iCTcQhSH8Uw7U8yaePUKteg",
  "key3": "2Lqrgz7oCXznpadKfqtXkkMeaLKstdjxbXAzGcAuu6kgbwWJRJsYWaNFpXZB1pXppD29v5fEQCqUHAdSYhJKgjpp",
  "key4": "EtmWGmwjGsV8mq49s3F2XN1jFNVPAsCr52nctzy1b7254yjc56FNm9kthp7C9JEdgf1wZz4aYg3Ajtvy6dmEmdp",
  "key5": "4DHHd1vnCcozZJPQkV5CgXGM3xLDF59LxfmDB3xTEo5tVqDVAQkPBjuUc4CAV3L9dJ2ahmmfevjcdMWknC9HfWCX",
  "key6": "4AaP7UExNV1dE4qaWoWTsyMuvrFWGvzh7BYLrr8jkXcywvPkFSurLkHCFvV3MiKJ5XixDSBLaxfFQvAuQimopwsn",
  "key7": "2bUF314d79wEsELFHqQgkkwQpcptnEi3q43uBrckHUwVMU45QkRWdo2DkgQbR44DJTLP2dJB6vA4fR7rRp6VzHE7",
  "key8": "4ihiTLd5YrqunforsT1CZ5JfY77umXxKmueeZBMqoELkfH3TdR5x95sfDJbmFgGy5NRqoP5yEiEHsWZ3FjNsA1jx",
  "key9": "5iR6tdMCHEdA3zd2rRANZFiAxL8q3QmtFuTpXicmAZbTe9D1bFTKQEcEBBNaV724erEDaSF4R3BnD5JtdQ76rfSF",
  "key10": "538p9uw9NxTWYBxVqauh2Tz4ijXcjq7941ZBEej6bCfcoPnnEiFoPq8McRjn64oiUSdMNMhnwrMkvL5csRnsXKkM",
  "key11": "aLHR6DnSydYw5Mraa4NGqje3Jj5fWHS3p4q2hicfXYroQxJzXzTV3m9X1vviuBQoTKbNkwTqmiYpDacM9DGGeg6",
  "key12": "4s8sHYzQYdwzUBKDvUP1dD6ZCDHpX6FQK29qzT4kXij5vp3xgKzzQp3MGXrUXEBLjiSQGnK5KGuCwmLUqYfy34wa",
  "key13": "HZBd2zgMZAgSNnWxfXmqfR2oVXXHtxVUXYHyftudMKv2nRk3PXDv4JUJReJdiWsfDm9xc7bNjBewMuiDcznKyKx",
  "key14": "2mWfaLaCHaxtntHKPdtJvNkDaQVYL3hPsbTha3dDBASgR9cTGstounMi9vrZDg8zXbz6YWYFanfLVv7KKwjteE7Q",
  "key15": "4GvKYa1UnXbPWGPstwhJThG9wc1FmzrnVnFzn3aJiQMdKiVhDhrj9HHDdWMbTe4zUA7VkL86KgvfigCgXPraiA69",
  "key16": "5UbqgushujXZg2HJBxm4cnB8Cx7ZYdxnwg88UNP9hG8ddRagpKh1AHoTey2rNFfR8qxm1fVVfiPFgnaDNrw62eHu",
  "key17": "4XGGzqHQdSyJauYw7S7b8P6eqBhSdAMcmr3WjhuDwHrZtQekYmkg6Fdksfnh9Z6qP4FXEo4tYfaAxRr4LJUMXwZL",
  "key18": "49X4dbyH1ovRpTcpw8fvtXUgELQtN4JqVZV2R7D7TbRWDUm1BSwHFXhkUmADe15ycX7rzzb6GPccszJNLxgZytsd",
  "key19": "2yQN6wHnnZwVdQ9T7aYXSAGoXrHRjWgyND1Fm4jeppayBd2ZHEa4RdSosXaRUP5uvPQMTJNfmfZiXCLvAmyXZd7N",
  "key20": "5eRNvpkYmQirsDnrUBQ1kNjxVtCKswysiHiVB12U6SVU6UC6fDQTMibFpqUrahd5J3JcFKSSBs1jsZGY1MdJJmw3",
  "key21": "67KcRY2hs3vFL6XXVcLbn1jvMSFGWQ5m6E1T21Job9yMQxHJiYkgX6i8NfwGCtGJibPnK5uzNvErdR6QdqAJhxHb",
  "key22": "2f4mNVVDG1tMqFqFo1FdcRGpqRgP7PtPPdsapUELLnBxCeuoANfpahvtq8U7pPYWxNN1CJbMGrE9aLWHB1kZrdqE",
  "key23": "3Zoy5hpL6rPvhJ57phZnwJo1ir86fFKsxF2cgvjZKRYyS7XpgrRhtoGtaM8wJZy6V3Hs8oMcwDnEBzcVH3kALPjh",
  "key24": "5metukkoeibJZcSwBf7sZWNd9dK3HhNXq5XkD9tBHR4WMEAh4rErC6dAovgxdXFe2kg7zbDEXwVE2mFXsBKpNLXN",
  "key25": "ZVGGxzAR7dtw2dgiDt2hTPRTLft1X1W4VaiYB1t94WMAxDz5pBXo7uBMmaFd2wyj9GBRHJDimm7wWs1yyZamvf5",
  "key26": "qBXaAavYvaxwDE6LtavofpFFzYdn5n9ris7icN4Q49ANp1SJ47gANjwDY4JpYj4k4RHNtq52NVMtzK2bi3vgnnL",
  "key27": "5jjyekmxTkB6b6vqLrfZk1rkBRdd8KRuXTdmh2imBtRuqcAVYq5tZmsa6p5k1guhq5fzR8Vh5ZiNut3EbLjQneHG"
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
