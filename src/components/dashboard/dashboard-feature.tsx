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
    "2bitu1c6ZSp98WK7KJ2fUhZ5uBxwWi8E8BJGxd4tGHf36kvpNznUc87giQSeTw3rGoYiLu5DmRMHVVmXfGANebx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "AWijsT5g7XXcV5p29BBTC78nQ7CWg346U8hvXqMCSHX1jCHsoq2zDGJ1eT86cx3A1xB4aStS1Nw5P3xmkm6AHZN",
  "key1": "3Gqh9JrpSfymsFff2p7Z56HMzu2K6ohaMY8KA7tsDKEf4sTUcKDjEocZfFVMCtT44SFedL75QnHpgRSueZdKy3K",
  "key2": "wshm99C3YhRVACbAdyR1EkCsWybap5FHYrXkRD64G9KwSiPPXMPPU1HwPpc2SJ2S6rEGAhpvgEBBpnpPFdt3PM8",
  "key3": "4GVdBJtSUKMQEYQTEH1SdHh6TxiuyhgPKPpskiMu8YiAG2xgDQpuhLH9wvD1uuSUqGD8Bo2LU68qLkrULwdANTbv",
  "key4": "62SpYJzYSRNPg7cWcyB54AhhzA8ptaMmgJ5nFBA4vc92sFtBbau2nxvkURhXvGvz4ZcvhkDzuiu2Lut65dPXQjDv",
  "key5": "xr2H46YprjhnQbuUp7yPo4wVZXRU2kbL8P1GWu42CCBe7ihrtrwzJo64MLp1nhTXioPjE21r4f1FH8xY3svFpVW",
  "key6": "5Wu9Nq3iWsijYZvgDsvwdzr1e1ApMfE95gx4C6jB2yxhSQsBSSq5mxqmGbSHxMrSN9AtRwuafvLPDdJctFknhTeY",
  "key7": "4eJB94GvT28BqUXqDRrqJuentMGdmFbwUGyPJiQeZCYTpsQKa7i9W5vytfTbdFJ9ri22HZBecuZEsEgvKW7HAfoS",
  "key8": "5VTNEw67KLvCA8471v5wCcRgCXTi7xHS1Q8d1Gjcm55ZUUM7zd4Z4jupVNoo2e1bf4rUi7bPY5msTG6z8RER9ZSa",
  "key9": "5nDJd6AiopvknjvGbc17pGq6K4oxLFHMx7AAyRkXwxQuihykWTEjGcg1Ls4jJ5LAfQt8ktC3JMLgz5hMHphBjTVt",
  "key10": "3LFw7a7UkEtTKHaRG4TfjLq2xhXQ7BhKWXDGJu4pzuCqgjVZ7YNbMXZiiYd8rrUP8NzYyHALnf7K1YnoEwsTUYD6",
  "key11": "4c3zQbQAHe1XMZH5rXQcA2ZNGp49QxJZKD27cVBLCi2R9c6bY9H4cq6oRVKNjbV7vCoAzGacU9KNPgUYyURPP5EU",
  "key12": "2tAw2YpeN6qcdndF3q95JembHySsWW5p5zKZ6aGMhdMFd757ySwb6oyyZXdyX21vF4ysAppTquq5Hb9Lxt9PaTpj",
  "key13": "5UrCHWeaE5QmvkTvkEgMutQLe3SKJuG9EaK2s2oQdy4iAQMG7y6zJ41u3wEzoyLNtJ2XqScnVTaj4Nu3ToJa3ugL",
  "key14": "uwzCoRMBcQcejAKK7JNRZ1hLwQ3erJvTqJNt9THATQ1GoKsm6woWqo2iExZLsMt24BFtUPqfewHDoaDJk2yu1qN",
  "key15": "5cbzEwhcoC2MoVuFsDkAHW75LjaDQ1tLZspfRDkhg741dxtaMC4k8GFMpdGUnyDtBMSn9EZVmTWSoJmHteQ2QzST",
  "key16": "usoa4ru8D21pU8F3heR55CEe3GQFNEGb5BkJjfE6P5Dz21gbZ3v9ppA8aedjSsqoU1AsG1RJow7qrANABd6MMEz",
  "key17": "Fh4Z4f16MxM4xPRZack65wbFZGwtUJ4rLVNCo4UjYHvbwqfb9Ek6AWzymqmiCrerFa6Jx2pv87oYyLqedfgJfJq",
  "key18": "3bvCPUH11jWYEv3kaZU4xqM1fT5kT6fMUimn8B9K3sUxcXKATfgqoX5JrztneSGPndzDyYCvDe11CsFr26Mj8ZnA",
  "key19": "2KgSLXbxqkarKup9zNvejTiwixpMURbQaF1XcYXGivawt7rdrH3Bqr7f1EnN8khuTGYAxRdUoPy7ut6y6HCjXNB5",
  "key20": "5Wr7c8F5oNrESbVUNbs9fakuGfgX3Ywbkqg21Ni1Pe2H3bGrjS93bnojEESL6fi7T59T3YZbL5LSbqG6xvMuae9G",
  "key21": "3CHCqsL7MuUVdZkTWYty8woZ4niQ2vSWaSKXsEdeE6MHsN5sgS7CGQawX9rUA9z7zkhcVzpuhBPJNpRVa7bKWD4n",
  "key22": "5QcH8cvVpuvoyB9ubiKkugZgr1Fz4dDES9Ed2eqajdKwm3B96Hn8Gk3B7v6fmogjAGSustkrBwASWdqDDcbjFzY9",
  "key23": "5q9tVsoxskHRg6NNc3tGU4wCsw9FsWunZkrzvHgSg63UmQpNASEhveprXx3uWsD6R1VFjuxBkGZkipTDBBTy9x5G",
  "key24": "p3fwoAFXsS3LVa2x1LP3XLixadfukwo6jLV45nccT7qvmFAxezHkwLMX3fNn6TLPQfm44Pqe74Xd3CtR8qP3dR7",
  "key25": "3pVcjGrJ2jH17cB95sK1psLd64rRyYuvCQ7FJEsyh5BFMvv6ZgQCinriFz5FdncEm6hAwN6hQ9qbxoggfeZa35Zj",
  "key26": "4kPUnx1hFzXjsRCoWeyYCRATaS77SsRrskvLTyBFJHZ9t5NTxGjeBLukKuh2PCNBtQQkcDTBcBqhisTsWYNbKy1V",
  "key27": "Gdn3rZHeEXuQ5JDCsmhi6AAY1cRZYqLjoirfmtc3gaAL6Zye6dkkMjrkF1k2fZswwwcu8X9kLferBcsRWYLsz6Z",
  "key28": "4X9Lq92yrTUznDpBK368ALppztU2mYkVnhujoMnGXENwDqz7rRdkf5RNx9yBbSoF1jVVTuXKLYYd3NGav3oh8V1D"
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
