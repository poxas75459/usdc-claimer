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
    "2jH3DvuqEWketcFuUTwn4EByawhGcCui4N87JXwy7p7DEmTPW3hTJwiPoUv1vxjrZx2heppME7xL7ecJsuAQAKk7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5S7DNGMeafcLYu5kz1cwPEEbRH3eRzy46VQ9Z3YgdmdwqtAiET2svF4zsK8hLrNGEwodg73NQFryCGQDrKwtn4Ni",
  "key1": "39QSXoSTTeztRDFiLwcNT1ZnjYqFewpmBrgGCaAmPngC711VwQfshFfqygYNbENvftzuKwXZdndte6rS7ZBNswQa",
  "key2": "5NCbxubCjvv6RYo3FGwkMdxVUmuxBhJRNNkkNGZhMPhSTR1ZbXrZx79bvYB4msWTNiyzM8DC3vmMCew7jXv9Nxfh",
  "key3": "2w81GvCjXtY7u4yoLEcTdp9VrDo9ZE3vNn5ajUNDXrhDjmtfHfd1autFwMDtLTS2kensN1Z6QQwtVDd4nGC7JTSP",
  "key4": "e3TkHWMA5MxLuE3wuT5CtqFExSe4NERkc4sBPgjhcHs7ehviVhJuSFcBHsrxPQrTLjbeCjPRYYgLLSh9kWKrV78",
  "key5": "4VhYx7zJ6jq7WCTUBNYVWDjrucSix3GHXEqtcTDRPCyNKK8KCkrMMxfRV3ThbXwxE3fcV1t44zp4ZtyeJnyFDo7Z",
  "key6": "29VkatH7j5WiqTqmCsMemUnSiizWmmuDnmeedHToiSuMHG1hwHwiu25ipoeWnLFAQSQcLyfPfEvDSprjuwPfA6rK",
  "key7": "3HSfybsviDtXro5b5T8JDnfvPsDeuCRzpNuurxy9MjVAuVivtHBBEBQpvRViwP3JhmoJD1mc14ip1GKKCbN5cTWE",
  "key8": "25YJop1jKsVCp1cdmVEEBARXUwrQd69imq77tgwSswfit9Dr5EQZ591vcjEg2XUWiLEJ7N2cZ7mp7Mm8aExMSRVX",
  "key9": "2T2KmrKttTnyy8PUPVXSyio559UC8xLDAAMKbLdPsFnZpCDRUPG2eEy4Zw4xYk2iEL1NWeJTRGz2N8XKWEjzd6Ho",
  "key10": "5dU3AVpVf6ZQmMFYzDSzzfhjL6MHAUDJps14KNGhz8aNVRoT5wk7stw6i6UVgkQ53EnyLpfzxMdKkBnB6ZN7qoBS",
  "key11": "2YujS7DBDsGYFTEF9oJM2CwuvZzkELyQCumT1VhNUXnuRUpqgwoHAFjYJ3PEBRidZebhoKUhvkyMLeYff3wJFV9b",
  "key12": "35dCsHCN2d8CWQ9f3MoQCFAgArVsfYBiFxX7FnRCo7Ci6EDr4CgBqEQLUNH3C3N86EsWcDLnRP6D96oA85J2EeQB",
  "key13": "55KDbNCxpr2diVMBGhPsKm44nmYeB85VSiBhWoFwrNk2fKzpPEud78QjyJ6JNzcWANAQ5ccqmqQGYtrH2N6jrRm3",
  "key14": "21qrf47sGhZEKKqZEAMmSsDFAKGdpMHHswgefxFQqGrDkAYoVdbR9FyRgMx5Phx7NQZBw2ck4trudgcYLmhptpYj",
  "key15": "5Ge6wQtBcU7scyoK9VcuV9ySPcbdE9zfxunPfgPu7WoPHxN3EkQtPoj1kjNJcoVh2AAuC5vP6vagxE8ftFHpF5yj",
  "key16": "2hhbe8KhNdsCprhx67L9xhJ356BQAPyYQ6kkJaebxmz6rXPyWrHBixfzs5kEqH3hqmAaxgVr3CTDyWnmTQaRy2KX",
  "key17": "4i72BhmsnobGntkwYDffGknXwdoinjR1QcVdZHyxCUh7zzzccLoz2Bqzph2nh3HXpZUs78VEkzC6QRio3fiS9kUX",
  "key18": "27yWFTDDGrqLqUtDJELWsYY27Wq94YHFf86UXYGQ6Wy9Lmq67i83yth5M3aH8wfBJf5KEhvbvswwgznb26hFxv7S",
  "key19": "4YYK11k2HVBEUsfcvw7u33qH6w8NTfZaYhHXYPGfFePR22vZv4pm7WncJniYMroBLTocZTuC3z1tLhwEiYxZbeY6",
  "key20": "x83NRPczEJYNFADZsCrhXFZBJT3pu5JR3UhpMTxTEocLjdAw2VTEKRXP972qXZg9E635SPfhSezX1e534LZELQa",
  "key21": "62E2bG54DWCx9wB7BBaD3isBMTqgLtvzKEgw7TC54N9ZCzhJb3Ljuc7hzmyTviBCAyfttB3PR1i6ge59S7QtYTyz",
  "key22": "5PNDv5QzcF1k4ZyQmKmQRzqoEmSeh5eTkTqjPozHZE5LbwqnehxZMhY8frdBm6KdFKEny8FoJXSnEPfGn94NNCSz",
  "key23": "29kJYf3h37ztZZwjjxhyJkuorAAAPhQ3XiZtKfRCfumpLZcJLWeXT9jxhoQE6XxdkshqSvCvezbu62GasRHemopQ",
  "key24": "3eyfiRsKAinLvSy3edhCAtKXk59DSzzcpUUAANaxK5CmSBHNokUQeenUQcYqAw78Rfzq2K3GKhCA8nf8tR6NcrtN"
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
