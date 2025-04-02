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
    "Fuidb3rxpoD8qP1ucLfjkGgRef5ABpg6AKy8rQeNzeVAs3XtWn77qx3UEjmnWq5f5EWu1iLUkwHHf7QNhCE1vmC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K45gx1MmoNu8x68uvQeyXQWmK5ED2nSUY1cg9YMHYRPdFiAfNvZditgDHm1iqZrMAyMqCd6Fn5UVSAJuvunQWxc",
  "key1": "GsF33KrSoMXEzUazANQSe6M2ycnyWsiGufYfqWpGr21B8Ezg2eBRoLT3ZNmsnQZFbZK77anPmXtg2btMPVQVtg4",
  "key2": "464K4aJf7g8ZZ4AspmXPZDHvDXvBeXF5PxAwnRvWcm2RzUhChSLzdnx8k8Qt95mjnJFnFXcVx6dTkSRJdfCuih2s",
  "key3": "2fdwXCpLMoDbaMoDtT4FwETftg962tBaX6eDrqVLSLbcCsUB3huHMnyHCFNXNvsSrvf54rHSCKsKP1f57zbTnxJU",
  "key4": "4v2CCpQSAGSP8JUMDbcsDt7PTnbPP6Jpf35E1RELsX7tUgX1TyJEcgUUd1Tqgt87ULDTCGmjR2ESWEgdpuboarY1",
  "key5": "5AAPYEFrkMF1d4iQ5HxWVziwMJsbn4FPyLHzCwTVt1tEU27E5VMrQTqESvBtKw2mn16H8wFvqNviUFpyVqXodgq8",
  "key6": "5Qn2xLgJzvCgZprmtD7VPAZnPQBhXibBXN2m6kSwJkwYdErTvmCHBrxCyeyXghJHPjiqCqgciuWZkTGbLvnmpnGB",
  "key7": "vupRqpv7KHqP6p6cjLkdwH4PDEaP4q5VgrFfghpeEgCWFAocsKzstyEBZFfheEe7HU5uhESXH8oVt8mrFMJcs8U",
  "key8": "5XzDvXYCjxJeAFVmnqq19LdBZ3FWvNu2JZYMiJn9iHhBkB8azW5oaCwW4E8CodrVV1K1qyHhpFFekP9DoQ5xKvjw",
  "key9": "3dVvyPUXQ5dXxbp9nA6jCrtSU12aq2sTpPFdXuNj4gt9y8rBPGV1kLEwtGwG47WoBecr8oraXMLU556r4QzCgvkv",
  "key10": "YwR86phqWHM2DnssnCYhqCYuTLVJRhBxR6xMfyDSR9MmauS4wRi2RaPcn9ZGLbYg77PRxw8kL8EbvnQvMB6q5ZD",
  "key11": "X6V37s6Bqh6Two91gJK7P3TXcd7rE2xmhWNYEfkJ5YrZmxLRoWGfcf1GpuYYgHkoaTQUGgQYPNQTtkm5Z2YaBa5",
  "key12": "3hAms9qBjToPYJ34CNCHV4NQWL3ChYhWKYAnTvWbfkcPfi2afnAWGRTXjpTsaZsfwetwVx8wngur6ZCuXgqc7zDs",
  "key13": "23gX3kCSYPMwYHc2rhaErUeuKh5JTho2gyG7t4ERREZwqcn2ucJmyZwmckdap4YfT8zvegJmkVNSbDhpzkVQ2dr5",
  "key14": "2UhMSBSWyDd3FprTBHpVdqZ57chQzVf5QfwmjQg3BsF4jiZsLvyvzLzHpRiHd24Pw5aDtGdC8qWuss9rmbwQAWJQ",
  "key15": "3mnXmDRVMr5cER3wo8oNsLkYL1P2jVyLxwrnaisZnDE4bLzi8LzWfZhS1v2grfJ22G33NJND1WmCcAF61Eiwnkmr",
  "key16": "aRcXyjWuVkNomn2BZCdbQ62r4CgqtQr39ounz54ntEdB3GsZ79waxPHpFTVy3BewhyyNUMabZmqwsRy28tAFUuW",
  "key17": "5A8wRaV4fHX855QiEPBMC3ZqQJwr8hxJssYUwjs8qWHzYXqAuudFpVXgqDcvvyfi6WKosnsqhyytiyxokmqDCGg1",
  "key18": "4MANKafPmEpvhdkEPX6DjZ1LceyjzqwUo2mveR3azXjcmvy88t1sNwcyyN4rgrdCC7fXQzVKdxciK7C8MhqzZV9N",
  "key19": "PfMde1yENPRXc2uxVc2vH6YirKrWHrRCwwuDKPfRiYxsk15rHj2QEim9scGMUnHU3QUeGtJyk7vS8B89sy24vCV",
  "key20": "Gq7r26oKTS8hknw6EsipyEVhzaY5DTc4pVahvzsyt4SCyydcJh4dVje6knPmMpf9vNxQiQk8c5mU5ExHqFZfgoo",
  "key21": "2GgYCnoLZmu9TdFUV5CbhcGWv3HRvbf3rgpCEjQNregPQP8zrx9yEHCTToue3iARiD6TPyDaTzFWq2gRmmEUxiBg",
  "key22": "2uVSmVjZtN415gbA1NjEKz3ZFw3RhGR2vAzzddXYXUpAKHZ2aBJBPNyj41SUf7SUk6WF8Rffk2fNXPtiLQrYwFNs",
  "key23": "5H7tjAURKjkkAVM2GHNKrQtm3TJv6MSni5fZyNLrx6j3tS5Cn8fiHGJ83faY1dpBJy8jzRCjqmzHg71qKXVDZTiN",
  "key24": "4UZBDX5bfTrumVcUPYuyLiQkGt2RSV5UJQsQoaEzqHHP4AXsHKXjJfc5bqcWTTAC862ow3i3jUyUZZS6Qg7Pcmv9",
  "key25": "4UgdTdzbDnYYWsYbDjuAeMcQm74YDjSJMx6FxWpEGFoFcNv8epxLetszkxLbRYnLKcrevhm4MagVaxmgiPkLWSGB",
  "key26": "5trMQZyZ66mLk5PM77o7NwQ4jTYf8ND4xNP3kf3hWyhb8rVYaDJBkUBDrbcmnp23C4gVAYiRdUHRh5SnVF1VNGCp",
  "key27": "bKjnqs7we9ErfETSPkHfMrtNfpJps5UMSdH2vzSEPJhBQeq6hgvAWN7GSyvLo6Sw3CFo5k5TdGX9oUsQqoVtrAy"
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
