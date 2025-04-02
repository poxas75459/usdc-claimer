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
    "3fephGW9XhYHUme1JdDQGB3z7QpEGnfUmJwksAgzKLfc1ULfVeJk7r2YBjbMd4du49H973kT9jnsyk1UsVwPzt1C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "21v93jTJtv88G2mNNK3VZXRdziY7fwDR3iS4ypTiZTYezyw6TJhuJgYDQAM3QdjT5cqq5Fyr5C5W8Q85iS8UvuD8",
  "key1": "4ecCW2TbLvZwU51a5AwS7uWNdpPUxUEeg89KB2VRQDsP1fKjRTLtPuz1DTehKSFLREo7PSUjCrzzJRgWzPwQPNLE",
  "key2": "2SQwzhYG5p4ogrLUn94qftfrRgs56zSTSCo5oVWDMJ3Hca6gKLMNR72GVgGxuaRYbJ7uwNR3QVtjC3aUaX7itJtZ",
  "key3": "ji7h81aYqZFu4pi9gEuXMdjvVG7BZA3PiyUeyimrPH4ncFGK8vhbyETUpP3jDpEfqF4CCLb7dLr8obPVrB2pNHV",
  "key4": "AZyTbkXPwWqP5MyiaJb9sGUZKr9vJcQ8BS7YidMoAEAdiwnyCSuiqxwd7NoT28DtTVQsgp1FsYeuLo3whc2ccQ6",
  "key5": "2f1KjptRjpRfh353cXSt9vMa5VEwi5SLUGV9LTfXS7eTgMH7iygmgHXC8rWishp8qruC8c4JnhT1FyhXqPBoWe2C",
  "key6": "2fhhvRYjViNojG77Ja1gabCmi1ahhESdFfAp1MwyozUpUJCus7LtPPu2Z2wDArjsWZceBabzyxuU87E2ceBAsvLT",
  "key7": "41K86f8gZoq8vgg5rSaLztGFpt7fLwaUwYW8iTz7sQjmS9p2PDn2ks2zn9ar22baz26fGv3x9G8PatippPKbiU9X",
  "key8": "2onMC8ZnicTS6YJjCySHuVreKFUHj7fS47ptzQgb6F5MsjAmPmPQYbVGKoixLN1LwksFes7pBWD5i1wmekyHFKYZ",
  "key9": "YkRH4mFg7puor1StmaEF1TPa98eYyxVZSxatHmVGhtjR8jjsq3XYxuK3RrTbddy8XGq4givYmPMed13oz2bRPQd",
  "key10": "3dUCGoE6Z9o83e6LMd3nwhaxmgiBfnk7oe1a69qJATFWnvUQZTE4xuXoDsmYbsQwuwc2LjFyecd64v6mx6Jj1CDu",
  "key11": "2KnGmyyyZCqo3i32wwAfXoEhT9f9uqyxzzKhBK5SRWQeQnXnJYRXfWLKvomb3RWWwdiSh7KfvamYY5qKiVwmEvcm",
  "key12": "2mewJatunpNtzcdG38NT66A8iUPoafS4E6JTJsKfdQXj8haEJrPvic4kqx8NrnKnUAS9rwr6ZZtoE93ZwhC7q4jD",
  "key13": "2eL3M2sQMoP2VGaxK6SdGtt3a3h2uW555LeEh7fXXng7DaRv4iAWFjbAsHhfbNYSAeAGxdPDwkLZTvCtBrh5YXTB",
  "key14": "JH6aUy19X7Fq9PAxGCAiWrb92vC5YjSeBF6E5RaV1eFm2Q6suDL5tTQLStv5byDC9nkYFQ6WDc44C485ttUoWPR",
  "key15": "5mRpDZC9Taag4gD54dQ9fpCREr7DxPQQ6DeKur5iuZ8wym3oqHicgR3wLPJmAdxPLnc8Wty7T4xKpDWgAMQ116Ug",
  "key16": "2yNY3CuR9NUgoeTCHncGKLQEntSnxAZHLFj6BC6K5PXVkPiLcRWDrVcdD4BiRYx4pgUHMj8GgrTZ9oFbpd5rUJmF",
  "key17": "5r1mce8t7Htn2K9cUh84qWTbZPGNki65kQXnNv2rxNa5gkgNb6YBvqA65FNue8mSUdrZBGXkzEH3FHjiZiz8KoKn",
  "key18": "2ThspTDnRu8qxB925AjYz3zjYBmQ51HnahH5RwEdK8ynk2i1EfghPgXkcX5UoNQKz6jMFmtB8ttC16xttwigWw7y",
  "key19": "3fwiSuPTYGygDiE9LjByL61P83wLvXkqpZh8soLNXz1dpi7THyUP9Ai8s3htVBuuwAgxNY6gZsEdyTUsmntbpYeS",
  "key20": "uHJLJn2wYgjTAehfkgvA3G76ndu58RuzSHTwDdqgDiP1Nh5aStxmmMtq1uvPUtCYjy8p673DWEQxzMKXmT2RQ4u",
  "key21": "2vPa58jz2dcisLRn5pcLPkTs8oARvyhNXydJAJjEPNWAhQ6CQQTNTmzM3x7ged4zMCjipBshXcidFok87Q7YbSWW",
  "key22": "5RESDH6oE5p1vh52DMgJMCxNi8u14mVu5eLQ8YNmnBLdD3ZkvsNzaGRWYqZA6xjzEtyACzR287XbZRQKyUUXGV7K",
  "key23": "31zvMxu6WQXmrxWbxYuMjy1yuhrefjfqPaYqe86Z9Xi9QGB1kHGNzoC8R8nNJpSwBeCgnLJ3GxyRCcwd8QfDK5G1",
  "key24": "34vcsPtCarMSBDHcomrAjNjP5M9kdxiJ3W66F1tSAfHDPKqeQykaGmoCiM1hzLmqFrr6Wz9WwjKFhdz8mDZJj3F1",
  "key25": "4fj1By3jxabcXDU8we3k6TzA7syyUvzbxQnKrdrNWUVFmkbsCrcc9jPbhHzSx8f73S8o75RnuuhVCcwUZZqvRJDF",
  "key26": "ZduHFBxxvXyCPVgrADBe2CdeDiJASUhe5vdkrPyZqHAmd7GczBSQRqQ1ADPYr6xVTegNGJMWvWfqnAnDNEqFP3g",
  "key27": "55npu9aj36sNkka1hcLPai2Zvk37ZeJD7APuRL7Nh4EPa3kVHbLwojNQnPdpGYa3iC7D8Ui9NVR6ycozThzNZVQF"
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
