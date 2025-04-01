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
    "5nYdw2c62HNwopXF2JjSPEYZGsH8xoveeHqWeHB25pRQVREXYRCuzpRxSEKoAWSRgkNXtCckgSRQ2TPoexMdF9aq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Jgt5HmXQCZpJN2hwtS3riYL9rZ5r9UEPf13sA6Cgyg2D2eB1cr7yr6RcT4NjPrGzNq7CmobBZmd73wf5XSsH7f",
  "key1": "4FfuzmrKZwZADw6DzK3KBZDn2EPuzBMkh5rE79mXtdSUoyizSji9FMh9PQFdCZ421zcB2vQ4nwe881W3YkgCKqS7",
  "key2": "MUTKnAXMi1KYRg6VLq9kXLbwJtNos5vpzBUCPSzqSRP5YSw3kcEea63Ksdb8Wj7jyZxKEn31BkijgUM2piHFRUS",
  "key3": "4d6yGk85x8HDXME29keaiVm1EnTofgwZ2RCmytANKqALKkxREiAehyfHxncCDibPXcurnXuGnTW8G7QPkYDLs1uL",
  "key4": "5nBhtxZHp1uZ8Uht2ixWdyFeHM8U1c7NZogsQ67kuCmqXr6Q5v9zmUUVFCsqro3yEcSa3oxkDcKBRRNFcNi7Cysp",
  "key5": "4Rwj3uV6pivjFGrxzKFXCexgDQnEgomWCYYXhfZD9t5EqQnS1cWQF4BReNSX2deqQudFx2AvPoCcwGWT3PUHrVSU",
  "key6": "4aHkUwKX6tKd3xhkWEs2AmtpnwHTCJpPD1cjKkWfn75A6ggwstuwLRcRna1imattL76ZUmxM8cyxji8uWKcXCd6g",
  "key7": "5An7ahtVTc5VNLoVFGKfKEu76AZd2yAU4n5yCbaGGuYZudrg7rbW9qL97ujPtx1KAfSbDbpHFoVxCyD7o23hNFaU",
  "key8": "335AaoPUjhkMwJNxdyBRiEsCk3RLRY5AnyzUVM3ieREMAwAs6Zmk7anxgRsEKiStizVMG2QG5VxCZDTMbLN4KCzj",
  "key9": "4CXMgLHDKW5cy2qEgwQ2nXdnNvFzdJFahWmxeaBVDXcwwPquswUoNqThTd3xrbXJESDDhD1e1dPvgo5hVzwJAiYw",
  "key10": "529DLmtmqvpL5jWH4utD9MjAvbKwWZFaFU8YAPiK8pXz7JnHiBDBTBBwirDhtg9dA9fFk7y8gPuoFmQsLZozwFsW",
  "key11": "2rU1x9PQr92mZW1EZXx2LFHCGMCyxx6NGs3eg9Dc26qat4GR92Mw91svZvuPsEte91kRB7kV4wcHirbgWWodfCLm",
  "key12": "4xeLK7cie5AemrNNx1jjRzgne7umHx3TjQ96fN2G3HsHtRJJNoeNpeJXzhoFfvM72zeRYLzdCbfd7E5YoTy1jtHc",
  "key13": "3jKThaktzxpUbChVoumYrTxLMyTtxS3cZUBdPPGbcDagoTmcrNFy3Aqcc4LEoYySTd6UtCo5KPJEQxotJXEvU78Q",
  "key14": "3GVVdVbXmiA4wCijmmU5VVYfYmu3JfNz3Q4ozthn1d8rwLR9KD5E61Z9dexEpkXMh47WtgjCeapzjDZiemP24PBE",
  "key15": "2roE4bmK8nhwecEzMU85YVcHXfnrCBHmGJjHyQ7gpW1s7WX8SK36FybA1oahQRPf9LCx5UtKkC9WThXcw6sHNwJ4",
  "key16": "TKRcB387r1xdCsT2pfQmH6es1D56rfwZ1B5jXkMh5YGQmvZuJwWu2g8QAFW16gDnMdgRTqZy1qYNdHPCWnDN5Eb",
  "key17": "2zKre7Mdot8eMKWQiVHtHpxrSudBXzLBCPSoRefaLuo7AJoSkih8X8bcRRkJwXaFN1V1HsyrA8A5pJSnuj4QFZEx",
  "key18": "3pRXpbHdobK9hir3GXwy66WTNDfPK1ytizYPQtiwpm6Y9FyjJ8wEFp2jjzYfqojzAUPB4QURoRNF7dATcr5u96dF",
  "key19": "uzEm2uAZJocLgsGHHnTqXnEWYbwDrGRNngxoenJtDM2LRMoQn3z2u9QDzQ421fuxWjjgUMy1Y1eQor8G4zcurRQ",
  "key20": "3qcYD8zQEViTgS9S4QjVnQhkGfuXyDuktpp7MYpEGwmeXJjNjbx3Ek9nzgBRdf6GLxBCyReBvTre6ihAFyVdjDU2",
  "key21": "3jvgFodRT8popZxGwLqcMum1TPhfEewEf6KTrEGLo6WjQ8Ktrw2xosPLWBGmi1nT7KqVbRmUMv2K97iA4x6TYbTX",
  "key22": "4UVEYcJ6MskkcUoDWDyVaBdtiA2zWDkUukeKiLaBsv8aZ7YXkyQG2WPkL9bNZQ5gkbg3oxaG3RUarzASnsqaH8hP",
  "key23": "28MDxEadguMu3rPg7gMyzgzEDfWeutYRcHPPRpc7W71bjkUDoUcZ9kZbEMJDKyXK4cHpWiR33PDEFhU82xQbKrLJ",
  "key24": "4KMDaonpXNWRu6xRHEBz8ECSvCBwxTipEefbERTMj27uktXiQGGkr5rMdZt1cVq9c6whnkNdSWpTzMVZrryqHwa",
  "key25": "48GYo31WFT7j1ZbqVcVtF9iHEN7xDJtng1P2GwgE3x5WFom8nsC5QHD1SNEmMCrPWFRaqnMRsMQe5ywUccdTSR2E",
  "key26": "MkxrTboCh5o77XyncxkKQifrNdYLySeWVDTVryu1ezPMXDtLarn8eVmpL7rZRm1wA5R9KKuJW9VtwupnLfsym2p",
  "key27": "3WvYpsLywLrbn4SHM38LwNxCKwuFy3xiXYpvsCFUir8iq2qJ48VbWYacfyXppqFiar77NVEVoejKmz9TdCQYrZZe"
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
