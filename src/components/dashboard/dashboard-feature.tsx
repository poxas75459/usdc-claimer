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
    "31oMXTcDtof9SYpcTA2v6kdVrJv28qanFfydaMtXzEurjpxmz6VVv8rkjUPt1ogwwv2JafNG6h6zMeowihC3KArX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2JUAMBSKAa6PwgMPQBVuGKiUey6yXLwifGCrvX1kTC5raFuPzcaNtxFCmajGaKMgwiqyhm4yt2oDm99iRyyWszvT",
  "key1": "CooyPZZNt49RN264yqJg13mCszAHDDJ6KvPuBnC4u6pWdDP9mi9ujhHqdLApGc2KFZzavpdNi4prpRqW3xwMUnv",
  "key2": "RDHinh3nmqc2WciRXJDtMrQS2ptAg9fuvfKenvXmekSqzWM3zDMLVnyM8cAxtpHhmNAZQEVBSsicDnd1pWaVyZ8",
  "key3": "3MfDoKFwTRGFNRPAjgGWyfJj6AznqU4hNhyz6QqbvA1T7ohuN1YTcPzNs7fPmp6m6thmhGqAPf1kPBspwKq6b9iL",
  "key4": "VzWYrdvs52Ea3KLk6XwWovVL6J56CJSXww9yLRsL8g2LqneofTiJPGAi4b37Ub5vp4V7ae6sBrCZgoFQdGErctE",
  "key5": "55nHPoTJh9jt1K9om969iVym8g6JAvsEbrA8iJsK4F2TsbTtQDpneBFXNcxbLvjoVyUdaU45Hb3U3yxfKkF9XDY8",
  "key6": "2d2QyRhhCt5wHU6BN5asHRxpXWztCfiSpicQwTKDZpyRED55QNmWMCkiYJXg11B6VgC4yPHo4vwf7LKsNyi3NAyE",
  "key7": "4W8bqWMBmii9WNfy9pU58ojdNZtBgtA5iowgExUpUz2xFBE4mmvHgGbEsNKEoVJUVCN6BXwBqzopxJAnmnZhm951",
  "key8": "4L7ru81BQXM4FEBwTsD9SuoP9pSt9McY3h79MLdBZbJugfmNrfwVczNvjknjiAXVRXr64CCXL5LReRWoyQz3MZ1t",
  "key9": "3Tc4exfbH4wvmL5HygN8CoS2zpoRYrmDu7qnJ7hMNKA4iDR73VYP6sA9b5ZHGsv2MQJYWff358SCuMv9n6i7TjMj",
  "key10": "2xhxta8ykMWgsg96tyBsNQuF4bZSyAZKhAjQFY9ttkism6H5AX4mQRkv3ZeB5Rrapfq7uxHdL3h8qJ8XVTG12znS",
  "key11": "3zMrh4B5Yd1iNFwD9E8WaYKpdSEsyTAZzutJ5mGV263yRfEzheVLauUWbqGJxX5h3AV217XNdc4K9NnVJWYgt1zv",
  "key12": "35rRMcH6UYF9Kw63F4pQmg1HPYo6Y2NjhFsRVhBK1UcKZDPrAf5UjUKLNimsHx1mCmpwjP3zjy9ayN5xXTZCCBge",
  "key13": "3HnczXWAi462SjaisF9XgGui2yCPCDWJN17AYNJjE2HZN5SCA6YDYTq5hf6BfUcp68PfgXfEkJyzyjcaYmfmDVCP",
  "key14": "22yk1qLSBMhdjZuZsehjsjSNcpvXp6RmDyBDif7ZWTv987nWG1aPbyeVXMgyTJYDb4LW2mJBTaMHqwtZdCNTxpkU",
  "key15": "5DBxWLyegrYARcVbZwT5k7v58zQBhn88mWZpxhzhGuL6bvTVUaoTcbhPmZbYLVJTNhkXubSmNLWXTR7nWuoLx2Uz",
  "key16": "3BPLb8ACjNRzSB5hFazEUwFrsnVouZy337tVX7WsGKBPwafBJCfEN6G8DJii8GUwq6VS6nkVFAgL8uEsP8t1FKSk",
  "key17": "2MM1ven1mJNFoLmZumyg6Vbz5bjWEnhCnJXViv5FrpeRiUGTko8AvKd93WHxEmeeTanQQXUuCLey1nEzqjDcAt9v",
  "key18": "5QprTZ1468AqGoX52fFBhTB4ner3JrWSDEoxKoYAJQRJnZDTqffiCRGufxwdyHgpfwV92RKYP4f7PqHmpDtqFPof",
  "key19": "2M87uWWRUiRE6bzjfzgtbmw3YZHdW6QYRn36WbwTnuh4rC4PrXyKHF77t998jkeYssfg9b6Pm25mLZwGL3Ep7srT",
  "key20": "5pjQW7LUUUcfSEe32RMj2py9bKnA1MBZu5XxgPCHmeYE83gbJqbMECUqaZTX6MyCgDWVwSus1tLzSu9bsviJe59M",
  "key21": "3NvRVKmAEAafGxAoGeKYjhBQFNww7bfWr1ySVQ9D9NBurSQMuYnEbpHZfWJMuZXayPHtxteB1VytirisxiBJMkNy",
  "key22": "FC2pFScjq7zVvaKHEzPpYUUzorz8ETnPQUgYfct8qcCpiUnW5LFe6niJK2xA2gmM4USECoHhBQfiRiC5vtjvjo8",
  "key23": "2vnrSCupvgV6oWoVw8PadeV5PzCgGycAr4REyeyNgFCq4gwEmU25GbBVpWsaaJmdPTHmtsXJnX37UpNS2A9g1jhc",
  "key24": "3MFeMf34GwKAEwHqGWeExeNZxSMY3t74Hfx95hHjPJ3YUTKBbRhkHNnMb5CtWnz4yW8NWpFqFRKmhCZTn9HmAmh5",
  "key25": "26Py6aSfYasBYR8AwxHLh74KZZ7EWyrZZAuHRQLvG9rLqZuNRX3F6w5m8uf2upYtNdB9iQitDU36LfcEnRvd7Rom",
  "key26": "5FcF15ronLq2o1adbvMtYQh77bV1CuicXGxqt7Aw1gGpGQc8spQnvxzXAt2nm92eJZPSV7QnAkxyRiw4BAx6q7eN",
  "key27": "pcphEGKkLFuN9ME7LHStSa1U9mm7Tu7EUuSwAVMniRffJNYHw8fEmRPzbMAoerPg3sSUMZx8cukfeY1ba81rw2d",
  "key28": "p3PZzG9PzzMocmNf6C5MJPphxQZCq7ZzkBPQwDVEbmLHJzUTLV6RMHRS1BWJinuZati7Zd5LrZvSWCPnggWVMVY",
  "key29": "21CdwZgZ17TksWUHbi879o3WAwEvS3kiRHgiCjuzXdMT8pwhJ1tE2UcEMsjLCuau6gwHN1oESe2J56FHPrbx73jK",
  "key30": "34FoYavdXqzXAcRJWL2myojceQ5XyPktGzVb5nmfcs3b8Lbg1zPWuDuSPDCCpH2vuu3srcFshG9fE6NGb2LTsKXi",
  "key31": "LqpiiQ23BrP3ApgThaZXKEMaMoNeCfcJidwedSqd9DYjsRZ2YqfSqKiWK7mVaVnesjHzJJ76tG9dfrQeGJD4NxW",
  "key32": "3yXHTTmpQ9WHZXAav1h9y8TbVVfgb7tWuWd6KYJTTwBRrk83XpU5tNmSShP471c51ae7BgUEooZiQiDM7fmjSS7t",
  "key33": "5NnXGmzBj1aRvwwHgzTtsAGaft5GhSx9cjnpMSk7kw3pjM5FxwwjFoY56f4h3cp1kQ96xsD1czUFq9upRVaTmsSM",
  "key34": "597xcjmyVLruaJoRgJG2iBGmZbAykMztoM3RhKeMowBZP3Pr2sqn6WE2czyRnGRQQ8kkRSKuoPGRZpoPHsw8umzW",
  "key35": "4WQiPdJtyxUhH4TL497VzLUvxwrjMqaDcmjgeokqyEaN9tHgaSp1fwNo5tZggjnahEeny1RAeX4AJbRCrpz1NTi"
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
