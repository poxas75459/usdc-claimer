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
    "2iU9Gsg5GxVSR8vBm3edVQ15JGBXNwEzGKg9RyHN3Ea1QWCYqTmHetYY4KHpLrUtf4tcAykmyVKfVKTaWqCpH22g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oazdpNWwKFiZdTkan5EFhYQ39anjXNtF11eQyQuKPtUfZqReRejX6jvVjcGxTp89GFa6GA4aQmCiy4oLYYkeWPt",
  "key1": "5kJv15bw5Ak73ck6bAzcFxSAVMapedvGpcHB4hqGMuoFQFoLtGgn3XBTq5VK4gtj58Sj2aBpU39TwEkpb7T7BWku",
  "key2": "2MLpMFGaPwoRcs5jUeuUYHCxwVgNBsDZ2YsMNwohYZnLSdcAjNJMF1cNXM15rZ5SccFJAbLzaJMfvvoDaicTryyL",
  "key3": "3GyYKwrR94YtbNfqim1wVg7jAbN8aDxVWVpvbZ5X6EpEBGuyud49T1ByUg7eUzWPoqQnKYUPiyZ1CnjinTEmGkFW",
  "key4": "24Bt5Y2aK6C3id2PpdiHfhfkT6TFBCqGYqq3ESf3r2zEWCZuYoUymKqgQpQ6G6iCZzcdX5uzDTpRjDBhbtk1PcaY",
  "key5": "4vgmnCC2hNfK6gB9NeoQCfMcrUZneQANSe7b3VcZ89yzNHEaSVeZ5iwYiJ2VeJvAVsnxQrpTbon6J9aioKqtRG1j",
  "key6": "4vdhmdYVNu81XmuyrxjE74epUb7FUCZyzUNbs9V9ZAn981EN5K6U9ibrL2fkBqu7xyx8AZLKp2B2nDKW1otBCZqr",
  "key7": "5wV8hHdkccbnhrfX5wh7oY4vjE8nmEsfTnvn6WDsWYswVQcHyhTzYm63D8TGfceAptWCpRseez6CgWBThTKdmAs8",
  "key8": "tMKQwWpA9v2PJsciHjgtQ3K4xt1BBXQtHyFg3goTzonSWoZxWe2mhBC2cdQoCQyMnp1vnDXi4Mkuhe8Dupk1tUN",
  "key9": "2V853LvhDof85a6F4PrKc2t9KKzGJwk5SnN2thbLbxZUuc1EWnX1d6xFLBiipf4cGYr9nXUERfk9NzsNjHRJ9C5a",
  "key10": "2c4WkQv6yb3JujAzgcbduVkvYpuvZEPjEQ8QhwFUEwfmBJr2poe52sxSeVrx5nMjxou9nqLL7tM1mKNVF9VhZXE6",
  "key11": "5ZpxtqTpaPwPu9DZNYVLSCckSp1nm2bcgqBPi3FEL2UaCkxTh1iUxFoFhApF2dgukLNKMvb66rxpocsBiPpVj1mH",
  "key12": "4XVD3nZEwWvLxQwUWQC5nQ4hNeZhNFjwong7cfrAKu7vGTRuEwPaxRrm4UF4CKwAi3BAxx2M7ACQsHsTy4Lf3f3p",
  "key13": "5aFDgRy3Zf7sKLn1cNqbBL4mWNHxM9tHWGJhxuLYW57nvAP71L3hU2SWYCLjNzpM84HrCjshobBw8tc3a2j8Sg8Z",
  "key14": "2uZdHY21zXsqtnMrRCDMPMcZNZTrwxy1PbYcKcdSKrvwTGgGeQ6X16mnJyygaSFPgJDSikHUxVZ6bWBifYZ5KuTK",
  "key15": "3ZtnXLGkF3euNudECvTAhoUDLDs5R3SE5VccAyckR2RDkUCrsz3TwB3mbEuJk4xyPyuBtuDrQQuBRpZdPUXxDzn5",
  "key16": "2vMJ8MK6WjY4qfmWeVM7HTgq8hCauqGdmmtXZvsWefXrbptUXHifwWVWxFiZJp2vjxvo4nfpJc6m6wGhHutofdmy",
  "key17": "5vhqnXWCMKvjemtYnw1j7xtFGXXqZZPeGU7xPqcKdbzujUYB4rVR6rf4iMoayX7S9xrLXtYCHfN2VtCneSkNLPPr",
  "key18": "2sCq2XgNJk3a5zuSB9RXpCBq7EsU2U7W9Sfje8vErFRbtxHkiixB4T2SThUBzukHTvECixfNinVTqTk5w2o9qCr",
  "key19": "3Q9cmfbj4jEyuc7E1wMrdjJf3XjJTjpQNFCoBJHMLm8wTSjVUU4u4zXvdqGnKXxXps1NtYiHR4vXFdjftR69mmSQ",
  "key20": "3AWUX96gxgx4zDDZ6EiH8uNRDNvt9736TCm8RUqfJrEPQdPywgBEkR2RS5imppYgBuwZpGN38MUru82kZaXXKyia",
  "key21": "HrgGPJMjMqr5rEbp9qTCvqPGv1CoRiuQfFUctxwiCrZjnZSmmvP55Qc1Wi2nS4TbtSvFKWCB2iwYs7D11VX4gvx",
  "key22": "5svquRbkK5D9kP98X9kiDeTumymzdVPHdHHbB1LE3xLmL2efL9kbZwMHjm2EXSoBhSVHtoi4REfg61KCUVpCRhk8",
  "key23": "4P54wtcpek9LjHMJ94wGX3ieytajPfZU3xcH8SSRkLKwdaWAkUcw6h1kiELDTGpxpkQ7HfLDNCtr48MfGhWus7kN",
  "key24": "sn4yEFMFvPMQXZUx1zdTxGxv1Q3jXjdFnA3f3nRw9i5jkTb6RuH7GXkUsS9sntyqfDgrGdyHy2hgQhyHuPBBQUR",
  "key25": "56ppRS9U58KC6Do1kBKwW7q5CxWiZBEmugHqoD2C6AE3JbkYnS6ZmjZ843qFsWkFz2wQrBC25gxGGrZdcGy5uwc9",
  "key26": "4JQAs7Z5VEpN8oE1EZmSZjP3jv34Dy4PEouFTT13SJDZkW1DWusqwr2YyK8cTje7bmxbMvR32HeQQa5g95pSwZbb",
  "key27": "67DVMFB2BXZqcUcq9L6dXqWVNv5QVtrNdfkN3jHCNDfh8hsA7mKzVXfnmub9XLCmaqWA127tPA3VsKMqMcfHwuQ4",
  "key28": "4rVWTvwfkj7J1rJQg63hLhP1ip2LcmGkfTWkgrBpu2qF63wQMALw3q6nS5cnzrkW5YMbFzvw2JQJGAcEPZdLtjTp",
  "key29": "5qRMGWz8FsZ3QX88RimGyXCWNA3hcUs5AokU1cEM7YHaHeqch5VbfWdra7YnbVk5g1oUcJE3FiG62PmkiGLZ26nm",
  "key30": "3eSi3jSn89qnNWQ5BKd1vnUtRwgkmbfdWeDvEvB1b3bF9tSpwzubwn5dGKGZsbmQJxm46PZaecovQyXA7LakrALK",
  "key31": "2NqLE48rHoD5VV1kTosTbVReWfs3Q8DHZmFs8UyjXKoTryqtZ5sfcJsoNPoerT5p8o1PKop1BFSKthJBcKKKbpiS",
  "key32": "5GztJyu1wDUFUdb4wqYZ4UUv5Hy7KZFXvs3c6dt3WLHBdrXwGVspHQFXrcXQZ5xCEuJLcWssWznsQkoekNo1PdPN",
  "key33": "3aVuWGcvPLFxMvcuReHmCmvKng1refGoiNmJR9rkPETQdrdxqtKn6Jw15mSSNg7BBd5SRoCMeBQp3ruN32BXjLz2",
  "key34": "4AH4kpNqPU7hj9HavnpGAgE4wLBcQiw4bw2PfdS8MKJefyXdzbn393ZRGTocP4r84yK2e3dc7dC42ucaRs33Ndpi",
  "key35": "evneJmg9icke71dnZDsLEatxGmmmjC85zhueePsaDZ2ePhWBqdbQ1BfeynmHudVCUy7urE3c2jEsxDUfaMANtgm"
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
