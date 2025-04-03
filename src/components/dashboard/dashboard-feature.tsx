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
    "54jt7WANXu9n4Agcvj7wFUWferQPXe2AUihkyLniPzkpVydhGAAAHNszADGkX46Edx2qgpxbXNaW77yfrnzVcnwX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RKLKo4JsjhpXHaGgUYfMfwNCTLbRA7TGptb1ixQ8ELokPXp3VdwDweuhBg7fCPXKJNxjPAzBwC4YyCULoTw2GwH",
  "key1": "4T3xn8sSKPWiP2xxbTxXezzRTCmKPxGZX1zpMTbmsJGEL5aPT6yJxRiWMzuzbATjEEQCGUCqnfZ4nb93ps8XcKe5",
  "key2": "618uztRHqyuL2Upq1Cz3jJujP2TryLuZxxjWJaSbAgH535vhFgBPJsqfa4hhysuuciakF2B63pUtXKaqhdV18F9A",
  "key3": "3iFgMHRi4Nwq8LbBLtwXkKKwJkferBRiW8bjA6pv8FoBc4TkeC4ogFukKgbjUKocp1bPHS3P51W3tA3JNTx7uEq",
  "key4": "2NTQaehZKy8rK7mUsk92QsQ6JEPhWSnq7vcBrocEGxi6gXhLFbzz1DKJ19nK3xAVaFCf1NDgnYrSFnMk1Ry1un6b",
  "key5": "3pfXEpdHS6CnyMFq9DLyxEcR32Xb57SkEsSdi2M8nEXmKG7VCpPTCtrqRskzJreaCzERjEVKeiJUWZMMq5YpWApU",
  "key6": "Wa95Nhy1BgA7NeP8Zrf9nZcqUkDuoBS9sjmGgB4whCBFmLsiPuzGNSmdjin9mef5cTq2GB8FxFqv6Yfq3q93QRt",
  "key7": "27ACVuoJpL2r5qK4Tmmvfdju1upPkSPZ9iw6mz3nih8AH9RokSYxg7VQshLyhNP6ZHAcwWiJ7FvbCEHujLCgoi2A",
  "key8": "uL6voDELYjs9e5fAseyE1YBaMPjWDtrjXwNGznfoknhyd2cDoLHYGo2VChKb5hBjwPigYoFUcw2ZAzVTR4gV8Nz",
  "key9": "5TfN7uqgzdeXxAXhzom5GH2AkfXwKAdyoe9cHFJyeaWFJbYqPF8dMmuoN8NHNjsoHG6qqT2UYW1CU1SRd56bCjR8",
  "key10": "5L579TGhcPjfwrxnJUav7RBZydY9PGjLPSTFen71MTkGuyDbJtoMbByBLERXz8HwMdAyvLvzFG11a3PUQfoEtoK4",
  "key11": "fsh7Wye1FNiWH3YwQ6TFrfq3Eby5aufuTfEH7QeBSe4DmsTGJ2JxkBrD3dTx1ZVHs3tcdGH8j2L7c1aqLWwKMru",
  "key12": "2SduVGtBLajkDU581ncAUf7FSNV8SokZcNdb4yVs92WhoXpyWdpthacye86PSB9Z2Kp5WYnVTJ47rAXM6x5j6dk6",
  "key13": "2ncPQkaXFpSTtSHEFkiaLQVEWWLKqvBHt6BTA4xkDgJSVTU6w1LCqVMUwL4ZUSZQxrqSoefZfUp5dnx85WH5W4fi",
  "key14": "4xYEfRNT6f4dmVwmKZ6yWPsUetMqmEmRFrkRkeoWwkMdzXPZbhDs1aBa8MmEMg3Vbj3UWBXos1G2avL4Ujt4T6jE",
  "key15": "48oEs7HUrdBKc4xSNteYTeeErUjLqVuQ85w1YpHGExmETQCBH57kStRNUQZkrdnr9vPXLuTa2Duh1gsUm1DHAH53",
  "key16": "5SkmGK3eSCw6pBRxrn3La1Ccmt4rG65xvn5hhB9Fbk5j5F2UjpqPSKad8W3hH4VPJvqfP2sES9PmdtQ6Gx85efHA",
  "key17": "2DS5B1kk8ufYmv5Nza4CVuVWou6KF6MHdFHgrYmovrbRz3KYLwz2GaZng7mMYeUQodcEkgURi8hSkXAcnR65wtT2",
  "key18": "3T9gmcA3zrURCfDM9vsmd7y5J6XYoMYVWkD7rSTRG9XqVPu7qHm2qwgtCPg7D6xB9hpZAtgjFwaDYsuk4YG84J2",
  "key19": "BSu8GCd8M5hqf3dN1tSR71dnW3YaSGqZ2U3dy9ev9Y5W6DnwxD6xAvwBaURKXFcaUSo9JLGCodeHgTnMunfbdNP",
  "key20": "dDzr19g5M74eDZ7Bjd5YiceG5GZBiTt3JXmPfYVoyw2JVk7SGvnVnzdLFueLd3cz19NRzEWTQ7KBa73bh9tdZkn",
  "key21": "uxPcbQCrm8mi9h1WtgCqHAmpd8ikNTCob4BwHWddPvid2m9udPnQMvYoE29uTxLKb452g1MiZ9U82okEBNT6oTq",
  "key22": "2impWCLzboJQTfcUKJ2GrQNdjbhNvuhP1xeFQwn5vMsoojQZghiRerwhMGYwzKv66tPwURAie6HiKkDpNQuzpzeZ",
  "key23": "5Pb7QnpcCSNc9zgJZZa2k9DXSVqBNQ1uxmtWnQYqayrkWt3Wn4oUTX5FcSg4npJUzZLcxEKCCj3S3EHYs355D7W3",
  "key24": "Xfgr5hwokXe9cGkzbV6jcQfms4gnwJdHRdt5oZJDx5o3jszwPTJkFpeUTmjyjinQpNwigjC7ryUh5q7JaFSUo16",
  "key25": "23pBookfw9S4SJhWB3voapfbcwKDCi1gX6j3L2h9drQP4Pk8hCgZfoArNb5xWvmB5RGuJ71X1XmRovLxBU1KuSed",
  "key26": "39E73CReZyArDTHVcTHjL14m2RwHfS1FugsTMxTDie5c8t2Y2im1jpVpVdkMJ6APUzL1tqWeESyFMrgJTCGCY1RT",
  "key27": "xw5eWertdYTpFMxKYHJrKtPuaPhr3PwKuAMdJjnJaj7oVD5TdDo7FWvnDYpUzZNpyzmtKNwJNx9QpaNfe4XHWug",
  "key28": "VSzr3UbjiQGZTR1ZY3WyhcAmamBhs1MwZQLL3mDAvU8W2X9nDavH6f779yL6zzWCUYNcJU6nbjjeLwH2CrnvDfs",
  "key29": "3UX7U6N8Nk1nasDPhRNQpmzU5NT7dMaf3xX5WkfpjyfcwQC4nxMaBfV5t11XC1S1h8bZ4rR7XmiN7mJHcGSfWxeq",
  "key30": "1uWmMoTq3fQjJ6vA6s1z7PsYKwby8sr3cuPMAQdEaFyecWjuJqy8iNRw3Y94Et8cRAyE53pw5VeAUNG9RH1NnMZ",
  "key31": "2DRVWsyK76Zz4z3amFeMRSu4jL8Cd2b5XkDhpQwQkQUhwLoa3EJYhSBsWe9C34WPpMpT7Wnm8vhKoeZXPUFobb2U",
  "key32": "2mhq6DTcVeYNp7tdPo5GfJLRYyq2axoFJCMkG7su9SAp3Nks3Dric2ia9nEDFiFE9STevRdsyenySgkvE6ccC7wH",
  "key33": "2nLRFjdHqQ3yn9iRNL4oBi2Uh5SpMBorwe7etgcikJ7hZBZ1cmAQmxdApgEbDrC4JPV4LuVWRcKEb15YSPCoBg7",
  "key34": "2J9H1RGVJnSihUNSD1z2yZt1FT6v7SAHmLSMvtvFcS67vAXy73rEQU28tgtEJkEhSHRKqFhqFy8qFcrxZSCL6eMv"
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
