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
    "3KtSqXqQK5gQADYRixz6xGGubbDBXzEX2EHeoDrChEAKJkSfiwWRkskyaCGULca2ZvzDVyPxb6FKxmqPuy757ir9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rVQZfJzUeYfgWmvwuxApNrgZbMXaaG2LnEAWEurREKMzX8PGguJqvg1Qbw8ZCcS4EfPCGQgpHgK3kSqxeouy14z",
  "key1": "3TZE4hV2nXFnhPPzYh7GMzPdVrE8MQEniSPQrpPgZU2QSkxvPW1uD4EipyLhvYMQzFuQUrvQavPQnsHYXYDibMy5",
  "key2": "5WBhiJ7eoqGGLGrbNgR5CdvZUcBggWEqoiB8Gu2LwuCBsHVJJTSPj5GJHtCzuCzU6LVnBH6LCqWUNjf6s7RTRyvr",
  "key3": "3FDXEqH5WsSiFL4Ck45zZ3VcnTC64dzoAgdZMC1wL5HsvGJzEmZNCEKgwrrAazQPnYyR2ZjyEzzbhYf4HSNoa5kF",
  "key4": "3BBrt53s86Bqt3t6fEbtiAVVhvs6pzTkEFAKFRse3ogHC1QSx39MsSgjwigWa1i3zifyKfzL3ZGVpzwAmWEpdrgR",
  "key5": "2BaAJtAwwde7NfJzERbkEP8wpZC9dS1H1K3ZDuUXtt56LaqVkxHDgVQ1xQ6vyaDfdMD5B1La7K2EV9RsdoQpdNFg",
  "key6": "4xhYfGc1GKj1XicfX5xxqJ8ACtBrEU4h1TheA6HyX5m4S4oqgb8W22ennnXq4LJwnfNaV6MAenQCXf9Yjwv7LYN2",
  "key7": "5xoMvz4Td1dqxuZhg13VJrWAS4SkL93e3ycqosQGMQFuXXMjnguvkSfxweKYRMBS7BrBrw4zsu5mjw6bucBDqxrp",
  "key8": "3FsMY416NXkpVujnHabxSQs5nRKFwaYT7imFaMPbVzCNNB2sLeLRbecXiNN7Y3YncFQdEynjwR1xPHvi26sKUtMz",
  "key9": "3zAhQC8TVqHw329k26GfjKuEryC2vQroqQGwc2iSA2h9qCQXTz8mDZ8144B82EwLaTa7376WoDMMjas8XwS8C4Rh",
  "key10": "2KQQd27hP1CpNnzaowR1tABjagAjHCz1ZwLnGpvJ73vB6KHTZrrJmbaD28EG8nAoBMKzHWzjHC6Za4onwaSLgs6c",
  "key11": "3gmoYb7grWHX138GDF3bBgbzR9exbyBn7RsmxgrgNe3PD4CrG3mR95B5PQbpLnom76bNRUL75Ffi68hQ6vMPQVym",
  "key12": "44FTf4cqtfLRPTjaK5jQ1dqEJr1ABn4aP91FdmNQAz8nCHB5jBNKpRMqYVPFp8J5H2oujLEnd7jwJC9B3po33Fyz",
  "key13": "b2Xd2zQ7czkCwH1nFGX1oiy58zAfRuWjijz3oYb65dcSuaXfq7KNcNzQoDvjzGh3GjMTGRtXkHJjcVbv9EBkgvW",
  "key14": "54xgguDdF6EvF68AHk4hvTL4dovehsbRLk4xtNSVyCR5KyCDKm6Dc2weEQ8xhmH7SJCUmwdQqkTjZSZUgxdaiccK",
  "key15": "3XGgzSBTnim6xmTZZsaohNnsXPA3MYG8qAqxXU3hE1Je16cYdQewf1GJxf2pxQLUssyFsDoNvDx4rLS7poF6T57Q",
  "key16": "3wzaQmhoJmaTMVdGbCzZgWDdbXgkGd3bBZz2bxJpJQ9CKHHYaEoVkbJKpP6oED2CamTQngCqQztchF435Ffi5S8C",
  "key17": "3JLrPniNYPNGLna8r4Etig8SGuXqsyMg2dJbuuUTfagmZDyaviicmq18RbsFpivWHw3gfWRjCnWfMezk7WoE4v82",
  "key18": "4vf1RSjgn3wcdb9WurEPUQDkMiRimV5gkPW5uyfaX6ndhMrQyLGmP4JoWihi6PoqYGD858sUaZLVDH3K2AkA4zVT",
  "key19": "22MyTp4r1QBXFQ46U5WdfDMpb3aJUnUPAC6g7trE1KzKcB5xkqrSTxYR8jnAPyGvEnex4pZjqHhkBCrA28xeZfRM",
  "key20": "2NG2NTsZeGVEiXCFHrcB8QDx4WcfT5bYX78dovAjqcqVsoiBm1s6QCYwXMgeZKLUyi6jctYcmP5Mq4mjkPmu9yXb",
  "key21": "64F2vAz2gKuZc9HucaT7jVKTVFgz9bciQSbJNqpNxm3Hcc2ErFsQUJbUkLMCBYGQVfLXtX9zZDnvpGsvGVM2wvSr",
  "key22": "jzzSh6wWEVYAz6qVUHarQafVcL4xRUNiFAJj59gpNqcdeTytaku6PUzdrJbXAyyGrNFkRPC7ZRWFPDKo7hRjqT5",
  "key23": "bGUiyppdgnz4fxKPZnJCW1f4hpHYuhx71hLMEm3dtYmKmVVH2Ux3BugYEfUroP8EjzNvwo9w3uPLtdvptAfYEdc",
  "key24": "4DSCtnhJ23UStVYeADXMgbHjtT5J97LHNjAj7EK2bHsJAqvCR5BoecgfdLfwWoVv6aDXxqtnN8jhuGRYQayxdDWN",
  "key25": "4jSuEm6GDmuqPzKxhtsTQAedbzoh4cGwBLTqvpz1p1q3UovVCjf4DkUgYPUyd5sLfLtFAYV92LVGDedQmawVLbsG",
  "key26": "4qwNxtPCS6oebJm3JwDbWjH7ymKzBev22wHVrKp7RWuVeTUVQDfP9pwA3QLrdrHJzWDipUnNocyUf48MmtV9bJAJ",
  "key27": "5yAjEeqzsSM7AeRcwMCGdiZKD2hPUsQ2bpAdfseszcmXX8nzHcDzLPfFLwWLwT5gEngTKkJdeNN1X8t88qWUoV1E",
  "key28": "AyooES8wTeGtjBFr9ZYF5XLMXfgmG9VayCPqFFpB7AVx59hYhU3yMij9VQTHyFEMt3TXNgJi2ubZ2cd4PNN4SPS",
  "key29": "66Ab9dNv9iJz3VNA2tpkb27J1fx8LPYtvT8ZnPRjyNaemZFd64ogTaG4HvWnCmTtKVPQBH6dEZKCZJLx1LRjiwZN",
  "key30": "VTDxQYLAVVWMQeRJh4VujAY8DbopkppeUFp4vCqH9w664sy8Lr4bDL5SnJC7F9kTtTN92tcprkDPWXvPp9RSqmc",
  "key31": "5uE6Cza1UdmFwZAueesYYJYNbkCx6b4w5sMtYgWe4QS8bnXB86Bv6cGPkywJCWoz71vggNJfs3469sCjZY5fUMaD",
  "key32": "4xd9dSoHmJgL6yXUAqboTvv24Z6SxxLyZQ3sz3Vhj4qD8jenzXZwR5rKojY7QtP7RYXoTn9ETsPTXUyRUR5tBCBJ",
  "key33": "5iUZU6fbcrS1G3PjkGMP8LErYBBtPF42GvJz6ue8HkrBYEuay8E8wDfpSNt2NHrCafFNXYwSYceEa6ZXeUysGVRc",
  "key34": "2DPiUo1meCDvMDaM33GX1TbXfAqoSc38yTUkgM79bPpnuyVkGJWZPLEUuHvghNgiqz8FzqhCdzN1E3KqzpsFgfoX",
  "key35": "3hGws1U4URfn1VBXBVjovXW5oAujaDqrzr1LCdtrxeZtrVe9pqbP1gJeDfE5dfsQq4yKeq2GNpjCrsrhxmbWg3Cz",
  "key36": "34QpKTHCm72xP45estyaw2u43WHm63s5ADQJJt3xf59tY8n9MynMtDJD83NsQjCixviRJ7LURfkwzhnfj2JEbgag",
  "key37": "5Gb3k2GRp1c1ShX2ehjEaQKTox4yg7nDR8nELhoGfCbPn7K3bzN7nZoP8J1TZFNW4735wFYEmUY1CYNhfY8pTnX6",
  "key38": "2LCq2GZwjDMKhaBLAYw8y9mJZ2KCZts5W65qJb6k1CVhzbdK1AvKuGJqnreex447AxDSqvXb3PkwNmX5nw4Yd9ez",
  "key39": "3H7EgtP8vuChwMxonEVKMCumVAYgTsoXwXcxCnwV66bH7M8YZEme1qAjb9vX6pGtWo73Rgv4GAxxAxEXKSVUMdCJ"
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
