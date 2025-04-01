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
    "4ixo5MFCu49NirsNGj5KGJoyrjDJnA9BczqftKHGXprZUnA6xS4sMegDsrFYqkaAeNyzH41FQaRF8YEs5vY1WJNo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JtZnd5gpP5vGixhnizspZsgihdojFobZ94sJU5QcCoUoLcdgwfeXQSCT6LoqaBxZCKUriPZWxMefnb92YKBG4Qb",
  "key1": "4MnUyARDhjzE4u3D4LgZH7ZAp5e415joMg8s5KUKequQYfsMq6ZKvsuyEi23oQ3P5AGBELK5ftTUs9qEtGWUpDiz",
  "key2": "4bs3XkByeSXg4EBZtVvowHiB84YFwfHHoh6j9iCJWoYHkTVMQL3WX7iGoRADvGSik8TH8ZwDkg94ueMpFZp1XQ3F",
  "key3": "2BCW2dL6W6wJYPj6SDjt7dvwWvqBVw2LA2cwjYUqGQUFKUHbcc19jhx6qVN6J3wckuveSDGqBsEQcMP2s5tk7rYW",
  "key4": "4YkXup1nwZknvA4bWzHixsfKKDzwggsvZ3feADYRzNztEicxsd2mUybzJ9yFxzFcKFJkAJHNcQ7sHSYV3gfbJ5XN",
  "key5": "3NU74yezHhaesx4swbY6bPexMbpyGH5hU61qU2BFNTF3AbW5cXz2WnAn2nqrVgWJXWFRzAj2TLcZCiBYgb9M5nV",
  "key6": "59SHbsrjr4k7jymBoSGeZcNH18eHsqDsPpd385fo3TSR3LJyrjePYmXNC2CoqavnJb8HZfBPS1K8KUndSmXMTGtP",
  "key7": "4nkd6K2BmNmQVnFG6HjPsjEqVzFT43AyzpSuVWyg4LiQ2H59s96TPTRidEG6vgnh7PqFQkRDfREWQK7UFQBcobk9",
  "key8": "4vt44HP73TxQ9ux4VtQT1y9LredKWWMyqxKrWij2FKb21qvWyMcSpzseevdSqJG7WjYKuG68zUMJNM2jwYRmFi9g",
  "key9": "4ZFUjr4FmdpjUZL2UQCgAmwCkDCyG1HFcih9zpmsq4ZpBVLZQCDLviSpbQZiiobe2QuhQyBbmgNYNq4PSKF51FMa",
  "key10": "3ZTYnHn9UFisgzHrvAGXuMY3t7gDwP6i2eno6RucLpwUt4s72xLrAY9qWwZxysxUpNxEzdZ9CaqxxoyvSq8v1kxe",
  "key11": "VnQgWf1kD4N42RdnfLpTQoDT1B33ARgNUjXv3enKU9pVZbDrecjufeCexf5T5DGnty14PnZdiheLPNQoq1FDkDN",
  "key12": "oCGyAXUuEmqtu3wC4DJpqT35snyuwDrbG6qaxPu3mSjxV78LXYwzF7pADt8GCeeRVGmU4Rz47v23E1XQZoUViL8",
  "key13": "5vNGTCafuw1Jr74XbnKJkkrFXHHAo4ypFzNY2VAJLXPR1hZA8QWWQ3DkZrkMcp7tBktv6sA7Rj2yPnPQgPuRgG1E",
  "key14": "nbQg85e6N6pRzA7XW7mbzwjXWG223cst4shiveHwyHVdj8hBjwTmc63NBG1GpJTsuM5EEPCyMaFeiEz9hbDom2b",
  "key15": "5XJAjgmqzai1Nw4pWfM3TyiBzbmr9j6tddMwAgCk7d4kvKFRhNBiz6YrojTicj9pLCDrGM9Mxd1XSmgmqRQArJ5U",
  "key16": "32PsBGbcVGytKrszpsVebZtiwxhp3YpF8WSQXgC8iWKRCuuLX9wpBeJQMmJ7hQBzgZf815TaG9Dcuz4Mvm8zgZJC",
  "key17": "2b7zvZPKenxQCkps6GyuStQKiqu4efs1ARA5zWx3iD3uRQ2jLxFtB8dq2DeAFbx8pa2ApCS5XnXcV1FQ3E3zVs9h",
  "key18": "42dNJFs2fTzhnrdvKzMb9pUQdu7HBq14NLA8ReruA1iHUsEtbGZNPXYVT2TMD38rtd3XjsJsek2x2VFhE7d1w2Z5",
  "key19": "4ZGXzNPx57VxWjoR94WhqTyiun2NnohPDuackYuKky9F7Vkh6beLX8xLYacqLUCkwW8HhbYS2WNwkNB9Vh9Br7Ld",
  "key20": "2wyReefkfHcjy9dUtLC8FiHC8iGkH4Jm9CFTFyRqyaMVPzYyd2QETUmgnyLXQwj2NHnm3YwbViwskveHV58eFW3H",
  "key21": "2dH9jRH98bgNkRpgsk18TPueyguVRBY5i5JoFbGDToCgtVS7zHVFeEq2mw6Chz6hjyoeT51diX9FFmgMBA1HNs6E",
  "key22": "2ou5Umekxct2iP1C8h9CVMTjjqGrAwUc1y5yFNQVph8vtXQvzN9Udbj5vFPTkzHH9NRku9AY7LgjS5QnEr6SCuYd",
  "key23": "4duM59BpWunFn9MmSDtGspDvhnUzo59CpcUAtcamfAU79tqXp4Aiw59qqqVzjpofVJiJbnHWEDK95JZv1uhR7S2w",
  "key24": "4gT8Jy1RJ7DwRqxRkS4TiDqKH4VbFxycP3C5eXgVc2tR2JomEDKevXSUymBaYxPevc4JfNGAdQCECGqz8Cha5hv4",
  "key25": "3dARoMG5222SZasvHaMVszgMbfkaGx224JoKpu2aVqVs276QkHxNRiFGXAvGdwENZ8hR6Ua5Eyh99E1WRxBcKS9L",
  "key26": "2SM1vDeCxiroiYVEq98X8eFkeMb9e3Nrk1HboH6zi9bA3dAa9wjgDpgPfxN6ngC2JvJz6idG2ZQYbw2qHfdfe2XM",
  "key27": "LgLZvoaz96P38gXFxrzNzCoRQVGcmo1RAo6L8Z1SjKpFzkjaTZZuT4a2C1HgZU2dWtGPjgHpNKkW1impN1EZEGF",
  "key28": "3w6zjDaWn56cjoRgTGkhns1yKhr6ww9qMxYf5CdQk56LFFwfCNA96MnpfxqgrQP7pF8aycgssQP6nYdG569AGoa3",
  "key29": "2SeL4kJXpR5vi6TaGLcn8LD316QxJpq3nRM8rgpA3wUGKQWgyPw5VJBoPxzs4MbatZDHUc8GJBbs6bJ7SFoo32Km",
  "key30": "5FBMBJ6rTgox8n8aYe5Jr2FWzRETnMAkXyuVRUNNs7eSK8YTKwVAnsbs9GeWYutiMCfbn6Aknmb6vGcewgJnuKSK",
  "key31": "3NuKTiW6FwmtxxbxASM7JUqTuKcetXWCh7g9uZNkPYZg83f9NPSjy25Xox4ZK8Dd9BkVFgkp4983bk6sXWECXZmq",
  "key32": "5SpjoeJpeANzn1oH3h9umTdxjnajhwAeRfWVgeMXDsRQBnqGW9aWBrzQUg8Wz7fG3AVi3H9FohKoxKjEDUtdHZ1b",
  "key33": "3mxYjsG23ikcHYgtqTYQxL16cq5J4XqteJbDUw2ei4Zpj3YBv9XRreMZXjSPKzacTRbwgUMFuHPct7kAW1o4th6b",
  "key34": "594pcQZQReT4BXfe6iX4VhrKwxtVuY4qshZsTnAYb4woq7APSm3ycEjdn8KgEYC99kM2EK7eWbR6FakMGnz3XSMw",
  "key35": "4fVEs8NYftWG2AyTGUdQK2w1Zdu6QcfVtzU9K3t9VAFP7TwcoNEmsMky2j82ecYm97VAhjBvzWJR4x8PbGm789Y",
  "key36": "3ZUVTupnn1cpNYQ8htr3eQ637yiGysrsnXZj3kuaXbmgkTV9iHtfbS1myWjhojs8tjZu4XLMwozj3N5KW4Sg95Vr",
  "key37": "5fXe8wtZA5qyHu7JxBCzvYHZTbpV2kibDjoALWxRzipxgtAdLqDcddQViPnURyA5kDCDszxDdkopgtkupjNb5wuL",
  "key38": "2rfeBfpGf7PzMnNn8vBJRxMyoz5FLBRrqx1JdZEfGBBT6dTrmwHPVkcXfZHmbXBNZENPSik4DwoBZQVX6GrSAs58"
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
