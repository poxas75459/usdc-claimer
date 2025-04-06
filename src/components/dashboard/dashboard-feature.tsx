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
    "2DJRdJtcoCrzMGqqRvBXiPMYZBuEZyF32v5xRFY1g99xQdigV1QgD1A5AmcdCSAtErvD4NhCsogDcRUTXKpZvSh1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2n5K5vWUvLbTkK2SJg1tCtAfFnhNSitKpWKntCm2MYpZr1pzu1sF58dwAewcJ6ckqEUJxa2wTJ9YbCmuAbH2qAEG",
  "key1": "32o1Rts8wPf8QRFEvoggkY13Rq9vXahSK92wghHdj8XGBcFpWCoJWEmUfBE75RF3ssHzcKLCbgevJxWxxhY3rKmK",
  "key2": "5DASadd2wiUGkXvK4eLottnEGypCjrAV4u5h2JvRjvnk3Gr4LUfpZBEAYSM7MFEFW78X9mx3okBYAEpv5LCrA8Vh",
  "key3": "4TFWdnvrua2YRdLYkqs14gQLeZvZUpy9A31bEjkGRFL37uswzG785DMQPu6L6fVJkSAhDutqxpgs86pZTZWM6gPb",
  "key4": "2Zmf3d8AYuDUNJ5pR5Mj69fxGKJJcsUxarM6RLy4p2ahmhs6A5qRxAiGFh1LekYm5dJKZn89EVVqEGtfUot4SyTN",
  "key5": "3JnMcNDbxcJKXtPWnVb4GuWNABSy4aGBW9yqf34NAXPy3DDd7hwjJttGGcdwiDnYRoQ7L1VCeeFxWWot3iK6udXJ",
  "key6": "5b4eQt5wWZxai3upZf8WDAqFFkqRtNQ2ThcVLVjKKto1b8yoLqqAfhfSoNqxn2gmGZWmwhHuX19nfTgXc7Aw3YGo",
  "key7": "4WezGBVcvS3Xw4mG9JS3ZznLHEQP2G1yZyE4pq9TgyAyV4ih61tzYQTPTrmpFdPaVb7ZHYGFs2NnSnYhFDWUKpEc",
  "key8": "5tiAqkYjeoRRnz17wWLyn2nRL8q1ziHQppVm3kQ694v4XBjBoNEGy1ZBVQsh9uURtfSFbjnPLE1teAo6Tbnb9mKd",
  "key9": "3wUdruyiu4AMFWeJ28VtcQuJ5Xjw8wBq9Ja7cX78GTUJ8aBqy8xfhuXpNWzPq1mz9vTW5wLh6LHXLLyBsaAscQFd",
  "key10": "5817FYpLRuRtrHo5in68SKPUstgtUemAL5f34TGNmZ3tnKebZKmPXKJ9A3RVn4AeZ5CJqzHNWMNZYaWsJK3M64sp",
  "key11": "5KqmMs1dvgpk2rcCK9Ct5GQZ4Sb3KfAQQBQmebJMUmHsh2n7jPrW42kUxFsEHuKSuetKeyp227x7LAEhUKKehLHi",
  "key12": "3TJxYhpqxR2qiCgCtxus7htXbLthzHCDaicCnnbrErSrrzV3Ua4w9VKkUVURT31ZpqySzQVnARJeevS4KdYD32N3",
  "key13": "FMaBky7pjjucM6BjVqMPPbigc2BgTmKGdDXY9edgbmRWvapeco55dJQaLUDn28jHTKJzVjgwuxauAoUwBJkG2J3",
  "key14": "bYuesY4DABHiVBxLM8QXy2Rz7JoDbBEY6RttuWTsDAeWfx4PnFD4tXbQDetyBRto8ZJa9NCXYz4sAkuiy3gUZPu",
  "key15": "4Ua3v7YJaxSD6ZBGdApmecXfrcfSy8LrbGDZYSNJjbLbPwfFahb3Jhw5ozxb3asxVABpQsgmjDQBKNMJZWqvKroN",
  "key16": "5m5fUF8isF1xYzasq61D883Ve49r4mxNScSyQ5QUVXjj5G7oQ8yzZjogqJZ2pwe4fsxAZhZMqMQGJj79XQWBSvs9",
  "key17": "3zHNBqan95dq3Q55uMsjJgUiLaFKUD7Jv91Tjz3nEiZfhgafigXPV6KXYZhHD8x4Tn9SrJDayNJn7PrZHnoxT8sC",
  "key18": "4kTqqZZTzWVePSVoTv2yXKC2ppfV1LdugNAe4NbjtU21tejGBPw9u4vpi6i4MuB7MSzmjSv5HhWQFxQsdiY4XE3Z",
  "key19": "8dGDJxMD4wVhHDejXrNjUqMZzpZg8ufamRzZFy6TnYWCF99krccnjkqPxUgimGkh3Ssq4pXYPWVmDB5KXvtNMbg",
  "key20": "QC53ZeySFkPsvgdfrAwBb5JXxFUkkSFuTMuqquNgi7Tp9n8ERJJJXcwLhKDfFBa8r5HfDJzgDAeQppRWBK9Ah7w",
  "key21": "33Us9G7qZ3BAFWeNKgi7v79o8P5CBjEiKobYLdyM9dCzuUQiiEZdpiEJQBhV7QYvMHXdvEVa5VTgYgutgRLgLUqn",
  "key22": "4R1919iBHiZuLjvREoCwTJLDBABzZJ9zDKMq4MJg3gd1aw8BhSi21HVZk3BCiSgTcFiMsxVbi7fNEyir6aeRkB4J",
  "key23": "3CVpeQaNvXzN1FKt3Ezuw5rpn7b7MSWcoTKHaDY9CS93T1NsQMAfQpkaoxeQK1WJkVC6h358fJci8Hq7hZ8ART3j",
  "key24": "4NuP7zKCi3fsAAAi8TXVcKY8BGJkQBTWb7kfpPecdv3g8mHNYJtSQNLAdiVqRJFYGo2qRNGZsSnFoq3TZ6VXTaNy",
  "key25": "Bs3aW5CxtWH69UTgQBt2FX2cjSSiKCEEiTqNuUJPwqjJGmDpGdwhSGkzg1ohMNuNgoRGY8Gg2WdXjDck4kMqPb6",
  "key26": "3t3PAUB51EkMdmKDwsbpT65LFuEhZorJizdjHbK15Xc8edeKkXGHXLHXuTSfF5kW1A6veg9QQPRsgE8XDzXFZ2ED",
  "key27": "BZpN7tYEAC2fW9WaCdEUgftJKBLGQEuUMDVQBTjBUQE86knFtQDmBBqcHoso84ie2rduNyHa4ffxnBbWMnwepmU",
  "key28": "HQMgMXSgasQfgY59NjLqgUrGxaQKiWjZLtgMZTNHZX1eFySCUkGXuUz8yv3jtT1XaqG26S6qBKgPUmBkGsxQMgd",
  "key29": "2W359L7x5w7jyPbWsPbJarQ8DFiAvqKxgS2ikMZhmAREk1fRHcGXbK2KZqoDUbpr9EsfovqAFMitfWzUc4vN7SbZ",
  "key30": "oh49zKvvLzHGTGc1mwjGZ8Hu1EwbZiNNLp5VvhwDrNaxYiupJG57oUQE2fzdkz2cCWiezpSmxvF5WFVSEZPU6gi",
  "key31": "2t86QLyHL8F3hirVUpk7V6k7pZWECmz97DjyFZHbijVomKew5DiSvJJqKKTHDex2jAAJFqDA4Fv9myCREREUqZds"
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
