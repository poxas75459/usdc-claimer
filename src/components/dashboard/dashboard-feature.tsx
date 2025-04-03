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
    "QKP3grgZHYeijKAL2o1knxNq6MUQxXKpqDHAwb6fWxgyCkWe5cKAHcQev3o6UzePSguc5agP9RtHwfCmpw13jnN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wVShFBSvCA35oovUqTHsgQiYg3eBjmxApax4piVySuwrqZffiFCDUT7o33q99bKMt1JoDEZBmEBtMJvqcYtAhH4",
  "key1": "4HqsCEnXjzJjBfUoZB2iNmT9SYmptGBRYovfgkrACXkbZRzeUDzCNtnVVs4vStthDzB694usj7o86ezeFXQNkDbw",
  "key2": "4sHmo1wqvuHDHyvBDfkBXQ64bF3yhAgGKwaTcBGhQ7UMpNM6emxVFMHr7Vy8pVsBqyp1kzSPUDESq3PBn2AGfm8n",
  "key3": "5JeAQXzdLkCGW6FL22GJ4m1QEhRRf9Fp1Ex4VXSpPDUwSR9ofdMyCZygGSG5MWYqtpqhDYWG6BpNT1RezxmfUi9J",
  "key4": "56Ub7zjmzjMBSbYTbm1Atnn8DeG3dZMFj5Y2jZFiZJpoRcCikfTq4pReHJc83Gh2tHeQfQag9Btx879d94Ja3gdm",
  "key5": "2GruxxAgK2JCGigze4nMprAaZd1piYW8kQ2KrUfbchiUfBdL1NJG5yLGmLPmApszyq5JfgkuHebCMTsLoqezUGFn",
  "key6": "TBnV8dosaE5b8YZjb713sXruM3v5JqFoqbLxYkgahZ86Chzrx9vAKWsUU13dCNTMsbtusHSJ97k4ATNYpuiaWsq",
  "key7": "28pipJcuz4Dk4WJxotKniP9uU1HNyamWCELSRpqgaRYLysf5esHf9XBFWnpFKazMYA9J6ADaonT791Tn9jHQK5wn",
  "key8": "5qGmGiKRvLoYZwCwVPo4tn5nxdH3j8keWujmBK1xk2zaaUA1sugPJUZrNDAPFsTPJ1oqLgJT4TMx89dT7RroGtSd",
  "key9": "2bqfT61gPi497tZKqgwDL8UHUJuDcwRS1uCMeiWgbbQDaX44CEkM13RuAvoRBqoRasaqA6gdXHfFYjKG6hHo4d3T",
  "key10": "2vMEMVW81BrN2jEUygjgxFv6msvdr1XR3BtHkYZmHx55qdXNCHazuooUvq2PB38uiRVxxuboRhcz9r3yzjDxhKou",
  "key11": "55dvH43sjkcWS9HS8kdRk91CCcTYvoKEzbjQzbXmdxnznPrDUY55psjNTgawEnrx7eTbJ5JrcUQWLBmzdSWc4PhC",
  "key12": "3WEk5saNcewEpAY315YAv443Vc6h934CRQRyi5qMJs7aUuwqKUR8WwP6618zosq9zcK7Jps6J4giPYZ8Wf6dCWtg",
  "key13": "nu9kxKwZmxSSkg6od1KBUwRwvjEMKXP7ncHKfeSh6K3fRBRpydoam4wmf3aZXajgVtzJHkQG3cobDqEd8nP6KmR",
  "key14": "2ZXieiSxENvvrec3UYpJjmapUP3DaSm9Px1dpvBLXEJw4CgoHMydsf5CBefvXD64eSbSJMmXcZwUy57usUsLrzwy",
  "key15": "2hRyo2gbTezxQFCdk4X9K6oHxWxJLCQ2UvK3JceBEM4cszUzTvL7BTiiviPeE4rSpy9d5uahzUEmvMdPaDgi4wQw",
  "key16": "3VQBAKBVJ6LdjSZ7TzBxZ9YczKmHu8WUFV6pATVMMh2T13yp2jbDkipCpQR7nvc55TFAQpFqXUCbnMGiqq74G6dR",
  "key17": "4DLdPmoX6LJg8qjUPd2Pk5kkbTsjQkPjMEUdBEyCaT13S6t6WETsoL6yw9Si1cPLiTh4NK1bymaTALL5g6TTip1H",
  "key18": "GyrPkfR6SNMJRz2ZoytAU7BAFAqtim2Kta89HsLHohspuX5Mw3LBj1RCMtvjPRcdd9htPYAZ17dC6WVka17nqqn",
  "key19": "4U71pmRrLBN68VHaNXqfVZv3dxQJrUJN3u7pStn2uURjbsUvaCAijMBb8a3r2F5Fph5jzDTmYJgGmBnEZJP1jFMt",
  "key20": "3KtgGTqbgkQXzMWc8i5EU9TAKrPoDkN7tnNkb7xrGyi3LCqTJSxDM8nqid43sA9fZweQFHMFg1eAW5WvnEppSNsu",
  "key21": "5Rp91G16FJjKwSA3WN7k1BzfTLiqzegjwNAch2bYpmZE5JvudPc1JsTRbCFePbCJDAdEzRMMddgju5X7UCn8SNvz",
  "key22": "4eHRaBtiuisu5AsHus2Tw4oK4kGCXP2h1dxBpYDV1nDnDdSGbTzJRuTBHsDPWWjeMDGC8r2eUWY9h7BVpnvFtf1g",
  "key23": "2FD7XUL24tWEN6cvbxfkDzuRzWU3xnsVAYnGHB9xhUAbTFwxfF1xh6iYAKEw9GQxhTS7GFxaAMVoThvdCDeHkBdZ",
  "key24": "2EoNj5Xz2PaTF3W3Lw4pZF45yLrfqjAtuzSwmaXPPLyg3stJMX9Era4t5Z63BmtZ62xbPH6pUvx6rJbygs4Es1H7",
  "key25": "4SuQYSxJUUrzuNsX9Xs1fuJiaQ1rgF1ArbocHr7ZRzmqQUd8spEZHREkPAbnPtskLmKEyiFTtri7YQVucjuaeqq9",
  "key26": "3PG3qJjver7pCoU75NZsubNf5GPQc5XAE52JbqgcBAtsLFNBDc1RsqdKHkQbsL9fDA3463BSiJdC2R5LRzdhjJtF",
  "key27": "35KG1UQBSkMxYAuzofYDsNpD4L2CJCqBKB8NacftzobK6NQL6Dp4n4HH3zVfz5rYLserk3JqiZ7izP7xJNYy9Aa7",
  "key28": "4hNt5AWqeKetzGTcSjCuHkDLAYDCxdNui1ZCPzhVcGg1Na95BTYtBjRJzSuow8ZNAWDkztR96ka537HPTdNmPLH4",
  "key29": "4GMXryF25jAi3H3dRJQJusFiQH8XhpgGtLjGaQeNWXFLSSP3xGqar4frfqgQhZj3wKsFyAk1aqs918NRuzkFRFNF",
  "key30": "4s4uWoEdWXZ4oFccA8KGKcnqkaP97aGJi73avrz9vqTcVAfBSTBk5dXHcyCLqAaC6RpFV13qf99nCf7JwSWi6rcN",
  "key31": "3Maz2pGWXGrs36CTZZGEYC4WaV1rK6AqKfJtEWAK3HCECkZvypkKugEK3f2DjDSDdUTNay7GGZGoVw94TnS2DF3B",
  "key32": "2UCJFHo3stwfacChDfRARD3LYSPrHo7Dor4CSFDmUDFXF4ztm7CXLZysBFdDxp4Y3djWpPYam5K8KHWqPsynzC86",
  "key33": "3TooUkrdPyNs9jEvEDUcN5qxzYKEDNF63Qd8QnHdM3zfHchiod6WHuowMbgGSCpRfpwSWxRsbf1D6A6ZH2DCaWHY",
  "key34": "4wHChhoJWA711tEXX3Y1QsaXdesrsFMNmG2fhTh9t25zUkmDjEqT8cCo9vDPQSQn98dcWFoRmbKbYJ3y57RkK4av",
  "key35": "5QdH7CrRzLhkrvapm8s1pLws7bRWgp1Lkv56pexR2AWVVfThFjsSrskbNSrn7TEiEs7D2HziMBEGKRPXVbbkb9tk",
  "key36": "29p68bAaw27rJ4a7EqkQwjbBjC323PyeiSrQFUpHKDeXHJqgVjmVPbKCZLuD3BExPdsgvQ59KbSMAKvW87JXH9Um",
  "key37": "5PgcANZgY8X224ifdBYXFvV57TGHwKfCrZeMiXWRHZQfNV5GN6cEHUyA4QcPNH4oKQt2LC1nHEvRvZvWmXLqNJXQ",
  "key38": "2iSfWJGZNkUN71acKWpyvj2BT1DYFkwsHUxiUSUm2ciDifCPodGX65nJscbVRk6PbPQv79JCc73ePLq3atByWgFy",
  "key39": "4UwivPJvxpaPgErYqnCZj2JXWs7nHH7JmD8SETQ6tvRhJ8i3RbULUcnjS7eLpHF6HxD23KSZtZMqboBgSxRbhqiF",
  "key40": "4WrwiNBZ4UR2TfZuv6q8MZfuEaMhR34tddT3i2K2WX4AhVB6YY3pW6SARTbZwhFfgNbqPPCRvPEA52DCBPqTtv3e",
  "key41": "4Av62DzN28PhLZokgpsQPC5ExzKKczMUrM1z3LtYqvpgJutNhF1o5uMumGMKBBBmyEsG9hMMK8b2TAwEDpoz3C4S",
  "key42": "2jii7GDKMCM7UhqpWvzUzdBhbZFH8j91cA3Dzw94oV1Qc2CGXdFwLL4wqSkdbKWWFA5j2ig1mHmGoaNq4TSU5mcT"
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
