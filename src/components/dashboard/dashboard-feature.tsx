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
    "5rXyUgxNfdG8gAXdGc2sKwPiYwRpfm8jCFDukZJWywS9BxHSgvsjjPKBhtuvfv1BiCgp4Wc7uhkxZ2bEKRnQ5tZF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZF5G3aMCDtanSQHFUskTsnELULyi76WLVEMSBrDdfExEyokN79bRRf7nJ76E158rjSVQHb4PkQRzmcuSpw8d3eK",
  "key1": "2q1DYa6bgEt5B4y3Zzij1HMd2kxQdXc1qVYUbjSueB5BWgUx1jmPpQnMkoAiFuajkCRsG3n6UQGRWFzpfFKrp5Hc",
  "key2": "2Gc8Mk7KSdCYbjEbYD1NAxpCNSA71vNDUHdjurr93x1hY9Zdajq4jLYz46G1z3VM13jysam8AFbRQ7GPVgBGMyEH",
  "key3": "3V34tqZqRgDCmfqCrYVjKBDUL7oYD9Exv3mBJKUVx3JawDe9TepySkS4A7P94TPY7J4c2b1FV5cfYn1yyUk5WgGq",
  "key4": "3fcK4iHa93zVqoWzUV38fv9T21Sp76KKceuR7Y8CfiE67DyFRLYDbP2EySMYGsQUAxn8vfKCzXz7VaxYbzQyiDrS",
  "key5": "3K2zUJNYYcE4Sh7H9wh5m7c73H73ACEYnVmRJRAYetsTVawT3QPe1ePKD5UuY8VdWJSPLa6yBnqju79PiUpAs5MZ",
  "key6": "3z5nxBqirWaFUb3quBZQ6gnG7y12db1Ey4CMtYPaCptHiFLkjDTmXzweGUMm9MxFB719C7EzB4rz9Jqmzc6rzVRS",
  "key7": "4pkarPotf24Ztsfsrdh31AtYajvu6jRVmtBwiZfWF4nXC1oKuB8jQE2q8i4BL4VZbsjBmSvacifD8feSXkLheWnS",
  "key8": "4EeQTKwqnTH59Jx7oJrhaQnrC623ieZChepgLDEsJgiCMZCaWemGFjigDdCZj1rZJNf47oZd7MTCxYzqfe5JSCnw",
  "key9": "2A4Q7TXU23MtTmR9Kf1zjpjYA3WP5bpCJiFbYjiCh9Aa3MRiCf3hrPaJe5hDFukHtc2DNiwikro1vKVnbvwr3GQs",
  "key10": "3RnWhT1gcW7dkEDQYNz4Qb6bPHtEs6N1cvpdKmUFbhdpV6eewQCt6wL1g5CXwhHzvj8jt2hoGoWaeqdjLtUcru3C",
  "key11": "429QHzQt44AzWWEDbH5bQRy1HqmEiJ6Fzitpizqan3CfgCXT9Dx5gtf2b5Brmt2gwfrvTFiMe9qcqAizTtKEyQUY",
  "key12": "64GPC1BKCasVaAFwfeTZZ6fnSzBDSmqBetaaaksNTcQyjuxkNGxo3EV5CAKZK2CmnneQCRPAhUFhWRHiKzsM4ERT",
  "key13": "21LTrUxLeKTdyZo88rfkoN19TnuJvM2464Nzq5pSy9UXUeZxZ7qRNSKTm1rboNrNRkhqJRWdtfmS3dLCKf343CLi",
  "key14": "WGxeFnRigBuwk6LxZTyPPPxWtDrq2wKgn1R4qkCyJrd4Z9HYWSTJhSuypcqNWdjboCZxSnW3xHVzoxoGZq86zuv",
  "key15": "4SuFtcs7CWcZSE8SjfwBarBHAdVFzyUH75WQD5CTS5sdWifQC2C9HbsQ3EM7Hxxm33AXyWa4pXDAyb5B1dQC2WjE",
  "key16": "4kcBimPYmu7d6QxtcVduGgT4ujACW2o1429wRhDT5ac88syVd9eekkoNWN4eSrLrbAvhY1jdNNcYtVNfcMQmdDGt",
  "key17": "2eLgSwAtwLKkzQvmmtN1UbqqGYTy1xJcE41914TUd2NrX1t1Cr3AwNSJXr9D583fyd24k3F77C4jQJFLkPAg5ifF",
  "key18": "JZSGNLhawoaAsy74sJ2VmDRTa1yKx9f1V7gbuBssLR3YFckHFcYEcEBJ5rPnJzSZgHPWtaSrFRoXsVXAjwcLZD6",
  "key19": "Dgn4bjtGiVJvrFT1BQdDRzqmFuwKq41zbN3sph5kGn5UGuz2qnR3WTkLyduYHHZKXjefGXrengR94S58DsBAvU3",
  "key20": "4EozUkc3iCjTt6TxzdXuTRriMj9aYjk7fdUgJXSF995DJzNA67FhwCRfr7vo4RSCL8mhF3M3gM69LNKdWD1fsqvj",
  "key21": "svBgBPfnLFdF2teGai51SPXsH6yNJ4Vq8RPXhvL4zrbCePdwAJcq2EL2LTFc7bgJH8NycghYtPUwpigiUhdzbR6",
  "key22": "2mbMC8MijkYDLyTUGXtyNbgCv4ydwhxCKR1pn6bCPJVaph4NjyEGkqSsQPgUTdcjQ1yA4uc5Bqc63bh9AnWKY6sY",
  "key23": "2iaQpR4w48sMhmD6iwmnubiLrH39n2zfRnjjaCF3JToyt3GK5NKnAwBH5YE7dAifVJrwgBp3s85a7PcsWhZ4fA7a",
  "key24": "3mydR6CR59F2UsXXc4kNCvxPSxBgjDmKtrBvDPBrt6cPVL9MGLb4uWXHv1rJe2RAtek89FmvQPeMMf9HvuNg1Y5m",
  "key25": "64FptnT3BFkCkNkSqWsrbXUDpPVApspE9c9tRaePGixEFYrMdJRbKv5HPgeKu3WJc7UV1cQvmgUZkvHUNkQkba6a",
  "key26": "5sAYPyexe1GiqaznsD2FrqKtmYUqTRraUh7auKuaEenDVTfAVDPZwFxZLW4iCpNLaF84WK7hY6mQ1N2tTa6Pbx18",
  "key27": "3VWaXKJvwo9TTFPAy3eyxdMJUjAtP12Ld1nptLhPEkonTnCxJxfzSPdk9HUx2jWhcbZ9LekF2rTrxh5p5snuqu4k",
  "key28": "56WimzZuGEX3JdnCg1hECX6AHPtpJeW7Z7FY8CGExVd4YxCkgfTxPTouU6CKjUMfHKCFvoDPc4cdrqMTZMtJJkDb",
  "key29": "5udiEZ41rTF1Y9g1NJgpvDiGX4NxypPhaoP2Fhrgpf5pdd6FskMvmwNnCMBhxj4Uz7bdejKkaGRMYVtiyYRNaG9K",
  "key30": "5F9XEsTRWWRSKr8K3kPBXSJovrArnj13fEzguDcysEwzTBm8y2NHz7N1ADcPJkCJx8L7aBkmVSMrg217CQahn2ZE",
  "key31": "4t8aZMFgHCi6ezNTa1UdeZr4vzqhiHMmrd6p8M2Du4TBmZkNxE4eYfyET8xUYPU4h1xr8QyuJniMGjpUrhvEJwnD",
  "key32": "2GivDKiixvX4LSqzBnWJrNz2mHWHoin6C2z4CCugYK7ttR8GYkJmKXjp5Dqi94d5VkwZ7v5DWNd1Uezhjy5GzVhi",
  "key33": "3dzKpVDBdnYJ7pgCTtrwtdzomnHrZeZ2kcVQ2m3Jdzu4NmPUEmc5xGYddxumSWe6nAhRTCi6XphdebspdG33MitE",
  "key34": "57BcJ2CSHNy8Sk7Q7QKtFzFU2HsrXvxr6vKqq1CHkmbCJny6azT4XrbpMvJhXtZVhJeWy9FruYtqLirxY839jhae"
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
