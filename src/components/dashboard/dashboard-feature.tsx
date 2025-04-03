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
    "5vMiN27MxcSNGXoj2YQPwV8mmhYS6iKUMtyhzja8BpY7BpDBrxiJxoxdkoPmm1zb1wqN4PzBw5yGCQNziA7E9e3j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2w6n98aLLmHSJPekk3vfKaHMEXeExkhMMRuz6nUegAgCvxzgFEJ2HY1Pr27kDh8HWECamoyGbM58HRp1PowAetqF",
  "key1": "31S9EuugLPYdx7uCiVMYWkHEoGJFx88A8YTABicn4vTzZGzWF5D4YczMVqiM7CeaJafB6P4tgseUb8ZRPzLf3qt6",
  "key2": "3fKLcMFhtbEpLC9r8bS2mtCcSKx1Quo6MGa5q3cnCJDU3PkEHm2TThkApa1Q2GGy5G3k5rvFAvibjvxwaG92ZW7i",
  "key3": "a8vrghFpj5hudfrXUzG9De8oRSrxD7unV5NwdRitHAj7AgLRKXvWozPYLaRWQK9EFxfrfT4h3SrYS7PiijqCRpg",
  "key4": "4Eds3ddKcrBsXf5tZ1LRR1smk4mgogy75srnAECv7b3hj1TRZfMxhWjKjrEx7nYcWfs1gRz6Q8zhXowxKGo1eV9X",
  "key5": "49bz3hvwwgZDzJ7Nw4e7wkQ5AGq8NPd4YKSTmYWSrjeGvfHymZWTeqtA9BJ5VCJEDp1vzB75ukDmbtxvyQ6z8g9j",
  "key6": "4BpDr4Pgey6iRqmfxqfjuy2SWFa8E7RtjqyfSMJJy7JRPNQ888nGQN4C2C778ALPPrCH5T3u2FcZQmptFWiHWCvk",
  "key7": "4MkszQcYyGUAsV1d8NNN1LZXzKwWx6ad8R9KYPAeJ2zWMvpsKUk7q5nMKYLRu7zsLNNwnFq9EuqHv9hKEgzenCb8",
  "key8": "2vCmaKjpuoCAfHPGLGcaKbSptAUPT3i1YRWFhVcA2c61Wudrk7oM2kVsrxRtER76QDRB28q1jGm3zuPXw7zC9HvM",
  "key9": "3HeVr8nGZzn5sMhE2z7dDQrv5LaFtefaWGqQxm9dmUJ7NhL6FoGvx6Q5hd5it9Rt48Lb7VKvbzMngBsoAisGw3EC",
  "key10": "2xP9UCB1y9Gmj9gehkEcJnyA5DoAkHsA5nhu13WMqfvs13teruDY1aaFyn2SLVVSg45HCDtGnAJ4ZuAvLfpauPgM",
  "key11": "5awEodAuRnk9zgViNZtHQoWKrCAcXVDczpkHHpU6bHQiMi4RnwbP96DraGY4L59LygVt2EwByTuGkHn4YFwppB6P",
  "key12": "3d8q7JkmioQpFo7ipB9Kow5fVrBPiD6UnE3rotBC33CnLTNtwjqDdpVxW4T8GZvQ5SsR6bizS4ymRWpiFG9Y8tXn",
  "key13": "4Y7QktiZsZFmoxvbK6H9BURgBfTUEzZK97qZEfT4UcdLEvqq7TPt6XwWrur2ExS8B36wBJdtuwJxq6qQ4MGDf4jc",
  "key14": "3uSZYeBcCa4dAzh2qX4NGgDDFv8sypZFCXsEeaT2oYoTAoArS2iZD6k5LgsPcpWJ2bPMj5g8ZXis8eXxpDe2NVhm",
  "key15": "2HPjtkJ7zmALNEQFQEthXNMkuwCoZhs1ixejNGZCciY8jeqimgyW3AePX3YQr7Qi98njprRD763jqxR56PXudB56",
  "key16": "2AU1RobjgznQDD629BPgrsL99whvwcn7kEWkwnJu8sFkvAVpPT65Xqo93ZjG5dQnkjBXpa7ZtA6XXYdhA6SVEren",
  "key17": "2CKdaZncKWyoXUer95Y2zsn1uG97dyKe3EP7yt3oeHSBmjWMfotc9sWz8UyQwctQusEcg8DiPB5EkxRWNwPx6evo",
  "key18": "5b5AMLiMbmqYpBy8v5Du6Cj2zn6LE1Em459jcCvSBEyB4DqSwJsxss9EXWcLAj8YzBmuhJBXRWrHSJ8g8CYFyCzk",
  "key19": "3V3UKP9SDC2zknK4x6GBBF3ouxiuBbxmGJKHD28stAPfV6Snyzwxs4CnvuT9Xm41vGus3KqRSiVqYAJmebWD1NpP",
  "key20": "1rbevrzpv6e3tV6DDD6CdQyAfmaicE5wgZpLJEkUr8yGjcn6i5z8JVsfPcA2LAgpWHasDWDZjKtAc251GLkCLqu",
  "key21": "3vM2LzQSa4cHU7roeTpDzoimNU2zKLVHhbDUidzqW1ECBFyxu7DjgtkQ48zZheHr3JxuQ8m2hVMer7JSTnXoBWYn",
  "key22": "5Q8QBtnLFTrfFKjSestjQfJceQX2Zwk1oMLXPShw73vYRXxo5vVhg23Wr92x97R9q2ksKBevZH2hRsEHtRTopefK",
  "key23": "4nrGkCPunXGQN3gSUDFf5sGowQkathLNPi9t25kDJjrvRQNpePxYpFSYFUWWGsomPBThxWDoJWYjmJTHatWRwSnP",
  "key24": "4hvNMButk434LMgyAbGnjdyPrDcz6wuN7RQVSBwzhPcXnWzy9yS2SAAfhRFDoYDFJgqxPW7K7gLJYxaJZhjd4F4v",
  "key25": "2ALZaGrygo6ZLKVu95i5nsdojMqs9r6G7UWyhK8tuyheJS9ydTq45pUua75fkfiPLoNTRCLwq5tDoxYCFn4rMTTM",
  "key26": "2Jz23vBQNfwFeLYP7fLCX5KwYZ9srkAk6vZ4JgCBJbCkp6xjsyfk6wP1E8KAAgHaCV8aHmPddcnZFkBXxSXAH6kV",
  "key27": "3bKgDQXXFeFrT8DBkKBBfVdWFKnwnMe7J8GZR3YwLiuSNyCcTkzKNn1m9n9CYebFQrkc48UtruBRegFsSrV637Ev",
  "key28": "Ht8Lf8XeKGgTbfH4gkKUZLAAqbH9okQPPyVvkdXFCoTr3cJoP6hNkT9B3NQ8DuSTKL4aKeatgBZ9wFmABfHdfpt"
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
