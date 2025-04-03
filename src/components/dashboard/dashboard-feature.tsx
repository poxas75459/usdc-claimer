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
    "4HYaTfKiE1g9rYkyQB8pDF1Chtf8VfXBju6cMUMLdXQ4bRys6EFxaRbV8JHZGcjJasQHu8uWYzAgkL9qvsssZPuW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4osYUVBP4FUPMeziU7g7mT67tVsen1oTuJc6JJ4DUx9kHAvWN29dTBQmQpENBrxmob2NoCmvvtL6FQPp9s4iQTss",
  "key1": "2QbthcfgNNDsPGggP2Fyf9eRmDPNF1AZKDbV1i4u33PycBQDAW8Ub6pim7nhi3eU5yREwKTkpfLCR5mJSiuseWEf",
  "key2": "9ydqKLrpdGeaoaWruCkjNEwPkFuLke2kbPuNc9kRtSDS2jQTUggVtRpJLBQEea7KvKchymjL4WVUZiCYNkHNCRf",
  "key3": "345zuBjs6sScZYxoaTjzRE7tUX1Ga1qvCDyoM8ju4hmbvirtm9vxBdW3JenoLdnVhQFpQJfHhqdbQFEA4ipYs7fh",
  "key4": "2La667C3aMNSG63vqSP9L5f6QjsBEuuWx7JDMVxnGrAbi2Sr3E5CoBf3LS6UMJH9LvjMmANbWtVeW2yJYpFhabNT",
  "key5": "58ueiAammVWdtasXSJ81gEZDmCn4g6CiBkmuijPB6aiaW4jvLw2uryxmd7RG5EyWm2tZV5rb6qDhPVWzPGPLyu4d",
  "key6": "4fs5bdpm4MMuafi1zYMUQETVPcubRUGhpeef8pNWoowLbpNq6JknKLA6vDEqySf8Sfy6J7AEpf7RRZepHqudiqsa",
  "key7": "2R4zfdqrLoZ5QG8BEnMfXfb8tYwBFRKXSXF3iQrorZFjzeXPt1CWpYnoRQuZ8YPrGrAWKAQgLGnhESU98Kzn2N7W",
  "key8": "UsfmxeKKmWzu1aQRNMLgZypUdHNeVByXze64nWyG3UHFREHDkgvA5x6iEt46rX34gPuuqFbvZWvMAZqAcSL13VJ",
  "key9": "D9fj2fgzfYbYu3S8q9pmsbHfpJ4hdBSoo5ncTiGQRmcXr9FnVS4NhRw9n8kto4dEuPgGXeMvxg9VXhK2x7cDpPY",
  "key10": "2aL4buJ6fmS3EEMTSzjQTCzMS71A8XF8FtYTnymqb66Yn38fruZV3S3xX6BwX83ZW7SjChmEvaHCWqke2yNKpqHS",
  "key11": "5bitzpxF7MzYJkVxkWCJLipdp3t1cyuuLqHQSxR4eC6byvvmhK7KKTp1xphaRtc7kuXYfJgBRa8AMxasiUh1BJQF",
  "key12": "3roUSN4UfgiCFyECB4XEgTcZTiRUNjLrDbSPbkJ9qEoJ3VFw4M4ecep6tBTrqsuCNVjnsUcrcL5NoHJyaGhVEumG",
  "key13": "4TkoLaciRTEfegP4m8Tt6ATZVTVg17UKtoqt8XXi1qcbZsADwYYBDCZFMZGsfkY8Qw73mueZCRDLNC7LiNaKY7NB",
  "key14": "28QfoFpTChoa9QmKMaDeR6pRMq88FWdxzwjWjNiRXqo7GbRdV8fJRhAFuen6YVPCrUrfafUybnzhpGHCzcuUBUkX",
  "key15": "67kcWgQ3zsYCFWRqda1A1EEembhTYkpPN87tysFMLbABDpMMDWJiC6QudFxmKLhYPNqzCzvWutPJY8FdzYyhAbhn",
  "key16": "56HnTjZttqJq9THiVD4u8ea8jY5wbYw9Ga2XXc8EXcQmVubdNgQxzNLDfE8Ndmmujue5fYWS3rMsYbgVQQ1gFdXv",
  "key17": "2n4RmTPpcjwaCxsN72RypdTDzJLc9MFFYqVAvnDUBaXMnZCwJecNKrQjM7LBUZSrVUGwMrm2LNeMMaj4fCuqG1gu",
  "key18": "2tRZJ1ghW5JoKZvF3TSFhXybvPuVhZ7Nmi2VisUJAdrQcBv5WU6HLfrmk5ophbsCGwh9oKHiaKEnXALtovar4uCU",
  "key19": "3rhVyimjTs145WHw36T9wQx1B8eXd7CNRjvUkRzJsWLFFjYVGvKP951DTR8NrszD3QDSNHBBc1RHcKWMczB2EhZq",
  "key20": "56pBVXq23j5k9E8zXkj8AQXEn1FANuvgyoQf7GT7g5FGtWRWuNbeKofaaajkexezbUSKENUtevhh7GHckekJL2JV",
  "key21": "2jGxTcsjHD12aFcthTgUhxM8M8KVxsUA8dtkhUE4yQjVbn5zzwka6sdtuimEy5CgUeTxbdq1s2vxD9MR2fepdZK7",
  "key22": "44QqzzoQ3YYGZ63mqgaQqXm83rDDN8ivu6X3yujiBNUf4uCcU5eoHeMK98VFHvYtpT2EQ918VtMvePFpEiC1pPbK",
  "key23": "4RMo4rrLE3yg9hcQrjqhfJy5wGeyULvGwhQjCsjR6yS4vNw189QcVBzND4nPphb2YBP86sj9QNRmQV9o9W8vdDue",
  "key24": "2qw9hTARoU7jUPNkvNPTscSgVnxaWQRWNFHNBLFWfuPjfZug3UUh2DjxZ96odXgPzvqnGeD8MSS72qAJprN2v6gG",
  "key25": "2qAGLyLvuzaLCaUt4JNZUPDcNDHQnQxf3LbQ4uH1aTUktgNTWR99t3JzKjTYkY7MqLatTN1jrcwVGyEctwXHnQLu",
  "key26": "2EmefajJRmrUaJbqZuoJMyUfjGhHsAwKBSF7koGveC1dKrbJd6mCQJvofYxG7vuPVB3X2NagKtcuVHV2DLhfpb2g",
  "key27": "h1nLwNxQm6tch1P8aoE3iiAa7dYTvM9DpsqCfqjZnw5yroPEejfcm1qY4CSVm5D1gTphV5DvuZNKNEzuNXt5P7e",
  "key28": "5BxYjTmdDp3atjoYonuPx6bvwv5FWbTzK2QppCFXUZTXz7w939BYnthKLMjtsJYCHmZ7fNaXsf57oyTy4oGAeUwz",
  "key29": "5Gb8SBpoZowm5HcfjP5qCqsbFLMEhj8f2SLbkBiEdrgVvwTFkNru9W2Rqjgx33sdaX86HZcGtSnLRgpjjbU4ggPt",
  "key30": "3jsZczwgrn4HjzmgLLuKRJw1VU18VHxujoHmj3PsgXW4iHULA2pMCN39LA6fznsCT9oeyxgXbhTenri33t8h2a3T",
  "key31": "6qBeG7sdUPzkMvpDzRFf9pwzmMu5XwFwn12xBfFLc7Uccq5G6ykxitrrZyFviV3AuEQf5gnuPMcrgUBdKhYivMy",
  "key32": "VjaphnEE4jQ9m7jCTBZKf4x7e5HyHDLng8wMwVuGyFPmVj4rams7szFeyn3cPi6Mc6Tycp7ajHsoaZ8LZiU5ZMS"
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
