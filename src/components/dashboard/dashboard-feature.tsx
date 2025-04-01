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
    "2uPVpkey3ZEadvDuZMfYnNdhovAaoXfJ9MVVCyacp5eoaBgk6y2j4TMzJxxnfiwbo9qvW4VuhwsZvbxzbGi7Fugi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ihATg9HLhhjoisiNcoYWoRC29yTcq4nkmpTwZu1acbcWR54rBHxwkt5nFjGdxsrkDhFdjyZWj2DiLhEFo3yXYqm",
  "key1": "2ieAZEEMm9Fpu2k4cSYty1xgSYR4ZAHdVdgH1MT4VxBNh5TKbU5nBh1oBYynNNXKhM1ox5zqh54TeauEkf2ymHjH",
  "key2": "63HwDyRqSSsrCZoUFdgsp2MfZtoVNzZUWNouGgVkTSjKuRd8tQ7p4HCpcudQuFmp7iU1uvvKn4AyZm3VQGcXvHY9",
  "key3": "41hSdBpYZSEu7mmoL2dbEWCEFVP51y2Ws1db2L3fJnvbprE1gC3yB5s3AAhXZ9gvNYe5NXbN3GxrbTvwvQuyZEss",
  "key4": "5hFGBNVdsAPQa94akPgT4sLyibosPgXNDJ9eZitQ6EmAmgsrBGegraiWU3enAXXJuBwUvNcQxz83b8Q44eFWcAq2",
  "key5": "58uAHUPgChiBcNuMtSQiACKLxdUy6Asg187bqzqZPoYNYsj2RnnGA4QJt7rp7TB6p8sdCegZ55Y3WiGQWXxUx93x",
  "key6": "5wxAKm77mk6BJJp4AVYtLD9BqAuozcADhUbx9BdCufH1CvkdfxqATpE7XFPVRyTMonUv4AfZBPfJT5x9BxZdYhVR",
  "key7": "3vAkkdsGTgMYCT9giuLp7tyHc9bWfvPuLVJ1RMcySaZmRUGn8pfCy2p4r2MzShQHLdwFD2sBCBghCvQX6Gr8vWr9",
  "key8": "3FWXuuTqVfeZcZ8oxwr17kXjzy8YgUTTesCpPzZXE6MMxswTwcuQdSDaU6zWxF5fo9Tajz6jsGirZYbHae6LSgVC",
  "key9": "5fQ3kzHqeSHT3JWb8qD2tXynNfGJ89rXBTAaYYgSrirHntZtPK9QHuaWFCHdJMFGf7WvZb8m2Z7fe95oD7QSrm6q",
  "key10": "3PCLsoxVCHcTuXDmKhDcL2NsGNYBfAXgQwCXUxHcsH5gcqDvSuk2oqYpHyuQL8GZwaJyNAWGXtjXe3cSgVRV6are",
  "key11": "2KHTWZYtzZh5RECvunBirCxfPuRx64QgDck1tyBd5GUKTi9mnPrVoS17Rus586P8P6xwMpmA7zGSg5Cm1hMn5icz",
  "key12": "4RUDFayNsQok4ivp5mX4quposZ51pB85J46EnMKULp5UAozow4pNqGWm1NStUV1ThXL3Sgc2EdUPbkVGBPJwFh2a",
  "key13": "4p2jwEWN53pg5ka3tJQVVWPXKudAc4VF89ufgRkhu6tRQbn9sDnwyAF49k5MP6AdarWx1BAtqov5meEUY2zbP7BK",
  "key14": "3SwKpUsTtiNHSRyNxrpukm4y1EkyDiFrrv3DiRs8jc17Qv1a54XrCTkSXNuZibWSWp86bmFxNSB5t2iST8bhHriz",
  "key15": "2SWHcLmEW67Rootpey4pPWqoBoWj8UYL8HPqsDn7TBd5SEzcQC2TydXNW3Ey1xV3ysf1JmcMabZQkbJZVrkqc55e",
  "key16": "4yPqaPPKFT28JB4kAQKGhCW1Tyji2rbQCFYQdzEhMHtpt4t9DNZudZVt82pcKia2C9WC8Erb33qokKtcVyPMykQz",
  "key17": "5pyXct7pqjEsUdBRbEVLyw6gxGPGEzLYUfr2J99td4sehYECivjfsQgmbhzV6vypDziL2bDL2WL3ZLuqW4jZP2dM",
  "key18": "2HWtbZohLbSax59WKXDXATrjk4hNsWBKRnAC4kFfFK1Lpp7ayzdUvPsXraZ8jG6nLZ6ToTL4ddtegr34SRw9FZ5d",
  "key19": "4RdRMkLykqpqx5ks546WFJa3iRuAhE7ZtSrmF1nsjtmoKZPMjDfzGBGTXyKGb3T64TUtdHMBRn9a6aexDYZ4jAsq",
  "key20": "yQqGH4Wm3EcKnmBpN1fFgfL1tKr1sfCzDqpnMiQcAg18THmQGbKcPbTGRgjdGnayGwF1BTT1bGhgCQCdHHRYPVF",
  "key21": "4bP6qHK5j61eiMygV9GF3giQ3G1QpkXT37Ur6B5gZCkyLrZUHm5R32vzV7y7weQxr524HVypV9Apgd2y9cBHLNVG",
  "key22": "wJ1sSFBjaFZVw3jyVkfB38v6rLrSTw1mpJuT9vmygSDz1uZpyJzUfvHc7FVd7P82xcGJMs6hCob2xdubh4rUDoi",
  "key23": "3R7Kf6EumSVXVurhafRhsM9395Mz5BDJqN8En1dQNCL4aPBxy3PnHrdxe4TkQFce8nzJ36iz1RiY8RvHevqrwap2",
  "key24": "4aizt1AWQWZcCCqMSsprF9DWPeQp6EzLhMXdfR51PX2Yby91PfRhYS2SHxcVjxUEGo3bSEAUPYvYc6MtQX71aJ9B",
  "key25": "2b8qoqpxqNgswndkohU3kkxZSvJU16tZErrBDeFVo1SBZawXhwpdQXvyJchww4vS1jBm84NGgCKtk1G15Qd43m4N",
  "key26": "4L3MkjG4aABTMxLk5gjWVSd71FnCy1iiVe45yma7wa2iKkERzaCB45e5spckWMyJNTX4SMaGZDM9qxqtQhUdJWPB",
  "key27": "2tXTVw5bEJ96sh1xHWmEctuTRDVe3ZsHZcTfZnKLtDcLSYuvw9YtjtxvWmDVY5N3g7RVp8ePSeUnxQg4KXuex2Ly",
  "key28": "GFYSB1aG73QX2F4pLCHvjq8RjDvehMw9JNy6Js6pnngDi2XTTXv3AzrEPuK6Yhfn63QpcWGfvZZhhvv1nPZrUCj",
  "key29": "m6bzYohH7Kvmh2bchoCVV5TRRsSycYst4yXYrpJBScrf5NWKW7Ekxy9id9c55w1PizcXfaSB25LJETNyfWJ16Fk",
  "key30": "2udemQvFo6azDuL5qtthSSEszUGzDojeeLUSGtvA63uzmCyXYVQ448CCqGVBkvCknbF53tW4KniWv2UieysX3GEV",
  "key31": "2pcrrjDpyr9J93CP8QXPpgfhXSenYAeoU5eNiv2WR8pZMiHyHKb4CNp7gMGW7rLjQ9NdSLjhWfFcChNwxakr3DLz",
  "key32": "3vpjKZDYiYnfHWvMtiAtRAmNBQ7vrDem4HLUtvzswu1TYaaGSADA8fcrcHT66FXGkrvr5ffveXcPHteFARHQ7yJe",
  "key33": "4F9TXLDjHkgQA77kcpjpEi3nms6uXjfi5M3cAk5YMNkhHN9GH7N6cT6WaExajKEGPXy1U5gGL8SJpVHQrvpAdvag",
  "key34": "5mN8atuw9VXqJbT7HsFG9TPjSipGs3SFUwYwBFtmGCxVWQSvDuPe8mpGPLJjTD92ctJqufJfbNmCY1avBuz9UAQb",
  "key35": "58K7CiUKZUUuUqeZKRymaY6v6fRTEBfLxG8fYWX7CafDSE4AUSYSdWkoAAvdnYhfGuCRpYCAfaNrMBT39uHsZYsA",
  "key36": "39P9tP6XtZhnxoByfHY656hY85qGrf814djLFsaoJfjse6QdV4rRN77kTBF5tveAv5y8wVdqgQCdcHE6MWULbbht",
  "key37": "2YEdQZ56ermrJU1Xosdn9Z6cLkQcbdtVnm3zKfnryPMJRPJCxC89JGmHkKLV7WmXZRdMDFevWtq4HZ2FjJi5ZUUb",
  "key38": "33XdJyEE22dMH15oMdR8849iRS1Fd69dvTL4C3qc94hiGJe2SFz96QpUWFh31JFZXVKp9L7tnjQikNb8Cng2Bq9d",
  "key39": "5LKHWHquUwoX8Wcm6kqyRtKdREicGtwojk7NA5fZNVz6MstB7AwRELwTw6oa3Dv15dBmK8nQwiG9SFhCbTC4gN2K",
  "key40": "5BHV4hQ6Lk4puAGF517nzoSKTxnQba2by7DPyvtbEAntNP2X9saFo5yBoaPLc6nGvmkxKNyxXKkUeRoGtffsh8GC",
  "key41": "25BsjnD5CfGzVm1XYBnDK6jotXneFB56S7nUvzHoZyFs8SpXCgfLieJKvo6hYKFPHgpXQxVkYcxCShwiRxZfPuNQ",
  "key42": "2DzoPth2kYWg5oAxGm6sYXWESoMpZURtYbapnrLi7BvjAn1ZtWsms9qLdxcJR4YSx6WJTJTDdwsLihRofUJ762bC",
  "key43": "2njvRUMFWpwgzhJWgHdNoqo4UMBTbr1digL6bjokmK8FYqqsg8h6NDJvPKuQiX7YFLpkoEKsBuRpHb822a5iMy1Q",
  "key44": "2roweLVZhPVWmuWGe2Em8ywdn9ZUu2NjxeYT5ZU3siET2jh4Hx1P2Lp2f78XVuwGdJhy18BV7yBgWvyK9HozyBSU",
  "key45": "D1bDTvDt2kCx7s9cHjUkuVB3CPQnyCBPd7YNAjiVZ5fhZvL2YEQiCsYPm9m4ZBREUUL15MMEE2MnqFZw4hjfaKk",
  "key46": "5nvBFcCnkM3TK8VXGg2DWLFeZz7EGjiKp42s2qZC7oAZdUpFpyfTQkv6XSbvh2nP1SftwgdKkV3QCmnq5mkvUavR",
  "key47": "4H18NumTaJiuNZ1eDYH69tjeUNu8yfL2CojtcKVaGChDWhdmyKjr3DSyjxVKvfkDnb6sLXGC4TGCtRU6AuS26nsV",
  "key48": "2ZD67WjE4ExxWYcbkqkTYxxKN4yqx5UBzRVQwBtbdBzPnKjc1Z1WgJZiXJDHMFW9RxSLqbhZnfJ2QJ363hMp8jH4",
  "key49": "651ws5W5FZqt2uX1tAt6HkwAU17NgMJNuGxxpkRr6Wpnpf2K4YfNytpjYsEQutYYKJu1cAYKFh6hY3AxBdABGKbM"
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
