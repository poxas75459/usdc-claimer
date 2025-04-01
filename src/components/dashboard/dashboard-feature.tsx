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
    "3Z4WKi7jo35dNzTRZqFDToqvcKEHFhLiyBPQiiDnLwUyZBj9QFNoAsdgiHTDpLP7RFNAvfYxzpCgkgqMXdAWsd5x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CuCMTcrEQiHWQqmcWByUjboTtqfx7BF9Lj2YK62F8CoXkLK9kQDbPTguD4hD16P9FJLDqZYHTwGdfetYFD8jeRL",
  "key1": "23j4D3CndrTvywxJU5CEiXcWa9VcgBdjwgB5qG2zwhUgNnRGWs1sorxaesU91UqdmyBSkM4JWk7MQKGEQ2rGtKcJ",
  "key2": "26NMGmSTAvFWzij1HKu7WksMGfMu37DHcwsbHbPAaHg366q14pSfpJ9TPKi2TWtpW5DzxC3ZQ6KV2yfcozhsm4we",
  "key3": "2Qv2xm8y366k89cBBXvAu9BfyGi3gcoUzpiBwi68MfhEL2WxJcDmAVG7hNjNBwt4NhVirxHWjabJWSuW45JJ59MF",
  "key4": "2zqvi33RYJdELbGvS8sRtxeyGFtepSUMEvBDS3a5X2ysBFp3j1SvBCg2aHBbAzWRbmryvHz1XiFdhWySJ4ehSD41",
  "key5": "4tJoovNk6hDrWJ6ogB1pvdnQVzWqywTdVfYGK4wyMM77zSayN6sy1X5et3qQ4QKWeoBwJAjrmq7SMAEpCzD2v7im",
  "key6": "3RU3cvMs1Gs4N1zQKPQDHWNnnJfacuGFNa1JFB153zRi46FsdiL2eVtgcWhpS32D8QYgndzMvqaT2Lkty3CngJNX",
  "key7": "2WgoeRrLeWS7GHd4NdwnGEgyo9VVMrK7jrTBj4F2x8zGeneof12TkMZCdWyX94eiweVoPCbT5KZdWVo2TjqRKwgJ",
  "key8": "56wjSQtQxTrCuwYjHMwhEQuhfJ9sb3VwCnE7Kd5epXqVRAS9t2vrLFTrsMHc8WtbCStD5fCFwBz24czqap3WDxgf",
  "key9": "4dabqeZ8WuZePTkRz2zz4psqJ3EpZtUDxKPU3m6gsV4spbERsYw2gyRfeV5hqK2dP5bFfqU5hzX8pXBteCnRXWZG",
  "key10": "Mwr9ZhkhnmuhhVMEF88eBrGm2v5SHiAFrKsHUZGWyNig4GjYo7DvPCJH4QmVjERHATanA6ueQ9UQdLpgAihXvhp",
  "key11": "kAw4SJWWseYQJGYx1LFDs8Bt1yUF2VyptXAEmMTDzkAFmQiPcXEpVHor1q7ahWYvVBaoNtrFQmcPtpTD1qJFFcT",
  "key12": "5LUtFqWCq3yGfo2uKNtaYoyuaXJgGcKUGVqCExrDB8Mek5YBsoRTjTZiSbXyq7pga8MtHkV5ZU6q93peYRNFqkhW",
  "key13": "5xMCceeiYqNTTYErdEfaJaqbTpsjsdDQo25RSFW529ZV8enodnZJafLRHM1MuHASEiug9qpDkpx4sMkH1LriKtVD",
  "key14": "4Ncu5ig2R6eF5KkzsyaCyq2h9LfTpqg8ws7qeRLtAGPhesH3F9zCkhiAVBs1iQXQMtZiNWRf7sZCfbyyeCoDM8Kk",
  "key15": "CNfNa6R8gw244j8Nq5sEQjYKzeLBxucz15wLUfqgqqxcm9zrNR4uxUQUsLzyTddYB3PV8D4vKwCAqqFfXhyGHbY",
  "key16": "22GVxw5cjvTk8Hi4gfJRaRFuqqqBMWBUGj8YJfdiU5Z16JvJ7QbxJw8HhmUGvC4T6xheVXtVWejSUZJEKXxRpv7G",
  "key17": "3B85pZLdQVXTcSKoYEaojLgXcZe8wv6GmQEsqk9xceCZGVf4ocCKCTC1cf3jufaXVu18xhBZW8vMthroD422kt6u",
  "key18": "5kKAvyUf4huVeYuGTWamB7a2wDXC17aNfsfJfNnovzdosToJ8bRbUSRG9yHp3BVYLGnkDY76tXviUbLeLAVDDHBV",
  "key19": "41DHsuDNs8ktPQ1MiFwr1T4TPKkNHxjfoNEo3UdDo1UK3uTZ4oquPsx9DFE8YmM7gyXDUq7DmnvSgve9kgHezhuV",
  "key20": "Pw1w2qofpaFEF5SxTBfiRHCHRWsx4Wtb6MtmZfCqezMnAiL9xRSc5C56rQQbJUQnUBDnZbxDYBEzz5V3LrKWgs2",
  "key21": "2eAuG4RYHgEzJ2HtF8igboeTnoukHTcFgp9ARHrF4Bf19o1FLNWmqkTzV9WcK2rG7i4JpBET6UV9DsDUnF7Uaaou",
  "key22": "k5G5T9qx1yC68ihYacdtCaz5BC9L4BBWTtspezJjmzKL4jpg7GW1JYNjLqMHDdCy5ZgNMsh2PpPvei1vAmq8UZ8",
  "key23": "5FZCV3gzk3Kbp2bQD611wYUFMJKmj6kt9ZFhyTRUHYPkxLJVSoC3BuBqDbJkep7Sr5jExePVktzEW9JEqSQ8qqwV",
  "key24": "tLSgV1DrKFnW392s4ocABhABCAc7y16XMaAUaFwAafu2SNrJNv44e1fKUX5UyQa3ceQKqPgepus6xV5Ci9WEgyz",
  "key25": "5z3eHPwfipuhESeX8Yj5PxN9uUhHqbneoApfLwB7MwFVBRD8A1kn2rAAHbRie8Lp7MQc7yU1a2xDswUseghrSwZS",
  "key26": "4GpEEVy8hMkYa9zkCTVBeZNcRKkteXJ7dPJM1kpSvww6sahhrxALYmMh5C6N7s5mgu4xGUhEhS9ze2zkrq1UriZA",
  "key27": "4gum5pbjVBzYg2yskKBDbXTDMWTEHx3cdjJUS7pFiG8EnPZdjhZVaYCs2aKoeH2qi5FyVu4UAwmWSpYTxdRSi3vW",
  "key28": "4oBv9N9aV533fDmBFFQoAAcdgYMDQyPAUPwh3d7G86bVis1RN4oYHBRxGXBLz9ZAsiGB4m3j6QdExuDV1tvrAcrP",
  "key29": "qYnXu1PwgdgVTW4S4Gvofxns7u6xjVdGb4wRPvkRGUo6B2qPbNYFXj4x3KSQUuHyE1oJ1eLKk5ZUY8sBsC6HZqL"
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
