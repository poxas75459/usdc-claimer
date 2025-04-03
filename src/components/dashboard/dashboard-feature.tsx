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
    "HHxs1W24me4e3TAiSYZfznakhHwa65dvJgRnRv4PqUQPdBb9RRjwtFeaJn46HTAszEor7oJ3tTEqGanEbjs7jCt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wo3XUFcCwRqomL7xxj5L1W2Cz7PgaurhoFyNxBLKDsMmXe8S1JjVuggFVypEATMcN6L8t7SEZdDdYtS5Qwevifr",
  "key1": "2sHbGvqd3i59CUgL6Nb2Y8cGwsemNWQ6f2wJKvR26u55HNrcDaNSUrLzNJnn9piog9Le1yZ7uyohLfBJB9hm6MJ1",
  "key2": "4vEvYmHwPG8aMEXjD4a6sDQgo5cnuWsBkaCUdvVDc8pxT4QQMh1YBwYuSnVCPXQdibaCJAyxE8SdHSeSi7Nn2Nvy",
  "key3": "5JMaPUeyQ3srX8cDWk2HjPxCAYXz8m7LGRtmBFsd7RGXfUPy5ZGgs7fGdoAYnp1sdzMUPzQcZP54v82oSTAo6NDg",
  "key4": "nHrrRANHLfhZZPDwzcTMzKTDPvPp5HVpisUQnQVjQCkdTkDVEzncspqDytwTxWouC8rVZtnDmUSVNTZ61idQTYi",
  "key5": "44YSLsJJRWj9ZsFjEUXAgCyPQNaxC4vCGro3gZ35u6PxMr8wW3k9bvfmYBAq54bDBCoRYnFEFpUSbbMdW2mrcUg1",
  "key6": "4dZgEvho77ZY2wqL1tY2vVHN6xCT1ZJfvKnbKp9Z8mfiq8ucFtFoJEdcw8k3yLRT9zjzPTn5sta29y9iNqLwBnwB",
  "key7": "5LrAP7bPpy5k6mA6BS9Xhv7SjjaoKJyDbVTLqDoNnELdkWPEmLciCJNEcjTUXRweYbXQFKWBgukmpWNsLjZfXky9",
  "key8": "RCTVr8ra65fYgXyWR5sMrh98d9RZWCzcCNjHzFsFwMmv212jJxEX5iu44217U9jdC1caTFhodHLV7bt9cmQUD4Y",
  "key9": "5fcF7LsF3fVds148htA2uTM3VtUs2dPNv2dnJhFuANDvTcXtFpn8RfFiGjHpzHYsYUVxSB6zprUzb6ETS8VDMNBq",
  "key10": "ho6AwYTeDk97h6CaWbNKnJp6KGPNdXm1Tnuww7LFBczJcyvtjh8rL9z2bwc5Z4o3M7izAJBPaYu6FxES444Via3",
  "key11": "65uMT495SjSite12y2MBg6gouXSD8vmCSuo6TzRVp8mXNMid33MvAJzHiyaBS37swbhMdyj7cuVYDJMpMNKz9u6A",
  "key12": "ehXdm44mfhA5zP8p2RbPxGQ8vM88fTEttooULpT1oiQdFF85vCHBLqYTBxTxYLzokqrgTaNUHLrcQbkmnUx3wPw",
  "key13": "5H2R3ium9759Sz2AZ1tCFKzfzhREo8R2fjy5wvPcajqhpxTYropchYjNCLkUE52VhiqMgLRCGtzZBDhGGhHmMVWt",
  "key14": "2Myih6BttjZ29GeNMSciPt5XUKD3nCttHTpN2afKmsR8ecbfEyWcwuph7iKJuC7qHSaHZ34VZmDV1TiPxqCGE4Nu",
  "key15": "2nzy2yePAmG3AXzh6m6CEaUPeDNfBcBPhoDYPZFFSTfLqVLDqDhgHpSgTz9bPRpPwWECjM5qVdsLxSCWZQPKZqBw",
  "key16": "3b5tz9xAJYqnYc6tUkQZea8dTEXpPxyxR1Kmk7kjTtJREk32VxhEcs7dW8acqYdrLsLNCmpbTQeJq6BTs9eoLeSm",
  "key17": "HfVCL4f6p1nE3EPxsFnwpoCDyAM5VCpCpMNxgz3bznq4tuvR91qfRsSVJtc28HLhkYJZR63xnZBkWmwiqvCCBok",
  "key18": "YHq8mQRSanTkhtCk42HeDy2tJivuPShwETRScXpvgjnh5RazM6W8h6QL8W5rR6yQyRv2nPte55pXu7eDS3RACHs",
  "key19": "5yEFHadBS6MmDVDzSVz6EwPHY3KYvsqcNgq85FfZGo848JSXm7fATiRFo4db4bSfu9eQyF68mAcvDGcYN93nG8Ef",
  "key20": "3pAZUwqwJHnd4f8X5LiWQGnx79hfhUvV425dJxBeZoov2mvdVR6ouoSbgTnegdX3TPN6PFhgs9g6YPhF3EZyifsb",
  "key21": "2UnrHtFcZ1yhvZqLyJCxymZqQdZpUXHdMtTebjERQ9rmHo5nnxujskgahWy3QbXovY7bZHnq2FaEd2MYWzJpUNZm",
  "key22": "4MECDVcJBjJgTRB33QX4hi4YVjCEjF1eDceSAJDH6YJ5qKH1sp1MFW5jsF5TvdSsXQWRn1uLaZx4cB9TLhbB4AZU",
  "key23": "4KZuvEaPgxxFBcwQU4NktfbqHzAbXjnLFe3BzkDeLFZqh7oqxFZBgqHXVfxCrCRcXPgF4hsacY4vqxRToNWwJsy6",
  "key24": "eJEJC5ZpsFMSc9cmL6MzdLyYLtKzUMJbAfQ8jbNjtugWMgA7u5b4g4RtikAZAg4DszLh9SsaNqeMt24xpTwio6R",
  "key25": "XS6fV42LN1r13RrMH7CDXwmnBEkjP9Jbnr9yQPTcm7akrygurMzcnpttDuQQxNo5hy2JRvEiCJdG65sRLqkx183",
  "key26": "oRSzF3eRUFYcoawcJqCV3qcEnJRZdhNTYisbU4odvQUfXxJHHwij7tYLTZdqYMPgLLtSLhXqDhVKeQctB8ZNENJ",
  "key27": "3tvXbDhMzK4Ki2nGqgBrCzZ7Uca3bDoaLWEAqVkXm6g6Nspewz8fXQ27knj2fQxua7gPS1W7H4bJoE8nQdMjGaEo",
  "key28": "XMU6HYCoKEwCpzMoByfiCh3E9b9jyKpJShc1VsinrzwP2nukomxJGZbWRtsESYKsbAniiE2G5Tv8ipfHtzt7k8A",
  "key29": "2YMhpoFWkCPzf2nKNnHxSnq5WbRKizURZQSAYSiD7oeReoU5KqmDhjqDGdspVjEtaF3j9ER5J2XEyhy1BKpEUZhH",
  "key30": "6eQWHW7pxt1Ewf6npiwb46hngHLcgP2JeKZgWdraEVhbknCH5vd9rWfeppR1Qrit9N1kt7iL8KHdWxyNGqkMi3x",
  "key31": "3VwsXLcNbnLC2rimP1p2JnwLVZs7N4EVoYnCVbmP4aNdEX2YHr1NuWARmUkSMwhngdwDfyynJk6FYE14jHY9AdHW",
  "key32": "5HEDdJaR15RzGuP3E24CSDFzu1if26CA6TpqXZxZ18WntabrZxrPVXVg4AcjjtvbR23nV7mLizHafngyoBD4Lq1m",
  "key33": "3iWvVD6Ke193nduhZBpoR5YU14SP71qRb4KrFc4aAVD8X72hdnkxxP5CG6dmsrJwoHzK5gPiw7F5n9EntC1bpzUd",
  "key34": "5KBVJqx8idvwgLE5o6qHoDSmc76RKwUW6ZFjG8uXbwKrEnahPuV9vsd5ALDV9P32LLghKaTa3At18MiUQgj8E8sF",
  "key35": "3857TrWJP6gzZFwoKwb4D52suLjzs1zhPk1Pv1zX1np5nGRQwF4QepTSUhhhWUfNThp3tqtAQp7uqvXYuE5hMCeu"
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
