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
    "41cG658pGmFaerrkQSumHDWDJcdCyyMZmtSktvATAZauAs4eXRDYW2VaZ7c81KGGQGEW4smUs7ahs7HsELEdD5Me"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5w8zRCc9VjsA4kbAySU81eEznyQkYbQxfsRBer7BTTRRZcHpArPqeocpAbjHVWuSg8y3FpwdHKeLGQ957oQCp711",
  "key1": "4tJTrmGfihckFsg9Sh4iK3qpFxNZvqDnhEWDpuJEcQh3YdakrSfDjWWYxH6XrQDkV4AKoqvGiwKnsjvS6BLWKNkn",
  "key2": "2H92VGtT3FjsyB26xao5cBARpjsdNDNobCdWp1GtFxMpAJzRk6ijsmhoyLvrY2nmcB8ifzgRnLjSBeyMmJLPx7ZV",
  "key3": "3VrdXK8tHtAkaUgB7Dxn6msiG2cK7ZW5Lhft2kf5wAbTgiiXiVq3jGMRkdq2Q9oEpXSzEhr9gQhkKiUA7wMaY3MM",
  "key4": "bMvxcM3kpabZPw9vwhMoSttxNKpap8TMbYGsN6tdRk11PB9RoP3grULJWVdLMCH52XWifAYqv3nDZy1W8S3rZvr",
  "key5": "nRWHDCeRYTy4p1JUqgAD7EPNzvTCYpXkGV83APgmrWcLHyp2ZwKPGDUoywUxtwDuDEaonLMtZwXWZsF1GajA9QK",
  "key6": "5UyneSq4e7qVvUDGf8oaqG9c6sDPxnvheAzRthGtvZTb8NAhhA7pUqikHMGGpsrDEfTY2dj26mNCAazVimqrYArv",
  "key7": "5NzP3KX26tPfmtdaD5yEQCyu4BXxRg1BMgsWaFJfWZejSf8bV8zqs7Zkwr3Fe7VqCpCbmdACfVABEg6vduwdmkfW",
  "key8": "UFXsyW6XZAM7PN4UiJXYyyMGvyv96QYj7jh2WLH5MEgm1aEZjz1ieTzEaboaWwitJXSNkdKy1kuYNA6ZdFK2sC9",
  "key9": "3sgMGBYqhBBPAvuH6vG3ubLW6YUhh6TWLqKbsTa5J9kfPDAJya7FHLmma9jnzx2DtrJJ6Wqk71PgHVxxW9bEafUx",
  "key10": "MRiUytdZG3x6TjXsyRZLWvEbCEXQSTpwr2frsTcbhzUVVMWnXrGYrXCRq8yWmAtPa1mWqbsko87eH9TQ1rKFp6V",
  "key11": "KYR1CPDWN8czof78N2pAvdTWgiJr6BkTH5VWoyLSDeZCWrf6Ld9rpMJTaykN2RmfwByC9AyKomwbKXu3qTqzRBn",
  "key12": "Z9CN7CwEMGMZkN3tJcdTJE4tCJnPphtpp7uiDiLmBWDozEa1xzHwPCchhRpVpwwNBigpNSTTVir1xZ9gokr9LP7",
  "key13": "2MwL5RuLfgtgxCVA6aDHZ7bVsTmC8ZyPdWqtHpDG7XDTZ7f5LVRuYwo9LRT9ftnE5ow178JvEmYWgM8TES3SZgVo",
  "key14": "3y8p3jfrudn8QCMFmovHAhJbCxKpfqPKfAwmHgQjZpp8XdWrSJqBFfFAe61uk2yHCzfgHwuWW5aChms3Gd4CSZtN",
  "key15": "y4RgvTSn1D7sfLUH9dYxTkKX6Ev4y95mja4pdFzmrBwv5xQ7BG968WHJibaJV2To55j1TaKn3xkA7FYMgbmdGQ1",
  "key16": "5auFdyAKYzRPtqAEEW5Zt3JiKhvDzQhDYBrEg6U3o15vTvK7JCoa7J7dZ891aVTV1VhbGAVz3L6XwVNJKVL6xFnn",
  "key17": "5Jz8ikfHxSGeAmvCEv9AGuFGLfDjL6vGPZ35SEFJW8vfDxZ7U9iffcBeLNu8wpf62FPnaB9V8KE3wSN2sCvyMWCi",
  "key18": "5n5dnjT7vL7U9T66xdDVG7fqTwFBCmeNoVGwdBx7GUdqinsZ3Y1XRx43XYPTkCsFQweVGVGQguBvZk49Khf2MCMm",
  "key19": "3rWdtEpRHqGzbDMCgjBoaTqGzKEFpgcyVxAR96S2ymQWW86TqRf3GhC9dnHyRK2WsL5iSrM539bn8PGnyfr3ALLp",
  "key20": "3U8gDVXSdt8TSBLMS7ZTi2rHM7zFcbrP5NTM1prLfsepXjFksL8nQS6Y8hwSjqDLMbAwzgYU6ZniQHfbDGyrkhnk",
  "key21": "4yEy3C2mfoojkN3BqsBJaT4mWvV4x4augp88Np8rKDHM86Lx3a6sE11cLfVftZEKozHQuLpYJrnVet2hQJxpmQeY",
  "key22": "51nfKS8P5Yt91fMEE5xx7BUCfBX1zjkF3zykg7BCfbG1wmQMZStJHfXajEgxyktj3sz9uMGCFqEVgvsiAZ1Hoapi",
  "key23": "48TVJYnXWZcgmishXcfwGr64QuYADvYHYexLRyPH16drN1Bs94mh1MVwfbFpZtfotks1D8wyX1CCtiNKgFCLzV2i",
  "key24": "2zLfoM38m69o1jSx2aDmVfzJMkYHb1YZj9wPrDdEWffG2R1WTYa9HJxrZq3JahGgvc6a8FDfupAsRJuc6tjVuX6",
  "key25": "3mCg84jtggRAqTVjKL2AYtjp9uQrFwiRTjNW7SmdMHX1kyfi8TRy8ZGEMJchJJMazugtPvVNPiMf4feLEd736fDq"
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
