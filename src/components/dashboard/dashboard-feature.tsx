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
    "4fMLLTEmrQYqEZpU8fszsM3oqZJijdWyqefHcdQEBW9LzpwzCtr4uPzXABoioLV8mFV51syCVmjpGMTrJt3BzbUe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h5NuUooxCMDfH5kxWuZpMogbhY12rvNA1yxNugTcdzXKchsxkqsHBNZLJjJ6TtLHhC5B8C7pY45tWbg4SDzS8DK",
  "key1": "3Vhynj2tnGgXs8p7wTeLjvM1peNLrWnBp4Y9czUQeE9yQWznbQ9vJ42XQXWsCt8uY8WmSRLQXM8hfjzHNrwk4PFp",
  "key2": "Btsqc7bGdWPSQPmhK4sdVYYdMQoQvt8z1pJbcn7GZmGgzkrqvcpaGYVDpeY4s6PpyuarBsT1Jk8tC7f6uLDxQtH",
  "key3": "63gxbsB6XVa5ytTApZ53RknoVuhNRfAB33CFfiDmapSBhuQMN3ERdd7eLrkbijvckuNqQ6PF4x1CXcYXsVWP9VTh",
  "key4": "5v5SbZoR95iGkGLzCdatZh3ePR96sXhLQYTm7GHu6xz3LQ82wUHvepvJec1nGLUXPqXHTP29HNqvjYrcvi26gcCD",
  "key5": "2ZHywk7MCmKqujK75rVzyMJfsNBiMjnTYErxs7W3QMXx3ighXS2eGMwQnJUhrfuvcWcsBsKzmgZ46rZjjKbG2c9x",
  "key6": "5ft2BNkGbSoGf5R81FJ69cBmFFSJecV1FyvivQbWt5Fs5xb3LK6PsHYGP8qtb5YyycKGa3S2bhUTbhymz4CfJg4y",
  "key7": "65CX7NFry6AA79WvXgkDY8LyKcZ3DEGtjYB5zcYdd8fZRywHLyeR9Co5LddeFFJAom7vmijZVb1vTsr7pwxkVRtt",
  "key8": "2afQRUnhKvxGW56EksioAwdLVRz81AREYSHbMFaPqPjmin6MafUKmKf6hir1eN734Xpbh8boaVhrYUjFZ3dvtwZ5",
  "key9": "krBVK4h9RUu6hZb1trTUAfz2mcPh7jAR8EWBkCmsMFXN7AuMuETNyPsLMSe6XwHonGdsKX2ogLkFWiYFvFNgS4T",
  "key10": "4kSLc9eXeeb2JxCVbr4rvFWfjLbqmMd7KYsSnpQDL3PWC57N5bHSt5wmPBJwcES5vdtKWGVCZNHY1qHg2cLT4Eyh",
  "key11": "4DvZicTKynj74njKD78GcEGYyvN9RUXjWxH7eGfZ7iM6vtJXfQYbozxKboPKh17tP7yC4WXeJcyZx2sDcoqnJwwn",
  "key12": "5n3M1fJdnwzYhyneECvqrJ6CwW42rhprvzpviKwJSjixMQKArzXbiuVPBMfcbyhDXh2YF2Tina9esxinjEzChzFp",
  "key13": "4gcGevk6ataSofpWEAtCRHuKsKftfGfFsaCzrdtNQZGLY5DB5T1ngaQtrAv4VzAP6vHUYF3rrHTCkeMUHywdgkq1",
  "key14": "3cvLZtJS1TPRfiVzcV4UCCdPCjVzfJL4XAPpKCHANWsVP3jYr6xvY1gQyaC1XZkBXDLV5exp9ZyUrgQiJjgubMEu",
  "key15": "2D9sPj1PBdsTCpYMej4rieiJv4U6q6FBD7PxXWjiw3L4K6Y1zC1nW2YB4Vn8y2kEo5rEgp6xiXQXrsDzDT1sRTgA",
  "key16": "5zVDXkA3r3c1FGNwR74uHuWKdtEH7tEGpqwTYeEVt7xY9L8Ey63ocjQw7NT49G1Ja9MXzc8KkKja6EvHx4Xy2JGD",
  "key17": "4Di1cnPbyTecyfxtp557YE6DALg3PBdFd4346zfmWHgXugjxgvNmCwLGLRYgmnkcL6rZrXzHzbayhHTiqGHmsJcr",
  "key18": "5khUaEqQfSeEZMn8e6wzv6ZwTWaEQBowng4wRXAvVu3q16AXyGMCb8qx3cWKfA5Y97KNbjXwa2aNHhrxzVQc6iDK",
  "key19": "3fFtqshgPWXrGyykwji57rif9zZ3YHPUav8S7DkMVWA7BYQNMLu5jfQ9h3CQvYnkJKaMBWCL6Y7ZEK1z6KW9Wf7v",
  "key20": "5M8BAfueX3ety2zYLTQ7w7DYw5TpDfP5DDcSPhFZ9cNUF8C37BKXM3o7exQjLQaUHFrSkqyAfckUEbXYHUzoXr2b",
  "key21": "4HDJ8X2HXSkULbGDPEQGsGBMds6mU7Z9JQodKviwrQ6vnJNkMeeNes7HzPKabPa7zLHUwwQkQvxcS3rs2qAfrNmx",
  "key22": "bbtjkBvh2g5UtFDjHrUZghxDEq3bqt2wi2syuAZpxaybz6SLAAsMwcCx2gS6cTg3tUtmYfxamrfRGBaDahpu2Zh",
  "key23": "4bcjdXHHeHHn2FWhqJT73qQL4B2K7HdHP4wTeKvF5xbut22hrQWrA5vjgegMyWo4zA7z48irUwAwECSYFKwT9T1f",
  "key24": "2t5jk7haLe7hgiBVMWKWm3hFzRvWbRfVQ6rRmUHitCQB8JhZ765bt3y4M18yTVCfFy1bSNjWKgLFUfYKmXEjUqLA",
  "key25": "5dzgDUhdMBZqKUPmSS9QcZEEtjpwZ9sJ1zTjxnnoFS4QyhSf4SjP25m4G6Y3vCjbqXBykeZSaf1Ei6XFuvqTYmb8",
  "key26": "2Yth8pJ583uW1SSUgSTU1VVHWv691cYenXKs8YYisXzjiR5aNZcZMFFzFC37g6ZbpNDYFzsDnme7sYd7y5VQqTic",
  "key27": "4m9T2iHkztnTUbGg7y22S8NQEiikYvafJ765B1Yx7rG94Q4u3GoiRUtE3i2HGfqdrs1VvfE86n129Mf1AhTa2Ck9",
  "key28": "A3a6pEES5CVNmh3bqsoNJFeJtkKzhLPUhyR64dKF1S4ZSEq5FgDu99qzmzaMbttT6NqFz5heuLFUBbCJLPhTtq2",
  "key29": "Uw3NvUZKRxHZ1Fg6SZ2CKPfPHQHmvGZXUnTh6UkcWna7aXXjM5eqVr8smMv75RLN3ay9xesEXHuAm6BJ8X2vpGo",
  "key30": "2Z4TdeKFSz9mpqdU1KDUf5pV8F5C4KEEixopUtjXK6ypsH3s5KjFaTYK51vfdPEHZWuvndbnSnV2YeqKzLktfSsi",
  "key31": "DX7YvrnadiqZLHcgnfcBju9oJc9eUVVaw785b6xZSyCYnc7GS8orAj6Fkgy32nx6J1wmTK9YmgSEbSY33qENqwg",
  "key32": "dFu3uzxtVsFKtJtW2PYXEmvDg54zvZTZ28e7VJTEboh4yrkEgiMQcEZ7Avy9EKZ9pmc6NcjMnmUansSR1p6KSU9",
  "key33": "6666DZjMnZU68dZQ4CVZBxKAw1QTGFqdHBGkMtgGuHWPTXXbnz8dE6EEStP8XPbNWwqv8U7saibuYvgpt6b8Ji8J",
  "key34": "3bQnvnaUvy5cAbaT4G4SzV7tRBzg8hTKExZ7PVPLhESSCx2MuPtm6GkMYYfXCyZU67ocqkrwHq9ta9E9q9rFBvHc",
  "key35": "5SbAyQZfsEeYHZYYPVaRtqzBZipS9jYLux3hvJYfcdDMT4iSvG6RkjHdzYJoH2nBfd6d1TbdrrKbHr1PHhn7AiKN",
  "key36": "4fRLku4ejYUrTtJx9VgZUEZCaBsEoKkXbtaDkbjmftUS52hKtXEZ54gin32i9uPPzdCkNz1NzjjWoG325iFDNzZ5",
  "key37": "2sfN8fT5cMWDyHrf2Ug4JESjYiTMjrp4APrw1ypN4WsAYXvSbPdQXLxhjuSEewXgTRVwha1RH3bmak7ppmfc4c1p",
  "key38": "ZcKE7Xg1BpFvUAJnTNPLG6AauCAR4LXYkW5E2EWZ8iztMYQKLAqyt2M3L2atiGYVnxg2ogwMNDJ56dKsMNHoiGY"
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
