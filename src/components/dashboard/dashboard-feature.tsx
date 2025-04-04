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
    "5WCFQE2vAfvqGQ2PgjezopgvFv6dX7htJzUnmSorrr2VipxRD8L5itcu7L36DWfjMPtcB9REpfGtdtRWLRMrqRWL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cTrgr4urqKG2WutcMGfN4ZgPDuDEghYoFmuwEzK72TJWYxPsRHAhgsp5fHb7oKEGK2zBPZF63AyfbZU3Phoon94",
  "key1": "4VUJj8F3wjra1g2ED3P5e8gnBsquQPmofqpgfbQxTGcucf7dVvsnhE5DYSUTwXDQqYP3qCsnBfea5779C856xwy8",
  "key2": "4TbUwQM78GZc1wPpMs24JBMbkABbGb8L6t5izmkMJpUi3okCk2TiZewder5vHR5ucf44xgqk3ffvacwk2cEeuW9K",
  "key3": "zveuSFbsZvdhLWYrib3SMjkwHBV1NR2x9xxVHQecaNgAaH5LTkh4RfWhrYjVLN2szs5g5ta232WeuVMMNg7M54Z",
  "key4": "3MyxbbpUeZPCk7NDb5PkD6KQHLrzTxVxVmF3YbGMHkD8f1WAH1YywNMyzRKbL9DEYPpp29GQwgsHNRr6iwzUWsfD",
  "key5": "3zLPNNCVZrFPFFoweF6TGZcVxPsS7T7fhBAVfkz89aTc8bSXCBhHtEUpcnPTkDDAzF8NmbLi7ZxhcwdNEFSrAoAc",
  "key6": "3ME2fScP5KyEqYqAD5UnJYE5grq5GvCKv9msZoHbrat3EKSB7zhodKhL4f72qkjYAzcrA9qJKPe3F4bQU9JfRf9S",
  "key7": "5ELUyPPRpdx7wbNHtT5imPpazucTeNRURh2DFVQs3A4So7AW52rR8KAz8evXNMUpCZNGrLYaeCf5hksywxGiLa3T",
  "key8": "4sgkuen5rKS7bME1eCP7PAuAs3RF5nBjgwinuMSTpTutPxhYJukxEKwpW3q5spqFxMJJGFqog2esHBCzAa3XRTT5",
  "key9": "5R3k6eih1QnvYAj3eMWvGjPNiTT7dBLCUZcpZEh2oUgniXx4N5a59Y6vMLHtiTDEm2Jvoe12jE21pkyaVsHVVNnS",
  "key10": "58kjdvRYfDFZCLyRCQXF1yybgqZgHs55BcbnRRq4AsCQRhn3spoMhPKtYerA8nVKhZ15zhg7GTdeNRpJbYXdoExz",
  "key11": "5GQ2e8oTQhSDeJbJBgGML2Jj1WGfc7zrxvpnnYTQ58V1F6V26SrMLEVRtrVf7fmeWABEJPSw84wVXWnKNdJhpKe6",
  "key12": "2gBVKWSyNUcNg86qxuTTsFU8FzKU35wtVu6eNC13QVgHU4h2EwqvYay6MM6CYRmJkLeaXEnJiZK677z7LDC1TLBv",
  "key13": "5vfE8suDwji27Ei4XtwqYH2oVEmMWg7S2u1dQW67QuaeF8LKY5a2Br1RS5pZTHxX7N6UF4Jtqhwd2HAKiyYjv9CV",
  "key14": "5xRtb3XuzyyABdGrN3qRbymhvdQTjKBhxyXzEHqu1Mav3ejf1uB5drVzSLHNf1jV21wTWY3AoUBspbinSY2wRp3C",
  "key15": "2LYkVKr1yEwjSXjzXS5NmJfEpjbT7BHx6chS7G5qNzJmqpeZXEHLLjSDrH93rSW8PKgTj3km9mYj7npSL5s2DWKY",
  "key16": "hgyU86Xbvu69uVMZGTVgcuG4igV3wDNqu3EqFHdvuZWm7onh1pwpufz8nyEw1o7TSfv9iBDKYZyuqKuuvByThUK",
  "key17": "3R8Vhqq4Kgs7c7ZsacpJHTtW8JomRNFYBdtFcAgsLqJ3f82qLz9LkGYpynf9gcLNHbdXN8914d8FDTUb9Ep1hmGc",
  "key18": "62Z4ksGD1Fyt8ZG7tXvyJ5UtHEoiuJoT2EYwjQeLZ1J9gvJHRoBrJfVzYLMmLzuY1cXjzbMv7Yqj4FasLmLxAjFH",
  "key19": "TJvhSPg1Pygxr8HUSjxTfGQT9iqZ5PJkCmZUQKDjMoMxsYsbGX1ZU7SWDW5zJ6Fj1JBepaqoj6AG95tM9r6aCss",
  "key20": "dbLj17yV85MaxSPsZrvdtQK1Gp5bzKkB8AYP2nCfWipKnxKgSJNyG4FVytqZbLRSzdtKcBz7vfQSLBbZQM2xoKF",
  "key21": "328MQfAsDzgcgodoKtkFhCdeqVvVev5rfRLNnXnGCRnFQKnuDwgAZtkfo6dx7XTHibJmchXGgvxLJvDcyN78BJxa",
  "key22": "gym39JZfphk9BaA7TzBvXFVZ6rVKsMN68GfZk6UqRtTE5Fv89kuaq3tbasapkvrvmxhbWnG6r6xrUATvt6GHtNf",
  "key23": "542cRnZFGAUcCCbwRdUdfDNKYWapgYrjXKHQWdSevswR6GVVrcheFknCoXbrNHA2T6aLqMiFhBdmzn768aNTcE9K",
  "key24": "3uNSRHSznTNKBGX97SqMgFpGJXtczQtHDYfpAW2y3GUaZh1pLP1uCgRYmdupgbgSVG4LaQMDVurZpCZX3o4mdi3b",
  "key25": "4UdP2p7Cg4kM3TvxoBPPgEvk5Y79eTnQeDZY1CC4WoLUyHcp3yeR2tPLKBY9CvVo8WN2LutaJXKmJ8RY4bw5ECps",
  "key26": "3hLBa6UuN7LLiFsu3UPqUyVgggcxcC67z4N31XHS32Qog8bkuGRCwwxmf4ftfSb91B8Q4amCSqE66SdZKDf7JL6v",
  "key27": "3w7WiqtbdQVr2mUnoCDRmkb3kwAKwKW65cJsfWnNGAJeMoSqMC2PyMTZteqqcDUbtGRp8MoE1VD7i5bWxfUMUxvr",
  "key28": "45J8JNBehp8gzcbJhD7UaP7RyUkzAirE8GSimJi4863UsGuZdz6KmCM6PgCQa1P1NB2PXToxpGdtTt3d9AQJB7bw",
  "key29": "4qDX4Yc5quzmgyAwCbg8iG6DR1NdbuW5wyqQm8Tgp8m3sey6UPCSpUQie2vpym6gKrMiDM1Lo3mWWHWjt6BBB93M",
  "key30": "2eaxjugNe1Swuqrq1cBbfbfKckzMpHc2V5dpvMtdawgFfyks32HsSue3TNyuC7VERicLoRcVPYhYDTmKc84Xt6es",
  "key31": "3dU41Qo66uXFAmvzRMFAh7ssUiLNUPV1FhV2XVsm81PhvbZk7GgrVtGv2yqARcLaq9JajB8j9GP9FimnNC4KYbbx",
  "key32": "KarmCPS9XDd5E5TCtRZcmZcdvZXU6YdW4h6D1npA2VQf3ycLKX6sMAq8zvPTfuapmS262Hf8TTLU6yGFZ9rqbpb",
  "key33": "53r3LRu4vUHzxqpgho9BZMnVXPCe9kEaMEqupCcMdwuQse7Meo61uHEqDupYrWADhYee7cmUm7YuFVKZJywgZfH6",
  "key34": "2fnEJ1EvMtiXebzZpHYmCtXFd7vXxz4BNweChpJPopPLSQxikhH51ZLvU9JA5cc6wv6frKWo2xPMzCdEBXANfPt4",
  "key35": "2DQ6K6P2m4DK1dKVBsWhTS9uV7NXzeqeuCrb5oc3FfjyUxFJGFUNKnnpP3y8eNTFcvNn5hcNww5y21Tprwb3ssy2",
  "key36": "2NH687KNyq6bqN4mCXaC8RLyhHP5XifPRLB8njjedfxWsMYJxDDr3KKBTG6A19DjnWSwiThXKNRebwsgkVaqShdK",
  "key37": "VLKL8Xnu3ejV4ox4uCNTrnaNY84X9F9WzVpihKUQtesmDeLCsUntNUemB3rY2gpoEWhYJbdtbWqFUrm9yMXFthd",
  "key38": "5p9TKpVZHDxiobhMJ8BryXKaKNs777mnwnYjfQeYXYxSwtjT6Z4FEGNu9q4H5yZnNUcUDYYvntuQgKnZ6wp4UXTx"
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
