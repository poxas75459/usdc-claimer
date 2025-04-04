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
    "3hswrR6fm233rB1ux4xwLsFPGreSwDwB3ivwQDzTa6ohkHG19wkFMRPPJCUxaWCof9pKFJZGVVix7azusGz3RJfW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3YGaXDHJwyx5E52LNdYVDTGmrEdYZMx8Hi3KzXPqLQA5FyRu24UBKsWWr1osSkbcoUVqC8PK423TUxGBicrggxaS",
  "key1": "3CSq525ztW2VhUKQGuBpUXwDk5ot9A33NW3PicwTH49NRP1odZNLomsBfAWDzWjDyVumZkpDz6ukrxe3tXaoHKoy",
  "key2": "2HTzFfCKrKbGzyWN7XjCP2c4a4yZnoahd441qEhAhH5NGBY6keC36HCNt68wNFqGYQEEtRKTxDdww7cjPPmFvC3q",
  "key3": "5ENvxhbm6HbjvRrqgg93dUidpDNVrFSFEKSxYt19oep8D3fwrb3cuTtrZ7ewPiErTE7dJTQ5nd7q4pxUR6R8PLSX",
  "key4": "5JoF6RjbCHeExMckKHxGFmnHyvaYVboXVfgVnvy8gr5PzdfMAp3WSFMY5wTqTX2cYhhnBWaB7qy4D5hmTeyKxoQe",
  "key5": "4YMwqyiUHaVweiCVPFRGt4ZcqxaWwGLSAXBSCdZR5ajuHVYGqBsnquYpptSuhRUd3x8uSc8y3mmppaZchKomhzBs",
  "key6": "5H5KHhwPKgyYWvj5i5svvTaBqhU73xKX8dk5bLLtEe6rrNoK6HuDeg5YwnGAuxsgyHaNADGhipHyUWi6EUphrc27",
  "key7": "51wuc4CDCssrWtAoWUGaEHiJYLweKqRQ8aZJtvjMy3zcr1xKwss9bFfeY4tCWK9u18M4nkzpmUATM1QQFtjD85zi",
  "key8": "3FWHxqYoPLMrK3u6hd7f2TiZwye5YTwSL48nUU4ftbHyx5Zt7RLDHz35SPDoeqktxQuwoRbKNvsoaoyoRLmLoLsN",
  "key9": "4kBr4r7NebZp3apVmdYDD3RgGTqyz1DdnkotJ534SrSxv35PTCZsFZaRotLa3wNs7wm8XSKMkTP8CBq9DS17KSv8",
  "key10": "hceMW8iX2oBawT4N4Xa3wzYvWWP3zhmxQKUKFPxWcboSDxLdugys8eCBcEEZzQTTMh9s4ADgtmV5DPs7BQGXCH9",
  "key11": "4xSRWcLop6t4QrVcY5ED4rqRg7q5KiTJ19VNBfJkctKt3NBfiMZpiG8t6iwuhpR511CGuYmnV9D7jbKmYzwwQ9Mj",
  "key12": "4wMpSHt5wbU7dDYZrQzEDkocKzSZmmBqbi4BxwPpXBNZyi2HEnSkLuXvitY3SjZJbao4tGY3HhNQUaq9n2vtZrPV",
  "key13": "2WTnrLU5TDpUJR3GKN3XTmJvxBkgQ9RsLrUekjTomFzw7Znp98VRNdPdccg448Yakmeqaz7yX8fXt3pXc6sai1zM",
  "key14": "5q2RHHQSNtdjbAmabWPp3LANecZY7h25hpkeUJYzqKaeWoVNjLHUXWvmnAvhYfTsjUSZe9JbgUcHZ1Zv8KJ87bkj",
  "key15": "3ChZ9tVGacb66i5z5EfqmNRQbJpGY8FVBTqq3MzmWjK8Ht9gVMNxsQRWurmg4hRiGykerRHXvBcwGACtjBFWrXgp",
  "key16": "rrwTpH5bFiBCUjdSkzrwyMF9ypBR3jvFzqnKZEncjadC6fyAnmSrY1wJz2Vm5M6J2JRVpRt3ojxKytMbkmtLTRC",
  "key17": "5frSQ9axRWHUNgWEZZUhpnXgpScTZKvD56D9odnVfECfhPbQ5eL9jLQkXe1X6K84Swkem4y7egzRaJutVfpev4ty",
  "key18": "4871HXeYeznGJzUVRKUDCvAWuStgagxrQkLAHWkt9cL9soKQAkg2baxjKK2Vd9bUW66RqK4vnAGjrKQn3sPCQ6jz",
  "key19": "63Ua8CUGfWsqdnfu8EG2VPfLoqn78LPsxvkyieV5cYVbHsvmf8K7rPxzJvh1k3DfTNJniezPcepUcgKAaZ4Ut81C",
  "key20": "5V7psY8CFqCaUWp45zAQiQoabAdKTHp6fBXTz4sk5BH4Q98YLqAbYdQTjr3UfdNSvhQdd1XniDDTjJVYS3xVvvjM",
  "key21": "3sY9o5pN9kYBQu9eWsAiPNaJqigez3K6kdhAZK7B2Rkx1mKzyNfzfr6arKvBEKqvEyuPJ4vw8Fcq6jJZoC8Zxr4H",
  "key22": "5hwAZn7Sni1oeEgZ2CNaLySHCf4p7FxcxG6UFJMngMTNczPZ6UbWf9tdMWctC3m14K2jvNCDU92Z9bErgotGmezk",
  "key23": "YJ8DK8tb4Lm41WAa7wynuviSYDRXnXPfmA9iQc9f8pAKyApNvMJ6b9bh5GXN8eU5ZkSFeQ8kkCiTHW6Y4QTibRz",
  "key24": "4vHfQ3bA7r3xR5MSRSG94XFB3LNMVXyfbYUcBYRmZBvwMhdXWm9J5dsiomWWjGAH4oqR3VRBF8Euy2ENrryAkaRf",
  "key25": "3HSNkuVL8hP1JLcEpa4hTFEpzWknXNsJrXicyKjFTjRTpNhxFVtZVgvduPmdM1FaJqCtiMMscNRzTLeQmEiUq4M3",
  "key26": "5inif3C1nLgMLggrRAnkTXyeLetUNi1W9VNH4ZXMj2NNZZdPqvLJYWkuPFdU89odUy9cV1H1JTDVkqUi5FkfBtF7",
  "key27": "zRR8KrPAUNskhNXiaWLGqb4bN32vk1hC4SeHAyooCMPVFa77W517Y4SCSdWqWGXsRXqQunxB3TkQKBamNwY72uV",
  "key28": "Jhk7pr6jN9sJoL7D5QZkJvrUYCv8tA2cBX1BpwFJhN1sLNLo8pvt9EMRcPf5naS6geA19FPqz2YPdoXpoL2Var4",
  "key29": "21rx5pYyYSeFSjHrmjFKmwTzskepnvvc5YhzDdns3V7HTXAa3auYixRdNsKRTi1effRkytd39opsqdJQcZ7QhzJU"
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
