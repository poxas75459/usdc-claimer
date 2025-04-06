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
    "4APBA6LPe7XwH7TpeVVcSxMCbARmo6iTEHLo2F7P8duNjyzcqBb2bDwbKDRCGZ3TMgh7DT9xm89f9BDDT9MhacCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2RrGpLVvdX5Bii11e6rSkJedhM94JmW5cXguLaAmpbKnZFBwBfCFtRQWF44azTzsnjm4kTBixi7Lug5kSKM2ejiz",
  "key1": "3u2kUWuaZDgDk9g9txtEUGLHnxH7iTETEFxKaV3BXTj2TZpCN3tq1huthZLm6TLD8KMVy8eJZHH7HXUPf6Rdz82A",
  "key2": "2Uxt6HLSTqb96PBKb7chFPgXLxSLfipWxuykuvKVGC5XfpbHm5TdBkwqm6BzSDAov2mVsJksCrTktNF1LtmpogSW",
  "key3": "3Vm4Z2Zdf8TVoEdLhopdiA7wSFhLE5wozHw1rDwpiQPK8cbwMzUnvJUh1vWQrZ9Zq3L1FNEd9W6uiHddNayixN6u",
  "key4": "61SxuCmFh9a3qCVThmL7L4EBgXmujroounE71C3x4P3A6F3SwHe8W7LTtVLds3hkrMgoTyiTQ9T3mEDTdaFDGTQD",
  "key5": "59Yzny19XdGEGGn8jod5hYwquPqwry4YtKVLVgyXp7xbhfWwDD2unFsuYi3FTZQdcZPkaxYaSxRxZxfQ1DKzT3A1",
  "key6": "2gD9YN5nKTeDbZ1bdkzShkViCzyRqYFTXLkk7ifytuEGGXT661zAwBPVQb24eVnfk37iq7AGEhjV1euYb4N2eY9s",
  "key7": "qKEMygswK39boerzCq3uP1FuyNVGHTzY3DRHmwefso8WrvdnDcwtvJ1o6it5qLau6FRb3akNDwTFHyhrA2xZ65i",
  "key8": "3zoNrc1KhbBFCBcvi5RZubEeQoyknYGb4KwSwgSxfsmiD8cbnd1JPR2LTuh2c7Z5vkMUucrd7W7S3VGLykLJjB4R",
  "key9": "H1M4eacPsoa24YztfDfzKUaxocGncdBZSDLj71TiSn4WxkJT6Mjcbs11D19qNLkUj7xwDUcyU5dxwNNL3DiRE5t",
  "key10": "5sUQg8CnLbWEeBaXJmLTYz8rSy99saNDrKFgtYrEwgLmNUBzUdhsmSsfuxv5Bghbpf6qEUF7jEmddEzM77cnpdXZ",
  "key11": "7CQoC6ZSWohBwPfUaZ8wTbEhNtZdRfTduAdMtjPUs5ErrHnvGg9xiBZRzpUokBEwmwMH5XfuDBSSr8L9omugMfE",
  "key12": "5BCjCz7E9q6jQi4LFu6CipvoNKgEJZd86RxE2Sgath23CcAw2c86xdDtC8BvHdJWuuhY5XZ7fAgezwrfJvBmAJW1",
  "key13": "2HArdv4SnsGGzVbXcv4uqTaSbCsQas8umHdN5gsrTyLmGdrvvDTcCMV6uvWDGUhsaa1wdGtFVAqNxfRNQxRKrZJQ",
  "key14": "5aNKD7Ca2dFJgJCn9xWmQMi6KnRBT6Z4L5p6QgaU7bqRLcYJnkGBRAvYiX55BTYrq45uYJ4NMD2AVgWJLJAUkPRj",
  "key15": "2LVVpM7VpsQedxrTdh7UDep1Ybhk71ofgM7ED3YUoADRZsEUqhgXnwrGYdob5mwimRdxvpwHRHoQzNPDG7PDY38Z",
  "key16": "5tjv49Feq51Fy2j1TbJBXnPx4fYLDV5mLRA7fHT74qwVknSXvso4h6uaW2bhQHXYrBv4pyC6nP6Kg4G7KZXfdxHu",
  "key17": "Db4HJSB2K4fvKoMQXoGir1pfVW3mGfPmpTgFJbDyXzDm45EMVBM2s2aUNwgp4FdyRGnfWQiqAKkoUV8wsDnps67",
  "key18": "4dj76qhxmY9RC8uVcarhgMWY3bSueAVzqdRvqgkit4TKyidndbmxseysDoMUVv1cbkFr1V9BAN1M3vf3nQL4zbNU",
  "key19": "jMKeedGdFkh14bhHXdJVByA8yvX7iKJipoBmRPcgFc8FUkHgVwA4jTzDkzG8zAr951f5bhJrFpdR1eGqUXWEgZm",
  "key20": "5upkj934jitU5hytcADGipCQvq4QSPvybjTLdfhDCHQzm7isC2w3gpqfmF1oozCtJJkqaDse2h4AXzR3KEhNcECr",
  "key21": "HecRRLqvJjqcNSE9p7LR2bQbJ8JtHMGzPW82Phm7VQqjapHdhtzVchqH7dMRfSdBaz47PATucrHgP68uKmv7F9s",
  "key22": "29FBB4YgvT5SEAr3wHppy2hFYQjeanaXAAq31PBosNhRxAyodqE4EcMFfzMs89PZHMxTcYToNC75E9rFuhF8Xcgf",
  "key23": "43JDW1K87skY5JPCs3k7H4MLk3KFyWE7eDNJvRBn8mMxW2ov8uQ72YFuW5ZYbnow2zBnbahfhWNbX25uWLXphNXD",
  "key24": "5poJv6tCHKtJjf3zJ1C2W7ZgrpAR6KtMkmrs4VjqzmpjXWFS9VSyaxgT35XVxLCWHZYGrWYKaLMnb6PopRvowyfa",
  "key25": "36SVDDJpLaq6XdUzcAAyrrV8Vu6NtUYp7sV2eXjoJoRSgYwjXEWHWcztmz25FVPKEgoXPeDsvTPG6fA55R78fRvT",
  "key26": "59kPxzZAkEL9SeR1aemQEzUqbwp6pjwL4vN182UjPECNiCmmMH9Fyzu5D9pbCdThcYnDNVaqaQPLPaYXrP3YZfbH",
  "key27": "3K1US1HbGuMKrZhE3XAU7EALZGqYKpyj7RQJi6ejAUFTaDWZFBxVjwsjebPAFZkFeM3y6WiRQPxMQBfbzi9TtENx",
  "key28": "4iWqvS26wGPWmYRVy3bbsmh3HZXRWRwSS21dURewQNvZChMX9Tae5RbgFnfQnbUUwkrh8RoNjbpDb26z85P2J7HE",
  "key29": "2oaGen9DLfgYUGqJxnykYVBwkSy3aShoxYfe2LXTWEC41zeP2AjnLhyoxZEuuXkweiiF4C61gSpCRfCHCGBSuroQ",
  "key30": "XhPuZ83HSQUSgw6fysABsRjpRdNEcwRkXciUnWUcmGyMQABNNGxfmsNsYE3FEtuWpKEji1aQAu72rymwE4jazKn",
  "key31": "2Dag4jWhqbcPqhiAJYkz81q6FYcpbriXiJTFPzSMBkKwLEssGXtxSjLnps4Zxyf7mMQsYKbpCXs1WjvoXt4dQdgm",
  "key32": "2hzbBBcw5dWkmCcFFLQL2CpxJWrXj1Zw6jZkTcqVWyeMt7Vp5pSASFy4nKeaANp1X8tpvo2Lko7XE5KHhZso11HZ",
  "key33": "3jDsyjBToZvDQRHHVLDn1w8uSUySTEiTdKZFu5jCpXNjh5KEJC73GWJywp6vPC3eLQrfRUPNySUMHTxEz7DU7Xzn",
  "key34": "2GjMqo7cpwyXPv3Es6vx15uAuMiLDQdjQowq58XnPy6iaMd9mtjwQVoXwQVLC6mXxZChWgAanCLRG2LhZEAdeE9C",
  "key35": "4KobyRHYEcfT9TCCERiE6vCa2mKBrPCAkURMuuTYS9Bs9wbJN4e9wPdwxxNykAuGPP9dCFm5D9BxjE5CL9DjmLmn"
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
