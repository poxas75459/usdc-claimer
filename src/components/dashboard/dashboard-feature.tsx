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
    "3K89FiDBrHbycCeqWfuGsEv2qLjRuKz2cF64YfjQwy1ctFrQb95R5ASc2zWDvd6bXwTPV5DYtmtcJoNTko28GdG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kf8vhTmS5fy6BbEJodjE9vz6r85Zxq2VAZnc61psVUatqzj5t4uUtER2LtBW9pHJHV6cZbdWouNg3zmgks1ydyF",
  "key1": "5FngDeR8X93nb8uTzuaE7UToRdwM6iwHoW9cg3XCeXpwPaVyr2ETPwjp3RcgxkWphLnvyqnrWEufgpRBKx63EeXt",
  "key2": "yVfoWJwVsPayD9MvWsP8AXo76T2roWSZiYbE1d6wegHRpQWW6yY91e1LeMUx6hCAbipVKyYZgpB9fgU25Mee9wS",
  "key3": "26M44NAZ75GTZamikge6xhuV22KMx5eywzb8P6GSUSpiraRJaQ3hxzb3u7sA27tn4xC5X6m1owHGr7Rt1mDagmRW",
  "key4": "42epbjyoZzxym8xdVBTonkFf1LQ3CYwcbiz2AkRPaFgBeKPUjf9p3RiEr21tW6RhL46gc3A3JpwK7TAxXFdT2uc9",
  "key5": "5mBLALiPTQLhKct5ZyqHKgHmDxfRbJKT6EPHRi1tyUmogmtGhPwBWBCn48uzC4XgL3z7FNy6ziRB7fGxY4h63DmY",
  "key6": "2r85Qjcg3zyf5zGsDNXN8xroFpHTvUWRsZq89wXvWyPok1LCqgUnfqA8XVD4Rrzsfx5MTtWVVhvqd5b7cqpxGERe",
  "key7": "3dSkXYPoxFRQ2uWtNeWmpq6un9ehdC5YjWVv1SsPgaHe8U5EeA12JSM1bzFy91N1zJ86mJEKx2V4WEfCsHqxumx4",
  "key8": "5QgtU5DbuUDeZDLZDrZ5hW5Jv323EA2WQwTJDyzYFzdUYNeJtZkQGgJZ9vf4nx8fDnAxdu4b2Ztb6A9mDppaihqD",
  "key9": "Z4o1PdJwiiGQccVdnPzMV2dPZL3uzDKxUMhx3unWnsZjUVskdhcj7PMWQi1MnzXcJ28xjzHQUa9QF2oaV3hArgb",
  "key10": "57FmoUA3AHmgzifH6TythsNBMyVBjdTstVSSwrdNTCrbr8WNnDqepKYv2XNBsho6W5ErqMDVXWu16bJqUCDTHMQP",
  "key11": "4UoxU4yJdvRcoLqUhAj8bdbPVafQ3P7oGZxjbr3ipPJRoRR1WENXzqmdywwh3LtsGeNuRa2jYZdakgVhp5p3qyHg",
  "key12": "3FuugT7sDqWFQGusesngP5fgAjbhRQ7FEb2WPghkCC3sKwkPHSrsqE2Gzkru9suy3nx5uoefAZvfAsPPkMi57vU1",
  "key13": "ybQYQJ37J4rcA3uqRnFn2koMi3H65n68S4EsckEvaYgYmgwQ8nVxBHEeSFKKTeJZDUPw73v8NinbNHzALo1BLNk",
  "key14": "2gi9VH6cBLkbyuEa7E6SNtRfUXwvRYrkMoYjon5Zzj2uSYJLr7UmtSkarqSUhHmGEJmaCB45mo9C6R5ppLYRa9SY",
  "key15": "3zbPasrczEeNgQK1HQXRxTANJaiGWM3nNZ6fMmkkP6TjAJ1kA4rApmANSFHvf1sucNfzkYzvwrst45eK1ek7hQ8a",
  "key16": "4GKxXiGz3axULyoXWgoVnfR5LVbeWB8z9ptXFAhyyE74mroBmXA1Z3meDreR4P6qMJwSCaQt7BKUwDE8aEHLnLD1",
  "key17": "2tcQi9j8fjYs5gjFEvJBXmmBkzC6vD5vBoVdfdQfmmapEt1ZekHjKLwJudx3wX2nqw4EZApmhXJYzB1LwfUQtSF2",
  "key18": "5RaiU3KHjD66GZmcmQnTV3gxRUdR9yxWYAGMxwsSFoHMf5AGkFRibqcSHzcm9TtwudVRd1vfU7tq7c9keJWc44BP",
  "key19": "5sM2m2CJdX9HXHcYd2HLChE2ExTPvyaCDnVwiPT9AcTT8jYcvFQDFftx7t4GtFWzFRQUsavkMGVbqC4H8NU4jg13",
  "key20": "ymMjnhDCt9YMM9wh2FDVLjmufE6zpK69pjYQVY5VcnAQ7M9DgScQK6tpr8QzXhEPBjcv3BvPGzcueSgJLWBSFEX",
  "key21": "5tXgYpKpECNpWfXaG71KHyi2BHGhHy4NvpadJEuF9WT3z3mSAmr19CSJ9X7eB3fMrwbc4zTJgR3Jhj6t51eWwi26",
  "key22": "2ZbnXxDWUXdSt8SRoyLHSmBENCjfQUb5GBCEnBDYE8AxTAfiBn8dVF8SCvxyykhzypoJaXGpeE8FjuFg1FiPZG8a",
  "key23": "2HpoYjCfTFp4bLFfMSoSR5vcL2FpJR5UYYkgS268eKn88pMgZ4XoD6hw7mP8AQdE3f6fzmXQwQBWkr8Ce6TyMNiM",
  "key24": "2EpbXmT3qWqiFM4urb5jAyHeNirosKenbBqnqitFbddhuNdqe6RWwqWQi53Ja6rD1SkDHVKkU3BCPb1dUGx9uCiu",
  "key25": "yiKKUX67n925oSJhtRUBWWDi2whyhLyUgkM2c31CF48W1fVKhip5BpvNn4PEJzEri8VEwrXw2QrfUvQ7tYj7Fgh",
  "key26": "4tXUnWrxPTPw9GSNn7Ses85LrZsA3RcDYny2cGMAARvFf4QM3uoVaMmthcviUdzXyPRXRQhEKENdhuHek4PoWQRi",
  "key27": "4ri3Cfyu3fs56oUWLUUxiLkaVyYNBW1oyC6wCx5eVqTYrWqiM63h8Z57KhxgNUBiC9x6m3LrspWEt9FTRG5UMVys",
  "key28": "2Z7QaY8wKSjKC3WFCFFKFxns6Rr8JqqfvehfT8AuRXzSJKnHNT7oHyoktBd9KoSDteoxRsbuP42T8A68HjjStdXb",
  "key29": "4mzFx3QeFztxhU7t3CF8QszRnUKiXi36TagS6GrvsjcerRV6vMHpVmf7FafndQjoF4NWhh8FwNMJsSp5yXZJraw5",
  "key30": "3U3jAUk1giyJ2BuYC4PpTug3tagwgcLoLZnALeZY8Bxw4JoDiC9MeWMJYceYKdDgmhryQpe9vNKm364MmwWR35in",
  "key31": "ifVB7bFLgFeZn41r5PkErxsJTM5PRpgqKKESonVUwVdiTEvXmnMbS5EswyiQqoFHpjAsNWjETw837mtJK6csyWD",
  "key32": "5LYACcuS5jtyTTM9Wyq2H9Jb2wxggB1jM5VePKeBeuCmEyTf11BaATUHN69nUZ7Mh2cre7aYb9rJgYEegiFJcWpC",
  "key33": "2pAviTHW7C1ax8xF26JQoGboey4LfX7KAiSKcPCA1Youe3YGHXZkRxttLUaMUHVWsxEwJMeTz1oEjMicF6gtgM2"
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
