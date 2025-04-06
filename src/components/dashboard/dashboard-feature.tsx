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
    "3J8jtEaAv3ZqCFvqVg6Fk7GRoE7RVt4AxeXTRtd7KbmGdZrTWXUXw93yaSSYzzhhAVR74XBzvECNaSYZsQ46SnWi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5TyczSY7N6MkjHK28KSnzr7uEjohG7CYrjccm4iNXRUse5hXT46NrFbafxi19Ch7fwyAdm9dteyFKuDDXNHvggq7",
  "key1": "5PKyYKEmQQHh2r8mu2czj5xZk1iaDSyRABrwRfcJghSBrXbD5oejZLUcsQpZiiuzWAuEtpwmcQmLNc3vhMeUDCdJ",
  "key2": "4qMcJw1BVuRS2yg6MCUgbLCPWofwwULn7ZG4p5HAvwTJu46JT1b4KsMAtJ8PSaXwtx6ybZjX4VzR7wNZL6vV7KUx",
  "key3": "522m76qmG6TnNgzzCaaCV7knZAsvYewrKj5ust7oRSGbsTKq1GkKA3h6yZxNBA4y8Xb4sG8EthNkCmgmhGW3AQVa",
  "key4": "3FgHCQyKGLhUsWWRf72AcSXn6w6i3GUHnnXHzTJuGHsmroBrQWkWzMAox7xAW39uHqDzFWiLTd8WhyqM4dFSXN7h",
  "key5": "5oLRLqxdtpikrZzn5WPGzWo3Q2UVAN7KH2dA8Fy6Ev1ntx6igX71bc3wmeritioqLmBcfKfbr2PwGHi8ZMnQ7fPz",
  "key6": "448dvYyVE8RtwSSABUXT3c9hspx7NNG7i9NReJxYzbth1k8cASoE6NgQH5HFAbpUR4zorjdVdfbR6WU8CjvtfGUt",
  "key7": "4xkNPEU4fUPWh3iysZkk5TCWHUkv7vnxo5VuygMqkrp6NKTeB5bCFJxAVWgvc5HZsWhoe9f6Jr142DbPC3G2tD1M",
  "key8": "4WRy6QYdkdoDegZiVbtxPRyoMjPVYgn2PEdVVrDXPMmDj7dFUyqYw8Z5YAM2QKU1e7v8P5Pro8H9M6ZL4ngKSUpX",
  "key9": "5nwaootBW6cznYMqNoSEXbo84E7vs94VLt2NSMmABJRqmYLhTgdLKGg9HHiQppqpoZfDnpejxWpEaMYCpwzkWTbi",
  "key10": "65MzumGkNArLfcnoqNPf6qJh86Pc71EzYxKK4UGf2jgqxEeGvgEqnsgNjiL6NU5ZcUqsZb3roPCTk5UWMaRbzGL6",
  "key11": "2bxE2nSVNfoMzq6w68JjiWJa8FSAdTRiZAD1ANwgQEWo5RVTVAEWvr3VwhgGR6x7yCJiUEsU1yhX8HeKinHNZmuB",
  "key12": "5bTrbngGDSXQRRNe8KwTsnmSW7fnNqGtATLx21eZdsTxescB9SGegDfPyxd6G6bdTKsJi2HsP49rNS85dBAUivKz",
  "key13": "3w239BKJaZ1GfLhnETfktZ2iYzrweUJwF5cJDXEvswTsHhb7Z9GgTpKspCU3o36uAwMVuJDRoCRtUUo6MPWVq6hN",
  "key14": "3hUjsHMeQBKibPW71xt6c1e5JgojFhUiVxe2YStUKMvDDAwE9LhdHca9DBcPwCTC38hWXdN26Fb5dTtnB7HquPDC",
  "key15": "47NMbxsZUMbXChx5L2d2mdiYnypsqfJeTFAQFpSKGKyxguKnKPFWFa4eYa2UfrXmvda8uMkhZyhNwjSEcaKcNfLP",
  "key16": "5rvmEDG6h8zWqyEZav478pDE8h8rR2sXbudHbvjBtQejfwr1Gt6J3zHNEuPpZLGaDx661YYp4C5gJZCuvQ6vi82Y",
  "key17": "2u1yiuJAVNVxGd4uZ3K4yqJc4TxgZ3Bx9eZV5cDSnaLQwEi2kaqapL72WbQdJShXJwjcBfeYCKbCw56EmtmDn6Rp",
  "key18": "5GRaWyTazmxzybgxtqSTRdNx49dW5ZfWqJsEhUjB7y4eaQpv2D6r2XvkH8DpqEcaUDvy3x4KHDxytGdzFf1pTjDy",
  "key19": "2iDxBDHPn5Vp9nmd2UPGuHztjgAffVTYC8Ui4rkYNXca9LvYzGY2S2Ej9sapq3pPrzbNugXzYxGer4NAc9Za5Qz4",
  "key20": "3ygxwhVdd84Z4WptoQCZVfjvxZNYeQfJmvMeF2ERY3EThnk9CSr5BCANaj5qtiNggV9g7Vv5HFSPhRFXMPLqkmFM",
  "key21": "3op63Po6PFSX74646ZNNNzsoV2YXrQmpSwribBUqeoYndPh5oSPiRB18MTjp15k5SccViPQTwriM3UzMYaZJTKFc",
  "key22": "5Jxi4mpD6KSiYJA9wSsupAb4YZvCh6CpaN7uZAZXmv5cQKSVS6LKMo64bmiWSEJjhfLdSLc2WHTebv6Ud5ahbfDx",
  "key23": "bcMNRANdAGtFmHxnF5fbptuKLZK8kazv4hkv9dG1gq8JFAjKH1DoEsFNTApuaVN2BXxdrSGxh8gD263BPTm7vsD",
  "key24": "2mjCCK5LKUddYzxw8VV2NgErE8aekaGJVALCNKDY5mr1Xs2PTAFMNavac8hnpRt9mnNizgB6HjBk9v3UVVzgw3Js",
  "key25": "3hBF9GFNpS2bVceygzJVp5B7wLWB1wK4qYLaAqpZvFixPmppehStjKgEo996e1DAUy3UC21WiMzRcT2pZj4QkMiE",
  "key26": "4Pn8RJDdPtZfqUb1BRfRxZhrm47ZqkydK4jbRwcVbEntPpY2ukaPbfTiYyMz29esgM1AYEQJHQL3CLcc1jYj9MAN",
  "key27": "2AzE6SMxPFt3VmtptLr2DAgHeRjVyiXNbxf55jgnP6XhMUodaLRPPGv7raf5a9Z14zDaLGf6udQjuEVp13DUJDkB",
  "key28": "4pw5kzTC6cyFtBubie8h33CmknKRMWqh9MHkDSYsQoJkLz2k9L3SHa71DYtbJH2VxA8cEGnY5S7ZDEu24LocGbpt",
  "key29": "2Y1UoCEzS7aRrzNie1LWTqPLSMxEVoPwruFD2ftVC6tqDPJ4fysku9QmiQGWrjXtcW6xVdbNny21mG1LLcBWA3Z2",
  "key30": "5r6dquv1fcrRMf7yDh9oNXocsi9wh9sAHSmsVqHTYLxspkwqy7iTKG9s7CqjAckCC3FnRNZ9SjvffSiLMebenvQ6",
  "key31": "Snn3E85zML4hFapzNjb793dVts4MFs8MGxzwbmEUuCt1sFPfUeDrW4wZVszLozeAXDx2Ho2x6RPqorsM16oCzv1",
  "key32": "4X96exffV2NoAcPw5woEg6YChWL1o2WftKRckCbfqoksPZaVAmjPofJbvquszwNUyfJwPfCW7WHLBBs8MFSPjfgc",
  "key33": "41ZkhUfKjZspUb3qsjb4KdYhubAAk5kyC3SKYafiZvELVjLZCbHc5vNBiFLajjauBjUwvaRPrnmhGmSSCZh8tweV",
  "key34": "4bXVDHb2Fk2JPxp2pSPqa4b9SkkyX2zNp8Q99PVcGqJ4aTqpWVwYtUPs2NSVPLDXaEFGJFsULNJEegYmF8dS8MMo",
  "key35": "3bpXZjf2aj32jLByabPYeqiP64jsUAJDB4T9zYvcvUnSHoHm6fwuo5JV2jTZz9vXiHnDe2USFoLgZXJ45X9GcvQ2",
  "key36": "5HRVGfTDNFSdqiaTEwDKB27seSS7Dp27mRWg5AGGseCiQpr1c4KXX3JuGamGcAPQwuQKBiKiN2fSZEMQxQJZjngq",
  "key37": "39KghiYPJoNiDdGkbF4d2GLePpEajQHUdHtrwCPQRPUbhdfRhezaUKZ4YPf3txreC9Xz9bfPP8D93qXQMDMRUjFt",
  "key38": "59bJL3RovwMidF1RZGauL4aGHd9Fk46zNmEGsTjKK8BeKLuLVSXkPsBdAVAbnc6w1Esor8HgYRgAWKiZJVTvLmT4",
  "key39": "4UEc2Axi9LnbrZnVUzZLRiciq5LyQbCcP3j7o7BMxdgUbiZ8XQ6hVWo1bcY9ArquvFnR9aNdCQLHZvfC1JgH8UDF",
  "key40": "DNzwvneSqEpHKW3QVJU4aM3y1mLpF7EKrNMrkibpWMJTeYcF3pEcUBZGbfHN7TCNxbCGyN4hBCNui8o3u5ARmFq",
  "key41": "2hKUfnnvG6qQ52U5tCMiSzMwD45MJSkA8ofs9mVpk4s4vW6ihQjgfShnbc91yT2n7ZeFyyoUeXwRivpu3bcUMxyK"
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
