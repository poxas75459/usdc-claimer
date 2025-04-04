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
    "25cZnFKRXJBW7ASXWMbua59BLtKfx3yEjSKRgms9xDN78hKKvgN3NxRarYSB8MnT3vp3eNyMo3PjpMXcaaPW9QKL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54nX4D2ANoDtgL6KiafHXEeBLFzDzd1sTf6hq8nKce5jNC21vVpvye9zchTHku8tXMyGX4f7CuDCzPGPKCgWd4m5",
  "key1": "5DMUQeeDp87B5kBhaQXta6PAmV6V4tgdh7yPg2rJEoe9QipcNKDWajbtKKtRxa3F9RxXozqoc2QrrxdTAdL7WEh6",
  "key2": "2seFFN66nr23uSLf4tMSsQAzc6g9RMvF8D9DhHrYK462uCLJQxFUozKTa8VaoC2deAp7EjKY2zBuY7k9qyLav7y7",
  "key3": "4VbcaePLAryM6DPMcNCjnhgzBEarq8z5vefSDcVGPf16W4K94mfDStPvvPSUtoF3YYKKps5S7xGpxJWLRVdNnuuT",
  "key4": "26D1VzuS1tvicbmv3VG1JLuyrMimxCWaFKZimYCuUbtG5rukyU7yi4JJTK9wsF4p1Bt3wUa4T4ncDuF6Y1RqDVzd",
  "key5": "4xdBzkRdJuwCqZu9NZFdJWJKQtKXu5uSFg9pswYb1jbi1bzwCLXXneYinwfDtNdUy7oBHcBUzPYV4LZ39z5wBpWB",
  "key6": "3wr65t7VK7ZCKSLDZd5rx9kuE1gKnTVYLD4z24RzAa3TJxKyim3fDvQbd98H77VERtApqCVHWdAoVs9RCw75nnD4",
  "key7": "4Shu6kj1iddwJR1BNApXz57RmiihBzLsPJCpLyUqCrzmr5rjwRQ6hamNhXnEnPfZF6MPWYTxUwEwSyyab4ZaUGHH",
  "key8": "61xqANr8ESgunD1p5414ScGdmxt9g29yfuG14paM4EGGMw94gMaGnmvwKHepTWnBhQ9TX9qYVABfd2DE2z1euKmM",
  "key9": "3bcD6Xxu9UktZT1xz8xCpu3q6dJ2iS214yv2721pEDfzyA1TrrkV2i6NdfPxixgz9TGhCNRs4QP2r1M5LnQpdWMy",
  "key10": "4av65E81coQR7PskMrkZHrd5AKJWJB3xHCgNemphaC2WePGXw9JGEygZofkBPwTzarvqwCZbcGVCR3AsrBgZ8qDi",
  "key11": "2LxbpyK7y3eZoSLK42HdGwpERzfrStW4UDE4mi8ejrtKyLhx9AptX54XdeRGdZFSafYCSj3UdEH3Qzsb5pmPQc29",
  "key12": "2ikQjpR9PPAWcd6LwFgJsFj1DyfkmwtstfdSq1hehwx1WQXwPyU8XH4icEnZKWEJUWUCT8byuYBTN2JMEBYHBGMr",
  "key13": "nD3LFjSy9Q4o8C1khEWD2RfaDS6gufZR5Jm3vuA3o76qYKY39dAf76sDpWqED5xF7WcgiGt2ZqaiJuFjkKiAyDs",
  "key14": "T98Y8bZwEpidjLuVnEwYCm3cfiaVXVbd6eyc75WYxvxqSrf33QKcSz6YCUCtvjwF2jXtKMWoBxZZa56r5PcX2tM",
  "key15": "37tbAfsj3VHBmNRMygN8rV8YP763PM35wCtLW1dXBC7F6jHb7Bnsnrsbfku8FFVRFeQnSKNrjStSccgDpqLYwXDb",
  "key16": "5cS2SHc8YXrrEvhQWENoNvUNX49FAfx7oPAafM3xdw64TfmyGs7ZQN5N6Kv7nyUnynt51cjR1rncwfRYBkExdCFR",
  "key17": "2NjwRKXozj31TG47fPVcEHbV3i4XXXCowJLhjcGBTqx4acnc2JgWSYn5JEkS8NP5xwaivPZox5Zk4ecrrV6PcEfL",
  "key18": "5P7wGoMmHCKN8hrk5qwrBGHhgBiYhPHhmaTSJFa9DqjGvTGTX1dMhBaM4DiwhiWbiTfhPu9u7tkyZQm5j1SG7wkt",
  "key19": "2tT95ByRPCdEPfe11DZKBLgYfjL5sP4aaeaEYYnXAMWVv9v9dmD9sBvbgffZMi6nENBt5x1TjPHp8Kp8t4uEwiXi",
  "key20": "54bM6Vzyfkn2uvfiyBcjToQSiuZxfBgx1qqKs46uM3NZcYhZXZ9xFSxNXMh3oDZsXCUK7NzDCezfbS6KVhLpfVyC",
  "key21": "5xu3k5N9qmgCRXej9CRRQdQXcNo8YZKSnQhjSrEUq1WDafNbuUdHsjJV5AbrJwCBePevwazUYECTqWcB1JxS4rCg",
  "key22": "3XSwthDu1DLD41wjqu5vC32cMx3U5jChuyhCgd27KW6eqbPmsuSPy3gGJeKQqFpCBgK88HhLkjcHeZPFDJChfwBg",
  "key23": "3c62Uq9F8SKskbE1gFQLXGCHQ81kQsDD4yTj8WGEHe1UxApgyxJpTRFJmK4ryYpLvAy29z2eY4kqecruFpRxmfDb",
  "key24": "4WyXaQWmhzzGukztroPvjwfCkzQan6wQgyM9bzo5QZVsC6hyXNQ38GcPthcPJq2xnLAsJk4uwT7GqHxhKvYPJBoP",
  "key25": "5rnGdzJHimzMBgLVvN4kqNBJ6wkEjz9JgyD6FwGj4qhphtA1Ztgom5UVNgA1WV5Uya93vHCgt4sfjZ2CyrV2HChZ",
  "key26": "5VvJnDWXZgqdQ4JQEJTB7odSUsJx9Cr1ikkRVWVp1eXC8JTuLHbGn1EvnobPz7axiLreaCdYhMLHTQ9vPhKgCi5u",
  "key27": "tW3LjZprmQgt4QaMXruWbVjAoC13W7TJVG8reYtkKPiHXughh91h8fEVunWsnR5B35HiejYNuXHUXPRpUiquTES",
  "key28": "2NCaXU9Y38zCp8QR5ZvUxTAroGwhwJ81U4JxsyFAeTeZdKQmAvvSxeqDe5vuFfFW4c3GvttahGTvq6yKCPejN1uP",
  "key29": "ZUMgMdCTeZ5b3VHawVtzTDoJCJUmmPsp9qAeqGZNcrSv85xW55uL2EV4i2xbnP6CJVeYJgWhuD1zsobxhqWeV23",
  "key30": "5ZdHZQGiVfpfeejN4Q7AiPVVGCmh6tNiU42XJmcZF4oVZswRuzB9RtUddDiNYYmoziH7Uws3XhNEJTtsscpHen8n",
  "key31": "2XD2cYLFYNwRpGPbPz5SosBMYuittj9yJ88CRrk9wHUD4qucQ7jsqtqqgu7XeMH7n1aZicKa7SeQbJ9LigGdEmS3",
  "key32": "zc5x16g4pmVdv8ak1V1VxC3cdvQERRKct9TmqWaKuCrCs7yjaFk7TTNvtwi8zknVSRgAVmcmnsNUo26R4XfjDBc",
  "key33": "3NQVxfWerXLRtXdr18YyG777ad2ETETTj3jM9kDTgiSrYvSdjGLYruEHHV7NamtshDkDKYNHvJ6eXyMDMNFE2bCC",
  "key34": "2RLNYacKv14Xf3M2GjotVtY9t3wyTr4WZ82AabKq5ncMHfu89udjE28pgnka92rXeZHpp2Xu3yDBLDwVBYckfQYv"
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
