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
    "eCXCWNwFPwSzsTQfJsXQq37z2bT55WiyDkLVuS56QBEYpjnA67VZPgU22ZewVmjFdLLap1QxBZ8WQ6mid3ezE7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "27qY3L9FKxJ1U6XQWPQx2qLBEScrGjFr2Z5F32cCAQGgmoBQart4ZN3JpZPeBhmPHxn4nwXp3cy8U9HdnNsVVjG9",
  "key1": "244fx8xAFdCf1hJnPKtkSv28BgVeip8JU5w2JLXZWNTPGvvYiLXoRjp1jqhdya6ByM3e3zaaNiPVcc5b4PjiasCK",
  "key2": "3GDT3y97ZHETZzc5QTouQvqpyo8sskvpnjpX6THfefawxfZmkbvVfKqCkpEnA52WbRXziug2QHPJsGsXRr8JhByK",
  "key3": "4fuf6wAgdYv13xUBT6TRiz3jqsnwyMKxJ7f9oqnAKJkgtg3iPiVMoKLW4nZVbUPnESaXfioCnV8QL6ifJNMM1VV9",
  "key4": "2uZxr55gNzeRZ1L1bGwUbq7ehCmpF1pRzbwKp8QS67QYh7rCf4cZsSNvocVSbiKkKCCd78fm81wrkwd6AoLENaEg",
  "key5": "4eXpaRdPbYV9PbKS8Zv9SJKzi9XE82fpqhtnSX1DGftnoEny9RaanoCYsNtzKBKeWUMuHyu1bKXWBAmZNVVcCipp",
  "key6": "hjuL6UijydB8JMuoJxH8nm4j3BLGKBn3pQJBZKLpPNsh3nhNG27USJvurku2nyssgo7yKnHUDtwcu5ZZm96odXT",
  "key7": "547L1z78revJm9Nkg9F5qkWMaPneKUuDyrSXxV7NJhYQc51w7EooCBfh29oZxDs6dqYMiCq2dVyt81kEJDcFXpmH",
  "key8": "3izRLgEBeSrFQqGTixcw7sgyfq7XURx4tJqbWoYuVJoMSNzFvxCd6TfuPuwNGRLfQ4iu4RVb7k29xSUSmbLoebSJ",
  "key9": "2XrZyACYZ5oLsR7t7aLt5HJLTqjLsXpw4ga22TUgidz8FqE6xzLmu2P5KsRTErm9UdA68XyPsH82ix9HtqAxAoXn",
  "key10": "55nbQs9MsuQi76msATKeyqkjvmmFDTvnXQQwkaMLMJBdsFbJRWKExTzNAxMjdWP61MWyQFoVKED3sNfoLpCTsrad",
  "key11": "53WYcyUtXhavi4tcdPfwzFKZEadvFj9f5gUDzhpKYz4RSU7UxzcguWhojXfH8f5Xrv7o7wzkcd14YFcNHK1CsiKF",
  "key12": "8GeMc1CVnZdm9ZXyGQh5VDGqroWRsNoWQBW8HwSzkuiKTzBQLuzMipbt8EgrbKakU4F9d1pdHfCXXJNmoMSbh71",
  "key13": "5GpBNshKQBpJxUtpiKFhg9nNWKd66C2QY65bT7kBGdeno1ZPebn9E7Rtcqa4NBkfe5tPuAhqWcVmV2dghRwwaxBp",
  "key14": "3nahKEbxk2eisGHGAc8ADAad2CcdGSYqz4MAn2yaSyPPyaXGNu894X5hAYrtKnyA7ppMYoAkntzg9BNwSwm2fZog",
  "key15": "4NTC3rhoeCgVf3kZcUMXDdX8xooQZkQofFe1x4f6DSrkr5dR8YYMcYQi1Yn8rmfoervFV7fg7KVLb5jVV6yVGLu7",
  "key16": "3dMBwr4XJUckirqxJwU4qDBSCTeqL6ihth8NBTDk6EyCKeXS5fZEmBGveDTqaZmpBvGm9CEsJScYJXgS6tMYcc7C",
  "key17": "36dbuGdTE6SpBbhN5eeFULAXpzwmtSnfZxLvGhPv4Ha2wtPrBiLngtzLNaJqwq3oZoYAqrA4DHGJk1cXYx2RtsGg",
  "key18": "3yH9vuT4K16VYckzgUAToUUg68GNHJZ5qUDn1sNa5azWh5ZjE8SgQrAidyQJy6WBNt5h4vuKvveXUkCedo5WKdxb",
  "key19": "4yGg2DFS9gqvzNmfA37z67CaqMoPrT37q5sJSrKPFzAtaR3qe3UvPGNJDi27B31tM24w1xbT81zM1LVgcXtREzD6",
  "key20": "5HdGpJtG4DkQwNkiw4oZzkG9daP8546VwaC9LWhLV3P8TgLm53PfA4dPHSU1YBxNdZz795G8q2yzQXPoFK2hrf5J",
  "key21": "2zcowgjAo9ioqN8cTuNTJmFL6kLiN2GU2zsHP4HMjbmvMqbY1VKz5UPhUrwwG9E5EK9yCeEzSpa5zyJUUCkARY8c",
  "key22": "4w7qAsWUiV2pxsKUew9n1xQky7SZ7L5ZF8D5bJ2yFc5NFB3HeBdZ8DdKQdEAS5FAyhsBe4xkuvGv8r4qVHu6KR3g",
  "key23": "2XaGhknqLKvNHoCMPbHtSWfPhLPizk94Bmwi3fwSa7TtG8u9yBQ2b7C8Q4imcuvnNkRs1pSHzEZjvEXNiQbBAYh8",
  "key24": "3xf7xJAR32YgycD6R3c4qLLtxmdchreYE29GxfXmYqsfDiuTW6aJgVnm5XcNhrPDm8CdpsezzD6NA4JmbhpAmZVj",
  "key25": "1WvK4Ftujv2BfkmKkegBLKsGsQHK8ZLT9UVKSCEqc6Q72vKtkEpAkkoqYimduKzx1w4sBj4LtoFhEvjeHrSYfTx",
  "key26": "4G1jHbS95h5ELTk215XzbgrUwPq5uYjsCRALoh3yJuL8E21nLuAjaPcabiJpQGtg2G5rjKQefn4NqHzTU8oGQUTy"
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
