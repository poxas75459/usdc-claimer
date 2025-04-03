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
    "2RbjBo3ZpnDkRSK7kWwUvPBahPJYQnJ8B1MQWcMtENAMCEkNr2dt6D2DXoBjCNuFkRRoBbxvvWN6VspgGWhZAQys"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64iqdfn4xxGZgHBSYu5ha5tmAzUeeeYVCJpYovWih5Des4spUTzeCYeF82ZpMnchMdWu2zRc9u6DXXrSCHhuVETE",
  "key1": "URnSeGw1tjNRpw381UuEFvNbgRQJi7eWptCTfKMNcRXuFtR21mErE3FKKhZvhS3b824K3GXiAyBQzmDiYApAGRo",
  "key2": "4MaD33M655Kgu42HTAvuVhXWdNqTfBdNrB44W9Jm8RuFFR5fMdgAA9JDiYa3baS5fqtUyBNnwtRrnbNpEWLwLK8T",
  "key3": "7m79vDLoEWRbLYv4UGKcPFHdcNZB5AwBBscGVrPmc2tzujTXEaGYwGLr7moZ2LMLb3db5wAB5NPzVXqdAgwKmKK",
  "key4": "48JCuRabMjuvAoz8HRHPVRqYkXMANXTCGLCdLkKRvEiB7TEdEU7xW4HKdjDqtBAxbtzjz282h3N4ozS5myeEwbDe",
  "key5": "4PKeryqNJZEm6U2Tu3KmmGEoVaQzXJhgTbhcLEZZFPTPWMq3kbheWBDovDpj4yPeQ8aLMjSKWouC5ywUVr3CFSzd",
  "key6": "3msWwssQW5BQVwQVQm6Wgx5vM7KU3Xze8G6vcapqYBaCufQXy7qhPVHPveNvHjVKHnwShZLt5MekLzpoUnKQXJ9y",
  "key7": "47sQ8rgPNApMuLCs5fQgBz8Wh84WgVT9fGKs1wVLL18ywDo6VApWyWudz7f5Pn5W8MGWD4bzAs2uaX9zQMP2Vr7u",
  "key8": "2t6MLFzG5kmefgrufWRUqKnjDSBqaDosz7rkYx1kJHq4TS4JQJbYG1H1g9eDUJ46aZ5K2tBR92zvNmVeH6MXtMjw",
  "key9": "5FhNibyjQLRKWjL2h424u3PEF5tJGUU4UKm2GTdWD5CA97397vZEayFAQKrtciVNMXRZCR7QvbydbLS2ZseQT5wf",
  "key10": "iLgBNN9AXhwLv9ybfGDRsdMQs6H25K69hR9XGQMWE7VKSJY524tMN2yK3KyJz1eFAEJAwth8GUtaDRVhiDc7UeH",
  "key11": "4h7Qh1QQdihD2v1kzVnyrWYpyMrjnNQ4o7v2u2J4ka6GGfwVeJpFoJP2vy2SRAoMX8EcfAThFeA87PnCrq91fFi7",
  "key12": "2nkb1iFXnx9SdjVVbWhFoEiZhDagqSgtNb2Nbx1oF6T56ecZM6qdhy9GsG6WaSQfmdfioAbvGKupwmy1p46ZybZC",
  "key13": "3pRutuG1uuHZvDSP9DEwCHQgX3CvKtunjsroiuRNrzDFzDe3Pjz5MkdHBMtnhtjnMVnRv4bMdmg7mbt8rwahRbd9",
  "key14": "5Dvk7umZn8UTAxgW9eV7XsvonLPfUzsBTp5d8mQrEy3qfFHKa1rBv8UyCJd3ztwz9cpG6Nhh6ez3BjiaNQ2EcNct",
  "key15": "4ACoHxRy6mi1t9c6cCpD17fhiWoRtHGvGhVGrCntUMS4CNhPjZU9tTUJPSKguNLmrWh3b3kTB6WduxXpmrLkicZ2",
  "key16": "54nfLhjDHK8YSUika2RcohjAKVV42Spnt64PEjSV3Nr7bUB9uy83xUxRkGmivnofDc849YgtkwKQYra6ABWeC7rD",
  "key17": "4J6DP1D1A5zdpVJCBh38ZBpXs5L9xEmP5CkipEiDcFpEgd4xhXjVEnnpvQQiRs2AeEDF74vmLWU56uCZEehKgvfD",
  "key18": "2LvbMx8PAUAQgfAaMvTfYrkCmvXTrNd6RtnbUtamHSJ5QjiZZLEV4CJD6m3pnB9mY5eGDm4D5ndzLDmxoeBjNBxG",
  "key19": "3zmvK8DrB7BHWExG3YKafVH7nuohceXZ9usC5pzxcn9799m6WHa8MZER5ZCMw4U954k5wv9FtFe96RcP3G9Aua3V",
  "key20": "4mtNqgGnD7TixH4uNc8Lx7KdzFwfq1TykJ24o6TU2o56omYr9cK859cSg6xHjM9g16bdarhomBnUeHgV8Cb8XfeC",
  "key21": "33jhb31S9PhyJ9BGvQ1GbUWi67ZWQyZwAqxLf8NiGWd3y3SxP764ZTjYvmoyLnMJdfApmUisw65ia8XnGv7Nyqty",
  "key22": "3Uogadr8pCNvTrJDQ2X677UryqcdMwJDpuGMJ97ULbididApFKH3SLR9YptZa2HzDs2AmtBXizjwjjUJEK4Nx7PR",
  "key23": "3K2y8JDXMCLVmChDFw2jb4K5Z4zvfVfMEVkdr78mgWBSsvHTef38qc7XgWumNG4922FdQ6nsfYxgf4ybYkyhQ5zG",
  "key24": "3W883dGXqnjE7xavTxsQvj3qDEEdCRto4Ma5fxHDjMEqp2tKdsZYYprxWv18k7ZuYn4t9e8Tx1TRQLQZa2CwqqV5",
  "key25": "3wiiTUus3vpVF4VpjxhnqesYe5f2m1eKZiME8Ro1HKnWP6GYgNXqxUYGttrkYzsMUxRcXahHJRSzXqX4yCuHbgN8",
  "key26": "3p365iSNZ4yTTH4RkbdaDyc7CqyRR99X61QR4L6ZhMF7aJzCmwVj7uvTFsMEKvMNmHEeZC8Dset327J9dWtEyGF2",
  "key27": "44sxhoNmqGZVAhUr3fbXzhK9pqiELshx8VcAcYWfbFeo5WeeXt75e1R5RorkD7JdwLBwaUY6Jx4Y8Mq9WvbJJWxK",
  "key28": "2uwKLWLPsHPX8x6AJKpajLkoyGqC9oAcf2nWEKNm5Eg8VVankCRayY2hhd2Piqu6DRYcxnL6qQ2r6oW6s9eC3C7p",
  "key29": "3tmsw2KNsye95PgDD55N8icg2UD1Pj5NqjRJ1z2XNbf3ZNvmEdPWnc5wkftSSTEYe8aN87MHqXD9J6HY2DJBDkCU",
  "key30": "GYowzHSDAqQu8xhFUxE49VWrgxjSXLuqy1xjzANj7z4Yc1yEqgzCskiVnsrBgVY2EWt9sufMFaGi7KFc3k2MEkE",
  "key31": "23bjfRAdg6We7cqA93g8j16PLVMeNXpFx78VzYMz5ytGpznHpvfpR6SgRXUJnZfiqCQ4ZGq6KdT57cFdkD2zuCyF",
  "key32": "2irYSxV6RYDjFTDmsDJoAuTQ66JX4vKJqAeUjmYY3G4v8VBq54u9sMbibVrqVmdZ3mbXy7Y8QymiAQih15sJhkvz",
  "key33": "54SJxc4vJWjDJ7RdDTaYiwdozNrEQWHKHEJkLFksAHHUDZHWQDzTSpMDbi6sEjAWAuZkXWrGqCfvGuVYLuLcHpYs"
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
