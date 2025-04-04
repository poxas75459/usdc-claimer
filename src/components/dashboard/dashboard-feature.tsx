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
    "59J4SSQmFE9Nnz1Z34NvFr513xcrTaSkWiZecni8Xd7PTPX7iR7QZi2RFDaceCSjsKybTP5H3Jkw7rzndSqVJ4w1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jaK7qCptRPnLwqZejQnBoa89sEzkE3jzS3Fu5vDvHijHhsedRDHPSEksfTbbzhLn34S3G2EjiZhciRcAEUuoKNc",
  "key1": "4VtUyQ6vhSGfCpPsGBMKVdg5g9d25cKEf6FMeySimmmudCHjeeAhm9KHo1RhB3tEE2WWfHAgrNkm7Xiicsesyfo5",
  "key2": "52ARnk3DXuQ89RAsuninZctBUbvBp3skVMnaiP1uDfVdfUSbPwymLFXgMeC3JCekmnw2sdfvi3gBGCAyAZZaprH1",
  "key3": "36SJAPXaWARAw8Nu5yGjzk6NH8TSKMGzk68XRNrUQb945SiePbYRjEfyXptwhz5aNu7VfJoH7f2xwwZH8fgurB8P",
  "key4": "5J17TmWkDCDFYtN92rS1i8AaQCi3cee6xEf4mxetLfos3kLBtUdPzEXgUMCm1pnBQjcg4VzdZxxFYFdWtuchu7ys",
  "key5": "4hqkiZbgW3qWstveqndZFY2gQQh2At8eBmDGq9war3hPzPc7LNG8jcSazNQmFGQfaV6NHLN6D7qXVpn2wxUXnLBm",
  "key6": "mEdWqXQDS34hghYYo5JhsJLDZYH9VrvegaZWexeuMBmaCcFGMEyq7rrTFmcz2HV9uAYJ8kUnHP5xL1n9qEmBk8M",
  "key7": "2V2V26uH2cxrphnfJxkfi2KRfXt2DrP4ZhgLGJ3gvbQnkhoZ2WAXNMY1XCykkL223AnA3BCRtVwTyuMxmz18QBw2",
  "key8": "4KQ6ZFFazRcq7aMTB46DmiZBArHQqSSmfXqdTmDZ5Lw9ACwXS7Xya9HXuzm4k3JB6PinwNC6pAZNhUMe4VxQ8b4r",
  "key9": "2fvSmgfxN2w87nbgCjaxM31WDuCAWoCSZ77RkTq4JaMb5CXZ2GSakEgDLTK1pZZ8sRysEFrLVJbHujhrJ5N7KKzU",
  "key10": "4q4PAHy7q1E2bmkPXSy2m2yQLmXKNvd5nJSUwbZKmmnjhkc5PZCTEoEL49a8VDPBEHPohtZriVLByCXk8JuppZ6h",
  "key11": "2gY2NwJwhYsMQV4992jfZad7rvEUKq4AMJgjFaHZP5FV7amuR8R3tw7q4zoh8BcWSroMSrHXi3aMCPUjFF7YcJYL",
  "key12": "SeWZftuPFthfrs3sAbTNYHAHDhGH64wSxdfyMU8zHW8iB7PuDorvGH2Kt75CB2figQwXitCupH3VWcTyC17ipi4",
  "key13": "NrzUZiLdnUabvnYoWVzBvXxTY9951AhcTg2paUnNMAHTrmTkQ2uxBXLo1MThD492NDr4DXboCA6ML2TFMpUNYy2",
  "key14": "2DMRtfmnzqWxRDD6TeYxjvthvrdSBYYcYNnR1G3J87tbR2dZoPo5YrtJPG5fbpmiTEC9emMZY5q3GeusKpLMV1HN",
  "key15": "3FhN22UWGqhHvZDESnHij5CmW8CXoEtVptfdF6nNY85WybwA9HSArkt5FURBnj7hxVG9DVKqvJr6wV64RPuMWFjd",
  "key16": "r1eJYW15BSqvGXrk2NhXBUU3PjdXXoZXYajPf9jtGweVEn8PYMqSxSvXqQFRD8JYzdKt4f7VVNwsumBV7tVhEK7",
  "key17": "cK7C6qxUVYDr8TzNqsWZ1UVzKtGJojgcFfC3cLawxHrtLhMAmFJ77ZGKFxi1gskDGpxxJntLbFuZkHJAeJyNq5T",
  "key18": "7C6cK8Xhe2HRA1jDstzDxTJrdgFQRFqjjsSK34v8Q2WXpgwEMv3Emga7Ge2AMhwarixzMLUFMcdueWu4LgXPE2J",
  "key19": "4VzWfhomzUvUoX1fcKtTxEba92RnVtsb9X5zbWz1kD1ykKxRZpPFnr8DvrgnLdd96PcjMbRbDfVSW89rnAwA7Tas",
  "key20": "28asLT1evbuSzsr3qguY8QKoRW15VU5F2RKDUypESBRgBNGggay7y9d7SQJRqewHCKVjxBReuSCz53wMeFFFQcmz",
  "key21": "4boKTLcpPwh1RMTbNt5ghZxfN8KJ5EJ3Y7EdLdtx8eoHJ6on1bjwNN63XgwFTGace65PXH9Efn4Trs9bduKNBQbM",
  "key22": "3NFbhRE3cutXoR5aoTSySzqXPwLWNdsjURREQe8re99etA3a7xcaDTc5kuaQSGSkWd6b11TuRgq5MDm8hZvtjwCc",
  "key23": "3WXip8Nvb35ZkQxdqy6W4wA3wSuCbVkbmnmfmYjDAn2zTtfzuoDe7FUL3JfeS4gTJqLeoHgaUa7fTLBEVoYPBMqS",
  "key24": "4VS991QrBn8dWw7NiDxiATtiF2QKwU8M1EjkN9vkm7VsYtfibvhVvC9wCUEhk3vG8Jpu7o6mqoLnbuzgJoMNqaL4",
  "key25": "4tz2i3rvF5eGjJoScgBPPkfW7ZWEfVrJ3iw6YGfRrP8unRdM1xTaL6Nm8DKAojTVHrS5Nz4TWNCejZzJYEoEpKBM",
  "key26": "3f2KpZogVoF6hpBZNDW8SSZwhp3hBxt5vG1uHKhmD59cd88Ck6AQLFVqVC6XShKxHywM9gGnH9pWT44ZBxeuRpsf",
  "key27": "uJwTkHv2GXgSaRFSwBxpWB5xrZwN4Q2hXkXzn3xgJshERtpasMGitBNXbvwCsWcCP4wQ4XrmY86NWyGjnQkq3CL",
  "key28": "XNemCzvmTKmNkZZEqnZQ2bDvhkEFzSz63yWLA1arUw5wyp6iu2hG41yhjAVwyBHpCTVNAkkTmM38mZ5En7L4UBv",
  "key29": "4Bq5LG46demxUfRBsnwzc2ZW1vnQo2GSWjUsZPku1rm48Qh6Vn8wA95CkrkqfdbfdZoSin26rUS6sKaLJU4wnxxP",
  "key30": "3RpvGwgw23diwnTgJvCnvBJLyDTTnJmfPHqufKv7xehJGMYa5bymus3TFzJo7GH79khV7tcaXwMBDXPv72mU6DmY",
  "key31": "5L9ujUo7WHJu8osDNSmPG9eNJPVJFYjM1uJQy4KQan9NM6Syy3zKnHhirRxSRgFki14U1Q5ZhgxPh2JjfkoGiN21",
  "key32": "qUENFqLvjHTsjd8izdHwpnfGhE1mD2WTiZkJZBJ4yNQxLq75F8FgaQY5iG27wWKBQ5prnF61we1mPgTDc3Ber4F",
  "key33": "29SsrJ3y2fmQcNWnonwWWRqAZ2xzVbcA2o6xLXgVUVa2RJrMmCsVzi1Cme3zJUDfWXd9TN3rSh2Dd7XbjtSKCBKu",
  "key34": "55oHXUXdQrUEhGReZNnpmZSe6Uv2nKvUdNmqJKZvEf8DGrPLdDvFhU6oc5gv3vyECdqtuXKdhU7q7cAvqHxQefsQ",
  "key35": "44obZYWm97mnWUxGb9g6UkCV4fecJ4XTmWYZcXqvwJPDMWLS2quE7atZMUxxRDdT47zA9bAn7azu5xymBAkvfvT4",
  "key36": "3nEQzZG9SYUqmBb5ds1gzaQLgSfakkPNfmxDygAdFrzjeU8jZYhMWAurGj8vrTHjUJeVFu6WxVBmjzRXPq6RygnF",
  "key37": "52rRMroP1VKYM999RpUsrUXAcfGvoP7ZXjmmCXh2Tx3Ebp3TpDwCmuBuCrpYjGeAHKLZk8UYCe9cj4e5XhPiMZww",
  "key38": "4nynmNgfJBhESUJD3fVCaHXsPo3uJH1HRZXFqMFoB66Lapeam3oJR3bDG2pJuv37Mer4qEsYdPNUL4siryDTmDD2",
  "key39": "4JiYNAssKYmJRpiWafJhciGGccDyhFTWPv3DBB3qbjPZtAkHJfh3LtwWa1dvgZEsZfzqFSTpTTa3M1jwwZzMLChw",
  "key40": "4y6Vw846762qDhXHofS3w9yiFq3pwAUoYAgGyves3ii9vQ1TqqCi84q4T8s1cXy35YFeP1CuBPkLxBBiNSCCRTBE",
  "key41": "4MtCwPYpF3j1HQKBodWAh1L1356KrhmFuS98yuMV4y1T7iJEjTB1PFmKqFb7hHDAtA2tM6daHMoKn8gRK2jyAhcd",
  "key42": "5i9SvkWRaSgxqrrQQcA5XhxEjfpfjtrcGuK7wNgR4FnBmxqFrTdzWvAHyEGTpbRmCCpn166LnwBtYgTVki9Bxqmu",
  "key43": "5uu2ER3fu8XgvxbwHoiihxBxyuDuH4Ta9g27vQUhpteR8Wdd8esT9smzYdU8UfY2TG2wvdYE2R6fevoahCqjRN1h"
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
