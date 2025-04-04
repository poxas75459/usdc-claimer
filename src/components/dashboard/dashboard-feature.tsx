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
    "qJBhTLdPLEheLMrE8y7sQjJFPwhi2MKhSUnzvkidLHUt1LM9nEX2EpyKLRWLg8Kh69WQCMyDANGVVkeHionYheX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jScNncxSeEc1xSszRFgpocnKy75kHmW74LbdhdcFQxGcNKRs4AaVM4jzsMjRfb3X858kstSwayNt56BAL5hc3qM",
  "key1": "5yG3XFN4A8CDeo4ZTnKZ3sKigtmQFnEqZYb9queUWHcNSCqfX6RHfxcGjouh3VwhdnnSEWfDn4Gi3fBHyfLvB9q7",
  "key2": "4rqg8dPVGBy8AwvHcVTMayMRaGaoxWyX4XKJWrsCi7hvwC33wMAP2eCKGxtsniKLm33gA4ukF2bkEirAR4aCM3VN",
  "key3": "57L28WuPft67oTPAcNnDqy9rbJ9hW118bp44ttZNVeNFo2tnjcJSg25irUDYjbWPQ6J9Z7jQtPQj47hkvTuaSaFH",
  "key4": "B4mtr6ZVrbPTdDEdbWmyCyoVCLkUtTqC4tvkXcb4dfM4r3eexpYLtt9bSpapJo6w3JrPhZP69eBoJvKk2nDoafV",
  "key5": "5GSxEUg6t5GnRZcaRN9AvDHBQZm36EMBfoEugiboN1MmPxwxB79VhrmAU1JF7kfzL2kszWpmCWd4Vc4E3nnDh7gw",
  "key6": "hjewgE8d27Lx8K6tYRLV1EWT7Gthr5BW3aq8DBskmDDLes21Lp55uswn4qQFXQqLqZdKXRcU7y8MxzpU85FBjn9",
  "key7": "8DrTGizC7FGxHE8NMCaEL2sU84yZDJ4iiqKG4fQwo7ZvTKfZkLJC1gNERMwFESZSSLJx9MPPsZdEVKFFTLFQ17n",
  "key8": "MxBJntn4n7AH8nccvQZWhFu5ApQnWYXq9MCfdk5gswcgU8ZZiuJREXSxADk1FZ5PCudj98w68AKUxwrL8wMZQPd",
  "key9": "2VKYkQgFFkWzZ67vDhVtXrGGTSFX7PXWHDbgNd1MSDw9wZ7uToMMvoAyW5nsxxtiQxmbEnnWnyefPZS3FNe98yUW",
  "key10": "4HZQL6jAFtzVkeNK7Hap8iY5yqLZjodaTxaooysNaEsMXp1nS8zcmBGRMybfMJJ922mzNHe69c7WmyMTtnSmfwuW",
  "key11": "3dq8GNwUvGXm6VUbzgnfcS7sxeLDE1t6XmrAtA7ErpFzAXp7JLL9hnPAmaGQj9YrNe2B1o2kHjmHomEgW7tcrb7P",
  "key12": "5uGy7TNDnbGh3AQ3YpUm4eciVryo1uQKxMSrbs8UTaGw7cPsP8wthvsv6o5M1JkwKG6fpz9dS4DkaeKqKMMYe347",
  "key13": "4UkiCEQH6qNi96Ntztc5RdgUeXuNhQUZYMdwDyitQeMB4s42ymCXFVc3u3suup6d4hyjWXQJjprPH3KRhnWbwDun",
  "key14": "YFMomnGx5Au8vjHatvDc4je7h63SCKk22ZvWAqoKQFNhVsvpN4x987VkPQoYPQuuTBerxTDc2BH5icgAJ7ZVngF",
  "key15": "58wothQGa9mSim4t1jBg2ooBL4CuEeAXaiYaMNoWdRom9zGGhmFz2bUk2JA8XbeDDW7msgVvZdYnPCTBun3QUcav",
  "key16": "57woGyGbxMRR1nxNy9L26nN7WBVE4gxu9ijY1P4wXC3PTAgPEDDzJQf4VN1bAKnQW7rnBsDmneZ4KnsMGgySnbdf",
  "key17": "2aaRqYEq8MPLGqTySAWK5WetTeyCv4NKCLSvSvxJsEks2G9uA6R3exKyAG81hxrdgyuF4jrvocrAjcuwNADfotoS",
  "key18": "29yoNDMF9oDx5bpQhhEPzT25pdyvUvmunX1ntjVzeJhufoa7JA2yZDRR6eW8Dj3CH4sewTWTGfzTnST8EChVs1vN",
  "key19": "41fiY4wWbvzbY5CVWwQEcqUu3CjPFVdyt8JxQ6UJFu9H4AprnhM7zdvumgCeWWM3zBEjZsMAq36bF7pB3HGXy4Ey",
  "key20": "4fAEg29572LGomytDqiZXnewnF9DPyemAxkLiqd2UuQ8bUXhoUfcnowxPB3hTLdTutWq5V8wwnmJjSYjaWAptj6g",
  "key21": "5YsoLeuDT7iisFFZKjSpiaw6dzcZGAAZm5oZiC3YfVWD1iYC2pKUfoqfC7CX1nJ3eM2zrDppTnaRPfMT9pFZtwq5",
  "key22": "BLbWBh1AP25AVU9UDiorJSXrYTtch3TfwCTQ9FMtiwWwYpsYigg79p11WnJ4dQGvQ9hD6Vt1AMMi2dzggHTjE39",
  "key23": "97xCVCmTjvQDaRZfh6ZDmfGe8uJyiZegDR37vHnVE69mFEUd4vqjn6crZJQAF5eDdkcNsAvsKbRoZPs7Gh646Nh",
  "key24": "5VAg3WfFTqfihqvyfwCjMaGqS3E5L2RETUsUK6y4uGByusNGjzqDMUAyvHKJc2XqEaQB1x6j6faYg71gZXiJXkVT",
  "key25": "2bEdpsDutmrZn1fAB251VjgibHkgVUijEmQbm9z6r2kqGiXqGV8aB1tc1ttxKM7vJi5FXhAJZXR7g2gqh2ngj6ki",
  "key26": "5FZgtdp8bzuytn7fL4vtTYaPkTXB3p9B5TFJmTVCJ4Vdi4dvcM7gBt2hKbkWpHiFGR4i7pLquh7GVuXpwVhx15F3",
  "key27": "5QLJybL3ZnTRwuDWbZWJ2eZQyMehWAEJRSoUzYUzKLaAqoHxbEvbuvsJC1YB4V5P8JkUaqgbNud7ikvWji4Rbcze",
  "key28": "6GEw7Vaucf3cY8AJxmCkRya4VdCGJjzU2Q9uMXz8JRMaCym4CA3HcyrW5hf9A692DiHzPQVmYexojqvypQKsAYW",
  "key29": "2jKbnguxhuj3TWCEmkMjJ4nbaNLxdTQcQYoHrbJAHFSKo37pxtqHEZzM4uP6nCeJDSBkpq3FppViZ6Pgg9QXo4tJ",
  "key30": "4pjxdgKuUjq5rLfqPkg5NVcLJfLsReE7EWVUpJuhzXeRhBHF1foTCvKAy5n7KPCrhzZBywoHXBuve9ESFg6enyb6",
  "key31": "4hffGDd3w9fhfXoZWtk9j1SUaQhECfujtToFyXXQzRtXyiKhroTK7UDXDHsjytx57SovQXKP52wDQ2g7RfU1ZBfy",
  "key32": "4MzFH45nwFtUnmdMEs3t6o3cu88dXnJX2EaeVgX9ncS5UeHKBo65bbE3BShMp5UJtPtsWG51itkrrEA69zNuSCuE",
  "key33": "3pigWZmxJsajgVimQZ86E8vP7sQKqZCfSQVnchSqmEExhUgLZ3ijieeZHbYdgb5nZXE9orZQVKGi122oBnL8sc63",
  "key34": "5Ee3zELkQmtaHQZWtsmWA2ApZzpt6P2bb3469ZUUubNrfmqZbTiZvPgCk4bu89xCE7PbFKkc8L5MqVgfptCDX7KZ",
  "key35": "4qV2df3yfa9M861n8SCLDx3iepR7f2uotEvxgVoscQmAkzPbFYTLedrGLJbcKtssPC6jDMjwByjAXqYLcB48ATXJ",
  "key36": "3UYoStFtdyXcZWPsXqosg3wbHpMzwoZ8aEgaSKUSsypWe5uxgpGr3MALjxW6bHTEy4q4eQPQHwvCVB3hXGPtTc79",
  "key37": "3bXrU37wMZQJXLYtk9xSJtry9NWdc5Yf3ZxiJVhXXKyCeFYYQEk6G8FSMYW9tbwA1rFq8AVHkuDPfzGTRtwNZ3zg"
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
