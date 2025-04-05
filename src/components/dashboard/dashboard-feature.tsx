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
    "2a3L1x8npAeZUBZ6ZDLotHUy1ytqKkYFSbkYmhHkghEmxAbrRDvcbocXk9acDoVwVbBFJoHwfA7Yz3Dm6JwudY4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yeYt5sRZWsEMLDiCjixxgaze626j54F1QYELpbD12n1k5g66GoyCigBetuXr1xRi3A6GrSVbHG9ovBoQhGaXvN7",
  "key1": "kE9VmKvXUuaSoSJtHQhHxqRFEvgZwhWwQR3w9LqrPCKzJAm4tXH8wwPGasKcqSLMBSv3qkyGzFhLe83rPsYP5nk",
  "key2": "4oYFKVK8K4JT5KM97YVuGVLQjcUxEzJK6knQAsibq5upDTcLufF4UMy4kNx6wfKNioVD9sGoNQcWGWirB4s7MLm6",
  "key3": "4M8PFKu6WWFn9AGbtSof2V6hwExzRUzhN4znZZjHKqaaEnLedtTaJr7awxs3mPJS8CU7ZVK5wAZYXR4szNidftbC",
  "key4": "5D9qesQBTAEvLtVBqABCTLZYzNQqfiRY9c5PovJVegnV5Zcmvts9Bf5HpmhFcB93ifFpcVBKqP6MbNbcp9Qcgft",
  "key5": "4B23wfxunLGic6JwCoazZMCv98ECFsk2QC4wtqixYaneyAQUUgY4ojPHes5JyZQ872z7wuVcmfG68eEiBdpYPRbh",
  "key6": "6AKN3zD4J5MSDy25NRqbZcqHxNJvkaxUkLeSrR4o9DS81RP531FqLfBXDEx5KDHnimixjHhFoLhVJfKaiqJSjVE",
  "key7": "3fni38DatCsxRk8E2YzkifVSXK6Ci7Ztfwc5wdTUb23481zQwB9H42kiMCabgaQg7UnpycP6HdzWXSZW6azSW97o",
  "key8": "2exx74jzYLHwQZuLKKTssdsHN7yCjgdWTSiWNWiRabQaQLCzDWGNe7Lrn6ngJ61GxGFDPvsTbxNCLLfJ8TzZeJ3v",
  "key9": "35D1WkuD1pe8GwKad8TYrrGnYM25iaYiiemFFwesbSrL6mLn8P9znnumpueHwQCtnDCzkBDLBcqMQhxsLmcyKeNx",
  "key10": "5FfMLMy77iCitaPZFEsXYtSkYqji5aBxB5iPUnkTHaFPPZmC2NnxsLDoib17nv1x4uYADhmmh4C2MZ49ekbEagvq",
  "key11": "UfG8ou7FK4ZYf5ueq71owKw1Tphu31qTx3QjuTJucJTUHY7vkQMwM61Sr8H2rgvz9xC7Y7CCZ7mBj4GziBzzEpk",
  "key12": "2oZEAaqHsnsGQcvHkGsDtd61eKkGhuWHk6TjGaKVds7MqpmzciHQEX7crQ9PWvb6Ccm3S8s3wVuuyeAVt7nfH2iz",
  "key13": "33FpsXSDSDGiu8sFFNL5Xxk59XnmKc3Vyf9z3bPG6yCj8HFZRsTVkQGmzfdWQLXa3esT5JjaNu6uh9JHucYq1djY",
  "key14": "3MHYXxBsMhx5wDVbfB7HNmUxkn29zjYVP534VGJ7zeC4NDWw9j1eqH9NvHLWiwDp8b6fqoduLPhAtryKfXpxnyVk",
  "key15": "4so5eRmA8Li7gtUXAsWmZzUEeYUwWr5NJqVgL25a7rVvfEGgFB9n9isWTsuijCX6mY6uhKk1Rhf5YevhFsP6Ku3E",
  "key16": "vBDzCn6ToHxvfQJKAvhK93AyCVTPUNKkHsxRoXUCgFEtbvCrKQXTDYfZhS45eP1UeN3a8gzJHJgoR3XQL2mLwJJ",
  "key17": "4VbVEVRBbonAKkYWm1cdnfyVJwKC1eoRQdmhGfYJhVNQ5Qy7sDM1dw5YEkpEN12oW3FxLcRKmwcyqemW7LKZ4LaK",
  "key18": "Qh8hvsV9m98YRj9fBqtDvLYzgLW5CP4DWw4oVA53k36mnYVDeYZCjw4HXHHkRwQeN13K57dmRZ4i4wGobRd4EKo",
  "key19": "5zFYdgcpsxfm5LkaZCinxJQeq5XbSi4XUy6FSYVYs7H2W5UHtdMirb3FgkwFnDWUKzSFUg34CteUh3ioMMnnLxJi",
  "key20": "4DLSonmb6UNxU5k6dz3FTXe5HF8XQy3184LR61sP42RFLHyQA2C4ivyf9dHAaWrk6Q3t7hzZS2gR9vjRDbppf6yo",
  "key21": "2jK9mvGztE14MCfFwBd8NVScNqSAzbSH4MkR5ecrNCzpaXWADq4E5XKuthKPWxfyoCg58wjTqsabdAh53FHGzhYd",
  "key22": "4a9x8myfnFiMgUqcWFzzPhnzmSmqXtsEGiWwnSL4pxKE726NDP1N5U7YkJKHbyowKbf5bi9znV2PJCGUiWY33vTC",
  "key23": "3PnSURTuSWekoh9EDWSSgYRPZKzpaB3Uf9x8kQoqLKZ3UissxpYxrc6b91trAbyAtU7a4FRKLAsRVacg8tRbEEKY",
  "key24": "5qFnMux4xChgkXosNTVey8j1z1CW4kesCC7gFVQTkHcF3xUfjXRAtEMdT8wuteCJ82oM42Xc7Hfy8pHDo4Wg1qHx",
  "key25": "3cDPZRMRXM7tomJsrDBHo59UcZMLdfP5zwnrg453Ee4FzfTMaovy3UYvkKLjBMXBJkjCphRA6MCaJ7ee8DGTvGo3",
  "key26": "2YgWSLvohrRuLFXHXzpUFwtATZQRpJtg9KJU4H4JuNGYAgJwiqoi9gzBkh7M1voxyqGKdACXpZupBMvY7UWVqCLw",
  "key27": "hivYw6Kn58KEPyXEsVQpogLRehUYpNs6yFWaiFT97i2eDaEyRze5BbabbhuWuA5TBNTEhazWts4iyAziu6ATeVF",
  "key28": "3qpFXkARY46p3rp2hQirgcL3BdTv2FZTqjokF763DT7STPvMSc5WQaG98ZmD3cwgm6KKoDKojQnQMiXveKTJ4P1C",
  "key29": "2WbCsRjAqNT3JxGQX8y89GViTJRDXWMhggphQuaU82RyduaZcCdNJvUz5CY8aNrkrpL2gfN1aUdK7ifHS2trHY2M"
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
