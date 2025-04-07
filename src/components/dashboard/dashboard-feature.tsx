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
    "2KvkJ6f58ZXt2SwEXVpPCuZYsQSUt6pWBYNULjfnU1KTBwLaULNfAYLeyFmR6m3wiczsTrZ2ucE1fK7dsh8v5u9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JQ2AgPVTtn8jLx9qhpr4C5VxFncTwczJLWXsf5sMpiXUTQC2N7CiPhGAUAcqRCRTLaZhx5whqEfgawzj45X8xKX",
  "key1": "5wFb9uoWZVVrcrrcXFmwK9BGpmq3cBz5irUBCX5mawVFtzUhJ4w211pt5hz6wMC8c1pAo8L8pJBcPBsKucxGY2Mg",
  "key2": "3XBpXDtt7ypKXbZKKnrA9vUNfxqvGZq1KciTXXcqFrRxuszM2m9FJxHEKtfcdB4b1BJCKpk2ktjWQADs9eb2oscM",
  "key3": "5PevDjkmzMH4wBadctoHSAqLKcpQCaHZJ9aXG52MjaFXRQhc8pJpSADRD2Q7pqEDy6skicMR4iuouBVEjj6ZsVcB",
  "key4": "33qihXcgxc83qHCiJCKySXrAHkWewE6NpzjgGZxqdnhJeEyRqrCLyVJbWkqdqnvn1BgdSyTTV4Rh5BFEsycVH6t3",
  "key5": "597bxzhtVdoBjCGaNNGNH7dxA4bAr1n7cvCmgRZCVjPMyFttD194EPQocPueMLNwnWhNVv5gk9EABaQk1LCQtU6w",
  "key6": "2ZuNeMwggYLGg3RAqHs9bhJgQdC269Um1eAen1GKc2uJQHd95Wzge9EYMqEU79Pme62tSiYJVFzUFMmp9hzYEbeY",
  "key7": "wn9MEfttPDBKaBqJUoVsPRL7SVa1GXowha631qaj65RYzXRXjqRxvRTZm1h7h5jXWGHzXZ9hxcjsYyoG8N9DZV6",
  "key8": "53JwHd3ncJVkp7t2FbnwBHRFmyBXE6m3cZNf4GZoqfps7jYJBTSBYvxRZbbFvm67Atu7FPdoYYecEMAFNPfd1GzH",
  "key9": "5jK9dEEaquWoupFkzDZLBRmW9cDPs3kNgN3inJX2UW6sNbcSQyxjGGJ7vRyi1mmMFwavhWhq5vXJx5SiPPCxoeV7",
  "key10": "5bfcLV3uU3JsavkLniksFY3uUSZvCsF3BD9mWnHY5S9xHY5tfeP6RMQs4hVDTTspJEsQJYZzgwcevpf8J4cgJDst",
  "key11": "5BbZWokbc4tbt1NUUMZEZTHzr9njAFZN898ZLzWgihfEDX2Gk67UT52mQorUPaLHuG1HrDQ4Q8PWD9rsCRkrPgWW",
  "key12": "3Jhg3W8Uavus99Gb3o3JFLfZ1tuGwNGfiJFVBHA1gAqw7aT7GtbJaaQnaU1r9tzwVVejTHqaPJrdMTNE7x55p9F2",
  "key13": "3hGc8yyAvGLSrXZbB9YnNwyLHjrvroZZfymqGtnKGcrxJGJyxdLirD2B33nDxgUzpBYWtbbBZEs44N5nB31WVv5t",
  "key14": "2ZDEpMoH4bNbiB8skDx2XxdR866GbzffafYUecMWnWFsUfrXzGviaStdNx3zgnuW5DbDzaVnZkRp6SMjsPjdfMM",
  "key15": "3toR7brRAeK4UCqHaw7fSsH5LNMWh2Jx79vD4UB41KTt87rwmPLxcPJULBvHP52mv4NtrQhjAVPtC4sBhkDeLQfB",
  "key16": "5rDQvhyY5uaFKfSe9bMTUAdnMrN6XPf1XqDL832AoULZdJ3rjbxrFLbwXz3asd3shMMujJDUmT2871bBzvGHBKce",
  "key17": "3bSYDecyuZdtmG5PaatkYUmnAtQnWykrvEK1d3JzRM5UXb2b3PsPYqAZViZntqnj4yDQ5TsB3HoiGS3Nq2XL4x4D",
  "key18": "Me4jTwWnWzxWvyH5jSfLKg55hsxo2s5sYYw5QrCeZTgJTSCE3QGyH2jtSukHkNvaHW9V9E6vKtMpGXL8nyjJ92o",
  "key19": "57nE43VCaoUvVNX2Fvqqt8kWSwrrSUNm3ugaAtqjvADKZZWPycjQvKu7jPowyjby9x5xNVGhdQzxqnk9TnTDnAnN",
  "key20": "2SGTjMd47wWWh2xskD9zXke6qkVfmueyfcsZw8zFNNNqKMxM3ouiNikTiCQHkhCoWveHeY657HbBzUtTQekGxQMQ",
  "key21": "g3tzpAUGXWXbBLhvXwHeJzPn3icicHGipuNSjB563zh8td9pETcm4VkVdEgQxi9MsAHzW8ucA8AXj9RPUupQawC",
  "key22": "2b4nM4SfDcxBvVj4dbW1SWMtkSbPjWAZK4CDqqbFYpC5m8vWVDnq3uJ5ayJvMxee5QHTzEQxibDNMW9RkqKDpAks",
  "key23": "BQiL2GdHt3oKdTjgpMMAiADBpzBT8F7mPCn8hCgEAN2KzsewrkifLCmSY4r11nNjAyuWfbNCRG8aPPdgdB6zxoY",
  "key24": "3RYn5x3ePvzsCLiYdKGV3WhffWqjAbhXtCj93nYiEeagsZsg7N2QG1oxzYexcvRVgB8c8jLQFST7oX34Fa4dd9hE",
  "key25": "2y3raqKu4YyGxvULBY1YizNEthBJr9nAjj8MA2v7urBwXWHUSfrYTKFWjR1qEn14Y4EHUeHiMkbWoG6vEn5XraTT",
  "key26": "5PjREEY9tiBQbWPbiLquEwPNsqUz9KQqrERnuyXjPMGyfHnQeo6wL4ExtTGWtUni7SooY3t7GQkSMCV8u26KEfNE",
  "key27": "5YUKEYWV3jnf99224ribGzZnGUQ1Rowm99a9Xw5reNfgsLcJk6vNd7td9LezKG9hGckjd1Wtz5tnRCZ2ntvQFGQm",
  "key28": "61wXU4YjRdCcmNmu864Wn5hG3HUa3wes3nCT6eC5Hn7m1ujJ9gMJZLzFbkpBzuiRTftGdCfYatGFvmDjxjhDPSYu",
  "key29": "3b8h2EyHnepKZEomrhewSQ96iZBKLCpndq6Eip7uAoAKLjiQJTMkZAMnSaMuTq3nAEKcEUs5ABY8BLnGn9RaCRNF"
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
