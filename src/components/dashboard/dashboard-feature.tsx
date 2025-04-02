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
    "4Uo8HhhNU8vqBMQpJ8YDuhNRFsfj43sMzq4uAkRbVL8sZM9HoTB8WHrPaYabQdmNA26GCXr9sLg8s7NScsnPS7F1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VfBzJHGNqMUFQSuzx93LLC5Gr8VWH6faE7rBdThoMzdMVv2KFecXzuZHpyWQFpH2CSZYGc5ErXsA3Gym6PEd4x2",
  "key1": "3HBLxnHrvULCixVu3AmY81dKwLndskKVDT78y91KFGWVjhrp5fBBuP5PSHdbF65dJtybBdXXCycCAxAiGSxQWbHj",
  "key2": "WAtPuMW6PWgXeahfErjD6ScWBmntZjJooZoHMB1dZ2jiTUGtXvCDcbVcCEFC3HvZLRa8w2wocXNCEP9VwWGsHFD",
  "key3": "3rUmAGwWWqX7fyN3qeekMFV5dJ1bh4HdHdP8nY9DqfhaJeHfEBHVZU2nAxiXhXBJgiHxKCiAS2g1UqNDqK1shkAK",
  "key4": "5hzzPtgJUGm4T7uYDpW6xLMGT48ycMLVGbUcMUNfmttUzNu6pRy5WtGoCvM27Dp1865iMfrPTCCe1T4zvNiK7cpq",
  "key5": "CHCHx6vVRbo9SEhExZ2EXuNERV6aG2LLihZrbUwLpSgS3x9WmFvBiV7QWSod53DquyNLWYSnh2391VihYfrMipz",
  "key6": "41wW9kZ19ULbxgbkgqRVNha5h9gjT4UVVYmS2siiBpBQDnP4o9g72c8kgMeDADZqKRLJHydh7mTM1dwXNvctTUR1",
  "key7": "4XfqnwYwoYNxY3zy1xxEkTRLCB86fHQruCbGUYFsWvuutXBvskfwscr2B6mbW7we2v2KqJbxw481fqzfMjCb8Vsf",
  "key8": "2VJC5rbiQRoxJovivmCNekCnMYgFULxAoZHDGXsgTuhMkT6WvAhYWbUzeEd3brHi5iZmcWkC1e2pG5vXfK2yv1ju",
  "key9": "5myhVyfXKNWsBX9LXy2SdanqWjrtLj9aePb7nwuwA5Sy4HxTwH6bwuMAZhaiVwvJ7ykDocGaB7buJ4fTodrN8P1g",
  "key10": "34ixvdabf4hNjBKBJiAP3iFNctktgREoibgWfWRZonqhcPSBy2juyrtpk4DAGUCmqL1RiAeHsfzGwnwnvf7La2tX",
  "key11": "Xjo5Rp6mL6UuqGjgrVYnDvfszPi5vgGcTofMyx2uecAY2H8VzQVKSTf76FMZT8Tp6zwXark2Q2U7NtEkAWbGmwQ",
  "key12": "5aAzLrFmvHJVQygvfcsNFHWL2WPxYQmdQBS6cAJe6AuSjxtFVSJN7YiPCX8GHwk3kkHPLR3FFydNmDJcNfvYVGHL",
  "key13": "2TqSFgyCqa9DVucWaUy3oKdk22UdsAvLTPYYmxU2F5EQBjeFPT7UqsXzbnnb2CpzxrTSc8hoXZZy7iiJ5varBer3",
  "key14": "5XDhGJGRdRdVjMVnpESSkQGc53uJjZTEviTFV82otLVsciLhidRQeCoo7sCs7XRi66JTSha9xVzGQnjUxM5EHhmW",
  "key15": "4GFsPZmfZo7VR4XfYiK2Fm6mLGQqRAdijoMN82JaygHd4n6jzyT2Dr4GCRBnEJ9fezzTgSC8MqP62ySQFtRQ8Qyb",
  "key16": "3ECKtKyh14YTARbQHCNFcByaFQNtmDJuCge4mB1CzBohoFsDyLiuFgN6HWBCKSwVKm8TUbKEohMra8eZmhfLuK8m",
  "key17": "7eP45wZtQw8V9QFYd1bfqY8iPopPMm5Tk3s2zC2zND8JTp7vPzgciWoVFBD5KXaF1VAoQTGmqjCajs79Ah4V3pB",
  "key18": "4uxBW4FdthRYFJJbRykjveNhzxc5rMKvxFozd6xd9Es9nYt8TL6PSLWNUJwu1NmRVHZQsm5vx7QU4B2NeDcV1Q7K",
  "key19": "3NepR4f9JpUaZS7mHPp79MNEFY6p7huu4akbWKSWgrL6RywB5haE9gPLR2J5wgWqtLKG2yPfjLzLwGRWRMaEKM3Y",
  "key20": "4rGs5FA3mzNAPmrk4a9dFad468i4p4k4v7Skq6Rf7Ki9LsDFByhMA4H4rgokRjo5xvofMp7k58oQGVMNiAJzSUjf",
  "key21": "4nTAd4SNmU7zkf7zXmCbjxF94Gsn2VsHJXTjaHqZZ4hzw4Fm7ZA5fPtr8BbeGoA2LavYjL8McZRBwUPSLfgxytKB",
  "key22": "3p3fTGHzME2WRQqaJqSUE17QjmTHB7yYVwi2UHSH3skytfKWw4Z9G7QUdxPMpafj4DKfsHqYjh9fHDwu3irwpZ2Q",
  "key23": "2rcLwpDzBF2w9BphbQ2zkf3aQtRS7xGymRq3nULVJgugUY2XzATxEWWrhLoETiLmKLBVC2ZBB35sBPAnqUX9AbMc",
  "key24": "3QrRVtEvq8goBdq5KNWpaPadJwvAvSM6HR9KJaYakvyuWpRAnAgeTptcMxeoatCtV95ipuYjVEtvraVN8miBLR5x",
  "key25": "xVCnq5ZpygfxuvSAJzwk4yqXGz2sDtWV2uKdPhU1iJCmeemqDJAoe6HMyLgksJz2cViHroyufPiDWQDEvEwHqUY",
  "key26": "26DTs1WHN7EyBJJZBEhMG83vbvoSyw6GbABDhn7oZVrWDGotQ2kDtNb3rXRxtobNBuwFTSFgp1pChM9tcL9tSmio",
  "key27": "4ERbFzUc4pFcgGTFqNSktBw19ijQAkRGFZPNWtssv4i5FVxHoxdAPLwpMma2ZyMM3K7PnS3jhJ9Jyykiufps7pwB",
  "key28": "25LLdA3QPhrNgsrZbHENoP9PzDeEYFg4VDunyUozWDUTXA6VpkvQB3YfhNZJRidVmGsUynJeVbNbrG9jysq51wBh",
  "key29": "2KUwaKAYds4Rub5nr62YbvyHMQBpjCShyCbbqwKT3zUaRwBCBDUp41CL6H23fdT41AAxA62Jx6NR5kj7XKjTjUDB",
  "key30": "4f3UyoZdkvDQPemPC7U2SgnNvtSyNmYo4SXmCmtvhszs5mBFfdjpuZjBQ9rVygAL5vF2EH6T4REqkoGmdEQHbd3k",
  "key31": "39KJ1GrWWgGabyYAP1i9anXn1RAvhKESrknR9d743oHry47uwsFzFiZ2NzhEXYKn5DeXTNjLm88SgAyvKJQg6iry",
  "key32": "5UAWVHWyn83sNUEhhg2nqXjZbTPXNQF9kpLWPhvcsTA1qJcfyftFvZ7hdRXw6feBQUwQogKxjy8TiQoqsktfkLgK",
  "key33": "4z3eHycFcPChjiqiVYAaxqgJT6yJcDHTbTCDYFNcKxuRUhQm35gEe3QXoXrMj1P565WAvKCaMG9PCixJ6Wfpwqpi"
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
