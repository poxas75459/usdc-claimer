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
    "3d81CwCmUURZfNHdRxvKLhWhGfcZNSssZT3ddAUALPhsxM6qwdqE2ZFK658gAVcAfhGCsb2srisr6b8B4UetKXXh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48Tojv2jPJrBQy2wsHYtkH4d6UybaY1TGdzRFiZP398CYTCfS8F1Ho1VCRZQVnvxZnY8FrAC9U1cH2iA5tkZr5Fm",
  "key1": "hVKJdYrBStkR9LfSsKWbAdexF2JkJvuPJVgHJr3kUCYufRXLYqyafzeMRbx1nKC9KQbPmNoEF7mMqDq5yt1E4Fv",
  "key2": "2neNVFREmnTLhKudLMP2uWDzuCAL59W37FPvRs2zb8GzWFyn2mcKKMxrBKWUCSDA3SmXKQofWBNSoug6hmMmhRKY",
  "key3": "4NhoBN6x8X4EMvNvSR8xmvDmPBvSDH2LYPJwrvajpDpQatw4RMJZPzyr4aA1bXSw1rP6guCRBLU6aW6pHGvdoD53",
  "key4": "3przSFj8sWMKgJcCABQBQ7ycDcmkYrFE6xvXCGaiEwFVGbYqeX4AJfcCQ7JQykmEpJPMM8tdadiBZrC6GseSA9eJ",
  "key5": "2qqUjXfYEQ5HWFHZzbrqW1wayv34q4SY8HXuLLaYznwgdfFLTSr3c4EuMhQycd9g4RPdSeh8j3sL3p1QinBxdQxn",
  "key6": "2RnLVpKuV7t8AHxoDQamHhxbsujinHbBppcXrrJnSUr5n8HxSA6xDJy28e5rJp2GJcEpMqsdgwA3jRLiBU6wbM9i",
  "key7": "5DXyeoNEyuFdJKG76EtjjJPGqaiZbu1brMDSzfrcKo2fFErwv9BtPrWuand1h629nuC1Umox39rJ9kAkDe5GpHsP",
  "key8": "4eYCWu3VR2Wm6aJkHJJA9hoSAKsR4Y6U2LGR9LrvL7R14Duv3hcGo6Kqo2rJXRv9ZbA9BFqvyigFfbSmxdBBpJtL",
  "key9": "TVi6o6Rtjoe61bbEw7iZJEkmKxmqGY2iNRrQCVe5NZaZAarn1M8BS7mxLgyEeVMU77NLv1KJw2HeZC5ogoL9Cig",
  "key10": "4jUpTmabGUY7rQrZW4BX1DiV1QbXMTPCMP6zmr3ZQwTYn9vMhuTFWwBZKmpU6j9ab5hN72GEHpRLZirZtjcRQnty",
  "key11": "3W5MKkkecB11j61vW5oyAqs5Eb8GUri9CscYDb21AY1gYUBdLi5C2Fu658eyBhFSvE3pNQvHNjNqdmjD9v3Sj28P",
  "key12": "3P2b3fvD88Tw7GQGkFF5XUhdVqrLPvkS65P1TLh2GQiFUGEPtBWYeurXENyDPvSns8PEghYEAkpvZjiGra1ks27s",
  "key13": "27PSoWgVCgVhUqEt2LVZLSt2YHynRbuSyufkbLMBTCCMsLoT99Xq3Gxxez8Yb1mUuBvmu1L7r5pawgwS1NUasTss",
  "key14": "5b6AN1DBEMFhtZS8XvSWWKntR9SYket9RdhX5a2BMfJu8ksXoFfr8dUpcKEjkmJtTnBgWEvrNB3URagZvsW52pCb",
  "key15": "2Wfc5PFoTQrHHKCUrafRJ2wn4gFk47AkKKyb5bYNYSW1NoVKYfzvPaee7AoX2j8sdSzuftkyMQJvf3Kyd2GzgeVA",
  "key16": "XA8fhYoHB1GbjF9wFoULYqgSVWQG6nfpPfk4Upk1ri59jNdipqkjL3ovTMFCjqxcxv2ZCQyA3pkuADicforKpQH",
  "key17": "21cUqhjQcUebp4oLNGrEkLS3m6nb99q2Ek13UUxY364d5nuSVp9vLB3bZD5doa1v2TJNYGw5JAT3n2tRfVZhHTVq",
  "key18": "21RhxXJRTNyP9zVJVmeoSt5TpqFMm49Hkbn55xZQrMHEg6sBXSJxEzgGQryHHRfaNWJNfTBAw18gxEnKCVGfsnnm",
  "key19": "3ZBukJvCjPny3HBjoXc5fxc6sgKgH1m28YM6nm9jqgbfCnYEd8gQqYXTNMaPHcUi8hGVxrZYgPBfzZmeaheUSFFB",
  "key20": "3pHfLzaQ4y9Vu6sM3fSN34LEGUU2M3nm11Hvmrve5ipaptCxUovPNxHNBkAWJnFiHD1GTrtCRRuAfE482TGE7DCV",
  "key21": "2ZXX2L3KFrBV1hkpUBgpn5kyGs4enb9E3LCiz3ayeg8sf5NRC2Vjo13F9o4hKh64CB6ogA9u16QCC3yiScTFyTbh",
  "key22": "38RjjoBNx1jc1nsM5gjDYH6xwxCWQhRFbXKaYHHjZtnSFxnudtsiy49JMNe2SgkQEQgBmq1oiPbuMSgQPS86AzHF",
  "key23": "ureu6ofgxfMsHLjVBNrwF6NUx5zBzazMcWn6gxQGUZb5ZBYeCDhfkexn9AdfY2chxXpT56DqQWixjuzUVUMNc1K",
  "key24": "43jXKyZr3TMpbBA9AVBT9PgY2sNGPujME6gQ78AAAmaT3B3ALvAxvwrS8oNxGtSTQYi7tBGb1kEGfU94TCGQ4sSr",
  "key25": "3f7iAQmBgFoz535CmJxZm8WWHeNxfG78xTatTDHyBmw8F39W2Njq1N5CZPSMYAvXLtYdNvmMrQd2mX4LMVyeWUe3",
  "key26": "5h7cigqPJQffX8p34wS8ExSoye7xfP7gs2H5yMzG8xNgxT8ALXVDZjsjyg1qEAqTvTUG56fgKnfttu3sA3NgGaKS",
  "key27": "5XXEkvPqMa6Mry3FXPGCF6SeDZj3vY7nwj5cGo2JhwtWWaar73vEQJMaCdFUL7nsWg1GrF3yX45Jy1Pw6ot1tSTZ",
  "key28": "2MdDVkEZjSZtxFUBpEQcr923DB7SCaKytPa9GNhPQPfGmqWYBJSwtVgAk85MeGvUyrtkoeNRu387N2QFHimjvM1F",
  "key29": "48k63pJnA93BkG47hyjcauzGbagnQZos8mYw7C2vyUp4qVcZ2hc4RKUVWFugSrD1G551fM6cKtJd2FAgDgVA4Dk3",
  "key30": "3kJav19cn5fmzXv2KqMTji7VBbKsXjtMdWJozPoPVPC4DWPtNKZ4efK5eiNroJFaXvDEPSzZdLevSQK8jsZavgN",
  "key31": "4SMaqDKM6w1qExGKNKqRTGGVnXMHHzFzP8DEB5ybNNCXJqXUQupiv6nhZBeY3sXadbZubuXnTUoQJuLPtj9ajrsk",
  "key32": "3KvFF5nTFCY8omaxwbhDWG4t228S2ohJrsd2y54KEErSV9UvezqutQfKEhKXNcaL6DtexER3vsnYKjzpugnu3jQj",
  "key33": "qiFvyCDNSF7Hu6tiP8YQeP1My2V3hNR9ikxZZsETaeJNHEW56cBeXFGgnu6sH8KQC66uGjGGXEb5tgKDvRS5qFA",
  "key34": "4mTpBj9drtm8QrJujAXFbEehympD3Hszuu6q7vGjqLcDp8beWkL8B4Guw2QE4W3bY86xSknk1rDkqUhQa288DKrq",
  "key35": "4dVYgkxAfqmH4wN4GbytKM3jQbWZfLwVpJen17cjgbdzKmyxHhKppn8y91EYfKtXaavx1M599zo2RSLt4vE3DqNc",
  "key36": "4kFS8fYVk3rrRvjitu1vhfgQAUVEuNGvZeDTmRwWBRq48X7aA89d75rHoxQA58QssiB3zeYoVdNUC9Yqg9gjQR9H"
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
