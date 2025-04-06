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
    "65HqqqZ9j8wTzWtaJ7w2HNG6ezazxYk6NKKu2NbTz34yycSrDEvbKH4Y8aYVVsY9r1Kxc5X2GmQ8XgypVfN61rTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XjQazABKsu2igdEhSM7HFicLDaxZrMb2pFsaZCD5AyUJymiUeZ9bLnqxnbd9a1yF1EFW6iWC8757XmqSB8vv3kf",
  "key1": "5CDkKfhuvVp5GK8i8SUfPpNvvYQWbYBd1kAsrXH8vZHhwsC4F3atVfLGkmshRPy4ac9MY7dcm34K6Lq3aQ8rCffV",
  "key2": "PdqaYtpeQxEyybJM7pbXahrnhAK5bfchzCXQBC6AfxYwkoJzCGuAhkGdme8AnxgMKkWR6BjARx4jPNpaTRCmjuP",
  "key3": "5eVVbS4FvyK6EtJ4DooiSrVteUyyUz9t2ZuvqozDPstxoubimtvb5uzzw2CPiYvmAoUwnuPVNRZ8cznaTXmABRnK",
  "key4": "2KDtvuWAEG9NqMimJMZCwoz26hqAfhxqXdcLtKBSy3WNURDnQdkfzc8GvaML76w7MRkKwgiaQenrysEfRXFwXHcc",
  "key5": "5QhrNiArGntBMHSYkgDzZii69SAgRnsaQaiRhhMY3Dbn7JbVnQeNA1T3tgPCbrWrUEdCjWWik4tLvGms7arGwvoM",
  "key6": "4wt8XbhXhvfuY6FvBD2m7VSoBft71AVbLKqbYBaiShAjyCRDzNmq9EcT7Gvor8wNXJ1x5ryjm7Zvuw1Hs3v5Ty4B",
  "key7": "2y7G1C1XTkuw8H3wtucF6CqQ1GkxNgMa1YHRofNvh4zRFEXwNDs9RRQcYSaUizYY83xAaUYP8kQas5cZEWWnPjxf",
  "key8": "38Pdez1Rhs47Cw6mP4fxTsxm7F4HyEuNSJhyhBdXwejSykJsF4CSTq3P32kk66r68L9Ekm2TKrwVxRDozvwaBiN4",
  "key9": "5X1C1s9iv56xhxtZ5jofj8vePuSzHsE94CayXVwZQMhNDKLLq6XuzwxpbFfUdPm8iNkyEq9nkbTmCmMDv9KPcGST",
  "key10": "3RByWHKQaTs24cpd73gakNh7d3pyPoLDa4nA1vR6JBUgSNrXsEcnvQUpb5srYyH3W2NmbhorMnR5vGgeu8C9CjV5",
  "key11": "3avpSSodrU1gywvGgLk9Biyzb1ZaJQhPP4ZEUJ2M567FviHaHv4UDsCbf9ZCCYADfXGitVrzn6VM28Uyf5fwNFVr",
  "key12": "3Xg1hGrALv3sfEs1bnQCk9U9idALJSjq1sMP92GzoMGM362RmpanwbtCshnT8drfonkCGg2FtqtEuS55GWXYDSaX",
  "key13": "4jXCa8phDh3RgStqaJhvv8FLjdg38FQMhVgSDiGror8DBd2dxSRm94WN9P8jXCHdBDMDUnxQbJzqcN6FRYiTPorv",
  "key14": "2MPKX3BzegJCeyJ54YJCtRd4c8waNPkjUTdNZp2jp3ZpexZUso1VtiwJ9hUW5QKxdbUCS3vzeMcogr4t9VdMpLbg",
  "key15": "4kTN6Q55JnN3HEWZpPk5WeLeT9bgHfgJu3hRcncvXQ74JUCH7qdbQcy7Umc1huzZ5RuArBgPcYZRrUedshftRkgv",
  "key16": "eUUDBHVjtz6w9qv7qKVFP59ENsJM3CTLfnYej8p4MZydFJHs5YfNh8EsmUWteUuyqXu6Hi1RD3irrXuHAH6dxKi",
  "key17": "2Sps2TkvqQ4DVb5Kuei8Pi5rnTBc9Ht7jJrGjNxdNkzrRjMEvKhwxrjp8Hpw883gZo3ZMni6Zzsa8bWKQ1wu3osJ",
  "key18": "5mS6PvLAS44TyxhCbJ5g3xojECxEy4RWjt6m6NRr74kDUxr6jVCmmbqswwVkKGh6ZCUpovUtKJzYvpgsVeUzuT55",
  "key19": "4e9Q7p3fNiLNyA1Ls1gtUsmqYdj2feo1JJUPtZGdtssqk5dssnuF715VrZ8CcparPaACtsAen3Ko6whJoPx3AGB4",
  "key20": "4o8ddfhPrzPRgyTE5PVWwZNdSLXSvZRuUVxPfc7v8Lv9AFtH7WsZWMkjmVPFnQQpLzAmqG9JzPwmz59sSxtQzazk",
  "key21": "8SQx8hdakn7z77V4aDTaqCgFwH4CoadhrY4fW74c3c4SC2yFpLjpnwB28R9KHeDMSQmnYq22ZrkTkkarcwcmaBR",
  "key22": "4AwXLnwHZUgRGw7Mpoy2EdKwDHae9jCsieTnDEGFwLmWR26zys163CWRFgL1QwMHpWDy8Tood1Nk9Mxq6xU3mwcm",
  "key23": "32exFyadif6dLR4X7FSK2okB1cjrH14hUbbJ1bk2E4TejKPtfb6KENULPRRYmYCKEHsRJYC3aJkRUq1Af8Y6gWhY",
  "key24": "44PXSPUvS9z1bTvBPEcMRNVv7UFardQrcnXBdMcnLHnSrfULrLfpFSvVQiaYes6ascJcoAFu6Xiz51J4BwtHSie8",
  "key25": "5p8KGbkTMaS9bGfoeLj1oHRayJBikvN4iRLd5FpM9ZeTs67hjVs2bTeVCfJs8f6MSuZHV9uDS3E6p4KcuwWC2XTH",
  "key26": "4YkZtdXjQaHf1Hz54D9TaBMp5RGM7HxqUgdUdepqs4SSMVoBYToMbsDFwgcZDE5L6dXuLtjuEevYNtk7RtscXpfv",
  "key27": "3KFppRFj5iEP7cW7VokhpjPS637W1WwMwsiQKu88dG1c7kCE3bABoaXq77TJZswidWysXhjV2Ksh94cbBE5Zvb9g",
  "key28": "4sYCcnqxsUS8WzbNSy6bRZbeYPushDeG9bwapLrcqWtSNWZxREpV7j9xNcrkygpuzfh2mkydJGfxhUtXaRwyHnZ8",
  "key29": "YcxVZs7o9r98rS1G3EKVWLHEMdkUYZ4UQworAr5RjRrCQ63RKuhJLCCo9BbXS22BXXtLje7AkmRgYcWs1kVm3qj",
  "key30": "2Eck2R9otbZ8gFZazJEmTQafQDbfe92CEKtcXMi6isaJqtixfUPoVR6XUwLAfgCCDwWPWYcEJQ87zQabtgHLzgf7",
  "key31": "VAS5kAoN3eLxAVriDSFVrcwaSqnFUPRWf7hGbqJMDscEtqvRVPZLLLZQGZctpZ9uGozPEYj7NC4xjGydabR3H9i",
  "key32": "4dxfqRRucizr4dxkiFybyCuK8H8aX2v8vLWF2BXVM7xGrVdDG8dmbCffTqkm7yiMpmJqmVX12wKpay477TYQ1dwB",
  "key33": "3nTKeUmWQZGgrpyRm6vDepUSDdnAHdwrfPp51cKsLB36NJDQTGyMkjJeZEM6vLid6VpNaHyNTip2CYQidBLbs22H",
  "key34": "3HuaXwst29694wHx4kT2y9pbfGqtZ2JYj1ABXzQR8N1cfD2dcqdxwa3zGjg66crNBp5iVdSCfRzSUhabanEgdYaM",
  "key35": "5d1Nxe24wC3KfatcDCb2koqeNbHDJGixhZrxeugQXhnfDQMsMWUhvVF2EUGy7jYcfqn9At4r2u1W4oXfZVj6fJL7",
  "key36": "4u4Ak16KnqGy6oykVkU2uthNyQPiedd5waLTEDsAVj4FEELZZmK4yZtB4CkdwnmwmF29NSHGsnoYkDgbL46MjH6K",
  "key37": "5KMZ4jC3kfE7GNVhA8CeDN8bKzgbMfewbhnusmYTmeA45C17URMa5YZUcQQH8EMn2FjviYDST3RRc2XDHZGYsjsH",
  "key38": "2nZYwrBt7mVPatPwwcitX85W3wx1HEfhndHDQT4XSp81yXDgYbVmwecJd1mzDc7hSt2t8nzScG1ke2g8nxUScwDk",
  "key39": "5EaDAACqtZKBU9UczrieC3JMD5MwuAnfKqTh8XqGXwoegYerGpdCpmjw4ZSPU91by7CNQn8xrtFFQn9DqmZcDBhm",
  "key40": "sdzP2dPPNfpaY95wNU9UD6A7ATqDM6crDXsY8rNSaihCxZ6LqKeA7ZTvfoi671igE2Kwh5J2jGTrw8JmMkPvN46",
  "key41": "3J5TFJKaDF9Dnr62aGKzvRDAComdfRvsA53Af2iMMaCR4ZyqL9GGvLaEpE1YYht9d7ZYSDRvq9viFKgAKR7firq6"
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
