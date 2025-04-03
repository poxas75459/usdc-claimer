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
    "45ZtDpvdLmvunHHsVwpNwZZpb2Rpq8VvWbNXzfdmmbETtQyHNiZGYfn4eq69icxfVw3qQnQ8na8Vg95nxWvcmjWS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "omxAY3aDEtwGjbWQJJieSiaSyDXZd39bmP6fXvdZe5YaNjWYkip1nSZNPekxh7p1sbfpMtmL7HXKTRkSybVMpoF",
  "key1": "5cpLZGCSgBv8oCAD9gPDQPB6ERDQC23ZihzmQpiMcsHf9pPWycUcGGBVAHL8spmZ5eST5q9MGnSHke8YocVHgXJw",
  "key2": "3gGKHa4bUENk1g51jkvMNpaMDtJbkY46VQSWzbXxU3QtyHorojKdVgE5VW7aq2nsgGQxZgaKByehzmpCYTKAuNeT",
  "key3": "24FsqBTpscrLSvm1xsiekQHifbfeXDjEWHbX92Kn9jeNMont9d8fhoBiPqa8kZMbxp3zUQV1L1J8aL599tqNMFbY",
  "key4": "UJfMzid3z2VppJAits8XdehvKEW7ZooMYLEgZZXCaULwPKvmbML57bc7upDHnEZ8fuWqMUKjwNe4kthpoMA1Scp",
  "key5": "X7Pt2hGp5YizwmyyHi38pJNNWdq121QeSYhhyxZxfHCDZ2DRL6PJ5kdGaNV8oF64gnuNBZDf8P87A3fgeW6JAVh",
  "key6": "5ZjH6yEuJJfSZDFNA2aJWQAdggytMnyCDaqS9Xe47xypWmcfsDMsTL44o4XEpwTNPGUdGdePJ7AmzpguuKh1NtAy",
  "key7": "2KuBmzy6ErmQpfLZwFydAF73uTcUEKyRwssUVg8BQbo5oBqfc5PJp3kyo5Vr54WZ8SU4BbhaQjejf7HxNbDv3aS4",
  "key8": "3h57KNzxZ81gmjqrjr5q3Yo1N12ruWRJhKPnWM45Df9b4NhNEcYdHFvG8gBZguddRXGAxJPiMpYMBj1ZWyfG9yXF",
  "key9": "5ihQzpBUd4c8a5YTBddXivAv2EPqDFy5pTGr89eyhLJbkYNJ8CMSiH1oc8M32szWo5m5CDVBpkzGygJ2bh63ebnj",
  "key10": "5NhH8G2t1dXGWjuvsWpyEkmKRBbCQiDTuow3H8Fwxd5MfqBZEkG1sf3kKP7DQkwHkvbYxWpsuGcsDJcXpLd9P3aa",
  "key11": "3BU2c53SNGLqwAoPisrWczACVd3QokXmChUdkptniUNQs4gFYaSdHfidxg5aKWdCMtwQybdSdtXXmtYNY8vmVy7s",
  "key12": "zgyPLbyX5unYTV4ziXB4mEtajQJ4TdVNQJwo36NUpCQSS2xXftVJJ6ZX4DE6CvVtftsjZG28MaXWrN2b1VHzk3B",
  "key13": "5gCSBVnFue7dfM2e3p4DwAZ8cY1A53ZUELrQ1dBpeWc114LY6FzLjSAMAfJTFq4sa8T49fjRAiz3Pj49wxHFV3S1",
  "key14": "4ptADzPedqA7bX1YLPNaYc4qaqcqXKAC6hrjqPdYthr9hWjPs4XVwcuBvZqu72ZFEAZCjNXzrfp6r2bFgV39Doay",
  "key15": "4Ak14Yo2cqZFW9UcTiSbeVR6QHLmydeyXCyDXPZ4HkP6azenLYH5LNeu96KEsyzSJu9M1GhHQ3WjZ8PBH5bGMtQi",
  "key16": "keaMRUsq2QvSAu89toB9FkhfGU9hVpyWtcnibyvhL6gibanymEYVPo2hSX1vrxsAuiKvcNRUuqvto9fZ5cssNA7",
  "key17": "3H82mvhdttCBxx81vD1pEwHQjwZ6ByQEa6vXCXBeeyAs4ZHu6MQk5hDSJSi3Rsiqi8fxLRLGTXQECLoZ1vQZbHFK",
  "key18": "4vTpgStv5MLQ7STvbwvzY1ypmE4sS4T84cqXYPshQcxU4x7EL48q2t5PuaXNt9TM91AuYMCDygnXJ9C8igKQwLqH",
  "key19": "2S2oTgMBJgdVjzvbfB5Xd1Bgx6xZaPVfUcUcwCDcmT1pjAkSu32UPaoCELGf5uzMrjAvBcBJyoDJNkUZsgAbicnn",
  "key20": "4hrEuvG2k9P7PDh1stZ5tr5Ec191LBpZbjg9mtcVabr29bUso5pXGSbBRzhAQN6PXWpssiv7P2KTATpaHUmp913e",
  "key21": "oJcpjAge2msHCF5V26dTwduwALUQvqwSUDwg7dSCE1hrMKtHy8NThjG5y5ZPUBafQAV8N4b4CezQEuG5XC2ohHx",
  "key22": "3ZexYLo5ERgUWbN9UDfKXGR1covPqps3Yjhjv76SAupCYHmfZZKd8nAjJyrahcVDqVtGcsMtU2vDXyJRq9drUTTK",
  "key23": "4SmJc4vv8JPWkYUYB2ipe1Q8SVsTrnErcxae6yLiAsaYRuQT13wTaLGWtaKZSKyxUTiTUKgzbhSgQbMB14tXPWqe",
  "key24": "28CFPxVxJ1RM3suC77YGein6SvsC2RMZf1okmne586HDqCWnaTTYhnib1VbTqhaj8a7SpLiA6Lix7oCKr5Larf3C",
  "key25": "5krCTAcv6vUNKWKX1EmJUUwoZVMwbrSr3pupk33bVAxYDjdhJ9e6pyccsnYiNHtxbjJ1Xs6mKDrAFVBvWQQL52RZ",
  "key26": "5D1V3T3s66PxZridLH3ZeHiL7ZUG6qkXkMw5p7rah4mARUtNEtRWorGqRw2y4G16mhqzRbJbBP9PdXLsdD2T5gru",
  "key27": "3ReLccyBKN5miijqNm7ra5E8b9nYhZH3goR7YcaTRaTB9ZFu5QqFfquRyxT2LNkMUawNMzg2C8ikvcqSsb1kEb7h",
  "key28": "5pc9isUetaP11ND9RZ5JEUtNkSojXyzp2oGmpfVReGU2FacE3ZD4MzJUjD7N3J1D5675KJM7N6QTMvYXPJhFeMFB",
  "key29": "61SZcHjuF87ZEQfy3pjdq69q2pGa2R3YDAKB3wH1FeQo5ibxYnoapSc2nBHDihX5LpeJ6FGLZXANxymbQKoK6G43",
  "key30": "2Pz2nc9tiYayTg3SWFjRtp3NMWH2ihnXSnFEZznniHkW2NoJRuTeusyJtSjGvpngtK5WrJA3UDNLanoPghgpNP7o"
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
