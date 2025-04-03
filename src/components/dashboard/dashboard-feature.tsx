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
    "5kn7Dm1YBNkP2fE3SQy1a4tMkZRgBarD2rGNkeLvmBUxibR5r4ACM4wJnkALiidPAzRLDYFrzsBhLrruPAAZkrJn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T63B3zVVsgLLQYrHoN6WZBX3RaLz3DaBEi1rerD6ZnkiMZkEDZMArVAVMHHLnYpKfyDNc9cLmXfNv2xCNVjTPS3",
  "key1": "2PKJibGCxjExmgc4xF1uXwMMtnk36hLLCp8WZ2XNP6LCArNT4EZjxhGGpTQx7vsrhsxmAaGo2XLJCBwnHwFnTXjK",
  "key2": "PCWHPUwuBJpFw4tWGGvZGwj77AiSKe9ohhaZykc8bXKZPfCWkGXiZgpnxBAQMgzYopcE9puEDcqTGyto49uxSXa",
  "key3": "59M3wpUwTt1j6vFzu9DgtVbnw6tLuXuUj9meNdB5z3pnbmffN66M4p3UDvAfSvwMCrNZSbq8eABL34CpsiQrxqrL",
  "key4": "4ugf4h9oJhjACkrARGt38Zef4ykbr9uHi5FotdwDAeNzBsHo3mA63cNScPBwJkfgzqZtWVtncMAKxFMAPUwssVZz",
  "key5": "2asvE8xJdoaiuifeVngoU5BPBFvFTSeN53ByceW51Gbk9LjLHvYpAUXtTvCAZ6aBb12QZtdtfcFvs9Vc9Bie6ew",
  "key6": "4hw69q7yToU1WoS1PgetceuAgjqzmo7YGq4GBB8j8iYzyna5LQtQY1z7hPwphsHAfd1QdRxGaeScX4bnGpWU2MK1",
  "key7": "4j6pBkSRZERjRssRhmFNyYTrJq5keKvr5WNAkhYuDqPbJ68feVWfBGW9hjnGT5jWuL1x5krVzAEQGsUjWn4YuBeQ",
  "key8": "2PzWJTM5SKuzMyv49pSdnpNWPLJhE5LheLvuGJQcojNXz2cchrCLHfr9kPjeqB351Pe18zL3xkQm3MN5hqB41xgy",
  "key9": "5N8NGh4i2BAFJhM8Uw6wiATkRMBBMy4BWVou1EMYZfHxuoYHrtbsUyQKbFHvMr5vTdxJhsa5JMrjXVDzNbxLrbu3",
  "key10": "ktzERB5uGJiT6hrNmfcDt6VErVf3LW7mwUyPdhffpDAZ8m2TPPYeg7G1xoabVca3f7dyS2FnrVrr1vwQCRkgado",
  "key11": "2xCTPwcxTkyHeYYxfirDTKZZCmc6Q23by3JHEfRe891uZqEeX7LHHDjjT4fUAUBXTADmG39h5hRyqvR7Cgb2SPpD",
  "key12": "4iW2TtajAgehW9VxHF487zNTQkexaojjvXuZQ6P8HnvA7uaDyCVWY5GG2ANSbDD6jqDhdszC2H8zcL93vDeaR5SM",
  "key13": "2oXcmJvH1ebAcseDXNeTy1KbEDsbbxdGWxK6CfiMQKXF3eBy3TGZmK7TRCbPkXVsJXxv4cBAwCtahEopZ9SvJB4b",
  "key14": "EED2HjFnwMaicS6f4jo7axhVnT1tVR8M7AGcLNfh1xvUp1XZmSECDNLQtP1hLv5tjh3fWLdr4SnDM2M8tj7ahG7",
  "key15": "67m5V8rDymTT2GoRLcxp9QrVnSPVcQX5Czjg3JUz1bKSZtKE41XnG7JUEWKUjCQPwy1V3iLfpkHwXi1WzNMCR53x",
  "key16": "5uPHWTcmezDb3kRhAbPmwtrLzmbz1jNp8MTryQZoBD27ztQe3v6ttAg2ZuympcfCiLf9GtyiSjTe9yMzrtDkK4aR",
  "key17": "3zyk6HJ6aVHTDKNnZRS27gH7hh7CSrBUxJfZqjgmh3qPXzxXeabqzqrkAAiKzkjpFPFkf6LNmDjLPwcY6amZJDBV",
  "key18": "34YRL9qaZ7M1wsqtgQM7SHBWMn7nmuCjFpagYa5FmbroLmqYQvxA6Ze2b9c74VXswDSdMzZqqxgR5FWbqbJPbb2H",
  "key19": "tuCU639eeSVyjqxjxLbBnndMnC4WAkbUQwBEedw4JyoGUPNjb8ZKNADpCXsMTnPwZdHDrKi6VitVrSL7XSBvTe2",
  "key20": "2ptWRwBnUcvG9Wmf5fkRv4oYEXtpR4VZ6smdgsMy5AHkk65kgr5539dYeXkh4ow4pCXDZiasjydzyiiSack1SKr1",
  "key21": "5vEntxPadrfWERAsKqUZQoU1ghDVUXAuzXY4CS8VkgEUSAbKBvo4LX8ySzkREvaBXjAy1wL4LPNxLPxvAgboYMo2",
  "key22": "4XiBYM9ZkjJav4mZuKyfEqBMn68fdVFUEXsEpRP3h8wA8uFpJDsgiVEZ3M9uje4L3exjkzNnVsV5QmLWeuwZooKD",
  "key23": "3W3F6F9s9y7U3JA74oFznbp5NkCsuyAND9F4XyxNBtVC7Ya8jwiywKbqdP9tJTybXv1B9nEb7anDG6TEvC91kuyL",
  "key24": "41hmVodvAGwMHMFCbQQTHRMMowhWxQBSVJGSR7ME9aneEeFpJCruMkBh6uAtdTVLrwsuFacyLTRP4eq9JmSE5TGa",
  "key25": "5LZmUFpGBjtKjKViR2FET1q1Y5sCtiDboWsSMaW3GVU99EkjuVUewDcnaEghJCtHhu1k7fLD5niCSYFiSMVBxwKT",
  "key26": "4X9JcckJT9Az9QSJ1EV5viEpRzieuEU2HwNmVxLaXED6TVEwnbWckWXuCUGzdsZ47Y7WQHnd3mu8Sf5N9tbrvvaT",
  "key27": "5G8wpkAg3CtLsDed1EgcYHuZfxr1BVwqx1bBeUw3hXWPVhR2UKCrDYksgbLKw95mMSJS944iX6gzdzz4gQPXz44g",
  "key28": "42cRv6jPaX7zQ6jXb5oR35kGU6gsfiLbufNrFj6hLypQP7EqzjNBrRxAv1nzPzsckwgvV3CCy4DBFAxio6yDLKw5",
  "key29": "xAspntTziYiSZcgBQYwK8Lybp3ytfgPRxytALsk4NnpiZdPV1ShF78i9AXsCqYjDU6mR99zeiYczzFfwBxSiQu6",
  "key30": "2Rr3TknBUMSwfyzr1TWzxvJQD1F5RbiYAcWnJxkv28SxCL5P5RH1tq7fVGYzC4TzjcWT5siikWGLMWgHec6fewPZ",
  "key31": "j6dJ3fYvsnA92RHCnRShKizreneQPNijvrZkP139Rf6GfTsnfmXYpdHf2xbwUdRv6fvRAtfm3Bz2NYAU6m7Hgk8",
  "key32": "5J6uoZhhVtSqxKAKNz8n2ADuMQvQjWwjxMTFncXS2bkRLEvLTdgzxS182eyE1DB8fa5WQsMYqwVbdoxpDhfykgTX",
  "key33": "2PL97VThqnHMHfhHCJdXdySufGv1MWCyGVFsc5AEDHZm8Xi1W3qyUafku8kppmyGkXjZX8vanDeU5TkP4kpqi4k4",
  "key34": "J7ebVqaLQKW6WuWySpux1XXPe13h18JkZ7vV4cTYZ3sgpqgsbKUZu2fx4RXG6A3cXNfr8MmzvBUsAYeQMuakLmo",
  "key35": "3cQhthgZFuTk43jntwXpTDqUxxkVGDXtak89tEJaLtLZ2Sw9oFJ837YJ7rZvCprx9TUqo1jueSRasir5vDW7BF4x",
  "key36": "4mKX9z89cvFbrsHjsusaZyMnfMs37jKKebMEkXLy6dQoNHupvPzCat9ftMGBmssnGhdVHu3jYcF76Ji1n5yv1DqK",
  "key37": "34wKjj5wuiJXMUwiDZjWwfVG3ia4iRqRyLL46AUAnpLQ9Dwdtt1ap4rAM9srAru1Mw1Mbzcd5qr7uwW4EMsPC79V",
  "key38": "Hvzpvr2qZy1iJzvjnyGqW3yR8DXswr75rMbFCXktMe3DeSmrjpoeFJUdcph8H5FdgWRkvzWqqtxYwzSXCbsGpks",
  "key39": "5CR8jJL4kf96awRMECTbjkXZzPX3JzwqUuwHzpLDaMyMssuJY72VXHPEB198pPYKXoxBKbjunTQ48m7WZZGnmEf8",
  "key40": "4i17m2athT4kjB9AnJij3dnBY5dyPXQcSGsek4hPNs36uksSJwZ1MEiEY2CGVHPdccyGnChiEr5NyScoUR87QcNv",
  "key41": "44sSmyteuknYLRCq3QK5PTcwUpphFFGUGJoQPt9c9w1suYDDGLvbK9KSZJVRrxoeGwBmo5PHWEb6jTu7MAiEptrP",
  "key42": "Kjd3PDHqKFwgKmsBWWJAFGaiVH3HubMUhdg44hpbtg9taCHyMQTdeKJ73pwC98VzBSzioa6FsDr4PirjYZ36GGo",
  "key43": "7frSJ18t1rZA34dE7nidcREE9yKJmVmbrcoBz6rdB3s7LhncWqa11qw3fA1Y71pWR1NNnA1Kf5crvCXKXCUXoJK",
  "key44": "2vb4Pm4NGfkVYu3cfrVFCTbC4deJYGyv82LTnWj2vt4Xd5eh3yB1bGcnWmBYnaxrQRWx84BH4ueqhmtUi1gANynJ",
  "key45": "GBDRcpCdBfdUNEEC4BXwHmt7YuT71fMmUxTREMJA5pNMrK1ThGm36Hsj5H2dQbiAKSnV7rariaFsaibb5fM4uqY"
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
