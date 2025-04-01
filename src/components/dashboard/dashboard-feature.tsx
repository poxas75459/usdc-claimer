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
    "2UBPb4d96ZLFRF4taGpSqBxydmBFYHvwAsMQD5vfuEUkq8WTZXVB9PLrJzkd56xyUnSB3dfRCPyc7o5EAP8cx6w6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7pTUuAe7TesqzBKp3MX6uqVZH55c6LdzfkYMfBBgkeSTZxQx9xJoAUDg75fL5J4NyXfmjRjSsxU9SppE3LGbcSV",
  "key1": "5fb9brVLupq7gFmDaD9vzURRAZ2CHyK4ofjJaJRriGkcu62L2t8oc1zzg2sUH9dX2Jdg5he5PAw284mUWEjZ7EP6",
  "key2": "mJvX2ZGCjA8cCq8dc1b5J6vKeAd9uwF5jii7VVwx6wzH4DD4wjeoPFqVhZAfy1yqVAqmVNJUycepkEfNNZZphK4",
  "key3": "41JJDz8HtKU7EfKQUtdW6oKUKjNX5cj5GMAz566UBMjSUV45uaxjXuBBozvnsnWozbyV4AjaBSZg62f6pDnoXZyF",
  "key4": "4q21EqEi4nd4qxd9Mhe3rTcAjakvHgpL2ER19FbepDqZAqtEQFz1FYZpj1xCNUMdi97v9pHRyvmq3AScFzGGPvWs",
  "key5": "pNvhYSiEmJW7KAMDJbT8cUoZkRzn6qKJciLhKvCMeuD9dJkZZ2qRrmh7oT3W8mgoRm7WLjEb5cqipoaDRJauYRU",
  "key6": "5Pzb3vzBgPiisG6UYYaQTbJzExu4HkakTzXxdtJbHvetSm3UYoVBnhnHfNnJ7n39w3ixHGTxDtxocfgAieSoLNYk",
  "key7": "3K9ZeMsKDzEw8Aa67R6RxRdRjoBKZ9UWb83GSgnHGBZbG1aWMVfLaYYJNn9ERxvHNGQu48gByXu9EjvPaiqDwBHE",
  "key8": "2nkFzXQmR7BWidq1XUwPyziLYYPaEUUg47riSv2cFLJoGJbZL1JrpUWJjm9kGVqoZw1jw3pJpdSau2U4JN1E5BPR",
  "key9": "3Ee689VotQHWmURS6sdHVhbWzyqxoVdk45KzXF6Cf4PG9AtjC4biD6og34gfPj8pAoTo178Lznc5oBZ4sr9t9C7A",
  "key10": "3aGP8sp63PbFbtUuLB4m4H3PJCJodfy46YrxwZtoDmug9h7GQNgbNzDFdTnyLXtoikTMbkSpivdnrdZ8wF3JAshA",
  "key11": "5x8s5xEYyrWFkF1dJyoV8r2SQQDLh7jsUtBT1x9k1aYRfrWzewyrKg4cDPBdJMpcx5Fk1QmZJLZ1DoamvAb6Y3TE",
  "key12": "5cbC3WnWwq8NQCjHVYjWSCqCWyMJnR9h8CuDVTvx31sJgojVteQSGvjCGpdcT3JzENTTA7Jd5RChT9GWAdyrC2rb",
  "key13": "p3jSaiXnLxsR8679nvXxvecgFVVxL5qmhdhrPKL2sXS9T6koa421TVwMN7RqiU23mbMcKFZcqJRPTdSkxd5ry7T",
  "key14": "28jG2UCAiqgCDFDuP8sH9cZfeXw1mQWx5RMVn5t4kdxbYAa3deAX3bW32Pp9GHdEmppGUFBGozxsbabjbJiGYRXw",
  "key15": "2gYDzCkZdQADQLcohQksNy128keBXchrcXybz9ZUEaYFZDroK19asLdnYuDLHGw5R4aefktD5Hj8dE6cNPW1H4h3",
  "key16": "4LLTijgs41Wc6MqmXenxcus4F9kBNunkwiXqXRzrGWZqGnmMSLEZdzntiBLECAvbeYiiyoXeMnEyDiMfT6fThD5q",
  "key17": "5N3YvMQBUyLEs87T92Gy8hmV7TZpeJS6MKBWo7pd1ymGib7VDPY8ijTbpZuinfyhrycnKkMDeo6FiqufTcucrQCe",
  "key18": "5QQL5FhaVu7jY2wqiiZ6vpbhnZbb75ypGJUmFuL53DqdNa1zs8iZ2vBeLF8kxN5Yh9aMf847UKAvcYxTHbGhCeqT",
  "key19": "5Kvi5Gynk47xw3vH56Kc1bEf1cLZ8zLoKnUpBNosbzhXeKhWYUTaTm97sAY8TgLx7i5ReNtwuxDoXwhKfsjGA6vT",
  "key20": "5qjW3zEiW7RRDFRrvdUnbnsR4mw1CG8wo7mRAV5VAhtCxSoZrG8Jozvv8MVeZAyFXHyjzjmbuUhU4hDd8B5hTrzy",
  "key21": "3cWTEPfaSxPQRQwbD9TTbReQ7ZrWKzLmWVvK9RwvEzjfESuB7yYtdvCUmBE682QhDx2MJVCFnepe67XaQSkhXvC1",
  "key22": "4rt7Vxk9zUfVu2MLWG886Hwi9RXBzUAdESC9BL8in6JhzfoSeTigY7p7kmDzhxrwoZsrAZHmUExygomCvehcg41a",
  "key23": "5E1LrtRUXsShec1u5uq8DRir1vVX2Zd6iCaVcZQV8SWGi6T8dYNqGuisPUWS8rxAiZuHPDMPfGkMp5S5fRK8GUMi",
  "key24": "3d1MMobw4zcvcP4ntyJwqKs5VqRQhcty6hUNeHXWcPMmm9WYGKGEm5gjYzVaKUEVjWG53ZBgV3oBCmkcEEv2tnfK"
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
