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
    "3HAVCqZ6C2mpTE2UnS7qgPpfW8vRhtVcokKeZ24joY6PABXGZhYyeXVq8ofu75e3HXbDumdqr3UBCKxDiWfrsb2j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4H3ndnddkc3sHNexCdMjVnNq9466QpHMSdgyAYKkCANTrgioR33gRNrk5DJXoKjKAFBs3PzHVybocgnyhAbiokZ4",
  "key1": "4uttujFLsvopPAf3p2ReScHuqyv2wd5Dq4ocBhwJTc8JtwKakXpGLgjaWndXmvyJK1MdBz8xYjtrZRcchnzw65i9",
  "key2": "3uEytoKXgmwuNHyTSS9XCVKPeHTPQq1VDt1hgYX8XahAEAcK4Bw7JcPyjgee94F3J5EdQFhRRpFfJHqLs99kNFVG",
  "key3": "2NGJC9J8rCKZwY8uMyGRErdAxyQJBED2aKoGxgUWugPoxpSQ27r5c4PyGYoWQPqY8F6u6fH2FMq4FRgKSJZE8C9M",
  "key4": "4JzDx1u2kdke83w6FzcwcRo1gQiG7xPb3vnJ1ica6hYPS3nhtS3gu85hg7w6cYTQd1qy2G6dFdn27BnrghcCEtoz",
  "key5": "4ikaJJfRiJXJaXDm1t7wDtGFu6xc6LnwwSV3wtYUJBMQ8gfyggZfdJPGP24Ff3qN7ahLLRFffwr9gzg75emh3GB6",
  "key6": "5GPDCZMm4MoAqF1CYkDTTf4rEbjNCG2DS52fMvdoppsJktm5Z1WvVPJDe5r4XEpUQKGWDnqyaYskAQrSwYYW477P",
  "key7": "29HrvNtxezKKhwcHdi9vHLcED2PJnn1adqq959jgsfBLHqRjwwTdbps12zXGLQMor9FSQfoNDddZ1DWa22X4vcef",
  "key8": "2TRgsSpbEqFJS9wNK7sXCT6GPRXrVpyRzR8yotwMMHzjDANQ7AUKDx1kUUTyjDZpDB8kbRemXrmDNQnZVaieNSaM",
  "key9": "PLek3DUX85NUZ7CshJUtg1d145s1GhbNCp892sovsYMedAZiY9JFCqNk4ZfUcsEcSCUNQLD6CFT82PeKNzhE9Qr",
  "key10": "3L7p42cxhgVFBtfv92erHx9FwRwCEZ6Jp354rvjs2c8YRbTzm8Zz2ituDcEDrprAGV7fYoJsPxZ4mUcH9f4tHGtw",
  "key11": "3gcQEBsYmXtddQKpvTaWaQqawGfu7FhbxibuyNop86pdYH6phSnx4UYfLEsCG3CbLGa6vB3G2FP9ZgF8G2wLBe1A",
  "key12": "2tQNVE5qDpw6VEumJ6vPgN4sqpzVePRM7CT666uRARy9jDi1X5WwiLbAHLxgFEcG13T3UqCdmSN3AR3FVcGHjxLN",
  "key13": "2ZtKKgBJFz35nVEsMKPBs1N9tXyBenPuua79gU1bMb5UJMrVLg66sJMyKnYa3FziEMGjGK5YPzgvKBKYguJKufbj",
  "key14": "31uGfXxUczsFbH4zoWnJNkgZDDmkDq942i1iRcBEmSzsPp6GBNqn9T3L6vvmussTis587RdmBF1LEC4A5u9yXCAC",
  "key15": "4DdqAuTBZyHu7WifHJN4FCgGmxzVN5rwDctgYeFBJ2zkvB2y1kNzMP9MHSmj2gmbL2SDMe5pCk89T592y8iJzk4D",
  "key16": "EVme8Tja3RcaXC1qsMkf1RqKRNLMYoTcncJry2KED18oU6GNCWP7aCheiAYzLESAmLuJ63uaJdNiA4LtJjBLzEE",
  "key17": "5xK41RCbvKm97HSJfm6tEQZc387WTNF3KQmj6N7m28iJ9bwiHwihH1NbB48RMqFgBQafbZpt9AoVuD3tC3r7EWpM",
  "key18": "4wHut2DeTyiLoZzcpgNdLNHETiJ9UBdAirYEXzp3KqdW8YjCCaXffzvAKovb2mSULLyQK8R4eHrusv2aS5CaJ8km",
  "key19": "2hH3cFS5dWJt86X2F7KNJJVDk8Vnyn7KacSYtozjZM5MtPxapiBj5mr5CAGTuPuKGs1Dt4NNTzMZdP3Ucx6Suhmy",
  "key20": "5JCvorUKczxaEgPy9e4iwZmep5K2knPnT1UnRPc1Ym1kb2kghFNatepGZ5FTwA5teFBe8NwmJ2P2iki3AN2rfBzq",
  "key21": "4qFdHm2bf348xNuhtuyFh2KXwebBBdAK6GcdY3rLQQLfcNigq6c3w4GDg3hvNSF15zZbYrNKc5MUVPz6cCJFdvqN",
  "key22": "3UroKhfqzQVqUhV5Jc4Zdg4skHA3dCZmsNExxf6CCcbyepXo6cCpFn1qu6YMkFkbpcPcxxXDgsdjsBU8UbDpQR77",
  "key23": "28HFaCoQLwSGtYzL8pvFGGS6jKq7hV9nZs31v9iw68qGicgazeaTFnJP3Uh4PmnpEG2kYsP7YVg8RjJic9W3QZ3f",
  "key24": "5KmHbmm4HmTUmkf1LGokVGAdmzwSyuVYTpVBzBd4GzeWdCSR9Fez3UH6zpvb82ZmKCLxXnuxCxHBYvQ4piNPyA4o",
  "key25": "5oSU1un2f48Kso6GLHdh7PTGj5RGjMGPbAujBVDA5EuygfxpTdskruzmGs8Tbn4x374TcGuicUiDcVsuzkbhqjEo",
  "key26": "3svFGJkrkhpuf8Dz638drWRs8PuG9gtcXJqGuEvbcRJmo9ZHMQWZ3prYE6qwCJuzq787YuT2F6117uy2X6jL3edk",
  "key27": "4sGGxcscbSVgsbBVdh6iz8QPuswuQ7ffUuamgRx5EYyiYhsAUJ5nYepu11wq1AuMxoKrhk3MHMBf9dpzKJ8cjhdo",
  "key28": "2y81k6NgWiCX6HPEBJMefhe8tZb8JqMqrZBbbxwGD4onVuASu3HoimomnpadZVu2M3ZPPhCbdpRJWKndzcDBpceb",
  "key29": "2MuotkbSNSTGec4erwr2gzoY9Nz1cQSz9D6rR27mnWLrwA9vQJnaEZJ2RKepAP8xK1FsqMokrojtb8nf5xf19uPQ"
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
