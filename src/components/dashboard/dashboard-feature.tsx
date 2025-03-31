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
    "5hwEkTUksYio4D4E7Cd9fkTaeEbQeJhB8UQuCFx57qqxX3CDnR7qMLJCaM4qpu4yNYy9d6EJwyq2gZtUcB9kkcVe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kZtUGoPti25cFPPRo38C8PeJBbv6jfhEgWX7WZzJ3VRvcDYJVMLFjUpSuE817AAD8LRBpUuNgr2pWdHmoo2tpvB",
  "key1": "61fmVZnxHn4TTzBvpkCQHWQnf3m5UPeeDoiPayp64Py6zwqukmJ38s1YiDDyYVvvEHddWdTsGJJza2sF6SgPEf5P",
  "key2": "32fbKRup8WrhEscwSvCs5cCu9o4WkgwJQVZt69QV9xSDB9mnAxV8pzp3rMH33iLq393opHrRFmRRXjqyCPKboAta",
  "key3": "2cyYWkN7hgRcs8T9wJEM8PW5JydEEjaMm5ARBzMfY2Q3VYw6E7SCxVwK4YrqHCVbXRF6F8xkHPBcMWviniKQ2jFy",
  "key4": "23pLPTQzNfp4BkwgN5RB5tSFxVuEMGkDCrd2wYw4MTBhR91cy9PubHRcmxVzajjsgFk3hs2fschSugHX2NabUeCU",
  "key5": "4NRfBdJW4cvP6QuNTSraBj4gQz21rqDy6jGny1ab3wkxRdZFsWXCeMwDHCZyWuA3gZoSFKK9GK9Y1cCZA9kGo9ax",
  "key6": "3ikoxkdRv2nzLZtcngBPHjWM6xsLafszdpW54znKVZgqZ2Eee1kAqhnjcstM4bN4T7fsCWsDpDeQi7udERz6eiTX",
  "key7": "n1irq1Kh3NVZww9jYH9rHsePbS18dYcnq6D37gKJs2F5R51xQeafDesEiL3HYLXv1hRz6su7gjYKDzK5FPVTU5C",
  "key8": "BbrLfNXwjGaDgXXS8seL8ea9PB68tBHBrsmNWMffX7LLAshBzJd4yirEwfwcFgjx5TsiSauZzCUfvHFG3g7mSqR",
  "key9": "51ejo4qFk7GxCJXEqFraU49VQydJyDr6jsDjqjGjo3WcEoR9LVhoeUZ84x38VdCNebn5sFgB2SQdBNYpzbymxZRy",
  "key10": "2M4A234ZqRYVMqREFD2Pgzvo27JZHjm7YMLY7Jvxns2Teh5FJTKdoDVkFU8DehrxanyhL4j5B1Bxnzkd8ELfH27S",
  "key11": "3capnVug8uRyTePtz9P4WE2Q8Fc91DjFtaB4EehcMrF4eL2cdSFNTngfC5Y5MogK4AL1ovB2ucV4oKbRs3J6KyzZ",
  "key12": "5SLGbKwRCBT9PhZKbJY5CYafjsShNnp1TspD956dzkDWJeK4GU1H3HYUuqAEgud6r1iHEa2x26iY2Xa1nmBNJjNQ",
  "key13": "QbuoyAhmEky5zLimPoeDa57A7PiAj9aeqP4znN4J88NBpyYt7nLJTzXgiyqzPxKdmYWG1QSGQqLyfyA3VP2vGg3",
  "key14": "35ttu495bG2Vj8J1RTfM7Zpd7bKTUSgTKBGvzFD5MgS25t8C1BxH11wtrN1jZJ7PdBXbqFa2ThL2ocpzNywghj9c",
  "key15": "5RCVyPw3jUXTmeRFVs9cRonRLq97rqaLZPteqocynLv3vgJubPZmYseLQ3ryd3Ccm1ejRGsJ9dB5vEeB8cBqZfdd",
  "key16": "3ww6cD69ZBzmJTa2MueWXwEQJxjBeUiFHKKbhbzoXf5XSZKfpJZbT3Pu4kDPt6zVTBVsvK8FWfmvsHhSHQDrYX5X",
  "key17": "3dKoNx6Kj6qGQUXKgPNWgxBkB8LeqgNAVMmJ75L5Kf5F5CiepvmycWUifcApYVTukPiew8UaSpvKLceRq1cRdrgX",
  "key18": "4GJqp243aFJsmri7R68jventMyyXvNyFTC7kzHR4FuLPKF32wZ3avg8GWRDWxYSgpgNQba4MXbtZpPBZzQGTNjyp",
  "key19": "37s8gg2GKhkrrqJ4unohVxXvQFpPHB7fruZ3u3fmCAkFFSJWL8EtX6rWHBn2SKvCVfZtte2RyMavkdNKKKyBjqA2",
  "key20": "2Ft4JS8SZjBjRssZwn9Xw8Ak9ywhume2mEMgvMJFjJJtEFFTzwzrd8XjPMoRYmFtHZzHiERx9rEJjg1ZYT4atW1e",
  "key21": "5rXLQgHYS2JstHi37tFJHsExAAFWPYVPoh41r33R5Pepasi3UmAAnD5mSNZPoGwDP5K7ksctCpsRSjkmT1KphxC8",
  "key22": "22z8WNNotbWmvqjVvqD42EzFSyHQ8QKPtXVFHCnPm9Nk8kD4j8HHjv6vwdbS6TL3vXb3AiHXZWW6KQ71tjSgqXMv",
  "key23": "3dW4xuC7DVfz9e3Gwj9GbCM5eL5SRXK2VRjys1MgeGRMiYsSFUbuytReYidJG7x7GsUr4yByLXxMereR3uXdUUWk",
  "key24": "5LKm9r7supCbeNTEB5RYHv5YMbTTHjoSoSDQwdYbpQ5UMYmGDkrStus31wmthyREiqGRjBEtqLT6HYRbVB3Ktw5c",
  "key25": "58HNkzxcLmyrPwCk4AbbXBWC8ijYShzzNv1N76beb8rEvGF1LyyYTmffzVZSEb1pZePhG9ayCTpjCZDbe73d1WAc",
  "key26": "4WXdF8oF7vrT3S5eFybtKcWTAdpTDLasYtx6avgDLgkvvNiGUSoe7meNGmGgTbeBfaUiBFyU5NmeYtQrwsHGWVKh",
  "key27": "2EiNaDGEThh2yvuTh7UcPFuftEZiregh4fitbBbRrGK9CpHYBKYrEwrDawifNcwuFspRTgi5UShsh5vM6HGwz4VW",
  "key28": "679nHcDq8FqAVgiq4brDhRpVJn6whWNpN2Z9tXyS84b1cpyExshh41fDyw1pAGbfxSmdtPHHRtxNaArtt2ZGPEh4",
  "key29": "3FMtAacca6sp5RhkKuC7mudyEKQ325PfDjo57qJnEeZehKjVYSYSfBhVt3ejrEqfNcLLNYkLTL6LWbQb9d5GdrNf",
  "key30": "28SkkPMsqmGYawMtjySs4DmZzEJV11C7pdG4n9i6XeVZrre5jYN6oiisTKWeMkruXp9AH8cGmg5jEiMc3hxL3dfM",
  "key31": "2MdwJbSUZnDFVVBEMxhNC3mM5PdPN1qMXi56EMgP4KTrPe1M1hZZsp9f2fwxWoyjmxVTwhjkvLUxh6YEorY5YLBL",
  "key32": "3oTNpuFHfy3S76BVojM37DSJ53myCBFE82Zud37gY4iWaBqyhoUo6Wia576dFNUYnMfMyp7x9FSSUia9zrbxEYnK",
  "key33": "5G946yk6fBsn6SPh7YgVYa1vrYZCksfy9d98sohDGYBQ42iEpXEPRbY62Bo9445XnAVcxscaUrabaJjyuLUHnxDt",
  "key34": "24dsRcjhxDUckaFjKeWobGM4BzaKrhRtrcPL5jreZ2QdXjQypkiYsVtVtLfwnKDU8tUQU3c8Uhg865yVAbpKdKSe",
  "key35": "49oPgMMRUpwHg8dNzJoAr4qLUJRDF7P1Pc2Ckqba5sm8WKkZjNioGJ4pueSPjuYuHX5hR6iUhmMERvpTcECCua7Y",
  "key36": "21nijWghmD1fDRMLK1tBY2amdtXX7tz5PAQ7wwzLJ6hXSgaMsnnuVvx2QhBb5w45edq2e3hhT4vkyasgPHkhTGgk",
  "key37": "jRSoUZdhmkSL4n4K5gF7tPvFHtpnErs5tM21rqSemm5CBUMqadnaUruDj19PyzwxXKFQH4YVJLTYKv8azv7ME1J",
  "key38": "2NahnPU4WdozPdGiZ2G7QCK1CtkbMyVAueUvD7Euqo8oBAVDQZSE1tj4uwJkyXf3v1idDBWY5YgVoYMkyGe1TRrH",
  "key39": "2SHLp3Q3kX1p4Hv5qWuT9nQ3HRJYu5qsgAeS2j6eHqq6mGaWZbrjhGXY7uMFc5RDEJV8fvCqmoCwqVH8JyAgVu14"
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
