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
    "4jt2uJbcfsrXhYcsNJKNaeTGRwaWUsdHdcqbD8PNfN5N61WfnkDi6JX9wZ5pboRP1ScEza86bhuWk2PvMLNTUSb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4axZdtdcvo8CzJokc6V55gUZ8AhuKYHC75uEaZA1TcZaoYderBKrEApk25hkogATkZqqPRvAwqqwm2rvztLiafRz",
  "key1": "5an37apw2D3Hj2Kq1mv6iyyqi5h6rUySYqQHUJXBcExGQ8Mb5NEFryK3yYzL3gxTBcaoSRxmNnSJy4GbeRSULyQ2",
  "key2": "2qa8oKCYdrT4WXUF5nwkFtjBqv3kftuLGbAXeeZRvvJHfStntzY5SijRPU9xCBdz3xDfWvia6hKzaub7oSfM4sy",
  "key3": "8yX8SRLTeyfZCpVee4D7WKdsKLpn7MCeLr87McewD8cMibFhZHMY11AekBKr74ftjRgAr3tt9jzggLqF8LqbtqV",
  "key4": "2TdwoLsXmVgbdwVc1tL5YPZsRYwymj1Lu85VVvqMwPZyoQx3eRvGdXq68dbep27ufqv2kBoGrf9ZSQE3k5b4bZLu",
  "key5": "4rxiSMEcrsTeGYcQ3EhNPLDbREfe53H454kALZB6HXfZg92D4kPTK8xKwUnDAqeGzdmryWETrmSriT2M8n4hrKLQ",
  "key6": "4NR3nFPPwHBBdckRmP4hefcHrdcgE7Qg7MseMRiD4QN2KNDiQVwru9jTdDNu8TZpDViNWRd62iKnM8TTcr92sMKm",
  "key7": "5hMKHtPbHgwBJFLKkKpxaKzeudFyzR1PqHnDAjEjsa7bAUyRqDz5tDLDxjjqvWWzRKfLwqSHZdsSiNnJSFNMCWoD",
  "key8": "4QL93JuJAtKmxhZp4vFk7ubHdrpdcbWkG2nbM5z5uu4rXPnRuUbqQg9HvjPYo9HQ8NF9oBi52YLgi8sovdZ3UAkZ",
  "key9": "24dzsZ8CjvmUZHemhKyxsTawiGoqN9R4BbY89noaX1NX5UNCXTZ5PRp8hizwyCuYAgdDCGmLZuZJ3e5L4dKu3tw9",
  "key10": "JdE4UTnrJdw7WiYy4EcPNj5UQJYZqjeJxU1zickjAwCCBfxzPjPJhM43AppFhEvRwX56RtRcBY5yQVcWfZzQhYF",
  "key11": "56FrczDqgNkczTqFPrFUQSJbfqAZ5T2VzswzZPaqYXHXE3w4i8kPu2p7qGHjcmq9sUySUwCyJRZjCrQFfziVKuqn",
  "key12": "3BXQDzKAFFTr56xjSQHXNa6ceZjqySvMkCq7EayCDoKedMRnQe3z9rBZZykJTM1i6CgQ5zCuagemrFC9TTL4ykZ",
  "key13": "63KGrSactLXeYExCKHBA9dEJEFF54qvWHkTGJkJiNazab4jhn3XxkqpnmEMiABQFX1iS87gcT26WYH1bRwBghoLP",
  "key14": "2PEJFa225VhPhDbi2RmP6Y6igL6BZL8TTTZT7AcC6AkGpTiufS7dTDndi8rKqjf38qEVLL9znqXSNgEtjYSK67Z",
  "key15": "4Cb1kSzGo36AD4T4y3zLw9EgqaZ4DfbSnJbmmsAb5cnTHKpd8CYG56vHXPwDsPko1PSeLBhPQUKfT1jKpEDLMni6",
  "key16": "3ZkXc55xw4ZszuXa3mKoC1MRtyFnFz7Gknm3FM2u8cbDGgsmksvNgaP7t7yxF6U4UG2qaqWRM1Di2FTieByQm7Mf",
  "key17": "4usrgCwabXos5d7q1b19VHvnAu1ryxj8TNo5SYJUmmytUvKqV3n4afUDKcyECYg4yGAYwxuVBaMeJFaDBYqEgiCi",
  "key18": "q4hc5AT9K9Fhv3mBxJbvmrV5zkKyZvRqYhrfyxScmpsu4MnW9eZgtMA5w48Ks866ZhPDznTY84GukTZ8kobx8wY",
  "key19": "3ChgSvKZ99PfeGnAx3eZCiuK4wZ4UJidRmt7XFc8rhkfcXN2NBHsszkrDRmiW8Xsyud3rDvABto6sxGTUaBa1dgS",
  "key20": "3Ykk1bCmgFrNT3Gwq3o8J8gAcgtr9yAyons8SPtDxLiquHC9ew8bkuRr7QEu4hy8nES6H9FFWGWhiYHe7CoBGgJv",
  "key21": "NpwTjeTBFCGvjsQmiMGMgiPAzHa7KLFXbKZego8LmbuV53jHXac6hTUXrGcsA2ABF8rWUVCEPoU3UyKvvKCMT1C",
  "key22": "hzMfpm8ZKkEFVWtAyBCeGqNUj4U6wQ7jxfxk77wdF81HoVsKV3qY8e8J3CqAHrv66udQWrBrmdr3Xiz5UhGpVXf",
  "key23": "3XGsxW4f61qenhMAy4LnoApaFZfGYUkQN7UxrrHhR6y8QmFgiAeiBTGnUMJ8AxqHUv5SaWzDdmpHuE8x5EAdUacE",
  "key24": "3bMTtPtNP9ECCCduGtaSkNHeMEoHifceHi5P65X5sJkc3XsCZtGc2aXQoBMV7HD7WMsfsTCBQiuDybJ2mydipD7c",
  "key25": "5R1RbcXZTr3wt9eHa8QCwXk46TFuUHhV2UAuwDNg7iFAUCpSL2CvXRCgLtJvCBZ9TzCM2S8sFaN23eKcYpM53VkM",
  "key26": "48gDqo8QfpoajSRsB4BPt1nKfPhWgg4gjBFcgPa9TGW9ZV2kz7ZM8rLVK2d8ynHA4ShHJBwZepEWpoLq9LjXCD3c",
  "key27": "SQ147EpADUueCKmv4Y5UnMtkHVeUEwM8gK1hQtTPCk9yofb9dgtLmsQSzqds5upSrLZu8nnHqhFRMML6ZsHsy4M",
  "key28": "5KgufCaFWBZ28xhqG5hrHTcFMVnzyur8Q3yeaUaDxa7oRXY4kUdHonpY7vEHwmUVpaSkTcJpri7pveP9P3aNRm5p",
  "key29": "3X1ex98XqEFVsBFoKqWZdxwo89BvWEgZhifzE8BJeSU6qTiSxmCzvGLYrUUgx37MPjQoJCLUAQDvhEcyCftrNx2u",
  "key30": "rmTjNSvpTgQeJAWNmcxceUbxEZRpAUxJsc3PmTvF5GpnRGXVHEpdWCJD65K6NVvzvYbXzpVMZgcU29KDMQNEcVr",
  "key31": "PvHErt8QdwCmPizhPYJtMN9oozRZV6B3UVd44BTLyYaaA88uxBCcMTDx6xESMFT2pFtNHfJw3qukVkWPifAg5uU",
  "key32": "2Y5BeYei2NYGWVTuErQE8Ts7wtmJGyGV98wGvb9vndPX2sXTf3CddU16m5S6n3HfacHqsQvuLj7sDeyxne3Ro4o7",
  "key33": "2z7pi64FNCCYaWWEZXPBvWFaB9vnPpaCT2DFyAjntr7uhTWEoMnV25maXfuGJMoyHVMpak4zQVJ42btg7n5ZrLpD"
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
