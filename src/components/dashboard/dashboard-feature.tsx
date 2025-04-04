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
    "eVKgryBP4NSh3cuDLmho28AFarJsgvoQzRcpYs9YVZZRgvuarXk7A6RkQV9NZrEttM218g2bHMgvxEw2R8x73rX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mdHpm1kevkLSXHzbv2mYFVh15mZu3EnaRMtHwGyWr9PNi5s6gt6NPY3AWopWEACewpZCKPZFJetPZZ5dV8BA8S3",
  "key1": "AWHMtC2LZFd1s6VQUrZdVKBNCGts7vRoNp7SywfYboM9CY3V97dS51cfYktiy8AkrcGPrwoFSnz2QK21qVEeJDQ",
  "key2": "7nBvuUAkBgExC12bzWpcVR8cK6HbcjpCAjaZNaZ5BTscfqBJQ473qDx8EuQf1WZyXzLRPXdLWRA7uq3iQLAQFFq",
  "key3": "4p4FdKy6kiJX2o7hbJpKjuPtpmznivjyeAQzvbT3tvARdAbBsuY3bf9jCq1GEfDSuKDhMbbPxu1ruFGbUb9runGg",
  "key4": "5k4w6ihgEtY9dmRrR2PPLnu4aK28iuY9z1NsvaBxbBgXXyAU3sZpRFzHLM56n4w4Cod13ZuHAK4xWbQ26ne94zmr",
  "key5": "3uUNJM61WikRVfssrSBNh6bdYEyNSKrdRpkTZJMRLxS1EnJ4PNu6YeS2H8GyeTJy8KYz3zZ7CuAfNSkcfTnz6chN",
  "key6": "zEWWNYXCnHv2k2DcBqG4SWxWXUZAiXNMpbuKYWpSxCX5vxpMrLZkddRfALSTAo8whjptCMf56hnctVa1d5fUFKo",
  "key7": "vcw6hST27RyPXYZTfAByi1VjnMytueyu67vjeaT7JA9xUqye2VMUmn7wLBj95spgLwTQp5Nxsj1ZGDSvdgVb1i9",
  "key8": "2bTYPEEiPZT1JjxCUAxRhN21EQheKZPBNVbPSdPdHBaaNhFVQqF9PWbxzfE8SHeV1wdjdq9eJzsimBD13j5gtnPU",
  "key9": "9vuQ2YHU6n2DpQ4YzGwY4hpdC4mAeSRrA2xmEPqsn1TUEQCFEdCBaKPQVuRYK7VzRh3hCR1A2dLV6jgDDKs5TKM",
  "key10": "4d9AppzPGeqqnn2SEgZed4TPzQHg5zsRbpf91cbyfjT2gMw1tHUyYfszUjeT55HKAGYuryZJ1qmixNHQunxFwV5x",
  "key11": "4hrR9XQauZnPBJsY8X4SKEyYu7uX7aAh4cLMAh6APao1aK4BR1s59zxd6izSzDHcS7yMMZm9H9KBu6RZzyaGAxFq",
  "key12": "4RvZ9LKqoBocffq6Rgc4pGDWgzgvCi5dECAPn9q6mkMgzzajjnuVK878tFbUbvXgRM67sgSJc8aHBrwXzhUpSvjb",
  "key13": "5LWhmvBw8kRCWF8uu2wYcMERgKsmbhqwNpuTnFFds2VzaRQV5qnNbXMjsysuVPmqqyRtxg7JwuDc8GHj5ADcaz4h",
  "key14": "2kBKsxZWyECFZSESm7g55mkmxokhYGRaqsqff875Y96dsxxbPLv5otjqBPdepyDWqqHdb2Hm6LsSed32arEdMaGg",
  "key15": "43cHzViYD8Z7EMwtK4pLRf2JyaMypYcY4BLFnLn6YVQNKzDv5o4CfEFB2DZ5NqtEbXV9SXFrtGD1MfgXYkeS1n4x",
  "key16": "3WhHX36qzVo1ou6keMKBNpMRg5QHmCxSyZ4g1FtURbFvXHjJm4T1413VTTZK9Yu5BPJAdc6EksNmT6PVPpbBFZpp",
  "key17": "TjemKGUN7eLPjhZP4dTs9DsjTimB9oxei1Hf4rMhr5bo7hYv45FXHW3ZJQ3vX1XAoRCN9ekMTfQP8jLmpXD4vLk",
  "key18": "4FvvQbWfk2VKV4rVLmrizdUndmpGNcw2vQwMFKbjHpEwcQhfqhyz2c6rFi2JkFD9ktQHdHxx6h8ZPL2RT6bxyT6K",
  "key19": "66Pnx3AHJ5GXcAEoexZdCwyk3sgwcpKewtUjGGq8baXtu6LrfZ8HkBgRbXZGHWXuQb9KXACVBYsgjKq3cwaMMwYX",
  "key20": "5rtMRV27z9B1eMH3daQnnsdbrU1rJC9yd3yibEY3pTL6DrCsRb1CCSiJtXVYCa262fjUbxnGcZvzFhS7zVuVa72V",
  "key21": "5aTJswXTeEPtaYz61FgUE45SCoDfGow8LqEheDY6kkhHaCRwikma4jGqUu92cHUdyfQ9aJ1Ha4UvTFGnWfDQFNxe",
  "key22": "3heUVN4DXCJ4vya6qtdWocrS4ExYkBaxxARBkmxuid41ksFEH8WLbmkac7AaouGSx5qzG4vKcdoirvtdLWPBALaD",
  "key23": "2GNNTB2x63hbtV4TqbULye8DM2SWuQKoE15TNo9pEipUsnT2sLGggmSZG1xoUz82q2y4RHohwNVS3RwXVUSnV3q2",
  "key24": "2g5ysZ8JNUmq3RXLRiTrz92MZWf6D4twKdxD1spF9GkyStwX3GRGiW9knQxABMLL7XPcq7mMvvWnaVtRyonL1DHD",
  "key25": "3y5pBvmoNw77KSpWXJG3gqGmttHmsGrkhzLGpcbedLU9g3uwhkA8SYRzkdCr9PSmMhuQG8VWNhCkzyZTLWaVneb4",
  "key26": "5MK5gFCYNx2GwmWeFKZLaNNxBXwTdXGxuS3KYRGXeySgwxZShiGXKXe4Ju1ZmaFjvpCjwGzrqS4RBaMzy3w6W7jo",
  "key27": "62m2m1TAuWjvFWw5qBg16nTBBEpzEcoSSm9ab3MW5nmbteG5pUowcR9U7Mvu4ajkk5aFD3nDLKhZTExtgY4rUHM6",
  "key28": "ugZ7PbYb1PwcDLyqi4XzjbxFSZ3YMPEeREkZTQ5oPGTApCw7MzzsNbX6cBYY1TTH7dP3szpKj4XLKbZQATJ1gAS",
  "key29": "KEWu77WxTdRpXNiRbmBkwGqFEoi1p45yKfFapZd3JUVSnbFW7QhJAbGn47UHuv4FjSX5C1CHLxQ7QGk3aF3z4nu",
  "key30": "58sBey82gQJT7aVfQms5ymL7BKrL19bjB4zsskQakjcFD3Z5hVbp6axG3dK4rDYR4z2q6ivsNER7kjHnfVE2WVWr",
  "key31": "2VBjPWQrDUroYXKhmbLJurEndTB1WivBjjvnZ8WTZp2B1ghNCXshLu7iK4GGctKLSUXEtsxdWxBHXhbDDj2HkpFn",
  "key32": "4b7Zz1YHpGobf9ETZMEEoWouqoNyc1ysdSAtUqB5ASPX15vPFBvxGx5NrF3itdcFNiCyXZhgEAT82RGUk89kbxbK",
  "key33": "4BRfPeT9dfgMuXAaxZ81ddvhRVnYFCn2kn14FjajzjSxaaUZME6jtdcWM2JvQzkxCQcYpvN7fsi8xzRqFssf7Cfa",
  "key34": "4LRLw8ibcNKDj5RrnqhLmCxp4WLHUqNfhWJLfqubZfD4nukB7UMsT7AmPhzN7DW4C6pWbztC2ZCY5FXyaPJMfc5c",
  "key35": "41Fr2sXyeHqipwn1FUefZki8nhG6EZT7f9FwkKKbyYgCQrR7LKVg96eywjPHh4aag65HEfhnYzk9EQnp5SaduRaN",
  "key36": "3mtD4GuHM5JkwYdz7fjbNhUXgjVKNSprLvuRxaEwBsw79Vhajbp3enxprSqNK2tNkn9JG5T8HtUYQTo6pNPxd4UK",
  "key37": "c4HCxUJ5N82NpTsbwyvUXZDSxXPmhNXMXRitEfNEDAztU7Jys3vrehQcDUdA4jfVpthxKQY2YjRLUw1YpK9zZEx",
  "key38": "5N7qWmEMxYVSJHbqj46EbA5UVsw7g9Ezj6AszNrwcyx1kCxZhFHXcZeU3UjXgZnVVhzdAaZAQkPZLAmgK6XvvSpD",
  "key39": "67LDd2mQJxetYXHPsD76vCvZLoxjWaXX4Fwwj7CrHrD1MxhNSoTBVYxAfxVz1iEjEWaTLMsQequt55BD1F4Foe2w",
  "key40": "3FKGDqVjvB5zg81svSvijgR4DALy4KWRqJHcy4k4mW1GyUvEjKkWkE944PZMuLNg4wJrzGfcykGKezfJpk5CrFio",
  "key41": "4KLGqsbBtpX58eCEjAqZmEZGTnUPHLi2bUURGKQiopcdK42kKM5qZHhsTNGSYjMaTKYbMx7wB9wZcoZFN3R59u5G",
  "key42": "4UDjJSPTiWo884RYGYJPGQKk6oEzQruV7fFSDWQEQSBLy73CM1b8FfdYt4BcRtGfhLurY2CuScfQ3anCcYDjqvhu",
  "key43": "gQ3ELDXpg8ftzZPPB6WMwmLZ9pHRULEVVqjHEwWGBexoZA1Z5DhCeeAKP6pL8SBn5AXqXdoAyPMTsLTswETehwt",
  "key44": "4o6dbr1RRiFSYCRKn61xZAADLQjEemiaJG5sWvY8Y35evRiKV8gihFzpwQxci8Nv24XVHijjujEwka63HC9QAaGV",
  "key45": "2we9NNJznsEYkvrfcnWwyTkXmxwWfHQSkHtVdHVJKwNnJfu2NgRf7kBHChGXEdiFVK7Hz6SSV6YzAZaEAUiEKUZo",
  "key46": "21XWcFLi71yki1QaJRGadfJJmL3pcYpyBV9dRZ5Knn1mEzrwUHfaAgajsnHkwhKR4GA8FZSnSzhr9mCwp1e6JSFM",
  "key47": "5nrj7H4B5MkQyqkwPxYiYofmtvt6V7ChG6wW6byJcPDfaxHVVxbBySDGrLnWEmPGSjpWnDuUHiXWd1DA4RapxEfy",
  "key48": "A9MMeG8kPf6h3KEqwGG7LPVecXBHSNpEm6snCMXYn671QFCTBczjpsBznvaVPhZkgaEa5Kcw6rPiQ8aiUF7XHfV"
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
