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
    "453B33cNj398KHz78DPZD5eN2JjVkS61nQRTo2aSpDuD39TjHZqgRrgaJqx7MmDke51riZYM3qcKyap14XbEESG6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2E21JukEJXALruRB2RgbtnggFbyNMWaECWRUQHRZLZwT2eEQyEDE28B15Wvtkmf6aN47Ews41qCH1Pz8YukzS9We",
  "key1": "VXCycT4NcAjCu7zJNM5hk3CWRS11za94P8xFGWJyfwN2ce8Z23BPhX7B7DMJMK1BG3hPrtsVmsyVWAJCTihQkU2",
  "key2": "MvktMa78egzW2ThVMEsPjnbdZ8w4KGobsbGF83h4cN6VnHM1D4Wfk4hhxrTve1LSSfsicRX77G9ahi7HiN75NS8",
  "key3": "2TGL2GGHLFyedz8AYDSnZ5NKHKePgRomDRhLc5X75Es3F4iXKXrJkAVoKqGajWe4Q91mhN7KhHzQTfk63wmKUCHo",
  "key4": "Rubmy7XxjYrFTXjWuNeBiqrR46ZZA2kRaTqpJCgtXuucVUs8nt8Gcx2zVhaTB9dn6zBxPqfqnZR4fuHfBuBMxph",
  "key5": "41o6miuBFNNbhSTpiLKPq9bU87u5fjjNDB6HW2TZvDXWK2QiWeaBQshnyGKeSRMmrs9i69q5BWoDVtaL4xpZayAH",
  "key6": "3p7mKTZiBCED8U5DHNyZPcKPUVAh38haQ17JoYjpag1oZrytLDZSW7Xbn1kVHX6MD4vksCFQeyyYjn3wp3a2eA7w",
  "key7": "5GoLrqpNjNyuwHWaLcPoKNDdznSnEJRumf1MqDiYBMjy3KwTjz4qzMTb8XPbJU3ghbAdurRNBGJHrhG4otVSkAuv",
  "key8": "i5749EAxLFwCyVEuR1QTpDjBCzNLLjY46MmnS7XBFQuJULiZ6rPMZjFEddfkrXzD9BPxZWvkGwxjSdoJ19s646V",
  "key9": "5ioELsbZrDoTzKBBYaxBLDcsGxd6ozqkVTkTrR4NwanjTYwdbgiqrnzxYv5TGjsLzMr7PVT8AXhaCXmM7o9tUAiL",
  "key10": "5sueNTc4Q18R4fezo55mEr54g21M2Z5XnHoRVytreeHC93vy2NJLzV7NyQyGEgd4MNKm5HM2WR7p2TnBvBved2jM",
  "key11": "3pR8o4Zr6XSSHPHd7CqAgjeJtUuSDabC9StxDPAPmXDo8c8oa2gsHmvmYFE3cDMsL61uoXdebMV2rarDBPtjBgw",
  "key12": "2idtQ4BtPZDUQhwcT7CvAsCjNP2FmwqfnFTwiwjQtDBSFTGWRJcMLnGR4LjttPScUn2UJ8sN2M755jFUB7nK8sss",
  "key13": "4Gv4xXC33Fr7ppEaigXtYihZTZJJnDSradHSo3hXQYjDUi8uLLty9BfXjG35tQRYrrRBUhwBpxsFVhr2oYzHyNBp",
  "key14": "2EFpiCJo3v6VcZgoteQsG5NWEeXdj3kpWhT222Ufcfrcs1BF4epRHJM5J7tsMUxyCRcDCzX5tcyFzFqh23ty1ZbU",
  "key15": "54B3UqFvjcBBcWmJinLHQ4EkDZEJaM6EkLq2iifXVk16DwbbJeGDEnNnun1Pq3Kxr6exaY7CKYStFJybjjtEjzas",
  "key16": "31Rru7sGWdSPCuU6uZMonCMJQQjWegCroQYE41Kc1YfhWELctEg8tyYC4PPfgQBFWeexkNUVRdw5pFt6r4YKt998",
  "key17": "2Z1vqxPY4k11XU5Ea1M2cdkjzHrw3cHroRXq2mW1M2MLMaWjTQczUVCjhZNE5J155hgWDZZnhU9hgc2ei3V3U7i9",
  "key18": "3F8iyViyuJDQzTtRv5NJcrJuGL5F19zGnPARZgCJNqMHj5Uq6xrQ6U3zD5sKb43Cc3cfpdUHLVADGmAMpRDpij24",
  "key19": "3s5RLak5UXeyukMeo9oEqjeMR8PQcbq8QTzvPXnUPCrq6X663AJenSv5RgoSLB4cYUB9kx91iDhgwzoUhymtWmdz",
  "key20": "pr112KHZBTdvc99637kD3ta19p7WxVBYzDg1XgsqByceFGmmv6eaV6fuNN4FF3XezmH5CbZq5hDe4xjsRhhZWFz",
  "key21": "2eB6mSmRDETEp3CEkYkSii15KB9jSfQZCULojTr2t7AohM5t93KBLDW3fKAg9xbG3cZQBni9nemdRMJDSVru7biD",
  "key22": "2W4eDS812UaaTWnH7UV5SLUESNJQ71EfBCywRXTFzdt1PzS6tJTie4MobgwNbkBbfFz9fGSkDsMPwmgPcfRwZkwm",
  "key23": "4U3ERUSooCVMj9JTh23gixJTExMUGzESRtiq1CpsdT1rRgn2T48c5WoXViToSuRnEj585iMz5MAwsA2gyQfv47Y9",
  "key24": "4476dEf1MbQqFHjGR55jbZq1pHRXoRE9w5yyjHjJ7YS9zKPESyGZ3p5bFJZy8KLwsnsesprjecsBReygmQP2kwVf",
  "key25": "2L9M6Vv5uR4gWGKSmEZ6i4z1UBSgCo4idKEMmk3y9V9uN1gWN9SX8F7QPs9DUMyztJyicH5Ybgqgmk9rZZ47QiGR",
  "key26": "43XZqHPqrpRo1qPYWdBauU4j3b7W17y1aBXeW46aCqAJsRFVp3We5SjzSGzQKLgUUJwA6KHqVp2Hs89YEspoz9bh",
  "key27": "659uzuXUrdp7FErWLoPACva8Qnvp7ZCa4tPsYPhzGav46j2EyKjD5FhCJxQcdQaW9cVkSmFzQvQX4YrYy5ARFBB2",
  "key28": "oLCtULTZizFBxDacC1mzCWkYCBq8EjFM95vTfqsjYnRBafRGfkr9VbjVSttqAAbyQnRS5EdcjWnZgPCq4HK2FeW",
  "key29": "5N2etmGaXjLZrBrB2rLLfFv8UGx6xMGMb9PuRywisAjooUa8m4iGJmkFALDqNcYhzijS4iGPwRteF3GRMZb8FRQo",
  "key30": "5JtMS5V5cLEmYbYgvsrDYcbiFJRnahattdNdxsd3LT5mj5pWzK4Jyo6xZpY7VQ5JusTKKJAjbvrPmvJgU1CncA7h",
  "key31": "2QY6jM1GmPVrcARUWZF19n16JoRsF91AT5xYHnjwnwkJyVz7f9Ek8Y1Qpk6RYQPCFo6jN9bMQKZ8ACz85ZNjTnW3",
  "key32": "4J1qitDVpYddp1ni35BFPnFyoXxQxocYs5CwANaGTrafrnYfhW1ECeC7EAghECqwqLeEqSCTLdu4mwvZhGFB1b2f",
  "key33": "fxjNpSnUVvs6ziUQXjc4SuWCwHQpHRsvik86wNxEFjKHVDrsaXoiUs3Tz3nSes2aA8LeVr7WqPRV3zbVAfuzNx7",
  "key34": "2x96w3GXdyLku5jTpNs9urACqZgX4ZXmyqEZ1JYvbR2jWJG9yKHw9G8QNQw8HTunCPeLSipx6HtemseVSubVGHdH",
  "key35": "J5exFqYehqN611Job2Vqc5jjuke4jZbuaQg9RhpF2Ch8MLYXJNusi8pcpgQJcyL7zJgDEbh1sUBcEQh9pL9Wp1i",
  "key36": "1291U38Pc6qAt7xeyXkksQyuoqLG4Yk14SCngpEAiA817MmHrnwFdGEiVnxp6psY8jzVLW8gJ4EY8rpaZDidqgED",
  "key37": "5wEFtKp8LoBsjKakKvZ4mQuxE9rRi7JNHBrEqMBbEYMiaL151DG93uTgTiVDrEDyeGuxxfvpay21QJuLbgFPvFwg"
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
