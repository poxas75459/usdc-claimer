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
    "5MVEBC6o5tkqvmnyazPokowL3nSUsgCFoL4y6UUuxKZ6T8525qmaqDR6CK43iivq7V67ZrrNRYPyaHiMq4S7wK3G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BNQSVMgwyCrBb1Hm6b3yhMpyq9n9kmxG8bduAgCZXN5GpjrwzLdxvVDtsfrUv6cA8eM6ozjeHVrqxVpkvP6vkLw",
  "key1": "5zC8WFnccYf6dg9mqfHPtwQVPWJcKFSFRLp98RpU1qW4YWagr2tsDXdFxntFmb1ro7vME4pftkqwUEETNQtA8uEt",
  "key2": "26xeNuAtZMEFPoicT9CySSniujsCLXMiAoX36bSzYtDTR5QJgzEgPxgM2gR94yh9spjHGfrcXi2HvULfasBW8ciX",
  "key3": "2DDDfm22YPCx1NKv4zWAkfg4GfqN31hZqSGb5HxpZE6bt5FqEcvba5uVdH7trNge3gVtQMLTjo57tF4tu6zB13C7",
  "key4": "3FwkyiH9nvHBbf6PQWWn3xFDbWhvpm7qegY1GdPpfnttno9Rjjyggsuv5j9NJVKwrPhsJveRbKUULeR3MMubRpRM",
  "key5": "2U1Essijctbj71x2J4aT3UcdwCiznTBgFLJZ5XyVEdyrsUQeQ5YiGzT5uL7wtvAJF1S2BfdgWMPHb3dmngqTydez",
  "key6": "2ZWwkeDNND6fkpYVE1PUxZ4UxCWm8VDPcybpVhKZ8uZ7xvtuXB344adceL6eM1admks4v6TkmGDLdiPCoUtLY8EP",
  "key7": "FacGvVfWnKqxEtPMSQGKPPus9nuVDNctjLUdRj8uYfc9CNhTrHXJ9Bumbfmo5cQHcGGKsp8x3u2v6FZBKxPcVBP",
  "key8": "3GfB2aMZUrWxm3JcXjD9g8rxNymxtY1X6qt69s1KvbW6nWSjNr4X8N7GRzmbSegMCDZKdwLDVuNyC5eX2a2NZ7b2",
  "key9": "4ezkSrCMrsMRnNeCTrrgwFVPi8uMyiag4rsji56jcjBvD1fFXSt4mMNECfjyBQkRyahJb6LQBt4jXDv21Sbx49EY",
  "key10": "LzxfqMyJWqyLwJiJx9Qsxvy5wMDS7xJGoCpWH8w9knfiSwsDZVvnrWhYugE5AyG1VL7FGoo5KYDUQ4f6nMCH1qS",
  "key11": "ZxVSFo1ymF9Kg5171pijcrXmAGbARN6eHThmPgoCWL6p7zpxP3aAdVQfSfDE4eLubFwqsKWae4RkK92e8ULWvAU",
  "key12": "hc7orhGftEyixDLKWgFR7UaMCbjNmMfpLMAUctYSAeTXZZTajRcGvPyv8Mmn7pNLVekQ2Ruf3V8mwBfbZZRFxLs",
  "key13": "4ZP7cCmCBr2VsA2TNFmmVm57o71NHBqnMmPmu4Hdn7VA3FBz21M4Ntj5hy9BV9dgbUASUDo36Nissjn85F8tpytL",
  "key14": "2frCEB5GcRpHU5nwwNooGzv9PKZMaDYPCZq2fv3urK8GTenyykdK7P48MQJR9hBYByTecNHz7HKPm4Uz8ZcMRm3M",
  "key15": "3Vz6FfuLtHvJq1Ama7M2PRLHgiPWUoU2xB5zwCkHLzLnT18BrN3ysZqm2KrMDWyNZt8vje171XXF3S9uRingp7BF",
  "key16": "2bistEaTNS5ETXWJfvEmQsQCtALLuk3G95fHKh5RUJvrpVDVN4Pb3S68rnZZzPD4uYPYBiw6am3YSWzFHr9PahX1",
  "key17": "3hvbDBKfUcvuMWcP2XCZPb2aH3wGEy7KprDUEn5Ca7amhCGbWz49ScTpXCBzh2k21qGQUqYJNYAcySUgY34Y1YY3",
  "key18": "5ZwkURbVbPnUonCmC2JgLofuRSQwZnsVdGoBpuHvKXnxmCGcF21C8KFk6oJufNNUe1sfdT8BKGztArJPEhaaiDhz",
  "key19": "5cFJLzBZBu5Gkodnqk4RY8ZLgdMRhGczBizc9g6RxnokEp4wKHB8rtAYuqUv9CQDWenQiFxwArfYyZFzXRphipft",
  "key20": "3WR2n9Jz233sNsif5PUjLA92j8TWRMVEnxgecBFLrPEntcgUQPzTCsusqfiWRDEnTcqXVJv34aayTPZn5HabgsH7",
  "key21": "3ZryAMh9Dyxd6JjyiZpiBkRuKqZTfKuw1QoTBTp7U9thpmPdbs7rwhSYckmDKYaz7ERXXkewYA3k1tLj3kxdtJ73",
  "key22": "2A59femrBKujZLKJNqki2Kb4ksopmyH1oAkrqzumsyp6eQhiBRU9SH7H8HBPbwYCVd4XnZtpsi1ULUNGKoFnGHQd",
  "key23": "5VsdCcgEe3ZDCGKRqMGWbMYUcCQ6AFDBh4dvZQ2gc9eeAKGWStphMfphu9S57NNVJjMPSoKBgM1YV8ZgTxe2GEi7",
  "key24": "2nCvofHgKjEQBnFjU3FSBMMLPDyCBq4Asq8yXxnyYMoSpxjaj7jkZDXVwEeiQQkPtVRiUmgidkMccEEcy89bPgvp",
  "key25": "3i6KsHL4MzAgiEeRLVz5ALZoWuZFJoieQAfb6KCDeVc9atJhZLvH3gCWaBmEVH9DDbwFHsFKJsCb8FGGyKsyRGRX",
  "key26": "3Pb4UEcUHkFUgHffwV499kq93QUDBMXKs1JcKkoyHZEN2MqiFtF2wCih6qkveih3rZfDobM2j5h76Tm6CFzcEwjs",
  "key27": "4L8ZG9RvAADZjgGeqkPnm9G4yjvAv4U9SbVqBNJJDmqRaMVg5e2x19eAz1j2XeWXUMXWhqXG9Mfn1sDiKXdneisS",
  "key28": "34PX7TtoYhHiB4LPkp6yKzy6DFi5cXaDgCqrJSPhhZ7PP1tWxC4GrTZyJtJ8131NxpKGQvZTdGcEWL97CT1J16Fq",
  "key29": "axdvWrD2Eh7cBbd9qhFZ7Jb1UNJGDNyMrGHeY8rXYPcsoVoov4guMdsrY16PGcYS7ZZ2Di9gfDXJPxn86tzpx1o",
  "key30": "3am9JLp8Ne8g5wgpFgwRaVfQtXGFQhg8489P8WezM8rpYqAvQNDwJ2FD14JCzkeL1mHXPsz8yUTK7uWmLParrYQo",
  "key31": "5dNTCpvyPtDe6QK6D8gjsSxhkJ4P3qjNuTmDU6Qn2RDnE7nboppXsPVk2EnHNnSQLpzKFYJunD1JVqFKVCVdeM8r",
  "key32": "31KJpzanhnfynfEWR6uzyEHySsz1KZ51ySN3u5ggjVJkkjBT8aCPRymJjuky8LJV1W4ym6a6J4b6ad7rWcxAUowW",
  "key33": "3KvvJPpgumGsLqMmiyViptznYcnUZ82mGE5njxH1rKHxZdKm5nwDeVs85fxTHqLh3sDr98DkY7HX1Cb5TSCxoFvR",
  "key34": "eT2i1LZNMoJhWtsZdVzwimu2bLvotAVchkbsRxMCEH2aLw5g3nhebPFd33axh1VYMJHRCxhRJGoQRsZkAUoJWhd",
  "key35": "4b4H1gc3oyjwgC7mUhWjYsEeWSGtNYtgKq8xcvSCWJZn35pKUfRsjHn6mPtSjZkDpSXmNkWSWbae6wHRHB8RYdRo",
  "key36": "3ZWcXEF6kd5Db1LiyhR7wqBU6sogU9M5LUF4VEuE7KPjMegmuJ2m1zvEVvxmWXnRGstFKcG2kDtL5Nu7FBfSESw7",
  "key37": "5oneBVKNVmrqrPqoV5CBnpjzSUWsVWAPyfCV8nK4iXk8nVSHR9HJby5FsRzoKy3efJEwnEVsNVCso5VPEwpMFZ19",
  "key38": "3GK5Qd4JLsQPEe5mGorHh2hoVBvKzsnzoMRgTx2J4Emizdb8aP5W66mBnm2WLbSePEPEkG8L6CqisMQTwW2bf1gC",
  "key39": "2CpKhZHpaVi5cj5o6x4hjnA61JiSfBt7HHTtuPus6EUpjBFELQozNqvA87NDrN6dnqKA2JmfCoHRLb9SSYm5fYmB",
  "key40": "5aMfuyP8ox16nC8XgAFbUYuZYAfp4ZL2AcLQAZgVwgA1LJqNf2eJjPFv1AKC9bUwTUChULHFWKDYF8HnuSvnjLoF",
  "key41": "5kfv8LXNmcUbeLR41vVN7ZDzr3cotfLWqxuNtNkrWdiNde8GAdnQ47hqiF12tPsZ1tX6Bg7x5f2WMaWLLoReCyus",
  "key42": "5x2FFzWFQ8gPUzPZfdmnxVUK35VyW3s7xKVrz8WGaYnKTu3eLXnxPi1q6CPBhSrbBWmqC8Gu2jVBMXh6GmCchGD6"
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
