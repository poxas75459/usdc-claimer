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
    "5q3NdqJZcZi3FTHatmmNnALV7aMAHUVoW5Fko18XXGgFQ4hQpxzEGjW6Sm1DHHXdEq8saSStNjcxVY4nk2k5DqgN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LN2sjGinAxcj66HydjnTfzFmMYUXUZSBiHBtEDv7R9wNuFdak16yEBd9RRe1X8FZCtoHubmha6Hi5ruaFn3KSFq",
  "key1": "KvipNUd1DLQjiifT9TefW8DsY9hnd1yK9KzEzhW5ajezzYQecuW4DkAqFyp4e2K38PCNuMpKj6djMEoj3x1GAeE",
  "key2": "3xhkpzvkGggoLTZDtov3eNmmDQ8FVjR9dNtVrH2EbjT6H1xnwatk5gQMAodG3Z6ZiifWaYfTLxsxLavXzmUvF1Lk",
  "key3": "ze21FedWUzZ8EBJagoey6cQRYgnfsmXnkLshif3Br3EenPrZDZA8Y66s6JQNknsHgsBRhjCFQ5kvY7f61gLwx4U",
  "key4": "67tg4Yr5T73pyWMaCCVdjez9hYY3c68v1ac2E9P4Znqj5sDd6vLXwXBUNskPHBH7nBvEDMLRcoJaxdke2HoBqao",
  "key5": "bj8VQ4bb5bbuCJDFW9B2cYgSdHa9FACtfAv87jKwZCjtqrqvx8sGqGjerx6teSUAgJQUBG51nbqVJCHo5MjNDoB",
  "key6": "ycTNEQxakawWaTPB8X7w2MTWjVk6mUKVA15sJywsdbnm6FppWE1rPXVCYEf9ZjwqpusT1NdDDFi3zt4JGcAXYSU",
  "key7": "7wZ3ARTMUXcHTzTCEAYopJKvK5tTTuu91tBGsZGqAuncMECWC7ECU5ZiGpGErm4W4Adwr9epRXvdXPuhUt7CXTW",
  "key8": "38ZtpdaCQxjv4qRbrgWgMqMA8Nf65jS83594zAvXBAenuMCcsfs4dxergeKZP5wdAyNtUBRTrFxpNDunBYrQEuJt",
  "key9": "4WuU4WiUwciJtYP1tYKxwcrNDRs6FTt8pZmeeN5vKhfo4Vk4Ly9KZQJ9dRad4ZnVW9Tc5XJfvMycauRovJREr4Ji",
  "key10": "4zvqc7eL9dJVSA4VnYAr3Z5BMtLsLGy2MpxisNKCpFzAUQ7ieK4bUxRVgsyJJgatBhHqVMot7Bp1us8TYYNFmJwT",
  "key11": "37niUFLeQ9BC7aRPpS1HmdRa8aYYARvWSXV83UWcUTUG8bQ3rrZmdYW7QroqVpvBVm7CCzFjAa3GwPAjKztNzaFW",
  "key12": "5u5T86z8oMRZJ1LSrnwkHKFXtP8ah9jNXuWojs6j8VhGkKQZnHaasQi1h8d1soWtKEMs8Qn1ft5Zwa1Fpe5Rcthz",
  "key13": "3ZNU5awRhmTETT7bYBv9fd1xEhLVdW5aG6PVBKTn7uLPSCkY32rrA1iWFRGbdJJmmJ21mg26bpebo8nr437hFQvP",
  "key14": "3cDV1TLqeFPhejBY9foBC2dbnp1YDtnadMiVL1yeX6mL8ahZAwNFKiJAtE94R9ztThFcXVV6UHdrWPz5Q7e1isnW",
  "key15": "4gpmGx3jW1vEWPG95kJhcv1o35h8WFymrZp5YHvhTvsYTKQHiKyqsZryLZrigrSr9PbRcPewj2JuDHWrhTq9eciz",
  "key16": "Q1ypiSLkXvedg3VijMwFkGnLsdRUbYSiBU7uT5ANpSn7g3nAaK5LWUrxSp2xNLSgdz3z9pje7NYCaS8aUDy34ip",
  "key17": "4Wd9UJ69cBoGBhzsbUzKEguh9aNJAJgpRA1aXmzXHfExGdWVwjZWEVVFrYMhP5tRxYpmmWwrJjiRJxBmP1gb2ang",
  "key18": "5FziRhzoAxFj9frAd1Eu6ryAYNciLsoy8X49T5Jdmr9JEZWbPphsc7TboJ45Hkfr9fBqQq3rmA6daSj757yDU8GL",
  "key19": "3Kxn5Rb1Ycjc1TYMAsVXo5XME76XZbeWvu8xUDVwVhCoATZiJjDDUzEB3EZ7euuogJ2x9SB7CJxFN9PhCyCUSQDi",
  "key20": "4AdyZHriTgQJq4dvqwNgD7ozwEK1V5A2Qw7nAkRK9qEURsC5A4gah5XGj1MeiUjdYxcCQmD9657Ca7UKghJy5tMk",
  "key21": "2voGyTo8qhcaDudD2PLeUaz9tPjSxJkxi3ZiHoUgSa8Ea5fzXob2CiQrrA5k5CqWRSM9ntHwh4Aynku3mmuxtGgP",
  "key22": "GXk478L48YcGNGmaj47trkcgPjiC7a9ApyRg7tCwfjqMFAXXEJUJHSSR6hX9z1pYci4xj7RMdu1GUPywVC4ToMu",
  "key23": "5qjC2TZzEKAKCxi56zAfU7Hh4q874vVLUJ7qt2k5JTx4dfdBpSWzrNq2rsQC3kNVwXdK3Ko2cwMcSUH237Gdm7uR",
  "key24": "KpBW4SZLCo9X5uKtiZHJrNrwnXAbvSqUywTm8nv6CcH7ftnDCbyX5ofd68sgofMKXtHzD9xx14LBGCNwZgQootb",
  "key25": "2WixrCyV2ZP2yx6GpdriVYBxeVy2UTj653NSicfD8sLEEAwCAXcBeS12we2iGWwrCC3B6TedNAwMDuZztnKiWjXb",
  "key26": "3uzkJyKE98xJBj8yt68fFqzswmn2JPQAa3qBrwXsqjzvvFjffuZGrZvUr27WFGiJ1asnhGxcJE8U7xCSrg38AZop",
  "key27": "3jCmW98eWw1aB8p9m1LKMq7rw9Esi2KsjbLowEyxaJ8gvruuUxXXg8rRWv2FEeqaMF6iLVdERGCYvdUExSqesafm"
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
