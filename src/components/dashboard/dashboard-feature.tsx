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
    "2aGgTgMrRgt6BnNC988uouNTiEZPcPRZfJNvK5opAFdLPFSQez1FjTdkqKGsyKqNsUVo2VMu5gVvAXjw2aJRYKFD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4k4XtQzz6wZ6PKzJxVS2A5CdLnpG74xyw2wG23GoLsiBLRKM3uqDL4R7Y7KAdWaj7Hyyjv1Mq8nBKAu2cnhSHn1V",
  "key1": "hbTFzDansn6kNt4BLTv6YuhDxDNWbgx5a4NDZaAgYmGuSRjTDLABknwUzrcnm2AhJJEmbVUvnmGytU6YEYymafi",
  "key2": "4rciz5e1Npev7sWiv8FQHxsUVh75HdUBRunCok9Zndkuu16vNNwHQ9VPGQ1XzPsVVtG6wqk2vTypKQn77ZSmQgTE",
  "key3": "XHGVL3JvWEDxJKMUuU24SVC1Qgs9BWaX7FEL8qXvbBvrVdpsJFamnekheWH7T6iQ7gCz3Tjzui67uEzgLkPHckY",
  "key4": "gg1vFShuCyDAKN2XZ7cLTiBL4QnM7FezkYKSs8WpyRQxDNLm9V2Fb9fE5Crqzp8tdxfZGTdVfT38aFdpYKSZRKV",
  "key5": "2nvLxkpEcvUd9ERFRsqQqHHYTHz29vz3HrWwXUbc4bPkD6pKrLdBdvZoSEiWBMYD43uFKPJGSMp3h91JFAzWQAcz",
  "key6": "4bWmT5XgGFHU9XBZ4zPpRMtRKYuYHoJYuPQ6pR95JKxjy2AMz1rMCRBmLPnZj8SwsDvvVNZ5AMYd2MSaU2tYY1qh",
  "key7": "2GR7CFYken9sBpF7qoffvzdcQ8BEqoPVzpqrhdYGTj65Vazv88gtTLdiaSYzeiY6VZPkCKKpAKkt4U5WvLfJBaSA",
  "key8": "4yVwB9VYm7B9ibyzZ9aq1p724rrueya4uc8S72qydTqLW5rqkLvjmShcbkD6FrWJawoN5XcezYVhMT9U1RjoH4Ns",
  "key9": "4SKVUHuDiDHPdpe7Ee3irgrbtgJe1AYDH5Pokke3sWdGN2MhBUJVbxAXnjHKS3R57TyWUYG2FcgBvAPCMCFyuSvr",
  "key10": "62fVEXF87QsUVVt64jXS1NZtYhpQVTcVSpzAqGw4oMeufreedkz9snwsdnefRRLKejSTPMe9xTnByFjw6A5vz27v",
  "key11": "NYCeeaZ3C4vaHhTQ8W5X975zkMnj7k3KMbJftJRpLUYdDVNHVee6UgMVkTjHJKRA8egnwrrSRvr3sAV6o9gaubH",
  "key12": "3RwmARRBvcXFwcH36UTZ2pSt9baGuThowTWVk3UuM8FCg7EcYbBYBptjgHe1nxkNkP2LDcBburrjzeWEgLVX9nFs",
  "key13": "5QWgqk9YmCPKuwbFTRCeYpkpqdMbz4173TGNoFdTXeotM9DzDqqgdRViLfRxkcLs9cHTonrAghnpe5Mwsau1ZT6R",
  "key14": "2G4TUAKazcz3cMTdW9tVNcjtmH9tPnv83qkVSkWzw5pRffVAqWRWPo1n2ESBnezozYLcLq5cFoqK5TeT1xhKYrvP",
  "key15": "DiSTLSgu9G8BnedDQE7RNcZqyFKwSNELGypGwVWpMk3sSo5TuvjUZMXbWC7yxL4HujcyZQTPAdMJByAV1BuFdDw",
  "key16": "2FxuLQ4dY9GSYSYh8UcF6wooxrQuDHaA2qwR6tn5BH3GM462z7KaxL4SYR39mAB71JDgNtmesKU4hxWBufNrWMwC",
  "key17": "3rbTeVSEdXTTfRc2P1xUA6vvKxozj8tL6pHkTfBHUn4x2gqBfvPVaRBkbo9G1w9sDYbv4pK8MZmTRuykL474ekXQ",
  "key18": "2v9srP5uA4NdYHEZemx1qFjT5a4cXoo6sJUDwytt5VspdhpgbEUMjCQt1fAmVKE8YJM4epStb2TiK3n9unaSExPc",
  "key19": "4h4gJCH5SeoVJ7fC3r5MTD1CdfhdjAST1nfoUjXdTqKTLNpWZwd94LYRG1iS1ao87oYEQrEKgwLanTPy5YWiN5hf",
  "key20": "5GGuAsdLqc4LYTK5yUtHS5squXQmACKU2ryzR3bSMXS7AeVFuR88gajbSgirwAadKYcfpf8veydtyxLAYG3aAt5d",
  "key21": "2jVNojqycBseYE9ofx6X52nGrXJqYgARCpq23N1S6U557nYaAMyBTzLYDfqc1pzfuXxrLgJ1dwcYunwAMznot5fS",
  "key22": "2WS5yERJtrLvh242acnYPJgTbgEAqa7RM8EBoMaUXuF5Y1zuHX3kQZcKiEvfhPQUsrNJi3cqpbgj4iR6yspoo7Uf",
  "key23": "ED778jpvwKEBcZLzYXoGntahG6kan4pR3sKGCPBLQDApbuVKKkmEs5UgmdyRhjHHMrcYaptVSj1SZiN7nsYVeJk",
  "key24": "4zUqonPTwrJu3GL9TZgJcEAjLMhKwjGhPVXsaJfk6gL1mcivgJZ9VcWCCVCCU4UfmzongsweEy521DS89A7Ugkd9",
  "key25": "2bpnHT6ok4hbeTDUdW6GsLfZVscgYfGbcVGFFh1JcKe8hGUgnjrEe5NCgaFqoagN59Wrv9c3qh5huj4o4UMQHKy2",
  "key26": "5vuzi7PDGqSXsB4wsvLRGBpNvqavVYP1jSJcSa9N9VLA5k1kboqbVQyLbYYSvGh6qYryDUCXWiRnagNnMrviFsTh",
  "key27": "LcM3YoqNt3jd8GbNgb3TxgtPoc84U9L3MouRc9KuJ2fcXqmmR9rmC7wePVhwTEtZzqBbqXvdLPihLfbVzd9wGYh",
  "key28": "2tZUuAtZTRQRvEXnxPKQsLRN4xREnVbnt5srRrNm6Fbqaceg2xhaStJG48wdVELzPHC5SGG3Eq8fYPumiVHR46g3",
  "key29": "42TYb1UtiaJKN1Nao1vzevosY3gNn9djuXudWqRcFveY57br3NGdu4audgXjVsXzpnpR39Pm5P3v2Lark95nSpuS",
  "key30": "57yZA1T8D5dzkfQivxpKfJrfRmccxyYHbsUtimyRxU7V9TM291dqNzyjJk4NPiZjbVDfkrFDM4Ap4k1Z9SxUb6iQ"
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
