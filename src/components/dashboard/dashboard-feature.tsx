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
    "4itXpgdhq8NoRK1D2VkX8XSp7rNATpqxkryocqN2wF7WXiHyELnYqPwfKFucuTczUfKDf3eTP34ygue49GjyyJjo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5q43QENwMSQpwydtpq34Sx6FWUXv7AEDxjE2MPnu6HnVHhQusjxE158ctkBWZjRVmdMSzdUYPb4fhfpC5CDJ1wTA",
  "key1": "62Noc2Mhj7ZtKstwrzL4qtKAWdRspLbff2R9KCnG7cPGFYByQtahaT1VmrcAf7BwD1tCRosf4CFAYT5ZKwoCecxz",
  "key2": "3YSqhkwe8v4KkPeSGpUBvoXfxFgiHyxLR9Yj3nynjygU5iKJnUoaKJCm4fvyqeW2gV11pUVFKHDii2gFCcxzrxNz",
  "key3": "2ZVDggv6AH1PLj7UWGBHKdaAesYJLsDWmEQ2A26MynjrcoCkDeUiFF82121QzeH1tUcPhZBrrNiymmQqbyvX9WGB",
  "key4": "5ycXHznibd5EPQTT8sbdiUZiFuN2XetLW5BubGYQARGEhGvsK1R7VX8tWsDn6y5rUR6rhUQwKbAhLD2PHdZ8BGcm",
  "key5": "5mS1wUzQaZLtedfF7hqnqzRXNNCpegWCd3Svt4keTDupsK2eARSBhzkPY3zxuPxaHaGhh7ekeeBA1WHFs2sFhfem",
  "key6": "2vaPS5o98MQpbiWkJbfLJ5eQvq8VnMFXDTKtKsgizdxEY3F1Td2HrwqsDKZBP9j1E156YKSxCLiLedS6Mp6MkZjF",
  "key7": "5VSKjKCyexCdzHgsH51X9sEhLqrjRms3gXpf8i3YcBMLUjGbXKqM1DNaPv4NSzR1fJrXtmiv62YyR7xuqb76AVZ",
  "key8": "4TDG91YQQSJWeUCLLRaWfbDVmKuPnDDpXPYkoewZkLWmZHrsraUt9C32fXqANFD4jqqbgP9wycv8giHmvoPW1aQp",
  "key9": "WS7ErM6xEYVgXtdd2b4THvanZnEvJrgzmPewyAhepn7SZu1HreLV93d49hSq9LMDZgaYS3FWbYiUkAfBgvBpew6",
  "key10": "3jNTGCHf2TuWGNeVAoPN22KYA1ecjdtE53ZmQKDKZyZTq7FCmnf3UfP2fSKapDbbQYo6RiiZCuaFEfQ5gNmVXPjo",
  "key11": "A6Z4ZMxsXMbEAegy71iyeNHgy6iJ9cCrVtWN7Ep1xX9VfbMPWnNQaAS4uoDMPpBFmS7ifcXaaz15U2vYv9vKJC2",
  "key12": "4ftcmpzAjzLKzwf1ExUg9bB4TZzcHmxvn9sBL6Z8u1zMK5EE8gxrnB5qHYA9Wn3xyDXknTrmpb8oRfrcsfzrMjr3",
  "key13": "yq1hrPMhxWtU6ziDANiM12dqJ87YMzmU2Uj156wqbs1EmzCLhsSrjSLWUUDAeKBbH1PhZXYFYBskLiEX7VDk3WQ",
  "key14": "36zvArA384HAZ9WVSXocrN4XiMRKxsTZG6AK3oVcnB9Gye3Pgraj48yQ8f6GhCNn4MFPjbCrChTghTWZMWUyLW5Q",
  "key15": "2uPoVkSTTKe6jzzU4Lrd4xdccFDF7DkCrMYcvftdxcBM6hjz8rP1B9G2UwYdiuc5C3FWFirwvefZFw9fNFRoB7uG",
  "key16": "3t6EzipjyfQnKz8bLbhePjy5jTaGZsVcvNLNRC694Yn4ppKQzminBz8PGbp1sJigDFYLgTnjfEopC5MnWgAF6AcF",
  "key17": "2xgwCcQXv48cHPFUSkQjU458b9jJwHP7hstN8s8c6FKkqnQQmRWPf6NPVxNm4Pm5QFKDeQTPYcMwkfQNt86omM9f",
  "key18": "3KL6vBy2c8YZdR8kJ8Wdqtna2w8GNJL21Twemxozg6tvKDom25TS6MP4B4m52oC5JYzoJWX4VWNzdQ9BDPHFu38d",
  "key19": "4S82D4h9u48m1tBzZXknDEKUtRe7x6W2b3gsgXT2dkcT7b592Uw7fSQ8N1x1D9QiJHxg6nRi5zqtJok8cX5uqtRk",
  "key20": "3TiAE7fWuMGam6d86hidkFT8acmb7xRoxULVgJfhEJecnSUyhpSti3kd1aKJzJk6CLu2ypzkewYfocA1fdAdCoeD",
  "key21": "3R3GxaZsw5achr1rvcow1m2UwHwWhPZyu9pD4U8ZDi47d263e1D3qFfQkmP6oJS5VAxdyro2nh7cP3ktagsAYK79",
  "key22": "2SdUNUXUxCPHVmMR1Ph3aS82G1TZCAG8b4XgEPZLQmUDDE9afJzuA28jS7gUUrVhsfqe9irGFwvnhdpWN2yfprKp",
  "key23": "5vsmY27kxStkZaB5UzTtteffyA5cQVUYpHm6jehfJwtnfPh7gDDwucxasJ8RPvfkbiK6qTof2dHUtFKx2B5XHb4f",
  "key24": "2fFJzm8hpH1L36mZrDqvkUQUYk1ptQjpAzqSYVBABqUyUi2Q53yTboMj2qtigAZWGdRo9k6ShSex6GwQm3WSk5aH",
  "key25": "GbvX3mZ39DbAZ62iizVwUQd48FEE2XQS5auz9ryatftgjLDRQLKFkR3QLgdV13wKUSEsNNpjaRpBQPsBUy21cLD",
  "key26": "2snVvT2ZJB5DAwxcvstjRwofLt4mC837aanF3UeT6nYgpJpqtFnavMyHkriC35ZKzdCSZEVLfyx2kx5VuBKUgKnU",
  "key27": "52vvKSg5b4XQZHGaBT2f9zeyaQemqvAH7P2gvYDJehE3csCavUkb7mtwxws9BERUYWHsHwX7mesZ4dBPcrhKWn5e",
  "key28": "4L86n2owAxrXZNupuU3oJDoKWsmZXSgmWHaE3NTTLNZTo6VxGgoLYqDUy5AkCXjaRCRPptsTmcW1BBgvmVyJvmxi",
  "key29": "5qtHUMYH8pKGuATaWwXAs4fvHHNY2i5ntCjAE9LKfk5jeRqCGXVej3DVrgANNREg5b4bpo9H2RMpMGPpZ8NoqR7z",
  "key30": "63W2YMZbKrS72GEeU4HgMwkvHAbNUEfgi723rWiveF6sPCDFJ7obpAXaVs8EHPVu1Gbg5KaCsi5CZTEUPyrRKCrJ",
  "key31": "2t27CNb6aopBxcRxx1XYFZXj5RdyYHuF8A3iZAzsWEew5zZc5Lx45iy2U2RcZBQMZ8nQnJrfDq2FPMC3dmgwwqGv",
  "key32": "49JJrbS9LvT8rGMvNV6tu379q2Z8cXuKoopdcXT3tt2RmyWXwCpfeXSMYjkMFktafoGRWKdWUP5QsS2ssBFbKBY4",
  "key33": "2UDp2Lc91YRYDTNHZkRujLFhnKw3nfUaqsCPzUoxAUNRQAN46sJzGaKH2A99aZx8h5ecczp3b1GAEQirtNiwTZbo",
  "key34": "5FVP7ACJE9fquvgoonngWzEbcQK9cVZMPaCYRMp6iNVgukxoKwno77Rshq5qbV1igZbqC47uVi8c72muUk2xkfLo",
  "key35": "3Rhhu7j2ZjNPJXbQmMcN2fkztbmCqWmYxf91nkgVeUyvaU92L3shMEwdMCyYxhbTHd369R1aj8CDGgYTrZSNRMDX",
  "key36": "27JL2DL95C4p4yugni97613nCm9md1Jm8fJrdVa87nMYmA1kKK1ZperMB4dNW1jE9GiwNvCjphAJWzyS85ZbiBQy",
  "key37": "3vV5ypQ9YmGTKjrkhiXGPHpkgrqKPbmYSMKE8W5ZVYNLUXRJuRXW5KVTnewmcvDPULBFqXQBAjvK9wwAo3puJVAa",
  "key38": "5iyHrjL4PS1S9rvkUcHAkt1Z8YmgVPacww9ucPM3PCSgqdaNko4zzxGmqTyKYPzTgVowzqW6jkdJG5txZYjW16Rk",
  "key39": "2zAXaTcnYZsgLcfpNQeNDHMZs9qFMeMn1p5329eXnUVGbQTRaozyFjnacPFxGdLve5pzmCSPcYbA62cK3mrbZGGW",
  "key40": "5RgM4UZQ2RLK9bFSwEjaxBecCbnDWsz3L7sLK1RvZkooddXtQgJ9xcVmDn4SfaA7JTgSG2iiMHRVM9nFPNZSQYxo",
  "key41": "3REJ6QUWF4jJT2JQ4PkywkHGvzUNRx72GdDCaEPW67VytykZt3R9dHZnSXGKXFdCRjph2rBuyGX2KAXSKRKbiJFU",
  "key42": "5DbvAryyBRLHBW8EPumrwJEq6EsVG11qtrc1WryPsjbXLDxJDwJg4HMBs85dxLN9PFkwjCFifoNQWPhZYQhbTW8H",
  "key43": "6LeNJbDNfu2Xbe6Y1wkjRBtt576gtNhJi7t3dvbKiC9nFLimUWRVquaLBrMHGrsJG2fAQouYi7HqV24s58Drwm1",
  "key44": "2GVXuQ56HGPSR7N6ti43JPWFBaf1qf2xct71RiHpjUUXdNnzh4rsNEz7utLiuME1KcsagZvC8EqxVWQZR6GKdDnL",
  "key45": "52MwFVr9JcbxKSELtBMi4tFJc1dvTGiwi4hgKtRjTDkuiVFhV5zLbM9XiSEvY5pbo5ZMm9LzT6jHEQ9W2jiXwSBf",
  "key46": "wJGXonHo9SwTLvpA5WHdTRTRTZ4e8esANDU7X9YQCRfBVqc94GQ7xs8vcod9KDpz9JXjsDmfb2cE9Xr4LFfD326",
  "key47": "4abGNMtJU71v9FaErCDN3MyF5YjjPrkxY2xc6QXXFLstpqzaxKHpfYDdnuhyP2pHTqpqoGh4NdkyakK9NzAwapu8",
  "key48": "cRLWGFmiTEsSAu9mETjHvLzx431ugwBa1XfP49bpfZ4gcFYtP6Niumo7PAQBHVibKR121JSbp3AR2qcPsCgsWuR"
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
