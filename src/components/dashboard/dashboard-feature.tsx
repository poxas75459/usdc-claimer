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
    "eNwTf9XGUj5oFpyymH2Qo16W6dRDd85MFgsrAx4gjbWWYPeW8BySPoT6FiNhri1DHdprVYyFEzT5GvgiPNWSkTk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HUAGxatMnFeNXSMpuNoQKLB2m21CwxEWbUSWfBd56c5DSLv423hbQmn8f9x31SvYP4NQ2brkp4m9gSk6VZgz1B7",
  "key1": "4nmvmUWFz9G21etDBP1vtDW8ZDtUTeB4MfeBQu4UEXFjqyqAFh2P1UXu9JMQBLiSfrXkraJXc5HN46TejuyNBgLX",
  "key2": "29pUBxuxtwe8QoCzJp3Dq1bxtdtVCtFsGy4McmmaqH7P493kSMb47mUarGeiGwavQ7znmgWD3o8EFXyb9omsySW2",
  "key3": "bC7JhcDHTBmRHH7gHkA2j6VCSKg3zB4pi563vhe22E6RFKVr6qe9uGBexu1mUM4LexqXLEdYEYBjd2j9fP8LSpT",
  "key4": "4oQWpTME6ic8XfAbwwbo3neFrCfAAzR2m5EokfjU8n9ACzw6UDrWe8X3So9tCn9cHTR5chmFB2ENtjLKTFzaNQii",
  "key5": "5kXV43fvPCSmnsvf7zKo3sSkz6U26P2g6jH8MH2FRxvkwpgCVWnd2DD1vtyaFCRv6XCfCJGKUscEjiiWZjRGuY3S",
  "key6": "46WRHryh7a8EkKYHhPpTjgP7NgTeG1eHsLCaAo1jxjvBCuY3zfi881qFnQ6QB8BjvVHpJsCxdyX1eQxqSnG7hXNp",
  "key7": "3xd1Y4FGe9NRZEeLzoSbrQWexJbKSGVgb7YUHPN3NxEpURadbPivsaeFMPH3duwmRZf3zB5hUjCMU4uuvQBkRiGg",
  "key8": "3QMGoTjBcp4s5TrQij68dkr2QCzgycKgNDnYMT2iendzt6wXaVwewzKzaz64wB2rPyvXcsSnrzDaeoaXoMNXgujG",
  "key9": "2CnRu9sZ7nWsj6xUcGup3SbbzeN9M6URnWwQw7CGGpmN3KgkVADmvWQpL9HhjVrGBQUakEYMdZtHeapiAotL3tGp",
  "key10": "GzWJe6temgpyGwABMvgnVf5VSLawM5DDTZSwJRpCeZ1N59gm7Bjr5F7feHiTX7pFrB4ubti1c8DjGM1fhj9ovpB",
  "key11": "4hpwMsEPvdGgU2cEVvZmSP6N7tCe837ktGt9BtuZcgpqUbsEgVcgSRarGta8Jzq1Ff7qBd4u3MhjkdHtoGwMyZVp",
  "key12": "7p4migtu4eLTnEB64HA1mhanqjQXDjTq481d9dozNrM7Z9XgzPaDtXTJ8pEWfsyWa1rhiQBZKBLdeVdcHMxZUvc",
  "key13": "34nt8cMc7931Ef5FA1i7D1261ad776t7W69fnMrancXCneftks6whGD5TCr8jBRSjWAQ3bJMDGLYArnivBHrmwGD",
  "key14": "2LwEyFqRWjz7KDiYxYrJmsCvnLTUN1R9XfELKEVf7FXtCoLtTez1RtN1nCXZqQ4tHvQCfVEN2thzQ1NFmAKfH81L",
  "key15": "3TWVKWD5ZWg4Hh4cFDKPRfp7tu5CqmYNSa9Wc8uN4LSS8BBKsFHic4BtZ6N6broxmSa3EtjzCtN4VA9jcuWerULJ",
  "key16": "42dxNZTrVC6yxWAEFUx2ZrE8sebo7TeKtRWYD8oiy78S5H8vKNN2Wg6ujZDwzUrZD3MhfsAJVrY87TXRZP4SoMFq",
  "key17": "2XUpKwrHxHGA4DWLY17hYPs9X77zHzpS8pWwaQ83juKjyQTeSkh1jhMDffq2qC2LD3kNnS9YG7sgFGf1erK4oiS6",
  "key18": "5GGpfrQmHfikg7NdQY2wsG2qC5iaiG4L8PMz6fu4iKeCwoyrd1RHuTJL7Q8U9jPR9D1d6FnryYVBorAfNdj2WB3k",
  "key19": "8ZCAH5uuTsXqCoeHCRjhoRoTo2nb62QX7X1fNjvvKQmfFnJ7oNPYzEvvD5Pkv4qMv8ZR3pTYSNXoiKncZ36oesc",
  "key20": "5tN7UXhsT3ECwcSrEPQHKyhHmPh8m4RH4CWEp95auXXvDQgmw49QB28cgzcbWQ8NSbzqFJMZn9wJdkHBb55oL7ru",
  "key21": "4uSnYo8JKjsoD1dYsXvuyeEcujbk1YiuiYQYRYe8mPYVrArxDEoxceTBvfz2gHsQaCpvCYYjZK2smZYGkVrDaQnK",
  "key22": "FM25Ub79aQhswyZ9fZhHqxDh52uYqG4i6Sn86LkJV4fBqhYo18Ejn8hbWfjWMCZwyNbRV81r1KkFLywuuQSK6kT",
  "key23": "5H5VbFpmYzyHEseq44Fuhx6WgQoktwNFDzpJAWkK7W6R7pLey2ijVKbaA8JSvRWQy35YX3N1e4mv3A5e6rwUEoEG",
  "key24": "2GbwHwYWEKaMwXDFWAj6YE4XJzHZWu3kMz5nC5mFLm8PzzBcG1LvScyHGzD6983aUR4BEWj6K5PL9rNV8djoD6dN",
  "key25": "4JGXrjhHK5Yui32aqpJirThM8yQsdwETocmSxAcPVYXBaa1wkKdveR2s9ARpfheXENkJMf3uF6J5CdoHYdT1UbRo",
  "key26": "2NJUKbRAHUkLumJXFYYy3uUfDEPNcKHamWYjGER7vVzvyforUVpnENZzbFuMxgG2i16s9gpykPaXtjK5HfT2JUUr",
  "key27": "5muyvorZtKf7LJxrWNUWwskNHDx2qa28wUWb4UQ5myAV4tWqMMpiPJoL3QwTceotF83Bz1bMQ8wUC4wm7yTUGxez"
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
