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
    "2GK4NAfQkGUog7p5Nsmhx4oCN9xBx4aTNkkEzd4krW4FNz46TLo1BTwNsZVJrCLYNyEC2TH3qZbR3QdtJT4W3gmb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Y4hRtUPqB7AuTxbb3xQJBXatzTET9YZ5DThZUEu6MRGn4pdL75Kf1ZCPM47ZrSiAWVnKAR7pFt2pL1ar3aBKCY8",
  "key1": "5VTuMzURdwnvSAYBMnN9iAWZa8miSoMmUAibNDo5xX6in3axvadVaJUxKfx7Y5fwPJ5piCkMVykSFxWupTCkZBev",
  "key2": "2rEQQLyw67uNXtoHfztch63kbaCAW74EGjAZ4PoLhkUu15ZaunWvkY9xJKifMZe8SCm7GdzDNYeWwtVcqxLVqaQL",
  "key3": "4T21egj9bXzyQD3AEbMPY58chVGrH8n2QNPPzPyb9Qz8NA6pZnamur9gGktMQjYvzUf6YWGV5PppoZ13aj3YVKL1",
  "key4": "3oA3vkPP76wn8rnkt6XPEvZhi4s3kZ3n2WviGE4uPdw7pmrNSsYVr2AvxX3dxQeboVyddR3oPmM9Qo1Mr9EUjPhM",
  "key5": "3Ugs6AkW8hPbaEkgLeugkGyvR5fFDFpiGDAJPAvWjRsug7eYP7zgKHW3EDrZPzu5TBcmBbwHM1xxASjyuqZPqX17",
  "key6": "2CqikdXkcPESu9neWJhTBnkgJJLhiKXd4DMGVrHnXCKKDwpaXF7b7G8DKHKck8ybA5gFt7Zd48CLGiMfXo9NV6HW",
  "key7": "39VbVGbLE7Vi4xR8Q6YGndBms9P3KWa5GyaVR9BdXfkSvmMFih423Qmv36Q3DNTy8UdfwBMRTyCXAF6Eso7R6cLw",
  "key8": "5euVRfjyoxy2xxhGABjaaXjDb1Cevz72JrsbuGowjY6HmS9jKCk682aZC8ibbpAu8QsyAu7NPAuRqJmf4WuuDJHm",
  "key9": "5jf6y27vdHMzkEtcJTDNnrtinru5LZ48pTqDWmbZ89z44Df7dKdK6fhg5GjN8hrGhBPfQEX9qocNbiF5osQiCkwB",
  "key10": "v6Qv8xWY94orX3kzKSdtqGCPNmNJzWbWR5puc12A3VQmFgAvFukYHboa39ncNKA6sAE4PBvwnhWqkwvEBZCdDrK",
  "key11": "5tSi9DQENr22hLSXDyKk2pnkcXDprmMDxC9gN7NZJGnDd2vSLXdYwG6GuwnyeUaGsQAL5GQjUAc5eR7rvzUBZDgf",
  "key12": "oS75HvpHhh4rkBNoTdighP7ymnPo6M2BEgnbKiGDyvdQ6EJkp7ebhfBUX2jDF1G762R7CrraUX3ZUSWXr9PPpSD",
  "key13": "2gMNLef752XdJo79wdsPnNJYjhSDtLtUQ8Ru9ogTcRb8dMrkaveVzpcJqojLCgpc45rySu8U3aMjP2Bn4Aid4brp",
  "key14": "253kJ3FbhAeor28eB4dmmpx3vLyYWJtTiGDgEdUrpWYkKXat9RwxdC8LFV6CtDgzwpPg3P1KgJUDY8iWWMBfGoT5",
  "key15": "9wRrLeQTYWoxkJST5kGaPnyw2mDoq1rduLXbf4Ngas7RHsEEhDCBhzLQtXpMtK12yA49dAQcwLm9FHFJxrVttMp",
  "key16": "2sDJfEHdojt53x5n1LQ1c52g9yr6gtxkT3VrkmTnjq7MPnPtLPbQ1ymXxXhQsnioBhTfzoFuhrLrQbckBc1npyXx",
  "key17": "2DqUPPK9Y9UVammjNd784njrqQC4KK8YAgqF1XjepEGhZJymhWGCApWfhGuzEfM3ryTZZpKWrsi3eF3yyvChwUXQ",
  "key18": "4ycuBoUUyaSzcw4FeiGA5WneYKeXH5Sw2wsSqtEZjWvy9XU3idtQaDgBkP52xhnhr45X7gnSp57srWBw86ABX3rR",
  "key19": "2aM86pteg5LhdFWbq2PFq8LALD189VLYaabyd5PsR1SSvSsMYFHyPFZaxL1C2fqsTpQPmFLtWde6DVxZXUYwhxJ",
  "key20": "5irT1rhF1e977os5UKkgL4GKPr3NKjyii8XWuQc4MtqqH76TACyBTiqjTf28LaSBWVGajs5CXUzPELKQP7o2VxK",
  "key21": "2cBCBHA1j1Jk8rRG8L1e3V4uJo9BqwRSA5BSo838o3wByqeugkri8c27tAbJgrG5H9t6eEo7L35VEydR9Wx7jKyF",
  "key22": "5nasqmeSG2TTHkyQD7ztikE5q92od2gfGtspyz9fPQZTJmZnj6s6MsK4rEAo3tJymq5ug9cJxwE3efstbpdVyfKb",
  "key23": "Y9HQmKx4E6WKohPNoBRXxr2TNVK2R9CYxAht6eAjumG87Moc18cFMv4cWcS8wj88kpcbNGVSyeVQmyUyxSDeKdu",
  "key24": "4hpp21ycrgoRfbvF8KnWLbW45mUj7EYuq8hS6fXFQE8eZBYY2KrXMYsLbhtGVRbM7RuhicSQnnLB2Z3PVwDuX5NT",
  "key25": "iQKZZYLpNgvQfvSp121Z6EBzFbBwgPwYrBkfacSq1TzTnEhEKvAw6c4EpqZMNEAEGzrnD7oUt285iJvDbbXjDBq",
  "key26": "3TP5uXT7NepYSNGV8KzvJ2y1Bc6HpS9vbChr9Tsf3LbgAuU6W4GVKya4D35TvvNYC7WHhr3XBDrMTexBa5FD1Ao2",
  "key27": "dreTEUdY4mNxVgnYXQLLJjN9Hb3QXnVhJoGUCQAkniN35zWgQzvvx5p6Scc7HWgrQh7di6iNzaE44gKKZbNMZUy"
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
