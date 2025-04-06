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
    "4Cnesuf1hL42oua9sXKkgqjoBqKDGLBmnBhyzAaDCcB8wLjXxbEthpkw23wYErM5Di4N1n22PVJ2EkGGVnnabWtt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3yqdTg6QyMEQfGrxQYmw8vMgM5NG6nQSe2ojkka2C7DMbjMAm2ZEBF3bWLX1Wa6oBYcB5XyUVmi16em55uV1JzpE",
  "key1": "jKTYjTaH2UAUZcAcMzdbmESmNn3k2USHwTmtyrG9NCZ15CSKqNMJFyB9ZVEjCxDGxwqT5Nyy1a12JRva197yu7e",
  "key2": "sSbA4bJJhR5tid9mpVhzFrc9SPtxuqV1w7xZqWtFCYoYyTwE3yNWbdNuJDEU9XtitiexxXGW4RCGLcdbfnGUWj9",
  "key3": "2GKFBS1gDUJwSZwTCkrd1RzncJ4t6PqftHHn2FCxZhmheJL3LYVgBVKs78xiHQRD7WvWNN5to5ThGYQdiy4ZASyk",
  "key4": "5Fw26zG8kB3ScRgtbtHu8FxkfDahKsL36wHXe3VKf2PQEQ8DP4ag1ro4qPsrGpwKdukZQPEzaK6xVRJhPseMXvxd",
  "key5": "3v4wqicpAqUSNe7aFAHf1yiTq4pmf3LsZAji89HSRb986f1JqndZtPVTBCdr8xf3XXKz5zb6RJW8qjJEbVk2sM5P",
  "key6": "4wXC8WqohmyFPLdGBWz2B7WNmZfesDczmfcsCDySPbvHH4PDrUwQ72Vete6ysYwhXXe79PgTSAVRDKgmHNCNbANs",
  "key7": "3HyDxXsZBUx4tCA8oy8cP9oxdejfZaYVvMq7PKJDvkHkjSQc97Y72fQvswuBjVH1CVLy2WX2t3zSzpprXitsLrMr",
  "key8": "4zpEvBPCvjt53ay424HPNyednXex6esNQAYpfTCabH1hDspwKd4o2cn3T3H2W6SCPgN8CJbj7ZC5tPHYnKewmRrj",
  "key9": "4wDi97YzLZtKvRJEATc54vu6YBvuwJvS6UrE6CzyoeaYRPJdDRKMrtVt4sGpP3BH6jSYN5xN7SBFxGbj6A4yyTft",
  "key10": "3eJeZx2taVVKKaizVy2BS76jy5jk25txEVsEsuvDieULkn2MvMZESAkMm1WYYw2vuNnvp4urQvmnuFWPPytXCnU5",
  "key11": "3LSa9vAk3vFiLbx37N4HJy4xLRFkLe6CPS7bom8djj3iAdwM2F4T34eL4N1844hYBxZ5dkESpQyAVDYaaPxZz6jf",
  "key12": "3e7oCab8e9coB5WyhTLRxyjsiLqsGrscsW9Q4sEGpeE3uXB1oAWPjFgv9GTgxfd7Mi83vYuSNbGjELd6waaED1d5",
  "key13": "2fZkbqVvmTEf4nomtgF4wmgJpQZFdeGnSJm8oA7Tm3GHtW9yZmsNNZ2fLn5vPktjU2b8irym4KguWFUZc1eL3UnE",
  "key14": "3iKN9Wag53gpJmrdDy7nfjf2rPRGTgi78T6MXGp1QNpmHhQQq6aD7DGJ6mCnNaR7P9UVfAbML474DQndfkGuHqEs",
  "key15": "2pdx2hedSjUM86kE4NuYpmSTZu4vPQeL8qRKtbAFmF8b9bD47Ax1M7KeZ26oJZpf1QgFCd6AKRj2kV3QsxFrTDfw",
  "key16": "fcFWFwGNkRk6hoQe1QQD9AWfQYQowzGdZh4gn3bnPbsFESTxd3U5URzCxc9SvPJaR8rtdrhVyLQ8e8vGu3nmn1N",
  "key17": "RxQ4n5KT3UB34Hdp3htrwBbvF3Ecxi1a9NV8LF1UEQNAw8LihPsqxrzmhFSk8kCDFKEvCarvNaGHoy2RBREzxH2",
  "key18": "3H4XZQYzP9BE81zy8uTJpd83T7d6pVfAEYEcvrukgW2FHyRUHzhzDsAL7HPxw5JaEsmD8EMaUPFPugHLcg8dQyLA",
  "key19": "5RG4A59j26Ws5n5EbLUgkNLmWdyMGdmjv2mpZ2cTdQTJgKh2img82Wm2pPhrNMUDExNRDqCRmmFh5pX7oapBSVqj",
  "key20": "4B171BbYr1vcVTRvDrNsASKdzhYbnXPTV7XBZ6vdHSer8zgFxT4tHrw3ExgGcXVJdaExkUAtSStWKNduS5PRQbTZ",
  "key21": "3XqyknFwbRjLBe2bbbFTMUxsaqWv4z2DAGNFb23MbU9yba597jPcmWdbnmddMZmLWtG2ZC3bGbyTkmsKgPRmQCwU",
  "key22": "4x2CJ1KxN4wAMNrNUn4bQ5zZksRynMoQ1b6wKfVLLuQykcgDuajpuMs4D3Z7BkkGUpTZu23qx9tAozD1b8fJhCjM",
  "key23": "37e1Zwc9LhHrHqGe3iiXQUV6VhyPi79PaXwLDQMvpkkLXehiZk8zRKNCB2wQWbW8NPJsQ4hAGHrexrageppsSc15",
  "key24": "5E6BunCQkCZ3NmjHZexRYT1k5qTBQ77WmHGrP5fZ9VJrGx94pwuhEJNMJu6RjKGMLxubmu58K9dCtmAgS9j885cR",
  "key25": "5J9ibTKyYtvwiwJuoCXVYb1x9pLs3kcnAkdJFS2gk5ScbBCWKnu6etFNZTN1aXgH3rDM35ViirVCoGeg1tiFWzio",
  "key26": "56rCTcsH9ZXSt79hiQ7uaGMu6pnwMgTKPStSHw55LAwTzA7nVEgYbzE8y7e7RneCP7cDpAHkQygNQTpoapdEtQSt",
  "key27": "36GdQ6GpWukn5GA1RZLo28CJq1rx4DQfxdRwjVjKSLnNRWoUSZs4ThrvywrKoHqnxyLVviQC951wCc2i9tBSnfko",
  "key28": "3ygWLuNK9KUMS2mZDWi4wkWWsWpvWx1Kfj5R42aWVvV3DRmCZ1z3pKXPAtEauBviFJBB8527vDMfHpfh3A5naJ5t",
  "key29": "3qP7cUG1hsEYxAf1kDXXah5JYbYNRnosGxrxgrukcgWMnvBoxGrtezCzRhEHcYqveVX8BHnKZ9agbhFHaQC2HFC1",
  "key30": "3kQkQvQnicCRE5UyANgHk4uFji7NZu5zvGDtvo98VmtMFyLyTWYCuhzyFCpnc3tC6posF2DN4xDoukaZcvsUF5GA",
  "key31": "5sfCGXZkmxPs1NmhdEFNDmpQFyohNUzyBmsqWidUocsXJY2sXJAzqnPBJg9QKbcLKNWxexpP3h5fEgeParMGTEBr",
  "key32": "2y6E6GbQJU7fghDMb3XBnoN8jUxnymvwWuEEtxtRJgPRRZYd53kTDRepyRMFAQXKCsAjzHGCxZs3rxxdDNa12wM9",
  "key33": "4qeWncUwEj6yW3hiyJ8tekLjc7ihJSRPFvv4KzPxcX4pGp9r1g5DmRA4pg8aj4VfB7kxfX8dPoN2Spp81FxJJBGb",
  "key34": "3tFFA5kv6QAMRdHvSdAk7HVZKwJtHd3u4gQz8csJ2ZzBh3xRmVLz248FqQt3jW38CRG6CXTCufA6CYAhz8BbLNnn"
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
