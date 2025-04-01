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
    "5cEceXjTEL6ynWhU6vrX26nqjWeanUUJk9NuHGsZheUKgfgfr32eF9sN3TZyHVuJXEgvcV4jSHWjRHSHwSUERRMw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HPfRiAsbHL6uPeD1vNWWbwFjCL33Q9k497mduPqT9NvSNFpfbGfwZCyhj3o9PzGAqGu5qD2XkgBXjfvkJQJvaSB",
  "key1": "3iLSiB4NTxJ84LZHeNq2hTPQWy7TBeyAbLP89i8Di9P45sDcfLgJH73yBd9vqnL4XbWc7gQ1Htc9PL2Rcb9v1WR3",
  "key2": "4MpqUEuFcGRj2p15g14aZPyVbeKBKcZxh15JwRf1GvBpAvp7rhVqno9w58s5fkcLCnyKAnCZC8STsNJnXUcMfvCB",
  "key3": "3ddUbvXX88vZFVP9feWfCiLtGPXvKwLZhq4qPLh9R8L8A8jhVSCizgMhEhXKqEFSinif88ZMKiB1ih9DjyE1WbM1",
  "key4": "2GfZMnGpzAavHRiQCv6iDHDGXHaocxtpnzrvD7gWgtp658TdtRQzaQuSeEik3egQuftwpkuJVVed6SpQSgfW1otM",
  "key5": "5RtjarzCXLnJpDTWe2PAhy4NgL1j8YcdfmUUYcrFYLhXLXniCRDiH8Uwxmih8u5fs32Z7iJLRMcFGDAFB2TGy6BA",
  "key6": "5w1NaivkyrcJjp3kyFZEVChGkCq4oVAwkLX34sEiXEp83SpurjeNb3ZLwb9k2dvtBqtXQz961ZHyVFSwESCo8M9y",
  "key7": "5c7gWz25fzZVathUbnYmw8NZPh4fXk2BiG5mrgZAoM1y5nCA5TK5Cn4ZwNtDXBwVNMhmBqxxSNkguYR9ceAPkyPg",
  "key8": "45knA9dxoDfokrcUJkK1qc2UfStWJYMnL75zA9ecrwKsoSbDn5aALTA2iHw1cr2aNY2roQru6YELKE7FFke7CL9H",
  "key9": "WfohN5BVww96HcShFotx5SC2hQrjgYyjE18jfk2sowMFQHpG4bDRbJBmXC12FRSwe3v1zgQ7WLVT695Q4r9KSSm",
  "key10": "35Eaf48HEgRi6wmGhEKQAPZng3r1Q5NhnctgubimEjVeZH3jg4yHu7Q3KRM3fx4StupZPX6nvG29EX1Eum6NiBNF",
  "key11": "2nH8z4HCuB8fBJkkPy2YXpkvi4a9ykmp2MuAi2LraWPhZxowYUin13voMBwTriDx9npXomwuxPW5kNZCWuouUYN6",
  "key12": "V8N8ehTmTWbqWZk7PofR2tjTchQAbwQRpK1wUeoDhNSjLXnbAQFSpUZn4qMc75qRUhnLEiLNTdgJM4zHyz9TUzB",
  "key13": "3oDJiB68Ecajjc6L33sAk8hPgN8KYHVSwXXJ5AtSHcqDziZk9oLP7HdgzoHGHkUnCMYCpVDzzk3BaN8aqrLWPWfU",
  "key14": "51so3M5anoDrMKhPCGp86VrbeGgZ9tkZpwyyxmLDj6hzEedpiK99b4GaLBWYYdbCrqShDPBkEYE1XfXPQ1FDRRaw",
  "key15": "35k49Cr7hZ9MypVrWpzYJkH2nrFa6cuG9s2rzfCU1TXNwphQrknDfx8rWST6BugJCn8xVKZUgG91BdpC6wShSujb",
  "key16": "5MuffYREUSZm6Kr6RPx6AHbu66qZCNgVBsPaqCZDgCPaE5SXjmb9uZ7CwYe5xJ89s9n145azABzX5DxSVoavAH32",
  "key17": "4ZLeSfCy6SGfcBGzwFFpCrZL8NGsFDivcM2JfbJZ34xTVaFKKQywt5AAEtyiVoRZv8wSSmtepG3zK9KaKiijQ7nQ",
  "key18": "MZmGHEtQeaoSXzooe8rjv4EwkyRi3UsVZuBeBiVTn1cWgVWJMhhTvY39E7M5Sas5oDF6JA2bAzAV9p8WjmXyHfs",
  "key19": "2zZsr8AAmSEXNXZrR66fDsR15cPdQtgCL3rgRr6XANLE8rhDD51L7rm7ApFRjF37zct3MoekssogFRYuL8Yhj5ym",
  "key20": "2oZRkh8L57KEZBqmjRiyFGc9XsXfRCinKV3bYW5zfT2ra2xBMnvwBKoagKSESHZUGzTWfrLa2mZC8uVfxGwMp3ci",
  "key21": "3r7P5aMhjKvbhRCwuz9aFGtD2RtxmJojXCsBuhQ4Kb6ptKwoHC73cLHJ6DkLTVDVh6FvH8pxSo7rEA4KncohKh7q",
  "key22": "4meZzpSwv3cZUybnp1X6owDtBbLwFYMy7ssT1UJ6L49gtJJSegrWB1uEunuG38BkDY6nohbVMUXuhCLQ2eV9h4Pb",
  "key23": "5AAbc5ZEfvx7ogVhczNxD8ftHc5GxcnRhTKHqsVnxr1TiCrCRM4BHJRYX1b49H6NBjus6N46d7LtgxeFnbTaR6yj",
  "key24": "5fovVf2mFq6hdCvfF8Fhj9UPE2z2WJnoyQQQPVHDxGnQdCyjnnpv9VsSEMV7VoGPhx9kUiumam7vwNpNLAzXshBk",
  "key25": "3jzETon3jw2RUGG1bQzMPAzkFge4jiEKAhBVhmH5bF3mMY2u8i5fn5xAwZ47ZZxQiD8xz23PkRSciCh3N4VbZg9d",
  "key26": "2LbxjK2XhUgjxS7Zj4FBD3cF1pUxp8Qn5Cg3X9Y1TGTW6XENUqfcSU4MDe1YRDvpaRLe7UTdLSys3BjzGA5QmUJm",
  "key27": "Sw5VvgXnJASF2Axw9bx6hyHHA7r8Nh7Sk95cRqo4jnAsaKhCMDgMUiXugjQqU72EJevYzCWQZDLLeJbSDZvbA7n",
  "key28": "355Mm6YNaNA3U6SqTkad2ckWDU2tvBzWsSKtE7QPZyW75t4pgUFYyu9VpJGfHwd7JA2xHgrgbpGTaArRJdh2iRXe",
  "key29": "59s3YvgprM9TKEn9y8JGEUyacpoUTAPT9GNTomT3tm3tAQHcXLGX4iDa543VfibdDEdH6pwL8jFsKxyeANGfEyp",
  "key30": "4ZDi4myJwjEawHbo8PNquWxJBi7wTVhXeajx4npv4JK8Wwg91XsqDWE839DxkV86C3pEJsdd3D5zCq92sKjhYHmK",
  "key31": "5FTKTW1WXYtg6gutQGuePYMjgCG1xXQ3YzvRon3CSRQfmZT8kLxRgffGTzjh64f5nJNNrvGqEzor3UaDZUNQqS6L",
  "key32": "3i4vVP8QSfHmfkrXx95AooPcRtgGR5WLRBSrG552AXoxKM68TMNsrcDjGMCYFdFwpQep7xwc77pVUSnyiq6DQeYu",
  "key33": "vbWBbcA5K6N1xykYZJuW2ADZW6ymPQrTqQG4td36HhmQ1va3yGxXU6YypGDtLAmmqW4w8LUhgocrvqEd6u483dG",
  "key34": "Ne97xNuVVkQcnaTmfZFXBRD3roqrxgvbMNABgZpaztVYMrrigsmTdDw8BxVVQ4hHPUtFVmWZuBH6uq8vxAextZW",
  "key35": "5BFsqxHJTDpryRoB7HEXqEMC1eARrAgER4deKDszDTjQrRNh5hRtmhSJ1LUSW1G3cvT19uXwqz4s26DRqZczc5Ro",
  "key36": "3FJ7prCuQpLmhGWD9Tw4kayRuN7x7hSa4LML1ty796KhEeFuYFkTnLFMc77Z4iFQJk6sz3iBZHaMDbBFveYsLBhz",
  "key37": "5hzkbwEntdZWk6AuCzForU8azSTSUvT445LAUFGq8B4hppFgP6Yny9q2y65Xq1n1EQxQMH6udEuXpGhdZxN7AMx9"
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
