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
    "4SURcAJUhhykC8zS4ka8raWrbFuy6eyFnV1zfX9nzdSsoU8fKpueGbE6G5utoSB4wZeSEXhrQcSNyvFatRmsXVPN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "h2nBWFMoeCQNywJPF2za29RxWBEdF6UQNp1pjus2a5rWgaEWBbGRj1rA7RQqshALUxbgoh4KsVrnYNVjEEFE8bW",
  "key1": "hV6RZricfav5NwVepk76gwvr9xVidtpt8YrDBWxB6p6UNfc4Njs8Ltzx74bcb5LjLp885osSJcyYmvErqWNCebV",
  "key2": "4VZbmFkCQ4jk5CXUiKWkgrtbwq7nqUsjdxyPFxXBL9VaYyfxP6iJjy5mBq5qJuX4FZXFa9sChaxgXfK1ZrWiZnL9",
  "key3": "4ntczJgstrbwG3ptLrGkyFdxXzFbiaYjKxXai4YYJY5HWTaYAKNEJ8A8yJPZGH5cNCY2g5kSCQhov7kbgbEWezrx",
  "key4": "4ZWNVkgseEWpfUnVHpq8awLbKWycQozn7L6DcpHw3kMC6dZVZJopi3pstfsb4xNj3eG55VYGXhAxHL14g1YBWxVW",
  "key5": "28ho1CJNv5GqTJ3kiEFM2iGPCJymu64EbCUVmCEKDqCb2GsFVFBXjceL9Pe8X56k6KcwXziJbT9FkEDQiQHfXstB",
  "key6": "3f4KGJfPpcLCco1nzNus8avUVYbxHZ2nrkxF3z8hv5xyNmiRhmZQXn3NKTt6DyjAjT9JhminQto1ob19t1izUrZ2",
  "key7": "4gGpnqqVoVVbVvvY35EioZobqK2jZgEgEE5H1KD98SzBGLXGmmB8yCMo4jmLV3dYNk1Q6oXqCnaw3ySGWHDxgCij",
  "key8": "5T89jkbyCi8LqNAyBp31WTckXM4etW6UXGHQ4V26XM1apGT2F9hrhv4wGdFdKJxsgUwJVeN2LwVvurGNEW1dcEUo",
  "key9": "idDonGzRSyYY4vqorGXF6AKMTgqWiw3qSVzcgaiKDsGwXsapoQrWUE2EqiCqZQummWDNTqtifAozRFmUGYfXm6H",
  "key10": "d7JnYE75q5uyQNPmSQ1WWJaW9voDBagQo41MPTkBSUi9nC1XYpvBGVus69tPCR2JCDhRkUMYcM8afd5c71iuA3g",
  "key11": "2HbC1NhGP9FeXXLEsukp6sGT2K4fzcsq6NhpLvFVLFLjz5e3Np8EshxDELoEpQ9BUp1sowdGEv1rtL2EboQRC36s",
  "key12": "2K9CJKjDxK3D9U2RwP57uzfeqXH2hhxNtxaW64mUbNuUxXx2cfutHjYUe9PM5yLM2Exk4FRYEtgGMNAfY7KZUSuE",
  "key13": "4eDVFvytTZCx3ci9XgATWdz5EuY34tFN3ERkBAqWF86Yfsf9EvjL59MGH7nS3hLgPo89bj8z5MQLrKgU2K9zsQyY",
  "key14": "WwYyGB9HP482FnkvKAGUvAY2wFoYzX2HZ1kZvLcWBAa1UqeLH9ZqDaT3HByLvz6rR5wjfXASnCmfSUS1k9QSvMY",
  "key15": "LYEp9W8d3ad8jDjZuRc5pQ5kf46nBBC7s9sCFrySu6psVgZjyaq8X1cP1b8aAF2o2yJPzVwUtzLHJoXngPBW1Ge",
  "key16": "518TqNjcXsicJ26jWZVviKSx8qzQ63nNmh8KKhX25RWc6x4c4MDZssj74VUq8TM3gcuJCR4ETYG4xbN3AG6o2VNK",
  "key17": "2gnC2BBzYjTSxXgQSkhwT6jK6NH3ir7NocHST2KLKpX2porhs34xSbqdy7sd9SLpoCTtekjQP9qVqxfKd1BRd1Kj",
  "key18": "32ACwq89kCLXCmLnq9TrK2UmvSxcjA5bHXcAxKzbS7RKaMgXKDHbzEa13QTjQXzYMYeovSNz9PLN4w6Uqf5wdsY8",
  "key19": "3yF8icbpoooheEZJTB6NrvECaYQALKtUpTG5xgxT9S2S8YcWJPsffmVVA3mZgdwUco6MqKa62ts3UangpFduJw91",
  "key20": "5BC33myvi3NVVCJcrud8xW11ryDMmysqhhmJ3f1eZSCECUpAHqFmP4MWxa5xZX3JS49kj8VFAnyxRyYGzQK4eaR9",
  "key21": "2jX17wzWkPkgfaQFhGTnURzrjr6DhaXBBBodmc4Wzu5p69WPQTHY68NCtcS8bzQHRPbG2Q7SaZ1F4X3xJBwJ8xDz",
  "key22": "22yBaENhxc9HACNDeTSuFZgkaHShFsCA925EGBcfrj4PvarVNgNdWXKeMM3y2cbMA2LFwH1aUofDbYyDnbA4ebtK",
  "key23": "3yxPPQHAYMpFr9GGPGRmGviPkEn2GvQA1QgbKZb3ETNcBZKBUmoFaqcqFaLr85nADPnLaSLpAwCLCYEm41RfmCx7",
  "key24": "49X2xY4uEjRsLSuaEX1cHWQWhZTrC1dqBFA1BEVaXMLvyHJe9H5Dq9jf3cBy7DPniNfmZcsBSZTRbYvodTBzsjRH",
  "key25": "5mGty3fVgZNzv13x1H5raLSCouMGswVV2ife5y1JNqG3jpCp9AZCoXZXSghmmSanyuvnphgdM6hTUXPkCV87dkA8",
  "key26": "3D7WDEHTxrQmddC9CcVKJ2p7dh3SryyDjN4WUPozgtttFZ8EA5jdAndVpQ4esxXJhhjUrW87U9CaYJCCVNdfR2M4",
  "key27": "2gE35287aNswabdWcte386LuQCXoZgaJTiRnBhbt2cSP9JfqUTkUVNcZhetYmVWVCBiuNs1eE9Qrk1WEikTqxxDL",
  "key28": "xbxqYyViiNfSVyU7NCX2HQXmaFjvigdNgxT1LWKaGoeZWTfMJ9jVr9exS4UtAVEGLnUqcnCpQEHhoYnJpaXzD7B",
  "key29": "2j9oanGBf475iVzMS21MSVyLikpRSB9xijzMR6UH3q12T68nRcBpfBh6LV5NHsK8Eyiz1NHkFHy6NfePuh6vukGT",
  "key30": "4jSHoaLQc8ZwpqdUEaU9nqFqg6pwfZq5AvzkgQTwecyKimgFPAPJo42N3YCvVHMUf4F4b2TPPNyhA5Duj5J4tGPW",
  "key31": "4VfKeWZ7uD7rAb24EzKp81fKUHD7oY6dV8tpbEzA4V5NExDZXrmK2Zq1E2FABCpE8rkak1B3MfXUz6eaPHrj8FqE",
  "key32": "2UccL9eeApYmuYtswA2S4a125GFR2vzX4iPw4gefgQ8VeaU6U2Ca6QtQ9M9WGfcA3rUjpiLra8AnGBkSra7jtD1z",
  "key33": "yM5Cs584Nt1E6mjpGFLt8yeeQUTJgLwKNpCfWLuFv5f9txuECYVhzFWMJEZnoeKKYXPHT5aHjqi7rxmEnJn61jP",
  "key34": "228ZxcFq5jyW96t8xjR6jQAKhc86hvBxs4RKLSQQQ9ZoK3uG1s8JVoTdSdYJ3Uv3ubyvVaBLxAt5vyGzhXaefZ44",
  "key35": "ntsuF5QMK43WRXJaYdungPHd2vixLFo51eCE5T81kjmr2VqCyvnGrnTe3Vg5dkL5uLzzuSArGmpzgE5EWgP1wpS",
  "key36": "2CEqnYqjeQnmw1rGKfbokC3L9HED14juyBizT9uHvMV3RQ6PcMN1ZHcxNrjH13gZguiWj4zc6zvULW5v3HoHKect",
  "key37": "2stu8Ak6ujJ8ykGRAZ5ZKDPTTSAqB8meJcdYJiSRC7aUBjMqn6Urd8dTe19bue9cXSw6FSEJCEV593fMn4XGZwVa",
  "key38": "44w1kbxodfkRA73VNsjHBwHXLPtS78mGGQMG8Jc9z7ci51b4FNEpfKmNGwNyD1tDkrNnCbCVCNyNzAaqLSep4gyd",
  "key39": "4DH4jPmMvSVNE5PEhYttvpvWzebvXFCGUBynB1GamYf9CQAbpUywa6nbq8PmvpRsNPV2Xm7ETrFoY3jg61TjdUkW",
  "key40": "Cqdyd3B6ARaHe5b7GhFyT36yj2NjSeSMUdnjKCEQvev4WHJSuWszE9U5iNySVM6WTgL3gz8ZK6kpF2UN4vsLfBp",
  "key41": "66ccZ4PZ3Q9A2iHseVpNrScEshJBeso5pGpq4a7dVEFsK9Rq8f4DncAWdFk1U6hQDSaGdwgjA6pmPhWiqPXgi5Cb",
  "key42": "2pwVy3qSyMVcKWT2MbhkEkYZyxvCx3tmQtLdKocKYzKi81jkDoQpzK5cPkQXSjNZStqf1tR7K5EvZPbiHhh3kvmc",
  "key43": "mHcVrF8qSpi2uoRotSPLrNULm3nWg6KxSEh8i7DbeUqqmCDv8KnXgXJ9DVgY5KxyvunVwMASBQuTGdZaN3ZFJpe",
  "key44": "54HoQ2bEZ77RmersHg83BQNXhkCCcpHXaabF3p53Vcgm5GisSvFBskpZNVU15HUzJB8pggS2bWv9673skEX81pP4",
  "key45": "2hRw1Em11hMpBzrNBXSUkHq3vES1ZWtuJETg2PcbeEJoTuhRWqZQzEczzkcqqZqwTV8etNrzwpJBaRrKkkbRQJpn",
  "key46": "5MWMNv8RW2456hv5aASKWnHEcAUfwRzETCNYNjLzgE65cma7fHrU92t2MdbT5CPB14YkbbTjc5VbY3CtEGJDZhye",
  "key47": "4QeYwtnL3QGj1orjdb1Q63gKjYwfxHaGLwudxf9KkyPwx3JCwDuZ7WH9ids3bu7MqWiHpVRLPY9zdqjv1N5F1p2G",
  "key48": "f3v7hRTpgp3sLtQaGvHFeXsN6qFJUNq7nmkUqefgRTEGV91Lup9X99geGGTJyUbvHH1A143sBizgDCEU6wuV9fR"
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
