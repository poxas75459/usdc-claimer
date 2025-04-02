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
    "45VuSBhJhdXBcYRWDR2bbDQH613mvupFzGnEfz7zbtFDges9B6UqoR1ebgGCbFzqLE1JBj4edr6UGGncr7sjSbSE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vrNiYRa368CdazrNbKk4ZuEtCpVdcv5pvKRXuGt6UnMuAu8U6cvKKe9egdpGGaa1feJwTihSXJ6QxoHMxAnmtsn",
  "key1": "31NYNPpLVLKxk16AuhgV8WxxYDw1kyfiPSRdXgZjBapLCgo5xJoHnxi6vd7neow1PQhfdZgPzjgwK5FtDUfd897V",
  "key2": "o7rxMHMvSx4GTUjKcRJPBjgp7Uk6rFDwcQFQVjwKSSaXWZLbE9gAkXgJLoSuVCxet47JZXenQSoZBrJWUEcKWUD",
  "key3": "2DSraHTDUQsGrEMGAWAa1T4mFFoiDiPMShoN4TA6CD5ZEzmGyGUkMtRzR2hr8opGz92bWk9Aax9BFWFtNMJntjGE",
  "key4": "31T6Ze7T3sq3T8PjvfXhDjJWNqMaJNyAtzZ857Wn9G2SGmJfdpRSQKgFsNXacPNsypYHMUWbEYVshSB2DJvUDiaH",
  "key5": "WiWKSM1LDmGbUHL7sXwKE8KbUok1DzrKyiGEB3UwsNfEmpGvtwdMfQ3FofK5FYb7343rd4KfFDZodBaESy7Wg98",
  "key6": "nHv1vtNAazKBrosR9H9zszrLtAf9zhRVFNCNTMAuu2SaixpCQyXTKdCx7h1j7npeYutAVjNdGW7gCEPASvKn277",
  "key7": "4Ud6ZZQgcAtKDeSSB8FUfnYfvQH2RNxHSLKnenz2L9bikycQNQD4RQyic1Xjga4P7sNMJnhxeoJAEkUxf3SDRDtq",
  "key8": "tVunq2rYBbpGFZU55UVM17YF3vZtMPcLJ6DC3brrtLrGg2PNCetSvn5LcXzNGcM2GkR1QMJHRzA9rYiq6QESDQT",
  "key9": "2tYDskWD8gA9SeKXjbCq5AYww4Y26MfJprumGfMFFBW8fhZmYK1nDq1X1PKaD4V1NrnuYKy7udRqPzzZDok1tsjy",
  "key10": "29RY6SPSng1szS1VrmQTAUnHrK18zADnjrj9EQEPSVsnvB6LVxW7PcDzYWXZ7V5mVD14gGtboA4b4EiN1Hwy5cgy",
  "key11": "fhv3NdrSPsjiPBW5xv8Vhc1sUJ73a3M7LWPQsfMt2Ch5yqG8UPBKGLjfYUPv6BCUYCDUH9Kw1rVbtoKXtsBsiNC",
  "key12": "Ar2FqXD9JgRSbGSsqANL8JU1q5XKestKwTQbLjPCwk2uUUSzMJ1oD6gUpyW1AaTTeN3fkBcr455FP6NQp4XeEBP",
  "key13": "3Wz8NjvLDLAE4PNQ3LnN91Z6UPcmmJ5e3yxiKijri4bR2Hxe6vx8KGUcBqZHMmqRX6Hdi8MpWV2p36qjUu3Mr9BA",
  "key14": "5xPdLWbeRugwzS9bos3w675m3L8MskuKy2GF2gQUTi1wHpcpMyeVapTE3xa9RvAPEsi9KCYZMNtKCtuVfbAFPssT",
  "key15": "2BcYpThk4dvgjYHKDPPKEMQf6xfy5VT1o1MT88A56kJHG1ZCkwLG9bwoRoMLaYbQhGYQHSQj4ikgWAKzYoFgNBBC",
  "key16": "371i5K1p8RhbveLrR6jzTPxsb9Bn4vzDistDbNBRkRxsjVFdNtQd8JxCGTAUD63ssGZuUoyWiY3gJn8sKETvxZd3",
  "key17": "2prkroZozzGLKrjxdLtWMv9HSCZGKdKVW1gLv2N2pKrrrerhH1SQbUVu5KBrtPiNiu6C8e1xrfj3NHBaJaxDVUyq",
  "key18": "3AgxRw3EvhbYqyAKFyRVf57mN7DWbpfpxqwJhb5Jq3fR1X6hWPf2sjCcQaiu7nwkExBnoAVv7kbPcGLdbhZbZwXp",
  "key19": "48Ln5zuKU3LviiVykPkSdJftuLS8Umggdx1FoCq2eqWAectYwGihYp4mybZtLEKy3a8xqmoze8JxriQzjvzci39T",
  "key20": "3ewJ5hUFcARkhwBWTVnxwRxW7GunTwiWwD7dyZzqi3pQmzTXkjj27aRL3C9SJuwXjSjydYEQcA6oGQbENkfawZCc",
  "key21": "4KMnbbgdmd4SczC4WqDJyynXHZ2HhhoevQRbp8EmFbZ9DU3WAMAxwqjWxQ4devdk5BtkzkUnySeF7QhSxFgC9uTa",
  "key22": "2r48tJtDeghwYnm9ZwLK8tVxDGA6sns8fpVyNsy5Aj9fzemV2hQQrQvW9DKtRcKy6ozaHq6ukRG81ihpLdvXjfmv",
  "key23": "3L6z8Hgk9E1x1G3kc1FREnZSTZibiaVodNn1My6ktANiCqQTkyAig1SjNvcQXzJAbnv7kEmb6gvwE2aE2Zbn2VUA",
  "key24": "4EpuARAWxX4PZFZdrv9BVVNQqsvVpT6DqFdzbhAAwZL9qtgdo9CmCZmaU9aJdu9ja3cmgNRgayeKN5xoEwsuAYSK",
  "key25": "3MKkuUTWyu1iL8qmE5EKj3kJ7uexyJAdypxyBnJgzneW1PvZUGpuPVGJzFjUK9Zm4g25JYmrraF6ttBHopbWZa7J",
  "key26": "4LpTZnV7BKyWE4Uiv6YNZsK7JsqEeLmaWQVt4BYU7aTyzHcJ5hFj2okZVnbdfetivqoH62nMecBfYbB1EAMTpRq2",
  "key27": "53BBWqxjB1mLQNGE4xr2E4FJ2KyJSSazXqx54MZU3VwuRKHEK4TC7ST3t28ius7dwf2XxazUZtAjT7S5bGKXWngh",
  "key28": "4j5Qmz7BUoRrtVLpG3zqN25TZEUCpZyYbE279VW2MQ77HzCuSmNo3Km9TPAwoqHgdXLBA4CgiVTN87Hf3PP1RrQw"
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
