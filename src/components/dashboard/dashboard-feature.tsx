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
    "4eCc5GJ9jibPZFfvC1xyC14NnZeevWqnfFTbbJc8JewKcvzqDSk3mJNSwMjgog4AFA8F8kkDu29PanWt35XEctnX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hu34yXHBnWRCvzposQTGVaqSLHatk8Bnh46Q1FJZhRWVSA96wR8CVB4BQvDFyzYX6k5fSCaU6orxoc7xYZEuC4L",
  "key1": "5Jr3Dd4kusGnUWkiw3Cimg5CMMLFVXiqidPa3kM8x4itw8h5EcFdHucz8cYpTudrecgRn77gBCLPSXSG6X3deMT4",
  "key2": "5jwEV1LEA1gJ49PQbSmdJFVPBaAV1TaS8CSsWQcyveWQzCwGQQ67Ync7iLBbeENDvaGm45XgAfMWN5RZhKjDx3bu",
  "key3": "2TQnAXohmopXcSSKg1kyu8xpAPMFf1ga7zuiWq7GJi3oaUpGjcuCqvhR4ZeNaizyHVdj3mDyGVgov2KXFGgMx6Dc",
  "key4": "2pTEbYcsybSBFhWZcbRGYqQJnG5VHFwt1DSjJCo3j5KjxHurDarQ6sbhxeEbQsGwpRkdXuNJju6bkdaHo5mEeCN9",
  "key5": "2E6BkvvuCcNUqSTSexLHtj8gk1UNPbxRZWozEGyzV1VHBoxcM6wyb1vXfyWdwH1PywzB9jr7Dw8K8T3KEEYZAMfN",
  "key6": "41GLE1txDFj9esioRkYTLr4An2P4ufudwyLPvwxvHNZEdVXGnY228MA319VD8WMmoHBEAAAxaSKw6BxtFnEHnLVc",
  "key7": "2TWVmixUPkq7YPTX3yjkGcaz9181WkbDhj2L46reEavvyynzhPpA87xDqPv5FAgL5jm7rDrmcqCJZQYtUZbGKGfB",
  "key8": "KmzqxnLqpotmrE4j4TtxQ2p9yVjst1LeQGru4WfYtvsJUKFDJNKsDmoyQdAWpWbPYgYcdJzEa1ivdApp7Qf8fKe",
  "key9": "34rv7HFcmvEKEuK9b8dkgwKAW7MW9kU62Waay1z3C9A7CHHnEhM7bTLyohNt55ajsE5SLEw2vpVWAoupLbpPzZ4j",
  "key10": "27c5rvdk4VLJKX2JUhjVBTyv6ZTba4zPhNt7knTsYL7QotVNGvDZWFdmsDHYDR1aFNsz8Pu1DEGrS5AzpVfus2FN",
  "key11": "4gKBrz5yUKyWqCTuTKJbFcyvhwqamMg4wVbN23EVDSqGUqDrMycBFBfhnimqVg18P6KHgruHPww5Y7HEL9x2VHhN",
  "key12": "Gkh8sToSXxYmo9qSi8yX1vUJRtDeMZC8nEso3T13bnsdjmLAgkgKhh2u9Fa41YX1VA2sjpP4TWXvCag53wdsssy",
  "key13": "gz4vBhrBoPdyHifL9mUKAVz9vdRsKvFLsvMxGMLbpfRmVgzkGvs1kYps9MEYKpwQ1kruZr7nHuLyw29jPRYc9Sv",
  "key14": "5pu7BZVFh3iWijdPuS9km36P2gBY2X4Aoj4zTf4PkA6dH51P2LgCaqDRWg92EDhTKXezbo2g7qiKZ8jhCaoiVVgT",
  "key15": "5QcVLzG1Q2McTpo3nA7kJb1rYGhP8uvFcgn4AZwfRV3ZyU7Mapw4b7SB2pKbBFFhfesWnHJy3M4S8LmfvV52niML",
  "key16": "3vAn2rdSbN5JzdEfxShs2vECJxhEH4z2iFwyzxkcPAtNzngFRfZURYXq9c9d7adxXYjQNFdUSCD9oub9PfBtRAdK",
  "key17": "5eZVaHtL9aHKaVkfd5zkHd7xqiruZLUvZksZKPyVqjpNu9RYQ9avk9orvHTArdUMgnsew9r1mSZokDWMizeCqo1J",
  "key18": "3rYZrM99tyGZeiN71tacAsmsKEGCtvsmtKaW2pGiiHECP8aP3uynEg8f5gpAmmJeH23kvLjnAdQ8z44xEy1gFhtr",
  "key19": "3EzPiNY53iULjRnCXCe3DbrgfTbB9HqaEfeLdqzjgnDj7RL2KAoPBpX4t1iGSc1B8QMQx8ycbSgfDYt1SnKUxcF6",
  "key20": "2rHdcT33tGsRJn1As38eYm1GfEjwRiAasuf1d9hdpA6oURWZKaguuJEQscv9wpkwgvFDP8Xizg3T7WsoC1uAHw79",
  "key21": "66K8DMciphH7GQStRK3WDuVsVBwfDkgDqQ9Qzt642z75S8pxCj1vDm7ZE1tSaoGXZyCuFCAGSE2RboxpMWHdxPEY",
  "key22": "4xL2oRQY2PGtPe4R5UP9ZrSNPoRmJinH331MQ3ME1wYBkuTh91cQhnUFb77zDEodzuYKxdPjZo6j9tNTUQyCNBB",
  "key23": "2C5hojjpQv7zBpLCHsKZNfGWohiaHyZd9wtZqHqSNH7zupPGghM66SfgXP1X6LHNFewyrZh5Y4weBP1pvGnSxQRU",
  "key24": "4osvcmBhxrhyuBJkdmzMc4yszYZGZddoTTppwQDYaBxXGHz2UaiQYvQBpdqGNonVh8Me7E5m6qs833VPgoFSbdqZ",
  "key25": "5YaQh3pcnCCMJaEn58NkiGDFLvgxSfqgnGTG5eKzpXSrAWC2tUk3Tavmkgt7PNA3setz8vtzzdZc3DQkj4tKPq5U",
  "key26": "4AVNqgm4GWacNBuRU737ZsSB1SjmhWdmSwFPF1LLeZ6g8H5gqnphEPUnjqd15MF4zApdty95qNrpCjZUkYLyPhTH",
  "key27": "5YQDp451XvViSJrHqLzp5E4LKaznvsF4nkhdJjh6iaMQktuyLwnt31HHZ5Rxp2zt2oBzGbVTnp1ubj5CvUYUGTbP"
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
