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
    "33YUCh399S2wR436NYLysdC17gKLwDFEoVTnEN5upiGfkksP6m6EDdasBqp6vxm74k1GBtZ5mfuYDZTuTRdbqDaJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "so1KpXc6HNziTSkBfpgABptB4aKGiKd8SNdMNN3dbdzCMTpkCGmVD767GGRS4HpaGuRYbhXd5mAtuXfxenDYzTR",
  "key1": "4MNhv5X19QeH9FPmEDo2qdbtwfQFzYnQyhtWskPBNCiL2Bw9QknWJ8w45bYMRqdFRkYdo4uNSdVit4LphQpxK88y",
  "key2": "2oxhFhDQhR4Mo7h3eP7jcsCqtEe87iiVTdWwkerCvWkwVG9TrLdwdmSWWe3biWybHt7kNCUt56yXEJMagv1mc57o",
  "key3": "4JM9A77LshQ4Ung2xa54Ewbi7KBU3HgGdEDZKixpLJggZ4UZD2w7anuXYpLWvMXHDCNjeScncn1dP4rJR8EPJrsq",
  "key4": "53eo6f8zjxn3ppZYeob1vmQKJfeDRwQBSUtyaYt8WPZCXEYsn9ZyCsbTa36cwnweKEV4DujP6Rfw6cCeAiUA142G",
  "key5": "5aZTLBNQKrXrorAkTyB4PuUCuSNBKm8pyXDG4oSL1nFx3VGBAG7LpDiZN3hUZDB17qBcVEfWA3mBkjATBVvAAGYD",
  "key6": "uEzCZ2wWc3YbqXtQUvnkyc9sFpEapWWnWN4zDBNNBvCcmhAkvUj3xb5N9U8JEcwoNMp7quyVg2ruZQvzkfm5gvZ",
  "key7": "4CLGvxNmGUzEpyH4NTZLFtqcnisrAB3JhxmHyy3KAJZy5bWLXFYA1G2h2KxoFJFApNV5DbXVUbNsyiiZM9sSktrp",
  "key8": "4ZuNCyUkAYp3qeTTpcSiY4sn1grt5wkU1sPJi2Tkt4fMbCsX2C6JMt6gY2BZKwWAgCrSaCn1Gf35HHhTdtP4vp8L",
  "key9": "5hhSXBXr3tqQU2XWuaCHSHr9m7XHMfxi4KeWxWxKTNWEnpFP9kMEDdBuZWKmcHmksKoKYPjTGYn73N2VSkZ1Hm3J",
  "key10": "sipmwxxjNsBn3WckGEtJMskiRUa6L7gwL4iVpBawpJTuHeLtj7W9V9SLcRWTemkqbPx3zL3ZJbr2fTwuzmTQkWF",
  "key11": "2hka6CUvzF3AqiWkX99fFKSTh4Hhd31Kx9CAL5uJgKnWxAqYPCgWXTivxVpFjAz8rjdutakTyockZqgMkzaADwQD",
  "key12": "Uw7Axa6o5otDJt5ALaWyEWxtFkNmjBVHPEvM243Qs5b8H4c1sz4JP1THpQDotm7cX81WjVoG7ZkHvRW2u9eDti7",
  "key13": "CXAzpvR5xFVdH46ELV1pKTrPw2Z71Cc8sfWbNxUWPo1ZRWWdbf8yp7R55YU95VSwc1wkdsWBZq6pZZvbRFLuGuz",
  "key14": "3nC7ZExBH76PSbtwiDjG1sk9P3dShMGvumUToi5WvdMMN9UHsdXDaDme93xuYHkeVAVLY9p3D4xgubGqgguwJarL",
  "key15": "5eBteALEbje4yTjDzEqJpzeZEbz8hZZvdwc7Tx6zopVyMJj9w6oRZHFbTFWA6zDaJWneg7AcJ2NGZXKcHcDZ5yRX",
  "key16": "5mSENpdYSuyNxnpgKvwne3uRN2HMUu4G8eFK4kfKyNbM6aBYzzn1e56mfBn3Yc4HMgfZiXJL3VxYk2jZWUKMqoDe",
  "key17": "5niqPvjfPF739sbx9PGSsiTv9zFMtJ585ykEXDLy98F8WFwrz2XpeFDRvtz2E3A4ixjmLiTVGTzVLXaTRRoRRiJ5",
  "key18": "bPvpCuBgPhw7dP4dB23jYJJZk3g1Bzti2PDxjT7Nvsq1ZAKixhgRmeyMTGeutPF9zN6JCpMwouDBwcQVs94Rxt8",
  "key19": "2yCHqu734sn6WRrNE7PsDRYTnJXDM1N7vS2TDevM8nJdKdxviRr7FQNbZrcNNJTBnSJeunBB4jfKYHT2NZ8TEHQH",
  "key20": "5WZH8eKCc6Y7uMC8Pntre54rUHEAezjPLZ9ZVuGJrSyXcb9Q5ntuaFEwdB6be1w6XUEPWyoxqzAJs6PyTTkec4Sf",
  "key21": "3ZbuGNMyZ7AQYag6TXEKDipgcci6DtbFxYkadzTy1ov7Zw6oYCWgagCcrPsAmnagcNSVreMvW7uHDxb3Be8ySYmm",
  "key22": "2VPmqxp4fuSTpXHVvpQEjHUDhC4xQmaaVurs3Q3JKjTTUrzNgtextR98F87nNdZdrtU5Yio6rMS6QZ1zfgjLouCn",
  "key23": "2QAj543rkyzRiFi5nTXUNLfVAN7EcZ7MkzjwGC5LE5qX7UgrAcnmdmHerxFCPnM9bQG2TEbWQMBQcFLJmD2U2tzj",
  "key24": "5CAXMBpjisDAcWiUPD1d7SKybnAxxDMaZJqFYHEWN7D75KS8jVneGPvrJ9QDxzZkhSHBoTq6xnQk8dbRcsDMzsD",
  "key25": "3owuqD5EF7LSb5ih5vTxzkGGz1mtUvdVub1eoEcsdnhHdonwVNrTwA6HjvYodspZTGj7fGVoydXGsP42AjMdmogB",
  "key26": "3orAUjbSahbbMPBDFLbYe6aSNPzbTxJ7ptRYGgCpgvrLJ2NmW5nG7rWEDHYhb6VzH2FqRNQXmKydoV4NCmeHR3kC",
  "key27": "3jhSWpT3RhsBNq6tD56nCAZFY9jMLM8k26EvmiqnQpcHkr6TKiechBLnWxfxsBsym1M6Rg1Kj8YnJEdTtQcuLFpa",
  "key28": "4Exy4kLWEvnXXkrtewGkpNVjDgiKnaH9PJFMZc99TP5sppo4r82ugDK2uWV8bVnqM71am3FksQQmLDJCDWjZCCey"
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
