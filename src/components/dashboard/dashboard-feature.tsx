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
    "2RiqvX5dqoFotHuDfDkgNWf3qq4ae4jdsNrDf6iFk5RymHj5YdEmJPeYYWFcvo2Y4mqhVHUH5HK4PnFC992AvAq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ki9CNazUPQB13yjSNqMqDC3C8Z1nCcrP5X6xc5UmfE32Bbkd959FtAxpr6ZKJCHKZXa9kgvKaPZmF8rz2m9mHTj",
  "key1": "3oM5NakictwzG8Deym87nkvpR8HPUJUbJRVfdWzJuEpK7mtrjr9AfWCdFHECerwgGk7Z3b5XBdUEkx5BpGXa5XNr",
  "key2": "5ez3ndEKgzNkY33eLuW34LQHcrFAzPDqA2uPjvXEYYVR82mshXnP4RhodLsf3PwQvUAJxWskoZz8a6NkdiczcBgn",
  "key3": "2gt4XR7a3qK1LgjJphEedxXAxkNpHYfREYqb2wahariZ2Y2gS8xvVdm2JuvrL8G65XnV52SAUMdAx2AzFrpyvY3T",
  "key4": "5RcN4uikTJfAifn1uM6QobvJU7taBfVUPkyq5hDHXWBhKZVfKXSQnWjFJkQq2noVFUBS2ffXpiJTeWdDPj5hdt1v",
  "key5": "3YJAvLv7muHQr4xj6uzpsz6Vx6Cskwp4ZGrF4edCr72yoMxj3GwUisJyrRwyagV3okNMkd8pjWa39nsjGjNzZkkT",
  "key6": "3tcAh4yrqLrcjYSMve6hHkdhwpThxCQkx1PAbrX323eUELedvgvJD8BLZ3GdedCpLKo77rKPy7rXKrg3eUgPLUU4",
  "key7": "5wncaAbtEVA9prXDa69u6TaXBrTPg4JzCwCXrM1j68Ynw5479X5Uuo1eysqhihn1xddEvFhecpdKh1tfxofQWDag",
  "key8": "cuZ2wNdkRMn4jQqZjmLghiVX1juHoGBP4CLLPDqGonKeXeXVb9RCAjAxabZNwavW23zvboT94JmtSiMdnw4pnWn",
  "key9": "2heR1HTgSz1G5cXmpb1umNdAapLK6ySBpNFevhBtcwyBwHHeeUhnExuaPxJhF4ksdyKwPXJCya7HYAkv2LQUJ4yC",
  "key10": "3eTyE6dCy4YfxompSpGp2kReky3jG9S4EvM86GZaBYgKRi2gnmyHDWsCCMhHjmuT91wLrQT1yXW5gRWggnzofPrE",
  "key11": "5WhiwSt5WDMQMKF9wFeHgWFAWN8qwFAu9tsAikm9b5BMKsJ4cArJbXfUVAvsj3anpWz1gDVQN7qW8n4tMj3gNS1B",
  "key12": "3XjGCvycYAfsbiaxYdUZ4tzKeuKTKxaUPyJhvKjdRCVfc5sde1MnFfvUAgVMptis1maP97A7sJo9HWkGuwCPpsr6",
  "key13": "42JgDYXCTnp5ECfEvqcE2Y8Hy7XwMn8daMQ5NtjUG4SvVebF35V2s65MAt1sKSrf6Pt26jJXkyariZQ9YwokNu4C",
  "key14": "5QkdgQ8xVH2N3p3HAxQdXsS1nyQkXDMpDrvuBZ8nKHYg7keiUsfYqGbkhhbcgpWYxqU2aPkZYXfUjYeozmDUQLSH",
  "key15": "3cUyHrVrpnJPNSLuxcL9ZqhJn2Su3Pgdyrv8WqW4wtnLrbH9nJXZAqVqSqVs8xtSQyxKXKYKsBVwTQVTW8cN1Qoa",
  "key16": "khhkC21y9ZhtnLyyHrS16jViZNQMi9McQPyyf764i2TMSSdr6FteveEheVgzDnH2WYL8ep9V1opx49528Wrygcp",
  "key17": "2BNVhxJv5rFZi78Fe82f9Nu6S8nud6rXMBVqTBT5zYtjpG2epyBhvFEo5QRms3Dea3MwZgcvD2C7wqhEErTiabbY",
  "key18": "4fxGHMRSTeQmCaPbYJsTthENEqWXLM39F5bjcCfTorNvxm9a8LgRX3RXwkLnQqSJ1f6GTBVtSHXZPyBwBX39y5vN",
  "key19": "a1cX2uEmW7uC2txazj36B3om3t8ikBUpAvVEMPKasjBmnmhtXuxdS6dLNEeqKK6sNapbYH22mV4riWz92auxp1v",
  "key20": "eurCS3MsvLQqctDNg1kAEK6xyfUsHsZLgA7PWAWEkkshcKhFqSUMvyuGfL6FAGmcrB12iumQgFnUE2ppwtu7ZJz",
  "key21": "3a7d8RyxWrxgVC3x86GmojDJgq52Rki6abyA9ZCXXfiYgcA9ijf7Hgv9DG2bsRifj199GjgWi64bt76KviXrvBfT",
  "key22": "2US2KKMxX5b6XZZCTGd3nueFfVuDE3NKMyL3AZnyUBR2hg7inFJ1Vhbc1C9onf1UNH8UKkt9m5or2tk8vZoANjab",
  "key23": "3Bd16nCrn1N1ERBEHVjrCk2TZ6TkzrpG5bzPaWTbRajAfrAPF89UGSUATgTDxNAR2avPLqk32AUnn7BwhuZsCHJd",
  "key24": "Z4WD9uHjdYi6yFJ1mGR4KG7WtUFVAxZjuAubSxHQwbfaApfYkAKJFpVCFd3aehnbXSYod6JTov4cSX3dDWHkASa",
  "key25": "5hSDQ49Q68hD8WMF59kLvxGMxDRi68yMGsbdTJ1rTx2eS9xvi6NzJPz9aET6VWeE8mU2F1djHmDQf2q5kf6AoBsp",
  "key26": "LP5WWRxQKRqemGKFUnrdMLzJJDrRQdMgpec19Pn5xLnNU5YkEgS4HdyZSt7QAoewjyCfDTaabmwbYA4VbqRnmE5",
  "key27": "5MGtGXQfovMiQr3qcJRvF8aGwpEdUw3Xnp38Jmuzuyb9pot49uPrtFQVp6uGexYnYGQ2sBT7138ttkBeENpwNEFh",
  "key28": "Z95MHQ8CstaHjy6ETNFh3BLSDWhnev8RdUjCxYKQLRX4SNeLVv8VaKJqZxQ61W1D6Z3aD5StYkAEtL6PddxP7o6",
  "key29": "3wNdqSzenPWDJCkob2n5CQcdbCsmvGJT7BvqEzjohhP2on5kQVQbKqdF845sQb6nYawQHpTZhmRCFiVwvUMCDhf3",
  "key30": "UWSCEF8EKBLT7oPFBVAA8ZXTMvPcRppkCDRgBUywQWQuUzqi54pF8AWsAE3Gkywkw2w3wNynXSAd7HJnXXWsSXi",
  "key31": "3mhjX8BFum3KCLEjPaU3F6ey1LLzPL7gV8yimn7WihC5WZ5jjmsYSW7UrQ17nxdgyBux5aQzdqqVVbj7ZB1PrHe",
  "key32": "4DQE2vGHM2AmZ3rZiayWNkGeNwH8pXV3GGpgkesGCSGwxPAqSa2X2ADnbfGTFExCxQzuBSoMS3EhGbMqswXYiQuK",
  "key33": "4F58ydsn1Eub1LDg3haKFc7SwNEKHNGS6KowzYssFFX1D5aRjNuGz7D7KkE6QVM2aXhDFJMjdukohAWDsYbkACT7",
  "key34": "2j77sqDXmccuDPWhrndWSr4urysWwERT2S4XbAuyZ75y3cd42RBtKCXeRAcneiZsdDmGHBHhgRi4SLmsayic4Lpm",
  "key35": "5515eG8TZzj5kjWiFijpdgkhHHt7wRM7vEXJ1cUtWDYzad7V3y3vNAmKvoeYUNqTK9qyH5GJai5ZGWsncyyTkWYG",
  "key36": "5dusAT4NkJqKHwMuFgH2646aiVJfLC2SpVSNirydhFTGb5xUueP9ZAhwf5AtCDdEEDkLiCiVkZ3kaRF3rGnPNx8P",
  "key37": "2kDZkqtaKFybGbG7jYK3JgDd3osAyPM1W9Y31dtTSzy22BsPaoFVCF53ok9qVeYNeb7doaNAQFv8UAPbirxYah2S",
  "key38": "3XP919KgtKXFvp5AbaoUEtK4Xx5knu26nb826qRPoArBsShxdef56UUqFkFaPV1s3AYM4CvDrnzVT8a7L3ktsPDv"
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
