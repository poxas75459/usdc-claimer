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
    "nKWcqPAKKrVcxabutQb9jFtp572S3bmS73SU5KnFYcBxTCfhr5Ac54yHSXDtbbjMsM5BWvXL9Q9cxXCw3ks4orb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cKUprs8FQwBpDaa3wMXGqaDrwv3H4Vmh7Stmzn3aLT8pzytnxNQzkRScuKHx7wxrHXpdmznaE8kU1kJh2RKLbCF",
  "key1": "2MkbWYHM6rSjbeSkvfCt2dLhno8bbifoShLiSQhBZKSdcz1pbtWYs8ksmrVvtkvd9iyeN6YatpnaX64F2jSF7529",
  "key2": "2JKT6B2zdX3339doF8iBbVifNMNvvj2JmBCHdrcPBLurkMhbcZAMQgBHXD5gs8Cy2As7Q9orEJSHVhNyB8fiR8rf",
  "key3": "32HLbizXojQLc139mheKsGzbfvu7sQXJTEkTBaGR79Qx6RPyx5f8qzKKMSyswPj72nMSJ6z49px9KKcp5BiBRvsV",
  "key4": "4GqjHf37fdhNQzExaewzbUynKZBRvoVj536efoi53A8vctmk7skcBHz1RNqeMexz3GgVZdE3mZQngjjzVUsbzUqS",
  "key5": "2zQeMsSjDLyGCeUsfR36LGVrGiU4tpfcqqGFmjh1j57C5yBy6vQsG2i1mTv4jj8Pybr4hsKQdacVzyQEnKbZXrE4",
  "key6": "41o3yMKXqDFR5ZCQbe3ZrPXEoNjixUWkAD974ETanpmndeQubek3Rxz3Ycsqhoy2wxWuympwH54m6QYEza1Mr4iC",
  "key7": "2C6ECbfFZq4GYkEBK9HaYEqZSw1hTKBAutww6tbW3dzSLmFNZXb1GtVExq3ogFY3NMfJoE7qRVo5Cjwzy3aZTNAV",
  "key8": "4Wv4MEX1gyPmbFU7nDRawP68FpxBZTbLerUhZ52sDMiXs4p8VQYxnBddAuS6jABkiSUoaNNKreKgKNkwA8gygLrV",
  "key9": "5LestS9kxHkcqn4EFGfDbYiUJwMU5Vh5TJXdTej724quMsUf5Gcb1DRyk57jP9tAmS9DZiQxRigdjsfKtva12GwF",
  "key10": "6sGsKMWiYhUNs6JJvm8bxb6iezYuVuc7qQsJcWx7RT4RR6K9bZRt16xbazqQceNXG38akDGJkrXRd2L6hufn8XH",
  "key11": "5otrabTjfn2h27153nFn8CLocTCotMSoEmhZRFN76u9sM9qWD3gGJgUFo62e7rtqdf3mVuH5TMBcq7wvtr2Ny3J6",
  "key12": "63oQSHqSqdR4Q5YXBeAxJpaYGxLMCjyGDUYKFYhFq5BeugodW17Svz4uDZboBovK6ZsPcPayLJKCi2PRZ1u8MuAq",
  "key13": "Ak5Ctdu7zPuMYmZ2SqaFUCTuZ5V1EdLp1Z69cXiFNqhNZ6iWW7k8XqRtvEi4sLsHokNwuaLxVprQUkQJEi8uE9C",
  "key14": "tKcgzvcoCt7Xqjd7t62FeGKsRw3jkV3gaFwkG39Gf22LCXmMKRH6uqeHaBbLZya9vedjAbu5WqbGQtZURqf2Npq",
  "key15": "5BoBEpMh2iUFriFu6S9i8LFiqReCYMLqRmqZNfGNKGTHNy4Ln6k4KrqxiENasTqbotV95sSTGLhmxkoCapgbDDrX",
  "key16": "ak17zmXQiBJrTrivaJQ95TzSjMJsvE37KVBrV14jqRAyFzpvCVFjGmRRwy3HJDJx2xL9hHk9zW7chViXcLF5ZTs",
  "key17": "2bPLZRyYJXpXoa23T22eUqUn2mgiSBTFbtWfLbRUY2rJasG7Gfipb1e8y1DtekUEAdbMuZwcg6AqNx4Jr9MrQxsq",
  "key18": "2VKgQo8SUzJNdZKYvf4igJs5xBnjxmk5AMeHnYUrr7sqRrCy9PbULVSak7UcGmND22QUvrQVG8xuwTxG4wkohiJN",
  "key19": "5WpyUYbnPCEixqqFZSxFUWRRP4mM9Nqo4kbQ7VUxHbtDz6ue3tsXy9iAZPUmtAG5sNmsm5WwnE1CG9vA2qHjCYc8",
  "key20": "5xBx6XDV1J1NJLbivMqfy4STmSyGRdWsiPWoaKKcdpzfNqhUa1vR4hywzdgmuKbKjD3Ywfv4hUCoxNYkh1aAQhD4",
  "key21": "2jSV8MMaRKbp4aQREZXmBGfDBuV3CXiUBsgTsxWp4AZsM2bTqzFEWyWneYyfbEt3XBJ9XGuq1oTjPjis6rDrak2S",
  "key22": "2FYWtTFmomDPLZvMg2dmU9YkwmDXikHPcpfPG8vdEafnrTWwnmeTvv3cBhsHTEWTW45NnQkJVpgkGU9RDgSG94xn",
  "key23": "63MPwCEi5vBWqgieVJmtxDkAdNZBVN9Wya2izgSgDfFZ4asd21ka7B23FKmk8MrWcrVoeU7wkm5nYMxNyLjbB55j",
  "key24": "3WibaXY6WmwRmEuYHjxq9PhL3zjqmYPJWnssbBDjmzw8vX7cKxMVrzna5frhSiMs9Hn2Rqio9SRoxAJNUS2NWxB5",
  "key25": "g3TB7EfyjKXG3fwnrpRGDpsrWBkFbUy4j5m5NLrRbDBuQPAeRbjEv2fy94WjpG42dbN8J4PsjvJb7Hsg37Zaip5",
  "key26": "5GW8j62x1pnTTxqdJii55w4jovHTfhupR2uWabtBEY2g2pDTECaEW5X7UTvskjiBXiJovS5hbCrLGXRjbRUa3vFU",
  "key27": "2F2dZPiCHTMs38T5smuWrMZVEzcXAppSVn3VdMHtFoszuNBaXUdtTFAp6KjwVjHzbAuiajh7Ei9pTqnBGgX7zttE",
  "key28": "4gm7wzH3Haxb57ZbuyoaZPHGUs3S9DUycBohoxtsP1Kq6pXdY4NXtyXFNfH9if3MNMyei3qJqQwqbnvvzEGEZEaA",
  "key29": "YPnfD7PahjhRsuEuEa6RcJBP2kTUoWa7YsVi7wDB1AostdEWjS2ZEEn3obfoYZXeG8rjJLWXFkNZyPM2w9omS8Y"
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
