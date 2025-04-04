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
    "to5nBFL7rJszN3PcWcDNNGRPF2NjwoGUdsdqvVGbpiyNC4bGq5CXBLzt9NrQRkdejQQgF7ngBh467wZEQH1Pmcv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WqT7SGGCXPhQsGe4uLuVJ8rTNMSPasbLhWpfCUwBEkXY5gNomNSepgeBnq6BwjQgjuKtXmLgdkm3ECSUfZKJp6r",
  "key1": "5YkY6td33bJxpDoo92WHHCumZZK5fKWeJx4tVibN698qvw8mGLopgGAks89w6j2x16BbmqQ7gvNbJpPRPKp3nkfJ",
  "key2": "2JAk6gvX8fNHEKqmojYesFh7h4jyfABPJqHzoSJc4uGLNb2tHWBLDa6K6vY4wGPBti62TYndAcYgrbmNACNBFnKp",
  "key3": "2f4T2KhHgmkRMhQDVeju2ZRspSzsbvboaiBjj3ZG9VnNUWq9xkautcwAhtBGXJBg3z5MnXMRsgTowwuxaTB8MAfg",
  "key4": "3Qehef59xPNiwxTd2tGKkSUQSg9nfWDmS73jXxDi8vZszSt9hDAVyVAbUERvLrnXz1d4EuCXnPbLycQCGvvKbdVb",
  "key5": "5dwyvbDpkLdQvqksDhEpb9aUaBkYq5gThwZeqp7HNueb69mzXWNeScNhgf9xDBTCphzvzyKuAbF6c7bskhmA142b",
  "key6": "4bmxfHWAqNsrhChdMqPck4cHpbxdcyxPQyW2KMkkHUxRMRknYgJS55MLsbsyvhArF8QbybKgAyaZdRYEownkR2VD",
  "key7": "2NB5q4hDG26iKAHTVSwKL694UsFNwvv9P5WYzjK2Zf45EN59TKK4bC4tb4s2CZKheRhtn1E4ipCy3A7vk8yHNBpp",
  "key8": "4ab4RgyRtJNkvcNbRufFv4w9WwWYLYuo1qeFqkHHi2kVQJtbQkcc95CknAeuWm5Nvh47oYv47fGCnnsNyGxPJ6Wd",
  "key9": "38SU4VG6gTSRzcU2S8VA7y33nutaDVpcB3WjBkvBPmDDwfj58u5kfN9u9MFayab8vmYCRGLYtDy9rpvN6nKFijyY",
  "key10": "2sqpLRuYHMdDKFZungX7rEuvyQRuCPLU2HeUV7TTJip1pjWEnKt4v1sKjmkF9geyjk4o7x7cuDa5soQXKmTcb8SK",
  "key11": "32vcLWDh3wTL2tNvDyfpH7yzAJ4RaEbmrbZcbWU6SB9aT57yXKobwKjsK3C3Juyr8MvCd7nqKevocCjrjJJNGYiR",
  "key12": "4acQn5xgbFf4MUgoJw6fPzotRS7pXi9gHHu9tAa52fhSx3dR9PCxNv56JdYTgGDaZYT6BzzsDonbYWZtQRtzresk",
  "key13": "TmxFMrus6KavAmAiHdijfieBTutt4DqBhwG35CmaF18Zj7E63stKeC2rneHyBKF9g8wuMbp5och4ppvHYc4suMb",
  "key14": "31Uud5CDCrMgbYRUXtKH722DKbKF9QEi2KPP8PFkzbLqLF2SWoAjYLyAxHwBNrEcHA14MUxBJ6RrC8NKEenE2LH6",
  "key15": "3AzsBjSBsMiPwYJ5DRMGtqg3jMsTFfMdmAAtHhw8kezqgPJ6tDeAgjMYairhtXE29Vr2yVMtXhTdVE6oteVcQE8u",
  "key16": "48gni1cgKPFP61vqsU9JJxnWLGGLL8G8hoWLQ1PhcNASdrz6bGUxr77E8bCY2TgnGaT9B88qLt4xSReRNLVtB3sn",
  "key17": "5C3onT2PWyS6CTUj4zjvvgq9vCuL4uuzJZincxbPz98FgRHNGrCyES7H3DgCfL5qAAZ717YuEA41fVk831tcq1Wd",
  "key18": "36xaPjCkS1z73Bv9JXP9bNjFCk2iXqFs2EBEDP4YTz4Xzc6zWgbr2qqjtQxohq4fMJJ5R4EBEpCC8DnaE2rdhELX",
  "key19": "3VJvoxhRrkEKDgUpVPWNXENVGAknpJxyvoziVohasFDW9ihgB7Cctgib7rtFccD7hMzMwkFJErhkZAnMxURLw5jq",
  "key20": "3VtufQ1dooLrxRy8qwW1EGq8wtrkkgcDGPvucQqYPgQHPt3E6czPQVqqaUGjRp6SES9LADrCyW2ceC9P4V1uy1Tp",
  "key21": "49PyEKjXM8gqwGSmXDkgvQWksRzvUC2A6K9BrX2nhXa6Wu9RBJgXj8fnMX3uuUCJtKFBTBtPSct7TDYenQjZEZcT",
  "key22": "zRbCG4UgE9drzNdZL5AKZDEhA9YneWs9QkKiKZeFeuVUrHM1ujUzvvtFsuCX7WKEZZXTj7Qqnena1Zi29oamx2i",
  "key23": "5m1eJbHpriGUUhfrMmzZhk28wMz7mRLZufox3dkvyurDgyupGZHGwF9aTXLd5Gd9dN3z9SKGS8nRpPfETTquYpGz",
  "key24": "P4qx3bkbUGiuxMPmaKe7HZTZ1wpbdx8uPzWqbp5K3MkWPdsL7q5EdNMHppgZco6PucQqsQLrjFxjT5yBAs6ANsF",
  "key25": "vA6CJYMmGVemVegyVdCPno3fC7Y4oPe4s3X5eoPHZQh5a5tnmaqockqS8ohnnxaN72utta1D8e18y5o1TsqSCsN",
  "key26": "5V5Lj924TbzTernxP2Q6a5fg2s9oyV6on7UFob9cZTgBDab7FXieDCfYb3MDCxa6hM5UbwbVdEJNwJHHKYegrDXX",
  "key27": "5aosjiZpV1nP9MStn2VYczd5zZ1zXYduDASDewTvNQdWoCHpDf6yTQcnynEHKuAFBYdPiTKYVbqY7uxjCYSX5YSx",
  "key28": "37Ck2Z4rnVhp7QPv9hCF6UWor7uGGU5YkgUYzXyYC3fr3VF2B9zkLH2kEZGGdTtb2WmK4CEfLh2bXhFUiH616L3X",
  "key29": "iDkMfaXJs7Jii6UwvdAd1Y8S9Q4kR4V9j67GCSz8azA2WRqUExattPsmGqD8tfwcB1gqACJGRyxTbztf8LrZYSD",
  "key30": "5K3b6r1pPV2Eu7sn7gLnMoWmmQzU3dx2SwBAhVkVTmcAbNBjdxsqWt617gzntL6wLsXzNvfRFmvjSf8HiwGFLrHw",
  "key31": "271PuPSR7Sh56utvHe9cjgSbeJqicLNxVE3R2hHPBAJsR5a3Bud8LToBi1wSYzw4QiTv2iKJK5EDxvvKLY49SZjV",
  "key32": "2v4Z6NcsFFRe49moGbxNy5iyqSR4eiJ9DKJ5PnehPNXPAAUb6WcBjiT9RT8hJbFXbjXTLf4bSTLzer9vhkc3kYRy",
  "key33": "2UWTEioZpfyduhDBnSw1H8KuEQ54Q56S5Xcjvz1sHZwvjSFUJF9rDS3A6Uzqjxag5h1RSjDkd9tVVhPhurxvsJ7S",
  "key34": "4WK1axqxXuUyiYRZ3UJa51QZqhGE4RAFe5F4p9zha8ZP3qXVPmbEZ74oK5J9z5St2okpHLuBDNyotcBLp45Z6RgH",
  "key35": "3HHZmgwih1SyUKjZfgDipPpKh8aGmBQeq9g2Vo3hx57hodRPnfZerbgNUYTEirSRSUoaqyxzjy686CpLTZ3cxeBf",
  "key36": "3QeqpXF4DmNuXMRMZVKi4wod1a7Dhp4WbNVrQnQwBqSi1q11N92eP5uDqmj4zEHy2eBybn9GAcEtbimMUMGSzSWV",
  "key37": "fg12VMzrD1gCDo1DvnuZGpAru1AGD4eXEyJmxCyFQ1YCvncWNUhhgesvrg3fDWTDmFfDVJq6DNjG9TBDkgPons7"
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
