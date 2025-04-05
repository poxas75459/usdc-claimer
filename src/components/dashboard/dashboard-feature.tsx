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
    "4dLK2tPEGfRtrpZBjafndM2PwzbMKYJZcv2UZ5rLbV2mWUK7JywGnHjPDT56Sc79dJPLCUPwUqZUWLc7kng2puUv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QiHeh5u1x92XStE4wFRJdgqpKoXHKgReFqNtfGQMBiESwCAJW9eS1YDqyWTRfhfqkb5T2rW51oTDbH6jbEmtvQG",
  "key1": "3ybWsuKAPZeSAzv7g83jbTEMYJuAt9XaJDDMjdppsZh6Px5yaP2Syi1iU62M2jUBiYsmeuTNXiuHRaMKSTTWaRJa",
  "key2": "5bHn4ij27h9fvtrjaN7Dv17DwQb9H1Pfvoz8bNJQizA6nAEdpuxMkXeLs2himWCW4jQPdDtJi1ucLicVQwESajVN",
  "key3": "5faexGybyN7hoHPvo1SLVYa4qoBuVDRKWFpJbY8tDGSsowg7BPhCfzkCveiQZeAFD8YxRBjYy8bqE5zww6qSdekq",
  "key4": "4mpLQUjNo2EKoihDceijoXWAu278MSUwdLBKAYy1GVPGUoMWBf9vDp9dTGpVbrcZm3HyNS4GSK3UC9hphWv9oRYR",
  "key5": "4yh4vRtNgNeKk4MuQBh9y9Xfm2s6jfTQiPpiLnZv5eSboa8vGAz6c4HUpKv54fFLMQUPndcQUL5RGLiZu2AJShsg",
  "key6": "2KLRXwFEzoq88qoXCie6hZ4xkhpPP8hTcRWvYQGFq58bSYJA5BEA3vnqrn4bQJciVu2L2zCt55JTHstwRL4vjbtr",
  "key7": "4Rqf5gamLw41CdQmobYLLcpRb15V92LD4pVvNDWfVSZHKJSWkiPGFgyjiW3yGU2xPXCVJwxsmBfv3xUo3MrmHJoz",
  "key8": "4w33Qe5nA8H5xBo9tWVCi6VVcpdhkKjCVcRnNmnbT9F1pdEjS33mTix7KHviHhVwzsPENSEyrsC5SXtWqKDRi82D",
  "key9": "E3FEp43YGbfF7wrkR2dHVvVL7jmE6uLUHhZgqY651sGqhJirWgMFEmek1tQAqj8mUdTfUzJ83Kvmk8KX6EQMC34",
  "key10": "3KUstaV9CP27bDPfvadVz43MdfpegjL6dfzB4MR3qGBvGe3rzvnQ9qrt3XgVDMzQVQ9c5Tad5cb2zwrYe1Z8PEXJ",
  "key11": "5ud4cX3L9nRukAqu58KVSz5vBhAgwBWTutmfyy9SAUK11opaYugiz4PpqZRCcpL1itvoDiQvQCzBAH7HBqoQ1qpQ",
  "key12": "3MU5PPzHBrouG18Vo7CqCZn8ePzaCVVWYzHmRt1sGq7TzxTXEZMgtMbRcPwfH65ZZWftWa4ZbbjRawDdA9GnapuN",
  "key13": "2vjNjKUHJAbxLr6wxQZRnnV5T38k6wxsR7Q3SQmeVwYy9QfxDe3ZiPjiv2jBgE82g2ZA2KPNv1YoHiLVjccD1btJ",
  "key14": "34DXAFyxkw8m1eJrEJkNHBpTrFqsBXZzXWeWHiLjHSKXXJ4ZF5EYExdurNLAhDxMcacMaTrhnFN93DRaHYTkiodA",
  "key15": "47hebH3nt3gQtmZDDohx8Rgre7ZhEXJgbagTSpeuVjWSYbHyxXYtg4K1S9kZaZsQfHyLGTAqvHrJQihhvzjrcU3M",
  "key16": "4kJSu7J28ovA6wfGta8v8eSk8QWGPCmR37t886h1q3K1PfpXHS64dcFWwC5ap2QqZrcvm12TioeZ4YD5ZnNCXN9c",
  "key17": "3ujjaXg8P4y6jKcz5iAg586FoVm3jxSpamRgMYqqnNaR9qjLAkXEyGh1DMiubJMjn68vWBYTzhvtrWCEaVqBb2KG",
  "key18": "2VYf6SrTHAeQ9c2KNHGQJHoiSfBageK91p75pZDFLetufh2gZmtr8fUHgzy4ML2chENzYAsKqLaKSrggpFWSzydD",
  "key19": "4428Gmxk3Jzd6wyBimzR8JSk45vZZ9zn1kpzAopsMAbNVd88U7u1kPXJQXF5XshB7bcohGdrhqFshhgPTqE3528Z",
  "key20": "4uqBxk4iRz1zSsrjgkTcLxYoMquvAQ4RHGerngW6ruoqcJN638p7LdV8p7JMNwHZff4igedWmbyzJLSK3HSNVMdY",
  "key21": "4B2BYvHiFncyKgJ98bbj4MkJDnL8LvSu4ZAAimefYbGTZ1eh8T3kdHcpQUKKBpymxenFUoxffLAnQKSr5pZTaWkY",
  "key22": "3aXBZirvZDACAxJvEA1RAh3BjQbYk73mqiYYZfgSneMVyeDBhftjjY52k2GDPi1Jrys5L2FvN51HnbA3aQWV1xQ7",
  "key23": "2ohSCkxVKMtdJm4bovNv1u8Tf762ieKTo1D5TMrt5YJPvALc98m4Yk6RRuGqA62ETMhD5Eb7sukU7ALAEBVfGmLC",
  "key24": "2mQLzEA3YuKwVDuq3eyi2oBpmYqT9LFa9QqZvc9o6PPwPvn7VkL11ZTgV5RapEab6zDtqvxdZZKaBKbySUVJvrMa",
  "key25": "3dfM8YrHHM7uRU6Ntmd4asGArwa6Ade5wm9gEtkEJDFJsJUZq5Qa1f3MWMFPZteyov2gTBibvfP6DF4gvTA2Re94",
  "key26": "7iu8VV4uq25EVrDRWgKnCnqGWmXsnpX739AQsG4SkM8gMbaT8dQsUik9mX881EuNTHFFaAybvpPvYn7Jw9w8qo7",
  "key27": "4qCU2epJpfRducsnXaU5VUCgyVcj1gfL48TwKeDq1ru5AKhEVJAuamVBLub5bjz9AebzeiKmFtuWfdXcL2zTicED",
  "key28": "3L5FJhT3jm5B3CwSh48TnN8DwKaUQRMmfU6o1EQe52iuTbtGvgYJZBAwiaoV5nHyd91UbULtXmZovbFyKP1UF7f6",
  "key29": "386xcSyBn9pr4usxFdDHoHBfS5GaJPfwHHAgh1cpPYGXH34u5tBaL1vyXL9gKJTAnRbKbpuk8zhPGkuMUTZ5qC4B",
  "key30": "5B7LE5W8tUUCi9QkmfZVt2tn1VA9RTUojZRACvAKV2pEvxvUNBAjuTJm1awE97VcRWPhYLSbpSVQWDVCDcP8oTQA",
  "key31": "2LAJRE1AsASz9TP6R6G7rPZryV8hBQKqLF2j4tS8CjFaBjmfetkMnn24A9xbhiLKhoG4T1CTHYCVqUqNL9YqN4TJ",
  "key32": "3Zi54yiEanVnie7c8TMjQgS5c7s2u8QFPDepzWxiZkY2iKMmpZzGbqbYQHBxk2mmxQ6PpoVN3ygyzx2iXH5nhW9s",
  "key33": "3N57xwkNoHC1WwmUyuGtmKt36v9TLM8xuJo7EDc2YRZFotp3NSfa58mTX1rzrxaJYBAixbkJRnAxuTePVzPJh7v4",
  "key34": "2MD2nmKoMfren6w7w5ifqtEArEJfD2pmLgsdbDcQeWb86DX1e783aEEY1cnmx2PMvrkTmFNNDtVypTni63ZqMF18",
  "key35": "4jc2PtYaEGhs7JekWextKNMPUrwbxM7Lo1gV4hDuZz3J5tekvg6aBT5nT9uT8nWzW5K7kCv8FcsMDPa4KmBPwm2x",
  "key36": "2J4U7DFjM1cirvSqp6wrTdFa2XHXAQTrSXf8h9V7nptrAhx7jBMpzWSkjciiwtm5hJ2AM6TDy7VCmAvjR7MU7JRZ",
  "key37": "4o3vhPA9ejhddMKEvVinQojx1Pc8fNYy6LHYS7M5WtcBxsuhuEdjhV71oFydwBN17puVGf46b1SYe7dEoGXwsxsa",
  "key38": "5jVwDsM5RrANLvh4Zdd27S5L1QERg1KSVGQyxvtEcf8eYD3itcRmtxBoKPzjwu7QB3CioXhKFc7csqQo2DFF4i3i"
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
