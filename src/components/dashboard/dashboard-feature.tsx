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
    "MjTQdgnNUr8TKkKaja4GXtqq1ub4fZzuHaqPSfGBLGw1PLQdGwFW8avyNvHt6Fg91bKyAXZYDq8snwYunJhV4LJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eeWMLqcK4EMFDpJRq9LWkkWUFwFwBYs2Nrtm2Hxuy6PYJoyC265WsZfwjkiMsoaf7oqyNwkRUb5ZXSrRL7HrGwm",
  "key1": "5PHVQC5pmGNyDx46nChpAwquMtdK54tnyfFYeSCzLkja2ZnREcWY1FneMytdJZA2XkB8cwthkEFV8cwgLoebd6Dg",
  "key2": "4b6kjcE2UgKTu2Y6ryX8kckMnQSa2qSdGs8SNbjZWHjYnq9tWg5akTbVrMnG8L7TMD42EBNM4bgergJtkRkh4hLZ",
  "key3": "4JTqf23Je75J6A74GkrypFioNyM3C1T6y6tcn6sDmf5SAHeEUmsabQzKusekYmdnBcYRx5DprPFofEqaHfaGNZxL",
  "key4": "4zb8qG8CmBBRd3VdyEBZm2uHvQ2Jfx1vHpiPmMu8Lv72NfyZSWj43GanTV9A9UeTdDoeo6Jhxn8mQk3HG3hUoH9U",
  "key5": "v7sKZUQkoDkiaFEpkMcvRCGZE6vMcRD4spGnLk9Nboe1Vni6sEDDGjEiCDBHiC9tbm2EUuUbaDsd39dwbbZ7gq2",
  "key6": "5pNtTFinn5bLKy2vkDAiRevDRjc4H2brRQdpuLQSBCjjLSrmLJ9AFM9giQCZPDUAWsxftWmF9PasNagpgVFUoUVG",
  "key7": "55j9RRivqJZaDGQgQoDEFxjUbGvCxz6aqJpi4go5Ku4nGWsKFncaV3GueDx3U2JWRe5jAXDEQhgVdPkgcimUrcgd",
  "key8": "XamvicPK3Q1SfRgLC9y1ha6Cdn5ZB9mQMCJMWJEmfTdBQyRH23u65GQa4vGAvynyym8cg5i2xJQAQoHm72WMffH",
  "key9": "41pHj7CJB6qfMGLc6nDPTbRHamrdGodBFtm9g3AJNac7HLfZYvicmgw1nZUebAbejYkAddgEFCzWs4W1LHGgG3vE",
  "key10": "2rQ7B9Y49dsTfEcvd7TkKyiiN2qu8TXAF9hgUvGv5gfh8v7u8VWCgnZ7S48Ze7RmjgAUmFUoxsHP3XP3rYXuV4cp",
  "key11": "5R5ijsBDTyvk3hzZn8d7o1EDQDe1HHfV8YA145iEZEVB2SFK8Tz8PKferzof3FDoEsCRGHx38eaCbDi6dKmtHaGJ",
  "key12": "2skPvazHjQWPWKFeupU79tqbh4PK7kPuAhJwB4hzYJ3iA5E7ZRUQosG19CjofoofKAGRUdYfY4QEJBp6DJy81KRS",
  "key13": "3wQjy6Fh8XQq8gQPPKyHAVobwW2EjzLLNeooRVLR9PTB65fr9XtzwQKauWEZWcehh4uHGrJMiJ8aFFEPH3pbNWKE",
  "key14": "3uhizu6GDirSGDzxRKas5tDh8eRQq7UWuppvq4syrfz5UQLi5cMopKY82ZrU4DZjkRp6nMoyKSpohJMT8ysUEZqT",
  "key15": "mFPZ6n9TTB9DeNhgnLnnkvrTYxN88p83eWMhQidrRMUweRnggTip4XTpufLyJ6DGeMbjxu3HY3cDHCk14bMys1N",
  "key16": "2TEKRuVrrpDEQdtFEa1rqAMpp1Bc3bALVSUMaQfbcLeMD6HKDhpmLZcn2TL7z2NTAA92T3a7LC6cT8TEx5u4Ej2E",
  "key17": "3SeW6Gb3b5TwV13jDUPND1ePRDka338sqH7KHhuL4mXs2CiwQqDyrEB3Rcmtx6dei62fnwgr93a764CjmDB37ZvK",
  "key18": "N9hN2MbXbxnhNFpR7T8mGc8fQNu2TJ3NJjycezJkMgkbfbUxMVzAjQudRKPJvEcGbs8Ccf4s7TdiYC1ecTuVZND",
  "key19": "3eSogXhUWmNZ9LZ2c8Hx9zgVduDKBvcwcFkcQPupANSmNjvUSi5TUSgEqy9QTKNXwjwDZwtNanyQ498f1oKm3QpC",
  "key20": "5iHA1ehmbfD9bjEru23MsP4J2GHUMkC25VjHs4wBZ72DtWvsCWdWYUfDX4CdBVhq1ZkPVxFqLEbW59ZjFRwmroDF",
  "key21": "4EAyeMuKBKDMcQhSf1VXMLhopurQDBdX64a3dPyrdxzHENk1RTiJv22DC31fgpg4sYvAmkY39vvwsSKHmF9H8PWy",
  "key22": "2NTgYYTcPGWApREiPFpZkRk1SS2L51jHNejn5jRLJqxsQq1L1kfehxBLtM3NjfdfKHcxuZkpVkkHXPPSbfkAz34u",
  "key23": "4QnACaKHspk2fnw3tdbp2VmFkPxtfrrNTfLS7jpX5i3o4UjMVyWLtcaWCyNW9UMXGHFE3hBy6kL4iXtJTue5w6c9",
  "key24": "5YUxuNZz8VmVgrtwp3AXAq6iPHccA6DWK4wru6qWQAycg8njzAXGyiGin7NGy18uw6wALfmuMoz7yLr1JSHvzAdP",
  "key25": "4Ndr3M2f8TzNARsyg8zcZSZNqPmT8kodtirvM4Moq6NpQdeZQ2GY9D98Bh8An6rwCw52sXFe7VHE1zgnwjhRbbRj",
  "key26": "2v7LY5efnpbSmmbDuAqw6JRMEuJtCPDxAxSmZPH6nGmPzWyFX5ePDVvk4PoYN9tYiFGjjx2ruYYfDw2xExDiMmCM",
  "key27": "3RKZkjBn1gAZKiCtgg86pXMUyPmwvt5XdsdqJZkFQLdgtsmH5CAskyeEYCtdyHm7AseuVwSiKqTBgNUVbxfn39rw",
  "key28": "1eAhH6fT9VpFFdfFoAm92jMiwSKMC8vnw2PNoQHhfmzwFLHY9C5je1K7XcZ1ZBbx8EMM9hY9kFQ8sAs5xjyuZdQ",
  "key29": "58Gkau8hmGdkqqUnV1vDmBBQVqrR4fUQKkTm4ZGMAyTF1zFd4w47VVTNnQnTvuKU8Z5z2vSvbk2ZYQ1pJuPQwtyk",
  "key30": "31eS1UmYZSjp1rhuNFVjHeWAjma75oJ3a1SqxxzTAB8X8eerfANUJCymSKdbrKLqxhhAPzsgUNzQKkSCWWvfmWv7",
  "key31": "3YhGh5W48LX8yJwQneZ7XSgrYRYAnMHByYj13rNBDAxZaekbdJP9X12H1Kd643XF83dKoMswbkpf8MNwp3wXqYsw",
  "key32": "3SvAdu7Xqjh8FJmEu4jzkZD7Qvx9b7Jz31tSsgHJXEgLGFgWP1NMA2QcNNTrpLEL8CTDdydSVEDBK4ssomvQw8Ux",
  "key33": "2zUd3jAtrVB1zmg9A9Gqw25hv5HwnZAj4nABJ6R5FPEnB4FAoGETvDFXdJvERys8zNZyZNiEGskUYdyjkjgs51K9",
  "key34": "4SnXQ4Bno7zfm1tjP95hgY2Eq9n6KZCbtKznAju5CaqDnYh4vVju6udkaA7NnE1f56t3YLNYh67so7LVUcBkAJft",
  "key35": "5HsVh2vvTR6DTVbJbJdfL1kcPuNhfX4j5pGE9wMMLvYeoeF7qw9VfYthVV5CDcBzuUXXZ5uYDbw5fzQiTHxvmty3",
  "key36": "3GnvdWW9iH94KWZcPsu9LJfijBhuTQT7USp4vNtmhkzTUhhkS95vMgtj6DnLsBEAfy2ZL2ifSEBkH1NRrFjkou65",
  "key37": "42aN3hEHC9q6mHcRqMx6HsEsLVyDJ9Gy6ZbB6fc1MSHaYjBaENMv7i3ATPySE7C6beV6K5CeqGBi94reaMPs8T3h"
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
