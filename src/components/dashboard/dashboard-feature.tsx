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
    "3hZU151LZq422E8pqSKz3MbMzofaWGJZWNGDGzBUjYJs58YbnCU8niiQMCe56znTXDduUEin6gB33SfVjxnY47SW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2mEGTxCdxNmHqcD5qMkyZNVFZ36e54hRhjXjcRy7VWBWhsjCKt4cun4kARPqfqZ7WFLpVrFywPXd14rMh1FDMAsS",
  "key1": "3QXFHNKjK7uDjnhhEVUbzi1BSdVFrQdbnua7dmrCz3pwicJ4RUCBgYF2GL4wWVFvyMfNx5Ho45zPtXLfQYAfdZ18",
  "key2": "5JYPQV3vy2esyUxghBHSs3RpC112yi4B4bc1TEdF8UHimtcuWxrpiN3fECSj3sPTk9Q3GfkvM5v4yNwdoGPq2AG1",
  "key3": "2erzsv3qqcBZM6uCdE67ZXcH8w7vwAobaKvnK7QQuaqb6xh9x8TUMsRawqV9gypq6r1bs4mYkKCgEJGuJtE2ENRM",
  "key4": "2vxiY2BvYmUZs4L85fgxfDooyJvF1CGmwqXwNPM15V6mynMqfsMjmert4ujNaxJBuiqA26BeRzEzM7eu8RKizFym",
  "key5": "2DqyAc4BASAx7f45XT59J6SinLmBC2Z7y7MsfPKpaqLkEMfVGpocRZNXDdqZsURuej2ZtFGEQUFUN7ixkxiDKYdY",
  "key6": "2x17LPG3HGdnhuDbRF7eALRtAh1S1QD8Uf2QQveGW7BiDbg2ahdrgWo3kcj1fYZLmjMLyaxWenbsG5zr2Qp59LVQ",
  "key7": "4yLAw588DR1MN72XDnKmTcyhCmHZ8SKf5DKNQvYMLJHAq9ieT3E3rwVbRB5xbtstbfk5mLq3NvSMfisrsyn56Emb",
  "key8": "5MC717WiiZ7SRK9ECUvUP7yRCqcvHR7mzGFWeWaP25LwUmNXnZmZTyfHLbSsuiSbxTgCzXFnXwo8zYuV41wy22Bs",
  "key9": "3WpQpdn9TbdZZa48eHfpNTSKQ26FsJmJCaeNPSehpZFfg8cwrBBtr1WoTQ14Y3nvUGxjLng3iCCmGiixDNzEpVZ3",
  "key10": "5UXyERqvpp6Jw12G2K2kw971VN7JdY1Jz69nuetVfvgCCJwKqBXVKnHYb5Xc2ZXdQAWsMvPCi6NcPM8JEgeadm3p",
  "key11": "4ZvjhUXvruASBANxQtcc4v5Uj5bd8V4hrMR9EfnqA6iNL3WuM5LLK5SqmfWNy28RRffvFc8ToKaEE2LEcnRYkL3o",
  "key12": "21nkHVW93R248Xy373pjm76HbCWSrXwHwF4ERUYc443E1SsjVH9q1xAjb4Xt3xYYX658mgSA2UqvQAg7R4uLKPwb",
  "key13": "4TKqSwnUT38GcDvvsWeit5G9sJruNzuiYfKJsuqvdspbAEM6AzTHSyS7vSoX67nmHYLeiZWCu6kz8YuQGfuBCHkD",
  "key14": "5ag4coRGex3XmerAWjYhfpuih9yt9h2FsuPCehB35Wq2UeRwsxEvjfXqwpV6uicyFdZz5fCTXQu7HQ3aALAksqNr",
  "key15": "3wvKyTHDVvaySRe6X3CPfCo5qw3vSb92BQCB3ZjBQFMqGNYQz88jsygmfbgjup1cMYU2aXJbpppiF2c9ik8XiAit",
  "key16": "5zQXWBfadynbZo18Gw5PuUnPbhURxR6PyAC3nawHJyW8wTrHVHgzKfjAaELt4JKuR8mHy6MBpeTVDL3FQvdKt7P1",
  "key17": "25g1yC99Q2iB3wQsfUWDMmgdggjpmYPQBXd4rU52129oskRCEbhWDAUmjxCRvKd8hKG9EaKcZsh2buzwhhuKLbRJ",
  "key18": "38UVkHXXJP2SRBhhmVb8AgGJ1GGdJLUtdDWBP112CUYdPXFWTpTtcv3qB8ReTzZhRWGgiKecWsL1FYoaQk6B9zgb",
  "key19": "26swz1gTXAqCuFVztUuuUsmeDaMb4EfxH2rbiAb5XqEnhV3kp8uvhPtm8uwkuvNF1y9BRPQn75YiNd9uawY8pAwY",
  "key20": "3s3YNf6n4ebMVH6Eth4frNipjPkTBmUs5tP7dTJtoQ35Xv2WfyV4VcK6JtasK6e1gkF1qhTfN1bGkR6Z7TSHv6tL",
  "key21": "4deGRQkPf7DsBZjpJD1BVqam8AwW7eb8RKbjUyma7sD6ja3D8m6MhYpfQnf3g4N8ni6Hqb6TsWtLKjJCo2FVhCnB",
  "key22": "3XnGzu3DNGZA8GEo6Pc7EHWdPvwy3g4QbXWjARSpFSf8jb44voa56HW8ifqmA1i8mgFmCXpViRNMd9uyqpZHYdyP",
  "key23": "2Gzv1KJV8u5akMHQWykPHbksghTqCbboG6LT5jTeb8ECUVrVnJUrxhdH3XyLnedZG2fj8tqSgnvhaMLweNa4BaqE",
  "key24": "2o4tZr6U1KkzwAAnZYVCTFP5SuMK3bhRXXTkXiwFw8ExZPFycU47XJ3BdakpQgwxyR93yCkvJtHx1y5biUjupb2a",
  "key25": "34ctCfLGLRCN8cMPZFEMHexJ5Gu6wUh8WSYdA46x8Z7FmWT59ryKCQ5Y55VL2xoMvkaXn4SZMhdRGibW75wiB6BK",
  "key26": "3qF8gxkypU5xuhW1CHvhRYgGWQHrnQeMjKKikmdbcYBhR2fJge7ewUrzzqKJRZQw85CTEKqBLrzyLgqA4i62SU1M",
  "key27": "59tEVLrZqreBBqYvzfWPJ2dgMVcMPq2otAGUR257q4BUDrd6d5Un1514m6Kf5DcFAKSiQ41q5rFBEkHYEiMX3BGU",
  "key28": "3yfMG6KSU4HepVdgciNvVbTPV1AKrDjh5h2XLQi7Xb3tYAMcEwLjfq6yNj9waUDSANQMnUar397zCnDQKRFsebke"
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
