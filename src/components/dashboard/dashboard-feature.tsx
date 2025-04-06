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
    "45WUQZCbg7dzGLGmefPUNhMo1DeNcUNxJH87TDS3RoGziikL5Psa5o4nU2PDDL6xWJKVzX6kmiGqEfqx54fbHvr4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aRofmPhDdMQSVqWWChtGvJuzKNkkenxf2DRHb9rZ75qs89csmf4GB9EnsZnExCowtyRbiF4HAMZpe2n287TzkSN",
  "key1": "VgZmXLC57oqwwv7WcqyUQemEUzUJVkVi2TiwphS8onQ3qNYZSW7BS2RahsUFEhQfvErzNFRgYeXNWodtNMvPWPt",
  "key2": "cNm9fMqRc2t1WR1NKUpzCQL5XmWg7tup2E13fEV1tdziH6kFMkdtF6WiS5gHnH4pqLiqJqeyrrfcoVrHs9xwMwt",
  "key3": "4xJjfmr3wsxnTrBykRq77H79grTrLqx8JwC5sSz1Sx8h1GwtK4u5wr1bQjcGvNyqMmGAQUKfrGhUhEuwJ8ojMXZ3",
  "key4": "4K9AZm6W8Qbsr75FrM15c7BF1gjcEeSiexgiMB3agjwvRad9szfZTL5PLWuPQqDcDoCnpKYr2DB5X8o8PhjPxeDU",
  "key5": "64JfKBDBsn1vypUT2S4LZ9385Yv6NStVn97ZqkHaS4CEKJX6WWg1HWMqG5Kw38jF3AXJHyDPhaU2eSmQ6aS14MQv",
  "key6": "3qRxRZjNfNRJcQyQa1ENdkW6hW5fD7U8rjPE9daJyuNrqMmfQgrXqPZceerJZGtcRdffCjLsfZ5e4f7NNmrsRgPg",
  "key7": "3bSZVeSyJ2WQWp4gMuQ5qhTCqQQL5uZSx24ZYCy3zzDA1aZsE7Dk3i2hiC4TSwmuSJGoDrHbDpiKC2qoa4385HV",
  "key8": "3cYRX9dQ7EsvyCAYNS22nTxsPtoCB6vQTPLuemGEK23XbdzUzgvZh3CYyDM6nSLgNBT2pmH3mML2FEwa31csayBZ",
  "key9": "5LVPu9qXGPFyRrAPpGqaCEeFCiPJdGmArehuuDU5bgffuVtp1MQoPo37h1DDEGhLTncuGFpB438YKuvb5M1Vo81A",
  "key10": "bAGuS7CdJSjioaKxGzcwx3q7DvoTzUX611GZMk8QWj2Dkxvm1iVCDgRLj2vjfwLHGgynqxyKYCwD6caa4TQfQNz",
  "key11": "UasqAjdg3CbMWcUoRL5o6onUfxV8C8VwGvF2fXhY63BNoGGAvoSdpWnTAHzz5raKhfYfSgjc7A3qtPBECkBVmf4",
  "key12": "54JLBCj9ipXUWMsSNodVV1CkpTNMcD1K8xuf5eyP8HMAN4paLSbbcWxtBcf4EytBJr6KzwbinJXmTxQXk13pUa5d",
  "key13": "3MZWrk1gbGjUbgKRuDkAwW14CBgnS9sgyijx6RqVGVDXb5nN4CTiT1gKab98SaiJgxF2yJCVgjxsYQVGqpgCcwts",
  "key14": "3kDbCA9i3Yh8dNpqGTQQgTggVf36GS16yzTLwiEbrjw9TVfBEpiVXVMP3Q8TedUNYfSBT5z2n2C3GSNSfoRAgv2C",
  "key15": "4WyyHxuKAVZzmaMCEYNaJ3FEpXk8URFcRAMadxMoEd31UQp6gEiuPvwE1SNtbTTX8zRBZginGDrQSVqkAABoeFnA",
  "key16": "9XjmwpeHPGhUJonaYWVR1B3QkDCe9BxaDeLCeVM9YQtcHC2it31QUzzuMyftYmRYQMDwj7HHyTH9JG7yFXX5wA1",
  "key17": "3dpcXhs9wTj4LhkCpuFjRo6Udiqse6UAej9BjE1LTCDbfjdASfzqWCLkMhseR5m8KJg4ayiP1WcowtZ8r7xtuVai",
  "key18": "5nHjZVbB7PGK9yUsUTiSEARwkMthzjVygrpRDxnkgNKZs6ibWy8KNbYuKmtf97c8GxaMQDETVv5Qqpww62Gh7G9B",
  "key19": "2AELsnDuzfbUniVjTqFiauAdNMPaECLycQQixg7UnHtCYpKFTcLvdWQhtGzyM7ovCNCEfpowNsqLAAbtj97mf6rK",
  "key20": "M7FnLFBo38VWWXebZvaNtRGxCfTWQM8M5NqxgRGmy5ByyJWqFJ2x46Vpst5V7efYuDyAAKFzQ2AJswz1SoUtn8s",
  "key21": "3ogHDp9L5dgFE8QLno9J3V7iUsf4K7LLSYCyraASVUCRDkEEoCrvLS66Dkyr4k1Qt5AJyJTtUNKTZb2D8czcwsD3",
  "key22": "4UwC4ujorzASvPFjrnmnLzdp1qrZSmLWeVzWiXzq3BwhSuxL21gj8r3FFCCvpzvpejosapy3qy1swm9JApJ668go",
  "key23": "8iogZfXuRToRf1R56MXmhr7PVAfJwxrwTbMNb8WAyEKMAYadifVG828fyiC3369fe2vyRyMK9gZ1ftAXR3Th8KB",
  "key24": "2eLhXYEFhpj2eAy45RexjWt6zAERb8eZ31QpzvgQBPMmEqTkECvVtvaCHWfsCYwTD7yQ78JT2fFnhGCKVmqSsbCz",
  "key25": "2HSxEAB9LetBqDhzpNCjopdNoDMPThNGsAAWxaaPa1Lr766n38NqY5gDJDUjvBccApvnE5EMbGvt3fU3fFUEyyNA",
  "key26": "25Tygpfvp8p4oPt88NuHK7GwgyY91HJR4Vp7T6pM8jAHEU2V6dSjzv22sChWdMSegHKoa2J84jxHKT7e2P6x7dsq",
  "key27": "2ws3pjLZBs9hYvUN9or8M7mreTEgniH1WPhTGRXy7BYMrWXwimook1zTWoB2TboGToXZLGz9WdBvL7U7usk9Lor5",
  "key28": "42bk9bK7ZHNk8izsrGZ55C9VAgGcMgz59DRoBKfZtw433yLYQEv2N3NyobJWi5hcjBaKWDH9FTuQU5fE9hgNb7vn",
  "key29": "33SQZsEMNFGwCHT7Dy4CFsnr98BRLtR491YqYFMHaSinZ6eZaNcZVf4JuTE6poan5hKT9ZUVNSTfZnuRoBLBLEsQ",
  "key30": "2hb3gZ5imgVh42VYttTwcBKKtAFXLE4zp9XmwiRbt9GZcf8pQaEXiadYWDQ4DYNaNDJ7cTUV8UWqBRQW1t9LoFzb",
  "key31": "5EatrNYd62owArro51wR7EqGtUQ7DewdQiureZZh51BWz1fjBz4Lscb12MKEmG5B9x4n62M71SsZZ45RJxW3N73y",
  "key32": "3rYdy33jtN9W3f3sGgDC9yJa8kRpDpSAStJz6PwQ2Edx24umcyLWJNdYPnxgeUNUwhrNS2rUZbYDap5spBaJyrhf",
  "key33": "2n2CbGeUcZ81TuQUsc8fqj3WE9SqPFAF5GnkoRvB9E8XaTrVjdnKPbt2qzspufGoiXcRzUbPBpjz5BoG2RZkYxDq",
  "key34": "5TKJu8wyeYxMFGZt9aSHRYVfh2bF913TqEcnTazv9e3zHYX7BZ1oLS1GWFTXvY8k9zsAHViEYVcaQV58MCvNjQdZ",
  "key35": "2GpxcJrGQDHvMwFmv8vrk3nzFmXWuof9UdjcJQTAP1DZxJWJ2SDKhA1faSFYSsBcteGgoBUF3UUTFerPDxzA5hTh"
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
