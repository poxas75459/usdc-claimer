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
    "2RvyGgoZVZcQm8P7orQJeUVggTgNkeMPHnv7AX4vcCe8tVj6mSrb6kAfH9sWJWHo567TVXCxDL2NP18kppoAq37j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4YLM95XwJBo9smB3o9LJX3Ks4FkZfG9UHTsriAEjohageATtJU8enCfaAVsmqaMvrF9ejVqsfm63g9k9qw6nYDAC",
  "key1": "4VeJwff1grMdF3p87jWLAfDXqQjnmWGgrFCTKS7VL7AS8fMarg9m4xhsVTnKL5FsrgenkMpiYmBP8FPdyEN36pwC",
  "key2": "5NNqwpXDzTxaAtKo1mwRg2dqCmgFvu2cBF25Aw8C9BX8Y49AU2YdZ8sbiVMEzEziHcobre9DJMyKxEAJgP3JMp6D",
  "key3": "2NrC5VRrywzHZ4eaLpJJUBxjWLDtBcTjZabU6v2s547UK2dFLnb6UxhprToHTx69vHmAV7PMcRpcdACbZaoBengc",
  "key4": "4L1KRnifb7VFhGnz2TgfvtmQhqXLtRoB2wKRuuNaw4N85fT9f588aThMoNBoTtE91KprSfv29UxKeRvijuZDmwNT",
  "key5": "5VG7KJuEmDaZTwZbsNXJqihMxbfGRLcQpoZs4krfJdNXRc35fhxBxsvaYGHr3WYmr3udRECpbN4taZMa1cWV2hZe",
  "key6": "4rR8pcGzW19zeSj7DoJUwafWyb37jSnj58QsEJSLx9pebe5ct8ArdHgXoeyxad89qffbVS5PLuY8yxzPBzQKNDYe",
  "key7": "3jr2o92aNjodLMSBkPuAVKQc6DBujfW5xHrUiXD5n2hkyWmJZHj3JugTHiJgqUrabHgSskpPNMRCyScAVjbTYtL1",
  "key8": "3ETQKfSjNr9bGv78U9QZ8q2VPL9L7UkeKCeRVeWSVjWjcEUrL6XrArEX3Mru46xa46NM7HLNfgbq93R16TFA8ryG",
  "key9": "2XZ7945Upz4MGWqnzaVVJCcicSaKh46w9xb2WMeTn1ggUyD7RbdckZziXGxrk1uUrC4ZA1AvDZxT1Q3xjYWMk7Ey",
  "key10": "5s3tpvEV3yTKKXryZC1rJKC38592fzSabYk7FgyErB6wp2okysXX8Gh7Unga9XeiQm5jH4HX4hyLo6HLhwzPe7xr",
  "key11": "51QhXE2U8UT9Lkz9pp3eukpoXJCBKRPZmihygjQ9zw37cizQ24NhZkgzmFJ3xmyXDZpaHCcuL9cqnxRp2dNnisTx",
  "key12": "3r7SArKuyQqACpswEFJ36BQv17KHAXMj5CGwMneaanDF6wJos8oUMxWN9zyYB9o3YcHHRaCj6dZQkDy8nWGiRP3p",
  "key13": "3PDitzLpUPvbnhYtRUxBCJCBR2cUxnbHNVRAVYr1MMqaC1o6cHBgrJ3KrWt8YitaXtUV6GXhbx4vAUyqf3Ab3ARg",
  "key14": "5nzrz6MmoUXZGMpJ7osJMMD3TPEy3wboKTNf2K6bmD9DucRu26mMarc9qoYt68deezr64dpzG5o2vj1nHf5Hhcjk",
  "key15": "2ap6ijr33rxMXucj8feMdUYJXvmrShczi9see2cxtyqwjLQ4WKdGomgGYhFmHGhTn7jhxCEtqudL5vGqJn2QHhjk",
  "key16": "5s6NWteDtQDdA6HnXnTjvnXCyWnNfFWzyi6HdHeGLS1wxxUm2LXFBgqZvaBGmwXyTDP57edj3shdk3nni5uXjLWZ",
  "key17": "5ShRpxPxTNbZKUXeY8kSM2Mv52AJkMT8iLZHDNeCPLuzEqivYaFG5P5kC3Nr9oN1NWbrjB7CJDLJBsg1BkihcQgN",
  "key18": "4kSVpeqvM3G72fq4BBFnCi1ETooYkAN4VdSTF2NiGyjJHesKULuq7rCGMUk8T2GfJjwnK1x9mGLEKxqaTckJLNED",
  "key19": "vzaq5kmFyjzpv7qYADVAW4bhPDGzcSVTgBMiPVWUxBi5v2Mvnw8kzV97vz98GJ8sxhc9MJ2bTTatAZKh654STHV",
  "key20": "3nE9GHgHxh4Re2oSKbqKziroWDvtxRyxKQbdv2A9TzhTnT5zjxj2Yke5hjpDu1GCboKJDpASKBNDauKGdEMsnVYu",
  "key21": "LKXahgVmbVJxw1bVw9zkW2u8tf8JyoL4gPQXVkyJo4ssLwYohCGvG96gPoBmC6PRZMoZE8jKxePEPMN9mjUraSP",
  "key22": "4vBH3CdaCXcvxgMcigs4US13BTTduFZwZpLZWVq1Yz3BNhJtUdNsWgM7FTk96MXrvnC1ZtGSdER1w9m9r4f67W7m",
  "key23": "5aGLiN5Jt7gq1F68Qxhy2Ys9CwSLALZSkzWfKMyNa9wiFqHEMEGBTVVPWZTqYfpA2cjDQQqRQN5zaTv4EN1U7iCa",
  "key24": "3yxhH2KYgUCCbi1fAt8m1meAJWkroJv9UKL7CY4RaMwaqhmX5yu6ruFV2GeAzWDgJydNHJEKBB4AJ7nRxXcEhgy3",
  "key25": "5WQzuKEeupgiy9eb9mcT8ygx114NAivn5MWvcATmRCnzaCCEjeCXsaLBQ4DJXumZ4JSLcSBRJbsfeiRqpydhPmer",
  "key26": "5DiYZRQ6JxPbhqJzwsb9wNoGacMPreQzP8QU4H2NRE4ABozkiHykQBjmhNbgdHy3bZ6xTUqBnKC4nPoX1PsoJWe4",
  "key27": "3yKyc1yH1VVgzkdurSyL2hrLQMwYe6mDpy8b5zXEuFpgJa2wcSTKappbSgiwTD85hmEAswo5ZsM7NuRzYEjZRxA5",
  "key28": "5B6bqZefCJzM5PdfKiJ17qjPz6wcHkqgC6FLvrWGVm1zvyQLa4kUkDnxixRfqiroEtnCXVUzDEw5sPfXzuCUMHkn",
  "key29": "5UZ3mdZ5WkABwDDsy3BYwDnWnFp1KQZJmKUEnSJTb9grYBTRk9iBH1XM94vet67nEYGLi8My3DCPaevFdKnVFArn",
  "key30": "5WpcLrzPY4FG3e5VVefvdjnBVyqVPJ1a9AZ6YX7saUYYnMvLwGLLUcXBVgiQ2AqZqGKYqRxCy3m1Pvdfx89wmciD",
  "key31": "4sUqCmWShRnafHzQvjvKkJ53sHQ9ugzxRCcJWWc8ExHzSFVdT6M9tC7vk3Hz8cyWNHZj7wxYiC9PkwGH5L8xq8gS",
  "key32": "22ETT185Ht9mYh2iX1fMYGBh9wdBiJBcFsydbXPgn7J7GQQ4fW2CsETHoTRWVXuzUdkNetThJP89RKgaq62PGm97",
  "key33": "4EJ6MfoDN958LUvLJy9RY8wzCnRNnPSF8hd2Qrn5sB8cMiuQeheTa1eCxneP1g6efFLwbjDDnMUyFxqXwLUhmr1B",
  "key34": "2ULpZUfpXRFiBU6zsPJZXvaCotVUkpLkGqbrPDa8JjyuQosKdhpMXdSHrSn3FEsNJGzruVvNDKNqkY58qKfdcfKu",
  "key35": "2f8wnJXTfrpPnzwFCMM6gTApxJFEssxCGnt9UcBjEiiAp2ftd6ANBXreGetzsNSYcxXcMT8Y3Se1TbiuXxXEYSuy",
  "key36": "2awnvgNCizBRCbMVnrATpCs8NMw21kDBxVpm5U545VwJ34L2WgqGxsWvHBuoTuCJMXM4AutCnWZfrn9VcJT6LuQi",
  "key37": "65KC8Ys5e1oHhBR87vbUvoRbDwMLyZFB1ArKoj9sjn7Z39fN4MY8USX6GSmg4VYuDGGxNvEdRtQDwntvLapc64aC",
  "key38": "4F7vmeCJsHC9STRc124ZPWqcLcEiVzqpoEH6fSfm9mPTHAUpKVKCgD9wGhT1GFM4DWixeJ7fw1GZQMjGmKakvMVn",
  "key39": "5ASerpxAwu2xDwxVmNhxfS44M8eT1U5N4htgVapb4pXWZiegMeUDDNqbCmzrYGRUPebDv4fenUPBGHH69h4umRkM",
  "key40": "2mh9GtdasgSHfSBRKk2qQfC2ad7y54Pq3GtHi1wmrgYNa7xTEuijActh4A53jb3GAzox2yVr74ysxJj2xpoK6rPW"
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
