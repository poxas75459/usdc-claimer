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
    "4cwmryaYPKb7fN7Lmc3kxsSbpzYyHq6fH7WXp8HurzcviXFHpjSFNWSorvKPbxcL6NpVjPJ9xubVh1zTJzVBUd7V"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53HjXboHj9anEhtJDhDWCAv1qEqXAKSuXP5hqidQgHwoZC9SYvbt2eufx2jdeKM4XaLjSKqvYnH85vtcBfHYwhXc",
  "key1": "5GqjtQxPeqQDv6ckUCaBv4HAPyScPtDnCgK375gezfsYJBhmR9EbTnxGEctYH89mfbc9B5PNC1joBgHQGKBtXZMw",
  "key2": "3tmb27CU8JenEmQnQ4fmfJnjVxU6bf1PRGp6CpG2DkhcZAFiV6HkC6ekCiD7cp6SRSg8Lo3172CD1Pnh4bwFERJP",
  "key3": "63Sd6hgszNNjVD8sLYcpV5AUYwZXmVZZkZd6CVZeXfcUZ1Uc72yQK7AyLdhjvmtQuDzioydDbFyVHBFDSo5i5eJ7",
  "key4": "RBUGtMhoTMtFNKJmg3efVx6j3Zksr5pPHqJuQ1Mght6aujVca8kxxAj6FEKZ3mGUn52ERJCJz8vLpF59jXvSUFL",
  "key5": "5ZP8aK8N8v3igCQTFvsQCt6cgbVh7yGeQTQXPBuVvHfNc9gq9i5hUV7LbVPud675eRQSwr9fUygN5fRpJuKg3fJk",
  "key6": "a4fqbsUuHMs4f17PzV2yU1Xv6pHfqHRcw1HgTb9LYLAJNwHnZhveGZAhxP2KAXkfJYKihuLM1djDdcCaBEHGTyq",
  "key7": "4hV3HBErcMNj9xxck8V9Dqzt48AAPqiHBWSAWNZ1wnZ3zKYZfLwDSejaFpyu8MeLVNXiscPGcnfgHxknmPVNAUBe",
  "key8": "3HZTBCDUCaKNH1Eu97Zq3d7TK2bBXkW5FWBh9PDRWx1RiKM9RjXnnoawVM67SHdnUk5VnX7QJoFeUHeMdq3skrUb",
  "key9": "4SzXUUpj84VZHcAxbyVPbm1KnD3KfjoUMGEQ2CkMru2ouyuSuDMRkbKyVd7CkRw81VX2dKFf2js27mzpt2nEyLAF",
  "key10": "6CdMfpbgqYZniooVxm69PaDY3Tc3vubnRF4eTJ16hhDBCLZVKZr6B85GL72wbm8x75EQGNe3Ca6zao5VcRnQ4Hw",
  "key11": "5T75hvhXhPD9u63KrCQA7dPwUrrhn8zm38HuxjEcQ3JZdWMCF2Fwr9LbHXZnRPxc3zhvYxsCwDkgQjnQGaKmH3xn",
  "key12": "QDgBp5GC1T7r7tvLGKdyocWLz3TcJ7V3ShqXY5E6Jkt8TdZgQRa8PoizvVDC9tQMPRANydaHY4YAhssPmJqfDF8",
  "key13": "4cJWzusgt4PtkMLiPM7GqU2EvSNrDf9GSQQraCyfqLYtX6U9PFzQrxMEDpJJEiSukDUqj9iRHDGxunBEATLeXNPf",
  "key14": "4FTuxkuySZJWCHFWrY7Hio76H1sdrhFeNZwXtNB42k9a22fMnJkyCFmUcfJYZ5gLC91PRyDjdJGKw2tpLz6qZsk9",
  "key15": "4Lgf1Rrkna4uQAsxtvHKhS3QFaKAg2Nu9V9XSgNAQxXFecDHMuihN8Tdmr7oMoCSNL9KM4TQnQUpUNJhKPZh92HT",
  "key16": "SonibCkWRVPFWGowfEX3ScQAQtjxC3wQm6MCPdZSJZFSNdNsnJ3qQYnWgrvxC6XQXZtkGJiip9XBvRvPozTYRB1",
  "key17": "2cahCtzUUmnK71HJdVGiTAuA3MNJJcnoj1VPxeRBjtJJYUHk5xA3MgwTJdmBfMwBJwaCgXQ4AqvFQjooCKmqjFuK",
  "key18": "5oRmeddCcEogetxCLkJ3yyXGcUSbJ17ErUNfCpfPXmKxQAQWFbLc8eL8V9CbbbAirwcEMhoiQeY5jz7DZ2oucB9D",
  "key19": "7zqXY8NKheoTJUtXZpXcM35rv9FYQrMoWke8xdujmD8QA3b8MiXXMBh8ajPMeeqa8hrDZ1EbySm2Ffh9njZfCLB",
  "key20": "5pJzarWmd9TnCEjAw17pfmbsupiv9kpQFATHyHekQ2qSkv4tcHvR9iyGD15DugSgH22hs5YizhSkggh41xzykosV",
  "key21": "3VeRHr6cofXoS9gsNyPc9LAFth8jEAYzf7mjRdqbSjJAz7nh8cqnBjnMvmwiXvbJijZLG7HMP2jGMvSs9oTeE1wh",
  "key22": "4mWZrnJPBnQR74Pe8anEHMEuZJ6y98X4g3BLQ7BJNAV8oHMuAg9hCGbmvivNK9HCsg6NY8po8P8Q2qVVZ5GphK9M",
  "key23": "tFKRcm4C9b1SDRuY9FkmUY4KzZqFYfV4mGkWo54MgSXCdiHMmVTWeLVouuD9RABZPEodLQ4axxsQxN6diZojDmo",
  "key24": "3NCLBsnjvxHFeEBToDvrUC2436rLajxEhYKSTrX3RvCEvc59G4ngSJ1dGKsCZHiohQrQ4tXExU4m84ANLZs2PyEM",
  "key25": "4qKv5m3KUqwSohE2U2g9HDMhjrY2Deug3UBAoeMUkkpaLzQqVbgKvCf4ec5wCyp37yxp8AxZ6ZjXdbCZL3cYEqtZ",
  "key26": "sSTYGmZWAVvpwCkbDozJVXZtJQJEWZJ9JKSqSrA51yZRXUaUNgjRPG3HE2EuwuZNskRbEV79SZvDJQ95QzigWVC",
  "key27": "2SzjyhXuQjwmTz29VEVPLFeMbEBx9J5ZPFi8zpFpzLyjf83XGosQ11Bp9MELa6YWQ8SoH4FEhHrcwEC7syPoN6c8",
  "key28": "63aHqsUEyvKsiRDAiV5KTfreW4cDXxZ25MgVM3Q3YXe4DyYjxHw28w1BQ4PvUY81cLn8iPm919GwbdHagrqTsat4",
  "key29": "4jNa95K6Cnbzd8gdAejvncWpeKRs9grdm4nAWuWZHc3btZJ3KArvV1xiu1McfNewnnxkftGpmAVYxF7na794STmC",
  "key30": "41fEGN2jyqkaefD6L7SFjTTV1jsEZRfWXMSwZkeMGHbLKWnhrsDrFQor9JxMTSSC7SH9NyyoBZzcWuw75E88MXq1"
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
