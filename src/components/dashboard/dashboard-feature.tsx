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
    "3WN3oDNhjPPYqW8sYrRCshLNF6wA8cdeWFqEfPhnazepjpunwa3pz6YdfoMAEtasjA6mFu2R3Xf1Nhsc8GQA1bRr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3rDicZvbNo9BobBooKFWy9VNghbCmxMVNtKqxv2Lcuh5DDBj2PPxQttsSFoGqNy9UmzG5LZPN9ganz8N4DzNXoE8",
  "key1": "2Y7etJDhLNorEWMxiqP2EJf8K6qgtCoevVAkhRiixqLYgWjS68oMDMrmoBzAEu5j54pwQhQWyDeS6qMoUpmKE5iK",
  "key2": "4B2LTE2UQTRPXcVYQ2Qs9UHttnHRNPdm9mbARUi47RBV68pQUFMF5aeWNxjhsQGCguCf2fEt3y1dybVZptBwsZAM",
  "key3": "4JModDdhU72k7S34rMAq6RvZ4XXfNvHBEVbhxJHVkSLehcrosEBsUYsTvPEyJKcD1dgTsR5J5dW8g3vpxKFnTcuE",
  "key4": "2MNgJDUkXptpEDJTfUH3HxncrYfipcQW9fnYMuYeXg8YDD8GhvTFDP1EmWT4TLc5Kd5GJqTFh1JRhqr5PayMk614",
  "key5": "2ZkPZN9rFnmyeqRJBU2VynYxVD5YXJsDvvH8cLH3KMX32WJSB4hsvpouxs4KVadzyRqYD4EYjyumPc5JGEL2Z9VU",
  "key6": "4LtEFzRhHfWzGkUHuCfzv7AgNVKe8LLMhYmC3ngrUjUSL6HxDyCfVctAnnHnC3goqoee8UYgrqomYbYpSwQAWwMu",
  "key7": "2KXL74xL9ZmTVrbCaH5MTFNmxuboRSn8rRf5AgTN8Z1n3cU83r2x46X5M7N75vnwWjY8hWLmeSp6pyTaVwghouyC",
  "key8": "2V1PENpivpvaBfdDznHjt2a85WuVgNFkT3kqD3VvoFsajki3XSPtADTE7Uofpw6Uy31mQxjgGTyfEcZvhNKdAGRB",
  "key9": "2xejwHSczZjyDzLUHM6C344o7fZgXwYjacDRvsctvvPxaqnwKjjFKRqMgtKT2jrZhdfToWumNMoePTg6fziECfD8",
  "key10": "5SkV4SUSz2q1bYGB4X8BTK5BHEeLaosjsEwmYBXC1Ltm9CSwcxUm93oGBvvMPwwcmtckTiHLsi6iqLfPVbqqCo8v",
  "key11": "6zse3zXR1GSbCYc19GR4KYw5JqSJtspEHAeRkR3wbuFqqEfwM9xSNY5C8t5tsJgyM9TJ47YkqpZGHyFyQL5D87k",
  "key12": "5Vaedwvrk2T5VRd8CT4qzcc6mM4JoxdKs2nEkkeeg3ySxYK2Ji1go5JL5A7kwT16Qe8hM2kd9sFv1eBZKvEHWHF3",
  "key13": "5iww3HhmzgZUhVjB8ruyPk9PnBUteoNkanw8yoxvXYhyThjgwFgs5sYEYFdZDfnFUCKCB4aEgWZYudGfiAktEUUY",
  "key14": "2LZuQ6dg6VkGAf1VXjjjg9vy6ov2HmfuoWQPb34XfRRsQXeQYKT4SiJBpQK2bZbJYQrBvDYsWxz2kVYYgrsSn1sR",
  "key15": "5RZYoqjzFPgGtEEjgvMYJUGTBWFtYHiHqCuZqiFddPfUnkkad8sPqxsXvCZqHxuhDnLAwyqg6bzDzDidCNNVS11e",
  "key16": "3ecCnNanRivxtTtVSz8bPNasXeqCA89MCdV81mAN25hDDFEj3Gzsh4xGW31YVyVKSfexTRjoAvbQEpDZQg99B15i",
  "key17": "2AaqWZs6DyPvFsbUWk18wx1YMYgYXb1Z3h56YHdMKi98FXfBZMdWK7c1rSJes7J8Af4ZEZh8Tsjya1aiwdG5afSZ",
  "key18": "2SgvsfP3HvzLP4avyN6dea5bGrbwefpcMS32drWNkVyq7ELjJNNk5h5Y7xQwtBm21xRQPJjCX7edrs4PTHFUpDhQ",
  "key19": "2mX3Fa8dhiNfSC3FAHxXtJCNsk98yCh6oDkFxteoET6ss84Z8atAUZurzTPMYwq1odwFbwUXz9UuGkzKZFmeVGCa",
  "key20": "wPq454AEuR5qscxWEzkngfMwPJ9GugQjBeZBPwVb3QGEWdqvoDJXBsRfQk4XhXi6ZHTfVqJTtyHumPsHQTiL2fX",
  "key21": "2zHYffqsaMJ6md5muZuc2ighd2ijXuA6StSM6EFwPK2ncuZeztgrG4UB5QCaQQZvRYkc3rNBDvxqyFnbaagYUFcF",
  "key22": "5WNQKhXizABBVYZrupAaZJLyLkQBCgP5QmaZEDsqF9tASNyPXY2dRvCMegFzzbwKSzVzfEyncBRxf4exP64TB6Fb",
  "key23": "3txFyfV997MiEeAsEDyYqS2z1oeajidzPXx6AX16mXuJG7HTCHFmeFUyrfUQJSwKzrJXXtRVDE1tayP3Uj3v3CJQ",
  "key24": "3Su3GdrwBKKXLhWso3ifQe4CiMj2ongXDRvigR2jdaCdJ2mh2vpHZDZUDKj8VPyJZVGReCGmnpxcFZTUpXmzNk6X",
  "key25": "NUHWiv8pwGsbS9mb9wCKHBviHaQmVimasdycRDPYYRZDTiM5Y9ED6rbenH7KdYjMQXvnhBwAJK9vhR3YV9EFn9E"
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
