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
    "58aEMZzUVB4YQsC4JF64nNnagNas9uVCNneH1LphCLbzdDUTf6eNbaKE9Je7KfUqiNM2xpbKYmEogCjnEgmf2T5s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Wx6ihjcorekgb2gQ7FnH1p6cWNph1SFVDuU9PQyrtjHpyZd4iXJCAZf9hk6NuyXvzvNYVsRsnfDcXGrUcodhSx8",
  "key1": "2i3NE7xt1FferehNF8kgZbfAEC68gCLwRHg3xbagMdFhc1KpCDTcRuSzBtTMDjwSC2SYPpWrNNR4TzvAyvc95soU",
  "key2": "4Di68hUWztMviaESMAXbYkiP5o2EoZuYWpNwVyKWvoDoiSZu1J8aATm5X2bXekd5RtArb1VXLH24UgUgMw9TbDMs",
  "key3": "3vbXRzKuzHCm57Ez8dmXVrmd4YVs2gaCUmuFHjvCx8QbmoLJ5sJaYYsmPSXKrKSycnVUjHNj28UP9PkFF2payMX1",
  "key4": "gNqKYYHx6zowu69NbpZG1k7fifJssxb2QWqtkY7tCDBJWGBVJPWswh8XHuiMzn49Aeiu3jw9p8uRdUAyEJd8Qqe",
  "key5": "2gL3k4wXi5To8QWi8NUwBukTBLSuj8WW7VJ7gnHbVdf92KzRqRzkjK3WjaktSaGnL3yZ33u1uwNdn2aZE2qdb5rA",
  "key6": "Yj3QF4KndJQRmb2omuCeAfWFwgxgaLy1H8eKUVxJfZxqTd92hStrMzWSnqhzoS91eRsHgRNk7uZczYiQ2Ty5Hhk",
  "key7": "2Cwk1TQGJGJbn7y6B1rLPdM5gnDJcJ92wcaTg8bDz95L3ADQR8nyu16spVedCgbqSK5H7H98nywK3q4jp2QL1V5m",
  "key8": "2qsoPnZBTUUcyg8DWFofrxDZxejGDYjDDUvZCgkfatJqFVmBygoqMxesPBTuCfNT44Wxz9ZSAPyWvaJzTDk6KQmL",
  "key9": "4E9rwrpifeadQAJFQgU7z5B8s1xT3w7JC6G8RmLfWUJgdzwPZ5fQENjv9uh3Q4FM7s3PM4e2KAjJ6xJdvr8xdjtx",
  "key10": "5T7PENXxX3c27DrNWXMcybQpBvd5QdaDQD6onAhMrhuhwk1rvU9pMys7ZjpJCVaLZR8dQyJJNPc3EGLYeXWVWjTR",
  "key11": "5Fdm2ktuAWe63N7zhhQffjHXmUaLHE5JWA7MePwFpMEQBzBkhioSuAjpxWswWk9cFYH1FvzZoW4atdC1Kgj8jVwe",
  "key12": "39v26bK4NJGqsnDwuDHC2am2PyHfuCXJuUapqTWky7abMGr85GUGFM4fzaSDMVDtB7PGUsGALzuNbxjmKiBXAQ88",
  "key13": "3o7GDsCT6PGNcuKex7LwpxLVUWWoNgo9Ja5cGKcP211Lj986ABWVJ1WKoMr74Yoy7KpvHGAW3kQLga3CLNriRfzu",
  "key14": "4mzT7ZKQKHDSb5GZAZ4r38yhDbdErA3EheLCom8bLH49ywT1P85kBt17Lk8SG1w1icSh8Y6SJQRMWumDsd7BoFzZ",
  "key15": "5rkZpFKQM5iQyxPLoadYtKVHXrWeoPkNFEGvRKVMZ4Jo3AeHRcTKgb4Wh2Adqg6UN1YPk4azdvke4pGCr8kofWXw",
  "key16": "FFuzJpM4b6tMWJzXK3kVpaEVWdFCcVbtsu2CbAPfoZ6PyGfZX2fqm9qjBdBx4LfKZEQrKfGbEtiVCRXxBJcRA13",
  "key17": "DgJZgqhzWT8NsvuFB19G4avKZH6Wo1Nrmoe3coWUMen2G9tCJmDgFSayMbHmzEzAQdmbtPtuEtD4kQk1YCLznWL",
  "key18": "5p8vmtwBDtmNg3WQu5Wg8jeUntiawrN3b7y3tjaseJ3C2jrgcyqHsHwK8uA1wPyefrymtNAXKdPmYqg5QZH6u4hV",
  "key19": "LASEpB2UxBwAkjMiStttk8xQ4y8ERgokZU7z58ixLhQRqrrv36VJvTivtmChTrr5wNZvKasSf4BaVawpWp9YHSh",
  "key20": "3qRHUMmw2TMFsfH8raqZMrRb4ECziMnC3bnfuifFYNgBbuFbMEdAzzSntJv46EneGPzUgyKjRj5CTMEXCBfpRzjD",
  "key21": "Z4i7rENixJYFFEpbS5gADtzuyN29d3MsxzUKfKWHmJja7UMtU41vDdzTHreq6E7mdP3z427zx1DaSNQSiGgTHwT",
  "key22": "4W2gkjbrqnsKd1kLaBN6jMmFmwt4rJoK1phwvEuQne7VpqsBBZM5eZy21xnQzJYYvkUSzTUsSv5vCbHFYqjgER1q",
  "key23": "5nnHivCX4e8XwjA5goRqJ3bGE3G4wmPQdwkC8vtBp1kY3fx1iFKR1rp7tXLUgXF3Am3LLBJqSkcGRJRPaRG7Gf5y",
  "key24": "4G7pxAT4Xh9tsDU4KT4wSVSLZFbwPkFhafZMEdUXjcQsfNKhhSg3AiQVbo5ez5ksiDcSWUuaGmPc5Uiyb9nzETiC"
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
