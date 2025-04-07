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
    "3NsXDFnMTqnM1FCsK66vgzuR7WhovXzJWfqTWcj3SYpPogyD26GxYKj41p4RJp1rcxGjyXytbSTHsqNs7EFXWKoK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bLfHVk27111yPSDBH16mZmTxvvJW93ShbubisxajGa7HrnhQZnHBtoRcQsgLGhY3cCwekzQrTDoY2rYb6CQqzjb",
  "key1": "4VjP6cfAGbjUXgSgMWYmJ19qF4Vq9ymQML5X5zaR3UpfQi77ARSG3cpoU6pRnpfExu2T24KdCUPH49CPMscy33Dx",
  "key2": "1LqgJSdDHksPWTbT3iLbe3TLCdKaTzktUxDopL2sFdfaz7i31BhbsB7iopJEH9fQWEfz2Aj1Php5c4b9zT9idtW",
  "key3": "2RBqtZJQcQ6rBcqxuCMLTNhwVStnWraUbtvFowsYFYooFSdGb4p7td7XDWHDMqsSn5D4vdAFsh1WDPV4Ln5pM423",
  "key4": "3HtYwK9r8B8Dd5L8hZPjtHTMLEA59KdG7pqaUK2uJN6Bn6r3FZs5pC55giCd8GBE85jXHq5p9WAC8CNnH6aZ7c1X",
  "key5": "3rrVn5zKSXWMdCNyd45cNbYe75TpSffBQ8RvBUhRM9UD6uKsJWuSWQiyK4zfPiTeKMeLvP7oo4iaTkGm23naEVJN",
  "key6": "5ZYPyNreTZpP6MGbtey4e5MKVK17vz2NgsQ5V9MuQFwhcZFsZdSbu8YqceKVbGr7pNYuF4BNh7fZLUsdrkqv1M3K",
  "key7": "5hnJYcsfPoYXyR4vGhrSHohqNhiQRBbJJUSAawQiK2quA5VVLJn2GhYz1mtf9HkNpe1S5B4rFtkzJZgh1ooQf3zo",
  "key8": "5izGQutdNXzKwtMwJPF2xxigQ2PAeGbdW4KL9piPSbm4EtVvKJnn5KhVeWjtEnvj3ZPbrpWoxzfzvkV8yTgoxGHo",
  "key9": "5Z7gNNQf6eBsNxmX1zPny7Cxn7GBk7iGnZvP2AHGv5SBrPZ7DeaVXrDTeyqqfs7Rjw7Hn4SLAnAXGAxBxg35cbRq",
  "key10": "5BbLDFELWTJr4cuCKK1aRnQiEt1iBAco1uoAsZcYkeDEXuE6nZLTK1juAeSqF55TBiCuXdrFZTsb9hze9P9bUJVR",
  "key11": "65CkoeYaj2KN2hd8Zb94qKVoHLrzLMCq8Hk7A5FU5WyXUSzAYRD59d8svgsFnNsoDgKEwvX7H53EJtrka1MTPmu6",
  "key12": "JGQ6ajBkvewTwvN9YZQLVK9jbUYXookByZMagrSdcmxqjqz6BgVxm9URDREop9dsiPcoxEKuKQnfP5ritrDHrk9",
  "key13": "3nfo6Pb3uxMEH574uwYp7zXMYbVWSvYY1bZtan2B6rPMFeU7fRHMM9Up3TzgUiYeM854j8jK2M39AWdeZ8mvUNPp",
  "key14": "4Gs5XZE5H3zmY4Z6YoMoUeFhYnSzGfVte6zfocLqvKA1tGf4djsPwrY8QowCyDY1Pwze9T7VFCTNFivjgdcUde5v",
  "key15": "261Qntn793L9DSwmdHYApC8PtG9XcLNPN8uH3KvaEZR6YPaHfRNLmqFVsVYxAN3kK1PdfAc36e42EspAJSWJgM4a",
  "key16": "ZwNELSUB53aXUXoXaK3Wjyez4Zh5h8wj8xaUBB8kfaNVRsXSywMmVCvPBdNTKCdVMjts4HgVgSPAsGyBoVJEnsc",
  "key17": "5Pifqhzzz2BHnzEZTXuetyV1Ab8yAqP3ank5f8wAMwk1rfT2amb59KxjqVptnNTrKJe5uJNfT1vDHk6deP3t4cmT",
  "key18": "3qFsBEKXunK7dsfHiHRWSgLVud5M9QfBkQSXMRn8bKdcidNjTju1c1dhDRv5bXaK2Hyvmcv6LTrSKQzJBcfR6bNt",
  "key19": "3ECuc3Cm5UDSzojigeLoAk6mBEQPtTEP5AfQPPq7fsUTa9rPUNfDHokopv6QthWzk7MxExE2ytKp3z9z1qRjKMkU",
  "key20": "gQxJHsM7pR7iWWk5SJ7YEXFcqBqAF2Wwo8xjubapB9HK5qxBW75MqdygezwqQ1fGiV6mW23722j3cHznsKfT92m",
  "key21": "5BpeGwKfXcTZwbNerKQyms2eQ3jBCrcfheEFw88yxB8Sr52FdUrM9DytrX8saQCP73tB9iNvom2iVRVs1ju8VBD3",
  "key22": "3VVMbVYcVLuzaxRH33M1s49WryrKEzUmBsdeeAzBd4ZY54GJvfQKohxmpTM5q2r3nEmdjs3bqBSXyDFXhig4rf8c",
  "key23": "4epg1T5G1UCAhf21q4vSzN9yesza4sd11Y9SH11vNnbMshb219LUxxncCWMZSwa6CbqGbAnxNd3jRAMq2jhHkkNy",
  "key24": "4KkwkuRdPyvfNoujbxYyzDbSKBBYwBydYkvpeTM3YzBhrscTKthv3psSzFMh7M2zJW83QD6P7V5JYDMEgr6uYSUv",
  "key25": "4JjLZtYCQcXoqgoqrc7nXw3bWhrm3HYYRWkKvAuX342ffywRihAHbZ7ZujF8mH9VSe9B3rABf56z3QMxucX1YuEy",
  "key26": "iaHGmoNUqArjEzHD2gCNCCtv31csBkEtiVgrUvMenfCyceRmvMiytXegWEAdPuLd2MsQ3KH3S2KSU65WxWU1skc"
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
