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
    "r4tCdcDAHVgvMkDWQQGqUbu2ou15NFBjYUf6kfijcT48EZcJSDEiuwVamPFshcN2zcAKASoqWsonsmfD4WqMGxF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LBveVYzbj8MRYcZpTMteQwDMDpUPb9PLgoHz3T6qaVafC1StyPPjHzF4hDF5BzmFqG56AM3mQKiLxrfRZkxrsaL",
  "key1": "4CpK7Njn47VTyzMXAg96uuL93x4vawJPK6jHAy37cKmaWyYv1BreR9Vzuh5hUA8ZMhJmig8vrsfKD7FiuRxDamhn",
  "key2": "3dji6G82CQ6ELD63zo9pcCsYFYY2h84VK99gNFYENEAxmP5tHexkGHo7GbPJTbnPaXg3DKo35XdY4XNeikZmF2fj",
  "key3": "5QakwMDoS44qGUfh59V33yqFrHfcob1cXkSWtb7XymSLybPzd9tyYfe98jinERdXPQCn19PaV6D9LDBZCz81WUU6",
  "key4": "37PwiNzUiYdLwtCYqzuF5TfFzBMhzsf4nRZGDPcSSbVAHfyFtjvmqUNG5YrQxoqnNa65KHVZLQT7smNg6wgfWPgV",
  "key5": "343GcaVHJQPCosy8BdsY4MVNjLWzWHShtbLh6fMgE4tLTtBzCdCfkSkcLm5q17mJ2ePb9mbLpK95WVLWwidD1eiG",
  "key6": "5hGeae8wECxFW5n1ZXeKFsWjjRkMgAbJVWn5L3p5YqgAs8zAeaHciW5VUXmvyDqfGcdsyirhyzQbejP1KhJ9WQ4Q",
  "key7": "3HLZXqXGTgXq16HL7GoeBcYNXdDALzSsnUgUyKCHcTUbM8e3U4QNcysSFoTnvuFV3ftJnADKuTffzvwr9GgDYSZ3",
  "key8": "YGa5iLW2HkvKeTEbQYHJXpVhBsiJAcPVpTjWNbbqeHaKuCNsmp4vjrrN8cHzAzc6KWoNu3J9vApzn5EDsJYrpP6",
  "key9": "yLfh3T6WzeNF4kDgAgcfeQx1bZX5gMuyBuanh96W17mQK99h4YhGCMGvwwscMVTahGjGAtwsXn3XaDsBBNi7NKx",
  "key10": "5bLdr8o4Vy4XUDtzgu53uAoNoX9fPkHjLNWuswtZ7r2whVo1wVHdzdL4dJSEukvCMmVNydSwWD5WnLGMEBBW14yx",
  "key11": "3ouK8zGxaGLfFZhi2ShP8dgcY3xDbmb7jqSHtSaeeXAF4TPE83tGa97C5sAT9MdpXa3wmyxaPbHdoZEodeeVgj7q",
  "key12": "2UsgcQwaopzSiK7xFps71rDeYmP3d5WnfTuhKyF8jmokfU2Bo3YExxUQfivj94WDKeD7SeboJgoz3npoVqShTgn8",
  "key13": "2vsdKfkV526YCxWLhr63Vanc9e8Ai5dmEFU1cSgK3KMwSbAYQg4N1zXKJszYpvsYLBEUCMoanDCKKt4idrGafkiH",
  "key14": "3Ym9ddvYahqnrL2S4NybvMusKUXdaRPz7Ltc5xDxDheXC1NHQnAWFvWKC8Uii6obZfMuNtpaPMg9fKSHsv55fbYs",
  "key15": "3BQgPLS14npL1miugjN8FV9Fk2vSgr6v7qG66r1yy9BQVQgdWuku2uuonHX93sAm5vFhajoLc9kjQNxXsiFgjuJz",
  "key16": "479QkqxAB2TbsY7eGADYwxotKf56hMYf6VJVg81Zwt4ygg9aBckSWqEuTd6RrmKNqwbCv6sTRSaMEqYfMTRiT8wV",
  "key17": "4rVtJWVyDLzShnVpic9fUbqoBi5jNxLzyXPikgL6crzyN1eX1H5NBa3tcPD5dvLmbgUCM42Eq6TF7WkpGpcezqsr",
  "key18": "5Pg5j6HXiNFsfh1uwa3xPSySJ334FniyqsjovoToC1jiqhmqV3CHgeYftsGoXQh7MaHV1eSiLyJdXdak9WeWrGCi",
  "key19": "4n3yXLojGoMnMzQb8vUeiunoD21PZpSyrEQMKx26FKBzMzuCFKHtkRtxiXSxs7LBadFbrtbpHttUPfsHp6zaXVvT",
  "key20": "5WRCqGEYz7gRy3PJpWfVGEgaxRZgdbteXh4EDsSTz2yVnpfGaXEqxDL32Kyh3MADDp6u55ePuNAuyyQ7DxrhL1ip",
  "key21": "2Gr4m7cystreCJV6TJ43hS58bynKTzHcpwmMmAznMoDxQRZDqvyGuv28j7GC47H1EJ7utzWwjq2bmifPnJFgwnuL",
  "key22": "28CwD2R2FB9eU1KVbYcUohSfWqnAvvpVzFZMQHQPcLorZgCXhgCXMp4iiwgbQJjX1fFCRvjev52vb1cTy3BVeKr8",
  "key23": "4oJWy7P33z2KCNwSTHQZWGJBS7dh59Z63WbKMZiWg7DFfPWrDenSSFWt7VFyDbckHUkSUwqHDNDaXksUV4VEaMJz",
  "key24": "RQk4zPXmQxKFkz9RpCjdqaSqDurpVpjkdrubfEs283L6hJ3MssAdzVhuRYYtQwyHGHMxG45BtnbZoCTAPnaU8S4",
  "key25": "4y56DRnMoQsd45zWo275u7UVaJUM32n8iSHuSpSCz2bFP4chP2mdbSv266Vm3oSL4eaDELTdEH8GfFcJRYmng7RT",
  "key26": "dKAWVLE1xr3ucqdh2kvtSyudi3NN6TY1KQyvpvsFSCHDHfNycFKmhnFYGVNzPv3AVstfcamGwND7BH4CBxZzegQ",
  "key27": "3cAN1wTGDDbrXdPspttgnTVnVBmLKyc6LFimovSGtSUZ3N9hxjLUxNJBemKnJNaArnCqxYJpUxv9jNj5iQvAkhfL",
  "key28": "3z7GCRLg1v2kAULcvEQa2bTwhjHYZZoM1xzVqMz4bUE8Sb4538j2jsEUHe8rUH2utV9vjJaGaJBJwdyHbdnvcNGy",
  "key29": "eRVCBT3nja3xjFqQhkFicgoxfLbWcJwdmB8rHTzY6Xpzvuhj4uCYXVpuaCvaTUFH9UdKwkKUqeQaRaQ6kinBgMi",
  "key30": "5vBmUhABrEZEuavJYbkfEpQXbssbWzXZyyiKY56kAwiNRBpVirkYyvaxnsocwyDn4XFJynsKH8UQTjmCmpv2KbBA",
  "key31": "35yyiK2w6PKwNTmuaQxjxK1ZRUkZPezSDztfP1mHuqfwp1A4LFhATYYH69QC3nUGPfAGXuehrdkXwUosvGHBaxjQ",
  "key32": "2wT4uuA3uxUVC7Qjx9CDJE9TM19o3dXdxQevGNSn899mB9yuVSutCfgZXwr8inRvaJPGTW7WC1UhEp6QLi1kfCpd",
  "key33": "4RUqdNUMkDoNXLdVuwdPv4iou8KvPUE4UZKMrmJhmcSiadhANgmNTVKTaCiozCLzL52DxYuwr2ySUDHPtrQbN357",
  "key34": "5e4bTn2g5bLd6ZZyJgyreii1uDP7XCTB3Bf8CptUAC7p9fubSQXbtdZftPx2iEvrYUN4vK8icqGAgf9DLLEjoWDw",
  "key35": "3aUR79Y1Sj6saK1aUozREUMkraqyeF1QhiKFSvnh3Hd6PQ3EHEdnuBLCeUuPf3LCBvxDyaFssHsL9vFsiLibsZcL",
  "key36": "4wU2onwGfJ3mcPdy3pLgWDbYMRq35JSZPiMrnPx7o4fet5Kve9Pnk1cFi7V1CJSR9ZnrHXwMCmxpdHrWexCuyQbN",
  "key37": "4iA1Q2JSQAQmo6ZzG7zQTnabLXV3SsgTacyZyKupPoJori9VD7Xqiq6Hw3j8hhZ2tgNedb5t5WFiAUhYQCZQhNMY",
  "key38": "5GeQugJoTWxftd36bryzcWSQZWvKMeqkjuPGbB8raPJovtz3x18QDHc4EiwMBUmctBdGXcXyNqUKyPK2rKeHRymc",
  "key39": "3nqTiN3kFxrBXAeRqeztj9mbBEtj6BDkmbuxzd8gVdAjoY6ups6YyWe5Xtqqs713nCVePnidRuuG3Z1pqjCFMmqg",
  "key40": "3rWcHRrcTRdfDdqqrb5CgPRLEXqSrQWrWLgVDdcK2PwDMqURWX8kBp3bCAf1yQ4FrzCSrD2kxfG2VWCFRYZBM2Ba"
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
