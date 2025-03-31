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
    "3AKk4Fs565j3eAZ9pushQ3HNGVyNyZKmemcazybEDLeJAr3yDEWxDu4RrTnrAEM4kAtV8MojS5icivYEFQVNAxPW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2u2xmRNJF6oPJNqNhCvQwfgNkWSQJMFkgPeGmNJAxpbnLzMgz3MrYq3jxFafUSJem2Nv9XwwFdPWQLWo5XwmGSYA",
  "key1": "2Xmex67mBZwKLipfJgzsB9iyPPqWj7V9z4XAaMMSctUja8bg5K66QXEajGZp1QY6nhecBFK2CR66A28jfzE3LBoB",
  "key2": "3eRq7DbTPUZ3N8WyySMTf4BVrm5DNyBqRoM7atePLTNzKpRfvtgqAMd4FQ7zNTrdm5qy7WwGFDb9LJ2dSFeNcSsb",
  "key3": "4f5eVjepMh4d5FfoduLohi81bnYKMU6ey8vBVdY9c14NsoqQypHpeuUr2ArsiMJnoxKNXuTHRY4wTmcs35idkNxN",
  "key4": "MyS4Gh8bKpQELn5x6CZgN6MiJxDnzfkPy9RV9weFeaxronvL7QHWjGcz4yHtNDhsT2yttVfhdBYYLYas64hr1zm",
  "key5": "58aUKi6svWmNSUcuBG6UM5jroNjJAEy5yRdLgT9ncpCi52HBiQh7mDQmB4ZZTF87d17ayiV72YPcdNXHRs9AEbT6",
  "key6": "58VBLMhaV31fbxMPzapxV6HgtBr4zKoXhDXRoE9w96QdKbdkfXwnWQEEyfnwYCaH5wJ5gmmAoMsFkx6voFyxrcDc",
  "key7": "5cSekEUrk16rHcj2ia8WJRx77VXnXiVTBZWHCb292VwSdfyVi8c5HoRy9QgiEvFK8anJ2ypTmWEtaBTXar7erFZC",
  "key8": "3cwA36B3c7B2Pj6JSbSUFhT997yxqTUKkmheFWV7dFwQ352eoAJTf6fAbgUUTkeYCEyhX8xW8t7B194wkVd7dqzT",
  "key9": "3UxnyyrPuncEWDSi3xYWLjmG3mc2iZ51hMCPVD43AqTKRLpYUBYAs4Cb3EZvVHN4XAYYfTzAYbpzMwK21qgYXYcR",
  "key10": "4A1fRWQXSBsLL5G5aXBuSwrwB7TVE5vhEqyG49UcQdZKSt6xKkB7Wf4y2mDbmEtycbKBgMiHCE1oPxYbrD3hEy8v",
  "key11": "39KHDKvMAskyMivuRRDUkppxXWZ1W1NQiHTSCG6TmSGtVQTqanFLto8BCyyZRJMfWwCHqa6ctrMr4akjFqh2FWzx",
  "key12": "3KBwxDMF8dT72iqgGfWCf6iJvNFq6KviS51yTfzC1tg75SSNGbpDzxnPpFkzSgQHm4avJj9mHngwJ544VkzriJmD",
  "key13": "dUtyQi4kASuydMC3omeCrhCGCbxupVaKM7Nqfxo3LDWUHAH3pr4cFCPTtF8SQUXxC25hhgqns3hidzZWn58Lf72",
  "key14": "5kuTBVvKs6oViEdrUoNvsQhx4HWkNxG6vYLT7NsAwCVFQqPuQAg1o7cnP7VpomoNFpjLAnABNaB5BFzYLyBRCRye",
  "key15": "3DpVje3zfPQ82VyaUmmW5nNMeWpUQucNze67RwB1JUecXP59LdDMqmmbLLM6jPUu4ztZBZN4rAWnz2S754pfSEvm",
  "key16": "5FF2KczVARZFHt92tbAsaGA5oNzcenFuh7WQuUCqTWmskWxteXNQaGRM7DKtMFCPTP1XCVikcVAjLHxUunQSR2S5",
  "key17": "2C1NKXgWxviUFKiT5kxLBkKeSPYPRHsyn8iHB6Ycy6C3XvZYp8xptoEp9UFnBGLLY76JUpuPpm1hnqjc2X82Yxa8",
  "key18": "2brcT47EnXKjzieGAqQsnvhsueQ4qvECMoVJSZ95LsKbA8Cy5u5PzvUguEVqmEnjRZTvhr52fPyNqX4QvZpS5PcB",
  "key19": "4X651R9MoSkyH9t5wMDdmLB82ftrLnJPy4uoLmdh1pQwKcHUzvigY5FkNaPxHT5CxBAkVr82mLFnmMDRJwg3dd2h",
  "key20": "3jkep8gL8Fo71pWM6HEfjbjzBMTKJGANCtTcPcgvcatoKjnW1grpYGnsJ7UGfW7aj1wCrRKV5HW9fu758djVACyp",
  "key21": "5dFQPj5tzsNrLhUoF6Jre8wz2NfLGG9FioUHeBQbQFEdt53GC5BpMNoRLZRVWJ7YjMKVcEw5weYTuMf6PuUtMzHR",
  "key22": "468jyGJ7AAHznpqWgcmTU2s89nghP2efxdn6tBU399UgfTk9k9cf3aNmjbn4nER24W9BKnpBoc6j7b6dh7rGXWAq",
  "key23": "43h2SiTXio8CWoFcaCa2YuadmPfzMBqRYALYU3hrXWHk46FDZQFJZ36pef2TeUPTVA2aBGFLSa8Vjdg66TZNW5Af",
  "key24": "bwfVZ9HZPdECEv4yyifyHUqe9Qm6oVhGHzdvjH7BXR5oGK9BEYeakuj4kJwMeR3kPPLA9Fo8vDs1NKG5XgWW3gK",
  "key25": "3Z84KZ3nB872w6bn9DCEa93u6X3wqH24mw7J8Uiqd5kzZzxcjM3qt6HWFKvgaGYG5L79QVMPKojqkJMbhy16mAyK",
  "key26": "fTcZ6SMGZF6xbY3TkSxqA1qoHzvqcR6n8mrdvjV1Qh2atjZHLxfgK8XAvvCCuZQ5LjJuzTxHgLx3fwZVJ6k7v7K",
  "key27": "55a81DH97NvwiEsCMixPCZWECeAzKem3D35wxThdo5P86fYTDJDeWyqUqTamx1K9zWGoNBKBzjwNskxJCFSFLa5G",
  "key28": "5KKKpvzh4rYjUJkK7A21MPRg7W4LsgxCZ8jewDmiZoEwXLWZNzk4DoyrEdKT9jJHwRgQeW6bZ5QhUsbfY7sUwPnk",
  "key29": "2e9KWeVRhGMVNAbZDoBLFxvqZYF33caSSgVCheTn3WCUAdfsfVrXTYdDjZPAc2MjPNTg1GxvwLNgvGpdXaPJvTsT",
  "key30": "2HXvPVPaoXJKVScp4qkWNx5vFDc1KfzwhcA4oh6wLJvnM2y1fiQTT42iMTQ7zWa9RaM2NZKnRdaxZPwmsi3xMi8R",
  "key31": "3kJn2rCkUYeUKrXEoK95cCDQwXN1fsf6X41SuAmWcHLrRsEqFVWMhzPk4svA1TxCqYEfAp8rSem5RMfA3UDAp1Zr",
  "key32": "3FPecNDhrAXNUyLNAqEebHSbAt2pZgu99GwKGeya7QkUywz4dseDEf2yeRoR5yRJhTts7Agb5HY8WUPW7zYPiko2",
  "key33": "6u2JY1WJeQRtmRbRcnrAGaSjS1iES6JJ7yy8A5AXeMXPjKHDxN1JBbgQyWsEvPdhiKnyKdDP4SLqieWymLujbmT",
  "key34": "44D2BZiZoWJMhXdmkAPAPLsjRViTJc91JZFKccrN2naLBZMvAgUy2Uq3A1sFoBBz9ysYEDYDddhsd6JuWVY9r9Pq",
  "key35": "32rTVQnGv4CqFALBdwyG88bekxM9NrHkKmnwprcDHxy67cFicqw9p3cMrrKy4xBuw8gV7mjYJgHXF1zq4xLPyUa5",
  "key36": "449zMexPWpwjC84HqPcLFuScpS37sYT45twJSndvvhY2WfCAF1sic6Pa3BceakZZWHGRn9Lw1xf3qDSsBVtguGVa",
  "key37": "MPhtkNkHtqXSUToezKEZWSs82pTRqZQbbW85f2mkQnzsD1JeTdx42tGbJ1UEpFksDPWTrzaL74oxDfuLfTJaQ48",
  "key38": "4LyWaXRzcjmdp7K73XD8L5ZXizsvnpjqPS1sfyGULU15h8tvVgGsdETf97F5aP5FZvyNEHnCWzV3fuNtzrHhXVcD",
  "key39": "4ea8K65ch19azYqRtSLmY8dJmwget8cyZuiBsh44Uh2RD5mV8J9tqR687ioY2BQHSAZwGLybCcS7R85rrG6NmVei",
  "key40": "5AdChXGx9PGGD2U6EtYcivrspk6J934Ze5qp8229VbPGMvHZxyxBHo4xdy3415y6nPYNP9hTh9m1H5nPnvy8n1kW"
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
