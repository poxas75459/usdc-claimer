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
    "DrisEFKCvxmbev6KWr7wTFxZwqgmzZxKFG8wuznMXaBfRc2uumANgji7PVW3NZrbSuUyW4xDp7YoYugJtufzRKC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JwgTYr1xsgWHYCVWYJVPt6BQtK6SsshVUnbRKAd76M4Fz3LnmokfHEZB631TtBXaJQPTvj2BvwWbiTp5KJbCEk7",
  "key1": "SqDiZDK3K6n77qw6DAS3xXP4cev3XJmpBg3DESDcabYXZyFznuvqmQjWnYT2gXf3yfsZqHC5ZFhSwmxFUeErxeY",
  "key2": "yE1ZVku2LJgQFjBqHN9ptoTeBcr3JwKJyyEQButuxgiMwFubcNJtGkN7FAfFPtT5VksepujWfPVK8FyCioxPktw",
  "key3": "39YwqNfEmTsqtVpASKU7b3pZTs4km5K9uqsq82dSixnUtLZx23TiXEW741Gmo7AhNfV6gZWFGwdrtzwCvek3S6Ef",
  "key4": "25ve6F3t92kxzAaoK7N4MKvcgwLFuGjgSnMUNz6kt28MWV56CTRQdfNNnb4RZiumvXTbfRNNn8aTKh6fDqndrD3W",
  "key5": "2NxkN9FNtgxVsCBUi8CLXzf5Dk8t1SaTBAzcWw9KNfyuwjMiDtA8ZXW3r4EHjpgxmTU5sbQqVh1PinpVTyN2npee",
  "key6": "2qs92w1hhGezbYhDzmMBLeEhoRTkkEa13DKt221wUzVGeYxTWZCpHubUctavX7MwRDnvyBX2Mg7bKbYZ3nUpbo36",
  "key7": "5gDEkP7wa1nVi63aRgFjnyGy2Av4Pw8CUQRyicjrd4dYNmydnxgnmQLKX2NoyPD99SBhbHXTietHn4FstSNfffsA",
  "key8": "2qbpCeVq4qhk7RzsPp3hhUWJpaeJxPDMMuThXA8tJeTsdQwpuFKr31rhAoksR1dosfDQLsv8CyfJ6yBW9eH4mx2h",
  "key9": "2hP4oR9Qdfj6iatkAhNeUasnuwmkbFzs892zyWPsvNfj8J8mAh3X9jrDiByLePzFW7cz79ct9wE5Vwj4aCt8mwGw",
  "key10": "43myJLngKs5BmyXJqmw3xi6puTFXgZNNq19evRAuBZJKSV5qKGzqQnLtJd4jLCAJPWPZiEUob8PncH1aUqGkmxqP",
  "key11": "4gkrEsaGffT1FWeUeUH5VcgGdmtprck3yeqSYgBx9TkhdZBYwig4JEt4EHsbi3aH9xkbXLsXFfovx12j5boZW9om",
  "key12": "3s7GSF3e2ucSgwbisRf8gfHdPz36kouB9n4TSXXnomayXUjCChgW1dEYuZ9NNDPjviPLLafWtgbHBJbppW3bZe3j",
  "key13": "41pqKgknRPQhXH36GmT7h9jF23v2EaZyxpTeyKci6aGFjitFhQzgyc2jtRUdBHypferistnizPKBgFXvyxmE7bnr",
  "key14": "3BPHLGNfoqqUswzeiqhhkuAkpxiDydJQNvXcAsTijb8FwKMMfwhD7PTnrwNVG1he4qD9MDDB88UAseFvdLhtAdR4",
  "key15": "3PD79x6ytzJkUphoGVNmjnEYSaF3xjEBiswgKS3SwTGaiA8PpBkDjP3UqTp5TQrc9pdfd13WssbPtq1j6KRgLsFb",
  "key16": "56a1B8b8CrnChfYy8JuMTX6jLJRHzBQnfk3uymwT2oD6X3iXuoPkbWbi1jwNYnVnHyjGbXACNd8pV6CBcKdy4YJv",
  "key17": "a7xttiFVQpaiGV7zQoZypVzX1tdeB2L1htszqnbVshY5bU4LXuUeeCKAE63jfCKK7ZY9pVBPpRmfGMF3xXmujcF",
  "key18": "2ak2mQkHeJs4qJkyA3JbBrLAAH2HfShGav3rku4TRG5ytR4GQbhMHWZwd9rDoeqqUzRsKywX8QjdUNMuwMWX2Q1y",
  "key19": "oMgQbARAhDRqE3vH38JmxkJfiK74y11XGWsofV4rQXJqbXNenZjH6YVrSvBBZHPUk1uF7WVZXG8fQzsi45XLoyp",
  "key20": "1VtD3hXTSgN7p7MqfUXdsDrYXWbHfprtn6jWrvgucs7FoSUJvDbaVKmzYF1QGDEzhRnV2TSoxR8rheG4DXjt7bv",
  "key21": "2ttvTanHUaWDz5CJMVsY7BDNPxRuYz8UqCHPkCDLrmh4RRa7xQVFfqQh72LS69aGiCRZxVayyxkbk8iU8XHTTrND",
  "key22": "3znizza6GamwxYQrRuXhrBmiJYJJTRRqgMLu11n5uVpHjgELinJ71Gki61NR1P5pVYA7tPaDKoYtT9ivsEXm6cE6",
  "key23": "4cSFiJbjqUaVdFmKcevHELHnVUU6B13TBzZxLYyCQ1uMsRMnUv5Gc2ke9GBNLNkYoAaH1H2xPUM59q3umdtf7B45",
  "key24": "61KdQjcqvdVLVAzZ3Dp8TqXPHokTucdtaMQ6FWYL7ZtEkZRkMqSVvMWxk5b6gs8TBTy3tou37hDL4mwaEFEhsoAb",
  "key25": "2rPpJeUPGcjJ3MpXab2o86i6gt47Zv2MiViomUFys57JWgqgxcrJ48Lvd6VRkDFvq3TCaxxdmgdQ6nqw7PEWTS2u",
  "key26": "XXE9SbmN587b2WQxb85ZsCPxURp2AoZWxAmpUkgN3UZRFDtshnm4Us42tcWBqJkMbSdB2FPAnwb3g61QKnjEWyL",
  "key27": "WxL6naMYdGudPz6y48eeqZMC3S6mzTbBVVKFzfJbV7qYfSwdzwE4ENjKqAG1Vtd41i2MmFWQGuZ8twhySSVDbSi"
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
