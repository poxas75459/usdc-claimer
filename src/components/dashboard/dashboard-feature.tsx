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
    "fk19MG5RVFkMsSpLsBDpCL2gRsgtMzWsN5q6aqY1GZeX4A85JvDGtUm3JJ76iWWJ9MonCQdczaU1L1XFwKb6Xg2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3siCAvNJ3CdCntNMUHwCrvjnuKGC9SCsVfyQs1ibqmfPi2oUMMFBptpZNWkpxd9xMSFpTnWEjBSzMxkY4SFWMxcg",
  "key1": "9qoFnRP3FRFofgVmfKmC68iK8Z5iWXuY8MYne5aV3sM3vPgTsLzmUPCZWid1hBTuSroCfcKUVot7DNiuqMJxKKL",
  "key2": "3mqZiVZTfMjzcfh5CK88tfQkbxAjL6NDvK8uumsnv7A5tQHU8fnBiq5bG6UR6nyb9uCuYArmzoaFfRLAxN7WPTE8",
  "key3": "3XBhP51b8x4XLy7ZRfCaBRmJMGMRoSvxvsCCDo1EY5BfLFoyQkTUcUzmP7RKnH7nKR5QuTG4vg4cMe8N5JqpQG7y",
  "key4": "36AVYmmWEzgFmynJRp74wgprefwoCSUvZsKiJb2vc9w2Dg64o36KfvoC7tAtSvLE4TdpScvwQ6NgqwiQJZ8dbJKU",
  "key5": "5rDC9QggPmcUzZvMzfCx1vT1RvVYRACcuRymwMbB9jT8TeLhxEuEy8TusQe3tcshN5nifr2zMGFBnT6UPffwgrkr",
  "key6": "4Z5SxVdme6jjSE3VLFrHiGdDbJjnQFixqtN2JErDvqnpKtQP46iyz5q7Fw3duZ9HJMiNd2HRw4qhnga6GNNnxS2o",
  "key7": "eh4NgxDUFLWFnCktZj8NwtFmhfoSHczNCNxv6xJCiymHourgPPJxcEsZZLfmdrWfsBAoo3u1nvAr36xFAxwKAfV",
  "key8": "5YRy6nrv1yTDp2Gre2tYABZqRAz978RhkRzWD6httLU5NoYmNhxb6r8q1xBYNhrdyPyD1K9oQHhEETg2JXVCqvET",
  "key9": "35wjSFqC6wpvQSscairptaMSJ4W5uhdqTVoKsswPmCzviFuZwwMZMA8jXK3oH6vLCMnpdz9xwP6HdRrJeDimZRyn",
  "key10": "44ryErtYXq3TF42M24syfUmhrSNhsAhbpURdH1xVtQa3vvnxAT3WRREeZcpLhcKoA6Avm9CPZgUsWn4Zrt8S3qdA",
  "key11": "2kahd8SdRkyJFk4Kxa2ABF26sPGzfoczxaHzqQqDBd5YVwwY7oY1tdSGLXDgqsDME3KXoEEnjaZTkcAS1fe5iiXA",
  "key12": "2qWmK2zVbkQnLcueg7HrHULtzCVcq7kQKiVYCd1C72Z3bqKMid9qLGvrS9yXzT54VFwnUodrBbWfsfKUV5vAHEKz",
  "key13": "5JNFhuZhc3yjQNHJ9CPzNNzwv5tBR4gf3DeZx5huySCYEhJBprCaBRz2knFkc2YFLm2J4zE8TXCiSU64Affmbohz",
  "key14": "5KPfYa2pnUd8QYS8GG3W9z9pvQVTXgp5u774pRwzWNhMbuzQeJinBoRDtU8mmGcpL4rhAjUbQ9MZExCiSWicQVuN",
  "key15": "42fXfZW7VpTqi6Rnj1QojGqdP8Zjqpct3UzoXqgJG7RAqCsnQGLx9RQvSuy6MF9CF9FrJoqyFwvL8qZHvXx5KUx9",
  "key16": "5C7Gc3NjNTx7diQc39g5m8TrULSpLH4UUyqVseVfzebvPJz5RjireAFLH6LrF9Vf2ntjKXmzMtwZgDC5dvqhWdwC",
  "key17": "4xTWCeS63HqYurjJ38qXNFLLmDxVpQKx868mdKFaJKuywqeYGHhv6GbLVVfEXpsPwxTncJqxAfNYpEPcBm7WwdRL",
  "key18": "36pfsJZoAeiE7h6aqG6iNKMzysqhztX5DdbQzh4Bfx2CT8dRTFdvhA4G1Nxk9sPpSSrwuNZcToWDvHBPAwxc268C",
  "key19": "5hcoAPjii4GdW6x8mdnnNYZid1VsR4L4SrCsiepTTVF5EeT6vxHMgzUMox6HxPm6hSbNVKzAVaEwyS6VVkSa5ZX6",
  "key20": "4tmXj85UzwP8pbKyhq1hhpTucGtGu8psFXTojmmx5AJzWqGag4x8urTYkPG6Bg25gD1UtT7rPGAZpJkH2ZjTiJqr",
  "key21": "2kAeyDDk5TRRTwAKCg7wnQp8agpTTCMs87p9v8iBkgUekw9csRNrTaSQY7ZzqJEVjwpscRtQCChtimJDJKM185gJ",
  "key22": "2QQWt1CWkB1L4Jy7o8obNk17EKRnbEKY9b2UcRUmxJY6aphSQmWyC7EeqfKjtD5w9jdEqyqcFj57dz5nJj6QpNZ8",
  "key23": "3LU7D6vmLNo8ueE9Em4T3U7EGDUfPAsbFWRRSWj7ScYQ6xh8RKZj5dsUnkABccVCg62ktfhnHmngAwt3JbmBTtGz",
  "key24": "54CCmkejPYjKG3X8zh3QHTB7tsbB3AifGk9r2kWM4nPbjKGMi1vrxUVh2KQKTqEx4eTL5ubZCQScYot7RcLXYDgq",
  "key25": "4FVCdpXeKFMsAk1qpC2tkv286VGtCEB6ozPaYuALCAKmExwzNbuH7d18Qx5PatiTxapmXWeq15W3mGyq5YhGrJT1",
  "key26": "2r3cegCXktRbbqiGxXpvWV6ieYDev4pvLp3Coek4AtuhnNhuBogXEbUFDhHdiFt3dPAVwMZYqUWoV9gsY5j2Pywt",
  "key27": "3mJhP9L7DQZaCN7jEBwiijqU8VsKk5AJYnZrgfigduFpxCKecpzvuiXciKwqMugid8m1aJarCBHS5UpWeo9LHoh3",
  "key28": "P9LaEcaUFUMH8uxxjhwtFL9EaEtujBHd9H2jtPFQyEbhPghKZPvkYKZfHTmQNTXV66dnLnny5ckZ5QuCcZc8MG6",
  "key29": "FKZZePdethK3WcbJyDSGJ8zFhdcYqTrtY9P6j8ZR9JgiyFJCRRbiZXEcnUG3KaRUN7tQb1ndA9QoMVGnciVERPg",
  "key30": "2V1oNzyWZguuBCCujSYp7Afw7kF4KsUJpG5ajRuHmwka4iZATSMvdfoPq4MJN4RVSBo3WWnCVJS5qvnEt3tQvP9J",
  "key31": "4Drq99QiQDtRmop5UCcz28tCfxbEcK2KjPr7FaYM6JS3sZpdLF3KhGsZmPtDCJvaaWbeGNHSUJ4S5j4xcKBiG8Nf",
  "key32": "5QHsaPQUkUXcdeX3E6FKR6ihroYCf51DjK8vKu5RVF1aBBVMynFERL8Bo5syFG9yB7oeyRGuiiEDPmzmwmgUVPxD"
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
