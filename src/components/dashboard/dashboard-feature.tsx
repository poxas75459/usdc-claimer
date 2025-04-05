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
    "35hmJwnz6jsurQBg3Dp9F845UNm21LmW7KeTVuegKgUaHowbUw6286xb9jNHAzKkwtef7uSX1gUyFcDyH9cx8FFs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2VgnwiWNhuyDFzmbcNQDirPjAAE6s6FWukjZWQ9MNWF9vm7V9jyxXngYeFqgRfao9UpjeJpVoHyy8MpMuKQDUEvq",
  "key1": "3ghEZgLwUGcKqpsNFcsjY6TZTDDsWWYcd7uq8nUQv48rcicUvKwaxy3UkRQhZvaqge1VBV7aQz2oMqi5jt3eyfRu",
  "key2": "4Lc3MN9jjJW81bQbczZVboDHAWFYiNV6ozuY7vJxSuhpzS6cw3b11AZ6gKtRXAcXD3m3BBdt4WuYBnuyDgM6qek5",
  "key3": "CkeBGur3vz4nU2DZQBGvNgHsQNmLf271PM7DciWQqhqxspvksVQj4jGdbTZFcceG6jubPoSHmmuL6BpyzpL51bh",
  "key4": "2Yx4H1c5B74Nc5uQ8XwBWLrZNpd7heQAqUXiocLJdg1cNFffe7muAkPvEHPTdJZH1KFxpzWBu5uTp19SBkmYo2r4",
  "key5": "5WNBsD1wdjPsjveheecLkUeN1tbGHnNPxuTaD8vf1rtx1NZ7Zucn2MetKsDLCqs3godwEoK2iUtavybB6FvJBpjZ",
  "key6": "2Fod8zC6U1LtZg7nVwhgaoeWuejTrkfQnBeHasRMqpi2ttuYCn59FKZdy2UhwasBWLqc8GD9jgDkXKWFVV3eGAzm",
  "key7": "3fwtM6a1QfFRfWrBNFyM4m65hLTcMjeDeWpC3drSXsGXbXPzvSCouNvqGssgRUiuJbPCYE1TjToPZfmbtkVM262i",
  "key8": "37U5ZBVAiJCThrcwZCirf5eBL5DP9ngfHih9XRBQ3SxhvXRavTPGcY4uwPofVu9QkubWDTogqsb3FSV9otqhHnFW",
  "key9": "4iCLtpe6GkuHXFZQPMavFg6UdTysUAne81XYg8cYCRLvNH8evtmmiDDFK8kB4nNwuTkQbPAp7f6fVBBm2C18Jc5k",
  "key10": "2nNiZ32j4Aip1UvTpzd2TUzUywV4HLqMfUCxRuq3TxaSLY3PP92qWWJvfVeB5QNqMZu7MhFrzy6BTCUjYTRjfb9v",
  "key11": "242Fd6bZPeTimM8WKsSf2yJonrbD5cce7jt13ccrLEvoGU1iRZDaodg75EjciYX23tMu9qznMD4qjVpviKgjUMCa",
  "key12": "4yBFeFEzukvfbY5dABgYH2hahtgk14d2smX6zzsDYkcxxdgp3oDcSUwo482SghyU2FtVWVX8rfmZeK8YZegd66zP",
  "key13": "5eL9pCVeZt1gVtzsHhWouy8A88HxmoNmHyUgtcuzyUnisjqFF8vgmigmVj1jCV194h2Gnj7cXWcA4Ladj9RYt8bZ",
  "key14": "4jRBnTgfarmDzZ8DADhB3gV2TdTuytpSHqQwSPAkwH6tu33stgSKyLKrdswYUDFJa9ThEuiFSqCWo4dPxviN2qnb",
  "key15": "5qQLv6qydbye7BPHvJRwoTqkZKEzbzKBwn4y2iTiikBNfePyww68xA3twVN3RU5uZ67uuHp9ZdZZ5uryKS2uBJi1",
  "key16": "3DA7tNkM79icPsX2fBkVj4ZLdXs1YhwxQsVxJh6r67qBufEGsUwgkk1bjo4vmJsW5nFMusszivjXUVdfZNaX2VTn",
  "key17": "2EEGHhiv4YDP8WBK3a3WmcjtY9z3XufT3iLZMxuBtugn3SWt6x8QZz5Z2c95oqiBnochmRZqajL4KE69HSS3ttPr",
  "key18": "YJq8n7Zm49h9oNRoQPbSu3WbuwnXVyfU9oGoHvseRLq358sJr12F7TtGdQ8BhkS4BJtB9o1SwBJwJAgUYtAxSx2",
  "key19": "5h4LAxgZidXoCPETLMJqCZKV1BAebFrsyQXAxWGMXNQCwaXKk1AkVpF49AD1MCn21KMKkicTwUsJjLGYmhK6y9L1",
  "key20": "sMky6sJaNQWpGWmd8ktoeGHgmYQJS8vTbtf57pxuJfkcVYX6p8rqz6MzBqx2Xa1egcR4JEStrcNmHNTzBYPob4x",
  "key21": "62avEXmxBRYSvhPbKuk4h6RW9Q7pCwspX2wH1M9sT9WWdgYQA226J6HxghVTnXF4d2tV4hist7UB55VGqR2V6b3s",
  "key22": "51f1z1fbqLxLg9tG9pzRVcFtv6kDFWvMciVQhpxdiyBQiMHgvkRnNy1k4k5ZAuNu84vmcb7uZPSz8vw1uCnvUBdU",
  "key23": "3eTJhjbbZMhK5DLz2PiKthTBMD3vDQbBE3k2tfXsAJGfC9Rt5X6oPQvc3C3JWrQfT4UDfVFjCDE7DFPfYgJV6e6h",
  "key24": "51HoKPakiYV6LTYsQZXMv6YgpDCcLdQrmFduZ9YLPGMonn8QqS8j76FbcSGT4QG7tivcftHNXiBcqtrV3C6nVMr2",
  "key25": "42RHCZkjjLaTo35XrzJ1yqbyoUUL5RXxXRGt9eYJ4vteWZpuwqHD7MHX5fVvufuuz5tv5ywyxYjktySzTJjYcRYb"
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
