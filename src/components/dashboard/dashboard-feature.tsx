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
    "3dExjLR8prdXfUxoQPU5ZSWUhXVh2UvsWf9Ef31PchFb9V7pSWd7isRXAWnJ6wkjK7TRx14j1jnxeVsaGUKSPNK2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iHH2nmroar2GYLgib9vBc4w8638u2KjZHhNWu5kuXEgYraWtY1npbwYFdoPSvWCxXLGK2sL4a2WjNNuFn2xJCkX",
  "key1": "iuQdDe8GoeA9Xyy3KUff2iJgJLXrfCitpNb6pQ3Syvg9ie1nxAhTJcZ66mbDemNrJa6j2Mwchx6AD5A9WVajeUx",
  "key2": "3MVRtmtU4BEvv38CprHMgMUpRDt7faFGxQA4xd2wcjmEyUEkjbUc4GT6YJV7d1yHMsp7rQ2iht8sMp4Mjs4fn28i",
  "key3": "hvt4nWLTmZbMS8sWszeAV6wFW4RWMqjuyBVQnuqPEJxJt8x1vPCe9qM6HZ68mbZ3krrPSgfQ8XpvtB251JHvzjr",
  "key4": "4nm91LVDANkAbTQxvWbh4WLpKv7XVGGTDP4w4YEqskZcE93cHPEMQNUkTDYZULdww4RiKCcoFYtS7eGS3Fw9M237",
  "key5": "4s5CZiUfzDam5p2PVWWyhYLuxGSd9HEu8UsbJg5hBJ94nmQiT7kPV8MWWSgrbfxuFYCHwobM6qaemMk2JTry3FKz",
  "key6": "4trJeckHRybaUeWBg2zEEvgKqUkM3uHcLGYod5CfVVua2UuVi5MXzB8eHeZ5cs3ZuHopMo5obaMG4Xe13MFZeTGw",
  "key7": "4jYXLx83DsZ1mfPfR2Tue7JP4YRDvn15GpvDiqZyyEPhKtRtBssVnnyKGkZ2TTwvrznu6ERn1YwwUQN27NTX55pX",
  "key8": "4abLvUYBt2wNGVUdcG3kjhcQp42iY2f29FPxEuJcLSEAYWDSnm5wwtQG58FFiC2t3mnhtL54zrNiVUZvXEEPjXrt",
  "key9": "3rjBeT7VnPY2cWxA3EqcA6wyHJztvyrDXn98frMvz7E6DuuQKcKQN9bUCjCLuoBZ5PZhzt29Mg1e6rxTzmf8ZETs",
  "key10": "imZWZPzskVxqBGmeefTnnFWPXhPzmd1rsbN7rRkx6qVhggerVTnjxRKA4JXKRCuxfhKponeJwxTvyWBJRYhY2Wh",
  "key11": "23tQ7KFNnU7GgcmCNaDmLpFX89Way4WAbqxcpMdscZv9ypUqosp1gCbZYfpJWQ88jjia76e1puQ287M7k8rLcstC",
  "key12": "5bBewufKpz6RaDKnkJePWs4xPSrdJ6QArmtAm7G9L67amviqB8QdTB6HNaHXmArKrHbihFdqeJabSpsnzzWfhYCZ",
  "key13": "4oD1othQ8pqJjbn2wYoxdPjYyBctpiMk2vQwTYbQCrbu8mAr7Xg8SHr7eSZN8Zu5Rvtma6qqtcEHsfswrXBbdnHH",
  "key14": "4HMNBnMbrgGVsuSG9vuhtVv7y9CSPEaDLvVKKE5R6Kz6aJoUM3BK4tMLAZUpgwBD6RzPa1AsqsoBqxEcjKsu7WHg",
  "key15": "2dh8s29ky2kwBXsdN6eLV5CV4GwZ2AatigByJJhirpMAhWPy5F3sBzxDf6XBhsdtNmH38VVbMqgLxGuWisVsQgKY",
  "key16": "3U13pM8vJ5tGqD19ktz46jQeYcw1WhMpz73e6LFJTf9jQjMFaGugrTqRxekB6A7ntQtg3VoWxnY624xbYDYzv8DK",
  "key17": "qoMS6bbJByWXED6tbDvqxyfLmyMrYRwEssS7gYjg8Ft4uxaJWsNKgik4bKZPbE7ya1KxHcQ65VoJQnRtKLz2uKE",
  "key18": "2UriuKpFR8yGaQzX6Qf7eaGVxrMpTgrN72WFwzGWjA87sZVYacGdWGSurksANedqNncbGu1w7Bf8kGHoaG9GfWkY",
  "key19": "2vdYjronbcAN8CoBvXcKxjmMtLnhxm2qWwMxUcM2Gq1TkFtG5RJ3uJGDtzTq39bUF51C595gHx9A7Nf2YNWCrj5h",
  "key20": "32tYPMNWFSydLUSLxWMHaUCoKwH9LwPHp4zjshvKo8qxkYTYYBYw1JjmDpyFZn7bvAXtgZWnoEwwPqtBCGcBs1Dz",
  "key21": "3CYdSzdFLzs7UiLKJ7Ck8SeSs1L8d4EsPgFmEdyvpJgcLXhDk1gyuTm4j61C17kU8CoRV3wUCXs1yMsXGwHxJMnY",
  "key22": "4k6w8osu7yRhq4SNvrkSGcvrUDf7QWzYUfj4jLHYAwWBTVyEx1kUEyvNNa6GPYFesdyQFdYEkRioKz9hYRvMRtK4",
  "key23": "2QE3WEHnFnh8hXMDtcyjmr25uPewXnzcY9yRhjXR6gBQk7nC3PDmiCv4cPUxjERULbSY4xUGEdnDZmBjwM12XLxC",
  "key24": "5TStFFbUkJH6VSH7DbWmbW8Hh9ksYekcZsqMfpPdfiCTpT85cCAGmdeUs7ZTEb5YnmM2wtKSdZya2x6C7T2CpK9s",
  "key25": "4YzwT7SEfoo3fqGRZnW4gYb7um4UdBsQYaMt4N6DND7Y7bio4fKZ5iQY53C5YRxShGq3AxFre5wc28B4DgNEWpt3",
  "key26": "23rqnJv2Z7qexC1p6FhCoCpJJgkYUWXz43kW4WtTua2XKVmiPmjYJQLTFzNnGzrr1eBPP5Htyu2uSccZJjAw3kFw",
  "key27": "4CU8A9fPvbq1DokyveYbAGpJxk2UrzjhMQKrJPBDne1F3GzLJyUUQmCp6M49Zt9PYTa142QDc6YRWYHJrHgJ1o9u",
  "key28": "5ySAnZtnGP2Km3yB88yNKdM7rFFCMc784wf4XjC1Qm9uSfo6vHCXVN88LgZA5FVFUYbns9YwCd6PLfnTfStapL8i",
  "key29": "4V1SBV31QpcLNhHPonLucwEBgbq4oQW7hHsyaRcLAXd6dE2NGjRyx7Z2Hvb3X36GcGUjq9rwDt4cc1kFMr5MJQb",
  "key30": "4kF54SmDwbcWFeT7TfvZ31K8o3KoNV61jLXHEVVdSn8gSBBifVeP51ZVP63tysTonsfn5YiSUAqR3tcMku5K8hbK",
  "key31": "2sfxLF4YigpXgTvGgsxbw8hmt2KAxV9hyEvbeBqYcwvqvNVQvSptbGwJajJ82qPvJQxV95ruStSVq61aP5E7hF5w",
  "key32": "33jgxhNMDcpSbM8QLboXXpsoMqjtovAtekDeLWyj1PyQWJuk3WCTyWD13Y79jf8VsozyWUZYVdPLWHrLFtjNFUX9",
  "key33": "h1ZySAquau78YJ851VCqSzUPV6xfu4V6eotgP8SnmxDwLGeMeQP6QGyD4icEiQhsmWfn5MNaRkUkPznRw54q1Fw",
  "key34": "5dbdBUUGnseeYVccwJSUeky8rhvLYpfzbVT2b4ASWTpJCPpjpzGv5NqE6gNhdNYhssfH16phgsuxrFtpFJ2NExfc",
  "key35": "3Fmd3hcL3p2quTm28dmYVS8PA8Vux7yTPGzHBHNYRHcR84tWofEuuvgL4RAhfyyRDZirYFBVMuHt9gCCPKegnreb",
  "key36": "4uw6oGS2FyWTd23HsaAorKvhARsoXZgS1N17acFDf4DVCxReN26gJMhu6B6dtHJd5iRJLVyj6TqKprWXMyrsYigk",
  "key37": "fwGVBeaX6r8vNCLQzZnF1BpB1jZf44mzK9EvGGRtQGRmqJN9ZfiRr1XVhUhUA48ZBpsJv4NjzPZvJYUWD7db8NS",
  "key38": "2VBB4p51ieRSovqupo9kHMYwba5zcULDw1PpWSeDToLZBjn1Ar6VkoF7pKoffAYaqGw7ouyHHyoySgFfa1D1X3m5",
  "key39": "38ErrGU67FvHfCv916B2ytovYq6QfFZhiHZBbrHhvK8RNNiXxxewXkY6dH1vn9VLCbeHgxYsutnhyNKT3LXYxkcM",
  "key40": "CpFmrYYLMQpPALsTwAV7H9bbUNbjRFPREBRvamYW9HfGnRMAbNYkg73F7sbgw1jecyCffdk54eVgYQXwKdH9Ese",
  "key41": "VGzcskEHokrpqDHfxXrb1aHriahDjWWhuXQPGUmVh23UWJuFpKkUAdaKpq5QcdpKGLKULgbrmRpVf5Bv44gjCuy",
  "key42": "4htxrkzMuuZ5MFjAuqXMmTVJPQCjMBJjF2LWQkc2V6KtP7Pa8PwzEGbanou4ZcfVdZtJ4ACxE77trtWGZqRSWdxn",
  "key43": "DDxEMkzb74Ph8CCbXUztBiq8CdqCPZ6oEPucLxF1K2Wxb5WZQvTKspLzgMB5gSF7YLb3XaCUdhKEd6Gyty2Au3V",
  "key44": "4wh7NwVc7HUAVaZCcJzHWh7qHtE7BPeL4JVAmCezBtKe8o5hPABHQ79ksFWp9RavZxT7Td5dMyE6oGARmauH7T75",
  "key45": "aAhrpa8jPhEguiKm7HKCcrP6RUEDa1bkS8SQkqmf6YfwPJG7p48dM6NW6qFT2zkBRnCQ77UmZv6GQGYVetdUGZ9",
  "key46": "4eTtgrv3j47AWATW6ttk8Jm3evDUH3E88wMsFL2sdVMHhKAgqwmV2umV7d6R2jZmcdgAt2S7MkDFxGsxENedmheJ",
  "key47": "2x7pM5yEnQMJYQohSPtiEj1WXQ1ecrWRR9hSc8momHQc6vPF1ZwZuctBmUVQUq4EKxR8fNFHHEppdELpmaD9ZhvG",
  "key48": "3m9G4sfhhKviz5wLsunaUZHzjnn7fL4JcrgUg6uPsqPTjyNoumw4VYdqysZ7KELZnnpLupASoK197rLgDBjD9PFR"
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
