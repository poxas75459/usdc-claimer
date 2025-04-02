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
    "HNEEZHhsKhecCbepipvrzsQ2Px8tKBGYHTzne5ihr9LyQt5WaaZ58knP7dr6zLnhCVtCS1m1TsW6aumnRQCPQeT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yG2zoR4VRiZhSDBEazVPh4rozbX67BouwGb78jmdETS7LVbJyVNrs8V3xkQCdZnvoWgdixck9KUguGM7spnh2RG",
  "key1": "5jdmLTsQGr4Zp7nfm25gUKobCSfGbwnvrBTets8qHHV2sjXDJbJ8EmeRL8zzULJAGVKN9Fq9VU4nSW8dyQ7YRHYy",
  "key2": "5QyNKRLUW4dRFVzfJt4X9Q5XjbHCcZp4EQ4hQJxNTJQMT4yeDwi6mGHcHxcFNoHesQBU15A3hJNEktgjXAb4ZZP3",
  "key3": "2u1fTMLyvyrzpkFmpNstwt2H9NpWMfuV5MqQ9UxA73uCNgdJ6jWznC1Tu3baQSRRdTMSi5nc5hWC9JMLdvjeHYjb",
  "key4": "2oKyDvLnZPHKu5Fo6TUznoTYfbNw7xtnmwWw9qcHHwGDNGQYeJNDSqaLe1Sw2au1tSsr2U3hTq2tQkukZzYS2qCp",
  "key5": "hHjph2xPKbAeUZNSPkA5bZsxyB91Mms5s3rsTd8YKNWtExjDFN7r6xtnLRJqbWbPKS9GjDTxM8cHbmT1bvsKNuW",
  "key6": "3JAEbd1mSUQrGU6L91rzrLbW7ctBFsQLKpVgzpcxA4QWUsL8RmQFyQmzAsXL1Gjcbn8ZQoV3PngUkTBuDvqhdTAm",
  "key7": "5oVu1FjN9hoTDqBMqyTecADhks6rnA7Dpv3wpL4xTk2vcH7Xv6yriXsb1TK6snAc86CckjchUtushsghPjD4DDBE",
  "key8": "CJEvPizXydNxqLisx1qrPkpnTcoxEqEXw5Dq2fvWvv4MZ3vybtriqwsf8YiUtZK3FjxLXqG9RC5TApGe5WPsFna",
  "key9": "TSEuVEP4ALryCa4NiduxnxioBBs3mPeoaceeK7FrYcMGNCrNmo2DAeFZkuArtifQBiqSmdEFT5XAGt3mFdKbXF7",
  "key10": "5Nq43WVMH9SHv6BLGM5hppDrc2qbFnu7Uz82PhN7uQ58Crt4LMvcUQHfhdte2KKBDTzkNeUiJm1sn1NZqiykzUg5",
  "key11": "3CQwU6qj6UMnE6wfxhBm94Mn9kjvEFgoLSCarYGsegmxbhDZEiJ4GZ8Aa9bi3ZJ6ATJHcwre3eHXgWSRD7V29YAR",
  "key12": "4fzXUc9sTWL7UfZ1fe3M3CKV76ZDkCwqRcJQZAsLqak2Zj6dKaUXJiZRooHNq3UHDe3F2ACzYKCJAmLtmw2ceAYG",
  "key13": "598ziyEKM4L113gixew8HuQwAQ7DfGCyCKxzUg5JUW8svzqKk8oEq3BhU86zrBfezojBgVaKy2QfikjsKZ65HnZ3",
  "key14": "4yEvy3uQptEfu2c1g2iCCRYwBa2cLWwTPnrCQjUzsLoY7m4k6M2f4NNZku9Wa8wZwrS5sSGjX1MhNraX81hnoZYL",
  "key15": "5B7ZeX8LExqVTDuXNvFZ5nLPgE1je7jiQ5sF3R5UDYgYzGBvAfECegztrttheH81TaMWB2CD7HW5CZaJYqzaoiwo",
  "key16": "4PaarkrP5XkCbxJMy2ZgRAAnSiNvQtQbbAxU11PeorcPqPZj771NaohZ58NuvKXULM8NdNGKG8yskfp5QQGor9ir",
  "key17": "4WgriF932uAmJpLeXELQ125ModAZtsMJ6HFcPFzkANBB9KmpQgGuJiF5FQX4nnUpC2C5m9avsxQt3Sv9NgbixDqT",
  "key18": "63qGwqVnGHwLjd5f9FP6x5zDVRvq6cWj9tnkQb9Tn6CFxcgfkHMxuPmTF1jB7DaDgDavk6TxoSvbtizrwrfGKQ6U",
  "key19": "5JpYgtEiVUcPS9od9YCzvkUynpcwEpPU3rtwm97ZHiGtiVqJgGwBKNKiMKGziWd21iwTHWqB5JmRDCVwPTdMbx61",
  "key20": "591mVE9uCkxiWoCJxZuv83CxaXdqP5WmqbhoJgFrawsKJgoKEA4k63XUWQ7AaRn21q4JFiCDAUuUZ6JL7TYHp5nc",
  "key21": "54ZsxpicJa9VggxR3hZ9tS5tyfA7ERikcstBgoYQb3VLS7gz55J65DgfUrMTkxiG6xvFmE3Y7tNJf2gHN845YSMe",
  "key22": "3GyAf45h65E6RzieQADUta5eJZXz9GAKuMQuv5UrRimz7MgPPRqV1362swvo2EWkPwTe2jSa5coz7wojTFRKoHY9",
  "key23": "3GYjSM3V3aVZo3Am3dgCvVAH6QVQB2m2wX2WS6Akpzd9ygAzdP5GJ8yviHV2kY23p3K3eVALvDrR4fshDkXRQB52",
  "key24": "45qMjsf2T3E4ijckvCETAB3kYLMfb1JQknR7Mv136W1hH76Dmq3hR2MPCBd9QcsWW63pgeoPtzY5zK98m6PkZWpB",
  "key25": "3jr7RTqjWjwsJE9XCBr4XEDkRAmyT4XxmaJ1y56h4RjhjE6GDkgbQGGfAG14THGUbouhHGSAMbwF7vntjqcRx36Q",
  "key26": "56LdMKcm4XCFrs2gXsvNneeuwKPh16hAz9xxFPhfxApmdETkF99SdYL2giHfCJ4Dw1BYutYSqFc21HgRQbecWgqM",
  "key27": "4b51oyhxVEZ8iK7TfyngLyEpq62iVFWTUT6hpUG1RP3DCufaoNJkkdVUrB7cV4Tsgzo4mpXERgTeHpp1dDAaeKVe",
  "key28": "AajyqdLs9jLVhDevvk1huDL713qh5DnJeTb69siN7T8bWVz7pZChyFHs6stqiJqoPn9JQ1MfJRZtxvFMEgAtPdn",
  "key29": "1gkZuwyFo7sBSSYYygFXWJ7iwgVJFQYH4yaCcxTQmugafQ28H1pqziwqgpgAqRAcroxkYLeENNo4Sgoh99NbPu",
  "key30": "2ieWS3be8qjc3YH2yuw4w9n2FnPhfrZ5NFiewb1wL9PDkUgiZveKBBrVQhxmD1D2SC518GcHnuLuNm1x2rT7ye7K",
  "key31": "5bw2fMuBywsnBzxRBs5skVDCRmhmuriXXtBN1iRCiN9Hq9sosVWa9RT2cBtmp3HvNMQCswYw4ZvBBKgz4zEGNtPV",
  "key32": "4GvZ8maHRqtVGq3WteDeNqqNQVCXJnjvADm5TYT8uAHrmCDpMGi5r8UmVXRLvnjXeezGWcWH4s4m4o6rJPE2iPUi",
  "key33": "dJSGejMYGtr7WvWQu3aNfoVSy79V2yCD6sHktn7KrBP8oM9TgWmK73gp9ZPtVTv3XrJRGQtp9JsUgYsWpWhCyTJ",
  "key34": "qQunMSutur28gRVDZfD7GvNx4xphdDGw7gghNnhTAhxAFMhqxTdRrW6kis1nd81czX8zwrK6jgeQ5Si1iV4MEJP",
  "key35": "fWbmDGBWV9zbxRaDe3pWw5mfQC9XtdsDFi2CuoNACQzyCwWWmR8HT3FUcB5rExRbMDTYnoDff4UEk4Xg4dwvogq"
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
