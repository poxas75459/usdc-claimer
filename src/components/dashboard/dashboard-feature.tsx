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
    "3PKmRqz6682uUZ9v7xdwEBv4rx6CB6AUfoxeSqvVepeg23Ysayzsnw4XqKHcXJVidrm6WybhpU5p4nJx8CdAos17"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YFnvZxUwWLL9y2FnyNXCq4eKvMDyCJvUZAYyfYuAEiABM123Q3zPWktvjMbRMNVpsTmrzEMdEASvVgwRLgpWgoz",
  "key1": "vBc1d4o3rjA7t1ZJLMq9ucCGcDknUdekuk36hGAUpkLcw7zaA3HCy6YcyndeejQQDPAL5o8MuRZANWgpo9FxQLD",
  "key2": "4V2AVbX5jARSpH6xeVazt4JCUJLdHyBGm5qYLTHst7bbQHeekNPF6oEU5J1fRn5gVrKq3MmerzgeKXKEUnoipVrK",
  "key3": "EqwErJfUqD4daqWHKYQCHG475eGaypyqKHcrfHVd3c4L9J8G4c4qMRGNxwy6s9DuWpaS4qQX4qxa16gd2BFdaED",
  "key4": "2wKfKQT3S5SEqaXNSsEQqmpxyWj27avbEcn366oKqnTERy46Ez9n4gstuwFe1J3o6ej3LbsAhA7b9ifQYZT6L3cc",
  "key5": "2sm9RG3JaPJRTin3bUs7FzCsN67PbXHYwGuLrtFD5hUaj3Ua9HyQGeStydVdCiMqUxMRG7k32VQPdLzurfiEZAwy",
  "key6": "3trBMXVtmu9JppeQsis4QkpwBEUAABykVzt8zMtyMJdBmju49ApgBL4on4HgnpCwNGiYevbFgQqq76ZMiBf4eHF5",
  "key7": "48eB4zQnc1LJuRxwpeu8kjoZmoQ45QWk3JvewvDgeoTp3c69WooRq1oP6tRuRZr5MnrgXCx67Q3NAJkGrwEP62i2",
  "key8": "4Y3Ay5yAZXLujVPpdjtAgtAHSeDg9f5GCypRTZxQz5RHBRjH3XsRue8vPUvCroYCphmUxLhQVCARL7qdgJ9m4DhP",
  "key9": "5Qq38qqQuFSRpM3jbRrLC9eM6uATA4Ap2Q3Y5T86WF7ubfDcQMRSaEzxb5qdUd8CsMgdUW1QPWHoo8LkTVryGX4c",
  "key10": "5DvoxB2DtCTt6tw9qGgDYLTn3nqjn7kDB3A2TDkpmuVGoE7svoVSbbNmQfTVyf95eKPsvNzhQ4PNZ1eBfnSZzzq7",
  "key11": "5h7gPfzUk7cHRC8ybCXt1KGf7TDVdhyRrMvnsgoFefUosTqr1dFw1vLFpFzdm89uKHf3XGyCrQBjL61jxXNgw8VU",
  "key12": "4kiv8UEbAA2ZgSD6iNrBAdMeGjtPxepYiGNyxHQo2pBZWXwj18VeL77h8w3yu7SFP3cqEvS7rpoJTzGhToYfM1Ex",
  "key13": "2BcM2WZJKyejYYuH9ymwuDmtg13AQMsDtvh55aSh6MBHUmbbbjS8tKKCRBQj5dX3yr5bmvUpaJZNoiMFqjoQD64n",
  "key14": "2R98MkC1QzvYNiPcy6Kd5DPma8KdhPJ6LdBfubTrUiznvqHcC4YUd1ZWAPYaZsyeo1HnsbDjxWT79Bqh4gRiiBVF",
  "key15": "2Ysqr1aktJqvMfNG2Q1f5nzm3VhWdofjcrofAyQVpP1saoRehV6cq8P27WaqLBB8YQou65Yzm2PjDogmur32c24i",
  "key16": "3aGRB8anUmEo7xKZkTax8z1uPZwvRve39pQsJ5oXX6jeWtbWVAz4sxsYCP9au2zFawdU4DRf8KKXYkP2YqQ6VBmz",
  "key17": "3omj9LDHgc6vRSzDjABsiqYkA7QyFjCxLu6K3kLojc9oUDrKkgJqacq4mhxeuZxPU5DCb1w5KCoCbwsdeprUNoXU",
  "key18": "4jgiTZACdayPwzbsms3q13fwUtwCAd1zt6j1xpVkBv4VxGC5YQQeAacN8rF3zYJX9YoSadr9Ufd9kLj8by9Ae2m8",
  "key19": "8YW52XUDMY2meLmvsYPuSiaRb6GN6cGHBeJSBEC4mvjNRZkTMfVp7RabdDuNQAGYYnpCUKr6bd6E1w19UddW8z2",
  "key20": "3264zfP8yZNvCaZoM2REpeMUXhkEBp5Ao3HLrYXWq5Jhq7J9Zq1Fe7gNDpCBCdJd7LPF6vQ1Bjh1er3Kd39HqaQj",
  "key21": "2azZBq6puERQP7fzE5t7ccL9rzgVX4vXwvw1BS5qQuNjsftwS497HxDbXiJydJD3Cttf2XF1tKgXy8YiWxRfjjRu",
  "key22": "3tcJNS9Z5Xz5vzrvmejjvRxjaY4qZFHNLuqPHfjH4Px5d1ep5xiahhYEQVPtTQvng3yY1jqZC7yHqK1EeNYrkprS",
  "key23": "2ZzJtF1MNsexyWMNnL8mgjY6W7HisMiFKTxHAA4yLpQmWF5Rg3ho7YWR12XhURcXD6Z97jsWqF7fQEDhmRjt8xas",
  "key24": "67EbLfuXZd2s27fjYdd3DuDP4BSfqknwsAvfRkzMkcUFRHnKoGozdwjNNUyfpzcZpqigH4vGAN8pQzVErcF6V2Be",
  "key25": "3LLae9kytsfwp2ustAoLLdM9vphw4gMkaRpJLUaxkwXM61L2n7H5p1CSpFssbqruCiXV8uvnLj5wgScvzaHviSTt",
  "key26": "oeZu91MRC2fnQofEEcF8JWVvCtUEuejtY9kFqYfbjPh9rcQW7MP7YpATAHDQaZgz6BNGcgKC3JnSfLUCsobYgo5",
  "key27": "3DLNUN2oqUBBkh8XXVYcqdXyD2NGjVypJCSofygP5xVPnKg5DnzLzFixPTJBzCEEY5AExrMT44Z3UQALBgMey4F2",
  "key28": "2W9xwSsyaEMquZRHmQQFstKeBS4WamY4zYHcFk4QMMucBUiVbDdBmaLj5HWrJPQ7LDrQeofQw9ahbc58QBdFVPDN",
  "key29": "2pvjs4xs6PXi5bV8BEuVjSpb8m1VfoBpojgYa7FjC4hJ4Ewfqiv74jXMuf3V19YCTDNwPyRxVJCAYq2hn61cWNLL",
  "key30": "DSLzdWp4LAp8dD281SdmgfpunvgSizPiUaDrVdfZMHwqCa69HLvjoMGdpm9ZhhdqEEx3S7LW9gAgrZMLZm3za4B",
  "key31": "3aGvxVxdkWESXNBq35BBGJ7cHWhUu4XNgLgGsVyG7nC8tmGS5hxQadMRZ3xFYzUVrPZXH7VbcWbMSWhhZHhYovVX",
  "key32": "4SJ4sxLnVwPvz1ixb5wizkGcv4ba723aqEth1E3MbQipZFdnd3zzRKCs3gBBshWcdmaXxAC3omSYP9WQaoENkgMZ",
  "key33": "46fcRuj1LuMXN3vFwWoEWvdty1N177nHU38V3P8CDFZfdsZvCFR848iD2QdnaU5qkmoa79GV2N8kPqKiLdaNfiS9"
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
