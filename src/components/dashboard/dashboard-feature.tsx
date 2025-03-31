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
    "biaNnx3B6Ks7LQzrnxZAJ8rXsgC6fPJvgNijucVgyQkArekupzvhoCLCEerZAUu2MnRisnDrrW8VRZ4R1UgNUoP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vNc7YjFrLDNfeXmqHEoMcPiYujh9nTZhLzcugUth2MpXVgLBhKpUaH5zQSWRAGJDmzqu2DwPUL4MeK1H6nBEZkk",
  "key1": "487tYemnDSZC6PqqhMPbU6d2YFaKA2cynfUYbUok3NHANms5MucYh9iB5AUQ8yjcxuo1oEQdph9asYryiWFzxK4v",
  "key2": "qsbSDpcqkpXzY7RuSX7Ngz3jhKAcgTVUJ1qYZinKFUnyG8BizstLLQr8oKzHgYr5h2vJwnjLi62yooBufLMzjvD",
  "key3": "38QBxF94ofErU1kp36KM4gBcDrR16CrukFwK2WdEQCQFcgAMuQbvYT9pK42S17PeapD8pkBPG7w1JnW7AixqEpL2",
  "key4": "5FoJJhvpjSu8B8rnqEDxcZW8MhRTqpeTxhDpaf6nUKZd7Sv7hj95QQUbzgi9wuRDMXu2Lhwz8ahfUpyvwYXZmJMR",
  "key5": "W4icp1WuCRvrr1v3ZujtQPEDC9kByJTieNtYH1hAK7ESD2otw5QSHGesrgPPkQQ6pLWWrjcBWuNGmsWEna8LU95",
  "key6": "4F8LaGGNGGcbztSVeh2E2Sxov6bt14SGUx7Yn6Cg3UBC5Mv13kdejkCye3g8itkvySjN7uKTXt85R6NL2as8gAEL",
  "key7": "p5pMXfvaab8TzAvPKX5FNyv8Q4gjaJgGWN1c3ujT8QguhLAmWMUe6WyHrPjoX7LmPRk7zYqAdzQ7zFu7p8o4MDJ",
  "key8": "4QkJnLSGwnHHiRXC4t5jY4HhEFhjGoY8vy7VAG1ja4LqcidZb8wdgBDLzbT5rkZAfp2g2M2xbvede8VxrmCBBPgW",
  "key9": "5u5Mu5JaSncHbKP9Sn9HNHN9rTKWhheDBHDXjRR6HVVh97Q9cvKHdS5gPXwpmRNxxV4b8rT7TxdLhw3MQrq51aWS",
  "key10": "YanveRyRwZxBWJjL6fBpiEEQL9X7CDVM7ATiUk898kyxSyzVZNLzsHadS3aACHADpRyDX5EgbPjxoWeVGdJVf6C",
  "key11": "A4Vu8dU9m6sBxnh75TPKMSuoVUxx1RFTJe2eeZZCHA4UVUXMRFAN1DJ49AGSpGMktuavC8CgBQ34efBY57D8f7o",
  "key12": "qMMmYjAzDHkgXaqrmMuZkdH1gi1dt1yJ86Jrfxpqp4xcBTEzBS5HvN5zPR37EYvuhAYx5vz6wuux5ChuUjmD8Y1",
  "key13": "2fCCr6yYBtSzwARGe3NoXm5ZPV5obHqGQDqQ1eoJDemv4jDakVzWHw2UtmdkMSRNEX2yG6aZopgGLHCvY6qjQTk3",
  "key14": "5MWLvagknRYgyZS1FXxAMiW5tFSJsh8VHzR3ip7C5ixu9g6Gf8KXfwC2GZVikwFXGPKURbsUjNLabcoXVe2sKBjS",
  "key15": "3eDJBiftxWxJXDDKy5h8kZUSWFShyszR11fUnH4AhTATfQLg6KBW8FBEL9bGYAGHHPuHZ9CLcygwCfHGukVA4SwC",
  "key16": "4dhnfhXuxrBH6592n3Cke3vngnx6BZLmpsBTttx7jgRr1CKy74JRfTrvVUc7HbaunWmN42PzXW6Q4LwJA8TrNBxD",
  "key17": "84y8W6meeH18BDQvBAXskcE1WeWgWz3P8SXmCyaPWapbsJE5Ca5pR5HGuSENChVXPpQkhrnYrW28KN8kngEA4PB",
  "key18": "642tg62vQAA7GfxxALXpRcRZKaMZstBBBi5ifyWUpJ1dxjHGwp2ME6mpYHq89JWgiYNaMVr21kmV5vV4CHUgpTPL",
  "key19": "38wZGXsShpy1fBBNtFZq7CZM1ER2zHhQZBeYwu9XozJSo8SkEhdJV1KuW6jpndSYHHQGwWK6MngZSzMET7esbEBV",
  "key20": "2c9pjvZxJdUrZgbJdY8B7UPG6TvUWiTBQeSeFaMHhRNm73hP8emqY2uvREMg6UA5xiRNjg9Dh96qx72dC5HpDbfW",
  "key21": "66euUfTHM9AKvBaYyUCwfbobuGZCKx8bCa3uAuq7M8KgHDh51hLya6QhBmn92uQH9iYw9KydnQv6puHhBTbLrVUo",
  "key22": "4TAvALpwn93f6Nh1P54ZkWy8EWBDpUyek3u35XvNt7T3nN7tw1qsPpeZV2SpYwbXQmJoy4DSwbqGFFSjy6dX7tgS",
  "key23": "66XkjWtZ1q4T5BrU6R1MK8Vn5MrVm24ZLYRgqDN2kvVhedYZwDKm87GE21QhE4tRHGdfe8DSU2RFxm2NeQ6Wora5",
  "key24": "5w5bvoi8bLjSDpVs8pivYc6gWo2HxgbCYoxNRHABcWLPy7t9NezYXrSbGLRMYEEJPNaxk3RwrJKAoT6htqusKczz",
  "key25": "3BCLuddGQkUxewuakAzGSg2cxx5aLL4cuMnKxo8i5ExTzwwC4AKhaxVVpKdmh4SfvE98QByqm2gdQs2TQypmr3KS",
  "key26": "A5RiEiiZDT8nMnfLVCiA2kmdcY7uzzjn1zWuXi4kru9bbZKt9EA9RPH3erUp2H2E2p8Eo4YLMC6FsB1cuahroS1",
  "key27": "JhzD4mSd9vuMc8jx4HuAgj7USw16D1C7qm4Ug5Kgye9etFbow6WR6T58hbVuTQ79e5FuqKJvkB4NktQKVHSv4d4",
  "key28": "2pzaQufdQ1sNXufdpUTs3yTkYddExNugyzQWxuxiUBLDJxVh6U3ovz2D6QEZ8TPsLRz2EbpvqZcrbKnX2DYahC2f"
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
