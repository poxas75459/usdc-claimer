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
    "5Hv3AiBS6pC91PSFo9Wr4YZBLr8t4YvRm39hQSLc9U8beAw6A7WokVcDQoDFFPXSzPRZMdziajQeHkiVzUGc9Sms"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YBnMQbZv4pKQ57mySmKU8CSq3SACEE4CKvacRapDvMkRuELbns9wq44Qxq9gYQYFK4ifeuY58DvBoHXDARNPCv8",
  "key1": "3PyJeiZiVdC4Bqwx2Ks8bMAGhTNN8t2tjV8DExvhYe6yfE1WAJPP4FrPrvhSpsqX6XxzCMYVxTsHkqYNYgHdThN5",
  "key2": "3Q6wMHE7Ba5h821eDxkewFSHpoXK6hL9CR4o9JbrpKUbiDy4zPz9TupQDM4qimnr4RMa9Akec6y7VA7LLfijk3CT",
  "key3": "2v4kiHM7UtWvkBHBcwLjRpZW7LiUdPeQefxep2i75YE3UgEiz1h5TMBPJkXaZr9zYpb5hvbxfjRxJugLRZK69vmf",
  "key4": "5sAWX8LdoychaHoR6y1jhEAofhC5dFKp5KL6oL8chXyCSqNuSCU2oXStfTSzHgDRNuaUE6URLPnsqQQeeixhRJtS",
  "key5": "383NquCqot8KGypMidVM2NbjAN9ce5WYfByFUPFwmYpmyH2H1ZynMzy96gXfst2tLbm8BNDbTDjM89gNcdUCHqPi",
  "key6": "3FcMj9g7rKYe4bCJpf9cBXydB7upJec1cCYLn5cxZG37YLLr4wREnXTrZiSWppetcYT3K1xVd5VmczFZQ2yQXme8",
  "key7": "25pDfF988bJDkFwCj8BQ4PchtCuSgAunqrHx9BeZTMQfheWAbUEeLcEMDJvsSDuMXUuWqMjVF8p82BTz3QG4ogHJ",
  "key8": "NF9gerJdbA75ct9HjoHYaPja9U5yEQ1f5ubyef2YYh4kvMJHBd5Y53UJZznwLt3XFz3qvcC52kGdsFS7G8d2JGu",
  "key9": "4pDtjk4JR9dk4GD7kBEC2aSzzpWGS1b14jRe8iVFrzN43hrZkh9W89Gg4EDXyyN2MZT7Gz8ihq6tgXKAD45AyKbg",
  "key10": "2akr297QoPVyJ1DnhXuFZLpHBUr4aSpGxbg4gaNEid4EQJanEGxw2d11HLLRYx3FtbhkG52xRJ6yWPZk3ABWQCcT",
  "key11": "4s3EafoMxCGd6z99hGJkLUU15gjPimZh98ULCnuZX4mY4pQPK3mPZznzJYWNcJehoRvkBv4n8kUpbehKFEBDkP3E",
  "key12": "3m7dqMMv4MSGAeu1eardU2B2LsKDxvgEWZ2eWBk94S5XXaienQKFpPoyyH5qLAJMbcQtfb2ffU4PEDp5GoFGfhkX",
  "key13": "4pwxmdrpu2aUGGoL8VMmfbPmmfZZwQPFpv9FtRtF2yZEMfEBFv8k33PQga4iLu9BxNR6FwgwSbtrUK5FQL3itq9i",
  "key14": "c52zQYv5E2t1Z8Nyd9WStqw874XwpCBFsqtvz48MJeGqtqqWWpcqUdGdAvDjcpoEVNEAe4wvLe5xXh92ZGsCS4S",
  "key15": "22D8CygvbeXoE6ccwG52RpysZZ3xYq7vwZVaYmVzJx5vx1uHfHV1J9VeG9WtDRXj5yPQfEZd5WHEZtGiHyoHLEFJ",
  "key16": "4U83ucweFsH4ra2y5VXKvoBXnRyGSf6UqtryqiHZ7FELuexN2Wa1ut7JoxoU53cNN4VG34KccuoZm1KDYNCrxKuC",
  "key17": "4sNFVrZVetCRq82hPAThh5YAtSJzix1oT3Va1je7nNRovM6wGzowgu2uUvFnj1xJqkX9svjERg2cnzmd6H357W1p",
  "key18": "4BsxfwZ1EAvDWXa6esAZmcjtTCGysZD71km3KG3ASTmkth1i4BmFNFo1UPXKoSPo9PwybUp3jpEaScRa9FAPVpSS",
  "key19": "4ND2okDsDxWybWubMJTRUt61jesvvgj5H5W21hiGVb8Jjhkdd3frFCttWjzW6uTU94Wf26CMaY6e7AaDVd8zrsw1",
  "key20": "2pzF8Yk6zi1Jk1yzNeocNLn5zCLtja7pchMVdnVYDXh168egV7rFuSWJeNSjFufX7JkDwearmtds76CYWKCYNtHv",
  "key21": "5zaevni9QckVwhi5LLCrqDiyE8eU1Zjj1AeqGpnBFRVsMqfSXy2CH1DZAYCD55TJP1jgPfuixASSTA8arcBUugJW",
  "key22": "4C5aVJ8KgBNQyK2A7s8iwJW8Gr5zFZuWzSFW3D8aXXTGf4pKuMxqPexmVzJTTc7kKd5w7t8qmgY6fTUX2NpiKZsg",
  "key23": "5ApJp3EsLM9BTE5hdmsXNWiEADvw6CqH2AGh3FJSLTbQ36KA6HXwuhmMVbAazhqGwNM9McKnS95W3W795GjQsyxf",
  "key24": "2cCVPCsvEES5yNcK7nvBG6BfeWi2XeszkcRDzvxPumyYfrb1FNMetMD6bte2zUjwgeDQGpw8gP5G4bWwAkALzZwH",
  "key25": "wbSA57QXNDMT3R6vpKP55V761jk5hnPpLfx7WtGFzWPrmMeUZExwR7y9NZ5fy3djBsiwYqrb3St681JGeZEiyDb",
  "key26": "49keWGjYsHbQg2w4f4udtLquahFxzza8Dz5KYWMNRfgumtgbsy46Fo75y4NrfmEoehREMzWiei88s7VnqSDfkQMz",
  "key27": "2cL5CcbyMUHvJzjrRJQW7UwUJsTXtLkmWajTqKhxAyihi62RjirGh7D8Zr83WoRZqGbRkTGiFEKVfCreTF9ybhsd",
  "key28": "FkPcq18Fiwo2gYpzFv7RFkeNDMnVWjwXwg3iggFwMtgst94TKE53UKZk41ASm5pjtQzoLFQFLJnmYP2BwktWvNg",
  "key29": "5sD35PgbbFkvFc4iXyQzkYNbCwXHTthYDuELj3KrdfcSGnn6nUqWBnygokimVgv9nRecbe6ZbzCWZ6wPa33sGE9k",
  "key30": "41u7pcoqBnA3WMdhuVRZD68Qswdv7UqmA6kQ3yLUH7qeoGjtvsHLW7hwKbi7ihZZH6cGKg5S4DMoMAa7TAWweTn4",
  "key31": "5Bn3wCVm919nh16GfMAPuQhk5NZnoqWPxuBXLXoN83iboSFUA8zShZDvAkCGswndW2XMSJJkbSGoXurejUsaXVno",
  "key32": "2aZ4fHnfgTPXF7oDhRXxZU8Z5txe3LGVHaoXnevVaewAy3k5f71Uhb5xd9rzfWNcU8WbX2py9wrNFaoEdMfcH5eL",
  "key33": "3pYvSEaJaCiW2FDqwKrLbAtqFPxPcwBdLWaWdAp4QHGiFzCHK28xfU2Sp1moDDsRjBUeTDd8nXnYKGvHUParw1Vw",
  "key34": "4UZoeTzYbdx6Z9Mofb6sGfQoQQTLxnM9h258kLXaJv4MPedYDT378anRYms9DJ9UUcN2YfpYcy9T1FZNE6PgMUyB",
  "key35": "3GGevtU6QR2CsRKzhkPYokfGdFmAwuLojbhvEnmiFS48ZUeoVpR2Gkt4DBTeN33hbsNeCcpoJr5ceH7cHUNkVg95",
  "key36": "CytF9KhmLWZPNcR8ACudJxMdwaMvdYLU3U9ZTRrJ46FqQJcE3V65toWD32JRUT4x6Hgq3pxnXPRNVhtgNnA2zVY",
  "key37": "uWEcMqkhw5z2RJrsm9XUcKDYMWkam9tp6NnQFqn8vmwEoQrxrFYbreUzrQwixq1MRX2sMap82FFVE1jbE3yuwWK",
  "key38": "Ja5aQCAY7yiQ3scZC8CN9MfGyoEcsd55JB1CQv4TN5LsnVyn6PnF6Aj3NCkXeKuftBdWQX2EvMyQNgbbaLxer8A",
  "key39": "5Qqy5SkaVqBfrhzAhn5d3Ci4WbkgSg6hmdJrcq7Vm1PxH2zKK8XeDVxSAwpZrCBGxnMxsGymkqqNSWvgWQYBWfTB",
  "key40": "3Rck5F2QNBtmY3B9wdHJBaGkCrv7UiMdunTb7HfWFKgJRMEsnxHaKzNfcCfX469UbV4RkMhQjUXVmUnQjdSNX3rn",
  "key41": "JQf1tLzRkPkNHEhGdAyQeRkTfxiawL1LPxsFx8pawLQrxeS2rUmbQUoPcE1p95Cxx1HcfTAj96vckcutbqJsJea",
  "key42": "5uwMApAUGNTxHbNdRovGELxMV4ouySveTiundd9P4woeVZwhxpMKAUtLLHEN2iyyw5jbU4wmrnKB4kSRHqR1eb9P"
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
