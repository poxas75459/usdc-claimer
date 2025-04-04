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
    "5Vy2roSwJweA7YAPgd6yyZ7XeJwxuyaPXfwmUwe2gbJN8HxZobpuixNoDhdEhRp4ECN53G3erai4M1SyyBZhvkgs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "woLczEBJZ66M19pJJbb4A7DKhxsC767ozAHmFANP3iJdjitncMqN9K4QVxjVziN4RyyqYoVZJxivfo4NhakT19e",
  "key1": "2gVgPjCPcSAV7VwDt7SR7YqvET7g6E8BjGb5Q122xMW3iTsZ7kUdGTPSA7Eet8UzBcPdzEenJFbrY57UXbzsoNYG",
  "key2": "4j7SjCWk2QfxQJ26Yi6mVRxYFm8imRV2ZPrXVeuwnHk6fbUxqXNEVZuL1UbY2v7oGtVonCBEhX61Pdt32sm311cH",
  "key3": "4ZgLE5SEyp87T8sK47wjnRLdj1ysUC4bGBpYMXFrxFj6vYKsiRUb3UwgLFZ3Rvg8QyJwEvwcVhLgqL4WLtpC3dTR",
  "key4": "5YyvfLAvoj8bazQuLSp94jnHheozzQAsedSMerNDrahzwzfBbj86xguMMN64kx5yjNTVda4ZcoeorHk6dkjccEc3",
  "key5": "4sHhuZK2SJRtuav7WBJ8kuDubKTSRLBqsckhHJzDZu1WF9u4UbXuJMyBbeqh6jDU3AoSh1cm4AAV7h93K79ay4qZ",
  "key6": "4FKmKMcwP1kYuP5EakAD2TyDJb6ScYhhBgYPyLFKWG47ZkpznXFnB8B9XgrA5hbWz16CnEfRqPcPLCTJpxpnQsuN",
  "key7": "41eeE7AsQ6GHNCfTt4K6Zbu4dEL1dkjWxq82K8q6gTww4oJ9rnaNREYknxvWvT7LBtL2CbsVnyN1HonuPCFpUysN",
  "key8": "5BH8ifyn6VEWj7pPVbcW23rgruuYbtdX6Ha7jQThMVY9noPVFZP7vDUcVzYYcxL7rHDjCgVuApwv79CX2GnbGbeA",
  "key9": "5toZMJithkESqHMvFGJqoy8Awx85VvVQGi5PMkFBVcEZdhD9EaNZ9pSe1Bb7kG5znDC9FQwRMAvSAJp8YU4agVNu",
  "key10": "23KZbtGnuymACUr52A3ywLtLz4uFgczHox9wU9vheFKZ9AeLHgAZosK11xxw5RhnncwZjNaVWTfUkVB5LmvmD7ro",
  "key11": "5XJ9Bn2TamV7SLe1MDNwa6W8t6dmMTF9rjFTKUPtJ593doyjC62J5Puymx4U3wHEWQ8ag5tuztyGxyLWRaqJH76C",
  "key12": "4f15PKSJP5NFCHHPQK9T1HAVNCWibbUXwspBvpGqEfdaSg5e9EZreLBU5DU3mYDdZaNCo9XeeUDj8BBrKYiH186r",
  "key13": "3M3vaWnzesex5JFB3UJjRyHNY5Q1RhsWgNE2pYiNTXF2DoPx2x2MR3Du9VYtY3X67Vn286jdybJdFGa7fQGTtxHW",
  "key14": "2JU6XkHsuG7fJnyMLNXdFM3C968d3JprMBZgCtee4w95tcuNQnzcTXx8aHuATpugHsZXkeb7qXMfNyxaFXwXYFWc",
  "key15": "2MUdmvXLzvshfN3feymEbViee5LMv1qNraMG7i8NxefBRrmHnZsgLUoEjGuuWh6c4pcqfE5Rv4hKBuyZxpMdocCn",
  "key16": "56Z3xUWCJVk6WCABVEKEASbNWZYdSVtXDaAeDd8WBBSh3DjzbZqmBYSqxpFWYbZyTRMihngqddaRGWkNDGdMiFt9",
  "key17": "447RAoML5tUNK3y6g5WrPjqqqMdBuBqrE3NQbHbHvv6xsd2ufKA2w9deBeKG7sXHA1eDvzqF8BbpWYazThdVUVQS",
  "key18": "trYDYi2MnapmR9BAn7TcGNQNDxSYiWgKHzywDwh3PLtGsxLXLDHCkfi6D2LPkiw7r78SaSaWbtPz56W5Cuh317P",
  "key19": "5AWNycofB7HymspaAZtCuyojPonNJxDbMQUpNdMCs3xsa5zKVVQD5vfiepBS63CrRyrcprCo8Yi1vhfdnBE7PgVs",
  "key20": "5w1DjhCBuWzrorbq11k751mudnqmri5tAS8hKwMKp3hXX1eenCd2R29rC6ic9nyfDPvtzbUULAmeb1r8wrpaC1p6",
  "key21": "RARinuvtTMKThjhX6gSVqQ8Mmm3KAoc6pCQN2R66ZNVvQ7fepLjN5R3L4FLKzd7FPT4ngJriCFiF6sJGHMjdkws",
  "key22": "62sNugSE4ERH7egErdsLQzko5nKF3oJwsAzGFmf4ma5oWa9E3sJzBVwBE2D1rpaHzXxSH7yicLjNwaFys2dPXyQm",
  "key23": "3ezEM543MLSsLuKgSNsjAhvn1BStRmsxj3vgP7ANUBsuTUxkjManDw3afcpAVA4Pwc86TGp3qhcybnmY2nXBEpJk",
  "key24": "3m9gYN7Xp9uqH5N4PFAH24v4CQLNKavvJQKgDdYGFEtX4dKoDmRh2Ng27vAVVWwunVNTNQ5AUPEK4ZctKBWRtykN",
  "key25": "3px9smSx4JMMU7R9ANP2M3fVmezNmXJ1R66WiM9Ytuvo5XEMDtVoL2beDHY2ZbMWwWdpU8P5KTz22yY2Z3ooYRRy",
  "key26": "oun5eCtfopueBXZjijxKRxkg7hzzmFgbL7sdeDiuPX9jHXXS7ei4wapCaX7wrRnVveZy8iaQ5YMX4B4s95c1wtd"
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
