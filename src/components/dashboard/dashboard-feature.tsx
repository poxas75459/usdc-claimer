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
    "3tUjquwwVD5cESKurUf7v7jt7Y1PxQytUhUBSMY3KDTsq8rai8BJBqRRPsPqqGwYkjTk6qwWjfDgWJQBRFzGt52p"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ivNnvv8v8oBBH2rNZTQqipQ49Y7txCS7F7Jt2CdT11FN6WoYUeYrbygKua1f1W91bruGCyWCtQqVWWULwH3eH6L",
  "key1": "Mrg6znGTPpiDRHscDM6NWGcYAhgic6Hefn1siDum97AiJKQ6iag9dFA4qRNwyarquhKMz5AXYpuc1fF2QkcRHGQ",
  "key2": "XzCgCtmEfw2FjVedHM24SNTPhYvCGm28w4pozD1Vh22bZHJvibqLMNfhmX5budReDEudmuQcy4AxxUZCyPTis9F",
  "key3": "4vLzDJiLQVzK43Rjyy2f9rCtCzoUpRtni7pXuFC6SbsDdV29drpuMTFtyVNdwmRz9jT2QZzrt527keQRJPWoJzLe",
  "key4": "3LBtHHWh7ogWzy51A38WWdSqfiDdo6QUH3LEmD1sK9RPquDAm463Z3xjCChKFopJ7WmvRdRn6th5BKW96e2uN77b",
  "key5": "52cETNqHNRHSHUFkxSASRDNdkbZRvtwTkmCMHkGkUGRU7D2GNZF6nLiXRiM7cTtDPoexkd5PeNABw2LZ1h99xjye",
  "key6": "zbPuNtjDamUYuDZysjw7vLoi2w3Qs5phiauRvsoaWCHHDg8YSsGmWoZZ275ELegHaAqiazY7ovKAd4VhaFq88RA",
  "key7": "DCHmo6RUuynLn8hcmJvxrmsSAUtdSoXfioQwaw4SLv4WgD6exHHvSad9K7a6ef4fPursEgoQByTVQEw2HmJGoaM",
  "key8": "4gtU9C38xgbUgJybeqbZqKpjRQsQAUR9LfEFmSMoaS6mbUjZviijABYyBeBAef4M8bjgk8vRpWCauiEyCH9hAR4v",
  "key9": "388y3Fnw8t9Stz3yXVa84EB9X9yJdU3CQgjoNmZ6rmbeRVmwpZ9WW824sq5cFJvCfkxA8oFV8WKLdP1MjqsqzNhz",
  "key10": "2xgxp8v2ZPgPnPQawPaDTpZZiFEy7XkpC7BRiraao4K1H2WNxxUActdtUkuv7cTkCYYLzunUSuuMzbfifsK1irR2",
  "key11": "j3PybFKSY8cEn3j6CBpodUSQoF7bPCSDD8hT7L2uNAFPzTfJQxXxmZM8Z2isumaBG5uV1fjhAS7QY3LuViETnmv",
  "key12": "h4LAFWvJLKGmGXRi1nAa9aTo3uGfe7PqUwUiZnZ22A5XL53YjZH3wu7K8U5sTPsiLbQoF9nXDdpsJED2xadxCj4",
  "key13": "3z3Q5REizy39W8MSUpW8tFrsYbmELb1xybZuakvgGrVLwetHZ6EqsFfhfcN48p3cyM8KTNcBxx72aGAZxjeoepyz",
  "key14": "2JpL6qsMCWbSKDGGCyimiWv8NM9K212qiRVVddBofw5rijknAJcw4gdoCKa2dYzqd8LcAEY8c2jBf5F5DCgrqgDu",
  "key15": "4kD3g311GivXyZ89RrXiQB5f2ZSf4PuMLyxb2yEEhzPae8TxAa7kxXGPDtKoL34fDsPsJi13zaPCdGoiRV3Bq3Nn",
  "key16": "dcC7um9y6J3HuRAXLyBKWUgVMczd7uxKQhbY3xeD2RJcgnog4YXxChw3MMCddvCtt2xi1qiRRyhKsba6hWYha8w",
  "key17": "4cDu7rtoxJmA8LYWA66Thar7Sp4eBcuj8TgMx7D1erToh8QRk8p3PYTQLrgYpYufCBCMnuy7JP6waiW1vioHhnai",
  "key18": "47pVVuhhG2epzdckEzguCyPGijfMkoHseStWnG26iKwKXZFSXg9MhXE4UEh5joDoCZBQsKBD5iF87UXZaBuBP3Ka",
  "key19": "jH7XBCfgVkUqpAwZty7mCbG1CCSVa8883ZR7qjqHo1618UXEgp6LjJ3YjwbePvimYkU6rHy8AAr8WjpwHZqNzeR",
  "key20": "4R5RnzB1VBqugfRxbNnCQBwtbdgvLWyJxQmaTcKtKCjdGH2TXR9gj9f9Z4YukejcWXcpYwdiho6UKUAtuBPb8cr5",
  "key21": "2xdoJyDSSQmQ1snfGEDmuMAjZCHxLvy4xSLbtZzkCpYtR8jjoXFHJirHifzPh17LZhSudupVtzuComgtyrDRQnnk",
  "key22": "3erRhAaurYGKpAitMdAcM52Mag1FfSAbEHzRQ1EGVCpJNzozNQ3iMYP6zq5B4YHDYmQFxXjS7mRqrn19MdTrFFqs",
  "key23": "3cGt4xNsa5kYSRqE4j2HNiAzdka1tkLYG2xnAC2CrkkDB8FYX3RQVEpEPbYySNsgMjtDYykYeSmCaxsusdhfJ8P1",
  "key24": "cyZm58b45MpKFzDNHPSk2KEzGFCrXs54nNSCagyaHmeiYk1vHr7DjGGwa7RHsrC3CaMoGWqZVZ8k2XW1EEqxu2U",
  "key25": "TamconLsFcNdgxrzxidZQofgB8Hh5evRgkz6KZNfnerR2P7y4jb4EkPSQVyCAgioqm9gmz8GqSQ7hFMWLR2Not3"
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
