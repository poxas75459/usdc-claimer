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
    "4MQQVzHEiX6YngafDYzehNaYDu8S3uxTJDoQSxjCYJzLFcsboa9v9YvRjNSEJZP8DUjzJjmANwJcz6GaBZBz5MZd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WbMqnErNi3quLu4yhtVFucm4PwfNJ9sT3ywF5wY6TZBk3ogeQ8ZB5obYTQP7BEw8d2beUw8w5WxRHn9eU966mqq",
  "key1": "txjPRHFedGtQTNvNbwfJKHzw9gpqaBJyckEJU9cs9CXzdmNPtM9HEGnf3x4hQWgi88PsVysF3dZDmV1TLBNU5k2",
  "key2": "cuucGPUB5mXr87Hte1GBL52xFoNhS4KP4FQA4cWzdRLKzRAS9GakZxr3y2YnyaVAPTuSiQzMMa2bw7UhKcxQGNg",
  "key3": "2wLPNtprDEbhSTgVwiE98MYHxMu2v9DYvRaCaydbAkQVRSctzZszAKxe27dtti1EDwtXxq1aCuSzdBqdAo5VJgA",
  "key4": "4FsuonPm3iCFiqZfaoMhCndRkS2k6gZ7i7mDxD4GVCG6eFN84y5fC5ZGFtWp81GX4MnWqXzjp5WrsMkfN8VdBrXU",
  "key5": "j8i5ftGS5hRupNfh9k6yrKS6cpD1SJAJrkjQ1hQn7JgdSRqGPBtCDPpMnHbhkFfMusD9nCzWy6vGynJ7igPhkGw",
  "key6": "2RLsvSTd9Pk7Aih1pCr9ecH2GuTu5enrWz97Bary76u6vwjfRXAFkq2VTXc2AWntu3RDc1f9YBg2shySkJxGQz6M",
  "key7": "5ykgg8CcXy8E8KgqichDkGELaVJ5VxpaSHGXBatx1ZD5PW1mZ2TiKxHmZc3Zd8zXaMYtz6XGc4Q15vwKtBexEn17",
  "key8": "5UJQ4aZ77N9c6dnJqufpL26fB3hQKNoHm7nogkv9Hd4r2nZTrsKGaM4keU4yCCfR51kiUQiXrru1wgRTxSTPeqP8",
  "key9": "2LAynS2UjAdPALGELAbJ6Yd68ajrgQevyFsFpGYb97WBuU7Mkcww6wztDeX6enuMDCY7qdzrpiyyGGB2Cthw7yJN",
  "key10": "65PDHxCKWayv1gkeLGMynW7tZmK7o7N3UXwH22P3cPn7znp3wT1VWjbz5KhHAPi8yqu5cWJRggQAAHarDmSRnjBg",
  "key11": "5seziN8m7dUjm427tXBJ7gtYi1mWUKwtpyfrDZx6i5bfiNxq7LqRGit2jThSLkfNL3euZBSGSATEuCkCJ8ch5LbC",
  "key12": "5WKxQdKrT57WgtmHFk6ymbVx7G7PGMVG7RpNw6VYVzCXP5FeKMbtRwUwWCTy7A8RsuEAoFHiih72AAyxjciLJK9u",
  "key13": "5Fe1MpKz6rkbxTvNbr9jVvEJLoE3xJYa5hcW8eD219pWenAGTHypgkTWTdfHERY8NWpu7ajfB8o4f3GKWZFC3JhH",
  "key14": "2246gNPjSf1NmfVXCP4NCCSywQipA9sKq1dzhixbEghfNE4ULeLqX9vAr2XgQRm7YNL66mpai6h9ns7edqy8WgcR",
  "key15": "5vYZcXq9peT3SrSEJaQAmoRMZ2kREM8miERFWbgmhR7qQ4U6CSY4EsPwtsQBnFztCeqzqd56gSmaXtN1j5npt1DY",
  "key16": "5mD5iV3dLw6GwtU98aW5ZPVVvXQQiJotxFssohuHmkijg5CFH8MMwg8ZifHHkhJiadyvqGdfVoUgBcsMZtNVKVgc",
  "key17": "25KgZ37VmurSxK4dSmKLCNZMRwmqbDGhM9BRyNvG94Rj1DmCnAPwyShUYo837RMeFavArii898bNg47DZh2fmshr",
  "key18": "3bGEDU7kpi2wMmJBbsVNSNptUtLKJ8M1QCS7iLt1f2E4n1Gf89aH5LtBfkup9qujCiZ5YPsDDnaZxXZfzQcBLHoN",
  "key19": "4Aj5SywwF5p8gz6GC6SPfi6fEDdjWXGnLkd9iG48RStzXCK5s9r32YXDgXdsDesmoudkV218ThtK3RuvK5Km1sRz",
  "key20": "3Y27KHCdSxMrzXpNCbAuweNavaRXRjGVXPGRLPwzffseqUR3967g9ebRKfW6kSd2i8cUpVVndUbdHnUbbVF36qaf",
  "key21": "so4We3ajaJK6yZG4VmFtLDczT7NEwZX4QjnoES1gGkSWBnmZKkBRJv3Dsz4DiED9wKbfCvSLYLtexdW2aQ6mozz",
  "key22": "4JXqFAWGNBnJ8ogP6iRhi2pq1gFFihABEMGheLf3i1pdrR3Aqn7yHjHB1LFz1oa31dq3TgPJMSoMVtRaUZkYVxyJ",
  "key23": "4ePGyLfvSFLFPDC3qq1sF5WHhqcbUfKPpSUxoqM8Goboq5QdYGmMrmEx5wev8NnKWXqjDF8iXMWqh9LJofANPdCt",
  "key24": "4vigEzajE2o6xTdM12ZLMdphL8LbzFJCtKa2m4kjDwcpy1fuD14mPmP4wfMFLdqNdxKZeR1vL8ciETgyvPQHE2zX",
  "key25": "ppAXJQgnmGF5s8dRboNM7ctQa6Y7hX4rWp1364ReJVWrGborvJzWnxpNxmDP6dyoGX2VUyj7wsDu8n6jjcjPwoX",
  "key26": "2SkJ3dd1if8QJPoTN7zrqwDjHPvKvUmCNq8wx1tYE4jF3tbuHTe5DbF5yY1tgvLQE78r6piCu5CwV8BJ3aEzXyx8",
  "key27": "5JCtVC3aWfyF2cLQNTyLx1dgFMZZyKkRUQEyqEktsv3f79vgG7C8FvuHhRyp7Z5w7rfVtPoUpGGpKqJVPvZUeVr7",
  "key28": "2i1MbAc7pJVCW8e84bEv4uNZXgK2h3ine1G6ujiwqmX2DUegH6oEadm7Cv1V6wBUP4R6VRXStCMcbS5XzX8bLnd",
  "key29": "5CrZRULMYu6KVSgzXhq6fJ4RPXmG8tQdiZddyUF24EoQnYSdrw9aGuAQwVtB5n7fBL4P1pGKqVpnH4F4UA6CJqqq",
  "key30": "2BvJoefnpnUZt5AnqfHV67UpkgWbthcGg8GwBi4XjKck1ShaAwUDnmT9FcB8T6gCM7nZDnn5imSg2Hzt9YJXRAAz"
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
