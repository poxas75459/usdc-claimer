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
    "4YmHuVYjC17jhhpkcZV9pBsVTbVtBEyNcbXotFJSRzdUFpKWuxUSQvJ4gxhokKNC79MzzjpCFGzd5damBVPLmrkr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZEPjLv9UA8QH59wG8YYuMmDqxmed9M5mJFs9wjaf4VV6ppMwLbTCKid6Yg7VsrQzwdcy2xn4wP3vAM7CYsrTBjk",
  "key1": "2TRWyvU8LBHQ8nA6u5BhBk4AN6jVXVcYtusjg7BCqr16GULmeBimwArRuW7ezfVh6jK1pdn3Sgn51mFZJDnnokCo",
  "key2": "5qJtgGtNPtCY83VK6L8pM4hymFdTFfEghc4ZFbXWiDCsWExy1yKKxk4y9KgnmkTWNjLoYKTPfJShjRWtGmzPuLZ3",
  "key3": "4RWee8jkBqyY6tQzKuUaVNREEkGg89fqbMV89mPUGJCaSrgyMeKuLLMiew9a2epfhtzFeG9k3rAzkb8vZsmh2aGE",
  "key4": "5fjNTazSaHhhx1xLFgcmTPFJF3bZcp5xaoJodehjAFeT43DKD3HcEfex21nKtdz3uRkiGGGUZimvSjJXSJU3MswH",
  "key5": "aEdkjaXDo7uGiJ4FZFjdnDanheq8BbiXSFMLc1KZzPAuCozTDD74mrWDGRExEoMUjrVohPqyokSkKJ3cNyLXH3R",
  "key6": "TS4yzYtf7qXrzMnRgyh6Z5eZnbRQFdrLLkz8nFWT8f7MnE9uppm7VsM89vDCDS4XzqTMw3vxey3nXVHM8Mkeuzu",
  "key7": "4ZW3yez5WqH4a6H8iC9YX8fwYFm9ECkxM3nHt1ZJdacCJEeJfmzk3BH4yXukvaYDd3SYZmEWwfvvmDrGyKUx29CD",
  "key8": "5sx2atUpS9YuVbrMzbJsVR2XvB9VPeThdrTaCe2QRdJ2K1vkxBbLP8uhCUXVW4GK7GTesviCpbU5BnRZtomrXg3G",
  "key9": "33YobBtxyii5YxRiNn2uY59PJYUQx8d36iGDNDWZtZdMqXB8WVArtARn48xpHNpDwwpV7ftQ22RVzX9maLNjnGQG",
  "key10": "3XixLgnbkjNj9hAKysKGRpQ9Vtkx4VgkRrFtmSDSGM4oDnLRZHnm4gQotYHYXyGDwJpbcnQGTAVjpk4FgbfQLDUL",
  "key11": "4gkgHj4CrQRRYHWjmFiZsUtZP85HeRcc2KPrM3nQ5crUnd3N5cE1PM4PZ2KTn26nciBZ3kRjpqxuF62i6bmKUTN6",
  "key12": "2GsJfAAqauyHnHMryoJmtziHAGnNAXrSNUsZwhb4MJxf3vFQQkUCCJSXekzxKKru9f7m3owamsPvh1pMRyGiXxze",
  "key13": "4cFTSosjEJHdPkmZ1rsfWb6rAmtsoBzybzJ5rb7wPtDbdsMBKmsymU7t2gyf1cHiGLwmgKkS7ARZkru3NbfP7SET",
  "key14": "3L3eLRwMpUGorCwbKwmRQZP5Zox8GL6ZVVSNMqFBM3LoupqyYkhreqick56B12K4r6yzv5d3Bhzav82w5JiNCdJK",
  "key15": "446ViAp23dFScZ3PWUxA7hsNWzCidwLAxtLmMyjSif8C3JL9nP3dEC3ENGgndHbWppatMhj3zE7vtJF7PV6EzrTe",
  "key16": "3ZpA4G5imw2HkT8HEwf5M8eysiKosxmXCfXBLnhu9mfETRSM4afzJYHnqqY9yk8DwhPh8wFYHjvGnfgEgQQwsJZB",
  "key17": "2m4BiRE7ZYgMSSjwdoWqDxM1WRRWXMrZGeRKE7NnGTwt8hQYTkJBakWmsBFDUizDz19PqTVMJ2y6AXJ4XTRreYo4",
  "key18": "QoPs26sigzZudyGWq9AM3aHiFYRmETyUJCBuNWMvJiAR3zwtLcCA57Rfk6ufqvTAM5oz3eRGABoiuxn3nieDBKU",
  "key19": "U4pAkZvN8nPZuesn4neLSNFhaHKr61fXcqrzS68gp5XbG6hTkA7RtvAgyaexEXyYomRSeHbtzzN3rsngmDKT71e",
  "key20": "4JdHdDPvyemEVtQ3nWrjey9vEjD6zdVc8Q3bVvSoCAK57AMiRx32ear2m1YNHTyDLZEyrX3m5VHZZ9EhkGvtqxLH",
  "key21": "qQ2G2ANCpcZouDce1GVQeAeNLYy975UkQRJsccPSEFi1y48X1tFtTtWsdunnTFofvtWpZFGywLgCgJrCuhQexup",
  "key22": "2YdHwWKKD6aDmxNEtZjEWbYft9bQZfR6PmGrhQFEy5f9HWLii8nPsaTzZzeXiumuvGoTprTTLvRMu95xFGNLedRt",
  "key23": "522rxDK9CRBgqss7bGACv1XCLjryT2V3kP4WLd1zLSSQeR8gRwHhpWks2jToQo8i8UzYVKT36svvVjrD1kkgwePj",
  "key24": "5y5cRgzkHE9wEXx6SczZHYUXkJGc4yoh12WTuCwvn9czRhNr3oYwtt1LgjLCCobgFmCGQjoH8E6wTcmjky4e3wX8",
  "key25": "3WL4YzZuw8xPGYnCooVwEEbj3MFvG7KMm3CoUafsAhqAaxFt9QRrq4DUningir9WGzXDzJoiqiUYpvUqzzdWjsfz",
  "key26": "8CV5c7arT2ojWcfotQkoU9dty4UQ8xct441K1TfAzZDGSgeLFdTRugh7jCTWUoSAx2XVSiAgrnApFBP4cuxyWLZ",
  "key27": "3CkxqmSZei3i8UfnrRaZq2rHGDygcW9jMqwYU5XTqqAZqXzC7ydFkyhcmF892yF5QYD1LrYGNZjKo87aouVCqcmg",
  "key28": "2HJvKjyRcALs7TZ83WbkzdXQR5SPDHT41hSa3yrwfj7QT8r7wapjX3AfNQJ8NAnaYWjwVGuCvdNKaQrNpFCxG5GR",
  "key29": "44kx2kvVseg5pwXgQL9pUDY4ESeP524bScA3rQrWcqB8ATU7vmmHufEdAbmbz63WXdmyqas3hZ51HpRXJjDoof8r",
  "key30": "4BknuRYVaHYxioyoPjbC5VTt6yzcNQQVg4fJHyGzAte4KkyjmhGBG4iwLynuTNpEQpgVcii5PmKevTuWjwgub1i9",
  "key31": "2F93iYPujF3LPpALSwDE6jo7HaM8PxQKCiXNTB3nL5akAuTNvyqxgDxEAXc1RbcT9viDN3PFaVL17mDt5enMcXd6",
  "key32": "5BFx9DicfFMDFiaMoJi66uAZb9ZpFk3L1whKeB3iF4LdCx1r54KLRUt46zaEU79LDv7EFZJH3xuTNz5WDVYbY3GL",
  "key33": "2E68KNYqd3cG1JMawQokixCWrTheDfAfWfqwP4AR2nG8HRFucJxTdr7HukUzJghWx7BVu2Equ6VLuX4gJHforZ7q",
  "key34": "3n7zbE313yBeLR46XUKDGBhnaU76uR5B8zuBvwDRjhRc9aRqDhvbHB2CT2zH9o3i6Ldj2JYwbn6w2HeoKd6ZSmb9",
  "key35": "3PrV7XVt9EBN5Eie7dMd6VnTJhqDNE2xk1MLpY2UwqMzXyNzE5VfcWi3JJgYdzosdFMK8tPbKihb9SFaRNCXgBxk",
  "key36": "3Z5ZSXZiXbuXRRsWwdMd762Ny69C4DRakSe9dq3ex3Kuiva2FdKY2yiHXim6XdZTSJWvTxVBLxHALJHTyN1RKi9Z",
  "key37": "rkZAZxv715vQnT9smGYJ8ZMZpiVmX5X5SUXCTtCc4SGss4EXwNmm9ar1iApmZ7qzWyLkybPCnhbm9hmQZ8oJ4W3"
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
