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
    "37Pm9nmS9aCro2c3NswMPGBvt14TeEQXBgUvcgpL5sXcKHW3ifManP43Buo74Puwd5bqY24SVzfZVgQVMiSsbgzA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wRpe9ZnZZRydEz5w3AYTq8XRCakH3iJYKw7DETb5YL26NF4Kh6meRCqCtE4Qcv45oA9txEJxNA6LSitUsdTExnS",
  "key1": "61egUvQxa4y8Anu839C4XgzJVEBYcCL4ojMq2wuQaEUDGNMkkCZNUnCbR2PgwuxBAxiRWVNJcH3NcsMZTTzLSrWc",
  "key2": "2tyHJAUFgmrrTFstuowVew9KWnp7RunMzbcDHHuj6Zc3DojMGhuferaNyh7vjh4HGX7QKqAsiqd3Uft6gNWPo6zF",
  "key3": "MEHAcNUAMJGDMF7Cw8CUjqq1fDp7a7A6jBatm2diWAZabHPLXuLYTeytceJuCjT6HCVKgETmH458GJKRRtFsMYX",
  "key4": "23cvXAYTaGoaymqQbbVmGBcuY9MyVy8nJQpogyQXvZZzscCfLL2eLJLc8yC1nBfmZzEqSnX24yzwsUtnhZnA88Nn",
  "key5": "5JqTX9rcqUv5JBZpszoiKvTkevvVpnXyp1gYPvzmhHd7ktVGXMjerqgGqNUVrgXBACR417P1o4fHrcmdJRu8Xhj3",
  "key6": "2qZ2VGw53DpWNWtsRpj142yvJhRFteefTHZSy84bHMfFxQ7m2xhfam3owCYDFzsjzjeMzCDDuEny5WCHhMGrCwQ",
  "key7": "2hMvUSfSLkjLPc7peyYcADYX38r4JGKtH8kPRshLV3XAYdJrw4Qwbrz7UTmjAmP43i2YLsNtQ1Z57VLjX7GytVwE",
  "key8": "4RjS82MVZxJEvnxY4mN1TeSYxM1Sh4A9e51f8XzA4AVHrue98V4TZQ86tXdzEvEgNgewaLUK8u1qDFXf1TAL1tRB",
  "key9": "55P7yZFyg6WPLqoJr1WqNESfq3DHEc21ddLb6598AFXkjKE5jNTSVhgszTBW7LnEKCmYTVkSEg5MswiRovTu8KT7",
  "key10": "4PS7uAKC9CAPzwnV2QjW1F638ChUBbNpMYgj34YqEZX3n2faFH6woLzjoov6SbnFjJrhfnL3vhEWQjM5dUiY4GJv",
  "key11": "49As8jv51oJrfNaCiDwJAk2dg9hZtYoeT6b3muRDdNzJURABo5MW9m8QkNa5kgi9XnVY5HVKfu3ZzMdZuuTBQKFB",
  "key12": "zxAzaxbi6wBjes6gAn1o7yhT9XCWS52r971QLTfMtibKQoYPzMUSufTvt1exoe7sHLHw63KUPV7XAEHFjWpSBf6",
  "key13": "2hfgU4x9oB3gAHZRhWWDLvphCYS4EcYZhu1m3QuYxDsz7FdXNnYKT96Z11LhC6SjoR4eFQTWtUebiZBSkjqh6wUd",
  "key14": "5JGHvQLLECexYpfXePyLaKVDpzXMSsEo8DksHQ6ssBRzxBWKPzuV3QgqES2Y7A13An3mjP5kTiZGv9ostvvCQBLv",
  "key15": "3x4yZaK38fVmUVrA7sQ94sNrQ8XZ6u87sx8cVcPPFf54dsd3mdeZiMdr1Fv4tpehoSRhXBQGiKkTSCL8ANVzfM7J",
  "key16": "JaCTpGAzXSrzHghQ9YBcnpiaRECfvsx8d1PX86MsNXTd8qcDvq3PwcYmxvD9iUYUnFD43HLhYEcTbZo2EnH25kP",
  "key17": "62e6b9KDkX3f9TJiMwWNmgsfUh2zsJ2oqGSo8PB3YhoU7b6GdGHvFvj1rceJw41n4AvzyNfbWoqfVhsc9QDaDMt6",
  "key18": "2ahXGbJMv37f293fAyfcUcHfVhgysCSZyy2AeD6uWVLewX7vuQH7ffgkMCVRmSyq3tPmBvwQqGL24U7efRo29BeL",
  "key19": "4JHLZyWffR3Mo548wvQCuDvbbpKoAtB23XXU3wyBhDJfYVFaTbVsR5mquQuykBMpyFhCewkFQP4JVjRxVrLPfShJ",
  "key20": "3cpVRp5kvvsksAqQ7wQrbTySREPCRLPViBtaCo99myHjb3ve3AY1kh4YiXkbfqXiVrzxzyd8UUvctLuo1L3VSwKD",
  "key21": "3Eo2ujZ5sDT6ep3dG6XcfGX1SEmk21joLqGRFn8AZ7DJuAawSJsU3Qtrphf4t1E9vk4Byc299cxGZt3obKq2VBCP",
  "key22": "2G7rCEMtrQQ2EGGNCdSHfkF4Ro9gUL7iprW8Jwvr9wPpswfauLBDRe6VAtAFKUP3CWyXGwacPnQ2u7F5iouXpwji",
  "key23": "66jP5r8o6CbR4px8LMFC3ZAjCqw9So3oDSCDEvqwShZMHGmZat5o54FXgk693P3YK6EiphEzufaUV8qozp7bei2d",
  "key24": "4THxc2VUsWmygmtgF8kAEybjA4vF1oMiNEgqVRpcMrFE9CKu4nEpW6ZutMgcrt9JWeMhTckFrPryKyCA7R74LRe4",
  "key25": "5WBK95j5X1MV6PiPMmNvpyD87BhChdLkyuhJkZBG9A9fqwuukHqUPUfGMjfDAnV6FnJav78ECDSTXDMGtUSmeSK3",
  "key26": "5bf9EtMdXqSown8uVkQ3HFxvQ7m3n1DecYsSt1cAf9wSpfBKXhb37dqFAzH8frAG1Li1xdyVpmGk8o5QH69kP2JK",
  "key27": "7H9dLFWYjHBBddsiDHyXk2XMr4vjJv6uJ2UGHpbKDpS34dHRpvLuGVioDhXnMBETCGTNi6nk7giAb7TgS8RgffM",
  "key28": "bbzgAuDPBSTZ5e3DgzMK6ntfNN1dvUzNF49mAJrgM3uJkNo7LwixM18pD5sXGrGToi7WSLzeSKsvokeqmL6TNru",
  "key29": "4EsrNCDhA71bwsSFr4wKDJUesZnm6VjQbrCDAS1yJLaAr5qdYuSW9MQmEduVpYoJhYKd69cpk5DKaCQgcjnDWzTW",
  "key30": "5sguQaoz3DanaQhxc5j42gEucqgSrjPTsioGhrSzGb4SQsQvjvaydXp8MU6Bw1GjZjzH3nTwtVuGEKrcVmRMoQu8",
  "key31": "CVxVq2mWk91WpFHaGTYhWgEtSt3K8G3uSzMXGdZ2vDeCmCRyRcce4PBHY7M5RGCybUsQ4q4mYUFL2fF1fgDwwRu",
  "key32": "hVu5Qj6C7yRkvmFjCdds41AGJoQijFswcTCCweaEYtEyY45g9f2KWbwU88oqWktjemcE2NdA1FJikriJsz94srN",
  "key33": "5NtGsnpAUDJDX9kKYfjc7hhzADw6AxoA8amrctzDvZTbptZGJqC8TNW16Nq5ApqBDSi69A868TiFj1hitAJw6VNk",
  "key34": "4XoHnxPG5EipL4sRHDx8GUgPQyVzy4FNUDtAYoxLHPTK3cAMPqiwVMi9HPwbMpupxt43ooZ1DFRWJdSgYEdNLP51",
  "key35": "51TDmX9sHaxeW1mJzx9LuAxPc4t9oXxdvDN2AE3R1mRs71qMSQZVTuF9LEXcyXYMA3V8agcnQFWiyy2H21YGmyxA",
  "key36": "4mGgYe4GezqyM5tJKxtnAcQRWXPkbgbZCbuUWDitGhFUcf7oDk5JdFRRuscRRoUm2eJ25Yg1JHi49DRNCisaonFp",
  "key37": "kgXaPrNHQ3ED8uy9cjtbSjbQtto1SKsXXpyHNy56o2Xq4aoJ7ESJSam3aSLDhHWfGmciZ7jF9jdQCBwHF8ByoaK",
  "key38": "32xFq3WbL9AjZMrakjtE4VUBSJYhjSm2qQgUZENqjqV2giDYR2CYj9zTeRsupfdomFtdXUarxYBb79s2zh3HDrJK",
  "key39": "8BVV93maeHZ9cp1WhNE2n1zTJkxp5MngzfTAH6REjD87hs5aPNUaCZ8MGHndjdEHDFfGjdaKxzTYgEsnNmekgyF",
  "key40": "p2wMhU3WdJy1QTVGyLuDoFcMiFMdAKvoHWE6YvFuSKGtZFMWFj6ZZ44jK5gxCiJqB11XL8yKXvX4cxVcFAVQsVu"
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
