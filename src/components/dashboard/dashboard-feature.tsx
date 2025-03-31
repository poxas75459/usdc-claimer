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
    "3vkEMC15fA5QzGdH5tfCyZ4J9mhWP8HWrEY45cXvNgUFAF4E8KQdP9GXshRsiaEDKCcZhDB4UKG7HifuTB2CQX4T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4xw9rxZ5pPs5Y6tHSds3WdY4jRCJJrmr3XLTPuP3VVejviZFyurzTH67RaBTjrcBnkcJCP1z8SaUFPb14o6tUnkA",
  "key1": "5YsEUGj9XLhAM8sSrfEvtkKKs6uHxp9PnmXfM4634HXbB1hQoWDtKkaTBNtWpDuqLwgs756i8483t34ddCC9roZw",
  "key2": "WFfL8RGDFvAGPHGekYkYFTQmzdqE7gBP7C2FDEZ7wES8863g6TwizKnSG8Z9iF4t585uUGqgkFqheKJ2UoqBm3A",
  "key3": "4VRXc7GC5GHJ7tdwJ2jzxR7aAMBbPHsDJrfyNmpunNSTBpyNXjuiVADhTfoRBLfJpq9bCzkNxQbhrXcPU8vRAika",
  "key4": "5g5cRSrXKrrQxqLDE791bfJ2ngLJKbbVugrQSVnTdqtUuYQCJAYbZc6qryn2qE5mgYNNboe4DU7EJhrA2wpxqB3",
  "key5": "2GQsVmAYZTfC1eL95RDAEmoMkcZAZLqpB23BPDxiq5AYqMZYsTUMZtmcp4gNHc41TS2L938LA8PRZmn4QDPYSa9V",
  "key6": "4gaEEVi2HPZqkaBkyTRwwWASTAhcXDsYMoeckRWWJ7DZRXHE7i4JJLgdM9cDSQwnecUTrCaHc1RkfiiQ1GxvsanP",
  "key7": "mGcEUCMSVQnAKhR4BwC7FtbcF5ASaisgPa5m5xLbqWrZb3YJQAUqnSAtVPFJ3p4W2gUcPBJWMxVHX4yjwCjUpam",
  "key8": "5N4ywNHhpgFJvv1fN9EM6rdPtVPUhwZAsn8XqX5jJjwJvyySL9vn6JfS2gPULaZ9DCuNN4uqLTeum7wSKH2vfyYk",
  "key9": "3znzxYRNJcSsyoJVMf6s4t5P83AyxWyrzVMeZkgJCeFKc6HJhWFTLKSjCCwMc8RHrWu4Q2QiyskjJKpexwQj9c72",
  "key10": "4SpSBpQ74DbKfDN7XBFXALGMNrLkmPUDu2eXEzMqXmETEVYEQU7ZZCLxs2vrbWuRELXoACN8WEWYn4siwR32W2oH",
  "key11": "52RZ8jhJZzv7X98uQU9ZsHgC3iJ2Az7ZcsHv24MFAc9dKks77yBGPhDnPvP7nFYeY9joJnQ4JydLP8zV4xb2vMY5",
  "key12": "5MizE5MbCq47Ly3TxsH6yTnT8U2agyo4TGkkBrRKZdX3KGeWqjyu4d1ayy6R6aX4JDCM9srtuyfBJ8kpZWPJb8Xi",
  "key13": "5eBZSeC4M8YdC43UdH2rZD26mzZ1V4BvSmQSB2rqGWxEugvXP3FMq4zQunMi46nKm6GNCo55jT6RRh6wKtScahLJ",
  "key14": "4zsQZ4nR3ShFwKMQ2dt8UQ2TqLC3aWqtAgGVuz4MbScVCL3cL1RN2JAjUf5mepWaGbqc7tPJDGTWQnMiQAEfHVKG",
  "key15": "24sRAj7pbYhZfDyGnGX7wfuyYTSTnjSe4pvicEjNHAxmCxzGfnTk8eGs9FhArLpEpv2x96AmNsvDN7VkviJaU628",
  "key16": "484o9WoY8M3ytUZBmM89Ti9Em1wS4xXdB5jTZvxeYpF5XbXLvRKCWZ3wvg6TTJByBkrgtmY5qGnufpsQpXoHpp7x",
  "key17": "5Cs7LrJnvRu1ATu6VzCVAhSRuW56Vet7Qz1buZujrQCTEShQAHvRA7Ltjo4BhVBkzrZ8sRNJvSNqEF1gn1Q1N4Gd",
  "key18": "5bRYv4HWbVgbdXZLF4xJJi6qTdGo4LP7e8ZRK65jvk1x2cicSddUmNxLDcMDXfkoRQUGEmQMb9v4JVnSaD2uTJm3",
  "key19": "1NmeUSaqkGC72AfA4Rx8ZHkxEwZzJeA2LxN4XmVWr5dbkrZkTDHwnYVx6SZMLErtJ6DFtzJLsiWKzgd2zVCjjBx",
  "key20": "2FAbdZn8cCpH5uY3DhD1UtvVhFELhwKF2SvH5WqXtEhHuLvLTJjpup61es3RgPKnsasTYVcv67FC5ksE4Q2aMTCX",
  "key21": "XAo9BTyqDSHXR3VCPxNztrANsoVyd62Kt1jxfhRpmKiDjdHkeRkQ3cXPTUx4jVK5TtoNctWFbDGpPYhFvJqPBVP",
  "key22": "3EXKSvFPERULEvsHoz8bs7fcQu87NpbXYiifQaH9S8DMFQNwh8SHu6tYFGWeVvMJvVN2LMFpNyyf4TUtsjAMz6A4",
  "key23": "22RsvxCY1HmptdYTn7JwTnzg7woK3cmwzD5as1xVomw5VsUCuY2fHFsR6NPZpGiz1HWwRQwbybd1c9nmE8LLeEST",
  "key24": "32UX4jMeRSiBwq8tjxxCwCJ2gZ26dkYSiGutHxezb3atN1o1T9kHfubqHJL4jTRWFJNrmpk3qXyUKhkth9Wcjwrz",
  "key25": "5SjjVSqWkt5V1FtM1WZV9VPFKVD8AV19vjFr6VckEENxgQgLqUgvt5FWwHZHKt3LM2sR5jMuKkSTSx3cWq9py3Aa",
  "key26": "3SofGVdZ9PNRQt7acUK7WAMX5a2ZGA9h9RBNpQ43oDBfLHBhcQeGuqAQNN2sBJgaY9WNyRoj7c8kbk5psottN8Nk",
  "key27": "37o7Stm19Tsij31tqt16cYrFcGDjoe4djGnTtwgQPji35UzyH4YHNrYgZLE8aoA8jywQ5xLF4oZ7rZEQbHbV6M6n",
  "key28": "KEtJPHSKiiYxgy732wHGyCuaobjtvwbftLaqMZKMVkJ4LxqRTuMwjVYLMCuaZG1yyq5QSu64mr6mas5GC7qeeRV",
  "key29": "4BfQVqCBHdyepEgou7abw1adFmGndzSXZyfD5DJ2WGzYmZLqF7rVhdu8QreKHAoxRx5kaTqgWcngcVVzvGPjDUUy",
  "key30": "5zRnvkQpziCwz6BUVsmJgewYMC7cs9VhNRqDymycaqzGs3d2apy44Try1WVaoaCRdaUefJ7No1CPtVC3N1aZMceV",
  "key31": "2xwsaC2taVdb9FQFsQ9ByYhiw22Hx9eUijGT4uLNnZXaN5b6sX3qSQxWzR2c2seKqw3iJWUjkYtm2MjcMNsn2rMb",
  "key32": "3qBCgitmavpbiAu3CWXgavWH4CQCyxM7Vn1b41utwhU5ANAP1E3DPJdWnAe4C9N3hDyrDoUNnMpopfoYE264S6Nd",
  "key33": "2WR2a6Aw9MBZfu9i3ArfnX4Ffjsovnqnaa6RXUqzgSakRH3CtV85X9RdCLKrGB1AV8euuRW5JzY3UMThRGcckujH"
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
