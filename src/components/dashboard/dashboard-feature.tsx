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
    "J2tLiCVey6avYhcwaeksVtskzTigekqNBGjxdNdB7ppaKjG74AySoMGkE14brf6jnf558zc3xQzzjqGyV9jBYjP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EpN9cif6VU6fVLScdDoFWauzgCE3qPM4vmbTh1eigqs6bxt4Soim6fKKVPWY2yMzRJrQ3bA3Q4Gt88rXzMioSnc",
  "key1": "26Hsobphy9gZMwoLK7HHKUvjwzjSKWLXJmVkjTbB27izbaYSt92CauUS3iaJTstagTSSJWJLyBnsgYLf5yrPBRA7",
  "key2": "2F1soLuTEtkfF7PGNSjRvqbmQDo4VNV5fvHbaXa3uwyYiqaG4qmq9FruBegxRquEiAeFx3RHuB1yHwGxCw2KRXj5",
  "key3": "4yfnQpNwTPwC5PRwZWrCeC76G2bGBgxqE5Ss6TGr1usbNHKn9wUb9DtpdYRH7Pnb2ZQZR5ukxa9VUDA7euLJMPtR",
  "key4": "3DpAcZEJJEjNCweztAVoBLQq3YHvtQisPrWYT8JFqZtXec78UF8CLpyPQhqVF14gr8Pgbqm68KFTy82kghoHnYQn",
  "key5": "3ryecgTazPPgyn6oW5WzUodek9nzbnRLcLud3VWFjWDnhtF1ZLgz5bGXnbv9xTt7XAT7xq4RQPkGAKeaCCzYLsxo",
  "key6": "5hA9ZW1N7mPN8nH7yK73QWSJ9vAfGLP63VcUkDFNkKFux41yxnYFHGmEN5asXSeppSvDWbFqrsBV8AYqRS4j2Af7",
  "key7": "5q6271c6KAtB7zJepaDepPx25Fs4zyJcFsXL3FRAbnAgnSvxHoKBD9CXyHmS4YgTgbx69mfW25C37cNcpD2Veva2",
  "key8": "3fibTS32DmKsnFuASMiMUhiSBwn6htGzYue8hTknVsi7R1q3hnktWDwimz4JLEJkD4BL9ZcK5zt3vLSrC7k99qPr",
  "key9": "5DDWUZtCxNGJa9iTDfNCBzh8J5U4SVb8CCui79ZGRKWCnPguhNMMorRPbTBthq9YhJ1FL9dSiHqDxWPHv17Lbvmv",
  "key10": "4NseXSwqQx4J6dgacXuiTfLJPA9o8h3YAqaRdgN8KoPYdFSxkcTVsvsJMmebQDaYDFyagYVuCg1KyZF4HZufUfRv",
  "key11": "32vMofotTgnJRgRPyhYJSHsnpMAciCV9fwvFqi9gsQWRFkpRBDQnrBQKDYqcD2hjZF6SB6V9eMqj9VtiJCCG7he6",
  "key12": "2tF8ByT5citqfqGhQ9ry4uEuPRmwehFLes2Rqdmf1qinsUPVDVfJjG8J33vBdZRFFsd4GzXBwcNzPq3KGgC8d1Tr",
  "key13": "29TRisBP1RpcPExWu8LaQ44E7LyWdf4PJNFRi5hoPzsn2qoopu55XTKns8Z2HkRva2CuULWd3KgQLQa3mH7VQ3Pn",
  "key14": "2SWJMzEtPzp4xy2aWLc8rPSj96u58mLKCTQJbQEDUaw7mXYQFpL2BGbcANRoqkF9Tp3fJJ1VjcyG6BSUq2bmr78S",
  "key15": "4h6RNktRUUKviYSGDQQVWRweoyU77Xox6YZP5Z7pBuagmhMuYBRG4Qr4aKTwwR9EtxHkgVz16P8wCegCBNeGoD99",
  "key16": "2qoMz5UYpL52vJKLLXqSKr1Nj48HjJWkWTu7LZKe8gnpUQtEZhutEBLXcm95VqY1r8TUaSJWE49DNejZdpWtQS6m",
  "key17": "2xUtHGz5jghVo2x2wLzpxVV4eQCsAJ5bPuPmwhcWaNSK8htnSgY7p5fY9gSDqYfHw52Z4qJcFWUKfWMx3iNXQR3b",
  "key18": "5t2vGhTU9khzszSpUybupi3bN6LWQRkqFegfETNqHA5EjxtSS3tuybiooG7C4pPCJQvPQEzwAySkiiXQ71Ldu8VF",
  "key19": "2m2Eue5XyRgr8M883XoJH82dpdHw3Mq3bJreF5m8hhuujAcQ6Jep5piSAz55MKcKsJnAm7Ukzmraj44XX54UR5ZN",
  "key20": "i9VrAKuMqbdggGB5q9JeaqFxVwo3M8jMz8o191pSrVF4yZnovA2zux67kPphQxwzxStsLaPwbvZmqYTyb9Pti9k",
  "key21": "4KAosiKh5NrW8ATdNAyJBawAa5rFD5jtaCKFoJVEynE9CjU4BqEtu2ULUdvJrX1fsgkSQZUqUHX6YTvBYrsUgL8c",
  "key22": "5h1dUBAPyqBGUpxjJTApjWTwEf63gN2yJwi5cSFwPQALyAYfqt7sjo6fF1TSqLFiesZGdFC53yBPZYGxvtSkeHz7",
  "key23": "HBzenoJ8K5HknybVNQWtFFLqsB4qVwFj1FErVwRNSZc65WLjXAhXAFySmWQVMwoET35Ssk4DeXX31E3UYrNmnkM",
  "key24": "5gcAzNWwmeTJNXDFMhdX7NPjjH6gKrBnR1b21cqTfwJrYNx3SQvRe77rAszDBdn9z3FQzjGP8bzT3Y7p4SFjbv2Z",
  "key25": "FgJ7gCY2q3NJTgwpaJekrv85j31Qa3wfhJYFvwgcGEqb2whZpn3oXjo37mhvwLUSJAEyCBWLELE42cD7p69JVVN",
  "key26": "qsknE61DR6Ab6skxN74PdFWm1qXdgTubuycqTakfVnKuYtMbUy3Q1QoaHQfED2ddMXKZizKPwyvafRB4XdknCgY",
  "key27": "UjKGEQmpeVMaXFUbQTJbntkjUYMYfMvxCfSMEUzpSTGuy1H84Fiug6idrMmYFN3WvTXjgZabV257hGeyvF3VL9c",
  "key28": "4ME993ezzR4HLt8ayibm6bRH9yHPdtHnaCBA5FEDGethGtgtVRdE44A1zAiY2ow6DdaVq4UxfWaYXY6BWahiMfGL"
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
