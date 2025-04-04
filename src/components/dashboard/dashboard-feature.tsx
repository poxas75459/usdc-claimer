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
    "4c1RWdmjoex2i7XjT6172RJjFuYvahTiVy3nMRiuNncJbAXV4G4PSKmhrUVuNSbD2izLWqTauqiu5VgXfm9XfTo2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3eLcQuXuYAELEkiq6Jjxbt4VihBqGoLMezHzanJQWkGhQtJzLYkkQUtTtjT4moSB52VnU2KmEC3e6tgxLqsPJP4Z",
  "key1": "3SaEVy8875uGw36yMuEWyCmfnHLCMzJDc2xwfNB4hVfGaEJCAknMTddkBhpG7DLc5PY6jVm68swnfez2crLXsgCq",
  "key2": "2YTz2FzNvs7rgUxXbXhpZxEPxsB2yMgGfda3mgSdhZmm1asp4NAxMmR2Yi3MtMT9zn1TQVKTosojtSbcs9zg6E4j",
  "key3": "3eqppJov9UMYfJttXRvuCoFSpHRs5egTU9rJexEXXx9fG4toQ9vtYSyTsrw3nHDgR6zrNf1kDgJgWodFFhWymNNB",
  "key4": "3MEAGm1rmWrfaGQvDZ8uUDmVZjZjabrEwZYtaNBXnX4G5VT8sq7tjH8u1W35zEqjdjHeUiEdNyBwHqo17qqaEBY6",
  "key5": "3MPj5uL9o3uT8PkCJwLC9n95yTBnY23A8jwQh5vv737s72asGd496kSuzmtVkui4Gb1oVTX8VNMV1rxfPUeU83LV",
  "key6": "WTy731BoGjz1XJueSuxfxqo8vA5BZ1MXmFTDrhrXBcaeVCH34ADCnXJe76NoUtkhsDcX3YEdSGn4amey7VFSRfz",
  "key7": "2grZdxfnjb7yR4aLJKyQHXFvddpyav9vmNTkKGcMhxXDs26Gz4RiMPYHCU2HfexuUTcaRR5E7BCznNtUZiQqoMjY",
  "key8": "FM8pAdR9yT8svHYhrQ1iu2wfnJzfX89YoQQduYXf1pskrfEsGUEDuKgGnVdaYTWBUAuGvgJTJKiofT8HajDa28J",
  "key9": "3v2P6K9JcokD3LRmZhLs9YWFsQ3Hek3ukvwPCm3sRHNmCp5KHqcz2mBSfk15oP12Ud793stFKtxwTMr45optgjjw",
  "key10": "4Mm8caCEgmwgBhhcui7MJNpSQhAZ4sx5WWC964UT8L94Ks8He87CGtMWXPG5b9Q7nSNmsDt9YYmmbcyhbuPKkP28",
  "key11": "2wsQcj2kfz6sf1FzoiAiEWQ16zpv1cTWNpE6f79iiDpxkx1xub7kV2qMvnTsu6SSCJ7hoCkCf1WnhKX7QHbpNSxa",
  "key12": "5nQFWTK6prJEetx4GBP5GEymppzktSpAmBfoSSfdidvS4uWWAkfVWqh2C8ir4f2wea87ihyz9NUyQPd6DbLX6rsg",
  "key13": "61LhaDBBQUVk2pvyJmD3yPBvPCjMabUNPM7Ufvssexs2YhcLESDGKNAqybn7WxGFLp3SU7zQv2GEAWPaDy576V4Q",
  "key14": "3aLVRvr9pNCkq52uJYZFwfmo5WPNDm4kDWEkUWAxwWjt5rhJL8Bvrf9T17hKLoHoAWcQ8dtfAVRXTMg29MoWyRv2",
  "key15": "KDEFASpDcaWU39p4AFm6xB876GDmAcup2kuaNkwacKCdFfAuR7stEgmm7Ye9F51XHGUz4EZgkBB3VwLKe6HrZmJ",
  "key16": "4jJAHQkikaBkUGrsAhv8uHHJyZJ54SrkcnKY2AQGj7fkyWsv4mHv2vqgcusBUd2GPGEzsEkRAX91VhY477TYH9np",
  "key17": "g5hV5ZqSGwbjY2LPU1mqSiAZnCtCDSxFL2feij8LCh7GTtkaySshVn1EfgPNXbNaG1EepXYMcAZHjz3Tyk8BVvw",
  "key18": "T7ZAucNujCJa3JajF3wHWuyeuKCsNHAiXLmKcbxoL6HVKoDq5kBDmDUdNEZNyGpZuusnr1eTh6VeyvM9ccwHnkz",
  "key19": "5dThVeDpEDDSLmfYMaBKqc9uhpGV3aUPxdxaB5yT73G91BPxy3d9Rw9vJXgKA4eAy83yfHMx3enw7rpE8jqrtHRX",
  "key20": "2FHxwFmNpCexe6CGjrBJfTV5hvaunzPLed2zysPJZH65hasuZg3QJQHPx3aANcW2WwihBGE3FBTieKy34ks2Eh1y",
  "key21": "5zJUZDs8DVfm1C5KiX8rDNru436q12mN55LGFX9QCQPXDnVT7REcsYxuv18LFjoApYKQSuSiSbyvMSVRcnwhGuNc",
  "key22": "4zhPfw28p1yjC2okgWRdQREaMB3fXJShLm2yg7MJ24E8fxzHzmX5jSxrMbhdG9ueyEmZJ69ZaWpyMjh4ZLbzZBgs",
  "key23": "ykf4LgGbJKjbmeYBJ7XhE6y69TsFThwSyZnT4jFatXU3nJHAvRzPfjDGTfCJZJzsTqHs3wsskEoNK4HpbtFE4j7",
  "key24": "4eZGFSQcUhFPpjXbW8eDLMR2hRAKAh8jUZzqeJUtcuVQcuY3wjM17uokNgn7JJxZBSXQpkinW8gtC1jcBX1qzjrd",
  "key25": "ESSsHb6GkGnZPUyPUCk1VGo1tA1B7EEjGAXu3LZuHj3tNKFRF9bEa8uXeU4o4wEfExccPjfnGsggXwaybCiq3DA",
  "key26": "4QeDHbGG1e82yA3vLmqPK4qrTGrqLW2WoMvd5CPLCepTvePywjq8ygCiAbDbqDRtJkz2Y155GKy67fyVKFLSFxhh",
  "key27": "3bLGavgytTke8q4XrkZUttCwDFLhfBVzS19SPdS7sVcXDhS763UBgDTcqTKomZNpdrvt9fA5h5XRTp5cgbMuvuy3",
  "key28": "4e9bbdPRyiNEWxAMmQFCVJzYgE8pMb4X7aVoBQj4d6psRNfWjbBehePuZZxAbhPwK6RtuyZcb6WCdHfUeGfsDBiW",
  "key29": "29MEyCymDCvG9qq4Tih9sRXgWjKtLiEiaHJ1hbmRYCjchAPW7RTbwxkJ813a68avZihDAQB8M6CLpnwyFqGFWbRw",
  "key30": "3GmGvx5nN6GaLe4exWZNp56ktAgqqGDr2jXbr1feGeQnndLZyajdkpMDJXPyKhTvwiMSMreCb6CcpkfMYzXXC2KE",
  "key31": "2du3J1trGBstFF2Hsy7xnHnTG6d4KCNNRucGBhtecF4NAJV4MUv6tix1yzztmNnCpWuNxMHP6vXXajRBo3f9e7wT",
  "key32": "3WGT7W5zpvTi27FEknEgcAaRnuSeHzh3ATWgWNJF4mcwfTqiWCcdJXnCvL5attS1z5oR7ges8dmUifdCkr2qtEoy",
  "key33": "4Q5h6E3KcVkNKDo8M8SmaC5ZK8V1QyhAUHk99bNkE1x9rybsb2QM6YgcjhvTcYZ4EgmABnZWnZwP1RrVQunA1ASS",
  "key34": "2kwHTvJpJwq3ruTd4WX6QCBCP6Q9Q5ckcHWUpDxFo1Mgv6UH8jEp9cPKRYyzERbjYZEmqkrssmEweVWH5DrXikQ5"
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
