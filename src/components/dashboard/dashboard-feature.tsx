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
    "54id7tdmw4M53m8TvHLzbBMLDwpXztyuDY9CnRPLpBbnGEyimKcNCb8S9puyK4W1G7VZ78RLGjUJS4nFpoHZqBJZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aYVHreEcAN5LX4aCc3tbnst5EaFcg9t84wUjofcUX36DkGxVbJhVMDDMJqFkAhcyfiJd2u67veHgXLUhJKNYcyR",
  "key1": "KPofN17zja8cMydUuhWjRm5Ra6Q8CA6tHBwTRu5LGZTipPUGmu7WJioFKzKmSWSGLnG8KpXqhzfPWVLQ1N8dEZB",
  "key2": "238NMpZNvw15AJMDQvxA7pXaC7wVomWASGfYwhKWNa1UDVkAFPnpDAYYwoZYR7Febsx4XD3adEFodV1x5WMuX3UG",
  "key3": "4heR3KFVF3pDxcUh6LV36W3WSvyc1eQUh8Bq9K5P4W3qwzm7sYDjvnhVPHVan9mtTmAouA1fmYD3VUjuvUyjMf1f",
  "key4": "2RNBpxrwQ3LsBakAPwjzTx4WoTYKGN4P4gjgxzrnY4qA4eeJmrQrALhQGVgm8Nzk9MEdxdTemGYXyqFwFch9Uccw",
  "key5": "Tbpk5TAZ44uoWi5TmLKJHY15H19MMvsbCWDrJNA9ECrxMgszPAGRCnr2fAR5fyCCkV9arHx3zDWusYaH3oNpDEp",
  "key6": "TqTWAsXXTBiTF9HJBFqsjw2TZGpSi3qy3DMJfuH1PQR4RM44BUnAJAP2CLZ3SUJHXHwArakefHYHgAQHWD6jA4T",
  "key7": "51n6KLYF4YjUpDNymi38BvZLTEctVRuvrDtB11fVtcuu196Mkgc8zq1CT9VPEqagp6CHqLc1oXzN1GnxCuy8x4eH",
  "key8": "4bqKDen3AatHK8s7HTBJCPGKVcn2Axwv5goK52nLYe35KVTPDqNKW3ftNkHid7ChEgappP3EBLEiVVTqWYxyYW7w",
  "key9": "2PfKpnkX2ziTMNz2ASy4gZVTThEgk7fBBcDbxuvwKLezP1LikLyTkYEhZEff7aSWk4Uc2iNV6QdZj3dJAD9SSgg3",
  "key10": "29aYWvkMRhsVSuiuQAGcQProdDs73WqzXVira5FY7KfEtMDRvtUz7rvGrxeST4uihj9BnFNc77NqnJpfpSYc4dMd",
  "key11": "JrG2Pk7Yvar2YfJGJuVmz2yVJCWqSxoYohDNFet8oXJ6LY11mQU8eBmnMYSkni3BNSav2joaDJWDW8oCLBmLGGr",
  "key12": "3kARkAwGcUGVQnXXk3nzB7jcGPXXnGvSPUaSzNypESYaZ8dyHXmD38TxftNoVV8urpGk4Yredf6d6P165BJB5rQt",
  "key13": "2GLtrudnncHpZtfohvv4Kns7gsNRh9nta9pPfwo5RjyQsHVJEJe1rEPJXyw6g4JNFurxABuuFgcFEUj9S3q4JbA5",
  "key14": "2UMg7iJbTwb1syw2AuEGgh7GJqSATzguuQAwKSKhf3r3i5YfNckafrKXyhSYxCMtXzhWX2UkWkVqtwFy82KwMhf3",
  "key15": "2gSxgjFNd9ga7skSrmyDrRhYdoX6U3J6QUA3nHZDguvfSror9iShDpp9tW2Zd86rw9mSWhPDT9taKD95TA3N3vRW",
  "key16": "3NZZWmFEdAaW3uaMYYMrx6hyMBAwsPfkfBDLvdwmNBpiAfMUJrBxVcHLUqkeiusuRZMNbBZu9iBbPYA7dfwk7BZg",
  "key17": "2v6AMWZBbo2XB7G25fU2AmejYam81CwCM1UMMe3bDZ3TegVp948M54z8vu9drPoXEypoBZUjifKWCihmY5uZG1m7",
  "key18": "3gEe5n8F9S6tFULFT5QL9TfSpBH2cuKVZARvRZ5unvTBPAVVLBre9bBkdmNYvA5EBRzaioFs9EChfU8vuxi1ZgYU",
  "key19": "5DdyhqRiXQdbPb1yfdnvKfhnt4hsXgQH5jYx3mMxtPSKY6dkMB5xGHp2JfctsC5iv2f2f7J5YDt7J649MgjRabYW",
  "key20": "4o7fbTMjHcveDrNawKr1KuDhDiLDmfV7VmjsDzXag3zZTxTGGpGNqZ1RMBafpcRsoUp2xznUHAijGJ7zuDU3CgcK",
  "key21": "4QrjbgbdTURQb14RhN6fP54MbKzna8yDnFi7V95Z44E1Vq3ZEuBWdawcLK2S9eCBnWsVEcvsugNVUjGg2tKDCXdN",
  "key22": "3bVLxe9j3M37SXxD6GXCmxFxKGCdMqA1vUpBdgbLXXBWJkNp5fuSGdcLzqMPd2K2ceQqnfuX68Uu1XpMzzGio9QW",
  "key23": "FV5W8WzvySkYv7Rx2ToB2F2vw3dQCd73tFg2qRQ3mo8fwNSyicCm3xgygwC2jy9tqgNqEfKMLGSWSf1BWjpQKeH",
  "key24": "21AT8ypPjjB5nPUAQeobEXPWrZuiv16uW2jcEcTSiPdVKkdK9rZvzE7t5oShx3R7uy1jVujUu6M2AAaU4AiN9vUD",
  "key25": "DErZJYKKFCx1LXiQc4SgAG85Xyd894tk2vRqbDKZtgt1r6XC84cTPLf3MxKx1JUMFYNT1AYkhuikgLtQTYqhSdz",
  "key26": "4mq1ykgS2aH9eWo5Wb7V24fH48htCBJwYLh4wNVdgfQvySjGDH4fDBA2JkZE5hjE2pE7yC3yjpnFSAQuEafcYEUd",
  "key27": "uZ2cAa78Lofpshz3naaFNQVWbRm9bd19MwomyZWcWTN3LTFrYBhkmWnf6MNWtFwgCqBWEKapkQXLyZMxz9fig1v",
  "key28": "5GCKuSBRNzGmRKfESAP7xKgx3kWZPH5vrHhcsmYQ2T1YiRFGkQLGVWkvYRtEozqqnodfdQJPXdGHjwyZqXumhD7N",
  "key29": "5trWFiTWN32MoU6H8J2e1vx6un6F7UDHJgDRgZH1eniA1QgFUexY54VBhgKZQ8jCU2AAte9tVibm9KUusAvwXEmf",
  "key30": "4wzwETwbFrS2NMpsML2KcEMxByJYxQocLNbuxGcS61WP8C9oo1emm1BaEWhGHGScywLP5XuvHxFigChMqHxMMz3X",
  "key31": "5szYvS7TP4MdjsNibB8vXLxmx3hAxiMqHqthR4mwqqLRewvde63n1mnn2U5XnsM94YWy3xQBeNrBkxaEfTZu1JH5",
  "key32": "5TKh5utX6unhBz5dWjdxiNeouvimpbtCF6wWe4ZgEVu4qXgQ75BErrXQjTYmPUVoLwcTVy1yaqYJN82tVAhzeJ3P",
  "key33": "2zFLhq7fGMPynNZBHxMXLPJBKP9MkkqaWajgcaHeu4uhVGBnMtpCe1SrPQ1pVuBUpmvQGz12fSavVqVXcEMmmqE2",
  "key34": "5dGvmZKuKNg9zgDt8MLBUZLbki2mwpmdAWHKoqXpvmeEKshFcTPAWvtkbjZDJnZrhutPrkoRuXZN4vnXURcENVZc",
  "key35": "VPkM2nsKGiLF9joJqjc831x5TfYMhoQfhRtqaiqoPZMDXSiK7m9APJdPRPfudSVeXBYdHV89x6it8g53W7pby9y",
  "key36": "43uwvpHhAYrDMZehF3XuGxux5XqVy6SRmGkNN3Pc8bnBT958S9H2QbeTpM1GE5xqm33QmueHWtsU5swAeUwbxZyp",
  "key37": "3NC2zPN7xfqSD7AMpsEHiUE7KPD5T5yzsKc939evTgBpYRDyqB8J1bZDi8VPZnALTWv5rqAYRqURAhcXiRwbfkaV"
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
