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
    "4T22GFZA12e3TzL7EM3XJEUh9StumCpjYA8BzLPVuFZES6mhgCG2d1cg57zyg1REvuApj51YQqD18Y2SnyKMGcu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EdpPkLEKH9C6Fx9vQ4aCqqD4J8LizHozWTCcxB6igDJq56Au2967gYVcv2UnTeXEoNn6AZxmTAA7Tg9SvZokKVt",
  "key1": "5mAUanThuQgijMyM84TCQpN229UXbn1moxPB5mPZyLBy7MEzvY1QAzogvbDVuFrr8uJerFSqxwUbVP9mi11ZzJAu",
  "key2": "WcnBSg17udcdr1S1JHYRsseykQG6UJ3VBaXEK6J6oG4mRr2J9FNFzzEgmveK3a48CNKBb1MSvgNr3R1c7gKwmDG",
  "key3": "3TYT5mgjTDMBaFVe5hwZPegGi4L1ukXRLnf52TFR41nTqqa4MTzpJH6eesjLzvXoEN8pFBuFsrVNCCxe3L4yXgUS",
  "key4": "61Kszqx4Zvw3Cq4sHUXrNxcQ9NM1WQuyRBLfuEXWvsNm5JT8mYzgqw9rAezdBf6UohNZaBVc7XLC24M5iANwzLrX",
  "key5": "5v1dfmxph8boGpyHfT5s4cTXsG7gVDcNYmuHfM9z4Vt8pE6Ldt325XGJuX3ua1sxPPog3bbAN54WhVxS1extHTzQ",
  "key6": "3ZsCDT3CZstDZ6wpgTGMSrw1rm4baGaK18xa1ZgWYVmM6qpsaxh7j1hYdtfJZmKVfEsvtstmxr8qnYsHpRsF7rnj",
  "key7": "4tmWZMaHhg7D7N2JgySHfDMYn7VyTCDw24trbySrZWKLdXyCWh5DJqiYTveSyP9CMgCdpveSYNHPsme6uPjUaKnz",
  "key8": "4g91V9y5FwJU75MpQMexMeg7i1AHXwRUaFJ4YWVoUga1kAKA8nKLGwXq7vcoi37Ad75ucd4LBjR4CN5WwQqDxcu2",
  "key9": "34a7MB1XPuRgJRjqKLVrdHF18V8xpVDTvhu5MZgqBBx9FaRt9jxodkwiburqcSZmkvXPTK2iDkwGgGA6uGrAwqxW",
  "key10": "3Veh3f78MpGyj4yJS4qsPvi6HpvBbe7iwqPGevYbvi5trZtcLrBNdnm6i1thSC7sxYeZPPjcYdSejjCegTqaZ7t7",
  "key11": "3FmGsbS3iDwbANJfBoPCVxxSkfxriAn2CbdbdvbqXJ83y2XSeofDwNH2HAH3isst49MD1imvem9UN1yLLJXicYTv",
  "key12": "35AZibB9ZoN4HBpjJ43FA6JRejLaLZn95rEayYvQRGbWXytuyFvwyg2zufSpChgVfkgfWTKJyJLPfDHrcXnxFGuK",
  "key13": "4UrztivnSieghrkv9mxo5hc3f1ZUm4iTUN2ooR3mKQUJfRUw6o3oXLrmfUXd8Xg9j8DhiHsguq67xXJryoZi8ffH",
  "key14": "67ZjPbEJZgV5V7qVcqcLerLBW8nxEMVQZ4QMDxcFx6SfVUARzqGjzx4M6du7kHfmC2riqMa3HcNF8feXwXRjPmyg",
  "key15": "232WRHnA3FM2z8oQyNw5M68VwprpBardPji8a1oszhnVDNd18E5sKUCAbo6BvcTFt6tHMMr9t47AqsMsRMWPxopV",
  "key16": "3y4nX3MMgKbTd1gwYTha2mvuMyaWVhgkpF8r6U7iMYSy75vQEzWwkN9R5DTZc9wKYtpGM7JhJAoPMdhQm4XxsV6",
  "key17": "Ctee5af83ZxsRxT7XaR4yeCcm5RP99th2a9AZBt71kVarqeUj6DrEPviiyRWzeUuNhexSZCBaGYBiVRbSjabtR1",
  "key18": "3Tr5b4YPVuwCZAjTs6BpiagB5vGyjzXQGESELFW8VLJDdosRc22uhrACUwNJ3EfpWrYTjNHQ2Z7Ph4CGtNEdUifW",
  "key19": "FT5i321UiJPL9vHpDQBCvbfWAYDnKGurL2GL1yAFyAGXp35acYAdxzoPb6cfPQ9z4nvdEdwNoM4t5NgC3ucugZu",
  "key20": "4uurnJSFPoEyZ1At5a1zbzwBPrdXjX8GTckWWwsYP4rF3476wqMrN446Nv4uN3Z7HHL5Xa2wZbrFMaG8FgUzHbE8",
  "key21": "4rStpHGGEwreuiD465QecHYtSEj8KaU3dBBtrf8tLRTk9vGbLsjQkJ5WRbG7NFrfEvwp1vB3sbD6BH4udVE2Y7je",
  "key22": "2B7AjJTKJtKN4zksbCpVcYmo8daAjKJVLr8qsu5VubgEvhbbdghVQ2jpAYYSHo8q3xUqHsMSVc8HnfKjsXB3pzdV",
  "key23": "2Jz4aHHfkJdqciuWA6ATvMAkCrNZXhDSLvWDCeDrhMpX15umBbUwUJAAt2JMzTew98X9bn5Mt2UzdAb8g2VX31Pt",
  "key24": "3GJ6qsmZgHMa3ZuY7uHxTo5DPEszEktQyqdZy9Agkr4gRYtH9VSb53oKakoBiW3wMfu79GhwmuptcQRLrtMHrs14",
  "key25": "53mzsYbcvgj9yA3Z2H1qS9xgu2AXb82D83dN6yrjL3uoMsPQEDNH2n1B5qZj8c2BvTRSJYXPLx1n9SyAqg3nUYnP",
  "key26": "2K92kvjF5Wws96pAqPULA3d6qkm2h6d1uEZi4ekPRLRF9dnM7pcSy6UrYQJ8JLNKZ8RD3UyNX845EqQfC7mixtL4",
  "key27": "5rwb4B65G5TYvoLJr3tB6QkzwxiMwyzqPUbd34ZecxecsguSJPxxwA5jEcGzGFcnuh9kfzRA4GjqtVsokhhJKGnL",
  "key28": "2PYj1cBSDM4TcuAsWgiFJW3gTgJDKDDYzrStdhoMfz92BVa2vo9pfq6ixJswZ3q5uWQQfxQ5Ec2WVcEvDh2ufGCq",
  "key29": "2iYdi8HSaXGjBcVoBzFnQKyge337M1VTDkwoCLHEPVDFHSNfFd3wNPTkb1tF7ZatRNocJThjFkm1daDzF4JMKAP2",
  "key30": "3ihmxdFoy8rz3YtdWuY6oGqmLJHf4Ff7VHUB2VATEypQdPCEHCve58UogBKMK42FB5ZZtS3SFwTm6Neja5GNxNky",
  "key31": "2JvKWGryYaoaHhryy2k6PMM3dZHgXDzdnkmHh2SzA9LxhqeLKgXf1wLECcvUi2RwYpmitxL7YM3VMKbVWvsbFQJP",
  "key32": "4ucH5dYuM8PhMHzDLF1GN5Zb6TFPzf6MxTDssCzg4dQMUuyR2jCbgaPU8pEDcKYsSutnekvkC1Qfwe6bMVDz7UGj",
  "key33": "5k4PAFuEDWkT9EwnBVjoFHBtsgwkdh7m23Zamg9j25qrjKFohp2zmo8pmEX7HmUoydYNDNzxAxH2zgw4BHtiywTu",
  "key34": "yb5FMLKcEg6kDEJ4vpo1rMCLrou6aqpAT5chRgmnjYw3TyRHLYtAe5rh2wy4MFXL9YnGyByhuQUbiVNc3CLLvHj",
  "key35": "5PGSoGqvnefmcnntA2QucfRvLXkP7boiocgHXFYAS5BFBmiiLtuVVmBEwSeaEGyHrmvN6MqFxWxPeoRMWDhmCuLJ",
  "key36": "4QyxeANwh9tE7FaJFS1bULdsx5swc2Zfd3Jr8N7aFfkz4TAdodwrBC7QVmbVoynq9XB5eN9vLLs3McBB5JPuKNiB",
  "key37": "5QtiKPNHQwxMHddr9tADmnKUqLnca167Dze84zr52PkocL1T4Z9H63W68yx9DnEhucwV9UdYgXHNK1hLqs81MT75",
  "key38": "sFnvvr6uTLtxQaWWpb1bEEw6mvUnf98estjdGvi4D1HFaWETxsRhh6W1AXGN8LpNKzpfbibapVDpVgSAQTRmG6f",
  "key39": "5SgVXx9iMeRg5fSi1LztJdigZqQXcKTxJFuNf65pqtKTkioQV2aVeZQKFo4A7gXdeAxQcmXtyA72Yb6WJbF97vzC",
  "key40": "4HCfBqXUEG3gbAHTj22NQmSFF89jJgPugyjGTAX3YtDvPaJLa3vMYYi2CnwMFyQYcsVMqUoPxmJ2uk5FP5Ytw9ne",
  "key41": "4ftTsfFXSutmbfko6gwZZgzrU6XGDNMHte1idKS9ctS3iYaiLmGA8z76NpaoJ5MZKLKQAs5ZkdJFeF3YSvgGtMXL"
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
