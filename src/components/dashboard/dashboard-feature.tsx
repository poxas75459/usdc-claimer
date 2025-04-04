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
    "49EAmX69HYRtFGyeiWQ82G9vMCi8auBXP13tMqum43zppcxtk7Fkq4Vu5hzPgnJ3fwX9WHkFdArpXUxqebT2U5Mb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QHR1SxAkqmpQQxgq6PD3YvXo4toyY58ixUNtHqZfD9ZNae49HxEmmf9VxtGE3PMtKDLHtj9y1pRGHfDD2tdgxFb",
  "key1": "3qgj8DMhkTE6E5sN1P4uHGLNboegtfgoKgjWC3Yi7njDMmNKhtuVip15gAD9rFJP6RKwvaFgKpmfzPg8swupr7Xf",
  "key2": "2Csu1JYF81hBqYUaeWUvw6s7CuZ7jd4DGBprFtc5ijG58EVoEcj57RMp9HhUGdekE6ghBEkskqPb1KsKHiDHbjAZ",
  "key3": "4t5xJre4zTJva7nP4ENrVGQpprwrRq4DhoHApDHdLSbQU9ZHtdysZkMywCA2qrhTNc6ChnoxLSnSt8HJvHjJqrn",
  "key4": "2CeJNeQZFVJ6B5FrMCybYru56LbBZznErHYJRN6XvLVSjBTNh2MFXTYRSQaNN2X9qeQagSqEdMZPFWsqr7cCjpFc",
  "key5": "4A6CsxKiJM6Psitrzr7EEj4iV5xiDJmpyrwpDLMVNYq3y3Hib7wMooBK6uFMwBkVJdYn4rtnoQbFSQMrTbwPtn7F",
  "key6": "5n9g4CV5MywBUP8DNVLArq8MP8DSVDJNTbH6mQrmmtf9XAdJGNfpSLz1DUyjztBpNJ2yJLKz9RNdQm2ibp8CJ42P",
  "key7": "aJcBoLPY3TXeFAPAhtLgSXznqYEGGdtn6t66gVQjK26LqGpedCMxpA3bn4kQc8H4YPe6PkMCE8J1pGoZvrg9p5L",
  "key8": "43kQ9FNeUbf3YMrPiFW7HQPWCJ3dxWLQFMymi7bAiqPQAA6t69rXa59VJQ3xCfCKGDo8z8VQCZyn7cmZzNQztfds",
  "key9": "3td3q4UFZNmdMfwhvn1JkWFqxA389WjEyahjuDQaS3R9JJGjao3kJBzL5bGHTsFi8cLPYKNL97zw981yu463ocRp",
  "key10": "5oMnop2pg5BcijGZ9eAWHQnQJknSrWgC1Aj6qcsgrea3yawDCGxkhM9KWtRQ7bTi6nBd7kjsesWNzm9LUQyT6ZT3",
  "key11": "2idfrxDdm2kiSjZqwkW6XczsqG37Y4r9gceaycdD74n3yRZvsq1ZkJsdUb6E2EY3MtFdoJAiPrR1pcimCpcgLpAC",
  "key12": "29ACHaZTvNMDrJ6oZxUmmniHFgoW26YAr4Kc3KqdfadQuTBR5igpuTHmJFim63jhaoorBr7i53hKXqiz3vuWfJHU",
  "key13": "59SXweFuRDS6h5ZGVEjqMYTaxMZu98N7xaH5GP7wZrbRcEiEigd7VqAGAMrjZ6wEcBa8MDhnpJgYTmAvo6xkPWvi",
  "key14": "59FgYPneb36HHwVje8W9rAVYfEzZ6EuC28TbiKZF71UWZL39XnQL4TsES44veNzREyARwe95VYnZxc8TLm1MrLv8",
  "key15": "WqAov8yJAnnt4rFrM9UgWeY3cdktN2zGEmmqKyLfCDa7Yo6kRxPF3zxhJRtKJTpDkWPU8Udr4URh1PdvqFhEbdF",
  "key16": "5JwhqF5YbcEZUUcsF67Ef9938saZLZow5NadCrgNzpSXMTXgsXgkHwYzNkcpXBV4D2WdBe7rSccM99LyfcrxzG7L",
  "key17": "3vgkgRrMyUUi3vWmJYJf6mJuZeYXHYmLMJy5zggqdrD144X1def27RQN8tmvpY5AUUXT9c7jJKgNuhuBrEsiTBLx",
  "key18": "4jmzwnRgXEw9BMEFuthKjV8px9yMcNsbVWSitrmxaF18MXJffpnrK4DMuCzBioNBK29EtmUwDpGHZkG4TsyVgsti",
  "key19": "6NjR3R6YButQK8d8AB6xryQYUJddLBb4FaQVDNWG51paZAXZMHaby4cGW69kKmG2dRQg3fz7J3BxjiLzvN9BUvN",
  "key20": "2PCT6Ty2HebPrTqFjArzyf8tjhAMaWfPL56WhnmDaS6GzMvnP9LjGggRLbQu9AV5KYenZDhamTcV1ofvPtufkqo7",
  "key21": "5CmwD5HDTKMfLtAbhRqg3TuukreHUXGcpsHiQGSAwqEVR2W88EaGC2UALD7FPKW9Hg3UbbT4q6KFgBBV1ixXJ9CW",
  "key22": "24aUAGf8xQTg5eEXXzbzf8zu9BuYspQu6xKw732qSg5o3x8UV6hknBQWrT4kZiGvwNiHY38Q5iEQHpuEjTYH21WK",
  "key23": "oJhnNc2ZRtT3A3szw75AQ741323jPH2mXEwq6RVmMKWRMDAQGfHeJw391UEKYxLEZMMkEwvJBBL2SnBtS8dwWFg",
  "key24": "26SVeV511sLFdBrgvSvfctTRDaJMLxxvMjWdVHTV9BW2BC6yiJbyTg7tdv6N4cBf9yZHN49NTnTwYnNrwum6D1tz",
  "key25": "SqniTMohc7oNpgToFqQKfxopNfwzbEXE7W64mjDqE7qrMfBrq22mFfyZw9TYNVPCsa7b5u9rxps9ZVct6k6VZDN",
  "key26": "5QyTny1pLZBsa94X1DqHJmMLWwsctf79xkpHR5CV6esK9H2Ddh3s5dWND3c7LoP1wrTQdmUzxq2MyoPZduHHH2qX",
  "key27": "RqihezBeF3NmfALHSkXihUxhVpFAFMFWheArhPeW694vm5BqRFBZ6oRbVuewypoWvTniWqpowPSaQTstxLuFZCk",
  "key28": "5TynnkP2z6qh2a5Se9swTUpiZwZw9qiFXB5iDmk6ss47XY7BvzC68cd6F2jBKyBgJiNCYzcpyrAYfjnFks6Xnawm",
  "key29": "3JdErtu8YmY2tCUzG9GpngNfq6YgtZCCnWRWVKVbgpbFVcFKc6Z7gKucYzAFqGWe6grDfJiknjhw5oYufjimJfo2"
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
