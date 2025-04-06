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
    "56WysjC1KqF3rwfEmP2bGnKtP6dJF9SdZoHzqnqLtpHb7JR7zz6RXwkdHf6BNY5rDm3poczpp9wW5FB7yiZJwMt4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Xdowbqpk13vazwCTR4WzxrBdqUZ4Bwjmpznujx2jtUAbLQVzd9oLXN631FBoNCaF8t9AczXzhfu4oHa8QYGW8q",
  "key1": "CgND7ksRMMCQwyKQo17k7L3k2rQHYnJnipY6VyjnKbSGETQqH5MYirkhvDFSEhKF1MQSjbRsxivA7epyguDdTHb",
  "key2": "3JjBzEpy6imuMFiKEQJxyU58gfK1gNejY4Re58P1hp7iSuKdSGFQPDNZLbvN8PGchgiqxeuiMskmQmRoKQZbuGjt",
  "key3": "MErr6nCReSSZwAJZmmcjzbbn9xSH2Uu4yuASjpFyeF6kee47NdXJHYnr23m9PzMsngmexvv14UPzgd62FT3W6HB",
  "key4": "b35HXm9HhtpEp8iZ7wDjGZeRyaa9JL61fHbdeKBymtrdKHSHtMfsKUeXrm2ggTnyNhwwrtXbvah9DuueZBLhXdt",
  "key5": "4oUwtaCwnuVUsR3V4yN1je2bmLmtJkvMvb8SSWYrJkKisw7jnWCBX5srwWt3RKS2FykZxz73tAdG6kzdm38uXkgR",
  "key6": "35Zm7DmRMELYcfNM2qMoJhrwihyNhEbjzKDkc4zabi5u1VspvnD4wKRBonzMLpZv4zbML2npyYgc2xUm13ndZp7Y",
  "key7": "4wENXApSjNXpNpJeVh6n4GfD7o8Vb4TKx6Mm5kcCQf6EXbCfYhQ8S4Qs1CvpM5qmHc4e6kHdC2zzvS5ba8frkdat",
  "key8": "2hxUyXNhMd2vSrYFNGMCv8jubbd2qyzBA5ZLnAazXWsCpHXAmeZvo1D6X9e6vpMGfaEMWyre9MWRMCdnk9nAFJb5",
  "key9": "3sstmn3B1iCwRnFMNZJPrDUaPH9QncHUzjizz4Co1BvS6AzRMwL8QRshoRKwHwxuoEJR9Yyn2CVotc2niJEC8djp",
  "key10": "4ggqpr8ops1NdkA6dFwe2XgXNeLihQgeqpmxxoGLSdbawXiAekVUWKYXcFNyq93aWZPwo1capYb8ttKHsvABsoZq",
  "key11": "5JE3VmtkyDWyjSHRNesXBHqz8gxLUva2wwWCfdoGhjF6r6VZbx9VWsa55jq6dfKxiXZn8o2G7ie1CM3uGwAukG3y",
  "key12": "4zMVPGXdLBFgsuGhzQNVNGVy9QEd6coD5tYejY3qiWoE1hmw8X9rCyts7wSZLFvSpRg27EwxMHC4Hvf43dPTT9Ui",
  "key13": "4aLBDLAGWmWAq8w25xu7tfJkYA4pxnbZzTuUTRZy2Gy3giqYX1znjgyWH1U4TR22L1Fx54Vd9GAA8mXQmZu8Eq96",
  "key14": "3WyK76Re4qAJc9JBFbhVXJ9FuWefaRAT8z89RZxzJdQLByZdViJQCVhYfobqPxKYWCCKz1u5LgmnzExswd1JBc3f",
  "key15": "PX3MyfKEPaKo7hMvHi8sv1p8ywGzuLJ2q3zvHSqDo1n9KKmoZcbrE3uyZmqJiHeePCuH3UBa97413yFE6RcYuag",
  "key16": "5dXxbMq7DaqLWg4HQCAPRaQaQUHekzHpC3XkbDC3696TPzku6Z9u2fJtKWA8LH5wLLkoikevHLkfpdi7zpUVwnp2",
  "key17": "aqai5gvBbuatbgYSryMtqWfCB3qazoARqFeu4Neka1mq61iTKXd2CwxPEHrtFBzSDpNUJUJpea8ZjzgdPaLaMeY",
  "key18": "3QCAdgpSS1zpJBn3qYbFUmFiUGvcGmkE3McLKrDTh7RDKoisgCsKobQxnGMxbW2oncY8Ep4aMfvGRrgz5q4PUeRr",
  "key19": "2gY1K8Rzhoi8RqmT63eiWiHLEzGXzc3kSQdrQqXmUVDFZUETxQr2dKi1SAL1BnGMUYeFJRbDogougp823FnRjPBc",
  "key20": "2sevoFRzKDwH96Nr6WoqadDM3TafrSEyBuwjBEMkXd6APCLjTyWoCHEGq7e9GmvhxhPmWnjFTAcYqaGuhkmfcuNM",
  "key21": "5nMTgaFZNNYgfPChc8Pf93Qhc72ySTAJmLg6q3nsg8WYjVqP1iKowHJq2etF4Kvz3YWq1pVGZtvp8AqdytZJBaAM",
  "key22": "5QzojqU945VW1oxQfLbNC9HEjB4z6f6eqWY96oiivKHVdbuaK1hurUY7ntEJetnjnErc8DwAAn6kJ4TYK6Y6yckQ",
  "key23": "bE7zpbsBLJ7SCAzz48V3A4Pumty9qYccWs6g3DnAk7gjwCx4pdErAsSbyuWjPEydsxoLvefH7uepKN9vXsWPZAr",
  "key24": "knW8c2fLnQAfapLLVd5Pd3KYPu8fnoYfnXc4UiZPThxWHWWMipevjMMQdUzj9ZayA9V511WCyZmmRNvQndg2Loc",
  "key25": "5NCjzoZYGkr4LQfqjBMbMjYoBwJ3VFqXsVatLr9Uhb6keKaEQJuSBP66CjGs2AiRhc5kcTX8T8xCM9ZXTiHeSuRj",
  "key26": "42SGSxVWinfkMgnTrE2yofKBjJYgNPXize8Mzrtq3uMcXYmox4iNrRrZsKxNnUwX7VrzNfeghhSBCmrr9wtCeXob",
  "key27": "2eFLWNdusbKxPo5jDgxkmjL8vp3ZGGMwc6Ui4NdRyHCQv7nj36d8YJf6ov2PW2Wm76oGrCJSJ4zsuhkVK75uvp19",
  "key28": "1BxZPfSZaZgXANU8wicuDd8KfA7bg35V8WVZEjCSyHcyo8je2hHzjiLPeMBVWf8NT4ysjVDGvMWAXGQVoGD65fe",
  "key29": "2dCoBFztVPShp5hSfMiQMDoqg8Q6to2H5nXobRUX2T1n5Xoie7QcESXPHUPQiPUU8mNLj9RFwLDZZQP5frt2SkX4",
  "key30": "5geztR3vHhs2dB4fpTcr4pro2x83RXxL4vJUzwUzb8iVvzfXXvK7NMeFvkDNgioHZjtGUJGqcbANHs9PaY47S8E5",
  "key31": "oj5sWJvrGzCN9sRqtLuvaTGsh3aqJETtjDTqnZgGKJcAUNE9obu5BAEkEiEbyf8tLUbrmGoij5dfnQSX7Hs1wJZ",
  "key32": "3b4Y9rY6a2q8p4SzWdago1AE4sBnxwLnkNsMvuRuQnAeQkifgKqvTdD3TYQmGYktnYtBdpLAS57cZm1ihs9uakq",
  "key33": "5HfwEHoikRzNaXKUfxBSVmtnR5du4Hfc4VHePpMRHMXGvGauACtbK4XDpPLaFNFL8pAmChqZi9uRBZy4YvyQsx5D"
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
