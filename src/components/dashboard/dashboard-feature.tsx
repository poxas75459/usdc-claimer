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
    "4m7A6Dw6GBD2UfMa8WhMAYevr1BdLxoMxThpuzU92kMrqBbfLTmZzWqLZZEKGJ9dyCnz6Eef3wPnm57bsyXthXHR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SkRRjt4NjeMR5RCcDjDyGJismggXnHfoMA3jdtXT34mfNGBQWtLukGqhhh3LZcwA2KZRzwevqoaBst5puVq9Fun",
  "key1": "54aAGt4NuFRxKzT7WateiSuGvxJYwnuk55Ct4BVnbBjqAU7AYcEJHAtFkMTg3HBqu3tbQ6St7SmQE13Yi1iRRLSF",
  "key2": "35ZAfuKpVsjUzoDfUJ1bh6nPQtBufGP8c2DU6xM9R83iR1UpnWByL6KSWap3ynfmv2zBwZSEQnpDiuuwTjFz5DB7",
  "key3": "4LotVJKX2LAQAFCP6LAwUBfdKLH41ryEmnpcmsfBGQeLBfWBUse71zQs6wcfXa6ZptfyAWYt7d57em25zQud51bY",
  "key4": "vhm9WGDBkmLkcK1DRwT3jKEwG1RwGLnbaBtckXKsmWGBYqrWqhkJKkF5eV6KAnvG4Kmn2RsfTwkF3VSc4BdxfYt",
  "key5": "51YqXvZjWTu3bp6NsrizVc3YvC368DnSvix85qhVvBNrUhq6fsTBcGxD7FVPWKw76KZXCLeNuUS7PEA3Yo5tQ4iJ",
  "key6": "5SPUa9VLSqTXrXA3RPDAeyBQRv8QLLmVncjsJ3MgQ3zr4cQztQjS439EMBJ8BXDzjJPUnmnWMJgvQpK1khTLLB7u",
  "key7": "2jr68peAcAhztwVASnUM3q2RBkMWtPsmwFcPChTNwuo7pDdUiqZ8g9RG1TD35ZLSe6HNYuQT9ZYcqc62yzi18caT",
  "key8": "LhBzZDbzW6D7j1STL5ACnHZUKQUG6bjLW293fPtfwsGoX7nvKQ8mXNDbQwzXNemLSX15eNB87vcckRVW9kcTV96",
  "key9": "48v4z9Q14HvohxFiiKLYoPF4JpiLysbR6JiraDjCAGd8EEHrsb5uCoSCFaCxmZbQfhM9mUDxER95o6653auNWaif",
  "key10": "4CB4jZhxJkmTYeEdUrKxZiQNFLboGjC6awmZwkg3tZ92D7VhyXDuSuz8o4HXqBrEFmDa8HZzCuNtihnmUcf5YBp6",
  "key11": "2W9sAJ2BxQ7yiB3wY3C46xLFDPnxpnBuZs7vooCsSZ3p2F7GZNVb7ukRdi5R3NpdszyuFiJPkkrZkp5iy2aYvJDk",
  "key12": "67U3tcmk6UFZDH3sZZgLfpxEpqZw2CSpTY8n33JQRf4LNYgwhtRsQKCb8QQEPaCAHSH3vJbmKxtXVePFPVbdbHZg",
  "key13": "4T4VEDtTpCdvV6iU8Cpiiv5dFvMPKdUjWWEQmah7cTeC9jJZPouhGHbBRqGvqm4Fc7ZaGxMyMZYPf8YQBq5CKpqK",
  "key14": "kV52mN2zZbVuiHwnbDb7hdvV2zCvCCyUHhaHYvw7rXcm8WqebqnHKrQRUFbcumUc4DuAFfjd2fTDyjDAJTQqz6Q",
  "key15": "57y2phwoPkdUBXbCnSnM3NkrSq5x5ZZC5FDRmSRFJVzr2RSDfsxcVj15ZLQBWBcMo5g4MCUMz36WGyWtkV9LdTDT",
  "key16": "34fTnLyPpSb1q2BiRnun3oPJdWggyS5DsFyUyJZdt5jvmh9WkhzUuFMgheqmGbHawz6uTa4j1LryN5RwCRcHoAUL",
  "key17": "4k7FUTT91Cr2BP5g2cj8CF3WuLCtEov2RtTXfP3MvyWKSmP8o7cR7Sj8bTeGT1VmMos46B8Pnuw317RbRWB85AEm",
  "key18": "3fpz8vY9HQoPhEe8PJxw4twRuzijRaDqLkKqJUBaMndDjb9nw6wMMqro7BVHu8bw1GtzEJGG8Up5TUVGxgtRwTLr",
  "key19": "x2aGrNKaAqLwif6wvj1HoMFKGgXHRhhyEXhukXScn9P5NQ6cTEvtNNjE9Mbq7x3Ntiehkv8V5RdkPaqXVAxASWt",
  "key20": "5F7Bhy9eUDVNZa1FBcdcrYj21rQoM9PzNWesUxLsKxHXuPCUS6xh1jXy9g9faWdML3ijsCDB8N2aTeQacaCQ7rUB",
  "key21": "5WSxmEuNVrPRcGVKQWaEaAemnh4eAKxz82xdH9tQkUSUhJEy3Sr5PeknpNdUWnRR4a45zFJ3BMQJBw2dVjUN719C",
  "key22": "3CJ49UGeps9nPVWx76nti4cJxN2uLCjiEw5uwJncsAMgaUHpVw4VTxBwjfa8undqvmsfrfwuV1wjhFfDA9XBtHpf",
  "key23": "2KAKjyTV8yoXD7dzPoHHXw4qE2b1brRiSBPBHUfJUrp5zsDpvLE1XyHpJFCp4Ju2MuzXu4K3CjKjk4uncQ6s2x6i",
  "key24": "46jn57QG1hHtJZaavcWeGcMV4GBhQ1HUU3hdKckShpGVbfg7FBjQAZ4CDWRxSZvZUTR5GgxL3ZzAEiY4akDoMiBe",
  "key25": "4rejpmgBG3Gorz5KaSSbPWKYk1jnVFEzVQNZ32doSSBq1aKLwsBofuGmrULAG23No9GyKx6mXwJbUGeHLcdYEdgL",
  "key26": "2pGqFpraKFxLzDww1Vt5yQn7JnUQH3NNxFCMzxApVoDqiFgqvw5kGV62kCkRkJNY1o2YEpNPYWvBnaRYn8zZsVN2",
  "key27": "5WKYuc4E3s1eEYFJ8Rco7T8vMGmyQDFdhLN5qTpoVwquWdLCqAgBKPNzffi46s8cKupmMVENGqTx5QDeGGxvSH8n",
  "key28": "KJoj3cXvM8xTsmrw4ah8AYFqdUv5vhNRCDTbJQBLy1TNAuABzeaMBrweuaDT1NSh6wZ2evfCgxwxRoUEHN7dxur",
  "key29": "2qcb6tHZp7i8yueiT94mRvB6efXwijn6QV76aPCQqrKMLLtgKbUaydxpBwh4KWGdMGnNS2W1CGCQBa5JVkUQKQpr",
  "key30": "2uwVpDjyYtF43FW4C9UPa8uq4ohcRrsFA3bZgu2PhNWjzutZLxyRGVYdVh3CHgHaYAuyhZjXtmQs4vzsQNmSq3c6",
  "key31": "e13iuSErGBthGZmuTyhCbn9owWgNPyaXeQEQuWQm9f6kb9PghX29NHoBU4ffEzsGzvZHjcBuYdoTUZQtMnoxmNu",
  "key32": "57Xry9KD3kHUKFCBf8t7wbUAyj8vrSKMJRobKBRnakbpWqc2BMY5fpCWRpATyvBvmfLSyVooBJ6J4BWZDt5wWijn",
  "key33": "4SrXqrc6UHie5Ux45d8d2h5VVXAkc8n4ZpoSbbFkAfpW5eBeBbvowWiegQPrvnxyLmyj8t4nxyUZdCXbs2ECccn6",
  "key34": "49SJVnHsQAvVskUxzznbNykgxvqvbB8TAghnXWBgZUAidkjfxm6MiRT7pLNh3Z4e18Jy5QDorBhpRfQerTixuHZg",
  "key35": "3zjwn8ufwkb9TX2otWuYUkCpvQ19waNR7mzGfGh3wFobrNS1F841ESth1A7XMewsEpMsqsgTKJnK8yEoR9xfNiM1",
  "key36": "4WXaWfU9YAUV82A7pzfJJeLs6v53b83kTxaVA2jUktrn1h3THXaqK43p5uVy9Y4dddcMYE5G8M3eGFUPSx8mWTFA",
  "key37": "41QcSkyS14R2djU11bEoY6Ths8RKyW2BsJBgrDFCh6j2QfnH5YdBFSwx4Mc4VoZzpyLqy7ZoxhNhB6a8GVaHcJ5K",
  "key38": "3UGboDrmMrvRsRJXmr3ukQgvtSGQxjc7fj8zgS6YWNbyVirCbdBNZWbghhNc7YyBrue4yVzDcBwGfp47CxgExmBu",
  "key39": "n1vwuLh6eumdxP4aa5LZ5PYpwzVTyAx1pCcyidiL8AZmpSdNxrysXjW98XYXkQBM7LacujtuvkwChyajf2pL6yN",
  "key40": "2M6RyJ8CDHgmcqUyZ55QrxJXj5Z8V8wrJin3mDSxBHRdwiK3nBRfxYTohxk4yvuXUKGwoE63b82h3biEiWYzWjjq",
  "key41": "9A1EMce11NF3pNoAJ8iRUoUZ6JGQjd7LRG66uqpq4oPY1aKKenPeBrXCQVzffiwhuMnoEcs9m9gm55oE9wixGrM",
  "key42": "3w8uep6ZMDk3595ZT2bhvnuKq8Z6Ug1hCjcQAhRyFojYWhGZV7XURTShK3RMSjDJMAmzG9kJMVvAxxVGuSj32b3A",
  "key43": "3q9Y3qNrSwGFYXd7BJ4WyFGz7t6fukidQ8fQr4eN7R6FfrctmyseGYG2vfyUr9pz94fRUwUA1SnaR4tKE3Zif8z9",
  "key44": "3y2z2Tdbg8MK6CVwvjeP5ScVAhRN8XgQ3NtWeJDEovMjtN2CTvxogH8uyhmzhpRVwrszrYpvMiakiXT5AssqRSso",
  "key45": "5DooKkj1UxNLgY5UZj8JpdxhomEC9sG3N8rF6B64Hx99R4vqkZFkqxSbnHe4mJt7b2RtoER4N1qgD9Q6RhjvXPcX"
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
