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
    "2RToUd4bbiFKWntFYhHmTsh93UmcVfQMPsdYtYTdngM2PwxukNX2EXB5HECmd4SQoMnYXCVtZzBgeThvvUGGdS69"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oTXnkSwdB8vbdGtN1755i4MPV1CD6sFKgRUJTvQifKvMSK2HP2KgrE8JJ2BwMEdN2iJSi9mUseKgoARgCU5sL4U",
  "key1": "53dmvK29pUn339AxGp7vvxjwUmJGag1TsVrXAWJAnn8K7abUojgCdpJ1d3EasqWGUGHgxbFFb83jntPCjAABz1wP",
  "key2": "4yqM4cKQWoWASmAqEdoWoLpH3qizQXXLGKmm2Jj8H5KkeMt3okWLyJTySUH9dXzg9EcAk8RpUBBp9WtHp6YXRyqw",
  "key3": "4mC32Pq6s3Azj6fRqcTK3K5WYFsjJrJKpd3ZNBHDeCLgPfC44DZ7NtiRtuPnhKCSqHN2YEV9hPBnQhz8BdeqkZ8E",
  "key4": "5keTST1gCWrhcayfiEzB7jLFJnGMKKAhbcuBmp8xaTMWE8evQfpWaXLkmNaj4WN3txSc18BYKk3dLjbtQrMLHJJ1",
  "key5": "rT7ZZpiBEB2i4AjRo8SkWHt8UuSZn3FuhF7BFtzTTVfqvVANXRoReuFmvQWpbsuirv7KsAE6SUQGnWHjZxpcz46",
  "key6": "49QNVmwNG1yy1LXarWVP6cjCw9GuucddGFyYqCzhgqysE1t9QUXi8v13uraHUAPG9MuZQy9rBDCNYL9kF6uKerR",
  "key7": "62EeT25iXZq9iAQ5cPM79NKrHXGU59uzf1g94SDHJmTsCEQyaNEdhBVSpgwTNVhvjDWsmLEc8fnHtP7evno1kFvV",
  "key8": "4Eq9CL9Q3uo4FUsWvtJT65UfEsTeVRsiS8j94DX9SFJWYmqWMDBRBRCmyyi2ZABPkDRh54wFPbXxd9nQUzbvd1Sv",
  "key9": "53mdw7E7et218F1Em1rpePwcU7LxVEiHp1VtE6mVuq2D3nCJUk5ykY6LN9bxfDvLLV7Rk4WMpUFXKvZP8pxx5ThH",
  "key10": "5AgCJrtavPrB17dPrA6UGRFtkCtBYZELyn2BQHUAsvxda4afzjWJDxH3HnRS2EdQs8XoDfZxtEBUeMCWnd7ekjUh",
  "key11": "SuqCwN25AhNA9F3vtksfeiBUWx3jezZcTfvmgedmkkWcFD9QSGsXcCUDzVafFvo6e7kJE3K3zE4tiKSyeZELWkQ",
  "key12": "2SPHeGgku4jxHdS7dQJtSH9czZMUycFMkmkKcz5GbR4wxSzPMKShjLCMa1zVwQxFN9RYaRXHNd2sGGP9zkZWHdFA",
  "key13": "3vXoB5pgRs4xAcSMR6c2oH5EYsbDFU5KvGt5gVnhgTXLL78fx68SnpjQasDF47K9GHBwnHeDgnMmBgJARB9teTSC",
  "key14": "5Ra9n6fjFDbK4eFuzU91CK1Gv81Qqh1QeHMxa3DuUvfm2CHdhjD6USgcx8hCQtxhn6Pm5FFEhNJnwC8U277rvshA",
  "key15": "5c4AtvHNrUu2swo9F2qFdbKYXMNoaqicbTzc5H51P8zvcnHVJben4DGjLhrdyEWSagiBv1YoU79bBK4WNPVHuLu7",
  "key16": "2iaU28X44eM8DeGAQu1XfAR1DCetg6i8rQD3dS998Pz4s6n9t12L6MdppTc11TNhvK3u3UGu6CbzYLKGa5opUNMJ",
  "key17": "4JPMs44T58i19pKMJETGR2e7iACNfXx7aXzbN5mjCv39foirL55DYRYHbra83Mv7naPfRpqVhkDt7EXzQiiU2mQv",
  "key18": "5gbBm1Xn5HgYxU1mPwJcgxiF5kZNgL7qTyE1TShTiyqnK2HAjfjVGJgonDRjxb7zSuTawhJvYagTKajejUsB2GSE",
  "key19": "4nQAbYaDvDRNkbLVTV42eXBoCWKsDYu88VMSmw9DGYZY4xYZqyoo16DhaPkk7rrQoimiCd2n9nr59wiJ55juqH4U",
  "key20": "5vaUiLp6XSnXfnTAiDiCbJ9NT9G5NQBCwApNZqsTg5zjB1mFXvrBAmUFcH8up6efxYwguHqfP8kupFaUJEQHWwHN",
  "key21": "3SzBC8N33wRCz4FQ9nJ8DY8Kc5AR4TaKrxX8ak2Vp52yt8XZS9BjLksxCpj7t3SHCwK9gdhgFLwvCAgHmptABbW7",
  "key22": "3TigndhX5qxrSMkXh61tQRS5UfSAcUDVmVWxbkGrQd56AHTLQjtBZNjVR6rtuCymvP7Hp3ZFetmiEUyqJppvq8ZX",
  "key23": "5gGxqvkxmpKZ6cUhvY48mRNVzgGZCwqXvZA7YCH18rpU8T1taMdcAqzZrBaAYgxqnZcP8izqQ8FNEfq5s2W7fWrn",
  "key24": "4ysBPSvL29mJqWq251WKbDnjG3SivBkYa7XpzCTRihTQgCU3x8Ye25nXgcCMQMni8Y5bkDTFpcxFidhyRrUkqxg8",
  "key25": "5N3nyE5qLQo1iFVnQNfozDUzC34EXGnC8b9pqJAC6DxmyStQzoJwCy94r8Ck8KEfmnL3gs7i2vHMv4XdhXXLZMGs",
  "key26": "4fW5Qfye2ULvFfxiwQw1NX3urWE5yavuQ8MZ6G6mFpmWLPZbhibpo2J1J82EpbHpArvpQzqdQrRdBx7M52BWr8ZA",
  "key27": "2h77prKqXtCwbh26XASjFJQ7V52z8hnHeHhpn8wQXkGD5kVjBpw161H1NeMW39YXHw89SXQGnmWPUyzXQB36KQ1f",
  "key28": "2e2d3FC3XBBZYWm2bP1dHPsjfcwjfQi8tT69onM94s9qSmjK3TX87Gy6mjZYdAjgpfD7UR2MSH2YU1ZTDPAknShB",
  "key29": "332NT6Gze4Y9y6rzMtSQoXKkZbWBkkGii5MqYAy3aEJja5pvSXwSi6CV49V8e4mYUaPmt6oFPFYJb38w4GHjM5cd",
  "key30": "4m8D7ZBEsxTvYUQEhwpPzLsK5Zt4Hyb67wBC3VtqdHMFRqk5J4htBDJoAMJ46nShzCKJCF8aiJMecyY1DhpJNWaw",
  "key31": "2FeLRFyMCc4oiaejZL5RGSTzzYoodUcTe1LKRndzdPXXZraibfQZCpaUt7dUzC8GeYKGrMaBZQCHSZmCT4r4dtGb",
  "key32": "iCRZLwW1nUXiKUv1REQ9MgpK7DrfqzUNeUHXDa9NKnTkfaMQw9z36HNGHMKtwgdqZaeLG793uTdezgnEJPvc22h",
  "key33": "wQsY8FuudaqkqaE5wGe4ERjrj9fKRC92SV9nib5ZPts8nvQEpRLR6NuZDnmuFV8Efd5YVvAjzjwzMqW67TWEd84",
  "key34": "khQiLrHzeSrQH8pQVZFvW7aSaepcBZwBoBBaHiUMwfBCFegtDLhFWSZMioWN3QQaHSNzLctH21xmejC3rdJdgA9",
  "key35": "4us41SYRXLXdTLNwVJaDfdHSU8X7fSUgsNjhAyygLKMWTCknBozBSDPrKG47wYNhpNwc7CFReHmvbXSNRXqKwssd",
  "key36": "d1JB8prPKpi3TndkNdTgXcBnmbgYZqdS7NyZbjeEs7BaRKtZ5WLTevenhTSkAwGmZ16877uYwV4yGXNpCAPMmYg",
  "key37": "5PqcSBBxCP1XqarbsNass26RYZwNm9vsnwFAosN5Lyu1XWzpcwaMGrTCoeA8FC9p1HWYXekgm4B2SUfwrzGYVLmt",
  "key38": "4ceecbdcRUhYeS42vjbuMAo3aheRUeWUAEqwpjP2UiYBm3kbrP23YkbrMZ7qBaSZbvpuK5SBcFQmM7HNz7PqmDEB"
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
