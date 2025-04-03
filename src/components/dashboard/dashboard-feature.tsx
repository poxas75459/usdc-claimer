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
    "2sFWvKqBcgABRwcfuKgU6TP92Uy1nKdbayLTW4f1G5QAcCjwDEXhG3XBqjfJFPAuZvRnapDpAbAYkYAhjcgt2azv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TRMKnpCt4bGHbXpxvTjZgSanPmstwAZ1fpGaptSDKocWc5jbdcewf5LjZM7E4Emwyg5ksa9PwkuTFDGSb6YGHPh",
  "key1": "3rE2icyAK6EuaB3tYsr4ridxVcq5FrpS8VPPksXQjaAhv2t8DPajqihLMDUrmCKjg1vKEDN2eRYHjbiutR8tgtj9",
  "key2": "2sQKfcVtkqp1yazruPXhWFg4REHGbJJ5LkgW677QwZqTEjd5ssYvWW93uwTBruU7wpnhnBDz8FuGtNZngRzgGLhU",
  "key3": "4VyayaJCmwGEUYxAJMmZD3VMSWpdSRi4vYs63FPh2X3RyUHSLr4jouEtNcnDuahAsyLeSrjQQ9r7Csd49YJ3zUcn",
  "key4": "399X2qjBV1U7SNP4CaV4g2xZ77RidopRLyc22HvQ1pHjb8rfLGHpgRva7eWs7DLRDUm85epVh3k9MTXBqMTpDBWL",
  "key5": "U2gF8unvDTUH1RBC8Sw8YMrZqnEhNroKwRixSsRLdpMn6U2fH8BSZhfV7D6YRbSPjvySqXDs2JXPSyD8rc2Ht13",
  "key6": "4C7BtgEMegecFCtVhTAZ9kSYneQAP9fZB1vc4cKkq8qVAtJ4FmhVPHEmHUkqEfdUCHuSq9AuN9uVNvH4tyzPf8hG",
  "key7": "5mA3EKeGAZ4BBzXT4cjp5Regx6TcJjDMajEYhigZKJDL66HxbgcZHkLnFo4K7hPe4aqn1DHzUkHaNwydx983JARV",
  "key8": "5BfSjR1f5PnG6SL7BtBgqXquB2QHonYjVQ5nZ1uKjTJ1ayDE9vPTE7py7mC3pjgdQaibKRhiwYaWWG5kxT5APW21",
  "key9": "47HzGpxqjgywv8tBCk3Q7TSLdx7pSRt63weekxG6BRdHRmHSuYQSPib4fw9RVGPsteUqpGqGiAs3LSKGvXbusSrp",
  "key10": "4CjS4UiFkj1qgAeb9FSLR2oV9caHgmDWNdvF6Wfr9qgcAdXagX4Zayk5sG9aJ9gTCBurt72nxLiorZnwrJhRU7Ut",
  "key11": "2HYThMeQDCBvC5MiCxpzhgKeixeP5Bv1A6999UTjKztpxCFabpHRXy2FZPsMuZxJEfLLKfJp2ptwAVTs9GWFGGY",
  "key12": "3MJH2LjfreCPfTHwZrfopxcamBy7DFvQmwGK1kV4aNSeq6RsRyNAVqZHutWQs926P4PamwCQsEdEJ41fzQpjfFJC",
  "key13": "5eGtTSDo9MfcwmrC19agLJ4mZuJeFBg917Cv5T323tPVuJcqwDyjdNHh4gZDu6jfmDrEYLrYDGMiWrAYSLQtyxrz",
  "key14": "33UZfLrJhzDJhRbBBbDX2tok6LarhBFxPbrWARRJU8ud4dKVdjcQXSkPbfCCvRnUaM8XNyqXfRgLLR7FQRDWzS5h",
  "key15": "4wMyFc641rowvbYMBARbiUcTpiYbyXL856KYDaHZeWfJQu2Mdk2dLQbZnfshbvhXUBxYqGzqefzh25yLJ3WGUxPv",
  "key16": "s3bu1eTvErXULTkpJGtMkXePaAXRt3tyMywYJgRn29KZKMf4agFrm7fK3tGGaJXzsASz2MNvdxgDZq5M2XQqTh2",
  "key17": "5ec4cWag9QDcdq6EVGLMW6krJsNaxPrWdDUCvuqeoEJtP3KxWfsMM19NtE7nGgzfsKRzKmZVTFsHjXWzU1ZQ1Jet",
  "key18": "5oBWFDxgjHMVsHXoHLZeS6XhG4X325EqfC84SyWVh6K4KjVhAW61n2Wc2soJhp9rd8KUyC8gFNLo46rLfSgAztht",
  "key19": "4uxmvCJNQR2SVYhMwTmxL8Yb5BUEkC6qNZ56r6UeAy5EdFroDbcSX2mJTFM996cQTvYokzLKb4mi4BJDqfiAPWMy",
  "key20": "3BBqruD8oVrUUriyUjPiLhkgbPqLC1pRVvTziko4KdVZm4n5DVk8wirCF265LRGen34sE9QjSnbA6XF42X3WNPRE",
  "key21": "4QQQjDtbKMQV2fXvbb1iYUkKtUMW5ptADueu4RLAWDKa4WZ695QdM1wqsB3BH2iXhPSG1HyhiYLbHvS3Z4aRZSYe",
  "key22": "gkRGaocHJwbFWYqs5XLeQBTFDGiiXCo9yqywXN22iSQfT5PcgLDk6aVnHkwZczhSjsAM8i5T4yVK1RCsBmBzThn",
  "key23": "2fhcEMoRHSEPcvUbSjnC6LvxB5hQQGdxocczfVkYB8uv74U9KoTyzHJZH9dQN9axeEvuB2C4d89bUnEbD1SFuK8c",
  "key24": "zjw9cbVomoKEfR6GbC2Np4eh33aFd764eKGqYRSkWk7dJiMMuVTiPqbR9NojiZrbs7fVyEv1BBuZAsqFE3GyNMJ",
  "key25": "5ZqTvYCVqDHRoJYCKvHsytscTzbg7UVx67PuQGGzWtno19Aft2Fc5rH4RnHXoJxBoyX5pReWuLrfGUMaahHk53xF",
  "key26": "nV5GSjvGwEM7Mq15rk1gbWV3qinXnte8usGiEtrxb8KkoN1CYbHhJq7CrdmABygJkrCcR35yuBcq8VMerdNAEd2",
  "key27": "5NNHnacrrhosBrj7BvZtQ46FU1wbeER5phWvbQTFVnEB3uexUWuw361R42AKrcneyG3mBVrdXSYzVJkxr35c5Fvw",
  "key28": "QTcZon9AiRatxPjKzggFQ1e6g9Neu5SzcRfhjhDcxQfQfbUoQisiufMSgnWnwfEbnrUS1j89CQD57GXpEnReNyt",
  "key29": "2nHA1dF3CouCV1Bsi2H84JRpNQCaq4oCz16eF4obadmVDqZ6awU7rCzApriuTy63CUCyqfGyGvjsrNs5EGbtAb4X",
  "key30": "4v8EBaMXHKotTE3YHvXN28dhQkHi2ut29G6UGYLRFAt59v7JmHm2XpNK4p8xs8BJuuhTkkF7eWxWiBUCdgXA65iZ",
  "key31": "4RKoZ5fjS86k2P9kiXVqmwtfMZ5s5NJB2NSMxwJ4KiAcZyRKdYiQYYK5cyEESYzMfxHKhzjPY1BvFS28AwzjvcQX",
  "key32": "4JBXPv51zC2FG6gXiFizPk8XTBBVDs4iSvk8f1yfCgbGbTXbfHwQh8HkbF16tbdGdf7xY8ZffJ462wSMJ5cjuccy",
  "key33": "5GWT3ZphDDdz9C1xB6yF75n76B6s8V3grJe4qExo15g8iYqXdfGusTrp6XDKxCgvUw4NpicEThh1yNH1fnVtg1aR",
  "key34": "26WzUpdwX9nB3e7BGirquETJcoxpakhzaT3QKsbNWkpm1PSogy9BaMrmVP8yuuPHbBc6KjejLxpaXaoMVdD2fLkH",
  "key35": "5Fiq9Zvor8SLi4EfRQgUCD6S9SNfQx2hoKhMR5h7CH8JcbnPntbcH2DXosuUeJcybA25aFA7wfawFgfuWYFM9R2n",
  "key36": "58hdhmBPQjsUEXTdRRctbKxohQETKx2U8teVDU12W3g1KKUZGeU8AbEaS1LbUsTSvzSfvNVKH1KdbrcabePxXxDa",
  "key37": "5JDvKgkozkypJDTF26MKsiUwj3DY65A6YBydLZxPwSZjz2y9BTFwY55MhMA9h9BjpqHpLJz3467RZwTqwhYNpNUW",
  "key38": "3unKvSjopWidt9gmYZWhPzm5zXz8WfkzheXyqRWoKkuVuqb9M81FkVcKuwFdVBbGvWUiuZrzzjNVQKyU6pYmQsS",
  "key39": "46nLe1qM5r8KkkceYksZn2dqr3zfAjTJ2qscJj17z2pLRufAGTS558gcnJvC3rUb9KXc9DhgsssJRqMtJWpoEMCY",
  "key40": "65mNUeqBxKE5RG9z8RUx7n5FvGRXETEuB7hn52gJRdMCaCpKXZAraMjCdfD2UwH3vpCxLanjzaMsRaF8AzsiF9MS",
  "key41": "4gjUzkQofxWU3nRWUeXbqJgBXb6aCAwFTx21H1NEGWEi7V8Xj6Uitve6T4YvKwMNniCkCrEtsqpH1QQxbTPZJYhf"
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
