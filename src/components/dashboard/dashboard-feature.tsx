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
    "3i99rQ5BdLyNbGoz7KRG9xcyM3pjx6FcHeEQrCM3QHnxFdL1nYMZVBAJi4AufmBAouJhSk7CPJamLhw5xSsj1mYq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Yi3XF7c6Aprk4FUE4E2KcGYeqZBALecT231ras7jUvV3FVbveoGhZ7E7GASq1X7mtnaa5eD4mwhsnQ62SmEGu8V",
  "key1": "4LDc9addAhhMUq9gRMRaysJcg3hjPHBqWy5p97HWCgdDXr8NWwGKWPpdGRZjqY18wLtoC4WfCmWZYTsGw74xkuRV",
  "key2": "278X2L2RYTiuwhQp2BAjx1mF9umetoe73dqgShJBHh6jvuXcgJSSjnPaa6H7ZoUD1X3aiPoafyDLw6FNbJVqj6sC",
  "key3": "4QWdxdkCRq3v8vMSKEM4gfhmBUgBMGKZDf4j3rn3xjMWvdscLp5caEaM4Dx2qJ3fdzJ7zQtMKSR2ESHjwLfnYyee",
  "key4": "bCs2me7XVga88hZkEd8fLbk4Pux6NoG8fJ16Zy7Lyq3NXwxe6BiKfvRGcxEXgvkNhw9vQyZ2xqP8xUNydVuX1Uo",
  "key5": "4MkiW2rzxKHkcxX5YS19P5mVXx4d3xhqXfAGqtYoe3kT9qNBpApHcMMhBkfYf9KyHSvENAr9L1PG1xvi4s4oZbg6",
  "key6": "21edPxWUwCq6UZUxBm3kdKbKHPpX1Szn5UjKVxyVduCKug62A9QQjJe95PpWnZr9xPBTGDo8sfQEgqAzXLSKN4MT",
  "key7": "2vpN7NSuzkyfixNH1iEfNhtBDcb7kC8Qzbkjm3fvaqUro5SkN1t1NqsxKpsJddZrRAbnMQFwtm8154XsyGD5cSjD",
  "key8": "2tW9QiER8hpZowmBYvgxGsQDfePfMk6Nzd1dstNmoHp5h6HLc5Z4K1Xd8BGFipoionGuWHkoUFr1V5QfZ8pTnZUK",
  "key9": "2SciCUyBUTiDBjufYnSEEsorgxCabaeCLHMqhKoC4y8aLJj5AX88cZQw7rR7nn6eHdFrUStn3Kcbio4EPqGtsbTm",
  "key10": "67N9FFSTrFuSADDap15TsBC9Gca5JBGYmzSmDgqwYMXrnvXxmuHCetXvovFbQKZbyQugtcEcqAN9FFcMfLgV6U8z",
  "key11": "5zZYP168umxdrKVZsF7ioRJFYbw7git43R3bhDLuLV8YJSbHeE2x1uvRyi8CYAa1Zm6fr5kxu7QLo7SCWXrWDvZm",
  "key12": "2v3b1rBnvA59gaz1gVQ5KGdRrY6FqH1BifpN5wPefAy6aaiAFMLdCX9syb3EL63PpMTGVbMAWnn17zfrRLVe6PA5",
  "key13": "3LY4msMGdp4XKmPg9rSy66ckbdeSLHZT48L88p4LFCaq8F9uMhmvf6sVdmsxUQ3CSoxtt2B11LHLHgD2a1PRx2Hb",
  "key14": "39YGNpDtVh4WJqd2SSSf76scDYYiBJAyY2wDg5g1b7pz7ycf9T4ehqUSzWXL2UQrEdwKYzVS92aS2DYziwnoxpzL",
  "key15": "pRA69PWBR1LWXxJ3QACVGpvWmeeGfGUPBWRC5htnNGG9FknWYqMpi33LqYn46PXU9Vnw2SZXzmnsDd9bgGEW8a5",
  "key16": "4waHUpXURXe3Z7qDrzFEWxokZB9g2NGtGftfJQoC1irPiYFVVsNBJy3Cbyij4bEDjtxZh16CUCpHAqCDkwASsrbT",
  "key17": "4Dxa6tGCz8SAC4Ysv58idgrw1pM7N7rA4A6axZXGMPMBiagZKqSnBWmpX12KRygCgt4jwcCJhfGY9hFGwDm8L812",
  "key18": "4ELDSNJcqHqg9biJqqWUPsuPqE7LuvbdjYbx5gabRbSv21bpm18AVa7iPUupQKwx65HvBzVe1UvXghDWdtqF4ypm",
  "key19": "5fUHFJXrgvcE9uCq2Tj67BhHrLcj8p9qLTf8KwHbW7MwNYhEvYT7F9LnR6o46bTbA3zyKxGx5Fp4cDRy4CY7QjHF",
  "key20": "4d6ZTQsAhkNVLxTThA45mhcicDcPnxzxRw1jkK2jpRwHTLVp6ThAdidAcwTt737E1z3ickAqE7e1LDB9SQw5jcsP",
  "key21": "3YRHSSyHGXs911ihi3AgEXc5Kjw8ftaokQ4jk5WRGcj4qvjTnojWuNYMTfKrqJ4ApXdjm2wsWiUxaeaaLwrBQbd5",
  "key22": "2kxoH68s9af9fu6HfDXdBoyhVJCzjcym1yPGNpkN35Au6UUb955irZj3kv3mtF1duz1FjgsgJuBFYtdA89kfUHFE",
  "key23": "2d8iVWvwbmbjQwZYcnMskEnP4t1m9YDnrNQTn1GkzFywBvPXD6w9iiSm7NfRiMYtWtqXxZzXTsJTDTpMk5CYSms6",
  "key24": "3NBM2RG6Fc1o8uFM5XQTKnXRas5irTV3hMCFpMH4QHX5xMzD5JVbK2exmu1RKAV5GywUC25RojJZGCGmGsesRnhy",
  "key25": "8XZt14P76RpNo28qTc8dbHJiWMuA2VdeAR7tVK3evTYLyRLvxNHT1XFRs3MSpmMGTEbY1gQ53PHzVKfsaj7e4Lz",
  "key26": "5eiDEhqcafKqvLgrfMtss59kHVvHVcxnWojsrWqZTS3kcvBie1nfFKQroZCLMS3QtHdZ3683Tx6GwGuNw3ENZ3gY",
  "key27": "2xkCR2xdTP6AEJXKD82hAyaWHj9YsREYH44q6Lt6EM4HUEX7NkakyAasVLNgfyq7Drt4vcYwwPCHa7G5QBU8TVA7",
  "key28": "4BoxM3YpzRTKHtFh3mFTzTtGpikYboCYNvoS6SVM8RrNmWT5Q21vexYCVVqMtx8fNVGDcUuA9itaRFe3foJrqykY",
  "key29": "2kkqgHiScQeZtDAv3mzfQ6FHWic2xmeukwqM6LNtTsnta2CJ1Nx15A5FgzT71zhQgoRH6ketwvhJD2QKpf7Za55u",
  "key30": "zKXkZHU3rix9na2UqzUo1WmqjX5hgSdfeFR6BH6GBQvykT2dYnGZhFDqVL4KZo15JJgoEKN6sS1KQ38CsRorFzG"
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
