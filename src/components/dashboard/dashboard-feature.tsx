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
    "4hpDiiYj6ZUH5pyESNFpeE3noocZiDYFbCAKuESbVzzQqZbyghgjYfMesDYoSa57RmVZhdAMTFEnJAQuYuqkGU9s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4erEsM7rVpaoTjWdjnrwkufNVXJ7FRSHxv8Yh8Tm3eP1qs6op64LxTWLELRP4fZNDQUz3rmKwd2rRk9PbbVsSzWL",
  "key1": "5eJ1LE8GEBZnAzSSQJK2LfGgg7VFsvK6N3zjvYNtjnpSNG7VRdf5YrnQhGdquTXbmNqDcbiqahVoF3qQGyxeemNc",
  "key2": "22tmvA9YDUW5ShRxRLKB4a9Z4JAJtA6qKQS4xsFsMM4Mk8gqsmf1dPBoLeAQEjB7HBjogmD3FXhxWFkLEaYxVw52",
  "key3": "4tapMa2rep6Kysng4MoevrXzs7L5qNFAyTMvakbpZ7kRoKwig2LZ9SSr4Z1mNzWceinS75WyxUCnMPmjFjTbpkqP",
  "key4": "2bVsBP3eaFTahPPWFWNXXJ6JX3JSEptvHj9WR5FHkCE1UcBW7VMfqTundsdpwkd46Ez6xbeorn6p7KPJiQDa8bbV",
  "key5": "4SC9jGg7x7w5eqg2zYhtMjp2zQyE5YzrjeiKregiEPCpcGrWGCHoZAFtPAQ8miYUfCxhvYJbpty1Zzvo7W9YqmpU",
  "key6": "48mGkvWkYF8mam68R9fJ9D3S1oJc2ti2JTZfxg65ciW2vGMDSkGrqqd8VpCY4tjhZRRYjibetrF9S9csQesTkTTN",
  "key7": "2H37575iRcjQqY1KBTuzW6Pjmnm5nAG28s5YZNKMXoWdQxf8AdhuounaJzxhZ4Q7WenfHgBogQW7KgVn99NnMvbh",
  "key8": "62CAGxNnNukpKPrhD3Kue6m9wQkJRuk9WePdiFXEQRrh2AMGXHvqhn9EcM82n4YEWEsiPjFooqzCsx42anoCtbKt",
  "key9": "2nSw4SdASCg27zjoetfVBLQzErWJGBTgyW9XDXESbUHRKGucKvxmZghuY5GBrTQ3LfD9SAEbKFwwGdhVXA8apFJk",
  "key10": "61haGA59BuUt8RzgvVjwT4Q9LSsAdkvtSyGjx6VLxkhwMDmk64zsNBrGaZLo1WJhxiBhtS33SwKcoYHjdTnSQgyu",
  "key11": "4NgKfA7S1gPHQN2fqVJWh5KEAnfms5r7iaxYs2AgPBnLHEs6yC2QiRtnNncPz7g18n3kiBVyU5Pci7bYFFeUxiZc",
  "key12": "WtcrjPp9MynpKtmjXknvSW2rQw3n35mE5uQS9sVF1HspRdq5TmvGs55yuiUDknXxexeNZDGxnKTcnqkRZjo2Qjm",
  "key13": "iJikwkznbiCEh61cMSHwbRN6k4nPodLCYfWsLraryUcT5y7ZrtcLvCB3sezCtVwhmdp2aSJch12Z5EWUFT4XRkK",
  "key14": "3jwUSyMmrf9m5JMvpThumzvSi5yTTLyJ4FYM3dhssTVTRx5tSwB4torWXnzkAXY4xXifHiuMBi5C7zqdY3BvH6oo",
  "key15": "3X2k1xKR9TSHYMY9xc2yjtzoYTf1rWyzfoAiFqEAPYTeuKpPU6tZKvf9HG1xSPLaBfXNgeYp22iLnAaykSPFqBk9",
  "key16": "4AWJTDpH3BjqqzG7jXaQejUA9oT1hEDkvpbusaKoG3WJUFNLtLYUzuKxd64xSvNdtTxWL67EUYjDL14qnudpLADq",
  "key17": "4GrTedCU2Fu1GD3Y3oh4BFfytpoi7f1cvVSojp4mLyUStuocstPz4ZncudujNVKnW9V3xEC3GzFVqBPEDzPaXRVm",
  "key18": "45oQaL7pYNvhmXyiZTLGzLNkfwY4rAN1WwF8dM7jfwvvwdF2gjW9zKBhdb6WWnSXuTtxAL5yZeBMeu46UcuFrKer",
  "key19": "2y8MtU4jn9fyUjN3znv13hLa2J5E1aLNUoDQGeZdLUt952vPEFhquZc8DXZEY55XVhrepHYWo2uTYTWtuYgPu1xu",
  "key20": "3wvZSNkWoJVxJNLRhcxkYkrLYF3bEAyUKgeSaYHrNL1YXUpM8HDLxdK7Kmszr7BAWTejNy1tFsm8DgBQV8Qve19X",
  "key21": "3DKd3FEa5c7AutfcoadwdVbRbXpusVnVQ4Z8ypBvsszsZbxgL9rrnEPdTg7oVzt1CgYWgmG63QfzhzSPFpK4BHRu",
  "key22": "4ANj5eEsR7t4FAgoRFRtUvdRqWtEop4R1oKcfDUrUbmQYjpHTJsh4nDpgKR2z2UZZx6z2PvPxtWppKEcTPgNfYEN",
  "key23": "4WsANdLLobsx215Nb76miHN6Z9RV8uvXxtYtXy5M5ZAHseH9xSaQAPtyhmybskmWWzhVPuxmJUCpMtpMGFvwt3L7",
  "key24": "2sM6MoGz5AvgHRSZ544gNT47avn4AVG1RTKSWyyDyB1uUaU3V9yHBuUo3vMnUnojt5HYZ8hXJNEQjHfEVSVLi6Gy",
  "key25": "3BcfSNQaC3w9Q5vdvmq9cQQ1cMiU9MmEYkDcUrbjZy6w1Qu1hvZCZS9msNzyg1qcRudeVFBD5ARYz3528wFBhXjL",
  "key26": "5KMH59np9QspnWb3TV96qYRCDq5ELGPxgcKENfBSBsM53sHvfRT6ffXJTaG7d17kQxghQseCb4qEm3p4UcEaS5YQ",
  "key27": "4AyECNtrWtVNTUwqehG3LMqFU4dKrcfkhvXsmRajbhNecTWDpdj2Kao4FhS5LjmtJyCBnLVBje3PqPPaFi4FrQ37",
  "key28": "4DgsqV2k3roJNenGZNacShA5kfPjkjUqVGjmvaoFTpDSW1J1ALSxix4uiLksBPng3s8FV4MGTeLVvbMqcsQf5sCP",
  "key29": "5xAs8w9B9Wf6HbxUj4iwkg4QBnP3QPxwCxiyed1xxzsdMy8YdmCggkwn3J1uS5BpTVpP5UJt982MpmjjCW1kxW3L",
  "key30": "4TKEXYUJCcVxHZdUEbEV6Yb9B9yqvkmViAScG9Jmn9uimrLYUNdWiki2h9WXMdHzKFxj3XpNMxPvsNUTQPXDfjfe",
  "key31": "28W96qidEMW8nBc29oQwdKbHNb1nHNAqLERkZq68CRTSrNrUuMS573RyW8eUzT9R48LGoVcEs5dCfyzuRW5jdH8v",
  "key32": "1wiyqm79BrDBDgSXfpGqkwtvTfEVkUZuWAiJg7FND7RC5mCJU4k5Pgk819qtqABhiT6GzmdzER4kz7dxMzeKBvq",
  "key33": "43wv5cP6thW4YKrSxPwewET6BtUynF8WVZUFVE8H6ty7wbr7p7LBnbiYv9mxfzh1ZDeqKrG8GdLYUtYqgCx4ViqD",
  "key34": "3SxSeBgV9au3EQppQD5PyWDTFrLAKCrhEHUJf2LT6otBq972zkAdJZxHRuRYqYUaz5rLFdqXqUVRhPhfMRpHXDQt",
  "key35": "4HgRQSsbApPuJdnBMmd5sdjRG8eQDC94WsctuSFcVR9hJKuR4ACBo5aMpErTQ96ycUzutaMdt5YFpDf4mgViN5An",
  "key36": "4hcRdnmk2YH9c7aw4aZr36fGDTuCP4Z3Cvycs9hp2RHpLgGRyTUABdjDAcZSHKZ6k3hProXJiFBNHae712HJmTEM",
  "key37": "2LmN6mGnqUb8QL312jwwDFkEVwh5KL6PMQp8z6P4PN4m58VRYpZPju8Hfa1SrAkiKguee8gXtF2XfV9hPd9WFM19",
  "key38": "5E3G1MJHz6yPLRjH6VzyyY1WMox11SjC2HKxmzP37SV9hx5TJ68JecdyEr7pHMbFKpJZoQ9nNmKDQZkTN9wTd5He"
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
