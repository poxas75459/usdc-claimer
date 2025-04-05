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
    "2zsFaDX684fUf9TAbHafqvxdrBmNU4Ejgq5yAuWxyTcYzxyrLkW4zPjS5WAha5R2vNQ3ay25VJqqjyFQ72JJMZUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5giZpqo5d3XxMjt765VjZ4vsmiEysG2uwvdX6U5eXTS6WzSMCbqddGMwtQBFkYnV11nDRWhXuBXgZcAFeWzp9Yrf",
  "key1": "79gKFp74cREcWUaJzSGavC58KjioChkvWHiQq4tH8xxyX3LucE4wVoGzqrbNbazoJxpgkiDenrqpcDSmQRfv3ND",
  "key2": "LmMDFQsxe1E6npVF2g8EuhpzHPJx99gPJAuCpXTipRpNZLXoUHWintyNxbczgFN1QywVtRjZpFZpcBGA58GKEnJ",
  "key3": "4axFPY4V2LJVG94YCiJWY2Wnj8eKTpGtkNY9i7FtYLoNQo6ACea7T723fNCZ4yWJggbFv4joXq6uZsmMHSEkMdLT",
  "key4": "H8t8YTVWYfA4JaaDCFNBERk5FAvGSZLCgRsTZw8w4nBasawrGiWpedW2DmmZCaEsxpBVrW3pTg5z9UaxL1DggqB",
  "key5": "62XoQcXt32yB8YJioBkgsbbv27vLyA6CT22oCWH9cHj3oGVkShkEDRgewZrTvUkpyKyjfygtQ66Lzgn4M9D2Qk1j",
  "key6": "5NyAghkW9aZ5uUptktFeVZQWnuERwK2QLejTduhLpjuLeAsdkfrGh9BufD3RjaoYbcYwH9Uho4JErc55Nzr3v2M6",
  "key7": "3vVFEXk3kpfRzJHyY3wmYEWDTrh6D19PbApxedUfT9HhH6XJtkHvHAwJfuzwTgi1j2C5w6bufRq3hF6FcozxntQK",
  "key8": "NeVwhWbJfcEWaX7nDRadFp3CohP1dWuFweTmH8QrsGig3hanNHCgW2bUARSE7rP4CXMYenyEUEwYZqG2jdZv7bA",
  "key9": "3ZKTSapK7szs38qx5vA643XiZkDoS14g91uKXKydyyfqy6yi7cJCMUGPsP8SE37mFozeMKi8fG2W2iKqnqFbAeLM",
  "key10": "3ai89pdQtqCn2DLyHbbnauJvNS4uQuiGWuKSHpeQNWuZDwMhNKQEZ6k9qSWmu5jE7UYBdDWijSxn3FmKdTKLfA7m",
  "key11": "2oUdHAgbP3VtfvRLEnAY3yYVhhzAbRoyt2MVR6zocEAq72odNYmh3D24UsVtR119Yu8cysWSunzi3ohAFnm51kuS",
  "key12": "qaRFUPTcT3BBCsJgTjhDsNsPFWzWrvSZm8B7A1MjT3maKorFpw2pMUTwDA7H5bEyhbiY247vkAapdrWFmFaBVTv",
  "key13": "3ez4zfe4L5ocV78JUVw98FvrikQyVKvwEooxrP6mLjdi1zkyZsmmuDdXnM2H9KQAiq4TnTjruNT3F3bDFrERGSqL",
  "key14": "2QSDEnfBE2rLPwHkyn4JEYXnRZtTPsjzqSQK9sDYDsbg4z8VAQX2ToktW6FYoHaGRNVj5DoeJm7tv9moHFb67tAZ",
  "key15": "4JTXLe8Qn2Ze1SYSHgXakvzKSpTNhJEchBg3FMAMAZWoWEq5i4rxneAZwQAiCgWQZUEkKtQM5UKhRmdZEQgqr9To",
  "key16": "5Nhpmsrh8CJfSxDPYdetcFWFYrieNvprP1Na6Smg4ovSaYjUeT5gLJb25HhsiK5V24A8YBLLmxNGJVTePrRRhNn9",
  "key17": "4vv95TgyhEavoQJNtj8TERTZR1FKK9VLLV5FDgcPKQv2z9Ve1K2soHVHvQHa7A9oLxiPf6qBjsXnTeGsBBCcNmec",
  "key18": "23mJovpPefmVX1NTKHvLZUw6E1XeU1ah42DXMjqe3Wiu9vBBv6p7jwrFFwMe4qRRXLsVU1kcd2GcDrNZFsK3Qw3R",
  "key19": "5yo61j4wguKSp7B1N2ZUTsZcV153nREQ78q4Zn5CuBeSy2vo2Ag3sWvbbfEF1STPUxy2rdj1oG9zTKnqQ9BTQs2o",
  "key20": "3Fw1N7skRudBbWhFr7pPKA28HHKZ4awndTekdYYSxbSDw8282mHzabVaVrsntHqAbYeGpSR9iBSLRtSVPGUdJNTM",
  "key21": "2Lj7Vc5gXxWJm36X3MBmHBLF3T29dvG82et9FGp6H84EqRzC7X7pcjodrvwUZ4XvwLkTenWQuxNiZZCsF2bucUTs",
  "key22": "3urAT1nTCcZu24trtnurKuCpumqq171Y9tEy2J16ip5xHiKPtrnKwUWEFtMDkFxQJreeN3VBfG3KCiHco2npt9cj",
  "key23": "4NvdWKiM9gubCqfN9ycGbDrQiDgiPVBu8acEHt3FYwjh5Dd6GhTurd8Er1xjmWLxJKUCHGaHCv6chGYtTrtRiME5",
  "key24": "45vbhAddn4bUr7EuV5JDfTfdEJM3rcHZnynBtvCsefSamNZmCqCMj2egYud6h8DsPdbQhFg8QduQwNfsJDVitoKe",
  "key25": "3HAbhBMCkY6tWQgpNpjMSu7WC595sJkNaTcegGiTWaorZ3JXC1qEyx3RtKX539T5C6QYEEE8fC5mpKzKMFV9zHrA",
  "key26": "5nJtP4uKjYjL3EDnfSVnCPCeEeTUq7ZHtC4gSATPmwFV4wGcJ4z9py5kras2gPiZoQeT8AKrkRH5oKMwifsHWXvM",
  "key27": "3PXLJW3TamGyf8SUgi1zANwrEen6BDk4kVMBvEPsrR3FJ8o6PwvjKyTewR9GD5BA2tREufHoRNJbC4PegFvhkF4m",
  "key28": "2HvGyJBsH2x4BcCuSV2iY9u1W1mPDXnSXNzzDnx4VoCZM8mSEzfk5Av9R8kbiGxPN2a4HBtfudXccBnfRx6P21YZ",
  "key29": "2ALbHPHzx3tLUdv7EHoG7Zx8EbF4QnWCMdm4x6T7dfd2o5kspx9HF6ipJKaTGFox5RMHThuxQ5CJR9emV3et3viH",
  "key30": "5t9dQLUeq5UBP2nnXPG8P5ZaSU1kFFTjDTLpCrcidoNBm3V638bjPdbWkedFoABmC8RDKnYJKwtSQGN4z6qEui2G",
  "key31": "4doQSphLSSkizQ921jZM48ihQ6ZJn7WapPnGAcE74QZV3foey2NdtgkL2aExzYtntdhY5rwkKd7qBQqhiW7mwh1Y",
  "key32": "5NjEToNXvLGSTd3xcTvAqM2z6XEEwuzfLSURkyB9cabNwMshR2WLYktoSRom3QQBBY4D1UuU9PGuqjkUcCvBwaUf",
  "key33": "3PRkX8nWZY3kAYGqfNQf3S8ta7eQq8TEzFM5LXRNtV1uBM4pzquuNTu5MVbmLDo5t62PrKtdK4CochZePdfD4uLj",
  "key34": "5rHyD8VogAhJrq1gvsYyxY6Y2M8J2424naqLdmPkof2KHgY3KGL8ep5t1xWS2P8wGcWrkEpojuQ4j7nRrHkBZ78L",
  "key35": "36hQXKyJXoByqwJdr1zuewmzXrPhxskzNByNoUAvwL2P5uzjM6F3rrE9EvdbmKF2bZQ5a3c3a5mQ46cnsVnsw1PA",
  "key36": "4NzHR4hPJCcwzhqAdjUph92tWHVmbgfxxzDuqFe25z5iWCeEniDHhYNXJcgvjpFQyzGivvgpkhBbjQ9uUH6wAjvh",
  "key37": "2aGCkqzAM9NBXpFgFDB165vK3pSZh3JFkkFdWao7unoJaNtHi5Y6PiB78SzSzK8T1sni4HnD6ntvw4BV3vBgT5db",
  "key38": "2NZ1iJi2s3wx8ea6nM3bABMfCHk4KoDFdoVHQ2gibUkVUvMJwee51UgzPPybcZNe2VdWqpgSAD5qtTVZXqfrihM8",
  "key39": "2yw62xZrPbyecmtooERQY1Pfgw5nvH2knJ8LMhLRk1SdCxC1BNQZprHjULATycoVn5n7NDpuuoZjFy6s6CpmyimM",
  "key40": "2q87an9b89BhrYmcd2zR7H9k2QebvKBwQzt2WZ7kVGL2pAKUN1a9WvkhS8S5zDfsbUcoiHbsnhjpumysnj4JzJuo",
  "key41": "3zUUxHpvEkJvZSv6DG6tXqLKSfZkubwdhwbH3JHGhHCg2NhUxYjyEBHeKU5f3YvSEHSnKuZrcFnSEryrbpnWnyDt"
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
