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
    "2bnFrwmXWkrAc4b2odWaQpzGRj9rASha9yu7hhhnyokCPxjaiSaeWEHayvu3xTF6p2pvpi4RUDHVbhTuMoMowF2h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kbdPEEnMJnLhW3z5ejjPTXoNcyH2Mgwjq9jA5TgGSnnrcxMSbMN1ByAvLStr6KodsfQKwwgkSUMMioEvp8HNBVH",
  "key1": "bL1Khww6KQYN9J47jQHf1c1xUqyFVYZBcjqyUkVMoCYkjQPoyqapGvyQBbSsy7wSRRmjRweFmuRmqH4fLAMvS7P",
  "key2": "5ygSq8oUkaQ3Me1nhSTMBtUxCGdKDj9Spj1Je1pZqbD6eMivppaTxxtLU97YfMrmbLycett7yengH727oh9CLRTn",
  "key3": "4oDHp6Z1Dt7gEPg5gKjvvW1xngp2iMj8g6pZ7K8z47mdqQ98fD2GRb2GcuttfMVjQF5uSS7JYUfMzGpasz4vs7QB",
  "key4": "5ssnqfff2QSjU4oeL5sTLSxgfDZeMMe8x4t9kQVnv5kRKG82TJ2jw1pY7no5F4XdbfxorvgnGeALMMothedShqU6",
  "key5": "4H6K9LTRPSJgDq2uym5bmm74cZdvdm7JG53os7QB3VpoLH3RtTsZTvu9YPVwdHEYzhM2r4c4izXJA66m144MBzyc",
  "key6": "4beo5CgyxN6w6HXv7DzCNY1ihdiGdFZsLtwFDVx5KySu138m79fgZEzVndpVDmP3LXXteb5fQkDigWWzfkFcA3Fy",
  "key7": "JF3D9fsBtXB8UX8cXkdQy3RtyndCvtcpBtMRxB2Q8VTbcprwfbap7SuQyuFjrpPT5MMYAmvpg56ghcKygyrREH9",
  "key8": "3fHJieA3dJcTWoB7oYRUr1JwuVzCxPrDc67dsyGDo85QZAB3CjYY6Eyg3bNJS4AG3gSBndWGv41TARTYd8DZ8foB",
  "key9": "3Ux3ivaRXkvWR4Xg99MCs1AHSjJXV5g6N7E1rAQkY9XZ58u9UcUEZ3r6iVTZPvu8Q45XaqnMcdK53YMVjp16xk4S",
  "key10": "65M9indEWhX7rNTsiZQraBSkkYQaRnTnRJuYfsUUXSpb7JQZrdnwunsM7Yu4VQVf3TV2KZ6BtoU38uYncokYFaSK",
  "key11": "4hFgherFEQjgGJ1j8hBFB5NFQoL5zE7Z6xg5DJjbQPxpwEnP1syzz9gUdXGH8Kjw4VGPnFyEXcegifnoh778eeui",
  "key12": "5sxjzQr1ry8BBVZK1tNHvJUNQ2jxdKBT7BuALsKe9YA4xKX2gL7q8hZcjYv9tqSZiMSyhwMzKso2Yj54kvMHznCF",
  "key13": "5DR7W86rqFDguGhuH3eWT6xz5sepbC3gYN37xj99hyom9d6DM3aEiKYTKKj2Qq5ueGV49wEKeDmGfMnbcbfogZmW",
  "key14": "2JsD2k5Lf8nnWCtjPb1LxBaoLwMAGuKj7vvrzj2QkXYyyPeQhZTbhHJY126uqJrvJTj9PhjfnBiUqXHVoKWjRws7",
  "key15": "4Rbvhrg9QSGqgwN7TSWPrZ2wjhVfQh7LctbTbBbVbZm9uY2bvQbFi5JfTTX38oqLEZPoveGC3jVmpqrshcmz73n3",
  "key16": "2qS745EUYTWpcYcoHadMfg8Jn7b1HPrvTVZoKZz8ZBjoJbP31S3BiqfLh1whzRWYJAFt7ZMR8LPEdZQMExuaqLfN",
  "key17": "34JwzNrAq61hGoQyWTcibyYaW2XE4Gna3fQ3x8NXBbpuAmZXnDSDAyadWp17TjZbiQen831kb7YDCJYNbzMtDooA",
  "key18": "3Ddw6ectSfWsQ6KaLYu6eSa23maCbF5eLPdVJcQ5zFt2jwDCe7einnx6S2aRQUpVXCyo3bGgGAhxU2bQirPnj2NJ",
  "key19": "3dx9s5sDVjgjqGiqoKbBJZzoh8NYJS7w4T4vDsRH9JGJN2HJmNoVyPjUgmMXg8wxCfgw7mjwTwwzGV3C8BoNT7Lu",
  "key20": "36hszivXqKF2YMjstWLr7yCapfMsXpYRbrv18DbMe9mfk2RNFwzksBZRpKjqUxACTJEKtT9Qya2mLKv2L4ZhvT1p",
  "key21": "gSBvj3FZS4BPuaGy6Q76ZECmyY53hk7Jpg1WaTFsA6FsCSmk23TfaLp4pnKhdcEGVG1WhrCbUA1upoeizAkG285",
  "key22": "2KMSjSazpytb1JY7fYaKaDUWMm6JWTJYvTgYxop88xiAwsCeJznqDvCNGjq7q9HTRLNmUUpNw6XTq5tbQGuGp1zu",
  "key23": "HyFupBA7i5qXisPAiEpGuRBsGLxdX9qThGr53gjs5Q4TSNA3SWwNZjZGzyjcw6TcPrCphd9nuM6i6qpiag9UJXL",
  "key24": "UTbcSkLGApC4rXe7DVcrvBEwintZDGhR66wYPdDKc9FnYT1LkDFBUEUKAXJqHdgD3kJwEzvFRTcfo8RbGz7uH1X",
  "key25": "2s4WTPPQ97koFaibXjcAoYgB66nLaVxuZmBcebt6f5GuixkyXLAn8yxgKBfinRxJ5HLd1PZjZEth9XWHTYGH1W2M",
  "key26": "32tU2PS3ikSyTqyVqnvDj83GRKLsRWwrYt1Ah8Yr5UG6KfQX8PRYYNvyC66BozZS5kuxku8u2Mj15enSUd6XXhdr",
  "key27": "fob3nuecoE7d67D49Cpt6xr1pmyNTNsfB1AJtQBXEzSj6kEQzHSL7PC37SrJ6BSz3CJfEY2CBpgMGUZsV3Cq1Ws",
  "key28": "4hVEKFhfUyZBo21xemeStaoLDozaiRxa5KFcD1PZ7oUhjsDUcBrcy4c9JyDbyKscpYKu6gCv5KBUTiNVFePbANX7"
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
