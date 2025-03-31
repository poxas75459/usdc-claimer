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
    "yDe1oZktm4hEY8U2gjE2HffjoEndjbyfR6WXazCiZBYoJLajpiofn2AnaLXRz2Qpuzdz9ujW9dXbqKAmUUz7tsY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R4xry8p5yptTaK2PCrkdZpMs1hJYCqQNuS6Ud1Z8EoAu6QXNPkYWSv1FA73YmEVPhiHj6kjHyQ6cPppAUDsJKUG",
  "key1": "3efk18VVZaT6bpWt37ZvmWuhdkKRUqeFXfgpkKMBcfk1JB9oWPA9YnSZQGxQ41ep44gHfRG5o3Sh3ufwjduhP3vj",
  "key2": "4w2WfmSYS9qsjW3eGbJWBfFUcxzpFMUGbtg9HSv2e5AuKTomDKiEZNE6uS2HSjFKPPpvgghVwzxBhzMo5Hrzfyq4",
  "key3": "45b9Lrgghws2F1CELHVjZWhFQBhVJGvTfH3q6AaHpp9eW6Hdz7MzBZameLwCbbpUejW4K2dyqBGHzcxyTGtCVvy7",
  "key4": "5rtivDoM3a1onoSNGe6voFR5Cboq4ZsiWkApMxVh3HGAmHC8thdbYjr132qs7jy3jmzVNRjHtoHFMjwcRknxD4fT",
  "key5": "5sEjXFhiRzpRK7UceFKfQ2VKPUJWsepdsBeZUHDCVWqUp4tBqg2VFPqGrpGoNbG94m5uW1WKmxzMC6BEgz9RKDGR",
  "key6": "3H7tojrNCXD4Ni7eKrspGnfB9cPuBFoQYPr7BKZRC4A61yQDSDTTL3Abi1cTafnXh1TrKQh62nFdUY9nKKHKesT1",
  "key7": "3gQ4rppSofx2zsLmWNxG2acLZigM2Dn1UhThvwkA7doL2HcUjXG3WTkaGhbcF8zj3qwNi4gpaUQnJVRnbX14HNo9",
  "key8": "5ZyZm5vD2FbcaqDoyQfNDgvYHfULSuQu2Q6CPVzmRhA9MRckS85w5QPfxU9TYprRBDxhrcac17HG19MoD8FqEyyd",
  "key9": "3NCuRTea2mUVoHTWj4pSUFb2dA1qN6ScPsmnjN9vNE4uBh7TsErorABZ3VhfEADbofTYeWBEMUvz4pX2TTBqP3jT",
  "key10": "49iy9ucidLxB2Yyj2DeSZBC5Zs9HhVpzaZV1GiBiRK7PgNfpxQmnQ6jXzb7rAaH6gQh64xAk8X7Psk4Pmb5R9Fig",
  "key11": "3XHjGPR6EhAxmvpXBophYLR3zdx9sF2BWrP3AKukjyBq6u2MHhrsQqa9HmwTSeGkS38xwbXGZqNKpvquz5SdEBGj",
  "key12": "5fx6WPgMQ8FA1Ay6s2KaTzyekL2UcdMWN3PBqFUpeKHeoHHV5quduDa9LMQznXNWdNbfvhnNzeLonY3eYpUebsqk",
  "key13": "MmcxaxaF3X5pgtnbQBeiZ6xnLUX5rB33HaN3QCvwcR2yrgVVDguC1E4Zqthi5LFsexzD3LAaYYo7xZMyeA1bB5S",
  "key14": "2nbsC6TcgimYNtUr7UrpEvq4bxqpg3p9mp2Dtx4ufrvMYqoTgyiV1uVmo7nqxJqKLD577mzkb6BvhcCuukhEyi2X",
  "key15": "2zhjmbFdn6H9gpVErCtocVBZbGAALawH4FP2hEAWZ1ANVqq9WcqrMoKwowvnQun9P7GUjdduwTRE3fncXTo2Wh1a",
  "key16": "3LNwM5yWsrGfaVeFhaVpZqRXUyNU7YzPJLkQtE4DPRCtLdEpPK7SF8pV2LovVGbWPif9LE5454bfho9mBAD81hM4",
  "key17": "5Ffp5SZVS6T36gw1QqtcQzFCxj3iv6iJhdAhPLU2DXG5WyumwFXbhEDZj1W4PS6xGReH65Riq6xs5Zn8wDkiFzCd",
  "key18": "rCDeMUnb5UR57B2X22cMGZzzv7biyu7ZSb4y6yveuzoqmx3cocnqqtMFoaxrMosh6TmiAJJpZvbw8XQ2Mo3kAxf",
  "key19": "ix6Af5JGCznNY4n8uM8i6qwJ3W4EYdAZ8j9hSTt78FVjKHgLuwASeWgeXR6HKaBFHA7Dxf4widoBEinP5kU25on",
  "key20": "3oFvaZv7qqtSVLTgrH5UJDXKKxktMXhg7yQXqcriU29u1JwaDdYVYRzoH3XEdp5dLzavKACwfGfrBva8bPaKkgn9",
  "key21": "64svCkNhjiHUJ2vpKLF4ZPXWU1B3L41ybDHf6GZt7YKF2Yrqb1G73iYQdjuQEGisuhwEyK8jYgHdUYttvA6trixR",
  "key22": "ME5oMwRFpG6bSqvq48s3Hfq7DSVhALuf5Ms7ma6Xe5VotGrtXnJCqFTYJB8Qe3PmHp22kN8W84HaMBFXY5DoGyG",
  "key23": "2cBBzQp6XzhuVcXAm1XXo3btEgDj7djMxxcXfWpjE2NVhf3KfWeCZSRCQqa9PUxkV3uQKnvR3Mn9GMT9UwNq5kNn",
  "key24": "fT9Z6Psht8CNzmzk3qpR86XiZU834JVozQyeVZs9TGK2iV499L7u7RSc1gdsToQRrtwM6WjYkVFyYfCZTpxP5xg",
  "key25": "3HhSXHqTzfpPwario3WiMxuazACM7uD4SrbbcubWRT54Uk3R1ayGCuFw5G2BWqKMbJLNkoSXq6CpeoAWcrghL7Xe",
  "key26": "34R7YRen6rtE6YpWzeakY1a7BJACqWkuiojV9mDu4TEConb9Pxpxhsmq25GjakQi14PfYcH2qHv3Fszfngh8fNXo",
  "key27": "3kjv6scYeU2cDJjkQaMdcrXkGh8it7bDDJo4bnwanwzt3f8eCVVWao5T9mMWFs2ME22QMdWFRAc4e9YKV5U6vELp",
  "key28": "5bVMaq8C9ufEbpc7rFNQKj4VEi1e4xQA92eoDqmkVjdaGXCUVRkdT64wKbCg3LEFkrF7Ac3XikVQMDbcuxvS8Q8k",
  "key29": "3apnAyUjWijqPnK5wYFQLkxM1cpPHEvHh564mgmZNuCCtJGL7Q82R8fbYEBbhaLSqph5DQmPvJnyJ2C6fgQW1SDt",
  "key30": "s3HmgRJg8JsYWRXc8tsehZQqAvUQ91BKMwB2tvBgGxXhsdpnbYXhkBD56R8JdfnYDJfVHoX7XJPVVMG64DxGU6G",
  "key31": "gJ9aCKsQvsZwgcxWWucSwHLskZZBsWt7q9t7xSFUY9xtsq8QuXRaqnBzDJ4k13m9tpZcxPVohrdXcNQ3rxB7KgB",
  "key32": "2a5L2Uw9bNTicD73CMKNE3sqMNevFc615jyL96EQT6Gh54d2xweiRMsZgu85T1FxM4JTz4kcES6EcQhrpYQrTW6U",
  "key33": "5ipox1XUpNZMbgvCeZcXE19ngcfMWFQiqLvJATUaPkYbmi6bteRw4PP28Wp5xD2XQQiCQFnWiG42jTLahdWLDVYK"
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
