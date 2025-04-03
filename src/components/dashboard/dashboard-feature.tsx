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
    "2BMioxh4pLVMfUTSkzZ6L2LRbJwFJVKxA1f5fJPvxxk6MhoAYhwgnAzmn17eCqVgmnE9tnGa1FNg2Eo43QmpxYtC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "37QBjPZ5amnMm4AsdEncDz2crt9t3Gs6sFqTVVLdY9Y5d6hMcEyQWedC3DjZm9NSN4C8H3hLBAu82hj32rTy1QAT",
  "key1": "5ZYscCkeYu8i1XoJuvmjX36mUUZgr3dqh5PE2XartHVzyL1DwEDfDP9v1i9nRfHM2VG1zaikGuHzoKUKdh2VnQCP",
  "key2": "38izCsztgsRG712WD5wCUuaiPyXRLm5uqv9qnSBB9vvecNfF42kSJ1P8XYznH3ZrgwgWFbFyt3CoT8TTucTsWvpR",
  "key3": "514dJKDfs6ogL8pnMbeyKepDiki4T5K7emSAfmQPrmhq8b574G5L8sVAtLFN4Y6kdddEpxJ2PBQrDZbWaMPm2FgE",
  "key4": "2TaWNwBFqtPtJsUAkzFwG86KuVLmJbAEV7z4S9GYsyu3qZvuAiYNjWUnm3Ek1cNYFDkkKYDxWH6BJJXMgxRNEQcm",
  "key5": "55ch9pwwFa8JiouMCfi3bgzHY8Y5dmTNnEAo5jhBNqfvqZXUfsH1tAKThK8GN8KdA9YYwGYS2Tfg2LNj54LFto9r",
  "key6": "2RvrHVKkD4aJG8oRZYEHmnkciKTTuqBPbaEWHTaUArwKyXQt6HRoXk1KtPzAWDKLyi44EdCj8NmkouumsDvpx7KM",
  "key7": "344XtT633m5gAyj77F5fczoowCvuy1rkacRcfKUseVGNyUYWmPZNXbJjWT5VMdU2i7zpKfJRqoJkEtmeTq9keWhw",
  "key8": "46B5SJk4sxv5MiZ2HLFA18dM85LV7JChVz91RhMDp3m398LDfVkEHwujxxjzZ8G5uj6ddimVBisiJtSrFD4hiTaC",
  "key9": "BfqZRBDYXB4xNBbZGG54HnTRTSU3p3HByEhsB4EdzSbPVD5P4iTDtaYbCSB6Wtr2t2NbL5Rub7DfrH3CpbZoZA5",
  "key10": "57H4DHfJFCc7sifpkQJk5HzqGtZTB5WNC6WdxubdjK1bZ7LWz3FuiR7dBuzKahTxMGem1kdBmr7FzqW9UCFP7V1G",
  "key11": "LcaDoQUoTySyxH2dfccCY3hkda7s1ZwcEGonqX3wPpyL7PWAYw3o85RtsVEDNpVtah4ZeoFE1j1sXxc9tfAfxaM",
  "key12": "4C51tp23dfuWttYMSr7vgj9MKRazsZ7cP89Dhbi1txnxzk4pThDniHN8qmdjDGcfBG4BsRG5Tfzg6MsSjy1nkVP9",
  "key13": "4UkqQ9k8vvJpnyULLwYmFu6pTocVDye9dH9mYJyDyknKFoHTG355EPxgBXCrPDxHWgqgviCVVPT6fBaTHfQVhkGz",
  "key14": "2U5nmvjEMTMHn6bidNeQyWt5BrHvuwcntmMv1Gdcox7w5JXmGARpxZWv6u91Zm1eZicFDJbC53xGUvYNfLupa4fQ",
  "key15": "2ZxKmq9czbEC88CanX4NBnwUCSBhaPC3spVebXqHoCGC7GkfsefuPXWAudUBKAnjy65AJe1mULSKTUCenhdgyuX1",
  "key16": "3d4JoDqdRJgd6AmdNYgicL4mTxZcLnUjLsggEuBdGvwkaGdUWPNAGgsJszvmsAfkG1wpZsFVVnVszpQ21rcZFPt2",
  "key17": "vLyKpky4AkAc9h8EjdSEb2MsLGGKd8GGTB36HT6rCNfZDbZCtbzYiPzKGvSDmf3FvJj7VntfW6tafH9vSh36R1J",
  "key18": "2egzuwj17K79XgU71KdPZ8QqMdRhBtBv1zXNRN2JhPJ7zrAX673ELh1owm5iR4YSN37gnaqV9EftWSiDCBnjqc8C",
  "key19": "A4XribupDd3pyA8Zu3vZwYwUEVCAzABeXZ3qPQZMWt5D2Go2U5DY1WPmy8TEohyg9FL122fsmb6rq14JFsuzkRQ",
  "key20": "27npNvc5E9Tt8GxzMxTmUYhy7axJdjP6mWdFUxaiWqBBTPoDtquEkC198z9nDpriURPwj2P5ff12zbfAssSeNjHT",
  "key21": "5HXAYAE2eqTmVV5agGhK966ZnXSBmVvetJYoUc3CwY9ASF8iTgvEsvWJ2AtuFtUhEVEFi6BqX2mezi5iHunqRfx6",
  "key22": "571M32eumzzDHMVoar5wYUvkSdyXTujtXMNc9SDaS1vmyQ894CNTc4GPpdwQEDe7eABrBnicdLuDF3Qa75fPZtcu",
  "key23": "3k68cMzvk8BnKYxi5qNy4LfjWkU75FUQxC3VMffKayv3wFD7GcLJKRY34iq5cozMTuzActjDBqsVYUUhPdpY4bx2",
  "key24": "5vUsB3s3FJZj8HAGPfTDcv5GkF9GPyVmNkbdDE5qhARYqFQSLfztwJdHtxgGBb8bWCDWi14TeqNhxcV7yTaPS3y6",
  "key25": "5xTmsVnJf5sjZzGWYgBoQC29w95YMMZbXoMsnpb8JQS29hAXZdP3rwtk8aJwQKAFKUuVFxoW3yPzWiSu8uUXHCmH",
  "key26": "3hRGpAAGvKnWCpkbxZm998nx864HpDbes9PvxveyhEJcJJbFBpSu74V3C6oLTuDeQm6g392MggDt2h191imzkoiq",
  "key27": "2jR67j3wbiCFQJ9WgUKZixSg6xMYGB7aJrcdBLvXQ7sSTak4XpaZ9V16nYbsBCJQodiUocsFnkaQN5RavxKokonK",
  "key28": "5cXy55nwdjRxgQD9HRiqEHaFFEyWSXC3EGWZntLEfSqZAQYbWwVWczEqSCvvVo6mGYZNNgtatTY7AFnoJH42dCmS",
  "key29": "5E4BMKZ6a8jHuppPgZ8s1Hd13WqmDY5q9p6Nvo3oQRGdGgPgBcmBk7En3hzH5ydoGuZwntXQdoHmFnzb8sBZJXjh",
  "key30": "32fbq95ApHB5pAHVMNSTjnZpwEjKvowm6aDm4QgdFHxjyQFJ7bQLSWtfJRdscxubAY5hXnDWzx8xBHzsEAXhvgiT",
  "key31": "4zyuj3B6rfbQGU7sm5y4RUsNGh2J952eL9a6WV3vcNhjer2wf4y4EsQeFZ8ShyLqa2rQroSXuVykbDojYnA6YEm1",
  "key32": "315SqJqH6UxTZAxg8QgvgmYcu2Qxt6hcebMCfYt7mB3a2cfAk9EbZFfn1Sezs6gzvDXn8J4SiPtL35j2dUWZJWrt",
  "key33": "5fs8mYQMbjtv9a648Rt6J9LZHVHDWaohcvfFxHLgpa3mbG7ZCyTwKgEi6k4W9WdmFnYYzdo8eMM1eMgGDHKF8Too",
  "key34": "5N1qXygeNrqSP4bAPkSA5n2xJxyL1inbKnsLmcZwhxb3RdFsYzWDKdy6X9YWDkuK9xs7bD1fJDhep1ZiRYLR6nPt",
  "key35": "2Qqr2gHxZHN1KkbF32p3Y1GAnjfQHyhBJbJ3LS4F7GP6hqGdnWPkj9z4evgeitK8Fs3bjtetTvsaGE16syFVcDko",
  "key36": "2yr7VUyuxS28BVAL7oBimz4wK47VGbftSnEsawxpkUp2KQ9kZLCbsfbQ2ceoePzfnJm6LwLKQatTXonC2GYo7XAN",
  "key37": "2F27n9EDWJ2bSFGoXsVvtM2XGBJDJZSscN86eLp3D9GWh11ARympDGdEkvZNNmUezGAjC7Sk1zdCZNBsoiz47vrP",
  "key38": "5mWj2MpmYTKCqKtXUKKM1BtHGMDWkxcodHdr6y2BwZkQJJYred4t3A8ykCizNcd1L9LYcAJancEfs5LtBicoCw9L",
  "key39": "5Henu3TX534vkvtungJv5g3zoEKQM4HPobLKbKSWx1kjzVoygXh9SEo1ARkbRG4gVbironCJy5M8tZyjLzG9fBy1",
  "key40": "3Ghd8j9WJ5q1Bm65CtYcmKLivihubKxZKKTxXDEbHYe5a1nb49pRaWDKtkeXEJRkYR53iTzHpkYKFm637PUTCNoH",
  "key41": "5VQLhxN8zasU9Yxp38w9SsmusGuQEXQzKMvk1VJnqFSqpW45bqRVK7vnEuzQTpq87uasRq7yzSrrUJdh97jeAfqM",
  "key42": "3Je2EvkphAeFk7WmCxFpqqs8VnR9FnXCPaKNNVYumN3tvhHA4zRKqpsoosGX5RcezmYzN7ZBoDMdCHz5iEwxVzY8",
  "key43": "3S5K8X6REwswGpPVD6F4zu6RwaUsqkxncXm5aDDwfo8sjoBv3tV3jgwiMXbXi3VuQu96L3Ap44euhx1urijGhx97",
  "key44": "65mFAsEpdFyygHF57AdSCv7aoYVVuJuinqFS72cKMeQqHpZkF7GjXTFmLCjLdSSEUwrdw12oZb8QTLkU5vPSf2sW",
  "key45": "4B9aBFCchRJ6fScDwWRtH4Y5qKm2Hui4GQnCoUfB57nZS1Hvxh2fXEMXKrZP3mNMY24G4RyU7joyN89g7Hqx3Va3"
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
