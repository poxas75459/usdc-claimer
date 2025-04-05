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
    "VrVamyXqE8vr7c4fUaCg8LsKuLbupMo7WKeyMbJukkJBNH9ChWkHVzkiQzRiUcYja7c1w6pWZnDGUSbWeTvjspS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2GXQsT5qBSg7NbYb1oKgFC5o5P8RwMxWg8KWcfT4r7FUiWAB1Cj44cyhfNB4phnozLk7tQAVyWQNjpdE4WWASCET",
  "key1": "4UMn2i8RTdLKcRwBQ8S3bAC7diyBdbEJnPhVeRBdyKrhbpQ6wseLeDRtdvMzhZf9hXe5Ghf6LKKnadwMA6bu3bmg",
  "key2": "QdV4hZkwdRyyBVMDZVHJH6r2hsw9FNBtoPUBoxpVnNHtepotqoE5XtwC3vD9gkNbXaq1mrQFNcpRAX3jCBTMVRk",
  "key3": "5kDkPkpF3jAht6L1xv156dsz86tgoBthY6CaJuHQy4f6jzrDBGpZEBQsMa9k1VE5q2ChepQy4RvtFMufQKJ1BB7q",
  "key4": "5QnZMFtHR81jARQiqxuDxogRQqaqsZ6aojxJV65NXTKR6553egCFNPBLDNXtsrCWbAzjRGsCtE6yaXidYVs6DGjh",
  "key5": "3ETzTnwgtzYGrjJyFseaPPak9NzWhm61UhhfvdHD4C2CtrLfxgRAA8ZzAxB9PqRsBfjri7SRWpWFrWXy7Kk2kU2x",
  "key6": "2mgYaEnpQvRngVjz1BwrEAewfKamAW7CL9e9YPCCTbrt8WWQvKYJtMVNvmFM4YAYpN1q6eGTznx2AVphL24yKM57",
  "key7": "3UPPHaK12dgELMunhZVEcfTDwX8gjj272nfezzQqQa7pFL6Jt5EhbYS4XwEwHphpjzFFL7fgXqmB867czpU1CEuB",
  "key8": "J2aXf8KrmhxZcRbrEgtoWH9C1FS32bpWKjSDVt4PsVihd1PTVnWpGsMtShZ18nxidMikwYmgXikkJq8vmPiPcYR",
  "key9": "3XUs2u7s3onN7ysNVYhiVRJLvTXeRHPPuBmifuY79bMEUTLGq9gAXkdfqDcCHtT32tiWjdHT5VzdVnCsQkhgnkBK",
  "key10": "3xnxFtzwrFN9xUnYEg4jwJ1XtuxYNjhYxsvGZABUDHxNxDXUrxLZAsMRtJ48vnwqKgfW2fkrQ39N3BgmEwx6ooah",
  "key11": "5yDDHZTLtHh5xTFZVBD3mDb2FPDRtv12iesNASZy9QB9XoHG7XRWLNTfBFRMPNwprRGd8pjGnMLrU239sLcbreBy",
  "key12": "4Wbg99CH4ciiGL2qSWqkHubWC9VPXuMwKRNxPfDpbzvRsf8eGfbGwem7rzVod9XdvBBUuSgyXoywpUF9Euuqd6nb",
  "key13": "4X9AWkutnhUDH5Mh2irgwfxRZ45PwwDjTTTv4kQN4kHj2bvNj8r6nGJR4e6qW2nyMVkCqvPQbq341dHhftE6avKP",
  "key14": "3R6kL9iWn5dHruBULbbWDRMsGTmoCaBHAvz8ewWyouQ6cE5wphqpRfkLEsyGSwTdPBqoTLWCh4d6KpEAEEqYJ5gZ",
  "key15": "3a19YmnkmXGjSKrKDtfMoM3PSH7mKqwLr2xaPtFww2kWpBEVPRxxpX1a6D1mih8C7Rtg7nsGsWaWBGoN3QyBGPrd",
  "key16": "2PPYLuRnsVE1ML8ej3o9vNez5kYEwKwT7tef36qVueo8DUW4xrFVytAtiNunAFmw9a7C3Ciwn8tDczRBeJnCW36U",
  "key17": "5BX84B3hsr6Zshh8E5s2aEoLQLHiuBtpw8EwmER9E3avq28uAgdX5ZQc3zzezeDqnw4EBZGTrMfJRLs2EtGtayx4",
  "key18": "4SqskVrCDieQWBUkX8SPYzasQT5u8oAc1sNcbvcsqzbWZnXFgZgNBwaEBaU3qUmD2sg8qj8YAPJCWXRzfV6s1cMj",
  "key19": "2nhpygN5fTcEnAMVXEqECn54XdhLpXNnzeRt9tLDqxyRMpTYt3djVzEvdV9kunMaUDd26NAA6hq4TggMED9vnKNj",
  "key20": "2ECxNe9oP1WLSXQfHt1USQebyPxFsHkVs8x691AXoyc2SbTVhjWcXtkK41Extk2NBgT5Tps9fXLLgcTiGDBR8Wtq",
  "key21": "5rdZJVuK2iMuojDhEnRZq96sEQKBAqY2zNMP8xjk6kFsJzyrKmw3Ky98buKSUNZUCzrqKYwKK4wsRgzRH9Bjuc95",
  "key22": "4dPrHgjWYzbsNYoWQQMz6EoJE3wbHrxGvR8Ase3iWvREdvA7wLwdV4F5qUMFifJXZDHLgQghmnZ3Qwy22cHehdo7",
  "key23": "3RCfSAHLxhb8G9JXpDww9Ju7FfwHm2BmnutmNhiu3LbETKJf6KMjddx6iSBY9G9kJtE2mL3cCXn124CQmeSZL69v",
  "key24": "4ukxyMidca1y8qUwi19cZgNCLYsurSQi6coxbnbRvryqtnfkb1rBtRJkf14V6Xt6x2CJSHnwZWD9Efp1ijuEr9Ma",
  "key25": "5pb3UKQrPyQXA1CceadBm5XJpHpTAscPAnSpvT8LPFF5ZEGsTYqZe9cYedRftsjDKvkzFLyXkEpTzGemhRVQnE1s",
  "key26": "2kAF8kJQwfmnPpXo1GJ8RBRj99oVumS2R6CjqiDAD12tv1QuLRLh4FjH5j9wxZakuEN9kNrFq2jXP9GMfTEXiANw",
  "key27": "3YdgAFedXUsHfd6EDKKH1L7zuWADpRv4gi67DCqv4kayvSSFyAFcpCMxxndJLBBYzdYXVPehGujpofwkfSL1kY6S",
  "key28": "3UJE5c2xnGMnTz6wyveFoNU5Ne5pwrpEovdMXMmrkUR9Ww7CkG9Q6cGizSzmnv8cFp5pBXm9jJDB7zH7xhdPCSAF",
  "key29": "58anqJtA8fp2HTAvkkja2JMkj7RLYaSJskeY1QYjEHpEw4qUKZT4FazB3mSxyLrEqcsBJVritoqPm9oJ2nDa5UJC",
  "key30": "4bkor1JbxtJu4FZyMNdyhinZ9yfQVbEH5nPHsYwDK9QhgZQ135SGQWv3ZTYF8mtmm37F6vsVuNf5DsQ95aeUbveA",
  "key31": "2aGyks8ZhMK5YMi3mMK7eyXWADRcv4SeGK7aQsnuWRSmhgzi7Qgqs4PXYKGepKkkJvTGu3PJSSdxVALhfnN7Ksmm",
  "key32": "svzd3usEpKGrU1u4Q1KLBz2mk8Fksn9pL3nwe6GfKbvJt4zD7rNQp3zKAeeZppeioKHoc61ssDHwrCnhju9gFMd",
  "key33": "4TAn5VJCo25SSgF4nYLC4uftEMfNib8XeuSDa3wY6AcUNLQmW9bDXyG2PenFRopx9ugjbDxYZRrqoAriXaY9kFwj",
  "key34": "fjSHEKygrGVDuCYgTTCKJamqzK7e49cgUNXspYqvEd6n8fP3ji3EwpNAnZxtXEcGiJsC3m32HijeygHXz2UDMaP",
  "key35": "JxCHJpDfNYUM43ReCNQpLgUE3qKZcJ5yBtYUhTKWwCQFS7utJfkzWLzDY1qJKEKShdKYwyBAGMEJD8UQZ6v2Yx4",
  "key36": "3X2pAatEuXegALuKmVhcTNevgV5SYT6QPqGRApN2PbTiTkMrUV14yUgy1SNrQBaF3T3EDv1po9HqduUAGUEBGhVR",
  "key37": "DDPwaN2ZxxwgbNPhi5SqWrrycvumpdBnq3zhWvws3A57aDgboZFwfmc3Lvdc72Uj5dYrmfGgkxmfERG4XLEbUDE",
  "key38": "5SBcDYXRdriGHfYvgkekFtCqJGBXF8nsvdb8idfJVCQPagrtqWDBePt1zPrK7zoaYwvgvs7gxMQe4QwzUxsTKPdc",
  "key39": "fVWror3JHmhcMTqBCV9RWegWhJYkAvgP6D8bpZ8hQCdhv2TEDXKP5HQQEsRboVubGQVoTdoizxdBYUY6pWFB1uh",
  "key40": "43FGmXc2WoLU1SvE56AekyCBqxKtAtrk3SmdVgA8QrB3vvGjuNYNfxr9UV18s7JH3Y9XrvT1Ebzqaz8mK9ZTy3jc",
  "key41": "2CqkUH7SV2wUvQpWNN8sFGcEX8zks5Gwir9PMnMUZv2T3XN5TA4YbzgRCyPBq7wLncRQy7xcGpnDnSLWWj9hAmKo",
  "key42": "6KYRJmLH3HSooGtfQ4br5k9SKEbKQBcmiD9JAt58qP3yP8Ei9deZ5godzBahn2mnp22XMp1QgtMbjtMPTW52FvD",
  "key43": "5n9TYjzPXvCkRUV7o7UTrrtQc3rEqodVhjoEoT7XSxemxuCaWspPzNFypjT4q1U8qhRGu7BepDpcBsnAtSpQArHj",
  "key44": "5HAFzdqFcCDKjkuDMYP2tvMUjZKeaoYrAYEsqaHme4teY8HpJeVs8kbNMqWJ4pnX6vwND8EoBQiuZ1JyHaJjSSEY"
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
