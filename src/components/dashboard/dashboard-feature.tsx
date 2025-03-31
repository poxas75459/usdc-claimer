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
    "4QJLqH5U4ayrMUh6WaR4dCex59Jb8ym9B65rt5XAnA8Wf2rTo3C6kBQHnM7oy1gHxagG78xhZHngn88fdMtmdN5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qbJ1MThqqX52YeF9Gr8sdCJP616tcWaU2ByKmYveG9gPhQNUyjL9UVLrH4NryoKEnndggjgTAihzGA5Y4rKNAd5",
  "key1": "WxdbcU2y3UXjLfgkTtXDcawWGGVEELtB5yUjni5Qy816QSXHmPCcbVcg71eUeNNbkYdk758F3tzpA87ijCRMbZp",
  "key2": "2co2vhnF85dqjA2M1VPDvg2FcYtCz1FuhMtx8NDYF8UtVAPJCT6W9LwHcsxbeTx8HRuTKJCF9tPdVn58ySGdEJRj",
  "key3": "4a6uBzSAbSzs1YHQzRYTAKwz14QmD98VYBiTsW8uKZi6Tfs3XcuFhvc2J8a4twc3tqDM81uy8Kx5HGcW7otningu",
  "key4": "5BUSNBME689hDhhz8eDPg7omznCLyNNGQ8o3rchfuC41f9rTi4GFiEt9Nq4iDwhTZSrJzVjtMZ7otbQKKECydFFX",
  "key5": "5xoW49pdE69jSLP6Wr56UdEbHe1z2dVvxJtiVb3evpSbnQC4RSAAZNF81Upi4jToR8f8NvffEbD324m81wsu7YFd",
  "key6": "5xrxDP9GwK5HEEKZ7kVcDuFRNKkygnf7ZgyzjvNYhg2yHLifcSk3qZTqZ9L87gTtBFkvbUrRroapcMmuVSP2F5wQ",
  "key7": "3fgmtGySYpbLHxge13ynoBhWUF2fbnjQx5cpnhEfqqkkQc3WKcKTYXfrubwcyHGQccv2cmbZQE7Ar3A3fccaQUj1",
  "key8": "sh3ASXq4MJXLudsgeHSPxSujha2q5VEuQegcWuFD2URaXw3ww3L5LyEzLo449hHf7GR1dUVDCeGfSY6kh4Bh3rM",
  "key9": "5bEgxiKsR71rdRv2U4rMyLRrb5K3nbNUTze41KvYkvxjWgehg7VzUT94RjDD7bMukpxKC1DE3EJp1uNTzhuXH58L",
  "key10": "pSFLkF8f8xsLasRGDg1hC7c1pQzzb6fyNxZPPvkMYWJ5SSFB3YrrFcCuVBGyeqATFcRMYX7CGW8Q1vFXsFYdP7C",
  "key11": "3NcoJ55YEsoHcKq6hTYxVYw9SWDyQR4TbWB6dtExebok5t7QJVS3kiPgcu42XdESdYmQ7GUDKY2ZRnJnfwEbwZrr",
  "key12": "g17VnhCyxsEwAbX97f3U9RJgQ9vRvRbNKiD2hbYi1tmsyPLAypFwRVcT2peq1TzuUAxAUNTExuUDXQmFhmWJEnf",
  "key13": "hwTBFRbWnCn9E8Vg7W9fhjuCNDyz3bkQRSbhMQJQWoW3Ncwv6RzXQ5WCaExNFQHKyTs8cuh2tfaA938GqKPaBHd",
  "key14": "z2ezgpVc1NZfKkbpq3MkCu1c77u5tsooyH9asQ4gpZXJU4FeYixffuGJYcuUooekHieYwCZdjhykhq5xrMPMkZi",
  "key15": "2SDhiAC7b1btTeSzeB42J4m2hM92AVj8R1xhhGQRRB5qffA3ZcMzYZba84ZHycrmmwvNCTNE24XYmpSrFcp6keRB",
  "key16": "5MMgGX9kwwN7q5Q5NR4uS9oa3QinnGdxsdN6ZVYiBbereZERTUJYu2uuZJHSQyYRXgGhpms93z78QaiqakajfsAy",
  "key17": "786DyPmmEo4iohRiLhYjXUfBc7Yco25YKg1Wzcgbx1vbGYZsSGfPBjnmGgCr3PG4oiWw3ievpiMAeABcsiUA4fQ",
  "key18": "4t4kLRCYJQLCXYDpA5VKhW8BrhCHp12HLuLDYqPEkY7qMZsuQaEXLbQkzDCM6GE8FE6DvrpimSwFzFwYFFVMJFRL",
  "key19": "3rD54GhivmLT21Cuu2rgmQVpo9wU5j3NeUECj7KcECVc4uQJPdeZR4vfr72iRWXcv9yhPR4vTVzGYhmgjznmXfi4",
  "key20": "5sesbkT9DvfLYKUvehYhN9PPhwV62YALmGAGDykQmAj9TkEQJ1rQPhd4u92o8SRN9uMGjZ7puxT54XLFa8332TVN",
  "key21": "36wwzDVGRZSgR4Z66fwdmGX48dpGwdqGWqi3oeD2eHQS28wRk3bWDk8irsG7S7kRVu3G5HrjPMsjAFPMuyAPPTaR",
  "key22": "5HqMAwpgCH4fmuCuxfCGVHhu1dtoiPFmuszefQMWrNVRfRv8f4x6RgZbbfYtVT8WwmQhXuEYiiEtmEW4auyuPyHF",
  "key23": "5NFNFz3BUmmpmvod1Cv74G5sfMxfTBG3yV1MsMz2uuNEWyowNcbHo3aGYim5tUvkgSbnDaBDgLXNsW5EscVXn821",
  "key24": "3bnHPVaD2khKuTQC3sjhtZJeYwwqFRGYZfN2fcxLhMb6Hm4gW3sUtDvUrUDDJ1Rmz146XADr27o5QZZi1CvxsMnv",
  "key25": "2MX8RgxwELQzH27yZeSF1pMzEqYsabTTUT8AfSV5Ecvhko71FFXT9kBB39CqcWW9uytuCUA52cUJLechjuCgJrq2",
  "key26": "52scf8t7uh6g7WywDnW3RJuTN4mJ6NUZ6jkfR1kUdrDdcwWBHKCgtWBvJPzjpzUZerHfFVytAg9dVTC3TuHB68Qe",
  "key27": "27mrbtoHPKGExYps6S4to7neZwYHPc1sE3cQBxY3WjCZ43gxBKj7P5nuHX9CUUt3QeDcoYnWkrdcvuYoxhV7fTE8",
  "key28": "4TS1E27WbVuaye6y46BH6BoueYvYuNxDbmSFudGAxRF1LAJ4Vf9a8hYGUFPJWxnk2WaijAGecHhqoRDiMCUymZW8",
  "key29": "5zseQaMsHRw3Rx6GpD8sanaCQfRgJdGucNpJELs5SmH7Z7gfSRRSbXQYs7kxkLgvE28enaig7eDS46kPMm2HMBJ5"
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
