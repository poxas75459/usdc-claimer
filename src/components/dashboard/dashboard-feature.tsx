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
    "2fh7xBa2SZbB4XwbHLWAh6G9VUDKvSg6mpibpT2BdQXekEvRBBPjZVaU7ocbqymNwf8ncyiCicMxhxcrmMmT5ZBp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tQEmGSHr8ryMSGZLbt5XGwjyj7cQszFxtCPkVbyUpUzALdH2KhQuyvz9mGV9zprDphVZQ9EuPbtHsEgpqrwJd9B",
  "key1": "3N5eXoHBJzrNhpViWbwPvoZGdFe9LzYRFuH9ZfdLAkx33VuChoXnW6Gd7xgyeRwT4v3Rx991HxLLHdqFCmAV3hs5",
  "key2": "23hreh7eD3d2kBfAeNpXzDL6wUicuzJBtKCAuqpu7XKGBZHoDqtgpLaYe2oDQcM1onfcqiRAyWvKnukJmvBKaHNj",
  "key3": "4qvPfMKoJA5RYJwzqDJPP1ogtLuBff1opQ1JeC2qaDC34DCb7d1uuC6NaqLmc685paa3SST3EZ4pV2EPQ7SJFEFM",
  "key4": "4b7yhY8LT14KLpAxuB9Xhn2ExM1DKYDYE1fAbQSi5RBd2qTXay386MRYVGMd9BxPUXY9okYbj2kBxbVLbMfGVU2j",
  "key5": "2ShyXCWW8DZs64XqnxyNVPVyEAXMMY8q99xLbUssWcyG2Niga7cfs2HtJQqpW9RNDih2nMBvyCSPoprPaCZsPZuQ",
  "key6": "2ekrnXNCWk6e4sT1zmsUJjpwZoA5Aftu3m7wsbaookBRMDGa2GmCjcRYcBj6xukdXXhgqbUDgVMEPCDcjE9sg1Bw",
  "key7": "2a11WY7ff1EcNDiLQhmirh3zVhGVL9JMP9e2MkJJtA6mZXkHN95K81KnwvQzuEabbVj91N2Q4bwWnHcKMVAZZr2q",
  "key8": "2oxZnJHDV51d2EtWWFVYfQgez7sCAMbVtBvGd7XVQ7pN9fQE665FQZf6hoKyHY24X2yt91KWccqA6VSrgTc7EKGL",
  "key9": "2ERC9CogsMW5pqtLi21fR3cXK42baX4SoXDEaarvHKqgvyYchGmbE9Y4WS3HTEuwzLte25zwxsPzi96c5jkDDUmz",
  "key10": "ybVveGKZW6jh3dWjRUjRomaQdD1s7WsJMQpC9LmWXDhrKMRcYK5Ha6eZV2YBF3aisLhZbtHh8ZRHQR5fFKPUtTv",
  "key11": "3E1xVMUT47w7FW5UQFhPvnmq8jLmJn6SJhRR9urtB4U7CqbfNA3jChpLfFTGvQYsEMWrUorvF9Qw5Pq1qhYC1Wyt",
  "key12": "221mv1nJVa6x7P2gNRJGre4JsXo28t8QfU7N9v8awKFfSxqxukDyorQfm89o8qSgZMthu4RjhChj7p1HXWaT5CP6",
  "key13": "rt84U1rSNwKKfwBsQinF6Ueub81H8XcbX5gxLsVn3TuTZTQhqUTk2f6Wxv1zpQqUtCJFcbpTNCnsgGc8oH4xxap",
  "key14": "2Bxgs7uW3knGmWg3EaeaHo7WzKXFxne2k53Lw6ZqMD7ov3DWKoE6iZFp7htve8iqu5iFcXCmoW3YsPMGLdZRy4yg",
  "key15": "5DtpJr1sPqidXXRnqwhpi1kWmQgBDk5r4PAUbVBzY8QeukE1RfCT7WgBnwugczk13aBMTQGwy3arsv733G3pSzNz",
  "key16": "zkGEYCVmvku8REAYPXyjZremAjubMbBjENbtPVZs4SAWqGeHsuwznwPU9zy8saizqc8LTGHPiqsvWwJKRweGYKJ",
  "key17": "45JDrfzCeqpTMb6AcWKFV9yDYnE1cLjbCA62nua4dUDyjqmi4xY7tfsTdVeiYqHQFxixsxf2pKZJp2zA3TuAsFYQ",
  "key18": "41FMQXj9ndXiDHaiHpnzUsdFEiSopnq4zB6xKBAJHdbbUe9YHXKJevtVDGnRHs5AcYbRE3CKUEVy4oC7AZUDWTad",
  "key19": "3EFcTZ75KxFjVGDKkaTZof2fG3JAucbrGB667ByrsX4bnCuh1iqQk7sUAaQZQAJePBdKdAvT3ec2S9duiydRPVV4",
  "key20": "43jqfoAmxiKQzM1YRRbMzcKRq1xaUcN7fAUALKvHDWp68C9zXQLZUEQD8cZCtubxv8xDWEMgt8dmhPG9xYUX1oac",
  "key21": "5WFHP5i3N5zR9SwyKJXYrVsihj1Eniwzo51Eknch2P6tQfPX6iJmN4SqfhYgbYeBsmQoG6HiB6i2cx2TtmQpdeTW",
  "key22": "D8HpMt52N6CS2LxwAyJKp48y5itqHxeYEkfDYC6KFDzwm8i3fJ4zTe6LkBP9rXF1yinZyuyXqkGU3T2GZdvBEnG",
  "key23": "24mM8u4hVQ9QQFehxorvAHGkB1UgygUdjGA1v97vzrVQ1a6Pctt6BrEYfpXWFP8Y72rKCo3jv2DgJ56gxBY11rka",
  "key24": "5Hyk97MyJGbQKJU8o28J2rv8QacArxproHQZyJ64qxVzXDq1gE891c9wbLnctL4EcyuEAuLv1fPeoYKoqgJT4WMM",
  "key25": "446LG34wQJximfSuN7E1mQF9ya46i8hFDxRvuNZV3jmejyzX14pxfChDPKaZMEV497VocSeQu2MRnxQ9gaQpcfzA",
  "key26": "2Vdb61xFqmrbEdAU1s92kFqy4cQVniGFB51Ly6GLMCG7q4GX1K7219eTSbFKny2pZxbVtMj4EZvBSEwca4DAZjeo"
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
