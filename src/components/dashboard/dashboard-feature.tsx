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
    "TSJ5TtrqBZQ2sT65GUFweNXQMhkqpcKoB4zjeCci9fYCGkhcRPyTmP9McGjtGwnwDms3ydMN62NU4e3doBrvhxP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3m8tUcCa1qTYdGxyKWzsMnvWRx59toDmENaJif6NJC4jHyGEYY7HnoWQC983aNDnyniHNfsgmvG9vgmCk4cFH8wU",
  "key1": "4iELTku7bENdXB7G7kQP9G9BxjxGe9ZbihES8reexgrGA6XseLHiXifhAd7k3zbrSSbCG4SuxAqEhNWuPApCnxRP",
  "key2": "67Yoi4h3WB9xownvsCjBn3awXfkBygnhj1WdRFdL4Adp2MNr45JKo8Dw3ZTC3gS6MskkmG7qUtnwRukQ4SLR725o",
  "key3": "3QhgEhtrMNwJBRuWJHTtzVEs7WPamkrfuEgX3H27qg3FFVtwsfM3a3AzwjzR41SGtqLWRFTaejZiiYhvVPCJaKKR",
  "key4": "41ntHNiFeEdrDAJaLJorRmC5xt1PhttU56He79PyWHiWLkyA9ubob5ptRp9LJhCMrCoRtGeFu76vPyepK1RdkpWG",
  "key5": "5pSuSCYqGR1UBEYF8iyq7WECvHcpRKK6aMooxLgepd6XDAi5d7iow85YRYfMFMyzb7doJKMb1e8UVMHgCvrrA4Nz",
  "key6": "3mqyf27JS2f3XUeA5rtKWE56DFxFL1NeG3cbTAFjP9ESKbcTwjUyB7zHkCaDAnJ7kUdrX9hkV8hy5yE2JE8VzACB",
  "key7": "oUsekM7512m7dPAJmHvGMzD5WxrkwNpcATrznkb8DU4FjmwDJu8VmzXS1dBt7xFFi3E9yStrDEu1oiKT7NtE4pT",
  "key8": "2F7rPA6vsidn8oFonctKLKdZu7qtVnQAuZ6xWTVMrLpAxuzDS55hEE2LCWi34SjkPjdCBJiGMKuTViKKgjm8xbCJ",
  "key9": "5Cs7ktjfsB8GU83mBG9zg6CXuX7yqYVkopdUGzx1PQe6HoUVXnehKi6UqBnXfXZ3btB2qpzGqQspXnoNsdeCJ1J1",
  "key10": "TEeqvbQy7uauVoB8AhxRZ4yQXACiGTfRVgrpHbKP7DNRWpUfaRRPGoHPDMSYg7tg3FGwfjCseTnkLDpiuk98Bus",
  "key11": "4E3awnCBbueAtRqWQWgZUgdZ8fTjjjJzJX2CHUN8STr2fkvgzFa8jDFqjUPywL548n5WJwxkjQtN87QUWcaF4waw",
  "key12": "4Bzw4efovLCyK4784oJ9ru4bHHdj2FX5KG4nYtWjffHjpefCULdAsvqrBrHnanHRWD7K31ZyRketqoyLTy2P8uD5",
  "key13": "puJFWb7L827Q4hhUiXjFDMCfZwtXHTBB2uJ9qgaFtPpEn7nBUY2mYeyMDDYu2VXW5o3tRCuWURkrGwEeyhXAxxV",
  "key14": "5TYBB8QRYv2iiQhPzBDVk7g5gCHad4QjYSRTgEFAWZAqW9pVv8MFLBJrtdVDmXrdD7fd26T5bmiDRYFKWdAVUQYf",
  "key15": "5gr1zPna7FTenTRVX14MBkuqxiVf9WYY5q6vE9Xumm5mufG45SC3mM4wZ6b7xmUF5F3KhEsNrY5BMVvHT7M5rRHB",
  "key16": "298GMfjVSzPkLxUpP8JZBBKVh5Por6QdeEozFPvCVvAqyRs7LgReCeSWE8LXqgw1qaKTAf2UGorsjMdcCCTCC9x4",
  "key17": "3Vbum664DGvb6HJ1CCdZWUAKAVkxPcVLXc3L723GLs9ZRJ6tp8nXqn7KFPbhP53hfbod8uv79yFKkM1jBkgRjpve",
  "key18": "5iKvbL2t9r81gGB9iHf9icDF27h4TMLhraP8RjZFsU61zgP3n36midfZ5Ey24DRcvQqkaeUH2X12ZkDyj1WqozeH",
  "key19": "5WpHH78bi6pH857C25i2WJgGxLfgYCQFbWA2kyESyUQZxBWCehYA1CYxdswqg1L3w4p4VYPGYE6xKV1q3mCCEtdM",
  "key20": "zZSgjRf316HbSbbw8GoFxneXQ147NGpAG77G9BE2esTz869PLHRBVxqdo3esnzbLJpkwL7cS7kg6NjuDTxxAbD1",
  "key21": "49kA8fcbAiNDHG2dRP2Ahnh7HDYTetXrxNVQWNCRjYMa5jFQ5JqGyMeyE4QkGhUEsBLNsMiHm153LoNLoscMDCiT",
  "key22": "3J7ytwJzsNGVBmGDFVinCXtfAwBGgfd8A33d1XW56HQqMkRKJj52FQbd6ar8q6g9rYbVXRbyucVnxAxBF4xVzcRC",
  "key23": "2Pw24S8wpE4tzzM6jx6Hv8aUr1NvvHd84jc5EEeFpXcZMGXb69P366dCasoVPR5juyW7FBL8JQkZRrRYBM1qWWPE",
  "key24": "eL2y3AA7DBT423mAsEPVB4W3Gmak9XaaL5ahPdvCPrSYLZpaPB1LwN2Z5CQSrytrjAmxDxZZ6HBaVo9TndvVayS",
  "key25": "56kNshG9VwVG3Q1w3DCWdTop1QwJgcYaB5kH2rtGSobiSZL3rv4qUcotwik1tVbcGtVNBCb5QZD45UqnTCXy9dGK"
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
