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
    "5noXgwYUBun1DYN3MVqyqE259DRTVKQphvip61tn6byGYwgiS6UsMEtvypyC4Ro9QFYpzy5sZoLG9CjoLtwYmxJ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tTbMhNJT6rfdjBfY8UPZ65MCCpxhUYkMNzNQy7u3qVUXtzQXLqT5wrcP7FWEG4F5CCuYGxnAaXVxXJTGpgHuXzs",
  "key1": "2CDg1GJYTG24pqTGKi1Hd8XxJZP5CnTGLc89FdH95cWLmvF5JvRdrWeiVrceH3d8BGtvSt5ENHKFciAtVTz7oXkJ",
  "key2": "4n9nUJXsajGryVDDgFkAgL6a6iziWVYLpS22ZQZbocuFsYYyCFrwNoWpfLgEGU77SftumD9BNx7x8Qqniaish9e8",
  "key3": "4gRf1bTJspWm5WJBsTN2fWq1X4ACooiF4DvH5n6aQn3N2YrNY6KNPzP2gNjt3wHGWsXCxuwHPT6So1QoY8dbWPm",
  "key4": "nFSyTo1rtPE9rUsyN5aWmcbZENryaSA12MqF1iBKhKMGReMvtE1Zt7K4oG2jZx4vEA9hbk4RnMZoazx3EDiBG5w",
  "key5": "48QizR7dT72ZQHcjn82JzsEwgLuMgQaeFXv5ymzUgA4Pkm7U5BJyWJqZtGAM7tbn6NjkD8yTxbsBYr6kSNk5byec",
  "key6": "4SjwejM85ooVCRuQrkAGrYdkud33QGMv2ZyKfQdPu9cB8wBpcenh5JRoAzAooN9V1115fKk5mQUxuQKzHpGmLsyk",
  "key7": "51EYsQMAb3cgm31MriEWnrvCfQvXmKVFXiaDCBt6nFkyWUvMme5udXThxHx74d2U8pZB6fzArMWteXswFtw4Wzus",
  "key8": "3n8Wb3C2nHv9R2dViamqVgCEzh5gPigJLBfSSi7p7af6AVhmZ9DGX2shmer8yEBnwUciCotYwb2x8YadbyJsfKmZ",
  "key9": "46KD36L2f9x9VUmtbuj1axLFxkLWS65B4zbGdum1mukakMESfD4EdaQqwV6QT8EqpR7Qr1sxAXkUi15rigcuEF8T",
  "key10": "41hqy7ecyckZKpR65fLVLrWCjmha1JodJZmmwEDcMmtr2XC1aSguC17UseCLbYJzuPCJdQ58uazXV28kJqMUd9JB",
  "key11": "4fVU8QDdxiwxgCypbVBVuN5PyeqbcZaHbMeQb4qcvNwH1xNj6MD8sErygQQ5wi1W9smEsun1mxq5VuGt1dzh5Bws",
  "key12": "35Xya3dg7wzNVr6qKLuve6oGmxbx323ANe55Tgw1XdDu3cyyiSZgjQMoQU1F2WUUngSTsqxgG6NGoxqegEYubxLF",
  "key13": "4kNP6nUjGZGNdp99EKxJH6JhtJhZZL16ucA6DvXbVXUTqvGWf6DhAcsifsmec2rf8pKTNvPZ9Z3CEDUQy3EZdVr6",
  "key14": "5P1vpnWhqKzJXmrkQGJjmiMnmZ8SjoT6eL16hS79zpk9FQi6fYaxnuM9MHtYmzaeHaVt4mdYZCZiSdkiQZSXwEYm",
  "key15": "55Lf7H9QxTRmQaYr7GJThYvuydpFufed9aa4WuuMhxdMAHsrLT4PfNELXYtk1o6ioaHosRnANSeDypM4sPZFYWE9",
  "key16": "599AUk3zQUf1s2dmGMjtF2piYSE9BrSGpKT4nhRQb2JhNeQry22vBhoqh1qLkQno7i8VaHCoGjfE6XxkuoS6gM9T",
  "key17": "goB7zWY9fxJStmbfkNxPvSfSScBPA5cxae6xkqtADUajXWBgHCckqMyVoHQ2c7mGHt6XFHDL32ro5T2TTuHjTzN",
  "key18": "5iNFRZ5BYYr56gPPUTLWbjXDP3j9UGzfHndwbJmyJTQzLfzyQtoGeqdEVik8zTrEc4DgxwUyEJxVLtR3TCZZaJsk",
  "key19": "3rGW7jc2iu7Ds2zywUUyXcVt8T72JQc7j48JhXWMvNk7uSgg7TcsTmNU5Lj4qiqyDGnJbtfw4xEUUZZJZNhr4Yem",
  "key20": "cEGbR5FjhTUh2RigN88KBQnVQrNz54Hyvr9pLVpHeeT8oAGp7TQ32uxo1AnTTBCK32ERVSBfpwVuyCV76AB4NiD",
  "key21": "2LFHEE5S3tVPBNCjGyeAZbFSJQoZf7pByKUsRc8uNiEkdFDm9zKmcLZesk9Er5maSSHrYy6aLLCSvw5cDQGhkHTU",
  "key22": "xLzxYg5wQbaDXgMY7xmBPKMr94r1SsDGgQevTMiUkKqMbUn5wiVE66C1iwRdkHfrZzH4xRKj3eFGskWdMUKeQi6",
  "key23": "5XVxvwjc6QG5dViuBnQNFGxQDZf7je3xt3E2M88cjpPRviJCsgxaY1gMXk4t73EtRNcgL2dF824VnFkWDWJnRYNN",
  "key24": "vnJodBgjfqm2wvyeGAsWBXsjBpXKaabCB99g2ZmzVdriEb4yNMURGAJYbDF7CLEvaSEQoG3UZvRqFKprUFJ4Uc4",
  "key25": "3Q4gRJvXRgHyKHT5QhTPmy2PkbPcDh2ssPjpHPffQdaE1vap8TYXpmcRkkSUs3Wk6EGTxgfn7GJKcj5Eiaa4Pq6S",
  "key26": "4uzNzgPuYSjd8S3bXtFSyrRLHDwf2ofA7g9cxvSrX9g73rksBAmw375cQWeJHvcoYojEEP1KoJaWMxxqq6HCCGGw",
  "key27": "4Co1uMGoNc2fw6Jji36pn2h8KS1a5mbiL7RE26KKKQp8faVfpzBu98ybFD2MpRdKGyComBJjKyiKa6YRDnw1wBFM",
  "key28": "4WYRMAWb2BXswBQKutMfYvFrqKXjAoR6o4WGiLdXLGUT7yb2XhGsmacRmSkX2Pa9trzLtZqxtqqsGfTCAEWEnDXF",
  "key29": "2fDrJpSGjQUTAXmWrpRHPi3KYEXvb5fizK9tFhnXkDucHpfxLDaKFvbxGjtFJWWTHCKQDXqTTt2pErhNMM8z35LW",
  "key30": "28KqxCSmphQxDD5K3fzVUMK9Khq6DyZN6X7Kq29pUsix62CQahBY4RxNx23EBqAH4ThVkTtKboBMPfMKQMn6eKpZ",
  "key31": "3QJueA1MzELzD8rnvEpeDGKaSRuSYJgL91fep1sLH3wtiZhZGcPbpNfnPVGFdmCN8j7FPDuG4zmfofmjqyiXjQmq",
  "key32": "5cbu72wSNMyJfSsrB14rqoTstiyLPJh6eJXdncWDhs6ACeDkAFFE6cy59Udsmos9W7FnwYfLWYiXuh6deBHyirEb",
  "key33": "2khTdkXS4pff6aPDahTuGgxBuwc9ViRLu2Y4jzEDC4dwYtSCVWH9P1M9qpW6azcsMV75ejREBYHWVd3BX9rtLY1g",
  "key34": "9NDwrUmtaRVnBixvqUC3MtBNia7HtVHonzda7bCGAqafMkVR92mvfAYU1kCoNfpL87ZsUyKLc4Ra6ZUtrJDXuFc",
  "key35": "4WMbhFQ5Kto2v5yi2kAGsrHx16mnvRg7B8rMRoFiDiQ6dGP1a8VHv4ptH2Tfc6HVhibDnwSaS1THx8ySDRzURn7C",
  "key36": "3DDiyCwytU1ACCXEZTwLVLqBrMWJJVgRWQJ6P9rDCqYtU8BZp7cXPuQPL546n5ViEFQKXGKsMHRD4Ku4L3JjqRoN"
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
