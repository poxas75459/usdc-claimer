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
    "4f4pZWMy3fxsfUhS4Cwm1HbkdAw2n1WA2EsNbP8E8bUD4RCLokqt6QnmwNW5Phdbv9yXwdmhnLzYrVmHQQJL8gLN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r8SCFsnZh1wpmtXJtjgwR1xkyb26FCVQ2VPLnMy5Rea15ZWjf1PxZKzs8N1CDPeuEQudqJScpPKHxEuMNWnhQTd",
  "key1": "3EzxRy2VWKLhKCY61KwSH3uspRaGgLhd4T69GjDqHV28WYY8erkWPXAzt1bawATNT9qYN7KeU8ysarMPzRVUxUGd",
  "key2": "5mDVNav8aFwuwgdVkjPZQDu2JnsCL5dDg4KzxLwKeVdX4a192p5P1b4cqy2wabC2yp1qY54vWaupSP7VbkspmW4N",
  "key3": "28AU4EwTYEksixj6UJsppNjRGBrdYP438XKRP2SHrcv68kdE6TAUFQXANyF3tLGxTGGfAybDFzdnwFR25PFyt1tR",
  "key4": "2tUsE3reTiibayL3JN4i6oNqtuJcMCzZK8dmijJUToYaw85tqpTzZEg45wkohh7QU3H2kSSzBFGXRMbAeVNxQnqZ",
  "key5": "3EJcGTvZAGSggamSivvz45pwBC8BdDHdN772ZSLgQasDLJj8f7Yhwpvyd1fDSdXYLFmbcztfdHuitFJuJHbr6HkM",
  "key6": "4YZXws3ANNpbHqDzeWGZu8hjXVr18j4ruFNkX5frr2ah3VEnTeVCkaNFRY27MvJwyEtcnfCP2QCyBrFRyVNPCDnZ",
  "key7": "35X2rV4Q33VtoT9moytZ845NJptmKqFs8ArB4FmXdN69BZWYp9dTrTyfAVBbn4JhfNjVUNCqdt4zfr9dbdfKHoSk",
  "key8": "31MhZUNmYLSfqbedJ8vBy4EQ8KyExDtxvXtME4NJLpRPMvRGyWyY4YMsdFJCJktvW9VjbQWD63Je9zLrDm2hucu7",
  "key9": "5He5NRFJqmYvomLxx4FyXDvF2BotM2SSDNxqd9pwcYyj2GmQAb4ZmzNXU5c66cKxqkBJMPgHpwCnGFHiyUqY1zD1",
  "key10": "2BtJ6Aseqv3HQrHcW5P4mB1XdSpVRca8t7RMHksgzgbtvYSgHD4apZWDh8K28qEnn3e3TdsnKvV6jXZuZB4Nb2vr",
  "key11": "qfviy8oF4wyJrgfTU9a2HpPUFNSVb2Y2oua4dNL89aVaCPU1tykn7CmcktgkQWnXLm5fTPZKPRU6sjnezUQPKLi",
  "key12": "5f5JCuC8cFbhZsNC3zgeLGPjYFuGm8At8D4dysXYnM3EHKy1Q2nQgyaEenu3ASYk5UMZbrVD1DseroGUemFgDLJs",
  "key13": "5udVCUxWyrJWVzjPKMhPmshQMnzaNNrYJzFgGYrDszVYExD95PDLH38Gmejn7xFTAcNZdtj6mPfWG2p8UffVqFcd",
  "key14": "4tMgqpW7tPnz5zpbSmSGYqfpnaAeEokdqqMKMGGmaxhQs7gWoyzCKgc7GyhciDs7HFaNWY1LjbXCKpov6SEHFZTr",
  "key15": "ktLca57AvTjVRAP9qokJtZgqM5KxD91n5jxxMEbsjUuxB3P9kuyw43Qbs7xmRb8RL8hMEasF9R8WYJKv8qS7wF4",
  "key16": "3TkUsTMSSxw8TQEA41hbQsadhc8gEHGexatdw6B26auHaD76ryorjfj2AmncU5So6kxtwPeiNvhDi2KyBRrp1VRU",
  "key17": "HHkWpnE4SUfrAvDVKNWRuyPECVm9TzKU29SEGDi8UetHev3PnaurqWPeYe9ubTeyjDBj2TXpcbacYn8ZJqZ4H8n",
  "key18": "b9btiEKGRuaP4jFqbi7WqV6AWX2UdZZquJkdccYPFhb4B4KhAzv8T9UXiehRfobNrZ4EdS9MD2xCgdHdPHFGn7h",
  "key19": "5BviqrYsPiGqFqPZrwj73Z6xJgL1LjQuUAoVK5ZWu1T7ke24WkN3u8BbweR17dDv5i6MLXGkVwLa1ethCjoGGhLk",
  "key20": "45gMn3N2wTWsPm4h5sDhjQ8T8RQNC7AfhBVp9fGGjCL1g43yy1ZJ4QuHC7P4BYJRuy6zKTHxiyRzzvGgftuhuGq3",
  "key21": "289R9fkpTyzKdFDBhrYPHTgK6n3YX66KE12YLQeD7FFi6EP5fdVVGLoSWkfkEHLaLv4ppfEDc7RR1xgvS3UNqRqB",
  "key22": "3FXKLH6HVDWBbN3itvGQxLLv6CjbELJTFE3dHF7fPPaqTrS5FKSsKgp5V4kTUUxRn3Wzgmhc89MV8LymTMuFjNM6",
  "key23": "4goHcX5GFrKzRqrZ5C84LK6BbqRKi1yFDMkUxKZbRKPjLJpY8jLKDMx9Z5ia26byuSBLQoEveqHGUvSQkNBVceBk",
  "key24": "2TLadK8RdDc7iAaSgA3yrxdwZajCh74PNJf5NnnWvmT1kDgaeSikNMt5FKKyDB55i4wCmuVZHixvJj9VfyqX32Jw",
  "key25": "2u9aE4HHonNsMQ335B72id9pptN4KS8hU863tTA3hXHHQzXatn7FEhiyvXFmPaJopdhc9nS1Z7ZY85M3JcL2dwgi",
  "key26": "2b2XCpFFNYaC5VkA45EcsGBaSRA9NrgBbvrHQYLM29S6szYH7WZK6GVHL1DhzdpLUJ2V5Z1pE8wKrWhZNfTEg2WC",
  "key27": "qsmXe1cEV5JU9yrPXdQSSbctrAhK8ZjaEpS4LXPDWB4bjgZpzQUR1M3i4LwQMFJpN74TAg9Dazd2drRTpzJgesA",
  "key28": "41adzuZgHzkzrnaeNSvkDV7Qe9Dexa613Ym8dU3b8srV9ZW7zKmb7Cdf6KTYLMeK4A9xQuLU8b2enqUvqSXi3qat",
  "key29": "3CV8CW8Rp9dpybfpaXCmwzgaNgDfZUCcNTHiqUyP3vFD1ayhyQz4R4jj2TaaKY5X668waDtzL5xMb93syFyR58s5",
  "key30": "uWdJ5LhF8tCCieBMKWB4kowGeFwfbb7AiHKcUbsuZ82hgeAotRfC4VVy2tDHzGy7Ui9WEBb9pV96e2nHU1oaod6",
  "key31": "5fG6w8KyPaeDW2KCgf9GgQmVR3W5Li3EAzguMb5ZfKVJpRo5uE3UB7ueZCPdvwqpNq5QftR6YDrwyGWGJdpBzZfN",
  "key32": "2BeQyFPHYutqqtSCv2chobUTTDDBRmotdvx1yTTYCDpCk13qnfDmgW9N9wR8GHaRD2S6BvfZFJovuqN9pzuTqCJR",
  "key33": "4M6gTe2z4GH61i1Wyw11Y7a6BZHrJKXH8d6YMsPN7sqF6BWKPRG6vsKeL9FDK9RpFb9qQ5npbRVWWRTYXYYiSshY",
  "key34": "4KHb2pfM7woin7hFxuUS4kzD8jxZcUZZB85mubprH2vCUbjGSA6RyAifahjweUm2dejG5f51MzBxoMy2av3W1PSB"
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
