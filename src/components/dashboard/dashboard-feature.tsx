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
    "5DpVP8dPUbW7xVKbuqiwJc8VVp9Zi3Gw2SPPveftXAF74oQS39HFYwdchrtpULCoeaedvqjnrgcMNBttnjqYDtzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "24fnCjWUu9MPXBjXCEubqSRZ4p6uCwRYzmQokn1QyBhQFzLeofno2dS2kmwPy5dRZTfeqoFXkCT7p9aD8sT1JiNR",
  "key1": "uM4WrqBfsVAeZfXGjAkV2Ko2Z9Gq2ReuVk6N6X7JKwRmzy7PsNwYXPDVFwdmFWmvd8RYkeQ4N2rUmd8dutqVxx9",
  "key2": "5i9DPkx4ZNBGfShyXdi32xUe4AMxKwxUSXDaeuWTepkBmP9275UsnR1QvAvBE8p7CqdP43sXcC3AT8RdetwsjYTh",
  "key3": "5Zq8ZcAgbxPnDvTsX11ojnhWZJwZKKSx9C2X3xA41tx9FLhWCSpwJd4h3iUSu3WozAc6uR2fK5dSt3xeVHNocUsJ",
  "key4": "M3F6GExBqM8iWAb7QqsVcMe8baK4Pxw4Y3TVrUQ4F6SBpm9mba5ujayG3YEcRYi1VVxWkBTuH9hKzTU45PF14WE",
  "key5": "2FEBei3HvyVjsF7JNnHmJCD552nxdHShjaTjg3eSyX2QoBe6jDjTShQqzLn21tEgtA3hq3cSUKxdCwhUE8afC1qP",
  "key6": "VghJUQCGX7jMSCKJ98P4WdahnMsm68vMXUQZsozW23wKLdNzvMrerBkMcnPNCPruvrDkF25WEvvgf5LWtaz41hF",
  "key7": "hdoZCVnMiAfvcYWbFnCZaJdAPc1bsLN97hK8VUT8b6WJnGvi2UYbEDywRac1fGoje8b82wAtxsrxkrRYiVQUPMD",
  "key8": "4Q4GktFFm5zc7DwdvGy1pQKbokoaPVwtvC2bdgbWbMS8Tf3AVp4KQf9RjaVZAKwjk3EbQChgrW6BjFF2sfimMzMT",
  "key9": "33eC9nXDAtNYCYsozUNnWFAH7LnjenfiPAM4ZRLKHL1UEKZW79i6VcxkGQKmSTWwomCYJ9oxtisQPmQAuAYHqTfe",
  "key10": "2ZyEUJq9eseKJD535JFa45miZRYXXVLNeTseDV5EsnBBCnsiAEj2TLESHn3UNQVGCLx1oC9VwLe3acriTJCVbNo8",
  "key11": "2Jc4Xr3Rq933oLL69ULdAXTY1iQvY2GxAPCHtD4jJpz51zPaFGDHLu186buN1ytSmhMsETs5VXxLUYAkqccBMCDL",
  "key12": "33T6Uo4RaDAAWdc7x8bypQpiKCLhiw5n1orD5aP1PcmofrsJuSZELLSRoHkgCpzUaj7YfQMpWQPZZ1mUEDKmUdyA",
  "key13": "XDL9HkyGs2vFxbWzGvrzJTE7Ne5x95NDmsFb6HH48XFDMtmKX3Kt2v8NWLAhzwv5LzZ9Ux75HHtDLVNbWHGm7aX",
  "key14": "Y7WEMVF7UBhVjYtnuDLFiiCDubcaMeRxX9AScs54BzLQnv395gxUFLKzUnSeDgPPRCfDiBEprC72byZNDpjNRss",
  "key15": "22crFaYKhPMtCnMFX2Dm4dVhcRgiVv2NBB4wcdSiTZuJfZBp181fEF5trcoXMBEjWWvkei8He4c9ejZ2KYGvppu5",
  "key16": "3hzfsbgZrvQHMZ1v3BQX9tNDa7dgUJRhfqb98RQjdq52LFEutXN8BBAzXctuNrUFXSKzRGScjovEB8yrEJ6dfM4i",
  "key17": "UQSzQEp198GYs9Cjb1FsFg6sKZzgjYG1KXabS54VbadVS4GN2A2E2ynSuTze4zedjk2bFnn3omD2U7b7kAQ1847",
  "key18": "bv532rPDfCEayKdgDrmSLD3ZYhd89usTDeL9VdeezSJNufAQqgUC1Wwnjwy4g7Xnua7pGiBTXTRgLKDtyk6gUue",
  "key19": "34itpjFxfcfWW4nMmtDjzdkhT1k77inLbuw6DbuUMf27rSWKniBYK6RMJkCbrNxk9U6CUKNyKv1QMErUssfRXRd5",
  "key20": "QkquFH234FMoHPq42Eyj2brGWwoVeY4mPEGDQ4TkMFM4wvX4NFaphidH8cueCPVPiToLtsSaMnXU96cy1ZSNgpf",
  "key21": "42Va2xJpQJYT4FBTp72hCeazoZ1SgTngMriFxBBXFhG5xpkcrzjBYzT45tEcniU57J9TFr4LqMhbScnHq71s69nd",
  "key22": "64vrXdkwUpFUxDYL2izepaxGk587KNGQsFE5wVfbHEudjQ6Lq4FbLDBPSM6q8ktuGPqykD5ayHgy12fSccsLj6eh",
  "key23": "2MGtXHdJDtPsVveGBK8CcJtVJ1Qc6s1hZx8tbrJ6CD1aKzwRCjT21pA2uDjmvjinVH3dGB9oHpCJoWNqjXzHHUJV",
  "key24": "uS3LCcWYc2dLK7E2MerUmXUUuozJdE2iVguh9NTbPLt79QDRwQoQjR7GNcs8GfTSemQGBZznFxLtUY89VX4C5TN",
  "key25": "4M1LPe4xPf8ViHTXqczjVgMnbnu7xVYHhejAcrhLyvMNp6qNuBYhBqyVfGhcu1M5vommUXrzARSiUYwcepCzkpqw",
  "key26": "3cZsZmavQ5AypCmkHKB83HMfLBZYcEvGQ3x554AZTzkoUYwWFXpRfHYJuJCp1PMYXedTuVaEjs6rJYsA7RMNP9RD",
  "key27": "37LPunV1uHqqM7x8nsMLuonEb59ArTW2ckgkDqALCJ9iC7yGoohbtydbTfmnRXLyCSSuPzft2HdWZyqRrhAz2CVh",
  "key28": "32UUC5cncvkxWzsHscKLCD3pD8GGnyUS1m2eurap4bXxQFCD58k35fhAsR5XDEMNMTyYRYLDTmEtRSWi7TcX12ey",
  "key29": "5PXSTZPpPZWCtSzDTBcTg2VG2WM5cftsYBU2UdDAGz9NDUgD3G26qmA5kHEEzkoLHn8GjBReyfYwqyNmXNfK2vtC",
  "key30": "56xCSiSD9v2kbyt5pZ9NunncKvtAQqJoBPoBALjmkvHeXSEuMBRayNo79vX8t23iLVgeuV2m5nEfBb4fo9LEPj4j",
  "key31": "4f75wDLvtY3rPTBv9wCfPDJLpSbSxmAc4noaU5CeVMnQ5vKpApwYebjjL6qHRzb5oT4dpDfmBhQqVEeWbVa6oyvp",
  "key32": "MyfBXewMB2miL2yZhLa2zyrZjpFNcLiHFdT8586ukeQrFKfdxhwD5vkh4YttwxYSn1PVkYDRaaLaD1TKYEFyi2G"
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
