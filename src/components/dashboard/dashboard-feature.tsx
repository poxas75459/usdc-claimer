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
    "64bQ2Fq3irZRHwB3zRFV6s4PhESLSH4Q78CHozjp4ugZLbSf8jnr4SRQi4XxJQbJZWyzN2SesPmi9UeCGQXpuuGZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a2jVPdx4a4gL4C9UMGjGxjH8553suTvpdzD76rCeenHJxfqekyUeG4PuwLk6VJ7wKJDSYuTMakTj4QkxupJP9Qf",
  "key1": "36WauJTikkdDeGNJVvQkwMn88NXpG5BWDXv5guyjmsjSDGDKjN7RZ3p972tDdTL2SNNPMQ8dByP9mRa9c83YfnSD",
  "key2": "59RCr51YEVPvZff1hki8cKWYHYSvq4Rj3sHRfGRssDZkcFGLhoeRngHW7ERfQ3F2FUy7TsR62fADH7mr4N2PknTo",
  "key3": "LffpxzfKWGXy7HH4YPvWhfgsi3S89qj2UXiUkRN8unstpxeyMGYmkY6GfucD1rjTbBkLQBWq4r3JMZgfTMnSBr8",
  "key4": "59ifznbUYVG6rL9QLEdXJYF4CpxHgqmapyUUrbvy3XpuMMXgLCDDY7dmfmb7hFLym6tBygkE1J1pLoecrZfDSosq",
  "key5": "4gWQsWtX2GKok1a7Ymu4ZMRrrzKDPYraP2UqRMUSh9Jj8ooZ2bx48FmBUNFtcMgAKczUUuF1V65hL7ND9PJ31KsZ",
  "key6": "4djxFFEk4ZfoWo6RYY8RC7yG3NSpvhzLrMCMjM48dU4KWdZR4i1TxdNgGiRYifBH3m7hjEKEpv8s8BD8HLnX4zZA",
  "key7": "5yTq8YrT2b5pz3f9HzJzFVwZyK8MU7Rjirh3C9HQQMoyei6m1Wu1hw82rf8mWA3vLfJaJmn9hdkmSCzdK9hXneSa",
  "key8": "3dHzP43Pv4cnJKn9Lany5ZJu1GCAdcSQhMzQMeycR418yB36Ja5dSuMAMGUrNjGLGytvVeLC14uz1mZTf6Z4EmHm",
  "key9": "5E6n2D4BssqvaitxUXPedWbxhV2WYYvvT4SZWJQ8AzhvmMnsn4TEEVChtXhGXV1tK62p925tqJKAH91ks9ecfZAC",
  "key10": "2LrGBjBa1EsGAWzZKgXNBAxMRdQg2WK9Xvwh3kVHMq38Qpyp3kRBfChqmLAD69Gw7mr1DQiniLPFeajYK5uRhZ12",
  "key11": "3KDXwU2wB8yDKuWVjQ3V3QgKTU1VwkwxGRcR1cSLVnt3ieGAvCU7c22uY59cdp4qMTMVHWa2GRsm378zAySitWU3",
  "key12": "2Z7wUKP7or9QSG4VfMrES7zkUQAKczzwi7KjcKw2gPtrXL8SfDkVToMZwJ1aeKPPq5QEn6x73DcrNyG32QkAdt6n",
  "key13": "5QCRpQLdXyVQKTMZ32LcYHASZaSw3jAjuZDbdv5iCFex7qyWaCRoEEEnpA74rTMeav6kHiH5S8wE7JAfnEUcUHT",
  "key14": "2ULmpmDXTr1onMrUBwzAJSiRRHK5AEXeD5ARYAoC4MAupusNdxGcL5AKQ8Q3WyG5DiGFs9fDqCpBTJkN51CvbdEV",
  "key15": "35fymqaLKb8RW9fyPhCLykfoMg89UseWm3LXWAj4V29NRFDAFekvdhR4f2avPZmFqSwBDQSPVxKAqqCr6Hr5hJmE",
  "key16": "K8JEv6PTiwXiJAayfsW7t5L5oEsfVLnvSTqGnhyFHRAbDdPBQaFEfHPCE9d4S4mTmAjD1wK7hT4vwQU6WELFJ3G",
  "key17": "ntdRDrDeKgUVMgVC4CVUreBDx2Ld6rjbZkUdcMd9ycdLek3CCtXTvYisyZ62kvNVXxqYxVDc8tmFoQVQL18a8yB",
  "key18": "612hYaExaUEwrRHQYhLVoWhePQPg1pBWfWWE8k1YWtCSsYA4cPPEiZ74GYuVn3nKf63KMwMq8w2KzBwDpnj4QgP2",
  "key19": "4pfLNCEXcoLzdoNKC2EdqJUhLcxMmsBvx7NewSCbu7bD7mRzs2YM8FtyqJk3a62pXBcSemyp4QTz4wTvan1ySuDa",
  "key20": "33bHmi63WxXTDMTEgudqstQ13HGptnDadUatyDxUfL7zyb12mPrMJpMUzzktXSaQCwThVjmQWswANQZyRVmQWFx3",
  "key21": "16a9nXr1kEC5sP7dw7G1T4AQ3XnrDDTXdtHutg9jUV5offNXH16seZAv6kf7GJmETTPQ5LeSKsQfoEPPUWKPWkF",
  "key22": "58SthNKwMbQX39scGo1Xaw1PXSuuQ4XvN3xWxWQBbo7GWJCn7AaRRtRfKerwFc3jG9Y34EyrEuiznK9vX5Zhi224",
  "key23": "2EMVwXrrUA7YYy4PnVUUBTHHdY1oivSgWGvsK66aG5RTMXzWbW88g3LtuEpzV6gKzKPr4pXgNbAgfJTBpB6YRqzQ",
  "key24": "5JJ9yLgvjigNrKQD9HRpbeanQ87dEazeGDeChRSC7BfSkfaDPJuZiCwtpPQebRMLt8ZFakXWHHHgNRiVvzzHfMPa",
  "key25": "3YKwnTWuYEeZLWyPR88j3N7uEe2Cesjour4oJMFnjjHnV81NkPvBVvM6S8S3DCgj7kSuKik8j5V9nvKeCfF2vJMk",
  "key26": "4rqBLSq7W9hL97K69GE8mUPSHzPsU9uHvwiGWce5hFtNt9iT1hLdt1tYVSTeJYP3KXkdt4Lx8dBxcWM3wAHQUnui",
  "key27": "vZcKpVrLyDAMvnAbMojhXczc4Unzt8m4JzuBKCFbfp1xUryDA2vMsQ4xRg1wgmMzqqS1FyZ6bGvKH68P1wYvGk4",
  "key28": "4aNQzGuWNfigSush9efNZ2e5YxXE1QfRNsU9YAkA8SYgAEsxnj6VGbtMNJ75bRUqJMAqrWW3MkJSBtcNbUqN7mBB",
  "key29": "Nq6Jqez88N8Nsnjee3ZuwFU6ZzVK5WjLiz4QLtx5jBkCJz3nquMZunXizB6HdWnMCLjaxzRh8gtG6HywXMW89as",
  "key30": "22ghbL4hdCvoHtwz6SCcZrTd46iFPJ6PibVmbFsGWYeTMbdsh53GuZthU3veeCrcQqHbRER5SgZY5SXAe6NNG3vC",
  "key31": "4Rqa4rFzQH7GG3tT6YZkowEySfha1FkP7j5BQXTestqLKVF5oiYLWTQfiYc9HifdNsnCyRDh6SWXeFdDXBMA6s2C",
  "key32": "5iJZe3AGats9gEZDQnURG2KaHZUBkDawUJKWa94SAjqBiig1tUxTRvMsPn2PR1MMkdm24CY95gEn9pREBjZS5Kqf",
  "key33": "4vNye8NLRtTU4mQp8GFHTsUZnn3kFzeb41swAijnJBg6aX1UiTSg3V4nZfTDXzaSMruaqKwk9mKjfv57XvFQaMfW",
  "key34": "nWj5fG9u3hHNRzJQaWiZVryBXX3CwfbsekHBSmvjCiTndawSDzS3xf9McbPW1XsEEdM2RNKX6pjNZ8wndtbN67U",
  "key35": "2KUHDnSUDUcojejxWknzHAR55KeSGvZNdDgiyQKkzWepQ3gYu7wJkhkgUNDAdJx8z8AYNP51ojwpsnvYRyfkmcAB",
  "key36": "2KTcbTXFgf2jsY2maqR6rZRhn17mkmTWwYhysJG4Ku1cLyUXXg4AiaQB6VRReA6o5dweEnYN1hfA7ELQ7SdV2dD5",
  "key37": "MLziWnGyxGHPC3Nb79am5ZNifAVnificawELdgc8waSRqDirNTadn3aPL2D2BK1dZqksEXSQ3bWKDei36xVqMJU",
  "key38": "4J6xwdPFy3Lfb7n2VNhkzf5hHgAKYZfmrU9tkSBHw1hVLGbp74RcW24dJQbr4JRRsAueef8JwL5Ut9CrnwaB4qMb",
  "key39": "48rJKa79EaEJ38y1wgqwLUHF7bJsT5FXoZBex5W5fkPSate6vKxtRTHZ47zbVRN6fA83yDYuxMrGanfYFb7YVvik",
  "key40": "WWXkEeDzvhm18LQ97CgGU9yANXotgt9uRDSxUyyAWyy5trvwSKszAZEdqnBmA7XWvsR5sKdZRZ1cK36JgFUHMCU",
  "key41": "6537gWiCJv9enRda9EYJH9xSnhAyZXbdiVvUM3BEZzDnyVwcSXum9dMMWnYDd55FKw2Hbb2coMLTdj48n7ttEViF",
  "key42": "2ceDf49YDNdGk67vFkAcpGnHCVBntuK4zuGxWgdshmHKnZGbzPi5h3spcEDptnR823XoL9KgVhjBaG9eZxP67KTa"
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
