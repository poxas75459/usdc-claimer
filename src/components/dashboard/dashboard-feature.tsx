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
    "5EGche446vusAZz1kq3epmG3YphYstLWXTH5mibYgpVw6F3G8Y9V8B8vJGF1eiaMYyCxEdsv5SCiVVMYpmJQurib"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ruqVEC3SGPK3XtJsygLDqV7AV6kEitfbBk5mfNDAMW9h1ZMMbnGBc5XepNGJS7oCrMdFjfqrnm3Cs9fpZGMFY4Y",
  "key1": "Ws9mwLiRebaDCSChW8Nz9droaDBpgYxfLDjJv8AvTYnMHDoutDkgz2KGAxVjPWftZxJ6NtjrRJBYQzCATteNUvo",
  "key2": "2fU7WrGKjqWAge2zbF2q62igQUfAJLuFjAdAVi37dPskYUZz14VV95Q7A6LuvTfzuXPexkKorEP2s2wXdnv4UVpX",
  "key3": "2uJjYwJf6YfoHykRGq6bSJXKZ5mQ75MZPX9dro612sgshtYN6cyqsiqQvqxnBCS9EWpwcZFviXNpumUU6aiXF91g",
  "key4": "3VyVzrpPb79S7exH7gn8m4dtX2KWkiWDXDcKnXfSmsQgLb9yHNZwEghRbzpvh1s5SA71LDmbYmns2BLhss6G1HPd",
  "key5": "39GhQxdrpRqTRPERmTKzGw4Yg7DmLAB5vHVXNHjQjepP8gz6zQi68DLuDmQyiyrv9RNZ7vFGbYfkKNeXsZgEG7fN",
  "key6": "FC9LMmP3NyphURCpjdwhcCNZUvjX4s6v2FuyJVTWFFT1REZvdv7f1frnxqvZEV8vWAiLRcHTBKKSwyi8JXanvat",
  "key7": "4z6ocLedvj123kPnvG5WXhA4jLsdsTduxX3jsJww23vD623XsvuF3fN18p9cFbAFANo27SFis5rptgprGNik3xEu",
  "key8": "eZovsXV4t48XvvNqtR44uDnbp3CF1cGJ8vaBhLGrgEjZx7P3XBqeHeemFovkpnianpn8qcdFhdLNJ76JaPjmu8U",
  "key9": "4SSNEKmg24T1znVzN8s8jQckoBWRngW5dMUwrgGLHT4WQ4w5MsPkHfPxqa5BoXRDoKAMPr6q8HFnb7csuMPxvuHr",
  "key10": "2n73Uc9A1BQ2cxgUjgTuZQ64cPXeX4SCCc6CWS7BaTuc336SjA1aiEwyKvBRtJnGQPxzfMDoiWTBxmhBQM444zSm",
  "key11": "3muDFkpH8tYz5Hag3MMtQHEwu7twZXJPiHuYnwFabgiRjzY8naAN9LZbw2hLvkcU4VybGaCwSdZiptUTgGmTx3wH",
  "key12": "3YHcse1tmcvMcB8QdiV464oXrHYYe2W9WkCEpZwJErQVirPQXEC2yZvCWtyjXWpxpKqggGgQkfPbv5UW8uzSmpKm",
  "key13": "4kjcHqazNN8ct1Nk2Qrew5sbrT5WKnj1GLPPSyHQ4fot7gi6RKw2qTJ4LTnKXRus6VZRZ9rNrdTENpwdtvzVLcRS",
  "key14": "3THFiy6c76QyDeyvzKAbS9DUCjRFJTWo1Crb3pm9RqGrxY3hGmUiopjDBDsGgsRsbL2jTkqqhTLo3DmPdFN5RfQL",
  "key15": "xzAV8TFVFmzvyejk3tQyfe9TbxMR4a2KnBikW8V5tRS8XJnFyoJou1RmB5V8NXkrpXXiujynStA5Sn62je8eguY",
  "key16": "2WyoV1tKKUcE8aw2xj4skgLqg4A71uYYz7YL3WXbiEcY9FmJHnkXhLxViLZLwyEGwGVAVSwy7Lzs466ZJ79LfX77",
  "key17": "3XbQ6dWbvhx1j8EZeEL2un6ayo8nz9RaHFeEmebkSQxfgrE3XEnCG6qBuGcKj728srFV22nZoi1vDdou62U5EYBa",
  "key18": "4MudR9Wk6LehzgwYV7reER5dySAnYTSjBbeMVTPVco4mAAube9gApCFuW6JPP1WmBdHUogLmphQ9oUZw9sj56YJQ",
  "key19": "63gbv7dFpEispeedipDt1EXPkmJ3AEmihi3Qp5FeNHimB7C5xqxUrJA1dQu8uJ2wWSDiFQQG7kq2J6cgXEQsy2Ng",
  "key20": "2Hx39tjaivQoQ6kVspnM2nvEs9MzNYkEcScFVkdnZF7o9PaifUsU4gkjDEzTjB26XFk9Dz4V7J6cWTFP3Aivs8CE",
  "key21": "2cMABuqtPRQY6UV7MfC4m4Hjjs7YLeGncma1Evp2MmZp6KyS7GQywoz9W6TJMAbYC3ruffkc6ADCFxTU3GQpxZM2",
  "key22": "4JNm7snmebhVXoNbVss2HgYcpRmirqSSrP95bc9Pd8NBo3dgKbEQe684t9EByePxeifUWW3SGdjV2sziaw5hJfRG",
  "key23": "4FcjiSLub6LX1AZ26zJa6Azb3oginQv8ysyBRLfjg8ndrCLtJqWyckuZ5rc3CGsbS98PkiKF188WjgQHYQfnu9g1",
  "key24": "5MWU7zmzB8MMqRF7hdEJEnrapZemJu9TJmTGp2ABUfpXHc8QsXwyGZpZTpCSai5K92wn3TjDNNSZaTGJRtVdWWhs",
  "key25": "4ZduBJMaxRjHnSXy3Mxq6Qg6zW7k32VeSBrFytGsEP6gzVxaZyAtCcfuD2VWHFv7vHVMvXAHyD2ERXN53hA2GTQC",
  "key26": "32pUMAUdMC1bL1jrC6grvnQGS1EUP8inVePCmHnxr82eThK3TLNwq3ThSUiWq4tS65eDdtYvcBxukEXpjoGjq629",
  "key27": "2za1zuRp4Mj1zZ9BSTiLWoqCw1kTc28QkQmRe2MB2vahNjJ4uy5NT21x8XyR9BwhHowBTAPXQe1kYLBoy9NGhzrg",
  "key28": "32fU8ggyTb5phSjJpLUXJVknrNkHPffA9JaKcGkNCAkwYMXjk9idgZSkSny5Y7yAUXAsvkzY6FgHa2mGSgHtRwpx",
  "key29": "3PdcUPp1c98g3wLGLxB424kWyXpRMDpmNQpuc18XtHc9oqu9pZpc1svNeb4jx6vLLh12jBnGKBAD9ieYCKxwAi5o",
  "key30": "4FVCwzZPtLv1bh8GuNaPvzGgiP6pkAbSyZ1cfGrwR9gSwCMwgxt1n7kGuZUDH58vBWHe8wsRfJzdzUbu95MEg5Zq",
  "key31": "2Lgd7kQH6N2E5pDtXm9BEqW53DuaWW4RSyXcLcsA3s5bAcNv9VmXuNsmr5GNzW7W5L79W6vkfYRaNPwVnEQrBVNK",
  "key32": "2fHQcnRSxx6G6VsfWctGR5KZEUjZ8UkVXfmLtTnHbtnN8fGume7Vr9brmETZPWN5NpsnZT84bnzeD1qaEkDhZrFE",
  "key33": "4d3UaBaRQ2TvVJyRWF2KPdWktVcwrAxhXYGQPPu3PFEtUo61KwfM7dzDbP8shvUxiE5TWZS3sfhNpgaDecBuvGNH",
  "key34": "5LE9GwS8Wa9f4uWShcBKzZzCCWa4gT8niccETuE7Qe3VEwo2xFBSuTrxRd5wFtGT5VkNrHbuwoH5d14zVH3s44F6",
  "key35": "MWVjBWjpwACatnZ4Zr3Z9j3CEsmzFgy4NVKRQY4D1GRmKF4r4HMwnbj9j6j1bM56rPXgEx5qGDJqVXoPr2NB7Aa",
  "key36": "MCM59BSfqTd9cnty85pr5rhgvGxH1v3Wg424Lt46cgz7ydfsYMGX9BT7E5LcoWGLXw7uGMTA3LGjqQuYLKP7TCc",
  "key37": "4vrcV4SrF8mkHJZMNYV9T8MDkc6TgR1HLiZFd3PKsTRAyjA9LUFAopstFi4nV1N7kEDUT9fYBtPWqQn9TueTtaZB"
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
