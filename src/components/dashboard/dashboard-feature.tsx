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
    "2PGAwNWjatk4NVQkkc8zEYBGsG7Ki87qKp7MbqjR3VFxkNNewqrPzNemBS6boMuchu1tafP6gyLzRupT8iP7bbwv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ySM5W4Jt4itUvuL2LJjrSZpFrrwM4pNf5C9ZdYMVa9Zs7baFU49yfYDERH2JLGQMyp5TmJTYohDeWzK67hnnrVq",
  "key1": "3mdzh1byFJYGm4SjqMh4atQim914CaLeks7ngtPJqvUJoD2Lb1cL5KFeUxZXuCV2uyNj9Rfa17ndcg4zNd622CCy",
  "key2": "5UpvQUQd1FFWCHGe3igpowaqWwD5FnWuZDLr2x6Cq5AJezDXivd9r8wSoLKnYs525j8B8bLXjWo6RPM8gT4gaMy9",
  "key3": "4xqWoPZ3kRigB5Q6Jy9u2228bzMgcBpvDsYoRheReSAStHWuMgmy7r5zjdybCdAJWqzVZbPtcoNJwtAUQJoKVMSQ",
  "key4": "LAQFSdRNhWYpogHYSrGDgs5RcRG7ET3v6sSieAyVPGyY9REkJkxADpXvmPRSDPhBuNrj2noxp8jy8MME9GUsqiS",
  "key5": "2ixR7wuHnGy97z55FRi7uAzLu9kiqg3ZRb85FEYSUKQ8cBQH7LC1ijPaKsEgpXwqEGTwCaTa17taeuotCdWzmram",
  "key6": "4JG4zgWkr2HAg1PEVwerTMJnQd3ALsBig1g9L7FGpJRGQkQYuUpy8vdfsyuaFiPvABHSgtTWtCM4qaunG4xcbywi",
  "key7": "2Yq88aPxAbGfqG2o9FCJyYG4UXjhjj5rw4cz3LwevchpqpGETAwHjoKF8aUHvt7NaaaVYkyxHg4mpq7kg4kSDWtq",
  "key8": "cAsyhNmxo6JUFYosSZeFWvaq7ymCKmjkh5ZvrBRkZezjNFiCipAfWSRpgfVZQyHL49uWGdgujPBEZiBmhciMSAE",
  "key9": "6WeHwgzYdANz8jrqwnCPuNUwEJ38kWD21GmwGTt8awMu41Xf9Nx7QZA3Uc7cVWx5NhspqnAmfxs1jPPvQ9WA4q8",
  "key10": "5DAFhMEPopkuqygWrZMYBWu7wFrKKg9rC8kPmASqcoGGLBFvRw7SxZmjuB89drvL4oaSGBFB1osNVTqnFU6qmBpC",
  "key11": "Gh4VWDZqmegmzyGUL8s7XnSgXEwMvkB4jNhtxfTFcDHAxSS2cJ4MPCPQZk4DMEee2YaeH96KiGPUbjPUYJc4XeR",
  "key12": "5ZcJ3UX7KynpLEKBbJUitBQqYGvJmbh5P2g73a5qb9e5hFTWf2on6jZkrkN78Pai37h5bLhTwxGm8pTpKwdEjPp7",
  "key13": "5MC9fGJWHtfbSnACj8G2LCJjB5HWRBbLuLVZyZy95ccqSZoRKfSHEmiEyNbSw7ndmxW2ehwTmBxQXZoPdADhV7mC",
  "key14": "3HHSh11uYwmPx612oMc5KYJTZP49CcYjoGWFYD12beZ7eB1F88KatX5cmcvmUFCYrqFMfMnFFAmpdqULTmw472aU",
  "key15": "dBsPvK4aEE919jg1qCsYXNiAucaJYcxjKWSzakX2ChjveAgkw2bF2csPpTMMbVnBKNp6YyN2XPXhZwAhwPT7x21",
  "key16": "3shArfVgkHCJQmdSpYUCYcCmQrnQo6W6gP975Q5rcKSuHLopB2fyugCyyxPcTrg5tgXWeTAhUL66c6cfFdn8tqVe",
  "key17": "qpeffhLWsbujZDaw89jE7QxvPVysqgEQroa7iLhV6iYzYM35uC21upoAmica1AKC6QUZHgSSuXUaoMGuUhFWwnp",
  "key18": "3gRQhEKhA8q6B2dgCXktFwm5NfLeVPk28HuZxvhBMtcSoTdy8VMxEnTfKtdbsHw5ncM9uUEc7UFhmsh41cWVff1E",
  "key19": "27UQAti494s5WgULY7fdfnVWkU2hD9iJebQjZoTFvqmydCqbvxXKfRhS3T7y9UbBpUszfEEEZXwXSrvNsnBcaK31",
  "key20": "ogsMzEW8bE8vBjqdvDdQJ7rfj5Zte51q14iduSWYbCQqqHXsxuxHpdbSrktt3s7UYUhqYnDEKEvbSif28QcDdvQ",
  "key21": "37CPZLcD3zAhZLJkXUWFwwaiqMCLKUHkvx75fxybByj6CqScVYaQqWs4XPQVNRrJaGgcDtmpy55rPDMf2U9hqW3U",
  "key22": "3pqRmhyTh8ahjaAcNjpmHDdmBDE6MToa1VUUQm7prFm5MpHYYiuvL2MsJT7X7Y2FGordwRdqRrhiHHzJy7pEBZM2",
  "key23": "3eaTuKKE1wzgwE4XbAzYJWwNgiG2dWCCdy2iNf86bZUbr3X9LYqKjSESbnyrxy3ykuMBZeGjsgiuCgxoK87KmWEH",
  "key24": "5GMzSKPuojRnYYmYUpq5yg7GGYUMetD5MAmETZfP8Sor7wEQSkrMZQd7exPjE4j9cytWZiRZpojwbRm4mLGQQWVs",
  "key25": "4etZqWa5dPgN47vPEaBDCxfvcC3APjRTjyvMHBr8e7H5LhfhQLaXyYj1U1L8kLWyqaNLDegbQrkiZMRk3vAMfVWs",
  "key26": "3ErTmd6jcT455WkXtRjHwW4upZR5zuyCAgMSv8rd2EnMoDKHGix9cDbsztzxkJ5hLLbrgYitsWxungy6HjwwjzXe",
  "key27": "66SBZcbn6T3yWjfwT9aUitXDp4iapam5MgpJZqDCipkFbJahtpDe3NhDVD3StuYMuKVZi317Ho4beiDAA6h3G6aV"
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
