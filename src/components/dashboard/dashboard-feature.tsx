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
    "2qhCvLTuPi6NUyECrPJgg4HAFAEKeqH1b9QRrg4opru7CP8ctCLGnhJuWVXyTHNDfTzD6QzEvFbAyFAwssq59JkN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VrLNVS9zShR9smwBm3yJKkEskMJLNgwV1wQncZxTF8nD2DyDxmdx9kSaFDiEruzpXbBQQBa1gZqReUJtR9HJzpB",
  "key1": "59EGz5YjzUEzsmGX6ugWBFkJA62n5YSrGEVCaCPqEpBnkMzMVQiDp2dgvMHDyAtpRTp82VunJVLwkSEMdPzHZyj6",
  "key2": "JYKMEFot23rfspGAV268qLe72gA4iUP83D9u5QCPykavPvVkJE5MGdqZbQ4UqmpCo13QAVTDnHQgejJSGwsG2bi",
  "key3": "Zc3pMd33YYrQTjpMkSergcUxK68Tu6FCu4VRDtiPgU2X4fe7TjwKDLz4s2v7qcTLrg19ib8MrsAU1xpTPothRpm",
  "key4": "4UCP9CicLPWgtBUPVotWfdWAH9t3zVNcvsnmf3M1qQfuL1oZEmnzVLkZTvBZ7mKgTTJzvxjVVzESftgNJp9SLjQB",
  "key5": "WGC46ED9SNm1z4RmVfqNPixmtXSwYWZvhv5uJ6jF9rxYtxQyqRHgz9e2kQzUZrGU5cUrsfajQUJ5h1dbvrFHoY7",
  "key6": "3xTWbGu9eCqrLkGLBb9u3hf3NcFTdLmLMt11ua8nK2hUXx9Bw5V5oX8Fi6VU3GiFvETgAfb2NfjefLi7rMFbC6bv",
  "key7": "3h1wtTng2bp1y6KTXxroEJskTgRLZGxW3GzRJm8Kv6Sin8WHr5dRTgRJUgSEYQetEfpAwznfgANCb7Lks8sg15tY",
  "key8": "nhZZRFdcmn9LDW7aLfwdyDGi2pd2avmfnzAmSvmeMsNdEG85TpfywoZ7kDpL4F3gzbPZ4Z1f31LeCCKguFeXLP1",
  "key9": "3CTXxphr6LuXBtmT5oAsLEwGsaFLeYBnxcWFL8TjBTkKoVMnhXK6JGuGj5Tckv2tpzGpptr2pbPS4MwMNcBi13Ns",
  "key10": "YT4mJCt8t2UTyYPv2syXk7jT3fFeVCWs4eWUoHV9nW3q9RKmGWRpvu7SUoCVcDuP84LQMgTfXRAxG2LLv9SmwUG",
  "key11": "36q4oiwT7dYm27HvkcAfw14peP9cUVLA9YM8Pscp8jJXNkXaqjkaqMEayLhPN4S4BzpkqBu7WQg5xaEWsARDTrfJ",
  "key12": "4oyej1yh6wi3Ly3WwBR5VkqD8fhk1zicKrg4Sc6AjTJo11Q8qeUwWFPPTYY3X9LJcyeg8HydEY64wiMgW2jhCJK2",
  "key13": "3iR9ZBSofm3ZAwYXG6pTHT96f2ZJPmk2whhVbb2zeVkbWfST5nncEGd4gxgZiVKJmjBnmggwRnhJ3ViSb3T8ijvm",
  "key14": "5tjMt747FNgHFSY8T2YWtvAKa86RGGPjCdPkCA1hZvcc2d1x8uzw8G5Ju6aum5SLHLrB1LWPWeVmhYgUN59uSJnn",
  "key15": "4SYvD91jWR9BDkuYaJKxhEVWjqvtGSTrA6fiWFQCz1YWain9WL1gJGjGQWopB4bqSvX4MeC7HcPUVtsQBcnZiFp9",
  "key16": "323B7J6fQcNQ68mRRukkhfdByQDYy2FjZWazdQ2BYuih96HzNfhuVwu5FNmNXiVRrQJGifCshFiRSfKEBtPqNgsa",
  "key17": "3fvqJ95c9P8hPnDMzLvcR5jrZDkDwADzceSeHfmcLATG1d52x4B8Pdf539CSLP4xHRJuXuESHQdR3apHoTNtGk2Y",
  "key18": "4W1MDi3RjfVJDGZGdDczgERekJznEkJZyGjR5mrm1PBjPvpj6Tti5wgybJHu4Jnu5mPNZbWQuxFbVmsMke6W77YS",
  "key19": "4k9aKgvzZkYugDGuXGJhVHx7anbjrfFTE3qYwnQAsLyGfsqvvLdo4cJ4NCPTXjbrSqEjCHDhp86BN8YHC3fvm1yv",
  "key20": "4ehKMnt1JBFEMJWPSZun7Hy9gjAEyoPvtqjcg2aMvLfHaVD8iRqaRaioTTWFhqdee6CJZFjsN2n1KMEUX7kfH2wR",
  "key21": "25MsYn3apeJakYKNyCQKhHE5DEPcq4d1mQmNPu55zRuWcfGnknyGNSpDWpGsekfmVZiTKrAdmzUHyNezQ7LMB7xR",
  "key22": "5aaNnajGK9scYBMz1bH5jaNgBQG1KZv35gM3vQ8cj9MasctSzXAdcog49SAbMoHC4evByAbpJsDnEmo7pRQHZaYg",
  "key23": "5zcd7Qkx9134pHAX5WqSXBxT3CysuPBH9cCQdB6iRZ4K9ewz2k8f6N9kL1dqU4EzhjeRBCobiTqtmxjGrjMKVhj8",
  "key24": "592bKvNGdnjHUYXgSx6AVJdL2ridd4yMmqAEZRMKk1fEuCFjus597qHtDGKRKy4y47HdsS2q1zpDfHuQE64o1PhM",
  "key25": "3De7bCTk32yMSw3a2jg6UT86Nwoi6AApuRPP9r4kFFGd7ApTiic61hhVF1hGDZ7JqngstMXdH51GLwRzwYnrqURB",
  "key26": "4YyUmZgPuBb2839tYyfTcx88iQUsjy7QymvbvpsEJE64TXExy5K9zLcpavpEojsEsg1Erau52SKck2Ghb5gyTDgr",
  "key27": "46opMvrC7QWJhoSXeFuiP8VomCTmc6kJpxtrKgGUd9mcsithSZ9UvnjR62PCEiuN1DKC9bGbXshk5gGaubhn8vda",
  "key28": "3fehswh5C7rzQUebPV2wTSes1UX7v5yokz85BYowKfDh4try5X692rBWrwpBn6xip84YW22xPpQNeWE3ftoxoGv2",
  "key29": "2xGMk5rFkMeFmVmrE9ae8ewgLCJGAF113VLnPyJzyvDYMPc5MJUPDdsRfWSz5E2GcGqVA8jeG2VZcouYcioPeXkD",
  "key30": "AgHCxvdqqqVxyvHECRV6DWK9BnEfs5XffY4qXQxKRGcxmC9d123t7YkZCDoq5EE5tQsChzPAYiVtfrQakistLMY",
  "key31": "2pHNiXzM2ciy2FQBB1t3tZkimP7WKe6GNkR4TF7YM5cyErZPYrRo2HrKpCyNU8tETBnsi4EyxfqLyvPcyARxjagS",
  "key32": "4DCMcYptnsnaKZmaWnVPUQ1Ds1eaQTpQbBB271xXtVwRfibV7hnpciTPQUyX9iBfxbwasTFM7dzG1fRaXbpmuBH8",
  "key33": "3J8kJpdMe4yvmD33ZXFi3b8tAEFHK5zAmXqTnXp4DPn1fXSUoAVRPMVxoxq4L9GLmFNkvDJYCKxuBiCqPmKJaG1",
  "key34": "2wVwHrZVq7KwwARx1nv4tk8u21ucby1MPd6xjXznjHH8uFfCZoSthisdAcwU9o64oMYYW2BCbKTTuZzDDsQNZL8t",
  "key35": "4By3PrHSBLhoNdLVUSMzpDt7zha2JjWGdLuDfNURZVUGbGaZZFS7wsEjGvCmDFN5xGaDpaHfcBQDcffg8A8QxSW6",
  "key36": "5qmSTCvf6NGP4TpELz7xPc5thwZiELqotYa1bWyWS24DC5XWK8fFPoAtGZkdPYJdND1RmgQBb7Csz1zDZ8UBcXda"
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
