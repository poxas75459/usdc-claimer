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
    "4yPyZNJr2tx1qhGH6aGgPrz3UhmHaVtXMPWUBLv1CsjEVG1yk51WULyzq21kPJQHvgdoZspJzqi5xZsVoGSvHLQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2hvdAqb1Tyk21d9Y6ofi3QHvGrVHUGbyJxJyKqmGfjHLdLY7TCWecn6AWLJpyfqX5rEFdBHNkr4M3a5ZPfx84wUe",
  "key1": "4tQcEPCWBrjbWZ6sMgyrkP3Vxi4xKrqBsB6Yf5R9Hn6sEEiuTMyooRpNHRjq65C6KK9MPEPCudHFkFLNyXFhHixc",
  "key2": "2KBwLD7XeQVaHQbjFY922HJpyCQA7tGPCv3dDM2wT1mTgJcbwyZkG9N2QYXF7p2HojnPsU8hejNFkCihJEDdmrAS",
  "key3": "4sqwJXbPPG6jZX5Csn2VxHyk8JxpNC9wxF9Y1Wme5oVy1K1JAUgWwtHzNknQ439euDtdTNLVt76iiEkuYygcQdj5",
  "key4": "5wcA96Zf4wN1K5H5b8mvzBUVCg3fHhsyJPGKchtzSdwfx4nXt2YY1eMneBmzBUibB3sAnArcLDFxjG8DhVLUfJAd",
  "key5": "2J9VQ3oXHn9MxwENGJTvrYFvJsJYK7omD8NqUWfyRsGqv7i4WForEvFsEUUPCVZkwov2zBbsdF2ptcumc1AGxupb",
  "key6": "4tBj5AYHdTtdRyLKxskUwN2QLEUPqCmKZG3mg44J14BoBm7MnrR48RafhAg1zzRq2n82njgUmWwy3ARzwcNgWb95",
  "key7": "sD7euAKdRWX54o6CgPgufRTuS6F7uhgVz2zK6KvWiF58pH1ZsuE1u4pYHVMCcRr4mqb4z4k5Z9siyRmtz2af2qC",
  "key8": "5hyuugpsNY5tqWvdQdSioi6UbNoXUokJo7WtwBwxSRWRxUCsaBJcUpf2P4Q8qmuSyoN36V2bHUgXpnwVfZzebp1m",
  "key9": "4DG35QgEFX1jTLTh4PzyJVAhmaXABJLwMy7LKPf9VuGGQBbnFJJ8io6g9HQzsDUAZKSLmrGJdcL3DywVA3gnUrRh",
  "key10": "5eHwMfyzgAy4U6fECVE49WJNMMuqCekhruPw96wQicdHRkyPs2xL3EuKA1rhDHK4amZPwH387ELjqkrA6FkGrQsP",
  "key11": "4awpAWGzrfnfaMw2De41BQHeF6Lj2QTrtABtByMsGfWUfCGJWJV5RuZdeNByaZ4Z1KeXJweu1CcAvNSwZQfzaBNn",
  "key12": "34XHQ8H6DZH2aHvXLhxYTGRvxU9M9qQn99cu3dVfaSZtRwDM6gKX68j3eEbwGnQRKpGFafs3gFoGn2tK7EZc3ase",
  "key13": "46zJdyUosSYhHCr8UrWjqYmCEDiJX7DHyT12FCSduqMQS97oP5NhcMqZWszngvC4S1Qix5JGuSjabmMtYR1zwLey",
  "key14": "Ab9svCuXU7BPcjCPxnb2KG6AMYz8GVmN1HEnahXMFr1wSuB1onm3RDQSrbaxYVMEVDo3hJihTH2vJBbty5DWXoN",
  "key15": "2wM37z9pFQb9tGMu5NQVpCcwxMu1S948e3rEarDAPM4KsCSBnDS6Q8SE8AN1ixbsFC2j43AT8vrpAiH1Rx2Eotmj",
  "key16": "64yfrN8F13zq8z3DT8QbVPAKP4zF7PmLokteM8NoxX4moLPpTzpP4z89kWJGTSYG4WFkvQ2U5NUdnvvMTq3dxisN",
  "key17": "5j16T57eNwJDCpK5mvUN9z7ppVrGAN9ReEKPFtaTY3zE4pZkLf2bhWYGjYsdkFxwkgVm3B1oSK16qnL7MrD5u1Zg",
  "key18": "WYCScxLJuYoH6j2xyrQ5w8WhBU7dyPa2WLSwWGsJxu4SEEvwsgpJ2weD9K743iWYFdikYy78inj9J4eu4coVM18",
  "key19": "3XfLqn1Eosy4psJBquPVp5Eud85hfctDUBZAgngU1zsmZKs8t9NDq2mk9W9aLJu4oQMRQjahxpyShSgQknBkGaZn",
  "key20": "GbnkQijqdvfYHdznUnFYos1eRcuCH9t7xXL9U1qV6pJqZ8qnZG1hLa57DbbZyFcMUztaxdStzAaJKEH2w2APJCz",
  "key21": "5B5WLbVKYsU551ieNofWs46jB5NXSJhVpnTkpTL2vwPrRXG53mwqpqvKCRMyK1y3Q7tCdq2jRq3EznZzbdRaT68d",
  "key22": "2TDu8hLtCqdtFpBMNMfubi9KYeuACL48Y3N9W522u8UJZAcNmGYyeVwwpv684vjfrHJmrT7DDNT5zSLHMGXRzWWH",
  "key23": "4hGbihACLk5Kv3QaKGn7j1Bv4qpRi9JxwGJaKEhSZ4jbxnCnij4tevSEKCqTT3f1vnruM54vK9F7b7fqa3RaRn3T",
  "key24": "254ofwQtBG7MhoeMS74g3L7DbP4W5MBMoVVSUtBEBG3XnYDg5aE5QS6brHXDQ37YpNMSj1SFZh1rxWCVfinNCoKc",
  "key25": "48U3NYCPTH1NrJLd5Hje3242jhihwZwZ1CZ63az7VppfxjP3LB2U4yiJc2mmjQNoDK1987APbKRiTKVA7aS19L4C",
  "key26": "5eYZuej351AgdSL89qeAZjZNyi1UrChM8bQGDykeDZviaDbSwfLz1XYanxbJY6FYWCFAt84mFU9cLHWuNQEPCRje",
  "key27": "38xHs5ZSmzftuxLBfMubr25rhUiJrWvQXZMuJnh1G7obj4GoQiNZ7P8J5X35k8G913a7ybmmjUzS3Ptv9ELS5Y9v",
  "key28": "b4Ut3XE4mHMCdXunsicHyBGCzVsB9q1NZZaVPiPac3GTCyzmdSbnyTerRrrkP9U5WonP9b6uaQ6FDnt1XPavqd2",
  "key29": "4URnUY2pKLijrJ6VSwoafcn19ftHjZNd64jC7rfiKcTfPgjzQXfe5naAbyk75zqTeuaWJpNFWNh2hRU6aX7GJgnp"
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
