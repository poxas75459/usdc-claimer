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
    "31Z3mV1WYeLU3Jo4cfpmfiKaJfuCnynjmK4vKeREi6usFhkrKnqNhJRw1F2WXAwYU5EDU9RWrMjA4Gew1qXbo49i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cuoroZmDxku3SuRPoF6vxeU3Jek6mRHDt5EPGCbQubA5ygjtGDaSGQW6MEEtEi22LBDY5xqkx9RQAcKb3xAyZ99",
  "key1": "52nk6qqVCKZFwKxCTVzdU7rK21x3dkXf1wwFeBjDPF52vgMbyyvmRRe76H2xAeNgcjc4Rsk4dUehhRodwLPTNTUp",
  "key2": "GpyG5faSgNCb9wbVZogr8t4YTuQ7tosmzj169iQGbB4PeKrojw3ACBk88TM17UN3hY6cCVgEFkDrXL67vA7fz25",
  "key3": "2xLpPX6WbUnb57h9dcmMyksw9whVJ2e3ACe6mrBfXg48XczDLqmqiXUydHp4EYZnRYZRBQZx2uiQug8wYW8aXoj5",
  "key4": "32vvLaFn7Btmuynin1yHtMaivxCcHESmvTfP35cHJTMMZjEsTMUoyvuQAGdavq45qdaSZ4ky1JHYxoj7PkDvNEYF",
  "key5": "2ejrSXEgozc5TvkFp96XF64BrDWPQoF1v2WhRwTwaUzJtynFTdkm8V8ijx46Pj8ESfzfYWGCUxd2csDxUvYTRGQS",
  "key6": "EJwPeCXWJFndjpGcycEpsvrn7mpQYUsBTh66y6ko6FE4wR5qVTSzAmL76xEWf4NWGL5VRNojU7kQSy5ve4WG2mb",
  "key7": "BzMKT9Y8d86ZpJF9J5nexV2ouHjnbPirSEFcK2u2dqmB2n3KyzjJvqN3HZpixJUraTKzmUuFu3u69Wp7eLk3K3T",
  "key8": "5gAdX36RKoLzWeSvZP4nSNoaZJxAxBao7ZBzQWkv6Q5YraguGtMJYwqgTb4hC5VREFaUy9xR8XbMtdreJKqsRNmD",
  "key9": "2MJmuwP6esP2UrMBNNvCmHNcSzEtvHN4j3SCmxBeEi81tw5uLhddMSdSLw9mtFTYfsrieG67pQJheAQ1H6LRqRJf",
  "key10": "2QH37SkArHiSE5Wj58Xe9exc82C44yzohJhukiznY7NLZodxRffB6ZydvQVs9YJrXuGj6s6PaJzAuW2QwYDzwTPy",
  "key11": "2pH5bMEWLJGsgroRq32sggHcYnYLsmzYTgszguFoxAJA9ZYdXdD66f64RkfXX1acqTUyKDFGemJv9uzmWATHJDe",
  "key12": "3krLi94aaPaMsjoML9ovRpGUFXypaswJE4iV1sYeNN2aJxEcNnHpKVruVUaCXbajG9tfahkaGHgNSFUJ5tVnYVL5",
  "key13": "8QHtgfExyNdht1m2XVSVTY8HrLedcAPTY1PnAanCJez6VETvceMdYuTnfTQjhnJ9252zg5Mh32kMFiq7ZaDRDGT",
  "key14": "3MSCbDsN2GRQ9KneV1BRKs3C2Q4VvL3LdSmM545SHGx4iPhPT1uuarx9Go3qDnqXL8FXcW9UpjwA5kyjncq8crNE",
  "key15": "bi2c9Bf4cEEjyyvF6ZPN3QT3tiFjum6DEWhKxyTmaFmsDWsXWiKws48xK4YJ6TvTbFGbVgsiPNSyQBAzUARSqzU",
  "key16": "55xC4doheZFiduyi9RxXLMD8aYsGKKqWQTeoVDKtc16nuWtFUx8bK6bPY66czFWaL6e6CNVmMPmPmdJk99CAQwgL",
  "key17": "2sy3bkUpPbRyuYDr8yYc667WVtVozSfovnutwUtHoyhLWj39AsPHbNVPeqKMYZLrsCzrZSCFgRmib75bfwDrPbTB",
  "key18": "3jDBFYnHzxYyJDmxbZdRaadqUYDLKzVZ8BpEoqhaFseGzKFW5RNurnjnukZrHZM89TEZ1EcatA263CxFKoPWjud9",
  "key19": "5K5WDRDzcmfL8nBaWZYCCiV18pzAWGt2rNwLXQ78Wnv1KLD581yMU6KZbYVYWJ3F1qLh3dgLfrtAnoqqQGn5eeLK",
  "key20": "4dQynYPmyW4BiFurw6BjFdNe95Ln3BLoVY5opRansjZmUzEKchCnqGuZFgmoA4JakPbA65k1rDSSmv38hA5Kkevu",
  "key21": "2mXMBvoqxXmWaeBetM7AUSfxNvr7BTAc9z43xbEp3pCnkfoatWEPK5FZEYPVBbztXJ1zJYDK3qF4qyLi4z2NUwAs",
  "key22": "4qY8YLo2HLokc6gxzP5X6PRXAEQhqK2xauhHhZNLhTixFBmUJfLqhvUVW9Wx75nmfny8rNGxAVrMsXjWYyYPs7iY",
  "key23": "PqrEtKM6w9V92Jd8ZkU8vKn34Buq5rdTWSCS8s6DBnfFvKAaG9r7ZGwzMQ4mEY5deiQxr5i23wPgEgcusMYFDDv",
  "key24": "2TA35D7AVMqb9QWvM2eJ5qQns8Msb9mv4cVMnqwqZMHa4tNXo4vLDCXBSyku9fy3QeAHncCDpEBgvRbZzA3wXHpy",
  "key25": "2XuhW2K8Pf4QjZRRHNLzPwHhpecZCMNEJ5CjvrMoeSy1JskFU6rjbw23JjEbAXTWeNWh8aHYeeZDSDwzQhqRyJyL"
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
