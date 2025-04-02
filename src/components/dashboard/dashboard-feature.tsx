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
    "oDJUJtac1ChuNvz6iTfewfGZstbBsrmjWCLDX3bKBNohotVGDnWP1aacJkKJcjCS1EgcWKVYSAZFdpEdcGQo6tf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p5zUcKN2gVZL6dKWpsj95dkbVk9UpbSBXpvL6MwcvoEkNMfRhM1TVagLtEAN85mSybUiksC4wifZKpxBuZPm48G",
  "key1": "4Ww5h1zyG2fhPHJTH3FWkGo7ZvEtHPrQ3ca8Hk7BBqUCANvVrcJ21R5nNmQobjTvx6AFQNFizb7Rn3cJquUpJMBS",
  "key2": "5iECVmArquH61rANqJou4L9GhVet7cAJGZYEdZj6jULHUhFWy7St8HiV7FsEqEMSmQbPzD4562TgXEPfzVqgAUWB",
  "key3": "25UDj2jdNScWGENS3ZTAJdFd6hLNqLXJ5iqzDjHQ5xPS4V9vHL8vUCziC4g4NDrxMyCb3St8F4TYjLaJEuN9gk61",
  "key4": "26T4dxGfWQWsy6ZfEravWk8LAuNJ5QdR3kcbo5kXP3s7tY5Zi1h4boi8aoqhgZJn4ffWHZcE4i3u7xn593PA5UpA",
  "key5": "44fakN7KVDZFeXTKjqQM7bwaJQEPwDEcDXxvnwik1z6sdqKEaErkbs8QVyrgPmU3UqTZWbhH6CMP21BfU8RvKwjD",
  "key6": "4KYbrrZpuEgAuoQ8FuzsBBDd9zzfX3DdNmmBXA4VKcs4rBqY2Dq7UuQyHzuPScpupWw7y6gN6K3NM7pp4QRjMJ3j",
  "key7": "3ss3SGWk91tWhuJ5v875aRLcjiuQB8KsmJMJ2mJ2KND2FRxTyh8GKErMspUWydrhy2V9b5AftAo1CuyPi4bMhUsd",
  "key8": "2qhjP4uYbanUGjHxyXfiPFuv7HWRvYzFzZMLGk84QafS6M5XMtcVe5Tq6JgBMyvpgxCg7X51kGKKpNuhewiJKQoC",
  "key9": "3NWJs6s6n8WysNxgp3MtnKct3BhKpJQo4R1CHYBee1SjzaL9sWGdVeQhrbb29R7S9E9rLHRJNggisms6Nzx6CBbQ",
  "key10": "3SJR7PGCfV9VqNFiHkPk7BZKKSHoxaDpNAj84JkZbg8QE267QsLsvKR77xGRStpZSeo7PdtEC8ep78bGDHkTRKq5",
  "key11": "4TNim1AvMT657RKooH5C4ixNq11rEgfXZfNmp1PCP2b1ht7FeKyg99um8afSXvqi6R9RvyLukC5QLYr6KKGMc7kd",
  "key12": "53vtRbyfetDzdhGfa9Dyw9SMcHxfPut3Dw4ob1zJSvj7tbiDTps16ykimbNygF31CLXYf2ncwq2hZpASExdzEeDs",
  "key13": "2tw6fc52whVjzVnmiTRje2HsbMHykFvfrgd8fQYvmPzPM5Nxy8Kihx1ZwnkiPBTyfxp22qMxVyFFunrZMKTWUtPj",
  "key14": "MJYEBmwgQodNLbuvG4VKVUdeJKTad7zdQGLdkMUAsJkh1LykJifTifkA7rNaR78hPuxzifS8vUHysV4WUBuZWuM",
  "key15": "PctKYqMfeorjecAkzS1DiYdXsjKE4y4YQoAewYcGfjxNkS8Uex36qGXfwM2UEvLok3PSQuot8C4VVmCjg3FvzXa",
  "key16": "2XWDSJoMzysXvWCYwSg2Dc9h9ibMSWTMbLMuNAyAupTGJnx5tzNJEkHF3JXeaFdVi1ASQ5JskKNkVaxtdGEze9bt",
  "key17": "532Z6Arrtf41bWmpKEngeKGB7e6NdWjuv3HH2FA22UgzRL11q7z3fTCrpjKLouAkzxKdeSWNp77F6139ALqRcL4q",
  "key18": "6bVMykfugC4PqCovmEwqtbw6DQw3t6K7su26L3wuc2ZAciecMcTAC9gLtqL6jU2uWovQkhGVr3ceDdjyduyFRwg",
  "key19": "3A3ZQADDdBayLNg9iLjbzt6aH5qGL51DP49GLunvF9t7ezrT6TdC3D9AaSYNgpoanzyMb73t94e1ASZ4hzUPuyvD",
  "key20": "5whYU39qVtcfK4aBn86sBcdwrvP44aAvTKxUrf6uzJijY3w7ZJ8S2hKHMEVAsZ5Ud7gDc3pN3Y6nkpw6w9yBSZ1o",
  "key21": "58nAqztNhmtrSFJ9qCa6rJWZsPa2WSWAzX4dYxgEUFjhuvZNRCtdNLL63kKrRP6VrDgjS86oN1Gsf5yRt8S3QNKy",
  "key22": "5stxw9dtj9gRG4GVSYpXEB6zR9Xi6i91Za3uieCNiiLPGy9cCWcGt21UvagWpGofxpmFGkzn35GkDJ5qR6uWGfi8",
  "key23": "KosQAapsKRTzFZ52dsCn8BE3jH5PMJTj4PUmmcA41Bv8qhw9Pgj4U9CqX16sFyhiYwvW4crDDsSjZraphZCYuea",
  "key24": "42f3cvZUN9rw5hNjj6WxxBvxkyATtw5Qu4o4cBdWRAGPbo3kALY5XQeRqvVWhYmtJJ7FeJYV6eDptr7RaNA3iSCm",
  "key25": "4Vr9FcAa5opmZeCmDABXF3MMpaUnYbLWge6nMGy3mB1hyacPcBV1dLC7Qo6xPHUzX8jjzMB6jip2WRj4t1rXm4eA"
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
