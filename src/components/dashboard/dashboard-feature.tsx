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
    "5muXk3xJ7Fv3wHUZmDiJfncmk8nqmcf23xUa8mugnKYFKCGc5XJszkLDrmvRfQHhpEhkvE6XdjaZUgQeuGbUSjP3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bzxKoTw3DyvtpqSYJ6QQsF6SySdbckLv184qoJnqUGRr4gQS8RbiH29VPRprRbwoJHvtC9BJvPfKt7A3AtQUihs",
  "key1": "8exSwUQDhsSsgsj85zunYVUj5KUtLwtTbioCZ4Agv5VfVKqN7gUUs6YAkkyCnz7pBViYccyjo5KvCinFjTZCbso",
  "key2": "4NwB9rGrBMGJGGGYDYsCvrPjcCmRLwLWBupycVo3vBDD7P6quW9yuhVY5Qrr7yVpdVnGKdgQjzvtjNpTp56EsAwX",
  "key3": "4zko6eKAN6LhvNJuCLe6Ki54K2TVNanuCqsh8278Uwr5mDPpKVpnwJYzaGnVvtHEQrUkFvtEpRr2uxW5MqV4T9Vn",
  "key4": "9HsbBY3rXGFvYNVAixf3i4a7ZCZs8YsUA9ME7JQoN2ZLHEYopzwAHvVJBmMwmdSk1eGbphyb4jD3A8wFSUopKmH",
  "key5": "2cEHj8BSdy8FmWM25RC9nZbjp8QkrXFELmUzDa7odHEyXzknK13mprdpTPTm4ehuaWkgqFo22KqAk9DU1oofS7Zs",
  "key6": "2UEPZh128yZb2M4gAptym1rvDZkUYMy9iHPCmTPRS3aZtNdhBkxYKhfUtwgrG62wuwSA2BTDV8KAR1gWtT1UfHjW",
  "key7": "39WfGPCVbCQeY2XmjPtKZ2zVFHpyPaHtJ3sKXV1zruV5SsHU8DJBHGcFV3FT6C2HhM4TjsrPwqNyADinyUFY5hkz",
  "key8": "2kgyqAQ2L4682xwnUErj3uSnugRRF5XK9Mep5ZABG7XcBJmwDVf3qZYmMERn18g4SgP7yEzpwKBULPq31SYMbbek",
  "key9": "5aaGJoJ79YUaMDD3PPgnuonxgiWtEaf5yrYXmraK3eGcgJXMb9jBaPb2oa3LyVke5D2V9Q5cUDnPW5fnKKiKtV8z",
  "key10": "5pheZYem3EcZsyd3X9RsefxZysjSkWTeFghnoBP3CfjRTBDxofMneC9M8xNPqn2QXfGM9NYAqtpBzPXmRAUZ676x",
  "key11": "4HBGx5dtMiTs7MPB66sPej9G1eNzZaPWnCJ4WpwYu34BRisTwmU2a8JMYhzPSH1t6ETK3cEVFCMzkosnbvriwQX5",
  "key12": "3ehe3nfaupJNVZPTyUq6pPr9RoGfh9fSPos6LuKQtBXhFBo39vQyKySuJDcHxQEJAZkJWZcyuPZF5PPNnm4vD3Dt",
  "key13": "4k6nzzVaa7Xk91bbwd9eVu7ruihN6Gu5WdP5ohC9Z1DHhGEDVtaPStY5QJQnWA2RapHZ3dbnRDS42QxLC4A8aq1n",
  "key14": "nJ2KdQJLhLBMawatfTdKMzJ9LndLe5kFCVrUwj36t8TGP7a8eqUKgpDzgvEsU6CM5tAyjrBuhgpJ6ic5ZwCKRNy",
  "key15": "oYGoW4ngPYqkFSNuugrBL1HTuBGKjfc3F8XRV7ptTvaQNgyfcLVwR346cC5Ygcj88Jm5w7zuQ83LnSLaCRkprgu",
  "key16": "xay3rjDH43auLXsmbjhU5rGzLrwTkwG5XMEmrootTCLzpVDkfWXdTLHY2ncPMNgKfFSnee4PguAAEJyGYymVwQc",
  "key17": "4ZPD7eaMGmz45rhAYEEUWj9novafFnaqDwri6Kw7by7CSscADePvMqmoyJLUWyYNYAEA2PsL14wuG3sq8vKsC5t6",
  "key18": "Cia3Z8d8wxriuN4e48MQwgPncg2DpchgbvvmsmBJ5oLbEqNd6FWrkGH64t73KHV6S8SF1bVjHsNz6XKd8zam6Yz",
  "key19": "4oFVSvjFQx2WvNvt6xNXoGm1HWNJimqUiw1Rv3fEkNLzF9HJbecRgmJHuUJLfZaBbnNkQjDKSbPLHyUkFdg8iCQV",
  "key20": "2ZxWBLXdYm2E2xSv1fFEavHL6yPzTktF29sbKXPpMc4DVGwAZsPMXmC2uHMutraqUG5HzeNAa3imWnt6ENDgKKK5",
  "key21": "3M1bshd7KKxVGNLaGCCoXycjet2QqREjxfEYCb5KNu4vv47KpDsNXeaCX4mMbqq8sCvSHeu4ePWJjBFUrf3fXhQg",
  "key22": "L2Zh2cBRS4koGsUDGKDSrP6BnDCRG6HDyYBu254zxyZDcMbrS2fA9EbjtBPqH5S7B3ufaX1USLWhEX2Zd8d6qk4",
  "key23": "cugWKnqvWq5GmJkNG4x7dMvxuZq1PXgLvhrfoDrhNNB3r7tRLDnsdNroDbC3x73v7XgAnKtQBh3jGNWDuw3RxWe",
  "key24": "4WBKRR2Zp29QittJUWqtX2NnZixSv7vyNAvmeDFQabMgaHD1cuQZt7xMSBeLCn1xmZ7Cwb4raqXtzXDLHQz9XWHz",
  "key25": "3Ht4omuYMHqtyRCUf56CLHoZhamnFAKo2BTk83B4pRwUfK1vBAgAKYMDkQ6LUti9qoMbCpJXRE2dgD97tmrG8NJQ",
  "key26": "4nXbtdty12Dh7HwKzic2UxZ1CBwPexQf4szfZPLUVCVeWvSRN8C93fdv2vVL4uyAuy1QWXHyRPSY4FzB9NVQFPF4",
  "key27": "MRQAhREWyquvhed59pmBQTQGKXPJz2D8nqDvMwbdX859KijVJXka6e3F7wFUWBuqfEgW6ibkvmAyX3npGbczR5t",
  "key28": "4MQnk4cbpZAcPLuJRpw1K8qU42yYcNSeK6HmrwCD88seVrKjkoCpdoeSiZsjtqh2L8BYmxoGWkJAMmbTRRKSMvoi",
  "key29": "cx6qzWRe3xbVBkWduCXV4imJJB7oKrDxjzky2puY2jVB3J5bfv8KTBNPJ3jcRxPcAkws8mFgn5yLzFi2C8dtEbD",
  "key30": "3Baz4F1Ttvn9QLgRLQokRcaBSGSSX7cZPqWCxhTetQXLe2NfxtfhBiYUdkTPDSviKcztdTimfW8DM3mryTsZgkUP",
  "key31": "4QHCRh2Yxya7G4JMQGDe966EyQp5oJKLyngjFpjGRBDrcRy7xWMD9aXxsTYxGEdxdLXwJFDDqQF8S28ypQrh4uVG",
  "key32": "5f4QYexZqNMcfvv7D8r6u5sQ8Sfd4jCH9vJYP55wFp59oJq4ipT5mg2UWseJZ3amUjctvrfYYxBtgmikyL8kY4nr",
  "key33": "3Z5FdtveheTFJKA65fKXwdDzn4Pq7LHDEDAGmjkHgF5GbagH7T9srWTwQxNtsDL9PA5csAiCpQv84JoCNxYqp33Y",
  "key34": "5vyS8FYD8DKMrim2jJA1PzbRYch8RsRSDUGx66W6R3yGH3enNA31tMDgG1sed8hxaV5VJx8XpDkx8Y8TJbbA85qt",
  "key35": "8deXfcwyjY1pUGWhZUHA2Hz4bfn5LfuTvecLcFvcKNpzZ5csaSqvTm4zfEuNvD7Jxb7UBPc7btnxDaUZB1VEkVU",
  "key36": "5HYLEff6G5a2YTD11FF2aWUw9NQPCsRdiwqkTpuKWPgvW7gxTi8rzgGwADDqFJTgJsQ8LKZq6o4aQsMmdpECgR1m",
  "key37": "3HnRCofzFadxqTU4ZneEmKWCgRtPrechZWTm6G16bSzvMiypNypdLWSLBarkyMX33M6c4SFBie3YPFiJmtR9esUp",
  "key38": "ZkL3brn3CezgNJRCbJJZ1xhvM8MSCgHKybzeEnqhJ2X3z5nopFe4xtoh6rgv8YV1CJJFY9kG3KN9Lkn2N7CEqqX",
  "key39": "3VEqzQ39jzkjy49V4As3ZKtKZQznM2csTedC3vShDMab8r9kN1MFJvkxmPYkNYTD85tf2nSaeukH4GwNyCLZ48ar",
  "key40": "65dmrENo9goNs8YQ7tBtXaCFaTRvyzntzWm9dCuoFwdAYxh5z3vpdi2uJ8ZXqFnVjAMqi5kH1qExM8RDUBkhTaK8",
  "key41": "5FD11gc4HVtoLh6FuYbEj1PvaFDFp7YPKVbLDQ8puExFgcvjvfvGBcdHy9DbyJGCN84x6AuRTncFPjHhGtKjQFmR",
  "key42": "nsoEnbTTWFruGea2mDCaePDXK53SByTETk6mANDxu4t5PKR98bXZUPqguFTZjAF4n7grgD5nBPZQhQmqbaebUHR",
  "key43": "41dBoZRPohSqsxXrv3a73rexSAeSc3pyG6QDddHG685bQpqNZiUan9YNmV1pvovpTeLFPsZjvMQ4YY8ppw2RkAX6",
  "key44": "4WjJdKLtiLw4c9jftzV54QRXJnACbMuiX3bUxaBnYrXoviZQB6fULZgHU1ha4ERAVzSyGWVRaTGfHjGGL6SJsAY",
  "key45": "2ChZPeMC3jyzfT9fRguhmxMWpy86h5cmzrk4kQNTSTA5vuGGR4Fe3BdShhwNzxjY59EcDadmURNbTMHHTjk7mEK2",
  "key46": "4Se3pz9MNDq2cus9PhnStCcuQUcdTNaJFAmBTxnwYtSRKrht5CdB7ZxmaPZGkRai4W1kj8TThJLGuZNXXjvBvJbc"
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
