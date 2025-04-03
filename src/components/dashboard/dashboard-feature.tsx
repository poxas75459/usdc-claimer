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
    "4U2dZvzejJUpCagXj44srGQjWMtUYkSqBXyQSxszHeDJHbyw7xWTTBz7txnXqZE5NEcxQv48k1KJbN7va1LxXrDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "n4wAojWo8cgqBN5ZkMwxqe6nt2W2oK8H2kHPkBhurPsmV3VG5Kt89rko87tSnuBx8e38hioMqUTGho48epT47RY",
  "key1": "45ZaF8rqJc9CDeEQjns2mgZNu7dVP4Bmx7rGmibFxDDWPVhqRS81hApF5Da3zHZyMe5CyLHUU6t35krTySUv5ZAH",
  "key2": "5fTyiZ9WPnovH3LjSZQ1sFeQSqxoWy3n79ERWoymiwZQyoWQESjUCu8TMVyyfvovQvv6kp3kiXMLqpfYLNvRyNuc",
  "key3": "5P3KqCMAt596CaqQkU7E3RCiy7DE6HYr1Qa9rghhdLHyKFc1JY5c8jQcSbhcvWGBchmRedtLaxWz47WtFuhpXAYY",
  "key4": "u5adC2fnUtzBBUPHX1TaUNaX7ccRPgw1bSDBz4YRvGwPZ66qCWD2AkzAfU547Ahedo67jfhwVpJxeT9viAgbn1A",
  "key5": "qLFqybUEEgpKwUSswDEHdSHcMjzBv272k4VZhMiX7C1LeuifFimkCkJRdnzZGFnx7sPaATrYDhJeMjbe8q2k5y2",
  "key6": "d6BKcq8MXEqGSoguuu6m9oPAKxSajK11LUn2fY8U7sreKGRy9VaMafyQygy7tE1tbJHnPJvSNScpkAtNX5zRfqB",
  "key7": "22E7XqAZzpAPm9eEqx2DHHJd6uHc8yuNT3aFWDioN5HAiNiFKpJD8JGCxWzEG1cMvBTkSFfiUnP36MiFoDmeipyF",
  "key8": "3wagZqtquwXbVMYq3DuPpFpRXBh9jpTo4uyGpG4CCuSbvsYfACmERcAqQk5rxqCEGo8RYmNHB5DkZk1okcpf68gr",
  "key9": "59JyzSQFcwcRVoSyyGREvZW78rC3pHck8xHNZdz8bR65knppRBBhFdjwYM8PsKN8E6XwiQXATeiwJWPtS96aoqu",
  "key10": "2uFTdvo6Am83rBT8MykqpLiwaKp8hvYs9iVcmx6dqHyjm912xhx8zRANBmUthVGHxeej6yJTDP1YBgqZstbx2dG2",
  "key11": "4NM7jnPfAwNo9soNC3wdqwzPjeKB8iphSJvuwB9yhL8nziuzm9Fwm7JQCtFXLDzenHdwALveYyL7rdCA5EmJFH9K",
  "key12": "326XfkxJB5QmkEYUnwz4B7JpjFWtYdbYbvepPCGhpfQsdqeTCWhPgmuDTk3fUeUyvHZdpBKXkrZg9hR2MufguUdU",
  "key13": "42HZKtzUxEx871L2SJAes6qaGpAUATFS8zLW1nLxH9jy1wqAXk9uR5Wbeng33C4W9A3zRYdtMcpAd2pVBoT65bHv",
  "key14": "5PxWXPqwGZWeTD7pG7UfWvz6PcGirXES4nzj5zr1VeBmhp3EL9b1AKyzrUA4T141aGJp5wZg6ssJY4bKZjAaC2BH",
  "key15": "5ibUh85ZkqrTDPwrUstPaXf7HUPkpuwJK9L1YatMfBkNA3AQfagnHUB6Sd5dAH96hag1fa3y65YJtbQVPV1bpBv4",
  "key16": "ZL98YFEC7uGgCNmEy5s6ejyt2uZwY3spnM1pGxw64pknJusiD5maiVHuNh2hTsjyPay3fc5BAMqrA9UJ4YmwLAj",
  "key17": "3LbN8fejVcDhx1SHXWyRBDYh7PMkUeSHMUuGrhjWa5nXBVL6HzCSB3YVp8igJW1qzntKtXQXg5P9QP9SoBwnetsy",
  "key18": "2B97tmGBVsGu4sfsmC3DXnLYZHiJEkHMzsyjWocjxG6CtcKHV7SgBxDfxRRjRzKd9vdwe9SSRUJUWYKyTDwGpKzP",
  "key19": "2AsvUAGkWhg7GC1kBFptTSQN3UxACxXiva5YbT2dPAobSkztSctXzhgPtje8VLKidEFBBdLiCs5ASE5VguVkybyy",
  "key20": "3Thyp11iHHwup1gcdGZnvEjXDU6WkzHPv3nyseYRVANZnBmRCprn5rtehwTC4WtFJMos1gfZg5Eb73L1yH3qG3tM",
  "key21": "3Qb3b3XRpjGAfxDqis8MkMJgBBY35zi96K9cQzoHwLsjCxzbKj2E75BLXiTgho71u1ETNTfwm6RDeiJdJYEgPYPb",
  "key22": "2ztwgYpmS6Cs6s1deHA2sjGrxARV5Ppd7n9QANeKBZpKVqNBjq1WdyAKMDo5rxK3aTMAtbeHPpDvmtFhh9zRdx9P",
  "key23": "47UZPLh9jH2CDSZw8XqBdtxWFPbnbsCQS59pjXPCXTicHArn7ST7pP8Wr642htmtcGU2yPbghNdvF4a7Myijdq2p",
  "key24": "5h8W2YrLF6s6Q57mziHuCeWkFGXE5mB2EYqMM5bzPWtSgzYS8azyc9NDWmV7cRCY6W9VvXTmBjAeHb6DgwM3H7x4",
  "key25": "XfBtdut1NggUmeQ9NLiaE9QQ7UWh4MqPT4JwwVxocz148HCKu9PFrrVyQNRgM1dpLLgrJYsEyowGw9B3v8ugw4P",
  "key26": "Rc5T2fDFpWgCwrU2RLrYa7khQh7iBKbrGnZkZATRsTz5tKfeizZ3cm8W23MPqQspv5JeMgGa5MBdfUFknmn7FBh",
  "key27": "64knT7rcJ5h4N4P81b2b8ZyzjsQbJrQCRSgY1D4wrtmUcfZVoFc3PeFPwXxVUtNAREPHjAL6FyW6vFfkHcQ6LZuQ",
  "key28": "37F6STxNr2retoF2T4k4oXs9mLBxhhqWP1LsdfEM9PGhXubPmxNbp19SXuWofwiCYKSYoXuJ5yuJobaKVYHw9t4Y",
  "key29": "Gkvf4C3K4oxDYyL7sBjZBaLS1XsGHscAdjv19qYEQbydGMBF2iF4Arr8xh4W8rpn4MsYkzBvV1diGR3b15Df1m4",
  "key30": "3BWmGiK8gxTae4LbhoZSNM65b9v6eM8jGcYuggPJ7ktiSrrvwdrGsJBw7g8hvEXt4ZKX9EwVn8SPwiNTsYnWavwm",
  "key31": "5Ep1aPuF6nNjozXZyrziQyT1HU6zVUF3Hb3ZX9aPXCC1eS5Vk9eWEQ8r3mueupptgNNkHckzYYxjTTDCEPGLQnXc",
  "key32": "5CLBsKsTYZSpByEMFCxemf6yCSfDiJZERykBwARH4AMZbfzkau44KwyiSAbJmfWsWUjATY7AWfXqZqHV95bY5TTo",
  "key33": "3VTbt3woGnNNc88ztCAEERDVjzDADb1dBGp7azHwZ2ybNuSmgw3s8LkFxerwefKMc6pCGpGn3nhDhTsVEnGbupMY",
  "key34": "Ucfvu6UezSnh8DpboeGqcbqxLcZgTBdMEyvGwJAcSkhcS4LRpgkzzpPJqefs1nWa8uUHjS7EMus73owqDcUtPCz",
  "key35": "2cqFsSJUjhVyEN9P2kkJCmzv4PAFAvmCBtVqTCYMSjTpG6WHCCrMpdZXdnxH1x4Zf7jhr9oUM4NvgRZgZYwHmN92",
  "key36": "44cWqEMQjSCxep6CRedgWfvXsQjJiehf3VaKRfMgR2np3xo9VRr1LkNGwcygeQbhEZCyHgkZPb84mdf5cqUZP1GX"
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
