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
    "64FJfb3dWsMmN9euDqXvNWZUYpnr9yPqWxB6Tezp6tPzdKkdSP5K6iJap1n5LUYPwRK9MdhjKtKe8or1eCoBm2SC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zPagtoBFACX2ympKdvP8UB9WU5qwMmXMEHnrpnW8JJ9JiWLLeGhHojmu654cmWYH2H7sE3JhfhNmfvtvEQemZyc",
  "key1": "Vkmbopw1cFvHBknK4u16YMxbpjRpnMjYhyXrFE3Q3PmCVfS8stEZ7HQchWjkLFi1Ti1EqQuwXEVEq8bdPC8ZsHd",
  "key2": "4DLsRMhuoFRGKrV7JuXoRfttWsNeZNWJHwGhQWWM8UMJSDRW2NXpbq1kFzkKfRV2P6gVhDMsQaJTzqNJvpKqPn7F",
  "key3": "Btu7tfiWHPSpTKHe1SqKD7iKYBs763fcoVXTn5c4xzCNRDhJw1eQEciPW93wixkoQa6zocFNC8NEVEF2Tpfgm2C",
  "key4": "2bmiRfknCqW3zjR1FkPpmP4yGN4KXQLF9oJpL6oodv8w4jM6eHMwKhoECgpqzT3CFzaQ6N9cA9V2qyXi2nxHMSaw",
  "key5": "36SxYm2sx7Lr7cAvxkZTKBrrqZ6rSec2N4r1JTvmAiUH2ZhXHZmDMGgMgNfxZsbXSYPvFxU2TwNBRaByyuYTXz2a",
  "key6": "6kUjEKZUSyM1TZLfovZ8HRExn8JYePbYkKsPabs4iBMh4FQvqGCA6tv9cxkoCrVUMaL9MkdThK8g2DbdkWckofN",
  "key7": "2vg5p8KKjPR55ZDQztWuM4CjLxHzsjRQXsxFXSSV66sB2LmEuJAVavVx6XSPmZZsDLmUpJKxQcmHvuacdawZXTrh",
  "key8": "5DSK8iuNWwJGNrtopvswvJWQjf13EXbcsjFUgQXN8LoXXhVV1myCLwMrjDveei2LqAeXACu4uqz67FpBdpS5fSKA",
  "key9": "3AsEmo3kp98o7YYNcd9vSN6SVMqpBRJmTyMx7J4sNgY9cyftrvYTAdURyc5mhnomnVUhc14hj5VKG4yVUaZaDWBM",
  "key10": "TvW1EMc4V5fyqGgJyec5FmoZBu95nkjP8SXMdRdB1y61U4zhU8hYU7wF9hALBWwfr2MebRf1fW4qyvjDY8DyqQU",
  "key11": "61nZNaWMNWNLmtxfQV1zH9cWYanhUZmeWojatoreznyzVuvatjhXYZoC2njb4vbjwSSVKgyWePvNZYpCo7HZbfV2",
  "key12": "49k7qoYVefQQDxc19yEm8VAGZ1n4EfJS8vLwBzcMxng6mBfeQNNCf1DKa6jRq9frkcPRj2fB88f5N9EVu89sm1WE",
  "key13": "4pzKkqs8uriV5LY3TJgDFHArPPoVGRrWUk4oWEiSB6NqVNiPjcQPziWAGMF3yMs93SRMqm41hqDuXnF6a1Ts46HQ",
  "key14": "5zSazLNHMUxZsBBgyUNjadQETpLnaY89bnZ3mowoxNVhjpry851p4AESoe4E8LbujUUzv2Sfd6AVhhA7YH3RrRLQ",
  "key15": "2bxs8UQ5KpVmTpLDZgBf88kK35nY6RNt13HRcCfKDFYRGHHqinfbYSyrMW49GHGyf6XvY59E9tHN9QpuyAMBXKMr",
  "key16": "3huzt46raXBiJpa6qRxWMsR8hum4JLKiaLHS62bv9cYkbXsyA24i1gsjG9FBeshfWJwUmkR7XPzrP16BiHQHbWyY",
  "key17": "5YDi7EsjWJN9ETmEwrWEDXiBSH8d3gw9sVuByBVh3QrzzWPhZraZmAmDz9DKTzEvYWPLi8ucF9SGxnnc8FoxFhGA",
  "key18": "46XVbkZ5RbpVih7Bw191kZU7TDZUJcenfJgNhSRqGVQ9aoZxzGy4TpRSzBFVjgcbMWJgeBeaDk26LsePNctmv6CF",
  "key19": "3Y9ZWJtuszKHSq8coue8uba1qNjD8wpR6SQrkxfmqTNLahSVyaXkreVeRmLAXaRsHHd1FmTgzCtkUEzhm4EwjVz5",
  "key20": "5bPV4RjuMp9MX24P8xKsJxyyrxhAUfEd8LyMsWiDfW1ZcqquY4D3zio9voD3ygiBpg6DPyoLx3jXrYacefmtRP8Y",
  "key21": "wgnwuYD7yYafDrR4R4R5pu1yudmsNcV5NEDyVXNAHzdMHCK4xgwHoZBrRFXedxFUt3tMsMqRhwLq4ujgpbV8neG",
  "key22": "2AaVVL7jZFFUjBzHB5vJt8k6Ey5WebuUi4yFEQ398CECNw2vepXRk8Y6MLaHDP1qSBsf4SgR9UxtHV6hYQXxcXwu",
  "key23": "bbH3QKujYX1usmretZG7wWZZxGMSbBKuEvNyNa81UvHy85qhsJhT9AMf6iDnk6ZRCYnFhKwavVcPRy6P4PHRi4p",
  "key24": "jqBqjqqJEAkMmUfkX3PwHZYhNhYrNrMZQRpDAkDzjoWuhPo5bKVLf9TFm1c8HnQ1kHEbnUG7HUJmwZp8GLdx5Rm",
  "key25": "4oocdLDQsnTJTf4mvtqu4dJp3yEVjj8XWHGogCgaaHstynMVLRzh5uXmjERT9Yut9vmxuektFSrRjeiiV63NKvA1",
  "key26": "2A8HbmeeapGkVNvVJSFunNFHQLxB2hxstYvvsNgwQPDuJ2otjVftJGq1q5Pey4H7wWij8UXr52HRRMgdFhYcxHsH",
  "key27": "373SFLEnWZRmcVSJYRDgpG6YzDxN483Y5weD9S2Ec7S2LJe8NYcMjEC78Horu5EMXiLHVFXV4kzjGxdUqwmNWEQB",
  "key28": "5MivFzZ5crVfEeredFF8ZCDFmKK6ukUC88F9SA5LNMWgyYwtawfUBj6DDYuPDMcAi2DUM5aLTfMR6pRyorKU8sxa",
  "key29": "4QWL8VD1o91weE5HbngsTfvCKsbCXVQztFTY9Y3dbLJZsjyJtLEsmtgjEcJJZNjv5t2qLeF1oBAWHWamp1q529qM",
  "key30": "4wHh5QFBvkvXjns5mHDsbCd2HS6GPqaVasLgiWSJo2hLs5tBUC46PkWY6Y1c9HC1GusfSkvfDCyNqQypVRWAtaui",
  "key31": "62U8A5h9sryn8Z7vz5HzmsPfFH8hnGoMkSQbMWeK6NwSX2ueoE75PAvp6Lg2N6sG5ty2DBkX19XAtnRdifD5WjCz",
  "key32": "5WNp5tQrMCpJEgxBHQcKiNZjkGpF51neJgyp7dTD6BeaC4chS99wxL7htTKQHNuHBHNaGfkTmHZphKx15hhnk7Np",
  "key33": "4TSz24d6uXJ1yxqvYi7bWbPqSotzGuefCSARqNwx5R2aT9waSpsBj8k8PDNKUZyLuDZZuMpAYNdzhGkV1KmpPfZp",
  "key34": "5CMZ6Yypk22JAqrDAMVJWWwuwHGMbWxryEds37rRs4dExaEiEzBLjneotVfbN1yphVyvYwjvqbWUvRB9ZmoCn7E6",
  "key35": "3e4JiuTzRuWMCnCThzeNmL5oEK2tqBU1pfPwj5G1hzzLATXsWjA3QjkCVtDqW2egUKB5Yg1FTnySVwZ8mzUjWVxP",
  "key36": "2HK7443zrdFFbKdohziLW9x7cG9vk38y37CKCURrxMgYzcaAEeF7Q12ajarreAq7uyavZAmjENzcy5dAog4fShEw",
  "key37": "4XQBeKHqcNLmQWgbatLqdNgABiCcgBJuGdZg6R3UZKqSMmof24doXj1HJ2bFHnM92HiZBu6398gxSNtuXSfVQ9qm"
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
