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
    "uA1yBVbjtsSqQYSJYhKnW4K8bdgV71qRmDc17VbaLkF3gJfD2MwkWGfPD2KUZzUtFCvPpiMt9Dx3y7UBLBcJ4xc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fT9oj96xxqPamve8oSWKi9Mtv6XnvsRafvJiPzuraskVXS5cpf5myStsSyb6VAgsRXzj46rvtDpGWRq1ADuahe5",
  "key1": "4A4ZKu6am5GbGGvTgYqm1evca6JNRLdxyXzxyAJKbU4xJaxxj1DZq7YkVrMUoKgPo2vQny7puRhqwMv7BvURXe33",
  "key2": "54zzeKQoFuvwXTN6ByNT36yN93fNMgiK87TpyHW2rs4dnUFdphwWhnE89AV6LGc7SG1nS2wzpXiuQnwRGtnqD7mi",
  "key3": "3mmZesvGq2rUyY9qexPHnmtxD3rYgfQ92DQGGzmfg7yNEtJsxc19VHfKccMk5fUhWtsFWuRDSYBvfVUbSzd4ZFkc",
  "key4": "2UvLK4iebQBNKaaC9SyJJ9PKFKeHhUTW92fknARLH1WUZHJwtTuRZkC4sEod1CbEt2cgU3VVRYDongsXbTvcZqLQ",
  "key5": "4AegLyMje6d7nRXgLWFekueUYMXdqByG37yExxxcsBhMCzzRY2QiBoBzyN7oersJpZQmqCpxkkJyCkbJV7QRMsZj",
  "key6": "2cTK3x1zQZieLX9bkCLzgccwVmWLQeYzEM8wTrXQ4oJbLkkM2qeufB58MePBtVt1nJnUdjdMK8wEE9TvcBT4Kakp",
  "key7": "um4LsrFjCTKsrPwtyfmrsJqbzT23kzeQAQxuVEo9uuTcmMe6tMKFrPyLjhpEyA9tMDaxpNp49RWiqPVpwGTMAXZ",
  "key8": "5DvQ12sQsV1GniB1KcaJGyeuaofc1NEv8ZpQBsqtNwTfABQXJsWBmMG7RVTvpudk9ju9baZXgtPoa7SiFckSfhWh",
  "key9": "2xAzJbUShpCLQL8bv8BMSR3jcUdGWL3BVn6f6iT6x2hV51iMPyDnuVnZHfHkh5Qa8ZmS4m6rxxQVV3eH2pYBFSxw",
  "key10": "2FrvPYRU7MQFHSFf9L8jpbDSwkkuG5zwop9Zj9r1LFjzBHDZw4uZD8rvW8BdAZkLkPyGkGyA1ibEc9VDdjy2dqT2",
  "key11": "HZXUFZPqaVL8wK1c5QbQvKUZXk1z9HVHDk7t5oGCfwz8xjcuhDb4MKJpoT6wrjgWZELUBJnoxCcWg9Yyxg9bcdk",
  "key12": "2aX6Gg9noELSqtBSmvSjYjeKMv5jRS5bR1rwUqEXPKPfuWaPLQ4V5xov4QBzmB1nR1epCG5j2fjpwD3P2NbTdokG",
  "key13": "4G5RcUjL9U6MDhHPxBUbMd677tFr42RCK9prhhYio54j3XB2GnFwJ6Xi9icdEaGYSummfRfnbFKXNBS4hs386xAS",
  "key14": "3npm1H8kvoSMXkoa7REeWaXwXGyqcadx4RxdLXU6dXQHZ3MNiTvaMiaThT7Jm5h7Ua2oTEQj9dik83ef8rHgjG48",
  "key15": "2PJU16b2pBmyGp2gPKAB8bZvT9ZTsdANvuFdBDmbDGRRq5HBBBNGxaWBLQ92i3jG7d76YiNC1H9vM8MVaxQvvPc2",
  "key16": "4R1wBVYRL1zdeX9yhji5foaCQWBcBkfyM3fFbkThvcJYUU6isxspyFCqdfiKWv721rg8ZkUvgPhn3ZdUnAuGNdWs",
  "key17": "2BLxEL73sTAjuscm4UKHkdJmwE9VdgSbkTvyRAwvo6vX44T7bXTyjj7Y2M9zRi5HH3ZyJVS5gjfdTkRcWifSN4jd",
  "key18": "4cknSoXSsQEvqyAStqPorhz8dYcthTDg4KdmAjzDKZVJzcnrsKUAjgdF1PeZWTLknAHwNP1VSS8bfXUYsi344yF3",
  "key19": "2w4h9w5Rf5pJnMphDStHLHpkBzKzyrS3tx5mLoL9RdrWk3aZKgG5vLJNS7ag4QM35Vhhhoe1EtaaDzag2iqsMyRJ",
  "key20": "5XNYNLrDmnP1kWSrDzZKCMU98yGZgcPkgMwoQydw2JmTTYuqzj3YuEFcWZApPAVuH3ATpn7spMn7KxX8nYLdGWjW",
  "key21": "5P6RSXpQSUFucao4DhCbaUboGMEqdtJskZZTL4Xh1bumDeuCFyGGNNkSsg2ToW9gTXYTrVDG3bTnkVqBYG1b5S3D",
  "key22": "3oNHWVYSwpViN1JMGf61Qa73xPFTgskncqKCcxXPYpb1JRL2RCosKLm8sQ6i8CPEA22Xg37DHzefDEvqhzxC1rhD",
  "key23": "62HSMYhZ3HLqoQnPMQsT49ryjb5HYNGjCZuQLWaj7j5U5JkywSnh8YafQN5mRYNQp3adfGwpQ2jaydM4fKRRC1x6",
  "key24": "JVjqC75yKeCbgCTAtpUdSvwW72XNCALFXLHfyjViTuLL6Xqz7m6o1Dm3X47kWYKJdfT8n8UtooD4RikxLSCNz72",
  "key25": "2zxb4misXgmjQkMuA82yGXGACUZKZ5wkci26FEcvYj1v91PbdfUVMVdvtmMh3Mdz2H7FuKeb74ZxFXNLmxe53EVN",
  "key26": "2oSd1eAsg4U2ynRAaHxjCAe6w8R7C1XVtRs1hVAsspAos41PBnokMcrTFQNPpZMZbUhPqprBMKrkqXn4Tx5bjqjg",
  "key27": "5y4FmQiEwe6Y3hcUe3gMbSU2VFS1peGnQCkSQvrMY8F1oXNjUqguXcvQyPuXS1KzfQ2M6dQiNf6VortyQoJn48d6"
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
