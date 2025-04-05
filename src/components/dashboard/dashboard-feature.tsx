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
    "3gbF6bKp9gRw7ShEpHPrQ2AyhTt3KaRKXjeXXo2miE4GS4ZdsJmeEafL2QQqGsQHBucojdo9z1a78yNuvvpvqpZe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2tnwaw1UgbgySCAnzbQN1QRNqvpjR6KzZwBKLjWJYp3riM1sDFD1g4vpUvmeBa1ZXe1nJWCmyynK6zsRgerZLS3W",
  "key1": "36xxR7K53Yd1fZ36SkSemRdcJLMTLaBZy7WJxVDgt2BMSbZfeoiXafQCm5PujmYiFSQssKHNCmULFYM2RnwKxUcK",
  "key2": "3AEucePdsZ2vhpTHjCf8FGUcAcX9tUynVf4ZwS84UxCMzsvJfXuf1NHMGDB6aj9jKMffAPYjdwKaTh2kQLVyttAD",
  "key3": "2Ed7hpqGPu9eb9rYHmGiG39cwVKinU6L8yVVeuf43ZXRiRrTEHjHu6obNZhNJGp2Q2c5mtnnNmva5LudWvxEMCR2",
  "key4": "bTWoCHZBc21MxWRUcMtewg3PiC2FHjQgPYXfS2L7KB6kBVJaMbEG3dXXWgp3bkk3MgZbdRbH7GWArgMrjWRgSvC",
  "key5": "5AQ3YEhfagEgsfWUSpU5FizoSmzmGAfzk6Eg5uTHX2mewdw2RejP95D9Sebnvx8x5QAgqGyYNcCqSUndWL7Wx389",
  "key6": "4pytwii6LR8UkuJpLcaKfMiJSWoSoM8EUDJsPnfhfMSSGTQsgtQFsWh3g33x3U2edZV7jJ18FwpHeUoajoqFEGcC",
  "key7": "3XDPTaikgDPG2Pqk7XEsjJRkSgcKjB3Uqq8ZqEUogA7ezF6Twm2KEaRAiy9b5SxxtY4yNLb1qm7NZGSLRoxi7cQC",
  "key8": "4tQr8vu6vxkJDY9ZDJs4G7MPSxYYh4BTYzSMMXR6npv9ARkHyPq87rYvsyVLEttHeqfNWAoQiZx7GhZnzbmikTsj",
  "key9": "5bg2s1tcPb4uN2uvNzN1MQaZjTdWfxumAbb6BoXD2iaqvs8zX5P2BSwmmSAgxNBXTPMEfdT5N9ygi4SMSdqZY3LA",
  "key10": "4SN39LSYmZLZCPppaHba7NfJpLu5aAAeVqJrPywv1i9kyip3ZdSuvikB4j1GFupXsa6kaVTVNpVpSSk91gE3ncoW",
  "key11": "3g9CWJy7QcHzw5VB5SZkjSCRvW1A8nGWP9TScogjAfcp15Edt6WHQg8czbhh4mUEaCM1DAsH2Emu4eNXZZCLjR94",
  "key12": "65rqsdWVnjMvWsFRmhvgBXGfFVq6hZhbaQL6zyPV1LWz4s77wo348P3Ax2Lvg6mjyUGDc6bJkHBibbuzHa2Be6nb",
  "key13": "4Ent94rqR93woQ6Kh5dh4pgeNWdj9EUdV1QHivgt7XHKk8aPAyAuqigYjCHrziN7JZbKa7QyZWn9rjnND5ZfNTkq",
  "key14": "5ywnZKeKecfTmJFbGxkE9MgWWipcSaT8ALuN9vgWKLRjzhtRYK8QyvAsMChUKNE9wFRyUHa6nr4ZpRezCxwbGVK7",
  "key15": "5hoJQaYN2QTg61gvXZrwZi1xJW1PK8ePepu6v8EHcqHv9H3ehyoQZDivY3hTTJ7NQPJHhnEdgNzmPPEkuFQoLHyk",
  "key16": "41XviUrF66fL8m8J1Q7q5TsCCKTXNEhPSBT5TYgcBdxMNWUKWqfrtBTgwtfPh2RE1ZEy3VhYnwkBhd78ZRdHME1n",
  "key17": "3jWGMdQCVrnd7y11EZ5r1SaGc9aWPwFdBFgcodEvLEUUqrrMbnrXv4SHy2yaxyZn979srBtkTSL65uDLXf26Esem",
  "key18": "5FzPjrUATVvSdkUyoLLgvSCc4ZBc7ZYzvUT9onzCPrsZ3NyjbKDiH94M6hgW3gfK8z9NWnFmAVVdANDc5GTr1pVq",
  "key19": "4oteLptTDxMarRCqt73nkcAxCr4qnqjmSxvmNUVJcxRFaBkuQ527xUyWHTY6CuNeunSmWrnD9TJ9wbYoiJuR7zX",
  "key20": "5LwH4BcEXMSVL9nuHiFkJcRGNLcVzy6WHPoGv4yBeyhha5utG3crFWrHouJ4Zp3ortsMGMEJpqqUhFim4gMm9i9U",
  "key21": "Je3uKgNP1eWFJRJ9Gnw1jjZrtEc4W8xXHoJg5HetdttndxmT5ZvBWVnMwrQWk9etybCgUh569vV1YRmvBh8Pth4",
  "key22": "56ZwqGYNgaZdajYdksxMdQ1v4fX9P8Sdtm7DeA3RYg86e2XpUXMABmbHCxyM5WATAo84F41pzMGgfw3u4tGGEXXy",
  "key23": "22GsvKmBytD2msG3xRBnyEzVLf9ngZKbtoxYaxzfus66b1KWjdGCatxXJrz24aqaKQk1arh4gXHk82dJNHKwhjQW",
  "key24": "4mg89fwQFqqM3y57vGBZKkSReGKgNDzsnDSdh4g7joJmCWrkAvLgSggeVHKnkStYo9HCFZpFWLwLAzhcTcHuoyp6",
  "key25": "HK9DcNHU7qzpvktvcT9TPY3CWbjaTmYUN4ckavDXSCe6oFfzGctMAWeAaququUcbCKRenVrphtJ7eaHJgTaXLEV",
  "key26": "5sasN8onNWtYFeUnkw4or7TbLDF9CzCUDcsf94GtUaJVKbmMdJTRQXWJc68ixm6LYkTgw6pC6z6ZqBM5PSG2Eiqq",
  "key27": "332ob8YVjR6477Mc4ABSDwRhhCKti9HLxSHT7uHWQe2Pf1FQnabYNZzoaQe3ZGmngj5V5KYQ3a5sJUXuM9fjEo2i",
  "key28": "25FJ9t4xF3ZeEJAqstqNkXHUtDz2zrrj75t1GKt85iTBqSz475ARe9xG7HCBVXsmbYuqREQo3pUwJ7ybt4jEVNDK",
  "key29": "2f4bHqaUoAinjRVwFxu3Q6ATo2qDDXjqhmfiJHYjHcdGuweVNpMHqF8q3cPgDqXABnUqJ3fzaNAnYk9rjxXayNxc",
  "key30": "3UCrs9g8RbY1MCUEPkBZWtBxfoRV9fzNaBB11hk8py8qxXcHVfsuW75uhNNfisZP38bhxxWx3V35edrSuCqYCZxC",
  "key31": "245eZjT5P8j4krsgVuou66sYAUdv5fXAFtgJRUZzciRk8ySUFgnjAEWxsGu7N5vcBsaCjZzSrEC3175fYfd5VarW",
  "key32": "2fFFK9yRpQCjd9fczp65mZxeYtzL1SNn4KwnmkC3gjA4pWe4GS925dGPtcRCriFgbLxuECDPSfsaTi1wRF8LCsJy",
  "key33": "qU7mUEBAJXQVSMU6RgR2J2y55r2j1Efa8qogyKgsiMhRn89JUWnrSLE5ExQHgLVUNSkWhFS3FXYWVub6Qg1jtTk"
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
