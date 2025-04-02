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
    "eANgeC5i1jrm5aRCDFzg9mtQmgsefGqsxZMaEnLqY8PJ5C4Nkscn9Jz8hph8PmUgUdKm6qQzkGpbq1A21mtLXaQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2oMoihWEf1dviejDiexsRMXCR9Cx1Uky91sAzzoUFyhtQA42CDSNvNFLypxun96ACPWv3j846t79JqbRrD9CMFKU",
  "key1": "55USKqBqsvxP79BuqYy4ek3xbggXepfe8YoMuhQSRBTQzZhLfsM4VCopCb8GLgmAdNbqXKsSDRLSU5P9MZUW8D1W",
  "key2": "vSgDPYYE9pUt3emRD23QHcbVURmb6ceHd1psGJ89hu4dhDTPhi9iwRV1cb3uNQCuR1mi44sqFx4gaboBQU3nWoT",
  "key3": "33bVpnMqoiWczWdywpMW46zWLVgVGNqozMCT9eEJ8j3UPPPVe4LAGWHJJp9GZMtFr9SXeQQr9aCDQRsqJRhRXkf5",
  "key4": "2Cxsf7BYDqATwGHmfNRTs4AViZ92kmw628ppBLLGW5U92YD7etnwJvWL4KzFcSWyyQRkgvRBTbQTXJGD2TZvCD6H",
  "key5": "2mE84E2zu7TFKvCBsyK73TWmqU4sEh7Eo5HB2GSgTVZecyBrX4ibiBXCb8qXNE5z31XVjNoxPFWAAWAgYnBvc1uL",
  "key6": "qk1hLoLeVQbEeaSqaCLZNSGtgBJ4t9BZKTaDTPBgP8tfHPzZ22tdnmB5XfRHUnK8jUjT1AW342jBttr9NiMGGQu",
  "key7": "4eWc1fR8c4BZpGTb7ec9mFGAcntZvd8o4sZfq325ecvqhJZWcnnjQMZoDNYRzdJsf9m9dRHwBaa3PEyhnisB3nRp",
  "key8": "4Dyb3edjS92s56bwEv8Z239zK7X15VP2X4cLGAFcT9QzRyiWSYorB2auTa2qXpVQuptdnpL9GP9eKve2SFDMmcxx",
  "key9": "s5PMkhd532LzAmbdDvzgp55iUi1wKnkfPZdpJMmCBhobHSP2Z1XD6DDfY4VJrRTJiMtZ9sCv5CaK6BkTWdkuHPm",
  "key10": "3QpTkth31H7UDBwd35iraqkQRfK9UcvMedyKgdpZJdwmGSkSbRou196KpfwLbi8gsAujpchgmWahz52UMHRKwV79",
  "key11": "3bwDNudHMS5jE8QSGYmfcUu7sx5Ub1b5hmWpSWajoE29jxoVYQuL597ixYySqZp66iCY8rXnoGFDebywciEiXbQs",
  "key12": "53yeyv1Js3PbN5YTKwWNW4Ruo68LyrMHs64A5Z5XC3KuEcHdKYDvKekWGeG5AJ1aYL2QYvr4UAS3ZvdAPs3mastQ",
  "key13": "313mysJadM3rzTeLxpLQ9F5w4r1nbUJ54Vo9ewgyCKzJE1vGVWidH13expyTxLxWzFFhdFzhjbj7XSi8dkSPURN4",
  "key14": "3HMaskGDrxTWYF1b5B7Smy7LssWSupwp5WzBUz2dY29hjjjD15jLcLM8TcFdwWJ4ZUM7378NeSRh2mAxoaGiZt26",
  "key15": "3WQs2fBLB2kz8LJLQmELfV7AHv5Z91bCGyMvj7QtYgpSuX1zVEBCzkTTUKdSgkqm1jUxE9gb4pihDz5khtGDRm1U",
  "key16": "3hai8d6uT2rsSP99mSFrSkmTiTmp1qAK9XL8oQAMN5ShwiVGEXDnRtsUD5RLrzsq8Y4msZ5b9noB4ZvikA3kasaN",
  "key17": "Qay2Xy7MC3XqGaDe8TYzkW3ZpHfBPgiLYfB4PLBALjbY6UXHvCaZG58aoiBHj7fDqbiLaX5QbhNzxmFqaNmTxx6",
  "key18": "3ve65cTuZAdLQ3zKtW8mB4H9naKc7oBcxZBJu2uogtKufCYXfuc98hX9dk32xGKkZLyNxLwrzhz6NqA2mGxcz4Bx",
  "key19": "a8KZpDXMJ5si5w7r5XfurT5Ffgn9ejnMehDs7sEpZRWE9x6cY9Zh6hUfGEke7sUx4Zh5sPnzShoNjkikgdw5pQG",
  "key20": "2ZQav6Zcn8cU9Hv59jX4uLstJtjkx7yR77wSiKheQYxPABjANP1yMYhXpMWoMRDoAtqd89Lvape5232Ttuys3cSh",
  "key21": "1Ngz9FGfNoVE5NY7dGcTfFUD3FJi6N2VMasbVNYnx9oGE4tCLa4Dw43a9SdqGzoGYdKgmPcxtVujpKeBEEGtvmX",
  "key22": "37koj7EkFMSsXBktUVMx9kfhabE1Yi7i9dER1t2sqJjUNfjvYYGBUXCNsFvRTzrEKkUaMDMEiaXXZkrn2j5HsPKM",
  "key23": "26xjrg9UuY3Afoqvgj5U8wPgiqpN6qUvzbd6G7jZ1MuEF642M9W8DGc3j2F6sjmnynJxT2hVUyYhDVnmAoGaHdUF",
  "key24": "3Edc8De1rypTcD4oPEy3k19seBgaHbGK4x4CCpcnLyVjUoVNKRvuVpPKnycsp4UMkkTpsEHAavBWpSd1YnPmTRiw",
  "key25": "2tk945uFtKbvyq4YtAYgCFUAHJWh8kCZeeZfPGRZDMyuXn4HZLznuAeePvUGncnZ9tf6ohA8YWUsFjLdK22uPdVT"
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
