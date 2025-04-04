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
    "zF15kmMnASzLRfvpDZMtTdDi5aDazQTpQcZWCPSYSV6pgszGJ3akJdJiwsRmB12Uok7CnwbskeqteSYhGKMMEHs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Scdjqdr4KKbEYeJKueiDKjyqPxbjqqDtzZacxN25pgUkHKsv72aBJt7X7Dbe3aqidrGU1SHZ8wnLPRfYGqtnq9c",
  "key1": "4SMNeaT9Ka74nvo26cGicreknRnLTsroJZb5bhtzNQpwo5xipC8hLRVqK68PhzYrYLzdyrs9iD48GizCAAeQWGQw",
  "key2": "6FxrU4xivuBKVMzeLaytwwxqWx6zrLm2N1MaZtuK7NA9fPSbEzNbEARuAMemttAc37RF26M33gq37qBAep5RQX8",
  "key3": "4yvCfoapYXgLFqCSjfTncp7NzFmWpNeXQUq9HwX5htPYqyNF41Z9xrGwBrhgvp1bTJhm3SJC72KmiVUQ845SAEuC",
  "key4": "5sRaa8UC1SXyxfU7L8FHZwC18iN6r4Y1x45tzmnphpXi6xxv5W9N2KdHUQ57XUD2TiwixnWMGfHob4vhamNYidH5",
  "key5": "BKoXFS6QukQKdHvkdqEUxRY2U65UJ3tQAbzFcV8bUkLoMuR9jNSqAahRNwLEQxD2s1oGKLzDaAcHC8hLjDuYz5u",
  "key6": "5Zdc5wxGGa2DZr5b1wKJJmztwtLPzdb7uYhk8sZ2nKzGvUrnbU4oyNAMQyjJnXFbEH5VRFpw1yF1nu6hkTDxo228",
  "key7": "2HtiwFzHFNp8gc8wZxqTNPJazQQJZvF4nrCzKLaTNZP7kskuaQNc5XcpCx3QPxTwfVMASuUxr8zKkrktUWBevXUf",
  "key8": "5UZZra4VJa2Yin7jXMmCFbtNbQbnJm7wq6MmL3ubcucwrLqmRqkNhh2MFDwSCU6k52ZPfbmrdo9fLRhzUHnv5Zyc",
  "key9": "57siRrEqLup6E81YYsyFhuoNGupLLVT9N53F9HZLKWSwvuTfLbBEoUqV3VJpcpXWSQggK9kEsA8BM15n8pHGBGK",
  "key10": "2Xssbhr5fu2naEvvZfHDmLW3dfFDozMG6UqUrqXuJENUhTuoZ55gYGvKd6Z33AkYf7TcJnhyk85DARqnHuYvBbQd",
  "key11": "37eUDHGNAGrbNgrVKgeyUrvu4Lwvtdcb62ESwyUvi4Yn9AHfKjs9ZYviZV5xTqat9MRCDiyLe47MCTY2peLHhevX",
  "key12": "5Q16KfkJCBvrSDdgAeoE48oc5FpUo91hRps2TKWc145q14GWzFwCfX6GqW28frc3ybSJidPKeVZFwGuPf8i4LnM7",
  "key13": "3nXpPLT1ZY9JLz7Ays1VA4ccuakKBdY4SueCvqd1kHDWX9TUfFiqsW5wZKxBzQBawfjm5ZXWJcnAxMYgeKZYqeWX",
  "key14": "6K1ryjzicPxgKEdXrHTKESoaixQqsei72Z8pujN9s7DDWCQfNzQEgwks6dMTT38xRsTKfZVSkfNBywzcxYmZ2rJ",
  "key15": "2JZSqoEwBP31JrCSUaw5EKwUEqGWrPt4oBdoTQZRV4e83fyyzVaLZm8TEJB9h8PQPXgh1Z93GfHVxyChWWdq5EGo",
  "key16": "aWUPwUA7bu2oZ9b3ZLdNCVJ1q7RJv2ru68ucwRtFXsJ99F4Z7aTUEfZD4h3L8P6X5Wz5LdV29Svbo41DJ4AWSL5",
  "key17": "4SmfvjSDZ2pqjsr59FhsExDzMY6Zp9HixqjhKNjsaiLsygQmjCCYvhL9J5fLcsEBq3mqgQUPTZDxGq9kHkSy6yrg",
  "key18": "2dxUkBf4Rgy1wV6B8gW7hebZYzToEuod53VTQqPsTKohnyKpErPa9wBErWqGFeg8LLhkTuk7rvwnfmoHQzrFxbfB",
  "key19": "62MdvLnFvyX56gVfEBZiDcCapmPTh9Qbf6uUHeZ7CaPKhLBby58aVZLrN2pgVG2vGpPy9y6XqcDuUwCaYGMAgZAt",
  "key20": "5PZEusq34ZNaDasWjE2kPWC6TsXRREjTdQ58TLBJYb5S7z5tQjQ7esTwY5N8ncKRYcvHkSDbWXoP9jbgSEaU9Md8",
  "key21": "3fWWk816ne3dPBKMUqxznb17UDLpH4zVnZhQ8etCsh18VGtLQBTvWjv1FRUe73Wy7r3NR23MhgosDjB7gyUmBULA",
  "key22": "Nbr3qF1944wJVcVo8npTtLrwneGAioVKNGhJJNTmfrcnHev4LA7VfR4CfNSqfabJWbmisQzbGpFB386kzLVKPPH",
  "key23": "dzDuFWuZdgi4k5TZcFxhyjyEpqsdQYhZFbCExBagE6fpAQpw65KZyYkAkvzkU6pAW2oWWqD2yTGg1fHe4iDJsce",
  "key24": "5DKYtoDuSF5MmRcy8raNbyMyMx5jMMqXE4bhfXRcB8EFJq5aBmwvYsUbwyjTgD3EckzBp1cVcLmqQzQrKxXiHofT",
  "key25": "45sDkY2qm1ZAMabUDwFUUwNMZY7mER2JE5ihdTXKhKruRirSww3FfXtM7mRTk2toh5h1vaq7QnJLLD22R5BN5gkg",
  "key26": "3pTymtdbo1ykHYWuRS9S5cZkwj7gPgK7jW3AnRsMTfSdWJeowCTcwPRMm5uj8cPEV6cHfjnhv1C77m64dWTUrTHJ",
  "key27": "65uimMv69odFnGAZvaHoz5btu13KnqSFyV5JLxg5LJTqYXTLKGScXfHibFpMEyyp4uZoVNGYcTAswCPEeGCkCFrH",
  "key28": "2eT1PaWy9ZknDhT1KyCa8Pu9eAzXKuaCfFUTikemqQnVbA1GVeZs395uVimVN31HbWhWog5rLrnjjgJM1WLNDfZr",
  "key29": "4eTLJe5BRWFfafsfRD6ZPBp5u35aJ9RRL5CcaU5u3LCnz6pKoPpNUk42Z6PHheFF1ixm6hDuWM8zCkWb5DkAUpMH"
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
