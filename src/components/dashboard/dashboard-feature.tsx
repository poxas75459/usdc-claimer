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
    "4hJKk8sD3oLxooZdHwenr3DBsKN23dyL4MQ5ECbDjKyChbFaktH9rjfMM66HsFN6XQVoptGwhvZ2Hez1sRMuv3g1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A1HQDNvwwpwn1AHohWXvtfb8eT3MuG4WEynuV3FEvweRkKprrZVgRBX96ULYfmV5EHynZhUprwG7fbCz9rvwY9P",
  "key1": "3vJw7qd1zeJ2j7rNEKGJS7Sm4CurVFZcbiw7jfFytQsekwQftjN43LApX1za4P2z6vMuC7xTf7yqr11C3bed4kvU",
  "key2": "4wjuagLEsSVToNoWXqRwiKUV1kPUP66718mhSuxrNESKxoANRyQ5cGJPoST8iCDFtQoqfvRs4oQXLwy8JKpJGdEL",
  "key3": "z7Et8eaU7QM6qBR83FcvVkEVrxjsLnGuPB2ETK1Q4kwACq8dQRHEHtQAjyshroechUfBDkLcDn1DurdC6Ckd8H1",
  "key4": "2ELUv2aDgVBYMM171SezecXx1boyMKdmRKbFZbWTsc9u62tQWkx71x1RrKTZ817MBMd8Jez3cMDCjkxXnyJvrHx5",
  "key5": "4dZj8jHSbjyda1Cym4umvZDf76khGUywgKX8q9Nt54nkrD5FvLXqwMfMYteXm1tBLemGstMEhN3C5MnDPvNfc6VL",
  "key6": "b1MJFsaJUBhicRgSBgsC6Hc4x8NfuH4TyPvswk2nYC2yqVHbj3SkpGAAyuDngw7jkLVwoPk4xXwEpYvSWsUaAuq",
  "key7": "4ZdVV3FSeQmqoPVgpEFj3cv7nEL54MuVtcK9VSY4cD5meKh7DZgDgNSqVrSgLmEJe4TMJppMUMomQR1uGWvGF1PQ",
  "key8": "2kGMGwvVuZ29qaFi5wEXKhaADrcurH9cvYWcXDGdLvtRH9xQ4A7AKcRYRxxPG4rotNycfPDeeZZ4RuTaMkDqUiis",
  "key9": "2HZPo4XcRfniGQXcKFEZX29anxNGuK14mQtS9RaEt3V5Kx7LXQJuGEdMyJvJYXVbZzLtvzWB8TZkXZtrMJydXoQx",
  "key10": "5fw3Msm81igJ6pmgCd9iNEGMFyNYJAvRL2pzPzda1XyxMoAw4vsSGvPwNDfuRGCJgffNRmfDri1DbTanABJicnLe",
  "key11": "2G55kjbc2BX2paGyFi4xmss13ZWggKTqmDKWvdSUQUtVJgfeW9i5ErYVtNLahS1TPPDpWc4rUuU85ZmvwvWSnRdR",
  "key12": "ZWvBVF63E1sk2Rp1t8BrGUp7CMe2VgDF7vvw3NYDE3E7MZcqhk71wW94969qtbvjciRVH2MaUFcrLNyDJ66NL58",
  "key13": "2xJPftfj9AbGX4Y2TovtimfmtuNpM9dsG5Hpnnbdk2kPPtNTPBTa5q2yAJLqjM7fGXxKxBpy1odEJUi2zCVNWQRx",
  "key14": "4vFWA7mZLkChWWJoxXtPhP8bJrc35A2wLPGxxWsYv8JZi9SHGXXhoTTmfYFVEeB78Pi85axEZtmN5MnqCxQSKMrt",
  "key15": "2gtyrQutDWkmqnBfHKUYb2jDAPYFGJ3RmV8Hu9SLDcc7MdDCCpeuybdpryNUL8bZYHDNvxGM5YC12nBjccS6nm8N",
  "key16": "62uuvB4XK3v1uLpgEsbzhobr38rFNf7W4pQdUFkzFFLkmrmdz7w3wPm4n7U17jLN75E9nW9tdXyERZD5imYKd8HV",
  "key17": "4JvzK9t5gzZKFraqV9wnAzvNDx7RPmEtvZL9KW5C3GLJ9q1z7dLhuqzmKTuGL4YQp4oYAp1a6nSjoVKvJfrm3Wqz",
  "key18": "3a1PVE3JurEbGCBTWtk9qsfV7HebCxZ75k4SWuRirpKFq2GUVb8vXT1ZYGCx4riL667EipNr1eidMES7gs2Fonb1",
  "key19": "4sUg1BcXjYUAGqeumuMxAatCVSyo1do1hKiXyAYusKfAcjjqEaJBRuM4YwP7TebEsgsR3wzySfL6YshXr9Lsr1ME",
  "key20": "2Yr7F93npzAmJ7pQ2mBjZhjXyU5njc5z8ejVSTepBVvFMZazsHScmH4FLnSjo58Y6kWz235KRXvDVQ8VShR4ecEb",
  "key21": "2oVBs6GnmYPJ8GTZDGfqRrBFSfnDLpx8CFcZ4QBp8D77bqc7HAjdNCDoJ2njsaRGx25L9HBLFfji5ahcR3MEvw3F",
  "key22": "bfjrS7HaXjVkKRGPZoo3SSgXEe13hoCUTehajCrzBNBdqo3XfRMAXs7ouJt1hxJwRwzzzfnAF1UXLerrtuysNAE",
  "key23": "5t3SLw6f9vZEWsahwwx13ahvwK2hWWh17M5hejroonFTkqZ7hYvHEiwP2jNhgTRRjbid1T6ngNCuFaypf8ppY6jq",
  "key24": "5GScY9u4HC2owgv9CfS7EJdLZyM5qt1d5eTNFdS7eL8iUwwDixJpEG3JcgqTRkmD54cB8d4xXTKgMDmr5q9RLS5G",
  "key25": "5SVAixyAm8E1VoTQLjutifZ1Lyr5YacdQdqpKyfVLnyzkCD4ryZcqr1ukyG39SPfRn3DJ7MDMP1LBsnB7TTU7bjr",
  "key26": "3nHJ6ZHHsG8nRC8bJirwYA7HSW9Hf56Ryows14QMCvV2ndx1U8xpfeWfd1ym1Fo1GUzoYLG57vGwzbNjzFYZMEoC",
  "key27": "4NZfA1J55QcWo9xgvFNqFm9ixDBdq2Q2kxjwNnSeG2tRn6zzipghFxLGbFZcQppiugKcsoj9GpEyNnoXQ7x53wnG",
  "key28": "2h6uMn315H1YY4JVjgugQHWTCyocfsZcBbMKuuQ1KZJ61XvhsdCRSju9CL6LwTaAjvG5GxfeL4UnmxXRso5b6R5d",
  "key29": "4md6AhawP6uUA7L6RFiHG4RA4BL2G5gGrx4d5eQaeL4yP3kgfso955pnwauTNCsnMHdmcr3dywvzPHtGfBWSH4Bw",
  "key30": "4wKmKcdhC8qoitSaChiVWLVtMH6e6S44WUhDECiXFzjgjEfv54VTQBAr3RtHkcK9yiFzD24G1FUYw2uXxPwNGzXq",
  "key31": "5GS92VVEb97pu1UYZX89JR8E3mYFqm7JTNmG6yLYYfBJrUribFHTo1JyV3hncDb2dMpSwoHCUPrZgYrEXCPNuWAk",
  "key32": "4FQ68WeKy21KX6JkgCHyCboV1eFZm3rV4XVJrhXssePRT1edcFy2VsfU8uhG6ob2xiSmBtY1mNy5Nt4bTY3P1pv9",
  "key33": "2mg9ziLhksjinjXTiRjYrVV7AeJs2o6GvHJqU15ikNmR5mbTEJTBUpmzbRn99MCiW1ZmVt53xunSqf4f5L7dXEia"
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
