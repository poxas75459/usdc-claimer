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
    "3X79DASGZAZBRDub6emcmF8FqHAxd4h4Q1V9WeCH8ZygAQANRUvpTz1zApYdrMGkmHksw3nM8esnJWiwMZTd51uR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RGfconyaemwtFTGBuA2K2ijovZNeffj8iVFyuzJVKUVTi1ZjNncWwVcsEKTEfqzWQopP6au83eQuqwfVFRgs5Rj",
  "key1": "5uztVrADFEEfCWemzKamvugQB9Eo5yXsBUmaRi7rKudYtwk76ZZc5hRSsC45rJ7FiVTBC7hsmVRtxKwGbRDhGpUC",
  "key2": "5hbWykfeonv5dmy9kvHZFY8wxJj5vF89haWAU14itd3fP6PFKA83aTW144pfV2EUekJ3Sf8preNeSjf7Nq9RCN4y",
  "key3": "BFNDGAW3pyGpH8fZJfyuDefB9XNbSZshF1B1fty6ktCE661zmr3Z6x1kwdpna7ug8CXUbEwnrRBgmgCu9t2C985",
  "key4": "TCV6XJCz68Er3UYwRxNyRpEcg7MiqcTw9QHmh3dAV6sEjgd3GN4LD6xUYPJL5d4qvQFJTrxAydAX4dm5kDdbvMV",
  "key5": "5fHUaA9U9dPMVsu76yB25PH5gTUURbRFeicQ9eqbpcygkDpoWVTtHZkJQDqqRNTJVb7tK4mNzfAnjF3J6TALQ97i",
  "key6": "zqY4fvBh4tEN2kCZbjCngEe3Q4FKA3Y1Af7aEiJJ5rVe3sGpvyfynifTwHb2XNzyvwJq61N7XDswSm2QDVJv9ic",
  "key7": "2HThcNVYduU7yA9tWMBiZPV9rRWUDmAKwTM7tTzPC57SjxiyWm3ZpDz8tqYDxFcHgMtrbrZ6WsAab1goHdGHhw22",
  "key8": "3QF1pS4w59TdpkRpEAGo8rkgWqxFXrBCRz6pq2HjGBpGzLBotdfq533NzMNnSBBHZVxducycHTRrJTb6no7ygkS6",
  "key9": "49MdAL1XEDnyD49ijxXUZhG7XL7JieRtmN1FXkcS1bnEfyitaSmKyBibeXCuT1rTegahfKMFjUc9PDe31pjhEorX",
  "key10": "5mCzjb9aoHp6SASmxQsG3TSfLRdaLcALU6C8dE5ZK7U2gzPCAbF53FbTnT5JXQ9oDkhacVykLN5FzWwjMdrhvxA4",
  "key11": "37zHKc612NM9pm9LfRpz6ZcLVRw9kDVJj4g6yn3AqRp8vyqCjmbtRbiZEHejbqTjt853ref2NpQuLratYdDinDZL",
  "key12": "MtQJ2FFMJwizsz32E3b59MEVQu75nyyWkbFR1rHyq14oWKzZnipk7uo2tuwf3eQEahdioLcpUF6LoFgZ6MiHddt",
  "key13": "52qMq5hAKJ3CzYNPW5jdbzTjZPS3WZATSZK2uYZXdeZ6fwhZf9HnDpQFTQHdZhVobCbHwjiycoPQWkUf6aSsq3ws",
  "key14": "5vTtebMsE12u72AdSc7vYtF3azBYkPbHDVx22H12pZRVtqJVN1StQEkeW9NvKcdyvKSNifysCrrqXgDhyDF1C2Gt",
  "key15": "42k5Cq6mEhhzRi1EGGZPUnfuYFKeFq9yytJYmGxy8XgMJ81H1sor14FpjFZiBhCMm7DZhMD7WYMDRBQPELYzdHp2",
  "key16": "5KpJj5ViKRuNKV4hXdLkxT9cFFdtrZeXPZBiKme72XLNNVpiVsgEk5gPyoSiDTNF5gy6cfvqbxv9AXNDuhCMWqNx",
  "key17": "5AP7kMUq1seZjzHPZPZkSb5uE6iNB9ejAT8WEKKsmM4QVy79o4WPvidEmK5dgb4mVbyWKdkiN7yRxxUy87crqi5a",
  "key18": "24ztGeN5yKnRANnY6iaxhRWxXT1W53Vw23eaQTbMxhruDefs2TEnAoEW9DVpxRXrxhcZmHGGAJ5jsVTCgBhtvywN",
  "key19": "5mzM9qBxEm5ZXLN8NdngVkYVuTkqewEEaAZH3reh7hVFwBL5MZLEh2MZZj2LuLxSxFrxw5AwnWEZFMfyCjkhCZLr",
  "key20": "4UMJZenpjw82cx356irTbJzDtueFimEWjSsfXPaNztWNmGRxGuKAesKBZCX6xBFe8Lguj9Czug6NKLaDyPaXnGhm",
  "key21": "28XDNeQjf756eP3Bzw2BKnwmKkZJfMbnUd8Ux4ELg8GCqLz2jMbuYjd1KWK4VujtxSeNXusgGVc4K44bY54m71jh",
  "key22": "2jWqAbNBeoRzG7hd4ewaSeXHx7H2X8irBqoWznVbAX4wfbJiLwq5GCwQR2Fc5yfpRjGWMXagBuuv69bkFVBnVbJH",
  "key23": "3HNMJF76FNEiNPmoeaDmQR5qV9BvmB7f7Sw4XrtA49XGUtAQw5bSqzY5RnypnyJRSFVUhNUqMFh4UxdCGFiUacrK",
  "key24": "gu2aJonK9KRVZZJ1smTNeNFEAFGQ9SeEdpsV1qaHCsB1wQw135uS716X3kz92A9mAMhS4DFoMw76hFVjAGUTi8k",
  "key25": "58Crrnkhqu7YS5hWfZcaAX3L9uQarBD47mZ5hS5ds6anV1gXqMDDEfrTzwxeebr9DRo6kZydysZhVUPXQaHHFQu1",
  "key26": "5Zk43vWkmGRidGY6gW2fZd98hPnnMnjj6oHoCSPLkXaKcSbCXWyq1GUkWC2jREfWmXxZAbsP7S5nQuFPJGwfsCLh",
  "key27": "3qoSy6Jp7MCDek9cQjtAgxe8rrFieV9br13zg2MxxHCzKnXZT79cucadB4J4xAoYj9PgMj9rec7WzEjurC1refVn",
  "key28": "2YuRY97DzedMCH7xb4dtEp41C72snA1UffbVEaJi3YCN323d834CUc9gwbGaQGHqKV9uko4vuYWJoQ9zVGAkKmvL",
  "key29": "gZrbs7ufV5eB7P5nLDuBwH3kC2ioSR5eLjAL1bPDmXxEJzJanmQLo7QVLxUmysi9iX3X2owxkGaUQ3mCF9hxzYe",
  "key30": "37RDRvtLmjci2ujfkY4h3oKifDGn29NGyv4V2mtb7cLtBJkCjTKvka7T4CHq5u33EBQvZJy1CDHJZ4vY4PFf4XkR",
  "key31": "3doFHQqxuMSvGdSHwMqMsJ9HXQVeKZ8Y4Ad9yU8uv9kBN95m15jj3WH5CprBoBqQVfY63PUoYPjA2y73peEvhNGF",
  "key32": "3gAbKwhCRqrQxfawgD5SuKoCJNqUiRanAXD5u2YkJ91YPp6VHYgaUwc5GpC8cub6VHTsdpzdEiKn6hNpFA5BPDwD",
  "key33": "5ybZAiA9CsaQPbviD4zQqr3sJv9gbr6PXfHMVzEeAn8kjj8doHSYhA81BQDmLG1GVvzEJ3wmL4m7Dpzjvr8aA5Ti",
  "key34": "44K91JJqxsdwckUjREUm2jhN8B2rGbgjV8kqRqEBoBVSmcaXzKwNbCnvVHahs2uqE5yhEpozykwrfJ1rwYQZf3by",
  "key35": "4PJ8b8q9wAJeKc7KH4ArYZyrawSXKWedNfA822ANgaWVzGE7Lf3WEMozRXTssfFAQbGMVvFeeA8iHJJq8o2FM5sD",
  "key36": "337kKRzw4UisqWBKdExWrpKktpMUqK9HwHCn58LkwsvhpVYfhP6iDV8B1ZNLPGCenutgjzLnL555jymHqXxJ57Rm",
  "key37": "3m1tCLr6pegiWZYHtbs2oN2mEtnMPafbwQepRZ2csFXwLRuKZGiCDCL6jvMLifa9FmWP2H9CL3kufB5ns7F1oNLd",
  "key38": "4bKK61ckBB1n4FoxWb9adPSNejT1NtMev1yjzJF5xmegBCKaM1wHQSQoYYmNjzKQFPcetmRC1iQAJkAjKAYne8gR",
  "key39": "4CvpYgnYjStLxfVvURVZE5djnf8KnWwrTti1DgXyAL7ZCP951b2BFY11d6BXXB6xCGib81o2S1xjQA7UP62eTzK8",
  "key40": "342ZGuVsM5frVBvkraam19UHREhQBKnpx1ZtmwRJymWPMBjZZFWxDR4DGLJDeH9SNnjHwreHxtcr2d4JwEEyQ2y9"
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
