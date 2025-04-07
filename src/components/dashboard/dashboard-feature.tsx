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
    "5jCZLGzuXJv33mA2rK1td7Njn2qMcYxmTb7vFFzdekXdy3jySXxHhDy6UpbRYe3SXD22kExv7sfhU1XvmL8qnULV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fZgk6nk8j8oAEnALqXrgbvdXTFVPvosxTV13dXHdYu7oGnskKT5Dppwt2s3goyvqbjNRSaZU24UaPChCM2pTuaj",
  "key1": "2VLH4FezYEgNTx3DQKZwDtmuTFxsnC37d1N6s9XmJnz4v4KGyRimKGt3bjDTs2rEkJFrmtQtYcBoWWYiq9xKoxPD",
  "key2": "4krCYo9nSsdxzHr8aZzG6sRavdbtKJuVTDmzG2fMMbKDYXE16iNkto83Rp6CEYQHDqvazTXA6bdXQn6Vx6zWzcas",
  "key3": "2gcsN4AYeznu7WWftWR6usJ9mb4mWPUWV5kYwugMNQyviyD3bXZ9QxGP1G39yJK1zXBxHDzjKX37KL7LzxovU8c",
  "key4": "RnUMuJJDHQyAkAsoyWYZmBNd9JDTwN1zFnTgUEVWXHrGjQJcwebwaDWuHwSRoJy8WqfzT7E2LoDbvwRBKxsZNX7",
  "key5": "2dNi5cCC5AjJmgWxPkwJ4TyN3RxfUvCfZFraKYu9gHEd2DaGj8tLNZUx5tEXvdwT6zmmi5CF4iCdquwj6HXqUu37",
  "key6": "4GmAe6ozpR3RDAHTBTv9jPUocRqtpWQokVYJFJ9dh46GfxnFAUM5tDWtv1E6kTyscxA9gEcq6s7Se5G3oXjMupDq",
  "key7": "E4rd1KeK8mnUYeDxra5YHZQWV3PiRhzagq4vbpMXzJzUMy82Ba67FvtA5PGCTtrPNqHARJ3xbQb4ADqXwdu8XNm",
  "key8": "5Bo3s5RphYmPxbhzc5Dkg5sik5ggkPZk7CCrDn2iEgZJndFMR2aFkgFochwEgV82tBFUHGoo6CDRSqRtgLnYcvtX",
  "key9": "5kvEhNXaspNwXrM2dJcgm5imesPDRVN6ARpk4uCvShCzb5DoV92RGKN4ehtRfhC2smPDUr1dStJsbSA3aHTVJsSZ",
  "key10": "5in1mp7aTke86FARmJ9psKdD8uQPTTW1BTLWTUESczXrZhhhoUyp9U8RF6YsFCYvgfEhur55mHjHwdg6kkx8onqH",
  "key11": "3Pxv9KXb1c8ddVcD9Mj6k6XistumubWYnCEzJkdke65H84sWSYTkqXZG9sVWA4uWNXYUigNon8Xbrs62fbcH1MNe",
  "key12": "3Lt5D8YoERj2Jyrp1XfkXTLPnfaTX5VHh5w1rYS54HpDvxt6bYmigrJU8zHLtBfys3SktTrKZgfKxtGhocWfpTES",
  "key13": "5RD96ofDDgv5X1pa2fPJTfXtZshhM1h4XP1P3GBnp7VQruu2eHjifUBRLyrN6qjZCTKjf6PZio2N3KS2k3Q9VVCr",
  "key14": "39rpzmZkYHu41KMmQtnbubrE51VvAtJk8nfKZFNaDrVsSMR5qLCqx1KksQx3qiDxkUuUCN3oVeYG5B1hNdLXmoRa",
  "key15": "29Naz7NEJW7P8XbGE5hNyovCC93vBPe3cdE9iFRyuL3GScEnCFq5aFcswFucpT3TA67zeUh7xTt37aW3eLxAMpwu",
  "key16": "VVxbyk9cvKLxALsSre2DnqWiEZtqvv1qDySvAgLtBfq3Tnrmt8W4DuL35wmBkzysWncSKxHyDK792f7mBzH5Yob",
  "key17": "5CKizq1tb6CaYw8Jif91mYPRDyNqBBpA8JRd5uM7JbQW5qmdtBNXwnjR1YhFpwbwubLMrpG4P8MazjZJZAXTtJ6u",
  "key18": "3jbamFkWCQS4zruuufBQag96thJwtChf2p58xTydCEmhoM68njBP8oeg1qaN74VPNCHaLAc5VkYQ63Uc68LYY7T9",
  "key19": "4Hs6ih67Q415GiqaE2cUtHL3tJzvHT78EXbXduVxwij9uUT48dbeawy6mkeZxZMwe9zCsyeT1LiPSZgnkC7512oE",
  "key20": "2GwwNJyvEahtSaqvRqKZgR1KHpf2B7zoEK5V4gkw5hkcgUM3pFMXAbapJj2PGThbmP2ZhJLKxg3a1yPXGyBBzftv",
  "key21": "5YdPsH6Qy7BMs6cMPnrJMi2ywsgaYdXRvvuhaiVffJPB3eFJZpQG8XTxeufcxkuTcELXGsXFSxtSQyPbMyMquZxd",
  "key22": "GMuo825pLMkDLUm1vwFPkJE8AzNESak4dmsPe2TsHwfipgfMbcT168RkjZ35qwytJbzo9S8pYCWaqAYKXbL2FYo",
  "key23": "3LPcqf3hMBEnfub4T9bMP4jgTUQ1EQPntRSBt8hAs5kDxMxgPciKQbMexPauzG2o9eZAj1swTp42HkZbXi6DNKxw",
  "key24": "2MhpjSW5vgjBAcQHaz2uSUtHBAed1wMaoJgoFbatzo7tkG3iRA5JHbkVmc8ab2QojS3rdJV6uDVqUgwRsKZymxBS"
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
