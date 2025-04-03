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
    "2VTHahR3QYU3otEwV9nabvM8AK69hApstBPPysh88zbdSo8BXYCrsCYstPBRQ2ttShe2GLsnCrgnePCzMivrH4da"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZyTacqxepZ3xmyonJxCLLChEJKMY44xwSGFpe3dXG78awC33rJHCsFmd5nbygMMB9wFZwME7549LmpKUFjFMWsv",
  "key1": "wKtuVqJ4vE2EsR7XvDpaQhuryUuPb1GiL22UjofocKNVKDFARcFQamKuZFnQ6jpyMj83BwDu3eggzYpNi57zfdc",
  "key2": "3u7rW3j9qxLdZXAQJzFmczBeLVtxymxPEcLZ4SkkFvgoHpxDgJjnFeCQ3xD5wjpV1Xn1SfmaqoUaPNQnkYyeqjsx",
  "key3": "uhJ7Zsh2R9ypURi3NktzCbnLrw3jyRzSWt67KhP7Skf2tcZEKJAbCSK4XYvbbaT7so5788xxgLf7AUApjrUPKtR",
  "key4": "nopYzGwBSdEebAbJEJZGWX4DtR8TzCbvcGs47S3h1M5mrmEuiEoab59C82Dd8VrpVLUqMckUqeeyEbeMhg9hkEt",
  "key5": "4De7QNFFP3PBzQxGjz1eY7ohwHdjpMEBr34j3dZc7MC19hQuRqzjQEkeKUop8CqrXxcPBUYjymBYg551Ww49Wxqp",
  "key6": "5uJPstHfkZmrT95Wxg1pSgiUZVQ3VLcTrwtEpsiBdHm8SBeH2mXdJas2ofQWAwFoDptgkoosLh579gqjEp1L89pv",
  "key7": "LEfoKVh67ZHEYFk5j672v8my6somyA4gLPnJ2umXNNvKzBYgXVjWD79V9pLgAaC9tUQVdX1q7qWBTtm7CSfYTgx",
  "key8": "2sf3zVEKqcbTDnr3hALjeAmQ1uqFKS1hXx9653fuo91yruJzVHr877vpHvBtV2ct4zYWVBUbqWGJQoyW3f3zWFkq",
  "key9": "4xu4s45Ptwg2bUCyf3Q48H1BL4ge6zMF537VKfzSKbSSimZFngFq6D7wTiFZwdCHaZHv8cDx4aDwzFEZLMsP4Yps",
  "key10": "3nTNhd1YJoUg77T1JXSZmvstnfT5smeVM5HTs3TMC7bvanMHpQJ3uMKJR6ZSYNhxPNk3iid3Zz9y9QjqgGiA9YYB",
  "key11": "ZxmGeM9UzoR6Rpve1JdiUgkEPPX8g3C7wMWGZQfdnETfisLm5vBhgXGEEuWXsDSrF3PTnfaZrmJLKpgNre8up3e",
  "key12": "33WsjNGL7Pqfb9xiQebHmL7dYBRkrDKcHdAAeMWuYJgz5wDLLmB5474kUtvqs1ghviDjz3FF4ssbxosEQ3x1Fnrp",
  "key13": "4Bm9K1B1LoV7tg5E785PhPpBdhh4SqfvhFRoN4TwtPBTGLK6t4a72RgE4v5K9EJ8BRuMZsQqW9r5v8SS2oCASQiW",
  "key14": "3UwvHkmzPkk7EfsE4DeHm5qcGr5QKGTGdGtJ1K3JBbdTCPoVEkGcssKExJG5f8G13ZzmwC3N3Tyh3J4GyY89UkeF",
  "key15": "FnoCPJNjd46ZWp2gsVyBJnSEhM4FDjJf7nYmHC35cKtx6A2FviJoCcRyh8sTYM1ew8V5EtswHRDCPPT1nkSRf37",
  "key16": "3iRX9VrNTwm9LszMAA3E3TgMyMeZYRLKmuRUHaCpw7N8tzMQ1TxfxKYdMQeazTpcDnrymSJChys3XeS3pjMfU3eE",
  "key17": "5MhYkPDD1mgG1sNbL658AGQnZbYBXzdcUECJ5SDPumgQvnPQfBFXAKqvc3e59p1yN4mxFTgKrk4gNkE1niPjcypW",
  "key18": "3K6CEMcLPDLtrsVEoqFLfcJfDNwzf3VAdwZgTFLpAk76NaZG5NLivV6GU7Voyh7C7jezem5TBwbamgdKDajhwtc6",
  "key19": "4hrYDFTfCU2tzQLSyDZfsAqtnetkDFTTDY2RgVmbLUsEVS7CEtVvdS28f5g8GkmYcL3RZLHzn6Bqc1d9YTBzX6Ma",
  "key20": "5rGnkbKTqWLgBxKiXDoKiJarC1HFVhrVmD7reZ8iKfeCVXHSb5qig4DQTejMHAnGEdbXcoWwSPRrzxaJVFZ213Ao",
  "key21": "5uBS4uxU83scxF8mKTgwx8CMKTJCKNosc2gUcnhWVR3RPwFc8Ze4s1e3RH7qxVgCwo9KSb5pt5CeQ39qDBvYeTuw",
  "key22": "5FZ6i7DSWETps7XXCSvBmY5nqDLDovh9fX8ETRRFDfvmbbevdkg6xMBQ2NxBCNqTnWdDjE5cNj2ihvotLX3GJA7X",
  "key23": "4oRafmAVABnC5fEGXZK7EpWLwknwAS98rhj4a3RtmErooHkV9Xt7SWAWanpczHdXtg4Sutm1dJYnwxjX9QEUTBBf",
  "key24": "3fJXnp3khhA5M54W4oH2fFMejUkLw18wdfdr57XjoQXzsKp2ZfCfht82fNsuDRmGnuw1NDKn375FbhCxcuBpB6M6",
  "key25": "4Bwt6rm7o4FqAzKTqDaxzxuP5YmRiszsAwzyEARzJaSgKQMvRQ1PuymjCck3pTuS96sp1G3Mu32CtJYXQSJYQQ8m",
  "key26": "2XtuwWBneAFEqHWkvn91v4ZMbCimV4CY9zCMQwurFQ9RmrHTLyFuJRopc8FD9d56WHfjnoiWe9oEnVdGiebyhq9N",
  "key27": "5WF1ShcDZY195iKDL1Z1R4T3kfSw3bEz71edSXKDbjZDDxVehN7LVmV8GK5fh5K7SmRTXonqJKhgKwAFbhTM27eK",
  "key28": "58QWgzG4dpVP736Bjtd9dntXtE6F3DoLTLtxkLmC5rfw48Xfz6kffTbxkKsA5EEpZYLfPoE4LFR2aD8SYmVP943y",
  "key29": "48hAZABFYYgV77gp8MX2N3trzKudqwgfBTS1mezFnoPkwX8xJZkffpR7eoDucXNvgwgZZpPcUHQjMxvWYyj2Dp9s",
  "key30": "4FMceCz4fGsQoYDpCj7Ea4d2Z6Cq6ovob9veXYutn8Eft1Z7277BAL2y6uUjCjSYbhhgbsCJnWMwHApVVx71Aa4E",
  "key31": "cacEvDeXRdozhKynYhhMccQKj4Ft4MsywZyVjvZevSVgDNu8nMZ8bWyRtKVCGXgv4aHFbngFGz8xBmbFi9goiQX",
  "key32": "2zWuuSgDLbSM7oDibLHPgmz6vUfKjmoVbKqVzwuyc1u6G2g7y7EtdtCWvECcPuhwKtJEKgbcvMRxwCnMUUSAkC7Y",
  "key33": "2aHy3uxnjbxSUbTYdBserJmeFnbsrxHRW6xQ4D8L5abkRciByH7tf6NoxfUMA1tGDjb1xBpsiaCFPdGAHy4iyp7q",
  "key34": "3TX5cNFfRxyC6y6GW6e3ZehvERM9WnBBREdZFi38XingWwar1SPm2oss3eGeT75Np8E89aY8S9cEcV92t5tbXCVq",
  "key35": "2BkjDGPsoixG9Bp7LJWzEf4pCrXop58uKkwpGVSCY5fBktnmRtDbdPq6YMKCgDkmDoyWkA3Xj8Dm89UHUpkrVkD7",
  "key36": "4dcD2u6jnwZ9UeNzjC1u9zwBJrsifuvZAg7zUrLiJBwTCqG82LSFYUJDtYA2RJu72BEeKjRHfuFeAiAeTPY5J57D"
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
