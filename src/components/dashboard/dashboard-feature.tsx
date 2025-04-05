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
    "62QvY7T6xDnaTPefZNRMsUhVGAhw1NKHJo6Q79wkxBj1Z6maiLRxwSrsiwR9XkA73EfD51bE1f6TaZQnXD1M81wB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j2FBjq5BA4GpeGPUn2bQH9MFK7vJoz3teCmZuVru6Sa2Z7SpoWShgprsniAHGP2JNYRPPXGxKzWdS4UqSY4nysd",
  "key1": "4S6D4AbXet47ZpsHwUvEQqHEpCjAGf3aaTL7q6dpkZwEDFMGzZG3ncNLtcW61PS1Lo9M3pcS3ku8RmTawPDjtCo7",
  "key2": "9s2DXjwebruiFFgykiJNsZNpsfG1Z3t85WKbi3UX3V2Y7iAxFTM2Xg1ntwVXfZcEg4dV1BUo2d3yX7SSvCYb8He",
  "key3": "38GREFdDvGBzV8uCAXC3XsQ4JnMUQwX9iG9cAWHFpM9d8daSRChDrhdbPDRqfd4CCwtQjYPpLC6cujko78p24uVg",
  "key4": "5rqsbnwNmysk5d8qaHenJSdX52AtEoUi5Sxsn7i8wFFshZgp9pHdoJUTSHHuH94nF7Ws555S4pqP4LkM5uEs1yG",
  "key5": "uya4XJaC44yxoFvV9o1TeJu4d3upQ1hWyAEwmJC2vSRietjjYYasiB9AQwFdgdx2H7HMxQyg58CCHUgmnvmBe34",
  "key6": "3hhRnCjgL55X9ZY3Cc6h5a7vFurrXtc2p8vtBJmaHFMETHY9yW1hkhHDWLyLhXjcASK1Mbmkb6cgsYq91kb4hWoq",
  "key7": "4SqyECYfm78CBVGEyucKKm5NRD3AetrMhYSn2xBWRzVef8jAu4a4sv6Ra62Dn2RKfbdCNW89YcYKRRshJkCkuqF7",
  "key8": "4kEcAkaqMgX2yba5jh2Ti8VwtUqHw3trrEcu2PcAiJCqv113rWaoGJgSRFQiAPjRBWbfj7CCdxhr8PRrJRnHsr67",
  "key9": "H2KDULQB5bZjFVaN4awrM7rSXTv2GSN3KPuxjm5Q59MZSRpDfV21kQfZmLQusntkTwxKd6LqU1E7SM7R9ar9eqb",
  "key10": "3b4UNYx2KzjNreCHkJFzNaVb5sc83Pw2Ky2UDLxG6ELxsc6wQobtWWUPTvy5nSkmz2i5fMkp5nqxT359nTSXmfUv",
  "key11": "5hWeH1xjdwphLT1xPu7T3RAmpwvKFUvdoxU8u1arPrWMbvWNwbmSnSAfnQAKyx35g9yUc2BSN9n17ZqrMn7GG1eD",
  "key12": "4ZWSywLbn747oPrrTXTG7CX7o6tLqwHWNhpKWrxAeZfATd7bmsuQx8bJuLFewwQAEmKv5G1EDyGLzSutGWNirwWG",
  "key13": "51oZFR5GaQ1acAzL6ownSEF9kwqsBdXkA3dVExJBaAPnqctw6TT1R7AXY53Bm66qHdRK5C1VCpohhGfiBWzyfdMX",
  "key14": "uJhNmchnj4LLBySUaHeWjgXAAWnJBoySyoQqur7UhoF7pxrrbrbydb6EJWsdLvkUgQvuYqiVoE5M6gsxW3MzaNH",
  "key15": "4TZypjVNrs5feQw8mkcLwPQRQYvvUNEUwqevJKLe8MngCPLFiMFgYfuewGrpzCazB1CeDNgSHj48nQUQ4BBPcbj6",
  "key16": "2AroypVQrcsiqKtsqUHGdxUSELL4JKaE9KzL4tqJ21r6Uw8SNBV8N9eutycx2SZagfqaStub4QWAKVQJ7Rfn7pNC",
  "key17": "3fi5oHNwzFjpqrpgGHfcAdyCmojHRfe2ztSdaAGbwx7tzRUn6m4yHYkG511VBwfEcEX91RJxQDGmGe4B2XxthUEW",
  "key18": "2Jmizhzj6sLoXuGoyKVLyC7494PDq4Bm8KasR3nv5N8CJL85gdN85PzDJ5J6H3kVuSZXo6dn7ovaASzgEnaXArBs",
  "key19": "5JXbua1PA2SvpoMGvwJFcK5GWzNkBRjceyqZtPEB19woZ2ay8ghu4qpWSozcsJj82q3pWNin3NtNxTBUvCjv7rP",
  "key20": "2nV9twCnmCx7Tu2hdbghceCS9ogEKLqu5zsonUcL6N87Kc5ejVfkBxxAUBBS1QUrHJivdhkP54kbBpdtYV6eAvpp",
  "key21": "x1xxxWqdo4RYaPuFsBAtbAPreJsPHTTq86LkMuWKxhJXzGFPQqbAEKRubKqjGTCLzucobtpDBWYLAQQ91xXxCdG",
  "key22": "328ktVK5Yu5RNcxNetfmgCXdFCA8ZHr4W3559GvhbgDKbc7ZHnkBEJYWWVGUieymi3oPDBiQsh8azWLEiqCv7RcY",
  "key23": "4eAUhb4dmufdfnrTq3Ar7ZeqXTmWzgQSFor4qZLg9CMuMVo5aQ9zzfRvHcB5HM28ErTUcjzir26KTewxq6cfpViu",
  "key24": "Af5d81ZE3d4DNzbinHysFBAEUtApQUt1rzLA2bfSQDzuTvnx1kGM7d2G8KKfCFZMP8qYziAfVER59qh39c4ajyb",
  "key25": "3UfvbFzgmGmfA8CzXCy2muRy3evuEJUFPvFewv3DbPoj3t6TJUAy9g7ZtJs9ZryVLpFVBPikb87gNZGoRxzqCoEk",
  "key26": "4yoSH9GgeUpeMNkAnnD31GVuWZWRwAXbaNkYH8KPvTUWphys19VSeng6R83jkk6rwCBnTQMzcFJyX9r3wPQTeXNa",
  "key27": "5555zZFZnepc4jJf3EuovvzDAFeacc9aX82isWkdzLW1tkNwtftN7rEQxgqFCHKCqiHebBSQhG3wRvMzaSxQFmyH",
  "key28": "5jmPW4d3tghRNb2yGoqJWK7BkeHeCVbJdYv6S6V3WN2EMyePzHHxwcdfzkFp8nkkQ8aqYkLRf1hL9DancXhNttuF",
  "key29": "2jyDosauvyhco41miv9YnAT2QzbW8veiJFgyGXhX761HQs19mbGmsNiP7PNZNqkDejcMAUusHbbSqq7xTHzY3MAr",
  "key30": "5Xg4m2ptbgJ3TVDXPMqUXwgbF61ZgfaUGqs3chRLiUqdytUwCgGWch8KHKdXP8zqsK2yE9Uq8wVjWjbpyMp4QAAp",
  "key31": "2hijhAnc6fapxYXDsoK7RpAExuwrY7fFmgX5KtQYdoCL1mZ5sEWSG1rsUHphnbhZFqPwBvfepvrkMsoH5WyyF6C1"
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
