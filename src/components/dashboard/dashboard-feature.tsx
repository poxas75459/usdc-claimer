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
    "2swwetaCAg8vVKDZUgUH3t16QuEwvV5Vn3hyAgKZqR86t9xxQRjSVtVEDPNnLarHBPehrDzWG2F5nXGDcrZjcCV4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44j9KH4MjHmpqE4wxtwnBzCMo83sw9iWLUf46AxQNSG8Pfp1pe2TZ21pdu7EpduGSU29vqBva6279tErEf35eH3J",
  "key1": "61bMP48fBgxxY3YLoeBfiP7EvRNKVQZDh7Nyars85GBap1wwLh63iiLWtweYHoWqFxe7BABG1PMWaL7SStkW1gcA",
  "key2": "5oqaeQym6zxdjEqpJSe7fBg6b85jZ6byXYZxLDixyVitt6PiKPe36X22YZfYt38ETwYmUwMzQKf87423y5LNBbXJ",
  "key3": "3YQycnfPymddwJ7KqsRUxHDV5s9qj83w9Q4N21nE5NVvpYGmHapc1ETDaXEbq4SQ11MDtyVGbpaLef8DjnZCqA5Z",
  "key4": "4eXkQutykws8gFuurqeamgkmY9LcZc5dWQ8R9NYpaiyba3xh4T47ET5GbuxzsH4D1iqhXPzqh2SKxQXqDMnqSaQ4",
  "key5": "RgW4YVdzsAaX5E2nJFMkJpjekFZ6J4MGnW3Y9p5Hoi2SCYefrHQMMu8TGz3QNTp8v2zzqhJcLUUG6DSUENEYo9d",
  "key6": "3jrbVsLRiaNDDckByzXrJf3R6VDDky9WBjPGAWEr3V3W9HkPzmJr98fN4wPxR8RaAoAfbSJ4Jma56vxJRabuER6r",
  "key7": "3wUnw9sXT4AyvM9R6YnDHbm9cCgbqyYKsahChB84s6rY67PgX75Kvfj2KZetzgQ2g6rE16oGefiAaQ3sGXeqkQtY",
  "key8": "4dAFFThXhSh3jk94r2ABwqBPHwr2yEbrzbykX8Bj638twcHrtUTb83HdpDgDvb5n9iN7E8TgAkRAk46M6Y2JxbRW",
  "key9": "522y3tr6QQJ6d33m4uN4aUMGaY5e8mMeb9Tu4A4ZJXqFCTLxKZpUzV68rSjTL5BCJ93VsSvJrnmt7eAoGSBPHp1n",
  "key10": "TSnQrfeEnAPTWDzLdqxAcuMf6tQtLiYPNCcaGk9ntyzfEnoNAuC8KvAaKaXuMazKMHTY6qHSUnq2zWYocP2SyMd",
  "key11": "drSiQLMfvXueEBeitr7T8pLH8UeHx9sa3tQZBBzdSKdCHbXVbeCWD2YCuyfCikWgXePFgJ1QsSWQJFMtiPRSZzw",
  "key12": "24mqJ6CAtf396VozY2ewwNynMoi9h7B3jZX21PZFSxByNYBft7kpkxcN3uYaBb8CHkwQAntTvn7RQvRR6g81AxFX",
  "key13": "48ssWDR7zuDKEC4Miquc9tGW4rjGriHqKucdQHd6uXKiwYtrDsbdXEjXobbzDYv9RQ3G6DNgVWAH3RCg4vbfYaDG",
  "key14": "3hwC9SYmKkws12E77FEusc86QuDVg9QpW1Z2ZLGWaWeKYG6rXsXKgvjEsFkpDjWyLKze7JVTxW6cSTWBC6bb2HyQ",
  "key15": "3HSuExvGFtNmhH8BuZKEBELGYnodDVDxPc2yL3LDt9fDvaELKmVYocARZkLD6yJwwXL5bFBNHtFckKP31evag9H5",
  "key16": "35wF4cbF6RrKSf1Vi5Gy81wyJZ5YqsVYoMZKcZin9H1X3MUAAVX884dXUDgwGXNvhQa82znhwHanGd92aydxS6hu",
  "key17": "4t7sjHkbBasBqpMVPHfssWHr6HXbC2STU8EEwwjVZCitpw8gvEZNVbwfBYcwLPY6sj95TbZfC5meuFCjghrEur4x",
  "key18": "2gguXnUK3DxVFcooBdGDvcQwoR5ca5pFqPgyHNd92uN5BvJ184tsj21ry6q8YpiqyauAjttKzCzbcsekZjxLE55f",
  "key19": "2TbtHLcdqLZZyhpVhGXXdocSWwJgzwDCCrHmVstNMPcquKW6N6pwVNtD1V4UvLYt1FYL2xDtqQkFqFq8kuk1EzPZ",
  "key20": "n45dHB5LMFcM75R8cKfN4xMGeb1ugZyQK1sPcPrhhVuD8e3CReCczb19oDnDcFtpVpQVRrGHfS64tHHavstx6H2",
  "key21": "2agCCbhztDiXHrohaPATtSCWuwA7NbuwbgeRtnZepXcZwJA8LCHYi9uGj4GFh47by9EjbZDvZ7S3rDVtMsJd2pu1",
  "key22": "3tEqnEGuWqotovcd9U2wpuKgCDgVpzqUykmvLdyJX6CFhb6wDf3mbagEj3AkYYEginoqVGEUvTdiBGdyvJgXZcNQ",
  "key23": "2W6JEEYY5nuuZ8uev9MddbruBudXJkg9pmeobUwm6N3kHHm4Mdx4VsNLLEV7Cz7XVzYDW3mf2BsLcHcu7ooEq6A8",
  "key24": "3pHieCZMHRVUG93cgG6nnYhBcGVa3v5tEQhyCxiaZqfsV24EPMLL15mjHcN5HVzviJLy4YQLS3Ff5a5QgWREKJH7",
  "key25": "2m5TWJ6MQErYyfhmt2XoPyDVJwKQpDgu7adTJEgSxX7EmVJmEiQfFLhqSEQvPGgAZ4jDdPn1MNKKsm9JEqL6aHP2"
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
