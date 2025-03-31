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
    "5TCUhXcS95zw9u6au6Ma1mJT4aCbgVpsR5CWYQmUTmjGXiUe4FZLm45ZACy1obFRqUDxQHphLs51Z5JdW8ZtsK5U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SkY3d3YpSHDpp6x18EvyhhhFcsLVKnfAmkhRiuNTcMudiDsBpUP6TR2eSq2NeqvShcX4rEdxuPLkcoXNj54NCQC",
  "key1": "4XKHzKbHPmBdR2tv69Va94A423br9RAcsqA6qNR6CCvEF1irSkYQqef36cH5DwQCvSqKzuPkh51SXnmV5wpUoRku",
  "key2": "4t39jMkNVSCHg6bDzBbmF6vW8HYZVuhtkweBLb6YsehwCPGzNR8BYbz1PhF8K7otSuREA7xcukSRQrkPo6N65ukQ",
  "key3": "2ieMBps5PQX7BV3XxKF5V7dC19a3P6WkWCLiNhtPFsSusKTWmD6QcVomWJ93FPnkDfzLdXAXnx3JXdzUc77mDRnJ",
  "key4": "4Jb55ZQXLu1aEzSkGqPsQTMCvAHK3FXMsHFF86oXfPvd4FmCq4un4db5btBJ7MrFmsYgyD78pBcuM1NAuChRDdFV",
  "key5": "EhxBjkxeHc2NHpTm8FV3dfiXq6rCzuG9ZMYCKDF5h9m1fCvnmNtQorHLuh9kXZXbauP7TVyFRWEmRxtJy4DuQSa",
  "key6": "4U634mkFT393eNh34TAxtvdXBDyJ4rczpT9En446dN6g3zimg8BsMyfUidp5c4DnKCf1cbZXhS3bNgzRb7Lu7tTL",
  "key7": "2L4vNpsor7AHphd3iDCkxLaebF8tQVxtJEUkSiedKjBnLdpFgLfZkBDu9HqnNzwmyRW11nfy3MKSeDwJHXWnh6WA",
  "key8": "5DdTnRyqAy13yyCw6DXMMZqrkckGA58yL1iozArLvMfE5Udwo1qi9mpun46bxAWEATCbZcJq5sCZ5gLkGbgdPqDh",
  "key9": "5SSvzTn8zbaYK53SPji9KX8PQ4oM275gtEvpNBdMirEshkBA3PXmzNJZH5RVLM89cwi9o8VZkGiEcTnC4PU9fUHJ",
  "key10": "3esKbrrzV9wGz54uTW2fBhm1yGCsoMW9Z4yUM8chxgdCrgGZjKnH1g8c9fZ2qDeSBwzEWWJRrZFP1115rzXSwKBj",
  "key11": "2L41gkH2hpdqz6zqpAabbwGjH9FSjc4ZSptAoN9hehBnJm8aC59D5eStygEUXbyfAk3EqjdaEkBbL2xYPBx1zE7H",
  "key12": "HnjqkghNoVs69AaoBntk5qrViFiqGbxC6tVQHzeHA6Uf39fpx1JePJYvbqgMS7EsH2C96LqbhiFi9PN9Z1rBEL4",
  "key13": "26DWQAQFUcvK87W12yh4XF75iQs6Pif1ycyFhavx2aCgyJAECQvF2evqdHjf494e5vmKZLzhDwpiPK1yUauWotWb",
  "key14": "4KMzyL2iUVurw4TYmMhE2B2Wtf5vqiCL13Jr5GHzu44HWB2tT76A2E9yAisKRt4KjEZHqDkW3qC8nuffRBPgehzv",
  "key15": "4xzoEEdv3mJkGEa61KW8UMustMuQMkNiKLYtiCZpP9yVuu8VUVYBwKXniRtz3eRYafGhL86iXpVJq9rtUQtFR7HN",
  "key16": "2NbdFciyPJXoWTXu5MrVM2ifKw71aWvmH32qNS4UJo447jVw8GCHsavAWJ57PXh2HGvuq1Y7GFDJETENaHQcNqJf",
  "key17": "4qvtg23zBjbTy3Y7WMuXdGnV1VbwHZbfexAQMb7GQYQ3Hu1i2Ks1RMGktFSytCBci4tGWGZWt1dob7oaHLq4LZbs",
  "key18": "5jgzknz6fdCuBXNTbeNv4iJguiE3W8rUDMgANGEh3XjY1wa9XAkMX8r7zuAPg9ZzctaMTe9b8sNiLfqkakU6fNjj",
  "key19": "3EfsJd17oHuzerrAQhZM8CH884uTX9MHFQmkQEsrc5uoFz4j7i1MNgrRs8GctzJ1w75smhzb7jN5c9cRt42g2Fvb",
  "key20": "4dUrhRU69ACBY1w3KryfSbbEQBHto5KuYfef8tUXfidRN6q99rbJYHbZ7xBdrynhAzX81CGsGCVDHRSd2vECGWF1",
  "key21": "NFgTohGMPrY1Nx9b3HerYQZcjDgHPKHHmkfNnYMUYzMvM8KHtYZ8chzpRanNv7GBJ76GERCVBgvwCKFBcsLtfyN",
  "key22": "b7RfpAr4CbBA3zAVwZCvqz2RagoE77EkrSYfqzx2Kr2wmXa6GZP1sJX9on7ZkDTPVJzMtfMKQFBwV4nVGXybsF8",
  "key23": "4T2xptLqkCLncT7A3GaC9gHyHfnJJoeahyA5WQ8XBeQgwgsWipoWqPVwxUV8YoxWTdG4K6gGnooVYJCGPSEoGNxC",
  "key24": "3foonmyLFSL5cJoAs72fBNWdMaM6FUMfoF4kwLmLoFfoE44yg2Yvy79HyaSE27HxHZ7oiEaUp6VJCKGP5MMGuLYN",
  "key25": "2FDP6f1gG1zTPkoQiUequwJnykiNxLoFZw7VDtRcTyTaLXfE6SyYWu6r1QbA7T1pUTTHLRHa9upNzD5GxYXBH9SD",
  "key26": "3LqGS93S2X65btpXbraHW4hvuMLy523i3pQWLX4NYZ1NAhpNVPmsjn2pqBK1hzGsUMNMCqriSFtkaFjuMQAbk3ML",
  "key27": "3anheecoLDhbdwvxKXh6tqvGvNrRTCGmSmPGrhXtPWMN1nN9bwTHoa3sCesB33DkjEBHf9voWh42Ciu74417f8Y7",
  "key28": "516vJmE6JKRRSNXyCXrYL8syx9MZbjsrwggEn3NZbeY9eRWYZyiu1XBp1UUAejBE2QsuPkx337D975SUtpq8baov"
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
