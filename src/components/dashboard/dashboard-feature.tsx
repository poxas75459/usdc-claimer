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
    "3kQYKFsCMy4FhqFw4Tst6T3mhT9wyeUvfvHdw9JsJuPmgXVf5fZGZmmqa84ENRcpLhXQUsL6U9XsbdeYKdCFcavP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5uA4ZmTsTLkAgTeptzCyyHR6J7PPaMEYiAKCPZPiFTQSBvhngSRxS2WPf23WGk8SCMzdKqRGqnT3kSL37oZXVADN",
  "key1": "2ffENuKeYPKXgGFTmmradVGY3rioAmvcqyBkdpoFkZ7Ufi5GPCyfNRBQGHMAkGfGJBivuAyedcZvRPM9tYbnux2k",
  "key2": "3KsjtUNbMJgGXo2Wf1aGuy359wU5XaJ6MDhmxvSH4Jy2pTD8tkNJZ2Dmgo3PMQCYkYGhoQ6hEUdmPZ9kHpZiWyZb",
  "key3": "5QExtq51pTxCmXCNRfY1B1ZRAg81bTWbTQLpAM9qgYpkjANXAqmWaB9LAX8zxHCoCWnD86U2AWrfRzGxMpnLSst9",
  "key4": "5NGmokqvumoj9vTEEh9bKsCjqc8VWrXaykvAerJYHsgbQRsK2yPFhunY7oWPxDuesUsseAfch8uiH26YzhCfGw1T",
  "key5": "2cEbEDwp7V9uqc3HezKj8viyxoFYw8dD2RCqT7HrKpncz5ceDjMWVJp8zfMrLkvpwwL8axu5vUfvbpBPZnaKNJr1",
  "key6": "5n7Na6MhG2TPvHQoWaq9PwXyVUbUqNNGd7dhNHVLCfwm9e7TpRNBHeWkWHr9nCo7wGfbtQrrcEketoVkRqs4jEZe",
  "key7": "3DFp8WxntpGWCVgwHHN5KdKMynHakmuAQpmFRnJ448hNrqouuFiJmCkhP98N9cXizeLRZbinQUoXbT17gLn5u6N5",
  "key8": "5gmjKFs71HyohcssG588B1FQ8fDeceQF3WjebRNJUCNVGJtdq7e1vypSA9LRrxMcesuCHXUWH3uNDX7Cn77K3FWc",
  "key9": "5R2sSdzizEWJt9YZwfCpkgSQ7bwfNcPVMNRNrEe4Z8s9BURuvNSwUb32wcU9zrXYmMYEvTri5Ppy5pBPz3jrLMso",
  "key10": "5FEAweKte5DZCd5qx9vKaeb4tKKoQRbwgk3jg2oAfa7Zjb8odZ1Gbuw6L3zptbnP5NJC4MA2YSyrgMpY5PxE5wrn",
  "key11": "3m4pqzVmb5jVyjCA2oAfE7ssch3ShyNrH5oaBLosT8pxNGf9fBjL5TYNAp4PvHwpnm1KV9DesdZvaq5xvSHW6N27",
  "key12": "5UrJtn7CqStiz5npAWPdVbeggdaYhUifwQoQKndQmBSqN4d2NDkBrY2ruvJJayBA2neh7zKdexReX9w8561Cuci",
  "key13": "4cH1T3TjT562737a4wvzvkNjKWWHzXKFpMeaH29uZhZzfbDh2t2EEKPdgQKtVgkXGcpFYDhuMefvXzQRqrHQWZdn",
  "key14": "3LZhDCmuWN1N5gJYbpSsJYMxQbQkxk6ZM2xegxeerC8bn84tUj794zYrsrUYbAqnZEgmRDfBEHy1VmB1cXkrU8bq",
  "key15": "2uxBYi8zoCGKrwvZqxbLkwVEdeSGwW7fPo4jgnL8ELCoz4CUnbfuJp7WXETNtsMc7qAj4zXt5svawHjMLZFsU6RH",
  "key16": "uWj1KhqJG6CmyMPYw42AwHagUvURXncPt9ZN2wrxXt6kvsR5ir4K9WbmFnhMu9FWy3HS7N9ubZYHzFWXECGv1wT",
  "key17": "25oi76KdAYrJ9XKJep7ZE7VB1Jrjqsq34JMh5HAPtu9PTtcVBMStx3wqCdTgHn5XMpxkeavXfaLHuWQnEUFRY47X",
  "key18": "4fGjFFxJAU96b2esSTXp3Ywvu7JXvDp2W8iCTcV1BY7Vd5fqi38jLowkSDCxEBt3xsHb8QNU5HW2X64JHykdMK9U",
  "key19": "5vjtfPS2gLgtKfN23b6S2rj1LYoRwa98o59xea4e6YsGmNJBoLZP2v6L9DxfGxt5dWfd164mNX7cTrVTrwr5PMh5",
  "key20": "5Lkn8BACeqvtGLsMspXpXpqrUdKHuUMCZM7RHSJHJLwT9K956VN5R48V9WfwZ75Tw65cpjJiGvrPhMUZNBRAhgXP",
  "key21": "4Uj2YUJCEH67hjhHeTygWWo9JHKjqVtTHvUNat1qvHSGBUzSHs2DSdHZyGV2usjQ7A1qSJKBQMP786msCcvcqk8R",
  "key22": "2JNHJfdLkbxXb1gtDgsXatLKyNF6JSHgbASpwMAxqPFyuzE717REVuWP8fyEwKAUkUvWpAmfWBgBvgUyUyMgzewm",
  "key23": "4Gw4nHP8JfyxmsAUpTQHphCUQiiRD4YpdBXTL3Zd1KsbafVLijyu1Em5rJQfYuTo1GL9YqbnjbbcQpq65XWCvxux",
  "key24": "JxkW58jeM2ctKhRQ7wVTXvnBhyucBvdXCPeHy4UUVdEW2XKPFhNv8LnarmXnfunzMgQVLkkgsHYPJvPvhc9fpVT",
  "key25": "3swWsTxNAYuaJVDe7bjoceNPPWZZ4S3s3zYP86hj7vYJzmgKXeXuYwHiT9x8kNGacpuQtGWfhRf4yo45JLVejvLW",
  "key26": "4SbNBGkwHCdJJTm1woMFd8AcKNiFfXA8Eq4EySJTUppWBa3K5CBVEFYqw1nJU5LBZmqecUq9YS29sR5scgVvMdCR",
  "key27": "36bjMfgcumdVekAN9EKZN5M88mHc6GY4HgJyfUbSzkzdYKod6KFCEvN83VZvQLRQQhvX9s8zptSsNK1YsrA8tEmD",
  "key28": "4o3ynwLhcgHsKpZ6fuNTCYed9rWr2CmUK3417hx2qg9sepQt2UcBFfub8kEEG75A6UG4Ah22wmqbv5T7vmcXKtzs",
  "key29": "3ako2Ab1jTDBgEMT7xjG5YXgGxfQ7P1mYkqXNfBQJKEzVgTH6puKKGkLVcgzREpScV6KyXzXtZyyZJN5rJSPkjii",
  "key30": "4NiLowwWnvUyXAwf45XvxJEJudDUVPVgcgGY4MzNm3K5gAUvC783rMEJh14voD3FdUQENnct8xusvoCzkXLjz9BX",
  "key31": "2KXnSMbY4iwoZVHkfCk9NYaX4jnCxd2WocgGUxPMywYxsqUeV3WSmBqSNYPjNF7TaGz9pZHBTUempznKSJAcEqep",
  "key32": "2CNqyeuc8w52hQjTfQkziRxJ8TcyuMjFbvrSNCNKt417buqhwg9jBDDGbdP5HVsab9BWYznthg7DFXGmw5pyLhkf",
  "key33": "5y8RS9zMvMZQTjsEYBrsSgxrXGxsjVKFUvXiYJUTBVwxk6UcwseNEgtBd2LurCbyshq4tVCVYDydD3FKaGigkxR6",
  "key34": "5LnJUCSTPZMypRNZE91G1MvDhM2DQmStATeHnvFYpeyYDCeC27FND75yYnXCVYoC15s2jKMv8YYLCcQ21u2rkiAN",
  "key35": "XwL8N74EH65pvfb3WSfyzw8KBypXqbhTMsGMeN6nya7moDesyfQiU1YAkERFuahP772JdEHWUTbuAYXj1dycZsm",
  "key36": "5Z22w7Q4nMYckfgheez1M9LpRTXqZSzLpmUiZbt2giycvyEZYuzZGsGaF2VRsrRVFUJQhwdNksAWcLxgSWmzS3ai",
  "key37": "2juZ27XJqzKx7nUZXDpVwSDT2A76nXopMW7TXdxCLyC23R172XSR9igPrWbTQJ5pYjv536fwr5eTE45rpTBFKQyk",
  "key38": "2bAtpJbkR5kRjXQ7XCLLj6yMMjH243k67H59TCTNP2keShzUMtpUVHRtFKUMLsSCpC1tBsxzsrKXWMUQgtHLHf5g",
  "key39": "2uXHQMpLq6xoy2MFSDZBQqhR81WcLeCU27Mh57Z1fGZjen7ovmiqYBsUnKZDn3d6NQJCH6Try5trnEhnCHLHMQ9R",
  "key40": "rQg9xFKFDtjfF6EdLMCzVSC8ErnMBZXLXRVYqeDngv3kXP2iipYoPBxnsvMSmrn69eXVwXqfj9FAdmod3zJhZoA",
  "key41": "3QNSAMG379Ajrq8TkMbjcXb6H3kXJduQbqs9jwzVZXDY9MoGxJpRBVUF5hE9J3a1PtfpyBCuG8B8j7bGXV2MemQe",
  "key42": "3HPHMJCsjV8jhHqJwqq8fdbBJRbjwj4rcYomVts1YmqTnZLD5iop2tdr6oz1d6CvQ6C3E4SmR99dRLf2PWN7b6bE",
  "key43": "4gQYbqoJ8t96WZG5rJLyfTv7B6McNZeGN12vQD1qEZ2ZaccCjwzQrvBbuF49pJdXsNt9sBRwtGudyoHY2chtfyLA",
  "key44": "4NX2WvmyPeRU8KD8Zspv1WVJfC9M2pgUvn8kboCx34u5JLEGwucS2CVZfHk7yBSgoGb7DrhAukoXzfhGr1eg4pSf"
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
