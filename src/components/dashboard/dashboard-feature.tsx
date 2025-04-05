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
    "moEPP2XuQDVy7neBqtTsXQA5iBFc2NxBTUHCJpfymLrPg7V2cEZYPhbuh4LygtSZe9QcNX5cTYbp1BJeqDW9wDe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28WXDqB5yMpiuqxXwiA1mEyLXcpzVoQHWndBFuTyb78EVhRTFbNEPxYqrEWDpdCaUyEZhvKCiyNFRsHC1McDrNwq",
  "key1": "2K9HLx1VgkZJoZ6uKMyPY95645JGWq95BRq6Nsm94CNAM6yyrfui2CFBnvXDKcHs3JnyGtQtYcgc3qG4j9XRERUP",
  "key2": "4DDts69Z4kubvRLk2pn5jRmQhfWxSxYMp58XiwbZHrgE4pe7e2BzZ3xEHnTCfdt5PfG2WdnU9sQGkNkZKsz7Hyio",
  "key3": "5ELYhsFptTayXhLN9BJhRZFwRoCon8mgJf1jtx3KyXpohDgCTD3LWiymY6AopoXUvLbTcXXK4vhVaYqFTgvxL6BZ",
  "key4": "DfSGdmifvkY5QruuBhryaivjyJPTDtspTKVML7hVBVduQQBAZgbsXp4PGBunvdJ3HTeaDypd6a2GAwirC65V5fd",
  "key5": "4FqUDYxPcaucg9bzvppAFV1Wip1271UVVBQ2BYkzWgvwqLrFbwof3Hpq8n2TUN3RTkXwoExy54WXcNwMsfMRXCwX",
  "key6": "2kMU8SzUqH8bMczMU2aJdKTDyJwwKomnFpBQLWcZ2PSoBzcXPuCRojuJcghbDoV4mhaib6ErgiaYUjyhy3PxL4ao",
  "key7": "57CyzbMUxApGATUEzTQt9LJwW5C3pFtAnCYP48izJdetczTGRsLBYFofRQgfHYudPedvfiQd6tRBUYVoGPDwVkV6",
  "key8": "3ZNbXkkBS2abt5KgvFAxCzy1xg4G5J6kYiVs3iG4kNKLrmrYowZ5em1AFmK3ZVLozZpXTKMhTkszmEYuTSbpYgP9",
  "key9": "2h8JKkuHYzzmSQDxhQiL7Tu9FTW6CX7w5iu55Mf5Zy8pTrMZ7aGAdP6DsWw3TeLo2evFjhaW3TwaiwvkwVAjFiXJ",
  "key10": "2H189ZswQsXAwtPYJbUQomdt3DP7x5TrHQfymKFDY5QAM32jGHBdxsqdVcLuVxu2BfQjvYL13ePDNrKaXoEwoLup",
  "key11": "2TAoUCLyZxxF86KvfusVRyvEE8MqFHdy62SKnXbZANmcwsLCaKGT6mPYv8cNLD5Tkc4Cj4iY8t8DDj7MBm7PBdNi",
  "key12": "BE2Nw8yFsGgT5tVduMJ4WiKt621hYaw5NccAuMHeQCPkugo3NtTm19CqX2HfnCicZyBRhCoE9bz61LmPrcJd9zG",
  "key13": "3k7Ddb5MV33kw5hmJFfN1ExUd9j5oBrnJggBcTuA2DQr5hpiNTGEeQNPqgwjPCPRhwSVLN5cnH6z2ZhRyiXGXUbX",
  "key14": "31B2r8JXMNjzczwvwGwJvh5fGzNsLevdG6mySN9qdRUXQcJZfc7JHScZea1uWLxhXgyiYywq6653Ebofy96YQUso",
  "key15": "2518EcSsBkzANC8dcDXWP25nLWpifDsRMjkbxDTdDPwtf2szQP9WcFsWcb2L4fKmXzVuD4tiWSE4sDQEnSqEbfew",
  "key16": "w2fTHxppSAVFDgUFCXtYJwYvVFdieVms8VkA8PEtQWfBioDrtgYc8NPvRC9gfbM1u1UWF4VpUKVmvgk1pXGH316",
  "key17": "2bMf5FrgnnR3pArBa3qQCyMgESDTH9WTTAy8RgP7wUA8GfJo62tUnHs8fdPhM5Chnd4gUi3CXzBEaUYByCbgPgar",
  "key18": "NndiVPDGE5diQ8fd3Hj24SfXpMNRxcLxqfxkTExcWMVAhbYiFnmBaPMx2LuXbSwpHniQ1kjCieeDXpxvEqjrmc8",
  "key19": "4dvJx3UjezwFVDv272bBKTedKYvvxDm8RzD5bNNHJKprAHWbLT8HS11BqLRNB8Hgj5DbVh4FHxNuj1kvLkNGxo3i",
  "key20": "Snc7WvNcoRrztc9MmowEmgnDda55zzxDCPrNmVusyMvzeDZo4mgh9RmmYbibt5xhndtMxJxqFrXq3hSbTLbX1Tq",
  "key21": "26kwDYRLWtEzZLfv7kvx4rzZsJNrfdZyvVGyx8GUfwsS3zrknVC2LWDwwnyaNV6q1Hc1zTkyNSDNGJNUqovuwbF7",
  "key22": "4uSh1s9E7V7FnDfWCWcqoE98pk6w9QDFipP5oqg7Gyxm91FxA5yHwDUQLf6FcbFu1uXzAZA6y82Su4bAGkxFD1Hw",
  "key23": "2MMJxZpqqNCYXuGfdP84jx5EhzRzq7yfozhqS13q7u7cSLvNUuXceNfbCj6bPE77f6t7CSqB72vYb2NkZvWiGsr2",
  "key24": "5TTQkYetv7tCTuqegrwbh9fyyHK1Ex7gZdKr75a2aKxz44VqH8ABZLRUDwDyJjs6sKkoQ6ohmVQrcGt5JzYYMYZM",
  "key25": "4viL7DJodoZYRu6StxYje6dyRWWp8gZzyAtHwC69UnheFQUzRHTgrtfVdE3jDdM3BaZfieZRZegQdakz9zANER7t",
  "key26": "2ARKtJ7BTgQEMx16v9S9dmFaV74RG476jB5CAP7i6kmdaHDJeUegoTWSxDsNTmdX6c4GFEtJHxwTho8HagsiNSDc",
  "key27": "3DAitY1gFUWa3Cw59GDiLU1oBkFRqVZdnqGSviYpitD7Yc6djs2bFGzjLYdN74JYULWnFSGKuLFbsW2xL2pBsC6X",
  "key28": "5rCyEtmtqU8fE8aHrifQJNGFLa42vKALyFteZBS8VPPKUNrrV8VsTR1mWeaZwLmULNJpZ8pA8RKNKK2vV2nGLx38",
  "key29": "3pwSx4h3WGfczTH4VWvekK74osTGAtXtBqt9NCzfDWa62sHzuT2TDfDHet9FwUthTKEoWH8dJa5iKUMUHz5TJU4N",
  "key30": "41bx2UUcA9zRxcjifRbU5HrCQDUFY8AiZsR6zzPcDFAavFaFVoPaszns2HQGo6U4WKVmXtAag9TZC1PmrbpEmhvb",
  "key31": "5DyAjHKpH1QpYCoX6uYmYFtT5QgKbxaevqiVNCbMrbbKQ2yv3eBFY2Q7WoTXaVx6c5EQWT55JHFgutYsRYmT9oHf",
  "key32": "27cE3nUkKny2DWqjxo5ji6UNJoVE972LFa4xAg2vLsqNpwo32A2XmQrAJGVWRGkJtvXbxN7RUv595mg98oXPEfJs",
  "key33": "576zufVpbKWoJb37ADhw4in4d9bxNA7TQ4cfvbbJUtJCtqrfBZoom6L33C7CsH9FQZe7yQaRCvH4zN9NNPSK8uE4",
  "key34": "2qD7SMyqFzf8QDoXXDD18qxaKf6v6joqUuQRwD2a8jQ7bZdKX3iK4cGzJZgTiwknZGwdXpTSKGGYg1gyaHZa7x1d"
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
