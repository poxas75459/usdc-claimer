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
    "5as8Xi1kssTJ1tMJGk57R3a8pUMPGXsUfoJr716nefP1S949c8RvhhUHzg5XmPJd3vwDmVJW4ayc4ScT1uh4UjSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WtTBArdcYQ5cJw2DftxGjAde6gQv6kaiVNj8TdNJZrkpTM6f84HwGzzMfwuZcf4WGSdfV7LFDyBFNqQhT9gzzEW",
  "key1": "jzZWNQ2RM7aU1rM6iJxJrm8Lo4u6JLrAat4Us3tdHPkvczQGUSFTezTRCNd7bpYumQLXbwPiwoyhnhSvj2ffYkK",
  "key2": "3BMvvQFRXNS7ZhsptKWo6qjCsoujSYjng7YucGGa12Mao7PRafDMfQgTcnAxwzCTytq8euqMc7oNWMbrMAtDxqKg",
  "key3": "5LzewFktqsY5yphi4YpKevkoXxbtx9DMUFntdJxvhR2BSL7o1wa7ykUp2766YoP8LQBXJGx7UcfM86yruaxNtYnh",
  "key4": "5bENHzY9hDAbzKikinMowjwqjvyriNFDC4GaSU7ZFZAZ1bZfaUGt1R29hFuZsWHtVRSiGBbQC2qxEDbQ2unhvRR",
  "key5": "4BKBdxSn971a1mCnynHH82ztegEzP7pXJZF61YhYXCwQSLLgxH6afkjrfWrWLZFrVeS1HX1WHbjYMc2xkjwjTpEb",
  "key6": "64vFYxPEXn15q8GfND7J6JrNf5fMde8ZGDwqf2YSW6DjoCnWL2xTHYVJAtiFJcQrLuF3s2WTC5CaGpeTwaVozRYJ",
  "key7": "3GyniidYvijNPXbGKBoHKUZzorrUHf7zbp1YH9ZGDjv4g1i5XKmdRfPdrMogaaDb46H37odJrxYwkReDaNFkxqqQ",
  "key8": "2UF8By54X79RhMdTbPxE7Dzk2362REs4dJvss6QfFUcPnyzBeBocPnreQarV82F9N8cXSt5uUMXz5bkQbrSh9vAx",
  "key9": "32MEGfkNV78hDcrsMHbMBMSsN239aM6QWRC6Tym7F1yM4vYXHRNmFMQVUkkE15bkeiCET2b1sJcanXh3a52xAPE7",
  "key10": "5K7stKK6LpcfhfHFKu3GvzcW8CCygZqFP6YpoWaHk5ZwYtU3i7QEBViMN3YXkokFJx9YWrCj7cnrvjuJTh7vhCyM",
  "key11": "4p56DcBMmMf21GjJMsqVmM9Kh8nmcygEEms3hsRmDt5ELrRto3Jp3QZrPmSUdGTmDpv2sukTe2byetaLn4SKbBu5",
  "key12": "3DdvzK7xL8JFH4GXV961rHjcvo87P9Yr8NX4SePAP9vZmyrP1wBKXJZ6MRd7rf6GQ59r7Cj4SdBFJkjhrCjhWjQ8",
  "key13": "nw3pdwnA1jwY3GGRomyypsfvf1mfUS7gNdTB1CrDmi47N5AYBxzxhjrHkN63wCWGWR25NCdbfyf1miNQJ9jGzsH",
  "key14": "2iwkuP6MeP2FW7U4MVQkqKiKs4ux3xYJMcXLRnBtfiAfg7QheJyaMMT7c5NG5mayYKw9FcvkhKByfb6ehbgR8ZFo",
  "key15": "GL8Tz2Rj5cqBTqXvWwwW5eASxUtB8vkPhTK7SRJ8VhTaK4MQR4JpDsqrgaXrNKdRzamjFp1vfiSfrQ9f5feqW21",
  "key16": "kof5kE87WuaHR7sbBpS5fxDnqaFfPaHayK2ux28Xx7e6UTRqXFg7amp47G4c1UmhUyotNhNbRcchZNqh1sYZs8y",
  "key17": "2hdf16hDyqMTuvAbSNQ795RuwxWgwd9AJiciBr5mSmf7AFiTEtW963hM6dzpLJ4znVDgTZNmzBstRNPfA1TjsQDh",
  "key18": "mZJwnYGUjCFePp2Gy2MmmdLBJce12Rokw7vAHy6xjXitYfqRKLnuy95oqdgHYvWAqjpeTvrJUeiZZZxmyvTNXKp",
  "key19": "25buxHn4osTEyney1FXb2FbdsdEYDCCCL9uGvQzaHQQGD4ZMfcM7sPnoCYDTqcnEugoioN89L8SeiwFtk2GDb37W",
  "key20": "4RoizBpm7n7YKCaDdUMeMK72HvozHZMQhwCVUozogsVGQSeoeKbSBcqqicpohxWG9ARgkezygS3uQ2BLu7NhkgRX",
  "key21": "4v9WfHei9q8XBzmbaZjJ6FTHtWAJooj5ww75TdtuEyosQW1aUth7YaY86oRZjzruudJDgNQ1UgUy6J82YQdPGfpA",
  "key22": "KSdBh1G8VYTfw5Coveug9ycLcmgV1XwiNQ573s7KCQbNSB6ruN7rs74ubQAQg8pDSggu3SptcnRiKwrtL76NZd2",
  "key23": "4EnZ28haejWpgrE6rFuTXzEH4e12TifHPtsQjKrJ8kAqnC6VrCEh2VFdnPBXyjCrVPzk9dkjpLUtNzPQUWjFkszH",
  "key24": "3YhcoTbjEoLdKZQdkHTQbzXjgNto1JpFx2F1fkxoPjbrSczpYuroJHtC81LnoXiHzCbQq8GKjtrvp3BVtUKR6iV7",
  "key25": "4pe9ceBet68EQBtgeKQYSX4k83FaSZVnpJJfxTBkbPxbbJf29k5GnPjdCXCFQFW97YXFDGPvHvCWJzwgLBSfdrD7",
  "key26": "4ekPdxSxEKd3Ptawu14Z1L6TpEHGBdBXT4GpjhaLs2gPgnPjyA7ZimdGKcx31JT8A6zWBYfYHaUSXqstKg9mUgGp",
  "key27": "5wDgr5YZiQdZiCRsGjLHKhgiBfPm3eHsNDWCFDRfXFb5r2kEnzhxXE8cjb3Gbdyy3C9DiQJcYaNnx8TLX4RiDWCM",
  "key28": "5kyWTxZfoFJxJdd7FNNKL2AAJysFfbhyN8cGDzxBpWHDMwW2pYv9bnBizNKt1trbxysdhSQYtaaEecekBj9N347X",
  "key29": "3h4ygBfGAZGyieyNBSCRbXxgFzRqzDsQe92gBYVGtPthR5qJEZXUxK1Y9NeQfxiHWTBJQeK13Ez5WGqCKGw4mhn5",
  "key30": "4sVwNmsQGJSRKNgEDmwgxYQr9iMEyfcnNjGFw2JmnDbkcVxpegnzP5vxNmbUMa6KJawxLFMJDSYdNMNpRDxhz26K",
  "key31": "3RD82aiajvjM8et3XWuYXqxC3oPb4uVkB6N2KxHQwK6L9ms3PR5dH7BHxKvzbmonwKmU1wniyofwqu8H2NrZZDGx",
  "key32": "kaWqfgHzq5DzUhvdKcQnkCjMwt6QvYZ9aPzLNybA2PDfzxbn4rRy45qW7q5cTwT5kECg6v5CJ8FiXgGgAh5pNTd",
  "key33": "gHTGNRcXhzPj4exYatVheoqtzLWadd35gQevdVzRvaPY1cpVr4NXKKHdp4xkczYs7dJPagqGNBtjyXSoHfMdqnn",
  "key34": "538ucjoqd7XN3KxqDKZmKcVKqJGNCr7dJdfeJpWnkZ1WRApHGFQA1VmHiNxLz3JupoDATc2QwKYXK5j3ozte2LHt",
  "key35": "26b2YSjPqWwru965wZhYPwjJRgsumM2jdSpHFxqwvy6YrLye3CGfnWypuE7VYEA32fE3MuQCUot36LVDKv2GEDcY",
  "key36": "aaQqSMMJfMnX9KD5Gpaq9bVMnppVz182vb3UhJjcxLpRJipZvF9rmb8CH5pmz6RPSeokqHAsqJv9PCdKzAZPdnq",
  "key37": "55Mi7UZjQAcaFZ8bWX8JMSqgY8QgwWXTVRwmomXKRdNETRMYgeCp5GtbAkgaNowPA9iV4otpWDF6oggbUFveyodV"
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
