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
    "58b8u7i3z4sBK4HG6yy4ibAJ1AdnL4hmdERhzNZjs7xQ4FpjcGCkt1KXNfkZ418PG9p7GRYe1Ne6Xjpj8oqYWgvT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uFaANpUdwsZuXPvQbTJ3bNSCQ6zbvGL2hg7e61Yz3GLqPA2TMZSWMDq7pMQdiZaavXbWw7DGgaUTXdGnScKhKbS",
  "key1": "5FdAJqnRbeRFo1v69BGiiRHNcZcHKN1o1wrduc3KAsTf51aaaeebkxavLLeAxDZGYrtebUuPLkZDUaW3xwBGPuYZ",
  "key2": "3bjBYL3pEfxaAfYRUmvnCyqhkWK9NvGiWwfqgVGMqiuR89xTWcJyGBowq3RBA8A6X6kVsv3Dsdw9SU8n8rGiBJT7",
  "key3": "3bDuQadvDg2KvcXs4sc46NdwNXBMUYu2AQWi6xGsTTgewkUj2MDiUT8zeDxdjuNrtZahokEAue1WkueQ79MfqGXV",
  "key4": "5xVmQb7qxf2oNj3a6EjbTJphBo3LZDAv4fyqwPT6D95q2uvjdkKhyAgooebwgnPHBwsyEzqtNfUB4cKF9JRrEXoU",
  "key5": "44HKQ7EK6SNkhNxRVSyFNSs2QfUYkqCLStpBiuyoKRVxwZ4DhXqs5juYjjYZQoJb7Ghe21gdGD4u1gZ3QnCHHDKx",
  "key6": "jzRqXYrGUoxJfcVjNUhGjjCFgqxr3Yaic1xHRSJn2wfmyQDeCyuim6wNBbagUhoG1rrhkSLDyn6mwTGrEhQ5E9c",
  "key7": "RFnqLYmWLT5mWkX5Mxb1xKr8rNanDWTdCygMupJohraF8zjbEHmBLG1Kq4HevrdeHd5Yma3Mt4UNq5dr1UG5rQs",
  "key8": "sQ6AgHZLv6Gbn1TYwLNf33ZeiqvvUWPPDjRnz3KJk2DrkhErbxZjXAmDRjRtAFJBXRQs1CF92w9xapGNA27FJyy",
  "key9": "V61QXbnf5niuygeRAewwhNF6TH9Ys2AEpmey4yj1QRU9VjaTfXfR8du6oxcrmVvHKcX3xNdX7K7ikeVk7ijK2M9",
  "key10": "5VSP2gbdeKfC3HvSQ1ZJcU8Y3C4aZmYiX2nmcQuazre54VbTKSYfiRX5zjvzZrZAD81UFoJJcMqUeX2QSPSsCD2A",
  "key11": "2pRCnwCpgwP8Hu8jQfAyQrniuCdwex4bLNFt1BBhhk2ffHMTNdWMCj2hJzAtdLwUjA9zdEDwaLk8prk3SCKftuwJ",
  "key12": "3MdHU63h7EoAdugfBUPuc7YPbSZ1MBjtQ2Md8L7PgCmuQNCaBPJv7J6u1C2zixLdr5RP6wonsxHgj47RSNiYU81x",
  "key13": "5hSv7F7Np7Dik6b7WDj4wZUuuzjT27KQo628VnCdhZUooJuGedaGBVDzDm6ciF7R6d9VuWwLTz6Jw8ozsd8FBipB",
  "key14": "3QaaTvtRVyXfsrqLPeqYw9zp4acAQ6RxGUi7mq27M1JzbYSvdW43XrZ8nDWzDs5QvPpB9m5VUE3RvqbAnxgtosf4",
  "key15": "4bNxq5ihgKzvMgpP4hUsKqVXuYkHxQD6o2gERnH8vq6fcGC7cFLuqwUMDhpts2fFAiZTsYD6MqUDEwTXpAHZk7HR",
  "key16": "zEYiErM7V49b4c6CFN2zuEbXzbnFdNdgnwzBdLhiCbkgqSxKHpS5AhgwMUnXNjN1w45PmGffhtrXBGyyBM8uxH5",
  "key17": "3LAcWoM7z5aGznLAvLmKHTFfwnrW4YRFreo9qdopJ5XRtidAVtzPaDJezQaz8US9WnwU3bAM8CTRBwgYwkxzzTHf",
  "key18": "5zQNaY44FuMPzpmCuzfa48UodXCqJSeboPTGyqWy7uFbn3jxY3NRc8RYe57VEB8fQEYDoEJtk934tG8Du24Y6sF1",
  "key19": "3PbMVN3HW1pFccaR98ygyXuEYP2gA86BjcDHwKv7y5iATegzEqJTaJCmSii4JLvCpyhhwk9jP6FGPEW6hL2DUBa9",
  "key20": "621YiDHD2PJpozp7eSnoq345uVqxGqjVeoJTGm1Rjvg7iHc5A8ytqyJhK9JayUWEMnwcQwQkLAZmxLCYiS2nXRG4",
  "key21": "4r6qPvbyiixM8HkGXnH35XV1wE9ARjRRCwaJS5wgA2eR6NHvq2xAAMt3dqZPZHMSDoKepNZEqBoVCzQpvzbicE3Y",
  "key22": "2CiG7uUKxC7n83zR86ACz4ybE5yskrP8Xqf1ZpV3pYFwYxcDtkxYbPN4Nha5iEJc2e9TidW1kijHojTbgez4Qw1x",
  "key23": "3K5wvwhvSGPuhXrFKkp9mVNPrzyn99jCypx6BQFT86PCbWXWZJHJQ5F2jcaXhSNyRafb7ZUgGqzJSRaCx5Kc5cwP",
  "key24": "275PcCjaVq2HLsUCwKYWXvonqCFjqoxA61hGrfm1Qzr98Revn5izKBNbcZ1RKgiLPuhWUSH61HbctV4WwrSAb8uX",
  "key25": "2ipd7LJeSUnvxs9RfYBuqmHCBXhTxLkq4Fxg8ywjtPWzKTfbV6TyXLkT5Pqg5BcyCx9SLoQzSv7rxuyvr5KEHm4h",
  "key26": "4gQz9pRAzY4XBE4EFZtz1UCuYUb2hhCq73AkaF5x4DUkJ56etBfN1ZTK4DQ1io9EWv7JPSZCLh9c7B8hHpLVaVUr",
  "key27": "5jj4kQgP4aBjxzT934uD8GiwfRsXQR7vYmzH7XzLQjrFB5sviXfbAofhzktwzABmhxyim9z3d1QXS3xp9P3s6Kag",
  "key28": "3VTSxAwNo1wp8vwWbBu9yHwJjT5UaUoJaNUpYd43BNFYvanrmk3ZAfjqCSPNVushDbJgGGesxf6CH3VquNJJYJy5",
  "key29": "4pMJPN7ypDscKQoBt5y43uadht8ojVkTuMZxSgHq6nTF1Bf4e2oideL35sCPdiYLmP6WXiEb26tz4AswnNSMJUXj",
  "key30": "ariPx4owMncngfiftC6ysmEXaCAoZNDSAHnQURKb871jZo8eVFRVDCFEWT1cfwxbgnxjNo1K1kakJGFtgFLfZWN",
  "key31": "4Qda3PQoqGPRCp8d5YUUeRg3FgZK1BR358YakAELVhpHKRHJh5oCVasfvFq1eTTmUD3EbersjgWkSegHkzMebY6u",
  "key32": "RBZjps8XEvFnBATHhUiPPCLnAxcXSdq62LemFQNkQAJbYekXqYm1PRJam2wEevjRjU5jELahHguipYF7L6t35Jr",
  "key33": "24ozJwX8aa3T7B6k5yx3cBFiUq1AZ6QVTgHvWdeEKvSonEzCEWMmW6S8v1D297Gx6w7DMebNK5FxLEGngNxz8286"
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
