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
    "5xwvqG3ZrZM8hVc15zEXAALTQXxN8d6opWNcTLC7NPMpwLq4dZX93uY6j5m1EBmYQE6uCvNmd4MSZjFH5zC6ym36"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KJJ99Ya8kc9b3v6Bo99b5sxtXciKFRsZTuyh5U6UhnbQntZS8HghY2fcovtXhkXH2gJFrq7cmdXi9e6hSFpzvTx",
  "key1": "3Yj7Aw1ibD8MQLbrgFhoFzcz3Ag5MwQsTVdWror3QEE59LsukMHHuAuM8D2nMjUF2gj83z6G4yjyfhTuq1EYjtLc",
  "key2": "kVTWCV22cmyh1wkam9pkE7PBsh7WWponk4UKSz3xLp92mUNHRGvWiHpwZizW6vzoZT6Yz8hKFsSmvFrsa8qaqdN",
  "key3": "27KZeRvZan6qacqNiZaeGHzKLqaJ8FygcEzCrtSkPFBbwvQRe7uT6Qc1U6uQDFL1yxxuZFGQ24p74Gz7mN54F66n",
  "key4": "r4xC8hP6qUda6jJmBpasV5H5HAKz8BEH6cAvyqfxmadNP2s2nJYL6f9Tfpojx7HHkE9W11JhWGaggDTwX6cGKP1",
  "key5": "2ndnV79dbZeuw95USuFcMkUJiRBXSX5LJYKQjnQcR1QhAcunAMo5x2ow7rfBJHCRJmxmF7c92emSMVywWefXs54J",
  "key6": "4jNA2zRFWWZRF7jB1bb24NeAWF7BcjufyEF687nKcVhvZBL5XJCFV8yGXp5fo8wdPNF8SjHnt2UGbYHxs5B9eCyS",
  "key7": "3xNVYgGhADN5R4HHZjfPLFHKMYprp9DffQ67PGva1F5ki98F8BofoF5enxxqV9jArrMfq7854dw8UsT9BV4RtKHD",
  "key8": "4SFNmRd8LadVAxyC6SFV6X8VZ5m3JtTN7viM1CoPhUNakT6SZi4pvWnWWfMs4LddftxpLQmE8DtHSb1uaxFnyY42",
  "key9": "3xGprPqbKdt651GLAupZmwHF5q8Ap2VwcstpWbYDPifnSKQEUSEcVVQ6pAXqtyzgxXWQJv9MVxrPmTGMnnxXwrMS",
  "key10": "26oCw14uU7gXNpuWFjXR9cZPnkmBMeUQvmrVqZX8ok3LbnWV2brTy7nFCTcoXc6qbxYCNWZcw8zx19aeLvqPi5hV",
  "key11": "3oJzAndPzt6fgeBvtQSEvQyvNvkpGwzZsXA37YfbNrn7pWLcrWg2njXEuVmnbx2CWB9hCb6sAQmuYVa5mnvzmxvL",
  "key12": "49ZQBQLBmTKRG6KLRcdCo2Y23RU82V2iB14F4s95VnCA4QW6euU5cNtfJCWU6wa22KtK88ds2jAmGPioJjq4jKoY",
  "key13": "2iHecHbBfdxRv7SZ1oHmRBTv9KjoN39Djs6C8VMRaHVAV3KD89Y8vHBwtsjcoyEhZf53rEsz5b9EhNvqMj6AE9qu",
  "key14": "5GCwX27WzvbL31714KeeM4HAtHf1shHYitE7Wh3eurh9zX3SttZW44KRqVXSMaoV6d5UZ27LqACoeNF7LaSLVa26",
  "key15": "2ee3U7PjWQ6JrWSf6maJX3X7rdKxNAktrNzyFTRVfvR7En26131kxkQo452JDQU2eGZJHLQRw9QmdwoXVySwYkqf",
  "key16": "4E3h9pTNNydJXbLtD1kFNSw7A7esma3VJJnpgVkJpVnvEXVaNQbfQaUBdx9Ewz6cmLHqAHfLTkowp8FsofS3LsVL",
  "key17": "2cq3RpqRfFe84qxtRvTXTRJdLsmDc2iEJTMaH8Xv2PLNJcFg9zoEKUJRoSNkZnZiJizJREcW1a1B9m6JG29D6mt7",
  "key18": "32EhPWeGkzMupRLJJAtuMapwdHbsL1b7Dz5hsa2tBzrSzp4gEKsVj4pMS6ZufJHnKc5CXTVnNWfvf1e3V66KLg1s",
  "key19": "2X6chHGFBZwCdNrvk8oBZREkmMhQ7Zdbo6Ae1rzvGb8K89iTRUNhR6rNB2VVYpVE59gnxjmW9XXcR7cHG5uxQu9L",
  "key20": "2JRMTcVN5Rqrcib34BmUsPBcNHNmBQ7SjiU3qvqz5xn1a5RCm9CJ5VqJ8hMCXULHjL114f5YTKUFJwTNuNeUosBC",
  "key21": "2XB15wKLtNbfKjk8XjLPpcTDF7MJw98qBtMsNbFPW4aDszqhLegVkRtsUy5mW4on1KerstLmGByoiGkzcdBdGCzT",
  "key22": "3JVrVZN7hq8M1sgzQiChp27AeNHFC8Ysoz7M1yTq9tWmQT4s7vrr9GKLouvyW8enRfK7kMugmku4wH8NBL9PYG6P",
  "key23": "xHF5XpjGUcM2t1o4NGHLYeU87cG8iiwW9DRy354GRJA2C1jWv5mNkrRfZrCQmPDA1EKPo8VmKHsqMVABosHBg9Q",
  "key24": "9wURMiDaygQcShe1Ld41JbRJxCa9UcDDQMgykk5qrRWYCqpiGaSGJ1h6PP5XEj59geRG3LwwiAiGghWRaYc8NH2",
  "key25": "Pw2ufEVXRwBKTDiRYsa6CnCvcc5whZyCZ1wCsTDM9iGvjU6HWGiyy7hAaEqvr19vE35ztpkNiSHymFobYBqBGXd"
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
