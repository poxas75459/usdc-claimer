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
    "4cJiTJ7mGy5ZmQN46L8Wuy5L8uqLBZBNsKdekJ2p1hzVxzNxW8FkSnANN8j96YvPiaPrSKtZFdxmW2xLwyFnyHvX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yPgjv4nASVtWMGSnfrogsbZ7CgNUzxSSbuborAAqLaysuqZnEKnKb6NEFWV4nrUEHdEuKTcDaxJjcwne8rXJXaj",
  "key1": "4YV6ju1uRUP42zujGcF7uWzDo4bgR6dFDW5HV7DvavA5vhvh7i7PQCJ7oBHRoiCeVjzU3VDbUXVqbpheQWwU9E6P",
  "key2": "2E5BPjH5uEfezoDyyZ4icJuCgMn7s7BtJVMhuZAbqQPaGR7vcxqxpJTEPH5wskF3dbnvzhibbs8qrVYF6L1MPWGe",
  "key3": "5XQLek7T7QftGM3hyE2mAAYwmoAHcCG8Bk6NuxmHVtR9Dka6jksAEsqvQrfRU9xAt6qq4e6CuaSejRBiNPeV5bG8",
  "key4": "4G5eJgWhrJG65fAPbG6Xecqhpr2KFDhiwAfVn4WCAUf9jAJLhZFqLny7doBU9QB85Dea2Aj2gkUH3q864WE8dKKh",
  "key5": "4YW7ZYSqHT4bw4ic5MgYzp9b6koqvMEcgZLPJZgd1kzJRyfA13Tc3jRxBUjMWdf56hs9n8eMxUigDyUCYVciK2Vh",
  "key6": "JfDwTdq7dMrzWwYRak3suKsueQAjyzphHSP1ZZMhBkCrgUaZPqDczRpBy4PkWEmKoB77KPYPJ26gGGG9WBrSLdY",
  "key7": "37hSr3r5wn2RXUy2WeqTkRQJgGGzfNx8LKzXA6TKPfJLyTFVHbgeg7kLZcC4jXcyyk2TGQJmpcaKtztWdLGKXyH1",
  "key8": "33kagdX5nPhYi2S3jgms1DbTxz9BgGxYLHd3cD1NvMZumRU7iV9TGznVvj7xG7xh9wBrFm3PL9giv1dhFS7KdeNQ",
  "key9": "428yHMWu8rYU5nNHfKVYNmeFg6iGCutEk3vT9cjiBZRtKtQyY5PfQwwp71HeV9D49vQ9kCX26UjWigXNc68EDQfd",
  "key10": "56V3NvLveHjH5JjS5r1qrNCao9Yow2f524ZVFepMvESZwuEqYesGjcFgJcDbao1t5u8suRbZqB1QpWA1edXEvpie",
  "key11": "2AZsC5hPER7mjy5wXeDsB7EzSQm96aCVL5vMGdGCyg8wW5GsiZqFUwT46228eLpD8fCCWgTNSwGsSBvDi3R7Mryn",
  "key12": "43RAU3ynvzVQprxYT2R92KLrzn5TnnDnJxwCyUvzytfpE9gUMVAXaJS4bPfKZs8t3yqFjQMVyBLgXnG3D19DEcUs",
  "key13": "2UonnBr4u8w4KDUtvYXypjDYgTvVHWunwfM6cr8m7TiY4sZe8nVMr8PShRie9SDC86xJrRtj8dGZr4NWjumc8CZS",
  "key14": "5bFr6H9qtMUsrp6pJ2dFs4Mcm1HPg48aayvZrLPw9tGAf9x9o2BEvBiTAYek9rWAWAfagjwqJgjgvK1VDgmhPpY",
  "key15": "5d3GEecPVoqUx7FeSeCzmvYEn3zvcVTHH4QmYs1oZCT4Wkda7X5qdvSZEE3uhJwtwFESLPWEZZJ45KPFQJvmBnua",
  "key16": "3ZcXQQUpLS9wnP26NTrVMGKiEBdh51QbLhqcAgfSeVUxtxMr4hiwH9XF9pkkxk9iSmPvcSsNLyFWaxJ5rH65Kx1k",
  "key17": "5P832ingZUZTU3raWvC4vBCHwqAMVWUgJ78EeC9rSLzkQV9umc79dRgKii9MmZtwAJEABb3tyeGEeqXDMdNv6aD1",
  "key18": "WRXNzuDPDEU89oFFa38k8UhL6VkSnc7q1cPsGaFHj3cJYF5vY8Ly8XYW7uPa6h4mf2xxnEgwjbDFAWaYacsU7Ym",
  "key19": "5gNa5VzrFkJvjSCTQpc74qTSwL7ggkGrCr1bCER8wgeX71UUk1Bo1T58cwS5i22YtAhSwd4C46LuojCPRxVzU7p9",
  "key20": "2ciyyfs4GcbwEeKTwaeDjVVD4apVfrJMGeb7XtWSuqi6cPL4fC5itZxRqwa1B4VjqRroraA4D9raFj3AD58mVK3e",
  "key21": "49XfEMUpTsuZTZRAJGGsNgRsUfqEbuHJqBpu83u5upi28siWmyRGAGv4Sdzq68NcRS9yjbfWMkqR1u9ThD2iW5EM",
  "key22": "29359YBZkjDjr4fYvRwCg2hN59oyVNFRXbS9zqeGvKVJQPDbxKYW5EHLnjdJa1anWpeZtUvg21PEj3xG9YJGSEqq",
  "key23": "3eKxN2VzLyZa6HXbLJJXcMwqbgxMP4mMPs9TaN7BXXm4nX5fraAezfMgjfwjcsC3q46nCx8uTX9kXp1ANYc7Z4wT",
  "key24": "5KPdp8jLqzRConEvykNkNbibon27sTvff4dj1Z8BuhjVxr9MFD6HzSR2zjs41Dugbpa2HAjJyWaBqkZxZVTw43LQ"
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
