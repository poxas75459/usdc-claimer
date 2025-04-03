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
    "4DnYJVVmDmVrL7FKHHZiGyHmvAWejETbupfj5Vc2NxFUSLoxmcCJbHCpsHb8Aw176SZRyZPvHNBBeE98pxHFeVnh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ChEZWtWcusa9cZdFnPEhJf8GX6JaLxGsf9CCFj6fzJRF9pYu91ZJvV88t9cAWxySvm2YDQVkqe862vTwhZifkpu",
  "key1": "2uZLBm92ejBTjRw7kqjQmtCoZiNTLXpiR6Noi5R35rjc8B2FbzvFDAHVEWhSK1JxJ2YbgxabXdwwfy6pQxMcY1xD",
  "key2": "4Y7qUWaQfQQrTsKDMvnChChSTTrXukLn5mmrit1X9Mgng3Wy8nZuxKNC18PCxMEm4Z7QJbFJhvQnm3yEnUCFwAc5",
  "key3": "5DpU9EFjzd5Ceg1RWKQxzSNAiTfP3N2kskT2rDT6Sado63KxLojtXbb8Rudm47U7hdcAw5VBSRUQ4co1AXoMVcqH",
  "key4": "5TAG1L5ZVYZZr5sBieWPb7DF9SDookux2R7Q4TbSb1ocrVH8ZHG2YxRP2ts2i8Gzs3MwFxQV8MafMwfn7PWr3eRK",
  "key5": "5Tj11F2zWL9it9ZYA3c5bqLm8hCWoqc2LbCWeMcHusVNfTzcxJaVVz2TY9fFV7PeAZNFfEmwccgjfAuPPc6LcTBM",
  "key6": "3ABuTi2Y7pRM42jGGoLrDLzWCFeS9WL4oCuTou7zr3n2Nij5vgCn2fMHQMVaWbTvwxTjbZJcx8MYK2a69cJnzKc6",
  "key7": "2wnAyE6Dk973UcpuUkZqxsqEZx3zN2DaiuudmM8kCkSam9Cdj46RPH74TbmuFfrug7CN5fijaLwhRQN8XufbdnjR",
  "key8": "4PYG4fN762wSBUYWSoXgQmX96UmEpddftSE4gX7SD4FzKj95yvm4v3owGouZCkZevkVtZE4mrdDEnt3s4DajnQaP",
  "key9": "3cP3p6tk32JR2xFnAiDMZD4Tk5CzDx8gTTK5hZj2qLAStUUahaer3Vcqh8yjLkVGTEksuVZKD5UHRAQBzAPBCADa",
  "key10": "5ejdmmJA7DVKi9mFFsfhETcTbctUm11w5rhuhmzC7eTNWSxYsbT2gbqLKVKBmnZHieBQ65vD4Epqqv85wDy3Q2Ef",
  "key11": "27Fx8j1USmifP3tKZP6gKWxyWFq1AuNuEFRejckx4bf7UKx9QbnYc4PzPgRhjVAjBJjXwqYBjsTZQLjxr9USvNfh",
  "key12": "3LYBw6ResNcYUy4hEBbPdp24f47rwynf6XQCu1WtzoxpWmQSxo89EcmkSR9hXLhQFkx9EWeyrZ1dxweG6nEhBBVM",
  "key13": "4dtBTabqpVFAoVEFULfXHoGiamsJ3UqUoa6iDLSfCuZzNXvqJA3XJfLwvk8gLcqMsARCp5WJS9tXx6RAVS5UgzhY",
  "key14": "3jrk9Bi7A9J2Hkj3tSTJxHtXAo422S6ZuzvuaK5MDD1iuutY13AbXw4Tr6HZnSkfhsej2u75jGXxrKjyyNXiiHoD",
  "key15": "K3rDUEa544MbedSpXVjtCoXYBxQqRWyNHKWMaNaWJxrkg7DEapzQEjhpUEbGtmB2YsW5pZzuDXeck9cpmpfsKYo",
  "key16": "nERVBa8LwzXyv59EwhjvKFBjcjAnff9VExFyiSNX2mH5nGd2N22GwhBfg3p2yc3qnhiPxTZ8n8caXpA1gA2bdKA",
  "key17": "55LY4s3kYg2nw4fNZRhM216o1mrJsbqLj2QwYdSkgPeQpZeh6r6yVxAYTiYp7amJvUUo54PXdmHhe5MNRHNjnL9A",
  "key18": "Nt3Thp6ZJ1sifoGX8M78jQu3Zw6wramapTKS8xbTxgVhLty6YE1dqXHWyp5KJHXT7ZqoJJoP4MyfUhFqRh8Qwwe",
  "key19": "2rgKgschMxbTkzyEPToupmuw6Ga872fSXwiLAwRfYKCoBZAubZcocYrRRZybP9Dd6BVnu1nvGXACeF8Src4ZM85s",
  "key20": "3JW2L2Pekrw6BTCzuz9dwUK7e3yAvT554Jk6fT2vc6TMuirYoCYTTDfyu1siqaTANwsHzGpcXTLpg6UNNWnGJnLU",
  "key21": "3FcmSKtW6DyAseAvrC4FccgLu2FJprtZfCbkYie2q7gPubZkzkgKA25g1nKje7ztXArXDkBbPhg1k2kTECN46EaA",
  "key22": "2PxCtdyfsGU2CzMtby7LrHbxfiTTSngK5q93vDBUFEBKCojfybzHiFZfdSdXA6seBNXFumLSt5sA6anWqcbT1VCq",
  "key23": "57abz2um97Hi27Mm9zDoUyKp8vJAoqHED7H1s9Hwbs259zxKDAUnudpGEazWFDDn5T7MLR9SHSAfXt3X7qxkH8AC",
  "key24": "47KaBKFwcCWnxA96vPqqJkAHQE3CdURs66eoe22fzP1oKQfRuQypcnmE3deR3xtDhuJsGnaGSF3G4nsSQx8r2mWk",
  "key25": "UpHk75ydRnmGuTaeA1MKmH4ovVy6dshpt6wQGJ2kNxUNJjdpckd4faWRep4HZMEFSShPfPd1C48Ais29HviZRVj",
  "key26": "5eCrosUgrLncm9efWqUFvJXWExLNUTHb25j2dKUD8jhZDq8cXqnYAFGroCvtDqLr2fJKDaCG6CrpdytXqxbJKucd",
  "key27": "3e8gLY3TwhX4haiSgWtqBPk6nRkMxnjkfAEcRiDe1outKaaW1AZaadpNAeD3xSJDou8h39FLXqnw7Z7qozKAMbEt"
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
