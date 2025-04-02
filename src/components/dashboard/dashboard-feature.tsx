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
    "4o47TauPhXqqMmSEGYbuUgX3V2eEpLYRaE7crbLMonS7ecez6u2QSJH1FPHPQkn1MNAyPouBnWiCFe6wTQojnYft"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nAHR3HSUzAX9irJyxfTJKMq7jyJwA9QM9bBA49XGM6BgstDyGHVy4cEPKH1Cu8F3B7twwHHVqZSaMWmG6LNDQgg",
  "key1": "4j2cXF1APt6USwRpFFefPiBhk41JxyJ9ND6adDSb7uz9SAKqBQUAraPcGzFEgCWLFsuC6E6PqzSsAkS2dKVWkkR9",
  "key2": "2ewJGMJs7v3uzn1bSYmghdTW39dtuJfVyNwF1bMJCSpCdT4MvweJ98HSjY8RDVKG6VgPvbzXxrG5UycgTKW7mSqe",
  "key3": "37VvwTpovfFjk3RkJSvCmdyh7y3tUc4FvrHEaUatR8SQJ1MW1K7ZfxiU3DtGPGQtM19vVyiwGMpr7AdWngezxTWV",
  "key4": "5pWXizx3xKC2qzB6LVEE1sbRBZer9ga3ENwMVvwmBgNqoMmNhDCtqGfq5YqKSL4QQTa2kJnTiN1PBVF2vff7x7gR",
  "key5": "5mC2cU5JcESyjJEYdt8tkXp4X8LSS9cS3ek9z7XaYBkAc1KN3VsyvpUX9FJJNRgWRxSfmiYgpGe22AkBrWgYHRJE",
  "key6": "5mrVXwxbaRtAW4DgyWwtRfC6btcByzJ1HSrPZT63nbS3GDGg5JUwkZD6ec4m9wZAGxptvv3mJArpsMZSunethCRB",
  "key7": "4ZsT6Da3f8soDSyFQa2QMSo46J84tKgxv9zLjWRK9PTLevjqygU3jUeskHxsrjx2VTPXvdLPyEnHunDSdNJPAY6f",
  "key8": "5tBpfBZypbHeV2ppo3TjE6LAzV5xiZ1mzAxy5MgG3qYEuATPhhLzTJg7G1BoeFrXUepunHj7zf6JBaFvF9WTXDyD",
  "key9": "4EMysqhhwznTgeVKRGS2htpJ3AUYpm3Tm99Fmhho3bhG8kjsmapFR9YAfReMMED6tK7KrhQmnmSTzq1WsnsJdQqX",
  "key10": "2m63FsRvz7Ji1LMyBTQ14VMBtYWTBed3iHfGcvVny8QQqmUTTmhvEo64FwkJdpbvE9cwjpfJWKy4KrePqdm91M82",
  "key11": "2pNuiTHPztt7iNfk3zNsuA8w1HCydTS5LPtF87KAHBy2iB75ASBARtRr6iN2MC8irqNNq8LaXVr3Fuo2a5dfatvd",
  "key12": "4KE1sAtMdr4yZwSEHv9EV5LMseKdBNHs8gd3LGY8d4WnHBXe384mSaUW87jKSD7wwimGiFif6b2D4Ec2w1VTmZud",
  "key13": "MsfZvd8WFeRLjQweqT1Kz3EpMKjurUqfwxDT61pZdq7AkSYkRvQjJgtjgHsZC7qEWhkTVZhqQxu8yFHVnC1qRvA",
  "key14": "5fE8zB7QbED9beCA6oN1qD5WMumkNbZqGFLAkzrHLaAb2oR2gHVVF7c4kDfN6jsyvHaHA3WMcRKWH1v62AGcMRGu",
  "key15": "4LDZDc6qvKM4tHXnwnx3LeQJvhJwNwT5YqdJVr9kn7nEi7hfANcRbs9TfB9dwgJ6XbL9dJtSkHsXYSkaJNYsAKpk",
  "key16": "2dR7NWyS3bRsw9hKnJZDTMf63b7US5BbXn3P2YcP9xjzoMN79P2FSisbWUxuNpKW1y6TbztNWf3NjT7M5bTpM57t",
  "key17": "2Tz8mPauwnGDXHsnXCBkeuYRWqDZY83mh27pbEcMp9sJsc82Xyzyfk6ykBiNAyoWXt5cisVmFEaGLvHcmWsMZvmA",
  "key18": "5gDHzQihpfh89Fe6n8YpBXTQi2prYubLDngtUNqqy4L238ScEXr4XLswYA9yZQem7kjSj5NTAEXnkb7Wq4kM3oeF",
  "key19": "4zGWCC7Q8YZnWPRRU6P96LYjzH4wJP5JiHKa6ExuX7AJdTDK3Kdwm3op8LfnrqYiwZL3NEQ189YoTxrfZDjybGfp",
  "key20": "3XXKfEVADtkd4itZdE2cCm3ZZQmDhzuL77agVYiS8varvmyxEA8fxwChZuKUJLRK76BiFoXwkyxySGWX5NiAjkY6",
  "key21": "2jE6CdNqmvZgxr3uUCiUXmXurSHr93PPiRXfjGLHVKshug92NvUpG2tvV2cbeFQwJ88xtYocoxNfuoJfw4bk35zY",
  "key22": "54sP5LUg1JBbtqEHKdNAdh5qWoGqV1Gr2SUUVgyEt4hb4iDst3743Az2NLkk8bmvhGdeqjHHYGESqHsvTBvLdCgF",
  "key23": "5BW4LCeRN9W6yYqm9GfcaGUTGjkws9taCSyXfuDCG7vqYTb4zN4Mgu9NnFQWLwysaRdm6WU24grxwPdzUG17Xbj4",
  "key24": "3DxeULc1jrnWqMo4f9j4XMYftXDqLhwwD1i2mB7U5S3exnVvrtcoeL9wofUx2ZrCCDGjHdhUQvB2o5nr3hbUQrzx",
  "key25": "HMQZZ65m1JmbJBdb3fsEfQrZyTZd4U214SywTzp9vymuxhK5ZPtaPvvjTQsYQqrxw3kA4JcdGX53HSCSYxYMezZ",
  "key26": "59d4wX79ZVnSSxw5J2ALaEEXgL4UoQBZvbt8SrR2bamfA5NuQRgMGtsEzb1cX8qU5ER54yGvhomfs9GowQya1VLX",
  "key27": "5keFEQKbWnKFiu6QQTdSzhTvv4jYpSNjCeUCVLRwg3GY4AAELfyqxKJ1asSkXsmUXsXEkeUuAx7C1U6wxHshjUw1",
  "key28": "2SCrMQiRWp5yKU5Rrief94FwjhfYtzPD2fmt5QQgzkwoVPGpKnEThdzzRzJK2z1d4SogwFL6LbZHuekhcn7whxvh",
  "key29": "3MZamShnZ6mom4XioLb4f54JNfz9YNGLmcHxq52FKxhWXf2E9WAhK9tM72ofZSEHgdzPdGp3o4aRc78deRaKL73M",
  "key30": "4BzTCogDgDKEzssG3aafXc6oE3ropAByphfWXXrTYBcMwH5Mofithzu3hxwi3brU1mvm1aHUCsCy4T12qifT7Gev",
  "key31": "2YHFmhxTPTGmAN3vuRF7vmhcsT88PkHa5KB1zzNWpFvgzE4jm89J1XmKeYDmYK4rmF5rWy74KpJ7PQEMUt1WVCqs",
  "key32": "2EkyeAYVonbftUJrMGB1gCbGmFhbpd9HqZA6i2jWqwZz6RK8A6gxpuXbr77kAsiPTfY1ewp8AVaeaTunZeTBzUwR",
  "key33": "GkU3VYAjP3YaVHQVSRurcLffZ8vQ1NMG7syCcmZ6tz7Uq4PYBBoBGDonLg3hptaSFxVcwM3JKKTusmZeaYuhp3p",
  "key34": "2J3M9ZmNtmMDmLh1ecB8Y1BXDXBtTcoHPZXWe7oNFSJTBXnVEDNHcUuBz71bgMhbY9bR8FhLS56LgfeVUbhCYLQt"
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
