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
    "21AWsSdrBEEkVNfUy79Bw8R2RTL7tPz1Q6XRYz6ca9SSYReUhu2KVLzwg72cJLWwUZ78E3UhGoU2wdUJJ2u1ezFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38V76EBdJkbWuzKK9xC4UciErPUAja1qbBvStBWQRGoKXkeP8FTpkoeU49KLQGBGDs58MocJ7bsD7ErZWNAnrGxw",
  "key1": "3f8cudgag8mDwAjNSdw3NQMAHtVxPKEVf4VnpbbvjogBWyFyiY62L52Zu9TZ7rWmVR8bARQn4ZEaBrAXwaVtSVKV",
  "key2": "5MbJZXna5MDy4745QGXVzzTMv18GjEtwB5oBxC9LE9nY8Nr3yW55aNiLZtD9kgUR8pYPoky437A8TMggqCPLmfGr",
  "key3": "4JVvwtuoc7hH6mNdDs64jdCvUMKPF5S73Wzjx7AR42faE1ncMhqLiVNpfBVVWBf9CQmF3bxnp9UMjDNQxwnmzXdk",
  "key4": "4pUvqmwd4QFxmkBNh2Mqgi6WteaqpzKfNJdzqHooZUtfiqLM68CzYvp3nmM7csTLXPDWJ8k98YemJUHCvnbKLH4m",
  "key5": "4YQ82Vr1irQidDkbBXzxPBFdfKxrv7gnaEif5hU8nTKxFxGcMfu4yrdDRYtAfgP13woDshPQNgbv6518NgV6ztuX",
  "key6": "5k1M4S5tvK5VWTTk6WkuHyCkxkahJj6mMhTtphS6VbDLGvmVnUZpVDpod9XoNya4Wx3KyHxrCn6qVsBaqMHTjU8E",
  "key7": "4JrieYBwMyB6sf8bPbrEvWT2cpLMdy3tp6jDb8hxiauJpxLXgUSGGHhRGcVLRbJ57YvAuKuhR94dGLJnDzGwsSvm",
  "key8": "5qUptfcM9bqG9DAvH53a41AAPw2ZxM2e2GRCHZ2QvR7UNxhNvgU1rLKprQTqkKBXkCRWdfJ3GreVFmxN1mkBU5Wo",
  "key9": "5B11f4H34cZXi18acJPGwiY89UqtCdk1ftywgKDxoqQmudBSxxTktWFMNJ617SMsiuTpf5WvNFpb9NNVkcyqfZtG",
  "key10": "26NkD39cM6PQa8dAdm6WDJiGkS6aRhFauoRMWkya9NSs2tddp1as2f5WBhH8QEKrbbHQhuoWTmHE8xLy2M479koX",
  "key11": "YQsrBHdtuaTUGEk8Z8XkCvMhmMPq1NXTxmPkRyhnDgrHevsC8GHxMyfrJDmoH23YkQb3vp1nvQFLVxV1NWoqGmN",
  "key12": "4krsZ9yKyfLp9HVhLsiPCvn4BqFwrvmPJRMeT27hq2wkE7v2mnNg7LjYckv8qvdsXeDMqGksDsLKsKftPn7vCUPX",
  "key13": "4VkouQxNkBStWsR3zktzjkYakBs2Yt3QGnNt7z7rF7fFo9KfPfqp9oGeKkVmXVRMcSL3DgaFivCF22iQqjqoj2em",
  "key14": "5YVBwRnsZy3hHP6uGPrAoWqT1ms9k7kaZS7FFKjQPScnagv3mzaDupxmsweZK2Xi59GsSxCuRbHX1czNNJKSzBKA",
  "key15": "4MYdNZTXwU83BWEQLi2B4Ycf5gtDQ2bLDYtTxaQ5SBQiy7Ad4W4M1buBHNGWt9CsBQQzARXFsQ5iNGnwmyzwfq4E",
  "key16": "wGq731NVm4QD4CEAAtFDsxJSbEcS66FkQdJv1tsRmNK7tQ9FMyoe9rKSKNRBvcmnnAJSLpZvHDBsSzTaitijwEn",
  "key17": "2GdCb2gkgRWJN2RisopcZNdKfWGaJYeT2sYijzidpj7vrTArTBgiUzC5YLjYJYYnwna54YiwVhafuHUSkiyfiqbm",
  "key18": "5wnsV7N7BZJAEM5gUUo1FymfD9FvbvdNUeQiBF1GBiZD4fQB6s5jYYS6hksiP984dApn3ZT7D7sP9ARWyuhRVmGn",
  "key19": "3x6exjXStrQDEFWcyvoxXXwmSCsqUzZjJhNd5y4VSyR2tpfHnRLeAFkbASGDSo6jsbQAcyS9yray8bSCCHCGqYf8",
  "key20": "Bp5YgmPZGNgiowSTtoVrp8TkTmkxKVNTwuPrAVYZCqecMT2P6spaEnFbuFrcaC9nKbT2qRrWwdvy5LFp5pc694L",
  "key21": "5wFoSCh9joCTn3yU55LkqBN8aX867qdWBxcsqa1SEA5TsRcLC4jVNDF8jsNUERywSv29KasdrRx5u9UNz7sWtKKk",
  "key22": "aUqPsvPELKY6UTo5YDB4f8nKtwVNqgAA7RThTL1n2XbQouGuLc4dePv9rRpLwntw2hwM23R9R5KpbCHAXgdxYkR",
  "key23": "3r1Tvxx6mVaD6vDnBhp2csqQjonyzgJLi33USMUoWb6bhwryh2SgXmYTbwuv6LBvAqqLJMyHKEWgy7n1QL5VK1Zp",
  "key24": "pT8jtXzs42J6L768ebqFzemtbsmAJJcUkXBoCwrsZ54WudTKQGcmD4AGWSvGj2Cu2cV3uJeaRCz2HFWLeE4fSzJ",
  "key25": "4D5dEbJ8NXEJQ4Sn9FschPRbBzuyiem9szqpR7WWrcnYnP81gjEE1FAmdHNL8pdFQGEk75TDbShTMoudfwEeN6Uk",
  "key26": "vrcQqnwmayqXHxLUQDqSvtn6YyUon1eEPK6r2pJE5PMsBJJrF9wTN3eu4zuUD77ibHeW9RXaQjiTbE9TeAYV3XR",
  "key27": "3U3Q4snMHmac6GHDsMFDnYZfVZAAYGsPyq5t5Bx3Z88gv8rztfACVqL3xPD7dbT8zZfBaZrgUPxJUQw3uvPiyyUf",
  "key28": "3DNLdFRhSsv3a3Tu5fTJacVMoDbz6cLpLDY1d6pdcy9WXEFtpBb4YZjGeDdcBX58yzBzqcjgdDLZ3wdixF2PYUMa",
  "key29": "xPiTj52enQN3aYGUpTwfHXLszFotTjGEPwZLatTAp6RyC1zqe4mKZPDz4UQrhrbktGSvnu6KiRhomUfAZ55AsK3",
  "key30": "qPGQM33RMTc8gug9DPxQHZBSpMmRu6SBz3orGaNeuLYXX7PtRUaJeqMGfDh8tPx2Jj8uxV7953v8evP8kdBZmCU",
  "key31": "2JjmpuDoNV8igzCahPx5Mms3J38bddiVCpF6KYhf4XGfDctftq5vFvWW2ue1WMQA17m64zXDgurgcDHhukPSvYvv",
  "key32": "4gZof7UPp9CMSdY9SUGrJSSmR52pTxmdQq5iREMpUxQ6fCwFw6UiHzRsotL9ZnkZZrde7iEEziuVwNgJTykF7S1d",
  "key33": "vHvNXSHZkyCCuqyLgbD9zQJr4CdE2Hai42bw1yFZ1tSS9SCbWHzEoeMLUHED1qBMQY7fv3oov1jZTzYfjgNqLUK",
  "key34": "4o4QKkMWzkfemisFJbc4hpEmmRFkW4DL5eiUZWHJKaG3kNRJgt5kyHzujpUMLkyboGgsV6VGkdtRNRMV1PyZafed",
  "key35": "26Vn99SNWhnWgw2ffGcL2ewEuqMkJJcToVCtLXQAfnZoh2L6reBhzsNyqJcsuYrYMs8yYPNpnpn5144UVWqAQTyS"
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
