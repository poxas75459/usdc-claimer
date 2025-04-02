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
    "sWVC1nVMdG6hcMtNEp5Kp6tvt1qyqYVLE2z2F1CkDmCEVR2sgyo2TgrSawDrjdqmnDpyGpK4yRrudjBQzz8icxv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CrYfmSzk8mRzbCoU8KQD2RRaNBYJx7A8zyqqe9hqFqjZkHqYjYt8ZxRNhGpzyp94yTAqxRAVWcsAzBU8X6JLAv1",
  "key1": "5EF2DyizwjE5bzzADD4unCqcd5Kf54MKpFbcSnVcqY1rEce726dXJFwTDd8DrmSknVSRdSCwy3RijEEgvhY1JMmu",
  "key2": "KuzpXJaxcLwiXt92JsUkFMpregfiMtU9UEDe2KiLUcvpFv9RbLtmQenRcjWahzMKWA9GExdcsQH22rDYXzfJR6V",
  "key3": "2xHa78tkfiSaoAwMXuTeGVHGERDbVR4sr1QjFSRehpnDJUbBodfP1KAe9AdNAd19hsDLZvxanJou2GaN9xLNLXTi",
  "key4": "5UYKZGPJqyyWHrUbYhcRDz9C4BABssAKzFoXrvedL7usd1UYt3vkiRZ4iMJbEY689ptQncZqpq6bNu3D2BmcaGWW",
  "key5": "51aKyaYADGu5vTYS7s5CjE8rjApPqWmhnFfi1WSaxAQgrgmkdZheso3JMYDPNbc8T8JLtDCRgCBUtCZenMSF6mek",
  "key6": "32iSP22Co1YwypAL3WxnSqnins52MxiqLho5kdomUS2jf8hotjevCxvwe3mavyTFTVePk7UojE8jwgnK9j3cfVca",
  "key7": "2AtLVp3vG3TJsGgBgcgEWfopEyMU9PmdJfaH3FKEcqydPhs5cjPJJzose4fCypsfDJ1rGCXyYjhKzFTy2VDsvM3n",
  "key8": "yU6x3z7BYG4uds5sG8g4QS5hgY4uDtSXJFyFeZph57KGJa4gKF2ourv6vU8Qum6QNdWQ9DWosnd48SzJrCWn66A",
  "key9": "5t1wT9E9FouZT7xGKKHi1jqN5QbyPWAQW7TZnrtWQeSNadEQrvwKytDp8TeVPbwkYwiV6kx6c85bAmbM14h8yBkK",
  "key10": "Ymw5XQmELYN4WyUehEzGJv2TncHjf8G6HuaDxSqAmwYdhAv3HmqF4ngjrzPrPXXSNenhPreLbHCKSnVFZPHvc4A",
  "key11": "aVyR6ny36vzkhhF1zP5aG6gjWRbqjvsREvu7DB7UTKMGc1hSydeAEnbPCAqc6Pj8hQYEJiqXZMknHJhtKfD4QvD",
  "key12": "5PvBiVXfsHVyDXx9kFqPhC9Js5BLSrh8cfnzvqVgHbvxR3wKTz7jNzoF3dX2G1Tt86mRPEMrtEPqVgRLoMN7m8za",
  "key13": "npKKC8X21EPMjtM413r5exeWmy6EP2jV7rxDN7BaZtSvqFAbRiorHXr6NSqQ3e8EuSzWf56ic7LAobpSvDRuQuF",
  "key14": "4G74Hw28A6ppDRMAeetTDirgCjjTE529VNx4yrXxhsmPekhXSPNbX7XMtfYU6QSTmfWVccoFkCi4ZaFWpFfXXLTa",
  "key15": "2csDPbSYEhP63H9xXw2RbUe2tHVJepeWqtqHZ7xzTJX3QqqkRprUhsXKAeBQV9XrAGpeZX2U2Aap8jbXg5JRBCae",
  "key16": "25fno4pDHRvoeeMkryMUnsuLk1EJcEu5yBXNToE5H2kopNyA2nZgsVvagq2qL1GdZRJKwLZeEXqv5EbnzaXu3yfu",
  "key17": "2hjJ1m9Tqh7Uc7BPVcmYDCD4nj7gtojRctkaLFYa5z1FV3XvQr8fKyXwvCwccy33i5zUyubwRUuQ6DnTF2fCwkED",
  "key18": "54yRcQT7RdwJNcKzGxBULjyspCgvoCsAb37JAt4FR5ApD2SSPpQvsv7Zgr5NBXrwYR1u3aWLCpFydqEu1gtLHEAz",
  "key19": "254RqAQajHtpGaca12FPd5UNpCapgqhq8SqkMzCwXeu1sRBHdaVXNQNNm6rvRarhPpuaheSpE6aAMsiiXHVVU3u1",
  "key20": "5hw7mipsKLJkqVJT7RErtuffcMVhgTaSBXgW7XNREY6MQpiNY4Fej1TWiHPxo5SuHrnCBJccCHTrm22SAYsZkZvt",
  "key21": "5eyKBcnDuzqf7hB8n8QUgsKykXQy8mTa1NUKLMcykYNi458UmQ5KEoHDEZok4Cn7WsQqs2WtqjZN1yECBaeAC5s7",
  "key22": "2z6VRWRJEhRtvTrKMdtE7HZ2wgyMxdh4H6NUBx3tUq1afYujcecR2Zo6iDAeRLZhjMuqjy6wvcTVwd16osk1nj82",
  "key23": "jyHvSh7ovHRSgetc1QrXVXqXoXLFxjF9y2RPK32u3vs68CBLcGFzyvBVYnSY3T9dneheuFJ3ipMis8CQio9hSgA",
  "key24": "58EtxwTVX5Xk7ohVcvSMscmYXUAQmZu32F9yczeNfuCdA73oJ4hjqk49mpRtidqH7NbEXSuLiPRuXJMnbGy6itHE",
  "key25": "kAgVpCyn7bE5D8A9hgGQYU1KpSSjqFequDvkeeMmHsoTK1nRKBDVk1J4YSR6kJj89mLJAxTmpVpxFEnzr8qGiH1",
  "key26": "59Fctxs2cGNTBWNZSwbWTocttdrWTidT8Doj5E5ZJKBxaAGvBnkJf4d9hrz8J8CUKyde1vhk1PhRyPjqqM3bYa2a",
  "key27": "5G8WGSMy9arYTu8rmnRqTd68zfbKSfA35tAUod6CDdBCWa1jXNi6H9xBehUfPdcuKqVXuJrwPHDPRfuFtgGXuTma",
  "key28": "4g2Gzt9TGCNYbaJAV1yzjx2rmn7EyeipePQ6yfrwfnpisKxHN84rdxbA7SaRLZMQFUGVG2popLUMExu2eYbSa8x"
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
