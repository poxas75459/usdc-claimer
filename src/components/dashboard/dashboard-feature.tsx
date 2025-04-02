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
    "3Hjkn5A8N1PZ2vBUb3KzNN6QQegBHyCGdU5hfsCyyZX9C29sjheSNzzVpganVcSSzrzLNB7PZojN1zCTsGVff6YK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dW4kjrPmukiECjfSFVeYEFqofbSrqbgVqM2wyJKRK8RR82YHzBwJKQFd1Wt6cPyzanV76tpt6wufTaJxh2ndECn",
  "key1": "38ng6xbdqqfzMnHZCxEsG3fHWB2yuTydxY8TVzSCbysZeWRw9mx6RPjofbKHm6mxDN466T56voChh8vyqXiwL6Ap",
  "key2": "2wmYnfRZDtThumsVaSCuWuoxc7nvdtZ2MxjoFk9UztZGiuRtn4gfbFZHAL9qU9Z75FvNVWT1D6Qc8ifgqrYAAN7r",
  "key3": "3mx8npooys9FVqUUwBBPVdgcB1Y42oBuvHPWkUrbureNFXfUHWAQxsZJewbJ7mqUPPgnkQnqpbKxjEXvSgqnk6Qy",
  "key4": "JzJ1uCh1ZurzBSGUt2kwYv8ffp6mUCkj44j9DasfX6Ya2hq3CoV3h69dbp5UpixAezNqHG8Yts4QQF6nLsReykd",
  "key5": "27WwYDg84SNREobYkZ2pdL3vWwYzabH2Ppanze7yjpJ6gCsP8t2Hispb2wAjChTGEBKCDze4ASvWokrkJ4ny1ckB",
  "key6": "ScPZ347nEU6YhNdwqaDuYHaD6uvimgr4Q565iEWZw8hEQvCVN9fBb7kBdQQ3khBt3zLcTsiFePq2yn5dxqzsQPe",
  "key7": "5dGR8mSHnmeRmd4g1kD2bMwsyShXk7STcaewysJHHxYjMdAHWdrrDdixUJoyQwxKXY5vp8t6C6DuSuSRaB1L9MGo",
  "key8": "63DZMh6vFJa2NEtW3NCywxrqe2jGmsxUFhHhJHSX5N5djJe9WGB5dGffmEF5vRpquJ8BK1Ad4iqy5pAUQ41YVAYk",
  "key9": "4MSiPfbHBEUW3qw9vZZkqLk8x1Kwci6zfjk81gkFsNk4JzTQXigMv9nGwqb41hhUUW4c5cP55CUSdAZ3kMAayYG",
  "key10": "hM7nCY676nMK9NsPNsCFrvbGbujTSLaezP1kJKgW9PdPeaug9k3uYm9t8FeDtk9KX9ganKFiv4G5jNM3pFX8m6s",
  "key11": "2mAHM9zF8TXrBvP6sjsAjCH2x1Y9nh9TgyUMLiKPwXwAE567F77Tjv7pGAVAUQsqdmXhEpZUJVfcmSnU1ymmKZuN",
  "key12": "4ZtVxfiuXRhoH677rJJmcqy1yL4ZFWxAvEztbCQme58py8UYARwCKMTLMGjFX1X6SwJwTSv3DDEGwLngHN73UutB",
  "key13": "666QMPUSPR87nQ9amJaZCHxgfpGnrMnoqf5w7rtZWXuBF7mdJRXefe1cTBtWY8AETXHBVyX1qxQtgtM68mX1619U",
  "key14": "3KnpBwQ2UTMnQwkQCsLsr9k4uCRVj4GJ5cvV1G5w7jgzNv2dZz8kmmxPn5MnvhY4rKLzNWoXsiGJaFfkYLRYB1kS",
  "key15": "3jAhjCVRrVPYVmLWhKxBqhikFpyJLAUwAFGPeSiZMi8XNVhYzurDaD3aPge7R8w4pBWC3GhRPa8L96Fy9tRvGmZS",
  "key16": "5G5coEaZnRjuX7chPT91U2CDEVp5nqoFdLBnhyDSEurR6p8HsQLTBEtrU9nTLKukkzWCes63Vnsr8E8XrYtmb1uQ",
  "key17": "3d7HW2nDqeXtUgGVSz9hfquHTT6eXAx6XPnozGUeCwNoJMYDNoU7f6WCEq26XADsTr7BGWEN42mXgbjojmozGc8b",
  "key18": "4YfJ638RJyhb4RoRBwHPiMhRTDum573PKHEC9UW63XgYfjU9MTiwQLAfM2QzLd8rNt4cZiSLmujox8mUtnuQBsRn",
  "key19": "3jPmnn58tFEQL5xiwncFNJpRRCaRwSwzdmdEiqAkSwHeQhSZT24mcnvvDQhNLW9KjDT8uEzuLgbkmm5TARFfn68a",
  "key20": "29m3x8XRX8DZMAhAHZzvHKz9rzfFThURvJ8cUD1HdsJstdWw5vKKoi8mqpznQ2xGPJiNpYoYS7sT4zT3FT8E4iYF",
  "key21": "3N4y7Uj1XaYK9mq6MrHoJNjMnFxs4pYVZ3byyaASjwdNPvJ7KEmqjnLGgnEa9QD6qWgv2U2MG7RGyhoW1Nk5av1P",
  "key22": "45FDwPVZUUBVA6ydNjB1A6SifErUo1HtAbQGpGTSQYLXpLD9qhNv28BXJ3dbiSEEsmN1onUhyCSLRLF5d54BBerU",
  "key23": "3yh8Mu6zQBfgNCbcoUtjRZTjw6iUsKWSbcA3oUZxgyyqYNCbDPEKHqjgLgmUtukUr1XhS5UsbBP18x2YBuDhbQVe",
  "key24": "2QDmMm5JGZGNs8pP4ydhXCRfLvPp2Q1UjKtgsxafBtjz1DeAzEBmgw4SFPi3pk9Fa7yRdTPuWoaEiHD6dotfz8wo",
  "key25": "5oTQ2Px4EcAH5X3wcMg3dYCGUTxz8q6o7eXkk9oCgS26zmLvii4gkbjhyr7sjYXL565ofesSGxhwitjQEjmUs7nP",
  "key26": "Fgi1Nfyxs9ZKS5hTthtffUckSoZCobECCEuzyUe6t4nPtR83BEpYg4d1Dy419YDTwRRsNd6fBqERSXjmnp5KX8y",
  "key27": "5SDBSj5hDa9c39r86QEUAMHUQNUofdEtruhY9LPo2nprdVcwEfkasHTCZDS9MAhtww2DEbU24x87PWK3Ro8h9NbC",
  "key28": "5iG4SJZhuYAh111s34KjUokiD5fvjWVni9bbPD2vQQAXc56YSTn7ABrCFdSaKnRqAfY86e8PHGRnG78dDQa4Rw4Z",
  "key29": "5NGTyT5LRSqT54sDMEFE7nLcp6pYfkRq14pP4txkQPMWfxNsshmZCA9YoicxoBDRABrv8HML4aHZkzrberzJqkEC",
  "key30": "55NaszfFgTyzCY5pbBck46zXfhgcmdsWvKqM9oPGUAqfgXddJKbapBwdwJW2E2xFCW6ACdc9fsZGsaSTB9vsx1a7",
  "key31": "4wtX4pMAVdTpjKrh1NYxZ9nTofrt2h5Y4661YDsax42wRPxxgLTofnXRfTm7DX1rpM1kiV33n8KYQoRvHqejvLZy",
  "key32": "24REmbVrST42biF5a6ZerT2xtjAZrbryEqKHAEaedCfqi2ciCV39c7CCht9DAKFa86BrqfsBJV5CoGShxpRxyFRn",
  "key33": "cnM6sDaFsgCm5qxKZZTeCZtUKqyUCdLwZSVdLnZ8PYnsweGsmRE1y6otBQSYpecDHgYVJRj8vkccoSbbdaf9nb5",
  "key34": "C9aVu3jZ9n2NMg3i1L4sJbdXUiuUcsr3jRRZkuvhUAjYjR7DUCGyGdhKD8CukRbV27gRBzwMpT53esJ6yGpkSiD",
  "key35": "3P2SEqfFgPHrfWnXUvYXCcW1R6UMEtJhWMnq2aSQjDizEESLR17A1S5sK5JMv5uXxxsp1FQ6eV2ev855H9RzU4wM",
  "key36": "2t7bU5ZtoWqUJnVX1WaRntim8YbAokorcXTMf2LPDFDrFdG1QPLieUq1MErNeAmNAxqh7CJA24F3jZxyvdG26N8q",
  "key37": "4SdjYetTKnmT2S1yeyT2mQdaWkH1d1j41anw1SZ4rFzSPCEy7W4cwqCVFwKz6o7LJq4UuuCAzdyEWA5FtFqKneGr",
  "key38": "25Xnc5J7DgFkc8uyE4HZrE7dGqA8JqXaDg6t197AdGQYSbF6mX42rQyAY3EVCWJrQAfM5cJiKFnuhs8w8zDdqhrn",
  "key39": "2DL99MQWPFkejJcMCNAwRT8GiwoY3fRRyRLr6Qr57fgF6TwQf9UMo86hDJbr7PWUBQtB5Jam3TjuixT4RExoAMmL",
  "key40": "3qtsij7ovyZxkwLF2dQXvxj9K68jhvYd6CCCs7JWakFi4DC43X5jFVK1N86B1ajNaEtmpbvNKqPtkbkt4cw8QPnc",
  "key41": "5RSLv8ib5SUuVsSCL9SRQMw8fN5JqZTvmycTQRtriJFgqKBGmAoTo1Eg4EsmMhtSupNuZkuiZeZCvyweqCnFPYUv",
  "key42": "55rG7kP6sjRHrqJc7LffFVyEPfyfsEp65Zj4fQDVuVKVySAj3i78uQQc799E345Raz6zseG2vjQMZgFUzQdrKtDY",
  "key43": "2nhmo34yqTTXEWwbvBERqRqg8X3e4NhU49AdaXkbqCNbCkdWT9GCGxNkazMXe4YFGaxT4ijHAPT2ER684kAEDyhq",
  "key44": "kirJE6vwUdVYqXZy29W5bpc44E8db8kYYyHM4AURA8L9aX8AbixH3JYusQ9rdJZzx6yW7hDBwUGntHqk9F2bCLa",
  "key45": "2jwq4B51Pi4JYRpbpStg24qxYn3C384XZ1SiGwGvdxizN2rkufQNPqFUVL1tp4peShJp372zqJcxVD36zxAsbHfW",
  "key46": "4zDZStGCZFiHXj3woU6bN6fGJ2xm5hDHJCax4zNnUBfrvbF7JUCbUVa3WHwjFoG87VjZAYp7SVweSFsuQWyj384M"
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
