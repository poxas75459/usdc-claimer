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
    "4UQqJidp5ayfiRAJu1D1xKknTgN6ofZufbCGUudhr7j6HodotPu8zB9m5BgNAQweVGMSsx7TkV4Sw4a43gCoiUrh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gLYND6mquuVnnZn9951ccKUwZTg3bebsrj3T1xSHmapWYWXSoH4B1MMWjp65fXC2FznkGXsoof9E4hb2vBXXVAt",
  "key1": "5hF4kFaEyjb96DQnjBYyWsn9MygzwFyPwZ2SSTy9FDyxxCEgcSbMNk8efziCysQwsqGZPexBB6fRrQmpnRWxVpdB",
  "key2": "LAiGAsYyNm5hqBRtnY78FqB9iDAUBhN1rzECJuDcVD6Fh711XMyS2y9bCkReM3U2JVjCzVUwM5E8C1XzT4t4RfQ",
  "key3": "5Si5c3VHmCauYXCQnV5hvAw29MC1hE2AFKGxaSs551JsrwtwtSrqvSg6xKGB7afRgTUGCrgHcKnxeTC95c7MiY9s",
  "key4": "4V54ezt5gabpJvUmR5hZBD7DTFUqJ1QTQMD11XiEyvPSWqe2XZYp8CwovrUCCpQGoP5ZkUkrBD9b2wJhvRG6GWu1",
  "key5": "KsjyqXCvwb4tuyETmeoFzNYsJ3PxUiJzAuxbf2jXhw7cmwd416tFXPY12yd3Hes48zHTpEGGRiEmW3ESXn7y4KK",
  "key6": "2kQRVH1EAd8SjURh5eqqZ3XZe23vxRikR1rgCdVKaxQFsW3XH9C8aeZw4HKWHvx7ieZULBtXHDEUowi5sSkt71rj",
  "key7": "5ftRogqVHNMQ5USPambDz6eGJ2bUAuETQcUD8uFpehyhV8jK4zCEPiAH9x2ab2UZfNUG9pi7VmVzKTFzz2m4f9kk",
  "key8": "2Epv6pYgjCXTNzLnhX6tqKgv9zYWKKYkmwGSrbLBkF3ZjM8PsVdZ5KYy2pXxM4eGkJaP6i7NsAJdrJXb1LJXbV3j",
  "key9": "3mxYKg1qG5PmHx4iGdtsJZsqmDeDDXXgUDTcUGUJ3jsTwWFc13as21RGhGKavnskK5DzVfPtf3u1Hwk2YaZg4kK8",
  "key10": "5yi5VnPtiZzzFDd5vX4Ewi1VqczmevwLjv2sEyYkCGvMsU9nfqWKw7FKmpdNeL9DLrkyfSJpuzpBVu9CqXqiRpRR",
  "key11": "3tKBgTdam86c9PWoWnNXkFfssZs2gjRfHK1w2B5hekjJ5Vi21bBYxq3xNB1T3z8cgKtVeNgaWFv7Pa6DkpZrbyun",
  "key12": "4mpGbizC7bXaJWoSuszFq4ShnP5DCy1w9fXzZ3tkPqTK1upqUxkWjwoBEGkBjtwdcK1aet6F2wrkWpKTBBeY7B1R",
  "key13": "3k1sy4ntQjATQahk9wTL4it8rsVvbQKYhJN8nLagprk46p43mb5s7dtcxo1eisdg7pbgGEuTDZpeiuDGRXTNRffq",
  "key14": "23jd4d7FXg96VQVxrHhceRyPp52iVGRLNFYVNsgVEqcHkpmd15ueGLGz1gBVS1MJyd1g2Y2r3U54Yzv9k7CzkrHL",
  "key15": "58eQULUe6u3kZPPcM87WdauEK8J2VLxEYt38thBo7yMaTdwVxcCZLHWDhsfBzNEYvGcuS4mWffrmbrr8Gjnm6vst",
  "key16": "24hCpFQvNR31CsubzQXSSQZoAHWGop8wfzhYK1YrXHkZkr147vjGm37X9byNQAFU5RgPA2Whk4dYKKfBE5rEov37",
  "key17": "66wjbeuJhqVtUmik9629Tdsfh7swpYi8J1ntCHwvPVFNko7RHAHWNe2mvoswz1fKWezFToCozhA8BjJBD1nDb8N1",
  "key18": "5Trs4a8meXNc5NPdxcqueUmeCNxPY6ug4E2WoMZj9fsercCEkaAGb4jK2oic4GKEtDNv3ESdiMqFA8uJ5y6WR3So",
  "key19": "4S5GCA3s5pNVr1QwyS2DARDCF6jVCtuKZjwrvBE7xQyT4T3tkKwYjpS4qWBQxY6TCHCUREq1QjTF3J5UBtPcayhN",
  "key20": "2QEYhMcUuePQUEKKhMc4crmBHFXHKcsVijwWmLRXs4QsKPfoPtGLZRfAjGUMaq48jmb82GUiVCqizVGuAXA4DSWH",
  "key21": "5EQJTDT21NqmLYPzAGUozi4pP3KTHu1vc4XQ9vwUEeDjRTPbM7o2f468QFyQZX9nunWnKUUC8aab7uqGWkFRBAwa",
  "key22": "4G1qBB9CmhLjPye8Rxd46ZddfSUZzSL7SSfKYv7znf5igbCnWjFd3NwAqzkBYcZLiT5SPHSqQ8r4ozVPU6s5K7ro",
  "key23": "4D3Drhmqo5EDYucpzc12dXZfJxRBsoGirDPvo9R3xvYqmh7B6L3xeNkf73xbfmLKCFb1gnxSyYiR8NTqWzHQxTMS",
  "key24": "5bw19E2srduCT22Vps6TiumUJLVTD54NXFqXnF7Ms23KHgkupGZKgaDKkmupcHAFka6Affz3AsaaMqQqEUSLicYc",
  "key25": "24ynMP4cGRzgkooRLCk4GDHogsCh9ngAG9FaxYuCFtXp6KmtEyhN5YQT21QQt1x8n1LQ5WDQETHGuu7UsXm6Dqi5",
  "key26": "3on5JNfbhefPeyifS4bd3PJAkwW58onBbRsRwJeS6DQR4EKKLFM9VQcZdYK5DprsHzcL8fZEFsGUQXZATf4btXyu",
  "key27": "5Hr5zZXXPjPAnrtoNP7yeqi2rnquo7jrQfZZBjUwqU5ia6UbwD9CRypABb2CSujdBJ8uyyQY6UgKxEi6UQYno34K",
  "key28": "aLFnrxvpF8MihrxLPd15nAFB7Rnb33p8AGewufydehJoZLUPU6qqr6rkxuviyn5YV3oFBSDzWheopzUAisJqe2w",
  "key29": "5UJ8ecpkTchAzZRrm4a3MQvBFCUtTMHeHqh37wYcVh5bGseVxygtNvjBeBtoBadwZX2tiaawFzxumXKuAiD3N4y5",
  "key30": "PLgTAcMeirqvxS9kACUfH5dejBkFuPFBQdqYPubZV2chYZb6PQ31ifDLaPzuvmKaB99gH5Cm5aGvgMn39p7NVrz"
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
