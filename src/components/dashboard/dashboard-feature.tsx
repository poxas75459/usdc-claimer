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
    "3kHWEip72628T1v9RWV6iEmPzijqhdUrZiEduJFjAZRm7E7Ut7bLC3aDkfvp6hheD2uyjeEB6tHeB6xQLDPy9DiD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4s3A8Qhq41Bw1AJxbu7ywz5Tdki6wmxGMXcQhQuZ6oXXNuVTVoTSpjC4Lzr1sZaHBx5pXupKHw5VwR6vDBHqyxDH",
  "key1": "667zYeBb8mWhKmJ1RKG448PaeBMdf2nKi96fYXRESJeAqs6tUTAA3RaMPWUuNpa6v6votAYeuojNFTdCazZKbAwS",
  "key2": "5qfY19UeNjmwkfEMYi5o8XN8geaxU99WEEZHTk5vNeQmzK8bSp7yGJySUjDd1Wd2EqQM6PVNm6TjdrV7dski6tZZ",
  "key3": "4nM4ySYK56okQqF81Gk658JKLTVotjrxsJNxAHZ4WbT8NdUvDdadv41ooDrD5S2zGkzecb6tue7ovuJqdSY1F5iX",
  "key4": "4HeKr5r3qe3bBKXZnhdcQLuU1pH7YuwhGwrVSs9PHCNhDg7QgnYWXWT7qdz7CbyhuTiXryEZFxxjJZbafyDQiUcY",
  "key5": "5QajDmZrLMw4V4vozzgN587nnuVirphPJzKBb6JbDDpoF5vmok56yRJNt5hHvSMWNiRpPdUXwvP2yX8apkxuJCpo",
  "key6": "2bF8Tgcz4SMRRYEAVcnzffAqcAMHdNap926D8XUuxcQk4zyD5yvn3FYT2vycCRVPWPpk5gw7C8uzuYPE47uciT43",
  "key7": "3MiKyUMWhu1kvW38EdQiXJST8imfKmNW2AitaWwdNh8XTzKpvgnXcSbzHWJfHDD9L1v9oZD4z5ubwMUFFjskTfhG",
  "key8": "3MZQm3zWWrxgDVBeZMNp9km5iMTourjhTVcATap4YW9iDQ455cLTokC7pkEkaf6UsfdES6rzmczLhYFXAQkvMdAA",
  "key9": "4VUHyM5wtG277KN7jx9ppx54WjrmLyDzq1Xa6JwuxhXrf5SGEVELzGhyvy12ihjYQpZXqEUewQM2S9nB6NnyzrR6",
  "key10": "4DVa8U3W99Uoh3X91cTQCS3GM3gXtETTLgS2jXHby2i2kFxMr38b42v7WvSsqTpFvzhdiJ7E2aicXi5sarF5uT6D",
  "key11": "5yNdgpHvoS1mgWAQbR77K7Bv6nHLqyfMP7ZBXcB6hyDDxAK7WJTcVvKz7Mdm8gtGbHmbBc1G1Lh4zY1o5JigcqHX",
  "key12": "2QKu275849MwHe4aqzo34QLN95x5rDmx2iuZEPKmTamnDa47qH6ueCnnGAyVJ59WDRoH6iE9L8P6QxuZU7kXdVVx",
  "key13": "KUME9ygGExRtfHkYWanfrsYVwirfHRZK7ezPxJ7zTwVskpcta62Eo2Li39eD7LYAkxT22aCgh5eYWu2KG3ykTmM",
  "key14": "BcEMcdvyccUJtQejegx47WgbgpSJ31SpC7KPngZBW5UNjpdc9egjkmwYEfDBN7auR76aAo4ESEJyhhXwf7Lxuox",
  "key15": "5WhLhCFC26StSCdataCBB1fkL867cMe3MgUnZ8Zdd9DwL9nwUpGg3e3J48fNaGNiZhgcYmM8dYZzMtRsGUS25wvG",
  "key16": "WPV1sciyBWVWSXn6FuXgXzfYx6uLBHR6PVwT9Esfot6QnnPAuvTpSHSeE5nQwK9kr4wDWuToLpNj1LyMt3yiaEi",
  "key17": "4gsNRG2K9rHfvgBHhN63FD61prvL7MPrMnX9B93duPz389mGQ4ZukueFbBoFRVAihGfx3ue6r8La5SUaZFt3U7hZ",
  "key18": "25k3ubjSYgnkUQTDULfTTT7dkKwebLmuNCZHC9UjvwBRspdVgUos8vyiMQAZvwogMq6q2f2EKt9souqk8cDjuJzb",
  "key19": "3uWD9GULCqE7fHTSd3ouz3UVJMYJyjKKVocVbJbzmAX3hrzuGdeaQKohoNy89o8x4sLmc8QCtfB5JjywgnjNoqbi",
  "key20": "3tMCLYmeH3EwJzJow5dZJjhbr8x6jawRoKKNrLvx3mndQs1mQwAHQgN33eHzKh1wSDAxYHdxppCzUu9GwiMWfhW4",
  "key21": "2rR5YkgyevAdxfzy1YiB86kCAYCvyBMwZzYZx4o36zyF6XCyJjQLmfh9zbTTq1mymLfmtwL2bNnbJmVxhzQvpqRh",
  "key22": "5whUUAptSJL8X6TnKmcq26Ham99vC6DL3HxmcFiXSRPU24TuDECP2jALb4Y61Vz3peJ7bvTFTgH8P2Pyork86D1v",
  "key23": "uNVQgiuPuxb3EViX1W61YFF1Bdw47Js8iNe1LXFFf6fgu8Nf6pgSsLxnbM83zqwDFxMiL7hVNCkvyWLK44js44c",
  "key24": "4GLTAAGhEuUA5xMYdvMAJTbukzXgrptAJnQzPjjVRwx1Evb1e31cD7Cd1fwxQTCCfXtnE4rAsRh2KeNLezH5ybXE"
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
