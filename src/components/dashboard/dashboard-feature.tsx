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
    "5aQvWVijTcr7gzsUMQ5JJETBXyFMFWqG5xdWsdUxGKMtdoVGCdoAJSKiWGe4R9ZKzEvNfKMRJh7JFYv5arLYTXJ9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "E5drBzWvwXmL7mbGTdPGwy6M2F1mHKcVNd4Q5MiKvwETh7cVoyFLEPuwFqg9pdXeg6QqCdi22TEVYwH5PrB6whk",
  "key1": "RbAPHhjT5C8qwU77VvSwzoz67YdE6KgMPj9s5p3ADep9yz17MPehqF1EuJ8LTchwMiDkS8e9S84uDGxvCmbdCwT",
  "key2": "4VVGMFt4pL2vYJjVUdphHNFEizRUzaEwH37hWBpbLa3dUe1PcxSb49VfHLrKZcb6hky5FE5GvJEzxDWiY8daXjZH",
  "key3": "4w9uueGLTLeTqQgZNuPGhyGpxdiePNtnLyemAbpEsHCgoaFYdMy7TZMijN6CCZTrvyvDvvwVbxRP5PKX61JDNgD6",
  "key4": "3GJEaqsu4skt6DKTkYDZRXqUywnrCRvoYP8BKVytnp8KWSfivuUAV1kZDsM7fMwVTV33zyG5nJhax8wgxp1icvWm",
  "key5": "3TdCdLTVfuL5gcvraBB3B4ZLVgebHBuwQBCwDmffS31T65rhiTvYhno5xTmN2Qi8UkViU6tH7c3AqmNZiuJJCUu6",
  "key6": "5c5jnUJ474Hea9zNrusibDXEbYbn2bHZV1UeFLKY2XNsfmuNWfAfkVBEzrNCfgvdFkRuJnovwu2iBRKnPjh1beeK",
  "key7": "2E6m16q7VC67qwrbgUfooaqi7bwFaQ9jtP1x9GP6mLqfVcwtGRpHWdFvLJbrdYbizxEgR87cJ3bP7HrnbgSzyJ6u",
  "key8": "2xXCTYbaXxwJ6cRPFS2AhEvwEcB82mPdhs7awEE6pv3TsNyjtnQpLzdNBWezqVduLBHeEoXMhWUPmwonFfPnKqwC",
  "key9": "3ouUdUoHjjhkunn46KatpCTNUWTnE4EkYo6jysHpVg1UtugEHVYRzfNkv27dEcWzmHaL7cegYhaMkGrzeoF2cphB",
  "key10": "5kXtatE6FkPakN6FhSjpxem8z3ACfTbe6GgnVGCzEidRX29bB5GZZsaaZiPy1er5KABWvotUJ1ACzkn3mGFuUXgb",
  "key11": "3AP8WyChtyNdQ1w6mQVNmXZefYWKVj9HtiMCwgZWYLn3vxPntosxgo7ztPcvo5HgYqi1BB11K8mTEgWYvXiqrqjC",
  "key12": "2HyVzzBBDgJ5RekrH2tV5Sf1h4oX4pqLucrSnvMtqnX2wojVMz37sHzCVo3Zt4c81ZtmzpKa7K3jVRXiCQSYcvVk",
  "key13": "3itXqMQCantjn8Ens5qJCjk6CKQZwnZhNzeJbBEEzjUyak2R98jKUELtpgqx7zx89pbTHNzkB1rtTwh83g1NpjhL",
  "key14": "4gexwNh4EdF8J2QU8rbevsXdgm186DZorXdkzoDz91VZpRUbWKyiKu6CvPgfiYHVf3r2LrxRgVduWxnNbiUTa25X",
  "key15": "5GnFBVTZNFw7qYxDzVv6HcEvKvsuhNEqZkamoE9KiSznoGh4ehEvX3tebWZyTDenBKfmufL8PtxiTiC63ooDGKp8",
  "key16": "4jedTXtwPzt6pNuyrGM1pwghH5eu7pbRwsBwsR2hYpp2W84Ah8UJXmzrEXPFca89cruQEjMAWq8EGRet3UB4RatF",
  "key17": "2QvnvFpyeQddzPS2d6LKuuNAkz5w9SEsK9WJ8oH1gwE4rxRgSKh9qhCH9aL36q8X8gXhJLZQYDgZZiCobwKYYtaw",
  "key18": "3uP4kKArdz88c5hGmY6iyzd7rbi4BByR6LfW5f4E5kXwZxYBQmSCmvLaMNJBw6pYWrxcbaHKsMo5GXa4YsMotiwL",
  "key19": "67f4oUBrSYAq8V7VTy4XewgyG4JmBxUz2xE4x7joiu7nyUT3rNm1WUPNUm7ibN1n5YYhXeo19eQKqx14kSsjtFt3",
  "key20": "2TVjHBgujfPazGUfb6UAPvT264RdWoD2oaPmRt4ycjidhsNEUCU2F8w8C3XnTFHXjtvQhrBvP4M1eEn4Rah6cS25",
  "key21": "5rjyf11JwwVnjSePkR2esZqFAb8Y7cB6XxxvgX7BjS6FeQfrWqCnxJfacUsZq9wLasquggnBH28topR1SRKXM1aG",
  "key22": "4zEHA6RxYmdaf8KrTdtQXYySAugkmz2FJ3AK4oE6hvh1XE9KYcrs8YMahSgYzFngeUtgvFB1KBxmjDYpfoMp246X",
  "key23": "3cwoPYV1LAUbYcBupb7Kz2A1MkkUijATiFdRx2wGCowei4oTbSy3LnXKCJAeRFTfi79QkSLJ6nRezqMaK9YtX2wR",
  "key24": "3aCLFmZBXboT3QBYVu5PeDp8ebUpQnJhcDdLNKTeKmeeQfC8E9tHwcEuR2yni2qJm5vQCyLeEtVbdYT3AnRdhAxa",
  "key25": "5NRy1TgtaT8X5rPM3ewmrbJhFg9J15P42Rqq5xxT276ZfGg3p1MzR1kKTAPPfbZFC2q7V6mbJJ5gHSbKUZy1gpSr",
  "key26": "5T5w9aBGaT4stNibRU2Gf3FnWaGgEpUcd4NMHa83YHLU97nHdGSL5UNgUpqsiVUA8DkN6sg3V7wN4LuonR2VQ779"
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
