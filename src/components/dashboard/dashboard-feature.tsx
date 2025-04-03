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
    "4FSRE3mbLLDfZFXtVbanfyTN9XZKxqYoVm84iMKwAq1E6nEF4abRm2BooS8GZNeyyRfwf54Hekk8Jrj1iCaPsd81"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wLzVc4aWtXyGgXkMdGWsskuX6VzP4EPPwJuQfntxzWDfEiVrh8brzse9ZUfNsz3aoiKsqKvSseoM2JBHaukPZsX",
  "key1": "5iCtHzMdhjgrtH5tqqNTJptbCrYrgyCU8NFbDmvKEjpEdDvBe3eQUohAjiWf19QMJDSxgLwZutca34WJbCNzvUd2",
  "key2": "DsNDCmagwBNXSs8G4DQJ6vWXBtR62oAvR76vexpcCFBzWaUq3yXJ4KeTGbDjyzkixH2mJKd5cQJLyv4nVQgLKqv",
  "key3": "2nq5RjWNA7tTofP8rSZP7ssXDF4pKvv64BnmzPpFenUoqZsf28BQ7YGFBje9GMDpizxcEKzFVirvorLH7JhhXbQi",
  "key4": "5r7fc5193FsbKWXGuZ2mGezigBfHdWKFxZHKKxLUJocJZJ3R9qtUcQiXEMqkJFrQtgVY8nSpn6PukwWTimwWJbKy",
  "key5": "28FLDJpPBYPiU9Yc66gAXvynWdv549hriZByvgB53K7aRZEeR8mtewByEUXmMCsMLM4w3CU1Yb9DrrUoTrgBoTtR",
  "key6": "uE8UzBwUtzXzyBCPEYvC3wn4CeUUGLc8VH2cPvVTGpS74Jm2m8Cc3AGkCRK1RKGKhboDodyvViwbDrsTmWankui",
  "key7": "4PWMcNyRKWwdDxA98mTMjTq8RBSnzeKPWa62H41XGQwFsyG4FFzEY2A4QwU3PTQonKT4whwjQmyT53h9p5c4HMox",
  "key8": "QTqMibfm1TaPW5zZHyrc7FG6fyyFG8xSpLg95RcfvEE1YVD5xJKpY8F4nsziY6E8dzC9HvDfao6asuBBQew8AUm",
  "key9": "HdK8rp7MQYs9oApbKTzrjWZiTuWXigRb7WsKoQnz6gwWbUCSYoBMEpfwkwkYKHCYnX6QGcHZh5SaRxUTYGiELjV",
  "key10": "3FHZR6AZmJjDDNCEwZStH7o76HFE1geHvp2i8jUu5EpH4YmHTjEtDGDdNMLd3DP8hH3b3ywf8P94S9tHmFrEV67n",
  "key11": "5v2pLVSgAJAH5VBtboECwDXFCHF9CP6fKz1MVsZtT7y3b1XxkR72uqwMQiGCGniAhtjCCsYtpWByk3zY4L5p2cq",
  "key12": "2hnNABmEhUd5uGREQgE8mVxyroPHmaZxiEnX8GhvD2mbQ857qbYF3KP2pLH55iKGjfqj5ZMQWiLamcXUmez58Nkx",
  "key13": "4eW4WnKd8ZRHiHQ6SbQXf2LBDcFmSwK1F2LEnYgvMVhVJveXBq8TptKFCvckPrfst3iUTJi1TKkW6mdAJE2Us4QT",
  "key14": "3NiBZiX1vmSmB8KRxyYZ1fiBHZvcrc2e6hKSCxsxCbNiCNiMAookHtCPPEwQkXwsbh52hidzvzYuHsyHaMCMAqwS",
  "key15": "3dvh3GZRgCmNF1B76o8N5HnwkZnPJaz657i1u9m6E6bn7xQDyVBqJnA8CyzAKCBF4gy3CwnzVVuey4U5wAbSQVkA",
  "key16": "5g74TG8He6nAWDcK2m3tCcbWud3P8itMXFzT5hiFjQFfC4zR8GTBiAe4VJYf1pdgGrHYQ1nw8fgc4La28ggzYpqG",
  "key17": "XS5jgyLuXmEV528F2BeWYyMMZnbp1KGimLLXB4PmRE1Yqd7Z6LyV2KkkZC1toNgU3hzNEdZ7UJC3tTWEwxon3EJ",
  "key18": "jivvHKr2dojgHCRkxHj7S8bb4VzoLrqTY1CpHiXHvDq8Kyhe8RxmzBTqCV1cscGRKwarECuxcbsDgFrvHFEDQsc",
  "key19": "7vV5TLLZgr58MXHGzqKKJUEA3nT6TFt2wv2xXPF5oTViqSMCZDdA6mBPQn1WXNLpBQo5Mbd77nqgcXbvWWRDTrX",
  "key20": "59dm8wFDBBvcw4v3ybPdeuvPapQMDGE6sADdmVv4uPqkEpTtdfadoYCEp1EHxST1fPb4FdkFcdxTNG3fC7gyzK1p",
  "key21": "25PioGN7BxvVtFJAkfjrkDTaETofAhZbyvMiWzYBy8uKGRkaCMWM9mbE6Xv8jNFKW9BgoakuDBD3MVvUoi2iXeMc",
  "key22": "gfme3h8xpFF8XJnxE9sY9zH1CGWVqvMBd5EANgSd5YejWeQaW8DZ4Bn1TSdQYKvXSaGxYij6L9qrWsYJNigq5Df",
  "key23": "5w4P8H1TfGKeuwu7Zzr1XiEoFA6jFPVarQqQ7JVFm8qp1QiqrQpdDnu1m6LdZfQh8cskTa3wGF3LeS7vFU66dfdm",
  "key24": "3x5vv7Z5U8QHd97Ke9e9vhpWQQrDi52qWH52TXfhhSS2CxGk93Sn3wkMreA1CrtMyyJdVJj6q3fTjh8scsgKpWar",
  "key25": "3UnXKPZ19Yq8iZC29LPpJAoZsgoho9YzZdPZvpxHnYLAssj5y9tcJ1nBCUbTwdpFrZHk8V8sRvAiQxGFtCfRRKed",
  "key26": "598dviDjuVaj7UM1Men1mN5Ri51t638pFh6LFiZa6FzKPwcz6YWrc4dNQCtJyEEwq8aaNBjYhoHfQBGTXUvWSP7A",
  "key27": "5GEoJD8vxSJHZNmgbuiB4PeeDt1RFUJyVfx86okHn36GKt5U6HLM38HZf1bLVHeTkhsrpyk6Upm1pwDENrE4L7bP",
  "key28": "4YREccphygXnSyQSZJYCC2bNEzc7FEFQxYgmiJkoNQYeoKWq6pdGbLF4wz8x343VS64DohvdyaJNRsfPu7UD53GW",
  "key29": "36d4kQ12mxEV4ai97qmXsM4eMEbcDRNkek61hE3ggEdqzbeSGE2E6bwijc5pfzCU9zaAXsZA2pvZJZUvyR6nSnNk",
  "key30": "4mpP4ESwn2XnBYGYqnstSNbyH7rPM7ycCAMSvK4Tz8vK8gDv4hbpzUMuR3aE7AJ1Ts7jhN8E6Ju4GisGWCmvCtFV",
  "key31": "2n53uuXRiMQcqeX3zAcgWXmhFLfjgrSawmoeQ3hbaA8mpGH27t9aLQ1tGiqxsyizgiLJDqJqfQ5NrgtjKDWCh5JA",
  "key32": "2vY5a5veeQgo96cHSukTXzqmprGr42UCuvzYnP6q5C8eGtb9URc3aXTSkQp45U9i7BwJKEJ3fpraGvwLNpMGfMzZ",
  "key33": "4DvJQdM8P59Kcz97coqJmAq3jdBtWebXP7K2XAsSSk32xrpig2qEXhTjgaRoNz7TJfENar3KW4p1HspUmcjmVtRc",
  "key34": "4bx6MPCfCvvc2ZfvP4RTY6JFnEqHenSabHzZBsAbH2KhnhofUc8pKWX9f9VUaUCQQEfds8ZhrENhjEhsneAP4Kkt",
  "key35": "5Jexsy5BcpkeqNj2TU9wdUYFMmLKkAMxF1dem2XMfGWuTskXBJ3urWkaFum4sVRyYc1Mq5YXJUyd5mUdCWbspZ8w",
  "key36": "498qCdyhocW9kFSf5EmC7WM3Q474qqY27X7kMFZ2UGWoKWNrJdtbqkcL27fN7p1fJ2FoY5iHZnx6q9fX8G5WxTED",
  "key37": "2vaDsrCFvQKmeMXNGKqqZacAAa7hLYRwuCVBdeAoyikAm6EpNKWjTQtK74pxKDaXBdGNVkpTGwtj7EmLULgLoJ4Q",
  "key38": "3bLuQnuFSzM9zYEMFttejS4Rz9hpfmYWdn5jbY68Jq9y9jvRYzTwarNLMFaGgPFfb8vEicgcGb7Q2SbfkNzYANT5",
  "key39": "5ynNtLRGpPu6iR5u3mHEdqxK87Dm7apwUwjeXiD25YuntXMx8sP2NgKed5cKRw39ALhMkhauboToyi7qAsYbN3eC",
  "key40": "3oqEiMaLNSJoXJ8CcgsTWd23yfe9km9pjy87yFN1XGPujTcrAkq8B8YW9ywP6tTSytDUaQvZFKLma3G1Bier7pEn",
  "key41": "4jifhbppgPMbkfNRG8ao1cVNXorZhRRTJkazqHDkxxcJusVnh9i8nwNhcQJXBfB49r9jXtefoh2nFs6KrSiex9sw",
  "key42": "4NgsZHrBbeoH5rccvJWePaG8SxcLhReSTRZQAFEczW8W9eejYFMsMFT5xaiPDYEq4yWgqr6kDW4m5zwpnwnNm95u",
  "key43": "4i2sqnLDjZ4iS1cYonCfNy45emg238gLLLwKU3FW2c3TZbcAuaiWAyVCpPYsDXtMeLVbP9ejdatd727bEwS45J5H",
  "key44": "DTCTTon4o7t3LC9L7AooWdsaFD3PAMk12MAgnhC5VaepxQjeQEaWW1epK46Tfj1rxnGkhfzABvoxhfoR21YYEqk",
  "key45": "3cKn3odrHsZr3YsZu3SBwSsmidJiqbWoCd3xCfEUAPGuVyCQq2vfUcCaRXweHmV8U5Jce1ZAuZpeyMwraS3D1Zfk"
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
