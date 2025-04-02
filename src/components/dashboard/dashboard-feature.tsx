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
    "5ceevcesiP7JEBbQKaeciD4eyDxdyFrA6bfK1aPJHjBAJMArQVUWeFp3NXU5Fyvz7ZEUySx1RwskeBZyJgHRV4gt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "439KDJiGnqdJfCSLD8tvuQ3ZoKXFFTMCs45Day3QsvsGoAnMFXrPzHF8EzdEwES2bS3zqHP1i9TBSmpBhbf3B76B",
  "key1": "638S1DSuKfpDprUGWUCKDpUP7HfQfpKUFH4zvV9KF22mEbNtHx9hJsqH6ku2tNkbRA3gpiqMhcx8KDJd6oXw4WY7",
  "key2": "4bJ2ueaBKc2T1suevqZcBZ93R9vw9RSypXqb1BdZaxWqeNbt9AChGvSqfKax84B4R3pRH4Y8NKpx2Hj6M1kQ6urX",
  "key3": "5ooG61XFAPVDt8LW8S5NnoAszQN4XWqoSfVY2Fv81C8askAhafgef41ykBsC8VWaFgS3FgfaQS4CRcJ2VyAiBhqd",
  "key4": "4wY4MBg5iYLXfKeX6hgpwEZEGaB7xSv91mrUk2smpUMtQetyVvZ6fMGrhNDDUG4RdP4zsnyzsgvWe6oz9XvVbeZW",
  "key5": "4rGzbsUs2mTaKbv2Lo5Go9AQjiqewaA7hBgpbof8ifmr67pWQUQYP1P8yeRWGitBAqWzozTLUR6HmJCpxq9TGrTR",
  "key6": "4vBTmcVUJ5noFkLvMX2ZunRER2q36YL3Gev21TDBY67rSxrnNuAZdzdWQ7ESPvEgFM8aXjfqsMmUCUTW1ktqn8Ai",
  "key7": "3E7xUojgvED5iCiRzZePTwiDjtcVqUBdPuf8GuQwieiRMkZNdprvQaQodwF4dVzXVzeggdGPiBEsChbKmokoxyrU",
  "key8": "2FpRBHtqbMsgodFc5CRBobTHP4pwURaHvhY4nZGh2fxVVH8nPuy4jdpFNPQjHug1shpYm3ZFFqgvE9K3ojd89E5i",
  "key9": "2DeghsUMQWyjvBttpWhBFECBXy6eEmgDVUhVdeF75exwCr4TFbUuvNM5tnKCntkrg2ce8KQQM5sESwYoYLiFYhes",
  "key10": "2Qmwdzy5J5oWNRx7nisPStdprQNSPRrR2bgi4tDyvcnPna76GJPYbpSbyPcn7mgjSnc4dpcppkXYXv1krkf6q1ES",
  "key11": "q7GZfLvnitgzFM6TgSgdWEVMHndKWswKupFiG8wbwVk6EBQHMwcbzvVdEif2WXEKATPQm7J5RvTtG5Sp9s1SU6n",
  "key12": "4j7WwX36e3rRfSAMB3jAoBpeor5QRwLxreBrMf5L6bE6p8q22dRppx3fCaEee1c6rKybyLKTjRpDgyTzoPCQytWW",
  "key13": "3BYkGjKEZRamiFb9ZGkopnp7EEucc5oQrVSj3hMeAMH2ZRof5LGCmjoPB2ogM3pejytQ7V4wo3ZaMEG7i9mqGbuG",
  "key14": "2Re6hPwYEJaVJgLwJfSMUQ7LNCDqSBNrpFQD3LX89BeP6aePTcxGKx4yU6MCApqaBsWVq18d5qrZoJ1xqJhmXax",
  "key15": "381vyYmjDtBJbrhvcmgqcRh9ggTL3Q842tFfCMXYotCpLews82kQ4FCEwDMLd2ZffG73hzjxtWLEDemoNbGkkTTu",
  "key16": "3kiSzR7ci4QtTkkt1oEnNTNqmodPCXx9umVqEDmcHZ1qqRvorY4ZyAdBo6jLTbc1pNesqdePz4hFCnvZ8FREtY7P",
  "key17": "59UYP2XKyroFxMVwi1weQe4WJ6cFzhaCjQG4u1Ub6EVic911RAXVH8n9Td2gaz9F4VrLTvazC1U24RCvxaxKeLgW",
  "key18": "2Bw5dMs1VJ23BQrNpDebu6W6RW7BWdjbuFMsquXhrVuS2UkadC4eN6Uv79faRyDBA19ruNP86p51wmPwoLwozKQw",
  "key19": "2wyZXMThCdEkGrSchPVWWgJqG84L13xvLixaPfwS72SNTzsdGUdyFC8gha94kgBWFjfQV8kgXuvYgCQBYPJhXgtu",
  "key20": "2YCFxFFroL6LYw6ZdyGe7MjEW8WSdJw9WMfrT78FdarzeCVQsEnmF26r4Awqxyuxy6qYzdKRZfzK625QL9CGLCQ5",
  "key21": "3cdutViPgy6T88sS1noevK4Asbtva6a6eazQo5oPPpp1mstuJ2aYnuAFfY7CmmSt15Gr9oahKzU4WSPnxUGESXsE",
  "key22": "2mr9Ze6Z1EBLjcudgnLihQdD2XKQHhF5GH21GTcJE4GGMtQbkWe8GVeZnJZfJTqQezGcVjyotaUz4QTvn3z67JRx",
  "key23": "3cw4hA4LDeBpoTeR8vdojKqLPVARmMBjk64aji9tdZ19wwVPRtBiSFCuY5vyuvEnNBgEruh81HEZ4crH3i3ynzCm",
  "key24": "2CuFvchpbQyw6KwK5h1rfWsAM4L6GVkJf3oD3nnYDkUMSMZP8G31NMokzTxpepLw1kecsUfdTReLmmiZnVrspDRy",
  "key25": "5RbsJQewHhB93inKZygRuk8YSjQZi2SU7AqzZFRTHxszxuCtguiB4oFAVgegD2yF8tEcyivUrruZdJcy1LSKqZ5r",
  "key26": "5p27V7zJN3QysnLizDJiYHA3okYkbRQxtV7CBtAFbjgcGPiGp1fdpoMt1Syfzn4w8tbjVoVVWgYN8K3WbuFYYFM4"
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
