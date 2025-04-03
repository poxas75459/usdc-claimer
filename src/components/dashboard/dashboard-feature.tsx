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
    "vbT93iuFEtHdv1Nj7CWHvFsDHXVVJv4C1aw86NZsFVvhmbRGpLDMrYbXTZH4H7HE8Ai2M9TZvkoWE5XH6k9p2H9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rBescAbaxRF6ijDPYfP2WEkQPFeRGNgzB9yTSz7TZ2DXgtqo9Ly1T8ukiEWiMZC5Txyi2fL1b7rUTJN8Azi3D1r",
  "key1": "4iHQAGnkpXQdCgPQ1X57dreJct58Xg4n5ms29Rofs2CAV8ewCBho5BxVa4bigAujM5pUbkQwchDhXDFXojGZqQbh",
  "key2": "4jPYCkwbbXpYj5PNef5rGe3hnt5qcpEKkmLRfYLQLXRK4HXE999JUd3rA2ZHBWKHGMDBjnzMW99W2CpDpi4QRcYK",
  "key3": "5owdyQjnHphuNbkzyPDHf9hZSd4AAciMAN1t26zTPKEj3ZE4Di4NGRNcwCyaRYEL9oA6WvbrowJMAQgP4JJkLD1c",
  "key4": "3hxYqL1hXUco2KdPrNxH3SEfiacqqXZPbbF9uacAhrX3ooSCDvTB9eGx7DnPyhmXe3Qh7Lr6dZoqw2fPeN8D71Bh",
  "key5": "3UUyCtsTruPNQ9C6K5BRY97tjcVsM6no4tQdcgihJMRQUbVotfgRxBa9HZXmxT95HxB7QvMLF3Paqxr7eSrgSAwC",
  "key6": "569bCuTNBbgR7kASiGzx1R9oyWcLE3BVeWKecoAJnF5E4vpfVuQTbfy3WmqJFxEawz85hmZ8jFDyGoWFmhz6J3tn",
  "key7": "27sdBZvsSWXh7F4PUioKmt8S6ocNHhcPvHdpypSAxH7sBa9eTUiupxJscPuCJe2NqtXde9uLmhxQHdNTT5GTnrap",
  "key8": "BDCbx89fQDXSdttJx2CpGGwBAXMqhB5NumRCK4egV9v9d1oair68MAuFfFiUrsmY2R8UT9Nb9xCq8P4XQEueQSQ",
  "key9": "2R3Jtjr7bCmoAQtFhapVeZzRxu44TxDU1wLe73sQD4zTi1RALNTZqMuJpyeiRBnEQs2sD8bJTnj31y2ftGyodpa3",
  "key10": "eFiataMiJfqVbFGxz25dTwYh42CoA9oTnGUjvhviuJ9bPF4T9q4eQ5wACsA3PFKRmknqZpb6CRe7cXA8fLGEY3Z",
  "key11": "3hyYTjYtzewSeRGjvMaMCa1V3KsCob97zfYYhwErr5nEBrCsscJeKufhkcDavfBP1JMyW2k4knE3rhVBcFH6mYWy",
  "key12": "5cGKHn7Qady3fPu3bZksWSu8SgCdtxyFNQGXmMCLHHXLp3K7LDfxVkunrrRPdJ6FqUYMW1RZZxLNrES8a7YEX2VZ",
  "key13": "4z63i1mjDNBfYhchj44mCTUkxQ66XX9sAoAgBrohdZLKsf15xPwN9CVLmDZXEcPvkW5eC9FzaENVaCC8qGssJhRB",
  "key14": "4hGH3HVgtFryjPHfmt5noCDC7ERdCzrxLd8jnBJjRrd12bNEJpCCTe1T6wCkCaSgdA6GMKR4LWoadb1xGmjQ6WZj",
  "key15": "3kr5EyY4LmD79rw9h4Xr1CbWE5FeLJDk7uLcbYgeHkwa9xLma1e63aktuJK8tyvkxstqfGvrb6rWqbNCdVnyjx6H",
  "key16": "5uhJ2UPLHQrcUT4dmvwCaVds7TQ3mDVPXkvhYauBPgAApGJhhnY1HEpGwr9yZYfZ7scukeGKPgmyZxjzHSNPADgs",
  "key17": "5qVtc1wiFn5dLS7ZMXUbMh9jM5a3LGE6QtK6mrPSkM2JfFgZ4aFCBU4yBvFPjoyeFfVc9sWA5cmPN5jD6ffWZLfU",
  "key18": "5yk17JVFss1CCxsSaJ1hD21KvhY5cm6gL1BAxkWJ1mWcbmS1BzKbgqsSw2GdLRR2jUmaS9Mh6Gi2fWe5cBFXWwXR",
  "key19": "3T9VBprq3EKsZa9GW4oV1btgB4gL6iWmXgYFo4KzcXshMVCMhAfubyxM4kR9k6bmz61sLKdZu6DSfQnyx3qdU7TW",
  "key20": "k4DLCU2jcmTfNsq6ArdnhGzW5fFjPTybfyGpfddxGNWW9f8eaVrQuoqcy5E9r8U7zHbMpABwgLi7SWyYJVupLXQ",
  "key21": "5VwrUSUT4kQoUb1WZetwRJcVwtBEgCoVqpDgZyNW8X7E7KCFuT5hKRgXZXxwrTa678jHErBMPuJDnVugxjzj8H5K",
  "key22": "4XEuw5mLPoM35WomkBvoZuTkSU8J16RwFQTxtSDRxBDTz9zVvAYykS2ZGomjHBuYG3hDDeLdHc6wXUccQpUvLiKK",
  "key23": "5x5HwAf5tgaB3zm85CfefnFZLLTGu6m6tYkyiJaN6ygLzcFg8RCRPqHK5fdPqh1yE1Tkr3HppbQWbY6rz5Eu9RoK",
  "key24": "42ufPPHqRaiYRfG347WjxKkQfZbzHJ34jgtczC23S39PidEgxt5cZcpVZSsHqRmcRQwLhABsQF1esgG8Kj4d9JnE",
  "key25": "5EZw6LTUoHHyqSna4JwB6a8EXuk4LtgMNgY82wHYEsUTFWqhqUKfmJc6imKKKXATMHN9tYWhckmTkJNehstQpqvw",
  "key26": "2K63Nc2f4uLcyMbmFhXUr39c9aAzV4Tidt88FFRXjSVac61MDmrPHxMFc5mgKLrbqeDLBGuG13CajTfCfMkgPbjv",
  "key27": "5Xtay9xSRBbo7QdPkDqbk9ed7gFeTEFAQMaBHDLVmvrN6BUqFFYPAXCmMwpAjYCYGg5f2t4ByXpWeo8hMriRjhTo",
  "key28": "2G5BNm7prJmASTCdXwJnpaSbdzvZDtBLGxTheUYZFPYwjNRCm5UJTfKywqVSSadNU1SjwtE3svhkQJVMaAKaCmkA",
  "key29": "66BSquxJCzAbvftK9cnKdHcvv8qB91qWvwuCRKP6pAAufhG2m1VwpW4WuVkKUESTu2g25vaknAe77tUjQHonzJpa"
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
