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
    "QHGMDmMSD8LTmekW7bVXtiJXhJ7s6XDFu2HDTCnz27Ti63yQ6n4ThzLL7n3xEyumCPrHh79bng7ECF7UeD9nqRH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UHWnKb3crSEDbLUzBb2wwpVihY3f7ZkDGHEanmSf1Fxmgvq46hB8P75oE4u6sX3nxjv7DF2wCmZgEjTkBPwvdcQ",
  "key1": "2s5ZthMBwWNuRizn7sGpH8SnSt1MrBERKo2Kbu1exQbhQu9vHDDsx5zZ6rtetUtcw9T7bSnkxYxiER3BcHfxxdHJ",
  "key2": "5gRbY6K4DauV6BSqDavS1WBFsoWE5C1hoUZ86hLr4KRzcg9fviD5y15aXyNQSQNYWL41PjcamCiob2WxQ3DvxNvq",
  "key3": "2eQioesxH8yriFKnHko5YNrmcFrbBQxhuVEKEDqRURxWmZTACo6DEgEV5x3uvZGkhCq9NiiJ1msQTGj7ub9ZC3Xk",
  "key4": "2yDo5Yyru5guDmYiXUEtTcMgHLRo3evTbz4DChDYs8jPYJHU8Ga4Wq7WS8Xnteowb8N8xJmXLrifGYHZTvd3C2MS",
  "key5": "3PWwwpd6RNcFsJ3CKqhrCS3PjhnEorieLLYpLiDTLRDWeRvBa9DNDPc3FG3MRotbfz4q76mfKK2FB99Pxc6eoQ9p",
  "key6": "3v8wEtLo9yB84ZLZaCqttADvfR162NA6fSbnaqCRWSuRxkdmzgG3qGvoHZ6iJdAjxm4ijfqFS1Yww3MXVyBWrU7t",
  "key7": "3s1rfqayCAJ57SZHxsJPkn2TjRGYqNQwREbtsMLvCwT7mtQhp3G6pabC1fBTATevCU9sM6ZnYr4EqsqvpNRctCNK",
  "key8": "5UeLtyCcZoD76qjSVDxQ8aYfvgiaCPi7yvet6Sshe8ps7idghrkGajCSagvDMZbGbMGA7MNBBpob5Szo7oR5akqa",
  "key9": "SYBXtY18fRdHSrXY7p6WmAMSsE7EGNUhJPXepY73W1yYveoLrJNzKWHNGZzHGvuzECzeM9mAwB95W55o5mYC71b",
  "key10": "4WpMdLRZfijKkdXgBdgepHm3B6rLiU76hinUBDcNLqUkHD1oRCB43RdKt7tq2kDQKEsa8yyGK6A56yWUZAH9F31o",
  "key11": "3AHni4duMcZQJ2KhnHVTJRnu4tB9ZRcUXu8YcKaGs4dQhGVPQTYurNxxG3CwNG1bBRdkfa7VP1yqgkxh4vUWyEr1",
  "key12": "2XstSb1NPENWBGZziPzjNq1wXuhMxHscEdvk9JKXHvKvrLj719BftZMCcjeVHc5R4oVo7vix8mmFWwGGCpMYff8W",
  "key13": "58nGJELwRxFXyDwTbzjTdeLhjfNyQWePoBzWNr4Qa3i6S2xwB76jRyVEpALfYjKxyAsj91nxcwATwRPpqqmL4fzf",
  "key14": "3kYesHNLij9EsYoAn8x6ZDKfRSysDN3ZyfgmjYx1JFZxwYqk98nx4MqCMJbSnSp8vk1VJyCsX7XV7G6H2ArqK3F3",
  "key15": "2GZQ7rQXq1XaikYV6A4VwAMoP32owy9KW596xYdpaUzfCxtyqeetm7yMwNptqxLYFnxUSMwCL4KFBQPjf6eyceqV",
  "key16": "45Dh79VV4zmBDhuKFp4etT8hpKGAiHoB7c3UqTMSk3uosBbAZPHJA17JTdGvQndkBrhrn7SRyrxKHh9sbUos8G6r",
  "key17": "4pnTcYWhTguuPenuc8dz5FQwFDP6umaUUpbTAFjQ9sr6YBCTVKXRKisgt3pEJxhVRtUhJhGdn3kn2AWAPyaPQjzK",
  "key18": "33Kh6tU185c5w9Bs2CfaV175gJE3fVLn8HTRivtKm6Lm8LeUGBBHESz6dBFSe5RpMYzbNMz8wXybsyhjHfF1FwXR",
  "key19": "2N1m3XUzzhdpaoSgUAHufKMD7goEoo1w4ruk2QaKjhchyKhMEzh1x56CCFpuxg3cTAiM2mjiAfASdSfGm2qzGNPu",
  "key20": "NsLFFKvYvLY8GMFbsDdWm22AApZYNu7QEAK1hJzzZCLvGsYz8v32gzCgoeuwooTDBmVU287D61ksoCkeJcGSBSp",
  "key21": "2p3ugKhrZfUKjXbTF36DFy4fHVZF7fMMYVYsmgG4A4RV1CE6XTM4yPCc4RVRPU2LQZucxFUixThe4YFyPuR1sAN9",
  "key22": "3zQy32taVWm7Cx9B985th14NJTno36vvoWgna1sk35XM8jNxv9UWLz9R4dYc8UK45Ga8g8Y4PvqdEbLiKHDLYb9m",
  "key23": "4CDLeTkcBDHSC9LjqLeyhrikQf1ikN1PSJ3cxKDQL3bF2UWBpqPvzWChQPTVCTJTiA1MKL7tNzSNzwtFh6yyp8fZ",
  "key24": "buSptw8wLKuX6kKnoG4WMLttqrMopcdoojXgK3c7FvynYdrjBa2hUwfnZbNY4NAwvQWAphfpPhdpRW8f7nBxU4i",
  "key25": "4kQv7egYfD56w9PxKHu8oaL1AJ1j4sKw1yREckyezDybsiUpybRdkRwz3TCeUaezz5dFtJeaYkpBShfB29Ngb3ky",
  "key26": "55Mt5ezjpAPjmGre7X7eYMGsxWNGQUvT3PskkJfYmJrTJQVjzZtHShGdD9HA2M2wc5Dsp6pfSZX2ayPd3932jetk",
  "key27": "4sHie5DwrAniGnnPK8wsdfv5xT7yLtWUisKYnrWEbNyGaoXY4jmMZgJooYWxvZ3nN5pc6CXcgYayRyHcWdAZmUFx",
  "key28": "2aGwqKyTmvLtfDSF4jYUGiEC9S2QoRxLSg13PTNZ58rPZWYaqsNKWfdzGbscbdmRwimT992UrRdXrMXyLGrEtGLX",
  "key29": "2VWnMNyqSu1kB3y9bCTNbGbPaitRBUn7ukCmCQZdEynkRzF5UfsoU1FEzSxzrmUMrXYUv6fw2NLULeWfRNyJdEyT",
  "key30": "XqcrN2eoEM7xfPqRXvL7qoAEXU2RpoHZBcXfcxTqqQ5htsniGFTzrHRvqnpJWTb9DU9WCN58X2oCX6imck5RCeZ",
  "key31": "2Zpjg8JF55H5et7jksVuvv4PXJw3ibcgoRLge2h3fYCvgqVu1CLsgHWdHXkGeVn53SSSqxH5RNHLUvisa2NTxtBS",
  "key32": "5xEk5T6QPL86Ya18zt6J6tjPGveJF7WVhJYTkAhPyxJA5cpqVM7Qx7jdaUFrM2PJfJAKdWfEV4evXAvvkXiq6XpW",
  "key33": "AiY78dVwPwCGVYkJnNQfvMWehSsLW6FR6NhxiM1418N86VR3sjjbVDmtmh7RTDc6vtrnc6iMqQSmUrwJWbeX721",
  "key34": "S5nDYSKTngrR5XwZTFx4QxExi8BJKdrdUWDau1iSYL85e2p8L13cag2EriaJcXwZENhBtFjHV29hQEmALXwr6gz",
  "key35": "2rfa5YQT1KwgaPXWTZMa68yEDdxfyaxmdfTnVtwVQjJsgrKHYB13CNd6DVvtPUyVW8Endq79J4xMzfR41vHufeAD",
  "key36": "2bZ1P6xGp2fnK4nSVeQK8ovAsY5FGHbHJpTcRgy9gDABsRQGYpTWk2AeeFWKgbPjcKrAiAmZXG4f9ckSeffPLamy",
  "key37": "5z4jDVjxddRxT72esREpuqv3MipeHQBdyRy6cDF6wKZD7MWNepK4oNhopDTLx9NTC9DQ7Y4XkwgpPzur3pM7JURo",
  "key38": "2HCLnWUwi4FiiJNrd4HKhLWukQphAzsaq3fAnffV6C1W752vLypJYLizwijRtDMCmbpkUMr5Vg1DEs2cCrZwbfYY",
  "key39": "2mj68p1yUomcravSnH5MTu3vrSg4n1gcci4nzt4BYkPYbgdoPTF6bt3TToeLZXt9eEor1qPHi1LF3c3vRHvpKaym",
  "key40": "3JXSgFVjCKfSaCQ1pa6WXjsH7g3n1CnXTy8UzpHJPqaGrmVXWEmMJsSx2kZUQHpQqFcAem1Vrd31MZGPVyQas797",
  "key41": "3BytGLJwGgKtbAbSKHpwob65WVLyLn5RftVxADAFh3zdG6uNpHypfMmUfojpxyBzPpv9V4rDfEBAotuyURJeRHio",
  "key42": "3NXJrK3Y4UTnz9Riar2MpPzVhxWDiLTb3JgeSfp6WAwQZuCHihM33Ly1LwDjZ44rS3EpwXPwvKEDJEsQvPquQstX"
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
