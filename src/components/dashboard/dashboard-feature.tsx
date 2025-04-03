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
    "4ynPy2J3eTnAMpVVUQk2JpsyBcADhxBAw9nViUjhj46Wc1xMkc7tYuQTEobNzczkTcLUTZvwE8uhVfNxTgpAdbWN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "J1onqkTAV9mAnuifmpvZ9cJHGnTPKfPQG1h2YCxiLxkxCgCdGDNkekamm5q53LoHQkdZ6izuJzSRunQx7WEF4fJ",
  "key1": "4zgHcvPRfzeFr3zXHMgtPQfuNd99AX9Eh14BX9xTGMqi65WUErbXGx9zJMEdNQdffXaeb1BHgkn4WhYtYvbc9GuU",
  "key2": "21HDZk8VZBPyAdrJy37k61XJGEGxtWt9gxL3JGdmwtPjRygDoAQ23WsowN8KDFvnFudvQQ3NK52tyCMdpdRMCCcj",
  "key3": "4xYuawRaR1R1ueK8kh7mj8WXKEmesEny178jJ2U1CGCbXmgipmYYCmexKHbhappVtCkHxXwjYxUvVbBrReBduNL8",
  "key4": "5dYvKZkSDzzTndBrvZCtdEAd8SSAv7HVKo14qH6vwsSMtYYpxz5KXWesarzqME24DzyqgTcmFP9rTSnGLDrWBjou",
  "key5": "5Zj8dLnxNbmVmwb92CKCuNNxw1itD4SVfrVS4vZeo3woW4KNZMWHGot5KPq9AUXHLf8YqGbchx8WSTFUHGQiwVC5",
  "key6": "y6wNdRaZmzXhf6zTYLLDwMTx4KL5gTBGBmWuR9hhNxiHNE7AZvhRqk55AqGHdkLN2YRvPF6iFQetQfGosS9mtua",
  "key7": "3MjJhWetjEeWdBMhpRyphs8biBzF99PNLypMeGRDiRrGW69wjbBNzXXuHveUsf2c4k2D6FhtV4U725dPJUhmeMeW",
  "key8": "3kWgE9hCr4A5MsKHMTNW97qqNxuyxv6YPwdfu9hSNf8Kg3niPv5p7d2wyTxxid3A4NLb9kxee8LTxdpBCZxgbB1t",
  "key9": "2qTZYUFfM3Ms2HLHnL4Wg9XXJ94BxVDkJQtvBJyo1GZmavbK8yqUCaDHHrdgf4DbGYaTQmpeqm2Xw2Kg5T4rJX3R",
  "key10": "4iAme8G9dFmxiyGfKYEKBvM1i8h78kiEYqNdbMVq7KG13MnsbzQZ6UDwXRuGc7Ghxy7ufTpMz4kom5rkJo3jCdih",
  "key11": "5ETXC1NrJZWAUBHPt9nQhoDP9KNUS8iievZmV2FMsD5abwthwzkFvFMqGfqnpVZxMdrxAwo7BPdFwehvLeVdbMAc",
  "key12": "65AVJKMNHchFm24dNTjPYV8aobqqVrtGtcDTybKC2YQJzZKzjF2sgYCNKziBdYJQz8SHg1vZKbZPEgfrJXhGB9os",
  "key13": "3RUWBMaHjPd3PZu5LMkiQFrn485sZFDrfthwzogsnxR42bEtMKS8hfaYY6N61UtGGo8YNeVqD3v2dw1JDUgdbBpd",
  "key14": "5GAqH7pcZHa65okHHv7jtDbNDw7aNp46HATkVaZSTPT8LyM2WeJb6ZGd9wMJLNczggSKs45NM58C2GtgcWHfZBLa",
  "key15": "kqP1DbDamGe4XqVAbXv6t2pimwLuZUwfeE2cqZGE8NcEv7GZFDEyszNHU9HdifugjAxKSYJWe8Hf5jfvRNYxskS",
  "key16": "5X5risMvMoaoyxGJkvzeya3XzKhw2ijtgoX9gTRJj1m1GQhmcTZWBDUoHr65B2vof7jJyN3Fi2KT6wLVHqSQXHSR",
  "key17": "5WncrKLL9zPmUmudAnnpPo8qwUXAPVe4cdHi4RoMFQACq4SpusBsY7KiwqAS25Krt8MJmRm1Y1pJVWwvoLomvwvt",
  "key18": "3e5ChvmDEN5RShNc7UAaJVosTsaa34wAuEpq4NfJXRsBAvZKJSUD3KrnJSAEfsPGD2GLvmiCPxkBekAwWUZyvuCB",
  "key19": "E77BVBsZCegA52WRfaQTdj35NTd54BZUushxpK7uqKvdY7oPw92QXaZHHJwbAEVMawtQeaA1VtjF8Z6aZohwaVe",
  "key20": "427VfjyPC27eKmANe5FEnBzKb1ebyEvjLMkwito3it33ocnvztjX5qhhaELATQJZeJadQiin1HRQ15MdrJ9m3yGr",
  "key21": "2RBgwnYacMRnoub7sHJVvXLhidj7KKZkQPZ34T5AwSJwotnco7g3MAqVP9JxQns8oCgpCJazKuXa2fBc9m59iHKP",
  "key22": "5WwFJKQRBkVQhUp9djDs6fhAhmrfCbgnch87w65ZdggpwSiF6sfiztuFCgDsywXFaYXHgF3dNKJ3MqJEjVWYzWUM",
  "key23": "3A5zNf2tLz16iw3Hi9GLM4h3ZqvNmUJyDbqaHVcx4SCHALcxeTgcXybhEBSE6M8nsNpYtZXs3c6s8aLExcBhPYeb",
  "key24": "3raS3mLGqGBArFhF2Wk5AVgHL4TWhFLHjq2jt3LfPZYNcecERbE3DsX3ERq14AV16X5VoVF5SAE7ojNEKhuK5SeS",
  "key25": "pMVQ5CUddZXsZsD4fRbDkykgBhRkrTQVPCsqZ8eAZiVyKZdQ3NqGdtogCmtNp1A8cBcxwdNvKkjXErNagr8xQwV",
  "key26": "2ra8h33q6urkAf9iCZS9aQaioAKtFV8VEi9aEzeDxhd4eFbFxxYeKqSA75tr85wL4UrRx44QFctDqZbQgfKuoq7i",
  "key27": "jKKMQDxZxKJq5NmTV1T49H7bH2heXHKRrbJEJUhDqfBv9fn3SF83DEBdqcj2WNY4yertp2AZYhUZCWhCsbhYvcS",
  "key28": "4UiMK9JsqiXJ4zhzdyBLaU34JQbjr3UQZ3adeGUMCX2JvUFaBPduTNp3FQo9TYkekUPQ1vFckd8E6wekDH2RXxin",
  "key29": "2MaJpidoU2BnSPnejkXffao3ds94usXWQHCqvBmoWSscbtJ7uqg6MhUtMXptUq5QH7syAqALyKHF7EVcx1Xgn6oY"
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
