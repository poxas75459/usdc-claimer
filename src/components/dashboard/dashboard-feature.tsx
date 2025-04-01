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
    "24DVaRfXbyn1uriFeU7Zu5aUrnEBrLxE2L3ELwHQaXmsMv5puAoJjh35j9DEPHog6wLPtFwWDTFbQNFuEYgvByCN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mqRDpCb8svRSCxEdT5a5aaEtHFMYdvorvuz1fNuPMgbBTTMFCLQteB6RVEjiS4EWYJ4Q6vD8K8CT7G9AsU5vSZt",
  "key1": "22PTUnVaVpPBgSDRWcZCXZ3mGorqu34uksYc6oRY2YWyFtC2LMgHixJCvLqRR6VGEzibAMqiyrEvrFHnD5nChD16",
  "key2": "4ir5Cg6QoV48WTvgG4s9XeMHwXnZ78SoYAutawRxLqfyznufrkhjHwRcJeJbmrjnH5iatGrXVuVCk42xtZcbvUPP",
  "key3": "Za8nGE3fcd9HErT8W4kwtJ8kiWkrpnbtu8BH69FkBD5yPS33JYULYbE8rHa5SYHxEA54GYsTxhz1D7pk9QG1eFF",
  "key4": "2FxdqmdR7CpyTseHMfQV5ExmRvhQzgaewtUEjEiwhQHqpjRWK82Q8wAMSMFCo6HAoUPzuf9ZksRh2SAbfXcpzDRL",
  "key5": "3AB2wfHESnzhaT7qcpsVDYqTCm6ruSC1eyUfhcMGpLsU7StWDsWsXDMKbXLxyTbAUGw5FQXhdCgS66bT8zwqqXXF",
  "key6": "4f56Dph1JhP6Rp7T6qqsq4ajHpT1Mdoeyg5gNTUp627RKbeox3Pb199Ky3aCKTd8Z7AXYfBnumZdpXPxdo4qqvFN",
  "key7": "47WhMSXuiEfGiR5nJEZHEEm1FfTimVLnWo5k4GDjEH5d9y2GfDVEbYPuKiA3JV9pj6qJ5hSJEB4jRXTKqTTHjXD6",
  "key8": "2RnEdrDQoA2LXR8YVE99puMiLBeY5mMGF218m7NX1y8NJ6sCovqYykGVeyNTXZB4JBkFaW7eG6E4ZgoDGCiKon27",
  "key9": "36wADbcGBNGWuH9J4HXmhacFUu8uS3PzpbJGTY8h9nMupz3EGHq5E4M7KDK2eBCbS6bxx8jPURryEYoMLg3qt5ob",
  "key10": "zEWPHjfej78KCgvyn1YePkMAp8pkLY9yZsmLTswKBDjL9qrxnR6dt4neQ5ToJgaqRTgoQRWZsa12QPqNDaxA8Rw",
  "key11": "49xf9dDWc5NPf3eJUTMBAd6QGFpAuywVNQUN7bFBiEAQYQTh3xAFHmfpqavvg6GH2ywu4KFmDUUpoXSMrdq4GEYr",
  "key12": "2wH1jPd3NgYWkNbjyCxRry6o4CpqnFo5pGbHTrBCLr85qjMyUKmfWUeJgKwk6ihALRqFCyGAZWFPKbTgpTRZrJEE",
  "key13": "48s9EdNaryfVzETHn4Y15sDRRXeQ95YbVasZDvrhmfG1r26bUzRrYofSqBcSbPvAJKyN2a4VnUigJcaQXKcpDAH1",
  "key14": "3XEmhNUo2ZQfD2X7EFv8w3HPfTuGAbgGbTf3Ek2ysu1pECWGVWLxM4NvkLz6Upr8oWMpPjHqJPmdEPdrYKTRkPU5",
  "key15": "4xqxB4wLYwDexe9B4BLfR3w4DNXLt9VnvZF8uZ2jMzDmXMCmRBbuhGY8SqFUNBthpFMutGHTgtGk1wuAH6uwNZ3H",
  "key16": "5Vw69NYZ6A3r9DAHxmU1oR8MabfEha6vbCRvJmGqyR7Tsq5BUhbEzecWrZJPPQaZegp8p3KWVWum9Qkf8FAt4iQL",
  "key17": "4Re3VViwPaXFP4E7cLatDDcJ8sKsbDJcyAf9zXZjfDMj2hGPGw4YaRdreJQbPKEtuhN6RNy4TumT551LCpRW5JXq",
  "key18": "ivTXEsFh9yEFTn8egtuux9j5TAS6iP1SXY1AUMNsfNM1n1m5msnAVFMChUe4UaSXsQ6yU4QEb1Khv9tWk1Td6Ku",
  "key19": "3HWuoh8nXz7buJQWHdgPvLNu3tpdNmjFjswW2BWPhZvGQe3X5KGaMR4xa2mkrebs6Ket89iWW4zATX3tR19D6q53",
  "key20": "Fp7BDQP1cMtLwPQBjVRPTm3V1YXFup8YWLNXtHM8E4Knzs995aRp31tLVNfmjqGzsxugrdeHphZvnoL4RYGwHji",
  "key21": "2R29PwQrpqHJGYAx2NHgfTc7vbBZxU8Zqhvey6x8xrAGwi733fBUVT7nmKDFQvFRKhdn9LfkbZS17P31GWu8KgNW",
  "key22": "3gKArq46BiaTfgGQ8E4PJ7vd19jNXKSQGx5E6hoHaqB3JdUHp53HKttuGUgL7r8rr1jTwX8Yr8c14c8QxkAd9FJR",
  "key23": "SzUBkL2eeriwGBpFVdGteeEiqD1qGVjnfYUnAJvdXcNXr3JC5Pk5AjKx2k2SqgeGcrwJTsuRUEZUVd18xQfnV3W",
  "key24": "5FAcc99opdp3qDv5mYzWX1mQzo5ZqRM5nDzH4g2FqQ39G1rY2wHwhBStaZQxgTpXy1o74CEbs8yi9qrCWFnSx8wj"
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
