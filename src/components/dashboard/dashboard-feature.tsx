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
    "3PGSJfWKiQxxYeQcmU2WYnxizwfZeAZWQEtyuQxCKc5JwturAoygBQXuJYgRAJaUq4ZTKpPSxh4uDhFBaAQVeX8a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28yCsVNzXhBRc4YiNebkZ2QJ2sQAotuoaHHsFwr27JxUPJX6iL6qHM6xGL425uucMM8nPGSsMVsNKYurrmt115Dk",
  "key1": "3JUuNLC7sTePPnwtvzEmaTZNKsBrWdUMWEWpzsLxyXHyjs9yYFviP4PvQB8o5D1J9tyiBu4UFrnnm76bLHN9mRaz",
  "key2": "4DcZ2XBiYPnzB1kAMPABz7jkkvChvaHoLF3xiF89jakF5quFbScPtyHRpe4YTjaJCtFnfzrvkNX3LhaQLa5XYfwE",
  "key3": "67naSzWdqyXgx4m7cdnDz2k7WFJ3qttKejFLXBPYNqFdoDnEMMrPbusBdNYSFxiNV3vQZ7tBjCumuxkjoyzKv5nM",
  "key4": "2MTs5HfSENoBoF795FXMUVxP7YfHUbes81zgCCFbDiwPTsnutALr4aoDP75LEN5maSii1q8VNmZJTuX3Zgo4oHUv",
  "key5": "519axMNTVVpeTxbVX62TD7yswyxuGUaY4E8BnAoZcSZk7qzpRGBooPWLhfarTw9y4aKt4E8WnZDywMWUWn7vff49",
  "key6": "5tZaMrMFfi7ZFKPGnCzJJErbdghVgX2WVGKJxHr5X4DX38HyppLkLCvfYBiCL7XQyMNSAFAPgGTjK7igGAmBUkph",
  "key7": "28tMWmLbKRWhCBq6KcDx5DXg7Vk4UAeLWM74A13XYA2hKoVE4DgF2y2eNoNrjP9H52fUCH5Vn5NA2GMcBRW8ES7F",
  "key8": "8roEhhsg86SnanG3bfuK3PsNBGfZ5E9hwSfYobGwiQKmw6ZaCwtUbEiHt9g1VJPpfzgExPhWP7z9Bvv4EX3NRwp",
  "key9": "Nseb5mvWn22VqT2mPPCJEZJRUM5yELNE83xka6Nq9yABwXs28Van6Brtbz9d3qbLfTjbqYJ47GPwAjH9vKG5NKN",
  "key10": "2qx879BBGir5ruKgMdjK8V8PToGzghFjcVwoCzF4jWStxZerit1d3Ph5u5oMcPjU37kDzbzeds6yEiUpDvGCYLFw",
  "key11": "zNrpKFrrpo4uKUoTywRRv99VdcNDu8T2wVDKmK22ZpNfHENY49tmZM3Dny8vpZQx2mZeAknKrRUoAtoZrP8wVRH",
  "key12": "2uUgCdgMMGV7MQUw7BzF6qEFJ1SxizWbQFdtnJzuiGgArEvtnVAzQHVEhHtQhubvnWyuaz4rSPZ2ynPNsLwvpkss",
  "key13": "4zjJxPPmjNjQbaTNYohg9N4yE94HiY1xZzR1bzQZrshEiGuVDr3scB5ydeKQNT7Xas76M9EyD6vKgBtpate4CmZ2",
  "key14": "3uVCdmNHgDAX4nzZBMjHSG73JwDFSqDVwYGCh79LiWqgerLhHDbTdeSUUKdMxapJi2J2GSUPdodosVQRJhcvoKeH",
  "key15": "5T4n7bhCAVhnHHGFsLnaUUQCyY7ebAbafFQsJYKdWMwSKaKEEhyM2RY1hUURZsUj7GvNTLhEWviCRus5u2FWc8L2",
  "key16": "2L2xxDSpS6o3HKrhuXF37EDLXMSUANAZ7DT4xMixgoDZjKoPSpbC2BJHinZS2KLqWwJghhh5RAHai4zaxQXtseVn",
  "key17": "VpSrCf5BP1SRQue5mwHc18EJovRa4tZSWhbsj9UsRCNYP5hJNic16EtZ5HgSsL2LwZWWHxC6KSTrobPTZY1C4Wk",
  "key18": "65NcQcpCup7yjKjHf2wcWdLTUBzQWwh5W1CH1SSR6xFgKiDhcyTa7Bpim2s9zMH5t3CPKDUciW481JUtBsP87C2z",
  "key19": "v5EpXQg4oz7m7Zvv32Cnc9a2UEsBvKV69XzUUGr9tRtgrWc1jtq1V4fdZTbNyJqsXa7bgQz7YyX67X1Dtd9pRQ5",
  "key20": "33vmbzfPFJEerbrWj13HTaJ9TLhzw9qxVwiWztXbXF7VEC2Vn7NUFzghfkBee6JkN7s8g45B9nVFhZaQVB8oJ3hh",
  "key21": "3nxqcdWx1NTCiNNRYZ71zPemkbQoWxDnkScZY8DcNEaf6H3kHNNwPNNGUVqC1YVUYJc4qvLPJ9XL8KzoSnsGJBwp",
  "key22": "UWAU3Fa9SCwHn99dNxSXNM5nAhKqDUWdcwrh1Ki9BSSjH5oxx4ZskJ1DqSZsSXCH2DYTytZk2oQMf2XBWPsD1do",
  "key23": "dV7hoWFRNWLieQ97bZDaJggvHCNt7sej6Lc1WDbmRBZQyibNKJRFtuLLpVookAwNauZqKSM9QgkitaWrDP6cmpC",
  "key24": "3DerUhGPRYuQSwYUsvdNfvfNSNAQs3y9quFkQ87UFrX9Hn43ESvmmvAJRdAHRBprqUMpSBmTGqWBjPkFK2FmuTkX",
  "key25": "3SrV8QafDD8Y1E7EVDSyhDT8Eb5jf1yQoGeMP1FaXQKVgX4vwZgKQpKcyoz79fpNUtExnFgJms3sbASnCWq6gajQ",
  "key26": "2VDUV1zFYvyDrwfwriNaCmo6dX1MGSyVaBrzYELVNNpF6g2atjMyfNPP2pWK5FW3jyTFxSSo3xqMJUiXVgdSK4Ax",
  "key27": "59A2TcNkhKhqdqEBfxx87hSrFhj1CzFEVAN8qRm13xwa8BxLbdFY7xDz8JjXmF4znTaY3oueDveJogSwNtt1qpL4",
  "key28": "55rzazjnZQ11ozQhCEfUby53XYyYfmh49eGaHJp81Gwp1ZwPR22b8v2uGdz4m6ZVBcUvEUzgWC6hAK6rqW2N7BMV",
  "key29": "52VLpbCttmDVhEKUQTCh5LLWGciCeQUjWuaRnkMdN8B1ESxXGN2GFoid39ABJEjRaoPhqthv6erVQ6VqZwcUfvdB",
  "key30": "5mk4EZzLjscfq44LLznJKyNHVDGZtpoHKzBbucz3JBLNwg8PA6voK12NoeHWePanjt9MoLRWCShj668D4CC8GBRT",
  "key31": "57LiXqiqn7VZicsC9vnM1B1Wgf7gLshMYFUqKcdKiFPA4o2QidmmwxK5fFUzeJPKtmcSzrwbDCLetcoCWT2rZrh1",
  "key32": "3Fd2w27dafdWhx2yvyJJFAMJBafwHmbDcXJJq1qwGjSAHnyytGcS91aiVmTc7jYsDcAbnfnSWfFvbWA8CypCehbD",
  "key33": "5cW3UqBAMqhbDfQ9A9uf6CCXgFUdCoYXYZRNkPirK5mAF2wKcjwDHjwoGUMVXGoiL24LuoSDmbjmJwToUb7uR3q4",
  "key34": "2byhNrknUgd7eXnNAKS45aggaTPu2sPDtZ3MCBBh3nnQHsM3RD38P52ZNEjhZTf4L2djrxxzUXDR8M9BDXy8DVYh",
  "key35": "5vDKWGrDgTkyjjNhHq2RT4VymAdAVLniVkH6t6g96CgDekqfMsYgas6MSDHDnfoFPgwxPAsMs5UaCoCb5CmSZ6Qk",
  "key36": "qHyLn2uD3g5dhfkbujBajXkWLVoEus85oKJDCABwMfwCraQZcjdX2VcnmMna4nvCbFxsu4aNgzUD7y73NFTtyvd",
  "key37": "4r64ejYmRX8kBtJcoHMWvK8QRdaBLr9csjqM8gjJrRfSWTwohC3kLGzndzNgoges8kBcsqRXfD2PQQGLMni27FYz",
  "key38": "4BFco55N9KD5aQYpHcvxp43fCU52AHtCbgnpURyaHQ3HdztLEcmZ8zMGwxrh8vqyzTC2DrEvjPR5P8chUvgCUj1x",
  "key39": "2yMYPBdrZpqYsDbBS8AccA971Mq95XW39x21Qetx8cTMS8CLio8Yz9w6NXD2nzJyaCuAfQp1nVSgwn8eCxHKEM8H",
  "key40": "RPSqQspeaUsKpB779Avm6LPH2ZFmNxzQAXQYcLQ96fnGm9Pe1cD3roi6TYchE3utcnQqVCgVghhnMog45qgDwHS",
  "key41": "2zFk4Lb28tByaAnaP5SmZzLhhZ3b5ureQWRaKv6JtaCZV2NWajxtLfc3qw7J4ZMaWMpcgehoVnbRHdSu5XLo92bc",
  "key42": "4H1jxrnLqt2WFWCjrnqUv9A8Mpc811yGKP5R1xKB3R5k3RYCtj5uXX25JVqRGMd6CXkw8VVYEqaC8hmEGVo7zhgw",
  "key43": "GGgvW95NoCY4NF39cjnmaXbKKEkjSGSKxoybAamTfhL6ihfgwc6GetMyVwo54VysiMcNk98tNM9kEHjaLEHJFXc"
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
