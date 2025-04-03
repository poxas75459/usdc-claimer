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
    "3Pd1iuCC3coZQR9PpM48E6DhHLz1PwLHudptouiiCMD4gXVVMBx3fiJDDLDxNpPhb1ms89tTtCZYnL6AptA6zYtR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CNrC9XtptrMKAPXQ7KzfDtWE4fC1BxJRnXARWaJZ2qviyMfH5GmHuH5kkbAgcJtEFHXZTAU1YrHbVBrX9Ss79N6",
  "key1": "2Hockd5QVvMDxpf3QRTdLDr44YyRHdKEgsTFGsSN2mKPdF9e1egCYzo92KJGhsvnkVC5akrFjPxGkrgWFQZFWX6i",
  "key2": "5iX8rvMcVPYNQxgG5se66JntoUtkcHH44bWhCgzvd5kLmDwCNfp1y3Kbko6noM1NfD94RTLzqGKJnWkKbsbqtokD",
  "key3": "2quzUBTQNZMcKdF31UgDSntG5oy69vXsN9rqXmk5CDMZXAp622fWnr9WWrF2fgmrdeTbXWwYXWQWZHj4Axi4gsMn",
  "key4": "2ggnqvnQrTaQXTT3KWmQVDL7drTLv1ojTyUPFJGGo1FX25cCzkqCML17k236S43gufLggGubzUpWPBjW9UgwdGrH",
  "key5": "5pt8L7i1tFifrhPaQ7EVuLuC9E29nUSdUD6aKGotBQFR7QeFBMTzYLv2HN4L4pA28Achnxjjc6UwcxbMCbUAysZw",
  "key6": "2jLSrH2oZVohAiDkNPZS1PzAqVVFpshyR4w64J42xWeGBtxeADjok2c1r4c5AWbs5oQoM1YMGXEqvi8p6rCmAVyB",
  "key7": "639E3ehQyVSM6YH2UDFPf23uuV1Ji3MNeBdTEwHvAp94EL2TyaFdV2NpSC8jCNbDafdD1yKH3eJFttsrWQGNFQYH",
  "key8": "5oJjTay3gEyZioGpjHD19Y4Q94NbQvg6XtjPMNjf3T2qNNusq2ho5JJCKgoorssJqTcMpyctLWe7a63bxsnEnEFj",
  "key9": "4LnaH4E7VtrQqVqCeyJ4rVqvLRKRnwDAdB9f155Gb71fXD9cKcBTejAirZXb2VA3LSdCGgNwe1ACVbm1YhigyoQA",
  "key10": "nH92Eq35HkBRpMbmdy6XCiqrXrKFBdDdULkL1UNPZiKR1gbbKVbLg34mQb1367xCaVFobP54RTrcR533winSCLi",
  "key11": "2X9ZBy7njRzpFGBW5g38iqfNYsVEMsGX7u7f5ERD1cHCgeytagR4ERZfWWR89JtxVb5wDF2tSTStHqGyVnVhQbCr",
  "key12": "4QWAHUJ1cNgc54tDR4k3QA34DdCii2B7dkHgWHBpPeDyNR7WJZpscUo94bQqr53fRkZWb2VF3YsKYjppWHtmJmZu",
  "key13": "3KWB6kX1Z49cFckpW2sGhrgPS7xYYDVLz5ud5BqhZgsQfcKzNmKWFxahspBsVh3jAm7DNA9wixvDAf8qK5cWypWk",
  "key14": "5e8pyKV4o7fr1LBzxKnN2PrMVZeGAUR9iR7WvPfHW8BcMdcZsRRqcJpAzLPACUQSdZgkYxVJBgQnJwhw6SnzMUZE",
  "key15": "3Yi88gTMiBxTP7A9rco99mWERQBVz49NV6gYA82aCJ9foGsXowHzgeF1mTrxc76WwnZF5YRZEYaM6nMWrwdcERgm",
  "key16": "5dLcdcmo6g5y9GXrr5QuERMVcVCR5fqUv6VLzYXsuwZgktDdyGff2ZyDYV7UHWMQWrC2X6JQSLuzWUSDvBDxHz9F",
  "key17": "2jnauELDQAe8Z1vVXZkFFhMnejjXFcgNhRx4CfY3VusMVpRgj8dtaLAVyd4GheafL8j253HVeVSpruxyQoH7kWcU",
  "key18": "jnsnKcejeEjKNTR4oLeaqZBwGS4hCSTy1JwYHtvSHG2xYKSm6otuhfFTdzwDCYw2BzwzeZgab4i7rst9qhZzrRJ",
  "key19": "3itHt3F1Fx9nWE2LAYRV42JJi3puGan9dKcp3HkXRPAF6tSXRVZF7xWFiUB5hbSBu4cFYELt7ef7CeKx1LmxEANY",
  "key20": "siXXmp694xm926mYxWSyc1WJEDHQXVSMidpJJp5zXyPvqL7p4Hwgao8KcHktU8QcWPNP39x938fQT8EtADnJGnz",
  "key21": "4cWVJE77bpmEgwAx5nUE5NtZHTePUjVgyMUKhEcn4AWGYtSgHDjgKVgbBYZuiqaXdePyyQDaozLGqGma2zqh7gZJ",
  "key22": "5E1XBDBR4f5Smrc7EWU54RL3SfRrkVmLUhLT2GYq7s7g9RFMoU23nDo8H1qd9U4q2fWktaHxKqpMN1ZzGmh5E2bj",
  "key23": "487GitFuQb6yaULLVX9cSTRwqiDGu5SR2EL2eHUDAGRcifsRkMm3msziHYp9FAmVPDndUeDsLJPSDZJnB5jnpy63",
  "key24": "T8bt99svTJUwDsymtGZuG7aaP65acy7DJX55T5dJU6k6xe7h2NAFzCpmJFW3rSQe1pC2qJYXecjrsuycifH5mN6"
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
