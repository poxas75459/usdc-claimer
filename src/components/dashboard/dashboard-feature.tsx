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
    "5sSe9MHjv2A4umySnE1dX8HCuTyrvWgUrqMqL9VfzFiTEkQ8rZx1gLRNtb5uQpzUd1kZYWHHzDaQpJ1k3hoX5jCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22JgaqKB6VxYbh4vbSYih8uQWdGFnmzuQZK1d3e2JrEjZehqHPp7Hpjq7YYc1TLPmbLj2wdQaZpobDaXbE88Xnb2",
  "key1": "qEZ7b91hN6ge35ALPTtFaRBa7wJEFmUXcgjUy7nUu4kW84HN1VrQTV8R3vibxSZQo8Fo4YDD4GgidadJEKv32wE",
  "key2": "3uWZbuopKTpzGtENWoFJZNrUHnr2GHmY93VtNaNd8X8RVtefJ6xUwcsXLiPZeeGsg4BPw6wHPG3cdPNAMwq1bkuf",
  "key3": "2PdNbC8wAH5SEjb61YwZphhrTNZeGu167fXCyNndZrgfRypbqbpzvDAHyWyT4ZS1SQ3yRNdM2NgYcn9mrurpVYiX",
  "key4": "5CjRZectRGPH9qiM4bXmuT3pirBLgiGNNjP91mM43NvwMzBucoEsJYW8Rhw8SyZAihMQrtAQgwYeizcbRtA1EnJx",
  "key5": "3NcUe8XcqKJx6jcJUaZDaMoN95qiVUByiJbPJdP7w1aHdCubqxa5aAkCZVA5FUDRgjqmH35ovY5q8TT6vY9rpT2u",
  "key6": "3xsV3wJtCwgajTpxrQmqMLwJFDvq37oBXcXDPC962TMEsbQDnPW35hnohM5ChZMeYL9znhBUDB3bVzSBx8vxoL9L",
  "key7": "mXqAFgs5PYztmp5e5RQm8Ph7f4wdHgrGPH2g3vBQDRRqmWRpydDVkRwsmZTScm2dTbUdy7xwWkaUyHCu4TzLYg1",
  "key8": "4aAiZaJr1gBBBcy1AKigqJFJBZUBim381EjQKpmY9SdncxS9dVgJqtgL2gSRduLhwsHZbbzD1gdjiVwfpbmpY7WC",
  "key9": "56qyNcH8BfUiVeUrUoehPtK5r1MCAaUcKpV6K28RE2oSGkNau21h9WVZGd6kMmLpcJkMcuM5WvRmJCdr4AcReCSi",
  "key10": "obizXbAq6pgmNcBW5SPbXLZ8tbQDAviQGSkdSj3CevaQDSEgTNAyLVfaLaAXQRbg2Tk21P9vNBScLc7iyMcvsQh",
  "key11": "3uSEkBXqqjon1WRrPWFZLxxVA9MEczoFDgktx3LnjWG48dWUgfMEjp8zAdXGeEUxV4fRk8kJQ448ELz5SSt7saqV",
  "key12": "2nfcTJHPwwGfUSnyAxSdRLBWTKi8X4rURw3B45Rgo6ERhoRVeLEkMW8CS7JCjvaoNszYZm7QwVLwKT7jF9B1sBFe",
  "key13": "bXbmqwMPAmPLNb7EA3BXeuLVJeNiV3NsechdsqZvTp9r4Cjt8avdVmLmHRM513M5Q1z57rDAWFEVEbNrfwgzTyU",
  "key14": "K24Lz8YRGmrEuvCAq5CZ7UsqR9k5KYbwtUU9vdkmdsjfUgSedCCfvLzjVHjoSjMfgMsiP3kRcLUQWRY9imYMMjj",
  "key15": "25be9j484HBEVczV5Uip6XYBc7NbUAPoQdkUv5JPgWPdRdzn1u2kgbJWejRV2AGnwuZn1m4Y7Jx7c5HFSmVUpWAU",
  "key16": "xFS8doVncFeyAq8RejDKbspt3mXxZhZ5ZJBphwpGrg2EqYJfbGhZRpUndREPFExiUPLV2gMCHFDtS5FH1X5P6Vu",
  "key17": "4mGsASAdGF7tRgYTvdwEz7x6qfTkYSeDC3WhPCCtJgVsQmHuimUg2WwfigiGGxSwctcdJ9cV2J7DKyXsvqxQQDrF",
  "key18": "5iDyVUK7BAHzt9BHnV2EeZQnuaHE6WFAw6DwMDEF4dGty6comG5qVQXXhTKCwSoK1kBTQ9BHcuQPYgEWNfeQ1Tdx",
  "key19": "21dsgn1CQrhnmDtG1MSEZvdQoAqpV5ME9dTb9naUq1PHu7UuccDyJULofK5PFpFTfpdTXs526BL4AT5Em5tnhRVE",
  "key20": "51eDsQE12caVtzsNzDKHmQni9TCCzNEJAokChrtUzQib6gUny6oLS94UPQ48WMzLrQjkA6VmMp4BKrB5PUHABXn9",
  "key21": "4xLHsAeK8b4Hx7qNmEMfynv4TBHR6uZQy9ZCq3Sc5QeVHbDjY1DzSTjj2EWF5NLs5fiC367XY8Nq3wwTNbBegKYT",
  "key22": "2C6xQgpD7P5GT2bcyTcTwyzWp4jXt69zLQVzSAUGJpf1J5KcinnEGLsioqjEujzCdYtrjHmpScrAKJLRaCCWWKuX",
  "key23": "5kLrHTAs6K6bw6HYLGqdYgcQeTqni4WT3x7iDU87EjBf9QzceNZZfJNmP6mmNjCUqDhMVVRjsJCVHMiPE57T9nD",
  "key24": "azaz6oxQXh161e8T74qqyttq4iwTm2R8E7hvWH89pQxAFnZpdi34PoErtFp8mrsubYB5KLwT2hFwRLRYBkC9nFV",
  "key25": "2sEtLtpmtM1U385sxPDUdmGMrEWuKxjSjHDHxZZLXNC1HuXne4aCKHthKHU8GyZGYB8yaZ3cXm2grZ5euMP6NXNS",
  "key26": "3931JmVUrcKpsCV86HvYpSSKM5eXeUSfwKrbxZ8cbLnEMqkDgfUMn1nMMvHyjhYFutkRAHbXhq6zrc7VN2kB2Ww3",
  "key27": "4Z8oYtLseDjMuGpWDqBCaoQXHguN5WKDVoy85ahffGfoBn8gLYG5iT5t7Giq6gjj2aYVAnVyVpcdyahnho18aJXx",
  "key28": "38zcg2bQh6WGXLZLakBjrVj6QZ2ErK2UbVo8FyKxZhVGRPcsPSWTLKB4ekJTKn3Q2HJwqFVdc27Vc2U29qibcP4q",
  "key29": "4vtdgSEdNoGvZ9cHbLQYpvK5k2B42i9pTsTGivTdWV36LgdHQHPfMB6WvXiQfCRogsupmgLL4G1iczYMM5H1Jb9i",
  "key30": "5dmbPKy7KcYJcQmbd7zyhVRg18EL36FcQUJLCGK2f3MAoSiBuNGcqcaZguxTVmJoBFpkKHUerFxJUoX9bMoWydN9",
  "key31": "tU27aVQXh8VG9v2ytd9vCWTCM6KctEksUkh9u6bvszYRh6oCnLzSGUHf7qEoNXuQtnZsBkcWLtDxNgiWnsm2igv"
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
