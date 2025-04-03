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
    "5fSaFvbWihrybSeowXVemgjE7cdbRpiWYxir1HUCjnriDiqiuWjKk8gGQKEoHwdPBkLRkM8eJBckviK53ZXstKoE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28eAWQnyjcunuBDymNG1vrtUjMFeDqYEp5UgNACqLJBkmmEzC7AK5H6tDBSaNz5nXFsFGD6rbGckaULgWQLdz5yF",
  "key1": "67BofayKYg8zxYe9LwkQ7RZq1GkCTWmeghqHT5bxcB4Ds3RVdScMwFKyov2L3HNCL5xbgxUwVFdD7LiuueHFkig3",
  "key2": "66LYsDFca7ZG9HMuxKitVePqbQjLbmU2pM27XwAXbWL9YMEh4L3x61c4zm6eLTRBiVNoannQJJU2UcwH1y3hpytF",
  "key3": "4qXw26V5cXBKkd3NCkUkFWXuyApTjULGnfui6CuumpyHXC9munZHRQ8MBeXQmN3ZfvqrndueSNE4YNssSWPFaiAk",
  "key4": "48DKLbUtvQKY4yLqi8cdZcFjr7uQSNz2UeqGeScfxAb2zGx3UTGj2fufkyhywuiNBxspzLuNw7PRuGBSzPq1Z79f",
  "key5": "293MW6KRVecYBY1WwoMjZiikbvCPd11z8iztLP6DR5tw5ReVFskrWQQhZeS3r39KXdD5SzWyE5PxoxA5SZwAkhBC",
  "key6": "2kC9uZgqjFeYSqeq2hWJCwq5e36w8X8gDynajsqnqVkV5cVX7tMrBuRNwNJft65hAQBStGrAqr7SwEdGGiyLZ8N8",
  "key7": "3KFAi5muTKNDoQuwwBV6iGPNhCpPdGU8utRxnZjqhMBdDpTyoHd63hYV4sQv7jNMu8KX1QTwWyy4cKvX3UkHQkZy",
  "key8": "5z61QbDn7gj1A5yTXVqQQXQXXHtSzdQGixJJG6mt9ZQhn1V4Cif3cd4WiYKpfCzeg5nFfhgKqAvCLuZC527XSV7w",
  "key9": "3hTbDHpwjoniLgbVgDfM7fh3BmZb2vL3v3TGydD8ZVJEmvspwBZVo3LZwi6qqWa62FRwTpyPUFLvVGGCYnMCuLMB",
  "key10": "3M7sQmoWxVWsWa8LwJeSD19HMXQnAoSUnmtWfpSfsNaByoxCwxB152rj2oGsNP6wa8UsjdrWQYyEdq8ZQNQsaaXx",
  "key11": "4GyZphTdN2TGvxLa4NMZwqKR9nQJVNcyBSiVKUh3fbwNrVGm7DjWMmWy4yuNxZjoj7RHrNgAPvT5SJ3fk6VcdCN7",
  "key12": "3ssFuaNQJYeNx4y5QALUVboWSa7sJWXQ4QFXsHkMai7B38komDRUR852jPLjb9TBxLt72m2PtQT21UfRqRt1fqUV",
  "key13": "oQhyRC1rhQAdDY6fANECF3M9NYC1bzSviCZ88ZmnKwwfZ2JZCPRoXgzNJLeKKZruu22AztdprcDpWjyKdVEHhx3",
  "key14": "a3W9GqTyQty9nNYh1tUeVdULBHmFMWjLxLJ5DPHd5bzdga5g4WYnBWArUX3Yx1HLpJp3wr3H5qTzPdDhjwPBuDW",
  "key15": "3JeXtSrfHS4NjixskyM7aUXb9jnsCLB6MY9bNyo6GhTJKh8tUCaW9CoSMm9Y7yfBaD7kzADzohLbXkzAtVurs5v1",
  "key16": "3vECDVWYeQahJ2LLYB7B6i4e834svBShJSCdRHBMnBRdCnoMt1LhcLbKeiYwL2rAMikJ8vcvbNYPjswP48Kwa7gG",
  "key17": "2xFiiJd8J2ddsBnCny5cjpD7GUMETybMjG3pwrfDVynJeNy6cUJW1TcQtz6jXxMRwoXyzVnCXU6Pz5XH7MmkyMgC",
  "key18": "5x8rqgqfaWUNgeGFSoCtfATraP6ChqNoUEDztA8XpY4kHEyzQk93dtvnnFEb7A5Q7jbte8aKpazp3baqz5pjT3Lm",
  "key19": "2W3m3g21AEthcrmMXn3WzCu6Miv926jLztKCDrq89LtyPRi1Q9wRxf4yS6fQmwkVGseVf4mbwHoUShMxjbVvV6Q1",
  "key20": "4GTbsczYhCcaYduyZwNYJDeZfec1ZPie3QTtEUJ7cY2obGLFCXjtpzNpPcnmG1KgNq3YWbS6hYCyQiewMHao8jfi",
  "key21": "2J6FBp78MBUAWcDKDejQEDxiL8h94CxF6543ZdDsbpidQxXXk3Kks9ptsJD8F7N7ckkgmkDZvV1GKWRC8AFYTKwT",
  "key22": "3XxRRthANkvjLih5eiyg8KuxoHkK6YcU6TjdeitW7ooLgX1XXe5rz7ApD4htyExDf8r6upe5b5E9rkbKoarM4cCh",
  "key23": "24LHRXFim4nV3SgckT3ncZLArk4SVec1sCbPLBPcWLaVHx6FCjfcj6x6m9NGYXq2DAhQLUu5NzETfKuuEYJfhWwF",
  "key24": "5aF6syEA7cd5e2p8kktZYSZarg8J7jXns7vfbPWPNP9q9S1cKvnu5aukvF4wBLpGq8GZxnuAX3AJyE4tijbo6pbe",
  "key25": "2BJ67CPYXxpKnTd1vY9HYgyB1wqW2Jin6ZaT6co4tv2sMKrarjYLDgPZ3oT64vKGSfGJQP7PE5MzMBgxAFWAw5YP",
  "key26": "3za2zQKtudjxXujPow66nocsxe93wsAANikwmkqPCpuPmtHpRo4knAB5SMeLjgCmFw5c2DF4s5NpgiHb4oH8z1bx",
  "key27": "2r1z5xSafNJugVZ73dW3LFTAmd9brQNVKyHKfnu8exwPVpLLgXRvok9Aq5PZPAU9BnxfbMAwiPCSWuN8d5SgGnUm",
  "key28": "i7PAwPyDUu6wUNPvRE1Z42KtSJRGp1pfz4Y5y1PKzwHaGRSfkWPaGrPwT15KDkZAkm5JbJwE1ahBancTJinWBFT",
  "key29": "2j9oovKn1eSJ9yuQEt8soZro8RAU4rH5TycNjAYMzfyT9akV1XMXE3HZMo98WhKC4YfZQW9GaDDhPkGHEBX3sUS4",
  "key30": "612rCU3cRTT4jARgUvcnH6oJQM66vEjALQEY3RyePXi6cjapQmnWwVD1BMRwJUAKpJaxmU4WQKSPRZ61pDAr9WtS",
  "key31": "znMnAjCAFve6pc4odkaq7JhommeEFsDjBmSMYhy9ZTbZiVGEATRLeq8yVsLsc6CmKSGFkzyZ7q3BXZffetVpYUr"
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
