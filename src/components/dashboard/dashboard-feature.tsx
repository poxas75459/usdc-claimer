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
    "2KP71uN1decDGSX8o1HBQ1fkAAqKwiVwFTnsFmgucuJRuEQ3TJhwpZzHZcUuBB2odRDh6mWyGg4vn29Vr4EMwSNi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5eUn49sdrQcTFSQxzuPL2is1nr5siY3dXfSpgE3EDPzKZpW5HFZFqtu8NqNe8KWfzCcMJpgmwCnFBL65nMfi67c1",
  "key1": "39JkGoRmfgYyuftmBcubHEfWb2bQ4PpxzjwQYwvk7Jmy4sgjCLkCfhyPWz4RjDreu7AwRXBcuxE9LqjQW7cCJH1j",
  "key2": "qjHHnbaLdymPddfjvvGtGFk9KoR7rhjqNDoCqq21g1887783m3vjayrVjiFHoxP6syouUC53VLegoj1t9VYQ46q",
  "key3": "2RnFBbxqVWTNYcbtUnEFafAL9R7JjM24yrjxBBWgEagUsaZXDA1zXN1Ff27X2gsFhwrTksV3LoGssnWXD8wMR2tA",
  "key4": "25wbL2kz2CabsFCYCikkpT1eKbRJTsZdZsyVKFFDPCzoz6xVAgffSxZrpz3MwCxWUxp335uJqS8HJ628WWWdGF6Z",
  "key5": "3ogiUt5pTMgVDonzMxTfAyMN9gy1vUTMNH8WaMMMiGax2YdvwtbByhnkxyiWZr5K7mTHfpRfyjshUTmF1732s2PT",
  "key6": "4iw6XThfsdBCXRP1VxP45wC379ycFATZDTRLY4qPRf7YRrmfZ3SmDXCzsoZAASCUNNpNDvkWjZjdfhQfd9FVpuuu",
  "key7": "49jE7bTJKN853AxCbTxfU7uhv7CAi4i32MxjFr9k9o1JzyeuPCPbn76hL1zYoXFVvWvbGXfFcqFSgbeBx2PWSkhm",
  "key8": "mpdYa7Ej3AQF4wP4MkccZJo8iqij9bj2kZVfBUJx7UdFCEZzkNerxM7CGZSWSMrqt9h8mZ6DnDDr9FJFbBXKtLY",
  "key9": "29GFJ2LTUz1BHrH8brWBcwayHvRfn5qDLofb6pwZRdF6JRnACKyefFaGEu5VJP5adNNyQ1DtCTTT2wXPV9LwKKJd",
  "key10": "RrmgskT8MeYKxwGjcy3mfEGZkBjR3Li61LXQiXiAn18H7pxE3ZvXNnGRjHutfHxyFkSCAiqvKsx8YVGAS5DM4kp",
  "key11": "2voMb4pE4eeUrXpdXHAgiFgTHgdrnvHyF7ixgXxEVFtrN3UFZKJwZXFWM5d4QoVm2S5z5KkhoLRSAjGPWbPCSxsh",
  "key12": "Z39BTvzUWr6DdLeQaEqvbMRjMeHHgy9FJEPHkgRGM4pKhr5RquvK2VZ3Ygr79Q6QaBfEo2v8TF8UGFuoLBUn75e",
  "key13": "2oi9vrvZ6iFQpS2j6gmVN4xTzPietXo1PcYKatcTHNV377M7zdmBwQjHvCXgSdVf9FjcUYEjCjDVAARMU3ok1XgZ",
  "key14": "4WjrsqYMNqdtnUgXrYUojp5G9Ww5knmunXabJuNDHFhR1Au7AWmvWGbuFofP1CN2tFnUvu7rdaw8tExQMao6rgo4",
  "key15": "3xDtvontJEfyUYzQDP3gWvpZMwBcDJqtG29W8BM4wWJDSgkUYCFubEWFjxSBS4LvwC8Zj97Zm76qik8XcJC8Mh7i",
  "key16": "2UgyjwX1mC7CCvJDiheQec2yX2CRYSkTkESVFQDuoq1afvTPxcanJPnewBKFSTG5ErEerqWtmjnv9QJBaGfStE8R",
  "key17": "2UHLc97F4U9K5gj6GGcBd8qRxdZnNy29EWDnEwyMqKfx5GPYtnf38pSnM9eb2Gs15iBW4szsVii3Bb8t94ksU8X4",
  "key18": "3xYetRfFQY2FDyCaHYXesmxqPKfLF3YJeDxVsgASBcmFKV1oXT5z4kTp6gXjv99mWYZngQBm5UDA8Czop4amYBoK",
  "key19": "2dYikZV3M2xJNXaBde1ya7ukgWVsEchiHwYd4VAnECGLpUWfiaH5kYexRpHCmx8fE46HYhAchtrRmvKLRhf6x949",
  "key20": "3oqgkPtzWGDLjUvg6gww4VYNiAufgQbXENUvGrXHJeZqwonLrc1jYvy82GGMBcAytWrA2MsYga8yjrHBY3rmv1Cd",
  "key21": "5XtoXjpd8GuXMoqv74E3bnYjPEraxZyCieooVEYGV2XzyuM1ab7neHsDXz5VV1X1qu4zarcV16xVmXT49wppHFe4",
  "key22": "2hcP7oafKQc6iXhMNUTRxcukvvu2DudtRFifGk8BqkFDffaF4JN9ZNavFe3KXAkfr6dwAMbEPHDWJcL3t3K9Ncjp",
  "key23": "4gGUPHUhPSX7Xf8D4hAooNH1A7QkoHEkZqN78qseZo1xyoAnmEpNNCgULtAfLP67PE5H9szcd2ebGqsFZrY41zZ6",
  "key24": "4x36kfnEDJytymLJiZSAo7zRhg5KMjcRiK1k83JqUrhUUfppzQWZTnDFJRpx7z64aVeUgES2pRwUPPYH1bKCD9Gd",
  "key25": "ZuGCUUzBkmcZ5bEbvj1nTv41qDSgAUXZGGaFJMTUSqSWbFzTuQ7tpd6r97y3y58CSDDFjuEz9N5zqaq7Lh9SeqT",
  "key26": "4UPKXzasZ8uqEdFvxXQijXLAiChDPYJpSgpC4dYeJYAGbP5aaQkEX3o8gEBw2NPBXT7RL5Z7n7ck6fQovWMVQyZv",
  "key27": "46BTk5J2dQrnZdd7zagrxThv1fMQBYiLmUDzrqLmnoQhAF2J9hixZqkem6LvtqXbGeAbid7wBZktmPgBJTPEUQuH",
  "key28": "5sLh65KacBAeT5sTbDJDd8wC3Yttjuwrp5dFS9qx9dGtfGJtzeswuZaK1eDXuc1vu1xSERvHT4YzGW7XJnYntB54",
  "key29": "4BLyYLgjwHzQbuvNnUcN3tarYnfRSvSj3poLnR597nRXWKCiXUzqNJoFz9UHSBEqP4oxqYWWQGCY6DvBDWZrKtbD",
  "key30": "5HnQH7HPWNYEpHMudeLQUuTcU2nJrEv8cfBjKJyC2RhCCUruBa65GsHQUrJKm8jEE27zmKFWS2YXHLDLWyMYb38e",
  "key31": "37TDSxRH7dNpXr2BJu4xmzjyzMpTxLF5NQmNwioqgiCjm8stCpwcv7fkABB3BoBmCnXHUU45uhd1j4mVKM9o17Bk",
  "key32": "hgxjeTyoZ5wXNV9HdLUTjonpS4rgudeYti5GXnBR6bPDxjp6PM7C7pAp8cx5UZEKjuVMCqwQyWw2tcnBAR1uwbf",
  "key33": "49Rv5UMfAKLLy44wGgNYZJEPgH8sqyAWnpCiEwfE5h8vBU3WAKYToJPvSYRpAX7DfYTmkrbH7zBAXi5gYjSYprsK",
  "key34": "5tceRyGNmk6dkXvXCSoNLHNMGgBiw1yRJxKZJ3TKqGK1VK2veia8UtZoQpUDJnsKYPUDCEk4cC7NdiViQBHbtx5a",
  "key35": "52L5dmX13aPtHweb83NHGngLPbaE3EZEujAcQNoa1oht9vcck2s8hTtX8FcJmL33aysg9AgRx5DdAvmaHfnv6rqW",
  "key36": "4eWwiokMcKSUtYpYiinWJsRPzCVMryhad29VG3QkYuKnwEDGEWdKDaGPN7Kz59byaN4MgfaMBcGkyeQUTHrj2DYg",
  "key37": "48GViBCuMts6L9F8EYzWSsLpq6ZrZiZXPARwuPEFep9qdhNxQAZpAgrLT9XHc1mszyBMorMUY6FhS7YijXodLHk3",
  "key38": "4cSc8PjpPi66cxJubvqmRTMYJVfVpkbsP7AWvCtT7dcdg8mufC1bHB5E2jVT6b16Hcq9KFTxzTJKsL5trqJ1ByJy",
  "key39": "3JVooySLdE15MXvPRsiL2iTHystbo6WtTHdHv7E87Th41vo4kAit7E1vn6gzvzaQcidMhzBrMs4iMhyoTffLyoff",
  "key40": "3HK2tcNkVHirHRxaS75Y5sqD2vmSGGBnFmUfMcxXUvoqmVieVpJGoCLteTHPxVT6zy6vfgzXxC7AcM8DmTc38hQa",
  "key41": "5oxBGQULHTxq3bzaVCYNmJfD1Zz2yVja5iKxDpGALo2C5vcbEULtw1rfMNBB4jcMbmn8xP2EV5x77JvoTiVzsJMM",
  "key42": "5tyF7aKGLWnpbU3NsuXcchRW8AusT8AmgxzTmZDaWgMJUPGZvtoY1qWpHy3ZgRAjPm1Uz4SwyCtt4eurj9Enz81j",
  "key43": "2VPGZrLtM4WcpS6YN7Ue1cKifzeW2SqyTbrZ4CZ6Z6GT2yLCQqsjhyYko7m4wSHb2irDwWLn9Bpir13UurhYDyxV",
  "key44": "64upD3rSEyiy1ic8jLrdz41RKDhssC3jE96woMjSv5rM3JLaF6gyjBxfkA3Z7kjTBXZxTU3tQktLhwrjrkr8syjZ",
  "key45": "32LzELFudyK5LqFF7DKo9Um32YBxNefrRyxTvhophkovDRiW2HHd9ixgLQAXZP2At8eMjJ5Rwf8bGvJa1oFkpXgg",
  "key46": "644SeyEMKGMiFgtXsGY5E7A5Cevt3CzKgUyQSF3jdUCwCGCyLMNVi3hsSrrzwmWDWk5vXbBLKLLL2y91D4FqhbNM",
  "key47": "442cvFH8nrteVkQqpEd95cRi4mJrCmGr67nBx439QRGth1Ufhgxd7JdPHNeQCUuLthe3QDH51o51tUF4C1fVu5cc",
  "key48": "3wYrPUhysb1ajR6a18xC1NqD68wkAxuR5qHrTkW6So2M7zwUo1V8iZG7W59ExAk6f5eg6h4kbS6X5uGd9K8NHQZR"
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
