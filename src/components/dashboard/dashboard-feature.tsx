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
    "4LmuHyjtm6fL7ZEGzkpa3bVQwpedCcqr7emc9ZbGR8wUbMAALSKdUKcKBSSM7zyE4JPphSb1u8w5kSHEnsp67YSi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PfH58AhSpQprMLpd3QFVbdRNdREbwxqwGytNXGDSYMUgBisbaLgxLjyKJsNwKyLfvQeBUQK3v5veqAJ7pVzVzHa",
  "key1": "ZYVHxNLCKz19yU3gr97qg3T9SYNQVJp8fFu9EgK3cKipkbrwasfp6zLDsV1Ns1DvLNAYqHvhPYQGxw5s1Jmt8jP",
  "key2": "Dqm7XbN2xZGogqwaBP5z1dU4qV5ujZyNR1xXfbfiknv6KupyrdEqBZ4ZkmUvs1d732AeDSqwed2P2cC7Aof2uWQ",
  "key3": "4cHkW5VGZEuutMce57s9CZCm1H9jcqc9s1M7HPLT4tfbcBhGsujpcLdkg6voFSZRNLuxEoUZuYYuvhf3rPNVjmq5",
  "key4": "2zH5uwM6adiE1Xo7mYyBMdFAPcjkYDuWnqBTv7cUJj43TNUK9uC8NsANpyEm4NonHzaEdYXu9Bz92msjMVQ1a5UF",
  "key5": "5Ng4ENS1BEoVkEA8VMtYCsxMFihUEGtskwcxsFK4hpuUoqek8VRS46zntyArudrigDycfaPq6U9Q7kxGHDfxNFM",
  "key6": "XrMGPZ5yLSi3XuiZoDMh578SL1wNYoC5vZTzrQTguHFC4g6UH7BbJVPPw63ipBatbXWLNYZnRYeuLFoMMtzTNpw",
  "key7": "5u9n3hLNHFKzMBSSXP3cqLqZUqPMeU4wHKVVS46acKumXP2f2ATd17VHkKfsCeXu8Nx55ts3yphm1w7iU6ERpLgo",
  "key8": "kfMUsF3FGSBQxs3yDH9LebfgXSntd7PstnhYCaxBkWQd1zUaNA3uLR4NgHEqpTmTaf19sepDY3XwVGG3QsWSkhq",
  "key9": "2VP9HvoNkcBLT884em2shnVVRd1Mbjqj5aWHzjihv34k9yhimi4pgjBFcFv5YVYiWi11iroQUQLHCzTcY3UtZmw9",
  "key10": "4DyNrcP7r6TkMRk3XiXm2Cpa98D3bt1gnYoXvE8w95eyx1bMkowPfcTKGESomSBwPDvN5egsDPPiQUNX6AyvUgQu",
  "key11": "4AJ2vQk2d2Xe7NMP8huVvso87mAvrQVPYrHxj6giwCbsFeto2n3tPZgjb6tMZegoB2MwRM8Ydpwgdnac7wB3PtYY",
  "key12": "4SRJiQpzCRD9itcKL1wU9ZsF6spM9crQ6XVZCoR5SUndWBPbZmFsZTH3kQ9XF8U9Ws9E35e6BBXajWHHgWL4fDmp",
  "key13": "4LW1ioJaNR487zA8zAGHP7NTYXc5Bt3hZu5yhg9QKvAS7GtMqKePaSYSd4LhFY8EiZUCGtsTJdxGnoicY7ADYifi",
  "key14": "36rThfpq5YshBdv3Gxc5vuGawq13C8aat9MAwsr7x3WBC7NnCocqJDvEN9wUC5HrTmPrdCa3jpLKsFDqotXZWhty",
  "key15": "3Qij4doVyWWstTYgF65uP1XQqRHCtvizgbefrfeHTTX43aMW4okWvs1BCDMjkmjENT2AEKzTMueNL6AD6vxqzgKK",
  "key16": "3YAPkZWvkgbuQNs8CDtQWf1s8C7LbAwEBpqskFjgA9U5P5XoQ1T6AqafP3ySsvxsS8zKyLBEps5TsCAUA1ZRpDdG",
  "key17": "5nHm9UeCfPQA6fkUAZe4cQGz7BCH69mudAfRqo7HUezV9x4AWSQyHHuzkYkFjLMA1GE4GYf6MjSxyn6bo7XPoHAX",
  "key18": "2p4jdFUurLhC6m52c72HCL9hLv7noH8ay6kV47bXdRdQWvLgd9uBXC5cCq3bQ5uJn6Agkkj5wdAY5kaJc7WPMx9b",
  "key19": "5oKecZzwpSAxHcZDR7T8ne8UgRmwEMtHsRG3VF8kLFLvYEsagU3WCd68cM6GmzDx3LLQBJJW5beg7zH6KoAeHHcg",
  "key20": "3tEGkutLjZUXyZFyz89CX1AhXwTT4pnPvvMenbWLfBU7YHQEh4TwZzMaCBbVtZ27Zju1BmXRJpuRS5KvnfKmuCmv",
  "key21": "5xrj7dHz3RFWiV5gxbbR1Lu1VSCP1EwvfrnveZXv7YKcFqaQ5PeySiU7joYCGsxXvnedE6qAUMksjoqocVgKCJFF",
  "key22": "2XnRNedrmGzzGkBrsehBcHFRZBJUWSFQK2xpR9WVRLfQQEUrJYUwNRSLR8yNbKfGNf2NDUoFKPRekkMnHJFhyfQB",
  "key23": "3CaPh8qVDKYUbk6u7EEZ7uM2eLYr9z6U91Ct9HwjNNa7bkD7Aepczk2DqDGPPiP6qfbgp23qSqvsP8cqJoPXMnxT",
  "key24": "3eLvKviCKDehAwbuxZPG2XzTaqUwA4Ew1akbNx3svNGbTmMdbU8k9mRSLXbLo2AjjeQcQCjxAXj73LGigbXy1s92",
  "key25": "54RegpNXTG5iQgkmisrozLJqfphtbNYEqtTud7UouHeGYTc3kRnEneKQjAcEj3UaiDopZx8dFr3d4MbEJL47odVw",
  "key26": "JsGaJEkGw4qZHgMW8eVUWUmfQ4un9u3Cv13ZZwfXVgUfbkNBrJnyn4ijgQsEZajk2z4RqZuwh7UE4cx2ngV7Dtk",
  "key27": "4wVV2iPGEjhRJhXND2rgdYSQSqu3yPN6Jxgf6NHUdUGVKrKCUvMVoC7nVZjrifmcUXTiNLvZhMgPFWbefCFJTtar",
  "key28": "2mDqt9EZpbyFsJ3GfZhojKnGEAxkGwToeuZ1avKthuheiZgc4ESuMD2oPaAKKUCV3CZbBR6tdVDXRF6TAzCkwwpR",
  "key29": "5u41vFc3PMEZHrRrZeAHrFTcXLTgAgyregucjKfKXUiFgYqerRnMnuWVtAKd8fNnyTLpgPnJ4CCeKqfEExQQZKhQ",
  "key30": "xgcDWNEL5X6pkg8datGV8cczyMGu1GdiV9R4LCBLijCmV6FZnLAADXdKi146SudfDnCVgd42Yhe6QbvcHnr5dS6",
  "key31": "3HeKuE8mZHDG18vUtQUakyGNXg7f3pU7WtGfhihR1dL7odUfifEjbB2dqoPGEaBq6BJFGLkRXMrHsSZzeFucLo8V",
  "key32": "5mh75RSDJTKEw7aerUGMMzxvpec9LnkgTdRKpBd3myc6GpYDXNQYujuDCPnffoLecjweBs7mx4gc8qShtVWJAo9d",
  "key33": "2ek3SuiyjVBsoifkciwdVosopdvfZC9s3Lf2fqR4fVHh9MhkBvVWft5U8qjZXWzo6NBKMcFDWNCnxx4uBNZmzkj6",
  "key34": "27zG3dmWTa53XVdJTccsdDckXJZUgp6Rb1t79TFKVXNTbNsn4ez1om6unUDewGfvUA5NayjpAPyNNTC9ERAJtSEK",
  "key35": "49MyXQBiqnv991taYt1siEbkSeCbKP4S26dwgsEycW7b6qtjzwmgm8LTFS4brQHkvgvz3pYqCxQk53BRxukGVvPb",
  "key36": "577bxmVmNQStd8iqYaKQmeiPeSgLAo5yQu9XRPVYftowuMGMXmg6RNAQkJ8dRHBzMdAzPJUCu18VGh3tePh3Xnzm",
  "key37": "5HH6HZGTiQFLnMwYGPPEthGUGjkiGn63QKmKsQmEwyUSueBVxyA1YpYmjCGPSWhbTtcwwVwwCjhenbsCRbNau4P8",
  "key38": "2kdg9XbPFRqspwGjPGwp9kCsMGUi7mgo4JGQ3gY4rcUJJU7wTdqko4u1WrNXg6zT8SihBM8cZuZGbMNRF8ZQysB8",
  "key39": "4eoxzfUmTB18wDcxMrUro8f6BNTYUEBY8ZWCeA2Y1ro6mzWEfPkjRrpy14UC8bfpFE2EJgaigkoFG8pwgn7WWtC9",
  "key40": "3Jkrth9RgogfDfWfa6eiNX6ccoYpUXG3t8iWDnA534G4g18psPHM5E5n9y61j18q6GCbURjSG1JoG8WqUi7znayA",
  "key41": "5n6qAa61URaepdpZxKViDkJatptnhR2RwVA117KFaLSmbb2Q3uy3dRNMUsoZFZQbp5FKoAD4HsncD48DNsWwzD5",
  "key42": "2yPg1vS9Rqwirp2qWQfKmQCDnVjgBzaR4jdu3YQdPWZCYuu49htFvC2Gu5pXoxhESKVvB6a1n7y2uc7m49ySmM8b",
  "key43": "4WpxEUyt2oT1LoXSE3TEptJbqZFRiRw4d2gPz3reCztaaBgZVcCN4FEdZCY7G3dtW5F5UrRjEVBoEv3xt2aRd5Ex",
  "key44": "4HXNKWdmWiTMzbc4TxuRhQDKn65BqmhjeWqpyZhEMVGmuMt1hpmVXSUV4P2vNJQc34VzsG5qZkGZwutf9bnnpcj8",
  "key45": "3yUgmKShXnFUmBGKthgqwJJ3U8gP2sGU8pftJhdm3L1QuUAYJRau5hb1d383hXNxABo5sRLmnNqHVbpN4P9vgbQp",
  "key46": "24iw1HArFJVhgQ9xgz4xXUvTyQLuZkkvidxsfpdRePNgDSCBbGET64Jt3AnXQB3DKcjBjPahd3h1L3Lpxhf8YfVp",
  "key47": "3N5ocCaQuVcgKkDfiL2ZPrgksKaaE9zAty3BAoQamksuDERa3AB5Srt4jdEFb7MafYxEJeMKjauToMfarXsqBSUe"
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
