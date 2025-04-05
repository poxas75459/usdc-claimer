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
    "3N3dSNdb6ZLMQxpBiBLSy94PjNLAnVjDXJw19PiWUAgrKALoH7rc4ezLGzp5BYpdJWBNpSEFja4naEGMjBuDnBFK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ePoc94aJoYTF83NgFUAAhYATx2SQb5Vj9aPufpdMfCMcnHYhRDRretJRCkqR3h2rnkyvhkdNzGWasaZ12jVszqr",
  "key1": "2X22dhTky63MAG8qQN3V9WSPFznn97PGtRmQ48SFhtxZMC9cD7L5qm52Koav3zZ6fdKzcb3sP1QnPZ6GBwuPTLgG",
  "key2": "2XZPPzo9ZhnqBwm3GQoWQPvFAKidWMv1mHupBt8rgWwuAaTb3YJfAoZyHfW9s4397kchj35754nAMoxhV37sQ9zn",
  "key3": "2RssaXiDztfxNDNq96dvUenTPaMZd6Bf6WTbHqinbaaD7RGREg32XBm3vitoAbSV32FKegYFbpBkNsRdbfoMwhiY",
  "key4": "5LTPwURjZt88yLAVsjDfnZWR2WuWd8mGBxz4CtKuLYM71S98QotoGB7qSPWr9xxu7qFd738JwY4eHQMCk5mEuTkG",
  "key5": "5tykRMGBRvyTjUJqoLUixsFg8GTJfEVGE32heXsFFRT2itj4z8G65V6e13Pb8oQ4T2aee9F7cYXN8JTgkUmVwzyp",
  "key6": "63T1A3NJ3GGYJTq3A7H6ctV5weEaWafC9MU4aKMW86g3jEsR34TCwzKFhAXCh8qKhAoX1QSSiEr8b7HWZAjohKJY",
  "key7": "2TZeLnYuRLLvGLsLcV2VFVDPou2NkVpVDUYQvXC5e4V8KhQEhsT3214X3hTA12J15edxcQSeXA8RSM1VbAzBduNJ",
  "key8": "2TuGGCroHELjiAyzoFuDng5CGExfaK5z8K9znsjpeAjASpYgar1whjdK3beG3W5GZcDaqNUHbs7HBk1dBVghiMTY",
  "key9": "271LWZazucrMnuwHgWKS8pb3S4r5XNb63xQKHkyTEwCdgpgR529eL9wHf3bNWQbRyGdnuMQ2YeUHLLPMqvwJm6mZ",
  "key10": "5HQiUwGw5TjxMuXe3iMinW8ZW91tXhWgCdSuK4yrQ1ggwWmUFavYascyBqQmN2sWKjNq5r1YrzqiSrTWDMgZVrkR",
  "key11": "3NM5AcyayCfRBHvRLfLzbbK6pYmDRBfUsHPosyhJU4ro2DxHvm42HuUgJvedGTa9wXsUzSkcCwpD1P4gRnVb2fuh",
  "key12": "weRSsk4jmbokrrEzhWcQeVnznQW1HY1KREEdJwT47aJdZFfYErrmxvF2oRgv3C5KGdXzTBTV8rZLUHY37C9hVpB",
  "key13": "HTbHSL1uD6uB48FLogwUsSNwanD7D5p9jwYAF6sBJ9EZnNzh4XoLpMpUP9RBNDoH92NNHWVVkP6V9MZhwZk4Ru5",
  "key14": "eWCtUFJC1R9uxQSksTVVJfrKyhmUjDdQmTnLKhQWh6rbii7w974uHKc7EfNgYmnuBpi75GRtP2ak3QkuYWx2Y2N",
  "key15": "3KLmTdxxX8fQZvfS4PSMjeNPpvJDcQN2U3huQ1PApUw6q7fHwrPZniMrD1RWmDrveLue2mP5qrCuCVKt8sx3kfDq",
  "key16": "5DNCAyHoctc2Jb6V43x4bRfAqwPgvX5ca27R6sYAD1fJBRY5FdssJRQRKBFcdjKQZ5tacJXLsM46qzhTX4GQCmQu",
  "key17": "2vctAKiGj6i5wxtdreohSRH8speF486oAknidzNJXgZ3CYJyWfGuMwFJFgKUJKQA4LrS4ERBXnUBQcC6W5tnRK2T",
  "key18": "5rYxNtMHnJifEZ8MpCk7kCdvTrzG1cVN7CyWVcjG6XRMBsG4DCxNL5RmTvww1eX1ffQ3zhhmysRSNbd4tgLmUun5",
  "key19": "2923br5EB51XbF3cpt8Gyru76tMP1K87t6QJVHikwPZ9MnZW2AdHtUQX9tdypxjauXhCLsdUmZU1qMNffP1Y7Y4m",
  "key20": "uBXXVWLKTRZBaCPinM5a326VV3szP4rqvpVHwn3hG6CW1Aam5hB9XsBNL4w6ZkTb7Qry6qgNoddS2Ed3TqFpbG9",
  "key21": "NXsvw4b4pVvi6ox8EMHofeTVgZgm2uDzV1eQ8EbKmFe4w17XAAqJaFXEkKNt1e2ZwgW8WLfWrb4zRRjpChTX3qk",
  "key22": "5ijXDwkRb43KR1ygFkTXwvrL8MAQ6cb36r78ukBTPSMWp5QhbnM8zMb5UkjtQYkEQ8QCjKJ2E9fn9NKywPoXpNQ2",
  "key23": "2N1C6KbUJpNQmoUuPKQm56dihiyEBeyub15R2dHaDGu3GmjXRu5warpz2sRTRHr3pESFcAufL6LwJ1ExkHZXzwvx",
  "key24": "3wjueFm5JaBN6jnRHdAJsoiWRbWmKnP7EJ8weRfo6EAkSsnz8caBwHnHXWTQ6pdXFbyXkrrtmkJmrGf8f7u6NZf1",
  "key25": "2F1y4NvX1CwV2BKQHcQ6eemVSrY4NCwCcKWdsWMzLCXqkup8q37xZFuJyyrczHH1HTs7jNa9tM1dDsan5kG2x2wm",
  "key26": "4K8GDQE8CGs1GGovD6tAkHEyCpKek3Dw4wbf1eB5pozD9KWVJFhjuusDcq3y1etWAPU2vXrP1kVs8MkDjqGbiBQm",
  "key27": "4tZz3x7s47XEg1uLL49p2GzH7B54b9mTfstYXSqFXyGsqWZQQosN4G3X53KVsV3hsNmyAPg1CyCbcE3K3edsXVNE",
  "key28": "321Xho3iy7vJs6XxR16UgxDQGqa94DT9evDBZDuBZxbnKbftWays3bAKTN2k4pHCbxHVv5hGtAgFP7piq9yjvLBz",
  "key29": "3cQQnL76jyUscCDRdhcbh9zuYwCUQaEhkpt8DHTQwv639vJk1E8Dv9kuAFSMUeuN1zge29hk2SSXrqvTBZXnTzmp",
  "key30": "55Crj9LQt6SAXN51QwBpCZJDxqvkh1dbV2FRNYZS3MeyB625yDDLfkW6mQtBhJa2vR8sHhoDw7mqTSopncLfe2jb",
  "key31": "SnmPSCcACQxH6cX3ERq7f14t8gTTuUNFCygLL4odquBCht5DLggfxkofKGF1qWe9VxRPJYxPwD6bA8Td1Ge6dnF",
  "key32": "399yFgmneJivZAxKj5pwJTfHB6RfszwUU6bgf8HW6cUGTr4ZG7xqfYaVMoAS18rtKRu4tsDh3oHe9bHaPM7mpWix",
  "key33": "2mc17ziBuMeJZRUwUr1yqiaVX64jkDmHM4Unkok6rWRKwcsfYAurmyME89BjAKre7FA6H2JXxdAhithuiA278pH3",
  "key34": "KGXzemjej5oYZVK3eWuAhtSxkHn3zbtrGmu4sAtu6gMqLJDU1MHGx56MoaKQXSZkXnS4Ce5czQivXFrCgzQTDQG",
  "key35": "18K6qcTYnHrg9s8XSZQenerNC3vrda72MYYib1fRiyvdzH1Bd3Rj2UXbrUyri4buxsFj3c1GGcTaqkU8LtZcwhc",
  "key36": "42WBKASgpMpGy2JsMz6t1g7RWiE2vUEqGRivVJTR7S5Spr6D4J6FJVoLVypRTZhsjjoABn5JnGDwN95RBjNS2ArB",
  "key37": "2xH1EG2P3QMhh4yXrjzXTBeV7iWR9r6m8gD1c1YTGVUXkVTnbeUKWpEzD6Ha6NuSqM9pXRr2R45SskFRbUWwWTGQ",
  "key38": "yytVb6XENitKo3M4EiRpaz6kcHV92ozpFtzGdQixH6Kov2E6ozS5gHL1r6fYZ9JdeP6BbYy7ABna4n4KvZJ3HtK",
  "key39": "2oUnepASJB7ZJJHbjraGWopaoMw8kmPvnMpKd7rQocpCNg83X3WyfAobUaSPjQnW1ADAmGEVfiDb96jKGNkjVQhh",
  "key40": "4FxFoHvjzZokdc92Rp69yqpi4RFe4mY1vW1X8UHm5vpanh4wqJxzXS7W6rPNpy2dKjLyk8kDfetszW8uCRnb7uAm",
  "key41": "Jv9eeZPVNr6bwCH6VPLLU6pYBTmH1tAHz72EYH7qggKM1eShj46FqzuzAcMqNSZwFLk6ALk4jPeJCgcUR3rTJDS",
  "key42": "448EmJZjctd1CvTH37yZBCUiCBnDHiTZnKSLphBjNJCWmUnsrNBJuhTo2da1r285qZuoXisWFJNoeEj2VKpHv2py",
  "key43": "4tRnKFzzwFKBVkEGB6ttwVn4z8cmu66XeTkkLSxzEjtVh2eLnm7ehfarseNeRieBXSMj5JpiKXrznrTpx8211UqP",
  "key44": "5VYYb7yNjoUwyTGi7rey1r8XVwEQwkQtKzpzZMXpj3UcAN95K4MNp5ue9gmXqT79VhgVsCBka2qff1FxfKu9ZVEi",
  "key45": "FDW9PqJf4yRVdcWNMbdBNEhz2gHeVj8onyGg4d6SyrArG3f1nWab4pzkstowYURNhrWL1vTUNrH71v5rRfckYED",
  "key46": "45DvWeebbDcQXcNu8Cw4ZseJefmqDDWMKi7LntPkbHkvAtRRdJDNWoDjvbS7MVEcjiMuRMazNp2Xc6J3XQcxToD3",
  "key47": "67AtJag1D6uGJvohNhH2DZYRy6ph8KMNtUr7FK326JPGZjZ2Q7uUafkH1izDMkQx8mgQgCQfuqGbYKS6wt5afgTk",
  "key48": "3BYLmQMYmJvALa6eUsHR4FyT4Ut2PXXRpuZeKe1NjX27UdRUZjpvArWtbY9jSLFXpZn3hrEf22Kf36E7YweUYM7d"
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
