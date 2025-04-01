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
    "2nvv8A3ocj4AJo9sXsPFva8VWLRhxiGszrFWu5f33cBZBfUysfmLPAND51taoxSj6pBSxvPujdTYDFTwjHwRG1MH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CYnWMTCwMbQxDFa98zUb4C221HGZ8q2fEhaBdUXtyte4yUWmmqXY4HB2av32ZvSGsFNYzY4zrfFiyEZs7N17xFY",
  "key1": "33hnEZ2854ehkJtZSCx2qWJgZCPPa8qbvbyzHVip5NzmP6oegAmTDio2fqUXTDzZ2ZpXKHV5JWjE43RwvcLYnste",
  "key2": "4FjZveWHW5mbQcRaTxXyKWgRWkh8kyaPKYeKo6uqZiw2WcQVhE2SRqcRJqKeeHyMwSrTRo9TDcYLyCyazkpK4G4D",
  "key3": "34JLzcdxMA8sXJ94AyuBZWK2LP5gjqSzajJ8VMdvZaHwNoeyoR8nQB9poXAvXpTUjLDjsvTc5oeD1FZcShi3Z296",
  "key4": "2EL1ctb8MDUZqqDifcbz8QWedUH1sZMqncwk1zhQm2tSHaRiuUSQKE5NbUCBkYT8E1xnMuTznc6dXzmhAoknD8bs",
  "key5": "1QnjzrtugpWxuzyPP9CZGEub2RDYgVW1F6tUCuouUmVbLJrjx8ex1QWE4eShQtFhiQAGmwBM6CTv8oJRsL3932y",
  "key6": "56mEtkvxY3DdT9rcJtyQBCG13FFa3LCDXBPvkaGGiNmXi1sKFuUtWB4DrHbx6gMeXZkGc8TJFbt8NcNz3Kvafpkh",
  "key7": "446YkCvTrwsBNKgNYYtbT9NMNHjo4NgpW7K3u4K5Bvg8zFY5JEoR5GiFhx5ccewTVBFSQjCh667nyfPFPBRgxDt6",
  "key8": "4SZVgHss8Kaghjbi3iihZuKwktvPiAWs4AcqiDMbRjcMz44Wpg5pzvPVctN4fSMFyDLT4zk8HHzmtzqqVFUxz8gQ",
  "key9": "65n2jW568anGjM2J6gn13nS8i7cm99dDqz2HwHxh1zYCLYR3hL34benmjci2SBU314Kb3rnBEyrfr4wMDWFTsfQr",
  "key10": "5WjH3q28qJtfobZnDBjzBwBeMHFoGZWVhXnZpRp5vCNBN9Mm98dThY5E7K1pb7NHuhcdTWAqrba7taUdnTQgYHrF",
  "key11": "3DNUduEUDz47U5Sn55ozWd871zYacYLYJqCUNvPDyiF8oG9nHZpfaMR9vq5wm1fM6pYDgk3aQkqVWMZnJ5cngU6",
  "key12": "266saYg7hPdn8GrH1ynoqbSjtbfcBNSDRgr9DRQqEUZBxuPqasoHpM1h2ptSvTF5CkPCgvhN3S3LoYtQ5rdUVZLm",
  "key13": "45DgVjTytQkbW4ExrCpWehHowWsPp4TxkyXs9s54CgTVi7wEeTd8Z2n1bFM8DYGuq83kLFxBiWP8VPJ9BeCWmxq3",
  "key14": "5tPFmGs5gS8mXoM3fURE4XqdcMgEAXe8cSSNTb97pLvSqWkQ8SXe6Cb3BWJWKG19svAo4GRj4SpaBrKTgDzfdhqL",
  "key15": "4VGCmGpHom7RAYY92GBfeRH1LY1Ahp937fVzL66myKH7SeSCmmKN1CUTyD6YWw68hknCwmCqtuS4AhVxgTaM475U",
  "key16": "3nNJWwAgd3UmXzfUAsvqvTgvuogPiJsvuofVuLwRbQSoKCNuyMvD8HHeNsHp7gw7gpqEwnxMUPB8V7dXS1kutPq1",
  "key17": "4eLagEGFv3Qo4LgR5xchPpEumwqGG4SMc1sVbom64uAgaUizztHmdtoxko9LjPeHEet8dgt15ZUcDMTENhfGc23J",
  "key18": "3Rm8dnuQoeetHJ7CQnschHGEQtgUWJMvAL81RfkCNbvqaxNQb9nChoWx9LvAEJgZXcDMqXEMuttWvQneKcJX7K7A",
  "key19": "5hwpmX7kVp6Cx6sQLVdyCbRqrtcGvfy5PwXvmvfMFhqeHxdu7AytnktfAV3eA7zQKFG1o5ADLvvMdimiXpUXdksi",
  "key20": "2jgtAhCQe9eYRo8NLvtfGHSZHojKA8EUw2osqd4mNG2bFfwQPNrRZiVeXfRTE3ym9qwFfMmLSA86VJQ1ekcgBXud",
  "key21": "TJmYXa5FvEqU7eFGanuyCXMZ469GBSo89zTiu8LaabeY9GaSWk4G8RyFnQhbofcooAqN9EB4c7sBFrV4oT5v2UA",
  "key22": "5459y6pMwWzDBBXEneUnfLPBkJ6QNr7MLVvhB2KJXSeAJCxHjU347n7ubE4mwoCWNVEENhRsjB3CWh57tzZEZVuk",
  "key23": "2UVTv83TZWwGwcYTn6diB5RkdQXL4pUg18Ez9yXt8T8mR6kpLkpLR6jEBSQxTiJy6Fc2H5kiWay3qqfN2ssMSnya",
  "key24": "5ieQyxTu2CwCLQJXorZ2wb9urhPh5U74AbyX3W7hps4p7TxhP8yUBUFUo1PdmcK7GFLpWjYJhR82wEmvZHm4P1ob",
  "key25": "4AeLEtXAWUvkJNHBPg2cUhUz3w3nHXdpDUVnuGDPkZY5Gd8DtVqYoj7i3f9iJ88U3VXFswtczrA78PkGGRTLam51",
  "key26": "2AymB16dbyS68DeWQJjs4dLPvCy21bV8Yhxf3m898eJSf9mjcJPdviawk5UEWyfoeXJxBkfeVXsrAXF9LCx2fj3r",
  "key27": "57gXWmGGvJQG5e9e8TuDzbCJkM2dNxVZL9RCTUpSPDZWzk9UNCmK7siuFCt1dfKtiGnfSvSWcmi8oYPTLu6wT5v8",
  "key28": "5jdygXgEVxbyTRyQR3UpxvhxyBDBVG7m1xF7E6ytFEBEoiKTVPw9d7yysJkx5HHADUnGSyieDS8xNXcdAPP1yjiH",
  "key29": "54EtFLFrR6CpzM2cLwdUwqeDmg7onnPdwrLhafbttZih4KJDc6CeFqEaafe5xgB4pKyhxNq4M1rfRenoLhUS8BGS",
  "key30": "ZoMTKDzvCmCkYXkxxrFDSKpfrFYNo4URv8r5Ji3LRMzwpu7zdbKWHxd4JGFDPQWs5WMc32dkL1TgXsdTsGQGubn",
  "key31": "3hT6ri78bd3sS1FwpEN56WpGVJXS9pAHe5gbY4fE3XKzzvwAa51jMpkrH5pLEApSCXeVLQ6JvJz1f8uswxF2AJCb",
  "key32": "5b7nKcpJjswmbCqT1VqnrEJupkeKrocpBYNcr6JpYLdMHeUMJVU6HSHYMxmEdBKqtrsfFpzmd3hkFjQtBA4r5ayi",
  "key33": "MkJV937CspYDy1XrNC5GKpSyDKXELn7djLQEpioHEMqeppVy6skM6VR2H5ZTLjceTZbjCao64cxSHktqXu245hS",
  "key34": "i5fs7YeS47H1Sx44Twg2tpMci8TRahHSThV2LpNf9aX2tmVxaoP4dNJLZuHY8PXDdS59ZhyfsM5ULWnyjSkNLfu",
  "key35": "2MQiknerkA7a3DAVB1pFEBaXWwqZ8KmxXzqzCrRV8mC1mnqyaYZ9vdKsdRqcoJKgAqyd5HHxN3XBgHepa5SjH1Fw",
  "key36": "jeTTDRGxL1ssw8sNorWwgHqab1KKd6mFq27Faz58E5W73pW1BVv6BH2bWNCz1og1sUBVdXtHV2mwvr3QGoLPmN5",
  "key37": "5uE47r3RpM5DbDkQ1wiJPr1EPF4qkudk4iRuiWueQD2ruxXAr8Dh6GsdNFUhbLFSYLab6Q5yP36gKkhksUXcqNEJ"
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
