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
    "62VtrYREjuTt111shKtmwLqaJqxPhP7Roq2t9mKrnzTdTYTCGvQMQQagZ9zMgRCeV6kFz7vN8mhC2vCvqdffbiaY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4KXGqQ1pxepJePkzbYA7H1hwEXSzgspEewgD9yeFaHHhTGyZLCzfVMdHNHxh697YBjTQVUAcBvUBfbtjHPbQfwvX",
  "key1": "48hgWb1Hx5sCMm16mZgoU2XQMdTy2sBeMRw2va39UHY5kuHtjWFvZbnpkBsoGN85Sd2HMRkwyM7cK4jFQKkVXguh",
  "key2": "482EKKGP6fPFrHHi2EghHiPTTCAUCU4xNdkJxVNY44XsG3Gmc7fwYB8weFHHyVyJmLtvdswUTY583qduSry6i7wc",
  "key3": "oHZdLvJxFugKvpGxjzJLX4XWtRdMdJw5n5PSjYJaaxpeNWr6SvAWzVmiVUVL9e6uPH5CKH63VWtzY4QWv5YU6vm",
  "key4": "hRNrnbxHM5brdDdtKKyGmjhYL4KpubQqwD1eBppASVnZsMfpwKpNCiAbDcCP5Jq4E54NhFB8L3qzY78dfC2PhCM",
  "key5": "414p1CoMsx8QNN4pW7525wowNsySFgeyybkN85hj7W4qKsuVUKvT6YgQmzFcjzdCP1qrP4EzJcrrzU1RsB5quPqH",
  "key6": "3xkCzebwbHuZEERudWNJHHNELb89y6PhnGBqZwZz8qTSTmaaqsm7c8JLo2qoPC8idDZ2N39asgpRTfDXToeQ7LEA",
  "key7": "5MZDGQieypq15U3me5y8Wn2hj7UdMDoY5j6gpzEYgwhcPzEuuFmpfTxa9u4gRXYbQc7cmo2Lxh2jsjeKzG4G4DMJ",
  "key8": "3S39hY77DYzMysUFX3r9MZPr93VibcJ8nJXpXecz8Qpxi2i3VKLRjRQ4AXjJsjPRu4sGFrA2n19eSQTPsckPwNHH",
  "key9": "5rQsg3L9fjuh3Do5prx83cum2BNiJK6mv6PBKBzoxD3uprJERswM2LwAWTrsj3feUhVeoVBGayL1o1uFCFSqZKRv",
  "key10": "4KKawrx8uB6cPgVWR6Ejzg4i1REcxjzNpBjcZLVk3pDaNvaYim2DQ1RuQ8YLWQn6tRRYETiRFyc9hdPMMVtGrwiS",
  "key11": "4sPDEdLqzKMnu5h3pdmnqGSri5t2mbWTewUxLDAhrXP4D1rm1Ki4U1JcxHU8Eqsd6hmVToSYaBNXearfXu9aHh6z",
  "key12": "2fWQYstrrDDWJudLSSKPjQndikTX2d43MfRnZAeyVBVo4FaEoEoB3HVtH3UWZtCWmze2uWNnFurBBVg29DuN2adF",
  "key13": "24oDVWRvxanGwQfP7nAuYMUnVAdvnrNSbw3JqQUhGWa4rD2LbLdV9R23EcJ9fQVN5hpo4dgCtGJefgB9sPEhBErz",
  "key14": "2SEPkRujHqYAcDdcDhhVHeAjkXo3dWAr4JKA3X5DmGnQUY4MZkUPd7XdwpsFV1tCPaMtPVa2FoqZ9EVQ6y7XVuF2",
  "key15": "3tGWs1eEvu2XH9Vm17Jm45mqNPWh17pSzU14aiArRRURqq1JRSTjQDcSHt4xpf8oo6K6KkRYbdjKkyKd3G35ARce",
  "key16": "2ZqyMEZxaF9zfebt1jaLSeHuBfCSE4L4cuzV9xSmnWcmCJdzR7YZ4wAQnvkAmFwyWhetB9TZ2WLb4aS2qDLMyE7x",
  "key17": "487cUFUwcYHXM4WNkraz9TJm64pgDd44fngDuBTa35iAc4NCBJZmSuvSZtndbEeDXRtEPC7xaKBpn68GZrB6SrKt",
  "key18": "4D41NqzcWhykRiyi8NZkqA32dqf1f8MCKUWy2hNNRnKx9SE5doV5ZrH8uZuhANWAwvtwtjaszt3TFmkhiuJVnDy6",
  "key19": "3WW7VEswfyDCHUUdz7Sy46nuM2j3Sv9H91xdsDdP1wx5qsLjtVyrofUW1QfeEgfiLE39n1QwYyQx1X8fqxLX7Wh7",
  "key20": "3cht1NsefMWzBdCzRMJ4TYvhGAFWSBE3wL2JAhtQVkgL7EuuBhntDeeTMU6td7EReCx6LbFBa5v8WSe62FR5NVUP",
  "key21": "4ZH2YdDdcAoRiSF9L1UKNfYi7YbG1pXMPAnSmWRN8L1MbWk865DQqKpp8ejgY6h48UBaZwpQxHAitnRQtqXGmtxB",
  "key22": "3FBi1EHymZKy3J6WAuiAPfAwveVL8x37jt7fp8jT2vgW7FGFvwZVjTHLCLnB57c38YFjfNU8fu22fxZgJhVqVia2",
  "key23": "3dDrePjb34TDtfoMF8bBJ7LZ6v4eZitTuKmAScQL6dfL1z43GxbTAZFPsLTqKp9FbDTBUhoHdUcgzSuLPNY6ZgtL",
  "key24": "3PBgW5Tpc7aNsvFvwFgYKKMmS1PQ3AN3TPwfyEfG6yoBwEYA25Gj3GWYonToHGmrmDu8gS3owY3kHE1GVDyoZy84",
  "key25": "5ofyL65ifvs6usiGTQvVkJut7wDF9QGGRyMHp76oSDxbesFTJiJUcBvcXgiwbo9iLz573agWU8L4DTMxuhfHmbqq",
  "key26": "3ZZRoypkLdN7UUNJfXJf1wKspUzhCyyByzAWMqvWHub7BJh6FxqRCDfGCioVx6ndKa5ocHb9gG33a2cnhcp4G3m6",
  "key27": "36j3wddefVFK8fbGrF2awct17yXJDRx6UT4VWPayyJdFWDch5MzBH97ifnqYaeWcWBpjMKRH4dintAJB9ko4PLTY",
  "key28": "5gPeYCjpXoaN28gFQFtw3LEaimxgojikNgQUDapwatkf1KwfsxmNB3cU731SErCuHRTwzp9bs5p4K8edj64qUfAK",
  "key29": "59HBNBL7Qut57a9FWJZz6Bpi6ADhZzRCHQ1W3ZQRY8NTAWzKyPCiiyyZzsdeKWgrUGqTPmh5axXogxzjutrw9Drd",
  "key30": "62sooVh7nBKdLXsHyEscPrmEe8yGYQwiX1c1xeH6LgsRS4Xt4eRHZK2iCvVDwNrFpHLGpyS5Ue51sfzLBUKJiCDp",
  "key31": "5i1DGh4ZMB3rkCNXWwKre8AAZ4qSSuCYfiWTnqr2vt8zV8wHcsiwCFQACrMCjzxiLMHM4f3tRyhuEQpJXxtMZdhs",
  "key32": "4UdNtmpeFDZvFQTPbtUPv1ohLF5CPj4HQV4oFycL3iS1JuS2RMondtV1b2eaupJkznJaXPRPYoaxcgCFnxRTsVSi",
  "key33": "5Q19Z3opAHQQtRY3YXH9vKJUkSaJ5xSWMci7ptPwuCMSk6WLv6Feg1iUQZ6J8G7gmhEFrQ2n1fCifpEXJZZKRRc",
  "key34": "3qkRKFbmWM2rhXvH9QLzwoJbcjorkPDXSEKdEgLSSdiVCoxYC7nq4UAniunosNuS5LR6EQ4NatXDhqBfbYp4gRv2",
  "key35": "4djV2o17KNrytvfyDkczwoC6wCUAFxmyQngwTbLyYvEahMGcdSh6ZTYU4zZx6aNqDWuJ7yXjeNyMSE31SAsnrofz",
  "key36": "3SfQ2GCAecUE4FHsLBgdaJ1DKyrhc34F96nmqfAKPR4oCFEBB6oQW15xbEKMURSJ2VjbnFFYVJdZMfDijsJhVWDK",
  "key37": "5PeF1kW2dB3du5nnRqMxPQcSmB56FYjKiQeYscxbG1DYT7KtauTugQofmVZHhZQ3SpaSifmx8mfjPz42HgQScUQD",
  "key38": "2cMiRVXy7u1Qp64Y2XpjtaoxA1C2ymPvcxLJc2P2dK3qrUF5WboAU1pac68NHdF2ygszdKvCjqegTtHYEyvMPm6N",
  "key39": "2dVUyuPuNkJpNUZShKtd1wW4WkT6SoL6mpK7NVmAxS6oVkysceJbx5FAmk4JgMF4Sr9nwY26ES2cYXyDRT4GqcBd",
  "key40": "3v8sTWSmVwmoBZ52SJHAXPj37eg461DZBhXq3yRxSMRqbQtSoG8x76Apn95S35TA6yhyhSK1uBr9upc4nnvqutA5",
  "key41": "2eSd6hJxMqiZJpxwDFYh3KgxMTD2DY6zxBSepx5pAZtFyMqx7qx14EmoMgjzbaNi28hMmbJqBGcZdGmVbFxB1RhT",
  "key42": "2Zutzj7uc28u3AfGEye5fiPETbPWt2hcSmCoM5gpHi97KrPUoSTyU9eqLjCxc3Mtw5cUCRUW26ttMNUuRtr7DoXR",
  "key43": "5Wd1LBwyf7Q3f6FSecFkpRpS2TnaDfAxHQxeMtjEAnk1wUWfVv87fi1crwQqNNx8Uaxu44RfB4YvHGmyeBWpaVui"
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
