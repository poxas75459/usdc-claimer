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
    "mEanDaPHWa8VbSouaiTKRppPwJDEkKWd5wEcNh9gHTdkgoEmp9BQ4f6iddinvgcaTw5RrWSmcBvD9xMP7R2UXdU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5um3rn6vrNQ4N4qX1y37Y5iPFwZE1oLcSz3GTcRCMicohWm5X1ciWasEYrSRA7u6sUu9tf1WLLziNZB4x9X7zR1m",
  "key1": "4FXnZR42VQttVTrXKHWU5ysQYFzcxev3eDXv622VaVYThJote5VFSKduQUdUacBmH6xNs2qR6p4Tix5FQ9nL4wno",
  "key2": "B2oY6fQsdav7n9wQnyp2zf3ppgLvtzdP6dFSh8Yy9vqs4BhTbGLfXNK9ChXqTQbTd4Lkt12bYV5JuNwGTGXPNGF",
  "key3": "2aL6Xq443zUpmFb8cHdzhEHDUBL1X6viAaqU2CiM8sZmtsJwQzSLAHkSTdhuHu87Y1YvAFm3jSpyo5fuYVErQHax",
  "key4": "NDvsj34NRfTNnaicqoeMUYaxzJk4hw296UgC69bF4vvXJusqpPfRmMno2MfVaoxYUkjjNcSG5t1HDTdUWSiUFU4",
  "key5": "4FtKgYfg11sLQmk4fM3Hwno7c76xSCrTeprU7FR6c7VbghbMYx73UcEStao3uQojssnkhGXeQeSvYEegwNAcY7bC",
  "key6": "48AqgeWQfgAV33XQAtvhDfeogwBwqwntHuxnYiYEAUJLMX1rU2tVQfVytYPwrogJmF82KTQPjAdDoXdaxKY3Ppae",
  "key7": "Ewy8YZVyfAX1P9oN4TSzkmieuJ5HVCm9o9rMUi2DUYmrW9Zg9z6yRPsS5byBSNdDzBSpcL94BLysvnCuddV9svE",
  "key8": "4LoHBZzdvHG7ob1UZoABSvHKTt87QfRRhLiurvQDR6kGDFzcrL4zW7Sphp72AfD9VmyQtDw2zgkkXPEXvCSuyPLG",
  "key9": "36d7TYXVBuS34ShiNbKC6DUGH6QpbsnEgRek9umGhZ783yz7DSyAoFtogKyLEcK6F4DN5UqZvnj4fcEMgxg33RLN",
  "key10": "2eoEAmRQXL7SchsnLoNES2XNDZ9yNm6sMQQ1wAQEp6RpXKyQ3XoKPazrquyF4h7SDKWN1RumpUnm4Xw9hQTCLYok",
  "key11": "4wivm7LaZpGFFPPdmStt3isGqNk8yEhGt5rftf2BeFCGudpo4aq3ft2EVdRLBLwSmiAAeyCMt8saC3rZwR999jQ3",
  "key12": "2YVFvBxGUkBwC6ETiLtz8jFxApA35iNXoktBMohWPoDYuLUdPWBe3Ew2rsRjQraBzAG1M44bvQANCkrzKBw5wZ3z",
  "key13": "2pNq7VydjBSZoNY52idCdx8mCPAD9oAoZVuNS3P51pKZbbmnuc4sV1VaxDEixSFgrohw52u5LZ5LFJCx5DN1MEpH",
  "key14": "37bGq47U6zBL4SDkuhJoVjc3GLsU5CnJLjDedasKajLhQkvJdVJ1T98Qv6b24vAvcLx1WcKSB2oCAKPXLPLFUph4",
  "key15": "5hsptgvRN2eNfPxMdyYbHVdrzKY1tHMMc79MLLiWiaXJt1p139evfQKXKCzKrU4SEuhTxQ9qf5jXbVrqaPjWXpum",
  "key16": "5CG3rQLHNC4URYNjr8zh3caeDWonh2admXzdiSs8opFiUK9JaMeTj6FbeDsxZJP2zYpfqsTwAD8RMKPPgb8NMyfZ",
  "key17": "2PyqT36QVEHqyexcv96CiDNhYMdBMTq1eYqhycWx1tRYAbchJi76j7dJPihL726QGHcwbdStsqbAFxMFPDj1n9YF",
  "key18": "2zrKXUXfNeFiJqw6jnF3nFFmN7kSEamubKdFeg9MVVARBq1gnZeVh2QXT47689RV7twtAZnDNfHYV7xZ2eNKkQr5",
  "key19": "2C6UiDZ7VmqMqGvh11cewBuzA7uGN8H8MWUMHdj3HU54mkEYJZ7hhETNUyqT6j14jqR2BELLzPToGpJqWeFfpWgw",
  "key20": "AJ2N5wAD1MBS6Fd96ukJDjXKNn2mznM3HzuvqDqXYmHw24DssSwdzrs5Z4QsAu3byAhJgWTqk9TVDm4txf4qe1y",
  "key21": "4H46EJUQuLXjYJb8AgZo4mhjST1LjxJpxHhLxFG9LM3sQ52qdzbSC7x4cRkxqDrnXqP5S87zH6eeYfj1Hi5dvA4k",
  "key22": "5A68CPnB6wLR1F6WMWvytWWHXqGedgfW6bxVS4f5ZczM9D2aabk29rCHYHPZVHyUB88vUL2qbKma8M9vxiBcxfth",
  "key23": "5T2SGowSnHG2RGp9vwF3XGzfgssteygucdp4ezJtRVtj71kW7rS5ze3Lsi1VSJFUPnRHKB2e6T5mrJZMqknCXj8d",
  "key24": "26tJd44CNFf6Qw18uLAwyAVoZYDGttQHpK69LK3hKwkZKC9dc5q1ncFhJFcgKQj1HWkr8tTYMQqjcspY4HQuqiRZ",
  "key25": "62gbxhDArPU6NfwyUZXfSjBN5SufruvMeZax4qLip7UFSXM2nzD7RPV4rhGxUBKxY7fUGcjqSP198KAPjcRF35Yt",
  "key26": "4i7WrWf7rfcVrdXRiEYC72RaA9njNSCXyRQhwxtwapu1EKSKsRPzdnrdbfD65RvaurFx3skkFjnH6qD96vvyY5x2",
  "key27": "5nXdVTfNp8RfVbK5BNt6vqQ8eyCypA6ysemAXZdPcYFUw4FiJ9UxGVwCSdBLJ6VcmGK9jemfpFv3b1h2WwrKKWzi",
  "key28": "4bgHR35xo4KYEesggRQ4C6xY7hEtPbiFpMXPYWv7d5Yk7Cy9dSXXtHgeW1fV94hRzUqoZTSgrj5FtXesthZhfvqz",
  "key29": "PvctoQECsW29VmfMC1zB2VQ13kempfNUbshUVDMYVbqjxNMv5zoa8gB8Qcfi3XwwPMaFU2FuTzFi2BKdAwwisXA",
  "key30": "4eBDA6U3ZcdEr1EhTWJigrgFQnq4yNBo6fcUNzUXogPmH4D8Bn8cUC8LShqjrXeYVzYuSaMtUCQjix2hmxFLvyJz",
  "key31": "232KF4dC6VMdJj5SoKK11msSwKVmEVhLDbFrBXCXSfGQwvdzvZYqxBmMBqdMPUzkWTji1uWj7Ku5UiEmo2ucRWKM",
  "key32": "4aJsSq7aa4fDGUxovEiFCcaXWMSreCiJGQhPkWiY4soSeCnpjMH1fPbLZ2KD29gekwhKv5614j476zKU4Bfhu5Kt",
  "key33": "3GH4p2dsQiyRph6fWuWxYdrNrBt5Q2opmJjEsyUXqEGrN8dBs2GEc4dR7WRuFJbKHnKWgaG5J4FDWcQ9aAZLDWeS",
  "key34": "22q8JpJZRgSL5zA2MFHSgFTLA6kgyz2reCbaijyeHR9PN36TiazsfBLF3kffpnH2hFZeq1P5PkJpFrxmpovd2HcM",
  "key35": "4GboA7Qr4Ry9rq3KRY2c1QE3y1sgWKzZ1SaMVNBU9JtX6UvNYseiqV4azJcuAJRzqfYNZpu6Y9Wor5zgppf6nGyc",
  "key36": "3aeAuf8FACt2nVPk3sPzVoziZMWAZMxhBns4bGXTW6CwNA1sUS1hntGSNhS6pWQVD8dv6G5Xovm3xd3QdXkn3bgm",
  "key37": "3rmA9zrnCC7PdzYD8uZnw5qcyqBvjJQGLwGU6WVpUYVHKvq3t1JhDFkPef7CQAbFXdmuPEJXyAgyP9XxSE67NPDW",
  "key38": "2iyjFvVC1U7HCn7L7zC1iNGsS5wxd6HUWY4ehZtWEVeNRvGTmm1x31Noq8iQLs3wMrjU2us3n1tYCbciB4j19Wce",
  "key39": "3hJ5Gm4L1ZFMzMmQsfPxXpdjca5GGU36UTz1h2yKxnS5vzgP1wYMSqa2BALXD73LxjN889AeE1WyQrfA2sMp4Jd7"
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
