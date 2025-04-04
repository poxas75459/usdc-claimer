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
    "SLTsg8HRb3x9Pvijr5i5VdLP8iynHoUqNLxktPEdCDV4wMNZ2wTbSsK3fgeWMqcsvEKUCTPD4G8rB3DS67aV7rc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uG3bcWSXufFzcE1vpixGteq8zmwpVX8uZxHn7rRSQsHDZKHdY3GGH4MXQJpDqyz5kX3eASE5CYs1yLj2Ek7YKvA",
  "key1": "65p5mhia3GJi5HCxbVJ6ZiQ3FGByaPnuPP4soq262V4Wx8BxBGbaXqJvju35orKaoSzuYQ6kqFuVZNPDVoF9wfL6",
  "key2": "2VyC4MALjqNoywjjbeDEVG8eQrm8Rj2zuRxPCy1CvWggRqGJQhTUPujKE2yBoQaSEsMmX7y361uSpki38K9LMkGj",
  "key3": "2YqMtgpEvTr1dj7rGAs2M4nsaBkJ5JDtrb1fSzoLwe217zMh4HC316qRdCePCYMK7tgPKRtFBPhWQM169bJVNf5u",
  "key4": "2rdBFQGJnPYYudayQMwJjUdVHhaCnU5EUVGjVuSkAGD2HE2USZBLBrmQdFVNUdHU5FW4FLf462vdBqNnVVGjY3GA",
  "key5": "2Rm3g69vi71WUh7S4S6v9fGsZ22Szh8ebiMEB8PZ55rFMFZ68AJHcnxQmx9oTubWqPDwF5jZL1KzxHTwXkiZz7ib",
  "key6": "2kvnJgPhq2hTNmvPPeL89M5CnvjuQs9KT8m1UnLzwy4jaEHAzR9XtYsMuehkL9gzZt6WkhY7iCT6X6mwNHZrBwFV",
  "key7": "4fy6zrqF1kaQLnCe66zrArq8Ri8USaKusjS8kp5AGs7LXKpPL42RASDcmcvow8SzTgyJ59UHYAWuzpyNfzcUhtkU",
  "key8": "TWezHk9Smgaw5ix7UX7ALm1LniYZDr3cVnQvHyBcXEMoxUukygqqihz265Tsfwu69sSiFZT7AMj4JAn4vbvXAj1",
  "key9": "3cKoPhaLnQTAUmA38RekJJM8qPYJPxGqbXynN5xAmCDtMARKtTuxV2WiL2azkn5jSHKE7EKxYrJBJZwEckgRNVad",
  "key10": "42cm8WNsgMHTuq9Pa7sHybLwMYdW7UvwGCZpDMdnrnS5JwnbiJmzVEx5TboVoqUUNSdN86aECLJfzeMCj7gBM1zX",
  "key11": "3sW3kX7kq9dg5r81jF2w9a5gMEy9bHxtovGon2tgC824XXSuKqqRQBp5Ar2i6z4fGN1tqptDZUMxxzmkfYS3PoCD",
  "key12": "4PSUovaUBFEd3MfPaSWU23qrDKM3XSjCva6WPM42BxN3TpC5BwGbiVbJavKM57RNMXfrHhfqDjTTbhKpKKzkHmDe",
  "key13": "2CPCkTBYF9Z9NBzMuQVW8pKbmULZqXXePvFBBqksDeAPtG2WpwGkfRYy5hy6TqZKydkQzJxbpKxvAbAq2bWdBdkf",
  "key14": "5cjc29KHh99TSHWxkshWgVPBY5tbosSjfBegFRqcCMYcSjfSyh9pcwypcPPiD9ui6w2Lz7MHyNCv5LU8KqvTEk4c",
  "key15": "n6LadCLTQCmHwXYMnBWone5m7J8MhPguRuyAidcMyC3KQyYq5GyBNAX81mCTDyASDW1ze6ueadLZwrPF77RjRis",
  "key16": "5D2m9dFqfUmDAhmxQDFa6UovRDrUk5c6pkxTx5c5dakgwPNizvK6gNpSoTw2zGE32J7rxnSxmpR8JvQzVhd5aWy2",
  "key17": "2QZgmJiZzm2ZWb5LuXy5dy9YWZ8bJKCrLKEV9DbkwS2Nxf7gC7frRKDcnFbAEMBhgHtewdAZaaogY6fuWnbe6hLK",
  "key18": "39baQQ9mkCVEXXTeFJ3S73rg86Zvg7gQvL1Jfk33xncVZDeUQYvMU6SceRkHBx9MbYy3UXLoVN8nLFFnu6yHQs9u",
  "key19": "26vykeqCa1jkC2LMmXCP41swihiXzVPWJSFsek4SpAZjEHvcMXKyDtXW2dJ9ZRVA3WdGMKHFi86JFxJFfcdAJdpr",
  "key20": "4jHiabYut6Qt8sgdNHPbUQpsdtEkGp8gskaH6K4ADBnnMWLFakuwLm2e1N42z4Ecxh8vktz2ejC2FQesn4Nvxrp1",
  "key21": "5XF9FXLFHsgTYp5qDkcVTCjxSNYnCVKwzMhBAMCEWG6e4jn7sEeXW7JQBHQHZsUyfbbCjfp1YxRLowCd9n5tPw7g",
  "key22": "2iLwnBEG22dPiS4qPadpJyMfxnEtFaMF5yZMQagHPe5QPdVxGkwetpHQcKc8H6n2BN6Hpw9PC4gxV9c5jhEF1w23",
  "key23": "4BcCN5jB5WXjb6Fw3RPkPhdFPL18oBn27LoGEWnG33M96sEqdxxCpbYyfJVhZMRirsdbWCUqqoffY5u393bDAngG",
  "key24": "271qmfdinoWm9Hzmj8igCFW5u1JTw2Ty4My1UfeSKQ2uCofg5X8oy6UPuQ7Vp3HztSfZrWFPZqfDiunXEqdWkHHY",
  "key25": "5oBGQ6b1bbcyoadPzEZvvx9RnFKWbjec4ADj1wKL3swoS7cuJ2YJoMxTptQMhLi8ethqwzoNbLCxSChKCCZerGTk",
  "key26": "uZLwoJhgrvUD8s93b8JxujXv2fHuEJ5QTQdpqffdZKdCAebr98jMEJFHsFvvJ6k7EQ68k25r6etRhsn2qYM4KvC",
  "key27": "F4k6z3u99Jb9A8EBC4rxmS18uk7EmzB23mnjPZawLmW5s53C8fDGZoe7mApPGW4kbjwkMhNpUpwco3SUzFGqMov",
  "key28": "5bLwHxrggB8dbirCxRph3h3X4AQfSaqh9DnqH7BFiAX4G3Grvh9tgZmhFSYnqmrqZLJMZBjsvyJqhxY6C9o9vogt",
  "key29": "4wfrSYbYgfj4njyew8cEHkwwwrut1G5F6jmdwWqetzK11e7NUuAvAVkJFXoaw66YD8VU1LQok2DZDN989R4ZqnSA",
  "key30": "2xDfJPPoAWewof9R4eD7cacZqidZvnZePHCdxZK4SSnDXmyQKt6n2zh4MZihBr8NR5EyBT14Qny4fkU3uFdnPfzv",
  "key31": "3ovzk4PJRzkn236TUSxMD8xFMAiNSr3r8mkbcXk86kpfenBv5VywbX7d2TxoywQJg6X7NJgG9XjdAGcpUYxendBC",
  "key32": "57bAo8iJ7yUyeBrSvsEiKwHZ9K7bDoCLjqj1WtbmYMvDh7En3y9B5PoLaYjoVZT7hCa7zF7GqvGUuHcKb84R3xjn",
  "key33": "5vMkW6DM9kihFPKB646NYa2vX4zSPBT1GrugZNzFDQEMW74FFtxF229T4vXaKZZ3a2Abwsbg4KDgog3BZ8cbTyPM",
  "key34": "4UVtM9FCEzuZnzpgtJGnQzMyZygVRjmtyXndN8fMz3v9YScYwGTtZiGUFQdQzAdKn9WJzEtGA6XymDzyGKaNqVMj",
  "key35": "6Mu1afp6NZTEKWqBE5GMHFJLptVGB3DdfJ4otKYxDuYGAyvPLCvdQf9gRXVCgVAXF8pY1dNM4F1iSukPCgtEmcS",
  "key36": "2qijcbBvQBqTqQCEahJQZX8RoXmRX2wYMUsTNemv3pS9ckLxVkdfEUVLh6pgu7wKTiM9ee282HSpvXdCgPxUevRW",
  "key37": "2XfJaCM7tGu5jFBu37jADXXHwfFzcHwmVQVaiFnvPwfmQjjVYYQTNU8Gshapv87kpWLBEACxLHnXZxnrtvezdK9M",
  "key38": "5KXeTwsitQEoUE116bC2FNE8wfUwWx6zr7ZTYrD1H9PSjE2puUpAPofTEaCWp4RNLnUYNQtPMt4qnDqXfizTRFHA",
  "key39": "5QCcppKG6jZrCa8XhdMdiv4wN6f3xAtsGy5TRee9K4u9sGEfmRbJo9q65Us62zm3SpxLZwYSWontiuNJHkcdCY5",
  "key40": "2BtkB1ABnG91ftvUR4iPeikhDKt8QKAZqoydrntf5ErswTctjb9CpUGoc1we1TeSwW55g8wnYqryqywTsy7SUvL2",
  "key41": "3GsCAT7bMitQMUvYnnBRAVpMerGdT2B9kLYgQUbGZgKGb7oDE8XG2ovgVDpQy2CaCASdjnQaD33zT1qAWkKptXMD"
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
