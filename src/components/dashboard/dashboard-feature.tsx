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
    "38frvJbtxedLXHgZ1NnbHg5TzRHqSQPqtfcZDTJwaDDNUc3Pwr4H6YtyMRV8sgoUJLu35hhWPhjrRKL3DtKV6Ept"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "MW9RWB5hD1HGZ4rjRJhggWPB3y7A4eGKCxkp6FRMMztG9Y9NSvuoE1ntapSgi4MV9MAZjEtocUtSLT4HZCjakKT",
  "key1": "5LMnVBeh6DBZrtqr911HhVFTWTUZcpiM8noaTpCNkjJZbN4n31UqX6yXtxb3mcdVv6HL3J25NYVPPCazo2nKLngo",
  "key2": "39zPqSPFPARJgX2xRUS7xxHXVS7M8NCsrvJKPifdxsAdRtWw7jaRr8obFuKMQTHVTjiYVajo7DQrQdwjad9ipRzW",
  "key3": "51PgjUnwjhWrPkgh6pzibEyzmmKmFu22yTqTUcp4ErjcGbPrarY99pDCGkGBNzNrdU32gTJchYEP8iz2UCNgv3pE",
  "key4": "tR7cUCMAqobQnmLqXRgywbjDT1fsXgBpvUv7W1ykB2tBi2NaxQrU6QQPe2N7Ak3ABXBLnDWKp8W1Y2fSCaVdFxV",
  "key5": "zdepy8gQUw4AaD7QqQGLddzMQMoFvxsJ12mkyhKD1TD2Qzr6T4WEXVVxcPZCGnRdwsLSqXx3K1UCHsidvB5E6FW",
  "key6": "5jcacSm15mBk82dEVyKzBBVKiKZkcVHzb19qpasaMde96mei1hnUfYKoKsGvUBmxnHAnY5tGSzhZbaEiv7DUP7K1",
  "key7": "2vufgdp3C7uMBAHLTAT4j4q5KHHhPHV8HK3WBoq3D1cSrBCzn4ZQHjRmzChEi5GNacSJ6jYhstonPVNCJPGngjwH",
  "key8": "3tgcFTj2ttGJVkQWJeshNcC8xjLegdVbnURiMJHLRH9UNkDm2v2soBkPRbzWjR2syvzEKsWBi3k1xYFdPu4NLKMY",
  "key9": "2a9QSXN3ddnAxTVttTXojyUGywmUe7hbq66A3ykPvA6A1RCFsXUj9fJpWRAQmkyBZ63LjFtLNMoTgwRVX6ttRHJc",
  "key10": "2pW7RY4MeDvi9bwRK6k8GdX5oP8FgqfqbMEqjMF1oicVn49ug3ArbA1e32oy2LAcKPUBxPAL5YHhNTNoChEqbL3V",
  "key11": "4uvUTXDvqkk4MK2vAbwhYevjUv67ZigHYwSduitmJwRMFnyJGXYB6xZQq6BdxDRkSRxzGdax7VkbP9uDze9au2bt",
  "key12": "2sNCQ3TYRCQy9hkDQKpBF6PFXXQZzaTgpp2jQQqBFCRirAF538nxXw4ugPfVjCF7CN36ekQ4EnHT79gdVV73MHa5",
  "key13": "3sTVGZgV47BQz9L87m3ZEoMFgjrZXi4MEYZ9opAd4S5DQuHyoKUgC8e2YW71AvxkWXnxAgC439no8gSW77nhJ9j1",
  "key14": "4zmTieEnyL8XTjbUsaZhU3uoABKPvjDZnRMvp9BRejvJC5AzUWFngsrMXmMDqvuKSEBXARxR7TFsFuJT5gMYqyfM",
  "key15": "3opTie1VARVaYm8WsMKCJYHDZBRB6PMpTRYjaAe6Y2JSAXDXXSKDNPgtc4o6ZmxEZQtNatord2UThWo5TNbCyGTR",
  "key16": "3ZEMB1QSDa6CZvTu76dEzfbppWGBE3qW1KNk2gjWKmkNV6cAxEM6vs41K84UhRpEo3VNZswH5B4BHbVKajXW8x1M",
  "key17": "2juw6RdDQvT69sf6eXnvXaUmQ4MjiNuJCFqovLHhCT9YXxs2zNZgR3B2sChpbKvcyBcJobgQGcVwa4Gc8n9yhYro",
  "key18": "3Kx4Q16xpG6uH93F5PMnuXkXo9QMeUXm4MoHmZpa7uyxFatyazjoW6WaJgbTcwBia7HF786ZRLnFZ2q1pfR2fJa9",
  "key19": "31s64up5GUJs9DS7Kgr5NYFNFSYYkzxKvhQDL8BrYEAkYqqXnFiCuVW3ZM6tqRUJT2x1dhgLZdUuFWzvLEDJ1QPe",
  "key20": "pJoi63nngPhoQ8PAy6fLUCnCfARhWh9mY68H55LUUVSNVmu5dczJMntNqX92pVSkCjjSGA7DgfKDi1KBaMBwNK2",
  "key21": "4ARFZ3vHNBChyTtkQ7oN6KmGweK3Vd4Q24NdKWc7fCT6Na63V3X5YZkNPpnZCErRcmxFyHdnQj47bE75fTaYep7i",
  "key22": "2fn1qGcjFn7QVUStTj4koGFXACcxcTix97snmFzfWBRyXMaudd3RbnpjcRxr5E35ibfNHaSpRqeNHSTYAHCdh8Lg",
  "key23": "5bcVsZXLzYpfmvJKaV8pgfcMufJopU1dtyrDvDGJDxYH6QVqEcdQhW9YdkiPg25WpV2rC9w63xmeDV9zCc6yuE6V",
  "key24": "23yPkr8Zxj1DJhxfTT1A1bYJ96MhBRhCig6n22gDgLhvqGFjHxRc5X5TRxUZRw3AtYhL7bRWb3TeRsAd4unfvciy",
  "key25": "4fR3dBp6BDE9NHqgmGszB6Smga8W5ff2QCVjUeTXkKMsUymXrPKjcZqXSpRpZgE1tpZCma8RRfVM5CweUpmPqFco",
  "key26": "4jRuHaKww8Vycdct1LcxpKJMu4WuZzSxhEQaGBQKjdMdQFMV4ZpQ1pqtxVh4wtumMGUtNyNcvB1Yv4uQcTnB7Hdw",
  "key27": "5faaLsUXzgbTbgEmd5Z4RaWN8jXV431iDCiuMkVYmGFN23YEnz4t2RJ4cND1YdkeH5gvVCE8R5sLhFRK8qLtkcJB",
  "key28": "4Pt3BnjPTEA6QjaHC8B6AaYVvPfQVpUKt3bQ3PDu1jop57w8xM7wrY7h9ticYdNpRXS3Y3ZnnBhBiE7bUPhQBLsX",
  "key29": "378dmXds8Pn4H5HEwFESyPktwE8KTXa6L4C9NuUdNLPNf2fR4QQLogfdCWuwPnbZcnbnWmWcwn96JG6Q6Wo6qKWX",
  "key30": "5jUJa7tDxXFXURmHnbHWEQGYh1wmtfJth38TPCj4rz3BNxAZbVn42eKuEqJFVi5beQmDDG2T6U3DCLX2yd4JQoQD",
  "key31": "5dKRzGtU55afCTu1A5rRW8SvviwCTA4Gcz4K39HvSAVLzWBgE2K7XxBN1encKga1cfwCup2bhutQTuwmueCLWrr8",
  "key32": "5hQx7wBtuqJ8weNZ47UNo68XX8AGG8swnC5TYDHdhecuasEKmLF7soS1f1ezLBHBG13TtgpWK2hbWHo3ZDgFtX4E",
  "key33": "4AAPQVmvmbZMg6EsQdRr2KChuW3cSF7gCLMw4gM1rjjgX6TnG5AH7NoCWkvqzoW9PXQvQRHnarosvN4ZCNj5Zj7G",
  "key34": "2eEzJJbGb16L8AaEomgHbwkdQB3WHZhXeubgsE4uv288nsZRjcTiWkBidkpRS7zVEeom1c5tjjwQa17fzXP47BX1",
  "key35": "2WtqKGkuqLPzzEeKhTsAFhtBCrezMfN5arJeQLD73Eph7CZiZnjzPvnJ8HncgxBUhvGq1EnTQdozjfuqweYRY2x8",
  "key36": "4Gzih5ouJSJJGamswdVAe2d6u3nnbuyQYQyBLx7fBWCReq9HXUR7GM8iQrsioCYo8XA8BwXT8DkDt4ja4oYhchkv",
  "key37": "5hJATTDzYFwDAncF5KifEJfWdDu2jTNDXYpxdigDZaxyppvaVB98TeDzMuK1apMvbKqaGdNbVMMdidrYBp1RSs3n",
  "key38": "3hsopA7xaTkVnVfhwi8CFbSsF39Kf6mzKbmSdcPiZ8sigAf8kEoy7SXjWHm8vmn8Pi5C8EhJXhRT55cK46HQJQ9E",
  "key39": "3tEeS8x8fUXWfCFVdP8veiRFf5hxYfiHDJg8AAUJmTecAjC5mz5eq8rRMvsPvS27eDF7jKyGTRGaXio4YHTfqp7d",
  "key40": "2J9gVdQVnYXMDQWaz7JpRmY4WokLU7huxRjZYMfUCJFVsKXT2SPy2uxG4qZFwMvCM7Nxyisz55935CAwwhNDebHw"
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
