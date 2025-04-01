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
    "3r4ZsWHEUi6dut9sTYnB2MPpLNnt4Lj36rzpzw7B62KYyhgc6x5tj4JkajkcoBe2UZQrmUrTnLYiXHfkpNg2b6Hp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BpUvap6q5MBjBC98fFQPTq5c13hHc1QWg1gwuQFFk6Fssjfv1qX778pWeTzQy71uLvBM2fm7AMqK6m5CTuVhswX",
  "key1": "5qkF5NfJD7E6KTD4NcU8wjfPab7gBH6im3hu1Djz4CfMbYVYJJRa57XvouUWTRS7PpZsy1exntTAUDKw7ehGZ6Zt",
  "key2": "2nf98TSgwzHTMquEhw9Nhgbb84r5f9u4pccnkbCq3CPuhQqfS3ro11EL34WxotCNQ6PVvPvNLzC5rwLT9zfAPtS6",
  "key3": "5LeRbqUK965gwV252T2DU8d9LoBRLNrRrvJpKrwYGjF6XtkUXcWf5msaEpuX5yDyv8V5yUATW8ru1KSQ8Z7YtsXi",
  "key4": "2VjzeNLZ4PuLsvkbYs3LTxox2xPzs3hoCSDZbKCXiqVy64jdR2nhRLQdHNLST9cET3RcpBxs43cRQzCurLmwjvLB",
  "key5": "4fM3vHthzqjXVVJLs5mGfp3P6G5sWGaRqJzqiP5zAy3nPrkPwn4cq4NnQxb58h8maBpjsdEbE9PVn9eLkxBLBKeS",
  "key6": "52W6iFRBDEWugQitMKFCLprJyL1xTeptBjzmjwLNSpuZqo3N6rHCedECeyYNDYAsjLKRNByjNyUE8okhZmnrLzWW",
  "key7": "58guNgRdAjnMDQ8owVRtNDYpG4Pa15TKYPrbq1u9dBMGHVpQathEbj1Nw9urk3LqjBKQYyvcKLhwHv6zwscAYFAw",
  "key8": "2YfgS7zveBveLUmyjuj84acAhtSsamtiKJk2qax7bPSa1rn5ty6fPqGGjEcbUrXLw7yW2HDfhJHn7yQSmDmzwXSf",
  "key9": "2BrWioLo8x3nxFM5caPKznwxdi6tSr9z7YDGTEvku8Te2dRiJWvnCaS3x9JspB6W6W86P7MeUcpgX5EaRKBwXVro",
  "key10": "5u9yDyrREB2cw7X25Fg3Hngq9mesBZtv67L88wDeoHSMx7vKptUPnfTAKk4RpegojsKB59x7u9n59HMftYGgP9fA",
  "key11": "4NeKnEhPpCuYDGkUm6AE6cQTa4prk8TAkQsgNazUMQUEFLbqvJA9gG5xys1pmaax7ZQjEKNSbpkLJydZz8MyiXR",
  "key12": "t2tduepUAK1QiJdGH22C2UBECmYU1ALowjUbwHtU4iscfcMfg99cHSyfHHtsVMXn5mQGXzHjdEw5HEx54TYUU5W",
  "key13": "42avymnmz5oexcLeQrWcWo8ohapwdtiaJ2rLhGMH7HQRZH4FNoNw2yLeZY9CudZDVwj5jHvepgyZHfpFcJWHBgGx",
  "key14": "wWGtSL6ubku3PN1Ng1gk99tgBxfmM75egsKcSkGayoUrWmNgL634yus6aPaNYSWQR6sQWmHcXD9DnF7k43FYPoz",
  "key15": "3kKS9NvDv2d6ddBC8izb6E7VX648RzgkY5Ap6ZPANJY5cuaz8ZpFHdbpGbWrEeKjha8rKrdiwgYqkrRdxywet4jo",
  "key16": "3Srwgf9mriQ4aymt2CxPk6jC7FseU39T5Pj3jYVWW2hgANp9563SU2h22AxwkqQKWRLzPw1KydNjUEfgZKMoqU9p",
  "key17": "5eX6UF6DtQJ5ws8intoX4Zi6YURUpf46jZB3we2M5nabKNbf9dUdqtTaG6DJfg1tpG1RtXYFHWhwwGxbFJjwHJck",
  "key18": "43RonBRvst4TNguutN9Jb48tGgt7bXoHYhKohTwhwFfkj5CknUZ1oDYNJzuZFS7uLQyu87wYjW1hZUPLLihMtozi",
  "key19": "3Vsa8aJyAygo9rNo2hWm627aW8G1TyqtBYFmCEjAufYUmu7cZgxZ3wQABuRWHRVkpedrR6vmUurrndZNmxWAzunP",
  "key20": "2689dtMVWF4ehZkp3qJvhbGPykhqygA9i2zp1mRueZkXeLYaDXUF2C4AfJnbbVzbjj6gqyZLqaoc4MuWkRPuiuSq",
  "key21": "4atJD8E7Zq2xwYzNx2QbAJo1QSSQ3TK6TSix6oXzYagpYTAWsRnEo84pf8sXMN7zhghRXi5ZsKVK8qyNavCSzcr9",
  "key22": "4W6tfnyPSNkNTJBCuzKEAoeYBMf4Jxs8FpN93jLyTxyQj35Hb5YGHVmVY9vm9jCZ7QuxRwuuTbFhyNaGA4aTNadQ",
  "key23": "5tAuzHcDCWcC4q8kx55oj5mHZS452gWnE2iYrFn7PUTtywj7YDGrRMznpE1zTSiXsTGafE9eVodVoW6ei9v3wEt",
  "key24": "35Jm8Z56xNJzghzzJpi5VpPhvZARzxFeTwzSZMdMscdiYvkmWxTox7qARysMNxRsyLfJtqPBM4aqbskfVpfyn2YN"
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
