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
    "3rpNWiDK4bCfTqs6trBBaxLyra3g1UTuszJD1im2Sextfmg7WG3zYb1iM9ShGisPvMZD7ojQxAcwmPPyP2GdNVok"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4iosoEq7P9zSskG44a7NFoEGdGsqwmfZk1kgcPkWBGufMPTfzJgzhMrjfFXjELjTTtHjvXHWWWhVoDJaQLAE3o7i",
  "key1": "3N9Xzec274G7wyDGhevSBxMnqjiVHE4APAiD4knLgyvy2ngY6qkruNvdNpbXHCRd2KCAEWuw1M9fq9VtrTZi2qiM",
  "key2": "AM6HoUFS46cSpHg8JhuPUt4TafYCnTXTHAaV8PyczZ4wsfHLoWCCw6uPGraywpo5UsZa7F5fJCd4hhMo6DvKhSp",
  "key3": "4YgRVngKocFVaVZGaVRkJFEoazkheRrGhURbggoewzqMvWfAnwKWgzevr7FEYPVedQ4HRygdLRdRUcDWL6mfXXtK",
  "key4": "WfJtKYRknzvvB8gDZ6yjDtNq289bXDQoaXN2faeJAuLDEr57X4fjKH1H8JWaL6foQsdQhYwiG6LkKRrAR7yuNBC",
  "key5": "3u5mCi1np1PisP4eGgYEjuXL5GYVjm7RFhzRqNoECGPzoTYvie4T8es5ggJUzX2T3tj6v6xbY4SspHu1jdvKFgHH",
  "key6": "2pqKhH7CYEJWZKgWA1LAwkL8hZca6Ct8oKMXsauK6NBnR9iujCrkTMdhnFXbkRn2ynE4nKbiApFvfjL8XT6gDf8A",
  "key7": "rhdg1QgxaBJ1utVpk9eVQucyTQXfbTzU7cz9ZonkPJyfAE9L3mgPNDdy4pyMxVCxid3g2bdvgRBC7pqNdG5ngbn",
  "key8": "5YUEb7ALSYYcsKPVdGD3X1zaCiQm8pjwVai8qkDUo4JjbBA7V1iF9cGgfBAiSW5rgs5cKcLNxdyMDs8Mj2SPXmnf",
  "key9": "66KsN99ejjmaSGLhNXkrHaZvKyAYG8HLCBJ2qmfjdXEK3oKB9aiL2o8JF93EhSzxugH62KoDMhhBkKNZtxp3ttPU",
  "key10": "3a5TnPJvk3B5DjEdJMidGW8nQQfYoEUb11W8QZJJCE1rmqu5tKivTE5U5yqQ2gUsrHdMQ2Tis4ABvD5CKoV7FXZD",
  "key11": "t2qP9cPmj8HSAq7F9smoRKttijTkY5G1Dn7kZk9cBozgaeDpEEodg7vRcJWQhWWBYddMzXAKcMJLFxeAcGp21yK",
  "key12": "4NNehF3tSnssgLhV7a1hdGmp2FUEqdEhcM6QzpfkcqWWQnSUC3KkRYM3KQgtRzz4Sy4yZJadAFKtDR7V3N2VVpPD",
  "key13": "3wYDL3axaJtNHgzn2MCQU6TUvoWKibzY8wYWPzLjoZbQAMYC9KPkxLdM2KgJMfuDpYw6qpw5nQEyWHFkfzgaUwtS",
  "key14": "61EbERq6LGZ5CpGsv8fAdrBVgpdttYXhxzh3Bu3Vj3cZw7NK8faZBoTfJfDuUfPfvcJPmUMnRJSD3YUikR8LnhSp",
  "key15": "515X4WtyJiiBSGxHj76bbginzVJ9HwcAGmyhZsin2AFWt7ERXoKFYwHXm7bvfbfXxZeffpG6TQNmDdwtvaLgVCzP",
  "key16": "Ck7AFjJUxgrMn8MWNYdhUPwuxjUTenYSy2GG1Sy2hvJKfngGsBfdEzk8ySMcguPQgUZzYN14tuy3EXxB4MMGCVR",
  "key17": "cMusfTAn2D1YPb9CUrCYYtNfia269GnQBLsdyPyh3kvM5fggkANbn15CE6b2swYWM4rD3QuDmq45fdZuPjHfnDz",
  "key18": "5xy31xPKCzN6RFftjikamAY4Mor8v1FmeHdarZ2eHvMeFuaKQeSeSxjm9j1duhM2jrYZPthynfxLPNSt736BbQRQ",
  "key19": "5mwMmBNkiK8Ny6oS5o9kVMeXq73RdjVKU6Eyc79otNE43cswXMQJyaGpMs26pBQMvuJvPg5qf5EgECByzsFmprN9",
  "key20": "325H2u7GoYvuNQz3H5EhcwT5Qqfeo6mwTaBHog7G5qQeL9LMpeZRvNWaZpuGQiurLnfiJtFpGhA8BMJjHw6uKfXr",
  "key21": "3hXA3dSXHP4fispvxhLFEFdMqiEfxheevyjqsvGAK5rTbXkMnKrM4dUR7PqGnYKd2UHPRj9e6K4GQWuDk6jXz2g2",
  "key22": "5v3dS3hURxj6RitvQKKBU1cGnWxh4iGeRC2LAabq2Dupu9Cs9bJ1cT9mhdfvHKKbXkeAvzMgMV6KzfV8EB5VMrgm",
  "key23": "3MER4a9hQCLyJpqPcpaeUrS4azHHZJYsoNeADMYFPRFntv8KeH6QskpkbrvL1aj6ofA9Vd3UQV1pyQgq7sMiatFc",
  "key24": "31jB9fpVfKtbzBbdSzr1VoY8MWDKmL4ZZs5wAXUchHgtMED132HYbTUvV3fwSQH5x54zzvwfxtN9DT7JzamWguso"
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
