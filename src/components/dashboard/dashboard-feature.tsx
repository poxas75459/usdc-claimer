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
    "2U7F4XFb4jz4MfH6FfGPutgKntxXioS5sGzBbRJ8ENaXxxzDprzNbnhL4Z2m6gJFnv3aRzNvok7ZJ23SZ5JFSkAG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xzyXcckr2TG22AtENCzWBeCHAzGw3PqxD3SQ4dWpp9rTa74emgbSZV65oywXXkehC2jzjb2id2N4RjmoKKP4awA",
  "key1": "2f4Goi2C2i8BSmtt8i3bey4zzHnoi6kXKeXcebdatsxHg7jmCWuhhbgcA4ZCkd6Lcna3b8NjEo4VCXKwnRdjzmEy",
  "key2": "41vG4AU5QAjZ9HDvYRKh4K1aFmRfHQSxeJWpDQQvKf6L5BF6an8TQNFT83AwWoHKxXggeYaHk2jAaPkgZqMcoWuV",
  "key3": "3LSvbWERWpTyoNfysYZy6efXCJo9mRjRuu1fffrGdqy86JJpzYvQaWzHZPNeyJqzpXPJkUH69dj2tp9t1gBgWVNo",
  "key4": "3RrkhHKXP3xBk3vAaEVR1kpYsxXYSrXLAjFjgLuw7aj9m5yydDQPMSbubL5QtVw5hmKPHezmgQzkcWhSu5Cj481p",
  "key5": "2pGKbv911ZFB1ZuejDbVeNLqfdvS3ojknMgFcxhieQPDw9YXHSeAhVQPsfhXbbjM8aTQaYetoXVauBki1ZXhRYVw",
  "key6": "4inevhvmcywYgccJvTw5JHfhovcntjqPdZwybZtRdG6QCvgxvet5qoh8WsW557v3uYu9aTs7THYv9Kvxc1Hy4MdP",
  "key7": "2MrASV9LBqfmHtBaK1sBir8njwjyV27Qk9fjswVPsHNAPHcNW68HJ5nUYzLpgXtDW1SRVsSgeCrGARgxZiHiNb9A",
  "key8": "3A5kLHinNnFZjuJWVWincojpCQhPUadSPjpuD5fMrNBRdYCJ5XE9tKpehEviPwzwho4DRBTnMC9NgiFsmLL8R9SQ",
  "key9": "4JBxZsqwohCxxLtSjpy3MrXq9nghEK6krhxiSGxc9ySii6sb4eyL48XjjjYm7x7YWXLZHbXcJugPNR8Ko8hRsnH6",
  "key10": "Ei5U6gVMRNGFN8RQBKJN4UZS5JmEzKj76kNqKYknPEfQT1KUkYf5hs91RnCNvwVp12QJ3kRrDozuRZ7uL9gCn8K",
  "key11": "5cjz91pLmALPXPafLpjrc31SoejG8ZnRdgvPwVC957HKzjxY3Ryy68tqHQC13N8La6vsYgsFV62HXPBZG2Ps5r81",
  "key12": "5L2Auuju4X8WWo6mNWqWbX7ishSHdSRVWLHqHNDSAGhdBkCao5ghWaWMKCaRxxDNsdzDE9N3CqKXgqYUb8zt15qs",
  "key13": "4aaDNEwmhyh1CbZQSxRFV72ytkZuPV8LuSGURa7uNF7CCcktJFhfVqswxNRfv9nLvPhPexqDo28CarowVERPS2Cc",
  "key14": "5V7XxkYxtjQVnvaCm7u9c1CkgcpwFsjf8sg7JJY6fSp6MhUsBgxvRRRnajK89xSSrJTTMc5q82Wf1QxfDkF3Sqfi",
  "key15": "3eXSZnF68ExJR567kwPY2EqUiFhRZtvsykmbH8Xb1RGkFhw62gVr7AnrCqrZGYtT8BYDErCDGQHUBx4WCWzyKWdx",
  "key16": "VRKGVkyTejCo7nPPpPLwH8FVQqAPVPjEFBi7tpZySFwzy15EajXmxw75jVbk5LuWoKq43gstEJJj9DQWVBnfZdu",
  "key17": "3XLPAxCLYkWr9siYvu8kiEWaepgNN3T1K5kd6JL3aEt79GStHoEnbudw7dwGnEeTzVrmryumNNgCAmfV31iX8QvM",
  "key18": "24YtxNht3jaSLcNoMAGfvpKMxLvaR9N6uc7qqjMUpAaW6csgD5au3CCvE7fkEJT2MXAYTi4m4gnpAs3xbDVgxhqk",
  "key19": "3yuwA6vaZ4vE7ZUFZTtXCuMUj5r4kFj5LhN8RXLBNAie1t1imFBpYbvYQPibdAFdKL2cWt84AcpDQaM8mrXY5gz5",
  "key20": "2ZPxkMX6KvxC9vPFBdbGtYVzkx4UoTRue5B9pXX7n9WtS8Zqw5fJDLfWVWt4VUagtvhgn2F9dJ2STEtKRdDShcq5",
  "key21": "2UR12DXdGDh68rHo6WSNZYvPJcBGcU5kuL9WjoutC11M8VKQ1PabhUqaLFGPtG8eweGNriwci5ry1m6PRgMeqZsK",
  "key22": "4xvSRAXqVtxiz1dLvZKQJ9kSUokh6FcFwYv1Ssb7YXB3XZstK1J6VRNiwB64cYuFeBMjfADUm5L2NVy5Z4jUTRvr",
  "key23": "3Zkk9CLyXsAFN7rGGrimmgeQjVUKQCvp9jwzL6z94nFuR7YZPbUGwdaVTj27roGfqrYHZdjV4BWyAGbbsR6Nq2Yu",
  "key24": "4MJap8RKkSDkNeHTcMTjCTfdHYms84CXnqtR7wn3UftNxFEt2P9t6kBiozHEroMSAzzsYybKz2fykEgyF9eJm34W",
  "key25": "47uQzV6dnfbhzQh3YNw5WCZV12j9Gq1P9p6fhwYWGhhUK5hKAtKYxw79dKvshxqax9zQPBm12oh1eFJQUnTdYaVQ",
  "key26": "3SD4ZozVUdkj4QRmsWgb1Ta6e3BY6r4DiWLc2A5otEA2Vq4FSwZeFLAYv4zDsbJijXQ9oShh6cDPuEVPDVy1gcZS",
  "key27": "Wz9xZSBrLQmS3QXkbRzJiuZyJ2Zq94ivabCdE2yMgpZ56F3HRmQjhuPrFXihS969Q8APTsDJR5TsKpXf2YpPwm7",
  "key28": "WAFuERY5e5MQSXopWMKSWJvdyU7ZSeXEoY4eWpo5NZazXhTJ4gdcN1oA19dzYfV6Fg2xMN6Ajj1zgZXEzq9j7eT",
  "key29": "4dsjCzkVmYgErU9RsiRErV6sddKPof67V8HQnMFqC4t3QfJujDaPeDVJqGLiNftb9oUw5ED51bL1bCfWRWqPihnj",
  "key30": "23eC3WMi3ivPjJcaKoDDiFNE2mBqLAt5PgXepaVoQSj3XECWXUYDHA4b5MCP2ycgGZ5FrwByKULCcKftPpsagHf6",
  "key31": "51GEFC6uT81eGNrQCjjC9hGwkiqbeqPRGD97g5v1G6xZGwnEN31fYryadvfKQNzW656gfk3RMcU8frQBJFbGnm2w",
  "key32": "5gMtpYU2m7ZC1WrmdCkEmKHM7T7VRW5ZrkTDkAxpMAzft6y1f3GRz8LaACVx5gt8EVoN7LnwXkQ4LB6gxhKwVf4r",
  "key33": "3Qzss88jwZQQm8bUpwCrXUyhg4wb1z6RK9koK8Dp55FDoXenhVDPFAWtTxn2Hnu7JLbjhjYeyWb7AzdM8A829Srq"
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
