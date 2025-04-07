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
    "4h5XhyYcHn195VLnnZoJTPGyR9RovkjyPSU24LEgjHhAQ17zWAdZngPbStUxsErNatz1sM1PQAL2Nedc3Ma18Byz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MC9fKbULUqP5YRDjw21nYLWPkMfpjA719e4RqtoSBcsc4bjUfTp9UQqBpkSbbofp8prQKwJ39bPLQa4EvCUEFm4",
  "key1": "M19RoAvaZqYUn7Xmap4stnB29PpPkni8Q1pnbFDWA29yhWvAKM6jxTyHkcpzCGc6jBNdHsLLx4gpQAVE1xnkFz8",
  "key2": "4SzHb8xQxaRypXN4QVAW6Bu4ScLhcgvE8nAxZ1Eqxy1Ec24s5Eebc5C2R9NjEZUHd2TuJN6bK6kECx9NciTabXNG",
  "key3": "2K7xyJ9CR4WFY4P9QyeTc4BukCoDt1AVXDSB8TsVJ4iTuiVwH4cxe71mK76erbQtjQNL7mDS7NxvHPQoS9L6AYVT",
  "key4": "4icGZYaKfQ1WRrQR3x6gCzEWZXUMWNNjswt8DHqvqg4LVYnn5dsXTVxDWGvrCdFg1M538epNj5RMhiXEa2bK8Q8J",
  "key5": "2bvW1SkPRCB5cWKLN7XU7ryhRLG9f99f5jNJqMTVvx6RBW49az9PcF2JjpvFUyw7LJLVcHF8BgmuRvxLuxZYiDVP",
  "key6": "2PGTCUxvoiBiUnCwgWtvN1ZYp5quDNyzLduyxbhDm28JCAurtd77T5Y8cvBA9VXDFWgQ1ZdKrzKpmAVcADKkdhUK",
  "key7": "2VY4mSCUhH1MBioe6PpELRojf7A72q1mvLEXD3gGSbirGkYRcGXjTX4pgTgU4mc9pUm6hesTgaNVRCugk331LJfW",
  "key8": "4DdBiAUXQJXyZCt6nNwduwh5bvwBV6CvM5ga6LpNQhxjRVqNiPSwud7to2yLZw3YRPD8GUjywzPPRUji5orddNqy",
  "key9": "3k1dgG1yVPb2tk2DcXBm5gUgPCmRpJt8AWk1FYt1qTexp1JryZWMfQ6wSJXmofmNdChVKJrRVYcn72sYTGdDZh7K",
  "key10": "4uLWAte3hR7Suue7myXa2FwfAUyhEXZTFHmsRLGa4SQJFy2NZH9aX6xiRxeupHbunNQvuWcJUkkyMDMXz1sy6bmh",
  "key11": "3grbbTd3Ghp2mxmRE6bGyDgh7hehHvfybXvxwiQ5Ny1UNpxmUB4bcJpzEd98DEmrMTKsbtW8sUpfcRsNgftUMKfg",
  "key12": "4iPkL2ZmSHrm1xrDGHtprX3bs7VdEY3SQJeLb7BuqtYSjsLMXYUYuW4xQCfGUTDqL71XWkVg9odXu5RadLGLAcLV",
  "key13": "EcqiJoMtQsjeP6xSJtaJ3KuCAtDzyoTRAu4h9N6eYJSjrNihzbfNbuHY5dHwxgMbd8K1R4udPKdaw2pW5YEMDKU",
  "key14": "6wPbcPUuWoti4HDqE6A7kUcNpV3jAW8LxR2GAScrZyJcpCMep98s3QUPs5rY9gw9sdkm4bEUuFHiVFXEn95fCUi",
  "key15": "2Z85jmaj7agxuniLkxrBVBd5q3wxymieuP3zpFb5NEHe6msSSBRyJ3jHvvfEqQC2q5ohL6oxGB9E3cnQgCqjkQe",
  "key16": "5bBJuhn9sJkMpzSDNApCSr5mzB6RkB8VgP64vDzpdf8g38XjHvamqQgPmPtDNLDoit3oqRTQxRyKJ9ted4rkzXqj",
  "key17": "52NhHzA8PJDfYvKgEFzHrprjGW8BcRacU2A9bg1PxY5ryiu7vBPAn5i4PczKXtZ4gm7VTvYnTzomBHsRtMUKqhZh",
  "key18": "4VFJLCtwUWFYhZ7GhpVx1RcLVLnUCszrYBvMqPx4o3FhSk1oib2YPKfqz4sWeKo7uh6avKMTyi11AG6cdokqTWaU",
  "key19": "rqVF7h5ubndCgaSXgRP52YWJT5EXq1kdXWzWseVLQyPZnbwW6HG149WCm3V2yZkTfy9q8kkXXrEBZ4SHUqCBSfN",
  "key20": "3xeiuAZVkchv7eGxrGYNbXNjWCHKEwLnXmP8fJErdu1v5Lr1R3H5hvgfoutyqz24iUVXPFQvKRbuDHTYTzcRptov",
  "key21": "1hAMRo4TETGi9G4n2oqNKj2Ge4SJW1baEzarURSTUtjZf9mwDCcQsQoxDREPpeo2ro8Xtwna3Q11KXmJAxomMPs",
  "key22": "3h2e25nU3vFUXodakdFLERAqRXZxqFbd6XEB1qnxMXN3rrVh2bBhBAdWytvpkfRMPNtfVHRm8Mw9rPVoPERvFHGB",
  "key23": "2tGFBFjDE8fkmyWbA2qdvpRXyWyJWGZoLaKk3TGDqz4h1hUGWbMBFiph4drktojXZgeg97967rS1iToGc9c9ffBM",
  "key24": "2MbK5ytZYd5WBfrw4Um7SZZAHixWzNuqMW5scgHVCxKWTUCoopQ63eQWvvTSZexqMy1rLZeJnJbxgE3fCiUzi74T",
  "key25": "28N8aUHgLiPsE69gEE93eFqWcW9aFVoYad7gogNrxyusYnQvU8HpKc8WsmZaBwat7Sbw4Jnfhq1nHpYMWSrZwxvk",
  "key26": "5GFjWqSaa3zXypPaSmLvM5UbeN9nhEqnCfmNpzQ2N6NUvQmCFwnqxPc5xbt7EreME3UcmGBZtgw2jagcR8JWVbx3",
  "key27": "3fh4GgP9wMt3WZGeo8cfLQTK4G2vEZYEk9s8irZfVwD4pd1Ycni95YqgvBN2tPNNdk9QZtTdHuD2WDNio1GyWppz",
  "key28": "4ywZfqhap1c6rPh2K3caMekbeV5rqCo3xC3x4fwHNEmKQ497QtRhxGEYacGP8RsWi9Kd75b8qCHFfgehcNDhCGuf"
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
