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
    "GwjthGeJDJpXvarTe9e2yHkpPg4u1fUPjKWamZ7rGg6m4xkv1XEenbwpyeHXet6jPeUA2gDfP8JhuhWdaLpwoxN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31ytvFzU1yMJ5Bg6UU2Lz2LiZkFxi9mtZTuGEv5QBk1MepzhWY37kziT4KXuMtQ1JXtvpsv73Zjj81cKPDuvfK6A",
  "key1": "2aQTvo5YKuv6uUjZLqUbxy3hyAUvvcux8xW7VuuhwgmmJSj6dNVUTkFUaKnWagjHLJ9TgGH6ubhg25SALNUcgNUZ",
  "key2": "22RoKNVecMQTWEQeWodzSHWs66KrYFXkouB1s2unmbSgjvjQ7boiMxjL1zZqHXkt7xSBS2KtD62GAPJ8nVUA9zB7",
  "key3": "4upzod6qPAu4UijtKkwg5ihdRPmn676UwWUr3KoarXLDHwxsSjjvTkfemYzGpqy6xEWh8NJME32aPq6tUcMRCS9L",
  "key4": "2iyK2qRBCurfShGxtMTQ6YDNakKkrikmr6YL2gDxZgaojXr7WDNbVexnFRodGDS8ART9w3G6FJHyiKVDQxPp84nH",
  "key5": "JCp8BVk8y4W68EGbn2SMCY7pvaxcUgjR9djVWbvZwGwKhLgon8yV5p8KGoJCeTKdNQ7yV4QmhKHfZhHT5USKvp1",
  "key6": "51EFBuJmuhvySGrnmVejMv2iw6V5vVaULFAKpUicfCKwdRiWTuMMkur5w8uSq7jJFA5NA5DUTxy7acoQNsxG6wUc",
  "key7": "2odSmCFs8TNcZApLL9kK8c24LpSc35DP5xgwfm7xcf928ZUpy1HVgMhDhey4mxTYy3wZaACb3d52Cn8YLBJswiwA",
  "key8": "2ZqT4HzEqbt4GQsU7uU1xoB7srESD2hcpXa3sMpxv9QbQLwriUyemZ5HX8gieR96ecBt3BNwiUGB112EiXhGmUni",
  "key9": "a6Qoruk4wLetQJzAWyFA5iAvPFWJMcVPzQW95YHZWQV3SzX4KyCgZjJcczMZ2pHpcrXtFgpUSPEqfWgwDj5YGB8",
  "key10": "53Bh8n8upTCQH3wwirgPQMDCFJbWxdbt78TeLkZ2yHG2aRuzfPD5BnJ8MLP7F27W1apdCq5GUmapVnz6KARjTGtr",
  "key11": "EZhAPLwXSZtbMSWw4RcErDsNU2FuALxHBdHoRQKRhuzr8yserSHaUZDQBfmNCNQ3ZNfx44ue3gaLbnnQgtjEXMW",
  "key12": "czLnbv8vJbGHPdoSwAevFnt7VtpTfZ6Fxghv1aNRbw96mghsFNa9FEnY3quHhjn3joD2JiaiceQJrPadVGNaNKz",
  "key13": "5YHhMpKdxUrkr6EW73LSKDiu39xug5QkjHW7UJrFZmGyfkqJwDRvJXg7AuX2dTZ1v1LJstMPwRNHBJGcRUiEPe9q",
  "key14": "2VfkaLJpK5TwtUQ5YPit2VYVc6s8fcSFm8No7E7SNtS4fBCrEXGLQQbkpjAC2mNuR3XS9tExU1vBES6pKpEovsch",
  "key15": "2oWGNbhC8Gqzdgg9hbdyV9NKTyHH5K1myUEUTUdrX9Q4dpauirtazRka9AzCWXgaeaixxeVUab8UE12E3fkuNdKS",
  "key16": "41r2uLArpwV7JXNqSVmpF4c6at8aNbbtfnfjHkcp1s3A1wuUvzWZcMRAWg55HMfwdh5Sq44D3zTZQZGpiRDPd2e",
  "key17": "5eCxNyuEmm3nX25CTFTFAbiQzwcCUWDHZhYKNFFGg3Mn25nHEgdXJ1AvkKULRCwpSUymbEyUFDRX8VBaL84Axd14",
  "key18": "2D2HcdzVjCmxqBSbeXWQgF64PrU5omdh6XHhdba2xKVmEYRCQg5NKFeykJVU2cGysUPtkpL145eXpBv4ZnuH2RUM",
  "key19": "yqspvefG3BSXV1K9p5c9D4qzpuQsVxAYuYfy59XkkVfHFkELAGQLQvdTv59FJUrUv73WmPDXcWWbpBsva1KeAxh",
  "key20": "23ahVYMuSjAzjmTRfq2n7uaUtzMkjAnzX2m9pgKKzDKCBUbSQMTjsLCqN1DWSEyc5YZdrjyYtZq15HmQNkYEwPws",
  "key21": "3nirzKKmCosCqVE5Qmss44HWBTZuj19EBznuzSg1T7HFMwqZYfafjPu3R9GqDqteJPv43V1gMe6PKm8oqNC64cdL",
  "key22": "cTufXaj6PhwKkdmggZ1ULjJoUjntib9BhkJmeGppmzBJJsurMjeadDvDqfb4qJxJVRG4PBNYZJWQtZrSmQEidEw",
  "key23": "c42BZtWS3fC4U9zABCSKv59w9qVn2H1Cnkc13evGQ6R3C2Jx1xvswjGzze4t3WQPbc1BkfpuKRihaj94ZCUp53f",
  "key24": "kqY7UiFnnpGhjrwabpxcNHwpcfaRTDUZtf9GFdh6jprw757JbfJjRmBQ7eQYuPMqtMBAjN3QkDD74sc8tm7pSpZ",
  "key25": "2sLwqM6gX2JuaDkh54KFsSmcDzYpgPVPUGTLx8ECkqnAKjFJU84sodUmaNcEb7AX2gFFStxhKp9ufcKVT8rKwMtt",
  "key26": "2QyRag8tYcDATUw2g5vyXcF7eHeyWnXmDRm5JF1K4HLuFbshBZcmYRsK134dNRocfdi8nAfaDc6qfNPHXRuS8Tf7",
  "key27": "Y5t7pqs5hV1k4NFzU1dursB79eRpCMee4BMpi5UfUGGCgoQJ1UU5hNSHdBTTpm3yvZcdzeaX9cWxCNCWup8nqyb",
  "key28": "qi4P43QBZsVuiHkmdRC8kNCGCQTYKJY1UMKUoJqx9rCTZ79JhHfYGtbwFURtEWXEt3tU4N4i9pkzVcdFdYP8mqZ",
  "key29": "3rwEpXZoa3stxPqSKo7TizioqhJvP7L6f9SxQr7PqGca11713pZvtWGheMjP2W5dpcisK7Fre4BXkCAXxzSXoJaH",
  "key30": "5AmgEU4MyqZdi4bJEhvzPdeRifrzGNTRgbYgx2CvMp1cL4mpxAHr5yz4fNWaTKgFyTv3R26YqA4D2xvCxmvXfvks",
  "key31": "4ctTfvt5Uu7HK2gr7bWenzkHNtwCvRTQx4gHqAYodJ6XiqJSZKNgeJDvbD2JD1FAA6UBYRg6YqkCRN54hDRPcoKV",
  "key32": "5HMiKT7UW953os85j2EB9XkGor6U7EDBoh69NgNe8nbEAB2KrDEN11jmMdvkvjgfsxqcLr1mpcmFhfPBGJLHz19Q",
  "key33": "4HtYNYUXYD1yrEwvkHAPhxZamVVorWBU5jeic3LZJAJnXp5XwMs1xLJGTDvNjictEy7CkW5AtoZCVYKQ39sYmhPC",
  "key34": "5rEfyKR7Zz3FgNDqBDzTKSbynhAekSPFQ5asZt8ToXxcPnXQAQ8JhCkbQi1WkTmPB7MKhJMFcviErPUccCjmmeFQ",
  "key35": "3nQAp4XM1WCwVJCXrUE8nUc4MArrQbSRntCUurC45LmvArWGYExRy4HieRPBqp4UpZSNqUasGcHgBnsscn8XEVCm",
  "key36": "2B1BB5WxoYxteYdYUYJvU1UMxZSjmG6aFp2zRvf3ZDJYTUBfeWFh9j5KfQusX3Sph8n9Gimn558CvxmLYT7AwcpT",
  "key37": "3C7jUYYweJVdUcDiqr7rGV4ohwMQyhDDBUbbARj5Hi9vkg8nGRh5jPUBD5WLjR3VLhmqu4Hei1dfiMiADGyFoMJR"
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
