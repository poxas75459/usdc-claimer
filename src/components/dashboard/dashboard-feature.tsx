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
    "3VM7kdYH5R3s6omEpkBDwxB6opHBd6CKigeQs6XZ9yhCz3moFn9avToQ2qoxmwAduBSUoih5exKhGEP1iAuyUVDG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fB5yf7CgBebUn6J36PpbDayC5cbPAfMAwsjsNCgdUN8NdWEjnfWS9YWNyjgeWZyJyZfDvWWKaMAoA6psKx85DYM",
  "key1": "2LA78Gm9iw8n1jVTvywYDvyxBSHoHbe4XvRwEiuEfuRpZwYMqtXsWcBXkNnBqCyzTLhS5nHcfLvxHurLzFdqhKhp",
  "key2": "5sLAbjt9BiuGopJFmdkx17JehKF1xTZ3g5qDBw6oUbYepH1Hwwwbn5efLrr7w5CMUndBad2NFwknfdoTZFD3uzER",
  "key3": "5KZbW9h827965DeVycBnF1ggp4i6q771jMJssmZcpFLQMX8Dtmfy1Cfy5AUNDbsgdqJ2uu3oc9yKdDHDbtqck2zT",
  "key4": "baJcMm8Rs1f2391gwKNDTTDUFsd9aw7JsV7g2oVrvRk5CnJtME4QXkiZNUvgZJDKiwN2Ba1pUFyXF8PDcs4nQ5E",
  "key5": "5rjeqoiuEubFynqA98t5UJxLcN7nQ1YYZ1aBnsmsuuEFauGbHnL2tv4jtfvnL3sPrd5M6HDQQNMeruXJSKivdKUy",
  "key6": "B6tYL7bgZHK8xUUcYHWnAMSwHc4GNfRJ9Zb9y1cKebVirBAKXHqEcJjdK9moeTfM3ZifinoB83sDewhWcXDa7sZ",
  "key7": "3FPw28vzUSRPnkHWvdEaMPbQobqX1UPoyWNvT986KgVZkkkzAa4WTmg3reRR6yLiqVNnFPRbtnEWtTLGYyHaRxyq",
  "key8": "29zv5RG2ZvEWYQUBZUg84dVicGoTeuew51L8RYAJHvpT5NtaGxNcf9rj4CAFJQ1uEFgujE5RAmvGQJmgHGSFusat",
  "key9": "5vpSz7aYYef2ccp6ZJdMQwKncvASxcYVN2HCM4invhydUUYQzZPYpSuBu2DcKe284nWz1AovFsjgcNXQX6b8wr1Y",
  "key10": "3z1LkzhG1i22EtaGFVup48A9L17VuaVYGm6RjMAkYEk26GcJsQcTQmrsZVQrME9e22Svct4X4ndm8nws2UFdmmEr",
  "key11": "sNPGAeB89zTw3g77ULSSKttJAzkp1uftYBpGZ1N9YWTsneThKbcCU9o29u5ggp5tZQ1HNzSw6Pjj7M53pc9DLcS",
  "key12": "GSifmQ27rEx9Asfx1Vp9jQpS3h1wUS24RkovJfKynnoxBP1mmiRJ2G2sdZ5xcQ1t3iN7wQUMSwGoARuDhp9pezX",
  "key13": "yRweG2d62Xz1te97G5F8X8zrtpndhE1YWFQAxYyKcnyjc4AFZyPiXBbSikT5zCMqWKdzSVaxQeZsV8PtkwJ4XNy",
  "key14": "2gyVRvXhRm2SmZHUKvL5PE1ejjcz4rtt2qpySAqhXi81mkM6FMYeyo6fXiF5nfYnwSH8by52yaJwDQGg5oPnuoth",
  "key15": "5uLZbQFE5TqZ74fhySLhXrrSryGX9epJdan7cr4VxffDWr5V5DqrjR2ryGNswp3dGUaEtT7U2z2a6oWbYkQ2qiSN",
  "key16": "3C7PeM8CY6XwirNvNCcBFr4rx2oQKv4N1JXiZAWiX8b4MUdf9zu8AM54PQuvezFSXZwcXxRk7jPVCjkqQRRLVLza",
  "key17": "4iie8AxHqrro4uc45w1y6SPYfsdVRF27H5WdErfvbQkwztHEYUFLXXjvfzomVV2R9UTHJyFJDkxPBWYGBpEmUUS7",
  "key18": "495cUKXLewhsJKoffCg8jao8BRhsCFNPJEPGi76GyPfiwQZWwYGxeLzQ7hUmLg7ZfnZGju346kfxnWwsfqfRq8ev",
  "key19": "4AC72UTJwHNVp5gtqaY6pLW3tbBph1Ytv8YXWxwTmqzxMjHxhdAyYsEv3MhD588eXGH7pWVkx1ASyrZtLVFFtSBx",
  "key20": "3BqGy9oLbX95fUMPNTHG3sb7tDWxxhJkb1gkL6CcQSUQDudfFksYkHyY4PEvEcL4cA5YnNgSocZmbswnPpqYNGS",
  "key21": "4Vq1MohfWiaDUFbFALcomxE81MFTCX9J487dZwZVQPbG56yvUxr4oEmjkAR9ScTBPDSyNpPSpdcpgP7Ag96WL7N8",
  "key22": "H72KDUkhASBZgxXtru3GFPsiBLfpkwE6X4f72WSkGRk1JuDMVaxYaUfNTY1j8sPqBDiHuhZdczMzAywNX6PDLib",
  "key23": "45RLnSXxGtgPxXZqamEZrdvSuRBwGRBmRyjCcCZnXqsLqcnsYJHoUaoUa4Bm6fVuV5Uhh3jBtuvGzsXfEHZM3jf",
  "key24": "5R29CgcsxTgELno4yzWR6BVcjJW7JEwaikF45wnjE7EwxWvCiHvjSh7qNsn8oevxwzjxpT9fyKyjUWDXTtfT4WBt",
  "key25": "4MZAHhW7BxyfQseh3utSPUepULRhL3HKs2gNPKEq8maPPU3FfTbEjXSd1ERDn444D9tX7k9MgQjAMkDcKcJDUK3b",
  "key26": "2m2ZSMGU87TgduttDadWCgFDxvYXzLue5CiZ24sia4XQX8672DKgesrwiomS9ZrinE9zuQgXmqqx6tgF5AWWGT3y",
  "key27": "2WNHR62ipAtbMib5V3rZwpBa3gWz5yZTGF995up9JYxJErjhmFJqKwb3pmm5hDgUHzDDWt1Dd2nHuR7bP7K3Et1q",
  "key28": "5czvxYJ9HtWgKYMSFcu9FwmK99e9Cyotk1qd3EsP9LrLK1xrfPcmZ1GmbSCghcKzd53sMbLc6Ro2ikjRJHgtGNqj",
  "key29": "2L4cTYNHpAkRpErvq6kUwMsCB82kxizf8G4auqGopQv4LnzXapaAHWgp8o6PQh1fzUMC6rxdaY9kwXgSsugP69Sn",
  "key30": "5VbhYDsFZZx5KY5MWkN4PSvmS2xkQ5ugnQBxYwvGUq7zcr9YgBahPTUNniN8YbLea8nrJoW6u2m33bJfUrkYSxWS",
  "key31": "2dLMqe9kCMfWB2Q3TY1c8o4AXj1Yj9a6cTE39E6YAzBDNwN1EVCwMZvFRcUGULbvxrWgmaGH4ZkziRpsiABCP6uu",
  "key32": "28tntWTbTMv49PC9r9a6AoNv4yw3tjCHdvwPQGgg4B4KtvQbDVz5WgnHMTbr9mHU41gwNDvLpZphcUesy88oRyky",
  "key33": "zsAPY9joYpKqg9oUJ19vwCu8HPS9jtazQpfjdEQ9QrkswTEEgbLN1WCMdVt1S646vB6NXochUhsMzagmfrCjum1",
  "key34": "5Vic7QQEMuH5C8wihw5mojs7h5CaoxVzr5HkUcLYu9dTWzjcc8GqJvpgWGytgM24BgJvgfPgSkxps99AWsvRVA1D",
  "key35": "5M2AnK2cccqaWRAndywBrPRNMoSjULzXtCDHpwFTVUcMRkBWkGQ7kaR66pkby1fN23XEjn5ZWPRZTnEHkZPycCLL",
  "key36": "HQE8UPUgCC9de72VkFfnB9uLxHiJir2CuUmoioqCx8TM1vvVPexWoa3GnSrgTJA2k7PbyeBZzYzUSmGd9yFainF",
  "key37": "NQ9SZYjVTTdn1aGEzUMQBLYwWi9gvyCWG7KguYVYee7jrtxe29PY9u1C9skhedeu22e9mwbyRAtTZpUAWgkwjZM",
  "key38": "bCQzPTuhcB87B5NU1dRE2PB5KvF5hRZd3CNcJaGxre1gHFz5AcdxD6mkXPnxyFAzivWUcpa3wcXe9nHX6pMUndQ",
  "key39": "25EG9MbMmbcqKXRUpc4X3Yt9V4oV8FU4Y7RneY3H6pQa1CcQLyjtpANjuRd717i2swq5No1Ao9uUnU6q374q5eNR",
  "key40": "NyJtGSxrvMQY5kg2Fkt4bZ266LbFXcLRSQHCMGhdUJtdWEEyNGZjaJw21DG1pwMFH9FKLEnow7Pdea233uvdsXk",
  "key41": "5NB5Lbt3ZK7MP2YV8awhvd5y4tdj86sGmWYATTCNgBKw5eLRD6kq7unrR5zmDjXZ56afZN3PPo4dvS9FJNuojTTU"
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
