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
    "5vYmEqHWPchFSkhWncrZFbbddzP9rpyzQoMmeLjWy6KGGFbA95iTiLV28d26rUrra55Dpc7DHzLbjCgtSGd8oKpi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2eNBafVA1XHMBwK1NpViYp9hedXavoJDoGETcgmVazQ5SDzDkseYqUkVAUGTGsk7bvPYv5ti1ADDJpxE7BiLPG5H",
  "key1": "2AZU1yMtY4oZvmMPy7FmciRAq2YFGcrDTAZ74td6Vrp8NCdKrqh3PbRentpcaJikB1X5eq91YsdrC1nM61AnZLCE",
  "key2": "3rRh8wDqH9pwLshtqraaeh2ktqJBWrFU5R65ccvkSGaL2VUeaTnyjGj4kaKTBomtZpz5kRy7FbcPghHRMUE4Sw4i",
  "key3": "5iQLL9r3zWErRJxcRfX299FFNBKvftEWMPiD7zJdgtDShr1uG5Euhiz4aZnCeWc3RbkUY2LxP3DLma6erRjmVBsj",
  "key4": "592XHF9WxdoMnvDsDzPBKE21AzaWffhkggvNcMb4nt1MXifHuiUrvscMA8iZXsmVFmDEAF7fX2sy8NEvsSq7bNdw",
  "key5": "2X6UBF9sQqwjQPgZTkraRdaBAWFTdAbUrJprdDm8wae8V93LWiJumymzCCmzECSxNAQjQFw1Fdkcxf1wAwECaGKw",
  "key6": "HWL2W8XJYDzbQ9tdM7Hou4MpmbNjy1eG12iWFLEPshGqS9n8RYvt8CMBLGQPGPziBHkVWwiGySUu1hZWhEw9cg6",
  "key7": "2Fe2AtoY4whrU624QYg7KcmCWLEQ7G2RBaYbz6MvJKSP4UhKrkpDEChNhoiNyd6DNUSBpCPtXFcuEzhxiribLNyL",
  "key8": "4ZoirxSCHgeMT6S44wG1cDBantfio1au9aUKUsS7LHJPnG4xwYujNfhijWjDyxTm1AcA57wZDp5JeguWqHUnQUCQ",
  "key9": "J4g5oa54PmmK8u7LXp7buhMDRHBV8be1iUHzTS9Uyh8EoaBkNsoYQXaZSHLjTrE83sD3AfHR3cT1HZePSAVUSAR",
  "key10": "4naFrajusftKu44qZu4a7Jk1FB8khrY7dKuWBPVVjM3LDU8VuZuq79ykhPHdLndQ398Ydd3QebiTU5cn5ePn4tRS",
  "key11": "5Q49xuU4YB21J33zCmXnrC6qEQPZmdrvazyck5mNFfWFRXA5dAps5PmBkQU8ynbo5bEBznNJM75ZXxFF1W53EctA",
  "key12": "mHToB8LDJYQ8bM2qn6ikg7jmaAJN7vk3uKLPKXk7t2MrRqBRqK8WqPyzVSoAqr9V6yLRkDXvJDD4GmRdQAS7ywo",
  "key13": "466Q37MSFE1dqgZjdEX5SRdHGf7EXXREayEu9UfBjoWJRfByZyGAChmw45BR5idL6zVGWHdgzKw4mCvGxFMxUryf",
  "key14": "46DeLbvKemgCyPEFJNfBGATgBJFpYsoeRGUEUXpAoC4tZ6eV9FE5k7CMiburHU4i5PWg7pDkd8Bxx3rK2MXJSgLc",
  "key15": "5GqbDMDwZDsH1gZPtPDwjp5KQwpWefWxiwSBSdm1L3z8b2oW4B3BAUKmPVjhtqcT7mi53FfEZG5f7bqSBS175yRe",
  "key16": "3yVRqXTuoLrKQCFkLa5pyV5XA4YoXqSo3nhKaHMezDYxUBppUNa8Ahp5xyrg55oq2tkViHWpAEKbBm1QFgkqvgus",
  "key17": "2HkJDGqqzB4dEH2FvMxxAVDpzvNvNwykBsJUXFuZT4fmTk36G9PZFj8xTpcfNMrMR2147cUuV8AwePJ3nNkVnH29",
  "key18": "3aXUpiQLH9X7PfkR2LyS9jhZZf9i6SWVWFafETTpxhDZ81YZAH3AW7GWAD1iUfyaRrndRKhzYiERyLAswGhzeV2H",
  "key19": "3VHRbVTtsKsU6hmdYYYMLE6D964PDw6FVL3SRwajNtLKDsbYEyTD566vm3ThPKgyjQLAttXHSyM1B3EBHjW9VAZK",
  "key20": "4nz6BAZvueYyK4h9Ry3n2Kw1CzMUvHqZD2yQQp213CPzEHESK7e68qA3QYnkLphf2CxzsbosurqktuSNd2mAaXJQ",
  "key21": "2S6zNVsc2Jv2b71s5wY91ddeDwJLbnw73GfPZ5MZMT9j2mTc7d6oG6HTEQqgiV5DyEyPhtHuuJ7FxwdzCSMMCxSq",
  "key22": "3MDSSXgSBG1bZJeZAPKssEG9C44MfCeHGfyd93PgnuHvfGBETo6Umn7sBUFvXo5HpoSMncmyJygfjMVtfRfQ1er3",
  "key23": "34o9TrBnEVhz64BBczfPEnU79VavhdkXMtVKjvULDchzPSaJjDiZr2ZaxyubtcztjynXQ9m3ptnHRjXMb53nr2pt",
  "key24": "2Jh2KHggRGXsKnVCXMupXWXBcvxEHgtaim2NeKhu5KdbNbMjZUvCKb7YA3uEvNbpH3mnoEkjNAX8NaeZYfongvAy",
  "key25": "3XSkbSCf3jCkpz1zKMVctG72icrcBHvHCKvKqwJNeed4MHBimADGrhXf8QCjejAkCjb7HvzFZf7SENdenPyffQb7",
  "key26": "2arEB3Pxk46nP9Y9Mh89VwGjhwHnV5Hm9UKeHCnhm2ntBgwGR6hR55WHcRs2jwSfKda7Fig1mynzsCB49zkug49e",
  "key27": "qJhqgDnYczjVA63xVZ4VUT7bN52GGeNmKzZ32JdtTS5cT1KjGU3jL8bcGyJo9wpMuAasHNmrHEznB18tyJv3KYt",
  "key28": "5VcZXdBfndDnHsthxQMyPe4DoHuBdM3ZffVWThdFr6NdP6fmbsRRwQEbmMovqrB51ZU7ttadGekpoU1azjdgGHbr",
  "key29": "aWckg9qvRadyiZ96Ui89WUVXkP1VKRBpi4MMfcv6L8JpLjkPJEBjg19UhTfAHGyNsGN3zHUJSHqLmGJMK1aKop9",
  "key30": "3RkDug8kxUPvh3eBF94Fg9kT23UYgwUsDY1GfD33SnSdt9xVdHhWVeFWvWazyRcg5v2DNXXRncNcr9DUoJXs4LBT",
  "key31": "25YrwEzx41frmpag9ZygCecmnHFtNL8G9zNS74mwDwxuZkch7X6LE9xMht8VkNYaXutszLNymMw31za8PzrtPaFA",
  "key32": "TkniNLjnteXnMHpWW3a4BRaPHjE6JuMaNvJ6d7PJhkjN3Ytrg4i22nKsCK2nVVFFNfRrN5KEKq3NNXfdHxkvjBw",
  "key33": "4K9LC8qfsQisKx6oU3So91XD4TCqPRn8eBtu9DgsCPAxfCtmkiM9Fz7B8cJJ7XBVyp3AzrjPyzr8vd2N9Mqg754Q",
  "key34": "5F6F4KnC1jM3aikGMC2oFUg4qQFNtcGYCqAtuVKwbBmJ3dXrd3hhoAqrNhNXEHZxV7VD3FPa92t2gSaMp22d8owP",
  "key35": "5BfQvM87wxmkqzMH4rqV9tFDSeFk8aaG1xWrtyrRYprT2ze2JAUQpNJxRSwipbFg9k3FsFXu6T4Z66s2rfgst2eQ",
  "key36": "2xKSyqNtv2LTDsnqvMDvsDrtDgiowtsZPeWLvumjgEbFzGHJcZPc6xfWjYYNeiojNA6x7dYLySy3H6nLmte3ngQt",
  "key37": "5tJnDdrJ4Z6j3BSXKsFbsFA48JZ7su3tzjirqKopy3U7Kfg1D6ZEYowWeHh7BdAftXrzWq6DEMfzw51ekfQu1bDv",
  "key38": "4Z6SSspLKm34MYVDUeiJ8P8oSyZP1rbT6bFQd2LXVhgyo8vZmq3ye4x9b14JiqAbNvbYTJHvhbqbfXetkuqynMsp",
  "key39": "qezsyrCCfDLVRt4RwHZTMWffK4NwvRqyhBQVy8YHNnWyHnhbCeaSiehGtWh5RZBiU8VEcVwoFCRy7jRsMxvF3Bj",
  "key40": "5b6ccf82SReu3d44mN5hw48r3ctHTRXNWpXg4guvw5WsLnJGNyvB6qk5FBLd861SqhWwTG4FFUftmzRtYh95PAvY",
  "key41": "AHhZNyBbvpPu4zsKtJYNGfG51dDicV3RcrPXz23rfS9xMUxCZxDogNW2rvBccRj52w7aNoVUaRmWnpxL9YTsA4z",
  "key42": "5jYYmFdRrKeHUZJdAp1VGTpSjrdjyjeoGFedgSpPrpEYFNLAkC2j1AjyYMejqivyHPjgTDbU2UcTjxQ4AfmVVYii",
  "key43": "2iXt1DKGZgKectWFpuiAXpRBfuLSf39METCBRHWwP9dBoVVPG5yyUGWEtRgEVBjDRhWPPG1KuwykYts2xztETFB2",
  "key44": "24oZXorWdw4x1Pt3Ucd1v7YKCw1k8uKLFBxUnfLQnMvshS8DXmab6hhbksanWxejtG8GTuk9mwjd1VuDT741W3Sr",
  "key45": "2Cao7UPsaKjtUgpQiqZqzMrAYYDyhUKSUP16woUx7edJCwuBskMMnjk1UGbLemRg34fHxmtymbNyb2VW2TVR3GFM"
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
