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
    "U66qGyf3rsM2WgMdFK79YRurFtWYynm9VsBxjFqWxgAD2j9J1dUm6bvxQnVgydviu7iKeN4UxhnsRgzCD2qodyy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oegee7r6GvA2qMfLuPsszd5Lqcy9GJNJ2roVZ6Koo4MAnLi8DqapxbBJUamin8g23MPF7dLCZcd1AWKFywABZmo",
  "key1": "UKkwtBPpk9u4gxg4V52KzAYG3RcpgU19moBQceU57pCT8NKAkK2pcMNzfeeCZPdf8ekRAXTrQLacd36TH2pFLy4",
  "key2": "4MWJmsKyerWs5hR283bmWRrkfJgBRXD15QbAjvTVsJMcMGne6Hj3aJSCbKFYzLErRcPQu38ww3n9ysGr1JrzonXL",
  "key3": "5B6AdPQR72bvhB9pdopZNqWkD8si7ztciNhhangbq64xhnxfgNNnDh4FfSmidiYJTUceDRGHDzngZrHdiKVdcrMn",
  "key4": "HJfJhPzcHr2pvFeRvv1nFX1tJi5XCr9hAXE2nDsynKE9jfTVxhPore11RQ7FdMhYGo77gSaLyVdSYxpXs6y7ip4",
  "key5": "2cjWpH5zHHc1Lx1eVAQ4JxYbj1bQQs3frqhuX6VEU9trdjLXSJvHi1U6KgoTdRF7MNd1rvYfiGaGZUq7MuCe18Xb",
  "key6": "2SUqKxQTn7jfDBQe2shq9jpEDGf9Mo7nwwHTNXJYFroJN8CQQbFxn4LY1Z13L5LyPUMwnV3LMUuwNNCRsEWnbdAp",
  "key7": "5XzrZJ1UEQPhBA2bxq96Vugoe9j5QCTDXRNUTNj2Ers6VBBoTs9DzBybPQyfv1ddduzewwvAaD1auSNyu1xmE3LC",
  "key8": "5kLbnagN6jTVFnpo2mYPWjKk8XHY35y7oPooAGS39tMbAkVfm56SYrqYn9GpoznrL93tgQhWGJto7RE5xTVX9PCr",
  "key9": "34gctqucvLXas4BhRJAUyqVRuYLPS817TtqG6tZNDbhT8Tcyui6VeEGkpqjcUj4KgF3E93kRGSFig6n747gr6nY",
  "key10": "44cQa1Np4n2G2CoE129sTGKXTZa6GRfUENv5BbyAMUps5N1CFN3rJZrTx7jqj8zApaQWND2PkVS8Eip16uBjnbVz",
  "key11": "4XZy7mA6dryVN4R4pnVmCWjxSfYKSAFvDVs3GkJYuwtTyhryEe5rWsi3vs7mKXidtHtXTCmRDHifBu5q1pd2Kuan",
  "key12": "3669BprVB1p6mwCtqvQnjfkeKzsbxtEBt652BKBacYpaRBriybgCdFSVbHuaC1QvKdLRbZNbu3Wz4WGj7wgAFsD1",
  "key13": "3GfaPxqmmDcusABWTe9CzCPB6foDTwsgvUBtuzzWV54qbT7PM8EZRaFXAM9b3cQgpSoEW3cfJ6wajwQC37aywSM3",
  "key14": "3kTbKXsxbMERY8A6PMoUtGLZZqsRhNDDDfdVc8yrD9SRoFek5nwrkeAS6q64UJ98KVm8CUfn7vftMM1yrhkxhSdT",
  "key15": "2Px34BtcD8sesJBLacpU3BndBWGkso5BD92ypoBNtWUvbiheQRo4AnzCDMDm648cGTQn7phX2Q3pRTJPX9fovwY5",
  "key16": "5EpHy1ATVHmtWN4M1RYXu5WWTwz8uRUD3GAL1qapAVFzytaZ7KquBQ4JbKyD2oLDHepMoU2NxeRxa4MFUCvGievi",
  "key17": "5uTTuJimHmJVFauFFLaDo15DcMiwj4WWFCJoXX6VyoW882a4nRCKPyy6xcnPGuGGkuwnhnNeYX4SteLX14JEZx4",
  "key18": "4fzC9gkHTjv5zhLYihnRUXvym5xQ7NXp9cwUeV1FxGnouivWpiGxd7Feg8WhW2gc4zGVCNUGWDxXvQmQSyPudQqM",
  "key19": "55ZNKs9DfBXBsGN4MCmNcC3J1v9M5JVkoqFFbTAUXN2xaxpv767epwM9dmEsM37UHJvDsgLesZ7y4KVL2PQkvRkK",
  "key20": "4CzmQGGmL528oztHVg4UL8x7664mPU3VQbmrmjcS95E4BQsxJ6i25qKn3NXQKSGT9ECKpciCYCcnwvZf2PvUjnKf",
  "key21": "5rYy9Fkdf59L8jxK8tVugBPiTq9ZXpRRa9hZPmYMwSGxTA8nbiMb3JxJiXoJhgjNaQAYdrEcAEmUnbqjxMfoZ98X",
  "key22": "2uoFLnd4HopX3bpwFJhmqP32pWBPeKU6pxZKjkUfWUJuPDmfBdy8HsSnZ85w3P9aAFz73f14d92ZuVsVGdpNoPD9",
  "key23": "Jh1t3ifB3D2FH8HmLPcMbJSTScX13ELnZFbTZbA5dBSpgUS65eQBAzCtQiob4AvYyEf8wXZv12JaezMEuNCkyAV",
  "key24": "62ioMBKquLQ2iNrDGGw1gioCFP54V5rMKKNWhuM4WnmmMirdeBZwtFSzTKdzkcL75EM7pUR7dsRfWmBLq35BAzs7",
  "key25": "5XPGQRyyiyUL88YBZEs8ShpjW1CXtT2oNJZQ12hqAqzdSMc9MtjXEuWmipzQQbtEZo2AFBBHiXGgkaME65Vc1HRs",
  "key26": "3VzZmXzDhybmaDN1Y2pfBkKGBussYA98CjokMYDMQMmnqaTKVipp8uPYHva1PXtAWPmCDHqrKKeoYGMxDJhQZfyi",
  "key27": "2fnm9oTnfKidJFDBYDxUfWKKPRRD8JWKDPt6nUNACzK7KZHdqN5SHqQjZzpwVLog5fBBuTmpUMiR7S3j3CguMBNu",
  "key28": "5ZFQ1Y7Lrw2ZJG7m9rWMZf3pkqGCcPNsiHuAAkXzCoBpwGE7e9rJntqzSwMHQ8Q1QgbWmagc6GnPVPBVofWDLG2a",
  "key29": "4iZuZHtaZrS1A4RZ1UWm4E9zkqoFzbknjhDt2deXQbLwW6hgh7E3EjYgnCZWJ9UgvhYNHN3BQ4ttqgipjimwrW2i",
  "key30": "2aUv1k32Js39NXSdm9wKjjEJQGXr88Asyu7XysoYiLnaeFsxjnzcqWkd2d64Vx9mdmjkHvNEyRCH7QLbHEHjDqCA",
  "key31": "31rbGYWzfB2uNdkZcjXVFK8dB2Y6V6iYnk4y7aS8wdqkuL1BhWBP21XtsCKm1X1jvH3QZJaKfJWvyqjYNVDmresB",
  "key32": "2ZrGD2QArnJkGLGJiwWTdZZaenCgKHkL5ea3EjWNR788gMzMgmUtZeuqerYVmRNpUGU7mgMeh27JK6jRe14xhCPt",
  "key33": "22UqH8n5HSFURetMoaZbwrfqsX3coMurD1NEZFQy2hn5K4a22epQQUZbuE5NobDeSaZjPPEyTJWna16CBA8L1R39",
  "key34": "3dDpUx5ogU98e5tUTdob8EZtFnwcU7p5XinAtWoUPe8LrBQ8MzmTADqxqStPqESNu2JKXjY5ZJP2vh4uLBdH16xj",
  "key35": "MGyLLmm7sRK7BxfzsHWquwHpruZKuoLisP8SsnTFsveescvD1AzSkmreTnSq2bLpRqmPh9W83pJS2xU2qMFnD27",
  "key36": "quxZefexbnhwme5aBGr93HdMecrRwPYr7RUcBkdgcnnMuAXrpAc74erWagNzcCSuVVeJN17tgC3RxXEjyej3LLU",
  "key37": "YA4bMftX5iZH7YSKBvsFYHTuZftWuj3GTq4x8YpK1BA2qqKn2x6EL2bAiMLavJtWcPZs8eNYNqmTiqxkgDJ5nqy",
  "key38": "4dh3hxoZ9bGX8YbCGuN6zUX34pDRdNmfx4UREutMGvCDq7Vm6wH5vmhmF8TCY5rucPa4kaRrYAmwrgyUpmDG8giR",
  "key39": "4Zi4i4x6qRLF2M3Xcn8rQL7hBwkYFFTHzYnAoPu1n9FFvcNaaWwpmxoKnRvZUuuHarUP1kUkFkK8uLbMn8EK4nwy",
  "key40": "muQ1HrWRAcUmqWBSoQXPiGN4zhBW7YFRxUWcbLi3aUivWyXFtXP1nqzL4sLgFiT9Xp74ZZnKJ5LVaDui2vfbLsP",
  "key41": "42u64JhQJrpywKunEnSiYKCbcZKrsBYVzBeNWT9SHfEYpTntHo4ZksC9KFz3DnntdEXA38FHXkhkubVyF1vnW4Gw",
  "key42": "2oreEvEuA2VFxQuMjiAcyfmvT983mdTvZHkvp2mbuvbZFDDV9m8jGq1YvzZMe3fTZptbt7dQNLPb3EAyVym7yuon",
  "key43": "32h5X1rqcPP7sXyNQ9KiciW3QczSE7ibM7PUnkSEFZqUJW2Vymx7u5MLXeWs3d76cFPL8xxh8XdyjvsFcMh72MMY",
  "key44": "avkPF2c8NnikNApuNqtwfTKrdt77iG7jA8FYFWudkJ9SnqHVx6MuziQKt4kzAXVjzuXPdodMXmPoBemW5ahYs7a",
  "key45": "5w2a9WZykg9Hdt3UrHkfsQinD62KtrFUgMCmgUyrJxqZQELpV3rrPEGdo33SrmByxzq5N4uM8hnBZaYidtH7Ra5E",
  "key46": "5GcuB1e6jZRJp2SUCCDuteSeHc6uT3cLfiuCnNsxV5FogKnqy2KGu21B1VJeHA7CpM1Qnfqjy87oU4rQtSK8Bhwi",
  "key47": "3udWrW61LRNRE4qsDaRvz3eS4hdinxtCCxLafg8WZgRc7Gd7RgqaQbuQBkm9fzDV8jzLWj322wFxzAyJ7Z4AxK89",
  "key48": "2pF3o6z7MntawY33m1JhYGwUQwbq7nPQKhsu2UvosjT5yRZ7ki7LraxgGmP1cfPc3LGNnbazX8oQo8FLRToxb5Fk",
  "key49": "4YQi2tLwSnrkyogq9w7tR4diZH51gFKBw84GKYgKP3CUryf928ivWHDmfshvDHb4XcKnif6MR9qazeY3TP9JfFjt"
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
