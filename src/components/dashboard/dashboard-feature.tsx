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
    "5rYboAYGPbJP1ykwyxC9H4aUUrKN2azeAQyN8LQKG7CEA2dmBmxkYSF43qgHJ4qep14Fd4rm2q643KMyWnBYef1z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56FBDmeaUg4rCTeeAhZ9C7ReStfgck2HAMbGPX5WDiT4Uy4sdk5kKcKq8xVL7aEs81bDqZSa5WfFfNMUDt4FRnHP",
  "key1": "qZG6yHjA21J1Jj2v9wEYf8LaUN578xkn51jUcAQh5CiWJhme7zPKoKJv7248E9rwBLiDFz88wMFBGST9KyWRGbh",
  "key2": "5SoD7jrZVL9e2UXF59mp9NLtyh88rBqQ6yYSdCQewJiVWkDp3dY383WnqCU92KiwWMqLUxkmrywyJhBF9UaE1oJM",
  "key3": "4RuZFnA7zuFJ836S3Bwmda5XzUMp6r2BuUidep8uGPLgMR97qVeqNYQ8Z7WnXy3BaK9ieLJPorVV9spquP2nkqd5",
  "key4": "5fA1o6NgvTxizUpxrW43edUChK8UFSn8rxy9fK464FVhm3GUB7LaVczXn7MFFB4SCkeGSUvG6JPTYBPeBFXHXR2k",
  "key5": "3zxktkp1NWbXtvaiicYCTNnCkpytb9L6bwyERaEJXS8WfPm1cF7TLmJaF7rWBU5Fb5kBCD9StTEJPuuR7w6qprDD",
  "key6": "4GwHcJuzFijSN49U1MHLywEqZJiLFb4TFV1x97NbRCF91JM7cBBCuMqPgTGDGJXVeMMDaLdL9QcJtywdNoYPB5Mn",
  "key7": "VLJYS9ya8UyWhpiM7ytF74C9CEfehr1FRiPin9yfPsgqaBh7AzRoqPMWxdNMLbx2HkJhKBSZywixAV6drwKyFvc",
  "key8": "6DQLxZc1csLdgLWmeAUqCkRi2BVkDYRV6S73iQ5w4P5eArxFroZcpY1bAunYnd1qJ4qh6FHqUt1uTJ2mNDfBQka",
  "key9": "5PmpPLRC6MpaERAVnckp6ngKzCaBiDqNk22rUrTCqNPkrM8kkqxZAMpRWW5PQgCpLv2E5upUcV3Bh8BhRJnzMuNa",
  "key10": "3ffjfXZpg7c7b6UqmR3s6dvUpbVzzqenAfZBUMxs5Naj7tGG5F23dWq3g81VcpaxXMASTaa82ppFJjT653BM368K",
  "key11": "4yFM5Y8EMsiamWcSCQm5CxTmC3X1atELpueJpxTDHSXc1X1AUuaC7zBkDkcnMVi3uTaAkVfxhveBgiGxNUbnPj7U",
  "key12": "44iLdJqM23it7akZKJqbPHBXE614rZTVG3rLiXwgDUos1f7eYVKh6CzUVowaEueNHKs87H4UAiEgMHoweVWEoXDf",
  "key13": "x7QpjrMf3v6yRbXgiNu6KXSES19UUYrd9F6hC4tT2UYLNcUjzumyuLSeBpcngZJDmNtLEMCfDquxQwW3Mkokgpq",
  "key14": "4Akp6zrPtJg8fxQuGCZMEBsPJ7UX7edimvndrxtybGopDMfDtrMhMBU6uBr9cErkuhoLAwYX7ZAp6zi5qDWtezpW",
  "key15": "2CdwHSPsyTHXWWzzc7adrdfHfuoMFNSpyYkyPWRYNZN5FeiczG82NN1QSv1XzaSihzsuBZ165iRqxu59mEks5Pt5",
  "key16": "5sCUqqBLEeLMEM5zmSgPfoMvtocBeGZvfu9ccCyHujhHodDfoqWHd6ykNqyxn6c7VDKvFfmu16LhQbB8obHuwP4r",
  "key17": "3sSkDLfEJ7bcWFLwrPfoxK5KfoMR9q4vie9qWaEXNegBe6kxwEdBeeg5p3nEtDBv42Bu9Y4gUZGHWpuXJ6UWKkwD",
  "key18": "wsoB6E3EBYLyYfUfpvA9UzgV3WJaYLF3eHSn1KuVS1FiWCmW3dafWaK2ygqy9TdAUJ6EjipC41d2Wr7pYbeQu9C",
  "key19": "4gZZ8jG5gnBDxJntD1TqV5w8nDGpL9C2FcZAnuU7rfEmFc38onovMU9C9unmyRJZhojUxS26L61hzwM3xchYvxwV",
  "key20": "VDqyuesyfkzRDJeFHQrCKS4ascjhDMX7EJCFTeGL4MGR7pbgFkCHxXAuQAJFQFo8fzNeooW36bgD2xWMMZpokiz",
  "key21": "3ErLaEPJXW2k2LDtWeDqXMMHafVhfnAMyuJJeASQHWXoChChd5KUH5pbL4aDwdgkAm2EiDZFSZYQ1LYqqHJX4w4v",
  "key22": "5aEi83mxZh7mt88UdMTb8NqphMWyzm2WofWMDTT4hGvKibYdrvvzPzBmKqMJ1namq2Q1R3TqvoWJnrNif82AYFw3",
  "key23": "3Cq56M6WS9vuwDzUFu8adcVNXTFFQABtfEJSUCYtpvKSzuwXVmhY54DUoFCPhGUqTJcwWwpGXgyyVQZkHD1ySV5f",
  "key24": "zYwgRBqrnXztM2hJ3booHysLoUAv1yeMdVDySDrr6yyNrKuKc1HyLTsoiHH8kbrMsX5kkw9Bbr9WC4ESK91tbCx",
  "key25": "4FAB7LEqMQERg8McN72bKbyj9qaG55BGE3pPGfa3mtxmwJC4Y5HPZnvZWNDNk5zdDtfot8jYatpUsnr9QBDXCgYe",
  "key26": "2LMhK3CqfH6Nsbauwn2LjqqhU1CaB5sR9cFKHWQh649oGwzkPET6kfF8QmwFfTAFFsRAKx7HQs3UnHZz7uxhfLxJ"
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
