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
    "5tF3PcPopmYt4dykJ5oDoBmdNUYkmvLhevPVryTX4eCpuBjmM18BAMBabPUpaRrPhmytAGoTm4EqondWVNAN3Qk1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "f8gyFs2Kuin3is6JePduZarx4oZte5uveLHQSBpCvoBvav8jg9Bg9xiut6HsqmtESLHfQQfgkyRSm7kZjWF5X3A",
  "key1": "FKbiWWiBdVYYL5NgsQaVJaf65NyRQaZGWrJDrDci5NXyZ3e6WUzGs23aBP6v1ZpoWBvYEUdLiL7jvB4nYNDMaqk",
  "key2": "sb5NKkqLhciHEyiuNNt7dxT1Je3AytHCPbnSMr7msULimQz3xsX1fDZX7yFQs4qyMsnCGCNb6iPCvtryfATMTZ4",
  "key3": "5tC7ZM58dpffnR7eZnpA92jbzppSzfjDYim3wtvfag94zCdTYU8TyiyzZNeifJaAKg3QV2ZxGfdhzRcHjWhKKvQz",
  "key4": "aKR7iyXypANjmg187Xnrwwjak1pS5jT9wprm74S43cntoHBNyJBcqbyRUjwJG7bedX1Unw3BDi7KGbkSFkLpmCR",
  "key5": "Jmo9p4ieFD2u1MGm5TXxSuRRuLchQL484o7jBfXu6uKVvrD75jmU4KmSmFqA8Wyo9dFrcm1cSRBNKAGXjQ7Zc1b",
  "key6": "5ULM86zcWDdWsGdsGBKuvjTTeZ4FyFhsc7Kj7XiJcm9gXPEUM452fYaSjSwDgoiEuUCBVhxQyrhjQZNFizY95bue",
  "key7": "26HmMMepcBqhdhGUrb6FdPHzPp3fV72fbQP1tNwNzjyeWzoH2Qc9x3ufG82BC2bq2kk77WEZoLtnBToyaP1HtcQi",
  "key8": "3XjL2yp3q37prMYqV9qpv2TyihZiV5xhfaraRarPsyahjE9n7pckeJN3vy2aXsu9V4M1woMpazjsi6mRpCkfd56L",
  "key9": "2G2MZuZjGzV3KYpw4qcxHZfcs8mfqoLqYBehWKG2HhrvNDqgEnViiXtv2F2EiqGtEYFAUEebg8zj4EHpdeRCL5bS",
  "key10": "32x12ZvDK7Cv4WULH47Z15oCznfc7FC3ZFf7D3YpjbJdTAQWQHYrTtSPSUhSgsmLQy4nNE4BRmFX5bTcaRwi6oLP",
  "key11": "4AKntasPiXD3MpDb46eBJk7VV1dmhscdzNMPVM2yFUv8YuzdrQtKp18obZe6Y5cvy6hDUyGGZFGQnitX1KMawV2S",
  "key12": "2s3GV4GBAgYcwfh69yGZYjwjhxkAmDLv3JfaW1DvB9JroAvaU5T84nfnnpmacJuF9aBU6Su1uQgnuNCZZfkaowPF",
  "key13": "5XW4Sv8wvvNcJiPurxwFBMB8RmNBzhvoDUvJcsnijBheBCBnxJ2cQJg1CuAtvZgKsK3FgDrCULRwuvURAjB5FGTS",
  "key14": "2n5iJJrzbeNx7LQv6HSgJkUTi9Z5J8aWuJ4ZUi4m1AnnqtLLEAJhf57ttJa59PpjpipA8CFC5Lp1s7EXUdKH3zVU",
  "key15": "2KJ4TNPNWyh33W9Mh18bBLAWxd7tA7iV5sN3kimTLDE4Adi6TAutfUDoU3TnJNh7RzTueJWVGnZxqqctvE3EcKRQ",
  "key16": "2ubfgub5EByqDmaLCVice73EnTwE3mJK9bKChzhx5wPzNUyRCpnVkAPUSU5LNmy2jURmZFbvPykgwzVzFX9xLWd4",
  "key17": "3T852ejnLpaFnTDeVZ5ZRwULFF1tVjdjsgSvhLtcyZtJta72B8U7JdPLBTAciJGbqG3pPegX2x1YeZkQRnoWcyaC",
  "key18": "2uQdryMQekFyWmwU6ZcQd5vEKpTY5TxJ4HzVivM6iEfzrAUUnQrML1JHHwt7dGWRsJ1cYSEgN7eHaKknnFSt57P1",
  "key19": "MgNoprSYaDGGd6cCZhDD4NzqKjyhXWL9yn8k7JLNBfJmhR8AssU1tkWY3JXM59UHfzrE8Hd8ZegMBgtxV5s4S6m",
  "key20": "38etvatpt85gGw5CzaymW7EdNE6oRNDXueQWAh1zb1Jeb3hpkX7Ak5MgbZYN4kJykTADFwdfAbzUuc6SBtncokZU",
  "key21": "5Bpt6GTSv15YBHDx9k8Gd4vR1orjQacF4vMoydSkrNcDQMeB8V2Um2BWBpa1zUrDp3V56aFxBQzCZRZgFmS2Aaoo",
  "key22": "3htvoPqNC8Fp9cP2Cj1D1tPHnZVLo2UjaZ6QpfUCoU1KZ18pkyHFfWcpJNaW9HAosegoTebYaVmCUia3JjAyHvXB",
  "key23": "JnzcDC4FirMnmvD1pYswF19Ap1GStJkHD3aPEzWMDe4LkYW3xrgJpHQwCEYW4t7vK8NsZUbrW3TBKjGBc5gFC11",
  "key24": "3Gh1wRTkiCgRSTT7nHF4dUFQiw4QcBo4DLT3Dx2DGL8hKHjvf2aLmuSydqVh4csgsszdsaCA6oxiGMFUPdLHy2ZU",
  "key25": "5DxcPk67WCWHZJPjzTxhcGp8tr6Apb9oJboMvJiXJnKbirh7rqBbGSMfcDWh8fLwZ5WDuaownWiz95d2XsMriVc1",
  "key26": "QLG4cf57tnkU5cm4cN7DXBWNJU3gSRZAd6qHeg4FH2u3BNRHThXcyei7EV16LrKvjNvYedG4hSyLin8rwsrSpV9",
  "key27": "4gUSz4g6Jfbcd2PVV8MrWMwmUqsCRiZf7TrxZ3ERFJXC4TzPdgZBmEAUvujUP9L4fpUwdCaqDSF8ChYAXM7od6iP",
  "key28": "4Fe2KSN4M14cRCLYisBhryFswbbNa9jC87uzR11Y7TEu9C3CeGPnF2yEksZHWXpXQ1bg5M7Bpt1WvDdszok9UEna",
  "key29": "5N8xT7bNPVsKAVCMyHKWAHTu9GsPNVrzBMGihkZzhdkWE293bzS6iKQehRhMsFWA4vVs3oH12iZHduFKi6ZDEx2K",
  "key30": "25HYMaSJX2UEkuAonZuoR1Gt7hge48pZzAaFCzvKaJ6JiFSoLgZKFBYrhmLrvhi9YCXkSGZFPu36rESLPxNRhAJu",
  "key31": "5FuAmg5WDj7TYrU3iKH57mDKE4cbcaRHr7AFjM5nonaTJnDsmUq3dj8ToUddkmmiaFDXVK57QHL3c7BAMEu4E9mk",
  "key32": "4F9VYm79uJZNTjy6RXa13BmBXyaMGVPfbe572aT9ibiWh4Fchew7EutWvkaMCFKiRGhK72AghBLZwzmYrx2Hou9M",
  "key33": "5JFU5ePh5AgDAs3bCfSVrXjKVRj33scMdzqSHXH59zbXW3G8PrMpXoyUGRTbX8CEhnQg5QPV5LZou66wJKuThzSD"
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
