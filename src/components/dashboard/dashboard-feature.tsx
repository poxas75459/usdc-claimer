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
    "4NEZ47zYZ911xHBqvJJuiXt17jvYgGV9En5zXkUe6to8gp3zMovs794H1TTXd46zTukNQhZTL7U4chkgn8jx4fQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5jvf3CGpitJc8Ctz6hmAtWRN9V6Y151AVdbHx6BJJpCrNpXjquPkZyErMY4At953Ta6mePMyfZgk5id9SHmmU6uq",
  "key1": "36bpxYXVFMRRVBVTnxwKNF4FfckcvbQ5JKXcmy5J1JnoHPKyeUUSzWP6U4uHQdoGyuTgn4327F3VneTcLuX2ErXP",
  "key2": "3oCMbUEj7YjRsGV6kmPRc9RrZRAvowdnSyLRRqVjhE5jVm2F9WfWrW6s94XPDJD8Ak1X6YS5KafG3MYyzPF5GSta",
  "key3": "25ynnJfZfDcG623uHSWZ1UJfAdTBBF44bX4c6d5qPLEpHnwvgmYP4jF7pw9r3XtBEowrpE51ixX21NBS2DVQjn7d",
  "key4": "2AYzV1UqNU6Cx53Hz98AWjZnRrwbM2VEcTUUNjn1MPaMVxM9vDHmBhMwFsqZyDFGy8UHLkA3Tc6HGmsxHPPtL4Pi",
  "key5": "3KSSrgPei3LGEhyV25fBVs8G25Dbnwy6AZ79zgGDueUNtLrAqQoooZaMGX31GbxCS5XKC1sGLttepvoyiZeMVJAb",
  "key6": "Dk9yvti51cGshx5haHAtRzDC7jre88h6d2ZptfS5mFt2zvKv3xuXK5Hh2T7cK7mtMDPKz5KK1HfPdaHetvU7BeJ",
  "key7": "4tMXfwbUebAgJgaCcKCwJcbFdfhojESQ4fTCwuenCQLsB1NFdhMy2iX8YtBVkiunrcPekoCYsJKcieonZGSpxUSX",
  "key8": "5JZqSmkLsTRKFvcdHxCeBX2UtkR31SSamkV52P4S5KFza6RA5FuZB3vkZdGJ29vzafDNg52sL3ghdKLm6iSiXdKx",
  "key9": "H3VfuWgJ6tNLA88BYVzNStHsix5qSfv39HQ1Li21vfUcUvixAn1oNGHZbemhXPgjgyVwgoVY2HC31tfdzBDBraK",
  "key10": "3rgAgtvprsVZWCBuunjkyy8w9TsjChu5ryrWPK7cNhxcsMvVRXQdVLhMvt15FkfPpkwmsza8iLDDcTAktb5mhsHU",
  "key11": "3qvi7gFXp6nS5qfy9X3mrkLxEoxW3qteuNwmotE6mricW7N8chrE5YPhXm9LfKCZJRB5LHr6YZkGo8DN48ECuDhe",
  "key12": "43fVy9x2B3am8ohju9TVMfWhqR5oQzF9noAXrxTjeXpHPBtBVBNfKQVm16kHsKTZCh9GQDLTwBDdncFT6Yovn3fN",
  "key13": "4N77tTSk2MgFkkykH3yJtYaVyDzDfRBVQDNuaXFTUUi64imCfAGLvEHuGtMPho2xvbHrwqFAhPvazTuwsW3UWdxE",
  "key14": "3UsD2ypCxpWYzrG1EBS1Z8VkmLkSY2LeWxDhniraAyMLtDVtjwvHKEzrpvi4YoCbnsFdCofVg3yGRuowxvvnW9oz",
  "key15": "2Mq8aeQbFqfpmZG6Ci4xXuCKf4DKW5qtRJFccaCbDKrw44pbxaB8EnsU9fQWcDtfx5WbSZWSYuURqRrwrYhDRNKE",
  "key16": "2mLq85BJ2GwAAHJgwNjri4GCvebDPGRP4jwgnWb4VA5818PbnqN8CqksujwNRoYpHeyMQJ9TzvhWyDZqTUfitjgf",
  "key17": "2x4uP4VLhDCefMoEPJTNhb6tqDhkbdwt3cjUXqwAVzEfZ4rQzeSqEhauHad9GGpJi2bvKjgm28nHqhY7cqLvpQDC",
  "key18": "3vGYHUJmmTfVBkDgG5VaFhegU6Rz57yUA4XX8kn7Msee8DjgxPF9hdJFxX2VH9DvMgRnSnKiEdaCSqDKNmQX8ic8",
  "key19": "4ZXQzoMmDz488MkuyYYKyoXA1c6iDXayUQi9rEpuoYszNCDVe6GJPbuP4JAXhmZcB9VbyPZMij3NdGzJyndZ6XX4",
  "key20": "536iWFUDDeWdRi8oUkFmqTeoPN3T3oPXJT2phjTSEV1Ar9iZGzjAAaneXvdv3t6gBVmsXts5C5SMZF3abygFrk31",
  "key21": "36ZE7jM8Y5ALLGcjznTBMLgJJW8QWH1Nsa1n6mBsJbcR1zXn14ceSBMYd83EaXGGZPoF2kqe94L8Ltfa42WKpXXV",
  "key22": "3nZdUZjeec87ufNP2BrDker8Fh5gxXgigRghLKmfSggW1gnCbK5KwirGWALX73h2XXuFuBLUpDWvFT7h8WMFbkDS",
  "key23": "343VciA4fs2aBGMahyjgvHYmuZEPP75cgXao3tGjpiPN8MnxTzguExUPaGnuW7FoyFVBm92GZFPAUpc7zqPveCPM",
  "key24": "66HViwjfagb4XZwqs4UHyJkKXgvdDgTQqCs2mw4YmipRCYmtAHUZWY7vYiMyQL44chxTo9DPSBBmE19hKkG8CH5d",
  "key25": "42n1cwEeU1egziqiciFtqeShQzgjFNcuKqd211qqUqLdopmkW4VNHYLkV9FZ1MQSp8vShqSCkwYCMuwwwNnbT87A",
  "key26": "5UNamqahd3hPoxgEZs25VAm4f672RfaAYjedFWgcQkFdGZSCWWDtGaa7bzBUnKgYTcpLqbWmSLfcfd8MdD19Lm7Z",
  "key27": "bNpYV5KQVRkh83APybdiqk42M2QJJHmVTLYtoYFjVP9L94PvduXL4mW6Abo7iPXyNaYEDT42PhuWf7jQJBpARJp",
  "key28": "2CTVFUafosBPcfKFz2VureHFN3kjxnKGGV4MUbL1SJfR1e4avdgQ3rCYjAGGFWPrywohGK2Dyz92ERDPWWFXDPcV",
  "key29": "4Hi42KBN2ZdBvwc824J39X89aWk7WVrQYjeZh5t5nYjFVfX2DK8KkAjZfa1XLpQkVaShSaLHkYpJyqh2t2qxvntA",
  "key30": "4Pe4NKV8gacgfhXbey4dXHt686uyqfYy19Nw5nT2fwJ27i9gxnxqncXoutuaAUopGzgrvjTNJyeka7hUYNhkTtjA"
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
