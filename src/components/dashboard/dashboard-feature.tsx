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
    "4bKcA1ku8TdzZm5PWGfBnKpfvS8jGfhEZM4sNk3FeQC7887CDVnRG7kxfUMVUZgmyQfuZEn8MfLD5bMkgkstLh9e"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Kq6ZbQA2RZnv4Hz49etXXUCzjSi5C16UxYGNGWE7TJvKfr78jauschukcNuxYrJB8nJGerNFe8SHQvn6RoQf2wE",
  "key1": "62sMmB7jcpLuuLDP8VwnRbhEFtYGy8kHekNzpoBVNmT9p44rxXUQQM42AGPxPtBRTYvYfYz88TopKWJ4um6ATLyR",
  "key2": "41u39BsPcJjEyyBTYSKxE4Hw8brn6R2KnAB3X4ZcJhbigRjSWQ31V88aTLnNb45VMojh2uKQn9dCDoo7BjiAHSM4",
  "key3": "3wf8fW2z9MjxeufSQxzWGtTbpLt8h5HtL1QzyH1m7bexuvSYSGE4eLVEoA2KiuDy3qzaJypn4Y7VvtvcRsSpYV19",
  "key4": "pju84r5VqC5rowjMEgX251FuazfNyVVQ3r3DmVQbm2qZGWCLzCGpgD98PxRKShfXB8LsNrxgG4BNPM2cAahvPJR",
  "key5": "5Txwh7unvKZm6dgsEkJRsMqhvWUqeUE9pq7SNoQyenrUNiQ4RaFxzZ2yDaVex37TidyRsdmXYws2DtgGTsTwYAu4",
  "key6": "22JqEiLcBPsi3QWguhVC8VrqYWyQx3mzcmogZqCtj13xSFXXoq6LWwJzNCdyGPW6WBmkvMJ52LSsPnmzqxrSmbEV",
  "key7": "5qLUikafALeAGgAvtYyegDZ8A34DAuhPevp9rTnbtC2kFs6RPneNw6HVRvjLK7udPAeAzsWfBH8XwV3tokKksk1T",
  "key8": "5kRcHkXyni9ePfbuaBmKfcUZkdwB8vyYQ4d4nSSn82TfFZtmJBcWfF6CDh6nU9p2khigFyovbrWTWMNZMqDa1weP",
  "key9": "3bBuTVZLpSJfxTpfs89Z5jLXyfsVrjRR9K2KX2tzzwbEgJeic3FrjSdQMLzvdhi4FF6LeLXQndrUivCagDbbzdxy",
  "key10": "5ZVFHrzYpTypztgT9HBBwCLHEHeFXYoHVmGee6XnyZroa2pLLTFAkwsTJiNCg2VSpNeChADaTKCYDxNCYS2ttcje",
  "key11": "4vehARpLvfvYoHqj7Uo1fK9so5AyVF1zhkzhJAZzLivq6KBFqZ2EDucLBxFL3Q1HurGwDkvUeZn8oqPFmPU4YSYX",
  "key12": "5PiTKeGppKEDhvF4PvyFJbwJsEVY2AZQezThxJUMDubAdUpMLr4oc8cyTTFufGUgtXb3pzc2xWSAiGDK45Gfb7Zi",
  "key13": "2ML89wGCShqUnGKEwxiVvFnpZYN99EbPn5wQE2qBTPKoZhiSatwnpvsysEECYgHymMfiDDaSJighbb6Hj6TnaTSE",
  "key14": "5U3sNe7UxiMYyCkBEuB5xghMU9P6y13rWPPqvXt5TGhSKFaAa2bHfkCFDa4sTDuHH2rAsdDDKBaUpaysjHHXuigs",
  "key15": "2SUZ6hPKrtRpsVcTSoo2FLYf71K8qP6Td2f2S9S9RZRSpZCWdyvf894rxQ9RDLFuUYfY32pvXYyZd1uGvzM5HAw3",
  "key16": "5eiwPkxpu4kE5upY6Z9RUjcmVPxxW516wbUX5N5kSrmbKBe1JyQ1V3Embm5pMerd7HD9hXJEZvpTJ7ByjiPEW5Jo",
  "key17": "4zawfVarbQrLhvuiHTVHnWh7U4jBggBpb7DbC3RhXXX2UJFvr7zQR8DHHyN3Ct375vkBpRrAnL7HKaX52jjnxtmc",
  "key18": "2TppBREnnfCEtUZCAVaTZoGkCQRKU29Gy4d3psZzEBjHLhcGsoy1JLAFdxXVMXwetj2NL1oSFpeHuQiyR2U6Cvnr",
  "key19": "4BuMHipTYjCdzD5WXxhXXGgZo6JNrn5uDw7UMXb1WL14oFGK7rxPs6jAnyu5bC88FDkSDr5C5uVxE2tFKmTc8pPt",
  "key20": "4up3e52F1W13mFBqNVVH3NswtRBMHyXCpPSKrLzQJdRLieHc4U7VuGHXWCx48LP6tmLQRbCakL7UC17FCAEYR4zu",
  "key21": "4AQHiN6rKSykdKfDSKUDjCVB4BpeRtZppszUaTVq7kTQ9irfuBLHGfMbAHJYD2rgWdJB1Z1bmin5udHRoAPEFEm7",
  "key22": "4ANJPXVzXHMZNyFNW6zmMNKJzN7o93ZGoicvWAfxZQTmbqoSrY7wc4gWQrV1DPGXeM2GaxPQMUj1ZbFkigLwE9Jy",
  "key23": "YDDCKWo5Gw4voRnZQ5QozKUdJjwLUmCZvyTooZsx83VaHKoVnZVnDkHQofavD6YnfZZEVFyWDKHctedzQYf6M39",
  "key24": "3oP2yYnqnwDFWvckpkvEg5viN8FEMt2XyYEjk677rrK2jGszhYLY1kK5BAmorZXXF8C7wMyvcqt2cpjVyBVsEXb6",
  "key25": "3yyoGNa5fKx2iLxU4VESkcABZ83BtE9pM4rT8wHVNvhrhdBkjdii5d15oPAUc9BJAewJgJuVVV4remyKpvZRV2pL",
  "key26": "4wjQtwAjh5WMgurSVrWTEn2Fyreq2Kwzy5NEvYEKkzQGmrwtrztyNCm5ifXyXR9xuJJaAVRyEM661znZAGyJgqkY",
  "key27": "5BLSpYFR5qJtwQdn4U9u3b72NgK7D9sztKp1KVHfR9aEyDZC8qCR3CZkjLhi8HbWtcjMgdWPZrxE5hpGvbga3Xoi",
  "key28": "2bxVPNF3DkWy2LeZBpQhHEjgpoiMeTB5u4Wob8z3CUEyvioJJ4kyASeHjxMkj3sTAjVWFAA2Mf3BL83a5KG9PA1G"
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
