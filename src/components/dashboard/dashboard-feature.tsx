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
    "2koeUVGzDzZhpxj7fjW1LkCnJAgGazozAdcGL1DbMCJ4SHdwGwPBfSZcZijjW7V4Mn34ac3yMaPYj6HXuMjoqWxX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ckrL3swxoA6CMSNWFzD2A4VkZABsQL86KgHj17morjby2uCNX38n8V2WuphUbMyViq95nd63jHVzUwATWFYz1Gz",
  "key1": "4wh1sD5cgbeAydrWHcqy5c9BxajqDjzpgJ84zjiPqV8GTRrVKbsM8BKpQX7ztWFHP8mhE6sapLDw887BqCKTWddY",
  "key2": "2dLuxZ12EjDVEA7G6Yau1vhp2WffSiqnaG521xqy2Ea7TheDFwTTLKzkCuztXJHA3YhpFkJh3s9oxGLPH38fe3jL",
  "key3": "5u7YPnWovD7RePn4dzjyE2z51wLLsvdkf7wUJLnkMEQYr9PfHVtum1ZRyfGd79gwR7rmDb2pwzoTu39QNbu1cf4v",
  "key4": "3NXuEC51QmALY1VZuLhUtFgoQMNWTV8okxZzKhLWGFc9VePgQfPiyrrEzZipBmfoWuP5bqboJ7Cbgz9BApMNVtxi",
  "key5": "2CEgicmwPPHEXtySbSXfcpyxB4PDUV6YUSGNRzqVWymBvTkMuibnrWJFiGw9RMGjFhy8qNZxHDcAgLiKeYQgJVWG",
  "key6": "4d5h2hPB3LVZdqhYHV6zafVgFYNVx48ug2iBqZa3C6kfHHxctd9fbZwTbwfw2wqJpgwVHGj6p2pgkcjYQPQGTkY4",
  "key7": "3N4ev33q8JXPRCa4PtgdNtW8uR3FtWspmEBYSAcXB4Wt9v66GbA3hFv4oaz5qj45ddXDKJ5yrXdSetRM6ehqgqjh",
  "key8": "4w6ezNyajuwgPKeb3n8XqX5YZHGPexVifQsv9rs52BQ6sUmrD757maZw2fvK38mxsajufwxiMe6bipAFCxR57v1Y",
  "key9": "393c3dyvceq2CFzj1RLdXZtH1zQ5nR1ABvKUAHrmw8RuNoio8TspwPUnrMGiHkji5jyv8W3p6iQEkxCPCptEssvg",
  "key10": "2cGamfPwwWAY3tQgzRrhv2abvbpLugQYx9usL5RWoN7AGX9fRG2iMDrSSdknkrGh9jvRgD1Yjoyq8dcT4s5X5LBp",
  "key11": "jVUZCuNdXgXm55GC25cT3GKsGz2QuWcpj2CS4ht6LyBJg1ZWgkGCceGAj7fucPFzhWMHyikFYmU7jgWASDMsh8c",
  "key12": "3pM5GBRHfDEvJfAhAeHxS3FKwbtMGS3y2iJgLds39JoQ889eAA4gXVNve2TeDTtg8HFwVMimYXZfY8KaPKwuvzN2",
  "key13": "4wJDW8rh1KVP1A16CDTb4BfgwbKgs5cjm8NNEtS5njjgT8uNymPFShvkhZFFNVt1vajCmNegZmtqNYD7fC8gBjAU",
  "key14": "iignpnJj7Gpq52uzGo2d3XZAyr6wyptgmyzi61nVmft7BgUjLH9eqxj7pVAVoA7un8B9rZJAWxJw3DhZpUQN6f3",
  "key15": "3y2GjTWHtVYwvDXNivgCWGzjvdVWWcZoV8QsFbp1CQk2fyCRNDx8JpgeREQpjLz3qK1F2qRQKWTaKdYKsihUu3tp",
  "key16": "2M4oEEW4ox5GRbouJgxQmpm83SaYWYQSZrHuSswuV8c9MwCzd4B7r44jMMXLmzgzXDV2EcD9QjmxD6ZC3CUPKLcY",
  "key17": "45kMaaRxvjCrzkvgjQiGvRJeJonGTZvBMeeTCyHJgZFUSzAJFgUcTwJZnYHkEfn5VgvnuKBjjSFTpRVnRa9dr1zY",
  "key18": "64zdBM2VJA9fpRZRceRRHyzi88EfiorNxHfvqV2muATbweyAHMombcWNv8BJngg5EnxWD4ngrCwCnDgkwezVUbMs",
  "key19": "4dXoNLcWehuL6E81K7YcTQhLfceGqhugDNt41exd91yepxEnWkhowvdcxe9tp3qHFRXiGS4Q4y6YHNf8iLeHLibc",
  "key20": "66dQ9j3VWP1rky6sdprU3CWvyaMT9hmX8SNWoeemdBnJKoYYuTQHRewBZCWhm2uqYR1YgYEK71GaMn325tVTyJef",
  "key21": "KGSSseochPPjnDF4o3oWGMpFMeWSvv3XRU2zBU9eKpfxMqUjM8tFjFYUDY6DerWVYX2rMGvDaoBQyJRT7WvhVQd",
  "key22": "2Tqno3Gv5oCtNqpgjEdQSLsWj77zS1zPPSU8bh9GRWQLHrzjSKPkEeYE2QsMsYjGEFeeat5qJ64wcusneLHyajjC",
  "key23": "3U2QohuRPCYG2wkJktoJovBPvA6z8WghmZANDGg41mQnoFyYPwPGSvBAcVTTeQQVLPE7Vkgi9QRPBtZw42uXyrku",
  "key24": "rm8hcbXYnsqS7MAX89E9gVCytifDTNuNGBvLLNJqiTRVvDiPbYyn77sFabMWq9PUFnFtLRi2qhkaWYzthgGWES9",
  "key25": "63QWiUH7p1zhtjsmVHvKCR3L8H2jXPAKFb9Vbzjgie65sbXhzYgQbdjyENkJSS5P6pDgGDEL1WWgFwFzwcSqPqHN",
  "key26": "4ppDsub5fJwUoS1oY3G2ZaDQvrBisNpjdNr6gqDx4eyTTQq9rKM2EW6adSUvKGUL5GWT3dJex8VfwywbgSBtW7cq",
  "key27": "28Wp85QfYFZjev4EaQffHo4vwAEEnGZ7doAvzwE3t8pLVLVCkUp8trjjVDFmEykv3zYY8FeztHD542ixSuzQjsfn",
  "key28": "4WrbBKyWt3h7P49XKXX7QPs2dWHHbW4KTYxhYYWDN6NQFft7mVcTVXHqRX3ferfP7wzUM5f9F7fGoATCq71EevET",
  "key29": "fwasQ96ZAtbQJYpwiauTYyRfVZqB4CjYCLDBXYnMsxgvh7rR9opns7GXT97N6QrFeEajbsZDjm6TsBGkUNtgr11",
  "key30": "SFGboFumURPEtDAyK6F99G2hsFEGuNdZFYKHtzgbh6ustGLAUEBDTPVH1vBdh45CXvjUnL192mEegVFwehCvm6t",
  "key31": "2jsAgZFnTxQzBvo5MFkCpRsXDPAhLZoRgQyxkxKc42bXMyYbnw58B6uic2fxiRBY7VrhPpeT6VSypF3LWadpGt6b",
  "key32": "24ikAPvUs1nE7YfukBHekNHM24w2dHDZ8nGSFic7L9fgq8fAKM2rKeVFRgo74RnuKVmyy5X4eR5NiF4AHU4fmfxf",
  "key33": "5dNWeNEVLL1oDnuUw683MPDbWWGXWWX7gdnDcwfxfdxxSupMiXBEKubidjgqgqRkXS73VfxeDPW73HgrR93ycNmL",
  "key34": "Ez1xZgKJQoE77xps6roJnE3byL2KwHs4KyFoWW6pXmycGUMpgRWtFw7Ja3n391MHyetbqCbd2tnDtHHzzTzssNR",
  "key35": "3ub3ybPcEEW5KkPi2nFbq7NVRu2ZVrrbFo2hWZ2j7fov1JBp6bWa6KXwrXPitFKeT1Gy2QwBAWUVnTYH7zvdSD46"
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
