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
    "4Nps76DZYj4MWp8kiBGSoWd8C4Pd265uaWTmVspNW3nqzUkgdE1tQAbvYgJAL1ZPWwoTfquNk8vFRZZECkVMC1rg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MN2bbjF5fcHGR3txKx2BLvoYp2HykVMz6CGkJuSi3qG1Edz1quPvnyViPWTW2dwnsXgd6kez1Qyj2kFFegiURXY",
  "key1": "24ggC2Xqo2JjRC6zAPtTamLw5NhNfnPjuFCzGaCRYqrE68yzshFKQpcdP6PfN1hMPAwBb9TgQHySidd3dumN7cyV",
  "key2": "3BiPDAmiDP3PSaMHMrCHbsMmAADvo6rthdtAcBSXaXVpSGnVhb4UFP5ogXD49fPghxk9TRSPXREtxEy5Spm3kNWB",
  "key3": "51CBX1mi3VmCjMzj3gCHionwBU55N551MnFmk2HCA9RgTjSuKy6NJrjBw8y4mn14UGdrqW5hAAaa4krMHAcwUYnn",
  "key4": "37i1iWAYuvVwiNF6RmsnDD1ycVCxnjrszDu3Xrm3Nb8zU71AoDETRLs4v9huyVqfiFhQdMoFCePJivMdWJNe3mPV",
  "key5": "MVN2QCqofn8EQVFgwDxW88ZtcoEWVjRa2qoTNumFbypGLeKb9SMhxmqKtSj9aE3aiTKuJghRG6Mo4aUyBX4Qsuz",
  "key6": "3pjGAnzZ6gyQSUWBPeG9btEzqqveBLMvvdmwuG2dcHcYkpjjvcKkCcjgu1Z2Bc56cHknBi6tLr9Ss3PUUB4otbtV",
  "key7": "5Xn45eBmHxB9SxrLYLnox6H1G5gQEjV67ygAPWmvFGLpFm4DmBH47EL3yCBauB5r5ACebeASyQ4jHwD1m5SXLPw7",
  "key8": "xYUARFMuZ57zbiAMJwsocHB9XfJyKoBiBgDStf9PKz1Ckv5uj93LrHj6K8SBW3fTNCQvNJDM9DYMmyvALDYkDZL",
  "key9": "dNJ8uW7qSFZu8AHk7rUaFAk5oSbFccr5psVA9Q2yUouhH7Yhnw2Pq59HhwZoU8YKQVp3rF3xJB1KZYzZXK17iuh",
  "key10": "5gLPTRMeH6PgcWgREdKtpMNK6ekxEJDLdXsEchq1CythPh7iuJj4tcmR2RKtrd1sBHjHkTSjkFkUEdSrYTmEBQQs",
  "key11": "3FnNZwguQJpfSHwAkjzJcQQyB1JRxZgy2DeQKhkXVPkMVQfeK3q4rFdfK5T41yMvnCd3u5N1nZ5mSkJwZ8Rtk2vn",
  "key12": "4XkoGdy72xpJADH9Mi6w7DVmeFTK7uUqkrTyDDExopzVkCYSrQz7CXdqxayJFKc99R1hNzjDoj81dF8F9yydapfW",
  "key13": "4DPF58QCc4DbzbLXB5ATWD1HpSDSFCYyd5jU5qzHF6BuKSzJRiqW4qsCBM6AR2sK6Eh3nVNdn5U1kzBg4Qt9k7fy",
  "key14": "5gTizbyjnjHNFxt6cGgkuFvD9RbS2A4BgLUvtgQtD71xqiGwhPsRNE4V5izh3cHwbiNF7vHkhYmybiLYGyvfocFx",
  "key15": "4gGFyL9nysdqDcV3dhk3VMfEz6u4seAnDGSCskVtVAbor8noqcc8NmV3M1G5NuX6NwtU8j79Np4CgXZ9Sk7rVSKY",
  "key16": "X2p8PHVpKpeN4doQmZMuTkzvYzEPYxzUYJjVTBLRbZeDdCv9VG6SRzomE8kFKrypBg7s8ATEaHpXFxWJDwkw167",
  "key17": "2pNWJkkWccNsbF8cAm4kboFjw1XUWDJ1jePnU5fELrMQQ4t63Gnaj7PTs8rDSneTePtziWHfbL6HCNmHgMajvxMU",
  "key18": "2wtL9kGRaSQmgXysKKLvDtAuyqHe1UJijBoH6QttRrmoUi2z8hWLrPPz3CgYZeEnroPPKwxhaWkhQEtftPcRVSx",
  "key19": "38UYkL7KEps71JAMXoLRtT3pD4EuFVqha8RmcHeKPvnP5xDFV9YeJeX7n2khwJ8naHcGRYRQGMmUz8RDXht9Ecef",
  "key20": "545e4w6XDg3foKLieqnreokmQ5FZs1zV5odCcFhQWuRCm5WU9pB45vjYF2ww9icWeZ36iBEBtPcpURW5QAbPTmny",
  "key21": "N71sfUYBKaH2fgbi59LYD1LXAC7NGmtWvBw6nJnHPdpKSMthzfswR9tvHrki8pMNE4VFahHY4gMVQajoVWtpzQE",
  "key22": "2WATxEiYZsK6kEywnZtgMBTynWCNgjxV6F4Jxqo1D19aJ8FQyuqT9eAbed9rWmZFJuJz2JQ8Am4EjNpPDxCi6sxf",
  "key23": "3xSeJ3jLq5j93Dv4fwLuM2NaUfSHP7V7DYrXSeRoszdk9MXxebskj4b6XNW5XwhpacfkiozRzGBftcYDPvLaBBv3",
  "key24": "3Dkdf7cGCU3PAd5p8TekeW7C7n51FhTipz1NMQhhhArSoDwy1wypuYc9mH7dz7ihSCQzhY2rDwWVk96YdnisW16D",
  "key25": "3k9mJEkaFd5qVszr87AUkYFnh6dpVrDPZvzqEmjNoywBKxqzugYGFaWUY999qaX5Zj1hwzjHdSzzDb8uUoieEp3A",
  "key26": "2xuMD43KKQyC58kTdV7PSkux2YnUjDnA9ti4dUsVFoS9CxXW1Lfe2QxY9U5ahhuWNbmAj2qsyQqPJGtMj2j5Ey9r",
  "key27": "3HVtY1focYuVoQFEDuzX1XkJUZrrS74cduvD6nyVwHJFwWsCEojNPgx648n7GTf22WtV2HJPEjmJSbcSVUsiW7ue",
  "key28": "2Jbt4NHw8dWEDrf821fftNY4AVCWvPyBAhbP5QQrRcAgkphxxWQALgUxST23Jv1ZqLFE9aefWkJ4VLFmbfjeDssc",
  "key29": "mrERoQGzzbeLaHy2Q2pcdbQby9BhauZB8iSxdAGLJ5tpCmfH2VeYjnJf2AW4LRmCiwbxe7Ecv4JwhXgREJK6std",
  "key30": "2m4jMGUtNnNV1tqndEtdgH5FeuhN4CveRNaJYgr2pCdfMYarB6zP5zjB5bWVQNTt93aWKNyp8d7fg16B3TZVjSdZ",
  "key31": "62opTaA4ty9YSopYGwfmg5tGeY9guJhRwYrS8pJVQUpWtu3vD1rvDfKfNmk9hztMjbAQTL4w5VYhvqcNXWiMxf2b",
  "key32": "4wSkZChM11A4CrkVUTvztjZZcBLdaSTZBkfCxJgkxoUfLGUdUjzZkHavytzdtcbvjrx6DNiN2HtWRnzUCyp17nYt"
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
