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
    "2heMAdR9BfVK93hjy7ypWRG25BQ7UyPdkfcG6DbRUTnyyEonAaPYmfXL5F8i2QG8qbZzkVT64kJHhnfcujC7LRCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2aUZJeXmfYq8jZw93TyiXRsz4UyyWfvy7a3vpYhFD6ANQkyJ33x81kvhqo23rhbTiAE8rMWLFSQZxbpC8fZrsvp8",
  "key1": "RuGhnP3f3ZXJTWgx1hcm5QsKcBLx38WfAAz7ibwLkn89QXev8mD1YD8pNzsMoS2hxA46YaNQiaRCVS9ekTJTAwd",
  "key2": "4vBK57Ja6EPEm9AgX4Cjicriomrpy53CRC75CfQN3oW6kfym91n2LZb9SBieiMX8zrLvKevZu5UoYtaa9akuHUKz",
  "key3": "278P36YXtWZVgm4YnNBe8pTAFfoQBAsfBm4wfvahTDwFQ19r5Xtd4WDKsdTcqvqRm5yKmntzw8JH1q2CPxrzKYrp",
  "key4": "KsjgV3i8LVPkcbJ3YmYb2KNNj2jBEUDTtawrYwZhbaxPU3C7FgKYdneAV6v2Xbvvkjy3CLgY2fRcCaDRNAXzbi2",
  "key5": "2fhH3snCLuRHdnRzDRCaTVnoAzbFbMHEyMknx71hNLoaZVXVhrSBYiLFZArLdUx6xozvfNf7ZATB1td1v3weN9WG",
  "key6": "3VAXbrEQapXH2QH5RpkSTN68CTNGcFWxHTJDph94McUCZJLPCUynbtoigyCi4NfM5XwPCjPgMhYRxaW71qYqm3oC",
  "key7": "5Nm8EHtRUZQAvsTBNhYnAL7uit6woYpYpxyhkuR41CQxXUZdkua6ZpAA98uEgKbxAbtmBgeaTTGDSfg3ZtC83iUf",
  "key8": "4ifanSfe83Us3xdCkJK1KGVDBXMcK3SgFkqyLnhHHQXcCtUESgWTgueQ3CMHyKJ7SKcBqNvXBHB1y12b6hC93sid",
  "key9": "3AyYkW8hvRsvMWN1vGGevDwVYK5LiAKwZAx6WsSz5FPXvUPGL8PT9LtgbmDcExQuH5vgEiFiXfJV2veLn7bgL7Zz",
  "key10": "2MCYiUHDD9Es5zr4m3CDDg7F5LNdbZk1JWTjgGn5fNXjV6E5kupEMht97XrmSCUQBmpb2Zrg6uxZ5VDicFceoVKE",
  "key11": "RYC2x9thEi5Ah8nuXPgJxznb3FbL7WpqFZqSdSCR7R3SpSVVEW6HdwvWHg6pvqnukQJq9ivQGjjiyob9QUV1Diw",
  "key12": "5DY5knsJHUpoS4aaQy4QgXLXDcyoHhY4ugjwqXZUetnrM94Yaos6kN6vkKRYRKStMxxNUZcwVs2iypfsvKpF8Lg4",
  "key13": "3SXaZwzVvB4N2qxo6UWhwM1joDBrYq2V48JspFs8ua9TmmPRqNWkCxPg3skspusBCPC9vnmrTuq2e6Y7q17XRg2q",
  "key14": "4EEpQi9VugWdHaP8ybuUfw8zASqzz1XZoa46CyqQ1b21HgHDxFdQVjq3zDcgcSLRA4B8ittrppv8nSSJRVMFKkZd",
  "key15": "2anithwQB4Tk4TiSguRLs6a7ibjhvwdUkEuJSYR4X376fUFoZ2DVRUpZLM79W8Fy9kCeZsAdGMMt7nCHfmFCWF9s",
  "key16": "5BmYPN1gDVFDSDpke4a5TDU9ZWDtxCQCMG4vWKLyUyMFS1AG9EJcw6db6b1upkviKx3y7apCXsRRbfRdNNxiYYnk",
  "key17": "37pxC6iZdHeFuJKXqvqbBApM9t3YnJbaj5Lyp1SwCYTT9KXP7C3Z69G6obgLBtEC2Y6zt4nWWa5tBCE5BLTJ2TcL",
  "key18": "YGLazcKuyhpAjr6ZKUqxujLv8kZ5wjfG6X8m2vkcBRPMaqS3jz4DUAuj9YgUq3cYLS9S9qrc1jyDZEBkPSKu8ZN",
  "key19": "5AmNY7RKgL2MCY1hHD9cMBkMSb4BrhFPqNwVik6QCtNMGHr6MLHqWASYwFL1qEvJeUxXynj2AnZh6CGTeaHW7PHe",
  "key20": "BbLvyAkcJxi56fXMdtdg9uMna8PJdMAciFiio78kAoSpShewkEQQ4qp4TnuHZcNQSdstshz9BSrUuaApWU1xYvm",
  "key21": "2dMj3Ke89dqdFHMLv3p4eedYpJPJ6dusybwFvuUyxgXzPsNYhETA8B4chZRAAQ1JLiYywf7seiT45mbAvhyXuxSk",
  "key22": "59PnUCBxJAJJic1K7GQcebvt8gcCk8pbqNN7rAv3E4LfUsNuRtDXv9L5PWLSheM6vg51FGvrBD77n3p3j73T9vTL",
  "key23": "2FLaPBswwPghLQ89YcqJXemHgXMqAEz7Uovkva1YdMBMq1HpXNeneBqASjp5hhcRYHe2bw1S12yEE6vLtVipfuy2",
  "key24": "3TV4gXDtj1ERGFE1Ssj9iXqQuckeEfEiTnUiFtcC8X8z2gSCuQus2c9cwLShPVoFzmzVPPFfRk7MLPukaNX2kbZd",
  "key25": "5EbGq1qtzQb9JdgNC1qN1MY7M7LrB5KJzaj7xMWpMy2vzTc8NatFb73QN3CdoGMHeKk3ga6HJuApf3iUwooxgPJ9",
  "key26": "36Uyefmc4FsDBPCF7xAiuAQvHcG1aMfaqQFsUGj7ckFzn5ksiaDTfJfeQqofApY6FdWX9xzeBeTRnweo6xeRYuGo",
  "key27": "MGGSc3XcJEfTM6NuPy1ZiXeyB97MGhMjS95aRdYoaRk8NThPwVHDVPov7WQxkA7GBH2GKr6u58xurqfLkQAnJ5n",
  "key28": "5GmmpS5QVCqH4bpcTZoCQArDQLwdWW4XfHRPFKKZwVcAZRLrUVosD5tE7yB3r5W8zY7sLjqJRyrrfkseie4aD41C",
  "key29": "oNsLea7MP4tNZ7waTKi64f4Kgjg7quABX7QdxxFGyxuqQrhhiQNVozCgwuUybcc1UEgPakQPTjmS3TanYi5FrQS",
  "key30": "NAjcV9qmdmm1v2X1FgLkftVZTKVeP9e4b1s9z3TnSs8LA9isKx8LvVbPxFrsQN9TQw57bHNeAkzTTWtu24EUjPT",
  "key31": "4mdco8sRs3eP5t399RASEz3hsuVA2cLYKREXSq7szK119yUnFF82gw5WsWQcczcuNP5EYdDBs5QC7w25w9FKAu3k",
  "key32": "34eS7t5uXNAcBnWcJBMDW2ZHTC6EzxAjNxMaYiArP5cJDGSHidAepfzxGwiqqWXJ6By4QBQeP7K4b62o8W4DLU1H",
  "key33": "p2jqkEM2nQ6puaJdzYg17ge46oRZLHGpua817RCqUg8Cprb4duZ6Ku9rD53K7eBF8PXtv15LDmd1GiZvLuDFCG6",
  "key34": "3qjye6mEVnHaMhQbXWjdqyZqDPTx7oQCkRHJ98cTRyHzTcTjLGKtGDnbSBvni8wjMXv5aZC2Gfai8Qh9KxnMpMDy",
  "key35": "5ozTmwgQQRYftaWAnHRpPtrxGzsW1RxJHtp9sodJP6ADMDtL6unp3Nxi3gnh93oMQi4pPHme8sWY7eJszbqN59R6",
  "key36": "24VRzPRbwjD9tNM8k5ecdoXpSjtcTo4qmtPrjTUCSb238v9pyiHEwYV7DmXQW7SEc2BtPWS8rjTCYa7uiQLdqZqP",
  "key37": "4CuTpCvfXqocrDedk5Bkbih2ZvJEmnKF5oV8pmpvSa4F3Gbyj9ANgooU91kbuX9iRCo7jHB8jMdae6hzw9YRTiFP",
  "key38": "43dB3bM1UaMhTDJH1Qj8eC6piQGrbkVyb8UY51M6TUGnwk4bfU7jtb4yprhYZP64gEb6dWYFb8weoa2dNCY78aX8",
  "key39": "XUsWuA8QqievSYqpxL2daZwkahCAKSt8gKzGMgaByCewZet96iizjKwf35xY9mq9ytTXWfxpvqnMcjPsjrKw4Ri",
  "key40": "3L7GfHet76pfSuUg5SPPr1qKbBNT1JbfqqWoWX7AdSd7G69m5GMKwSTLJF5cBim19v5b4XUZes4Efa4epUmALZTS",
  "key41": "3JsKj5qQVyYAdPJhwmnfrqBe8JZqtyvNqQK48VpJ28qkwtgqqThmjLKzSnkEDEMiX5p9sKQuZNnoKc9uCiXrCNwg",
  "key42": "41fhk2Sehyk5f7wpfjiK1L3SjWWBNnkpfDjvWjj2BySG8BJy5JQBgsfceQKbA5VyKUUF1MVjNUUB8didcxgmw4RU"
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
