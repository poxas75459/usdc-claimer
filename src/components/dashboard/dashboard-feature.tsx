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
    "3FSyurV5NQUmLBB15E19BSRu3eDoyZBrynd54Z7JwudMNdgDmg7RwuofgwGh4pYJKhqPgTWMZKp2fUw9bc9Fakh7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kbeeStnFyARnXyQMVwyXtzJeNoSctVhBgxgkEJtSa4GrjACFgsqLZzkV4TFWnr5gMCbFaa7zwwyVQ2FXSgU1J89",
  "key1": "4nzH1JxZJMFhczWgDAwGy1teKCA1mfmXrTJmWSXtuk82s5MWFTyJDBbtztym2cADZUdXxdgdSnsDjA2JJgaS43Mm",
  "key2": "63ZZicu98RfN7b6MYMAB8xbSou6oyzfjw8S2MY4gxDdQio23sZj3f5KQdFLuiFRFc97ZDg2tFGcoN912dJkr3BH",
  "key3": "5voqvMw6mJgg3Z49LES4DYJcLzonNadPsfDAQMEVpGLzZoUqRe6H45zx3mS2cHckKGcbRXAbq51oswtCt6bKNvH6",
  "key4": "5VyY3YPzsTAo8BXLYKaLZqq4W2hypDVvYqg33odQZ67aMnonFM5qkSjoKN1zVUzQQKqWrAtEiYP5Cyc5nqH47pWY",
  "key5": "3DaB4JtfoASMwux2gMs8GPJZisU7vMud1MfrME4Ky7Cyx7vHTcqZQ27opPS2bHJoGHZijWxaPsHTQABWrawakMfP",
  "key6": "4uKypJXQYNdGD9Pvtk5fJxqv2uJDmRdcS8L2jG6rupu7pzQcVfujVFfh7L7sKw2ftCeVd1gMzCkyGYLPfAY1zG4E",
  "key7": "5i7SwRuez4qmPfTepmNcAT9fu5ZTvFCZFbPHBcJKWS38XVPrFpacZnLRPtuURWaUdvE8CHY6h8GisvmCejKAsqgV",
  "key8": "3iETf2c9PS7969yogW6gK7xcwGipFoaRsqpULf2YXaKiNSSi3aY3u946XwjEUzQBAjfVKBrDzwERpVPBJaNKtFjy",
  "key9": "53n3EPECq29MDpdd9oFm5TKa2ebQ7LG42JgVJ2XF5e4Vr4mfqLJkVsEsNeck9iMVJtWeZ96WjHqLzRAJpujEYzfh",
  "key10": "36sqjYnPFg4kzxc5YFdDntCxPNZUQE8FK5dNrnZBMqBeVrM1jB7jXkhvCSSHPYpgbCaurEsB7rFYE2ehvXZyBNgH",
  "key11": "5UsRm2Ss8XMeTeW6Ha61DRHwYUm3MpgADpsJMmiusekxJAs3sZQ3sbs6CnE4YgnXbGQWirXJKq4QsBTfp6E8y6S4",
  "key12": "5DFfGZhMdZffZLgM2rFzuE2EiQDgm62yqXcRRUnX23zMf6JPkqe8uQJKq3uVXnR61kiuXhu5oqsyrmS9DjJTUdCT",
  "key13": "3Gg79LxDgEiguYEMf2TAuDoUyg1nUEcmDZCwgk6stmYastgGWT7LvXaLiChYfRhD3YXduQL5GA1D4LsJMfwpZ4pc",
  "key14": "2WihAM1Pbw5arVFjcgCQyx2EvtgZdsGUgjDCCoiLVaNi9xZ2b59f3LfLxPMdakkwwWC6QrqKxgxcDsbwJBnbwFVx",
  "key15": "3qMTPzBcuxaa3RpFjtYgwh7W2HKpxnk98DgfRuGtyzMbkiCecfQ1KUV9pB2o6xvmTaEcJSSGv4ZqYx8XajJT2o8e",
  "key16": "3CGT8qDFvP3djuXMLsKtAYC9PP8MwU41DYt4fdesLB4E7bVKpPG8XZF4giLQqgDoyBuAZProPegf91przHupSwdr",
  "key17": "3HpL6CfwPxrw3ZhKJX3FirXM9Q59e7P4ve2Zru6Ny21ESyq9vut4Wze349TrPmVzFJY5XGtHKahwy19qgTqDuybs",
  "key18": "oN16cQkCk2ah3Umi9s7pbVtDyKkkurrEkx6t19553BzVxRUQVtELqvmUGtHgEPcpu2PcMQP6M6RjtHrVS6tpFK2",
  "key19": "3haRMzKVSFg3rRmv5omMN4DStiiqbtS9fJNZzr4DvPfhougkf4y4QhSBo8A7rLAYoThZ9ADorhM9iXhDQxb1KGge",
  "key20": "5PLHGdUtmoxB7HV6NXo2BuECUfaZxCEfjPyqsPvgJi7ANk2GgLK2d8G5XDAh4mA6KtYA7ADK3AmY8WPaaaXFgUmJ",
  "key21": "5Lmvt7CNFCqjSfdH1iJ7uWkMrGmqRHHywkcZAr91afAnEn4Ze5tgJmzc5QB1nyaaLAVfgU66Y4cbpGZGgFY84FbW",
  "key22": "3bD67qoM9MjW139sVt3p2WR3hgTUnSxM7U7UmSfiRgeTmwCKFrwjsYa7BNWTULn2DjVEBWrjBJom29QJRT8vFN3c",
  "key23": "RyxS87M8hV1dTeuPGYinonVLodR2KNMZW83buQTdRon4K1ATNDfBh1ZQYjLQGpppmVv92CV7HEEV8rudXtLGXPr",
  "key24": "2PyjaQ8prMBtWNTeFwmbVMPp113z6BsiWdsyfhXBP42X9CC8o4hJS2e2NWYCdPHMBy6PBTUkdbdB6i8oRHz8wGAW",
  "key25": "4copeQSGBXtK6r2eNaUjFbp4ASNp4Ek7HEQD6q7Q5h3jRq26WyEsrCRUD5P4WiFZW2swMwQVnGCps2KQVo4Hme4L",
  "key26": "3uw5oy33ms8Le9L2QHMPUbmcqJyVQdAhGX9ZmBrJKk9Q4BWgiUnFjebn9Lz8ReWc8omdJkDA32gVCvNgdDtFMDLi"
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
