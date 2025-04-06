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
    "4CuqhEHQShC6iXryBduAcDEBvuStUjF3roWcvNCBHRsJRztNfqUZAVbDT5DRC2yHPAr9R8eNJhjbRdcyBrDarTFh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63yCkVxNvaSVdgxYMQV4EraZQrNqfMT7gSY3Lj3KLvVrseFR4QLkc4sNxUF2APfT8CZievqUnKMD39GhpY8JUFg5",
  "key1": "5hMxyYPxA49dkh5LkbVsqwDtLwqPeh2Vn4ompuqUbsE8vFfGNFCWD2QTF5d6G3c5UFKGX82GVi6iw2wC35GWGHse",
  "key2": "2wfgsuSqs6BpYese5Nhqhtpe5hwpFVV3v6hqELSnapaSQZofqHdpYpUEWRGtZWGXo1YosT8Rmzcu1nSzJu3pipk1",
  "key3": "4mnoBZi3vUgA8tSkvck5YEd7Q1mXyfbzpCjfg3HZzX19Fx3KCNBa5wedTL1vN3xxRAoo25g4zGpnpVpxZpPrvxuq",
  "key4": "36Nue6YEFsTitZHZcGC2oCfpkTWiypE5sAFjD181bTCPQjtutXLMgqR7F9UMKNZJQZrEjJjGH3ahcwFfwZJF2ZaV",
  "key5": "5R67NXmL97eszwwe6iY8CttqKkRER1MhR7WupdjwsuDrZUjv22x9J87vqzjswtDjF81MFa18aPXCwgJXHQPVG7UR",
  "key6": "DECp16fjQcpYHsscCWKDnWL6acwWSZoDuAxauC5JUp2LZk6sMviBVbqGDN5A9SZKaJu9u79wzmTjUVdTbe6Apbp",
  "key7": "5DehQK1ZKXs6VLfeSTqjabaqvb52FHycgTyGJPWevKgwv89r1jVBLs5RhVU15LhDsd5vAkXvJjYMgZeEWJErxjYd",
  "key8": "3RBGdf96Eewd8nctwQVrMAe9NNgCcD8icvrayDugo4YN9hw1Xt7HutRDPoLkKery6B2sTV4RiKATeY1nJG8XhWSa",
  "key9": "2BQBFMySzesC6pQTA1LaCc277cmL3ih89FY9M7iWV2HpaKtnp8PEaGyhHmeC7BpniBesHaw3TYMRT62Ey4CiFA5K",
  "key10": "58dKmzudkSk62XPHVPuHzpPwreqv1uVF2AfL24jNa2Jpjs6aqDgqJau6pcYZuMvK9mrDZKUNfahhEHSJZBR8BAXi",
  "key11": "MNPkWEcSdhvkUKM1W9VxGRZVXPQR6B2xKGghu8NMojRb6bymw9gntEt7Q2MNKQHSm9xXgQ8PHBsw3XMMuDD4of9",
  "key12": "4GkZQTheVwQs6R4dm7rqUqc79w4dDmqBadg4mfypkvSymKnGkMsYitUHGhg1paanA1q1mvtKXur3mjYQbTGH7zKq",
  "key13": "4MnN3cVW8S9jgyM8mQbiGi3Pe7rY7tAqFLkFxyJJiJTZ6ji9LgWz85hmSzUjNSwxzFrZTsrmMAeNLv3xkxBwHCSU",
  "key14": "4BTTu47tQoLqyJD5xajmf5n3E9xRNxSJ6ZpntgpWyYrGLgnW8nubCx1Q4AHbgpeo7haLWCikJ7PSUeaqu4wuHVEP",
  "key15": "2S9kakwRW9P4BuG89fPWJs1jMAkisQRU4pTmVz1x2rGPcXB8bKeTBwoZQtCTqHs6KifqeoaZjk49FeANGFsCbRSo",
  "key16": "4BbMxsYgDVZXrvz5AAKMXhwwGaKoQqe8K7BwziaR6xv1ZTQQhzP9RKkSh3tAGawsyLqQCojA3YoUmW9fgufvHuUf",
  "key17": "66ss7g7KKzTMQN9nniEZg2yHNe1z4iokoGuwLsPiRaBsoiYqc3nfvcMPvLKq74gRfnoJcZ6cFdSS9GCbJe44aYMD",
  "key18": "36o8ZECdUi7HRLVxtomQCBgQ1gLBHG3dYX2zgBZ9taFPUE6oLuTAGKEwK8PFfLNfbj5eemehbyCXcfkTfxg5DQbD",
  "key19": "3ACJq9m6gG44J1ySso3TtitfZYsWssdfMfAVQK9iENFqB3xffGJnCCZusKGLSixiMyz1A1LbWePsQRTEgDXkK38d",
  "key20": "3ERhCf6qSsAjvGKgy6X5HcXonv12h5vH4tU3azKV4obbB7uYMcpzDr7FkeJVaL7yEHf7oN3Z1Sp7x2aQFxksdZEw",
  "key21": "54kLRHScGbdJaAdFKgrE2aws6Y6QvqrsfALyBcZsKcJzYadfZC5FSTMaAP47cCnEQbMFPUXyFWxuLYWEYgMYCrM8",
  "key22": "2mm7PVcTTZZV7BQnpfgKbiaaWSUX93WsGmrJcjzuyFcXE7uYL4z6UiGvN8qKyrbCGzkSqParmCpCcfe17C5YcFE7",
  "key23": "5oFYVC78prhMGhxeMas3HKj2iG28jxQNyfKz4oKLaBeoCPwfNyQt6asdNknETGR9gKcybzGJc1C1g8pi8vknNHks",
  "key24": "2RmHeuEEs8M7CetTagoNYjpbLVRzHgRkAv2Sq96s7LnUuUpjphsNe7ZzKgkwdAAPmCb8iX5kL8mHzgVhQNwENMBm",
  "key25": "4kKbtco4WD9YpdQJvn2w31LhmC8uqemAbz2PNsEdf2EkepgjXVT93fuht3gGToMNsc4N2M5PoL9gMVzsNzWFmQQm",
  "key26": "4jJ3gktVxg7uXffHkc6apTHopja4wB91WbQNrFbMwuzqwfw34hoziiNEUHsJrh7XdgYDpQC8YbKnMWjjNFFRfQCN",
  "key27": "2sTs5FEKRLfh5uwKkdSQVFWtNLh5r7q5GakbqWwWS29dobXGkJtHFKWTS4HArjdWH24CbLzBYCRyaiukZzzDy6La",
  "key28": "QTg5HJTmKR6oHYTWXU4bugxC6kVMRJE3KdcWvC3RVULi7G5WYXtzDTwdpB2JDpWKZyKdFit8SHw7r36VLeF1Mep",
  "key29": "jmizvU1RRerXo1PThsgFrf5d5MT6MxcFDePM4uYR8YjkLwru6pqPmxAUEieuo19xHuQDZd1r9dSUyPX2UvnUvTt",
  "key30": "37MUTGhzqkwWFoeVbu3kG8CkVLbHsyodtXBhHNx59CSAWjnL9NrRFLFuRnrGp3WzvHUX1VTa1HLmuLa7GrKSrwP2",
  "key31": "5vGKN9tzTrLfw8gkLgZoVkbXieT4bMv4A4uQX33gnqD4g7WAngUhK5jodo1zv2MK6jMmVwkTmvQSgVBczzyoyqEg"
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
