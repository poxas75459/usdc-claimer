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
    "43WQ7pRnceD4QV5QLWWVdoLjWvusjTZxkzKkj4Js4bVo2rJgbZ2YjqHSYkV9scKihgPt3Vtk6RckFtRuDdZfTY1K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bJ3xaYSxsjfov9NRvA1GQkDaQp8g5MUBE9XLn691HhMPz7DSXiYVJuonJfzzJfSN6i1uwT9eineR2u1FBZJQzDd",
  "key1": "3c3vjVLuApsBeuyjQuRMnJjeYRGLbxC5jPUqyMA3E48wsqiZHjuxxd1PpGBRmtfAwBsU2JDsn9yxHNPGjxgjA7ig",
  "key2": "HXVxCAQawcxufErJnDshxyVtZqSnbheMFejavPfgBUd8nKcox3KMobBh4VH2DNRczu8aSizPTgV93GWChLV2dD7",
  "key3": "5pNEoNpdkNn2TeX2jzaGdcviznAHK3K2YneTtDSsiQVkupNYwo9arjXMrQHc1SLedkFQa98rKTAc2P3mBqg3iiSY",
  "key4": "3tL9taFszkaA3KiuoVBChrn1nraRS46Yc3LhQ24VMnu5CeRonhX7HXb1x8YLLkqzUQM1WMpBU3fUxLHrWYcQkaW7",
  "key5": "3xbKgPhSpFapd8obmTCmhWvwyfpeMvCFdkHzzYpSHVcimh3Lb3apfXebxdDjVXFDkGi9yeHHvcbZLM2WVgVeHs2N",
  "key6": "3qXCbiufZup8A2Y85bKdDMKrC6kjziGkmN4we4wMF7aijyt3kPE5aTWcQKVoV3VyCiYV4UGqwjgM1vjt8jjuamXR",
  "key7": "27JfsvpDsamnCszAS4hHdyN14cjdpA9BQMZv5rjNkQijNGo2AbuksDBrRCPr9o5t5JfuwFF8LjCL2LadvN9CNmvU",
  "key8": "33RiKss1zSZd1EW13hiPzg8XN1qhBm1crtqn1w1fZfWyzhoj3F39HkEqJCrakxGbVzJ5pihXNv5LNncGiuhGAohc",
  "key9": "2sNfX8zGzVYzZxoS1SBHNvVWonw97CvEyP9cQAo4PFDBaNFXACrsuysRibuKZ2GadLwv7fe2MstrVt7KChisBkoW",
  "key10": "53LLZt5U6FBwvG6yKvL9FjbgBrc57tiTUsrgEwi7Tt9JtFaNpZFeia3p8QisYbCBRYkKe3WUnHDZxMJwyXaK3VSx",
  "key11": "67a6kiRztWQAfTTDoVqzu5TsDJ996PedqZERCpnbx2zUgZJR8BTqVyrXEdh84tXx86WKkXXkb1zhvAG4tm4wVFZf",
  "key12": "3r4JF3NBqFMNddhsAE5CeZGeqscofxmwC6XHx3V57Nc3K9GEwuatkhZEDCJ4QgSocSBj1Td1pwJWycGH7PfxHjxC",
  "key13": "5ozBkpkDEXTLx2kcc3Mfz55J89Hz5DQWgYpgqfsGQGjMu6iTN9LxugzGPn333ao2xmdEPPZvzwdtSxRNJmrGmrjq",
  "key14": "kppatscj7XfBEkSus5xAtEP3HEtnCN6ogRfPhCLFapo4qviD3Lytz8ghvY5egoJCPtQ1M7RTmJrs969bLD5zx4m",
  "key15": "4gcDt8jfVZ13g3TMGsme7w337eZ9w2pRAEtLJCJ8TYSofq5cPiiVBSwwbybSdTFpY1SzMMoZwCouyuBrXGd1Xahy",
  "key16": "2yRiTNvTCqZ4CfzpeRbjtXr6H71fhhus4GKv7JSsdWWBct1d8crb8MZac1NZqPK51ssexLtGgDL5FzW6t2s56hN9",
  "key17": "61msMcUs9Hoqm2cZXPGd7mxs22o214U2sH5pc6mu2NKZdCGiULtfoZGvJ6NXMKpCDMUkoq5BtyqaXfAueJigQWzW",
  "key18": "46pCZULY9XwVp5TuZrEFwmUvfSQQsrNHRdn2kdbFwH23BFYZdHtX9hxEeqat7BSZHVe9uSVemxZc1hG93aD1x5ws",
  "key19": "5S9LqFzDZeb2FWU1KtjPXghGi4ART4nUhoEk6PD3HP6n787v4mZobWZZP61LPbHFmXERVKm4wK25A6U4UgAeRA4u",
  "key20": "gRcLuqteZTwdTJ4ZDPvG4T9JPo1RnZ7vVwyzDHJHBUuMu7sdrDHVPfa2PikBnxUN5jbrNHeFYRdnqdPA8V7U6VD",
  "key21": "4sQLC146htNJUBAz7E5iY4EQviv7izd4ruytAchFG15mduFjJXz9Sh5bCkjSpp8gMt4Fa2BU5N5uxnb8FgxTfsD3",
  "key22": "4ZweBroHgBEtejUJsCVKf8WVa9eCehreLLcUgT9QULCpWKAYW3N7hxocuXghYqt1WUs63wpt9Z1QD9k2ftk5yhXg",
  "key23": "AHcifDcxZH4xr9qHVACJSKGdjWMLhAqwhwkRPeDE1kgZhdQfqaTAHU4fppyAvMxFbiQHBJ39tW2gVJS2KY3yGgD",
  "key24": "5YqcFMB1dx9xYgBiJtbcPzKHbHV9cdwoLZJjuXUxeDRSkXHvxypoxwHEuWYKSW2QuV8uFY2tXB2mh6CNBdcUJSa6",
  "key25": "4yr2hoLh5UJdkMrQrd4tXmzVAdMqRjD9YdLpUyHodW3qaBZMxYJJK38sUqPB7vX541dKXHGbqSZchayLucXRD9ZD"
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
