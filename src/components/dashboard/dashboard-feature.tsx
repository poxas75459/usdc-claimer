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
    "5qEmoLNcxnTHTDGC4VxVhnqapnWUSkCb98qJF44Xs9as3apPvafec66a7a8w61K3CmAUycoerCvMNPTg6nU8f8f5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zEyuESqrz4KAmeiL6efz18Je5En2zqrzsThMyukNGjDZJqPF7hRWpo3cHx6R92A9tYwGz1k5PkFSnwsTygmUAqW",
  "key1": "XsAZdJCuqgvmUyVRT8piruZHKENPQseF2rUufKY8FJ4dYhaVmtyTfpvyJW3fpKbFSYoxBDnykE95cDGPzLzpkVn",
  "key2": "5f8Cv9pKmZW9rPs13zoyXZBZWw6RPLrBSC1VS8vmwNmhFNoypcqRgtKLX81aTgv8WtQGjoTqeKMaEbm5GYbLErH2",
  "key3": "QVvRxsd24uDJPNihLJrVwQHsbwDZwGFFqmvbRwkpBFLrGAnzWkgjPctdn5mDQzmQ7vsqSudNHXorUnjkTjvamk7",
  "key4": "4APYCybsokXZqX8BZ4cbyuyLZq4RptUzRC829omFwa1PKBn1nZNwUnsur9HUA96fvr7AhZxx9AtTFdYng368wboQ",
  "key5": "4qCQysb5UgSb37NRKZk761XXBEDyZxiUREiPFbgFanwDjiyxAKsDTw6uyTvnVNf7MjNNGBWLcu5nQc2qD5JwtYKQ",
  "key6": "aHG5LoCrNVuc2sEcS3juPUMD61SL8W66ViKx2vDpn2ruyvTzwn3uNEYzvZwiCWa5BrYteJSkFyFBtB5F1wsrphC",
  "key7": "5m4ZTxVsK387sQSov4T5CVo6iMTsSAefWsbnnuEVYz6tFErFas1sSyPJEVVua7fNoXf6zBVvkJbjc7AxXsz2koaf",
  "key8": "5GE4cff3HLv4H8zHQtxioVYXRXJskBTwKwExxcRv3rL2tBjVkZ9TigWiA2rNQbTYa8fnfmbmpuSgNi5rztN7sWyU",
  "key9": "4nNvpDXho7P3m4xf6bJH1u7zgTbw6HRPdhvSu3dzamRBeYRB1MxtBTkYGfj1ZGPco6aocR2dKCugpvbrm4mc75KL",
  "key10": "2ReMAMUPYiZAfSZVf6xbz4k2E1F1qZEdRSNKFNxLEU6ELCfHygTuKToyH5W9LmvLccXqTm4QfphuN4S1BNMWd22j",
  "key11": "4rpZ7a3FB4KBrZYvaScvDGDzbaQCWCKfL7mtLCqZhEkszgZ3rK7xtfNuR7qQsrpjU81zk73Twxi3KJ1fusNZpGUk",
  "key12": "5dQUwWoaoRmvVhBEgjVbQjFSEZPMGn1ZbXm1cJZubpYKCeFpvpfFvpHChi8u4uzRipbKXiNZKqBBBF1Rv7gJR6gw",
  "key13": "5agwZxS5dpDWuCst19Nh9L3eYZi2zRgTN9wMnNK5CCn9H16u8K9K8YSy3sJp8kpNkD5mNCMqh5TZuXC8NU8dkGc3",
  "key14": "36npdprnkLwnyHs4tpzGh3W3VigfN33N3Pi4vAp2rbcwohu6DfRLNu47YZx5TuPuC5UP9vHVcFbL6wwwW7ok1qdF",
  "key15": "3twQ1CjUGp5DUd7Z7yfqnBww1S7Mct1Kb9hrVp5DQZCjZS6WGwieZPNa6QZFQsmiRvWSzu71A7XZYcnBtyyK9jgd",
  "key16": "48FzjKMrfadrZssxybKcM59C1w1bFxeXRwotLJFRFHq1LSnsG21sEVcNwoYuD2QCwCyn83DpxA188nFDVcJTgVbV",
  "key17": "4gTv227PX17UVWadoBP52zQpXFnVVQ3wgQdbFW35PuDFF6dTLHEBvx36Zyb1qgKh8YAG5WhFS1guoyEAgi4ZaQgh",
  "key18": "3Fy87kjdF4pxKtryF5bFna5DECjVtG3h1HBJqbDtFtJwAx38PGzEGikVZ3qJ6VEKVoBRhcvbmQcUKhYuJgjuDy4a",
  "key19": "2q5pkYVZSXX41zQ4MFFg68jptQHfTVRjN1mJr3FDkt4aDj3hqXbvcKA4ctcbnUxqVn649beqUA2vja3ukLHx5QT4",
  "key20": "5oc69zJUBgf8mZ8wBtDyaGB5i8yxDKksxtW8UdV5DksjRjdki6uZUthn3B2ND7nrraiUE3PppiXxd1zT2UUuE4Ep",
  "key21": "3sNpuCqT4GjmMTo7FBDd9VbtDNEJukg45Ugf1RdM4S5CuyNDPHsfmPPspa8tyVyYd1jegpQC3KrDtELu2pPF786o",
  "key22": "56R6aG3fNqS8WQpdqe33o5yPsoRaFNt4bFc1EzaHY78a69fwYEtf2qgFEe3YAS1JgCQy4L37QYmDa6C9iN8aiDjw",
  "key23": "3u9zGf2Z7yiA5wcLAowmD2QvmrwtQUbmBZUykjAukvUzs7Z2bpnXA7Ly9tsa8deEeAKureQZHMrvy3KTabAMDm94",
  "key24": "4MewGMqRpdxADdgJEgbNUHm9ZFobYZkhdr7iZdW36ZVknL1748enzD7YNrhobV1K5sNqrXnk5NY6n3VjWUcokqB4",
  "key25": "27aZTwtgHgcMhYgfADcKxgUzebzE1NnC8XMyKWuLTe7tHbAVNzaGSAWZQREP2JaQZb8Xc3LnyYktVAJw8uRP99ii",
  "key26": "5RZPuzBxCPZCHgoyZgynTo2uKfykTp3fVq5BXRqw8P36sRqGuXdTLx5CuJ5ZBaThYSrTtTX8CntL5nkpXQgbUqCd",
  "key27": "5BdUZ38oGPHthbZ1pK3hgXnL3gwaeTBmJ2W1hXwaRNccAwj4it3jkrFYPKRU7hp5K8rYuWtnYLX4vL2LDJv5DRAT",
  "key28": "3YTUGKtk1gnxQbvoDd4E9dEm25ALVtFdgFeMvJmepeQvqn7xDv2fJUCdSEZdc8GwuTvzDNqhgTKPk83s1TcRCdsq",
  "key29": "htxccU2bD7V67WnoWNG6YRnXNeLCD5hsj5bZX34CLoSarTPWuqXc4ke8At9rmLjiXXF6voHNAWD7CzRSJVQz3db",
  "key30": "4iUpa6J9vDMASw1zmhP6FbUJrPkniTKDrpZCK8MfRXbx6pVFJFJdi18NGySyNboZA8xKhhgVuG83RHdAgiA7jM2J",
  "key31": "2Pc5pQQZQiJoTC13gGNvKLkHWrcn8z4MesxTPkABSjNkUyT1mcSxzBnyK3Fazy3N3xiXDWes7NbJUZZUV7nyq8NL",
  "key32": "61WEgTNfDNkgKY5W5hTxyQdgSyzPj4wg1QVAyawwzW7dfKq4fZanpvppUptNkWRrFTCMvKW8ERqHtkxzRdYGSZQ6",
  "key33": "41eDvJr59CMTbDXsHcPbPiEwJ7WFmNhagquDbMNpYaZNx3557zHZotkJTukk2zBHHExhtNbxiVKPKQMmFo4LqUzB",
  "key34": "Tn4HyVxawuXKEC2JF8aXe1krvETm6ZA8m34a2aPpFXXQvatL9Ft28T8dKBgE9fng3KLX5gM4ykaHmPqiRZbBnc3",
  "key35": "2MfavnW6D1xzzLHzBATGnna1DCqA11UYaPoFavqiXWWaBooGCjMCimXDTmj1sa4Wv6RVAv9CTpmQ7HMCv2PrhjZj",
  "key36": "JnconwJVhWqxF39wgyc9FTmzxQinovVqwFGYD7bkkT9YYrYtFhXRsXUHkd76D3qig4Ct1oQ1uhvPs9QA5h2GUJm",
  "key37": "26a4z28DLYHfoWkvkC21nEEYgEWtgo3knnsjuEWwbjm46VxectS1BRtPfZTiUzCEvzRJLCLbkCpESkR8RNBi1SFp",
  "key38": "5jUCNxyKqu5xEnHchMVMQVfPE4WetiCKeQg1z4CuMNL1cnmy7UmXnqyfDTHnRN4j2RhN7stHZ4c7HqprYeUPi6Lg",
  "key39": "5feD3PzSnRhYsV5SBki69W8bjJvuAxQbe7B7Zqa83tqPcDokTkVNUn9spoaM5dJbivQsHKoZn2UhE9MynPjgsu3q",
  "key40": "EJkoN9PTQygVuySGVgwjTM8Z4cRmtnYfwUz3AQKRcu67TNEDpdyUvpkgggRdqn9Nk2e9qZ22LGshAeZ7SD2c4GB",
  "key41": "3ydGBGQGayYPwdyPifTMkXM373bvZSJniHps4gzTYegwZqT3ZEP3xTde7cBmCL3tTnmm7rR4Bdp74EKqmUcTtgQm"
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
