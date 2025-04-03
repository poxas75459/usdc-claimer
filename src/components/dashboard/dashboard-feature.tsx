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
    "F82sicFujeFoF3dYkdgUxMLjTXb144UPusZR7w9tt5Bz4ghyQ8zYjrMJ4KTFAhcmVF3po7By8DYC3rV5jYhhi17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qXUztFT2dHkgPDawKbin21oPqmNzqnkkzvyHgDmTH46WPVhVj9Uo3yWy6LBAW3tijbeKE57VbCayEg8Sb7siT79",
  "key1": "3hnG5jUk45FdWuUgWooqhbEUqgsWN9rSvqeag9VbnLPKWu5Drs5LqcKhddbB7xqxKVdaC1XB3Aywrpq9WGwLWH4j",
  "key2": "2wRtpyHSRNqEsbayRikZRr4BtdrjWom9RJWq7fw1QcBhZREntC8yorCBY8vkvAMLz54yLjeR7Bi9KxB9unPtaVTT",
  "key3": "3h4Z2ucFtEXY2SczgPrPTk6bDVFnDLTxVvM83CTMrJ5DJEsvGmdu8XgwNdB1exYCSKewKUXz8tusLsCB9qYraaXk",
  "key4": "4xcXhpyA917oFrdeyKQQKd8xmzPKiXxFm4Gd2rKVJgxmRs7zM9pHTi6s7fmVVdX39tMA9F8ucxEM5Xe3o7ov51qc",
  "key5": "4fV3iax12WxHVvDFmXbwtEqpTHPygpCsdz1XWx7LVmzLmYQrgryHSfM7Un5uKQKbdDDxn6ie3NjYMRnuVa3zyxjT",
  "key6": "235zwpAYaS7SJEoPfqaxSLd4EeujSVcSRtV14hKRcNqP3DwVk3QsdAxd9K8kzXjLQiTPJ5F9mLNBKsiZt79E5CnM",
  "key7": "ik7MBZMrFTcdxtHZS7DGvfebQYmqiJ2MikCHzRcS3fj3af8cS3QGzw4K2qnAFFKNnPTRATpkuTTK5nv1ZLj2HUU",
  "key8": "EKUVGReo8hso6rCD1JH5pAwEcqqBLFWJ61TqAMY9dD7xNFAhNEGKfHG7um5CCA7MjSkFgukizNF7FJiV4Vk7KSs",
  "key9": "2A1acqKRYHgdEE6iK3i4ePd3Gp5QjMu3N7kQ6p5XYzgv9FZhzEbpk4zJrF31UxLYE1kNgTCgcqVuusJpuyvPw18m",
  "key10": "4TZiFJDTHN8Cwh32zSoc6twHCsC6Wq4gHujsdUm7pJ2ZedFqKWxskvLdAoLM6w1kbJzTCcX7UZpedFsyZaLLrH1D",
  "key11": "4VnFoJTWypCR98ZVvDDeKu8FxPpzKjkrehmdqnXJEMs8SXFm4Cd773JcUoZ81ixVw1L7zc1u5L7twoCWAKNttpvQ",
  "key12": "7UaXE9CAuEmXLPUrUQBcndXBkq7Hgrziy6WYAGy66hkC83AtBrQ7DyZqDKAJCtb197H54h7w7FbKyuDdU2ehSkX",
  "key13": "5gC2wUbya4CGWXKdfdYY5v2MBxLZgJ632r48ts9ZpLaUY6PcsWu3LdZ3rpZVVH2srH5K2uG5PDdL81ehYrVg5z82",
  "key14": "5YQXjTmemG7pprDApGK4x8VGAydzunoA6mYuoZz5ovM83GN57xPzTtEMoMmvtAQMGf1uhoL4krL84Mtboc9kRvep",
  "key15": "nspSHF4yTr6FPnUpmEXyRZ4jnrx2sQdJKeUzPaNfGp6ctGXPt7AnoHkgNFyoWHLnLUjuBtfEwZ3qg6AaUpwryky",
  "key16": "5WunMj73PfytZ1mF1GASErAYmPir3tg2RnbAk6qsNFTQwmnyuZKpLdVRZzFYTJqpWou3US3m4LSUSUH1XbnZY75N",
  "key17": "5vPAzXvgvyuqBCbGmPXvQsumCLDYEahCnnq3fVMnZSecBPrisFYKVihnJayZmpB7ZYxVg82sHMDKjhuZbLyzuAPf",
  "key18": "3BadDSPyBEiE1wFGVc5xBMw6JLnrEXnkiQuN8dcwmNNy8GWPArZXXdif29XrkQaACZhMbZEvDT9s9jmn8WRZu6Rk",
  "key19": "3V2KyBGj1QYREiU6Mddw7ShVZC2sKSzrdtDAb45EuEjMr9CZyu2tEbTdhBEWeDBBa1Rru3hxjHP1LPZ2uUEBncsf",
  "key20": "JmR4DgbmjHwMX55xCUivVmM6j3CPU5q6Vjxi4HzfepBjWiBRxmEYyTxV2KRRNQfYw413KC2y6WhtArtaBXZ5QE2",
  "key21": "2Lqq6ujCY4wUxp1EP4zXQTJB15UtHDDVAxpPnmyoUciBur8s3bHwPjJpDA8pGVWSL762oeRYwjgdJjjwh4m6gjQx",
  "key22": "4doixrHQVFeNtPg7mVagsZh3fq1byQvZmrt7YAsH8ZcPXhfBLku4tfhBfRgyNzygups3r4jdQDbnqvcwkzKDCmfN",
  "key23": "4pg6CaYBj492JV9nofBb2MgcawoGXUGhZtjif6sfdZrGzXjFiDA7bWK5nzwmcFsyKzfLXXHijpYMdBPmYxQNgr1c",
  "key24": "2PR1Fc3Dp33hdDsbZ4EXwrUDeooYVxNMeLVde7ZG7kBnZvpwH1bnSXZNsFbmqSX2sTMBW72nyoazMzxTDi3qSENF",
  "key25": "3VP1543ZUyxVCU7qXCA9rhe9d1pKGV1hNeWnr4wgCsBi7DZiYeU44nfmzyV28sU78ZP4fKAmZbb4FHx3AYuYLGTX",
  "key26": "41oERoMWJeatNbEZqmv7CLxxPMS62MfcfuvuQPLRn3yHAZANnaeHeHGy5Y9bim4UyEWN19qKwCVMmHSD1eke9rvM",
  "key27": "5hBv9gRJf9wXzyzurQRez9YrcVYZNR4Dko1zzPKjXxvsuTRkxqPnN7rAH89j7FPWXFh1ziLL9H1hiGUzoNvpbAkW",
  "key28": "5nDzuQWKsf4ytxLWYLeAvh3mni748e2mH9ioVKBxiu4yuptLzV7mGCxgNnDatnWH84LFJryVrftvwcBzxtVVqGGA",
  "key29": "3yfkQw4KKowDLzNeVa7mNmL27ebMBX7qbMuPg6qBeFYa3sYvbedCQ78U5f9XExGzW9WhbobDnkmxm3KVBnQ4YX9i",
  "key30": "4hcuhggj528srAQQz86SgVjYT7f3uuT2xanjtJnEyUQhVi8MJbZ4kPbVU8vi6XZnK9KVjzocxREYjs5TmKKYDy1Q",
  "key31": "49AZCgb4vvvStHqHcrpovAvcYGda6SS1Jy8EB5YJZR8YuSkNC3HNhEi5xRQpwDEE5NWweKLvtZaKeNUJTxaU5AtR"
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
