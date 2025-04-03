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
    "4sm4vWsgShRnmTGWdqMvZbWuigdtUNYWD9Fu2cNuo4pf7yWqRw8iXV6UNsEdVdT1F8mkKwUzJg3XjJtY53Am4dZ7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "kt6Mshkxrn1mS5bdHTVMSDBkN4dNWxedEVhFMbX236LnvF9SuJoFRPatTYYDEUtGDa2dtnfdXzwkkvWqraWn9wu",
  "key1": "5TrFJQmhpBVMFmFNw5qywAA3pkUPAyH71CZjidZLUMzGByTctZbktWFkiW4kjWZSfJi4V6vn7pWSMbsyApwiRnxh",
  "key2": "5iHbFBGy5GB5pT7kxseNT5TCna9HYVDpZtgKPaEPsh1vSHtMWQhXsZAUoFngm9Shk1ckgPeJpwVUsv9gEbcF8x7T",
  "key3": "2s4AR9kcybJ5FS1pN7fVYBfpvhLZYzb7YEuHBnQqtERdUTUgNxYoVKHeMbDwQrp3bxsn9BAMeq31vtRuUgXjyxqP",
  "key4": "4M2M28F5GtCibpkwakHGLnx5eTa2kJdEtydbFFg8GPvmXencj7QJXDAuDuRf5KYESQpk7ZdVkuCPLgEt5sAKV6yB",
  "key5": "2KTzT4NKWLTRt9TZnNM5P9iusCkvB2cG5QzdCjF74sQUYkVi3F2k2a98ULVaZjfkKVJBnXo6u6mAfNWS6VbLeX9L",
  "key6": "59AdzUUXfjCQQezQxY3Mz3cL5gSiqtgpSWVDoNETvrqQyDMbvp6iiqMkdqSS7TLnsFevLJiM8wzfTxnkSSgUgkCj",
  "key7": "2zViyJj5mXGnABkTJ49GGUe7bTdootSvtc2NPaNCQBzPgXpZe9UxixkdJXG8gyiJUb3GJ59GFK1UiVdoLyDD28WH",
  "key8": "4gxBhUrJbduuEVW1XyrqohUUs7t1XQwWvuGbu89aPnPE35pH3avy4NpQ6pWgfh3rMfsVSVhQnFubSm6LhNPEGGr9",
  "key9": "kFJnBCJjZTRJaJaZ2yNgKfyv3oLNVhqbBicd6cBK2b8BkXDChWdRyGLJKnoiPgS6U5aFLQMTuWoGNx72dFcVPWk",
  "key10": "2RA5TW9dYngMhhMPykzttJNhid5VbyMvCHSjCcEf6sqw6h2uThTmox8mpcfboa35fzeP6fTJEpEEVCSgcxV5g3TR",
  "key11": "4wA1Se5Rdz565LgsSZQ3Z4TCLw2HdYcCuSyiqzdD9V7oqYVcapdwfpPckV9kzRzhadDbFPp7kV5ZLKkztgCfoEmn",
  "key12": "4ietjRgyrQoTW2ozB1qCcq82TRMH64pGSAtvc8UcAhFdZ3xmsqzL8WC5tiydSuZfYydvk5x69TbD63ifBmgYyiEx",
  "key13": "126tL2AtU2DhiwvTsFWDNdMH8eLkTpkD2sAFwkphfZEhDjnp23XnYMWKrH3zVPRjkyVBSNzkfMXP8RgCVMt6RNhC",
  "key14": "4kK63ZyZNg4t68a8muATwKUP4LsKFRrE4xPtQCpBMGnFPunDHu4nLBJQeTnZZfD6jhs6sYpqhaQ2X2UtEYLjNiR6",
  "key15": "5pod6eFV3dCEXPHpHahuHYq9BxBg9Gr3HcHvuf2fwjaRKmXgBYWjsTfx8BwsXd5LnxoDyFPKcyu1RicA35ZmTHzk",
  "key16": "2RxX6X1bK5rrbBMhYBNBcN6Q6X5N2mz4KEG5a9Sr7VT9te38RWefvSPyLVh7upQd62HmRECyKbYuiY8gpsg5qUQB",
  "key17": "7S3opPo13qS9ELtZNiHEcjR7URJ9N7hUMrWfrEt2riT1poxAct2r99VufSwFr1F94bieKAVMCvHnXFrhm8KxVt9",
  "key18": "2iJ3QzjAQyb1bNejDimVQn4V3uwCwQPqNWhTNkY3gDKgavjvjgXQJhg8xPFR9GLDqE6eCLXBd2CgNGwk1hdtf9Gv",
  "key19": "4bkfqzJWDSGNV9XbV7MP6HgrL6iN7n1uhFHLg5BDwDm149JmQ1uDyHEyuyWFQP65VtjN5maxeWbEiJtyQD3N1FgG",
  "key20": "32L1yu6HRnF1hAA4o5TKEwDn7XbToHkTKJXidZ1Ce7CiFanYsj9XxgtVFAyW5gmbg9AmzCbYZu5qWr2keWg3EUpc",
  "key21": "5yZM8YdCd5MeRKuraXWb6dQotC1nZCu9fbHH12ka6haNv96ZE9unnFmvtwwJNBYn18Twc53J7pWCLKXctNsiqKQR",
  "key22": "4Cg6ZQG19ySGJJENxscW2iQBwjTvAo4Rp3Uw1pRta3UJvhswuatXPBNm4haVtyrBM8jjGhn9ignvxe275WeYBF7U",
  "key23": "xDA71Ygb288zmhp9qvNR3btdH6JuHnkWmFtJSHGY22q2LkECp4Bea3B6kf5MctvaMc3bTppsuLnuxTutPPmXPnK",
  "key24": "g67r8osPTuQUTBJbFpXYCK2QnPDrMYTB7Zhmph21fyAaUYotWGuJBA7NMDoytqrNkAxmKtPgD74optP9nFKjTGu",
  "key25": "21T9fiNNNyz1Q785iD4bxmqCCVEtEMthfntjwUijPFdbQsdJG11AYVFFwA9k1o35mYqj7XPb1EkjZxmE5vt37S2D",
  "key26": "2QEWoihzv2qLtVmcaJwxfFcaH28gm84RphfyVrMKx2FD2HMZQkm1hjsBTiaWfDociL9L9CS2tH3rUH1A4uBWkq8H"
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
