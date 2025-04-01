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
    "59iaLLGnritobAfcAWf8L9VMB4aRQE1bJzLQcHJurLJnDNUbM46U9TLbDirCwCrSqTMuHKyz4M3KMDrcpb4zhedY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D4VYq5VJ5qzT2PB3mi8KqC31CxDi4m8uPy6XSd2FNpmJ1LdqyuT6epWyrfsHvdij2EWAXrJBmbpi8o4DDMuUdv9",
  "key1": "5AfMgjBqeZZpTiKeDvJn34XyPH8atyRzstwihyrWkFQwDDpwK6XUeuCWBe5VJQWYpwVevTXVC6dX86xUPNyrh7M7",
  "key2": "4BB6ifs89YDL2eeVRozh3m6hageVsv1U62H5EPcwnuzidJotQpR2G3u8EGtYcEKTr61g6e5NjgmqojVmy7Thxb4k",
  "key3": "3CvoKtfG3zva4o1e6RQpsEQfaZUaxujYznGxGBRLGGmhhgYNLDKpKeTwC7ZC1rNANiRBEm6zhBK2QDvUDBhGAtmx",
  "key4": "2rTtEZVw7WeqJ98HjCug29QpK5nrxN1CRjZBxCyTs1E1fRCEjgaagAU7tBrcVfn8ZGboNKVdY96u7uYSYK4cgK2j",
  "key5": "55Qy3jNMgFsjii7eZjQTYhHNAxD3Nhion7XZTumrK7pnRGc1T6PvCSN2F1RNsYTkchbDyESbbLqbpXPciZwsPiNX",
  "key6": "5ZFAy9ZNRy12uH58RmegzBR2n5N56dzKXQipgmFXAVuuz4XRLcsGZNwgxr1RfaZzYd9HZfZxXXVv3mEVLtHvcdhG",
  "key7": "DtUCsCESkEaQrSDg9SQ7AVo1Ue4qLWdR8qiryH31Gwh5unH3YUwirVrSjkxXwT5WehSndBgXhGy26WoGaYw4ELo",
  "key8": "2uMKB5xysAX68rTLT7o6TeeYddBbuqtY7GQEmzCJPH3TVxxdqYwG56ttaqsFQGTpqMbxANJRZFpp1k5FQsaEs2ki",
  "key9": "3zCKDCMhjacwyJ7DK4avkzk9DQfd1m5fwpD8X4taYH6Dgi9KXHLmSKxEBPvmTZAFFYKiD87LNNg45ssgdGGsmwhw",
  "key10": "2qzxg7q6xMy17KAc2Q1fTh9s4du1nmoe4qe2iqsdgyPKhUCqAgVW5cg1Ff44Ske8rXpgNtBEpmjd9k6MWbmQKKyo",
  "key11": "3N9nSYUhSzmcckYcjVUup3VfqxY6q9URHhY6QMBM1jjADpFPYuRsuXRpqM1hVHSkYboN7rfHMngR1LAp4cPK3G8c",
  "key12": "4bNMJ16NoqwDqEdJr4RnXdTa6V59SHcUpj3aHCXCvoYpmuBzgxovhGUFLABh5QvkSJHVVjS95XHC64uuzXCW64CN",
  "key13": "57SksNLkseNwHM7YECtv3npa8wysWmSqPMwLvaQ47DxikZ3Z9Uft85DY8TiVg37N1VFCopzqTzMT5X2SXuw8H8k9",
  "key14": "355KyEfdh2pwmCbZWnQ34amsB1nm1nkC978XSCEKGRP8h8ci5WwvtBFZwYC4h9WaNmQLWbJJjjrehW98YqGChffC",
  "key15": "48pSG2PLbBiwcetQMyoVmprNiaNwVLGjUfjA41zjsvgv71kXwxrjiKdGRxaJUjqxiw7Ay3DEz1wd4eRE68DE3P1Y",
  "key16": "65rg9zNSxQUPaNomfgvBssXj9TkzySAHCCvy8xWz8LTWegKPET5ytWLYnSuRnXwC5SdWDUEvshah3PLsjz6Exy54",
  "key17": "5PQRdLQZGFGfLc2UTX8WfbS8GCqTxg6HvFQ6hG2vbgQ8noKuPAVmMjXP7bRKburwFydXsoqoWjEydi6xgBZyo6f1",
  "key18": "3bVx8iKNJe7KeKRZyvjXaZJCzogsvaZGspMxeEnH7wHHsEsn7LCBurTRBVzg2iTijHCjdCwgBsQvH4diSYva34ZH",
  "key19": "sg7gxQ9pMeDUMEmbaXi16xMa8dZN4ZnEPFtxsMLgC1uPYks8CF3r8jH81vx1XzgNPzjhGHCGx9ecEN7UDoUcgRA",
  "key20": "3epAb6QFMDfYQxyzAXxPUYdE79QYFDiuf9ong41LuUV8sh7be7TEqU2Ek5Pw5kR7HWhDuXVJ9HSN4miYvKwArCrv",
  "key21": "2fQJgCTuHFhX3HrrJXoY3UTrT4K4q6S8brKbHirJTxJCXPwvcgXqcHoierjAR9cCppWNWxGkkUseqQxxrsLeR8Z7",
  "key22": "FWAbKsTWNgtD6KinfeJYcYzBXpkXV3mTbXQWf1ZYFSn8RNWF8bZiLqRAfV91NJH99mCFBEiNSmeNMguYkZZWohX",
  "key23": "4mgvCSH3dxwgCG7E9bHT3UvdVzWDZ5C4jBwH71G5RPtQfuiif4TModdipj4AuFm4xvRNCkg9GJop8tHM9eP3tdUy",
  "key24": "22cDSSVPHmkkGVbQWYNVy64qUeahxx3KBM4drRJmvBrhThci5VWMwf6Aoqv15e9WrDHU55R25TvfQYgxrcENQ5Nb",
  "key25": "2BcFjpnxs8vfmZZdzMnK1tc7jAkBErtYcXk1EZHCCy85mnSSHkdY6UAWs4GmsYmYSgnP1cdPnZYe5FoyaK9B6jnA",
  "key26": "4mteK9YDx6b8dUaEdndrRmvFDAttbC2LhcHzWGqSTZaehZ1Nw4QePckNiW7wFysu6FZTQwcgg5Tkv7meTXQhwN6W",
  "key27": "4M4kPvpabQGR8eYR2veFAQt4BShxNu7w9hJJbjot46i5gjTfdA51vwf4uttPTfzdqSoxRhZLZTiauJGtSR7dfwdW",
  "key28": "TTCgT8doZ1aj1XFxrLkLGfSNDKwJBh7pjmRQZaSRK5HtU8UNubDijUcibqQVzPGXdEPoLDa1xEWkka9A2AsQj3w",
  "key29": "5Uvkn52tXpPNdD3YpTu67MD2gLE7yKQDX1sct1BZzwBgAsXxNGQE3rP2N3wHTxwWCxM9w5msTcRheGkNeaWAMPWu",
  "key30": "5krUp8KvvDiGzZtckkx6BhwK7UMfWjyKZZBTbJWCbwxDYpGSgooCBn6oMXCbobx64knuMqvfxrKdpNwoKoZhx8ce",
  "key31": "3iksWSUbmCgnd13ywd672VmJGPDLToQasSHGDDG6tj6dkkFKgqpByEZ5q8BUy8xBBxHiJxXLKeWwcGbGwnjXVgFq",
  "key32": "44sC7Jogvbet7P47Fb8riqQgjxGDMm2cuh9ExquJXBiZadmGi26T2grF9sxNaP6ji5WKt2hhnfMsvXtL1DZ2zJjR",
  "key33": "4bQ6dVxrkEWSUzze3BzEewTNwtU8yongaVbA2z7xP2SfMjqjd6Yn6p8scLteLUnFYNVp2LJJPK8thswDxCK847xS",
  "key34": "48aUu9e6NeajkzaH879vK9fSXtCgqJPdiZhuyqJaBLNd7vNgeCT9QNwQNf2pYvYRwYY93Gz4PhdeEWhc7RNL5H4W",
  "key35": "2BmgsBFeoh5oKo3Z5MU99RLdRYqChCfVmhfzNZkpf1szR9RTY44yXAo5zWocmcJ1PWMbMEJQPcf5XphW2qmFrGs4",
  "key36": "4UbmDutteijg3HyV5nLw3HMCF3z7zdFfid7kSeZXzGnDW7rA1dyRUbpF19G8Ti85Wx8mogpkgvfY4ZZ6VFGZQvTT",
  "key37": "5MiifxVXtce3K8j8kZQ2EdPYm6GALR8hb44Xy1KzS3sMWape1WiVBKipBknm8e9CAKraSa7WRatEvAkPoMqcH7pq",
  "key38": "4tWoE41ie58gmUk5UXJrUL3YVAku5cf6fHspqS5bLfLhCbAYi9AX7Lhdv88WJUtRGXGHmHDrJa9hA73eHTpxRUkQ",
  "key39": "NhTamsusQDCDSkWndKExzM9mQDqnsfBZ1SSNYCiqAicyevcKD3zw6Ee6VfmgWABpXp3fWB5fBFiHGbxTsXsg2o9"
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
