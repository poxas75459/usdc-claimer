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
    "2QFe3xiGcK1gs5rCTm3SQjXyZgj2zXotQ8kBk8qWu8gMZRaf8Dm7hNbSpQWv9zkqEWHSKRv9xWZviGkx4iLYUrTx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Uwh81DYkNrqdRDePNBKi3SvdmodHNb3CApGpwgF4gvvvAjCD92X2riyaaeBRKqNY7eKoi6ucB17GYauCv8YBEJu",
  "key1": "aog4PcnZBfLgm9gaAtB3aHaL2xd7ViG3Q8vnmcDCesfUL5Kvf5qSEoDoM7hxxqaQqRWcn4jgQ6QmVpY7SFU8xaK",
  "key2": "4ZD8YM8pZ8FmZQ6VrWWjfuUtWspGN6JDkgSCGHfv5w6yDqaGaLxvcTNRTkyr2aL2AAnLPSz1LYkJ3NNVZoFroGbw",
  "key3": "2ZorPo8y3FxkzgM8LHHZJuHGFuZ4bDMNZFAMqa4yWanVrb849aEnWV1o3aTdom1nxMN2QQqLrXSatZVdfJ1ZXJAS",
  "key4": "3pWTuVkse9fKmR2QHo7Z7Wka32FdRWaFVV5asCyt1igEEbRhHj33vCJQgH2cZiE1KQBQsw8bDL97WYHu6ji8hQL2",
  "key5": "2xtYv8y7ZNxxVoXsR748oBM69C17PBfNdPiuAQA5KSdvaw4EueqtpgBvH5eHodz47EsxkKCxxwAQELhp5L4LLK4C",
  "key6": "FbGGSDuxutkk8DtA2Rn7QuEUNSZK49AKKmohyx6rqhPbdH7ECnNSToKXF8fGCm8br5hKBrvz4eDho18UyPpwveY",
  "key7": "3LeNwpapZ3wNEG6PL9TU8Yk6j46ssHUzKmdT43YZ3nLCyHyGReM6utgMuJuYATB3R4XXn9E38yfCXeSVzjqkQuTV",
  "key8": "fYfD1fS9oSTQmQ3nzJFJt9Q92NDjxLGqwJ51wzeGoXT5CxqPqAE2GrNu1W9WwTmeN1pWqoTWDpt4X5SXtYfjTKu",
  "key9": "4VjLwEeL1f3NA1eZUf1x3QJuvZZtAV1HqqNt1MTjzL2FZXLYQPufXrm8HJmi2Aud1aevkdm6hmnsXwKCc9oBkqYM",
  "key10": "5BoZzBWbZDoVAW5pPndjSTCHEPFQK77FutAc1mz5Pfgmuztrdfu3Fm6FqbjHxipvWUwQCPo4sYnigxmp2bigcmn3",
  "key11": "4GrxuCdwNSoXBAAqxNy5JgSFScwQpRQNwhLocUD6ab9cRVGUVZ5GA7BjaFFGKhAceCm73mkU91WsimifUtKSXJLH",
  "key12": "2qsYN3yAPugrhEXrLymvuDUbimctMZd8GL874rQZCni1x6ZWofydMoQ7szyui2FeMJWaJhZauF9FeGyh5vgx6tC",
  "key13": "2EjVbT1qTx9jCKyNLRY2h3KnC5rLsw4GqjnumiENN9TUeFkK7v4fX6r8AGurFk6CU7jarkAqo6aKFVWeUWd7Vjqw",
  "key14": "4WSyhRBHoEAq3fV3E7m2tT5K2DdwdPndoptxW2CuCsEfEhPTKczJGV1n76Q4FHofLofYNz9CmKAVAy171E2xjUZh",
  "key15": "3UXSrXkVBn4awBepzBf11mr4WtUH8Mb5DU9giszTQuYVte6arvvBQH6R6x2JLAwEEHr2hWR8tbJtXhBBEU314vWR",
  "key16": "5MjzqPG42Yt6raqTDmMW9VJQn7QtsbzhKGiahHxvAfQ1MVgujGd2NUnYK7Z73sruSHJt4cJKMdvQtxw6cUwQ1ssx",
  "key17": "4APhnU8B5eZf3hRgKdZLRSn9NqdoTfeB74td7SFXEGq3nopBTBWcv9iJkMEPDBhmzMZW8TTqVyZUJG4cCy4SmUne",
  "key18": "4aNiHtw9JUnKGuHjPwaitLXTq74MSAgRroELgVofKB4ZcWUVStf1UUARfRdVNVNewvb3PGkH6RuptSkLwLZJFq4Y",
  "key19": "2kD2MZUrHJA4fGEeeN6quRGfa9egM3VuCb2p1GYFEUzyhHqBsv5PhSEUr8tm3fwbER1rU6evmyMfoisZYPB2EtEy",
  "key20": "4CA15FjJotbADKzMJbBdgBiHfqTdsqkVZa8T4DpPggRZ2GUjB8V6sma3G13Cx84NxALjwXY1VSJuKBEs4NcJv7iw",
  "key21": "3QYUrKibo6guT8D26CZCBj7AAY5LbCTBKRKrHR76SDaM1c54DaRtsxvAyy5MjuiLeQdAWqZJUj6dBvgGEhbQGByp",
  "key22": "2FUKFSrzhyypSour8Tbgk36aDDKhF4gvkUxdEhK3KoaJWeCCswFroMyQG6PaKZucmJ3dwuK5uY48TgXgED25Wr1Y",
  "key23": "5mjA41DBgymaLMxrQTpmiHe7nzA52TGPFw2bkUnD5nmoRCA8djcCNXvnnTtki1iVLDKbfZSRPPRnhdAJL6s2RkWN",
  "key24": "34Nth7zdcKobdD1u6LF1iFBiaP7mC7pmf22yWfnBUeJfUbqcjS76B8MEjxZmLjCcPimG7q3c353KQpCgtZWzBdVD",
  "key25": "XWSz3v1EWbF1BmYsfesHXibhfCHW826oyM6381nbRenzFMZQC4LjAd3JNSy6kELNz9HAZXwWEFmDygAksyPc54U",
  "key26": "CKqMvFXyMRaRif2TDUBppcAoLj9efqC1vcUNEgCVPY4ubihiXV9UJegX7Ht3Y1XpNdPL5ys9XkDRNULya8mmCL2",
  "key27": "zb7aqpzGbS8DtVpKRBNhXFSYacNHkFRoSH2K7VWU4LbhgaSu7uMgQo1X5HCRhBRgYwJfqpqfgijrHVyrJ2MvbTa",
  "key28": "2tsKWEu85e49MKa3Vds8U3zUGwMptKgb7qCe61h1My9z8NSgz63tGHLthp8eNDsq1AsSomspw1Dm9u9kbndcPEsW",
  "key29": "4Mv9ataH7LLCEW5a2VxsLsH6AZGqoHE9gCqNftpKwxTfFiCj1hxYFwKaKtFMKuoJpLdY5zykc8PPGd12ptnrR5sx"
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
