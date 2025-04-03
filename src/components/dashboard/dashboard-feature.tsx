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
    "31iFGjDA8ud6h1HJgtmjNUu4THAD772zsw33328VjG1o7j7xRm38ZxcCZSRsR91TXh7oAdjrSymJjzveQE4DBaoo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nv6cB9LFjzDKQpys8brijp85i23BCUW832rpE2J3UYjacGAxN8d5aghYPcowwiGehD52Bueqc8q9NGbhh1qKffZ",
  "key1": "Atygdk9HaQRHerjuY5EBMZ4QyL8Wkx77i1QPVkTSi1sBhGxZf8K4qEoUWW3o4T25e5zp5s7tc7eKHU6DRrDorDR",
  "key2": "3ake9hQX26hJFvc6EAnvdbtuxbQqqReSehKpfvc4m5UiE5BgH6C3xcrwZTa8GjwPpzNqRmZjgGysW1oXVcGgBbnp",
  "key3": "4XW7tomhLXHw8MQywpaRr5E9DF5d3LEvZiLGAGardbpaV7jeutQincsp4sCvHjS8uAempemBJQB83K8pgEcH5nKZ",
  "key4": "55QARLtboNivyc9ZqhMZT5H52n67WQ4b4sjAYPe8Sbopo7dpqQ5oGLdw2iYK8qx7kbFkJPDaeNBd6KfUjwV8f72a",
  "key5": "21oo5zdTKMKLsCY97zsR4aXbNecLMN9FFushhQ5oNBUsEJjFHcdnMLcb2XLS4mghv1KtpATLdX4xqkgHyMRMxf7t",
  "key6": "5Wp8Va8thNPtCbATZCE99bNJPLGVsf75oSYzVVr8Zeihs6Fvb5PQgoC4tcCnf2UuuakFzAq6pseCLFEeySB97EHz",
  "key7": "5snLHdSnUGXLxpzJpkE9RmzJDGnxffsSF288rP4Yc7Wb4BUZjTjbyKUKgjmbatp4YMSa1vB5dQcB5zV7nT6EJvRP",
  "key8": "ZcVgvqBj86fVp7rLESyX3sgtDrRo5BN62Pi9jSe3HWGzrkG6oAdwhpBcjQPWW8ix8FRNcaCwrw4TGxKM7BCAAya",
  "key9": "knJNp7LxptFnGLkDr8CwbyyUsAQ1pSyMcXvRHt7rAUnYwE5Tkc87ZitjN8LVA7J1PKmtTF55WCsrHhZu65Ean1E",
  "key10": "5uZjKKhMuSefwU4WgWuhEm2THSDU1NBaQCnQNK5kfB9bM7y91xZfKCfFQxpyLhseDm48XYC76428N1zhXhHkWeUJ",
  "key11": "5VYuNr796i6MPqafTiiZG2F4h5ARpHHAYHdJrNCNTX4Y1FadyxX1WvkdRwrk7TVrvSLs1FveJcngitG3sKzR9Jv4",
  "key12": "4MKzbkNcMzf2CwWE2ACqUZczywJekpjKWHE6Pn7ZqHuLWMAi3KHwQu32qUuqDh7F9Gibp58gwrkoTjGLh5CWLFjY",
  "key13": "22K4HCa3gjGrfnW5j2hezcGb7i6RU98Gw26ddy3P1k2qjtjtQcNdVSvuFHnm4pDXueLW4cfBZYpGCesCvmvWwxcK",
  "key14": "38wpncuHaLxEep6MeAeoKEgH1nJXzhhSRz5kRegUmXTzjsVmh5swqkzR7ePUSKf8SxnXM6T8sVySXXyR161yujp8",
  "key15": "5Y93c4Yeurh6csJ7WifPoxNb6vaea1DhSBe2i3yXF4BtqiAVPmhriinJW7gDUsPwGzPtZgZdUSJBkQoGEiUeKPen",
  "key16": "A1n9Yk61RF1Nne58vRxY8KevdgpZnFPcsqjBwThA5GPKBjrBboSn6pTxCe12efzeGppH8defLaDydiaubAH4HZ2",
  "key17": "YH5UVutYzib2t4mJSDGCAFuRtGz8WiyWcKbCrWYuJYjzfe6ULNKwdx2gWXL5JFGeaGrixq9AcLw51Pak3EdLvj9",
  "key18": "3dqkLCxLQ1UW4gZY2QfhwZLR5qMirVc4ATfoQ5Z6m4Dz3X4dGimTKxsKiTTeH4Z2Xy8EaShQP7DXvHNZBcS3ZiWZ",
  "key19": "2HecmCqFRKEyP1v9S4M7YQ1j4BQn6wZV6yhGqGUNqdiLxJDB4RsBPb67BP2veTsrM2qX1caYheDZ2ybPXXSLFdQn",
  "key20": "3H9XGE2sHBJ4wxRCgb6GXahBT7AF4aFhdtx5T4oPLrCK2pm1LLC8fGnWiiKag1N6UJ1x5H2BZ3egRXVwC19f5szE",
  "key21": "4K3AGm67ASFM6LBDQF6gDZy8saM3v2Wc6T12zVbfghCF1rvK1dM6JQqxY6dodDLHycKhpGS2x6AaFFuyoE6aQ79a",
  "key22": "45JBuLydpfXZTzKTs1NUkZNMypeBCeS9prHKxYPkbMP3dweSiFAx8wp1iACZh42ZF3D5McVL1zAUHrHzErh5iAVk",
  "key23": "4q7dbSNgpc8Uz7RmyUFDsLfNW4oWM2WYY31YoAqFMEEDNb4PQopiAbrRV1VoYqwCD155YTwLtY1qtcA2r5DMii2C",
  "key24": "5R6iARCdb6hNZhMdaKoBYn44SfMBqdTH9gEE44MjP4hRQG7hXhgvK9ZpP8cGvN3fdiuVt8wHNx2jV27Q2twTn8RR",
  "key25": "CFQ9Zjt2tbhviPQCMnFvoLEHTEtxUznB3D5cfbmS5hPTYQmEjb2dVu4PwQPmgiM6wQsNniCAdRUciFDUeYPv986",
  "key26": "3DqTxhRevGtqXeGRLgR7W88jM2VbQvj4HDHCJ4P5XRUSguUTC7k7UxipoJ3GR98M7sLPyVdVUeoiNksZh6sdKM9g",
  "key27": "4wdFKu4UnJaU7JpGsceRS7SV2Sr6chNT1N8PbyREH5pVdwou8CZW3zsVHdR6Xx4ThZuqHqhdyQgGXynuTB97GthX",
  "key28": "y7Mynfeioz97vmixkXHTRB3HCinEZDzR1FAQPTULWfq8dZMc1eG3g8WwQUVFGjhVkEkCaqMJ8qrnWKY6YRyoqGW",
  "key29": "626RDLrEDuujGRjTSYtZP5aw5xGDGiM8DfLRsmSXQmU7fUoj3Nc7Rg7X6RMq2pckc7dVERK8Y5Btuj1pSmDiC9i4",
  "key30": "22qf7f1Rpd54NkW4Fsdr4WpRnf9AyNchtmPenqhjnjzMutjJP8fu9ZzKR8VzVkgG8zhYZT6FToDLvgGxC5854xkr",
  "key31": "4vYfsFTMFfzTkZ54fCtqkSVdwxMuvdLQNuwPCUuBVoNApwkE8oAWADtuHAkpy9tfQyvZ3ynq111BFCRgnL8CcEY2",
  "key32": "2LC9Z5GvnZrA9SrQiJY5owJsjP2nUftTtaamzMMLD4Zqb5ZUuigxHqCERAGfQ5888qm99NwjfmFjQHf8pMYyVNiA",
  "key33": "2si9cLp9DJYFnhJKFjZ5MFRmXfPPRYUVcLXPkTkpaLmvPzEzo5aDW5qziaZRzQ2PmBsm8iRE7uNEK5kb7exg5D5G",
  "key34": "3fS9xhS7BErQyKRFEGKGidJ6z6fX9wSeRJsGTMoqHGEv7iqBNx9xrNczW6Jt81hKJgJwB5Uxii7UHuDLxDAGudRN",
  "key35": "4fJqqvnafEvjiepUAD81N6pnNeVtJxtf494732HRoRAa8Po4F1sdApm9AqU2v7PMSFZUmRF7X9LCBTYdvr7umYDU",
  "key36": "2H5xTDCyL4PcCVNffPorPxE8JBXBEWNkoPkqyDX5QHAvpS8tjpMkmNGFeuA1w8PjJgoQaTrXbgW1qo5rwFcjukEa",
  "key37": "4JaCK9XQm8HABmaaeA3dFrCctAnqbc1wqLT8cNJk8JGA5NXfgjY6mJvXPUGEAUNegjo6tsEeJ3DvCHJRbdx1hrBB"
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
