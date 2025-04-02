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
    "3AfjRer1dpn7qREBcgTA8Mhs82Fhhr9iLECaaTe2BdB67RbXiXSPVSYuVVZWBzRM1sAuSHzTH94yThZGGronD94K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "HnByh5zASFNfFD5rUzGB7egxqhZFWkSNbUgQaJYABJHWj4CLfNHdgsEBVgM39GBGMXDPXmLMuKEwKdu3ahbafiW",
  "key1": "4gAnWHBwdqwiGzTpa714d8XLo1JJtC8nHH9s32P53nDVh4RaFRTeY6FYpJ6GM4mTqo7HDGLU7gzx8uifYV2XAEvq",
  "key2": "29zHZZy8sPgveXSy3RPmgBfiedJqfXC4NnuxV3urMYXNrsYFHqBEBAXBzBJS9W6TVPmhcUm46FijGeEHHLJomEF7",
  "key3": "2KJnuWPfghv3vhEvALEAyYRn3LiMeY8Q1A71TKwhSi9EoZ4NMHD1h5JhZPJxVhpWc14LUFhBJdWWfrHi7ojDpLqP",
  "key4": "4kLSjKBqw9gRMAbKmnmcEKzCARwq3iw15TkTSjbgc7yNSBsYyWgtmiUz77LGRMK31y24r2BauzaXvdQiRwYn63mT",
  "key5": "2umNz71zpAHfttPgZWjd4M5Rg652oQWvVH2vEFX71vXYTr7LZ4vUdK6nwkF1RNPZWxJYU3owBXcxDV337nj6EP8g",
  "key6": "5cJhBDGAM33rHH98Z8RvhJiKLVdbRZjGUhSwAmMmar9E1exAyDkPzHY8EXWiwC6J1TXcSwLiemWWt1QbiTpdPSiy",
  "key7": "3LYr36cFnX9GXPD3vPiaUUQ1HErXRWL473g9uk17Uw8PQDbXB3un1uVq28dBxsvMtcr1PQbosH4Qp7iBv17ReAwr",
  "key8": "3NuPTN1MZMzUV5AMSUyqDe8gxyu8uoHGkSA2U3xTqBe22Jib4okwHP68GTErTy7ijFauvXN1z45L8sS7NpmgAixc",
  "key9": "5BBHnqZqyzN5U4k5x6wGHeNP3vKHgoM7WcrqHBtqanNQaqsYPFSgkwKkQ9PcbbDa3FvvTqzRZqf313oMMYDwFPqD",
  "key10": "2PKqHZrUXFp1W3fSWHbew7t2zu138dHVsiWuhrpbdhyCf29Ee7GwkxTHsMfXdbKGHUTdkPE3in9QtNo2yQTb5Rn6",
  "key11": "33kjZoaXifc9pEqeKroDdjE11xdDVThvtjY56kzGJdVL7wtN8mjXS7RxdNJ6k8BnkDM7sVxcoRagMVuWrRMDqAXe",
  "key12": "2eNcA2q8w9xucG1g1ET8DbrXruiVkUDyDQZG2mgH1jjQAN8R433wJeBW4uAbpJbqkJgaXUvvpWgiBNQM3UxX3RTJ",
  "key13": "2aaopGbS8GCsT9GGsbHE53vRSQQD8DEvh9oVpcGy36d3av2qDQbwMxBpL9kimJmtCN4bWWwhY35S8eEAsVLkXS7k",
  "key14": "mWDaqbLeKhG93d8mCUAFMd1sZ8FsZGSTEgsTRmqSrz4P4UgdhbzxzE7PD6vy6bLNs95VdPYiAvAMgoyYQNgS7XV",
  "key15": "4YLDEMtwGCRg4amWWibG4jeQHNhJ2LdnKx3PCZuDrUtWXvsfVYJb1LRnCaR3HdDGjS5ynCLXQm49XopyZ5PLRLUy",
  "key16": "5PAfNSDUDo35BvaHJQH82qN97XJcUfvuLEcBdqw9rknR38jApcWemM8E3wtwHoXxJ5pmY6cGRYGY34NwsBRaDSr",
  "key17": "pSjzsmT7bve4m2RosfsUeaXEzKqx4dyCMjgRe9a3nCVvxordPxov7TB4QGhraGzZqdavicy3WaKh7kZNYb6NvpX",
  "key18": "3ueF3LWWZ3M9zeBRio6mXQYfyQCCgND9eUunitfvzJhEB8Dsqkn4QxD2PXb2P8eYA67XDMALHxArk3MAG8WMiXxQ",
  "key19": "4DPdBQZk7oXq9hLZDV3eFQGUryECdCcMLoTDZGRZxvtEmLHSdKG1PRNK8NvYqYAw9Ma64t4xr9vdeRG2rD7dkeDd",
  "key20": "3gBKLXLHQt83si1VD7Ux5XxJdQvDu5AuNYMMjFCdkDek3QuYSEJtP6fHBXf34DJRscJTujR33EqzxoY9Bde4zeG5",
  "key21": "5cj3V8KYLqevr3jeyiW74o8vudqvs7KnfnBN4zy19owz1UTdxhbvtjWDhQmvYtL2PjBKKjD8hZNzaWit72dPqNMx",
  "key22": "5jTpuUfZHCiW8obDTC8qUbioBMeD77Sw9QRpW666nSbQDYdMMLC65LnSrejHELn3mHYb1HxBbSLavw93SGK9Xgjm",
  "key23": "2DYu2rn4hricyWfeHV4NeVb8mPuGX9H8PdVgzox3W78TeMVuxB4xwATYqdZTAMtUtGRHoGfJXN2kcAsKZosXbU8",
  "key24": "4535xuGoCxso6V8zYzh2ADqmaswUhkRs5xMfgogSPXKgRSoum7vf1oBYPpFCj1szyWEBLbQiYidfTrehqiNdjw8z",
  "key25": "4Z5hcKBsLFMsz8LvPvdxGvrxnYGbHLG3nG32JbNA8pbz7mGGXargvHMKgi8MEsy6rNGzdQ33apAxsWi6ySqRvokY",
  "key26": "3N2KDKnnrCFhDRHfE41TKWhQEjprjK25Dnj15NBMfpp2842aGVKTKtmavySVXzyMNxEoXUoR66vh7rbdyVwrzBkT"
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
