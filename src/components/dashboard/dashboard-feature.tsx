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
    "4nntCUQKDhAZyetDeWEbY1BdrNUTHz6U8jSvPhKVytoEBzjBxQNZMR8yy8PueUa7wGfsm1djUmAz3uWYvpMhexkt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3v9rUAfSBA634M5Y4ZXFbfa1Z6TwLvwgd4JQ7Thq7YNr6jeh5hnCceQSUjLcEkcY9GAXM7gsJi3GAodWXktdzcVe",
  "key1": "3oveCMawznK5556N8nG9BjfpQ9CQJ23Wwt5X8r4jKddoYkHREzpqpfS17SGGTuPp9t6EwL9MUKo46SLSdVj2XqF3",
  "key2": "3amAMqDQKaynjUvy3a71UxRzyahPA2MgWULQV8QGYG7a4ZR9oVe2NtmWA2J3QUGVrm4ndSnGEpVFnb8PvxdQRqgB",
  "key3": "2mKT4kdTcX6mgPH5aoUZipJimPKh6N3xdCZgX2iNXvhoz1vYjs4nQNcRvWrTxQFVpPrm3gBi1oPV6makefgcL2hi",
  "key4": "3FmELdV4PLZbmAEYq6QXz3Yn8G95mrF4vT8jbnh8FXMSvxPQPr9xeJGrDCDuMn6ASoT6L8dnchAxHyP3gCJAqtqd",
  "key5": "2v3uFKQEoEK514pQeitV3oq2M8423xvw9YmhSiqpcwPXy9w9SzNDdJB5sL3es1Upa9YvEbqZEXofTQ54d5oA1cST",
  "key6": "4sF6uzte8roK4z9qaHqoXuDqMTaH5vzJEZNCPib9YZPiEsEwWivE8tUX5dfxY47564tDD7YvycTKWoi8qxdieFhT",
  "key7": "Fr1G4sHsYyA1fyQvYQt7rQVKjtBPozETotqrcAqyJNR9Qy2SsXh8Pw9zPZT7B3tNsvpZkcNzTKf41VjZsABHnMQ",
  "key8": "49Ta3PQd9i8FqGnG8sW4yvqoAj6LQHgqFFGFrFLf8qfMcMBKco78v76jQjN9Cr7fWgsuuJ2NL5TdBWApRog2ZFcP",
  "key9": "3rkF287nbfc1HGaBW7gMbzSnniRTeYhrbM1ADZmvy5M4KDGRLchnGtrLCKguoWTNFuKiX8d7caXNnQrRbEevtLrD",
  "key10": "4NPaF5bKFzBnwmhfCBUwn9cHDCYi4XMenUdSTzcqKa2zqeYh78fjwXSoUr2WdWDMTipAhm3srHEMGsLFgVyGTHaV",
  "key11": "58epBA7AtQCYhbNRyMAzMj37TUgmB4hUrxwMfC45StbLHZAtwCidP6ZufStinBB3yEWPuuNwdD9wxNcscZTmzj8J",
  "key12": "2B5PWjAfNDQzrGXgA2e8PPsDFL27abm454uokkSyTphbxFMyHMfKahj9ov2ewhMuq4Q6RaXmV8Y4UTqvJFAiZ9bX",
  "key13": "5hkt89BVdM9VipyzkxhFqc13DSzXAZxmzWJnHfPK6Kdr6mhYqB3dsiep5L2AU4ueoCuYt6sojxxGuxKh1ip3KA8P",
  "key14": "3TJT3Kk2y7qCvnkToWGHh9MPShCgivQHUTBZSc2UdTu8M6AqmfXXeqZdR7SkPgeNmniJv9gQynjoxGbv5VCyMi2G",
  "key15": "36nCyGP8zv99RsiegtXJ6qVD4q1UA98iyqTyX6zv5QyBdRuFJrDhsnQzobFMEDGdP7J5unSJ2PG2WfztCBW74YhJ",
  "key16": "2PqX2Vj24fm7Ce6huT6aqZA91TFfqGLoUJTNhmkuKJkTSrVfLi623gHRaTb8C8zNEtq6f6cGBfhJxt8EVriv9Edh",
  "key17": "3YzDvXgfgu7mxsFzhzMUX8cxCqkALF6FMBPTamXcofYUp1SeFbuU4pBAefJZY72FcSe1PXBwibKsQuehYWjMTjfg",
  "key18": "3N1mwZDyjL8XtkgdCV4r3dvv1nLcGC2fyX7BnTbLb7M7usMGTo2q3x3B5Y9vMuM34QDpYzRBmc2zLbjhPP3iLJqN",
  "key19": "5WFsWufzoUH1LRnwqHA7q4BQDXiaV1hZAe8gNqPG9t64zDHcBtyFTpuwwHnm7LhVgrc8bvYVkKCqSebWsJreNzdh",
  "key20": "3kyMNUYM6VufXzUxf9P5Fao6AAR4ABvVZS2yoLfAJ4W8YTZKW8V5a6zwYRTHsaAF7wngMmTNFyqWQ8ayFy6tJYB3",
  "key21": "w21WwgmqgpHdx1WuNzzg5R6kNmvkaq9oHkkX7kAq4dUdbsBqoQ66nPh9ShpFiYiRrU7vTpYQ2vk6SPDvWQCYHkL",
  "key22": "3iSAMKha8Fvkf8RoUJY8cUZUZKtPUqkK4piZPrg8XpQKugC1NRZH42bqQzHewBAHQvafNdngwEFprU2HejHuNuNL",
  "key23": "4jCcpsroqca8HQsVKjiaMoYrPJrwdCmNGUFdURZ5ddFhKL1ucrR8euTh4wLhWnwFPoRhhDHN6kCNaoTtt2KKGpXT",
  "key24": "4Eqo1HtJZ8PVWDcrNvcD9gz2V8ZiKrxe1pz7MQQyjCeV9x5cUMhHETwmu8ugSUP1fRNUyaDNayNj6WCPxPWgmoP2",
  "key25": "4S2Qw9QPXzoq4Hq9SGMJsLNXdT6mcppZoYxBVLkMP6Vhg747mEQV36ZGvPaLbT3o5aBaBaJ2D4eY8BYWURtNbmoi",
  "key26": "2ZwZya1cL7LUchzCGChUMRysSKH8aK6HVxWCNFW5X8omvtY1VGHsg5qZcd7hBmbA9nUZe8UQDSNJ881VxHUykunY",
  "key27": "iuEwEPaDhdLujEfeKz8PyD5gaWiPtT3mSgL4JR6gpeUKUuhpDiRDmRgPMBxmUCHn1xi4yVzLka8tQkZb6ukm4B8",
  "key28": "2HE8jshabPgcAGNHWnm2axJfX8QmmBDuBP6SnbEAPLSkeQsxCxm2PhzhNwopaRhqi1ARwGkKisVgHwCYw7Smves2",
  "key29": "3gk3aBu1QN64iWH5FaGVBmq2SGsUhNJnY97f5zCAmhJFu17jxvAFtnnHHBgdF3N6FCR3bx6U6HT4rN7xp1Bmk44t",
  "key30": "2knkRe82VuWsMfoJt7mTqQPx34dfPk72UHXTeiDc5Cxvou52ged3HHJ1wbM1k49tw4DuodwdBgW7GKqkCR3oar3E",
  "key31": "gCcp4RZGRgGaRtumJ7TALACiqKV1zaQ23X6uHXUZgnXUmy33gVbsimeqcvacE3qBkDwC5gp7VBvjMnsKsbrGQSA",
  "key32": "3LjBVEsENXq9q5xFytDSVca8weKtyURkqZ713ni2ayTBHXW9uQrH4CwFsSECFh3EvdkfYg6Vax2AQoffTQzi9hav",
  "key33": "5n9iDKjWpv9NtVpeQq9FZmb3s3yXbR8kjrpL5tuCTCmVtMtRppXB4JZegMAiT32z3LBt4EVUqUbMM4vrkVBmHVn3",
  "key34": "9Y3YnpsmrqCAGkYVoGbhuWhzPYHYt28kHB4bStgH54gYGfray9EwZZ4DR3k67XQiQdeAgs6GNNpvB47ekHaVTKv",
  "key35": "5dYQrc3RNz8jERdw9zmevszsdsC239VkPiK8WN7vnnqcjfHKqp9gtqPgdTDuZU2oKjz2AbXGPmaNB2mDMmVhey83",
  "key36": "561N3xW6quqYWUyLFV6AmRMs8E6UCKfnXqK76m1WasmQr3yHah1mT4AsshGTwhABNJbGMNPVe7eyVo1xrVYRmCdo",
  "key37": "4voGPLPnHL1hzs3bC8GLYwDT664apqfwd2LorT29maKMLL1LvmcPXQGUuFJF9bfqotjtsSY1MhLjCALCcogeUP78",
  "key38": "xCyxBtcbKsFJozoyc46PXbtv3kBNjeevefgGPFQiWtuVgc4wKWLBm9CgPxneEx9UmHZxMVRfcGaXh1XN23byoXF",
  "key39": "2wx14UKsDRULu6hjjDj2L3dKFeoFc1hFxTgHui9iRwMaQPpeuYJd2HUrHe2eCAQvRdvTMvx7MMnwqWehs2Qnws4d",
  "key40": "3XmuddBiFqwcxeWaMZR8x3j9xwpRhLetA5n19vTfuryLKqcg6RRvazmYMnJUbsZoVttcRVxe8GXKsWqYNgTT5SGa",
  "key41": "4dBVSbK3uybkP95cSU5fmQDHozBnAc6YcBCvtaUpWpLpHmdXpMEzDLxo8VnBHbQv2RCf4iEaZfdJSSgwegb7AnKY",
  "key42": "RkZkDijSg6rdAzjPmz31DdBzZLqv3LrfbZjX4t99Kot7Fxke8oemHHqo5XE2DnvruNUEfUSimfezU7EW2Dvy8dG",
  "key43": "2nYvDdzhH8uKUNZUnmeYx4qBwq7SN5ZoViRDbrp1yW6AzbBcGu8pr2LzFEfHZQnqtNzEz58i8jSKMuVkJuYsipwj"
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
