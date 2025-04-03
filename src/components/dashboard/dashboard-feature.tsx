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
    "2j7FwreQbqf18yFs55kjx68fJjRNSW3eGYo88LSFiQHvkL6Cv2NYRozjRg7KbW18m667pcxf6rzT6aT9FrhL9iFu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "pZ2KAJcgc4Y5HAZToeSbK78Y9VqNbri9jrMXksih89rgtHg1hMWApbgNTwsbySDuxK9HujJeYByuwTLm6BcBPaA",
  "key1": "ngyirsS8vLJp8L2fRru8iwsEeGbXByuNHowybfugSJahTPf6qntTJDerVvtJPghczvQttgdtgjogC21UStg6uQg",
  "key2": "3J1YnJtcuuACrcExqABDMcK4dGbfSrTZubJNEQqtozm2tqM3UC5DK1QjRsyaWZZA5JLq1Fpx15ihJKqovKNd38xc",
  "key3": "4DFyjy8YQ3Da3mhSisGwQCVyMbScEByiUzAyu5pZVZ3un1gm3EXiZikUuH7RUdX9ZJArgck6qm7ZV1YFYmHxjGdN",
  "key4": "4kY5AXDvJzbV5H1oFW8AG7Lqjm2rsf2CTFqxaeUe2gWqtfQH7CzSDvZLMnmBqjNyJ65QBjGnpKhs8LicsHtpQHqs",
  "key5": "4nV3XXL8t9VrG4LHRc2ac9J6nGZqwrjvt9HXXidJNenw3jnYryq3WBrhcpLDHd5mJ49U2d13eHN6L38S1ubwqD2B",
  "key6": "5kxwR76W9Wbzd4ycAV7iJK5aQZRyPRJRrEEKyX5CUV6dM1f26abfMQC6CC3xwiARd4VLwqLEby9rZqzxN9xrrxNT",
  "key7": "4hDwUmGCsakiCGWTgHW5KpSmjxjW5qEE4KKtcggjrJdxAohmqXNn17C1Ytp6eNmgF4kC4QEkQ5hgm7DLW7HjqdoP",
  "key8": "4DWEjzkeFvrBEqdfRWzfddcD3Y5ZLTRxkapkbSUrScFstNUKw4HvekGkMcpzGGnNrvQghMbHa56NzNtt5GdxqNP5",
  "key9": "3JGumrfYhP44T4a9u4rvsaQg4kfgT4oQKNqMGidKVXBH4cnyLhZ7Q5nZdeVAb2gjiGbXvg58VkMDpubmnP1ZM7ve",
  "key10": "4cek7SdPtdapsuF4du1GmjYAqzYk3nDup23frbEdfJW6x1Uj8GU9P2v743TWuYGAzeWSnPNWMt67Ue9m8nRnP3qH",
  "key11": "5bGNVcHGkHD3jt1zXsoB5LHyMcQ8SpVmqpL7ZdoiDrUnccNCwFHZS73oBNyjPF25cubWYQ4vziogg9RCJEkCaWj9",
  "key12": "2UmgGzwr7qBxctToczYssnzHentJYgL2aJYrRAoGB9E4GfF7n1k7B24Vr9HcGEwvibgMFZuNZaSBXzC2C9zVyko9",
  "key13": "3JP2waSLCCub8jtCgkjyrVp583X9Sta5E5ejm1n2zUAE63ugVUpQy8X5AZXwkpcfF6NnjqUBp4PWWTksZbu1HVZp",
  "key14": "57fLzjx1xfszE5ZFaQmJnuz6AhvanvQnxjSfHqG3Vx6FTxycGh7LJmZtBfjikZXAu4m1EMEGn4DDKa31LP3VHN3n",
  "key15": "ytvxCdsABJpkR3uTcJmqaJpRNMhGjscStj4oAxdWxZwxGWCWRUzxrNUDQ22QQFf69L3avhJTEWtoLBPVSNtHsLs",
  "key16": "2k7HLPTDyTCtVXJar82mswjXoUS9zbKJGu7frEmbDSmtc69Ad533sjrKcg2dwA1KN1miW9emyPiguRv7bC5YTNg4",
  "key17": "GwwXCzvdDYbuFRFaTjayuaenW7tAuMkRqe5BAeSn8UgVmERBJ793EqbJS2HSzva4FtpSPrweb6FENEXT4r8dkBn",
  "key18": "5gsEWWX7SdWvjtb6c6he5Dy3UFU5AENDjCKwDeMSoLYmrCyfn3JrYaFScM7ACSDWHbjHbgA7GkVDp3SEMdcwQ1eJ",
  "key19": "sAKeBLco62hju2UsSsKneuEqnJ9Dxjh2QdciFe6G1nx6qFyhGPx1FEmv4nmdCQEAYh3qpYTiGyEsMFvaX7qKYmD",
  "key20": "fixgjHqAZtxUghsoTfRyFsMNEBrf7jU52d58WN4zE8YHKaCrdgDCFz3Gmtzqr5UQ9ghSfNH5G7SvwgU3JFvqqam",
  "key21": "4axM4nyctFXSdgWA8oasAoM9YZMdGkpas9s7bedSmbu1TCMiPFdudCjpTvZZbALoR7AVzxxTta1UvNHTEDCxkA4K",
  "key22": "3pik2WH3VyZr71fDMnxWKPE31Y36nKc6e4nfk1VtXvpQcEgEQMSJysAepnHVogTXdfikCyMvS6nUHMek3oQ9ze5e",
  "key23": "65ZJzt83bxpHkAkmQTazeCuZmcQGufTqptjD3r9GzwcknGNawtqoFNfmhChf8bZMwmLM5zvz8f2TkbRtkwgjAwS4",
  "key24": "3ZhBXMvcu3qDwE5uxmbHPKeyfEQbWoxKWqSP4TTnjuRKiAWoKCE4178sGghGgCzYMje8XQPj377RNbALiywcR6cg",
  "key25": "3HGxUh5kANXerRnVcHhw4JhGXeHvLMSfPh9Sd3nbyCSiV2LkKJYGLfCQNpbgqr4Zn5gMhgrVC5UhbQXjhtKTANLo",
  "key26": "2WkYXbv2qySVRyb2UxVLATkapEAWqJBbR41ZWtwgpu4VtoXC7RmK4dHMu5HYcZKbJiMdKaTjCVKo2Ls9LPwXwQrp",
  "key27": "9mMfNdYZsd3Q7k66tS1zaHeYvguFNig5VdGqgnFhk8RJeDGvFpVuGEwHa6Hcn2SEpdVrRq1ZFGEzLxEVgS7hp1u",
  "key28": "64pwoKs6ZiT4Nf497TTCs64F4qcu4KBoFLYo2J6GCisFvcQhYsC4zHPnNMcoPtNeE1ZhrrTKiEhd851ERCFSknYZ",
  "key29": "37uixLxXvrC551brts5rgbBL1XRrZCtadpfmxJseMTB4Nmtai9YWQ3QRypqBFqoxFsK8v8g522NqYocivM8iZR1J"
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
