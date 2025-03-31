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
    "5kbGm8FGV5cWXmRYCUV8cbUGFfxmRNQZczD3rsogxSm24H8oTRGfSj2BqqBpAQvE6UPWTk69vxbCV9fz7X729T3U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EoEXugW3e9QTCuekJ55shWb7vu5SS8DLK6ftRzsdWjLXhyT18V9v1ytcERJ8kiEunbXLnqu3DACxbFHARhvfi57",
  "key1": "4oQRYuMUGtFDooc2RLc7fnkL9okb6gyjLCJHstPpsUZUY2doJmj1NYNuK92u2jB2dM64RTmRyt6JxuzXGnNQAJ1H",
  "key2": "4ehFLysyag2hg35Vvnr6cnckYQXD5nAAqgpac87fCz2i8FWg9QiEp8hh23oKSKoxJJLmz9d5WJdWqYLGWMzMyYqP",
  "key3": "397cbcAj4wHAGu3RchCWHkUmraM2TWCGrXQen6FuX5eTgBjcKgAMduG3QU8iosU1CjetdE6Yw7ZNzgF1j6LDvmKL",
  "key4": "4MNzMcZbqCRBfZ5FsEufKqLut9YxnkMZaWJVR2heTg3BNgLUBgxJMXsNmkxteL49ifddCkkM2NTXyUeGj6oQoAJr",
  "key5": "3zPRdonMkZqNdXcb1GKbZJCvwTGewixRZ84UaJmrY9vaLMwQTgtvEFXFvS51UNTvhzuMHaefxhC9Z1u6dC1swLNN",
  "key6": "3amZ9Poz9tnvMUnxn93XRD4Wi3uCR8W1nEQGv88bkW57RSJC7tom3zpXCJPNwvavLKKscTwksxuPxV8bYUiLnn1X",
  "key7": "8UETThpehqTk41Gi2Bn5NCCb2q5To9MrNvxyp8JpcVPkc7BQAFz8bi5bCbRE2gae7vP46QvNVTVvvcKWb1x3jQs",
  "key8": "5Aq5QJDRn8Y3QtN3yaNQVr9t6E6DzeQAxjWmAM71dfk8s6kspPosxjtSGct6BxgEH88eqK5TJW9wATRAjbzuuZkp",
  "key9": "55qf5fcKWddHZhMxV5hbA5BcCk3A9N9YDagqWQqMwQHBQontijZ3mkRkz3Trg5HfCGDDTaXJo8hSmrwWg6qBafH9",
  "key10": "5GCzDHEcjy5HakiNXQoPG6PX9ebp9h5LhkcQ7F4CRLveCU4sjAXuc9C3qj2wPSEoK4Ts9wWUXpTRShQsefWf7D2B",
  "key11": "3TWLgSVyvSrwRhkopuM8SFPK27ohSX4FBUokNEbVATnQP3K5p6sCyg462Aff2e3JVN7KwCuiUkCS4qcLPa441FGA",
  "key12": "5yQrN3HD9LgXhWi6oZZx9wRAeNuPGUYka1S8xci7Tk2YRgRRy1UJFPrahT524fDXMQRW36nUEWX4nrm7VtWs2Lbr",
  "key13": "2hXp8oUU5Xy2Yxb9ENfkRgdv3LcSpy7dv8sD39oN6RmkaeZ6yX3v4LPSN7hG1VLdG8ByqpTVxYSinU5F9kMk3xCD",
  "key14": "45EWH9SbjGgwKhGjtaFWisvSkchWLkkDUc2YqhSHr1w7xcks89VmyGL7EAU5MEGYqrF4QFyBYqWQpeywYLQhN9D2",
  "key15": "5Ce7i5JeHMZjPUoi6vtsUbaS33xLqD84Etg13qAPoTpGJeoRqF5CXum4X8ns9MvX5me5aes6b5CDL9Tu2Tj31a4e",
  "key16": "2D1GVwWVBM3TqTq1Qp3oupZTa8sTHh67fXVRAhgKeE67sXuzruaKU8Qo9hHgDC1GaYczdA4q9RbvyP1DXVbwcb1E",
  "key17": "2sDc5oJp5Z31E9JkVjHB2dQUFa4Mcomg7QJkiYq2fBqEVphTiL1fYdFKxjxrJsdzL8vFep3JLskTU7jqfAj1NixP",
  "key18": "2onPV3vAQkFX2Dp7maEded2DUfufCzCsJquGaH7vXfR9JRPNPTFzb2GX7ZjUfRKdbEmSDxErQMqG1xjZm3KacARU",
  "key19": "3RK3RHjmTzLX4p9bTQhuxCEZGN8heGvnr3JRHc8WjkTaKVS4cx3wAa8fo7E4HAGvqPpQ4GkmG5okgyhwWw8oVVrX",
  "key20": "RyLhvF6CLLLMDG2Emn9GuPNS8eeWPH5GKoSe2M5Bo52cfq459bz1UV8XDsnoyHjd9QKxfwEEkqf2H5HyzoqCbcc",
  "key21": "HVUwZpHVp4czte2eWMe5kWgqFBk9KZF5wF5gGEa6vrHL5U11x6RjaBF8XnWLYvZHiziUyW9KbiwMt9hdwPmQAfu",
  "key22": "5tNwXM1TSQ5PcoMANjmbo3CYsATbXsfnVsFyaxN1Exc7zgZ9wJapF3bMxdAWeZE2ZGvz5yPScF2mB2W9dzaLriAN",
  "key23": "4tmuyPmWoYm7BXMLSmGT76pYFRLuQyX7WS19mDaheJeKkKTTGx2juE6jfdZbsvW47Ax8syLnvJZH8pT59sVH1DNH",
  "key24": "4K58PtCcUZ4e8PAcEkMrv7CuRW7PPkuh4LzX2cu8hTv91rVxqLg4CuQSgdB5H8QRbSvYJgK4BDiB4VuiQzmtHrVj",
  "key25": "2BEUGiyi2kvkJXWTqq1kBZmvq66k7ABbAMGtPy6hF4JQuNsBN6aGarp7A3AHVLmf2Q7YDhg3zBwMmsMDnHZrtnZZ",
  "key26": "5rqLRAh8iumK3bKXMp5Ch3TX2hRVUxmMtdhgbLwdSWc5c5NmGmm4fvC9nRN4w6DsHPmhJ5X3rfxT3UiHEMfDeZiB",
  "key27": "UaGJes5yeLTPajB8aAbDoBCDRDToNHxqCdTgU3m6odvX63kgB66LTEwioHJcLVUovkiXBJMBkWZdatP6appc9DV",
  "key28": "4YeeAFCMV9TA5Y7GNFPLuFcdth2kkBqQFuxpBBJMajy9shjhBbJcUyZq6vzNhnk2NqXAyNwjwvcbj6SdTmDXNnQb",
  "key29": "2qTtHGdZrFi1UkzSK8ddNaxbE4viHTzGPqishMYvcicbhAgWWrGKmJA1gbYDEV2FkbTTMk89fRSW2vEpScxQevQP",
  "key30": "3C4Z64qD1R7LZCgLocpvwtLPxXYfT9eoYvRFdsD2xReFULEGU9MkZmxutCoZx6pxz4HS7SEyVWgrZtWf2NXZu3ck",
  "key31": "3Pv9257m162M2QQawH8An4PgsU7BQMutpdFsBPeiNMEY9fXbV5U84FDtMJt6qZn9zK2UYKo4C4VvBwaPgns1tSRR",
  "key32": "3j2vVDc4gNjbHwas2RgxtZaV4Wig5w9fhrjxbrnyTTDEesiq8vzZvyzuLoXNLQiHm2XwzqD79KaKudkJTNL8upuP",
  "key33": "5qZjn9zY5YCfKXZEoPj5okfj6SUU2f1sabfPXccinnrQxxZePUxfDpwAHYgzQyLbkbDxSrz4AwQYdf1cLfpfUiV9",
  "key34": "33fWLXqWrQcBT4sAiUrMgzMhS4VR75h9xQcEZg8eRcC59PdeMB2a9JsDmHkb4ht5GNXeUr3zerfsLvvhCGByBaUq",
  "key35": "2GBy5kKQALCF98QyzXLbhy3avnK2CGozsfSbHCFg5U4VUYYKmpvUnEqY514rnAqJrHc5a6n1TsxmvChSWJbSnwk6",
  "key36": "3toJLiq3UMzSTmLRYLBQyk7M5cjAgL7hq3NDkvvWrLoTTqDygM1AbFTGzHUJkDGMGDwB37wv4NEGahj9szxGfSCV",
  "key37": "3gmkTpNuv5uNW3R1JhgRXZbkGdpYtHLjwVZ2E1BrkvdA2owFuDUae6fSvkejGeBwT1frygx9TKRtEeNqZGb9hYGc",
  "key38": "RcDN2Uv7JCoeF7RHKLiB4kDStqT45jnioz71Q1rKixTdUGt1VjyfMXLJUEahRkQA1afqryYm9UQCntcyoDFCgA1",
  "key39": "5MynG49vw7bWeqh7c3YYgVqkQN1NAL2Lsx5HSfEzwzmQ5tMp7o5cm9wPFpdUndaQeXDXFy2wsNdKqd9HWtamjfds",
  "key40": "61E9Am1AW8nN3heh7GjXKMymfUxKqmUcigQ833RAEpMgN98uTGsAfuV5UAz3VgCmWAyLDJFgaVdJX2MLTyvJSaNp",
  "key41": "3mZcGJDYb8bYeihJsbSjRwa1MTZfaXFRkxsngQLLqZErUauCyBxAkBHsejkFRhkN9mZ6CJEVGSUUUF4EamnXuxWb"
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
