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
    "Bj5LDqXp7ngzF1FTAoz1Nep7Tsp8s8EtKige5oPHmmsCHkBBaC1fVsCTb27YKnRtRRGXqBgcDio3zKkuhuxHQh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "452gy2C74DsJdjo3ZgcF8GnwvL3NYA5EL2q4RXVLWyqoiHuzVMGiLNobuYRfPRFEB6UAvM86jyJDgBbiD4i3fJfS",
  "key1": "2uqtAF5zwUepuDXmsH76y1737GqaAHs8yzvwYgbk8HybUwyfN6cJYFizqXDSYiW5JNXDaUjhL199LPFn4mmU9rQr",
  "key2": "3Fka6iN5FBD6LJs7CBaMMpqM1B8HC3y7d7qxBwLvB6v9ESKA8ALmnnCUd5piGZPbemq1GPhfkhSwqbYNuvS6tJfG",
  "key3": "25SizBrH5pkopwCQUu2JQjHiw2xcNxPvayyU44njk5G1fs9kHMQxC1AMe5YoY9nJjQTRU4qjkWCaW6C5bGAFDHhQ",
  "key4": "3yrbAB2wP8V8ZUAy58Jz79FesQcNGbVPvKqc9MYub4YvJ1JsckwTsSRg9McgWCjXdYycgx7FEtukGQbzbNkb6dQm",
  "key5": "4XbMn9isTMM2t6wV79hwKeNzhk1Lx47RcLL4m3tKwXWNCYpsC7AYYBCin8ht5V4tvdvW57meqK65rS9sQRafYQke",
  "key6": "4hJbGffkdDqPyW6ZSxbvNiVECScfBGV6iGvbsk9AUGLUvdLajakcqsrMiVBfTvxKdi1NqByeQ7Dt4AtEMwYZskqB",
  "key7": "4SHhzZYkW1uRfH8o9TzsbZQWgZLdQTUtmtSPTPdZbL8FtBM4bY5hMKKRmfsqa15iJRjzdcNBiwZ2YKfY5xAjgw6x",
  "key8": "2q4i2Nz3rB9DoNprms7yE3zXEMRoAtBSCLa4YdWPYwGsPf2sN6aLcRRgFGDLS7cG9wtx2AS9M4789dvs2U8nbHog",
  "key9": "yjvVt5Tmh4Vt9Y5ZMsD7R16vCKhtQoDeqzF8RAGLcL6wAd38d2xjW6QnfLwhYbHkkwXSHssuE9KbaKL7KwdxqwQ",
  "key10": "21HQLQ5x9SjC95Sa9hzrp4Rn1mqMtpB8XW1CP9Ez8TTcVR6jiiudnkmyzk9DHweLMt8rmzzhZ4ormPsMqSutBXxv",
  "key11": "5gZEzRy3U8p643twW3V7AwaoFqw8euigXV5xaNK3xV5HfVnmR8wunst22ByXzXY5AcphsYhernpQcKRrt7v8qA8v",
  "key12": "3ypSHV6f3Q6CHy8owGWGYE9zPdsxE175ZjY3kPPHzsKtUyLrD39p1276oyNEmWgDxxfzvLz1gHTxZVsve4KNiZWq",
  "key13": "5sLBW39CGyCVa8FAL44MtPXgwgPerBtAm5Go1YAYsZCUvHDJWcWfMsddvFgRKN117Mjb1VkHdKABse3WkryDy8AK",
  "key14": "qhprbCLtZsvjeDUs9p13aEYcza6MadCEY9ePGDF5CKW4fuG7zi3eu4UnKCDkTgSUa8c1XkzfKjMfbKLirqcb7Lq",
  "key15": "2zebaypR7KqXirwPPCTmxefH5nuMg4imtFH7q397jRh6eVnDz5VWyLv5b8DJChuChw6p9rSMNpEUYvA6ZjRYotR4",
  "key16": "2fEbpk7pXCU42WFLZ5hYYtDE3Z3zJsqhFq78J9b1uU7sqrjUiTcTNERgPXtgBbYaKj7QDxF3vfxhcZ53433XsXQH",
  "key17": "5RvYcNMdpqmmVXvx7wvKXKyPbcmP41TjFQNVGuWgA1X3XJkyv2teghJq8fGDsxCy2UXdRs42MB5PPmgQDPRUFUNN",
  "key18": "hnWLA1yP4fkp67VAyH8YW1RvHhWcLDGVgco7jzCR51PjALHAbgwqp3V3KLog3UeQfDb4gqzp65WkEoozsANCvfG",
  "key19": "2Av9LkL63U1GbBhprtgxKixgzA8HL132MMDMWsfkL6bBNk3TJV4fTLLNqtwwjX527zAMs1Gp4rAUKRx2N5JvyASM",
  "key20": "3udnJd64aoDvqDjtnamk6QUtgHHsWvfBCZRkWF1h95WeoPFxWR8WwSvRL8XJ9quqK35JV6BaYv4ngmB8LDMM6sMC",
  "key21": "5kvRLS17a9fNi3X1g5WjTYtWHN69tXygjd5HNKt6nq7W7V3ouTMRQTcDb28qddvTLrCvHnv3SBvA6a3QDXKtMRxN",
  "key22": "2z7jTEaH4fMhfmMNZ56wQM4W533SgyyLvgRFC7v3XVeL2d2AvNcJt5qmcSvTPKsuwH3QKdppDiznSwDW1r9UvdHw",
  "key23": "52fux2R351793W5ZhxBhLer41p2KKJvwysv1B9J4hVuv9n9tipPyw42vFA2h7DEZ9CDdXcFWyFEoDM5sBnB5MU47",
  "key24": "3XatDaTu7B1W82mnQxG38Q9ALbFpKgetpN7qwZtaM3j1xCaW7Xgqhwq9g5YmiChd92DvCSxPFrqFm6LLNqtXEGCL",
  "key25": "2GwFCRi8Q2gMBZP4Bb65WTLHvKkanjMX4Arm8s65ejyT8VCeVotNNt3WaP4HsKKPAVtVnPGVsR25UWzEwHqwrnGH",
  "key26": "2C9uQRVhoYAxf8CoStN9mz5s671KncGaVxx1qKAkq8SzN1T8orggp8iychEujdGU4gQhFbtyECRxXv7DAGXoKXXw",
  "key27": "xQ9wom7Tv533MWk1xXMLZVg2unYcVmVPhXM7CzuzZkZxPCrdN7Ch2TP4BHXa3qgCB9e81pKSxT2ZVYDJYkioMkw",
  "key28": "2YxETc2wzeR58hHgaHiZrCfgstPHSZ41uFb7ev3gG3Ev8vXmbg8aZ2wMGTEDuVxTn4Lgv7QYgVTGfyZaw4ysvHoD",
  "key29": "w4oC1csE5skdgR6VjEnehZn3fscYkxsz2kJDf5DLyd259pEqncZY2CDJdf6h2G2XuvyfL7w9WP3Z9tKFsr1qsiR",
  "key30": "2vtfV1UdXRawLu5jmT4MMmasE3KLQvq97yTTaZBB6sx52Tcf4MkspGhf3DjZk1UKdviUXavwD8Xpo26hZxGEh26G",
  "key31": "316e3XjGYyg3rfKKxFmH8jsnCj6KnjpJktBQuvgDyuhvZLW9C4oSVnHiGmZP8DxsntnPUyt9kGMxExvkRLo5evd3",
  "key32": "4gzvBpqshgQ2WuHfZ184KsAFE3mNxqhW9VtJJhEJNat88kVt8anQ7n7kJK3sVpPpf8hQsM2aTXv8KzgBCepNCck3",
  "key33": "3b5NexFgbExZHjdrarWZsZwez9kJxU5Tihhf84bevQ59h3UQSAt3bPHTS32Yc4rCkLzKBi2WzQNiNdKcMDhrPuJn",
  "key34": "3werST98Lms9ufxEPSA1YPzHaKWSpRkfE7hUtViWsaPB7Da4abBPs7U6rrnD44BjmJXrFNEUigkEi5qPvEPHr4fq",
  "key35": "2wP4PXkmpwgaXTUTp3mQ6KodvLWunaC8rQuAh867NHksmkrFScYQc6bT6LZu1X1r9SofYbgv9tHxy5uRpbaKdV3",
  "key36": "BvDcG53LwXyTENaX8h6DESbNcD8wAF7pQgeiPTYeewiY7twpsYGPw3XuZosxHHBYC4vpQKbnPfB8rmcHwAMKFEf",
  "key37": "DGumbMB3JuuM8nsGmGkNMCWzRUHZto8Mak1PHrC3wYLf4HSJyLYNxsFYybp4mb2bMxur1j8QstQk4TiKztTYPu1",
  "key38": "5WBAzE5GnmEuKMyYBUnAy8FzLP5UcdgnzUqpApBaN73Q8QXgRTQj9gxSCVLZH2onF4fLnwV96TjKpB5kQXsZ3Q1p",
  "key39": "HvhCMMhi1q45sP8LsefStEVVXSTcNYz4b3t1PcVRJeqpSrdpLRuwJQWE2zFybsSaz44Tiij3gymKtzBu6pPPkpN",
  "key40": "5jD9ujiShbH8KjUNfFYVWuaGQsB2vmGVRnnAdwVDhXNJxwfsJJkEfuWHAU7J5wrrorC3YEekyqT3RCQ4fmXJsxRM"
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
