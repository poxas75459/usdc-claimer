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
    "3Wd1xnbqef6y7mshvBiWCxQnXCKqC9Vg87jzgLXMUSLpVVcXRanYHNS8TzMAvAnFWMHqa8pemc1eMcDq2oFxHaQb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WsA137vMPgmKNqyefN9jvzHbwQEfmXSWoif6HLAE1P6dYYzF721NTP1QEJi7NrY5U97wm51LaERe1eBDa66B1Ts",
  "key1": "3xUyxpsJsu1Hh54hNR6jV1quyYTzvY8t1j1c5fGt9uBSe2Zt7a2PDzyniBLnK1r6GWYuCkEgtuuqUjkbhHvPJ8sU",
  "key2": "2C4KptUXZgMw2BbqnG7xeyY7jWAPPrMwaAD4wu4yLctMvr2MsxvCVGe3HXcyUQ7a2rcbXef67LWjRaRE583kNWNq",
  "key3": "3MEgPEUceADaUwLf1mcb5avvagPU1r9ekyf1ThzsDS3kqkSaFdMGwriQph9mxPAwaCEiVGv8Uqre1DFeZnEfj4eG",
  "key4": "3nbdVyuUMEHcnALcHpDsvGxKqLfRdXoSzq6mLH2pRdb3TEsVCmLuLSGNiN5bK3rWbKRNEQCQ9zjMwPAamjU4z3HQ",
  "key5": "2E8CK8vfg1ynG7PzB6KSirgwtcMd6VLBYCu4bjFV473wywU5Fq9zLCrjV8RZnV3SC9Ksh8ZcPGhf9riXVqZykuMd",
  "key6": "419pM4Ni3QBvCD3g3CBMgTW1XWF8VNA7jivCnLj9ow1JLLpKurR292D3NEYhGAvS4ntBeudi84Tvug3sjqyrNfVa",
  "key7": "3CsjAd95HikdNRURAHZBzdLmaC7KLVvU5BAQKtcjg4E1ZrgevfEoPqFCjciJWySpjQYfBvcm3KCgbBvDFoGDCNtF",
  "key8": "56XazqNtD9djuFxUgHoghmniLwHfbyG4Qj6CDkQhQLHomBLsYG611mLmr5yQ3mviEADU82LwzuoSQdxossBjNFhi",
  "key9": "3ENTKXh3dsSuLr4hPVM7EpFKajb9QZS8gix7H3DhQRm47hjged8gtZJPfFQzBnkC91Xq4U68gGcnLhv3e6FSe1sv",
  "key10": "2BzGuubjzd4rsPjvMnsTNmtZiEXH4rkgrqJzVYrW782bH5DMRaK38K7toDECba9CtpgQME9559E6Bxmxhhr1LAEd",
  "key11": "jJbwmA8xihRm19tdLQVHYwEA12is431jXw9h4Q8ia7s8f7tGMroEuUUExhcAUc7LtmWEf8k6dsyQYk7QQmTdC8m",
  "key12": "52Juob5NqJTaBxh5GZX5B5qK1Xk5ABRwGrUj6raVpjW2mERtrisSqkUgGb8sWiXSDoYG6f9YDmkRsacBnV81gVwf",
  "key13": "2NkN7PgKYwA61YPY3c3EN5ngx7ccTt8Ece2Ckh8tdWQWgDsftrEj8PyRYTtryswe8YEEDh8EBoU6SbvKeA1jyxFv",
  "key14": "4uxiLrgmn9Ne64avBDJnL5atnr1ACSuqNxC8aiZ1Fr3yCvfbtcikjMdpMAvK9Szh5T9P583n1efzXkYooBhkUEkj",
  "key15": "5LQrAj4TPGncpJkxpm7NR4uTkEEw9FJptCFWCJ83scrvdGVp6WtV5WU899PKo3XMyXw4gkgGMnwezBpDLskpJ4g3",
  "key16": "jLRobczjuMGvaUwSyawDLB4o6ht2WZrmmh7MTaX37aPRjUqx7nH51ycq7attgxzGKsAX3aXxqW3ozExf6GUnX74",
  "key17": "5z2qiPVhEGnrjpPySB8CtfM5quk81zEGpAcfgegCnm7EDXSprddw6SpGjm9Zw5X26CFQWTMHLD6n68kqZBj7dnWj",
  "key18": "5eASZicFfefKWsircAnu7XRVtdcRgpFBsLsu9dACRNrDU82NmE4ohKa4Fg3LGwcC6bkPSNMfGPwMn1bMvGVohJ9r",
  "key19": "4kgsFJRhM3qu3aGDzUqzKRwTravT7kjCrcPEWmJg5dhffjdvxi5f6ZQDiW2LixbyjybZyKkuvwYkexXAkeJ2qxwT",
  "key20": "5xZP1H95Le7gpXB6umRoUv5yjE4QgwnEfge791iYKKHKi4Hym71AogyCkdhbaMSfjbrqS4SbW8X7GpVVBZArjUWb",
  "key21": "64GuZRKpgopaBa67c6hkWCQ9i46mSVAePgFDzgcJsZj9JXG3eYSfheL6bXz6WuXqj5XVBP44QGyvNWJdaCtU3HUa",
  "key22": "3uSrTLmU3KVn63mz18VbdQWHi267Pr378stSxmm79QmV5G93s7qDL1mYnazZ4Pz6B1ge7Q8UYdeDdHFs3xHYtadz",
  "key23": "5UxP4WoyKEGxRJMkX3zWD9LXeS4ccXwWUX1R1KPX99Z7EwWeYhJDM1tB1b2r62Vhj9w3V2vJrrj97avBo9BaDjKV",
  "key24": "2w6w2a6G7nckx2dELG7KoVMMRVxFK4JTfdWvEi6rDEvkueurGbHK6sAYQhMBdLFMre5QRokLRpV3S5Zm43UZLvWu",
  "key25": "GmyRBNp9EMYWbvn76wQUPP6YkvV6oNH9G3dRhuNbKxWjVzVbLkSxv7VfART4HK4wsQfj7YHC7C1viZz8HUSxy2k",
  "key26": "2tua9yMc9ZhPox8iuXzoHvaJP3A17JKwAB467gaMtdCX7wdPjGETcqFJZLErHhzfUFhVnqKidGBzbjYiE9Pu1TLf",
  "key27": "3yr7YcDkU5gT3JfxxztH9iQLiyiE89AcWB5v95SfhCumRSBMFpwcy6m7Y9WTu2SyLHZXbcoiz9K5ewYyQKTMAkkN",
  "key28": "5aSHQFcFDLvbF4rEY7zWVEoPY8qVyyAaMz8CgooZvsBrrAMGZencqRM7Byrrg3QnqCCYGfrrUtva5zGcFqwkDpXL",
  "key29": "5VJ6JLQyE1jRCDm6iwGUeH51UpsyUe6DEyqMQCi7F8yVF75gDdAzBB2KVi1qxQ1hX6GEiMmW2gzY7Y37mDYVtXQg",
  "key30": "2dvGuJ9LAgk3DGxPppqNGGQDLk7Mq5qKvqUkQ5mfkWQDgMqcX7oaNhx5KiZ2Dze6VYvJRzJEa9chCVXtMXt2GGry",
  "key31": "5d5Masd1VGScEiuav5M4JbEUz1uXg1ymZG8Xqoe8XjYxh1h6rkvmRTVkohosfvgvWK3XWQvrTsDT4h4pDmZ2KwdQ",
  "key32": "4GqZ3Nxki8Wc7QtFRvEeDSHd6oRbqiA2kEyUkLTGjpWFQ3U6b13eucwoUK2TsQxnEvRfVeTGo89DaEFT1baNuQdT",
  "key33": "ohP9zqZcgtYvhh7WPtyVS3hTdZ4yUAukYMCzSA1YBatYqyPzsUE43xFauQo3g4A1Nv8JCV9naGLoaSXSv4CXXT2",
  "key34": "3Dv8n5n4nmRxkYRHThaj27BiE9L62v8S8cDGFgFBocBgv19FhndYQFUpkJjqJtRZeWnFKdu6a5A7ykR82ZVoVpn8",
  "key35": "5kKXr88dhvtKaJ8PfQAzBvsRDoWrLKLqM5ijCavUv52zoNK62HwZY6vNjogsrgPAr1yXCvGnHMS7MQq1hUVZxpEL",
  "key36": "3s64mnCaJHteoYDHqpBsqLcay1hTP21Ds6TXcqboHscbhxehfr58AmT29eY4ZVXGHEdZv62PE2vwQhLjmFh4GwRJ",
  "key37": "4ULio5fG4YnkoNUqaho9HxfiX6rAYQmCeNCbRQaUn4Ew7zemTndtKTtSjzBpcCNZfZA41DiLsUQPpBdhkTp9qeLz",
  "key38": "58HFwS3Gp4aXVWSYThmAtzdZVFHNsL4xVsFmtBmnnryg9fe7Sce3WXUxydT6owASx5aYCCXGouvHCxTSqS9EiH4K",
  "key39": "3UrF2o6F93LYgaXJr1mgDTh2jMjfhyrc9LRuu7Ab4ofce9LNbQuiR8uKw34YkVcQ5LAi9hhmX3MLTA5wgzvdQGdr",
  "key40": "a8KCq3QM7369ncCto1dFmznfMbfxC1CXNTpUK1UdfyQi9SpHLRBzihqyARa2j1Bwsdq7meFWy3tALJQSPsySKyD",
  "key41": "3gktvRUFxp7Ws1n2g7eG7AqoMa7cp3C9vqHQFWDomZvaVZ5p7zakac927xfcmMBNsHcBz6xvw8Y7a49TWU21sPKh",
  "key42": "2tFr8X33A2p6WZtYSX4QG6RFdMyJRU2wLiSUwLtDvVzktwEAZrb3HXqW1eb7L8W9q7u9WucPsS8i4TDLv48Uc8ff",
  "key43": "4qnjr4oX26D3eUjpuzWecRTQaNgGTXnQ95WZbBCs5o5jBD5J27k6XwAynrzXKqomH4i8yS8ZLUCKfZjn6d2C9EXz",
  "key44": "rMVmMFUCfM4dpjuD5sZok3Gf5V2vTsBmQayd3jdTji64rgrRy4pE6kKX1beMmjKFhFCBiXA9wqa9qsjWbjbCP6d",
  "key45": "5iEpnsfZPbu4ysJAKTyPfRUKL3LdcnyCPtjQBCesfQTtz6EfuNFnPuh7s4qPJJvM3epXPVqdz4xXRsKDciL4BDUW",
  "key46": "r3W9CfzvvjDWUqAkpKZcga3sWRHW7Xiu78X5ihSuCd94q5caPAknBh45NZ8oTdXkpqC5dppPWWnNhoqxPRWcCYV",
  "key47": "2PZx32BHXkQe9zWQRYGv1xq9Z4hGCspG6T9AMgK7JBa95rKpHcbUqrtK7pTShVLNwfquAMdpgjcoaxJgYdzkU7rh"
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
