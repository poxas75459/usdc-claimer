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
    "5c2RPi8kPL8rgsF4nqacZhtaY2a1sQZVB3jetck9c9RRCk2o5pBJULVtwkkRgabp2U5GhzPfBtEQri2yJnaqSo9H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "KjcvaxPSsjsC5yBAGaUyVghcCwj8j452MtDE7ac8nFgyZ7k8MFHULZvXyCPcGPkxdm9nBewFTURFbR8sVNEinGL",
  "key1": "yujUG8j7M55pkXun7zsLNhVcSS2R3N7AQexvrBR25KvRNLkSDogb5qfBWyQpPj3iYSCF6XJZNsj7chFFb5hyr4T",
  "key2": "2AJPYL5wsqvPHALDzgts487LHGsJq6JNWD2KfuNhNHKGNcrdzpLZnA8jLdkYA3eJeJdcD2uXE8GF1FNsrkJrKH7F",
  "key3": "4Kum1f4BNLqorpks86hhMDXHn7npRLoNTNDUc4baEx4b7BFRvC87hfYoTK4GN8h3k87J9ogvueAsPGazQaAELy8y",
  "key4": "53VLGdPoDetHRy28iKLa6kQnkbY5bkJGWDSAJ6xChNhkYRXnWfJap6wUSDVuqddNpykjHvMkMY1AEhPr2z1XvGqH",
  "key5": "3WbucyQuJuQes6CdCJSmuPLjGo7SBohjSZVi4EyGtFoUBNkguWA3yBctsH14RCiJ4cUF25wk3nqvAZEkNHser7Rp",
  "key6": "5L4MvHXZz2Y1kgnptFA6gogioqHPoHvujpJQwmeewJZn2B3FKmTDf9yPc9rnbSDEF9rcQ9MARA1JX4cznWhEucbG",
  "key7": "4ujwfYnKw9ZixjRoQyUH91sdToetShkdmy7ybNy26P4xcTXjHtB6NwkTqQPjW7SrqwbPK9dDHK68Koyi2hLcc3hg",
  "key8": "3NzzfTUxYwTHArA27dTMjodRx9C6fm2Fxd8hifQMTsNPyT33tgykBcZ38TzT2iU9wjz9StdmGJnnBmNYkfY2sBSf",
  "key9": "58o6uM36dpo6Ph5YNZUij8735Wos5EqJWxyKLkwSfEX78z4DJFa1H6jFcyQVZFRt6z532v6mgLZHs5maDJp6GVci",
  "key10": "2SVcAbDueLA5j1WYgkMo8HNDG8yqzjxwdvu9tuEo8jB497hFUrY2Vtxtvo36tFkDdghZs2SWe4Nf4XLMSUXx4jfh",
  "key11": "3j3ukARHeccQSZBe9YriU7sS533EFQmfkhdRJLYhtaUqoK5UZTZVsjTQ3QFGQUnrbVMK9jvUqca8aXYtnYahTSCB",
  "key12": "2M3e718zek2G8TmuzH64HJ9nsCA9Umi4NAgkLQBdnXkzT2CL1BXjQyU4he4XipXRJiWCMckq6UER35wa4zdzbA92",
  "key13": "5sMzLGse1oAs2XEyrSfovXKzoU9CDVRoxcBkcwyGfFg43BGnH1iUFd8Z17oFnDvkV1sbCVDrEg9K2Hi6TWynGFZ4",
  "key14": "5sbfyG8sB2VGWnStACW7ak6BFsf3jcXWAiUxfLbyBs63RBanmiUB7AWdVWrpvsAYZwKXeHdazPbJEoGhwhL3Z6cM",
  "key15": "NmPCMk8AqjPig4oWxqQ5LRXycbqhBKNXJ3zSVRvyJufSfAYXJns38TLXHa2FjnZ9An1yi5hWCP9Sstd4HiF7J9T",
  "key16": "5SYDL451CCct6D5kHwf4eHenype3qT5HDVDRkEeB5X7YaLUqBFwUpEDiVUDoHxfAqBs9eKZcv7nhtJ7ppQgGaUri",
  "key17": "2M2591SUS3ggV3ZzVtWGHLXVxUxTH8JgKwNAnSeB5wLTfmJx2Spgb4bem4cnqxT2Z2NESryHkS96kw3HJtw5dsqf",
  "key18": "2Pi5SusonjFhikbH6hVNmdLbV1udBgcFsWxhoyiZd2oBUo8AhqL7ASuJEmZs189sC9RkgWpNCeFCojb9Xu8iaeCv",
  "key19": "4Tzmt3aqgApQMCRF4fxfxzKGeFhuUYP1hmAvzgtd2DKz2JngC3dXHfaP84jEAmc5zrEDqwVCq6N8iytXp15yVvdm",
  "key20": "WS4ptL5Lw5x87CXzztjHdB4sXvYUmRix47qw9fpZ1MPrBVcdv3Pa22Ny3G93jABqJgomNjVZLNeBgWz44JB8RCR",
  "key21": "2nX6SrXemSHjDdprc9S5CfzkdB7VLNmeyD5wRSjfTZTfFg9tQgpZkmewZoidWzdwWHvsGhe2vTTCbt1XiqeTk53s",
  "key22": "SK1kja1KnZmESDv5KiBCWLmSqYZA5MUJAHUz2yFth6Na2SQdqNg8SmHb25Rk6xwEKEYzkbFTwycmwEUeEB7FVi9",
  "key23": "5pDMCxR9CXKM5KEGTrayctk5AAPG2CXPD2zuV5NAXp5u6R9p5uimgTv11P1wmU7BgULk3z4TgFofJrB6F3GHaRc6",
  "key24": "gdLpqjD64oQfbTwbFE62oo7CJi6VKnTCDibixpcra5jWzo3zTPuiXtYTMP8vU7PioD5zcQdiFvuDNEuhC3GoUE1",
  "key25": "3QYVFZhwYLtPuKPTSdEtTK778qTXEVX6L9v9hQvgkEmJqBTkWzDEVqs1siWb6HF37oVKTYe358HCvRJmRoGsW2D4",
  "key26": "tu2eSbVV6MQFZnuidcA741Q39En1yGehngXttbc8yRW7D9qj2CA4R5wFup4LpzrYaQmuXKgKyF8uQDvEfi4PB3J"
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
