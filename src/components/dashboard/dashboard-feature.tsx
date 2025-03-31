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
    "2xU7eSYUUTpTWFyCkZTLkX624wxZgqWmBFBVJDPb3yrUnaV3wW8yLa1gCuu6hYygHemkmwF1JhxBfAo1Whz9vt8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JaKFATxyhJZzmQAxTQKE8UzyvihrT9BSrmt5eYZBVahMeUhxL8HR5cfLmcwCZ21TEb6dWouiUBBFNLXkVHGnTzL",
  "key1": "2U6s4fDUAiCX6kvQ1kocP9jiZ8i47VBJVNHFQ8qydKazKPccKHXYkMWzq1ahnLQwCr8uWzAq2zdq4C6bo4piHK1H",
  "key2": "2XK1JMEyy2JNdVYPEJAqCFJwuWN5XrEqH2PFkW427ZYbjoPYBuWcEvGNw1WPkkLRhqGBNqKThFACQHTLapFMu9iL",
  "key3": "35MVbv5TxYpSXYx4W3cB91eQ1WW3eCQwLDgy6LVDts77xjcRkE3PHQ52XJfDKshdXK1UFA8SyB9ML1eTbGiNG9SG",
  "key4": "5mVUeVPQQaxsMhLTtstk2BhZtLMtn3ox61yG2rTLFRbVu9AXJnMoxF1c2uNJhfycT757uc2r6mtV28N64vc7dt7g",
  "key5": "2aH26uQ5WaeGGgDpP1nWxQQNBkDGqwe88ZALnWxQUXu3dgfmaU9tLT6gEh5JpARNWFT4StAApcyjB5WswvHjYiPH",
  "key6": "4QVSt1hB75o4pqxcwVuMp1ufZ4S6W3Qg9U4RUoyLomh5d3BmGXi4xQSxGzhMX9wevSa3MCddPQabnViNpv5SU4Gu",
  "key7": "5izgd6ruovgQe4chvBrUV7X9c8UosiJbFLHokVLXPgqpbFtAyt7zwUazXVePSMrJtcoHx4pHgibAu15j5qq8AotZ",
  "key8": "dw3fiRG9GVtgsorxG3BRLXm2Hq3YoaeVyCteRPsu8TBw7kXrMiAkpEkxa2thjsVJ5J5gJ5SxZcVnidEq9Kg4ZcQ",
  "key9": "2s8qU7XAUMW97UhyB1ZHkoumBwL7bWq2RGXj8Ee29VS5rGxmcqUGwMjQry7vyU2N822fmm3UaZ7xyyQNwDW51R1Y",
  "key10": "dBGvpzb89AC4vDw386sxnDqFFwMLBqSYZxNhwV811N2gTygcFa6wfGVkXqRgJLAa1YMkEcxyXWnLRFwmAqzKHhA",
  "key11": "5XeBFZZNLocQLQmQmukSFz6ZWEBLgmspzvnPkGXAGxMwft4baQvf9UoPBuDK7FUf4NAEh1KSzbzTQsJqJYQ8WXoE",
  "key12": "5a2aYZxKgXAM4BMnsTSDpf8tLvBzSndMdNoeYapGbeY73WQqHbw6v1EQ1xePXTePRrmPfSB4tWfHUHVYJKyJA5Bj",
  "key13": "284WNMEpm5azk9WwLZYPJMzNU6ZpmThTz42hRDiQK3Vd7c6595m8KtzsUQ9WhtudtkRKjm538ad2E4SSdSHPcTbk",
  "key14": "oxSn3X8NRBCNTCYn4XRiffjtrGXPfmbCSeoGwKRUtfoWSsenggwjHW7gFyP4WyPC3N8Lfnx4g7wV4Th6qGC75Cv",
  "key15": "2Bdw66KFoj9HvuBi6TjmCRF9xrTvT7yJ2eVs1jv8P7RkaMuzPRMn3dod3onVpEaH9cEmpDwteLKGgCxbZL6cq7RN",
  "key16": "4h7i42emfVcXAf1V3zaJTsCTAiagDUA1icFddC5pZ92AdU5NyR8aqahNoqm4XUpDiD3YNg4FHCTqeh7N4TKZ1FsM",
  "key17": "61HC9kRhWEGxhJLqpje5dfwS7kvjyUKwjBScCdaaPxGFKoU4RuANyr2SEDChpu13S4sMFEpCVC6vL5zsksZCfRpQ",
  "key18": "3JzZEmkxvwoqC7uvWpJ1sWbGwimYsGFLAe9m7SyEpXT6iCRr7dE8WZmK4sZ4FJAvCUKzZGEE9Kwrrq6eHf9csYoC",
  "key19": "2guKq1MG9SGvYeyiHxfbQuwAesqME1ub7HrZgvLTXneAC33DRHc5mqmzcgJCs8aijPPZvB7jTWnXraSEra1YrqNA",
  "key20": "5oeDKMPwG16uRnjHep6m4Z7hEnJEqAbPrNU5uABp3AfNvMxDmPsqAjrpNhbiRMsqjey4HTS6fWK4DLYDMDpSpwoU",
  "key21": "5yYUNfy2hSJMbnmgJ74VMurWodKe3TE1x31nirYq1mPJ2GVB3bAGDucYAdknazH9hKxmKCa1ruT5Una6SxLf2cM7",
  "key22": "ANsTEwx72hk4h8NZXgbWyT7r6aPsW45J76bbrk5jLhaWpUDG3agmsJHaBgE5Em3mRUpRgrCV4hgnbDcSRxmzwDd",
  "key23": "4szCPzGaPcSoaTw5XrvQQX73Q5e1cnCkVs3fZrCVEqeSXHZvYqUQPgpqZf6ucvvrDBZdqqHkpar954nAMwZbanMj",
  "key24": "hW4TQgNZbKYx7UzrrVzqgYpLinkRmPmY5KDUoDKXXGH6eSmbpgowgDQrFunK9HjYsyBYbodcXMJENKVA7jNTDWD",
  "key25": "2JexiQuvYLVtdDW52jZWAzV3aMCpC868voBRBxyKbwdEhZAsurc3cu5jDsnCc1QHM8susVHWLBb5h7YaQ13YY4Ay",
  "key26": "2s1GyMmmUaZ29YCB23s8ymVCS2po1X1LiGf12suH3U6j9W3P6vDMth39m2gXLDM4oDNcXXKNnaQ6qTbYL2FoAARL",
  "key27": "5dtuWVQw889N56dbiSU5Mb1Z4AVQgdkTvBafyY7yhJoy1YZY4ezwpDEA6QMTvLLEgnwx3pBn6GxGQJ63ekeuWvyC",
  "key28": "4D7vBJXpeAgmoNw65THr6EHQ6658kKHhtbFDpuzM7ocjxoe3azLxqgUTZieSCLbrJLaKy39uN1Poi6A2fAF45fFU",
  "key29": "tLkqnNb8ii4fYLFZ3BRV2fMJBvga1iR4qBLFDqFc9mKQVs36be8h9oW99pcSYT7RrAL7P7WZykTEsRk1MHuNCHx",
  "key30": "2sJa7vDQQEbahCjMrTwFUXeueAw3SNP1Y7gyw1zi2LvmXbbwrgFQWM9ZWhMvzbKpbDzxSmCczBpqJXVWWoWnRGuK",
  "key31": "oqn1LLtFAEKUgPwkMEdPzLKsKPZzQuxc4i3FPCvwuHULpjyrmeSc28oRGDR5cddyiXyzwopyWMtwsqVMKCCBVaa",
  "key32": "eookRKSQCfADz3eTFQWQf9LDsJeha25Fqk9GSkZ9Mus2WAZDyDo8VeeMq8ht4j6hvByvXP7hAo7fkMVjZSqyF9a",
  "key33": "3r7TdESbhRm72uqCsmm3BUSdhYCNLYqj93RvB3PL9bVXF2L27BJRAuie2abcpsbbyoYU7e5JBjRyhs9TgXkbsaAs",
  "key34": "ennYxHYCQVR4uxpH2PtiHjnsG6f9YRm9JEDtc4uQz4SKnx4exCyvNEaPfTPT1rcfsiAWmaBoaMDe34DqSB2FZrb",
  "key35": "2zZy7ydSRoUCqDg1GVC5fK6TDQzvAswZTTfSUrCsuxbrLVcC7jFGvBy11G1K9Abkha21sLUG4vWUgU6ixqPZ71ne",
  "key36": "4KdvK3YdaYaW3rg3YWVcijn6aNEQhsGeuFu3MtF6pVvc6xwnDE1pZkGqYPe8TUTzAf25vVqzJ2iQLNBYCCELetmi",
  "key37": "3yBS7dFaYrxoixfxgqLwNF9jbdyYQHFBbBeQdXUD5386xFL9JDdheLZ9vWfarhHJZUrtJf1XXubzmWr7qgo27czQ",
  "key38": "3X2fam4LaCtvd6wGfbPWX46NqbkbbAij7nyVojsPni6AqLW7qmP196X7pDciQxdrQEtxSt8SMKSSeY7z5MEjUgxp"
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
