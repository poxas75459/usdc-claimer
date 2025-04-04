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
    "2yH72UA9gt5oKBB2psT83r58wmFPYra2wRB41VXTAoopkw7xPuJqGnt6PV4fjhDAQWDc2sjFkzGd9461QoV8aiu1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fcs7nMPaxrTfjNrNh4G3QCyxUB6dHahMPTdGh2zDF1p9ZGNEmcXsJuo6BdVr86CkoXGLp3ABPj3BAzGrgp9eqfV",
  "key1": "4MS9QiTHC2jxxmXcYvjnvWjPSA9wCUfpm3orHRuPk8R8EXm56nSaPrdyvRKZ6RG5BivsvdTHUQqmxTrwCxmuuoGd",
  "key2": "5KQHGwdQnckb4sa85XjTfRmezHjBRu2Gg6aQcchjBGsbbyqyNUwLZTB5VECjvBEu8nEBnqAEx7AgEySe7dMpKh3j",
  "key3": "2RaToooQLB7Ku4T79vPwCSmYDXB6nqBntk4AxDju3VFAA8s7rcRjBheU7jwoNeCnVRYRwVxCK9csdsNb8iB3UFQs",
  "key4": "4tnRMQEch71XhccjUVB7HYfFR473L7bueGbgfqU5kdqBDdHH71WWqJvDNqQr133yhTuthp8BbboGRNSGhUJG5tdA",
  "key5": "WGMkXueaGg2fX7kWv4LqGovieApJVxU3GwAzGnU8ksuuDRgkSR7rB2YT8sQhqnMow3XDbyqi1296bnWmeq5uzYi",
  "key6": "2kvcyAFb9PK8FFAzfKBtghyo76viXnmGS6P76tVCfdEohMDETJNS1jBwR9hoc5LHgQBAman3xgMLLxqUswjtNdRe",
  "key7": "67ozr43RYAy7dBwnpSx7oQCv1Q98CRfQmgrnRRkLPN7MMcN5TXGGsj2mcG1gs55NDjFxDkfqsUgz27ojjcvqQVbV",
  "key8": "2znb58Z7zkScZSADoy7cWmt89vKGnTTrdcMr2HUfD6M4VsPF6LXm2BU57ne4iVoXW2cuPRTKv7bk2kScv1JNhm9L",
  "key9": "33tHUXgxRD1PsbK5r7FsSsjh8fiHNdVYkHPhMuGSovUxQCaR8dWG1TEEc66RuLGPj5fm26tT2xNNnYjUwPRpgtgy",
  "key10": "5ysikZVNizQY8sFcpAWub2cy13HfyAnmE5qoy1ycjSh9SkABRcuQMyqGvPfCWmT2y2erFKvbmbkU6yAaEyZ7RhHn",
  "key11": "m7Dx8xqeTGqDE89ZyAkY4cqk7PvFmWnm9wDpWuTCWXgx38G5WTUk63BkrbgK1yeqDXuofiMpSBLy2XWVKrqjF2E",
  "key12": "5S1Nb7arVLbQpqD44xyE5m72euHjGqmnWmnQDtzJKceyk1Zt9kVVSDMPdx77Vzjz47iRwtUj6YzzyBUTEHVWYNih",
  "key13": "2pfABZtjYcZsEK19bwTp8RwajCisxnrtHo3T2YW4zS8HcT6yLWBPFUiPGfjQ7DXctJmePAJsPZJ6SGqcnvX5AWHz",
  "key14": "2dCUNt8DLctuv4Ern9gjP1fR6tgf2usXGj85ejERCM7FyYCFuEjUM3MaVFSv9fvZdEUF6xeG9MzeWdfW8b2avmgV",
  "key15": "4VTATnRMWVakGhLZgEqdL7QdcYwVmbc6jpkLbpxsoycp9kh4fhxVthJCga9ZR3qSwrRJUfZxzSnngw6bLbmyB8GL",
  "key16": "225Qw7zu3jREUL1SGeGVb84SRVgotAeZjcJTGXGyZuyZC4mm134XREUYKzsuqNcS9GdV5n2RHpKG2sJt1H3M2vS7",
  "key17": "31xHMsF94zxiCUSi8f1gqPqbXHJJF45qrJdFXWK2MuybjV1WLhLdTgyu6xHkiurqDZJXYGTR3zcKtZco2AaEbweB",
  "key18": "5CnVxXJXaK175CtZPMuP7XpFgNCcmPQmmF7jZEafVyXYEsNJarELZT5BAddP1YTBnPNgNsTCQpsfmxSkPdemvBaT",
  "key19": "3P9pZN5QyUHQ6sRtpiNadmASXyDY2n8mgmq1sWYL2b96gGrSp5R38xWD7LnehnDPmr3ANuquJB6BYzZmkSf9LL9K",
  "key20": "64DkoJChewXxmTu7tycihBXaHSFvHZfXcGqcQ1cFQjdb1gZhwK6hS5PoW5Jhd1dhowxw2LwLpgZzBbgS2dXZ8Fxu",
  "key21": "CAec1KNGD8aTfNYDFrKLiuJLBc73h54KsEJVJf3rCULt8ktETDR5t8D9NmagQPWGqU5JMsH2xVE6fL9YmMGDMVo",
  "key22": "SMfJw2BZdNgVdDbqFLKKPQNpkgqH5inzdHqAyjWgtZfBuq9qND4hjr8YPXsKr4sQBBvSzQpEuXXQLG4UuJ3Yn3n",
  "key23": "5SF1s1s5HonXEGA7f4cNUBXAHd62mTJ2gugrV6XaV1MrAdJbuV2Ghemoqu3ZrKUN7vjLVeSnf9LYJRe53o1UG8Wv",
  "key24": "2BqonPW3oxEVgEz8aVELn6zf2ugori1A6msVdWtWPSdid23jL5QhYbJkvycLqvryzaFKS94y1Qzzhs1kPcj5PxFP",
  "key25": "bGFmnaNzmdTPurncAj5hKLBa8cVX7YB1jprgZrfccsQqXLuYAgKFDvAnBVNiHXrF7ELdEeEjteNy92fSWEVjYVQ",
  "key26": "3SHdGD9ENbai4tahwBunNBSMpbgdNt4HwtpBNVu6CHRnYb4JeW9v7gTMuRvqR1TmNryZDBxJkSoDVnGw3YMQY6tf",
  "key27": "5tmrjGmGxWgGNrUZQukvpGBxYvSgLSMqWRrWQLkjMEt7ca5UaN98P1vewom6ARae9a9kLWRu8DK7wnLjFMAf5Y5V",
  "key28": "iG1L9HMY7a5UXDD9bUSWu4Hs5NceuPcppYxfYFWBmny8w13985av2eCxMGPSPuWjYXvWSzUTqF3LNJhNCcJQWTg",
  "key29": "4VZ4yjnnCPvNw99gJ7NSUWbr5bNWPi1H8aHcvvqo4UpAxYRhKZ99g3jLBcuNBcJPfdyVXGzJ83sSwC7sxsE4dkPM",
  "key30": "3LopqTTNSQ9y7zVL6tJtyNKaychAHLA1Mqz63Su1WfnezzZoniZGedwDuDCmzfsj5LaavGTQv6aUFFKz1Nge3LKT",
  "key31": "5u7zsDoy2ZJnjvxt8ivLLQ27Sd9tp8ij8cK7AoPmxhc4RYVVaTtToSxwVnXQpMeu5dyXeYuXwvu6UCNuAaphvJ9s",
  "key32": "4ZK5CRE1nCivSVJs6Nivi5fqhnErSaEMWTwj6gup8zSgmFAEiVDnWaT89bQTvSaMyt88riQb9oWxvEndCd87YntY",
  "key33": "4ma8C4vvvcgaLpe91WhNCaSXaEcV4RU9ynGm4rEyHqdXYv3Dox8Zumb8CZJUpYd1x9KNsYARseZBuXkufJYDVn6C"
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
