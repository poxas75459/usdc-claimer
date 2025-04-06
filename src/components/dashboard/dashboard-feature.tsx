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
    "41vcwLWpgmyhqFZ14Zo8yQVsQEsrPuhXTgDhzE2Cd4eCBYH2cDFV3kEmSsGZqGFLCxHMgdTX9nkyo7E5jj4Rg4F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WYFaPtC63jMAsE6A1V8bdrq7KV4JsESRexjU3zoh3vhGF3wVJYDyRAEhG37Uv7Wpcona6tCZ8HETA6XgqhZxxkM",
  "key1": "2tVuvGEjgpwxA5qsWXeJgVUuz58S2d26ARGi9QFcLJoDpTnH8nuD6iV6NLGQWHgwp6mAc9sCo7iXtrRugrGNLLNr",
  "key2": "26Bx2HuXUYPYBEqpKMpizPyRUUCDu1hqoKYYzEGpQLy9CYVgjuqCq2c7bnDS8e1EmVuTchPs44TaBJ8vRUyfVHL4",
  "key3": "2grCowRyR29PS4JaJAZhXqheCT1eaJU6fzHBXqsHomTtWw6beBgUzBDPZ3szPUKaDjMPCwz2oYryTJPRkEaDndea",
  "key4": "NiT4d1zGLMC4zX7Cs3vXjQEw3z7myiEGbB5o1H5PaMpGuy1c4VnG8cUfu2JHFRZrUL5T67Q7EniTJzuTBVSLdo9",
  "key5": "5U51749FQXxvKPi9t4zPBxCyTc9uGiaYVzm48fhmQpDWSMV24yJJY1cVtoCWb4bzSt3xsTAfec3vDi7KEQ1kQNn3",
  "key6": "5sJHtm3RyxcuEzbhqYFQm6A3SzFkB7YbxTPF9k8pP7RrQZJtE6eJptokyB5yrmPYHNWsWvm9XL7RYgdMNG7rQVey",
  "key7": "2e8PqrcYC29U3foU5gXyKfFgB2hW67ih8MzhtoUrE94EKqKQFawwqTf6pWzRiqF6ZYvoJaU2VduvsBxkHLQbb7KC",
  "key8": "3734yLAKVBRD3frMSTNRE2EetiRZ9Z6BvrPGggyGj3uY4JVFFrk8zsfwYotw2x4QDEQtHH7tqsWATrsAuA1q8M5U",
  "key9": "3WXMnE5YbyJztQzt89FSck9y9MmKGwAoATumkrSvk4Qn5xsCYqqWCivkwGL3VFYna46h8YxYUz4boerEwBoxSKJQ",
  "key10": "1Je5k6wXfjSgirHxoaSwGCx1kDF5cJJkhueTF2vDe22T176ao6rUKvejvQP8Lnt3kRwVzHxCieJti9cVDrvw6o8",
  "key11": "2YtjZSh29t85UR8vTSfgEbcch1saYYpCk87seeWRyk9Jq6MizY5kWR8bMNbJArz1wj5KGsxnGnK2EHcLNEGwaJBv",
  "key12": "2VSW8MLetfnqwcaj84nRgxeo4MBpw5WftwaCcopGJ2WfX9BqyXQcves7yP96P16uFS1bohosQiKT3tmVY1JK57Jc",
  "key13": "3Wf7ZvBJEQxXT6ZQoLbprBVXkc7aeLve5TMCaPAwqJvsNEYTn2cBRdDnYGn477viXNAJiWMkY6AAxLY4RKtdtrJy",
  "key14": "4gExaEjDe7KqQyDFjYTnPXQXLtE7qFFFK9vJgpSKFiwWkWxes5t6C29zJvAKuLe8uzQg8UXCzRbKKtygAV2pNRbq",
  "key15": "65gLXtFPUxnLr6LwUQrSjdsrxiinMZ8y6i7rR8iW5cGNEt2HAoxZ6Q3bsmgDtSBw8yAMX6R2gwPy1TtrwReuusyo",
  "key16": "5xwATmjPEwvqBZaRRUEPTiAkfGU2gRvmhQooZimN9tAoywo3VWTKSa87coALeZ6EyENStQMtXEZYmkurB95moo7D",
  "key17": "kGK2MhEn7hzSZwgUSH654uyJjbKNQuKLgpW1xAojQH8o5H4EEvXY91Vsj5q57NBcW8aGsWufroSJp3piwaSXA5u",
  "key18": "4541Q8huJtfZDcY9MLLL9gNBdrTzGaUYnJZBe3SYi1KMgiLegE9tdPUMZXPMDcmpWqKbsdPWGoYtj6fwWkrf8oib",
  "key19": "FR2Y7zsPZMUSELvEBTmikAJg2pD4Zd5xts9riVCXLYQLvBJqTa19hjwXiLmVRb8sJ38MaKFustHi8T1eFf539T4",
  "key20": "5c18v5hEFhvCNGJbn344oqvuzDK8iE6huvV7MDywKsBGXJPCn9QzAZJ9FHAGD4PyE5Bhqk9TC7M2nLcdPKzNbSwG",
  "key21": "3kHtaEAqS8sKg5t1d6EK7u5ygPBL3TaS1Mi1ULz8JTurRGRds1QXqEfpgEtSiBXrbaGFXCVvvafcXy4fL3S5NfTA",
  "key22": "5e5sHFWwsUPNERnkBoTXTJiiAqS6KfwAXikB4k9qv3dF81cZpQ59T3m9APKVqv8WACLf2LNvUXfxHc7wj6qYEN7U",
  "key23": "2fMuHVk5vtN57ki1TMYChXd5E5byybAytpcPNQaMxGReRuXSbTPWzhQkCggFuFHGdpoPhUGjMrgJE92JhadNNpCn",
  "key24": "4YRiVyB2vkv87AtGGhZdytGDr8qbHbtoBfnWQPYo1mG3wp8AUvHGLhfyCUeQWg83CfvzoiwQvhWg7xP956pZZ5je",
  "key25": "2eZKNATtafnxhDMewhYKce3HvHXa92kqpk2JyBbJfVD7inG3P4YCPBzbeD68NSUeHXMSMkWEKmfaubbj3Y17TiDG",
  "key26": "59johJAUfWZAVJeMJvbqCSQ9pDEdqrrZKmnwm3MYkgBs4gU5BjzER6g2JxUVhE9m5yNJScfuRT3GZgErvUEYp3RR",
  "key27": "4Uxu8GxYKKN6bZ4u2Nex6JSAjVZCJV6WqjzKSybroCAk4cJaNTc5PzPEbGhaJoW5W2vD6Q4J5Fj3i9WUeMkXSBii",
  "key28": "6789p53zZPo3R84oURNJCZnvaENJu5qPbdVHm21QMcxXSZjoFkC11TSAt9FCJsgh3C4rPjxuzZfaQ817MuRG1YFo",
  "key29": "2gMAAyvmoUgf8Q6pn9LdNwjkTVFe6AvMzTC9ExhsW9hDg3MND3ZRH66H22bSr7L75jsGtxqCAH4Lw2QAUTxReLj7",
  "key30": "5VhpFBXJQCjZXs3o7H48pt5MkrMXRpGXhFxZULukLW4iVFWTf2hqSsZcokhjWuZkbw7LDFtqWYHtdNpcsoVWkwQg",
  "key31": "38mr9YdsaVL6meCzx8tzz2Vv1a633VRpDjRbaM8WDD4FqxaDdqxVxwvtTTaXtccNvBEZ1ff39NVHdz5134Zit6HR",
  "key32": "RDeW6YXGCzRYTPuoLUYYwF5ri9LV91Z8wUGE4w2UPa7VU3VwxBLndWBV7GwNE3FFoaVzbmXtzVMjckQeecQQYS5",
  "key33": "2NwxQscLejhiicarpdmaVsHZNFczWnYaHqVcusKBoPRPbgoETt3XSjKpgabsrUwTYpWcVnVFBPVigx7ATyX3kAP2",
  "key34": "5xUXj3eqtTqkqbKGrJf4EQVLd8rqpTSAdmXvgyHwoaoY9vRcGvLgxNUUhzFSodQRCP53zYVvSqCRhZP8uDiusuCu",
  "key35": "5u187FutXb9ziKsEKPexyvH4PaGPYtCoKUC8bJ53e4A25mL6VEezGD7QqdLVQjBJiBs2q8RpHmHdw7ZbEEjbR4bi",
  "key36": "tG7ZwkMz2g9ESEsvw8QZxtFixrb5VMnk6d4zzqabXCwuEz7dvdvUwLV7msvE3KHrZvNftA5DN9eZ3yUqc2ELcWh",
  "key37": "5n2pKHup99JRUKgvrbjKUyc32q4vfvWnq2X6HW9CfKNEudTjMbB9WDN83h4TLQWAMoNLj3ts1Fuon6t57F6aQQGZ",
  "key38": "66DnRxWg9cB9WnAoeX3WQtNMx5TBUJqusPrQ2u7Px57WDNvPDNTU69VyUdM9w4BXfwgzgM9ELBjF5zehPqtcjDkh",
  "key39": "5JUHbc9P4pfY9Mud9QSp3EzjnmKPahBbUCMc68zX8BW3K4WGuiRqXLRBakHeohBqw3ok5bLxTLXp3sCfBiBmSs8j",
  "key40": "2YS9e8L6L2Lbn4aWjxCYuq6H6wm464scbVqwMC9gg5FYQR7yrd4h3GJBZvT7dcvfnaeLYKNWothxNBhFMP3i1LZY",
  "key41": "47MCdBCwSdLpBkAWJrSBmB93KPz9c3CEfdv2ptxGpoS1C4SXkbDBosUJH94CN7ewQtjiYPSHr36usR8UAmDEkv6r",
  "key42": "aCKGhHC81innj1QgXsqCdEfu3qCqJunjULnSSCau4j1Fop699xdDjsDvYJvHxdQKK47cxkJHwDpkJbRRtBZfedE",
  "key43": "4a3Rb7n8Wt7DFk6KZ4BxCQ8Rdgt8UisjcAxmc2hPT1iAu82bpMSnesrM7PTQN4ZXwnbZL1XNkebSx4SG7GyTZyTT"
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
