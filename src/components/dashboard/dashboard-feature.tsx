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
    "3MXodxtchYfk5fhen5CrZBE7E6MpaA6e8czkdVSJyQyBBtKiaBi3nFWMXszDj9XLGjcnqwwFuzpVPq5cKuXghs4h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LHAT62tGQVSYob2rFSsTsSDMQfgXa1ZPayotpzn9HbpTF1tgMBywaGyFBKFgzDBUE8ngjY8ftwZkgcB59aft2CK",
  "key1": "3sY9HFJP1wj4zcwE7EKHxJU3fFWHtwXrMa5iA2rnnApkJoP2Xpo5mSovEy1rPP1rTPet6Sdy7c7RwwTbVP7bxEx9",
  "key2": "mVvcnqnbZPHbKparQp1tFucBsajMGgrQVmUsesrZZpPNJG66cupWaabGkztQTB4bVMN5R4VW5d4Z5WpJHyFRvqF",
  "key3": "xCdShDzP1Dk8JBc6pyXxCbSm9ugnCXtJCzpC1yQR8hdrtoqoKoPnZnXnFEumyA3LvWT8TveXt97Qmy2YRK8wahJ",
  "key4": "3JxPbTfephv3mJCejZQurxQ2sUeakhivVSEoqSzYSfaRXQWYCKRuxdvuFZdgJQ1LgL5QwKA8eZ3vEsTo15Bzxxqw",
  "key5": "4wtFqVt23juhdWri3ettedk147HdK3SMRQWvwFtTcoWwZSgff4Rv79151JM4acn4yxyGjFsXcL1actE6KBnqrrxh",
  "key6": "24MHTw6M8YKbaMGrkzDYUBtkC1tk4dshttpEbFDm8UQJJmQepFSm7egHwP3Hu2XRs1cs5RJKdo9Z2atxSZsBxWcX",
  "key7": "4XTVP56qYi6jak7PmDjBeGcZjdf3pV66qbhkSBtgCXWWtJrCyNtsW7e28KuBE5niFt6sDzrynQ7qHy1VmzffDCZV",
  "key8": "5KLZ1gp4F8WeCcNJBDnby7uT6Re1V4P3hgnbWcZnDUGMVkAjQWhK86ikiE3Yjd9odhe5aTVABMaTn7Xz56yKWDPj",
  "key9": "2Y2BUCCWVJGz9fWAHGF9DosP87VHVpMEN9N4mKuLkfs5Sg915hxWtUcTwB3wRo3nKY3WDGNmZcgXWVczPtw9QeGN",
  "key10": "6XVzLAdGWcBbFhLrPBu45dTBNjtGeoKU3JtN1bdFV2XFWmrujojPqz9dzBzrpP52KwrhBmKLa2KcFFAFaKZek5r",
  "key11": "2xfiMoGhNWai7KB7awzRpeQyXgFNKZRmownDgBeyuDxksrj7tkC6EG6dBJ94BrQu1nc3ABFqs2gJE8YaMoPvdo3Y",
  "key12": "2STt1D2dxybLxkrkvjo3Q1UYbUCfV4KNAaPEppyJd9FHyhmkNFTUFQ8tymadfiWfzjrEjxANqmV9t88c75LEbUFq",
  "key13": "4s7VvkWoGjA2Ze3CyP2eaXM4uaXxASRqxxCrTb3U4AXbotWWXHtGZVY3eCWo9fPmsrVe45h8fKKcCyCtHKNPTkNe",
  "key14": "5gPVVj9qL8cpkmwHzzr55ye8wv4WoMwzEMoBA9dRsaBb9ppG7LHtad4oe4iLeJCHEhTUiGnRoiUDikBxs5LUU7uY",
  "key15": "2TGeY9ztTrs43sJZ7TgJgEvWZrdFFhJB13s4Mch5FfK7NR2jDis1W25UBrB58nnHx6nrv3eZ5Vgnv2acnZKwYEHB",
  "key16": "41kAD98hiFuR8zqVZaTV9ixa1CQAHH98u32AojorepqAUeXoKc2WTmLEcgcXKUfuEzHAriPoz78TLZJd9cMqMw4U",
  "key17": "3Nm4w4YBsDrfcZ34rJn6oht2LKbUtJ9KpCxXzNmBGzJ9VQjSHAvVdEoKYomVxGSeuBtMo95wxifHgXyx1J74RKk2",
  "key18": "4Q38s9XyXCAoAqAUNK3gPnDAPvUYF1fuKpeZD6eBjSwKFaUySwqYYFaiTFqPA6jJSgrCK6PtE8BEXswiqyVSwAjY",
  "key19": "WmLTWDP4gHt2C3QwGn1WwQFq2fWZ6QP2SzPMcqVtHuDcScCBheF9skCYtF4vBaZauh2mQC4mPCN7hVZ43w8MiyM",
  "key20": "4cRuwej6dgJCMGf7eThEsPL2zDzKw36rJygejKKtbt6a67R7q1oZBgc1EVEzdbmbp6BNc7VxyJecbG3VY8BX6SSV",
  "key21": "2Jsa8rYfjQjSr87DVhd9voVPgKZTqMzhKgk4UA61QgCu3YZh6CkQoLDN3jFLa4j9gQb3MRUHeG2kgefuq3pw3BKx",
  "key22": "5SSs9fTmyPS4gKz66c1eerC3SEVZH6HEKUnyRG7tK5E4RgU7iE9BhpuKNxy1mQ1EJc3DMVHjm6ZheZ9VdJPcQrFu",
  "key23": "3UDWSqd17GG9t99UAkUtaQVQCC54u8R9Gmwkz7BZnsuQxWRoVxm69WLcC8YTwzR8Rw7zN5wJy2KQn2LivS2qHkJA",
  "key24": "3bMtTwYmAHsA2UWwgxggCrKYcLEcbwNnFBHyJ7unMs55CMgFWfN4FBUSaiAakHvuhSWCVj3SSYHwqmsaYJbHnZcq",
  "key25": "5ubNFAuPEUh48Bsa63SnguvVhcCFqYLnLarjRQX7w2475yfm9fGmin5kTtTUVKccvC2tdDX71Tp3acNPJb8FQ3ZV",
  "key26": "2dsAFUJCDpYFWebYEc5LT2E4R4CXnWdoYN4dWZyq1C9rvs2RJb5X35ZqfZwtuyhAQWFY4D78578tfS9rcXAhYLBg",
  "key27": "4K1LAnapSDuxogUkYf6v9M8KWJhSNdZMP4vgJ23x8AWYxN6HWyKyPy1hUCno8KzfLzhyduThnXb5XvSAQT5RN4VG",
  "key28": "qZxY7NeaSt2tUYVjnnTaD5oKYrRGLhvEG9R7RssNZH5KWFsjfwYBfje1XAp37LqjTSqRMDBswFRHJSwKQ89SYnn"
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
