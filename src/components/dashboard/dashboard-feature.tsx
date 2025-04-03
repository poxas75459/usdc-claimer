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
    "2CMc6hqKVPCuVoFKV98mtqWvuBpJRHkWmKi9H67Pq21zCEnBAT9cnawZiYF7i2Fde8eMSPGGcWsNZhm5SrYsWDz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XaGefg6XmrsBAPcCDijuf8aHofombkG2pe2x8eBLoqjERgEkgPBMBpeoaWj1cZVSk2nzKwvbtzAEV8MCBDNk4W6",
  "key1": "2EPiC5BXuEFttdtHMAmk5paZRSzWX4h4nWmHfwh5CKDYsSFFTXsPJ8G7Vaa5kaJV2bXk2y7ne87GivSmYsppkP9",
  "key2": "3MGnGWoa9BR27MtJcZBJxvxqQJpdRT2YcmQxZwR6QeKDFjtkNPPBvQd53EbGgTeAYNKJQhYgJFiQv7x4GbnBDcUE",
  "key3": "34oFCwd5YVJ3MtncSodbKFLfm1r7QJprZHRVCdAeaeVsoUjGE77J3STRCLLqB8kw183jjdhcphxfZjT3YEeppbUq",
  "key4": "54AcPok5eZEaew9DTVax2tEpFdDKdTj7Lzy2xXANzCRGV8QhUkDvNfFi3NiSN6JS44PnePbN2mg32EdFJeWDfXJk",
  "key5": "32dDifFgHm9Bh2C9YRJaWPeqR5Q5AXTSDSDQuMusa3Zbw2jyxhq1tWzRMNwwba3YGZCF76oLkp582V2XLpkNGNzQ",
  "key6": "4Cob72i6oyj5XPJCT2hKs4Af8EhqrT1tCFxKLsNN7haAMzSSojz1aNDGtcT5U3qfzcfRhzuHy5AP7XkR8iocoHd6",
  "key7": "3s874RBHWGkq9X4HLoYpvDkY9UGYjWGRjZzf7c3kYLatphXP55aQMgude2azU15BemGcCPgdEXhzEEsz8515wcEp",
  "key8": "5krErhcK5qA9LoPYXgPP7SvYgD2nVRTyKfWQcgLgz3o58qyY3WL6EZin153zRd1aTTCePMKp1PJDF7qnbUiegLkB",
  "key9": "Hx7ZnpQomXC9ia7uH4DzhWVWUYm2JF6cfrQkjBgg6xTUPZtdFFCqKuGaSdeCBx1RVzczKWW3rKg9uCx8CoXZNFf",
  "key10": "2a9w3qaMR21kiz5DizsPNBJbYvJY4s78R3uuZMShFufqeaPQkBGf1SDhpVMHJz3ADx9R79KraFGPgBDS9PexShtq",
  "key11": "3AHrCtvK2z2B3YBmzFNrkYvqiKVo5KyWEWavZ2wxKUWHznRPyeXkPVi2uC4PgtoDnHqRXePLdYkChNdYRqNZPvMx",
  "key12": "5DYEMaEmRaXLmTBNHhLRCKvdbNhnBBqvTnoDMo2Qkq4z32ibr1n88jvvLwh1sQtnkH9MsDcPyzNeNXyR6hStHNRc",
  "key13": "3PCtpnjMobxrqRYMA5y6B3ujwxxxuKvfr4Bebp93thHfjB2X3kx39uTRjPBAXcvQoMTJnzbz8rwUxQ7FEXBxNp2F",
  "key14": "5f1a8Fhk2GeeaMHjgiEQw6eiepEufTQAZBtyeMs7JvjuPe56Gx29roKtCGwQ65cwBvXR8PrjP3WAVWtmLGvjf6N5",
  "key15": "3GiaYLA3vZSsHwyrNhUuo2vavTnZH3MEs2oAqYonmQLtapEi9aAsdXFyRmKWG3mfQhCKSNssUYjLDFsnvY1AmrTm",
  "key16": "65k66rGXDatYW9psrEt6x8DpC4ahQjJEtBRh5Ga7RfrnchfCsuF8nP2puz1VMGQ2nxrE1SkcTmFHjaNmWHL69sS5",
  "key17": "5FKiszACHMaTThDa2hhemnBfERu5W12MQJxZi969KgCzwaFhdEEW8bQkA6b1fZgY7Pe9EanuihVeFD38bQABMb6w",
  "key18": "gppuVV1wRQiFJucW47huvxLedbUtmxYZXEESiqUSrDWjVfLoeZxJAPZax9tkGEN6thE4937kmLbtVG6kYKQcfGo",
  "key19": "2pXzYQRjdAWbcnZXbKaEETsKD5UcVZW8fC4iEqv8iQw3AtYRYngwLgQq7t7ZsM9rymst2WCDYVGv9zj1DM233Sx9",
  "key20": "4LCNpGPqKVW5w6RCniV3auCvCgYFsNRm4UqZ5Uo5M22JqVVbLjFKM9wp1wu94TYguvgjShFWQ7aBivDfSerr8f6B",
  "key21": "4UJMUXnSdL4sXMAxVsDKhkippBAeVDo3VENoZ54HJYiNbrMraBm5ZZPRQf7ZooxyUScToVnu9F1sy3BSNWLJUiq",
  "key22": "62cYpThLKmFmobChNRiJmVoJpfAg3PLVjmdD4QcXch6rPo1SvnHZ2yamoPSbq7JmvB5h97qyAKhmsQCk6JdmYZCc",
  "key23": "46AbwYgH7gsepLyQubXU6YbVYHNFwHW91DjbM7WzWC7q7ZukJQuHu2crKMd5i6kafWvQ1f4zYH2Busq1VgVegvVh",
  "key24": "4Rvqg2VYNKpm8tejVsM9i1Dc6urHtU98aUVj8bWJsvHoosdJiZndQK3TeCwAg2ooVds7go6DeLfEMpDnucKkV2PM",
  "key25": "2YKBLeAvTP85bdFGbmwNR8bvKNnLQ5HaY9W1qr2bv1tbDuM4AsCav8vh2WRvM1qENAttzWZdcjFizdmvniQy8cCG",
  "key26": "61o1n3TodFnKJ4ADZjGNEnUww4B1J9TKVJgb1JsKfG3cAagVxfN1NfopnDm1skUkhs9NnZze1QTxDWYMFtBgqfdi",
  "key27": "5k9NmvzjVscqeiX2eV2XjQXix2N2HRo2bVQas4UDwNuRn8YirsuQZnC8e6KZnmrm4hKEDRpBccdPmDMVk3DDiW2U",
  "key28": "3yHD4PWLYWfFwGfYh16cCTrXzL6388L3z8NyNFdpGBimVwBg44KP5kAJzcsCyoLa57WNzQXAW48g5j66T7QGjWjt",
  "key29": "2XF3VnAySCADBiDUVrdXpWBKXBUDGCwByRekHbShuVjjjJkUADfMoiq5W4Gy6ifbNZVZTSSG2GboL9cQxUaWz3fC",
  "key30": "2dCkf4Bwayyyi7BjJk5M4j6BahmX6dVWsp4J4v576R7TNbXfkiSN1gh12LcFxT1fHVty9mqLMsRFQkKgr4QqDvZf",
  "key31": "2zsdaudmH17o9TSGG1LhjNuvrg4Xh5nNjayMi8px1R9Zt4dseWxptx4x1r1MUiYVii7aGy4LyF917kuoD32NTQ4T",
  "key32": "Vzgh4fsEKBbdmit2TeqCFcmUbBJFi73hjHx3ecWgZk4rjLCnhEvVebpypqQFh1r9K58vxQinrhDoUfKefvbtTPF",
  "key33": "5yg5HLViGGtZscHSEtEqnW6hyvZePAnALZNbph8zD9GuFiU1qbTiU98CL7KYnymh9BCLXzmqp22ZJ4Tfx3ZcMENh",
  "key34": "4a1cXGANYvfyK5bNHcGmm5cfz6Xnrd5FZhZsvFETPeKq19WKh2UeSxcNgTsE1vxCJmp4ZnzNLQHSD5qzvyRfokVT"
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
