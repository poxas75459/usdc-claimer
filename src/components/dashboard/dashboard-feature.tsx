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
    "3nnWGV3TjP7KszkBu9MWBxAcZXnbo5SMADM5dUwLk6djbTbuZbC8BgpTuXstGi3TqrZfvvQUgqL6xYnGeFiXdfCL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zpv2pCHgY1qKVwtBrJiuGBSAuAnhPPPFhNQJEYZmJVQv2zSxdfJmo34DGG3bnDFt7MYcTSaHsGnFt7SNpm1BEE2",
  "key1": "XW3dC3rueEctBFpFckjMqUNhscMoAinWq3EQF6xNffDApcwDS3JuoMFRPjGh9KSvKx5VZvCjkhxQxxmgLRVgvGW",
  "key2": "2y2xcYvfTJUTkCgnF8bJB6jiJtRaS48aLBQG3xJbMSspdk7kLk7x3BYwyzgxLUrGMebymo3BekWLJmPK8eR4wYq2",
  "key3": "5Cg1EapUuPPuG9HUghA2VSHLc344KdN55QfDMibrN34oyoGzZAt2FjWS5f6zS4iAjiorgjB8DfyWd7D1SHnZKsAq",
  "key4": "W1RsqkzzZyrwu1XLQPGW1KSxRkFRnApXakwu33rbqdJUBEP89GriWJu2h452iKGZhof8ELAMeGmsVFaocHhU8oW",
  "key5": "5vvAGEwXuyVyHHhkD5VXHn8ecc9Vs5RLjq4wtXZm7GUX6xePv1SxQ7LDCmUCfXva4fXecMD2ahvk8CtToByokuGN",
  "key6": "2qaW4Yw5ViHDD2hRGyktPiaVsKnDb11xK1YxukamrXdNEBG2g63YFFC67tQ9P6Wbh4V7N9jqtU3tY597rEEjv8Vo",
  "key7": "2HFpmQzU8VKEJJ1wwFWGV9kZ66G2X47yRR3hecoZE6kui2YP5VgF84Pwm9stgQSQ3AvXJdpreSK1GzZozEMs7fLZ",
  "key8": "5vM4mREwbU84ERQbvEfvSH41RaeVPhbKHSoVrRGGE6qbPCtoKDqPtJYRMV4TQvZiJ7MvpNunmzjUKi9StWnfbSVo",
  "key9": "3tkfu3oKmFo4Kb5PcM2XXB2fo5KviRGog1zFdvd7Rdr9UcFUH5nintiZB7PcPo1fz5jtQtVxygugs7vySK6humJv",
  "key10": "4WxsH9pMMMFmowU5c4V6V2xXFFLaNRujvYj7ZSdg1FUE3raQ4JPGgBxWGf57sFwKx9U3La8vxT5ygveFpnp3xE1w",
  "key11": "4mj1WWz28EvopWNfkgiioMqwZVQocBG3wFiVfUT343jN5QiRDAPaJ1hoHndYRCHk4wEagNDNfw3FyHR4kPGnRnUp",
  "key12": "KrMzEf5znx1BUPTBe12eiLXZomSE1egjMmdzpC3rbwUHK9DZW87dVfJAGKbRoSLsETiScXAbB4LWs1hx5aJDqRY",
  "key13": "38xMQj6U9fGzX2fEUX79a8e4UoCAUoiy2ANVudqTc3tPfqGpSoKrnnP4KsRfJoMc1sqYq81sdHVBrgk2T1NfXPmW",
  "key14": "3JdHxwK7Ei55fdiXkS3TieMK4sdwfQZR64qfEjatmDd5RPLW4kqEfBs7cq7SZ3sKNmkd5bPn36igvd7X7ZiUK7jr",
  "key15": "2rUWnGgSELziAgQK7VABo2V15pkwVrKxZiRytxFyo8oHeZ2KMcgzoP2iSV2rPHZYSyL8re92GKcSk3gVZdiJtN2J",
  "key16": "2nKH8rMZDW6dRKvXK923PXWmQeBKEdGbYoghaAkm8eipopQmo3g2hGooF6Um7Cbx71iLCdwDLxyiVrU6MAWZws3u",
  "key17": "voZ3iw7kBVSpukmRbZHoNUCJrhn8FtrYE4TPYMbNkt4f4CpnShcgBnL3WTUAGs9C6a4zug45oYEf6oTZmJ1jAvA",
  "key18": "2JUTQMUAo3eGWWE51WF7QxeuMXbTd1A5tbXuxbnsxo8TcBGAmq9277nniMYMtSTEiFxpxNg8fsvKneMmcxZfaJsW",
  "key19": "3Gkkn2XuMommYbhadgVzYHhV8gWzQNaAEHE4rG1BBKtm9TKGVU2LZgp1y5RUHrxhTHJV3Bi7jQfsg1LWUdrmiMS8",
  "key20": "5kDK44qTRNfD1V6yBa8AUaQeCdU5cXwohrSpvWZYRtm5qwMiD9hiRXSkXy39MppN5V9wEfx6mvpNqyB6xwXMQwRV",
  "key21": "5mzaE2BSkGzp2ixyF1tdYrarie5naYmkti3NRgyiwaeHRS9QrtRjMDW7CXHkkaJdwpiafTj5KYJsKeQSgCfA1sqi",
  "key22": "5asVKXn5AqVPAQ3MN6wG6BX953kuCedk33Gu1w3z2rm7Dk6CGh5NRRbVnJyJ4rwfJRtHxtcjjLvha65F4go77uLD",
  "key23": "45r5TpCwHvU86WCBh5HVNrpg21ZTBFkYa2kfj7ZuTAWB4bk3VHVqgCw6uYKEeF6mC3XqcMaXYGpN97CWYQxsqaME",
  "key24": "2YVoAtNRWwYJRrpNA1d1nbbKz7TPi5i2r2X4UnRHNxMm2r4uo7zjwPQjCpcHVvDrBtszSC3Yhx1oumjRRrTLsQX4",
  "key25": "27tgLfjGj5LewWhxf1kwstXpuyT1pmfeLhHDykV8hN6e2Lb52QJC8RVH4Wky98bz4jfLfLSAk17y3LbB3VDukkCf",
  "key26": "4JByToiRxb2ZMvKus7UFfSmX5X7uLYhLzzf56STyq7W4s7TkmPLS9myM95k6vTMDBvbo3i8Pq4Ebn8izKHGrNCK2",
  "key27": "4eJTYzy6TMAoEJTCMmq2dxmG1P6LoshqcEXfFmviMXXzXGfVMUgyLXayZzhfEL3GEAuncuTwRZRMwnDYAiijPqpw",
  "key28": "51GmzewWpKRCKY5EaKeFBxkkM7eSiEC6ezDe4hTRc9Uete4RQxoAo6ULHx1Cor7Qy3mUq3g5swNQ28WxGZM7zLiT",
  "key29": "2GpCt1D1AR79fdf3kY2Cm6JzSPhBAbjVuzvf8eTnYo7FsNoCtrb6TYkazindUiv8tAEVecKo3B4NvREzh1v5Xdoi",
  "key30": "2STAbM5MRyqZ867fchHSZxyqsmhdKzT9gM2EDpe8ntEUS85J2crGLeYXDVVuSMwv7EvccSPeQk69zXkjqZpma3Sp",
  "key31": "GeDyidqaAnGmtR88CrDZNCsfoVg5L9c6fBtT4rikPd9LXeFijoK5wHPy74uqDL1f4BNAQWTw8b5cNN4hk71Rfs9"
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
