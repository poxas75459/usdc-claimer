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
    "5vNPxfZA8VqyLmWFRZBDqrygWNqLf4TVb5isuAmcpBa2Fstu9zvZPeD9jzjywesbGbi1QURUNANvf2rzL4MqoDMX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5evybcxV6iareT5zqcDXCX11RQUrdT5FEhGMMNxPMUX8FidL4gmYRMj2eDNjPpqrkEUvVJKVmuspZiMKTdbUKPQk",
  "key1": "3UmMQnQHF1vo4QyzcGq1NMs9qXywe5aUzwsjjwFUt5SUoJjqWRm619us1wbJzFBFCi4e55gEYN5BNs2NSumqrBNK",
  "key2": "5UttPBmehfDrF9pJAcSMnhnU8gkpkAGQfVGHHZQ2C58b3WVQWPUHqkmKFS5pUbnP43sqHRKqcNB8MzEdH8wrsZny",
  "key3": "3bXNuyXguYKNBWPzoZPA9UQ1vE86bMqSBomkTVsd6wwEve8e5mdmao3y4tYTw1GW5hgdxZ4oQJEzT8UhUoGtSYHu",
  "key4": "zFU6VTkP78qhom2ErBjQr6kqU9W8aNYgDpacbb3j9PeGQFEQKA2H81SgKL8zELDhcUWjVgx2KWkyhk3utjDomCQ",
  "key5": "3Ec4PYasLKLHF9qp2yy5n3u15CnigssRURfHNais7GggYTakJ7s9UFjok3136ASiqwvYkw2PHhVvQX2WzhutAokR",
  "key6": "7ATUQ3fW2uxXhHdeWrvL7o1KvxQ9ABqbLjUR7Ui1NjnapGaXW9zYziC9jj7TKm9YNQ3fWQMHf3P1RqDEFbMajyA",
  "key7": "3ubcUrSRss6btQtZ6ZMbQZZ2eAzMEJCtbZmrdnU2DrHYKVtK3xHpepQKTnhacKwoZ5tiRjvwVf4Lo7kzXQmdCBJd",
  "key8": "5o8CfifC6ffnRpLgswAHF5UdfNng5ot229XpU7SudjoYPL1BUNv6by7jNuqEsX65rK9G88X82voD3dnNjnr5bPfG",
  "key9": "M3Hn4FQDd1rNJXjE1KL21623WAByAbDPxaPfWBfvrvb1bYkgqNXKBbExbhKsEWJXfcdisEGLaFxT6ChWtoqVyEw",
  "key10": "5q7N18MYSa5pnxpC5LPiYxLHeB29Ezk1QyZ2cHGauqHi1U3zmvHcUeNffxaNC8ZMsTSjt3bLSGorurPCxia5TXFH",
  "key11": "eaCxoF2w72QiLy29RCeAAzpEczZYo5LwYEQCH5P46JR2mdq3mDzTkEicv1BZsG1LGETYbtKrjunbfkzeYD18SdN",
  "key12": "2g315Yk8gDKcPkQSvsTQ6vfvwNjNvRicxwjXFEcawNNBnkLmEJaMnptLwMMHWAQJkNs9CXeB2iMtFXcJkAXXWQxE",
  "key13": "2wwktzUdv1Yds9KrFfRTKHFiZ4g62bc2CBLcyyjpX7c5ZZZzLNCZXXXLtnLnTUNUvYLvnq7HcZx1STnesezoow9w",
  "key14": "3hYktbhi1dCQxD3qaCZQeJEL2YsHAE22y65iWHjAg391HxaHSSHssFSV42kbry9gzecqg7N1gnGM9Dwgom1vWGSz",
  "key15": "5uNPFQE5pjYmE5v1xRa6zt25PV5yyZBnK8vzThxT4YnmYinKAanepHuci9K68YRUSNE16mWLtd8hQts7MgQj9tih",
  "key16": "2zFMD7Bd4cdN7rf5Azi7tvN8z5NBeRNPQACkQBEFENEiL9S1kx1sC3hJkrnEMPfB1Dm3nfLrcYSw5NcX3HB7Jdqu",
  "key17": "2VWkBJiLBCzE6CtkZeNAfgJkHswFBmnwH3wd6PCEv2UgydmJW6d4CGiFG8r3evUv42TuncSN8LFGuws8kM61Eduy",
  "key18": "3fsE7x6cKxy5311Xri68DssDvqTyTg6jVfBSB7ZqWCRYgzQHRBw1ez1NgobrqyuykVmg75iKzisiPf5nJogTYYPH",
  "key19": "2LafvLMYhhGNVr7M26BoCZSEF1FPBFX8G1F2Mj7eKUCNsiTypguU1yqoHfYMgo4gJgKEPMnizzks5xoQuJrMTTDp",
  "key20": "574fEGvEBDGTxZ8eeweFUykKLQRmFR99xj95YCSphBtMtuRSuTmvYys8ytZBSZ8HhcLfbzpDYJorB8BXFfkJnL6x",
  "key21": "2QHLtMkLgLMy6u4L7izkc8KvBvngTt65gfVKrCr4CSoYCuUiiHorJ653GF8pFH4yGe4LGVSUjKeadabZrHoaHCu1",
  "key22": "3WjUen15Gnc59VchHtHW346NuwQLQjmjX9SSAc4i3ZAU52FHqUM2aH9KDVNKSvJ1bSQYp2ZPy4XkGP2d5GbAEwWp",
  "key23": "4FFwivZTLd6Mug4tdRvvg9Z3SWqFsuBa3fVFp8ebdN2e7PPVpjqGwQeKpWytEYCDwLL3PaayHd2X82vDZ2mbo97H",
  "key24": "5qjHLWRhE3P9cK9ERcv4SsGpmeDNF3tGVqz3fMYFdzNj6BJZtEjbaPeapCahVwSsZEzoy27RTpTo54ub66dab54C",
  "key25": "RxzX5Mu1impY55ECr354ELUeW3F8u8h4MSaAZuQyFw827K8XfcYUMLL57MUjcM35DfLXPeFt1gZYZad7QLtrPZ6",
  "key26": "4fsYPDPVBHyWXf2MNfH5kA2DyRw28TrpsDwHqu82CucGiWokdpc2EVDXxFKCJJMxLYZP89wyMMCvYRfAASyDQkWg",
  "key27": "31bKQtvjn9bU7Q5cZU1sDSFAm5HffE1jVWeKgUuDf1TG2dGganKn3FfrDeFcQnDLHZYZL6FCFaQ3PMarQ9w7zcAc",
  "key28": "3367vvFrmyCeubjKryi7iJa6C9Y14k3NtKSPfYD5rLrRSPuDXArzj3wxw7hHhkDugTBWzz1v3zFLWEbALxx3CFQz",
  "key29": "289DhetuX6JQ14RcEQVJfYzKszmh3iPZEj6JxCWdFjhKNJtrq8qWus8xLBf52ZBEpHgjyq2v1igBCbrTmRjRmyn7",
  "key30": "2b2CaFnZnCh5asXVrSkppKKgudjtkEEWQHkfgQD9aqBcb5FyyZHWW6FdjWvJMCv8SXVLS42RUC25HpFHey8P4XGo",
  "key31": "3EVT9abcdkdDreqigK6P8eT1gKH6Ur6KxK544KcZ6ncm4st4mKbdcddwR5tH41zDizwTTeXuJomyHTbP3yqgMyKT"
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
