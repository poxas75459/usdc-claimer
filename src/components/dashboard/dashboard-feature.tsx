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
    "5mMfWEmNPqUTXVYrYD2gQhnjLSoV8Hp2deGJSiGScurdkLooZkd7apaENr76RtHp3B4tWvyeaZNRGmipbrYXRdxt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5f2kLDWmJxiyQi7MpEHfpgcdrBfh3kjGBKzU6Y3AQq1NkgXP7NRk8XS16HqmyN3pxPCXvPCTMizAifYogVU8qZjB",
  "key1": "kqEL5pYXr7YUz75w3SEZCFwKHtSdqqszpu7xe8EFqthELNWuD5AfrfxSwGZZ7Y3KqRJMDUEt9TGbJbki2Gi6YYr",
  "key2": "2ZyEVQmXTqkdRcy5UtAm9FNE16oTWKfYTwVBsSjVyHMgc6Eprpucta57c24ioVG7kbzVj5g9gTyy1CbSm8RB8Avw",
  "key3": "2CckrdfdKmL6cfYbJERgoCZqYsk4bKoNGjQYvWNHSRiVEdKmg8BtTL5ByKyovyKiPP31TBshpdMncPUZQj58cUY8",
  "key4": "4izuuxfwiQTXWQCdiggPpDrDomtikg8vUxKGpLe1hkuk7eBADKFdHiXzEtAAjmNEaNWcSxMZ1VwwYAB9qK2Jz3sq",
  "key5": "5dzm8hctz3EWJmcVVowxtMKW8kiUp5xYBYM2qSxo8MzXfwK13S6tuHZ4TcjrtT3ZCLNWF5hYUoT4VCMsRZJrmfRh",
  "key6": "2wPia5CBrfwWJgqYKpiJDz19NR5ob5HmmjsaT4fzH4T3Ju3esyNHWB37CVkVYackSiBB1gZ1FBcYcw3PFWPvyMNh",
  "key7": "CuaBjW8iK6hShPQRpetUSbVYf6ofBoWNyArcChAFovi5WTgRXtvGmotoW7ULqYGdnGY6wWVonNyb6T46W7cXTuq",
  "key8": "2m1uctP4UumL5jeatMYFKMk1JT8mNNBpSZEpHvJS7MDQvG61p4aGjPvWrHvC8jeBo3oLfJPwGcvD6LKokqxEeSih",
  "key9": "29yhTq1bMYQ2dDTKSd4LRbG7G55NGeM9LE1TcUHMPR1rkeEiuGxbWZoHsEHpv9rD4bt1d9kfmT2mxx5dCLxHSvkW",
  "key10": "61juSsMT49oxczw77RHYjJegdpvYmimo9s2mGKFN3kgdrATGUNw3qkkkHLannzDAEZtU6z3UkssfWRn5y9aDrpMo",
  "key11": "9gywvuRefLNigozektdEYHKsZiuxRsJVFLfWH2pWBsevsG7m9VGfE5suiKkJ17tpfnD4grRi6xWDf2dD5ckxBet",
  "key12": "3TLxhoXuQgd8dkTkiM6JgsCN1Wobc9ks9e5e3dVdue2zPqZsAfBxd8SrGe7ANLzcz4Yh71GAeLgcXzWDCZUFtRMw",
  "key13": "j1GF5Dq5jKee38Q5BWvVD9gAgwAdybWSTZyQfKzZ4LL1TaSFVuWzepiXd8tPpjrsViS3KCkKU2Wot5J2XNXY363",
  "key14": "3roF1GPR2xiA8THbUkDLmPfXrBXbrQ6R724xKm9jAcUDGKjgzDC4Sa5tj26TZCM9iM1gc6VfA3A4G91W1MRnM2VE",
  "key15": "3kMPkBAD8vtUMAPbZkLQJjWuUC2trVmfty8CtLzbB5TwhMpAssdQUDokPLxrXQFk9W9CzHLSsC84SbUcuX4Xf7qF",
  "key16": "3wNJgi7fFTD9s53QL9EMmquFA4Xqat5uSRWBtpw9PxyyMTELd5zKhH5f4RwzhwcMA4H8pVMuUG9CTcgdW5jbbeu4",
  "key17": "5hqNg68jfQFwYUrzdxV4jgFEJofHsJgV9XAFATtUqR1Hb1B8U5pgXYkFnkbQKBQUa2tT7kbPnqnJ4AFiadMfeWEA",
  "key18": "3bNs8r777aatXV5wWNQp2z4o7simAGaed3eV2XKshVCBxiHRwmS9KJ6318NNsip5UKBoBQTFhCURmoBszRAF85vG",
  "key19": "vscCmHaS6bUAxvDPDxQ7evsbBLzdHftBZrjdhWteKgonGuQvrbibQGMfqSd6thnJHmUbKmhoUkzcpSXShAYMc1d",
  "key20": "3b3r7d5PEohzWnpEMYaFDQKWG31XgTy991B95Ba5M9k6GmbJjDEHP1nRYwYLaKgqcd5MDtC4BL6N5HTWfkkRp7am",
  "key21": "CfQdr1h8EBLhDz73YPGMXzmmipJRPd8ui1obbaeSNq1tCdpsjP1fuwhLyXm1kEwd4ruVJc3kEzWNg5mAuPEvGLK",
  "key22": "5xVPo4XMVoJcPxMJbUocBzGPAfkPdNTx4hog3JwTuw2zUZnVLFDzqHSKTvM8SGMfNgBrkggYFL98QcXfMYYMbRJV",
  "key23": "3zay54QvPLPbfTxJj1G8To7ciD8bD1ZgE6dZGDPhFgTc1ng6LQzQ2KFbq7iPBAb5SDw9BREdYhMCGx38EuVu4J7A",
  "key24": "2vwzoN3EzhiJTPBivHAFKULapZBqo4f5FzBEsKGkaUxeYyriawtMG14XNTQpFGB7n2h9E8SzyqEQ7XhoCK4af4G9",
  "key25": "2vPLcpbqyA3mHMRwPecDiiuCJcfVvL6mBLSuVD5SDdJYwuphoMGaZfonrdeaFDNYUhhrxQ5qranTP7oDfYW4q4mM",
  "key26": "56vpZcDkGDCi6cCVdt1x1bhCybrnDXuec7iiW3QqphmKR34MGbReqmXBnBbi5Eo2RAqvvN81APEcvGwuftpqA5W4",
  "key27": "62qAHwM6UqsTf5AeHn8vzgLhcZf2gStnkTxoTuQcoaDuknpvKZg41NKsqeCMg1QM5SEQ1rrY5HCQACPrRfqHcSJN",
  "key28": "5y85mr7P2JjeWECZFheY6NuoAQBDjZiPdqK1NSGgK9kwF3ygULANZLNqCAsdmAEvkGSUmh8gBVK7LLbEosMhyrE9",
  "key29": "3Jj6WJTWTMfG2TBh1gY2NNBv6Ava8qzx2H8rp4PBL8qtNXDpgiTSWL5fiiXr8KFXyhRNB2wrk2UqkibxuQN7Dw8n",
  "key30": "5AFEv1EYipSBK9CNJ1fn6BDJbeytC1iMwzaQFyPykotz1shDjdTrTjTChQGUsrrVTMoLo9HpEonacH4AwuCuVeaJ",
  "key31": "vJ5eyfxZcL7gmPEpZbcG1vqU72bn9p6VuutetXuH7QY5uxBK8CBoryWSseviwJ2ZeXH43qKMv8e1kmFKSvkKDHN",
  "key32": "VgESg7URVMaf7ms5qSuqcVFawv1SzvZ7z6inwt2FKh2gUhjg4Um3EX8QLiEmf5PmoFs1EMhV8xAiKnjz6SmNXe3",
  "key33": "3NuXeeJ14eHYaFSCFqmXeKFJDpBdChGWaKjQTh7FjHTfVzuJNWYGaZaEiTj3SBxWgLyiLzuewFKAjsr43N36AroQ"
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
