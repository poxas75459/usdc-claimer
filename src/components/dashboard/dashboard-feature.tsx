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
    "3oAgYq6tp9WtfHBAdV8Y2pUc9CiMqM7mDhrRLy7QHwvKqLmRxYHrxhwY8492cSE1tUuYAd4GU25GgLecvQYEJUUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZiwQp8DNkuTrSbPkracH7KUqkv7f23whC1WP58YpX3qTNYG96gVeq4GBM6JoHzdV7p5KnBqzgSb7xYVAPve2jcW",
  "key1": "37RyeKSWKHPcEg7WnfxpZi243imsHG9Cgz8F7tjPw9jMy3J3SsPhw7f7ZrzQddQtnksttws9gHJZjFbwT4qacSZJ",
  "key2": "4drPrVnRmCoDtQbCaQt3jbU97AHzYXg4BFWET7zodh9KCzTpQT44XoWEDrKAotyCKCJwcncvJcczvAFrwNRsw7Dy",
  "key3": "226aE1jcyMMP1yqoQgkgKKtt6HdM2wGzLAzZRDtgZAMf8BZutqaqTM6kXLGmJcwomP6kuHaGk4cUgLoyZFrdC1wJ",
  "key4": "2V7tVGmH8RZZimpjHJxGG175WiVBGmqSHWPBtA2iLQzJ2pTkCYtb1HkRABqfeckuPqoE6idzfnCxhj7zXa6sDNVQ",
  "key5": "5yRM2k7f8ppcDnDqHy6dmSGdGKnTUTEP8R8gUvEWd4BVT2dQrpnin2cm8gyZ6kTquk9T992ZEDDdxowXFSheZkDr",
  "key6": "31yodqpxhYGJaTnim3mYgns6RWxx7hCHhM2CoudZbCAzPpcrVtYjyE5YfEnefnhvCrLfiDu281ZKBWWnwQHR5ffw",
  "key7": "4dQkSzUWyNCoYuHJcqdoFQPGQ7u2hoUMxZUStrhtSGdwvHEMXmeczsHG7sacKMzL8ZAfiLdUNrqi7rAHafNTKa38",
  "key8": "4n1Wsxurmas4wYYNj5vsusPvr5uzcRuA8V1SVDEekM3qFoN9vG9CoSkuQgFuFDr4b1epnXAbb4vTcyq4U4ykZtTV",
  "key9": "2n3qis3oPEFv69bcm4G7jbr6r4KbkcoYK8xetgKLhaGRcWtkDU8uaYLa7Hhtx1ZBrbNaq4qUmTiCB4HqxSMDZQMT",
  "key10": "48SjKs7QvcEaEhrCCfqEh3eQeqUcEFvMQDVMZq6hrta7uNxkaWVmtTvfKdCpGcYPQMpUxzEgcSVr1ZST6gzFj9do",
  "key11": "3jvaBGa2XVCGGAq6VrU1K53Y62xC2jGgXkHVfL3Kjj8oUXRYCYENi6eaWRxkSbzcLqAd3kdcDk5vWURXSytX1Pb",
  "key12": "3P6JtnDj5WsjKnTFNvmXGquVUGmZ1RP3nDfBzBdqJvDJ4zn1LAyowhQLy77EpzDWTerCzJiPP4ETpcQ9W5Cz5Rkg",
  "key13": "3Rnex7KWneqd6284iMfkCQcJ3Cc3bCUG4otJUwnVppaweGxKwbapYptd6yZfH4Z7sZc5WrASw1M6AEJD8bUSVdSQ",
  "key14": "5xXobEQnf7FDce5oosnqvR5Zr5rEeQ8C9FeVj1NnMm9CEzCN6eFZkmaYRc8V3VDKFKkM425cTnaHPwFS9aD5DfS5",
  "key15": "3vhggUCLQSoa5vDtnX84cwrHE8W25ju6Xvm7B1h9dvYpFppEudeCaL14hp4tgryptknAkybEwqD7aPVFqpTwBKtv",
  "key16": "53GTjmXQ87GpKRsuknMwKgAMHTnFBdCAgqm4Zgddu9VMTD4Hd3qHrvceuyg1CLm7rrDuj4KxcyGbUVYCmXxuU2py",
  "key17": "JMwD2zSGsVvVZjd5PiHoVSoHoyXFC42jufM3wK5pjMjHUu7o4956mXv7sVLgQaPUrmBu2vyH4YgTWttHFxVZepK",
  "key18": "5PvDsDznpM9CH32idvaWsrwoawTMR8kmST8kXgfHHD6AEwdierpzg7tp7w8xtQSGa2BnJgDfVPHgBdBJiBF16aZw",
  "key19": "r1sQnKDt6tw138dJCsFh72zdb8dhTWYKAU6oAkji4NAsZL24aH6gCBhXctM6Z5r69oV92GhLMgWgZmQHZ1ebrLJ",
  "key20": "2kccWkr1dm696bAXdKgtnzoL6gTFAXkQLB93PjhKD4vBpsTYiVLKNKGNMyMwrHkBCSJjJ3VJyNNyD5HKutGNkt3J",
  "key21": "47RJ96CRpzkWzSHrJopqEDJtLANwxZUtDyYVbSmZg2RrC6ecqyV7XKpcxPTcdJaKo332GjYp5ijeUEvxGf5aeLwu",
  "key22": "uxw8GbrwRj9vkNsfHLQ8oEmHzmBGWp2vMXy4G6UaGuwMgw7PgeAtLCJJck2suAj6H4H7qUtU7GiKaDtvQAtaZfv",
  "key23": "5L9EiTGNY5FNcwHKjuiHUzNCymYrQ7ChuHpcTxbedYEJisfCanqaK4K9ahTg92a1EcP4QBbvfP1krQ48gHUgDX3P",
  "key24": "5AFjNui3T735kUCADF9ZZpxaVhtbF7xuVjhVY6CbRc37k2ABdXdRu9t6NTLUv9A1CettbaXYCsnZv4iQnW4Vc7J7",
  "key25": "3wNgFTe3oThKpbe6qTyZkbk6PbzHuED2xJpuCK7zVDVd8GZUe4qJmUnC3Ys17wuD4nFRDKkZTsED8ASCe3F9NqNm",
  "key26": "3qvuHoj6kqhsq257qGKjM12ybNHnzybi1kWvYdU6qwJmsBYomgfXgRLZPyat9BGG4goCqMznMbe8vXxx4UoSZS2L",
  "key27": "4xn1iivDCuyaQkKJVCMXoDxDSysn2VGPxHmWp97rfVJxgDxb4RQ2FCycxXNtLjYuYEhLbGhGB3DrKtZLiz9wckTT",
  "key28": "4QwqgrN29L6LekqfYFX1xcpqAqrMuBFittmR2zC3XHcKcBJQh5QaXJCdcKMXC5FkywaGtGz9QHdm55MuXBeQBjwU",
  "key29": "qUnCt33yUMURHJNhTkryosKfeYjDD8Fa98wS6afoDbLVUYNS6jEFRco24ySixsFAbFrKQhtu91gdmEVMnYHLREu",
  "key30": "4kbxRqSuQVCTgksYasoKC39ZXpDmvZWiW5tqyBfnr6H427ggAgoQa7cX3QgZq81J8xcdbpD2aZ8FSC8JMYnDNMmA",
  "key31": "i4YBMLf2aso9WNdu2pmd5YLmeDrjrd6JRT3iuzquTLVktxjwkyiEbGjbx74q9ziQpM4DnJT7ESyHQjEeK7PgKuT",
  "key32": "5AT6MTaxdfcu5TTh3N8i8XA3ZRTtMaXSNutGeqsgMBdBqgVFFmWEez7R2ujsNuNLmRueNBhMYh4rY5ftXZXtpEpM",
  "key33": "4GaJ1pz382bAcT4hPe9RucQ9TWNzRAz9WYVGJHKkYXo5ukCZX1Xu2FD2EjMSpULkefKynjYBaRnk8PGzqXWTzfec",
  "key34": "57qeXkL5e1mPytKfVthExvWuhJcpZYLa9D9mMfF27MMnfPddri7XUytbN4YtcLQu9N3CJ5drTrATDSad9sEVqPPf",
  "key35": "35U2eegbWq6t1vJ4kGh9RQj7eXT8c4NWMRGVqLQ66h7bQgEVpJ28WB9QBB2K9xyMuUvbHdCtasYQCXh1b3aNvPcw",
  "key36": "tviadbNTrk4m77DRoRmnHpkkTguLMLq9on5XU729pBptf8GDynUEYStE3DXPsBoJVLjJqqx2FHjFPbPyNB5RNxn"
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
