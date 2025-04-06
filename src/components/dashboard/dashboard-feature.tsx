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
    "3ng7ZpQAfqfCpKce7uSuDtXjfLoV2V4FQVomqSgbPTcpxBN2fCHNt13wdJAQ4t8QBLUu2guTkve2AYz1SDmXj1zN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "i6FNKKLk698jYAbGcJpU1du7pjwe9jkNPpELcox51noRzSZbWCtH8B9Zb8UarPurswPwLDPXBpykgL176kE1opc",
  "key1": "5bURwWMTAbEv6UFSyKH6rr9KsuH1C9t8TWBPjFHMtaWiL6Zt5v14deJ72ekyzbih3L8yYutin9398ctb3tNPUozr",
  "key2": "2xwjTxhExVhjb6SkVFQdZ8SfpfSJ1qWKGMKqhJSnnojULKwJv3JY4PTgWq3BckyNA67TpYL1uTL7x8xAQuEAqZ21",
  "key3": "Nx4dW8afHvc5s9UTLsS3UWSUDbpA6NPVh3kdi6Aq1HPmuHrVbtWyGXxpRbq659tyJ99NMaRJfoW6dMvhmNiKYYp",
  "key4": "4jLSGd2WWkFFYRjsQEw8WrYFbKwaUekmTJyoE9vW4QSCYeeb7Bnq6BUuD1DN7vZBP9vYSW93puKwzboo6EsxDCim",
  "key5": "4nJgM15iDS8R4EVyjnjCRwyenC3A4shJZkpTeHKGdkuNRGrBghQp1ww1WBSXTZRaysxGBsn7SbH4fYT2Nx7Nrb7R",
  "key6": "hNpd86KrhbkJycPavzKjWGmbLP2JLBLSWFAhDnu3esNYWpHTec4eU5sZDxgXUYuMMPWxQMWVTGsfE8Wzk9uGsny",
  "key7": "3WAiAPgv4fHJgnRkcbJBZXsYygwBQQFhmtTtQeBzxhXhTvGa5PNY4kfE4GDD4r6kuwCt2t6df4LgReRVhNUaeRAY",
  "key8": "wPRFFjckZkF4q41zKGsYJZcAtyArnwQofVifMQ3LG53tqtKfz4ovWhYAXed4ToSVtYEm7NKEL9DwWt5vSaBFq7e",
  "key9": "62RqQ9tAfVH5bFtRsaXmvkVMLASZ4JE16m1Y6wf6A8KMSbiH9dQCxtV7W3noqRvpuuBVeRHHHFB1pwX76SdddYaK",
  "key10": "44PjNoAcdLE86DV53KgakEEWNgMjGaTxq9YG98YMFUqowkLj6psryvrsxzNuDn8mATwUGuAtf9NdRGPq2Mja4UJA",
  "key11": "4zHzY25y1swgxprP79tMYLRx42i5ezbyTS5L5KTC6G83FKeXDTZs6JykBvg1qbQ7sDP6SQGFaQKe4HaEtj8ETXWZ",
  "key12": "3efVjmcqqYA427HXez3VCkazYXaF6M4RGszbnL1DQbPBmoc3Hh4BhXvciXWdc9NvXoHBXc7upypxZJ1Y2rZUMrhw",
  "key13": "55iAhpv8J55CJncppxCqn6WTLGM68EZAMaHc1kRWh4BCT9aRa2wgvdKpebna3ovgo8WUC3erotp59YYJiKBDDbQg",
  "key14": "5bHe3CCjW2DoRM4qP7zyf3PUfaHz72Lp43gSmiuVGEE7s6qGEkrSijq3K49YPpPW4KcNKnyuug6AdDSudKWB22y",
  "key15": "5TQnzyJtwRzpGM6DXfebPPu9TDQdwZV8mAKsDKfgH2Q5f6i3c841ePPwrXA5uNWHRnY4NUPsVgtXjMSF7gYGhKW8",
  "key16": "kyW2KeqVg21GpthY5fa5Suex9eh9QGdiTSUWXhnHdxXq4nuzX7Z6ebTgkxG7TCYBrjPWpjn1gcNy28krHCDYPV5",
  "key17": "3icYjPsnaiuPQt1SnTXKqQH4yXEjX1ekDoinMC4FuSgZ4rcEwhvKanu2fZGWyeSHc36SY9BQVf5xKgkUqQpT8RUv",
  "key18": "5n5PmX5GiZTtL6x8NUReYj2WjbMAjuh3iTaAkMmC1oMXQEyTww8MkU3xZh5WeRyQvtseMH7cRtZ1Z743UqnyPEA2",
  "key19": "5aHUQmaBPpo8mULCnhMeH4eRZKrXuMgoizTUiQ3sBMcjHXuWqCrUoyUVkYfnLyH2ZUsX66eqWvFwHdzGvDvP8wqG",
  "key20": "mpvxftgyZ8yxDJ6H5N6G5j2mKgdKxAsHQ5mYKosabVuDuJMnVeZHKxh6oxQkavBWeMiA7pUUuCUcPqEJpBEscVd",
  "key21": "iHhTEeQpAimWoizyUPko68PvL8ZTP8Lis9mR8f8SECJZwChwuf5YFt61nZaneH2UsQ7k7wTFkmjDae592XjPqyc",
  "key22": "dTMn4U8WimagkMB8Xp87AXR3QcSTPc941VztEDxy6kSinSJyS9eyf8TR1HfbSFUJW6b6drfF7WzaLvXZ5Ee46oG",
  "key23": "EsSD628o6NTqeafXfbajP8Zn3o9XkhFM7ZWzCVYmS9ETiAj4p8Ny23uez5AyN8usiy9mEfyoNwSf5hxP7R9rGow",
  "key24": "43NbKhcvLwHSZCb7DtgCJHCNvmBUmAp1a7SbkNZvKFsUSZoPFfUskoYsFw3oAaMgvnfPAkhiHBjbtfqi7JvVKu7c",
  "key25": "C4sMDF1RA4k6wN3C2gkD7m7ope46Y9FdpWHZm4Ep7fqNd4YCNi1dru4cv7MmPMuh9sKejrmxBQEoLNAHcw3L1m3",
  "key26": "aXAZR4eoNS32wsE89NxxCGzDdLzdSFhQR2g8aPJkC3tPKswQdc5FmcJDCcrpUerSZdAwtxCYoKeMAM6Yh7Nh5KQ",
  "key27": "DQkvQTy7tR7M5NtCvkfVhHQc3GjP9AcHX7Rv5gx44UwsFzg1ZLLfR746Tm29XbFazRewVTEkysf72FvLHNLz1oY",
  "key28": "2ysjVgUwxPLCdN6TjA7GZgZnZJZeihJnxarvhKrq9D9KDt48RfpPR5z4KLPumjExEExx1A5Uzmibs19XVubLcf7g",
  "key29": "36KQgjfHjPN5bhZxFrBkA9wzJEAdVwwN8UCupigv2tDRv6ydSaHcDo14znAhE3Z73i1LunXyFRW2PKUi861EX6wN",
  "key30": "nb5WHit5X8dSHDD688xtHYnRG67o6tF14LMsFFxbPh7gXK9Nsj2f998kbtJtYRor9Ugkk9fqL1q5FgaVogAjEQb",
  "key31": "DfYXRGoj9o6BBUSraddWrPJ3mxod26pLRGW876mn8Av6M1PzRFjiV4pR8S7JRcKYZKCPShGGdMXU2BNBWTCSUwt",
  "key32": "5ZavLQLdQ3cvCskBWwe1Z496wCio7jFsumimbZsaRLPu21Co4xHyA37fz75aqVsGTfXUijypgePaCNECdRTnwgmt",
  "key33": "vug53L78gWW7gh8gvLWz97bLzDVmvHPGoXsERKT5YCvrvmvrHpzaX5f2Yb2bZwxEHDZPggpCCVCGp6XNp6ya1Gk",
  "key34": "2TVodf5KgaYZKXjt7dAfaD6iBUXiigdQEpgS7wxJ3nDA5bX3mLTEw5eGGVC7LVMgkso98D6cHWQmzgWzxcZqS1G1",
  "key35": "5kcmxLdY52GKyBUrMpSEQWCQtVNVMHsidymP2LroXQB1MQ5on49UpFXdaQi9kaLxSBBFLZ3iNVVhEq9nRwT6xbfS",
  "key36": "GE6Y2BSHvNQ2i9RE9EURbk6ACiG61uStFSV115LAfMd7GShEh5kpg9Xpmyd9dQTMft1XdvTm1kHcGuoAv18t3n4",
  "key37": "3vR2i8jEWWVvNp1w2iVqov36nbisKyZewwsGHY5uAhSkvo4Pab1gvDRdioqdCSo7zd7cfcSxJPX5VkozuuzN3d3X",
  "key38": "3anUmVhJTiSsn996oixcUE4Pg9iNtQmPQwfgLN6Rke6eYf7aJ2496wwCpz3UaBh37RuvdKFd5X4ddTwKx2W5oGrg",
  "key39": "63gdMne8NK6K9v8qX2a1y7qnN31NwpxnyYnF2B3bYxDg62qw6TsNcbEYLA7WeAYKboUEeGccK9DA9kHsE3iMUjJJ",
  "key40": "2BA6sKbgomTNWBLPkrRsKuRZLuAp82baMRusJJsFFG7ffMvZut4f7ZZNnBo3m1wZ6YeLBswV9mLFYygSVDMiKYmL",
  "key41": "mxEEUytevUcyDKswdyKpmCYzkQBJKqvCxteBnCwWbzeMyVfqxF9YgnnwqgjCrCDfYZuztyxbnKwxWpyGQ6gwLi9",
  "key42": "56W9kDG1zjKxftzRxrHHCNHDoEt1irnAhUzYjiELzWRe4kedQ6hWdXX8ZTVFZ5YZmHtQfW8z7pV9AoA9VH3jMybn",
  "key43": "3aNYUZKoiVhjPpfdP6MGp5aCuNXv5NXX2SojHbDtfwn2uPU5JrV8dxHh4udyPtqiXnHnbrjejJpctw6nLt4YiUHL",
  "key44": "RmNDGQaUxr8NidxcCq6S355uK4u2gSVrsfiiHKt6vjFoDeufK8S58SA3PmYWxw7hx6wCKLa9ndPRyHUNbpT5myQ",
  "key45": "3TxxyjA5whvqDpNaTS3dodXFETh5hYkMZ8YoHaULCRkreWBhZjZZxVVEwb8VWdddgWZayPmj8VNSqkezsrREhsNB",
  "key46": "kNxR4Y7jdJHZhLmvuKpsxxLtXgwTrR1m55Nunys3tbriu3UeghUQ3U2ssTKQckj6h3qReLX1bTDM6auiykawQRa",
  "key47": "5W2sjA7FFWNNUqqv4GWRRb6feAvLfXQAZR5bArbFTTpp5cpE7eEGo2o6YxMvZdFo9wDp3tJoirEVXcZ4QcZf675B",
  "key48": "LmR3HKYSQK6gfbA3UofV4R9g6uUj4x2vBMndSSzbj2pBKvcV4KD2rMRm2S5JFAYxe51GvFa7EsVfVKLeNxVVidf"
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
