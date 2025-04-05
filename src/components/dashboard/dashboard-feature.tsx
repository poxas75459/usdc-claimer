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
    "4fbnaNAqBEbz8HJBabBbPSLLfGyFD2MfFiTcWQn8YQs9pdVyimtRHuQZ4gSv59QGh3UsNPgBZchYuMsXW9tLdjLk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45re85RjppF26ZgNtgb6nvsuM8dwQjLGrutCV2eNBE81fgtJkP8aP5fBZQzX8HEJVyqicWuEabHzXKHyVoigeEAu",
  "key1": "2if2MmLM5QMtaSidqciqkpGC4Xkc924E9f2fFw841nLQxjVFg7o9rqAG7FSVfvp2F7Abb7jy8R79gsLSrtxpHw73",
  "key2": "2sxb1AmFrxDDrY4LSJpXAepbmFKsiE6JLfrs72zZuMdaggqGCx1owZQNjU5pdxx3Duq4Sf4PwmThcKfCFnHB8pzd",
  "key3": "3CiPdDHbsQScmWTDtB4nQPHYii1kpEfXXCScFto5tkR5mv6WVdaGK5PNTykgwuo2nrpzjRokExSbcrjvjoyqDYc9",
  "key4": "5Mkd3z1pyvrLsbvbzf4ZtgtejBNxNJi11KTUNMaoNeKJxjXzZ5vrQe3sCezk3u958nd73StyLWCYmRdcxTj4em8J",
  "key5": "aF7qGfMWjfYz9zf8homB1qSMWUAQfXe8wxbtUrLQKTvvJvuJGazXAY1AjUsvDSpd33ptDfxiVAyNcG91TuQTRip",
  "key6": "3JRgziMYEpWX1sexBgyzv2VqfiLeft4r5UP1CZsrT8WCdnz4T4p8fj1x3qmg1WpBED4APVsS944kHH8a5XNtHiYg",
  "key7": "3yMhVL8R14TpN9Noes2BDceustnSjAXGYxa5kDykEPRtY5AKBTCKVcCY5DYyLAm3Nv5gEvAegaie31gFYmhL7w7x",
  "key8": "2UyutVwD2kY7NuLwrESo8C7ozX6fwJrEndvrtpv7XxePRZHQ5VjZvdNa4NVfS3UkZNSfCy2fB2ji1BHAZDGwnkF3",
  "key9": "3YB55i6Z11CtwnWb9vb5oTDQ8JeVKroZWUGu5YbS3W61WNjs5fbvmSKu4H5SabcNRJJZZ8TqTkf5f6TVg22EZmP9",
  "key10": "498cGGrDrd1R4DuspEE5fzJdP5qYJqNWQht5FtyRjUpcmWFsAF9UCw9p6fdephLtYN97UiJ48Cux9iiuthejFd6g",
  "key11": "3dw3UD8aVs1c6R99UhoDzGetnFNf8WBc7NctTWPwRCnURbni1mWJGs6ZN2FjkdsbtzKtV7SkBnt66EKHdsyVsp87",
  "key12": "3S61v2pAbVNETvCDxr8hVsnhSghspbq7Y4cPAKkotuRufMRWA8nSRCjpq9iLJjMZR2wVDG5RsdMpWufoGiugCb8S",
  "key13": "23zzKetjVvghUmwGcWjzfxkgAweK9PK6LgvTTrCjFDFoMN5Zez7poJTNLvuxvo4gW8YAvEDZiX3QgGVXShNZbzkx",
  "key14": "zSdpeiiCXbvNkjDwLeNpPBuHW76zfXYDJ5TrTgiThVBJYcMyJZvWQHQ7WCt3J9pAzasgZB77baT6xBXMkWhsZpW",
  "key15": "3JR1vfoq9h3GzCZbSvQXgzCqGGgZHbgwKJSn3tB87AH4cWdmdM8n735x8ArEv3uiUdb9YY7T7yhQ4nus1WcvpMrx",
  "key16": "5kCKsozDRY2LS46m6zd9hFnXA9TQRCaBck8aMbtKa7HJtEYNDfSVTXEKfKQU3arDN9sjMUnNkYe83Qcx8dyrKT5G",
  "key17": "66s5d6EJX6f2Rz6yo8VkBtbvuzbiaDpBHJjWRpK76AcVCwp2Yi9gCS4UNfpt2geZdw8y4f6kDctp1H39W1FMzstu",
  "key18": "3tU32oZ7Nmms55qKT2e3LtZupW8N2qEGj46dQny1kBFRNniKhRDnrWwKmxuDPyWWiwYU8ub5DksZshmAz7LpaUqt",
  "key19": "2ia9sqbsPPA5L5inDbBovWqiLshbTV2bMnpEcRG239zhMWNMzWa7Dy6eTJ5smhj1DDftJF6FyYdmyBAGZHKmCG6T",
  "key20": "4Ew2DWBG4ENFYydEehQrGpq8bg2sJJkA9t56DSYuJd2debcsPFus4xfkXE9jHRfgXoHo5TaohmtoxD1CoPg3CpSJ",
  "key21": "4LUAF7xHKvGhhmKEXaHdGFmCFfsWfoM9MPJy1v4HCNT2jNKPv9ByPWmL6yrg8xPcZmTrQrYMrh8E1rSYdyGxSEwP",
  "key22": "evru4aDDZ2K3XjG5iYtiD9zLwLFmZgHW4Y9tT1HSBi2K5YEedbfsMqKazwdqoRWUBKptoiA7L15e88LzzsPDTLP",
  "key23": "2ciMT8PpN31Q3uvxLfUTGsFoPp2FXT1Pqaqhk3Yo7vmJa2qtCUPVLuocSdUc1eSM5hGe9okWNseocDPX8zQEzz2Z",
  "key24": "53HEa6xtiGMpWn9ukagWVd2rrLp1KA3P1JZzSaUdX1UYkMYiKre9xaJvATb51Vn7qgH7yeEyUmCDojr2z5giDcNw",
  "key25": "2WEHkS49QYxQ51pydqa4H4TQJLe9ViomL4r25FBnUvjfy7DxDbxSaddNReKGaD6DUPqJUWnyvrnx5c2vFTVAnh9V",
  "key26": "24B17Bz87CB63e7K2ZZzBUiPiPGcEC1wZrPriSh4v7TR7zVXEqN2qRFJCtvgFJuF35jvdzX5cwncZoMhUW8dDrV4",
  "key27": "5BdmpdsL7QEfgnN6yXeJqvbCrfF7pc6Axzj8npWb2L6ib442Sbpk6VJj8wj8JLRF4tx3w2EHeJgxkPddSgntAfd7",
  "key28": "3D8x9BckDLniQBSG7BqcQWWio28srsy8aqBoEuq6RDS1HfpPfXx5AAEG93wiU54dde8r8fthrHp16RxjaMtnkNu8",
  "key29": "4LudsTkQRax4vYER1TatpWYEZAqDS3pySribNE4yqfiL4HEeFyfqo2BY9yLFENhTQajzLnjvyyZhSVYqKRoupeYn",
  "key30": "strCCrKrDCQpq3ih6QwKjCrE4tFwogTKzkXq5oZQtsmdviPTUwZBCQaCgmRyTWkRC8HhRiHF3gguxHAhBNm9NFM",
  "key31": "Aeh5yQ5B6zqdVjpUYoHEVYoohdMfRFLe2cWrgp6fYcazJb8fcmbmGkwx6SZTYf7ZpW1oWoe1XTJDW6sHmRpWANj",
  "key32": "28ybcLTvyyG6Q7LQDTEs7QbjyEdys7yH5hqtE9Ei2hum4CU9M1hBp8yKBMjrexVvRG8HmHfoZuozQg4Abo4hnP38",
  "key33": "2pCXnotA4MWXKqGGhorMjMMKH23WTphwE8m3s4VrPKZadrBADhwqdBa3sUZb8xhqdr9WTPDCtmYdzpnaqw91LZvU",
  "key34": "4yzivMcBcne3p2AazMb8tfn5Dn6xXTwSqDPiMgaZExenqtMxLPq3a2dtiPLwM38pPR37HLT3Rvcozc6Aa7jHgnep",
  "key35": "2pftUTjy23nVk952XCYxSvkZhFVDYxGm6W2gahreQoWREYqcHjGQuc4RqHWBJpEnPvhXKRJhGSWpvoq3cToTpVmP",
  "key36": "21LuFDSSJTygdP7BNXmyjjm645rhcwG9L7RWLH2HejSu7r1CXbnjiSaTfJ955aSM4CXzbcuCRHMZM4bfe14sEQmF",
  "key37": "yWzf5TWWvaPAKqYjbuxZHSFYZdZBgTusN25CxbbWzhFz1GibPGZHMqBW96W3MH3RfoimDwu4h9XC8bTzai2YJ8J",
  "key38": "5ZD7igqBH1GWsTp1YqAZSaQqk6PvkNXiFLGHCzTzbSaqj3GqypGUqGfASQqy6Y7GP5EH2zwWW3cTJP2VFmkLwd5n",
  "key39": "3Mr13RnTGEy6725qSTPZicfDLzxNDh4gE2uvitvTJTiTmCDUs92PNPiAPu2r9UkGhyn2G6sRpfTgvJWiVtPyX6pW"
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
