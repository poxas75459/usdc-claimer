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
    "43p8g7p4HrR9LhPVwvyTqn6waE6pK1fpggNzLT6MoAWcLEp3n3VVvsJWARrhLJzdHGKLcGh24wf3Q1G8Kvxitn1S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2X1havs47hdKHyeht9eECV2SJMqSn4QmZLeRFv2qowTLv68wrYgCkTUWgCZmsAVQwa7uYYSpsLXiBdC6Z2ohBScB",
  "key1": "wbF2y4jvdKqFZ8JXNAK6HgwsiU2q2uLSCpG3cBomnqjEBihtE4MCGVFxraaMmsCKvnUqq3KavzzYf1LdsDXffYV",
  "key2": "4teUUGWcXBC7TjNGYJP5aVmhCy38o6eAtZXPKfkmUB78RezYPvm7B3BJ5NGFAHfzkS6qkCXtFuYmT5dsFUGjxWt2",
  "key3": "kVeUYouSUHhdqMCbtPxKaZHMCbZtmutqL9Gs3S54UtVzAb9PwYrmfmTRXijKhBBfagJwGoUVFnittKDA6NzvcED",
  "key4": "5ueWjgvF3SAC4g5c3DXu6sNFQGbuYZhEEfJHbW8e8vvBhz2f6kdPajEpXJD3S3xpF9DD3a94Q7taSgUdFFt2Adae",
  "key5": "3PXcHa1bmmm5q55hrfVoKqfF2tFzuuzwgbSESzS3R7uErSwM3RtAm9Ew72wgbjMo7EvtAVSPKvEpbamjUZvsuijm",
  "key6": "4wHaw3ajGviVmtmKwkPdQpB28gqDjXowJVtq8PqLJsC3TzSme4ECYfa6RcyWQvuzyt4PSXuK6QnoDGSKrscovTYg",
  "key7": "3LwgYDLg2a9QzSweTMSmHMdXFFmyoge2jFKaQN7TrpHLwHg2pmDzeWbk2LyN83iPUizneNTjrrS4MV15fKWK6DUV",
  "key8": "3E2RjDmmnYawa4f5Xeq8wYpf1hJkJ1SL3HbbbvCEEu6EV9QVBnsqBvVBG79at4V88SmkoPVEV7KXgi9JEU2kGuuw",
  "key9": "4YioVyRxoEiyaeyuZTCQJvbwFs2zcmWBW7CicFfSvtQ5fb2dMpHWuYKDKp89YVa2nHk8tsRVcnbGAa1o7bs1bjy4",
  "key10": "BvzcuZYToakBg3tqEHefEPE9D2Qb9iBF1z86UZ9MgxpdfPtb1itZZPn1obRjxQtBKFiT63QRgwTRMMAMyGSv9K6",
  "key11": "5kTUfqifA6pW9RrcD5Nr1DPZufeMxpLVciCYabkWCsskhxEMKbCsobwdQ45FQhVqex1nDRzWLvUe8nTVkcwxLA3F",
  "key12": "2BnZ1aGUe1F5vUDr1xASS8wM2tRwPJ9gzuzRUaQ9grbFvR4YQ5KodjADNfi582791m1uWxaTz4f5gAnqFfhDYcG7",
  "key13": "4XQLGeEf18j5U2zZfAMD6v6YLArXk54CURh38LX2qd3WDwpf3onJtWEFsttMCGLKT2BD8VNtCZnf8w14o2iv6Ro3",
  "key14": "34BXT1Pd5vhgjaV8R9iZjyuX7JwrAjDkPKjGaPwGRMWX82UkqiLqLDwpyuFLcyaXgbXvQ34a1GvZkRXb6onSibUj",
  "key15": "WEBRkeJu9aKLrE1amnujM51SzgUb8Nbpt5Nhkzi65pcXgdiDwpGjq7vpHY5deYqriNaToxEm8tGJ4D6Gr8g4wFz",
  "key16": "2N8cd8kbhET4F3A1cyYBPHDPUWxcihAzyMK1zQKK7H1MoWLjeEwFdZjrnKFtf3g6Ro6ERyxgHs48QzZK1qDnSQnu",
  "key17": "2uuUJThcb7x3gAYb32agHudcHKPVctzba54cA3gStxvMWYTXtBiWJiUCUMThtHCT9pzHRhPezMxNEGkZu4n93PQT",
  "key18": "2doBRPhb6xnfNxNyC4cWRgAfNDoCfC76j5an5fodK3m3iwNuZuEfbYDbPAcE3rmBcF5hY6nywCqJrYG3ypNnNqvJ",
  "key19": "2Fe52R2Yy2ioDURExh3RwNpFo5oAsP9epbEJC7bwef9nVa83gSVmZNj4d3PJatyHvqEDoXKipT1UWh8KbrPLhZZe",
  "key20": "5KcSg2xz61H3yeS6q9xUG41Mf5QmzRX65TpCJjjncy7TreRtzeF23VVwtXtXAZx2GPy1xGoBFHRHf7GkR2XGKYKm",
  "key21": "4oUirofBaRpxML8P97QE3v2EWizKo3LH86vQkTud4EnYjueWEn4Ro5yjRPcMbpN9WJYp4C1i8a5sKxjf1RGrBtRj",
  "key22": "4drY8rtJLGuvWC3wc6buQyEtK3cADTEcYsvQC1FHB15dh4G6NLsykM6WmjBSXqZu7UQD6odwunttDFm5WgiDP4gh",
  "key23": "3WqVWARPSUnGezX1uabEZ8KGh1kr6t4Zj3Pj75QPtrkFvmk9CPUZHXeC3S8wpbFjRQrX8p5DThdgTdzKQ6vtJVQh",
  "key24": "4MDZmVSn8Rr5NmkYPpDF1n4U9Zo8A4L6vT3EXTpVCjCkpajTWYRfUwFXNdXgdyNBjwVkPmaEnv6GkatwrMbQsR6S",
  "key25": "hmkCg7XDnceU3pADtnXtFzU2gN491w4yJH9vLcoesYApWYGZXBKG4s9qrraMTtwQ1D3iBUeCCTuhB45t8M29ogg",
  "key26": "3xRSi9st6DDmsAApCZ7bGVe3xCzEFUNatJMhNvfnLzsNw8JftTE6nLuNM5JPZfM1rnzrNKvL5UpwLGq9xGbY6ci9",
  "key27": "5PRa8eVvsf96gZ4JkEe3422jmZffymLxVn53YoN4bDyFMYr5HSycUYXbSeBjHNf78ujYzDVRjg85nj2Ttj62pHLn",
  "key28": "4JCjpTJBefatkkJGMJQhNzpoxohTKfvcbx2MR8SVppFtEhb5TbintswGyAZd6G1NW3kHUb1qaXmAok6cxF5inEtu",
  "key29": "2QnWoTyBuYiAuyuHtNtqiXBFANy1XRxDxMKYGtbmHJMU3YECwVKFTK1StbqX2xwdcWBotN9Y84sFHUgMGycKixWG",
  "key30": "BQPVzfQrgmeeUZaoCWYsFbDe3HnWPS9PP4JHURsibz1SrrisxvWGWT9CBBJKmdc4XYbK1DXvZTF1x6TyMM8biVe",
  "key31": "H2m3J1v7XqXr5S7RX95knAvFnnrzQw1gZbeY1VbuDMUJmajKZPHDMTXZVv2ZPpa4rX8e6UPAaZtBVu1qTiZho5X",
  "key32": "DobNR5SaWvBmdGnH97uyuSpSQnK4xbpsrHpEhuPdTR219EMiQQMw5uNb56cfJ5s2j6rrPP2aZWDznLgoRJz1HHX",
  "key33": "4RBKTPL1PdFgjznQ8Twu3MepHySjP3WwRDqq8KModdhfMpgzeU5rJCW2mgB4paTkXmo8ZMwJJyBWSmBTunBfFMtv",
  "key34": "46zvCnEfTuD9mfBuqLnyDtBg7s8nkeZtZMG1tYgaJRiRcmJQp8a2HNY4ETNXSGVY8eQhGsHogLJeVQTspykJucgk",
  "key35": "jENNMpEPSJbev47XnLMPwwDe6bHkq7vbG5QmzYKUzfAj7WKJSCVuSB6T6db3hiBec5vwPPFLDagGn78tJMKiDWA",
  "key36": "2ubJPDUw7JeFWS1jCuQ4ANQpscFdts7pBdgAKCSBCitPxAeRC4kJpnPxpaU3SbyM5z2Q6CEx77hVX2gWvpJq2pd8",
  "key37": "SLvUhXU4aLAxzjBLGQEqYebiyBEY7nVPiJzwrNZiVbjnshVseUPB91pXDs4AZkDDLq4L4a3T5Jy81gkJjsWvQyE",
  "key38": "2RnpoCJPzzR8yKSfKz11ckUa1zVry4xwJtfJs9M66KAaRYREMGABPwV2Q8cGVyA8H5GbCRyGuzv64XqPR2MiH1wj",
  "key39": "2FYPr9aq7UwgUmCtWbF5phqaGsDSKoELJcjQQ8yGqLQtftGdzpeC9rdxUAE5kgHzXGz4bDr6Fy2jApUpxmz5YWN3",
  "key40": "4eacrBQbb5oPTAHKvpkmnH35da6ijaemkArYTokbRan7w86kJigrtA3rCyXZzubuqhfuM5dAmxw1myKkJf3V2nNp",
  "key41": "2UKSRsgp92rXRGeM5pzSVtmDedpBHxU7VBENiQiH5PZAcbhowTJQBp6yimm5mELeeRNsaJEhXVkdhSzG4zcCKPZw",
  "key42": "66T7DQepJaPjBsE4F7LJqJweX2bWEt8tztkJnpy8zSou3HobjMaR8dfeMJntmFiXqvw1tjPvWCnvHxPgm57AB8ap"
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
