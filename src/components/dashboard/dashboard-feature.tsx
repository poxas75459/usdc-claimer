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
    "5iG19f2nsS656RfQpUasD7ruawQSRiZSEkZ9ZZnR3XXSbEdeWzHasD498pppAQCGDyBFKreJ8sonbj25GusdujMx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2i2aA98cnKNF4TUSHUYeSJPTYEr6nw5sbNLTm7AZSCzUCSmsF3opv5XUF8RWnSr8ah2Kjq2yRHEkqv6Tpr135GBL",
  "key1": "5sDoD6XAMM7xkPUSzt6gc2BRS4YKzhZpgmKgWk2cfihB3feFXP16QdDSi9gV1ErsTF7tojqGY8EJQjaLeAfQai7K",
  "key2": "2ZRaHa3Ujbvuh1PKSNQ5fYd7q2BwDbdcENyzQ6XianUZbwGTDQg63CrTigJJyKMJqJu9oGBp3E2qdkR6yXLZrAun",
  "key3": "5NEjpL7gPgVbhTGxeP3CjBxL9Riri5ovuJPJMNKGggPcsewHaSZndBuPQsNBtAsntbwifdAbmVGiBBTmkDiLF93e",
  "key4": "5DjJ9taDcJjWHgDSDCxNwdsuDL7zs4sdcYKjSfqdnodsbLoKnHjBBxvS92MFNxNKanJEMmVYwq2hBaG5ndW3evta",
  "key5": "5R7mdBvM6bTLVSvV176RsRBqv8ZPASgbjsB72sChyUvZBm2rGctRn3FvMFKgTjwqtwSKyrasyuyVvQsyP3txbNdx",
  "key6": "63xFBrofdFuxcPEEBqYGnSCGmxpvnR9MkmiCqWUPvHPMEKZDHUQPBTSAPndGyXUKYXsZnycff89FMQ9fsbHSPRvm",
  "key7": "2ZjC8nwpNicMUzJxsw8cYqaVNFWTj6ZbaCuH1kVjahDrBVjUJGGht18YdhpnnxoHzMGr3AGKjpPWLpz98WH3G9bg",
  "key8": "3VxEmBW2try6TgLiE7AMP7rka2X22q6Dk9JhmHhd51eGL7B31U6T6XKqfuUa8ZuiqDeBbxDv23rZrbmKZGgvBfSx",
  "key9": "uFF9MDxXhs5iAZkXGxqbtMRU2bcMpcZeX4Szz5BAG3hB5sPKKgbYBG1W1b95giLYRc3SxoM3sge5BG6DPzwJPgo",
  "key10": "5EeEoY5GFViK5hfDz3sGB91PvzPtymzwB6FGZoRQVUznc8eXWUyftynZckwD36V6ALyB2Q31KKN42YwTtTvkeD1L",
  "key11": "3euDKDzaVYsXDh5UX6sVBz99bxuWRFHZ7RwGZnLryJUF36h6HbqkbkPcJYNKnQrMzXHH3m17yRxEvh2BJKYer21e",
  "key12": "5ATCE5bhzoCjb1PVZMihRdbz2ZJa3s3utbYzGY6VfimfXKunq6QZ6LEpEqBV5nTT1UiZEbsDiQMCdViwuoreThw",
  "key13": "54f12B7DP1twZ7fc77vyFT7UdmAiWZamiQGCkeHmCTG2YUpFxuzPzaRKqGVAntbKqYrewx1Zho8zM737rKRqMV6Q",
  "key14": "3kg5KfUgNkdtqhsB8TdRNZCthbDpNDToidKi775XxwHaBVfSkL55He8ymMLHxox9AU9bZ5FBPTCfHoobfTc1PR2z",
  "key15": "2cZ3heuJDgac7AAiVFADC6scCB7MFqVx6TB7kZjZkFYGqYrHuUJXjRLkNESWXCqNSsFxHGirMpCpYRDDi4oQaRmp",
  "key16": "LpLz2cyrXcnEfUpKADLs9oDw6yts4S3MuvJow2yd8H6vB8LYbNUVWP7BPRaJ3Pu3rJz9o5VDb2BWVSCUtqYnUK3",
  "key17": "XRW1H6x924PzHe8bcjKYbN4rkcd2V27PdCP9L6m63sEhGBaytmJGZEuzLATNHSq2EWvzpBVDNQsGcDXEC1GAsuF",
  "key18": "21sbPRKrst3ExJtemnu5PLBP1eA4vkknMZsYBcLJuWtSv9sRF8LY1K4oQm9f1abLRpCtPzWXu61aDSH1rxYZZSs7",
  "key19": "3YeQQusqhYJr1VY3pSeTAGde45azs5dUgpQ1turNEWGmoXEMKc4Z2a1XBrtMoxLnhQQ9bmua4Ggi64pY1WgjgMnT",
  "key20": "3KAHJ6h1q3fVFSa2ALyrUP9nxBQBpZKGze1ZuTCA42FVEQcRgeBBgzfnhTJn9VF4cygvYmBVxNvFRnz6PjQBrdbM",
  "key21": "4duJbEdQJqdfbGhqEPT6f4skR2jfuLQvYcTvnxzymw3hm7QP4QyR27VVYCBpckoHjrPWpUdt5M3LrCzoWZZNHZJy",
  "key22": "2PWeSd2hgWaRJj9q4kza8yQm3hKredSEkkhbmjp9uW5srxy5UCKPikDLFGjKQ4HRBdNsq7phJgoC5PeurvMwkRNX",
  "key23": "4QvgkrDdjMX6GtMwFppS9Ud5q1rc5oD9BfhoHe49raxAsZnjowZXdZfWQaLr5M1mmg2WNSkRHphLxkD6eV1Y5dat",
  "key24": "3oP2aktce9sczDgyWFKNqzV2sBovJfnYwx2bdYDJAj93k4RvtDdewThP6n1A5ZBiz5HxL2zuMvgxFqxeB2E5PPxL",
  "key25": "3uEzqo5CP4tSbTdeScn5nmoHbcNBytaxmzueDeqK3m5yyKrF1DWGbnUG9JbKa14P69TPNLV3E3z35WQopzmhaRTJ",
  "key26": "3EfSPqRMcyGxXEt2GHS86F2opMvR5LEudTGwkgd5wQiYpJAvSscYeGiU9X4K2eBHPm78FbGcEuWyVbaGxyzAtmq2",
  "key27": "5z9r6guB7Y55kiKrYacPg5BxEDZh3GwUqzUuJnwwWvCCEV7M5fNLQb9DJFA4p7UQ4Z7WbEGt5Z7hFj6m338gh6EG",
  "key28": "tnup9Nn9xUdrk44AGQzE46ea13iU2Sq919487P1utCo7Vfa6BLobiDq2hwgyHpYrS31hKfPXXqwKGTQ9jY6bYXP",
  "key29": "2c5pa9oQp5Kq2HG63M67kepEmCS7Qg178vwA18g3PyHt5BcPk6F4TgavjEqqrN7thtAQM963gdPXt3i3HavMLtXt",
  "key30": "3JV3LELCVKWJDwbgcSNeVSTts4frmCoQgp77EZt2pMKzSfBFzT9wZVSCkZY212YnNhWS8WETMMDtnemGvWmtPhqx",
  "key31": "52EmohvuJdF3YE4yWuzn2EdkpB8kjgZPW5QUqLhc5L5B54RapDJT1gf8BnhJxHAqFGHnPSJqTCUwSk8RfK4Y8Axg"
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
