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
    "5Q4XXPUnJ1ZDs9xGUwtftrUaeXy57iASEh2KorX6W7kRaPKRD6cvxzejec4VMeFwGT54ZtjUCz1ecURqgLSSMVsf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kXUThik2K36fa7D6KTWMbDDi814jL9JiikvQrBtgzgaPYayh46Eg7BLjD1bSSGmMW8Yn6rGk6QGaPr5xq5p6wnd",
  "key1": "5x6W42p9i89qRoGd3BP2poJRK4AHfYQF7oPamvxSDL67L9QFPnNg573VvrwHxcMcS7iferq7wd3taQwjVEgTb3dH",
  "key2": "5WynVoig5c6PPhS7jyJ2tbWXgJuy8sZKgV3x1NpWVAMkjnSNjYMubYDhzf6KjPzKEtLJEneRKUYGUYmKpnWcmrYA",
  "key3": "5ZdMMmQFf8tCYwoX3rfmn8DXy4CehY1H6TFBRkHryJNCNnpMVmuYgdbW4aD3xVU3RT3bwPuHFZnHzxY8xn1tk3hW",
  "key4": "4y5jnqfGyHRYWsj9QhfNVaPsecx7FKnTvz29r2AaKmWYLfMASkYgg4MLZsVcrBthNvHQRcPqrpakVk97Eiu9z5yx",
  "key5": "4x4iShnuNTgCfeHrBkYqdsmCgjBWT9NHbdsL9JVqdQ3saRCDA9PNh8D2PghBEFdbTV9xovzdzQou9PXLnuMjHiT1",
  "key6": "5XiH4H1vor2THEZWBjqHBDpNg2yfgqECtur7zat3oY6o9HR8hgtDqeFujQWhTo87CXkJMmPGjYNEXLQqemL3N2L4",
  "key7": "2FNTNxyhDWmA5zct43pqDLpQqgenesHR7nnFp9v22UJ83R28YFeagkHHLGDUUWinZPEKtQ923yQpQS9G53y5DZYk",
  "key8": "thRYydBZHYQLS7vwCboCe32r2HpBYbPfxncefUrTBWRT2uH8J1W1hbMs33c7Vy63FGs5q6ZcyuxNQ2xLxGTPreV",
  "key9": "2gcfgSQuJFEVnMWScQxZmxhUhQzDfR9juh1nGoh8Cmq3qh5zvHmVXaVEYAofe81bV67u8VUMgPUAysDKP1XhEs2h",
  "key10": "5ReJY6p99dMXDJRM7mjPpEtPebHtVcUvkK7e55aHjgFnHz9UdH9mpJtZwEhU1ngBdVUgrQbEaxGmjp8z5oPie3jf",
  "key11": "3PGComRrbXN31sY8ZfrwGGAsqaGSNHR4Jqk99onpoLFiQQJH8C5VFB6dUGrtGFbXXFGN3jrnv1SK4yBvqhfvxkqE",
  "key12": "2R5WALPmRCtfQsjRfXw5xo93iM9ZBPwB3RBxSJs76K5es7oMyGS1Mi3A51oeP3TCJ1bwGx9KShUeARDRi8UtJtev",
  "key13": "3e64RmK63k4c8qeDbpsvpxpH9tetptPUtAN3rbBgxYAwW9hLqUUnuMBhYp6gTYfQGK1icSnXL44VH6mdS7VeaGGX",
  "key14": "aJWyDnQYi8u8X3V7i4UKAstpPEfxi8DeEbH18wYQtVsBYXS2AkCtwRbmVZCY4dRfJDRVxqMNcdYAFhW1qZzGqg3",
  "key15": "4sc2xrA3ZngsU4Ma64hN5VNmpYBDvMqrMHHNG7xMaKiBWnr6GzSzsrtpuDHvRRgN8kxMimSsTz3b1Y9f4CCCwsve",
  "key16": "415wEZqRz7vdq5CiAmaaT45t7AW1HZNTGzdoi11mPjZkmBXpAh4SuyBeCFCniWmtyAy6Dxgqc3MVGYidtsVudora",
  "key17": "4RUidVNxpf62DX9UGNbuJfAFR4Pq2ohEUSLKjPMUvq4NgtFP7rFnbwk46GqzrzJrspNAVGcfvPnbZsESSLF5g8fs",
  "key18": "67CdowaC8HfCDZNR98Xk4Wj4qADv2ow2Yp37m9uWzf5BJ8dbe7TN89BLxxYZkeKuiCYz4ZwbsKsnbsc4tfSCZGHK",
  "key19": "7qJeyrmpnCfQN94YTJQx4i2pxrF93uEDnYSLi35P4A3zjaVyJLaFNqyAB8E4u8XLrXnpDnX5uq2icrjpfPsJQTP",
  "key20": "4ayHA7nxDoowjz7trG4XoCES7NQpGuHkirgJAp7f9pU2eZz9Rz8DxapXxLPT4QZLRydKAXoWNcipqfqeW6ZNvxVK",
  "key21": "3497ZsUZk4Kw8299UpvgLzaPuhWBKn6Q1pZsSdYdcqfUVuuiLv1xAKgzbunHgmNPyjGim9bV1ftrevDmLwsF5sbt",
  "key22": "3XXV8Bxu1QiUWUtYk1CjuEymrSqAi6uUFcnMYKjudZ2QSe1LMUAYvsFNRodQCXA4bd5vdZhUJB3Duf5ebpBL4DEX",
  "key23": "58fwQMZykPQCZTqj7WPnmmsrVnJSL7rstp97aiTzNFjz4xqrjQGrFVXBJZLMJXCrz2aSH4baxZ4ZETM2AXDysGfo",
  "key24": "5JG2Sg94YbibQ7nbLtLiXg6u5SCb2uVvMkmFfmJrzfKFqjib7CwpW1NYSCP8qShX4Xg38fLriSPMFGmeY9FfzRfR",
  "key25": "4FL7tQFQzPhKkQXw2jLJwJrzgy7Uj573mmoFiA127XQWEuNsywoHugPwkTEUEenXWcREKqfxKCVDgMp1Hy8oU1YK",
  "key26": "5YC7ac2adN6HeMEWA1s2dPxgpBXZrmv5sHkuq1VJwkzRp34pBFZc8pThDkZgwvpa4SwT1E8ZBMo35nktxRaagWvA",
  "key27": "5PRyhwowPqA5sYuJNq1F7wkBpsnUbkgYxwsUBoop9wRxyvYgmytCezWsZ5WXNz6CFM264BRmGMe8jqGbx3621Ggc",
  "key28": "3Y8eGDMAvjzPGGzQS16dbHnjf78tp8stCp6rHwVFhD9GmoJ8ufrcUEDsyX4SxzGQLwcVcAhJUp51CrdEXt9VjfZ8",
  "key29": "4x76nukmCjPmzorGUUPuCYJRxdh1ooPhSKaMJfVpgbnfvyRASEFiQPyKkkUBMg8fjZp5zidoKtQDSeUzrqKioyuC",
  "key30": "3GZqUfAJ4Md5SNahvNptfzjK2H8aDmpadpkWWGofAcY3VZKwRXsKQMvWT241uEB1AxzWrWAtQthrMcvhL3xRe3G2",
  "key31": "4cpHRgXB8eVYNGmMRz5yHi1AZp3zbVonztFuLx58DBwKN6YgaH2Kb8mQYaLhhiyRTjomqeWPiNoCVxQKWf3M1752",
  "key32": "43fn7vLh9AEw3cSV9z1RZXA4bu5BuBx9wVifdXD1roMeehYBndZePuNbfjfSRMewqe9ngRAffdP9SK5vba7jTNxA"
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
