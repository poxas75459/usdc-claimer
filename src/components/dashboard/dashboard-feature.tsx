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
    "4TkDstZc24Ts1ju7JQaY2wLdMqa9b4TaAN1m1KugZZRzhVY6qmSwCzTjER6mzBCgGPEMrvc67mrbxMYiQ8nQYnVW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5iZP7gq1XPTDdZDC5UefQ75Au8bNoBhB4uTHc9EtAUkTCMyySKk9aDgbti7pZcVx7QvMV7wvCpHFq4HY7jT54xFL",
  "key1": "LEaJLjY2iK3Xi7cUkzqaafMNJKueY7udNMYgVaVSLicPfMNxhrJXhu68F8xDJCPG79VimgMYQowxs9kvEtjNGkc",
  "key2": "29rp4CKxsRCjLdV8RhDnvyt1V1sNG2qYZn1wYFDucLYrTWztJPNjHRA8ZgQrBpRDRPTB67UM16zzHmKPn5yL1LW2",
  "key3": "VmW8SDLgFemZA52i2oMGJojnreJYGj8oi5zgM9gwURHBsrGuPbE9ZdNLYdgyGMc2LFyvXL1q9jUcrAB66AhmGau",
  "key4": "344wJsk8V6WkropMeMWe3kp76Tt26mgSePwydqQq4FrrM2WEtjd6PFBq22GaD7KqdGfixNUnf7EnARuVP718Hyfi",
  "key5": "5ay4MWEomdLJXzdgboQQcYkVFrndEud3ibNoys18ffRAgKafLdf1oinEzmwzyyThG6wTPSzR3ZZB89VwRkEuBGCZ",
  "key6": "4obVcdvFJ8pSpYEvUZXuWq8vZaoBL5xW9MXA9B3TxhmAu3soHwzz9g291U2jZx3K1v7gwFyvJoDyNZ8PrjSoW4za",
  "key7": "5ceTo59y2ZiYSEFwA7EyQckisKZ3Lar2Wfh1giANbivuTjhNvNcsfxjvBePcFQ8zxJN9MZPfpQgxD3FQMFhyb6N3",
  "key8": "5y29YX7iVcYD4f4zxCEunBrLtdSmU2Qc1pSW52cdMVkMz3XPMbdrUxcQmLQjZUvNuPBhg3mH8ozQoCU5XNQyQPEA",
  "key9": "5bhE5uMY3E77aVvf2Uwjp4dDBkpHucaJKxLswzAicVjc7niHt5YfaAbx3onvBYRBtYEukXDU5TSXFhWSshJPwV9x",
  "key10": "4aLiM1eCcKRGxo1PRBfAz4JjK3spfdwA6h7KQsGEwPPFo2nCTzRo8uSrdwWN8FXuKGkctEzZ24MjqUzixKaGDBE7",
  "key11": "mhtvQXUFGRD7K5KG1PonHXQp2pA2JcEs9a51yYqJri3QcJ1LgryTPQ5rcZj6MKvwcSCzPp9NUXu9tF1zjXCsSqV",
  "key12": "58PGLfNjSjbAF3KjaWAN9JCBeP28NeWJc4chWnpqckqwsbTzkuKbfMfG7zeLZ5hQqyXksCHxQFJM1sv3nqrLqCPK",
  "key13": "214fQB2MgLpDs9251brcs4ofUGZzo7ZyGFqZRgz6sSzorSSfLZtoJiMM3jFqGxDtVAWywNVLuWx4CocMgSwEh1aB",
  "key14": "36YcsRKtyCiJGBzw4r1xXciGeowvtQ6YjFpUWNKd3RpNLPP2nYBcLQ6LrYPhpbPHjyN4HyAN5So2BgUxZAS39Kt",
  "key15": "BF2jjPhqxSFDVZR87d8nJMfC1TSDxHbf2J65GB7fd1yec1gCrWod5vkkAff5vBcVGPNCd4KTJk9vRfUV4d9hKWn",
  "key16": "4JceJSfnuKyPCFdW5atBYti3WDcZSTty4wHTTp5KzgZdLtjYsSPSjfpCbk6KJyVLc44Ae5NcJuMZxdfQWF71FPSs",
  "key17": "3RAqFEYRuNhp7gZZgdL8wGxvCSpxkF8kg8E6mdyQMwgrJ1k6oTSkfmX68PnTq6jV3TU8HqFyrMe6465F6NpZrCAU",
  "key18": "3EnBzuCdR5YLzNKFtwa9yzJksfdgMusBLD75rV3WB2bC8HeU2Y1nZ22NNutxvgsugwVWFw1TWa2m5ZqqfdshmdWG",
  "key19": "2H7xP6byUupkJoLMRCUMGKo31uKvD9XRnmHW28tYykn83eCQfh5pNQ32UpJdaVKKJGvpMhhwNtX4H9TPS5MsxaJk",
  "key20": "3vzuv9ZpG2unKXzKfDHMUQ8zikFZbFz7iaMutHVGjWsGbVm1kdZR2aCqgXvgJy1b7KoUMkNQHEjVSVJtcqVQMHC9",
  "key21": "458vRajKLKA1W7HUDmTBAKCM6uUpBVARcbZXKgfqHgqQHGYGeHMDkcModw3Au8ioB3Mjp4WdpsZQRBKErkkCUSeN",
  "key22": "5SCDBfqdWaXta8oph28qs71k7iC4vmtpJ3teDM14zT4qdsuxnzPVRNP8qT8mejGKeYpvqkbDcDiGiXWJTyBLKv5W",
  "key23": "4LyVpQWWFG2AfTJzyjGcVfiyJM7JNNRVvtGbw4XMXW3kREro1M8Kn5EoHhW8h7Vp5TqgnYxCbn7wkWboRJDWgpm4",
  "key24": "4yvG4mSyyQ6CU6v34k4fGJKgTkNJB1sPoDXsKqD4e31qmj9gSvmL1thwYNrtQgqEEa1kaG77ATc59DoQbgYpekyu",
  "key25": "5c3Ma4DoQ9zeJ2xzWwyajvaufniLwSJswxLnn9xJjwjwvjkLth77MdEKwuaEBJCve4k3JhNTT4UNusBvmLj2Hn8b",
  "key26": "2CJdVFBnLxDRfKwnxxUjX1rJQvWwZPkcLb7FyDHH6vva24ZQu12Tb8hRjW5kzZH9yTGsGtm6NPM1pGq4VBG2LQPV",
  "key27": "oz8twQWksFKmEAPN67SLaub47XAED6F5ZSNKatySRSSLuDHngbUCmmN5iY4jqhKQ8wC7VNWaADE7upM2TfD4zN5",
  "key28": "3ikNmSxu9ekQVgcqVoYBUHTazDCV1MMkfxNATWGxgjGCGei1uqg9L3cdWN2QA2BZx9KXHpgKS5mKCRpowL1KM4kM",
  "key29": "5c5Gq3j8jcCMiE5SbGJetsbvSPYhZag5Qg1KaSz4N9sMGzHtrwKdH2USvybHuUnmAMGegihLRECYYQbqLoTEFG7p",
  "key30": "5BxJU9ncXKbLD39J4vWHket64ZKwAgQfYgjwnZqpkTidDz7PV73ni45LY1iLz9pbQvFkSYWw3prQMqCfv8vauvuT",
  "key31": "2Ly3pEib2dDP7Gn9E18S5UxWu9VNad2kDSYDcb4bHaHe8Tp8BCswrmF3gkqo1CJNBSCQcscgi3put8J89yuX2sp5",
  "key32": "Krqcsn5RMDvZaXt7JTnnvCi5Xfh7MRbve9jr6HKbQggtVGXmDA8TN8jV76bqNEu9LzE9UVjHnbMynJ4L7aRcnM1",
  "key33": "3Rkj73fV2weNAuRkjJAFJzsyfTosY2fn2kT2MuaJyQYhzBGFd2MmesKaCBm4mGmPZNunR4dz7nBwe6Ww4DtvtqWe",
  "key34": "w7dCUa4LJQSEks1wH4qJWqdBh3veAgEQbaiwQNgBUfHStJiF9stTYTYzdWDWNrt6FsuzxAH4RGNFSsAc3gGD4SC",
  "key35": "5Q5Ax1jPVRKij82dqJYjapS7wiysaWahuV7Da4WUrhy2MHoYizFwiTpSJL86bx8epLp7yZJDjzFWAuz7EcyCj8mS",
  "key36": "3zJS2CiEfB1gpBimyNpuFwGyoZAWafJg6Wbbr63sstLC9nyjeL4M6udux3J21fnfmT2nmwxorrNF5dibKRttmaxf",
  "key37": "z4xkhh9BnM5n4pZHCGcx1ihgTmNxLPytNEvDECrn8uguFfEJrzaw7ew9FY9GELJbU2tkq5cWXMi3GUbG6255na4",
  "key38": "2Jcgnt7HjPsc6yqhZhT9kkCdsAacjMcmhjDnGWAjp2fBuhXZd8TMGjQVE2z8Q8HPMV4Xw3TNtyRoq7TsYwLHJ85S",
  "key39": "2aSZs8xHTyJmaiBnq35jNLiwKrbD8KhZhjYi78YqbMjsRtfV6c8PnqNFKUhHTKshcPKKSqahN14eTbG9dWQbbJhz",
  "key40": "4L1q99PKvrWETPW77x2JzSEtZ51vf8eCaW99C2e8eRYq4YfdJr58sotbEYg7iZ6DdfxaBoXmbh2yitc49cqdUT72",
  "key41": "zAJswApdktWk1KfrgbmU9MtqL97bxzQtYExcRN9Hf6FyfyE1WKNCWYyPh8dfKZDf2tR4ZUxV2ngmt7k64QmAxBV",
  "key42": "2DRMqmji6kLNZFxYNywVm1mxRBwCzk29tcEnbTxead58nJkF4KHBAG3sFsPMoWNY6aKEEP1DJHb5tbd5KUCZj6XU"
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
