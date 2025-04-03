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
    "23XDauFFnm7ywPUphicKyb1Mpx4W2Q1aCGDsAQm5HYpDY1Cfpb8VBbgxeVxgCCAYbb9EvjiM7if8dTxafC1JcxuH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2s7PyzmZYhp4kLjacdKeYfsSSSZGCqQoRAZNvBEZATjqYUSaz2UDYiqgEPk9mxo9qCYbAJHzgDWfpq3WhAHZRwGH",
  "key1": "5WRcbHofZha5UrfrX1UpdpnzC4GrRwjxS2LoPnJrQGGj8jFhdDAcrGpY4e95dtfSoKk4FamonH2rApVo63ncduHS",
  "key2": "4XAUiq7NdjnQBqPNS5ev2iro2gy73xAeYyKBaCEW3WrJgyErfMfaG4J8xwQsx66Kup2MTtVkKjWYBMsmH5XzTxqd",
  "key3": "9esdFs4piuqgHoZvq3hyLTE5pzD7HmKbwd1dJeMfv7UXKVXHbuLgAJ6cpTpoAdp9jAwAzHmzap8iRbKJXteXQGc",
  "key4": "3ndP12v159n1ihN66mfnXQUzzJynNpdJvcw8X187RDKx5hWec1BJvAgDZYp3jnxzaX8PNUUtDR86BnwJtL8khQX8",
  "key5": "2VQH6MX15FmtpKZ676RxNmBUyNxA8bBaeqdC3Po4UBMeoFNjS77Be8yYp7t5PXVSxGTFmgvEU4QgZsakstXmHgRK",
  "key6": "28Jtbr6waq1TU3VL9kYwzwDb8jZJjQjLWAS1XAKS4RobsSoPATFF8mb5KKhbYt3rhxXDgQnQ9pD85RVwguoappaK",
  "key7": "3kRtSZgwWTCcsnbYwUEUxPy3EaosPKVPVKcpMoeADpEKx87i7Fu24mxZVrpwWX7x5XCe7UzhZAuGeWScqXWyLJgY",
  "key8": "4ycnS1Hia8uuuoVp81FD5bUMQa2GC3X7aadmRp8DzGV5cueeVVdsbPZjXi1aNLnaXQvoT2sXaknZypRYVCod6X3q",
  "key9": "4CTWYQuEyKN6XXRZ5dihpTQJSr2NXk9xwqB3QcZgjgCwyfUxuKcCKgetG2AeXGmkFHPr194K4DP4MsYd6LFhqokN",
  "key10": "4LGBk8GQ2Wg7WpeQmbChWcndXEBgTgNYJM85FUmPo4h3gLEFA1SKLQuLC1n1Kk13jowYci9iPKN9JnV149Qnem4G",
  "key11": "LVPMZmzHGct8mExQHZS6kWL4b3Mh9t12CrrQe5HCpSS21Fg4UQQhHwi1HkMHWV8kxpV38hXDcMTJycFgidhsnuV",
  "key12": "5cqQSqLn8nKEETYbMZvymSELoJQgR4aTkHKkAh8w5wGpaG1sFCaDPQC3tbAj12bbFfybARut1aHCczC5mQVRhcQS",
  "key13": "28JWTrv7jkGh1526fYcBA5KAcCvsWg5g2yJRW9WwxSmfXJtC7pUKWqDKJ52Laj11DGSM7zDjmU58PNGL8Njjgjrt",
  "key14": "5t7kbPbqoY7KPzZFtmyNCf75ozPsGjH5VMpRQ2rQRpXmSqZxE9BmtLgRGiaHvCue56u4kgvvTZXoQz4eF2wB6PrA",
  "key15": "4M6kpaCxJ7352TRckvDg42JNfT2isDSrZnkdATqLJEUWAR9MUc7nmBndS7j1vnfpNr9x4EiB4Z9VjL3CM9pMLuN9",
  "key16": "2np8WmeNyww4jnc79oS6EXozyp3mCm1ZzcYgNfdjnJbFgU7aYFfg7xuftGNb2ht2XdnYdBm5rLkFS9QJZHneUf9",
  "key17": "66nWULWhCm3PVnZWTfi5vX1UYXmS4GF3Gsss25BAqAB884XnWQ25JN1EoTmWpBi5FDD8XCDwf622rrdmPkhhaUBq",
  "key18": "qmnFHRghammwKqnCRrgSJhCuoaykxDtHFDtkF9xZViN9mYdvqYYxHPpgKYt8PyCzeukZj5EjtKiW87Y72AGDuA9",
  "key19": "5yHY5HkrTy5G1FsHZf1u48Qz7FKsQj8CafkNSAnbEEhVz9YbWh6hBQ1GUzVZdNqjh7wqnnRVo6CVgunZB2L3EdNX",
  "key20": "4S9QtYNLUFpimxciNz5g5ts7n4jmx3Pdhh7xK7iNmq94GT2gJPmb8tLGGPENtidQPESeHwYexzjqESxAaYEoV7ib",
  "key21": "fAiWfWUexKuHUwgBj6EdJmaNdDYHupkfJEx49VrnR4JoULWUVhxvhZQcGP7xMEkocH6yUURCuKVYF9uyRMHQBjV",
  "key22": "33URPosanY9jpTJuVE78TjizxrCVQgPYkQCGWUixiSdga5ehAFCf99Bp56wodoJPBQGNt4LVKBCxguaKz6Rt78yz",
  "key23": "5qTTxubG2M9UkRGnLBqd96CfRDRTktBzEEHHV8Mg6sqWpZCHFrpPKLNKFc1vbLiqxtqiSsQyafpEED73fWPCsncT",
  "key24": "2m4GdeVohHHt2CJbY7TKtaxj3L5nAyr6RnATmFTJ6HWcBwmLjNZ4GUDtNFEhmn9LD8e6DLie2eFP7qir5WjXeEkt",
  "key25": "WfQ62wtUKzC4nsKTNenR4AKdVNUjSX3S5U5F2FDVSr699kJFkPDH3hPXHZJXLWqf5vCr4ZzoFsEyBWBPQErMDjF",
  "key26": "wsdUJKpxj4miK1VUBvsb8R59otBF6EuXzVFPDV2KYfUaD7rmu4UpCaRx6MRxNbiWhmFfiPyrgb81Csoj9Kwr4bu",
  "key27": "2vnuC6r9YhVMz5CD2QYgaH4uKfQc3RwSz4Dr3SWUevScat871NcVa8Ytsy7x4N6gz56zunBU9mggwztpfvjpnNwV",
  "key28": "3wJFfg2Ur3y99nrskB75worpLTa4ei11xQ7hW2pFzXH8KAwiw216VRmDitqRAb66mSfJcCiL98kqHJn2onJsaHHu",
  "key29": "4tNossm46n5DeQjLpnWcjc19GD9BjhDi4m5PnP6JxEV4oUdrDiev5iLkJZ52du9Rchbx3HHkikByv3q6262KJq5S",
  "key30": "2tPq1GuA16umqGPwSvgRZiF4V7qdUHzTY4iYny5Q3VGHLKEzZn3tAsfzd78xcvyiem7CGYsHNrCU3XhMYab9eHR3",
  "key31": "5C5tEtc3waUZwExgQ4LV22usmQtDTHXCQDezVGJGqzcBfLZisUxLaXpqMFbDzhJbnfsggJfn7SQzNExRMT77NXou",
  "key32": "Ckkwu2FCxA9T16L8NrjwZhTFdAZVGsTNvEGFZzhquh7j6RV6egbasH6oz6MUpvzKgoo2BwvXNZ1D1TfYDMH9U6B",
  "key33": "5dP3m4ceGcRrCoTMonwtdhATxXu8DhMTSxPWDY3dqtTeZYKewzR6nWkT1RQTbhXA6cz511uEXTezEX4ZDTmRtj9X",
  "key34": "3EaDhxdqZSLruCkzpPVJadYmMBUWGnaVbxHxgyx5aYgpc6zC18MPijnbucmTUEoiLwZxfagjF3K69aQCFb6ZE8sw",
  "key35": "wmA2VuY4sBKEWZuZUyMrt6JAX8rjWtnnGXmduv8a3HAZPG3ppRNMVHZDQWr2W5KxTBaHSmsDgzu3oNJBjEjpbca",
  "key36": "2znXYQD3UyT1h6z4evhrPriKdEGwofDnxHeBoi9LzobmvrL6JQMySMeVvMRYPMXVCAt6Avi4amWpjYFE6MUy1twv",
  "key37": "htfGimRudEMwGk8bRxyP6icK54aTKvULH2VVeED5bXpaRySE4fQyHfofP8TNVTeZzEjPXvcPaCRwfp2GZYSvuyd"
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
