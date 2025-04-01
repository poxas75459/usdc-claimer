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
    "35gAtGj7dTFfBEr2gpuWWywCeoiF5DJkMSSxwgTHyrb9ZMxWtnRGc63o68gzuzfgPPRqo5sihoFbBk8uMrPM7kfC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wj61dXY2pxcWi79xgSH6GR6iH66kRSMdxGcKuj1Fh5ZrGtCG5SmFiYHYfxECEPfYpfkvN2a8QTdkHQixBDurjFb",
  "key1": "5x5wA9kJXWTrGebQ4PMgUmBEC5JCwqMHFA6w4G2BZhgdWZKGK2T4KKNAFQ4CfJQzWg27YDpULi6rYKp7Lm9RaDCc",
  "key2": "3o3cGfrRz66EWbPim3Aj1cJHouQghgnqY3FzapPM3ekzWPhi3nqrxg34FZ3mvQ7XehZe4ZzZZQxje93onuyieGgo",
  "key3": "3pgbKf1Tw9KYTE1titKp6p1iYD2JqHZCg9ECSD3SSR1RKZQm54yv23B1pNh1C2xsu3iSobyterUNEvMEkpiYKCYX",
  "key4": "4VwJnXNj3CTs6P4KueNZuiL5S2SB5FhKDjaLvAi8gfM8FF2B25NjGJsoMf2gqPdTo9VDPa98bYuXn3zQZ22qZzeo",
  "key5": "4pJ3A54Ng6N9EbJnXse7BaE26h5w6fu2DSrPSdUiAQ1M7njzYcF7tPJ92gdoTSxHbyiLDa7UsV5TuaQwETVMZQR5",
  "key6": "3zVe3HG5CP988sMq9EUbZdTBEUwVFiLizTvx8FRp1riPibrnntsLt7hdYX3S1kv3oLttjtGiGjNAuQWzQMhYjpNo",
  "key7": "4kRbUaLtfy9Zb9hRVmFNNXkeRhJPa37KGJFS77jupmaQDYSBg2dccxe4Phj617vNX9VVcu3phuNkzNcxUa29DqAD",
  "key8": "4sZKpgEUzqfW3Y4xMDjVVgcVCryWwAnroL6peLn66KfZ93cGgvBE2pQQyzgqvi7NRrEm6UzSo58PPr4d8i4kW9bz",
  "key9": "2RRUK3hcfuEMtw18tqR3pZfTLpNP2aK1SNbAkMccrHzCnYaD8Yh4ThbvgzogQyWijDBeZovfL9vgtaFraa7kF8Bb",
  "key10": "5zWcq3vN4u1xTYD3KeZF46Sik6Pg6NPUxHHT5pkRRLcqyqunKSbXNqBJjBYXg7ibQfTgHXorDeZdnB1BeU7xvqF6",
  "key11": "5Sq35UEqAie2BuLQLAbjYPZREREpRSGCvQB6LYqLK1qDiGifQ8MT9r6fRhNUzY6fdw2im3nXT6xsneRjTsC3LB5j",
  "key12": "Aig22eooTRLvJgWwwRXoWaUDN5XWL4ixhUVv5pZ5dcRSCVbHh2DuN4autdLDChbJudfa9u2SJ37xjDfygjaiiNA",
  "key13": "3b9a9yvFFThZRivvkXFfnFGrjGX55KkrJjVdw8rGQHU6KM5itEjrJ6nNxLkHQE1quAuGsnB9NWGp5TanktJYWgub",
  "key14": "JT7E8u6ThyeCsk2GWX7HGAW1MmYQomFK6hoMbwKyGwheMDhugiWqj2eBkjq8UXzgLtHhJJCVS7eU21c1cF922HT",
  "key15": "5PtEuKoKeETgtChtqkSyS4sAvSpD8UcV4BRw4PkckY6bG62RZ1FnfqVDce73kY29GnDo8sCd7y497WK4eSA1Y5G1",
  "key16": "3gcBqn1KFxkVxgHZdjTjxoY2zhqEqBouQzgTtM5wjMx4h2ATGJfMCpV1HLMf3fJSMdKcT6mCJoCRgUkDQBo3c5dA",
  "key17": "5hVocBZrH1XbVeqykUqDvzqweiG5tcjwTb5w7ZVLdoAPg6bfKei2iDsJJpZimE5vDFWNxiqmsn4GhVgEX8hr4CP7",
  "key18": "47WvuBZ79UKSZhQD4UpdJHZ6ZJdpboCtBoiCfaqNQ44CeQxRBqRBxxQDvVb3Z45zdhUB3m72ShPuw5jFngMZrhpk",
  "key19": "37mMAioY96NkqCjC125bhevB7qksWKq1KPypKGoCMkPJvdPHUhwvFX2HaQbMax28yZLxDbj4csfgMFFvnyjjERur",
  "key20": "45cCPFYM8u9wD8tZ9FxzLRrEuXqNoeiNu7hysTuTwLfqhdM55PS1vD8xkuamc2uSnXM6vQuzfsThZR3rVsToBPZ9",
  "key21": "2541b7VdNLJ4cp4heUf2EeWqeve5fAUPEwi35KBx14TeVowX4XEtk4BYiLBgGGXwBpjSKGKE8f79SKVbXUd1L2KT",
  "key22": "4uAmKLWaGYJxoPN84ZFGAsgbP5WoB3mNd9aB8zXxLWT7ctk9HtJdap4MztqUmbZNcm2P4uCRVCuo6G5wW5NUKcAa",
  "key23": "2eEbmPmn9LzvJxZvHozWnZz46zjrFDmtgDfe81x8uWfGgHY1YccRLXqaYwxMBom34Un6gQzBipUvKKyEme7JfZGH",
  "key24": "43NrtUJb7ZsevaLn9WUZcrbJW1MpnHqVFRShMLTvMKLbYK5p9MQ1iZSBbPndEWneEAeg1nsKCvHbKMShDTqTk4Q2",
  "key25": "5PtoRyCkEagxy2HQ7hDtewgVS14BebVWnBSjH5HUhbP1W8bskDQe9ZrcZA4yiyt5msggbxnuo7d9cVBgKKGHND1K",
  "key26": "qftdSYAEFp5xTLSEx9SXVBdcxe69uiQLv5Tvt1Dgwwjaqetaa7ED24kBNvMRGrncut6Np3NZXdLeLufdP28oTGW",
  "key27": "5Qx6bQw2MQT78Dfx8nMRT87UYFYGWDrXcUZAWoJ1CCnxAL7mU6eSRg7C7U36JS2gg8T3dnc44w6NVgwPk1Mx633G",
  "key28": "4uZEck1UxbNGUvMZC7iirgCKxvvvydHQxVQ3uGsaYDNvfKWKPPptrRMEUUE7cqRMJHfZgTeokMTfpK4HMVFQAEav",
  "key29": "4ipzG1uCwhybTCv2YhE9P9Ft8zGvoRmo6oV4yeipAF5VKW9gSpk2x8Gs9VfMCmnNJScBh4wAe1XPEmEGeWT8mnRH",
  "key30": "4sgBZMUZTBPVi78yUJbV1HVU9yT2EUrhPn1BQo7XQRbVZ8uskVHrgxBhegmT1be8YhnyYtfcsQcWYYSQpZZSRLD3",
  "key31": "2JB1GyBi7dFmQvFdUeiCbX3DQ35iSxb36ZiJEyRxR6e4oGpxucEXC2Z211gGYC9gGNKzFNw7AwwWDZ6xaTAnZgXU",
  "key32": "c95aVNhp8fnrWJ6ycjQM6v8deU3Vsh4KnUsnLwnoyun7ArRHgAasmzyZbJtSu63ZRHbUtRHxUb2utoEEvfgp7XT",
  "key33": "et9W5zUPsQarA1pMQzRpc3vSgQut3nSqAjGoYbMMxjGX6XejaaJbFyg92N1YxnGuEj5t3wZahbXmhNwqru5tcSF",
  "key34": "Fg7hRrmwbBDdKg76KmBy1zsMWoi4KKULVGdzSfaoMD9cTsoxBAmDFKtu1fzT1Y8SSZCudP8hoWRPof9pbzprUyM",
  "key35": "BnD3Js7T1ptKMzQYot8Cr6vADzqUuzXorzNF8ypHuWMs9VG1QiXFk23WgwbhExhAkXGeXSZubgwrpj73FgWjvpf",
  "key36": "2w3VeN2vDtydz5NKnCBY69BZ2LE1DCqmyFoneaUXHfQBPmNikESff4WEQYf2xcSbEZ7NHPyRA2LWjaFc7d8qg6td",
  "key37": "xyN1rDFy6NaftMoGzWWPyAuTiyeFdmiF9EjUw3zFgKcKj1iRvGKVr7bZCoCMTKFbanMA2moYgkV8sW4W6NJtZwd",
  "key38": "2qjX89nZ2NjabtsqQApvHreegSDstRKrrTq1myHy9rtjQUKkqgNukYfkqX8mL2VKVnmeLCYt9JzCV6HRDPb2NXVK",
  "key39": "2g5GPimrJ2eSPiriZHZKmSwnjt5yVStHZNvseqzQAoHLHewo8jgop9S12wDbRe7SxGD2EX65cAiAAWXHERH5dqxB",
  "key40": "CDM4E3JiyyNwpT7gBjkJWr8T5Dg5MXJbheLt3AxQ6GRJtxiJMuw9bvTg5zUVShjuvSoAHYJxPMkBUhTSbJCWaJn"
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
