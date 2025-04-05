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
    "5TEYNZxLLrMC4uaJGABzF34XATrA66fh2ptzg5Qfb7nKJZk1ChW8JTxtQh3wnbXdFp5cPU3ypmQRxLoG12xyuD4P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ts6qrYAV5Ff47ou8rwXWNSRxfwFepmzL6MHFRoTsVcPybibRMQQRYizGGPLqDN91pLBGa7YFXXGQM4X5hJyAHPS",
  "key1": "54cHXb7RF5v91CLMxHicUnTACLjFxEpEGWKAHmZMKkPpqN9UrMGWPqnZJMeNrziREdo265sck7u2SQJANrSLyQ3x",
  "key2": "5rZFtUVZ6AGuvUWEwLimQQTVALXVZJbDVhaumKNQU5TdoxnArvV7sVnu1vcs1SNnpW861FokFbjCoxeiddz4iT4Q",
  "key3": "2ZrWHzpQZcngfANCZdMB91nzrf6Y39Yu4fjMZPspDDB2m6ULh6mtB58bMeHXP4hF63UjAVXbWxh1ynve93sveM2k",
  "key4": "Xb6ioVNBzpi882qzLpcAvT3JuTXgdSmzWtXHwNRnzbNYjHT1nxz3TUSPLJ85YAfUo2m5bUSSMq9fCyHP2Sab8A4",
  "key5": "5zQk1L1iWBJgLGUML9VCbK2EfRFSoqWYfZcLxB5zzDKb5XH1kopSLpSjvWrJGmMx3q7mxJpyHTewWQutjZiQbmrB",
  "key6": "2DMxwHWEeBaEdvedzu7Hkbe1r9yA9ykURvm57f6Y6oH1BqNtxigsRE7S6UfZTjz4G3k4oAgGVdr3tRFsnQpeVoJV",
  "key7": "2NNF4Z4amriKS82G7FmqZvaw7oDn9JVHd5fyZFMeoUYDX1a5RLvqDkQyxPo1Rd9kqrzmdBXmiRYoYhcDMw8mhGa7",
  "key8": "35M4U7KsYzrvSfTuRuGkSaMmmFeR4MvwfLqmwUKKBpxokGmkxMJprXo4vKM2NnzyK44ybnWrvA8DiRZcM9N3j9ss",
  "key9": "4pRgdFm6q8JGd5Ric88yBNK358p51bWorNReBZdHwfCajFg9PimHq8jZVkavfCjz8NbxfZqd3UEujkU35XeDf594",
  "key10": "5d2LsFZgzibdPHjWZUUUqFxsxD9fJyjJTxvWvFWNdVyPuyZSnyws39GQuFwepYeUADEAFaXdDvhEtijfT6Lgb2zs",
  "key11": "4oVwB2vYmTu6VqX6HGZmLpvt1feGDVjFBtZVJ7rN5zZw6sPYjqbqkc62J8b92SXtYom6srPFTe2nzZbmQVLsTVde",
  "key12": "2iKGDbVJ6FSygfqm49CgdMqQHxdoVnQ5i6F8SqJDH5KsN3AwNo7RP34wqyqsJ8J7wDrbAFCi3jJKF8nAS23jo1Wa",
  "key13": "5hA1WpNoiw1BBfuGhnrpp3RpuCMULEt9HSCKqBoeSvhhgsp2TNKeaivGqjEwfKqZMimVvkSbPyNzv5AxcbTa6Z29",
  "key14": "4YNyzuzk9qjqtFRRy1tmSMytkccA8Q71QcThGLE2q56YY18LzhCQJTEqooD8NHm5iQB5pMe7wwPDmAUr6ED81iQt",
  "key15": "52P4MmkK2i4RiLEnMA4LH8JWZSo2VYJgtNRsAwpiA8KQM2FWoggUpowGxhF18uTCzuxPPqgC1yvM7HRPEfoZRvhN",
  "key16": "468cdW6pxNYVjezhzMffYtpj6ewsPJEGUUDSoYsNVwSwfnXTGWJihmYZcSyybckwF4sase8L6zD1jqtUVFTmqMHc",
  "key17": "3Ts6kTNhXEYYoGZAL7R9NXf6vEU2btubTw8Gh4U4AksU82jSEucPS86SjFBpYuzjsgNRNrKgjn2cdYMxDBzaAaVq",
  "key18": "3gFa9SMeRS58X2fJSwzKfJAdCpGw22r1HcfQP5kEWtJfv5R9ZkAjdyfidrk6D3d5j3UgRM6NNreqeTXihATBXXQe",
  "key19": "3q61mgnwTN9wABuiLrVE9zgZGJbxvF7UD2coriTxKF5Q5FxX3R51u1TfYAHgDsoA8cmaYTU8bx9WRuEm6sMm5agR",
  "key20": "243SKj2GywbztJfSUE12oMi84jqqrJqSBzD2u3GX9QrCvyDDJ3DL6FeVPtJM9p51nguqb8RANGmxzTyAEeG8vKpD",
  "key21": "2vWtYyE47sYR1kr9cjH36TsEw8Fa2d4kaQpXGuvZ3XUkYhZhCkTn24UiY2UHHvaPzw6EbUFCFkytxnyHahJX7F3t",
  "key22": "2HVE2DDGwq4Uf98y6oip95AQ9xPmz1SZhLAgAuvAH74cRWw4byJrqwGCa5jaAqJZ4JLF5sDWSdu7sf6ecnoCZx5w",
  "key23": "2yv6p2a2xUHRr2GSEPXF6Pu36JLcGddkRHV89wsMxypLzJBoKQbebinA1AbPQaLvFtCx5viriJRjMxmvCqYWyEnN",
  "key24": "cSRR24ttEcrKdL66RLVLty4sfvoz6DejfdKVt4pv5HN3a2HH3sCcGstfHucwAjib8DBfoBVWPyvvUxQtcTKRhHh",
  "key25": "2u24kKifT91aVjDSa1avwMoxeHYt9ZUtaqCCExE98Pq6EL2zUZ7tGkAGfsR3HP8BG41TiLnW1JcA1NgETfRGwMNt",
  "key26": "3x6ohaK3ZrZnVa3xqoUNs6FShBAWkhKAinmjnE2zY6H19X9BKj6md72QPZHGDF3jTvRXUVnk92czH7je6LLqa3YM",
  "key27": "5MrYHH93GNhQK4k9yVkQbx37BkyxWKkTCsijetPZBajNKD1zn2DgBMW55EQgxqvdFuejep3vB2R9ntA5zCjrNEQ6",
  "key28": "2Ti3o9UvxDLK65MsLh76HKFshxN7JbSBynAG3xU64jStBYXinyW5SBkxZZzyHeXFAb2rDNLgFSjgrMPxeA9wJJUd",
  "key29": "2DbHtrqd8dR4Nk88w5j4oCxSWfqCo4Tdnmx1FP8VZj4qBXuwEin1EQjVpAm4UNRsUfTcC1Q5ooqpmbhUUc3yzXt6",
  "key30": "Z46N5g8SeCBHB7FBni4ZvREhpNyo9oSFujEogKoqv6EjFjnJovvNm29r87aZnNz7wwsMsq6V5rf1UV9QzrR89Lr",
  "key31": "5gRtkfrtgLBpcbkdmYziCRFVCdpbRtrPw4kPb1JmEVifasC5W5FdeJgDRJybwx7cChSTc6StKjCxcaP6LDMDDVwf"
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
