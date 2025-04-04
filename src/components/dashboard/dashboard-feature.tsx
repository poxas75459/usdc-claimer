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
    "3UcT62fAYMJBHM1c9y5fhwkj1fD9D3rJfQM5WscWcfrTtqfNMXbD8cB8Rfug4yJxiEyiDCH8vRdZQYazKDBzEVgF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57VGCew4gcYnmEVusUzsU9Zi4bKPFN6EwHTjftw47MD7bB5RQ4bEERhP76u3n17DQS9xSRt3jmG3pTgYPXLpjRvX",
  "key1": "4y6RCy9pNMQyZx6J63TZpFtzFJn6R3BKvoFj23cQWgkTVZuJvXSDw8exVe3FnztmQ8ANjELgGHbog6vBBWb6obBp",
  "key2": "5Sq4dYMGFuDoK489tCrQ9cMna81XWV8VJn75GpWpEGWt3LZhRmbNiwaNGnSq2aMkumMYveAaCX56fBkhM9rUvXZd",
  "key3": "2L2ibJufYXQD6veFo8QW2ATwYzE5ZhZH7bgwAPv4YeaNLEe2zVEpiuKJ2aYauRwyUR4fdieA3PcTqf8syaRQKqVP",
  "key4": "3X4NNsQofFgRmtvU5QZsZANYy2KuTJCiJbW1Y3A4DJFDxyyn8mXxNvgxbjsj6aEYoe7UXVSXFoV8jT91S9PYZk7C",
  "key5": "36ar7zjByCZ1WgvShKhP9ReGWVToqBh3rBnhJu8YU88u3HWLSuUvBNvF56EXdySsgnRR7YZGwuJRG6FH89NGSYp5",
  "key6": "4fbHkqBig6fg5fNLw8qpZbQBoCM1j9FH6WUH3poERkZ7QGxfXSTvTXbhJrHpcD9zrdwDKfzUgpLNJjK1qEzvKXhG",
  "key7": "4h7PTmu7VTmotVNpCQo3GVofD9Dqxk2KaTsNedbZM6t8Fj1gQCTNuFaywdw9EAou4sFsv5FT5Yop91v2TApeBbT8",
  "key8": "ZK42zxcMeEJdj6ayJQvH4Cc8UJRn78pEyiao1vboRqqgt4TzKVYMcTSsu311dRqJUrJEscqYfN6qTDrykdJtFvv",
  "key9": "HuU2rjCAuyv7KZ31JWqCTos6XzcXu9ynsHQuZzFasdhiSn771trHtdLfYaisaPvLi22CksNXdkS3dCpmWM5Lzkg",
  "key10": "3DQ2Ut17oYTMK8VAsrZAueCUwdpbcVJbVTRpM61HdXmPitsnopGCqaQy3J9491kj8e7Xy2C9v8j331km9MHBg5f9",
  "key11": "5ANA3MGbuA6JkN1qyxGJ26HiL1Xu67x8VVf1ntpHAkb1ggMzJvq4S5Hyioe1vTA7mXXYCoGA4DpYPsNLe9kbQhoX",
  "key12": "67BJQSuc2DNHUEcwUuiQRFdbUh7yWJBadbSjJKjLBxa4wuF2ojHaFmB4k58AhvN2Y2QuQewEVHzwY6PFmQH8snzK",
  "key13": "56UhQVUKLpA3qfbXXJMYN8TofFrV2YXqJfDJ5XX1dq534ttq3RdjPpK9bEErECXxsEYkBkP1w557zssbsSeo4UBj",
  "key14": "XFWJGMeFwW15RYdTWVz1WWMBv6CUPwFCrvfaTiyppHv4MFNdZZq5QGgVj7CzZyr9em3TdbpEMsheDwU2yKWvxnA",
  "key15": "62kXXJH1LNzT1grub3bfq6nNzfLqo8SjgjP6ouUnpUHQx3ZAyL54S4E4Q17tiATQF3UL4JakLvkHhXbo7xSUp7cJ",
  "key16": "4xjoEUtXvmQHkXMvGQcsvCmVcDg3fdAedWHUa36QZB2fuJji4hC4LP1rrUzKc2YviRhDm4iccb46TxP4XvdmiWbv",
  "key17": "4TLj2GLC3SBL6kVbsssVWXYJJCxdK8Ry1J6ZvdasPmLpHi2NcVTGxVLWRmBM7yzdkvhQkyMyipxdp8u3Nac1eNwy",
  "key18": "257AxBPKEyjpKWRFU6R4njjKoLah6LPa6rFSEfCTrUEPrdKvU12NShZSNRUpzbBZPwXNqt16tbFaghX1z5yCumVZ",
  "key19": "3bbrzWb6PKrHfFGyDt1Pr8n7Vy9xK9xXAnDk8EkJf4HSajHYPNEkVyrqeGcHwm9jEjBCdEu5M1ZQZZ2tGcMDLeHZ",
  "key20": "2zC61Xf1KhuWAw7X21dN2J8AhJoZEjQ1po7y8p236v1CZpZ9Jzp9nEPwvJ5m2bgg39zR7xKJfM4yBJuArvKnY12G",
  "key21": "2kwD4zPESEdQZTcB5LY1auswTGyEKcLcjGr5mSK1UwnUc4FDKLUXvx7nYcLsLoF4pJVW1bdyfdc6tnRNYihpFwpR",
  "key22": "5ZwECrfAQk3v3KEKmvr8XFH7Dtde2iEQYMFcHaUzXS7a4xTMJhtGffskZXUNLivkojsP3XgDQGSkC6yFqMPyEURN",
  "key23": "2aAT4uFmP5DSfwt9gpbnLR6ueksD8esRAUQYzfKpRJn12Gz26WiVLAMfSSmPqz5MUERE5sSLiyTR3zG54LNGmz9N",
  "key24": "2fJttQBxxNuZAPMQktdsGz8b4RRk6HcL3goPQXBN3Gw1qRpVExthNBLDtRRK9PhMpJGJrFtC8tYZkVDPptmGXkmU",
  "key25": "2DrP7X2fQ1F2JHdqLUrk1MrokMuyJQj6qVCGFfZwitB8frVsdyF8ZmHj5etVahA2KF36iWEn7vPngeMqoecJnF1h",
  "key26": "4h3XWyReqj1C4zRPFXYTQZ2k1csYVVReM3kiCanCBxdCKBR1oKyBbcwqLedCUYGpPMJfqrePGHbR6HQoqXNYpRzt",
  "key27": "54LTk6cAwGkMFUnesuS3aT2ir2h3p2sSEYKjZXKdWvEuezPZbY9ACFvzFn3TgfZkK63MF6xnLTBoimrNieE6fLcp"
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
