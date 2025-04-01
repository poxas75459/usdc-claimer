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
    "3Ey17qQKST2ByfEumXYyBGfBjMWSHYD5joJAEbDeTkm2Up3qkK8RaxRRSZqcjR7YAKRBfviSpr2EMNgUCr6mfWT2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vzob2Vm5W2qpkWkGfCwmTgcmxqAhcApRhWunzAjaS4K1vH4skHdAcFoWgyouULVT7sk7hEntScRvezWFw8NQjDr",
  "key1": "4xWXZk6vUofpnTTnQG8DcXUogJFBBX4DqJsdToTr4uwxyypWWtCJRxAHGkGEN1FtJxU26esb6TCYRNby2XJYKKhk",
  "key2": "5TysaYs8TgRQw5YTkoPvrdRgc2f1cka5ExsmPEKZ1Eb3pAVeT4Ls2oxGTVwpBAwg7egyZb3TVMAkHJ5XNWo99EVJ",
  "key3": "3edQgzn388ipTb35UEAj51xtnVor9msDWr7ry7JBdVGzFxHALuRDfR8LnsVPZzeZVuoquBa8KqNZ6nJNyMTww6u7",
  "key4": "2YoPjfLpSswg9RebcvTEgPJigL4WsedYtnDsvVRYoSAJ7jWVw6szeMZFSQs3vr18weYUU3x1VdbMs9TY3LDLi8jV",
  "key5": "2H1bQqm6qznW2atinqN285bZ2nfFLa78J9TkCbcNwbF9FgKjVnVBBkT879eH1PiHZgQsAosQxLCTHvjdS8FxhQYu",
  "key6": "5HdMLeNnenqS8uZSLN35RD4eEhWfmXxqWF33QTeVHrguaVJryUoXFqkVLsMx1hnt8DDXGkGQdq79qWSqsdknfnok",
  "key7": "5zsQDwwfTPsTPNFPS9YKYQwew6h6jbKEBFGeS332cYMPJaoGrXwdn1tNyBeu9myHyrt8sbty6dBK9uAHEbpVQVsa",
  "key8": "4o5d6AYDQZ8GFPR3aezVHoPrixDZgBdCYWmbKy1ieDDpwtoqWupJpA6TWmmQ41AYpEYLWzPsc9u6fE979jw2j9ps",
  "key9": "5TLk2PVBzVjGQukKTiZHxhRkhrEHYPommtGtaPx8Ss9q5HaqhtTPuUYsxjDBVPVhdpYZPPez6Zr9k9LhoKf5D16B",
  "key10": "2Ff5ibVR7xVkLWsXGXZCsB8nZ3Xywhg1dTW4arnoWG15Y3w38QJQqFirsFrvwrkbUNoSBcuhH9hYfkc9FV5n9GcB",
  "key11": "4NsAv37Gz7FVLxjuEeAvUECTy5ti2LZZo5z8PypWG6UghD6EtWWqyzen2yD8cTJUrBJPHqPvGdTWJ6h74dPMVUS2",
  "key12": "3DRhpeyWrrzt57HQRibdchZ6H1iRYMriNFHVzPvvNiTotkHAGVP54ZwW4XYyVb3M9TzZUnoybbkhjxoGCojLgx2Q",
  "key13": "7LWNTK3k8ZguaLQ7dRsK75xkezmPf3mRDkaRv2uuTMbpTUvGmNj8SaW1w3kB2vc2cXgoRMPyAj1m41tUTfjHF1m",
  "key14": "5pLPHB9co8PTAiqdQiyDzvjrCm6N9oY7gNdPfshHvHkGXti7e5UAGWUo46nyVwyoLy1s4FjgCJk4SHuRMj3kW2GC",
  "key15": "k11FrAFg1ZT9vChKqQgwS7J34yQALS43XsxDeY1j1rEMGfb8t53PDbByqueoX3MDFMMjohpZsh6e7jtx7SZzHvQ",
  "key16": "rZCxipouQ1KzpLWV4BBrC68DxNv3sujcJ4ToAu5znXbpq23fNgbtQMeiiXYY8KdBCwoCDkPCqLnWsXwy5417cPd",
  "key17": "4FghRbSDboP17AJ42ZMwx3ty3HWg7yf9nJ3LzZfeDmKewEmnGPU53z3wte2qa3ihH4XQHF3P3vtpXWbcQqPy5D6h",
  "key18": "4ykv7zPym7c7FJ42DD9WRkwvvQ5UspMRPt1KdHRGf7r4svYmgbzqAfQ1pTDeoNAX13UULh54b44Zt7d5wfBaW7uC",
  "key19": "3F7FuCzYSXj27fkCEd31QT3f8VRr27mF5AjAHS1fS9sw4EPspXta6ZrYNVwjcgfRYajoRqNDXy6Nqnws3ej4fCMg",
  "key20": "24GWyn2kZLbjfCuFaPwNEqj5A3muS1rWmrJFAQn26pGFpDup2bP2vSTE6N6cX6n9oY8HfnUGYUCSDMmBLY4wwh3j",
  "key21": "6qEMSs3jrfUb3iTDSbiy7tBzkF7orTtMfQnGg7SGExPWFGtUtDWGvnm1v1ZrsACjZzHhqhYkR72WbQnkNsV8XXp",
  "key22": "5ELPS2Hec9gMngV7GVUZXfaAhwUZJkGk2cKsMfgnBrQ94Rho1z3iJfZS7qg2Mj9sydoiQxDaF6fBgvCU9o9QCnRQ",
  "key23": "4Hb7fNM7HuM5U14Rif9KinmBgCuUJGv6vFpGTfSwtZRsE9RHiJ2sLhEUPKis2rEjfnQVz6sbUcDHDiikwFB9vDvn",
  "key24": "54UZyxX7mtCFaDed8UygupCTnefP6L8yjGBXAUG2wztFkBQ8noq2maHDsLvRCsDzgUAgVXhq9G9YFP1ZuHuh1rm1",
  "key25": "5MBdnG3ne2FNimC9tuSZzgfEbSi4BoG2oKCZx7xtnCBzgDecwScwYt1VYgqVTDSvvHb29hfF139UnbQ6jQDX28Uk",
  "key26": "3bQvAzKDyc5ALjXCvaZtdtWdExzENCXh55acvWgmnnjKAXHHCn4o2gRzXpyodTXytwUYPWcK3hSfoAvHYQvxCuiX",
  "key27": "4KLm1DVxuwSGRAXr3ZEhXjDvSmCo3Ye6KhMestDb8KH3GHMWjJfYUEjunURcCGPS4pMXjfRY38msyfSBe7TLXnwX",
  "key28": "3UWwgsE2JQqPtirLdTPr8vCQ1a7mYbJc7TasYeDL7eiEr1hAR9mqtpNZMcPo957WyGh8vwneZqUu3dPEhvht9Q4y",
  "key29": "2nQhRdesou3VMHKcpBJ1rH5aVkYsxj2R2QFg8tVQ3UQxSfVnw4dheB6fLiRjyyGFBDdnzLc14ZbURDptEKLJU2yf",
  "key30": "4Nm2jRGt4Ej3jjjZcC7jubDVdaKHg6N3pTJpmt7Cwi1LNMNMEqC5rJakG1PjysUpvHXyoqhPdq4ywVfyB1Yr6YXU",
  "key31": "4m5BdPzcjRZt6Vc7PrVwvATVU5PQKnstisD13jdYwAPj7cnjcUikrCgiFyM62yEV53xQGyGVfaBrrH8bi5yK5cj1",
  "key32": "53hHxKJgFFrsRbxhBLNZPdk4G7FRBzPS6b47t9MQkJCZKcGKjwKhCxbvKsk2GazWuYYgR6Y5o8rdqnjudKfh8Wfp",
  "key33": "WvFWyjq7k8qkBzJdfoKULvhsHtKvJV3X2hcymeSLCH6zT6MziKdM8a5RfiNyK3WTkYrMCgPqhiahp9wf4jkoHnw",
  "key34": "3wP9UgDU29Lipoi3T29btdck4HoprgArZMEgzQsbVBzbhWVZeNiFyEHKaTJAq6ooVvGHgbJGwpCZy7ZqFvZkkeoe",
  "key35": "2UTh5cGLEy2SkJ5H5g2mhdUUBt2RD8aFf7oknaahxK8syYZE4RCCmCSQE2CCDMMFoS19UwrrqBh43P686E9ka9FB",
  "key36": "4HsEf9juF9sWohB7zxnHRnerxYBajJJtuTeDx9tgQNywJTsJRpqw6Zvr9uFr7aAmDwfzvuS26fxCFydoC6juufo5",
  "key37": "5NXxUsZkUAnrWUHaT7WZkBz23gGxSJJJVqDNkAb83Xkwne5xQwRgDcgXtxL4bU6gmnVu4K79gPxpe7gH9AKtD8eH",
  "key38": "4X6QUZVbYfKEJETbYCQSa6AV8ATuz5bYpbpTCgonb1NznuH37fuotj3X3okMqqyPAaCsDen1mDZLjz1QAt55w2sk",
  "key39": "4wEHxUfvVzXyNHTDJMk8HP2Y6ctQqputcsusksEWTUCct2YzG5xCg4Wc7etfah52aEWVh9NhSeXD6WNJiVuW9fY1",
  "key40": "3hMFg4YsyL7raJBiP9yCbLUiGGzbe37mjJoGDVbDTV99JxxxzxNY68MmHCHk9dVYM81SzPrGRTU6J19tS1CdHXnq",
  "key41": "4X6PyPJFzB9ZRWbSppAvoHKbC74SLMqYxZiNvu698qfzuc8QLpmENDXeFRhwVgVMPNbhxpBfA8nkYicbRyVyMxS2",
  "key42": "2nGkisuBXKeQA12t7tr2i1E8XmphSp8N92JG18kHkiVJHnpgcRsyt2Zx8xeLHkeUHdCwoRsXYrGHCvjWiGSTpkSW",
  "key43": "3WiHyM6r6SNcNBZRDqU91F8F2JPhGoJrUbFAaG1GeDFFkpqRAtrTRLSm2HCvQ5R6X1V67u5iMGTaePtEAVL5QQVk",
  "key44": "4vhfoAzkcKCoCvwb845imptJ4oR7N2mYcSzMmVx7CmxdwmVNrLRR1n7moGjvtPyZXwvDmXDWjSKaJVNhZR4jRTBq",
  "key45": "4dfgLmJBGi986ocAUxgUfic5J5LM2RwmEphLK829PaaVE7DBgvd6bUFQxEDRuketAJzsTPrpLysMppn5pVzGsGkA"
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
