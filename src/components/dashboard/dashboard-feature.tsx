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
    "2osx6agKbNyG74y24K7SMFXpRAo7Bxb7PRswLhQwB3HPizd6Yr9qRGt8UNVR4Ga2ojUxJGQB26UjpYEe1hzCAGNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DeYt9w3f1GgdkbJzWpjkzkSMFiUkWMQ6CLoVR2pkuup1BFw9gqEQetFqFiEU3Fk1QV8MwvpdYd2Ke29fdNEVBEn",
  "key1": "2Bs1mRVJipuYfg8MXk4sxQj9dkNdEuGLMMufrfBLfjxp8LSKED5zoTHZduz78HMVus8Jb8f4mpH3njw6dARVLEe4",
  "key2": "57thNsoEkMfS62FGLZ6pXpXM5dgKapuNLiVFREkdWWC7SeHHmadMMHi6cCzaYPTBaLtPYi7kwd2w6Nur8aNe3Dyk",
  "key3": "4hpubf9tcQrfJ6XxneSqccd6DY9LEdm29d6SVXvy7tPuAiYsodG1VHCPHYXx9kyFNxYw12Hr29TGiV5Y8JHwmD7t",
  "key4": "2ac7LMHhFpsR7PoYGrckmjDKApXtFGcifHVeyqeTXk8ptyamdeFceumoD5G7WTioKbyvXQqLMDbL1bboeZVSCtJv",
  "key5": "TyVXJXER2JnBoNdFbyvVuaDWwzM3j4QCibn2fP3ftd6ak4F48SFhGAWiZUZDc1XWdWYyW2Hq9vCyHo1Xcdpr52q",
  "key6": "3GrvfTPbQz1aNJczUpyiyaHy5AEkThjEmQHHAg1QM8eBFuRdEdRpo18eNC5cDT8LYJVfjg8atdrYmbgvk7fEoaq9",
  "key7": "V1pd6jY8F6cLeEDM8UT76nt5rhF3wcN3xJjFCrzBVFuZH33cBimjqqW1bsGBmUeFFJWCHnHUt8gRwVyWZZgjQyU",
  "key8": "5QjaCAYsJrS2VDwAqoMZ9qfHeXAmMmQsnv8DtX7osxuvXU87GdiiYTuebD7R96aMkagYMS58uv8mD9CE78dFKh8h",
  "key9": "5in2QbfCLWXMJgCYMz5cFyD1dTkYRqSoZ6yYruPgZAzZ9RYuRrKFUausqdx2C1CA5RzrqNxUXvuADEASSteWJPvu",
  "key10": "3dVqX3Eqzwmczoi654aa54aSB8DiD5qUEyFQ6mEPtaEYx5KWSe2eRaNtcQLzLj2vjKKcsHDZ8aLDSkUdLh9Gks1z",
  "key11": "3quCu2Kda8vSpZGpek9dmnaD8CyJX7ipSFYNF1uzM2xJ5b7cPHY91R1vgLdJJyzNfzDUgozHisM6aHMFgjwLWiq6",
  "key12": "29tgZnPRmbw9VQQPsTjsw2v78b9Zv4oXnekLZPWkoQYdxT9EpBxEKHHmRSW6vjK67k2D5UrtcWoUNnkQAB6rDL5o",
  "key13": "5ZTT6NRPCDKT3rSJwUfssnCePJ7UCjxWoF2rmeFgLaDgGtTxyo31hzf4GmUz2Z7xnhCRsALv4xUwiDRCMNjXWbQz",
  "key14": "3GN5W5SVSiScxkqbRKrwH4PZWX98GnBw4CTvm4xekCoH2jBZqxcWNKwZjvyUmCu5X7V7zSSWMpxcW2L1UrrfDVJw",
  "key15": "FYSdD35MX2LHxDK1BAKJj2XguWKJkbGrVxdq4Aize3sZFZhnWnoXNDppc5HxGYZP76rxRfAEgP8wErXiXY5kJ9S",
  "key16": "67SRsE7nzUHuxd8uvvBCgkPsTCsf6wUwgL1CMdN5mBCTa85Fw2QWTad4qEEw4ggSAfUNeZi8p5PBSRKdtSwRcCSK",
  "key17": "4XCWSCHZCoMpZm9yTfiVtvegMnx4ygrJ2fdM2mjnDvy4gRvEV9vfkF7aGMrX3y1sRQMTxf1SRBzJATkkv6ky4M93",
  "key18": "oTYjxYog5EqMfVL8GonmVGKGVsTcgPT6V94rfqVF4qJUQWXvumMwgkUmYf6z2zZ35ajabT8UXxw6Tq9Wj7RkgHD",
  "key19": "4Hp4TXQmcHfpTV7QsKNKFXLfmwAQdi1B6Cje8piHeBbSXkDzgVVhAubQJw2XjMLDNKATR8wsGQ5JShftcPxQTt1b",
  "key20": "XycnHz5Z7bnGmvqUAKQKNvKSJNKkZZ4ubAx7dJB7fdfqvvAPZsgYZjGmkSKZEaUAcSrCkT91wrJyM1Rf4WQDrp3",
  "key21": "3auFTJniS9oKnTmDq93GmDamuWLW4ZfiTW1KiPCutVtnGqibzzctQfZyUWGesAr6ztWYYteG8S7Lq1ju5BXeLLfo",
  "key22": "4fqcDHsyqkZib283NzN9hJSshLo4PV5rsAGi44oECVEJWNVA8L9qvn3Kjv9CAUmPMZXoUoQb9EdcGmcta47aLXzL",
  "key23": "4F4teNcy7XbL8ZQYqdfCLNDdoJiG4QjaDJgG4azFErXQPDNKJgkyzaTMdRah8MTmDtzDFvuHkANbrLX12y7w1bTX",
  "key24": "ZwNJfwmJtizkFc34NEps8daSwbCcdscdnKVoksDTDDgU54qugx2i6ph7QZML4K1DxgHDGT8JWKh5J7qvHtQ9rzn"
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
