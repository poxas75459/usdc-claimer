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
    "2RiHWVBAm5MkhJa2RZMBHpcn2eLA4Eftzo6KtVFRjQrpETw4gmy5h9MyPkCpRHcHr2iz9tu9NJcjYZbvZ8bum4zW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XCTiGCZKgBr2RnScKGqWiUifZ9rHCeHNKzkWhgnbPWe8unbh14vircAhWDhBz6uS8p49MChtbvFbuPQFi2GeYkZ",
  "key1": "5HRwqLWPFESCLrDJyWTd375jA7vHxFhfo7eJnSRkFM7cNGpwniTPTtFXsZUXNrkmS3oxdMaccdfjshAmErZUmadf",
  "key2": "3jh9u4n5Pvi7s6w7ADBB4Y98WKTWPyFvAFGAqJm2S86pQPjvyYidUsQvQYp3TsK8SRwJq5mHrg6ZBz8Yn9phQNGD",
  "key3": "3SsspAVXJZtXWkTbKZneDZQibC1x4GLWnw7TkdCSkS6n1KhmoYK86uMKby8H1e4ndgSDbu41nuW9RbeGKXy51kpo",
  "key4": "2V8P61LbQ88kxEvWcfFRToFXDTvrVdeqSmmB7arpiE5HKiVsQNxSo6o8YrRECbKo8WMaGwSGJFyVeY4UDW5AFGvk",
  "key5": "crkUvMqDmXk4vEGvxe3VxvTYq6DtHPgu4Mi2wyALepAm6XALCYE1bJpLqxFRahGwQRWbcmW5gTQoVEyHdkmQB3f",
  "key6": "5QP9WX82p5wKzcVacMSag4ZeCMcPaF4dUXJtdVTfaZUpxYMy1BntaCxoSqa264ip69aszaAhuj8X4oAyRQ9Fb2Sy",
  "key7": "2AuyyrL6Y57GdXsPAEQh81XVmHi7APkEBvHYZCMNUWE7WCZWXLjHsM9qNeKcVxzYKg76iRGqME1Z1yE5cp4UMXfh",
  "key8": "4TZKWLT24Tc7VrNxBbu9htrBKMQJFpheGSzfEJv8zWbB78p8Njjowk6JytMqfoGbNAh7yGThxJc8unhvpLE77H6T",
  "key9": "3Yoa1zKiECDz2GYFaW9QA8RZ7itsVoaqQw8SRWtELGSerYMQXfrMXu5FVwKpwtreDw4fUD3JfjBBF2NeZMDtdX6H",
  "key10": "5omrJ2xFf85y9VBDzy7ZgcCD72pybiJkaBfMg4urnDkMypx4FANGNdF8udkByZnvw2s8xsL4k4esTmWfCof2jdqw",
  "key11": "4hLigTJsQ2iCvDupfUrLvNi7FPrREZSMHmuA7croqXYbBXy9fgsBccn2aHfXN84TJjKRoeAnMrH78abVgzeJ566P",
  "key12": "2Jhk9emRKGPtm19nL7VMvTafTtS8aS5Pt8HWnYuhKQ26QihL9AWtLCEfL1QkeYfgwnUX28CzRbVDoJYVFYxuteM",
  "key13": "5ZmosVDaTjAoCsDXEnjdpHix4VvVWfpK4WeaZJxRCnGyGJTYTYhRgwMGFWuThedZMTEfE9KrZLTcAvMm5ggZmTty",
  "key14": "5yV3jnBb8b6Evrszvir8qAGDbx2em2Ybkhgt2FWaoJzxJPXQi6qvt9CdVAMyasJ3egHDYXvxDLhFABKvxk3qce7k",
  "key15": "34EvUshzzFXCawEaMG4tejnXpxGHrBs4fE9JYkk3vMrfhsyeAkk8CrbpUBZX4JgupwPXLQ7Caf8g4aKerfyPBvaH",
  "key16": "3naVDcBqhdJwkFGexLFC3svKGYiuzXLp4NuCEa4mJREW6N6HAkDKxxFQk3B1DmZGM7HeABCzdEunThQnMLPeE2zZ",
  "key17": "665HkUKST56KTL5XRRvWn7fshECJS3eSoFj3JxJBkzaG8ZzxFHTDDDaiSjZTpUY5fYD5EvQCggy9HU2DTuodfrRP",
  "key18": "2KUkMU4xA63Rf4x3k2Wxu3EC2nAKiNpZxfBctxz8KTxgBNjxWnydB73nYbsgpBP4PYSRuj7rPYTWrsTUgYbSW81t",
  "key19": "4n7zju62tf5rCxFpB5FinU1gb5A7MVXE8qDfoTaS3EygddszwB3eFfxsUn53ez9NoriPzh4x5csNB41KbBDrivHu",
  "key20": "2bHS822Z6Eyg5HBhaAGv4ZMtK35PbPhCp2RpXPRNSHiWpucZqCZQrHPuakCFPCSqtsuhjFZ2AtmrgTZMKE58qmwp",
  "key21": "463PnsioobJCeiLS6rMy2sBaxFsH6aX7Cpi3uEVNWs1pRenSJbvFqNeGremx9MrFu1nrrnwGnbBqJNqy9azxmh92",
  "key22": "4FuyB9xtYYKoxEh3UruRiHYPkSzwedxVTE5u4nexSM9c8FAdrYnhTrZHLqXXZ9wiXq8SaZVVG7sd46oarkUNDeja",
  "key23": "9K3FsuaG1FwvoS6nuKQTMeSNWki1Qxt7vzqincmfYpX4KNV44kP3v7cj6Wd6TtBFv3zPisyWHufifnYwv4icU7x",
  "key24": "2hQHPPCQH7EabKtx3DyYWyin9Z7iqmf5pzaxUw7JhZFG9eZrShEz9MM627JCeHUUocSERsaxQKKDk5EVNyCV3pej",
  "key25": "2Z5BW9MB19WznCC28QGKxrwzWPDmvEZWe6cDwY8rTavcx5dmz9Rb2yGxDEtPVn5PV4jGvJ9agxjobbftQw244gfr",
  "key26": "4MPM4V2WW95RTMzkqtj2bR4VAf77BaxDzS54RvaJt2fj4tamXySJCjqUu2rwFnjoAprmZPQvm2uRbzqJADFa2Nji",
  "key27": "4HyLnU2s4HrGRtZEczfms8aBDRJmKXu9RkK1BaV1x8rcfPgXoXL2TbR7KUrzX1sm5ZWdR7rTVDByJqrjjyGboSLV",
  "key28": "37bdSLe9nFQiU8AHYHbx7dE1gMe7KCBWTNebzmwtsftrA1DYWgv7uzQDn6BwpLfMLemyVbNoB9EmjL6Ct1htLFE5",
  "key29": "5JwsuNpSWHe5HiXUwiQJyQx72yg9Bt9cdPN9UN3mx9RGEbsiGw255ppevSieFuQvVXsor6Qj8YnVfchuPiivfEGJ",
  "key30": "cDfH81SLenMq8VQLpUo1JitDLYJvJpgtEwpe8RM45NCeAFbLsUkTv5uXujNz3eEBAyGUDsKsGafEj1dciguj8yL",
  "key31": "3meKxC3YuWeUgGtCQTA1xyaA2Y7K4irWA3o5WfmpXLz5JdTfwadiCATaSBthvy4gDS67B6FRHwGETCSdr3N9UKxb",
  "key32": "bkNWE45oR1Y21matgA4xhmi8yCuuFU95rxUzCubSEYw3P719Hbk1YQFRcBYskrYb65aDkTWh4AQaBM3fLbrviLS",
  "key33": "5SUfWagk8vr3Us3P9U3VgDDW7NyzTwbDU7rKrzagZApjt1dkxcTGRC8koyijMTmMWgoNScjDQV2uGDjpSFtqekAm",
  "key34": "2ezCBTDTDypdyeAVgy7HwvZLYRu1XgwHNk8S35Nw9NWymBPRdUpNFasWfFTCTqAHEGFBJc8k4dk4XVThh138gFq6"
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
