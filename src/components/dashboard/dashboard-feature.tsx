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
    "5EJKoJWQoftfqpafvYgGEDkvHEfTqe2rdBAKqoMiZCgdRgndDKXykAV7TzTgiZojW2giAZn6HiNdByGeujQaXPHa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NDK7aumgxNzioNixCcrbdBsHvAAAwHzTztxVEb9mkAuHAAuyJoHizFeJKpF9bbKRSh8rdd5YcZ5875tcD5CXRHK",
  "key1": "5x39bzPZJ4nL5Wj4K2GHA1JdiCGnMLxPxN3zMACAa5w116Tqc1AbuAetbPrwJVwcYymRLFPqgKYZhmGxNNoFPKk7",
  "key2": "2a37UiiQNjsCqUh9knZFtb1SEEtZx4BJZ2MQdZu4SFBmKAr4sutaDunw6FGtaxPe89KG6ZfLWYc7w22gFUvmgUYR",
  "key3": "418aD21MDpn1WsYmyFrgiprctTJyWUxJWCvVaR2tpkE4ZXYPoDMFukLqcXXvCZ2ZDB9SNBPvcPyerfQCM7mxSA6L",
  "key4": "4SRg1DbcPuFrPyKq3iAZXJ3dxa2NdPBoFBDVk2RixLFi42oemkJwaUGWidNWRDNhuXyHsgbmWnfLhr15qWgCnnZ",
  "key5": "2YXBh78rQPPGhvYTeN5nQL5FFJuRxq9or2tzVJkqppueZhqiae7fDQA4VhsoypDodpcF93aDcPLKFqLFLhwGXQBc",
  "key6": "4TcSTPk1haEhSBUqtzQSLoU9gfWaP32HNSxEHRhTY15pTfS7x5zYpkZh3UAxoAvQa4Dwph74ZRppLg9HsbyTq6oz",
  "key7": "2afNJNhM9SXuu971BLo18MSVZHec7vnxqVBih8Y6WQ2VZKyKB5H55RyXzLnfwQ1Fwc5JcJMA2pLrwgBWtbFP85gn",
  "key8": "2BHvCrdkvXGWdyLsAYQ5JCWyGXi6kDX1eXVYNx7Dedu8TEoRy3PMchmxMDutexZFptZqGCYtazbCPrbWW27f3Z8f",
  "key9": "2nEcgjw2DWERH1EAq1ybnRmzShmPvR97MJy8m9SRsieZMh1jx13B8JAf1WN4QS2ZgGYEDLuYa374DcW73RyJnjsm",
  "key10": "3f1ZanvdDe3rkT6cRGQp9VkTbzqg9QotR1AaW6hQMWS3nwkQTwjpaqwbWTkE21W9BgaSQRYi46vxHFn9Pw94Mm2E",
  "key11": "28yhLf3Jj3Nzm7xeEfr5ShtDeysSucCDcZkrNc42qGnG5jeKcfVyZk4gGdk9MH4ry54pWgcR9rpbaB6JdkZf1MuD",
  "key12": "4FCGE3mbS4WVRvWuLfZYZZxbfet1yZJsbnu3xGXYzGVNGmDekXeU71HfZvxoitBqparh3YsxVdLJqqsRnNK8L5PC",
  "key13": "4fnzMZZ9oZzZWDUrD76CBkhneSW64jAkqny36VJJ7GSt2k4PbazPKcewqwyyDBPviHj8yBhVjkCnYhKoWW9nxVSr",
  "key14": "4NWhwtuR6U6i64zubpvtKyGEYUZkFfmn8oaPaZuRc894gM5FztGWoF7dLREoNSYKGEq18L2MfVuj5187HYarrCnt",
  "key15": "2WTooGuK9ABSo1pWnCLwv2MurgAd6HdcXfPkh9pKiv5fkwyWopf2YjbGxjC3YgBFexJKxjy5h4Mqkf9xRZTRBvFL",
  "key16": "2GFDC6tjwvAR3pc6ht9qXpWyW8FA8WLRZ7vpUrMuk1p86zgXTaPNzbHBQFyAY72gBuhK246tg4VrEnVXQg2LqUAU",
  "key17": "2qzojjnW9FkmG1Ksbgg1SUQycK8SS7uYdsb5xQkeCq4P4QrJGAHq3Eisib3jiPGS7Y7Z8oDZpJyrT4ohd4SRaVsk",
  "key18": "5PEMgyfRf2X5bAGFAj4ksGbGnh1TuXCcWSoLdGW5SeQMyKcnSh6QUj6Gw7JVN7sjEkS5n9NV7dDbgkkBEr5Rbia",
  "key19": "2aLsfv5kbwmLixdSHKV46F6Ss6TGHBdCVL4TiEG37nEGAK6Pp7PqD1754nFpRhyVxgqVnXujm6i5kh7UQUEaZud4",
  "key20": "3DHrLX9yB9j9UtoPDm3XTZvRRyV3JZ2siTJZzDEtwdMq1nG4RxEXfdHhoKXBfbL5WTifCCx9aSWpGVLP4kywnMFS",
  "key21": "2pKkoTPojjjE3k54AhYMc7Caoe7gB1w3Hp4SSA8ZRmRJZ2unE2H1j5e4GXrNvaMiJ2p8ocVJ3rn8VjR8RQp4UhSq",
  "key22": "3WPf16BVRGkZUEQTD5f6a1FrKDNQJxWm3Q9Pv1X1CMeSHtEktxp8NEPVEdpRQdWuxWCvKb7ukf6QL64L4XWTLd7K",
  "key23": "4f64hSBUNmcRQiBXH1Aa3ViiEh7rm384HgyfdEnyPUsqS3MKq6hcHYoM48J6AtuvQ7HLEJDkcxWVVKH2pap7rG89",
  "key24": "3J975yNxFF6SABQum4U6orN9QJLVHRG8agm5Y7ewGDCcBxmUAeUdXycGRJ6n1MD4qUxiW19DUKGtDomCuboYjcN8",
  "key25": "xVuuNoNEVZKkkbriWteKjJodP9RQMUpw1dL3tV7AyJN5YuwC2Hhk743gxXtd5A3wUe9zNr1gfYs5w92ZywaSrvc",
  "key26": "2FDeNWa7nVmAaWoPB8engau1NzLLQuqHgBC5LWFf5nTcjbNEH78ncT1CwxELGByW8ruJHmsueSuhJiKGuKcsT7X6",
  "key27": "3akBnTKeRfB5TWBnN4McCVH4PtpHmi83zRHejBNV4uRxAVXtxwHoSeyHJEEQ8moPXfwime3T8JJYZaZJ1Em3ddPU",
  "key28": "2iepgxgU9n4mWyEZZnQ7FTDiZhkqpXDjZGkgBRUQYYYujP4tBxt1KAZmXYsXq6koa8TEJ28NwhuqZiVujKFk4dPd",
  "key29": "4uq5xQ8UQQzuP681ad11cEbAvHzvm9i1MGd46W8cWKQCvxzuQWzxdnCeVii2YoBpj7rUWd5hQE1NYGJroNATi7mK",
  "key30": "5xUBYGYUJMKckfaVGr7XqqsCh1SQ6Mc9BbAY9W5NMQcCwRqN4DDfYGjYmvRDa6fRtEqqGwu6vU46ut2ky9WFiWKp",
  "key31": "3xENKpJzxWQehSrE7WJeUeMpMLwBfPNbvRT2Tn6UGhcZhMt9gbs9iD3uwrZPf77FDPHQt2Lv2iHnXSz74te2f5KJ",
  "key32": "5Qv96RTFkkC9kVFMZgmyxVD3qJYmXX7Z7s2MR7wKJocyTcJL1gvMDjApUDGYdxYBmieo82PwtbtpAjNSswUMVYc1",
  "key33": "5URsdEhAkpCpna7DGUBjyX5ZM6HbbTNuZmyjnqBPXqaj3u3bBK2HHQjd76EZRWDfJjEb1G58MMPvf5yiqmhB8b7P",
  "key34": "2Wuo3bRYX4vDUiYCcbWdMWb7vvqCz6rwrJ9WT8kTmVVX4WrSRfSbZPpUZoZUKJEB2A3eSDzeo2LimL56ceubQJJm",
  "key35": "4QxvAauQckqjnS3MR5FqEaB9nL2k83SCXS8eEc6ur5ifnGCdFFBfytMWKcMj4EdYbofrgg4tX4E59CiqqvKzncC6",
  "key36": "5HyCZqfmxa5C3dnM9KFLSaSiDpr4h5i7x1mNQaeJpy1jCzkuoXLAozvMJkc9zHRiNUPBpJqyBTKAbtD4s8ha7iDg",
  "key37": "3nU7rh6GKkbDTWSmrV6cuseNfSENWLxXFBkZG8BXDNoXz4Uqb3gXpSoSRe4So5iyP6yTcm1GVyNExBf1GmWzTMtR",
  "key38": "3oY8Zex966BijWYfxWcbRLvWZr6Z9RzJ2xtynoKGbaFqLzKM8i4Vwsbww1mUTMrq9ECbyQ6kRUMA96W67zLqkyU8",
  "key39": "2Kpbm6K7PcdLMDMXpeDPu2yKa2Rawc1hoQgS4nPw6G7czJ3VrJBzAapZZB43C6oPUWLs4FU1JYZMtdzqfcHorohb",
  "key40": "5np216awAit87XiyG7EvycyJzhmZ7yAPQoZbu3QhvWJjZ5SxANHgmngdmxXjcoVrofPFfZbZ4mPCUrK1ht4KzD11",
  "key41": "29AZdi1fs289JnkytYCBs18y2Aqjy89qfM2Rv73YSSUrvNuQri7FkRnp7ftmrcwpbQ8MMyfUAu46ZVRkg8xf2QdW",
  "key42": "4CqNz3oWcy2cUhkqEv5HGiy9jU42SWLmuPDRzasxUJ7WoY9g2AGCahXdshY1PWiNFQ571ZqCfKohDpSpRKC7SN7V",
  "key43": "53aSzoztKazzQw9UVBS91h3Tjue5P4FsCDZpikGntNjicTDkFwrbaoywRE1U6RESyvMtxeaD5buaLys7v5iEYk9V",
  "key44": "4f5JEH4x4FdSqmtgghFmAGX3RPvmG6GdpMYtrmZLAgMVj8qeTzmHsCVQQhKjejQVxGg7G82wnJ4UycD5hAioefGU"
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
