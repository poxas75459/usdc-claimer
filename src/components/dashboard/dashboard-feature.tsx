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
    "5SWAtGkRaTBNTUvGorkhSjQ1XrVyZiNbt1ADxeYfGvF48YCPF8tc9idfnE5ucACNkMrNNmnCe4Va7HdwJTkXuMV7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "576ehhvhHKyfQndnApgyqbBY84CMpm7qZBCVP8CFUhtR2K7taJAd3hVKQjs4gjoiYcuoYUmNwJb4SGPzSNjtfutY",
  "key1": "3RMXZMSraXhKL4tsmbJMrEyonUrTKQfC2EFBESaT4Z9qmeRq4UMVsdMPLygFyaCgkKwriK4YVZA16vmPXC4ScrFN",
  "key2": "6739ZTD2reLUwDpV5rjAsG4vAVeSmsxd8QtmZDRjdCDwxmQzAduEjiSijULGAzoXTbpRWUUvB2RgorwMEM9mf89R",
  "key3": "2ZZ3FpXU2SrkTAtpknC9vN6Yv9aA4ce59XZAitAVJjdXHNEe8ouTxkPEo96NbWQE2bVax7dEW4S9PXTJqXsUNkhR",
  "key4": "2vWHkFHbMb6E11GEkWofWYuc4c11qkv4Xa4M7DiqvMXeU1GRFp7HmeudJ2MsBgr4rUqTZDqJTDjzMjGEAvVnRZvf",
  "key5": "21gRySrbHmtXyw6h8k7QzSv83igZQySVEr7wk5w9PrVxf9fpGSgRLA4CsTiF2qmrPtUy8JD6mgD91QnEP5Wte1Zq",
  "key6": "3rrZYVqq7MGoQt4oL8FgwChPBb92yjxzV8Km5XTPe53V1DQr7T9aN7gJ5RhE2wATyNGZdgpnnJBtLqGRzys98sQB",
  "key7": "4hosuWDTm6ojaE54dxis2nMKuPZ8KxzfvM9gNeuy9Xvy2bUFVURZTBkMTnsVkDmj8AQBcJktEAg3oNCshmnVaJUd",
  "key8": "4WiAfFZTfHSzAE7ByCnUpi5Xcvd621kLn99CDCMxT9mtfd4ErMu142TQ2TGTjLs9PPWyVqH6t7k7PgjUw6hbV8sC",
  "key9": "2e7g9zzwB1MhJqiAb8EZRpQkVaScBWGHtMQLczCGndutsNaUn5NMywpcPYNXZSFTrszgH8wQdDVUp2HRcPqGGGKu",
  "key10": "3FgZNYdRWUnHsZjyHZkYs8H6QnNRZR4adzXi92aXqMRbwoM1BwhCwaBJYJ4Zw7gNhQxKs81WKbtm8UJNtMp57FM",
  "key11": "5v17yUshutJqeyD6DhpBi9preeht7cD9WbB1F9zjpAiCySi2PX4YJrGSDhPesYZSnuoJZJBEim94ydh1oFo4SfQN",
  "key12": "4vB52FfhJKcoEjP7H4JXPzeJ3b38M3tA8nBwzNtK7JnK1D76TaV46xLzoaKH8SRdn1Dq5UpcpB6pRpae2gV1N5ZK",
  "key13": "4sTEoGd41C2FJFYEfrvwSHRTALxHpApsUSaJeuQjCaKUg9gAmeNU2J5yYUpuSgvmCrMSTCdmYAcMrVmns1qZW4HD",
  "key14": "gdr7TFfucFYsKF6Q2sjLiuVGYBZm3FNKjiGDbecbhS4hQrdCkTCJFkMs29WYJJLTqdxnQkByXPEWGVBfdUVJhTU",
  "key15": "TjjRt3Z6BZe8zTUmBt3iZBpfctgyPHzzVAhtkU293EhNku1ryeTHesKmcuZKxLPsSPNy3b4Si7pex9GzEMxTtWL",
  "key16": "1ESxSBdBH7peqqoYz9RY7rQt2B8Xb5F4fznG4BjJrxHWr9FE3hKVS2N1M9NbMi4PdLHRgZyL44RDzDMiFmC7A3i",
  "key17": "5YhBeEYUGJtrTr85deVKPpf43tPdA5VJwfmUh7a76kmqFdtShBftM7Nh3CfE8gJvyRzAQcTKEDWNtuLzuRwK1dBJ",
  "key18": "2EFyK7ds9CDXXcWRU2ShA9x5DBGjFYap8Mc9zP6onhkCFQ1ZsezCVBgcGSMdymAa39R35gPsjEQ6kqtZSngDVESw",
  "key19": "5UuzbgnKVmZyxqhmNNiiMdWNpNrdyjShUnRnt6sQwFJ4YPt34EPBeSrKiNZ2ANCHwgmnhxyYaMBpojDCaDtnZzdY",
  "key20": "meXFYXVJfJCKxH75aUeM9qbGncC4LPAAhtVYiksTWtieppQHLWib8PcCDfeawtZwmCEv1eAZ1MiJUKXjYCv3oLp",
  "key21": "3MiX5s1otmHTeA1FCPa2dBT61n7DyYwqkcs31Go4sFJ9FsZfwu9CW8eEyZJaAahQTkWoL35XGojTu3meYQTMmS3W",
  "key22": "LvBT2FrrLCVnkogtJZDqT9T4kCjxV4X8z6rDDXmKcFWpye5CPYez1qyV69K4uaDnazKMNqvjoywvmAcWXREopzU",
  "key23": "X8LY6Rd3ubs3BFT6YGmYUsPh4tkjpwW9tX92Hzf834C7vMu4QnjCK5LEm9ugFa4ph8jWwGzdEjkDMYhNk6THgWY",
  "key24": "6DRSNEnyHhjBaFKzzfk2fatzHcd8sMM6wocW8UHkStgET9M9Hi9A4PvhHE3HkNNc7mhcfFMKo5BsKYc2pafhkAE",
  "key25": "2K9wPL1KvvRYmkZRMZPy1C3Fe2r4PeScnuVTcbabuEeETKyaGZzdhgVnEdfQAmALgFZGvCc7nABG42iksnpMdpuj",
  "key26": "2zyaQwJisk4qMMfwfvZjxMgXwiTeVwefdaHyNhPDDobJth5TR4NfYSa2URB9YabYfKF3txD9u5mVCkgJtFhwwXbZ"
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
