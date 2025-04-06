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
    "5M6kpfVy3zsYXHZwirii2uJd1SAqGCVbgQSptsEyv1FMUkWYGmQeg35VBLStKtWMptfHK6XYSnRzeq3nS4HvEgRY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "qjTjydfvg4BGq1ubVJk9VhMTKpNNzPXmRMZoBTQXwmQzYFcmZ5WvBExnZCh5cjpr2kUJtUZsHAANhC3WGE2zwG3",
  "key1": "2LqcfVwbV4VpskwyQXK6afb6eBQvYqGycMsfoEpnYGQKGGhrFCP8mi3hy88NMmaLGznaFjhJBNDRnSAujqBxmjpX",
  "key2": "2P2VekTTo7EAQyGj8yhbqBXuyyhCL9Dp16WpU5wFavjTjfdJ4qQDoqbxL9M7nfYcZCuunkPN4aTrvo9mjvFtQANh",
  "key3": "3QfvD5ugtqjtMMY4F1vJnq7NR3mte9LL27mwHtiU2qYqYohfwbo4HTAP7jBWX2tYWLmkspdVnEDPnbqVr72RZr7r",
  "key4": "4pQdzJboQZgRVywwUA7yyBS8vhuWXKFVbQBR4YiGfg38D9Ya3rbMiBqfDUWHXXhkXk6rkkLsZ5FTb1A8GuVkHLzw",
  "key5": "MpgjXGNnHx88W3JQpgaPzGJMq9K41DfTQb8jJw39dE7mVeU9WWFvRScRbDEamZ7Sf1kjDVJCVPkcLKAXHuHZDBq",
  "key6": "595VqjnCAQQDiLtkXT8q4bvBkyw4uZVwMrq3Exn8xjPFXmL34TpvUDQNw7KLfV9r8hKN3GZGyvcgN9YvGj3e84GT",
  "key7": "EnoRbj7oo6djdVULqftz2rkstx93krJBH4TEWekVtQwVDrgvP4c8fM58K89YDDcKA2xLcpqLsSBc6oZXbR6PATE",
  "key8": "4gLQ1LZsSRrKUEw7Um6zSy3CBn47k7MFabzy6oim9nZn9FoHp7mRK9fA59WgHQ4LrNzngpoCZUVPX1XZFMVjvoh3",
  "key9": "3qXD8GC8sDwxU5AxVynyZwwPS2GwTmwYgtB9CDx4Gs3APqyiaVN636z3hExcRe2zJwRgucHq3UjbqZzfmRwnDfiV",
  "key10": "3qjdxw1eWCetgBtpjxKSqTWBcwRvezm8guxvdi52kPmhZZFG5zAwP4tJ535SZcRwcqVMHcGLapcn3mB2v8MhxPcu",
  "key11": "63JwCBG5Ft6pcSByaSQU9iy8EZarUZnxaLHtRXJ18iE7K9kRcz8crVD94vgqt5sQo9uJM73MEH24s4SrZsmCcmzN",
  "key12": "5yumsayAqB5vEmTCW9PVBsNQB1esqynNbfwqpyqo4Mb3P6WDiZMn3N3ZVauDckxMbe83XvByUpX5UMc335AvjMvd",
  "key13": "3cvLhxE8RKKvuk72txAnVeShsHyofeY3RHkPYNVyvHJKMdZLdM5FPYcFGivhyrqBMKYL4DdKs13k4JRuagdLYJH4",
  "key14": "2sUkVDFAShMAi5joZifPEuBdCGQYnpra9Gz8ND6QAu7HSZFCnkaevyrGa17mkgMw3WpNThAFWk8Ymt6GuJwvxGk4",
  "key15": "5c437Yy6WChfhPf8PCpjQs4igAmw63B1TdeodgZtk4MK2GBMVTzd7NfAq9muc2ztJtHys9v3z6CMtaei1MCTYwGW",
  "key16": "2d8ZAcVpx5i6fJqSnPmshqEs8zqdqPqPdS5z7VZT8WgdNkQwYnmUu7CA92aVUGUBq9hVgHCAuv9Ecw9EmzkAA6z7",
  "key17": "65rMty9MGmja5PWP1HtMarkxVkXaZSkCtExh5bzpReemFDKhRV7yz6ULcRyqrMY28YXDdrXANuXqzVVU8FwZKVuD",
  "key18": "mFdrXdK2SNFQVwZK2QmZXk6CxXUt2vkLgqUoM77qSZsDsoyFtdLve1ashF3ozE4fPW83Q8k5sC7BYcPHg3e4wbr",
  "key19": "MuKVJeg46XJgS8xjkcyCqbVUB12Piv2vZy5FaU87P6Ux7zL7gF6vgXFT2iVnUBWtT7pmWBHKMyZFdbLwTL9fApr",
  "key20": "3qAjfSZd1QM9a7dyrqyxzYBK569RYujw9X1twMaMzuRsKrbqFcjettaazZtUk2pQp7MAGTN3KR68ZeNqibpTa1vx",
  "key21": "5z9iaGn9AeT29aevPziVgQYxeoN3JAJkGmLcRbzAnCWxrSi4t7Jdumw7jQPhToHuNWXuGDosWEHV6wfKPPcYdQ1r",
  "key22": "3xGzNRy3X9N6JVJGwduaHwJN9Qv9Y7zJqbZSYM3b7WSuikf7FtjCztPqZ5ysWWsm7ozpkPhuFvEvx1u6mgwCqLhV",
  "key23": "36nkh3LAzo9TDQpyra5XqVw6wVvaAALYXBVNiVbcdu1eDXvQhNtrxE3s4DXk6X5n2UW7z3A8WzaWHPYbHSMhzNCd",
  "key24": "3pub2hZzNnufKQe7XJWFZ7T8qGCuzENaJamnMBsFhYcgxB4wGpLGZgW1BESxNc2jtHNfERPoDNzEzg4hwbY1kc4P",
  "key25": "2C4cR4XLhb8W59fv4PeN1iPKeTExuv4VL6yhooRvSExi7cxaHw7anqjfARXFGaQ3hGD9oi1hJBYcF63amwnDK7f4"
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
