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
    "4GrdLu6AtMUYhbqMxxy3VZtnz5RFKGPy9j5ap74speexLy9KE6JYJVhU25aD2r3HMTqtpub3eVhgnF6b5dco65su"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PpCCFTB628RqCEvkujCNyuucKr3Uey7DuPsRkcHv5BCmqNgA2MZLwYA1vGbcaNDCvyJhsVwx9i4A3CoSndFcQkK",
  "key1": "2iZ2DNCoxa5k3PbW6cmaFECs3dHQmGTKc4FTa83LkCBLefPitfPcr3fwnsJzoiTsWkLoW7bJY3xH96p5SJbHp3T9",
  "key2": "LKGzfAUv8nEgupyywBLRH1wWRRvaHQM1Cebevna1Z2cvnnDrcVtFRLgmdNQKdH8h3EaJjsqthcsCLuXc3WecMCe",
  "key3": "4VQdvTLh1A6nJTmiTLXTebX7cskMXGQYU8tJb7h2TENvBvjN2HXkPW32NmGwyC92DPaVQGvgd9uKMquMxQnNvPQC",
  "key4": "nnWVkP1shSFLqe6NsW65fNtUYARkGQi6CAgitnwB5rE1KAaSRUt1Bi8NBeyo1BKNCAU4RqfsBEHJrh9cnotyx8c",
  "key5": "4cG1cEJ4WWpZd4avQCcGhwB4jQiw4oJ1Ky7DQw3yVsYSjwcqi4hQCQzYid4V9JArtWAq2xXA4PkfLqBRg9WLBzQa",
  "key6": "3NMDFH6s7xEaTjtYYBa2bAqU1crygfx3cbD3VUQ6zd55qNSNUV7ZZQ3BT1W2TA2oiqeSXQTkBdo2dgPLCjDy7ykZ",
  "key7": "5dAzELo3E7BJy7XuZddsxNmpb1zcfM3DvuYeRxgPGbnQjdWjUNhKJ1qg3zoTtFKqwyTVJGNdZ1AupQm4zzM1Yi3V",
  "key8": "32A9X7mp7BTcHQkWEkmhitGj5y4nYDmvdW44dhphs26JWxgKH2ngqinskv8YHq9aZJx1hmaamHRtv3AVPTEtZfEb",
  "key9": "3WgtjYG3zesa9y2v6di3nm5tcR8zBCPT2qFjDsuzq2G4KZzAb4xnA5TATjbobz6cC8SJtNTj5V1q3o8ptpT88dZr",
  "key10": "3TBwjjkfSZh1Bi1vmzC7mB8ddwyhpJ35qzk7mSYHSWPR5G8kedPCfsjwvok2LboC89dpdiqx5fZAyQ4DmMp7D9fk",
  "key11": "5AWNwzGJuBokrwTfEzNiX8tGe4iqeTFyD99w1tS6tvv6vNCpbAxsmh38bB9Ks33poNJf1W69EgvHNFhuRGSYn7KF",
  "key12": "67X4bwNXFNLbK9z3YH6dddDKRW8M4YF678E8zGqnVScDSCTtFm5R6e7oz5kWdRPK9mwE2U6Rhn9WWppAXm15YhfY",
  "key13": "5ERsWGqPa91XZJPtmk8ihVaE5fd4cMmdM8Zw8kyXMHmPbt3uXwKDavqwnX622j2M6KM2uEhhAyzazURm64NnJbyi",
  "key14": "Y6jxdtQAkh1pMRZVABqTFKWYyadEn5jNomtvQdGs2qd7qDyZHvg7m8WfPyTww6JWmK1LmbAWdZ6yfp8KJ9vDPqg",
  "key15": "35kCFd1ZmbV5oigfYiWZKCKZAe2njhpUBZ5rrkDAY39HVgYu9YFLmPnLhekxNkxbFY2eLZmETBLmEz5Qr2EPNoLR",
  "key16": "28Qbce2sWKdXRadRbT8gwbF3fkWz3LJJcFDJh5YkuKPuFpEqoZ5WBMN7oUEyzu2LrcdZjCtn2iRzdCvKXWLMDjos",
  "key17": "5WDDa2hih8299DRy7JXzD3QTaV3xhMhDynUtyxDYxvsKUGn3mXyR4NeGPjGYNKQArLfYwTp843hpwzHn2i5ySQ8W",
  "key18": "mXrYMr9Df4KErfd9GUcHL5hawk9DpZ3EfmCANEc7gdCqsLcpiofonsCmrdkzZmNwsENwYAbwxKDHDab45fT9u62",
  "key19": "nzJLQitmXnx3spXxrksV76ttLHVgKKcvQFvpixkewpWpQdrKJdqWbd2XQmG6nWNrJjTbFAUdh9hgDpGswNKDEC4",
  "key20": "5BpoQctv3dPWV2rmSsYSnVJVSgs8mvaRe4JKrasozXrF7BFgUJcCTcvnwLdvhkupRVjm1b4qZMqkSgLyT4tjXu2G",
  "key21": "2dEqvUsW2bsmEVY7Eex2TTGwsK2cbafvK1fgijN2oiLiTgr9vDcjwLfrs6cn1jGMFmdUygUbFM6ehKV7jKZkkr3t",
  "key22": "3CKLnALf9wRAqXe93GTVdhRsYhehjUK3eu4MgtMceKDY2jeNnJaEeTWviksoD48ByUQcMjRiyNLACqAkyh9P7zdR",
  "key23": "4k9ZrP5CW9uFzvSFHHVDyr8y9gM6QUGBGSwDXLoAGCYsfnStiPY6pTqeJgUu28ZibxtpZ5TsPHqgyDhPfH3jkicB",
  "key24": "4FvWJDD75Hb2FtXbpV3TjwonUxk36cKmpkUh8GsmpofBXrac9qsZhEvhm1gXnREesgC33MR9BmnPRS7Sssxnnpva",
  "key25": "3aV6uo6rMGMfgeAquQJbrqQu3vTWJrz7MTvgpwK4t3jNziqFnpjKZn727Vvr3hStyenqRAFMD3jMZydnDBekSy38",
  "key26": "5GYV64dC8HJhESMGnB7Sqey94TAdSezfuSAw299zqy3HuYJRXFgk4Ugo2kzMgriE385JxH4LNxWgKbXvqAVbnpjF",
  "key27": "5UMYFnsXrjypSprsmfW5MZn4F8u9UmhPmyYRAmMezTmEDLRRgbYy2a8qCvQFp8L623DaQLRYYJ9FT9ZrjvxfdM13",
  "key28": "4Q3s8xuuw4NcThEqPUL8tPJuTrbuZ9cfWsYLtSFZQ1XrCrymxNryyYpK3j943bMu7iQzuiuveoboRPEEaERcxfuA",
  "key29": "3ZYApD2WFoC1CXLnpJbwcWj9AJ9NsmRSqtUcKHhTcsCxKCCefEGHsTFKZEgzszNqhqZdpsk8SvDPwjjVcopnLFVe",
  "key30": "37WMhZ1Gcj87qmdYSWBFpSuJ5cDQcyEwjGE5VchU6ubyHo78Vbmjbc93VxrJUfC16ufAsHijryEcue9dybyibcjz",
  "key31": "2nsSHrUMU9hvVarfa2otPx3ymyQytfAQB2yfW5iGXDZXXN9mWkPTztTFtNGkACDnshmdDPRfSMprWxY4cSeCcboa",
  "key32": "uVPqLnvjPSRQxzsUnFAHmKn27iUGPAJ9jmbwFEBjSKku4NdqYcf5Mt2PG7b6hHoPy8rqhqQh18abYWh1kqUomAC",
  "key33": "mDcHVuyzo1vqRbd1fNeGUQ4JmpLF4otaKn5YPBFMw5xkno3mwvv1HcRKRZ2Z6SaR1t3MpftfQBfzZAonSyN6zCz",
  "key34": "2iVQtCSASTb6XKyhZqkCMAPigsfYYjH1hXHs31g5nHz11x1iZwhdpCsiJZjPcbS4fU8LjRY7Xfpwr6cd8K72KKq",
  "key35": "25Kvs66cnzrJfJNuYbCcxD2JsRBuHeTxXz6kZy44SgEsTTHiyvQaY4SZMdVQmQEB8HYbAsXjdEnr3JRmQHJBSG5A",
  "key36": "fPKc7vxC4i6zu3MNF9aeBm2EN8XTgt559U1emt6msRNUKBnmk1eyMdFqvevzXmNGph3x592yWzaUHGPUVuDdLF2",
  "key37": "4EaikXamaJmTnxNCuTY3L2tXWbgfR8hjFz8KaPJ9a1xELj6cc5nkC9fNZMWxPWH8Qey5SJ2v8cHi466imNrCZ42E",
  "key38": "2TF2Gh2fDC9T2JrrTCSLsCx6gq25b98TQZhsMuNYwKmJXH4VZuCrdxxRAmYoFhufhQvprcmTq1FyZdKShHzhjtmH",
  "key39": "15dAQtMiXk6mbThN8gNQThBaGzYTWpzDhiMMiGFmkoCu9JHGViEkFcAXajAxaqLNzEp7DrZDhcWCDLdNKbWx17k",
  "key40": "214da7A9YYNtP6V7DjKy8gTzv7me6Z59raMActEfq8dYufzuueZSdkaVdNuxmjpewbeMEjJxvFau7V6Lyb9ejmDU",
  "key41": "3vpdMgZRwbtxWcmMAJgo35MWinxBkVq2A745zmaG3FerkyW2Jg6mViMxk196D7m1FV8Mkd2FmxNBtgRQZVzbbaQg",
  "key42": "2QKPKBG76NaHrGfTuknaMPCJhiG2mUQvPHgQek8ESTUjvd8ykwNvw89XyNb6rH9eyQkWMdpRAmqRkgFpw3j9fMEL"
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
