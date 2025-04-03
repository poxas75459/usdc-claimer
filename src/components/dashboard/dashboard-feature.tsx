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
    "4YFbgj4RBmUrqXN2ZF9SV8sJQYp8kqzUYvcP5cLsY6KtueptNAa3H4ZWMYDMAQuUoqUSUCXjzMdSzqJqGLeMrLZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZGdraYRzpZZmnajsMf4ucmbzpSfiz9DbZ9Z93o574sPy4aNncuHuDDWD96gyrc5R7FVVFJahBMMUrP2EiVWRR16",
  "key1": "Q1CG5Z14EMVfd1UpeCeoUj3JBwbCiZSpVQMivFk2duxs5epjPKLGf6NQ5pZ9CisWDMw7jyYoVUGc1meq95x2wfX",
  "key2": "4Fij7fBEEAcgvaienMXMh2a64K5KCtMToBPe3DdpoURLMCWeZa47Xq8Siu1VB3kkffJz1GecVjGcPcjqLLoLTDGM",
  "key3": "4cLV62FJMvK6sTLnsaKwuLbb88k3HsezzcaJ2Xu5RZeM3z6pocRzHXpoBKPa8iDXChM3Psot9BEJQvVRLCyxonsV",
  "key4": "5DLj123Bq2ezduFc1xa5oDFJh5EaWdgU4tqzNxX4uT4fQ8je5vT62jxDAJHCxXhM721CTdyixMx4RccYxMHezxtJ",
  "key5": "UUMGfTCuVWiNtVVhp3WVNfpExc4aCMu5SUoY5j4FoaqUGiPxKHVRyxhaEf9AUgSdQW2Nn2hq1cnsefvKKwn7SMY",
  "key6": "21taFPqdQpSsECQtzuefeCsnmf38ZGTRyRBNJ4kaWPpq92QC56GXPf55B5VqmAFcccFuRXnhejmsmVxVsizrVqeJ",
  "key7": "4BeqjJ1Z4RkKNYWvUQ1ey2tBW6AhiaCeRiWzBrupaJdJbKcKcDtRdAF91hqxRUiz8WoxVgenj7tXXcUhDgw2eT27",
  "key8": "2TK2WA9dYwArg2fqmNeojA5pCtCcVRqE8YsNzrUy2ZEnEauCuYFtrR3era3ZJr2HuAHZTuCyQM2bhG4SAaQXeCHD",
  "key9": "3cdG2H4rWpEaEoRJ2shvTEPAmFWDfSXTaBcGZuMvcD6MmzeUyEmYqmDRewNihbWCuJXmDQKQ5MeAdojDEhnS8Y2r",
  "key10": "3e1xvgxhMPCXfuprwz9JAYpFTbvVwbN2R9FVMHYFxzAxUqHkHp6esz2o8W5ty3o9nVXrdZNJwaXyWRFgoSCPzpfa",
  "key11": "5YtxFx25ULSq9PGEA2QoMyLVRqZty9jY9GCiC9Bzwaf71gyvBYwQGPe8Ff929U6ndo2AY6CS3G8PVWdYzgXLRZ6V",
  "key12": "XuQB2PT2QWKCoHY1qkQ4tgpbr5b8GDteA4rF4r56Z9PrBpPTTfFd9sBstxNmVm4VcyUuHLigqjQwVXDzcbdH3f3",
  "key13": "5NqTXNRhPKQjavjX8DD16MdNu8Sxgy4nGe8idKxqZJ7x31XeM8enpLmHVsoA2TFyPzuRnJnUFmpTE24B9YTe2d7X",
  "key14": "27N74wcRELTEfgy2Jjv8VNNzMKgrkPjh4PsCBruwrSNWWpspb1PoxKsABquUThRG9BXsmqBe8pMbdDctkfV5DbtF",
  "key15": "4hYTaDUyXhrQnDHagHURLoK4awv3KtrZ3NdHKdWhrrB4HmHJkBe9C63F6hyjbGLcrsgFVcp9vsVyn9sDaV7XH6kT",
  "key16": "2ZsQtwSnyEU1f4rvh9XpeCwE7WrBS8yKmRxfYaqge7Vf9VQLTiEbY2YVqKcDqnN5RKcNkpEHak9geAuxA9boy338",
  "key17": "4tZCKyo93j4KnjFwuKRfS6TYbuAYy8Mu2j394jk6FJmSEeb1JWnbXRq7NTS6dH4fZgbYavnXwanw47ujLiuEfohd",
  "key18": "3B6odxbNFxwsVkoEm8MqKJmndVfG8DJDoPiSDdxv2P3DVTpRBhwXkZwQGzYagoy47ZjrjNe3Not9QGDfiUhJJmaT",
  "key19": "27uUUVPGNy2SV69P8JCSM1a8wKro7KX8ofu8ikdYf1LUEVvKnNPUE8d5SAPXGhc27twt3ua1tCn3ty1AmpbEFj3T",
  "key20": "3opYFtZKAaFsYVRGVfyjoPYjq9PsMNbFGVfj9BpBJUkdB86XzWweYuFbxLSp2U9CpmmaeLmAXsBxYbLv7rxsdJ2m",
  "key21": "4rP8e2eWhzytJ6yK2H8J6LMFaXGhfbAfSFvHMabhAitrSBxkEQN1hNVdDepqLcvtyjC13ErsZfjNKwucUBe7gR39",
  "key22": "4vbjMRe7dfUVFGzRWzd1crAfx86AhGNViq26Qbs6B1gFKU7X8v8TZmEZiHxnaN7dfmoXVrm4RThpwfY14erJUDPE",
  "key23": "52QDC9kfmimcNaKCt9toGzfS4GAmmzimhApWZXkCmv9KUjNLSJ1pubM7ubCxz1uV3A9JTadkwKG9phyhfmY3gPGr",
  "key24": "rUhxGT54uVndS9t2GWV6cHDAzW5Gfck3ppZ2SZSrAzojwSiibs9DcZRZe3NDxn9QqjNYU6Q9npQWigiXpg9JXb7",
  "key25": "2cUQAuT5z74TVGmR6u7jLL7BJ6GhZENCY45RTivAW5JQnGiuzVX5qVjz5nubNDfXLXME8mA3SyN7dswA9dLd9uzm",
  "key26": "1ryt7waftoJRGLdgeJW6RwixGEgVZGeDtKBSRY7y9MBYmLdPd9k66KuXUYb3wZoTbbBjXTcZnRsJeFPjSBNmgxU",
  "key27": "349xN2PQfZrdRSbnWHYqKYKFHeLCuQRiWarh7YN5V956ykPUzfGHb5owzRNa6XGJSAEn2t8WSdn7pnexgjEf11Rx",
  "key28": "4RWdu15mUpx7SsrUkH2WSZyNgSoSd9PBHd4hX6ojWQEWp2tVvS7j84kBQnGuwr9b5q2TkxLGpy4953yeGuXdrsSW",
  "key29": "2k2zx1oF4MyewmQAHyCDiLzMQ6yzhN3cAGKLqnenU49Veyunwk4vsoheKBLb4qzCXdiqjjpGZoiTbyEUGVtBZH3z",
  "key30": "3sqPJbw5EYjyjagMTEE3aqru7bxP78KdTxBi3Cc5YL19A5R3zhokzwBsZv553PLCL86ASKKd8SueZAqUKcbLLSf6"
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
