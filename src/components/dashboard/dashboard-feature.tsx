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
    "4srM6pF4LNiJ2JiqBYnpGaS4EdJbdcETPzXrwajaUqpS9bPysc3ADgwdWNukAyYrYUtEbFaktBBzTetbubqspWYL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nRYe5CVNhS8foq1Docfp2n8nkn4UUToVJtMgJ6n9z6uNohewQoGMD5faRWXkxXCFhWEAd8CSjVyN3M874BMsW9X",
  "key1": "3Gqy9j2V8ifWgQUY588xMUN2rNqtM6awzWWBxGtuofqRS5rcjkKzHYDRRTz1rgtXoDNHDpm1Cz9Vi2N7Ey4AaD7Q",
  "key2": "3XPtH4QpEX5cFbY6uvhJo37aZimePmFMjLAeb5oGy48tem7ueQWKGxnUfkEzqUiCsdd8xM8Qca3zwyQPdmGYHFD9",
  "key3": "4uj9wUMQDq6aGKhGpsqzJpWszyjywZVE4nQb4cpsNrD9JT32dzL8zKZNoVZuf518kqAUx3jqh8mQfEKN3XTbkrvE",
  "key4": "3kC9qo5pZT5K1aWfjCfoNLyuHB2mByJYXH26rnHFNtzjiucVjUNwpn4HWCYxt7NnUvWxHUjHiwAH1zwUEeGWt4Yd",
  "key5": "PFDa5omaYincopuoV4V4iC21BwCDQznMrkbD4Fwa587KZgLqZ5vS44PD8iCuWptyC9jPHErm3Kw3MmZzcvLxXeF",
  "key6": "ea6vhcc9oScfD4qLw6EXLZiUUfgqaRdeFNak2yy8xYoxTMJvnwmq6vYsosTJnQFy3L72C3tadWyezeW6u3idfge",
  "key7": "DF4gUSe4zPach4zMFZviLJfvhWRwyA9tHeee8Pp8x1DR8vX19pkugfdmMwJx8rnAVsnhEJH1g8cokv3aiibytHj",
  "key8": "3CVYqfZzvYYUsFwvKnWsUgF1PRfxiZme1FWrQdyyTXQ4rimvSo2fopnp1C2msYzxhMRhtWqFkujMvEw2WyGJLjpu",
  "key9": "3mDfdTSMWDPyryVJxbEwX2gBh4yvApXHRGm61tL6N9ZVwib7XAZ3EtnfRPjdkEiJxg14XKYMf3eBse9qHayaufyn",
  "key10": "3grHK1SGg4xBaog6g4YnpoWisjxt76Rydmt5JbLNUp1AfHHzKLS29B16XHxVSrMs8rkWjKq2cDLyt1e3GyAzkobn",
  "key11": "YwqSD5JCV98SS5A14V7pRm7oX5oriwxftpkhMuUNcgVcTbho7bLpZUsdGpc1Z2eguTsaKYGx9Jq8VKqdMS518oh",
  "key12": "3c2ryEwZh2fGZVKS2hKaiwsFdDAC4zqTReuJLBv1s7uEaqJtuYC18pT5iWKot4KhK7PwdCh1srgBZeT5ULLvk2zE",
  "key13": "3L7n5Zwfhar3Tc9UJh4TJo6LnGc7S5PvDquCCya4sETzfhMkTyhvcK289zuD9w7wLtG6c3RbHVijsJwFsRtzoe2b",
  "key14": "4vXeCHGTpi3ZknpPAY9R2mPR9qQrFBtmxyWvucnY1xk5rfAD7MwLWhmzUt1Q45YzwtKPXoAdmAoG5jJGBz2miFSd",
  "key15": "42r2qAJjquKcvkxL78uNrNvWHXePtz5fqkjLK1ZcGxQR2Lw7rcW6ZkQZx8NPmgkhmP9s42F7aLfZisFuF7ZouiCJ",
  "key16": "UScUCNZoccrDxAFevPmjgu4hrjXZdaznDGC1SyQmVw81V3W7xnum8ZY64aMCZP8UhWnqdZqQATWQnR5gD8jXCCu",
  "key17": "7nizkrRi6nwDihxXoWBVnf5jFE13PSgMBRrJHyCxEWq1q8GFhnLpeMmKzoBrFeDXxvN1JwSZ5mLUbVhQGLDypak",
  "key18": "3b9oUpDEUghaAzJUJyY3gKM2oWf1YiqA13atZ7kFqXfqnsZSEbN332TnYjSQ5zsuyHHuBRYu45KLF4Pa59Uui21B",
  "key19": "2UcrYrVVXHURKau86Tbnyr7T1VEf63AD9hQp5Wr5qu3vmZMxmCWLh1WWVjyP3SvmUmDvfuA67ZEtcYD2tiLLLKnJ",
  "key20": "5rhSgpGu3dPHjPbvyiXs6Ts8MEUtFaV4W4Zp5sdNxs7BvX4BeaRgzbrSwNt9xcjEJRAPu5t4FYArNp9YuKFF8Lna",
  "key21": "3L2KBucN2uogL2hXgsgQA42EPhgMUNaHb2gbHfC7XRsjXsL5Rni6emfdd6G7Nsaa1wRaGZ5ZCrZckqx2hzLRm152",
  "key22": "4rm8xa6Ti3ijj3pbnP3fczYTmqEn7exH4ohWkhZXVyP3zeDB53gsCzLjDJ7FEG7ppci1wDNHjFTCDG38qKRBZT5d",
  "key23": "62z2eugwRuDntzNwqTWKxxcSrzrPzpgjoRYKLNbnA7xc58ep6m5MVUGrSDBbdwck7KECkVyruV9QXz97u8HfF7Vx",
  "key24": "rqpy4koCGTLqRsGkKXX64wfNAZA63qRRZt2XcM3phGm5FwtUsJAhwBFRHukpoYWAKX8TszdNCEfhZJBjMGTpRJv",
  "key25": "5vSu8EfaVn8cnpbh8uu8y3qENULmZg5hFzgufE1o9LGZG7q9CNJmUJ5xJ1gTSPVkggBat3BzyhWc4RoY16Jtj8eD",
  "key26": "8fhkD3wfP8eDZAzbtxd4MAyNbvugLkqEPyiWygU6d5EA52ek2gphmHkePR98U9f8nmLviZXUCPzbmXdxi2uXaXq",
  "key27": "5SiNsAa9wLFT3RVjX8f1S2KcGi5zhXHvrfSFFqUR8zXSg8q31gXCkmaufZuT5NNffcVju6C4mQA31ujFdS4NvAMc",
  "key28": "3pVAfDoqkNh6sisWoUnCYEdtmAxkEeLxcnjWCzDi26miEtrE5ZbeGgjwHfEZfUvtS87os3LAjbWjoYFsE7AH4PXx",
  "key29": "99R6NXFYjGctyfbPBn9KaBXefQDa1t8S6DkeAXtYwaBz79tQrQxWqt7SdgfqQcDG7YxLTxum8KvKHJ3WrEDDhSv",
  "key30": "3q4jC8T9qH63Jf6h7KowxSwu23VGKFHRnkXbx2UTgHxNeLTUvwLcRCxNZZQEYTPxxXSzb37ZcgYXVu9VAmAnBvpX",
  "key31": "2rZSLTMxZQ4nNzhgYT3ycyLRfEhHJwSFkPy8AXo2eaNoTkZj8T9M1ZRgVFh2ejXMo9iWLKKXLMh7WXRFNMTbpWqi",
  "key32": "5XEiDRH7YS54MWkKQYD7rsTbF7rsR4n4oi5ztRh5tvXWVHLNRdNXYiZS5XcKXHVd251wy7TgdRN7x8Ck4iEFg4Mk",
  "key33": "3LeMpgbbad2NkELpEVogmaHoqxT6JcfDhaxXQBU11cvA4mF8Epdfpi27YJrHo6iRdrEkvy8Da4J4uWCVp59XSN6j"
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
