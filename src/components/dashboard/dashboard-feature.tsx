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
    "4iyL1rBozk33tMfwQLr3Tvhvrue5RKqGW4ptVzR8bkxi1gAViDDcHJYGYsQkhh4EH1MmVgjxgm3mJh7NfHLVXfJ3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZKyRVjknQ1rLj11F1Vg2LFLqW46EfKD69VGNKafs1rcFDcifJHKQ7c3VXqFQwJNNrrg1Lz6Yi6VnQ6RrT7GrosZ",
  "key1": "4xjkjGy2vmzmXw4VxK2gU29K6szAp5RVkfaz7vhebGC3gvu2Wg8FrM5VQJoiE2DsnZyQm4AyLJkHac2kWPjX4JRj",
  "key2": "3Mi72kBtS7XXmuZFbjGfeoGZEk3voGeAByivTx3bPsKwy2BRkeW2xDPcssLPxy83qqgSt16ezetbPNZ74BFVfKbf",
  "key3": "5RJcxhiyXHLT49w4vSNuwsgoXqYHfKADW7MdJzpqrxTS43PMiHMaREv7grkigPXeD2iaVaGXGWnqA1KcnyBE7BCy",
  "key4": "pBFBf6uhRkNtwrtvzUdjjUh2BEqK6ag8SKkKihYst8iuT1WqwDPYSVDG6Ve4cGC1KpQotjZM49PYSxh5RSazYYs",
  "key5": "61AJYRHLmgmMTbkfVH3nQvajUWZdymePHkWqvZz7HYyy9THJMmRCh4fAQD6sGJNWoYdvYK554QDWro4V7mdxYiaX",
  "key6": "4uFTZa6FhmTP3TtxZs6EhvodV3nJerxLMMKaYF9tzyQ6matqMEnt2f6m2GRKvU1bjedcuCamcBebeYWZq63soS1M",
  "key7": "52js9mmavhLQwE9SKPNS7t2Vsdj366kdNLK5FGYmWbHdr6WuWZY5nMxHbmoYQPfJjs3FiqKFsNyrT45iAv3ZhUWN",
  "key8": "4KvUfSfer4Js6qzy96qhHY8fzz15XWyCttLp67FFGtX9sSFPZBCPwb5SisY9m51aiJpT8tWgZpaVmwWnYU4rLW9m",
  "key9": "3cZfUKh3qU41nYUTBsybju4eHA584Tu372urfLr1Ddzqxar5WU8TF2F2i28oUr2MwCsUzSSeDAnTSqMrnKLJrsXA",
  "key10": "5tZFp6amGm9gWfLTyFtuay3vfLcsbQ2WLaBtZByZje3LpBpV1yFuYQrjdEJWM1zRvhKEYajLy7bE34vuBNyUeXBr",
  "key11": "K8FAL5RFtW5i3MNY4XiZbEF3gfqmND3BgLrnnAPaxEDg2G5dR2XZtLYq16tTkeSXTq5v1uHa8oPeu1J7dxAnyUU",
  "key12": "5xVhjjuuYuMvw6DoVAZeRsDi9AWuJnNTFoqkn7zMS8XxVsZdDjQXGi4QvgaTa5iqn2nHWsV3qnNuyrHUw8KtqNnV",
  "key13": "25JVmfZ1aodrHZevyRsnq8k8AJcm1hHdsyE413bhrgt7gZnYbXDQaiVoHHvBuguAHtd36GXyrHkfj5neJK2yVq8M",
  "key14": "2zcLeDQYzZ5FhUHMaBazfC7Uz26pgXnsA5WHg5wKisxrB81zUYT2NqccK45z3aNSUoBxhwJ5gaN8ViMyGshwBR5W",
  "key15": "pvpicjxL29Ej5P2D53BnFMKiYd5KZYEYR5BrYYMb3tXffeYcp5HRxPTbBqm5GMv3dtEjpAoFqgQQDRgrcutkG8M",
  "key16": "9p2SkWXYhANaAKXicorHsMbR5n6fM27kiAF8FpiZroYyMWL1hWEfz3Ay9fpB8zLgemRsdqW7gFJJz7yyhYk7mUM",
  "key17": "KpkZDyyEiRuVeZdeY3F4MS1SvFJ9pryLzAKqtHY1v3zWArGk5zn4SaYHuZi8F32127och4PRDSgejN1AqThFd3k",
  "key18": "2F4ekU95uzXQYRCs6oR1YmJsSpg8BVjKLKVJxSoArErCaz4q7Qyy5ssMAUsBDRSDALjDFHS5YdNbaN8gWoPbgFGs",
  "key19": "3Jhg3J3FukaVFSnSuKDHWcbdqFGzDUpUcGCBsXBLVYKrAbu7oUarW7ZRNzw2ph2je9fDeDnMafvRxCuiraNRPSZu",
  "key20": "5RN7jqUDfvrtaxvKSYfz4FW4nXQ3oyHW8DBDbSPX29scqPSMSGtQKKrrxRQuo4kKXTgLRFvP7GwWKdasv67gw9xX",
  "key21": "29KHpUuLRC5epyNh99Fhxdb2azoX7bUGq5eamJzVp6S73Lk42s6A1uQveHHS1zuLCMwjHpY9dDjNXR48rq9CN2gX",
  "key22": "5oD2uj5PCD8n9kYSaE9Vtda4FNBfS5jpJe8XDpmkQtAtmct4EW66SVwwx6TRpiia11euHTwaidc64cN1d5RKUJPG",
  "key23": "2uypDnsR6dhP4dPtRcERq4WQkFWVH6SMFRG9oMieYBuHvWjRgzZU7ZsFsvCss6xyw8QQrp1d9E6mHgxwQNvmHV5K",
  "key24": "4dSsdnQK8ZBACSGVhPj5JFzmpyZ3QDD3oXxvYCbLYseQNL8KuUacUw4U97SwJSK5US9fTgdK2Vj4EZWcNtsLcvoh",
  "key25": "4KcqqwN42UJDX9SQ1xajM56AWABeXYkXe6S8MXWPuqRF7b7L7dLJpEcr7FGKo4L7fQZQkNrUVsgMMmn7tKCAA71U",
  "key26": "3odDw1a5zLporzkJaNq6wyxH4NWoc9NdPSRU1HtoUVdqmVEEBnRt76ZN6NGvgTkKeGzMYLzfLL2eCCMdMkmPBfT6",
  "key27": "2T8hH5VYSEkcN8BpwEB6W6tTMwqLKdHtXr9h7piRurMSY19HwFTKvt9dhmHCYzHvopMdimnE4nPCGN1suSKRDzmo",
  "key28": "5U7vhHRBsraeTNoHue5QGD4My3eEgXSiT6SiVEhafLhSjXw5kZ9tk3C3qYn7Df1vuZkk11gwxrzT4oZaqdkYZQxP",
  "key29": "2XhBMsrVaTrXYarZ5PTR2QWDw17XwVpAyeYhH3c4fbcNbAbGXhBqzzuYgCj9YHbhK5Tdmnz4tWjivtkH5Boh5ukS",
  "key30": "3KCWkMMtpbLfPcVXsTy4sbxrUMfqb8svoPRjQ88W7mP1NdhiJVWEx1NL7Np1aRUicWqEmsrxN5xqn5TrbgxaadUb",
  "key31": "67mQi2ZxDVcrV2FdNHMprDLeVkZKZ1BsPChiRiCACGySnPk49xPJjZ6cv7AM42bQvHsR15yhvnQwp7R6UPNsg4Vu",
  "key32": "4jFgUuWtj7f8XSTaZdVJA51ceuRmPUwEcC6VFuCr5PW7VAiMT1zAaCeU1U2cWRpjKybKecaver9LjkKNXPkoZabG",
  "key33": "GGHdPwnBe5ojrBasV2Y5ckxbgJrjNMLCtTXV3n2QUqaEAJUkbk4SRrJeqgsKQvBDEdzzKHtAxwHajQebHNfSq1m",
  "key34": "2xiytrrn2xAkpQ8QmeDFwcoECPZkP3mU1aKkxDDJGY9YaTs3KcfM5b3R3fkGJoqFYGpUpXvzRZ2wJqwM7DnU3CAT",
  "key35": "3ZbdtToM3sdjhZEeWTc5Fi6UxRZdSCjjt2Aycs3C8BDnXszeLU1ToU7QwHkGdjCSzBoRjmmMc1EKDjAYhxV1wD5W",
  "key36": "23sxog59eLexyoGcYFuwRdcPjVFPWng8uiVrFCdFW6kbKkShZqetDEse779cMGa6iowHm5tPRgxrdherRxGrtMNJ"
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
