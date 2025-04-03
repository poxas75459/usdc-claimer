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
    "4LXUdkP1jKFpVSQSBGY2JjWyjF5y9LSbuPFuNHx62u9Z1mubFcTbJCqr6RnR992Jw7bH5sxJvV3CD2Pz6cwbN3Kt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Sbszgwf92eVrKSR9JH9mf5pYEnDhZBxSNmRHPBbPRXH7BN8Lhawf9BXGD639kTjdXWy17vW6WdbjC3kUzwHeVVJ",
  "key1": "5y37UDzJQtU4nYD3VNZw7njBx3jdJHWw6YCaEG6pLkSza14KBpWf9gAwcWadBs1GJaePvhpGZQ6sZcYC6VCJgP4J",
  "key2": "EgEwgFEhQwMqsQoXJ7FHLd2tiP3p8xjHezm5nevaktqRU7JPBs8y5bFojkaY4vM8ZGgj58CvZjM4mL1gFBQbSJu",
  "key3": "3D8UNHHdZSm1dYPVCHNaVTehXvXU2N83HM62NsMFnu8qRLk2V6UDmFsyA4qBVor2jx9vs4hnbGxnerakmY5dDDGC",
  "key4": "55gAJF1tNdmVoEfyPaN3nwVcYBQbf55N1iduHJRLXyiuERNFns8RR9RjJhsj7Wjawh9Lt2QGdJYsm2hgmNTeAycM",
  "key5": "5uuuJDkQCpBwd3A4542rT6vbnvfiwDoGFJLgW7Yw6VSXLn73p6RzZzTvaFsoGqu9iML2qc37bMnL36viZymQWt88",
  "key6": "31UuJtuv21uaYSmmJLdaJoE8nrTePZNXfqHB5qWwgzgh2TPMVAV5qeoeS1wUU5yUiwoZLLPYHGx7Xfi9AGTDoPXy",
  "key7": "2q3S1WjyNfVCWygnJ7k8HyYSQukDJk6oNZ1ceaQGAGAhjojDUNVqJwfqbfVKHT5ytSVHHUfpD7DEon4X2Qqzh3WA",
  "key8": "5mBnkQzWN4M7QdP73DiKfL9DmfNBQo2GVfCtTEsyBi2dJb1JCekPBK8Tsc9qqToWsVkXFrAe1jKvq2hakuMCZE8V",
  "key9": "BrFHfq93TyoJ6tZMir7cn1L3K6y5BGSESp7iu41UPkQM6menjUYcopwCdwqbd6XUhdxi1SyWf11e6PmXM63kaCq",
  "key10": "2vPCdzTLyceXneUdupPDGMoF6FJwZddQaiwWswCfXeggFRKVbzAcfriqgPUWSguHNT1x9bvb4xZ6G6EVfdm6UqmZ",
  "key11": "3BBj4DZ9XukrSwLvbavp4TfufTwm8ynS9vtfcNPriTdDZJ2tdRXrtgyx1bgJrKVSyb7cfYPZNvYuP92eeA2EaGnn",
  "key12": "Ae7J5JWaEvDcb2VmwaenwucTQv7ZT3dKBzp9uWej1tzo2p2wjNw988cAyRKw6TJdREDcRhUmrYqwG7hETAcijsf",
  "key13": "2f66kdZQJxVarUthMK7iVCngDYmNcthG2SMka8YwWDJqjxdn46ccctdj2TUzuy9ZkY1JrVSSN56SmD1uqu6W696Z",
  "key14": "64jNFbvMqdErLKD16i8cG4ZQ35SEyNgRK1Cwo68V8ZJRKpnPypibKJQaNV1KV6QUJTMutp7pj7shNXyrMrT6uxZ6",
  "key15": "67JmcRbrLAyMgdUBU6D8CctLDeNC2rJMxB53oCoFUJYuaT94qJjZ41en3g5CCBmsA9h1CM722oufip3o15ABuEK5",
  "key16": "4kLCnW9vpGNuU9Fe9T16j5QLGQXJ8ynjmRLZiySm7fnq4FnTGrNfJWvoh6BucTnxELD1NUm16Y12wiTwFPkfk6GR",
  "key17": "1uc4YeBL3thDGjwR1ArqL91RmZPp7stNnzEjgja1rKsxbjznzKrnW8zC53xXJH4699W1MGKcjn3yFozXga1BbbX",
  "key18": "jRj2hcNRHbg1u6ESU5VeKsM9biwy74N6qrRHauHxjKkEiR7QT4iLbjMtitnbYsQymgkChmMmRu6esgLsavrtg6C",
  "key19": "2DsCJSYEf7pXbz9uuKdm4jHxEvFRnz9JTJASv89QH2artSoLtmhJqqH2cgqmGB5WaMzTgg1odzQJJ7VmAfbDZyME",
  "key20": "58D2staktK36yGKZxbB35256kiBPk9McXMGBToTQuzngJ1DWAt7QQgE2oQY24LKW7MtrTBM4S897pFurHnrAz676",
  "key21": "2yCunV5hvEGqHeGuUdoEPPZ3TCysNj8RnJ2cY9o1cHZYMBH3ki862HzCSSS4uhVJLUm43ou64aNR8ai5bT3qQZgu",
  "key22": "31xeuKGicro8pnhAMmHZCs2DnfnPmoeFaHzaoQPUQdgYhYiet1pXb3xMsXyZCWq3xR3CCk43DTThvrwRokbx5MM",
  "key23": "4pAyiteiM581GY47vYKT2aFkMeqGCQFgoje8VqhfpG6u6vauHr8UVv2TKMau9xFcaUUg72TH1Nw55zuumCYgPodz",
  "key24": "Gk4JCweqrjPftfVmWDWd6cmQU7AjiBnRKHeNS421RMXaPpkxsMyvG3FNKqCo8KqvSLv5M5dnDzYd8s7Pn6fbn7G",
  "key25": "4ecJvudtsLw59jY7NAWx644gxv3WdPgBP2efrb9q1PWjmgFES8RKxcgHpGyR5DK39zQg2NycxRKn4MX7qRdyerxz",
  "key26": "5P4Ebvs6PKjXFYihqAEvg4dCJd3D2DaYvV71LhDY7QVvE2iruDXDuVfQtM2rKTGngUijJPQuU1gf8ZkA93aQ3miN",
  "key27": "3b8DNd8Ya3vAoF1GzQdcSvE2KEgCTGbCvz5oAN5QYNUqb3SQ7oxKfuiNjeGk5671yB5ShpLg1XkE6zKbTsptdhd4",
  "key28": "37HSQiDtX4i54CPUrY9QcNAhjrJbdNofRPY6R1EWhHuWoRpDoM9nTgSHReCMZWNdFbxuVadC14QFZe9Wm22gS3ke",
  "key29": "2Hsb6RyBdFmhe1xtHjyFSxKe8YrHceE8kQgByJL6QUmAtPzkqMEPYMtFfVbZcDR2pYDVHD15LWbATAwGH8boXpuP"
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
