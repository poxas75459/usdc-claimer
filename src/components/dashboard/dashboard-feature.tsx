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
    "k4F7tXcuJyD4wEKVkNdBCv5VLYF8XbxEEbQTHu8zRVf9Rvd5yzCD2wJuEBt3U6GgA9yBUxFiwqgyJ8EQhrcpP3h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "539V5D7nRVPhbX6BGxcTzpzggUyWqxx7HfFtZUm9PAiKSfkj6NYcd5g1yvJyKhjfgDNNDTp6hVdyuVTNwQmjQEmL",
  "key1": "3TjBTaxrgVku296KmCC7PVYk3kLiLuqdi8BraiGkFDweJV6ybMMoj84N3WAjk4sRWYvpimd8oJu4b5131CbXQ3XP",
  "key2": "4pfCLxHJorsU2mUYHovBFCUMDDmxRVYT1Sajnm63C7NoGhb2f6uMp5uAMpkvSwjpQxAdErKdjoeo5ALVLDKNJqy2",
  "key3": "4XDwWxZDsjfygUJs9uNAL7nNWGjiuHrfTUyKqNZ7TrYjgqs5zxZqgMQmK58bJZYEJQxYcEwKZj47eAXLt91pfZE6",
  "key4": "52e21G7pExxgNugwHJbqRy8E6hT5ZWpUgWV3h13ZGDZhPAzFrpXjNM7Jz4wBL9x245QEWSF56WsKpfFK8yaLRLcn",
  "key5": "3DaMpRFLJnnVBrP7xN2S6YApokYR1d4CbeNyzEQmniQLCahevtqqYkoNvGE8MoJYrZuDRYRT5jXRFAkkmYrgCicg",
  "key6": "3jGnSk1G7up8SUfA6QaXazxZnFweeU6nLMFKXTMGhNjByXCcaVCf9hwbMpetCCXM4AJjK1UzqLWrY1CfFPDQNxJU",
  "key7": "2wEf4jCmGcZSdMP3EJNnqSEVCXJYyXez4Be14qcNzPQzYczkCydp196M6YUq1caseLSoKf5uQj8XoJQSRuP4jXm3",
  "key8": "51q6ajycV9GKgmrvtQqfrwu2hPVdoXo5dusBTtpoPJEem8cCJorXTLs1mFUJk1hxUs5XKT1tdmvCDwhA4qsd95cT",
  "key9": "4B1i39TnhmEihhzcv1sagneHPXUUwPvP3TV179iJyFhLstCDyndqL2p6V4EVAce54EyuVypg5GqJ38Us3AZc6MmW",
  "key10": "5EdWku5ToPE4w5FCgKFK22dY6RQ7y8zTiGbvYuWG8RbDB3pUkSoMeXuZzdu4ZizDwwNyapwNcrR5unw18BXkyBPS",
  "key11": "7xQQipDycyynC1JVWztXAdBknw5fEzjhZiDDSufuZ8KKXW7bcrztugNDENSaqqqoXEAyXuQr3G9HVojkzED7TcS",
  "key12": "sNzncs4GZ3vvh5jbvAvhVWBSYCRYbwSG24JN1EUzd9PuMWPctHdPUoWHMywqKqjWrSTpWnPqFXaYRbxuzFsge2r",
  "key13": "4hqy2ty4TBWqM5rqVEhUcviUU75Eoswd434BReibZFhf6CeokNbwLDYu9XiW9Ya8kooV6qRk2BmhsEEqs45EsyD",
  "key14": "5vysJjFGFJmRX71gUPVcgyVGjHjPvSh3oerbJpuDR5yNfRc21KtgNVNFHpNqNm6GGrT9YooRGcK5nh3KLpNMcVCV",
  "key15": "2641eeFTu9c915viyPzLZyH2eekB7g6CuofMRmRY8r2jqD5uMRCU891HCcymDQd26ERvRsJWiCWnt1jKXUf232ga",
  "key16": "2Kgzi15xGb6TLP64uota6KzUGAjWEqUfLbeDpBTgnqREJpTcznYJXCfNrNkDDgH55PqeGooSpyqt5ZpW52iH4pFE",
  "key17": "5ZhBEC8XietNcf8ESsfKjoZpCcZUw1jstMyGPJ9DxAq1iZhaGf8NWMZAkMh4zbkKAqkJqSVKnrAAknwQm2JqgcNp",
  "key18": "2AkK6RH9BBuvVEy4y9zuTchksh6tKKCWCAojrnke22zxw2naiffh5yLFt5yMbCwMEAoo9XbCP4vUWwX6jhyyme2k",
  "key19": "Hwuxq817pLr5ZVKPZXAShUnke5Lmzm5ViaiRpwy28A9wqhbo9BDQWvcXQZpNpSutyzmar5hdy4STNmQ1TcBLs8H",
  "key20": "4TDs7jFeXiHMUeuJ7CojFrjSms19kErZssKuBxWTiZDoj6F8wbrkruBg5vvmrowEUch2yqTDFbysxB68V6a2ZecC",
  "key21": "5CddRoumTHtCHcYFVyLj5ZBdjg6RrZdTeEq6xSMf6xqPd2AD7tnELA7r9ogMBGTdVW8SiFYSBmcL9uuAmacgrgmA",
  "key22": "3dekQHsjH7ESxKoXEPyR4SwJZLcsqcXwFrQgTsFVQ4a6cFbXcxhiCSG9kf9hHceo594eV8CZqBgks7V9tTxgJ7pQ",
  "key23": "5qeFHuU1j9dJikSKKJnTYfkUFbXK54FVCiGDfrHneChCPniDoUgmbRh5qAuyyJFgz7jVeHCT6onkRwUUsF5RrmG5",
  "key24": "54ATL4jwg1m9pyhYCgCD7LhzZTW1gSAhvyZPbgVgpdTXeCfhdYZzCTXtTqQBypzxKBw1PmAKTEepqV1z7HAzyMRS",
  "key25": "59LrtKevi54e3VearV4uzrDfK55qPr3RSPbwiUnAA96c8pxRDgWmkSmJD2BxDGpiano7ApPF6viYgH4Xg6rWKxxS",
  "key26": "3UFXmL1aytkXGnw9Twsv4cXQfCPSAJ8EHMY9E33DQGGYsQeYwXcYmeUDRsudS68ZjPq1CcXW7mTx62Piyf9BfgQE",
  "key27": "52ymJNG7vGcVLTSRzMnLQj1v2CPvycxBGQbM7YVfNeKHGDZNmQJdticrrmyn2ETHJyXax11EL95kgvcgonqGuJm6",
  "key28": "pwyzNmmT7WWZmHhKbH5UhrcjV2x9tUbY3HSMoLkp7dxtCqkyb6EDrBQURMtJv518j4SMdzenasFjnJUfxzcddcx",
  "key29": "4Fzv2oWtDrrQNxwk8WbKLRrTgngtgHDXQJZLvRSrXepsQ5wdgYexfLFmWhWwrcpth4CbmDk2BCNwiscvJcHqycEk",
  "key30": "PXtGhr8UkzwGbKrxouXTeqLVJH615QuitYiUvfJEV7c8wcMD336KDBisEpw42ZHJaLzfKBfkWQK3riQXUTQZB2Z",
  "key31": "W7UCtmAkyqiddMgiHwXJQX2YzX5P65wAKyrbBYEbhK4knRLEUTqgrtCsVtYNifkXdreXbtokUN5WkemTryBjhap",
  "key32": "GAcxXAPSQhKVNmfZt1ntnoYDmKJomHpTP69kr3aQyyyPX42NZcxvzKVgVn8SAv8VobVqP44T4Y4WbUgCDf7WEj9",
  "key33": "3qyeVfLd7bGVwHoK7eBMtpG1DU1Ls9VJNv8zo1YvLDhxmwHDziBXeoBaPE9ffz3SKLfNkkciqoN5yqjzpLYC2VhV",
  "key34": "4YDvqFNNs7mtp66eumyxxwxm9qUbkCz8DeyQ6q3x37PA8gU2HL2pXafsKPyTfXTGeWQZACA7hmdyR4GkTCCou5gd",
  "key35": "4i262N2p2yvKr9wM5sp9qJhaN9sg8xXwrD2gp3xCAucbeHTb1KMC6fi3FVUn2ThJHmZx7uiTSj9y5DREfmtbByS6",
  "key36": "5uUbkN6QJhB6hCieo5KfjGo9QAKiQvWDV3EtxJhV2XV4BpSTab2TGWwWUcE8vEHce6NdvFfaq7eiKXTQoy7jY7Um",
  "key37": "53ECjTMQ6sTJwqEfcvgEU5VgL8gJmuLArEFH5nzBuqGjC2gb2xhty13Gxf3du3BpGba6phmcr2Pn69teZ9wtNQxu",
  "key38": "23fp5tcmSRQwCnGybhzjK4cTvWFurAcSuLCY3edyAknwjRVHJv8zNBPCyxuMfmK1Lvkf1JxnqcpbemP1whJZeAoi",
  "key39": "3GMKXJbQ5TZYCs2WKuiNisNbCeX2ZVV8vQ3Crarc4nktVXdNrbhJk7gmZ5HZB51onJdmKvy2BjKeC4PgCy1tVYLM",
  "key40": "2AfRrRY1W1bUUrQnH2d9vJJUxuPV4Yf12DLYFa6gtX8bCPXRnqkRLcFumCjapWNs8c1D1CscgDwV9FhcKkfg3PQB",
  "key41": "2LfJHdMmvC4wWkUVorZDovvthtQzkGntCP8GA6mxGdQxx5Seu1d3a6VqCZe63XtdQF5AXmL5mLTshwgMAzKn8QiN",
  "key42": "3YjfTRdTHnPzRzuaK3pdd2fmsUpQH1fnHcsggvwy65BqD9V1c96B2myoddw1RsWMgoTcwKgNcgrzeuLBxQFatnam",
  "key43": "Dcp6ZbGnr3QRLhBaA2udLst6QRCnVM5WRbBEXfh1DdDdpN4vMLkbhawVz6J3Q8yswhUznemW4QKWPoNK2cZQmst",
  "key44": "4TWQr1YLY8UYfjqF9cZCvaoXjtU3oa4WEp98CV3Yk52iF4mjtYAE9A3DmE3vLjkdcZ2cyM29HJYYvK2fg3djtUnF",
  "key45": "2T3gKGQphDABn7cZgBg5X8aLtuMa5wmHYcEjYXSCzxFU29u237kGBoWT5ewkCWEXzuQ6vpzo1YjFncZdnkVYY1tk",
  "key46": "4mtJn9izjqwvcN9ntnvv59BG9WF5uAbkMgPTffAy4nYkiLAWHtSzUMJwrGYVcBACsFcXwhhfTE6Fmfqv2B3Q1UDP"
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
