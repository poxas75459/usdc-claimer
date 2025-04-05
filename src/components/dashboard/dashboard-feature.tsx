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
    "47nRXSxiGzHh8hQqZ7p6jmB8CNPfU926vfN3UUkwBRMq116uQhWDcF4Xdu5fasLY2o7nHmW8KdMDjz1MJNcC3FPs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "a4p3cgxb5v7eRLP1HxghmzK3cvTmU46sVRHjeV2TXFmqrvadxRPMg3ucHYRz7hkKF3jxHUpo6o3DjthmQquw5Xe",
  "key1": "4twZQDavJq9BnJvWRVQPucV46FhNwqTVbjJeD3ke7c29jzAXo2id5rBjFki8MdaHQrTTTZYxAp8WMC97jCchAC74",
  "key2": "mte1ULMGtpvGts883EcW7uS8jtiXzQhXjytiF9chMETu6gvWaYRDziwbam1xLkPCAGdJWVTkSeMQAdjyuDSDvWa",
  "key3": "X1vG2sbA3daYUJJYwK1zik9dxhZmPwe4Zheq5MUkTZmEjECHobMu7By3eJDyasH4UZLDdjzs2FryjQyyVPGoxD4",
  "key4": "5wxLbttoGXdrtgfSKZsgSYqoTLmHpR5eRUQhH41VhYvC2NBAitrkyXrHS3QN1ctUPHKaE77Z65uQUeydEnbkJhma",
  "key5": "ZUKtLZ8bUqgAV9X2N4HP7wBMWHhKcDVqSsEEvuEWT4KYuXhsYRcPNAamMK6htcGCpXeXxhumDBekXqW1NWsm712",
  "key6": "5u8Lhg3Jotm8ZuZx3FrruMq9afd3H9HYwb9GLuYUpmLfmPsr8tj3BM5x4AhxxfW8EQNEmc7q58TEJqfyaS3AtmdT",
  "key7": "5gCqqd65T8gvPtoC4X2CU5bio64yjf8bZNAESFnoXLiDbQLfWj5b6zEmXdQKzZsyxgTPnMu8WsEFyWfso9dZXfNn",
  "key8": "aua25Y7dKKcFsPWBwwYBCcP9wyrw9DsU2PhsrfY68qYyB3nGyiTbavMwoHBUCqJ9GvRP6KSUxTxni1DwY9BUojq",
  "key9": "3B2MX4TtWDoNP4hX9jKd2iZhVXJVdmA8MkAcL3feYPL4TMQabTP1hH7JMZcdK6YSVjn8vCW2QBUi8m5LpA31wPmd",
  "key10": "28rdSeG9XSQbCAyN5JhH7k2Gw98VJvTEWv7pnHE45VgZuH6wnhgr4CDcK8YCohDMN3hQbABXnD6VtkyGRj8eaFwW",
  "key11": "jatRRUvNjrnHC5iq7U4QeKF3GnAtPwN1HSgV7L9zpfVSvXfucfYAf4voMivpsZYFft5EBVyeqWK8e3Sj1TeWQxY",
  "key12": "64DpbmfnBYREyGDLtwxVevRhEWHXSBGWrDbB1jGTMN4TrGemTipijDo7oDw3X8KSuMiDRWSp5zMvEnkG4bJDWWC9",
  "key13": "3cBv7Jd6vigjsQJE7zgucCCvt6hZjC8vJ3oZr2e8zkhAQsoFTd7v9ctsMAPDP2ez4kNgeSpUA6xmAa17bsAv8nuL",
  "key14": "5fGPgwZJMM2L7ZuEQDuoscM1JRg9hSD5vm98YYhN9iToY2fNtC3Ms8RYHG3BShAFuaikGHE5MJkbYja8rTeQqXH1",
  "key15": "2ikRczihMGFtJSoTFCM7UDvLQbfspMhC5fDdGmESq7LHGVVzZMf8oJM4uhJFhf4V8oGynEgKeBurGoUUoUgpUSgv",
  "key16": "YioGJMh76NNVFzE2N59vAdhykMytKAi5Y2qgBnXGbbojXtwYN2bwVi76gBwHrDhUXsjh9ww7Y7H8gtd72wkDaUg",
  "key17": "4cbqXafbCtoAucaGfjaM2yY6RdrEpczsRVhPaw6cydkqP3kMAGVyQSwvZUJ8wm43VjsvyEgKUxi2v6qSkLyLY8pr",
  "key18": "4NBj4oaK6AWSHJm8PGUVqJx8CEnXFwvktVPmPjVSyAqx4EdsUtbyVdH2wgpu3FvkjGGJ592tuxqEJtnhQdiEYDzQ",
  "key19": "5R1ce76ngZSmr9uL2d7Di6mAnHgo3bXsNPTA94CuYWNEgv175xknVuFQRXSNxth4qteR9f5nqAMRpjUT3k5tH8x8",
  "key20": "2fkv2P9zTYiRFtiVDuBX2rqXA9LMivCBG3XbTnAjTcTShKv77fNSU27QiRZBv1CPXQdEaWpNW3NACvH33gSSMFfN",
  "key21": "2WbJaZg9AkuKpYzX1s8dXfcs2t6vVATjdrDJ6nRYpejXZxouz11J7y4gzmK7JwpRzotwjvWELuntb4Rg7X3gDHjk",
  "key22": "31C1yvu8D1vMGq79mJpektHh6XKfyZdXFraTqYZk1KV8txsYi7KK37nvMz3ZCV5Xj4Ez5X2FE4g3HW6GrRe7uDCn",
  "key23": "5drhfd9T6kc1G31FprtFCo3uYiLz9BLfV3yjmBRivpSpbV7qVTteeTebzi82DuFgYAzjcdQUHGHMK83ZMmHWiUgK",
  "key24": "Gu5Vpy2A1phCu7WKKgnvC3iKMvWqSyo42ZrFXbJSCruTyTkZX2sSVsTBSDC6Pv1xmNCb2fcLDtedaHjqTEuD43K",
  "key25": "JYUtMLrthNvr43fYYmzwCvNVzJyYFXMVqJqZTBCm7hMTF4T25nCBgaz2RiUF5xE2xD5f5jjyeGB3nje7auw3YvZ",
  "key26": "3yGnw48bZXKrHgA2okkDAJLozarAA5ADaM78zfRmjvCiywDQocwdb11D4Br1L7z4Q4WuxB69oCR3xr3TXfExgtcn",
  "key27": "4UCLjbqyA28SstCVVs7WJeJ4dMMGfzyWhu5be9vqyfxwjHQaeekUxxj9Kx9GCBpVhY8DF93RtLS7t5CPQV5GmU49",
  "key28": "3YhmNZa7qyeXNNTXLN19vT63Dc2mvjpH9WnDXiv8sneKGvz93QqtTF9eJtPUUFTab13A8GXNAGc7Z2Ta589VbouS",
  "key29": "4oggFCcu978jkxWFLmMAU5hNeFCZX9xWEdCBhS7SuZFw222pSmCoEEMCkoyHaJPcBm8YbcnhckZwNib1LxX4brJL",
  "key30": "3ZtuXRvMAJsqCtavJmpcc3KTfYhCFS9LdaiVFdkxrsqq2esq75KfxoW3WGJSGYd3Pk9Xj2nUKq2wLKpErD1Kgqab",
  "key31": "4Vx13ihaH1RZo8RdgPjgcJx7eu1t8NWBBaD8MKq9mfprXegzbCXtis5UrYBx2DSVRV532qCPBvfHDHbisCKTkYem",
  "key32": "2wxUe96BZ59wFVLhx4cjwQBTqumowMP9tb9R5x175TFGfP2K4S2aBkSSDNbEXeVwnvq6pzbFxk2EuChQVxXkhaS1",
  "key33": "5UXGLu1op5mv8MsTNhVYZUYp1vfRkZ7Kewr3ArdpgYvKx4QQPVUNQQqWPYdfFLJqwq6RVXnrruLnHBSJEVxyAo8Y",
  "key34": "61ZUNYDbrPe3tdLFwwYmzn7uAfDTpinYyocDuSib2mP3j6C4BBfwF3n64JVU46rFCxAkvDKeCC9tLCRDhwxZpX35",
  "key35": "42CftuELVwwNiSbWAwfGBE1VY53GtvTyieaqvnpYiQ3E1R48dbDmbNBnM6QTBsrezXmNwyxtxEim8xdZ6UVWMGQy",
  "key36": "2VaoG4WpzhbP9Cz2VAz8z74v3a8RnWmFXXHELwKL2k1eDTRUfCiChVHPMZeErXsJJwFtPKDS2TpzfiQVQqxBZikY",
  "key37": "2XKUFzWbsZ3tJwGwiSNUBCUsV4iSz3eUp9hxiLg4yYcRrn61B4kSDg3uxvucmXurZUYCzU2ZDEZ77c8mcssEc4Pn",
  "key38": "3uBmCQeF2zA8y8nxfFDyLndoAWfbJUpbSnoPaQ2co4vMdoavkAZfecGgdo94wwRpYUM2C1ryYq5UcDocMnRKhvJQ",
  "key39": "4uemfv1Qpqws9T5yUMGqX3NwmK4Q4yNAPYN8X4oGveShb4dqx4brqsbnLMJG1CncsD2uhPxTPQWHMaJgseL63ovx",
  "key40": "44H37pkbV2BCWhbYRHcU3Y4FD7rnG2U4hVwoW93ZdLqqaccvHfgjJoJBVMjyKu7oPWYh5QzdYm7fZxUf2PyWwjy4",
  "key41": "342AG7EnAoVBEy8NYdiqq6WfUnXnLRdBb1RU1yocWUn2dKA52bNmAojJhDkAaqChyeh7Ju4svjyVhA7bZ6XE1YrM",
  "key42": "4ztkeNhbMxHZq31d5aSeRnDrdGHZdsgNhYt9uprfW67YZePejBUPSJ4uzCUttCvETVJko6pXAFBQ6EZBkZ8F2Sun",
  "key43": "2nDNgnG2QcqBRFYPHqw6e3C2aEQia5jpmcb9D3ypT4LEbtGc5wtYe1XRxDHBvGUzX7BqP6XbKKDbYPwBMNgJqTnH",
  "key44": "4cRBsZUB5dupkh4C4xbqoyGLstGp1J94RrNcAtYRrH3ZBhARvELyKhsrQLcbtzgKC17xrBjsAogXXDdjoSjghXcy",
  "key45": "57MRWopYk2ZhYQUf7GP3GteAMSfEDFhnDsEFfmRhU2sAQcwJQTRtMhtEdHE7vhhMJvJQbtdugWMG7BQx8Bg39geL",
  "key46": "2Lmqx7JnYpNm8VMQmny5jpZD5jHsBdZCd3ShvaaSsJHPYTG41JPf5NuyaA7apqXx2Syxx8Joch85gLG6BkfkofJF",
  "key47": "Kqorktp28ffQ9R8BV4cHxudSMiqDJToYbDigu48PNEdxiYcSM9rHM7iojKS5eQRLgKRTPXH2yPo6quoU5fNqMVY"
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
