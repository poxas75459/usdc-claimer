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
    "SivaQnCnyNx3SUbyhnW4BnneEkWmRZdFKM43zaWpLwR2EhyAQ8vRxm1JNgV7nfMRDBPpkro64McvityhTtvqkAa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eHCkRz4o44mbV45syHnRHSB3Cs8hTY5yWg4jsyJaVE2xYNHU8T7aASH372v1PH3htu73RyRs4oJML6HYahhezZK",
  "key1": "3AZft3KTTkEDh45rpZkk5c2CqNjV7cEi4yBH4gWh5Qf6sVjbGL3aaZUvfgx4v5TjtpD1rpgxNnkcjYT6E2uuw9gh",
  "key2": "5zZNaADrjukGemGoiJUig42o2eF96Y6nQp64WbNCEDH13x9TicxsEK9YtbAVJawYFuFmRV8BVQjSvvPmJ1BncCwd",
  "key3": "5GM7NZUn5YNTXCCDJWjee3dexBn89gqt5cujS7Q2CECTwd3XbuorDCMMDZBk1e1Dt7TW5yw17mSU9KS4CiU1sfUJ",
  "key4": "3kLEi7VeVKUx5LCNoCRMB7tsJsNsA2q1WjKr2dHNeHKvoCXPR43XeL5EikjKxsmvcdsHVYCua35GN63niQQ5QrRa",
  "key5": "2MEukhxVkB7KwJabgA2apTFG1ip6116Wd2J8GDJpp11YgW2kD1tH39D3c4mty8cRnWdjJ28PztHTmR6jThpbiQLB",
  "key6": "2oiGjgT8MVMNUCbCwdR4rCwvz9YmEbhkWeMwjjNSPfF9Sohk37MqSbBGQ9geEKMjkMNiN8dQ5SZQ6AoX2JS8Wb5H",
  "key7": "5bF3R7BCmKJcvx82Rk6o8R2oqCApk8GgWikb8sBx36rMPoSqpGwNVC3qQuuBMax1hrmvdY5XQquJGAPBXmoKoFt4",
  "key8": "gFwf3yuQDAsmrdu93LFoRTCvRq31EgZN6cbEXpW9p9ccRm1Z6Pci6ePJKy9Bxyon1Zb2aeTb3VHuaf8fJgH6fpu",
  "key9": "3RhVWVe6RZdtSkBYp2txiT5RxhxwYVUTC4UwGSQSyksd93yMdXS7B1kwRvL9obLS8EykP8QLVeuda3xofPuXN7As",
  "key10": "3vCUKbj7fWheakwS9WLy5YPyd1QWQBoyTWFUmYBHdHNcCySun4fJejFJ9HRcNDdUykV1SxZYBp7g5D7D85KBq6rv",
  "key11": "5e5GnzLNEyYdNswFzpkyr952HzMvtVGjU6fzZZaeivdTD3ePiJCs3oF6KPeLcdoWPki2221r32VqprzsHHWFsFfm",
  "key12": "46CZyN6YZBYL7P291C1ihU46qXiYrzDpYtx7QVWkq4PrFn8CpTwEY4A1MmgWSXwxtQkyELtPQKTnb7E4pJwZRuRG",
  "key13": "2t3wHo1FVHFYn4HdGSZdCrV21eRLBeWUG6bssSfKntG1uS3cLnpEJUuZyG98vQwKHJr63rjz7Q51p7E4NCdL9j8i",
  "key14": "A1oC6JwhDBvjYkSDXPiJvzN39b1uxTGoEG3WNztVCiu69sLQBVyTweAY9XerhWEBY1hVfMQyTwNbzpkBK7WFfrS",
  "key15": "xMVMrnCk6w4Hv2HwY3tZDEJ2u3KSjhQUzHkoLLC2rGQkBLeVvmUw61VKzQn9teKaKYqcySgsSBg69erzJchDuHr",
  "key16": "aUHpaG6tBg6UrqQW74rfDMswt194Z4wa7gY2W3aTj8MLC5fqcGdS4b8J2CE9e8KJVCRQsqCEKszyS73JF8gTZAZ",
  "key17": "4WwUNukJAgWdPRuYhN7iYzuPi2xBY5Zoh9iUXnL9vdmAUJE8CLjLa1gTYqKy2TEpwjQuDqufVve5AZW8D8JudF9p",
  "key18": "2hjp9rnid7E7RKouXMyT6t2rvyfHDLejGJjcMenePdy9qA613WQfV2nt8fWZXph4Ub2ZKyKkpMRskzCG7bSZ4Li9",
  "key19": "SMnb8CJrkEMzjmFgG2yCj2rXQ67XRqgRWupBPT3QKB96aXxskQoZ4xTkjA3iPSabpiwkzZbEN2GE4LvVEJXNziM",
  "key20": "5Ep5vREYTiPYwxbvqZVAhDZyayfhEwJQ3rN63QwsEH6soh2mbyN7nkkR5sntJUx2Joj9kWgAbYj8PAx3hbXvquhP",
  "key21": "54iSWDHyoWMWWx4WeLe5i768zJhcXMEsiCkpJaoBZSA6HwnEb6sWtLkiPfPvvWFgi1bk3dZ6i8CQbYePJxcwWKic",
  "key22": "29s7SahHF4vUxqAaU5qn2knybnHLqUaNCXzT51wb5yD2pysPznSnYXA38hcMdr5QknSoagJ7nCYy71he1P37VCQ1",
  "key23": "4LwuH4wxMudgZUyhJfD2dmaLgMxhBkRL8NP4E5qMP83HYRqjWDTnM33prhgTEHrqH65F33XPBhaWPWqn9VCLAjQ9",
  "key24": "43srmt1uagkcxbcMka5zGUjL27u4sYiTds4BiM868QefjL2r6dEehVzydohdowtDyzr6iLh81EAE7aEFAC2yWZQ",
  "key25": "5r8eWTvbSQMvxaPXweNNQqDSA1boWUnumPsyQYMsBA4JGhceYq9cSM8BHJSMX1NArxmfpc3rnTzBvoCHM4FhWxhB",
  "key26": "3YPAE36RnVhCJnFdFckPRSFBXq1DjtxBVRAaaL24f9ojunhbTaBdsTESLBf9Bwof5r6NCVZLf213Mp1N4jT8EbTq",
  "key27": "5qVfNkRsD2YygzxEoGRysTTjJBD8YVp2RCU89RJZueA7YwzcjLnVoj24MYEaPstSw2swRnxhRYsiHtyySEznHhS3",
  "key28": "5z7TTvGz2AFEy6545hhoaRMura7XTNqxkqaVpsiGcHvNQ4LuczZBc26v2GUqejuUzDKD5odpBaCJH7oqYrxWR28T",
  "key29": "T83hAoBLpHRRsdpBQg4wXyc2zCeDRCPDTiAogWSKWvGXozbLQHJBNmyeLgiZjMDZV5ZHw43VkTqXx7vQx2KUGKK",
  "key30": "66zyytJ4bGr9PWeK87md1PYY1tne16WRb3VFLAGPAS9EtFSCisNiKNdNCewNZ6NpU6EBhc9iPMpadsPy1o3noKTE",
  "key31": "4c9s6ngSw5C5x5u3DFosbopo3swmUShh3TeLr3m3sGn844G5wu6hKHtHd484YuR6Ff5M6jz5Gm4ENj1GvDCcfUE3",
  "key32": "2AtrfspTTmimVxtScr9fy85ZykdtoNxqSf6hb7YASiS9UC9WxZ1HYweHoanLFjSQBLFtJ5zS9eWYjjXTA55hQ8J4",
  "key33": "2G11jnpE5cUADipzpUKQWw7SWZJkJqiWf8fKEFYmxfywfje8VfPiyRX44ZeREB6SiEj4Kv9gFVjZ7CzHcCqdwrbC",
  "key34": "5DTfcXdotrLnoi47qfwjcMQpqueYAf5DCxUg4G6pTkvmtrYqZp2S4u8reondA8Harf2RkmM2zRr9RS2wpsMLXMW6",
  "key35": "3t8MZnN2WKQdzpf6egK2RP635NuSw4HVFWqVbtD4woMH9m595XzCPujdaN7rdv6xX6KoEraJL7diTbawHHRKkNku",
  "key36": "5TJjJjDnMte3ThPEoFNTTTJPLTeyW2Xwkqpv6L7rZaFijZ4FHbWAq2qQaURLtDKVhhTSt6PJKk46qgbZaXS8f46y",
  "key37": "3BHLDpwuCDtT19RvDAaUENZgeDkjnthZHKm1pMXdXua3x7aieu4Guo31XFYYk1oAggZS7aHbFeNJQBj9op6S9KzR",
  "key38": "5wZPmV7U5HzhGXZg56ctgkQDc8LL3bEnX5uK2ShbPU1AagqYXQaXvhPwbzAuWg2UcKHbAHMfMRnwtZGFkoAgdDZT",
  "key39": "2B9sne5kugJcppeyA9UibwpUeJz6drup18b399D6zy9VKv7jiKBXRdu5m3ZxJZRXDho18r7m5nzt7wi44ShGoWUe",
  "key40": "2473TuDRReFuSaXhPogVzZSLxCQXrxUBEyAzLFEwu9wDEctDNcBXAiXPqEaidbCNcSjiWigALdSEoAjwg5dWYpx5"
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
