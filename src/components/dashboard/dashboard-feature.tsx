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
    "52mFkQ6duFLJrEH59VpxQYhCSTcjwKwdG1WU7SC716p7oahFkVkZYLwykz1PUvEsy8TTjyZMESX3i23uK44kVxtm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "p3LagYBmVnWLcraYrcDUTLgdr5iX9zpiX4is5CfBdFVfFNqhHQVhHazkGHYCttTHaDV6BPhPqcGZ57xWvckS66m",
  "key1": "4d7PQCqPrKZUTjxbYGqbArebZjMpmNR8XXGFAREHEutZ4faUgRNQ73r9gJQgKe3tV3trAVetxSAqK4vABzza4FGY",
  "key2": "22ZgTVCotUnbvRhvNnNi9mef7esTk2HMh8ZT2NcKZVVy74BEcsAjgEnFXNWP9RrSAT9MixYuVbeP8etCjZsBvuH6",
  "key3": "3tqPvPQ5XsLGig9W8TQ1Mf8xBBz5uEwVhL4R98oGoQQd2bYcQ5Q3SBkJAvT2vPEtCFkxYzREpUiWBRZeWqZ4H12s",
  "key4": "5rJAC9RiiSno1tgFJ6cAVAQMDDnjX2ZJccBuZaRPm8NRAGcCyFS9Xv4P95b6T2ifKwpWiExbfiFZwTQYvvMde717",
  "key5": "2mxexzQ3yUCAF4X64WJ6sgen4VbdQG27CewU7tr41hLiB4XyMwDMadUMdbCsQfcR67cBpWpTFdTFmsVcCJfMj7gF",
  "key6": "3FmAq2EwWU11Wq6J3p1x58MSE4povUUTvSgazTXzzDuyiGhLnmh1HNon5xnNvJbMJZo6AisfMxGyxyYGMnUY5bjU",
  "key7": "bRD9RrF6e5xyEn6RfmqeiPSNtvKyzegiyF4pS2GHa7bsN6XoVjvr315Kza748ZSs7KKZRSS4VTaoELjye8Gn8e2",
  "key8": "3UM2GhVrFAeStx5dbASMe9WLLkV49jexF7yy851rin2WhiQbFN32HkwNcAEBME5edZgzGKdE6i3E5SfRabJcytb9",
  "key9": "26VdXZjuakbwxK2PeEGzZcSTMz4FMrNWCnXNSX8LW6snMpnYgDwsshhJTN5z77ywtMm3RfX6Vx5FkHbGuG4pnZcu",
  "key10": "4yLcZ2d355EZt3TecHJgsE7BSnfH2RojKniEF8cjkjYJjzzQowtytBJvKvhiVwXnEoS4hsJFDK6FjbMKZuEtwR4d",
  "key11": "2Yzp2A2X4AVHuGTzXv722U29qQ9ERM3MKZrGPusxqFhvWyVfihc5e3QZESL9jNWJHHMmJM1EKS5S5wDLTmRXkkPH",
  "key12": "3TcGZvhULY1ARXo7ZVjxcXNStdrS4zyu6vDoDK1mfGgYnGeuKpcATaxQZBW7WsHumYgyGe1xG5yaZ2MM45gk7WAd",
  "key13": "3kQtrm1sXTB2z78Ue8xSYSwobFfapTLq25q5DrQBec648Vq4sHnHAhBuD3QNr1te2L3eENj4KdmiQiEWz4tsKMeu",
  "key14": "5WviodzBjJZ5yMDTGSdKpu76Hiv9K6fE2D4Em4rGkPG6LMwkpTfvZufyh4NGKTXT1GFJXnB9J93AeZXGVzuMb4Z4",
  "key15": "2UndNVGuKTigu7UH7HuDaJWY2AaVxuSpbJKmJVpvFqZ8RTwGdFFbLxchWSBMqB4LudLfM9yTYsYMRMna9jrtgniF",
  "key16": "4cxwYNDgxpp9Acr1gsA9FzQSEzRWBYSygPzHHCvKe7ZNAhTiebUHNHrNu6sN53aM42PGUjMdPfQotKkgDSUy694e",
  "key17": "3J68j4iwGFPfsoRLdpDHuMQsPUmPqkKetg52KXumTZHSdsSUUtWkEQfbmmcLG9gbRfmoEYiE73D4uGaXQvHreehD",
  "key18": "4iTnUxqdMSZ1H2cAaa5TLEzxjTa4osKDKEHFTtewXTABYAX8ssm3YhuVRFxytYsBxGZLmgWLd8rXJZBop6XPjn6e",
  "key19": "22tV5K9V4QtTMmm9jRqBB8kRX91UpA8tw9yAyGmwZ5yX1C8iF9n5FEXhJ2Q7Bbpi5y8xn9GXvwvKGYxbx1j2awKr",
  "key20": "5hJCmTeATQa3wQMqpv4PzHa2Xh3ati3ggL5zGrqhvmSNjY9iwy42GawAnxxVsuEKo3vFsMC6g6fniRx4fgkFqEuy",
  "key21": "47hK8cxuRuvVWyrNi7xgGSdqgUNRbmxLumnoPJK578A4vaM3AxbeETsfFcN17bV7kYo6D9i5aFhZEFvZ8rDCBgeK",
  "key22": "3qYru5z1bDppXhLNKiRzzAGCr74RDvNc4thPoWf56ekGJzESQXYT8BfHf65D2EvRzUqWvDDJ3Yi917j6wmeXTzhM",
  "key23": "41urpbwePtwFx54oeuYA2jZrjZoyJLMe5oAjCKqqS28GV8zBWTSdEz5Eoaz5DkDZyLXpL4vHkXZPEy8VcRfLRyLU",
  "key24": "5DWyidzdWSPWTxVMhntj7XCChiijBZsPP1FriyNRsrQW7m4X6Tq89SCgGECYvqzE4Z5ssNbk3nqtP3WS9FTvLFuS",
  "key25": "3iU8LZD2FB4hKTFExZ1BKU5682jnrpLvDNontdHovhkyW7FE67Ddz4mbPLhfqdGiHvnBy81XpfXTFPhj8pproLxb",
  "key26": "3kzFZkJhnzv6tHJPN6cdZMhKpb4bNBLjuu7QNo4QEad3r78vsShNoprAUUCZBoqWZF2dXKRWrvTpkFZe7LfJWG5t",
  "key27": "56QsziMXTb1Ftosnjw9ErvitZdTF3hd2McXWMimsJMtBSS2MBcyi2fxDL5Eh1MmUBPv4jEKGTdEG8zhcdQWz1dCD",
  "key28": "shf5pFcxxvLgP6M45RCCEwjd4YRS5nW2q89QDhk6m8hs8rzytrU5ZcsDZxFciyfa6m9KAXYM6K9wiqujuDhcZxu",
  "key29": "47tCZa5m4GaMhbghscmN6R6BDi2ND5p9QrWZBZhs6xxseEix1jq79tWoxwrn1M6tPEr8xuBoTgnEwvHygwPo7eFx",
  "key30": "8D4tkL7CzRp7D8Hu8YRG4RnNjvxUZ2XQuXiFbUdXFAKsBMcBxmMzwk4XLdYDNLAhZ39qCxAPFQNZ6DyPojUKEoi",
  "key31": "4Djfm1QfKasef2L4v6wpX2ZxU87N9m8brcjsywMxuAfzezfD5PgKcJumuC44Niih85LQMjKaz5DCFM8GawbJt8zP",
  "key32": "2czQD369qrqEis4KAHq6keyQ5sE4oUJkurC9twkR5mCyZVY2fma7NLsL93VAAyH6xdZUqsNDbm6YZMmvM6bBWPuR",
  "key33": "2NYxA2PXsBxVWuWBmWyFEwQm2gt1dtDRTzvYncfjhkLJ9f3kB22n5Me4pswn1zapUoL8QPeH1frAye3tbqpXsmXe",
  "key34": "3XzVtk7NL65UaTRB5YdSqJuKQgHAwNk9Nic2Q1vV4fBehZDcefrTG8GHDfzxjCK1S6oW6phgYmuFKKnVKgshgowS",
  "key35": "5WhPV7jXdmzdNRnnDzHq8pjxpo6a5ag6d9jLuiYfJDQVtzPVa5KXDhWQcWK4y6eypusRMDxNGarTiZLUWYcRM6he",
  "key36": "pYXUpWZddfNoNB1bGqgZKiL5pS6XmGULFxcf3aT5SmdDC6t5jsb4DK65oyKvUvTBX8LUvT9VteskkmZbs6MfPsN",
  "key37": "2qzBXffT6b1EurH6s2nnig9TpSgpXx9eKJSwpH33gHVtGyZK6WFN9DnQBvVZ8tKeUmY4jXgN6DDX5EyQMGQaaWnW"
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
