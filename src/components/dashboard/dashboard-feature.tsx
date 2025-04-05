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
    "3BECJQpGGbiSu9LTRSoUPmh6NhEA9aPUF3SRzT3Yeg2aLdiLPyMwKjQbup6SBJzC9qnBkaDEYuwRVR2nQ4QraRcN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Fb6uXwzUTm3Swyma5hyTX2zEq1aD9Y24Ctr68RiLkouxTGFJLY8yw5qdmZ14xKyJbZgJTxTgnZQXYdhu7GxsSZ1",
  "key1": "5u9WnvWxrC6fNb4YaJZw5BFriLF9aUVzm1ZJa7cNNRHzY1oYHEu9sYBMJmV2NvQTdLBXU8FrQv4TKDPnWQXXHzyK",
  "key2": "4Ms8wrzkXSERbjKeqYsJjgSjXNVKZLA5z8vL3tip8PqgVHJTfejC3MSvfENgGErh71S4YoNrBoLGdfdgc3UgYEqd",
  "key3": "ZtVqVy6fgmWzJros6hSszfPD491hkPcf326aBzjYC3Lo8VT3TQz32ApSKseBU4yfbjBt9VQ6VgTmQsMscbZYmYj",
  "key4": "HR6s4PMegE2tnYJagGgQ77xkGNfTzef53vUnEqnAzDTrd4sPu72yxqxV9ykfgPwXhsXT4KMcnLzyffYFcGvhcsk",
  "key5": "crWUKM7HfW7tLPRXqucxLa1EmrPvgqdp3GWTBWodMfmu2kUjUmQXbjNREWujYgg9MEtX1jubQiXQmMt9ZYjqW2T",
  "key6": "etHUYMjoifVurLR8LtVZVpy1Bo45Z7QMXrPeAdW84y7YigR3frTsgiRhS2zWAxYTY1LYEzeePpAkGhsrMM2kYRm",
  "key7": "4nAEEsBEV7AvTdNDKbSHbqvWW6rjhYWBwX1Mx2R2p5UHEUrNKy8piHLZzoR2bac8oNy9h7HbNnDtG2d6Zw8fez42",
  "key8": "3aCJNhCbzNktRoojEdCQCsEvD6FDJpJ74BDBqgj4dLZrvHApTJU7VYZg4DGHMWrKBWhRufGu5SWs5pcBrQ7KsCuL",
  "key9": "2t7Zypbr8JNiNiB1LjmWnuDVYMombZe2B6TfbMgxDKShAjRVnkCMAGGRWrpTH2bpAR718PKnMB6SJAqozRoxWKFf",
  "key10": "4y1u8hzrnXXALCVmhw6oFreThiijc211pTuoKiVnhY9yCi9bcabEfMvMxCyC2e6ZAmesxaLoDt5buGZPdMNDMwav",
  "key11": "4NdR5JDXkTHBhYXFpv337vgpHvuMELyRegmGer2q2eaLXbps2tdstvkx49pKe9Qqp3y9kU7o9JsLhrb2V7mpapEg",
  "key12": "63j2eGZokzmmfT336zBTQUojY6pCM24cKbudsTTaZi8G17pXvF6hVKuA1UHjv5MdVTWsbsZ8ZGCQV8Z6iQE8H676",
  "key13": "3fHaWvrvEMqs5kntccbSWUtjahEKh1LmxAxqD95fZmTvXKiAhJsBDByxQoSaCWMbPkHx19Lz8d7R9P4Z736ANDHG",
  "key14": "f2J1smvG2dzT7Dc4xGPL466tKFmyoX9SiFGUFErBko3ZcFVrqDrMj7ujHU243Ztcv9XLVLQ9yoHivGQcUMC3EdL",
  "key15": "3JzJWnEcrwtNwhB265iRSvHSPF1bJhsbHGi6gsgsb9Rqq9rqM2GjsUskVMbkBEhN5CLM8LNsqwSW1UhPizHSLgQ6",
  "key16": "3Vjk4hdfJPGQQGg54bctv5Q2rxquX23T6j2D7DDQZAmAMR12LdKaRyx4J5RNCkFCM1KrrbUkPMh1kwTEf7z7AeNd",
  "key17": "3d51M8gxKVYjUp5YxnEJnGNnQtAKptC6oVUbpjxdmcjDTV4BeGXLLQoSMtZXHjKZuiZfnDUntsFNCCeJQ1Yv8gwE",
  "key18": "8MaF6pCg576TrQgXKySZAuVNQcZuMtrNfdkyKPsdTz9k3GTBKcKKCFbQyepuBYH6TQ9cNAymJgc6U8uQYayqbPf",
  "key19": "4LuwDeiCWcUDxQgFLNSSjy7ptDZKf1J8DbFF5miqy5h7xLBvjpZnCrYiUzQTDR9JskeLBHEziLnfxkYySKUpPEHE",
  "key20": "qNwjcndr9Z7cpRTuWAh7sXUWigWe3YogFBbCw4TC7t6oyejeXe3jZSHnEuDAiBQnZvwCUvSJRrWYRj7Sv5S3YFA",
  "key21": "3TXzXNbs8qTe9EvYKN1yRTLFyX24wWygtuWcPoj2NBVG3mdb2MY8urt3wbGnCMiAsenp18Zsmo7WPbhpEsaMaz6B",
  "key22": "4cLwH5diCWGxbHpaj6k5vBvbkfk3B64ioXaPgqQdZUSsDLrgMFwmbg5uf6yWPhxgSLy1AcD6QABcbeCmCHhpc4iH",
  "key23": "3KwzsMLsspU48hVpGti7cRDKEYwQw33dug5MB2TUH6d5B8kR43S2wuNpquDZXsvaeJnAE43AUMPXhUfj3nm4UdsN",
  "key24": "4aQkbBnn8CGFc2kjQAeLrS1hcmrwWxxJPPYRcCRMstLX7XPwvRt9Gd8Bs6MAaneqoepn8tcMn2KApucqF5C3Wn9",
  "key25": "3SkFNrLKPrmkLwnsMz7WSeLewsZ9ZsummexS54D3NsAo3xDYfRbUFF6NY2W5jPqgtSFNUgKJubVcvpFBcuWKJqDh",
  "key26": "53EE5TBHeX76paU6wvtWKtYXR9urrXFzowS7evZ9MsomHkiGCSqM2XNwgYAt9RQY4jpNCwCwLoomAFExf4wiWeTY",
  "key27": "2ThsXWFg8FXoQ2BTbSVRMkuzC5apzNMwjEgqYhKBCFjfjLzP59jMVfbg2RG1G7fwTz8GvQcmTyQcUtk6x74GtcLj",
  "key28": "vhmxc3uh8eeKhnLXoGjZj7yDZ7Xx3pxpx5hMKR2uQzehpnorA4yneFYJdS8JT3GJqsWZwR9Mrt6xNQq1X6shdQk",
  "key29": "hVjtkjw2fJcy2MxE2F3vJaUSSecfZgnGyo6yLstLrv31skSxouA9oH5E32Wx7iYvxydt4CV3bPj3gaVD9Kv2Dzc",
  "key30": "2jyrC17RG4bNYDY1bhkrZcmAjDnoFsEgEsnZk8a9PyHNVvy2FnAvxr289jPWNG1qnA3ZkNYGUeqVu46P6ELdzvG8",
  "key31": "4xnPtudwSrqRuuP2rZCn5f9rMh8B6M1f7nnD4wo4FYUQJ2P5J8UpBgNhUA664XCCNvvXxGGVFPgA8VQQj9z4PRz7",
  "key32": "3iy2gNksxWjsBKyiebkhDffi1q4w1M7vedPG4EhaWhepMTEM8r6oehJ8z5LbGx8PHNafeWV7a1hsv8v1dPw5qxNA",
  "key33": "3HwZq757SzjS7kjs1mFv13mWXRd3wPKi9TJN9fadE2q5WeFNFPCvW6bD3gkFSHQsSGuDxDKhamHoSL7qsXPziMDu",
  "key34": "QryAMv9RQmRESiSAbSGxjiGV2GD2KfGRKKbMRA2qXmTt3dvEoB7Hj3EdvFNEUfruTcrwoc5rbjbfmysPbhF2fqm",
  "key35": "kZYmjhXkLWrdj523hd9CDV21KGXx28WxdfJ69aSGKEisSAJ4yhyLTLRXzjXH3Zu4V7ZpdUb42BkotGmApiNVaU9",
  "key36": "3XNYu7qjDHipuB8RXwSZ3edqQrdjwEpr2t1CufmhaMoDRwJaUFQhcWxa3sg1evJwLRFn53MHwuVdM8QB8uTeMGhR",
  "key37": "4QFgfyGxbvpQ6g4A3C9TdP39yisvvWYrgK5dLzzsC5sjeZuU6F71ot11EJsffdgqv7heb9r9jUNjsRiuAwzi9wCH",
  "key38": "2k2vcQWBSnc6LCGsncJDo5ZaTvsRKeiFK23y1AVxT6Fcpuxhgev7yLXVXGAsmRJ1sbt99hoFGGMGPqJ4gKhuEw3E",
  "key39": "52f4HMVgF26UjvEovcyN868YB6hJghPptzvXT9TK2NFzpvkBAW9tSPxLEraSit9L2DJXdYmhYappEfTLCxy2w1kc",
  "key40": "3xKUV7uA3Mii942MTjCiy23DUrpquYgBuatxCX918EMcjvvRoWknVTYJpWNciDMUA8oDRUp6usAV138hHt42DSqD",
  "key41": "3QJzHKSiK815YxwqoECUeevjzm89QgnRa5qNtVC2dSjTcJJiKsLjNBb6CmCiHXrPPbgJzEkVWT9JuNbrAqb1H9mc",
  "key42": "5Sq2Dox5FLFTqKMcpK3JBdVVsAe8fixStcf1PHqaUagdVAtYEPUaMPLAjipeVWh6fy7jYJDFqS3DtnE2bu5wYX8Q"
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
