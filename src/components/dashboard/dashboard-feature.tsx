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
    "pznffgXDjxQ6kyFqJvpVaaDMvAtYNC4dyb8RpkGQwDPEckHk4BVB4uEbY2GkssZpeypL8Yrj8p9QZH5SSrRAqTK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2sSgMgSi6eYh3DgdgfAJ3jH6uSz28sRQnWMWUdzWd269bTHXzcUqrr5PT2uJjqSj4Koybma7u5rJwycfHoNSgPR1",
  "key1": "3DwmTU2ENkqerMWah8goXSUyu4969S8itGrwTBUxQCJHP8gxVysCeKgp6aHemZE1a7uo9ZTHQUhomDBwBEJEeJQM",
  "key2": "4GYJHaiu7sUZ4BtXMgnnJcaqP1BZNRSHxRQNNSpbcoWuwexvhNwUzJjrfv75bjU2AWM9RBd13P6BoVzvc74YQ8T1",
  "key3": "yDYe5RhMPMQRc3CQPpzkkTfuyYoJKtNrKCLMjC2yYB76JJm8rDiZqZuQnbkvTHxvagFEUzRUgewcV5PB4uhzPAs",
  "key4": "3kf4XFFRhDTRHfuB7FiK9QjkstZyRWJHRRFT2XSDPKAjEPLWF1PVnC7njq1BsuVmqPQJGo4c2FPhxSH5cj8r2BQF",
  "key5": "5wbUJmzJZoYSbTqArXnCU6VgctDvWsYy65Zemzx2PiTKduzik4XX7pbdMD38mcRjKP6gVWguAhEYEpuGoSgyS3gu",
  "key6": "3Akk5thehDdVWgE7yesdMWXyn4X61QYWSj73tiTxgKaA5koAjdhGziJh9sFtwpcfiHDWMrQ4ACyFUcijBCrwyCLg",
  "key7": "2Eso3sc4oWnxnuCxSaLumiPQ7Sy8jp4AYdYt4d8VAEzaJsmWGVXDNZpUVpH4ctg7qXwczsBXEKnBmLESp9oDC36K",
  "key8": "3WGDa1vTtAxZLim9QAzgaBsV1ubdL3nP7nHZBRbPqwPrs7B8eFyGJx4F5s1BuZ1iHEY6JWgW5rgcZbHyyhRVBtZh",
  "key9": "4LySGi8ckqNw3dqEDU1Z1nhcANsaTqj7do74QJeamsXQj9JRM1R15bu9zdGtND36uPzTHaMbxrbh5x52Ty737Lgs",
  "key10": "2wC3j8MVWBz1X63VC2KeiLdjUxC46XuN3VDW3qAhp1YVrmsBpjNsdt4au9WLUbcrqEELTrEF167uLTY1tAqFr4KJ",
  "key11": "34Qd17hnh4RneMK3aHrB2AFXL6YEJNFa7dzS2BJ1UbmG9J5VpXDeVnun2cSePYufsvAKF3rzcnokNNwR8EnEqU4g",
  "key12": "3sENtmG4J1ssb5JMZpUQqpLpjMtUP7oAXH55yrgj2WNMnp7ZrBHv7zkKfBKaLtVHfUyMKMSQQL5de8aGcsFfpkBj",
  "key13": "3Vi6k5aBgUxatgojFBk5ZdBCUjMbarNu5cFcuWUV8GSsaSyHqyK48RYGfMWDR9tBBAhKxTdcoU21xEGxsKQEDKeX",
  "key14": "2wYbik2wnp57fm7P12rzFagrqgm7qfqxXoqEmctEn8S2Gbe4hMvfsGHH6zoPt42YCtsUWwxGAvzfgkthsh8MJrhX",
  "key15": "qAqmJvHXRhFsApLgmm9TRDHkrCKs8b7sJzd7cw3mCTtmQyjykM3L1wLqkYG8HV6rSYS5p9QSyocmT4HStSP6Jgm",
  "key16": "27g7hNv1DXcAZTfwg8spDPrtdF2QnLZtjqwD1wV4y4gxj7FERtVmqF4UcnbHpTf2gFQM6bhrQpskmxLBVcZAGvuh",
  "key17": "4RQEsSxXAvmSveBKXFMjmfWqsMRqfyzceitmx2zQ4ijTuuc4PJi3NMYTvGLZoQRfLB15fHdF3cjay6ALDMHnuTZ4",
  "key18": "5kAMCHXuun4aHynXCokarXSBUm3xBXxK3Mae5QCvGkAu7UJR4T8zzDDcK2mADXofPv5G6dXvNbcHPGRgdapejzzp",
  "key19": "62LhhpK2wgSSxZsqf1QfyLwRP8KvcuKoJseERqg7xj644XDwrXCoqRJNKJUNZ4Rwkh77BW43BNE8AZgokYxRLMqS",
  "key20": "2JViJmxpmvLJ2GwAouHDE5pYHoKxrRBDdFRHFw8wCnXbWUgUuh5taeo1uEZ4qg5m8x8nt35DonrRn7h5BvWNfSM5",
  "key21": "5QkxVntq9nCtKC6c9jiWuxuwcSoMMR6Hd72EAWFbMvTAEaHdz7mVy39nbgYfQGPiBvaen5bScP2GLedqmWYfC19v",
  "key22": "YBvDpfiNhv2qVGPvytwM5SbFMnxL6fwMqFzWHnVgd8qLzsgia3tkhJkJkKXR3Pwd3U92dmokh1tSpX1wPfDyNoq",
  "key23": "5iLGnHfwVW7SanTznR8xG3r3thNwMdebW5mP6joumUeCpMV7QCYGwuny5bAarQav63cBmRf1kHeenvkVUbnTqBtd",
  "key24": "565jvjSJNqQiqbemnjhznHo3m6Ji9yFdinJCTGxn7C72wrnb3rzFoHbhunPEhc6ZFaZgu2NsDRQR5ZBBYEC5Dsiy",
  "key25": "oZ3xQBAwyqNEHuadNLESF5F4TxyftXTicKmtfi4UPqQpqPRrt2uSgY3aaW88Y6XaHG9jHrsYCJBHpFtRdSgdUJo",
  "key26": "5GEQUvz56s14h93oDu68DLtWrdwXAQe8riCXxysxQfu3YNbEFNYF3fmb5cMp2Q5NUPvCa7ba8niYLjDncsx1WhTg",
  "key27": "5dxw2HmzFFQwvHK2GVKpT5KJqC9JHrWtVkVMQDg8aRU9gYxqEYCVoUtW6VYfAtZ4KefEhfXd1jeRVarhsV59Wb3Y",
  "key28": "iENQnbjtJDTQCC81h9Cr1fPD5ik68XFYpT2wZUNyrjLMsuLgmUypjfZknbS2Q5to2iDJCoMuRKgE7k9RrEh6ghT",
  "key29": "4mwPDR4XgcKxHkoKm9EtKfXPwqWd9denrJxzKQz5MGJZE2ukxt4n5bT5ff3WP2mC1YTe41ToC5siYR5QuLooX6CY",
  "key30": "577xdhQvE6aUMSoX2pU5mhggQWz2K2GRGMfQPw72HEtHMHvXnz59P7Ka48AyAeTH7AJPVTXgMrTch4BzDwLi1bfR"
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
