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
    "8D3fqu5DgiMw2cpJLkoLYqSPmXxScwF96fP7MxkzTNw1TKPPneHxdLvgvw6XHijFpk39ex7BCL9i2SPctYqxgLz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TEJadweLMhmWnmQCCMbsa5pGJYoWdVz2VJwHwx6RyQL1naw5YxYtcWfEWkCditQkmWZN4LRQqcdKF9LdNkU76pi",
  "key1": "66YvAKtVwTJPicutG48Srn613nyu3NCgf6cSaC4ufeXwZgwEmz2CHhd7FQLPFFBpfNtihWso9tJya4xnsKUZBuni",
  "key2": "5qATGWLkCEXxAKz3k3EhM3fjXYVpnKXAJi2a8MxDWVNZMDCTWJUDMGiVy2dzntgSk88deYmGASBXLkpougZPGr9o",
  "key3": "2tvmnW23ysFLgTW5VNgckd3UY7PvgAZTQso5V6W5LQ1Mhi68ZANWgd4jS6KStRZzf4YJsMfbybAVD4JMkSrUmHmf",
  "key4": "2FtBsS4SshuYRY7GicJqGkcnVs8i1z1sQk9KwfVFxgcPxPa1M4Pao6mMqJ89rsj3GPNmaXP8ynt6NDgmcayKMW6p",
  "key5": "zABZxuxUHVJBB2vJt8KebAkHmWqVQUVMFDq99KX3MjrznBhPpUQH65G4CVMhvjHF7WZsqgBYj4uNZuPEUnm5NA8",
  "key6": "37VQrbApxoSNunnuaNZVGGHbXGEHFxNGdxoMqYFZYZDvXGu8T5W7P1ug3XffH1KybK11JdzBy2jgdBGtkhTgwQdP",
  "key7": "4mNfRBBaN7BFyWECqksyDdQhrwif8QvY1YHd9oXzm6gDc7vdQzHYd1Ga7zByy4EhUUjiPxV38hgw5TbhKwL2KfCP",
  "key8": "36pr8wpUiVWRhhecf5m39yzdAvEgVqsNRK7od25DafoQDZQ2yJnQn6iikJEWLVLBL67o8bhpYvZJrZYo2FXCgYtM",
  "key9": "3NiGWnPtiwWUrnJwCVvJa8XSkde3CovNTYv2YEnZKkxVYwpS8LYAjm7PNKkjVLFddThsr4U6GkzXJbm28QQd7kGV",
  "key10": "x2Sgub11SLs8b5AnNgN8WNymZv9FeXPoAvxwWqNNHenr8u5uoSWg2DGbzvwpjMywgwAGUjzKsZMKBVyCKWj3QHi",
  "key11": "2uBHAB4e9D2ZP9Gd8DkAJrUutrYcAurJKM1qfVne6mz745cRpV7ymGgsmvKsryEAh7cxFcdtTVwDzmvqL7cMbki4",
  "key12": "oPrW542igvZphYeexLo44n6ToC4qNZXYFWbYptomKpFuqvoKs2pcEJs4GHz5ftQTThPUwWZYZmKMnwo8dQHXafV",
  "key13": "3EQcuhNKq7YmM5NTHnLf9SMrbKCcs1ed5sHrjtQMpi3ArfKKQ82mifHTxbUskxG7DCc11Gd9Fd2QsH8knFa6E1Gw",
  "key14": "4CAVm4rUZ6dBrfxktuxHd9zLCR6sMNhRVHZt8ZEKFC5uy6Zpj8QLsWtz7KnxuoVeR8irKBBfyToc7KBtozecsZGn",
  "key15": "3WJwyJFWWrf5wCLRYbjMnRcATxBj1FECXpRbGkTt4stdoUvcHie7VpnYZsGYZAK8kJbmZ7KCDzFaxvk9MhmTuAu3",
  "key16": "4Tp9ugHJWmLo7wEbDNJ46ssNs4PjNkUcUVJeTfPqPG3YMiHthCREy1bUdZAgAWJCNZ28GCBu6KcXh9rwfQNzMH14",
  "key17": "4nsfbeZJo1d1voh83svMz8RMJVkxXxYKfrySgMi59JWFUkQn5vwvtPe1RKrra9BvP2Lp5fGm8HBZK5XQJFqUtnBS",
  "key18": "YaCFWYi6opKH2cG22ArYavM9Fs6gKeakwjv84SbQ4xfPaJ5Pa71WPqzV9jjUn6gi4wUub7ueHuLzACF79w3yZvg",
  "key19": "2KiaWx6ZHm853sjy9o2Aw9SUxYGBWMyuRx4BEZa98qZ48rArQKthVXrWwUQMk8TxxWA3KgHFXbaxpKaCeYTqLfe2",
  "key20": "32Cn2ddmR151xh3z8ek5e5Uct5QNRA8zCUDCRJujpZTXNSNbJsTN4at31op7yHdC4bm1FECMwAEURou3oterrWMN",
  "key21": "4HZkVB5ZruUe2iwzCuwMS3U4B2iVcxp5cEE9Qy3cN5Hw2vmFQgdLmYDyuP15u2Ge8YC2BW7HiB8q4LAoZ263ngaa",
  "key22": "37kQTB37RpTnw4eFKYttY8EqieKL4hTYGWE4qwdWhSptM7nvduB3cECei8xVM1N63sLqaWKTY4B5xRMswNwFFhhp",
  "key23": "5BDKHWRn9vrxXwr8YPb5mPPW8ZuYLKhvj294xt1aQ3xX6xPw3kSt9uXQ8P9Avr4qN5ff2hPKP3fSeL47BBPtUKND",
  "key24": "4wxgXhhpueL9WxNugsdSxpLf4xWkWVgVCRBP25R59NWqtaNiGAcNs5hUcTHs2FkAa3jv4zyUWv95ubhqQT9W7j14",
  "key25": "4v5qsriDgGwKtnqSkFF4bPJk65mP52RjgTRRTAxHADdvMmen3mURNW7CMfRaKxbE2ptcLpgmTBeQL7oP991ikrnp",
  "key26": "4fuSZmZrVUGUG9VnNVGveCZsSCQe9b6vrmaEtVsqSGW6Ebn9Jyk5LsscWfew5D4LYdf5aGuob1qoNXBmxGjra4QY",
  "key27": "fL1Bd2umXyvZ9JehzsUxBNfbAFEjepnduEwFWGziFD2GtsmG3NWWH7414uTX87tCbAbYGzbUYh2XsLcg62uTcE7",
  "key28": "5PTDNuDrLJaX8p99JocxAafnD92LdphSuJnKhqUWVDJMLenML3MFfmkGix7UqaWpzKruDCZWYYvznPXyu1P8k4Sb",
  "key29": "4jGDHTxXPYwRKdiGSpcbjBt614hTvnt2aL6yRNfUaWE1jz47WpEPwedk4sgRjMj7CHLfpG6V6KnDuD2PPxxDGn7k"
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
