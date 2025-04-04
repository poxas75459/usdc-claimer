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
    "21PZYmb6eHavncVrDtUC1SVsjdDdNXAQ8v4ZvK6edLKbYN1YpJqfS2URE71E9VLZDnXjVzc3kBmJc7WQfN1Hfewh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TuXZWv7QBWphYuiHdsipuiSTm7RQTe9ybjaJj9NbCtMX3XsnQRZwivfx3p4cnVCkv8yiviJbfAM2iArPJNaMWPk",
  "key1": "4mPCeEgHLsy812trzvnrD5U8qvpHt6CmutjeLmypbrvJwQ4VQiCcoHXUamtJwTqcjBMinWUoSZMXAk382CWRjTyd",
  "key2": "45HjR7i2uHdt8gQkApz33762YcQUNk7xFUjQpH1TRvgAtFWZEZ3X8id3skqPC4kUBsDNa6iMFkR8SSSNUzP9UJfK",
  "key3": "5uN1JkQs3BU8PTdSTpzSuHR6oZUk7XGHcWtFHYE4kNU2dQVBUiqExjitDMaimaFxTzCWJFBKuwpuY1e692DpYqLa",
  "key4": "3EJKHuudKJsnVMGHwghN1kVUXqd7KoP3P7vLRSiPUuSAFQsps5QciARrchkwn8PcQVckgtbB9Zw41vbUkQUE57RW",
  "key5": "397aeGTBBY8ThTf2vX8ezbZ7ZQvwJvpyiFG7v48nvE2PRsfmgVW2nxZrq3v2YJoLLV92VGtXdvAuKyNJFKWS5Gh7",
  "key6": "5ob1ot7TmmoNcP8yzQeQbqDmwwYQKFnZtU34zAKe7CDZgwYmS8AAVst2RvrfaBS7fVEwbxkM2tS6uQ3pjT74iTpw",
  "key7": "BB5jZjHiXLM8BS3iHTxLnkMhW1wY3CVp4yNeYDda6pXWbxHhbzUCKHccKpPcRsTfpMRjFMfhsr7kVhYPnAD9BbU",
  "key8": "3SeLfJiSwWKtgTU5G4PnJUmxpAx9kE9ZwZDiQ8x24MXJsJS6GA58hxhXvmNyNR1FxoNQFPSeccYZy9ABXpRCg6MR",
  "key9": "5j71vhofKKhRWLjZGrtgzQksqdUfGDLHRh3CRZBQVhLi8DpEybcMUPSAosY12MW3NzXrEnwoetnh3m7yD7g6ZBXD",
  "key10": "2XaynSc836E2XDK8iADXsmhjjNGC7AYdinHGkASb6ouc9PVTJT1Kjr1zKyNnc2M1G6AoWmZ79kgfC9Nr6VfExuRX",
  "key11": "5h1xhnxFqEq1d6zx2kz27kV5uV8AmbW9QY1okTGSEGFbtDBWpmHDKemHMLyzUGGCUxc5hSpaGfKaT7nHVPnbyesb",
  "key12": "3YWaqNK1LHikrdCmbxSUgttSfY48EVgQo26pdbtUyAEZbR1nsz9HNGGjKyoBdpmNnSeRsPuhyHubVnoAK51ctAM2",
  "key13": "5jF2hEGvtMVMfRZSFRV4jBziZEjbQTxqMyeYEZdQ7xwsTeRL4UXbjzNCG67532ajAoR7Due6bXZzTKtM51A5M8zq",
  "key14": "pDScB25VR7ySMjG2dEragk6rZLLhArCCzgAJ8jn5rubBaZmJYuumNkLe5F2jUZSQDFZJJGneLhewEtBe41yK3eM",
  "key15": "3qYx8YitikPTGfNBbkRUjTxDomrHXRMWDgdwwHe3z9wVacvam3qUm2uvdfygs1xnz5MT4BLvZU3kYtmxMh71aRA9",
  "key16": "4za1S7ZDLPQ1fZLaG3e6i3iNUfPbKvLWTJYr7U6PSYv22LCqBp1X6BxsqXyfpfAmgJgEVMY6FbjDJRNeWejyFPu8",
  "key17": "2DYxjzuXPDKZHt94mGskNptVa6BMkbtLJDyfidu3q527pLgVprwaPamaJMmafQL5Bh6XyEcQnKXb1eGff9Wz1BNq",
  "key18": "3tLtwDkkd9Q1cVrzmnS1oTERz2eGwW9iDqV2hRAjJc2XVC1JYbfoyNn7ye7tQ2CK2eq6RrZY6QWbUn3dsWq49Qp3",
  "key19": "4CuBg5JBoNynQ6R8QrP1ap8sDQfPHhaVWkMuDWDCwY5MCuiJiLsuLXzo8pxstXLbKYgnZSZMnDYgBhBCJNCNTPAZ",
  "key20": "3jZqtWfw49htLvDiCDXFK465naXk1bcfptwV2RuDPi5bvXawCfPqkSyis7Me8dG54UFfhzoNR5K8en9fLBsxqfWS",
  "key21": "2VmZJMAGYsPrSMRxqAGgkBUAw5Sg7w72By6cUxwiAivzzktEmguDgtVBRTVzTnh1WoQs6ne9jEgMoGjUChiWsZC1",
  "key22": "2ptLoPJBsef4iyv22xuaLhvXswiXhSyBVtaMzXKVbfbBrG65RzXMKWB7aGBMDLyFHSnzUiqoeeLLayJ3ZFYZBv5y",
  "key23": "5DN3pwk7Bv6nKRS2aicjS6bJiXxPBzgx6Yb5jijaYAkL8hNe8nWehwbk1cyMtoSL8wY22MHUY15XHtUmqd5XLMC",
  "key24": "45Gc7QN3iMDmyeWTqDywQCUUxH6bHSGTwUBiqxtFLmxo3SQcUD6BryrnkzttShd5DR8rZbiicZDuuqvHXFHoDQ9R",
  "key25": "3ZdKAHtBMZiiKeLEQjDCMqU6cpG7BmMZdESH9TsTGXUu25uqfSdRuxGp1EkHQMs3JYjyY1cdRksqZgHAYtGhT5Eb",
  "key26": "43FQMH28kE7zqDU7v3LkFiqgoANXHBooac5xnSpXMNPvcUuXz5Aj2Ziig8ALdhFi56aXgwNXhvcNCCAUYAhq1tYc",
  "key27": "5rP3HaRsMXt4a4UqD5tbd9cPURSJaBxSER7ov6KSQpRhgTDjsCC2DPSCGtqonrNB2REeEMTJHuZFE7UHHnycdQYK",
  "key28": "5BrTw2GkDtoh9oobBhtGoCyb7NJAvGueAmMPV7JkwPSz8Vr1VUhThuJUmrhkJ4C5p3Zc5fdNDKrD5MT1QwrjnwKt",
  "key29": "2Lhc8UTEhb5e8dMfM3pUELsqMphqc7VCifoePAcSVv9zenCkiEzqENnRG3iDFCsa6ogh9yEesTF3RH9HDhEpSx29",
  "key30": "PzDQdruUZMjMwdwEmjXtZKkysemsaRNCxgVfvcKr35aA4MmHGm1HoGB6R8T26BygthDUr5y4DdU11ApjxPQfFv9",
  "key31": "4auAXqCjHbNUXYkchqbFNLmDY8XhuRgKVNUudSW3TZBsa7VxDV41U2KMTAiDhsLxz9oQXrRcKAjJNTHiKgwK1wY1",
  "key32": "4GK8JWTFQaRyx6PFWGP2iY3vj63Dw9uQDgY745fWZYmmrEWkwp8DEDeqFgfpdzz4i7nRfBZJM73wvQDh2CFSxH59",
  "key33": "4nZjbRzs6GRe6Un18Tj4eQGtqpSpmP57hkLWNJZyYXNEjjYCYsXrQaMqjm29DWACTbCDXrrvLqi8Q2hXcivoNcyP",
  "key34": "3N3izpbEXCCSMwwkZK6sHYwx2wzsmhvsexAZkyF5z1nBA9P6Nu4jhMv3FfBFovGjnS124HuZWoMxPMDCT823C8eW",
  "key35": "3fDBvTHhK1hFbf1KJoWa9VbkVKXdDxqEWS3SkjkM8y4ZsgZbguFd7p6XDPhcxYsmGXtUw6DWEGKoyovtdNnSLTsT",
  "key36": "45whABFeM9c8hcmq43EPrvUqK8XBPjm6RJiYtp3JRhkybEwcM7QNXMpBNYgu8wN952PYvKaTzjSzpZy7kv2ntuod",
  "key37": "3NNWUP1ydjRrL7rS4WiqnDtL23C4nASgqiNkZSswELAymiXTtBPyx1k94CzueJN1koAmv5U9MxJbw434VonbSP1R",
  "key38": "5qFZRt66AKS7PAhMNYMJvWrW6EdcLuz1Kop6TdayUHcSjfgnjHXm1wkQ7ar7BqeCxvPeu7eW7HSddcvRihsT2wTw",
  "key39": "3qHzS6Tc1sejWuVHLTMsUAZoxvNaESgt7sy5sbz55JHdBnD1wrdme27fWfBukWxwm2hLevFjAGi6VojNFsEH8oMb",
  "key40": "62Az6yNVdz1KUoTsGwm3eoxVv5LaGUVWwTEDVnn97TwseLovqnDt7L9VrQ7SErQ9sczvNK7Skdp9XLpM3wBM8Hcd",
  "key41": "4ncsP9ryqX8J5RE1HXhnV6FZpKJLg3nRwZQYS5Wkzz8Tp85oPzbM65abdBqf8skh5P5RSQGqkgRySdhjeKMbaouQ",
  "key42": "64X5wRovCMCLq1b5F2Pme8Y1nH6UydDXmSk9dXdGwmRcr33LYB62Vo4pfReDHJ3LnaWeGsWcUxSfWMS6CnGTJSUh",
  "key43": "5y57jgv47NHXPA4apvRc93mfV91M5K9QZjUQ7kmEf2TqA9nAusdUbqsqsU1yQKBJ3Mrpk3gSzLHaB2G1zopEYE7A",
  "key44": "4FxcXKipxjUcsNeDmtFzngxqkrfD7rnUzYnSrDDPHEm3B9c9sjJhCfVgDjPUZtnef2AGGHH45yGTDKLb219hk3MN",
  "key45": "4UvmWJkP6NcNhpMCFbFEmHbreGVTHp3TkNLzpNaWZGzysiRvhrQoCWryYwfxyXg2VvyxchKTDS7JvALSPrAqGddF",
  "key46": "oDRhRrss4M2AgT8RPGG4vjRPpHNJJDughfi2rBdSkkcHFqSLb1LyFYdk3byepXkjwyCKVurxQQxRYu7dKTt71k3",
  "key47": "4qbVh6LLzYWi5sAc7aje4f1WD2cCnKsWqwRoBvBvaaFP9x3n1YjF6ukBQSgkD654ko3BEKNSn37FejrBpadQA6QK"
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
