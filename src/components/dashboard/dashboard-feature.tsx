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
    "41ZECSqygswbx4aX3trDUfFGCMLcyJWExX2ZPH2Mvh1vbegwPUNWQtiqUFNkf8QZkX548YLPGyV1ZcyqZE4uLCbD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5x4wgEt4zjzDV1jxgmxXXqBb5aneZ3DuSF51RdxHt6bXV2duLMHR2ZyG9JcgUSjWtUwEkyUTERbh5zHFKfCGTza6",
  "key1": "3yg1zVcxNL33rkKpzAYbsRuW5vP5h4bFu8hpJuGTiRRfVfAxazxCUyERT8cX25jjjBGpGw2ZjSNo1ZA5XwL3k1Pe",
  "key2": "36xYjELvj6sPLGpUB7fNEjTXG8Uenh75Wg2rRgvCHJh3UqqfXxKoQ5LznwPGz2zqHGvhBQP1qRY1JebxbLpmNpQk",
  "key3": "8a77EwDnFYGumxaa2hNE5x1LoXQjjryiRZMFgJSJrgSggBy15Whzaccx8FfxZHtbxBiVk1geeqWGeT3KysHYHgL",
  "key4": "4UvLsAQ3RCifV4cuB6GxvEVFmLaetKFQYpAigDYE1SRFMxLrvE2C8Ez4MwWkTrogykjxVjUXJ9MdStSshWjQqdEA",
  "key5": "TRBRiREF5uF5mdM4eWD83UQx3SUtS7ZwdgQYXguv6Bte2C1EVAcdeet9m2j63o8d2nrxyNpuHsDSWyBChwVVe84",
  "key6": "5xfn6fLfNMsyDG8siugpmLbtXhcXvfUz2QJ5MqjoCHvzVJ1s94zLvrU3DSGjBtkwzWbNxs3UPPheb7Q5rZFiw2Q5",
  "key7": "uMSXfLuPq8BfEZRp9bfqYKu223Dy58cjd5FgzJxErnqNcxcxJQvg1zHwP6TLA3mQqzUt56dfoUfxSqQLZrq3oDd",
  "key8": "4egxmuHckt59c9qGwj6cnPm4e67kRrj2fWAy6piEoarNCNbBDGoUfj3Ssj797SUoYkKrBAVUj4BNPszPsDjgTNZw",
  "key9": "41uypSsje3LqiTuPcXqPMCYF6QmLAbu56TwX1q4fVNjMdnsUvEg5M8R6YFZd9pjZ4wr9ENtuZDrAExs9avaLRyx5",
  "key10": "4atdLYMsAHaNmvY5rVB4JBFDNi1TNVFcDSRWSG4DBuTtQtTUHjSpCMbz6dFNFNtpmvVuH5UXKsdWRnhDTyqaLjRW",
  "key11": "3RBmrEybHeuTDw6ysrZHLypGBQgqQf4NFnafseccYdps2ggffxvzAGAYup85owzTfQVNBc6SiqhF5d6NvYR8dWWu",
  "key12": "TshJ1y44FvPrVerTLZdrPL8jDtWxUp3nTHPUm4A8eT569VUnP19w9UUqnwSg9oim3xKarDUhpVLKERZSvpSJTXL",
  "key13": "SToUGEtFe47FoAXP9QTfN4YkNTYGw6o8sMv5suGUDfH3ssKfWwcAMjkoRdkaJ2YC6yQKDSiSmCoUysRW51Hrbum",
  "key14": "4GDSLaXyhoHnvuQUASt4wLwjBWLJ5SH4ZK4khZB7Szq2JFNVJrCD2NHqkQwqjFvKYmYgVks2ZXdFPg2pGfVgPKyP",
  "key15": "2fkcLqACkobZd56BC7xWxjQGkhbtw6djPcKTrmi1JPiFiQKDJZT9BqyTYxfew5H9t4iLhyNZSRmJNAUMBS9wu2qP",
  "key16": "2J8Xs1iwggcnVPHz5nmvqRsaAjLfa5feeUY8P3R6PQ3mo88jihgSmA8RQtJhCy7QVRh1R9W9eULb2qaaxSJAB7Yw",
  "key17": "38sy5ow5WLmnMH8TBHxB8RPjoVJk73FSjjZ934PFvwEoZ6ZTC8CE5TNzVSBNH8Ge33tRLYYBbSH1Y75KUAXDcTq5",
  "key18": "538LatHCutAXzpknUagALDRk9rw3gGBRbPiy3ZBBnQQdMw7UjitaTSP2GPyCsPpq2QqURZHq6RofJAhbHx1a7Ebw",
  "key19": "3jxZJTuMFtk2Q9JZ9xvFvANaG1Wb9Du3g69v27cyrBv5gKu2CLZGRhRZi3HNJ5fqbANziBz5Xw6L6RMYkv4m3TJR",
  "key20": "3eFEb3bdDnfB8vg2C2fdrw1fPsSg8GDzSpW7eRBwMvM25D41Nr8GF2FzFXyh3uy56fneDcZK2fQTKPpkgV4yRUrB",
  "key21": "62w2hf5ytdAExWBZ2dDw3np5KSLkhhysiZm7QqtQMKFLtYvwjz7cko9PHuq7Q6Vc2uazgbnVGgWTxj24YkxhWuAY",
  "key22": "64u2XdumG5StTDGWZniyH5gfrFNpGUtekGvjAQQm6d5wLJxqk4rd7NPy4B721ejGQed6f5wk5XRGPygS5L2ywaJx",
  "key23": "VoXTow7sPKWWuzj5FyZApyoBzBfQkQi8sXcJqNjaGJ5KFPR1UxeRt7it4J6xnZsNKFkVgYEKUdV8GBFNDM84jJd",
  "key24": "26uQkV1u3vYNqpEPVvo2KbcmUrJu6vfy7x63dLT9PqVjx35QZEk2wGU9wbPrkWq7dQHdYqGGtMiSKDF5HVxhtzns",
  "key25": "4jPnxRBjiFityGUcY85Nwaws8n38JYp1JN5YVNzQC8wkhsWddk2oKnTx9syhEz35pi77WoxZhZqLcE955tuMjUEY",
  "key26": "2BKLYAXTYuovcLiTMgCj5EdQ5ouxfMSMDY594cZxuy2oDPWkWE1sgft4Yo6hpkayoBDQ1Y41MBRdX5ZXsWQoPzyo",
  "key27": "4JTvhSUE5NVy9TeuwRk4svkpLhVjXdYCuSbbSvjLTjKA49iFdTVkZVnrFqJ7Dd7mBZ1tNCQ5xxXqdGe9zKU6awFZ",
  "key28": "JTmPYUt7RCD2sDJnx2Gw583G6iCTmcrLaz3KYmEagjmwjtuxasePBywW5SYMU1d9rL9dCuKAPCcuZ61avY2n1ZJ",
  "key29": "C9btuwhXNX24ac2MXvSbk1XsgZSyihYjozk3Aq15q6jGo5G5W2XgvPyNLTpvroSe1V3BX1PLB49EkiX9hZo8LF8",
  "key30": "a97RvUHc7cgux9S4uwWY13XWLMbCNqm8tdT9dZX4XXaBsRnSaJZ7oM1bZvgTkpPLXyNbrDs1RL8XWQoMzBME8kK",
  "key31": "4LuYy6zYkVK9jB4mJvjeMMi5UKvoMVEwZBskeagMWXvQgyzJ2wNHkMvsTJpPM6M1mL5ujihHK8wtFtSyDPseZxpG",
  "key32": "uxvNrmreNZ2yQarFYN3VSiwYXQNsaYdEdyy2d18UsaCtzkAKCWvgCDZzs1hQ62UJVfbKAeTPq9LfSwL7e1d6f29",
  "key33": "RnKKev39fEndKjTQE9kUU8hYAuKLS9T9e6Q45ugkeJe3jCFAaHG51v12NYCdtzH568P3u4B7KFFM9Ljwq6o7BnH",
  "key34": "2RsAk4Y3EYQntKK6ZK37zuMgfr4JQF5HQ4SzQKWMn1kySDsKje5YVHZdxfds6XUmcDApcprC8RymYTn3pCMwFvTZ",
  "key35": "56NXwTPcXrJ7XEuy1hPTCgL2CLCtRYBLp2EtfxaRkwmPJ6rHA6NW7QGYw9qLKDjzcS6vtJiddY4B3k8V2GHyeYUi",
  "key36": "2DmTSxHk6d76mH5jWohrb4VrdLcSfardEGfy7a4GnBf6F27VDVuQFqA69Hygo7L59SQhuDhJ7JEFn9TtFpW2Ft8s",
  "key37": "5zehMxhCmzWbXCzfPrgBy4Xot6Tj4vNtm1E9HjoScCRJCuTLm7fBvtFSNcxCveRALxTg2v6h3ePZAogwDDnFo3qJ",
  "key38": "5Dzx2pbQHEwp8oEdFMbMVYU7wMYNVM8FpobCMWHn7pf4qqv5LiFCxqLasAgupyRUZ9Em5Tv1qiQ9ZJUtAF3UizJA",
  "key39": "5i18ugpPHWngx5LSjW6FrNubwMtccPPz6awaLiKb3gdbrsbxBqErheEBgdEkjD63KMehNj6FyGiyFXohinQVreKr"
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
