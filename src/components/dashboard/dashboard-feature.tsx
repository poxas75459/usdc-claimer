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
    "2tbFLSBEbkCaVmKDiaiU3xHKUMvTj9fPrL1oe8cMPx7HQYBuNdGehdKBmwtv7MHWrURjNJGpSUraivitfhbwdpTD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yAdYSEYu5nzs5UtAWs83GbAi9Z39K69NKt48n759w2eGryyejGHqujZG4Vq5JXZq5Zpe3XNGjCYZeS5Wi4E32dZ",
  "key1": "4AgbGx5GxTyyKVrTbNcDZ2TX6nSYrrxi1WVE4K4wnHmdgWDFac2G4wTQGepjHENkyP8B5y3VzdGTgwnNqhB7JQus",
  "key2": "bgt68nHV9neirwEy6jaYuR9Y1PSsuRrXfMvcAoXK7U5maRsmrSaGtrPhVGNuGHrJiNsUQCx9p7dKT2b6FNskdda",
  "key3": "3zDaWueDKuxPVsNWM15UcQSTdDFSbUFbY51mD3kHFFJhMVsFCsfhcLN5TDyXcZR8jpscKBMJTGESH3bWHQP2prKe",
  "key4": "3S7C479zpfN6tvPmbogQpELwBmeqtArxDiKFrWpaCLJcybmEbxgW5ge9Xe2kEV5Ue3aDpNVhbaQeYpm2fnEWb6yP",
  "key5": "5btY15UcxeFkJTmr8AHi9E4kgmpYXnuzj4PWTgrHHBzaRhbY7r9XQfMt1FEYx8RQwjmnqjyX47WtnVm7fAv1Aanu",
  "key6": "44jdFqDfJjA2DgBvBd3HgiadQKe5DA9akRztPqiHYb4pKYfnSzqcZ1iZ3qFWrqQemHrZVRw5ykGyyWKxmkspy2g",
  "key7": "2HYJAGMf5vMkqidJQE3jUGZJH5aA2rvVnRQvtRmDWmTdVT43Nt3W1gf1VGUca7buEsep5n6w2y4oBBzBzGsQPUfn",
  "key8": "aEEc9L8zPCrEmKHkKZhDG81RiBYJ5EujEudnVqz5W1MhT5MTuppCStcwwYAyc2W2pZHTV3PvChS8czcgtaaVF6u",
  "key9": "SdXHNy4kcuLSUbDNVY6ZmF6XhEWkDFe4vkmh2iZNbf1ERCp1voiDtoDB8FYpqqfuBqmpBdrAwsahmVGdTtJGHwF",
  "key10": "BucuJbinB3x1wGTPCHKy25Rc9NMKj6KpM1T1ixHw3wR2Ln9McfQKqsFkDiQrsfH5jeCJrxmgi6CvamdzqLoszbo",
  "key11": "5Ur85YJPZnrWFtbc3Ejn9pEJy1ifqxGdxM873uHsHu4CRoZCqDcdHB7Yp8pPgGsJn7GA1ud9B55ckjGXeXo9xWM1",
  "key12": "2UnNNt2TrbzJj5768rtyuB9cuS4ujE8MoJsxraGXwisYmd9CYEammsoZzbME3h2uf1JrWnGSinEtGc2tAfszHm1d",
  "key13": "sUVX2GviQPLgSRpcvRLBbfJyzFshHeorRrcALLFPqwvMARmCcpLWZKXkuPWoceGAXHQS9ZmJSg6bWXCM4qPB6c2",
  "key14": "sq3j8m8Wa2S2YhxnGGhQzDKSreaZpsz9hxdkY7JERsYBZUrPqRMY1Wbnhr5yy7ojc6ekBXjYpWAfWHBukqupCqV",
  "key15": "3zUbCN2aeQkJ6PDRAcRaagyKfQ13DspvJaTA8rzxJKbxjjNeDPi89DkmKqBWoi77qTaqmt8U2KE933D1892cmKpc",
  "key16": "2n5YZu5yEo3eawQ41bbZ1k8uWbqJ8RZWxoMkJzhcG8adxNK1SmGTWVuiLBcLvCabZnNDZ6DK4mK7AhwAtSxrrgek",
  "key17": "4k9MoTnouUQDxHjsVq3iVUGFNKihyXeDLJcQs6wFdrKjNusuuJNxgbuUjSdFNnCswQ9NkPj7SvBVVWQbn1pN2wou",
  "key18": "2ZSVy8ArFTJQjZUPezHNXJifZqr8Sji2GD6D5EVJbNwnPy9xRpS8tVZ9QFigcRkMNpEcrsRUVi4dyQ8ndwsvJAeC",
  "key19": "2JHQp8QWrg3bWpF4yoY8Z8m8gvtBNx9ViLb3vjAmY3pACeGLBkRPXLiS3cvGKeEjTYMoDZ5VMpNYPF4cQKRheVwa",
  "key20": "2fd4A4V86Tb2qw47BuieuhLiU3cARWoDtwouaVE8zSjLKuFrasiu7rcGAtKuBbgJwK3uK3RhfY4Jo8odNAeEunc5",
  "key21": "42yD7FBpwMJdKjahgb4YhS1M1LcxxvyP8bxPy4YHSBtYDWmBNCcc4GUuroqwXSud6HmFcP84fSmGnaKsurvDVtVJ",
  "key22": "b29F6wVi8GCimUvrpcyAbE63Xpa9a5pYShkWgWrC5QEX5NzBuxwkHvyB92tawNSvLYRAYLvjgkq3VYkSqjK86CN",
  "key23": "3wvqWMEt9GJtN3fKfXEPcCDkTfjSFQfESwiYWe5zkdfYBp7LSCpdzz3gQHPxh5ThaRcmwajjitKbuFfsrMeviyfy",
  "key24": "489gHGDMtpdYHgrrpA8mS7zr2q92v6z7TXeCZ9Kaii8rXZ2GTUZgTkHpjfn38A9PevRtFG1gf8HomWsNaWQwwy4p",
  "key25": "39K41qCBiGBSqHSV5DewFJ82H7VpPDkF1dWRS51UAnirkFf7reaxfdAYbuC9JRG8vHymwWZonQ8VvYfWAi4rhAnF",
  "key26": "5DTGZq8nCALS5BMqap9DNAZVvCiA1uhjBp9rf9DASAv6qvVVMEUiGtTTfPzKzx9XS6F5xqHVKWpiQedjDCKsTpuU",
  "key27": "2EvisZNMMEp9gH96qLHNYNKNsKDJpDSFsufNJceMTswK71RjHZheanTsfmssCL38LZ9EHv95Jd9oEjFSePNLdYiw"
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
