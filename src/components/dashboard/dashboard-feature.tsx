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
    "41K4BXFRgK9cbtYBzz19PrwMcstfuZzygZ8LVALVFo1tHAnHCkW9r2aqkNHmkdePfF4Hh7qZ3Y1TNGYtokoQW3fJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wn7n4R9KgHGo7pwPQaiJZpdqDHCT9sLq4FasZzAeqqw1Rrk9TRT4MVqXsroMyygEHcW6uTdoQjk9TbQLPdSiqJn",
  "key1": "2Wto8STrV4Ggktn8jQpQ3tbG3M79tBoN6JjLtxWVWZxgKwuFhpB5vsZtR4p5v75caZgCxoVqFr3xiPaymySyp8jw",
  "key2": "4ECw5yucKqMbGdNYg9nSh2oeEtveKbKtS3uaJftYqB95dwk9dBAWa6HYtqkrFQFSEm758dhczAcSkVd1jwQRWwbC",
  "key3": "2PznyhcTYh8dJHJwguRvzvkGRoiJvfyhGbbePR83itBxKM2whELseeaFK3qPgqQKWodujhFwny3WqDLZZa8DxNQd",
  "key4": "34aSD1YC6UAqf4pVEMgN9AJDXfaTbHCKwSj46sxLPZkVLY34FVdVT3UTAQQVj46XPF6ywodpH8SVf8UQME31ZtNj",
  "key5": "67khkfoCJyCCDB8u3bnxhLimDrxzzAjZ2ey2pb32XQZfTXBt5hmcTZuR85QUgN1TQMVJXV5QkoKhLH7wQu23P2A1",
  "key6": "5We1YDhZ7DoqqwHwr7swJGoFMfswS1pPkYL1CWtANdeTSXehyoVqkr9LhBawXxAxdTUnZoBjSnPE43iNuFyRVFpn",
  "key7": "y8qdHueewCo1SocJPMBSmKNCGAuCC8AwhAfDVY2YDFL6wjRvfTygHmYGPLAQUPnhV6rRNk1Y484pG3N61zVM5NN",
  "key8": "6JbWhvnAa3jj4QXeUVy7o65A6iAg3RrsMSvYo6REBGdhN5s5Wr2kcZxAPpeY8FzVaeu8EghoBZAe1hRB7irz1EQ",
  "key9": "2dPHwJw4FjNHweQRZTiiqQ8ZiTaVFHDMKBfUxGfZRtH6LSLUAF1kWKevqyJfeRXTebQ62aV5EmFY1hPrsRED11Rg",
  "key10": "2xmQbahVLFQ9tZww3cZaN29qca14w9zK1HcNAnubzTxgquvs2jNgriaFXSpav5bbtQRssxJbEkeisyVLmXccCg2J",
  "key11": "5wwPqVD7g1YhmPS7DnbRaYBkBPkQ9fqb17qPWdeCHieB37qw4p5N1731wKAphGdF13jzLmH5zWE3pB3MkFnZThs6",
  "key12": "5JG4AieiNmQVhVk8sG86m44QWK8TFLyvM3GTCg8WTYapT7nZ9oqksY59WCLfCeDHrQaBULU4SXNpBdb7B23DSGzC",
  "key13": "5NJY2J2xUs8iGKzcwkET1deMvvcp38EEhYgiZgWkJNwU2YppKFxpS8JKtVFNCux2ye41KnKzqxn7aXWN4z4qGg9M",
  "key14": "jjEtMneHNg1DFvRfVVaofVq859sKaewHmjNVqp8Nvh5ayEHM6mUg24e3EqYySRtTcjLwSdjtJB3wvNJRNRvoxYa",
  "key15": "UaHnHE8euymMgR1n1D4jT9wC7zVe6GvfDUc2yzazTaJs4wgpVMVtAoDyGsyeiUcoEgu3xVWPHSPt8ewo3DpDjfB",
  "key16": "NLyj9XjUduw55Z8RJ7ommqAgoR4KqUmQaFU1asQhJe1tB3gTxLu7h9UK6eN5nj4BXCQbe9bG9YneRmnZcKyWnPJ",
  "key17": "2dVADPHKELxPMxNj93DiDnGQQKqfFsz2PLBxQvkshHwtLNRNhYjnqqZhuxkL1Lmuaimwo7UhNQpcK2AES1VStxNP",
  "key18": "3W1pck4Dsq5gQmpmNVestrV7gdzZUi3Zz81U7D76PY9BujWU1p8JuxzWS8arcGyyRLP7nHAQwd3xN9uHida3gzeL",
  "key19": "5dLHKe1Nw5s1LBUwfiqsKXwH1ayG69WXmUC1n4j2TUZrSCXaNj1434HKECvxYqK9HyFD1ZvuJUY14XkK6cdM8nN1",
  "key20": "39jdsqyocuTtYM4i4paBmmy5MFyieSAXzPQwt7VSdZGqH41SCXZF8VwCk785zDyA8kyyV1s6SygAcvSCaGTXKJBv",
  "key21": "4X3g6J58DfU2x5Gf8hftbsqRB8yrbEDXjQBa2WqhGbnqYroZvTiLcGALVTLK6FaK3c1ZSvvKNJDekN14uXjmGZ4D",
  "key22": "xVL9NacTXCgpUKvqjJk24qjwpdhgGezaLWNVqcWSA8peBasmNhKZ2KrzunsGzMALVJ63KSvJYZ2E8rQi9xJ4cfG",
  "key23": "4vHhgxiRnCV43qNgajCvWHEHnvgg5xAgFasep1zJd9zN8kdQWqerVrXXj3JDDvpDRL2iHyAJYfSeDqiAiCTGkLB5",
  "key24": "4RXBbXn2eouUvRxdQayqDqmsxgHwCB8GH3oPCaugsdBbdUryMkxJddPssq6g71tD5f2DiJwffN3yZRx6CgfJmBtV",
  "key25": "3HeEXcwMmoHccHXPeRF6CywuD3uPRTXpmXdbtnP9HUrQ11xwojNzjigrSL9FZkMSdHhcb7smcqs7g3Q6jKVBEahA",
  "key26": "3uFt49VxRTCMTNuecaTTyH1JZiSWHQEbUwFT4WEsem4fbdcAcMc5MYig561A5BxpEpT4yFCnEnadM2vyR4UCruau",
  "key27": "2WxSJyWYmgTsN6WudY8krmyjSB8dwSNRmXxHyTLwFtszJz3bRoga4RrDvwY1nL5gPtJfFeGacrP7DEd5cu9bVKcD",
  "key28": "3PPJoxefWDg32wXuWSZUKWrZgbfQyECoTmwL3mM6U8P1yHa6UGDMWjpNjzhLVe7c94LZiQpMo7SJfq44AKYNgv6g",
  "key29": "5uLjwt9JAcWE2yiVgKsvcGrowsbBXdGYsfEsJjvtj7Bd2oGQu4qUR1EE28oxdXGYVnzTrdKcqE45Dk9XJTa4Gxiy",
  "key30": "2PxofwELdEmGT8Du8EDk73PBvNjeca9N8nzcsP4ej5jpLWqWZLozUJcrF9x25PPeds9TE3WEH3AE8Hz3mZMW2JkF",
  "key31": "3j48SgYFiRYB4dvigMSfvRJJWi6jWHeKL4pdmeeULL6x9kUyoWEiPeGiBwu1oxYRnsfnKbhvYrEKHq4FDKSxwRuJ",
  "key32": "4ZSEx7uHvfhsXNpe9ghk5TVstQUApsPfPwd5TLGip88SXgtdetye8Hk6qgkU5UEvneuG21v1uS6omWmXYbjvVZZ4"
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
