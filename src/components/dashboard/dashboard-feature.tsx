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
    "5a5fFNmUPf5a1mCTNJKfwAQ4frF1ADRsMndP3zpDheZJq8eQcaR42ccYA3efPtCikPbUDTXLbHaLocvMLqoyVZp5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CiacFF7WgvJByts2G2QvxT6WPDWu2Nhg7U4xCTAqwJy9wVUmBY4cHQRpZvUTJfX4ty9ARn68gAPaUBz4UU6KtVc",
  "key1": "4CRNr8qTUgxuWn8KKdTLYcNz3ccWveBWQootM3VSVHj4eLeie1TEy4rc8zE3CLzejkSoEbsYuPVFp9G5syxAJkfc",
  "key2": "xv6tiR5VSs13e8gUqnuZujSx5RgK81ReMYnEYGUW9hDgg813PVTv4gbeCAM59QmLcNrV9kZZdB7GswnUWmZkvji",
  "key3": "36ucFo5PVAZcbcVXszyKhXKeuWBLLbZ4GYBEZRF6Pf21yNsWcAP9S6CwUkkQH3XwXHHfdNjtkZzLTHUv3E5dxw72",
  "key4": "3tNRnNHuyv243jeGjYoJrFxmHYs4suessiZ4zTyXb7eoQLMef483G95har6opkoNEYLPKQ3EFnMfgeDkhYg1yhMu",
  "key5": "WdZ3ALr41tqCj2T1ut8NLPCs9sidMLzzfhMVGuH52bEUCH11hU7ouB5pmhKtvnnok6tz9ES3nD1BPqQXxsuFwKM",
  "key6": "3S8MgBxFhqRX67N3apfMHXtqRAAbcMcYzahPCvyoznkxfnbTBVMwEEuwgbkeywm2jzLafHm5cqnXNV6S1b3yJD5f",
  "key7": "3iQCdQJHWgKfA5Wb3qV3h5EGcqRNHqktDA7tbFAcNqZRZodbgWJTZAhGYvRzP9D4yoyv7nS6PRJ1xstHy8fEeWjD",
  "key8": "3hj6ApbP9hrnJL8rfmE6DQkCTj6Jk4L25TyiCRMW4bCCbSijzXLH1TCdvy9mV5JWJmC24NYo8ka76es4pYh8qGTA",
  "key9": "5ajp97ivpPP4MFrQ3B24qJzqXfSnZN2DFJLwE9qnyHVhCvnAMppzNfnM3HZ6rxJ12A7o2tbrN9yMLyFastRGt5ab",
  "key10": "4wpYqPKgzjvcabJs376kFnuNb33k2TKbv9Y9QjwzZzHUimRVNuh5ecZHs5oz3aifQQupFwj2KmWgxi6fvTCdxVrD",
  "key11": "3jA8YWWQaxaP3d2aBs7kT5pYTapxi6GTmox573RvdDjeTZdtiUWrhzVX6CTKaksZbCRjJrT4djDUzGx8KMe3vtwu",
  "key12": "RFxQjeRNfLr3YpZJL4LyDnf7J1LAfxj2PA3rx3Ubk3jN1JpfqBhrBYu6oiEK6bcbjDUuK7iuBHdBhmik9VhFhqg",
  "key13": "2nGePmHM2kp4PrTbuWbuc4DpZpjxkE4goFsNqf8imCzJGDco5223GD637KFtJxXBiecd8eR8LDxXyCAb7WnyRRYd",
  "key14": "4n6A7mydBxE27467Ba1zQPcwUMsNkPUknfrpEvH7sczMFchwxQ4y498LT1oxAVmLiwFXtQdJM9SGyRpssLgUYt9b",
  "key15": "2Z9M527Cz4HHHQjiFsM22mhSj2uHzVHuwone5c3QopHP8SmVVkpQfggXeqPW94PNdYx2TcShbDsLBoJNm8Y1Lddg",
  "key16": "3oJyt5QW6zBsUx9AZJDQwQQ4A833bUvzx3QCvfKHKjwQcUi1FDHPuazWA1ZoGyY7nB7KcKXPiEiGjRWs26EByiy1",
  "key17": "4myaNhMxdv22Vt8n9G21B5bs8ZqC9fU1vJjCJiTeMxmrG7pD26dSX2284DRzYrySBvAUZJgUC1fwC1UppLSQtLF8",
  "key18": "4TBfK5iqfLvreZPSo9NWod4f3uexaAakht6j8pUCncXsH6sas2dAiwq5Tiz5dmSyTPi9FuqXPRzKdaXFaLrTdtZN",
  "key19": "4GKiNaKDD6gLe4x15a52XRdRZpnaLFAoAXNWbqf7CD8MkqwgCWW4fk1aeAknSyUADiXdXDvri6u5fw78dwnVLQKn",
  "key20": "4GyNCSBqDBnKvVkhXxJTSzTKCyiS7rf6WVc3SxNNoXHARnhX8yUTyCZrpptDoLyWe8aN9c6J29ngp2vMc3FDPgpf",
  "key21": "2FjG3PFy7z6S4F7EQL7MZ8Bow7KebpQaFLAdtR9bBdjnTzLtQkZz4t9uZLdVuaQWSixHNuw7kbE7JAU2pXbPjrkE",
  "key22": "2jHQf2M6yLqjAkKLBWbH51JVpMVfbKWPbNqyuTXsfY39idhdJ7o3es76kjc9Nx3TB1DdmoZpXhxUqFw6XKD5rdn3",
  "key23": "3Rt2yyvsEZnbPTutV4kh59EoxQrQfCzzSmyhJEh5X9XjNM8MpSwsMJ9RSkdLNPttYDL5MMhrasWVVqd3KeDy34X3",
  "key24": "4LD7X2Hb83qtqMHrY1JLt6ZmKVyjZdVdK8nqjNnzjVz78MecieG5NgThhce8pie4TrRf6SQ8KswQ9385Y8vKWaBY",
  "key25": "2NEs7Y9WSueXRhmNyxE7WZT839BGL8ioM8dphMoqTHVbjk8mwxXWquSntq5Veq4sezvRb5zb19hQ2y8AXyCGoL9R",
  "key26": "25mB6nNiLPsBqRNhMHQp7NjPVLhTwLDxZ3WyFpd2PNiSWByeuSHPS16Dg6KYsxMkwkvcKsWSzz3e1VJb9rac3qJp",
  "key27": "47B5288gme4cKMGR1WEg2S7ufNGD6fvNMh8MEFPaibucVweeuwiPfknac8uZERmu4SdzfEsGyR6PG12ZsxV5kMW9",
  "key28": "QiWQLiLPpCzevhJtFevqTwsmKkYv4XMYCFvuok1s2uzDCHPV9xkHb4424A8YR9713MQfQJZbYVgChvQ1xiVXSaR",
  "key29": "2eDXdunYYBNz9kRe9wyFFydiGCWeUjoMsDWeJLpVSd73iwfdBGfbM3JZzHpK3Bv1ndgMJHDpTbi7Mv3UjT4rR3Um",
  "key30": "5upvFX77ve6mNvtJch3NqD4oXBZ1KAh3uzSnqBCPjA5jFostLsULQrLzdbyoebzzFMrD5NSPB9yAmArAvr85e46i",
  "key31": "5kFo377FkDDPjtU42vCkJNFezUxjYY23JSM744GgFjbN3LkPCosH6wRg192RiCpfRGC7sQywMuSfswG7yKGybwwY",
  "key32": "2G6D42sEtBzCE4Zi2UyihspeEy7LUL2Ye3cb7AVmaWsNPprBTCXygrtAzFsHQBoc8sfoG26X4WVdvRrLz4BUaYA6",
  "key33": "2adVBWhZxAq62dpyB52LxXBZjVjW5h1pqQjoqeDTzZcjtwAeemfYGAMR7GJAH5jfvVrYmFUUTBZpurYQxAD1BniY",
  "key34": "293eAv6ctFgYiqjw8NCZR1wRivPByb5YHwwxRs4fF49YigP3gGaUNkivsoUdpFUZ89gVhUBC2qqhk7E7Pe4cEnws",
  "key35": "3wtFJEtNL2dBs8E6Hvgj6bvjbuHihK2ERr6rtNpJ7n1gavEHLqyY2L8qcMaLx8Z6C44Q4xKNCnEauu4bWk9JquQs",
  "key36": "39TekBEqnCTnGJNAC8bJ4uPsRhyHfgKqV4cAtyxugHj3svvEndiidJuw2ecULSUSndZ2Sfb7n7SKL3He34c6pXcD"
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
