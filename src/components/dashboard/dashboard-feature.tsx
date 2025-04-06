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
    "5r8SxoSDKzqpjbRP8DU9CZg9PkvHNf8srunmjcTH6WmRjAbZ1NTAoACFzN8g8KEheXXgP6SDUceX37bqTdZJR9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hUVFe4XWA3gCy2rCFgayBp54EohLtkapCyGi7yy8nN8rQmctvc8i3WmvuqnK2ns4Z5znABoC8YQk6EUHg9mFckF",
  "key1": "5h1yEa1bYUQxmLwkyXhhpR4dWjUgfg2jMbG4RkcqDLrcWVs2Ed75mgKDXrZM6AezxxFiNFniRdxn76qBySBSqxaX",
  "key2": "4r8CkDVB5iDZbiArDKMde16878pUeKMZkGGK5uaFydFcgS1ixsAaWWxuM2Wq9BhkH7fYaHG3of2pTV8pEdiDrqSi",
  "key3": "3NQJgnQjy6cunRwon7akTSu4LPh9psVCBbcLToZpHjZFtodx7YKvAxaFAmZEcdvpjZrXR5qCSvVhMmE54TSyWJoR",
  "key4": "t7Hy7JJWADMGia9DhsHNFabCxWBcayZZgTcVJ7H9DXiUPwTQmu8LbG82nV28jPae3hLdRKhDY3cJbpufNJCr7Nm",
  "key5": "aKfYjpqAD8YprxADk9hQPpr14qbra7rydeKC8YcoAYSNWYUhf4hEhSN4xW1qw3xwVsu6zai9nCp4DBjvG3GYdy8",
  "key6": "5C2RDM6Bmd4X5kxTFjxu928jEUFRe9CLsyiFfDxnxxixKxn4NJ4swmVrfQAEh3KgNALTnuFud8X1uetQfJbUbQHo",
  "key7": "2oXhivMChRUfS26uGgtwbe2411w9swLmhUswPXysdVchJuXxXq2f5LWbccpAe6oH991oUhveH6sDhfX3ZTd7JxQk",
  "key8": "2QULjwLkhCu1azYxRWmW8CKnWzB6wDhdNM6FrkoULNh71pgE7ggN52uwqdsVrSRpDjSiipjZdqCRGSWHQFhJjJLQ",
  "key9": "4CnD9oPkr2GiF1DYK5KAM4pAF1NYYC83vzZA9nfHRRKTWycVm37C9Cw89HQfoK8wSJeLYffk6GdTNkte6NAZotwQ",
  "key10": "4wgUmQHdx2xbEDwhb12Pt3nnT6kSdwTB9b2b21a1BZqQSV1g3Z6id9HUDeuBzHBEcxQmUSpqGxZLxDHdYGKzhrsw",
  "key11": "2eHJQiwzTG945g3foJAPKdr4r3ajpnudtdcMxM4AmCuzahjeBJssX3TxMXcFYjHQGQcGp51n6WPEfE9CV2h8XyZk",
  "key12": "3azNoU1XrKxZj6AgAYeonXp16WTnBqQDbn27GjPmxe1DiQcYYRDwthN88eeKk74NrQVhqGxqmgMWU3RzyLnzMgSC",
  "key13": "3MRx5LxacBA2qHW2TBSCrEdyS3kx1vnRmiLm7BtpxBSqaFEUonsSiYYEGbpFRUkqEj64RLebZk7mmSyQH9MtfaMW",
  "key14": "2CESjozDfYYppCL5KdnQirWuzqTfK5KHjyriC2mcy5HiYukbEwpLKMvy7ofuk9Y9k5yRns7j2KLSRthgv2ZMogS5",
  "key15": "3mvp9GTRVYU6ow3VxLgMMmJB4qwas6qJzEHafw4DBr7ez7vNWTZxj2g3CCUus5Wrh2qXmmbcQfeDSXC13ksE9m6w",
  "key16": "4KNnxTZYDuWgoC7JAGJj5YEuJYrPKABU5TJCnceyTm1b1Kc2gotybJqKg64t88eAeY4MQ7Adg426SWYVbuWyZ16M",
  "key17": "56VXDLGU58rwc42Kkx6LedYnw66k6oFd6qXGwLsQQNHXRL9YwSYupUXu6r4hsvYYFkBQxiFhaWMAxeaH8FnRynAL",
  "key18": "UzrWUxC2FFjGEwCFgcK4ToESz5yW18ZC9YFDiBG8AiZwQ2GBQf3LvcpisUJbgtRoKRrpJV9WeuPRzoDScSvgx3h",
  "key19": "5xsWkHWQekTA2BJUVfJ8QJvnNZRNCwFEqEcGtBZniDT9ammoSS7EytSXwuck8ZmY8nCVvCeuZvqvZFnBpXcAsUPo",
  "key20": "4QQaRNGnkMFhuMPRMwF9AWXyz2HDf2RrtMSQHP3oPYB9nqCmaZvGiUvsLUuCzkehzvvpb1XkwsH2h4QzPJd9o9MH",
  "key21": "2VmuaVzXCEiCvje5P3M5GV8h48Z1mrbWWG25Z42RHZErEVym9K4KhGcLUWdQ41b5r7NNsJMV3VfBXNTmxwT8PTzv",
  "key22": "2MQcE1qK4ZjWVCrofdzmKiyMjgxyPEVctW7sZd8tgPLjkgmfNZdnKcai3Xbakc7bhCgw2ev1yrtnFTkiXzZTqHDX",
  "key23": "AvPzHxKyYGcqttiYRNxi5tFU8ATMchYKddrgk6sw8Azg1yShmysu9uGqp3Zpz175YHdE7dpDbs288AEZxSARNWm",
  "key24": "5UJ7rUT5RXa4orAytyqGZMikSvp7pCMoQdC7fHLErhgmjuRhcpGN2p2TdZv2EtdHJ45hYs5ZQZ5QiAqn4W8HDX9w",
  "key25": "3TWkMmVXnUR2b9jntU7yNkiZuBPPGus1HxdtP2SoXgNbwqWYyxHJu7sCorQpCMizPYZs45oWp7FJPBTAwjrFhrpi",
  "key26": "2AounMBcqRSs5AmaUfn21fJ9rGCnHZ9LheFMJYu72U1qmjVwsLwMvYpvAQ5LVdAPcCybMacMeujExBkJ3XgX6rhK",
  "key27": "2HxdFHuncEzQsuoHWEuHwCKBVjCDA7QPAAoHv51BZRLCWTqgYypCimUXGkmk2DeWoMsKNjDrT5wZTYwgRkshrHzh",
  "key28": "5MuKsGJN5gZ5xrgLcztMWaBJDLLCWvRLADAWmVUk3r7CMuEwPaDytGoDrXWNWk8zn2NEWwfGtAG7f8bg9EUYMJCA",
  "key29": "fdyXUXLeq1xu7CJNQrQeC1M2W6ocRs2G6RhehdDu4bjJVNuGFKb1foqWyGKPctrFxFKeL3CErPagPh7cCGjmLiz",
  "key30": "zmioq9UC1iefV3v8QMH9hwg37VGB9g3Dr1oiriU5iQFzke6kLY9pnG4BvPDVqzEY3TN46FAhjyRoRQH7LgG8LxB",
  "key31": "57T23twQsVP7UrUjWXBdY4VVKQFHHZadaJqkcvmMZtdxrhrNKXD5nfBUc1VUTvsnNA4SxzrcGLZn4h1txQvmkNZq"
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
