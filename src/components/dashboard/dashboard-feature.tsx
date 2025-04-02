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
    "2ecH4YWvajgj6kkAWSqtMPxpXhWbQeALkdwskzbvKh7CroMMGgTKV4HeQ5VmKvw8kvZBvdpoUZ7th9xMHiiP9bH4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "35TrgqZLDQJBxE7c3EHQSyqRdmLtYGtLXohFcfZjadwnKHdPUshUvAMn17CvYdGjEPBcSvM8Lyk8AjJQLrSuKNK7",
  "key1": "21CBLgFmjx4twVpALcSvBNVoADuViAyPP3R4anbbUJ1sFK9ENXby3HbfPJrWnoSXMu3DspMHeUWEC8V2J1KymvfX",
  "key2": "55xsR7NQ39UvbrQE3C4DksGNiuJtrshEp1KTeEHqQ9n3t5ezdip9BBaEbjBPgMocPjBAipAZqWQ6qF7u8SQfZmtD",
  "key3": "4wxFnaMojAQddsaz4ZmRNtbQfSYRi12ABgZfLZgG4CHgJZP8EyRDLZHLChPnEE8BChMrVU5aiC3Qf93jhZjTHyKt",
  "key4": "A7zjN2imbA27QWBDjfSRg1qDABVwEZHK7MHtmboGtPT4ThVy9XbJKrZUAjzbnZinJwXSJRYKmu2DvHZ178rgkb6",
  "key5": "5RnJybUtPZQgje5Ueb2JmNM4AE9SDMiQ2Qfb9a66gcLeF65VaTZuCLZFe4ZgE67jiDQ1AzWJKixxcF1AHAaVjijP",
  "key6": "Fem9M2p3hGA2uz8BsVqWJA5ncucSR3WDAC9Mq6ysCV1QfftHYUNwA5b9PFD7cXKDKaVu7amJwSaLu1zoDR7jvHW",
  "key7": "2QjYX1SukN1xGBBJvXdNmncefnWunSEnYF2gbLzyG3rEVdmP6PsTQNcRPV9LC9erp8CiadYL4cXmCzTXW59ok1zC",
  "key8": "5tXTHTHLkwCRkikXQPmjZfwZpgPC227BZEaZ1441gd163JkLvd5YwrbYCEMBuyTcdtZaCPEiA1QFsScBM6j3DdSJ",
  "key9": "4Gs9uAYUAAmfRwk5fDttBaff5TDWQr9Cor1YAf2N55hbuD46i9vh1HeiDkFWvYSfMz71vzxA4CjCMpSXRpwQuywU",
  "key10": "3qF78HTX4Mpwn7fCv5UFtnrDMHGSbU5VqkgL3taXkDMZR2VMyc8ssgP6oDWTR6FuJBcXh3w6pGsCxhsWp1KTY7so",
  "key11": "2WQahfSf5aDsCtWui1tN4F2LyyiyBMswpwp4L982Teynbi1yWcAsnApVrdTY7FCaTotQtXzGXpBzaKhxMdphMWvh",
  "key12": "QLPkHSv63GAoe6t3HV3UWXW1P1ec8TP3MPRmYV8nn3XM2okWtnSU76e976prnmdHjmSmZFUbKq5pqB5wzDWBBEL",
  "key13": "5694jXBQKxsDz58pk4uVAQizVP9T7xEdybLe3gKgRrvTWTn9aznZEZEm5a8QiYwbsztq2kqhTesMiHBhV2NCmcU5",
  "key14": "2Zq2fgjw7GVVggK98JcBr91pKKdRrthtDzLNhp9WM2MityB7nw8nYnYJQC5XezWHSXj1zdW8YekLE2ipkXsQMHAt",
  "key15": "2MFYTRd4JeZXrJyZXLLD18A7FCyuXSzZBfx1t8rdCM9pq1MMfQuMxfrmYssdbrUCAVzyaRRJhs9HemTGaBFQoDL2",
  "key16": "2nxgeuszXTTiKyCvg3vgBM8HzGC1JWLSr7U2oNdz1qMBZN9tMbRGTFmcWumvJGMWREw9dGhA2U1dDSG1V5kbseDJ",
  "key17": "4F6XWhG6cn9PDQfkc73vpySWGMEqfefkkdadMcW34F2eXmnMenvLuZhUKgyG13NZ6yPifwgdLArK83Wkmyvmhj7n",
  "key18": "25ohoMuVjzvtrKPhiVr1KrjRv3g73Gn655WzN4eAWYBSHerHpYdcD6SdqTZYzVp3UBo4Qfnxe8T3eDg5vdA6iHdD",
  "key19": "vwiujzXYqaWZat2vvUngMhBEbkNhBEF9xbMvRzD19RePaw3Tke3VkjGRkBfwYms4CviQNreiU6U6ZGDMKerM2zL",
  "key20": "3BidMPQq3XuHSSnAtHuWC3SZktCs4o7cCS6g7e8aSpcs7yVrg6k7oe3FASt56KD4Dx6U1e6MroGT7pvRxxx69n5H",
  "key21": "2uxUdahVTEnyZxdLmEt9HZRBseJ8nsUFxookjqgvfrnNKyeSMu6qxmNGEpg1Rwe8jaU4neSAjsHN68MzFmo24N5z",
  "key22": "6vuEeWAQk1ab8NCAkZC46F7HS9WKqryB19Ax67P9mP6QXsxMHdTnE5jZUyEYGQpbsadWKhWkWA6drB2akwVcV5r",
  "key23": "34TChf7TcPxA8GgunstgPnuU3rqEq6Bh5egCznqDitGZDDmLXVn7mWXqM5z2daTfz5bvVkuUjwPAq3YBH2z1g2YP",
  "key24": "hfBftE4QqCuHfQcukt5DjjgArvRTvDPYzt1G16Ddgj48WiB3W3RmsEySppCA6EGZu1VHuw4brcZihRV1HaMuVoQ",
  "key25": "5h3UxztKSrSyTxJ3Kp4uvfYYCZBLkUvRYVbhiuCcZDbJdeEGXAnxWJwLpT23kKPB3hbiUqu1gPjejTARQPbjjopS",
  "key26": "2ydijf9mmDAxRbA91TSt3kExeCD2SHYkKPPvRNJV8EDmWPuxSTPBAuyAdx3gpBy5ab2ZPsPR2xQgyweLXtD5ucnF",
  "key27": "2S55QiqL3P6BvzEeFME75Wnq8vrVnN7puuGrs64Uz2eMhdoh8oV6gZzRsbShqXwhD7jMSkniZWRKPR3ybxNd64jf",
  "key28": "5boDxkG9kKSCKbbB28wjDwKUi6FBajpdrTLxc8KWxpbZrLEyFRFtfTZn3nVuUVk9ioe4BMmLCQY7LNqLB1j6QUyW",
  "key29": "4H9za1ej4pjfQMYvinEegfYi1EZDoQUZqGgmFKVrAtYxQVAFQs4XR9M9QHMuiRPn5ybagDziRPgnhE4TmgyJnG8U",
  "key30": "2zgroKLYmk1AFJkAEtDEn726S2frGVExmKoPC3KYMtG1mGJXinP1yfHVcLefDv22EPodfeoZ2RJ5SVgrjvnjpfMd",
  "key31": "3Yg8fnCKQFufEZFWrJmNkd3uXDzA4g1VFAazMj4RSnkBVBBq5Cm22F4JQUd59yCSTaNKPc7yhDKWFoFYrt7Vzmpe",
  "key32": "3iB73hTFEQS7wkreCxyuWfk681emr9yLE9yu9TYgFoDp8GKb8qtpPN9xGBRpU97WRxnrtfW3uQGcw78kJyTjE1BY",
  "key33": "Mt4BHBjMADuDRbfCVNkPhCe5semUD71Ai93isGr5mZx21B5wPEwyMbf9DA5Ush9borMtpcEjUCHcZWa3R126m7S",
  "key34": "2eoTQuyBNBXvsyJQgUfyEqjRm1myJDR1iRTmafpzqshJGUX2GTVZsCNugGQdZEAmbiokuwbK47YwjhULM5Zfk35X",
  "key35": "3Uu4vFSkaMc4ZGs4PCmUm8oAjR5wQqPYq5Lm8DhKHahCSABiqNnsnevCECgn46oKJQAjQSi5E9Vk6JaWTXVBMp8X",
  "key36": "3zD64dJugjPFPRAS7ygZe5drPQZgWr51xAmpDu27xWAbPbVkbYyqhUdBauJyHm7is8vmnByPQhjixXFmxUjjHv3j",
  "key37": "4DsLZe27RFTCkfdAoYor4KHMM2MfhzPQeS9APD5eDjkoiENCcET2ZerDKkRtZ4viWiWTtcHaR3wZoYWCifCR8SeU",
  "key38": "3n93QsdogobbNFbyNfAbVg9JZsADndyRfrawkLTSZezwkjcWF8CtodXDD8J3cAfszpzdpAzd6TuAFxt4DFcwUD3m"
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
