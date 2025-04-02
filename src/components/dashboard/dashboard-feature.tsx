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
    "4NSPLkiseu1Q7CzSUaqT9W2hhp1PjrVA9uzMzMAfbQX2h6SZNbAQy6fgpchS1H9hjZ4HQCDbM33Pq18Eqc4cKn8U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4pTJh6hV7PcgvDxUtYsAib2vmqyz3NAuLakjdWNiD4eLGrMFcFkKgqo3XYbqp1upfDhbvGekwvJj1KNGg4NkupV2",
  "key1": "32ZcZXYqKuDebN6EiXELB8MDa3pcaXNMJyMaMBk2chVEpdKdJpZZ8JvDGHA4y3yFgD5q267GVPH9ziLuC4Z2mVi7",
  "key2": "5w3fXp2jZKp2ttf7848W3NCBo2qEU7ivVEf2LTrBMVrboa5rpaXb47DY6sGpJUJ4FwJCrfQV7LyrnWMprQ7ve2kJ",
  "key3": "5YwmUpoabDbqB2FZyauaRYMX1L1YmM2srqsASzLcBJ2yaKKAXSjQ2VxySSJmpb8JL4pNgfwkXut9k4usufBnxWM",
  "key4": "2pbostJKK4RwEU1gt9r873MYFQsuY8K2d8ZC93rBvkAPEDsMu15MnQoLptZCRVRLBS4hjXgbdoovzrwwvTHqWpax",
  "key5": "J6qs2WBaDmChrXSRiQffaoYpUjs4MAAHfdhrLsuUMMvRV3KXYunM1CjpG26PYYbasXpaWYFVYLZdLRNbn3Zg7wY",
  "key6": "3ihFegTR6XTLXze464syCAA2Y8Nr1mWw4vk9QjQmuajAfFiM7sQJDfqJZ7Dhbx2J16vJWaHboAXKg2nP3TNNqTvh",
  "key7": "2UnsusbaPKbmW3ncjKprvwDWnA5fBPPcHMS44uKUzUcJ5xGUentseSRAmrtpu4zT9QwSKrbfwBxbsAaA8WJhnngF",
  "key8": "3ec6dNXNN81XF799nxSyEhCaqwQ7ysc83MowduDGUEBuTsm2fcV6H1CgWmaHF3wRqz3GDKBENfzQxYcCz5rec67j",
  "key9": "2sRVkYiHDpjVYiiampBuR5ymnXGYsYkeJp69gLLtMbTFaak8A2XzSJLKnGwLvVqh1tsqEJY5vghJd6nuKMQmeMip",
  "key10": "4mKwW5USFpD62EwkUft3rVCBheFeSrcFdv8rURwWykrRoUsW4XVBLtsuATEENDtVAcmyVdkjhJQ8m14oRJnsF8Ss",
  "key11": "wAQN5AzzCVdPrp6cuHa1qj7tgn2rJWykzFCn5542bhVpYSgvdaEbnZf5Vx1EUuUZdNHyDzdoSjJd3MxAcLGdmRD",
  "key12": "5eMdPJaV9BixziKG2hZ7qrbfYVaUy694hUv3h9Vv8FgRqn5twrcrDTay8T1YU8ZTBkh85wiQj1jbwgndUitxSGGW",
  "key13": "46hWTSNSZfEYbbZzg58nJ7MRNheBV3qpetPRBbU2BC58xvHfbymzXoKGKckK941agSx1BEuT7NhkZ7YDUXdEkfBu",
  "key14": "CBfyBVFRMby8sCEpAg7xjGmbehh2BLNCJEWWYaWauV8Er8VvSDMkSmzL28xxKD7g4MXW4bA1aHn3BLbK6ucLcFk",
  "key15": "62ptWcyg2fbpFMoVKVewtFdZZEnWdbm91kY45txtryikmXP1tdhXDpwXfZsWMgsQRbYJv88qtq11w8GLfqP3N9sU",
  "key16": "BSyDLAQF56Te7eh62szU8iVA8VmZSCXkWf933CNGoLHVd2ewEvrbLKJQjea6AgHuxt1EbCLKuxWWBn2BFhh4YCd",
  "key17": "4nAQCpsspdkhuXM47bP3zkfajoKicLcAVfffmkQ3oNHUcvYM4sDPDZFLWqtsJEddxxFV9xEBGPP3izJV42uDvGgT",
  "key18": "652uMf3cASeDCbW9F5T8vwckSDnoJhCuekXGiYVyN6jJ4Gw5ua4pBX5PFpUBHtDzECogrv1hhyt8cdFkEUFDiHw2",
  "key19": "2sLKzb6WiGS19egQhmh6zauQiBgiEBgT5uh7oRnJvnrqFzdzYXM2wvfEFKH1rbTXJexzg64xpyLRRbQkjndQNGMo",
  "key20": "3FYcBYqzWEfMsUQEhxJPXCTJJtZ5VWKFy36giSkEQovfDx23AtYARRrKmgBMBy18j71zSHmDingfba9nn4SYeLAe",
  "key21": "kamwNXjhZ71P1WeiERgr9aX8HMiyuaQcPR5iY9a1TB17WBnRmVtNzQpofSPfEMPvBzHZaacWrWkxKzk2UJTWGqZ",
  "key22": "4gMkhE1LHaUGnKjZQKwxCYD9UB7rT1XDB1KnvM8vx8RzxxaDvhNefmmadTdP94Ge2FrGcwsTLgw4ZBBYzKyQWGwx",
  "key23": "8P3Frd6o5eXV6KCmHv9jEJKsxdkMAAD2zkWTPQEToLjnpzALvKTz3fg4gZASLBmDYqHkzbsSMj3zco17QGpYDr7",
  "key24": "466i4FPqLusN84dYqsUEY8SF92jKUFZw1TpTYbKc75MyRa3SocrAFTFs5hmiG7hc9QMStyAiZ1Th3wsih72TDN5v",
  "key25": "ByHGCi3Ryf2H6dJjnVh5Hv4acWrTj6AS68G3b3yuHQA647cVFiMLYLLU15CT3mjXqe1mEdyqQRsLZ9J5VjkmKeJ",
  "key26": "vDrTPm7V7DV5t3yo6BgwADNqEDv5JRtbmt29jAebRzbvMqkcubgKMeJgMESWkj8jdHRehLSFdmWhTGar9i8GqPU",
  "key27": "5A5o6CfYD4rPp6F1nGHsM9aQAsSm55sd2CYdKUBSV9xEG8ZutFbQMi8HmoZmqCuXcjFnKkxisvrVUg65dEzcZhXJ",
  "key28": "5EVo1hUXUPjQNuHdGkQc5jiKaq2p6uXcaXAPsMekcAKJjosDm2uy6eRKHvPYWdDMW5iKq5mn7Y8qKUZjYz1EBASS",
  "key29": "5JFvttgACrnr7tNk8G5umextcSKcvC4rXZa7dbCjVY2Pwztv3nyMHBGSSPVjNn6vztvUxdMwjpVVJmmwhgyJZQf7",
  "key30": "SfRwJFr3G8iaEVtWkfAqFs8JWEPu6EeYsxdNSPxLRdyvKEKwLqqfeALbf71BdEwvfo3Bx77mcdZ6deadVWGV9Xw",
  "key31": "2VqGB9m7iz91ZLcrmSkVKXTMt6aJcTzDMPPaK6pDNhxVo5m8dgYiKLzKu749abmapFpix8x2iC6jWZw4ZfosawdL",
  "key32": "5FUB2yDdVZ9u4K2G9AL8ZJj7sjj3uNuo4wH3Mtd4bu41KA6gEPkaMV15z3egMNMgNUykYiCVkmLUHcbqDsLUA75d",
  "key33": "3D2chxPnxbyEvdhkrKkYpm6NHFZcyn9SoUiZT2d6JZRen15m5hYt55kxNq7iFmfuQQhkbYvjjZF37cKFdSrobDMv",
  "key34": "2aKiNoT2QuXmt1FgCerEAaCiWgJ3oZj7m91CYNDBtoPN1oG3XkLj4N4SHBn7uiJ2pCmJbUQMyku9UGunidk3pPot",
  "key35": "4jK8TMNbjmcQRuK2BtoxD2hcZ8jM1AGE1VMgMrsRLsscYKzJcNfnmXxL35HpyXq4y9zGr8QYSux4ueCupxNfW6qE",
  "key36": "4VAArzzUEZrd2CqJmsEMNxjT43E7yKTQWdvQ1ewULL3DjqSaF2qJxBxd5BZjVzKtEwNqitphLuEaE99tNAubGHG5",
  "key37": "2jrFnei27yesrgGkqmEFtr5zSyqoLVXbGPn1EwTNKN1E4MBTBJ57czveRvcSjthQqq1jVqMm5cyEUaaa6qMLxqA6"
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
