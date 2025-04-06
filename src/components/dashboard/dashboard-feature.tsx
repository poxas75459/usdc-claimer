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
    "4747ryYyt8vHbw8CM5rhmdjm227J2HPmGNtdne72fUfjAma7NVscYLRhMtzt8rKuGGP2tURvADvU3J6R5JV76ELD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gBn8cnAQJsa15hHYGmXEPYCoFsNPu23Sa8fGotkwRf2t1WKYZc2HPKEYFp3qtkp1BNGxRRx5Mnwatr7CthRwkpC",
  "key1": "4rAktU63QVYqYRfGHoLv2CNrBWFCwFJJK5TYAVtPuRsHe9kda2dXLHk1MXMfbHrnmipCpTY9uRjof2qCJVyQrvsQ",
  "key2": "mKhZZE1x1LxstthPYdAczyNLzGjZ1tbAfgGW8ebZw6TX715sJymuZPDbvLieYvkCiozgpZVwzGNNv9ri28wr9fh",
  "key3": "4Uv2TPLL83E2f7yDyLJQbqABr5u3iXVwSfYvbVWWgHALUHYkLydP5S5tjv8eus9rPacYhXFK32Yam7iP8f7KdKzH",
  "key4": "4gHUPh54HiZE8WD6uFxRSwaxWt5CiUy8QUWgSYmbtDrhyAix8ayXhcC3Jfij1KXs1a21vebGQoymdAfjE2LJRqs3",
  "key5": "3rPF3YmCYpGcFidLyRbNFyXdTZd7EpZBedyiXrXekWEJNx3Ey4k8pN6qwrttJRMFYoHkLuMmPRFT8GPVZRMX8sVX",
  "key6": "4ZGyvRhC2QeJL58bdooTj64nGw5eFKpPz1xBk5ZAtC1KNrEwmHsFtDQaedDfc6H5cMnKnfn7Ez6fuhFoqxopD4NX",
  "key7": "38SjQ8vPTPJnGc41SjrRsRBvWd74mbiSBF48SCwpvmSibPjxx5CdzTsJRwb9LRcswpNFVRkAuH8fK51EJ5QcnvXN",
  "key8": "4Hs73brYVEeWZsDD7rXuWoetu7tKZHQXQa2tgHiUGmSMWe36qLMW6dJvFc4oEqUg4j113r7mG6msx2uR1mBVEJ2p",
  "key9": "3etwHedvqsA2ntAor5QtprpiDAMbRyJmoCpAWx4KdYo3vCXiQT65deShP7Ze3nLA4TVno5XzK6RwwDguvNvUpST8",
  "key10": "4Usn6Xyo5BHz1GKkUdHL8SCkJhMNENKDzdZiK3SgbycofXwS9h1NFgXTa6A9qt9HZHs7sp1uzozaSAJ6u5SuSRt4",
  "key11": "2b3YCt3knk6xjsrcfPft8MLxLmcf6wMhM3wR2QkMTevr5uvzevuGrWWs3crPiDuNyfUnK4nbptsqmZSRvNC9pug9",
  "key12": "EHeZVd7rZdLTqiiyzwUNgXPqRneJ4bznuu89R6YSojit4bA3DFapSGhFVo8ZJiesnwPJc3pYQRXanLkaR4KANRn",
  "key13": "19dLuHKKrjEdt28wVhUo61XTVWMpL3qLdjWwNmhYaSmYPrFTw6CpWxHWZipJU9U5F5hgtAiDcg7jyD92Rvqg84b",
  "key14": "35XPC5niFCZRLpMXb1PWFcCnYDQgoswb1pEmVRWi3rqk3N3qqThyNmLtNVbhXvatAa8w3gCdFTAAH9UoxsKoTWot",
  "key15": "4ZvG2kzni5VR9G5zB2cKggFNdLddAhc3eWYDKt2XTFfk37rVi9WUykexv8rhBeDF45bWsKM6J4pmQn9rrrHSwJsy",
  "key16": "26Gqzha9kTUyeve3oQVZUf3eNi9S9JiBSjL3VeoiuxTVBFxyrM7fo2V6jyr5YsVykq7BqZ8k7NKeYkjqGHLf8PHa",
  "key17": "4chShQzzWXCsBjxXirqC1YqT4eqjVLa6PkpmFgcFyeukJmUp9xFyy5cCjhYFfN6cBtSshaB591yvkXqTLx6XR5TT",
  "key18": "3iP2piQ7r4fnabiwEvptyQXDqBHXLbr5JsDF7xkWkwrc3rkNRSdmWLa1AGHGqzhhDiKd7jCYJRrzeoEz4wGgZprM",
  "key19": "2e4QC63LxpfRswKmYaUcDZrqEn3ZS9kETWuMNuE8jeufse6hmtY5ujtnCJVPMf13nZpjFdH1dKkbaGSLTbL8J55Z",
  "key20": "3h2i1aZGVtNnowuTeFA9orDLBsk1Na13vicDb2oQ8y6uxbJxuAxiQC2stjYNTNuKpepjEF1fyLJFg9htNpEcJymf",
  "key21": "3SeFXug3Z7uF59CBvUEPsomAcX5kRytqopsApcifPFmRLvnPH2Meozmxzr8RHcuFohaiN7nM8T4ZPT4um5GDrGvF",
  "key22": "22Te7SyJxPFDdYva8JWcUYLW6pdvTvm93LXVhQDp8Zyoe57BJSkMCisqKpAzTVVvW24xMrTLTSfGup2H8rLDTSjY",
  "key23": "2UbZgBHPdPoHjuyDZ2DEwcSnMczMKFsiWK5YBgDwVrqa7xJmqzmBNfBT9qHTqh17aANBwzj4NHxx5fnu74QnrJ2M",
  "key24": "47Ckv5yvHbGjs8MXYUNEjA7z5VtN8zfmnLFVuZw7Nz4UUy4NfBhxSDQFPVsAY3YYFzzbqbknD8paAsu7Pi4e71ZT",
  "key25": "2Q9yee5oMTj5aeojZnpu9UUL6x3aVvL9H2CqSmVLcQgFfhsDRgWLcozFkfqRoYGPxQXrpDPk7QfkRdtE3qWAZQCK",
  "key26": "BS1c23Fmrft8k2z1FkbStuVvD9oGorRhdFN76qJPKnvfYogDK1ncte2Ptz5TBZ6tVqZfPboD7hPshFznxsqSNJ9"
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
