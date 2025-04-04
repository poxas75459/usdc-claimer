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
    "2GzHXiXGKfnvqggHaBd4w2hwE9ttj7JpkwP7872ghkTf4JazYk5D9UVfvTKnhkHpbiHk7bYxcYs8FB593oPvSZrq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5vVrWbSoi5GzweAF55wfyDmug1Fr68Kxf54G79HqW6Abq2dFqTr7XxHYXAUxm8tsfc75UCZ5F4oUT2amhUm1doqV",
  "key1": "2NWF4RbxKfrpd28opLk3GgtU49xwUTd2LwopVnywSmsFdrDX2nU9FYZeFdw4Yrv54FSiV3iuY5HMXh5sqequ6nhy",
  "key2": "3yGMc1YrV7rLvDZXPKz1z5vV7H5yd4FsVfGs1VPg5rpGeCfVLikU6kU8fAA7notZAcQaS5gAN9DcLCMr4GeiZysF",
  "key3": "2WgBmzmzXX24Lo41qFKK8VxXfQDanNTtq3cD7PM6Zvc7zannERZg8dLBNGkVXepVKrfJTf1kxyoa7w9jW7ViczKR",
  "key4": "2sq9nDunaghFj5aKZpMTxktsnqnbxGvnMVaGVheAjByxKhERZA8tGrVsdmYZYjk7Z4rFmW3y7ymLni5k3McuNPYZ",
  "key5": "5X3v69rSDUuKMoJ5NzhJjENSSsD65BRh6B41gV7a559wKvLH4EeTdyxae4MNL1j8t6qVBrPuVUNwkwedsoNeJvoR",
  "key6": "3ahHmGsUJq8HXe5Fq2hbZkwr3TQJbPRN55MeuUJb4vnkUUUcRUWXkXZMtmW74bYXqSYyduTE6FfAPzvGHSM5Vh8N",
  "key7": "3GUwLo976KH5nfs8Egk9neQjQd2QAYpg5CN9x7sPmUEncpuLh9R6JjsvUW6PiLWFSYekC9JqmQsTNRDk3fimxF4u",
  "key8": "2e95svGzPSfiqVqJSLeXZmGFDtEU2ogV84aC3jvGVm7UNVec2EbtZExsHbCqiEZsb7ipvN37hiZm54Mc67QmMaNN",
  "key9": "5BQ1wfQR9n1B61tTsjzV6F7dbUM4QBPjkTfhoR6ELsjEr4hp6rgZrZuKRZkugvtE7VoC5BsswZ5hXPLtWAPuxt4Q",
  "key10": "36QLECP95en5n1jxJDVP6QUgYFW7AW8GcBBe1kmsVHsuDvP5BuUJQSTkzQNy3MvheyJ26JU8tbAfdHJhwWED6FEj",
  "key11": "bADnuwS8qowgbYysMJXFMTgLepiCjUFn38zrAtgZVtwUKZYFFhLxQxSjadQNHQL8SSjiTryvdb1iMg1J7eMMNVu",
  "key12": "2bVv2HeswjqfNnn2upUFVPQ4k9gF8pxix8f45CfxvrsQu3cME42xWMbbPHfsKq2BqekH8AFJPkeCSR6rxm5epMPK",
  "key13": "2usYKVzqCpuHN9e2mTrx2RJPxeUpGVgdNfqSNc14NyuMuzo5pTXtD5VqngtM9jQtMvrjittuKGKVMu4fohKDYQuf",
  "key14": "5o7eUVgfZXKt5HhSe6NMgpYtLYwgzvt8UsFi2ieyYoJ2qMFiH9Z3UgbUtsb1uoWZ2ABPRMzzcw88mqMCqjqyqzkq",
  "key15": "3Wzee3EyaDDtTtRgTRwqFq19V8XJX5KWd7zsMUrchD5gypYZ8oaHSR6GAXzXqqYrQjrzJ6niFUSnr9pai79UGhxk",
  "key16": "53JiB3T41FcoJ7wj4wKuD6iNichn2wvzmjuQfEBSw95RteKVFfoKbyJQ8sqtB8JWeUcSnu6CybtiTfqcHuVNqPFe",
  "key17": "2fhh6JacK5VfeNPYRzwyuMX3wc2MNuqpv6TRwVyCTa6ckRGvGXJJBjfEa8PVmDfoLzjuoa8dtpfoTNRjPPDMw7kN",
  "key18": "2xEfHpuxFvfwgjYTLPYTGgiVDeRaoGLTsK8SMyQvQuKhDAZkg3ntD6tCei3EZooKEngQNp76hsbLmf7JCamonmrU",
  "key19": "L8ujBEz4EnCUo9PnhgshsxHYFnZMebpU3WA2EBaFwZ6pcSjDdpcCNqpBKSNsbeEy3PcFimA2DJpcb5NA2gdtu6d",
  "key20": "2Wgp6yUEdwmj2jCtpRiPozkqv8nZLT2PHbqbT2TM6W2HGjmwGzXPwfiXu3EohWA9xNFGVjnq8zmtCPnSrxCXD447",
  "key21": "2kjVWxxYxBXw8JzwNrnn343inj5S1e1F3nsiwEnnsPyeyZmavnsM45LCPd8XS8w21npCgzUkTa1q7VfibEajrqmD",
  "key22": "4eX3isLAmEDSmBmccNahiiSUHz7JvgomNdmA63m7cdxttrW1FtB2UANXvD4jw8XGuEb82ffarMmapJzZEodRfFh1",
  "key23": "b3keYEtWQB9TPaYYyryjUvwdFUDpSim4aGARjFZWY2i1T9MarngDrSVL3CatDN3kcKH7tUCwzin9fi6gt73YQU2",
  "key24": "5wFFDUngBsz9q3ZRCu8tbmidoi4kCEmyK8jo9UVsWJxSrsGVpbvr3tTeCTTNeME3Y2LNt4PDpoMTh9oqLCM6aX8k",
  "key25": "5u6vitifVKu76qJCbTvtyZkzJwEuiBLSRwxDGaykFsA8ikKAwhAP9bpbjW42uCyqRALLi8cDk9mE91uX7DEx97eo",
  "key26": "LvSfDaLzqGfm5jZo3DLu4DdgYcAAit1MsSbc7idYSxHC2vkHiqzA78Ui4wVf3pDYuvCyzxxC8d5hDwWXTPFhhBY",
  "key27": "4CK5CLPhbg7zxwqW53HCA4nuPuVnf12jJXuJsGHWQpqW3xLinskUsGnc9oqSPKY1EE27xCRYGo7mPdgdscWzXrxe",
  "key28": "4nJ5cLYYJGUbLx1k6hkHLy7pNQZRiiS7YJgrU9htufnGgXSK8t6ekRcqxhxdYKNhtR5NjwrVxQgNJBWYvNbFPGU2",
  "key29": "4Pjoqa88MHJdmFPu1uUKoeCWq2giMYCMaxvqy4f8RZMFXFG8FscMcY7QzfWuUApJeHmVkeFyi26zLE2kwcHcbnWa",
  "key30": "3shtvZqkXMNzzvXeLW6C59QGQue4CrcCPtAgxbCFSmyT6B9xTDpoRE1uukgkVdJinyZFvD8AmLvjjhebpe2efb1b",
  "key31": "326iypMbNub9dR39AiKTe61Cs9Wa7rDUfZMXWM2FwvhkJvRPNh2JhYtrGodoAj9Sstyndhz6FFPzybRHNzmDVY7D",
  "key32": "2KmcGX6wLscaWoV6k9xUpKFP4jc8D4zkLyueJHCMeparUerb6a2WkVEZeanXBhFdmbwTqg5JPGwTurZv475QWV2F",
  "key33": "5o3CuC5sRQEZHXUS5XqfPE7RLrrVTEHA77uoKtbjEzkbryAZDcqrsjjvawyW3jgBxroN6rGzdBa1F9fjFhPDEjkk",
  "key34": "4yNkYQYxKbtrNUpaePN5JGBFd5zQPoAVjfHYuJDT9aR3cmzCRPSfVZnTKuhjP5XGAq3omnEXD1KBGzY9i5ycxu7u",
  "key35": "46zdbxjDpFePk5zDHhue845Rvj4n7crpE8A2SUjd1gxoMTCmPxgoZDEZcL9sJtNr7PmSsbxjNtnLr6PC7jw5q2Sf"
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
