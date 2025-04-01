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
    "4DwfL1pQ2Mwrw9d22XbTnqANmqtEwjn89KMCVis8Z2dpdJiz4kGrLcgZC4KnkykjT87eZQYRZdCUVdvHmsugGqiv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "424xsxhF7MLvjUx2TmUwzGu21ErDEGVXQWtAWixX8i3Q9ETzUvtve5WUztHnvfsktwVM7KZLm5oPmeMJETLs1RSY",
  "key1": "3cxpyKnqB2fNkJr6iv87XPBJ59dRtpHpmCPv5Gz5hDDTbLRuMbU36peeV7HKiAjxquBjSc5vq2Jt6MWDUvDdDBgo",
  "key2": "3p7zgBucucnJBCmZufzAawXx2ErB1vf1k4TVCKVPdqDQavUFvQyqxm8s7udbD1DbaCEjuJv4fGiB4EwT7JTBBhwF",
  "key3": "4f4gdaFDzkWRiYAYSZXYR8himCos2CCFHAaaJyPhwnhox5vL45vML31vy2Psswwo6YuoCj2tmuzDtqsnpyCBvzGe",
  "key4": "4u2BJysxwi6eCbgMa1GxnzFtViHNrFxmPT65w2UyJ9GF2rSAD6uRVXkfezKXPV5zumMHuM42RqcgBVAwxqiQPJcD",
  "key5": "PxnzAE7sWKzukEu6pU5vdRrNDVUZUpDaprwsuCXuARMzsvkbzfk2qans9qLVLqNZ1JvhFQ4VUw6d1pvM24yuVkF",
  "key6": "271pceNAyrvSFGuknx9HaVcxKGTjjVWE8CrYBc5VF2GB2rzz1mRM2Jn5UpuKRANiUoBj13uSnMtiKrirvt2bVwqi",
  "key7": "4e6LN7U2Mbpp3PGerJCdhkDm3ks13tSZreN3xFQHcMcebSrVn3UN8ZdDLSkkkpJKbEfCWd96rRJPj82YoYVmQGbd",
  "key8": "5N4zcGnf9YLaqPjFJ9tZpg4Y7spTBWirV8eVpd1VsF4Nipz7YjBd2tEFK6pgbwd3BSVWc1JRMtUCxcCXjbDoJDsE",
  "key9": "34d7VyR8L962rLhvsedfC2Ru5WEqA7u7CUTSbiLgmPyux46Tyz3U7SBRWMCX2vFjUip68SkKxZbQKig9yaoNf1E8",
  "key10": "65hGuFavFpbP8zG2Axzi72psDTCbbXoZXH7Ev1mTaZQonZ5YjKiSBJVbzc8eTLvWL5YUuax2yr71gjiHTmE9Ygob",
  "key11": "2XEzskVmD5ZywbZrNA2hUwAYqj6kPFGGusVHYYXFGwo61TKGDsJYn3WXqwhhAHLVg8uesVriB1oWW1JiysjAXbqP",
  "key12": "74YhfiKYLiC1Zd74AqLHQrg2StYdpm23uKidH3GUBHUph4KEYGpCpPgdnxnzcPoXYu6FEw33HhNXAYFvVo9tXt5",
  "key13": "671pH92jV3Y7jfZtxAaksu41tJjBkiiPAPGAeYqVRg6HBgiiG97838fpWGEsWHZQQwy5Snf3AP9BUjF71G4i7SjS",
  "key14": "4E8PqaRvxHMVxZBKf2UYYc3pLfHJyFranAY6HAkhSR5j7jrPSE83iywNsaJKGWJmJ8XXuDQTRVdN2Yzzz4Lfg3ui",
  "key15": "axV4FWWTNfSKHxJn3KY5XXd1xixCFeTVphuJayYh6PfULZwf3ta58zL5L5s7CZX9x2LLcEdxXmviT2i9LsPbdV9",
  "key16": "2qKZCQhJeP9FXkFmNhUA4SQmX1iNMEeQWtQYD52qXHC6nbPo7Ydv3jZRuy41uR7A4azyKXczvPVEX2H4M9JxXu1i",
  "key17": "3LxtpSXdHMYQX2qBc2SVtSmG5oeT2KPkWNjd9E5856Xd1FZ8v2fskhwpC3jqutn1bipxTK66VQFQ7vCPeSqnSniM",
  "key18": "ofB18h6RAioRdq8YFv6sjfKrF2BxQtweF8Rwt8HmciGqfpiRYx9FAqgnySihbbS63Kcth366F2MAyNumpbEf8Bm",
  "key19": "CgiKUK51SkmumhyqMKLmJDhZ6E5CQXy2JLhhaiwCvPQmZjqdAbb1w9fJQ1yaZZoTjEPiYpgrCyWob211rfST6Fz",
  "key20": "4wn3gLRTNpsBKQtx5cH7jZwX6JyTwEHmUUqmkxbMkxgXsnScphNyKuNnZa8hy8zrbNHZwHJ7DYi8n7EdLwC8cCor",
  "key21": "1uhiC4Bw1s2PnH44XVuCxW2y2MpYKTs54Mwq6Pr4iFojM5fqt3DtmXvQ3rJUZqhr9tvHbSYu5xY7wXtqv1YLBq7",
  "key22": "5czqk67nNAKx9m8iNADe56ueoXaevyGd6SYLRxEqgQ1kSJShtEa7gnZtXB4KtdfVUDBDtnUjL3jC1B4T6PHBDqU1",
  "key23": "4V9uopMGicbYfaNTchRD1sgBYJYUKrwwh6tTkqezTFKgoz6YDwJvAT8XMST6w7JGitFGk3JmGLmW3NrbyU2ApUSA",
  "key24": "2bUXRxcoZVvJhCcTMruhoXeXrdnFHgszEdywiAv4x3Sxhw91B2pG4V7bwrsJQgwknxUDdY3Km6aZF9v7fcvvEzBU",
  "key25": "3pbLwPeCqNLjHXHrNZUYMcfuVmY2XCjqzxSJ6HqKw8PSuEVS1fpTWsZfbnauChVasesd8U4hQJjKhxPa6QRVA939",
  "key26": "3NncsXZeefAnRA7GW5QXUvEHoJC5JJyaQVt5yJ81CnPbJ7Auz9GaAVNE4DNSDvAxUvzhnKjMf12rBhrjXn7uXk8o"
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
