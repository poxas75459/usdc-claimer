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
    "4tguUuVKAEB6TZVngjvYZD3LFVH74k3Yi3VUHnn6iHAeFuFXKQ8n5cT6yCjc3YrDx44mNU6AXiBjjxU984ngtqni"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57H7gE3kGJh5mrHDBi5qA5pLjhUuzuW6ktFZKhM7k9c2eiMazNKwmUUh9ZKSRYyMR8cTAvXpyHk7N4HQwJ9moAxG",
  "key1": "3WSrzLj4pohppKoEFpbroLEM5e76KbUTGRSm311HMYD9kZHEurNDJNVBAnpc6Ch4GaWekw224zsPWF5U9J5xu3F1",
  "key2": "2fPWTCLMuLTpHQWMM56HPM3HsFXQ6KYTMg33sGo7rDaXhNyaCCYTd3yWvFtZzsn54LeTEHSjrAwxs5g6hEBqVAtJ",
  "key3": "27TpjBiiANnJMXshbmYHCkcTRupKyoZVuycP9PUf5wap885geZcKZ26sfkjzBUXSsxYqJhnrdBZ4F47tZFvdh8Nx",
  "key4": "wJvh89hLQw24oSS5e82m6efKvwJJ6v5AoLdT7FhGNu86RP2mfacHabYYHEjaWZuPXfoZkEy7wX8oz4XLyfevqGh",
  "key5": "4DYcv3rvVcYPfsMtSzQFrBei1vCC6UNdteGHcuj2y8rapBi7oTRjWrYkewn6DgrdftqGWSsWhW3AkpmKnqhfRLx",
  "key6": "UGbEaRJB9ToELbnRqSFbshiBitkuLVY5Bgdyq8DbNu4u8B3bGeupFN9bD2YH7XDc3eKsHPWPAnFasM5PapfKgiF",
  "key7": "4YujYYi5TDeCSupnbjGbt4A9BgTXj5voych4BU2K8jXBYUhukVCWDT5uJC9HzL8kpC8V6mrn8EULw3fvgXTg6tYk",
  "key8": "4A4RVau1Q4E9kX3TCaAjKE5JwHYGeATz7UYtDC6imcFxsf7H5reW3Rp8V6NxthuFaVfUApxHjRayVpCYhrqHFseq",
  "key9": "2rgdZZZnbthpoCdrSDGKndQFkTdgxqwv2NHwZHYUnxDn7kH7m1THM7t76pic2cmf5N4mLeZ98FCNg3UC6W3vCzgs",
  "key10": "4T2xyp2ViqngqpXj4fJdh2m2G3UbtRadzaS3zRfH564K3wMZqRivwmDpy6CYu4BHmzDxVBNnfp5JQX3qtzCSSFDr",
  "key11": "5AXuaC9Bd7gLvHDrLSJ6MLPFrbrkESSKsfRb9WSXmTyMQwKzefb9DWxqDxrcwh8bDPvWwPZn7hmDDJvge36m3v4r",
  "key12": "2EPZgbzoS7aNPBWrZfKt9C2UC1i1xCBADkz9v3g7Ut2fYbmDVZMbLsyHQ3teYtL8byJshhfLTMb6SMfD5egXPjYm",
  "key13": "5kjHyqK9J9LiehttQuTxesHVjQ3trmorBjJwYbiXEQCyTato4pd3Qga4xwtX2nYNLzPYSbE47vM5D3CE3CprrfGu",
  "key14": "2PPGv9ArfTRd7QDKVhbCWjea2GKsbk9YvoTcCSDH8NcTqe6KDDeLMU2sLE2hGFtmHe4ymRyFGn2jt4zSQmSMjdpC",
  "key15": "4Yuts1C9p8MUxdt99kqokk6ctsD2eUiEGWxKhuJNwcXsNCN5ALW2jaY6hi9B9VzEw338ZqprFzkyT5zPDifEZgQA",
  "key16": "2USRTvEtzeBjZdTHmbZretPFTFT5aKVs3bQLwRLNsVRNWfbTmC8gAQ5ps1sQtU3PpD73uxcPsPaGmFbWxr2Yjsha",
  "key17": "XhPkYMM1LeSmwKDG4muodeWBcrFyEDq1CTDysFRindxqcxErNMZjdsHn2dbzGyQLpVRG7aGsJHwoWs937q5YxjL",
  "key18": "HcSyNH98ie4XpvjJs3xceqSumgTaiMRBfU37VdkrwTkGwQZLVT4iQ3WnQze3ag7EMggC3EkJL5qVK4gueFTkBXq",
  "key19": "CPbHnqD3vadbuoRvrSuNwzsMuN7V8g41eesSZ2LLTrPPzJD7A8YUnXY4cCcw2hH4eTRzsrxkoBjX2pQVGMpXNBm",
  "key20": "4Qbs6MMvhgrrxMVcZygJdiF2HYVCiej25YVMkTkc8Wmz4toNhaE7xaisPDhbVafnxyEZnpecsg7GSf9M8UtAGqCG",
  "key21": "23xKfqiowbpEt6b6Ws9t2R8pztS2aPcGJn8Yo7oDV9d3jQdp8T1twDrGUnGnYySn4XUCLzFnXsJ6XH2HjhsfdXvE",
  "key22": "27r7DSktTBfYRgy9Ju1UiHFYYwbvKhmxteXbuYU8opsNzSVwKFpEgQ7Vi6PEmr1tybsDkMUzXQHt4zEtSpVPorwM",
  "key23": "5TfLny4UNAv8Fm6KEUPohgwAh8Vb1HQGaZf44XiTWXi2cfpFpqQ5tn16ViZim4fFWSZj55opmZf3xSdD7ozp1EnM",
  "key24": "PBkdp5EbzCjMBMfAeRLxg2fpVpVMBNptXBwhnZSFDYpYrWrpJqhKN2mtCeGJYmgLwQ6QJFrDfPJQaS57xLfqUA7",
  "key25": "4iFvPsKraMJJWXsAABJNNmtgXTt466a4wgg5PFiNF1XVDkj4b1Ckiqmne7Sw1JFyG3fkHdD5nCcnrnw9EqNWd7wU",
  "key26": "9Fwswy1XSYhrN6x5HdwRwnC2vFK69H79AZgnboXRFErZM9mVapYwHJUjnxnpvcSw3bU6R6cQvjSgmCpBnDKgAj9",
  "key27": "5QfXaUjZJ8jNAtnxsoTechqHuWkGMm4pmqWwbLym7uYfCJB8tYWsxeQdR6nXkwoBhP2MLV1wi3aCJ9pqzmRHGxgY",
  "key28": "4HaV9oj5jW2HV4bSUyKKaPpAYG2HEqeTCKcr5Un5Bzuv6xVSS7q2YV1jJNpR2dqBnPzDe7HHM24VdNsWRwXT9cXP",
  "key29": "uJTJP2ewei8Z8oQRMF6sKi9aV3Tzm3AFsSP81TeC3YuM27ZYoc5HntihYASQMsoR38XW2VERQPTNekkM4iyMTKn",
  "key30": "3NwZS3UCDJZSEq1rzHLCGSyksnfScoUcdWXZuZ4ZkPGYjofYmCqhMRx5EWXAXs67RA5rYj7NH2s9eExueVUaVeX7",
  "key31": "4DaDiKp6yRr3H3ZXjSCzXRq3tMifFNqBiFPghc2cjXpy4FTR7zYKjYV43DSBkUK1WtPnP4seqQNPfMzEtWYG9EMG",
  "key32": "4pNyb5Bm951UCoKXErQiYzQV9JtEkhYbbqvYfv8Q1V1SwZQHk2mwbGozVUUduPChVvDRNpX11QRKK7NA1davfo5R",
  "key33": "hdomdWg98NkJzcmHqKU8Mb25P3N7Dtxw3rGadkdSjFMs18Mc9WbtZcNCz7cZpEWYX3XFqzXybEqK5DgXfF5rsnH",
  "key34": "4NwEx1nD1VjJDkEVWmGMEvanuACgrVhBPk2c3uUER9DsacZxVvjARek8DDqsufpgQ5s9j9SVYM8ZhkenJZTKNkwp"
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
