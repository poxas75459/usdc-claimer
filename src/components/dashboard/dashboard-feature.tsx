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
    "3mHPBa9VxDLQgnXKv2oDWddTN4yUJ1SqaWnH4xybMFDv1o2kNKzjLjoiHu2hwAgvNMahe9NqkyHFiVEtXf6CQTY5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZK2FdyJ62aBHjvwb7Hbin2ETFotQmr9ViSqXzyNziafCqc5LK3Mw3wpYkBLfAJ9CnHjjyfgETpdhdEDXagKrgnx",
  "key1": "YXS6eXMnzHEma35YwYQMYBWjpmk4btp8AJ1ZwFGT6gc6rR37SoqYXXSTLBqEvSAH28aKhdUp89fuUrxTgHjyWCZ",
  "key2": "2PSnR7qtbEBGiovun2fj3VBXemmuYyzCky2H13193pDCv7s3P9hg3kC5ZN9YXiSwaQv8jSPK15BxbpFsnRdvjYcw",
  "key3": "2konMPJYjVkPP9mW2gYDSy3WZZH9aCUVXqToGPKvYaWgJp8K6MgVmg1ReHUzxBEh7EBhd2Ci5wnczMUZ9sTE4Yar",
  "key4": "Nc6J1fTmF3JEJH8gmzwkRbYtuNDYAWENY2CD4B9Q9o2j71cQZHUPHjkUN4umKGPR2ZrtVbRnzg7w9AFfnBzo1Mr",
  "key5": "51r97rCQSK1UDN3z9kxBxToFyzXeQvLVmUt5kXu7tpiGfEQ4PjfA1KMyZre3pnfa73jZvDj3zA8ZL2imRH6FpW1F",
  "key6": "5RzbfW6hQzazYgEuAxN9cH5U7BmRUBzjvJvv7FMazWmaqPZYmJmM594ADwL8zYCLTgKiFmcX2YaqVj2uW19xFm2C",
  "key7": "41avKh7GMvwG29GCRokho9f8DUN9CjThy6rQw31NvNmS1LW51wbN7R4q8nUqEsthz7oJuLZv2fiMXygJdDRyPNk6",
  "key8": "3CVXHw3vgNL69oNWGpD1ZKwg84HFjkPo3bFgUVoP6P8ovfjPuUPJUyh7wWutb9eBm19qcds4PaxbMphXFH4FBxW",
  "key9": "5fHJuZKwoT3ybVEuKduPgYvjDD6gH86znbn2cRqwD3onGBfa9ZtMgAcGyyKR2ARMwiMj5VcThcbfweCmRzhACfe7",
  "key10": "XdSFANTGYmocX1FMJGyiuF8nGkn49YqCfiMUa5iA9Sf8aQsw9zvXfXmKVegfDpGzZdY2NfU62QRn6nrD6NgcG9H",
  "key11": "5Kpp2kf2RniTNnzsdw9V6BKMx2k2m3NWz61dA9h3gTDWs9iQC8sDNATVmjtwb86HX9L3p9zm5H3XFMzxKKTbCxwC",
  "key12": "4FUfqxMm4gu5mvzWtPMWvMutyEZpRH71wF5H3v3hLmPZ4um8wK51iySUhF39cEVp2rTyhkmr935zUnio3NaEC3cB",
  "key13": "5UV2avPNGB6VFL9fHBUjLf18PU3fLfHv6utrTUqNZLvZ7dmteTMGc5FroEYGk8vidwTSj54241kCbaDBzQr7Hbt9",
  "key14": "5GgjkjWoRmxTtay8viTdwrA2UaQcL9GxfPeNV3zx73CK8YYvHzVQ2z7GBf7zEuaAJGZeXxbqaskRCvYWRApqcj1V",
  "key15": "5CodpMw5W9yQC1tgETdZnyUeogWbd8fhZFrVnkssG8qSYpxRatX64zEqEGy7dpwH1cLw58o9bmRSY4tydh4nVCHC",
  "key16": "kY3pHu5PujpfZu2hbxtTaKAKmdNPkZ1BySSmFCqQwAeXQTzR4ME61PpEXc2WQeNFmD5RMhDLAseFacGp8625RkJ",
  "key17": "3XtHraTzhdnW3Pxvev1Z2auy3n1qaqE4x5ajBqKBFLsZq67bkxDbXLEfQjxeijGzPEWyXHnpZQdRhQD7w1NKBDFU",
  "key18": "3arW5dTgy1gszWXL6ntdNWnyhC9WmwxWbwwd67gXhqaZ6QJEZwS2c6J6CNPBChmQDNkWyNcZj6pgkxFf9G2t6GLj",
  "key19": "4nVVXbW9UCLK27McWM9S1er9XtY4fM8aLzokPGzdEMKgqni9CQj7tSWXs3EUk9tnPkvokQgxLEjyFMtaVHCMnpiH",
  "key20": "5vuB4PnR2sf884V6ECMjmXFKWh2p3CamaPgdXeAbyUt2qRj1USfZuwQVN8aiVAwDR8prLiNzspJRK1MKFhrtYCak",
  "key21": "3JTGUecK5uKARxAJcYXzAbSVew4sAPoVCCswSPnW73r6MfNJwce5J4WdHHUCz83hHe8YuBdYUuL5L8uw3aqoH3S9",
  "key22": "5v7jipbiqSPxmkbeYeFtcNWvJUbCyeFg7ZCQn7YbNXNywftqSDqioRQaNAYkB2GwfG71Trg8vhT85vi6drtgNidH",
  "key23": "2aL6zkqoKiL3LjwvJnnwYsRNMY4A48wQRg749864yBLcB3TRkZaznuRU8Pf4esDxUTDmQQUWgMBcwL9Qmw34QYsw",
  "key24": "KuEMmhC6ZiBEZY9Ke6ohmXrDVcoCQUaHk3ZRaKSLNWf1zBL7jixu4armzKwxiYcbmH6wmfERwEAuxSuKMhZHBp4",
  "key25": "4ydMTmzjXZEbCz2pVhSs3DV14vTQXjunLnJswJ3rgPA6wRCkd5WwhXUsxNPG3aUqWDqv6n1VBCy7HkoNanb9asCT",
  "key26": "3NxbakyoHQTWLBuYFsGKiFPT2BnMPKnQ6DB91wRk8fgVpqy921Xf9hgdER27ZcBfLLrcLSFU7dMJ7jVWB9AFiKT4",
  "key27": "4vLA6UunBrRxbfzU7AE4vxLuvB68NRCWTtyX3KDC8Syhm94qNVm4sBjo9xgjTSvEye9xTpLjz6HiU75mLwJaGRTw",
  "key28": "368k1rjQJLcFmDaqmQnJnGWnNxw1FrxGyfV2GPQGp7sBM4yVFhcuWnyeWZMBJDQ7uAmtzHPLzZvT4ZkTH5LSv7bZ",
  "key29": "2oybtpGykrzasqw9sKoszSes24yqdQk5wPcHL7GT9RLkWT2Hu6SgLghMXJU27dCewUgJpaA8rCuuFxsQccVFtD9P",
  "key30": "Uajv74KH8a4yFmF7QJX8taq1jc4SnkHhVQHeKnW9vRyDu2tFeEedKcQnikQ26ZAhRZnLu8pTuM3y4ox6Q5RHrSg",
  "key31": "59Ro2N9nmYf7GwaVKZ23pVtPa95uaMQJuhQvcnD2m5okzvAonuR6meGwGv4jnoJEoNTZBaGcBt9qJiEsry29RaRF",
  "key32": "47irB4Vz3gS3poxgQrRvxCBu9Fdce3ZNiycWe5b487GBGVPnJ9jbsuxmNCf2bMd3x7jb3PJU3P7rH6ty1ggdEJ7y",
  "key33": "5EwfctVZSifLFhaCXiYPopNymjFg45mJUAYMW6UPT6zfcGUUMX1Rneti4icEncREt9EmjhfM9Zqd8TmKFdShBVF1"
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
