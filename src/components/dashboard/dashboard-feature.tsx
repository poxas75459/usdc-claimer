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
    "4xX83p5CnLUiAEWz5GpocMmo9CaMXuKVg1dPgB4M5gw8kr4M6s5a2cysz7xSTKJPws7bFqCAjiNGor9kpuCRXpNd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MaTcx9kbb7T77iH7htGGGmi19s7qdjHX4iFmgSc7CPmQkiXgMpBt4Vff1tqDR1NLFABPFUUbhYyav6FhFYRXast",
  "key1": "5puCik1XYrU9GJaUZqx8Wj4fiNmHVajHHtjbyeWiy4GWnQBEfoT9GgL6ihBG6RGzf8BaAH1FFh3s1vqvb6QQfcRM",
  "key2": "5tkvyd56YWmTecaA4wFHEjuicoLvB6MZTeDHpmhFLPPeoQzDQgUmZa73J3RAqHWck7WC6fbw21jmiCeFfbahQ3P3",
  "key3": "mFWMQfvDwTCHPJ8qSg2VMTVnp62p4XkkYvuyC4sTQvCVsPoXzxdMCah2hg9eJgmrHgP9QDGSK4t6itbSxr2yCRf",
  "key4": "3SZUJyai27TqgMGhpwd3K2ZtThq1fMexbQDrD4A9FkHkzxxvZpWWzoKLnmXPsB87b6m5sF7rYGmso45KSgLgDvb6",
  "key5": "2NQTyBBbmaMsKSPZvzNj7sJGKMECwB6563CkgHBGwgRwB8MrWGo2YMPMe6SFApeyj1kDFPhzFd998MhZBan1Na6V",
  "key6": "46NFy3fEjMgAnFNUWAXAAQnnbgbCZXNmBDQBFvosSwZAbTcULstiVTYrhUTbFiVwthukVC26iv5kZJPAtTCQm9mL",
  "key7": "3WiVZQtKfBUKd6KwEM1XrHjg4cFDW6J94sfKAENdHrx7ryqJwT7dhRekDdSSTM9Ni5Cx4TJTHXpFyXHdyj4W8t93",
  "key8": "4tDYwWx2tAaMdLe41ks1HAqYfKmkJ8cgw2TYBZ2q7GCba5KyjQQ8vbsu2UGpJ7BU6SwL3rAi7JCo8ymYbAaF7yg8",
  "key9": "2J9HzcenZbBxts3BTycxqqomfv1UBVMJbSrGUErJaK5qkgiDf6LfAg8jcmp6pH6Zh9eGghSSihxXonejKm2BotZc",
  "key10": "3DVWcL1N6xH4RptG9Fq13kKcPTb7PV5roUfRxmvdtknVchkT42K8vwXvPW57mqXF5Ns4BSxZvxTH8dDec2whZ6o7",
  "key11": "5W1FpLofj5rhQgSteuaTA5qwUAE1gK8hG1x7RQ3UCqkCLpQorYUty6aoiW4gPuDwSCZK62cKV2Gtfc4bmCTeu4Zr",
  "key12": "5RmGNuYKwktv2ZoC2jqJs1AHzfR7M71MbGAFftEK5GT9zXmdFUnz1oMWk6vrpoCRA4NXg3G8emQZKzaCtxCUAnSP",
  "key13": "3JsDHCpXJty9pocK96RobnaUPZAQ8tEdRgUvSrKJ3yZ2hUQxuLh4tgRoCkQaPP8PUFih8KfTQsQr43335Gqu6uRX",
  "key14": "55KTPyy5ZXkg199CqP7gxDwc3vYUBUMEHwCcR4e3LUWck4T8G2C6RbtD1yzg385vE8zueLdcEPARQhj5eN2EiXY2",
  "key15": "32a4qbZ3VGq2qUNzihzbj83gPUDbdUkv2vMmXxNNzyJtsYC7CuxwJLjZQsTL4CycFJhLK41A2Y5KL6DneFF9BmSv",
  "key16": "AuhXjNccniJHM4WixYNfNaRA3Qci61UeshrFTwNK5kjWP62V1uF5jNs53r3MJgVMtxXTKmPiXuKvaEjMrR9xZ3g",
  "key17": "4ySXdwC54375czgedQTBWZRUGPwxih2a9avUoU2Np6PesnQWoFpVWW1NMBJjHCFGAABG8Tsp2XSodLzZ88UqUTV4",
  "key18": "5Y3ZqEjLhqYUdwypzitQ8ZV6SajMawzH7b4D2cBZsJ9H5vhapZHMC5x3cA9Wb6vFvVvc4hztbn3QS1sAqi4Ywp1s",
  "key19": "5QbpgwbuF4DRWAeHNGioPos7cTxknfeGvKLWceWiqYuiS4N98MwNZTgDG5sPTJz96sKoVbh3EGD18nMbVz6HH8uh",
  "key20": "5wAjZHv6tKM7fVy4QBPgW8EZaU1uYsvAdL8HbWE7zvW8GZPCrafySmRjcAnoh23AkxwDC9t3T46RdYPAxSwKB7w6",
  "key21": "424PCKsbL5J29YmzoqM81kgyRJ2k36SREuBxtkYDVasii19QWwW4XcfBxikHC1tnRbCbtkAsCo7iVJ4w9NDzZk9a",
  "key22": "3ZedEUWiugxmmQwmbYAUE2NgdGRA8zWM4LqNCnRkBVhsKRiKhJteS5rVCT3MGWhiaR2JMy6fzTXsGB1o85UBxRGM",
  "key23": "25Sku5xambPn3FskBvsqdAg2yBdrgWHRvZH8W9zFiCnricxYJKGEADTk1B1HStK1Jh3pVuB9WVKX4sJrMVYXQvxd",
  "key24": "45C56oGH24n5YvYz7v6zZzJhMwK4ax9Y1MABn4nMsdQzioHRHxLFumksagcwTK7H3GrMeNd1Hh18sMm5UN9V5Vz1",
  "key25": "34riXFzNd7TKiXda3kqjV4oHgLbX5DKXgNu4LjjxiuU77zk27HAw74RoZrKouzikXsHWnDfpRWQquGdr6VDjq4hP",
  "key26": "4m435NGqqyZ5LrEc6VdpJd4Pxdh8Mc9Fasw8S9RbDB2jRZMgyzzzZVqLznCk77LTwk8NxpW4rvwEeL8CEsdWwujf",
  "key27": "26xNFuaZEofekcdopAgQaMNfRnP5D3vmudbiQCx55kAdx8n5cATghGdnaR6p2rgeyJ1X4mdMk8dQsceNht9gWEg6",
  "key28": "53MCRvAZLi3682Xgu5EvK81gYrWRra96E7kZjaJUHbFiYit9mi4pxjUye5CPR18uzd92BpsfHYeVhnHBH5FWJDgi",
  "key29": "3QAbsaYWCFMcEUie3kTbL7hqBNgCTzQePv41JcTUscifvXTZ1r4kkmssyHTVLhhxN53xUGME1SrhYzGFuFFYLFsp",
  "key30": "NpPQMJ47tpvmXok2C2GbQ9qyPxKiaATGukhPGkJbr2PLQG9xWg9aPXnjP33CYBaCQZqoSZ9zfmfNaRrwsPyzfV8",
  "key31": "4SP8Qo9zUvVMJobbQXjXWVizRctLbUHqm82zAdj2QqvYwxsnbs7ECZDjdtf6ZH9Y7Vu88RFf1vG9AfYMWwCxASB3",
  "key32": "4X4UWAkTf523jRXMxnpZJv9GTmw1QPeAvLLJyY1gVPXjYubGHq3wdAEowxWFqR8yGW4MUvptWbLRGHp4QhDHPyhZ",
  "key33": "5UPendaEGZDwTAocrTsVHhh68UeXHH99wSBJ442ntsbg53HhaSjjNNZMPb3Wvf5nTHCsnfKghURgdJUW9d23gyB6",
  "key34": "5upabs5vXbCFEJgepSMaCn9uj27au5CYnW86zPEHmCdh742ZLTugNLHRkwmLGfaQAoC6qHLjjXW2fpKh9GHJZQiW",
  "key35": "25Ee8XxMU8CqVmsg9kWdhAsCKSJUzEHLxdWL671CRiDZfE2cXp4CkPKtFWtpikYeud3rUofVFCVWmVbJjFYfbGfG",
  "key36": "jZe3dEhb9y4u2M7fBba839tVSWJKBpHsk1oQk8vhhRAqdd7p7fXEyDhMXnctRavT96pXP6acPDGp3rrW3YY6gDa",
  "key37": "2QAPRYMssUKLviqS6136oorVxonCZLEwu4ZcBnk3Jrndhyk8LsQnnG8ydAtxYgWYXdqvnnuY8V5mvHFozUq9FTJh"
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
