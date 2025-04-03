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
    "sbSR75LPKF6cL83ffq9dUsnMX7SoAPdxrNZNMhR5pj7GrNDHDJdMLf62D3j51DR7gF7PU3vtD6DRAsDDtVC5V4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3x2trb21RLEVZzRWPrNYoxpfpmkmfNcE8VFFbWCjyR1dhYz9gHo7G7nujiPi639k7wzkeY6TZuPgA9rEAu5HAKy7",
  "key1": "5m7VZ7NsCAvrJM6pKvqQpSdWfvojDP8YWM222EKpnZrVujvJEoHPaAP1GdzZMNDwmfvAaeocYqegiC4p86tYShfL",
  "key2": "218ZSp2ZkZa9ViGsqZkgfvbwTqDxzA4gWAihJ9JesQdMuJwLvsSjTR2MT3epWbCCyqwkpguqaxHwFF727JSLQPvp",
  "key3": "4FkWCA3TuMgCZmfd9ftAL6cpLSFLFfHaK6ZStBauviJM6iDADZc6X9Dh346hBAStiYVGmYyFJPaZiqftzGr7ZTkY",
  "key4": "3ZjcS3AEz9u3uQ42gVmvhMxgQqew26nCicqieP7uQ1yhTvMxPDVQfQxeLk99QKgy4KpDMN5XcuLfEiAZYJL68QUk",
  "key5": "5HdeR8tW3NEsVpX6uuctEBoYZtQdG1wF7RF5Fn3NAH8wy57h3bkPE3kFrrrQ789QZiyUB3JgiFYz58ZwGRajRL88",
  "key6": "3tFJbjJ7GAJdd3gACiWaRnUuRNFUfgNWSYPSw9AMPUucwtubRyuMW9JnfpnFYkkjR37JP9T4pwrstapaoazXUkeH",
  "key7": "4FGZFD8JiKsHYmdmHJt1BcTT1SLXLhcqHujK5pxuDk6UJ5V43c3EGLtFVQ61DH7u43AeYVh8EuvzErUAAFvctmvo",
  "key8": "DzPNjoXF4yGE85DXHSNU9xKHRASRtJYZSKTtW6HYAL9jEek3a95PgVSUdn94B2K4nVx8A2dbr73w2MVMQnugCjt",
  "key9": "5KcCABDgaTT4QpAxKghLdiZdNf4B5HGvChm7A7VFaEsVRfsFbDsgZwC34f9HKJodrR6SkvyyvJHGvfupJQCC5eeV",
  "key10": "LoggZbSyUEKmrvn3L96YRMdZnK3oPCCausV7kCxXi1jxRaDMskBLjRsQSN5gFmstqQEa1rzwUKLwDheuB37qYnT",
  "key11": "3iPYJmAkYoWUNbPe4EoVdLbQ1LqPXR1qocXFWyfmZJtZx4XpwScNuzNNkmXqM8YyzcMA7RR1eZwTV1wYrV9G24Sw",
  "key12": "5FXiEaVf9syfgouUpzknx69QrmWgV2NnosQy6ajuDXmyXx3aC8wCBJfiYmjYbBRK5ymqEYnvM1TBhfB3bCwRmcjt",
  "key13": "31S9jMA2UyPm7UfYMgzDRL4CPQUwN18AiSJiHfjHqASze7Jjmv3Ee4pzug4iBea9BS1EPte7CbueGo3dorbMWgY1",
  "key14": "4Z7DywSpaG7Hc7quq2s8vB8wdy42EyZo7P4JWSbH7VLCELuJfiBNLCmmojgqzFpC79AEuN9ULkQhbshvjWnbDKQV",
  "key15": "S3WBDjDsUrZz5Zg2hLMMZyNcBEp349gN2q8kAHEwK2xUHwDggeya5c2KeVWxzYUs9Ygan3GfVPEkbQhFC53RCkk",
  "key16": "5pr8zBmKxPG3v7RatmmysZpKnN6QNcQnKSww6pBhYYMhCqWYVShTn3qxJv6PitkNE2xyqW269WiZqTFogcsp7NLG",
  "key17": "GLnRViTWoCKznS8FiBqjHRo6EkJyn2anC5hEqW5X5TeFfJxw1Go51D9wRvuXRcx38nuaUkZc2MZF4L2Gev2JBQJ",
  "key18": "48gYdgcNDDDkyM32qfNT9WLFn84PKBQa6CE8ZS2JKevoYyisCsVLySrKwzZ8ZP7AABD4EBhVsvfooDLmSd4SZrxG",
  "key19": "4PPgwsdQi5wZaDY86hsm4EBG3WAEqp7MLjtrrTsiUMRuJ3qwS9Hsog1LUae71D1FMa6mRR99dNhLhPoEigHPSemQ",
  "key20": "47g2Pd3fN5SasjtGXx5dN31FxQz3hQrAfYC35nyscXhLGDbNeEt1JbNPUnuK7gGhRo38DBUEH7ZEW77SeC9D155t",
  "key21": "SQszwnB5G6ST4bjvuxTedY4rufGrqmCSitaM8dh9z6JbtaVn286jBsoFnpaehapBXgx73dr2vavHJKvoMoDWaFy",
  "key22": "5Su4PGwGGb2g1JcQES2FJVtBdTYJApZUbtQW4VDUzquYaLt1VMeXrMQvRaxwVJYMHF7Dt9NEzFWU3iawHb8yzxbP",
  "key23": "2GSEMmTLRyXvESscHkcvaYaRUh6XSMeYV7uZPJFLhwEgfHFQ6VnoezP3DWzNCdwC8Xn2ubynhd9VBdCZiQsQmsjd",
  "key24": "J783jypiGnYi4dVexEvG4UuabVbi3c7r7cFUyszPUybhpEc5iSqKBKGiHJMDFJBiph3UTzqUQsu2iM8Ljsem51G",
  "key25": "4iAyrbH8iVH29mn3h123R9ENP9K9h7vVPMaDdiDk3eGBWCP1Bd1FUtQsHfkLpjgXBRxFnbcxW9ywGEgaWZdvnR9v",
  "key26": "CV3e5JwsqEWrRHWwNARKMrep2vVuKjBGPQpLV9tnvv1MEaBRx7G5NJJBSLfUnMGp9JM7KUBaoMFfPq3DR8xULS9",
  "key27": "49Fzh5LEFd8mvqk1DH7uWiB5V85HBkFSH8hNcedfUycTPASCYP1iRc4ABkBv6mdf9UeJBKDX36RqKKB32eVxP5VA",
  "key28": "4m2eiLUAaduS1MrWKK5Kz64vsXtCJusmjxgsXJq2vJ3oK4HJ5HzJ5g5rNMnci9gwyZ3u2bHLxtRoJTciu32VRsGH",
  "key29": "4XAQXevdvswSXsxLpfmE5mANRGRyMT3seVGswBXtQi7WYTJ3rxkMdt4dHKn58QzU1LFGqhhtbNCczNN24dG7JmZE",
  "key30": "3XNAi3dtbQkfb4L4TJm5bTk3txQDzotFmfM8rbfjvxWC4vSAazUepqT2dmsNBUZJ36ToQ8wPDkq4v8uFuL5Yd424",
  "key31": "TdodZiqVBNmirKSRmGpZQvx2pbRDM8dR6gGyoA2ZDSANjDLU6ivpGpf8sCFGwqsL77B9pqJoU1C2dJWNRybTeVH",
  "key32": "2iAFR6rndHmTiPHAALQzKjzmjdi4eaVMj8zZnc18nWCTsUGPDy5df6qkSBkeWKcvRkthhr3gphEngZreRJFiPkDC",
  "key33": "3MTDRsfBk9MAv3WjsVVX8eJ7VGG81MoeqVnLAEZ75X9Mx3PFkKBibrzzkjWeykv64NpQvuqgvDr8GNFKy4Q2M2NQ",
  "key34": "2FtPZo3CxJgRrCaR5bAoY8pG1N86LnVMGg9gCoK1gjCZhpm1xbfF8Nn3NSoEmjyuNyPCrD5udJTdPSge4qQHiy4T",
  "key35": "2eh54nAge2k6DdXZjr9iWi5Xvqyq5Pz2jftFVVyW4raVevjP3taQ151N3fRVTH2ev4wTYZWQLoB2uFt26ENBjGBZ",
  "key36": "57swWtMaLtRdfXe2335FX2EtEsuiG5LqCLqnk2vNVbRgFyVaAjfY4pPuDGugYCozZG96KK3VSNRE89Utup94QCA",
  "key37": "2fvX5o6AM2tmZh5opMV6RBsbHWCeG15wt13fqPEHLGsKXuACQHk27AnSCUfYEkroAempnwEAWMe8Wi47dtScKVkK",
  "key38": "2BRqszQorxiNTSuHf7xN7PUPgJSNosUfS1QGFucD5RV3GJoHk2E1MuAcXmvi1i9gwri8xsy9cDQfuQYmJSMrKqmG",
  "key39": "3oQkNCtr5rj3oYLppJVqePhNW8N9Yti5CgJUQwNn1osNxfZvsqXw5qgVad5MgTmgH21HHerDw2hhrGX4dyRuqGjJ",
  "key40": "39GaFGcPgfvViBtH1SeGqDpS7Hk5oPS7Yz1SkSBxBw4Q4JpqRKyE3KcoqqEy6NBGCcBVuTkQb3mZWmGHW2XkcaBn"
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
