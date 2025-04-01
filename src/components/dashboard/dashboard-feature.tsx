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
    "3SuNMw7pQJ6sNAosdYmQ1ijt3LC35K1wxekTvqVCDpsuocSmjRcXTxZ1qnddgL2ndTyoaJg4bTZuCKpjXSbZemL1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26jiRwdhbgeqBiQxXPjeuKSLrRdAwTUqGvXyrSgfbpzFds6fAYP394RADxr5Bx7QPw7Cah9eTVFtdbRGP15dHUoH",
  "key1": "4HXU9iCodhzqMX1awXAuS5ZdGnCARRRr5GFTx1uudMuadi6nHTaN7zDgYFGi9cNhjroVzcVf216GsqByDCHxYcyc",
  "key2": "5m3jtSe8ptXDLGHMtrtQEFEiXWsAeJDVo2DtQJgZ2NfZMEantjncDcU7ikZFghc5CQvkgh1VbbzotFiWUmUfjUaB",
  "key3": "3vfvnxpK9CqWgDUJ6nigy4xxS3BVH77hdL3dmk26mbu3edoYu3X7sLDocoUSVGTjgCjjhd3MYV3aXiJWynv1pHQF",
  "key4": "2evf8Uw3ZSKdLp7XXHwJftAS8zfNmVC7bBLC5FvryvbmSEP4vPhN6eR8DcuXuDTbYhKGzcC7wAutvqBZBCmAgsq6",
  "key5": "2fkAYve1KdD71CQzCJ2A6xk7xLp6FYdzcDodRHu2vg2JNjWZjhYbdxD9aSqHenLb9JqbkrEk4uy4x2st8JkjAXN9",
  "key6": "aRuFh5V63xHP5owcBiwJGK8LfVB7sCArhFF4XX7fzQAsjv6GW6e7mKvGLBNBjTbbYQBA5RYXGZjFKG8cfkvMw23",
  "key7": "21gHSC2sdEJTZcbtmxwM8yEdYRMhMr3Yp6DNgZ5A2RxM6NdJbopvWj49TqXi9TNJ4CT37xnPKpfXhLAY4TZiSPwj",
  "key8": "4xbz56RUwm5hsSoxX94Qiwy589vKGXjJ7XvpFYb1pUhtnF9z2S5m4uNagbKYn1gsGLRJK963HHfTSFvjbER5U3pq",
  "key9": "CdfMahqSCpmkmvWt5scuFiit1JSYEUBH9kkqDMFKpSZDcqBnnBontrZybMBgjfL7jdz4eRLWsfR8GKEEuFKjjkF",
  "key10": "5jB3VwoH63Y7raurokUjCuMuShRw4UwaZ7bmUMpUz625BiraPtZjLfRb64EZRfCDKCGx5qW8s37iHRVntUFCdL5Z",
  "key11": "3Le4EMoKarYn3DzAAZnKobG9LSddCM4onF1t2jFPMxvRgZjzNsx9s8P76Lrv9ET9qMor7obrU9T67KR75SByp7xb",
  "key12": "3SSV7Rs7YDQP8LP7WX7JjfwenzFjuJ5fqt9khcMCodfFRJZswkkhov2pp6VXBUMPbvNdqd6fRXvoQBcQuFJKUv4k",
  "key13": "3YX4cjt126gnRESksSxnpE6e4uSqbtmi5KbQEEsFfpbq2RShrCJKregpttSZYaxsmopknNKumL7eHsqx64YZdkXN",
  "key14": "3QR6XM1wEgmRBCYszLXUwzsJ9UMWr1aAMMwFvfJ5XqVQxbmnh6bR12gunhyDtixzETJu7f48WpEYRaoMw5BMyM3u",
  "key15": "36FPcsdfQayrZW3wSHxfZQgS1wvHfYoqDgGgoygtJ9wB7X6CH7oUj5cD7xsmZU8myewFeBytRinKGWsqnTkwH4WF",
  "key16": "56uPzw91qwz1mTxCEdbaU6PTLDZvvBDk4Jdce21T6mXbwFiXE2he6E36KG9jUUUDcRUY1xPa8Pi2DU8R5ZhzaaQG",
  "key17": "3zhrLzvg493rpMHZQJzawmpVTcp6qLzTNjPFBUHKaJyMXvEqEZvqu7vgRErF4GKp9Z7GCfHzdNnAYtYPfrZMEEbH",
  "key18": "4DrYqEzAfqT2LFv7D8yTaKwWE6N3r1oASqcPDNgmYkGxh5dpyMWKJggntCCdiVMXMokLiMuU7VC6nbRuE8fnvoAD",
  "key19": "45XryVT83Gf4RtbUNybbTtENFn7cFoYFejy41eBPVd4b4vksvWc9Egmm9wGUZqYrwCvDtuJsN3GQyyT5qYP8Esmk",
  "key20": "3WKyLJ1nzPD5zRG6yiZkhT7r1XdLcWbgDPFAU5ZBddW8AtVVQffKwjRuh32A5QNsEVGJteYPXJjaoR3fYwo7JzJ2",
  "key21": "27o92rmPyUZero9rwpqjqfvbFr2emhaS3zBmMuMwL4k4neThwVcJXGfTgPNDeESMPLJqTU2JgSsE1NaCeg5iMcEM",
  "key22": "2CC1p6RRfKgZFG9aycNN9AwDioGtGNtSuhXbd8pQ2NDtYW7For2y5GFqLKrrX1eVawyxnu3vWsokkdo7FWquJig2",
  "key23": "4BiYRHUw9fsy3K9gtNqyxi3atBqCKiNJ2ayXWdYygAcpsidhKnUuoowHH8J3WFCpYD34jVAv3h92N2f6v2qnswDU",
  "key24": "3DmP1KdLze5WYcuYy6VTBGVHU9cBpDNWcyw8RK1FFGBHrNaUAKwTUr94QVMBwmp4ZeSZPV9K6dTJxsQ7B3uniQar",
  "key25": "5p3KAXNHw4q9cCWf7uEZ6LGasEYzuoCHsR3xjQLTukM2SMRo5347GZCECmQrVVLbnzctMMN6oJPgSHgi8Bvd9VRN",
  "key26": "nPHX1yfZy63JtaoboYPbQxJZMkX4EhLELVfAqo9eVqVfxg9sCTfuGRF6ecJavmi5VX2Zo5AivaJ2okWCJxA3JGL",
  "key27": "4BXBtwBk3YJ4bDzJrRpjLzFNU87dpC3SFWfJyt2REek8xco315EHvuDciEx9tgCrtcpzf883fe6Htqq7722vh9sQ",
  "key28": "YFM16sprJAQSmUMz5TUtavu25c7Th2JzEbTRw6SHJCoWDaNMQPFxEdW1DT5od1tVkZDLbAS9dVZ7Zsu2jQCgvKj",
  "key29": "2DY9BQ3rPghzgMtU3EF91QeEbMZYu2xNwctPDDPzwR9x7VsE5tBjwo4tht66dYeo9cDtwBwdzruBXqQrJfLff7Cs",
  "key30": "4h7zHTke9Quz4UNTshYda8uPhG35efeG7eSotmG1LTiukD4eLi8tSAzMW65GEU4m8G66UFtDHDY3go3N8Y5X72A2",
  "key31": "2Jm3FjfRZEwdtrNLRhptXtAkQMAW9TYA4r7fx9Uf81RFPg766TPYfHfZG9T3UbqsyToQRzdvWoZgLT5fQkPTghZF"
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
