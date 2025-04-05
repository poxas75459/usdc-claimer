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
    "5de5b53mnJtRarGMDwEqFUXzzJvU2QViRkDDECP1GHrGfckgBDdS5p1edKvwWc1AoMwJAdE2JZL1sbQ8xxXP3hni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VuFEzWzPPzVscpKEnr5ZhaExbw863c9iLkd8brbdL6YfbFyP8SEJgkwjCoE2VrxNYLB4gNQnJEuU1qP4wGzzhYj",
  "key1": "24NBmRu6qkVUe17AE3JQe9HCCgxY4QLxzYCy9YoaeSaxCPfWnKTBxmHxMNbeqnFBJzN4tGz63gzTfrsN41asLvKh",
  "key2": "2YdMbTW9TvLyRf8aHQT4PWGUZWkuQ5Tkv8jEb9itUymhSz7qGiZnhgGTUEPAG7oTMRpA4tvZj5xHqY5g3jci5A3C",
  "key3": "4mBpj6SBMqr5qSFDKRjWB8uxekDHVh7wa9d9QtS2m7N7Jo1UjyvrsXKwC7hDUjWjefrKqUokv47uNR4RAMhg8ZuH",
  "key4": "2Bt8jinU3tWYsyBfbpdYFmLwET2SWe82ZpFrCAQ18b2U2h5drrXGboTT711HusCxjjJbC7Lu7dZF9LBiVmCa5xjC",
  "key5": "UXcTskTifkWmGNzQUDpdtDrUFxrAFUA5fNGF5H432HQoFKMEuDmi99HVuikNfQUtY6kFkZ7PxgP6AesptSnJqUd",
  "key6": "67fu9unRC7zfJuToGSy7k1kvY9kFZn6yxLFu3PGXwSQsd8TyfmFnUnWv6UmRdcmWayc7rVwrakXkfGYgMmBMJ3H5",
  "key7": "HHMyqC6cgGF2uy84uGY5iucupCqCYJ1cAn2rSfPPeSxuRCoCf69Fz735WoZuAJ9dtTJmEhfBsnACAdzf5NDKx3E",
  "key8": "4J6aBRb5XDVBcz1hnfsMD9mLuRtJtDFb2egUmt6F4qwtZEJDoVbjuchvoCPofEQz3PyJLnYa7cMZLGd1n4DqsgQf",
  "key9": "4AXoe8ebPVvnSDSNUQNvWLViDsamks3DPYa71rxSUE8WMFLyxxLZNQddbCqbAiaiqEtwSo9JHe9wy7iexFprMNBJ",
  "key10": "pX4X2VDosnLKyfvHEWvBzRn78bJtdwmbhJV8r1E7FCzPoWjKs3wghrYnDdy65BPQtwEFJf6QmpC3sZxdbqE4stK",
  "key11": "4idjRpzvdQboAxA7CZxVvvFXAyKLLvCgxCtEqRZ68XJkwrUqpZPtzMmLR7gCRV7xAb8RfYRHaYF3gRegJou3zvHq",
  "key12": "4trAo2BktFjneqVzQZaMQGGBjrrRU7N3dSnELRyne3K4FDqjFdfCNuJoK8EKfdQ3gsowM5unj4xDXXUhCDTZu9tC",
  "key13": "5Jfc8rruow8xBF7jFv2VExynqw8mRGDy4VLDMd3KaN31CtnLz2HWWdQrh91fuHLZckUu8PELEAJDD2762t2Qz39N",
  "key14": "2aMSKfcKCoZJZYLmHEyHzF7UqLReeWsgL8EZgG188T1qM9ShUWSTjPMUnx72EMFFsb3JTUZzyEmeeYHTpeTjXDyV",
  "key15": "yMxtDKYcVKmBZ4oyyK1tw3rK5HQz6wT4ohQfKmC1hUZxZYhqNhvS6K1TqehbHqpriBaNDYFySdSkWS726zirpmb",
  "key16": "3DSUkEgwfZsdj1enep3cVPYs3X1EZAa6ExQ1QCVJP6ByCJRksxjJuKiytV8ZL3pCF92pz4qbwtwiTa512jxt3VKP",
  "key17": "5xNgNvD2vnzzsrs7djyiFu6fTYamefwGoyrgAt4KpBVAaREQghuByU9US1mazi14f68ah4Em2DanhdsHrMyaWCua",
  "key18": "2mAfxBhnUqWPeTGmkFsGGYST9sRwXr497jTZRjVrPK8VZXhsMY1oiYD7N2DiEMnkMGqVeJzXArsM8gM7XqgEnCAv",
  "key19": "2GSm7YAUUrAu2PSx21fUyW68S3ADKNDuvoXvonSxkS6YdD85GGmToLCwewZhKX2hpfUwKy6pWgKb1H62oVFAV63C",
  "key20": "49wuzidrprmdDVFF4NiUxVnNy9Rf6s6ck46r4M4uScVR2N8JMhLGwHYdsAagJYo1pU8FKHbm4U3VAuJXmGd1KYj",
  "key21": "yow8TRbokdDNa7ZYMFhRTSbagd6yRofKoSKXnp6PWp9CSEEp8QMMAKYvzbMrkwzap12ot42wB39MWWJAsvNmCEJ",
  "key22": "omZFWYmKdZ2HYgxqCcmUK2FrsD2tK4igPZC1mQ9ukY2wJ3EsJjaYEPufJwTJdncvqwxGQb9rDCASaghhgnZehCc",
  "key23": "NKhk11CSgU93a8vEEh8XuFLLcdWfwM6tkDsSTYjUDpY72zXHeAWdE1e7zQLxWrWFHuZTZvgLeFdautb5GGPT3X6",
  "key24": "2DgcfLfutGpKkxsPG54Y1cn8rpSUUfsYUpNkwveZWHPjdzY1W9oyZoH6TDS1pGivEHkEXeXQg4QhL3C69fm79DdV",
  "key25": "mMWMn6YComAqUk3KGgUChahGqrHjGdGdEpDFdqCYybRWdsTts1s6nu7XrPT6hkdo6JFi7UZqDxWmAKVbFxdosZM",
  "key26": "3PFhLkZkNYPCvNAmdn8FHSR1cSK7s95Li1LLrSAERarTk71TGSDTxGs8LjyTXebd9HU1BHKvFebJvknsJkGnALC8",
  "key27": "4VRHtKsmx8g3iB5DruaCgzcv4JPSBfC4Cq6UBwNzJzudzMkFRRs6EwMe5Yvi3vgw5WTnZ3BoWtpPGstMR9e7fTrQ",
  "key28": "3yikADKuxxh61XMGoXDnkKoYrXibrGMcVKo7n7p4PQo4s4A9eTBFVv1rpzTEs6yKVWBiroXBUYxzNB6GXphastC2",
  "key29": "3TbGHP8iACUQ5anjqUAH8QqZZwsUAGbmpCiCSwf9G9hAb1xiD1aeYkdQtD6qhMUEhAyAUXhXNUAXMRk2kp3WoA9Q",
  "key30": "5WhJSExoTqNcLaDFUrcUDdbNykhBwqiiqTemLbTe8d5uzMzgZJrofNVRXdm43VY1MQaMd9yMK7EsQzHBx5bBtuax",
  "key31": "4gbm8LGdjPyTfJomGhbRVNfw18ebDjFu8iVLn7K89NQ2S5tBP9B4QCqc5RMh8vE4wysmgpmN6RJE4UmRhjpYrPbF",
  "key32": "5j6xzK4ZDsAzzJBcpRUHJa2QgVyRvGGiofDZLd7ngy5M3Fw1ZsriK5dGL1z2disqvoaMpBFwrhqZxArr8GuftQFS",
  "key33": "4TBB5Fkk7B5X6qeB6yzr3GiPaKhSzSfFDyPQyyo17fhWXkNMigxH8KEj8bDiGvsVV6Tyx15Ms6UXAMPoYvj7W2kp"
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
