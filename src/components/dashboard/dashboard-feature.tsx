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
    "3Jn3qoYtargwgGhnk9zPqsiXc2JAd4XDAmmbECqrEapTR75aMtS4WvAWrbMR9YPv3QWTi6FcmQNPFJRB6bcuytUU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vVH7oS6GJKkJyJxiriJsPAJcPfronaYfdPnfcwRHs2Qi1MWB3PoKAaoxmR8SNz5dx6onyNp3ciFvTRvt4X9sZsh",
  "key1": "2qYAJSuRXgVLiZSVXdhwkptYjCWYv7MpyBPAWkiWn2MuNd4XQAkAxXaquUXBy61qRy6hF62ut9b8sR5gKJuoHN3",
  "key2": "4fHAK9p218UruZ4dKfoSDSxAfUjBXAiNUYL6rJzCdzDsVTi5QixsSSayxvQMAaJ9Q7MpAWn29N8f7o5AR4dogjhz",
  "key3": "5MCt6ZxEM1qybJn83wwjoWb2U9XaTm4QYLdWY6Fagt5KmUuyQRc6jg4hnGqWry9nyrY4Xo37gfkTSjysfS9PNQtb",
  "key4": "2B4htU4B8UmXTTp7Rk1eiK5WCKnnM7YjhQ9fA5qvmR8ZCYAsbB71FtHqE835pSJYgYeYzSsJVnmjcM48u2derxwF",
  "key5": "3rJWRLCQGrk63H6drtUXRJTZswZ3GZ32fHyvUbQZewqrShMr1CcvoqRdpTLeRToTyYzscMaqM9ed5TvrFyRHxMuz",
  "key6": "4gAphgcceP44rceJ5ixPuBMc4sVCCat7CpSnTVWnmG11yYx7FCoVZTKGCAaTzckpEcBiTqYaXKZKhWaUAGE9ur7n",
  "key7": "5B93wKufbdYUixzndcepzLRqH9aXenMr999r1rb5vLt1P2uK6BncB8JKExZDACAGeS9r55yhTMxvKLxJcrFfKzLp",
  "key8": "2e7fwNHdSvvqmP2ovB6pn6mNmBkW71ZpCkSFW7RkuRiuDmZ8RH9C39cc2cZpF1hHv3p8LGF7skbFeKSDM9EpuGhU",
  "key9": "2rBjZX99xyYBihZWwrSuYufx3krAAsrVMmAzhPxXQFhf4Tezbuh7EcFqUbAq5VYpUwDbqC2k9x3W2sShj1aaScq6",
  "key10": "4mygRL9Msq1HNx3guouFh64aPVKFwFKZKMB225xgtNgyqy53M5t45wgWj9ficsDAD2debTHzDmZro43ngCgn2BgA",
  "key11": "3F4j7Ek5M8yqxy7pHCYDHLJGj9SyJniZZCjp3X51n1XVuj5CB6DDgHr9MWBZrCtegMk7dv1oRkmxRSKnRS98UfZ4",
  "key12": "556vr5iTuDqD2W9tmkkFyochzFUr78fNaSqEooLNPZubgapswMDYKmcfbqBVVEP3zYdkvAH3CNQQCx3iX1QwEoo3",
  "key13": "TM719yjeALWt2Serfi81p1GMdS9RdMXTD5vWVDzNKs5p5eSraQNCr2sUDnTtk4kLf9ordyrwivSMMeZRDpsKSKi",
  "key14": "4WWFgqXVZqD9bbzTTMSYEkbb2tkmX3rJoMRHQ6G34T8FAR7hMfNV7CUdsGgYCquMspbkvKZAzj1dbQ9dS1dJGjqD",
  "key15": "TNTXJMEECaLEmEB7nkET8Ahah7FCD1X2GHkPWBh6wyZ2qopRiwvSoLSV9PK5e4hctgSc7ctgaBu2rPkhhdXcdPN",
  "key16": "2gzfJpoeWrzjt5smpxqvYE17XY8fZNEYddWxo5g5XokfAsJoVuCZfg8kGnvX73cGV6CACJspqCnb8d9Lwx7aFHYa",
  "key17": "5683J5LBj5LNrPijDiLxN5C7dwqTVysg8Du6YNcX1bTKVk1tbNG2tFXvkyveBDRgX16CnpNi5w7TehjM8sytyAG9",
  "key18": "2hFmtW6ALK8ermD4wwDMiMeEBHLJ2rSqzTxTHYGjv4F948jV1sgLSzpCQAeJAPUq8LZQhkHRuT28dZs47p31a33e",
  "key19": "2X7WfAVtoz6buKScYsf86eARS9KcvMEg6ANWpTJEfBtZDSsauCQLnTuo2fRRsdeQAmpAoDtH2gzRnccaxt69KhcA",
  "key20": "4AS7s3vcagfjiwGjr8DZbohvgxQVu56egvmSwit1PppD2dnaBUyHwSsYWuNATbk6aMKLWdZZhEMbZdKS8GmZ9gGN",
  "key21": "4rqNMhqY7Q7onQ42cSQVMAXQLj4a7dSL89ofJsCKoe1u7KbtKE1rbRBRjn9ZUvToEypMf2F2CSXkKkCTkyrv5UjX",
  "key22": "4DKCQrYR8xscDjaFBww8yrSn8jcRnxhDjqAriLPDsWr5ceTBQbYbaddx1K3heC7SUHVCvao9eMoHHs2NzbfVJhd5",
  "key23": "4Q9N6FKepcxiZA5BBnTG2MDDD12TKeKJsyKWab7TZFQjuWmd9ybMrbpoJ6sJ8vv41VdEf4VEQDgSeA1fzqPCF5fR",
  "key24": "p4XvZ4VruvWG2GoB8uRXei517AZG3A8GqpFRnNf4fg1ELDPf1dUS3FZSyvqg8MWQAtuszxzQnHwF8qxPXQjtQTn",
  "key25": "UD2xnf21SuAFAD7BaQwzqE8HD2AmY93bmSWZYDhpd4oXnprkvXXZeXEBKi1V8dxC7FU9DNFR37XRfeSFgpDuh4j",
  "key26": "5SwkvuRQMV9vH8kHcLQe9HZcjf2sLnCcKhijhRuUtF1SB55Km4pQfR6sTYdSQTAyTT6xMhFW3JT34UwdMNveDJ35",
  "key27": "4TsAKMy7wNDzg9xZuPtSNiNPiL1uYpVEZGaXmjV2kpKbc5YuhVALHspoRJ4Y8vw5bvX8XNKMvvGB78NfT9PM8tyd",
  "key28": "366WBdyGWnmzrHPSxGrmTGBDaC9wSyLVQgCbsxvVzfan7pinXGAfJ2PHwfdc2HH1tMtF2rEsD5YmwJ3rgDvY6BrS",
  "key29": "41Hm8TwkVHzhwY4qkYDcBcdECYbFK3MSABqpGnZePQKFs45PBUofuMmdYxUrxnU8opUugKVpdvpUCfxyzzcSbgsA",
  "key30": "4DDDUEZHxwS4nU3Waciwpt8sQmNGeS36mKetWEkfJRXf7F9QvQtNQdQ9sQEjyV9ni7sZATnooVb8uEGmVPpap6Sr",
  "key31": "j5Yz53QFwScDPz37XqEXA78LhtnbjNfeCug84PE5bxD9avGb98SeAm27fQzjvCZxuwujezhPG6oQ5iLVgaJMbNN",
  "key32": "3TkwxY9PeEsam8YYtgaRWhmXwbfhFGERHqQb2ZfiQkiZUxZzVofpompZAmu6okY26US9NbgK2GaiGtyrjy1AFitF",
  "key33": "3RLgrKnr2Ry1pHHYsw9XTLuKX1nLj5Y1Vkq6TTzEC8h71kqSnqRAB3GRJhyQfM2BwoFwBY3ckVKUcfc6Z9HLFiLb",
  "key34": "yYpFpM2dqvnJLW1vFEtgFruTXSsqoGcB4GYvcEq5SGnD1ykfYvFpWff3PFtZ1GvizBV7RDHKFybBNJQGM8ViiUz",
  "key35": "3aLLAfQ1JcUfd1FLq71V2n3nK83LjUSzkUZXayoK44gPoLFfj8vWPMSatYa2KbDczzt86QM11VYRjYbcEJSH5caJ",
  "key36": "3SDoBbeVqKbRBFQAkfMyUPZ8fegfbQN3bdRzRZrvWE9Ba7ZSiWXSKRigapGSgmjYLreKQDDxPR3CGvwEbAnraXM3",
  "key37": "28SMVRBx6NjcRkwzZSfdcpH2quqKaatxVvyYgcdB94HoQjL67CJ3dpW3f7fkAi3CXgtzwCNwbB89tKWdZQN4SLjV",
  "key38": "AbYQ4L9nuDA3fG5puZBWTijqqW2921ZkfEifpZPRQTNY87NHDijDQWAF38vJ8tE766qvrwtjuLTCbxDkMtr7w6U",
  "key39": "3wADQFwqrjEPVtc297XnEWApRJ4v7fPifbx3GPSPktgiLoic25cvVu36DG5ohPEPpHqkjZB6eBxA7qxeh6KBPBDs",
  "key40": "2eiU6MFfxHt7GWsLfuiPvxrBzTiEwXfP6E3EBYi5ZXM4kv7MV1dYgixfNzw2h8Kpzhtg7qcitALNfAjw96JzbzKD",
  "key41": "4TKt99mhCdXfZ5NeQ7eKeM4vpjp8JBpFqriJU72YzyTfsxuFDWXKTt7FFFBmpE1VU2T2judPsqbWwzMSVQJscDUw",
  "key42": "mnQqpnHHMBWhzkxyX1SnUYHq3ZRZduSeB6vMm9EbgFx9DqUfLDVwTeT36HWkaaX7wWreFd5GtNmSbvkQB99Svcd",
  "key43": "2xURzNoz4W6nKXjaAs4hBLe4EWha2YA1iCYBc7vK6C4qYFJbo1TaKfYMMNX8Z9F6DEmXn1hMa5MEoCwX5NUZmRhG"
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
