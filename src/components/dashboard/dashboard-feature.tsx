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
    "4LfSq1SXTAsdDo6qe66jwCbWwQp7CxLbLYspMBiTxdjVbz5fNbqUTyzsKLrYSufFxfibTobYy8p9r6qAyHvkEVJY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WGHdhLVP2c13pvWwW8n5mEVCgQsUdxnYH89ZVNeJBDgNLNCmpREC4CRNX85Ra4k4UAmfXhDcgHMDojzFkKNcabb",
  "key1": "2DMfe48xuTyxuabsPx5UvFrhfWVVJkuF6vfKdKtCMqYSk75LSYscxMjDNu8XNR7GN9GfWAcPM6wLWKpSwyaRXftK",
  "key2": "2U9x5VwD45AEWgp9TZQ138daopuHFGM4QgUADDDE8VV4spXz78i6EoRKpzG7G66mProjw1TCq5a7QmCP5eQCJ2uD",
  "key3": "2qug8gXB8tCRN81BHkLDGhYWGqNdKXJaaC1irdi8iJ3As8eSrYCqRp6u2m8wsohkmUQsQUbhCMuarQtxPcGCtaqu",
  "key4": "2FVcTSDCvcAHGgLy8YxNb6EyJmo7NhJmrZtwXxsDbDShfcbDB6c4smRg1a6iCF7NBLjqpN9hn3yTCuphqYViTqe",
  "key5": "3iCogNSHCN3fdLcAmHiBBZUfVerA4uTgoCoGWgCiXZphbk6Qxg4rvPTcKUPWHFjEqfetT76mwsK2oJ5RmEDcwLQD",
  "key6": "22LGy4sK9DbQ5XbkSmrjXErH5S7UZ8TdparLt4dr6puH7G4xDdDF9ZpPmTGQHGqHRdj5eRN2dRc9DEjgkt6c7rHW",
  "key7": "3wUviL7MdWBTDNAc5Lwu4yWdRC68bdJsWiVR91quBBhBsZuVdYBYDVfXNrBXtfBi52wodbhtCdMPKh6VTpKdpANk",
  "key8": "4kg4rkgKHWFDTo5PmfbhL76orKASJCrC7D7LrbWh1WrS8iaUhHCkhr74reArf5fMV1KDDsg9KgXvBFr53ZHs88pd",
  "key9": "2Kgd8vZj1zWAtCvtD2BYdfksELmXYsW6ceNyb4GSDsch6zZqQGgZfig7FjkABGxpRR2jmLaorBxed8fsNfLMrs8p",
  "key10": "3x9Ru82ci6X3fYxb4Ssxi4KXoRG3BoQxy2HLG2bPhexwKddHVbTe372wmiJucmnL6PGB7CXbfiRZwxrDnQBxnetn",
  "key11": "5npv7nvHztSda4zTptFuCfPWuT4UN1PUqDfxi8jJpR5hEUnuEPzUr7ixtZioHTLT9Mz8owUC5i6LNh9UmyHZJSYe",
  "key12": "qgQMBmm7kqQQsokUq3LkTs7mzz1DpAFvJ7MCsdURm69D3fBsF6RXeNMmmAQTzYRRHwTHpN1JwoRVBmJE6KUBnPP",
  "key13": "2ddy5BUTRjvtBs3cMxAcZCgWkcDfBL2KN7d1HnST9gXpznaHNwhcAktv1JoEMstcFBmXfnqgzuo8EYh5nzXhSZUu",
  "key14": "54tsb375PK2i32ZusCyfMPys2AzLWPDxaXRZxmdM4DZ5tLsB2yazncsFamx1RSM4RpGcjhNLn8wnKu6XEDtBVs3j",
  "key15": "4b9nMeHtHTo4uHBTNhEH32DRbRt1dyjUTiPHMdXiGTRWKMaPNP6BTXjJepefiArUjdKos3WBjpNZPNq8Vg3MFdMZ",
  "key16": "2GpQfo8sCS2H26LWQhTef2yiikrb1znpTCec24JZFzhqxVMXFoBFurpjm4fFZFL8MKhWYwjfA2Dtdt5MqZvqmRGM",
  "key17": "2DhvzG5GKZ4grJNNqPsC94zaA9yrxxZtJ4PkknrLR8XojKpfYhKR2arMSbHA4vhrvi1pHJwNsA7xSVAYhuMfNUQR",
  "key18": "345gP3wNrFcoZbnAoWL5bTDxeTEdVzv39E7Rq6BnYDautouRHHEhW33uvRg6RkxN8bmFcBEED6ChmNdLq2C6hunR",
  "key19": "4e88c2ZZKi7YsC6xb9hsCECMhPWrKAvYajENtCCRmNUw1Ae2SHMSkJaXQUTkum2PDKfQxheY8xCCPuG3JufJ9aa5",
  "key20": "5sTdTrrwtA6CJudaoGyE4ZxARWcQ1twpjtLDzdWxQSaLJmdjbH6BVQRN3KtLNK5drjRHGYKEMEn1iQ79EDXER7eL",
  "key21": "4FvT2Ym1HLDgrAEDmxupa5xMgXNLxok7BNeysbLBF3RVUNfpRzi14EayZSA3fU1RQCLXADjhmgbK8Yvi4wC3QezA",
  "key22": "5piGYBg1C5MArKemdJwbt3MyKBDXqY16ZLJ51kR2AxTuMNY7Qf4RbYoK7iyzWhcqznFJkY1dCzkXfaVE4xmyjyTV",
  "key23": "5LzpytKUUQHdmCKMVXpYA1L7NiwrvxNaFgXW58WVRqhaxpv25Cj4cdKrnmkQKPAbAPC4DUgFspfxMP4WBpqm5WaQ",
  "key24": "47LnqoVgZvqPKV7BeBLkC7BdZrj7ukpnrEuQok83gvCcxBFeNkeKchUF1N5DTG7Ajszp8FQwYKybdS7EUugqesYH",
  "key25": "3t9uaUVJ8pV8SUjfKT6yayEdFbtRUAYgwHT7yyvZC2B4ikgbRPc4RCvp9NBgk8FaTZbXbcxCE7wM3BampcDuFc6n",
  "key26": "4eG8opmmPe9LDbLDdgo7oLJijPqy89i5QhdM6swfzQr3jCHq1TcctjPkBBoJMz9sdUwRzMKD2MvY6hxrdiuqEG68",
  "key27": "2FCkpvhejRaxuRXG3kDKcRX8EuMYFRYP178CZ43mgnZufcyV2jPUTVFZzKr26QWedNzbsjimpSZfXStQU8mrdgN5",
  "key28": "5UxMrTm6JfqeUxVH1hhFUorws55taeKaiWRWq9TXo7tkvbnCzYHbpPU4MkZJyKmciZmTGHMUZrKNaiHkXo5j1X95",
  "key29": "3519JNFvZRZVUsnPSxUDpzqoPxRGCw4zjbLwy5MC8bshTENStAKGwK1DE4GeXP2WpkcbehBFLCo31qB9Cb4jAUZ9",
  "key30": "86NiNadoLE88niBN59q7pimFDsXoTV4chkZvdGc3HpYPLbDHvfPxeHGK6QD6f5uTmNWRT2VMPHZbNxuyWpxj54X",
  "key31": "3ca2vExXZuRHqtAHP5hWML6Y7aERiz19ZcoJ4bMbbbWhMmEkx5dL9cNnHsog5UTQSCcU7dZePAxGawCPbTWLEWuG",
  "key32": "1XMVgrSbTatFwpKYhCsmH3oWTTmfsc9ArYaVcy8iayWM8VwPJ7pRR6gKUSnjmmyy2xdXgRs28wJfxfpH28MHMwA",
  "key33": "4VoVhiR2t6HQcoKfRxxxHzPiQJ4qRrVbi5gjcfQZNhsaCigUdiEwweUUQdQXZbDW48rPhgjEEMFkhNiFcY8koms5",
  "key34": "mrZ4WbeFJLwkAauD4UUptSHncdTkd9JCH4xYYkoSXjWtbAHNzGHg1XyhxZ56TPuGQ6uvWCKbCm3euGkSH4vUmzm",
  "key35": "2UfHhHZ4mg4EStXTRqzng12sgSX4hJdMLwvpiqFgNFsEw2gEqZaW2CGWDXpqyVNhVBH3e117dBoFBJSWo3JVfkZ7"
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
