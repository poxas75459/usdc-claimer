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
    "4Cbuxw8xQBqEnk5e4psX4VS3Aeg6GaUwQEF6WU9U12t6Hbq46jWgyqcr4cjNbs6BLbGUYgvostBqpX7s7jwHsxkB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PDLZFZKWk5hVc6kzLwV83kjmjYkiW7Cv1Ug3JN1gPPQBtHHXbzvX2utFStsqsrFydeibysKbPqLB7NQhCWvJckd",
  "key1": "2QyoDUCWeXQsqu5gsiorzPdVJBkTzpAtAPL1T4zPqRsBwj4FrgV8TauxnN7qYZRML9Xomf1sMHmBsvz6okaHiiSB",
  "key2": "4ZEHjYCfaVZxjpM7Adekcohp4aE3ga8Zhgswpgoia51W6mWJcxrKoHyEFBEvLoayUXzVFzsZTdpecdECXPDe89Fu",
  "key3": "5hNqzj8t9zNswvjKYag597f92fT2NB2iiVPstNS6AuKszyqKVEREq566L4g6rmA24cP42MZvfrvp1fHnrzL9ptFj",
  "key4": "2KU5vEbqsTtsRzwvr5uUKzdjXzBQHE8SCkjX8Q7wxXXHQvtBX2UVxd5u7Uc8hPNGzg2TB1qxDF7SDrKCBbT5Ev5w",
  "key5": "5JjYMipCbAwdaudkr7TfEA41yQtVg9Rs7MQdD9hA7ES2ugnuLsRYj4v9hTcfoU251fdqhLogH6xA5kzHFPsYu8MX",
  "key6": "3Vin5KJQ2MMeG35ZLezcpuzVwMS6Eo5Dnyg8yWvENkiwLAkwu1zMG5EgKfxp3eAJHinhPRfnUwkJrSYpw58GaTS5",
  "key7": "3qDiDdt7jnVPwTv6csetxoArxrgLEjARAZTki7p3QFj3adVocqjseebLRBYgLiznD2PmA8aius35h5yuk4zi4LfT",
  "key8": "E8PFQkFEYzf3AE9xFEdCxpNKxyBppX9LRgiQUTWYxgwuthk8oCGtVYsmfAo3u526WwCQmqr6S1NAbJN8DwxSMpU",
  "key9": "AC1ZWEpXnUGwXzYv3TvHEbapwYaPn188bAPHxZ8oRF7yEqP2h1XqrCUUE6GcRJ3TRpGnitKepngrvNjZsgE4KEC",
  "key10": "myeVq8mVqx79mGc3YK4aqxQKkx3sDnUeHoCP8mc5kAed4QMnf5Kxo7MfLiQ6nVTqTh7fUsm9HFnvT6DfnfjWsUY",
  "key11": "5aNM5BGSqD7GobB4bNdCLppCDJLxby2snyQvosxXAP2pvoU2xdE7wNTCUYgir4ZQkGNueMJuz3dCyhmdpc8jU895",
  "key12": "iBYDmogPQCr4dVnb9Hf2CvCYmpGArJKk3RTVyk57w7m53Wzcnxr99Wdb18ZUH5qWR3ikFgiXkhz5SWxmDwUioCP",
  "key13": "4mRmTmtUzZjTEGSgDS8LKuWBP5GRjN9zxw66t7HaZrT77xAd97CV52y3jDy5RiihpQsskAMHvhUAgPjnTwHrAqUM",
  "key14": "4ipz2oDYDJGH7d11nf7hT8F8DoExAKrpPcJrQEQNM5Shzp7TLMLS8pQRDxyYX4ZbfKcRMrhcT1Y3GU9E4sA47Ge1",
  "key15": "3z5LbyA4wgjdMfsxrbbsZMVbgaPeb9B15pVCFAfF5BDJH4jUdegVdY3Umnm2kHvgjELajvFiEF1iYZQ3a1sWZWm2",
  "key16": "4pPHRJCdCM7M5dzgcAVt4qfD8P6tzCSoZ3SVFTJWMf55wMRxLqyZHen5VGqkZaYoWTsZgC3HKyTwvgwaRqBSwavW",
  "key17": "2ACXWVunvcgCPE28nD8Ukc4BqkgRQ95TkGdcH9aDnZA78aetghbWw8oZbKfTZLfYd6r5n7gRoF3LgeLLPmqAQuM1",
  "key18": "41Wt4BSZkdnRUzf6TVCtj9xEZ5t6it2E9ZP1kHKRY3ix4yXRhV29jHYF1AmnzCqHmnDgnNXBJqorahAcZ1BN1NkD",
  "key19": "276yxvXK9xSYrdwUBw6HPnSGm68GRy3qCp6my5qh4VqHxuoBPxbqrwZ9m9kzmcWv54WSWa38jKzQNiPRhXSMNQ4Y",
  "key20": "hhGNb8be2M5BJ3ym2XD9zG9PmPo4kEGoFg3scSJHxHoTnozv3aEvcqp7Wwrh4XPHc3FUVe2xZ54nbtCF4eQFFkp",
  "key21": "5gEs7ucrzffB11N566Yy1kiTuyZKABg849HpgYFn8s9kRY1J8kCM5UDU22o5np7mopdmvZrzvwGid4eG7bcEKBmx",
  "key22": "5xfawckhzHZqh9HdsLgRMwfdYbhWL4VFMxAetczDtbMfmFShmTqBTjLUgJfoJ73QH2btTBYBTiuYXJ2n6b7tFMCL",
  "key23": "3Wy8RLgHEwW3jAQTiLmrnrupWUkCpH362cjiAJ5Y9APzYquFjfysGLTQM4yEPjks1D8xRGw9CtmmgvdaHAs8uLes",
  "key24": "3kMy4ZUTdb9aeFjFaHZMwzfqcdPc52PP2pLCskkWSU3ZoCMVjNbvSQeMyp8G99vtdyTxKS7v3H1fxuteJbFH4eWP",
  "key25": "2PZbSgUCy8p1fEzV1TrBDZ4x7idspdFVHRbECu812sqGQ9fhyxoqSsdb9UcJm6VxfYnCD7ozhpjkyMnETn5ggkpw",
  "key26": "4gyPb5aNqwkAQh1FnGgsavZSD77GopCmx3pPighgzeEpQHQSSNU1pQ32oEpEWMhxKxJCPVLpVYSygoFxACov3pfn",
  "key27": "4XJqGDaHqqUvA2C8EgksyqP85yJoSK8V2YBjn6ucr9RvyMMjx9pNGTkGbBNgRdBmvp6iHDmcr7EBmZJtsHSPFQnw",
  "key28": "32HGcZY593yPmkmvxUkmimveAVYr3udr2zNZCpycx8n8AAiPwDp8Xz7DJkWG2me9J3v9ns24P2wnAoLUmb5RUsER",
  "key29": "21LgxTZThAAuGETdAAhMyuoD9yuzvxLipbhxYUz5zAHRCRXoqXaidAe4tEfXQnbppNE5Jy9s5tHxqUvQMNrypH1J",
  "key30": "5wS8Vr6cqQU525mqagNcvovYBnZpZvR9dRWk9h5ss1qnEwxrgtA7N1KUconzoojbzjU5d3t1ThCBkRd1uF7hGDvf",
  "key31": "UmztZcNtWkgwxFqdHvaxjyXkrrTW94m8zy4XGr2XpW5uPr9MC3piCRzWeKtVqXV6KBLY9jBeEQsGhTwAqSvyeD1",
  "key32": "2PveGYdny1B2vCF7pZDaXC42KnPLs13ATMfTutBG4W5M73sMoM9LzF3y9iCL7AyA44444xFyk45WzH7bZnLt2CGq",
  "key33": "2MGBZZshLfyk1mTjcdZW6rrw6wJBDnPD18ZArwzaYkV6vcUjDgwE23T4mihf3kWNT3gLRGvoVfYL6c1PnKcg4e2L",
  "key34": "3m91hXNrPMchacRvJpgYy979hWSx5M8PSHAPT224f72FsSxEhpX3GBYJzuALC9ZMLUKYb7T5jYn9aJfmXFnUCYK2",
  "key35": "3zxELk25pNG2ZwCMqfnGozmj7gTtHWW4ArFDsCvAup7aKNwwEk7QeQPZ2LJ1t4ZstYCXc92NGDp9yPp4NZNqUd4X",
  "key36": "66TyaaiCE4d8NyadbQRcZrVqMPuXCvRwQF9NqTR5UGrpHbfxWoNfC3i86ChhLCrvuACzutF4sh6Bo314XmA3V1eQ",
  "key37": "zEfVisCmWL7Y4G9PykWY3ATwjVstCjnrdJNzyJTaZLVqqkWVg4BVBU62EmGj3JDfQkH4u8YQ3L8ZCxFonooo3SY",
  "key38": "2todqAodB9mov51sQiYtEqhu36kzLxKbCqy82taqjX3EETqFF95kFoaFmGqNMeMT8oHhbTJq2FtnzSwtMoPenC1w",
  "key39": "ekULrDVLHU4n4htVYU6mtdXfLiUtipRXzRKSgotk1nPCKro18XnJHSnD7aAKvn2FsYqCZL2SMgSU74w3Mo4Gqyc",
  "key40": "3j5vRd3qTmWPAsSL8FeAPeb8uWksFrzxEZDUym9eAXo8ahS52hM1nUQt7rBazunjWGMRXiziaXfqsqckzsA7NkFM",
  "key41": "2JX9pukFuW65qyXDudRdpVdKUVysffpzkrQFjHn7RD1tTKAoj74SKVnpRXnfbUBkw4hh4wTPK8BzPYQuGYE8PRsC",
  "key42": "4HZk6gQYBJeZMopQYXcuwjNqshydm5oPsDgTMXazYsXJ6QFZsFRU1vjZJzSMpvy49zwAUCZ2Fb2PAPbU2PKZiqdN",
  "key43": "5sgceR1JycgKMJqDNmRyJmufDR79xcvphF1HBuxAvm7MuTuAk9DrjSDDX1fkWhKmTxp4s3FoJCDx1nRtgYqDrYAJ",
  "key44": "3VRtHRbjgFDVh5pQRPP5nhnNqXc5ncjhcY2KAeoJQMwfxwMmhwZHQHCDaPtS1GN6ge38dYxouknVZCVzHu5EUayz"
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
