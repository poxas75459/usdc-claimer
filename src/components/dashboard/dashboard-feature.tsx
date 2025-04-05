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
    "4DRHbyfbCmbwYKcqcwkdHRTUXQL4vbGRj2q9iZT55dtriLdA3V9UEhavFYoGkepbfLJoeKhacdN9rq2UoW1ytksX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fdidoP1MupJu32U8gBwhkHGvhuVAgict4PZ9aG4xaJHRu5EfA8Av39qJUmiwEN57Ycvhu2ocEb26foT4vXTDzt8",
  "key1": "dG3Qga8EFMKMnJtJfb1GzNzB2iYVAUFEcSXAU7C9XFfK5rH5mG4aJxV91FDHCiBuzNFzSMm5bAdctbTKx5DcxEc",
  "key2": "43LU4Hf52brx2AfTipXr37Zf9aYErh1PGYCDTsDLNYfVgEWd9FntmL1u3tP8MeAcB4zzL8cQix1gSr8SX9rNoyK3",
  "key3": "5ZtNBtNe3Uyx1xXuurzW5zBS7Vfb6Lt5zQzqG9aJD4UBPAVxukaYFSHuLCEiAhvPyuDP7BR28odeYcsBYs61sasS",
  "key4": "2iL1b68VQ12XxvhTJKc7cFVSeaAAPBZNsR6KuEoyTPUg8VwNJWaaa7X5FYzPq2tyorX4HaLzLsUNLVZxzDUMXobL",
  "key5": "32g69aMHCe7d1NiqqBZScykgbGCH3wscU2ocA8ED1V58TcWmeEW9WhiKAfpMgeyg1s48QJAHoTgHgF5xCkYqGeh",
  "key6": "3pdaN7K9aJD8qQXjZRFWaFv2dtWGvaX57kFSw4QGWiu8vGGVB8xDUnmk6r8M1DkULRUJTNEGDz1qQBtQZNHSpGUG",
  "key7": "22wrsVh23qDLWDqig6pHiHQUw7pXJHbJDCf9J2cQjGSiWB6y2atBUVtcpr3toJSQTigPYB4fvHgDRwbUxFkNssMV",
  "key8": "5J2vtR24yQKKf3d14TjHvj7zKSWQsBZjXovZHabC7NPw2GbXAYuPoPk9PPC4CzSRVdhbc8rTmMTHKnq5KhPuMuRS",
  "key9": "zaRaCCT5pgWKncJQQGiF4NCTAcn5KRShWjcfxnh95z8hEGz5RsTgnruAEp4LbxPTyQX4aVcwio6SsgTZYSS7Kzj",
  "key10": "4DCZQSbRnpEuGihLNfuPfYkDSvELbXwQGUkNfVevCGKWbmHHMTTqbPxQxaJPT8xdBPU15L2QfPZBfQZu2zzRwy5j",
  "key11": "4H867GCY2iAqq6wX2Z1JG7CwTKX5qPAoNAMP1ewc81cv5V943QyMxG8raxFXyYtcDgzFgR882hMMbTfe97audftr",
  "key12": "5WVaPP38AAzUXs4eXyhuv1VvvagRrh38oHmmPVyXx8tRDShazXaaDLLHj1tmKpkHyehmEMZ7Q3zVL88tvBstePdC",
  "key13": "2aufS1dtXgB8qqrGRxss7H9hsbYfAkQARptQ26vUd2WMSnC7R1qD1xYS5iPR3ChR2mQDqGp2kEYixgh4eN7xGPTG",
  "key14": "5vDJWMJDaCQZrEsw9gfoXY5ijHrSQooBdz6MDAeJphEQyZ8mqYKCpZkc9pFVu1H8zen2H8KDBMpHqEV4JiR6wRGK",
  "key15": "48az9kGjVhmd3bLyoCugMJh8XsCGgU59DSKYu8kT1BCCZjUmqyQMQApKAHvTrUaqxVqRsefPpDG88xRFfLqBX7L7",
  "key16": "2cGyK4FVKpvte7mWVHdWa7CG58JdRN2L1rGg32DJNrxPY9Y1MCRbh14RaVa5YgJfaAKYqbioFyMxFXvrg5ZkwV5y",
  "key17": "4EsEHFKMMgq5TBtfGpsHp2mGaMk7PuSJyasr5JVadfEmKKKqyjWhjwkcWoc6VNVrxpywEa8jeippPRNsp9dKfxpj",
  "key18": "2qFFNEAbX33kVJXjjeFNGUNNPZJtfCH3ECGjCWxUBH3SjYmYiDSGksRq1GkaGM1GniriTieWfoYaKntGLvJDKoNK",
  "key19": "3bZ5DX7Q7sVTYsAjjgDFqymuXCQWV38appU3wpWUoZGJ32rv6Jy98k5xNyfp6ZmvtHEJQEbqegNAWBapjyofamvJ",
  "key20": "2DNMQGovP4NnVoV3M5QEJ3Nn9Vr1A6dzFyRZXMpCpmrzB43Yg36ponci2Jk4qpNFfAYd2Tn9GV7uMrn1tpjVi19z",
  "key21": "2vRkBWeVc2LrDv8Ndft56MXcBAMCEDGEkTWBeW9j2gvGexCgdjPMvAz43ReyEeFArhmW5sVYgratHTbsjAQLHJr7",
  "key22": "33NWg5mhBnHh4buGm1NPUzajSyDHYdVw8q6yPnvD1d1PCJZT8FNXqC62edqH7DTJCVbskRoK9H9bSLKCQ86ua3V4",
  "key23": "2144Ch55GRdqdBaRgSi7SDmiEDbXPAJJpVDcdaXjZd5qmDieJxb2JP8cg4KvcD3suciRHR5bFZQSfDTLz2hySL6g",
  "key24": "5p9nzubTfpevsuVeo8FKwyvnmkXTJsMu7LHwhgP6sNmEepVoGVELNFgjCwMBDnStWD1mRYF8hCVxVTiornbEbgm1",
  "key25": "3VvcLAXU1ybZmWfm1C1fPPHjHPKx7Esm1Cg5d2dauo5HtSGKLnqif7qmvZ62xcVCa4bSieG56uMcZQ3g22h4xUzp",
  "key26": "vJzvJQzNKqLsbtx3VBK6VjePapgw8PnUmFqp9c8EKip6B8HfZNHrcmnEzLWyZ2GPtZAKde7sJZ6LJtXuv4ATMc9",
  "key27": "jAmMzfJeBd9QNYDJKTersd61LQPssNBtb9jKdWw86oUAkFPoKv9rYc9BNtZiEZpVcxeiGQU4kkev6VCiNUm1cpA",
  "key28": "5KMXtpGQzKdqLWFFawivhdxUnNmYkeHBzCcCwYY7oRXou5CYiVep7vAczQ9uUa1aYWPSY3v6ZPz95BhxafWpCLtX",
  "key29": "4MdKkuqDm2kktDfbMUtYryxTtVUvVntLT1gwv7Y4TuytDgts8H8uMMPUEt28SvEPGxuRFW5LwnPtptJnSXFDxSaN",
  "key30": "5eU2cvPca1sCTHAvfVmQ4TwdVG5xww4pPq2SbkDrK2pxAG2rVvGGki645ozzXz3BLhp4bfaQpYszGxGuWXhConD5",
  "key31": "3Cfm3Fqsn1pdZ3aFVVVQGyqnZVp68vyshZ2Ldc45yMR3kHdrvUnYFyzqd9CH7P4A3eV2K5pMwe9n7UDwWVrCFhTi"
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
