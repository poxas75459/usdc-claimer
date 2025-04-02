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
    "51t8hAeGHpfnp9ZUTGep9nTAQzoPFakZADJ2pFmR5629FbYmVgmwNfPVJ9wXs4By57M4LS9ByXbt7hUnMwBZ2VTa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61PqLXwTNAVtp8dZdn2GFrMcZLcBNHF8sChF7eTvRDtwuutsyNYGb4537p4D6kQw5AV6KGchrUn3FZu4KP1JtLSa",
  "key1": "5CAS18nEknjvRkvsukPjNSc6TUwwHCLFiaW1LjvzAF5uVxkao3FQGwr63it5kmwdoHWDqw5G8LJCrMFvNhnbVbSj",
  "key2": "26rmZVkqPEzB32r1VCU3oKtaN88EiJCJbjSE96NRK5MoWeWWgVPkA7PbAe7KfU1oiWemZ7aJdUGEvraYE728P16A",
  "key3": "5h4vVE3GtEgXN1LmZawM6FcG8c6NiCMmab4edSqRYdZfJd7XcDHxxaH5tqmvDxY2VPf811C7yvA6t9pVuw4Szr5J",
  "key4": "nx3VScAk645zRbvv1QKj95jVX6Wu9zZkNLRAkQp2sEAqcSaZEcbGHgQ1sAtFoCi4yruBkwsSdLStwkMPtMfvyAB",
  "key5": "4XdfzunyWmDunTCr67LiEYRHgBUeipevLfNNGXET4yYvoRrPQNXm39UGtua1sXgZVZaHxLLpAuM4XCHpd8MWPXFS",
  "key6": "mapXuQP45cqNVyPEhAY6HzL1XKKH6WkTtViSKaDijhrp7n83HZb4L77PySnDCJwnybNWpfFXX2a2RWQ7Fsu9DSx",
  "key7": "Fj6PTNQSGfmxtzNH48gYFrcjEFKKiDNKApPZqdwrB6mRc5nJpbKdSHeycb8i9gr36BQaSHiY9NLJDd8NYExFNz3",
  "key8": "3F5W715PM4Vj2tDJEYTZo5ZCxVCo3S5wGsEkbNrC69KKx2aVwjLMHkMUvZcHA5SBEHAM4zfPLqg53g9YKeqenEkQ",
  "key9": "3PWegy9t9gj4vfp6xsQxFvY41r3MdyyVk8yAX5usbQ5hQ1Pkg7tB7sZnfySMfSzX42JPceGvQvoVVMLb1RNJPfa4",
  "key10": "4m2ML7wBGUq7bE3Te3qFDqQTipikHDq7SVs33WEybnBmMjoDGRqQPyUhrW6GMbSoFA8hizTbczboCLpMstbdxUxX",
  "key11": "BckEoh9mehRYKbYFhavuAMX49mDCgtHPQMiv4jVTkDR1tu5rF8gLxgeE4y3fw8pP726HgJJXACNmLXNPp5mxZVc",
  "key12": "4gKDgfcUPo3ML1iKZwjHhuCpRMAu1kCwrYp4DeM9DRfQBgrwke976eZLNsNJpkAR8YE6YKWAgPbAfb5PxbP1v8wL",
  "key13": "4biACMr7K1ERUqo877rx7xcFRsP65FzPXudTqZ6BNm7nR7kVZP7V5dKPsJymuvKyV7yY153L3ugJvyqiyeuRmUfS",
  "key14": "2ywKbSvsWKUSwQxXQto66HPHhnvUdmyaBPbEzDnHC4zfix6StcZhQUKKbhjJnGW4TtxvvCuHkLWXsmKeoBGhivxs",
  "key15": "GjxxXQWeUkQAcr6Htez5j1QA2ddPC5JFiKSZZDh9XcWhY3cCfzMKTGGttnUnmKkjUNHv1D6H34hmEjHEgUgXK7k",
  "key16": "5syqumR678zn52QmGhS2Bqdy476Bw7h4GwvLn2yyz6GmEgRrFPRQ8SnVkD4MMoo8f8TP8GXT43tSi4kUXGLmV3v5",
  "key17": "2n3pdLH293rKvvcAxvY3pgsyoAtRXpmunafb5yMkZu4Nb8L8dmPJiGrLxiWmTPG4nGm6fidgdAQG8kcV5WN5uX6d",
  "key18": "2sBBWjNezhzDr9EbK67CHgweC6y25WdYVtzaWTYRhHDFxVY8EaUp5AFBqATjf6ucXjZygKzEsBMkSgSu8EwYTT5m",
  "key19": "5S4jFLcNpoqnTN89AY3XNBtUeKSi4boBMPxv2S5DD1gniie6o8c9mZ6cZjoWpwBVfyQTXQYfdAhMZQzyzt1XDrUG",
  "key20": "z8vHxZG96VoFHCjfV6uhexNxngtyrvDTRHWCHSyEwK2vDJeQ4FNG4a7aJ7uCQc8B2nL5Vcs8uVokeUXoTWsm3kZ",
  "key21": "2fUnUq7wpwBWtzc7dshLGaqTkTBUgV42fJdnWPzNueKeKmbDW8wGZMZ1mpuPkzg1fZUnQh4HiCe8svDm9JiLkjDq",
  "key22": "VXS8GYZCfGfV2wh6vhCp58fhT7KdinW5Q3vwMi8CKL81GFSG8ZQF9Gghsxr3rzgN8qS4XxA3CF2vGU4QkhcYoJ4",
  "key23": "3koCeowHvxPSyXD4ejG2sEU5B1RhpYv74UiwVZTxbR7U2sYjDAR8Co2QBXTMN92V5GkU6ScjwvQdk9mR8UrLZVF6",
  "key24": "dBTc262aF6mW4zMjeK7XuXQfJqPoGHDUnAnEbVXuVWc1F1KsffQjRgntTYsXYaHnu7WJFvisjYTXDW11qRVudR2",
  "key25": "3VkfdSZ4JvNgoQXfzFsuJBJgnjrXAg238thW7snB7F6M3xFPAVafBQnFkSzsgAHpU7e8qJABA1KRKv46TjdHwxzK",
  "key26": "1Ee5qKtrMWAWGtWhYwKPPau63fuT1pCmMh9BJgZ95Sxcv3X4rWxmtPgPuA2hkhzrVGjN9h6ceNXa2UnvTUttoGz",
  "key27": "XqZ8PTAGsnHuvD1U1trRu2a2qWyP9ti8978bg7mXxHaxKYQaH4H9N6zbKFtmVzPXtJkrNNssNR63Vhz8Q6HSNPU",
  "key28": "oMk3W2yKL2Th5d59XSHnC28KbnnRzWoCrCX9mLuWvmLPfHYCuMFJNYub6TEVDq9S6WAXUBFMomkkLDcACjzd96T",
  "key29": "4QqwRs9aYoLBdYKANBjJ7xf5fvkDJwPm256LwmeS4HjWM9JD2zFkLsL2iZsTw7qN4698RAkPK74P16UXcMWo1Wrc",
  "key30": "2DrGBNUJhR1Rf8KJD5W67paEVY9T549wAKBui1S4C36W2t2JbAeZK6ay9ZyZUER8rhNj2LtXQAvQ88nvcf3EHnWa",
  "key31": "VVtUfDTHpSEar67KpST1ZSxwLgVNXuLmegji9noeyqXAvebdE3aM6NZkfdvqwDKPvJPKit1csjU9X2Uuhz5DGNE",
  "key32": "561mJcDZ8cQ3t6VViH4nfGbCLuqeGzQjgLB9zxmT1RGEKw8fAJx2Sae22qDXWcswAuriQy6KxnSo4z19MgtCUDA4",
  "key33": "4xaXT2PydEsJ7gytGN45WBHamVGsBuVJUjVHcHPb2Lvc5HCn72J7XFPxh3VL81xB8Cqisd8nZu7uJPLwFiAVEkPJ",
  "key34": "9tdHxR5Zn4ijTKKdZW9fzedDsKDoxQhgcbgTYVgeZG9Lm7YnzJ6hAAgXuEJ8cdMvRkcsGSjXbCVsAzPjLKFSeqt",
  "key35": "3uJcV9JMoFSpoc6H71isWe3ej5etJRUamk59FAgLdFJqd6tmExa2ui95Uz7DaJ5pmKRRxRuYLqGSSAGYgqTeZNza",
  "key36": "fKkavmv5zUTkMisBvWCpo1XBoV3VnLErT2hCeU6TEHAKKhuEkrPSJekLcX1Fdt59hrKnPqE7ypu66qhqc16WEeX",
  "key37": "1D5fywFr2KspkCeRvEkPCYRtUNozBbuCDva9VmrazWc2RsCVpoMkfusYFdoHNqz5kPb2uzxUhYRNryUNYqbjbKK",
  "key38": "2b9Ud7Mdwdn6h2oNso4SCnvVK7KZhSBnnfkgMbvvtiY8Li14mD7tUUuvfTs5yPvNmTC9GoMX62WsBoXPcNav4dLm",
  "key39": "3ep2uwNCjUseVpwG4AVsgdfFpLyX2kGCsWMKAWRiJ358p2Z9ZyVBUZe1x5A3Ga5MGoN7S87stiSB3FW1WJp6QgeJ",
  "key40": "3989rYPvcSCRGyJfLzkVEy8PjYPdPUNdw5hGqA1ft2tgnDe4gfxtsvYY3fevVfzqurVwhaK1845sHP7VUkRSRBNS",
  "key41": "262JqeDGEW5k955pHymJmUdLUDLGqKfCZLrFLkpmYh3DRsHwovdyYduGSoLEzFxaQF7Hj8Y7mqEZGC2rw28FrrnL",
  "key42": "57aSKrPpQmvvf5GkAorDbdRfj32C8csaGYj7hSo6LMF4vM5EWKq2tbCopr42hxMj4JjM87NnMWwwUnDgRTzPmbSx"
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
