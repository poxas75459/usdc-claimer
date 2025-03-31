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
    "3ge188qMNYKeQjrwCShTBQJ7aWvvNHg5q2LNGXiQL2M6oFjYdXhnSXbDQXNNAAWRmupLZTJcLr5jeEwbdB6y16EM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xVUt6KJ5PqBqGm2ZRZ9SUVw7ikeP5Kft9L354ZGGo3gGf9cqSXUc1wjF8yHYLEmzZiyaZv8djF5cV56twtBGEJS",
  "key1": "3pynmre3rg7Us8PcyiBiewvSzz1auDCLnDCrouUA2FgUFw5Sp79Ru2qmb3SJiSRZzwJQcVhRCpB7bWEwaLGrQYLL",
  "key2": "wMEYDh1ZAStuqj9AxCDZvNmH59z6rBwzgo5s9SbeTaN6Yo5F8vYjruxxwT1aGhPh8gw81SvPCVKJmhLjv5bjxtQ",
  "key3": "3TFGrv8drzqsBAQgdskEwkvtZbiKZAncM8Kb5cjMJhiALP3WXn9MqRDsAgatRVdH66VTEsLrp1w5mKj5Kc9H7Edj",
  "key4": "4xuRm1eCPpDGg1EnBEiiVwMqgofsP1TEJ1tUc84nSHSk7srhDK7JFT3ELHK9c3GPDx3rnuJzGb89syDbeYY9CRh2",
  "key5": "2JUHKmYYoHDNJms6DjjAwEuqUSoonjWEyw5GtSZbxjujA1AJ7wRScVkZLefUJWkrjrCV2ULTgFnEJRyhnrKrG14y",
  "key6": "31LwoBnGYUsxyAUFHmpkEXQGF5SSGSeNeYXAfiGr3BHxgRkBJMCx3CX2n2FL711uAQmSiunarTCWK9YPEvAt3S7u",
  "key7": "4bkwrX5pJVky26DNVZyNzFTC5BPLUgBrEGyxoBmp9fGUFtneVJHfYM5ou23MzwrBMmVe6Wv2dVB89ZeS5apcQKUv",
  "key8": "25yi8mJwooiSpQFwYABJjMLaw1bjUKkDtTZnKBAguH7zdNcmj18Vuct99E7d9EjyTuTpkkrum3W6zJzNeUKP8R5a",
  "key9": "4oG4dD1x8P9KqoU3xENEeuMCptvT93qa61AaWPqAgzfDCprfiuFdACcFcZG53yGkao5mEjF2TXwoaCQP2seTAj6b",
  "key10": "4gkexonbuUJxeF4JnP3Q8zBkcEV99yfePWJnpt3b5AHA8jL1xTsWNAbyuNeeWYbKQTzUk5b8h7MuGaLwiztNnDQD",
  "key11": "4riE6EGBjtp415pk9jM3cAq6emAtVarixPUgLadTNPEAzoiubGZDCcGy3erv2WhnNhYEQcx8aA4JhQXNQqcUwF9F",
  "key12": "itT1dqoZv4XUKQt1ursuFacfMpeuhbomT6ZMBdoacZcpYT3kScMpsTQ58wo2u6TXi4XyXdsrTA2HH2K7ZhhuxXg",
  "key13": "4eT84Sdy1JYSYpNMewJ1Pr9yAfBodskEoMaWmjwFHgFVpWKFqWfnVHQsvbKy8GoFoUkAJoWn7MmZhvcNFeJ6U3EZ",
  "key14": "5duNHbr259qWwsjPdA5JwBC4N27zfZpZxgjSFr77RseSfpcqqpyrhEnz2aCB6rxjDs7NgC2BU6i25XDKLBbUzBCQ",
  "key15": "hzBWa6y6mW6XGcF5BSJBoCMmHS86xi475Qm6TYUaqBr6ebf8XTLFDmuB8BHYeZJwm9C3oDiVtqDekB5gBRSsBoR",
  "key16": "27EeXVNUdD7eGM83E6ndxuYicFHBpRjNeqC5CQtQrYAqmT7exoSKeUdRifhmmiKMsqQea8RxYS6BuyzRZC7vLxhY",
  "key17": "5mF1DGGFiJdSyi1c38UMXxfmXyqEXDY3j4jrQJ2wssPubYmup4ykwRTudqNU33E9qxhHSiGrNWRQCixzisy45YWi",
  "key18": "2bWH7ruGFFuqc3uzJWSiAQtBMP9G3fpsq7YBGpF6tw1jLsQ3C4dkmYEXh2uMyHTSvdGy6b1qTtTJfd42Bo7HDusk",
  "key19": "2HDkLqSV3sJi6ka1cJ5BN1WGAeyppxm4bCKgWWPFxKBHDRuHBdM4yuZ7oPejitCxBpMR4EDccjVSDDrYJNLuNJ8e",
  "key20": "2XojQRi9PvhBHa4G53XP7tdeR8XYeUkYHoftuRVavAN6KSx4t97LxkL3CySVS8YQhQh2NZ8f6wJK4TWcbZ9CqqAt",
  "key21": "31b38o8taCmTGUZtCvTDQzQLhAVV7TaAvv8dcso6RCotZYEcjW1eULRhJyZFCS9wrubwMPs354vqwFQTPpN5hkZK",
  "key22": "WryRzcK76rUnkbENeithqcuiyxUnnFfnwUg7S3KA7v7rfSS8vVZdRJ2QcRheyPR9yRdnPKei3H3DEYJT1kDTXeg",
  "key23": "TpuMXBXsnPgDNrS8cM55M7spN1G4W9Dz1PzSgFxy92aPV9RtFEKY5LQbaiVn3BPcuqrWBRjtz7E4Eeas6XRF7dc",
  "key24": "2hGw1tQFKmSi6a3ozhueixxgqxm6jYbvvy18uVAcLQJcSYHkkkKzVQCQtJ7MRtdreqtmM7YN4UxBQfQsK6daXesT",
  "key25": "2XYuKn5ZForBSUaJYxn4iGhz1bjU3Z3dnNG4tPaHnvVhZfdTUu3aZyeoXf5q2qK4wgEaD18ags8si2sdak1zv8YL",
  "key26": "2Ri4rP6YNUthQu9EsLKrMo9DKmykW9ZdinwAZJTAeN5PdxjJhyJU418xGwLWitcNk1cdkBqCHeaFUxbtF6ijK783",
  "key27": "3MT3pFNissoU7JvUNmdQBkubHxkAiTf5rqgGZ489wTemqSyBeum5RgGgHegMj83Hz4UQwMoLVvcGrZVuvpXUvAtD",
  "key28": "2f4ijR7mpyjGj3AH8YwjSKUnS2yUT8gGGpRbf7u3cW42pFD7aCLV4SkbXCZpitd8HXcrkvWUmVipEcznng96rbpv",
  "key29": "5HEjFpxCWRrZQxAs7RQ17e2S5iTRLowDtj7dNVTaU7cnhwcEKVmimVyNWDAwzvPqocrwg9PoUkg3WREgyWCnhZ1B"
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
