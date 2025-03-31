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
    "5np1dsZoCd5L49igvqx46SozDmdZFBbHU142NdKPd9gSJDRdbhSr8Xokse9N85JYnBCPm6tiKWYGspGhXMpqbqGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ARSy2pC4yENazpuh1Krih8ARUK8B61PHjVj4S546thUx21yM4G48PDN2yfmTKbe94DxGZ7hi9kDdPmXctxbEFgc",
  "key1": "1ynsGygCuuZkt1XwGKpADXCDf4FnpSgiCnPRaKXXFUkXsaEipxMS7b2DbEn7aQ5fYVLdaPQZnbo7jDbmwSWr7RF",
  "key2": "4zpGytEZoFabc4RLByJF4zysNa6fnMH7xC5zcPNZv5Lju2jqVraKDjiTD76gTw3FhGA5V5dHd7vPvJsxQ5Z7zmZ4",
  "key3": "3HpcVmx5QEJBFqBNizHdZBhuK6mQSTra5zenYu4Jm8EvXB6bnqHRkLHRfefHk824P87khNEiGEaRrFbX2LZfPcZs",
  "key4": "3DXgCCEuAHyDhhG5ziDZjurpzXbNAr8dGnbkEgo8d8XeysKF3pZfUpue3uz1FqQC6JAh9V89zbAdQh1ncZiwB9ab",
  "key5": "5GPR4zMA519xWYFFypdmSFjEH62QVCFWDqUTc3rkUWv28dPnJRW3n7sxrjMo67moVWTcdELmm9ErzMsvw3JKZjLK",
  "key6": "FMSMJt9H73JF7Tuu8PrHK56rcuLwS3JYM32wHpaN7WqkiMZJj4bGhxeDVYa79kqPyjN95VpbHiE2KKiygUqQtdH",
  "key7": "8ydbRPkdAVuQxYjYS7X7dB6ks9aEu4yzS52V1ZJV39PD5DxigcBJqXaqncrYETbsuXyZwcwHjZwg9Y5L4TdVt4N",
  "key8": "5oDSM5PxsnSJGSQK1fZyuJr3G3EBTZ9NQCzuri9EfNw5VXaysSMjdLooQwzp2unf9VB9XzZrypTXomHjPpKXaoC7",
  "key9": "4RjUeodbLRZCM7msQ3hKraafXm8N3FXM4mCHxSxN4voNkbuRwcF19SMPrT2sejdp1U8w2oaHBw3ChYjbJCbKtrYT",
  "key10": "63JUjRaoMjcgpCWDLeJqedd39JkKq5VDKdMri8M1zRqyG7g8ZcnfZmbw98wm1Pm6UKurK8xXECAp84Zr5vQBhZUr",
  "key11": "41JavHLAUZ3fLm1FaFsjA4GU6bnJTmk3jsCdk4hQe4cJWjRpJtkqvTNK7p44SLQGAwFvco5i5DNgQ7U7RBC4Wx8h",
  "key12": "pNFEXcqb1B6mW2bPuPtVEYiy3arZWZS2A7UfysTScYJF7hSen3ay6W6mxh2qzasvUq8CKCkv2ipcEQmCzWxLo7L",
  "key13": "58mHLQbyNhfYBg87zrm1TYtVPG9Q6Sya4vEryMvMEdaLu4TYRtA5ynnsg1AcghgKBv1Z2xo4zWiwm95BVDTbAVxZ",
  "key14": "5jmX8w7bp1W7Pxo5HuKXZGkQooR9WdwKGnsrwcoupQ4fZViiFz3SA7wWe9XyeCNej9MppFvbRmvVwJRyewpqMXWy",
  "key15": "FiQ198psM9HeZ9K7BUHv4qFHBuKVqeHAVeaUHyJu3btosB7ydJxiDQecfdJZaLuZXZvJf5yUdPQ9ck7pyqcbkeJ",
  "key16": "WY3WzD7MGY7QXvywj5TSz2SkoeTNYbYFXnwkrwGKL9PWLLebSe39UMeeUS3xoxmEc3MPs5nQt1WAYUctFDsJVx5",
  "key17": "4UHxXTURksiwAjPT6BX7wY4qFHvUycTKsF6ZTGqbCtt5jgZtj1a8hn8717NtvmAJU42Ld5t6CAu55pisHCL9SZ77",
  "key18": "26QpP6PWuekwntMhcJQP5Zd5Rrkr1ZZSRAoyEvuRtBdqgQ4cYrEJa1ihvQs4m5BUS36jjoy55BRDg44EkME6A6Qw",
  "key19": "2sqyjJVuHaCZMJGPjxkTv5ynr7SsdDTiUbLf7AmyTQy1kKYNgdabV9Bh1te4pBHK36Zic5HJ29jjjGqmUCu7mrRb",
  "key20": "oc3Pph2LWWPFtPk9bBxGPbxHM7ws3Wh5A3YfoA8cWB8xSYc73rveg1qnp6VsdRw94fsx2yT1tGkFN6HAekLRCFn",
  "key21": "63iDJans6u1E3w36rFHDQaBHLXKjSZEJByCk7ghheB4Qw215J3HNqbCmFHfdcay2ihsnTExescrsrm9vm8GLJPLa",
  "key22": "3GPprYwLBcmitEo7MFso9C19hvk43Dr2fVqbqGSkEeGnKkoC3PjGuUxhBpKdYwM2u36RYMy3CE4bHZaW5SAngp7y",
  "key23": "5GY9r9BKuRE5ptJu8948QwQXUzNupVWSmcuxquiSeGebQ43SptNWybNtQ9WnaEE1vQsPsgsoLDwGK1n5WLp2ZaPn",
  "key24": "3VdkrvXLW7zWAxqeBPb2BnEyMNowFbsajM3vtynkipHRUyzvbPeai6zuZFKKK9PPBq7kbUq4AuE6gmSn7oFuqJq2",
  "key25": "5S3JPQMmKUdJvw8cQYa8bYpcrdfof7CdqH3FDgbwHMEM2DLwNUNVS29fN8pZyv1CgkK7zkGgVdnkwB9pwvocDe6U",
  "key26": "2Ac6npEVjGDhAVwBCgAzrrxFJth8FVm724Tda5zy36mqannRGA4s22SND8KP6ftkFJS8T8DVJ5iHL8qjRneM1kZ7",
  "key27": "5pTUMNvjymjMDd8qsvZXFWQ14BKsf2gHGvHGM32LN7Vpx8n13Q1F7vhe1ECfBRaKcmWjrMZgpr4A1fS9ZbZMZBaL",
  "key28": "4GLUmgYKhMYgMAuB2jdtf1iJiT71yWi4TgTnWXtkVm1h1HVd12wmA5UB6b61VzZM71gzgqszEyQdQXv2Mmm5d2C6",
  "key29": "3mXapUaw8r1vF5g3UfGeUCgoWgexpCw4GVa8uk5YhGQvpxCdpivcm8L3SjWDD3r2iBNmg3XxmdDaW2bQ7JPEvZ3Q",
  "key30": "4tDDNjMAdzktzKBrYGvxNU7XymhUeGXCyLCFqeGAAwCEAvfUSweEMymCJMbfmTTquUG2Pb1qWrEVsQFDpGwXfUcv",
  "key31": "jzqsCuC4n51udZi75xEBNLeMXPsptud9VF6fXpL4NG2cvb59G9eXTmmDs7dZnL6HjvsJ5p8aBxibKxB7Tkeh3eK",
  "key32": "44H84wNTYSsKKr97DfAW6K9QyELM64wGctZxPaJ37augpv8udcuR1jCAyNB9QSc4hi42tUHvtKYujU7u7aGq3d3B",
  "key33": "uVPZ3kYs72zQF4UusB5Y9vU3qTbFH4ACfKXagC6oZYzLSSZsQ5xgkSoxZFG63pjRRK1kdDf7GVApEPthJBMRPh2"
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
