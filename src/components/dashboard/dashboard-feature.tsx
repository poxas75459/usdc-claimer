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
    "7wrdiTqRAGWExvPah7TzTZ6uTHanWbYMedtxsaCViXXwSknCDW66KyTu4jTwpKvezZb4GLeXZDbP6BQupdMpyZp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vNkJWVqxeAULciRHV9Zp4jtE4CeyegV7CbeiERwibXn1orEnML79c9ZP4heBe3b6N4ssA5mzvJaCeid6KViRaX7",
  "key1": "4EbHk6MV4eM9QN7e3ZSvVZTzDzChBPxeUtM81yjeTj5GkEjW2MAeasBw99P7V1z9BSMGerXghzZ5CsRtFiZkxEEa",
  "key2": "2gJMDBYyp1k1hFdZb7Re4R3g1uFcX5jXaWtXKVebezspR7BZthJP29gshhNTq9rYJ1rLEdMVDZ3D8ykSx6DLV4f9",
  "key3": "4RNDHABgKppcKSFp7BCsnE3HykVuLVAYrUvxwCCTAsBaSLwbiaJpFie1fRSNmtxkP3SZXB96R8aVPAN6M9v1sjc7",
  "key4": "5NNd6bi2rhXg4KnGacbZ4EPc33MJZhH6Zz7TURnzDBHWMqmAVGQJfYxuCHQj32smtL4z67wv4iHpwZBPdX1RCjds",
  "key5": "3KGbFtrXUuNomcZSBXyS3tn5GkiTptUh8Z1cK4iUFJEVbeDoGMbR2SnhcnquYWN7rds4DwbLRoYf6dNsGpX1V2b3",
  "key6": "fC1ywk9Rok25hKGatiR52SB73aBygVte1xjgmT7SLEGvLqbN1A2GDHQm5CGjqhNdMrxpg94Cf41VauV4CdjCfTa",
  "key7": "3DS6gogvGiUqU7VVoCL9n939B9UdH6EM2sUrhFtm44Hsue4kXZwXGJVts69CCDYsC3jnNx2V9Xw6xgwDhPE8EmcP",
  "key8": "3NeR4wYqf3X3eZAiX5mMhRn5SoBrTrEvRTM5EnPJWXXsunXmHja3W5gG4koXFKZJZZQC7xRBBKaE4u97k7SzxS5Q",
  "key9": "wmBuHZzyZwbxQNc9VysobEpoAmvd7m2T32UcnA9GUHUWB6jEXVEqg5VgndsRwvfzWL8RENAydz3xBy7Er1CEBJ7",
  "key10": "2Wq8F9riuuuzhuvwy16jmSoVNBFpRejCQw46HbVqyurTtanitkZih1toT2iV8qyU6QHChTFnNZn6sFMgz8HRjQAD",
  "key11": "6tnepHsCqedZqjopk5uLWpDunsbZrpug74XcHpHoMDN7Awe2AcS1yPwkbzCKQkSGa2CtVJ9mqSpahBgACwPuqXg",
  "key12": "4iH6HAcVfF1bYvz4da4UJL2Vq1qEGeCthLBihvKtp8ztXorDSsP1w1YVFqqgfuDzCcMVycGh3DFzsioKQAeGhxFm",
  "key13": "24UirHGNhwowN2cwUu91onVG9dCfjoEJjTtv19UFgjk4GqF5FMgW2aBfwuWDtyFfsnnNc53qhLnsfrEUYoqPkoCv",
  "key14": "4U7tJXWJrtuFehuKfEjpXyN68At7kQeukUzodNpEDtaHucdqXLmuoX2Nf5dpzt7FkzpWgSUdhtiesZ7ypVK5Rvco",
  "key15": "2ve8GRWrSPgM1p8JJjiakyUndJvUa41Ta4MSNjJbwHYYEehMz5bQYojZwWuHCPWrH7VAShrJCfargoZyh8Q7JeRd",
  "key16": "3iTqD6pb9exUHWSCHvWVguPyH5Gtsb867HLHbJn1Wwt8XCzCYnPfA8oXy1TeXg4KnN4kWEf3s9vXzZWdUr4vrJLi",
  "key17": "5csPvSJakxJW5sxBPJk7bvGRpa5RhDkgc6C4uq2HXmFuATQ1KwuqPE4cpjyPpdkxpaEBDgBjv47Ez9p4ufDztPCk",
  "key18": "vnUjfwyXSfS15oM17yoDAeYNUiKFUJPjnQck3ePDQLF5y8R5hfEeyyUMFN5oM6WVa177atSopMGaSFW1so51g6p",
  "key19": "2Yo9qKJnTw6YXaycLZWTxudFTv58iBZWGCDtSXF3bESZSpdptML6SZCDmqwoYkXyW3RkiTn9K6sUUSbg7eHMQsch",
  "key20": "3ytxyHisD9gBvVU3TBSdJEwEgzWfTec6F1dhhvg8qWzjYmB5HiuXXgi35C3HH4yGGTPZEaLw3G4rYiMcVcmour57",
  "key21": "5UgTWj7rM1KPNwdGZ7rRp4G22MXsmENej5YVLEgFau6D5jUzUXwQxMTTrKbWJU5hpFhQMeb36gQJQ73fw6VpZzci",
  "key22": "53Ve9rANb4E7pr28fPCtKSnMktMa1i6tHrLJq3tSQjsFguHFWz38BbXrukLMdbfEFdr6jeVdvkK7eFqg7DT15Ch2",
  "key23": "4VAQacoq9zMXmcp1F4djZfqswUJ5eaxwKL4tudL9TVa4DDwSp5EMhvLk9sTTpRdWQzmd9VBHbetB6FVCF3DPASxv",
  "key24": "4mRTx3tyYEowTjVPbxUoQfeqaozDFWu2wv8V3WM2SPedQHdHUzt3bdSpyaPeQ6r8JfMNX6uQeqGdzZ87Cmd7r5d4",
  "key25": "3649zB2881eKTfStLAucCoY3nGRBZRVJJF2WFnFZ94FDBhzKj5jjZoeRTQXvrHCf5UcQxHfLizKdrMzjYr6Mcb1f",
  "key26": "2mKSYpDqULYAvmRtTiw8RGzpWhSDRs9o6e5CrRtKaw4pofSvFGQSCz3xNvEhncs1M626XFxgMBTZegTBuVnjXbFE",
  "key27": "63vQBC9RxamrP34SbSCd27Waeu66uJfu5ZzTzbKtp7J4wMHNPATjePkWrj9KpQo7pbfaw7zPn7US72cER8uRDN74",
  "key28": "2zcR6dGgULLABvgYAM56iTBsu9Ksyxpe87ivPCz7Gg3rCexiewihKks3vRpVTr41ajA9mtNuZrtYiN9oZPrv7fYm",
  "key29": "38MCst4Fm2ABXxoJzs7nrnR8FpXuRD4MX2ZcQi5FQWmDQCyRUiUC1dVksFy97NCv86CNwLeWDnXJGcDex92qFZpT"
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
