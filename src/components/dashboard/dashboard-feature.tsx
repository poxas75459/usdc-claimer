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
    "4SPzjjHCdocbBVZ9nVjeHXv4EjZXQPc7F2PgKPNtkph99LYamvMrMuvANDkAVdeRyBvCoEaY9BJ7p3YoPVXnEhN6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61aa75LwsfXnpameViSak6rJuG1N9wQWmx97FEJgERunz7x31BhH9epqMdomC4EpgLy2zAQFAsVjxtnASgXFDFLB",
  "key1": "LTchoZKkXBv1zmD5UENZ36tSGFSkyZrQs5G32EJWTEnCupX3mHxwrPax4M9kixHfmBWW4oHPRuvWPt2vyLyCaG2",
  "key2": "4xt6aGt1Z3ZFJhTKF9EHDPG5yB3s9cVTKYDgLSKDHRBuL3zosZESFDa8GPrpjUBBWhgL6kbAWM8j5LphRTUXCeEw",
  "key3": "SLsyPLfvHRLixsu45NuNU4nY2QhACZuPA4tL7VmWdYr3uhcAB5grZEgkNZzeZVBnhXJcoSrHFizAqHXXtkmWA5D",
  "key4": "5ex497dGVfrPxkogBop4XqtT5aftdGzrdPoxBkBq8ykE2A8k82snpinuG7VpiQCeqRbLhuAaVxJGV7AStdQNbton",
  "key5": "5ApdHb5hmvoZWUQEiSbJHhycxys4DgFYTLhnuk1Ezi4mobU1shJ7mA4qJJgM7uBF9csKwFTJagnr6TZQXnjVqxMy",
  "key6": "5K3P5d8cSt228yxESPEnYJwYkibPzUNgNV7o1fj8fUAyWs1bwXDsDxNr1oA3KiGiKPm96uaDiXo6Z5mXZ7VXDAyY",
  "key7": "iJMjJompc1HrALfhB7xp6GfRno3vAXxUr2hnGafSkEvmkrNKxzLVbWLVJUP3r2tRDv7q73acXroiV6aqsGLXZTQ",
  "key8": "3ASaxe1tByvZpdtVRh9MaQY5XzNFQRHtjoNahhTGt4jeubvfoAru7vLS3YJq5ixkHTrwQt4kQLYRzEwNP3tu5siL",
  "key9": "4jfR2LshwocZa2D7GUqTebAYGHHrHWso7cLcvF4Zfb8H2F1eQRoeK9rCMXEobUcPPL9L9G4keqGtL7gTRRwZv2Q9",
  "key10": "29PRZ1C1We33UmJibAGn4zeVfKngz5CG6LQwBY73ZskxBGQJ3GaRAjbHAaC8yjY4WKNSw4aWiMiCvHk1JRRz1ZmQ",
  "key11": "2SJ6LwmmU6LhwVgB7Toaqm2fcZEYNoUQFoNC73mq6RgxvMqvdymqdwynWqF2QP9GXDBPDJBidrw3T3CBTBi18Rii",
  "key12": "UmYkfxLDkRU4pJ7mSbQp9Hrse8UqYj7MFfrua7upC7EB64hFqBaihogDj5ar4Uazh4HMzGGBgucktRBnuUfr1dx",
  "key13": "5bd1couqCV487HAx6ENmQnMmQFcFhiGihDnZobyntrqHWFXXeUFMKxFqoMYLKF9k8VNWoMzPwR96zZ1CtjtbUGnB",
  "key14": "aMYp5nKHWwwmuzU1VrvL3ZdEKv6tBbcbEkfAPffsou8bgmxFe3SyABkChHS8URj5HAzaNsnx4dmTToY4gMatR8S",
  "key15": "4tGNPRnwjC9mNpMuuib3h2URohJnmKG2wovNVZFKgbBT7VSvzTNuKzEsr8eL82o3MSttNQ7cQsqCWjfEhUSFBACE",
  "key16": "4ZrAQs237BGtbxho3fx8P2bjh5EiZUCEFvuDD64EwSEXoEs9rmmMogXk64g7dMxtxNc3Sc7s12PA5TjMy53iuQTe",
  "key17": "3tcnXGt1aSEqjLRPZca3LS4QVTVKfVk34adidyyRbWgzEeamdAo4buwxdfseYetDLvb4E9KABiux8jiZy5dkNSKs",
  "key18": "59P7TJBQjEZQxskYWLWhR7bGm3ZBDXsQuwujWHUMZP6wMTKXDVwrwyYfNmUqMTBLMcwoGNLMHSH6ttZTacYWFGeY",
  "key19": "22Ww5Mwe5Zrhnw62mvNsFdiRu8eTqaQZbRBs8fQZHCeRW1iB3MdiQGzqhax5GXQburSR9XQQZ63hvErPYqCKBSJU",
  "key20": "47sc8co4yA7CSLXtBADZ8vPihmaDwVLAZYQ64Bt5kjQiQPgmBcAjkmbMaLyL81nGCe88oTFj53rL1ZHRPhNxTzU",
  "key21": "rJKHCsLnK21WHeoLjsUqDbxXbpMrWa7pHiAm9xgZAhEbkjefeZVtzSeFobNek2EqdhM6B7iGHXukkBfhLZNwYLm",
  "key22": "2Z4rLUhUe23unoQGJNHXLYwh5KKUNez3gg65NM2k1kec9HD133TN44CRrS5cwqSiKaebbnyQStNtCtKB24q6Ajsu",
  "key23": "51FBQqdkmnXiEZ1ojne7FkdL7kHHsaU17QfTqSYXKjFTsekWCFseuAYqKgtSeECwZnCwXfZtQ41jtV6hPrDPkXWi",
  "key24": "2Ay3WhAzGBqmvT9H3fh3YTBMqphCH4KnteVxNy6Mqu2mGUASwCd9RxgZPf49qGfLg98dVVTe4W6oyisXMxywoAba",
  "key25": "Kt2tjVXHXZFpfkhJ59BSwXQ8zTmE4HPukpX5ZXX94kXNM3hDZZwbSPnFy1mgfuJr8G8WNMp437jq8SDppaiXJbU",
  "key26": "9sxYYYf4ht7HSUTzGZvgauLYCncXmZ1pcvCdwgeqNzxPTgoJaGa6C8HnT6Z3bKAeALRMLLRkcjTQgCkLy5aNhwZ",
  "key27": "5sDnRjqE3AJdxSohDBb38hvfCP7bvubq7GJo55n4dkRy6ZnuK5147jXQu6TFDqyjXsxorKyEHXwqgQv8eHyMdLo3",
  "key28": "2kctw24KsAih9Ycs1hynFMzJHhrGqNpStWd57CSG6zFgey4m1j21iGYpwa74QKiYgsqxnXTadRDbbVL2TBMBYfXw",
  "key29": "uJJuktx8o9jSrFzKxnqy51sD4zq1LYxvDnf4ztsj15LpR72Rj9xpra7xVG7CytbGBPthfyLsqqm69MVoiLt1QK6",
  "key30": "4eUMFacqownqrAYN5Py7SzGeYYFFrVBHfE1RYAarSScMA5abUr4FeqvDRtFGyygMEEXTR22E6m7p686h22bb9p4f",
  "key31": "eHj2zJd5fosMRNMpXmzEtPSS5HLgjEbGK4VYxxFU1u2ZVmhiKNBkspiGjUvgc7g5sGmditncAkeUsi9sBvSN5aa",
  "key32": "CdSLwesTmBQ4uoRGWL4cVWH5pb39nAwgEpRBmhJcKhPNBWjLw7TYLrVAWSRXvVWwSoEQxnqNBySnsteseBXHFLb",
  "key33": "5uQGZVC1gqRc3ozXmyDfekqYc5m9A4y841ZNcx7LqbTtB9W1hG47fwCZQsSEFireUwoDPQWWVRWcXGJdYJBVQM2x",
  "key34": "5e5wZt51SY5naZy4EKt7PbQw1jwaorBxQYKSVpANaG8Hyf8bUvtmVYvm9QPYwnC6zxPWMA3XcfMBb7Xkcew7G6bM",
  "key35": "4uUhd7Y2WkKXnzK3RTvkWiwfgQoyw4HBA5En5csYATBhAmwzKBfVmpQD2qqfoVt1BJDVpyVbNvb7vi1dijYqjoNg",
  "key36": "3YxLyGbBXhBVmANYVbmbDsKWdMtSCquz6XvFhyEMujEYBJPhRziBrkzWetYDA2VAr4WZ248s1Es7mosPT6zJp8e9",
  "key37": "5PUu7d6GUdJa4QFzwPuyN67vmSs7kyD975sjrXxC6KhvQy42UzSwYoVCP1aQRf35wtbcwHfieZZfmgq4dHyxvDmu",
  "key38": "UZcYaqshc7jja7FRavmDoenR1YXQAkvEWomNQc1164SrTJgjY6psMfuTyFZp6KHaMiwXtSHGUyBcVNU7Z4iFASC",
  "key39": "4SEdcsLff95cKMVzXKRJA2maBpzNskFhN4batbnBbFgpjj1UUt9hUYLctgzLnYEYFtu7mxHyoapwkFuEzUsWQoHR",
  "key40": "2vANFHhLdcLf1Nj4NwUp5TNv5rtRx8skyMaFUzepKo3HCnPcnLE8D3iFNwEXjKdbLXVFhG7YfDECKKjfJCZPhCCH",
  "key41": "5UESNSPpwfTJWjkJw7b74SHCiuftwqqavJn7FxRx1xTZqRynzSewGLQnFgHkwKejSunJM5fzNLtb778TNyW2BMNS",
  "key42": "3XU7QfzRZRm67pzE4JmQNFFhSAFsRdUhLMjXoW6vmiv4wZ4uvV6iTJ1nn7rYb5nRSAXK5Qhv9z7NtwiFpeNm6bEJ"
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
