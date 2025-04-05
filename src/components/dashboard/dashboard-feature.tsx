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
    "ZVwTjLoW4jSFdxU85Cu8XsNQrh1HCng3y3ZrxZsss53zNGbx89ZYvAg3fj7xnvHYdNApmpwqy8rehr2iVMXSfCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4r9wYzQSF4TCGY3xWwmn4esz1dVsAQAgfvaQXLti1ytStNWajaSvKL6FoUg6vGLUqBuBEGtFQUdNmB6bhJybWfXc",
  "key1": "LL5vbS4QRwagTFrLgjCoFXi42Zv366RXAyKqxaSKoiAzAkoz3Wqbi7uyoFSo4DXCJsGRuXVSVZhJSbiLeA5JeHT",
  "key2": "5jYR3dUcJCGRaTG47M6aTenD55huV6ZYpmmkqu2uNEMNbyiY9Nb2BBthxyX7sbZr98AqpewVa5TBsJS5bAXrxWMs",
  "key3": "3GURYFpB78XGuxJxB6LWt5eiXMk6No3iXEt88rfbE5vVB5ti97kFBhzePBkmgVLCADnwFxB9SRMwd4KqqaAVF7Ub",
  "key4": "YsqJgDTHosKs9LDW9JijEBtQF7D9FDgqtmJCaJbSWokDxgMpdZYrLfRuLrqyVf9eR7cUXMYniWwRkNgicNhxA5E",
  "key5": "5mQyNjyxwujYV73LadTj9Ce8zp8fqHi6Vhtjy8ZSTfYzkf1KoayB4e4t2vusm8kfHmrXbeoUkZFQ279FoLeDxAap",
  "key6": "4WZG991LmrYKRzVz8sZAGbrMq58yzUsdPDbDgYem8Snqcrc6rXfQhr2vUok2Z9E1PxywV2fZhSRxyQcrdHrv7xRq",
  "key7": "2n7e7kHSzhx8Yx9Nf7zabU1qusMQhEJtkkbm5gESPH2yhXMm5bSPKR3gJt9GRVDW23vwUe7tz2XC9hQncJQrBjPE",
  "key8": "NjuSCm3M8nnnYZsizv6sJDeXbmTFd2YL4xKA7ojNjMq4huo36gQCsdpHv5o9tKaCCS7PPN5ruop2hGKUtJFJcRF",
  "key9": "n8QVgL7BMUgGMNAUahMwknYqCL82zSPMdMYnT1FySdBBRDX2LnBWMvs3MEq28KqhQYLAMuxenmGxDHhp3FmZxYK",
  "key10": "5wR8MerhKW87yyngXcKc9PZgTpxEDRwWoVB7zK8DLs2XfdubFk5xhE4ousWa3uy5roG9Pg1ofxzFiB3ihRcvWwXx",
  "key11": "4uLt4WFa8gLDcTNrcxF7DywRVrPGfW2g4HxBs3uhkaeSNuf3MH3xgWEB7WUhcK8Cw5Xi947j7rWDUmzjaaVBaoP8",
  "key12": "46oNDH3veTargUHeaRFEhnHkVBPnCnqrKmvn1e26YRakw8n6gEdJzyYmJo6sNXYw9Vf1zsjMHC3cnnhgd2yvFRSh",
  "key13": "5tXQY6wFjWia1hwHufHejyCPKVypSzC5UssgrFjyU2kTXGYqJA62jGGesmnXh3KxtB34n5UpBhZWcGLWFibr2GpS",
  "key14": "J4AuPJmqoHqpDPhWx96JkSvAKt4vwS9VbpLifffW5f3eLeMK5aKpKwR7E6pYXGNx5Uhm3VfrCRuA3U54vHPDsF2",
  "key15": "5xmRJA3dGUxETehBs9Kp3Y89xpUBNAzM25zbYDwmbV4mJjcrYsWnbUFDcmXaJggfpyhj1Fjhq4Dbs2WnKyEd9VML",
  "key16": "4Amtem8yZ9uxe8Qq8apkDALpJpzbfzy2iAD67hSndhxnaZix2wPrfZowy1zZT9yekMcVDHFQCKkKBTpxf9nfqsTc",
  "key17": "5AqboxtxHURUjDYj1jzcNrsUCbRp3omgE65vw9nKnV2hW6BygJ8vDxRcwq1Jqi8M3zzaLbWoJD5jJ93cpYBSWXC9",
  "key18": "5YESwgpri3A8Q7R9pfwn3N9hPaDxcWmHLscbDHmrtyny5588DqZazb8DmuW1HJFA8bjCastEJaME63mdk4KBRtRZ",
  "key19": "4GGk6LuQCv2v9tdTAtff46yqBQnRVTUXAaoy1wd1dAQvjMwpwb3HctSozGm4G7SJSisnncVmRZBLWgwa3epBdZS9",
  "key20": "4bn2xnKCYzGjW9MoJkf6ado7PjbkBUbXrMdKQW4tnzuurqzdQQy3FtiMZbxXv5MFsN76ijQjU1MfQd7ab1S1Yqdd",
  "key21": "5wzBABqgvQBvSJwQggDmW8ka5pdVN14krgqMSMMtQAi2aoQxXUECJ1h3k7zvZAsJEbnoh65TmHpukDonZV7tqybb",
  "key22": "3nNrqWjCHDo7GdKEfErKvztZSXJuFzWpQc1fzSrz67CKA7irvEVbZR9PvuJSqboD73XpPfkGQuKauqag3VuNM1xf",
  "key23": "DHTXqAKnLai9vbHDynNN5FgFjd6C8ZDUjTgcg9oo4B62kL8LxcQV6w5hxVRDD2fDAMq7YDhpPJqxKcUemvpKiKP",
  "key24": "4StJrMd5bQtfCqdNhvZhcRQJTBiHAqH75ttqeVz7rZFfZAtTRmQt2KQoJKcuZB7rqXUDzs4NSwBNot8XYboiBpCt",
  "key25": "5DyLwz92PQSXcxQCGTwjBbeZoJK7hiQjjLNNQNapCkWfzf58ShSLTgYEFnhnR61BKR2Kqjf3YGic31ZqeyUzZuHc",
  "key26": "5bGQg7Nom1mTfPJTNwaqb194vAhUWFjhvX4zXsVr6ZYzYdsvcZoSmFFEXgGuVF18oeek95dsQE3NzUQmqKzxhY5k",
  "key27": "4ay1Vjb2sfhT7qqkd4EoWuQapn4RNWDep9azBiDDbcJeHBmK3muJfUe1mUhcSW19iQzL2LP2z8yTecZDYENSeuyT",
  "key28": "5TpPB9t4c6e8hj3eXXCcPZUzYJLYCHrGhQm2gjUt2S29n3cKD94KS3gusvSjvW7p3SDLqhtZTYa7hb4Z6JvoKaRP",
  "key29": "npGV4FbuX9adUT1ya5uyzo9q8xT2qXgYGwBszckhJut3xV9RH2WhB7PhjG19bcxyLKz6NJQ1hZwAovQrzMmBciB",
  "key30": "2TmCFwz4FzvK3ar4sewUkfV5LVwPo3vhUvFJopHeFzmpujXf1aZnc1wV73Ncb6gcsBGSqA1doha8F5pLNntuCzg3",
  "key31": "2WcpUaZ1UMky2L72pRvbzxzixLhNpxhvSuTREQLQVoDNJPexqW54wijFzhKi3KVf17wTCD1xQaQGwGSxpxR6K1Qi",
  "key32": "4vtH68K9Sz9tAhCeUks7Ge9pUVQTkb86jj2q2EfDKQW4vTuPU8N4cX7wuebTpWqZprftuGJraYYjbx9ZPJVDdZhA",
  "key33": "S1uR3XmroSNBoW4pEZfhT8NEbibKTbzk8eMj8Nrex9GYesi6ELGZGdzHYWEHvsNuZ6orQjLF9wq2WmoBrDUm7Es",
  "key34": "4gZsrsPCJXUn4S8uVmgD35vf2dQUynyVEUrEyyhm1E6nPGw7kUkPVMVNTLBAy3pyRSLadfu9UqrvPNy4PryPw5Mh",
  "key35": "4F7zN7wdk34gdU5RXB4HwRys2p9mNg6Y8DwM86RdKGtvE4SJ4q6kRyBPg2ZHBiynE232B2p78aFwTWKtsiC8KYpm",
  "key36": "66dG1TGRuoutkMFJDABq56YgurLMaPm7eirp8gCLD4xP86uTUypX8KyidavvQfKn7ivHBHpLMskJickFkyAMpzx8"
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
