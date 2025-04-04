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
    "PKZDTtbWBw3VExGL3jTyqA7jSrCfHrCrmtKpwLyyNLkUjFkZCJ62mTJUEthBWmWVnaTYbhTvTSL1eabPWtMCTRD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "aJt4bhmobg4SSJx2NE1TkPXe8K6zzSVVvs4Jc2kXQZagVDDtLixcM6U2fsbs58LHaWZgsMqU9PaScf953dVpfRy",
  "key1": "2gr4LVffuA2GXQb83BwiAi3zCPAUXPiLYYS2HDw7aSFKQrX4pHNt3fcrvjC8NywoP7B3oNxovbxDq47YJUESwyRT",
  "key2": "3cXPudkvs4taQqVJyjMAhwwNoPELYNRV49LocPq4cvhCTycweku17JbJdG85J3xxeZRjJmmgoBwy1Ebc4gG744re",
  "key3": "2crBgLcJheJTdDkMDAiZ9ad6sNC1VavEaGZbEzCiiRn8BTT8D84K7ifw5qiGhSpAY64cuqcZBvCgt15eW8K6FY6e",
  "key4": "2LmLBQoAYrHcjVsnKcu9toWAHpQtMvv3moWCGU85MnDrkvE8MtZckHhga8ZAM2kpdjL5iJqm9X19wib3UMHoBEDN",
  "key5": "5Kq55rd8DRXqSAEdCfpP1RBVEe22Tjwn4ZjNpm9LWQd6vfLvQC3wmGV5bbjVyKNknbJxHHzkmHe2hPUu1xpTMYAe",
  "key6": "RfiWxQXMDQW3QXNkr7hE59e6JRDY2ARurTu5Hx2Cbu8MGY4736EHCA26pLV8L3BRRgGDfxUHnAERsuqDahD5K8s",
  "key7": "bs8qNceVHRYy87wwpkJcGMnebnrReArfCvzLQVqU71pxNMzvyVBf8A9uHZcei6ENQrTtxVTTYer3GGAwbue4Wjo",
  "key8": "43GqrzhEniQzRFUiuQt9gejsn9zkCb5UU3993axsF9HC8Am643zBMB1QzWsmJMPftHQyFYCB9MB3VgJbQMkmr5eJ",
  "key9": "2ZrChE3KEaiXnh6ovMa1zVSDUHYh43FRdkcoqeu3f5d2TZ4kg84sRb4wNimAB5gNJjvgW6a8HSk7UjU5YBWADdgf",
  "key10": "49xMAsJUBsL3pw55F3drisGoEBBRsLdzvw3bbse5NwWxaA7fA1yriyYii4uGWqT5cQo2wqGRb52NNJedWBU6wgPx",
  "key11": "4Lm5SMFCXSALkgijeGGzXynpFrUTYycfKc8NwRHjJ7ExVAmM3ddf9VcVf8L9ZWVjdH7eVPi1C1NZUSHY6aCLneRu",
  "key12": "3d375yHVEnPisEvKoosHyMUZwj6odwR2hL2siwcUqbehuCQigWTM67Kn58qws8wfTuriuFemk4d7KC2ohontAEnf",
  "key13": "4TgZ6YihYiW54CxvRuP4YQ33542ghzq2Yj6wvgNwHGGijgrWMAqk2isDHZtqJ99NVCDpZDqerjoNrMuWY7jxoC2S",
  "key14": "4bdadsv9tK8pJyhgZ5Z7sp2dHNXhCuwuXfLWXi72YwnrmgobNjqh2gsjJoGGdBpTauWKFQ9y9FSXLCdPKWA5frTW",
  "key15": "5ggYoskXkgXhAJBRqQFo3zfo1BN7kEi2kNj1NPXRgrkmSgyvynMyykbpGE2vhNWh9nrk5JicLfpPQGLF3mhzvVUf",
  "key16": "2yMa4B2TZkjym3s6pCE1piVVLWLfQmH7KvzGJJWxRUQSGZuGU2ciZqXK4DV7AcBTkXxewJRKjZarVvUJfJywE1uc",
  "key17": "22xxebYjjUDAdFxh4PZRSX2ZyM9DQmDr8hw1QF4Ag1ve5ifiSyGMvq6nwq5iyfoRZRqbNFmtLExwAQhVSUUW1vtt",
  "key18": "2rWvvKMu6EFhjjnS5brLSxgrAsbXTuhxmtes3hVt3WX4cm1ZDGx4XpgMNBFkgryqSqsLX7UB3ZNRHUJWqtNiR73a",
  "key19": "2XHK7iapvk47PZS6T287Jf8H6FzSSPZFVcbg6cJyU4uUSg4qQnW9t8yHC3bXcwdJytA2GCSsEDBySjfKrPXcvUsV",
  "key20": "4StwgUTP6E4djDesa9WKkjJs4aCwBbc38AcYwkViiU83QZvDvREZ7VFeZV52MFerhSPTWNQmMSPbgCRsp6mjgeTX",
  "key21": "4xQ7fNyDDyujBXBAgCLCU7BqspJyXQLKn2V8vtCwj6qpKb5mWBwCLEwQ231QHHeNAL8Fop29ZtUApVanqK1fRP2m",
  "key22": "45jfndPsYDQDdgxFhwRg19r6qaHLo9zgcbb3pqMN5HSDJNtK5B5cM9cxe3Zh8RqRFKNEERa9XDutqhykHbyMwDip",
  "key23": "5gsnnp8SfQeitxhSZkx8FrHKazkkaCkupGAT8796T7tJxu7vNjPrj4faQ9A3MnvyzKyYzRXeFtN9QY2cd7PGM493",
  "key24": "4MvwnXXLjF3tTLuQGrdzxprkNeu4iPTc3XHrvDKdmEiRM26VCSc7VC9NBoLyFMqkgLRkPsNrMyjCaBve7LoQDxnN",
  "key25": "5WqusZtqft3H8Br8FWq5b6kph6jGMHxHE23T7dKUQQUi3egkzcHQjyn5VmaaYQpqReZynSWYBf5rDoH7ih7HsbDV",
  "key26": "4oqAoYBTyyKmBqWrwRXEo7SzcYCEDMHS9nQpRdLHDqoRiiZWRDtZvhwjKh9dLTW5Rmikii33A6BPpngisiLUeg6N",
  "key27": "5nYa3ySozyChzoC2ENs895y1e8X46xsbAc3m5biZYmwGrgPWYAdYxUyayjKeU7yhv4Wj2iqn33erAEDRZTcRZpxK",
  "key28": "54AJM5tQD8c9CeQinKwoSiALwuTtqCF1Rkf3h7Xf9CyCBxfj7QHq7xjVoQN4YRSoax91JuBQz398LWKAGMEuFjXy",
  "key29": "5gHWNVX1hSmEZQpmEoFoUCfsup7p2PMc15PUGSBtwf7X7ckYBSbgqzDCP6YkCusUVrPYVeefJbmQNd4X6gWQDEQg",
  "key30": "2z7oce5BrcNrQeGje3Q9exuE1dLjKZGAFqrWsPFzCwRzJFAS6z4JwQgDN6L3twzakrtqmLX8y5g5q18wvGp93WS7",
  "key31": "5pKJtULRSd3n7z3ZZz3LByfcLDpLQiJkjWRzLg3euGPMDGXuiekGg82iNZPSEnCaZxz1jetW6eNyqBFzuzPsCFEq",
  "key32": "2SqL1Z8hL2g1cM4rimKKrcZYioP4U4jvnCzJ7caWeukqFL2SZowp8MJj92xPTaapswEL45fJbg9E6dbBYqJ8F8XP",
  "key33": "44vwC6DvXt1tiSe9GcuyadjqX9aYRkNbUo7bR64Cw9WPJ5inUtTAhTZCmewrB4jv9eNhBk2EyQWvhLeQHMdy4fp7",
  "key34": "3nLfKTGMqxcaE6bY3vTaHoRWqDuCpe28WcxmymNA4h45eELaaMZr2NdJ8i8zgx2JdjaMnHQD367TwLdN7PpdVCYg",
  "key35": "9y3hKSztVkBm2gv8PCSQcrUc3cH7zEwxJbpoYjg5cXss2LXRBzohbKsV7TM4iWjxi94kRyYmAGXBpoHgE7PyZev"
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
