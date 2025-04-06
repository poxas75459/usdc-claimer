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
    "58N7JzNxno6Bxtro3cPRZuhxVrskf8km8WxNuJAX4Ag9bH4DDLW36opc2cbkK1E9MrvRLezza2PgpBqEBxob7YWQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4a19KDyiQ2YeZSbL5hro9gvK1BHhiPuM2W1LkXFPuvXDSR8yearjTpTZfdiycZc5eJZsMsh9uz5maCPscyNEAJfo",
  "key1": "345GTsWXNT8fsw2kDs4Pc7DbefJrYsoKCEsWmR7D2RxtApn7TUge4UVEc7vdWt6Db6or1wHUz8cgciYpjVbeMwWi",
  "key2": "43VePmT89ciEuMGu6bwLb6ZxyTs5iUJdXVEAxGtg1Bw6wvFgrKhGSYcqUsDFzxYjVMDCnrxGZaNmiE2zqjcrrUBR",
  "key3": "MQh7Spc45nWLbdctHudZnPQgL9UgKVn6smTx4yme1PPVzkVGKU4Bx7W5xbWptG6oKwCaN7Rmp2P361FKbP8wBA2",
  "key4": "4F2N3piUzRftTEJMJg9wYxaXc2CAvfoqLtUAASkqmcybo7Q31KgvzgArQHUvX9csZHzTovkx2Dhh9w46N2fUAp7t",
  "key5": "2VJWZa2ZtPf8ixD74KVxvWVu3ZKy4D3whdHH43WmSsPvRL5YLeqi3Qswpexd1tsUTa77aLHZYEBA2FWxqw5RZtBS",
  "key6": "5vPFJq9YTK1UdMqvQyqW3Bb4rYhsgjLQR9QbdkppJR7y2fcfyhMf2skjoAndNBhGi46e8hNikJfK73AuZom5pncn",
  "key7": "2vJadRwHrc1RFx4Sx8QyzCVEvxxcweAB1WYxtcRJL74EcjgvNSNCAUHkppyvur1hfTiKHECbM7kpCdDLVQm6AFJz",
  "key8": "51MvXuSbxcuEPA892q6UHt3N2dFq2ns4HrdphJdT3y8sxV3Sycw1QCrTi4sgb5xYmzY2rcTpDsp3GQA5MjJTsPk2",
  "key9": "AZP91BmgmM3pv2nJuC5KbkUV8pUZcHah3h7QfUVxytJ79tsCnLUczJTsngwDt7mYT1Sx4gyoFBxCKTcaAohKTqe",
  "key10": "5DvDx4rNXS35kaWcFaGxbzFTFMGcKZ1BPJqJ5VqUsovFNJEgFPgvTQsHv5u5L4WMUWLgoYUZuaygBuTo3eRNJ6J7",
  "key11": "5kij9QzVhWX45QRzrqbq3tkQ9WqTst62s35bZ9vwJn4BBaJvS3pK3neuF9JJKRJkJ4F8Ws3FycN6ruV658Xhdpzz",
  "key12": "2PFBAPhymBvKJgVJbbD5L5PNNVSSqEBWueAZDEnnR9v4M6Mde391ynt8yLFHUAaLdHm77B2HGC8dQSrD5HzR1rY",
  "key13": "VuuGNQn1gSvvR2d1K7TE8s8xc8SdEHzCZZT73qE1YpmX8jTR8dLJhAzeKb6EQmiX73Awfa8j43ovod2JABPrEUD",
  "key14": "k1cbdzAWv4XkPjBu1Lrync5z4si7BhkcMVbHL5rc7XsL1Cz7ywB14NGnXqyttQTP79PfnZYjceGtshVqcpRpumo",
  "key15": "3vg3NzGSm3E3zJvZt6nQnMZvfJQ5QwJH7ELhgCKUGm58CqjG9qzFuut4RwbGAAnV7eZKrSxby4jdyMsSJCnUQRdn",
  "key16": "4RVjKfJPNCjLvWLUwSaB1JexnA6ekMDTJ11HN9NQ9mQr69j5bjvNZkrEo9iouhvLfo8kX9ZtNVxsWezSSkfEhcnW",
  "key17": "2bz5ixZTeiLoPKEJSAczQY4XUrHMGdYHkZ3GPUfNTSrEg2hrEdM16eWBB7MhePefYgfdoLvfSudhssdevQLTnFkx",
  "key18": "3xPhXmpz5FfK4aA548yQyCwpSkdHhHrYHJ6odXPDSGynxvRLVLXW2YdkGszc5XCwJcTH5hEUuaw6M4viuXY3rU9P",
  "key19": "5omS7kHEnAXGfwuFYk1c1WhvgjwWc7xbTEEocXomHWUPwg2L86VkLY165mFSNN7qFmj9pLrmeGCQSE2ke4EihHje",
  "key20": "5KZSTdGYjzeFfWwcrPmF2wFkbg2fhDAEnJwEDcQZUq7y1jJwJ6s1eWxauACTWoFTnUH7f4N9M54P9ZKZevV4DCMV",
  "key21": "2xCkCvV2KUGzvxxyrRLDQvNbfKVACxjaGxa25EXmJK6bptD4Pa7LSPof6JZMGrDhGW6YKf2gP553VQwdnu7hRmUE",
  "key22": "44XD7jBGrCpuKqR8AiHxoFJx7knXBmNSHQXYPKiwwvhStiA9MmnX1Ac2u8gRdWGfMWKNPKcJkuC54BmpgRqZTjpY",
  "key23": "L9kxqdyWwVvc5TvSQJnRzXwjDRPfvShZZ5YLzMLpZCym7ZFNJ7V7ssjaADqzXePrD3PkV3Pa1rT9bxXVG8Cj6L3",
  "key24": "3ErFZfxwivNdejtBmqSSnEKWT1aq5EZpoGTBzyQBxybpEv1TSGfaFgR7gtUMosnJrtLx2dHQXxxukNHQfTtCyuQr",
  "key25": "2MdwTFdoyRZgJzzJUmfWBFZN7RwXzZpkV8pzxqRPJbBMVb4BZc9XMPZgiVHZaxbsqmwoLqCG73t4Uvxu27MJwckh"
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
