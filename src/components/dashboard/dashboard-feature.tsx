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
    "3PUKFcuzCguhzHMhF6wfAF5GrDzpwX78AG6zGrecDVxgxTk1SejeEF2yoeFGh6HPw3qXS4yrffhp5pfumkqYw6z6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3CuoguL1nx3wJALY3cugELZyhq77edJfvP4Cgcq4DzW2VAkKTGLGqpYzNb9RrzLTEUQFK9mCj6o7XGZkKgXojgP",
  "key1": "3XZWNGCWRH1YvaCjgeedHB9poHHe2zGsPPttrhL6FHJPfP3zHvJ54ag4vKpnCz91NNYCRqMTxEmHTjgdddr9KvA9",
  "key2": "5Wp8RCG7KAikaxJEyzsuaYgVTKpr7E5kTEg3ArZEgqJcpJP49eGXCFoqJUK2m5TXewpF6hdk8XxFENWDK4YbK5LS",
  "key3": "5aAUp8hf3B8pSjcV9du3zveiTz9j8YLSkinUudz1rxNbcn2fTor9CmjxfCat9yfXFpmB5x5bY3iKthTBu4FM47jx",
  "key4": "kvQddyzWoU8kLCcLE5AwKgJwmzWuTXsroaafvKXf9KH49WBBHEDHHtN4Bn5Qg2rcv81kCWe7egdbzyxY2mcjTRk",
  "key5": "61fRpbGCds5kjr5iHKF3kZed3mFem4YUN2ccdoF24uW3UZFjJLKgT9wP9377bnC5TAiYpGQo61XiyLtY2ocs3nk3",
  "key6": "4BW1Vk8WpNLdm4uaaf2o4aVR9S6ow1iWPz5g7PmbceH3fyU59Pz6MeQ1ZqYf9eN3LmxKAVQfiXZo7GiT4zZZUj6n",
  "key7": "4QQueemKezyhMDjAS9kpgSAvgys6dxzNjNJ2J2myp8JmnvztUgWFtzb8v9DjuH2Pok5fSYEZWtV5vHpebjVjV9ns",
  "key8": "5ydVJLHAsc51wRp8AdaBaa4i4U7fvWWFGCsLXRVy6ejbjp63hCQ7bLkCq4ZXG6dAFgboQu1VYmvz3XEiWGsc3b8N",
  "key9": "2CeeihUqPunsJWNBk1rtBxbPjwDTz1kXBwRrYCJ8spXPyaBV8eAsRfMMDEfW1QXFJAd5hBCg9RiUuUinpsdeLDw1",
  "key10": "4PhDSrryq7kXN2KLfVK3qMWa21MBPhx7HEY8WdenvBAutnNtNBXQgwmoB4bJv3Ff29vHwpuNt6Tz2oVkeZ3rYMr3",
  "key11": "2A2knTJzLTBRRQxbJhLjkP5ZXjqWEUBAgMzg1HA7P5vSnJbVPG8MZF5g8CiCsuqxzGxcpq8R3VV8ssm35JtdJDMz",
  "key12": "2eDRnBsfsrUxhn2AmjkQnmHNRVqH9GJoZRg3AY976YeU7dRQESnyvG4YzogBcpDf4t8dY7rqhjwVKmLXGtB5MEXQ",
  "key13": "3LYyX2tCsKbzqM3KBJP3Z9wa8wRTyECt3PaGtwGLDZAjGbuAgYuEQQtCjiAjkEbWzz21qSswdKxBhpP9FtbQ2Sjn",
  "key14": "kUFXFGb85drf3t8UL7CyZMakC26j17KtuaY4fXdWzZsGimaqp7BrrK66SKTZ5zLrXRbEbpuMYLhCM1k3saWmBVf",
  "key15": "41gsnaDYeyZyp5EWfDXw2etQwZDmsm1G2nnRZYxTezAuQZDc4QeoXuVKEru35daxAouCY2t5JLQ7SEv3XpF2P5ih",
  "key16": "2XsjeEECKHL43VGt96K5Pt1fCx8VR3VtWchk74rpKetPbvHkcFye7vNT2oEnqu9h1Jbzgpm8GGP4aM25wWfm1WBD",
  "key17": "38ubexeg8NGheEThgwxyeZ2PusGoEJMnUSSydUXX486joRREL5AV7d85ERUh9MhWYSw72enGDyP1XPP9VSKgt1B1",
  "key18": "4mMmGQthFBC6Hy1WuPjGJu2MJt6RQHNUEhgcjvsrodmd1dS785Ko5PQ3D1DZAYCpGKATUVZVcpPs8tocjUPFfQv2",
  "key19": "3w2hbzBxAzzeYo9PBfFVACxiTWzoNHsFLJwaz1priRsU1B2zAEDBp9rinEDf7wMgJky6HibenSbtnzwYKDY4rcJw",
  "key20": "5g8bjhK2gqgV5AFar9ZsiL5AKsT8pvoThFACZZCgRVBYC37wefPCKAnWMLrBuHDrCqzpLWGjwN8tuWmCMH3PxHxH",
  "key21": "2URJ7dc3eH7rMRGzQ9fPXkYpy1ev77snNTXc3QNhf32QCHW8WrJnnnhzxKQysDqzXTYjvV3tX56C2mNA3A7azMrg",
  "key22": "5qiXEDpX2Kkz8uoRDcrHLMAsDgtUeDDHHUdwh2X4NWYAngvApxRnP71Rme4HJLjKvMW9rrnui7SQaYvUcmziZ1Ww",
  "key23": "2d4Hvpq8enGRNmvaskmdHnc371MesXKyC4nkkp7MvrzhccfoRY8oJguWorn765kdEtpQMwu112yUzmnLdqef4MEk",
  "key24": "289w5DEYzBWefJ3N5C87i2yW2PVBLG8f2cVPr5NwbPr4aGQxDeuAs4s4iNtNKx3v2bykj3xCuSNkoMXqRoA5ZHhQ",
  "key25": "2LBt9xJMGTtpPYzX8SK2VZXqeDuYNZrQdaUtwXPi6U65YdrVXMyU3xewEhX1mtsG1S67iQw8qbYcgr1HqordaVkT"
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
