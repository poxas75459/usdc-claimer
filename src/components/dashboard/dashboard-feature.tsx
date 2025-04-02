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
    "3eHWLGGg8UpRqGp2qJPPsb9Swx5jTFHgvCxKXtqfAimit4mrhgwGbWAkiPgGeCPMuonAg1k23sJhwZ17PXoSiQzL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2SkvtNTAqDLjnkxP5XoCTkbaMKbXYDJPLkDsEBeFSbSaS3qU8xYvH7MCHkC24jB8zFu9YoZX7ffXutToces2Hmzc",
  "key1": "4rjPpXMXD7LpLGdDJSfaUMZTXVtyoUzDuaVdAwnnrpMpFkAKM3coGcKWQGZTwv49wRXph3wJgJVc6v5gCgxmmd7b",
  "key2": "3dCZNi21AVZaeqpyS896WV6gWhBhW7NSKUsKTZvLfmhmnkB6AUUitKhGM9iVvgba2FjxsxARfHJwZQ6z2bdPHc7M",
  "key3": "3XzGGqBqqyyigSEjdN19tnYffddsWf35ERkgAfRpa1MtfsMG7g2huNNNNWJnyhgB8npra2hr79QAgu74nt3wkbZC",
  "key4": "5WZjuFDARizbvBCbZkT5coxjmvbhV6mAMtxZ4odeLUPeR6uPXSCPG9AvfYFLfF6RDsGWULe8M9zPVsVXeKkoUnUU",
  "key5": "2uQr7VHyoKDXmi7Wga4uAJyqoLYTNCYx4d6GmCkPMP8y43NsBf82ZC9qfm4xSNrbUE7NyFcxAbEjH2YLYVt4apM5",
  "key6": "432DBZBcyEyprEV6YVTc32HMoQA5K4BL1xVju3g8D3Ys4N7BsqmSAqQbZFMfwGvxJdXYGpzGPnnPKpU6Uu9UtizN",
  "key7": "4jCCewCnbchKER1cESkFJswVdCDZFLVg39tUbScYTKKe5DwFF39tJTnWvErL51TYZPx5nLr4KwwQfSZZqfhrZUyB",
  "key8": "3VHSdpRYmDaaFULuHwxAFfLAdYf48ftAkAF42GvGpnKKNtFk6T4wfxxpc3LB3SKHWJrHmp74XKTM3wckjrwYk5FE",
  "key9": "5du8kkWs1VRf6EBV2bJUFpjt7hyvWm8Nr9uQ9VUp3ZidvrV163D1RoVmeY8pQsYHFbtkfvLb8UbYB8qRRyEUo2gW",
  "key10": "4qqxZZ1g7Fb1Ry2CqzJaH41YviULg2Rrx7W8RG9Q2GtFevSxXacuXN8sdDxrPotFD6HZ9ttWPuPybbsKaP6bevBC",
  "key11": "5oAVkTrwzS2GSPsUHFftY3sucw479kaMxS9hN3fXHdWMLV8rxfj1QeuX3mcsMnQaYR8zCppfHfa6jX8WMG4cNprz",
  "key12": "ihWLFohur2gQXGy4oxkJSb7Hd5UwT5CRAhCnVWWeASbBX4KovSZ6x8HBSms9aXjCjTmGeKm6dJW7isWtmyDwKTm",
  "key13": "4mM8G9oCLfLiRPKiSfoaMg4Y1ew2spcwyW4JxoJUgMgwiaaB9A22ErZhCh424RUiuWF9TuKkfx73QGHWrghWjRCv",
  "key14": "3KSUQg29N6THC84xyeoqejKK7bRjPzvPcAdVoDq6HTnkdYMoC6SjmHPj1WLkK1dBYaakx4qmZzmYnsLAao1GSTd",
  "key15": "3NEZaddd8a7ydnd17dznzsdUV23cUiCgDiZcE1aMMkD91zYGoARQ2WMjdKb3X6g9v3UvLd1o6pkwU55h5vMBf1n",
  "key16": "5AziL4XeLM1evx3L232DSqxnVLMBHrLPDAAfdEjBq5GdKMDqPsU74TcugbMPGwxft4SABUCxvAfzukREYDEJMNZG",
  "key17": "icuRzY1XsaHEmByx5C5FWnDZwBRyN5bJTmkGRe8dpSYS2csGxpTt1SxbMLfb1mdnfHpxyy8vvSGKVmqu3UfUHE4",
  "key18": "41v4VCjyaQ1Lgxq3vd5nfx3dHBDEJQkZnwfbkroiG8bBs3hSiWcykoNmLziGQ19Nd26Cr1XtUPqUEbD751NmiaCG",
  "key19": "yhRGWLqXEDsgroSYZinqCPhbsyjdZh9h3VQ6A4vfzJzrW2eKh6PJozP3dTUCyCbdTP2A5qZpb73daxnaVCYSw38",
  "key20": "5S2kYFoP4MMHuy4BxYM57KFveqFR45MbX5m4XMkdYdwgmMRfkY4UXGyhUEX1CuBypWX5qfjCkAWxFuGHVCEeYPKC",
  "key21": "5oNMpUZuNcKzsqTg2Gazb2FEnVEKHygumP2YCG3xCpXwiHhHmUNa2LWjb9mrefGwfppShnVw5gdcGPiEhh9TMqW4",
  "key22": "5nYzfXKNcdrY7HWv63LFunJXWq1S9Ljo3hTqcMgJ1HXuNqGcUgLGjsDKdcgxiZpo4XzNbMceeHeqTEVF298jJHeG",
  "key23": "5vri9Djzq767RvsZ2aSnesc83ppGcYGVUHUKMEUvmmfRWVp9NppNBE1enLfyFvMcjodDufZMyTtiv2tccYienbsu",
  "key24": "3bBgpBuEXLqr38awLp2LsH4hPwxAodMT38mNXyunFAex46KWHsuhV4EF6cLgb623qrjPVUDAaBWRkUFN7TRcDmJp",
  "key25": "651m6Rdat386Q86bdFu2JXAMQqZvkp1HdxkJmkhRssEnYmby4nd1XP6TmQVsUzM59zrFTjWeDzyJxh9vwfWcbMnT",
  "key26": "46RYFyx9JSoT895Dv9afdn4gQjEaPHkYP6FMM729GNVGFHJWUcGBAAv1yWNEEVdWy8peUpDg3nBoAgpG61R7LQRv",
  "key27": "5GmHhNattJZ17HnddUCSe9CAVvzt3n6pEN3UYexZtknBFdHWpawcU3or2yL7xY1WtPFkgAubH21FSnhA9rj2opyK",
  "key28": "4Mz8wTt4T8EJBWcMP7UJLMdLLRcDtQyNNWTLFPnBicWw7SQUGt1KZsM2A9VADTxPTU1FMx5A162bwgBPphhgg4c4",
  "key29": "3fE6HibcNZYd9W55drEdt9edfQwUVyT31HiqMRsg3Pqm7t5qr2JW5qgvM27tdwiFSVV2MNvUQcS6KznoUtPd1bQ5",
  "key30": "5FhC24SUm1TjQNzRXgvK9HXCftAP1nBGMvkkUNkmhAU4aMhFD7HVn1GxSykEArUXHukMcKj19L397GN2z93bcS9N",
  "key31": "gazgyg3HByoUXuQ9kCLgXW686qkiCqtGuPoqwHNKpEA9ttaqoPj5FqjfKc5kF9TEqdPtnZv3uJKoo1JBrrijxb1",
  "key32": "66VcQMKBcoMNpefhGpriW8JM7DXkWy6KyFqPfW6KLctWysYS6phixXQamfQgozW4J5zsHdcopdgAZ8SB2y9GepC4",
  "key33": "3unuz3rfxWw9J1xNypKkzcTinh36XdQRwozDUCAa8rwJkvPScLq4EFiBWQRhqRoga9ZN5JXSiFV3JKvgSXbruSzz",
  "key34": "4MZvN9pvrZu3nqRqGZtPkKQUoHDJfAH6rkDBSsNDvGkARnTXCMqBPzqyBE7K8atRQ62kb7v2BxC9Md9AyqFzhoSC"
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
