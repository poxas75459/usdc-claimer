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
    "5eeM14WEfyQrZcfvNRQMGKbsbz4LcXhXaXjnjLQ1acRjAzQhwu376fsFExw1ThJhMEredkixYCeKp4tBxMWeGa8g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bDG5o3euhs59C9WtDUpJYgAvGp3Kd2zPYP1t8ZntN7mZ637k2zeaqp45VkecLLYLadU5DPSVk4qBsou5CJtLTp3",
  "key1": "4BAYWP2eYEZogHG72h5g8hzWS2irQ5aqHz4MPc2oLQtVWxoEBC6YhzuRAyfJ9Xef9ghqXGfCiGoT6LKgeLLftuqP",
  "key2": "7CbydvzzhQm26TpxEmrxqmseKDxnw7EMWBwgi9CQAXTDki2rB4aMCY4gqQm3c5s7X6ibibgKYByecgYq3rBXnBW",
  "key3": "kouQShg6P4MmvGmXHQ6CdfFKwUQ452ZF42kA68JQgtadZ6JPo5NKgLsXXcdRHB5eM7iE2mLV1sdxyEVQjW67j4V",
  "key4": "4Pmc6QFeTRGsYboyzxoZqiEkQT4K8TgimX42HJvLsAGyryL4EhdL18dXkoumekXTTjGPJsaCkaRvAAKmeMYSEHAp",
  "key5": "4ie3g8zSYkB84W8YJHpGZYgjDSPyFSFgHrtGSqzxD65zgcNnED7ZwUeaaG6VVjYFWHBmZ5sDkip3huEt9Y3yHKWG",
  "key6": "5y8aRe14PT4gMxxXANPpePuAC1Dvm1f4xRHxBiBEe6NKpKwJDY8vskCNvrdn9jQv4DBu3N4LNV5ziTBXUdbozDYR",
  "key7": "2ruMPddsVTpucFno9772CpGTZ7o268JxY5qGwRX7QNGopD84WYPxdSVxL9htGe19j2PPCj5dQSxhGuQwe9J1tAcK",
  "key8": "CmkPhTRgKYg76rioskPk3XpQLuWNAh1m5u6rH7XLShthdnvcByPq45XnesBLbfPrP3679o2XhxdHBxGTVuw95fT",
  "key9": "4Xrnk9DE1RxzMnGjhrzsFQEmNqitZ8nQEevCrcVrvZWzQcv9TD2CUzty55w2NvFbDFwzikTeYJuhjHKzqz5TSE4S",
  "key10": "5w5t1ebBdRDLUAdku68y9XENX8M2gYdzBGsYWg1nH5U9c4ypPQaFsR7yV78gMygmLctDUsyuzES8XfCPrhLg6v7N",
  "key11": "4W2gPWFpMwwzULdSLJauFSMh3TDyjqQJZCy3BCy7BRnm2qDppzFRuNXFtX78QhxHrHsLUhm5CaW2zKDyFWwBLyqu",
  "key12": "51VLznULhuGitXvJFE6X9k9WFNHNrj1QhqD2kR2Wt694j1MkWRQRECJJaR5cPG12aGdYdJJDbz9MCfAWDfAWNMe5",
  "key13": "5Nntd2TsfWB4o2jBiBoy8teMg5GQCd6U9TAAi4LhS6gqHi9gPFRn3bjGGXsGsUSmEUiPhs979wtRMJ8wPUzLAeJs",
  "key14": "3ScXPPiAfee1ymo46YGC6qVKoZgKd3WuE59raLVL2ypWAf4pMYjo9gd5X2f9Te5yuaYBoZZv8DpDyihVmRnfjnSz",
  "key15": "4eFtxTjpdTDy8G3weqWjbo5pujbnRdsJrehJm5eoeQS7R9tXLYz4uVoYrMn1uANszdzrctkyds3rRVjQ2iGj5zY6",
  "key16": "QKJU2a3eoJpXC4AsW9qd8W4Cce4XPcWqXJuYXBgKgvyjgejw8RtHvTAc6dtmokdPdtzTWM3H1kTLDXh1NL41FLy",
  "key17": "4meJHZdRANWUNWtNUwAZoHuX1w9KbfBkKR1M2BjBVzGWsaq2FFfoT1EnfhMgWqRs96eA8EJLnNmGqsWTYwyTegFK",
  "key18": "TgnkyTyN7FwGZSqDYNmiK7vhNczrrNG65fb6JqjrFz8Yz2NXEJWKeSQQngqUZtcsyKbajVZ4h4dSUB7oV3WSi9Q",
  "key19": "5yABUwQ2TPVbz6mLsDBCu1PXQDeJhkpUTKgMmxudYxnqCEAWQKd8u45Df4LwpwJYQh3vPEC5hVv7PXhKX5rpmADe",
  "key20": "WsjYq1EKd6KURDTvZcv7EtfDP1gyWRM5aDXsMg5x5vBFPRn28hTZNd1sd326qJNbPg7JNtwyU4pPKwVx4cr7Ppx",
  "key21": "5RThXCaoPAmkkzmrZTY6f1johXkiHA8cge36d9fqwRugnbGJmsTaic1sPSrSva9veYBmFaWsXWHSHJoh3pXVHVP5",
  "key22": "3G5fBtCncXX1nU9fDGNvbrmanK8PHDFGsLANeVruTbCZ1H3vrE37jv1rxGBjnaG3QBm45XS7LGznaQ5MD2L9pzCU",
  "key23": "4QDxPSCx5X3eUbxX6NPSU7U1MunYPXZkxskqmbwxBk8HEgzDhCaDMP1Kvn7FfHzNvPcKwkm1vvHLgJhQW8Je3LCT",
  "key24": "3PitiraFkdhtvhhBjKVuhqEt2k1myL6Ap5o5t216ZRhQywimZWhPAizjQLCTDCuLimoSYjMkMT1TS7jDCzmQmFhD",
  "key25": "vEmhG5ZXpF3dynSQf55p36yArxAFxqR8jLqmyrxt2RwxkVjZ3FtxyScKMS7WSasHJSDK9rZzvLBNwUe2zT1j5BE",
  "key26": "5XjDip3T9hPZJSGzvh8ECehmZwpuFCg973Q49LLMkRWCj1yAvVhdZG8GY9jLWtPhEs1Axkj7yz9dh7AF3B7jqDeW",
  "key27": "4XDzmujMtAyDVMCTpgNd4HS4wZpmc3h5whF389BVyx97HMZvk8k9NSaSuPJKbjynBdDG1Uuf9ECZrDtBsy22bxyk",
  "key28": "CCZYbdvjYxgqVqP2d9d6YeoAWGKazM8WiH64n8VTo77W8nxobWX5eGmfWeYT1qXUWTxdLXSznkRzWtQVn8jahm8",
  "key29": "21WVhExw4HJtc2U7AKNewMGfJmb1pqPXBF5hZxcs1g16ckEqekTcmoeFPoAX3a1cfCrdJUBsHatcvy4PGdymSGnj",
  "key30": "3rHSufBXXYMzYRDcfaaYc4FnvkAUwFDM4EoMmBVJspXjPSJQzAy2kUyyVpmPqGMpHahsCh29LZND8x5hmRmAkBjD",
  "key31": "4yfwEAuxS3GXnbtNQDSWhgsChtHVq8oq2p86bu2Hr4JPZn4HjFBLMmeGzcScsMMLHbdonxHLUSqpzDJPn5MJfMty",
  "key32": "4GxhQH1biwtktRC2jCPf8HRCg7rGGU2tPEctwcCRy12oLnn1DhFLdxzzpJSEE5Fx5QHnjTRogCZNhL9HvAhoGsY9",
  "key33": "2XMjbucyQMK22vHG1tMqiT424fzrShDtdSPgkYhR1pBLDMgnZ1KYAXTAzanFHV9dVLsdNwyU6okk1YCbMhcoZMYm",
  "key34": "5CBTCgPcmTLa5S731EatDZBZ94dPT3Z4xEHmKFHHJQGJ6HB5QT32cgcSP2dgcV1GE7qMmJtzxUW2WdRzd8eNhxuJ",
  "key35": "3gQk6obbJrQSyRisc9K2gwpSmaBdgygeGwb7GvbCyCEwWVJfurdPKQptmrYcwrBJ5HZanApu3swnTygwPfLNCy7A",
  "key36": "5P5JiPfgSN3cpjhMZtzXJ7VeUeMXU3VzH96JGbgaswhkCGMmjrsrSuxER4pRKfyt38FFoAcPJqC6hjnHaNnb9rCa",
  "key37": "2T9LEmYd34eMorWbxcnFwWCN1U3g8CwPb8vj1tZjqhp3z4Sh2XLJ4XHW9utxemdDc85p9LgGNEb9WJ6RRA9eAqkA",
  "key38": "5yQnqwRaFswJQBKvSoa5pENqhsiL84ee1LTWdRvivrt7eUQ9mpE4AeuCPDVKQPyYde1o1r7aSNfqDcnV1P78yimp",
  "key39": "4wThnDPEHeoVAnQFN4qAU4iP4C4K3S5cJRExLZr5rfYvt3J3y8fLqeg6fiCbbaRVjnBWAixdR8Vpc1YEoS1fqUjR",
  "key40": "XD14hWaviffZq5NtZtWoG2GgngpLYVbVycznaBMXZADMDcvX7AY2Tmbwjr8N2yoqdTuGADcMTaXoLQm4RbQnXxT",
  "key41": "22L9Q7PW52unaNRo3RaWqHjHvkkDn873kUbPkh7NpHv4iC2toUWcTds1rBs4jucSKHEMMUknEz9nWmBcF9W1ZF3u",
  "key42": "2jJy4XpeKdbPFChFwfdZ9wtW2Hvt1aSjcQKsJMTqYJv7wtVYGW4nVAMeVTA3LJZLiMUw1Q9TW2b5Xz4QQu5dGkyZ",
  "key43": "5KM8UpMXvYvV5o9AnEtKXW1JLAouYwJuY2U6NqqjzhTfkhBamHTQHsvxYNVhkqCYc5cdiXo9dQbgkP85N2RXhtpx",
  "key44": "5dvd943ppUNUB1Xhh9zkZ4ggpyBKc4wNgwpP3P8ETCg9jpRK1HSmw1vAV3YTMKYeUJv7CkzfPTYjCqxr1pXQ2cf6",
  "key45": "66d1Z7gMVZ4e5PzUbaGDZuCJoZjgWQh4ktNnF5aM6oyvdpbYYrPVvvbETqBf6Haqz1PELcbm8eeoxWNCgjAbhmLR",
  "key46": "5CTsM9oSxeLH4Jr7U9VEvafwTXqogo6fWzyn44SYFru8GtV6LFWQahj6Jo44Ej6bACoSS9BqaV6qv8DHPyMcUeVE",
  "key47": "44y5bfmd5tS6e1toaDy6aaUJdhgtNntajoyNTPJazkGMctf9zRA85TASc35n2NjdTz65cYuopcFXypDjZL7VTAco",
  "key48": "2c41unrumJsJ7uAstTGR7z6z5SzTHZHsd1eafHwY8xw3tCbcRDxiym6Bh3KSDszLV2FQ6TkNypmgdzAV571SoDbg",
  "key49": "2EnMeZoVDXKrvAbH2YFK6fDLxTwV7jvnRRqCKhUYU2zsgpbTBCSNrZwYzT7G262k9kiF4Mpb1VSjq2sYNAaxcYFm"
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
