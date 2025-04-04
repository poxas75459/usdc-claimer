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
    "5u2QN875AnYvXCb6NtcSXaRS2ikEigvu9JF2zXSg3KUm5eYXSgtLcx5mVk1JfU9uebAF56a9qmSLUmDRgdtfWS3u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32L1Q2vao7ynSyQNuck3AqNR5m1uv6yFT1fiFfmjzYyrpfumQV7oGyqnZAVz5iiVcY26LEzpmM9YHjx96hqEsCLe",
  "key1": "jTNrNhLzacGDHwXMAuXtd1ozHXrotGQu4aPDBQHLZBxsmSDmjF8F47bMZ3p1LvqCJLz3kLjHznPUovWhEMi9QiL",
  "key2": "iieTcQ6rpTFFHHkyYHhx7mbAQ5roSBjVM7Wsm4PbqMKyDLKMFoq2ayWiKVvARLPMQTGcveBmTTs3ydGHC3TcXdK",
  "key3": "5Fq6E45PU7GiuDSCh4gN3kP96eeisv2CazoJFc99aHiERZv9mG89DoMaFzUxm6ddzuyMErHrgwQZNUNURzLLzkrD",
  "key4": "bUkqnLjHTNjhsjbiQBsgh7LnMyW5KxzwKJaDNGbjTfLvLFo4a4WQjfEVPo4gJmqavpV9YesPmowiZF1B8s5T4KQ",
  "key5": "2q9LWMvj786x89SvieVPoc8rotifsZgmsZ28Mpo2YAxi2SwcrqwgUayzcTkJsBKexcDkorENuxPP7SVw8uYM4q6E",
  "key6": "35SNQ5ytUr9gjHQDhDmVBDKMkkk5DDSFoTn7NHtm58Dbr35QHgn31DmjQT8yNgwbsrQj1GRfd8QkNvsyEkWJmTdc",
  "key7": "3azTnT5HHzVUsDrK7xYoJFuvVaNj7Vu7BsvKbMdvMiVgbWvPAxi7NSvDT8HVuWNFZvTtw1NMc4UK3jg7kkfNRfk4",
  "key8": "2XHDNzWZJRftUqGVxrFRWttaScU1tkU8KKhdhnH8uqmyxa8Cu9i9cvw7qrbi5tonNPPJ1b1W28hsT81SZT74uFaP",
  "key9": "3hF8PRxAvvM6EsC5tky2vRmvx1uCjg3e6EEVZHDG32HmPR5hB8AS61o8aZHRBFHkNrLiWKj1yQzHJ98CZ57SUTsp",
  "key10": "5p9aYjDWkL6GUnBmnUouyErkQVDUrahjCu6Mer8Ao6os1wt4HCtwZa1ubQ3X4z7wUTSEAM9rpBCnq9q71oE1QP6N",
  "key11": "4AtRMDMUpvPe5cxhifrEySXNQyy8Kj6ECWPuPJzwMJZr9P4nmjMbGCMwt8x2vhBPY534LGvZMn6cFvHEF6ge5twe",
  "key12": "4Zq68ZsgdSopZfKTgnFvNrZstUj7vQ9FaKgG7ptinsDPGS9zeu235GeCQfQR8SwSiYw5HUgBybZ9bA1ajcrr4FED",
  "key13": "JtakEkQBFdXVJb5Yqya3NwNZuAGqstms6aipDT4HsmMTSNVvPFdTfDuFkvXhnFv32phXYsfCiXagbggWn9iUwNK",
  "key14": "cHTk2weHXqbkrWG95Bo8tYTrsW3P7E69EmuWK91twXFGyryBQcu6EDxdoAqLSf1aRUEG3bp5rKkj2oTYnEx1sH6",
  "key15": "53jHhjuUzAnKK2zm5jHv9D5X8MTSdmdsezc8v7dfdMDLSynLaaUt6YUqvui7iJGvuDMd5CvtbrZErkcHH3qCjJsn",
  "key16": "3VnzAM3cArAsNw6UjyxdvZhMm4fptdULUfff9vNAZBZQF2ZPA5RYECFMPcjDSmCSaiX3DU3J1W1JDpnL5uAYjUxY",
  "key17": "2iGX5hDa7z6V2b4oJUapV3rBKiAs1t9WnwDpmJzTv54AVLVogbZwtc8Gwf72UoL7ffu3NELjvxVagvhTq2YxDvA5",
  "key18": "3RsnwEFurJ3FLPxjnQySNEzszLbnpqRbTXGSmcVmhFk5WissMfAsk4iLuQrTPtGYZZ5855iqfpoCHH2rEyTFsgEm",
  "key19": "3sJfRD5eA3y6rHokB43czYMPoJunZybk6J6mRAVRZT46ryVUH1Rt3tqMJDrXhXgSaivH3wjEVS6NL7MWDWQPUx4m",
  "key20": "32w5p482ktgwttCZY85ELmK4ugQbVq6FKqAkd2Hh78gGo7JYGXkjfGL9UQzq7t431QxrqxBmqkoNxhPFfB8m45GK",
  "key21": "65MsAd4RqEbWojakuZA9PPQBoREyMtUW9KjsQ4mpcrg61PEpsQawZTinQCwgRoxxTti8Zr9EQqydeb2g2J34ttLi",
  "key22": "2ojz1SdjJJvQQg4mDidFHwtosnyj6ee6H8bV7ADpjc1UFm5nkUiNyaBoFJj12LMsXQuUBCeiRd9NHpg2UhhErVrk",
  "key23": "Gf2rSPaWK9EnFUq7Z9nkDc7LnhwgM5czxfDaQsE5vGHVHrTBsJmXEtXRj2AEAjJUrLtkqrdGnAUTasopnQZw4NE",
  "key24": "4aGYk4BP2He9EuvzasdJ5JDVg6XPMhEFmDmFMEeAFLXaGtfnhp7rWtdh5YxZVSNR9dispRpCccXmF2FaMQXiMkki",
  "key25": "245qX8ShUASRjjr5gxyGY6CKiGfED5UyusmeUaFjmE5Yj3c3Y81TYs4oAzsmYFvJLg6PAnUJwFsQKYcZ96MFJ8cp",
  "key26": "4XEwsrZbc6nBp9SePEFu3XL8Zf6k9kvhEtVcQYQU6ZwRH7Zv4VbCpoKSmgFD34j5zexzmrgLgGRdigSTUCyCwwYK",
  "key27": "5DiuVDtTLAQ2n65CBZYwFnRVHs9cSTnDPTGwtXJG7T1jmGjSK4GA7RxHkheEEy8rcoqNwFupJJR3raUz1KTChPST",
  "key28": "2BnTWuaufBgfexkLLxfqjoNiFkbRkYwtBh5yJpq6h4QRnTBFW1ZiRY8QPjGqTdvAwD4RCKFYdLmnp4W91foHXuHy",
  "key29": "2iJic9LSo2tzMnEbP6tyUhE8dchn6ULV9Amt24Wo1jczefQVnKx8z5zdL6ZvUKZk4nA8gCaKmsotsMeUZ6JaEt4V",
  "key30": "DoWQqLYEvWCWueK9CCUuD9MtztEVSxxcsXeURioUhWGEwkvKSYNV9uQJgmJvbZRFTkcccCFQNNwE5D2iMLEv4G9",
  "key31": "y4rxLdouHjfxMxtEdL8bLLQDy3fSmHaJAX5CJ4WTzjfJq5ba923nGG66zeH7Y7FmDvtWCDQW5UxBLYxFv8arKWZ",
  "key32": "2qdKR7bYePdvshSYrdf3NMFnJH5NK2yXSHw1EBYwpM6urb699dzGD2GhCKsTEGC5Ss43WFqDkxn87JdK8stQQbgP",
  "key33": "T2vV2ijWNynesS8C7sAf7yPCVSCWRVMRqK2sFagyxqvRxGg4ueNbUou8NZRmoy3ktkhgSQK8hLMeaWvPentwnGu",
  "key34": "3P8sC7nerGtcF261qGBR1Mc7o7D3gqNrZd2GoR5o2nitorWSGyk7XmXkSBruBf7z2J4YcD87m2UEjXo9UB8n6tMS",
  "key35": "2bxNYiCeZbuqUKQghMPCKJLnX1q2qZpd7EwYP7sZWrfpNR9hXEQe9z4DkUyPQHDT9j84LtauZEP9jru4RssPsD6D",
  "key36": "64KbocbkpdLrLoRZxTmSGuVCrLK5GaFrxknbtxZ4VfW7daHxjjdUqvLPbDwECdG8vuddLpxgPDx2A5izZ8SKbsAg",
  "key37": "25tv3NAjopvvj2jXeYmzbyerMFVSy9hjJsX3fCtUMNio41fR2Dj8cozYtKQE5aaVh29mxBt5Bt64tjS1M1fZEYxx",
  "key38": "viaHFBEZ6jrei4XpJYP2B58piT3oZbXGxhDYdMynEYxsAGWc2uqfZ28gYQJnwueoqPWvFRdZrpxMMLfDiijBmD1",
  "key39": "9BXAboGrrJks3aRNEmBE3Qv2f4L2wb9XJ1JRPbGAj8upTcxuTTpcM5c31rUnc1hNyJg6xsNsNqKtmLA9S5i1JaJ",
  "key40": "4uwANk9xFvs9U26o9MWinHHNM1jF91b4UEnoTrx1scWDEqMcqw5hZ4WyePojyvXftteUqnkFsdpYmpRbpTZtHWdL",
  "key41": "5AMzPf2MTjfqQczjRBshDmsu588i1p7D7WJ5epfgvcAZx9L2TGQKLzX1pmR6ACeLXC6HUDmhQehj4yikB6ykTnzK",
  "key42": "3vgGbqGxeh1Pm7B7gqDpFw2sqNQvcxZAcNAX8grDEr391dPCwmPzvLw1LizuC2k4JrBL6PxkLiJApBRQ5waFh4zB",
  "key43": "5BeTfYNih2FJhiU3WMEY1rLJSuCyeEQ3KG3yn8DgxmHZCse2ABYK3kpx1eR8FAQfUFd6VCE59qyQMs6h6G8wYFjf",
  "key44": "2ExLS37CM3Wcb8Mhy7ELrMVvy8M6yj7jrFBaXYFfZ7RaZ7yDqV8SVGjzZBvHa86GkwoSwmrc3ThRvuhUnr538cJd",
  "key45": "2yS2ejn26fvqSFNFYybYNZpYXuWf7nELyfpRMiEErPhr1oAQY2oqrRrQUeEB5CYV7a6Yk87pGWdSFXUgRvwz2jwe",
  "key46": "33mG2q2UHMKZ79xfuz4V35zvtyM5ME4W4aPovAhs8wLrLKq3rkBXPZZq1YkzYjqV9uAStfMDRMGC344iU48k2QwF"
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
