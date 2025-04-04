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
    "5f1GD5MY1w5SHqqJ52ZxUC2D3YcgeBvSSmLe8oNVYjaYs9xaxB1Ttvx9bD1zt4GXa8JCNWv7zhorYbp4dhLxcSQ8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "e3arTz67RRzcgpvEpToe78nYHouaHnqo79WbYdPTfYL1ApA4sk2i3eJGdEFospCFqB2JWATEsbPrUjGKPDbnL3a",
  "key1": "5LAX72DS9exKjE9kK2XPvnASWNpNi48LCfJW8EpuejouCwABZXEXeBzYjmh9CKhKZHHR1db6mfqnS1amUyBJAbGj",
  "key2": "3Lg6XXQ98CdwWB2QAWThsNDDET8k6rWerXKMCydg5gKXDZiHVyVqRW1kzJyzGzh46DZg61kUUXBET7dcfgZxuEt8",
  "key3": "xJVyR8adFXvnQzwwwcDmHSqJUZB7HVebVt1qA5x6B4sRbEH6bMW4weE8d8uQvnhnCE36365gEiXsLfQmxPgDE5w",
  "key4": "4UD15AywmvrDoxBgTR5v4KWUAVTXNmTbsjwDCaNGjfWJpibkRUB3PD5b3AFeKJohFvQLJE97AanMuav2vt5o4Ww6",
  "key5": "dR9LnSPkyjBmr2J68H1pobP847zUZneacrN8UmYcdNVTkyNQCpXhmLWdbJF12fpz6QzB4zM9zh4qaVmehQUxAoc",
  "key6": "1aRkZxAaZZHk7JdttYeGb9mdztRopQbfWX3SeEjJ5c6pRDAG9qSoUhn2ZCoM4drMoZVpRk37hGJPwmA8XpRLBJD",
  "key7": "5rwWHQMkFB7snwzaz1Vj2QP8a8zTZAhSbgoVMbd34NcRvZD8jMS7NVtkkswsrSxo8W7Yi1TrfxhFdNpKsLdu48CA",
  "key8": "3AThdhgfRoqGms4nJjaymzRrYgE5kMYJEaY6B8Q5BfC5cPy7DhN3MtKcS8RXsqxVqw2KUa5TzgxT7z1QsgKgvQt2",
  "key9": "wJBJm5JSBWmYFUzsTdwQTwUw5FnKCmfwagy2scUgEVy2FAuwVHxveWzaBbGiMSJ5znbZuW59tBrN4wR8pdsZhC6",
  "key10": "AZc7oZ7zuqcwKtDuQ9kMfjyuxVgjTdnjgQsLm1m1wg5LhyEAF2SVt7NjTWK4Sy2UMFwya1dcmW1mxpJeNWcvduF",
  "key11": "4ygZiCW5Da2rnAPPk9KRCPuRobMmgFRwKFXmvXjt93118haYvvKNAmRskgTSteSbQ5HXzUZdSmYYoHrPkvvwG5Uv",
  "key12": "4h2zYcFLsU6TiPjpToQkhdYwhBj8TBeQ1EDb1sYvLgJunBe5sKvU9wrQVYQRTKcBwubdBmQAcmQbxQERpcSQ2qG7",
  "key13": "2cSawwfx7anSp5QgWnnaHbL1yLNahQj9irg55gVJh47dUEj16BjryW5q7BChmU7oGP8dEjKHd194pX5JZoLGZ64u",
  "key14": "3J5QuAa7YAFLEmEpNXTAsepf1bhzitgATE4WM7dQ4uBrB1euzJybY8sfe1CRUh3zHaXp4ZhyqaooNur6CirbhJhd",
  "key15": "5SYt8TfaAbr4QRKbXcDzz9XcMLyCEtAXea9fRJaB64WJ7qgjVZmQ7EA3Xm3XX6fPwpGSKk9hjsVLHSmELhQn7fG4",
  "key16": "5chjy7D5eMvTbdX7wYtUonfE39eAYTbzQyY4E6t6ja1QHNkqqFWaLKtUT96dZQfZ9MMmqzMchyNavxd7d7qusTwu",
  "key17": "4TNZV8AcQC4KFKVcCpqghQ8yaA6Be7GY7SZ9GPaLzNkLLjWq37rZGgL7ZknPbGnsUu1GxcodccuPaX7YDT8mL9o",
  "key18": "3gpi5JpRMJFBrDsipPnu96BZcUPMLJNSpCb87B4AG7LDqybZWaLaEJhfkm3h72sT4LfZqGw3hSZihUJST26ogp1t",
  "key19": "5eFkstQiNNXDvqrjFFmFFyHvrNwZwyTLXu41h7VnHDUKKTE72zmM8kEd8XAUohEGqto24EeEho6pwxrpLyT6F87d",
  "key20": "23StbxrPQeJoRjpa31aLU3C2KQHyfu7PRF6gp25QJe3SkwZRYVVShbJoxsjJwowhcTjgDdpBRemerb8vjM9Yikvf",
  "key21": "Vvs6tEGZRcLKjA3oQanj4g45cdxXGdyEiXeVRkiF38tTYHEprFeZHVD2B6BwvMj7QEupYJnNRKawqqjcHGkJEU3",
  "key22": "y67ok3dV9WqJxA7FjzNf2BwYKYhUBi3SdCxtE3DJYibCabyWZ4RwVw33h8YLvwGCFBUAfSfK94UCjtjvfGpwwX1",
  "key23": "gPXo7aiwgMmTE2QQ8aX6VLTncWw5ivfy9z2ZVf8GmgKubCibMCEjNb8LtJBUmhkHHm4q3TzFvwpLXtPw237yNkL",
  "key24": "5T9iVjT24Lw4zu79y2T5HpSXiA4HboiEMdvuesQH8MZdFLUbBZ4PKerp4Bfc47J8MvyFFrk95M73g3GFf5NzixfD",
  "key25": "36ogtA7uZdXjNZpf8FmLbWJ1t3hyEJNyRh8cCzCiGe8EMvum2UB96dUxMV49b81pgM4CYaAsx7dTeUHvTWms6fG2"
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
