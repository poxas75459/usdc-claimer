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
    "qHPS9Xv3VS8QcpDnPkAJm5vzW6kYaJfSWMdfhDZF9HT6h9urn2oHTPLyxXKAukmxj2Y4e8Y3T2nWMG4ckyyspA7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vpNXS3bx44GiwNwKWFsArHHdRUQYt4fEU9xs7GAYGBjbWME8rsi2ytUSGuN5TU5qTJ7FevjFZYU3tWWjf7xHQ4j",
  "key1": "3JQxhpx3zZZk57jpG9yj4UGPvsLZT7tsvKNGXmBZZqunzuxkt73NAUtEboksYRAze6Zgfni97wYxdVxM9oiqeHj3",
  "key2": "xT8SydKFqt2b7o67y4n1SUKEbawQ1tsYnv3nrNwB7N7mMtgokqRV8nccmBzo6jcEmCDuxzqNbPwFFrV8YK4NkUD",
  "key3": "DBNxvCf7gGRVYXkbCKfPgF8PwRKSREScN5oU1iuifwvgedjkzL93q6dQaWfYBeyqQrcPvzfeGofbV8iK3H6UhnB",
  "key4": "4LVeKXdWMopa6e8cyBfrY2rfukf4UDtxk2m5RsDzx3YP9e8SaDx9YqqQmmnZ5fkWsFXARMxNF6fiArgyMweQBqHB",
  "key5": "5P2HdpCFLKNDXqkiVxGr6uu2sjwJZuVVPvydvUnsskJHjEY5ENsz3KgVyD3onjggH65pe5noftvM757f419wfq57",
  "key6": "49THMXWmvz1kSfFAN21SDyk9SiD2sG3BY5g8rXNFKZcQQdy5uPAPg1s7m7iHmDmndX5hF6rkW24HUinXqJUF9mJw",
  "key7": "5ZJQAmSJ8BsJM2DS2XGa41qeiCGQrmdi621NKNAKhKw4M7eJX2svfesZvZJMcs7eL9dzKf8WCvPrVXS8fvaDNs2p",
  "key8": "NJ2cbipuUnCywFDHkYM126fNi6ynAUBTGxH8aR5bino59LfQQEhfohuaHfvJSqwHPF2dyp5q3F5BQzeZp15xELA",
  "key9": "4Lcxi3DVB97jjuPrkvSSbjbqp3TZvi8Ruh6hsdwL98xMTVLKmyhsUAxqoXBLj7cN6sH53KyLRZCBtYK9rLNvkYfR",
  "key10": "5RHytnQncTC6cBYtXodRbw9v1iUxfFCAkdNEnACh9KyRKsMrQUAbHM7rfcHJjwz8SwSgN3cT6CSnBJuFDon2ry27",
  "key11": "3sLgczHD8WrJ4U56JixU5QPXiJEzFwy4imm8gaWS4NUMHxtmJYtYEp7TnUTeqertBWHHJuQSPZRorCTGb3jzANJf",
  "key12": "pQhi1UcFZvgzV8eabp3uRXGsNKwv38PdUkaDQxRxaWfLtJTKsWBxUKLgGbAC8xEC5edGWE9wb2HTijb37WahY5H",
  "key13": "3zDNBUJYrSkRX7KcHH7xTvRXZJR6szkjiNeiy7zYY8hcbM11HhGREPAG9rqDHpeoR8TRyYWd4hKwSNL5adrxBGT3",
  "key14": "3fMoXad3gNic3JzidL2skDrHha8M9zg8pSw7wLbian6JhLpZuu3p8vWmRYX7MkiSXCPrHVjP28e8nLXhGQKyHxiu",
  "key15": "4jdWrLzj8AbjkaY7wBDc47D4sH9uxSMP6czbZvKcSVFdkv8Cr5hQ8hePtfMPuHUKikybBX9PK3H8TbFAXeR8TAQC",
  "key16": "4rHrHGZPLeAPwjBnzMVJy1hFGVAcvpV4UK2bZviVR4QT1vjNErxZ77ceas54v1yJZqcmDAJYD4BNqFZBJNQ5VdWr",
  "key17": "2xUGy31VYoaJUBYGJHdbYEmnxtZd8wcSnTRPRhu8GMvzyE35LH5EGjTcsgStPdCXzJTjHLZS9dXgG2KqwV9nudjo",
  "key18": "4tWZezjppsuxbz1M4zmxtd3iZ7oJ9WBztRkub4YgG2L1iLSYg3hpLGytR69h2D54xA7ecVpC35hqDd4UJH6yRMc",
  "key19": "2qsSbbcKu1E7TtqDu2BE5tguWjws9yCNSwHT7WQjQApACkbFMfSkvM6mSd13LzhHmjnXvTADX9uR9UMWb1XKvYJz",
  "key20": "3ttZDWLg1Mifk9dZS7kY1uBdXgyqd6L9ww68LDbHVnjx8bfMFJ1XjHCHzqJxFo5Hm98sXgYDrfbGDFGZS2eWY97d",
  "key21": "5TwsSmbrbEoXizpDeoxjaaQGnopyxM4B1QWV9vUMSGJzoXcyyDEAQ9dAMLX7uNFmWVDMHUwFr5ZPbeRcEdLct3Rj",
  "key22": "21jPz73vCdfT2yteWPRJ8VkurFwpTh9CGtzVSCaR5kRyccjzrjkZVAWosZChMf4e2c9Npsc2UPdi8Q5H2UmCkcLB",
  "key23": "4M9VgAByMzdx4CuM6hoWETiRJoSbsVEVopA8ERWj466roeiQLbLf4NErWiArRXknA6UY8UdxQSjdj3dQzs3DtUGQ",
  "key24": "5ZDZwQrm913LibPxMh7idyi8W7JiAqvAAsMZdvqWT5JrridTHFPCLm6fim19mrUZv8SYwbht1xpiGUDBLX6uKZbw",
  "key25": "NcMT9st85EcD6biaf6MuPwd6UsWTmxehM19YgVnMZpp2gA2VoiGqHjPFuw3TScut3tueH291LFVqNMQVaWVxnYw",
  "key26": "2QxPp5KGz3JMtAUKuQpckqBNoxtcAreNhb5kbVQvcUByhTyX5uUbCJogXWEurQW2WrEWhA66UZBn2rMY1myp6PD6",
  "key27": "az16KkVtcri3LqtG1VZ5Kb86mCzQxn6y4Sa8exn6XWjbcwKrrNVhpRdDyn1BPQagSUYVH3AYFg3DhdkUy1Ykbn3",
  "key28": "5rKZuUHpZFNSBXSDf1kG5jUzq21AoL5E3toawvVBfUMFJMcmHoLAGFpd5njbTtxCLfSU9FDis6WeYKqH28psBrib",
  "key29": "7JhwsMUMTksiSvNFyJU4QmcUR5MfXynXvREhVi678GpV8qUk5yDor9dDHEmTa3NqpbrQTfx93FcqJxUU63YPkPA"
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
