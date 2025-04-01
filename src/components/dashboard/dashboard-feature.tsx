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
    "azt46qeGVcBf68QeaiQNwHiSuwu7HvaRCNZAtLm6foibHWvc3wNDCUxcz2LPCfTfqCwE3nmLQ9GgCeNQFhCAPPw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "81fJXwsvvQeKRB89VmQJdj68JDxFv2MMtu6vHuSkGeKirJc4Wan4wp1z59rY5M4RTYu4s5kKYxpSWtCWJXQQLKX",
  "key1": "J3512DUyosCo5ZBCawmRZbaZYzN4AYUN141MqqFEwX2rsypb951TVrhnivxBk6wybCyEYT4iv9QUhgPZKkJndq7",
  "key2": "GutP72tBrzGBDxGdHZYfPF3ZbnoTGfrZpmsLX19FUgTPMhbMKCZR1kMG7KL5bZJMxUPDygr3CkAXR6ucnth1g3k",
  "key3": "48DnVDWXSCDG4LZGPu51A93Kg1kULa8zzBBRfW5oUDN28GE7LcCJgZqQGkUzE1w9HkakW2MSe6pepRmHuR9FWUix",
  "key4": "4SPrFjtNWyRNpDzm7YP2gZ7ZHTmLZFG5me7ViuwSytT7UweYxwojDZxZHx1sBF9mUDiDZ7QQyBQW9bSqEi9d5zM7",
  "key5": "4PeLiATF8vnecNmtdnBBHVL74Ur7az6jeVW645uyNQTpYaHWm4FqEFZWyzMFj39NbVdntwzrL7bjbcSgpnefUqeg",
  "key6": "5VQrzTx1KsgwyHsi8zQGbMNjnikqjex3Eftk1dVJt4GgLNrBNys8XwJxge7SB9tacXRseimCr2sbMLkRXRLt2WJC",
  "key7": "2t3rCPQzss1TeeJAye2vfBwz1hVp4Uj2DQgGc1igCZvyuzwZ2Ygf8qRSFNELzyRkS5XxiANTaBiY6HWSiLbgit9z",
  "key8": "5H59sfgGT6jdeMnzCbo6mmuck5M7sUjsv4nQ9nSYnseWUk244THjooA9NpG2X2HdtViYDKvBorVmT1WjbP4PKLpR",
  "key9": "2szfnakMVrsBv4cxnj2vrZ2r8TRL2FkL3dXogF5XxeupHaTbNx8UpeGaBAo8dpgXaQjkrBheXo3mPZK1ge7BZj1f",
  "key10": "UxgKQBLVzkdjGQYwxx9hrbeJQNAT4soBqkRSnjdVNnBYvPByFjsDo5U5k4BSMbLFFX21tQdvymP3mv9VxKo3oTM",
  "key11": "PHbnDCPZnX4aBx8EXAUAWN3GVaf7Yv6h4SafuVxkB7FrVgiFX37YAcxQiRXAY2aVKEq4dEgwVy1YCjQ3FQmh4zZ",
  "key12": "U2ThCgafiLDPao4jafaZDXJWWFrddn69UeWX4cptF3zDZZyS8poVpLJeAY6FPKyhGx7KyFiEWsRYWgfsLZYPpdi",
  "key13": "5tv7TBWuhGjKXePh8wroBsEMKyP7kSeJdQ8okLNkY4m26SVERYEzzYKcusYmzoYH8gtHY93nKwPbxsbwnnmFpsKz",
  "key14": "2e27Lrzf9HR7xfmELNKKeRdDcHjzeLQuKnErNeJEJt9p3j94Xj9g3HJqSKcG2s7Nrx4FL5eQqFbZmrk4Sr6fiD4T",
  "key15": "3BBC9EgnA3uvb4BCgj1D7GPsC6VpCTUK7Q8A5EAAtUjEMDfKvGZCkXRdmpmFB8KLp9LzWJxi1pYSjGMzxPRMKh95",
  "key16": "ouZaN2N6Ptk3q8MbrpWcD3wZuK71kXjBx6QVQ7J8c5NC4fYkqN3FZcAGqBXoWweg98rhPoHcsPifNvWtjPiN6wY",
  "key17": "3enR3jGxbQPZyhGZztmvsVbDsXmKXsq5dEhunk97asBSDdnRTg9t8pB4NyvSgEA1g55pbpyRmGSPSBK3762qrRhr",
  "key18": "4XPUzKtQQxGtFyKYtnWjKYXvsJkm6x4Lf4mJ38zNpFcPo5rNLEYAi7KefsAbitdAgxfRXQPKY5t2jMM5Z4shdHzj",
  "key19": "4SE6z6SDgfdb965rb6SoQVhuFYoKDvGgCXaVXdvnacBGyXd3CrG1gBTaGMDusn3XBZKYtiMTpc7VHwDXNKwtkoYy",
  "key20": "4tTpqhT2fdxRxchv5BbCHmVZ2DENgBTXEL8Z3cQbwRjdKuXi6QFTQzjJgjVeUFgSYEqU9ME1tzRdHdmhfChK1US1",
  "key21": "4HF1HD8RtcxhAtpJjE9qxFfMXsGmQzg3tA4DqmsF6A5AQeLaL6pEm2AMK6ymYmai8pdntTgad7j85f1wzZAbVQQb",
  "key22": "fF31W9VktA57g242NHze1RJnCugWCcKXUPU1EJYP6pQP8VvatWUvw9w81g8CKq3z14XKAa4qpANoc7b9B1mmwZN",
  "key23": "4Jpnh7oaAhs2G83LCSDwvGFY1qeSWME6LAwfiJrm7bJ4xWbftgfGLb9amZfGNCpnRMYj4iqdkChgdpoDjEDhDVwJ",
  "key24": "42MqfXu78TwyRn9yTBeTXxVHf3jDUMuAKTjTCGhNsEdD4RRXYDzUmSDMYUQ3KvCLvH71Vxi9TYALPcHvPQEtkZAE",
  "key25": "4Urf8p3ReLF3PVhGvLizL7KWnzMuNJmanDLRE67iEQSv6YW7CX3pJtT1LAhn4VZPmHFMqqCbyup8nZgQJX9UpmRS",
  "key26": "5QYyLTbpyMn44j2TWZeDQQiKVAsAd9gxHh2d1qCwsaL6zeygZBU8cHznvyT4w7Zopp7pSL2VjRKjQ8x3Qr1deiTV",
  "key27": "3G4gQSopeYpBh8YdcFYdKBWCdBNnTR1A3uz7cGCnzL72KSYC9doDDAu1bAZ1GotDBFtu23Nm4ouTbv8D8Q9axE8K",
  "key28": "2skZYhSbG9dYkyEqorLMEuUXidCmhm5rk84etDn8HfBkbrSCxUjo1jbg28NqdaLgNGCZh1vyaxNW884FrHqzuzVE",
  "key29": "5RuPDN22mciHb3Me1mFcfWW3LZcqGVuyVv4huEQrub91Koiz32vb9AMzjjzuQvH1gnq3ZJdDg4pa1D69ZiPMdZ6Y",
  "key30": "2iHwBFt1hjxgYZGoePqqBgeYnmnPeCuTg3WdiDfTB3dFuUW8JbD5iQgagFBHaRdxWShjqqr5jsBRJtoVWDuorPmU",
  "key31": "4GC6beLY7mpKJq6FMxak8kwPRzyJcL9tm3XybPekqdLzrSsi1rQ4ZyrFw4GWm6EvDGED7UaSgpVPREmov3DJCa6E",
  "key32": "3VUY3JpKvW6ySHJSM8R6GRhEBWwqyocqg9G2ZT13FFci91U9VuDE9HuvLbKNsqUu4z2YBfM1YieSSEU1nN7jeY5T",
  "key33": "5ELW9gXZg7iQF1tFyT1hrKxd5Z3ZcdBKtQvHsuRAu8pZpUWnbYmjexxvTCVXenG2jUyjucFmQjomRjMdRW3LsxVb"
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
