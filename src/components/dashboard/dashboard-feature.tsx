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
    "Sj1LQcd9u56bto3CWrievJQVmx5Me4W4hQKh5cEKUAZgeobfeTzdytyru8vQfUY917dpG76pvNtKMDYey4Z4KUp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sS2F5M9LqUph7Erko4nEJzrV8tbvJKMbT1YUEKqeAnNhWKBw9F7hEWEUHZok2pq6L9rwKA2P2XFP9wvQt96QgXS",
  "key1": "2DBPje7hofatQxiorRmoU24jcD1Zvu4UJc5GwovekNno4quQqg4nN6yEFCMyGr3NP1FYaJ4QNLY4JPepSZunuUjA",
  "key2": "2FEiE5sLjdVfwZJ5UkTpmATSKG245VHs6yA9NA7jZpyMM5wpCXEaj4fXhP7rwGWviiubUXyhjbM1hvRmLUzxCUy3",
  "key3": "5Y49SAydNtmYCHYaugEWRSCmfL7Be2jMgFcWBMbxSvKbbggC6PQDkH159ahcKPzfEhL45coB6Chpuc1SXtKgjcc1",
  "key4": "3mpcyrc6Md8FNCkik9yTZP4pNtwmcxwaKfkZ1UNfMGPoTZkg3aCN31Adm7r3wiwRtN8bLVGkW8USbD5HHR9F23Dj",
  "key5": "3tQF8gyK8KMsQTN3tJWs8NGU7uFw7jXrhJYwGGGiQqk3asBcCxQfaXbtgEtjB2ZQEB4aRUBvdFdZbf2dnckMFz2Z",
  "key6": "4PNKZCLXuZtPDFNKDXt9JjhRFCsSEz1Lqk6XHaCbUWYdWffArX4iD4JGHHxuGJvpHkbwfnicB7Jbi57sAepdm25L",
  "key7": "5NdZUCqa8fFFVxyriZka963J6q2YiRgTwtmHii1kvHiBBPSJuV8LykYHNDjVKHo49P4fWpDi2RgwzLJDcKvRPMc3",
  "key8": "GpbNEkrzad8jUSygDMxPnGhtF7dLnanMvgAMWLrrf73wKE7CQGHwtLaCgQ8td15yEfE4HVA2PXeXjbiMtBjKZ1L",
  "key9": "4nabHBNdBjBsQjXbnrJBXZi5tDvcZuRwC2hQhEvz9jEKTYypnRdfZq9ZkgmfMSyJrQgbCX8NDek9sbLge3x7VHtf",
  "key10": "2aXqVhP2ppmfs51BjStEDUymBVwhj7ugLe4R4xdyZ1S8eLqbs7PFGxHPmbLvi2pvMxcQSnNbJFR3w6xMnEWZJUfP",
  "key11": "z1JMTTZqDYdLrgj6D1pEycGRArLJAM7xiK39MmD233KdSqL9RkJUmFD29jDheGYXmSuD6vbYhphZZh3tqHjzTp2",
  "key12": "4NcL4uVj57hEnz6VPFpGZsvJmHWFxFanUHWqCgHLV9UrQU512HmitpBMxLFWGhnYZ92TH6rHXNGpXgMkBtnmm4wT",
  "key13": "53g6nsxsUoP2PyPPNBnN2kSboSRTs3pui9tvCKW9jXDpzJv88XRSTU6HrQSJ7f6oUEcvzvTujzQD8JmAtYNuLtCA",
  "key14": "3Xa6Lb4G4YtFCgGYMR2uqNWsBfvAKwHvJ5r7TLBxGtx7AFfJRWZrxeUkqSGMo9VnDq4Prwt6xGep8QY76vubj2Q6",
  "key15": "2aXEgiCGZRUWwdBDSfNH7tHJkzKnqtHP16Prs9wQcBJWuRUweXsp8S6edHD3tWU93SgFp9gtsVvZDneMWszDn8Xy",
  "key16": "65V97ZKLYhJwk7nZ34rAnemSeq2sAUebx1BwUAhq1wZJ4U2miUUtK3vxZuNK7Addz6CtAr4RTwJSTDao8wSobNoM",
  "key17": "2JYVVSzWrFDVc4xwBDxFXNe9TXKUF847ZCstjBrt86w67WUqbXyfkEhH34mx6Bxw3b9eVYfaovJdYmQtA8WhKaKE",
  "key18": "ocidL2f6JauRVdMJ2iFPXMxsmdknY7NgRTBEr4JaqRNPorC5kbu79cMeu5VJYNCLrwokBYWBYSCR9o4uuDUVfQW",
  "key19": "u68dBxHVy2NFRKCipsSu51iRGUCNtYFqUAJG52mqZPm85in7kGCMGmcXRbcXvhv94KZmXorMoZushzCy3niGMUe",
  "key20": "55MmZQsuh96CJbUjmPAcVv71b18K4MrxSULAoq89kjh1bogz65TXmcCUsQ1E8WMU7XFkZfppygPEshDK6YnD7jYE",
  "key21": "31aLUgu1apFKyzHe2abEGHBpbEMEXFLNmtvqTcRL8qbtfV2nvFsbYcPY5mVctSYjBcqbd7FVxAnRXA2nUMNS1NcU",
  "key22": "qdyBDiQHExa62tgHeouG9iTaPDpmB4XcK9Guaf4AhVdQvT7Kx3USicn1hXDmARHFnsXcujBJEDeDTWtSWYK2bhn",
  "key23": "4jx6jAVQFwBR4mY34Pm5bps4yj73iWij84fXvYt9FaK4z9MX6R759Xh4cq66moechxGbQJd9BPAY5u3bQVe7cgYu",
  "key24": "4VsK5NtMZ4UMXXA2aQYP9135zf7dKHGY1r8teScWs28mEbVrY3y27uSbzdACSpKzPv5piiBqSnU1ftWJdKL8CNbW",
  "key25": "k5i2VPcqGRYNsucxBucvm5qL5aemiMgjMMwR3ipUwL7LE7V589DKp6j7Kwan9qLifQ8VTbPf89JySSS6xCautf7",
  "key26": "3UeLy1gXNTW763uZbZRjrJLPRYd1qv6YecdZyDuCkiGtsKYthPbJixtKYSKjoRZVBmt1SvFii9ZyJhu6Mqp4fmFq",
  "key27": "3ipsMsRNdjPHqtWfvMCKztdvFjoL3YXtUayD3XdEttnZmaAdHmG6A8h6otjtaV1eZ6mNRUbQtP21ncz7b9ygHkMu",
  "key28": "54DA9uoDTKGFfBdK1hcMUwwqZqgBdS6Ltrjch1DPgcFQNnuWjw2m7nJZdJvjQ37FYBkEFsr2qz6mMetv9gX5Gbhm",
  "key29": "86AM1FcKrdS1JDyQCjSSypaBG7zQCsm7kXL1n4fcMCPCyaz7TqbqJZyzhEPVqJvY5jup69aUgQxvhYdHvnQALJo",
  "key30": "4hL39diiXb78F6ZDzRZr8zY2ZLCxQHweEe9dCqadvMBSUArJQjj8FJpYPNRw9yMfwYkU6zWBhSqJGzUDXEjdJtCr",
  "key31": "46f3znoeLifJZx6sQzviAyBkiKeYijhAwJpKJrXRasfPMbwKQaS5mjy3rEeCxKmjkFMJ9iG29eZNoNzeuFLFBvJt",
  "key32": "4P8yFZdZ57B1JiCrNYdntuGfATLzfhhTQrGw5oXmcPbvAKLEgf25V1qcMZn5d9pFQwKqkYYFuJHWBz2Vm41J8agg",
  "key33": "2KivYLiuSfPf8VyxWq5UhuWHmZdL4cy2JZeSUzN9yCePz25yuntJED9cSAg8VE4tt2ZhYLm6THto77pBVp99kjsX",
  "key34": "5sJJZGx7g4uSzzpP3fwfvarL78ukjRTYJ45TX5c95KzH8177jToRccHUNtoMS7x6uaVTkSzFbEqWKMesbBHFdN1B",
  "key35": "5fJacqoej1ha9wZkmDuazwafFGmZ6i3kMocUieVwBbtyceuJXxRsuTECHzvEARhDxPDjfQ6LPNgksLMTwBUpF5ry",
  "key36": "2zW15keZJ8KTM4vaFzk9WUmUYPUwX9FZ31Zxg584xKSSnQ934o14sLQr5zpBMNCoWL55ShjxnU1jXaS26CTQ1nPU",
  "key37": "23wggXDzAfSMkoh5qJuM1CDXHxpkiCgKoWQkhkHfcGNeQnYXju7LtDkWetdBjLGk4aLEkHQQynJdzUAMxafZaHc6",
  "key38": "25u1xRstWnVw7vSU3JS6wuX1idN4PCxyG79Lh87aSpWVsebjceToLbiNBcMQmrGpEFNnriGrvK9MuNZ12cNV4tFU",
  "key39": "QxgUeSxHrAZMViNgz2i7tMQZ2ZEhT2WTBhAEuvJ24pQo1nmwBqSeNeaJHUaJHhdUqxthQwPXWt8iCg7nxEs1VQC",
  "key40": "VuMkGMoiagHfBbgeaEDCZLFYiuFYGUjDX7YwQcJuo8vmraVtV9HrVnsFrY6JotbA38pPq98xQVKArYxrzRPdxFQ",
  "key41": "4mC89dBRC3WhoovDrsHhhev3WvALwewBx6UojvfEavFnxnEiYE6eGuHpS4CXgQ6WJQTJGeQPNTWkNaNZNPoFPiya",
  "key42": "2asWmys5ydiN2zVywyH9g7ShYKEjvyaFSbK6HvckbmA74nHiBxmfwxTsH6ScbH4CMXkrx48LbQdoxaVTXbe9Lugr"
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
