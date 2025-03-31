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
    "2BxdBKWwkGYMUx5JNDbHYP34XsVgr43sKebwS8x4bg6vypTibbizKBN6MRaidEg6n1JwWpYUTU58nzVa11DPEym6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wHFnsZj3KDVbGv3CjzqUFaoSsT5j3aKYrNhXgJyVVj9mo74ZbjLXeZWbmYqmiis5Npf7tW2nLnjDnyn1RJ2dyzD",
  "key1": "yEY7NPpsxnUiEZ17xaNVVgwzVUG5c2ALPGUyzug6UvCRqVErtiicNdMCG3CbrpYx9y7FmFZP5sFcdW9dMDPguzv",
  "key2": "2K1ZsNY8S4tkHZKeHuCcsCzTYQ6pERUkhVrcDrrdvpX7jUwFRyY7qn7GVNMirTw8Evp5mnWb1v2ExKDecjwakCTy",
  "key3": "3aCggbUuo7wq5x8Ny4N3Fq6mKqQdv2g5nrEsnABUBgUQGPNcM4QCxYMc9PLv88agDZvjUUKqBtPjK7dMskgeC2Dv",
  "key4": "5BbtmBMyXp2t178X1JRzYda8V2px4FyhKhNDcWxQCWEokcmu375aZX4foZSVczx4Trp6GGRkCBaRHuvkZCH3Khh8",
  "key5": "649n4bij7RbLnqABxfELnjnqVdzFxD1gYd9RenLcBmzL2Gdm8Rd3mpi84DywEHq6jVfkhRaB5pr86JjnUkkcRc9d",
  "key6": "47Zj7fzatsnXksp8dfqV1TxALSAJdYJ6bK1G8gmPq2Yf1vworo2KYJiZtMWiEC4unSG24GvKLfU5P1CKHtxGvsNd",
  "key7": "4K6aFNc9Axwgdnx4zwV6FX3eeLWstkvnjcC5FDnHj4zMRkzudCbagd8DqryWYfSYpcS3Fn41RsuzvurtH6Cbf34",
  "key8": "2QmTrQv8VYrZ15mQcxw659fBpQFUMoLtRwP4KrmwuxhjPV5GpmcALnk6CZks4JqnTBuKWbumSUHcwetLYrxr39Lp",
  "key9": "Nbhw7NMBHuUnHf8TKZ6uvsqYGCVPMAVcWDXtjVhw1WsxkzjFyC6EvGfuniY1HKbCeuNUtg3Nv9WAp4eYJ79NU2L",
  "key10": "67g9dAc3b88b2SZvDi7a9BEUDUPbohnnAyD1d6TohmkJLbLvR2ESP667qyCWJvwumEwZCzftrqG7YCaSYFSwdoYz",
  "key11": "4KaDjbawR6YGUj89LxWH5JXM5L6TueGZNH9P1tQgWeTaAGkH64yDkZqUf3epLAuEMy5qqwTLZRWzTcA81wDmGboB",
  "key12": "5J1MXEVzxuPEGC33EwF2v63dDYvQHNccpHtZ6fLP1iT2BvJRZnv6RVq2mWJ9AxFWibaCoSYY2x5MVWFBrwbt6QgX",
  "key13": "LX82gWThatRp3J2DhqQn6UvLtHquVMKCxZBon7wJ2qKWQhECETJfuHfXEEWu3zpZEP48LU2fccZwKndngKJuhwJ",
  "key14": "2a7esBFhWwQGBbkKKJXDmA56W3BFMp7X38HC3Nzz9dy1QXihsUet97JHuVEF1yi4mX7ouZGxgFLdmzsFdHHFwTx6",
  "key15": "4XMueFUHK2CZN8qUYR4KidJsssayqopM8SYVwpfaksxQRXhUAja1sxLFGJQ6V7MAoFrmZSWiNzPqscHgeeSFuiwc",
  "key16": "2G9brjstkTxtt5LSEyr5h8HZcrmVRYvdDu6zaMSgt2YTSyf2ByWmWuRYqvKx2qKp4m7cpKDhqX1F5RGpg9PUM1Ks",
  "key17": "KgT1wYWfMFuPcaiRFPijvtTyVyvz6n51qSStAswPXRbNKAxihmjpbmpiiih41L35Mrsn9S8YEo66sBJPQ4QXRC4",
  "key18": "5CHWziZP4PsUSgaFAACTeHzjyAyb6QaGsMYg3upANNbCC9Hz6Kz1x2H1vHSSY3JgqJPBBU4tPQo1dJUoM26DwEXn",
  "key19": "i8KGYU5k44sbHphHxCHZU3YTcoDVcEJz6DdmHZkMCgqtvScPaeCQNTg4FSjHxS8VxhQH64jRXZiu5sTgA5uK7UZ",
  "key20": "4SxKmD3bmRQ1NH8rmzhQSLc3gHwD4RuDhoQ8YzAxQFP19PX4Sp7R7K7fQcDTeB55SQDSsPEAtokw6HEpcAiwf2Fw",
  "key21": "2EaWFLa8jj43jrv7RB2CzWLpbuEAJVRZ3A9ecdAhVe1EUWhMGj6NP7FYprQ4xGijVm3wseKaQsqTRc9MH2ox4znh",
  "key22": "3MzpWxYQm6szw1GyCzN8zegi4iCt8NFZwBNyt51fJvsPjMwsDpSeYAHYfgrKguJCwwNMnN76PTEDXcCrLyXxxdM",
  "key23": "uoKWsRAYJRiECASZ6XzHD7TbJ5sfAoKEETYr8bLAQabJZ9wrM3pNsCacGLfLYhNHymQ1y11E3WxauNaWkU6euJv",
  "key24": "D3tMhGRqNcSq4oTv5mpxSCSPFhqX3P97MDyjV9fU33cjvGjLpEe5uRvzHX1YxeUTmFfXQHdpTnoEuxNyCfKQs7S",
  "key25": "2FfSaLv9VozpKuKc94dpsA3xjdwWxFbeAzz5LRwxHXGjjJmg5YoycSbi2vXpu2NqYs2QgQsuVB3jTzSoQbDKMB5W",
  "key26": "2kiHy83zkwKiE8yJqTB29wVmtQtTYPfx7oas2Towgjkyo1UU1VpExovycjQT3ASQGGeoKYb1RNhBA8KExRf6b8WY",
  "key27": "3artV8wQvrZkJhoFs2H7ktP5nSyGtfTnTXtr8QHVxFWP4prksPYPmxu3qdRvKrQxpk5RQtWEvVVk6HWoorugd14U",
  "key28": "2uUao99zMRtY7a1hSPx7GRoHHdzMcP14SKEV8wAJ1WCdpqFDhx6fAwwBM3v6wEJYdtbmX7zMBBQivBJGmJEJDV2d",
  "key29": "h6kTUyKXXVojfQiLRz7wLiLd9VzNYFGseHgUTnoQVueQnRpbT8VuFhySjwGfu11HMmCzrs3UQSoQa3uB73hzi4Z",
  "key30": "jfXNrfEB4ck1kWrBYWZpo1t7FsMzh8XBxWreRTn4BXUmvpg3j1387GUMVC3RW3YepxckkTs5VXczGcpC4foJB9L",
  "key31": "5htzZ7RM2aBFWyU46eoo5GnTTovNc78KHqLFQWQFLdyi9o12JhDZZk1Jj25BX8mknfcozUUDNwGwBdnqvwi7srRs",
  "key32": "4RZVF9hBbwYnA8Lybozsvy7bE32cJne65HG61TnEckjNFrsoAx82RhfK7t4Kb17iAyvj5huHqo2YrGQMzHryysoW"
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
