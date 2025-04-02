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
    "2C3TtYXNx6mgDA8srcqV7tttoHGSFt9vKr6ffDK7UJz8GE2DNmZQh77MHJ6Y82V9nVQZAoPdLXUu492B4FaoChPr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8oD6Ke1EcJeQmFpC22RuMEhdydAmLE87feGtb4wHTvnPesia8fLigge53SAPUh81YVsyi2spi93LXw1mEXawxs8",
  "key1": "2xBv9eeoC6HMtLecuauU7sPQyLkPjh6QxHWPpJCo76AD4APCzspEqdnD3z2rAKLZMTkin1PxY288U521n8wew8RB",
  "key2": "2zZo1ujfKTpqQN8gMy5m2cukYid4JEQ4hDnfTw9GzEnsjt2XXYr4x5dZxZzHwb95fMtrCnxZvEGW5uM19Gr6k5eS",
  "key3": "639UQ8ewe8hDLgQP4G3YXBvbf378MWtKu7Xd8XKnjNuUEvDJXchMPYYoVn22n5BdM2vkuDHhjXmx87GLgSvJKb1A",
  "key4": "3QXeo2T7od4dRR8NrhYFSkqrxBgPZgakBi1DczZdyqngTvfkA1BzSNPnkfmCjyzG892BUwb1FehgSM6KNwVpbqPi",
  "key5": "4UmPo7Fsf37ivUSdGUADuzwnM67r2MTuAeYuuMszAzZkBy7oHwyuFGQUPm4cDW6HHkpX7jadgQNYGgJCaV7hRGp",
  "key6": "53xk3ssxzSJWrUGnuKQxcqo4Dtmu8URxRhh6qGBJ8QeFXwFAJ8dXYPFQEDfK6hiczfvENWBCKJjoqWPUDAGi4rwA",
  "key7": "2xwjpHWdRQnDpQKQTXykoD62gSqz1b494qcz8eeKmdBEtqZ4mXYqq5zmrj1op7jvLrARVFAcyybw2XLTJe4vQbcw",
  "key8": "vPCX6JGdfVYKmjxoSDE26WcraYLitTMK6189ZdHfvba2gWrHtEsP5xXJ34VTSShgUkaPBCCtUeFKxeJHchnscGB",
  "key9": "4WK3CAAtXW7GGEAaQr4X5ZrQ3eSuXZjbwyJBNxUFMzG1y3d1hkH651mtNBsQRsBFnAC4nq7x5LHm3s16tunv3KbH",
  "key10": "yanDRw54DWKFuwkbd2jpYZVsLgsBTCPNFtCLhk9WAmE4GuoQVZhnyCG5DFjAPLCGrce3aKD8F9UVxFNudLU99Pp",
  "key11": "5vTXELYntWR4MygwGF4n9uyBYDZnE4fybs14sdEc3ncGNCzcCc5mLPXtn3fBPaaNvvNUrGJXVcW82pbFae4bujQK",
  "key12": "38yGubaZTchzMNnAoXcunRaM2qBP4Qe9SyRBPBNseTRvAM6BYVDQZAX4HPo3Dx7nPeiNrkLcZyaz8byJ7mzYCiav",
  "key13": "52zYWeg8RTHSQ3fjsGqALKagW48QssvtbrDGXGahnpNjrsc4FxjwWFFyZMwdGJq795UDQWMR5Lsj1nRuk5DHMGFb",
  "key14": "3RjoNeAUTA5zBNSuPv6tRjRzzeqCDoR9NDu85Uqqcs2wghJ72t22cpddmSmrZrC7vvsMX1PVaDmMqRyCh1negqj1",
  "key15": "5T37RqT3Z8pXyruW3AS2HfMH2uswGZh7XzacawQAsA2Wnak8VaV7QML36PyYLyMvT7YeVdw65x9NA6mUDb2PgfNJ",
  "key16": "ysf2sGhgyDAawBXB5wqfFAcpnvh4vZCNQKACHWbXaAGDbTtYFr7cBmVf1DfSWSwweGiC1oxAhZHP9qTw9gi4yzq",
  "key17": "4pwsiTp9z2EqMjfy4NLS7JQLNfvvD9V1V4Ub1UqW5qDbaXRdx4qsnriohgK3K5wRNoqWTcJd8hkwBPc7qPrSx4qj",
  "key18": "LPLKuLaukvozyQM2DhmS3YxBiKMpURLJ7iX2u8f4BaADKo1SuPGEMrv6efCDQVJVbMBnsrTjzDqDJjeRRwGp15R",
  "key19": "4sWYz8VNiAyijvTrwND1CLCgiwaa4k5QMmUDXxnz2a7cFe1VqNq9E4o27mu3HoAr3xsxYkiAq5nJmNGAmGGfF6Tf",
  "key20": "38Qsxc6dxkEvXJUiSXhYbV7Hii75LS1XqoeheZCBEQJsUEfi1ZMTj7UcHorCktapchV4ZgP9HkNG5eQpfmUjJMP3",
  "key21": "2ACkdCN6cYjMscpu7NbmwwLqSSd61KSF7D4MfxfwLyBBrjyh4kmZUfKTrq8vYGLDtetznsYy1XTvehusu5BWLFng",
  "key22": "5StwrewjYDy8NvDgHBn2SS3sLURJviRkqZ4M9g3xBzmAUvJZGkf36jPcSkgo3GLh6DFTq7ZtjwqvZC4jHi5DUCay",
  "key23": "5KeTEFK1JCz5QV6zmw5EmvCsUccxqxJQh1wDDspak9dbFhb3ChfxVbqAGQHMrnsxEyqvS8XPytuy6eDPBMB3mxsy",
  "key24": "24i3tzd882Em22TBEjFzxgn3J3JE6yBVi1Mx9Q89mLUtz42rdgeG4PCkwzRi12T9XDLRobrE3k8zepcJMRWCyrJs",
  "key25": "46B97tyJYUAwRRfYAUmiGDDKJVPt4HpgfikNf1fsmf9KJQDrhuKWodvnFK2Mbij69E4A8W7ceFtr8RMSgDG4Eyjn",
  "key26": "gJSLC3Dbeu3J1PQPKmSTAuYzx5uxiGrWK5juczawXnsW3KVVaqigZjBQ6Vha6SEaCPgpS3xWvAAdmijZq9XmJG6",
  "key27": "2RwAYHgBMuptkwMSgAFALT42oQDLPsMibLmXqUHagNdy7MfGBab3j76faYX1Qb9yhGe3i5MXkCF5wP8mQNVvmrg9",
  "key28": "hJm1jyRVfvuYHWDB1kVN7EadMnonMkToMPKihAZpQ6mrWyASvUM8kbuE61WQPAjc3VGXt6MAComzwjDYvsqRbLo",
  "key29": "pTg8mNniLiWcxYUf4JmRmxKBpSGusktaZXnBje6TZh6xPgRWmD9LdzABkCXqNFF2TBEqFKh8ycHuf3QRHFuSJYu",
  "key30": "5Uf5QjWkNunCM2eSXvoVMQhEyHcpvFYPzk7Yk9BtjwfC93CpBf8gqa8qE3kcZvCgbciR9PasewLnFmHX3G9XCVML",
  "key31": "469hnLBBjxoYSaRxDprcSxnroUQ5yN5Pr2FkVrZvRQ9ruv9pPFBB8DbpS22NEL2U8KZHjQkNjLCppQQV5f9mb1Mh",
  "key32": "2etUn7vfozDyb1YauzvGT1xveDdKd5xzvY5fCWYdPyxaSfk8ZMtPFG3HG9axaWVTTs5QcFouipJZ8G5SFeSWjPbq",
  "key33": "23TdK3CQrtaKSb4oMnMAtDje3pMZDdAf1hSqpgZWJ9tLWsN69qed3NiiaDf6cB8F51kTBpEedyCZuAVQP7uTLgRd",
  "key34": "hbyij7fRL4NzNTxL2kD5x1rMBRvWrgC5xRgtHs7pgeGtpi5Qxgh4E3di1LavKyqbPk6xgkNS7XyvLqQt5jDT86B",
  "key35": "4k46pNbzUVD8etqPtxDGpTzpdmtXo3JAmY8yMJTKXzWxsHJ9zaXHV2w5g5KWBBWAiG6f5WiBZH1PHmNXWegBKeoo",
  "key36": "4UmqQ2Uq6opLFJhpkGx6dC5WM5eTnw2w4TAshmVrxS1AGNcFEW8Yu7cK6Cp6SPW5tNo8T41Vas7wx6C3b2YHKSrT",
  "key37": "5ygpawttfuwqhUz3ZUbivLi7LtPpNkxQWvVbdPt5vMWv7vnB9RwA48627wLCTBwGPbunZEdQoM88uWhAoVq6DHk",
  "key38": "4vqNnqVcyRFMjCTqe4CxWPwLazcqq2txu91EN3REMGKUkByqk8MNbDxYvPuRY3hpiahXVT1g2Bh3yF8FyGwHgCCa",
  "key39": "4Et2Tj6DgeRAZoAFh5Bbo1u3JgaFAYyKsX9hQnTKByDGnnirPLjgRpDRHmVobZH9BNhoajuxLgUVV33wCyxdXqVP",
  "key40": "3hmdYE838HohpGiAd2jDm3AjuaVUPj7XUSXnekcwFQa2Qnjg2kz7NwvEQLFZKX6J7cY8wQLmmqvHtSg91DuUoDZ8",
  "key41": "2twDnxgdZhkoLSGY19FBjL3m6MTy4jpkYAPMamUWvCwjGoZdp3oRSrRLwG3aUBoPSTRALwi5BEur8Qk76HTKoHib"
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
