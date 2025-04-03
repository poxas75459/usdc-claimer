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
    "4hrLjqgJBJug3SxVTUkQf5iPWzfi6xKycA6B7VgGYzFNRUD55ZULBrE1xnADVvLsK2BFAtyYzzG8AbpyEiCqzpre"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rmTt2xHt2Uxkgk8cih1ZJAw9VMCekqi33RADSqMuKopRQvmCYXWemmX8VRBuUpuwjPwoeE75hreoaQ6Y7ydjqqe",
  "key1": "3w1nGXzFfMsZ1uLXKhR48LAVWPYHSMmgSCAtj5BANiH5CDhcgomFpGNkjuBf8MK8CJCVdJw9ob58CduCyjpUj6qB",
  "key2": "3XbfbWMHS3bth2UXLfiHouwfRhPW9mx8GZv51As2Hra2TZMGYs2s3BSSReizeAgDmJfEABzYtamfwJPccNLqAheG",
  "key3": "2HdMpzzMmyyuxEkdrhyq1B9nScFeNaCnj423kFiAaZ5b1KxLBNzj2jVirDQMBJZdnzzyjz5WcZ3EK1jUaN8fpE3B",
  "key4": "PaadGN5oU3ox2X4yKe6v6vPxk6fxszq7K8fMCevLNjcVWjvnEqYK3DyTJkej6JRQSGdBFwz23VPX2F6RTNLZ1pq",
  "key5": "YFpHZZY2BPWcCgQ76GkdnEyismogmqpHSPuBkqemkstAK9rtQzmpUWsUvkajyjUkXwM2vdx1rUJH8Je7HohqmWz",
  "key6": "2TYTEf52p4pijq7Ei9HKynEzgEDnnzXxxoPjyrimm4DZoxDgFAjCj3oZag6W59CeJLZA7JZDCVNEDYkiU1L5kux9",
  "key7": "hNL6Qf62khejMj8Lq1B6VfgCxXi8Fk6A3DXYupD2zZhb6QfyC5VBsFLwJ5BpJJzL7e7EHXKBQe3ratLwmMbrXG9",
  "key8": "2UMrZ2HyP28oZYrPyMfxq54NgBeWbhPwheZ9DiqnhSvJvPkCRW1kfdhtqPCSNHGfE7MwW31Rt6iYwePaYXEJwyoZ",
  "key9": "3mh8zLwoMf23mz6MqNSWvmD4fyjpVioX7Q5f6yo5iJVkPcKjhzTQe85ZZ8xpDsafmHzNi5HTVv74hZz2ovvjef1U",
  "key10": "61psp1mwiNk2BcN4p897yHfM8knjwkXoweb2ctk6g3Sj27ATwMPnT9r3vr5EE1FqmTtSjUXpM5vBeRQSzTof3sGG",
  "key11": "5mQheTe67f62Lj1w6U9tVutbrCr2db4QWFhWtN9shBmz4gtfeWnxAJfdYAheRwDGqUE9ykbmPjNbKSasx19P6FpC",
  "key12": "Rs9Jaw7hbyEorSDdorESNHgMarxoRm9Z9jnmuHVuzdJt1wxNcrTUJVBXjo1P3MknbaHXo2xLsphvRqAgH7k91do",
  "key13": "Pubmv7g1EnkhJECNAWbC3u8xDf63LXrZWHPDZitfubtMojxfSrMYJFVE1YQjShumpjmtxLdKH5Xifezmr57L3Dd",
  "key14": "25RKPszKfrE5G77tEZnPB8ygmmt9PyeJsWdXvNRfULhCSAzvfeMgTQUaryhdSmpqPNZ31PxU73WtPxrEM6AeMuWr",
  "key15": "4aqSfgZsGZCr7KxzfnBvmuaQzy249gznxaFqd7mrXBwPQfGTyHHqVBfwd1th6YoP4upicXscya1VLHsxNVBe8t9M",
  "key16": "5qjADv5N9ByPEzyTE7LXUL6VFhnJBut1EEPv4BXivFyBzxTGM8JejZjWC9g64SebDhDfUNJJJNdfkwidnQwMHY8L",
  "key17": "J6UFkuZ1QPNCrMq1Cs5Dg5vHzR2NLAXXJDCxXkU8icLqeiRj4oNr4UrStZbjYa2rLLKw8dqztX9JGUYLNzGQy8V",
  "key18": "5xsaxmtp8ZK88FPU9ou48pvZgVzS4m3zB5w841k4mBqMTifnchPxNnbUK5qze7MLeSy5GrMdiHzdps6wpXReNrHw",
  "key19": "36una2GY5t9gk1WWbYY5YGF47HJQtkvUuivzjATFQY69t4Hxw8zeFtkrpKrxFwZi3qPfJ1YDUF1LqwARtwARmnNM",
  "key20": "5X1xPkYXCirwoHY9RGdwRZScruqo8Lno7dT2H6ThpV1Xa5GaYYZ6gNMk976zhkeW9uBAVA2tVQHJFeki5SxECcrm",
  "key21": "27tKFURRpzurw9vwjsmk5hUmk3t3pSFP9C285fRuKNW7br7rLcv3SXxWLHGZbSBoieUX7LfF7GSmBHpDBoEic94F",
  "key22": "4nhX7xyN33KahkrAhbeaCKupfkqs8rEP7jFbXuAogAP73Lg6BUxttM4JoRMfSZMXrcUSABeXzQQPQEgGUQD5oSSQ",
  "key23": "3AXJBzkRuZh23KBFHY1NBG1QUAaaNXqikBjKKBvCyqsNKDg9PmbFTkzd6gPsYihohvVyUCTAZUoUksNLMaCg9PLn",
  "key24": "29PL1Pd7oAeKWrYLwPUFB6v6RpLiUR6eYX9iCozyFDBX6t3qba3TmVxzvqLH4w5thRLaVybVjZP6kiTrtQ9V3D2a",
  "key25": "41CDepENcf16evE7wn69kJLXtzXshm2tB7EVoxHBEd3AxEAUN6LRdV3NaGWefFT6qjuQLEC1YKQm5QkSUTtWZZPm",
  "key26": "2Rf62HAG7P3aGMuvxchTshWngwfNjqaVchAFVdbZ8iQ6sFNG6F7kLymMtZfvnVqUtJRutmApZwDuF5spkGfQSfWb",
  "key27": "aiXAGtptACzj7GXKVCxhkQUMLST5C7xHD2yWD3SqbhePkiY7y918X7SryxhpMrZSoK6gwh4MYQj5qdFtLRGwwnc",
  "key28": "5B65WnLqMvsyTkBypFFz61b4jtPUb8WdbvNbbTjUpvuz1bQ6qSvfjmY6cXHdQcR4Bfsi2abZLoaDeFN4o81eaVmr",
  "key29": "4toHHxr4ET8N2MTBiz2BXqF7WGprk4CSN2YWHnd1cT4Q7XPYT7RGbpVE528aSqv1uXuNhAopVA2ooEGBh26pGjp",
  "key30": "3vULDCep8gCVtK82efsXuNkzqguTgXQ1PjrTsyxdgvZCUXvURtj9zybLkSEtG9LvM6bbZn2Y7TCLYBGwC3Y39NQt",
  "key31": "cVLSnN7AA6N59bAsChkWxgKQC2qnpT54oJPkwPWV89rTCBGbaZfeyWK3YVjPcanitL9LyVYmQfPU3LqxdAC6eCA",
  "key32": "F5QeKvQqqupoD6hgGzreSG6YJ6nQqz1oNfaDYFgfPgYLwkbaBrw8Lag13hbq2vjrYfJJSVtSWfDq7RTY2N3ZncS",
  "key33": "5S1R8M8ZVG3V2t8Mg8ZNA7Q43FwxWJjakgYbTbSjWuV7bBnYkKxqFsgpxVvAcBydez7vQGCFogvSXM2tkEJ8eti5",
  "key34": "2KowMyR36yWufMXyFXvYhsNd4NnSob5kLZfawdoeoDjH9912Z94Vm2yptdTswX7G6154DRsuaWnHYG3hjTAJCLmv",
  "key35": "3VSQ2D3VqWjPGBDXs5xuPeAcWVSyFNxLf9Fi9GZPHiYisZd9jjkNqyKByeUCn6Vo9wZi9KdjwfzqqazsDwv2cqcY"
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
