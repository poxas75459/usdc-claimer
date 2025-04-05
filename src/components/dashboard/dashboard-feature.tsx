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
    "67gzWLbQJLxC8bcyr676DzU4o47UK5T841SD3AWwrdV8UyHn9YoPuTDAKNWrWrsM67MVmPdQpMRfFq5mtq6T1rkY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26p4X53D5wsJNtB5aBHSQujNtbPjrcVvQVmUvNzBHHc27HEQWP4tMCUK9jjE1CSqi9iQmUSvMxrf1SwGDrm1Pr9L",
  "key1": "3W5nwqBGecHmtXow2MxXZgKn6WgNS6Pzy6C1GUt69cwrcjMwNC5Bz8CideuMfNX5Ugjw33yfR53jT4qLQYBdPuHv",
  "key2": "33gUcxXkzNSYcgyJ12PGsRkfxTzByCP4JS5sZ6ETjvL47dYe7BMUaFRtkeBbd1H69gdvd37a4YR6xrcuGK9Ed3Y5",
  "key3": "4AMyXidsHJ14mnWdiENKsFh98UZyo6cctEwnv6XB2Hhtcj9bf9jMY4f6PUcyrQkAYqSewQ3Tw9FqhWcaMNZ8d2D8",
  "key4": "2Cdep4n2eHYnkR9kDgsVML1bSXf1QL8VWc7t5wrC6F5KizJvVW8PXDjKDWEWqYQPE5eQpdFdEpnUUNdY1DrRzHJJ",
  "key5": "2rab8wyrQVYAyXUiUkxDnsRZPxBrU3jMYeeL7EdXNFr9vYU5cCGzLNGLyHsWz5cLbpk2H1FyEEoPQomzZ4Tysf4F",
  "key6": "5v2Mw8mRHHuVm5xGXyH9thoEp5WYXQBSFE49xBhy11A7X2SeyNvjYRxtwg5GjELH1wDWUBTdQpk6bG8vR1nH2BMj",
  "key7": "5AgsVoo1uufX7qbHBSWdsLfMdjZDrBD96QJg4WT3YB5EJBPff75cJL3yjJGMrwSeQiVT6MivyGDaMRq3m7nfrzDP",
  "key8": "4YsMbc86yp8xApwpobsJfNzMoAQyvGb3uUchpLUxfhx8wpMeh48aq4RCu4FAaNuFywHXWFTERbQjkMqkNVf7NGvH",
  "key9": "2heqtwpvh6o5sf4M7aDNVYwYaTn8QTwpHmkjtSS945hg6kHTpUY6A4pBGwiNosNUciLxycyTuePr5PX4xtuTGmsn",
  "key10": "2smFzyWee2izYKLZX7bH1JdtgZHHmDNSGWZrHSxugJkBVAULNq9DQjKRWgVpHbiLpabGdNXM7StaUeowt4jvhnDx",
  "key11": "3fxfZoo2ZStwDh7VF6Eoavn2YaHxxYgfthvMpgxxDquk9mwbChfEcNAxb2a3UZunBT8LwXEtP1hvhbhmiV76KiTX",
  "key12": "3Xo7iQGnVK7CLgfbFiPaMSscxVtXN56mBi9wCKM6QnGwcYF47JSsxxgXtNTPi7MAycdzGNMQisyfKhMAhXxQti8T",
  "key13": "3URR7EiTQkDX6E7BZ9XYyjpKQSmDBKif7cRhpg9PgwSyrWFxQVzTWUH7YDmXw2znUgA8SpBCiBJNyv1K7UH4ECjq",
  "key14": "5P2xPNQpn3JRdWs5MMqD9ssAfWuUpaATiwqHmdccWn6sqSQ3Z9VdKmTjcKbncBqh49LYRaoocVUj7Rz9KwBSvty4",
  "key15": "pa3B7vT7jB9xXUtRX9HjnvYxQiw3DJnaBKufiWiZBbGg6JKyR4tDvJq5osLCbEz8DdNmUUjyM5fwmH1a8Go1RNd",
  "key16": "64wTrzXXWNSU8LHPXwb6qqYkvQFuNUfLXRqC1dVLp494HLdtefuyCN1uvKR97U3s5waNH4MZsmq2vRQy9u4wD3R1",
  "key17": "47bDPZ42wF2sV3wKkyGRiN2fev3A7532Hu2Cd1W56TyA7XJ9A37QNKZhCY4DEyn6uLHeVXafjREYmiqK9U8BRTdM",
  "key18": "3HZtZcVJjtL2KU654q4mQ4whwF6urFTh7M71FGxZYWVZWRiEZM1zE6mc6AsMsxSvKn2FFDYCXMGYCCAv9eC81Jfy",
  "key19": "4iHwCYhb6YQe1g659DdPZBen7NaxPTmkbZTA43pWwTtqYjz5XmMdbFLL3dP9gbZdze1isq2XU8t7m6mYcGuSa3Hn",
  "key20": "3vPN3d2pQDiXjnt8nqFJDJBp5a38tzwmi5RvYY49xTwwDWUGpng2khf6dqdoSSG3rwaF7EwYG4AsWWCNk51G1CPZ",
  "key21": "4iiY6evVdFBvPPYrXr4FAivcfFTfaHHqmMTBsMEdfPRs9FM93rzEcfdc5o34yW1Gkj7sDxr3dx8gLfGfMEQB4uzb",
  "key22": "4GVnaC2Rkc8qSTtAwxGyQSeYNtKWVCqh6vT5taG6ZLnxPVt2Eedc5JK4sywKXQnpJetmZTEwkSQvbzoDFnZFgKjD",
  "key23": "5FSN3yzL6KYhsfd2SU4xsR87n2SVG7UGwv8Vxu9rA61e8W6YrJTA2fiLszM8RBGgHxMUC2ioJsQpdPYSKKYZvry9",
  "key24": "54GrusxbAzEQbvVDoDp4iTjLim5UJk8tecy3fdpMVzUiVnvYN5TmGUReXabVGqxUmFLrmEbg8Yt8XFzq4nXqQSjB",
  "key25": "5wMJbu2sJywiThhcoPaQG1sYNX8uUM1zNPUefmg9AwSYw44NdWmAb3VmF29Zh1oMTUk96iehQRqYij8qKTVJhSez",
  "key26": "41MGAGrSjBfWn3irjdSxetqC9oYacuMudm9nLXJNH2qcMF7ZCGC8MMiuczyH5prLppQh1DWeky2bs3HcQUv13cdg",
  "key27": "4rFZYDMvrAXZXt8eZrkgkMZx5BGHfwZeadf8Dz2gu4nhj3LdvJxbGy5J2BP4KeYDz5jvH4joAMDvXpfbCujLB9AX",
  "key28": "4kBD7CHmnPTwmrE5p3Aq76GwRXqPprZEA9wPzKVZPGCrq7ZPz3brEv5NUr1hVh78WbdwLErMSx5DErxKoEzY15L8",
  "key29": "565258DW3wLdKUSm11fwxgdpXMEoFushRziUReNJsdxiDUwXzptJxJtrMfiSyCDJPUjcN1VegV7fGZav7jpdr6Nq",
  "key30": "4TjqyuPBME5nR4X8rGxnDEQpb9i29VX6HBuWvvpWtCHcv1En15Qi4t8n4H5pvPRPLeZBJPUR1xJageezr4dNQcWR"
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
