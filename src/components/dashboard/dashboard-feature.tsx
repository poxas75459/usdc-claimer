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
    "3zFcFUEeUz4CSWoqBiPCcUeH4qEfSALFbXFyXBpHrBFSnbj3zjh682SrVMxzfeF6bQGB84i1RQkyLFRBmzxbM6XH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59FU8mFej28gunpVtz3M18WbqWpUYrxXQH8mQdivHdxo2jiBpeDEF4QwoBvdj5QrhBWYoK1mMzw68eGWnXW6XYfB",
  "key1": "4SFB3aoZaZnpcuQAeL32CR68G4B4Cdx9zhgJaoqfW5djspp4HuehW9gwbVwaysHsHpR5bZRXFWLotDkUEcQvAqkx",
  "key2": "3REY8TXzyN8u88iPBAnKQAFKCT3q2UHJq1k4nupTaZXG5vp2m6crd2dNGvSrRC39ZPqfaXUxJYxasWPAGLNpYhAZ",
  "key3": "3MzXCt2wwnBQVd4p7PQuzCsy7CjFxQ8ogts4mhjrhFNdvpLXM3Si5y7p6WnatzMip9WwjaYJW2DyEGg9UbFCvhiW",
  "key4": "ndoQbEh5D2mC1b2oNtPbRV8akgmtfJ6Rx9PoETxEVZxj9uthXE615gFJyhMCiUzgHCP8mxdvDgJ46oWzVj9rUFj",
  "key5": "5NGPgrnfa1doFA4w2KrFVBtPo8GfcpeVtRqpKT8WvhzhKqUAfxdtLpx1VFATcku4AoRN6fDVQpAXNGL2fxN7XHhH",
  "key6": "26cHGmB7ncXcKT1n4VjmG3ZhveJ3SVYA7skAdJgtBevVTxSNvnczCfTE4nGv819HbeEmThwixU1fknN9qWwCh3b8",
  "key7": "4sgxTRj7hpsSe6gggbXFYRftwV7oGZpsgHC3FVtf17ZejHvmWJsg8bAHoXJ2yn93w7iScBzddqzYNbkaxm4sL3Z2",
  "key8": "32D1TqDoSQwU2FwNSkHRXwrDCWiYqEuyMpsLHsKxEg3zUQXfbSjWKcmqCAC1KBU966zVDjT74nwmCn1UesBEN6sE",
  "key9": "5owFKtgJoJJFenVowUWJXEFRVn7T3hMB2nvo5Xn1QFrjreL1AN3AFHiUpPe9Y7fR2VPP4XFikmiEN9H8YLB1WhUW",
  "key10": "2ZkYuDvcbHPQMjLcY2kjvpLqakPuvLryxNJbjmzymCsYcb3nnhko82ekFVEktrw9bkn4puuXEzxGm8YH2oPsK3Xe",
  "key11": "KSWJxvKbW8CU23EtqJuwPsFLosHSxb17Lmx9sVG7xHi9594khAfXqSXFiMBvDTm6dToZpini3SEP2wJFaCrMrtH",
  "key12": "2vBqfBZoBs3q7zUanYxxeW9d5h5vgzyzimETVWFQJNLTtM2zEt6SWYis847wKjA7fSaqjC8Zg7Guecos47wZZUTJ",
  "key13": "3xmRD5ghjkWghuKEvShDuiR4X6YVY9aGLo6q2gBopXrbS7BYvoMQJ5T3seheK268AsHD764kifgqDxtsRQ5EeJax",
  "key14": "28DR5vTXQLFy5kbNrbJTGB8cxVZjaXbXgbnBLfhACnhdnbWLmPivaGKcd8xbd6omULPv9ESsRgRhUCvdKA5n4epR",
  "key15": "49DCKHtFuLqPEvpjRnYXCp8gN6irz8ngTzLaXHrwKKmoM44PUKTLobZB7iqCGszinBKU1WXVDJuDGCvgQjHdABnn",
  "key16": "4aB4py6SdYq9WjTRXbL5biWmHX9rqwQdgQcJiwujt7PkfmthdL8iL62ZNZJp9BuibBBEVmxPMpsWrqCKDZ7iVSP5",
  "key17": "WuZ398Pb3n9RM6HJRtazBYDrXD48z6hctLrmUPsNoRQmXrXjGRtk168pLsG4ka1Cdj3N5JmBr9G6FPnSEN55eCC",
  "key18": "45WmiAPxe5vWUkYvHtMm4zBj5WWz4xshtY8QqTCNZeEGoECmzSjmoDuKPaFWNMvd6Z5DvWGpi6BdoFJy4tkUU2kw",
  "key19": "2KTEjhvAiDxVBfqRRdveCdRiEhKqCvutj43LXUPKE9whtX5sqh744JNq72xb9RoLoEf3f8QnEhXQs1i3XzFkBoPF",
  "key20": "5jq7n4z1eUeHC3MZCqkRY6hGwkLsMtPaNnXJh84Cu4jW7vcWL7xdbCogAG1p76C9QZGn7SkCjJZS1VzeEy7jfuxB",
  "key21": "3twpgFuy5N5B4NRtsgyBf359pJb4jeG6eN7DrbBQp4Bs3Jq9bxYKEU4CrJdszQBY4DARg6TceT7Tbo5Cm99FzKzb",
  "key22": "5nMUtvjf5B35PHjEPCa8BBr9G8MMs5nCM1EDWqBN8rDHvzsidFTeobDWr6wdbhL1WFbC2z6BKrMiGqPq2PT6LHfR",
  "key23": "3Jpo6Sp519pSz62xYoo7DW4ssvfq97zPyfYejKuMQPsH2J8H6T3pExT2czZi3xXvZR45Rq4ncfiSRzmWbEoAS26i",
  "key24": "2Mcu8ijZ5wL22gK51f2GwcfzByM71j5vdcnLQBd3Uc9r94W5Jia2THPyQmCJG9fhwxYHLaReaZrEaNW5e4pVHPDx",
  "key25": "38yo8CYRZqrdhqUX6Y1h94fnBD8eJpQq45rdns3H1yT8xq1wmnuTZHgLS4puCQVF266dduBnc4NTwY7mPv4zRaJB",
  "key26": "4eWqs4uqdQZAxED9Gnob3hp1HnPNGZ4eVv5bsBw6EeMQbwi3jCmrhhzURZw3N1JCJ6ey12RXVwPNTCwWCad19fya",
  "key27": "3eSUvp9f7bqFvAxmddfyzwJ3V7vN1575e6MQMxHLQuSZNYqnCFbFJid5zBJ1hy6RSWDXRiRbJNZe3Wt4v89t4rK1",
  "key28": "2TBndKiJjv2myc3RYDzw2XfangWYKGtM5qds1A6uZWM6tizBRWQjWJJ3rXyLYmfv1Qs21vkLx2a2ahUy1xpXpSwQ",
  "key29": "gu2Q46fDWQsysWRgA6cecZJSBuxw14hdWH3dhLZSFR2VYVCfdivcz9t8PsSEUpBkFAyvRortqRJux7ALRTaw2yp",
  "key30": "4okEthR51U4JM6KGANs1kHexAErFnEzAaxxHEJfbbdWyfLzqhcvGuzgnvE2BJYAuugKSF8QTCmuzDxrmk5DYnj7j",
  "key31": "3TkjYLYTs6E2xNvz6iuSa5PimSYpmZr13Y81TkpHn8pLdwhoD9jf6VK64ZeboY2JFXAWpKyo3qX4NycrpMCvEQF4",
  "key32": "ra3f73JS4oBmwAQYwAoS4oSxvXQD5QkrJD4EufH77W8Yk5ifDxM1XNTMw4GWqzNa8YhFcUhoXRh68ciHmTZkAbJ",
  "key33": "UVrDCN87cD4KLL4beneQNzuiQX4YyDrizEhuqByKtgHTiBcU8x8jcaVUG2ik5ERNSWQXpnz63hHpR3wHNcnF4ta",
  "key34": "37bgLsRgk6tzwnvv61qwW8ZvLNnBp49EKaEFed4dEcv3cY3nYs831jwzAwpWSYrPdAxReLYY5vcCZj4KHYJ58s4F",
  "key35": "4mTw2ajMxSVm4vbkaqMjPFQynDyuXEJxcanc63LdUGygT3v91cg2fCjSzjuihD8BJg68vpk14gQ9MdAVjHoiaBmp",
  "key36": "5ayx5QAakrfSeAJupmxx87HtVxEvahkPKzxja25gEU2NJbUgZ4KKAkb7VvqKvM6tkWV3Qu8Mbv3arVWuedQud9kE",
  "key37": "y2eaqTU5wWmNQABG9qQD6JptA5iMUWwEYX6c2jE1zrpVhDZYCP9KbmUVLsHae8rLEYQGLKtzXg9kpb9rQ7E2zWZ"
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
