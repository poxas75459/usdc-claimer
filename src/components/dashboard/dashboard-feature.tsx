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
    "4wwJ4Niw2wSNFkrdw6LXnGh6EKFZf9eUCPjHR5MWR2WjXVFTdYpPXPT3HwRwjbjTZuxBu1uajSykwvLQHsEjKUrT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xAyE2n4KCF9EQCELRre4qmihjcNEGg6sg7p81Gs7ywx9FqhfFkSEtR9h7tiHgZ1ocUYcPEGCR42zA5VkDtoWmZu",
  "key1": "24JQU7cgt5zhVo44rsfHVPSsRMnCsqoa6Qg8nMoQSeaa9c4ikKg6xntBKQPRmkrPJobKA1DW17S5Kzaxd3eDurbw",
  "key2": "58Skhz1EUNPCMPbJkHWurLQ6VK1YxBvveda4QvEHPP6PfDkKjkojwdDB5c5z9Gnz5BjMzSHmzyA7JFY8BR5yfBcw",
  "key3": "iYNuCzc7FpfpmLc1Fp2A4ECWbTvxEZGfxeCkmbrL3WbsC7ia15CvBhfCRjDvgwQzQqaJRHjxD2xunduANYM6GHz",
  "key4": "3N67sEN71miuhweaF5xkRefPsc4kcmKMddtWU7f4fsB7VqRyDc89NP4WPEREoioJUfobV8BQvbv1V5fPPehmxzaL",
  "key5": "2LyewxFTFc8ZscNvB9bddS3YCq6wjJyqhWkaamagTAdq9CEcTMbWS9zCL5n7ErxnAdKF6pisDnDy4KjvTSUNZjwV",
  "key6": "49iiEweC46uFNcNRuVNhPp5moHbZ1bERH7cW7pDNRjm9ZdQuo9XhbJ9UpkncUHtK8KzLiPELC1cSc84zB5ZxqdJM",
  "key7": "3ogbqN7uWt4Gxb3V2VURbE4kENk7XvwBhqaiMfa3e4JkRDpyMMaVoZivrNcZyubxLiQpRbYmo9oiEWYtySKRgmcg",
  "key8": "31yQVuGydHQoaTEmmEdjcxg4ThJQRfwxZngkgUiC8RS8r48dfhZJuwWmW7117x7a6pqQvgyj5hbC3aLDfWWmHQUj",
  "key9": "4z4RQiJWFdEJf4c64yvqh9n8784ds6qYy5hkqq2aMCi87RA6BVRgCqu1Xj85osAVuUhcNdCgtQnr4UNANRTZPV8V",
  "key10": "5kSJjKUVqhQmsySkutsoR5T87yfNgjUu1SqnLZjr7Rn3abtf88khKQLwNEEHKi1AEt8xnd68w8MJo2feEnrdyrgC",
  "key11": "4XLqqkjkBkeErpezN4cpAgFtAbnrhTzey91QRipKx3a9N3rENzcy8B8nFCns5o4om6wXqGMjdPAPEoGoid7uRBPq",
  "key12": "3hJV84bosrNNM7m6DZxWCKsH4RC7vFz1TU74wXfhphQvMrvikoKbYMbqaGSETaV5GDS4rbShhpjFbu3LmUzrNmsE",
  "key13": "49LTbbjQwEMeGEUSAcj3NpVvrYdyKYnUsi5uvXvzhUGLaC5j56E64x3C1yUiM1xeQSGK5vmgnD5e2amQs4okNoou",
  "key14": "2LZ6D2LHYHJ2r2YjSw8Rn7Dhn89iiKzxS67vSkDDZ3zRzJiekjx8HtxEaKbjn9E8453Dq5r3WCjJKFnwK1syNjgq",
  "key15": "a9LFUkhfKoxEdD2rnWj8iL5XBBKCb8eZdPtk6hkNx9rhckgzzoQxdKrN2w71H2Fup5NWWo2MfUABBmysNkQT2dC",
  "key16": "5fSS9wk3wfoUoeRffi3EbPNFGUcQ8re5SmQiGbNrduHndkhTw73otimrWL16g3X8Yto6jAaXjmhzQemyCdnD3jiA",
  "key17": "3E5CuJfwBVYdmsTEKmRC5dpJHZPAPw2oyQ7q7Gh2SZGUmN7SahentCopMgJaNceS4Sj56BB55cxtQzmV6bDeY5fY",
  "key18": "3kwPVzS8xUFC5hfsBb3gHn55XmEXPqv7dz2XKFXXk2DMjaqjx9iuYDTasS9UzEYiGcUxsFkgTSzL1KKVbtrwd6w9",
  "key19": "2bs8XgRXhjnr8NA2KrA7zypMUzgfFQ6BSBtjEX11MxsgKoG8UwdTBHK96dyaPRfpRVEtwASsJRXVBAbix4KjYvfA",
  "key20": "4ZtxYdNDYvk7g3QV4mqxkZ8t81oaND1cbxS9zrdRVNZjtsKNP45F7EbotyrCCj9dBiCZworz2mqScxDFEEVXkja6",
  "key21": "9xGey8p9QvspzhAr9zmD5Kf4rr7bkhvmAKgJ7WYAcKTWySYymYU3UXZpS1MtR2RJ4w76Sb7jhV4VmXMYs2qqBEu",
  "key22": "23gYJneL3G8hpjkrvueM2tEYHNS4g1HPo9AcJG5TTq6SxwwibNi3AX5eN1NqsGvwsPUmG5AYuRkEauY83gVN8TNu",
  "key23": "3XoUjyLcm9r2XPLrBnymseaQARzyw8DbshadB3Fa5fz1NDvFWkUfBeTAaM6egSAaWqzHKHzJme1QgTj3BvGcRcdT",
  "key24": "5gf1oQ2MWGpLvGGH7qJAZuUP2QvxTaFCZAKCUsD1v5D8BD2CuAFciVE7zgQ3RKgcxwXK568Sg8QjLByyP4iXj4Qv",
  "key25": "etMMYJ26J64UitJARR7qFzMAWurkBvaKSkuy8wimyVMUmiYxxX3fP6e3DBk8cetMa9LTDuhtbN7zJV3qrfw5mRL",
  "key26": "4f1atTqf3EGm7kRW3nJMyonCDax5VtRxb9GAm1F8ZSDdvw7sBwe79zQCu1dfUpmXBsjqWkQXQuxVNu4b6eZTRMm8",
  "key27": "PNPFSBALaHccFaaE9BCJF8KMki7sqefvtA4h2oM4BTuU2J82QiGhAL9mGX1a1U4rLSYq1Uk76139uZ8T2BFW12Q",
  "key28": "5hdKYM4Jdc9PfNU3A3U1xvjgZrRPWqQ8qyzHKDi1wyD63ig4bdeAGc56WUkEbNP33qLK59mw2gXkvcSB2ewQ17na",
  "key29": "2q8juaUjUaEpyjSRgr8oRhGqfDD6uEUiwxJVENK38U49JY7TLUT6U3XoAx9nMA4XC5gp1NFaDNh5xqcRniguzet8",
  "key30": "4foij6WNjZd9E7yeaRTh2ezcT4m1QXiooaDkNxkQcZu3Wh6cXeGZpT7N3yzNPaHA8skHT3PxENkRnc2AcdQxE251",
  "key31": "528Nonx1qJZKPj1kMqEoozpiAWqCYUv4fbjU8y3m7Yttdpgiq3hPsSNwWuSzLVZLVztWrgZi37SFz1oDbEwzRzCW",
  "key32": "5ws24fhu1ZUtrMhNpxa51XPsGB9GvM641omEwmibaLS95Hyw2JGi4o9WAtYEa5YLJeoNBvhoPyha3DvG6CxuX6vi",
  "key33": "2HyUBX9uo4wMnKh4KusnDXUUTWJVp2Egqnwvq6tTRn1nnzQHMuHHYMP1NCZ13GYvGrace88vmmeyAxSwDALcdfXh",
  "key34": "3pK9GK8zWoXzJe7NkXprHNtJWTrL2Dpni9iescQLCE8tH5o4RCL6VRwgNEhLQ9wfLV18owGNgzdfvET32L7kngDr",
  "key35": "4DhJNgV8GrHpfJBcrxrYLNSTc1PDA9jxBfh9gHxUzooxSwwTvT2cwBDpzBayw9iqRYhRdZuJ1ABWMzZUofoT5EBg",
  "key36": "2rjmkgaMjYYo12zGVRjVeqkNWnKb4QUGugLYkUd5KcQ3PS7KnHo1XgU2xg6WZo4brGrd3bxj4EJhzfG9BkNY3xmj",
  "key37": "48KLTyU29EVDZkRbFp46QMUugjGw3AyNCLBHAJCVEATEcrzz5m8pckxgraK1Ub8CVxbDeGBsv6zEAM9AzmVPfZpX",
  "key38": "uxLq1id3pCvoJy5tSitEUkvyv1gxHrgH5u2omWvZP728iaHFyV9x8BfCtm1MDUor1UowSSQ9Tn9qjJvCmX5p2SP",
  "key39": "49euQPodfh61S917tkVadJcSnNEYLZRaSZLJhLyQUrEugcRSTfNPAkczG1b68hqj6DUYXAH6LSBcnbbhvF1edy97",
  "key40": "4qxPy1TdB4AyyKt4obAgNdDucfTfZbXuf6jyDkq2CYD2nKtuoEtzBBuHUr34iv4KxqpZ8bmoCMBkMBYjDxhGMKyp",
  "key41": "5Q5z4C5T2stRBR8MqywA2BqQ9RqYQPDyd9s2f2dqdJNfeNnCMeRx3yhUKube1GaM66fF49HDXrwKpXbeSv7fSrwj",
  "key42": "2jJgifscjKYEix8jve34zBSnwH7px77977mUb84R2okPqUofymvAcQ7sdXedttj9QH3J2uX9SbSpCnC6Qg1xUdHr",
  "key43": "4mc1M56WKxZd692Pom2wVQtUDsfbt5G5uZF9nfyD16Sb66VpKWN1oHgeunQNwXWjeNfnpRunbp68EgfMbhEcGZq2",
  "key44": "2Ec6W1DMkesRX2vv6EnkxYcbk8DX2PWkhNvNNmgntBB5WKGzerHAZyqCzQsxz2FmSii2bwxt1omkrxcLStFBPSkC",
  "key45": "4TqWriWGFGBbve5VihpgDWVYZAeus6Z3Z79A26WsnQkk9AduSuUG67ZXCGZt1cFsEJRZJ7kiVwh3arFbc4HsUF8K",
  "key46": "4A5s8NzRzExy3zTDTg3Bw6FVWP9A4zkuFru742d2hSZckdKkNaUE52ABGY4GkfACrGM9DQ2Ad9kJKka3jYLHw7Uh",
  "key47": "4cZCCBWpxnPqPeggNYs2hgxRKfy7B7ye2ZaWhuvsP8YBAijKCDKFogGp8sVvbVGK4sexgfLRBcFL7ymUoZKJc5M1"
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
