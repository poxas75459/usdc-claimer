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
    "e8VUD9D6DMLfgfnSkBiwcPYv7DQ6k7sGX9ZPwMuDCiF6z7DMfDWfoN7yzoHzyKrVd1FMtLwMCcuET6LBv8BFYq2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JcwXBTRsQj6PBkGocpjKjDKCtTYPhHJHva4Jeu6wvjYniR3xL3LWsxLnUkcDmMcXGYjLB6NcvGViMzfRZEZrfMH",
  "key1": "3oDhcnpRVN9AHmGbQKHi67ET7d9dVrVvB2Byede42szFXmYHErYXJbvY95jjjsR5pdGP1D2soWZUs3ogbEZuLMX7",
  "key2": "5Tot12bX8CYK4b4NtwFrHXR4TQTWHquNtxccpPKpUmH1nXwBWjSWLVj7P9w4DTn8yZbQZueB2RNe9fTKh7YwoHnS",
  "key3": "4mj3DA9uLdLDymCMmFWsrvKr3wg77yPnpQDp9CeYMRto1G8Z5vvnFqBLrk5B31Y6pdpQ7H26pu3asmdLg7XG2yK5",
  "key4": "126N1vUxNZ8C5ne1vP3HqGj6NByyBDxAeczrqDfzkGcoBY7XSXVjqj9CQeNsU9doJu4qrrTsoRVfjf8rvHFon933",
  "key5": "3XK3AxFrjs52hpB2XUdSKb74KVrLhmiUmShP5brquMgyiLpyqByh9dNznjwniPXU9c49dn6fU5Gn2hd4bG3L8Why",
  "key6": "1RhpsjWgLJtqvsXAqQqdvQrAjpGx6zjaWsw2yFTLaCeU55AoSwFRQMT61Hq3k8Hei6ax156EHRdnrPX6oSXQ1uM",
  "key7": "epHizS875yAvr7G3LStiTZHFo81LL7FrZbQuRKme6YXwHi5CL6924RgMY4mfnkAM3tJqeG2yE8nm8gjmmPANoWd",
  "key8": "5DXbhLgcAA2PYn7CXcXCq7kpcwrboWD5Ekx8mXu4DqxP2B7oXvicrZ5dv1QuycsmUbzebesXChK9knHaRz5h35c5",
  "key9": "HZNnuubQuyHsfB47o25ooaHWhYyg6foHrA8AoArJTxRoath75aavyf4LTYmkDPBrayySDBLQyEnxQirsp8ANdGy",
  "key10": "3rHZb2bFTU4MJpm9SSCvXpWmc32Uu7j5S9GPv96uPTvN3Cid9bKfznacAACpDUeRPNaBWpiATMFYPBLaH9vf3Bbg",
  "key11": "3JpKu76ajHVwsUFM7BD8vbfyiuCfyqLpKSGQ1S5tzSP22S1LXGBrKdoZaztxfaQ4c9oA95xRM6163PbfAYW4WLez",
  "key12": "2jKRdHM9AGFSV1hPfbe61CmX9cDCs8dBNFi6KrGT2uRrpg6x4HZRyUsaACYky8ov8PrJ3FBgYUgQLcaEHZoycMHB",
  "key13": "58tG5TxQ2BWnm2p1w8hnkF8fV4y9GRhsvGRNRJstJSDZDCUV7aiC7boHg3pcy7fvquEp5DzFq7Z6j57SFvaRJTG1",
  "key14": "5xyddC6Mm2sZxZUsMX7UjpEAKVkgmJyfWKo9K1z6QXMP5VmjyccHtx6NUEug5uDDrAyMd735MvyKbfxbFnvx3YyP",
  "key15": "3pHaU4qG9DZVVv942gC77jQH3toRMAupnKtr1j6dh9WbfvwDZU4AQQ7Qk3dAgE4PrwK5WRiBQnkkfwEcqXMW8fTR",
  "key16": "32woMHGwofm2tCLTqooFZ7Js474QFz7z85whVz4J27UXSF93t56b4qjqZTMi1wRE33Q1EYQh5qTnNk6wthLMt2oF",
  "key17": "5QGErHt8HX61tDS5XNNobJKrPQVaeJF7C1qWsjfosXsrACgDNxDhC14VMoFHN2YEe4RwQtBfozGv14DiCgpt8ufm",
  "key18": "2kgCec8vQpxACPARKpk1Y8dVXqgTyJoZ9JJPy5BkY5uLk8DfdmGHdNkPxw79idVufKTkfHi8yk94789TK6ZAjEAB",
  "key19": "3RwgKWXiKxXfELEwGCa54rt5g7RGTRdLJK3xbVgWtGidE6rgNiBhCea7rNjyFCPqzoVUF7LAzHe3F9DKXPWACT61",
  "key20": "5jBs5xojn86DbevK8YpgRzL8Tj7tLPktchFBj7pjRSwrEQgccTEpmDTQJZEXmQ2Fn1fx5aShym9CKjuxaW3myjhJ",
  "key21": "5ZKPNTvuuKLw87JpVwzHXH1pYR6jiNqY3yuystmDuDpgwjFqD3MjH4uQVVfpmS5UJ8Syvbd441VgjpZAF8SLZUVv",
  "key22": "diwN5xFGVEiK9iwGZ8w5jJNjj4prVPPK1xTBZSTJKaibnX4mndykwpybZ5YYnNNx4hs16rEyKNjxs9ypgQfZ4Vi",
  "key23": "5VwuJtb7iTfWBQTe9y2xGpZ4CxeUppGaNEDo513EhkKR9YTCGSQkFw8TuGdrrWxy4Ps2fAU323oEw9wvZLLM8CWQ",
  "key24": "5byxWtnhnLiP6koEFDtnedT7rpF9vreYwJrUiAkyhSak7kX6H4yDpSGn2t7Wgfvaea1d2xZwyPhNnDDJpkzh2ZDP",
  "key25": "uATKsmPkbLsbzW8PLLLqjpwaVbV3D8PYW3atNAhMHtXnZHo4VxZbbFrY7eY9MJYjD3Yuf7GLytgTybiNrCVD9FP",
  "key26": "5AykrqjjJS4pEkYEVK8Kug3Ju8o1EBK5u57SyevdkERdofokztL24mGCHiGU3ccdZfGcL7t2QaFJByJ8h9XbkqPC",
  "key27": "3ewYm3qzkYh4PBCxmEV3cs8xcfjmwrWJ156bDo9zzT9N2CQHtU3BeiBfjuuvjU3cwaSqiQxb9U9AcodqfqVZqnMx",
  "key28": "4N6UNztZ1hYtUhAV1wMT49u7VhYb5GR8Cd4NhfmMhMXfnpR4zLeFUbYZhyCKVMvm1W8QTPZVb2yNUyck6xute7PF",
  "key29": "29BXF1rdgquW9i1NYzx9kHYi9zJYk8Wj5UVi65q8K9wuvNS6cQKKJsVbSZy5wteccR3Kt6xRroTsbNGtaspUDGQ7"
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
