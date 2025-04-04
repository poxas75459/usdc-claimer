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
    "2aQVVXN9jUaa2e4e5fXjj3QqodFj6a35UjtVzG7irxXPS29icDQoL7Bd6t8qd8z83Jfc7LcmZmw7aKyFjM1BVSTL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "jAxCdxQDxSFDsLYQyyePtSmvaV1uv3yNhCqUNihQ2Kars69iefHkvDjJnnK79btxzPuTPDwPG2p3iL8oSeaBxpH",
  "key1": "418wWBGcYNEnT64WbPRJpRfnSvUHhVSWH1zH1vGbHyHfYvtp7NaRfnNnGhMj1w3GHtZMv1a8NEYLm2c4QWhNNhSR",
  "key2": "5iFn49DsWPTqwTeaYHrXRnx7pUdEz98yqJBpQprhYjExbeVNtCQymMNG9X2TJBNuLvwKHaCWfZLkvbEbMqLtrwkz",
  "key3": "3VixCAMvr8ycF5sjiQWD65VyGuneeqCR6DhoTzTWMdd6UBNkLQ5YBQFUwCeurN636UwppwKbPF8dW7bqKyvnfRzk",
  "key4": "4hUkmmCcgn61Jr2t6yb154XLmtyuotJW7UcuBaXvM6At9GmeSGDLXxwQrZzevbMuA1PmYJpEmDW6s1HpMXLZ5jpr",
  "key5": "2DA8uWJZ8XknUbVB7UBPwsURD4CypAwTj7g3si3EwPEgURn6hrbvHZrkLcu7KeunHN6tts6EpFAcP7ndNoQTYQNv",
  "key6": "5Ppmarh5AtmfXhJ4ETyDAN7BCwcnGAYTGgpJfJCihSnedr8nY3fcyodcHvzaT87XqH6JCAkMCQaRq3L37pfMDiBn",
  "key7": "5C2LGc4bm6rgRAjXNkr4xS6sj3TqertfwrPdCgu8wBVFuBhWybhDYZpQB9NfZMbM6uB8pi5seTnQXHVUCeCnGNJ2",
  "key8": "5GSCLiFyp1e5bpLbFiwZDcfbyXgCKcnC3mVYsn8CkgmoVS5G8aVugbSY2cBZrNbiCLMPUoxhUPhDyuJYKY3xhNUn",
  "key9": "5XBixX5K1fcASsmvqMMasxQ75RUVM5koGZHZPhtRqrmpMUfPqUa3srSFJrjUoDVm4Ecd9gLvKBvkj5ibz1dFqxAY",
  "key10": "4vFzACEmeSy7CChvd9rz3dEVMcfTyaAiVvsS8ySiGoYMxTmR2ZMjtJok7NsaeDvDZixa4di53vCJnbenJUsLryYX",
  "key11": "xPXWiVAYQzfJTu5nxB1BxEs1btjTpWWExoDDJAJ6e8Pp84CueYfVxBwSPUwR4vnkGRAwSa1tFZbJ6wtGV9Sr5qN",
  "key12": "2CScF2FDWiQmj2WtxTUufkz8E6UrTGNUJV4FVcDkQ2KEpEu12zMs4Tv9DRhUPTC4RsHGLpGQyhTCDxaeqSti3mtK",
  "key13": "64j3zC1LNi1HAagQ1XmCLajLmSoJk3HndKa8diWzTQfAG9VV6J319JQa5WNnJD9DQQeNagVthrPD81Fj2MLcTs1e",
  "key14": "55ExTmie3DW8SeH6ReXDeGqesZwr36pkCHRf9tMoimGvKiSxLsvDaStD2du6A8fotRCk6NvWFykdPMhxmapELxgS",
  "key15": "4i7THgYa6TgMWqPBwgt6KTw3SnHBNQ8BfNuxKj8gM13nyArUKTVPxr1V3wpzWRRmhYhpLFZKhvz8wwF6oQ6AP4jm",
  "key16": "5E274QkaK59KNh6uLmoT8Kue9Zen3xhGh3UGBnQS5tqP99gcB6gFnqsZ3hMwYPMPVTcdr5Xjm3bN685WjUuyLdPm",
  "key17": "5L17EzfMFRkv8CN2XLwGqH2sL8RQv6G366QnvUeoezfk3k5RGiQtXid8G6aR6zGp1VFta8kQ4w5KeiDofrXFv5gC",
  "key18": "53xQEgFP4AuT1D72u4abPrh1q4noLD4kkNhwV7ruKLcwBJu6TgupDyFHdWXGJ9Y4SegN6NEjS2mgV84rkFmYeygZ",
  "key19": "za9Yy9k7cRZ8JTBqURbh8pZGpvGvMWkzW1WHmuRBeqxBWSHAqj7S5EZiNAnm7GvabzK2R56La7acEbm1pzg169P",
  "key20": "3AWrQcrAYqjfoJn2Y9nHXVZWHC61qVDBCXp2a1WxithvsuEUg9LExaJiWerWZ2YbvWhoDZnU7aYh8yfry2CV9LSF",
  "key21": "4VZs8ahEvzDBuuKT4prRhfubR9LkijC8wor879ADij65WU24Zuekzytzc6xUMXuPDio5Mk4kf2TUt1bTeUzurDQY",
  "key22": "3Jv8rLe71oU1V9g88VfUiLjkmbMW84xTHG9qfvx3mCzr5xM5rP9Wu9pA3NmvYfSrTzo8Xm7NEZkLtBDKShck5RXU",
  "key23": "24xSdKnHZgntp9GhUqjCkx8hP4B8LpbRzNqDg5juTyQSCiWaHvL5aqGS75EWYLyVcq8Pkj9Qww6zAER8PfKSSCKS",
  "key24": "9RLG1wySNeJeSBTYKbLCs4EKG4JB4WZP6wRH3UYKuv8s9Sdxjd8XyXD3Y5trLFvzkqTMn5vK6boqJcEjC63Vp9Q",
  "key25": "TWmBBxF6HWAfMXCdzqTyprwVx7cAisRFWjAwgiQRStN1cz3yqJBmqs8CTMEBRr3NwYY5pCmEJxh1fq7NNbMKVuK",
  "key26": "4GJNtbF4ovkxWMgjBhozqxR7ftDyPDiiTf7wHdxoCmhtnYBjvmwJEDALwGLZPHsNiAwjEEWZwPusTXirND2ageJg",
  "key27": "25zoeoZun7N3L17fpVZK9GkGs7Dfh5HBQz5B3kh1s2tcii37wPXyk1ft3mvYYiW9UKSgnMR5nnmjFJ9jdGDPWBMC",
  "key28": "5X5xDkXGWSYs1ZmQugJGwxTCSRpcFxxUQMTB3Kb87bYkqim3Kg3CPdJGrNVxgFzPE2sVVVJxhMTF673a93JGm9AU",
  "key29": "3a4L9MRUrRMMfzJXEdc9rCmqFUtB9wQQSfU5rcfqb7EHkA8nxQ1rTiG4s9xSHw9GfEek9bYjDHzMam8ywyeSEFrB",
  "key30": "3J6XLkAtP7g438hxMvarwSeVhuyw8fNyo7FCh1Rx2MdWksxznhXYsrKtkkdsKEGz6AbPk7GV8JMTms86nrR57GLq",
  "key31": "571FDcRXns2B6rT1RUdn5owqLcfQvVN94zivhkws1wfznP7e55Aeiaf87BZ7sTkEC7nwwTGqsgNnHaqDiejJkabJ"
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
