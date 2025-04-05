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
    "59khfqRdAG1LD5y1TLvrr558Sn7T389ekaa4HNXV7hYcVK1N1qU8Dbymu4FVfK1cyJ8fP65vMr2UhQ8pQHfxjK6a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gKrHfTwVt4yBMmzodceJYqY9hswdzRQJikxsH9cjfCDrSChJELZKzkF49xeVppuFyGwzLGGcEiikNMZuzdCUxFZ",
  "key1": "eHa8FWHJevhJtykN3PvxJBuctENJs38JRGMC2XLwnp8V1rFVtdC3wU6zRc77eBW1cUcRmPzb9iMDeHSFPbKzBHA",
  "key2": "4fPoMzngGbtM3HDpu6rPp4kYtWBMk4Y1kRdVVG7sesthHXnW4MEPQeDgXGM8YezFH9U7GsqYpm9t7WwDBBGHHBUk",
  "key3": "3m6gTJ83qkxsBS2Zp6unaNaj3aktcuvJA5sQCiHynfqyWyyQqM8RfKcAdiY4yrSuLEjuVxCiYo74uafyS5gttGXk",
  "key4": "2NKM6HyXGx8jWG3XS1D8KznwBouoVCRvJsfPEH29wM33ngym8bhfj91HSBLJAaiviBH5ME6TpLNU716mAvi4TrYc",
  "key5": "61zzFU9vKT21V7fkdVCsd8szswXM9TPtjmD9iJmWvcfovzAFDhR39Q58Hm3sY6p3BeGQiD53eBC7Nu7YdWJcft4D",
  "key6": "5zwrxBmNEdy1baQSDqk5AyutcsQU5Fh7stdZV43frEfgbeEKv2htmCcu5iNXjhf3mtPg3qnSDxtehMrTPHVet8FE",
  "key7": "ZaZTppQnxJUTHWrqPyJHKeBiv9y5nCkzxduTBkoQhCj3Pajy4pmoKBQnexvaGxADV95T6izFsdYZLRkEuudJwWj",
  "key8": "28ZQmCepf5qRs41gwhPLxji5J9GS6SHq8ED2t7RVippaHCLo2a7D4KUzkRHtDtJ25jBTp9n7gWAqVPr2t72gRxam",
  "key9": "37c664jE8rnng6rD9Tn4oNBPS9uYjqjNfCbGJdiA2KYwF3YiZ2XJkx3QUGpDH11FyoSFnF3bhn8kVGnfkbtq9LDt",
  "key10": "22of6pUT4VB1sPAQVjTgSnng1HZXCmZ8sd1MPGGeqxwGLUitjGb6oZpDBuJkFMBzkSDb7chuib8su5T2HTsPtgXC",
  "key11": "36RF4Dao98DaZG9BBmvVhwSFEZw8XJZGoZgMrTjaj9CAGQmW32jxU1LrLK7THjumiB5Voc76ha8JAcanLeHyLy2Y",
  "key12": "2kM5UrYjPbttL5QVKAazP1fCgHvsjq3vGtVv1zANdoBsfWYQadiCEtEfseUR3cUcqb8EcHtmW6JujSq8Uhmhn2mk",
  "key13": "63yLkN1LvK8SYG2JQ1faY33yxL9yrS5i9HxkPKte71rpbTNyACBfMEWmY5E8e3smoDKvmwcoEA8CFUZqKGnLtRDU",
  "key14": "eTzYTbLjJbe83W9nv5tKepiS9AVWwPd1MePivFcrdMszuxJzugcN974NiVbjgNQoypKfAGSkXtMhvFsn7tSBq4m",
  "key15": "3gjkZJbVctq93eQjvXq5BsLenfydncoTCxT5UU4xKtxMFaNz1GSvRQRGVvEfMZ7FkrgVdcBybZVs7LzdcNp2x1Cj",
  "key16": "33xqD9uyYWMtEb4vFdUamVSL3BXM8KsbxhS5sxggMZ5mwN41ueY2hsZfJbCbSuKwWdu2sSwJ3vgGEd3tjETi2o33",
  "key17": "4PR4aB3iH9tMYHQSGKejuuApPQkxaLJRrjXnGnp7ZKwcfeYg33DHRDRFBJGmtdVWb59GAt3WWGL1owzdD3ncCcvE",
  "key18": "3HJvt2VRhkfUrJyNZMFZTyuAqBQYYXZr4jNbVApHv58MfTNbE1wbZaR8kkw6TeF5fqQn5D2dNtrmc58EthyTPZs6",
  "key19": "5rSrRjpHEY3GsJ2s1PRduyqd5151hKb8MtbscEsjEcQBcRVbkP8EuECb4ZoWevRbpt52YCRv4QnP2cuxa5FY65AY",
  "key20": "4kpe8Z3jZQYdP8SjnKWNbb6m418Pxojg4C7xsnytsC3AKKhFzs6CgAXYGwUVCkPjjt4RBbqa61SxLzgkabaJKk6q",
  "key21": "2pEyEiwRgrV7EGtfd8DgZYWVWvVjkXM3eTzDHcTrPzhShb2Q5LvMj7rPMRVQREm4m6U5vHf5dZAPrwui8RvvUiEr",
  "key22": "4vkou8U5GgNH4MG9NzWAwLvB7S96TwTJG1EJFC6iEierduwTajJDW8qkSKhTyoVVZrW7P1nPHbnaw6fBhKjLMb6M",
  "key23": "58EQAMgpyZkHxgMT5vBAReyDQMeNiiTgafxB4fxrqzKQZaUYHDW9DsQRvGX3qcfHrYuc88bG9HZkHErmC2TQVtyq",
  "key24": "5YSUmF4rsREuDxqwYhfSTxJn4rN5zoa27fhrQsiAdajffXDWoEk6Beuxk5VYdwqWY16awywoCB3gowseK3zeSKoD",
  "key25": "2BinYfYQqJf4MBTBxhTcJ612hwNSVX8ar63iZBg65XNrrV3ands9tiR14zYe1nY8EA1XDZ33aocvXVoc1PaXWnT1",
  "key26": "3X475L6eBNiNTggu4i9sFpL5YuobQh4V7v3DooEUouCqo5TdhPHhh3u7KbmRcN4i4EdbhtGXWzfFN2QhdfCJoZ8z",
  "key27": "27n2kHgRHuKD8TMnjWUBCVvJP9pRi1onzxFoBYJrCS5gwu5EuVFBWUM642MA1hzBreBgaczuXi3QfcUmg3RzneMY",
  "key28": "2YrHFWYidb1B84soZVB3r8NK9ScdKsV6EYueJ6WJ1d9Q4VR8DYjRdubvyQ1xa6YwkV5BZwu2tSPtxF1jJBYxYCam",
  "key29": "43soYXRxyXafFYBVEo4NUgV6TsFqJ7bwUrzUE2BP414vAbhbXG8FMMqRiUkrGoJVrJPAZWrbWp1ubTo1LZMngeX2"
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
