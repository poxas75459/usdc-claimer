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
    "5xZonAhcqGBgbuWVUpYCjdcVizrFfNzYzZD8NWsBjFgLNx14f8QdQ4NpMeijpL2Y5ia4HW2n8oPCdAs5E7Zypeg3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52QtH4PK5WUzXXfUxr5GRpi4aotTRySFSvzf92FNATA6SsLViCxf1ZAp1mkbcQJD6nKeXVTkhHikGCDvFMdnSgan",
  "key1": "4sgd2zkpgQbj8eu3aeT5krQi9s8swqrU2F53zR5WUpEN1rKs1kdeWa5iqJu6FwxqcHFf8TV5A6YhPSvFqPVX67WS",
  "key2": "B5UuFb5amubdByQVtvawbzrnXXsvovQSHWt7uHMAN3wb8N7rNfhEpdGAn4zEjQF3wPLAiyHR3jyak1HysjtXWXT",
  "key3": "5fDxa6iR9UMsHn3ShCdMXLx8a6491FdVtsp9RuKaWYvnb8VGKshhBFPWsZSUb1H21jPxcLtfZUTR9VHA1qwr3A6Z",
  "key4": "3awyDFdpkNQBm6cprHTkTB2fTVkY6LdofHgkJRt3hqpXLoJw3sfDCSM7WQMxwafUGRM2AX9cegbUUhaeQ6DVDbAU",
  "key5": "22NsFYHbfngt4qhY5hgNBafCbk256QAQVcottAFGZqjmen5wijtb7UifPfh33XEy2mYuqJQ8UjeydzT1rYLwZ3Fr",
  "key6": "aJHy6VTgvjggsTyQGQJmmRKqes4M82bjVt35ES22oRXFjgDh6nEkmXEJ6FixrkE5zMKxBoJBaX5hbX6tXB7fvyh",
  "key7": "5C8MH7XcuzcBuGHqHVysMGD1eXf5ekTwMNAwm8nSJb7Ciy9xm5UTzUDnzGhpecKfqTGu8YzsVb5JmXk551JkAZyk",
  "key8": "454vWDWbEmTSceUmgDqQJ52gWxV57SipogrcjAVxCxtWk1Kv8jKedDp4xyX2y13AkcCSKLSGoZWx7gPPYFrR83Lz",
  "key9": "3BNoRhL5vTVFdyk9j1JzgUwSorMFa8UayZH4KGqfnTdjcRhkKQCSuY5h775f7PgzMjx12KvRFoLAWWsci7QF8Bd6",
  "key10": "5PFPhamUSHpTHTJ5sFv7dkMJSHJcmnKp3DFDB5UUSV63cctJ2Z7RLoQq3v5ua6fgyag385DxFxLim2q5CxfeHuNz",
  "key11": "4F7XuDr72io6UarAAZDfjAx7o8ZTAdmCNdFirGJcusuqM5ucZzNG4sQWyG4fSxhhKSe2Er8HGYgqP8fVj1YCFiEk",
  "key12": "4T8o3qBvY2pz71QxyVteHcgKDd8cHskWm3s1idoNYMWgHbbherj2EpuSnNHvjAsCuxhBMPj4pMVdEj9koKyQeRf1",
  "key13": "uTDPJfCrKPXkyaiquYXe42j5icLwLXjqjfN5Ba5ZoM78VcRtJCYB6nyVkPrgn5XBysJ2buQY2m6ge44ycro8NBr",
  "key14": "5wBGvW5FtUtGUMHkGNHiTfM1z2cbpwoDFnm63Piw9yyetNpP9usaafUAEbgMZNDjT85CqccZP4H5nWJXTDD2518U",
  "key15": "3y8a4RJQcpnkFYngfzD8aPac1jBHLzmDxZ1pKHS7TRzjsNoxcCGnvRJbzyUwGUb8fxiDEGdAmLdseDuNByWrGA3Q",
  "key16": "4aJG6rJY4JT2gZ1h6mAE8jgwqVCaSR5MWRD6KEiM5xDyDDyFJtQUhZxhDLWuAHBEXN4mXoA6ocfcsJsAz6gHMUbW",
  "key17": "5d3NzT7CYWpW5hgrm9G8htX9PZtfvokoRNtxVUdHrNJMugyrR67ZEDhQqQJKwnuUA9Tx2mFS77SobNcbES2hzQBR",
  "key18": "3RXEiELxN8XAf7WeET4vwJiJGN8PkNQwRdUD6pfaUms8EWDaM7AiABa4AGYmqVjsRk1NuvR6zfRQkidtrV2jBTei",
  "key19": "5DrAT1EuovXUabRbBZXRD7Ceayumy6kQzy3j6bThXjbRLcJxBbaxzwmn5adHxDfibNqZWUeyMupt2j9LwTrUPLQ6",
  "key20": "2AmkF2uX4D8YcLavjxPev2N2J5KBNuUGx74S9sr2Q55tXJ3cRhvCk8mXNT1pQH3Ssi3hhe9mZJ5oLbQDqJN8s3sP",
  "key21": "2AXP31HCnArm5ec15ZotEBUv29yFncEcHUBB2kWYSvquwFMcngtc14yj8cQggk4ELApjntNbFVjsDgpSTF9usaEE",
  "key22": "K6MjftRYMhz27wGwDDGTprAqGTJJtzt2UFAyqbuwuui1Be3CMCgkdMvi4knPtQ4WMdfVyChFAWsXNMPbuuhB8Nt",
  "key23": "41AJnbwpkW3ZoihL2e6nJUFep6NS64jQtEUWL5icoz5XSdiDQvJvvrYycSfGSKSqrZPGoz69BMYuTJW83K7xKX1B",
  "key24": "26yc7LFyrMw9bmkmEX6Gpz9uCWsJYUwVmwCqoH5vwGG8kgovVnzUvNB4WWpBTdWRHTkpQtCeo6N15qeMmx7teAJM",
  "key25": "3mBU653STUkhnGmEA48Hh3xAAtbjz2BuvouPAa95pzZKJoP5rR9SVafVF1TNMsVeKN9Ex3GtPe53q4vQjAARy9io",
  "key26": "81yib5dstSt4UFZszSiHEKuTZ9wwKEpP3L59JPivA19YDbZx5RFNMShr1x7UNwJCmVz2msWnFvVvDTNNxbuCjKo",
  "key27": "4LNBjVnQrnnpJkHHJvJLsaLvWofZEAxBmmxg539oo8DsT6LxNagdeeRgUdedYPV49THS4RjpCenmpacbzx9hNzcn",
  "key28": "FEKSvCsNncYQWtx7NrE3EeVUsUXLRHXVh9tqfDvaK6NcgPVX9KTNQV7ZjdCiMUYQz7DUTWYHzfL1RAEzkmzSdDz",
  "key29": "tzUdajhAWL6QjqNbG2YkKEq1VSrUEeh7zJ3DvAhfvKXHmH1kPbF7LBsEwnA8C2F7iYZGBe9WkEGyrC1XM67Y6KY",
  "key30": "2LExVy6wrU6tj1wUJK8QJ5SQPsP9R7xWMQB5frtKEhAYJE5YxiGqfsSqjdpL28yt6kj3oYPhA3325kfa6ZxG3Kjy",
  "key31": "2ZbsTY6MR2Fu9n8bkneEAxMMzEF68YEmnryqmHnmSp44QRioWywE9mKmFBxwNhbAs8c6KEsQwdCmxNpmeea7jVtx",
  "key32": "2GcSGxbLga5K88eccSv3j3twqQTgYsog7Z6i9zy3X7Ycn8F1ythLT3dE4T6sn8SWp7yPw9mX9qE6kS4fQUp1WHSX",
  "key33": "wePz4hBpBztF5KRYiLbpPBP638hsSPtffH3kRUrbD5qk5F8v3YVrJeokpUPwtDRrbouKcQbmscrJ7bsB9h6mPPT",
  "key34": "5p9rQNzpTiTCQam4FEduWZq8fVEpwBeo2bMYrur2bbcgJR2GKcHAvoeDBUrPF9YEYdKis1DC78YeFhYNFJCFxiQP",
  "key35": "3h76qCKFdPkpNLqP5mcw5WTp4VqZQhFt7EuLjzBpScgd3Us5nAtRmJFVDHJvuLFeVBtSTLt9a8JzMWBDD1uqPD8P",
  "key36": "33GkSsWNY8SfPDHP6H8bHezUXC2WPW8Gq6bLPsPwSBZD11aUK8cQ6j9ush571YnZ61ZMuH1yvwjh142gDZbwxKjm",
  "key37": "4X4J4qxJuTddpJsoTQhUbqEVsa4voPw4VqM3KV1Gfa5HmVG15KKeJpEYnF8T78jtrXyL465obbr6kJLeuxbwv3S8",
  "key38": "4u21QaUCYvYyvrPHtCoXT9xGNhdCL43mkm7cxFwnUWXVB87VHPam6n4Bc2F14EnYvgzUx9dJ8HMKqhwy2vKwg5gQ",
  "key39": "3QzKeVEFEUub1kyRVF2i4ZsQ1fehy38DdSkjqzE8fNYeMnoS8ENXX124BLTkFzBAbgi7vhgv3av5ugt5fhRDXpgA",
  "key40": "3qGsaww2VjguerXoSpcC1mnXPdi9hYCipsDd8hkHWLrQCwubtBGXngCg2JaxgfLY1h11qHSz57FGHtMoxm6v6PXn",
  "key41": "2RFWkNN6iDqv16rMdCdBG63eS2DHamG6E3K6ShqYFyjwKNarAUcR4CZbA5FP4AQANJXrnyp9X3EczFY6viqBM8gA",
  "key42": "2ad91YdsrCU1NTLZHfdjxLoMSeApwNVTeeqd4tiGJyp5fXV1DGYmWSDX2MkwVyupvePmqwy1u3GHDFGs2w9BgqKg",
  "key43": "3ksf5z8GkcBHsjkQ2woAvwPyKPgrEj3TU27NziqMMMfNvQxKQcuhqoYPCXfe4JPNih6MkuKpFYvsxRaBzpwkhLzz",
  "key44": "34THFxmA8KooepprNoqEWX3KTwMHG6wgSGFjVMxNA33RZ3kfwC1hfdEgPCVUn7FGHHWZqtQptBXFEzxrhNdpBCnV",
  "key45": "2VqFiPsXgfTGMqjXUka6CLm8s8yBQ1WM4okFDEP9fNnY1fYqUj3sijtmZkPH6bFZL2izP1qVrVZ7s4vPHUKsmD19",
  "key46": "2CTdmzGiMiahw35fGBJvygbD9VHmx441LY2rqrmcksKPuFNVH9PDhPyrLLDBCvcbycegFsQDgmUWVSkLE5YK1KPj"
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
