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
    "4W67cXxFh8tSgAEduLAgrLnE25jA1KE7EEd4Xtb4qpEWHt2PsFoB66tDA6Eo54uPeu9oTXXzV914A4mcWs2tDRGE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Jn7o2Px1iGKaCHGMyjocnndd6TNJnFAAC3owsdhdQhk2BbZgiSAgHzdnhT9paim343R32hCVwT3hxhr43weNjYX",
  "key1": "4UKawtSzqMD1wEAGUZRzuiA7q715TMoGxwSwUwBCZChiwQrNyEHAuQSx9wvmQUnHX23NqanEgu2acoC2VNJUUNvt",
  "key2": "2vgt6KjT61jEnmFwgu4DTCikjdHvPgk5tM8N9yUgu2a4TLuPf29qUfLMreKj4zVzvbGCdsvbSRaNoj4oZKJUdtLc",
  "key3": "5tumNYDw8WRiYZ2abEbdvH7cUWgbcYEbQTrG3WCrM6vzknih3iQz8S484BTvnpgmLj1WmoCoKwg4qckVU4DSvw5F",
  "key4": "4rpqCVE8tj8bi3LiUpqAZhtyj9r6XW1R9yGaxHjpv1RqsTai2LRxFsTz6tnFthKMyUA99kRJkrTTvZJ4X5dWnU4B",
  "key5": "46r8AzmLrou5g8UkZcGgB4sMKXyt4EToYwX6b2GLKtSgU1GJ1cVDsshAUudaxZqk59SDHxf948hyzHaaFTpFrtJa",
  "key6": "aXDwWpXiChjgaNtXmp3dSMjGVECRdxLf46GejYGxp8CZNqL5yEf6TD6gkmAGiTL1g5dyeySMm3QYGQ1KGPiRCqW",
  "key7": "38yzGC1QkGv2kd5MysG7vxEPogME9WW6dtZ4NFWHP1dudUssh8XFVfwRVj5RqKdqqk36AgViNBoMUxGasGRLUC4h",
  "key8": "Ty5Qo2JK4KADTC2cVHiwsi6khYTaWtD9hikipf5ngdtRcFiz6XzyXm1ThRMCiLxUP94iecZkdBdhDqSEFQMbVUn",
  "key9": "24cTx9JnQHTdfQZy6MiQn6njSHdCgMGZqnBdw9R2HbA3g2udyfsfYQNo5LAq35A2rbjuiFbfv1CiZeF9XL4YVUs4",
  "key10": "Bopf4hehhCgP1tDNquRkLKsCRFjFyeAvM9Kc4fK7wvtumBerVS7SDuPjMXvumrypwWJTyCHnwdXr9We2pQwFfB7",
  "key11": "4cdWuw6WazL2pKJymtm6JZKZmpFKTELVoEoX8YF8sFBsV4KtUFssqg2uvLToXjC6UkjoUnfxE5YTiziFX7FcXNvH",
  "key12": "5VL2yBdcHi8knNjQW1KXW4mvAYeJk79iVK9FP2ZbQDiZfTVCMPzzYRsQwgje1hPsgRAUNSsmHkPfnwhrkjvRkmoH",
  "key13": "426Hsba3yY9A4zqccnsx6V1ZZNEueWof5YKuxMZoAnF7AioKccETAh9euNhX8aQ86Mv9WSvVvbDfcfQiQy29irrW",
  "key14": "3cutatVhmmMvLPWmscq4zrkbPDdhojXBq9z6AHoHpiCzrbJWEXbJxdU42HdFoejX6QRqDTbRCaC6x5GFQGhvnCse",
  "key15": "GnpPqLGXxRqVqUzt6T7kjX4wioRqv5VXMSyjn2nq3b22zx38UNnc3mUs7JP7v5VpUK8toyWuv49Y2AZnhYGiphe",
  "key16": "fGcZGj3FWGGy6qfarTCKe9LeiYBeX4EwU73a3bx3XWymjmTZzkfc2yAY49491tD3nkT6q4ieCqNFQb1QmKTZebZ",
  "key17": "5TLEyQHZXTCiGpQyjEiNYQkvY9rw8CXnGY28XFmWqAAEMrCsBZZLpmnQJ2dakfqvsnac5URr66yEdsgyZyNtcfP7",
  "key18": "46sQiasoBm1RGQksTY14isgD1WyFtx8cxjuJt4i1M1VfdGkX5mLxFCu5QWYqjMWFP4qU1H7Me75ctVx4xi3iR6ff",
  "key19": "5e1XW5XwARgn2cPPfikPDgRWuR6sRgjUedaGJuMEzpfRpth2jt6wK72JcfTeExREEDo9E8EgRBiPNuPMJPR4Bv5K",
  "key20": "2RZB8C3tCAuprqP9cg4Sb7dyMdYAepav9zywQiwFdY8U2h8RHV3QYpThKp4v9NYbtdE4bzXxP762Kk2cktzAfPhE",
  "key21": "36F9owLr2Ysw19W7E81Vh5m5hs7Z7hzrxP7XRwcj2XGgy7knQ6X8RCYaiN6NE6pLjFKiTUdyR2oTcMRPSKkHC6gT",
  "key22": "2PQcHDWFkQFGnF7MHc26mHdGBvQHMSSVD84qkuXTguSnbGoqGUCcr5wtL1VqnmiUDm3QRM8DQ8sHRc1ghdaKzPZ2",
  "key23": "65q37nAbWF73j8sTWd9WsiznxD9qaqiyqNYi3GRrQE7Z56Ug8oLe6BWcYsnw7aLFTfo7aJpjJvwd9H1xN61DX8sf",
  "key24": "4fAGDwFjoCmV7HEzj9k1gM58JBotjRVExRwfu7vrDBZzogQ1yUevivni4TCDeruTDejWd4aF7X8fxaRDn64oJmBW",
  "key25": "3nNYi1A1i2QipBCjACyppPnDYmJYwBL42cvJG9mAnvV8rtF6p3m8VyHAXGesHk1UEVARzoydQrxsPDDLFW9dzUVj",
  "key26": "25AyWLbAFMmCHv3VqnVpW8MYN59m9Athb4sLX8EHEVUnLBaoSQvSSKVWEdQcbVXcKCvPet5Pxk13ieaFZo6Hxupu",
  "key27": "29xB3h6HNiVHQq8ben5cbc7EVVp73yHm7Ryonq6RY8tpnPxF64E3LgJNr4ahWMqmj8LuZRJUS4xpvXnoD9sAH1Vj",
  "key28": "4qvPvkFzykXn9ZSFB1wBSf5416eQYPvgHGoNDyr2oLPBiHqktfeDFdkhmrivXV4ysFHUDD3u62vaWetPAAdWGu6M",
  "key29": "3AsrCxySmmP5aCL21EwLVtz7yBUbe3sc5eh4zmJBBSHRHSkEhbnKCw1gpBya6VtE1yYRHVDeVQiQUSigMVi2KrKK",
  "key30": "6uumpiZEiYVEHfYWrVSwP7veQAWCJt8d19CP7jUzG38brs7iTSFpCnxeJeDVwDvryfkDz3bdv1VDEsvki3gNohp",
  "key31": "23divQPKRDeCfhVL971taoNThL7XwVWoFgLvV348igaCarJYQPTJtjMLkyVj8NLEvMaCiwqLirW113bhg1TU99Nz",
  "key32": "3nmQrY6RpLiE6fVezDoDbWa9QBwXyuCcEapLRK1Smi9vtRVxFTGdgxeRa93Cim7BYUMPVfNCGBYZHLTvSwocK79",
  "key33": "2FwVgrg3zMPkmFFBoneVQzEpBffmF3mMYrTqgTgv5Ajr4NLYF9XzMejFjhr54AYxam1gbvCmaMQ4aFUkai2dvyor",
  "key34": "4qaiHAoDWSDuKVpCtW6RgeNVHudysvDwGoXKMG7r8ohNhRppQjtvL6Bg6f78D1MkjvRxEcocWPFSWAtYNdnmXuYN",
  "key35": "nEQwyo3sdUsfunxtBk5dCkvCREyVDSZ4Lwkmag9iPyhvTm4Crq1P5jBVeYBhoCzAYLMGBvaYF9rPP4sGJw1YgNM",
  "key36": "4ZnUPfyHB8XbznUnxPAKmXmNEEN9wJUbckX5pz1hvEq7bEHwWdatfW9ZCmziYULhpcBwEPW6FsMpmDQMLHfTm6w",
  "key37": "2Rdp3oJBV5gLZFJJaToCRbxQNCiA6CWzJFU56xYHQwAvV52KodnCVq5iYGHqCwdpAWF9ozCeZy6VzdWaPTQnyhPv",
  "key38": "35hkUjXYZds8iGXxKpz7UfSPw7eGpJnHd8B6TJLSMLydX6SkYNskBZuyJD8k26hNn8vD9jqnvX1ZyRuUJ72n2Kfm",
  "key39": "31tXc9SVo1ey7pTABE6jTfX7GqkTgQtE13QnXmwPxfPknQsf2gUiT8yYopy6a3jARr5CZD4v9o7ZcgptiNmum7pC",
  "key40": "2kqcXtwB72MB4whvAts78RpTPqJa3HUJf53d5YXLLc3jSacwxLmDpHomwVEoGE7W1tWro4AdiCHNgKDjBNQboitT",
  "key41": "4LR3rCN1wo78BZqF1xM91Er1GuCZMjP8B7CteRjf4xqH833Haffq5WUE5RzSNHH95xynftffTbuHwfdpE6vdgu24",
  "key42": "5xsegYW2vCcEUL8epnVhXpdzcNAB3dp127XpZ353WRiYWYCTQv2wUoVrXGGJXLh2E84wNWLwTxw4o48wC8SG4QJ4",
  "key43": "2WXNSMrfZUHoaK2ojVjkquksNbBsZQnCmFu6F9fUgBgotoAXEhYaaKYigZon61r1VQ4q546KwLyuxaHccuRYBeh8"
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
