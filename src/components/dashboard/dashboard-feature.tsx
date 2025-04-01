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
    "5LhPCTrm9nCKjuWq8Ner3FAFV2c6w1PHYboHmonr5VHswRZbqdS2NXDhtXY3mc5Q1en4iCE7saoqiwJfwe8imuGB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SfdaTiNotuc7EQz6yNpGqbjLjRkKsshz95tHTWRENTDhTZBBSHrsd66nEmbn7jydVURYL1qCzzmPAYBKA6VjzEa",
  "key1": "5CQf2rjXPmbeeDkL2Lp416hpbd4rirfuxSzvj3h8D4wVuvEKZbna9Kmu8Ri5p86zUXRDaxZBTNeDMYS3ce9wMHa8",
  "key2": "4r557cN7eBKWGawstb4NNASrMAZxK8yPz23cMd76emu5HYA8c7aZx5BgHpQmkqmfd26oUxWK46cn6ZRzjS8yXXQz",
  "key3": "5d14M4aiAknaNkTe64hcW1cbdSS5fcmYnobj9MmbhfF47WpBg8WjezKvLvBy7HhoLL4BatAhz3i2krqYcdTe5ABU",
  "key4": "5Vy4ypwf67M2eMJNNM6rQgdcWcZej3SFfZX1y8GKqhiTeHEAACNuGjH5Fa6yxrWwH7h4849we3HWbhW3wB9DnNSH",
  "key5": "2KNY4zUGFK2STCoDPoL5uurh3fP7rXsZmatvg8CXvujG3gt5mMsa7PeoBN9yfDdDeYuFpRseShxDYe9JhtFvwEjk",
  "key6": "125CKyVeHW3tMBsGEUX4v5hp9WLpZyqazwCdqUFmHhHFAvo9bcz4m1hEAuDjJbstT1HoxCUK5AHWkYFdCwhSpubL",
  "key7": "3LSj8nGc5YHHYokqUdX74c4mL6Jv4SRoGamy6VnRyBimdpbbWuZoeVaVpqHey2eRAd5B5dxewNGsFC2hj788GqAX",
  "key8": "546iu7VvrYRRozacrQCf92H78udaG6KVHGkgAp1LRa1T2XMfWVjpiLXriY7npZQeWiCTzABrJJt7yJG7kwMbaW8S",
  "key9": "3yQMfsMRgeYq9v597HipQAdP6mF214UC3Zuq4fvDAAFKqK5XNQtrQJEezsNgNtNsnKbxqZAUXabqpT7Wc8qLkPJS",
  "key10": "638aoUTkJfN9NqEwLv48CovQRhexcf4WXD9hT4ZJHArE1RfkzZzwhRYagwe57Ynm9uc9n9nAZ6nZ817bYT3sGop5",
  "key11": "XunLwsKbadEUvCniiq8Rfd3ReQVaiKh4LdFvA58hzTyA9ZxmAy2tQ7McCuqRESbdX4vuGkXeu6gEPLdN5ECKCNa",
  "key12": "7NbZqT3Jwq2G6TUgXE8F7d8NiXAfHMmGvohJzz6qcu2E8S73yJdCZssokrBqLcfZ6qAsbrWMLAFwfWqRe6qcKTc",
  "key13": "2zrwB4XQsNLjMmBsPRek8RKHeqSurN2iKDNMrgaZqvLr4nKBgjNwqvMpP52uzAJGHvaCCNpgad1ZoQLLq45iz9dp",
  "key14": "3qnMhW1Mtrjwq989qmAzfNnQJGC9Rc9VgTrabBfmjG2wyA9gGoAefG4ypDDfKpr174iP6RmeZMiCfThzF4iunjS7",
  "key15": "3tFQFYnMG84qy5KMaD6z7vm9yTAvMbZj2eXmMPy82F6Z7LKYh9isv48oneuDEYEKnnVck96EQrELbRgxpsyt5WzF",
  "key16": "27jBUnHDdx18xjUnjG4aF62hCrCPrczGe9YDkCU7vhhs4fWVzgiWVtvV4rhpa1dTvr5oDfvyoXBN4V2PQFWgzo8Y",
  "key17": "2GRiis6FpE275ZQz54W67MspbWMowTHffhSx3L2xsjiD9JbD1J4CyVh6UyJozYx9BhAoS6vd76FiPjTXKYaShX7q",
  "key18": "32i9L5dQG6ECghqewzyU36xQyNPoEh3w1jxpB1QS5iAfPHQbmff4MMpaHqgpdaP62CQwGsn9A8BjkFtxwbPv3Gq",
  "key19": "3TkCNcHwbXcqAs6Cpqt36zQmBpzFPH1By9yk3sR2XfrpyV8RpgMiGxkJjtP7Jg4rhQq2V5wYq1FfcCKNWJdrK42h",
  "key20": "qraVLxyc1vJTY22b9BMLy7ffwdNWrcchXQS7nYvb3kisADfPjtEqZ4GK6HqT9SyPm9s1G1sU2MqaueNyMtGGB8S",
  "key21": "3ZRfy9P5SUnB1M2p1JQZLZQqoGUuQdR9ZmQDFSNPPWQunfkVUXTkxowHf5D6QJ7ddbuRE3JZ9RHyuMVQAAEoEHPm",
  "key22": "3xpi6BSQqW2eWU8QcbfEVK1VzSXAQdsKHctjoFDr1WnAtTFmPNv1aM45u9XCAqFyhrwM1H98zc7nek2HQDyYcQS8",
  "key23": "3WE4kwPTRFoG138Mpb1vnRZLqcaXtdz5JLWMs66wqRMzg1BvqFyLh7XgKBXs5Tb4rt96MCVHgrhGqC9rtZZ1t1Sf",
  "key24": "5GCF8zGt2otM7yiEkR2ywHucJuvesRGPhsDACk9xHqZwJoXvUvNc7nRrEsprxrKSbee6VtB1A7t1uDyLuRULqnbU",
  "key25": "n18AF2sgHnWHVfcTeVmA2Bo61Y6MsrrG7dS1F4RjZei6GJLojzoZyY5GDjLztdesWDUBAqiDf76YhcmynRcNjQQ",
  "key26": "3JDVbVFM2Mk6qrVeiBbcEsVoeWD8uEguRAuzEL1VN9KRs4FD5Qp1DeKjGETqUBZVkdiqnhMfBJ7AEe3PGanhomxP",
  "key27": "25CTf85Y5D3XkZetfjpt1iSyFMjZj3htZTwoUXpUkKbJWFY2LdKpfLp4xD1YU76wJ2QZbGmVhjrsCm7x7ZZG4fQf",
  "key28": "4sQivjmceGspP4to73xhm9JxYMwqBEMvpmARe9wqWbitrFahZXiZyeeLRB4EsCqzXT9zx2toKDWyEtn93fAYuQ6Z",
  "key29": "2Zk8Mwyyf3fo4CNxgt2JWyXvs5hEAQKA7h6y2YqHWqcRbtw7S72xQ2NTVkf7479c5N8QrR7Kadp8GeJS5oFi8JL9",
  "key30": "5rsXin6TrWDQuF94R5xXV3XFE6wZnNBjqNeCwabdep7sQKoYWijeCaTH5YWBjNgA3Y9poqd6B6gXvPJ7Cn5MMGuh",
  "key31": "2nxW4aASaQXY5iMaZZT8QjyyYmCYGEHfmX22XLJPi8dg7rjpzcZgcqJgGduU6CGFhUVR7wHXtsAxfffQmtPrwmPM",
  "key32": "1fKqwmhGxmDk1gX6ypkGB4keSFrjJEnJL2dhTGNuF9ud2bcWQb19KQseJVFGDy6gYrZBRDKiL6zhnKBqzrkc5e3",
  "key33": "4Eazzkb2R6s5uG1KPn932WSSVvCJFtyciMJmN27rZ6baXNSs7BK4fcVZiyKEQpstpSAa1qpYBwQgvHxqVKm8DujK",
  "key34": "5v6pH2QPP3nPfD9AjjDx1mh6URMmcQpofEdfdXfDfjDW9VWTgcNh3f7c7vCwsgJfCPrZGb5dbCimz1zD8a942mT4",
  "key35": "53QQYcYKYG1MUKT2XbRBYT1JEAFvy2saZxGoaWh9j7bzp41f1kdRSPpqh1pprZUAiWdK52ARgeBP8BMjGqV2Z9an",
  "key36": "3ELwMQkqyVGdgfkTznfMCBvxXSUE5TPdhFoLduCdwG6qgej1yBHC1Y6ckePQhXbiLj7awLdoM79dJ3f9e4LBNJWk",
  "key37": "5mxbGb9kt5mJ9HAXfWChfSuQD7CX8HAbD62hwUMMw2FvjsFDTVhDHcJrCUhzj5v5C1MphGN75NUgZaoTiHzvbENf",
  "key38": "Q5o2sMv1SZ8wonsnqMjwC7ohs28Mx6GMkm4MtD2MoePouwbbyvG9b72Fgv9LT2UBUgx4jzZSe7NCmmUJ8oK7b4U"
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
