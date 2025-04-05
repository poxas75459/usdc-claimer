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
    "J4CyHd5ikmzCmGGCqcvHimeANp9aQmSPWaqrh7UCdd56zDQgy55sVkzHtYZNtZZ9TohuqooxqdPh3cGXATyc7ZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ANkjE4YoieY9DHF7zcJW6tzB6h6iGMqQuu3cJAiC4X5AmKReU5FHRgWSPmBaUsE8p6m86hdpcf4XFebQj1M9tqC",
  "key1": "2mMoKZcDhCmS7sCU4NM6AG6KQNxSACH6jsqNFiFjuYg3vYqCYa5wGTWfLAcRGbSNf5zcEa4PTcv2dv5dMoYw6g4A",
  "key2": "5Xwn3BDSJ8HgUsCxgYssdDhbczgVgZXhTom4wbrkukKWZmTjNahwrm2HRuZZoqNHFb3mT77BbKbSQaKaRib6sbzQ",
  "key3": "66YekBMhGhzfA5XCwSsSfLeHfCU3aXmJ6682AB9Z1LtZcGw1y22XfG2GMKRKDvkCPg8ZeSgmvtttctJ9vWxVSAYx",
  "key4": "YNcktZiBkz2xZKtwm82Ab1BXia3EKj3k3x5U9NeqQPzu7UPSNfdDwYAAPLhHN7s2Vs6i4wMR82yuAwVbP3dFPPY",
  "key5": "2hknED4cdbWFbQEmorGFsaxL6J5dkTqMG3YtWt3MnZTQMHCJT6zvNPfx2CjbqxbxdNdQtW5YNdYQPzeR3Yn28xhJ",
  "key6": "5AoQ4GfXWfAvtbtKguGcj3ewvW7bxBDGfS7R2YTa7J3mNX5qhjJY528VUSGPA9FX9kUUfXkHCknZavCLzxmYGfEi",
  "key7": "2y14PzFNi1mjfngtzpRa6xWGaLe7UXnDjTsK4c4mkSdoSZemX6RF37vynwQnfJRUkewAwTnSSEFDj7objcBiGrCU",
  "key8": "2d13McrHmkKYt8eKorAF2C1gLNAS1HfpkJg8hgZPsQa7rdJxymhyyj5EUjVaPJoSpoVRhjHhtpvX39wXpVfgJoTB",
  "key9": "3BgnGkPcDrLC3vN7rjcpvFPqU7wzLcYhxu5fo4iGPBq3VQo3Dwz6H4abKZV2JVQvUwia7veyRFauaNWCye9poVnB",
  "key10": "21JUx4TtF1Er2JSCJifv9cHRYdBdXhDbw44w6hZbPx34Y2ZrScVLaK4oKqAfrhsPPZgXgfdkD8sRxFSSSexfxDyG",
  "key11": "BkFuEWrn1xfsWQd7aqx93r2EmLuDsVgteGGXQENtZzrM1QoJyfzwGHdqhfVvr1zYXh8jDnCeYZc3KjcqLE2ixSa",
  "key12": "5c4opYtFavD361LCjNWSE58p4a4xLaDhDFLd6XXzRnC6Zok29o7Zq3Vhd5rx2yTS7kjt4AVeKu1i7va1ijutM6rF",
  "key13": "oh6zU6J2RoZ7jcCCxVTcs2fECzUV4dN4ZqJozJAxrxE87XVftgD4Wvui3oezzbUP88CyEHpfx7LNuJRfRx8kyzU",
  "key14": "Uc5F8RSGX13DFvAqD4A9Rbxn4CiASTXArGv4SedMkcQhe2khnhejq29qwkRrcDf2r4gi8TnXB9X9zBXGfnt2TtX",
  "key15": "4jBmuofMfNeyqcatQMqb3MrQKoMeQPpBgSvC38KXg5uw4PfYqSNSTLurugPSQK1iePryhVpoP7HKTn1VDsYbtvGt",
  "key16": "3h5qEqr5pdVVty8DCWVk2jfKDsYnX7YQapXHyS4im1VEyEUqD541xrjE5JSZ3WsgcLH3k5yHpJcpan4SU11kX2bZ",
  "key17": "4sJxKHwctzG1aUn4MzfBicaXLFqTympuEKCrPz31mCcV5ReHtwXoaYuNbCacczvfJ6yrZYEXzyXubYcCLEWBAcgE",
  "key18": "5b75uwHYrB38TLY3t9nxAZNRhEoNg5b8TXQq8hbK1YCDy7fYZ5ENGBwrhtMNC4Hq83r8JR76yGWr1gkEoELbW8AC",
  "key19": "4q6zDQzE6qR6L7RYXpFqyxcpVceXP36uRFi6bP4uZW77RUh6eVVaY34nujpYe1S4oAjdM275SWeY8PKqD7Mkj4t3",
  "key20": "2EFkA4A8EhAsMBbYLhpmHDBPmgkecqcn5Z3LJ88qnzhMrSqmeKrhh5WgVKTYhXnWwEGpk8obFvvKL3JhPy4qKCuu",
  "key21": "52yudzuTRr4A6irtMyNWAfAKZjp6CGpNfaZX8qh28Qhw5SyUMesBf9bRtEr5fCAhDKYYgjGJACMtw3DmJJ78YvKt",
  "key22": "631GFXawAdYBTZ7QFX3tAvEJjP85jJD8Sk2bVRWf8CrPju2oX7vhzBSf6aPFT3wxqgrerszdPBS5uPknq7MW7vjj",
  "key23": "4K6skxtT76WA4DcLJnyuZHXW2RHeWV2Arajz6sqMTbnS7X8ydHkYUA7XXWBVU9QCSV34s1CKia5PXYyiZKcgAaUR",
  "key24": "1i75tohATDiLY9xo2SAoyunkAsrWpKMTSFKiLVPMGkAEx42QgwpzkQLLcLg5Vy246jXr2C3GXjDB5WGLt5rsbFM",
  "key25": "3F2BRquUsF539yuvgsMfLp1fX9xAR5wFeUbMNCo5vLWSKNk9U1C6oysP4rbPagH6tKTvnMQmvyfw5pap3YX1Z2Ed",
  "key26": "3w1Pa66NbKdpj8XFGDvtQGfRKELYMmV6NJvyA6uoiEeEhcD7qcccRatFY3p8VreNJZmC92oMdcx1mdQfJrDuw98m",
  "key27": "3B2gfBzptVEMEyMXr4Ph3eKkuV1oyqULvAUuBC4YP3RqQpgse8uJmdg9KZbzctwgcVvZR5PfYqm7x47Bwispu9Hc",
  "key28": "8vEYBhdZxN1nvdhfjmem5V4SxipXEzZHaKZzay1Bii8uJcnoXo1QAZwynBhpzco9EZzpJyVMz3oBxN3itY336BU",
  "key29": "4ZHPKWhfYxqgj8doZg7XueiQuy5A1iz7nytTVYVqwpyiNbyTBXdm24c9p4x5mhNpwNWmK9avi16RKGB5RAybVQ7B",
  "key30": "3LNANQPeqX4oS8WeDh5E1UBkSdTzU8HZUT49R3mNufwnF9MVpuihrp47ocmgveDM3tpnQYJSp7xTfTFgnH7WA76n",
  "key31": "RXPmNqsteURzUoGrSEVxXLdVN3dAw2BQr89EoFfkDo6SLzBmyNWD6iKXFXWx4wK2W6E4ZYHNZQkkfkYu7cRtX7e",
  "key32": "28ASFhx1kEx6sWbniasJZR1uAMBAyQto1A4yzRRAULFXiZCfjj2hwceXjjXSTUqEEuNkUz2DWCsmK7b6UConu9Ad",
  "key33": "pAcfTirnzj8skUXHXanCaQFq9hXajuQpuLYxstLnzxyKmzYyaGcdtz6C22ZUeivq9oL9JBZALd93bXpsYnwcAxb",
  "key34": "wbip1xMSKLnbHXR2cEABVrq4DAUik8HygfDd71ewzFuNvmhneQJQVKfrNAgwTg4hHD2BY2wFys617n6EngKgGh4",
  "key35": "562ZD7ch59JnmSzXHfNHhXpdfz1XwAwzHRFiN5Ex1Vu74W3EWxXVTPyCgfpTwwmFfF8XMLHve9FCx5aiXt7Qafa8",
  "key36": "3pHjvbvEavba9nG1Wk8uyZc7KwNpoiHCoxKEUdj7Namq6KbSVNMC71dLi1Ws7zzrwtrJ295VPhSi66JKsEX2MEH4",
  "key37": "2qbTEz2wgxGnGBfdTTh6Aswxnty9UM3yCvayjVU4ZNPLiamBZK8XyEWeiS5544SBpAVJSLqRUKYxUaJqw7ay41S7",
  "key38": "UhqvUMga9XWHp2cpFdWusnFmv7E2jtSgGgit2HacFibCAuggGdDfsCCsJ7EKiuEtj2W9pCwQVRJpY9Bd1ibmX3a",
  "key39": "2afEwFph7de3pJYtNYJgaWpw5w4p3aZBAUSSArcDrGJ2FNqsa17UjK5brMFea6DQ1qXq8x3fbPDHvc6bzNrhBY5g",
  "key40": "3yRLiHixZwSJCQR3Z9hRe4fu6sr5ntPXeCz4q6zo4LPm3UG8CByBcgYhZw9XwLpZbrKP2xeSJipqWUYfvBN7u5kL",
  "key41": "3HnsYXoqk2BcKYNuTfTDDpbgbymKsov5Tbu69SMUXYauwnzxqAybh9Myo5v4AiNHesi1h7EuR2X4fJtnJcM7154T",
  "key42": "2QZtT4pW9eH9ovChLaWXir3CPfaepm8MzaXWpk4wRpFumm72PK7zeN876cxYNftc4fzmPPJgicMgtzfpV6AyjZtz",
  "key43": "4NwNocDhNtzeBzoD9XsJRA7MwDPex9WHsGi3VRoxEXDDtQ5iXoNAn6m7LVzResfJuBAp4AgtyXcmEUqt5izQ2FZb",
  "key44": "2C7EPJAsVr6r11f5U6GSVFeWqmAS6cLr8zC5GiDXKgtkLfzKQvvWhS5zS3PedHvdC88F5GMPcQvJcZqrpXxAXmAj",
  "key45": "bB24jpckuy8d1Lhmc9JBh93b8B9s9UBYyGHp8oSV8qptVhWm8ZktyP2ymVMTWnyxxkvY9Z4ULEFfnrTDifL2fqD",
  "key46": "2jTKHGJLrGSrSZ95spkvPzn9qUSMLrzUvLTWoTX8AK2iWFry7qhjCnKicExccUCSfsdpnwtjgGvNNsVaUgJJEq6C",
  "key47": "2Djg1MA1eSywKJ9jip2AgXpXjcZWXuXmy7nT7cCSd8nfzu4qJZCyu1tk72WdzbR51UnQUKdrvcgm9EgGN6XxBwXk",
  "key48": "faVUpsL4GVNkDvCrq9z4kZg8VTiwcY4GBdM9kjSfwPAZfaZh5yZhPqeYZ192TimS3o2dTq4aLgNjxnQjRgoRp9L"
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
