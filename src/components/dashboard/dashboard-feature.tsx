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
    "quhFivMi74cQMnurStwFTg6p6vNp6xfcPnZic5KXmDCKbv9GvLBDVEX22rT3NSQHX7qGRFPcyGauvdgSMCYyxH2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8Vk2X4KQwDuWnfbz88RV6QG3yw5YfBKSBo8PwXcRapDonETssyp9VATSPvdNzNU2kVvutWCisisXtGoFc5iAMj6",
  "key1": "NeoMqjU85tnY2FnMvedHC9wJFFY6hZeEMNHCpz5kkN7P6ppo8PSheF7TijTnhmseD8n7k5MLQWAL2Xn4DKTybYR",
  "key2": "4trAMD1vowUXVR51qgzBusewsYYZKBxu7McyS871jbJrBeYZtAnHgKDciq936WTgGAbppk522Qke2AwwSeeVdezx",
  "key3": "2LLnCJ61jL292MGrpEVxYSbvoMYRpbitLw5V6myKBgjj29hjfB2sFBzN2P2tFiuoWU5MGtqe92XwwRcJLdTZtxa5",
  "key4": "5WcBqUmnKHUf6igHPH49QugixbFEMJt6k7aAwyTV7nPdvLseVXQHP8YQgXqfYQdaLT14dZ2tQeyXWMCwf3cNL8BW",
  "key5": "2WoNwPeaeMZmJraQNSRRKMzeFKcGKTvYYZWQGqJBikoYNwbHr5mngf4Tn6b1TMnwu8oGXSmfh3pL9sCETiZ926xm",
  "key6": "4kfBHz6vx4tHkj4ooPuCbKZk4UQ6VHaaCpJHPGam4u3bqxRyd3KjyjJCPvSKY8H8gqCqrkWKTvksLv5ZL7gHPD1Y",
  "key7": "2xpCWdF1hTfZmSypb92Fv6F1XJ4dm7kDTSr2F9XmFKKP9Wf2A5vQVfjshqEFf7oNuBWMaatSXuYXrVpagPwwFwuo",
  "key8": "i7umD6Pjt4jfebsdu7xRwykXHRrqQRbhEWUnkXmLQcJaDHFn2M5oxLvRrRc6ikJTMFw9iV5csu5bxcxV5RLAiGi",
  "key9": "31UrB8MHre5ripo96W1fa7yXaVg3CyDxpcC555Kqy1TbWFvgbBL5YzubLvByt1QL7satRhyZqYMjm7ULqTu2MXjq",
  "key10": "2pMsBaLp3tkg4SimUarbV6jfph8EUBb2NcE9UTvr1nZRAWVv6fft8SPEpo3tgZnLyjKs9gdyp5kuxnREVqGAHoQE",
  "key11": "5KZZZy1SyyCdXdY6oH1UtxJuM7K1yqmsUkJmyti9WWzKYjtiBbU73CgvhZFhySPCLEHDHNGuANJCPF6gpNuZFbnm",
  "key12": "4RboDp3qNqHV324sLVX3b4Cm4mWfxDnk6dB82JD1Hz1RbXTngJpgcTf6tGy1nq2HP62xnTEgmng5XmqRATUYSZ4m",
  "key13": "ZPoMqhAZ4QnxexTH6tLiaqY1TkFDjK5mDHBnvNQQp7qojz5nimBY1ErpSN73MMGqWkDCHc9pHVEqFP1Vhz2yYxP",
  "key14": "4y55XGpqaTkfKZfH8BBmQQvdeW4DnTAsbHeo81kNZ1CnSDLwmdfGBjUqpnon7mBESgZ9fHsj36Gtgu9xAQjLPP8r",
  "key15": "3gJT6GAj8B23e6etSAzJzrxKbgYiwC88fvGSd9kxUMsSMhGvoT46o5vaT7iQTrz3yq2TBqT1cYGNtsvUxk8xUT5j",
  "key16": "5Yi4KTVYjoac6rsuMXNcizEcWNCCo3ZPfNtdxfYohL5nofz5LQDBhZcwh9bTXWQJTahXKEwLTgXHoJcxXegWmpMg",
  "key17": "5erV6PFudxQZvJKVtG1tty4UvqeW57v2wHdWcvjtvekj83H4X6oJc7nXWUxBPg59q2rpyDbLbuqCPzKi1naWmjCh",
  "key18": "5SUrNqW5YMs4DgcCxiQ1juUj3UCyYJU299vLt5zxnX4rzdiy4jVhPtsra4v2SdKVJT6VWxFFnXtxvFMfupZcM9pp",
  "key19": "8UdM8vRGBmngRbKkXiJ2hMGgoc4bZquTJMajjqxQ2R8jeLFC2n71xKyCcMxWyhnEtXZZF1eY1GT6d584b8Ke1s4",
  "key20": "5BhrN5orVtciqeUrHApJ31E3WiTuhnGWVo5CBxGnEV1prRuUnSTLYxLzQjMQXf9k2JBu9LM7MuGcrZBbhSaVJUnH",
  "key21": "58it68No1wnk4gzcRp8R7JjZ1NjJaU86apRS6MrBu3V9fAyXDNiECUXhZTG2aRWUMDVm9jxkFWazfijaPhdYos2a",
  "key22": "3hVerRJu1agjqqXMPVCC8C1WEJ5CDJ6A2ytHBJZHsveNjTsYCYsY5zY1h9N5Pmf7ZYXxKjrAphy68A2jehHDzLUp",
  "key23": "2EQBzS2o65HAm5cdDtZ87ADC4d8ngfX8fSnEV93h6jF6coJGQrb9mX3XPgiamtn72cgoWiowkboKXZoJ1WR6z3D4",
  "key24": "2h6u62zubnk6SpvXnVHyz9L2spfZ4BrGK8YMB5uS1jmPuG4jx2oRoXMgq7iTEBQhKrcQxa7sPq92mvFVAzgCwCJa",
  "key25": "g3unghYx3q4AYHab9Xdh7Jd54ABSzcKqkk9SUebZNT4aYvAiPVkvgNtBxzcPDubhUk5mzshb9WfCdAug3r3zxxG",
  "key26": "3VUdjmPDFD14bBhSK18bxUEQXCyAcRkoNcNF9cUJj4PSg7JnvasxzsXXQiUvXiGPCEGNtg97sci5t7dkb8NDskZj",
  "key27": "3cWyRu5jDssFoxZKBAQAHEBs8idVCq235tHynF9GsEWZzq5gjHmbs6ogtVqe7YDSjhcyMVLLcgxu1MEPpZRCubV5",
  "key28": "pJKiAhCdisztDVn31R3iEwaxnBNCJLncCgH9R93xJnCF973UktEK3Bmbu16cftZmmSNP62s3GuNGXQuA6XMxaoV",
  "key29": "3ziJAqExmaxgq6xf3PFxD8oN1FUoBVbZvGGfEaFwMiBAeY14A2b3psecb2U65V6fkcwUvG4vvS5V4iEDXPDG7F5u",
  "key30": "49B5Q3oK97pwy8bkQ2CxKPui45UCvSEWpDgxxZP5RmWxD44u3otL1thU3HAXBKTZCKwW4AEkBiLmSMZZAMCf5ozH",
  "key31": "4WxVr2Xda4Awofx1AHAnQf46oJTmRaw9hKaz27qV28qiVh4x9cuM66tXxdvK8JkZqrF9SYLZqyGD4hCDxKhow5gj",
  "key32": "rSCdMa294tckrJbNwHwpqWnzbCv5reEuXv3QWKcLfJfHSxE1FRiLXcdvvhTKEo9TTD8nQ1wA6FVuPYYrp5mwmDf",
  "key33": "2hRfrLBfru9ByiXeKQ9XN1SrdzMmCNCBeP4wJ63DkfEAAaP2NTw1TrtdoFbbCXerCnju1fotQqcwsJDXrxPK2udv",
  "key34": "2StDvX44y2dht9yDpokHdNfVPT5EegypEMQt7G2UL2RHKaHwSgB46TxxeLHqQj82DKQxa7FWXXMiHLN4Q4qHWZ8A",
  "key35": "4JJMJPKMPJdh5Mkr9TrpGGx1QV5bVKNTfM4qMCdcA7Zx14KSeJHJs6mKqYKxwzao8RxyWNVTfRk3phN2L4NwEEiG",
  "key36": "23rWEgTANEz4qdGGgJYFVCrwUJRAZZeURRSEyMVrcJ7AZYazAn5boiDbZpzuPTazJQ8g85SS8p4J3NC1VeANZopo"
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
