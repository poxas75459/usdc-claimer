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
    "3ZUCS8f2C3BXd3g9wiTrDR84dXT1ZstJPU8Wmgrtj9w79g8UAFaKyY6ovoAWoAnaBMXgFaMz9sE87qhvSayXzwzF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mi5pJQ5XZJovAxMUrBELA8ak4sFFUhtCnE5mKR1M9g67yt9pYHqagoaNrtALvVnFtFpTwHnXsGV5uVBUFjCJQAL",
  "key1": "3TfY1v4SFNJV2Db9SjvSuZXE2Jd2netUbsMLZR3L9t2kMkYeAmGgYHZShL6185RKkBxMJzwRhvQbBSSyNvLCtRm4",
  "key2": "5rr4coYiRMC2ke3deUdEyxqM2np3wowmEn8kKZ1sz8pMCdPWjEc4YJED6hutsRYQaoPdqihQ6ePFAUdk7MsSGov8",
  "key3": "4PqPsXcMeh759iMLQz4DffoXXdLaicCkZ1e3FQHDja1eN7XxURGQZ849JvZ7a3AVWXCLwZadrmenUJBJHB8SN2na",
  "key4": "2ik1DV1B329GruPEkdq8D3jsajFsqP5b46mg2NAMhiLgaETm6LUceZXo9YosN23ecKRwZBPWzEDUDswxypwxSBsS",
  "key5": "4Bsn2AZE4xvQTp7rJn4Gh9QMRXKb6eENRRd7tP1h6MxM4r6KR1UoTWX8ZfRUh6L1wErgDFwQp2JGoKZMgoMLP1Qu",
  "key6": "674srPdaQfHWuHB1Z4UAFPkFM6dzkUftfAVtdhWrx4BHZixzBtNhvFfFAtsTb2jrzrfEPSaBJDwafEuCqY7sZiPJ",
  "key7": "2TeHoKfR8Tsqy8JTa59mcjewseM5sfrgqavaWoEHmT8ngUGwHYAPGdnUzk3BDyz4XSy7BtGryJu1saBKYTigqVY1",
  "key8": "5X5nnTpfdDSC94AKbYKo5K2pmWpT9bbvDjXq58oUqdZKHwXy7Shm5v6v9REqaPBS62ynLhKMxkTVRFYN6DH2eBxc",
  "key9": "3hNF4E9kEDCJsEsew54J5eeZDwEmFZC8A83jD4FJEYbfQi69NuwpguK5zZxRkr75nEmLY8W5p9eGdtJVBDKiXZ9D",
  "key10": "47dApux5hfB4Q8e92dxq4jceaaffuMrhDTdoz3CnjQeJLprtMmGmP2m7EzWkGu3CKnrLGzMuZjU2StpAdaKc1y25",
  "key11": "C5D2s6tTUwVrtsVCGi479aNs89ML2fCsG5tZuE6cPckpiCqVXvvzcNrpSi7wdWKRTAb5EP3o1ci7XMNaoXrk9hE",
  "key12": "3YXZETHVNQ4wBErFqbEUZTS6MKTE3iKVj7zXx3sVg7SnvZQKoNAyzVqcY8Fi8f2MrvuyfGS3wtTjNQt7UtXnYt1P",
  "key13": "XTjWCTozPBa2yP89Xa99TNZ41TRxsYuMydHBzJV4cEfL2wkAbedEcZffqgsiT4idw5bXpbhcDrCoF91A16BnirP",
  "key14": "TLhKHmBN4VvdQmcyhdRFWt4AT29PiYP5SNqM1qDhtNyGjFjzT2tUQ1aGkNahkzeXQPPZk2Ny3wKVMM7PdvtbVb4",
  "key15": "5FtxdZUJjnmW3LTMt51E3SBVHFw1s7sny21Nd1CAWMeXZUi1yaUdT6pC7doP9WZgz8u6mLr8jcTAs4fpQ1q9q54V",
  "key16": "EvvagvbtT4tJUJRvnMgW5Lm3VX9g3teVZ6kAim3jjMVgtYZEJ7wC36nTQAHNKgnausT7qj92dwu3sgayr2kCyJr",
  "key17": "5baTnqbwaryeFTn5sWdMvJ2FvFbnm7Fiw4XnWaQRzQfa3YrQ1XGZosuUSDFfRwnJ15Vd9QrDkARQ3XJD265q3zf3",
  "key18": "5SwCt3oJMs7k2EA8E9CdyeVtnwd5NjSXANuys3bYgUA1og99FjUUNHESzKUYMaHGsyeRFmn6w1B2uHqxcTZC1Gkv",
  "key19": "25eYV2zsE4QMjPmWUfJnrzU2Uhif5ZdwzqXp28zuEY5bSd2rbScQJzBR6zBxcCAMyt3Vkxxe3Vy5TDW5nuwax9F8",
  "key20": "BrS2xEX6Y5pEAY3JcD2rgHALoxwTMYJSmr1VARYmWpbXfjzYes3KfFqC6BWTVCTgL3i2YvYvqfnt7jemnmitx7Y",
  "key21": "3AhUyt8r7sJYiZPA3L2wCaA8q89XcHT8cXrhBtqPCRmucBGs8iJ2bLjWNGJNx8Aesxa5vBkSoQGe5NW6ogTQiDGV",
  "key22": "4t2PZwN3yk7Lk6PKngdjsZ7TVgZzZ1gBHZ7Js17QU7x6dDSgmu357c88CEWeEnfaL7ebaTEiqupnQeA1kVVCqH4X",
  "key23": "5AGDew4W2T9ZEcm1m7eiFz42rRdErXqLL5QeDECfcgiJUBpith7QZfFcyJ56fxXzekNhjkgdHQpdnTtoGoypxacD",
  "key24": "5QWQFnC22EQcAJB5scpSsi7BdHNRa7JpFuTa9XkV26Q6xUcf2Wam2LgwR7cry8vNSyHwcLst25NZR5nmnF93STJf",
  "key25": "4aMPKgBp5NQbUtZUTLuxma4PuLCmT3CaDCdRPtSJWCszMoQMRTDtXCsxc2f4qGegA74GaEbqcLTRestBGxEp8D8X",
  "key26": "3gbFcbmE6wxo53wN5Bm5nVAdUeYU1PG8dHDkcpt8dbpyszG6qzKcq5hCwDeciMt4WPJAbSyHNBwtLc4C6nsxra8f",
  "key27": "2Dfej93BxcKvnPx4dXYHKG2DMGgG3p9R4TYnUdeBhAD4mF4R2wg5KyzJQRE7vJMndqhF8Mz7ko9vNL2d8teLKEfP",
  "key28": "6MjTSUic77viaFmFEfQieYyAqo2v5vhUhqz3NqGjeYGVRZjrQniWvFAELwRCdHiLMivDwTZ9LJyBqRhCbrE8zD7",
  "key29": "5Au3xH9WJitE3NUhSfgRsJ6EfPFUz9vnC336tcG5EKvGu61Z9zmPZUFDNJZtcSSWs1bQiHGWBZhmvghDCTJ8vdi1",
  "key30": "z5u7G5AqUmMsb7b6YjGhq33CztBgVtDizxmSfG2PjPTNqzMz1h86k5QXvSwmiHx2sdrwuy1v3ZRyhwji61owbSt",
  "key31": "2NSYHST4RjemCGKuQYTHu4ktVKCxncLreSiyZudAQBSNzbBt56SkJ4MFQMb54vbMkBoaMGzYezfjmXE4qdruEKSF",
  "key32": "2hyeY5EVihLZqbdQYss8cdRhwgH5iQvNSMCdv6YMztgw9iqxL23huK87Fnu79Ni76qh72Nr7JpGHs1FgvoCF8XMo",
  "key33": "4G58s8oz87XVv9FXqqGLntWPj1JrtvXQy19fTupBcC8Q9gn6ohKrZuja2TXGCRbxHJus29bZkTE7oadDV1nxFo9Z",
  "key34": "5KAq7SoZgRPXHzGx9LfabQ9PhZYnBgcSasFVF8wkD4hiK5zPCt1tZP6o4yaGPjc7PVStE9jbqbe71mRmXmUibhqD",
  "key35": "5mo677TD6KS7gy9SD9qH8F8w4UcfAohekw1rWyYAH6BCzoK8yNhXNDJncueHsaLqFJ8CwxauFWPxjYrq114NesUo",
  "key36": "2NozxmHTAHbtAsSn5tjuwTeAuHtSKVhEvDmBFW8fzuHEhhKt4fkqPzF4F9cLYsWMC7LUum2QqmmDKYnhJpfpDLNH",
  "key37": "5K8Ha7r2c3rrQKvhB2A1zvmoJHenowXDd4F73tQCpeMZFJ4yiLXc3Hohw76aNnhNAFnQTS41w76KEnsvv7PA4iJv",
  "key38": "yCQjX4szC38t9nJSTb4wkahW8kz8VUdLGVUYo4aiLXguEi7jLhDAKA53yQ6EB1cCb1uANCMfoyKcyUV7jtSrYNP",
  "key39": "2akpWfdp57fdFJFAyQjHTTu3dBh3rgYG9opz4Rviomzzs2XksdR1z12RZWzAS2DgYLgAcL7Z1QUBknE7jCq8C59g",
  "key40": "yuApCvzwtbTPeyhhJboyG75tHT94ZJQJtCK1XHB744jeGp69xy5o16umcCCAna8XRmCaRrGuCyvNjAXTVdWjWsa",
  "key41": "5HwRg6RmJxTw2oknkLwErHjFnZ7sWxvTTKxZbXz4xEGuuogtcisQQcCziBVbims2aWxFnYjSwKLgCFzCoLHNDCrd",
  "key42": "5K9hAp1fvTZx3EzLmZGCsH7S2bwNDWAxxvrq6Yi1G6GpnJcGyov2y8fCJn87L14udzk86GPxJwpAoWjUKZmXVpEq",
  "key43": "3ZbnmAVCx2CbCKz6EqQa7uMURpEmmq1AXiAnFcirLKs8aH7B1FhYmnE16aoRpNcHsfmMbSB2zth7X2qdyo8jnsuM",
  "key44": "281LveZqHMBV9WrkrBEyrCzrkwYoerUDFQSKJ3PhiUUcCz8PaEoWHJDY9xjjMyeREFMX8CfDEcmffJMSAgtqd2LE",
  "key45": "4JyA5AG9YdWnkHKGMjBXSvVHjd642DHyXvBSGUzrh2U9AwXC1ehszEPf9VBWPDUHVMUmZeGNbFArnjKFwQhwJaVE",
  "key46": "2YnUSRsDYdHxZ1WZ5U5HRXyLVQ1V3DTaHiUoFv4GoE6aD4JvQmh7PvMT1qjdTEtE42snSpjzUVwNp4EWvQsEnem1"
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
