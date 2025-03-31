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
    "379ECHXYtaozznPWA5VumXQMvD7onbcEwAXmPMLokhMzZDQusKhfDwuFMdk35bn9ZnarMcx6ySZyB9hdHVufToZ2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5KqWYQZ7WzJfK7wptwbqHWdRkeXysnwnM31HrtyPhd1Jrfme8kiGDLKPQMFvTm3NAi67Dd7Y8prXDYe3PiePSKsN",
  "key1": "5jHfY7WqkzfkRvSxGYjuUKRw4xoQF8KiRv43ENHf5DukPDNvA7L3yVr3PSpTwRLetSNSqQDoiSFHtBF5GRq8bJKa",
  "key2": "48icfEWEriUx99Pq4wdZYLjYzMQERzTb9dC5wLh6KjoZvwTKKt7LFPveUbiLFYwyzszSchpUQ55bATsaf55aK3on",
  "key3": "nkRitTYLEAR2qKS6oQ5duvKFRSTcBQdkwaHXCU21PvQXoDCksYMJmR9Q7Ztco91Rwr95t9nT49EVieMSBvAsuvb",
  "key4": "3Lux8R2rCf4hoE7ue7Pme4CG79uGZtEucHaY2jn8yktwYVk1xjCFeQxhY5W7FQWdbYQt4qWoGnUX9fWmj3e8CUwT",
  "key5": "2qsPNhZg2MHizwZx2iZ4FSSVMtctf9MxguB3vxh4mf3PMrvUKWf2ZnMJULhzMDMSgwUSVjqMQ1tYP18NzhjLNkph",
  "key6": "2oW9JNAYx3ap2DxNVxPCe7kxc2bM1oKwdV4NhzLWSqDJiLJAN6M32fZf2sSUtZe8tBzTgqprhmEpCp6HdscC9MSX",
  "key7": "2jZzcpwZvA5qv8BT2n4TWFYA11vwGFEGmwD8EFFsgWJLEU7gR3cLoaRoCkpUeahzsipxQF6ZGfz2EEPnJARzczfE",
  "key8": "pFkJES7YUNvTehFfvhWkdUTFbmXbRyJn2EL7p9J14zaf6jhKe2BV7QcDLV9ymYVK4qhgDPo3in4MaF3LT5zG1bR",
  "key9": "nHbHo2bw4ySh2KjbGNDBvxQ8L6rE6NBqYa253xK1SVffTteAKbLUxw8tDN5iqwmWqXBiskN8BnsfBHhgWFB2W44",
  "key10": "DNBK5PRaDhZWjQ8HspFVSTAx75foapdgLc41aHAytQNaenhJPYumD2MWUpWZg5Utea7mB4UYGj1AefEQW2kWuEv",
  "key11": "3qV2ESuJt97DRCetd5jk9Y9D3ecSp5p9TdVXiP5z9Ma1BYbFCiXnvrcJYbjj9wrPe2TACXttSBMsToe8B7TGR1aK",
  "key12": "5uQd46AuxDypK6mYyKpqVoALMXfLQaEETWdPqvh5Txv5f6gZ3NBfpxr8BD5GpRNWkrB8uFvmZWAdxmCRTPAm8hLc",
  "key13": "4enhHCUoxuL7zsJ42sQJofEBvTkMo8bo2fLyYvqJyZP5gt4eyXBf3zb4Lgoykx1TGXPZTFLzsYCu1Tv18PxiVjTF",
  "key14": "4xzccDuWTa32wegSENkmmjZgBmcd3Emmgb8v5evrpFgCSoamCoPsijLTv3PKFRpN99Hug8thH3h2cvGHWgimJLuA",
  "key15": "3gALQj53Dy8ArLbtmHRwebnAwBK5rGbdoynFiipFZ3YStbNpbx7BkpV9ZD4P7r5Tf6LyGEsi1BXhmCyxhjAB73b8",
  "key16": "4oZQGwLJdTq1Z9LkS9waUNXW16sVPkwZoCuYptvxSecdRoBTBohUhENoSc7wryUboRKgUNMk4JGhRq3jbmLU6Yvo",
  "key17": "2ds4NGNtcYPeAyxf5ktZn8ck82JeGWeCsHTZXZGCFUijjPWuHAjxhPD3TVjk5LcyqVzif8whZ7b83GNndLCV9aAm",
  "key18": "4r82C4m4GB3EqZAFcp6ix9fAEMHDEqHbh8ahtdRebJSCSwZYUTHqMy7sBrz8BGJ1XK6FM57yj98f2tw3TQvBgCnv",
  "key19": "2No3SzEPuh6Ei192GHEDyEX7P3w7goS3eSzW1zu2BF72LHUkgUAeJxVwy138tJXcQemkxnv4NHk1oAbVeLxYE4yf",
  "key20": "5JcqrujBNbsFK8bsdxYvx6ScGcmRy5fCKYRzMypDuqWtnKNfWwDnojXHXDVGtm2pLHVNNJUAfCy8BhHNSdMsbLZA",
  "key21": "24WBMEBwHRKJU1kKtWgpXX3c8qygqAcMCSGkv42MtaPASLeBicBUZ8RNCJTKhys6vZ8WTuwv5nt5259A5xv3a4qd",
  "key22": "5itWPueEQEMS7LpThqK3kvU2ZqnREYnoL1DW664VBiksCdjxj5jwgd5Qo15SdsA8pY3tWenLGoVVridfBGKUid5i",
  "key23": "2J6Air6CtmwhWLL1nTmuk9LGsh6woUCgQQiRvMT1UKPeCBXf3U8wKeVMZfEqBknGkCmeZvKWZiyKXU1Xf87SYfrn",
  "key24": "5h9Pg4VYZCejqDwkavvBSJ4jjef8X47nUREStMEB51pqmooZabDpf292542mDqVpZxGLMxZAhaVEsLnkweKwF4MJ",
  "key25": "cLVJXtWWyh9NKnUsfvb3keeC3KCEYKqS4YVWXK7abtBxqzg32hJWMLAk5wjmYoNWZ6UE5kC6VHwMDzcCxyVixJX",
  "key26": "5WhoLCS6RzZK8RgF2AhvooNJAjpyhn5q1ymKa37XgMXNoYLrk9KHXB2sbcxA3tELBKwbY7rumpwUHZeiCPrjsaJ1",
  "key27": "s38TeLxfVWRo3sVk16DjpdBnBy43yNWrM59MRorN5DQpCGFdzeDTDw8JcsUmc4ZYB4Sj8dq1z8phg2JJ15XgreB",
  "key28": "2LfyKjzGUdbTH8pFViYurycbv2JjRU8DMFtpP1VPjXVS8rKrZ64nAZ4mRKQvLEnZ7NsAWpYfh85zhdJtTXx7dnFy",
  "key29": "4KzTPar8rzTQZYXyWTptHcWZSaH5e8TT7F7VfhvwBiFPd4kzq68Lz9ji5woc6tKCWDajqX5t63Pt9YYCyfhMhmuf",
  "key30": "2JvG6eJioBJCvS6MxnNcSnbxptGG9cJz36tbL3gCkJzTb4AoV7f3em8xUb6szG2fivJyef6EuCbqHV6jyiTVKsVV"
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
