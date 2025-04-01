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
    "2RSgsfUs8xt2yvFtHABLxt8Tgj2Vkykkc3AjrkqjGHYGSxTh5Z27Rmqeetdku4JPsch4hGwtMHi4vabcGnZ8bAfy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pjNZzEPXzQEz4MxrPASZRmJAEVSqTgwvjasZhyp7rH8mCZRauSWJR9aD22RMxjY2Dukp9fBFxFUhqDBw6AfsU3f",
  "key1": "4NUUJnZkc1fBBMU2TondVGuzDkUjumejimru4Ea4acKG7fDSqhm3QK8YHBSQeYw6FScMihqHJgh1TTmYdQzNMMyh",
  "key2": "3HN338dmpL9o699qPsGjgyTQzVNJebp3X6hXr2hisYcjEpy99iw3qHCgeioLs2AseTxuCKHiPXavgv36fjNVjD7M",
  "key3": "4C51P4ojqc9g96hPTmsFEdK1sVkUEzYeXsQmLADhd9t3pki3XZabgyHPXHXWF47gurhEXFjbPgjtRUTX3asfmBVX",
  "key4": "3d4i9q2RqHxFfukccnXPcG2dsH4T1bsjjW1tQodKGyd3L8zAQT3R79FNb3qnhkLjM7nwLuGCQLDiATvG4aNWU5wt",
  "key5": "2ojMVSeE6Ud8dHW5zNoYDDTf1vwvZnPimuVEb3RddRQb8ijGQwZitjrF1DeuBASXgj6hphR9XcNrascsqP5YJpeZ",
  "key6": "3eJh4VRMkLGrNHSeePX1pDPgJYbEGuuFNjFFnb9umfgHmUo9J1VHESKkyF5fUtDW5rsirwR8Zagtu4gWCgo6YUGf",
  "key7": "57yuY3JvHikNAoE83SyPGrA9iU1GHRSof6MB1wjXJHu6je7noZhZpBX5kyU7nQ8LPcQ7QEKyNphrQN5AdKwUF2kP",
  "key8": "4kUZmJkvasCSqKiNmwcEJmF498RaPkGLsecVysLBbWVwN5vMQNwnvjpDMzyNxLVhKfxq4j1pHevkuWNbsTAPudG",
  "key9": "3KSLVL2P9929TTa4ueQgvEV1JNVfUophP4brzGNqxwGBUNC7amJ5RGvNbzAJvr4F7se913fcWVrDgueTU2UjxRgS",
  "key10": "2idQewFR2m7Y6NKpVUGMQYPvmFLcg45ryxaA9ufvkQ4eoEigxYE3Wdrkxbbz7c4XJrotgSFKJyHeecojj8QQUM2a",
  "key11": "3Je1sF2duUWfhYEJRbmyBdg216RbQ2NeawxGJjUy9Gjqa3kcQsArxXpr4Qvs2fHWkxMStFCdnzT11abbnx7JrnAx",
  "key12": "4uQDdPCEoPZ9KnPcZVQaSx5azTWBiWP3K1EfCiPX97hbz9fa4AkjZs92UmvTA7bJ6GbqzfoG9vrcAVebwUiiCtmb",
  "key13": "4HL7V1Jt2zJtiUBJKRwmu4HjaTAbq6VeqQdAQyZP73239FsL39yy3x1hx15FNv9EX48FEkGfu2iVmkj7NUXBKYrF",
  "key14": "4u5ktzGfbkWqYfRgKP4MtnVtxUBnB2wPnWeZpfqSZ6aKV6za9xkNSuEcp7iStEf3GMRKavNDYgLmky3dg7bzWtgG",
  "key15": "3gmtdZgTkt9LKoPufq9N8LsCtfZ3A6C3cgX4WK7VHkpxTuJjErhkEYotYR6sTFAELzmS7dwJhRo9KvwFnfTdytvc",
  "key16": "2gcnKP47QcZTW952ETpAcsuFpn1SyaFJSEc5EpeKrhV85h59Xmb7LHJkaSh8WP8Fy5bBAyJyK9DGXBoPQjVphPaw",
  "key17": "c1X84s5MmVYBo1r3Hv75fL5WZxtV7qeoet9mtzxVp3HvifUUwMhLLX2p118gfyTMCv3GNJUHHtap69CTSTKT16T",
  "key18": "4iK91BFCc5PJ3JCWghyREEGw8WzYDJ2ce2QuoWxECvdhLVQK1jUQ3wGNvE5WDmvvrgEBuUgbDGiVYJrWAwhtbvE3",
  "key19": "2TnN6UzL3jR9WrU7vKacZR8TTjWDQGN38XKjP8ypDDDAJBUHjV7ryJMTWFyzTbU4fPCdS2cWgt9WpLta6E9es2dF",
  "key20": "3eP6dXvT5YnXrwz9YLPT9CT4aWkr4ExUTV1BQqP4Jpb4JYPxvB9A9BBQcKM3Eh25aVjjSze7CPCnbAkkZL4KDZVT",
  "key21": "5N6riuEr8jxR66gj6TECP8iBnbNsk9B1aLT5zoQtr4b7u76cPxvLx2fu9jq3JAQYW4MYQ6573dZZd5XdvZYebyei",
  "key22": "3tkPpHUBd6ZVvdnuXtkxdjkjQK8QMmn2YbJc3XEmowaGyGiZq3KXK3FmX1DEAa2AdhCjomwQii4d9MhsL9YVtQvy",
  "key23": "2ZaiS82kjNS7k5zHoEA8YNhvA57kHXZJnj3SAdHnz5wLemv8nWkse9VTFZpQ8JDcV1qw7eWRBM9XVdiVDfUTgg4q",
  "key24": "T6L6TqTWGAfHKAFCy9N9dmtmKiVexeBnMCe8eCuBYw4RHy9xrKRqC26rr9WYt65AAtJFTPQtN8PBQENDDZK9ShQ",
  "key25": "5MDnmbxhqRCNVp8b2wRdT7Gfmy8Ke4M6bgvM3i5GAV6x9qFFyfM3x4ozpySKHL1zxvgAJmZGQ6TyYTvD4pBHV2UU",
  "key26": "3KpU33kzCK8pNcujumNNuhVGki1F2XTsotYLXYRAwHwunaAdaHAQ3yDjq59LFT8X3H2MawVog3rRLM3Zdt2Lnqvi",
  "key27": "5D4TNAQ8mxBw6SCUGRp9VMs2zcv5mxeVVP3S91CkTjfXBMAXKk26s7r23pCZd6rDUTiiKYkR6tHprdUxxy6ZqeJG",
  "key28": "636pdTC5Z82ewc13pDqNXvAc2ojXAxqGnd4HJUonKe1uBm9mypbz4v1mmZKr44kzaj3v4xDUEWa5RH8SeMwh5fQn",
  "key29": "bo9XbVT6qkocgd7gw6oWBgLzHMkSkWPidsMPj369Doe2HXf9YtVz7tMrcNb8FPVPnuuyHM4ENX5WoHcgirNowm3",
  "key30": "K1S6m5ivr8zXxtb5ajPqac2V8gPorSYuotjCpSHDxRsH3XRL9JerzF6PtAEutNxcMFGyZtExjZVu5dTsCqnfk3P",
  "key31": "gxEkMrt3b4ttRTtNJpHBWCTVbpFPvKrUrgdvPMch7qPuGc7UV8HqN2LYsPGu7f2xBDqv4Ka87PFSr7CHAhvurwd",
  "key32": "3bJKxsndmeE4DNyGd3kaeEfAg8MZxJwocXxvv7YQ6CyQTC1KgLvtD4wWTs3KKCUuKwg8SDt9qvTu9XuDAn7s9L5z"
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
