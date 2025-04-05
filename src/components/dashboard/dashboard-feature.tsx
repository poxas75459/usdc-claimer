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
    "4NPokbyQ6JrMJSuNwWJxBwztsieLwqNmbvhfZjvq6wVpsKNCmZ3EzTEcTGDKhTNu4oNY1UiatmTns7oGReFFcurA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t5SyK5KtzNnk2KruGAE3BoAGFuqmTri6Rds3Faknjz55geooaoh14ppr67AnAw8anf5LEhQRtVxLLgrZzfVfiJy",
  "key1": "57P3L4HgE4frhM5TAsYrfCk3L7fHdeCLRyvJSwax82Xn4NYZLZZmfkSR8vKr5uHtcnN9yQpVDYGqcGxz1JU5sGsL",
  "key2": "37MCmSUsA8gQxEbA1ACimUrq8yfQMePC8hYFKA9jJ6VFiEPqs3hwEMULqn7sqmsB5R2fEENdN45fBQGJ1ERBsBsw",
  "key3": "GXnUBuZtwkmwRecYCvtudCj5E7sz7qeWRrMCAgeq5SqdNwpterVZhUJDHNJV7zshQFx4uBiYvTJyuZeaxMLfeS5",
  "key4": "4bmUPeNvqKAuEHRuWBhKQjpJuz9Tfzx4FmcRrdNYQpv6NAz7wQ12ReSuSQgNcHGmH6Zb8YnwXoiSEgxxfphj7bwR",
  "key5": "2ZrvrjTQEAV2ao5Ee17fRDAWdgvURGZV26Az5hChomEU7Q2y1m6kBeMKCdLCJWT6X2ddG75nKTYQtRPsJ36uodAD",
  "key6": "3R4Buk9S85BRsGYQjYQG6vVrjG6vd5tagTfusFodurgJJMAMYWQeMBJDCpmSTgm9T4aJutkVhV4jxCBV2b8uF4rG",
  "key7": "4QgUYEC3XgizMsEZSqhVYNQ1JHM6Y7HFhT5vweyCfTz6o7CvP8NjndNrJBcVNXVW6cbVUy9F6rUGWSYTUHwTAtsW",
  "key8": "42eaU8UFx3E7KQ85T9XwaNWC6k2cZHaNdgXWe6RkYtsijQPH2FWN22kT7z2oyKV6ghVdbe1fqAzvATCS2xMmPxJL",
  "key9": "5URJYv7Lg9i4Kk476kSbacqD44eQrXhHrktWcXGwexD2rMoE9yiRLpLD3UT6U3aF5TngvsZbWPCtLC9RCekGcutK",
  "key10": "Z1zEx6W3hxC2GUXChZ5GWShrPCJsRqweb1nxx52p2NzJx58sGK5Em9ZGfR6jPHLBncxseetd5DzzrTdLstwCavi",
  "key11": "FuzJ5ihr81MvQMkn9jteCTgHp9t21PVkUQQjimocT393ehKXMPdU489SaZ8XfqHGQHKuxkxHv4tfFm8zLuep6zD",
  "key12": "4KC5FMagU9TabqnQtRkgZA9777qiEoqv2VLrQznxCxAvd6j2TP795txZ1vTUvmqsoVPiQPENtgu7W7KxhgAqodu9",
  "key13": "5rMEqhEfhV3tP8KxU8GVS4HUGjvWrYQ1LpxVaz5Qh3PGGca8eDwEe6FnXcupS2154xfaFQKroN7YKyA17vtr7Aw1",
  "key14": "62KZ9zBiNkvtcLGmNT6EoTMqiYYEX5CtsRGXk9iSQNBVmj5KeG5FQvGHDpE1nuiMEVHd155bQKq4FBdXtWbq2GDS",
  "key15": "5XBVtZk6FvQB9HvxfnZWBuohf86didd4jkFfD3BTbngGd286DR3XacBJNDovfKgWLZDRPXkpB9f4qYYVubqk2eD1",
  "key16": "you216awbD6YRpL1rvTJZfVBxoYc2ibWbhQDkUeVaHuTJqEWP1waNG5LBx5sn28yG94DDAxua3VE7x3P1nUjiLM",
  "key17": "58AkqeDZxM1JX3bQYXdJE7V1Az8Jgg6P3gTtedP24xh6p2RFNYKxo4T78GoN9GMSTw8jhD2Zx8J2PmFrxgYXFAg4",
  "key18": "5TbLmJDskJtTLN8DWFbp4SzBjqhwc2Nfz3NvtfN4c3S1ftUE73fS4hxoxsMJnfxp1d9JPx2Kn5hNk8smjAkXD1bi",
  "key19": "2mEqj6a8WK4XUz5NyKbiyxWNBCvL7RTUH91o6r1oNeefuymxZswFaDWcswPVsmXiWr8nT7jRNyNqLj9St8QCxiLc",
  "key20": "6571Up1Qu3mcfF3bKnV7GSeMEQ8RM2RvaHM62c4tLRAFVs44vEZiSfVHMkoawH9FC4LvVfQpdYLjCiAtQXc5kmNC",
  "key21": "5jaenxPRD1Ujt7h6z4g44QTYJKkc8y4J36Znc57KqS8QsJqMk9kiHhTb12CE84bpcUyZQMTsridZ8xGL5xe9AefC",
  "key22": "4TLwRrs1VccWGKpA9o7hEVuADCX5AgPJgXBx7wYFPueZvsLwkeLbxaXMSGRPT3fFfdTuCqWmJ2v7QqhBjnKaYPZb",
  "key23": "5s8k5CYSgSJaME8djhQJc8JVXcYHKxRriYnJnVHRG8ef5QExMQbNaNNt6neF6ckJdPnvxSwcv3PzdaedU6UKC1nC",
  "key24": "2FV2h47RnReCv8CxvVQaCbHvX34MQ1WoMmsD4oSB4CDsWnMysFdY5nEwrRV8dyr2htDKpEpLjrSgWX9scvB9LvgW",
  "key25": "64LdEt65ZpitLefymdeaDfP5YL89ctnjsgYnRp3Q4Aw3CoaK1VJEb5y61Pr5LF5mSzt9sWmQANPG5e3AW22dgKkN",
  "key26": "4tbJSkCg8u5v8JbgTThs1xCbpLhZRH2iEBnv3kKcjS9RazCw695x8rJokKS1281bJiCnRPke25bTwwPFe5QJg4oz",
  "key27": "8d2WH7WhEefmkuGN7Q1x4qfxLULaw7dVFMJ2wEfKog199s9nK2uFQGDrtqeBc43k4q3xju3xmxBkydTCU2XnjTM",
  "key28": "2Sx1XDYjvJYWcsgszT4d4G4kHganfNi1x9DtpSPspdmMdriQjDdjJJbFraT7HY3yUNJoFypdbQS9wHAME8aJrNJJ",
  "key29": "29A6HBtzMMMJkaTGxcE4iDZS5CrVVMAYc2jq1mv2gu7juMLRhGpczKRzVnnriKL3VAFDSDJ1hMnPbNGosZwoeSsP",
  "key30": "2ZCLheuwCpWQpi1VK1Po18A5ztUh2ZLh9bqQ6ZViYomGRqajhsRDjTQpNKHdAYHLqtATW9RMusqDmkMhYiymWbdZ",
  "key31": "37pLqvULxY4pgu9qWynza2EesrGYMxWpabG6YaC8TpSCQWganRW8KPXAjN34xRztbdaeNWswCaYdf5h3gyovX2L2",
  "key32": "125Qp1aPqbtXhXpV1FYXp1SfsAvGEejPqaMeR2gE6TeystgJatWn8FAYQ5aiKJc8tFd24eSyQJVXBMGHAaongmio"
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
