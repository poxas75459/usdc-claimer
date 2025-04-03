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
    "4wQvRqvCJNnJPu5bntB9jneSyM6yxNg8seheX4sXRKMep5WKb1NKZvxU3YXoxTZ2jBc9hJRUTMsYJ93rGKAD4gaX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FKQ9iT7iXZrhfkaNJ7qYwpYFeD9noTWYgngtCEB1Cz9nMmoQR5XChYaoox1nwWo2MdipkvdLBSqGyB3Y1ChpY8e",
  "key1": "rQFsrZAvqWc7T32YPSDuRFNDsu6sf5Q4ZGsmL5jskZSU5ZK3i9ns9FeqjjHoXZD1HK3v8sKLYomgXFivBkW2jhq",
  "key2": "4YLAK8x5NYKGW6ex9FjLC1EGaL3y9aJNMrDtbxD9bzsiK7zB1q5CmbvkLhV78W4wRiF29wWreiwt4B13d1LZLQDh",
  "key3": "E6AQbtRWBDy4vkRkFiCeK3G4BoZH89FLoBabirGFF1rgf99SpDYLaU163vCYo3eULuUbzgzq9uJnxah6ihBjQdz",
  "key4": "4ghgeUT29359Lkg5CvgkSYjKeHkX7kWBoHkE2ZSXzqmeo5rmTeEE6s77bgkXrwEDpL4YNu4LiB3EGbzpqKvuq1DB",
  "key5": "kaUpavzotNggG6VW6reLFWPHgY7FDJAqpsLa9jwxahYYzDTrtD6aCRLBm329X1E4xTHHUTPqK8SPH9SdKQroJ1u",
  "key6": "3xatC4gCaB6YQe83hk719jmC1Sr4tQKC7dTVwa8Kxk8mmrbMBA2Pe9crwvmWCerb48pMkLsytRX8mZeci7NAUrDC",
  "key7": "2QfgT3DjzQjmPZDceEhh2TiFzEhJgYxvmShX4GiucShxLSPu2YKPLNeeUVPqKnUWwQvju3DB4Zkgws1XQwi9QWg4",
  "key8": "5zhzRMHuvZR9sCUan6NJ7cFEPdV7vUhpuWd1mS8qRE1TuhaEMjJ5QtrqvL9m8QShzjUqYnyUjKAs817mDbDsvCh1",
  "key9": "5JAhAwu6ac8j1zWd5Xgw7KV2stFzUdWaRKkMNBBzctn85KViaPSFCzemWq6mZVDzkFJpYhc5yjjZnNVaadTt5ktp",
  "key10": "3GycbFxrJF7t3LQdUnZfjj9DRBiX2XttkDqU4gcAuarz7usouRx9FGvTYKD5hhqJHkCAvudkauvmejFzvKAva1PN",
  "key11": "5JR1rDJsu6ghb5WWybHMEwxVfQUm5D3kLiaSoYkjq1nM3n1ekjjqMf1vaKaFuZrE9tLPCXJTPPHjUm94FTYJkVdX",
  "key12": "5G8YGFfNkWYj3JzGGGnt8MT26PhNaP1PUbNHeoi4oY2YDjmT4JACwXizpNNckdAxyGsm5HASXD5oe14ivTX85L7d",
  "key13": "KfjrU74QHHLqqDDQm5Un7EJELzhZ3Eu2bVnJcV5n8rtswXYBWZAdrpq9b2jpBcauzeZLUB7CbrSUyeGACY3phGw",
  "key14": "4AYDsXHUXN5V79jtdXMuwM1N3YtPfMC4tPrJniHDPkP1VcTxYeMPfU7MR8qAutSLCqQ31pzFXsnpHHUcqc2pBq8m",
  "key15": "4q8ztwBxfg6WJe2vEk3E1mj5aTEKJC3E8EWprqcATKp9BbL4X4tbYyyLdyCg6QMzTXjobHY8CpseicetAtuRJjhB",
  "key16": "3zreMKVMzwpiDFtitefHEfkJMhhDmoGmgRQMVYShn7b4BnSaRphuzUimnJ9bZ1zztNim5j6fH6to7VSshNrA1aKZ",
  "key17": "4iT4pdadwsD1ypTxjrhnEfJv5DU92vLzRpKBTnLznbeECD6TvmYtcynoTMPofTbrByHeNaFD9e8THjuvAox4SPKh",
  "key18": "2rGwtGDY91zYe9W3gWuFBZa9GUhyPcTKT1chaxapfCsLL1Dfx5j1A73HTz84iEo9oZVEbW1AeBaXtABz5X76KKuU",
  "key19": "2phouUgw34vhxuazHvL95qf6VJLYD4uXvVen8vRLTQniC5u3yowTwYVc6bjiSHjnr4YjSqsGWJfr1cnK5bU8TYSh",
  "key20": "5THv63dmUS4mHumPm52h9Nf3rcE4XfzedQnfc6uHJB6kF1beWapeFn21C6bzXXQUuXjUShefyZdVz1mb5Zx1e52m",
  "key21": "63nLLWqTqQXaZBtobNXPKSeWCBqJpfNEKa9fg3nXdRnUuXzFTdCfzZSwB9zifot1yjru2hJp1J3pxc6BUucwmzaP",
  "key22": "3JDJGChavcd9CPXAFRjpRMb2er99ZMwsmAuwz2cPurKc9rtr2JKBAD634BuvYa39KjCz8qd7Lm7YDjoyK4PautPD",
  "key23": "2JefgihfXa4JFcuKtYVy8azPPyS3nzqrzEURytc3aFweu9ntu5z86TRiYN2bXyiLvrAB981qVFFJJCDWvPUT7TG",
  "key24": "4uJbCj1FViPf2HasyGaJWrjyMEdw1LF7PhbYaRt4DwaLchJZLy2XNDhsNxfe6jaT5DTfA7twrJfbpukoBaXL69An",
  "key25": "2RCUpAMudTEvz1KCo2RaY7sBHgvs15tCb8P3GeJQw857his9QByRBMssmgSocdXExuRYszEwdb8bJYeMEAqCou2N",
  "key26": "3PHtesUYcteu8L6R9ByMR59SYVeSwH7y85uV8YgXBCnBVnqjCPD1wyXf5Sn5KSUhzfv3qiwyPnvkbToFUyDX9eRc"
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
