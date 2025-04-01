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
    "4y91oQGKNPfxjjxC4myNKRag7NTGq4RbapXf1SEuSQdpfDrbZgsCXWnBSByjAMjza9g1eXfMtkaqhb8HJgjBYS8V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2TYhx9YwxNzVnCw4SgkAN5LUCcHJDTjrQu5ZEQmV8XTXm6fdoewXBnXxiNYjWfXaKhsbsA5ep7AAiw671fNZfvLz",
  "key1": "5pyWJ9N9Vcxw8JdaBdimH9zB5oA23HLgM4P4WcebJugqtqZ1CHd5xn6qjwAF716Av7qYaUHmM3Qu6M6wf16K8eHx",
  "key2": "4iNaAtFWbkz4jo55WdQ9ZVd5KAjzrbdThdVmxc4g8tiwra4L4Nkmfyf33eif1kjbWN3CT21Duh77TipMxeH9sF6r",
  "key3": "48fNZmsYcETqP6ggAHZjwxHfHrTYut32ekKDhHgTikqTZQZ4pwHcoPsehDhgmUbaP6axojRYQVBwu5NAiDxEB7ZZ",
  "key4": "4SpJSefEZyxZYDNWFuk15BMW3iyEhM6fjUvDi7a7Nr9TpfFMSLb7mk6GrEEMxE83u5r1H8Vk8dTn8UrWyRVntiv1",
  "key5": "4Nq2zkDLVikV6ZZGasNGZ5ygnrUwWdtbTFAYNGHJs92DULaHYCnW5gr41VFQ2ZHSaCS8fpiPAKJDxMaZdvWHgtSi",
  "key6": "T97GAjLv32d6NacLZk2a9iNMSSxvgMHGNDFeKnAanKZ7zd8hk6v7MQcEPjjcgL1nG4hddR6YHZD688qoRpNt8mW",
  "key7": "4ve4E2F5PFhbzCGP9odDu3NKcAXbFJ2ozVUBcHiGibCzX7xbvQsy9iLFSwHYup9qPTLxNFoJtjVek1L9Tode7JwV",
  "key8": "n1R3feAEcE6eWRHFAfb985PR3wBpcmnLBbEaqqZqGKLiHaxX9HnXv5bhENprNLS3Gs4NHDUHfq6QUvQnYcgebfc",
  "key9": "3NjJaSEGCaxu8X4hEUip6WCbavo1A7DUinHw2UawWw6nPyDwnC5Y8Yk81tTESGBu4QchBWCGLJamiekNkbrT3csc",
  "key10": "Gf8pexyVWPinkZoWTZq22AB4vXkuQs5y9ABCz5UsakUv5EEvbCC7iiw9uoK48md7KYPFPNDKZaXc2FM23SQUewM",
  "key11": "uH9YdcDq8sMcjUcse3C47JGuKPBPguXpRQJ4rqTynUGQ68LKpkRCFotVwHL1k7TPEqpNuy7LwEjj8Bx43Dm38jw",
  "key12": "57zkCDmUxBvETX8cbdrkddgTT9TYNha9oDRLN1hKRufsy29G3mPHKxinsiYMzUGitND6Aj2npJR9GYBxhA82VBDE",
  "key13": "4cPRUc1Kp5CDxNz6wnDzaEj8EECvGu5yyosFSyQQjLWpFTRXvawaCq1eGHMxZyCxHpx4NEJBAHLULJr85EgGivnG",
  "key14": "4LDYsHzQtxzS7xjtDmYXt2z7vcEfeSyKP4FTYyRbSHZ7gVx2SLPsQsK43N1X4vaNT3gEyhrHyYSZ3fyp6r3W4Drg",
  "key15": "34V8BwQK9XDiY62WpqRwjZbgh9SVVsc83adsa5F2qTt1ndX4sNoYhv6i1qoCizEaSuCoYdA3DLKWKUtqJ4qWmMud",
  "key16": "3ew3RFiDVjpJDS1tzd1Aa5aBCUw69gszPgUU99rcy4yk8VgyAix8mYyAMfprfjFxZ8bgPgxj2pAgFwTe8sqMettW",
  "key17": "2rNrqi1wT2DjwMxzcGeQxy8ESUkAYfGwwFQiZ7EiATEVqgnVfLPRbg1vfGVLvBnFKjGfBiA96tUyTBArCj3WB3F6",
  "key18": "3heE1cq2a26jTXSVbnWSDyNnV8ukfeGZjvJhShERwvDHbEoaSVQ572MNBjho1k9271PSU41DQ6quCjeogE6DP66G",
  "key19": "54CpFFmUoJQufVUftMrNZRsJwMaAYhereRe1SKthFV9vFSrtwNiX7tmR2oHEUK3JK3TGBEiq9xEwxqGgBPLrfAqz",
  "key20": "432deFh9A6FSmebx3aF4gKk5qvSxU2cuTM2bc9pqhke5jp8WycK2VxhF1SWnUpvkGN4hmbzVb2v1AE1sUMc2zgZx",
  "key21": "645Ba7DvSGXxPQxCJKmGoW62U89VWFTViaRg93m9WkjZUd9TVJWK8xfUN8ThhCfrGxMxqsCiycvnHgXd9NtVemFh",
  "key22": "nReRBJPaT3NiwebBF92mgoYa34RytCexQFH47MH6h8NMfTfndEvHC65BQppewNksKXA4xKQ6CvcfNK248VpirNz",
  "key23": "2atYyjrFmFi3oYnDcZUCzDiyfAMMd2eoWMYz4uQoPbvzQhWmJntje5PoDYw5Tb2Mj8FExbpb6gU82jQNNTjAKhcA",
  "key24": "cSVgwR5UF5tsDdee61FRsvjHKf8dX5hRoi2aawKQ98BaxkCdbKDKyHUe9VUyZwRDNT96o3PXwMBFh2DB8QktXAp",
  "key25": "3QcZ4ZMWTWSDGasu5X1wqkEKj8ZfUsZPyeqijg6x7tJ5YwiKvNXwAwnyEDF9vJHZ7ngucAuejXFFihJaaM6TsWzd",
  "key26": "2BK18djDxcVwAgYNVFGVTEng3GY97LcUqRU5pCEPwa4BgowmrmxwfPgQAwp5zZCyd3Sy8hEk5pH3P9NZaRNeBLB",
  "key27": "4gcbtPfcyTGFSvEMFEobposHRrVoC9Kby2V1AzK1tSH5AF7bJGzfKr2o5YTYYrb4iqbgQRF4L1dnSEs1ESahpyGa",
  "key28": "iGNUdrJasS5UhjFzBPLKtzBSJmeDfz3SqtuAzhbGXYNo4Qe4zNTcpCs1Twe4Fe2DF6aUetfqDP1gRdkA23f57GL",
  "key29": "3CjV1AtqPy9ZY3y6bc187kmjQifLdar4fXpVDwF1NiVgeA5t5xLtmno4wUj2ME8L1CaisZMv11Bxuqs9CgSC4ZxJ",
  "key30": "2Caj9Y8koy7ATFxGezaYU4D6fJSxjoUFVP5K4UXrgXaxEBkrZaGZ1H5ASqwHT8a5twjagDiaTEHq2bRa1GY1Fh5x",
  "key31": "j6BWt3jj7RUt2htGgvKoXdrSFTsDM7oDytuP9DWueDheLhQtFkfvaETjAc4tKLDnkXZEdC2of9Xa2U4NKut3LFd",
  "key32": "26rrnvi7A11a3pZQ14gXC63NeQPHpGX18w7KkwCjWYMQtD2C49YcP5B7o3V68rM752Sod26AgdR52giH7Vy2Wy1R",
  "key33": "3VvRwqZfUric3QJMhgBfAVZYrrW8i7hxpmot4T9mSXVFoYEHRoEC8ddfzq854hbZWo1qdCNqLE1gGGNwfWpXURYQ",
  "key34": "3sfYnSsr32fRUPm9DvdFwyS9L2WjcCRhjQM4LtzTiuBRirFarKdAK4UGoKYRCMNJSfCDdbxd4KkFehdKzhFKGjjj",
  "key35": "2U8cMqkoAahGzuCQnLY6RQmhnybvVK9oRLxa7emAdx4nTT3nDwmBr1gSNx8wviL8wfLH9sdMa8c3r5pRQu7c3zqz",
  "key36": "39mLDnqYeB4EC62EJVcLmqXihNFLTar4PMBFeRs5yF5PvyPDQDvT8rUE9ELPAMAN6jN9pz2MWZakfRER6uuhwWq8",
  "key37": "3Lj5S5fAEaxckoeCeX1W6gLGUDdjki6cHbMkaJeVV28hXxB6pGMnZv3rZbjbbuouWPS6KY3uHidga615t6Sm2Tv9",
  "key38": "4FaCxSUiprUnzUGqJiCQ4t1qVtvs7ops5CK8uri5E6A9KVf1wbyFWwkLsuuYTYMt1LMVnfuHmNHrC1FwLBnKfKpS",
  "key39": "5Vnoh8NbN37nAWzwR5ztMR3MMC5xgPkzQQMLNX7YTXoHXBEJ5vBME7X7n4dni9yjvVVwUBqTr8phbN9f3jpr8Q8W",
  "key40": "4nkdVya3PJ9yvs7546gRevYGuHdMYtkQeL5nXwRr9oEUsaC3jKrjM33tCBNuykxvrkCALHxBPxoDfovx5sYhiv2W",
  "key41": "tPJiz77HvVZ7G4AfgefBPXiWWwuKWEPy51mqqFtH6ftDpde6tR5Gq7dexRFWBuRp3sJHmdkXUvGGd8TmwkuUywu",
  "key42": "4sNtMvyUTsAWvrWXtRYdvt7Nu6ZWay3NfL34SFkSLwhf4CoXsvA7XS1mWgGzdfAYQJjRNfr4ke1UEKttWTZSi4Sx",
  "key43": "3zkXPVEr2CpxYy5iVDmgVaPxjpY5BZHN3wCgnKSLwxr5qPfxetNe5jedeCrKzVcXXWRYXq7zXUhe25vtttRdyEuq",
  "key44": "NEPC43pAD3ZDGZev7G9TqiHSn9KnqR7j82jFfNzGSULNHbiiqn3vAYkpJGkHWysUmZMma6WtTCuenJV8NMLpx8w",
  "key45": "43y91Src1w9Nxy2U76PUsRK5BvivXknbETtQs3JDsdfg5zLZjqVF5FMcG7Fpx9c4jtunWSFzqPbr6y15va7a8XC5",
  "key46": "5ppE57bVm9BEabZoBdZhfBS47hzLCopcggiigt5tgKEryJ5gj3BQr8zFPX9fZTaxMnfW9N6BZwAfwx9fCr7tAxfK"
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
