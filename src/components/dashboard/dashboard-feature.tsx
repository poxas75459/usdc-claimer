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
    "8YrHQWRAYEMDcZmJD7DqDosTc1tsfrb9aM2WDVUXiqHEmmQFS7fshb9AxvY5zPWNTUyzqNnHQYpatnAc9PnhSjw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dTKj3BQ8XWTnt7BA1qF1jcpDfbWyqFzsT53vctymoVfLb4K2JnDCc9nU97Rp9DzWF2Kt8xpsnhp1RdMXiZohhBd",
  "key1": "5LDmoTRRJc8myetKPnNQ5zoUVGGW3euEQNf8CVQ4ArRAzHYiXH3qVkhjbPyFttSMJbC6x5zbVUmEbscNXd7NKRv6",
  "key2": "5N1rwadGVHzLPKkfiaKpo37Z1jnXFeUyj5iRXZrw16cPYeHDfn3xmt7RuY5aGASsCtJFainBpoqfjWabA9ZPqNv3",
  "key3": "5WmughkFhD77GgKpXu7NiSvVnXGErQDjThrGVQzN9UM2cNht3YEVhC7PzE5pSjfyRpEFwRuRyndLidogrgKA9vuf",
  "key4": "5Gxdjjsy1rgbudr2xB26btsXMtMVo1xJe2ZWbU6GH6uRYyyXVZ5LK8s4RnRyAm6BwVFbBmrHx85mikeYkdkhviCd",
  "key5": "5t7TQKkwsFi5UPtsUbDL44Yr9dLR3v7BKcm6vudaoS96SqkqxbRe7TqQmXn589nKV3yjWFK4ccmGzpUQRhsdf2r5",
  "key6": "3d5W9ijPAD3jtMkyg1ZSF1UkTvsafET8KvwdMzpC88gFai94v8fB3CrkThmdi34b4k5ywpSSigE2UWRfe2f99vjq",
  "key7": "5ieU9Vbfxc1HgECgQLPuYePFpBVRJ2jJAERGvWuGKhBDTg32c7WVHVS711zxnWBrMuqsvgMareDbgkgTWxe99QZX",
  "key8": "3L9tbKvuYX6CKR7tG589mJDYmEugwqjSbcLXBo1XA3gspEk8TQjdJFNXbEhzQwaVAe2QPYSwB7W2RVph9embTi12",
  "key9": "2QcKJEQkfGBQsYvyb9JbhaGRxAT1ZEW7JpYgt5q8nnAhTCjHdGMQFqDy94qqu6hgRVq2vDp48vfTvS4dSZGtrZuG",
  "key10": "4HPhFQmBboxzsWwH6FJ2HKiGn4Hud3aQ3z4Mq9LE5zRXJLhPc2wELdLSkb6Tmf4w2LjJ3LwHciBBJCsGiiM23ivP",
  "key11": "3G9NKZhEdqrKrCJNPSxLbUtWzXaC4gb4RVWoEMXQMxftHHxycy8j2f8jpC52ErdirsKxRGMKygG3MBfFsYEtjaTe",
  "key12": "4KxzeR6ypyFsYnEx5HknSYK4YNYJ5wgoD5M48UQrTMikPhtJL5ZiFYGVywWV7fbnTiNFgb5C1RDhWcJorytt6QLg",
  "key13": "3BuDPMRr7djxMk934asvjgwuNnkXjUKUvCd9w4NeKccLzhhCMAExdbstcz5T9qwy6qC8Yve3m3jVWyMn9RrNgVes",
  "key14": "4SdpMwSiNharhoR8pkKwUshE3rbhvs3CWXU85sSoLMCjmWCn55DrePFdDxNJ45cKbYhGSXa61VdJDjKeGzxCe8mo",
  "key15": "5zVjcg5Mir4qhTehSejxQXhn3zyjsqmhgcLdJBW3DSEmZBWhuG4BaFumLWLtoTvuNmHXxJwEF6SjQp48MGfvAsDA",
  "key16": "36rpwSKyHGAkcJBr2ZayhyZkYooQih3Yb9HVpEaLqwQQLw8Uzihr9Vj2AuCvAVrNL8noxAkzRjkQtYGmB2JjReJ2",
  "key17": "4r9RZjp81iGqs5e3Ned5xrAvvWBRNpzqEAhtUDh5qvR9MH23Zp8uxxFYhpkf1rDoPn5tQQNHEmbADS3euzP9yk4Y",
  "key18": "4ms1c4h5eLJBZBiPFSBdSZwCXhT5eqhNHYAABVcjJgH5PHz25ccCqWNZkhrrL1ART6h7HNn5dgn9Fq1dDnD6vPiu",
  "key19": "2D2gSf2nYvhkPMNPhzXWPJzhL2xq4VBWUXJJV4LdRUSxriXma5MzHPEZ2qtoPb6HpMxNtbhatZAyTXhYj1gL1fwN",
  "key20": "3vPXb5pg4CW8RsU1y9gGJYq27BydZpvww171dJd2ckRUv8Ts4wA9Rkg8obCFNd7NpDdnLQ46GTqxzyALEiu9Lyaw",
  "key21": "67AxW6eYNYUfBYzRHaJxAPrNHFaqeovSNNJsJAjYnnUVUkPFj8fEzsxGLvKFBYsxWzc8YG49FG3upfLzgZTK71EQ",
  "key22": "2sve9Y88XJ1LULdZzmPVan6qeYd4ReqkVq1g5kTRb64PvUyj4tumVhevKUdP9gvASBwQmRZsbHC3XWAKREndHSwR",
  "key23": "2x8gVYMpyTJPrPDWv2SzJHuskknbbiWmJYUYYttJDAkwrDUTkMMqUHUdn3RjVPsNpRxkWnNUk72iHWivRggkHVct",
  "key24": "5DRT4i8zWjshGvDMoo6hNjxKqUi6Xra5Y11PD6XsJpCNkQAGR2qaNdYTnGW8hBbuMDw5bGFJtfpELpTnH5nfrqVM"
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
