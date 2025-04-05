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
    "2Wamk1EUVrBH7JcRPVhwnBu3trvCCog9Cs14JA65BmjAGNEUyDjEEzNnYPFdLBovSP8Vqyvfr8ztnxF4hRx3s161"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cgc3hygzNDPmND7fC63mWt9c9td6JmFE1kR8AZqJuWzCmzucKrn5Unu5Tt4fMsbfgaEH7vm1mnCwmLzmjWkwA7",
  "key1": "nsviWSEDV7gBGt5PuJ4hri7DVr2HQgPHHGjW16D2t5rmkcAfVn1WUCaXiqHTL8cB6NQNjAjgxVRs8ezGoqqYze6",
  "key2": "3yfRVERxTSXUAEfn5pmqRZfEJhwEN1L6rJQzzXCXGWrJbNGCbr1YCgJ9UgYynMpUwC5SmPhPV8DZeH4mo8BYX1jF",
  "key3": "4EjEG64g6EZ3EeChWvcV9fvYuWgt2eS62vDamT8EnyME6232F7BfRxzGbBz3hZooBU7otdsEU1DpUHS7hHeQABYC",
  "key4": "exdu1f7GuiXJoTshi6VtLjwRiSkEeawtdqfHq31Z2Md8hmozGqG93KhTgvjUF1Lz7j7GbDd2SXN5Qv7vbDV2za6",
  "key5": "4J3E9joQap6pJ7YWRTuptAsrkUbx6KM4cA1wCMvBz8Nz2mrt6nxPzxsybw8xAZ6ygYDZ7KxrwEQRkBUPnxk6b7AE",
  "key6": "k1vqPCB4oSbkwirTZ2neRnQKdZN6Tr3CHGegiPhmS3j8ykxwFivHaTnCUsE1EULtJXdxCJNmnFbUMPbTvYvz1pa",
  "key7": "2tvKz6q1SGmGkBYoGRbdmBXfk1JVd47eaCeqkjoL3buqyetNQkyEVtgYEG2nsJ7qxaxKyitn3guAdgyPgeDEgD52",
  "key8": "3uxFf2qcepQ3DSXraLDPBAQfKLBWJp6XGJ2siANmq3VbTwL96LSXM31YAiiGeFcH1gZEwe5oWcZjdihibvLXMDyN",
  "key9": "5PLRoHLkXiqUzXBV8YAjTCBjao5Uc3vnM3tfYbD4bN2cT1u4tae24FHVnqB3VYoditHjoT4GBtHjrxE4QLbN6Xtx",
  "key10": "5Q7LMoZz1kzY2JjTxR7sCMauLAjwYFsw8MfAnZW9RvckaHH8Fpox7FCtNAw2aw1phf6UMJurRtQRoAnhU5azHFpd",
  "key11": "4wjzERq9if3Q6zu8k8k7aLuBCL314HBwEfCLGyTQuD6F6RxCuzcqurvPeAbaGGW9YC7RhRFHaRqAKKw4j2VpD2V5",
  "key12": "4mSNX7Zcnj7gYjaKBe8gF3bhzq3rKDLnHaM1j3xtmBt4BrVoANCLVRoEM38pPGJC371SSsxoPAZFGHFG38wfWj6Y",
  "key13": "rwBqrATPnbwhEGMzXk2tWt4MjXyXG5fMrnJ2KAVmEpbbzMUFzAGXeCUCyW8uVtW1LLzNPPkd76BR6yj3qTF1qAX",
  "key14": "29gFBuKJyyFmXouagJQAEZFeKzS31Wi7Z7JHXjBqT9YUQHrCKfWcee7wvivcG6k5DyUaEyeApULDSPffuCjenMNu",
  "key15": "5uPqQizzWeNpNeELmREscfLEMzzrDjEPCzN78cpGXjMcnCbu3nRrRNHMH9eeKGFSNAtxN8NkTbsb9SrzRCwtfXvV",
  "key16": "4uFubd3GvGumqFjdqi22u2ozDPXkPPwfTjZFHTLUSZ2hoHPakgAi7WcQcYanK2SXLhKjEWFnMLqQhwvnHU8wHp4V",
  "key17": "2sWnBvF9mJjYH8hGuKssC7Xv8xgeFB2n2cQQteS8J1rakok9PhQGeKuUnSHja4t4uzKYY2c2oTAUmY3dRhyJ3eq3",
  "key18": "4GgRphSTihQsQbG3rs21yFxzQwNUWNF8AgsG2Y2qCcKCw1iBmYrRVpcjaopTsq1oswVXHcw2hTRKerxB3bycLKRF",
  "key19": "3kFx1XkMXoj5oyx6q4PiLQKiJyWqxBNJ7mbyhnW7pf31YYLByPSXjJkNczFnA1nLmBsJtEMS6mqHK1WbGHoDEPoE",
  "key20": "54YRnyG7VSs8YwopHDEud6XaKUVMgFsKmVjDMnDjnv2rQvm9MYppwWcKtL2q29xKMpjMtFudMaPa8bDVJjkjeuST",
  "key21": "3EKQQiC4WWgtnaVdFY8u86qCQ46jwyQZMyYj7KuXiaGcC4w9LBFStjtFDdASip2r8dz49dcUwG5UUc5W2p4NRNhz",
  "key22": "3JNXVdCkkaZk7RE9iEs4wa6N5qaEeGAPPZaq8mc6PodTVbdNe6zsQm8h4uRLRNLbBpVnj22XKa3p7LsssY89cqUa",
  "key23": "4FRpEb9N7ArENgBGG5c5jb7WGCGVCHvJ56QJXPqUYx6oD6RyjGqbaGLG7MJmjvwgesWoq8zuTjYT4KhZKpzWASbh",
  "key24": "JsAZHVNJ4F2UUXokvi4FyTvsX2JgEiMLdktCKUPQk6qWmPhWMX9nzU7aGZsa2CaUyrCeLvGDjxTw38YcUAQKBPy"
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
