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
    "gzjNtJwBCdYnDedegCbqaocBv82CgHM19YnCNU1ZBPyHSuZVmLrVfTDU2Hm6n9vYidK8fWfj9fmMVPhbF2BscDL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pijXrMHfFbPFVp6mLpz5UtHH5QwzeUYQiqfaEZSyCxGfkE2HLg8W3E5UddsKE3tggbs4NXRPvj8x6cmshyKgrhU",
  "key1": "39uJhPSBgia1wxub96TcWpjP78s3ZJnYqL9dzXf9AVSQ3takwWG65xtoijPBWjJoj4uminrNrNcQhfCsjGVPF5qK",
  "key2": "4LGejwZat8Q3LSnfRrXEu23ozSBf3iJz54kWkJf4WhiiSGW6FxZiAvjr9LaM84T5t58dcHMGSypPZzAFi3kTWJXv",
  "key3": "3yAMu7FVZUd5i9ZTRzHJWhmm2YBnS6pPvf2kCYHK3PCEf31UVjbbmwihrgnh48U45jcdUpHpTeY3C5mhVysGY2Jg",
  "key4": "3FakXt2HA1h4RWSQH87XknE9VVQY2sP5cYjhUe5cqxMWGpbSfkLekvwz6xuRmqWLzJXtXrYo3pMDWhtabCqsNHiF",
  "key5": "3qvqenNnnzTkXWcwL7Bsk37ZUq5htYtJBZTBbEEMpfJcPQKnbjVLyfXtRugUyGDjAyuHafRYN93b3mqTwTUA9uUV",
  "key6": "4FmQE6SV5DbzaL8EeuDTXALh3nji1PTKQVxMVmTL4gXptjCNJqfUs95Cv6DJqJ31KJzribkU9YWj1LjZU13KyFoZ",
  "key7": "2U668XWkuXxvyEYJxoTcSmeLCBbuoThoDhWFf3Nzv3NGjioCxFNzYFrWeUVaZiJ27gNqhpKgcj8CqNkFBvNYem6J",
  "key8": "2sCd97eZj4CMcrQ3kE5ywCT7yGC5E6mxyVxoxzK16f8oHStpLjkUhT6ty59pAt1u4Z2DUn1kxj8k3SwgqdDmAgS4",
  "key9": "2mFez91MhQMXSzVUa3tYjBYJvia1E9wnSxZGoYGpihXZSioFMkm94VBkg8uMYj75boJ7jx2UPNd2qgjhqAs2Tn9N",
  "key10": "spHAJUaoo4u3eAG2jr7FZh3D3dt9K6HMerBWaNCk8N1pgbgF73chxga5bYFh28LiA3iV9ehxJdfoUW1TJW5gKg2",
  "key11": "KEQfng2xEwBDwqfGymAcSw9gru8L3kTwZ1uz3KS2nzd3jMH7anEFfUbJLVmXbGY6pTEwi6YhDqQBUiGbPJ7WNcF",
  "key12": "54AWjb9E7ZxRKg5g54W1B1M1W6GTzMQ81xrTXUMj9zxKjuMS6du6pE6zo37EhjoEjzXGe7SYkHBM5wEJ7vvpPAxe",
  "key13": "eK6TBk4yyL6E94H2XS4PedCBsZzi9bxvAYQFJTSS8NEtnHpDAVtR47xPD99MPCe3P7sAYd7UQfY8PQupHBqBiVy",
  "key14": "3JMGYAUcXWJUs8xVeF3E22eu7qcntgsPtkxJwgc9A5EA6NR4GLw3WpXi9UnqNuWcynwswbGsWLRqdhGyU5M8aDR",
  "key15": "3NDE7P2iEYq6HG64PSTwFUKrqemn3Sc7MzDg3abEFhS7BH9v69fu76jZcNJUJmqUWuwLEHkMZExxqLatATnPLBrh",
  "key16": "jPf24LxX8F36YgBRbrezTAnwwo6TeVP9frvfhUR5YTmKpD83kQTJG9EuneeD1dd8wKDU2mRrco34xPnb6HwJQ7F",
  "key17": "4grqy2zMfkDpqfvrBFXZdK44WJr7iR4A3WXevdwWApMVsjU7NkiL3hRSpsgctkppuBtZuLjEgkzV6MAViAjT3gob",
  "key18": "KGM1Nnz7EsAmhhXXkBs3RGc4zVd71kZanQCCACYeT4RMF3s6cEohfBjtPvY7R2j8F9vpeaJ3s7LzDkrir8WqLJx",
  "key19": "2RZQdPCbNmmfRCLqQ2VGEys8otQv1BqSKb641BGLvo4msVt4VUz8T8HaYDh8TpzVkZbZL95G7KX2sczBtR3vyhkK",
  "key20": "48UzwQNeXGpzc3vFHwEQAvZ6R1gLxrZ7vWZDLtswviaJxTU4yTTLraxj4nQe634jQM8x4wRDcaq1aGzZsu9ACovy",
  "key21": "4zZMKcVpKN1HK8J9G7YqQQRiSyE1gbx5xcPcV1Cg3ALAMTJzVLccwpdcTnEiQsJaA7CwjNza9nA3T34FeRswSM9m",
  "key22": "51EuAFasbErd7RzBFhZYvYBw55xiGdbPZhqPjSP5ksFj4f9eREY6dFNRFANVGTPQZxyiddaRMFDdRwaQtBfrU4u",
  "key23": "4k35htAgnpCmutWSaGxRrY5sF3vKKbGVQT848mZh8Q7UvdNqLtdfAs8SPf1u8Z9TBVPPgybHjdPXh9WCR6JqrjwQ",
  "key24": "fMXSfnxQL7zXZDP3Z1Lf27hSLNa5ccHaNpqAJv1eKauAwJ255U3sQJbi6bgsYhBWgjwgnvE6c5ob5m2CU7zeVED",
  "key25": "5tNWMdGrwAuUvgjLFUgyXvwDWuaMCYf88zjXs3bbvwr2vPTjWK2dN5XJ4SmdohfSMapJVpq3yzEZP5yqXNuL4Rm7",
  "key26": "5CAxUKKdAykDwzryicvnWL2inhPWbsVx6y8D6oJB3vensynxu3dKuPX7n7PnZcpNbshoiDAyKzRhwJMeUXu3hWro"
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
