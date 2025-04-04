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
    "3Cd9MNFgtXwEReSQnLfyRqeJQqmHLREhjRQSUJxqeQXtMRMejGHEwwakwttrRrqBcGc6TLdBj8RtTKL2CFqLbQs2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QxeWTLGkjMZNGMQMREGkgeE9rhsPMj3DefpeEb37rYww9ByJNoRpqHs5MRMGt8SPHgRQWrj1BscmR6TCnymH2Ko",
  "key1": "3pDzjED6iuGL9nudPzbX8Y9DTX12X4NAbuaTU1ngJc67iKf9Tiqj4ByHbQLzHWmL2m1G8ixiuf1c7ZCmcWXgmMSh",
  "key2": "3SkNd9hs1YjZ7oKhebtn6g9BDRSxun1fmxoih7giwZEKqXP6M9bzuwDYsUYhvDgUemmvjmLimXNw8ZMDNbwYchvc",
  "key3": "3nzHsXBfiLywoEhsgGUM4N4LxMFP9UmSffTtnfmcoV2kmJGvAiy33C8MiocZFLrRG92JcdXYmHdwBMbcc64Ev59v",
  "key4": "2jpTuyuMsv8FYiCLE5nn36Ce6w3LHJ51rnGi3bmBiKtaRBnssL8Y4bMQuMpCi35bPWcxNkMmtWmA7gyAzAH881sF",
  "key5": "3yyE3FFGdpcHiQtgqRLCTwUzvLZAjy47jEAY16AVf7t5viBerbUj3DBaMFTpVBdt9Nq27Y24CD1Bmxn2bKSCQX3S",
  "key6": "8A2s2CeEbecDrV9YTGjvJrCsi65bNdxLts5X64KaNYV3tt6DV3DG7PNhdTtgxESsA5DX6HRwvQssT3emyfJsHjQ",
  "key7": "4epTidf5zpD2ww1H695DGrpdMG2KoQcbaCgXifS4uiguq34X8EZ9JwMWvnGpZFjsU6ukimvgu3XLPSw32kFTm8FL",
  "key8": "5bewyg8bzKFRUKuwBukS6eQuwfruDxoium8RVtngJaLQEJsz2PUaRKCyC4Ty5VymgLtZVBiMjCo8PUGYjKBtH1xz",
  "key9": "3C2FhEvBAM9gcRd63M2BMmoeLzz5eqf1Hrsa3m73KBymCkqkJ73mnnTmNzbgtKtJa6eJKWAwdoDDdZzeHUMXAdoi",
  "key10": "29jwoMmFwLKaDgpWiCrPMqS2rgwuk5e7jeGhTgZgb1gG4fmZ8vX7LYW2EqrPgAeEJeYPoBXwQQZLZRBv4zrhVcqH",
  "key11": "37xnNGW4AXk2nWV6ouz4aF3Kk98mCNiFdEnmo6ckZkDsNnniBoJrfefKMqTpjNAgW7zaEBo4yx6mZ2ikgV3WP45n",
  "key12": "5jXFm5jsVwBtNcsAG1nMZVjQ6rMzYyQKcjbXZxK7PbU4gdCTDe5iM7zWMa9sFAZzpMm3WT1VEeTgDavXCgxGX3Ne",
  "key13": "2ryoZ7BWxi1YAhvNVhqEJJ8vQayUvEnANvPTCfJRUiM92XtRamPSNjifnFQQa1NSXc2qfmLM7wLpP6VvB4UjKmFe",
  "key14": "oN2B4jav2be4vnqCxKY5ssRegmboA2moxAD1a7PbcKHqXVqHPXCQC8qbY6BDY9JM2t8pjfGePVnR3KaEY7mLrVo",
  "key15": "7MATAw7PkZEmtHk6h7r4FybKG939KDubYzidzkM8ibg2qqxn3TCjEH4p5sUiakYvqjwGWk6vioK5t2DWJNok81A",
  "key16": "XrgyA81MzkEGCgFiKyfohKrtBvLnRkxsRB3o8GpxLsBN1nkGFnkQrpnaTdKHzamTZTDY5NUyqvQcmiu7szBo2cy",
  "key17": "2o8WLTcJoDrA3YZyGa2ikRScLoaJajUPfioke1Nigv5zzepiHm5oKPPAbUYpqHBRn6evtxjD4HYXwrtFXPEPFFSR",
  "key18": "mikE17acuwGXUd7sHFhKqCDRAHSvB4QE5dZf1Ufdenmt5HUcR5ukPmJipYSYswwdt6SEhHfhtxxJTJ8oFe6xD8T",
  "key19": "3R88B6SeJArJBBXT6VSEg2ocmnh8oZXxbCQqqAFU8f8SWWPXZqTfCTs2KrKo8phuk5kCfGv7qNnFX7GLCLN7yyWA",
  "key20": "36DWXPii4RvP8QK6XS9wuodEPJojpeYgnJvpMALBjZjadVnNjAJt4U4AvJ5Yej5fuC9sVCUP9aUui5Yed9Dksfys",
  "key21": "5M5fH2ks7NiYBYWpn8iReqq6DRjxf1rWiWrgmR8cUXQiT5c7bV95nBkUfHqnRqPueMDdM3pWuK5J3jQfinAM5gyP",
  "key22": "4vEq4P1GhfgQcpv16JmQEwKkeHrWN2Jx7nfiixpn2pfp9GhGXWLPnQH8ehDmhjvyD1sPLWh3cvdiVZTGWhWToL3P",
  "key23": "44eNRjVwe25QjH1zH96WRbNuow2exVTnxTCFAJq34UhRCAeF9KfUm17B8bBuJ5SF4eu2TMNghFFmpbBobZJoyUqM",
  "key24": "4GAoeisfts7MiivkgkqjjUZfA3SUihsvcELW5cP27rHzuBVq2pw1VMaw5gav5BAsouzTuiUurffK9JWL4H8W7f5X",
  "key25": "23djtGDYFPvkmPjEnXV6wX5bTds9hEDmSWXf8DsHQFLeLJbpxrDcvvt9qS3yjcnynXWxzVdMSfuAh3vCtiXcnohD",
  "key26": "2gxWBzbSxp4fBryXVHhfMAc26dM98UhrXDsFrKCh85SdTJs6eht2eeKAyG6e4Bcuou8TcRauMedj2LT8fDdz74SE",
  "key27": "rzKnh3b8fdWcL9TKKSUTR118cMxG6tjqbds1BJGk693pShg4Csz6BvMmfumAie7vvRq6URwGK9EEXUvpNXCEDHZ",
  "key28": "4U7rKndYNnYUYtN5RqY68b4VbhYypJhEzWNP4vqJCyPkq235eN2ycWg2JkbaTc815PzswyYLXFHgs82c7y53B6t2",
  "key29": "5AHCPRz4E4fqHhvq58KMGugbxxmbA9vjdzoHbVFN16QzeetdJstq4RhaviQYyxWmq5MJtc9VaU9M4dePsabNyL5M",
  "key30": "3sULNVCtrTzKAxDRE4Lt3tUmaqfWkKAuBbT3gPjkrstvARwDE8X5NUrmB4nQhKnpGnETMoKHJHRjgsonmX9Yc2H4",
  "key31": "4p5q1vedWMg2xgBLm8dgsv86jUdWpSa7BNFMWYjECYRAREpTQu5wycbesF7druTaDNPkNxX7Hqp1LzbBkTLcmLNg",
  "key32": "64xPhEP6aF1WSzNWmKHYc5AqkyMQgK2iS9wuVYZNZ7aW1sw9U7nhxdTALNiDCtTajHPKdiR2f4dcTEtFuvN82XYr",
  "key33": "4ZW9dXKbeLtPmZPKwQEbLgxcUcqPa3ar9tbkSZUig23onBTZbwhre5hQJkXpVo9qwMoqrf7xcmbQynwbMfmecCoi",
  "key34": "2qSh7vvTnijHWfGLKEjj3KHgSifaQ9qRbjge4w2sMLo1CeKAMkUL4u6N8reMoR29kKdLvnRzHCyHAvjE1TEaAXXY"
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
