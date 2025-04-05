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
    "Rx6mannUjS9eMvYfpWSh8cZSETVR99MMcdN54Bxop3zdtHy8gra9CsRPaYRqr4YT22uS9nH1Skc8h8YNB3fzBza"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Grev4QTDpjqbsdmkRDJSGdED9ihENfRPsrbrjMCzvU77HZA5MmvsPZvszVVgkGCQ2L9AovM2HWEq5bPGFDkuxE5",
  "key1": "w2WSGFfL2fs9fckmF1WiLozM5aNWAyW2U39nXWayNoArtsjstFEy2RWAGFdeNRrGRUQvBqUDcL2S7AfSjXK1gk8",
  "key2": "2xA8msMgCcwEALCiCD97dNbZ4Q4mu8ZfD1p1jhrB22qvxDt9U5gBiC9vRmWafMuarVhxpo6k5YNFVAwJLYsmw9NA",
  "key3": "3HijJz6pvTk51U65q6yRvUSNeNoUD78SURwxgm8MkhmTYAYLh6ykKxefcUqYcNFjdQJFViVqo4RCkBch8kCGCM3v",
  "key4": "62cQkvdG7phk5p9BzuiUNjgD1LnYZ33JYSKBCTJhFyU9xdcgZPgp6BgdsaLXMGeXqxcsCRAZwErxQ1WjCgXKYqqL",
  "key5": "2R83Yg1eBUtTDA82cBfLtonvHC3RLCxFneMADNdUeFDkpMDEAkeo5X4MxPFYpLqL3spfA9p2L8EQLF4ivEbc7vfN",
  "key6": "5mx72hs1jQnqE8NcRit5QJMy9fCM9Xidj1Pv4rLa8SV6pWBp9s3K5HKA4M8g3Crb2334L3niNRFoufNKoRZ1ApiE",
  "key7": "5tSqvWMVrNDMg2KzfDAANs5TeiJQYgs4LkxmrsoCFgJ3toenZsApdiQ45SRg6ap2N2gQy3AX6oVgojudgL4Wi9LR",
  "key8": "vTKdgRchFPwPUjRbzMbYtJbqPkkPyzhJdo7ERTLuYeMkcdEwLSsuHUEgV361RqiTCJw4sYQcnqG8ESP3tskLxK6",
  "key9": "5VTtRYtg7Y1PupHLEJHAuEXu9kUzUciGb5F2WhNoWc7MH4vhGT5EdKCKktD3DHjjXGnJna8UKXi4tTndFT5ASJYo",
  "key10": "5mbU7NRPhfyy7WwVBmzXx2uGD4XTVadwMyHrMvGB5ZEpay7zTXmNRthoHCsULGGLWCgHvNzLebNHCr7PGK4BD53Y",
  "key11": "mD5ufHkKd1YWt8RSyZhYvcdtuheouN8KPbc5cHRxF2vJGEfwQ31gxSJZuLkEz3AN9BgGyV8btD4WHaHegFrxKWS",
  "key12": "4A1JzNbEZR74YotDMP7ofWhc2GmivfpnFipwQNSN5HmAE9Kgv1thhuvcFgtH5Q7iz2BXBnFaBzYSUE9WSdeWgaPd",
  "key13": "aJdoJvwx9jrWQe6gYCCsZQhDZC6tREYyit5UX2bfkLfheQiG5wW1srhzXtBs3VUvyKssUHvJER8gs6BNUsif4YN",
  "key14": "mTW8RiHyRzAZPYTQ88zYnR2Xr7tr98veNTGKuoMtjGw2ZskkSXo4rjzaCoN8NNsM1VtmcnbczAAs64xkLkQXXyZ",
  "key15": "25fwnTDK4YtUVGaZUTzULVaimoyuAQFLENvcbW1sieK4wEF98Dy97YP3xeQfooqwjBmnVtHG5BFu7YY5Zg86ih1Q",
  "key16": "Hd5MXaa1bv7iyLtXi6o9VHaEYfzkoU5w6FkEfShnHbcqSEAhcBD7xMjNtMuf37WT9abxxhNBHStUBDqLPnQ13w3",
  "key17": "Lwe1brsfd8iEyhZTxwTUaLAP68f6Txw9DTQGhbW6DKuEGGZvyjuS6Ep5L7z5eQcDR88AbCcndwJNrFiw3arceQG",
  "key18": "5ShAByRw5YY5fHmpoQp7fQnMyyDDYBXT1YCbAYXBJjo3dQmHEEi8SrM1hVbW5JeptZ5spdaCsCxHcBGpmRmJJSD7",
  "key19": "5XZagWNzSeb7FaGRWi5i5vCZD8KKzJsk7RTA7vk93u86UbftPQ53BWqYWHoB5mrwbbU7yRNcuLPXPvzuMJZT8XEv",
  "key20": "3ARo5tVouyFsqcK3gJXmKmAUttKM1bkafSRW6y1ocXk1ZnDXSseot4KC39rtkKHk6zSHM5PPpzCaBgUasQme3TGh",
  "key21": "463Ca2M2syKZDAUz4e2BkH4NWLWh8HJJT4UvxnHpjH5eWcXKLJaQZ9GgZWLvkiPhcthJczayD4V98XfjtmHNz8d5",
  "key22": "3KAAiTwsaJ35QF2y1rg7b9RqNQyja1NLpW6jCSRpkj21REf5z3M3su4z1R9Fox3qMSErjJuyNXr8JGkBMfsAJBpL",
  "key23": "5iErfmb53yaS3ZQr9htrrWbBrdQgYVfPWQo5cvYF5Xtxjy4hBAguN7W6n8sqFiCDKQ7AXTvmVMRFYDnFsBU1bxm1",
  "key24": "KfbFJ4dtKrd1saYCRktRShHZMeJXgfyH6tHAGa1ci8KDiokusLtcupTRk4avLzsMB36pTVzNB2zpRgSVct6sxaM",
  "key25": "4okk4joLpi3MRXBFoCG1FyPZrstvrwyoFddGPfAD5SPUsVqFqeV4YdgYNe1tTU1iLfDWSuhuJfNFLJsY8VVLBWBG",
  "key26": "3ceyydZ8weKcmuV7mVLDSxmS4Jtfi9yQeyxtdbsYDucF3uFxu8FySsc25BcFWBGkDqeUncL3AyrMpimS4WnghrfR"
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
