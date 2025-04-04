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
    "4iJC7tNTEgKNkasgrvxriZ3t4rYVHezvxeoPvTRVsykcwC33W8Zm7Fi4qZYVzFKkWcx5nPbC8moJFySccFubaxbc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4scB4CRG7qpSqqUD8U5ET7yaQJTrEp7ztfRsh3PDrN8RSHh9kruxnKC5A8i2zHbw51vwA3nkmvUEMsnsYNxi6mZe",
  "key1": "4zYsYwjYV3d5PJ2ri73tuZ6DB2vAeifm1rTu3aiSXxS2DAxT8Dq2NNrsUPVWeX5xi7xTF5Qa3VFAHHdvArpAsGNo",
  "key2": "356HyUiW6B8yy6UpnAFT97H8gBSk7XXeMxWfHAAX1YpBRE17aSE1vkjWYG1ND6oSnCaND9DMMZqZib3GhhNV9fqo",
  "key3": "WJygyQHJpfaZQJanszjC3dZQpCqJXsrwRJE8SArLuqLsig9B8bMGvRiEPHaAmj1qWHE8cUdYNkushveHvYU9Zrz",
  "key4": "ioQWSu49VW8Xe317SYp6iQarPhavBqXTLfmUE9RdgVYfB6FVZshLxEw1fFb7rP7MGz781R4uJDsQQE4wxEgZwM7",
  "key5": "mHUutUXnYp16odLtQ2yZYkQDhfezCT49cUVr3EXAywv59EQwUxTdCg3JZN4m7NvhgG8cvoCRrCm6n5DMwhbNPeu",
  "key6": "4UJmYz4AXhHHUy2K3EhM8DrQiuWj9uDSN32JSgEzEatNGDyzhv2TFUH2JLnTB6KTZCTFMos2H8Z7KUGBYEejQA13",
  "key7": "3zV2rN8ibFAAwTwa8sfmatC466iTeb67FjwbKNfKufm3ybMjznjhYadgQmqtLSpbnTbTif4Adv8TCmQaykt6isZk",
  "key8": "35qg9MfEUdb99Jdu8mAHhrMtkq6vg8dswcP89wQq9pmaTZ8DHEFYXaVA8Xt64eo8cjNwNTQoqVyat1XYisjot1WF",
  "key9": "EEU2mEREcJk6bFopW9d8QMpig5u9KGfnUeoBY4JVFYQmE4MNmaE2J3UnYwhh4tkjZTqbEGpgtqTyaSrpqGgGmsp",
  "key10": "3DchDhLEzmP1yDerArzcRXDGWD8DzNodvqZ7Aimif5zx9kwECNe3muZpLFy29FpcSpncjcyL7RCqs6CAiWhZYQVg",
  "key11": "366TUkp5kw2iJ2feauPbMHLd4kjJPBHF15UvjjXsyohyxESbk1rV1qMuiet4gXPYWfPatfdccBXY8d6UmhwKy8i1",
  "key12": "4N7yCdrMok2sWcrYGPZYrhncxuF7KDvdtJPUgKzAm5iqRn8obfV9k22WMfUHUKomSuuN9jfKSwAdVjC4VsUAijfn",
  "key13": "2b9n2GjBuU3iz5FyXCdFWrd716ZhZMXpwb1mgQoQ8E5zrQsLFcAUwH1qN9SkguJYVor6ropkrcXXFT51uMEWhrmu",
  "key14": "5wpnVCvR6d8nXzgptJq5Gey6TeMg5MGALTRG7A9QmnodCs6ifLVSdHq119XwdufVvEui4UDG52daE73zBhnzz1hj",
  "key15": "3dRxHMtXY3CowPxVb3cvrcfMVh37WPFAuiFoN4XrxFNuHC8QyHYdfZHKh5X2ge5KtQifkjdCSNb6qPKEsbE32qAb",
  "key16": "2K2euhw2xn5Aubfsfqig26dXxbCPZhppVFyL5tUK1YvtiVYJcE3dg8Hdoa94ddojYfGzybetKB2YxKsMsKFnz2U7",
  "key17": "3yM6BeP3d17suECmFLt8krLjpkD6QexgptBaaw2jDLxMLfiaLJ4qyqZyfHDCFcXZ6sTLjLKx2htxPjPfjWJvJRmb",
  "key18": "64QH86Gw9CAiAmztZteLL1LFfTFCrTHihWVGNJgy7sVpi5aeqjDi4fcSCf2GmMnyBdd9ZBhTotWAim4LhDvk7gTZ",
  "key19": "4mP229ddxSbvXMGSqsk3s7PVPz2YNiBtrNyZ9m43iGvkx5o4f99TgnTYgRpY3RGNnAFh8f8EyasQyJw6xWPpk611",
  "key20": "DPGoGwvHz6DaTTYxKFthyPFhE9kEPVD79iuLU8Gh2w89gvmMy8etNK2LPn36sLx3eELVEPF72PYGQjTh95bu2wZ",
  "key21": "5zscFba9pCTHUwDKfsS7KraafK333ye5hmRhxu3BvRrpWzrfoGyShcW8ksFB62wWk6kWRccch9xmWPxvwvyZx8Ue",
  "key22": "24JGXrbKL5RN96uJidgiGDaQeZEHRF3dqdkGWa5kiNw5LhfincVgaPSx8NaGhSF12MhCgjwhfgT1xzwUMivgj5qz",
  "key23": "27GbFQ9ehWQzhFoZeZPGAisvTm4JBxgsnxkAtGBw6M8HxQaa7Knke5q2VNqow2rUdT3jemeki6ZbmKBLXQV6zy4c",
  "key24": "3QCyJH9xfMPmPM8CAmKmbZA3EN7S9Uc4cKbAB9s2KShqbUnPZPu9fkcQivPtVg1nMSECzCofopVWpPag3vZyEPrz",
  "key25": "3wjgHK8dtHUetsSHjNxVCPWb1i1JbgdwLNudi5SBGrBCmMupicDbGXC6UG9qoVJPvTXK2eRYPEaRKaYpzDL9yfy1",
  "key26": "3Q7J9itVXoVE3wUngkjEVQ2ZiTF4RMrvbjArehLkpzkRAQcuZwDG6EfuFLn2j8bynmzbEaMEot68DvoXwr8UVpB9",
  "key27": "23hjPfSaJB7cutV3jJAkkhc5wxGa5VBLdeR2J65vUdfZ7Ega267JP37hw1DbVAMPUNFTZs8bVDsenFsXsqEYYAbo",
  "key28": "3hu3q7n1Q8LSm9RduC9dNfSFx8QEtZFSd7ZcNButc3E9i3G9UrE6Ly6nTWxmS5mDXpNAciXQ7aBYW4JZq8htLA66",
  "key29": "2mShZCuMz3yTtctUTvmJncGtU8ie8Lx2y4yr4hQQ4UHxGFgmEqZsCcW78Lt3MJcjVB6fH86Mss4Y5pCMmniByMvG",
  "key30": "5AAxceeCrUx8S9HEdMpqKJ3Fr7vs75sKUfqX7Qu9mwFKD4tU5xnMYwhep7r2caXTyYgz76Ejqm6qSfdwvCAPXNfz",
  "key31": "3KpjtLg24EKfFq6qqdGj79nhzEAPPhVbyDVAgt7ew5GkPj78GuVXfFVxU7Uuaa5JZVY7KPRQaEV5DnwEg2U4VAyR",
  "key32": "1MtyEs9GNkyv52g61Y4MZ1vD541pdPr87WNSXnM9HGyH1ebzwS4ySGhWNgak4hjqmWBoyAakesgDPA2SLqJefgu",
  "key33": "MR9qNTe2pP5gTdWkbvPYABKKWmjRAKy85AjyVMz6kSXfDqv5VcCpUSMLmVjs7xdAE7NQEpyysBDtfZ43sCtFdAz",
  "key34": "3Djq1qsRcwbCnkw97y6v97qpaGTq1BiqUDVwQHrVLPhvrSkyHH9jf2z1zQcNW1hL4LGS3ik9gEC5m234dHw3aKZ1",
  "key35": "4p9Xj72WwPk4jpu5Y1LEvnyDjwzEUm3NS1C63TnvccmdLNCasPs85Z3muk2hmBNoWEhG7n2ALjoMmWHghDfS29WQ",
  "key36": "2wJoPCuwQhUZVJKTPe1SoE9Zn1CVPgwck6UKeFLE5LRyViZAQh1ReHd8fgoA7oLwTFJuJptM8bn1EFN6VSNBryi4",
  "key37": "4z8eVPja7m686NK1yXRgM14hrAdRpT3wPVQYd2PDrhFRPyZ2WEmXH1H8x87UQ2cjA32XS2Mb84uDPEsrKDrZRL8s",
  "key38": "2KqoxWoWzwewsbEBLp5e17vD6Z9Y8jhXB9BYjShS9WYYrqCApdPb7cTqtbsAtXjCcxswMWVUhBSovUr23oSC6uPy",
  "key39": "4t6ur3L2BMUPfQoxd4CeSdoTGecuVRXcU2bywrLG6K7StZGC1DoSjjBDm22eiGz7tR6nHXYyaQm9scwdiVNWN34t",
  "key40": "5w6WXwoC2nPXx5zPhacMCK83ybobEsVDbhgvuWdYkfNVsvh9ihidE8BPTXcHiuq6arKXCvh6joFJ9Dy6VwXBA35A",
  "key41": "56G6EA6zodYz7Bv6xqcMhtU9hTHQndMNSmqjhKh5q8sP6sYogNCvY8H7vTgMgxqz7bbUfyEjuct1XPfVWBMDPULK",
  "key42": "4sQ6Dcae7jkH4UzBGhmZNTwr3oQBvQmo2o3nGNGdgATJMjge6EuSSu5UP2M3ArDWLvifARazc5fMQPp6Ko2Gphti",
  "key43": "xmL2w7opZnoGpmphBAV5wgKBWA1CVUk4hz2otPM83VAtXovaNS1ZUNT19z5JseWW7i3gdRTuwmNcTxwsZqF5uDw"
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
