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
    "3odUycv2s9wx7FzVdTo8HFo5WXUYUxzbYmxHNdcT8VYvEDKbTqpSdiiY6t5z76SaUpYxJy3GG4AHLUVYsur53dom"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bbry4hEoA8EJc3GWhgLH9eRV3ELPKPQyvN1WfBJHMzuCMYYXdsF5x25po6SsYuLnv974BDvyd5E4UFVy3nnaj8T",
  "key1": "4bCNPrzf42DMZHSqmdz2WJaPRFKe4pEYqnJy7prppYo2k8zSi3akhygCxogmTYt8knKBrwKGVNoQ3Uabun8j2Wek",
  "key2": "2eZHbRX5PDyMrumMC899XnPdTekV42sbP8LSghffWFU5rTWeHtaWngorKYjkkWJeTb9pbvU8n81m1Cof8SwgknnS",
  "key3": "3D7pk7M431vJhpTvfe12JxzozdhQLkCg1UP7tSzUyE6VJVoyycpkvwvtiAPFkgXghuzB9uB6XN2oKjz193u771xe",
  "key4": "3QUVxJZXVqcqhdEmKhh2HVNiigYwQr2hzBRRD8dAqLQr8NB15e62U4yNaRvQj13bbivDtq8PB7vw1up8oguh3EQ8",
  "key5": "3rLMG4KLMy6pbtRwtUHFsPujCP859ZtdfCx9eavnMrEM774K8TF1HCdbmFKtdsEatNpJ31i4o9We6S5U6jCr9W4Q",
  "key6": "3GZsGk15t66mesQ3GUb3NfUrjcywJnVGxzq5dRwnLGUqpYK7vfiwMBnX1jdzQSoNFgmoYDUW5DHEVTgLHZT9xD76",
  "key7": "8pvD9UYnaBZu8VfQf7sCMAxBnD1siLbL8peeUNRTM8vFnLSYHpqgY8UcXc8sHusZqrbHWzhRtgsAriUbTq6ao4t",
  "key8": "5ZK5CZiaWoUaEJJPfTeP7qWjzF5HHDx51utmNWCzeEPwSSrk7HbwNaRYLerzYAZpfAU7X5ZRbf3Rve3yRRrbYpZp",
  "key9": "4TBt743z8AmvRJ6ytMSQW6aZ93EGcxDm2gpZ8P3abVPQ8P2tZP5i7tC5mxn547sRHqmTrGM47bPARBU6YXHCCaSy",
  "key10": "2MtEsLUgHVwx2rEaPuSHQW9BvdsCkMMJpJ3WazrX4kCDeERHgqUkp3JnEctmSPJunYZvmmfRYnkNXLmLHmexdiQn",
  "key11": "49nvRHe6AoT4611uLa6mW7WgkmKJ7Ho6wqLyXggjRDeNMe5uPbm3iDU2Rn25faNZhhTDv6ZJQHafxtLSfEMxab7W",
  "key12": "2DpoW6935FWRgErQAjK89YpPFmYyJTSDP6MpRUfqoziJzHBGhCUVMYHMqLdtfqYyedKKBwYGeq8DuxrBhMcLBjy",
  "key13": "Bnpo5hsSs9oMT4QooAf5gnp7ZU7Yfd1WTLrBpqnCeHePhRFtrVotBLsszLCu9v1csg6a9zMNd2QuviJat1LijYZ",
  "key14": "3GJ4YkAPdzifmasQnq1QhWjvgkUEZ8rTsxPvMcpfuxZzuaz1fx1AYZLNTJcNA3yWTnQanBW8ErfcF6iij1wxuVak",
  "key15": "2vvSXf8X87ahue2rFJVFNJtZ9AWebRcsjaanyCHxQh6YBFoDQxU52sDu4inLevy1xD5BdD5qLTjGg6q9inCk5Vx7",
  "key16": "5Hk38k2fyo5GK1hPcoxFyc7nYj66QMDMKW6qcSgVMA3nLVzYXeBite85uDz1hSF7VNxqYDgzz86JwuWPWFCkZGhy",
  "key17": "58jzLtdZhxsy2vwGQxXKg28cYZq3kBmxbcKkCA3gAucz9zu5DigccFnZrP7nbxfxo9wjPDy9tWABBr3bTW3LLhjE",
  "key18": "4sb9A4gQ2jCToMXUH3eNGcdkgSNEPucaZypT2Guv1gK4ouP7q4UabAf8ums69W54M914zxLvVqe2FoEy96yPhFKu",
  "key19": "2ZbZWC3RBYN3HVyc8oFfbz3m3VTjqzaPDYifeovTW3WszaNDuc56dYNDsobnedoF71SqS9yCvNRrV2q2QfJEQTU7",
  "key20": "nXNqk2ZpvJtZM7JEmcBtGjKrgAen2LQBQ7Ce7fZfAp9w3me2Xw5bJdTGkjy3LrW55BZhGLuNCMBXRpx7xhPBhGQ",
  "key21": "yNWAqFP4uNu8HHecC34LhLCYaySuXBg1HyUb5JnMo7LxNpyrYBtZL3EzKa263z2kksZZKdngnFdhQnmgfZLdbUQ",
  "key22": "3MQZKD7L8AUHSZPST2Znb41EUBLMmVtgJP6F2CAp5PcokFFB7PHNdFdyHAVCXxjS3JMd3ZVK7mu7eUKzq4X6Fvx3",
  "key23": "3R7Gd2kX2pxDUxHt6AvyJn4qmpVLcKC7UaHk9HdvS1CM7u6Y5Yv9e5zVcu5Db8GEFZLswxoLeQixNtauDUuRC1Tq",
  "key24": "2iBuTpq5v7gwkbE6You5TNjUxDhpNM3mMRXm4u2Bt9f1S1bsFqodcgjmmwUxJJCxYMuuWMoXtjACdt5CUb5v5EGg",
  "key25": "NkLGTpzvnWfV3ZXsg3yKViqN766ufpnozDo4i5Xci7KU71v7kQz27eEkcdQBgHBcvtQA4qrHepapfJbUa9VMfDj"
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
