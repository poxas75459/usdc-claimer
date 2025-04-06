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
    "wwuRTjbFfVw8LUFMbLAxaA645d9rmJDTrRcwQJJuiuG1SAa9j1a4bqaUfsJTWbgSH5LXKXfwuqRRQSymWBMDixz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nRVq7zeGvu8XAL8P944MxsRmY7oR8rfGaGZG3xpc1g7Ef7LtFU3B7ogqmoshk74QWH6owHnC3PTpfBYXtN9KAox",
  "key1": "NYi6Coch68VY5WeQLUJCH8JYY4PZANX1rnfHg8cTS7ShjTNCe37peke5kD2RijmmFJTKf91NhisxeYGQAJU92g4",
  "key2": "tNMj3ZaEkAFRUpMiAhwLZy1wyR9f7sPkzzDDMpVJf36qeykeiMtqiSzmeR5x1eFPt8dDSATzAW27Hg9NeaNqtpa",
  "key3": "5SGejh5GCzoM6tfC9qu1C2Mzuvn5Q7GJbPoWUm4fTNHnkijDvHBXdaYFVgZ1zENMuEECthQh1pXvwzGK3CRSZnrw",
  "key4": "3btbQ3mtNuS9YZG1KkMx6fGVsmwGM1SEFRbojgEvt8X1yJijDzhayr2yt3JrVpqvXKi5cy3bczDBGy7ZCAyB6XeW",
  "key5": "4GovkAQpLPtwL1RS5WKw6QuyUei9rAJCpgsXmTDwJe3KUc5TmaHVwpWpYFkEEZfkNn7ji68eRTE11mVHVfSfAsxt",
  "key6": "UHYgtmnDWRZdvMtoNBZjhhUDv5cbjZT7W29wZFLXMnCjxYpQRWaws94spb6dQBNa7eHjsinZ4DR7iXT9sk349XY",
  "key7": "22CjuHZcR39pdKnZahcwhNbAzaLfCbdpi5BRdq8zF8jMXUbAFXWTxntPGar4xdTqQWos5gUAkyVz52DN37zLXAmN",
  "key8": "2jvfoDj3YBxeJiC3R99ybCqwCGLUYZWxjUT225SKMjCjexthTLB4xzTdERxGypYpNXPAtQn3RmTAzHisa1Gry32B",
  "key9": "5a6BV7R78a8fn4dcEaMVkQzao8v2wiTaeWtG7FHFD9vkdem11iZydayyWhBPqKFWo4nkjwcHo7WFGu7ASs1Mn1yb",
  "key10": "Q2Rgo7UN1vFvEXRMcn6kH4xBh2mQ3NtF9wckkzF6K9rKsfzHjMPYf6ahGeu1giLmbuJ3VfzHFb6Adw5d71GRdtw",
  "key11": "2UnKaVuW4eLAeiLZ8fYSxQdskGTcx4yfqekNn8RJvf9LTJU3DpXEXLA2y1Am4ZwvUYEBJ1QuvYrQ9KJBmnzb8GsT",
  "key12": "PxCqfeLzPZjdY1bDWhUgXJfgowJKGuvG2FNJpcXRq5NRAbqiwdDhQnWEYfn7575RkZsGeGWGgbVj5Qb19AgdQtd",
  "key13": "59SKxLNVQthSZ6yx5y9QxXVNM2c8ebx8jEe4PrgKCjUCFVAVDTH3GuFcXVcoZyJaYtSY34UGdJvcZRxKFRzAszMw",
  "key14": "2bgyXAf7aYu3XnZESo6V4BLyxTagfwS2C7VtgVbisxBF1EyqpScpL3AgfVLNB5kFCmvq8Y1B6zMB3Vym6pd73fPt",
  "key15": "31rmeJ1sFKHiDkr4H7bGKLvEGYEjFYFTnYikcUroKe2UGF9C1B3JZwFBAT31276krNra6eYvhRx4M36uWy95oyA3",
  "key16": "5Hci2VGa1qcqyz7N9QLbZtEXBMZcjxEvaehpir2K4xEwG2LT5bGg17Y2RFNUbUGH4BuWdJhL5FwcdNRvhYwbwKBY",
  "key17": "M37xXK14PQyXghaK8Kayz4RbLbDC37X28LvqeqZ6NwrYt3cP8o1S11M7SnynBznJUwCHJ1AQnwCHY1AFaJeYsUd",
  "key18": "3MxYE1iWdoPq63y5AXJ147CVdoq3svjnjEicpVggzcpW7vpdxyX65YLoLzibrWdMR2Q8jXMCw5478xz2MLT1GmLN",
  "key19": "45RLU4bNLb6H98AYTSKr2j23YtpRXarH3mpXdBhVRz5kVGAX4NtPemfNYkaw7bXqt8AB7foxHySiaNVRnBkk6z79",
  "key20": "2gezeRZqRdYZczKQ937psk887qck17jJt7oj2uvgERE87fcFRNs7MP9NRyYRbJgGBzYKodCdzQuvYJQsPevEjLtR",
  "key21": "2pKfiKTBxWqAnoPFJdwpvP4MbfDXjpUQn1qKscbwj1GRD6NqKgxLTt4nw7Z8pUTDLYaugLKLUoc52bXQiTk9FXaa",
  "key22": "2TN8f149LBC6nhxjnbcUajrzEJtU61Cm2nbHFBqdVpvkvdkSeEwKUr5sPYuLAVfY4S6eTi7z9QgQj1n2qmAwB9eS",
  "key23": "3wT4thUZvPzhMCg3JajqUDjLzuBKiVyBYS7d7V6Ayh669aT2L6xToNJDseTShPnCamnEtrPguaDyy4mfJ2894YHS",
  "key24": "3tWAaR1HrmngiJJFXJqV9mNTrZE5dT9heAnKRw3rXQxG39DBcCWar8kGQJFFZnfBtn6NzgRpejJc2nF4y1aGEcDf",
  "key25": "3CAtHa3m9siQrVuJmQ1GvXznsi87QAU4ZDxkTsC9sdeVHkwVCvUdWPJ1ay6nEt5oyfUoAEeJW55pMpqD7wY7gaRj",
  "key26": "3mti3jbxe5LzbyxEgRQhVLAP2AN7ee7QJ9FAKAH9hH5TteZxk94JdASCfrYXSaiyS5JnWWZwg7zmdTWeKqrB1upb",
  "key27": "drEegdv4wQfmRAZytP4RbvU9ec3ZJ86oxLSE99H2kBhpx79aKsxcqNhwGZPseyupeWShTDwq2iBRcVmHx6HABJr",
  "key28": "5SmGzU9eGjXEyk5ptNB213xfZk7oGrmaz1AkU4T1bjUQCaz14QtURcPrk8uhK1zHvmH3CnZ35ksVMj2nqjqLGfJd",
  "key29": "22GS4aRHQsJDoSC4YMMk5RVxwUkUSQZKZg98dyBEg4QKiHbL7SC2v3Q7cTP2Qat68ev9VP4YhfpwnWfJQNshVPXc",
  "key30": "iayk2e9moUWfpSHV1RppbToBu5tKnmHDs6vstFDq3FmXQuNCqyjqdPvnGnUrGfMtDDBkPsqk5WF27WPx456hNSm",
  "key31": "E9MK26WfmPDUuXBW4VtQCTzGFg3m2JfmXtK5RpVbxMjDLTnkyWxhNm2eHjDf7iinZXrF9zpircch8FBSQBMKLjd",
  "key32": "3fXVxzcGUtt3tfr8SsMK3k9HCRbB7G62MCmupKptfK12zbLus7NYGrXka1pW46VwPsBnstmq2yYnn8NriusL84Ln",
  "key33": "4xbu33BvSZ5YTd3aQwtZWtXtTtRCqSZttWczpSxFL5JKq5AvxLq3TutAm5BBCw3a8nvGBm1nUmg6AjWwHLjawrsx",
  "key34": "ayxNVU8u2EmzMFYsCFJLidqP3odcuHqoKpg9hUJ8uSY5kGb9NcDW879GduQJ7vdKiHVeErdja7vxwg7eajNUAKy",
  "key35": "njPZkLjQVeorSNqNybvqzmMv3ab9HkwkTsDLTeuWc54WN7xMQ5VCfhgXizj36g7EYnkdcRRRNPT7e6zKknfyUbE",
  "key36": "4hDTKBaDcMmo86Xnrh2h38mDr5dVsSi5GEYXTX7fsdjMzvngVbGR76CSEetMZkE4bj9xiiSiA5d454wVv9qZadtU"
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
