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
    "4Dfr2q3fV6dH9ztHdcC85Uj2mUnpFjUhyJrLCR1pXUuCCYZLKSzn78SQcQLgNz24CUMwnubg8nQXsLKrqERVMZwC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5PeckKxD7sXpDd2JYJxe5wzHYVqJx2CqER8E3JaBe6Xa8mzwDxGmkidKZ59KhKD6krtaRYVoZyiZ3Vy1aTBecHfq",
  "key1": "3hSgkm9vansdAxjPVSYbS4jYpSiL5CPL2GPSzzRESxQrXqD8Dj2gDvqC5icraXYQu4UD7U9bMnr7NhmfApamVNJC",
  "key2": "4VFCk3zPe9sM7jsiWMm9x9cSXZCmkzvBTYJNrmAwEMxfpbTmE1medps5HF243rySgkEkiQRBaX4fFo576CZA6f8t",
  "key3": "3rvPMabX83PF2ziHzQC89ecpGWWyskhdXLmRWMW5z8iWnyweKB6qa7oUvKcoi3ucWVkCZjuqJceNFL6dKDEVsGqm",
  "key4": "66ovirh5rkHKZBdSi7yg8kvXH449JLxJStRizW5AgWuQnnQJ3oNpfAFZKHpybD1fA135VmJW9aq2U68R6z1k11Xr",
  "key5": "ReDNFpg6KLw5SWsX8EHtcPJZvHYy4uGzQ6Nw9qp44WJeTbohWR2WxcExVa5QnzWKH6EYnf1LgaAfWzPBv4tcr3o",
  "key6": "4e3iBAuaiopM9oZBu4NTzgGCkC7vRkcJFFVirbgZhVFDkVgcCn8CMSqfXJyiS8qspF44NUdLrdBaqAM94y3yiUmR",
  "key7": "4upcktwqsFJxEPKEa9Spb2yxReG5JbuaR4TFfKAAoFEecTmTURiqLVvNbTKKmFJfKLwSzF6NLh4pNFQ2vAsXjyWH",
  "key8": "SSTUxUHhTbJxH4EDRp75tMR3i1vRWDC6oa5WafySCu9EMbTQVQW69agXeZm9mL65GURwPHDJit3eGzXMexgug6Z",
  "key9": "5cnDuf1U6BHFZXgsteW5xmrvce56vJhq8AffQAPiJ4S2TJrbccgT1ba6aqQJiHR8Qm3i1gz96jvy5oABon8kiPqZ",
  "key10": "2VCTd1TtBmzTDiFM52E7xhq2NXya4FHrcwktPHYRqjWLn6EeD4vu1BX1GVvmv3rkownLi6ZkTK6tFvZ2MU13E4Ye",
  "key11": "4iKjJ8LRvVjGYd2xr1NSZMbS5xtbfsX3gKtAn3qZmGjpoDtGPJ3MsGwsHb41FzF2Mr5KLSvZBCpFRpXS9YAMdUYf",
  "key12": "5Hasv6RF7jvFMjB8QRgHMLLmFoExgWGT4x9rzvqay4dgs28JC8kdDfo6dUSXbD3Y2PSdqjYDiNx1NG7Q5N4j9sSU",
  "key13": "4W4z5oKQfs65ysS4pHnWGW3rzqVjfhJZzBqqAmVGMfswCYpAzHbTMzA9KtpKC5MRHaQDSJViCgyMiWPSZpiTghb3",
  "key14": "64j5eY9GZrWc1gnwJCxHUd9r6QqBkJ4DvxYMMqnVkoDwB9MUarjb4kGcYaPEPTukUctfxV5yGdtitVxwZGZJ3ZrJ",
  "key15": "44cZkjpkBKqg8uDsgnSik34uyZVuJTcssgSx3uLjoZTPHUQb7eC73M6JdzdnByQbkuf4QiPfTaRq5gQLPzxXc8oh",
  "key16": "5khrwov7YcE6wns9G8XmCPZrQpQFHXgnTgBSdCKfwBUaBmeNa7XsfaLjBCyy4JUoxSe4DN9ER7drE5VyduNDRmRx",
  "key17": "2wVnS2npcxQGDVV38PPcozjL6Up4TaBoHmaZqfsWkLvVU9vcv8c1tUC1aLQGgdsKaFTjt54xCzMcJod5ggBzHQSw",
  "key18": "4eHPqx2n17Nk3Chqr6Ygexg4WmvNfUgFLr7VUuNnyB8GmrYebPbJXTP7YJ24H7pXiBW6yjFKympcEdarjuKPystr",
  "key19": "4KcYsTdNtu481eCPcs28fgvi66vAzQvmpmtDrPyqk2Bwe87c1PHyVZZ8KatRwHcrZujwxqYnA2tY4Dyw8azyPgb4",
  "key20": "472obacc67UWSNicWUGqRMVRKANCd6nF9jqcjiVg6WtK4aF9a4fUhddvvAb13iWogJqQedfZRHzfKm3EqQ9jt4fv",
  "key21": "3RSaYuYTYexhr3SxLzqpWYXMptVGhmYD8QjTRFcsCLNhdFSfrPQ3Fka42ndFpBCmm2nGck8v2SB8AAaaFuxs8iK2",
  "key22": "4WnLaYQC3mehb4E84paYStiAqVeMoehewbYXpUY9de7o3zAZDeN4nTQYdesXbyBZHEUVm9XMj6tzSy5BRubc45FH",
  "key23": "2HZQaLDo7Qj7VzBgHLDkt7Peri9hih64vMMRiYVqxLyY1pNonK1mMB5SWFHHqjrk9ibDZuNZACdWCpc4CmH7N3W8",
  "key24": "5PWsyntRBhtnWsLTmMkyV4BXRYyiuiT43DSSxrrm73oGsovQazHhHGSJXRr4T51tn8pyyJuVhmTrgd67CmSUuZWT",
  "key25": "66uSpv5CixzndL2X8W2EyCNHaRe5j9m35xcBt5X2wmCqp9acxQSXHiNhuPghMvRR39xkDyHzp13a9RQYczd2B6Jw",
  "key26": "bWzM9SBvuNRM3kU2nZ7BJSLVm4PAcV6Q6mEmQptsJzU5psjNQeo76ZiKHQ2RX4FRrpePBnAxay1QNqLQFZrMEg2",
  "key27": "3c12uiWmCQLFGa6ZxSDnAkYXTEgk1KH5GLnpkAoZTQe2QKPVGyzV1d95K8JArRTxd4ave6dxuSKwBS1si9uZtcyF",
  "key28": "4m9kRYBCkLb2hQJByBG1dwDCsg6V1KgYGNJ9VWNLHiVyaxYzjR8ZqnKksTLJwDMHFmHbDUduuoWnTbrfE5CQDNQs",
  "key29": "5pf9Zd4yG93CAZ25jqXbLKJbw6Ph8kH6EftrBibEcBZmQ2Mzyf7N4UkrqgwgfWX6SnQYNqaffEfbsTYYVShnBLC",
  "key30": "2GL8AX6L8i7jp6ipTcmS7Daxmiyb2f59QeUhvMpgwoYR1GNNJga4N12GZYxzKnZhcZKZbp3pGiTWTVPRfphiCsC2",
  "key31": "MzNAzjQGUHuoXCBcGFH8gRaPdo5wRq6NfhhseZ7VSuPK69uBDrkSLgCe9WzaJp3YLQYsN3a1rQHPVG2kTXNZJiv"
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
