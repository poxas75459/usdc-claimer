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
    "36cijPU3c5iCDoJRE3z7W37yTfUh2iQ3hd2i93UoYE2dqEgpBYFAF8rMgaShAksjksxAbnWWzFqijCGcvivNR5G1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LcyB8ggufAJ1bzAovcPHhUpzBmNfVBsmfJTzQnWV65dSjPKZUjfV2VCZEoSZugvyrtMNqPHmrGapzgdZRM74xjp",
  "key1": "4fXEmnGAYwmPrer5JtgsrqPpuJ6bYvsdrQ2Eeb2EPBjbB3M55rsGicxVXCMGdBMYeeGtZHxPWf81BAgYN4evE4Lh",
  "key2": "4dJs1HhjzudXwXDBQBESQvk7Wizq4E2JPkoUtpSBsSpyGjNojecvMX61EYyHeuwfVJ1PK67QMkYFZ2j7qJzk7Fg",
  "key3": "3MmTbeFC9m4NbSUrMxFM3UvCbMi1iBpnQrAhnSUKAn9GvTMjo2pDuWqZZBSWcMof63i7CqZssDPUqjAPNWWHjTNz",
  "key4": "2QExvH7yAWX7hKfkKbtv8DCeSZ34k1SbTcg2SEezRwyUNCha97v1Wx8weLSA474Yi9h8JsnvJQQVGPfQZWNn25Vt",
  "key5": "5haamuF59bqvK3oRshp36ScDzYZ9byBYREvVP9JJTWbZfoTS8bRhkohCiGSxaxW6Dy9JuCRnF5WnUwifffR54b7w",
  "key6": "2tc4HD1hKhJ5CG1d6Mwuo3antpDtrTqUyhaxB7JQaMEsg9vQKRMsL8kwzutsk69XTqfkMDpq9GAaXJYJesoXBvYr",
  "key7": "3TUqyu966a1dG5m6gjaKPbxY9NK7cNNRBFfifFZf3pSzY5QEpr2zd7S2Jn1vZkdr8JaPQ9sLCXnTCJY1dAB4z77S",
  "key8": "5h51SgNEPMEnx8nGLyMr8uwVM7sKvCPRDDkoafDKcbpv33PXxq2cZKkRiZxmSLUndAAAcfKfGBzi4oKYDJi9J9ux",
  "key9": "paaJFdjdguL246ARY1xhG5CBzhbNn1NcTqQ9WTnDynEKVQ3A8cbBQ7N8iDa3yPLfd1pJbQ1wQJEhj7vCDvvAG3i",
  "key10": "3qRpKpBfumyepVi1KWS1z6SXp6RNUkW2CXmeNMqwKEuYGZ42TDq1xXMpcY1KCYEAKMxms1Lx7dkDJeqFumg1KtRU",
  "key11": "46CYL7FBkounkCJUNKjNdM66jDnLHdKBD1bzqiCyuPeeUTyuJkYGuRL1dbbr79VzeRtm694djQQFCAZWwgcVjus4",
  "key12": "42hsDJV3pTLDqvGQ1kW31kGjP5K3fHky1NcPeqcvpRfySztwHPzz6inpFD1mRP4X2szHMfapAFsk5FY6YHwisqH1",
  "key13": "3vczi7RH6Qy9wjc8dhG4JFJBjPbQ85GR4Jk5M8wZVKMy66opfH1Yz6GiCEJRNPjiVMFTRKy8JSokvDVcVoUTJo9v",
  "key14": "5CYV4GJL3ctYbuU4LjmauJGRHHSpkWXSx7RoqRVgveE2bDq2CpRJGetVh7mKSo9j3NsydX5wNRZ75xSMHw2PT78t",
  "key15": "3xEM8ebqBptVSM1pLL8anfxg7GrC4YQBCWh4Ajs4JaGnZm6BCDcS8owBWmaH9o6wr9q82VSgRGBhdxXbUzifrju",
  "key16": "5f9XVfVMoQwwDBpM1pp6VCRD7Ns4R7MUW27toymGTJeQ2UH4mUV9Rxo64zaGm1zMn8FQbaXzseHyfMsXQZmqBjPV",
  "key17": "5C1vGZJ9A67jkuvcedMGM47jRS9bKXyjXTdWsMnsGYsvKVCZtqe5ik6bYcxtwfzLgzXARP6rh1qfWu56xfSYAgL4",
  "key18": "3ZCwEyqjfK8Y5W6yKpQrN7c4f6P82MnCV7APSPj9yCC8JRdxND71PnG3KSqesqvRAhmQ9FyvEdHBoqdm82CGcojj",
  "key19": "3rFYfS4WQciQ46cZ74tSUb5z2SkyC7XDAkyUBbLaTidfxHXzy7nSfUsgDLaAedHxiCSryyjhTbyC3iwKSuazTR3W",
  "key20": "4Qy8sG3Hb2HQAS6mo1LyW4VZaopVbVBwtgivSxyUEHVssrwr2w9Lpne7oFPYuQvEJNTzi9tJjUq4etrrBNgRBYAp",
  "key21": "3ufmYB7bgrFjGif9LkSrPtodW7zWRYtu4ExkmAXxqMCCE1WR81zmGWzbJHCgEzFTVTVMewd7Eb3v1vsfLFAutLqi",
  "key22": "2smFggEFJizfidUf7QbGwwM5k199f72tEcDEt12Usckg865Jbv2pVZLYBF1CyYjx2NMPSrsmQAap1yuwZVWAGaWp",
  "key23": "o2GW6Tz5yopDsagyUa9U8rHBUSr6krY7FAn4CPtrkpfjjZYQsPRHYmHbEFq4fjYYMLJGc9wtv8dnjAft2fWJXdQ",
  "key24": "5jBmiRGw8PwMzxtMHBnHxT7RazVQiAiyihsuYac7Dzchz6RCdUejqzdsiiAaUNmiuViazDPd6aPrtaiuZ7My9o1e",
  "key25": "5rE4QA8BJZX4mKKGej1UEgVA49bc6Es7tSinccy8oJsZwHWb9ho5kHR2ThvPd8RmLZqbMMCsxp69i7z8BzcXyDuX",
  "key26": "3FDbFSdeAj9YLuXdBbj9DXw7oK9pvGNNCH3aX278Zeb4oWis99TU8B1J5vUL9KtkhPCvgsEHw9hdFStAWfH5ZuXZ",
  "key27": "4JTj7q862fFWC5r14nLSBovAdkoaECVCVJyavjgeYd67HcjsoraL6REhrMQgW8F7Hi9xU5Manq2kGCSMe6VpgQnY",
  "key28": "4Er62jrNX6gV97vWvvAiVoyTh5T5dkieisSUoGZ4UBYE1No2fbjyNxTF37JakpixwwQ81HYf8NhpadBttNUuBEo7",
  "key29": "3G4MchijmR5yvsfAnqvmnfLDfWVGDq6yPDkt1SWob8MRvzQ5TTzGjrcCbLKEgpo6HwH7AWqWn3kNhsokxBjs8HBU",
  "key30": "WXnCjkzw2KybwRh2tWyzeGeUf5AUkaswuxp4WwGN7AiL4YjDjq4o7VN8BtKoVHKw4WKa5fRHCQgHKZ47vqs7Ecm",
  "key31": "5a4CfpTmZdHxYAYUhskcnwTRTe7CgXYMhqqQSWxJAUJnNB2mmHPQkJVmakxtRr8MjiDtyLEDHrSHnw5KNTWiMoWb",
  "key32": "363k5d4fwLCNVCMCiiUkmqpQbp6qs1DhxyFohfrUfC3UHmBAzGZUVGkiXB6iasGiUu8W2RzD3gBJhG61fUCsgb3h",
  "key33": "24uZSCWXSWHfUa3crsm7d7msx12pC8dewfjnZBsdMgqCtQ7uVeidno98b423G83YgWYBVSSDU2mHDsG2gRBBB6e2",
  "key34": "4qhkZhnCxfXM53mmcbiKM9dXyZh9z97sYf4U44Ethp1QbwdjcuYoaTYQcfo6qvJkkmfLi57S2g3eD3AdczTZmsf6",
  "key35": "52tCotD7QpguVmVpeqMRBobK3uHtKL8ipaj2aJTvU3gKuL7TuL4vLJVm6Q3ZLCTY6xuuESqYWYCYTUsXWRtRjkw1",
  "key36": "3oFakw9CsbGH2CcPV9vaokLwHfev1ArfH2Xa8nHpT7RGnY7dJg7ZdLwWmH9LY9yAAzu7E7gtB9Lm457oZkUmDVBk",
  "key37": "5X2MhHSoRwu4wWc13UdLy5h8zLsCCWoeUfyRsRcPCZL8VYmWeFRrJEiWAPDhhwoPHj8cV2RHCfMRkRQ7eikFKx6w",
  "key38": "Vj2SRC5zVShzXW3As2K6sc5reL1bAhNDsSpk7EQnKGXC5mwoj8dKREABmEbcVQQT6rtt2b9mks9vivySBa1Xi8j",
  "key39": "R4QQ5ryi9dawbtQefGKTobEnaJShd4Z38otsDVKgB1qHmTenn1AykZXCY9T8sggCC8u25JJY4zAT6W54VPZ72pA",
  "key40": "ci6bb8StwGBSw5pUbHbb4pyEDvGcTB69hsCgwSyVaLSQnJoi9YP44bWPVq8iCZV3mYcnaiotVhrXj1VitQ9ox7p",
  "key41": "66uSudgpvY1nPMCHwzSvtpDEGsBrUkCyvCAszaXnyGPmjGVxngFvoRouemQ6MZXbYZ6SCXUgUx5fDvP21VRYA9KY",
  "key42": "22MEJZPmXKwqLXnbKyZq88XkC96gnmKJkvj4SdCQieqEvaSYvJnDRGbeCRAQRjQkwMewfaP2pb9RdRr6Lzh7Sq5X",
  "key43": "2HAxxjUURKLodmZkKjGMwRwSwmgSrrk1ytXSPLby3WduNeBgYT8rPvaqdaVG3UvPdAFRAxJ6juigpAoaaMmax3M9",
  "key44": "265aXAMttKpV8jWZo5mAKN7PjbCAKczAx3mtHQrgvi8ihvp3bvcs6WrMFr45nknmvszHWTb32gEPUNoVGyTNqXLN"
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
