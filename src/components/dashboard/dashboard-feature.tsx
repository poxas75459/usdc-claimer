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
    "PMkXLpYPqqHiEqH4kkjnnZ2gmpkSrMagggF69TvGgU62b7DfV2qCrZeMQ71tky51GfKCMu3BFPdAyCkUz6mJzSa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38xb2qr1x5k5ErYcYtf31nhf2HzK2MWJG5oqHLrDXAf5H58Ec9dtjwFfywGV3RnGpNxF6XF49ifiThmVEHqS99s2",
  "key1": "3pTZvdcWJHN3Ja9HN4BGNgUARtAG2PjgRSreM1jrahq12VvxqW3vA8TTUwPz4FG5pqmthWmjK6d9yH2Fw4UpmefE",
  "key2": "PTgfzun4NKMtzhKuPqDoiLbULEcrLA3SuM5G3sxuLD2ZhTyv3275qdFK6Zm1jjAcScC4mPGvDBESMzCBqQypq6S",
  "key3": "3P1QtNaXwgMvJ5YiM89UFtGXb7m9GD8BfMdWN1crX65HgB6WtDwhEBSeVhUSMrabFsKEZ6p7aeFCKtpCSBMXNy7Q",
  "key4": "5NSCd7N3uzopTF2tTiVHUEzTYdFWJDEiiBFnaxwzgaEPQEMCoEnHzuJFNaWuZ8YVAgzcGDYd5vau7YzSh2J4786",
  "key5": "4CDvVFE9PXfg2fP431fY9VamxtCwRSjV1PmLrB8NQPPDXUM9f4RgBh6s3NBEBgRGPEA3nW74EbpNp1Ad77tUuntc",
  "key6": "64yDDzW2vAhxUTrUx3JTPapBBsvb9wZWHAzgZyaD8LxDEciXKJT1vSx9nHZAmSsQ2NQasbqEjtcU5SVBzMAkSB8v",
  "key7": "3zatRhMKs1ogwCXntYek9WdHn1NXXpFRnuYVuYXvNWZDbNd6N5RvrV2uLGydS2E5BaMhNBTQg6Qh6EH47xdWUpiT",
  "key8": "4KVuZEQNVAz5Pgwn9H1PkdBdjreQGGJdWhkQzXdoL2uQa3zDuJT3T5HZwDW9s4Fqz6A1yNFzmq3UBPYoMBJmnyDj",
  "key9": "3MHP3F4DbFhPukyKcE1apNXDGzP99EeXtB4YMdYism7Zi4voRc6p2N96XdG2TFceEjTqC3B4dCVNEA9KeaahnwF9",
  "key10": "59DfVHn96cdh9pnVYbSj4SQ64QSH2qiB4AfX6puZp5AY5kvE522pbCP2jNTxTwz97hKThH1TkjDnKRLcdZfYfdQu",
  "key11": "3FHZcp9EeQd59du5nVQPqdM2jPn6uQ1qSuKCtmSaj8L3XacRhRUMgiQcTWYHYnt4EJebi9C7Q3z2pfHPHhmiwqt2",
  "key12": "5pqg94b6y6i92KW2dcbRFYeyGj5ZDy3DTJgGfB4fU5L8k92fr6c9MhLyWp7s3z48QK112aAfRBw9zV3qXfgsXx3s",
  "key13": "bBfeCNHbF3mqn8XNg8evGppYYh4LhxLmFAEU1uepumNnXNswYwhqpLpFiwXt6gMmYvrcjTqa3EfnTuL76wdcPSM",
  "key14": "2z7KEvRFswnZLNVJ5xMcdCpUV4zqVwtXBcscXvmVd1MGbySLLMPvb6zwF7Qw2ZrZQBZ5oA1Sq6KFxqumfS6N8izF",
  "key15": "3p57NhR3fwwZQWQimwBA4K9SF2ArPnUUSGKRmLNp8hirAavcb4X4BJgkj8QurnYb6N66T3eK4TjxjTsTb5TnGZhn",
  "key16": "5GZSpovtfNunyPo7YmtWhEPwKjj7vjCKxt4SBTgopbbrSfkvnrasF3unDt4bCWucVNk1A22MoeiNfLxCg81MmEDW",
  "key17": "2tmSS7GeZCgVNjfgFRuPkGX2SVRvt72jxW3udAiVVT7AcYY5fAn8Nx6KuutDzWbw5yKfw5ktzcz699fYk18aDFLP",
  "key18": "3kw62EMMJihqNg1RNj81JGVFPAwPHWkCY5uDd9HxCseKUdu6NtSE5bn8PcpsXZ3cX8zGqW8M7vLSJ6Wvm7kY4TK2",
  "key19": "5Jyr6mdEspZ2Ja4j2vXH6LVnFZnHWMckzmSTab3HfqukybtdjYhBu1hYw1qXE3yewjXgeHwycoxpuzdsfBwJw9RW",
  "key20": "4RownyK7YJYcFLJV3d3vHkxSZzPw2oXk2FmGp8LVHCB5PjXjchvZNXVShiuzqhgNZZ9ntn2tye6J3Fjo3et2roZC",
  "key21": "4CqHW3HaD9dcpg9USnsyg2Jqbqze5cpyhwbPFPzcb7X7Qs5kxduiuvC3jUyBd6C9ghKYYLaYRRjveDyktH82or7E",
  "key22": "3ntjPDiuUAGACs3x1cdhoJDFUuZrjsFqUd7NAv2gboSLxdSV5GtoEvLEbJbsnQofkhazHDyqBHQkLDBk4GkYkwV6",
  "key23": "56NH9xuifsbqorXad1wpMoQh6sffXv8UHbZRjjdYQThfhbE3HmkTtJEY9jgEqNsdQKXbARirMUk9TqB3xNqvi6BW",
  "key24": "2ahfTDxM1F5ujSZmyGk8VNkD91V6PMBWCGobwmbKcRyA7N77rbq5emXLFTuJ6Mj5VAyvjYg2rdaS5Z9r2gu1Phkn",
  "key25": "2fyVzzopgxLNWiJTvbhtNTK4iW2wU5jfhHP98jnp9aq589Qqyrg7xztvt4CnotDTRdRCaZ2yvNtqRt1cSNBBWaDP",
  "key26": "65GKu9jYHfs7QtbjiogQn8XDCeZmU9gN3ABWn3FymFwAmifBsPApwLbyDgUnMyBnJ8S7D77ae9RtSUwN499DURBu",
  "key27": "5f5LEiP7gvzsxTUt5s76nskqmHFkAtwAcYhnCVJMLYqAxpiUJjWogZCEkt84LK7tSpRC7V3AL3kqLsdKdiBd9CKY"
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
