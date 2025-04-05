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
    "3ZNh5BU3PRkrEk9oFFKG2Adx77yyt7NJYkFeRLvySVYS7WA3ZrRTR5MhzHUhXZquyb1MqZQCEWPtNLAjq2112DX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uDBcrXynrFghfz4PQPcJm2KypSobgzbLPZy5PeCZDhiE6yys9na5FJiZHALwg7admzyrRvJReEJYNRocXQajFkA",
  "key1": "3ZdpWeubjhCuT1wgQuCiSGwXLjU1ckA3dmmnC5ybotWESEbmop5uh5NmhAe5YxTXGk9EVpgw86Y1fXS1bJMU93pG",
  "key2": "7FUfsPWc4fx9HJyAoAZbn59kW7rvfYVKnHLqStF1ktUbDK1TT667GmGYLhpPsXfpVD4R1hDo7aJsBJQJVHDm1tY",
  "key3": "tov71VUM5TStPLMYSb5R2nNoyYe7Lt99wERqmdPTzmD38q7Vt3Y32NyMTdiEDUbhRbT9f9D7bHL3XSZTwtLXkvk",
  "key4": "24LhuwNeiXjDQP4T36H5u7gHjHcNa8CsX5vv4qJ1uUC7oCkbGxqgth3WcRGNWkpohrAmLHBUUw2THBuRBcjorsSE",
  "key5": "333M9MDWcPkom7KAkdHMYEQnkWF4YWof4CBnVz5SbSgkgXg12cRGSwpVJG3hbQX1dGTJo8VP21dMNmWb27npoXnL",
  "key6": "eLP2x2X3FmSSrekKceZWoGA2mWe2Z7ayMyj9NQTEg2TKUCiSo3wN7E7ipWPHU7aM5WcKNcFtzEqyZn473vxNqkL",
  "key7": "2B7wfsrfR74PkzqnuGPYLr34yEYcpVsrqo9TLo1pciX7jQoFKtRj7wYbBjZsg1iDZwYUwHCUHxjSuY4MhEMECTxV",
  "key8": "3aqy3MDQYMXkAx4zYNzg4k67XRgJDE8PDX6YYCqRmd3JMP5WzWwMgHeKEbrdaxjVKpVf6wvCN2sEVnFcx15v9aPS",
  "key9": "1h4Ms4mracqdRw5NkDJWsn9wxuVrQMAdKM1dwKp3BeQboq62pvrFVeD3SLDBMMDpBe5RrsyCGHixmTkHEnUky5N",
  "key10": "27XJFsvo6yGE8kdraj5rAKBFkpqTL5G4tPni7sc5YFKLpzKnKq9BSGjqXApPRw6bWgA5JNeM4RRutE3MAcjtSYH3",
  "key11": "4aXBoCWvuULQpPj1NoTdkcMzr5qLcNuyKpSXb9Dfc4v2njinXdredwr2JsHVk3W2h9yZLAW9Ts789JddzJPjH97",
  "key12": "HhEmvTGyBRW7gbnW9FYkknqQgyC13gzFmzzwnCgm9dQmea1zuUT9dro4uHwRfmoFzwToBQckomB9wiQAuwsQChH",
  "key13": "y8keMHTbLLXJFu1g4mQvs2usLyqcFN6age7EdTsrqf1f92FkKULvyYq9fpEbLbMxomGEj8tFgeyYAC2F9j9E2a9",
  "key14": "38oFj88ZJZ4m5mbeQeae1SFVbnhfRomcLadqpZMS719UpgnY6eQdhBxbm7Khq2SvTybka8Ce3T7NwDen1jVgfYTS",
  "key15": "3M9waguguaEmw9rDFnNQZuh1UXMVqzVntwq1BgHwCDgwuypsnjmGUWuhLt3iWP3S78XELdTofeuTutsczYcsxh5L",
  "key16": "5mgycKptH4GiPxGr2gR3NA85rj8r83mCbWN8hiwuRaRebKnQPwUTwXJ8Uv9ZiZzyEKbxZP7dsauMz3ftFWLDhUWP",
  "key17": "2Cw7YH3awui6Ktjs5gMSHN6wBjLbQj8LVMCut46vGyMBQkfnUCV4fLKsF3t4o2zsAFVuQpoFEX3TnjLBVQ7dUbrm",
  "key18": "38BmuqdeKuAF28GmVCZpJZAXW8PUFU8uwyvB18yoRVf1wELgCZJHEiKr2RVnJ49WdwbbJ9zppcGNbsYtBQ74Xz13",
  "key19": "2nUTHomzxDF4gjj7DsgWuEWDcNr74BDPqobrqBrTq2G4ntgBNxb8RbCRKS2Uo54UNdTt7Goy57VbDKbBoxGg2xJ7",
  "key20": "67P7Rykqd3qV5fDsGL9bTeV8QKvNALqwMr3BPTmk9ZtiMauDhc9ezZaeH6Vpi5EAX4GXQoxmmMMdpsodUttA2TWQ",
  "key21": "5rKMDXfBRx1U9TvDrcQcvaFmVKNAqfLwUJGPHLa6wp2FkqVTWue5V7QNF622F2nN4Uk1MdYF2rPvj46EhjL4Hg24",
  "key22": "4aUr72DA5orRk6i4PhHqp8nFxG3obxs13JdbtoRnZebikLrS6Wacxf5KV27h1b2hyXEWcwSK1oyjUk9K3jppjfkT",
  "key23": "2mbcQpf1uhgYg33YWkwW9zJqDTXedw7WWSkkVMHy6vCsKoxCWggyLHtUPDgTyapTWmE5Jc4RZ7SjWhQSgDSpr8sP",
  "key24": "2bQCqVBqS3w6NUnWCYWBABwF1UMjikPddMXz4jQZFUmSLbMJAqvZrGz4h6t97bdPoBMHtCS3FmLW5ftbrRDEhtu9",
  "key25": "4iaSFtpftUcCmPBPsvDsBSgXBXx4p8xRZfKnRbRrdbzZp3Ttkh3fhyicwGgfoWrs4TFtUhTkxpn4bUAtY3BbNs1m",
  "key26": "G9YVkjmPyMrw1rwyGfJZZasroBJpxFVUSBW97XReZ5hhdtw2kmGMSiGzmGSBG6CFkCwYegriMeThoV1x7AyuN2H",
  "key27": "3daFnFQhSf8yNt4SZTTf3woGHAstH86vgV3scpTLUzGB4zBpkd4yt2WGmuUHdzEPkqj3ju3aXnoghmqzWyknrvsE",
  "key28": "5tWR2QpxEZacJ5ALwRXTBpzDAk5SH9Nr32xiAT3bkjwTiVmdbjY9KH9uTrBJDVX3P26NhVwSnkhTa4dmotgmW5FZ",
  "key29": "3ZHzfyp9PJaw1g5Unau4s8Zn2txc7kc42oENnLvbmyiXukGaGBCEeqZ7N61WaZ3HMjicKLWEUkYYKrYA9RGbvTsz",
  "key30": "4PN199xqFtXtTLrxq9TcaVPccoKt578MogUF2bqXTrtsQPt9NVZixRYmoxitjmqvaub83j2rstAeNBtdjNME2n8q",
  "key31": "6EAZZb3bnyhcCAXmDZMwbWSCcKsLmWDi22Fnjugbnb6eRQPc5kNtjbD1EtJqM7LseTvR11WMbUQwz2ra61FRo6z",
  "key32": "5wuAMoW9Q3sWKmpBL83cnRmwJz4JJchxtnAjjj5Nm9bvcJ1HzQY29sw6UttietNYz9mf57aThuq9NW6YhcBVLdY6"
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
