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
    "31iDEoS2V1BhSu1GFRRvefuyt2SiBDsJQrhypkFicEjcUTk4cytd2yKFs5YsGS2NWeLLiffCm8Tn9opHd4YkNtCX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rVZebCT8VvTfGrsfQVYJETYMRtyg8SED3d787XvyLfKbid54ye7yXwsbYfLiXZ5bvvfDAKkNSF9RsNYiCeNV8jt",
  "key1": "5qU9R8QHz2x3VZ2q89ySkCauPadUhBuSJJjcMNU9q9ULEGc7PFoFqvycA3PsS3tAYitN4HHotCDEmiQcFqbQFAzs",
  "key2": "47Xqe65KqbmLqYWX8RUuNT3thySGPBE53uKZKU4f9yAtBXFuLTh4F6BUTr1MhL8Q4eHsnBKNhWY5RNjZzk5T1e7z",
  "key3": "2PE45EdLUvkdnQXASXVpqWmSEMM4fzeUmhw5Nn7NyjYKL5Fyv9mjQTM51LNonHtvdTd3fGg9oazXPzT1VcS5F2Sy",
  "key4": "2U2QmWGWxTbhY1mThWE6YQJvQyuLRue2e5PkAw8UftepGczfaH7e1PcNkf2ESonCJTG2hFmLhYg1kSFKxwJmcHPm",
  "key5": "5AAh2P9fpfLT7rhRHrL5T2DbAHLHWazcuFPCMzwqbbH1ehTasFtpVEmbjbVuatgw9ihHZT1s2cZ4Rcxms6JLk8bB",
  "key6": "28bf7RAcYqyBDcnKJuSdsufTrA13KCn6cFjdSv7Rifimxiz24V3vDpH7wf2TpXFmsnDviyU1pKiT1reEVhfYaMCQ",
  "key7": "5MztYJxzP15UmooKWbN78AjzWrZLvwofofPac3thrVJuyvGxRNgBLMKbC6wUjPMpfBKNDfRxSPj68NddjsYoSYKE",
  "key8": "6M6AFVcD5HBDkeWcSG5PwdFaemqmpyJ1sPwFxo1xkTe7oEXqeVGesjdhawVj185nTigGm3hjaroQWywz8QBgFTp",
  "key9": "3MFCUKmo3ugGFJC3LyV9TMpqDNsb9Txycu8yxDXBrtMgib8DHMpDyCtcfZE7Jq43j5hEQY9byo4BLTNhpzZWY14r",
  "key10": "5n4nUSJr38xhxWKmhCeneQqpMc1SjJkRk9c8VgoHn8dUjvbwfw4x5WJAqnWQs8ZBsSSu3W4D7Artg7Qj2x2xywgv",
  "key11": "3vthhNFVi4j9CVoXcDUUJJQx5SXFwGbyVBbdwmzYWauQWuJZNtH7cStjqhyQ9hmT168awQQ6sF3BSrnUjWtr5vJL",
  "key12": "2veJ7VT8182sQMyPowq8QxbTrGmudMPT2TGER7ihHhR76FPwHVCRbLn6oYWcPm9x3S76cwrYewfbXRhdGXYquemQ",
  "key13": "4ZPHavtibeGrkvVVBEd7AbbPCXcU5Rsjg1ia216CXbosyQZHhZC5MRwJR8o45BLEzavBSRSZVYcRahAWQ7sfUboN",
  "key14": "kUmWpCYRTXUZEeoVcG8Azw7iA1mzS5nfYRybMYp3iRrraTgtAUPLAiPtuDFMgCzL3miPyk2UPkGjjwRtK5mH52X",
  "key15": "2DmK2Ux77Vb9FmMTvNenE49jokEfqr7KXT6xVxAv7Zk5defVhrwLkrizYPFjWLB9FtyQkwUk9doB74Fu6acbGBRB",
  "key16": "2NSeSnkE548KfDqxtx9rZGn6rprguEa8FBttVApYGbKpXBntPikkgczRMN79dvbxeJ1WB5sAG8e1os9HhFPCQH8i",
  "key17": "2AMbosWrdASEKUzR2gykQJxwbR8GcV2wBZfD9RNRPo2CLbbSc5YjDE4xSd5mRxfDUcKSRnm934LhPJkZ5aZUfGdD",
  "key18": "8qZbJFZ5qKmdgLBAufraQcfuNM3Yj36Vbwb8PNpF7fSN9MF9exQYuH88Zk92QzuAaAKapi8yk3o1jCsuiT12ryX",
  "key19": "5ra5jw1knZ4qZr2ZU7La1mWT234rkw72CyrGGgtxQoAyvmatpbRuhZ25DNTTLu1FD2KMFQRbDBUfbYxzUdNZ9MSN",
  "key20": "5Pq2KBSmGwVZpcX3EcpcPgHA9k7aJUQ6CXTYfYp6bwrdQpZUB36w3YGPoTbWLQ8tERWcubFvDaGNNascgkRHDP44",
  "key21": "48Ti4QQiC5wduGWSciShv4TaZR79rH8SLyQ1YRtYZyyuEpHyHL6rAeXpaEJ6kWeNSPn4ZVKN3WGFe75bKKLbhiQx",
  "key22": "5o4a95qjPGjkBgWtpPjnyqpyWPFHKG6o1HmfH5Bk3uXJf5JCxcZXJ4PUwbPwWJxQ1KuBtFwERxrTSjSJubr2qfdG",
  "key23": "2FZJZSsvHBQt8Y2p5Q3m81Xt57rALr417Bm5tyruzSR6REA4nie2QAEnq7zrP3DokJz1z7wEi39M2pEpzyHp2uDA",
  "key24": "2i17R7buGzdZ88XetrR2BKhBR4hjnxTWLEDTqWEUJ7m15VN28LKgd3aEkZfFsA4D83b6Z1WfXkTe9qo2pg5EXfKa",
  "key25": "2PZCaLzUXX2cRKEhpXYYNbkEpjmMSfrA576wrsbBaDcxDq6oJumusCvqKNavR6TdUuAXy25mCbwiLaSvzpcFzdqK",
  "key26": "4XNVsYexn8LVNcov6Mx5gaeiTm566fUUnRcNW5wPhTDRhiUk8d93FNe4EiF9HqCXsgaoopgeySqZ3Rn5pTnkHRCD",
  "key27": "63aRkEyvqYSekaRkZ4qQLmDncmRawxb9czw8z7SfCwnMcDpZBzAqTHRW9rWnKsFuL43QcN4ApUyfcaH7i39ccSv8",
  "key28": "23s4utqonnx9xuG2ebKeuBAu3vAzBikueuivBY9r6AwveaTRZGKqru3xBUEp48TaKc7wqz6iJ4JeC1T6pS8SMDif",
  "key29": "3uMiXTqPnr3ibMwKYN68wAzTZin5H6M13hiHxRXPvnHB5egSYJxGg51pStijeCDHkHdegHFqAyPRgLDCGD3Ba3TF",
  "key30": "2g2NmKm9WE44Di7mzetQXc2fhsmRxHB9XqVYEad4TNpiPJhT18xnLakDhNoQxZ4Hhmyyenx25uX2thENqZwsZmSa",
  "key31": "45GVvp41XwUSQMk2nYeRvm2RGj84m8E9dNBStf7nyQkz9XEr68QGppbpqqBsVt5iTMVBuQn8MRHyQWeebxKSuCpf",
  "key32": "4X8KPVgonhpNGmcxsQmA5UNgX2idmAn1DHKpeEh6Dxt47vc1xFH9Exe8dvkDNS5yUkaX9muW3Tu5Kz2aa4FNBKQo",
  "key33": "43Y3XRT3PPLFKZzRoduWe9GzxHgo3oMnNjZPPwev3BoafpBR5Y2uP5yJHWoGvJJEMgutq8NA1Ag8ApzMeQYTXycL"
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
