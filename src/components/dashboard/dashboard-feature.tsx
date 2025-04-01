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
    "2k7aHv9Ld2RvCWYPN91yDY5wQ5VkL54FMFz1AqvfdTwanjkn1qctHqijr5xgyGNFgJsox8NWobVcXYg9Xn2mvQTW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rZbRiz7vNyibeJNy3h1pJ8qDrQMXTt9chPpsCYLXSWFd1P65XSdKhaUX2DRKLVGcupnuqJDrvoS5mCxLokYYPW9",
  "key1": "3Q6Xn6XgkV7hbqacez4ZzpN3dp5dzENUYQ8XVeemPXsL3FDQnUoeLFvqXjm94EDqBzjdYsbyiV1YdvLpHwXVcgvc",
  "key2": "4dnHAvwEUrASAF3y9QSQtkUDT7uBbJwFZAfW5hdBE2n4ov3kT3PqsTTmH9qwZYHX9k26MxnF3ycdFULhzWAYsUyH",
  "key3": "5tbUV4E1mND7khtoq8V9YRxHTtyy4w4kjefoFqRW6mJHxhdaHyojtzvgFajQXQ1ToCx6i9sScMeBxdyHQUDHNv1v",
  "key4": "5ALzVL2c5CP6qnyYZUfz1rGVusejKSgUFi1SS8LgFiruu1gpR5v5hbEmTCTkQRMvHZbE1GjhV1BRpdPWwoMWhj2o",
  "key5": "36sNVUJALM5LMofrM5N8NC56ARY7qJuASPE72UD5ZX4ZUX2ZLQb4mPKpPySBKPoH7KuYDBCQoscnHBMxaSforq7g",
  "key6": "4jyYgJU54Hb1cwZHRTcrGB54ig4t9HYgzBHyea3m4qzMHNyScEeGsBGqdTiXpcEwbWEquQQA2fQPSfBKrmdcxggG",
  "key7": "3UYhDaz5izfifoUqqVjdTVZ5Jrb6p9j5eTcHLi128Ssrec3CmgfNMyeBZLMAovYVrJwct5H3gYNn58sGGDum6CZk",
  "key8": "3TfHHDpiTk9sCft1xnbViHFRU72i9tpNkKGAPGzs6kHjXSwpmQcaG268JbPwn8Sq1YAjVXX1wiAPgnYKxbSkKv6N",
  "key9": "5PSxtZBY3gAno9uGnT7rVUneENkMBxvU15BQfYY2DSvDHz66BiMvPCgKGq7VLg3MLNjunqvjTtHfMagT9TukH7aw",
  "key10": "jYubbv8G184vEcy1uMK2NZNyjb9K4kEr53RZYGJGxeGjGBqw5BELEoMwPco4N3thkLVdu3jfo1nQQTNndboMqEh",
  "key11": "5UxcR82zhFJWpShJDM1nL1YoDQw1xGvFbqZmc7avHj83vqNyXJJMqapYuo7ab9ByMCe8STy82uXAU22RZ6uzYuvg",
  "key12": "9vGJkf3ZzBagKj2Tgymv37SKSco7JZPahY74SrcxdJz7JjhKm6aMLYciTDa2m5SetaHGA7Hqm5YpjJobLfkbiap",
  "key13": "347V7yGHyxa1fEvMVm4Fg4rshrBvqfYDzFgu2wQN7SfWjSAzFGvEkWvCn8Q3TgvmJtx87BYsYu1rDcXQGnPaPfAj",
  "key14": "3ruUhSropHmLDRrFEuv5q4P3GmsLm3zH7gamgz3Y5YoDBfNbxibi4up4iBaQsCcduMuDiPRh893xfQSAjCFHJRW1",
  "key15": "24BtYotVJ9N9kLMHmSFVDVKNwQrwKtYphBHjGM6miyxCApajMzpNtFrBGgppSqmqFmcD5qvCL7VfyVeVd2APLgTE",
  "key16": "4krVfMi1pwEJM6mrj7YZSFeEDycjg6j1YMPyoLdgsCXFfPrYx2dref3Mbv4WJmdvhrhanpHa49uBJ6a74XDQfWuU",
  "key17": "3RdJTSJD3otMVgridmrqkpcMyfLYdVHjc5LDNanL4J2XFqVsih3T6y59XcLwpL2LAH3PFg2kn3Nd6LfgX6BmcvXK",
  "key18": "2YMs8azWjopD6CWauNWuRrgZWjoMUBQyCUQVCxejJjaMkSL9BWVocFafiDFeiErsDCyYkysUkQM4SET1hcaRJjCh",
  "key19": "4qLbNvHcYzNronEiCrfVFidmZ5xYFreAxXgLdMq5J2WmkKD9MYHLf1xTAuGMAAYfUUv8Ns1LEmNvRWkMxLcpQp6y",
  "key20": "2jgxF6jbw6PhbmMEZGUpeo13KepcFnaNCh25kDEG5qtkAM467REEabzEmdihm9mdZ7ZZwqrS1Li6e74MSsidtxu2",
  "key21": "oaTKBHpEJ2E669f1iF4YQWUYFBZJXxcXvmoQbHhTgsCx1gWWegvhLv6euPJki6e1nqTaG7KM4DEGE2uVZS6aVAL",
  "key22": "3pZkJ6yaHzVt7QJRMGgwimbJgYqus2bRu7oMKX1sSW5jfGJvUSGpRBKJhTfhYsPz9Ea2aVTXySEX2HG7NryhbrvG",
  "key23": "4rwS24N4zzkNUaSJ4KMnnS26EYtt5w77HThcchv3TeV2pMfFAPC6uzka2gJy2JgMRmdAZzAw3gKBR8o1yWhMqmcV",
  "key24": "p1NguyzpFCuCDHzq5EyuMmAfatsx7HHnSRfkWSQC1bSpYu81jQpC7FbSjWDQi7FGJZcJcxhiip4yZuBcNa4jik7",
  "key25": "3VFGuWEwDNxg4ktzXgBRBiHS84BSaWUAgDSWpBdtNohWQdcrDQwaeZ4btd6b3swi4Pa59Z8JVo6Lj2wFH4k4NUmw"
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
